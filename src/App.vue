<template>
  <div
    class="px-6 bg-black h-[60px] w-[calc(100%-240px)] text-spotify-white flex items-center justify-between fixed right-0 z-50"
  >
    <div class="flex items-center gap-4">
      <button
        class="rounded-full bg-base-black p-1 transition-color duration-300 hover:bg-spotify-black"
      >
        <ChevronLeftIcon class="text-spotify-white size-6" />
      </button>
      <button
        class="rounded-full bg-base-black p-1 transition-color duration-300 hover:bg-spotify-black"
      >
        <ChevronRightIcon class="text-spotify-white size-6" />
      </button>
    </div>
    <button
      @click="toggleMenu"
      class="flex items-center gap-1 bg-base-black rounded-full py-1 px-2 transition-color duration-300 hover:bg-spotify-black"
    >
      <div class="flex items-center gap-2">
        <img
          src="https://i.scdn.co/image/ab67757000003b82fbd57a996b588ca230b3a3a2"
          class="rounded-full w-8 h-8"
          alt=""
        />
        <span class="text-spotify-white"> Binay Maharjan </span>
      </div>
      <ChevronDownIcon class="text-spotify-white size-4" v-if="!openMenu" />
      <ChevronUpIcon v-else class="text-spotify-white size-4" />
    </button>
    <div
      v-if="openMenu"
      class="fixed w-[190px] bg-base-black shadow-lg z-50 top-[52px] right-6 rounded"
    >
      <ul class="text-gray-200 font-semibold text-sm">
        <li class="px-3 py-2 hover:bg-spotify-black border-b border-gray-600">
          Profile
        </li>
        <li class="px-3 py-2 hover:bg-spotify-black">Logout</li>
      </ul>
    </div>
  </div>
  <aside class="h-full p-6 w-[240px] fixed z-50 bg-black" id="side-nav">
    <RouterLink to="/">
      <img src="/images/icons/spotify-logo.png" alt="logo" class="w-[124px]" />
    </RouterLink>
    <ul class="mt-8">
      <RouterLink to="/">
        <MenuItems
          :icon-size="24"
          name="Home"
          icon-string="home"
          page-url="/"
          class="ml-px"
        />
      </RouterLink>
      <RouterLink to="/search">
        <MenuItems
          :icon-size="24"
          name="Search"
          icon-string="search"
          page-url="/search"
          class="ml-px"
        />
      </RouterLink>
      <RouterLink to="/library">
        <MenuItems
          :icon-size="24"
          name="Library"
          icon-string="library"
          page-url="/library"
          class="ml-px"
        />
      </RouterLink>
    </ul>
    <ul class="mt-4 border-b border-gray-700">
      <MenuItems
        :icon-size="24"
        name="Create Playlist"
        icon-string="playlist"
        page-url="/playlist"
        class="ml-px"
      />
      <MenuItems
        :icon-size="24"
        name="Liked Songs"
        icon-string="liked"
        page-url="/liked"
        class="ml-px"
      />
    </ul>
    <ul class="space-y-3 mt-4">
      <li
        class="cursor-pointer font-semibold text-xs text-gray-300 hover:text-spotify-white"
      >
        Playlist 1
      </li>
      <li
        class="cursor-pointer font-semibold text-xs text-gray-300 hover:text-spotify-white"
      >
        Playlist 2
      </li>
      <li
        class="cursor-pointer font-semibold text-xs text-gray-300 hover:text-spotify-white"
      >
        Playlist 3
      </li>
      <li
        class="cursor-pointer font-semibold text-xs text-gray-300 hover:text-spotify-white"
      >
        Playlist 4
      </li>
    </ul>
  </aside>
  <main
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1c1c1c] to-black"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import MenuItems from "./components/MenuItems.vue";

const openMenu = ref(false);

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>
