define(["require", "exports", "three", "../libs/three-orbitcontrols-ts/index"], function (require, exports, THREE, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scene = /** @class */ (function () {
        function Scene() {
            this._camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
            this._scene = new THREE.Scene();
            var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
            var material = new THREE.MeshNormalMaterial();
            this._mesh = new THREE.Mesh(geometry, material);
            this._controls = new index_1.OrbitControls(this._camera);
            this._renderer = new THREE.WebGLRenderer({ antialias: true });
        }
        Scene.prototype.Animate = function () {
            var _this = this;
            requestAnimationFrame(function () { return _this.Animate(); });
            this._mesh.rotation.x += 0.01;
            this._mesh.rotation.y += 0.01;
            this._renderer.render(this._scene, this._camera);
        };
        Scene.prototype.Init = function () {
            this._camera.position.z = 1;
            this._scene.add(this._mesh);
            this._renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(this._renderer.domElement);
        };
        return Scene;
    }());
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map