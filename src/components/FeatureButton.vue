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

    <button @click="toggleButton" className="min-w-[200px] h-auto pl-[45px] pr-[45px] pt-[5px] pb-[5px] w-a relative bg-[#ff375f] min-h-[50px] rounded-full ">
        <h1 v-if="toggle" class="text-white font-bold text-left ">{{ info }}</h1>
        <h1 v-else class="text-white font-bold">{{ title }}</h1>
        <div className="absolute h-full  top-0 right-0 flex  items-center justify-center pr-2">
          <img className="" width="25" src="@/assets/Arrow_Circle_Up.svg"><img>
        </div>
      
     
        
    </button>
</template>