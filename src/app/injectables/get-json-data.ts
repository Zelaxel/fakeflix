import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class GetJsonData {
    async get(path: string) {
        const response = await fetch(path);
        if(!response) throw new Error("Couldn't get data.");
        return await response.json();
    }
}