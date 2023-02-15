function other_pln_l (price_list, other_value) {

    let e = document.getElementById("first_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    other_value *= multiplier
    let result = other_value.toFixed(4)

    document.getElementsByName('pln_l')[0].value = result

}

function pln_other_l (price_list,pln_value) {

    let e = document.getElementById("first_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    pln_value /= multiplier
    let result = pln_value.toFixed(4)

    document.getElementsByName('other_l')[0].value = result


}

function other_pln_r (price_list, other_value) {

    let e = document.getElementById("second_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    other_value *= multiplier
    let result = other_value.toFixed(4)

    document.getElementsByName('pln_r')[0].value = result

}

function pln_other_r (price_list, pln_value) {

    let e = document.getElementById("second_select");
    let idx = e.options[e.selectedIndex].value;
    let multiplier = price_list[idx]
    pln_value /= multiplier
    let result = pln_value.toFixed(4)

    document.getElementsByName('other_r')[0].value = result

}


function update_sell(price_list){
//     Updating value after change select

let other_value = document.getElementsByName('other_l')[0].value
other_pln_l(price_list,other_value)

}


function update_buy(price_list){
    //     Updating value after change select

    let pln_value = document.getElementsByName('pln_r')[0].value
    pln_other_r(price_list,pln_value)

}