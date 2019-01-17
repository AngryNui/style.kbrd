//pcb's
/*var gh={
    "name":"GK64",
    "rows":[
        {
            "r1":[{
                1:["15x1"],
                2:["13x1","2"]
            }],
        },
        {
            "r2":[{
                1:["1.5","12x1","1.5"],
                2:["1.5","12x1","1.75E"]
            }]
        },
        {
            "r3":[{
                1:["1.75","11x1","2.25"],
                2:["1.75","12x1","1.25E"]
            }]
        },
        {
            "r4":[{
                1:["2.25","10x1","2.75"],
                2:["1","1.25","10x1","2.75"],
                3:["2.25","11x1","2.75","1"],
                4:["1","1.25","10x1","2.75","1"]
            }]
        },
        {
            "r5":[{
                1:["2.25","10x1","2.75"],
                2:["1","1.25","10x1","2.75"],
                3:["2.25","11x1","2.75","1"],
                4:["1","1.25","10x1","2.75","1"]
            }]
        }
    ],
    "combinationAllowed":"1",
    "combinationForbidden":[{
        1:"r2[2]:r3[1]"
    }]   
}
*/
var controls, camera, scene, renderer, loader;
var cube, line, light, light1, light2;


init();
animate();

function init(){
    //Screne & Renderer
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.gammaOutput = true;
    document.body.appendChild( renderer.domElement );
    window.addEventListener( 'resize', onWindowResize, false );

    //camera & orbitcontrol
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(5, 1, 0);
    // controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.8;
    controls.screenSpacePanning = false;

    //light
    //light = new THREE.AmbientLight(0xEEEEEE);
    light1 = new THREE.PointLight(0x101010, 10,0,0);
    light2 = new THREE.PointLight(0x101010, 10,0,0);
    light3 = new THREE.PointLight(0x101010, 5,0,0);
    light4 = new THREE.PointLight(0x101010, 5,0,0);
    light1.position.set(0,0,-10);
    light2.position.set(0,0,10);
    light3.position.set(-10,2,0);
    light4.position.set(10,2,0);
    scene.add(light1);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);
    //scene.add(light);


    //external models
    loader = new THREE.GLTFLoader();
    loader.load('/static/models/BoomBox/glTF/BoomBox.gltf', function ( gltf ) {
            gltf.scene.scale.set(100,100,100);
            gltf.scene.position.set(0,0,0);
            gltf.scene.rotateY(-Math.PI/2);
            scene.add(gltf.scene);
        }, undefined, function ( e ) {
            console.error( e )
        }
    );
    
    //internal objects
    /*var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    var material = new THREE.MeshPhongMaterial( {
        color: 0x11111,
        specular: 0xffffff,
        shininess: 10,
        flatShading: true
    } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    */
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    renderer.render( scene, camera );  
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function build60r1() {

}

function build60r2() {

}


/*
//cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( {
    color: 0xe1e1e1,
    specular: 0xffffff,
    shininess: 10,
    flatShading: true
} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//line
var materialLine = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometryLine = new THREE.Geometry();

geometryLine.vertices.push(new THREE.Vector3( -10, 0, 0) );
geometryLine.vertices.push(new THREE.Vector3( 0, 10, 0) );
geometryLine.vertices.push(new THREE.Vector3( 10, 0, 0) );
var line = new THREE.Line( geometryLine, materialLine );
//scene.add( line );

var animate = function () {
    requestAnimationFrame( animate );
    controls.update();
    //line.translateX = 0.1;
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    //cube.rotation.z += 0.01;
    renderer.render( scene, camera );
};

animate();
window.addEventListener( 'resize', onWindowResize, false );



*/