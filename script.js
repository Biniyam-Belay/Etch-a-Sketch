const container = document.querySelector('.container');

let divs
let i = 0
for (i = 1; i < 257; i++){
    divs = document.createElement('div');
    divs.style.cssText = 'width: 20px; height: 20px; background: red; flex: 0 0 calc(6.25% - 1px);'

    divs.addEventListener('mouseover', () =>{
        divs.style.background = "yellow"
    })

    container.appendChild(divs)
}