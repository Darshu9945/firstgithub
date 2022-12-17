var from = document.getElementById('addForm')
var itemlist = document.getElementById('items')
var filter = document.getElementById('filter')

from.addEventListener('submit',additem)
itemlist.addEventListener('click',removeitem)
filter.addEventListener('keyup',filteritem)
 function additem(e){
    e.preventDefault();
    var newitem = document.getElementById('item').value;
    var newitem1 = document.getElementById('item1').value
    var li = document.createElement("li")
    li.className='list-group-item'
    var k1 = document.createTextNode('Item '+newitem)
    var k2 = document.createTextNode(" "+newitem1)
    li.appendChild(k1)
    li.appendChild(k2)
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
 function filteritem(e){
    var text =e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function(item){
        var itemName = item.childNodes[0].textContent;
        var description = item.childNodes[1].textContent
        if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1 ){
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
      