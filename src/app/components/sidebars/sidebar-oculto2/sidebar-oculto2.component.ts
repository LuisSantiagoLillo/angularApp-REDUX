import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

// REDUX NGRX
import { Store } from '@ngrx/store';
import { State } from '../../../store/index';
import { SetOrderSidebar, OptionsSideBar } from '../../../store/actions/sidebar.actions';

@Component({
  selector: 'app-sidebar-oculto2',
  templateUrl: './sidebar-oculto2.component.html',
  styleUrls: ['./sidebar-oculto2.component.css']
})
export class SidebarOculto2Component implements OnInit {
  // COMPONENT FROM https://www.codeply.com/go/GQ1Mz8RqZB/bootstrap-4-sidebar-menu-(toggleable)
  options: OptionsSideBar[];

  constructor(
    public store: Store<State>,
    private router: Router
  ) { }

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
