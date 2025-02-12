import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
  } from '@angular/core';
  import * as React from 'react';
  
  import ReactDOM from 'react-dom/client';
import { MyReactComponent } from './MyReactComponent';
  
  const containerElementName = 'myReactComponentContainer';
  
  @Component({
    selector: 'app-my-component',
    template: `<span #${containerElementName}></span>`,
    styleUrls: ['./MyReactComponent.scss'],
    encapsulation: ViewEncapsulation.None,
  })
  export class MyComponentWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
    @ViewChild(containerElementName, {static: false}) containerRef: ElementRef;
  
    @Input() public counter = 10;
    @Output() public componentClick = new EventEmitter<void>();
    private root: any;
  
    constructor() {
      this.handleDivClicked = this.handleDivClicked.bind(this);
    }
  
    public handleDivClicked() {
      if (this.componentClick) {
        this.componentClick.emit();
        this.render();
      }
    }
  
    ngOnChanges(changes: SimpleChanges): void {
      this.render();
    }
  
    ngAfterViewInit() {
      this.render();
    }
  
    ngOnDestroy() {
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
    }
  
    private render() {
      const {counter} = this;if (!this.root) {
        this.root = ReactDOM.createRoot(this.containerRef.nativeElement);
      }
      this.root.render(
        <div className={'i-am-classy'}>
          <MyReactComponent counter={counter} onClick={this.handleDivClicked} />
        </div>
      );
    }
  }