import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { profileReducer } from "../../functions/reducers";
import axios from "axios";
import Header from "../../components/header";
import "./style.css"
import Cover from "./Cover";
import ProfilePictureInfos from "./ProfilePictureInfos";
import ProfileMenu from "./ProfileMenu";
import PpYouMayKnow from "./PpYouMayKnow";
export default function Profile() {
  const {username}=useParams();
  const {user}=useSelector((state)=>({...state}))
  const navigate=useNavigate();
  var userName=username===undefined?user.username:username;
  const [{ loading, error, profile }, dispatch] = useReducer(profileReducer, {
    loading: false,
    profile: [],
    error: "",
  });
  useEffect(()=>{
    getProfile()
  },[userName])

  const getProfile=async()=>{
    try {
      dispatch({
        type: "Profile_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if(data.ok===false){
        navigate("/profile")
      }else{
        dispatch({
          type: "Profile_SUCCESS",
          payload: data,
        });
      }
     
    } catch (error) {
      dispatch({
        type: "Profile_ERROR",
        payload: error.response.data.message,
      });
    }
  }
  console.log(profile )
  return (
    <div className="profile">
      <Header page="profile"/>
      <div className="profile_top">
        <div className="profile_container">
         <Cover cover={profile.cover}/>
         <ProfilePictureInfos profile={profile}/>
         <ProfileMenu/>
        </div>

      </div>
      <div className="profile_bottom">
        <div className="profile_container">
          <div className="bpttom_container">
            <PpYouMayKnow/>
          </div>
        </div>
      </div>

    </div>
    

  )
}
