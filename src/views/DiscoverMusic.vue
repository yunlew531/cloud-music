<template>
  <ul class=" flex items-center bg-white py-3 px-6 fixed w-full">
    <li class="mr-5">
      <router-link to="/discoverMusic/personalRecommend"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        個性推薦
      </router-link>
    </li>
    <li class="mr-5">
      <router-link to="/discoverMusic/1"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        歌單
      </router-link>
    </li>
    <li class="mr-5">
      <router-link to="/discoverMusic/1"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        主播電台
      </router-link>
    </li>
    <li class="mr-5">
      <router-link to="/discoverMusic/1"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        排行榜
      </router-link>
    </li>
    <li class="mr-5">
      <router-link to="/discoverMusic/1"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        歌手
      </router-link>
    </li>
    <li class="mr-5">
      <router-link to="/discoverMusic/1"
        active-class="text-xl border-element font-bold" class=" hover:text-black">
        最新音樂
      </router-link>
    </li>
  </ul>
  <div class=" pt-14">
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@layer components {
  .border-element {
    @apply relative;
    &::before {
      content: '';
      @apply w-4/5 border-b-4 border-red-500 left-1/2 -bottom-1.5 transform -translate-x-1/2
        absolute;
    }
  }
}
</style>
