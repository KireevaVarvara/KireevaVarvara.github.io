window.addEventListener('DOMContentLoaded', function (event) {
    document.getElementsByName('send_button')[0].addEventListener('click', checkForm);
});
function checkForm(event)
{
    event.preventDefault();
    const form = document.getElementById('main-form');
    const product = form.product_select.value;
    const count = Number(form.product_count.value);
    let fail = "";
    if (product == "" && count == 0)
        fail = "Заполните все поля";
    else if (product == "")
        fail = "Товар не выбран";
    else if (count == 0)
        fail = "Количество товара не введено";
    else if (isNaN(count))
        fail = "Количество товара введено некорректно";
    if (fail != "")
        document.getElementsByClassName('error')[0].innerHTML = fail;
    else
    {
        let price;
        switch (product)
        {
            case "Iphone 12 256gb":
                price = 70000;
                break;
            case "Iphone 12 256gb b/u":
                price = 47000;
                break;    
            case "Iphone 13 256gb":
                price = 90000;
                break;
            case "Iphone 13 256gb b/u":
                price = 65000;
                break;       
            case "Iphone 14 256gb":
                price = 100000;
                break;
            case "Iphone 14 256gb b/u":
                price = 80000;
                break;   
            case "Iphone 15 256gb":
                price = 140000;
                break;
            case "Iphone 15 256gb b/u":
                price = 98000;
                break;   
        }
        let total_price = count*price;
        document.getElementsByClassName('final_price')[0].innerHTML = "Итоговая цена: " + total_price + "$";
    }
}