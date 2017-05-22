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