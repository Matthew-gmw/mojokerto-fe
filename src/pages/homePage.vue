<template>
  <!-- Judul Home Page  -->
  <div class="text-left ml-4 py-2">
    <h1 class="text-2xl font-bold">Home Page</h1>
  </div>

  <div class="border-box">
    <!-- Tabel Assessment -->
    <h2>Assessment</h2>
    <table class="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-4 py-2">Judul</th>
          <th class="border border-gray-300 px-4 py-2">Input</th>
          <th class="border border-gray-300 px-4 py-2">Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <div class="flex justify-center space-x-2">
              <router-link to="/rules">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Input Soal
              </button>
              </router-link>
              <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Input Responden
              </button>
            </div>
          </td>
          <td class="border border-gray-300 px-4 py-2 text-right">
            <div class="flex justify-center items-center h-full">
              {{ item.nilai }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 'Assessment A', nilai: 100 },
        { id: 'Assessment B', nilai: 90 },
        { id: 'Assessment C', nilai: 75 },
        { id: 'Assessment D', nilai: 80 },
        { id: 'Assessment E', nilai: 95 },
      ],
    };
  },
};
</script>

<style scoped>
.border-box {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}

table {
  margin-top: 20px;
}

button {
  transition: background-color 0.3s ease;
}

h1 {
  margin: 0;
}

.flex {
  display: flex;
}

.space-x-2 > * + * {
  margin-left: 0.5rem;
}

.text-right {
  text-align: right;
}
</style>