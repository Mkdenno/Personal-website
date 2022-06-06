const inputName=document.getElementById("name");
const inputMail=document.getElementById("mail");
const inputMassage=document.getElementById("message");
const buttonEl=document.getElementById("submit");
const allProjects=document.getElementById("all");
const javaScript=document.getElementById("js");
const html=document.getElementById("html");


buttonEl.addEventListener("click", (e)=>{
    if(inputName.value=="")
    {
        alert("Please fill all the fields");
    }
    else if(inputMail==""){
        alert("please enter your Email")
    }
    else if(inputMassage==""){
        alert("please leave a message")
    }
    
    else{

        let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!emailFormat.test(inputMail)){
            alert("Submitted Successfully");
        }
        else{
            alert('Email not valid')
        }
        
    }
})
function check(){ 
    let dots=document.getElementById("dots");
    let more=document.getElementById("more");
    let button=document.getElementById("button");

    if(dots.style.display==="none"){
        dots.style.display="inline";
        button.innerHTML="Read More";
        more.style.display="none";

    }
    else{
        dots.style.display="none";
        button.innerHTML="Read Less";
        more.style.display="inline";

    }
}
