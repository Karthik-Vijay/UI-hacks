import { ViewportScroller } from "@angular/common";  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
 constructor( private scroller: ViewportScroller) { }
  
 scrollDown() {
   this.scroller.scrollToAnchor("targetScroll");
  }
  
}
