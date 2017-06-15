dialect "kitty"
def THRUST = 2
def MAX_LANDING_SPEED = 15
def LZ_HEIGHT = 432
def rocket = Image ("rocket.png") width (64) height (64)
def rocketWithThrust = Image ("thrust.png") width (64) height (64)
def explosion = Image ("explosion.png") width (64) height (64)
def flag = Image ("flag.png") width (64) height (64)
rocketWithThrust.drawImage(rocket.getTag)
flag.drawImage(rocket.getTag)

object {
    inherits World ("moon") width (500) height (500)
    setBackground ("moon.jpg")
}

object {
    inherits Entity ("player") x (272) y (0)
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



