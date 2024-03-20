
<script>

import Feature from "../components/Feature.vue"
import viewOne from "../assets/IMG_2933.png"
import viewTwo from "../assets/IMG_2935.png"
import viewThree from "../assets/IMG_2936.png"
import viewFour from "../assets/IMG_2938.png"
import viewFive from "../assets/IMG_2939.png"
import viewSix from "../assets/IMG_2940.png"
import viewSeven from "../assets/IMG_2941.png"
import viewEight from "../assets/IMG_2942.png"
import viewNine from "../assets/IMG_2943.png"
import viewTen from "../assets/IMG_2944.png"
import viewEleven from "../assets/IMG_2945.png"
export default {
  components: {
    Feature
  },
  data() {
    return {
     
      features: [
      {id: 1, img: viewOne, title: "AMStats", info: "Get insights into your Apple Music activity."},
{id: 2, img: viewTwo, title: "Overview", info: "See how much you played and listened to all your songs, artist, and albums."},
{id: 3, img: viewThree, title: "Player", info: "A beautiful interface to show your playing song."},
{id: 4, img: viewFour, title: "Songs", info: "Search through your songs."},
{id: 5, img: viewFive, title: "Learn", info: "Learn more about your songs."},
{id: 6, img: viewSix, title: "Explore", info: "Learn even more with your artists and albums."},
{id: 7, img: viewSeven, title: "Dive Deep", info: "Gain visibility into your listening trend of a song."},
{id: 8, img: viewEight, title: "Keep Track", info: "Track your monthly listening."},
{id: 9, img: viewNine,title: "Albums", info: "Search through your albums."},
{id: 10, img: viewTen, title: "Artists", info: "And search through your artists."},
{id: 11, img: viewEleven, title: "Browse", info: "Search even more."},
      ]
    }
  },
  methods: {

  }
}
</script>

<template>

    <div class="flex flex-row gap-y-20 " v-for="feature in features" :key="feature.id">
      <Feature :title="feature.title" :img="feature.img" :info="feature.info"/>
    </div>

</template>


