<template>
  <v-card class="elevation-0 transparent">
    <v-card-title primary-title class="layout justify-center">
      <div class="headline">{{ headline }}</div>
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
  name: 'InfoCard',
  props: {
    headline: String,
  },
});

@Component({})
export default class InfoCard extends Props {

}
</script>
