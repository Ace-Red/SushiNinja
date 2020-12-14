
let modalCount = 1
let modalKey = 0

let cart = JSON.parse(localStorage.getItem("session"))
    ? JSON.parse(localStorage.getItem("session"))
    : []
console.log(cart)
const qs = (e) => document.querySelector(e)
const qsa = (e) => document.querySelectorAll(e)
const cl = (e) => console.log(e)

function loadd() {
    let urlToCheck = window.location.href
    if (urlToCheck.indexOf("?") == -1) {
        window.location.href += "?#"
    }
}

async function getSushiJson1() {
    let res = await fetch("http://localhost:3000/sushiJson1")
    const data = await res.json()
    sushiJson1 = data
    sushiJson1.map((sushi, index) => {
        let sushiItem = qs(".models .sushi-item").cloneNode(true)
        sushiItem.setAttribute("data-key", index)
        sushiItem.querySelector(".sushi-item--img img").src = sushi.img
        sushiItem.querySelector(
            ".sushi-item--price"
        ).innerHTML = sushi.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "UAH",
        })
        sushiItem.querySelector(".sushi-item--name").innerHTML = sushi.name
        sushiItem.querySelector(".sushi-item--desc").innerHTML =
            sushi.description
        sushiItem.querySelector("a").addEventListener("click", (e) => {
            // відміна перезагрузки(обичної поведінки)
            e.preventDefault()
            let key = e.target.closest(".sushi-item").getAttribute("data-key")
            const sushiKey = sushiJson1[key]
            modalCount = 1
            modalKey = key

            qs(".sushiBig img").src = sushiKey.img
            qs(".sushiInfo h1").innerHTML = sushiKey.name
            qs(".sushiInfo--desc").innerHTML = sushiKey.description
            qs(
                ".sushiInfo--actualPrice"
            ).innerHTML = sushiKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "UAH",
            })
            qs(".sushiInfo--size.selected").classList.remove("selected")
            qs(".sushiInfo--qt").innerHTML = modalCount
            qsa(".sushiInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex == 2) size.classList.add("selected")

                const sushiSizes = sushiJson1[key].sizes[sizeIndex]
                size.querySelector("span").innerHTML = sushiSizes
            })

            qs(".sushiWindowArea").style.opacity = 0
            qs(".sushiWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".sushiWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".sushi-area1").append(sushiItem)
    })
}
getSushiJson1()

async function getSushiJson2() {
    let res = await fetch("http://localhost:3000/sushiJson2")
    const data = await res.json()
    sushiJson2 = data
    sushiJson2.map((sushi, index) => {
        let sushiItem = qs(".models .sushi-item").cloneNode(true)
        sushiItem.setAttribute("data-key", index)
        sushiItem.querySelector(".sushi-item--img img").src = sushi.img //Consegue-se usar a class e a tag num mesmo querySelector
        sushiItem.querySelector(
            ".sushi-item--price"
        ).innerHTML = sushi.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "UAH",
        })
        sushiItem.querySelector(".sushi-item--name").innerHTML = sushi.name
        sushiItem.querySelector(".sushi-item--desc").innerHTML =
            sushi.description
        sushiItem.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault()
            let key = e.target.closest(".sushi-item").getAttribute("data-key")
            const sushiKey = sushiJson2[key]
            modalCount = 1
            modalKey = key

            qs(".sushiBig img").src = sushiKey.img
            qs(".sushiInfo h1").innerHTML = sushiKey.name
            qs(".sushiInfo--desc").innerHTML = sushiKey.description
            qs(
                ".sushiInfo--actualPrice"
            ).innerHTML = sushiKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "UAH",
            })
            qs(".sushiInfo--size.selected").classList.remove("selected")
            qs(".sushiInfo--qt").innerHTML = modalCount
            qsa(".sushiInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex == 2) size.classList.add("selected")

                const sushiSizes = sushiJson2[key].sizes[sizeIndex]
                size.querySelector("span").innerHTML = sushiSizes
            })

            qs(".sushiWindowArea").style.opacity = 0
            qs(".sushiWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".sushiWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".sushi-area2").append(sushiItem)
    })
}
getSushiJson2()

