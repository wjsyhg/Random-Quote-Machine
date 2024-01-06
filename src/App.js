import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">some quote</div>
        <div id="author">some author</div>
        <div id="button">
          <div><button id="new-quote">New quote</button></div>
          <div><a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22It%20is%20never%20too%20late%20to%20be%20what%20you%20might%20have%20been.%22%20George%20Eliot"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
