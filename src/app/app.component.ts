import { Component } from '@angular/core';
declare var googleyolo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signInAndDriveUploadDemo';

  // onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  //   ngOnInit(){
  //     const hintPromise = googleyolo.hint({
  //       supportedAuthMethods: [
  //          "https://accounts.google.com"
  //       ],
  //       supportedIdTokenProviders: [
  //       {
  //          uri: "https://accounts.google.com",
  //          clientId: "YOUR_GOOGLE_CLIENT_ID"
  //       }
  //      ]
  //    });
  //  }
}
