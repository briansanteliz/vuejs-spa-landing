<template>
  <div>
    <hr class />
    <footer class="container py-5">
      <div class="row">
        <div class="col-md-6">
          <nav class="nav justify-content-center justify-content-md-start">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/somos">¿Quienes Somos?</router-link>
            <router-link class="nav-link" to="/ultimos">Cursos</router-link>
            <router-link class="nav-link" to="/faq">FAQ</router-link>
          </nav>
        </div>
        <div class="col-md-6">
          <p class="copyright text-center text-md-right">Todos los Derechos Reservados {{year}}</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>