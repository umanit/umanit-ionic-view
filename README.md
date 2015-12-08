# umanit-ionic-view
Directive to manage [Ionicframework](http://ionicframework.com/) view events in the template

## Why ?

In [Ionicframework](http://ionicframework.com/), every view is cached by default. So, if you want to use a function when your view is loaded, you can't rely on [ngInit](https://docs.angularjs.org/api/ng/directive/ngInit) directive to do it, because it will be only fire once.

At this step, 2 options :
- Adding the option `cached="false"` to your `ionic-view` directive and the whole view will not be cached.
- Using [Ionic view events](http://blog.ionic.io/navigating-the-changes/) to call your function

With the last method, one problem : what happens if you have one controller for multiple views ? Using something like `ng-init` could solve this problem ! So **here we are** !

## How to use

Just add 2 attributes to your `ionic-view` directive like that :

```html
<ion-view view-title="My title" umanit-view on-before-enter="callMe()">
```

You **have** to add `umanit-view` (in order to call the directive), and then the event on which you want to bind your action (here `on-before-enter` if for `$ionicView.beforeEnter` event)

All available attributes are :
- `on-loaded`
- `on-enter`
- `on-leave`
- `on-before-enter`
- `on-before-leave`
- `on-after-enter`
- `on-after-leave`
- `on-unloaded`
