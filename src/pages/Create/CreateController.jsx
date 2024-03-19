import { v4 } from "uuid";
import CreateView from "./CreateView";
import creatModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  //modelden bir örnek oluşturduk
  const model = new creatModel();
  //günderi eklendikten sonra anasayfaya yönlendir
  const navigate = useNavigate();
  //form gönderilince çalışacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    //1) inputlardak verileri alıp bir post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());
    // console.log(newPost);
    //2) post nesnesine id değeri ekle
    newPost.id = v4();

    //3) api ye veriyi kaydet(apiye kaydedilecek veriyi model içinde tanımlıyoruz.)kaydettik ve anasayfaa yönlendirdik
    // model.createPost(newPost);//!burada kaydettik
    model.createPost(newPost).then(() => navigate("/"));
  };

  //controllerlar sadece view bileşenini döndürür
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
