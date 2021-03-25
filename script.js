let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})
renderer.setClearColor("#222222")
// Setup Three File
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial( {color: 0xff0051} );
let cube =  new THREE.Mesh(geometry, material);
//Making gemometry and mesh
scene.add(cube);
renderer.render(scene, camera);
camera.position.z = 5;
//adding object and camera
//animation for cube

let ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )


let pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

let thegeometry = new THREE.BoxGeometry( 1, 1, 1)
let thematerial = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
let thecube = new THREE.Mesh ( thegeometry, thematerial )
scene.add( thecube )

let wireFrame = new THREE.BoxGeometry(3, 3, 3)
let wireFrameMaterial = new THREE.MeshBasicMaterial({color: '#dadada', wireframe: true, transparent: true,});

let wireFrameCube = new THREE.Mesh(wireFrame, wireFrameMaterial);
scene.add(wireFrameCube);




//adding light

//pointing light

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    thecube.rotation.x += 0.04;
    thecube.rotation.y += 0.04;
    wireFrameCube.rotation.x -= 0.01;
    wireFrameCube.rotation.y -= 0.01;
    renderer.render( scene, camera );
}
animate();
