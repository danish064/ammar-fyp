<template>
  <div class="h-full bg-[#272d37] flex flex-col box-border">
    <AppHeader />
    <div class="px-40 mt-16 overflow-y-auto" style="height: calc(100% - 160px)">
      <div class="mb-10 flex flex-row justify-evenly">
        <div class="attack-card">
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
        <div class="attack-card">
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
        <div class="attack-card">
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
      </div>
      <div class="flex flex-row justify-center mt-8">
        <div class="log_card">
          <h4>Summary</h4>
          <div id="content">
            <div class="row">
              <div>TCP</div>
              <div>{{ packets.tcp }}</div>
            </div>
            <div class="row">
              <div>udp</div>
              <div>{{ packets.udp }}</div>
            </div>
            <div class="row">
              <div>icmp</div>
              <div>{{ packets.icmp }}</div>
            </div>
            <div class="row">
              <div>http</div>
              <div>{{ packets.http }}</div>
            </div>
            <div class="row">
              <div>https</div>
              <div>{{ packets.https }}</div>
            </div>
            <div class="row">
              <div>ipv6</div>
              <div>{{ packets.ipv6 }}</div>
            </div>
            <div class="row">
              <div>other</div>
              <div>{{ packets.unknown }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-center mt-8">
        <div class="log_card" style="width: 90%">
          <h4>AI Logs</h4>
          <div id="content">
            <div class="row sticky">
              <div class="font-bold">AdaBoostClassifier</div>
              <div class="font-bold">DecisionTreeClassifier</div>
              <div class="font-bold">GaussianNB</div>
              <div class="font-bold">LogisticRegression</div>
              <div class="font-bold">XGBClassifier</div>
              <div class="font-bold">total</div>
              <div class="font-bold">attack</div>
            </div>
            <div v-for="log in ailogs" class="row">
              <div>{{ log.AdaBoostClassifier }}</div>
              <div>{{ log.DecisionTreeClassifier }}</div>
              <div>{{ log.GaussianNB }}</div>
              <div>{{ log.LogisticRegression }}</div>
              <div>{{ log.XGBClassifier }}</div>
              <div>{{ log.total }}</div>
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
let { new_incidences, network_attacks, web_attacks, logs, packets, ailogs } =
  storeToRefs(useStatStore());
</script>

<style lang="postcss" scopped>
.attack-card {
  width: 300px;
  min-width: 300px;
  min-height: 200px;
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
.log_card {
  background-color: #313844;
  height: 400px;
  width: 600px;
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
