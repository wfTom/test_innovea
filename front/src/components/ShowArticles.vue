<template>
  <div class="app">
    <div class="inputs">
      <div class="buttons">
        <input placeholder="Pesquisar..." v-model="text" />
        <button v-on:click="search(text)">Pesquisar</button>
      </div>
    </div>

    <ol>
      <li v-for="article in articles" v-bind:key="article.id">
        <div>
          <p>Autor: {{ article.author }}</p>
          <p>Titulo: {{ article.title }}</p>
          <p>Descrição: {{ article.description }}</p>
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
      console.log('data:', data)
      this.articles = data.articles
    },
    async search(text) {
      const { data } = await api.get(`articles/${text}`)
      this.articles = data.articles
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style></style>
