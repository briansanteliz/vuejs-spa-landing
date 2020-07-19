<template>
  <header>
    <div>
      <div class="container">
        <div class="row justify-content-center justify-content-md-between align-items-center p-4">
          <div class="col-6 col-md-4">
            <router-link to="/">
              <img class="img-fluid" src="../assets/img/logo.jpg" alt="logo" />
            </router-link>
          </div>
          <div class="col-6 col-md-8">
            <nav class="nav justify-content-center justify-content-md-end">
              <router-link class="nav-link navbar" to="/somos">Quienes Somos</router-link>
              <router-link class="nav-link navbar" to="/ultimos">Cursos</router-link>
              <router-link class="nav-link navbar" to="/faq">FAQ</router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>