import {defineStore} from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const useFormDoctor = defineStore({
    id : 'formDoctor',
    state:() =>({
        loading :true ,
    }),
    getters:{},
    actions:{
        async getFormDoctorFromServer(fd, id){
            let res =null;
            try{
                res = await axios.post(`doctor-comments/${id}`,fd);
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