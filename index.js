const imgs = document.querySelectorAll('.header-slider ul img');//stores all the image elements
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');


let n = 0;//when n is zero it should display first image

function changeSlide(){
    for(let i = 0; i <imgs.length; i++){
        imgs[i].style.display = 'none';//all images are hidden

    }
    imgs[n].style.display = 'block';//displays the image at position n

}

changeSlide()



prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide()

})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()

})


const scrollContainer = document.querySelectorAll('.products')
for(const item of scrollContainer){
    item.addEventListener('wheel', (e) => {
        e.preventDefault();
        item.scrollLeft+=e.deltaY
       
    })
}


