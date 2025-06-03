import {Component, Renderer2, AfterViewInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private renderer: Renderer2) {}

  toggleMobileMenu(event: Event): void {
    event.preventDefault();

    const wrapper = document.querySelector('.mobile-nav__wrapper');
    const body = document.body;

    if (wrapper) {
      wrapper.classList.toggle('expanded');
    }

    this.renderer[body.classList.contains('locked') ? 'removeClass' : 'addClass'](body, 'locked');
  }

  toggleSearchMenu(event: Event): void {
    event.preventDefault();

    const wrapper = document.querySelector('.search-popup');
    const body = document.body;

    if (wrapper) {
      wrapper.classList.toggle('active');
    }

    this.renderer[body.classList.contains('active') ? 'removeClass' : 'addClass'](body, 'active');
  }
}
