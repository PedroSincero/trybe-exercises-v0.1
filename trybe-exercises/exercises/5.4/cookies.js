// 1 - Para criar um cookie, você só precisa de atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:
document.cookie = "email=isabella@email.com";

// 2 -Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:
// email;expires=Semana; dia mes ano horario UTC
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
// 3 - Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.
// path=/"";
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
// 4 - O Javascript permite com que você atribua document.cookie a uma variável. Assim, você conseguirá ler as informações que estão armazenadas. No exemplo abaixo, ao imprimirmos no console o valor de myCookie, o que será retornado é uma string contendo o o nome e o valor do cookie. Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com
// 5 - E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.
document.cookie = "email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
// 6 - Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:
document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"