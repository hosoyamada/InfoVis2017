function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
      targetDom: document.getElementById('display'),
        enableAutoResize: false
    });
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
    
    setup();
    screen.loop();

    function setup()   
    {
        var color = new KVS.Vec3( 0, 0, 0 );
        var box = new KVS.BoundingBox();
        box.setColor( color );
        box.setWidth( 2 );

	var smin = 0;
        var smax = volume.resolution.z - 2;
	var point_z = Math.round(KVS.Mix( smin, smax, 0.5 ));
	var point = new THREE.Vector3(60,0,point_z);
	var normal = new THREE.Vector3(0,0,1);
	var surfaces = SlicePlane( volume, point, normal );
	screen.scene.add( surfaces );
	
	/*
        var smin = volume.min_value;
        var smax = volume.max_value;
        var isovalue = KVS.Mix( smin, smax, 0.5 );
        var isosurface = new KVS.Isosurface();
        isosurface.setIsovalue( isovalue );
*/

        document.getElementById('label').innerHTML = "Point_z: " + Math.round( point_z );
	
        var line = KVS.ToTHREELine( box.exec( volume ) );
        screen.scene.add( line );


        document.getElementById('point_z')
            .addEventListener('mousemove', function() {
                var value = +document.getElementById('point_z').value;
                //var point_z = Math.round(KVS.Mix( smin, smax, value ));
                var point_z = KVS.Mix( smin, smax, value );
                document.getElementById('label').innerHTML = "Point_z: " + Math.round( point_z );
            });

        document.getElementById('change-isovalue-button')
            .addEventListener('click', function() {
		screen.scene.remove( surfaces );
                var value = +document.getElementById('point_z').value;
                var point_z = Math.round(KVS.Mix( smin, smax, value ));
		var point = new THREE.Vector3(60,60,point_z);
		var normal = new THREE.Vector3(0,0,1);
		surfaces = SlicePlane( volume, point, normal );
		screen.scene.add( surfaces );
            });

        document.addEventListener( 'mousemove', function() {
            screen.light.position.copy( screen.camera.position );
        });

        window.addEventListener('resize', function() {
            screen.resize([
                window.innerWidth * 0.8,
                window.innerHeight
            ]);
        });

        screen.draw();
    }

    
    
    // var isovalue = 128;
    /*
    var point = new THREE.Vector3(60,60,17);
    var normal = new THREE.Vector3(0,0,1);
    var surfaces = SlicePlane( volume, point, normal );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });
*/

}


function changeIsovalue() {

}
