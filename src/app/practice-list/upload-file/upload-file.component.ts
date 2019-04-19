import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  show:boolean=false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.backdropClass = null;
    const dialogRef = this.dialog.open(DialogTest, {
      backdropClass: "test",
      panelClass:'my_panel',
      width: '650px',
      height:'600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  openMyDialog(){
    this.show = !this.show;
  }

}


@Component({
  selector: 'dialog-test',
  templateUrl: 'dialog.html',
  styleUrls: ['./upload-file.component.css']
})
export class DialogTest {
  constructor(
    public dialogRef: MatDialogRef<DialogTest>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}