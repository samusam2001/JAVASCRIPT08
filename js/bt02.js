// 2. Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
document.getElementById("submit").addEventListener("click",sumNT);

//tính nguyên tố
function sumNT(){
    var number = parseInt(document.getElementById("number").value);
    var result = "";
    for (var i = 1; i <= number; i++) {
        if (checkNT(i) == 1){
            result += i + ' <br/>';
        }
    }

    document.getElementById("txtThongBao").innerHTML = result;
    
}

//kiểm tra số nguyên tố
function checkNT(number){
    if (number < 2) {
        return 0;
    }
    else if (number == 2) {
        return 1;
    }
    else if (number % 2 == 0) {
        return 0;
    }
    else {
        for (var i = 3; i <= Math.sqrt(number); i += 2)
        {
            if (number % i == 0) {
                return 1;
            }
        }
    }
 
    return 1;
}