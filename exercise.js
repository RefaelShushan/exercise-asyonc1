let button = document.getElementById("buttonTry");
let name1 = document.getElementById("name")
let age = document.getElementById("age") 
let email = document.getElementById("email") 
let img = document.getElementById("img")  


button.addEventListener("click",()=>{
    getPerson().then((data)=>{
       name1.innerText = data.results[0].name.first
       age.innerText = data.results[0].dob.age
       email.innerText = data.results[0].email
       img.src = data.results[0].picture.large 
    })
});
async function getPerson (){
    const resp = await fetch('https://randomuser.me/api')
    const data = await resp.json()
    return data
};



