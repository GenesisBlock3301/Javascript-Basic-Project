// json

obj = {name:"Sifat",length:1,a:{this:"that"}};
jstring = JSON.stringify(obj);
console.log(typeof(jstring))
console.log(jstring);
par = JSON.parse(jstring);
console.log(par);


// Template literale

a = 34;
console.log()