async function getSushiJson3() {
    let res = await fetch("http://localhost:3000/sushiJson3")
    const data = await res.json()
    sushiJson3 = data
    sushiJson3.map((sushi, index) => {
        let sushiItem = qs(".models .sushi-item").cloneNode(true)
        sushiItem.setAttribute("data-key", index)
        sushiItem.querySelector(".sushi-item--img img").src = sushi.img //Consegue-se usar a class e a tag num mesmo querySelector
        sushiItem.querySelector(
            ".sushi-item--price"
        ).innerHTML = sushi.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "UAH",
        })
        sushiItem.querySelector(".sushi-item--name").innerHTML = sushi.name
        sushiItem.querySelector(".sushi-item--desc").innerHTML =
            sushi.description
        sushiItem.querySelector("a").addEventListener("click", (e) => {
            e.preventDefault()
            let key = e.target.closest(".sushi-item").getAttribute("data-key")
            const sushiKey = sushiJson3[key]
            modalCount = 1
            modalKey = key

            qs(".sushiBig img").src = sushiKey.img
            qs(".sushiInfo h1").innerHTML = sushiKey.name
            qs(".sushiInfo--desc").innerHTML = sushiKey.description
            qs(
                ".sushiInfo--actualPrice"
            ).innerHTML = sushiKey.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "UAH",
            })
            qs(".sushiInfo--size.selected").classList.remove("selected")
            qs(".sushiInfo--qt").innerHTML = modalCount
            qsa(".sushiInfo--size").forEach((size, sizeIndex) => {
                if (sizeIndex == 2) size.classList.add("selected")

                const sushiSizes = sushiJson3[key].sizes[sizeIndex]
                size.querySelector("span").innerHTML = sushiSizes
            })

            qs(".sushiWindowArea").style.opacity = 0
            qs(".sushiWindowArea").style.display = "flex"
            setTimeout(() => {
                qs(".sushiWindowArea").style.opacity = 1
            }, 200)
        })

        qs(".sushi-area3").append(sushiItem)
    })
}
getSushiJson3()
//-----------------------------------------------------------
const closeModal = () => {
    qs(".sushiWindowArea").style.opacity = 0
    setTimeout(() => {
        qs(".sushiWindowArea").style.display = "none"
    }, 500)
}

qsa(".sushiInfo--cancelMobileButton, .sushiInfo--cancelButton").forEach(
    (item) => {
        item.addEventListener("click", closeModal)
    }
)
// зменшуємо і добавляємо кількість
qs(".sushiInfo--qtmenos").addEventListener("click", () => {
    if (modalCount > 1) {
        modalCount--
        qs(".sushiInfo--qt").innerHTML = modalCount
    }
})
qs(".sushiInfo--qtmais").addEventListener("click", () => {
    modalCount++
    qs(".sushiInfo--qt").innerHTML = modalCount
})

qsa(".sushiInfo--size").forEach((size) => {
    size.addEventListener("click", () => {
        qs(".sushiInfo--size.selected").classList.remove("selected")
        size.classList.add("selected")
    })
})

