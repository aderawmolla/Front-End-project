<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
export default {
  setup() {
    const {result} = useQuery(gql`
      query getAllPages {
        getAllPages {
          id
          title
          description
          image_url
        }
      }
    `);
  return{
    result
  }
}
};
</script>
<template>

  <div v-if="error">Something went wrong...</div>
  <div v-if="loading">Loading...</div>
  <div v-for="page in result.getAllPages"
      :key="page.id"
    >
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"> 
     <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      <div class="flex-direction-row">
        <div class="pt-1 mr-6 text-center">
          <div class="px-2 pb-1 mb-1 border-b border-gray-400">
            <p class="text-sm text-blue-gray-700">{{page.id}}</p>
          </div>
        </div>
        <div>
          <div class="mb-2">
          </div>
          <div class="mb-2">
          </div>
          
          <div class="flex items-center">
            <a href="/" aria-label="Author" title="Author" class="mr-3">
              <img v-bind:src="page.image_url" alt="avatar" class="object-cover w-10 h-10 rounded-full shadow-sm" />
            </a>
            <div>
    <router-link :to="{name:'listMultiplePages',params:{id:page.id,
    title:page.title,
    image_url:page.image_url,
    description:page.description
    }}"> <span aria-label="Author" title="Author" class="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">{{page.title}}</span></router-link>
              <p class="text-sm font-medium leading-4 text-gray-600">preview this page</p>
              <p class="mb-5 text-gray-700">
               {{page.description}}
          </p>
            </div>
          </div>
        </div>
      </div>
      </div>
   </div> 
</div>
</template>
    
    
  
  
  
  