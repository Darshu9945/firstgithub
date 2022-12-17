var from = document.getElementById('addForm')
var itemlist = document.getElementById('items')
from.addEventListener('submit',additem)
itemlist.addEventListener('click',removeitem)
 function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item').value;
    var li = document.createElement("li")
    li.className='list-group-item'
    var k1 = document.createTextNode(newitem)
    li.appendChild(k1)
    var deletebtn = document.createElement('button')
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    deletebtn.appendChild(document.createTextNode('x'))
    li.appendChild(deletebtn)
    itemlist.appendChild(li)

 }
 function removeitem(e){
    if (e.target.classList.contains('delete')){
        if (confirm('are you sure')){
            var li = e.target.parentElement
            itemlist.removeChild(li)
        }
    }
    

 }