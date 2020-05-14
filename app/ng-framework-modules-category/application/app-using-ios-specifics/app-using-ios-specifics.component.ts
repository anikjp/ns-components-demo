import { Component } from "@angular/core";
import { android as androidApp, ios as iosApp } from "tns-core-modules/application";
import { ios as iosUtils } from "tns-core-modules/utils/utils";

@Component({
    moduleId: module.id,
    templateUrl: "./app-using-ios-specifics.component.html"
})
export class AppUsingIosExampleComponent {

    public isItemVisible: boolean;
    public batteryLife: number;
    public goodToRemove: boolean = false;

    constructor() {

        if (iosApp) {
            // >> app-class-properties-ios
            // import { ios as iosApp } from "tns-core-modules/application";

            // https://developer.apple.com/documentation/uikit/uiapplicationdelegate?language=objc
            let delegate = iosApp.delegate; // the iOS application delegate

            let nativeApp = iosApp.nativeApp; // The native iOS app

            // https://developer.apple.com/documentation/uikit/uiwindow/1621581-rootviewcontroller?language=objc
            let rootController = iosApp.rootController; // the iOS rootViewController

            let window = iosApp.window; // UIWindow
            // << app-class-properties-ios

            this.isItemVisible = true;
            this.batteryLife = 0;

            // >> app-ios-observer-code
            iosUtils["getter"](UIDevice, UIDevice.currentDevice).batteryMonitoringEnabled = true;
            this.batteryLife = +(iosUtils["getter"](UIDevice, UIDevice.currentDevice).batteryLevel * 100);

            let that = this;
            let observer = iosApp.addNotificationObserver(UIDeviceBatteryLevelDidChangeNotification,
                function onReceiveCallback(notification: NSNotification) {
                    that.batteryLife = +(iosUtils["getter"](UIDevice, UIDevice.currentDevice).batteryLevel * 100);
                });
            // << app-ios-observer-code

            if (this.goodToRemove) {
                // >> app-ios-observer-remove-code
                // When no longer needed, remove the notification observer
                iosApp.removeNotificationObserver(observer, UIDeviceBatteryLevelDidChangeNotification);
                // << app-ios-observer-remove-code
            }
        } else if (androidApp) {
            this.isItemVisible = false;
        }
    }
}
