import { defineStore } from "pinia";
import axios from "axios";

export const useDetailWeblog = defineStore({
    id : "detailBlog",
    state: ()=> ({
        loading :true,
        detailweblog :null,
    }),
    getters:{
        getDetailWeblog(state){
            return state.detailweblog
        }
    },
    actions:{
        async getDetailWeblogFromServer(id){
            await axios.get(`posts/${id}`).then(res =>{
                 this.detailweblog = res.data.data.post;
                //  console.log(this.detailweblog)
        }).catch(error =>{
            console.log(error)
        })
        }
    },
})