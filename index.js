$("#btnLogin").click(
    function(){
       login =
       {
           'usuario': document.getElementById('inputEmail').value,
           'senha' : document.getElementById('inputPass').value,
           'tipo_login': 'site'
       };
        if(login.usuario == 'sheyllameazza')
        if (login.senha == '1234') {
        document.getElementById('resultado').innerHTML = '<b>Bem vindo!<b>'
        } else {
            document.getElementById('resultado').innerHTML ='<b>Usuário ou Senha invalido!<b>'
        }    
        
    }
)