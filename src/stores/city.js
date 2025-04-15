import { defineStore } from "pinia";
import axios from "axios";

export const useCity = defineStore({
    id: "city",
    state: () => ({
        loading: true,
        city: [],
    }),
    getters: {
        getCity(state) {
            return state.city;
        },
    },
    actions: {
        

        async getCityFromServer(id='') {
            await axios.get(`cities${id?'/'+id:''}`).then(res => {
                let Array = [];
                res.data.data.cities.forEach((element) => {
                    let obj = {};
                    obj.value = element.id;
                    obj.label = element.name;
                    Array.push(obj);
                });
                this.city = Array;
            }).catch((e) => {
                console.log(e);
            });
        },
    },
});
