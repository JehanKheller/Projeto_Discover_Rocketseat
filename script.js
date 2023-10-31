// let - Declara variável que permite receber valores diferentes.
//let boasVindas = "Bom dia.";

// const - Declara variável que quando atribuído um valor, o mesmo não pode ser alterado.
//const serHumano = true;

function toggleMode() {
    const html = document.documentElement;

    //if (html.classList.contains('light')) {
    //    html.classList.remove('light');
    //}
    //else {
    //    html.classList.add('light');
    //}

    // Simplificando
    html.classList.toggle("light");

    // Obtendo a imagem no HTML através do seletor.
    const imgAvatar = document.querySelector("#profile img")
    
    // Substituindo a imagem.
    if (html.classList.contains("light")) {
        // Se houver light mode, adicionar a imagem light.
        imgAvatar.setAttribute("src", "./assets/avatar_lightmode.jpg")
    }
    else {
        // Se não houver light mode, manter a imagem default.
        imgAvatar.setAttribute("src", "./assets/avatar_darkmode.png")
    }
}