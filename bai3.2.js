
function inputCal(input) {
    console.log('input==>', input)
    let reSult = document.getElementById("dulieu").value += input
    // let ketQua = eval(reSult)
    // console.log('kq==>', ketQua)
}
function result(){
    let input = document.getElementById('dulieu').value
    let reSult = eval(input)
    document.getElementById('dulieu').value = reSult
}

function ac(){
    document.getElementById('dulieu').value = " "
}
