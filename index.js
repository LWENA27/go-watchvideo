  /*//this is my first javascript code
  //console.log("hello world");
  

  

  //can not be a reserved keyworld
  //should be meaningfull
  //can not start with a number
  //can not contain a space or hyphen (-)
  //are case-sensitive
  */
//PRIMITIVES/VALUE TYPES
  let firstname = "lwena";      //String
  const pei = 9;               //number
  let tall = true;            //boolean
  let lastname = undefined;  //undefined
  let money = null;         //null

  console.log(pei)
  console.log(tall)

  //REFERENCE VALUES
  let person = {
    name: "lwena",
    age : 25
  };
  console.log(person.name);
  //to change name 
      //1dot notation
      person.name= "adam"
      console.log(person.name);
      //2bracket notation
      person["name"] = "samson"

  console.log(person.name);

  //ARRAYS contain properties
  let selectedColors = ["black","white"];
  selectedColors[2] = 27
  console.log(selectedColors);


  //FUCTION
                 //1performing a task
  function greet(firstname ,lastname){
    console.log("hello " + firstname + " " + lastname);
  }
  greet("lwena","adam");
                //2calculating value

   function square(number)  {
    return number*number
}         
//let number1 = square(2);
console.log(square(2));