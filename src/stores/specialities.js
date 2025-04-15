import { defineStore } from "pinia";
import axios from "axios"

export const useSpecialities = defineStore({
    id : "specialities",
    state :  () =>({
        loading : true,
        specialitiesVar : null
    }),
    getters:{
        getSpecialitiesVar(state){
            return state.specialitiesVar
    }
    },
    actions:{
        async getSpecialitiesFromServer(){
            await axios.get('specialities').then(res=>{
                let Array = []
                res.data.data.specialities.forEach(element => {
                    let obj = {}
                    obj.value = element.id;
                    obj.label = element.title;
                    Array.push(obj)
                });
                this.specialitiesVar = Array
                // console.log(this.specialitiesVar)
            }).catch(e =>{
                console.log(e)
            })
        }
    }
})