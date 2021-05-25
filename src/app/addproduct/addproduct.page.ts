import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { Camera } = Plugins;
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})

export class AddproductPage implements OnInit {

  id: any;
  guestPicture1
  guestPicture2
  guestPicture3
  guestPicture4
  guestPicture5
  constructor(private route: ActivatedRoute, private router: Router, private platform: Platform) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id, "this.id");
  }
  image1 = '';
  seletimage1() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) { } else { this.takePicture1(); }
  }

  async takePicture1() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture1 = profilePicture.base64String;
      this.image1 = this.guestPicture1;
      // this.guestPicture = this.b64toBlob(profilePicture.base64String, `image/${profilePicture.format}`);
    } catch (error) {
      // console.error(error);
    }
  }
  image2 = '';
  seletimage2() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) { } else { this.takePicture2(); }
  }

  async takePicture2() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture2 = profilePicture.base64String;
      this.image2 = this.guestPicture2;
      // this.guestPicture = this.b64toBlob(profilePicture.base64String, `image/${profilePicture.format}`);
    } catch (error) {
      // console.error(error);
    }
  }
  image3 = '';
  seletimage3() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) { } else { this.takePicture3(); }
  }

  async takePicture3() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture3 = profilePicture.base64String;
      this.image3 = this.guestPicture3;
      // this.guestPicture = this.b64toBlob(profilePicture.base64String, `image/${profilePicture.format}`);
    } catch (error) {
      // console.error(error);
    }
  }
  image4 = '';
  seletimage4() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) { } else { this.takePicture4(); }
  }

  async takePicture4() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture4 = profilePicture.base64String;
      this.image4 = this.guestPicture4;
      // this.guestPicture = this.b64toBlob(profilePicture.base64String, `image/${profilePicture.format}`);
    } catch (error) {
      // console.error(error);
    }
  }
  image5 = '';
  seletimage5() {
    const isAvailable = Capacitor.isPluginAvailable('Camera');
    if (!isAvailable) { } else { this.takePicture5(); }
  }
  submit1() {
    let formData: FormData = new FormData();
    if (this.image1 != '') {
      var json_image = [];
      var obj = { "img_id": "1", "name": this.image1 };
      json_image.push(obj);
    }


    if (this.image2 != '') {
      var obj = { "img_id": "2", "name": this.image2 };
      json_image.push(obj);
    }
    console.log(json_image);

  }
  async takePicture5() {
    try {
      const profilePicture = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
      });
      this.guestPicture5 = profilePicture.base64String;
      this.image5 = this.guestPicture5;
      // this.guestPicture = this.b64toBlob(profilePicture.base64String, `image/${profilePicture.format}`);
    } catch (error) {
      // console.error(error);
    }
  }

  public b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    console.log(blob, "multiple");
    return blob;
  }
  Removeimage1() {
    this.image1 = '';
    // this.guestPicture1='';
  }
  Removeimage2() {
    this.image2 = '';
    // this.guestPicture2='';
  }
  Removeimage3() {
    this.image3 = '';
    // this.guestPicture3='';
  }
  Removeimage4() {
    this.image4 = '';
    // this.guestPicture4='';
  }
  Removeimage5() {
    this.image5 = '';
    // this.guestPicture5='';
  }
}
