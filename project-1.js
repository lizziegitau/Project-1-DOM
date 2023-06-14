// Variables //

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `“We cannot solve problems with the kind of thinking we employed when we came up with them.”`,
    person: `Albert Einstein`
}, {
    quote: `“Learn as if you will live forever, live like you will die tomorrow.”`,
    person: `Mahatma Gandhi`
}, {
    quote: `“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”`,
    person: `Eleanor Roosevelt`
}, {
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston S. Churchill`
}, {
    quote: `“If you are working on something that you really care about, you do not have to be pushed. The vision pulls you.”`,
    person: ` Steve Jobs`
}, {
    quote: `“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus."`,
    person: `Alexander Graham Bell`
}, {
    quote: `“I am a greater believer in luck, and I find the harder I work the more I have of it.”`,
    person: `Thomas Jefferson`
}, {
    quote: `“Education is the most powerful weapon which you can use to change the world.”`,
    person: `Nelson Mandela`
}, {
    quote: `“Keep your eyes on the stars, and your feet on the ground.”`,
    person: `Theodore Roosevelt`
}, {
    quote: `“Talent wins games, but teamwork and intelligence win championships.”`,
    person: `Michael Jordan`
}, {
    quote: `“Inspiration does exist, but it must find you working.”`,
    person: `Pablo Picasso`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})