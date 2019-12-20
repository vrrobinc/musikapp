import { Component, OnInit } from '@angular/core';
import { Gitar1Service } from './guitar1.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import undefined = require('firebase/empty-import');

@Component({
  selector: 'app-guitar1',
  templateUrl: './guitar1.page.html',
  styleUrls: ['./guitar1.page.scss'],
})
export class Guitar1Page implements OnInit {
  data: Observable<any>;
  result: any= [];
  materis: Array <any> =[];

  materi: any;
  idmateri: number;
  title: string;
  desc: string;

  constructor( private Guitar1: Gitar1Service, public http: HttpClient) { 
    this.materis = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
  
    ];
  }

  expandItem(materi): void {
    if (materi.expanded) {
      materi.expanded = false;
    } else {
      this.materis.map(listItem => {
        if (materi == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  ngOnInit() {
    this.Guitar1.read_Material().subscribe(data => {

      this.materi = data.map(e =>{
        return {
          id:e.payload.doc.id,
          isEdit: false,
          Code: e.payload.doc.data()['id-m'],
          Title: e.payload.doc.data()['title'],
          Desc : e.payload.doc.data()['desc']
        };
      })
      console.log(this.materi);
    });
  }

  CreateRecord() {
    let record = {};
    record['id-m'] = this.idmateri;
    record['title'] = this.title;
    record['desc'] = this.desc;
    this.Guitar1.create_NewMaterial(record).then(resp => {
      this.idmateri = undefined;
      this.title = "";
      this.desc = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.Guitar1.delete_material(rowID);
  }
 
  // EditRecord(record) {
  //   record.isEdit = true;
  //   record.Editcode = record.id-m;
  //   record.Edittitle = record.title;
  //   record.Editdesc = record.desc;
  // }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['id-m'] = recordRow.Editcode;
    record['title'] = recordRow.Edittitle;
    record['desc'] = recordRow.Editdesc;
    this.Guitar1.update_material(recordRow.id, record);
    recordRow.isEdit = false;
  }
 
  getData(){
    var url = 'https://jsonplaceholder.typicode.com/posts/1';
    this.data = this.http.get(url);
    this.data.subscribe(data =>{
      this.result = data;
    });
  }

  
 

}
