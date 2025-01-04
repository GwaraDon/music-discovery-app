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
</template>

<script setup>
import { ref } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/vue/24/outline";

const openMenu = ref(false);

const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>