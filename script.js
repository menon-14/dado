// 1. Variáveis de Estado
let pontuacaoTotal = 0;
const PONTUACAO_MAXIMA = 30;

// 2. Elementos DOM
const dado1Elemento = document.getElementById('dado1');
const dado2Elemento = document.getElementById('dado2');
const somaDadosElemento = document.getElementById('soma-dados');
const pontuacaoAtualElemento = document.getElementById('pontuacao-atual');
const lancarBtn = document.getElementById('lancar-btn');
const feedbackElemento = document.getElementById('feedback');

// --- Funções do Jogo ---

function lancarDado() {
    // Retorna um número aleatório entre 1 e 6
    return Math.floor(Math.random() * 6) + 1;
}

function atualizarDisplay() {
    // Atualiza o texto da pontuação total na tela
    pontuacaoAtualElemento.textContent = pontuacaoTotal;
}

function verificarFimDeJogo() {
    if (pontuacaoTotal >= PONTUACAO_MAXIMA) {
        feedbackElemento.textContent = "🥳 VENCEDOR! Você alcançou 30 pontos ou mais!";
        feedbackElemento.style.color = '#1abc9c'; // Verde
        lancarBtn.textContent = "Reiniciar Jogo";
        lancarBtn.removeEventListener('click', handleLancamento);
        lancarBtn.addEventListener('click', reiniciarJogo);
        return true;
    }
    return false;
}

function handleLancamento() {
    // 1. Lança os dados
    const dado1 = lancarDado();
    const dado2 = lancarDado();
    const soma = dado1 + dado2;
    
    // 2. Atualiza o estado da pontuação
    pontuacaoTotal += soma;
    
    // 3. Atualiza o display dos dados
    dado1Elemento.textContent = dado1;
    dado2Elemento.textContent = dado2;
    somaDadosElemento.textContent = soma;
    
    // 4. Atualiza a pontuação total na tela
    atualizarDisplay();
    
    // 5. Verifica se o jogo acabou
    verificarFimDeJogo();
}

function reiniciarJogo() {
    // Reseta o estado
    pontuacaoTotal = 0;
    
    // Reseta o display
    dado1Elemento.textContent = '0';
    dado2Elemento.textContent = '0';
    somaDadosElemento.textContent = '0';
    feedbackElemento.textContent = '';
    
    // Configura o botão novamente
    lancarBtn.textContent = "🎲 Lançar os Dados";
    lancarBtn.removeEventListener('click', reiniciarJogo);
    lancarBtn.addEventListener('click', handleLancamento);
    
    atualizarDisplay();
}

// --- Inicialização ---

// Adiciona o ouvinte de evento ao botão Lançar
lancarBtn.addEventListener('click', handleLancamento);

// Inicializa o display da pontuação ao carregar
atualizarDisplay();