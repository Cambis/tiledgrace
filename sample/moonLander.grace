dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press 'W' for thrust.

def foo = World
setWorld(foo)

var bar := Entity(10, -200)
def action = object {
    
    def THRUST = -2
    def MAX_LANDING_SPEED = 15
    
    var speed := 0
    var altitude := bar.getY
    
    method update {
        
        processInput
        fall
        
        altitude := altitude + (speed / 10)
        bar.setLocation(bar.getX, altitude)
        checkCollision
    }
    
    method processInput {
        if (foo.isKeyDown(87)) then {
            speed := speed + THRUST
        }
    }
    
    method fall {
        speed := speed + 1 
    }
    
    method checkCollision {
        if ((speed >= MAX_LANDING_SPEED) && (bar.getY >= 218)) then {
            print "KA BOOM!!!!!!"
            foo.stop
        } elseif {(speed < MAX_LANDING_SPEED) && (bar.getY >= 218)} then {
            print "ANOTHER HAPPY LANDING"
            foo.stop
        }
    }
}
bar.setAction(action)
foo.addEntity(bar)