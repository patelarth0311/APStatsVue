<script>
export default {
    props: {
    title: String,
    info: String
  },
  data() {
    return {
        toggle: false,
    }
  },
  methods: {
    toggleButton() {
        this.toggle = !this.toggle
    }
  }
}
</script>


<template>

    <button @click="toggleButton" className="min-w-[200px] pl-[45px] pr-[45px] w-a relative bg-[#ff375f] h-[50px] rounded-full ">
        <h1 v-if="toggle" class="text-white font-bold ">{{ info }}</h1>
        <h1 v-else class="text-white font-bold">{{ title }}</h1>
        <img className="absolute bottom-3 right-3 " src="@/assets/Arrow_Circle_Up.svg"><img>
     
        
    </button>
</template>