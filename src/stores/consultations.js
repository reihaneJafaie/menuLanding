import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useConsultations = defineStore({
  id: "Consultations",
  state: () => ({
    loading: true,
  }),
  getters: {},

  actions: {
    async getConsultationsFromServer(fd) {
      let res = null;

      try {
        res = await axios.post(`https://api.fitsmart.ir/v1/front/consultations`, fd);
        this.loading = false;
      } catch (error) {
        const errorData = error.response.data.data;
        let errorMessage = "خطاهای زیر رخ داده است:";
        Object.entries(errorData).forEach(([key, messages]) => {
          messages.forEach(message => {
            errorMessage += `\n${message}`;
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
