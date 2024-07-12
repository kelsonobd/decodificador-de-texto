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
    const areaText2 = document.querySelector('.areaText2');
    const form2H4 = document.querySelector('.form2 h4');
    const imagem1 = document.querySelector('.imagem1');
    const botao3 = document.querySelector('.botao3');

    if (areaText2.value.trim() !== '') {
        imagem1.classList.add('hidden');
        form2H4.classList.add('hidden');
        areaText2.classList.add('expanded');
        botao3.style.display = 'block';  // Mostrar o botão
    } else {
        imagem1.classList.remove('hidden');
        form2H4.classList.remove('hidden');
        areaText2.classList.remove('expanded');
        botao3.style.display = 'none';  // Esconder o botão
    }
}

document.getElementById('botao1').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão (enviar formulário)

    // Obtém o texto da área de entrada
    const inputText = document.getElementById('input1').value.toLowerCase();

    // Criptografa o texto
    const encryptedText = criptografar(inputText);

    // Mostra o texto criptografado na área de saída
    document.querySelector('.areaText2').value = encryptedText;

    // Limpa a área de entrada
    document.getElementById('input1').value = '';

    // Esconde a imagem e o texto do form2 se a área de texto não estiver vazia
    hideImageAndText();
});

document.getElementById('botao2').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do botão (enviar formulário)

    // Obtém o texto da área de entrada
    const inputText = document.getElementById('input1').value.toLowerCase();

    // Descriptografa o texto
    const decryptedText = descriptografar(inputText);

    // Mostra o texto descriptografado na área de saída
    document.querySelector('.areaText2').value = decryptedText;

    // Limpa a área de entrada
    document.getElementById('input1').value = '';

    // Esconde a imagem e o texto do form2 se a área de texto não estiver vazia
    hideImageAndText();
});

// Função para copiar o texto da área de texto
function copiarTexto() {
    const areaText2 = document.querySelector('.areaText2');
    areaText2.select();
    areaText2.setSelectionRange(0, 99999); // Para dispositivos móveis

    navigator.clipboard.writeText(areaText2.value)
        .then(() => {
            alert("Texto copiado para a área de transferência!");
            areaText2.value = ''; // Limpa a área de saída após copiar
            hideImageAndText(); // Atualiza a visibilidade da imagem e do botão de copiar
        })
        .catch(err => {
            console.error("Erro ao copiar o texto: ", err);
        });
}

// Adiciona o event listener ao botão de copiar
document.querySelector('.botao3').addEventListener('click', function() {
    copiarTexto();
});

// Adiciona event listeners para forçar letras minúsculas em input1
document.getElementById('input1').addEventListener('input', function() {
    this.value = this.value.toLowerCase();
});
