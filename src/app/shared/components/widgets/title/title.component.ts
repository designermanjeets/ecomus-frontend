import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() class: string = 'title';
  @Input() svg: string = 'leaf';
  @Input() style: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() headingLevel: 'h1' | 'h2' = 'h2';

}
