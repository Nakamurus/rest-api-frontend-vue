<template>
    <div>
        <div>
            <label for="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model="user.email"
              required
            >
        </div>
        <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="user.password"
              required
            >
        </div>
        <button @click="signup()">SUbmit</button>
    </div>
</template>

<script>
import CRUDService from '../../services/DataService'
export default {
    name: 'signup',
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        async signup() {
            const user = {
                email: this.user.email,
                password: this.user.password
            };

            try {
                await CRUDService.AuthSignup(user)
            } catch (error) {
                throw new Error(error);
            }
        }
    }
}
</script>