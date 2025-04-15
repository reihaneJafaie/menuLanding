import { defineStore } from "pinia";
import axios from "axios";

export const useFaqStore = defineStore({
  id: "faq",
  state: () => ({
    loading: true,
    faq: null,
  }),
  getters: {
   getFaq(state){
    return state.faq
   }
  },

  actions: {
    async getFaqFromServer(){
        await axios.get("faqs").then(res =>{
            this.faq = res.data.data.faqs
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
