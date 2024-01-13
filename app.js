
// Select the section with an id of container without using querySelector.
const sec = document.getElementById("container");



// Select the section with an id of container using querySelector.
const section = document.querySelector("#container");

// Select all of the list items with a class of “second”.
const  Lis = document.querySelectorAll(".second");
// for(let li of Lis){
//    li.innerText="kkkk";
// }

// Select a list item with a class of third, but only the list item inside of the ol tag.
const ol = document.getElementsByTagName("ol");
const thirdLi = ol[0].querySelector(".third");
// thirdLi.innerText="yyy";

// Give the section with an id of container the text “Hello!”.
const child ="Hello!";
sec.prepend(child);

// Add the class main to the div with a class of footer.
const footerDiv =document.querySelectorAll(".footer");
footerDiv[0].classList.add("main");

// Remove the class main on the div with a class of footer.
footerDiv[0].classList.remove("main");

// Create a new li element.
const newLi= document.createElement("li");

// Give the li the text “four”.
newLi.textContent="four";

// Append the li to the ul element.
const ul = document.getElementsByTagName("ul");
ul[0].append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olLi=ol[0].querySelectorAll("li");
for( let li of olLi){
    li.style.backgroundColor="green";
}

// Remove the div with a class of footer
footerDiv[0].remove();



