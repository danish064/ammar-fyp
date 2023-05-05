<template>
  <div class="h-full bg-[#272d37] flex flex-col box-border">
    <AppHeader />
    <div class="px-40 mt-16 overflow-y-auto" style="height: calc(100% - 160px)">
      
      <div class="flex flex-row justify-center mt-8">
        <div class="log_card">
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
      <div class="flex flex-row justify-center mt-8">
        <div class="log_card">
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
let { logs, ailogs } = storeToRefs(useStatStore());
</script>

<style lang="postcss" scoped>
.log_card {
  background-color: #313844;
  height: 400px;
  width: 90%;
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
