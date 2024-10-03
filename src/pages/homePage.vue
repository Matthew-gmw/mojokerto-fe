<template>
      <!-- Judul Home Page  -->
      <div class="text-left ml-4 py-2">
      <h1 class="text-2xl font-bold">Home Page</h1>
    </div>
  <div class="border-box">
    <!-- Tabel Assessment-->
    <h2>Assessment</h2>
    <table class="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Nilai</th>
          <th class="border border-gray-300 px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.id">
          <td class="border border-gray-300 px-4 py-2">{{ item.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ item.nilai }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
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
        { id: '2488cd43-fa63-47dc-903b-50f13992a95d', nilai: 100 },
        { id: '2d070efa-b394-4790-a9c7-8f0a4d607fc8', nilai: 90 },
        { id: 'be37647d-ebe5-4d21-8cc1-729c46a960cb', nilai: 75 },
        { id: 'bb34911c-d3a3-4e14-b9e7-2acf6d067f44', nilai: 80 },
        { id: '7366d72c-83a1-45c5-b31a-ae76ef2ba9eb', nilai: 95 },
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
</style>