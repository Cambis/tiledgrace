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
  lineNumber = 154
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
      lineNumber = 155
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 155;
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
        lineNumber = 156
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
  func8.definitionLine = 154;
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
      obj13.definitionLine = 155;
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
  lineNumber = 162
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
      lineNumber = 163
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
  func16.definitionLine = 162;
  func16.definitionModule = "kitty";
  lineNumber = 166
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
      lineNumber = 168
      lineNumber = 167
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
  func18.definitionLine = 166;
  func18.definitionModule = "kitty";
  lineNumber = 319
  var func22 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 320
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 320;
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
        lineNumber = 321
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
  func22.definitionLine = 319;
  func22.definitionModule = "kitty";
  var func26 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 320;
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
  lineNumber = 328
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 330
      var string31 = new GraceString("CHECKING...");
      var call32 = Grace_print(string31);
      lineNumber = 337
      var if33 = var_done;
      lineNumber = 332
      var call34 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call34)) {
        lineNumber = 333
        var string35 = new GraceString("NO WORLD!!");
        var call36 = Grace_print(string35);
        lineNumber = 335
        return var_done
      }
      lineNumber = 337
      var string37 = new GraceString("STARTING...");
      var call38 = Grace_print(string37);
      lineNumber = 340
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
  func30.definitionLine = 328;
  func30.definitionModule = "kitty";
  lineNumber = 343
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 344
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
  func40.definitionLine = 343;
  func40.definitionModule = "kitty";
  lineNumber = 347
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
      lineNumber = 349
      lineNumber = 348
      var_m__95__world = var_world__39__;
      lineNumber = 350
      lineNumber = 349
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
  func42.definitionLine = 347;
  func42.definitionModule = "kitty";
  lineNumber = 352
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
      lineNumber = 353
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
  func44.definitionLine = 352;
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
  lineNumber = 344
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
  func47.definitionLine = 344;
  func47.definitionModule = "kitty";
  lineNumber = 344
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
  func48.definitionLine = 344;
  func48.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool49 = new GraceBoolean(false)
  var var_worldSet = bool49;
  lineNumber = 344
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
  func50.definitionLine = 344;
  func50.definitionModule = "kitty";
  lineNumber = 344
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
  func51.definitionLine = 344;
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
  lineNumber = 344
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
  func52.definitionLine = 344;
  func52.definitionModule = "kitty";
  lineNumber = 344
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
  func53.definitionLine = 344;
  func53.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 344
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
  func54.definitionLine = 344;
  func54.definitionModule = "kitty";
  lineNumber = 344
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
  func55.definitionLine = 344;
  func55.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 344
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
  func56.definitionLine = 344;
  func56.definitionModule = "kitty";
  lineNumber = 344
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
  func57.definitionLine = 344;
  func57.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call58 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call58;
  lineNumber = 344
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
  func59.definitionLine = 344;
  func59.definitionModule = "kitty";
  lineNumber = 344
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
  func60.definitionLine = 344;
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
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 117
              lineNumber = 142
              onSelf = true;
              var call286 = callmethod(this, "posX:=", [1], var_posX__39__);
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
            1,
          ];
          func285.variableArities = [
            false,
          ];
          obj173.methods["setX"] = func285;
          func285.definitionLine = 141;
          func285.definitionModule = "kitty";
          var func287 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 117
              lineNumber = 146
              onSelf = true;
              var call288 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func287.paramCounts = [
            1,
          ];
          func287.variableArities = [
            false,
          ];
          obj173.methods["setY"] = func287;
          func287.definitionLine = 145;
          func287.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 150
              onSelf = true;
              var call290 = callmethod(this, "rotation", [0]);
              return call290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func289.paramCounts = [
            0,
          ];
          func289.variableArities = [
            false,
          ];
          obj173.methods["getRotation"] = func289;
          func289.definitionLine = 149;
          func289.definitionModule = "kitty";
          sourceObject = obj173;
          lineNumber = 74
          obj173.data["tag"] = var_tag__39__;
          var reader_kitty_tag_291 = function() {
            return this.data["tag"];
          }
          obj173.methods["tag"] = reader_kitty_tag_291;
          obj173.data["tag"] = var_tag__39__;
          var writer_kitty_tag_291 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj173.methods["tag:="] = writer_kitty_tag_291;
          reader_kitty_tag_291.confidential = true;
          writer_kitty_tag_291.confidential = true;
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
          var reader_kitty_posX_292 = function() {
            return this.data["posX"];
          }
          obj173.methods["posX"] = reader_kitty_posX_292;
          obj173.data["posX"] = var_x__39__;
          var writer_kitty_posX_292 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj173.methods["posX:="] = writer_kitty_posX_292;
          reader_kitty_posX_292.confidential = true;
          writer_kitty_posX_292.confidential = true;
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
          var reader_kitty_posY_293 = function() {
            return this.data["posY"];
          }
          obj173.methods["posY"] = reader_kitty_posY_293;
          obj173.data["posY"] = var_y__39__;
          var writer_kitty_posY_293 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj173.methods["posY:="] = writer_kitty_posY_293;
          reader_kitty_posY_293.confidential = true;
          writer_kitty_posY_293.confidential = true;
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
          var reader_kitty_rotation_294 = function() {
            return this.data["rotation"];
          }
          obj173.methods["rotation"] = reader_kitty_rotation_294;
          obj173.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_294 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj173.methods["rotation:="] = writer_kitty_rotation_294;
          reader_kitty_rotation_294.confidential = true;
          writer_kitty_rotation_294.confidential = true;
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
          var block295 = Grace_allocObject();
          block295.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block295.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block295.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block295.methods["match"] = GraceBlock_match;
          block295.methods["prefix?"] = GraceBlock_lift;
          block295.receiver = this;
          block295.className = 'block<kitty:80>';
          block295.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj173.data["action"] = block295;
          var reader_kitty_action_296 = function() {
            return this.data["action"];
          }
          obj173.methods["action"] = reader_kitty_action_296;
          obj173.data["action"] = block295;
          var writer_kitty_action_296 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj173.methods["action:="] = writer_kitty_action_296;
          reader_kitty_action_296.confidential = true;
          writer_kitty_action_296.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block295)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj173.mutable = true;
          sourceObject = obj173;
          obj173.data["image"] = undefined;
          var reader_kitty_image_297 = function() {
            return this.data["image"];
          }
          obj173.methods["image"] = reader_kitty_image_297;
          obj173.data["image"] = undefined;
          var writer_kitty_image_297 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj173.methods["image:="] = writer_kitty_image_297;
          reader_kitty_image_297.confidential = true;
          writer_kitty_image_297.confidential = true;
          obj173.mutable = true;
          sourceObject = obj173;
          lineNumber = 82
          onSelf = true;
          var call298 = callmethod(this, "awake", [0]);
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
    func172.definitionLine = 70;
    func172.definitionModule = "kitty";
    var func299 = function(argcv) {
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
        var obj300 = Grace_allocObject();
        obj300.definitionModule = "kitty";
        obj300.definitionLine = 70;
        var inho300 = inheritingObject;
        while (inho300.superobj) inho300 = inho300.superobj;
        inho300.superobj = obj300;
        obj300.data = inheritingObject.data;
        obj300.outer = this;
        var reader_kitty_outer_301 = function() {
          return this.outer;
        }
        obj300.methods["outer"] = reader_kitty_outer_301;
        function obj_init_300() {
          var origSuperDepth = superDepth;
          superDepth = obj300;
          obj300.annotations = [];
          var func302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              var string303 = new GraceString("realyee.png");
              onSelf = true;
              var call304 = callmethod(this, "createImage", [1], string303);
              lineNumber = 88
              lineNumber = 87
              var_kitten = this;
              lineNumber = 88
              var call305 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call305
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
          obj300.methods["awake"] = func302;
          func302.definitionLine = 85;
          func302.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              onSelf = true;
              var call307 = callmethod(this, "action", [0]);
              var call308 = callmethod(call307,"apply", [0]);
              return call308
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func306.paramCounts = [
            0,
          ];
          func306.variableArities = [
            false,
          ];
          obj300.methods["tick"] = func306;
          func306.definitionLine = 91;
          func306.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 92
              lineNumber = 96
              onSelf = true;
              var call312 = callmethod(this, "rotation", [0]);
              var prod314 = callmethod(call312, "*", [1], new GraceNum(3.14159));
              var quotient316 = callmethod(prod314, "/", [1], new GraceNum(180));
              var call317 = callmethod(var_math,"cos", [1], quotient316);
              var prod320 = callmethod(var_distance, "*", [1], call317);
              onSelf = true;
              var call322 = callmethod(this, "posX", [0]);
              var opresult324 = callmethod(call322, "+", [1], prod320);
              onSelf = true;
              var call325 = callmethod(this, "posX:=", [1], opresult324);
              lineNumber = 97
              lineNumber = 92
              lineNumber = 97
              onSelf = true;
              var call328 = callmethod(this, "rotation", [0]);
              var prod330 = callmethod(call328, "*", [1], new GraceNum(3.14159));
              var quotient332 = callmethod(prod330, "/", [1], new GraceNum(180));
              var call333 = callmethod(var_math,"sin", [1], quotient332);
              var prod336 = callmethod(var_distance, "*", [1], call333);
              onSelf = true;
              var call338 = callmethod(this, "posY", [0]);
              var opresult340 = callmethod(call338, "+", [1], prod336);
              onSelf = true;
              var call341 = callmethod(this, "posY:=", [1], opresult340);
              return call341
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func309.paramCounts = [
            1,
          ];
          func309.variableArities = [
            false,
          ];
          obj300.methods["move"] = func309;
          func309.definitionLine = 95;
          func309.definitionModule = "kitty";
          var func342 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func342.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              lineNumber = 92
              lineNumber = 101
              onSelf = true;
              var call345 = callmethod(this, "rotation", [0]);
              var opresult348 = callmethod(new GraceNum(90), "+", [1], call345);
              var prod350 = callmethod(opresult348, "*", [1], new GraceNum(3.14159));
              var quotient352 = callmethod(prod350, "/", [1], new GraceNum(180));
              var call353 = callmethod(var_math,"cos", [1], quotient352);
              var prod356 = callmethod(var_distance, "*", [1], call353);
              onSelf = true;
              var call358 = callmethod(this, "posX", [0]);
              var opresult360 = callmethod(call358, "+", [1], prod356);
              onSelf = true;
              var call361 = callmethod(this, "posX:=", [1], opresult360);
              lineNumber = 102
              lineNumber = 92
              lineNumber = 102
              onSelf = true;
              var call364 = callmethod(this, "rotation", [0]);
              var opresult367 = callmethod(new GraceNum(90), "+", [1], call364);
              var prod369 = callmethod(opresult367, "*", [1], new GraceNum(3.14159));
              var quotient371 = callmethod(prod369, "/", [1], new GraceNum(180));
              var call372 = callmethod(var_math,"sin", [1], quotient371);
              var prod375 = callmethod(var_distance, "*", [1], call372);
              onSelf = true;
              var call377 = callmethod(this, "posY", [0]);
              var opresult379 = callmethod(call377, "+", [1], prod375);
              onSelf = true;
              var call380 = callmethod(this, "posY:=", [1], opresult379);
              return call380
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func342.paramCounts = [
            1,
          ];
          func342.variableArities = [
            false,
          ];
          obj300.methods["strafe"] = func342;
          func342.definitionLine = 100;
          func342.definitionModule = "kitty";
          var func381 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func381.paramCounts[0])
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
              var call383 = callmethod(this, "rotation", [0]);
              var opresult385 = callmethod(call383, "+", [1], var_angle);
              onSelf = true;
              var call386 = callmethod(this, "rotation:=", [1], opresult385);
              return call386
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func381.paramCounts = [
            1,
          ];
          func381.variableArities = [
            false,
          ];
          obj300.methods["turn"] = func381;
          func381.definitionLine = 105;
          func381.definitionModule = "kitty";
          var func387 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func387.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              var call388 = callmethod(var_ctx,"save", [0]);
              lineNumber = 111
              onSelf = true;
              var call389 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call390 = callmethod(this, "posY", [0]);
              var call391 = callmethod(var_ctx,"translate", [2], call389, call390);
              lineNumber = 112
              onSelf = true;
              var call392 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call393 = callmethod(this, "image", [0]);
              var call394 = callmethod(call393,"draw", [4], var_ctx, var_dx, var_dy, call392);
              lineNumber = 113
              var call395 = callmethod(var_ctx,"restore", [0]);
              return call395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func387.paramCounts = [
            3,
          ];
          func387.variableArities = [
            false,
          ];
          obj300.methods["draw"] = func387;
          func387.definitionLine = 109;
          func387.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 113
              lineNumber = 117
              var call397 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call398 = callmethod(call397, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call399 = callmethod(call398, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call400 = callmethod(this, "image:=", [1], call399);
              return call400
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func396.paramCounts = [
            1,
          ];
          func396.variableArities = [
            false,
          ];
          obj300.methods["createImage"] = func396;
          func396.definitionLine = 116;
          func396.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 117
              lineNumber = 121
              onSelf = true;
              var call402 = callmethod(this, "image:=", [1], var_image__39__);
              return call402
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func401.paramTypes = [];
          func401.paramTypes.push([]);
          func401.paramCounts = [
            1,
          ];
          func401.variableArities = [
            false,
          ];
          obj300.methods["setImage"] = func401;
          func401.definitionLine = 120;
          func401.definitionModule = "kitty";
          var func403 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func403.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 117
              lineNumber = 125
              onSelf = true;
              var call404 = callmethod(this, "action:=", [1], var_action__39__);
              return call404
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func403.paramCounts = [
            1,
          ];
          func403.variableArities = [
            false,
          ];
          obj300.methods["setAction"] = func403;
          func403.definitionLine = 124;
          func403.definitionModule = "kitty";
          var func405 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func405.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 117
              lineNumber = 129
              onSelf = true;
              var call406 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 131
              lineNumber = 117
              lineNumber = 130
              onSelf = true;
              var call407 = callmethod(this, "posY:=", [1], var_y);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func405.paramCounts = [
            2,
          ];
          func405.variableArities = [
            false,
          ];
          obj300.methods["setLocation"] = func405;
          func405.definitionLine = 128;
          func405.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 134
              onSelf = true;
              var call409 = callmethod(this, "posX", [0]);
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
          obj300.methods["getX"] = func408;
          func408.definitionLine = 133;
          func408.definitionModule = "kitty";
          var func410 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func410.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              lineNumber = 138
              onSelf = true;
              var call411 = callmethod(this, "posY", [0]);
              return call411
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func410.paramCounts = [
            0,
          ];
          func410.variableArities = [
            false,
          ];
          obj300.methods["getY"] = func410;
          func410.definitionLine = 137;
          func410.definitionModule = "kitty";
          var func412 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func412.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 117
              lineNumber = 142
              onSelf = true;
              var call413 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func412.paramCounts = [
            1,
          ];
          func412.variableArities = [
            false,
          ];
          obj300.methods["setX"] = func412;
          func412.definitionLine = 141;
          func412.definitionModule = "kitty";
          var func414 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 117
              lineNumber = 146
              onSelf = true;
              var call415 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call415
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func414.paramCounts = [
            1,
          ];
          func414.variableArities = [
            false,
          ];
          obj300.methods["setY"] = func414;
          func414.definitionLine = 145;
          func414.definitionModule = "kitty";
          var func416 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func416.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 150
              onSelf = true;
              var call417 = callmethod(this, "rotation", [0]);
              return call417
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func416.paramCounts = [
            0,
          ];
          func416.variableArities = [
            false,
          ];
          obj300.methods["getRotation"] = func416;
          func416.definitionLine = 149;
          func416.definitionModule = "kitty";
          sourceObject = obj300;
          lineNumber = 74
          obj300.data["tag"] = var_tag__39__;
          var reader_kitty_tag_418 = function() {
            return this.data["tag"];
          }
          obj300.methods["tag"] = reader_kitty_tag_418;
          obj300.data["tag"] = var_tag__39__;
          var writer_kitty_tag_418 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj300.methods["tag:="] = writer_kitty_tag_418;
          reader_kitty_tag_418.confidential = true;
          writer_kitty_tag_418.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 75
          obj300.data["posX"] = var_x__39__;
          var reader_kitty_posX_419 = function() {
            return this.data["posX"];
          }
          obj300.methods["posX"] = reader_kitty_posX_419;
          obj300.data["posX"] = var_x__39__;
          var writer_kitty_posX_419 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj300.methods["posX:="] = writer_kitty_posX_419;
          reader_kitty_posX_419.confidential = true;
          writer_kitty_posX_419.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 76
          obj300.data["posY"] = var_y__39__;
          var reader_kitty_posY_420 = function() {
            return this.data["posY"];
          }
          obj300.methods["posY"] = reader_kitty_posY_420;
          obj300.data["posY"] = var_y__39__;
          var writer_kitty_posY_420 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj300.methods["posY:="] = writer_kitty_posY_420;
          reader_kitty_posY_420.confidential = true;
          writer_kitty_posY_420.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 77
          obj300.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_421 = function() {
            return this.data["rotation"];
          }
          obj300.methods["rotation"] = reader_kitty_rotation_421;
          obj300.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_421 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj300.methods["rotation:="] = writer_kitty_rotation_421;
          reader_kitty_rotation_421.confidential = true;
          writer_kitty_rotation_421.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 80
          var block422 = Grace_allocObject();
          block422.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block422.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block422.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block422.methods["match"] = GraceBlock_match;
          block422.methods["prefix?"] = GraceBlock_lift;
          block422.receiver = this;
          block422.className = 'block<kitty:80>';
          block422.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj300.data["action"] = block422;
          var reader_kitty_action_423 = function() {
            return this.data["action"];
          }
          obj300.methods["action"] = reader_kitty_action_423;
          obj300.data["action"] = block422;
          var writer_kitty_action_423 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj300.methods["action:="] = writer_kitty_action_423;
          reader_kitty_action_423.confidential = true;
          writer_kitty_action_423.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block422)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["image"] = undefined;
          var reader_kitty_image_424 = function() {
            return this.data["image"];
          }
          obj300.methods["image"] = reader_kitty_image_424;
          obj300.data["image"] = undefined;
          var writer_kitty_image_424 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj300.methods["image:="] = writer_kitty_image_424;
          reader_kitty_image_424.confidential = true;
          writer_kitty_image_424.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 82
          onSelf = true;
          var call425 = callmethod(this, "awake", [0]);
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          superDepth = origSuperDepth;
        }
        obj_init_300.apply(inheritingObject, []);
        return obj300
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj170.methods["new()object"] = func299;
    var func426 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 70
        var string427 = new GraceString("class KittyEntity");
        return string427
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func426.paramCounts = [
    ];
    func426.variableArities = [
    ];
    obj170.methods["asDebugString"] = func426;
    func426.definitionLine = 70;
    func426.definitionModule = "kitty";
    sourceObject = obj170;
    sourceObject = obj170;
    superDepth = origSuperDepth;
  }
  obj_init_170.apply(obj170, []);
  var var_KittyEntity = obj170;
  lineNumber = 154
  lineNumber = 162
  lineNumber = 166
  lineNumber = 172
  var func428 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func428.paramCounts[0])
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
  func428.paramCounts = [
    0,
  ];
  func428.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func428;
  func428.definitionLine = 172;
  func428.definitionModule = "kitty";
  var obj429 = Grace_allocObject();
  obj429.definitionModule = "kitty";
  obj429.definitionLine = 172;
  obj429.outer = this;
  var reader_kitty_outer_430 = function() {
    return this.outer;
  }
  obj429.methods["outer"] = reader_kitty_outer_430;
  function obj_init_429() {
    var origSuperDepth = superDepth;
    superDepth = obj429;
    obj429.annotations = [];
    var func431 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func431.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj432 = Grace_allocObject();
        obj432.definitionModule = "kitty";
        obj432.definitionLine = 172;
        obj432.outer = this;
        var reader_kitty_outer_433 = function() {
          return this.outer;
        }
        obj432.methods["outer"] = reader_kitty_outer_433;
        function obj_init_432() {
          var origSuperDepth = superDepth;
          superDepth = obj432;
          obj432.annotations = [];
          var func434 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func434.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 207
              var if435 = var_done;
              lineNumber = 203
              onSelf = true;
              var call436 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call436)) {
                lineNumber = 205
                lineNumber = 204
                var bool437 = new GraceBoolean(false)
                return bool437
              }
              lineNumber = 208
              lineNumber = 172
              lineNumber = 207
              var call438 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call439 = callmethod(this, "document:=", [1], call438);
              lineNumber = 208
              lineNumber = 207
              lineNumber = 208
              var string440 = new GraceString("standard-canvas");
              onSelf = true;
              var call441 = callmethod(this, "document", [0]);
              var call442 = callmethod(call441,"getElementById", [1], string440);
              onSelf = true;
              var call443 = callmethod(this, "canvas:=", [1], call442);
              lineNumber = 210
              lineNumber = 207
              lineNumber = 209
              onSelf = true;
              var call444 = callmethod(this, "canvas", [0]);
              var call445 = callmethod(call444,"width", [0]);
              onSelf = true;
              var call446 = callmethod(this, "canvasWidth:=", [1], call445);
              lineNumber = 213
              lineNumber = 209
              lineNumber = 210
              onSelf = true;
              var call447 = callmethod(this, "canvas", [0]);
              var call448 = callmethod(call447,"height", [0]);
              onSelf = true;
              var call449 = callmethod(this, "canvasHeight:=", [1], call448);
              lineNumber = 225
              var block450 = Grace_allocObject();
              block450.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block450.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block450.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block450.methods["match"] = GraceBlock_match;
              block450.methods["prefix?"] = GraceBlock_lift;
              block450.receiver = this;
              block450.className = 'block<kitty:225>';
              block450.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                lineNumber = 215
                onSelf = true;
                var call451 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call453 = callmethod(this, "canvas", [0]);
                var call454 = callmethod(call453,"offsetWidth", [0]);
                onSelf = true;
                var call456 = callmethod(this, "canvas", [0]);
                var call457 = callmethod(call456,"offsetLeft", [0]);
                var call459 = callmethod(var_ev,"clientX", [0]);
                var diff461 = callmethod(call459, "-", [1], call457);
                var quotient463 = callmethod(diff461, "/", [1], call454);
                var prod465 = callmethod(quotient463, "*", [1], call451);
                var var_x = prod465;
                lineNumber = 216;
                moduleName = "kitty";
                lineNumber = 215
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 220
                lineNumber = 216
                onSelf = true;
                var call466 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call468 = callmethod(this, "canvas", [0]);
                var call469 = callmethod(call468,"offsetHeight", [0]);
                onSelf = true;
                var call471 = callmethod(this, "canvas", [0]);
                var call472 = callmethod(call471,"offsetTop", [0]);
                var call474 = callmethod(var_ev,"clientY", [0]);
                var diff476 = callmethod(call474, "-", [1], call472);
                var quotient478 = callmethod(diff476, "/", [1], call469);
                var prod480 = callmethod(quotient478, "*", [1], call466);
                var var_y = prod480;
                lineNumber = 220;
                moduleName = "kitty";
                lineNumber = 216
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 224
                var if481 = var_done;
                lineNumber = 220
                var opresult484 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call487 = callmethod(this, "canvasWidth", [0]);
                var diff489 = callmethod(call487, "-", [1], new GraceNum(20));
                var opresult492 = callmethod(var_x, ">", [1], diff489);
                var opresult494 = callmethod(opresult492, "&&", [1], opresult484);
                if (Grace_isTrue(opresult494)) {
                  lineNumber = 221
                  var call495 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 222
                  onSelf = true;
                  var call496 = callmethod(this, "stop", [0]);
                  if481 = call496;
                }
                return if481;
              };
              var_mouseDownListener = block450;
              lineNumber = 225
              var string497 = new GraceString("mousedown");
              onSelf = true;
              var call498 = callmethod(this, "canvas", [0]);
              var call499 = callmethod(call498,"addEventListener", [2], string497, var_mouseDownListener);
              lineNumber = 235
              var block500 = Grace_allocObject();
              block500.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block500.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block500.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block500.methods["match"] = GraceBlock_match;
              block500.methods["prefix?"] = GraceBlock_lift;
              block500.receiver = this;
              block500.className = 'block<kitty:235>';
              block500.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 233
                var if501 = var_done;
                lineNumber = 230
                var call503 = callmethod(var_ev,"keyCode", [0]);
                var opresult505 = callmethod(call503, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult505)) {
                  lineNumber = 231
                  onSelf = true;
                  var call506 = callmethod(this, "stop", [0]);
                  if501 = call506;
                }
                lineNumber = 234
                lineNumber = 233
                var call507 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call507;
                return call507;
              };
              var_keyDownListener = block500;
              lineNumber = 235
              var string508 = new GraceString("keydown");
              onSelf = true;
              var call509 = callmethod(this, "document", [0]);
              var call510 = callmethod(call509,"addEventListener", [2], string508, var_keyDownListener);
              lineNumber = 241
              var block511 = Grace_allocObject();
              block511.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block511.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block511.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block511.methods["match"] = GraceBlock_match;
              block511.methods["prefix?"] = GraceBlock_lift;
              block511.receiver = this;
              block511.className = 'block<kitty:241>';
              block511.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 240
                lineNumber = 239
                var call512 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call512;
                return call512;
              };
              var_keyUpListener = block511;
              lineNumber = 241
              var string513 = new GraceString("keyup");
              onSelf = true;
              var call514 = callmethod(this, "document", [0]);
              var call515 = callmethod(call514,"addEventListener", [2], string513, var_keyUpListener);
              lineNumber = 243
              lineNumber = 233
              lineNumber = 243
              var string516 = new GraceString("canvas");
              var call517 = callmethod(var_dom,"document", [0]);
              var call518 = callmethod(call517,"createElement", [1], string516);
              onSelf = true;
              var call519 = callmethod(this, "backingCanvas:=", [1], call518);
              lineNumber = 245
              lineNumber = 243
              lineNumber = 244
              onSelf = true;
              var call520 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call521 = callmethod(this, "backingCanvas", [0]);
              var call522 = callmethod(call521,"height:=", [1], call520);
              lineNumber = 246
              lineNumber = 243
              lineNumber = 245
              onSelf = true;
              var call523 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call524 = callmethod(this, "backingCanvas", [0]);
              var call525 = callmethod(call524,"width:=", [1], call523);
              lineNumber = 246
              lineNumber = 243
              lineNumber = 246
              var string526 = new GraceString("2d");
              onSelf = true;
              var call527 = callmethod(this, "backingCanvas", [0]);
              var call528 = callmethod(call527,"getContext", [1], string526);
              onSelf = true;
              var call529 = callmethod(this, "backingContext:=", [1], call528);
              lineNumber = 247
              lineNumber = 243
              lineNumber = 247
              var string530 = new GraceString("2d");
              onSelf = true;
              var call531 = callmethod(this, "canvas", [0]);
              var call532 = callmethod(call531,"getContext", [1], string530);
              onSelf = true;
              var call533 = callmethod(this, "mctx:=", [1], call532);
              lineNumber = 250
              var string534 = new GraceString("doggo.jpg");
              onSelf = true;
              var call535 = callmethod(this, "setBackground", [1], string534);
              lineNumber = 259
              lineNumber = 243
              lineNumber = 256
              var bool536 = new GraceBoolean(true)
              onSelf = true;
              var call537 = callmethod(this, "isInit:=", [1], bool536);
              lineNumber = 259
              var call538 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call539 = callmethod(call538, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call540 = callmethod(call539, "setWorld", [1], this);
              return call540
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func434.paramCounts = [
            0,
          ];
          func434.variableArities = [
            false,
          ];
          obj432.methods["init"] = func434;
          func434.definitionLine = 199;
          func434.definitionModule = "kitty";
          var func541 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func541.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 259
              lineNumber = 270
              var bool542 = new GraceBoolean(true)
              onSelf = true;
              var call543 = callmethod(this, "isRunning:=", [1], bool542);
              lineNumber = 271
              var block544 = Grace_allocObject();
              block544.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block544.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block544.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block544.methods["match"] = GraceBlock_match;
              block544.methods["prefix?"] = GraceBlock_lift;
              block544.receiver = this;
              block544.className = 'block<kitty:271>';
              block544.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call545 = callmethod(this, "isRunning", [0]);
                return call545;
              };
              lineNumber = 275
              var block546 = Grace_allocObject();
              block546.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block546.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block546.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block546.methods["match"] = GraceBlock_match;
              block546.methods["prefix?"] = GraceBlock_lift;
              block546.receiver = this;
              block546.className = 'block<kitty:275>';
              block546.real = function(
              ) {
                sourceObject = this;
                lineNumber = 272
                onSelf = true;
                var call547 = callmethod(this, "update", [0]);
                return call547;
              };
              lineNumber = 271
              var call548 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block544, new GraceNum(10), block546);
              return call548
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
          obj432.methods["start"] = func541;
          func541.definitionLine = 268;
          func541.definitionModule = "kitty";
          var func549 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func549.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              lineNumber = 259
              lineNumber = 283
              onSelf = true;
              var call550 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call551 = callmethod(this, "mctx", [0]);
              var call552 = callmethod(call551,"fillStyle:=", [1], call550);
              lineNumber = 284
              onSelf = true;
              var call553 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call554 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call555 = callmethod(this, "mctx", [0]);
              var call556 = callmethod(call555,"fillRect", [4], new GraceNum(0), new GraceNum(0), call553, call554);
              lineNumber = 285
              onSelf = true;
              var call557 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call558 = callmethod(this, "mctx", [0]);
              var call559 = callmethod(call558,"drawImage", [3], call557, new GraceNum(0), new GraceNum(0));
              lineNumber = 286
              onSelf = true;
              var call560 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call562 = callmethod(this, "canvasWidth", [0]);
              var quotient564 = callmethod(call562, "/", [1], new GraceNum(2));
              onSelf = true;
              var call566 = callmethod(this, "canvasHeight", [0]);
              var quotient568 = callmethod(call566, "/", [1], new GraceNum(2));
              onSelf = true;
              var call569 = callmethod(this, "background", [0]);
              var call570 = callmethod(call569,"draw", [4], call560, quotient564, quotient568, new GraceNum(0));
              lineNumber = 289
              onSelf = true;
              var call571 = callmethod(this, "entities", [0]);
              lineNumber = 295
              var block572 = Grace_allocObject();
              block572.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block572.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block572.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block572.methods["match"] = GraceBlock_match;
              block572.methods["prefix?"] = GraceBlock_lift;
              block572.receiver = this;
              block572.className = 'block<kitty:295>';
              block572.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 290
                var call573 = callmethod(var_entity,"tick", [0]);
                lineNumber = 291
                onSelf = true;
                var call574 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call576 = callmethod(this, "canvasWidth", [0]);
                var quotient578 = callmethod(call576, "/", [1], new GraceNum(2));
                onSelf = true;
                var call580 = callmethod(this, "canvasHeight", [0]);
                var quotient582 = callmethod(call580, "/", [1], new GraceNum(2));
                var call583 = callmethod(var_entity,"draw", [3], call574, quotient578, quotient582);
                return call583;
              };
              var call584 = callmethod(Grace_prelude,"for()do", [1, 1], call571, block572);
              return call584
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func549.paramCounts = [
            0,
          ];
          func549.variableArities = [
            false,
          ];
          obj432.methods["update"] = func549;
          func549.definitionLine = 278;
          func549.definitionModule = "kitty";
          var func585 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func585.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              var string586 = new GraceString("WORLD STOPPING...");
              var call587 = Grace_print(string586);
              lineNumber = 300
              lineNumber = 290
              lineNumber = 299
              var bool588 = new GraceBoolean(false)
              onSelf = true;
              var call589 = callmethod(this, "isRunning:=", [1], bool588);
              lineNumber = 300
              var string590 = new GraceString("mousedown");
              onSelf = true;
              var call591 = callmethod(this, "canvas", [0]);
              var call592 = callmethod(call591,"removeEventListener", [2], string590, var_mouseDownListener);
              lineNumber = 301
              var string593 = new GraceString("keydown");
              onSelf = true;
              var call594 = callmethod(this, "document", [0]);
              var call595 = callmethod(call594,"removeEventListener", [2], string593, var_keyDownListener);
              lineNumber = 302
              var string596 = new GraceString("keyup");
              onSelf = true;
              var call597 = callmethod(this, "document", [0]);
              var call598 = callmethod(call597,"removeEventListener", [2], string596, var_keyUpListener);
              return call598
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func585.paramCounts = [
            0,
          ];
          func585.variableArities = [
            false,
          ];
          obj432.methods["stop"] = func585;
          func585.definitionLine = 297;
          func585.definitionModule = "kitty";
          var func599 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 290
              lineNumber = 306
              onSelf = true;
              var call600 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call601 = callmethod(this, "canvasHeight", [0]);
              var call602 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call603 = callmethod(call602, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call604 = callmethod(call603, "Image()width()height", [1, 1, 1], var_url, call600, call601);
              onSelf = true;
              var call605 = callmethod(this, "background:=", [1], call604);
              return call605
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func599.paramCounts = [
            1,
          ];
          func599.variableArities = [
            false,
          ];
          obj432.methods["setBackground"] = func599;
          func599.definitionLine = 305;
          func599.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              onSelf = true;
              var call607 = callmethod(this, "entities", [0]);
              var call608 = callmethod(call607,"push", [1], var_e);
              return call608
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func606.paramCounts = [
            1,
          ];
          func606.variableArities = [
            false,
          ];
          obj432.methods["addEntity"] = func606;
          func606.definitionLine = 309;
          func606.definitionModule = "kitty";
          var func609 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func609.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 315
              lineNumber = 314
              onSelf = true;
              var call610 = callmethod(this, "mctx", [0]);
              return call610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func609.paramCounts = [
            0,
          ];
          func609.variableArities = [
            false,
          ];
          obj432.methods["getContext"] = func609;
          func609.definitionLine = 313;
          func609.definitionModule = "kitty";
          sourceObject = obj432;
          obj432.data["background"] = undefined;
          var reader_kitty_background_611 = function() {
            return this.data["background"];
          }
          obj432.methods["background"] = reader_kitty_background_611;
          obj432.data["background"] = undefined;
          var writer_kitty_background_611 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj432.methods["background:="] = writer_kitty_background_611;
          reader_kitty_background_611.confidential = true;
          writer_kitty_background_611.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          lineNumber = 177
          var string612 = new GraceString("black");
          obj432.data["backgroundColour"] = string612;
          var reader_kitty_backgroundColour_613 = function() {
            return this.data["backgroundColour"];
          }
          obj432.methods["backgroundColour"] = reader_kitty_backgroundColour_613;
          obj432.data["backgroundColour"] = string612;
          var writer_kitty_backgroundColour_613 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj432.methods["backgroundColour:="] = writer_kitty_backgroundColour_613;
          reader_kitty_backgroundColour_613.confidential = true;
          writer_kitty_backgroundColour_613.confidential = true;
          lineNumber = 179;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["document"] = undefined;
          var reader_kitty_document_614 = function() {
            return this.data["document"];
          }
          obj432.methods["document"] = reader_kitty_document_614;
          obj432.data["document"] = undefined;
          var writer_kitty_document_614 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj432.methods["document:="] = writer_kitty_document_614;
          reader_kitty_document_614.confidential = true;
          writer_kitty_document_614.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_615 = function() {
            return this.data["backingCanvas"];
          }
          obj432.methods["backingCanvas"] = reader_kitty_backingCanvas_615;
          obj432.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_615 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj432.methods["backingCanvas:="] = writer_kitty_backingCanvas_615;
          reader_kitty_backingCanvas_615.confidential = true;
          writer_kitty_backingCanvas_615.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["backingContext"] = undefined;
          var reader_kitty_backingContext_616 = function() {
            return this.data["backingContext"];
          }
          obj432.methods["backingContext"] = reader_kitty_backingContext_616;
          obj432.data["backingContext"] = undefined;
          var writer_kitty_backingContext_616 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj432.methods["backingContext:="] = writer_kitty_backingContext_616;
          reader_kitty_backingContext_616.confidential = true;
          writer_kitty_backingContext_616.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["canvas"] = undefined;
          var reader_kitty_canvas_617 = function() {
            return this.data["canvas"];
          }
          obj432.methods["canvas"] = reader_kitty_canvas_617;
          obj432.data["canvas"] = undefined;
          var writer_kitty_canvas_617 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj432.methods["canvas:="] = writer_kitty_canvas_617;
          reader_kitty_canvas_617.confidential = true;
          writer_kitty_canvas_617.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_618 = function() {
            return this.data["canvasWidth"];
          }
          obj432.methods["canvasWidth"] = reader_kitty_canvasWidth_618;
          obj432.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_618 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj432.methods["canvasWidth:="] = writer_kitty_canvasWidth_618;
          reader_kitty_canvasWidth_618.confidential = true;
          writer_kitty_canvasWidth_618.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_619 = function() {
            return this.data["canvasHeight"];
          }
          obj432.methods["canvasHeight"] = reader_kitty_canvasHeight_619;
          obj432.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_619 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj432.methods["canvasHeight:="] = writer_kitty_canvasHeight_619;
          reader_kitty_canvasHeight_619.confidential = true;
          writer_kitty_canvasHeight_619.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          lineNumber = 188
          var call620 = callmethod(var_collections,"list", [0]);
          var call621 = callmethod(call620,"new", [0]);
          obj432.data["entities"] = call621;
          var reader_kitty_entities_622 = function() {
            return this.data["entities"];
          }
          obj432.methods["entities"] = reader_kitty_entities_622;
          obj432.data["entities"] = call621;
          var writer_kitty_entities_622 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj432.methods["entities:="] = writer_kitty_entities_622;
          reader_kitty_entities_622.confidential = true;
          writer_kitty_entities_622.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call621)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj432.mutable = true;
          sourceObject = obj432;
          lineNumber = 190
          var bool623 = new GraceBoolean(false)
          obj432.data["isInit"] = bool623;
          var reader_kitty_isInit_624 = function() {
            return this.data["isInit"];
          }
          obj432.methods["isInit"] = reader_kitty_isInit_624;
          obj432.data["isInit"] = bool623;
          var writer_kitty_isInit_624 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj432.methods["isInit:="] = writer_kitty_isInit_624;
          reader_kitty_isInit_624.confidential = true;
          writer_kitty_isInit_624.confidential = true;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool623)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj432.mutable = true;
          sourceObject = obj432;
          lineNumber = 191
          var bool625 = new GraceBoolean(false)
          obj432.data["isRunning"] = bool625;
          var reader_kitty_isRunning_626 = function() {
            return this.data["isRunning"];
          }
          obj432.methods["isRunning"] = reader_kitty_isRunning_626;
          obj432.data["isRunning"] = bool625;
          var writer_kitty_isRunning_626 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj432.methods["isRunning:="] = writer_kitty_isRunning_626;
          reader_kitty_isRunning_626.confidential = true;
          writer_kitty_isRunning_626.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool625)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["mctx"] = undefined;
          var reader_kitty_mctx_627 = function() {
            return this.data["mctx"];
          }
          obj432.methods["mctx"] = reader_kitty_mctx_627;
          obj432.data["mctx"] = undefined;
          var writer_kitty_mctx_627 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj432.methods["mctx:="] = writer_kitty_mctx_627;
          reader_kitty_mctx_627.confidential = true;
          writer_kitty_mctx_627.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          obj432.data["ent"] = undefined;
          var reader_kitty_ent_628 = function() {
            return this.data["ent"];
          }
          obj432.methods["ent"] = reader_kitty_ent_628;
          obj432.data["ent"] = undefined;
          var writer_kitty_ent_628 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj432.methods["ent:="] = writer_kitty_ent_628;
          reader_kitty_ent_628.confidential = true;
          writer_kitty_ent_628.confidential = true;
          obj432.mutable = true;
          sourceObject = obj432;
          lineNumber = 196
          onSelf = true;
          var call629 = callmethod(this, "init", [0]);
          sourceObject = obj432;
          sourceObject = obj432;
          sourceObject = obj432;
          sourceObject = obj432;
          sourceObject = obj432;
          sourceObject = obj432;
          sourceObject = obj432;
          superDepth = origSuperDepth;
        }
        obj_init_432.apply(obj432, []);
        return obj432
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func431.paramCounts = [
      0,
    ];
    func431.variableArities = [
      false,
    ];
    obj429.methods["new"] = func431;
    func431.definitionLine = 172;
    func431.definitionModule = "kitty";
    var func630 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj631 = Grace_allocObject();
        obj631.definitionModule = "kitty";
        obj631.definitionLine = 172;
        var inho631 = inheritingObject;
        while (inho631.superobj) inho631 = inho631.superobj;
        inho631.superobj = obj631;
        obj631.data = inheritingObject.data;
        obj631.outer = this;
        var reader_kitty_outer_632 = function() {
          return this.outer;
        }
        obj631.methods["outer"] = reader_kitty_outer_632;
        function obj_init_631() {
          var origSuperDepth = superDepth;
          superDepth = obj631;
          obj631.annotations = [];
          var func633 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 207
              var if634 = var_done;
              lineNumber = 203
              onSelf = true;
              var call635 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call635)) {
                lineNumber = 205
                lineNumber = 204
                var bool636 = new GraceBoolean(false)
                return bool636
              }
              lineNumber = 208
              lineNumber = 188
              lineNumber = 207
              var call637 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call638 = callmethod(this, "document:=", [1], call637);
              lineNumber = 208
              lineNumber = 207
              lineNumber = 208
              var string639 = new GraceString("standard-canvas");
              onSelf = true;
              var call640 = callmethod(this, "document", [0]);
              var call641 = callmethod(call640,"getElementById", [1], string639);
              onSelf = true;
              var call642 = callmethod(this, "canvas:=", [1], call641);
              lineNumber = 210
              lineNumber = 207
              lineNumber = 209
              onSelf = true;
              var call643 = callmethod(this, "canvas", [0]);
              var call644 = callmethod(call643,"width", [0]);
              onSelf = true;
              var call645 = callmethod(this, "canvasWidth:=", [1], call644);
              lineNumber = 213
              lineNumber = 209
              lineNumber = 210
              onSelf = true;
              var call646 = callmethod(this, "canvas", [0]);
              var call647 = callmethod(call646,"height", [0]);
              onSelf = true;
              var call648 = callmethod(this, "canvasHeight:=", [1], call647);
              lineNumber = 225
              var block649 = Grace_allocObject();
              block649.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block649.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block649.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block649.methods["match"] = GraceBlock_match;
              block649.methods["prefix?"] = GraceBlock_lift;
              block649.receiver = this;
              block649.className = 'block<kitty:225>';
              block649.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                lineNumber = 215
                onSelf = true;
                var call650 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call652 = callmethod(this, "canvas", [0]);
                var call653 = callmethod(call652,"offsetWidth", [0]);
                onSelf = true;
                var call655 = callmethod(this, "canvas", [0]);
                var call656 = callmethod(call655,"offsetLeft", [0]);
                var call658 = callmethod(var_ev,"clientX", [0]);
                var diff660 = callmethod(call658, "-", [1], call656);
                var quotient662 = callmethod(diff660, "/", [1], call653);
                var prod664 = callmethod(quotient662, "*", [1], call650);
                var var_x = prod664;
                lineNumber = 216;
                moduleName = "kitty";
                lineNumber = 215
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 220
                lineNumber = 216
                onSelf = true;
                var call665 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call667 = callmethod(this, "canvas", [0]);
                var call668 = callmethod(call667,"offsetHeight", [0]);
                onSelf = true;
                var call670 = callmethod(this, "canvas", [0]);
                var call671 = callmethod(call670,"offsetTop", [0]);
                var call673 = callmethod(var_ev,"clientY", [0]);
                var diff675 = callmethod(call673, "-", [1], call671);
                var quotient677 = callmethod(diff675, "/", [1], call668);
                var prod679 = callmethod(quotient677, "*", [1], call665);
                var var_y = prod679;
                lineNumber = 220;
                moduleName = "kitty";
                lineNumber = 216
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 224
                var if680 = var_done;
                lineNumber = 220
                var opresult683 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call686 = callmethod(this, "canvasWidth", [0]);
                var diff688 = callmethod(call686, "-", [1], new GraceNum(20));
                var opresult691 = callmethod(var_x, ">", [1], diff688);
                var opresult693 = callmethod(opresult691, "&&", [1], opresult683);
                if (Grace_isTrue(opresult693)) {
                  lineNumber = 221
                  var call694 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 222
                  onSelf = true;
                  var call695 = callmethod(this, "stop", [0]);
                  if680 = call695;
                }
                return if680;
              };
              var_mouseDownListener = block649;
              lineNumber = 225
              var string696 = new GraceString("mousedown");
              onSelf = true;
              var call697 = callmethod(this, "canvas", [0]);
              var call698 = callmethod(call697,"addEventListener", [2], string696, var_mouseDownListener);
              lineNumber = 235
              var block699 = Grace_allocObject();
              block699.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block699.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block699.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block699.methods["match"] = GraceBlock_match;
              block699.methods["prefix?"] = GraceBlock_lift;
              block699.receiver = this;
              block699.className = 'block<kitty:235>';
              block699.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 233
                var if700 = var_done;
                lineNumber = 230
                var call702 = callmethod(var_ev,"keyCode", [0]);
                var opresult704 = callmethod(call702, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult704)) {
                  lineNumber = 231
                  onSelf = true;
                  var call705 = callmethod(this, "stop", [0]);
                  if700 = call705;
                }
                lineNumber = 234
                lineNumber = 233
                var call706 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call706;
                return call706;
              };
              var_keyDownListener = block699;
              lineNumber = 235
              var string707 = new GraceString("keydown");
              onSelf = true;
              var call708 = callmethod(this, "document", [0]);
              var call709 = callmethod(call708,"addEventListener", [2], string707, var_keyDownListener);
              lineNumber = 241
              var block710 = Grace_allocObject();
              block710.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block710.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block710.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block710.methods["match"] = GraceBlock_match;
              block710.methods["prefix?"] = GraceBlock_lift;
              block710.receiver = this;
              block710.className = 'block<kitty:241>';
              block710.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 240
                lineNumber = 239
                var call711 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call711;
                return call711;
              };
              var_keyUpListener = block710;
              lineNumber = 241
              var string712 = new GraceString("keyup");
              onSelf = true;
              var call713 = callmethod(this, "document", [0]);
              var call714 = callmethod(call713,"addEventListener", [2], string712, var_keyUpListener);
              lineNumber = 243
              lineNumber = 233
              lineNumber = 243
              var string715 = new GraceString("canvas");
              var call716 = callmethod(var_dom,"document", [0]);
              var call717 = callmethod(call716,"createElement", [1], string715);
              onSelf = true;
              var call718 = callmethod(this, "backingCanvas:=", [1], call717);
              lineNumber = 245
              lineNumber = 243
              lineNumber = 244
              onSelf = true;
              var call719 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call720 = callmethod(this, "backingCanvas", [0]);
              var call721 = callmethod(call720,"height:=", [1], call719);
              lineNumber = 246
              lineNumber = 243
              lineNumber = 245
              onSelf = true;
              var call722 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call723 = callmethod(this, "backingCanvas", [0]);
              var call724 = callmethod(call723,"width:=", [1], call722);
              lineNumber = 246
              lineNumber = 243
              lineNumber = 246
              var string725 = new GraceString("2d");
              onSelf = true;
              var call726 = callmethod(this, "backingCanvas", [0]);
              var call727 = callmethod(call726,"getContext", [1], string725);
              onSelf = true;
              var call728 = callmethod(this, "backingContext:=", [1], call727);
              lineNumber = 247
              lineNumber = 243
              lineNumber = 247
              var string729 = new GraceString("2d");
              onSelf = true;
              var call730 = callmethod(this, "canvas", [0]);
              var call731 = callmethod(call730,"getContext", [1], string729);
              onSelf = true;
              var call732 = callmethod(this, "mctx:=", [1], call731);
              lineNumber = 250
              var string733 = new GraceString("doggo.jpg");
              onSelf = true;
              var call734 = callmethod(this, "setBackground", [1], string733);
              lineNumber = 259
              lineNumber = 243
              lineNumber = 256
              var bool735 = new GraceBoolean(true)
              onSelf = true;
              var call736 = callmethod(this, "isInit:=", [1], bool735);
              lineNumber = 259
              var call737 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call738 = callmethod(call737, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call739 = callmethod(call738, "setWorld", [1], this);
              return call739
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func633.paramCounts = [
            0,
          ];
          func633.variableArities = [
            false,
          ];
          obj631.methods["init"] = func633;
          func633.definitionLine = 199;
          func633.definitionModule = "kitty";
          var func740 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func740.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 259
              lineNumber = 270
              var bool741 = new GraceBoolean(true)
              onSelf = true;
              var call742 = callmethod(this, "isRunning:=", [1], bool741);
              lineNumber = 271
              var block743 = Grace_allocObject();
              block743.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block743.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block743.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block743.methods["match"] = GraceBlock_match;
              block743.methods["prefix?"] = GraceBlock_lift;
              block743.receiver = this;
              block743.className = 'block<kitty:271>';
              block743.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call744 = callmethod(this, "isRunning", [0]);
                return call744;
              };
              lineNumber = 275
              var block745 = Grace_allocObject();
              block745.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block745.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block745.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block745.methods["match"] = GraceBlock_match;
              block745.methods["prefix?"] = GraceBlock_lift;
              block745.receiver = this;
              block745.className = 'block<kitty:275>';
              block745.real = function(
              ) {
                sourceObject = this;
                lineNumber = 272
                onSelf = true;
                var call746 = callmethod(this, "update", [0]);
                return call746;
              };
              lineNumber = 271
              var call747 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block743, new GraceNum(10), block745);
              return call747
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
          obj631.methods["start"] = func740;
          func740.definitionLine = 268;
          func740.definitionModule = "kitty";
          var func748 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func748.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              lineNumber = 259
              lineNumber = 283
              onSelf = true;
              var call749 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call750 = callmethod(this, "mctx", [0]);
              var call751 = callmethod(call750,"fillStyle:=", [1], call749);
              lineNumber = 284
              onSelf = true;
              var call752 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call753 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call754 = callmethod(this, "mctx", [0]);
              var call755 = callmethod(call754,"fillRect", [4], new GraceNum(0), new GraceNum(0), call752, call753);
              lineNumber = 285
              onSelf = true;
              var call756 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call757 = callmethod(this, "mctx", [0]);
              var call758 = callmethod(call757,"drawImage", [3], call756, new GraceNum(0), new GraceNum(0));
              lineNumber = 286
              onSelf = true;
              var call759 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call761 = callmethod(this, "canvasWidth", [0]);
              var quotient763 = callmethod(call761, "/", [1], new GraceNum(2));
              onSelf = true;
              var call765 = callmethod(this, "canvasHeight", [0]);
              var quotient767 = callmethod(call765, "/", [1], new GraceNum(2));
              onSelf = true;
              var call768 = callmethod(this, "background", [0]);
              var call769 = callmethod(call768,"draw", [4], call759, quotient763, quotient767, new GraceNum(0));
              lineNumber = 289
              onSelf = true;
              var call770 = callmethod(this, "entities", [0]);
              lineNumber = 295
              var block771 = Grace_allocObject();
              block771.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block771.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block771.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block771.methods["match"] = GraceBlock_match;
              block771.methods["prefix?"] = GraceBlock_lift;
              block771.receiver = this;
              block771.className = 'block<kitty:295>';
              block771.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 290
                var call772 = callmethod(var_entity,"tick", [0]);
                lineNumber = 291
                onSelf = true;
                var call773 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call775 = callmethod(this, "canvasWidth", [0]);
                var quotient777 = callmethod(call775, "/", [1], new GraceNum(2));
                onSelf = true;
                var call779 = callmethod(this, "canvasHeight", [0]);
                var quotient781 = callmethod(call779, "/", [1], new GraceNum(2));
                var call782 = callmethod(var_entity,"draw", [3], call773, quotient777, quotient781);
                return call782;
              };
              var call783 = callmethod(Grace_prelude,"for()do", [1, 1], call770, block771);
              return call783
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func748.paramCounts = [
            0,
          ];
          func748.variableArities = [
            false,
          ];
          obj631.methods["update"] = func748;
          func748.definitionLine = 278;
          func748.definitionModule = "kitty";
          var func784 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func784.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              var string785 = new GraceString("WORLD STOPPING...");
              var call786 = Grace_print(string785);
              lineNumber = 300
              lineNumber = 290
              lineNumber = 299
              var bool787 = new GraceBoolean(false)
              onSelf = true;
              var call788 = callmethod(this, "isRunning:=", [1], bool787);
              lineNumber = 300
              var string789 = new GraceString("mousedown");
              onSelf = true;
              var call790 = callmethod(this, "canvas", [0]);
              var call791 = callmethod(call790,"removeEventListener", [2], string789, var_mouseDownListener);
              lineNumber = 301
              var string792 = new GraceString("keydown");
              onSelf = true;
              var call793 = callmethod(this, "document", [0]);
              var call794 = callmethod(call793,"removeEventListener", [2], string792, var_keyDownListener);
              lineNumber = 302
              var string795 = new GraceString("keyup");
              onSelf = true;
              var call796 = callmethod(this, "document", [0]);
              var call797 = callmethod(call796,"removeEventListener", [2], string795, var_keyUpListener);
              return call797
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func784.paramCounts = [
            0,
          ];
          func784.variableArities = [
            false,
          ];
          obj631.methods["stop"] = func784;
          func784.definitionLine = 297;
          func784.definitionModule = "kitty";
          var func798 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func798.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 290
              lineNumber = 306
              onSelf = true;
              var call799 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call800 = callmethod(this, "canvasHeight", [0]);
              var call801 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call802 = callmethod(call801, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call803 = callmethod(call802, "Image()width()height", [1, 1, 1], var_url, call799, call800);
              onSelf = true;
              var call804 = callmethod(this, "background:=", [1], call803);
              return call804
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func798.paramCounts = [
            1,
          ];
          func798.variableArities = [
            false,
          ];
          obj631.methods["setBackground"] = func798;
          func798.definitionLine = 305;
          func798.definitionModule = "kitty";
          var func805 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func805.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              onSelf = true;
              var call806 = callmethod(this, "entities", [0]);
              var call807 = callmethod(call806,"push", [1], var_e);
              return call807
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func805.paramCounts = [
            1,
          ];
          func805.variableArities = [
            false,
          ];
          obj631.methods["addEntity"] = func805;
          func805.definitionLine = 309;
          func805.definitionModule = "kitty";
          var func808 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func808.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 315
              lineNumber = 314
              onSelf = true;
              var call809 = callmethod(this, "mctx", [0]);
              return call809
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func808.paramCounts = [
            0,
          ];
          func808.variableArities = [
            false,
          ];
          obj631.methods["getContext"] = func808;
          func808.definitionLine = 313;
          func808.definitionModule = "kitty";
          sourceObject = obj631;
          obj631.data["background"] = undefined;
          var reader_kitty_background_810 = function() {
            return this.data["background"];
          }
          obj631.methods["background"] = reader_kitty_background_810;
          obj631.data["background"] = undefined;
          var writer_kitty_background_810 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj631.methods["background:="] = writer_kitty_background_810;
          reader_kitty_background_810.confidential = true;
          writer_kitty_background_810.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          lineNumber = 177
          var string811 = new GraceString("black");
          obj631.data["backgroundColour"] = string811;
          var reader_kitty_backgroundColour_812 = function() {
            return this.data["backgroundColour"];
          }
          obj631.methods["backgroundColour"] = reader_kitty_backgroundColour_812;
          obj631.data["backgroundColour"] = string811;
          var writer_kitty_backgroundColour_812 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj631.methods["backgroundColour:="] = writer_kitty_backgroundColour_812;
          reader_kitty_backgroundColour_812.confidential = true;
          writer_kitty_backgroundColour_812.confidential = true;
          lineNumber = 179;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string811)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["document"] = undefined;
          var reader_kitty_document_813 = function() {
            return this.data["document"];
          }
          obj631.methods["document"] = reader_kitty_document_813;
          obj631.data["document"] = undefined;
          var writer_kitty_document_813 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj631.methods["document:="] = writer_kitty_document_813;
          reader_kitty_document_813.confidential = true;
          writer_kitty_document_813.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_814 = function() {
            return this.data["backingCanvas"];
          }
          obj631.methods["backingCanvas"] = reader_kitty_backingCanvas_814;
          obj631.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_814 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj631.methods["backingCanvas:="] = writer_kitty_backingCanvas_814;
          reader_kitty_backingCanvas_814.confidential = true;
          writer_kitty_backingCanvas_814.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["backingContext"] = undefined;
          var reader_kitty_backingContext_815 = function() {
            return this.data["backingContext"];
          }
          obj631.methods["backingContext"] = reader_kitty_backingContext_815;
          obj631.data["backingContext"] = undefined;
          var writer_kitty_backingContext_815 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj631.methods["backingContext:="] = writer_kitty_backingContext_815;
          reader_kitty_backingContext_815.confidential = true;
          writer_kitty_backingContext_815.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["canvas"] = undefined;
          var reader_kitty_canvas_816 = function() {
            return this.data["canvas"];
          }
          obj631.methods["canvas"] = reader_kitty_canvas_816;
          obj631.data["canvas"] = undefined;
          var writer_kitty_canvas_816 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj631.methods["canvas:="] = writer_kitty_canvas_816;
          reader_kitty_canvas_816.confidential = true;
          writer_kitty_canvas_816.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_817 = function() {
            return this.data["canvasWidth"];
          }
          obj631.methods["canvasWidth"] = reader_kitty_canvasWidth_817;
          obj631.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_817 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj631.methods["canvasWidth:="] = writer_kitty_canvasWidth_817;
          reader_kitty_canvasWidth_817.confidential = true;
          writer_kitty_canvasWidth_817.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_818 = function() {
            return this.data["canvasHeight"];
          }
          obj631.methods["canvasHeight"] = reader_kitty_canvasHeight_818;
          obj631.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_818 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj631.methods["canvasHeight:="] = writer_kitty_canvasHeight_818;
          reader_kitty_canvasHeight_818.confidential = true;
          writer_kitty_canvasHeight_818.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          lineNumber = 188
          var call819 = callmethod(var_collections,"list", [0]);
          var call820 = callmethod(call819,"new", [0]);
          obj631.data["entities"] = call820;
          var reader_kitty_entities_821 = function() {
            return this.data["entities"];
          }
          obj631.methods["entities"] = reader_kitty_entities_821;
          obj631.data["entities"] = call820;
          var writer_kitty_entities_821 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj631.methods["entities:="] = writer_kitty_entities_821;
          reader_kitty_entities_821.confidential = true;
          writer_kitty_entities_821.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call820)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj631.mutable = true;
          sourceObject = obj631;
          lineNumber = 190
          var bool822 = new GraceBoolean(false)
          obj631.data["isInit"] = bool822;
          var reader_kitty_isInit_823 = function() {
            return this.data["isInit"];
          }
          obj631.methods["isInit"] = reader_kitty_isInit_823;
          obj631.data["isInit"] = bool822;
          var writer_kitty_isInit_823 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj631.methods["isInit:="] = writer_kitty_isInit_823;
          reader_kitty_isInit_823.confidential = true;
          writer_kitty_isInit_823.confidential = true;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool822)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj631.mutable = true;
          sourceObject = obj631;
          lineNumber = 191
          var bool824 = new GraceBoolean(false)
          obj631.data["isRunning"] = bool824;
          var reader_kitty_isRunning_825 = function() {
            return this.data["isRunning"];
          }
          obj631.methods["isRunning"] = reader_kitty_isRunning_825;
          obj631.data["isRunning"] = bool824;
          var writer_kitty_isRunning_825 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj631.methods["isRunning:="] = writer_kitty_isRunning_825;
          reader_kitty_isRunning_825.confidential = true;
          writer_kitty_isRunning_825.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool824)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["mctx"] = undefined;
          var reader_kitty_mctx_826 = function() {
            return this.data["mctx"];
          }
          obj631.methods["mctx"] = reader_kitty_mctx_826;
          obj631.data["mctx"] = undefined;
          var writer_kitty_mctx_826 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj631.methods["mctx:="] = writer_kitty_mctx_826;
          reader_kitty_mctx_826.confidential = true;
          writer_kitty_mctx_826.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          obj631.data["ent"] = undefined;
          var reader_kitty_ent_827 = function() {
            return this.data["ent"];
          }
          obj631.methods["ent"] = reader_kitty_ent_827;
          obj631.data["ent"] = undefined;
          var writer_kitty_ent_827 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj631.methods["ent:="] = writer_kitty_ent_827;
          reader_kitty_ent_827.confidential = true;
          writer_kitty_ent_827.confidential = true;
          obj631.mutable = true;
          sourceObject = obj631;
          lineNumber = 196
          onSelf = true;
          var call828 = callmethod(this, "init", [0]);
          sourceObject = obj631;
          sourceObject = obj631;
          sourceObject = obj631;
          sourceObject = obj631;
          sourceObject = obj631;
          sourceObject = obj631;
          sourceObject = obj631;
          superDepth = origSuperDepth;
        }
        obj_init_631.apply(inheritingObject, []);
        return obj631
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj429.methods["new()object"] = func630;
    var func829 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 172
        var string830 = new GraceString("class KittyWorld");
        return string830
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func829.paramCounts = [
    ];
    func829.variableArities = [
    ];
    obj429.methods["asDebugString"] = func829;
    func829.definitionLine = 172;
    func829.definitionModule = "kitty";
    sourceObject = obj429;
    sourceObject = obj429;
    superDepth = origSuperDepth;
  }
  obj_init_429.apply(obj429, []);
  var var_KittyWorld = obj429;
  lineNumber = 319
  lineNumber = 328
  lineNumber = 343
  lineNumber = 347
  lineNumber = 352
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n move\n tag\n createImage\n strafe\n tick\n awake\n action:=\n setAction\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n setX\n setY\n getRotation\n rotation:=\n setLocation\n turn\n posX\n posY\n draw\n setImage\n rotation\n tag:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n isKeyDown\n KittyWorld\n World\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\n height:=\n drawImage\nfresh:Entity()x()y:\n createImage\n tag\n move\n strafe\n posY\n turn\n action:=\n posX\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n setX\n setY\n rotation\n rotation:=\n setLocation\n awake\n setAction\n tick\n draw\n setImage\n getRotation\n tag:=\nfresh:World:\n document:=\n backgroundColour:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n canvas:=\n backingContext\n init\n background:=\n canvasHeight\n isInit:=\n addEntity\n isInit\n mctx:=\n entities:=\n entities\n backingContext:=\n canvasHeight:=\n canvasWidth\n start\n isRunning:=\n backgroundColour\n canvas\n isRunning\n ent:=\n background\n stop\n ent\n setBackground\n canvasWidth:=\npath:\n kitty\nmethods-of:KittyWorld.new:\n document:=\n backgroundColour:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n canvas:=\n backgroundColour\n isRunning:=\n background:=\n canvasHeight\n isInit:=\n addEntity\n isInit\n mctx:=\n canvasWidth\n entities\n backingContext:=\n canvasHeight:=\n entities:=\n start\n init\n backingContext\n canvas\n isRunning\n ent:=\n background\n stop\n ent\n setBackground\n canvasWidth:=\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nfresh:Image()width()height:\n elements:=\n width:=\n height\n getTag\n elements\n width\n imgTag\n draw\n height:=\n drawImage\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\n";
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
