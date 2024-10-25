<script setup>
import { dataGambar } from '@/lib/dataGambar';

const pilihan1='1';
const pilihan2='2';
const pilihan3='3';
const pilihan4='4';


</script>
<template>
    <div class="flex flex-col bg-gray-600 justify-center items-center w-full h-screen">

        <div class="flex flex-row justify-center items-center w-full h-[70%] bg-gray-400 gap-3">
            <div v-for="gambar in dataGambar" :key="gambar.id">
                <div v-if="gambar.id===pilihan1 || gambar.id===pilihan2 || gambar.id===pilihan3 || gambar.id===pilihan4" 
                class="flex flex-row justify-center items-center w-[200px] h-[250px] bg-white rounded">
                {{ gambar.id }}
                </div>
            </div>
        </div>

        <div class="flex flex-wrap justify-center items-center w-full h-[30%] bg-gray-500"></div>
        
    </div>
</template>