

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
        
        const table=document.createElement('table');
        // table.classList.add('table');
        table.classList.add('my-table');
        



        const keysArray=Object.keys(myLocalData);
        const tr=document.createElement('tr')
        const thead=document.createElement('thead');
        




        for(var i=0;i<keysArray.length/2;i++)
        {
            const th=document.createElement('th');
            th.classList.add('table-props');
            // th.setAttribute('scope','col');
            // th.style.width="20%";
            th.appendChild(document.createTextNode(`${keysArray[i]}`));

            // th.classList.add('my-th');
            
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        table.appendChild(thead);
       
        

        const valuesArray = Object.values(myLocalData);
        const row=document.createElement('tr');
        // row1.style.width="20%";
        const tbody=document.createElement('tbody');

        for(var i=0;i<valuesArray.length/2;i++)
        {
            const col=document.createElement('td');
            col.appendChild(document.createTextNode(`${valuesArray[i]}`));
            col.classList.add('table-props');
            row.appendChild(col);
        }
        tbody.appendChild(row)
        table.appendChild(tbody);

        // document.querySelector('#table-parent').appendChild(table);



        //  document.querySelector('#table-parent').appendChild(table);
         document.body.appendChild(table);

        // table.classList.add('table-properties');


// parttiton




        // const table=document.createElement('table');
        // // table.classList.add('table');
        // table.classList.add('table-bordered');
        // const tr=document.createElement('tr');
        // tr.style.width="20%"
        // const thead=document.createElement('thead');
        
        
        // document.querySelector('#table-parent').appendChild(table);

        // table.classList.add('table-properties');
        // table.classList.add('table-properties');




        // for(var i=keysArray.length/2;i<keysArray.length;i++)
        // {
        //     const th=document.createElement('th');
        //     th.style.width="20%";
        //     // th.setAttribute('scope','col');
        //     th.appendChild(document.createTextNode(`${keysArray[i]}`));
        //     // th.classList.add('my-th');
            
        //     tr.appendChild(th);
        // }
        // thead.appendChild(tr);
        // table.appendChild(thead);










        // const row2=document.createElement('tr');
        // row2.style.width="25%";
        // const tbody2=document.createElement('tbody');
        // for(var i=valuesArray.length/2;i<valuesArray.length;i++)
        // {
        //     const col=document.createElement('td');
        //     col.style.width="25%";
        //     col.appendChild(document.createTextNode(`${valuesArray[i]}`));
        //     row2.appendChild(col);
        // }
        // tbody2.appendChild(row2);
        // table.appendChild(tbody2);

        // document.querySelector('#table-parent').appendChild(table);

        // table.classList.add('table-properties');
        // table.classList.add('table-properties');

        

};



