//There are 155,520 unique monsters

var hats = ['', '&nbsp;&nbsp;&nbsp;_====_</br>', '&nbsp;&nbsp;&nbsp;_____</br>&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</br>&nbsp;_|_____|_</br>', '&nbsp;&nbsp;&nbsp;_____</br>&nbsp;_(_____)_</br>'];
var necks = ['\\&nbsp;/', false];
var nJoins = ['-&nbsp;⁀&nbsp;-', false];
var eyes = ['0', 'O', '*', '.', '^', '@'];
var arms = ['\\', '/', '&nbsp;'];
var rArms = ['/', '\\', '&nbsp;'];
var feet = ['("")&nbsp;("")', '(^^)&nbsp;(^^)', '(vv)&nbsp;(vv)', '(_______)', ''];
var mouths = ['‿', '_', '⁔', '*', '-', '&nbsp;'];

var hat = hats[0];
var neck = necks[0];
var nJoin = nJoins[0];
var lEye = eyes[0];
var rEye = eyes[0];
var lArm = arms[0];
var rArm = arms[1];
var foot = feet[0];
var mouth = mouths[0];

function gMonster(){
    if (nJoin && neck){
        monster = hat+'&nbsp;&nbsp;&nbsp;⁔&nbsp;&nbsp;⁔</br>&nbsp;&nbsp;('+lEye+')&nbsp;('+rEye+')</br>&nbsp;&nbsp;&nbsp;&nbsp;'+neck+'</br>&nbsp;'+lArm+'&nbsp;'+nJoin+'&nbsp;'+rArm+'</br>&nbsp;&nbsp;(&nbsp;&nbsp;'+mouth+'&nbsp;&nbsp;)</br>&nbsp;'+foot;
    }else if (!(nJoin) && neck){
        monster = hat+'&nbsp;&nbsp;&nbsp;⁔&nbsp;&nbsp;⁔</br>&nbsp;&nbsp;('+lEye+')&nbsp;('+rEye+')</br>&nbsp;'+lArm+'&nbsp;&nbsp;'+neck+'&nbsp;&nbsp;'+rArm+'</br>&nbsp;&nbsp;(&nbsp;&nbsp;'+mouth+'&nbsp;&nbsp;)</br>&nbsp;'+foot;
    }else if (nJoin && !(neck)){
        monster = hat+'&nbsp;&nbsp;&nbsp;⁔&nbsp;&nbsp;⁔</br>&nbsp;&nbsp;('+lEye+')&nbsp;('+rEye+')</br>&nbsp;'+lArm+'&nbsp;'+nJoin+'&nbsp;'+rArm+'</br>&nbsp;&nbsp;(&nbsp;&nbsp;'+mouth+'&nbsp;&nbsp;)</br>&nbsp;'+foot;
    }else{
        monster = hat+'&nbsp;&nbsp;&nbsp;⁔&nbsp;&nbsp;⁔</br>&nbsp;'+lArm+'('+lEye+')&nbsp;('+rEye+')'+rArm+'</br>&nbsp;&nbsp;(&nbsp;&nbsp;'+mouth+'&nbsp;&nbsp;)</br>&nbsp;'+foot;
    };
    return(monster);
};
