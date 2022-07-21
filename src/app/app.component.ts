import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Snippet } from './snippet';
import { SnippetService } from './snippet.service';
import { ClipboardService } from 'ngx-clipboard';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { SnippetComponent } from './snippet/snippet.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  public category_snippets : Array<Snippet> = new Array<Snippet>();
  title = 'code-snippets-manager-web';
  public snippets: Array<Snippet> = new Array<Snippet>();


  constructor(private snippetsService : SnippetService,private clipboard : ClipboardService,private matdialog : MatDialog){}


  ngOnInit(): void {
    this.getAllSnippets();
  }

  public getAllSnippets(): void {
    this.snippetsService.getAllSnippets().subscribe(
      (response : Array<Snippet>) => {
        this.snippets = response;
      },
      (error : HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  copycode(s : Snippet){
    this.clipboard.copy(s.code)
  }



  open(): void {
    const dialogRef = this.matdialog.open(SnippetComponent, {
      width: '300',
      height:'700px',
      backdropClass: 'custom-dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {

      }
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }


  filterByCategory(category: string){
    this.snippetsService.getSnippets(category).subscribe(
      (response : Array<Snippet>) =>{
        this.snippets = response;
      },
      (error : HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
 
}
