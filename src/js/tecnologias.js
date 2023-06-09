descricoes = {
    "Python": "É uma linguagem de programação de alto nível, orientada a objetos; Eu a utilizo na criação de programas que ultilizam API's de terceiros.",
    "Linux": "Linux é um sistema operacional de código aberto, indispensável quando o assunto são servidores, que é essencial para um desenvolvedor backend.",
    "Flask": "Flask é um micro framework que usa a linguagem Python para criar aplicativos Web.",
    "Java": "Java é uma linguagem de programação de alto nível, orientada a objetos. Atualmente, estou desenvolvendo o meu primeiro projeto em Java, que estará disponível em breve.",
    "MongoDB": "MongoDB é um sistema de gerenciamento de banco de dados NoSQL, orientado a documentos.",
    "MySQL": "MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado, com suporte a SQL.",}


function mostrarDescricao(tec) {
    document.getElementById("prof-name").innerHTML = tec;
    document.getElementById("descricao").innerHTML = descricoes[tec];
}

