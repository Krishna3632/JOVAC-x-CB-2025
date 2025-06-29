const mod = require('./module.js');
console.log("Before change:", mod.name);

mod.name = "Radhika"; // Trying to change it
console.log("After change:", mod.name);

const mod2 = require('./module.js');
console.log("Reloaded module:", mod2.name);


cons