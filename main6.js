function updatePrice() 
{
    let sel = document.getElementsByName("products");
    let selected = sel[0];
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let radioDiv = document.getElementById("prodOptions");
    radioDiv.style.display = ((select.value === "1" || select.value === "3") ? "none" : "block");
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value === "3" ? "block" : "none");
    let price = 0;
    let price_t = 0;
    let prices = getPrices();
    let prodIndex = selected.value;
    if (prodIndex !== "") 
    {
        price_t = prices.productCost[prodIndex];
    }
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) 
    {
        price = prices.prodTypes[priceIndex];
    }
    if (select.value === "2") 
    {
        let radios = document.getElementsByName("prodOptions");
        radios.forEach(function(radio) {
            if (radio.checked) 
            {
                let optionPrice = prices.prodOptions[radio.value];
                if (optionPrice !== undefined) 
                {
                    price += optionPrice;
                }
            }
        }
        );
    }
    if (select.value === "3") 
    {
        let checkboxes = document.getElementsByName("checkboxes");
        checkboxes.forEach(function(checkboxes) 
        {
            if (checkboxes.checked) {
                let checkboxPrice = prices.prodProperties[checkboxes.value];
                if (checkboxPrice !== undefined) 
                {
                    price += checkboxPrice;
                }
            }
        }
        );
    }
    let onlydigitnotzero = /^(?!(0))\d+$/;
    let count_t = document.getElementById("product_count").value;
    let v = document.getElementById("field").value;
    let fail = "";
    if (v === "") 
    {
        fail = "Время гарантии не введено <br>";
    } 
    else
    if (v.match(onlydigitnotzero) === null) 
    {
        fail = "Время гарантии введено некорректно <br>";
    }
    if (count_t === "") 
    {
        fail += "Количество товара не введено <br>";
    } 
    else
    if (count_t.match(onlydigitnotzero) === null) 
    {
        fail += "Количество товара введено некорректно <br>";
    }
    if (selected.value === "") 
    {
        fail = "Выберите товар";
    }
    if (fail === "") 
    {
        document.getElementsByClassName("error")[0].innerHTML = "";
        let total_price = (v * price) + (price_t * count_t);
        document.getElementsByClassName("final_price")[0].innerHTML = "Итоговая цена: " + total_price + "₽";
    } 
    else 
    {
        document.getElementsByClassName("final_price")[0].innerHTML = "";
    }
    document.getElementsByClassName("error")[0].innerHTML = fail;
}
function getPrices() 
{
    return {
        prodTypes: [300, 500, 700],
        productCost: {
            Iphone12: 70000,
            Iphone12bu: 47000,
            Iphone13: 90000,
            Iphone13bu: 65000,
            Iphone14: 100000,
            Iphone14bu: 80000,
            Iphone15: 140000,
            Iphone15bu: 98000
        },
        prodOptions: {
            option2: 500,
            option3: 1000
        },
        prodProperties: {
            check1: 250,
            check2: 1000
        }
    };
}
window.addEventListener("DOMContentLoaded", function(event) 
{
    let s2 = document.getElementsByName("products");
    let select2 = s2[0];
    select2.addEventListener("change", function(event) 
    {
        let target = event.target;
        updatePrice();
    }
    );
    let radioDiv = document.getElementById("prodOptions");
    radioDiv.style.display = "none";
    let checkboxDiv = document.getElementById("checkboxes");
    checkboxDiv.style.display = "none";
    let v = document.getElementById("field");
    v.addEventListener("input", function(event) 
    {
        updatePrice();
    }
    );
    let count_t = document.getElementById("product_count");
    count_t.addEventListener("input", function(event) 
    {
        updatePrice();
    }
    );
    let s = document.getElementsByName("prodType");
    let select = s[0];
    select.addEventListener("change", function(event) 
    {
        let target = event.target;
        updatePrice();
    });
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) 
    {
        radio.addEventListener("change", function(event) 
        {
            let r = event.target;
            updatePrice();
        }
        );
    }
    );
    let checkboxes = document.getElementsByName("checkboxes");
    checkboxes.forEach(function(checkbox) 
    {
        checkbox.addEventListener("change", function(event) 
        {
            let c = event.target;
            updatePrice(v.value);
        }
        );
    }
    );
}
);