const button = document.querySelector("#js-new-quote");
const button2 = document.querySelector("#js-tweet");
button.addEventListener("click", getQuote);
button2.addEventListener("click", clearQuote);

const endpoint = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";
//class jsx-1674108771

async function getQuote() {
    // console.log("it works");
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json.question);
        displayQuote(json.joke)
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

async function clearQuote(){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = "";
    alert('Sorry your sense of humor sucks! I cleared the joke for you');
}
function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

getQuote();