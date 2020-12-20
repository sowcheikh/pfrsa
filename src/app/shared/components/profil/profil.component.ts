import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Profile} from '../../../models/profile';
import {MatSort} from '@angular/material/sort';
import {ProfileService} from '../../../services/profile.service';
import {first} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {AlertService} from '../../../services/alert.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id: string;
  loading = false;
  form: FormGroup;
  profiles = null;

  public displayedColumns = ['id', 'libelle', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Profile>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private profileService: ProfileService,
              private router: Router, private alertService: AlertService,
              private route: ActivatedRoute,) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAllOwners();
  }

  public getAllOwners = () => {
    this.profileService.getAllProfile()
      .subscribe(res => {
        this.dataSource.data = res as Profile[];
      });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public customSort = (event) => {
    console.log(event);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  // tslint:disable-next-line:typedef
  deleteProfile(id: string) {
    const profile = this.profiles.find(x => x.id === id);
    profile.isDeleting = true;
    this.profileService.delete(id)
      .pipe(first())
      .subscribe(() => this.profiles = this.profiles.filter(x => x.id !== id));
  }
}
