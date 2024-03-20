
<script >
import FeatureButton from "./FeatureButton.vue"
export default {
    components: {
        FeatureButton,
    },
  props: {
    title: String,
    img: String,
    info: String,
  }
}
</script>

<template>
<div class="flex flex-col mt-20  items-center gap-y-7">
   
    <img  alt="feature-pic" class="rounded-[36px] shadow-lg" :src="img" width="320" />
    <FeatureButton :title="title" :info="info"></FeatureButton>
  </div>

</template>

