document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelectorAll('.slider');
    var init_slider = M.Slider.init(slider,{
        height:400,
        indicators:false,
        interval:4000,
        zIndex: 1
    });
});
async function validateForm() {

    let name = document.orderForm.name.value
    let address = document.orderForm.address.value
    let city = document.orderForm.city.value
    let state = document.orderForm.state.value
    let phone = document.orderForm.phone.value
    if (name == null || name == "") {
        alert("Введите имя")
        return false
    } else if (address === null || address === "") {
        alert("Введите адрес")
        return false
    } else if (city === null || city === "") {
        alert("Введите город")
        return false
    } else if (state === null || state === "") {
        alert("Введите почту")
        return false
    } else if (
        phone.match(/^\+[0-9]{3}\s\((\d+)\)-\d{3}-\d{2}-\d{2}/g) == null
    ) {
        alert("Введите номер")
        return false
    }
    try {
        let id = `f${(+new Date()).toString(16)}`
        let sushis = []
        JSON.parse(localStorage.getItem("session")).forEach((element) => {
            sushis.push(element.Nome)
        })
        await fetch(" http://localhost:3000/completedOrders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                sushis: sushis.join(","),
                name,
                address,
                city,
                state,
                phone,
            }),
        })
        showOrder()

        let currentUrl = location.href
        let newUrl = currentUrl.split("#")[0]
        location.href = newUrl + "#order"
        qs(".orderId span:last-child").innerHTML = id.toLocaleString(
            "pt-BR",
            {}
        )
        qs(".orderSushisList span:last-child").innerHTML = sushis
            .join(",")
            .toLocaleString("pt-BR", {})
        qs(".orderName span:last-child").innerHTML = name.toLocaleString(
            "pt-BR",
            {}
        )
        qs(".orderAdress span:last-child").innerHTML = address.toLocaleString(
            "pt-BR",
            {}
        )
        qs(".orderCity span:last-child").innerHTML = city.toLocaleString(
            "pt-BR",
            {}
        )
        qs(".orderPhone span:last-child").innerHTML = phone.toLocaleString(
            "pt-BR",
            {}
        )
        hideServerError()
    } catch (e) {
        console.log(e)
        showServerError()
        let currentUrl = location.href
        let newUrl = currentUrl.split("?")[0]
        location.href = newUrl + "?#orderH"
    }
}
function doTask2() {
    cart = []
    localStorage.setItem("session", JSON.stringify(cart))
    updateCart()
}

function closeOrder() {
    qs(".orderPage").style.display = "none"
    doTask2()
}
function showOrder() {
    qs(".orderPage").style.display = "block"
}
function showServerError() {
    qs(".serverError").style.display = "block"
}
function hideServerError() {
    qs(".serverError").style.display = "none"
}