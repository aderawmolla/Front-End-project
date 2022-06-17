<template>
<router-view></router-view>
  <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="relative flex items-center justify-between">
      <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbGaj6GyHLdy9tGXt2Rs9Pyrur1dwRZjunRNtJhdrA&s" alt="">
        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Hahu Jobs</span>
      </a>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <router-link :to="{name:'list'}" aria-label="Our product" title="Our product"
            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">preview pages</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'add'}"

            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up" title="Sign up">Add Page
          </router-link>
        </li>
      </ul>
      <div class="lg:hidden">
        <button aria-label="Open Menu" title="Open Menu"
          class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          @click="isMenuOpen = true">
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
            <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
            <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                  <svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round"
                    stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
                    <rect x="3" y="1" width="7" height="12"></rect>
                    <rect x="3" y="17" width="7" height="6"></rect>
                    <rect x="14" y="1" width="7" height="6"></rect>
                    <rect x="14" y="11" width="7" height="12"></rect>
                  </svg>
                  <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Hahu Jobs</span>
                </a>
              </div>
              <div>
                <button aria-label="Close Menu" title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false">
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                    </path>
                  </svg>
                </button>
                <!--start-->


   <!--end-->
              </div>
            </div>
            <nav>
            </nav>
          </div>

          
        </div>
      </div>
      
    </div>
    
  </div>
   <div>
                   
 <div class="relative flex flex-col-reverse py-16 lg:py-0 lg:flex-col">
    <div class="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
      <div class="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
        <h2 class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
          The quick, brown fox<br class="hidden md:block" />
          jumps over a lazy dog
        </h2>
        <p class="mb-5 text-base text-gray-700 md:text-lg md:text-center">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
        </p>
        <div class="mb-10 text-center md:mb-16 lg:mb-20">
          <a
            href="/"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </div>
        <div class="flex flex-col items-center">
          <div class="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex items-center">
              <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex items-center">
              <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex items-center">
              <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-6">
                  <path
                    d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="inset-y-10 top-10 right-10 w-full max-w-xl px-4 mx-auto mb-6 md:px-30 lg: lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
      <router-view></router-view>
    </div> 
   
  </div>
   </div>
  <div class="footer">
  
  </div>

  
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #9933cc;
  color: #ffffff;
  padding: 15px;
  text-align: center;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #33b5e5;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.footer {
  background-color: #0099cc;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For mobile phones: */
[class*="col-"] {
  width: 70%;
}

@media only screen and (min-width: 600px) {

  /* For tablets: */
  .col-s-1 {
    width: 8.33%;
  }

  .col-s-2 {
    width: 16.66%;
  }

  .col-s-3 {
    width: 25%;
  }

  .col-s-4 {
    width: 33.33%;
  }

  .col-s-5 {
    width: 41.66%;
  }

  .col-s-6 {
    width: 50%;
  }

  .col-s-7 {
    width: 58.33%;
  }

  .col-s-8 {
    width: 66.66%;
  }

  .col-s-9 {
    width: 75%;
  }

  .col-s-10 {
    width: 83.33%;
  }

  .col-s-11 {
    width: 91.66%;
  }

  .col-s-12 {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {

  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }

  .col-2 {
    width: 16.66%;
  }

  .col-3 {
    width: 25%;
  }

  .col-4 {
    width: 33.33%;
  }

  .col-5 {
    width: 41.66%;
  }

  .col-6 {
    width: 50%;
  }

  .col-7 {
    width: 58.33%;
  }

  .col-8 {
    width: 66.66%;
  }

  .col-9 {
    width: 75%;
  }

  .col-10 {
    width: 83.33%;
  }

  .col-11 {
    width: 91.66%;
  }

  .col-12 {
    width: 100%;
  }
}
</style>
