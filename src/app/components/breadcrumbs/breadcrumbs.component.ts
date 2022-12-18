import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../types/types';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        distinctUntilChanged(),
      )
      .subscribe(() => {
        this.breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
      });
  }

  buildBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {
    const firstChild = route.firstChild;

    if (firstChild?.routeConfig) {
      const routeConfig = firstChild.routeConfig;
      const label = routeConfig.data ? routeConfig.data['breadcrumb'] : '';
      const path = routeConfig.path ? routeConfig.path : '';

      const lastRoutePart = path.split('/').pop() ?? '';
      const isDynamicRoute = lastRoutePart.startsWith(':');

      const mainBreadcrumb = {
        label: label,
        url: isDynamicRoute ? 'courses' : path,
      };

      if (isDynamicRoute && !!firstChild.snapshot) {
        const paramName = lastRoutePart?.split(':')[1];
        const dynamicPath = path.replace(lastRoutePart, firstChild.snapshot.params[paramName]);
        const dynamicLabel = firstChild.snapshot.params[paramName];

        return [mainBreadcrumb, { label: dynamicLabel, url: dynamicPath }];
      }

      return [mainBreadcrumb];
    }

    return [];
  }
}
