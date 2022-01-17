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
    <router-view/>
  </div>
</template>

<script>
import { NLayoutHeader, NPageHeader, NAvatar } from 'naive-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    NLayoutHeader,

    NPageHeader,
    NAvatar
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
