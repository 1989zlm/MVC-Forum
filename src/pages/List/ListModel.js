import axios from "axios";



//veri ile alakalı her turlu yapıyı modelde tanımlarız
// model oluşturuurken genelde classları tercih ederiz
export default class ListModel {


    async getPosts() {
        try {
            const res = await axios.get('http://localhost:3000/posts');
            return res.data;
        } catch (err) {
            alert('Üzgünüz bir hata oluştu');
            console.log(err);
        }
    }
}