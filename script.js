const contenedor = document.createElement('div')
contenedor.classList.add('contenedor')
function createGrid() {
    for(let i=0; i<16; i++) {
        let n = 16
        let eachDivSize = 600/n
        var horizontalLine = document.createElement('div')
        horizontalLine.classList.add('horizontalLine')
        contenedor.appendChild(horizontalLine)
            for(let i=0 ; i<16 ; i++) {
                var div=document.createElement('div')
                div.classList.add('eachDiv')
                div.style.width = eachDivSize + 'px'
                div.style.height = eachDivSize + 'px'
                horizontalLine.appendChild(div)
            }
     }   
    document.querySelector('body').appendChild(contenedor)
    getHover()
}

function paintDivs() {
    this.style.backgroundColor = 'black'
}

function getHover() {
    const gridDivs = document.querySelectorAll('.eachDiv')
        contenedor.addEventListener('mousedown',()=>{
            gridDivs.forEach(div =>{
                div.addEventListener('mousemove',paintDivs)
            }) 
        })
        contenedor.addEventListener('mouseup',()=>{
            gridDivs.forEach(div => {
                div.removeEventListener('mousemove',paintDivs)
            })
        })
}

createGrid()
