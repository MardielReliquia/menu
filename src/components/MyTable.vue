<template>
  <n-data-table id="data-table"
    :key="(row) => row.key"
    :columns="columns"
    :data="data"
    :pagination="pagination"
    striped
    :single-line="false"
  />
 <!-- <pre>{{ JSON.stringify(data, null, 2) }}</pre> -->
</template>

<script>
import { h, defineComponent, ref, nextTick } from 'vue'
import { NInput, NDataTable, NButton, NSpace } from 'naive-ui'

const createData = () => [
  {
    key: 0,
    name: 'John Brown',
    age: '32',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: 1,
    name: 'Jim Green',
    age: '42',
    address: 'London No. 1 Lake Park'
  },
  {
    key: 2,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }
]

const ShowOrEdit = defineComponent({
  props: {
    value: [String, Number],
    onUpdateValue: [Function, Array]
  },
  setup (props) {
    const isEdit = ref(false)
    const inputRef = ref(null)
    const inputValue = ref(props.value)
    function handleOnClick () {
      isEdit.value = true
      nextTick(() => {
        inputRef.value.focus()
      })
    }
    function handleChange () {
      props.onUpdateValue(inputValue.value)
      isEdit.value = false
    }
    return () =>
      h(
        'div',
        {
          onClick: handleOnClick
        },
        isEdit.value
          ? h(NInput, {
            ref: inputRef,
            value: inputValue.value,
            onUpdateValue: (v) => {
              inputValue.value = v
            },
            onChange: handleChange,
            onBlur: handleChange
          })
          : props.value
      )
  }
})

export default defineComponent({
  name: 'MyTable',
  components: {
    NDataTable
  },
  setup () {
    const data = ref(createData())
    return {
      data: data,
      columns: [
        {
          title: 'Name',
          key: 'name',
          width: 150,
          render (row, index) {
            return h(ShowOrEdit, {
              value: row.name,
              onUpdateValue (v) {
                data.value[index].name = v
              }
            })
          }
        },
        {
          title: 'Age',
          key: 'age',
          width: 100,
          render (row, index) {
            return h(ShowOrEdit, {
              value: row.age,
              onUpdateValue (v) {
                data.value[index].age = v
              }
            })
          }
        },
        {
          title: 'Address',
          key: 'address',
          width: 100,
          render (row, index) {
            return h(ShowOrEdit, {
              value: row.address,
              onUpdateValue (v) {
                data.value[index].address = v
              }
            })
          }
        },
        {
          title: 'Action',
          key: 'actions',
          width: 150,
          render (row, index) {
            return h(
              NSpace,
              {},
              [
                h(
                  NButton,
                  {
                    size: 'small'// ,
                    // onClick: () => sendMail(row)
                  },
                  { default: () => 'Send Email1' }
                ),
                h(
                  NButton,
                  {
                    size: 'small'// ,
                    // onClick: () => sendMail(row)
                  },
                  { default: () => 'Send Email2' }
                ),
                h(
                  NButton,
                  {
                    size: 'small'// ,
                    // onClick: () => sendMail(row)
                  },
                  { default: () => 'Send Email3' }
                )
              ]
            )
          }
        }
      ],
      pagination: {
        pageSize: 10
      }
    }
  }
})
</script>

<style scoped>
#data-table {
  max-height: 70vh;
}
</style>
