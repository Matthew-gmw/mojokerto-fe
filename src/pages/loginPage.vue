<template>
  <div class="w-screen h-screen bg-gray-100 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-semibold text-center mb-6">Login</h2>

      <form @submit.prevent="submitLogin">
        <!-- Username Input -->
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            type="username"
            id="username"
            v-model="username"
            placeholder="Enter your username"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            required
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-400"
            required
          />
        </div>

        <!-- Submit Button -->
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Log In
          </button>
        </div>
      </form>

      <!-- Additional Links -->
      <div class="mt-6 text-center">
        <a href="#" class="text-sm text-gray-500 hover:text-black"
          >Forgot your password?</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import cookie from "@/plugin/cookie";
import router from "@/router";
export default {
  setup() {
    const username = ref("");
    const password = ref("");

    const submitLogin = async () => {
      try {
        const response = await axios.post("http://localhost:6969/users/login", {
          username: username.value,
          password: password.value,
        });
        cookie.setUserData(
          response.data.data.username,
          response.data.data.user_access,
          response.data.data.id
        );
        router.push("/");
        location.reload();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      username,
      password,
      submitLogin,
    };
  },
};
</script>

<style></style>
