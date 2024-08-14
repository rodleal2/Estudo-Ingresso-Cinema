function comprar() {
   let TipoAssento =document.getElementById('tipo-ingresso').value ;
   let Quantidade = document.getElementById('qtd').value ;
   
     if(TipoAssento == 'pista' ) {
        ComprarPista (Quantidade) ; 
     } else if (TipoAssento == 'superior') {
        ComprarSuperior (Quantidade) ;
     } else  {
        ComprarInferior (Quantidade)
     }

  
}
function ComprarPista (Quantidade) {
   let QuantidadePista = parseInt (document.getElementById ('qtd-pista').textContent) ;
   if (Quantidade > QuantidadePista) {
    alert ('Quantidade indisponivel para tipo Pista') ;
   } else {
    QuantidadePista = QuantidadePista - Quantidade ;
    document.getElementById ('qtd-pista').textContent = QuantidadePista ;
    alert ('Compra Rrealizada Com Exito!')
   }

}
function ComprarSuperior (Quantidade) {
    let QuantidadeSuperior = parseInt (document.getElementById ('qtd-superior').textContent) ;
    if (Quantidade > QuantidadeSuperior) {
     alert ('Quantidade indisponivel para tipo Superior') ;
    } else {
     QuantidadeSuperior = QuantidadeSuperior - Quantidade ;
     document.getElementById ('qtd-superior').textContent = QuantidadeSuperior ;
     alert ('Compra Rrealizada Com Exito!')
    }
 
 }
 function ComprarInferior (Quantidade) {
    let QuantidadeInferior = parseInt (document.getElementById ('qtd-inferior').textContent) ;
    if (Quantidade > QuantidadeInferior) {
     alert ('Quantidade indisponivel para tipo Inferior') ;
    } else {
     QuantidadeInferior = QuantidadeInferior - Quantidade ;
     document.getElementById ('qtd-inferior').textContent = QuantidadeInferior ;
     alert ('Compra Rrealizada Com Exito!')
    }
 
 }
