import { UserService } from './../../../_services/user.service';
import { AlertifyService } from './../../../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Items } from 'src/app/_models/items';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-ponuda-items',
  templateUrl: './ponuda-items.component.html',
  styleUrls: ['./ponuda-items.component.css']
})
export class PonudaItemsComponent implements OnInit {
  @ViewChild('editItem') editItem: NgForm;
  user: User;
  items: Items[];
  item: Items;
  addForm: FormGroup;


  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadUser();
    this.createItemForm();
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

  createItemForm() {
    this.addForm = this.fb.group({
      height: ['', Validators.required],
      width: ['', Validators.required],
      profil: ['3D Design'],
      windowType: ['jednokrilni'],
      glassType: ['DVOSLOJNO'],
      net: ['false'],
      blinds: ['false'],
      note: ['']
    });
  }

  xyz(x) {
    return '../../../../assets/' + x + '.png';
  }

  addItem() {
    if (this.addForm.valid) {
      this.item = Object.assign({}, this.addForm.value);
      this.userService.addItem(this.user.id, this.item).subscribe(() => {
        this.alertify.success('Dodano');
        this.addForm.reset();
      }, error => {
        this.alertify.error(error);
      });
    }
  }

}
