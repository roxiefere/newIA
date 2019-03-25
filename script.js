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
    var shirtT = parseInt(document.getElementById("ShirtType").value);
    var shirtC = parseInt(document.getElementById("ShirtColor").value);
    var shirtP = parseInt(document.getElementById("ShirtPattern").value);
    var pantT = parseInt(document.getElementById("PantType").value);
    var pantC = parseInt(document.getElementById("PantColor").value);
    var pantP = parseInt(document.getElementById("PantPattern").value);
    var otherT = parseInt(document.getElementById("OtherType").value);
    var otherC = parseInt(document.getElementById("OtherColor").value);
    var otherP = parseInt(document.getElementById("OtherPattern").value);
    if ((10101 <= (shirtT + shirtC + shirtP) <= 10211) || (10801 <= (shirtT + shirtC + shirtP) <= 10811)) {
        document.getElementById("result").innerHTML = "You should wear skinny jeans, shorts, overalls, ripped jeans, leggings, or sweat pants with this shirt.";
    }
    if (10301 <= (shirtT + shirtC + shirtP) == 10411) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10501 <= (shirtT + shirtC + shirtP) == 10711) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10801 <= (shirtT + shirtC + shirtP) == 1211) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
    if (10901 <= (shirtT + shirtC + shirtP) == 11111) {
        document.getElementById("result").innerHTML = "You should wear ";
    }
}