import { defineStore } from "pinia";
import axios from "axios";

export const uselatesBlogStore = defineStore({
  id: "latesPostblog",
  state: () => ({
    loading: true,
    latesposts: null,
  }),
  getters: {
   getlatesPosts(state){
    return state.latesposts
   }
  },

  actions: {
    async getlatesPostsFromServer(fo={}){
        await axios.get("posts/").then(res =>{
            this.latesposts = res.data.data.latestPosts;
            console.log(this.latesposts)
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
