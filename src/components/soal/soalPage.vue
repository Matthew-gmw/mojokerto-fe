<template>
  <div class="flex">
    <!-- Sidebar -->
    <div class="w-[300px] bg-gray-200 h-screen">
      <!-- Isi Sidebar -->
      <div class="p-4">
        <h3 class="font-bold text-xl mb-4">Menu</h3>
        <!-- Tambahkan item-menu lain di sini -->
        <router-link to="/home" class="block my-2">Home</router-link>
        <router-link to="/profile" class="block my-2">Profile</router-link>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col w-full h-screen">
      <!-- Navbar -->
      <div class="h-[60px] bg-gray-900 text-white flex items-center justify-between px-4">
        <div>
          <h1 class="text-xl font-bold">Soal Page</h1>
        </div>
        <div>
          <router-link to="/settings" class="hover:text-gray-300">Settings</router-link>
        </div>
      </div>

      <!-- Soal Section -->
      <div class="flex flex-col bg-red-600 justify-center items-center w-full h-full">
        <!-- Bagian gambar soal -->
        <div class="flex flex-row justify-center items-center w-full h-[70%] bg-red-400 gap-3">
          <div v-for="gambar in dataGambar" :key="gambar.id">
            <div v-if="gambar.id === pilihan1 || gambar.id === pilihan2 || gambar.id === pilihan3 || gambar.id === pilihan4"
              class="flex flex-row justify-center items-center w-[200px] h-[250px] bg-white rounded">
              {{ gambar.id }}
            </div>
          </div>
        </div>

        <!-- Bagian bawah (jika diperlukan) -->
        <div class="flex justify-center items-center w-full h-[30%] bg-gray-500">
          <!-- Konten tambahan -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataGambar } from '@/lib/dataGambar';

// Menentukan gambar pilihan yang muncul
const pilihan1 = '1';
const pilihan2 = '2';
const pilihan3 = '3';
const pilihan4 = '4';
</script>

<style scoped>
/* CSS tambahan jika diperlukan */
</style>
