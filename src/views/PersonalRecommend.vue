<template>
  <div class=" max-w-screen-lg  mx-auto mt-7">
    <div class=" h-48 bg-gray-200 mb-5"></div>
    <router-link to="/discoverMusic/1" class="font-bold text-xl flex items-center hover:text-black">
      推薦歌單
      <span class="material-icons">chevron_right</span>
    </router-link>
    <ul class=" grid grid-cols-12 gap-5 mt-3.5">
      <li class=" col-span-3" v-for="song in recommendSongList.data" :key="song.id">
        <router-link :to="`/songListDetail/${song.id}`">
          <span class="block bg-gray-600 h-56 rounded bg-cover bg-center bg-no-repeat"
            :style="{'background-image': `url('${song.picUrl}')`}"></span>
          <h4 class="mt-1.5">{{ song.name }}</h4>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const recommendSongList = reactive({ data: [] });

    function getRecommendSongList() {
      axios.get(`${process.env.VUE_APP_BASE_URL}/personalized`).then((res) => {
        recommendSongList.data = res.data.result;
        // console.log(recommendSongList.data);
      }).catch((err) => {
        console.log(err);
      });
    }

    function getSongListDetail() {
      const id = 6754450319;
      const api = `${process.env.VUE_APP_BASE_URL}/playlist/detail?id=${id}`;
      axios.get(api).then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
    onMounted(() => {
      getRecommendSongList();
      // getSongListDetail();
    });

    return {
      recommendSongList,
    };
  },
};
</script>

<style>

</style>
