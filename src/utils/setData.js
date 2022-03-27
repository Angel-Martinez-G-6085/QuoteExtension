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

const tweetQuote = () => {
  const Text = document.querySelector(".blockquote__text").innerHTML;
  const Author = document.querySelector(".blockquote__author").innerHTML;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${Text} - ${Author}`;
  window.open(tweetUrl,"_blank");
}

export const setButtonsEvent = () => {
  const bquote = document.querySelector('.bquote');
  const btweet = document.querySelector(".btweet");
  bquote.addEventListener("click",() => setData());
  btweet.addEventListener("click",tweetQuote);
}