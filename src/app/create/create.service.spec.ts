import { TestBed, inject } from '@angular/core/testing';

import { CreateService } from './create.service';
import { Contact } from './contact';

describe('CreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateService]
    });
    localStorage.removeItem('contacts');
  });

  it('should be created', inject([CreateService], (service: CreateService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllContacts()', () => {

    it('should return an empty array by default', inject([CreateService], (service: CreateService) => {
      expect(service.getAllContacts()).toEqual([]);
    }));

    it('should return all contacts', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({id: 1, title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      const contact2 = new Contact({id: 2, title: 'Mr', name: 'xyz', phone: '0987654321', 'email': 'xyz@cdk.com'});
      service.addContact(contact1);
      service.addContact(contact2);
      const output = JSON.stringify([contact1, contact2]);
      expect(service.getAllContacts()).toEqual(JSON.parse(output));
    }));

  });

  describe('#addContact(contact)', () => {

    it('should automatically assign an incrementing id', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      const contact2 = new Contact({title: 'Mr', name: 'xyz', phone: '0987654321', 'email': 'xyz@cdk.com'});
      service.addContact(contact1);
      service.addContact(contact2);
      expect(service.getContactById(1)).toEqual(contact1);
      expect(service.getContactById(2)).toEqual(contact2);
    }));

  });

  describe('#deleteContact(id)', () => {

    it('should remove contact with the corresponding id', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      const contact2 = new Contact({title: 'Mr', name: 'xyz', phone: '0987654321', 'email': 'xyz@cdk.com'});
      service.addContact(contact1);
      service.addContact(contact2);
      const output1 = JSON.stringify([contact1, contact2]);
      expect(service.getAllContacts()).toEqual(JSON.parse(output1));
      service.deleteContact(1);
      const output2 = JSON.stringify([contact2]);
      expect(service.getAllContacts()).toEqual(JSON.parse(output2));
      service.deleteContact(2);
      expect(service.getAllContacts()).toEqual([]);
    }));

    it('should not removing anything if contact with corresponding id is not found', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      const contact2 = new Contact({title: 'Mr', name: 'xyz', phone: '0987654321', 'email': 'xyz@cdk.com'});
      service.addContact(contact1);
      service.addContact(contact2);
      const output1 = JSON.stringify([contact1, contact2]);
      expect(service.getAllContacts()).toEqual(JSON.parse(output1));
      service.deleteContact(3);
      expect(service.getAllContacts()).toEqual(JSON.parse(output1));
    }));

  });

  /* describe('#updateContact(id, values)', () => {

    it('should return contact with the corresponding id and updated data', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      service.addContact(contact1);
      const updatedContact = service.updateContact(1, {
        name: 'John'
      });
      expect(updatedContact.title).toEqual('John');
    }));

    it('should return null if contact is not found', inject([CreateService], (service: CreateService) => {
      const contact1 = new Contact({title: 'Mr', name: 'Madhu', phone: '2012341234', 'email': 'madhu@cdk.com'});
      service.addContact(contact1);
      const updatedContact = service.updateContact(2, {
        name: 'John'
      });
      expect(updatedContact).toEqual(null);
    }));

  }); */
});
