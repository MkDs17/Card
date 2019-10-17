var app = {
    
    card: document.getElementById('card'),
    ffs: document.getElementById('ffs'),
    popover :document.getElementById('popover'),
    bottomCard: document.getElementById('bottomCard'),

    getShadow() {
        app.card.classList.toggle('shadow');
    },

    handlePopover() {
        app.popover.classList.toggle('popover-hidden');
    },


    init: function(){
        console.log("coucou");
        app.card.addEventListener('mouseover', app.getShadow);
        app.card.addEventListener('mouseout', app.getShadow);

        app.ffs.addEventListener('mouseover', app.handlePopover);
        app.ffs.addEventListener('mouseout', app.handlePopover);

    }
}
app.init();


