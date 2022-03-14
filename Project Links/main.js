//thsi file created by Usama afzal on 10/02/2022

// var welcome_message = "this is a welcome message store inside a variable";
// var myage = 20 ;
// var exactage = 20.2;

// alert();

// var myname;

// console.log("my age is " + myname);
// myage = myage + 1;
// myage = myage++;
// console.log("my age next year will be " + myage)


//
// var ispremiumuser =false;
//
// if(ispremiumuser==true){
//   console.log("thanks for being a loyal customer")
// }else {
//   console.log("you should subscribe to our channel")
// }
//
//
// var myage=1;
//
// if(myage<21){
//   console.log("you r a baby")
// }else if(myage<5){
//   console.log("you are a toddler")
// }else if(myage<10){
//   console.log("you are a big kid")
// }else if(myage<=20) {
//   console.log("you are a teenager")
// }else{
//   console.log("you are old")
// }



//
// for(var k=0; k<10; k++){
//   console.log("current k valu",k);
// }




//
// function printname(name,age){
//   console.log("Hello,", name ,"im", age);
// }
// printname("usama", "20");
// printname("Junaid", "22");
// printname("Ali", "26");



// var btn = document.getElementById("go-button");
//
// function buttonClicked(){
//   console.log("Button clicked");
//   // btn.removeEventListener("click", buttonClicked);
//   // document.getElementById("text").innerHTML = "don't do it";
//   // console.log(document.getElementById("text").innerHTML);
//
//   var customText = document.getElementsByClassName("my-inputt");
//   var textArea = document.getElementsByClassName("my-textarea");
//
//   var results = document.getElementById("text");
//
//   results.innerHTML = "Hello, " + customText[0].value + "<br />";
//   results.innerHTML += "Message: " + textArea[0].value;
//
//
//
// }
//
// btn.addEventListener("click", buttonClicked);

















// var hobbies = ["gaming","movies","youtube","programming","traveling"];
//
// console.log("i no longer enjoy",hobbies.pop());
//
// hobbies.push("archery");
// console.log(hobbies.shift());
// hobbies.unshift("Blacksmithing");

// hobbies.forEach(function(i,ie){
//
//   console.log("i like", i,ie);
//
// });


// if(hobbies.indexOf("movies")>-1){
//   console.log("i like movies");
// }
// if(hobbies.indexOf("dancing") === -1){
//   console.log("is not present");
// }






//
// function saySomething(phrase){
//     console.log("hello, " + phrase);
//
// }

// function getPhrase(params){
//   var l= 0;
//
//   if(params.phrase){
//   var l = params.phrase.length;
// }
//
//   if(typeof params.another !== "undefined"){
//     l += params.another.length ;
//   }
// //
// //   function printBoth(){
// //   return phrase + " " + another;
// //
// // }
//
//   return l;
//
// }
//
//   var p1 = "this is slightly longer phrase than before.";
//   var p2 = "this is shorter sentence.";
//
//   var computed = getPhrase({another:p2});
//
//   console.log(computed);










// var numbers = [12, 56, 19, 989, 666, 423, 1, 7, 9, 6, 3,];
// var words = ["apple", "pizza", "mango", "banana", "cola",];


// function missingno(numbers){
//   var missing = -1;
//
//   for(i = 0; i <= numbers.length -1; i++){
//     if(numbers.indexOf(i) === -1){
//       missing = i;
//     }
//
//   }
//
//   return missing;
// }
//
//
// var numbers = [3, 8, 7, 9, 6, 1, 12, 18, 4, 5, 14, 0, 2, 19, 16, 11, 10, 15, 13, 17, 20,]
// console.log(missingno(numbers));













class Animal {

  constructor(name, height, weight){
    console.log("Created Animal", name);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  nameLength(){
    return this.name.length;
  }
}

// Animal.planet = "Earth";
//
// var dog = new Animal("sheru", "30inc", "30kg");
// var fish = new Animal("bixy", "3inc", "0.5kg");
//
//   console.log(fish.constructor.planet);



class Dog extends Animal {
  constructor(name, height, weight, barkVolume, leashColor, speed){
    super(name, height, weight);

    this.barkVolume = barkVolume;
    this.leashColor = leashColor;
    this.speed      = speed;
  }

    bark(){
      if(this.barkVolume > 50){
        console.log(this.name, "barks loudly (volume:", this.barkVolume, ")");
      }else{
        console.log(this.name, "barks quietly (volume:", this.barkVolume, ")");
      }
    }
}


class Fish extends Animal {
  constructor(name, height, weight, swimSpeed){
    super(name, height, weight);
    this.swimSpeed = swimSpeed;

  }

  swim(chaserSpeed){
    if(this.swimSpeed > 50){
      console.log(this.name, "swims swiftly (speed:", this.swimSpeed, ")");
    }else{
      console.log(this.name, "swims slowly (speed:", this.swimSpeed, ")");
    }
    if(this.swimSpeed > chaserSpeed){
      console.log(this.name, " was caught")
    }else{
      console.log(this.name, " got away")
    }
  }

}

var king = new Dog("king", 45, 90, 70, "green", 60 );
var goldie = new Fish("goldie", 2, 3, 73, );

king.bark();
goldie.swim(king.speed);
