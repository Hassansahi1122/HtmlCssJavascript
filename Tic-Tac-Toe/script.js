let boxes = document.querySelectorAll(".box")
let btnReset = document.querySelector("#btnReset");
let newBtn = document.querySelector("#newbtn");
let continu = document.querySelector("#continue");
let winertext = document.querySelector("#winerpara");
let over = document.querySelector("#over");
let winnerdiv = document.querySelector(".winerdiv");
let Tic = document.querySelector(".Tic-Tac");
let select_o_x = document.querySelector(".select");
let select1_o_x = document.querySelector(".select1");
let list = document.querySelector(".list");
let listitem = document.querySelectorAll(".list li");
let btn = document.querySelectorAll(".btn");
let sp = document.querySelector(".sp");
let info = document.querySelector(".information");
let pop = document.querySelector(".pop");
let gamediv = document.querySelector(".gamediv");
let O;
let getotruefalse = false;
let person1;
let person2;
let infomain = document.querySelector(".info-main")
let namewiner = document.querySelector("#name");
let player1stname = document.querySelector(".player1stname");
let player2ndname = document.querySelector(".player2ndname");
let winningpoint1st = 0;
let winningpoint2nd = 0;
let player1stwingame = document.querySelector(".player1stwingame");
let player2ndwingame = document.querySelector(".player2ndwingame");

document.addEventListener("DOMContentLoaded",()=>{
    const inputs =document.querySelectorAll('input[type="text"]');
    inputs.forEach((input)=>{
        input.value = "";
    });
    pop.style.display = "block";
    gamediv.style.display = "none"
});

    select_o_x.addEventListener("click",()=>{
    //   list.style.display = list.style.display === "flex" ? "none" : "flex"
      if(list.style.display === "flex"){
       list.style.right = `${list.scrollRight}`;
        list.style.display = "none";
      }else{
        list.style.display = "flex";
      }
    });
    document.addEventListener("click",(e)=>{
        if(!select_o_x.contains(e.target) && !select1_o_x.contains(e.target) &&!list.contains(e.target)){
            list.style.display = "none";
        }
    })

    listitem.forEach((item)=>{
        item.addEventListener("click",()=>{
            listitem.forEach((li)=>{
                li.querySelector(".btn").classList.remove("clicked");
            })
            item.querySelector(".btn").classList.add("clicked");
            select_o_x.innerText=item.querySelector(".ite").innerText;
            console.log("when select : "+select_o_x.innerText);
            if(select_o_x.innerText==='X'){    // select_o_x.innerText is the 1st player
                select1_o_x.innerText="O";
               select1_o_x.style.color="rgb(63, 244, 17)";
               select_o_x.style.color="#e44507";
               O = false;
              getotruefalse = O;
            }else{
                select1_o_x.innerText="X";
                select_o_x.style.color="rgb(63, 244, 17)";
                select1_o_x.style.color="#e44507";
                O = true;
                getotruefalse = O;
            }
        });
        listitem[0].querySelector(".btn").classList.add("clicked");  // By default the X for 1st player
        select_o_x.innerText=listitem[0].querySelector(".x").innerText;
        select_o_x.style.color="#e44507";
        select1_o_x.innerText=listitem[1].querySelector(".o").innerText; // By default the O for 1st player
        select1_o_x.style.color="rgb(63, 244, 17)";
        console.log("no select : "+select_o_x.innerText);
        console.log("no select : "+select1_o_x.innerText);
    });
    info.addEventListener("submit",(e)=>{     // The addlistener is using for get player Name 
        pop.style.display = "none";
        gamediv.style.display = "block";
        e.preventDefault();
        const inputs =document.querySelectorAll('input[type="text"]');
        let inputvalue = [];
        inputs.forEach((input)=>{
            inputvalue.push(input.value);
        });
           person1 = inputvalue[0];
           person2 = inputvalue[1];
           player1stname.innerText = person1;
           player2ndname.innerText = person2;
    });

    // console.log(O);




let count=0;
let winpattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


const hide = ()=>{
    for (const i of boxes) {
        i.disabled=true;
    }
}
const show = ()=>{
    for (const i of boxes) {
        i.disabled=false;
    }
}

const empty = ()=>{
    for (const box of boxes) {
        box.innerText = "";
        count =0;
    }
}
const displaywinner = (winner)=>{
    if(winner==='O' && getotruefalse===true || winner==='X' && getotruefalse===false){
    namewiner.innerText = person1;
    winningpoint1st++;
    player1stwingame.innerText = winningpoint1st; 
    }else{
        namewiner.innerText = person2;
        winningpoint2nd++;
        player2ndwingame.innerText = winningpoint2nd;
    }
    over.innerText = "The Game is over";
    infomain.style.display = "block";
    count=0;
    hide(); // for disable all box
}
const checkWiner = (count,index)=>{
for(let pattern of winpattern){
    if(index===pattern[0] || index===pattern[1] || index===pattern[2]){
   let position1 = boxes[pattern[0]].innerText;
   let position2 = boxes[pattern[1]].innerText;
   let position3 = boxes[pattern[2]].innerText;
   console.log(position1,position2,position3);
   if(position1!=="" && position2!=="" && position3!==""){
    if(position1==position2 && position2==position3){
        displaywinner(position1);
    } else if(count==9)
    {
     winertext.innerText = "Both loser: ";
     over.innerText = "The Game is over";
     winnerdiv.classList.remove("disable");
    }
   }
}
}
}
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        if(O){
            box.innerText = "O";
            box.style.color="red";
            O = false;
        }else{
            box.innerText = "X";
            box.style.color="aqua";
            O=true;
        }

        box.disabled = true;
        count++;
        checkWiner(count,index);
    });
    
});

newBtn.addEventListener("click",()=>{
    // O = true;
    // empty();
    // show();
    infomain.style.display = "none";
    location.reload();
    });
btnReset.addEventListener("click",()=>{
    O = getotruefalse;
    empty();
    show();
    });
continu.addEventListener("click",()=>{
    O = getotruefalse;
    empty();
    show();
    infomain.style.display = "none";
    });



