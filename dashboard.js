// 1. Count the number of records in the "Current Quarter Details" table.

var numberofRec = document.querySelectorAll('tbody tr')
console.log(numberofRec.length);


// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var imageSwitch = document.querySelectorAll('img')
imageSwitch[0].src = "https://unsplash.it/600/600?image=1030"
imageSwitch[0].alt = "winter"
imageSwitch[1].src = "https://unsplash.it/600/600?image=1066"
imageSwitch[1].alt = "spring"
imageSwitch[2].src = "https://unsplash.it/600/600?image=973"
imageSwitch[2].alt = "summer"
imageSwitch[3].src = "https://unsplash.it/600/600?image=924"
imageSwitch[3].alt = "fall"


// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var dotDotDot = document.querySelectorAll('.text-muted')
dotDotDot.forEach(function(thing){
    thing.innerHTML = '$' + Math.round(Math.random() * 20000) + '.00';

})


// 4. Change the currently selected left side menu item from Overview to Reports.
var kitten = document.querySelectorAll('.nav-sidebar > li');
    kitten[0].classList.remove('active');
    kitten[1].classList.add('active');



// 5. Set the default search input value to "Q4 sales".

var inputValue = document.querySelectorAll('.navbar-right > input')
inputValue.forEach(function(thing){
thing.placeholder = "Q4 Sales"
});



// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.

var tableHover = document.querySelector('.table');
tableHover.classList.add('table-hover');



// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var rows = document.querySelectorAll('tr');

rows.forEach(function(row, i) {
    if (i >= 7 && i <=10) {
        row.classList.add('success');
    }
});


// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var id = document.querySelectorAll('th')[0];
id.innerText = 'ID';

var firstName = document.querySelectorAll('th')[1];
firstName.innerText = 'First Name';

var lasttName = document.querySelectorAll('th')[2];
lasttName.innerText = 'Last Name';

var department = document.querySelectorAll('th')[3];
department.innerText = 'Department';

var client = document.querySelectorAll('th')[4];
client.innerText = 'Client';

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]

var arrayObjects = document.querySelectorAll('tbody tr')
arrayObjects = Array.from(arrayObjects).map(function(arrayObject) {
   return {
       id: Number(arrayObject.children[0].innerHTML.replace(',', '')),
       firstName: arrayObject.children[1].innerHTML,
       lastName: arrayObject.children[2].innerHTML,
       department: arrayObject.children[3].innerHTML,
       client: arrayObject.children[4].innerHTML,
   }
   rowOfObjects.push(rowOfObject) 
})


// 10. Make each word in the table capitalized.

document.querySelector('.table').classList.add('text-capitalize'); 

