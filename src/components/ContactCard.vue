<template>
  <div>
    <info-card headline="Contact us">
      <slot></slot>
    </info-card>
    <v-list v-for="line in contactInfo" :key="line.id" class="transparent">
      <v-list-tile>
        <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">{{ line.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>{{ line.value }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import InfoCard from '@/components/InfoCard.vue';

export default Vue.extend({
  name: 'ContactCard',
  components: {
    InfoCard,
  },
  props: {
    headline: String,
    contactInfo: Array,
  },
});
</script>
