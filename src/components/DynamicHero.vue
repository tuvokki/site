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
        <h1 class="white--text mb-2 display-1 text-xs-center">{{ heroOne.head }}</h1>
        <div class="subheading mb-3 text-xs-center">{{ heroOne.sub }}</div>
        <v-btn
            class="green darken-2 mt-5"
            dark
            large
            :href="heroOne.link"
        >
            {{ heroOne.linktext }}
        </v-btn>
      </v-layout>
    </v-parallax>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import PicoWorker from '@/views/pico-worker';

@Component({})
export default class Hero extends Vue {
  @Prop()
  private id: number;
  private image: HTMLImageElement = require('@/assets/white.png');
  private worker: PicoWorker = new PicoWorker();
  private heroOne: any = {};

  private async mounted() {
    const h = await this.worker.getHero(this.id);
    const p = JSON.parse(h.result);
    const url = this.$store.state.baseURL;
    const img = p[0].fields.image;
    // FIXME: Quick fix the image url
    this.image = `${url}uploads/${img}` as any;
    this.heroOne = p[0].fields;
  }
}
</script>
