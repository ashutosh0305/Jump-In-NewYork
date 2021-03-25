score=0;
cross=true;

audio = new Audio('music.mp3');
audiogo= new Audio('gameover.mp3');
setTimeout(() =>{
  audio.play()
},1000);
document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode==38)
    {
        dino = document.querySelector('.dino');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino')
        },700);
    }

    if(e.keyCode==39)
    {
        dino = document.querySelector('.dino');
       dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left=dinox+112+"px";

    }

    if(e.keyCode==37)
    {
        dino = document.querySelector('.dino');
       dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left=(dinox-112)+"px";
       
    }

}   

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));


    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx=Math.abs(dx-ox);
    offsety=Math.abs(dy-oy);
    if(offsetx<93 && offsety<73)
    {
        gameover.innerHTML = "Game Over - Reload to start over ";
        obstacle.classList.remove('obstacleani');
        audiogo.play();
       setTimeout(() =>{
        audiogo.pause();
        audio.pause();
       },1000)
     

    }
    else if(offsetx<145 && cross){
        score=score+1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        },1000);
         setTimeout(() => {
            anidur= parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-Duration'));
        newdur= anidur -0.5;
        obstacle.style.animationDuration = newdur +'s';
         }, 1000);
        

    }
    




},100);

function updatescore(score){
    scorecont.innerHTML = "Your Score:"+score
}