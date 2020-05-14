In order to use the HTTP the first thing to do is to declare our NativeScript wrapper in the respective module file

```
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
...
@NgModule({
    imports: [
        NativeScriptHttpClientModule
    ]
```

Using the POST method by creating a service file to keep the HTTP logic separated from the component file.
<snippet id='http-post-service'/>

Finally, we can provide our service in our component. Note that the services should be explicitly declared in `providers`
and then should be provided as an argument in our component's constructor.
<snippet id='http-post-component'/>



