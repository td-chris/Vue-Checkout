# Vue-Checkout

Um simples form de checkout para compra de adesivos, feito com Vue e aplicando TDD.

---------------------------
# Stacks: 
- Vue
- Html
- CSS
- TDD

--------------------------
# Desafio:

Construir um checkout para compra de adesivos seguindo o seguinte modelo:

![image](https://user-images.githubusercontent.com/46171944/178850503-100a62f1-6d4d-4ff2-ae38-cc20b337b644.png)

Para isso foi utilizado o Vue aplicando o TDD com o vue-test-utils e o Jest. A estilização foi feita utilizando o conceito de 'mobile first' onde o desing é pensado primeiramente na forma de dispositivos móveis.

A idéia é implementar 3 passos: inserir o nome, preencher o form segundo os adesivos que a pessoa quiser e por último selecionar a forma de pagamento. Para isso várias regras de negócio foram necessárias para não deixar informações erradas passarem.

--------------------------
# Status:
- Form nome: ok;
- Form adesivos: ok;
- Form pagamento: pendente;
- Estilização: pendente;

--------------------------
# Aprendizado:

Utilizar o TDD na construção do app foi o maior desafio e aprendizado até então. Testar componentes do front parece ser algo meio dificil de imaginar mas passa uma confiança maior no que se esta fazendo.

-------------------------
# Visualização Atual:

Imagens do projeto no momento:

- Form nome:

![image](https://user-images.githubusercontent.com/46171944/178851629-ad5c6e37-345c-4e79-8e3d-a5152f72d9e6.png)

- Form adesivos:

![image](https://user-images.githubusercontent.com/46171944/178851754-51c2536c-5d6b-47bd-aa41-9676b576606f.png)

-------------------------
# Download do projeto:
Para conferir o projeto você pode clonar ou fazer o download pelo github.

- instalação:
npm i

- rodar o projeto:
npm run serve

- rodar testes:
npm t
