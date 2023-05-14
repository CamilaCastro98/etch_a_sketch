const contenedor = document.createElement('div')
contenedor.classList.add('contenedor')
function createGrid() {
    for(let i=0 ; i<16 ; i++) {
        let div=document.createElement('div')
        div.classList.add('eachDiv')
        div.textContent = `${i}`
        contenedor.appendChild(div)
    }
    document.querySelector('body').appendChild(contenedor)
}
createGrid()