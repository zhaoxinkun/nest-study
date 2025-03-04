"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 10:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(6);
const user_service_1 = __webpack_require__(11);
const config_1 = __webpack_require__(12);
const config_enum_1 = __webpack_require__(13);
let UserController = class UserController {
    userService;
    configService;
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    GetAll() {
        console.log(this.configService.get('DB_HOST'));
        console.log(this.configService.get(config_enum_1.Configenum.DB_HOST));
        return this.userService.GetAll();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "GetAll", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], UserController);


/***/ }),

/***/ 13:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Configenum = void 0;
var Configenum;
(function (Configenum) {
    Configenum["DB_TYPE"] = "DB_TYPE";
    Configenum["DB_HOST"] = "DB_HOST";
    Configenum["DB_PORT"] = "DB_PORT";
    Configenum["DB_USER"] = "DB_USER";
    Configenum["DB_PASSWORD"] = "DB_PASSWORD";
    Configenum["DB_NAME"] = "DB_NAME";
    Configenum["DB_SYNC"] = "DB_SYNC";
})(Configenum || (exports.Configenum = Configenum = {}));


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be6cf933cb1185f3e6b6")
/******/ })();
/******/ 
/******/ }
;