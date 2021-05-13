<template>
  <div class="home min-h-screen flex flex-col">
    <header class="fixed left-0 right-0 z-20">
      <HeaderNav />
    </header>
    <main class=" flex flex-grow ">
      <div class="fixed top-0 bottom-0 z-10">
        <SideNav />
      </div>
      <div class=" flex-grow pt-16 pl-64">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderNav from '@/components/HeaderNav.vue';
import SideNav from '@/components/SideNav.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HeaderNav,
    SideNav,
  },
});
</script>
