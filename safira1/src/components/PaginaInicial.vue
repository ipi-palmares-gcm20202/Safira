<template>
   <!--INÍCIO Corpo do Texto-->
    <h1>Os mais novos lançamentos </h1>
    <section class="corpo">
      <h2>What is Lorem Ipsum?</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

      <h2>Why do we use it?</h2>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>


      <h2>Where does it come from?</h2>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

      <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
    </section>
    <!--FINAL Corpo do Texto-->

    <!--Inico Texto lateral-->
    <aside class="lateral">
      <h2>Where can I get some?</h2>
      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>

      <!--Inico Botão do login-->
      <img class="botaoLogin" src= "../assets/login.jpg" width="14%"/>
      <!--Final Botão do login-->
    </aside>
    
    <!--Final Texto lateral-->


    <!--Inico Rodape-->
    <footer class="rodape">
      <p>@SafiraLançamentos</p>
      <p><a href="#" target="_blank">Facebook</a>| <a href="#" target="_blank">Twitter</a></p>
      </footer>
    <!--Final Rodape-->
</template>

<script>
export default {
  name: 'pagina-inicial'
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Dancing+Script:wght@500&family=Yellowtail&display=swap');
h2{
        font-size: 20pt;
        color: white;
        padding: 0px;
        margin-top: 0px;
        margin-left: 20px;
        text-align: justify;
        font-family: 'Caveat', cursive;
    }
    h1{
      text-align: center;
      font-family: 'Yellowtail', cursive;
      color:	#DC143C;
    }

    p{
        font-size: 18pt;
        text-align: justify;
        text-indent: 50px;
        margin-left: 20px;
        margin-right: 20px;
        font-family: 'Dancing Script', cursive;
        color: 	#C0C0C0;
    }
    section.corpo {
    display: block;
    width:75%;
    float: left;
    border-right: 1px solid  #606060;
    padding-right: 15px;
    }

    aside.lateral{
    display: block;
    width: 25%;
    float: right;
    }
    footer.rodape{
    clear: both;
    border-top: 1px solid #606060;
    }

    footer.rodape p{
      margin-top: 10px;
      text-align: center;
    }
    .botaoLogin{
      position: absolute;
      margin-bottom: 10px;
      width: 6%;
      margin-left: 19%;
    }
</style>
