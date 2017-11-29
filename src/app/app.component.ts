import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,
  Inject, QueryList, Renderer2, ViewChild, ViewChildren
} from '@angular/core';
import { MatIconRegistry, MatSidenav, MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild(MatSlideToggle) toggle: MatSlideToggle;
  @ViewChildren('out', { read: ElementRef }) menuButtons: QueryList<ElementRef>;

  public menuMode = 'over';

  handleOutsideClicks() {
    if (this.menuMode === 'side') { return; }
    this.sidenav.close();
  }
}
