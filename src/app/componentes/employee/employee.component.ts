import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  listData : any[] = []; 
  imagen = "/assets/img/photo.jfif"
  loading  = false;

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos(){
    this.loading = true
    this.dataService.getData().subscribe(datos=>{
      this.listData = []
      this.listData = datos.data;
      this.loading = false;   
    });
  }
}
