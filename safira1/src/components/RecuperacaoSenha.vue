<template>
    <div class="card" id="telaRecupera">
        <h1 class="recuperar">Recuperar Senha</h1>
        <p class="aviso">Informe seu e-mail ou seu nome para recuperar a senha</p>

        <form class="row g-3 needs-validation" novalidate>
        <div class="mb-3">
                <div v-if = exibirAlerta class="alert alert-info" role="alert">E-mail de recuperação de senha enviado com sucesso!!
                </div>

                <div v-if = Alerta  class="alert alert-danger" role="alert">O e-mail informado não foi encontrado.
                </div>
            
                
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                
              </div>
              <div class="row">
                <a v-on:click="recuperacaoSenha" class="btn btn-danger col-11 mx-auto">ENTRAR</a>
              </div>
            </form>
            
                
                     
    </div>
        <img class="logoRS" src="../assets/logo.png" >

</template>

<script>
export default {
  name: 'recuperacaoSenha',
   data() {
        return {
            email:'',
            exibirAlerta: false
        }      
      },
      methods: {
                recuperacaoSenha() {
                    this.exibirAlerta = false;
                    var emailAdmin = 'admin@gmail.com';
                    if (this.email === emailAdmin) {
                        this.exibirAlerta = true;
                    }
                    else {
                        this.Alerta = true;
                        this.email = '';
                    }
                }
      }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Dancing+Script:wght@500&family=Yellowtail&display=swap');
#telaRecupera{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgb(0,0,0);
        transform: translate(-50%,-50%);
        box-shadow: 1px 5px 10px rgb(255, 255, 255);
        border: 2px solid rgb(250, 247, 247);
        padding: 30px 30px;
        color: rgb(255,255,255);
    }
.alert-info {
    color: white;
    background-color: #32CD32;
    border-color: white;
    
}
.aviso{
    text-align:left;
    margin-top:10px;
}
.recuperar{
    text-align:center;
    font-family: 'Yellowtail', cursive;
    color:#FF1493;
}
.logoRS{
    position: absolute;
    width:15%;
    top: 5%;
    left: 20%;
}


</style>
