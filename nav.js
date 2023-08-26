let toggle= document.querySelector('.nave-toggle');
let sidebar= document.querySelector('.sidebar');

toggle.addEventListener('click', function(){
    if(toggle.firstElementChild.classList.contains('click')){
        toggle.firstElementChild.classList.replace('click', "clickedsuccessfully");
    }else{
        toggle.firstElementChild.classList.replace('clickedsuccessfully', "click");
    }

    sidebar.classList.toggle('show_sidebar');
   
})




