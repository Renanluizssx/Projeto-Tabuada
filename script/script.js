function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Por favor digite um número!')

    }
    else {
    let n = Number(num.value)
    tab.innerHTML = ''
        for(let c = 0; c<=10; c++) {
            let option = document.createElement('option');
            option.text = `${n} x ${c} igual a ${n*c}`
            option.value = `tab${c}`
            tab.appendChild(option)
            
        }
    }
}