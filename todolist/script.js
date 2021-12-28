function enterfunction(e){
    if(e.keyCode === 13){
        // e.preventDefault(); // Ensure it is only this code that runs
        // alert("Enter was pressed was presses");
        afterenter();


    }

    

}
function afterenter(){
    var newitem = document.createElement('li');
    newitem.innerHTML =inp1.value+'<i class="fas fa-trash-alt"></i>'
    unorderlist.appendChild(newitem);
    document.querySelectorAll('i').forEach(item1) 
}

function trashfunc(){
   this.parentElement.remove()
}

function item1(item){
    item.addEventListener('click', trashfunc)
    
}


var inp1 = document.getElementById('textbox');
var list = document.getElementById('item');
var cont = document.getElementById('cont')
var unorderlist = document.getElementById('list')
inp1.addEventListener('keypress',enterfunction);
document.querySelectorAll('i').forEach(item1) 
    


