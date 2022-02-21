function showAmount()
{
  var number = document.getElementById('myPoints').innerHTML;
  if (document.getElementById("user_input").value == "" && document.getElementById("chosen").value == "")
  {
    alert("Enter a charity and donation amount");
  }
  else if (document.getElementById("chosen").value == "" && isNaN(document.getElementById("user_input").value))
  {
    alert("Enter a charity and valid amount");
  }
  else if (isNaN(document.getElementById("user_input").value))
  {
    alert("Enter a valid amount!");
  }
  else if (document.getElementById("user_input").value == "")
  {
    alert("Enter a donation amount!");
  }
  else if (document.getElementById("chosen").value == "")
  {
    alert("Choose a charity!");
  }
  else if (parseFloat(number) - (parseFloat(document.getElementById("user_input").value)*1000) >= 0)
  {
    document.getElementById('display').innerHTML = "Thank you for donating $" + document.getElementById("user_input").value + " to " + document.getElementById("chosen").value;
    var points = parseFloat(number) - (parseFloat(document.getElementById("user_input").value)*1000);
    number = points.toString();
    document.getElementById("myPoints").innerHTML = number;
  }
  else
  {
    alert("Not enough points!");
  }
}

function myAchievements()
{
  var rows = [{
    name: "Name",
    description: "Description",
    date: "Date"
  }, {
      name: "First-timer",
      description: "Budgeting for the first time",
      date: "01/01/2021" 
  }, {
      name: "Pro Saver",
      description: "Save $1000.",
      date: "01/05/2021",
  }, {
      name: "Superstar",
      description: "Spend under budget for all categories.",
      date: "02/18/2021"
  }, {
      name: "Do-gooder",
      description: "Use your points to donate $10.",
      date: "02/20/2021"
  }, {
      name: "Do-gooder++",
      description: "Use your points to donate $1000.",
      date: "02/22/2021"
  }, {
      name: "Budget Master",
      description: "Reach 10,000 points",
      date: "02/23/2021"
  
  }];

  var html = "<table border='1|1' style='margin-left: auto; margin-right: auto;'>";
  for (var i = 0; i < rows.length; i++) {
    html+="<tr>";
    html+="<td>"+rows[i].name+"</td>";
    html+="<td>"+rows[i].description+"</td>";
    html+="<td>"+rows[i].date+"</td>";     
    html+="</tr>";
  }
  html+="</table>";
  document.getElementById("box").innerHTML = html;
}