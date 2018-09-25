<template>
  <div>
      <hero
        v-bind:image="require('@/assets/hero.png')"
        head="Welcome stranger"
        sub="Powered by Vuetify"
        link="/login"
        linktext="Get started"></hero>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
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

      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
              and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Hero from '@/components/Hero.vue';
import IconCard from '@/components/IconCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import ContactCard from '@/components/ContactCard.vue';

@Component({
  components: {
    HelloWorld, Hero, IconCard, InfoCard, ContactCard,
  },
})
export default class Home extends Vue {}
</script>
