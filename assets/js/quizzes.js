document.addEventListener("DOMContentLoaded", function(event){

botao_adicionar = document.querySelector(".adicionar")
botao_adicionar.addEventListener("click", function(event){
    novo_quiz = document.createElement('li')
    a_novo_quiz = document.createElement('a')
    a_novo_quiz.classList.add("quizzes")
    a_novo_quiz.href = "quizz_anotacao1.html"

    head_caixa = document.createElement('p')
    head_caixa.classList.add("head-caixa")
    espacamento = document.createElement('p')
    espacamento.classList.add("espacamento")
    espacamento2 = document.createElement('p')
    espacamento2.classList.add("espacamento")

    head_caixa.textContent = "Novo Quiz"
    espacamento.textContent = "Disciplina 1"
    espacamento2.textContent = "Última pontuação: não iniciado"

    a_novo_quiz.appendChild(head_caixa)
    a_novo_quiz.appendChild(espacamento)
    a_novo_quiz.appendChild(espacamento2)
    novo_quiz.appendChild(a_novo_quiz)

    coluna = document.querySelector(".coluna")
    coluna.insertBefore(novo_quiz, coluna.childNodes[0])


})
})
