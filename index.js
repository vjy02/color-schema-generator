const selectedColor= document.getElementById('seed-color')
const colorBtn = document.getElementById('color-button')
const modes = document.getElementById('modes')
const colorPallet = document.getElementById('pallets')
const container = document.getElementById('container')

const count = 6

function changeBorderColor() {
  var myContainer = container
  var color ='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +  ',0.1)'
  myContainer.style.borderColor = color
}
setInterval(changeBorderColor, 500)

function generateColors(){

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.slice(1)}&mode=${modes.value}&count=${count}`)
        .then(res=> res.json())
        .then(data=> {
           
        for(let i = 0;i<data.colors.length;i++){
            let color = (data.colors[i].hex.value)
            let html = ''
            html = `
                <div class='new-color' style="background-color:${color} ;">
                    <div class='color-hex'>
                        <p id='hex'>${color}</p>
                    </div>
                </div>
       `
       colorPallet.innerHTML += html
    }    
})
}

function clear(){
    colorPallet.innerHTML =''
}

generateColors()

colorBtn.addEventListener('click' , (e)=> {
    clear()
    setTimeout(generateColors(), 500)
    e.preventDefault()
})


