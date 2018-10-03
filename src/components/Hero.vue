<template>
    <section>
    <v-parallax v-bind:src="image" height="600">
      <v-layout
      column
      align-center
      justify-center
      class="white--text"
      >
        <slot></slot>
        <h1 class="white--text mb-2 display-1 text-xs-center">{{ head }}</h1>
        <div class="subheading mb-3 text-xs-center">{{ sub }}</div>
        <v-btn
            class="green darken-2 mt-5"
            dark
            large
            :href="link"
        >
            {{ linktext }}
        </v-btn>
      </v-layout>
    </v-parallax>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    image: String,
    head: String,
    sub: String,
    link: String,
    linktext: String,
  },
})
export default class Hero extends Vue {}
</script>
