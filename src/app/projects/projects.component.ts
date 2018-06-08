import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [];
  display_proj = [];
  filter = false;
  constructor() { }

  ngOnInit() {
    const p1 = {
      nombre: 'Paralelepipedo',
      by: 'zulul',
      cat: 'moosic',
      goal: 100000,
      status: 1,
      left: 60
    };
    const p2 = {
      nombre: 'Raul el perrete',
      by: 'pgallardo',
      cat: 'manualidades',
      goal: '9000000',
      status: 0,
      left: 20
    };
    this.projects.push(p1);
    this.projects.push(p2);
    this.display_proj = this.projects;
  }

  filterPending(event: any){
    this.filter = !this.filter;

    if (this.filter){
      this.display_proj = [];
      for (const proj of this.projects) {
        if (proj.status === 0) {
          this.display_proj.push(proj);
        }
      }
    }
    else{
      this.display_proj = this.projects;
    }
  }

  filterName(pname: string){
    if (!pname || pname === '') {
      this.display_proj = this.projects;
    } else {
      const exp = new RegExp(pname);
      this.display_proj = [];
      for (const p of this.projects) {
        if (exp.test(p.nombre)) {
          this.display_proj.push(p);
        }
      }
    }
  }

  setStatus(pname: string){
    for(const p of this.projects){
      if (p.nombre === pname){
        p.status = 1 - p.status;
      }
    }
  }
}
