# Teste unitário em javascript
Javascript unit test

Criei um projeto para mostrar algumas casos de teste, desde uma função pura simples, até mockar uma dependência de terceiro e teste unitários de interface gráfica. Esses exemplos são simples, com o objetivo de passar a ideia. 


## Rodar os teste

1. Comando para instalar as dependências do projeto
```
npm install
```

2. Comando para rodar todos os testes
````
npm test
````
## Estrutura do projeto

Todos os testes estão na pasta __test__, seguindo a mesma estrutura do src.
Com Jest também é possível criar os testes na pasta src, junto com o código fonte. O Facebook acredita que os arquivos de teste deve ficar perto do código fonte. Apenas criando umas pasta __test__ dentro da pasta do código fonte, e um arquivo com final ****.test.js, o Jest reconhece que é um teste.
