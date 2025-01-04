<template>
  <div class="p-8">
    <button
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended songs
    </button>
    <div
      class="py-1.5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-6"
    >
      <CategorySelect
        image="https:picsum.photos/id/30/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/50/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/300/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/310/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/12/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/2/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/12/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/30/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/221/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/212/300/300"
        category="Podcast"
      />
      <CategorySelect
        image="https:picsum.photos/id/330/300/300"
        category="Podcast"
      />
    </div>
  </div>
</template>

<script setup>
import CategorySelect from "../components/CategorySelect.vue";
</script>
