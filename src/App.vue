<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/appHeader.vue";

export default {
  components: {
    appHeader
  }
};
</script>

