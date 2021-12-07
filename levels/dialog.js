var dialogs = [];
var level_dialog;

// divs
var left_img = document.getElementById("left_img");
var right_img = document.getElementById("right_img");
var dialog_name = document.getElementById("dialog_current_name");
var dialog_text = document.getElementById("dialog_text");

class Dialog {
    constructor(level_number) {
        this.dialog = [];
        this.index = 0;
        this.level_number = level_number;
        this.current_dialog = {
            image_right_src: "",
            image_left_src: "",
            dialog_name: "",
            dialog_text: "",
        };
    }
    readDialog() {
        fetch("dialogs.json")
            .then(response => response.json())
            .then(data => this.save_in(data));
            level_dialog.show_dialog();
    }

    save_in(json) {
        dialogs = json["dialogs"];
        this.dialog = dialogs[this.level_number - 1];
        
        this.current_dialog = {
            image_right_src: this.dialog["dialog_image_right"],
            image_left_src: this.dialog["dialog_image_left"],
            dialog_name: this.dialog["dialog_name_left"],
            dialog_text: this.dialog["texts"][0],
        }
    }

    show_dialog() {
        if(this.index >= this.dialog["texts"].length)
        {
            document.getElementById("main_dialog").hidden = true;
            return; 
        }
            
        if(this.index % 2 == 0) {
            dialog_name.innerText = this.dialog["dialog_name_right"];
        }
        else {
            dialog_name.innerText = this.dialog["dialog_name_left"];
        }
        dialog_text.innerText = this.dialog["texts"][this.index];
        this.index++;
        left_img.src = this.dialog["dialog_image_left"];
        right_img.src = this.dialog["dialog_image_right"];
        dialog_next_btn.innerText = "next";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("loadiing jsons");
    level_dialog = new Dialog(1);
    level_dialog.readDialog();
});

var nextButton = document.getElementById('dialog_next_btn');
nextButton.addEventListener("click", function () {
    level_dialog.show_dialog();
})