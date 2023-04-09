import {useState} from "react"
import "./style.css"
import axios from "axios"
export default function SendVerification({user}) {
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const sendverificationLink=async()=>{
try {
    const {data}=await axios.post(`${process.env.REACT_APP_BACKEND}/sendVerification`,{},
    {
        header:{
            Authorization:`Bearer ${user.token}`
        }
    }
    );
    setSuccess(data.message);
} catch (error) {
    setError(error.response.data.message);
}
    }
  return (
    <div className="send_verification">
        <span>
            Your account is not verified.Verify your account before
            it gets deleted after a month from creating.
        </span>
        <a onClick={()=>{
            sendverificationLink();
        }}>
            Click here to resend verification Link
        </a>
        {success && <div className="success_text">{success}</div> }
        {error && <div className="erroe_text">{error}</div> }
    </div>
  )
}
