
// We need 3 things everytime we use Three.js
 // Scene + Camera + Renderer
 let scene = new THREE.Scene()
 let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
 let renderer = new THREE.WebGLRenderer({ antialias: true})
 
 renderer.setSize( window.innerWidth, window.innerHeight )
 // sets renderer background color
 renderer.setClearColor("#222222")
 document.body.appendChild( renderer.domElement )
 camera.position.z = 5
 
 // resize canvas on resize window
 window.addEventListener( 'resize', () => {
     let width = window.innerWidth
     let height = window.innerHeight
     renderer.setSize( width, height )
     camera.aspect = width / height
     camera.updateProjectionMatrix()
 })
 
 // basic cube

 let wireframeCube = new THREE.Mesh ( Boxgeometry, Boxmaterial )
 scene.add( wireframeCube )
 
 // ambient light
 var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
 scene.add( ambientLight )
 
 // point light
 var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );
 

let thegeometry = new THREE.BoxGeometry( 1, 1, 1)
let thematerial = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
let thecube = new THREE.Mesh ( thegeometry, thematerial )
scene.add( thecube )



 let geometry = new THREE.BoxGeometry( 1, 1, 1)
 let material = new THREE.MeshStandardMaterial( { color: 0xff0051, flatShading: true, metalness: 0, roughness: 1 })
 let cube = new THREE.Mesh ( geometry, material )
 scene.add( cube )
 
 // wireframe cube
 let Boxgeometry = new THREE.BoxGeometry( 3, 3, 3)
 let Boxmaterial = new THREE.MeshBasicMaterial( {
     color: "#dadada", wireframe: true, transparent: true
 })
 function animate() {
     requestAnimationFrame( animate )
     cube.rotation.x += 0.04;
     cube.rotation.y += 0.04;
     wireframeCube.rotation.x -= 0.01;
     wireframeCube.rotation.y -= 0.01;
     renderer.render( scene, camera )
 }
 animate()
 