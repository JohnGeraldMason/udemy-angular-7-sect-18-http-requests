import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeServers(servers: any[]) {
        this.http.post('https://udemy-ng-http-5c9e5.firebaseio.com/', servers);
    }
}