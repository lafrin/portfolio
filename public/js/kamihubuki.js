/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/js/kamihubuki.js ***!
  \******************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Congratulation = /*#__PURE__*/function () {
  function Congratulation($elm) {
    _classCallCheck(this, Congratulation);

    this.$area = $elm;
    this.id = 'congratulation-style';
    this.height;
    this.color = [// 12カラー
    "#3181A8", "#FCEE3D", "#D4297E", "#D94724", "#93CBCE", "#3D9148", "#E79549", "#E397AD", "#93CBCE", "#D2B155", "#AC7DB1", "#F5C532"];
    this.OPTION = {
      BREAK_POINT: 768,
      ADD_HEIGHT: 70,
      // 紙吹雪が降る範囲はエリア高＋この高さ
      SPEED_LEVEL: 25,
      // 小さくするほど速くなる
      PC_QUANTITY: 100,
      // BREAK_POINT以上での紙吹雪の総枚数
      SP_QUANTITY: 75 // BREAK_POINT以下での紙吹雪の総枚数

    };
    this.isPC;
  }

  _createClass(Congratulation, [{
    key: "updateDevice",
    value: function updateDevice() {
      var width = window.innerWidth;

      if (width >= this.OPTION.BREAK_POINT) {
        if (this.isPC) return;
        this.isPC = true;
      } else {
        if (!this.isPC) return;
        this.isPC = false;
      }
    }
  }, {
    key: "addStyle",
    value: function addStyle() {
      // styleタグを作成
      var css = document.createElement('style');
      css.media = 'screen';
      css.type = 'text/css';
      css.id = this.id;
      var rulesStr = ''; // 移動のkeyframes定義

      for (var _i = -6; _i < 6; _i++) {
        // moving-1 ～ moving-12 を生成
        rulesStr += '@keyframes moving-' + parseInt(_i + 7, 10) + ' {' + '0% { opacity: 0; transform: translate(0, 0); }' + '10% { opacity: 1; }' + '90% { opacity: 1; }' + '100% { opacity: 0; transform: translate(' + _i * 10 + 'px, ' + (this.height + this.OPTION.ADD_HEIGHT) + 'px); }' + '}';
      } // ルールをstyleタグに追加


      var rules = document.createTextNode(rulesStr);
      css.appendChild(rules); // head内に作成

      document.getElementsByTagName('head')[0].appendChild(css);
    }
  }, {
    key: "restart",
    value: function restart() {
      $(this.id).remove(); // <head>の<style>タグを削除

      this.$area.empty(); // 紙吹雪要素を削除

      this.create(); // <style>生成とHTMLタグ生成を再実行
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.height = this.$area.innerHeight(); // スタイルの生成

      this.addStyle(); // 上から下まで落ちるミリ秒数（エリア高 * スピードレベル + ランダム<0~9> * 100<ミリ秒化>）

      var duration = this.height * this.OPTION.SPEED_LEVEL + Math.floor(Math.random() * 10) * 100; // durationを3分割して、アニメーション開始タイミングを3回に分ける

      var index = 0;
      var timer = setInterval(function () {
        var html = '';
        var QUANTITY = _this.isPC ? _this.OPTION.PC_QUANTITY : _this.OPTION.SP_QUANTITY;

        for (var _i2 = 0; _i2 < Math.floor(QUANTITY / 3); _i2++) {
          // 1階層目のスタイル生成
          var keyframe = 'moving-' + (Math.floor(Math.random() * 12) + 1); // 0の生成を防ぐ

          var delay = duration / Math.floor(Math.random() * 10);
          var outerStyle = ['top: -20px;', 'left: ' + Math.floor(Math.random() * 100) + '%;', 'width: ' + (Math.floor(Math.random() * 4) + 4) + 'px;', 'height: ' + (Math.floor(Math.random() * 4) + 4) + 'px;', 'animation: ' + keyframe + ' ' + duration + 'ms linear infinite;', 'animation-delay: ' + delay + 'ms;']; // 2階層目・3階層目のスタイル生成

          var color = _this.color[Math.floor(Math.random() * 12)];

          var rotateKeyframe = Math.floor(Math.random() * 2) ? 'rotateY' : 'rotate360';
          var innerRotateStyle = rotateKeyframe === 'rotateY' ? 'transform: rotate(' + Math.floor(Math.random() * 60) + 'deg);' : '';
          var bodyStyle = ['background-color: ' + color + ';', 'animation: ' + rotateKeyframe + ' 500ms linear infinite;', 'animation-delay: ' + delay + 'ms;']; // html生成

          html += '<span style="' + outerStyle.join(' ') + '">' + '<span style="' + innerRotateStyle + '">' + '<span style="' + bodyStyle.join(' ') + '"></span>' + '</span>' + '</span>';
        }

        _this.$area.append(html);

        index += 1;

        if (index >= 2) {
          clearInterval(timer);
        }
      }, duration / 3);
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      this.isPC = window.innerWidth >= this.OPTION.BREAK_POINT;
      this.create();
      $(window).on('resize', function () {
        var w = window.innerWidth;
        setTimeout(function () {
          if (w === window.innerWidth) {
            _this2.updateDevice();

            _this2.restart(); // ウィンドウリサイズ時は紙吹雪を作り直し

          }
        }, 200);
      });
    }
  }]);

  return Congratulation;
}();
/*
 * 紙吹雪を舞わせる.
 */


var $congratulationElm = $('.confetti');
var congratulation = [];

for (var i = 0; i < $congratulationElm.length; i++) {
  congratulation.push(new Congratulation($congratulationElm.eq(i)));
}
/**
 * 実行
 */


var start = function start() {
  for (var _i3 = 0; _i3 < congratulation.length; _i3++) {
    congratulation[_i3].init();
  }
};

window.addEventListener('load', function () {
  start();
});
/******/ })()
;