'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helpers = use("Helpers");

var UploadController =
/*#__PURE__*/
function () {
  function UploadController() {
    _classCallCheck(this, UploadController);
  }

  _createClass(UploadController, [{
    key: "index",
    value: function index(_ref) {
      var view;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              view = _ref.view;
              return _context.abrupt("return", view.render("upload_files"));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "upload",
    value: function upload(_ref2) {
      var request, view, upload_file;
      return regeneratorRuntime.async(function upload$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              request = _ref2.request, view = _ref2.view;
              upload_file = request.file("upload_file", {
                size: "100mb"
              });
              _context2.next = 4;
              return regeneratorRuntime.awrap(upload_file.move(Helpers.publicPath('uploads'), {
                overwrite: true
              }));

            case 4:
              if (upload_file.moved()) {
                _context2.next = 7;
                break;
              }

              console.log(upload_file.error());
              return _context2.abrupt("return", view.render('upload_files', {
                status: 'Error: ' + upload_file.error()
              }));

            case 7:
              return _context2.abrupt("return", view.render('upload_files', {
                status: 'File Uploaded'
              }));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return UploadController;
}();

module.exports = UploadController;