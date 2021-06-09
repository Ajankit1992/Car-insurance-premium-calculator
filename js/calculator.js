$(document).ready(function() {
    $(".total").text("Total: ₹0 /month");
  });

// $('input,select').on('change', refreshTotal);

function refreshTotal() {
    var gender = +$('input[name="gender"]:checked', '#gender').val();
    var age = +$('input[name="age"]:checked', '#age').val();
    var car = +$('#car').val();
    var year = +$('#year').val();
    
    if (isNaN(gender)) gender = 0;
    if (isNaN(age)) age = 0;
    if (isNaN(car)) car = 0;
    if (isNaN(year)) year = 0;
    
    var total = gender + age + car + year;
    $(".total").text("Total: $" + total + " /month");
}
