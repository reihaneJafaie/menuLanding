import {defineStore} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const useFormWeblog = defineStore({
    id : 'formWeblog',
    state:() =>({
        loading :true ,
    }),
    getters:{},
    actions:{
        async getFormWeblogFromServer(fd, id){
            let res =null;
            try{
                res = await axios.post(`comments/${id}`,fd);
                Swal.fire({
                    
                    icon: "success",
                    text: res.data.message,
                    // showConfirmButton: false,
                    timer: 3000
                  });

            }
            catch(error){
                console.log(e)
            }finally{
                return res;
            }
        }
    }
})