dialect "kitty"
def THRUST = 2
def MAX_LANDING_SPEED = 15
def LZ_HEIGHT = 180
def rocket = Image ("rocket.png") width (64) height (64)
def rocketWithThrust = Image ("thrust.png") width (64) height (64)
def explosion = Image ("explosion.png") width (64) height (64)
def flag = Image ("flag.png") width (64) height (64)
rocketWithThrust.drawImage(rocket.getTag)
flag.drawImage(rocket.getTag)

object {
    inherits World
    setBackground ("moon.jpg")
}

object {
    inherits Entity ("player") x (20) y (0 - 200)
    setImage (rocket)
    var speed := 0
    var altitude := posY
    update {
        if (isKeyDown (87)) then {
            speed := speed - THRUST
            setImage (rocketWithThrust)
        } else {
            setImage (rocket)
        }
        speed := speed + 1
        altitude := altitude + speed / 10
        posY := altitude
        if (posY >= LZ_HEIGHT) then {
            if (speed >= MAX_LANDING_SPEED) then {
                print ("KA BOOM!!!!!!")
                setImage (explosion)
                stop
            } else {
                print ("ANOTHER HAPPY LANDING")
                setImage (flag)
                stop
            }
        }
    }
}

