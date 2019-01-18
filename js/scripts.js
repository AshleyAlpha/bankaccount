// business logic
function Contact(first, last, amount) {
  this.firstName = first;
  this.lastName = last;
  this.amountNumber = amount;
}
Contact.prototype.fullName = function() {
  return this.amountNumber;
};

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedamountNumber = $("input#new-amount-number").val();

    var newContact = new Contact(
      inputtedFirstName,
      inputtedLastName,
      inputtedamountNumber
    );

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.fullName() + "</span></li>"
    );

    $(".contact")
      .last()
      .click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $("#show-contact h2")
          .first()
          .click(function() {
            $("h3").toggle();
            // $(this).remove();
          });

        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $(".amount").text(newContact.amountNumber);
      });
  });
});
user;
// var account = function (name, balance){

//   account.name = name;
//   account.balance = balance;

//   account.deposit = function (depositAmount) {
//     newBalance = account.balance - depositAmount;
//     console.log("Your balance is now " + newBalance);
//     if (newBalance <= 0) {
//       console.log("You have insufficient funds!!!");
//     }
//   };

//   account.withdraw = function (withdrawAmount){
//     newBalance = account.balance - withdrawAmount;
//     console.log("Your balance is now " + newBalance);
//     if (newBalance <= 0) {
//       console.log("You have insufficient funds!!!");
//     }

//   };

//   account.transfer = function (transferAmount){
// //got stuck here
//   }

//   console.log("Name: " + name + "; Balance: " + balance);
// }

// var AustinAccount = new account ("Austin", 500);
// var KateAccount = new account ("Kate", 10000);
// var GingerAccount = new account ("Ginger", 70000000);
// var OreoAccount = new account ("Oreo", 900000000);
