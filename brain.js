function bmInit() {
  /* displays / initial values */
  /* all */
  var displays = $(".height .display, .weight .display");
  
  /* height */
  var heightDisplay = $(".height .display");
  var heightValue = parseFloat(heightDisplay.val());
  var heightMoreBtn = $("#moreH");
  var heightLessBtn = $("#lessH");
  
  /* weight */
  var weightDisplay = $(".weight .display");
  var weightValue = parseFloat(weightDisplay.val());
  var weightMoreBtn = $("#moreW");
  var weightLessBtn = $("#lessW");
  
  /* results */
  var bmiDisplay = $(".bmi .display");
  var bmiDisplayS = $(".bmi-small");
  var resultDisplay = $(".bmi .result.subtitle");
  var fontDisplay = $(".font-weight");
  
  /* operations */
  /* body mass index calculator function */
  function bmi(kgs, cms) {
    var ms = cms/100;
    var bmiResult = kgs/(ms * ms);
    var current = bmiDisplay.text();
    
    // Animate the element's value
    $({someValue: current}).animate({someValue: bmiResult}, {
      duration: 300,
      easing:'easeOutQuint',
      step: function() { // called on every step
        // Update the element's text
        bmiDisplay.text(parseFloat(this.someValue).toFixed(1));
        bmiDisplayS.text(parseFloat(this.someValue).toFixed(1));
      }
    });
    
    if (bmiResult <= 18.5) {
      resultDisplay.text("Underweight");
      bmiDisplay.css({
        fontWeight: 100,
        color: "red"
      });
      fontDisplay.text("Thin");
    }
    
    if (bmiResult > 18.6 && bmiResult <= 24.9) {
      resultDisplay.text("Normal weight");
      bmiDisplay.css({
        fontWeight: 400,
        color: "#333333"
      });
      fontDisplay.text("Regular");
    }
    
    if (bmiResult > 24.9 && bmiResult <= 29.9) {
      resultDisplay.text("Overweight");
      bmiDisplay.css({
        fontWeight: 700,
        color: "red"
      });
      fontDisplay.text("Bold");
    }
    
    if (bmiResult > 29.9) {
      resultDisplay.text("Obesity");
      bmiDisplay.css({
        fontWeight: 900,
        color: "red"
      });
      fontDisplay.text("Heavy");
    }
  }
  
  /* runs the bmi function once when document is ready */
  bmi(weightValue, heightValue);
  
  /* user interaction */
  /* run the bmi function when the value in either of the displays changes */
  displays.change(function() {
    heightValue = heightDisplay.val();
    weightValue = weightDisplay.val();
    bmi(weightValue, heightValue);
  });
  
  /* select the whole value when the user clicks on either of the displays */
  displays.click(function() {
    $(this).select();
  });
  
  /* act on values and run the bmi function on each increment or decrement */
  heightMoreBtn.click(function() {
    heightValue++;
    heightDisplay.val(heightValue);
    bmi(weightValue, heightValue);
  });
  
  heightLessBtn.click(function() {
    if (heightValue >= 1) {
	    heightValue--;
	    heightDisplay.val(heightValue);
	    bmi(weightValue, heightValue);
    }
  });
  
  weightMoreBtn.click(function() {
    weightValue++;
    weightDisplay.val(weightValue);
    bmi(weightValue, heightValue);
  });
  
  weightLessBtn.click(function() {
    if (weightValue >= 1) {
	    weightValue--;
	    weightDisplay.val(weightValue);
	    bmi(weightValue, heightValue);
    }
  });
}