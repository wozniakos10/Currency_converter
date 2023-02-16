// $ functions to update proper input value after change other
function other_pln_l (price_list, other_value) {

    let e = document.getElementById("first_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    other_value *= multiplier

    document.getElementById('pln_l').value = other_value.toFixed(4)

}

function pln_other_l (price_list,pln_value) {

    let e = document.getElementById("first_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    pln_value /= multiplier

    document.getElementById('other_l').value = pln_value.toFixed(4)


}

function other_pln_r (price_list, other_value) {

    let e = document.getElementById("second_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    other_value *= multiplier

    document.getElementById('pln_r').value = other_value.toFixed(4)

}

function pln_other_r (price_list, pln_value) {

    let e = document.getElementById("second_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    pln_value /= multiplier
    let result = pln_value.toFixed(4)

    document.getElementById('other_r').value = result

}


function update_sell(price_list){
//     Updating value after change select

let other_value = document.getElementById('other_l').value;
other_pln_l(price_list,other_value);
let elem = document.getElementById('first_label');
let label = document.getElementById('label_one');
let e = document.getElementById("first_select");
let idx = e.options[e.selectedIndex].value;
let name = e.options[e.selectedIndex].text;
   // Formatting sring
elem.innerHTML=  '1 ' + name + ' = ' + "<b>"+ price_list[idx].toFixed(4) +' PLN' + "</b>";
label.innerHTML = name;
}


function update_buy(price_list){
    //     Updating value after change select

    let pln_value = document.getElementById('pln_r').value
    pln_other_r(price_list,pln_value)

    let elem = document.getElementById('second_label');
    let e = document.getElementById("second_select");
    let idx = e.options[e.selectedIndex].value;
    let name = e.options[e.selectedIndex].text;
    let label = document.getElementById('label_two');

    // Formatting sring
    elem.innerHTML=  '1 PLN = ' + "<b>" + (1/ price_list[idx]).toFixed(3) + ' ' + name + "</b>" ;
    label.innerHTML = name;

}

