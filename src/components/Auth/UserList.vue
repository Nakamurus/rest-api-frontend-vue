<template>
    <div>
        <div class="centered" v-if="users">
            <div v-for="user in users" :key="user._id" class="card">
                <span>
                    {{ user.email }}
                </span>
                :
                <span>
                    {{ user.name }}
                </span>
                <router-link :to="{ path: `/user/${user._id}`, params: {userId: user._id }}">
                    User Detail
                </router-link>
            </div>
        </div>
        {{ account }}
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
            account: state => state.account.status,
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
        return this.getAllUsers(this.currentPage);
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            getUser: 'get',
            deleteUser: 'delete'
        }),
        nextBtn() {
            this.currentPage = this.currentPage + 1;
            this.$router.push({query: {page: this.currentPage}}).catch(err => {err})
        },
        detailOpen(id) {
            this.$router.push({path: `/${id}`}).catch(err => err)
            this.getUser(id);
        }
    }
}
</script>

<style>
.centered {
    text-align: center;
}
.card {
    border: 1px solid black;
    padding: 1rem;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
}
</style>