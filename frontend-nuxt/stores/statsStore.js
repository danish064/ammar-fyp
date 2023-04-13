import { defineStore } from "pinia";

export const useStatStore = defineStore("stats", {
  state: () => ({
    name: "John Doe",
    new_incidences: 0,
    network_attacks: 0,
    web_attacks: 0,
    other_attacks: 0,
    logs: [],
    stopStats: null,
    pollingInterval: 1000,
  }),
  getters: {},
  actions: {
    async getBasicStats() {
      // Get basic stats from API
      const fetchOptions = {
        method: "GET",
      };
      let { data, error } = await useFetch(
        "http://localhost:3001/api/stats/basic/",
        fetchOptions
      );
      //   console.log(data.value, error);
      if (data.value) {
        // console.log(data.value.network_attacks);
        ({
          new_attacks: this.new_incidences,
          network_attacks: this.network_attacks,
          web_attacks: this.web_attacks,
          other_attacks: this.other_attacks,
        } = data.value[0]);
      }
    },
    async getLogs() {
      // Get basic stats from API
      const fetchOptions = {
        method: "GET",
      };
      let { data, error } = await useFetch(
        "http://localhost:3001/api/stats/logs/",
        fetchOptions
      );
      //   console.log(data.value, error);
      if (data.value) {
        this.logs = data.value;
      }
    },
    startGettingStats() {
      // Start getting stats from API
      this.stopStats = setInterval(() => {
        console.log("Set interval called");
        this.getBasicStats();
        this.getLogs();
      }, this.pollingInterval);
    },
  },
});
