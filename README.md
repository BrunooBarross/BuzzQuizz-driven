<p align="center">
    <h1 align="center">
        BUZZQUIZ
    </h1>
</p>

 - Sabe aqueles quizzes do facebook? Então, esse só é mais um deles...
 - Esse tipo de teste, também chamado de "quiz", convida muitas pessoas para oferecer informações por um pouco de descontração ou para brincar com amigos na linha do tempo de uma rede social.


## 💻 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

---

## 👨🏻‍💻 Instalação

```bash

$ git clone https://github.com/BrunooBarross/BuzzQuizz-driven

$ Abra o index.html ou execute o projeto via live mode

```

## Home

- Nesta tela, devem ser listados os quizzes fornecidos pelo servidor.
- A lista de quizzes do usuário deve mostrar somente seus quizzes, enquanto a lista de baixo deve mostrar todos os quizzes recebidos, sem os do usuário. Para diferenciar os quizzes do usuário dos demais, veja o requisito Quizzes do Usuário
- Ao clicar em "Criar Quizz" ou no "+" essa tela deve sumir, dando lugar à tela de Criação de Quiz

![image](https://user-images.githubusercontent.com/91610976/205403482-123a30f5-fc4a-4b3d-b6b0-978e50c013c6.png)

## Configuração de um quizz

- O processo de criar um quizz passará por 4 telas

- Informações básicas do quizz
![image](https://user-images.githubusercontent.com/91610976/205403489-9ac8e76d-1c16-4341-9daf-a34d498785c7.png)

- Perguntas do quizz
![image](https://user-images.githubusercontent.com/91610976/205403492-6c26da45-4785-4662-a50f-4801a14e502b.png)

- Níveis do quizz
![image](https://user-images.githubusercontent.com/91610976/205403495-927ae114-b33e-497a-8bbf-7032359d11fe.png)

- Sucesso do quizz
![image](https://user-images.githubusercontent.com/91610976/205403499-39590ec7-58b6-4e31-ab0f-a82f0d471cc9.png)

## Seus Quizzes

- Ao criar um quizz no servidor, este devolverá como resposta o objeto completo do quizz criado, incluindo o id (identificador único) que o servidor gerou pra este quizz
- Para futuramente você conseguir diferenciar um quizz criado pelo usuário de outros quizzes, você pode armazenar esses ids no momento da criação do quizz
- Dica: para isso, você usará um recurso do JavaScript chamado Local Storage.
![image](https://user-images.githubusercontent.com/91610976/205403504-78aba7fc-a089-4514-8a2a-68caadd3e26a.png)

## Respondendo um Quizz

- No topo do quizz, deve ser exibido um banner com a imagem e o título do quizz. A imagem deve estar escurecida com uma camada preta de 60% de opacidade.
- As respostas de cada pergunta devem ser exibidas organizadas aleatoriamente
- Ao clicar em uma resposta, as demais devem ganhar o efeito "esbranquiçado" do layout
- Não deve ser possível alterar a resposta após a escolha
- Após escolher uma resposta, o texto das opções deve ganhar a cor vermelha ou verde, indicando quais eram as respostas erradas e a certa
- Após 2 segundos de respondida, deve-se scrollar a página para a próxima pergunta
![image](https://user-images.githubusercontent.com/91610976/205403510-e250f350-1f0b-49f8-a50f-b590bbe5b7d2.png)

## Resultado de um quizz

- Após responder todas as perguntas, deve aparecer ao final da tela a caixa de resultado do quizz. Assim como na passagem das perguntas, deve-se aguardar 2 segundos após a última resposta e então scrollar a tela para exibir essa caixa de resultado
- A pontuação do quiz (porcentagem de acertos sobre total de perguntas) deve ser calculada no front, sem nenhuma comunicação com o servidor, bem como a classificação de em qual nível o usuário ficou baseado nessa pontuação
- Deverão ser exibidos o título, a imagem e a descrição do nível que o usuário ficou
- O score deve ser arredondado de forma a não ter casas decimais
- Ao clicar no botão "Reiniciar Quizz", a tela deverá ser scrollada novamente para o topo, as respostas zeradas pro estado inicial e a caixa de resultado escondida novamente
- Ao clicar no botão "Voltar pra home", essa tela deve sumir e dar lugar a tela home
![image](https://user-images.githubusercontent.com/91610976/205403518-0b5192fd-6efb-4a66-8b4d-59d7fc714ef9.png)
