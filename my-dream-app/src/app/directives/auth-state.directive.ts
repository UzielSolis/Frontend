import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appAuthState]',
  standalone: true
})
export class AuthStateDirective {

  @Input() appAuthState: boolean | undefined;

  constructor(private authService: AuthService, private templateRef: TemplateRef<HTMLElement>, private viewContainer: ViewContainerRef) {}

  ngAfterViewInit() {
    console.log('Alguien me invoco', this.appAuthState, this.templateRef);
    this.authService.authStatus.subscribe((status) => {
      if (status === this.appAuthState) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    })
  }

}