qs(".sushiInfo--addButton").addEventListener("click", () => {
    let size = Number(qs(".sushiInfo--size.selected").getAttribute("data-key"))
    let Ident = sushiJson1[modalKey].id + "@" + size
    let key = cart.findIndex((item) => item.Ident === Ident)
    let sum = modalCount * sushiJson1[modalKey].price

    if (key > -1) {
        const carKey = cart[key]
        carKey.Quantidade += modalCount
    } else {
        cart.push({
            Id: sushiJson1[modalKey].id,
            Ident,
            Nome: sushiJson1[modalKey].name,
            Tamanho: size,
            Quantidade: modalCount,
        })
    }
    localStorage.setItem("session", JSON.stringify(cart))
    console.log(cart)
    updateCart()
    closeModal()
})
//--------------------------------------------------------------------------------------------------
// якщо не пуста вона відображається
qs(".menu-openner").addEventListener("click", () => {
    if (cart.length > 0) {
        qs("aside").style.left = "0"
    }
})
qs(".menu-closer").addEventListener(
    "click",
    () => (qs("aside").style.left = "100vw")
)
// корзина
async function updateCart() {
    let res = await fetch("http://localhost:3000/sushiJson1")
    const data = await res.json()
    pizzaJson1 = data
    qs(".menu-openner span").innerHTML = cart.length

    if (cart.length > 0) {
        const carrinho = qs(".cart")
        carrinho.innerHTML = ""

        qs("aside").classList.add("show")

        let subtotal = 0
        let desconto = 0
        let total = 0

        for (let i in cart) {
            let sushiItem = sushiJson1.find((item) => item.id == cart[i].Id)
            let cartItem = qs(".models .cart--item").cloneNode(true)
            let sushiSizeName
            subtotal += sushiItem.price * cart[i].Quantidade
            switch (cart[i].Tamanho) {
                case 0:
                    sushiSizeName = "P"
                    break

                case 1:
                    sushiSizeName = "M"
                    break

                case 2:
                    sushiSizeName = "G"
                    break
            }

            let sushiName = `${sushiItem.name} (${sushiSizeName})`

            cartItem.querySelector(".cart--item img").src = sushiItem.img
            cartItem.querySelector(
                ".cart--item .cart--item-nome"
            ).innerHTML = sushiName
            cartItem.querySelector(".cart--item--qt").innerHTML =
                cart[i].Quantidade
            cartItem
                .querySelector(".cart--item-qtmenos")
                .addEventListener("click", () => {
                    cart[i].Quantidade > 1
                        ? cart[i].Quantidade--
                        : cart.splice(i, 1)
                    updateCart()
                })
            cartItem
                .querySelector(".cart--item-qtmais")
                .addEventListener("click", () => {
                    cart[i].Quantidade++
                    updateCart()
                })

            carrinho.append(cartItem)
        }

        desconto = subtotal * 0.1
        total = subtotal - desconto

        qs(".subtotal span:last-child").innerHTML = subtotal.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "UAH",
            }
        )
        qs(".desconto span:last-child").innerHTML = desconto.toLocaleString(
            "pt-BR",
            {
                style: "currency",
                currency: "UAH",
            }
        )
        qs(".total span:last-child").innerHTML = total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "UAH",
        })
    } else {
        qs("aside").classList.remove("show")
        qs("aside").style.left = "100vw"
    }
}
updateCart()

let can = document.getElementById("can")
can.style.width = window.screen.availWidth + "px"
// верхнє меню
can.style.height = window.screen.availHeight + "px"
function gg() {
    var c = document.getElementById("can"),
        ctx = c.getContext("2d"),
        pi = Math.PI,
        xCenter = c.width / 2,
        yCenter = c.height / 2,
        radius = 10,
        startSize = radius / 3,
        num = 5,
        posX = [],
        posY = [],
        angle,
        size,
        i

    window.setInterval(function () {
        num++
        ctx.clearRect(0, 0, xCenter * 2, yCenter * 2)
        for (i = 0; i < 9; i++) {
            ctx.beginPath()
            ctx.fillStyle = "rgba(240, 68, 0," + 0.1 * i + ")"
            if (posX.length == i) {
                angle = pi * i * 0.25
                posX[i] = xCenter + radius * Math.cos(angle)
                posY[i] = yCenter + radius * Math.sin(angle)
            }
            ctx.arc(
                posX[(i + num) % 8],
                posY[(i + num) % 8],
                (startSize / 9) * i,
                0,
                pi * 2,
                1
            )
            ctx.fill()
        }
    }, 100)
}
gg()
function ready() {
    setTimeout(() => (can.style = "display: none"), 1500)
}

document.addEventListener("DOMContentLoaded", ready)
function doTask() {
    cart = []
    localStorage.setItem("session", JSON.stringify(cart))
    alert("Pizza be pordered")
    updateCart()
    closeModal()
}