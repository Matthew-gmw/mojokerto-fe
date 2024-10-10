<template>
    <div class="rules-page flex flex-col justify-between h-screen bg-gradient-to-r from-blue-100 to-blue-200 p-8">
      <!-- Ketentuan -->
      <div class="bg-white shadow-md p-8 rounded-lg max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold text-blue-900 mb-6 text-center">Peraturan Sebelum Memulai</h1>
        <ul class="list-none space-y-4">
          <li class="flex items-center">
            <font-awesome-icon :icon="['fas', 'clock']" class="text-blue-500 mr-4" />
            <span class="text-lg font-semibold">Batas Waktu: </span> <span class="ml-2 text-gray-700">60 Menit</span>
          </li>
          <li class="flex items-center">
            <font-awesome-icon :icon="['fas', 'stopwatch']" class="text-blue-500 mr-4" />
            <span class="text-lg font-semibold">Batas Waktu Tiap Soal: </span> <span class="ml-2 text-gray-700">30 Detik</span>
          </li>
          <li class="flex items-center">
            <font-awesome-icon :icon="['fas', 'exclamation-circle']" class="text-blue-500 mr-4" />
            <span class="text-lg font-semibold">Jika bukan gambar target: </span> <span class="ml-2 text-gray-700">Klik untuk melewati</span>
          </li>
        </ul>
      </div>
  
      <!-- Button Mulai -->
      <div class="flex justify-end mt-8">
        <button @click="openModal" class="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300">
          Mulai
        </button>
      </div>
  
      <!-- Confirmation Modal -->
      <div v-if="isModalVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
          <h2 class="text-xl font-semibold mb-4">Apakah Anda sudah siap?</h2>
          <div class="flex justify-between mt-4">
            <button @click="closeModal" class="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">Batal</button>
            <router-link to="/soal">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Mulai</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import FontAwesomeIcon and relevant icons
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faClock, faStopwatch, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
  
  // Add icons to the library
  library.add(faClock, faStopwatch, faExclamationCircle);
  
  export default {
    name: 'RulesPage',
    components: {
      FontAwesomeIcon
    },
    data() {
      return {
        isModalVisible: false // State to control the modal visibility
      };
    },
    methods: {
      openModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .rules-page {
    background-color: #f0f8ff;
  }
  
  ul li span {
    color: #333;
  }
  
  /* Modal styling */
  .fixed {
    position: fixed;
  }
  
  .inset-0 {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .z-50 {
    z-index: 50;
  }
  
  .bg-opacity-50 {
    background-opacity: 0.5;
  }
  
  
  .text-center {
    text-align: center;
  }
  </style>
  