document.querySelector('.submit').addEventListener('click',(e)=>
{
let nbressai= parseInt(document.querySelector('.essai').value ,10)
let x = Math.round(Math.random()*10)
for(let i =0;i<nbressai;i++)
{
let essai=parseInt(prompt("entrer un chiffre"));
 if(essai===x){ alert ('bravo');  break; }
 else {if(i==nbressai-1) alert(":(((((((")}

}
}
)
