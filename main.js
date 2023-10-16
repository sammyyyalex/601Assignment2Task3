var receiptForm = document.getElementById("receiptForm");

receiptForm.addEventListener("submit", getTotal);
function getTotal(){
    var bill=document.getElementById("billSubTotal").value;
    var tipPercent=document.getElementById("tip").value / 100;

    var total = Number(bill)+(bill*tipPercent);
    if (bill == "" || tipPercent == ""){
        alert("Error: Please enter valid amounts.");
    } else {
        alert("Your total is: " + total.toFixed(2));
    }
}

