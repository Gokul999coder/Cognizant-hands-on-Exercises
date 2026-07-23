import { Component,OnInit,OnDestroy} from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  constructor(
  private courseService: CourseService
) {}
  portalName='Student Course Portal';
  isPortalActive = true;
  message='';
  searchTerm='';
  availableCourses = 0;

  ngOnDestroy():void{

     console.log("HomeComponent destroyed");
     
  }

  ngOnInit() :void{
this.availableCourses =
  this.courseService.getCourses().length;
    console.log('HomeComponent initialised — courses loaded');

  }
  onEnrollClick(){
    this.message="Enrollment opened!"
  }
}
