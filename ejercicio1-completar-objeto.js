// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(0,-6,0.5);
	//camera.position.set(0,-4,0.5);
	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	// OBJECT

	var migeometria = [];
	var migeometriaTronco = [];
	var migeometriaEstrella = [];
	var migeometriaEstrella1 = [];
	var sphere1 = []; 
	

	var material = [];
	var miobjeto =[];
	var materialTronco = [];
	var miobjetoTronco = [];
	var materialEstrella = [];
	var miobjetoEstrella = [];
	var materialEstrella1 =[];
	var miobjetoEstrella1 =[];
	var objetosphere1 = [];

	var a_col = [];
	a_col.push(0xff0000); //0
	a_col.push(0x00ff00);
	a_col.push(0x0000ff);
	a_col.push(0xff00aa);
	a_col.push(0xaaff00);
	a_col.push(0x00aaff);
	a_col.push(0xff0099);
	a_col.push(0x99ff00);
	a_col.push(0x0099ff); //8
	

	var n = 5;

	for (let i = 0; i < n; i++) {

		var desx = Math.random() * (3 - (-3)) - 3;
		var desy = Math.random() * (3 - (-3)) - 3;
		var desz = 0;

		for (let j = 0 + (20*i) ; j < 5 + (20*i); j++) {

			var t = Math.random();
	
			var x = 0.7+(t*(-0.7))
			var y = 0+(t*(0.7))
	
			var tt = Math.random();
			var x1 = x + (tt*(0-x)) + desx; 
			var y1 = y + (tt*(0-y)) + desy;
			var z1 = 0 + (tt*(0.5-0)) + desz;

			var color = Math.round(Math.random() * 8);
	
			sphere1[j] = new THREE.SphereGeometry(0.06, 64, 32);
			sphere1[j].computeFaceNormals();
			objetosphere1[j] = new THREE.Mesh(sphere1[j], new THREE.MeshBasicMaterial({ color: a_col[color] }));
			objetosphere1[j].translateX(x1);
			objetosphere1[j].translateY(y1);
			objetosphere1[j].translateZ(z1);
		}
		for (let j = 5 + (20*i) ; j < 10 + (20*i); j++) {

			var t = Math.random();

			var x = 0+(t*(-0.7))
			var y = 0.7+(t*(-0.7))

			var tt = Math.random();
			var x1 = x + (tt*(0-x)) + desx; 
			var y1 = y + (tt*(0-y)) + desy;
			var z1 = 0 + (tt*(0.5-0));

			var color = Math.round(Math.random() * 8);

			sphere1[j] = new THREE.SphereGeometry(0.06, 64, 32);
			sphere1[j].computeFaceNormals();
			objetosphere1[j] = new THREE.Mesh(sphere1[j], new THREE.MeshBasicMaterial({ color: a_col[color] }));
			objetosphere1[j].translateX(x1);
			objetosphere1[j].translateY(y1);
			objetosphere1[j].translateZ(z1);
		}
		for (let j = 10 + (20*i) ; j < 15 + (20*i); j++) {

			var t = Math.random();

			var x = -0.7+(t*(0.7))
			var y = 0+(t*(-0.7))

			var tt = Math.random();
			var x1 = x + (tt*(0-x)) + desx; 
			var y1 = y + (tt*(0-y)) + desy;
			var z1 = 0 + (tt*(0.5-0));

			var color = Math.round(Math.random() * 8);

			sphere1[j] = new THREE.SphereGeometry(0.06, 64, 32);
			sphere1[j].computeFaceNormals();
			objetosphere1[j] = new THREE.Mesh(sphere1[j], new THREE.MeshBasicMaterial({ color: a_col[color] }));
			objetosphere1[j].translateX(x1);
			objetosphere1[j].translateY(y1);
			objetosphere1[j].translateZ(z1);
		}
		for (let j = 15 + (20*i) ; j < 20 + (20*i); j++) {

			var t = Math.random();

			var x = 0+(t*(0.7))
			var y = -0.7+(t*(0.7))

			var tt = Math.random();
			var x1 = x + (tt*(0-x)) +desx; 
			var y1 = y + (tt*(0-y)) + desy;
			var z1 = 0 + (tt*(0.5-0));

			var color = Math.round(Math.random() * 8);

			sphere1[j] = new THREE.SphereGeometry(0.06, 64, 32);
			sphere1[j].computeFaceNormals();
			objetosphere1[j] = new THREE.Mesh(sphere1[j], new THREE.MeshBasicMaterial({ color: a_col[color] }));
			objetosphere1[j].translateX(x1);
			objetosphere1[j].translateY(y1);
			objetosphere1[j].translateZ(z1);
		}
	
		//var desz = Math.random() * (1 - (-1)) - 1;

		console.log(desx," ",desy," ",desz);

		migeometria[i] = new THREE.Geometry();
		migeometria[i].vertices.push( new THREE.Vector3( 0.7 + desx, 0.0 + desy, 0.0 + desz ) );	//0A
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.7 + desy, 0.0 + desz ) );	//1B
		migeometria[i].vertices.push( new THREE.Vector3( -0.7 + desx, 0.0 + desy, 0.0 + desz ) );	//2C
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.7 + desy, 0.0 + desz ) );	//3D
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.0 + desy, 0.5 + desz ) );	//4E

		migeometria[i].vertices.push( new THREE.Vector3( 0.5 + desx, 0.0 + desy, 0.3 + desz ) );	//5A
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.5 + desy, 0.3 + desz ) );	//6B
		migeometria[i].vertices.push( new THREE.Vector3( -0.5 + desx, 0.0 + desy, 0.3 + desz ) );	//7C
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.5 + desy, 0.3 + desz ) );	//8D
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.0 + desy, 0.7 + desz ) );	//9E

		migeometria[i].vertices.push( new THREE.Vector3( 0.3 + desx, 0.0 + desy, 0.6 + desz ) );	//10A
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.3 + desy, 0.6 + desz ) );	//11B
		migeometria[i].vertices.push( new THREE.Vector3( -0.3 + desx, 0.0 + desy, 0.6 + desz ) );	//12C
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.3 + desy, 0.6 + desz ) );	//13D
		migeometria[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.0 + desy, 0.9 + desz ) );	//14E

		for (let j = 0; j < 3; j++) {
			migeometria[i].faces.push( new THREE.Face3( 0 + (5*j), 1 + (5*j), 4 + (5*j) ) );
			migeometria[i].faces.push( new THREE.Face3( 1 + (5*j), 2 + (5*j), 4 + (5*j) ) );
			migeometria[i].faces.push( new THREE.Face3( 2 + (5*j), 3 + (5*j), 4 + (5*j) ) );
			migeometria[i].faces.push( new THREE.Face3( 3 + (5*j), 0 + (5*j), 4 + (5*j) ) );
			migeometria[i].faces.push( new THREE.Face3( 0 + (5*j), 2 + (5*j), 1 + (5*j) ) );
			migeometria[i].faces.push( new THREE.Face3( 0 + (5*j), 3 + (5*j), 2 + (5*j) ) );
		}

		migeometriaTronco[i] = new THREE.Geometry();
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.15 + desy, -0.4 + desz ) );	//0A
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.15 + desx, 0.0 + desy, -0.4 + desz ) );	//1B
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.15 + desy, -0.4 + desz ) );	//2C
		migeometriaTronco[i].vertices.push( new THREE.Vector3( -0.15 + desx, 0.0 + desy, -0.4 + desz ) );	//3D
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.15 + desy, 0.0 + desz ) );	//4E
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.15 + desx, 0.0 + desy, 0.0 + desz ) );		//5F
		migeometriaTronco[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.15 + desy, 0.0 + desz ) );		//6G
		migeometriaTronco[i].vertices.push( new THREE.Vector3( -0.15 + desx, 0.0 + desy, 0.0  + desz) );	//7H

		migeometriaTronco[i].faces.push( new THREE.Face3( 0, 2, 1 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 0, 3, 2 ) );

		migeometriaTronco[i].faces.push( new THREE.Face3( 0, 1, 5 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 0, 5, 4 ) );

		migeometriaTronco[i].faces.push( new THREE.Face3( 1, 2, 6 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 1, 6, 5 ) );

		migeometriaTronco[i].faces.push( new THREE.Face3( 4, 5, 6 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 4, 6, 7 ) );

		migeometriaTronco[i].faces.push( new THREE.Face3( 7, 2, 3 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 7, 6, 2 ) );

		migeometriaTronco[i].faces.push( new THREE.Face3( 4, 3, 0 ) );
		migeometriaTronco[i].faces.push( new THREE.Face3( 4, 7, 3 ) );

		migeometriaEstrella[i] = new THREE.Geometry();
		migeometriaEstrella[i].vertices.push( new THREE.Vector3( 0.07 + desx, 0.0 + desy, 0.95 + desz ) );	//0A
		migeometriaEstrella[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.07 + desy, 0.95 + desz ) );	//1B
		migeometriaEstrella[i].vertices.push( new THREE.Vector3( -0.07 + desx, 0.0 + desy, 0.95 + desz ) );	//2C
		migeometriaEstrella[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.07 + desy, 0.95 + desz ) );	//3D
		migeometriaEstrella[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.0 + desy, 0.87 + desz ) );	//4E

		migeometriaEstrella[i].faces.push( new THREE.Face3( 0, 1, 4 ) );
		migeometriaEstrella[i].faces.push( new THREE.Face3( 1, 2, 4 ) );
		migeometriaEstrella[i].faces.push( new THREE.Face3( 2, 4, 3 ) );
		migeometriaEstrella[i].faces.push( new THREE.Face3( 3, 4, 0 ) );
		migeometriaEstrella[i].faces.push( new THREE.Face3( 0, 1, 2 ) );
		migeometriaEstrella[i].faces.push( new THREE.Face3( 0, 2, 3 ) );

		migeometriaEstrella1[i] = new THREE.Geometry();
		migeometriaEstrella1[i].vertices.push( new THREE.Vector3( 0.07 + desx, 0.0 + desy, 0.91 + desz ) );	//0A
		migeometriaEstrella1[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.07 + desy, 0.91 + desz ) );	//1B
		migeometriaEstrella1[i].vertices.push( new THREE.Vector3( -0.07 + desx, 0.0 + desy, 0.91 + desz ) );	//2C
		migeometriaEstrella1[i].vertices.push( new THREE.Vector3( 0.0 + desx, -0.07 + desy, 0.91 + desz ) );	//3D
		migeometriaEstrella1[i].vertices.push( new THREE.Vector3( 0.0 + desx, 0.0 + desy, 0.99 + desz ) );	//4E

		migeometriaEstrella1[i].faces.push( new THREE.Face3( 0 , 1 , 4  ) );
		migeometriaEstrella1[i].faces.push( new THREE.Face3( 1 , 2 , 4  ) );
		migeometriaEstrella1[i].faces.push( new THREE.Face3( 2 , 3 , 4	) );
		migeometriaEstrella1[i].faces.push( new THREE.Face3( 3 , 0 , 4  ) );
		migeometriaEstrella1[i].faces.push( new THREE.Face3( 0 , 2 , 1  ) );
		migeometriaEstrella1[i].faces.push( new THREE.Face3( 0 , 3 , 2  ) );
		
		material[i] = new THREE.MeshBasicMaterial( { color: 0x00FF00 } ); // Material de color rojo
		miobjeto[i] = new THREE.Mesh (migeometria[i], material[i]); // Crea el objeto

		//materialAdorno[i] = new THREE.MeshBasicMaterial( { color: 0x831F8C } ); // Material de color rojo
    	//miobjetoAdorno[i] = new THREE.Mesh (migeometriaAdorno[i], materialAdorno[i]); // Crea el objeto

		materialTronco[i] = new THREE.MeshBasicMaterial( { color: 0x870000 } ); // Material de color rojo
		miobjetoTronco[i] = new THREE.Mesh (migeometriaTronco[i], materialTronco[i]); // Crea el objeto

		materialEstrella[i] = new THREE.MeshBasicMaterial( { color: 0xE0DF4B } ); // Material de color rojo
		miobjetoEstrella[i] = new THREE.Mesh (migeometriaEstrella[i], materialEstrella[i]); // Crea el objeto
		materialEstrella1[i] = new THREE.MeshBasicMaterial( { color: 0xFFFD55 } ); // Material de color rojo
		miobjetoEstrella1[i] = new THREE.Mesh (migeometriaEstrella1[i], materialEstrella1[i]); // Crea el objeto
	}
	// SCENE

	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );

	for (let i = 0; i < n; i++) {

		scene.add( miobjeto[i] );
		scene.add( miobjetoTronco[i] );
		scene.add( miobjetoEstrella[i] );
		scene.add( miobjetoEstrella1[i] );
	}

	for (let j = 0; j < 20 * n; j++) {
		scene.add( objetosphere1[j] );
	}

}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}