import {
  Directive,
  Input,
  EmbeddedViewRef,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  Renderer2,
  ComponentFactoryResolver,
  SimpleChanges, OnChanges
} from '@angular/core';

@Directive({
  selector: '[ngxCacheIf]'
})
export class NgxCacheIfDirective implements OnChanges {

  @Input() ngxCacheIf: any;
  loaded: {[key: string]: EmbeddedViewRef<any>} = {};

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef,
              private el: ElementRef, private renderer: Renderer2,
              private cfr: ComponentFactoryResolver) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.loaded[this.templateRef.elementRef.nativeElement.nodeName]) {
      if (changes.ngxCacheIf.currentValue) {
        this.viewContainer.clear();
        this.loaded[this.templateRef.elementRef.nativeElement.nodeName] = this.viewContainer.createEmbeddedView(this.templateRef);
        }
    } else {
      try {
        if (changes.ngxCacheIf.currentValue) {
          this.viewContainer.insert(this.loaded[this.templateRef.elementRef.nativeElement.nodeName]);
        } else {
          this.viewContainer.detach();
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
