import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
import * as _ from 'lodash';
import { FileSizePipe } from 'src/app/common/pipe/filesize.pipe';
import { UtilService } from 'src/app/common/service/util.service';
@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent implements OnInit {
  @Input()
  show: boolean;
  @Output()
  showEmiter: EventEmitter<boolean> = new EventEmitter();

  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
  options: UploaderOptions;

  url: string = "/api/myUpload";

  constructor(
    private utilService: UtilService
  ) {
    this.options = { concurrency: 1, maxUploads: 20 };
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
  }

  openMyDialog() {
    this.show = false;
    this.showEmiter.emit(this.show);
  }

  onUploadOutput(output: UploadOutput): void {
    // console.log(output);
    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue' && typeof output.file !== 'undefined') {
      //* 获取文件md5
      this.utilService.getFileMd5(output.file.nativeFile).subscribe({
        next: res => {
          console.log("md5:", res);
          //* 判断文件类型
          output.file.form.append("md5", res.data);
          this.files.push(output.file);
        },
        error: err => {

        }
      });  
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      console.log(output.file);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      console.log("移除文件");
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
      // this.startUpload();
    } else if (output.type === 'cancelled') {
      console.log("取消上传");
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    } else if (output.type === 'rejected' && typeof output.file !== 'undefined') {
      console.log(output.file.name + ' rejected');
    } else if (output.type === 'done') {
      console.log("上传结束:", output.file.response);
    }

    // this.files = this.files.filter(file => file.progress.status !== UploadStatus.Done);
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: this.url,
      method: 'POST',
      data: { foo: 'bar' }
    };
    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

  resume(id: string): void {
    console.log("更新前：", this.files);
    let index = _.findIndex(this.files, ["id", id]);
    if (index >= 0) {
      this.files[index].progress.status = 0;
      // let tmp_file = this.files[index];
      // this.files.splice(index, 1);
      // this.files.push(tmp_file);
      console.log("更新后：", this.files);
      this.startUpload();
    }
  }
}
