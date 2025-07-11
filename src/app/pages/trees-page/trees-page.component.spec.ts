import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesPageComponent } from './trees-page.component';

describe('TreesPageComponent', () => {
  let component: TreesPageComponent;
  let fixture: ComponentFixture<TreesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
