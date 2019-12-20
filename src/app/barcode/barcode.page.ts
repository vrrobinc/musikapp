import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  public barcode: string;
  constructor(public barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.barcode = barcodeData['text'];
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         this.barcode = JSON.stringify(err);
     });
  }
}
