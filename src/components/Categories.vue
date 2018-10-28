<template>
    <div>
        <p class="menu-label">
        categories
        </p>
        <ul class="menu-list">
            <li class="is-right"><a href="#const" class="is-active"><i class="fab fa-css3-alt"></i> CSS</a></li>
            <li><a href="#let" class="is-active"><i class="fab fa-js"></i> JS</a></li>
            <li><a href="#let" class="is-active"><i class="fab fa-html5"></i> HTML</a></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.menu-list {
    li {
        a:hover {
            background: #d9d9d9;
        }
        a.is-active {
            background-color: #3273dc;
            &:hover {
                background: #d9d9d9;
            }
        }
        margin: 10px;
    }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Categories extends Vue {}
</script>
