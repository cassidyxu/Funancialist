var points = 0;
// // increment only when under budget

document.getElementById('getSumBtn').addEventListener('click', ()=>{
  var transportation = Number(document.getElementById('transportation-input').value);
  var food = Number(document.getElementById('food-input').value);
  var utilities = Number(document.getElementById('utilities-input').value);
  var insurance = Number(document.getElementById('insurance-input').value);
  var personalspending = Number(document.getElementById('personalspending-input').value);
  document.getElementById('sum').innerHTML = `\$${(transportation+food+utilities+insurance+personalspending).toFixed(2)}`
})



document.getElementById('getSumBtn2').addEventListener('click', ()=>{
  var transportation2 = Number(document.getElementById('transportation2-input').value);
  var food2 = Number(document.getElementById('food2-input').value);
  var utilities2 = Number(document.getElementById('utilities2-input').value);
  var insurance2 = Number(document.getElementById('insurance2-input').value);
  var personalspending2 = Number(document.getElementById('personalspending2-input').value);
  document.getElementById('sum2').innerHTML = `\$${(transportation2+food2+utilities2+insurance2+personalspending2).toFixed(2)}`
})


// document.getElementById('getReport').addEventListener('click', ()=>{
//   chartfunction();
//   document.getElementById('transportation3').innerHTML = `\$${(transportation-transportation2).toFixed(2)}`
//   document.getElementById('food3').innerHTML = `\$${(food-food2).toFixed(2)}`
//   document.getElementById('utilities3').innerHTML = `\$${(utilities-utilities2).toFixed(2)}`
//   document.getElementById('insurance3').innerHTML = `\$${(insurance-insurance2).toFixed(2)}`
//   document.getElementById('personalspending3').innerHTML = `\$${(personalspending-personalspending2).toFixed(2)}`
  
// })

// generates pie chart
function chartFunction(){
  var transportation4 = Number(document.getElementById('transportation2-input').value);
  var food4 = Number(document.getElementById('food2-input').value);
  var utilities4 = Number(document.getElementById('utilities2-input').value);
  var insurance4 = Number(document.getElementById('insurance2-input').value);
  var personalspending4 = Number(document.getElementById('personalspending2-input').value);
  
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Your Spending Distribution"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: ${y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - ${y}",
      dataPoints: [
        { y: food4, label: "Food" },
        { y: transportation4, label: "Transportation" },
        { y: utilities4, label: "Utilities" },
        { y: insurance4, label: "Insurance" },
        { y: personalspending4, label: "Personal Spending" },
      ]
    }]
  });
  chart.render();
}

// button
var btn = document.getElementById("myBtn");
     
    // Assigning event listeners to the button
    btn.addEventListener("click", getReport);
    btn.addEventListener("click", chartFunction);



// getReport

function getReport(){
  var transportation = Number(document.getElementById('transportation-input').value);
  var food = Number(document.getElementById('food-input').value);
  var utilities = Number(document.getElementById('utilities-input').value);
  var insurance = Number(document.getElementById('insurance-input').value);
  var personalspending = Number(document.getElementById('personalspending-input').value);

  var transportation2 = Number(document.getElementById('transportation2-input').value);
  var food2 = Number(document.getElementById('food2-input').value);
  var utilities2 = Number(document.getElementById('utilities2-input').value);
  var insurance2 = Number(document.getElementById('insurance2-input').value);
  var personalspending2 = Number(document.getElementById('personalspending2-input').value);

  if(transportation > transportation2){
    document.getElementById('transportation').innerHTML = `Good job! You went under budget for transportation by \$${(transportation-transportation2).toFixed(2)}`
    points = points + (10 * (transportation-transportation2))
    // document.getElementById('transpoints').innerHTML = `Points: ${(points)}`
  }
  if(transportation < transportation2) {
    document.getElementById('transportation').innerHTML = `Try to save! You went over your budget for transportation by  \$${(transportation2-transportation).toFixed(2)}`
    points = points - (10 * (transportation2-transportation))
    // document.getElementById('transpoints').innerHTML = `Points: ${(points)}`
  }
  if(food > food2){
    document.getElementById('food').innerHTML = `Good job! You went under budget for food by \$${(food-food2).toFixed(2)}`
    points = points + (10 * (food-food2))
    // document.getElementById('foodpoints').innerHTML = `Points: ${(points)}`
  }
  if(food < food2){
    document.getElementById('food').innerHTML = `Try to save! You went over your budget for food by  \$${(food2-food).toFixed(2)}`
    points = points - (10 * (food2-food))
    // document.getElementById('foodpoints').innerHTML = `Points: ${(points)}`
  }
  if(utilities > utilities2){
    document.getElementById('utilities').innerHTML = `Good job! You went under budget for utilities by \$${(utilities-utilities2).toFixed(2)}`
    points = points + (10 * (utilities-utilities2))
    // document.getElementById('utilpoints').innerHTML = `Points: ${(points)}`
  }
  if(utilities < utilities2){
    document.getElementById('utilities').innerHTML = `Try to save! You went over your budget for utilities by  \$${(utilities2-utilities).toFixed(2)}`
    points = points + (10 * (utilities-utilities2))
    // document.getElementById('utilpoints').innerHTML = `Points: ${(points)}`
  }
  if(insurance > insurance2){
    document.getElementById('insurance').innerHTML = `Good job! You went under budget for insurance by \$${(insurance-insurance2).toFixed(2)}`
    points = points + (10 * (insurance-insurance2))
    // document.getElementById('insurpoints').innerHTML = `Points: ${(points)}`
  }
  if(insurance < insurance2){
    document.getElementById('insurance').innerHTML = `Try to save! You went over your budget for insurance by  \$${(insurance2-insurance).toFixed(2)}`
    points = points - (10 * (insurance2-insurance))
    // document.getElementById('insurpoints').innerHTML = `Points: ${(points)}`
  }
  if(personalspending > personalspending2){
    document.getElementById('personalspending').innerHTML = `Good job! You went under budget for personal spending by \$${(personalspending-personalspending2).toFixed(2)}`
    points = points + (10 * (personalspending-personalspending2))
    // document.getElementById('pspoints').innerHTML = `Points: ${(points)}`
  }
  if(personalspending < personalspending2){
    document.getElementById('personalspending').innerHTML = `Try to save! You went over your budget for personal  spending by  \$${(personalspending2-personalspending).toFixed(2)}`
    points = points - (10 * (personalspending2-personalspending))
    // document.getElementById('pspoints').innerHTML = `Points: ${(points)}`
  }

  if(points < 0){
    points = 0;
  }

  document.getElementById('points').innerHTML = `Points: ${(points)}`
}

function validateForm() {
  var x = document.forms["enterPoints"]["inp"].value;
  if (isNaN(x)) {
    alert("Enter a valid number!");
    return false;
  }
}
