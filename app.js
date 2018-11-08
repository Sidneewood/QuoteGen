var quotes = [
    "I don't want whatever I want. Nobody does. Not really. What kind of fun would it be if I just got everything I ever wanted just like that, and it didn't mean anything? What then?",
    "Have fun, be active. Ride a bike instead of driving, for example",
    "Hi Shisters",
    "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
    "Love looks not with the eyes, but with the mind, And therefore is winged Cupid painted blind."
]


function newQuote() {
    // alert('hello')
    var randomNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNum]
}