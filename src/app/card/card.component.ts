import { Component, Input } from '@angular/core';
import { TextHighlightPipe } from '../text-highlight.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TextHighlightPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() searchText:string|null = null;
  @Input() name:string = "Ahmad Attar";
  @Input() submittionDate:string = "";
  @Input() duration:string = "";
  @Input() salary:string = "";
}
