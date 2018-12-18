requirejs.config({
    baseUrl: "dist_client",
    paths: {
        "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/99/three.min",
        "orbit": "libs/three-orbitcontrols-ts/index"
    }
});

requirejs(["Program"], (Program) =>
{

});