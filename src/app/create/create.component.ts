import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from './contact';
import { CreateService } from './create.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [CreateService]
})
export class CreateComponent implements OnInit {

  newContact: Contact = new Contact();
  createForm: FormGroup;
  constructor(private createService: CreateService) { }
  displayedColumns = ['title', 'name', 'phone', 'email', 'action'];
  titles = ['Dr.', 'Mr.', 'Mrs.', 'Ms'];
  dataSource = new MatTableDataSource (this.contacts);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
      this.createForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ])
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  newFormContact() {
    this.newContact = new Contact();
  }
  loadTable() {
    this.dataSource = new MatTableDataSource(this.contacts);
    this.dataSource.paginator = this.paginator;
  }
  addContact() {
    this.newContact.title = this.createForm.value.title;
    this.newContact.name = this.createForm.value.name;
    this.newContact.phone = this.createForm.value.phone;
    this.newContact.email = this.createForm.value.email;
    this.createService.addContact(this.newContact);
    this.loadTable();
    this.newFormContact();
  }
  deleteContact(contact) {
    this.createService.deleteContact(contact.id);
    this.loadTable();
  }
  /* updateContact() {
    this.createService.updateContact(this.newContact);
  } */
  get contacts() {
    return this.createService.getAllContacts();
  }

}
