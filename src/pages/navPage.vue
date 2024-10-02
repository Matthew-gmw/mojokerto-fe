<template>
  <div class="w-[300px] h-full bg-gray-200 flex flex-col">
    <!-- Admin Dashboard Header -->
    <div
      class="h-[50px] bg-gray-900 text-black flex justify-start items-center"
    >
      <div class="px-[20px]">
        <h3 class="font-bold rounded text-white">Admin</h3>
      </div>
    </div>

    <!-- Main Menu -->
    <div
      class="bg-gray-800 text-white px-[10px] flex-grow flex flex-col justify-between"
    >
      <div class="flex flex-col">
        <!-- Home Button -->
        <router-link
          to="/"
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
        <!-- <router-link
          to="/settings"
          class="flex items-center space-x-2 text-white hover:bg-white hover:text-black py-3 px-4 rounded-md transition-colors duration-300"
        >
          <font-awesome-icon :icon="['fas', 'cog']" class="fa-xs ml-1" />
          <span> Settings </span>
        </router-link> -->
        <button @click="logoutAction">Logout</button>
      </div>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core"; // Import library
import {
  faHome,
  faUser,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import Cookies from "js-cookie";
import router from "@/router";

library.add(faHome, faUser, faCog, faBars);
export default {
  components: {
    FontAwesomeIcon,
  },
  setup() {
    const logoutAction = async () => {
      console.log("test");

      try {
        Cookies.remove("userid");
        Cookies.remove("username");
        Cookies.remove("user_access");
        router.push("/");
        location.reload();
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.log(error);
      }
    };

    return {
      logoutAction,
    };
  },
};
</script>
