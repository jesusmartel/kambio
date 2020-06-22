document.querySelector('#submit').addEventListener('click',function(){

    let documento = document.querySelector('#documento').value;
    let dni = document.querySelector('#dni').value;
    let bancos = document.querySelector('#bancos').value;
    let cuenta = document.querySelector('#cuenta').value;
    let monto = document.querySelector('#monto').value;


    let url = "https://api.whatsapp.com/send?phone=5114146363&text=*_KCredito_*%0A*VENTA DE DOLARES*%0A%0A*Documento de Identidad:*%0A" + documento +  "%0A*Numero de Documento*%0A" + dni + "%0A*Selecciona tu banco*%0A" + bancos +"%0A*Indica la cuenta destino:*%0A" + cuenta + "%0A*Cantidad de DOLARES que deseas comprar:*%0A" + monto;
    window.open(url);

});
