# Simple Game Programming in Grace
Project for ENGR489 MMXVII. 

## Supervisors
- James Noble
- Michael Homer

## Live Site
- The current master implementation is here:
https://cambis.github.io/tiledgrace/

# Kitty Dialect
The kitty dialect contains the functions needed to make simple games in Grace.

## Usage
Import the dialect using this line:
````grace
dialect "kitty"
````

## Main Classes
### KittyWorld
- Worlds represent the game world, each game needs one world to run.
- Use the `inherits` clause to turn an object into a world.
- The constructor needs a tag, as well as the dimensions of the world. Any movement inside the world is ditacted by these dimensions.
- Worlds created as objects will automatically be set as the game world. Please only use one world per game.
````grace
// Adds a new world object, this is automatically set to be the main game world.
object {
    inherits World ("foo") width (500) height (500)
}
````

### KittyEntity
- Entities reprent objects in the game world, they are assigned to a world. The constructor is fed a tag and the coordinates of the entity.
- Use the `inherits` clause to turn an object or class into an entity.
- Entites created as objects will automatically be added to the game world.
````grace
// Adds a new entity with player tag to the game world.
object {
    inherits Entity ("player") x (0) y (0)
}
````
- Entities can be treated as classes. 
````grace
class Rocket.new(x', y') {
    inherits Entity ("rocket") x (x') y (y')
}

// Add new entity with rocket tag to the game world.
def foo = Rocket.new(0, 0)
````

## World Setup
- Each world needs to be represented by one World object. 
- The game will not run if a world is not set.

### Running the Game
- You can run the game by using the `Run` button in the editor. Pressing the `K` key will stop the game. You can also use the `stop` method to end the game.

## Images
- Images must currently be uploaded to the root directory of the server. There are default images on both the `KittyWorld` and `KittyEntity` classes. 
- Images are created by giving them a filepath and dimensions, the current canvas size is 500 x 500 so it is best if you stick under that.
````grace
def image = Image ("rocket.png") width (64) height (64)
````
### Compound Images
- You can draw an image on top of another like so:
````grace
// Create a rocket with thrust.
def image = Image ("rocket.png") width (64) height (64)
def imageB = Image ("thrust.png") width (64) height (64)
imageB.drawImage(image.getTag)
````

### Backgrounds
- Currently the background for the world takes a filepath as an argument.
````grace
object {
    inherits World ("foo") width (500) height (500)
    setBackground ("moon.jpg")
}
````

### Entity Images
- Entities can be given images, or image filepaths.
````grace
def image = Image ("realyee.png") width(64) height (64)

object {
    inherits Entity ("player") x (0) y (0)

    // Manually set image
    setImage(image)

    // Or
    createImage("realyee.png")
}
````

## Actions
- In order for an entity to complete a task, it must first be supplied with an action. Actions inside an entity object wil be executed once, actions inside an `update` block will be executed continously.
````grace
object {
    inherits Entity ("foo") x (10) y (20)

    // Executed once
    move (10) 

    // Executed always
    update {
        turn (10)
    }
}
````
## Movement
- There are two functions that move entities, `KittyEntity.move(distance)` and `KittyEntity.strafe(distance)`. The first moves the entity that distance in the direction that it is currently facing. The second is the same as the first, but it moves the entity 90 degrees to the direction it is facing.
- To rotate the entity use `KittyEntity.turn(angle)`.
- *Negative values do not work properly in tiled mode you will have to use 0 - 10 etc*.
````grace
object {
    inherits Entity ("foo") x (10) y (20)

    // Rotate forward
    turn(5)

    // Rotate backwards
    turn(0 - 5)

    // Move forwards
    move(5)

    // Move backwards
    move(0 - 5)

    // Strafe left
    strafe(5)

    // Strafe right
    strafe(0 - 5)
}
````

## Key Listener
- Users can listen for key presses using the `isKeyDown(key)` method. *This method takes keycodes not characters*
- *Do not use the `spacebar` or `K` keys, as they are already used.*
````grace
object = {
    inherits Entity ("foo") x (0) y (0)
    update {
        if (foo.isKeyDown(87)) then {
            move(1)
        }
    }
}
````

## Mouse Actions
- Users can listen for mouse actions using the following functions: `onMouseDown`, `onMouseUp`, `onMouseEnter`, `onMouseDrag` and `onMouseExit`.
- `onMouseDrag` *is only available for Entities*. It is defaulted to drag the Entity through the world.
- These functions work in a similar way to the `update` function, they are called once per frame if their conditions are satisfied.
- *Do not* place them inside the `update` function.
````grace
object = {
    inherits Entity ("foo") x (0) y (0)
    onMouseDown {
        print "Entity mousedown"
    }
    onMouseUp {
        print "Entity mouseup"
    }
    onMouseEnter {
        print "Entering entity"
    }
    onMouseDrag {
        print "Dragging entity"
    }
    onMouseExit {
        print "Exiting entity"
    }
}
````

## Examples
- [Moon Lander (with objects)](https://cambis.github.io/tiledgrace/#sample=moonLander)
````grace
dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press the 'W' key for thrust.
// Press the 'Spacebar' key to restart the game.

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
    inherits World ("moon") width (500) height (500)
    setBackground ("moon.jpg")
}

object {
    inherits Entity ("player") x (20) y (0 - 200)
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
````
- [Mouse Actions](https://cambis.github.io/tiledgrace/#sample=kittyTest)
````grace
dialect "kitty"

object {
    inherits World ("test") width (500) height (500)
    onMouseDown {
        print "World mousedown"
    }
    onMouseUp {
        print "World mouseup"
    }
    onMouseEnter {
        print "Entering world"
    }
    onMouseExit {
        print "Exiting world"
    }
}

object {
    inherits Entity ("foo") x (250) y (250)
    onMouseDown {
        print "Entity mousedown"
    }
    onMouseUp {
        print "Entity mouseup"
    }
    onMouseEnter {
        print "Entering entity"
    }
    onMouseDrag {
        print "Dragging entity"
    }
    onMouseExit {
        print "Exiting entity"
    }
}
````

