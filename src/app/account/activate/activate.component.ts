import { ActivatedRoute } from '@angular/router';
import { ActivateService } from './activate.service';
import { Component } from '@angular/core';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent {
  error = false;
  success = false;
  constructor(private activateService: ActivateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.pipe(mergeMap(params => this.activateService.get(params['key']))).subscribe({
      next: () => (this.success = true),
      error: () => (this.error = true),
    });
  }
}
