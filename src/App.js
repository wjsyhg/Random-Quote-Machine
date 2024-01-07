import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const App = () => {

  const quotes = [
    {"quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.", "author": "Dalai Lama"},
    {"quote": "Life shrinks or expands in proportion to one's courage.", "author": "Anais Nin"},
    {"quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "author": "Helen Keller"},
    {"quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine"},
    {"quote": "Dreaming, after all, is a form of planning.", "author": "Gloria Steinem"},
    {"quote": "A truly rich man is one whose children run into his arms when his hands are empty.", "author": "Unknown"}
  ];

  const [quote, setQuote] = useState('It is never too late to be what you might have been.');
  const [author, setAuthor] = useState('George Eliot');

  const handleClick = () => {
    setQuote(quotes[Math.floor(Math.random() * 6)]["quote"]);
    setAuthor(quotes[Math.floor(Math.random() * 6)]["author"]);
  };

  const tweetQuote = (event) => {
    event.preventDefault();
    const tweetContent = `${quote} - ${author}`;
    const encodedTweet = encodeURIComponent(tweetContent);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodedTweet}`;
    window.open(tweetUrl, '_blank');
  };
  

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text"><FontAwesomeIcon className="left-quote" icon={faQuoteLeft}></FontAwesomeIcon>{quote}</div>
        <div id="author">- {author}</div>
        <div id="button">
          <div><button id="new-quote" onClick={handleClick}>New quote</button></div>
          <div><a id="tweet-quote" href="https://twitter.com/intent/tweet" onClick={tweetQuote}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
