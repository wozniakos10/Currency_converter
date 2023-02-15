// function other_pln_one (){
//          var e = document.getElementById("send");
//         var value = e.options[e.selectedIndex].value;
//         var text = e.options[e.selectedIndex].text;
//           //  alert("warotsc to" + text)
//            alert(value)

function other_pln_l () {
    let other_value = document.getElementsByName('other_l')[0].value;
    other_value *=5
    let result = other_value.toFixed(2)
    document.getElementsByName('pln_l')[0].value = result

}

function pln_other_l () {
    let other_value = document.getElementsByName('pln_l')[0].value;
    other_value /= 5
    let result = other_value.toFixed(2)
    document.getElementsByName('other_l')[0].value = result

}

function other_pln_r () {
    let other_value = document.getElementsByName('other_r')[0].value;
    other_value *=5
    let result = other_value.toFixed(2)
    document.getElementsByName('pln_r')[0].value = result

}

function pln_other_r () {
    let other_value = document.getElementsByName('pln_r')[0].value;
    other_value /= 5
    let result = other_value.toFixed(2)
    document.getElementsByName('other_r')[0].value = result

}

