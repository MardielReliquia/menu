<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 id="title">{{ msg }}</h1>
    <h1>Menú</h1>

    <h3 id='entrante'>Entrantes</h3>
    <ul id=option_list>
      <li>Ensalada estación......250 cup</li>
      <li>Ceviche......................350 cup</li>
      <li>Croquetas del día.......200 cup</li>
      <li>Tostones rellenos......250 cup</li>
      <li>Frituras de malanga..180 cup</li>
      <li>Cóctel de camarón....400 cup</li>
      <li>Surtido Reliquia.........650 cup</li>
      <li>Eperlán de pescado..350 cup</li>
      <li>Fajitas de pollo..........350 cup</li>

    </ul>
    <h3 id='platos-fuertes'>Platos Fuertes</h3>
    <h4 id='pollo'>Pollo</h4>
    <ul>
      <li>Grillé......500 cup</li>
      <li>Curry y miel....550 cup</li>
      <li>Salteado de vegetales...550 cup</li>
    </ul>
    <h4 id='cerdo'>Cerdo</h4>
    <ul>
      <li>Ropa vieja de cerdo....650 cup</li>
    </ul>
    <h4 id='camaron'>Camarón</h4>
    <ul>
      <li>Grillé...700 cup</li>
      <li>Al Ajillo...800 cup</li>
      <li> Salteado con vegetales...750 cup</li>
      <li>Enchilado....750 cup</li>
    </ul>
    <h4 id='pescado'>Pescado</h4>
    <ul>
      <li>Al olivo....750 cup</li>
      <li>Al pesto...700cup</li>
      <li>Grillé.....650cup</li>
    </ul>
    <h4 id='otros-platos'>Otros Platos</h4>
    <ul>
      <li>Arroz con pollo.....700cup</li>
      <li>Salpicón de mariscos......1200 cup</li>
      <li>Arroz pilaf........300cup</li>
      <li>Arroz ecológico..........250 cup</li>
      <li>Arroz blanco........100 cup</li>
      <li>Frijoles dormidos........130 cup</li>
    </ul>
    <h4 id='pastas'>Pastas</h4>
    <ul>
      <li>Boloñesa...500cup</li>
      <li>Nápoles.....400 cup</li>
      <li>Pesto........400 cup</li>
      <li>Vegetales...450 cup</li>
      <li>Con Camarón (80 g)..650 cup</li>
      <li>Con Camarón (80 g)..500 cup</li>
    </ul>
    <h4 id='entrepanes'>Entrepanes</h4>
    <ul>
      <li>Sandwish de pollo.....400 cup</li>
      <li>Sandwish de jamón y queso...350 cup</li>
      <li>Sandwish de atún......450 cup</li>
    </ul>
    <h3 id='postres'>Postres</h3>
    <ul>
      <li>Casquitos de guayaba...........250 cup</li>
      <li>Flan.............................250 cup</li>
      <li>Mermelada de guayaba con queso..250 cup</li>
      <li>Ensalada de frutas................200cup</li>
    </ul>
    <h3 id='bebidas'>Bebidas</h3>
    <ul>
      <li></li>
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
#title{
  font-family: Dancing-script;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
