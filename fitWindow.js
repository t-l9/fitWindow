(function() {

    /********************
    Constructor
    ********************/
    this.fitWindow = function() {

        if (arguments[0] && typeof arguments[0] === "string") {
            this.section = arguments[0];
        } else {
            console.log('Error: Please enter an Element ID as a string. e.g: var foo = new fitWindow(\'hero\')');
        };

        this.resizeSection = function() {
            hero = document.getElementById(this.section);
            hero.style.height = window.innerHeight;
            hero.style.width = window.innerWidth;
        };

        this.init = function(){
            this.events();
            this.resizeSection();
        };
    };

    /********************
    Public Methods
    ********************/
    fitWindow.prototype.events = function () {
        initEvents.call(this);
    }

    /********************
    Private functions
    ********************/
    function initEvents() {
        var self = this
        window.addEventListener('resize', function() {
            self.resizeSection();
        });
    }
})();
