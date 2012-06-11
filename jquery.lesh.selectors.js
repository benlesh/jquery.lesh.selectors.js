/*!
 * jQuery Selectors v1.0.0
 * http://www.benlesh.com
 *
 * Copyright 2012, Ben Lesh
 * Licensed under GNU General Public License
 */

(function () {
    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
        };
    }
    var attrCompare = function (el, m, comparer) {
        var p = m[3].split(',');
        return comparer(parseFloat($(el).attr(p[0].trim()) || 0), parseFloat(p[1]));
    };
    var cleanStr = function (s) {
        if (!s) return '';
        if (s[0] === '"' && s[s.length - 1] === '"') {
            return s.substring(1, s.length - 1);
        }
        return s.trim();
    };
    debugger;
    $.extend($.expr[':'], {
        btwn: function (el, i, m, a) {
            var p = m[3].split(',');
            return i >= parseInt(p[0]) && i <= parseInt(p[1]);
        },
        regex: function (el, i, m, a) {
            debugger;
            return (el.textContent || el.innerText || el.value || '').search(new RegExp(cleanStr(m[3]))) >= 0;
        },
        startsWith: function (el, i, m, a) {
            return (el.textContent || el.innerText || el.value || '').indexOf(m[3]) === 0;
        },
        endsWith: function (el, i, m, a) {
            var t = el.textContent || el.innerText || el.value || '';
            return t.lastIndexOf(m[3]) === t.length - m[3].length;
        },
        attrgt: function (el, i, m, a) {
            return attrCompare(el, m, function (a, b) {
                return a > b;
            });
        },
        attrlt: function (el, i, m, a) {
            return attrCompare(el, m, function (a, b) {
                return a < b;
            });
        },
        attrgte: function (el, i, m, a) {
            return attrCompare(el, m, function (a, b) {
                return a >= b;
            });
        },
        attrlte: function (el, i, m, a) {
            return attrCompare(el, m, function (a, b) {
                return a <= b;
            });
        },
        attrregex: function (el, i, m, a) {
            var p = m[3].split(',');
            return $(el).attr(p[0].trim()).search(new RegExp(cleanStr(p[1]))) >= 0;
        }
    });
})();