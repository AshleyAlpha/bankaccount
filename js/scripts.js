// business logic

function Create(first, last, phone, id, date, amount) {
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.beneficialId = id;
  this.creationDate = date;
  this.initialAmount = amount;
}
Create.prototype.fullName = function() {
  return this.initialAmount;
  // return this.firstName + "  " + this.lastName + "  " + this.initialAmount;
};
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    $("#mamie").hide();
    $("#depo").show();
    $("#withd").show();
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhone = $("input#new-phone-number").val();
    var inputtedId = $("input#new-id").val();
    var inputtedDate = $("input#new-date").val();
    var inputtedAmount = $("input#new-amount").val();
    var newCreate = new Create(
      inputtedFirstName,
      inputtedLastName,
      inputtedPhone,
      inputtedId,
      inputtedDate,
      inputtedAmount
    );
    // console.log(newCreate);
    // $("ul#contacts").append(
    //   "<li><span class='create'>" + newCreate.fullName() + "</span></li>"
    // );
    $("#displ").text(newCreate.fullName());

    // $(".create")
    //   .last()
    //   .click(function() {
    //     $("#show-contact").hide();
    //     $("#show-contact h2").text(newCreate.firstName);
    //     $("#show-contact h2")
    //       .first()
    //       .click(function() {
    //         $("h3").toggle();
    //         // $(this).remove();
    //       });

    //     $(".first-name").text(newCreate.firstName);
    //     $(".last-name").text(newCreate.lastName);
    //     $(".phone").text(newCreate.phoneNumber);
    //     $(".id").text(newCreate.beneficialId);
    //     $(".date").text(newCreate.creationDate);
    //     $(".amount").text(newCreate.initialAmount);
    //   });
  });
});
user;
