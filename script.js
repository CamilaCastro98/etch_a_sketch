const contenedor = document.createElement('div')
contenedor.classList.add('contenedor')
function createGrid() {
    for(let i=0; i<16; i++) {
        let n = 16
        let eachDivSize = 600/n
        let horizontalLine = document.createElement('div')
        horizontalLine.classList.add('horizontalLine')
        contenedor.appendChild(horizontalLine)
            for(let i=0 ; i<16 ; i++) {
                let div=document.createElement('div')
                div.classList.add('eachDiv')
                div.style.width = eachDivSize + 'px'
                div.style.height = eachDivSize + 'px'
                horizontalLine.appendChild(div)
            }
     }   
    document.querySelector('body').appendChild(contenedor)
}
createGrid()