<template>
    <div>
        <div>
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              v-model="product.title"
              required
            >
        </div>
        <div>
            <label for="content">Content</label>
            <input
              type="text"
              id="content"
              name="content"
              v-model="product.content"
              required
            >
        </div>

        <button @click="saveProduct()" class="btn btn-success">Submit</button>
    </div>
</template>

<script>
import CRUDService from '../../services/DataService';

export default {
    name: 'add-product',
    data() {
        return {
            product: {
                title: '',
                content: '',
            }
        };
    },
    methods: {
        saveProduct() {
            const data = {
                title: this.product.title,
                content: this.product.content,
            };
            CRUDService.ProdCreate(data);
        }
    }
}
</script>