import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employee-id',
  templateUrl: './employee-id.component.html',
  styleUrls: ['./employee-id.component.css']
})
export class EmployeeIdComponent implements OnInit {
  index!:number;
  imagen = "/assets/img/photo.jfif"
  id = ""
  age = ""
  name = ""
  salary = ""
 

  constructor(private ar: ActivatedRoute, private dataService: DataService) {}

  ngOnInit(): void {
    this.index = this.ar.snapshot.params['id'];
    this.dataService.getDataId(this.index).subscribe(response =>{
      console.log(response);
      this.age = response.data.employee_age;
      this.name = response.data.employee_name;
      this.salary = response.data.employee_salary;
      this.id = response.data.id;
    });
  }
}
