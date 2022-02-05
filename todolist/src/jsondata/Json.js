var cddata = require("./cards.json");
var Carddata = []
for (let i = 0; i < cddata.length; i++) {
    Carddata.push(cddata[i])
}

var catdata = require("./category.json")
var Categorydata = []
for (let i = 0; i < catdata.length; i++) {
    Categorydata.push(catdata[i])
}

export var Carddata;
export var Categorydata;