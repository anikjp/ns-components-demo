// >> scroll-view-event-code
import { Component } from "@angular/core";
import { setTimeout } from "tns-core-modules/timer";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";

@Component({
    moduleId: module.id,
    // >> (hide)
    styleUrls: ["./style.css"],
    // << (hide)
    templateUrl: "./scroll-event.component.html"
})
export class ScrollEventComponent {

    public status = "not scrolling";

    public onScroll(args: ScrollEventData) {
        this.status = "scrolling";

        setTimeout(() => {
            this.status = "not scrolling";
        }, 300);

        console.log("scrollX: " + args.scrollX);
        console.log("scrollY: " + args.scrollY);
    }
}
// << scroll-view-event-code
