import { defineStore } from "pinia";
import axios from "axios";

export const useNameDr= defineStore({
  id: "nameDr",
  state: () => ({
    loading: true,
    names: null,
  }),
  getters: {
   getNameDr(state){
    return state.names
   }
  },

  actions: {
    async getNameDrFromServer(){
        await axios.get("home").then(res =>{
            this.names = res.data.data.doctors
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
