var products = document.querySelectorAll(".products .product .p-content")
var invoice = document.querySelector(".orders")
var t_price = document.querySelector(".btn-p")
var price = document.querySelector(".t-p")
var total = 0

products.forEach(function (product) {
    product.onclick = function () {
        invoice.innerHTML += product.textContent + "<br>"
        total += +(product.getAttribute("price"))
        if (invoice != "") {
            invoice.style.display = "block"
            document.querySelector(".invoice .title").style.display = "block"
            document.querySelector(".btn-p").style.display = "block"
        }
    }
})

t_price.onclick = function () {
    document.querySelector(".t-price").style.display = "block"
    price.innerHTML = total + "$"
}

