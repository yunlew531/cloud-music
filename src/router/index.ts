import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/discoverMusic/personalRecommend',
    component: Home,
    children: [
      {
        path: 'discoverMusic',
        name: '',
        component: () => import('@/views/DiscoverMusic.vue'),
        children: [
          {
            path: 'personalRecommend',
            name: 'PersonalRecommend',
            component: () => import('@/views/PersonalRecommend.vue'),
          },
        ],
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/PersonalRecommend.vue'),
      },
      {
        path: 'songListDetail/:id',
        component: () => import('@/views/SongListDetail.vue'),
        children: [
          {
            path: 'songList',
            name: 'SongList',
            component: () => import('@/views/SongList.vue'),
          },
        ],
      },
      {
        path: 'friend',
        name: 'Friend',
        component: () => import('@/views/Friend.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
