<script setup>
import { ref } from 'vue';
import { dataGambar } from '@/lib/dataGambar';

const timeLeft = ref(0); // Mulai dari 0 detik
const millisecondsLeft = ref(0); // Milidetik
const timer = ref(null); // Simpan ID timer
const isRunning = ref(false); // Status timer
const currentImage = ref([]); // Gambar yang ditampilkan saat ini

const pilihan1 = '1';
const pilihan2 = '2';
const pilihan3 = '3';
const pilihan4 = '4';

// Gambar awal yang ditampilkan
const initialImages = [
  dataGambar.find(gambar => gambar.id === pilihan1),
  dataGambar.find(gambar => gambar.id === pilihan2),
  dataGambar.find(gambar => gambar.id === pilihan3),
  dataGambar.find(gambar => gambar.id === pilihan4),
];

// Set gambar awal ketika komponen dimuat
currentImage.value = initialImages;

// TIMER SET
const startTimer = () => {
  // Reset waktu dan mulai timer
  timeLeft.value = 0; // Setel waktu mulai dari 0
  millisecondsLeft.value = 0;

  // Hentikan timer yang mungkin sedang berjalan
  if (timer.value) {
    clearInterval(timer.value);
  }

  isRunning.value = true; // Set status timer menjadi berjalan

  // Mulai timer baru
  timer.value = setInterval(() => {
    millisecondsLeft.value += 1; // Tambah milidetik setiap 10 ms
    if (millisecondsLeft.value >= 100) {
      millisecondsLeft.value = 0; // Reset milidetik setiap 100 ms
      timeLeft.value += 1; // Tambah satu detik
    }

    // Hentikan timer ketika waktu mencapai 10 detik
    if (timeLeft.value >= 10 && millisecondsLeft.value === 0) {
      clearInterval(timer.value); // Hentikan timer setelah 10 detik
      isRunning.value = false; // Set status timer menjadi tidak berjalan
    }
  }, 10); // Interval setiap 10 ms

  // Tampilkan gambar satu per satu
  showImages();
};

// DISPLAY ALL
const showImages = () => {
  let currentIndex = 0; // Indeks gambar saat ini

  // Tampilkan gambar satu per satu setiap 0.5 detik
  const imageTimer = setInterval(() => {
    if (currentIndex < dataGambar.length) {
      currentImage.value = [dataGambar[currentIndex]]; // Tampilkan gambar saat ini
      currentIndex++; // Naikkan indeks
    } else {
      clearInterval(imageTimer); // Hentikan interval jika semua gambar sudah ditampilkan
    }
  }, 500); // Jeda setengah detik
};
</script>

<template>
  <div class="flex flex-col bg-red-600 justify-center items-center w-full h-screen">
    <!-- blok waktu -->
    <div class="flex flex-col justify-center items-center w-full h-[20%] bg-red-400">
      <h1 class="text-white text-2xl">
        Time left: {{ timeLeft < 10 ? '0' : '' }}{{ timeLeft }}:{{ String(millisecondsLeft).padStart(2, '0') }}
      </h1>
      <button
        @click="startTimer"
        :disabled="isRunning"
        class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
        :class="{ 'opacity-50 cursor-not-allowed': isRunning }"
      >
        Start Timer
      </button>
    </div>

   <!-- blok isi gambar -->
<div v-for="gambar in currentImage" :key="gambar.id">
  <div class="flex flex-col justify-center items-center w-[200px] h-[250px] bg-white rounded">
    <img :src="gambar.url" alt="Image" class="object-cover w-full h-full rounded" />
    <!-- Menampilkan id juga jika diinginkan -->
    <span class="text-sm mt-2">{{ gambar.id }}</span>
  </div>
</div>
</div>
</template>