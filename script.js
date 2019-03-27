//
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
    //clear div
    document.getElementById("result").innerHTML = "";
    //similar shirt types
    if (shirtT == 1 || shirtT == 5 || shirtT == 6) {
        shirtT = 1000;
    }
    if (shirtT == 3 || shirtT == 9 || shirtT == 10) {
        shirtT = 2000;
    }
    if (shirtT == 11 || shirtT == 12) {
        shirtT = 3000;
    }
    //similar pant types
    if (pantT == 1 || pantT == 7) {
        pantT = 1000;
    }
    if (pantT == 4 || pantT == 5) {
        pantT = 2000;
    }
    if (pantT == 8 || pantT == 10) {
        pantT = 3000;
    }
    //similar other types
    if (otherT == 5 || otherT == 6) {
        otherT = 5000;
    }
    if (otherT == 7 || otherT == 8) {
        otherT = 6000;
    }
    //colors that go together
    if (shirtC == 1 || shirtC == 2 || shirtC == 8) {
        shirtC = 100;
    }
    if (pantC == 1 || pantC == 2 || pantC == 8) {
        pantC = 100;
    }
    if (otherC == 1 || otherC == 2 || otherC == 8) {
        otherC = 100;
    }
    if (shirtC == 3 || shirtC == 4) {
        shirtC = 200;
    }
    if (pantC == 3 || pantC == 4) {
        pantC == 200;
    }
    if (otherC == 3 || otherC == 4) {
        otherC = 200;
    }
    if (shirtC == 5 || shirtC == 6 || shirtC == 7) {
        shirtC = 300;
    }
    if (pantC == 5 || pantC == 6 || pantC == 7) {
        pantC = 300;
    }
    if (otherC == 5 || otherC == 6 || otherC == 7) {
        otherC = 300;
    }
    if (shirtC == 9 || shirtC == 10 || shirtC == 11 || shirtC == 12) {
        shirtC = 400;
    }
    if (pantC == 9 || pantC == 10 || pantC == 11 || pantC == 12) {
        pantC = 400;
    }
    if (otherC == 9 || otherC == 10 || otherC == 11 || otherC == 12) {
        otherC = 400;
    }
    //patterns that go together
    if (shirtP == 1 || shirtP == 6) {
        shirtP = 10;
    }
    if (pantP == 1 || pantP == 6) {
        pantP = 10;
    }
    if (otherP == 1 || otherP == 6) {
        otherP = 10;
    }
    if (shirtP == 2 || shirtP == 3 || shirtP == 4 || shirtP == 5 || shirtP == 10) {
        shirtP = 20;
    }
    if (pantP == 2 || pantP == 3 || pantP == 4 || pantP == 5 || pantP == 10) {
        pantP = 20;
    }
    if (otherP == 2 || otherP == 3 || otherP == 4 || otherP == 5 || otherP == 10) {
        otherP = 20;
    }
    if (shirtP == 8 || shirtP == 9 || shirtP == 11) {
        shirtP = 30;
    }
    if (pantP == 8 || pantP == 9 || pantP == 11) {
        pantP = 30;
    }
    if (otherP == 8 || otherP == 9 || otherP == 11) {
        otherP = 30;
    }
    //makes sure all fields are filled out
    if (0 == (shirtT + shirtC + shirtP) && 0 == (pantT + pantC + pantP) && 0 == (otherT + otherC + otherP)) {
        alert("Enter clothing type with color and pattern");
    }
    if ((0 < (shirtT + shirtC + shirtP) && (shirtT == 0 || shirtC == 0 || shirtP == 0)) || (0 < (pantT + pantC + pantP) && (pantT == 0 || pantC == 0 || pantP == 0)) || (0 < (otherT + otherC + otherP) && (otherT == 0 || otherC == 0 || otherP == 0))) {
        alert("Make sure all fields for this item are filled out");
        throw new Error('Error');
    }
    //shirt type outputs
    if (shirtT == 1000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear skinny jeans, jean shorts, or ripped jeans with this shirt." + "<br>" + "Since it's a longer shirt, try tucking it into your pants for a complete look." + "<br>";
    }
    if (shirtT == 2000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You can wear any type of listed pants with this shirt." + "<br>" + "Additionally, a tight shirts pair best with looser pants or a skirt, while a relaxed, looser shirts go well with high-waisted jeans or shorts for a casual look." + "<br>";
    }
    if (shirtT == 3000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear this shirt with some professional pants or skirt, for example a pencil skirt or some straight-legged pants." + "<br>" + "Tucking this shirt in completes this look." + "<br>";
    }
    if (shirtT == 4000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear denim with this shirt." + "<br>" + "Polo shirts are easy to throw on with your best denim for an everyday, casual look." + "<br>" + "Darker jeans are best reserved for smarter occasions – think indigo or black." + "<br>" + "If you’re just hanging out at the weekend looser fit, lighter coloured denim is the best choice." + "<br>" + "Polo shorts often pair well with tan khakis." + "<br>" + "A pleaded skirt can also twin with a polo for a more preppy look." + "<br>";
    }
    if (shirtT == 5000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear jeans or sweats with a hoody." + "<br>" + "Since it's loose fitting and quite casual, the pants should be the same." + "<br>";
    }
    if (shirtT == 6000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should stick to jeans for a casual yet fashionable look with this shirt." + "<br>" + "Black jeans make a particularly stylish choice with an edgy grunge vibe, but any colour can work." + "<br>";
    }
    if (shirtT == 7000) {
        document.getElementById("result").innerHTML += "<h3>Shirt Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear anything with this shirt." + "<br>" + "It's casual and dependable, so it goes with almost any type of pants." + "<br>";
    }
    //color outputs
    document.getElementById("result").innerHTML += "<h3>Color:</h3>";
    if (shirtC == 100) {
        document.getElementById("result").innerHTML += "This color pairs well with white, black, yellow, silver, green, and gold." + "<br>";
    }
    if (shirtC == 200) {
        document.getElementById("result").innerHTML += "This color pairs well with neutrals: white, gray and black. " + "<br>";
    }
    if (shirtC == 300) {
        document.getElementById("result").innerHTML += "This color pairs well with similar ocean tones, for example, greens and browns." + "<br>" + "It also goes well with neutrals: white, gray and black." + "<br>";
    }
    if (shirtC == 400) {
        document.getElementById("result").innerHTML += "This color pairs well with most other colors." + "<br>" + "Pay attention to their undertones for a more perfect color match" + "<br>";
    }
    //pattern outputs
    if (shirtP == 10) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern goes hand-in-hand with the color of this item. Refer to the color match." + "<br>";
    }
    if (shirtP == 20) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern looks best with either a plain tone or the same pattern accompanying it." + "<br>" + "Since it already draws a lot of attention, you either want to match it with itself or chose a solid color." + "<br>";
    }
    if (shirtP == 30) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern is a geometric shape." + "<br>" + "You can make a mix of print and balance it out with smaller print on top and a larger one on the bottom." + "<br>" + "Don't try to mix other patterns and match it with itself or chose a solid color." + "<br>";
    }
    if (shirtP == 40) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern Wear one plaid piece of clothing at a time." + "<br>" + "Plaid comes in many different colors and styles." + "<br>" + "However, its crisscrossing lines mean it's almost always fairly attention-grabbing." + "<br>" + "This means pairing multiple pieces of plaid clothing with each other can be overwhelming or busy to look at." + "<br>" + "The expection to this rule is if the accessory piece is plaid." + "<br>";
    }
    //pant type outputs
    if (pantT == 1000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (pantT == 2000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (pantT == 3000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (pantT == 4000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (pantT == 5000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (pantT == 6000) {
        document.getElementById("result").innerHTML += "<h3>Pant Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    //color outputs
    document.getElementById("result").innerHTML += "<h3>Color:</h3>";
    if (pantC == 100) {
        document.getElementById("result").innerHTML += "This color pairs well with white, black, yellow, silver, green, and gold." + "<br>";
    }
    if (pantC == 200) {
        document.getElementById("result").innerHTML += "This color pairs well with neutrals: white, gray and black. " + "<br>";
    }
    if (pantC == 300) {
        document.getElementById("result").innerHTML += "This color pairs well with similar ocean tones, for example, greens and browns." + "<br>" + "It also goes well with neutrals: white, gray and black." + "<br>";
    }
    if (pantC == 400) {
        document.getElementById("result").innerHTML += "This color pairs well with most other colors." + "<br>" + "Pay attention to their undertones for a more perfect color match" + "<br>";
    }
    //pattern outputs
    if (pantP == 10) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern goes hand-in-hand with the color of this item. Refer to the color match." + "<br>";
    }
    if (pantP == 20) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern looks best with either a plain tone or the same pattern accompanying it." + "<br>" + "Since it already draws a lot of attention, you either want to match it with itself or chose a solid color." + "<br>";
    }
    if (pantP == 30) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern is a geometric shape." + "<br>" + "You can make a mix of print and balance it out with smaller print on top and a larger one on the bottom." + "<br>" + "Don't try to mix other patterns and match it with itself or chose a solid color." + "<br>";
    }
    if (pantP == 40) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern Wear one plaid piece of clothing at a time." + "<br>" + "Plaid comes in many different colors and styles." + "<br>" + "However, its crisscrossing lines mean it's almost always fairly attention-grabbing." + "<br>" + "This means pairing multiple pieces of plaid clothing with each other can be overwhelming or busy to look at." + "<br>" + "The expection to this rule is if the accessory piece is plaid." + "<br>";
    }
    //other type outputs
    if (otherT == 1000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear a jacket or coat that doesn't fully cover the dress." + "<br>" + "It'll takes away from the main garmet." + "<br>";
    }
    if (otherT == 2000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "You should accompany this dress with some jewlery for an elegant look." + "<br>" + "A small bag for going out fits well with it as well." + "<br>";
    }
    if (otherT == 3000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "Any tops go well with short skirts, just make sure to balance out the skin coverage with your top." + "<br>";
    }
    if (otherT == 4000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear a  top such as a blouse or dress shirt for a more professional look." + "<br>" + "Since the skirt is long, you can get away with a more reveling top such as a tube top or crop top." + "<br>";
    }
    if (otherT == 5000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    if (otherT == 6000) {
        document.getElementById("result").innerHTML += "<h3>Other Type:</h3>";
        document.getElementById("result").innerHTML += "You should wear " + "<br>";
    }
    //color outputs
    document.getElementById("result").innerHTML += "<h3>Color:</h3>";
    if (otherC == 100) {
        document.getElementById("result").innerHTML += "This color pairs well with white, black, yellow, silver, green, and gold." + "<br>";
    }
    if (otherC == 200) {
        document.getElementById("result").innerHTML += "This color pairs well with neutrals: white, gray and black. " + "<br>";
    }
    if (otherC == 300) {
        document.getElementById("result").innerHTML += "This color pairs well with similar ocean tones, for example, greens and browns." + "<br>" + "It also goes well with neutrals: white, gray and black." + "<br>";
    }
    if (otherC == 400) {
        document.getElementById("result").innerHTML += "This color pairs well with most other colors." + "<br>" + "Pay attention to their undertones for a more perfect color match" + "<br>";
    }
    //pattern outputs
    if (otherP == 10) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern goes hand-in-hand with the color of this item. Refer to the color match." + "<br>";
    }
    if (otherP == 20) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern looks best with either a plain tone or the same pattern accompanying it." + "<br>" + "Since it already draws a lot of attention, you either want to match it with itself or chose a solid color." + "<br>";
    }
    if (otherP == 30) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern is a geometric shape." + "<br>" + "You can make a mix of print and balance it out with smaller print on top and a larger one on the bottom." + "<br>" + "Don't try to mix other patterns and match it with itself or chose a solid color." + "<br>";
    }
    if (otherP == 40) {
        document.getElementById("result").innerHTML += "<h3>Pattern:</h3>";
        document.getElementById("result").innerHTML += "This pattern Wear one plaid piece of clothing at a time." + "<br>" + "Plaid comes in many different colors and styles." + "<br>" + "However, its crisscrossing lines mean it's almost always fairly attention-grabbing." + "<br>" + "This means pairing multiple pieces of plaid clothing with each other can be overwhelming or busy to look at." + "<br>" + "The expection to this rule is if the accessory piece is plaid." + "<br>";
    }
}