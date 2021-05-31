<template>
  <section>
    <div class=" py-8 w-full">
      <div class="shadow overflow-hidden border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-50 text-gray-400">
            <tr>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">音樂標題</th>
              <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">歌手</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">專輯</th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">時長</th>
            </tr>
          </thead>
        <tbody class="text-gray-700">
          <tr v-for="song in tracks.data" :key="song.id">
            <td class="w-1/3 text-left py-3 px-4">{{ song.name }}</td>
            <td class="w-1/3 text-left py-3 px-4">{{ song.ar[0].name }}</td>
            <td class="text-left py-3 px-4">{{ song.al.name }}</td>
            <td class="text-left py-3 px-4">05:30</td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { watch, reactive } from 'vue';

export default {
  props: {
    songListData: Object,
  },
  setup(props) {
    const tracks = reactive({ data: [] });
    watch(props.songListData, () => {
      tracks.data = props.songListData.playlist.tracks;
      console.log(tracks.data);
    }, { deep: true });
    return {
      tracks,
    };
  },
};
</script>

<style>

</style>
