# ngx-cache-if

This directive to fill the gap between legacy *ngIf structural directive and [hidden] directive.
ngxCacheIf will behave like a ngIf for the first rendering then will act has hidden/shown directive.
This allow to render a component only when needed and keep it's result in cache if we need to hide it again. (conditionnal content).

```sh
    npm i --save ngx-cache-if
```
import NgxCacheIfModule and then use

```html
    <my-comp async *ngxCacheIf="state"></my-comp>
```

## *ngIf

By default ngIf diretive render the component each time you want to display it. And destroy it when you hide it. This cause the lifecycle events to trigger multiple time if you display the same content. (An async call made in ngOnInit for example).

## [hidden]

The hidden/shown behaviors renders the element at the rendering of the parent component and hide or display it with css. This cause the lifecycle events to be triggered at the rendering of the parent view. If you have multiples components to load in the same view that can cause a large amount of operations if they are computing all at the same time instead of rendering only when needed.
