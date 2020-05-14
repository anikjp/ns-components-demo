// >> http-post-service
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MyHttpPostService {
    private serverUrl = "https://httpbin.org/post";

    constructor(private http: HttpClient) { }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl, { data }, { headers: options });
    }

    private createRequestOptions() {
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });
        return headers;
    }
}
// << http-post-service
