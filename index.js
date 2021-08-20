'use strict';

const coutriesArray = require('./coutries');
const randomItem = require('./random-item');
class Countries {

    constructor (options = coutriesArray) {
        this.options = options;
        this.original = options;
    }
    list()
    {
        return this.original;

    }
    reset()
    {
        this.options = this.original;
        return this;

    }
    byName(name)
    {
        this.options = this.options.filter(item => item.toLowerCase().includes(name.toLowerCase()))  
        return this;
       
    }
    toJson(){
        return this.options;
    }
    get capital(){
        const countriesFound = this.options.length;
        if (!countriesFound) {
            throw new Error("No countries available");
        }if (countriesFound === 1){
            return this.options[0].city;
        }
        return randomItem(this.options);
    }

}
module.exports = Countries;