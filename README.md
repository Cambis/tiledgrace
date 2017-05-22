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
````grace
def world = World
````

### KittyEntity
- Entities reprent objects in the game world, they are assigned to a world. The constructor is fed the coordinates of the entity.
````grace
def entity = Entity("foo")x(10)y(10)
````

## World Setup
- Each world needs to be represented by one World object. You must set the world so the dialect can run it.
````grace
def world = World
setWorld(world)
````
- The game will not run if a world is not set.

### Adding Entities to World
- Entities need to be added to a world so the can be interacted with.
````grace
def world = World

def entity = Entity("foo")x(10)y(10)
world.addEntity(entity)
```` 
### Running the Game
- You can run the game by using the `Run` button in the editor. Pressing the `K` key will stop the game.

## Images
- Images must currently be uploaded to the root directory of the server. There are default images on both the `KittyWorld` and `KittyEntity` classes. 
- Images are created by giving them a filepath and dimensions, for now it is best if you stick to 64 x 64.
````grace
def image = Image("rocket.png")width(64)height(64)
````
### Compound Images
- You can draw an image on top of another like so:
````grace
def image = Image("rocket.png")width(64)height(64)
def imageB = Image("thrust")width(64)height(64)
imageB.drawImage(image.getTag)
````

### Backgrounds
- Currently the background for the world takes a filepath as an argument.
````grace
def world = World
world.setBackground("doggo.jpg")
````

### Entity Images
- Entities can be given images, or image filepaths.
````grace
def entity = Entity("foo")x(10)y(10)

// Manually set an image
def image = Image("realyee.png")width(64)height(64)
entity.setImage(image)

// Is the same as
entity.createImage("realyee.png")
````

## Actions
- In order for an entity to complete a task, it must first be supplied with an action. Actions are created as objects which are parsed into an entity. *The action object must contain the method `update` for the action to be executed*. This is because the `KittyWorld` class will execute this method.
````grace
def entity = Entity("foo")x(10)y(10)

// Create an action
def action = object {
    method update {
        entity.move(10)
    }
}

// Assign action to entity
entity.setAction(action)
````
## Movement
- There are two functions that move entities, `KittyEntity.move(distance)` and `KittyEntity.strafe(distance)`. The first moves the entity that distance in the direction that it is currently facing. The second is the same as the first, but it moves the entity 90 degrees to the direction it is facing.
- To rotate the entity use `KittyEntity.turn(angle)`.
- *Negative values do not work properly in tiled mode you will have to use 0 - 10 etc*.
````grace
def entity = Entity("foo")x(10)y(10)

// Rotate forward
entity.turn(5)

// Rotate backwards
entity.turn(0 - 5)

// Move forwards
entity.move(5)

// Move backwards
entity.move(0 - 5)

// Strafe left
entity.strafe(5)

// Strafe right
entity.strafe(0 - 5)
````

## Key Listener
- Users can listen for key presses using the `KittyWorld.isKeyDown(key)` method. *This method takes keycodes not characters*
- *Do not use the `spacebar` or `K` keys, as they are already used.*
````grace
def foo = World
def bar = Entity("foo")x(10)y(10)

def action = object {
    method update {
        if (foo.isKeyDown(87)) then {
            bar.move(1)
        }
    }
}
bar.addAction(action)
foo.addEntity(bar)
````

## Examples
- [Simple Movement](https://cambis.github.io/tiledgrace/#sample=yee)
````grace
dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game

def foo = World
setWorld(foo)
def bar = Entity("player")x(10)y(10)
def action = object {
 method update {
  // Q
  if (foo.isKeyDown(81)) then {
   bar.turn(0 - 5)   
  } 
  // E
  if (foo.isKeyDown(69)) then {
   bar.turn(5)
  } 
  // W
  if (foo.isKeyDown(87)) then {
   bar.strafe(0 - 5)
  } 
  // S
  if (foo.isKeyDown(83)) then {
   bar.strafe(5)
  } 
  // D
  if (foo.isKeyDown(68)) then {
   bar.move(5)   
  } 
  // A
  if (foo.isKeyDown(65)) then {
   bar.move(0 - 5)   
  }
 }
}
bar.setAction(action)
foo.addEntity(bar)
````
- [Moon Lander](https://cambis.github.io/tiledgrace/#sample=moonLander)
````grace
dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game.
// Press the 'W' key for thrust.
// Press the 'Spacebar' key to restart the game.

def foo = World
foo.setBackground("moon.jpg")
setWorld(foo)
def bar = Entity("player")x(20)y(0 - 200)
def action = object {
    
    def THRUST = 2
    def MAX_LANDING_SPEED = 15
    def LZ_HEIGHT = 180
    
    def rocket = Image("rocket.png")width(64)height(64)
    def rocketWithThrust = Image("thrust.png")width(64)height(64)
    def explosion = Image("explosion.png")width(64)height(64)
    def flag = Image("flag.png")width(64)height(64)
    rocketWithThrust.drawImage(rocket.getTag) 
    flag.drawImage(rocket.getTag)
    bar.setImage(rocket)
    
    var speed := 0
    var altitude := bar.getY
    
    method update {
        if (foo.isKeyDown(87)) then {
            speed := speed - THRUST
            bar.setImage(rocketWithThrust)
        } else {
            bar.setImage(rocket)
        }   
        speed := speed + 1 
        altitude := altitude + (speed / 10)
        bar.setLocation(bar.getX, altitude)
        if (bar.getY >= LZ_HEIGHT) then {
            if (speed >= MAX_LANDING_SPEED) then {
                print "KA BOOM!!!!!!"
                bar.setImage(explosion)
                foo.stop
            } else {
                print "ANOTHER HAPPY LANDING"
                bar.setImage(flag)
                foo.stop
            }
        }
    }
}
bar.setAction(action)
foo.addEntity(bar)
````