import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeSectionComponent } from './tree-section.component';

describe('TreeSectionComponent', () => {
  let component: TreeSectionComponent;
  let fixture: ComponentFixture<TreeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
