const fs = require('fs');

class Cards {
    constructor() {
        this.cards = ``;
    }
    
    addCard = (employeeInfo) => {
        this.cards += employeeInfo;
    }

    getCards = () => this.cards;

    
}

module.exports = Cards;