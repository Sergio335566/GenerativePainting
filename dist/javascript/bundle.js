/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/components/Ennemy.js":
/*!*********************************************!*\
  !*** ./src/javascript/components/Ennemy.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Ennemy =\n/*#__PURE__*/\nfunction () {\n  function Ennemy(_ref) {\n    var img = _ref.img,\n        x = _ref.x,\n        y = _ref.y,\n        width = _ref.width,\n        height = _ref.height,\n        speedX = _ref.speedX,\n        speedY = _ref.speedY;\n\n    _classCallCheck(this, Ennemy);\n\n    this.img = img;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n    this.speedX = speedX;\n    this.speedY = speedY;\n  }\n\n  _createClass(Ennemy, [{\n    key: \"draw\",\n    value: function draw(context) {\n      this.context = context;\n      this.context.save();\n      this.context.translate(this.x, this.y);\n      this.context.drawImage(this.img, 0, 0, this.width, this.height);\n      this.context.restore();\n    }\n  }, {\n    key: \"updateEnnemyPos\",\n    value: function updateEnnemyPos() {\n      this.angle += 10;\n      this.x += this.speedX;\n      this.y += this.speedY;\n      this.resetEnnemyPosition();\n    }\n  }, {\n    key: \"resetEnnemyPosition\",\n    value: function resetEnnemyPosition() {\n      if (this.x + this.width > this.context.canvas.width) {\n        this.x = this.context.canvas.width - this.width;\n        this.speedX = -this.speedX;\n      }\n\n      if (this.x < 0) {\n        this.x = 0;\n        this.speedX = -this.speedX;\n      }\n\n      if (this.y + this.height > this.context.canvas.height) {\n        this.y = this.context.canvas.height - this.height;\n        this.speedY = -this.speedY;\n      }\n\n      if (this.y < 0) {\n        this.y = 0;\n        this.speedY = -this.speedY;\n      }\n    }\n  }]);\n\n  return Ennemy;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ennemy);\n\n//# sourceURL=webpack:///./src/javascript/components/Ennemy.js?");

/***/ }),

/***/ "./src/javascript/components/Game.js":
/*!*******************************************!*\
  !*** ./src/javascript/components/Game.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ennemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ennemy */ \"./src/javascript/components/Ennemy.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ \"./src/javascript/components/Player.js\");\n/* harmony import */ var _LevelManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LevelManager */ \"./src/javascript/components/LevelManager.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.init();\n  }\n\n  _createClass(Game, [{\n    key: \"init\",\n    value: function init() {\n      var container = document.querySelector('.js-container');\n      this.canvas = container.querySelector('canvas');\n      this.context = this.canvas.getContext('2d');\n      this.levelElm = container.querySelector('.level');\n      this.levelSelector = container.querySelector('.js-level');\n      this.restart = container.querySelector('.js-restart');\n      this.leaderboardBtn = container.querySelector('.js-btnLB');\n      this.setupFunctions();\n    }\n  }, {\n    key: \"setupFunctions\",\n    value: function setupFunctions() {\n      this.setupValues();\n      this.loadPlayerImage();\n      this.loadEnnemiesImages();\n      this.resizeCanvas();\n      this.setupListeners();\n    }\n  }, {\n    key: \"setupValues\",\n    value: function setupValues() {\n      this.nbPlayerImg = 2;\n      this.nbEnnemies = 3;\n      this.finished = false;\n      this.ennemies = [];\n      this.imgEnnemies = [];\n      this.playerTab = [];\n      this.needUpdate = false;\n      this.levelManager = new _LevelManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      this.currentLevelValue = this.levelManager.levelValue;\n    }\n  }, {\n    key: \"loadEnnemiesImages\",\n    value: function loadEnnemiesImages() {\n      var _this = this;\n\n      var imgLoadedPromises = [];\n\n      for (var index = 0; index < this.nbEnnemies; index++) {\n        var img = new Image();\n        img.src = \"../img/ennemy_0\".concat(index, \".png\");\n        imgLoadedPromises.push(this.loadImage(img));\n        this.imgEnnemies.push(img);\n      }\n\n      Promise.all(imgLoadedPromises).then(function () {\n        _this.createEnnemies();\n      });\n    }\n  }, {\n    key: \"loadImage\",\n    value: function loadImage(img) {\n      return new Promise(function (resolve) {\n        img.onload = function () {\n          resolve();\n        };\n      });\n    }\n  }, {\n    key: \"loadPlayerImage\",\n    value: function loadPlayerImage() {\n      var img = new Image();\n      img.src = \"../img/player_01.png\";\n      img.onload = this.createPlayer.bind(this, img);\n    }\n  }, {\n    key: \"createEnnemies\",\n    value: function createEnnemies() {\n      for (var index = 0; index < this.nbEnnemies; index++) {\n        this.ennemy = new _Ennemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          img: this.imgEnnemies[index],\n          x: Math.random() * this.canvas.width - 40,\n          y: 0,\n          width: this.imgEnnemies[index].width / 20,\n          height: this.imgEnnemies[index].height / 20,\n          speedX: Math.random() * 5 * this.currentLevelValue,\n          speedY: Math.random() * 5 * this.currentLevelValue\n        });\n        this.ennemies.push(this.ennemy);\n      }\n    }\n  }, {\n    key: \"createPlayer\",\n    value: function createPlayer(img) {\n      this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        img: img,\n        x: Math.random() * this.canvas.width,\n        y: Math.random() * this.canvas.height,\n        width: img.width / 20,\n        height: img.height / 20\n      });\n      this.playerTab.push(this.player);\n      this.draw();\n    }\n  }, {\n    key: \"setupListeners\",\n    value: function setupListeners() {\n      window.addEventListener('resize', this.resizeCanvas.bind(this));\n      window.addEventListener('click', this.clearCanvas.bind(this));\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      this.levelManager.levelDifficulty();\n      this.drawPlayer();\n      this.drawEnnemy();\n      this.isLevelChanged();\n\n      if (!this.finished) {\n        window.requestAnimationFrame(this.draw.bind(this));\n      }\n    }\n  }, {\n    key: \"drawPlayer\",\n    value: function drawPlayer() {\n      if (this.player) {\n        this.player.draw(this.context);\n        this.player.updatePlayerPos();\n      }\n    }\n  }, {\n    key: \"drawEnnemy\",\n    value: function drawEnnemy() {\n      if (this.ennemies) {\n        for (var index = 0; index < this.ennemies.length; index++) {\n          this.ennemies[index].draw(this.context);\n          this.ennemies[index].updateEnnemyPos();\n          this.detectCollision(index);\n        }\n      }\n    }\n  }, {\n    key: \"detectCollision\",\n    value: function detectCollision(index) {\n      if (this.ennemies[index].x < this.player.x + this.player.width / 2 + 25 && this.ennemies[index].x > this.player.x - this.player.width / 2 - 30 && this.ennemies[index].y < this.player.y + this.player.height - 10 && this.ennemies[index].y > this.player.y - this.player.height / 2 + 20) {\n        this.endGame();\n      }\n    }\n  }, {\n    key: \"endGame\",\n    value: function endGame() {\n      this.levelManager.endGame();\n      this.levelElm.innerHTML = 'miaam';\n      this.restart.classList.add('active');\n      this.leaderboardBtn.classList.add('active');\n      this.sendScore();\n      this.finished = true;\n      this.restart.addEventListener('click', function () {\n        window.location.reload();\n      });\n    }\n  }, {\n    key: \"isLevelChanged\",\n    value: function isLevelChanged() {\n      var newLevel = this.levelManager.levelValue;\n\n      if (this.currentLevelValue != newLevel) {\n        this.createEnnemies();\n      }\n\n      this.levelSelector.innerHTML = this.currentLevelValue;\n      this.currentLevelValue = newLevel;\n    }\n  }, {\n    key: \"resizeCanvas\",\n    value: function resizeCanvas() {\n      this.canvas.width = window.innerWidth;\n      this.canvas.height = window.innerHeight;\n    }\n  }, {\n    key: \"clearCanvas\",\n    value: function clearCanvas() {\n      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    }\n  }, {\n    key: \"sendScore\",\n    value: function sendScore() {\n      fetch(\"https://dfts-bdd.herokuapp.com/score\", {\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        method: \"POST\",\n        body: JSON.stringify({\n          name: window.localStorage.getItem('name'),\n          score: this.levelManager.timer.seconds\n        })\n      });\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/javascript/components/Game.js?");

