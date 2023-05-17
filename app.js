

function myValidations()
{
 const fname=document.getElementById('first-name');


const pattern1 = /^[a-zA-Z ]*$/;

const phone=/^[1-9]{1}[0-9]{9}$/;

const phoneno=document.getElementById('my-phone');

const lname=document.getElementById('last-name');
const original=document.getElementById('original-pw');
const confirm=document.getElementById('confirm-pw');


    if(!(fname.value.match(pattern1)))
    {
        alert('First name should have letters and spaces only');   
        return false;
        
    }
    if(!(lname.value.match(pattern1)))
    {
        alert('Last name should have letters and spaces only');   
        return false;
        
    }
    if(original.value!=confirm.value)
    {
        alert('Passwords should match');
        return false;
    }

    if(!(phoneno.value.match(phone)))
    {
        alert('Not a valid phone no.');
        return false;
    }













    return true;
   
}


