const btn = document.getElementById('my-form')
var nameinput=document.getElementById('kb3')
var emailinput=document.getElementById('kb2')
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
        const obj={
            name,
            email
        }
        localStorage.setItem(emailinput.value,JSON.stringify(obj))
        // localStorage.setItem('email',emailinput.value)
        // let nameget=JSON.parse(localStorage.getItem('name'))
        // console.log(nameget)
        Object.keys(localStorage).forEach((key) => {
                k1=localStorage.getItem(key);
                detailsofpepole=JSON.parse(k1)
                // console.log(Object.keys(detailsofpepole))
                let b1 = Object.keys(detailsofpepole)
                const li =document.createElement('li')
                  b1.forEach(key => {
                    var k3 =document.createTextNode(`${detailsofpepole[key]}  : `)
                    li.appendChild(k3)
                  console.log(detailsofpepole[key])

            }

                )

                // console.log(detailsofpepole,'kb')

                userlist.appendChild(li)
        }
        )
    }
 }