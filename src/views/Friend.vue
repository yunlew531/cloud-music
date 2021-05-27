<template>
  <section>{{ data }}</section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { apiPostLogin } from '@/api';
import axios from 'axios';

export default {
  setup() {
    const data = reactive({ data: {} });
    const init = async () => {
      await apiPostLogin({ cellphone: '???', password: '???' });
      axios.get(`${process.env.VUE_APP_BASE_URL}/top/artists?offset=0&limit=30`, { withCredentials: true }).then((res) => {
        console.log(res);
        data.data = res;
      }).catch((err) => {
        console.dir(err);
      });
    };
    onMounted(() => {
      // init();
    });
    return {
      data,
    };
  },
};
</script>

<style>

</style>
