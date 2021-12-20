var parent = document.querySelectorAll('a')

document.body.addEventListener('click',()=>{
   console.log(parent[0]);

    
})

var back=document.getElementById('back')

function fadeIn(ele){
    if (scrollY>100){
        back.style.display = "block"
        back.addEventListener('click',()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    }else{
        back.style.display = "none"
    }
    
}

function localset(){
    localStorage.setItem('bgcolor', body1);
    console.log(window.localStorage);
}