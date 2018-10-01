<template>
  <div><button @click="blabla">click</button>
    <hero
      :image=heroOne.image
      :head=heroOne.head
      :sub=heroOne.sub
      :link=heroOne.link
      :linktext=heroOne.linktext>
      </hero>
    <hero
      v-bind:image="require('@/assets/hero.png')"
      head="Welcome stranger"
      sub="Live long and prosper"
      link="/login"
      linktext="Get started">
        <img src="@/assets/tuvok.png" alt="tuvok.nl" height="200">
      </hero>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">T.V.K. Enterprise Inc.</h2>
            <span class="subheading">
              To infinity and beyond 
            </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <icon-card icon="color_lens" headline="Material Design">
                  Desiging with material design is a design that is materialized from a design. That is material to design.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                </icon-card>
              </v-flex>
              <v-flex xs12 md4>
                <icon-card icon="flash_on" headline="Fast development">
                    Fast developent is faster that slow development and it enables rapid development. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </icon-card>
              </v-flex>
              <v-flex xs12 md4>
                <icon-card icon="build" headline="Completely Open Sourced">
                    Open sourced-ness is often measured in degrees of openness. In this case we're 100% fully open! A.k.a. 'Complete'.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum.
                </icon-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <hero
      v-bind:image="require('@/assets/section.png')"
      head="Web development has never been easier"
      sub="Kick-start your application today"
      link="/login"
      linktext="Get started"></hero>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <info-card headline="Company info">
                Our company is quite great, if I may say so. And yes, I may, since our company is so great. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
            </info-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <contact-card headline="Contact us"
            v-bind:contactInfo="[
              {icon: 'phone', value: '777-867-5309'},
              {icon: 'place', value: 'Chicago, US'},
              {icon: 'email', value: 'my@greatcompany.com'}
            ]">
              We very much like it if you contact us. We like mail and phone and any other way we can get in touch. We like you, yes we do.
            </contact-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <bottom></bottom>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue'; // @ is an alias to /src
import IconCard from '@/components/IconCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import ContactCard from '@/components/ContactCard.vue';
import Bottom from '@/components/Bottom.vue'; // @ is an alias to /src

import PicoWorker from '@/views/pico-worker';

@Component({
  components: {
    Hero,
    IconCard,
    InfoCard,
    ContactCard,
    Bottom,
  },
})
export default class Home extends Vue {
  private worker: PicoWorker = new PicoWorker();
  private heroOne: object = {
    image: 'test',
    head: 'test',
    sub: 'test',
    link: 'test',
    linktext: 'test',
  };

  constructor() {
    super();
  }

  private async blabla() {
    const h = await this.worker.getHero(1);
    const p = JSON.parse(h.result);
    // FIXME: Quick fix the image url
    p[0].fields.image = `http://localhost:8000/uploads/${p[0].fields.image}`;
    this.heroOne = p[0].fields;
  }
}
</script>
