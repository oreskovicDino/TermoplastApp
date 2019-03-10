import { UserService } from './../../../_services/user.service';
import { AlertifyService } from './../../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Items } from 'src/app/_models/items';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ponuda-items',
  templateUrl: './ponuda-items.component.html',
  styleUrls: ['./ponuda-items.component.css']
})
export class PonudaItemsComponent implements OnInit {
  @ViewChild('editItem') editItem: NgForm;
  user: User;
  items: Items[];
  item: any = {};

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

  addItem() {
    this.userService.addItem(this.user.id, this.item).subscribe(itemA => {
      this.alertify.success('Uspješno dodano');
      this.editItem.resetForm();
    }, error => {
      this.alertify.error(error);
    });
  }

}
