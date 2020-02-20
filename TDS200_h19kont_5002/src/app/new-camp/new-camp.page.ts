import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuid } from "uuid";
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from "rxjs/operators";
import Campsmodel from '../Models/Campsmodel';
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


  // Async funksjon for å ta bilde, der vi setter kvalitet på bilde til 100, som betyr at kvalitet skal være like bra som kameraet
  // Vi lager også en data-url til bildet som blir tatt, også encoder det til å bli et JPEG format. 
  async takePicture() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    // Her henter vi frem kameraet så det er mulighet for å se hvordan bilde ser ut mens man tar det. 
    // Altså en kamera preview.
    try {
      const imageData = await this.camera.getPicture(cameraOptions);
      this.cameraPreview = imageData;
    } catch (e) {
      console.log(e);
    }
  }

  // Her poster vi bilde sin url, våres collection av titel, imageurl, bruker, beskrivelse og posisjonen opp til databasen i firebase.
 // vi kaller også på uploadImageTofirestorage som er en funksjon lengre nede, som velger hvordan vi skal laste opp bilde til databasen
 // for å se kalle på funksjonen her
  async postToFirebase() {
    const uploadedImageUrl = await this.uploadImageToFirestorage();
    const postsCollectionRef = this.firestore.collection<Campsmodel>("Camps");
    const loggedInUser = await this.firebaseauth.authState.pipe(first()).toPromise();

    await postsCollectionRef.add({
      title: this.myTitle,
      imageUrl: uploadedImageUrl,
      user: loggedInUser.email,
      description: this.myDescription,
      position: this.myPosition
    });

  }

  // Setter filnavnet på bilde, for å så laste det opp cameraPreview bildet til firebase. 

  async uploadImageToFirestorage() {
    const fileName = `camp-${uuid()}.png`;
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

  // simple funksjon for å navigere med tilbake knappen
  async goback() {
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
