console.log('...connected')

async function getQuotes() {
    const api = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(api)
    } catch (error) {
        console.error(error)
    }
}