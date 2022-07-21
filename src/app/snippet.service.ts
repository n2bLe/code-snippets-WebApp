import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Snippet } from "./snippet";
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {
  private apiServerUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllSnippets():Observable<Snippet[]>{
    return this.http.get<Snippet[]>(`${this.apiServerUrl}/all`)
}

public getSnippets(category : string):Observable<Snippet[]>{
    return this.http.get<Snippet[]>(`${this.apiServerUrl}/categories/${category}`)
}

public getOneSnippet(name : string):Observable<Snippet>{
    return this.http.get<Snippet>(`${this.apiServerUrl}/categories/filter/${name}`)
}

public addSnippet(snippet : Snippet):Observable<Snippet>{
    return this.http.post<Snippet>(`${this.apiServerUrl}/add`,snippet)
}

public updateSnippet(snippet : Snippet,name : string):Observable<Snippet>{
    return this.http.put<Snippet>(`${this.apiServerUrl}/update/${name}`,snippet)
}

public deleteSnippet(name : string):Observable<Snippet>{
    return this.http.delete<Snippet>(`${this.apiServerUrl}/delete/${name}`,)
}
}
