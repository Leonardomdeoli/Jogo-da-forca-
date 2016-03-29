

angular.module("myApp", []).controller("forca", function($scope) {

    $scope.tpernad = false;
    $scope.tpernae = false;
    $scope.tbracoe = false;
    $scope.tbracod = false;
    $scope.tcabeca = false;
    $scope.ttronco = false;
    $scope.desabilita = false;
    $scope.botao = false;
    $scope.botao2 = false;
    $scope.premio;
    $scope.condicao = false;
    $scope.resposta = "";


  // ----cria e mostra o teclado  

  var teclado = [
  {"letra":'A',"status":false},
  {"letra":'B',"status":false},
  {"letra":'C',"status":false},
  {"letra":'D',"status":false},
  {"letra":'E',"status":false},
  {"letra":'F',"status":false},
  {"letra":'G',"status":false},
  {"letra":'H',"status":false},
  {"letra":'I',"status":false},
  {"letra":'J',"status":false},
  {"letra":'K',"status":false},
  {"letra":'L',"status":false},
  {"letra":'M',"status":false},
  {"letra":'N',"status":false},
  {"letra":'O',"status":false},
  {"letra":'P',"status":false},
  {"letra":'Q',"status":false},
  {"letra":'R',"status":false},
  {"letra":'S',"status":false},
  {"letra":'T',"status":false},
  {"letra":'Ç',"status":false},
  {"letra":'U',"status":false},
  {"letra":'V',"status":false},
  {"letra":'W',"status":false},
  {"letra":'X',"status":false},
  {"letra":'Y',"status":false},
  {"letra":'Z',"status":false}
];




$scope.letras_teclado =[];

$scope.letras_teclado = teclado;
// ---- fim cria e mostra o teclado 
  var palavraSortiada = [   
    
    {dica:"PAPAYA",
    pergunta: 'Escreva mamão em inglês.' 
    },
    {dica:"ORANGE",
    pergunta: 'Escreva laranja em inglês.' 
    },
    {dica:"MELON",
    pergunta: 'Escreva melão em inglês.' 
    },
    {dica:"RUN",
    pergunta: 'Escreva correr em inglês.' 
    },
    {dica:"LOOP",
    pergunta: 'Escreva laço em inglês.' 
    },
    {dica:"JUMP",
    pergunta: 'Escreva pulo em inglês.' 
    },
    {dica:"HORSE",
    pergunta: 'Escreva cavalo em inglês.' 
    },
    {dica:"SNAPPER",
    pergunta: 'Escreva caranga em inglês.' 
    },
    {dica:"SELECT",
    pergunta: 'Escreva selecionar em inglês.' 
    },
    {dica:"TRUCK",
    pergunta: 'Escreva caminhão em inglês.' 
    },
    {dica:"PSYCHOLOGY",
    pergunta: 'Escreva psicologia em inglês.' 
    },
    {dica:"SYSTEMS",
    pergunta: 'Escreva sistemas em inglês.' 
    },
    {dica:"FALLOUT",
    pergunta: 'Escreva capotar em inglês.' 
    },
    {dica:"WALK",
    pergunta: 'Escreva caminhar em inglês.' 
    },
    {dica:"SCIENCIE",
    pergunta: 'Escreva ciência em inglês.' 
    },
    {dica:"PORTUGUESE",
    pergunta: 'Escreva português em inglês.' 
    },
    {dica:"SIZE",
    pergunta: 'Escreva tamanho em inglês.' 
    },
    {dica:"HIPPO",
    pergunta: 'Escreva hipopótamo em inglês.' 
    },
    {dica:"SITUATION",
    pergunta: 'Escreva situação em inglês.' 
    },
    {dica:"FINANCIAL",
    pergunta: 'Escreva financeira em inglês.' 
    },    
    {dica:"APARTMENT",
    pergunta: 'Escreva apartamanto em inglês.' 
    },    
    {dica:"CONSECRATE",
    pergunta: 'Escreva consagrar em inglês.' 
    },
    {dica:"ASSEMBLY",
    pergunta: 'Escreva assembléia em inglês.' 
    },
    {dica:"SHRIMP",
    pergunta: 'Escreva camarão em inglês.' 
    },
    {dica:"CROW",
    pergunta: 'Escreva corvo em inglês.' 
    },
    {dica:"WATERMELON",
    pergunta: 'Escreva melancia em inglês.' 
    },
    {dica:"HIPPO",
    pergunta: 'Escreva hipopótamo em inglês.' 
    },
    {dica:"PINEAPPLE",
    pergunta: 'Escreva abacaxi em inglês.' 
    },
    {dica:"SUFFERING",
    pergunta: 'Escreva sofrimento em inglês.' 
    },
    {dica:"HIPPO",
    pergunta: 'Escreva hipopótamo em inglês.' 
    },
    {dica:"HARDSHIP",
    pergunta: 'Escreva difilcudade em inglês.' 
    },
    {dica:"TROUBLE",
    pergunta: 'Escreva encrenca em inglês.' 
    },
    {dica:"MARKED",
    pergunta: 'Escreva marcado em inglês.' 
    }
];

  
  var numeroRandomico = Math.floor(Math.random()*palavraSortiada.length);   

  var palavra = palavraSortiada[numeroRandomico].dica;
  console.log(palavra);
  $scope.resposta = "Resposta correta: "+ palavra.toLowerCase();

  $scope.pergunta = palavraSortiada[numeroRandomico].pergunta;
  $scope.palavraSecreta = new Array(palavra.length);


  $scope.palavraSecretaFinal = new Array(palavra.length);

  for (i = 0; i < palavra.length; i++) {
    $scope.palavraSecreta[i] = "_";
  }
  for (i = 0; i < palavra.length; i++) {
    $scope.palavraSecretaFinal[i] = palavraSortiada[numeroRandomico].dica[i];
  }
  var palavraSecretaFinal= $scope.palavraSecretaFinal;
  var cont = 0;

  $scope.digitar = function(letra) {
    console.log(letra);
     var boleano = false; 
     for (i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
        $scope.palavraSecreta[i] = letra;
        boleano = true;
        }
     }
     if(boleano == false){
        cont++;
        $scope.erro ="Erros cometidos: " + cont;
        setBoneco();
     }
     if(angular.equals($scope.palavraSecreta, palavraSecretaFinal)){
        $scope.premio = "public/img/12.png";
        $scope.condicao = true;

        desabilita_todos_teclado();

        $scope.botao = true;
     }
     if(cont >5){
        desabilita_todos_teclado();
      }
// --------parte que desabilita parcialmente o teclado
     for(i= 0 ; i<teclado.length;i++){
      if(letra === teclado[i].letra){
        teclado[i].status = true;
      }
     }
// --------parte que desabilita o teclado 
  }
  function desabilita_todos_teclado(){
      for(i= 0 ; i<teclado.length;i++){       
        teclado[i].status = true;
      }
     
  };
  function setBoneco(){

    if(cont > 5){
      $scope.desabilita=true;
      $scope.premio = "public/img/8.jpg";
      $scope.condicao = true;
      $scope.desabilita=true;
      $scope.botao = true;
      $scope.botao2 = true;
    }
    if($scope.tpernad == false){
      $scope.tpernad = true;
      return;
    }
    if($scope.tpernae == false){
      $scope.tpernae = true;
      return;
    }
    if($scope.ttronco == false){
      $scope.ttronco = true;
      return;
    }
    if($scope.tbracoe == false){
      $scope.tbracoe = true;
      return;
    }
    if($scope.tbracod == false){
      $scope.tbracod = true;
      return;
    }if($scope.tcabeca == false){
      $scope.tcabeca = true;
      return;
    }
  }
  

  $scope.boneco = {
       cabeca:"public/img/1.PNG",
       braco_direito:"public/img/2.PNG" ,
       braco_esquerdo: "public/img/6.PNG", 
       tronco:"public/img/3.PNG" ,
       perna_esquerda:"public/img/5.PNG" ,
       perna_direita:"public/img/4.PNG"
  };

  $scope.reiniciar = function(){
    window.location.reload();
  }
});
