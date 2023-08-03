import { Component,inject } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contact } from './contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyContacts';
  contactService = inject(ContactsService);
  contacts:Contact[] = this.contactService.contacts;
  addContact(name:string, number:number){
    this.contactService.addContact(name,number);
    this.contacts=this.contactService.contacts;
  }
  editContact(name:string, newInfo:Contact){
    this.contactService.editContact(name,newInfo);
    this.contacts=this.contactService.contacts;

  }
  deleteContact(name:string){
    this.contactService.deleteContact(name);
    this.contacts=this.contactService.contacts;
  }
  getContactsByName(name:string){
    this.contacts=this.contactService.getContactsByName(name);
  }
}
