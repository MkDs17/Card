var app = {
    
    card: document.getElementById('card'),

    getShadow: function() {
        app.card.classList.toggle('shadow');
    },


    init: function(){
        console.log("coucou");
        app.card.addEventListener('mouseover', app.getShadow);
        app.card.addEventListener('mouseout', app.getShadow);
    }
}
app.init();