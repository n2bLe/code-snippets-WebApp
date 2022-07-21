import { LOCATION_INITIALIZED } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Snippet } from 'app/snippet';
import { SnippetService } from 'app/snippet.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  local_data : Snippet;
  apiServerUrl = environment.baseUrl;
  snippets: Snippet[] = [];

  constructor(private Ref: MatDialogRef<Snippet>, @Optional() @Inject(MAT_DIALOG_DATA) public data : Snippet,private service: SnippetService,private http: HttpClient) { 
      this.local_data = data;
      service.addSnippet(this.local_data)

  }

  add(){
    this.service.addSnippet(this.local_data).subscribe(snippet =>
      {
        this.snippets.push(snippet);
      })
  }

  ngOnInit(): void {
  }


}
