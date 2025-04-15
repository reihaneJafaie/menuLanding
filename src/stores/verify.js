import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2"


export const useverify = defineStore({
  id: "verify",
  state: () => ({
    loading: true,
    verify: null,
  }),
  getters: {
    getverify(state) {
      return state.verify;
    },
  },

  actions: {
    
    async getVerifyFromServer(fd) {
      let res = null;
      try {
       res = await axios
          .post(`https://api.fitsmart.ir/v1/doctor/verify`, fd);
      } catch (error) {
        Swal.fire({
            icon: "error",
            text: error.response.data.message,
          });
      }finally{
        return res;
      }
    },
  },
});
