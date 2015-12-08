var app = angular.module('umanit-view', []);

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
        scope.$on('$ionicView.loaded', function() { scope.$eval(attrs.onLoaded); });
      }

      if (attrs.onEnter) {
        scope.$on('$ionicView.enter', function() { scope.$eval(attrs.onEnter); });
      }

      if (attrs.onLeave) {
        scope.$on('$ionicView.leave', function() { scope.$eval(attrs.onLeave); });
      }

      if (attrs.onBeforeEnter) {
        scope.$on('$ionicView.beforeEnter', function() { scope.$eval(attrs.onBeforeEnter); });
      }

      if (attrs.onBeforeLeave) {
        scope.$on('$ionicView.beforeLeave', function() { scope.$eval(attrs.onBeforeLeave); });
      }

      if (attrs.onAfterEnter) {
        scope.$on('$ionicView.afterEnter', function() { scope.$eval(attrs.onAfterEnter); });
      }

      if (attrs.onAfterLeave) {
        scope.$on('$ionicView.afterLeave', function() { scope.$eval(attrs.onAfterLeave); });
      }

      if (attrs.onUnloaded) {
        scope.$on('$ionicView.unloaded', function() { scope.$eval(attrs.onUnloaded); });
      }
    }
  }
});
