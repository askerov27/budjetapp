<template>
<div class="main">
  <v-snackbar v-model="snackbar" :timeout="4000">
    <span>Операция была добавлена</span>
    <v-btn text @click="snackbar = false">Закрыть</v-btn>
  </v-snackbar>
  <v-card class="mx-auto mb-4 mt-4" max-width="600" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey">
        <v-img src="https://avatarko.ru/img/kartinka/2/multfilm_pokemon_Slowpoke_1716.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{currentUser}}</v-list-item-title>
        <v-list-item-subtitle>Баланс: 1000 RU</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <Popup @incomeAdded="snackbar = true"></Popup>
    </v-card-actions>
  </v-card>
  <body>
    <v-card class="mx-auto m-4" v-for="(income, idx) in incomes" :key="idx" max-width="600">
      <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
        <v-card-text>
          <div class="card_line">
            <div class="left_side">
              <div class="d-flex justify-center">
                <div>Дата: {{income.data}}</div>
                <div>Категория: {{income.category}}</div>
                <div>{{income.radio}} : {{income.income}} RU</div>
                <v-btn text @click="deleteRow(income.id)">Закрыть</v-btn>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-alert>
    </v-card>
  </body>
</div>
</template>

<script>
import Popup from "../components/Popup";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase";

export default {
  components: {
    Popup
  },
  data() {
    return {
      incomes: [],
      snackbar: false,
      currentUser: "unknown"
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
        this.currentUser = user.email;
        db.collection("incomes").onSnapshot(res => {
          const changes = res.docChanges();

          changes.forEach(change => {
            if (change.type === "added") {
              this.incomes.push({
                ...change.doc.data(),
                id: change.doc.id
              });
            } else if (change.type === "deleted") {
              this.incomes.push({
                ...change.doc.data(),
                id: change.doc.id
              });
            }
          });
        });
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    deleteRow(id) {
      db.collection("incomes")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
          console.log(id);
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  }
};
</script>

<style>
.main {
  max-width: 600px;
  margin: 0 auto;
}
.card_header,
.card_line {
  display: flex;
  justify-content: space-between;
}

.app_header {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.header {
  display: flex;
}
</style>