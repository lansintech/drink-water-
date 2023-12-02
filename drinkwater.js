const percentage = document.getElementById('percentage')
const cupSmall = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')

updateBigCup()

cupSmall.forEach((cup,idx) =>{
    cup.addEventListener('click', () => highlightCup(idx))
})

function highlightCup(idx){
    if(cupSmall[idx].classList.contains('full') && !cupSmall[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    cupSmall.forEach((cup,idx2) =>{
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
    updateBigCup()
}
function updateBigCup(){
    const fullCup = document.querySelectorAll('.cup-small.full').length
    const totalCup = cupSmall.length

    if(fullCup === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
        
    }else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCup/totalCup * 330}px`
        percentage.innerText = `${fullCup/totalCup * 100}%`
    }
    if(fullCup === totalCup){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2-(250 * fullCup/1000)}L`
    }
}
