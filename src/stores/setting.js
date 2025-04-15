import { defineStore } from "pinia";
import axios from "axios";

export const useSetting = defineStore('Setting', {
  state: () => ({
    loading: true,
    settingFooter: null,
  }),
  getters: {
    geterSettingFooter(state) {
      return state.settingFooter;
    },
  },

  actions: {
    async getSettingFromServer() {
      try {
        const response = await axios.get("https://api.fitsmart.ir/v1/front/settings");
        const settings = response.data.data.settings;
        let settingGroups = {};
        
        settings.forEach((element) => {
          if (!settingGroups[element.group]) {
            settingGroups[element.group] = {};
          }
          settingGroups[element.group][element.name] = element.value;
        });

        this.settingFooter = settingGroups;
        // console.log(this.settingFooter);
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false; // اطمینان از تنظیم شدن loading به false حتی در صورت بروز خطا
      }
    },
  },
});
