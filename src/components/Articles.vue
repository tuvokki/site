<template>
    <div class="content is-medium">
        <h3 class="title is-3">Snippets ¯\_(ツ)_/¯</h3>
        <div v-for="snippet in snips.list" :key="snippet.id" class="box">
            <h4 id="const" class="title is-3">{{ snippet.title }}</h4>
            <article class="message is-primary">
                <span class="icon has-text-primary">
                <i class="fab fa-js"></i>
                </span>
                <div class="message-body">{{ snippet.message }}</div>
            </article>
            <pre><code class="language-javascript">{{ snippet.code }}</code></pre>
            <i class="fa fa-user"></i>
        </div>

        <b-pagination
            :total="snips.total"
            :current.sync="snips.current"
            :order="snips.order"
            :size="snips.size"
            :simple="snips.isSimple"
            :rounded="snips.isRounded"
            :per-page="snips.perPage"
            :icon-pack="snips.iconPack"

            @change="fetchPage"
            >
        </b-pagination>

        <h3 class="title is-3">More to Come...</h3>
        <div class="box">
            <h4 id="lorem" class="title is-4">More to come...</h4>
            <article class="message is-primary">
            <span class="icon has-text-primary">
                <i class="fas fa-info-circle"></i>
            </span>
            <div class="message-body">
                Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur instructior sit.
            </div>
            </article>
        <pre><code class="language-javascript">let i = 0;</code></pre>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
}

.box span.icon {
    float: right;
    font-size: 1.7em;
    padding: 2rem 2rem 0 0;
}
</style>

<style lang="scss">
.pagination {
    padding: 0 1.25rem;
    .pagination-list {
        list-style: none;
        margin: 0;
        li {
            margin: 0;
        }
    }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Http } from '@/common/http';

@Component({})
export default class Articles extends Vue {
    private http: Http;
    private snips = {
        list: [],
        total: 200,
        current: 1,
        perPage: 20,
        order: '',
        size: 'is-small',
        isSimple: false,
        isRounded: false,
        iconPack: 'fa',
    };

    constructor() {
        super();
        this.http = new Http();
    }

    private mounted() {
        this.getPage().then((res) => {
            this.snips = { ...this.snips, ...res };
        });
    }

    private fetchPage(page: number) {
        this.getPage(page).then((res) => {
            this.snips = { ...this.snips, ...res };
        });
    }

    private async getPage(num?: number) {
        let data: any;
        if (num && num >= 0) {
            // we don't want negativity
            data = await this.http.get('snippets', num);
        } else {
            data = await this.http.get('snippets', 0);
        }
        return {
            list: data.data,
            total: data.total,
            current: data.page,
            perPage: data.per_page,
        };
    }
}
</script>
