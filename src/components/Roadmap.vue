<template>
  <div>
    <h2>Roadmap</h2>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="topic in topics" :key="topic.name">
        <div class="card p-3">
          <h5>{{ topic.name }}</h5>
          <p>{{ topic.description }}</p>
          <button class="btn btn-sm btn-outline-primary" @click="markAsLearned(topic)">Đã học xong</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roadmap',
  data() {
    return {
      topics: [
        { name: 'Biến và Kiểu dữ liệu', description: 'Hiểu let, const, var và các kiểu dữ liệu cơ bản', learned: false },
        { name: 'Cấu trúc điều khiển', description: 'if, for, while, switch', learned: false },
        // ... thêm nhiều topic
      ]
    }
  },
  methods: {
    markAsLearned(topic) {
      topic.learned = true;
      // logic lưu lại trạng thái (localStorage hoặc call API)
    }
  }
}
</script>
