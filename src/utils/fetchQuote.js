import { getRandomInt } from "./randomNumber";

export async function fetchQuote() {
    const response = await fetch("https://type.fit/api/quotes").then((response) => response.json());
    const RandomQuote = getRandomInt(0,response.length); // Escoge una frase aleatoria
    const {text, author} = response[RandomQuote];
    return {
        text,
        author
    }
}