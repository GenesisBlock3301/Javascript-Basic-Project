let add = document.getElementById('add');

add.addEventListener('click',()=>{
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []
        itemJsonArray.push([tit,desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }
});