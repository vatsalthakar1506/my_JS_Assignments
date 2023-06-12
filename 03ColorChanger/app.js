

const  changeBackground=document.querySelector('#canvas');

const button=document.querySelector('#button');
getRandamoColor=()=>{

    let letters ='012345678ABCDEFE';
    let color='#';
    for(let i=0;i<6;i++ ){

         color+=letters[Math.floor(Math.random()*16)];
    }
    changeBackground.innerHTML=color
    return color;
}
button.addEventListener('click', ()=>{
    // getRandamoColor();
    changeBackground.style.backgroundColor=getRandamoColor();
    
});

