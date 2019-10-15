<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import appHeader from "./components/app-header/appHeader.vue";

export default {
  components: {
    appHeader
  }
};
</script>
