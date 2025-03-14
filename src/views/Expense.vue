<template>
  <div class="p-4 space-y-6">
    <!-- Thanh tiêu đề & Breadcrumb -->
    <div class="flex items-center justify-between border-b pb-3">
      <!-- Tiêu đề (tuần) -->
      <div>
        <h2 class="text-2xl font-bold text-gray-700">Tuần {{ weekInfo.number }}</h2>
        <p class="text-sm text-gray-500">{{ weekInfo.startDate }} - {{ weekInfo.endDate }}</p>
      </div>

      <!-- Breadcrumb Home > Expense -->
      <div class="text-right text-sm text-gray-600 space-x-1">
        <router-link to="/" class="text-indigo-600 font-semibold"> Home </router-link>
        <span>&gt;</span>
        <span>Expense</span>
      </div>
    </div>

    <!-- Bảng chi tiêu (theo ngày & các danh mục) -->
    <div class="overflow-x-auto bg-white rounded-lg shadow">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100 border-b text-xs uppercase text-gray-600">
          <tr>
            <th class="px-3 py-2 text-left"></th>
            <th class="px-3 py-2 text-left">Xăng-Xe</th>
            <th class="px-3 py-2 text-left">Tất Yếu</th>
            <th class="px-3 py-2 text-left">Cơm/Nước</th>
            <th class="px-3 py-2 text-left">Tài Khoản</th>
            <th class="px-3 py-2 text-left">Lặt Vặt</th>
            <th class="px-3 py-2 text-left">Tổng</th>
            <th class="px-3 py-2 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(day, index) in dailyExpenses" :key="index" class="border-b hover:bg-gray-50 text-sm">
            <td class="px-3 py-2 font-medium text-gray-700">
              {{ day.dayLabel }}
            </td>
            <td class="px-3 py-2">{{ day.xangXe }}</td>
            <td class="px-3 py-2">{{ day.tatYeu }}</td>
            <td class="px-3 py-2">{{ day.comNuoc }}</td>
            <td class="px-3 py-2">{{ day.taiKhoan }}</td>
            <td class="px-3 py-2">{{ day.latVat }}</td>
            <td class="px-3 py-2 font-semibold">
              {{ day.tong }}
            </td>
            <td class="px-3 py-2 text-center space-x-2">
              <!-- Nút sửa -->
              <button class="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded" @click="editDay(index)">
                Edit
              </button>
              <!-- Nút xoá -->
              <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded" @click="deleteDay(index)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Nút thêm giao dịch (Add Expense) -->
    <div class="text-left">
      <button class="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded text-sm" @click="addDay">
        + Add Expense
      </button>
    </div>

    <!-- Ghi chú / Mô tả chi tiết, nếu muốn hiển thị phía dưới -->
    <div class="bg-white rounded-lg shadow p-4 space-y-1">
      <h3 class="uppercase text-xs font-bold text-gray-500">Mô tả</h3>
      <ul class="list-disc list-inside text-sm text-gray-700">
        <li v-for="(desc, i) in descriptions" :key="i">
          {{ desc }}
        </li>
      </ul>
    </div>

    <!-- Khu vực kết tuần / tóm tắt -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Cột trái (Cho nợ, Nợ, Chuyển khoản, v.v.) -->
      <div class="bg-white rounded-lg shadow p-4">
        <h4 class="text-sm font-semibold text-gray-600 mb-2">Giao dịch khác</h4>
        <table class="w-full text-sm text-gray-700">
          <thead>
            <tr>
              <th class="p-2 text-left">Cho nợ</th>
              <th class="p-2 text-left">Nợ</th>
              <th class="p-2 text-left">Chuyển vào VCB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-2">{{ summary.choNo }}</td>
              <td class="p-2">{{ summary.no }}</td>
              <td class="p-2">{{ summary.chuyenKhoanVCB }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Cột phải (Kết tuần, Tổng ví, v.v.) -->
      <div class="bg-white rounded-lg shadow p-4 space-y-1">
        <div class="flex justify-between text-sm text-red-600 font-bold">
          <span>Kết Tuần:</span>
          <span>{{ summary.ketTuan }}</span>
        </div>
        <hr />
        <div class="flex justify-between text-sm">
          <span>Tổng TK trong tuần:</span>
          <span>{{ summary.tongTrongTuan }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Tiền mặt (TM):</span>
          <span>{{ summary.tienMat }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Tổng TM tuần trước:</span>
          <span>{{ summary.tongTMTuanTruoc }}</span>
        </div>
        <hr />
        <div class="flex justify-between text-sm font-semibold text-indigo-600">
          <span>Tổng ví:</span>
          <span>{{ summary.tongVi }}</span>
        </div>
        <div class="flex justify-between text-sm font-semibold text-indigo-600">
          <span>VCB:</span>
          <span>{{ summary.vcb }}</span>
        </div>
        <div class="flex justify-between text-sm font-semibold text-indigo-600">
          <span>VP:</span>
          <span>{{ summary.vp }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeeklyExpenseTable',
  data() {
    return {
      weekInfo: {
        number: 45,
        startDate: '10/03',
        endDate: '16/03',
      },
      dailyExpenses: [
        {
          dayLabel: 'T2',
          xangXe: 46,
          tatYeu: '',
          comNuoc: 83,
          taiKhoan: 100,
          latVat: '',
          tong: 229,
        },
        {
          dayLabel: 'T3',
          xangXe: '',
          tatYeu: 15,
          comNuoc: '',
          taiKhoan: 155,
          latVat: 46,
          tong: 216,
        },
        // ... T4, T5, T6, T7, CN ...
      ],
      descriptions: ['Thuốc nhuộm: 46', 'Bánh canh lóc: 100', 'Cà phê sữa: 15', 'Ổ điện: 85'],
      summary: {
        choNo: 0,
        no: 30,
        chuyenKhoanVCB: -190,
        ketTuan: 586,
        tongTrongTuan: -802,
        tienMat: 0,
        tongTMTuanTruoc: 0,
        tongVi: 270,
        vcb: 0,
        vp: 0,
      },
    }
  },
  methods: {
    addDay() {
      // Gọi form/thao tác thêm mới.
      alert('Mở form thêm Expense (chưa triển khai)')
    },
    editDay(index) {
      // Gọi form/thao tác sửa row dailyExpenses[index].
      alert(`Edit row ${index} (chưa triển khai)`)
    },
    deleteDay(index) {
      // Xóa row dailyExpenses[index].
      const confirmDelete = confirm('Bạn có chắc muốn xoá?')
      if (confirmDelete) {
        this.dailyExpenses.splice(index, 1)
      }
    },
  },
}
</script>

<style scoped>
/* Tuỳ chỉnh CSS thêm nếu muốn */
</style>
