var allPrudects = document.querySelectorAll(".cards .card")

var totalElement = document.getElementById('shop-list')

var btn = document.querySelector("#btn1")

var total = 0 ;


allPrudects.forEach(function(item) {
    

    item.onclick = function () {
    
    totalElement.innerHTML += `  <tr> <td> ${item.textContent } </td>  </tr>`
    total += parseInt(item.getAttribute("price"))
    if (totalElement.innerHTML != "") {
        btn.style.display = "block"
    }

}
})


btn.onclick = function () {

    btn.style.display = "none"
    document.getElementById("total-price").innerHTML = total
    total = 0

    
    
}




//document.getElementById('shop-list').innerHTML = "";
    
  
