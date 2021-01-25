<template>


 
    <div class="card" id="telaLogin">
      <div>
          <img src="../assets/logo.png" >
      </div>
      <div class="card-body">
          <form>
              <div class="mb-3">
                <div v-if = exibirAlerta class="alert alert-danger">
                  <strong>Erro!</strong><a> E-mail e/ou senha inválido(s)</a>.
                </div>
                
                <p class="blog-title" align="center"><i class="far fa-address-card"></i> Bem vindo(a) ao BLOG Safira! Digite as suas credenciais.</p> 
                
                <label for="exampleInputEmail1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Senha:</label>
                <i class="fas fa-key"></i>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="senha">
              </div>
            
              <div class="row">
                <a v-on:click="login" class="btn btn-danger col-11 mx-auto">ENTRAR</a>
              </div><br>
              <div class="row " align="center">
                  <p class="esqueceu-a-senha">Esqueceu a senha?</p>
              </div>
              <div class="row">
                  <a class="btn btn-outline-danger col-11 mx-auto">CADASTRE-SE AGORA</a>
              </div>
          </form>
      </div>
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
                        alert('Login realizado com sucesso!');
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
        background-color: rgb(7,7,7);
        color: rgb(255,255,255);
    }
    .mx-auto{
        margin-top: 10px;
    }
    .form-control{
        background-color: rgb(7,7,7) ;
        box-shadow: 1px 5px 30px rgb(255, 255, 255);
        border: 1px solid rgb(250, 247, 247);
        color: rgb(255, 255, 255);
    }
    #telaLogin{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: rgb(7,7,7);
        transform: translate(-50%,-50%);
        box-shadow: 1px 5px 30px rgb(255, 255, 255);
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
        color: #721c24;
        background-color: #ac2530;
        border-color: #b41b2a;

    }

    .erro-senha {
        width: 100%;
        text-align: left;
        color: red;
        font-size: 13px;
    }
    img{
        width: 160px;
        margin-left: 95px;
        border-radius: 50%;
    }

</style>
