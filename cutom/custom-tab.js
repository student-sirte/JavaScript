const tabcontainer=document.querySelector('.container');
const tabButtons=document.querySelectorAll('.tab-button');
const tabcontents=document.querySelectorAll('.content');
tabcontainer.addEventListener('click',(event)=>{
console.log(event.target.dataset);
const currentId=event.target.dataset.id;

if(currentId){
    tabButtons.forEach(btn => {
        btn.classList.remove("active")
    });
        event.target.classList.add("active");
        tabcontents.forEach((content)=>{
            content.classList.remove("active");
        });
        const currentElement=document.getElementById(currentId)
        currentElement.classList.add("active");
        

    }
})