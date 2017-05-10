import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {TeethPage} from '../teeth/teeth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TeethPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {
  }
}
