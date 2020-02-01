<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

  <section>
        <div v-if="errored">
            <p>No Product!</p>
        </div>
        <div v-else>
            <div v-if="loading">
                Loading...
            </div>

            <div
              v-else
              v-for="prod in products"
              :key="prod._id"
            >
              {{ products }}
            </div>
        </div>
    </section>

    <form
      class="product-form"
      action="/admin/add-product"
      method="POST"
      enctype="multipart/form-data"
  >
      <!-- this enctype tells that requests will contain mixed data, text, binary -->
      <div class="form-control">
          <label for="title">Title</label>
          <input
              type="text"
              name="title"
              id="title"
          >
      </div>
      <div class="form-control">
          <label for="imageUrl">Image</label>
          <input
              type="file"
              name="imageUrl"
              id="imageUrl">
      </div>
      <div class="form-control">
          <label for="price">Price</label>
          <input
              type="number"
              name="price"
              id="price"
              step="0.01"
          >
      </div>
      <div class="form-control">
          <label for="content">Description</label>
          <textarea
              name="content"
              id="content"
              rows="5"></textarea>
      </div>
      <button class="btn" type="submit">Add Product</button>
  </form>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      products: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
        axios
          .get('http://localhost:3000/feed/posts')
          .then(prods => (this.products = prods.data.bpi))
          .catch(() => {
              this.errored = true
          })
          .finally(() => this.loading = false)

    }
}
</script>
