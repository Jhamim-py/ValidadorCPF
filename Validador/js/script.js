

function validarCpf(){
let cpf = document.getElementById("CPF").value ;

    if(cpf == ''){
        alert("Digite o CPF que deseja validar!!")
    }

    else if(isNaN(cpf) == true){
        alert("Digite apenas números");

    }

    else if(cpf.length != 11){
        alert('O CPF deve ter exatamente 11 dígitos');
    }
    console.log(cpf)
  let total = 0; 
for(i=0; i<9; i++){
    total += parseInt(cpf.charAt(i)) * (10 - i);
  }



  if((total * 10) % 11 != parseInt(cpf.charAt(9))){
      document.getElementById("resultado").innerHTML="CPF inválido";
  }else {
      total = 0;
  }


  for(i=0; i<10; i++){
    total += parseInt(cpf.charAt(i)) * (11 - i);
  }

  if((total * 10) % 11 == parseInt(cpf.charAt(10))){
     document.getElementById("resultado").innerHTML="CPF válido!";
  }else{
     document.getElementById("resultado").innerHTML="CPF inválido!"
  }    

}

