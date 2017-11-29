import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class CreateService {

  contacts: Contact[] = [];
  lastId = 0 || this.contacts.length;
  constructor() {
  }
  addContact(contact: Contact): CreateService {
    if (!contact.id) {
      contact.id = ++this.lastId;
    }
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return this;
  }
  deleteContact(id: number): CreateService {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    return this;
  }
  updateContact(id: number, values: Object = {}): Contact {
    const contact = this.getContactById(id);
    if (!contact) {
      return null;
    }
    Object.assign(contact, values);
    return contact;
  }
  getAllContacts(): Contact[] {
    const localData = JSON.parse(localStorage.getItem('contacts'));
    if (localData != null) {
      this.contacts = localData;
      this.lastId = this.contacts.length;
    }
    return this.contacts;
  }
  getContactById(id: number) {
    return this.contacts.filter(contact => contact.id === id).pop();
  }
}
