var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

const prevCard = document.querySelector('.previous')
const nextCard = document.querySelector('.next')
const startCard = document.querySelector('.start-flashcard')
const cardContainer = document.querySelector('.container')
const pagination = document.querySelector('.pagination')

startCard.onclick = ()=> {
    cardContainer.classList.toggle("active");
    pagination.classList.toggle("active");
    startCard.style.opacity = 0;
    showFlashcards(0);
    itemCounter(1);
}

nextCard.onclick = () => {
    if(itemCount < items.length - 1){
            itemCount ++;
            itemNumber ++;
            showFlashcards(itemCount);
            itemCounter(itemNumber);
        card.classList.remove('is-flipped');
    }else{
        console.log("Items Completed.");
    }
}

prevCard.onclick = () => {
    if(itemCount > 0){
        itemCount--;
        itemNumber--;
        showFlashcards(itemCount);
        itemCounter(itemNumber);
        card.classList.remove('is-flipped');
    }else{
        console.log("Items Returned.");
    }
}


let itemCount = 0;
let itemNumber = 1;

function showFlashcards() {
    const cardText = document.querySelector(".flashcard .card");

    let cardTextTag = '<div class="card-face front">' + items[itemCount].front 
    + '</div>' + '<div class="card-face back">' + items[itemCount].back + '</div>';
    
    setTimeout(function() {
        cardText.innerHTML = cardTextTag;
    }, 150);
}

window.onload = showFlashcards;

function itemCounter() {
    const currentCard = document.querySelector('.pagination .current');

    let totalItemsCountTag = '<span>' + itemNumber + '/' + items.length + '</span>';

    currentCard.innerHTML = totalItemsCountTag;
};

window.onload = showFlashcards, itemCounter;
