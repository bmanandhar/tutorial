var myString = "come";
var vowels = ["a","e","i","o","u"];
console.log("Javascript is cool");

myArray = myString.split("");
console.log(myArray);

for (var i = 0; i < myArray.length; i++){
  for (j = 0; j < vowels.length; j++){
    if (myArray[i] == vowels[j]){
      console.log(myArray[i]);
    }
  }
} 