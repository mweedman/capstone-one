let cardmethods = {
  suits: ["clubs", "hearts", "spades", "diamonds"],
  cardNames: ['Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace', 'Two'],
  cards: [],
  generateCardValues: function(){
    for(let i = 0; i < this.suits.length; i++){
    for(let j = 0; j < 13; j++){
      this.cards.push([this.suits[i], j]);
    }}
    console.log(this.cards);
    return this.cards;
  },
  shuffle: function(array){
    return array.sort(()=> Math.random() - 0.5);
  },
  returnShuffledCards: function(){
    return this.shuffle(this.generateCardValues());
  }
  
}

export default cardmethods;

