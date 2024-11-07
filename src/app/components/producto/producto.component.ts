import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    // Solo ejecuta setupFilterButtons si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.setupFilterButtons();
    }
  }

  setupFilterButtons(): void {
    // Verifica nuevamente que estamos en el navegador antes de acceder a `document`
    if (isPlatformBrowser(this.platformId)) {
      const filters = document.querySelectorAll('#portfolio-flters li');
      const items = document.querySelectorAll('.portfolio-item');

      filters.forEach(filter => {
        filter.addEventListener('click', () => {
          filters.forEach(f => f.classList.remove('filter-active'));
          filter.classList.add('filter-active');

          const filterValue = filter.getAttribute('data-filter');

          if (filterValue) {
            items.forEach(item => {
              const htmlItem = item as HTMLElement;
              if (filterValue === '*' || htmlItem.classList.contains(filterValue.substring(1))) {
                htmlItem.style.display = 'block';
              } else {
                htmlItem.style.display = 'none';
              }
            });
          }
        });
      });
    }
  }
}
