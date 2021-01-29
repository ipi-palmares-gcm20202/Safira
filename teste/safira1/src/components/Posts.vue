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

<!--INICIO MENU SEGUNDARIO -->
<div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Posts</a>
    <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">New Post</a>
    <a class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Report</a>
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
             
             <!--INICIO NOME DO ADMIN --> 
            <div class="admin">
                <h1>Olá Francievellyn LS</h1>
            </div>
            <!--FINAL NOME DO ADMIN --> 

            <!--INICIO Pesquisar -->
            <div class="input-group mb-3">
              <input v-model="filtroTitulo" type="text" class="validate" placeholder="Pesquisar pelo título..." id="titulo" aria-label="Recipient's username" aria-describedby="button-addon2">
              <button v-on:click="buscar" class="btn btn-outline-secondary" type="button" id="button-addon2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
            </div>
            <!--FINAL Pesquisar -->
               
            <div class="add">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
            </div>    
    


    <!--INICIO TABELA -->
    <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th></th>
        <th>Nome do Produto</th>
        <th>Discrição</th>
        <th>Data da Postagem</th>
        <th class="edit-remove-column">Editar/Remover</th>
      </tr>
    </thead>

    <tbody>
        <tr v-for="post in postsFiltrados" v-bind:key="post">
          <td><input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
                <label for="jack"></label></td>
          <td>{{ post.nameProduto }}</td>
          <td>{{ post.discricao }}</td>
          <td>{{ post.conteudo }}</td>
          <td class="edit-remove-column"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>

          <svg v-on:click="remover(post.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash2-fill" viewBox="0 0 16 16"><path d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/></svg>
          
          </td>
        </tr>
    </tbody>
    <!--FINAL TABELA -->

    <div v-if="postsFiltrados.length == 0" class="alert alert-warning" role="alert">
      <i class="far fa-frown"></i>Não há posts cadastrados para os filtros especificados.
    </div>
    </table>
    </div>
    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Criar novo post</div>
    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Relatorios</div>
  </div>
</div>


</template>

