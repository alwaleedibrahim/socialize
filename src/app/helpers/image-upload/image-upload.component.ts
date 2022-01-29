import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  myFile: any
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event:any){
  //   console.log(event.target.files[0])
  //   this.myFile= event.target.files[0]
  }
  onUpload(){
  //   const formData = new FormData()
  //   formData.append('image', this.myFile, this.myFile.name)
  //   this._data.uploadImage(formData).subscribe(data=>console.log(data))
  }

}
