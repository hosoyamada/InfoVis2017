function main()
{
<<<<<<< HEAD
  var volume = new KVS.LobsterData();
  var screen = new KVS.THREEScreen();

  screen.init( volume, {
width: window.innerWidth,
height: window.innerHeight,
enableAutoResize: false 
});

var bounds = Bounds( volume );
screen.scene.add( bounds );

var isovalue = 128;
var surfaces = Isosurfaces( volume, isovalue, screen);
screen.scene.add( surfaces );

document.addEventListener( 'mousemove', function() {
    screen.light.position.copy( screen.camera.position );
    });

window.addEventListener( 'resize', function() {
    screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

screen.loop();
=======
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false	
    });
  
    var bounds = Bounds( volume );
    screen.scene.add( bounds );
        
    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, screen);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
>>>>>>> 60b26ba83263f85952abaaaac557de029324bc98
}
