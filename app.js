const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");


const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");

const Survey = document.querySelector(".Survey");
const end = document.querySelector(".end");



ul_1.addEventListener("click", () => {
    q1.style.display = "none";
    q2.style.display = "block";
});
ul_2.addEventListener("click",()=>{
    q2.style.display="none";
    q3.style.display="block";
});
ul_3.addEventListener("click",()=>{
    q2.style.display="none";
    Survey.style.display="none";
   end.style.display="block";
});
