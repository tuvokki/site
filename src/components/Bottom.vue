<template>
  <v-footer class="green darken-4">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <div class="white--text ml-3">
          Made with
          <v-icon class="red--text">favorite</v-icon>
          by <a class="white--text" href="https://tuvok.nl" target="_blank">T.V.K.</a>
          coded by <a class="white--text" href="https://github.com/tuvokki">Tuvokki<i class="material-icons">whatshot</i></a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
  name: 'Bottom',
  props: {},
});

@Component({})
export default class Bottom extends Props {}
</script>
