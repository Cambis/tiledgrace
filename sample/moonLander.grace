dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press the 'W' key for thrust.
// Press the 'Spacebar' key to restart the game.

def foo = World
foo.setBackground("moon.jpg")
setWorld(foo)
def bar = Entity("player")x(20)y(0 - 200)actions{
    def THRUST = 2
    def MAX_LANDING_SPEED = 15
    def LZ_HEIGHT = 180
    def rocket = Image("rocket.png")width(64)height(64)
    def rocketWithThrust = Image("thrust.png")width(64)height(64)
    def explosion = Image("explosion.png")width(64)height(64)
    def flag = Image("flag.png")width(64)height(64)
    rocketWithThrust.drawImage(rocket.getTag) 
    flag.drawImage(rocket.getTag)
    setImage(rocket)
    var speed := 0
    var altitude := getY
    update {
        if (foo.isKeyDown(87)) then {
            speed := speed - THRUST
            setImage(rocketWithThrust)
        } else {
            setImage(rocket)
        }   
        speed := speed + 1 
        altitude := altitude + (speed / 10)
        setY(altitude)
        if (getY >= LZ_HEIGHT) then {
            if (speed >= MAX_LANDING_SPEED) then {
                print "KA BOOM!!!!!!"
                setImage(explosion)
                stop
            } else {
                print "ANOTHER HAPPY LANDING"
                setImage(flag)
                stop
            }
        }
    }
} 
foo.addEntity(bar)