<template>
    <div class="container">
      <h1>Item List</h1>
      <div v-if="items.length">
        <div v-for="item in items" :key="item.id" class="item">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="deleteItem(item.id)">Delete</button>
        </div>
      </div>
      <div v-else>
        <p>No items found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        items: []
      }
    },
    methods: {
      fetchItems() {
        axios.get('http://localhost:3000/items')
          .then(response => {
            this.items = response.data
          })
          .catch(error => {
            console.error(error)
          })
      },
      deleteItem(id) {
        axios.delete(`http://localhost:3000/items/${id}`)
          .then(() => {
            this.fetchItems()
          })
          .catch(error => {
            console.error(error)
          })
      }
    },
    mounted() {
      this.fetchItems()
    }
  }
  </script>
  
  <style scoped>
  .item {
    background: white;
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  