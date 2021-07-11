var images =
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sSzU9eboSpAFSToAxGqhHw5dKQ8ftZ9uRA&usqp=CAU",
        "https://mail.google.com/mail/u/0?ui=2&ik=1252229d4a&attid=0.1&permmsgid=msg-f:1702451487583212475&th=17a0529ba4bb93bb&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9KScYemnmG6pDoVT4OeRxYKeugzEzDXuj6Q9jDIc2ze0OdGXxtcPlsXTovYAoVHV9jHddvzgYcSuSTCP2vSfbngW7Bi49uhsPHPkY7mIH8xDQabaqPXFLHIac&disp=emb&realattid=e4263fc5daa150f1_0.1.1",
        "https://mail.google.com/mail/u/0?ui=2&ik=1252229d4a&attid=0.1&permmsgid=msg-f:1702451537437714388&th=17a052a7404ae7d4&view=att&disp=safe&realattid=bead9806aa6b4d8e_0.1",
        "https://mail.google.com/mail/u/0?ui=2&ik=1252229d4a&attid=0.2&permmsgid=msg-f:1702451537437714388&th=17a052a7404ae7d4&view=att&disp=safe&realattid=bead9806aa6b4d8e_0.2",
        "https://mail.google.com/mail/u/0?ui=2&ik=1252229d4a&attid=0.3&permmsgid=msg-f:1702451537437714388&th=17a052a7404ae7d4&view=att&disp=safe&realattid=bead9806aa6b4d8e_0.3",
        "https://mail.google.com/mail/u/0?ui=2&ik=1252229d4a&attid=0.4&permmsgid=msg-f:1702451537437714388&th=17a052a7404ae7d4&view=att&disp=safe&realattid=bead9806aa6b4d8e_0.4"];

var names = ["My Family Book",  "  My Mother-Roslein Mishra", " My Grandfather-Magan Lal Agrawal", " Me-Aryansh Agrawal", " My grandmother-Kanta Agrawal",
    "My Father- Arvind Agrawal"];

var i = 0;
function update() {
    i++;
    var numbers_of_family_member_in_array = 5;
    if (i > numbers_of_family_member_in_array) {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}