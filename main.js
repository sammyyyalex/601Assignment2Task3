var receiptForm = document.getElementById("receiptForm");

receiptForm.addEventListener("submit", e);
function e(){
    var bill=document.getElementById("billSubTotal").value;
    var tipPercent=document.getElementById("tip").value / 100;

    var total = parseInt(bill)+(bill*tipPercent);
    alert(tipPercent*bill);
    if (bill == "" || tipPercent == ""){
        alert("Error: Please enter valid amounts.");
    } else {
        alert("Your total is: " + total);
    }
}

