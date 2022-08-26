// clear form after click the Donate button
function clearDonation(){
    const inputs = document.querySelectorAll('#name, #email, #address, #fixedDonation, #cardNo, #cardHolder,#cvv');
  
    inputs.forEach(input => {
      input.value = '';
    });
  };
  
    let fname = document.getElementById("name");
    let address = document.getElementById("address");
    let email = document.getElementById("email");
    let cdNumber = document.getElementById("cardNo");
    let pinNumber = document.getElementById("cvv");
    let cdHolder = document.getElementById("cardHolder");
    let fxdDonatons = document.getElementById("fixedDonaton");
    let dntForm = document.getElementById("dntform");
  
  dntForm.addEventListener("submit",function(event){
    event.preventDefault();
    let donationAmount = fxdDonatons.option[fxdDonatons.selectedIndex].value;
    let firstnameValue = fname.value;
    alert(`Thank you for your Donation ${firstnameValue} You have donated ${donationAmount}`)
  
  }) 

  