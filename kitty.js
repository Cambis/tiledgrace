function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 64
  var func0 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Image)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func0.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func0.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 65
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 65;
      obj1.outer = this;
      var reader_kitty_outer_2 = function() {
        return this.outer;
      }
      obj1.methods["outer"] = reader_kitty_outer_2;
      function obj_init_1() {
        var origSuperDepth = superDepth;
        superDepth = obj1;
        obj1.annotations = [];
        sourceObject = obj1;
        lineNumber = 66
        var call3 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_width__39__, var_height__39__, this);
        obj1.superobj = call3;
        obj1._value = call3._value;
        superDepth = origSuperDepth;
      }
      obj_init_1.apply(obj1, []);
      return obj1
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    1,
    1,
    1,
  ];
  func0.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["Image()width()height"] = func0;
  func0.definitionLine = 64;
  func0.definitionModule = "kitty";
  var func4 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var var_width__39__ = arguments[curarg];
    curarg++;
    var var_height__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj5 = Grace_allocObject();
      obj5.definitionModule = "kitty";
      obj5.definitionLine = 65;
      var inho5 = inheritingObject;
      while (inho5.superobj) inho5 = inho5.superobj;
      inho5.superobj = obj5;
      obj5.data = inheritingObject.data;
      obj5.outer = this;
      var reader_kitty_outer_6 = function() {
        return this.outer;
      }
      obj5.methods["outer"] = reader_kitty_outer_6;
      function obj_init_5() {
        var origSuperDepth = superDepth;
        superDepth = obj5;
        obj5.annotations = [];
        sourceObject = obj5;
        var call7 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_width__39__, var_height__39__, this);
        obj5.superobj = call7;
        obj5._value = call7._value;
        superDepth = origSuperDepth;
      }
      obj_init_5.apply(inheritingObject, []);
      return obj5
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Image()width()height()object"] = func4;
  lineNumber = 155
  var func8 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func8.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var var_x__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func8.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (x)"));
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func8.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (y)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 156
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 156;
      obj9.outer = this;
      var reader_kitty_outer_10 = function() {
        return this.outer;
      }
      obj9.methods["outer"] = reader_kitty_outer_10;
      function obj_init_9() {
        var origSuperDepth = superDepth;
        superDepth = obj9;
        obj9.annotations = [];
        sourceObject = obj9;
        lineNumber = 157
        var call11 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj9.superobj = call11;
        obj9._value = call11._value;
        superDepth = origSuperDepth;
      }
      obj_init_9.apply(obj9, []);
      return obj9
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func8.paramCounts = [
    1,
    1,
    1,
  ];
  func8.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["Entity()x()y"] = func8;
  func8.definitionLine = 155;
  func8.definitionModule = "kitty";
  var func12 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj13 = Grace_allocObject();
      obj13.definitionModule = "kitty";
      obj13.definitionLine = 156;
      var inho13 = inheritingObject;
      while (inho13.superobj) inho13 = inho13.superobj;
      inho13.superobj = obj13;
      obj13.data = inheritingObject.data;
      obj13.outer = this;
      var reader_kitty_outer_14 = function() {
        return this.outer;
      }
      obj13.methods["outer"] = reader_kitty_outer_14;
      function obj_init_13() {
        var origSuperDepth = superDepth;
        superDepth = obj13;
        obj13.annotations = [];
        sourceObject = obj13;
        var call15 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj13.superobj = call15;
        obj13._value = call15._value;
        superDepth = origSuperDepth;
      }
      obj_init_13.apply(inheritingObject, []);
      return obj13
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()x()y()object"] = func12;
  lineNumber = 163
  var func16 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 164
      var call17 = callmethod(var_kitten,"setAction", [1], var_action__39__);
      return call17
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func16.paramCounts = [
    1,
  ];
  func16.variableArities = [
    false,
  ];
  this.methods["update"] = func16;
  func16.definitionLine = 163;
  func16.definitionModule = "kitty";
  lineNumber = 167
  var func18 = function(argcv) {
    var curarg = 1;
    var var_key = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 169
      lineNumber = 168
      var opresult21 = callmethod(var_key, "==", [1], var_currentKeyDown);
      return opresult21
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func18.paramCounts = [
    1,
  ];
  func18.variableArities = [
    false,
  ];
  this.methods["isKeyDown"] = func18;
  func18.definitionLine = 167;
  func18.definitionModule = "kitty";
  lineNumber = 332
  var func22 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func22.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func22.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 333
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 333;
      obj23.outer = this;
      var reader_kitty_outer_24 = function() {
        return this.outer;
      }
      obj23.methods["outer"] = reader_kitty_outer_24;
      function obj_init_23() {
        var origSuperDepth = superDepth;
        superDepth = obj23;
        obj23.annotations = [];
        sourceObject = obj23;
        lineNumber = 334
        var call25 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj23.superobj = call25;
        obj23._value = call25._value;
        superDepth = origSuperDepth;
      }
      obj_init_23.apply(obj23, []);
      return obj23
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func22.paramCounts = [
    1,
    1,
    1,
  ];
  func22.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["World()width()height"] = func22;
  func22.definitionLine = 332;
  func22.definitionModule = "kitty";
  var func26 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    var var_width__39__ = arguments[curarg];
    curarg++;
    var var_height__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 333;
      var inho27 = inheritingObject;
      while (inho27.superobj) inho27 = inho27.superobj;
      inho27.superobj = obj27;
      obj27.data = inheritingObject.data;
      obj27.outer = this;
      var reader_kitty_outer_28 = function() {
        return this.outer;
      }
      obj27.methods["outer"] = reader_kitty_outer_28;
      function obj_init_27() {
        var origSuperDepth = superDepth;
        superDepth = obj27;
        obj27.annotations = [];
        sourceObject = obj27;
        var call29 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj27.superobj = call29;
        obj27._value = call29._value;
        superDepth = origSuperDepth;
      }
      obj_init_27.apply(inheritingObject, []);
      return obj27
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()width()height()object"] = func26;
  lineNumber = 341
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 343
      var string31 = new GraceString("CHECKING...");
      var call32 = Grace_print(string31);
      lineNumber = 350
      var if33 = var_done;
      lineNumber = 345
      var call34 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call34)) {
        lineNumber = 346
        var string35 = new GraceString("NO WORLD!!");
        var call36 = Grace_print(string35);
        lineNumber = 348
        return var_done
      }
      lineNumber = 350
      var string37 = new GraceString("STARTING...");
      var call38 = Grace_print(string37);
      lineNumber = 353
      var call39 = callmethod(var_m__95__world,"start", [0]);
      return call39
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func30.paramCounts = [
    0,
  ];
  func30.variableArities = [
    false,
  ];
  this.methods["start"] = func30;
  func30.definitionLine = 341;
  func30.definitionModule = "kitty";
  lineNumber = 356
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 357
      var call41 = callmethod(var_m__95__world,"stop", [0]);
      return call41
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func40.paramCounts = [
    0,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["stop"] = func40;
  func40.definitionLine = 356;
  func40.definitionModule = "kitty";
  lineNumber = 360
  var func42 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 362
      lineNumber = 361
      var_m__95__world = var_world__39__;
      lineNumber = 363
      lineNumber = 362
      var bool43 = new GraceBoolean(true)
      var_worldSet = bool43;
      return bool43
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func42.paramTypes = [];
  func42.paramTypes.push([]);
  func42.paramCounts = [
    1,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func42;
  func42.definitionLine = 360;
  func42.definitionModule = "kitty";
  lineNumber = 365
  var func44 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 366
      onSelf = true;
      var call45 = callmethod(this, "start", [0]);
      return call45
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func44.paramCounts = [
    1,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func44;
  func44.definitionLine = 365;
  func44.definitionModule = "kitty";
  lineNumber = 1
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 2
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
  lineNumber = 4
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 5
  var call46 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call46;
  this.data = call46.data;
  this._value = call46._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 357
  var func47 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func47.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 8
      return var_m__95__world
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func47.paramCounts = [
    0,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["m_world"] = func47;
  func47.definitionLine = 357;
  func47.definitionModule = "kitty";
  lineNumber = 357
  var func48 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func48.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_m__95__world = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func48.paramCounts = [
    1,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func48;
  func48.definitionLine = 357;
  func48.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool49 = new GraceBoolean(false)
  var var_worldSet = bool49;
  lineNumber = 357
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (worldSet)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 9
      return var_worldSet
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func50.paramCounts = [
    0,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func50;
  func50.definitionLine = 357;
  func50.definitionModule = "kitty";
  lineNumber = 357
  var func51 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func51.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (worldSet:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_worldSet = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func51.paramCounts = [
    1,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func51;
  func51.definitionLine = 357;
  func51.definitionModule = "kitty";
  lineNumber = 12;
  moduleName = "kitty";
  lineNumber = 9
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_worldSet)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'worldSet' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 13
  var var_keyDownListener;
  lineNumber = 357
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 12
      return var_keyDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func52;
  func52.definitionLine = 357;
  func52.definitionModule = "kitty";
  lineNumber = 357
  var func53 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func53.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_keyDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func53.paramCounts = [
    1,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func53;
  func53.definitionLine = 357;
  func53.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 357
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyUpListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 13
      return var_keyUpListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func54;
  func54.definitionLine = 357;
  func54.definitionModule = "kitty";
  lineNumber = 357
  var func55 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func55.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyUpListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_keyUpListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func55.paramCounts = [
    1,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func55;
  func55.definitionLine = 357;
  func55.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 357
  var func56 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func56.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 14
      return var_mouseDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func56.paramCounts = [
    0,
  ];
  func56.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func56;
  func56.definitionLine = 357;
  func56.definitionModule = "kitty";
  lineNumber = 357
  var func57 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func57.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func57.paramCounts = [
    1,
  ];
  func57.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func57;
  func57.definitionLine = 357;
  func57.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call58 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call58;
  lineNumber = 357
  var func59 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func59.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 15
      return var_currentKeyDown
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func59.paramCounts = [
    0,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func59;
  func59.definitionLine = 357;
  func59.definitionModule = "kitty";
  lineNumber = 357
  var func60 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func60.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_currentKeyDown = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func60.paramCounts = [
    1,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func60;
  func60.definitionLine = 357;
  func60.definitionModule = "kitty";
  lineNumber = 18;
  moduleName = "kitty";
  lineNumber = 15
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_currentKeyDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'currentKeyDown' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 21
  lineNumber = 18
  var call61 = callmethod(var_dom,"window", [0]);
  var call62 = callmethod(call61,"Math", [0]);
  var var_math = call62;
  var func63 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func63.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (math)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_math
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func63.paramCounts = [
    0,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["math"] = func63;
  func63.definitionLine = 18;
  func63.definitionModule = "kitty";
  lineNumber = 21;
  moduleName = "kitty";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 26
  var var_kitten;
  lineNumber = 18
  var func64 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func64.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 21
      return var_kitten
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func64.paramCounts = [
    0,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["kitten"] = func64;
  func64.definitionLine = 18;
  func64.definitionModule = "kitty";
  lineNumber = 18
  var func65 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func65.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_kitten = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func65.paramCounts = [
    1,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func65;
  func65.definitionLine = 18;
  func65.definitionModule = "kitty";
  lineNumber = 26
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyImage
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func66;
  func66.definitionLine = 26;
  func66.definitionModule = "kitty";
  var obj67 = Grace_allocObject();
  obj67.definitionModule = "kitty";
  obj67.definitionLine = 26;
  obj67.outer = this;
  var reader_kitty_outer_68 = function() {
    return this.outer;
  }
  obj67.methods["outer"] = reader_kitty_outer_68;
  function obj_init_67() {
    var origSuperDepth = superDepth;
    superDepth = obj67;
    obj67.annotations = [];
    var func69 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func69.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj70 = Grace_allocObject();
        obj70.definitionModule = "kitty";
        obj70.definitionLine = 26;
        obj70.outer = this;
        var reader_kitty_outer_71 = function() {
          return this.outer;
        }
        obj70.methods["outer"] = reader_kitty_outer_71;
        function obj_init_70() {
          var origSuperDepth = superDepth;
          superDepth = obj70;
          obj70.annotations = [];
          var func72 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func72.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call73 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call74 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod78 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient80 = callmethod(prod78, "/", [1], new GraceNum(180));
              var call81 = callmethod(var_ctx,"rotate", [1], quotient80);
              lineNumber = 46
              onSelf = true;
              var call82 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block83 = Grace_allocObject();
              block83.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block83.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block83.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block83.methods["match"] = GraceBlock_match;
              block83.methods["prefix?"] = GraceBlock_lift;
              block83.receiver = this;
              block83.className = 'block<kitty:49>';
              block83.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call85 = callmethod(this, "width", [0]);
                var call86 = callmethod(call85,"prefix-", [0]);
                var quotient88 = callmethod(call86, "/", [1], new GraceNum(2));
                onSelf = true;
                var call90 = callmethod(this, "height", [0]);
                var call91 = callmethod(call90,"prefix-", [0]);
                var quotient93 = callmethod(call91, "/", [1], new GraceNum(2));
                onSelf = true;
                var call94 = callmethod(this, "width", [0]);
                onSelf = true;
                var call95 = callmethod(this, "height", [0]);
                var call96 = callmethod(var_ctx,"drawImage", [5], var_element, quotient88, quotient93, call94, call95);
                return call96;
              };
              var call97 = callmethod(Grace_prelude,"for()do", [1, 1], call82, block83);
              lineNumber = 49
              var call98 = callmethod(var_ctx,"restore", [0]);
              return call98
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func72.paramCounts = [
            4,
          ];
          func72.variableArities = [
            false,
          ];
          obj70.methods["draw"] = func72;
          func72.definitionLine = 39;
          func72.definitionModule = "kitty";
          var func99 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func99.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call100 = callmethod(this, "imgTag", [0]);
              return call100
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func99.paramCounts = [
            0,
          ];
          func99.variableArities = [
            false,
          ];
          obj70.methods["getTag"] = func99;
          func99.definitionLine = 53;
          func99.definitionModule = "kitty";
          var func101 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func101.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call102 = callmethod(this, "elements", [0]);
              var call103 = callmethod(call102,"push", [1], var_imgTag__39__);
              return call103
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func101.paramCounts = [
            1,
          ];
          func101.variableArities = [
            false,
          ];
          obj70.methods["drawImage"] = func101;
          func101.definitionLine = 57;
          func101.definitionModule = "kitty";
          sourceObject = obj70;
          lineNumber = 30
          var string104 = new GraceString("img");
          var call105 = callmethod(var_dom,"document", [0]);
          var call106 = callmethod(call105,"createElement", [1], string104);
          obj70.data["imgTag"] = call106;
          var reader_kitty_imgTag_107 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_107.def = true;
          reader_kitty_imgTag_107.confidential = true;
          obj70.methods["imgTag"] = reader_kitty_imgTag_107;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call106)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj70;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call108 = callmethod(this, "imgTag", [0]);
          var call109 = callmethod(call108,"src:=", [1], var_url__39__);
          sourceObject = obj70;
          lineNumber = 33
          var call110 = callmethod(var_collections,"list", [0]);
          var call111 = callmethod(call110,"new", [0]);
          obj70.data["elements"] = call111;
          var reader_kitty_elements_112 = function() {
            return this.data["elements"];
          }
          obj70.methods["elements"] = reader_kitty_elements_112;
          obj70.data["elements"] = call111;
          var writer_kitty_elements_112 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj70.methods["elements:="] = writer_kitty_elements_112;
          reader_kitty_elements_112.confidential = true;
          writer_kitty_elements_112.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call111)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          lineNumber = 34
          onSelf = true;
          var call113 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call114 = callmethod(this, "elements", [0]);
          var call115 = callmethod(call114,"push", [1], call113);
          sourceObject = obj70;
          lineNumber = 36
          obj70.data["height"] = var_height__39__;
          var reader_kitty_height_116 = function() {
            return this.data["height"];
          }
          obj70.methods["height"] = reader_kitty_height_116;
          obj70.data["height"] = var_height__39__;
          var writer_kitty_height_116 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj70.methods["height:="] = writer_kitty_height_116;
          reader_kitty_height_116.confidential = true;
          writer_kitty_height_116.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          lineNumber = 37
          obj70.data["width"] = var_width__39__;
          var reader_kitty_width_117 = function() {
            return this.data["width"];
          }
          obj70.methods["width"] = reader_kitty_width_117;
          obj70.data["width"] = var_width__39__;
          var writer_kitty_width_117 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj70.methods["width:="] = writer_kitty_width_117;
          reader_kitty_width_117.confidential = true;
          writer_kitty_width_117.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          sourceObject = obj70;
          sourceObject = obj70;
          superDepth = origSuperDepth;
        }
        obj_init_70.apply(obj70, []);
        return obj70
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func69.paramCounts = [
      3,
    ];
    func69.variableArities = [
      false,
    ];
    obj67.methods["new"] = func69;
    func69.definitionLine = 26;
    func69.definitionModule = "kitty";
    var func118 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj119 = Grace_allocObject();
        obj119.definitionModule = "kitty";
        obj119.definitionLine = 26;
        var inho119 = inheritingObject;
        while (inho119.superobj) inho119 = inho119.superobj;
        inho119.superobj = obj119;
        obj119.data = inheritingObject.data;
        obj119.outer = this;
        var reader_kitty_outer_120 = function() {
          return this.outer;
        }
        obj119.methods["outer"] = reader_kitty_outer_120;
        function obj_init_119() {
          var origSuperDepth = superDepth;
          superDepth = obj119;
          obj119.annotations = [];
          var func121 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func121.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call122 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call123 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod127 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient129 = callmethod(prod127, "/", [1], new GraceNum(180));
              var call130 = callmethod(var_ctx,"rotate", [1], quotient129);
              lineNumber = 46
              onSelf = true;
              var call131 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block132 = Grace_allocObject();
              block132.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block132.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block132.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block132.methods["match"] = GraceBlock_match;
              block132.methods["prefix?"] = GraceBlock_lift;
              block132.receiver = this;
              block132.className = 'block<kitty:49>';
              block132.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call134 = callmethod(this, "width", [0]);
                var call135 = callmethod(call134,"prefix-", [0]);
                var quotient137 = callmethod(call135, "/", [1], new GraceNum(2));
                onSelf = true;
                var call139 = callmethod(this, "height", [0]);
                var call140 = callmethod(call139,"prefix-", [0]);
                var quotient142 = callmethod(call140, "/", [1], new GraceNum(2));
                onSelf = true;
                var call143 = callmethod(this, "width", [0]);
                onSelf = true;
                var call144 = callmethod(this, "height", [0]);
                var call145 = callmethod(var_ctx,"drawImage", [5], var_element, quotient137, quotient142, call143, call144);
                return call145;
              };
              var call146 = callmethod(Grace_prelude,"for()do", [1, 1], call131, block132);
              lineNumber = 49
              var call147 = callmethod(var_ctx,"restore", [0]);
              return call147
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func121.paramCounts = [
            4,
          ];
          func121.variableArities = [
            false,
          ];
          obj119.methods["draw"] = func121;
          func121.definitionLine = 39;
          func121.definitionModule = "kitty";
          var func148 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func148.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call149 = callmethod(this, "imgTag", [0]);
              return call149
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func148.paramCounts = [
            0,
          ];
          func148.variableArities = [
            false,
          ];
          obj119.methods["getTag"] = func148;
          func148.definitionLine = 53;
          func148.definitionModule = "kitty";
          var func150 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func150.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call151 = callmethod(this, "elements", [0]);
              var call152 = callmethod(call151,"push", [1], var_imgTag__39__);
              return call152
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func150.paramCounts = [
            1,
          ];
          func150.variableArities = [
            false,
          ];
          obj119.methods["drawImage"] = func150;
          func150.definitionLine = 57;
          func150.definitionModule = "kitty";
          sourceObject = obj119;
          lineNumber = 30
          var string153 = new GraceString("img");
          var call154 = callmethod(var_dom,"document", [0]);
          var call155 = callmethod(call154,"createElement", [1], string153);
          obj119.data["imgTag"] = call155;
          var reader_kitty_imgTag_156 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_156.def = true;
          reader_kitty_imgTag_156.confidential = true;
          obj119.methods["imgTag"] = reader_kitty_imgTag_156;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call155)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj119;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call157 = callmethod(this, "imgTag", [0]);
          var call158 = callmethod(call157,"src:=", [1], var_url__39__);
          sourceObject = obj119;
          lineNumber = 33
          var call159 = callmethod(var_collections,"list", [0]);
          var call160 = callmethod(call159,"new", [0]);
          obj119.data["elements"] = call160;
          var reader_kitty_elements_161 = function() {
            return this.data["elements"];
          }
          obj119.methods["elements"] = reader_kitty_elements_161;
          obj119.data["elements"] = call160;
          var writer_kitty_elements_161 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj119.methods["elements:="] = writer_kitty_elements_161;
          reader_kitty_elements_161.confidential = true;
          writer_kitty_elements_161.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call160)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj119.mutable = true;
          sourceObject = obj119;
          lineNumber = 34
          onSelf = true;
          var call162 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call163 = callmethod(this, "elements", [0]);
          var call164 = callmethod(call163,"push", [1], call162);
          sourceObject = obj119;
          lineNumber = 36
          obj119.data["height"] = var_height__39__;
          var reader_kitty_height_165 = function() {
            return this.data["height"];
          }
          obj119.methods["height"] = reader_kitty_height_165;
          obj119.data["height"] = var_height__39__;
          var writer_kitty_height_165 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj119.methods["height:="] = writer_kitty_height_165;
          reader_kitty_height_165.confidential = true;
          writer_kitty_height_165.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj119.mutable = true;
          sourceObject = obj119;
          lineNumber = 37
          obj119.data["width"] = var_width__39__;
          var reader_kitty_width_166 = function() {
            return this.data["width"];
          }
          obj119.methods["width"] = reader_kitty_width_166;
          obj119.data["width"] = var_width__39__;
          var writer_kitty_width_166 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj119.methods["width:="] = writer_kitty_width_166;
          reader_kitty_width_166.confidential = true;
          writer_kitty_width_166.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj119.mutable = true;
          sourceObject = obj119;
          sourceObject = obj119;
          sourceObject = obj119;
          superDepth = origSuperDepth;
        }
        obj_init_119.apply(inheritingObject, []);
        return obj119
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj67.methods["new()object"] = func118;
    var func167 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 26
        var string168 = new GraceString("class KittyImage");
        return string168
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func167.paramCounts = [
    ];
    func167.variableArities = [
    ];
    obj67.methods["asDebugString"] = func167;
    func167.definitionLine = 26;
    func167.definitionModule = "kitty";
    sourceObject = obj67;
    sourceObject = obj67;
    superDepth = origSuperDepth;
  }
  obj_init_67.apply(obj67, []);
  var var_KittyImage = obj67;
  lineNumber = 64
  lineNumber = 71
  var func169 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func169.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyEntity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyEntity
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func169.paramCounts = [
    0,
  ];
  func169.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func169;
  func169.definitionLine = 71;
  func169.definitionModule = "kitty";
  var obj170 = Grace_allocObject();
  obj170.definitionModule = "kitty";
  obj170.definitionLine = 71;
  obj170.outer = this;
  var reader_kitty_outer_171 = function() {
    return this.outer;
  }
  obj170.methods["outer"] = reader_kitty_outer_171;
  function obj_init_170() {
    var origSuperDepth = superDepth;
    superDepth = obj170;
    obj170.annotations = [];
    var func172 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func172.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj173 = Grace_allocObject();
        obj173.definitionModule = "kitty";
        obj173.definitionLine = 71;
        obj173.outer = this;
        var reader_kitty_outer_174 = function() {
          return this.outer;
        }
        obj173.methods["outer"] = reader_kitty_outer_174;
        function obj_init_173() {
          var origSuperDepth = superDepth;
          superDepth = obj173;
          obj173.annotations = [];
          var func175 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func175.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string176 = new GraceString("realyee.png");
              onSelf = true;
              var call177 = callmethod(this, "createImage", [1], string176);
              lineNumber = 89
              lineNumber = 88
              var_kitten = this;
              lineNumber = 89
              var call178 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call178
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func175.paramCounts = [
            0,
          ];
          func175.variableArities = [
            false,
          ];
          obj173.methods["awake"] = func175;
          func175.definitionLine = 86;
          func175.definitionModule = "kitty";
          var func179 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              onSelf = true;
              var call180 = callmethod(this, "action", [0]);
              var call181 = callmethod(call180,"apply", [0]);
              return call181
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func179.paramCounts = [
            0,
          ];
          func179.variableArities = [
            false,
          ];
          obj173.methods["tick"] = func179;
          func179.definitionLine = 92;
          func179.definitionModule = "kitty";
          var func182 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func182.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 93
              lineNumber = 97
              onSelf = true;
              var call185 = callmethod(this, "rotation", [0]);
              var prod187 = callmethod(call185, "*", [1], new GraceNum(3.14159));
              var quotient189 = callmethod(prod187, "/", [1], new GraceNum(180));
              var call190 = callmethod(var_math,"cos", [1], quotient189);
              var call192 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod195 = callmethod(var_distance, "*", [1], call192);
              var prod197 = callmethod(prod195, "*", [1], call190);
              onSelf = true;
              var call199 = callmethod(this, "posX", [0]);
              var opresult201 = callmethod(call199, "+", [1], prod197);
              onSelf = true;
              var call202 = callmethod(this, "posX:=", [1], opresult201);
              lineNumber = 98
              lineNumber = 97
              lineNumber = 98
              onSelf = true;
              var call205 = callmethod(this, "rotation", [0]);
              var prod207 = callmethod(call205, "*", [1], new GraceNum(3.14159));
              var quotient209 = callmethod(prod207, "/", [1], new GraceNum(180));
              var call210 = callmethod(var_math,"sin", [1], quotient209);
              var call212 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod215 = callmethod(var_distance, "*", [1], call212);
              var prod217 = callmethod(prod215, "*", [1], call210);
              onSelf = true;
              var call219 = callmethod(this, "posY", [0]);
              var opresult221 = callmethod(call219, "+", [1], prod217);
              onSelf = true;
              var call222 = callmethod(this, "posY:=", [1], opresult221);
              return call222
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func182.paramCounts = [
            1,
          ];
          func182.variableArities = [
            false,
          ];
          obj173.methods["move"] = func182;
          func182.definitionLine = 96;
          func182.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 98
              lineNumber = 102
              onSelf = true;
              var call226 = callmethod(this, "rotation", [0]);
              var opresult229 = callmethod(new GraceNum(90), "+", [1], call226);
              var prod231 = callmethod(opresult229, "*", [1], new GraceNum(3.14159));
              var quotient233 = callmethod(prod231, "/", [1], new GraceNum(180));
              var call234 = callmethod(var_math,"cos", [1], quotient233);
              var call236 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod239 = callmethod(var_distance, "*", [1], call236);
              var prod241 = callmethod(prod239, "*", [1], call234);
              onSelf = true;
              var call243 = callmethod(this, "posX", [0]);
              var opresult245 = callmethod(call243, "+", [1], prod241);
              onSelf = true;
              var call246 = callmethod(this, "posX:=", [1], opresult245);
              lineNumber = 103
              lineNumber = 102
              lineNumber = 103
              onSelf = true;
              var call249 = callmethod(this, "rotation", [0]);
              var opresult252 = callmethod(new GraceNum(90), "+", [1], call249);
              var prod254 = callmethod(opresult252, "*", [1], new GraceNum(3.14159));
              var quotient256 = callmethod(prod254, "/", [1], new GraceNum(180));
              var call257 = callmethod(var_math,"sin", [1], quotient256);
              var call259 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod262 = callmethod(var_distance, "*", [1], call259);
              var prod264 = callmethod(prod262, "*", [1], call257);
              onSelf = true;
              var call266 = callmethod(this, "posY", [0]);
              var opresult268 = callmethod(call266, "+", [1], prod264);
              onSelf = true;
              var call269 = callmethod(this, "posY:=", [1], opresult268);
              return call269
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramCounts = [
            1,
          ];
          func223.variableArities = [
            false,
          ];
          obj173.methods["strafe"] = func223;
          func223.definitionLine = 101;
          func223.definitionModule = "kitty";
          var func270 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 103
              lineNumber = 108
              lineNumber = 107
              onSelf = true;
              var call272 = callmethod(this, "rotation", [0]);
              var opresult274 = callmethod(call272, "+", [1], var_angle);
              onSelf = true;
              var call275 = callmethod(this, "rotation:=", [1], opresult274);
              return call275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func270.paramCounts = [
            1,
          ];
          func270.variableArities = [
            false,
          ];
          obj173.methods["turn"] = func270;
          func270.definitionLine = 106;
          func270.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              var call277 = callmethod(var_ctx,"save", [0]);
              lineNumber = 112
              onSelf = true;
              var call278 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call279 = callmethod(this, "posY", [0]);
              var call280 = callmethod(var_ctx,"translate", [2], call278, call279);
              lineNumber = 113
              onSelf = true;
              var call281 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call282 = callmethod(this, "image", [0]);
              var call283 = callmethod(call282,"draw", [4], var_ctx, var_dx, var_dy, call281);
              lineNumber = 114
              var call284 = callmethod(var_ctx,"restore", [0]);
              return call284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            3,
          ];
          func276.variableArities = [
            false,
          ];
          obj173.methods["draw"] = func276;
          func276.definitionLine = 110;
          func276.definitionModule = "kitty";
          var func285 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 114
              lineNumber = 118
              var call286 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call287 = callmethod(call286, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call288 = callmethod(call287, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call289 = callmethod(this, "image:=", [1], call288);
              return call289
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func285.paramCounts = [
            1,
          ];
          func285.variableArities = [
            false,
          ];
          obj173.methods["createImage"] = func285;
          func285.definitionLine = 117;
          func285.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 118
              lineNumber = 122
              onSelf = true;
              var call291 = callmethod(this, "image:=", [1], var_image__39__);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func290.paramTypes = [];
          func290.paramTypes.push([]);
          func290.paramCounts = [
            1,
          ];
          func290.variableArities = [
            false,
          ];
          obj173.methods["setImage"] = func290;
          func290.definitionLine = 121;
          func290.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 118
              lineNumber = 126
              onSelf = true;
              var call293 = callmethod(this, "action:=", [1], var_action__39__);
              return call293
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            1,
          ];
          func292.variableArities = [
            false,
          ];
          obj173.methods["setAction"] = func292;
          func292.definitionLine = 125;
          func292.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 118
              lineNumber = 130
              onSelf = true;
              var call295 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 132
              lineNumber = 118
              lineNumber = 131
              onSelf = true;
              var call296 = callmethod(this, "posY:=", [1], var_y);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func294.paramCounts = [
            2,
          ];
          func294.variableArities = [
            false,
          ];
          obj173.methods["setLocation"] = func294;
          func294.definitionLine = 129;
          func294.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 135
              onSelf = true;
              var call298 = callmethod(this, "posX", [0]);
              return call298
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            0,
          ];
          func297.variableArities = [
            false,
          ];
          obj173.methods["getX"] = func297;
          func297.definitionLine = 134;
          func297.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 139
              onSelf = true;
              var call300 = callmethod(this, "posY", [0]);
              return call300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func299.paramCounts = [
            0,
          ];
          func299.variableArities = [
            false,
          ];
          obj173.methods["getY"] = func299;
          func299.definitionLine = 138;
          func299.definitionModule = "kitty";
          var func301 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 118
              lineNumber = 143
              onSelf = true;
              var call302 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call302
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func301.paramCounts = [
            1,
          ];
          func301.variableArities = [
            false,
          ];
          obj173.methods["setX"] = func301;
          func301.definitionLine = 142;
          func301.definitionModule = "kitty";
          var func303 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 118
              lineNumber = 147
              onSelf = true;
              var call304 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call304
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func303.paramCounts = [
            1,
          ];
          func303.variableArities = [
            false,
          ];
          obj173.methods["setY"] = func303;
          func303.definitionLine = 146;
          func303.definitionModule = "kitty";
          var func305 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func305.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
              onSelf = true;
              var call306 = callmethod(this, "rotation", [0]);
              return call306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func305.paramCounts = [
            0,
          ];
          func305.variableArities = [
            false,
          ];
          obj173.methods["getRotation"] = func305;
          func305.definitionLine = 150;
          func305.definitionModule = "kitty";
          sourceObject = obj173;
          lineNumber = 75
          obj173.data["tag"] = var_tag__39__;
          var reader_kitty_tag_307 = function() {
            return this.data["tag"];
          }
          obj173.methods["tag"] = reader_kitty_tag_307;
          obj173.data["tag"] = var_tag__39__;
          var writer_kitty_tag_307 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj173.methods["tag:="] = writer_kitty_tag_307;
          reader_kitty_tag_307.confidential = true;
          writer_kitty_tag_307.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 76
          obj173.data["posX"] = var_x__39__;
          var reader_kitty_posX_308 = function() {
            return this.data["posX"];
          }
          obj173.methods["posX"] = reader_kitty_posX_308;
          obj173.data["posX"] = var_x__39__;
          var writer_kitty_posX_308 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj173.methods["posX:="] = writer_kitty_posX_308;
          reader_kitty_posX_308.confidential = true;
          writer_kitty_posX_308.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 77
          obj173.data["posY"] = var_y__39__;
          var reader_kitty_posY_309 = function() {
            return this.data["posY"];
          }
          obj173.methods["posY"] = reader_kitty_posY_309;
          obj173.data["posY"] = var_y__39__;
          var writer_kitty_posY_309 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj173.methods["posY:="] = writer_kitty_posY_309;
          reader_kitty_posY_309.confidential = true;
          writer_kitty_posY_309.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 78
          obj173.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_310 = function() {
            return this.data["rotation"];
          }
          obj173.methods["rotation"] = reader_kitty_rotation_310;
          obj173.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_310 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj173.methods["rotation:="] = writer_kitty_rotation_310;
          reader_kitty_rotation_310.confidential = true;
          writer_kitty_rotation_310.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 81
          var block311 = Grace_allocObject();
          block311.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block311.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block311.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block311.methods["match"] = GraceBlock_match;
          block311.methods["prefix?"] = GraceBlock_lift;
          block311.receiver = this;
          block311.className = 'block<kitty:81>';
          block311.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj173.data["action"] = block311;
          var reader_kitty_action_312 = function() {
            return this.data["action"];
          }
          obj173.methods["action"] = reader_kitty_action_312;
          obj173.data["action"] = block311;
          var writer_kitty_action_312 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj173.methods["action:="] = writer_kitty_action_312;
          reader_kitty_action_312.confidential = true;
          writer_kitty_action_312.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 79
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block311)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          obj173.data["image"] = undefined;
          var reader_kitty_image_313 = function() {
            return this.data["image"];
          }
          obj173.methods["image"] = reader_kitty_image_313;
          obj173.data["image"] = undefined;
          var writer_kitty_image_313 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj173.methods["image:="] = writer_kitty_image_313;
          reader_kitty_image_313.confidential = true;
          writer_kitty_image_313.confidential = true;
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 83
          onSelf = true;
          var call314 = callmethod(this, "awake", [0]);
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          sourceObject = obj173;
          superDepth = origSuperDepth;
        }
        obj_init_173.apply(obj173, []);
        return obj173
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func172.paramCounts = [
      3,
    ];
    func172.variableArities = [
      false,
    ];
    obj170.methods["new"] = func172;
    func172.definitionLine = 71;
    func172.definitionModule = "kitty";
    var func315 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj316 = Grace_allocObject();
        obj316.definitionModule = "kitty";
        obj316.definitionLine = 71;
        var inho316 = inheritingObject;
        while (inho316.superobj) inho316 = inho316.superobj;
        inho316.superobj = obj316;
        obj316.data = inheritingObject.data;
        obj316.outer = this;
        var reader_kitty_outer_317 = function() {
          return this.outer;
        }
        obj316.methods["outer"] = reader_kitty_outer_317;
        function obj_init_316() {
          var origSuperDepth = superDepth;
          superDepth = obj316;
          obj316.annotations = [];
          var func318 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string319 = new GraceString("realyee.png");
              onSelf = true;
              var call320 = callmethod(this, "createImage", [1], string319);
              lineNumber = 89
              lineNumber = 88
              var_kitten = this;
              lineNumber = 89
              var call321 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call321
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func318.paramCounts = [
            0,
          ];
          func318.variableArities = [
            false,
          ];
          obj316.methods["awake"] = func318;
          func318.definitionLine = 86;
          func318.definitionModule = "kitty";
          var func322 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func322.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              onSelf = true;
              var call323 = callmethod(this, "action", [0]);
              var call324 = callmethod(call323,"apply", [0]);
              return call324
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func322.paramCounts = [
            0,
          ];
          func322.variableArities = [
            false,
          ];
          obj316.methods["tick"] = func322;
          func322.definitionLine = 92;
          func322.definitionModule = "kitty";
          var func325 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func325.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 93
              lineNumber = 97
              onSelf = true;
              var call328 = callmethod(this, "rotation", [0]);
              var prod330 = callmethod(call328, "*", [1], new GraceNum(3.14159));
              var quotient332 = callmethod(prod330, "/", [1], new GraceNum(180));
              var call333 = callmethod(var_math,"cos", [1], quotient332);
              var call335 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod338 = callmethod(var_distance, "*", [1], call335);
              var prod340 = callmethod(prod338, "*", [1], call333);
              onSelf = true;
              var call342 = callmethod(this, "posX", [0]);
              var opresult344 = callmethod(call342, "+", [1], prod340);
              onSelf = true;
              var call345 = callmethod(this, "posX:=", [1], opresult344);
              lineNumber = 98
              lineNumber = 97
              lineNumber = 98
              onSelf = true;
              var call348 = callmethod(this, "rotation", [0]);
              var prod350 = callmethod(call348, "*", [1], new GraceNum(3.14159));
              var quotient352 = callmethod(prod350, "/", [1], new GraceNum(180));
              var call353 = callmethod(var_math,"sin", [1], quotient352);
              var call355 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod358 = callmethod(var_distance, "*", [1], call355);
              var prod360 = callmethod(prod358, "*", [1], call353);
              onSelf = true;
              var call362 = callmethod(this, "posY", [0]);
              var opresult364 = callmethod(call362, "+", [1], prod360);
              onSelf = true;
              var call365 = callmethod(this, "posY:=", [1], opresult364);
              return call365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func325.paramCounts = [
            1,
          ];
          func325.variableArities = [
            false,
          ];
          obj316.methods["move"] = func325;
          func325.definitionLine = 96;
          func325.definitionModule = "kitty";
          var func366 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 98
              lineNumber = 102
              onSelf = true;
              var call369 = callmethod(this, "rotation", [0]);
              var opresult372 = callmethod(new GraceNum(90), "+", [1], call369);
              var prod374 = callmethod(opresult372, "*", [1], new GraceNum(3.14159));
              var quotient376 = callmethod(prod374, "/", [1], new GraceNum(180));
              var call377 = callmethod(var_math,"cos", [1], quotient376);
              var call379 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod382 = callmethod(var_distance, "*", [1], call379);
              var prod384 = callmethod(prod382, "*", [1], call377);
              onSelf = true;
              var call386 = callmethod(this, "posX", [0]);
              var opresult388 = callmethod(call386, "+", [1], prod384);
              onSelf = true;
              var call389 = callmethod(this, "posX:=", [1], opresult388);
              lineNumber = 103
              lineNumber = 102
              lineNumber = 103
              onSelf = true;
              var call392 = callmethod(this, "rotation", [0]);
              var opresult395 = callmethod(new GraceNum(90), "+", [1], call392);
              var prod397 = callmethod(opresult395, "*", [1], new GraceNum(3.14159));
              var quotient399 = callmethod(prod397, "/", [1], new GraceNum(180));
              var call400 = callmethod(var_math,"sin", [1], quotient399);
              var call402 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod405 = callmethod(var_distance, "*", [1], call402);
              var prod407 = callmethod(prod405, "*", [1], call400);
              onSelf = true;
              var call409 = callmethod(this, "posY", [0]);
              var opresult411 = callmethod(call409, "+", [1], prod407);
              onSelf = true;
              var call412 = callmethod(this, "posY:=", [1], opresult411);
              return call412
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func366.paramCounts = [
            1,
          ];
          func366.variableArities = [
            false,
          ];
          obj316.methods["strafe"] = func366;
          func366.definitionLine = 101;
          func366.definitionModule = "kitty";
          var func413 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func413.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 103
              lineNumber = 108
              lineNumber = 107
              onSelf = true;
              var call415 = callmethod(this, "rotation", [0]);
              var opresult417 = callmethod(call415, "+", [1], var_angle);
              onSelf = true;
              var call418 = callmethod(this, "rotation:=", [1], opresult417);
              return call418
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func413.paramCounts = [
            1,
          ];
          func413.variableArities = [
            false,
          ];
          obj316.methods["turn"] = func413;
          func413.definitionLine = 106;
          func413.definitionModule = "kitty";
          var func419 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func419.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              var call420 = callmethod(var_ctx,"save", [0]);
              lineNumber = 112
              onSelf = true;
              var call421 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call422 = callmethod(this, "posY", [0]);
              var call423 = callmethod(var_ctx,"translate", [2], call421, call422);
              lineNumber = 113
              onSelf = true;
              var call424 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call425 = callmethod(this, "image", [0]);
              var call426 = callmethod(call425,"draw", [4], var_ctx, var_dx, var_dy, call424);
              lineNumber = 114
              var call427 = callmethod(var_ctx,"restore", [0]);
              return call427
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func419.paramCounts = [
            3,
          ];
          func419.variableArities = [
            false,
          ];
          obj316.methods["draw"] = func419;
          func419.definitionLine = 110;
          func419.definitionModule = "kitty";
          var func428 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 114
              lineNumber = 118
              var call429 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call430 = callmethod(call429, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call431 = callmethod(call430, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call432 = callmethod(this, "image:=", [1], call431);
              return call432
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func428.paramCounts = [
            1,
          ];
          func428.variableArities = [
            false,
          ];
          obj316.methods["createImage"] = func428;
          func428.definitionLine = 117;
          func428.definitionModule = "kitty";
          var func433 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func433.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 118
              lineNumber = 122
              onSelf = true;
              var call434 = callmethod(this, "image:=", [1], var_image__39__);
              return call434
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func433.paramTypes = [];
          func433.paramTypes.push([]);
          func433.paramCounts = [
            1,
          ];
          func433.variableArities = [
            false,
          ];
          obj316.methods["setImage"] = func433;
          func433.definitionLine = 121;
          func433.definitionModule = "kitty";
          var func435 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func435.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 118
              lineNumber = 126
              onSelf = true;
              var call436 = callmethod(this, "action:=", [1], var_action__39__);
              return call436
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func435.paramCounts = [
            1,
          ];
          func435.variableArities = [
            false,
          ];
          obj316.methods["setAction"] = func435;
          func435.definitionLine = 125;
          func435.definitionModule = "kitty";
          var func437 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 118
              lineNumber = 130
              onSelf = true;
              var call438 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 132
              lineNumber = 118
              lineNumber = 131
              onSelf = true;
              var call439 = callmethod(this, "posY:=", [1], var_y);
              return call439
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func437.paramCounts = [
            2,
          ];
          func437.variableArities = [
            false,
          ];
          obj316.methods["setLocation"] = func437;
          func437.definitionLine = 129;
          func437.definitionModule = "kitty";
          var func440 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 135
              onSelf = true;
              var call441 = callmethod(this, "posX", [0]);
              return call441
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func440.paramCounts = [
            0,
          ];
          func440.variableArities = [
            false,
          ];
          obj316.methods["getX"] = func440;
          func440.definitionLine = 134;
          func440.definitionModule = "kitty";
          var func442 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func442.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 139
              onSelf = true;
              var call443 = callmethod(this, "posY", [0]);
              return call443
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func442.paramCounts = [
            0,
          ];
          func442.variableArities = [
            false,
          ];
          obj316.methods["getY"] = func442;
          func442.definitionLine = 138;
          func442.definitionModule = "kitty";
          var func444 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func444.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 118
              lineNumber = 143
              onSelf = true;
              var call445 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call445
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func444.paramCounts = [
            1,
          ];
          func444.variableArities = [
            false,
          ];
          obj316.methods["setX"] = func444;
          func444.definitionLine = 142;
          func444.definitionModule = "kitty";
          var func446 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func446.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 118
              lineNumber = 147
              onSelf = true;
              var call447 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call447
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func446.paramCounts = [
            1,
          ];
          func446.variableArities = [
            false,
          ];
          obj316.methods["setY"] = func446;
          func446.definitionLine = 146;
          func446.definitionModule = "kitty";
          var func448 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func448.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
              onSelf = true;
              var call449 = callmethod(this, "rotation", [0]);
              return call449
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func448.paramCounts = [
            0,
          ];
          func448.variableArities = [
            false,
          ];
          obj316.methods["getRotation"] = func448;
          func448.definitionLine = 150;
          func448.definitionModule = "kitty";
          sourceObject = obj316;
          lineNumber = 75
          obj316.data["tag"] = var_tag__39__;
          var reader_kitty_tag_450 = function() {
            return this.data["tag"];
          }
          obj316.methods["tag"] = reader_kitty_tag_450;
          obj316.data["tag"] = var_tag__39__;
          var writer_kitty_tag_450 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj316.methods["tag:="] = writer_kitty_tag_450;
          reader_kitty_tag_450.confidential = true;
          writer_kitty_tag_450.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj316.mutable = true;
          sourceObject = obj316;
          lineNumber = 76
          obj316.data["posX"] = var_x__39__;
          var reader_kitty_posX_451 = function() {
            return this.data["posX"];
          }
          obj316.methods["posX"] = reader_kitty_posX_451;
          obj316.data["posX"] = var_x__39__;
          var writer_kitty_posX_451 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj316.methods["posX:="] = writer_kitty_posX_451;
          reader_kitty_posX_451.confidential = true;
          writer_kitty_posX_451.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj316.mutable = true;
          sourceObject = obj316;
          lineNumber = 77
          obj316.data["posY"] = var_y__39__;
          var reader_kitty_posY_452 = function() {
            return this.data["posY"];
          }
          obj316.methods["posY"] = reader_kitty_posY_452;
          obj316.data["posY"] = var_y__39__;
          var writer_kitty_posY_452 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj316.methods["posY:="] = writer_kitty_posY_452;
          reader_kitty_posY_452.confidential = true;
          writer_kitty_posY_452.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj316.mutable = true;
          sourceObject = obj316;
          lineNumber = 78
          obj316.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_453 = function() {
            return this.data["rotation"];
          }
          obj316.methods["rotation"] = reader_kitty_rotation_453;
          obj316.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_453 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj316.methods["rotation:="] = writer_kitty_rotation_453;
          reader_kitty_rotation_453.confidential = true;
          writer_kitty_rotation_453.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj316.mutable = true;
          sourceObject = obj316;
          lineNumber = 81
          var block454 = Grace_allocObject();
          block454.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block454.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block454.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block454.methods["match"] = GraceBlock_match;
          block454.methods["prefix?"] = GraceBlock_lift;
          block454.receiver = this;
          block454.className = 'block<kitty:81>';
          block454.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj316.data["action"] = block454;
          var reader_kitty_action_455 = function() {
            return this.data["action"];
          }
          obj316.methods["action"] = reader_kitty_action_455;
          obj316.data["action"] = block454;
          var writer_kitty_action_455 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj316.methods["action:="] = writer_kitty_action_455;
          reader_kitty_action_455.confidential = true;
          writer_kitty_action_455.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 79
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block454)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj316.mutable = true;
          sourceObject = obj316;
          obj316.data["image"] = undefined;
          var reader_kitty_image_456 = function() {
            return this.data["image"];
          }
          obj316.methods["image"] = reader_kitty_image_456;
          obj316.data["image"] = undefined;
          var writer_kitty_image_456 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj316.methods["image:="] = writer_kitty_image_456;
          reader_kitty_image_456.confidential = true;
          writer_kitty_image_456.confidential = true;
          obj316.mutable = true;
          sourceObject = obj316;
          lineNumber = 83
          onSelf = true;
          var call457 = callmethod(this, "awake", [0]);
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          sourceObject = obj316;
          superDepth = origSuperDepth;
        }
        obj_init_316.apply(inheritingObject, []);
        return obj316
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj170.methods["new()object"] = func315;
    var func458 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string459 = new GraceString("class KittyEntity");
        return string459
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func458.paramCounts = [
    ];
    func458.variableArities = [
    ];
    obj170.methods["asDebugString"] = func458;
    func458.definitionLine = 71;
    func458.definitionModule = "kitty";
    sourceObject = obj170;
    sourceObject = obj170;
    superDepth = origSuperDepth;
  }
  obj_init_170.apply(obj170, []);
  var var_KittyEntity = obj170;
  lineNumber = 155
  lineNumber = 163
  lineNumber = 167
  lineNumber = 173
  var func460 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func460.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyWorld
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func460.paramCounts = [
    0,
  ];
  func460.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func460;
  func460.definitionLine = 173;
  func460.definitionModule = "kitty";
  var obj461 = Grace_allocObject();
  obj461.definitionModule = "kitty";
  obj461.definitionLine = 173;
  obj461.outer = this;
  var reader_kitty_outer_462 = function() {
    return this.outer;
  }
  obj461.methods["outer"] = reader_kitty_outer_462;
  function obj_init_461() {
    var origSuperDepth = superDepth;
    superDepth = obj461;
    obj461.annotations = [];
    var func463 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func463.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj464 = Grace_allocObject();
        obj464.definitionModule = "kitty";
        obj464.definitionLine = 173;
        obj464.outer = this;
        var reader_kitty_outer_465 = function() {
          return this.outer;
        }
        obj464.methods["outer"] = reader_kitty_outer_465;
        function obj_init_464() {
          var origSuperDepth = superDepth;
          superDepth = obj464;
          obj464.annotations = [];
          var func466 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func466.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 211
              var if467 = var_done;
              lineNumber = 207
              onSelf = true;
              var call468 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call468)) {
                lineNumber = 209
                lineNumber = 208
                var bool469 = new GraceBoolean(false)
                return bool469
              }
              lineNumber = 212
              lineNumber = 173
              lineNumber = 211
              var call470 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call471 = callmethod(this, "document:=", [1], call470);
              lineNumber = 212
              lineNumber = 211
              lineNumber = 212
              var string472 = new GraceString("standard-canvas");
              onSelf = true;
              var call473 = callmethod(this, "document", [0]);
              var call474 = callmethod(call473,"getElementById", [1], string472);
              onSelf = true;
              var call475 = callmethod(this, "canvas:=", [1], call474);
              lineNumber = 214
              lineNumber = 211
              lineNumber = 213
              onSelf = true;
              var call476 = callmethod(this, "canvas", [0]);
              var call477 = callmethod(call476,"width", [0]);
              onSelf = true;
              var call478 = callmethod(this, "canvasWidth:=", [1], call477);
              lineNumber = 217
              lineNumber = 213
              lineNumber = 214
              onSelf = true;
              var call479 = callmethod(this, "canvas", [0]);
              var call480 = callmethod(call479,"height", [0]);
              onSelf = true;
              var call481 = callmethod(this, "canvasHeight:=", [1], call480);
              lineNumber = 229
              var block482 = Grace_allocObject();
              block482.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block482.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block482.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block482.methods["match"] = GraceBlock_match;
              block482.methods["prefix?"] = GraceBlock_lift;
              block482.receiver = this;
              block482.className = 'block<kitty:229>';
              block482.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 220
                lineNumber = 219
                onSelf = true;
                var call483 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call485 = callmethod(this, "canvas", [0]);
                var call486 = callmethod(call485,"offsetWidth", [0]);
                onSelf = true;
                var call488 = callmethod(this, "canvas", [0]);
                var call489 = callmethod(call488,"offsetLeft", [0]);
                var call491 = callmethod(var_ev,"clientX", [0]);
                var diff493 = callmethod(call491, "-", [1], call489);
                var quotient495 = callmethod(diff493, "/", [1], call486);
                var prod497 = callmethod(quotient495, "*", [1], call483);
                var var_x = prod497;
                lineNumber = 220;
                moduleName = "kitty";
                lineNumber = 219
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 224
                lineNumber = 220
                onSelf = true;
                var call498 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call500 = callmethod(this, "canvas", [0]);
                var call501 = callmethod(call500,"offsetHeight", [0]);
                onSelf = true;
                var call503 = callmethod(this, "canvas", [0]);
                var call504 = callmethod(call503,"offsetTop", [0]);
                var call506 = callmethod(var_ev,"clientY", [0]);
                var diff508 = callmethod(call506, "-", [1], call504);
                var quotient510 = callmethod(diff508, "/", [1], call501);
                var prod512 = callmethod(quotient510, "*", [1], call498);
                var var_y = prod512;
                lineNumber = 224;
                moduleName = "kitty";
                lineNumber = 220
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 228
                var if513 = var_done;
                lineNumber = 224
                var opresult516 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call519 = callmethod(this, "canvasWidth", [0]);
                var diff521 = callmethod(call519, "-", [1], new GraceNum(20));
                var opresult524 = callmethod(var_x, ">", [1], diff521);
                var opresult526 = callmethod(opresult524, "&&", [1], opresult516);
                if (Grace_isTrue(opresult526)) {
                  lineNumber = 225
                  var call527 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 226
                  onSelf = true;
                  var call528 = callmethod(this, "stop", [0]);
                  if513 = call528;
                }
                return if513;
              };
              var_mouseDownListener = block482;
              lineNumber = 229
              var string529 = new GraceString("mousedown");
              onSelf = true;
              var call530 = callmethod(this, "canvas", [0]);
              var call531 = callmethod(call530,"addEventListener", [2], string529, var_mouseDownListener);
              lineNumber = 239
              var block532 = Grace_allocObject();
              block532.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block532.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block532.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block532.methods["match"] = GraceBlock_match;
              block532.methods["prefix?"] = GraceBlock_lift;
              block532.receiver = this;
              block532.className = 'block<kitty:239>';
              block532.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 237
                var if533 = var_done;
                lineNumber = 234
                var call535 = callmethod(var_ev,"keyCode", [0]);
                var opresult537 = callmethod(call535, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult537)) {
                  lineNumber = 235
                  onSelf = true;
                  var call538 = callmethod(this, "stop", [0]);
                  if533 = call538;
                }
                lineNumber = 238
                lineNumber = 237
                var call539 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call539;
                return call539;
              };
              var_keyDownListener = block532;
              lineNumber = 239
              var string540 = new GraceString("keydown");
              onSelf = true;
              var call541 = callmethod(this, "document", [0]);
              var call542 = callmethod(call541,"addEventListener", [2], string540, var_keyDownListener);
              lineNumber = 245
              var block543 = Grace_allocObject();
              block543.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block543.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block543.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block543.methods["match"] = GraceBlock_match;
              block543.methods["prefix?"] = GraceBlock_lift;
              block543.receiver = this;
              block543.className = 'block<kitty:245>';
              block543.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 244
                lineNumber = 243
                var call544 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call544;
                return call544;
              };
              var_keyUpListener = block543;
              lineNumber = 245
              var string545 = new GraceString("keyup");
              onSelf = true;
              var call546 = callmethod(this, "document", [0]);
              var call547 = callmethod(call546,"addEventListener", [2], string545, var_keyUpListener);
              lineNumber = 247
              lineNumber = 237
              lineNumber = 247
              var string548 = new GraceString("canvas");
              var call549 = callmethod(var_dom,"document", [0]);
              var call550 = callmethod(call549,"createElement", [1], string548);
              onSelf = true;
              var call551 = callmethod(this, "backingCanvas:=", [1], call550);
              lineNumber = 249
              lineNumber = 247
              lineNumber = 248
              onSelf = true;
              var call552 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call553 = callmethod(this, "backingCanvas", [0]);
              var call554 = callmethod(call553,"height:=", [1], call552);
              lineNumber = 250
              lineNumber = 247
              lineNumber = 249
              onSelf = true;
              var call555 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call556 = callmethod(this, "backingCanvas", [0]);
              var call557 = callmethod(call556,"width:=", [1], call555);
              lineNumber = 250
              lineNumber = 247
              lineNumber = 250
              var string558 = new GraceString("2d");
              onSelf = true;
              var call559 = callmethod(this, "backingCanvas", [0]);
              var call560 = callmethod(call559,"getContext", [1], string558);
              onSelf = true;
              var call561 = callmethod(this, "backingContext:=", [1], call560);
              lineNumber = 251
              lineNumber = 247
              lineNumber = 251
              var string562 = new GraceString("2d");
              onSelf = true;
              var call563 = callmethod(this, "canvas", [0]);
              var call564 = callmethod(call563,"getContext", [1], string562);
              onSelf = true;
              var call565 = callmethod(this, "mctx:=", [1], call564);
              lineNumber = 254
              var string566 = new GraceString("doggo.jpg");
              onSelf = true;
              var call567 = callmethod(this, "setBackground", [1], string566);
              lineNumber = 263
              lineNumber = 247
              lineNumber = 260
              var bool568 = new GraceBoolean(true)
              onSelf = true;
              var call569 = callmethod(this, "isInit:=", [1], bool568);
              lineNumber = 263
              var call570 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call571 = callmethod(call570, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call572 = callmethod(call571, "setWorld", [1], this);
              return call572
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func466.paramCounts = [
            0,
          ];
          func466.variableArities = [
            false,
          ];
          obj464.methods["init"] = func466;
          func466.definitionLine = 203;
          func466.definitionModule = "kitty";
          var func573 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func573.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 263
              lineNumber = 274
              var bool574 = new GraceBoolean(true)
              onSelf = true;
              var call575 = callmethod(this, "isRunning:=", [1], bool574);
              lineNumber = 275
              var block576 = Grace_allocObject();
              block576.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block576.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block576.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block576.methods["match"] = GraceBlock_match;
              block576.methods["prefix?"] = GraceBlock_lift;
              block576.receiver = this;
              block576.className = 'block<kitty:275>';
              block576.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call577 = callmethod(this, "isRunning", [0]);
                return call577;
              };
              lineNumber = 279
              var block578 = Grace_allocObject();
              block578.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block578.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block578.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block578.methods["match"] = GraceBlock_match;
              block578.methods["prefix?"] = GraceBlock_lift;
              block578.receiver = this;
              block578.className = 'block<kitty:279>';
              block578.real = function(
              ) {
                sourceObject = this;
                lineNumber = 276
                onSelf = true;
                var call579 = callmethod(this, "update", [0]);
                return call579;
              };
              lineNumber = 275
              var call580 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block576, new GraceNum(10), block578);
              return call580
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func573.paramCounts = [
            0,
          ];
          func573.variableArities = [
            false,
          ];
          obj464.methods["start"] = func573;
          func573.definitionLine = 272;
          func573.definitionModule = "kitty";
          var func581 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func581.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              lineNumber = 263
              lineNumber = 287
              onSelf = true;
              var call582 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call583 = callmethod(this, "mctx", [0]);
              var call584 = callmethod(call583,"fillStyle:=", [1], call582);
              lineNumber = 288
              onSelf = true;
              var call585 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call586 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call587 = callmethod(this, "mctx", [0]);
              var call588 = callmethod(call587,"fillRect", [4], new GraceNum(0), new GraceNum(0), call585, call586);
              lineNumber = 289
              onSelf = true;
              var call589 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call590 = callmethod(this, "mctx", [0]);
              var call591 = callmethod(call590,"drawImage", [3], call589, new GraceNum(0), new GraceNum(0));
              lineNumber = 290
              onSelf = true;
              var call592 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call594 = callmethod(this, "canvasWidth", [0]);
              var quotient596 = callmethod(call594, "/", [1], new GraceNum(2));
              onSelf = true;
              var call598 = callmethod(this, "canvasHeight", [0]);
              var quotient600 = callmethod(call598, "/", [1], new GraceNum(2));
              onSelf = true;
              var call601 = callmethod(this, "background", [0]);
              var call602 = callmethod(call601,"draw", [4], call592, quotient596, quotient600, new GraceNum(0));
              lineNumber = 293
              onSelf = true;
              var call603 = callmethod(this, "entities", [0]);
              lineNumber = 299
              var block604 = Grace_allocObject();
              block604.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block604.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block604.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block604.methods["match"] = GraceBlock_match;
              block604.methods["prefix?"] = GraceBlock_lift;
              block604.receiver = this;
              block604.className = 'block<kitty:299>';
              block604.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 294
                var call605 = callmethod(var_entity,"tick", [0]);
                lineNumber = 295
                onSelf = true;
                var call606 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call608 = callmethod(this, "canvasWidth", [0]);
                var quotient610 = callmethod(call608, "/", [1], new GraceNum(2));
                onSelf = true;
                var call612 = callmethod(this, "canvasHeight", [0]);
                var quotient614 = callmethod(call612, "/", [1], new GraceNum(2));
                var call615 = callmethod(var_entity,"draw", [3], call606, quotient610, quotient614);
                return call615;
              };
              var call616 = callmethod(Grace_prelude,"for()do", [1, 1], call603, block604);
              return call616
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func581.paramCounts = [
            0,
          ];
          func581.variableArities = [
            false,
          ];
          obj464.methods["update"] = func581;
          func581.definitionLine = 282;
          func581.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              var string618 = new GraceString("WORLD STOPPING...");
              var call619 = Grace_print(string618);
              lineNumber = 304
              lineNumber = 294
              lineNumber = 303
              var bool620 = new GraceBoolean(false)
              onSelf = true;
              var call621 = callmethod(this, "isRunning:=", [1], bool620);
              lineNumber = 304
              var string622 = new GraceString("mousedown");
              onSelf = true;
              var call623 = callmethod(this, "canvas", [0]);
              var call624 = callmethod(call623,"removeEventListener", [2], string622, var_mouseDownListener);
              lineNumber = 305
              var string625 = new GraceString("keydown");
              onSelf = true;
              var call626 = callmethod(this, "document", [0]);
              var call627 = callmethod(call626,"removeEventListener", [2], string625, var_keyDownListener);
              lineNumber = 306
              var string628 = new GraceString("keyup");
              onSelf = true;
              var call629 = callmethod(this, "document", [0]);
              var call630 = callmethod(call629,"removeEventListener", [2], string628, var_keyUpListener);
              return call630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func617.paramCounts = [
            0,
          ];
          func617.variableArities = [
            false,
          ];
          obj464.methods["stop"] = func617;
          func617.definitionLine = 301;
          func617.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              lineNumber = 294
              lineNumber = 310
              onSelf = true;
              var call632 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call633 = callmethod(this, "canvasHeight", [0]);
              var call634 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call635 = callmethod(call634, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call636 = callmethod(call635, "Image()width()height", [1, 1, 1], var_url, call632, call633);
              onSelf = true;
              var call637 = callmethod(this, "background:=", [1], call636);
              return call637
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func631.paramCounts = [
            1,
          ];
          func631.variableArities = [
            false,
          ];
          obj464.methods["setBackground"] = func631;
          func631.definitionLine = 309;
          func631.definitionModule = "kitty";
          var func638 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 314
              onSelf = true;
              var call639 = callmethod(this, "entities", [0]);
              var call640 = callmethod(call639,"push", [1], var_e);
              return call640
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func638.paramCounts = [
            1,
          ];
          func638.variableArities = [
            false,
          ];
          obj464.methods["addEntity"] = func638;
          func638.definitionLine = 313;
          func638.definitionModule = "kitty";
          var func641 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func641.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 319
              lineNumber = 318
              onSelf = true;
              var call642 = callmethod(this, "mctx", [0]);
              return call642
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func641.paramCounts = [
            0,
          ];
          func641.variableArities = [
            false,
          ];
          obj464.methods["getContext"] = func641;
          func641.definitionLine = 317;
          func641.definitionModule = "kitty";
          var func643 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 323
              lineNumber = 322
              onSelf = true;
              var call644 = callmethod(this, "width", [0]);
              onSelf = true;
              var call646 = callmethod(this, "canvasWidth", [0]);
              var quotient648 = callmethod(call646, "/", [1], call644);
              return quotient648
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func643.paramCounts = [
            0,
          ];
          func643.variableArities = [
            false,
          ];
          obj464.methods["moveWidthMultipler"] = func643;
          func643.definitionLine = 321;
          func643.definitionModule = "kitty";
          var func649 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              lineNumber = 326
              onSelf = true;
              var call650 = callmethod(this, "height", [0]);
              onSelf = true;
              var call652 = callmethod(this, "canvasHeight", [0]);
              var quotient654 = callmethod(call652, "/", [1], call650);
              return quotient654
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func649.paramCounts = [
            0,
          ];
          func649.variableArities = [
            false,
          ];
          obj464.methods["moveHeightMultipler"] = func649;
          func649.definitionLine = 325;
          func649.definitionModule = "kitty";
          sourceObject = obj464;
          lineNumber = 176
          obj464.data["width"] = var_width__39__;
          var reader_kitty_width_655 = function() {
            return this.data["width"];
          }
          obj464.methods["width"] = reader_kitty_width_655;
          obj464.data["width"] = var_width__39__;
          var writer_kitty_width_655 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj464.methods["width:="] = writer_kitty_width_655;
          lineNumber = 177;
          moduleName = "kitty";
          lineNumber = 176
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 177
          obj464.data["height"] = var_height__39__;
          var reader_kitty_height_656 = function() {
            return this.data["height"];
          }
          obj464.methods["height"] = reader_kitty_height_656;
          obj464.data["height"] = var_height__39__;
          var writer_kitty_height_656 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj464.methods["height:="] = writer_kitty_height_656;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 178
          obj464.data["tag"] = var_tag__39__;
          var reader_kitty_tag_657 = function() {
            return this.data["tag"];
          }
          obj464.methods["tag"] = reader_kitty_tag_657;
          obj464.data["tag"] = var_tag__39__;
          var writer_kitty_tag_657 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj464.methods["tag:="] = writer_kitty_tag_657;
          lineNumber = 180;
          moduleName = "kitty";
          lineNumber = 178
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["background"] = undefined;
          var reader_kitty_background_658 = function() {
            return this.data["background"];
          }
          obj464.methods["background"] = reader_kitty_background_658;
          obj464.data["background"] = undefined;
          var writer_kitty_background_658 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj464.methods["background:="] = writer_kitty_background_658;
          reader_kitty_background_658.confidential = true;
          writer_kitty_background_658.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 181
          var string659 = new GraceString("black");
          obj464.data["backgroundColour"] = string659;
          var reader_kitty_backgroundColour_660 = function() {
            return this.data["backgroundColour"];
          }
          obj464.methods["backgroundColour"] = reader_kitty_backgroundColour_660;
          obj464.data["backgroundColour"] = string659;
          var writer_kitty_backgroundColour_660 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj464.methods["backgroundColour:="] = writer_kitty_backgroundColour_660;
          reader_kitty_backgroundColour_660.confidential = true;
          writer_kitty_backgroundColour_660.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string659)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["document"] = undefined;
          var reader_kitty_document_661 = function() {
            return this.data["document"];
          }
          obj464.methods["document"] = reader_kitty_document_661;
          obj464.data["document"] = undefined;
          var writer_kitty_document_661 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj464.methods["document:="] = writer_kitty_document_661;
          reader_kitty_document_661.confidential = true;
          writer_kitty_document_661.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_662 = function() {
            return this.data["backingCanvas"];
          }
          obj464.methods["backingCanvas"] = reader_kitty_backingCanvas_662;
          obj464.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_662 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj464.methods["backingCanvas:="] = writer_kitty_backingCanvas_662;
          reader_kitty_backingCanvas_662.confidential = true;
          writer_kitty_backingCanvas_662.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["backingContext"] = undefined;
          var reader_kitty_backingContext_663 = function() {
            return this.data["backingContext"];
          }
          obj464.methods["backingContext"] = reader_kitty_backingContext_663;
          obj464.data["backingContext"] = undefined;
          var writer_kitty_backingContext_663 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj464.methods["backingContext:="] = writer_kitty_backingContext_663;
          reader_kitty_backingContext_663.confidential = true;
          writer_kitty_backingContext_663.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["canvas"] = undefined;
          var reader_kitty_canvas_664 = function() {
            return this.data["canvas"];
          }
          obj464.methods["canvas"] = reader_kitty_canvas_664;
          obj464.data["canvas"] = undefined;
          var writer_kitty_canvas_664 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj464.methods["canvas:="] = writer_kitty_canvas_664;
          reader_kitty_canvas_664.confidential = true;
          writer_kitty_canvas_664.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_665 = function() {
            return this.data["canvasWidth"];
          }
          obj464.methods["canvasWidth"] = reader_kitty_canvasWidth_665;
          obj464.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_665 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj464.methods["canvasWidth:="] = writer_kitty_canvasWidth_665;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_666 = function() {
            return this.data["canvasHeight"];
          }
          obj464.methods["canvasHeight"] = reader_kitty_canvasHeight_666;
          obj464.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_666 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj464.methods["canvasHeight:="] = writer_kitty_canvasHeight_666;
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 192
          var call667 = callmethod(var_collections,"list", [0]);
          var call668 = callmethod(call667,"new", [0]);
          obj464.data["entities"] = call668;
          var reader_kitty_entities_669 = function() {
            return this.data["entities"];
          }
          obj464.methods["entities"] = reader_kitty_entities_669;
          obj464.data["entities"] = call668;
          var writer_kitty_entities_669 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj464.methods["entities:="] = writer_kitty_entities_669;
          reader_kitty_entities_669.confidential = true;
          writer_kitty_entities_669.confidential = true;
          lineNumber = 194;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call668)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 194
          var bool670 = new GraceBoolean(false)
          obj464.data["isInit"] = bool670;
          var reader_kitty_isInit_671 = function() {
            return this.data["isInit"];
          }
          obj464.methods["isInit"] = reader_kitty_isInit_671;
          obj464.data["isInit"] = bool670;
          var writer_kitty_isInit_671 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj464.methods["isInit:="] = writer_kitty_isInit_671;
          reader_kitty_isInit_671.confidential = true;
          writer_kitty_isInit_671.confidential = true;
          lineNumber = 195;
          moduleName = "kitty";
          lineNumber = 194
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 195
          var bool672 = new GraceBoolean(false)
          obj464.data["isRunning"] = bool672;
          var reader_kitty_isRunning_673 = function() {
            return this.data["isRunning"];
          }
          obj464.methods["isRunning"] = reader_kitty_isRunning_673;
          obj464.data["isRunning"] = bool672;
          var writer_kitty_isRunning_673 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj464.methods["isRunning:="] = writer_kitty_isRunning_673;
          reader_kitty_isRunning_673.confidential = true;
          writer_kitty_isRunning_673.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 195
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool672)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["mctx"] = undefined;
          var reader_kitty_mctx_674 = function() {
            return this.data["mctx"];
          }
          obj464.methods["mctx"] = reader_kitty_mctx_674;
          obj464.data["mctx"] = undefined;
          var writer_kitty_mctx_674 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj464.methods["mctx:="] = writer_kitty_mctx_674;
          reader_kitty_mctx_674.confidential = true;
          writer_kitty_mctx_674.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          obj464.data["ent"] = undefined;
          var reader_kitty_ent_675 = function() {
            return this.data["ent"];
          }
          obj464.methods["ent"] = reader_kitty_ent_675;
          obj464.data["ent"] = undefined;
          var writer_kitty_ent_675 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj464.methods["ent:="] = writer_kitty_ent_675;
          reader_kitty_ent_675.confidential = true;
          writer_kitty_ent_675.confidential = true;
          obj464.mutable = true;
          sourceObject = obj464;
          lineNumber = 200
          onSelf = true;
          var call676 = callmethod(this, "init", [0]);
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          sourceObject = obj464;
          superDepth = origSuperDepth;
        }
        obj_init_464.apply(obj464, []);
        return obj464
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func463.paramCounts = [
      3,
    ];
    func463.variableArities = [
      false,
    ];
    obj461.methods["new"] = func463;
    func463.definitionLine = 173;
    func463.definitionModule = "kitty";
    var func677 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj678 = Grace_allocObject();
        obj678.definitionModule = "kitty";
        obj678.definitionLine = 173;
        var inho678 = inheritingObject;
        while (inho678.superobj) inho678 = inho678.superobj;
        inho678.superobj = obj678;
        obj678.data = inheritingObject.data;
        obj678.outer = this;
        var reader_kitty_outer_679 = function() {
          return this.outer;
        }
        obj678.methods["outer"] = reader_kitty_outer_679;
        function obj_init_678() {
          var origSuperDepth = superDepth;
          superDepth = obj678;
          obj678.annotations = [];
          var func680 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func680.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 211
              var if681 = var_done;
              lineNumber = 207
              onSelf = true;
              var call682 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call682)) {
                lineNumber = 209
                lineNumber = 208
                var bool683 = new GraceBoolean(false)
                return bool683
              }
              lineNumber = 212
              lineNumber = 192
              lineNumber = 211
              var call684 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call685 = callmethod(this, "document:=", [1], call684);
              lineNumber = 212
              lineNumber = 211
              lineNumber = 212
              var string686 = new GraceString("standard-canvas");
              onSelf = true;
              var call687 = callmethod(this, "document", [0]);
              var call688 = callmethod(call687,"getElementById", [1], string686);
              onSelf = true;
              var call689 = callmethod(this, "canvas:=", [1], call688);
              lineNumber = 214
              lineNumber = 211
              lineNumber = 213
              onSelf = true;
              var call690 = callmethod(this, "canvas", [0]);
              var call691 = callmethod(call690,"width", [0]);
              onSelf = true;
              var call692 = callmethod(this, "canvasWidth:=", [1], call691);
              lineNumber = 217
              lineNumber = 213
              lineNumber = 214
              onSelf = true;
              var call693 = callmethod(this, "canvas", [0]);
              var call694 = callmethod(call693,"height", [0]);
              onSelf = true;
              var call695 = callmethod(this, "canvasHeight:=", [1], call694);
              lineNumber = 229
              var block696 = Grace_allocObject();
              block696.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block696.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block696.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block696.methods["match"] = GraceBlock_match;
              block696.methods["prefix?"] = GraceBlock_lift;
              block696.receiver = this;
              block696.className = 'block<kitty:229>';
              block696.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 220
                lineNumber = 219
                onSelf = true;
                var call697 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call699 = callmethod(this, "canvas", [0]);
                var call700 = callmethod(call699,"offsetWidth", [0]);
                onSelf = true;
                var call702 = callmethod(this, "canvas", [0]);
                var call703 = callmethod(call702,"offsetLeft", [0]);
                var call705 = callmethod(var_ev,"clientX", [0]);
                var diff707 = callmethod(call705, "-", [1], call703);
                var quotient709 = callmethod(diff707, "/", [1], call700);
                var prod711 = callmethod(quotient709, "*", [1], call697);
                var var_x = prod711;
                lineNumber = 220;
                moduleName = "kitty";
                lineNumber = 219
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 224
                lineNumber = 220
                onSelf = true;
                var call712 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call714 = callmethod(this, "canvas", [0]);
                var call715 = callmethod(call714,"offsetHeight", [0]);
                onSelf = true;
                var call717 = callmethod(this, "canvas", [0]);
                var call718 = callmethod(call717,"offsetTop", [0]);
                var call720 = callmethod(var_ev,"clientY", [0]);
                var diff722 = callmethod(call720, "-", [1], call718);
                var quotient724 = callmethod(diff722, "/", [1], call715);
                var prod726 = callmethod(quotient724, "*", [1], call712);
                var var_y = prod726;
                lineNumber = 224;
                moduleName = "kitty";
                lineNumber = 220
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 228
                var if727 = var_done;
                lineNumber = 224
                var opresult730 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call733 = callmethod(this, "canvasWidth", [0]);
                var diff735 = callmethod(call733, "-", [1], new GraceNum(20));
                var opresult738 = callmethod(var_x, ">", [1], diff735);
                var opresult740 = callmethod(opresult738, "&&", [1], opresult730);
                if (Grace_isTrue(opresult740)) {
                  lineNumber = 225
                  var call741 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 226
                  onSelf = true;
                  var call742 = callmethod(this, "stop", [0]);
                  if727 = call742;
                }
                return if727;
              };
              var_mouseDownListener = block696;
              lineNumber = 229
              var string743 = new GraceString("mousedown");
              onSelf = true;
              var call744 = callmethod(this, "canvas", [0]);
              var call745 = callmethod(call744,"addEventListener", [2], string743, var_mouseDownListener);
              lineNumber = 239
              var block746 = Grace_allocObject();
              block746.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block746.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block746.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block746.methods["match"] = GraceBlock_match;
              block746.methods["prefix?"] = GraceBlock_lift;
              block746.receiver = this;
              block746.className = 'block<kitty:239>';
              block746.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 237
                var if747 = var_done;
                lineNumber = 234
                var call749 = callmethod(var_ev,"keyCode", [0]);
                var opresult751 = callmethod(call749, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult751)) {
                  lineNumber = 235
                  onSelf = true;
                  var call752 = callmethod(this, "stop", [0]);
                  if747 = call752;
                }
                lineNumber = 238
                lineNumber = 237
                var call753 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call753;
                return call753;
              };
              var_keyDownListener = block746;
              lineNumber = 239
              var string754 = new GraceString("keydown");
              onSelf = true;
              var call755 = callmethod(this, "document", [0]);
              var call756 = callmethod(call755,"addEventListener", [2], string754, var_keyDownListener);
              lineNumber = 245
              var block757 = Grace_allocObject();
              block757.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block757.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block757.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block757.methods["match"] = GraceBlock_match;
              block757.methods["prefix?"] = GraceBlock_lift;
              block757.receiver = this;
              block757.className = 'block<kitty:245>';
              block757.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 244
                lineNumber = 243
                var call758 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call758;
                return call758;
              };
              var_keyUpListener = block757;
              lineNumber = 245
              var string759 = new GraceString("keyup");
              onSelf = true;
              var call760 = callmethod(this, "document", [0]);
              var call761 = callmethod(call760,"addEventListener", [2], string759, var_keyUpListener);
              lineNumber = 247
              lineNumber = 237
              lineNumber = 247
              var string762 = new GraceString("canvas");
              var call763 = callmethod(var_dom,"document", [0]);
              var call764 = callmethod(call763,"createElement", [1], string762);
              onSelf = true;
              var call765 = callmethod(this, "backingCanvas:=", [1], call764);
              lineNumber = 249
              lineNumber = 247
              lineNumber = 248
              onSelf = true;
              var call766 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call767 = callmethod(this, "backingCanvas", [0]);
              var call768 = callmethod(call767,"height:=", [1], call766);
              lineNumber = 250
              lineNumber = 247
              lineNumber = 249
              onSelf = true;
              var call769 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call770 = callmethod(this, "backingCanvas", [0]);
              var call771 = callmethod(call770,"width:=", [1], call769);
              lineNumber = 250
              lineNumber = 247
              lineNumber = 250
              var string772 = new GraceString("2d");
              onSelf = true;
              var call773 = callmethod(this, "backingCanvas", [0]);
              var call774 = callmethod(call773,"getContext", [1], string772);
              onSelf = true;
              var call775 = callmethod(this, "backingContext:=", [1], call774);
              lineNumber = 251
              lineNumber = 247
              lineNumber = 251
              var string776 = new GraceString("2d");
              onSelf = true;
              var call777 = callmethod(this, "canvas", [0]);
              var call778 = callmethod(call777,"getContext", [1], string776);
              onSelf = true;
              var call779 = callmethod(this, "mctx:=", [1], call778);
              lineNumber = 254
              var string780 = new GraceString("doggo.jpg");
              onSelf = true;
              var call781 = callmethod(this, "setBackground", [1], string780);
              lineNumber = 263
              lineNumber = 247
              lineNumber = 260
              var bool782 = new GraceBoolean(true)
              onSelf = true;
              var call783 = callmethod(this, "isInit:=", [1], bool782);
              lineNumber = 263
              var call784 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call785 = callmethod(call784, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call786 = callmethod(call785, "setWorld", [1], this);
              return call786
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func680.paramCounts = [
            0,
          ];
          func680.variableArities = [
            false,
          ];
          obj678.methods["init"] = func680;
          func680.definitionLine = 203;
          func680.definitionModule = "kitty";
          var func787 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func787.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 263
              lineNumber = 274
              var bool788 = new GraceBoolean(true)
              onSelf = true;
              var call789 = callmethod(this, "isRunning:=", [1], bool788);
              lineNumber = 275
              var block790 = Grace_allocObject();
              block790.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block790.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block790.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block790.methods["match"] = GraceBlock_match;
              block790.methods["prefix?"] = GraceBlock_lift;
              block790.receiver = this;
              block790.className = 'block<kitty:275>';
              block790.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call791 = callmethod(this, "isRunning", [0]);
                return call791;
              };
              lineNumber = 279
              var block792 = Grace_allocObject();
              block792.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block792.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block792.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block792.methods["match"] = GraceBlock_match;
              block792.methods["prefix?"] = GraceBlock_lift;
              block792.receiver = this;
              block792.className = 'block<kitty:279>';
              block792.real = function(
              ) {
                sourceObject = this;
                lineNumber = 276
                onSelf = true;
                var call793 = callmethod(this, "update", [0]);
                return call793;
              };
              lineNumber = 275
              var call794 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block790, new GraceNum(10), block792);
              return call794
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func787.paramCounts = [
            0,
          ];
          func787.variableArities = [
            false,
          ];
          obj678.methods["start"] = func787;
          func787.definitionLine = 272;
          func787.definitionModule = "kitty";
          var func795 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func795.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              lineNumber = 263
              lineNumber = 287
              onSelf = true;
              var call796 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call797 = callmethod(this, "mctx", [0]);
              var call798 = callmethod(call797,"fillStyle:=", [1], call796);
              lineNumber = 288
              onSelf = true;
              var call799 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call800 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call801 = callmethod(this, "mctx", [0]);
              var call802 = callmethod(call801,"fillRect", [4], new GraceNum(0), new GraceNum(0), call799, call800);
              lineNumber = 289
              onSelf = true;
              var call803 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call804 = callmethod(this, "mctx", [0]);
              var call805 = callmethod(call804,"drawImage", [3], call803, new GraceNum(0), new GraceNum(0));
              lineNumber = 290
              onSelf = true;
              var call806 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call808 = callmethod(this, "canvasWidth", [0]);
              var quotient810 = callmethod(call808, "/", [1], new GraceNum(2));
              onSelf = true;
              var call812 = callmethod(this, "canvasHeight", [0]);
              var quotient814 = callmethod(call812, "/", [1], new GraceNum(2));
              onSelf = true;
              var call815 = callmethod(this, "background", [0]);
              var call816 = callmethod(call815,"draw", [4], call806, quotient810, quotient814, new GraceNum(0));
              lineNumber = 293
              onSelf = true;
              var call817 = callmethod(this, "entities", [0]);
              lineNumber = 299
              var block818 = Grace_allocObject();
              block818.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block818.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block818.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block818.methods["match"] = GraceBlock_match;
              block818.methods["prefix?"] = GraceBlock_lift;
              block818.receiver = this;
              block818.className = 'block<kitty:299>';
              block818.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 294
                var call819 = callmethod(var_entity,"tick", [0]);
                lineNumber = 295
                onSelf = true;
                var call820 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call822 = callmethod(this, "canvasWidth", [0]);
                var quotient824 = callmethod(call822, "/", [1], new GraceNum(2));
                onSelf = true;
                var call826 = callmethod(this, "canvasHeight", [0]);
                var quotient828 = callmethod(call826, "/", [1], new GraceNum(2));
                var call829 = callmethod(var_entity,"draw", [3], call820, quotient824, quotient828);
                return call829;
              };
              var call830 = callmethod(Grace_prelude,"for()do", [1, 1], call817, block818);
              return call830
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func795.paramCounts = [
            0,
          ];
          func795.variableArities = [
            false,
          ];
          obj678.methods["update"] = func795;
          func795.definitionLine = 282;
          func795.definitionModule = "kitty";
          var func831 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func831.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              var string832 = new GraceString("WORLD STOPPING...");
              var call833 = Grace_print(string832);
              lineNumber = 304
              lineNumber = 294
              lineNumber = 303
              var bool834 = new GraceBoolean(false)
              onSelf = true;
              var call835 = callmethod(this, "isRunning:=", [1], bool834);
              lineNumber = 304
              var string836 = new GraceString("mousedown");
              onSelf = true;
              var call837 = callmethod(this, "canvas", [0]);
              var call838 = callmethod(call837,"removeEventListener", [2], string836, var_mouseDownListener);
              lineNumber = 305
              var string839 = new GraceString("keydown");
              onSelf = true;
              var call840 = callmethod(this, "document", [0]);
              var call841 = callmethod(call840,"removeEventListener", [2], string839, var_keyDownListener);
              lineNumber = 306
              var string842 = new GraceString("keyup");
              onSelf = true;
              var call843 = callmethod(this, "document", [0]);
              var call844 = callmethod(call843,"removeEventListener", [2], string842, var_keyUpListener);
              return call844
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func831.paramCounts = [
            0,
          ];
          func831.variableArities = [
            false,
          ];
          obj678.methods["stop"] = func831;
          func831.definitionLine = 301;
          func831.definitionModule = "kitty";
          var func845 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func845.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              lineNumber = 294
              lineNumber = 310
              onSelf = true;
              var call846 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call847 = callmethod(this, "canvasHeight", [0]);
              var call848 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call849 = callmethod(call848, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call850 = callmethod(call849, "Image()width()height", [1, 1, 1], var_url, call846, call847);
              onSelf = true;
              var call851 = callmethod(this, "background:=", [1], call850);
              return call851
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func845.paramCounts = [
            1,
          ];
          func845.variableArities = [
            false,
          ];
          obj678.methods["setBackground"] = func845;
          func845.definitionLine = 309;
          func845.definitionModule = "kitty";
          var func852 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func852.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 314
              onSelf = true;
              var call853 = callmethod(this, "entities", [0]);
              var call854 = callmethod(call853,"push", [1], var_e);
              return call854
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func852.paramCounts = [
            1,
          ];
          func852.variableArities = [
            false,
          ];
          obj678.methods["addEntity"] = func852;
          func852.definitionLine = 313;
          func852.definitionModule = "kitty";
          var func855 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func855.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 319
              lineNumber = 318
              onSelf = true;
              var call856 = callmethod(this, "mctx", [0]);
              return call856
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func855.paramCounts = [
            0,
          ];
          func855.variableArities = [
            false,
          ];
          obj678.methods["getContext"] = func855;
          func855.definitionLine = 317;
          func855.definitionModule = "kitty";
          var func857 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func857.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 323
              lineNumber = 322
              onSelf = true;
              var call858 = callmethod(this, "width", [0]);
              onSelf = true;
              var call860 = callmethod(this, "canvasWidth", [0]);
              var quotient862 = callmethod(call860, "/", [1], call858);
              return quotient862
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func857.paramCounts = [
            0,
          ];
          func857.variableArities = [
            false,
          ];
          obj678.methods["moveWidthMultipler"] = func857;
          func857.definitionLine = 321;
          func857.definitionModule = "kitty";
          var func863 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func863.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              lineNumber = 326
              onSelf = true;
              var call864 = callmethod(this, "height", [0]);
              onSelf = true;
              var call866 = callmethod(this, "canvasHeight", [0]);
              var quotient868 = callmethod(call866, "/", [1], call864);
              return quotient868
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func863.paramCounts = [
            0,
          ];
          func863.variableArities = [
            false,
          ];
          obj678.methods["moveHeightMultipler"] = func863;
          func863.definitionLine = 325;
          func863.definitionModule = "kitty";
          sourceObject = obj678;
          lineNumber = 176
          obj678.data["width"] = var_width__39__;
          var reader_kitty_width_869 = function() {
            return this.data["width"];
          }
          obj678.methods["width"] = reader_kitty_width_869;
          obj678.data["width"] = var_width__39__;
          var writer_kitty_width_869 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj678.methods["width:="] = writer_kitty_width_869;
          lineNumber = 177;
          moduleName = "kitty";
          lineNumber = 176
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 177
          obj678.data["height"] = var_height__39__;
          var reader_kitty_height_870 = function() {
            return this.data["height"];
          }
          obj678.methods["height"] = reader_kitty_height_870;
          obj678.data["height"] = var_height__39__;
          var writer_kitty_height_870 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj678.methods["height:="] = writer_kitty_height_870;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 178
          obj678.data["tag"] = var_tag__39__;
          var reader_kitty_tag_871 = function() {
            return this.data["tag"];
          }
          obj678.methods["tag"] = reader_kitty_tag_871;
          obj678.data["tag"] = var_tag__39__;
          var writer_kitty_tag_871 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj678.methods["tag:="] = writer_kitty_tag_871;
          lineNumber = 180;
          moduleName = "kitty";
          lineNumber = 178
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["background"] = undefined;
          var reader_kitty_background_872 = function() {
            return this.data["background"];
          }
          obj678.methods["background"] = reader_kitty_background_872;
          obj678.data["background"] = undefined;
          var writer_kitty_background_872 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj678.methods["background:="] = writer_kitty_background_872;
          reader_kitty_background_872.confidential = true;
          writer_kitty_background_872.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 181
          var string873 = new GraceString("black");
          obj678.data["backgroundColour"] = string873;
          var reader_kitty_backgroundColour_874 = function() {
            return this.data["backgroundColour"];
          }
          obj678.methods["backgroundColour"] = reader_kitty_backgroundColour_874;
          obj678.data["backgroundColour"] = string873;
          var writer_kitty_backgroundColour_874 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj678.methods["backgroundColour:="] = writer_kitty_backgroundColour_874;
          reader_kitty_backgroundColour_874.confidential = true;
          writer_kitty_backgroundColour_874.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string873)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["document"] = undefined;
          var reader_kitty_document_875 = function() {
            return this.data["document"];
          }
          obj678.methods["document"] = reader_kitty_document_875;
          obj678.data["document"] = undefined;
          var writer_kitty_document_875 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj678.methods["document:="] = writer_kitty_document_875;
          reader_kitty_document_875.confidential = true;
          writer_kitty_document_875.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_876 = function() {
            return this.data["backingCanvas"];
          }
          obj678.methods["backingCanvas"] = reader_kitty_backingCanvas_876;
          obj678.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_876 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj678.methods["backingCanvas:="] = writer_kitty_backingCanvas_876;
          reader_kitty_backingCanvas_876.confidential = true;
          writer_kitty_backingCanvas_876.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["backingContext"] = undefined;
          var reader_kitty_backingContext_877 = function() {
            return this.data["backingContext"];
          }
          obj678.methods["backingContext"] = reader_kitty_backingContext_877;
          obj678.data["backingContext"] = undefined;
          var writer_kitty_backingContext_877 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj678.methods["backingContext:="] = writer_kitty_backingContext_877;
          reader_kitty_backingContext_877.confidential = true;
          writer_kitty_backingContext_877.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["canvas"] = undefined;
          var reader_kitty_canvas_878 = function() {
            return this.data["canvas"];
          }
          obj678.methods["canvas"] = reader_kitty_canvas_878;
          obj678.data["canvas"] = undefined;
          var writer_kitty_canvas_878 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj678.methods["canvas:="] = writer_kitty_canvas_878;
          reader_kitty_canvas_878.confidential = true;
          writer_kitty_canvas_878.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_879 = function() {
            return this.data["canvasWidth"];
          }
          obj678.methods["canvasWidth"] = reader_kitty_canvasWidth_879;
          obj678.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_879 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj678.methods["canvasWidth:="] = writer_kitty_canvasWidth_879;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_880 = function() {
            return this.data["canvasHeight"];
          }
          obj678.methods["canvasHeight"] = reader_kitty_canvasHeight_880;
          obj678.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_880 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj678.methods["canvasHeight:="] = writer_kitty_canvasHeight_880;
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 192
          var call881 = callmethod(var_collections,"list", [0]);
          var call882 = callmethod(call881,"new", [0]);
          obj678.data["entities"] = call882;
          var reader_kitty_entities_883 = function() {
            return this.data["entities"];
          }
          obj678.methods["entities"] = reader_kitty_entities_883;
          obj678.data["entities"] = call882;
          var writer_kitty_entities_883 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj678.methods["entities:="] = writer_kitty_entities_883;
          reader_kitty_entities_883.confidential = true;
          writer_kitty_entities_883.confidential = true;
          lineNumber = 194;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call882)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 194
          var bool884 = new GraceBoolean(false)
          obj678.data["isInit"] = bool884;
          var reader_kitty_isInit_885 = function() {
            return this.data["isInit"];
          }
          obj678.methods["isInit"] = reader_kitty_isInit_885;
          obj678.data["isInit"] = bool884;
          var writer_kitty_isInit_885 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj678.methods["isInit:="] = writer_kitty_isInit_885;
          reader_kitty_isInit_885.confidential = true;
          writer_kitty_isInit_885.confidential = true;
          lineNumber = 195;
          moduleName = "kitty";
          lineNumber = 194
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool884)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 195
          var bool886 = new GraceBoolean(false)
          obj678.data["isRunning"] = bool886;
          var reader_kitty_isRunning_887 = function() {
            return this.data["isRunning"];
          }
          obj678.methods["isRunning"] = reader_kitty_isRunning_887;
          obj678.data["isRunning"] = bool886;
          var writer_kitty_isRunning_887 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj678.methods["isRunning:="] = writer_kitty_isRunning_887;
          reader_kitty_isRunning_887.confidential = true;
          writer_kitty_isRunning_887.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 195
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool886)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["mctx"] = undefined;
          var reader_kitty_mctx_888 = function() {
            return this.data["mctx"];
          }
          obj678.methods["mctx"] = reader_kitty_mctx_888;
          obj678.data["mctx"] = undefined;
          var writer_kitty_mctx_888 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj678.methods["mctx:="] = writer_kitty_mctx_888;
          reader_kitty_mctx_888.confidential = true;
          writer_kitty_mctx_888.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          obj678.data["ent"] = undefined;
          var reader_kitty_ent_889 = function() {
            return this.data["ent"];
          }
          obj678.methods["ent"] = reader_kitty_ent_889;
          obj678.data["ent"] = undefined;
          var writer_kitty_ent_889 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj678.methods["ent:="] = writer_kitty_ent_889;
          reader_kitty_ent_889.confidential = true;
          writer_kitty_ent_889.confidential = true;
          obj678.mutable = true;
          sourceObject = obj678;
          lineNumber = 200
          onSelf = true;
          var call890 = callmethod(this, "init", [0]);
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          sourceObject = obj678;
          superDepth = origSuperDepth;
        }
        obj_init_678.apply(inheritingObject, []);
        return obj678
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj461.methods["new()object"] = func677;
    var func891 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 173
        var string892 = new GraceString("class KittyWorld");
        return string892
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func891.paramCounts = [
    ];
    func891.variableArities = [
    ];
    obj461.methods["asDebugString"] = func891;
    func891.definitionLine = 173;
    func891.definitionModule = "kitty";
    sourceObject = obj461;
    sourceObject = obj461;
    superDepth = origSuperDepth;
  }
  obj_init_461.apply(obj461, []);
  var var_KittyWorld = obj461;
  lineNumber = 332
  lineNumber = 341
  lineNumber = 356
  lineNumber = 360
  lineNumber = 365
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n isKeyDown\n KittyWorld\n World()width()height\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nfresh:Entity()x()y:\n image\n strafe\n tick\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setX\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n setY\n move\n image:=\nmethods-of:KittyWorld.new:\n document\n width\n backingContext\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n moveWidthMultipler\n tag\n background\n backingCanvas:=\n start\n height:=\n document:=\n isRunning\n ent:=\n tag:=\n update\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n init\n canvasHeight\n getContext\n canvas\n canvasWidth\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n entities:=\n mctx\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconstructors-of:KittyImage:\n new\nconfidential:\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconstructors-of:KittyWorld:\n new\nfresh:World()width()height:\n document\n width\n init\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvasHeight\n canvas\n background\n backingCanvas:=\n start\n height:=\n document:=\n isRunning\n ent:=\n tag:=\n update\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n moveWidthMultipler\n getContext\n tag\n canvasWidth\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n mctx\n entities:=\nfresh:Image()width()height:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image\n strafe\n posY\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setX\n setLocation\n rotation:=\n turn\n posX\n tick\n draw\n setImage\n rotation\n setY\n move\n image:=\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "// import \"math\" as math",
    "import \"StandardPrelude\" as sp",
    "inherits sp.methods",
    "",
    "// Main class for game library",
    "var m_world",
    "var worldSet := false",
    "",
    "// Listeners",
    "var keyDownListener",
    "var keyUpListener",
    "var mouseDownListener",
    "var currentKeyDown := -1",
    "",
    "// Grace math returns NaNs",
    "def math = dom.window.Math",
    "",
    "// Last object created",
    "var kitten",
    "",
    "// XXX: Control functions are at the bottom",
    "",
    "// Represents an image in the game world",
    "class KittyImage.new(url', width', height') {",
    "    ",
    "    // print \"CREATING NEW IMAGE: {url'}...\"",
    "",
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var elements := collections.list.new",
    "    elements.push(imgTag)",
    "",
    "    var height := height'",
    "    var width := width'",
    "",
    "    method draw(ctx, dx, dy, rot) {",
    "        // print \"DRAWING IMAGE: {imgTag.src} ({width}, {height})...\"",
    "        ctx.save",
    "        ctx.translate(dx, dy)",
    "        // ctx.rotate(rot *  180 / 3.14)",
    "        ctx.rotate(rot * 3.14159 / 180)",
    "        // print \"{dx}, {dy}\"",
    "        for (elements) do {element->",
    "            ctx.drawImage(element, -width / 2, -height / 2, width, height)",
    "        }",
    "        ctx.restore",
    "        // print \"IMAGE: {imgTag.src} DRAWN\"",
    "    }",
    "",
    "    method getTag {",
    "        return imgTag",
    "    }",
    "",
    "    method drawImage(imgTag') {",
    "        elements.push(imgTag')",
    "    }",
    "",
    "    // print \"CREATED NEW IMAGE: {url'}\"",
    "}",
    "",
    "method Image(url')width(width')height(height') {",
    "    object {",
    "        inherits KittyImage.new(url', width', height')",
    "    }",
    "}",
    "",
    "// Represents an object in the game world",
    "class KittyEntity.new(tag', x', y') {",
    "    ",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
    "    var tag := tag'",
    "    var posX := x'",
    "    var posY := y'",
    "    var rotation := 0",
    "    var action := {}",
    "",
    "    var image",
    "",
    "    awake",
    "",
    "    // Called on creation",
    "    method awake {",
    "        createImage(\"realyee.png\")",
    "        kitten := self",
    "        m_world.addEntity(self)",
    "    }",
    "",
    "    method tick() {",
    "        action.apply",
    "    }",
    "",
    "    method move(distance) { ",
    "        posX := posX + distance * m_world.moveWidthMultipler * math.cos(rotation * 3.14159 / 180)",
    "        posY := posY + distance * m_world.moveHeightMultipler * math.sin(rotation * 3.14159 / 180)",
    "    }",
    "",
    "    method strafe(distance) {",
    "        posX := posX + distance * m_world.moveWidthMultipler * math.cos((90 + rotation) * 3.14159 / 180)",
    "        posY := posY + distance * m_world.moveHeightMultipler * math.sin((90 + rotation) * 3.14159 / 180)",
    "    }",
    "",
    "    method turn(angle) {",
    "        rotation := rotation + angle",
    "    }",
    "",
    "    method draw(ctx, dx, dy) {",
    "        ctx.save",
    "        ctx.translate(posX, posY)",
    "        image.draw(ctx, dx, dy, rotation)",
    "        ctx.restore",
    "    }",
    "",
    "    method createImage(url') {",
    "        image := Image(url')width(64)height(64)",
    "    }",
    "",
    "    method setImage(image': KittyImage) {",
    "        image := image'",
    "    }",
    "",
    "    method setAction(action') {",
    "        action := action'",
    "    }",
    "",
    "    method setLocation(x, y) {",
    "        self.posX := x",
    "        self.posY := y",
    "    }",
    "",
    "    method getX {",
    "        return posX",
    "    }",
    "",
    "    method getY {",
    "        return posY",
    "    }",
    "",
    "    method setX(posX') {",
    "        posX := posX'",
    "    }",
    "",
    "    method setY(posY') {",
    "        posY := posY'",
    "    }",
    "",
    "    method getRotation {",
    "        return rotation",
    "    }",
    "} ",
    "",
    "method Entity(tag')x(x')y(y') {",
    "    object {",
    "        inherits KittyEntity.new(tag', x', y')",
    "        // actions'.apply",
    "    }",
    "} ",
    "",
    "// ======== KITTY METHODS ========== //",
    "method update(action') {",
    "    kitten.setAction(action')",
    "}",
    "",
    "method isKeyDown(key) {",
    "    return key == currentKeyDown",
    "}",
    "// ========================== //",
    "",
    "// Represents the game world itself",
    "class KittyWorld.new(tag', width', height') {",
    "",
    "    // print \"CREATING NEW WORLD...\"",
    "    var width is public, readable := width'",
    "    var height is public, readable := height'",
    "    var tag is public, readable := tag'",
    "",
    "    var background",
    "    var backgroundColour := \"black\"",
    "",
    "    var document",
    "",
    "    var backingCanvas",
    "    var backingContext",
    "",
    "    var canvas",
    "    var canvasWidth is public, readable",
    "    var canvasHeight is public, readable",
    "",
    "    var entities := collections.list.new",
    "",
    "    var isInit := false",
    "    var isRunning := false",
    "",
    "    var mctx",
    "    var ent",
    "",
    "    init",
    "",
    "    // Called on initialization",
    "    method init {",
    "",
    "        // print \"INITIALIZING WORLD...\"",
    "",
    "        if (isInit) then {",
    "            return false",
    "        }",
    "",
    "        document := dom.document",
    "        canvas := document.getElementById(\"standard-canvas\")",
    "        canvasWidth := canvas.width",
    "        canvasHeight := canvas.height",
    "",
    "        // Mouse Listener",
    "        mouseDownListener := { ev ->",
    "            ",
    "            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "            ",
    "            // print \"MOUSEDOWN\"",
    "            ",
    "            if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "                ev.preventDefault",
    "                stop",
    "            }",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "",
    "        // Key Listeners",
    "        keyDownListener := { ev->",
    "            // print \"KEYDOWN: {ev.keyCode}\"",
    "            if (ev.keyCode == 75) then {",
    "                stop",
    "            }",
    "            currentKeyDown := ev.keyCode",
    "        }",
    "        document.addEventListener(\"keydown\", keyDownListener)",
    "",
    "        keyUpListener := { ev->",
    "            // print \"KEYUP\"",
    "            currentKeyDown := -1",
    "        }",
    "        document.addEventListener(\"keyup\", keyUpListener)",
    "",
    "        backingCanvas := dom.document.createElement(\"canvas\")",
    "        backingCanvas.height := canvasHeight",
    "        backingCanvas.width := canvasWidth",
    "        backingContext := backingCanvas.getContext(\"2d\")",
    "        mctx := canvas.getContext(\"2d\")",
    "",
    "        // Default background",
    "        setBackground(\"doggo.jpg\")",
    "",
    "        // Test entity",
    "        // ent := Entity(\"explosion.png\")x(10)y(10)",
    "        // Image(url)width(canvasWidth)height(canvasHeight)",
    "",
    "        isInit := true",
    "",
    "        // Set the world",
    "        setWorld(self)",
    "        // print \"INITIALIZATION FINISHED\"",
    "",
    "        // Start the game",
    "        // print \"STARTING WORLD...\"",
    "        // start",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        // print \"WORLD STARTED\"",
    "        isRunning := true",
    "        dom.while { isRunning } waiting 10 do {",
    "            update",
    "        }",
    "        // print \"WORLD STOPPED\"        ",
    "    }",
    "",
    "    // Updates the game world",
    "    method update {",
    "",
    "        // print \"UPDATING WORLD...\"",
    "",
    "        // Draw the background",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)",
    "",
    "        // Draw the entities",
    "        for (entities) do { entity->",
    "            entity.tick",
    "            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)",
    "        }",
    "",
    "        // print \"WORLD UPDATED\"",
    "    }",
    "",
    "    method stop {",
    "        print \"WORLD STOPPING...\"",
    "        isRunning := false",
    "        canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "        document.removeEventListener(\"keydown\", keyDownListener)",
    "        document.removeEventListener(\"keyup\", keyUpListener)",
    "    }",
    "",
    "    method setBackground(url) {",
    "        background := Image(url)width(canvasWidth)height(canvasHeight)",
    "    }",
    "",
    "    method addEntity(e) {",
    "        return entities.push(e)",
    "    }",
    "",
    "    method getContext {",
    "        return mctx",
    "    }",
    "",
    "    method moveWidthMultipler {",
    "        return canvasWidth / width",
    "    }",
    "",
    "    method moveHeightMultipler {",
    "        return canvasHeight / height",
    "    }",
    "",
    "    // print \"WORLD CREATED\"",
    "}",
    "",
    "method World(tag')width(width')height(height') {",
    "    object {",
    "        inherits KittyWorld.new(tag', width', height')",
    "    }",
    "}",
    "",
    "// CONTROL SECTION //",
    "",
    "// Called on game start",
    "method start {",
    "",
    "    print \"CHECKING...\"",
    "",
    "    if (!worldSet) then {",
    "        print \"NO WORLD!!\"",
    "        return ",
    "    }",
    "",
    "    print \"STARTING...\"",
    "",
    "    // Dewit",
    "    m_world.start",
    "}",
    "",
    "method stop {",
    "    m_world.stop",
    "}",
    "",
    "method setWorld(world': KittyWorld) {",
    "    m_world := world'",
    "    worldSet := true",
    "}",
    "",
    "method atModuleEnd(module) {",
    "    start",
    "}",
    "",
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
    "// print \"IS THIS WORKING???\"",
  ];
}
