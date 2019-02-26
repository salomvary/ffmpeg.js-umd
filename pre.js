(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
          var m = {exports: {}};
          factory(m);
          return m.exports;
        });
    } else if (typeof module === 'object' && module.exports) {
        factory(module);
    } else {
        var m = {exports: {}};
        factory(m);
        root.ffmpeg = m.exports;
  }
}(typeof self !== 'undefined' ? self : this, function (module) {
