function getCards() {
    let cardColors = ["hearts", "diamonds", "clubs", "spades"];
    let colorUnicode = ["\u2665", "\u2666", "\u2663", "\u2660"];
    let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cards = [];
    for (var i = 0; i < cardColors.length; i++) {
        for (var j = 0; j < cardValues.length; j++) {
            cards.push({ color: cardColors[i], value: cardValues[j], name: cardValues[j] + colorUnicode[i], flipped: false });
        }
    }
    cards.sort(function () { return 0.5 - Math.random() });
    return cards;
}

function getRandomCards(n) {
    let cards = getCards();
    let result = cards.slice(0, n);
    L = [];
    for (let i = 0; i < n; i++) {
        L.push({ ...result[i] });
    }
        for (let i = 0; i < n; i++) {
        L.push({ ...result[i] });
    }
    console.log(L);
    return L.sort(function () { return 0.5 - Math.random(); });
}
let carte1 = null;
let carte2 = null;
let score = 0;
let tries = 0;
let cardNodes = [];
let cardNumber = document.getElementById("cardNumber");
let triesNumber = document.getElementById("triesNumber");
let cardsDiv = document.getElementById("cards");
let scoreNumber = document.getElementById("scoreNumber");
let cards = getRandomCards(parseInt(cardNumber.value));
function newGame(){
    cardsDiv.innerHTML = "";
    cardNodes = [];
    carte1 = null;
    carte2 = null;
    tries = 0;
    score = 0;
    cards = getRandomCards(parseInt(cardNumber.value));
    let i = 0;
    scoreNumber.textContent ="Score : " +  score + " / " + cardNumber.value;
    triesNumber.textContent ="Tries : " +  tries ;
for(card of cards) {
    let cardDiv = document.createElement("div");
    cardDiv.className = `card ${card.color}`;
    cardDiv.textContent = card.value;
    cardDiv.color = card.color;
    cardDiv.name = card.name;
    cardDiv.flipped = card.flipped;
    cardDiv.dataset.id = i++;
    cardDiv.dataset.name = card.name;

    cardDiv.onclick = function(){
         if(carte1 ==null){
            carte1 = this
            carte1.flipped = false;;
            carte1.classList = `card card ${card.color}`;
        }
        else{
            if(carte1 == this) return false;
            carte2 = this
            carte2.flipped = false;
            carte2.classList = `card card ${card.color}`;
            let index1 = parseInt(carte1.dataset.id);
            let index2 = parseInt(carte2.dataset.id);
            if(String(carte1.dataset.name) == String(carte2.dataset.name)){
                carte1.onclick =null
                carte2.onclick =null
                carte1.style.cursor ="default"
                carte2.style.cursor ="default"
                carte1.classList.remove('flipped')
                carte2.classList.remove('flipped')
                carte1.classList.add('win')
                carte2.classList.add('win')
                cardNodes = cardNodes.filter(node => node !== carte1 && node !== carte2);
                scoreNumber.textContent ="Score : " +  ++score + " / " + cardNumber.value;
                if(score == cardNumber.value){
                    triesNumber.textContent ="Tries : " +  ++tries ;
                    html = '<div>';
                    html = '<h1 class="winGame">Bravo !</h1>';
                    html += '<h1 class="winGame"> success rate : ' + ((score / tries) * 100).toFixed(2) + '% </h1>';
                    nb = parseInt(cardNumber.value) + 1;
                    html += '<h1 class="winGame"> Next Game : ' + nb + ' cards</h1>';
                    html += '</div>';
                    cardsDiv.innerHTML = html;
                    setTimeout(() => {
                       
                        cardNumber.value = nb;
                        newGame();
                    }, 3000);

            }

            }

            carte1 = null
            carte2 = null
            triesNumber.textContent ="Tries : " +  ++tries ;
            setTimeout(() => {
                flippeAllCards(true);
            }, 500);
        }
        
    }
    cardNodes.push(cardDiv);
    cardsDiv.appendChild(cardDiv);
    setTimeout(() => {
        flippeAllCards(true);
    }, 3000);
}
}


function flippeAllCards(state) {
    cardNodes.forEach(card => {
        card.flipped = state
        card.className =  `card flipped`;

    });
}

newGame();
