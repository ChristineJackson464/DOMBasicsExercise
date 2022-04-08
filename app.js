// 1. Using getElementById, select the div with the info for X-Men inside of it and set it to a const variable called xMen.
const xMen = document.getElementById(`x-men`);
console.dir(xMen);

// 2. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName ("center");
console.dir(centered);


// 3. Using querySelector, select the first div with the info for Batman: The Animated Series inside of it and set it to a const variable called batman.
//const batman = document.querySelector(`div h2`);
//! Preferred answer
const batman = document.querySelector(`#batman`);


// 4. Using querySelectorAll, select all the h3 elements and set them to a const variable called h3s
const h3s = document.querySelectorAll("h3");
console.dir(h3s);


// 5a. Select the h1 (You can use whichever selector you want) and set it to a const variable called h1.
const h1 = document.querySelector("h1");

// 5b. Use inner text to change the text to say "The Best Animated Superhero TV Shows Ever!"
h1.innerText = ("The Best Animated Superhero TV Shows Ever!");
console.log(h1);


// 6a. Select the div with the id of "honorable-mentions" and set it to a const variable called honorableMentions.
const honorableMentions = document.querySelector("#honorable-mentions");
console.log(honorableMentions);


// 6b. Use innerHTML to change the HTML to a p (AKA Paragraph) element with the text of "OTHER GREAT SHOWS" inside of it (NOTE: Do NOT include the "center" class)
honorableMentions.innerHTML = '<p>OTHER GREAT SHOWS</p>';
console.log(honorableMentions.innerHTML);


// 7a. Select the a tag at the bottom of the HTML file and set it to a const variable called aTag.
const aTag = document.querySelector('a');

// 7b. Change the href attribute to the following link "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/"
//! WRONG
//! aTag.innerHTML = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/";


// 8. Using classList, ADD both the "background" and "text-color" classes to the h1 (NOTE: You can use the h1 variable you created earlier)
// const h1 = document.querySelector("h1");
h1.classList.add("background","text-color");
console.log(h1.classList);

// 9. Using classList, REMOVE the "background" class from the h1 (NOTE: You can use the h1 variable you created earlier)
//! Do not think this is correct- verify with someone??
/*
const newH1 = document.querySelector(".background");
newH1.remove();
*/
h1.classList.remove("background");


// 10a. Using createElement, create an h4 element and set it to a const variable called h4
const h4 = document.createElement('h4');

// 10b. Using innerText add the following text "Is Avatar: The Last Airbender A Superhero Show?"
h4.innerText = "Is Avatar: The Last Airbender A Superhero Show?";

// 10c. Using prepend, add the h4 to the start of the webpage/document (NOTE: You need to select the body element before you do this)
const body = document.querySelector("body");
body.prepend(h4); // Is Avatar: The Last Airbender A Superhero Show?


// 11a. Using createElement, create an h5 element and set it to a const variable called h5
const h5 = document.createElement('h5');

// 11b. Using innerText add the following text "Heroes in a half shell Turtle Power!"
h5.innerText = "Heroes in a half shell Turtle Power!";

// 11c. Using insertAdjacentElement, add the h5 after the closing tag of the a tag (AKA After the closing tag for the link) on the webpage/document (NOTE: You can use the aTag variable you created earlier)
const aTag = document.querySelector('a');
aTag.insertAdjacentElement('afterend', h5);


// 12. Using remove, remove the "Superman" li (NOTE: You will need to select the li first)
const li = document.querySelector("ul>li");
li.remove();



//BONUS

//B-13a. Select all the divs and set them to a const variable called divs.
const divs = document.querySelectorAll('div');
console.dir(divs);


// B-13b. Using classList, TOGGLE the "background" class on for all the divs (NOTE: You will need a loop to do this)
//! DID NOT ATTEMPT




// B-14a. Create an array called avengers with the following string values "Forever", "Fight", "As", "One", "AVENGERS", "ASSEMBLE!"
const avengers = [
    "Forever" , 
    "Fight" ,
    "As" ,
    "One" ,
    "AVENGERS" ,
    "ASSEMBLE!"
];

// B-14b. Using a loop, add each item from the avengers array as span elements/tags to the bottom of the document/webpage
//! DID NOT ATTEMPT

function adding (a){
    for(i=0; i<a.length; i++){
        newRay.innerText += a[i]+ ` `;
    }
    body.append(newRay);
}
adding(avengers);

/*
OR
for (a of avengers) {
    body.append(a+ ` `)
}

for (item of avengers){
    const newSpan = document.createElement (`span`);
    newSpan.innerText = item;
    body.insertAdjacentElement(`beforeend`, newSpan);
}
*/