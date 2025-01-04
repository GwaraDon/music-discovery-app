<template>
  <Header />
  <Sidenav />
  <Main>
    <RouterView></RouterView>
  </Main>
</template>

<script setup>
import { RouterView } from "vue-router";
import Sidenav from "./components/Sidenav.vue";
import Header from "./components/Header.vue";
import Main from "./components/MainSection.vue"
</script>
