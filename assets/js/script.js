// Função para criptografar o texto
function criptografarTexto(texto) {
    let textoCriptografado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    let textoDescriptografado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDescriptografado;
}

// Função para exibir ou ocultar o botão de copiar
function toggleCopyButton() {
    let copyButton = document.querySelector('.btn-two');
    let textAreaTwoContent = document.querySelector('.text-area-two').value;
    
    if (textAreaTwoContent) {
        copyButton.style.display = 'block'; // Mostra o botão
    } else {
        copyButton.style.display = 'none'; // Oculta o botão
    }
}

// Função para copiar o texto da text-area-two
function copiarTexto() {
    let textAreaTwo = document.querySelector('.text-area-two');
    textAreaTwo.select();
    document.execCommand('copy');

    // Mostra a mensagem de confirmação
    alert('Texto copiado com sucesso!');
    
    // Limpa o conteúdo da text-area-two após copiar
    textAreaTwo.value = '';
    toggleCopyButton(); // Oculta o botão novamente
}

// Função para exibir alertas quando o input está vazio
function verificarEntrada(texto, tipo) {
    if (!texto) {
        if (tipo === 'criptografar') {
            alert('Digite um texto para criptografar');
        } else if (tipo === 'descriptografar') {
            alert('Digite um texto para descriptografar');
        }
        return false;
    }
    return true;
}

// Adicionando eventos aos botões
document.getElementById('btn1').addEventListener('click', function() {
    let textoEntrada = document.getElementById('input1').value;

    // Verifica se há texto para criptografar
    if (verificarEntrada(textoEntrada, 'criptografar')) {
        let textoCriptografado = criptografarTexto(textoEntrada);
        document.querySelector('.text-area-two').value = textoCriptografado;
        document.getElementById('input1').value = ''; // Limpa a text-area-one
        toggleCopyButton(); // Verifica se deve mostrar o botão de copiar
    }
});

document.getElementById('btn2').addEventListener('click', function() {
    let textoEntrada = document.getElementById('input1').value;

    // Verifica se há texto para descriptografar
    if (verificarEntrada(textoEntrada, 'descriptografar')) {
        let textoDescriptografado = descriptografarTexto(textoEntrada);
        document.querySelector('.text-area-two').value = textoDescriptografado;
        document.getElementById('input1').value = ''; // Limpa a text-area-one
        toggleCopyButton(); // Verifica se deve mostrar o botão de copiar
    }
});

document.querySelector('.btn-two').addEventListener('click', function() {
    copiarTexto(); // Copia o texto da text-area-two e limpa a área de texto
});

// Ocultar o botão de copiar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-two').style.display = 'none';
});
