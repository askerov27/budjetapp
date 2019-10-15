<template>
  <v-app id="inspire">
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
                <v-btn text @click="login()" :loading="loading">Login</v-btn>
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
    loading: false
  }),
  methods: {
    registr() {
      this.loading = true;
      let email = this.email;
      let password = this.password;
      console.log(this.email, this.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`account create for ${user.email}`);
            this.loading = false;
            this.$router.push("/login");
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
      console.log(this.email, this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          user => {
            alert(`You are logged in ${email}`);
            this.loading = false;
            this.$router.push("/main");
          },
          err => {
            alert(err.message);
            this.loading = false;
          }
        );
      console.log(firebase.auth().currentUser.email);
    }
  }
};
</script>