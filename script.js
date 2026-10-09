const botao = document.getElementById("mudar-cor");

botao.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");
});

emailjs.init({
    publicKey: "zMxSOVHx-zM4Fp6YlY"
});

const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        await emailjs.sendForm(
            "service_u5e3fgf",
            "template_48bsi9e",
            formulario
        );

        console.log("Mensagem enviada!");

    } catch (erro) {

        console.log("Erro ao enviar:", erro);

    }

});