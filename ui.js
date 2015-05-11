function uMonster(){
    var radio = document.getElementsByName('h');
    hat = hats[loopCheck(radio)];
    var radio = document.getElementsByName('le');
    lEye = eyes[loopCheck(radio)];
    var radio = document.getElementsByName('re');
    rEye = eyes[loopCheck(radio)];
    var radio = document.getElementsByName('n');
    neck = necks[loopCheck(radio)];
    var radio = document.getElementsByName('j');
    nJoin = nJoins[loopCheck(radio)];
    var radio = document.getElementsByName('la');
    lArm = arms[loopCheck(radio)];
    var radio = document.getElementsByName('ra');
    rArm = rArms[loopCheck(radio)];
    var radio = document.getElementsByName('m');
    mouth = mouths[loopCheck(radio)];
    var radio = document.getElementsByName('f');
    foot = feet[loopCheck(radio)];
    m = gMonster();
    document.getElementById('m').innerHTML = m;
};

function loopCheck(radio){
    for (var i = 0, length = radio.length; i < length; i++) {
        if (radio[i].checked) {
            return(i);
        };
    };
};
