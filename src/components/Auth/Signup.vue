<template>
    <div>
        <h2>Register</h2>
        <validation-observer v-slot="{ invalid, handleSubmit }">
            <form @submit.prevent="handleSubmit(onSubmit)">
                <validation-provider vid="email" name="E-mail" rules="required" v-slot="errors">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        v-model="user.email"
                        class="form-control"
                        :class="{ 'is-invalid': errors[0] }"
                    >
                    <span>{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider name="User Name" rules="required" v-slot="errors">
                    <label for="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        v-model="user.username"
                        class="form-control"
                        :class="{ 'is-invalid': errors[0] }"
                    >
                    <span class="error">{{ errors[0] }}</span>
                </validation-provider>

                <validation-provider vid="password" name="Password" rules="required|min:6" v-slot="errors">
                    <label for="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        v-model="user.password"
                        class="form-control"
                        :class="{ 'invalid': errors[0] }"
                    >
                    <span>{{ errors[0] }}</span>
                </validation-provider>
                <button class="btn btn-primary" :disabled="invalid || status.registering">Register</button>
                <router-link to="/login" class="btn btn-link">Cancel</router-link>
            </form>
        </validation-observer>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            user: {
                email: '',
                username: '',
                password: ''
            },
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    methods: {
        ...mapActions('account', ['registerAction']),
        onSubmit() {
            this.submitted = true;
            this.registerAction(this.user);
            // if(res.errors) {
            //     this.$refs.form.setErrors(res.errors);
            //     alert(res.message);
            // } else {
            //     alert('Success!!!')
            // }
        }
    }
}
</script>