const box = document.getElementById('box');

document.addEventListener('click',(e)=>{   

    box.style.top = `${e.pageY}px`
    box.style.left = `${e.pageX}px`
    
})
