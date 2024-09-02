<template>
  <div>
    <h1>Lista de Itens</h1>
    <form @submit.prevent="addItem">
      <input v-model="newItem.name" placeholder="Nome do item" required />
      <input v-model="newItem.description" placeholder="Descrição" required />
      <input v-model.number="newItem.price" placeholder="Preço" required type="number" />
      <button type="submit">Adicionar Item</button>
    </form>

    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.description }} - {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [], // Lista de itens existentes
      newItem: {
        name: '',
        description: '',
        price: 0
      }
    };
  },
  methods: {
    async addItem() {
      try {
        const response = await fetch('http://localhost:3000/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newItem)
        });

        const data = await response.json();
        if (response.ok) {
          this.items.push(data);
          this.newItem = { name: '', description: '', price: 0 }; // Resetar o formulário
        } else {
          console.error('Failed to add item:', data.error);
        }
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  },
  async mounted() {
    try {
      const response = await fetch('http://localhost:3000/items');
      this.items = await response.json();
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  }
};
</script>

<style>
  form {
    margin-bottom: 20px;
  }

  input {
    margin-right: 10px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 5px 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    padding: 10px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>

