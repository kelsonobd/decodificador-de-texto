// Função para criptografar o texto
function criptografar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografar(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function hideImageAndText() {
    document.querySelector('.imagem1').classList.add('hidden');
    document.querySelector('.form2 h4').classList.add('hidden');
    document.querySelector('.areaText2').classList.add('expanded');
}

document.getElementById('botao1').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão (enviar formulário)

    // Obtém o texto da área de entrada
    const inputText = document.getElementById('input1').value;

    // Criptografa o texto
    const encryptedText = criptografar(inputText);

    // Mostra o texto criptografado na área de saída
    document.querySelector('.areaText2').value = encryptedText;

    // Limpa a área de entrada
    document.getElementById('input1').value = '';

    // Esconde a imagem e o texto do form2 e expande a área de texto
    hideImageAndText();
});

document.querySelector('.botao2').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão (enviar formulário)

    // Obtém o texto criptografado da área de saída
    const encryptedText = document.querySelector('.areaText2').value;

    // Descriptografa o texto
    const decryptedText = descriptografar(encryptedText);

    // Mostra o texto descriptografado na área de entrada
    document.getElementById('input1').value = decryptedText;

    // Limpa a área de saída
    document.querySelector('.areaText2').value = '';

    // Esconde a imagem e o texto do form2 e expande a área de texto
    hideImageAndText();
});
