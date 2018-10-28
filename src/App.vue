<template>
    <div>
        <display></display>
        <section class="section">
            <div class="container">
                <div class="columns">
                <div class="column is-3">
                    <aside class="is-medium menu">
                        <categories></categories>
                        <tags></tags>
                    </aside>
                </div>
                <div class="column is-9">
                    <articles></articles>
                </div>
                </div>
            </div>
        </section>
        <bottom></bottom>
    </div>
</template>

<style lang="scss">
body,
html {
    background: #f2f2f2;
}

pre,
.message {
    max-width: 960px;
}

li {
    margin: 10px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Display from '@/components/Display.vue';
import Categories from '@/components/Categories.vue';
import Tags from '@/components/Tags.vue';
import Articles from '@/components/Articles.vue';
import Bottom from '@/components/Bottom.vue';

@Component({
    components: {
        Display,
        Categories,
        Tags,
        Articles,
        Bottom,
    },
})
export default class App extends Vue {}
</script>
