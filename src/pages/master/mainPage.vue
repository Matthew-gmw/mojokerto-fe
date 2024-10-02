<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <navPage />
    <!-- Header Bar -->
    <div class="w-full h-full bg-white-500">
      <div
        class="h-[50px] bg-gray-100 flex items-center justify-between shadow-sm px-[15px] w-full py-[10px] z-10 border-b"
      >
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
        <!--Profile Section-->
        <div class="flex items-center space x-4">
          <!-- Profile Icon -->
          <div class="me-2 w-8 h-8 rounded-full bg-gray-300 flex items items-center justify-center">
            <font-awesome-icon :icon="['fas', 'user']" class="text-black"/>
          </div>
          <!--Name and Status-->
          <div class="text-left">
            <div class="text-sm font-bold">Genesy Matthew</div>
            <div class="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-white">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// Import FontAwesomeIcon component and the icons from the library
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; // Import library
import {
  faHome,
  faUser,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import navPage from "@/pages/navPage.vue";

// Add icons to the library
library.add(faHome, faUser, faCog, faBars);

export default {
  components: {
    FontAwesomeIcon,
    navPage,
  },
};
</script>

<style></style>
