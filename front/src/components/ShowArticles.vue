<template>
  <div class="app">
    <h1>Teste Homologação Innovea</h1>
    <div class="filter">
      <h3>Filtro:</h3>
      <div class="input"><input placeholder="Titulo..." v-model="title" /></div>
      <div><button v-on:click="search(title)">Pesquisar</button></div>
    </div>

    <ol>
      <li v-for="article in articles" v-bind:key="article.id">
        <div class="article">
          <p>Autor: {{ article.author }}</p>
          <p>Titulo: {{ article.title }}</p>
          <p>Descrição: {{ article.description }}</p>
          <button @click.stop.prevent="submit(article)" class="articlebutton">Mostar mais</button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import api from '../services/api'
export default {
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticles() {
      const { data } = await api.get('articles')
      this.articles = data.articles
    },
    async search(title = '') {
      const { data } = await api.get(`articles/${title}`)
      this.articles = data.articles
    },
    submit(article) {
      this.$router.push({
        name: `article`,
        params: {
          author: article.author,
          title: article.title,
          description: article.description
        }
      })
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style>
.app {
  width: 100vh;
}

.filter {
  width: 100%;
  display: flex;
  align: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
}

.input {
  margin: 0 0.5rem;
}

.article {
  border: 1px solid;
  border-radius: 4px;
  color: white;
  margin: 0.5rem;
  padding: 0.5rem;
}

.articlebutton {
}
</style>
