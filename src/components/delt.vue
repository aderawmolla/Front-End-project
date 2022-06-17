<template>
  <div>

    <button class=" font-serif font-semibold w-40 rounded-md h-10 bg-cyan-800 hover:bg-cyan-900 active:bg-red-900 " @click="deletePage()"><span class="text-2xl text-white">Delete Page</span></button>
  </div>
</template>
<script setup>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";
    const route = useRoute();
    const id= route.params.id;
    const { mutate: deletePage } = useMutation(
      gql`
        mutation deletePage($id: int) {
          deletePage(id: $id) {
            id
            title
            description
            image_url
          
          }
        }
      `,
      () => ({ variables:
      {id: id} }),
    )
</script>
<style lang=""></style>
