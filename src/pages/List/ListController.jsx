import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

const ListController = () => {
  const [posts, setPosts] = useState([]);
  //isme tıklanında arayüze açılan modal için state tutuyoruz
  const [selectedUser, setSelectedUser] = useState(null);

  //class tan bir örnek (clone gibi) oluşturduk.
  const model = new ListModel();

  //useeffect ile kullanıcı etkileşimi izlediğimizden controller dosyasında tanımlarız.
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      posts={posts}
      selectedUser={selectedUser} //buradan listview geçip prop yaptık
      setSelectedUser={setSelectedUser}
    />
  );
};

export default ListController;
