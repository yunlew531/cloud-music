<template>
  <section class=" w-64 p-1 bg-gray-50 border-r border-gray-300 px-1 pt-16 h-full">
    <ul>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/discoverMusic/personalRecommend">
          <h2>發現音樂</h2>
        </router-link>
      </li>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/video">
          <h2>影片</h2>
        </router-link>
      </li>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/friend">
        <h2>朋友</h2></router-link></li>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/liveVideo">
          <h2>直播</h2>
        </router-link>
      </li>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/privateFM">
          <h2>私人FM</h2>
        </router-link>
      </li>
    </ul>
    <h3 class="text-sm text-gray-600 pl-3 py-2">我的音樂</h3>
    <ul>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/localeMusic">
          <h2 class=" flex items-center">
            <span class="material-icons my-auto pr-1">music_video</span>
            本地音樂
          </h2>
        </router-link>
      </li>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/downloadManage">
          <h2 class=" flex items-center">
            <span class="material-icons pr-1">arrow_circle_down</span>
            下載管理
          </h2>
        </router-link>
      </li>
    </ul>
    <h3 class="text-sm text-gray-600 pl-3 py-2">創建的歌單</h3>
    <ul>
      <li>
        <router-link class="my-1 block hover:text-black hover:bg-gray-200"
          active-class="bg-gray-200" to="/favoriteMusic">
          <h2 class=" flex items-center">
            <span class="material-icons pr-1">favorite_border</span>
            我喜歡的音樂
          </h2>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {

};
</script>

<style>

</style>
