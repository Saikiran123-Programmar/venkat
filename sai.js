const INC=document.getElementById("butinc");
const DEC=document.getElementById("butdec");
const RES=document.getElementById("butres");

let count=0;
INC.onclick=function(){
    count++;
    document.getElementById("number").textContent=count;

}
DEC.onclick=function(){
    count--;
    document.getElementById("number").textContent=count;
}
RES.onclick=function(){
    count=0;
    document.getElementById("number").textContent=count;
}