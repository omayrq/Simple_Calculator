document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", buttonClick);
    }
  });
  
  function buttonClick() {
    var buttonValue = this.innerHTML;
    var result = document.getElementById("result");
    var resultValue = result.value;
    
    if (buttonValue === "=") {
      try {
        result.value = eval(resultValue);
      } catch (error) {
        result.value = "Error";
      }
    } else if (buttonValue === "AC") {
      result.value = "";
    } else if (buttonValue === "+/-") {
      result.value = eval(resultValue * -1);
    } else if (buttonValue === "%") {
      result.value = eval(resultValue / 100);
    } else {
      result.value += buttonValue;
    }
  }
  