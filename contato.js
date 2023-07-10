function enviar(){
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let datahora = document.getElementById('datahora').value;
    let comentario = document.getElementById('comentario').value;

    if(nome == "" || telefone == "" || email == "" || datahora == "" || comentario == ""){
        alert('Preencha todos os campos')
    }
    else if(email.indexOf('@') == -1) {
        alert('Email inválido')
    } else {
        fetch("http://localhost:3000/contato", {
            method: "POST",
            body: JSON.stringify({
                nome,
                telefone,
                email,
                datahora,
                comentario
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        alert(`Obrigada pelo seu contato, ${nome}`);

    }
}