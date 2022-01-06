<template>
  <n-page-header title="La Reliquia" subtitle="Bar" >
    <template #title>
      <router-link to="/">Home</router-link>
    </template>
    <template #header>

    </template>
     <template #avatar>
      <n-avatar
        src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
      />
    </template>
  </n-page-header>
  <!--- <side-bar/> --->
  <!-- <div id="nav">
     |
    <router-link to="/about">About</router-link>
  </div> -->

<n-space vertical>
    <!--- <n-switch v-model:value="collapsed" /> --->
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          v-model:value="activeKey"
        />
      </n-layout-sider>
      <n-layout>
        <h1>sadsadassjaljklalkdjasldjaldj</h1>
        <div>
        <menu-table/>
        </div>
        <router-view/>
        <!--- <span>Content</span> --->
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
// import SideBar from './components/SideBar.vue'
import { defineComponent, h, ref } from 'vue'
import { NPageHeader, NAvatar, NIcon, NSpace, NLayout, NLayoutSider, NMenu } from 'naive-ui'

import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

// import MenuTable from './components/MenuTable.vue'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: 'Entrantes',
    key: 'entrantes',
    disabled: false,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Platos Fuertes',
    key: 'platos_fuertes',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: 'Pollo',
        key: 'pollo',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Cerdo',
        key: 'cerdo',
        icon: renderIcon(WineIcon)
      },
      {
        label: 'Camarón',
        key: 'camaron',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Pescado',
        key: 'pescado',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Otros platos',
        key: 'otros_platos',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Pastas',
        key: 'pastas',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Entrepanes',
        key: 'entrepanes',
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: 'Bebidas',
    key: 'bebidas',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Cócteles',
    key: 'cocteles',
    icon: renderIcon(WineIcon),
    children: [
      {
        label: 'Flameados',
        key: 'flameados',
        icon: renderIcon(BookIcon)
      },
      {
        label: 'Analcohólicos',
        key: 'analcohólicos',
        icon: renderIcon(BookIcon)
      },
      {
        label: 'Con Red Bull',
        key: 'cocteles_con_red_bull',
        icon: renderIcon(BookIcon)
      }
    ]
  },
  {
    label: 'Tragos',
    key: 'tragos',
    icon: renderIcon(WineIcon),
    children: [
      {
        label: 'Rones',
        key: 'rones',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Whisky',
        key: 'whisky',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Cogñac',
        key: 'cogñac',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Vodka',
        key: 'vodka',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Ginebra',
        key: 'ginebra',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Tequila',
        key: 'tequila',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Otros',
        key: 'otros',
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: 'Ofertas',
    key: 'ofertas',
    icon: renderIcon(PersonIcon),
    children: [
      {
        label: 'Botellas',
        key: 'botellas',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Botellas y Bebidas',
        key: 'botellas_y_bebidas',
        icon: renderIcon(PersonIcon)
      }
    ]
  }

]

export default defineComponent({
  components: {
    NPageHeader,
    NAvatar,
    //  SideBar,
    NSpace,
    NLayout,
    NLayoutSider,
    NMenu/*,
    MenuTable */
  },

  setup () {
    return {
      activeKey: ref(null),
      collapsed: ref(true),
      menuOptions
    }
  }
})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
