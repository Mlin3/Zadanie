
+function() {
    window.addEventListener('DOMContentLoaded', function() {
        new Form(document.forms[0], 'imperial_march.mp3');
    });



    //Zarządzenie formularzem
    function Form(form, audioFile) {
        this.form = form;
        this.audio = new Audio(audioFile);

        this.form.addEventListener('submit', this.check.bind(this));
    }

    Form.prototype.check = function(oEvent) {
        var checked = this.form.querySelectorAll('[name="character"]:checked');
        var lightSide = this.form.querySelectorAll('[value="light_side"]:checked');

        if(checked.length && !lightSide.length) {
            this.audio.play();

            oEvent.preventDefault();
        }
    };
}();