import { defineStore } from "pinia";
import axios from "axios";

export const useAllDr= defineStore({
  id: "allDr",
  state: () => ({
    loading: true,
    allDr: null,
  }),
  getters: {
   getAllDr(state){
    return state.allDr
   }
  },

  actions: {
    async getAllDrFromServer(){
        await axios.get("home").then(res =>{
            this.allDr = res.data.data.allDoctors
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
