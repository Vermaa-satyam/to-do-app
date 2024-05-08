const inputbox = document.getElementById('input-box');
const container=document.getElementById('list-container');

function addtask(){
    if(inputbox.value === ''){
        alert("please enter your task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputbox.value;
        container.appendChild(li);
        inputbox.value = '';
        let span = document.createElement('span');
        span.innerHTML="&#x00D7"
        li.appendChild(span)
        save() 
    }
}
 container.addEventListener('click' ,function(e){
 if(e.target.tagName==='LI'){
     e.target.classList.toggle('checked');
     save()
 }
 else if (e.target.tagName==='SPAN'){
      let r = e.target.parentElement.remove()
      save()

 }
  } , false) 
 
  function save(){
    localStorage.setItem("data" , container.innerHTML)
  }

  function show(){
    container.innerHTML = localStorage.getItem("data")
  }
   
  show()