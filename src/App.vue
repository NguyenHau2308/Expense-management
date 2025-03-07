<template>
  <div class="d-flex" style="height:100vh; overflow:hidden;">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content area -->
    <div class="flex-fill d-flex flex-column">
      <!-- Navbar ở trên -->
      <Navbar />
      
      <!-- Nội dung chính thay đổi theo route -->
      <div class="p-4 overflow-auto" style="background:#f8f9fa; flex:1;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar
  }
}
</script>
