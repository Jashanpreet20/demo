const form=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');



form.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();

    const myobj ={
        name:nameInput.value,
        email:emailInput.value
    }
    localStorage.setItem('myobj',JSON.stringify(myobj));
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


