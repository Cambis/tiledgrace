function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 63
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
      lineNumber = 64
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 64;
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
        lineNumber = 65
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
  func0.definitionLine = 63;
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
      obj5.definitionLine = 64;
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
  lineNumber = 146
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
      lineNumber = 147
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 147;
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
        lineNumber = 148
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
  func8.definitionLine = 146;
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
      obj13.definitionLine = 147;
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
  lineNumber = 154
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
      lineNumber = 155
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
  func16.definitionLine = 154;
  func16.definitionModule = "kitty";
  lineNumber = 158
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
      lineNumber = 160
      lineNumber = 159
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
  func18.definitionLine = 158;
  func18.definitionModule = "kitty";
  lineNumber = 311
  var func22 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 312
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 312;
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
        lineNumber = 313
        var call25 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
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
    0,
  ];
  func22.variableArities = [
    false,
  ];
  this.methods["World"] = func22;
  func22.definitionLine = 311;
  func22.definitionModule = "kitty";
  var func26 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 312;
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
        var call29 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
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
  this.methods["World()object"] = func26;
  lineNumber = 320
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 322
      var string31 = new GraceString("CHECKING...");
      var call32 = Grace_print(string31);
      lineNumber = 329
      var if33 = var_done;
      lineNumber = 324
      var call34 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call34)) {
        lineNumber = 325
        var string35 = new GraceString("NO WORLD!!");
        var call36 = Grace_print(string35);
        lineNumber = 327
        return var_done
      }
      lineNumber = 329
      var string37 = new GraceString("STARTING...");
      var call38 = Grace_print(string37);
      lineNumber = 332
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
  func30.definitionLine = 320;
  func30.definitionModule = "kitty";
  lineNumber = 335
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 336
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
  func40.definitionLine = 335;
  func40.definitionModule = "kitty";
  lineNumber = 339
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
      lineNumber = 341
      lineNumber = 340
      var_m__95__world = var_world__39__;
      lineNumber = 342
      lineNumber = 341
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
  func42.definitionLine = 339;
  func42.definitionModule = "kitty";
  lineNumber = 344
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
      lineNumber = 345
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
  func44.definitionLine = 344;
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
  lineNumber = 336
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
  func47.definitionLine = 336;
  func47.definitionModule = "kitty";
  lineNumber = 336
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
  func48.definitionLine = 336;
  func48.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool49 = new GraceBoolean(false)
  var var_worldSet = bool49;
  lineNumber = 336
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
  func50.definitionLine = 336;
  func50.definitionModule = "kitty";
  lineNumber = 336
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
  func51.definitionLine = 336;
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
  lineNumber = 336
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
  func52.definitionLine = 336;
  func52.definitionModule = "kitty";
  lineNumber = 336
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
  func53.definitionLine = 336;
  func53.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 336
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
  func54.definitionLine = 336;
  func54.definitionModule = "kitty";
  lineNumber = 336
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
  func55.definitionLine = 336;
  func55.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 336
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
  func56.definitionLine = 336;
  func56.definitionModule = "kitty";
  lineNumber = 336
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
  func57.definitionLine = 336;
  func57.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call58 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call58;
  lineNumber = 336
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
  func59.definitionLine = 336;
  func59.definitionModule = "kitty";
  lineNumber = 336
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
  func60.definitionLine = 336;
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
              lineNumber = 45
              onSelf = true;
              var call82 = callmethod(this, "elements", [0]);
              lineNumber = 48
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
              block83.className = 'block<kitty:48>';
              block83.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 46
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
              lineNumber = 48
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
              lineNumber = 54
              lineNumber = 53
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
          func99.definitionLine = 52;
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
              lineNumber = 57
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
          func101.definitionLine = 56;
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
              lineNumber = 45
              onSelf = true;
              var call131 = callmethod(this, "elements", [0]);
              lineNumber = 48
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
              block132.className = 'block<kitty:48>';
              block132.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 46
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
              lineNumber = 48
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
              lineNumber = 54
              lineNumber = 53
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
          func148.definitionLine = 52;
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
              lineNumber = 57
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
          func150.definitionLine = 56;
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
  lineNumber = 63
  lineNumber = 70
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
  func169.definitionLine = 70;
  func169.definitionModule = "kitty";
  var obj170 = Grace_allocObject();
  obj170.definitionModule = "kitty";
  obj170.definitionLine = 70;
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
        obj173.definitionLine = 70;
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
              lineNumber = 86
              var string176 = new GraceString("realyee.png");
              onSelf = true;
              var call177 = callmethod(this, "createImage", [1], string176);
              lineNumber = 88
              lineNumber = 87
              var_kitten = this;
              lineNumber = 88
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
          func175.definitionLine = 85;
          func175.definitionModule = "kitty";
          var func179 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
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
          func179.definitionLine = 91;
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
              lineNumber = 96
              lineNumber = 92
              lineNumber = 96
              onSelf = true;
              var call185 = callmethod(this, "rotation", [0]);
              var prod187 = callmethod(call185, "*", [1], new GraceNum(3.14159));
              var quotient189 = callmethod(prod187, "/", [1], new GraceNum(180));
              var call190 = callmethod(var_math,"cos", [1], quotient189);
              var prod193 = callmethod(var_distance, "*", [1], call190);
              onSelf = true;
              var call195 = callmethod(this, "posX", [0]);
              var opresult197 = callmethod(call195, "+", [1], prod193);
              onSelf = true;
              var call198 = callmethod(this, "posX:=", [1], opresult197);
              lineNumber = 97
              lineNumber = 92
              lineNumber = 97
              onSelf = true;
              var call201 = callmethod(this, "rotation", [0]);
              var prod203 = callmethod(call201, "*", [1], new GraceNum(3.14159));
              var quotient205 = callmethod(prod203, "/", [1], new GraceNum(180));
              var call206 = callmethod(var_math,"sin", [1], quotient205);
              var prod209 = callmethod(var_distance, "*", [1], call206);
              onSelf = true;
              var call211 = callmethod(this, "posY", [0]);
              var opresult213 = callmethod(call211, "+", [1], prod209);
              onSelf = true;
              var call214 = callmethod(this, "posY:=", [1], opresult213);
              return call214
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
          func182.definitionLine = 95;
          func182.definitionModule = "kitty";
          var func215 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func215.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              lineNumber = 92
              lineNumber = 101
              onSelf = true;
              var call218 = callmethod(this, "rotation", [0]);
              var opresult221 = callmethod(new GraceNum(90), "+", [1], call218);
              var prod223 = callmethod(opresult221, "*", [1], new GraceNum(3.14159));
              var quotient225 = callmethod(prod223, "/", [1], new GraceNum(180));
              var call226 = callmethod(var_math,"cos", [1], quotient225);
              var prod229 = callmethod(var_distance, "*", [1], call226);
              onSelf = true;
              var call231 = callmethod(this, "posX", [0]);
              var opresult233 = callmethod(call231, "+", [1], prod229);
              onSelf = true;
              var call234 = callmethod(this, "posX:=", [1], opresult233);
              lineNumber = 102
              lineNumber = 92
              lineNumber = 102
              onSelf = true;
              var call237 = callmethod(this, "rotation", [0]);
              var opresult240 = callmethod(new GraceNum(90), "+", [1], call237);
              var prod242 = callmethod(opresult240, "*", [1], new GraceNum(3.14159));
              var quotient244 = callmethod(prod242, "/", [1], new GraceNum(180));
              var call245 = callmethod(var_math,"sin", [1], quotient244);
              var prod248 = callmethod(var_distance, "*", [1], call245);
              onSelf = true;
              var call250 = callmethod(this, "posY", [0]);
              var opresult252 = callmethod(call250, "+", [1], prod248);
              onSelf = true;
              var call253 = callmethod(this, "posY:=", [1], opresult252);
              return call253
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func215.paramCounts = [
            1,
          ];
          func215.variableArities = [
            false,
          ];
          obj173.methods["strafe"] = func215;
          func215.definitionLine = 100;
          func215.definitionModule = "kitty";
          var func254 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func254.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 92
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call256 = callmethod(this, "rotation", [0]);
              var opresult258 = callmethod(call256, "+", [1], var_angle);
              onSelf = true;
              var call259 = callmethod(this, "rotation:=", [1], opresult258);
              return call259
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func254.paramCounts = [
            1,
          ];
          func254.variableArities = [
            false,
          ];
          obj173.methods["turn"] = func254;
          func254.definitionLine = 105;
          func254.definitionModule = "kitty";
          var func260 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func260.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              var call261 = callmethod(var_ctx,"save", [0]);
              lineNumber = 111
              onSelf = true;
              var call262 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call263 = callmethod(this, "posY", [0]);
              var call264 = callmethod(var_ctx,"translate", [2], call262, call263);
              lineNumber = 112
              onSelf = true;
              var call265 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call266 = callmethod(this, "image", [0]);
              var call267 = callmethod(call266,"draw", [4], var_ctx, var_dx, var_dy, call265);
              lineNumber = 113
              var call268 = callmethod(var_ctx,"restore", [0]);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func260.paramCounts = [
            3,
          ];
          func260.variableArities = [
            false,
          ];
          obj173.methods["draw"] = func260;
          func260.definitionLine = 109;
          func260.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 113
              lineNumber = 117
              var call270 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call271 = callmethod(call270, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call272 = callmethod(call271, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call273 = callmethod(this, "image:=", [1], call272);
              return call273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func269.paramCounts = [
            1,
          ];
          func269.variableArities = [
            false,
          ];
          obj173.methods["createImage"] = func269;
          func269.definitionLine = 116;
          func269.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 117
              lineNumber = 121
              onSelf = true;
              var call275 = callmethod(this, "image:=", [1], var_image__39__);
              return call275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func274.paramTypes = [];
          func274.paramTypes.push([]);
          func274.paramCounts = [
            1,
          ];
          func274.variableArities = [
            false,
          ];
          obj173.methods["setImage"] = func274;
          func274.definitionLine = 120;
          func274.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 117
              lineNumber = 125
              onSelf = true;
              var call277 = callmethod(this, "action:=", [1], var_action__39__);
              return call277
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            1,
          ];
          func276.variableArities = [
            false,
          ];
          obj173.methods["setAction"] = func276;
          func276.definitionLine = 124;
          func276.definitionModule = "kitty";
          var func278 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func278.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 117
              lineNumber = 129
              onSelf = true;
              var call279 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 131
              lineNumber = 117
              lineNumber = 130
              onSelf = true;
              var call280 = callmethod(this, "posY:=", [1], var_y);
              return call280
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func278.paramCounts = [
            2,
          ];
          func278.variableArities = [
            false,
          ];
          obj173.methods["setLocation"] = func278;
          func278.definitionLine = 128;
          func278.definitionModule = "kitty";
          var func281 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func281.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 134
              onSelf = true;
              var call282 = callmethod(this, "posX", [0]);
              return call282
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func281.paramCounts = [
            0,
          ];
          func281.variableArities = [
            false,
          ];
          obj173.methods["getX"] = func281;
          func281.definitionLine = 133;
          func281.definitionModule = "kitty";
          var func283 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              lineNumber = 138
              onSelf = true;
              var call284 = callmethod(this, "posY", [0]);
              return call284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func283.paramCounts = [
            0,
          ];
          func283.variableArities = [
            false,
          ];
          obj173.methods["getY"] = func283;
          func283.definitionLine = 137;
          func283.definitionModule = "kitty";
          var func285 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 142
              onSelf = true;
              var call286 = callmethod(this, "rotation", [0]);
              return call286
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func285.paramCounts = [
            0,
          ];
          func285.variableArities = [
            false,
          ];
          obj173.methods["getRotation"] = func285;
          func285.definitionLine = 141;
          func285.definitionModule = "kitty";
          sourceObject = obj173;
          lineNumber = 74
          obj173.data["tag"] = var_tag__39__;
          var reader_kitty_tag_287 = function() {
            return this.data["tag"];
          }
          obj173.methods["tag"] = reader_kitty_tag_287;
          obj173.data["tag"] = var_tag__39__;
          var writer_kitty_tag_287 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj173.methods["tag:="] = writer_kitty_tag_287;
          reader_kitty_tag_287.confidential = true;
          writer_kitty_tag_287.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 75
          obj173.data["posX"] = var_x__39__;
          var reader_kitty_posX_288 = function() {
            return this.data["posX"];
          }
          obj173.methods["posX"] = reader_kitty_posX_288;
          obj173.data["posX"] = var_x__39__;
          var writer_kitty_posX_288 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj173.methods["posX:="] = writer_kitty_posX_288;
          reader_kitty_posX_288.confidential = true;
          writer_kitty_posX_288.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 76
          obj173.data["posY"] = var_y__39__;
          var reader_kitty_posY_289 = function() {
            return this.data["posY"];
          }
          obj173.methods["posY"] = reader_kitty_posY_289;
          obj173.data["posY"] = var_y__39__;
          var writer_kitty_posY_289 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj173.methods["posY:="] = writer_kitty_posY_289;
          reader_kitty_posY_289.confidential = true;
          writer_kitty_posY_289.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 77
          obj173.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_290 = function() {
            return this.data["rotation"];
          }
          obj173.methods["rotation"] = reader_kitty_rotation_290;
          obj173.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_290 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj173.methods["rotation:="] = writer_kitty_rotation_290;
          reader_kitty_rotation_290.confidential = true;
          writer_kitty_rotation_290.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 80
          var block291 = Grace_allocObject();
          block291.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block291.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block291.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block291.methods["match"] = GraceBlock_match;
          block291.methods["prefix?"] = GraceBlock_lift;
          block291.receiver = this;
          block291.className = 'block<kitty:80>';
          block291.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj173.data["action"] = block291;
          var reader_kitty_action_292 = function() {
            return this.data["action"];
          }
          obj173.methods["action"] = reader_kitty_action_292;
          obj173.data["action"] = block291;
          var writer_kitty_action_292 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj173.methods["action:="] = writer_kitty_action_292;
          reader_kitty_action_292.confidential = true;
          writer_kitty_action_292.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block291)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          obj173.data["image"] = undefined;
          var reader_kitty_image_293 = function() {
            return this.data["image"];
          }
          obj173.methods["image"] = reader_kitty_image_293;
          obj173.data["image"] = undefined;
          var writer_kitty_image_293 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj173.methods["image:="] = writer_kitty_image_293;
          reader_kitty_image_293.confidential = true;
          writer_kitty_image_293.confidential = true;
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 82
          onSelf = true;
          var call294 = callmethod(this, "awake", [0]);
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
    func172.definitionLine = 70;
    func172.definitionModule = "kitty";
    var func295 = function(argcv) {
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
        var obj296 = Grace_allocObject();
        obj296.definitionModule = "kitty";
        obj296.definitionLine = 70;
        var inho296 = inheritingObject;
        while (inho296.superobj) inho296 = inho296.superobj;
        inho296.superobj = obj296;
        obj296.data = inheritingObject.data;
        obj296.outer = this;
        var reader_kitty_outer_297 = function() {
          return this.outer;
        }
        obj296.methods["outer"] = reader_kitty_outer_297;
        function obj_init_296() {
          var origSuperDepth = superDepth;
          superDepth = obj296;
          obj296.annotations = [];
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              var string299 = new GraceString("realyee.png");
              onSelf = true;
              var call300 = callmethod(this, "createImage", [1], string299);
              lineNumber = 88
              lineNumber = 87
              var_kitten = this;
              lineNumber = 88
              var call301 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call301
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func298.paramCounts = [
            0,
          ];
          func298.variableArities = [
            false,
          ];
          obj296.methods["awake"] = func298;
          func298.definitionLine = 85;
          func298.definitionModule = "kitty";
          var func302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              onSelf = true;
              var call303 = callmethod(this, "action", [0]);
              var call304 = callmethod(call303,"apply", [0]);
              return call304
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func302.paramCounts = [
            0,
          ];
          func302.variableArities = [
            false,
          ];
          obj296.methods["tick"] = func302;
          func302.definitionLine = 91;
          func302.definitionModule = "kitty";
          var func305 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func305.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 92
              lineNumber = 96
              onSelf = true;
              var call308 = callmethod(this, "rotation", [0]);
              var prod310 = callmethod(call308, "*", [1], new GraceNum(3.14159));
              var quotient312 = callmethod(prod310, "/", [1], new GraceNum(180));
              var call313 = callmethod(var_math,"cos", [1], quotient312);
              var prod316 = callmethod(var_distance, "*", [1], call313);
              onSelf = true;
              var call318 = callmethod(this, "posX", [0]);
              var opresult320 = callmethod(call318, "+", [1], prod316);
              onSelf = true;
              var call321 = callmethod(this, "posX:=", [1], opresult320);
              lineNumber = 97
              lineNumber = 92
              lineNumber = 97
              onSelf = true;
              var call324 = callmethod(this, "rotation", [0]);
              var prod326 = callmethod(call324, "*", [1], new GraceNum(3.14159));
              var quotient328 = callmethod(prod326, "/", [1], new GraceNum(180));
              var call329 = callmethod(var_math,"sin", [1], quotient328);
              var prod332 = callmethod(var_distance, "*", [1], call329);
              onSelf = true;
              var call334 = callmethod(this, "posY", [0]);
              var opresult336 = callmethod(call334, "+", [1], prod332);
              onSelf = true;
              var call337 = callmethod(this, "posY:=", [1], opresult336);
              return call337
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func305.paramCounts = [
            1,
          ];
          func305.variableArities = [
            false,
          ];
          obj296.methods["move"] = func305;
          func305.definitionLine = 95;
          func305.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              lineNumber = 92
              lineNumber = 101
              onSelf = true;
              var call341 = callmethod(this, "rotation", [0]);
              var opresult344 = callmethod(new GraceNum(90), "+", [1], call341);
              var prod346 = callmethod(opresult344, "*", [1], new GraceNum(3.14159));
              var quotient348 = callmethod(prod346, "/", [1], new GraceNum(180));
              var call349 = callmethod(var_math,"cos", [1], quotient348);
              var prod352 = callmethod(var_distance, "*", [1], call349);
              onSelf = true;
              var call354 = callmethod(this, "posX", [0]);
              var opresult356 = callmethod(call354, "+", [1], prod352);
              onSelf = true;
              var call357 = callmethod(this, "posX:=", [1], opresult356);
              lineNumber = 102
              lineNumber = 92
              lineNumber = 102
              onSelf = true;
              var call360 = callmethod(this, "rotation", [0]);
              var opresult363 = callmethod(new GraceNum(90), "+", [1], call360);
              var prod365 = callmethod(opresult363, "*", [1], new GraceNum(3.14159));
              var quotient367 = callmethod(prod365, "/", [1], new GraceNum(180));
              var call368 = callmethod(var_math,"sin", [1], quotient367);
              var prod371 = callmethod(var_distance, "*", [1], call368);
              onSelf = true;
              var call373 = callmethod(this, "posY", [0]);
              var opresult375 = callmethod(call373, "+", [1], prod371);
              onSelf = true;
              var call376 = callmethod(this, "posY:=", [1], opresult375);
              return call376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func338.paramCounts = [
            1,
          ];
          func338.variableArities = [
            false,
          ];
          obj296.methods["strafe"] = func338;
          func338.definitionLine = 100;
          func338.definitionModule = "kitty";
          var func377 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 92
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call379 = callmethod(this, "rotation", [0]);
              var opresult381 = callmethod(call379, "+", [1], var_angle);
              onSelf = true;
              var call382 = callmethod(this, "rotation:=", [1], opresult381);
              return call382
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func377.paramCounts = [
            1,
          ];
          func377.variableArities = [
            false,
          ];
          obj296.methods["turn"] = func377;
          func377.definitionLine = 105;
          func377.definitionModule = "kitty";
          var func383 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func383.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              var call384 = callmethod(var_ctx,"save", [0]);
              lineNumber = 111
              onSelf = true;
              var call385 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call386 = callmethod(this, "posY", [0]);
              var call387 = callmethod(var_ctx,"translate", [2], call385, call386);
              lineNumber = 112
              onSelf = true;
              var call388 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call389 = callmethod(this, "image", [0]);
              var call390 = callmethod(call389,"draw", [4], var_ctx, var_dx, var_dy, call388);
              lineNumber = 113
              var call391 = callmethod(var_ctx,"restore", [0]);
              return call391
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func383.paramCounts = [
            3,
          ];
          func383.variableArities = [
            false,
          ];
          obj296.methods["draw"] = func383;
          func383.definitionLine = 109;
          func383.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 113
              lineNumber = 117
              var call393 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call394 = callmethod(call393, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call395 = callmethod(call394, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call396 = callmethod(this, "image:=", [1], call395);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func392.paramCounts = [
            1,
          ];
          func392.variableArities = [
            false,
          ];
          obj296.methods["createImage"] = func392;
          func392.definitionLine = 116;
          func392.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 117
              lineNumber = 121
              onSelf = true;
              var call398 = callmethod(this, "image:=", [1], var_image__39__);
              return call398
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func397.paramTypes = [];
          func397.paramTypes.push([]);
          func397.paramCounts = [
            1,
          ];
          func397.variableArities = [
            false,
          ];
          obj296.methods["setImage"] = func397;
          func397.definitionLine = 120;
          func397.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 117
              lineNumber = 125
              onSelf = true;
              var call400 = callmethod(this, "action:=", [1], var_action__39__);
              return call400
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func399.paramCounts = [
            1,
          ];
          func399.variableArities = [
            false,
          ];
          obj296.methods["setAction"] = func399;
          func399.definitionLine = 124;
          func399.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 117
              lineNumber = 129
              onSelf = true;
              var call402 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 131
              lineNumber = 117
              lineNumber = 130
              onSelf = true;
              var call403 = callmethod(this, "posY:=", [1], var_y);
              return call403
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func401.paramCounts = [
            2,
          ];
          func401.variableArities = [
            false,
          ];
          obj296.methods["setLocation"] = func401;
          func401.definitionLine = 128;
          func401.definitionModule = "kitty";
          var func404 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func404.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 134
              onSelf = true;
              var call405 = callmethod(this, "posX", [0]);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func404.paramCounts = [
            0,
          ];
          func404.variableArities = [
            false,
          ];
          obj296.methods["getX"] = func404;
          func404.definitionLine = 133;
          func404.definitionModule = "kitty";
          var func406 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              lineNumber = 138
              onSelf = true;
              var call407 = callmethod(this, "posY", [0]);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func406.paramCounts = [
            0,
          ];
          func406.variableArities = [
            false,
          ];
          obj296.methods["getY"] = func406;
          func406.definitionLine = 137;
          func406.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 142
              onSelf = true;
              var call409 = callmethod(this, "rotation", [0]);
              return call409
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func408.paramCounts = [
            0,
          ];
          func408.variableArities = [
            false,
          ];
          obj296.methods["getRotation"] = func408;
          func408.definitionLine = 141;
          func408.definitionModule = "kitty";
          sourceObject = obj296;
          lineNumber = 74
          obj296.data["tag"] = var_tag__39__;
          var reader_kitty_tag_410 = function() {
            return this.data["tag"];
          }
          obj296.methods["tag"] = reader_kitty_tag_410;
          obj296.data["tag"] = var_tag__39__;
          var writer_kitty_tag_410 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj296.methods["tag:="] = writer_kitty_tag_410;
          reader_kitty_tag_410.confidential = true;
          writer_kitty_tag_410.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 75
          obj296.data["posX"] = var_x__39__;
          var reader_kitty_posX_411 = function() {
            return this.data["posX"];
          }
          obj296.methods["posX"] = reader_kitty_posX_411;
          obj296.data["posX"] = var_x__39__;
          var writer_kitty_posX_411 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj296.methods["posX:="] = writer_kitty_posX_411;
          reader_kitty_posX_411.confidential = true;
          writer_kitty_posX_411.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 76
          obj296.data["posY"] = var_y__39__;
          var reader_kitty_posY_412 = function() {
            return this.data["posY"];
          }
          obj296.methods["posY"] = reader_kitty_posY_412;
          obj296.data["posY"] = var_y__39__;
          var writer_kitty_posY_412 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj296.methods["posY:="] = writer_kitty_posY_412;
          reader_kitty_posY_412.confidential = true;
          writer_kitty_posY_412.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 77
          obj296.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_413 = function() {
            return this.data["rotation"];
          }
          obj296.methods["rotation"] = reader_kitty_rotation_413;
          obj296.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_413 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj296.methods["rotation:="] = writer_kitty_rotation_413;
          reader_kitty_rotation_413.confidential = true;
          writer_kitty_rotation_413.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 80
          var block414 = Grace_allocObject();
          block414.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block414.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block414.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block414.methods["match"] = GraceBlock_match;
          block414.methods["prefix?"] = GraceBlock_lift;
          block414.receiver = this;
          block414.className = 'block<kitty:80>';
          block414.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj296.data["action"] = block414;
          var reader_kitty_action_415 = function() {
            return this.data["action"];
          }
          obj296.methods["action"] = reader_kitty_action_415;
          obj296.data["action"] = block414;
          var writer_kitty_action_415 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj296.methods["action:="] = writer_kitty_action_415;
          reader_kitty_action_415.confidential = true;
          writer_kitty_action_415.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block414)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["image"] = undefined;
          var reader_kitty_image_416 = function() {
            return this.data["image"];
          }
          obj296.methods["image"] = reader_kitty_image_416;
          obj296.data["image"] = undefined;
          var writer_kitty_image_416 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj296.methods["image:="] = writer_kitty_image_416;
          reader_kitty_image_416.confidential = true;
          writer_kitty_image_416.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 82
          onSelf = true;
          var call417 = callmethod(this, "awake", [0]);
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          superDepth = origSuperDepth;
        }
        obj_init_296.apply(inheritingObject, []);
        return obj296
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj170.methods["new()object"] = func295;
    var func418 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 70
        var string419 = new GraceString("class KittyEntity");
        return string419
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func418.paramCounts = [
    ];
    func418.variableArities = [
    ];
    obj170.methods["asDebugString"] = func418;
    func418.definitionLine = 70;
    func418.definitionModule = "kitty";
    sourceObject = obj170;
    sourceObject = obj170;
    superDepth = origSuperDepth;
  }
  obj_init_170.apply(obj170, []);
  var var_KittyEntity = obj170;
  lineNumber = 146
  lineNumber = 154
  lineNumber = 158
  lineNumber = 164
  var func420 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func420.paramCounts[0])
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
  func420.paramCounts = [
    0,
  ];
  func420.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func420;
  func420.definitionLine = 164;
  func420.definitionModule = "kitty";
  var obj421 = Grace_allocObject();
  obj421.definitionModule = "kitty";
  obj421.definitionLine = 164;
  obj421.outer = this;
  var reader_kitty_outer_422 = function() {
    return this.outer;
  }
  obj421.methods["outer"] = reader_kitty_outer_422;
  function obj_init_421() {
    var origSuperDepth = superDepth;
    superDepth = obj421;
    obj421.annotations = [];
    var func423 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func423.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj424 = Grace_allocObject();
        obj424.definitionModule = "kitty";
        obj424.definitionLine = 164;
        obj424.outer = this;
        var reader_kitty_outer_425 = function() {
          return this.outer;
        }
        obj424.methods["outer"] = reader_kitty_outer_425;
        function obj_init_424() {
          var origSuperDepth = superDepth;
          superDepth = obj424;
          obj424.annotations = [];
          var func426 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              var if427 = var_done;
              lineNumber = 195
              onSelf = true;
              var call428 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call428)) {
                lineNumber = 197
                lineNumber = 196
                var bool429 = new GraceBoolean(false)
                return bool429
              }
              lineNumber = 200
              lineNumber = 164
              lineNumber = 199
              var call430 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call431 = callmethod(this, "document:=", [1], call430);
              lineNumber = 200
              lineNumber = 199
              lineNumber = 200
              var string432 = new GraceString("standard-canvas");
              onSelf = true;
              var call433 = callmethod(this, "document", [0]);
              var call434 = callmethod(call433,"getElementById", [1], string432);
              onSelf = true;
              var call435 = callmethod(this, "canvas:=", [1], call434);
              lineNumber = 202
              lineNumber = 199
              lineNumber = 201
              onSelf = true;
              var call436 = callmethod(this, "canvas", [0]);
              var call437 = callmethod(call436,"width", [0]);
              onSelf = true;
              var call438 = callmethod(this, "canvasWidth:=", [1], call437);
              lineNumber = 205
              lineNumber = 201
              lineNumber = 202
              onSelf = true;
              var call439 = callmethod(this, "canvas", [0]);
              var call440 = callmethod(call439,"height", [0]);
              onSelf = true;
              var call441 = callmethod(this, "canvasHeight:=", [1], call440);
              lineNumber = 217
              var block442 = Grace_allocObject();
              block442.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block442.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block442.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block442.methods["match"] = GraceBlock_match;
              block442.methods["prefix?"] = GraceBlock_lift;
              block442.receiver = this;
              block442.className = 'block<kitty:217>';
              block442.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 208
                lineNumber = 207
                onSelf = true;
                var call443 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call445 = callmethod(this, "canvas", [0]);
                var call446 = callmethod(call445,"offsetWidth", [0]);
                onSelf = true;
                var call448 = callmethod(this, "canvas", [0]);
                var call449 = callmethod(call448,"offsetLeft", [0]);
                var call451 = callmethod(var_ev,"clientX", [0]);
                var diff453 = callmethod(call451, "-", [1], call449);
                var quotient455 = callmethod(diff453, "/", [1], call446);
                var prod457 = callmethod(quotient455, "*", [1], call443);
                var var_x = prod457;
                lineNumber = 208;
                moduleName = "kitty";
                lineNumber = 207
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 212
                lineNumber = 208
                onSelf = true;
                var call458 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call460 = callmethod(this, "canvas", [0]);
                var call461 = callmethod(call460,"offsetHeight", [0]);
                onSelf = true;
                var call463 = callmethod(this, "canvas", [0]);
                var call464 = callmethod(call463,"offsetTop", [0]);
                var call466 = callmethod(var_ev,"clientY", [0]);
                var diff468 = callmethod(call466, "-", [1], call464);
                var quotient470 = callmethod(diff468, "/", [1], call461);
                var prod472 = callmethod(quotient470, "*", [1], call458);
                var var_y = prod472;
                lineNumber = 212;
                moduleName = "kitty";
                lineNumber = 208
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 216
                var if473 = var_done;
                lineNumber = 212
                var opresult476 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call479 = callmethod(this, "canvasWidth", [0]);
                var diff481 = callmethod(call479, "-", [1], new GraceNum(20));
                var opresult484 = callmethod(var_x, ">", [1], diff481);
                var opresult486 = callmethod(opresult484, "&&", [1], opresult476);
                if (Grace_isTrue(opresult486)) {
                  lineNumber = 213
                  var call487 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 214
                  onSelf = true;
                  var call488 = callmethod(this, "stop", [0]);
                  if473 = call488;
                }
                return if473;
              };
              var_mouseDownListener = block442;
              lineNumber = 217
              var string489 = new GraceString("mousedown");
              onSelf = true;
              var call490 = callmethod(this, "canvas", [0]);
              var call491 = callmethod(call490,"addEventListener", [2], string489, var_mouseDownListener);
              lineNumber = 227
              var block492 = Grace_allocObject();
              block492.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block492.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block492.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block492.methods["match"] = GraceBlock_match;
              block492.methods["prefix?"] = GraceBlock_lift;
              block492.receiver = this;
              block492.className = 'block<kitty:227>';
              block492.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 225
                var if493 = var_done;
                lineNumber = 222
                var call495 = callmethod(var_ev,"keyCode", [0]);
                var opresult497 = callmethod(call495, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult497)) {
                  lineNumber = 223
                  onSelf = true;
                  var call498 = callmethod(this, "stop", [0]);
                  if493 = call498;
                }
                lineNumber = 226
                lineNumber = 225
                var call499 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call499;
                return call499;
              };
              var_keyDownListener = block492;
              lineNumber = 227
              var string500 = new GraceString("keydown");
              onSelf = true;
              var call501 = callmethod(this, "document", [0]);
              var call502 = callmethod(call501,"addEventListener", [2], string500, var_keyDownListener);
              lineNumber = 233
              var block503 = Grace_allocObject();
              block503.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block503.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block503.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block503.methods["match"] = GraceBlock_match;
              block503.methods["prefix?"] = GraceBlock_lift;
              block503.receiver = this;
              block503.className = 'block<kitty:233>';
              block503.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 232
                lineNumber = 231
                var call504 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call504;
                return call504;
              };
              var_keyUpListener = block503;
              lineNumber = 233
              var string505 = new GraceString("keyup");
              onSelf = true;
              var call506 = callmethod(this, "document", [0]);
              var call507 = callmethod(call506,"addEventListener", [2], string505, var_keyUpListener);
              lineNumber = 235
              lineNumber = 225
              lineNumber = 235
              var string508 = new GraceString("canvas");
              var call509 = callmethod(var_dom,"document", [0]);
              var call510 = callmethod(call509,"createElement", [1], string508);
              onSelf = true;
              var call511 = callmethod(this, "backingCanvas:=", [1], call510);
              lineNumber = 237
              lineNumber = 235
              lineNumber = 236
              onSelf = true;
              var call512 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call513 = callmethod(this, "backingCanvas", [0]);
              var call514 = callmethod(call513,"height:=", [1], call512);
              lineNumber = 238
              lineNumber = 235
              lineNumber = 237
              onSelf = true;
              var call515 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call516 = callmethod(this, "backingCanvas", [0]);
              var call517 = callmethod(call516,"width:=", [1], call515);
              lineNumber = 238
              lineNumber = 235
              lineNumber = 238
              var string518 = new GraceString("2d");
              onSelf = true;
              var call519 = callmethod(this, "backingCanvas", [0]);
              var call520 = callmethod(call519,"getContext", [1], string518);
              onSelf = true;
              var call521 = callmethod(this, "backingContext:=", [1], call520);
              lineNumber = 239
              lineNumber = 235
              lineNumber = 239
              var string522 = new GraceString("2d");
              onSelf = true;
              var call523 = callmethod(this, "canvas", [0]);
              var call524 = callmethod(call523,"getContext", [1], string522);
              onSelf = true;
              var call525 = callmethod(this, "mctx:=", [1], call524);
              lineNumber = 242
              var string526 = new GraceString("doggo.jpg");
              onSelf = true;
              var call527 = callmethod(this, "setBackground", [1], string526);
              lineNumber = 251
              lineNumber = 235
              lineNumber = 248
              var bool528 = new GraceBoolean(true)
              onSelf = true;
              var call529 = callmethod(this, "isInit:=", [1], bool528);
              lineNumber = 251
              var call530 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call531 = callmethod(call530, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call532 = callmethod(call531, "setWorld", [1], this);
              return call532
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func426.paramCounts = [
            0,
          ];
          func426.variableArities = [
            false,
          ];
          obj424.methods["init"] = func426;
          func426.definitionLine = 191;
          func426.definitionModule = "kitty";
          var func533 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func533.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 251
              lineNumber = 262
              var bool534 = new GraceBoolean(true)
              onSelf = true;
              var call535 = callmethod(this, "isRunning:=", [1], bool534);
              lineNumber = 263
              var block536 = Grace_allocObject();
              block536.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block536.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block536.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block536.methods["match"] = GraceBlock_match;
              block536.methods["prefix?"] = GraceBlock_lift;
              block536.receiver = this;
              block536.className = 'block<kitty:263>';
              block536.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call537 = callmethod(this, "isRunning", [0]);
                return call537;
              };
              lineNumber = 267
              var block538 = Grace_allocObject();
              block538.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block538.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block538.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block538.methods["match"] = GraceBlock_match;
              block538.methods["prefix?"] = GraceBlock_lift;
              block538.receiver = this;
              block538.className = 'block<kitty:267>';
              block538.real = function(
              ) {
                sourceObject = this;
                lineNumber = 264
                onSelf = true;
                var call539 = callmethod(this, "update", [0]);
                return call539;
              };
              lineNumber = 263
              var call540 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block536, new GraceNum(10), block538);
              return call540
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func533.paramCounts = [
            0,
          ];
          func533.variableArities = [
            false,
          ];
          obj424.methods["start"] = func533;
          func533.definitionLine = 260;
          func533.definitionModule = "kitty";
          var func541 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func541.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 251
              lineNumber = 275
              onSelf = true;
              var call542 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call543 = callmethod(this, "mctx", [0]);
              var call544 = callmethod(call543,"fillStyle:=", [1], call542);
              lineNumber = 276
              onSelf = true;
              var call545 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call546 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call547 = callmethod(this, "mctx", [0]);
              var call548 = callmethod(call547,"fillRect", [4], new GraceNum(0), new GraceNum(0), call545, call546);
              lineNumber = 277
              onSelf = true;
              var call549 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call550 = callmethod(this, "mctx", [0]);
              var call551 = callmethod(call550,"drawImage", [3], call549, new GraceNum(0), new GraceNum(0));
              lineNumber = 278
              onSelf = true;
              var call552 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call554 = callmethod(this, "canvasWidth", [0]);
              var quotient556 = callmethod(call554, "/", [1], new GraceNum(2));
              onSelf = true;
              var call558 = callmethod(this, "canvasHeight", [0]);
              var quotient560 = callmethod(call558, "/", [1], new GraceNum(2));
              onSelf = true;
              var call561 = callmethod(this, "background", [0]);
              var call562 = callmethod(call561,"draw", [4], call552, quotient556, quotient560, new GraceNum(0));
              lineNumber = 281
              onSelf = true;
              var call563 = callmethod(this, "entities", [0]);
              lineNumber = 287
              var block564 = Grace_allocObject();
              block564.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block564.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block564.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block564.methods["match"] = GraceBlock_match;
              block564.methods["prefix?"] = GraceBlock_lift;
              block564.receiver = this;
              block564.className = 'block<kitty:287>';
              block564.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 282
                var call565 = callmethod(var_entity,"tick", [0]);
                lineNumber = 283
                onSelf = true;
                var call566 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call568 = callmethod(this, "canvasWidth", [0]);
                var quotient570 = callmethod(call568, "/", [1], new GraceNum(2));
                onSelf = true;
                var call572 = callmethod(this, "canvasHeight", [0]);
                var quotient574 = callmethod(call572, "/", [1], new GraceNum(2));
                var call575 = callmethod(var_entity,"draw", [3], call566, quotient570, quotient574);
                return call575;
              };
              var call576 = callmethod(Grace_prelude,"for()do", [1, 1], call563, block564);
              return call576
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func541.paramCounts = [
            0,
          ];
          func541.variableArities = [
            false,
          ];
          obj424.methods["update"] = func541;
          func541.definitionLine = 270;
          func541.definitionModule = "kitty";
          var func577 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func577.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              var string578 = new GraceString("WORLD STOPPING...");
              var call579 = Grace_print(string578);
              lineNumber = 292
              lineNumber = 282
              lineNumber = 291
              var bool580 = new GraceBoolean(false)
              onSelf = true;
              var call581 = callmethod(this, "isRunning:=", [1], bool580);
              lineNumber = 292
              var string582 = new GraceString("mousedown");
              onSelf = true;
              var call583 = callmethod(this, "canvas", [0]);
              var call584 = callmethod(call583,"removeEventListener", [2], string582, var_mouseDownListener);
              lineNumber = 293
              var string585 = new GraceString("keydown");
              onSelf = true;
              var call586 = callmethod(this, "document", [0]);
              var call587 = callmethod(call586,"removeEventListener", [2], string585, var_keyDownListener);
              lineNumber = 294
              var string588 = new GraceString("keyup");
              onSelf = true;
              var call589 = callmethod(this, "document", [0]);
              var call590 = callmethod(call589,"removeEventListener", [2], string588, var_keyUpListener);
              return call590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func577.paramCounts = [
            0,
          ];
          func577.variableArities = [
            false,
          ];
          obj424.methods["stop"] = func577;
          func577.definitionLine = 289;
          func577.definitionModule = "kitty";
          var func591 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 282
              lineNumber = 298
              onSelf = true;
              var call592 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call593 = callmethod(this, "canvasHeight", [0]);
              var call594 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call595 = callmethod(call594, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call596 = callmethod(call595, "Image()width()height", [1, 1, 1], var_url, call592, call593);
              onSelf = true;
              var call597 = callmethod(this, "background:=", [1], call596);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func591.paramCounts = [
            1,
          ];
          func591.variableArities = [
            false,
          ];
          obj424.methods["setBackground"] = func591;
          func591.definitionLine = 297;
          func591.definitionModule = "kitty";
          var func598 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              onSelf = true;
              var call599 = callmethod(this, "entities", [0]);
              var call600 = callmethod(call599,"push", [1], var_e);
              return call600
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func598.paramCounts = [
            1,
          ];
          func598.variableArities = [
            false,
          ];
          obj424.methods["addEntity"] = func598;
          func598.definitionLine = 301;
          func598.definitionModule = "kitty";
          var func601 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func601.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 307
              lineNumber = 306
              onSelf = true;
              var call602 = callmethod(this, "mctx", [0]);
              return call602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func601.paramCounts = [
            0,
          ];
          func601.variableArities = [
            false,
          ];
          obj424.methods["getContext"] = func601;
          func601.definitionLine = 305;
          func601.definitionModule = "kitty";
          sourceObject = obj424;
          obj424.data["background"] = undefined;
          var reader_kitty_background_603 = function() {
            return this.data["background"];
          }
          obj424.methods["background"] = reader_kitty_background_603;
          obj424.data["background"] = undefined;
          var writer_kitty_background_603 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj424.methods["background:="] = writer_kitty_background_603;
          reader_kitty_background_603.confidential = true;
          writer_kitty_background_603.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          lineNumber = 169
          var string604 = new GraceString("black");
          obj424.data["backgroundColour"] = string604;
          var reader_kitty_backgroundColour_605 = function() {
            return this.data["backgroundColour"];
          }
          obj424.methods["backgroundColour"] = reader_kitty_backgroundColour_605;
          obj424.data["backgroundColour"] = string604;
          var writer_kitty_backgroundColour_605 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj424.methods["backgroundColour:="] = writer_kitty_backgroundColour_605;
          reader_kitty_backgroundColour_605.confidential = true;
          writer_kitty_backgroundColour_605.confidential = true;
          lineNumber = 171;
          moduleName = "kitty";
          lineNumber = 169
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string604)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["document"] = undefined;
          var reader_kitty_document_606 = function() {
            return this.data["document"];
          }
          obj424.methods["document"] = reader_kitty_document_606;
          obj424.data["document"] = undefined;
          var writer_kitty_document_606 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj424.methods["document:="] = writer_kitty_document_606;
          reader_kitty_document_606.confidential = true;
          writer_kitty_document_606.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_607 = function() {
            return this.data["backingCanvas"];
          }
          obj424.methods["backingCanvas"] = reader_kitty_backingCanvas_607;
          obj424.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_607 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj424.methods["backingCanvas:="] = writer_kitty_backingCanvas_607;
          reader_kitty_backingCanvas_607.confidential = true;
          writer_kitty_backingCanvas_607.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["backingContext"] = undefined;
          var reader_kitty_backingContext_608 = function() {
            return this.data["backingContext"];
          }
          obj424.methods["backingContext"] = reader_kitty_backingContext_608;
          obj424.data["backingContext"] = undefined;
          var writer_kitty_backingContext_608 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj424.methods["backingContext:="] = writer_kitty_backingContext_608;
          reader_kitty_backingContext_608.confidential = true;
          writer_kitty_backingContext_608.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["canvas"] = undefined;
          var reader_kitty_canvas_609 = function() {
            return this.data["canvas"];
          }
          obj424.methods["canvas"] = reader_kitty_canvas_609;
          obj424.data["canvas"] = undefined;
          var writer_kitty_canvas_609 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj424.methods["canvas:="] = writer_kitty_canvas_609;
          reader_kitty_canvas_609.confidential = true;
          writer_kitty_canvas_609.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_610 = function() {
            return this.data["canvasWidth"];
          }
          obj424.methods["canvasWidth"] = reader_kitty_canvasWidth_610;
          obj424.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_610 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj424.methods["canvasWidth:="] = writer_kitty_canvasWidth_610;
          reader_kitty_canvasWidth_610.confidential = true;
          writer_kitty_canvasWidth_610.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_611 = function() {
            return this.data["canvasHeight"];
          }
          obj424.methods["canvasHeight"] = reader_kitty_canvasHeight_611;
          obj424.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_611 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj424.methods["canvasHeight:="] = writer_kitty_canvasHeight_611;
          reader_kitty_canvasHeight_611.confidential = true;
          writer_kitty_canvasHeight_611.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          lineNumber = 180
          var call612 = callmethod(var_collections,"list", [0]);
          var call613 = callmethod(call612,"new", [0]);
          obj424.data["entities"] = call613;
          var reader_kitty_entities_614 = function() {
            return this.data["entities"];
          }
          obj424.methods["entities"] = reader_kitty_entities_614;
          obj424.data["entities"] = call613;
          var writer_kitty_entities_614 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj424.methods["entities:="] = writer_kitty_entities_614;
          reader_kitty_entities_614.confidential = true;
          writer_kitty_entities_614.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call613)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj424.mutable = true;
          sourceObject = obj424;
          lineNumber = 182
          var bool615 = new GraceBoolean(false)
          obj424.data["isInit"] = bool615;
          var reader_kitty_isInit_616 = function() {
            return this.data["isInit"];
          }
          obj424.methods["isInit"] = reader_kitty_isInit_616;
          obj424.data["isInit"] = bool615;
          var writer_kitty_isInit_616 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj424.methods["isInit:="] = writer_kitty_isInit_616;
          reader_kitty_isInit_616.confidential = true;
          writer_kitty_isInit_616.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj424.mutable = true;
          sourceObject = obj424;
          lineNumber = 183
          var bool617 = new GraceBoolean(false)
          obj424.data["isRunning"] = bool617;
          var reader_kitty_isRunning_618 = function() {
            return this.data["isRunning"];
          }
          obj424.methods["isRunning"] = reader_kitty_isRunning_618;
          obj424.data["isRunning"] = bool617;
          var writer_kitty_isRunning_618 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj424.methods["isRunning:="] = writer_kitty_isRunning_618;
          reader_kitty_isRunning_618.confidential = true;
          writer_kitty_isRunning_618.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool617)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["mctx"] = undefined;
          var reader_kitty_mctx_619 = function() {
            return this.data["mctx"];
          }
          obj424.methods["mctx"] = reader_kitty_mctx_619;
          obj424.data["mctx"] = undefined;
          var writer_kitty_mctx_619 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj424.methods["mctx:="] = writer_kitty_mctx_619;
          reader_kitty_mctx_619.confidential = true;
          writer_kitty_mctx_619.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          obj424.data["ent"] = undefined;
          var reader_kitty_ent_620 = function() {
            return this.data["ent"];
          }
          obj424.methods["ent"] = reader_kitty_ent_620;
          obj424.data["ent"] = undefined;
          var writer_kitty_ent_620 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj424.methods["ent:="] = writer_kitty_ent_620;
          reader_kitty_ent_620.confidential = true;
          writer_kitty_ent_620.confidential = true;
          obj424.mutable = true;
          sourceObject = obj424;
          lineNumber = 188
          onSelf = true;
          var call621 = callmethod(this, "init", [0]);
          sourceObject = obj424;
          sourceObject = obj424;
          sourceObject = obj424;
          sourceObject = obj424;
          sourceObject = obj424;
          sourceObject = obj424;
          sourceObject = obj424;
          superDepth = origSuperDepth;
        }
        obj_init_424.apply(obj424, []);
        return obj424
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func423.paramCounts = [
      0,
    ];
    func423.variableArities = [
      false,
    ];
    obj421.methods["new"] = func423;
    func423.definitionLine = 164;
    func423.definitionModule = "kitty";
    var func622 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj623 = Grace_allocObject();
        obj623.definitionModule = "kitty";
        obj623.definitionLine = 164;
        var inho623 = inheritingObject;
        while (inho623.superobj) inho623 = inho623.superobj;
        inho623.superobj = obj623;
        obj623.data = inheritingObject.data;
        obj623.outer = this;
        var reader_kitty_outer_624 = function() {
          return this.outer;
        }
        obj623.methods["outer"] = reader_kitty_outer_624;
        function obj_init_623() {
          var origSuperDepth = superDepth;
          superDepth = obj623;
          obj623.annotations = [];
          var func625 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              var if626 = var_done;
              lineNumber = 195
              onSelf = true;
              var call627 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call627)) {
                lineNumber = 197
                lineNumber = 196
                var bool628 = new GraceBoolean(false)
                return bool628
              }
              lineNumber = 200
              lineNumber = 180
              lineNumber = 199
              var call629 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call630 = callmethod(this, "document:=", [1], call629);
              lineNumber = 200
              lineNumber = 199
              lineNumber = 200
              var string631 = new GraceString("standard-canvas");
              onSelf = true;
              var call632 = callmethod(this, "document", [0]);
              var call633 = callmethod(call632,"getElementById", [1], string631);
              onSelf = true;
              var call634 = callmethod(this, "canvas:=", [1], call633);
              lineNumber = 202
              lineNumber = 199
              lineNumber = 201
              onSelf = true;
              var call635 = callmethod(this, "canvas", [0]);
              var call636 = callmethod(call635,"width", [0]);
              onSelf = true;
              var call637 = callmethod(this, "canvasWidth:=", [1], call636);
              lineNumber = 205
              lineNumber = 201
              lineNumber = 202
              onSelf = true;
              var call638 = callmethod(this, "canvas", [0]);
              var call639 = callmethod(call638,"height", [0]);
              onSelf = true;
              var call640 = callmethod(this, "canvasHeight:=", [1], call639);
              lineNumber = 217
              var block641 = Grace_allocObject();
              block641.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block641.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block641.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block641.methods["match"] = GraceBlock_match;
              block641.methods["prefix?"] = GraceBlock_lift;
              block641.receiver = this;
              block641.className = 'block<kitty:217>';
              block641.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 208
                lineNumber = 207
                onSelf = true;
                var call642 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call644 = callmethod(this, "canvas", [0]);
                var call645 = callmethod(call644,"offsetWidth", [0]);
                onSelf = true;
                var call647 = callmethod(this, "canvas", [0]);
                var call648 = callmethod(call647,"offsetLeft", [0]);
                var call650 = callmethod(var_ev,"clientX", [0]);
                var diff652 = callmethod(call650, "-", [1], call648);
                var quotient654 = callmethod(diff652, "/", [1], call645);
                var prod656 = callmethod(quotient654, "*", [1], call642);
                var var_x = prod656;
                lineNumber = 208;
                moduleName = "kitty";
                lineNumber = 207
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 212
                lineNumber = 208
                onSelf = true;
                var call657 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call659 = callmethod(this, "canvas", [0]);
                var call660 = callmethod(call659,"offsetHeight", [0]);
                onSelf = true;
                var call662 = callmethod(this, "canvas", [0]);
                var call663 = callmethod(call662,"offsetTop", [0]);
                var call665 = callmethod(var_ev,"clientY", [0]);
                var diff667 = callmethod(call665, "-", [1], call663);
                var quotient669 = callmethod(diff667, "/", [1], call660);
                var prod671 = callmethod(quotient669, "*", [1], call657);
                var var_y = prod671;
                lineNumber = 212;
                moduleName = "kitty";
                lineNumber = 208
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 216
                var if672 = var_done;
                lineNumber = 212
                var opresult675 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call678 = callmethod(this, "canvasWidth", [0]);
                var diff680 = callmethod(call678, "-", [1], new GraceNum(20));
                var opresult683 = callmethod(var_x, ">", [1], diff680);
                var opresult685 = callmethod(opresult683, "&&", [1], opresult675);
                if (Grace_isTrue(opresult685)) {
                  lineNumber = 213
                  var call686 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 214
                  onSelf = true;
                  var call687 = callmethod(this, "stop", [0]);
                  if672 = call687;
                }
                return if672;
              };
              var_mouseDownListener = block641;
              lineNumber = 217
              var string688 = new GraceString("mousedown");
              onSelf = true;
              var call689 = callmethod(this, "canvas", [0]);
              var call690 = callmethod(call689,"addEventListener", [2], string688, var_mouseDownListener);
              lineNumber = 227
              var block691 = Grace_allocObject();
              block691.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block691.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block691.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block691.methods["match"] = GraceBlock_match;
              block691.methods["prefix?"] = GraceBlock_lift;
              block691.receiver = this;
              block691.className = 'block<kitty:227>';
              block691.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 225
                var if692 = var_done;
                lineNumber = 222
                var call694 = callmethod(var_ev,"keyCode", [0]);
                var opresult696 = callmethod(call694, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult696)) {
                  lineNumber = 223
                  onSelf = true;
                  var call697 = callmethod(this, "stop", [0]);
                  if692 = call697;
                }
                lineNumber = 226
                lineNumber = 225
                var call698 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call698;
                return call698;
              };
              var_keyDownListener = block691;
              lineNumber = 227
              var string699 = new GraceString("keydown");
              onSelf = true;
              var call700 = callmethod(this, "document", [0]);
              var call701 = callmethod(call700,"addEventListener", [2], string699, var_keyDownListener);
              lineNumber = 233
              var block702 = Grace_allocObject();
              block702.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block702.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block702.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block702.methods["match"] = GraceBlock_match;
              block702.methods["prefix?"] = GraceBlock_lift;
              block702.receiver = this;
              block702.className = 'block<kitty:233>';
              block702.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 232
                lineNumber = 231
                var call703 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call703;
                return call703;
              };
              var_keyUpListener = block702;
              lineNumber = 233
              var string704 = new GraceString("keyup");
              onSelf = true;
              var call705 = callmethod(this, "document", [0]);
              var call706 = callmethod(call705,"addEventListener", [2], string704, var_keyUpListener);
              lineNumber = 235
              lineNumber = 225
              lineNumber = 235
              var string707 = new GraceString("canvas");
              var call708 = callmethod(var_dom,"document", [0]);
              var call709 = callmethod(call708,"createElement", [1], string707);
              onSelf = true;
              var call710 = callmethod(this, "backingCanvas:=", [1], call709);
              lineNumber = 237
              lineNumber = 235
              lineNumber = 236
              onSelf = true;
              var call711 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call712 = callmethod(this, "backingCanvas", [0]);
              var call713 = callmethod(call712,"height:=", [1], call711);
              lineNumber = 238
              lineNumber = 235
              lineNumber = 237
              onSelf = true;
              var call714 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call715 = callmethod(this, "backingCanvas", [0]);
              var call716 = callmethod(call715,"width:=", [1], call714);
              lineNumber = 238
              lineNumber = 235
              lineNumber = 238
              var string717 = new GraceString("2d");
              onSelf = true;
              var call718 = callmethod(this, "backingCanvas", [0]);
              var call719 = callmethod(call718,"getContext", [1], string717);
              onSelf = true;
              var call720 = callmethod(this, "backingContext:=", [1], call719);
              lineNumber = 239
              lineNumber = 235
              lineNumber = 239
              var string721 = new GraceString("2d");
              onSelf = true;
              var call722 = callmethod(this, "canvas", [0]);
              var call723 = callmethod(call722,"getContext", [1], string721);
              onSelf = true;
              var call724 = callmethod(this, "mctx:=", [1], call723);
              lineNumber = 242
              var string725 = new GraceString("doggo.jpg");
              onSelf = true;
              var call726 = callmethod(this, "setBackground", [1], string725);
              lineNumber = 251
              lineNumber = 235
              lineNumber = 248
              var bool727 = new GraceBoolean(true)
              onSelf = true;
              var call728 = callmethod(this, "isInit:=", [1], bool727);
              lineNumber = 251
              var call729 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call730 = callmethod(call729, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call731 = callmethod(call730, "setWorld", [1], this);
              return call731
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func625.paramCounts = [
            0,
          ];
          func625.variableArities = [
            false,
          ];
          obj623.methods["init"] = func625;
          func625.definitionLine = 191;
          func625.definitionModule = "kitty";
          var func732 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func732.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 251
              lineNumber = 262
              var bool733 = new GraceBoolean(true)
              onSelf = true;
              var call734 = callmethod(this, "isRunning:=", [1], bool733);
              lineNumber = 263
              var block735 = Grace_allocObject();
              block735.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block735.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block735.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block735.methods["match"] = GraceBlock_match;
              block735.methods["prefix?"] = GraceBlock_lift;
              block735.receiver = this;
              block735.className = 'block<kitty:263>';
              block735.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call736 = callmethod(this, "isRunning", [0]);
                return call736;
              };
              lineNumber = 267
              var block737 = Grace_allocObject();
              block737.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block737.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block737.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block737.methods["match"] = GraceBlock_match;
              block737.methods["prefix?"] = GraceBlock_lift;
              block737.receiver = this;
              block737.className = 'block<kitty:267>';
              block737.real = function(
              ) {
                sourceObject = this;
                lineNumber = 264
                onSelf = true;
                var call738 = callmethod(this, "update", [0]);
                return call738;
              };
              lineNumber = 263
              var call739 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block735, new GraceNum(10), block737);
              return call739
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func732.paramCounts = [
            0,
          ];
          func732.variableArities = [
            false,
          ];
          obj623.methods["start"] = func732;
          func732.definitionLine = 260;
          func732.definitionModule = "kitty";
          var func740 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func740.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 251
              lineNumber = 275
              onSelf = true;
              var call741 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call742 = callmethod(this, "mctx", [0]);
              var call743 = callmethod(call742,"fillStyle:=", [1], call741);
              lineNumber = 276
              onSelf = true;
              var call744 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call745 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call746 = callmethod(this, "mctx", [0]);
              var call747 = callmethod(call746,"fillRect", [4], new GraceNum(0), new GraceNum(0), call744, call745);
              lineNumber = 277
              onSelf = true;
              var call748 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call749 = callmethod(this, "mctx", [0]);
              var call750 = callmethod(call749,"drawImage", [3], call748, new GraceNum(0), new GraceNum(0));
              lineNumber = 278
              onSelf = true;
              var call751 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call753 = callmethod(this, "canvasWidth", [0]);
              var quotient755 = callmethod(call753, "/", [1], new GraceNum(2));
              onSelf = true;
              var call757 = callmethod(this, "canvasHeight", [0]);
              var quotient759 = callmethod(call757, "/", [1], new GraceNum(2));
              onSelf = true;
              var call760 = callmethod(this, "background", [0]);
              var call761 = callmethod(call760,"draw", [4], call751, quotient755, quotient759, new GraceNum(0));
              lineNumber = 281
              onSelf = true;
              var call762 = callmethod(this, "entities", [0]);
              lineNumber = 287
              var block763 = Grace_allocObject();
              block763.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block763.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block763.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block763.methods["match"] = GraceBlock_match;
              block763.methods["prefix?"] = GraceBlock_lift;
              block763.receiver = this;
              block763.className = 'block<kitty:287>';
              block763.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 282
                var call764 = callmethod(var_entity,"tick", [0]);
                lineNumber = 283
                onSelf = true;
                var call765 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call767 = callmethod(this, "canvasWidth", [0]);
                var quotient769 = callmethod(call767, "/", [1], new GraceNum(2));
                onSelf = true;
                var call771 = callmethod(this, "canvasHeight", [0]);
                var quotient773 = callmethod(call771, "/", [1], new GraceNum(2));
                var call774 = callmethod(var_entity,"draw", [3], call765, quotient769, quotient773);
                return call774;
              };
              var call775 = callmethod(Grace_prelude,"for()do", [1, 1], call762, block763);
              return call775
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func740.paramCounts = [
            0,
          ];
          func740.variableArities = [
            false,
          ];
          obj623.methods["update"] = func740;
          func740.definitionLine = 270;
          func740.definitionModule = "kitty";
          var func776 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func776.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              var string777 = new GraceString("WORLD STOPPING...");
              var call778 = Grace_print(string777);
              lineNumber = 292
              lineNumber = 282
              lineNumber = 291
              var bool779 = new GraceBoolean(false)
              onSelf = true;
              var call780 = callmethod(this, "isRunning:=", [1], bool779);
              lineNumber = 292
              var string781 = new GraceString("mousedown");
              onSelf = true;
              var call782 = callmethod(this, "canvas", [0]);
              var call783 = callmethod(call782,"removeEventListener", [2], string781, var_mouseDownListener);
              lineNumber = 293
              var string784 = new GraceString("keydown");
              onSelf = true;
              var call785 = callmethod(this, "document", [0]);
              var call786 = callmethod(call785,"removeEventListener", [2], string784, var_keyDownListener);
              lineNumber = 294
              var string787 = new GraceString("keyup");
              onSelf = true;
              var call788 = callmethod(this, "document", [0]);
              var call789 = callmethod(call788,"removeEventListener", [2], string787, var_keyUpListener);
              return call789
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func776.paramCounts = [
            0,
          ];
          func776.variableArities = [
            false,
          ];
          obj623.methods["stop"] = func776;
          func776.definitionLine = 289;
          func776.definitionModule = "kitty";
          var func790 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func790.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 282
              lineNumber = 298
              onSelf = true;
              var call791 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call792 = callmethod(this, "canvasHeight", [0]);
              var call793 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call794 = callmethod(call793, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call795 = callmethod(call794, "Image()width()height", [1, 1, 1], var_url, call791, call792);
              onSelf = true;
              var call796 = callmethod(this, "background:=", [1], call795);
              return call796
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func790.paramCounts = [
            1,
          ];
          func790.variableArities = [
            false,
          ];
          obj623.methods["setBackground"] = func790;
          func790.definitionLine = 297;
          func790.definitionModule = "kitty";
          var func797 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func797.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              onSelf = true;
              var call798 = callmethod(this, "entities", [0]);
              var call799 = callmethod(call798,"push", [1], var_e);
              return call799
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func797.paramCounts = [
            1,
          ];
          func797.variableArities = [
            false,
          ];
          obj623.methods["addEntity"] = func797;
          func797.definitionLine = 301;
          func797.definitionModule = "kitty";
          var func800 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func800.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 307
              lineNumber = 306
              onSelf = true;
              var call801 = callmethod(this, "mctx", [0]);
              return call801
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func800.paramCounts = [
            0,
          ];
          func800.variableArities = [
            false,
          ];
          obj623.methods["getContext"] = func800;
          func800.definitionLine = 305;
          func800.definitionModule = "kitty";
          sourceObject = obj623;
          obj623.data["background"] = undefined;
          var reader_kitty_background_802 = function() {
            return this.data["background"];
          }
          obj623.methods["background"] = reader_kitty_background_802;
          obj623.data["background"] = undefined;
          var writer_kitty_background_802 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj623.methods["background:="] = writer_kitty_background_802;
          reader_kitty_background_802.confidential = true;
          writer_kitty_background_802.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 169
          var string803 = new GraceString("black");
          obj623.data["backgroundColour"] = string803;
          var reader_kitty_backgroundColour_804 = function() {
            return this.data["backgroundColour"];
          }
          obj623.methods["backgroundColour"] = reader_kitty_backgroundColour_804;
          obj623.data["backgroundColour"] = string803;
          var writer_kitty_backgroundColour_804 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj623.methods["backgroundColour:="] = writer_kitty_backgroundColour_804;
          reader_kitty_backgroundColour_804.confidential = true;
          writer_kitty_backgroundColour_804.confidential = true;
          lineNumber = 171;
          moduleName = "kitty";
          lineNumber = 169
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string803)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["document"] = undefined;
          var reader_kitty_document_805 = function() {
            return this.data["document"];
          }
          obj623.methods["document"] = reader_kitty_document_805;
          obj623.data["document"] = undefined;
          var writer_kitty_document_805 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj623.methods["document:="] = writer_kitty_document_805;
          reader_kitty_document_805.confidential = true;
          writer_kitty_document_805.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_806 = function() {
            return this.data["backingCanvas"];
          }
          obj623.methods["backingCanvas"] = reader_kitty_backingCanvas_806;
          obj623.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_806 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj623.methods["backingCanvas:="] = writer_kitty_backingCanvas_806;
          reader_kitty_backingCanvas_806.confidential = true;
          writer_kitty_backingCanvas_806.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["backingContext"] = undefined;
          var reader_kitty_backingContext_807 = function() {
            return this.data["backingContext"];
          }
          obj623.methods["backingContext"] = reader_kitty_backingContext_807;
          obj623.data["backingContext"] = undefined;
          var writer_kitty_backingContext_807 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj623.methods["backingContext:="] = writer_kitty_backingContext_807;
          reader_kitty_backingContext_807.confidential = true;
          writer_kitty_backingContext_807.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvas"] = undefined;
          var reader_kitty_canvas_808 = function() {
            return this.data["canvas"];
          }
          obj623.methods["canvas"] = reader_kitty_canvas_808;
          obj623.data["canvas"] = undefined;
          var writer_kitty_canvas_808 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj623.methods["canvas:="] = writer_kitty_canvas_808;
          reader_kitty_canvas_808.confidential = true;
          writer_kitty_canvas_808.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_809 = function() {
            return this.data["canvasWidth"];
          }
          obj623.methods["canvasWidth"] = reader_kitty_canvasWidth_809;
          obj623.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_809 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj623.methods["canvasWidth:="] = writer_kitty_canvasWidth_809;
          reader_kitty_canvasWidth_809.confidential = true;
          writer_kitty_canvasWidth_809.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_810 = function() {
            return this.data["canvasHeight"];
          }
          obj623.methods["canvasHeight"] = reader_kitty_canvasHeight_810;
          obj623.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_810 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj623.methods["canvasHeight:="] = writer_kitty_canvasHeight_810;
          reader_kitty_canvasHeight_810.confidential = true;
          writer_kitty_canvasHeight_810.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 180
          var call811 = callmethod(var_collections,"list", [0]);
          var call812 = callmethod(call811,"new", [0]);
          obj623.data["entities"] = call812;
          var reader_kitty_entities_813 = function() {
            return this.data["entities"];
          }
          obj623.methods["entities"] = reader_kitty_entities_813;
          obj623.data["entities"] = call812;
          var writer_kitty_entities_813 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj623.methods["entities:="] = writer_kitty_entities_813;
          reader_kitty_entities_813.confidential = true;
          writer_kitty_entities_813.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call812)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 182
          var bool814 = new GraceBoolean(false)
          obj623.data["isInit"] = bool814;
          var reader_kitty_isInit_815 = function() {
            return this.data["isInit"];
          }
          obj623.methods["isInit"] = reader_kitty_isInit_815;
          obj623.data["isInit"] = bool814;
          var writer_kitty_isInit_815 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj623.methods["isInit:="] = writer_kitty_isInit_815;
          reader_kitty_isInit_815.confidential = true;
          writer_kitty_isInit_815.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool814)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 183
          var bool816 = new GraceBoolean(false)
          obj623.data["isRunning"] = bool816;
          var reader_kitty_isRunning_817 = function() {
            return this.data["isRunning"];
          }
          obj623.methods["isRunning"] = reader_kitty_isRunning_817;
          obj623.data["isRunning"] = bool816;
          var writer_kitty_isRunning_817 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj623.methods["isRunning:="] = writer_kitty_isRunning_817;
          reader_kitty_isRunning_817.confidential = true;
          writer_kitty_isRunning_817.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool816)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["mctx"] = undefined;
          var reader_kitty_mctx_818 = function() {
            return this.data["mctx"];
          }
          obj623.methods["mctx"] = reader_kitty_mctx_818;
          obj623.data["mctx"] = undefined;
          var writer_kitty_mctx_818 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj623.methods["mctx:="] = writer_kitty_mctx_818;
          reader_kitty_mctx_818.confidential = true;
          writer_kitty_mctx_818.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["ent"] = undefined;
          var reader_kitty_ent_819 = function() {
            return this.data["ent"];
          }
          obj623.methods["ent"] = reader_kitty_ent_819;
          obj623.data["ent"] = undefined;
          var writer_kitty_ent_819 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj623.methods["ent:="] = writer_kitty_ent_819;
          reader_kitty_ent_819.confidential = true;
          writer_kitty_ent_819.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 188
          onSelf = true;
          var call820 = callmethod(this, "init", [0]);
          sourceObject = obj623;
          sourceObject = obj623;
          sourceObject = obj623;
          sourceObject = obj623;
          sourceObject = obj623;
          sourceObject = obj623;
          sourceObject = obj623;
          superDepth = origSuperDepth;
        }
        obj_init_623.apply(inheritingObject, []);
        return obj623
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj421.methods["new()object"] = func622;
    var func821 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 164
        var string822 = new GraceString("class KittyWorld");
        return string822
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func821.paramCounts = [
    ];
    func821.variableArities = [
    ];
    obj421.methods["asDebugString"] = func821;
    func821.definitionLine = 164;
    func821.definitionModule = "kitty";
    sourceObject = obj421;
    sourceObject = obj421;
    superDepth = origSuperDepth;
  }
  obj_init_421.apply(obj421, []);
  var var_KittyWorld = obj421;
  lineNumber = 311
  lineNumber = 320
  lineNumber = 335
  lineNumber = 339
  lineNumber = 344
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n isKeyDown\n KittyWorld\n World\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n getTag\n elements\n width\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\nfresh:Entity()x()y:\n tag\n turn\n strafe\n posX\n posY\n getX\n move\n rotation\n action:=\n setLocation\n getY\n image:=\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n setAction\n tick\n draw\n setImage\n getRotation\n tag:=\n createImage\nmethods-of:KittyWorld.new:\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n canvas:=\n backgroundColour\n background:=\n isRunning:=\n addEntity\n isInit\n mctx:=\n canvasWidth\n entities:=\n isInit:=\n backingContext\n backingContext:=\n canvasHeight:=\n start\n init\n canvasHeight\n entities\n canvas\n isRunning\n ent:=\n background\n stop\n ent\n backgroundColour:=\n setBackground\n canvasWidth:=\n document:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\npath:\n kitty\nfresh:Image()width()height:\n getTag\n elements\n width\n imgTag\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\nconstructors-of:KittyWorld:\n new\nconfidential:\nfresh:World:\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n canvas:=\n backingContext\n background:=\n isRunning:=\n addEntity\n isInit\n mctx:=\n canvasWidth\n entities:=\n isInit:=\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n backgroundColour\n canvas\n isRunning\n ent:=\n background\n stop\n ent\n backingContext:=\n setBackground\n canvasWidth:=\n document:=\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n tag\n awake\n strafe\n setAction\n tick\n getX\n createImage\n getRotation\n action:=\n setLocation\n getY\n image:=\n action\n posX:=\n posY:=\n image\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n tag:=\n move\n";
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
    "    method move(distance) {",
    "        posX := posX + distance * math.cos(rotation * 3.14159 / 180)",
    "        posY := posY + distance * math.sin(rotation * 3.14159 / 180)",
    "    }",
    "",
    "    method strafe(distance) {",
    "        posX := posX + distance * math.cos((90 + rotation) * 3.14159 / 180)",
    "        posY := posY + distance * math.sin((90 + rotation) * 3.14159 / 180)",
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
    "class KittyWorld.new() {",
    "",
    "    // print \"CREATING NEW WORLD...\"",
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
    "    var canvasWidth",
    "    var canvasHeight",
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
    "    // print \"WORLD CREATED\"",
    "}",
    "",
    "method World {",
    "    object {",
    "        inherits KittyWorld.new()",
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
