<template>


 
    <div class="card" id="telaLogin">
      <div>
          <img class="imgCadastro " src="../assets/logo.png" >
      </div>
      <div class="card-body">
          <form>
                <div class="mb-3"><p class="blog-title"> CADASTRE-SE</p> 

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="" v-model="Nome">
                    </div>

                    <div>
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    
                    </div>
                
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <i class="fas fa-key"></i>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="senha">
                    </div>
                
                    <div class="mb-3">
                      
                        <label for="exampleInputPassword2" class="form-label">Confirmação de Senha</label>
                        <i class="fas fa-key"></i>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="confirmar">
                        <span v-show="deuErro1" class="erro-senha"><i class="fa fa-times"></i>Nenhum dado cadastrado ou Dados incopletos</span>
                        <span v-show="deuErro" class="erro-senha"><i class="fa fa-times"></i>As senhas digitadas não conferem</span>
                    </div>

                    <div class="row">
                        <a v-on:click="Cadastrar" class="btn btn-danger col-12 mx-auto" >CADASTRAR</a>
                    </div> 
                    <div class="row">
                        <router-link to= "../login" class="btn btn-outline-dark col-12 mx-auto" >JÁ POSSOU UMA CONTA</router-link>
                    </div> 

                    

                </div>
          </form>
      </div>
    </div>

    <router-link to= "../" class="voltar"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-bookmark-x-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6.854 5.146a.5.5 0 1 0-.708.708L7.293 7 6.146 8.146a.5.5 0 1 0 .708.708L8 7.707l1.146 1.147a.5.5 0 1 0 .708-.708L8.707 7l1.147-1.146a.5.5 0 0 0-.708-.708L8 6.293 6.854 5.146z"/></svg></router-link>


</template>

<script>
export default{
    name: 'cadastro',
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
        background-color: black;
        color: rgb(255,255,255);
    }
    .mx-auto{
        margin-top: 10px;
    }
    .form-control{
        background-color: white;
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
    .erro-senha {
        width: 100%;
        text-align: left;
        color: red;
        font-size: 13px;
    }
    img.imgCadastro{
        width: 160px;
        margin-left: 27%;
    }
    .blog-title{
        text-align:center;
    }
    .btn-outline-dark {
    color: red;
    border-color: red;
    background:black;
    }
    .btn-outline-dark:hover{
    background:	#8B0000;
    }
</style>