angular.module('app', [])

.directive('navigation', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="navigation"><div class="navbar navbar-default navbar-fixed-top" role="navigation"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="/">LMP</a></div><div class="navbar-collapse collapse"><ul class="nav navbar-nav navbar-right"><li><a href="http://www.littlemisspiss.xyz/movie/" title="Think gay.">Movie</a></li></ul></div><!--/.nav-collapse --></div></div></section>',
    link: function(scope, elem) {}
  };
})

.directive('hero', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="hero">Hero</section>',
    link: function(scope, elem) {}
  };
})

.directive('cta', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="cta"><div class="container"><div class="cta-text">Start Delighting Your Customers Today</div><div class="row"><div class="col-sm-6 col-sm-offset-3"><div class="input-group"><input type="text" class="form-control input-lg" placeholder="Enter your email"><span class="input-group-btn"><button class="btn btn-cta btn-lg" type="button">Get Started!</button></span></div></div></div></div></section>',
    link: function(scope, elem) {}
  };
})

.directive('testimonials', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="testimonials"><div class="container"><div class="row"><div class="col-sm-8 col-sm-offset-2"><div class="testimonial-text">{{ testimonialText }}</div><div class="testimonial-author">{{ testimonialAuthor }}</div></div></div></div></section>',
    link: function(scope, elem) {
      scope.testimonialText = "Lorem ipsum dolor sit amet, te modo evertitur voluptatibus per, eum cibo erant scribentur ea.";
      scope.testimonialAuthor = "Author, Title";

    }
  };
})

.directive('column', function() {
  return {
    scope: {
      'items': '='
    },
    restrict: 'E',
    template: '<section class="columns"><div class="container"><div class="row"><div class="{{ columnSetup[items].columnClass }}" ng-repeat="i in getNumber( items ) track by $index"><div class="placeholder-image" ng-if="columnSetup[items].image"><span class="glyphicon glyphicon-picture"></div><div class="placeholder-title">{{ columnSetup[items].title }}</div><div class="placeholder-description">{{ columnSetup[items].description }}</div></div></div></div></section>',
    link: function(scope, elem, attr) {
      scope.columnCount = 12 / scope.items;
      scope.getNumber = function(num) {
        return new Array(num);
      }
      scope.columnSetup = {
        "3": {
          "columnClass": "col-sm-4",
          "image": true,
          "description": "Lorem ipsum dolor sit amet, te modo evertitur voluptatibus per, eum cibo erant scribentur ea."
        },
        "4": {
          "columnClass": "col-sm-3",
          "image": true,
          "description": "Lorem ipsum dolor sit amet, te modo evertitur voluptatibus."
        }
      }
    }
  };
})

.directive('columnSingle', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="columns single"><div class="container"><div class="row"><div class="col-sm-8 col-sm-offset-2"><div class="placeholder-title">{{ columnContent.title }}</div><div class="placeholder-description">{{ columnContent.description }}</div><div class="placeholder-image"><span class="glyphicon glyphicon-picture"></span></div></div></div></div></section>',
    link: function(scope, elem) {
      scope.columnContent = {
        "title": "Lorem ipsum dolor sit amet",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
      }
    }
  };
})

.directive('columnDouble', function() {
  return {
    scope: {
      'type': '='
    },
    restrict: 'E',
    template: '<section class="columns double"><div class="container"><div class="row"><div class="{{ columnClassImage }}"><div class="placeholder-image"><span class="glyphicon glyphicon-picture"></span></div></div><div class="{{ columnClassText }}"><div class="placeholder-title">{{ columnContent.title }}</div><div class="placeholder-description">{{ columnContent.description }}</div></div></div></div></section>',
    link: function(scope, elem) {
      if (scope.type == "2") {
        scope.columnClassImage = "col-sm-5 col-sm-push-5 col-sm-offset-1";
        scope.columnClassText = "col-sm-5 col-sm-pull-5";
      } else {
        scope.columnClassImage = "col-sm-5 col-sm-offset-1";
        scope.columnClassText = "col-sm-5";
      }
      scope.columnContent = {
        "title": "Lorem ipsum dolor sit amet",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      }
    }
  };
})

.directive('columnTriple', function() {
  return {
    scope: {
      'count': '='
    },
    restrict: 'E',
    template: '<section class="columns triple"><div class="container"><div class="row"><div class="col-sm-4" ng-repeat="i in getNumber( count ) track by $index"><div class="row"><div class="col-xs-3"><div class="placeholder-image"><span class="glyphicon glyphicon-picture"></span></div></div><div class="col-xs-9"><div class="placeholder-title">{{ columnContent.title }}</div><div class="placeholder-description">{{ columnContent.description }}</div></div></div></div></div></div></section>',
    link: function(scope, elem) {
      scope.getNumber = function(num) {
        return new Array(num);
      }
      scope.columnContent = {
        "title": "Lorem ipsum",
        "description": "Lorem ipsum dolor sit amet, te modo evertitur voluptatibus per, eum cibo erant scribentur ea."
      }
    }
  };
})

.directive('footer', function() {
  return {
    scope: true,
    restrict: 'E',
    template: '<section class="footer"><div class="container">&copy; 2014 Organization | Privacy | Terms</div></section>',
    link: function(scope, elem) {}
  };
})

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
