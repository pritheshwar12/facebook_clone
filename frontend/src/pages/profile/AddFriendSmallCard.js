
export default function AddFriendSmallCard({item}) {
  return (
        <div className="addfriendCard">
            <div className="addfriend_imgsmall">
              <img src={item.profile_pricture} alt="" /> 
              <div className="addfriend_infos">
                <div className="addfriend_name">{item.profile_name}</div>
                <div className="light_blue_btn">
                    <img src="../../../icons/addFriend.png" alt="" />
                    Add friend
                </div>
              </div> 
            </div>
        </div>
    )
}
