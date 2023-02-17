const playerArray=[];

function addToCart(element)
{
    const playerName = element.parentNode.parentNode.children[1].innerText;
    playerArray.push(playerName);
    if(playerArray.length<5)
    {
        const playerCount = document.getElementById('total-player-count').innerText = playerArray.length;

    }
    else{
        const playerCount = document.getElementById('total-player-count').innerText = 5;
    }
for(let i=0;i<5;i++)
{
    playerArray[i];
if(i<1)
{

    const tableBody = document.getElementById("listPlayer").innerText = playerArray[i];
}
else if (i>0 && i<2)
{
    if(playerArray[i]==null)
    {
        return tableBody;
    }
    else
    tableBody = document.getElementById("listPlayer2").innerText = playerArray[i];
    

}
else if (i>1 && i<3)
{
    if(playerArray[i]==null)
    {
return tableBody;
    }
    else
     tableBody = document.getElementById("listPlayer3").innerText = playerArray[i];
}
else if (i>2 && i<4)
{
    if(playerArray[i]==null)
    {
return tableBody;
    }
    else
     tableBody = document.getElementById("listPlayer4").innerText = playerArray[i];
}
else if (i>3 && i<5)
{
    if(playerArray[i]==null)
    {
        return null;
    }
    else
     tableBody = document.getElementById("listPlayer5").innerText = playerArray[i];
}
else {
 
}
}

return playerArray.length;
}



const playerBudget = document.getElementById("player-Budget").addEventListener('click',function(){
 const playerBudget = parseInt (document.getElementById('inputBudget').value * playerArray.length);
 document.getElementById("per-Player-Exapance").innerText = playerBudget;
 totalCost(playerBudget); 
})
 
function totalCost(playerMoney){
const managerBudget = document.getElementById("manager-Coach-Budget").addEventListener('click',function(){
    const managerBudget = parseInt (document.getElementById('manager-Budget').value);
    const coachBudget =  parseInt(document.getElementById('coach-Budget').value);
    const totalCostCoachmanager = coachBudget + managerBudget + playerMoney;
    
    document.getElementById("all-Sum").innerText = totalCostCoachmanager;
  
   })
}
