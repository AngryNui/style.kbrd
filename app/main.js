var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xe1e1e1 } );
var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

var materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometryLine = new THREE.Geometry();

geometryLine.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometryLine.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometryLine.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometryLine, materialLine );
scene.add( line );


//camera.position.z = 2;

var animate = function () {
    requestAnimationFrame( animate );
    //line.translateX = 0.1;
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();