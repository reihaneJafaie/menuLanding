import {defineStore} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const useContact = defineStore({
    id : 'Contact',
    state:() =>({
        loading :true ,
    }),
    getters:{},
    actions:{
        async getContactFromServer(fd){
            let res =null;
            try{
                res = await axios.post(`contacts`,fd);
                Swal.fire({
                    
                    icon: "success",
                    text: res.data.message,
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