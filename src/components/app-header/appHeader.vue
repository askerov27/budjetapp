<template>
  <div>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Family</span>
        <span class="font-weight-light">budjet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-if="isLoggedIn" class="red--text text--darken-1 d-none d-sm-flex">{{currentUser}}</span>
      <v-btn v-if="isLoggedIn" text @click="logout()" :to="'/login'">Logout</v-btn>
      <v-btn v-if="!isLoggedIn" text class="mr-2" :to="'/login'">Login</v-btn>
      <v-btn v-if="!isLoggedIn" text :to="'/registration'">Registration</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: "unknown"
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
