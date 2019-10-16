var app = {
    
    card: document.getElementById('card'),
    ffs: document.getElementById('ffs'),
    popover :document.getElementById('popover'),
    bottomCard: document.getElementById('bottomCard'),
    htmlBar: document.getElementById('html'),
    cssBar: document.getElementById('css'),
    jsBar: document.getElementById('js'),

    getShadow() {
        app.card.classList.toggle('shadow');
    },

    handlePopover() {
        app.popover.classList.toggle('popover-hidden');
    },

    handleBar() {
        app.htmlBar.classList.toggle('neuf-cinq'); 
        app.cssBar.classList.toggle('neuf');
        app.jsBar.classList.toggle('huit-cinq');  
    },


    init: function(){
        console.log("coucou");
        app.card.addEventListener('mouseover', app.getShadow);
        app.card.addEventListener('mouseout', app.getShadow);

        app.ffs.addEventListener('mouseover', app.handlePopover);
        app.ffs.addEventListener('mouseout', app.handlePopover);

        app.bottomCard.addEventListener('mouseover', app.handleBar);
        app.bottomCard.addEventListener('mouseout', app.handleBar);
    }
}
app.init();


