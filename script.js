const btnel=document.getElementById("button");
const jokeel=document.getElementById("joke");
const apiKey="4i84W8xWDPxtB6qPz6TRkX26omYgi9WDWdGT28yD";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes";
async function getJoke(){
    try{
        jokeel.innerText="updating.....";
    btnel.disabled=true;
    btnel.innerText="loading....."
  const response=await fetch(apiURL,options);
  const data=await response.json();
  jokeel.innerText=data[0].joke;
  btnel.disabled=false;
    btnel.innerText="Generate joke"
    }
    catch(error){
        jokeel.innerText="network error,please try again later!";
        btnel.innerText="GENERATE JOKE";
    }
}
btnel.addEventListener("click",getJoke);
