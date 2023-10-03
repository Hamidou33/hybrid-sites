import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NodeComponent} from "./node.component";

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




