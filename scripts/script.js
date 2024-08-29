$(function () {
  //what radio value did they select?

  
  let userJSON = {
    email: "username@somewhere.com",
  };

  $("#loadData").click(() => {
    console.log("in button click event");

    $("#email").val(userJSON.email);
  });

  $("#submitForm").click(function () {
    //creating variable
    var userEmail = $("#userEmail").val();

    //test logging
    console.log("user email = ", userEmail);
    console.log("you clicked the button");

    //calling string manipulation functions.
    $("#stringManip1").html(displayEmail(userEmail));
    

    //Test log
    console.log(nameLength(userName));
    console.log(upperCase(userName));
  });

  $("input[type=radio]").on("change", function () {
    // var $this = $(this);
    // if ($this.is(":checked")) alert("a");

    // call a function... to do all this stuff:

    let radioChoice = $("input[type=radio]:checked").val(); // A or B
    let newWordList = getWords(radioChoice);
    console.log(newWordList);

    let optionList = "";

    for (i = 0; i < newWordList.length; i++) {
      optionList += `<option value=" ${newWordList[i]} ">${newWordList[i]} </option>`;
    }
    console.log(optionList);

    $("#letterWordsSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    console.log("clicked the button");

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    // display data from that input

    console.log(dataStuff);

    // do that suff 2x
  });
});

function getWords(letter) {
  console.log("in f/n getWords, here the paramter: ", letter);

  let aWordArray = ["Red", "Purple", "Yellow"];
  let bWordArray = ["Black", "Brown", "Orange"];
  let cWordArray = ["Green", "Pink", "Gray"];


  switch (letter) {
    case "A":
      return aWordArray;
    case "B":
      return bWordArray;
    case "C":
      return cWordArray;
    default:
      return ["please select a letter"];
  }  
}

const displayEmail = (x) => {
  let result = "Email: " + userEmail;
  return result;
};