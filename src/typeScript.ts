// Primeira forma com typeScript

// definir os tipos de objeto logo no íncio da função
function enviarEmail_A(para: string, id: string, assunto: string, texto: string) {
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario {
    send() {
        enviarEmail_A("dani@gmail.com", "9899", "Olá", "Tubo bem?")
    }
}

// Segunda forma com typeScript

// Cria uma interface com os dados que irão receber
interface DadosEnvioEmail {
    para: string;
    id: string;
    assunto: string;
    texto: string
}

function enviarEmail_B(dados: DadosEnvioEmail) {
    console.log(dados.para, dados.id, dados.assunto, dados.texto);
}

class EnviarEmailParaUsuario_B {
    send() {
        enviarEmail_B({
            para: "dani@gmail.com", 
            id: "9899", 
            assunto: "Olá", 
            texto: "Tubo bem?"})
    }
}

// Terceira forma com typeScript

// Fazendo uma destruturação
function enviarEmail_C({ para, id, assunto, texto }: DadosEnvioEmail) {
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario_C {
    send() {
        enviarEmail_B({
            para: "dani@gmail.com", 
            id: "9899", 
            assunto: "Olá", 
            texto: "Tubo bem?"})
    }
}
