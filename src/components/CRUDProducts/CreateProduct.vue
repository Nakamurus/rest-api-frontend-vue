<template>
    <div>
        <h2>Create Product</h2>
        <form>
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              v-model="product.title"
            >
            <label for="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              v-model="product.content"></textarea>
            <button @click="onSubmit()">Create Product</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            product: {
                title: '',
                content: ''
            }
        }
    },
    methods: {
        ...mapActions('products', ['createAction']),
        onSubmit() {
            this.createAction(this.product)
        },
        submit() {
            fetch('http://localhost:3000/feed/post', {
                method: 'POST',
                body: JSON.stringify(this.product),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
        }
    }
}
</script>