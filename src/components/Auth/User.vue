<template>
    <div class="centered">
        <div class="card">
            <span>
                {{ user.email }}: {{ user.username }}
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            user: {}
        }
    },
    async created() {
        const res = await this.getUser(this.$route.params)
        this.user = res;
    },
    methods: {
        ...mapActions('users', {
            getUser: 'get'
        })
    },
}
</script>