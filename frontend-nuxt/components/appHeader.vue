import { useStatStore } from '../stores/statsStore';

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
      >
        Stop
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        Reports
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        Alerts
      </button>
      <button
        class="m-[10px] px-[10px] bg-[#343c49] text-[#a7afb7] cursor-pointer"
      >
        Log Activity
      </button>
    </div>
  </div>
</template>
<script setup>
import { useStatStore } from "../stores/statsStore";
const { startGettingStats, stopStats, getBasicStats } = useStatStore();

const startStats = async () => {
  if (!stopStats) {
    // console.log("Starting Stats");
    await getBasicStats();
    startGettingStats();
  }
};
</script>
