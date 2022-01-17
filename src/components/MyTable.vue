<template>
  <n-data-table id="data-table"
    ref="datatable"
    :key="(row) => row.key"
    :columns="columns"
    :data="data"
    :single-line="false"
    striped
    style="top:1vh; width:90vw; left:5vw; right:5vw;"
  />
  <!-- <pre style>{{ JSON.stringify(data, null, 2) }}</pre> -->
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
  },
  {
    key: 3,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 4,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 5,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 6,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 7,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 8,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 9,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 10,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 11,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 12,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 13,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 14,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 15,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 16,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: 17,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 18,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 19,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 20,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 21,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 22,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 23,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 24,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 25,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 26,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 27,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 28,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 29,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 30,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 31,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 32,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 33,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 34,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 35,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 36,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 37,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 38,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 39,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 40,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 41,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 42,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 43,
    name: 'Joe Black',
    age: '32',
    address: 'Sidney No. 1 Lake Park'
  }, {
    key: 44,
    name: 'Final Joe Black',
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
    // const page = this.datatable.page()
    return {
      data: data,
      // page: page,
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
