import { defineStore } from "pinia";
import axios from "axios";

export const useProvinces = defineStore({
  id: "provinces",
  state: () => ({
    loading: true,
    provinces: null,
  }),
  getters: {
    getProvinces(state) {
      return state.provinces;
    },
  },

  actions: {
    async getProvincesFromServer() {
      await axios
        .get("provinces")
        .then((res) => {
          let Array = [];
        //   console.log( res.data.data.provinces)
          res.data.data.provinces.forEach((element) => {
            let obj = {};
            
            obj.value = element.id;
            obj.label = element.name;
            Array.push(obj);
          });
          this.provinces = Array;
        //   console.log(this.provinces);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
