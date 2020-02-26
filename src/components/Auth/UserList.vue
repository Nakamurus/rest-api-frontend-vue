<template>
    <div>
        <ul>
            <li v-for="user in users" :key="user._id">
                {{ user.email }}: {{ user.name }}
            </li>
        </ul>
        <button @click="nextBtn">
            Next
        </button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            currentPage: this.$route.query.page || 1
        }
    },
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all.items.users,
            totalItems: state => state.users.all.items.totalItems,
        })
    },
    watch: {
        currentPage: function() {
            this.getAllUsers(this.currentPage)
        }
    },
    mounted() {
        this.getAllUsers(this.currentPage);
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        }),
        nextBtn() {
            this.currentPage = this.currentPage + 1;
            this.$router.push({query: {page: this.currentPage}}).catch(err => {err})
        }
    }
}
</script>