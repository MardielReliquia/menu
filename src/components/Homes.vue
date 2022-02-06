<template>
  <div class="hello">
    <img class="logo" alt="Vue logo" src="../assets/logo.jpg">
    <h1>{{ msg }}</h1>
    <h1>Menú</h1>

    <h3 id='entrante'>Entrantes</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3 id='platos-fuertes'>Platos Fuertes</h3>
    <h4 id='pollo'>Pollo</h4>
    <h4 id='cerdo'>Cerdo</h4>
    <h4 id='camaron'>Camarón</h4>
    <h4 id='pescado'>Pescado</h4>
    <h4 id='otros-platos'>Otros Platos</h4>
    <h4 id='pastas'>Pastas</h4>
    <h4 id='entrepanes'>Entrepanes</h4>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3 id='bebidas'>Bebidas</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>

    <h3 id='cocteles'>Cócteles</h3>
    <h4 id=flameados>Flameados</h4>
    <h4 id='analcoholicos'>Analcohólicos</h4>
    <h4 id='cocteles-con-red-bull'>Con Red Bull</h4>

    <h3 id='tragos'>Tragos</h3>
    <h4 id='rones'>Rones</h4>
    <h4 id='whisky'>Whisky</h4>
    <h4 id='cognhac'>Cogñac</h4>
    <h4 id='vodka'>Vodka</h4>
    <h4 id='ginebra'>Ginebra</h4>
    <h4 id='tequila'>Tequila</h4>
    <h4 id='otros'>Otros</h4>

    <h3 id:='ofertas'>Ofertas</h3>
    <h4 id:='botellas'>Botellas</h4>
    <h4 id:='botellas-y-bebidas'>Botellas y Bebidas</h4>

    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3><h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3><h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3><h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3><h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
    <h3 id='calvo'>adadall</h3>
  </div>
</template>

<script>
export default {
  name: 'Homes',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo{
  max-width: 200px;
  height: auto;
}
</style>
