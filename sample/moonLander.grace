dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press the 'W' key for thrust.
// Press the 'Spacebar' key to restart the game.

def foo = World
foo.setBackground("moon.jpg")
setWorld(foo)

def bar = Entity(20, -200)
def action = object {
    
    def THRUST = -2
    def MAX_LANDING_SPEED = 15
    def LZ_HEIGHT = 180
    
    def rocket = Image("rocket.png", 64, 64)
    def rocketWithThrust = Image("thrust.png", 64, 64)
    def explosion = Image("explosion.png", 64, 64)
    def flag = Image("flag.png", 64, 64)
    rocketWithThrust.drawImage(rocket.getTag) 
    flag.drawImage(rocket.getTag)
    bar.setImage(rocket)
    
    var speed := 0
    var altitude := bar.getY
    
    
    method update {
        
        handleInput
        fall
        
        altitude := altitude + (speed / 10)
        bar.setLocation(bar.getX, altitude)
        checkCollision
    }
    
    method handleInput {
        if (foo.isKeyDown(87)) then {
            speed := speed + THRUST
            bar.setImage(rocketWithThrust)
        } else {
            bar.setImage(rocket)
        }   
    }
    
    method fall {
        speed := speed + 1 
    }
    
    method checkCollision {
        if ((speed >= MAX_LANDING_SPEED) && (bar.getY >= LZ_HEIGHT)) then {
            print "KA BOOM!!!!!!"
            bar.setImage(explosion)
            foo.stop
        } elseif {(speed < MAX_LANDING_SPEED) && (bar.getY >= LZ_HEIGHT)} then {
            print "ANOTHER HAPPY LANDING"
            bar.setImage(flag)
            foo.stop
        }
    }
}
bar.setAction(action)
foo.addEntity(bar)