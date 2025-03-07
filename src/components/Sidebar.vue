<template>
  <div class="bg-dark text-light" style="width:250px;">
    <div class="p-3 border-bottom" style="height:60px;">
      <h5 class="m-0">JS Learner</h5>
    </div>
    <ul class="list-unstyled p-2">
      <li><router-link to="/" class="text-light d-block py-2">Dashboard</router-link></li>
      <li><router-link to="/roadmap" class="text-light d-block py-2">Roadmap</router-link></li>
      <li><router-link to="/quiz" class="text-light d-block py-2">Quiz</router-link></li>
      <li><router-link to="/resources" class="text-light d-block py-2">Resources</router-link></li>
      <li><router-link to="/notes" class="text-light d-block py-2">Notes</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>