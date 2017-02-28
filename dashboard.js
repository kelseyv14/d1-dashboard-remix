// 1. Count the number of records in the "Current Quarter Details" table.


var numberofRec = document.querySelectorAll('tr')
console.log(numberofRec.length);



// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

// var newImage = "https://unsplash.com/photos/NKSGuJzExIo"

//  var imageChange = document.getElementsById('.col-xs-6 col-sm-3').src = (newImage);
//     if (imageChange.classList.contains('http://unsplash.it/400?random')) {
//         appendInput();

//     }
// function appendInput() {
//     document.querySelector('.col-xs-6 col-sm-3').innerHTML += '<img class="img-responsive">' + newImage  + '</img>';
// }

var imageSwitch = document.querySelectorAll('img')
imageSwitch[0].src = "https://unsplash.com/photos/NKSGuJzExIo"
imageSwitch[0].alt = "winter"
imageSwitch[1].src = "https://unsplash.com/photos/hLxqYJspAkE"
imageSwitch[1].alt = "spring"
imageSwitch[2].src = "https://unsplash.com/photos/t-W4_309hi8"
imageSwitch[2].alt = "summer"
imageSwitch[3].src = "https://unsplash.com/photos/utqJcneoFjo"
imageSwitch[3].alt = "fall"
// console.log(imageSwitch[0].alt);

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var dotDotDot = document.querySelectorAll('.text-muted')
dotDotDot.forEach(function(thing){
    thing.innerHTML = '$' + Math.round(Math.random() * 255);

})
// console.log(dotDotDot);

// 4. Change the currently selected left side menu item from Overview to Reports.
var kitten = document.querySelectorAll('.nav-sidebar > li');
    kitten[0].classList.remove('active');
    kitten[1].classList.add('active');



// 5. Set the default search input value to "Q4 sales".

var inputValue = document.querySelectorAll('.navbar-right > input')
inputValue.forEach(function(thing){
thing.placeholder = "Q4 Sales"
});


console.log(inputValue.placeholder)


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

//have tried about 14 ways to get this to work...I am between this, which I know is wrong but could be close

var table = document.getElementsByClassName("table-responsive")[0];
table.getElementsByClassName = ("child")[0].innerHTML = "tbody".style.attribute = "class", "table-hover";

//and this which I know is missing something but I have tried adding a function and that only makes it say that setAttribute is not a function. I also know that div is not the first div on the page and I'm not really sure what the 0 is for but every example that showed this way had that set to zero

var table = document.getElementsByTagName("div")[0];
table.setAttribute("class", "table-hover") 



console.log(table.tbody);



// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>
//this is what several google searches availed ~ again...I am sure there is a more presice method to use, or I don't know what the [6] means, here to me it means the 7th "tr" in that table because it feels similar to previous functions...It doesn't feel intuative, I feel like I'm memorizing. Maybe because we are trying to learn so much at once. 

//if you could give some strategies for a deeper understanding of what they do...I might need to make flashcards...

var success = document.getElementsByTagName("tr")[6];
success.classHandler(function(el) {
el.setAttribute("class","success")
});



// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

//similar issues, know it's not all the way there. saw this example on google and edited it to my closest guess, but again, logically I get what needs to happen. it really appears that I am just unsure of what the best method choice is, and in these last few, contingent on a secondary function.

var headerChange = document.getElementById(table-striped > th).innerHTML 
headerChange[1] = "ID"
headerChange[2] = "First Name"
headerChange[3] = "Last Name"
headerChange[4] = "Department"
headerChange[5] = "Client"

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

//I kept coming back to this one...even after I wrote all of my comments. it is now 10 so I hope that we could go over this one in class/after lunch. I truly do not know where to start because there seem to be so many options

//--you just pick any row? if so I would first look at the rows on the elements preview and try to name where it is ? I would make an  variable = document.method?("location of the row"); then I would think there would be a function(rule? command?) for the variable...perhaps there will be another method that will loop through and do the converting...surely they're seperate and need more than one variable to call it to make the array, to splice and also add commas. there are so many things being asked here...I'm not sure if the question is specific enough or if i'm over thinking it.


// 10. Make each word in the table capitalized.

//ha ha, well...I know that there needs to be more specification on what words we're targeting, but in the instructions it says the whole table so I'm sure that is not the hardest part. I think what I don't know is how to only call the table words to be capitalized and not the whole page, which method is right, how to loop it through/does that need to happen or should I be looking to set up a callback function ~ those could be the same thing...

var caps = document.querySelectorAll(".table-responsive")
caps.style.textTransform = "capitalize";