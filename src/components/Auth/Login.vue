<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  v-model="email"
                  name="email"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && !email }"
                >
                <div
                  v-show="submitted && !email" class="invalid-feedback"
                >Email is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  v-model="password"
                  class="form-control"
                  :class="{ 'is-invalid': submitted && !password }"
                >
                <div
                  v-show="submitted && !password"
                  class="invalid-feedback"
                >Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
                <router-link to="/register" class="btn btn-link">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created() {
        this.logoutAction();
    },
    methods: {
        ...mapActions('account', ['loginAction', 'logoutAction']),
        handleSubmit() {
            this.submitted = true;
            const email = this.email;
            const password = this.password;
            this.loginAction({ email, password });
        }
    }
};
</script>