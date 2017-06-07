dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press the 'W' key for thrust.
// Press the 'Spacebar' key to restart the game.

class Rocket.new(x, y) {
    inherits Entity ("rocket") x (x) y (y)
    def THRUST = 2
    def MAX_LANDING_SPEED = 15
    def LZ_HEIGHT = 180
    def rocket = Image ("rocket.png") width (64) height (64)
    def rocketWithThrust = Image ("thrust.png") width (64) height (64)
    def explosion = Image ("explosion.png") width (64) height (64)
    def flag = Image ("flag.png") width (64) height (64)
    rocketWithThrust.drawImage(rocket.getTag)
    flag.drawImage(rocket.getTag)
    setImage (rocket)
    var speed := 0
    update {
        if (isKeyDown (87)) then {
            speed := speed - THRUST
            setImage (rocketWithThrust)
        } else {
            setImage (rocket)
        }
        speed := speed + 1
        strafe (speed / 10)
        if (posY >= LZ_HEIGHT) then {
            if (speed >= MAX_LANDING_SPEED) then {
                setImage (explosion)
            } else {
                setImage (flag)
            }
            stop
        }
    }
}

object {
    inherits World ("moon") width (500) height (500)
    setBackground ("moon.jpg")
}
def foo = Rocket.new(20, 0 - 200)
