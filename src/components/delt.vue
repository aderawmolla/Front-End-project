<script>
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { useRoute } from "vue-router";
const route = useRoute()
  
export default {
    
  setup () {
    const { mutate: deletePage} = useMutation(gql`
      mutation deletePage ($id: Int) {
        deletePage(id: $id) {
          id
        }
      }
    `)

    return {
      deletePage,
    }
  },
}
</script>

<template>
  <div>
    <button @click="deletePage({id:$route.params.id})">
      deletePage
    </button>
  </div>
</template>