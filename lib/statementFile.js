"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statement = statement;

var _createStatement = _interopRequireDefault(require("./createStatement.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function statement(invoice, plays) {
  var statementData = (0, _createStatement.default)(invoice, plays);
  return renderPlainText(statementData, plays);
}

function renderPlainText(data, plays) {
  var result = "Statement for ".concat(data.customer, "\n");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data.performances[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var perf = _step.value;
      // print line for this order
      result += " ".concat(perf.play.name, ": ").concat(usd(perf.amount), " (").concat(perf.audience, " seats)\n");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  result += "Amount owed is ".concat(usd(data.totalAmount), "\n");
  result += "You earned ".concat(data.totalVolumeCredits, " credits\n");
  return result;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  var result = "<h1>Statement for ".concat(data.customer, "</h1>\n");
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = data.performances[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var perf = _step2.value;
      result += " <tr><td>".concat(perf.play.name, "</td><td>").concat(perf.audience, "</td>");
      result += "<td>".concat(usd(perf.amount), "</td></tr>\n");
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  result += "</table>\n";
  result += "<p>Amount owed is <em>".concat(usd(data.totalAmount), "</em></p>\n");
  result += "<p>You earned <em>".concat(data.totalVolumeCredits, "</em> credits</p>\n");
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("enUS", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }).format(aNumber / 100);
}