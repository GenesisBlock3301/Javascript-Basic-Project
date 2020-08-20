// #create element using tag name
//specify target Tag
getTagHeader = document.getElementsByTagName("header");
console.log(getTagHeader[0]);
//create div elements
create_div = document.createElement("div");
console.log(create_div);
//add created div inside target
addChild_inside_div = getTagHeader[0].appendChild(create_div);
create_para = document.createElement('p');
create_para.innerText ="I'm created by now using JS";
final = addChild_inside_div.appendChild(create_para);

//create element using classname

//1st specify target class
getIdName = document.getElementsByClassName('container');
console.log(getIdName[0]);
// create a dic element
create_div = document.createElement("div");
//create another element p
create_para = document.createElement('p');
//write some text inside created paregraph
create_para.innerText = "Recently I'm created by JS.";
//add child p inside div
p_inside_div = create_div.appendChild(create_para);
p_inside_div.style.background = "black";
p_inside_div.style.color = 'white';
console.log(p_inside_div);
// adding whole div inside target class
div_inside_container = getIdName[0].appendChild(p_inside_div);

//created another element bold
create_bold_ele = document.createElement('b');
create_bold_ele.innerText = "This is bold parar";
//add element inside target
getIdName[1].appendChild(create_bold_ele);
//create a replace element which replace other element
replacer_element = document.createElement('p');
replacer_element.innerText = "Bold is replace by replacer";
getIdName[1].replaceChild(replacer_element,create_bold_ele);
//remove child from parents element

console.log("---------------------------------------")
// find out first child of container
sel = document.querySelector('.container');
console.log(sel);

console.log("---------------------------------------")
// find out all element of query
sel = document.querySelectorAll('.container');
console.log(sel);


