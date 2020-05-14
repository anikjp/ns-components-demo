import { Component } from "@angular/core";
import { action } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    templateUrl: "./action-dialog.component.html"
})
export class ActionDialogComponent {
    displayActionDialog() {
        // >> action-dialog-code
        let options = {
            title: "Race selection",
            message: "Choose your race",
            cancelButtonText: "Cancel",
            actions: ["Human", "Elf", "Dwarf", "Orc", "Unicorn"]
        };

        action(options).then((result) => {
            console.log(result);
        });
        // << action-dialog-code
    }
}
