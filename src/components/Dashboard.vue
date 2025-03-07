<template>
  <div>
    <h2 class="mb-4">Dashboard</h2>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="card p-3 text-center">
          <h5>Mục đã học</h5>
          <h3>{{ learnedTopics }}/{{ totalTopics }}</h3>
          <small>Tiến độ: {{ progress }}%</small>
        </div>
      </div>
      <div class="col-md-9 mb-3">
        <div class="card p-3">
          <h5 class="mb-3">Tiến độ học (theo ngày)</h5>
          <LineChart :chart-data="chartData" :chart-options="chartOptions" />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card p-3">
          <h5>Recent Activity</h5>
          <ul class="list-unstyled">
            <li v-for="(act, index) in recentActivity" :key="index">
              {{ act }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Chart, registerables } from "chart.js";
import { LineChart } from "vue-chart-3"; // Sử dụng LineChart thay vì Line

// Đăng ký Chart.js
Chart.register(...registerables);

export default defineComponent({
  components: {
    LineChart, // Dùng LineChart thay vì Line
  },
  setup() {
    const learnedTopics = ref(5);
    const totalTopics = ref(20);
    const recentActivity = ref([
      "Hoàn thành chủ đề: Variables",
      "Làm quiz: Basic JS score 80%",
      "Xem tài liệu: MDN Array methods",
    ]);

    const chartData = ref({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Chủ đề học mỗi ngày",
          data: [1, 2, 1, 3, 2, 0, 2],
          borderColor: "blue",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
          tension: 0.1,
        },
      ],
    });

    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
    });

    return {
      learnedTopics,
      totalTopics,
      recentActivity,
      chartData,
      chartOptions,
    };
  },
  computed: {
    progress() {
      return Math.round((this.learnedTopics / this.totalTopics) * 100);
    },
  },
});
</script>


<style>
.card {
  background: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>
