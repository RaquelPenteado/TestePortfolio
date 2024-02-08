
document.addEventListener('DOMContentLoaded', function() {
    let barNavIcon = document.querySelector('.fa-bars-staggered');
    let menuHidden = document.querySelector('.menu-items-mobile');
    let itemsActive = document.querySelectorAll('.items-mobile');
    
    barNavIcon.addEventListener('click', function() {
        this.classList.toggle('fa-xmark');
        menuHidden.classList.toggle('hidden');
    });
    

    itemsActive.forEach(function(item) {
        item.addEventListener('click', function(event) {            
            itemsActive.forEach(function(item) {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