<script>
export default{
    name: 'listar-blogs',
    data() {
        return {
            filtroBlog: '',
            filtroTitulo: '',
            posts: [
                { id: 1, blogId: 1, nameProduto: 'Toyota Corolla Cross', discricao: 'Um dos lançamentos de carros mais aguardados de 2021 é o utilitário esportivo derivado do sedã médio mais vendido do país. Feito sobre a plataforma TNGA em Sorocaba (SP), o SUV médio chegará em março para brigar em um segmento hoje dominado pelo Compass.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 2, blogId: 2, nameProduto: 'Xiaomi Mi 11', discricao: 'O Xiaomi Mi 11 é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários. Tem uma enorme tela Touchscreen de 6.81 polegadas e uma resolução de 3200x1440 pixels que é uma das mais altas atualmente em circulação.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 3, blogId: 3, nameProduto: 'Royal Enfield Meteor 350', discricao: 'Um dos lançamentos mais importantes na Índia em 2020, a Royal Enfield Meteor 350 já foi confirmada para o mercado brasileiro em 2021, mas ainda não tem uma data definida. O modelo estreou um novo chassi e um propulsor inédito que aposentou o comando de válvulas varetado por um sistema acionado por corrente (OHC). Ele gera 20,2 cv de potência e 2,7 kgfm de torque. Outra novidade que deve aparecer é um sistema de navegação por GPS, que está disponível no mercado indiano.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 4, blogId: 4, nameProduto: 'Renault Duster (motor)', discricao: ' a Renault finalmente vai estrear seu motor turbinado. E o ilustre representante a debutar tal novidade mecânica na marca francesa será o utilitário esportivo compacto – com porte de médio. As novas versões com o 1.3 são esperadas para o primeiro semestre e vão ocupar a vaga deixada pelas antigas opções com o 2.0 16V aspirado – que sumiram na remodelação da linha 2021 do SUV, feita em março deste ano.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 5, blogId: 5, nameProduto: 'Ride 4', discricao: 'Para quem está procurando um bom simulador de corrida de motos, o Ride 4 é a escolha certa! O jogo oferece ambientes realistas, vários modelos diferentes de motos e opções de customização. Você pode jogar o modo campanha participando desde campeonatos regionais até torneios profissionais.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 6, blogId: 6, nameProduto: 'TVs LG OLED estarão disponíveis em até 83 polegadas', discricao: 'O lançamento da LG escolhido para inaugurar a tecnologia foi a LG G1, apresentada como a evolução das TVs OLEDs tradicionais, a TV estará disponível em 55, 65 e 77 polegadas. Outro lançamento anunciado pela LG foi a C1: uma TV OLED tradicional, porém o diferencial da vasta gama de tamanhos, de 48 até 83 polegadas.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 7, blogId: 7, nameProduto: 'Motorola Razr 2', discricao: 'Mais um modelo na lista de celulares com lançamento em 2021 é a segunda geração de celulares dobráveis da Motorola, o Razr 2.Com isso, poderemos ver um avanço em termos de celular com a tela dobrável. Mas é bem provável que pouca coisa mude em relação ao primeiro modelo.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                { id: 8, blogId: 8, nameProduto: 'Nissan Kicks', discricao: 'O modelo vai trazer para o Brasil boa parte das alterações no desenho que foram introduzidas no mercado asiático. Os faróis estão mais espichados e têm molduras cromadas que percorrem o para-choque e se integram à nova grade em “V”. Na traseira, o para-choque também foi reestilizado e as lanternas recebem LEDs.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                 { id: 9, blogId: 9, nameProduto: 'Outriders', discricao: 'Outriders está sendo desenvolvido pela People Can Fly e tem como publicadora a Square Enix. Trata-se de um jogo de tiro em terceira pessoa misturado com alguns elementos de RPG. No começo do game, o jogador escolhe uma entre quatro classes e personaliza seu personagem. Cada classe tem habilidades únicas que você pode explorar ao longo do jogo. Por exemplo, o Pyromancer é capaz de manipular e usar o fogo a seu favor.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                  { id: 10, blogId: 10, nameProduto: 'Ford Bronco Sport', discricao: 'No início de dezembro a Ford confirmou a venda da nova geração do emblemático Bronco no Brasil, ressuscitada nos Estados Unidos este ano pela marca. O primeiro a desembarcar por aqui no segundo semestre será o Bronco Sport, uma espécie de versão civil e mais urbana do modelo. Outros carros da gama também devem vir, em especial variante jipão, só que para brigar com modelos com alma mais trilheira, como Land Rover Defender e Jeep Wrangler, só que os lançamentos não estão confirmados para 2021.', conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },

                
            ],
            postsFiltrados: []
        }
    },
    methods: {
        buscar() {
            if (this.filtroBlog) {
                this.postsFiltrados = this.posts.filter(post => post.blogId == this.filtroBlog);
            } else {
                this.postsFiltrados = this.posts;
            }
            
            this.postsFiltrados = this.postsFiltrados.filter(post => post.nameProduto.toLowerCase().includes(this.filtroTitulo.toLowerCase()))
        },
        remover(id) {
            this.posts = this.posts.filter(post => post.id != id);
            this.buscar();
        }
    }
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
.nav-link{
  color:white;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    color: #fff;
    background-color: red;
}
.mb-3 {
    background:black;
}
.btn-outline-secondary {
    color: red;
    border-color: white;
}
.btn-outline-secondary:hover{
  background:red;
}
/*
.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
    position: absolute;
    margin-left: 0%;
    margin-top:-27px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    
}
.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    position: absolute;
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    margin-left: 20%;
    margin-top:-27px;
}*/
.admin{
  text-align:center;
}
.add{
  position: absolute;
  margin-left: 85%;
  margin-top: -4%;
  color:#7CFC00;

}
.edit-remove-column{
  text-align:center;
}

</style>