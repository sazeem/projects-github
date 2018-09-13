import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReposComponent } from './repos.component';
import { LoadingSpinnerComponent } from '../../shared/loading-spinner/loading-spinner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagerComponent } from '../../shared/pager/pager.component';

fdescribe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        ReposComponent,
        LoadingSpinnerComponent, 
        PagerComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('# Should Create Repos Component', () => {
    expect(component).toBeTruthy();
  });

  it('# Should Have Method Called getRepos', () => {
    expect(component.getRepos).toBeTruthy();
    expect(component.getRepos).toEqual(jasmine.any(Function));
  });
});
