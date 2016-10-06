angular.module('cardsApp', [])
  .controller('CardsListController', function() {
	var cardsList = this;
	cardsList.cards = [
	  { text: 'Pyrokinesis', done: true },
	  { text: 'Karn, Silver Golem', done: false },
	  { text: 'Corpulent Corpse', done: false },
	  { text: 'Drown in Filth', done: false },
	  { text: 'Impulse', done: false },
	  { text: 'Air Elemental', done: false },
	  { text: 'Opal Lake Gatekeepers', done: false },
	];
 
	cardsList.addCard = function () {
	    if ({text:cardsList.newCardText.length > 0})
	    {
            cardsList.cards.push({text:cardsList.newCardText, done:false});
            cardsList.newCardText = null;
    	}
	};
 
	cardsList.remaining = function() {
	  var count = 0;
	  angular.forEach(cardsList.cards, function(cards) {
		count += cards.done ? 0 : 1;
	  });
	  return count;
	};
 
	cardsList.archive = function() {
	  var oldCards = cardsList.cards;
	  cardsList.cards = [];
	  angular.forEach(oldCards, function(cards) {
		if (!cards.done) cardsList.cards.push(cards);
	  });
	};
  });

