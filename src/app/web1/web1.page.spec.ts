import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Web1Page } from './web1.page';

describe('Web1Page', () => {
  let component: Web1Page;
  let fixture: ComponentFixture<Web1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Web1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
