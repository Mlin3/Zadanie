
+function() {
    window.addEventListener('DOMContentLoaded', function() {
        new Form(document.forms[0], 'imperial_march.mp3');
    });



    //Zarządzenie formularzem
    function Form(form, audioFile) {
        this.form = form;
        this.audio = new Audio(audioFile);
        this.audio.preload = 'auto';

        this.form.addEventListener('submit', this.check.bind(this));
    }

    Form.prototype.check = function(oEvent) {
        var checked = this.form.querySelectorAll('[name="character"]:checked');
        var yoda = document.getElementById('checkbox_yoda').checked;

        if(checked.length && !yoda) {
            this.audio.play();

            oEvent.preventDefault();
        }
    };
}();