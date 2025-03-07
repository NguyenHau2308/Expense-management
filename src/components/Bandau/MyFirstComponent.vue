<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Đang tải...',
    };
  },
  async created() {
    try {
      // Gọi API đến backend
      const response = await fetch('http://localhost:8888/api/hello');
      const data = await response.json();
      this.message = data.message; // Gán message từ backend vào data
    } catch (error) {
      console.error(error);
      this.message = 'Lỗi khi lấy dữ liệu từ server.';
    }
  },
};
</script>
