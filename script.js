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
    getTheDraw()
    changeColor()
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
      for(let i=0; i<6; i++){
          randomNumber = (Math.random()*10).toFixed()
          randomColor = `${randomColor}${randomNumber}`
  }
  randomColor = `#${randomColor}`
  return randomColor
}
createGrid()