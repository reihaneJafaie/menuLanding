import {defineStore} from "pinia";
import axios from "axios";
//  {params:{...fo}}

export const useListDoctor = defineStore({
    id : "listDoctor",
    state : () =>({
        loading :true,
        doctorList :null,
    }),
    getters:{
        getDoctors(state ){
            return state.doctorList
        }
    },

    actions:{
        async getDoctorListFromServer(fo={}){
            // city_id:1
            await axios.get(`doctors?name=${fo.name??''}&province_id=${fo.province_id??''}&city_id=${fo.city_id??''}&speciality_id=${fo.speciality_id??''}&gender=${fo.gender??''}&sort=${fo.sort}&page=${fo.page}`).then(res =>{
                this.doctorList = res.data.data.doctors
            }).catch(e =>{
                console.log(e)
            })
        }
    }


})