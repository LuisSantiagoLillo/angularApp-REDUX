import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from '../../../store/index';
import { SetOrderSidebar, OptionsSideBar } from '../../../store/actions/sidebar.actions';

@Component({
  selector: 'app-sidebar-circular',
  templateUrl: './sidebar-circular.component.html',
  styleUrls: ['./sidebar-circular.component.css']
})
export class SidebarCircularComponent implements OnInit {
  // COMPONENT FROM https://www.codeply.com/go/GQ1Mz8RqZB/bootstrap-4-sidebar-menu-(toggleable)
  options: OptionsSideBar[];
  constructor(
    public store: Store<State>,
    private router: Router
    ) {}

  ngOnInit() {
    this.store.subscribe(state => {
        console.log(state);
        this.options = state.optionsSidebar;
    });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.options, event.previousIndex, event.currentIndex);
    this.store.dispatch(new SetOrderSidebar(this.options));
  }

  navigateTo(href: String) {
    this.router.navigate([href]);
  }
}