/***/ }),

/***/ "./src/javascript/components/LeaderBoard.js":
/*!**************************************************!*\
  !*** ./src/javascript/components/LeaderBoard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar LeaderBoard =\n/*#__PURE__*/\nfunction () {\n  function LeaderBoard() {\n    _classCallCheck(this, LeaderBoard);\n\n    this.fetchScores();\n  }\n\n  _createClass(LeaderBoard, [{\n    key: \"fetchScores\",\n    value: function fetchScores() {\n      fetch(\"https://dfts-bdd.herokuapp.com/score\").then(function (resp) {\n        return resp.json();\n      }).then(function (data) {\n        var leaderboardContainer = document.querySelector('.leaderboard'),\n            name = leaderboardContainer.querySelector('.leaderboard_name'),\n            score = leaderboardContainer.querySelector('.leaderboard_time');\n        data.forEach(function (element) {\n          var playerName = document.createElement('span'),\n              playerTime = document.createElement('span');\n          playerName.textContent = element.name;\n          playerName.classList.add('leaderboard_name--player');\n          playerTime.textContent = element.score;\n          playerTime.classList.add('leaderboard_time--player');\n          name.appendChild(playerName);\n          score.appendChild(playerTime);\n        });\n      });\n    }\n  }]);\n\n  return LeaderBoard;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeaderBoard);\n\n//# sourceURL=webpack:///./src/javascript/components/LeaderBoard.js?");

/***/ }),

/***/ "./src/javascript/components/LevelManager.js":
/*!***************************************************!*\
  !*** ./src/javascript/components/LevelManager.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer.js */ \"./src/javascript/components/Timer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar LevelManager =\n/*#__PURE__*/\nfunction () {\n  function LevelManager() {\n    _classCallCheck(this, LevelManager);\n\n    this.init();\n  }\n\n  _createClass(LevelManager, [{\n    key: \"init\",\n    value: function init() {\n      this.timer = new _Timer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.levelValue = 1;\n    }\n  }, {\n    key: \"levelDifficulty\",\n    value: function levelDifficulty() {\n      if (this.timer.seconds > 8.00 && this.levelValue == 1) {\n        this.levelValue = 2;\n      } else if (this.timer.seconds > 15.00 && this.levelValue == 2) {\n        this.levelValue = 3;\n      } else if (this.timer.seconds > 20.00 && this.levelValue == 3) {\n        this.levelValue = 4;\n      } else if (this.timer.seconds > 30.00 && this.levelValue == 4) {\n        this.levelValue = 5;\n      }\n\n      return this.levelValue;\n    }\n  }, {\n    key: \"endGame\",\n    value: function endGame() {\n      this.timer.stopTimer();\n    }\n  }]);\n\n  return LevelManager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LevelManager);\n\n//# sourceURL=webpack:///./src/javascript/components/LevelManager.js?");

