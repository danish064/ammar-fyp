<template>
  <div class="h-20 flex flex-row justify-between items-center px-24">
    <img class="h-6" src="/images/logo3.png" alt="Eagle Eye" />

    <div id="my-buttons">
      <button
        @click="startStats"
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        Start
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
        @click="stopStatsCallback"
      >
        Stop
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        <NuxtLink to="/">Home</NuxtLink>
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        <NuxtLink to="/reports">Reports</NuxtLink>
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        Alerts
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        <NuxtLink to="/logActivity">Log Activity</NuxtLink>
      </button>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useStatStore } from "../stores/statsStore";
const { startGettingStats, getBasicStats } = useStatStore();
const statStore = useStatStore();
const { stopStats } = storeToRefs(statStore);
// const stopStats = useStatStore().stopStats;

const stopStatsCallback = () => {
  // stopStats = true;
  console.log("Stopping Stats");
  // console.log(stopStats.value);
  clearInterval(stopStats.value);
  stopStats.value = null;
};

const startStats = async () => {
  if (stopStats.value == null) {
    console.log("Starting Stats");
    await getBasicStats();
    startGettingStats();
  }
};
</script>
