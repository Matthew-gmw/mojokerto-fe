<template>
  <div>
    <mainPage v-if="userid != null" />
    <router-view v-if="userid == null" />
  </div>
</template>

<script>
import mainPage from "./pages/master/mainPage.vue";
import cookie from "./plugin/cookie";
import { ref } from "vue";
export default {
  name: "App",
  components: {
    mainPage,
  },
  setup() {
    const userid = ref([]);
    const getUserData = async () => {
      userid.value = await cookie.getUserid();
    };

    getUserData();

    return {
      userid,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
