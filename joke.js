/*
const button= document.querySelector('button');
const jokeText = document.querySelector('h2')
let category3 = document.getElementById('Any');
let category2 = document.getElementById('Dark');
let category1 = document.getElementById('Programming');
let category4 = document.getElementById('Pun');
let category5 = document.getElementById('Miscellaneous');

const selection = document.getElementById('Joke');

console.log(category2.innerHTML)
selection.addEventListener('change',(selection)=>{
     return selection.value;

});
console.log(selection.value)


if(selection.value === category3.innerHTML){

button.addEventListener('click',getJoke1);
}
 
 else if(selection.value === category5.innerHTML){
    console.log(selection.value)
    

button.addEventListener('click',getJoke2);
}else if(selection.value === category4.innerHTML){
    console.log(selection.value)
    console.log(category4.innerHTML)


button.addEventListener('click',getJoke3);
}else if(selection.value === category2.innerHTML){
    console.log(selection.value)
    
button.addEventListener('click',getJoke4);


}else if(selection.value === category1.innerHTML){
    console.log(selection.value)

button.addEventListener('click',getJoke3); 
} 


function getJoke1(){
    
    Programming = fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    Programming.then((value1) => {
        return value1.json()
    }).then((value2) => {
        document.getElementsByTagName("div")[0].innerText = value2.category;
        document.getElementsByTagName("h2")[0].innerText = value2.joke;
        console.log(value2.joke) 
        console.log(selection.value)
        console.log(category3.innerHTML)
})
}

function getJoke2(){
    
    Miscellaneous = fetch("https://v2.jokeapi.dev/joke/Miscellaneous?type=single")
    Miscellaneous.then((value1) => {
        return value1.json()
    }).then((value2) => {
        document.getElementsByTagName("div")[0].innerText = value2.category;
        document.getElementsByTagName("h2")[0].innerText = value2.joke;
        console.log(value2.category) 
        console.log(selection.value)
        console.log(category1.innerHTML)
  
})
}
function getJoke3(){
    
    Pun = fetch("https://v2.jokeapi.dev/joke/Pun?type=single")
    Pun.then((value1) => {
        return value1.json()
    }).then((value2) => {
        document.getElementsByTagName("div")[0].innerText = value2.category;
        document.getElementsByTagName("h2")[0].innerText = value2.joke;
        console.log(value2.joke)   
        console.log(selection.value)

})
}
function getJoke4(){
    
    Dark = fetch("https://v2.jokeapi.dev/joke/Dark?type=single")
    Dark.then((value1) => {
        return value1.json()
    }).then((value2) => {
        document.getElementsByTagName("div")[0].innerText = value2.category;
        document.getElementsByTagName("h2")[0].innerText = value2.joke;
        console.log(value2.joke)   
            console.log(selection.value)
            console.log(category1.innerHTML)

})
}  */

const button= document.querySelector('button');
const selection1 = document.querySelector('option');
    let jokes= document.getElementById('Joke').value;

console.log(selection1.value)
if(selection1.value === jokes){
function getJoke(){    
    let p =  fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?type=single")
    p.then((value1) => {
        return value1.json()
    }).then((value2) => {
        value2.category;
        document.getElementsByTagName('h1')[0].innerHTML = value2.joke;
        console.log(value2.category)
        console.log(value2.joke)
    })
}
button.addEventListener('click',getJoke);
selection1.addEventListener('change',getJoke);


}  else{
    alert("Please select an option")
}
