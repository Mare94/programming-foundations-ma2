// Question 1

var pets = [
    {
        type: "cat",
        age: 5.5,
    },
    {
        type: "dog",
        age: 3.8,
    },
    {
        type: "parrot",
        age: 4.0,
    },

];


for(i = 0; i < pets.length; i++){
    var petAge = pets[i].age;
    var petType = pets[i].type;
    
    //var petAnimal = pets[i].age + "" + pets[i].type;

    if(petAge>= 4){
        console.log(petAge);
        console.log(petType)
    }
};

//or

/*for(i = 0; i < pets.length; i++){
    var pet = pets[i];

    console.log(pet.type)
    console.log(pet.age)
} if(pet.age >=4){
    console.log(pet.type)
    console.log(pet.age)
}*/

// Question 2
function logWord() {
    var selfMade = true;
    //var notSelfMade = false;
    if (selfMade === true){
        console.log("true");
    } else{
        console.log("Please pass a boolean value in");
    }
    
}

logWord();

// or


function first() {
    if (first.caller === null){
        return "Please pass a boolean";
    } else{
        return 'true ${first.caller}';
    }
}


first(true);

// Question 3, change color of h2 element to blue, and change it to read "Updated subheading"

var heading = document.querySelector("h2");
var button = document.querySelector("button");

button.onclick = changeHeading;


function changeHeading(){
    heading.innerHTML = "Updated subheading";
    heading.style.color = "blue";
}
