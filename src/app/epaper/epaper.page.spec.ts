import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EpaperPage } from './epaper.page';

describe('EpaperPage', () => {
  let component: EpaperPage;
  let fixture: ComponentFixture<EpaperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EpaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
