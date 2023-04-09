import { useState } from "react";
export default function Cover({cover}) {
  const [showCoverMenu,SetShowCoverMenu]=useState(false);

  return (
    <div className="profile_cover">
    {
      cover && <img src={cover} className="cover" alt="" />
    }
    <div className="update_cover_wrapper">
      <div className="open_cover_update" onClick={()=>SetShowCoverMenu((prev)=>!prev)}>
        <i className="camera_filled_icon"></i>
        Add Cover Photo
      </div>
      {
        showCoverMenu && <div className="open_cover_menu">
          <div className="open_cover_menu_item hover1">
            <i className="photo_icon"></i>
            select Photo
          </div>
          <div className="open_cover_menu_item">
            <i className="upload_icon hover1"></i>
            upload Photo
          </div>
        </div>
      }
    </div>
  </div>
  )
}
