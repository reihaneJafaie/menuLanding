import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryBlogStore = defineStore({
  id: "cateBlog",
  state: () => ({
    loading: true,
    category: null,
  }),
  getters: {
   getCateGoryPosts(state){
    return state.category
   }
  },

  actions: {
    async getCategoryPostsFromServer(){
        await axios.get("categories").then(res =>{
            this.category = res.data.data.categories
        }).catch(e =>{
            console.log(e)
        })
    }
  },
});
