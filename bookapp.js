const btn = document.getElementById('my-form')
var nameinput=document.getElementById('kb3')
var emailinput=document.getElementById('kb2')
var descriptioninput=document.getElementById('description')
var msg =document.getElementById('kb5')
var userlist=document.getElementById('mylist')
btn.addEventListener('submit',adduser);

 function adduser(e){
    e.preventDefault();
    if (nameinput.value==='' || emailinput.value===''){
        msg.calasslist.add('error')
        msg.innerHTML='please enter all the field';
    }
    else{
        
        name=nameinput.value
        email=emailinput.value
        description1=description.value
        const obj={
            name,
            email
        }
        
        const li =document.createElement('li')
          let k =name + "-" + email +"-" + description1
          console.log(k)
          
          var k3 =document.createTextNode(k)
          li.appendChild(k3)
                // console.log(detailsofpepole,'kb')
                userlist.appendChild(li)
                var deleteb= document.createElement('button')
                deleteb.className='btn btn-danger btn-sm float-right delete'
                deleteb.appendChild(document.createTextNode('edit'))
                li.appendChild(deleteb)
               userlist.appendChild(li)

                var deletebtn = document.createElement('button')
                deletebtn.className='polynumer'
                deletebtn.appendChild(document.createTextNode('delete'))
                li.appendChild(deletebtn)
               userlist.appendChild(li)            
        }
        

    }
 
 userlist.addEventListener('click',remove23)
 function remove23(e){
     if (e.target.classList.contains('delete')){
         if (confirm('are you sure? you want to edit')){
             var li = e.target.parentElement
             userlist.removeChild(li)
         }
     }
    }
    userlist.addEventListener('click',removeitem)
 function removeitem(e){
     if (e.target.classList.contains('polynumer')){
         if (confirm('are you sure? you want to delete')){
             var li = e.target.parentElement
             userlist.removeChild(li)
         }
     }
    }