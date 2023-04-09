import { useState } from "react"
import { Formik,Form } from "formik"
import { Link } from "react-router-dom"
import LoginInput from "../../components/inputs/loginInput"
import * as Yup from "yup"
import axios from "axios";

export default function CodeVerification({code,setCode,error,setError,loading,setLoading,setVisible,userInfos}) {
    const validateCode=Yup.object({
      code:Yup.string()
      .  required("code is required")
      .min("5","code must be charaters")
      .max("5","code must be charaters")
      
    })
    const {email}=userInfos;
    const verifyCode=async()=>{
try {
    setLoading(true);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/validateResetCode`,{email,code})
    setError("");
   setVisible(3); 
   setLoading(false);
} catch (error) {
    setLoading(false);
    setError(error.response.data.message)

}
    }
  return (
    <div className="reset_form">
    <div className="reset_form_header">
        Code verification
    </div>
    <div className="reset_form_text">
        Please enter code that been sent to your email.
    </div>
    <Formik
    enableReinitialize
    initialValues={{
                code,
    }}
    validationSchema={validateCode}
    onSubmit={()=>{
        verifyCode()
    }}
    >
    {(formik)=>(
        <Form>
            <LoginInput
                type="text"
                name="code"
                onChange={(e)=>setCode(e.target.value)}
                placeholder="code"
            />
            {
                error && <div className="error_text">{error}</div>
            }
            <div className="reset_form_btns">
                <Link to="/login" className="gray_btn">cancel</Link>
                <button type="submit" className="blue_btn">Continue</button>
            </div>
        </Form>
    )}
    </Formik>
</div>
  )
}
