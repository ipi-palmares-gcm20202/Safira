<template>

    <div class="card" id="telaLogin">
      <div>
          <img class="logoLogin" src="../assets/logo.png" >
      </div>
      <div class="card-body">
          <form>
              <div class="mb-3">
                <div v-if = exibirAlerta class="alert alert-danger">
                  <strong>Erro!</strong><a> E-mail e/ou senha inválido(s)</a>.
                </div>
                
                <p class="blog-title" align="center"><i class="far fa-address-card"></i> Bem vindo(a) ao Safira !!</p> 
                
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                <i class="fas fa-key"></i>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="senha">
              </div>
            
              <div class="row">
                <a v-on:click="login" class="btn btn-danger col-11 mx-auto">ENTRAR</a>
              </div><br>
              <div class="row " align="center">
                  <router-link to = "/recuperacao-senha" class="esqueceu-a-senha">Esqueceu a senha?</router-link>
              </div>
              <div class="row">
                  <router-link to = "/cadastro" class="btn btn-outline-danger col-11 mx-auto">CADASTRE-SE AGORA</router-link>
              </div>
          </form>
      </div>
    </div>
    <div class="voltar">
    <router-link to= "../"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"/></svg></router-link>
    </div>


</template>

<script>
export default{
    name: 'login',
    data() {
        return {
            email:'',
            senha:'',
            exibirAlerta: false
        }      
      },
      methods: {
                login() {
                    this.exibirAlerta = false;
                    var emailAdmin = 'admin@gmail.com';
                    var senhaAdmin = '123456';
                    if (this.email === emailAdmin && this.senha === senhaAdmin) {
                        this.$router.push({ name: 'posts' });
                    } else {
                        this.exibirAlerta = true;
                        this.senha = '';
                    }
                }
      }
}
    
</script>

<style>
    body{
        background-color: black;
        color: rgb(255,255,255);
    }
    .mx-auto{
        margin-top: 10px;
    }
    .form-control{
        background-color: white ;
        border: 1px solid rgb(250, 247, 247);
        color: black;
    }
    #telaLogin{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgb(0,0,0);
        transform: translate(-50%,-50%);
        box-shadow: 1px 5px 10px rgb(255, 255, 255);
        border: 2px solid rgb(250, 247, 247);
        border-radius: 80px 0px 80px 0px;
        padding: 30px 30px;
        color: rgb(255,255,255);
    }
    .alert {
        position: relative;
        padding: .75rem 1.25rem;
        border: 1px solid transparent;
        border-radius: .25rem;
        text-align: left;
    }
    .alert-danger {
    color: white;
    background-color: red;
    border-color: white;
    }
    .erro-senha {
        width: 100%;
        text-align: left;
        color: red;
        font-size: 13px;
    }
    .logoLogin{
        width: 160px;
        margin-left: 27%;
    }
    .btn-danger {
    color: white;
    background-color: red;
    border-color:red;
}
.btn-danger:hover{
    background:red;
    border-color:white;
}
.btn-outline-danger {
    color: 	#8B0000;
    border-color: 	#8B0000;
}
.btn-outline-danger:hover {
    background:	#8B0000;
}
.voltar{
    position: absolute;
    margin-top: 0px;
    margin-left: 90%;
    color:red;
}
a{
    color:red;}
a:hover{
    color:white;
}
.esqueceu-a-senha{
    color:#FF69B4;
    text-decoration:none;
}
.esqueceu-a-senha:hover{
    color:red;
}

</style>
