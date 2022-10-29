import { template } from "../src/htmlTemplate";
const fs = require('fs');

class Cards {
    constructor() {
        this.cards = ``;
    }
    
    addEmployee = (employee) => {
        this.cards.append(employee);
    }

    buildHtml = () => {
        fs.writeFile(`./dist/html/index.html`, )
    }
}