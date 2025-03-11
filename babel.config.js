module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

//Nếu dùng Vue CLI (vue.config.js) → Cần, vì Vue CLI tích hợp Babel để hỗ trợ ES6+.
//Nếu dùng Vite (vite.config.js) → Không cần, vì Vite dùng ESBuild thay vì Babel, nhanh hơn nhiều.