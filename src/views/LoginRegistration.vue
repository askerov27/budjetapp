<template>
  <v-app id="inspire">
    <v-snackbar v-model="snackbar" :timeout="4000">
      <span>пользователь {{email}}</span>
      <v-btn text @click="snackbar = false">Закрыть</v-btn>
    </v-snackbar>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-human-greeting"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn text @click="registr()" :loading="loading">Registration</v-btn>
                <v-btn text @click="login()" @login="snackbar = true" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    email: "",
    password: "",
    loading: false,
    snackbar: false
  }),
  methods: {
    registr() {
      this.loading = true;
      let email = this.email;
      let password = this.password;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.loading = false;
            this.$router.replace("login");
          },
          err => {
            alert(err.message);
            this.loading = false;
          }
        );
    },
    login() {
      this.loading = true;
      let email = this.email;
      let password = this.password;
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            //alert(`You are logged in ${email}`);
            this.loading = false;
            this.$router.replace("main");
          },
          err => {
            alert(err.message);
            this.loading = false;
          }
        );
    }
  }
};
</script>