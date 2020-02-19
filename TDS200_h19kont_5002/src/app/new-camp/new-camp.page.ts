import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from "uuid";
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from "rxjs/operators";
import sightscards from '../Models/Campsmodel';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-camp',
  templateUrl: './new-camp.page.html',
  styleUrls: ['./new-camp.page.scss'],
})
export class NewCampPage implements OnInit {

  private cameraPreview: string = "";
  myTitle:any;
  myDescription:any;
  myPosition:any;

  constructor(
    private camera: Camera,
    private firestorage: AngularFireStorage,
    private firestore: AngularFirestore,
    private firebaseauth: AngularFireAuth,
    private route: ActivatedRoute, private router: Router
  ) { }

  async takePicture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    try {
      const imageData = await this.camera.getPicture(cameraOptions);
      this.cameraPreview = imageData;
    } catch (e) {
      console.log(e);
    }
  }

  async postToFirebase() {
    const uploadedImageUrl = await this.uploadImageToFirestorage();
    const postsCollectionRef = this.firestore.collection<sightscards>("Camps");
    const loggedInUser = await this.firebaseauth.authState.pipe(first()).toPromise();
    //const l = await this.firebaseauth.auth.currentUser.email;

    await postsCollectionRef.add({
      title: this.myTitle,
      imageUrl: uploadedImageUrl,
      user: loggedInUser.email,
      description: this.myDescription,
      position: this.myPosition
    });

  }

  async uploadImageToFirestorage() {
    const fileName = `tds-${uuid()}.png`;
    console.log(fileName);
    const firestorageFileRef = this.firestorage.ref(fileName);
    const uploadTask = firestorageFileRef.putString(
      this.cameraPreview,
      'base64',
      { contentType: 'image/png' }
    );
    await uploadTask.then();
    return firestorageFileRef.getDownloadURL().toPromise();
  }

  async goback() {
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
