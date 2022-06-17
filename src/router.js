import { createWebHistory, createRouter } from "vue-router";
import add from "./components/add.vue";
import edit from "./components/edit.vue";
import delt from "./components/delt.vue";
import list from "./components/list.vue";
import mn from "./components/mn.vue";
import listMultiplePages from "./components/listMultiplePages.vue"
const routes = 
 [
  {
    path:"/add",
    name:'add',
    component:add
  },
  {
    path:"/",
    name:'mn',
    component:mn
  },
  {
    path:'/list',
    name:'list',
    component:list
  },
  {
    path:'/listMultiplePages/:id',
    name:'listMultiplePages',
    component:listMultiplePages

  },
  {
    path:'/delt/:id',
    name:'delt',
    component:delt

  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
 
