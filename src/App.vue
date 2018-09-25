<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="showHome" to="/" flat>Home</v-btn>
        <v-btn to="about" flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const AppProps = Vue.extend({});

@Component({})
export default class App extends AppProps {
  get title() {
    return `Yolo (${this.$route.name})`;
  }
  get showHome() {
    return this.$route.name !== 'home';
  }

}
</script>
