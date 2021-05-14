<template>
  <section>
    <div class="p-5 flex">
      <div class="bg-gray-300 h-48 w-48 bg-no-repeat bg-center bg-cover"
        :style="{'background-image' : 'url('+ songListData.playlist.coverImgUrl +')'}"></div>
      <div class="ml-5 flex flex-col justify-between">
        <div>
        <div class=" flex">
          <span class="border border-red-600 text-red-600 px-1 rounded self-start text-sm">歌單</span>
          <h2 class="ml-3 leading-none text-2xl font-bold p-0">{{ songListData.playlist.name }}</h2>
        </div>
        <div class="flex items-center text-sm text-gray-600 mt-3">
          <div class="block bg-gray-900 w-7 h-7 rounded-full"></div>
          <p class="ml-3" v-if="songListData.playlist.creator">
            {{ songListData.playlist.creator.nickname }}</p>
          <p class="ml-3">2015/03/03創建</p>
        </div>
        <div class="mt-3">
          <div class="flex items-center">
            <button type="button" class=" bg-red-600 rounded-l-full px-3 py-0.5 text-white border-r
              border-gray-200 border-opacity-25 flex self-stretch hover:bg-red-700
                active:bg-red-800">
              <span class="material-icons">play_arrow</span>
              播放全部</button><button type="button"
              class=" bg-red-600 rounded-r-full px-3 py-0.5 text-white flex self-stretch
                hover:bg-red-700 active:bg-red-800">
              <span class="material-icons">add</span>
            </button>
            <button
              type="button" class="border border-gray-500 rounded-full px-3 py-0.5 ml-3 flex
                hover:bg-gray-100 active:bg-gray-200">
              <span class="material-icons">create_new_folder</span>
              收藏
            </button>
            <button type="button" class="border border-gray-500 rounded-full px-3 py-0.5 ml-3 flex
              hover:bg-gray-100 active:bg-gray-200">
              <span class="material-icons">group</span>
              分享
            </button>
            <button type="button" class="border border-gray-500 rounded-full px-3 py-0.5 ml-3 flex
              hover:bg-gray-100 active:bg-gray-200">
              <span class="material-icons">file_download</span>
              下載全部
            </button>
          </div>
      </div>
      </div>
        <div class=" flex flex-col justify-between">
          <p class="">標籤 : {{ showListTags }}</p>
          <p class="">歌曲 : {{ songListData.playlist.trackCount }}</p>
          <p class="truncate w-96">
            簡介 : {{ songListData.playlist.description }}</p>
        </div>
      </div>
    </div>
    <router-link class="ml-5" :to="`/songListDetail/${pageId}/songList`"
      active-class="font-bold router-active">歌曲列表
    </router-link>
    <router-link class="ml-5" :to="`/songListDetail/${pageId}/comment`"
      active-class="font-bold router-active">評論(31)
    </router-link>
    <router-link class="ml-5" :to="`/songListDetail/${pageId}/save`"
      active-class="font-bold router-active">收藏者
    </router-link>
    <router-view></router-view>
  </section>
</template>

<script>
import {
  ref,
  reactive,
  onMounted,
  computed,
} from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const pageId = ref(0);
    const route = useRoute();
    const songListData = reactive({ playlist: {} });

    const showListTags = computed(() => {
      let tagString = '';
      if (songListData.playlist.tags) {
        tagString = songListData.playlist.tags.join(', ');
      }
      return tagString;
    });

    function getSongListDetail() {
      pageId.value = route.params.id;
      const api = `${process.env.VUE_APP_BASE_URL}/playlist/detail?id=${pageId.value}`;
      axios.get(api).then((res) => {
        songListData.playlist = res.data.playlist;
        console.log(songListData);
      }).catch((err) => {
        console.log(err);
      });
    }
    onMounted(() => {
      getSongListDetail();
    });
    return {
      pageId,
      songListData,
      showListTags,
    };
  },
};
</script>

<style lang="scss">
@layer components {
  .router-active {
    @apply relative;
    &::before {
      content: '';
      @apply absolute w-4/5 left-1/2 transform -translate-x-1/2 h-full border-b-2 border-red-600
        -bottom-1.5;
    }
  }
}
</style>
