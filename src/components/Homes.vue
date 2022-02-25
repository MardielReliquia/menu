<template>
  <div class="hello">
    <img class="image-logo" alt="Vue logo" src="../assets/logo.jpg">
    <h1 id="title">{{ msg }}</h1>
    <h1>Menú</h1>

    <h3 id='entrante'>Entrantes</h3>
    <ul id=option_list>
      <li>Ensalada estación......250 cup</li>
      <li>Croquetas del día.......200 cup</li>
      <li>Tostones rellenos......250 cup</li>
      <li>Cóctel de camarón....400 cup</li>
      <li>Surtido Reliquia.........650 cup</li>
      <li>Eperlán de pescado..350 cup</li>
      <li>Fajitas de pollo..........350 cup</li>

    </ul>
    <h3 id='platos-fuertes'>Platos Fuertes</h3>
    <h4 id='pollo'>Pollo</h4>
    <ul>
      <li>Grillé......600 cup</li>
      
    </ul>
    <h4 id='cerdo'>Cerdo</h4>
    <ul>
      <li>Ropa vieja de cerdo....700 cup</li>
    </ul>
    <h4 id='camaron'>Camarón</h4>
    <ul>
      <li>Grillé...750 cup</li>
      
    </ul>
    <h4 id='pescado'>Pescado</h4>
    <ul>
      <li>Grillé.....700cup</li>
    </ul>
    <h4 id='otros-platos'>Otros Platos</h4>
    <ul>
      <li>Arroz con pollo.....600cup</li>
      <li>Salpicón de mariscos......900 cup</li>
      <li>Arroz blanco........100 cup</li>
      <li>Frijoles dormidos........120 cup</li>
      <li>Albóndigas Reliquia.........450 cup</li>
      <li>Picadillo Reliquia.......500 cup</li>
    </ul>
    <h4 id='pastas'>Pastas</h4>
    <ul>
      <li>Boloñesa...550cup</li>
      <li>Pesto........500 cup</li>
      <li>Vegetales...500 cup</li>
      <li>Con Camarón.....650 cup</li>
      <li>Con Pollo......550 cup</li>
    </ul>
    <h4 id='entrepanes'>Entrepanes</h4>
    <ul>
      <li>Sandwish de pollo.....400 cup</li>
      <li>Sandwish de jamón y queso...350 cup</li>
      <li>Sandwish de atún......450 cup</li>
    </ul>
    <h3 id='postres'>Café</h3>
    <ul>
      <li>Expreso...........80 cup</li>
      <li>Cortado.............................100 cup</li>
      <li>Capuchino......................150 cup</li>
      <li>Té...............................50cup</li>
    </ul>
    <h3 id='bebidas'>Bebidas</h3>
    <ul>
      <li>Cerveza .....................200 cup</li>
      <li>Agua Nacional...............100 cup</li>
      <li>Agua Importada.............150 cup</li>
      <li>Agua Tónica Importada.............150 cup</li>
      <li>Refresco Nacional.........150 cup</li>
      <li>Refresco Importado.......200 cup</li>
      <li>Jugos Naturales............100 cup</li>
      <li>Limonada Rebelde....................150 cup</li>      
      <li>Bebidas energéticas.......300 cup</li>
      <li>Copa de Vino.............250 cup</li>
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
      <li>Chelada................................300 cup</li>
      <li>Caipiroska.........................300 cup</li>
      <li>Caipirinha.........................300 cup</li>
      <li>Caipirissima........................300 cup</li>
      <li>Manhattan............................400 cup</li>
      <li>Piña Colada.........................350 cup</li>
      <li>Alexander............................450 cup</li>
      <li>Screwdriver..............................250 cup</li>
      <li>Gin Tonic...................................350 cup</li>
      <li>Vodka Tonic...................................350 cup</li>
      <li>Margarita...................................350 cup</li>
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
      <li>Pingoleta Rapada........................350 cup</li>  
    </ul>
    <h4 id='flameados'>Flameados</h4>
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
      <li>Relic Bull..........550 cup</li>
      <li>Jagger Bull..........700 cup</li>
      <li>Mojito Bull.......550 cup</li>
      <li>Vodka Bull........550 cup</li>
      <li>Limonada Eléctrica...450cup</li>
    </ul>

    <h3 id='tragos'>Tragos</h3>
    <h4 id='rones'>Rones</h4>
    <ul>
      <li>Havana Club Especial.........200 cup</li>
      <li>Havana Club 7 años............250 cup</li>
      <li>Selección de Maestros.........450 cup</li>
      <li>Ron Santiago Añejo.............250 cup</li>
      <li>Ron Santiago 11 años...........400 cup</li>
      <li>Ron Santiago 12 año.............450 cup</li>
    </ul>
    <h4 id='whisky'>Whisky</h4>
    <ul>
      <li>J&B.........300 cup</li>
      <li>Jameson.....250 cup</li>
      <li>Ballentine’s...250 cup</li>
      <li>Chivas 12.......400 cup</li>      
      <li>Jhonnie Walker Red...350 cup</li>
      <li>Jhonnie Walker Black....500cup</li>
      <li>Jhonnie Walker Double Black...650 cup</li>
      <li>Jhonnie Walker Gold Label.....750 cup</li>
      <li>Jhonnie Walker Green Label....850 cup</li>
      <li>Jack Daniel’s........500 cup</li>
      <li>Glenlivet............500 cup</li>
      <li>Clan Campbell..........250 cup</li>
      <li>Glenfiddich............500 cup</li>
      <li>Jack Daniel’s Honey.....350 cup</li>
      <li>Buchanan 12 años........650 cup</li>
      <li>Swing....................750 cup</li>
      <li>Macallan..................750 cup</li>
      <li>Old Parr...................500 cup</li>
      <li>Dimple.....................500 cup</li>
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
      <li>Grey Goose...........500 cup</li>
      <li>Absolut Vodka..........300 cup</li>
      <li>Absolut Vodka Mandarina.....350 cup</li>
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
      <li> Gordon.............300 cup</li>
    </ul>
    <h4 id='tequila'>Tequila</h4>
    <ul>
      <li>Jose Cuervo Especial......600 cup</li>
      <li>Patrón Silver...........600 cup</li>
      <li>Patrón Añejo............750 cup</li>
      <li>Don Julio Blanco.......600 cup</li>
      <li>Don Julio blanco.......700 cup</li>
      <li>Don Julio Añejo........750 cup</li>
      <li>1800 reposado...........750 cup</li>
      <li>Herradura Blanco...........600 cup</li>
      <li>Herradura Reposado...........650 cup</li>
    </ul>
    <h4 id='otros'>Otros</h4>
    <ul>
      <li>Sambuca.............300 cup</li>
      <li>Jagger.........400 cup</li>
      <li>Frangelico........350 cup</li>
      <li>Bailey´s.............300 cup</li>
      <li>Amaretto...............360 cup</li>
      <li>Malibú..................300 cup</li>
    </ul>

    <h3 id='ofertas'>Ofertas</h3>
    <h4 id='botellas'>Botellas</h4>
    <ul>
      <li>Havana Club 7 años.................3600 cup</li>
      <li>Jhonnie Walker Red(750 ml)..........4700 cup</li>
      <li>Jhonnie Walker Black(750 ml)........6300 cup</li>
      <li>Chivas Regal 12 años................6300 cup</li>
      <li>Grey Goose.........................11500 cup</li>
    </ul>
    <h4 id='botellas-y-bebidas'>Botellas y Bebidas</h4>
    <ul>
      <li>Havana Club 7 años + 1 Pomo de Refresco................3900 cup</li>
      <li>Havana Club Especial lt + 1 Pomo de Refresco................3600 cup</li>
      <li>Clan Campbell + 2 Energizantes.......................3600 cup</li>
      <li>Gordon + 2 MG.........................................4000 cup</li>
      <li>Jhonnie Walker Red(750 ml) + 2 Energizantes..............5000 cup</li>
      <li>Jhonnie Walker Black(750 ml) + 2 Energizantes..............6500 cup</li>
    </ul>
  </div>
  <a href="https://www.facebook.com/lareliquia.habana.7" target="_blank"><n-icon id="facebook" size="50"><Facebook/></n-icon></a>
  <a href="https://instagram.com/lareliquia_habana?utm_medium=copy_link" target="_blank"><n-icon id="instagram" size="50"><Instagram/></n-icon></a>

  <h3 id="blank"></h3>
</template>

<script>
import { defineComponent } from 'vue'
import { NIcon } from 'naive-ui'
import {
  LogoInstagram as Instagram,
  LogoFacebook as Facebook
} from '@vicons/ionicons5'

export default defineComponent({
  name: 'Homes',
  components: {
    NIcon,
    Facebook,
    Instagram
  },
  props: {
    msg: String
  }

})
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
#instagram {
  color: rgb(245, 20, 170);
}

#facebook{
  color: blue;
}
.image-logo{
  max-width: 200px;
  height: auto;
}
a:hover {
  color: green;
}
</style>
