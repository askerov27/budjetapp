<template>
  <div>
    <app-carousel></app-carousel>
    <div class="text_block text-center">
      <p>
        <strong>Family budjet</strong> -
        can u to improve ur amount of money
      </p>
      <p>
        here u can find some advise for u and check ur
        income and outcome actions
      </p>
      <qoute-home></qoute-home>
    </div>
    <div class="btn d-flex justify-center ma-4">
      <v-btn color="error">
        <span>Login</span>
      </v-btn>
      <v-btn color="error" :to="'/registration'">
        <span>Registration</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import appCarousel from "../components/appCarousel";
import qouteHome from "../components/qouteHome.vue";
export default {
  components: {
    appCarousel,
    qouteHome
  }
};
</script>
