import { Injectable } from '@angular/core';
import * as SparkMd5 from "spark-md5"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  getFileMd5(file: File, chunkSize: number = 2097152):Observable<any> {
    let blobSlice = File.prototype.slice,                     // Read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMd5.ArrayBuffer(),
      fileReader = new FileReader();
    
    return Observable.create(observer=>{
      fileReader.onload = function (e: any) {
        console.log('read chunk nr', currentChunk + 1, 'of', chunks);
        spark.append(e.target.result);                   // Append array buffer
        currentChunk++;
  
        if (currentChunk < chunks) {
          loadNext();
        } else {
          console.log('finished loading');
          
          let md5 = spark.end();
          console.info('computed hash', md5);  // Compute hash
          observer.next({
            data:md5
          })
          observer.complete();
        }
      }
      fileReader.onerror = function () {
        console.warn('oops, something went wrong.');
        observer.next({
          error:'oops, something went wrong.'
        })
        observer.complete();
      };
  
      function loadNext() {
        var start = currentChunk * chunkSize,
          end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
  
        fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
      }
      loadNext();
    })
  }
}
