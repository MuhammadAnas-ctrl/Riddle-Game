
const riddle = document.getElementById("h1")
const answer = document.getElementById("h2")
const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2");
async function TRNS(){
try{
    const url = "https://riddles-api.vercel.app/random";
    const responce = await fetch(url)
    const data = await responce.json()
    riddle.innerText = "Riddle : "+ data.riddle;
 function handleClick() {
   history.go(0);
 }              
 btn2.addEventListener("click" , handleClick)       
    btn.addEventListener('click' , ()=>{
    answer.innerText = "Answer : "+ data.answer;
    })
    if (!responce.ok) {
      console.log("Cant Fetch Riddles Data.....");
    }
}
catch(error){
    console.log(error)
}

}
TRNS();