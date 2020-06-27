function getnumber(num) {
    var result = document.getElementById('result');
    result.value += num;
    result.value == 0;


}


function multi() {
    var result = document.getElementById('result');

    result.value *= result.value;
}



function backbtn() {
    var str = document.getElementById('result').value;
    var position = document.getElementById('result').selectionStart - 1;
    str = str.substr(0, position) + '' + str.substr(position + 1);
    $("#result").val(str);
}

function clearbtn() {
    var result = document.getElementById('result');
    result.value = "0"

}

function getresult() {
    var result = document.getElementById('result');
    result.value = eval(result.value)

}