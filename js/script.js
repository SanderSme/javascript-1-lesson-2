// We code it together

// 1. Select heading h2

const heading2 = document.querySelector("h2");
console.log(heading2);

// 2. Select element with class .heading2

const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);

// 3. Select element with id #list using querySelector

const list = document.querySelector("#list");
console.log(list);

// 4. Select element with id #list using getElementById

const list2 = document.getElementById("list");
console.log(list2);

// 5. Select single li

const singleLi = document.querySelector("li");
console.log(singleLi);

// 6.
//  a. Select Multiple li's

const allLi = document.querySelectorAll("li");
console.log(allLi);

//  b. Loop on the list items

for (let i = 0; i < allLi.length; i++) {
  console.log(allLi[i].innerHTML);
}

// 7.
// a. select h1 element

const heading1 = document.querySelector("h1");
console.log(heading1);

// b. Change the color of that h1 to be purple

heading1.style.color = "blue";

// c. Change the border to be 1px solid green

heading1.style.border = "5px solid green";

// d. Change background colour to be light gray

heading1.style.backgroundColor = "lightGrey";

// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

heading1.style.padding = "1em";

heading1.style.textAlign = "center";

//1. select a div element

const div = document.querySelector("div");

//2. see if it has any class name

console.log(div);

//3. add a class to this div

div.classList.add("container");

//4. check for class name

console.log(div.className);

//5. Add another class to the div

div.classList.add("myDiv");
console.log(div);

// 1. select the h1 and change the innerText

const myHeading = document.querySelector("h1");

myHeading.innerText = "Wassup";

// 2.loop through al the li element and change the innerText value to be changed

const allLiAgain = document.querySelectorAll("li");

for (let i = 0; i < allLiAgain.length; i++) {
  allLiAgain[i].innerText += " LOL";
}

// 3.change the innerHTML of the h1 to be updated using innerHTML

myHeading.innerHTML = "Sander";

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const addingDiv = document.querySelector("div");

addingDiv.innerHTML = `<p><b>Biggie</b> Smalls</p>`;

addingDiv.style.fontSize = "50px";
addingDiv.style.textAlign = "center";

// 5. select the ul

const list3 = document.querySelector("ul");

//  a. get the existing HTML inside the ul element and assign it to a variable

const existingHTML = list3.innerHTML;

//  a. create the new li HTML

const newHTMLLi = `<li>Hello i am a new item hamster</li>`;

//  b. set the uls new HTML to the existing HTML plus the new HTML

list3.innerHTML += newHTMLLi;
