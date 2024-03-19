import axios from "axios";
import { toast } from "react-toastify";




export default class creatModel {
    async createPost(newPost) {
        try {
            await axios.post('http://localhost:3000/posts', newPost);
            toast.success('Gönderi başarıyla oluşturuldu')
        } catch (err) {
            toast.error('gönderi kaydelirken bir hata oluştu.')
            console.log(err); //şimdi buradan creatcontrollere geötik bu sayfadan bir model oluşturduk.
        }

    }


}