import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Profile} from '../../../models/profile';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle', 'action'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  profile: Profile[] = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getProfil();
  }
  // tslint:disable-next-line:typedef
  getProfil() {
    this.userservice.getAllProfile().subscribe(
      res => {
        console.log(res);
        this.profile = res;

      }
    );
  }
}
