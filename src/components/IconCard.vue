<template>
  <v-card class="elevation-0 transparent">
    <v-card-text class="text-xs-center">
      <v-icon x-large class="blue--text text--lighten-2">{{ icon }}</v-icon>
    </v-card-text>
    <v-card-title primary-title class="layout justify-center">
      <div class="headline text-xs-center">{{ headline }}</div>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

const Props = Vue.extend({
  name: 'IconCard',
  props: {
    icon: String,
    headline: String,
    body: String,
  },
});

@Component({})
export default class IconCard extends Props {

}
</script>
