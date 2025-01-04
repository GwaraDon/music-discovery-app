<template>
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
</template>

<script setup>
import MenuItems from './MenuItems.vue';
</script>

<style lang="scss" scoped>

</style>