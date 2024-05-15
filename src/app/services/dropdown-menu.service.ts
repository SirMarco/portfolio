import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DropdownMenuService {
  public _menuOpen = false;

  get menuOpen(): boolean {
    return this._menuOpen;
  }

  toggleMenu(): void {
    this._menuOpen = !this._menuOpen;
  }

  closeMenu(): void {
    console.log('Close Menu');

    this._menuOpen = false;
  }
}
