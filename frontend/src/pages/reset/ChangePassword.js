import { useState } from "react"
import { Formik,Form } from "formik"
import { Link, Navigate, useNavigate } from "react-router-dom"
import LoginInput from "../../components/inputs/loginInput"
import * as Yup from "yup"
import axios from "axios";
export default function ChangePassword({password,setPassword,conf_password,setConf_Password,error,setError,loading,setLoading,userInfos,setVisible}) {
    const navigate=useNavigate()
    const validatePassword= Yup.object({
        password: Yup.string()
          .required("Enter a combination of at least six numbers,letters and punctuation marks(such as i and &).")
          .min(6,"Password must be atleast 6 characters.")
          .max(36, "password can't be more than 36 characters."),
          
          conf_password:Yup.string().required("conform your password")
          .oneOf([Yup.ref("password")],"pawwords must match")
        });
        const {email}=userInfos;
        const changePassword=async()=>{
                try {
                    setLoading(true);
                    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/changePassword`,{email,password})


                    setError("");
                    navigate("/");

                    
                } catch (error) {
                    setLoading(false)
                    setError(error.response.message.data)
                }
        }

  return (
    <div className="reset_form" style={{height:"310px"}}>
    <div className="reset_form_header">
       Change Password
    </div>
    <div className="reset_form_text">
       Pick a strong password.
    </div>
    <Formik
    enableReinitialize
    initialValues={{
                password,
                conf_password,
    }}
    validationSchema={validatePassword}
    onSubmit={()=>{
        changePassword();
    }}
    >
    {(formik)=>(
        <Form>
            <LoginInput
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder=" New Password"
            />
            <LoginInput
                type="password"
                name="conf_password"
                onChange={(e)=>setConf_Password(e.target.value)}
                placeholder="conform New Password"
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
