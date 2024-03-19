import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[appDateFormat]',
  standalone: true
})
export class DateFormatDirective implements OnInit {
  @Input() appDateFormat: string;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const date: Date = new Date(this.appDateFormat);
    this.el.nativeElement.textContent = date.toLocaleDateString('fr-FR');
  }
}
