import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  //isme tıklanınca bütün eski gönderileride görünsğn
  const [userPosts, setUserPosts] = useState([]);
  const model = new PopupModel(); //popupmodelin kopyasını oluştrduk
  //pencere açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);

  return <PopupView userPosts={userPosts} user={user} close={close} />;
};

export default PopupController;
