const contenedor = document.createElement('div')
contenedor.classList.add('contenedor')
const colorInput = document.querySelector('.colorInput')
var color = '#000000'
const clearAll = document.querySelector('.clearAll')
const eraser = document.querySelector('.eraser')
const rainbow = document.querySelector('.rainbow')
const stopR = document.querySelector('.stopR')
var isRainbowOn = false
var originalColor = color
const range = document.querySelector('.range')
const pickRange = document.querySelector('.pickRange')
var rangeValue = 16

function createGrid() {
    for(let i=0; i<rangeValue; i++) {
        let eachDivSize = 600/rangeValue
        var horizontalLine = document.createElement('div')
        horizontalLine.classList.add('horizontalLine')
        contenedor.appendChild(horizontalLine)
            for(let i=0 ; i<rangeValue ; i++) {
                var div=document.createElement('div')
                div.classList.add('eachDiv')
                div.style.width = eachDivSize + 'px'
                div.style.height = eachDivSize + 'px'
                horizontalLine.appendChild(div)
            }
     }   
    document.querySelector('body').appendChild(contenedor)
    getTheDraw()
    changeColor()
}

function getGridSize() {
    const gridDivs = document.querySelectorAll('.eachDiv')
    range.addEventListener('input',(e)=>{
        rangeValue = e.target.value
    })
    pickRange.addEventListener('click',()=>{
        deleteContenedorChild()
        createGrid()
    })
}

function deleteContenedorChild() {
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.lastChild)
    }
}

function paintDivs() {
    this.style.backgroundColor = color
}

function getTheDraw() {
    const gridDivs = document.querySelectorAll('.eachDiv')
    getHover(gridDivs)
    getClearAll(gridDivs)
    getEraser(gridDivs)
    getRainbow(gridDivs)
}

function getHover(a) {
    contenedor.addEventListener('mousedown',()=>{
        a.forEach(div =>{
            div.addEventListener('mousemove',paintDivs)
        }) 
    })
    contenedor.addEventListener('mouseup',()=>{
        a.forEach(div => {
            div.removeEventListener('mousemove',paintDivs)
        })
    })
}

function changeColor() {
    colorInput.addEventListener('input',(e)=>{
        color = `${e.target.value}`
        originalColor = color
    })
}

function getClearAll(a) {
    clearAll.addEventListener('click',()=>{
        a.forEach(div =>{
            div.style.backgroundColor = 'white'
        })
    })
}

function getEraser(a) {
    eraser.addEventListener('click',()=>{
        color = 'white'
    })
}

function getRainbow(a) {
  rainbow.addEventListener('click',()=> {
      isRainbowOn = true
      getRainbowOn(a) 
  })
  stopR.addEventListener('click',()=>{
    isRainbowOn = false
    colorInput.value = originalColor;
    getRainbowOn(a)
})
}

function getRainbowOn(a) {
  if(isRainbowOn) {
      contenedor.addEventListener('mousedown',()=>{
          a.forEach(div =>{
              div.addEventListener('mousemove',stablishRandomColor)
           })
      })
      contenedor.addEventListener('mouseup',()=>{
          a.forEach(div => {
              div.removeEventListener('mousemove',stablishRandomColor)
          })
      })
  } else {
      a.forEach(div => {
          div.removeEventListener('mousemove', stablishRandomColor);
        });
  }
}

function stablishRandomColor() {
  if(isRainbowOn) {
  const randomColor = getRandomColor()
          this.style.backgroundColor = randomColor
  } else { this.style.backgroundColor = color}
}

function getRandomColor() {
  let randomColor = ''
  let randomNumber
  let randomArray = []
      for(let i=0; i<3; i++){
          randomNumber = (Math.random()*250).toFixed()
          if(randomNumber<=250) {
            randomArray[i] = randomNumber
          } else {i--}
  }
  randomColor = `RGB(${randomArray[0]},${randomArray[1]},${randomArray[2]})`
  return randomColor
}
createGrid()
getGridSize()
