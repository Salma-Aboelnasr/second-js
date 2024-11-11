// Array of quotes with authors
var arr = [
    {"quote":"Be yourself; everyone else is already taken.", "author":" Oscar Wilde"},
    {"quote":"So many books, so little time.", "author":" Frank Zappa"},
    {"quote":"Success is not final, failure is not fatal: It is the courage to continue that counts.", "author":"Franklin D. Roosevelt"},
    {"quote":"You never know until you try.", "author":"Mark Twain"},
    {"quote":"When you have a dream, you've got to grab it and never let go.", "author":"Carol Burnett"},
    {"quote":"Nothing is impossible. The word itself says 'I'm possible!'", "author":"Audrey Hepburn"},
    {"quote":"There is nothing impossible to they who will try.", "author":"Alexander the Great"},
    {"quote":"The bad news is time flies. The good news is you're the pilot.", "author":"Michael Altshuler"},
    {"quote":"Life has got all those twists and turns. You've got to hold on tight and off you go.", "author":"Nicole Kidman"},
    {"quote":"Keep your face always toward the sunshine, and shadows will fall behind you.", "author":"Walt Whitman"},
    {"quote":"Be courageous. Challenge orthodoxy. Stand up for what you believe in...", "author":"Amal Clooney"},
    {"quote":"You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.", "author":"Duchess Meghan"},
    {"quote":"Success is not final, failure is not fatal: it is the courage to continue that counts.", "author":"Winston Churchill"},
    {"quote":"You define your own life. Don't let other people write your script.", "author":"Oprah Winfrey"},
    {"quote":"You are never too old to set another goal or to dream a new dream.", "author":"Malala Yousafzai"},
    {"quote":"At the end of the day, whether or not those people are comfortable with how you're living your life doesn’t matter...", "author":"Dr. Phil"},
    {"quote":"You can be everything. You can be the infinite amount of things that people are.", "author":"Kesha"}
];

var lastQuoteIndex = -1;

function getRandomIndex(arrayLength) {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * arrayLength);
    } while (randomIndex === lastQuoteIndex);
    return randomIndex;
}
function generateRandomQuote() {
    var randomIndex = getRandomIndex(arr.length);
    document.getElementById("quote").innerHTML = arr[randomIndex].quote;
    document.getElementById("author").innerHTML = "- " + arr[randomIndex].author;
    lastQuoteIndex = randomIndex; 
}
