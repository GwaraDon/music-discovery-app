<template>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Podcast thats are popular
    </button>
    <div class="py-1.5 flex items-center flex-nowrap gap-4">
      <HomeCard
        image="https:picsum.photos/id/30/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/31/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/32/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/33/300/300"
        title="Title"
        sub-title="Sub titles"
      />
    </div>
  </div>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Popular radio station
    </button>
    <div class="py-1.5 flex items-center flex-nowrap gap-4">
      <HomeCard
        image="https:picsum.photos/id/30/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/31/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/32/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/33/300/300"
        title="Title"
        sub-title="Sub titles"
      />
    </div>
  </div>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended songs
    </button>
    <div class="py-1.5 flex items-center flex-nowrap gap-4">
      <HomeCard
        image="https:picsum.photos/id/30/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/31/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/32/300/300"
        title="Title"
        sub-title="Sub titles"
      />
      <HomeCard
        image="https:picsum.photos/id/33/300/300"
        title="Title"
        sub-title="Sub titles"
      />
    </div>
  </div>
</template>

<script setup>
import HomeCard from "../components/HomeCard.vue";
</script>
