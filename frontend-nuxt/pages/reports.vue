<template>
  <div class="h-full bg-[#272d37] flex flex-col box-border">
    <AppHeader />
    <div class="px-40 mt-16 overflow-y-auto" style="height: calc(100% - 160px)">
      <!-- <div class="flex flex-row justify-evenly flex-wrap gap-x-10 gap-y-10">
        <div class="attack-card">
          <h4>TCP</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/1.png" alt="Hacker Img" />
            </div>
            <div>
              <p id="num">
                <strong>{{ packets.tcp }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>UDP</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/2.png" alt="Network Image" />
            </div>

            <div>
              <p id="num">
                <strong>{{ packets.udp }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>ICMP</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ packets.icmp }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>HTTP</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ packets.http }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>HTTPS</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ packets.https }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>IPV6</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ packets.ipv6 }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
        <div class="attack-card">
          <h4>UNKNOWN</h4>
          <div>
            <div id="img_wrapper">
              <img src="/images/3.png" alt="Web Image" />
            </div>

            <div id="text-box">
              <p id="num">
                <strong>{{ packets.unknown }}</strong>
              </p>
              <p id="my-text">Attacks Today</p>
            </div>
          </div>
        </div>
      </div> -->
      <div class="flex flex-row justify-center mt-8">
        <div id="log_card">
          <h4>Logs</h4>
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
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useStatStore } from "../stores/statsStore";
let { new_incidences, network_attacks, web_attacks, logs, packets } =
  storeToRefs(useStatStore());
</script>

<style lang="postcss" scopped>
#log_card {
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
