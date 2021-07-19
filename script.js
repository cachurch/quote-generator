const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote')
const loader = document.getElementById('loader') 

let apiQuotes = []

//select single quote
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // if author is null, display as "unknown"
    if (!quote.author) {
        authorText.textContent = 'Unknown' 
    } else {
        authorText.textContent = quote.author
    }
    // check if the quote is long and style accordingly
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    //Set quote, hide loader
    quoteText.textContent = quote.text
    loaded()
}

//fetch quotes from API
async function getQuotes() {
    loading()
    const api = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(api)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        console.error(error)
    }
}

//tweet quote
function tweetQuote() {
    twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

//display loader 
function loading() { 
     loader.hidden = false
     quoteContainer.hidden = true
}

//hide loader
function loaded() {
    loader.hidden = true
    quoteContainer.hidden = false
}

//event listeners
newQuoteButton.addEventListener('click', newQuote)
twitterButton.addEventListener('click', tweetQuote)

getQuotes()
