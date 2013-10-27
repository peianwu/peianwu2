(function() {
  // define user settings object
  // add difficulty setting in the future

  // listen to click event to begin
  $(".msgbox").on("click", ".button", function() {
    $(".msgbox").addClass("hide");
    $(".problembox").removeClass("hide");

    // initialize exercise
    probGenerator();
  });

  var probConfig = {
      setting: {
        choices: 5,
        count: 0, // count of problems generated
        correct: 0, // count of correct answers
        goal: 10 // continue generate problems till goal reached
      },
      range: {
        min: 1,
        max: 99,
      },
      operator: {
        add: [true, '+'],
        sub: [false, '-'],
        mult: [false, '*'],
        div: [false, '/']
      },
      answer: ''
    };

  function probGenerator() {

    // basic conditions for each problem
    var firstNum = randNum(probConfig.range.min, probConfig.range.max);
    var secondNum = randNum(probConfig.range.min, probConfig.range.max);

    var answerChoices = createChoices.call(probConfig, randNum, firstNum, secondNum);
    probConfig.answer = firstNum + secondNum;
    
    probConfig.setting.count += 1;
    $(".questionblock").find(".label").text("Question " + probConfig.setting.count + ": ");
    $("#question").text(firstNum + ' + ' + secondNum);

    // clear existing answers
    if ($("#choices div")) {
      $("#choices div").remove();
    }
    // generate answer choices
    while (answerChoices.length > 0) {
      // randomize answer positions
      var option = answerChoices.splice(Math.floor(Math.random() * answerChoices.length - 1) + 1, 1);
      $("#choices").append('<div><input type="radio" name="answer" value="' + option + '"> ' + option + '</div>');
    }
  }

  // listen to answer submit
  $(".submitblock").on("click", ".button", function() {
    if (!$("input[name=answer]:checked").length) {
      console.log("did not select an answer");
    }
    else {
      // answer selected
      var userAnswer = $("input[name=answer]:checked").val();
      // if correct
      if (userAnswer == probConfig.answer) {
        probConfig.setting.correct += 1;
        probGenerator();
      }
      // if incorrect
      else {
        probGenerator();
      }
    }
    
    // user reaches goal
    if (probConfig.setting.count > probConfig.setting.goal) {
      $(".problembox").addClass("hide");
      $(".msgbox .button").remove();
      $(".msgbox").text("Well Done! You got " + probConfig.setting.correct + " out of 10.").removeClass("hide").addClass("done");
    }
  });

// callback should be randNum
function createChoices(callback, selectedNum1, selectedNum2) {
  var choiceArray = [];
  // create fake answers
  for (var i = 0, fakes = probConfig.setting.choices - 1; i < fakes; i++) {
    choiceArray.push(callback(this.range.min, this.range.max));
  }
  // create answer
  choiceArray.push(selectedNum1 + selectedNum2);

  return choiceArray;
}

function randNum(min,max) {
  return Math.floor(Math.random() * (max-min) + min);
}

})();