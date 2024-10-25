<!-- src/components/TimerPage.vue -->
<template>
  <div class="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-white">
    <!-- Timer Card -->
    <div class="bg-white text-gray-900 rounded-lg shadow-lg p-8 flex flex-col items-center w-80 animate-fade-in-down">
      <h2 class="text-3xl font-bold mb-4">Time Left</h2>
      <p class="text-4xl font-mono tracking-wide">
        {{ timeLeft < 10 ? '0' : '' }}{{ timeLeft }}:
        <span class="text-2xl">{{ String(millisecondsLeft).padStart(2, '0') }}</span>
      </p>
      <button
        @click="startTimer"
        :disabled="isRunning"
        class="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        Start Timer
      </button>
    </div>

    <!-- Gambar Container -->
    <div class="mt-10 flex flex-wrap justify-center items-center w-full gap-4">
      <div
        v-for="gambar in currentImage"
        :key="gambar.id"
        @click="handleImageClick(gambar.id)"
        class="w-48 h-60 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 animate-slide-in cursor-pointer"
      >
        <img :src="gambar.url" alt="Image" class="object-cover w-full h-full" />
      </div>
    </div>

    <div v-if="isFinished" class="mt-10 bg-green-500 text-white p-4 rounded-lg">
      <p>Anda sudah mengerjakan semua soal!</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { dataGambar } from '@/lib/dataGambar';

const startTime = 5; // Total waktu dalam detik
const timeLeft = ref(startTime); // Mulai dari 10 detik
const millisecondsLeft = ref(0); // Milidetik
const timer = ref(null); // Simpan ID timer
const isRunning = ref(false); // Status timer
const currentImage = ref([]);
const isPaused = ref(false); // Status untuk menghentikan sementara timer
let currentIndex = 0; // Indeks gambar saat ini

// Mulai timer dan tampilkan gambar
const startTimer = () => {
  resetTimer(); // Set waktu ke nilai awal
  isRunning.value = true;
  isPaused.value = false;

  if (timer.value) clearInterval(timer.value);

  // Timer berjalan setiap 10 ms, hitungan mundur
  timer.value = setInterval(() => {
    if (!isPaused.value) {
      if (millisecondsLeft.value === 0) {
        if (timeLeft.value > 0) {
          timeLeft.value--; // Kurangi detik jika milidetik mencapai 0
          millisecondsLeft.value = 99; // Reset milidetik ke 99
        } else {
          clearInterval(timer.value); // Hentikan timer jika waktu habis
          isRunning.value = false;
        }
      } else {
        millisecondsLeft.value--; // Kurangi milidetik
      }
    }
  }, 10);

  // Mulai tampilan gambar pertama
  showImages();
};

// Reset waktu ke nilai awal
const resetTimer = () => {
  timeLeft.value = startTime;
  millisecondsLeft.value = 0;
};

// Tampilkan gambar satu per satu
const showImages = () => {
  currentIndex = 0;
  changeImage();
};

// Ganti gambar dengan jeda waktu
const changeImage = () => {
  if (currentIndex < dataGambar.length) {
    currentImage.value = [dataGambar[currentIndex]];
    currentIndex++;
  } else {
    clearInterval(timer.value); // Hentikan jika semua gambar sudah ditampilkan
  }
};

// Ketika gambar diklik
const handleImageClick = (id) => {
  if (!isPaused.value && isRunning.value) {
    isPaused.value = true; // Pause timer saat gambar diklik

    // Cek apakah gambar yang diklik bukan target
    if (id !== "target-id") {
      // Tampilkan pesan atau lakukan sesuatu untuk gambar yang salah

      // Reset dan mulai timer lagi setelah jeda singkat
      setTimeout(() => {
        resetTimer(); // Reset waktu ke nilai awal
        changeImage(); // Tampilkan gambar berikutnya
        isPaused.value = false; // Lanjutkan timer
      }, 1000); // Jeda 1 detik sebelum melanjutkan gambar berikutnya
    }
  }
};
</script>

<style scoped>
/* Animasi fade-in untuk tampilan timer card */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.5s ease-in-out;
}

/* Animasi slide-in untuk gambar */
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.5s ease-in-out;
}
</style>
