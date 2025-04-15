import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore({
  id: "Postblog",
  state: () => ({
    loading: true,
    posts: null,
  }),
  getters: {
   getPosts(state){
    return state.posts
   }
  },

  actions: {
    async getPostsFromServer(fo={}){
        await axios.get(`posts?category_id=${fo.category_id??''}&search=${fo.search??''}&page=${fo.page??''}`).then(res =>{
            this.posts = res.data.data.posts
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
