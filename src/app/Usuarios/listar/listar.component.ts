import { Component, OnInit } from '@angular/core';
import{ ServiceService }from '../../Service/service.service'
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Modelo/Usuarios';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuarios[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    })

  }

}
