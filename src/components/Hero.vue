<template>
    <section>
    <v-parallax v-bind:src="require('@/assets/hero.png')" height="600">
      <v-layout
      column
      align-center
      justify-center
      class="white--text"
      >
        <img src="@/assets/vuetify.png" alt="Vuetify.js" height="200">
        <h1 class="white--text mb-2 display-1 text-xs-center">{{ head }}</h1>
        <div class="subheading mb-3 text-xs-center">{{ sub }}</div>
        <v-btn
            class="blue lighten-2 mt-5"
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

export default Vue.extend({
    name: 'Hero',
    props: {
        image: String,
        head: String,
        sub: String,
        link: String,
        linktext: String,
    },
});
</script>
