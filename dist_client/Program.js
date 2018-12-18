define(["require", "exports", "./Scene"], function (require, exports, Scene_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Program = /** @class */ (function () {
        function Program() {
        }
        Program.Main = function () {
            var scene = new Scene_1.Scene();
            scene.Init();
            scene.Animate();
        };
        return Program;
    }());
    Program.Main();
});
//# sourceMappingURL=Program.js.map