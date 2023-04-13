<template>
  <div class="h-full bg-[#272d37] flex flex-col box-border">
    <AppHeader />
    <div class="px-40 mt-16 overflow-y-auto" style="height: calc(100% - 160px)">
      <!-- <h3 class="text-white">Horizontal Layout</h3> -->
      <div class="flex flex-row justify-evenly">
        <div id="attack-card">
          <h4>New Incidents</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/1.png" alt="Hacker Img" />
            </div>
            <div>
              <p id="num">
                <strong>{{ new_incidences }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div id="attack-card">
          <h4>Network Attacks</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/2.png" alt="Network Image" />
            </div>

            <div>
              <p id="num">
                <strong>{{ network_attacks }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div id="attack-card">
          <h4>Web Attacks</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ web_attacks }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <!-- <div id="attack-card">
          <h4>Other Attacks</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/4.png" alt="Other Attacks" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ other_attacks }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div> -->
      </div>
      <div class="flex flex-row justify-center mt-8">
        <!-- <div id="stats-card">
          <h4>Hunt Score Sumary</h4>
        </div>
        <div id="stats-card">
          <h4>Insights</h4>
        </div>
        <div id="stats-card">
          <h4>Event Status</h4>
        </div> -->
        <div id="log_card">
          <h4>Logs</h4>
          <div id="content">
            <div class="row sticky">
              <div class="font-bold">Source IP</div>
              <div class="font-bold">Dest IP</div>
              <div class="font-bold">Payload</div>
              <div class="font-bold">Attack</div>
            </div>
            <div v-for="log in logs" class="row">
              <div>{{ log.source_IP }}</div>
              <div>{{ log.dest_IP }}</div>
              <div>{{ log.payload }}</div>
              <div>{{ log.attack }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStatStore } from "../stores/statsStore";
let { new_incidences, network_attacks, web_attacks, logs } = storeToRefs(
  useStatStore()
);
// const statStore = useStatStore();
// statStore.getBasicStats();
// const { startGettingStats } = useStatStore();
// startGettingStats();
// const stopRequests = setInterval(() => {
//   statStore.getBasicStats();
// }, 5000);
// console.log(name.value);
</script>

<style lang="postcss">
#attack-card {
  width: 300px;
  height: 200px;
  background-color: #313844;
  border-radius: 10px;
  /* margin: 10px; */
  padding: 20px;
  padding-bottom: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  > h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 20%;
  }
  > div {
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    #img_wrapper {
      height: 100%;
      > img {
        width: 60px;
        height: 60px;
        margin: 10px;
      }
    }
    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      #num {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
      }
      #my-text {
        color: #fff;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}
#stats-card {
  background-color: #313844;
  height: 290px;
  width: 424px;
  display: inline-block;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: 3px;
  padding: 20px;

  > h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 20%;
  }
}
#log_card {
  background-color: #313844;
  height: 400px;
  width: 1024px;
  display: inline-block;
  border-radius: 3px;
  padding: 20px;
  @apply mb-10;
  > h4 {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 20%;
  }
  > #content {
    @apply bg-white w-full h-4/5 rounded-md pt-2 overflow-y-auto;
    .row {
      @apply flex flex-row justify-between items-center border-b-1 border-gray-500;
      @apply h-10;
      div {
        @apply w-1/4 text-center;
      }
    }
  }
}
</style>
