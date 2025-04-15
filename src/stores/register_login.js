import { defineStore } from "pinia";
import axios from "axios";
// import Massege from "@/components/icon/massege.vue";
import Swal from "sweetalert2";

export const useregisterLogin = defineStore({
  id: "registerLogin",
  state: () => ({
    loading: true,
  }),
  getters: {},

  actions: {
    async getRegisterLoginFromServer(fd) {
      let res = null;

      try {
        res = await axios.post(
          `https://api.fitsmart.ir/v1/doctor/register-login`,
          fd
        );
        this.loading = false;
      } catch (error) {

        const errorData = error.response.data.data;
        let errorMessage = "خطاهای زیر رخ داده است:";
        Object.entries(errorData).forEach(([key, messages]) => {
          messages.forEach(message => {
            errorMessage = `\n${message}`;
          });
        });

        Swal.fire({
          icon: "error",
          text: errorMessage,
        });

        this.loading = false;

      } finally {
        return res;
      }
    },
  },
});




