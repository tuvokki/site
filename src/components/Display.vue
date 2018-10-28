<template>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-12">
            <div class="container content">
              <i class="is-large fab fa-discord"></i>
              <i class="is-large fas fa-code"></i>
              <h1 class="title">Code <em>All</em> The Things</h1>
              <h3 class="subtitle">
              Collection of code goodies for next-level dev
              </h3>
              <a href="https://github.com/#" target="_blank" class="button is-primary is-large">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
.button.is-primary {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff;
    &:hover {
        background-color: #00c4a7;
    }
}

.hero.is-primary {
    background: linear-gradient(to top right, #524ad0 10%, #d099fa);
    background-image: url('../assets/header.png');
    background-size: cover;
    background-position: right center;
}
.is-large.fab {
    font-size: 7em;
}

.is-large.fas {
    font-size: 5em;
    margin-left: 0.2em;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Display extends Vue {}
</script>
