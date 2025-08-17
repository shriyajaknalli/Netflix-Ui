import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Content } from '../models/content.interface'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState = new BehaviorSubject<{ content: Content | null, isOpen: boolean }>({ 
    content: null, 
    isOpen: false 
  });
  modalState$ = this.modalState.asObservable();

  openModal(content: Content) {
    this.modalState.next({ content, isOpen: true });
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  closeModal() {
    this.modalState.next({ content: null, isOpen: false });
    document.body.style.overflow = 'auto'; // Restore scrolling when modal is closed
  }

  get isOpen(): boolean {
    return this.modalState.value.isOpen;
  }

 get cuurrentContent(): Content | null {
    return this.modalState.value.content;
  }


}
