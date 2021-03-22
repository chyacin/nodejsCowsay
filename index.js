const myInfos = require('./information.js');
console.log(myInfos)

const cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello I'm ${myInfos.name} from the ${myInfos.city} Campus!`,
	e : "oO",
	T : "U "
}));


