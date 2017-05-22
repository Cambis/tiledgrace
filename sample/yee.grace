dialect "kitty"
def foo = World
setWorld (foo)
def bar = Entity ("player") x (10) y (10)
def action = object {
    method update {
        if (foo.isKeyDown(69)) then {
            bar.turn(5)
        }
        if (foo.isKeyDown(83)) then {
            bar.strafe(5)
        }
        if (foo.isKeyDown(68)) then {
            bar.move(5)
        }
    }
}
bar.setAction(action)
foo.addEntity(bar)

