<template>
<!--INICIO MENU PRIMARIO -->
<nav class="navbar">
  <div class="container-fluid">
    <img class="logo" src="../assets/logo.png" >
  </div>
<form class="d-flex">
    <router-link to= "../"><button id="sair" class="btn btn-outline-success" type="submit">Sair</button></router-link>
</form>
</nav>
<!--FINAL MENU PRIMARIO -->



     <div class="formulario1">  
        <div class="new">
            <h1>New Post</h1>
        </div>
    <!--INICIO ESPAÇO PARA COLOCAR O NOME DO ADMIN-->
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nome</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do admin">
    </div>
    <!--FINAL ESPAÇO PARA COLOCAR O NOME DO ADMIN-->

    <!--INICIO ESPAÇO PARA COLOCAR O NOME DO PRODUTO E A DATA DE LANÇAMENTO-->
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="Nome do produto" aria-label="First name">
        </div>
        <div class="col">
            <input type="text" class="form-control" placeholder="Data de lançamentos" aria-label="Last name">
        </div>
        </div>
    <!--FINAL ESPAÇO PARA COLOCAR O NOME DO PRODUTO E A DATA DE LANÇAMENTO-->


    <!--INICIO ESPAÇO PARA COLOCAR A DISCRIÇÃO E ANEXO-->
    <form class="was-validated">
        <div class="mb-3">
            <label for="validationTextarea" class="form-label">Discrição</label>
            <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Texto" required></textarea>
            
        </div>
        <div class="mb-3">
            <input type="file" class="form-control" aria-label="file example" required>
            
        </div>

        <div class="mb-3">
            <a v-on:click="login" class="btn btn-danger col-12 mx-auto">Enviar</a>
        </div>
    </form>
    <!--FINAL ESPAÇO PARA COLOCAR A DISCRIÇÃO E ANEXO-->
    
    
    
    </div>
    


</template>

<script>
export default{
    name: 'listar-blogs',
    
}

    
</script>

<style>
.navbar{
  background:black;
}
.logo{
  width:12%;
}
#sair{
  position: absolute;
  margin-top: 0px;
  margin-left: -5%
}

.new{
    text-align:center;
    font-family: 'Yellowtail', cursive;
    color:#FF1493;
}
.formulario1{
    margin-left:25%;
    width:50%
}



</style>