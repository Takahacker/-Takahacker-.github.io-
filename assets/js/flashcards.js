document.addEventListener("DOMContentLoaded", function (event) {
  botao_adicionar = document.querySelector(".adicionar");
  botao_adicionar.addEventListener("click", function (event) {
    novo_quiz = document.createElement("li");
    a_novo_quiz = document.createElement("a");
    a_novo_quiz.classList.add("quizzes");
    a_novo_quiz.href = "flashcard1_anotacao1.html";

    head_caixa = document.createElement("p");
    head_caixa.classList.add("head-caixa");
    espacamento = document.createElement("p");
    espacamento.classList.add("espacamento");
    espacamento2 = document.createElement("p");
    espacamento2.classList.add("espacamento");

    head_caixa.textContent = "Novo Flashcard";
    espacamento.textContent = "Disciplina 1";
    espacamento2.textContent = "Última pontuação: não iniciado";

    a_novo_quiz.appendChild(head_caixa);
    a_novo_quiz.appendChild(espacamento);
    a_novo_quiz.appendChild(espacamento2);
    novo_quiz.appendChild(a_novo_quiz);

    coluna = document.querySelector(".coluna");
    coluna.insertBefore(novo_quiz, coluna.childNodes[0]);

    // lista de cores possíveis que sera sorteada aleatoriamente uma para mudar a corde head_caixa
    lista_cores = [
      "#EC8989",
      "#403D79",
      "#f0ce76",
      "#91ca83",
      "#90c3fe",
      "#bc8deb",
      "#EE82EE",
    ];
    // sorteia um número de 0 a 6
    numero_sorteado = Math.floor(Math.random() * 7);
    // muda a cor de head_caixa do elemento criado
    head_caixa.style.backgroundColor = lista_cores[numero_sorteado];
    head_caixa.style.backgroundColor = lista_cores[numero_sorteado];
  });
});
