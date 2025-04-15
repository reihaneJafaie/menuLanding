import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useRegister = defineStore({
    id: "Register",
    state: () => ({
        loading: true,
        Register: null,
    }),
    getters: {
        getRegister(state) {
            return state.Register;
        }
    },
    actions: {
        async getRegisterFromServer(fd, router) {  // اضافه کردن پارامتر router
            let res = null;
            try {
                res = await axios.post(`https://api.fitsmart.ir/v1/doctor/register`, fd);

                Swal.fire({
                    icon: "success",
                    text: "با تشکر شما در فیت اسمارت ثبت نام شدید و به زودی با شما تماس گرفته می شود.",
                }).then(() => {
                    router.push('/'); 
                });

            } catch (error) {
                Swal.fire({
                    icon: "error",
                    text: error.response.data.unknown,
                });
            } finally {
                return res;
            }
        },
    }
});
