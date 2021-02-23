//1.Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.

document.getElementById("submit").addEventListener("click",showDiv);

function showDiv(){
    var txtThongBao = document.getElementById("txtThongBao");
    txtThongBao.innerHTML = "";

    for(i = 1;i <= 10;i++){
        var createDiv = document.createElement("span");
        if(i % 2 == 0){
            createDiv.innerHTML = i;
            createDiv.classList.add("div1")
        }
        if(i % 2 != 0){
            createDiv.innerHTML = i;
            createDiv.classList.add("div2")
        }

        txtThongBao.appendChild(createDiv);
    }


    
}