/***/ }),

/***/ "./src/javascript/components/Player.js":
/*!*********************************************!*\
  !*** ./src/javascript/components/Player.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(_ref) {\n    var img = _ref.img,\n        x = _ref.x,\n        y = _ref.y,\n        width = _ref.width,\n        height = _ref.height;\n\n    _classCallCheck(this, Player);\n\n    this.img = img;\n    this.x = x;\n    this.y = y;\n    this.height = height;\n    this.width = width;\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(context) {\n      this.context = context;\n      this.context.save();\n      this.context.translate(this.x, this.y);\n      this.context.drawImage(this.img, 0, 0, this.width, this.height);\n      this.context.restore();\n      window.addEventListener('mousemove', this.getMousePos.bind(this));\n    }\n  }, {\n    key: \"updatePlayerPos\",\n    value: function updatePlayerPos() {\n      if (this.mouse) {\n        this.x = this.mouse.x - this.width / 2;\n        this.y = this.mouse.y - this.height / 2;\n      }\n    }\n  }, {\n    key: \"getMousePos\",\n    value: function getMousePos(e) {\n      this.mouse = {\n        x: e.pageX,\n        y: e.pageY\n      };\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/javascript/components/Player.js?");

/***/ }),

/***/ "./src/javascript/components/Timer.js":
/*!********************************************!*\
  !*** ./src/javascript/components/Timer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Timer =\n/*#__PURE__*/\nfunction () {\n  function Timer() {\n    var _this = this;\n\n    _classCallCheck(this, Timer);\n\n    this.startTime = Date.now();\n    this.seconds = 0;\n    this.interval = setInterval(function () {\n      var elapsedTime = Date.now() - _this.startTime;\n\n      _this.seconds = (elapsedTime / 1000).toFixed(2);\n      document.querySelector('.timer-value').innerHTML = \"\".concat(_this.seconds, \"s\");\n\n      _this.timer();\n    }, 0);\n  }\n\n  _createClass(Timer, [{\n    key: \"timer\",\n    value: function timer() {\n      return this.seconds;\n    }\n  }, {\n    key: \"stopTimer\",\n    value: function stopTimer() {\n      clearInterval(this.interval);\n    }\n  }]);\n\n  return Timer;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timer);\n\n//# sourceURL=webpack:///./src/javascript/components/Timer.js?");

/***/ }),

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Game */ \"./src/javascript/components/Game.js\");\n/* harmony import */ var _components_LeaderBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LeaderBoard */ \"./src/javascript/components/LeaderBoard.js\");\n//IMPORTS\n\n\n/*global window, document */\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var windowStart = document.querySelector('.js-window'),\n      buttonStart = windowStart.querySelector('.js-startBtn'),\n      leaderboard = document.querySelector('.js-leaderboard'),\n      leaderboardBtn = document.querySelector('.js-btnLB'),\n      inputName = document.querySelector('.input_name'),\n      leaderboardNeedUpdate = false;\n  leaderboardBtn.addEventListener('click', function () {\n    leaderboard.classList.toggle('active');\n\n    if (leaderboard.classList.contains('active')) {\n      leaderboardBtn.innerHTML = 'close leaderboard';\n    } else {\n      leaderboardBtn.innerHTML = 'view leaderboard';\n    }\n\n    if (!leaderboardNeedUpdate) {\n      leaderboardNeedUpdate = true;\n      new _components_LeaderBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n  });\n  buttonStart.addEventListener('click', function () {\n    windowStart.classList.add('hidden');\n    window.localStorage.setItem('name', inputName.value);\n    setTimeout(function () {\n      new _components_Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }, 500);\n  });\n});\n\n//# sourceURL=webpack:///./src/javascript/index.js?");

/***/ })

/******/ });