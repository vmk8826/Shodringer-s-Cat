var a;
var u =0;

document.querySelector('.implant').addEventListener('click',function(){
u =1;
var j ;
document.querySelector('.status').textContent="Poison Implanted now check result";
j=document.querySelector('.src-img');
j.src='Files/Schrodingers-Cat-Dead-And-Alive-T-Shirt-Cat-Lover-Funny-Science-Geek-Kitty.jpg'

}
);

console.log(u);


document.querySelector('.check').addEventListener('click', function()
{
    console.log(u);

    if(u==1)
{
var a =(Math.random())*10;
console.log(a);

    if (a<=4)
{
    i=0;
    var i = document.querySelector('.src-img');
    i.src='Files/Alive.jpg'
    document.querySelector('.status').textContent="Yay! Cat is Alive";
    u=0;
}

 if (a>4&&a<10)    

    
{
    i=0;
    var i = document.querySelector('.src-img');
    i.src='Files/dead.jpg'
    document.querySelector('.status').textContent="Alas! Cat is dead";
    u=0;
}


}

else
{
    document.querySelector('.status').textContent="Implant poison first";
}
}
);
