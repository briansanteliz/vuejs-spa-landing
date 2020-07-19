<template>
  <div>
    <div id="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contenido-hero">
              <h2>Aprende algo nuevo</h2>
              <p class="bold">Todos los cursos a $15</p>
              <form @submit.prevent="enviarEmail" id="busqueda" method="post" class="formulario">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="email"
                    placeholder="Suscribete a nuestro Newsletter"
                    v-model="newsletter.email"
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control btn btn-success">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="barra">
      <div class="container">
        <div class="row">
          <div class="col-md-4 icono icono1">
            <p>
              20,000 Cursos en línea
              <br />Explora los temas más recientes
            </p>
          </div>
          <div class="col-md-4 icono icono2">
            <p>
              Instructores Expertos
              <br />Aprende con distintos estilos
            </p>
          </div>
          <div class="col-md-4 icono icono3">
            <p>
              Acceso de por vida
              <br />Aprende a tu ritmo
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 id="encabezado" class="encabezado titulo">Cursos En Línea</h1>
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso1.jpg" class="imagen-curso img-fluid" />
            <div class="card-body">
              <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
              <p>Jose Ferrer</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="precio">$15</span>
              </p>

              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/eje.jpg" class="imagen-curso img-fluid" />
            <div class="card-body">
              <h4>Curso de Comida Vegetariana</h4>
              <p>Juan Pedro</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso3.jpg" class="imagen-curso img-fluid" />
            <div class="card-body">
              <h4>Guitarra para Principiantes</h4>
              <p>Maikol Red</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
      </div>
      <!--.row-->
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso4.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Cosecha tus propias frutas y verduras</h4>
              <p>Sofia Mortis</p>
              <img src="../assets/img/estrellas.png" class="img-fluid" />
              <p class="precio">
                $200
                <span>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/vuejs.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Vuejs Desde Cero</h4>
              <p>Maikol Parker</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso7.png" class="img-fluid" />
            <div class="card-body">
              <h4>Cración de REST API Con Nodejs</h4>
              <p>Jean Peper</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
      </div>
      <!--.row-->
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso6.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Nodejs Socket.io + Vuejs</h4>
              <p>Ellen Susan</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span>$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/studio.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Estudio Musical en tu casa</h4>
              <p>Chris Evans</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="u-pull-right">$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control" data-id="8">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso9.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>CoffeeScript + Vanilla Javascript & POO!</h4>
              <p>Jose Nerd</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="u-pull-right">$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control" data-id="9">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
      </div>
      <!--.row-->
      <div class="row pb-5">
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/cuso11.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Desarrolo Web con PHP 7</h4>
              <p>Marta Clark</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="u-pull-right">$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control" data-id="10">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso12.jpg" class="img-fluid" />
            <div class="card-body">
              <h4>Stack MEAN desde cero</h4>
              <p>Owen Smith</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="u-pull-right">$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control" data-id="11">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="card">
            <img src="../assets/img/curso9.jpeg" class="img-fluid" />
            <div class="card-body">
              <h4>Aprende ReactJS!</h4>
              <p>Naira Bonaven</p>
              <img src="../assets/img/estrellas.png" />
              <p class="precio">
                $200
                <span class="u-pull-right">$15</span>
              </p>
              <a href="#" class="btn btn-primary form-control" data-id="12">Comprar</a>
            </div>
          </div>
          <!--.card-->
        </div>
      </div>
      <!--.row-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsletter: {
        email: ""
      }
    };
  },
  methods: {
    enviarEmail() {
      if (this.newsletter.email === "") {
        Swal.fire("Error!", "No es una dirección valida.", "error");
      } else {
        this.axios.post("/email", { email: this.newsletter.email });
        this.newsletter.email = "";
        Swal.fire(
          "Enviado!",
          "Muchas gracias por suscribirte. Nunca compatiremos tu correo!",
          "success"
        );
      }
    }
  }
};
</script>