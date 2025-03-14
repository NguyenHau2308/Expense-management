module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  rules: {
    'prettier/prettier': 'off', // Tắt kiểm tra Prettier trong ESLint
    'vue/multi-word-component-names': 'off', // Tắt rule tên component chỉ có 1 từ ( ví dụ "Home" phải đổi thành "HomePage")
    'vue/no-reserved-component-names': 'off' // Tắt lỗi "Menu" là từ khóa HTML
  },
}
