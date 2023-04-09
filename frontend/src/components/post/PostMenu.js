import { useState,useRef } from "react";
import Menuitem from "./Menuitem";
import useOnClickOutside from "../../helpers/clickOutside"
export default function PostMenu({postUserId,userId,imageLength ,setShowMenu}) {
    const [test,setTest]=useState(postUserId===userId?true:false)
    const menu=useRef(null);
    useOnClickOutside(menu,()=>{setShowMenu(false)})
  return (
    <ul className="post_menu" ref={menu}>
    {test&&<Menuitem icon="pin_icon" title="pin Post"/>  }
    <Menuitem icon="save_icon" title="Save post" subtitle="add this to your post"/>  
    <div className="line"></div>
    
    {test&&<Menuitem icon="edit_icon" title="Edit Post"/>  }
    {!test&&<Menuitem icon="turnOnNotification_icon" title="Turn on notifications for this post"/>  }
    
    {imageLength && <Menuitem icon="download_icon" title="Download Post"/>}
    {imageLength && <Menuitem icon="fullscreen_icon" title="Enter F ullscreen"/>}
    {test&&<Menuitem img="../../../icons/lock.png" title="Edit Audience"/>  }
    {test&&<Menuitem icon="turnOffNotifications_icon" title="turn off nofitification for this post"/>  }
    {test&&<Menuitem icon="delete_icon" title="turn off tranlations for this post"/>  }
    {test&&<Menuitem icon="date_icon" title="edit date"/>  }
    {test&&<Menuitem icon="refresh_icon" title="Refresh share attachment"/>  }
    {test&&<Menuitem icon="archive_icon" title="move to archive"/>  }
    {test&&<Menuitem icon="trash_icon" title="move to trash" subtitle="item in your trash are deleted after 30 days."/>  }
    {!test && <div className="line"></div>}

    {!test&&<Menuitem img="../../../icons/report.png" title="Report post" subtitle="i'm concerened about this post"/>  }

    </ul>
  )
}
