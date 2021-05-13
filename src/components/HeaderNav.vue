<template>
  <div class=" bg-red-500 h-16 flex justify-between items-center px-6 text-gray-200">
    <div class="flex items-center">
      <a href="javascript:;" class="duration-200 text-white">
        <h1 class="flex items-center">
          <span class="material-icons">music_note</span>
          云云音樂
        </h1>
      </a>
      <div class="relative">
        <input class="ml-11 bg-red-600 rounded-full pl-8 py-1 focus-visible:outline-none"
          type="text" placeholder="搜尋音樂">
        <span class="material-icons absolute left-12 top-1">search</span>
      </div>
    </div>
    <ul class=" flex items-center">
      <li>
        <a href="javascript:;" class="duration-200 flex items-center hover:text-white">
          <span class="material-icons">account_circle</span>
          未登錄
        </a>
      </li>
      <li>
        <a href="javascript:;" class="duration-200 hover:text-white">
          <span class="material-icons my-auto block ml-3">settings</span>
        </a>
      </li>
      <li>
        <a href="javascript:;" class="duration-200 hover:text-white">
          <span class="material-icons my-auto block ml-3">feedback</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
};
</script>

<style>

</style>
