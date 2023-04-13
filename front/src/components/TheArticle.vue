<template>
  <div>
    <div class="article">
      <p>Autor: {{ $route.params.author }}</p>
      <p>Titulo: {{ $route.params.title }}</p>
      <p>Descrição: {{ $route.params.description }}</p>
    </div>
    <router-link to="/" class="link">Pesquisar mais...</router-link>
  </div>
</template>

<script>
export default {
  name: 'TheArticle',
  props: { author: String, title: String, description: String }
}
</script>

<style scoped>
.article {
  height: 100%;
}

.link {
}
</style>
