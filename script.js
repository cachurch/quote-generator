let apiQuotes = []

//select single quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    console.log(quote)
}

//fetch quotes from API
async function getQuotes() {
    const api = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(api)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        console.error(error)
    }
}

getQuotes( )