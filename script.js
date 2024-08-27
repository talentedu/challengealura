// Função para criptografar o texto
function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

// Função para redirecionar para a página criptografado.html com o texto criptografado
function criptografarTexto() {
    const inputText = document.getElementById('inputText').value;
    const textoCriptografado = criptografar(inputText);
    window.location.href = `criptografado.html?texto=${encodeURIComponent(textoCriptografado)}`;
}

// Função para descriptografar o texto e redirecionar para index.html
function descriptografarTexto() {
    const inputText = document.getElementById('inputText').value; // Corrigido para pegar o valor de inputText
    const textoDescriptografado = descriptografar(inputText);
    window.location.href = `descriptografado.html?texto=${encodeURIComponent(textoDescriptografado)}`;
}

// Função para copiar o texto criptografado/descriptografado para a área de transferência
function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}

// Função para pegar o texto da URL e exibir no textarea
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const texto = params.get('texto');
    if (texto) {
        const outputText = document.getElementById('outputText') || document.getElementById('inputText');
        if (outputText) {
            outputText.value = texto;
        }
    }
});
