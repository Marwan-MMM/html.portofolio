//fel awl el doc msh btb2a loaded f byglna error 3shan btb2a b null f bnt2kd el awl en el dom content loaded
//mn stack overflow
window.addEventListener("DOMContentLoaded", (event) => {
    function handleSubmit(e) {
        e.preventDefault()//to prevent reloading the page we're using it on card number and cvv
        let cardnumber = document.getElementById("cardno");// linking mabeen el input field zat nfso w n check 3al value w nevalidate mabeen lines 10 w 16
        let ccv = document.getElementById("password");
        let cardNumberValidation = document.getElementById("cardNumberValidation")// ben linkaha 3shan nt7km fle validation
        let ccvValidation = document.getElementById("ccvValidation");;
        if (cardnumber.value.length > 16 || cardnumber.value.length < 16) {
            cardNumberValidation.innerHTML = "Please enter valid Card Number"

        } else{
            cardNumberValidation.innerHTML = ""
        }
        if (ccv.value.length > 3 || ccv.value.length < 3) {
            ccvValidation.innerHTML = "Please enter valid CVV"

        }else{ ccvValidation.innerHTML = ""}
    }
        const paymentForm = document.getElementById("paymentForm")
        //while clicking on confirm button, we will listen to the submit event and call the handle submit function
        paymentForm.addEventListener("submit", handleSubmit)
    });