import { fetchQuote } from "./fetchQuote";

export const setData = () => {
  const Text = document.querySelector(".blockquote__text");
  const Author = document.querySelector(".blockquote__author");
  const finalQuote = fetchQuote();
  finalQuote.then(({ text, author }) => {
      Text.innerHTML = text;
      Author.innerHTML = author;
  });
};