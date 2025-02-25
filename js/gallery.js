let allImgs = Array.from(document.querySelectorAll('#allImgs .inner'))
let modal = document.getElementById('modal')
const modalImg = document.querySelector('.img-wrapper img')
const nextBtn = document.querySelector('.fa-caret-right')
const prevBtn = document.querySelector('.fa-caret-left')
let currentImgIndex;

for(var i = 0; i<allImgs.length; i++){
    allImgs[i].addEventListener('click', function(e){
        modal.classList.remove('d-none')
        let modalImgSrc = e.currentTarget.children[0].getAttribute('src')
        modalImg.setAttribute('src', modalImgSrc) 
        currentImgIndex = allImgs.indexOf(e.currentTarget)
    })
}
function next(){
    currentImgIndex++
    if(currentImgIndex == allImgs.length){
        currentImgIndex = 0
    }
    modalImg.setAttribute('src', allImgs[currentImgIndex].children[0].getAttribute('src'))
}
function prev(){
    currentImgIndex--
    if(currentImgIndex < 0){
        currentImgIndex = allImgs.length -1
    }
    modalImg.setAttribute('src', allImgs[currentImgIndex].children[0].getAttribute('src'))
}
nextBtn.addEventListener('click', function(e){
    e.stopPropagation()
    next()
})
prevBtn.addEventListener('click', function(e){
    e.stopPropagation()
    prev()
})
document.addEventListener('keydown', function(e){
    if(e.key == 'ArrowRight'){
        next()
    }else if(e.key == 'ArrowLeft'){
        prev()
    }else if(e.key == 'Escape'){
        modal.classList.add('d-none')
    }
})
modalImg.addEventListener('click', function(e){
    e.stopPropagation()
})
modal.addEventListener('click', function(e){
    modal.classList.add('d-none')
})