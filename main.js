var input = document.querySelector('.input');
var items = Array.from(document.querySelectorAll('.item'));

items.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // 
        if (input.innerHTML == '0')
            input.innerHTML = '';
        if (btn.innerHTML == 'AC')
            input.innerHTML = '0';
        else if (btn.innerHTML == 'DEL') {
            var arrText = Array.from(input.innerHTML);
            arrText.splice(arrText.length - 1, 1);
            if (arrText.length != 0)
                input.innerHTML = arrText.join('');
            else input.innerHTML = '0';
        } else if (btn.innerHTML == '=') {
            input.innerHTML = eval(input.innerHTML);
        } else input.innerHTML += btn.innerHTML;

    })
})