<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-title>Войти</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    name="login"
                    prepend-icon="mdi-human-greeting"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>

                <v-btn dark @click="login()" @login="snackbar = true" :loading="loading">Войти</v-btn>
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
  data: () => ({
    drawer: null,
    email: "",
    password: "",
    loading: false //loader on btn
  }),
  methods: {
    // login in firebase witn e-mail and password, then redirect to main page
    login() {
      this.loading = true; //loader switch on after click btn
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.loading = false; //loader switch off
            this.$router.replace("main");
          },
          err => {
            alert(err.message);
            this.loading = false; //loader switch off
          }
        );
    }
  }
};
</script>