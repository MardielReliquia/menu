<template>
  <div style="height: 100vh; position: relative">
    <n-layout-header style="height: 6vh;"
        >
        <n-page-header title="La Reliquia" subtitle="Pub & Bar">
          <template #avatar><n-avatar
        src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
          /></template>
        </n-page-header>
    </n-layout-header>
    <n-space vertical position="absolute">

      <n-layout has-sider position="absolute" style="top: 4vh; bottom: 0vh;">
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
          :render-label="renderMenuLabel"

          v-model:value="activeKey"
        />
        </n-layout-sider>

        <n-layout content-style="padding: 24px;">
        <router-view/>
        </n-layout>
        <n-layout-footer

        position="absolute"
        style="height: 4vh;"
        >
        Repita su visita
        </n-layout-footer>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NSpace, NMenu, NIcon, NPageHeader, NAvatar } from 'naive-ui'
import { defineComponent, h, ref } from 'vue'
// -------------------

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
    href: '#entrante',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Platos Fuertes',
    key: 'platos_fuertes',
    href: '#platos-fuertes',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: 'Pollo',
        key: 'pollo',
        href: '#pollo',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Cerdo',
        key: 'cerdo',
        href: '#cerdo',
        icon: renderIcon(WineIcon)
      },
      {
        label: 'Camarón',
        key: 'camaron',
        href: '#camaron',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Pescado',
        key: 'pescado',
        href: '#pescado',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Otros platos',
        key: 'otros_platos',
        href: '#otros-platos',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Pastas',
        key: 'pastas',
        href: '#botellas_y_bebidas',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Entrepanes',
        key: 'entrepanes',
        href: '#entrepanes',
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: 'Bebidas',
    key: 'bebidas',
    href: '#bebidas',
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Cócteles',
    key: 'cocteles',
    href: '#cocteles',
    icon: renderIcon(WineIcon),
    children: [
      {
        label: 'Flameados',
        key: 'flameados',
        href: '#flameados',
        icon: renderIcon(BookIcon)
      },
      {
        label: 'Analcohólicos',
        key: 'analcohólicos',
        href: '#analcoholicos',
        icon: renderIcon(BookIcon)
      },
      {
        label: 'Con Red Bull',
        key: 'cocteles_con_red_bull',
        href: '#cocteles-con-red-bull',
        icon: renderIcon(BookIcon)
      }
    ]
  },
  {
    label: 'Tragos',
    key: 'tragos',
    href: '#tragos',
    icon: renderIcon(WineIcon),
    children: [
      {
        label: 'Rones',
        key: 'rones',
        href: '#rones',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Whisky',
        key: 'whisky',
        href: '#whisky',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Cogñac',
        key: 'cognhac',
        href: '#cognhac',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Vodka',
        key: 'vodka',
        href: '#vodka',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Ginebra',
        key: 'ginebra',
        href: '#ginebra',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Tequila',
        key: 'tequila',
        href: '#tequila',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Otros',
        key: 'otros',
        href: '#otros',
        icon: renderIcon(PersonIcon)
      }
    ]
  },
  {
    label: 'Ofertas',
    key: 'ofertas',
    href: '#ofertas',
    icon: renderIcon(PersonIcon),
    children: [
      {
        label: 'Botellas',
        key: 'botellas',
        href: '#botellas',
        icon: renderIcon(PersonIcon)
      },
      {
        label: 'Botellas y Bebidas',
        key: 'botellas_y_bebidas',
        href: '#botellas-y-bebidas',
        icon: renderIcon(PersonIcon)
      }
    ]
  }

]

// ------------------------------------

export default defineComponent({
  components: {

    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NLayoutFooter,

    NSpace,
    NMenu,
    NPageHeader,
    NAvatar
  },
  // -------------
  setup () {
    return {
      activeKey: ref(null),
      collapsed: ref(true),
      menuOptions,
      renderMenuLabel (option) {
        if ('href' in option) {
          return h('a', { href: option.href, target: '_self' }, option.label)
        }
        return option.label
      }
    }
  }

  // ---------------
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
/*
@media (prefers-color-scheme: dark) {
    // all your styles for dark mode here
  * {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  }

  a.router-link-exact-active {
  color: #f03535;
}

  a {
  font-weight: bold;
  color: #ffffff;
}

}
*/
</style>
