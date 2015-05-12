function uMonster(){
    var radio = document.getElementsByName('h');
    hat = hats[loopCheck(radio)];
    var radio = document.getElementsByName('le');
    lEye = eyes[loopCheck(radio)];
    var radio = document.getElementsByName('re');
    rEye = eyes[loopCheck(radio)];
    var radio = document.getElementsByName('lb');
    lEyeB = eyeBs[loopCheck(radio)];
    var radio = document.getElementsByName('rb');
    rEyeB = eyeBs[loopCheck(radio)];
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
    console.log(loopCheck(radio));
    var radio = document.getElementsByName('f');
    foot = feet[loopCheck(radio)];
    m = gMonster();
    document.getElementById('m').innerHTML = m;
};

function sUMonster(){
    var radio = document.getElementsByName('ha');
    hat = hats[loopCheck(radio)];
    var radio = document.getElementsByName('e');
    lEye = eyes[loopCheck(radio)];
    rEye = eyes[loopCheck(radio)];
    var radio = document.getElementsByName('b');
    lEyeB = eyeBs[loopCheck(radio)];
    rEyeB = eyeBs[loopCheck(radio)];
    var radio = document.getElementsByName('s');
    if (loopCheck(radio)===0){
        neck = necks[0];
        nJoin = nJoins[0];
    }else if (loopCheck(radio)===1){
        neck = necks[1];
        nJoin = nJoins[0];
    }else{
        neck = necks[1];
        nJoin = nJoins[1];
    };
    var radio = document.getElementsByName('a');
    lArm = arms[loopCheck(radio)];
    rArm = rArms[loopCheck(radio)];
    var radio = document.getElementsByName('mo');
    mouth = mouths[loopCheck(radio)];
    var radio = document.getElementsByName('fe');
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

function sA(){
    document.getElementById('easy').style.display='none';
    document.getElementById('advanced').style.display='block';
};

function hA(){
    document.getElementById('advanced').style.display='none';
    document.getElementById('easy').style.display='block';
};
