import { UserService } from './../../../_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Items } from './../../../_models/items';
import { User } from './../../../_models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-ponuda-edit',
  templateUrl: './admin-ponuda-edit.component.html',
  styleUrls: ['./admin-ponuda-edit.component.css']
})
export class AdminPonudaEditComponent implements OnInit {
  user: User;
  items: Items[];

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loadUser();
    this.items = this.getItems();
  }

  loadUser() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }

  getItems() {
    const itemsArray = [];
    for (let i = 0; i < this.user.items.length; i++) {
      itemsArray.push({
        width: this.user.items[i].width,
        height: this.user.items[i].height,
        profil: this.user.items[i].profil,
        windowType: this.user.items[i].windowType,
        glassType: this.user.items[i].glassType,
        net: this.user.items[i].net,
        blinds: this.user.items[i].blinds,
        note: this.user.items[i].note,
        pozicija: (i + 1),
        tip: this.xyz(this.user.items[i].windowType)
      });
    }
    return itemsArray;
  }

  xyz(x) {
    return '../../../../assets/' + x + '.png';
  }

  deleteUser(id: number) {
    this.alertify.confirm('Jeste li sigurni da želite obrisati ovu ponudu?', () => {
      this.userService.deleteUser(id).subscribe(next => {
        this.router.navigate(['/admin']);
        this.alertify.success('Ponuda' + this.user.name + '. Je obrisana.');
      }, error => {
        this.alertify.error(error);
      });
    });
  }

}

