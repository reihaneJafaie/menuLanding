import { defineStore } from "pinia";
import axios from "axios";

export const usedetailDoctor = defineStore({
    id : "doctorPage" ,
    state: ()=>({
        loading : true ,
        doctor : null
    }),
    getters:{
        getDetailDoctor(state){
            return state.doctor
        }
    },
    actions:{
        async getDetailDoctorFromServer(id){
            await axios.get(`doctors/${id}`).then(res =>{
                this.doctor = res.data.data.doctor;
                
            }).catch(e =>{
                console.log(e)
            })
        }
    }
})