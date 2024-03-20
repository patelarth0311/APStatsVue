<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import FooterView from "./views/FooterView.vue"
import FeaturesView from "./views/FeaturesView.vue"

</script>

<template>

<div class="flex flex-col justify-center relative items-center p-10 ">
    <header>
     <div class="flex items-center gap-x-10">
      <img alt="AMStats logo"  class="rounded-[25px] shadow-lg" src="@/assets/AMStatslogo.png" width="105" height="105" />
      <div className="flex flex-col items-start">
        <h1 class="text-2xl font-bold text-white">AMStats</h1>
      <h1 class="text-lg  ">Arth Patel</h1>

      </div>
     </div>
   
  </header>
 

    <div class="flex flex-col justify-center  items-center mb-[200px]">
      <RouterView />
      
    </div>

    <FooterView></FooterView>
  </div>
  


</template>

