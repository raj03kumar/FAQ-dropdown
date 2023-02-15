// Get elements from the DOM
const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

// Select all 'q' elements
for(let i=0; i<q.length; i++){
    // Add click event to all 'q' elements
    q[i].addEventListener('click', ()=>{
        // Open the a 'element' with the same 'i' as the clicked 'q' element
        a[i].classList.toggle('a-opened');
        // Rotate the arr 'element' with the same 'i' as the clicked 'q' element
        arr[i].classList.toggle('arrow-rotated');
    });
}

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};