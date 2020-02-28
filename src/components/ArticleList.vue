<template>
    <div>
        <ArticleItem
          v-for="article in articles"
          :key="article.id"
          :article="article"
        />
    </div>
</template>

<script>
import ArticleItem from './ArticleItem'

export default {
    name: 'ArticleList',
    static: {
        visibleItemsPerPageCount: 2
    },
    data() {
        return {
            articles: [],
            currentPage: 1,
            pageCount: 0
        }
    },
    components: {
        ArticleItem
    }
}
</script>