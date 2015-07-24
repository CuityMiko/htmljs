// Generated by CoffeeScript 1.9.3
(function() {
  var func_info;

  func_info = __F('info');

  module.exports.controllers = {
    "/read": {
      get: function(req, res, next) {},
      post: function(req, res, next) {
        return func_info.getByUserId(res.locals.user.id, function(error, infos) {
          return infos.forEach(function(info) {
            return info.updateAttributes({
              is_read: 1
            });
          });
        });
      }
    }
  };

  module.exports.filters = {
    "/read": {
      get: [],
      post: ['checkLogin', "checkCard"]
    }
  };

}).call(this);