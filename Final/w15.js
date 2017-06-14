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

  //point_x
  var pmin_x = 0;
  var pmax_x = volume.resolution.x - 2;
  var point_x = Math.round(KVS.Mix( pmin_x, pmax_x, 0.5 ));
  //point_y
  var pmin_y = 0;
  var pmax_y = volume.resolution.y - 2;
  var point_y = Math.round(KVS.Mix( pmin_y, pmax_y, 0.5 ));
  //point_z
  var pmin_z = 0;
  var pmax_z = volume.resolution.z - 2;
  var point_z = Math.round(KVS.Mix( pmin_z, pmax_z, 0.5 ));
  //normal_x
  var nmin_x = -1;
  var nmax_x = 1;
  var normal_x = Math.round(KVS.Mix( nmin_x, nmax_x, 0.5 ));
  //normal_y
  var nmin_y = -1;
  var nmax_y = 1;
  var normal_y = Math.round(KVS.Mix( nmin_y, nmax_y, 0.5 ));
  //normal_z
  var nmin_z = -1;
  var nmax_z = 1;
  var normal_z = Math.round(KVS.Mix( nmin_z, nmax_z, 1 ));

  var point = new THREE.Vector3(point_x,point_y,point_z);
  var normal = new THREE.Vector3(normal_x,normal_y,normal_z);
  var surfaces = SlicePlane( volume, point, normal );
  screen.scene.add( surfaces );
  var line = KVS.ToTHREELine( box.exec( volume ) );
  screen.scene.add( line );

  document.getElementById('status').innerHTML = "STATUS: Point(" + point_x + "," + point_y + "," + point_z + ") Normal_Vector(" + normal_x + "," + normal_y + "," + normal_z + ")";


  /*
     var smin = volume.min_value;
     var smax = volume.max_value;
     var isovalue = KVS.Mix( smin, smax, 0.5 );
     var isosurface = new KVS.Isosurface();
     isosurface.setIsovalue( isovalue );
   */
  //show point_x
  document.getElementById('label_px').innerHTML = "Point_x: " + Math.round( point_x );
  document.getElementById('point_x')
    .addEventListener('mousemove', function() {
        var value_px = +document.getElementById('point_x').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var point_x = KVS.Mix( pmin_x, pmax_x, value_px );
        document.getElementById('label_px').innerHTML = "Point_x: " + Math.round( point_x );
        });
  //show point_y
  document.getElementById('label_py').innerHTML = "Point_y: " + Math.round( point_y );
  document.getElementById('point_y')
    .addEventListener('mousemove', function() { var value_py = +document.getElementById('point_y').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var point_y = KVS.Mix( pmin_y, pmax_y, value_py );
        document.getElementById('label_py').innerHTML = "Point_y: " + Math.round( point_y );
        });
  //show point_z
  document.getElementById('label_pz').innerHTML = "Point_z: " + Math.round( point_z );
  document.getElementById('point_z')
    .addEventListener('mousemove', function() {
        var value_pz = +document.getElementById('point_z').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var point_z = KVS.Mix( pmin_z, pmax_z, value_pz );
        document.getElementById('label_pz').innerHTML = "Point_z: " + Math.round( point_z );
        });
  //show normal_x
  document.getElementById('label_nx').innerHTML = "Normal_x: " + Math.round( normal_x );
  document.getElementById('normal_x')
    .addEventListener('mousemove', function() {
        var value_nx = +document.getElementById('normal_x').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var normal_x = KVS.Mix( nmin_x, nmax_x, value_nx );
        document.getElementById('label_nx').innerHTML = "Normal_x: " + Math.round( normal_x );
        });
  //show normal_y
  document.getElementById('label_ny').innerHTML = "Normal_y: " + Math.round( normal_y );
  document.getElementById('normal_y')
    .addEventListener('mousemove', function() {
        var value_ny = +document.getElementById('normal_y').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var normal_y = KVS.Mix( nmin_y, nmax_y, value_ny );
        document.getElementById('label_ny').innerHTML = "Normal_y: " + Math.round( normal_y );
        });
  //show normal_z
  document.getElementById('label_nz').innerHTML = "Normal_z: " + Math.round( normal_z );
  document.getElementById('normal_z')
    .addEventListener('mousemove', function() {
        var value_nz = +document.getElementById('normal_z').value;
        //var point_z = Math.round(KVS.Mix( smin, smax, value ));
        var normal_z = KVS.Mix( nmin_z, nmax_z, value_nz );
        document.getElementById('label_nz').innerHTML = "Normal_z: " + Math.round( normal_z );
        });

  //reset status
  document.getElementById('reset-button')
    .addEventListener('click', function() {
        screen.scene.remove( surfaces );
        //point_x
        var point_x = Math.round(KVS.Mix( pmin_x, pmax_x, 0.5 ));
        //point_y
        var point_y = Math.round(KVS.Mix( pmin_y, pmax_y, 0.5 ));
        //point_z
        var point_z = Math.round(KVS.Mix( pmin_z, pmax_z, 0.5 ));
        //normal_x
        var normal_x = Math.round(KVS.Mix( nmin_x, nmax_x, 0.5 ));
        //normal_y
        var normal_y = Math.round(KVS.Mix( nmin_y, nmax_y, 0.5 ));
        //normal_z
        var normal_z = Math.round(KVS.Mix( nmin_z, nmax_z, 1 ));

        var point = new THREE.Vector3(point_x,point_y,point_z);
        var normal = new THREE.Vector3(normal_x,normal_y,normal_z);
        surfaces = SlicePlane( volume, point, normal );
        screen.scene.add( surfaces );
        document.getElementById('label_px').innerHTML = "Point_x: " + Math.round( point_x );
        document.getElementById('point_x').value = 0.5;
        document.getElementById('label_py').innerHTML = "Point_y: " + Math.round( point_y );
        document.getElementById('point_y').value = 0.5;
        document.getElementById('label_pz').innerHTML = "Point_z: " + Math.round( point_z );
        document.getElementById('point_z').value = 0.5;
        document.getElementById('label_nx').innerHTML = "Normal_x: " + Math.round( normal_x );
        document.getElementById('normal_x').value = 0.5;
        document.getElementById('label_ny').innerHTML = "Normal_y: " + Math.round( normal_y );
        document.getElementById('normal_y').value = 0.5;
        document.getElementById('label_nz').innerHTML = "Normal_z: " + Math.round( normal_z );
        document.getElementById('normal_z').value = 1;
    });
  //apply changed point
  document.getElementById('change-isovalue-button')
    .addEventListener('click', function() {
        screen.scene.remove( surfaces );
        var value_px = +document.getElementById('point_x').value;
        var point_x = Math.round(KVS.Mix( pmin_x, pmax_x, value_px ));
        var value_py = +document.getElementById('point_y').value;
        var point_y = Math.round(KVS.Mix( pmin_y, pmax_y, value_py ));
        var value_pz = +document.getElementById('point_z').value;
        var point_z = Math.round(KVS.Mix( pmin_z, pmax_z, value_pz ));
        var value_nx = +document.getElementById('normal_x').value;
        var normal_x = Math.round(KVS.Mix( nmin_x, nmax_x, value_nx ));
        var value_ny = +document.getElementById('normal_y').value;
        var normal_y = Math.round(KVS.Mix( nmin_y, nmax_y, value_ny ));
        var value_nz = +document.getElementById('normal_z').value;
        var normal_z = Math.round(KVS.Mix( nmin_z, nmax_z, value_nz ));

        var point = new THREE.Vector3(point_x,point_y,point_z);
        var normal = new THREE.Vector3(normal_x,normal_y,normal_z);
        surfaces = SlicePlane( volume, point, normal );
        screen.scene.add( surfaces );
        
        document.getElementById('status').innerHTML = "STATUS: Point(" + point_x + "," + point_y + "," + point_z + ") Normal_Vector(" + normal_x + "," + normal_y + "," + normal_z + ")";
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
