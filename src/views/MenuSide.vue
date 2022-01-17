<template>
  <div class="menu">
    <MenuSides></MenuSides>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuSides from '@/components/MenuSides.vue'
export default {
  name: 'MenuSide',
  components: {
    MenuSides
  }
}
</script>
