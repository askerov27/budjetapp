<template >
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn block v-on="on" color="red">Добавить</v-btn>
    </template>
    <v-card max-width="600px">
      <v-card-title>
        <v-card class="mx-auto">
          <v-card-text>
            <v-col class="d-flex flex-column">
              <h3>{{ radios || 'null' }}</h3>
              <v-textarea label="Сумма" v-model="income" auto-grow outlined row-height="2"></v-textarea>

              <v-select v-model="category" :items="items" label="Категория" outlined></v-select>

              <v-radio-group v-model="radios" row>
                <v-radio label="Доход" value="Доход"></v-radio>
                <v-radio label="Расход" value="Расход"></v-radio>
              </v-radio-group>
            </v-col>
            <data-picker v-on:dataTake="update($event)"></data-picker>
          </v-card-text>
          <v-card-actions>
            <v-btn text block @click="addItem" :loading="loading">Добавить</v-btn>
          </v-card-actions>
        </v-card>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import dataPicker from "../components/dataPicker.vue";
import db from "../firebase";
export default {
  components: {
    dataPicker
  },
  data: () => ({
    items: ["Еда", "Зарплата", "Платежи", "Машина"],
    radios: "Income",
    category: "",
    income: "",
    loading: false,
    dialog: false
  }),
  methods: {
    update(update) {
      this.data = update;
    },
    addItem() {
      this.loading = true;
      this.currentUser = firebase.auth().currentUser.email;
      const income = {
        category: this.category,
        income: this.income,
        radio: this.radios,
        data: this.data,
        user: this.currentUser
      };

      db.collection("incomes")
        .add(income)
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit("incomeAdded");
        });
    }
  }
};
</script>

<style >
</style>