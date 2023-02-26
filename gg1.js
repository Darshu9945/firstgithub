var itemlist=document.getElementById('items');
var addform = document.getElementById('addForm')
addform.addEventListener('click',additem)
itemlist.addEventListener('click',removeitem)
function removeitem(e){
    e.target.classList.contains('list-group')
    var v1 = e.target.parentElement
    console.log(v1)
    // itemlist.removeChild(v1)
    itemlist.removeChild(v1)
}
function additem(e){
    e.target.classList.contains('form-control mr-2')
    console.log(1)
    var v1 = e.target.parentElement
    console.log(v1)
    addform.remove(v1)
}