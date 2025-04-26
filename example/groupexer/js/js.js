document.getElementById("button").addEventListener('click', function(){
    const input = document.getElementById("input").value;
    const box = document.getElementById("box");
    const btn = document.getElementById("button");
    if(input){
         box.style.backgroundColor=input;
         btn.style.backgroundColor=input;
    }
    else{
        alert("please enter a color name!");
    }
});
