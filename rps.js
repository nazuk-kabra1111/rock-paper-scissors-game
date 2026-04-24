let userscore=0;
let compscore=0;
let choice=document.querySelectorAll(".options button");
let text=document.querySelector(".select");
let txt=document.querySelector(".computer");
let sc1=document.querySelector(".num1");
let sc2=document.querySelector(".num2");
let rstbtn=document.querySelector(".xyz");
txt.classList.add("cdef");
rstbtn.classList.add("cdef");

const gameplay=(userchoice)=>{
    let ch=["rock","paper","scissors"];
    let ans=Math.floor(Math.random()*3);
    let compchoice=ch[ans];
    checkwinner(userchoice,compchoice);
}

const checkwinner=(userchoice,compchoice)=>{
    if(userchoice==="rock"){
        if(compchoice==="paper"){
            compscore=compscore+1;
            text.innerText="You Lost! Select Again";
            text.classList.add("lost");
            text.classList.remove("win");
            sc2.innerText=compscore;
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else if(compchoice==="scissors"){
            userscore+=1;
            text.innerText="You Won!";
            text.classList.add("win");
            text.classList.remove("lost");
            sc1.innerText=userscore;
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else{
            text.innerText="TIE";
            text.classList.remove("lost");
            text.classList.remove("win");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
    }
    else if(userchoice==="paper"){
        if(compchoice==="rock"){
            userscore+=1;
            sc1.innerText=userscore;
            text.innerText="You Won!";
            text.classList.add("win");
            text.classList.remove("lost");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else if(compchoice==="scissors"){
            compscore+=1;
            sc2.innerText=compscore;
            text.innerText="You Lost! Select Again";
            text.classList.add("lost");
            text.classList.remove("win");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else{
            text.innerText="TIE";
            text.classList.remove("lost");
            text.classList.remove("win");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
    }
    else{
        if(compchoice==="rock"){
            compscore+=1;
            text.innerText="You Lost! Select Again";
            text.classList.add("lost");
            text.classList.remove("win");
            sc2.innerText=compscore;
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else if(compchoice==="paper"){
            userscore+=1;
            sc1.innerText=userscore;
            text.innerText="You Won!";
            text.classList.add("win");
            text.classList.remove("lost");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
        else{
            text.innerText="TIE";
            text.classList.remove("lost");
            text.classList.remove("win");
            txt.classList.remove("cdef");
            txt.innerText=`Computer chose ${compchoice}`;
        }
    }
}
rstbtn.addEventListener("click",()=>{
    sc1.innerText=0;
    sc2.innerText=0;
    txt.classList.add("cdef");
    text.innerText="Pick Your Move";
    text.classList.remove("lost");
    text.classList.remove("win");
    userscore=0;
    compscore=0;
})

for(let opt of choice){
    opt.addEventListener("click",()=>{
        rstbtn.classList.remove("cdef");
        const userchoice=opt.getAttribute("class");
        gameplay(userchoice);
    })
}