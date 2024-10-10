<template>
    <div class="soal-page flex flex-col items-center justify-center h-screen">
      <!-- Timer -->
      <div class="mb-4 text-2xl font-bold text-red-600">
        Waktu tersisa: {{ formattedTimeRemaining }}
      </div>
  
      <!-- Image in the center -->
      <div @click="handleImageClick" class="cursor-pointer">
        <img src="https://via.placeholder.com/400" alt="Clickable Image" class="w-[400px] h-[400px] object-contain" />
      </div>
  
      <!-- Message after time runs out -->
      <div v-if="timeOver" class="mt-4 text-xl text-red-500 font-semibold">
        Waktu telah habis!
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        timeRemaining: 30 * 1000, // Time in milliseconds (30 seconds)
        timerInterval: null,      // Store the interval ID
        timeOver: false,          // To track if the time is over
      };
    },
    computed: {
      // Format time to display seconds and milliseconds
      formattedTimeRemaining() {
        const seconds = Math.floor(this.timeRemaining / 1000);
        const milliseconds = this.timeRemaining % 1000;
        return `${seconds}.${milliseconds.toString().padStart(3, '0')} detik`; // Format: "30.000 detik"
      },
    },
    methods: {
      // Method to handle click event on image
      handleImageClick() {
        if (!this.timeOver) {
          clearInterval(this.timerInterval); // Stop the timer when the image is clicked
          alert("Gambar diklik! Timer berhenti.");
        } else {
          alert("Waktu sudah habis!");
        }
      },
      // Countdown Timer Logic with milliseconds
      startTimer() {
        this.timerInterval = setInterval(() => {
          if (this.timeRemaining > 0) {
            this.timeRemaining -= 10; // Decrease time by 10 milliseconds
          } else {
            this.timeOver = true;
            clearInterval(this.timerInterval); // Stop the timer when time is up
          }
        }, 10); // Update every 10 milliseconds
      },
    },
    mounted() {
      this.startTimer(); // Start the timer when the component is mounted
    },
    beforeUnmount() {
      // Clear the interval if the component is destroyed
      clearInterval(this.timerInterval);
    },
  };
  </script>
  
  <style scoped>
  .soal-page {
    background-color: #f9f9f9;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  