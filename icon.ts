"use strict";
var core_1 = require('@angular/core');
var iconList_1 = require('./iconList');
var IconComponent = (function () {
    function IconComponent() {
        this.vAlign = 'center';
        this.hAlign = 'center';
        this.fontSize = "16px";
    }
    Object.defineProperty(IconComponent.prototype, "charName", {
        get: function () {
            return String.fromCharCode(iconList_1.iconList[this.iconName]);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', Number)
    ], IconComponent.prototype, "iconName", void 0);
    __decorate([
        core_1.Input('vertical-align'), 
        __metadata('design:type', Object)
    ], IconComponent.prototype, "vAlign", void 0);
    __decorate([
        core_1.Input('horizontal-align'), 
        __metadata('design:type', Object)
    ], IconComponent.prototype, "hAlign", void 0);
    IconComponent = __decorate([
        core_1.Component({
            selector: 'Icon',
            template: "<Label style=\"font-size:{{fontSize}};horizontal-align:{{hAlign}};vertical-align:{{vAlign}};font-family:fontawesome\" [text]=\"charName\" ></Label>"
        }), 
        __metadata('design:paramtypes', [])
    ], IconComponent);
    return IconComponent;
}());
exports.IconComponent = IconComponent;
//# sourceMappingURL=icon.component.js.map
