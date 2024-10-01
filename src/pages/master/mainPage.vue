<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div class="w-[300px] h-full bg-gray-200 flex flex-col">
      <!-- Admin Dashboard Header -->
      <div class="h-[50px] bg-gray-900 text-black flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold rounded text-white">Admin </h3>
        </div>
      </div>

      <!-- Main Menu -->
      <div class="bg-gray-800 text-white px-[10px] flex-grow flex flex-col justify-between">
        <div class="flex flex-col">
          <!-- Home Button -->
          <router-link
            to="/home"
            class="my-2 flex items-center space-x-2 text-white hover:bg-white hover:text-black py-2 px-3 rounded-md transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fas', 'home']" class="fa-xs ml-1" />
            <span> Home </span>
          </router-link>

          <!-- Profile Button -->
          <router-link
            to="/profile"
            class="my-2 flex items-center space-x-2 text-white hover:bg-white hover:text-black py-2 px-3 rounded-md transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fas', 'user']" class="fa-xs ml-1" />
            <span> Profile </span>
          </router-link>
        </div>

        <!-- Settings Button at the Bottom -->
        <div class="bg-gray-800 text-white px-[10px] pb-4">
          <router-link
            to="/settings"
            class="flex items-center space-x-2 text-white hover:bg-white hover:text-black py-3 px-4 rounded-md transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fas', 'cog']" class="fa-xs ml-1" />
            <span> Settings </span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full h-full bg-white-500">
      <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[15px] w-full py-[10px] z-10 border-b">
        <div class="flex items-center">
          <div class="ml-2">
            <font-awesome-icon :icon="['fas', 'bars']" class="text-black" />
          </div>
          <!-- Search Bar -->
          <input
            type="text"
            placeholder="Search..."
            class="ml-4 border rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-black-500"
          />
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-white">
        Main
      </div>
    </div>
  </div>
</template>

<script>
// Import FontAwesomeIcon component and the icons from the library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; // Import library
import { faHome, faUser, faCog, faBars } from '@fortawesome/free-solid-svg-icons' // Import icons

// Add icons to the library
library.add(faHome, faUser, faCog, faBars);

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style></style>