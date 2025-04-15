import {defineStore} from "pinia";
import axios from "axios";


export const useHome = defineStore({
    id : "Home",
    state : () =>({
        loading :true,
        Home :null,
    }),
    getters:{
        getHome(state ){
            return state.Home
        }
    },

    actions:{
        async getHomeFromServer(fo={}){
            // city_id:1
            await axios.get(`home`).then(res =>{
                this.Home = res.data
            }).catch(e =>{
                console.log(e)
            })
        }
    }


})