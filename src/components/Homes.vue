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
      <li>Cerveza Nacional...........200 cup</li>
      <li>Cerveza Importada........200 cup</li>
      <li>Agua Nacional...............100 cup</li>
      <li>Agua Importada.............200 cup</li>
      <li>Refresco Nacional.........120 cup</li>
      <li>Refresco Importado.......150 cup</li>
      <li>Jugos Naturales............100 cup</li>
      <li>Limonada....................150 cup</li>
      <li>Limonada Rebelde .........200 cup</li>
      <li>Bebidas energéticas.......250 cup</li>
      <li>Copa de Vino.............250 cup</li>
      <li>Red Bull.................300 cup</li>
    </ul>

    <h3 id='cocteles'>Cócteles</h3>
    <ul>
      <li>Mojito...............................250 cup</li>
      <li>Daiquirí...........................250 cup</li>
      <li>Daiquirí de Frutas.................300 cup</li>
      <li>Canchánchara.....................250 cup</li>
      <li>Cuba libre..........................250 cup</li>
      <li>Cubata..................................300 cup</li>
      <li>Ron Collins...........................250 cup</li>
      <li>Michelada de Cervezas Nacionales...350 cup</li>
      <li>Michelada de Cervezas Importadas...350 cup</li>
      <li>Cubanito............................400 cup</li>
      <li>Caipiroska.........................300 cup</li>
      <li>Caipirinha.........................300 cup</li>
      <li>Caipirissima........................300 cup</li>
      <li>Manhattan............................400 cup</li>
      <li>Piña Colada.........................300 cup</li>
      <li>Alexander............................450 cup</li>
      <li>Screwdriver..............................250 cup</li>
      <li>Gin Tonic...................................300 cup</li>
      <li>Margarita...................................300 cup</li>
      <li>Long Island Ice Tea............................450 cup</li>
      <li>Sangría Natural................................350 cup</li>
      <li>Tinto de Verano.........................300 cup</li>
      <li>Negroni...........................................550 cup</li>
      <li>Campari Orange...............................500 cup</li>
      <li>Martini Seco.............................450 cup</li>
      <li>Martini Dulce...........................450 cup</li>
      <li>Babe Habana...............................550 cup</li>
      <li>Orgasmo...................................550 cup</li>
      <li>Pingoleta Rapada........................350 cup</li>
      <li>Pingoleta Peluda........................350 cup</li>
    </ul>
    <h4 id=flameados>Flameados</h4>
    <ul>
      <li>B-52............550 cup</li>
      <li>Diablo Rojo........500 cup</li>
      <li>Diablo Azul........500 cup</li>
    </ul>
    <h4 id='analcoholicos'>Analcohólicos</h4>
    <ul>
      <li>San Francisco.......200 cup</li>
      <li>Shirley Temple.....200 cup</li>
    </ul>
    <h4 id='cocteles-con-red-bull'>Con Red Bull</h4>
    <ul>
      <li>Relic Bull..........600 cup</li>
      <li>Relic Bull..........700 cup</li>
      <li>Cosmopolitan......300 cup</li>
      <li>Mojito Bull.......700 cup</li>
      <li>Vodka Bull........700 cup</li>
      <li>Limonada Eléctrica...450cup</li>
    </ul>

    <h3 id='tragos'>Tragos</h3>
    <h4 id='rones'>Rones</h4>
    <ul>
      <li>Havana Club Especial.........250 cup</li>
      <li>Havana Club 7 años............300 cup</li>
      <li>Selección de Maestros.........400 cup</li>
      <li>Havana Club 15 años.............700 cup</li>
      <li>Ron Santiago Añejo.............250 cup</li>
      <li>Ron Santiago 11 años...........400 cup</li>
      <li>Ron Santiago 12 año.............500 cup</li>
    </ul>
    <h4 id='whisky'>Whisky</h4>
    <ul>
      <li>J&B.........300 cup</li>
      <li>Jameson.....250 cup</li>
      <li>Ballentine’s...250 cup</li>
      <li>Chivas 12.......400 cup</li>
      <li>Chivas 18.......600 cup</li>
      <li>Chivas 25.......1500 cup</li>
      <li>Jhonnie Walker Red...350 cup</li>
      <li>Jhonnie Walker Black....500cup</li>
      <li>Jhonnie Walker Double Black...950 cup</li>
      <li>Jhonnie Walker Gold Label.....900 cup</li>
      <li>Jhonnie Walker Green Label....850 cup</li>
      <li>Jhonnie Walker Platinum Label..1500 cup</li>
      <li>Jhonnie Walker Blue Label.......1900 cup</li>
      <li>Jack Daniel’s........360 cup</li>
      <li>Glenlivet............400 cup</li>
      <li>Clan Campbell..........250 cup</li>
      <li>Glenfiddich............500 cup</li>
      <li>Jack Daniel’s Honey.....360 cup</li>
      <li>Buchanan 12 años........650 cup</li>
      <li>Swing....................800 cup</li>
      <li>Macallan..................900 cup</li>
      <li>Old Parr...................900 cup</li>
      <li>Dimple.....................980 cup</li>
    </ul>
    <h4 id='cognhac'>Cogñac</h4>
    <ul>
      <li>Hennessy............500 cup</li>
      <li>St Remy..............450 cup</li>
      <li>Remy Martin...........650 cup</li>
    </ul>
    <h4 id='vodka'>Vodka</h4>
    <ul>
      <li>Ciroc Blue...........400 cup</li>
      <li>Ciroc Manzana........450 cup</li>
      <li>Ciroc Piña...........450 cup</li>
      <li>Ciroc Vainilla........450 cup</li>
      <li>Ciroc Coco...........450 cup</li>
      <li>Ciroc Pera...........450 cup</li>
      <li>Grey Goose...........600 cup</li>
      <li>Absolut Vodka..........420 cup</li>
      <li>Absolut Vodka Mandarina.....420 cup</li>
    </ul>
    <h4 id='ginebra'>Ginebra</h4>
    <ul>
      <li>Bombay..............400 cup</li>
      <li>Hendrick’s..........600 cup</li>
      <li>Tanqueray...........300 cup</li>
      <li>Tanqueray n.10......400 cup</li>
      <li>Beefeater...........300 cup</li>
      <li> Beefeater 24.......350 cup</li>
      <li> Gin Master.........250 cup</li>
    </ul>
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
