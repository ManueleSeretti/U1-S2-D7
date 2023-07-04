/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numero1 = 3;
const numero2 = 5;

if (numero1 > numero2) {
  console.log("il numero maggiore è: ", numero1);
} else console.log("il numero maggiore è: ", numero2);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 3;
if (numero != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 50;
resto = x % 5;
if (resto == 0) {
  console.log("il numero è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let valore1 = 3;
let valore2 = 5;

if (valore1 == 8 || valore2 == 8) {
  console.log("uno dei due vlori è 8");
} else {
  if (valore1 + valore2 == 8 || valore1 - valore2 == 8) {
    console.log("la somma o la sottrazione dei due numeri è 8");
  }
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 20;

if (totalShoppingCart > 50) {
  console.log("spesa di spedizione gratuita, l' ammontare da pagare è: ", totalShoppingCart);
} else {
  console.log("spesa di spedizione di 10,l'ammontare da pagare è: ", totalShoppingCart + 10);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
totalShoppingCart = (totalShoppingCart / 100) * 80;
if (totalShoppingCart > 50) {
  console.log("spesa di spedizione gratuita, l' ammontare da pagare è: ", totalShoppingCart);
} else {
  console.log("spesa di spedizione di 10, l'ammontare da pagare è: ", totalShoppingCart + 10);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 32;
let num3 = 23;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log("numeri in ordine : ", num1, "", num2, "", num3);
  } else {
    console.log("numeri in ordine : ", num1, "", num3, "", num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log("numeri in ordine : ", num2, "", num1, "", num3);
  } else {
    console.log("numeri in ordine : ", num2, "", num3, "", num1);
  }
} else {
  if (num1 >= num2) {
    console.log("numeri in ordine : ", num3, "", num1, "", num2);
  } else {
    console.log("numeri in ordine : ", num3, "", num2, "", num1);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let y = 10;
console.log(typeof y);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const Numpari = 22;
if (Numpari % 2 == 0) {
  console.log("il numero è pari");
} else {
  console.log("il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const lista = [];
lista[0] = 1;
lista[1] = 2;
lista[2] = 3;
lista[3] = 4;
lista[4] = 5;
lista[5] = 6;
lista[6] = 7;
lista[7] = 8;
lista[8] = 9;
lista[9] = 10;

console.log(lista);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

lista[lista.length - 1] = 100;
console.log(lista);
