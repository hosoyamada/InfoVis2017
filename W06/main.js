function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set(0,0,5);
    scene.add( camera );
    

    
    var vertices = [
	[-1,1,0],
	[-1,-1,0],
	[1,-1,0],
	[1,1,0],
	[1,-1,1],
	[1,-1,-1],
	[1,1,-1],
	[1,1,1]
    ];
    /*   0,4----3,7
         |       |
         | o     |
         1,5----2,6
*/
    var faces = [
	[0,1,2],//Á°£±
	[0,2,3],//Á°£²
	[0,3,4],//¾å£±
	[3,7,4],//¾å£²
	[0,5,1],//º¸£±
	[0,4,1],//º¸£²
	[1,5,2],//²¼£±
	[5,2,6],//²¼£²
	[3,2,6],//±¦£±
	[3,6,7],//±¦£²
	[4,7,2],//±ü£±
	[4,2,5]//±ü£²
    ];
    var v0 = new THREE.Vector3().fromArray(vertices[0]);
    var v1 = new THREE.Vector3().fromArray(vertices[1]);
    var v2 = new THREE.Vector3().fromArray(vertices[2]);
    var v3 = new THREE.Vector3().fromArray(vertices[3]);
    var v4 = new THREE.Vector3().fromArray(vertices[4]);
    var v5 = new THREE.Vector3().fromArray(vertices[5]);
    var id = faces[0];
    var f0 = new THREE.Face3(id[0],id[1],id[2]);
     id = faces[1];
    var f1 = new THREE.Face3(id[0],id[1],id[2]);
     id = faces[2];
    var f2 = new THREE.Face3(id[0],id[1],id[2]);
     id = faces[3];
    var f3 = new THREE.Face3(id[0],id[1],id[2]);
     id = faces[4];
    var f4 = new THREE.Face3(id[0],id[1],id[2]);
     id = faces[5];
    var f5 = new THREE.Face3(id[0],id[1],id[2]);
    var geometry = new THREE.Geometry();
    geometry.vertices.push(v0);
    geometry.vertices.push(v1);
    geometry.vertices.push(v2);
    geometry.vertices.push(v3);
    geometry.vertices.push(v4);
    geometry.vertices.push(v5);
    geometry.faces.push(f0);
    geometry.faces.push(f1);
    geometry.faces.push(f2);
    geometry.faces.push(f3);
    geometry.faces.push(f4);
    geometry.faces.push(f5);
    
    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color(100,0,0);
    
    // Normal vectors for each face are automatically computed.
    geometry.computeFaceNormals();
    
    // Front: THREE.FrontSide (default)
    // Back: THREE.BackSide
    // Both: THREE.DoubleSide
    metrial.side = THREE.DoubleSide
    
    document.addEventListener( 'mousedown', mouse_down_event );
    function mouse_down_event( event )
    {
    // Mouse picking
    // ...
}
    
    var raycaster = new THREE.Raycaster( origin, direction );
    var intersects = raycaster.intersectObject( triangle );
    if ( intersects.length > 0 )
{
    intersects[0].face.color.setRGB( 1, 0, 0 );
    intersects[0].object.geometry.colorsNeedUpdate = true;
}
    
    var x_win = event.clientX;
    var y_win = event.clientY;

    var vx = renderer.domElement.offsetLeft;
    var vy = renderer.domElement.offsetTop;
    var vw = renderer.domElement.width;
    var vh = renderer.domElement.height;
    var x_NDC = 2 * ( x_win - vx ) / vw - 1;
    var y_NDC = -( 2 * ( y_win - vy ) / vh - 1 );

    var p_NDC = new THREE.Vector3( x_NDC, y_NDC, 1 );
var p_wld = p_NDC.unproject( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
