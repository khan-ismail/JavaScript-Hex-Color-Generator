hexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

document.getElementById('btnChanger').addEventListener('click', function(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //Call the function to convert rbg color to Hex color;
    rgb = [r,g,b];
    getHexColor(rgb);

    //change the background color
    var bgColor = 'rgb('+r+','+g+','+b+')';
    document.body.style.background = bgColor;
});


function getHexColor(r /*220 */){

    var hexColorCode = '';

    for(var i=0; i<3; i++){
        firstStep = r[i]/16;  //13.75;
        rInt = parseInt(firstStep); // parseInt(13.75) => 13;
        fCode = hexCode[rInt]; // hexCode[13] => D; 

        rFloat = Math.abs(firstStep - rInt);  // Math.abs(13.76 - 13) => 0.75;
        sCode = hexCode[rFloat * 16]; // hexCode(0.75 * 16) => 12 => C;
        hexColorCode = hexColorCode + fCode + sCode;
    }
    document.getElementById('showHexColor').innerHTML = 'HEX COLOR: '+'#'+hexColorCode;
}

