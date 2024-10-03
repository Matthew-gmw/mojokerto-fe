<template>
  <div>
    <!-- Profil Card -->
    <div class="profile-card ml-80">
      <!-- Gambar Profil -->
      <div class="profile-image ml-11">
        <img
          :src="profileImage"
          alt="Profile Image"
          class="rounded-full border-2 border-gray-300 shadow-lg"
        />
      </div>

      <!-- Nama dan Deskripsi -->
      <div class="profile-details">
        <h1 class="profile-name text-2xl font-bold text-gray-800">
          {{ profileName }}
        </h1>
        <p class="text-gray-500">{{ profileDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: require("@/assets/gambar.jpg"), // URL gambar default (dapat diubah dengan link gambar Anda)
      profileName: "Genesy Matthew", // Nama pengguna
      profileDescription: "Web Developer, Gaming Enthusiast", // Deskripsi singkat tentang pengguna
    };
  },
};
</script>

<style scoped>
/* Styling untuk Profile Card */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.profile-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
}

.profile-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.profile-details {
  margin-top: 20px;
}

.profile-name {
  margin-bottom: 5px;
}
</style>
