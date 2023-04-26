import { Component } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent {

  videoRef: any;

  ngOnInit(): void {
    this.videoRef = document.getElementById('video');
    console.log(this.videoRef);
    this.setupCamera();
  }

  setupCamera() {
    navigator.mediaDevices.getUserMedia({
      video: { width: 300, height: 300 },
      audio: false
    }).then(stream => {
      console.log(stream);
      this.videoRef.srcObject = stream;
    })
  }

  async requestCameraPermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera permission granted:', stream);
      // Do something with the camera stream here
    } catch (error) {
      console.error('Camera permission denied:', error);
      // Handle the error here
    }
  }

}
