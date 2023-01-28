const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');



form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    var showlist=[];
   var name=nameInput.value;
   var email=emailInput.value;
    var myobj ={
       name,
       email
    }
    showlist.push(myobj);
    localStorage.setItem(myobj.name,JSON.stringify(showlist));
    // localStorage.setItem('name',nameInput.value);
    // localStorage.setItem('email',emailInput.value);
     
    if(nameInput.value ==='' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML='please enter all field';

        setTimeout(() => msg.remove(),3000);
    }else{
        var li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : 
        ${emailInput.value}`));
        
        userlist.appendChild(li);

        //clear the fields

        nameInput.value='';
        emailInput.value='';

    }
}


