import "mgcollections" as collections
import "dom" as dom
// import "math" as math
import "StandardPrelude" as sp
inherits sp.methods

// Main class for game library
var m_world
var worldSet := false

// Listeners
var keyDownListener
var keyUpListener
var mouseDownListener

// Grace math returns NaNs
def math = dom.window.Math

// Last object created
var newborn

// XXX: Control functions are at the bottom

// Represents an image in the game world
class KittyImage.new(url', width', height') {
    
    // print "CREATING NEW IMAGE: {url'}..."

    def imgTag = dom.document.createElement("img")
    imgTag.src := url'

    var elements := collections.list.new
    elements.push(imgTag)

    var height := height'
    var width := width'

    method draw(ctx, dx, dy, rot) {
        // print "DRAWING IMAGE: {imgTag.src} ({width}, {height})..."
        ctx.save
        ctx.translate(dx, dy)
        // ctx.rotate(rot *  180 / 3.14)
        ctx.rotate(rot * 3.14159 / 180)
        for (elements) do {element->
            ctx.drawImage(element, -width / 2, -height / 2, width, height)
        }
        ctx.restore
        // print "IMAGE: {imgTag.src} DRAWN"
    }

    method getTag {
        return imgTag
    }

    method drawImage(imgTag') {
        elements.push(imgTag')
    }

    // print "CREATED NEW IMAGE: {url'}"
}

method Image(url')width(width')height(height') {
    object {
        inherits KittyImage.new(url', width', height')
    }
}

// Represents an object in the game world
class KittyEntity.new(tag', x', y') {
    
    // print "CREATING ENTITY AT ({x'}, {y'})..."

    var tag := tag'
    var posX := x'
    var posY := y'
    var rotation := 0
    var action := {}

    var image

    awake

    // Called on creation
    method awake {
        createImage("realyee.png")
        newborn := self
    }

    method update() {
        action.apply
    }

    method move(distance) {
        posX := posX + distance * math.cos(rotation * 3.14159 / 180)
        posY := posY + distance * math.sin(rotation * 3.14159 / 180)
    }

    method strafe(distance) {
        posX := posX + distance * math.cos((90 + rotation) * 3.14159 / 180)
        posY := posY + distance * math.sin((90 + rotation) * 3.14159 / 180)
    }

    method turn(angle) {
        rotation := rotation + angle
    }

    method draw(ctx, dx, dy) {
        ctx.save
        ctx.translate(posX, posY)
        image.draw(ctx, dx, dy, rotation)
        ctx.restore
    }

    method createImage(url') {
        image := Image(url')width(64)height(64)
    }

    method setImage(image': KittyImage) {
        image := image'
    }

    method setAction(action') {
        action := action'
    }

    method setLocation(x, y) {
        self.posX := x
        self.posY := y
    }

    method getX {
        return posX
    }

    method getY {
        return posY
    }

    method getRotation {
        return rotation
    }
} 

method Entity(tag')x(x')y(y')actions(actions') {
    object {
        inherits KittyEntity.new(tag', x', y')
        actions'.apply
    }
} 

// XXX: Gross but neccessary
// ======== KITTY METHODS ========== //
method update(action') {
    newborn.setAction(action')
}

method move(distance') {
    newborn.move(distance')
}

method strafe(distance') {
    newborn.strafe(distance')
}

method turn(angle') {
    newborn.turn(angle')
}

// method setLocation(x, y) {
//     newborn.setLocation(x, y)
// }

method setImage(image': KittyImage) {
    newborn.setImage(image')
}

method createImage(url') {
    newborn.createImage(url')
}

method setX(x') {
    newborn.setLocation(x', newborn.getY)
}

method setY(y') {
    newborn.setLocation(newborn.getX, y')
}

method getX {
    return newborn.getX
}

method getY {
    return newborn.getY
}
// ========================== //

// Represents the game world itself
class KittyWorld.new() {

    // print "CREATING NEW WORLD..."

    var background
    var backgroundColour := "black"

    var document

    var backingCanvas
    var backingContext

    var canvas
    var canvasWidth
    var canvasHeight

    var entities := collections.list.new

    var isInit := false
    var isRunning := false

    var mctx

    var currentKeyDown := -1

    var ent

    init

    // Called on initialization
    method init {

        // print "INITIALIZING WORLD..."

        if (isInit) then {
            return false
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        // Mouse Listener
        mouseDownListener := { ev ->
            
            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight
            
            // print "MOUSEDOWN"
            
            if ((x > (canvasWidth - 20)) && (y < 20)) then {
                ev.preventDefault
                stop
            }
        }
        canvas.addEventListener("mousedown", mouseDownListener)

        // Key Listeners
        keyDownListener := { ev->
            // print "KEYDOWN: {ev.keyCode}"
            if (ev.keyCode == 75) then {
                stop
            }
            currentKeyDown := ev.keyCode
        }
        document.addEventListener("keydown", keyDownListener)

        keyUpListener := { ev->
            // print "KEYUP"
            currentKeyDown := -1
        }
        document.addEventListener("keyup", keyUpListener)

        backingCanvas := dom.document.createElement("canvas")
        backingCanvas.height := canvasHeight
        backingCanvas.width := canvasWidth
        backingContext := backingCanvas.getContext("2d")
        mctx := canvas.getContext("2d")

        // Default background
        setBackground("doggo.jpg")

        // Test entity
        // ent := Entity("explosion.png")x(10)y(10)
        // Image(url)width(canvasWidth)height(canvasHeight)

        isInit := true
        // print "INITIALIZATION FINISHED"

        // Start the game
        // print "STARTING WORLD..."
        // start
    }

    // Called on game start
    method start {
        // print "WORLD STARTED"
        isRunning := true
        dom.while { isRunning } waiting 10 do {
            update
        }
        // print "WORLD STOPPED"        
    }

    // Updates the game world
    method update {

        // print "UPDATING WORLD..."

        // Draw the background
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        mctx.drawImage(backingCanvas, 0, 0)
        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)

        // Draw the entities
        for (entities) do { entity->
            entity.update
            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)
        }

        // print "WORLD UPDATED"
    }

    method stop {
        print "WORLD STOPPING..."
        isRunning := false
        canvas.removeEventListener("mousedown", mouseDownListener)
        document.removeEventListener("keydown", keyDownListener)
        document.removeEventListener("keyup", keyUpListener)
    }

    method isKeyDown(key) {
        return key == currentKeyDown
    }

    method setBackground(url) {
        background := Image(url)width(canvasWidth)height(canvasHeight)
    }

    method addEntity(e: KittyEntity) {
        return entities.push(e)
    }

    method getContext {
        return mctx
    }
    // print "WORLD CREATED"
}

method World {
    object {
        inherits KittyWorld.new()
    }
}

// CONTROL SECTION //

// Called on game start
method start {

    print "CHECKING..."

    if (!worldSet) then {
        print "NO WORLD!!"
        return 
    }

    print "STARTING..."

    // Dewit
    m_world.start
}

method stop {
    m_world.stop
}

method setWorld(world': KittyWorld) {
    m_world := world'
    worldSet := true
}

method atModuleEnd(module) {
    start
}

// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
// print "IS THIS WORKING???"