/**
 * Generic directive to handle ionicView events
 *
 * Usage : <your-tag umanit-view on-enter="your angular expression"></your-tag>
 */
app.directive('umanitView', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (attrs.onLoaded) {
        scope.$parent.$on('$ionicView.loaded', function() { scope.$eval(attrs.onLoaded); });
      }

      if (attrs.onEnter) {
        scope.$parent.$on('$ionicView.enter', function() { scope.$eval(attrs.onEnter); });
      }

      if (attrs.onLeave) {
        scope.$parent.$on('$ionicView.leave', function() { scope.$eval(attrs.onLeave); });
      }

      if (attrs.onBeforeEnter) {
        scope.$parent.$on('$ionicView.beforeEnter', function() { scope.$eval(attrs.onBeforeEnter); });
      }

      if (attrs.onBeforeLeave) {
        scope.$parent.$on('$ionicView.beforeLeave', function() { scope.$eval(attrs.onBeforeLeave); });
      }

      if (attrs.onAfterEnter) {
        scope.$parent.$on('$ionicView.afterEnter', function() { scope.$eval(attrs.onAfterEnter); });
      }

      if (attrs.onAfterLeave) {
        scope.$parent.$on('$ionicView.afterLeave', function() { scope.$eval(attrs.onAfterLeave); });
      }

      if (attrs.onUnloaded) {
        scope.$parent.$on('$ionicView.unloaded', function() { scope.$eval(attrs.onUnloaded); });
      }
    }
  }
});
