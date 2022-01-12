<template>
  <div class="table">
    <my-table/>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
// @ is an alias to /src
export default {
  name: 'Table',
  components: {
    MyTable
  }
}
</script>
