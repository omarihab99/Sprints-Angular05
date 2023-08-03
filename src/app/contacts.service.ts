import { Injectable } from '@angular/core';
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      name: 'John Doe',
      number: 123456789
    }
  ];
  constructor() { }
  addContact(name:string, number:number){
    this.contacts.push({
      name: name,
      number: number
    });
  }
  editContact(name:string, newInfo:Contact){
    this.contacts.forEach(contact => {
      if(contact.name === name){
        contact.name = newInfo['name']??contact.name;
        contact.number = newInfo['number']??contact.number;
      }
    });
  }
  deleteContact(name:string){
    this.contacts = this.contacts.filter(contact => contact.name !== name);
  }
  getContactsByName(name:string){
    return this.contacts.filter(contact => contact.name === name);
  }
}
