

document.getElementById('submit-butn').addEventListener('click',formValidations);
let Message=document.querySelector('.message');
let flag=1;



function myFlag(flag)
{
    if(flag==0)
    return false;
    return true;
}





function formValidations(e)
{
e.preventDefault();
 let fname=document.getElementById('first-name');


const pattern1 = /^[a-zA-Z ]*$/;

var patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]$/; 

const patternPhone=/^[1-9]{1}[0-9]{9}$/;

const phoneno=document.getElementById('my-phone');

const lname=document.getElementById('last-name');
const original=document.getElementById('original-pw');
const confirm=document.getElementById('confirm-pw');
const question=document.getElementById('security-ques');
const answer=document.getElementById('my-answer');


    if((fname.value.trim()=="") ||  !(fname.value.match(pattern1)))
    {

        fname.classList.add('error');
        document.getElementById('first-message').innerHTML="Enter valid first name"
        flag=0;

       return myFlag(flag);


    }
    else{
        fname.classList.remove('error');
        // document.getElementById('first-message').innerHTML="";
        Message.innerHTML="";
        flag=1
        // firstmessage.innerHTML="";
    }
    if((lname.value.trim()=="") ||  !(lname.value.match(pattern1)))
    {
        // alert('Invalid first name');   
        lname.classList.add('error');
        document.getElementById('second-message').innerHTML="Enter valid last name"
        flag=0;

       return myFlag(flag);
        
        
        
    }
    else{
        lname.classList.remove('error');
        document.getElementById('second-message').innerHTML="";
        flag=1;
        // firstmessage.innerHTML="";
    }

    if((original.value.trim()==""))
    {
        // alert('Invalid first name');   
        original.classList.add('error');
        document.getElementById('third-message').innerHTML="Enter valid Password";
        flag=0;

       return myFlag(flag);
        
    }
    else{
       original.classList.remove('error');
       document.getElementById('third-message').innerHTML="";
       flag=1;
    }
    if((confirm.value.trim()!=original.value.trim()))
    {
        // alert('Invalid first name');   
        confirm.classList.add('error');
        document.getElementById('fourth-message').innerHTML="Enter same password as above";

        flag=0;

       return myFlag(flag);
        
    }
    else{
       confirm.classList.remove('error');
       document.getElementById('fourth-message').innerHTML="";
       flag=1;
    }

    if((document.getElementById('myemail')).value.match(patternEmail) || document.getElementById('myemail').value=="")
    {
        // alert('Invalid first name');   
        document.getElementById('myemail').classList.add('error');
        document.getElementById('fifth-message').innerHTML="Enter valid email";

        flag=0;

       return myFlag(flag);
        
        
    }
    else{
        document.getElementById('myemail').classList.remove('error');
       document.getElementById('fifth-message').innerHTML="";
       flag=1;
    }

    let phonenum=document.getElementById('my-phone');
    if((phonenum.value.length>0)  &&  !(phonenum.value.match(patternPhone)))
    {
        phonenum.classList.add('error');
        document.getElementById('sixth-message').innerHTML="Enter valid phone number";

        flag=0;

       return myFlag(flag);
        
    }
    else{
        phonenum.classList.remove('error');
        document.getElementById('sixth-message').innerHTML="";
        flag=1;
    }

    if(question.value=="default")
    {
        question.classList.add('error');
        document.getElementById('seventh-message').innerHTML="Select a security question";

        flag=0;

       return myFlag(flag);
        
    }
    else{
        question.classList.remove('error');
        document.getElementById('seventh-message').innerHTML="";
        flag=1;
    }

    if(answer.value.trim()=="")
    {
        answer.classList.add('error');
        document.getElementById('eighth-message').innerHTML="Enter a valid answer";

        flag=0;

       return myFlag(flag);
        
    }
    else{
        answer.classList.remove('error');
        document.getElementById('eighth-message').innerHTML="";
        flag=1;
    }

    


    let myObj={
        FirstName:fname.value,
        LastName:lname.value,
        OrigPassword:original.value,
        ConfPassword:confirm.value,
        Email:document.getElementById('myemail').value,
        PhoneNumber:phonenum.value,
        Question:question.value,
        Answer:answer.value

    };

    const myJSONData=JSON.stringify(myObj);

    localStorage.setItem("FormData",myJSONData);


    const myLocalData=JSON.parse(localStorage.getItem("FormData"));
    // console.log(myLocalData);
        
        const table1=document.createElement('table');
        // table1.classList.add('table');
        table1.classList.add('table-bordered');
        



        const keysArray=Object.keys(myLocalData);
        const toptr1=document.createElement('tr');
        const thead1=document.createElement('thead');
        




        for(var i=0;i<keysArray.length/2;i++)
        {
            const th=document.createElement('th');
            // th.setAttribute('scope','col');
            th.style.width="20%";
            th.appendChild(document.createTextNode(`${keysArray[i]}`));

            // th.classList.add('my-th');
            
            toptr1.appendChild(th);
        }
        thead1.appendChild(toptr1);
        table1.appendChild(thead1);
       
        

        const valuesArray = Object.values(myLocalData);
        const row1=document.createElement('tr');
        row1.style.width="20%";
        const tbody1=document.createElement('tbody');
        for(var i=0;i<valuesArray.length/2;i++)
        {
            const col1=document.createElement('td');
            col1.appendChild(document.createTextNode(`${valuesArray[i]}`));
            row1.appendChild(col1);
        }
        tbody1.appendChild(row1)
        table1.appendChild(tbody1);

        document.querySelector('#table-parent').appendChild(table1);

// parttiton




        const table2=document.createElement('table');
        // table2.classList.add('table');
        table2.classList.add('table-bordered');
        const toptr2=document.createElement('tr');
        toptr2.style.width="20%"
        const thead2=document.createElement('thead');
        




        for(var i=keysArray.length/2;i<keysArray.length;i++)
        {
            const th=document.createElement('th');
            th.style.width="20%";
            // th.setAttribute('scope','col');
            th.appendChild(document.createTextNode(`${keysArray[i]}`));
            // th.classList.add('my-th');
            
            toptr2.appendChild(th);
        }
        thead2.appendChild(toptr2);
        table2.appendChild(thead2);










        const row2=document.createElement('tr');
        row2.style.width="25%";
        const tbody2=document.createElement('tbody');
        for(var i=valuesArray.length/2;i<valuesArray.length;i++)
        {
            const col=document.createElement('td');
            col.style.width="25%";
            col.appendChild(document.createTextNode(`${valuesArray[i]}`));
            row2.appendChild(col);
        }
        tbody2.appendChild(row2);
        table2.appendChild(tbody2);

        document.querySelector('#table-parent').appendChild(table2);

        table1.classList.add('table-properties');
        table2.classList.add('table-properties');

        

};



