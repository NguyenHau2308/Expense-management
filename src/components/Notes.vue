<template>
  <div>
    <h2>Notes</h2>
    <p>Trang này cho phép bạn lưu lại ghi chú học tập:</p>
    <textarea
      v-model="noteText"
      placeholder="Viết ghi chú ở đây..."
      class="form-control mb-2"
    ></textarea>
    <button class="btn btn-primary" @click="saveNote">Lưu ghi chú</button>

    <h3 class="mt-4">Ghi chú đã lưu</h3>
    <div v-for="(note, index) in notes" :key="index" class="border p-2 mb-2">
      {{ note }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {
      noteText: "",
      notes: [],
    };
  },
  created() {
    // Lấy ghi chú từ localStorage khi component load
    const saved = localStorage.getItem("notes");
    if (saved) {
      this.notes = JSON.parse(saved);
    }
  },
  methods: {
    saveNote() {
      if (this.noteText.trim() !== "") {
        this.notes.push(this.noteText);
        this.noteText = "";
        // Lưu notes vào localStorage
        localStorage.setItem("notes", JSON.stringify(this.notes));
      }
    },
  },
};
</script>

<style scoped>
/* CSS tùy chọn */
</style>
