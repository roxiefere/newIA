function addShirt(){
    var shirts = document.getElementById("shirts").cloneNode(true);
    document.getElementById("newShirts").appendChild(shirts);
}
function addPant(){
    var pants = document.getElementById("pants").cloneNode(true);
    document.getElementById("newPants").appendChild(pants);
}
function addOther(){
    var others = document.getElementById("others").cloneNode(true);
    document.getElementById("newOthers").appendChild(others);
}
function makeOutfits() {
    var shirtT = document.getElementById("ShirtType").value;
    var shirtC = document.getElementById("ShirtColor").value;
    var shirtP = document.getElementById("ShirtPattern").value;
    var pantT = document.getElementById("PantType").value;
    var pantC = document.getElementById("PantColor").value;
    var pantP = document.getElementById("PantPattern").value;
    var otherT = document.getElementById("OtherType").value;
    var otherC = document.getElementById("OtherColor").value;
    var otherP = document.getElementById("OtherPattern").value;
}
function typeMatch() {
    var shirtT = document.getElementById("ShirtType").value;
    var pantT = document.getElementById("PantType").value;
    var otherT = document.getElementById("OtherType").value;
    if(shirtT){

    }
}
function colorMatch() {
    var shirtC = document.getElementById("ShirtColor").value;
    var pantC = document.getElementById("PantColor").value;
    var otherC = document.getElementById("OtherColor").value;
}
function patternMatch() {
    var shirtP = document.getElementById("ShirtPattern").value;
    var pantP = document.getElementById("PantPattern").value;
    var otherP = document.getElementById("OtherPattern").value;
}
function submit() {

}