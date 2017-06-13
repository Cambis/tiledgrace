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
var currentKeyDown := -1

// Grace math returns NaNs
def math = dom.window.Math

// Last object created
var kitten

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
        // print "{dx}, {dy}"
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
    
    // Actions
    var updateAction := {}
    var destroyAction := {}
    var mouseDownAction := {}

    var image

    awake

    // ===== ACTIONS ===== //
    method awake {
        createImage("realyee.png")
        kitten := self
        m_world.addEntity(self)
    }

    method tick {
        updateAction.apply
    }

    method kill {
        destroyAction.apply
    }

    // ===== MOUSE ACTIONS ===== //
    method mouseDown {
        mouseDownAction.apply
    }

    // ===== MOVEMENT ===== //
    method move(distance) { 
        posX := posX + distance * m_world.moveWidthMultipler * math.cos(rotation * 3.14159 / 180)
        posY := posY + distance * m_world.moveHeightMultipler * math.sin(rotation * 3.14159 / 180)
    }

    method strafe(distance) {
        posX := posX + distance * m_world.moveWidthMultipler * math.cos((90 + rotation) * 3.14159 / 180)
        posY := posY + distance * m_world.moveHeightMultipler * math.sin((90 + rotation) * 3.14159 / 180)
    }

    method turn(angle) {
        rotation := rotation + angle
    }

    // ===== DRAWING ===== //
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

    // ===== SETTERS ===== //
    method setUpdateAction(action') {
        updateAction := action'
    }

    method setDestroyAction(action') {
        destroyAction := action'
    }

    method setMouseDownAction(action') {
        mouseDownAction := action'
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

    method setX(posX') {
        posX := posX'
    }

    method setY(posY') {
        posY := posY'
    }

    method getRotation {
        return rotation
    }
} 

method Entity(tag')x(x')y(y') {
    object {
        inherits KittyEntity.new(tag', x', y')
        // actions'.apply
    }
} 

// ======== KITTY METHODS ========== //

// CONTROL

// Called always
method update(action') {
    kitten.setUpdateAction(action')
}

// Called on game end
method onDestroy(action') {
    kitten.setDestroyAction(action')
}

method isKeyDown(key) {
    return key == currentKeyDown
}

// MOUSE
method onMouseDown(action') {
    kitten.setMouseDownAction(action')
}

method onMouseDrag(action') {
    kitten.setMouseDragAction(action')
}

method onMouseEnter(action') {
    kitten.setMouseEnterAction(action');
}

method onMouseClick(action') {
    kitten.setMouseClickAction(action');
}


// ========================== //

// Represents the game world itself
class KittyWorld.new(tag', width', height') {

    // print "CREATING NEW WORLD..."
    var width is public, readable := width'
    var height is public, readable := height'
    var tag is public, readable := tag'

    var background
    var backgroundColour := "black"

    var document

    var backingCanvas
    var backingContext

    var canvas
    var canvasWidth is public, readable
    var canvasHeight is public, readable

    var entities := collections.list.new

    var isInit := false
    var isRunning := false

    var mctx
    var ent

    // World actions
    var updateAction := {}
    var destroyAction := {}

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
            
            // if ((x > (canvasWidth - 20)) && (y < 20)) then {
            //     ev.preventDefault
            //     stop
            // }
            
            // Mouse actions
            for (entities) do { entity->
                entity.mouseDown
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

        // Set the world
        setWorld(self)

        kitten := self
        isInit := true
    }

    // Called on game start
    method start {
        // print "WORLD STARTED"
        isRunning := true
        dom.while { isRunning } waiting 10 do {
            tick
        }
        // print "WORLD STOPPED"        
    }

    // Updates the game world
    method tick {

        // print "UPDATING WORLD..."

        // Draw the background
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        mctx.drawImage(backingCanvas, 0, 0)
        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)

        // Update world
        updateAction.apply

        // Draw the entities
        for (entities) do { entity->
            entity.tick
            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)
        }

        // print "WORLD UPDATED"
    }

    method stop {
        print "WORLD STOPPING..."
        isRunning := false
        destroyAction.apply
        for (entities) do { entity->
            entity.kill
        }
        canvas.removeEventListener("mousedown", mouseDownListener)
        document.removeEventListener("keydown", keyDownListener)
        document.removeEventListener("keyup", keyUpListener)
    }

    method setBackground(url) {
        background := Image(url)width(canvasWidth)height(canvasHeight)
    }

    method addEntity(e) {
        return entities.push(e)
    }

    method getContext {
        return mctx
    }

    method moveWidthMultipler {
        return canvasWidth / width
    }

    method moveHeightMultipler {
        return canvasHeight / height
    }

    method setUpdateAction(action') {
        updateAction := action'
    }

    method setDestroyAction(action') {
        destroyAction := action'
    }

    // print "WORLD CREATED"
}

method World(tag')width(width')height(height') {
    object {
        inherits KittyWorld.new(tag', width', height')
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