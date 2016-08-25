(function () {
  var umanitView = angular.module('umanit-view', [])

  /**
   * Generic directive to handle ionicView events
   *
   * Usage : <your-tag umanit-view on-enter="$ctrl.onEnter(event, data)"></your-tag>
   */
    .directive('umanitView', function () {
      return {
        restrict: 'A',
        scope: {
          onLoaded: '&',
          onEnter: '&',
          onLeave: '&',
          onBeforeEnter: '&',
          onBeforeLeave: '&',
          onAfterEnter: '&',
          onAfterLeave: '&',
          onUnloaded: '&'
        },
        link: function (scope, element, attrs) {
          if (scope.onLoaded) {
            scope.$parent.$on('$ionicView.loaded', function (event, data) {
              scope.onLoaded({
                event: event,
                data: data
              });
            });
          }

          if (scope.onEnter) {
            scope.$parent.$on('$ionicView.enter', function (event, data) {
              scope.onEnter({
                event: event,
                data: data
              });
            });
          }

          if (scope.onLeave) {
            scope.$parent.$on('$ionicView.leave', function (event, data) {
              scope.onLeave({
                event: event,
                data: data
              });
            });
          }

          if (scope.onBeforeEnter) {
            scope.$parent.$on('$ionicView.beforeEnter', function (event, data) {
              scope.onBeforeEnter({
                event: event,
                data: data
              });
            });
          }

          if (scope.onBeforeLeave) {
            scope.$parent.$on('$ionicView.beforeLeave', function (event, data) {
              scope.onBeforeLeave({
                event: event,
                data: data
              });
            });
          }

          if (scope.onAfterEnter) {
            scope.$parent.$on('$ionicView.afterEnter', function (event, data) {
              scope.onAfterEnter({
                event: event,
                data: data
              });
            });
          }

          if (scope.onAfterLeave) {
            scope.$parent.$on('$ionicView.afterLeave', function (event, data) {
              scope.onAfterLeave({
                event: event,
                data: data
              });
            });
          }

          if (scope.onUnloaded) {
            scope.$parent.$on('$ionicView.unloaded', function (event, data) {
              scope.onUnloaded({
                event: event,
                data: data
              });
            });
          }
        }
      }
    });

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = umanitView;
  }
})();