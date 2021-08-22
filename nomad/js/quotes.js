const quotes = [
    { 
    quote : 'Music is like a dream. One that I cannot hear.',
    author : 'Ludwig van Beethoven',
},
    { 
    quote : 'Without music, life would be a mistake',
    author : 'Friedrich Nietzsche',
},
    { 
    quote : 'I can chase you, and I can catch you, but there is nothing I can do to make you mine.',
    author : ' Morrissey',
},
    { 
    quote : 'Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything',
    author : 'Plato',
},
    { 
    quote : 'How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?',
    author : ' Jane Swan',
},
    { 
    quote : 'If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.',
    author : 'Albert Einstein',
},
    { 
    quote : 'Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.',
    author : 'Keith Richard',
},
    { 
    quote : 'I think music in itself is healing. It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves musi',
    author : 'Billy Joel',
},
    { 
    quote : 'One good thing about music, when it hits you, you feel no pain',
    author : ' Bob Marley',
},
    { 
    quote : 'Music is the shorthand of emotion',
    author : 'Leo Tolstoy',
},
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;