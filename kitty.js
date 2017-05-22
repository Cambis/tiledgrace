function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 59
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
      lineNumber = 60
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 60;
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
        lineNumber = 61
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
  func0.definitionLine = 59;
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
      obj5.definitionLine = 60;
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
  lineNumber = 157
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
      lineNumber = 158
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 158;
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
        lineNumber = 159
        var call11 = callmethod(var_KittyKat,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
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
  func8.definitionLine = 157;
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
      obj13.definitionLine = 158;
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
        var call15 = callmethod(var_KittyKat,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
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
  lineNumber = 315
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 316
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 316;
      obj17.outer = this;
      var reader_kitty_outer_18 = function() {
        return this.outer;
      }
      obj17.methods["outer"] = reader_kitty_outer_18;
      function obj_init_17() {
        var origSuperDepth = superDepth;
        superDepth = obj17;
        obj17.annotations = [];
        sourceObject = obj17;
        lineNumber = 317
        var call19 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj17.superobj = call19;
        obj17._value = call19._value;
        superDepth = origSuperDepth;
      }
      obj_init_17.apply(obj17, []);
      return obj17
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func16.paramCounts = [
    0,
  ];
  func16.variableArities = [
    false,
  ];
  this.methods["World"] = func16;
  func16.definitionLine = 315;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 316;
      var inho21 = inheritingObject;
      while (inho21.superobj) inho21 = inho21.superobj;
      inho21.superobj = obj21;
      obj21.data = inheritingObject.data;
      obj21.outer = this;
      var reader_kitty_outer_22 = function() {
        return this.outer;
      }
      obj21.methods["outer"] = reader_kitty_outer_22;
      function obj_init_21() {
        var origSuperDepth = superDepth;
        superDepth = obj21;
        obj21.annotations = [];
        sourceObject = obj21;
        var call23 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj21.superobj = call23;
        obj21._value = call23._value;
        superDepth = origSuperDepth;
      }
      obj_init_21.apply(inheritingObject, []);
      return obj21
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func20;
  lineNumber = 324
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 326
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 333
      var if27 = var_done;
      lineNumber = 328
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 329
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 331
        return var_done
      }
      lineNumber = 333
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 336
      var call33 = callmethod(var_m__95__world,"start", [0]);
      return call33
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func24.paramCounts = [
    0,
  ];
  func24.variableArities = [
    false,
  ];
  this.methods["start"] = func24;
  func24.definitionLine = 324;
  func24.definitionModule = "kitty";
  lineNumber = 339
  var func34 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func34.paramCounts[0])
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
      var bool35 = new GraceBoolean(true)
      var_worldSet = bool35;
      return bool35
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func34.paramTypes = [];
  func34.paramTypes.push([]);
  func34.paramCounts = [
    1,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func34;
  func34.definitionLine = 339;
  func34.definitionModule = "kitty";
  lineNumber = 344
  var func36 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 345
      onSelf = true;
      var call37 = callmethod(this, "start", [0]);
      return call37
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func36.paramCounts = [
    1,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func36;
  func36.definitionLine = 344;
  func36.definitionModule = "kitty";
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
  var call38 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call38;
  this.data = call38.data;
  this._value = call38._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 336
  var func39 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func39.paramCounts[0])
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
  func39.paramCounts = [
    0,
  ];
  func39.variableArities = [
    false,
  ];
  this.methods["m_world"] = func39;
  func39.definitionLine = 336;
  func39.definitionModule = "kitty";
  lineNumber = 336
  var func40 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
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
  func40.paramCounts = [
    1,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func40;
  func40.definitionLine = 336;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 336
  var func42 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func42.paramCounts[0])
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
  func42.paramCounts = [
    0,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func42;
  func42.definitionLine = 336;
  func42.definitionModule = "kitty";
  lineNumber = 336
  var func43 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func43.paramCounts[0])
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
  func43.paramCounts = [
    1,
  ];
  func43.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func43;
  func43.definitionLine = 336;
  func43.definitionModule = "kitty";
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
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    0,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func44;
  func44.definitionLine = 336;
  func44.definitionModule = "kitty";
  lineNumber = 336
  var func45 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    1,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func45;
  func45.definitionLine = 336;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 336
  var func46 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    0,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func46;
  func46.definitionLine = 336;
  func46.definitionModule = "kitty";
  lineNumber = 336
  var func47 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func47.paramCounts[0])
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
  func47.paramCounts = [
    1,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func47;
  func47.definitionLine = 336;
  func47.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 336
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func48;
  func48.definitionLine = 336;
  func48.definitionModule = "kitty";
  lineNumber = 336
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func49;
  func49.definitionLine = 336;
  func49.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call50 = callmethod(var_dom,"window", [0]);
  var call51 = callmethod(call50,"Math", [0]);
  var var_math = call51;
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["math"] = func52;
  func52.definitionLine = 17;
  func52.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func53 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    0,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func53;
  func53.definitionLine = 22;
  func53.definitionModule = "kitty";
  var obj54 = Grace_allocObject();
  obj54.definitionModule = "kitty";
  obj54.definitionLine = 22;
  obj54.outer = this;
  var reader_kitty_outer_55 = function() {
    return this.outer;
  }
  obj54.methods["outer"] = reader_kitty_outer_55;
  function obj_init_54() {
    var origSuperDepth = superDepth;
    superDepth = obj54;
    obj54.annotations = [];
    var func56 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func56.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj57 = Grace_allocObject();
        obj57.definitionModule = "kitty";
        obj57.definitionLine = 22;
        obj57.outer = this;
        var reader_kitty_outer_58 = function() {
          return this.outer;
        }
        obj57.methods["outer"] = reader_kitty_outer_58;
        function obj_init_57() {
          var origSuperDepth = superDepth;
          superDepth = obj57;
          obj57.annotations = [];
          var func59 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func59.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 37
              var call60 = callmethod(var_ctx,"save", [0]);
              lineNumber = 38
              var call61 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 40
              var prod65 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient67 = callmethod(prod65, "/", [1], new GraceNum(180));
              var call68 = callmethod(var_ctx,"rotate", [1], quotient67);
              lineNumber = 41
              onSelf = true;
              var call69 = callmethod(this, "elements", [0]);
              lineNumber = 44
              var block70 = Grace_allocObject();
              block70.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block70.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block70.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block70.methods["match"] = GraceBlock_match;
              block70.methods["prefix?"] = GraceBlock_lift;
              block70.receiver = this;
              block70.className = 'block<kitty:44>';
              block70.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 42
                onSelf = true;
                var call72 = callmethod(this, "width", [0]);
                var call73 = callmethod(call72,"prefix-", [0]);
                var quotient75 = callmethod(call73, "/", [1], new GraceNum(2));
                onSelf = true;
                var call77 = callmethod(this, "height", [0]);
                var call78 = callmethod(call77,"prefix-", [0]);
                var quotient80 = callmethod(call78, "/", [1], new GraceNum(2));
                onSelf = true;
                var call81 = callmethod(this, "width", [0]);
                onSelf = true;
                var call82 = callmethod(this, "height", [0]);
                var call83 = callmethod(var_ctx,"drawImage", [5], var_element, quotient75, quotient80, call81, call82);
                return call83;
              };
              var call84 = callmethod(Grace_prelude,"for()do", [1, 1], call69, block70);
              lineNumber = 44
              var call85 = callmethod(var_ctx,"restore", [0]);
              return call85
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func59.paramCounts = [
            4,
          ];
          func59.variableArities = [
            false,
          ];
          obj57.methods["draw"] = func59;
          func59.definitionLine = 35;
          func59.definitionModule = "kitty";
          var func86 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func86.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 50
              lineNumber = 49
              onSelf = true;
              var call87 = callmethod(this, "imgTag", [0]);
              return call87
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func86.paramCounts = [
            0,
          ];
          func86.variableArities = [
            false,
          ];
          obj57.methods["getTag"] = func86;
          func86.definitionLine = 48;
          func86.definitionModule = "kitty";
          var func88 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func88.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              onSelf = true;
              var call89 = callmethod(this, "elements", [0]);
              var call90 = callmethod(call89,"push", [1], var_imgTag__39__);
              return call90
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func88.paramCounts = [
            1,
          ];
          func88.variableArities = [
            false,
          ];
          obj57.methods["drawImage"] = func88;
          func88.definitionLine = 52;
          func88.definitionModule = "kitty";
          sourceObject = obj57;
          lineNumber = 26
          var string91 = new GraceString("img");
          var call92 = callmethod(var_dom,"document", [0]);
          var call93 = callmethod(call92,"createElement", [1], string91);
          obj57.data["imgTag"] = call93;
          var reader_kitty_imgTag_94 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_94.def = true;
          reader_kitty_imgTag_94.confidential = true;
          obj57.methods["imgTag"] = reader_kitty_imgTag_94;
          lineNumber = 26;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call93)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj57;
          lineNumber = 29
          lineNumber = 26
          lineNumber = 27
          onSelf = true;
          var call95 = callmethod(this, "imgTag", [0]);
          var call96 = callmethod(call95,"src:=", [1], var_url__39__);
          sourceObject = obj57;
          lineNumber = 29
          var call97 = callmethod(var_collections,"list", [0]);
          var call98 = callmethod(call97,"new", [0]);
          obj57.data["elements"] = call98;
          var reader_kitty_elements_99 = function() {
            return this.data["elements"];
          }
          obj57.methods["elements"] = reader_kitty_elements_99;
          obj57.data["elements"] = call98;
          var writer_kitty_elements_99 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj57.methods["elements:="] = writer_kitty_elements_99;
          reader_kitty_elements_99.confidential = true;
          writer_kitty_elements_99.confidential = true;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call98)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 30
          onSelf = true;
          var call100 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call101 = callmethod(this, "elements", [0]);
          var call102 = callmethod(call101,"push", [1], call100);
          sourceObject = obj57;
          lineNumber = 32
          obj57.data["height"] = var_height__39__;
          var reader_kitty_height_103 = function() {
            return this.data["height"];
          }
          obj57.methods["height"] = reader_kitty_height_103;
          obj57.data["height"] = var_height__39__;
          var writer_kitty_height_103 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj57.methods["height:="] = writer_kitty_height_103;
          reader_kitty_height_103.confidential = true;
          writer_kitty_height_103.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 33
          obj57.data["width"] = var_width__39__;
          var reader_kitty_width_104 = function() {
            return this.data["width"];
          }
          obj57.methods["width"] = reader_kitty_width_104;
          obj57.data["width"] = var_width__39__;
          var writer_kitty_width_104 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj57.methods["width:="] = writer_kitty_width_104;
          reader_kitty_width_104.confidential = true;
          writer_kitty_width_104.confidential = true;
          lineNumber = 35;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          sourceObject = obj57;
          sourceObject = obj57;
          superDepth = origSuperDepth;
        }
        obj_init_57.apply(obj57, []);
        return obj57
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func56.paramCounts = [
      3,
    ];
    func56.variableArities = [
      false,
    ];
    obj54.methods["new"] = func56;
    func56.definitionLine = 22;
    func56.definitionModule = "kitty";
    var func105 = function(argcv) {
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
        var obj106 = Grace_allocObject();
        obj106.definitionModule = "kitty";
        obj106.definitionLine = 22;
        var inho106 = inheritingObject;
        while (inho106.superobj) inho106 = inho106.superobj;
        inho106.superobj = obj106;
        obj106.data = inheritingObject.data;
        obj106.outer = this;
        var reader_kitty_outer_107 = function() {
          return this.outer;
        }
        obj106.methods["outer"] = reader_kitty_outer_107;
        function obj_init_106() {
          var origSuperDepth = superDepth;
          superDepth = obj106;
          obj106.annotations = [];
          var func108 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func108.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 37
              var call109 = callmethod(var_ctx,"save", [0]);
              lineNumber = 38
              var call110 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 40
              var prod114 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient116 = callmethod(prod114, "/", [1], new GraceNum(180));
              var call117 = callmethod(var_ctx,"rotate", [1], quotient116);
              lineNumber = 41
              onSelf = true;
              var call118 = callmethod(this, "elements", [0]);
              lineNumber = 44
              var block119 = Grace_allocObject();
              block119.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block119.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block119.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block119.methods["match"] = GraceBlock_match;
              block119.methods["prefix?"] = GraceBlock_lift;
              block119.receiver = this;
              block119.className = 'block<kitty:44>';
              block119.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 42
                onSelf = true;
                var call121 = callmethod(this, "width", [0]);
                var call122 = callmethod(call121,"prefix-", [0]);
                var quotient124 = callmethod(call122, "/", [1], new GraceNum(2));
                onSelf = true;
                var call126 = callmethod(this, "height", [0]);
                var call127 = callmethod(call126,"prefix-", [0]);
                var quotient129 = callmethod(call127, "/", [1], new GraceNum(2));
                onSelf = true;
                var call130 = callmethod(this, "width", [0]);
                onSelf = true;
                var call131 = callmethod(this, "height", [0]);
                var call132 = callmethod(var_ctx,"drawImage", [5], var_element, quotient124, quotient129, call130, call131);
                return call132;
              };
              var call133 = callmethod(Grace_prelude,"for()do", [1, 1], call118, block119);
              lineNumber = 44
              var call134 = callmethod(var_ctx,"restore", [0]);
              return call134
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func108.paramCounts = [
            4,
          ];
          func108.variableArities = [
            false,
          ];
          obj106.methods["draw"] = func108;
          func108.definitionLine = 35;
          func108.definitionModule = "kitty";
          var func135 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func135.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 50
              lineNumber = 49
              onSelf = true;
              var call136 = callmethod(this, "imgTag", [0]);
              return call136
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func135.paramCounts = [
            0,
          ];
          func135.variableArities = [
            false,
          ];
          obj106.methods["getTag"] = func135;
          func135.definitionLine = 48;
          func135.definitionModule = "kitty";
          var func137 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func137.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              onSelf = true;
              var call138 = callmethod(this, "elements", [0]);
              var call139 = callmethod(call138,"push", [1], var_imgTag__39__);
              return call139
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func137.paramCounts = [
            1,
          ];
          func137.variableArities = [
            false,
          ];
          obj106.methods["drawImage"] = func137;
          func137.definitionLine = 52;
          func137.definitionModule = "kitty";
          sourceObject = obj106;
          lineNumber = 26
          var string140 = new GraceString("img");
          var call141 = callmethod(var_dom,"document", [0]);
          var call142 = callmethod(call141,"createElement", [1], string140);
          obj106.data["imgTag"] = call142;
          var reader_kitty_imgTag_143 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_143.def = true;
          reader_kitty_imgTag_143.confidential = true;
          obj106.methods["imgTag"] = reader_kitty_imgTag_143;
          lineNumber = 26;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call142)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj106;
          lineNumber = 29
          lineNumber = 26
          lineNumber = 27
          onSelf = true;
          var call144 = callmethod(this, "imgTag", [0]);
          var call145 = callmethod(call144,"src:=", [1], var_url__39__);
          sourceObject = obj106;
          lineNumber = 29
          var call146 = callmethod(var_collections,"list", [0]);
          var call147 = callmethod(call146,"new", [0]);
          obj106.data["elements"] = call147;
          var reader_kitty_elements_148 = function() {
            return this.data["elements"];
          }
          obj106.methods["elements"] = reader_kitty_elements_148;
          obj106.data["elements"] = call147;
          var writer_kitty_elements_148 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj106.methods["elements:="] = writer_kitty_elements_148;
          reader_kitty_elements_148.confidential = true;
          writer_kitty_elements_148.confidential = true;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call147)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj106.mutable = true;
          sourceObject = obj106;
          lineNumber = 30
          onSelf = true;
          var call149 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call150 = callmethod(this, "elements", [0]);
          var call151 = callmethod(call150,"push", [1], call149);
          sourceObject = obj106;
          lineNumber = 32
          obj106.data["height"] = var_height__39__;
          var reader_kitty_height_152 = function() {
            return this.data["height"];
          }
          obj106.methods["height"] = reader_kitty_height_152;
          obj106.data["height"] = var_height__39__;
          var writer_kitty_height_152 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj106.methods["height:="] = writer_kitty_height_152;
          reader_kitty_height_152.confidential = true;
          writer_kitty_height_152.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj106.mutable = true;
          sourceObject = obj106;
          lineNumber = 33
          obj106.data["width"] = var_width__39__;
          var reader_kitty_width_153 = function() {
            return this.data["width"];
          }
          obj106.methods["width"] = reader_kitty_width_153;
          obj106.data["width"] = var_width__39__;
          var writer_kitty_width_153 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj106.methods["width:="] = writer_kitty_width_153;
          reader_kitty_width_153.confidential = true;
          writer_kitty_width_153.confidential = true;
          lineNumber = 35;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj106.mutable = true;
          sourceObject = obj106;
          sourceObject = obj106;
          sourceObject = obj106;
          superDepth = origSuperDepth;
        }
        obj_init_106.apply(inheritingObject, []);
        return obj106
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj54.methods["new()object"] = func105;
    var func154 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string155 = new GraceString("class KittyImage");
        return string155
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func154.paramCounts = [
    ];
    func154.variableArities = [
    ];
    obj54.methods["asDebugString"] = func154;
    func154.definitionLine = 22;
    func154.definitionModule = "kitty";
    sourceObject = obj54;
    sourceObject = obj54;
    superDepth = origSuperDepth;
  }
  obj_init_54.apply(obj54, []);
  var var_KittyImage = obj54;
  lineNumber = 59
  lineNumber = 66
  var func156 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func156.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyKat)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyKat
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func156.paramCounts = [
    0,
  ];
  func156.variableArities = [
    false,
  ];
  this.methods["KittyKat"] = func156;
  func156.definitionLine = 66;
  func156.definitionModule = "kitty";
  var obj157 = Grace_allocObject();
  obj157.definitionModule = "kitty";
  obj157.definitionLine = 66;
  obj157.outer = this;
  var reader_kitty_outer_158 = function() {
    return this.outer;
  }
  obj157.methods["outer"] = reader_kitty_outer_158;
  function obj_init_157() {
    var origSuperDepth = superDepth;
    superDepth = obj157;
    obj157.annotations = [];
    var func159 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func159.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj160 = Grace_allocObject();
        obj160.definitionModule = "kitty";
        obj160.definitionLine = 66;
        obj160.outer = this;
        var reader_kitty_outer_161 = function() {
          return this.outer;
        }
        obj160.methods["outer"] = reader_kitty_outer_161;
        function obj_init_160() {
          var origSuperDepth = superDepth;
          superDepth = obj160;
          obj160.annotations = [];
          var func162 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func162.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              var string163 = new GraceString("realyee.png");
              onSelf = true;
              var call164 = callmethod(this, "createImage", [1], string163);
              return call164
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func162.paramCounts = [
            0,
          ];
          func162.variableArities = [
            false,
          ];
          obj160.methods["awake"] = func162;
          func162.definitionLine = 86;
          func162.definitionModule = "kitty";
          var func165 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func165.paramCounts = [
            0,
          ];
          func165.variableArities = [
            false,
          ];
          obj160.methods["start"] = func165;
          func165.definitionLine = 92;
          func165.definitionModule = "kitty";
          var func166 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              onSelf = true;
              var call167 = callmethod(this, "action", [0]);
              var call168 = callmethod(call167,"update", [0]);
              return call168
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func166.paramCounts = [
            0,
          ];
          func166.variableArities = [
            false,
          ];
          obj160.methods["update"] = func166;
          func166.definitionLine = 97;
          func166.definitionModule = "kitty";
          var func169 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func169.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onDestroy)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
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
          obj160.methods["onDestroy"] = func169;
          func169.definitionLine = 102;
          func169.definitionModule = "kitty";
          var func170 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func170.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 98
              lineNumber = 107
              onSelf = true;
              var call173 = callmethod(this, "rotation", [0]);
              var prod175 = callmethod(call173, "*", [1], new GraceNum(3.14159));
              var quotient177 = callmethod(prod175, "/", [1], new GraceNum(180));
              var call178 = callmethod(var_math,"cos", [1], quotient177);
              var prod181 = callmethod(var_distance, "*", [1], call178);
              onSelf = true;
              var call183 = callmethod(this, "posX", [0]);
              var opresult185 = callmethod(call183, "+", [1], prod181);
              onSelf = true;
              var call186 = callmethod(this, "posX:=", [1], opresult185);
              lineNumber = 108
              lineNumber = 98
              lineNumber = 108
              onSelf = true;
              var call189 = callmethod(this, "rotation", [0]);
              var prod191 = callmethod(call189, "*", [1], new GraceNum(3.14159));
              var quotient193 = callmethod(prod191, "/", [1], new GraceNum(180));
              var call194 = callmethod(var_math,"sin", [1], quotient193);
              var prod197 = callmethod(var_distance, "*", [1], call194);
              onSelf = true;
              var call199 = callmethod(this, "posY", [0]);
              var opresult201 = callmethod(call199, "+", [1], prod197);
              onSelf = true;
              var call202 = callmethod(this, "posY:=", [1], opresult201);
              return call202
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func170.paramCounts = [
            1,
          ];
          func170.variableArities = [
            false,
          ];
          obj160.methods["move"] = func170;
          func170.definitionLine = 106;
          func170.definitionModule = "kitty";
          var func203 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func203.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 98
              lineNumber = 112
              onSelf = true;
              var call206 = callmethod(this, "rotation", [0]);
              var opresult209 = callmethod(new GraceNum(90), "+", [1], call206);
              var prod211 = callmethod(opresult209, "*", [1], new GraceNum(3.14159));
              var quotient213 = callmethod(prod211, "/", [1], new GraceNum(180));
              var call214 = callmethod(var_math,"cos", [1], quotient213);
              var prod217 = callmethod(var_distance, "*", [1], call214);
              onSelf = true;
              var call219 = callmethod(this, "posX", [0]);
              var opresult221 = callmethod(call219, "+", [1], prod217);
              onSelf = true;
              var call222 = callmethod(this, "posX:=", [1], opresult221);
              lineNumber = 113
              lineNumber = 98
              lineNumber = 113
              onSelf = true;
              var call225 = callmethod(this, "rotation", [0]);
              var opresult228 = callmethod(new GraceNum(90), "+", [1], call225);
              var prod230 = callmethod(opresult228, "*", [1], new GraceNum(3.14159));
              var quotient232 = callmethod(prod230, "/", [1], new GraceNum(180));
              var call233 = callmethod(var_math,"sin", [1], quotient232);
              var prod236 = callmethod(var_distance, "*", [1], call233);
              onSelf = true;
              var call238 = callmethod(this, "posY", [0]);
              var opresult240 = callmethod(call238, "+", [1], prod236);
              onSelf = true;
              var call241 = callmethod(this, "posY:=", [1], opresult240);
              return call241
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func203.paramCounts = [
            1,
          ];
          func203.variableArities = [
            false,
          ];
          obj160.methods["strafe"] = func203;
          func203.definitionLine = 111;
          func203.definitionModule = "kitty";
          var func242 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func242.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 98
              lineNumber = 118
              lineNumber = 117
              onSelf = true;
              var call244 = callmethod(this, "rotation", [0]);
              var opresult246 = callmethod(call244, "+", [1], var_angle);
              onSelf = true;
              var call247 = callmethod(this, "rotation:=", [1], opresult246);
              return call247
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func242.paramCounts = [
            1,
          ];
          func242.variableArities = [
            false,
          ];
          obj160.methods["turn"] = func242;
          func242.definitionLine = 116;
          func242.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var call249 = callmethod(var_ctx,"save", [0]);
              lineNumber = 122
              onSelf = true;
              var call250 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call251 = callmethod(this, "posY", [0]);
              var call252 = callmethod(var_ctx,"translate", [2], call250, call251);
              lineNumber = 123
              onSelf = true;
              var call253 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call254 = callmethod(this, "image", [0]);
              var call255 = callmethod(call254,"draw", [4], var_ctx, var_dx, var_dy, call253);
              lineNumber = 124
              var call256 = callmethod(var_ctx,"restore", [0]);
              return call256
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            3,
          ];
          func248.variableArities = [
            false,
          ];
          obj160.methods["draw"] = func248;
          func248.definitionLine = 120;
          func248.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 124
              lineNumber = 128
              var call258 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call259 = callmethod(call258, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call260 = callmethod(call259, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call261 = callmethod(this, "image:=", [1], call260);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func257.paramCounts = [
            1,
          ];
          func257.variableArities = [
            false,
          ];
          obj160.methods["createImage"] = func257;
          func257.definitionLine = 127;
          func257.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 128
              lineNumber = 132
              onSelf = true;
              var call263 = callmethod(this, "image:=", [1], var_image__39__);
              return call263
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func262.paramTypes = [];
          func262.paramTypes.push([]);
          func262.paramCounts = [
            1,
          ];
          func262.variableArities = [
            false,
          ];
          obj160.methods["setImage"] = func262;
          func262.definitionLine = 131;
          func262.definitionModule = "kitty";
          var func264 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func264.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 128
              lineNumber = 136
              onSelf = true;
              var call265 = callmethod(this, "action:=", [1], var_action__39__);
              return call265
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func264.paramCounts = [
            1,
          ];
          func264.variableArities = [
            false,
          ];
          obj160.methods["setAction"] = func264;
          func264.definitionLine = 135;
          func264.definitionModule = "kitty";
          var func266 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func266.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 128
              lineNumber = 140
              onSelf = true;
              var call267 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 128
              lineNumber = 141
              onSelf = true;
              var call268 = callmethod(this, "posY:=", [1], var_y);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func266.paramCounts = [
            2,
          ];
          func266.variableArities = [
            false,
          ];
          obj160.methods["setLocation"] = func266;
          func266.definitionLine = 139;
          func266.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call270 = callmethod(this, "posX", [0]);
              return call270
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func269.paramCounts = [
            0,
          ];
          func269.variableArities = [
            false,
          ];
          obj160.methods["getX"] = func269;
          func269.definitionLine = 144;
          func269.definitionModule = "kitty";
          var func271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call272 = callmethod(this, "posY", [0]);
              return call272
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func271.paramCounts = [
            0,
          ];
          func271.variableArities = [
            false,
          ];
          obj160.methods["getY"] = func271;
          func271.definitionLine = 148;
          func271.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 153
              onSelf = true;
              var call274 = callmethod(this, "rotation", [0]);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func273.paramCounts = [
            0,
          ];
          func273.variableArities = [
            false,
          ];
          obj160.methods["getRotation"] = func273;
          func273.definitionLine = 152;
          func273.definitionModule = "kitty";
          sourceObject = obj160;
          lineNumber = 70
          obj160.data["tag"] = var_tag__39__;
          var reader_kitty_tag_275 = function() {
            return this.data["tag"];
          }
          obj160.methods["tag"] = reader_kitty_tag_275;
          obj160.data["tag"] = var_tag__39__;
          var writer_kitty_tag_275 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj160.methods["tag:="] = writer_kitty_tag_275;
          reader_kitty_tag_275.confidential = true;
          writer_kitty_tag_275.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 71
          obj160.data["posX"] = var_x__39__;
          var reader_kitty_posX_276 = function() {
            return this.data["posX"];
          }
          obj160.methods["posX"] = reader_kitty_posX_276;
          obj160.data["posX"] = var_x__39__;
          var writer_kitty_posX_276 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj160.methods["posX:="] = writer_kitty_posX_276;
          reader_kitty_posX_276.confidential = true;
          writer_kitty_posX_276.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 72
          obj160.data["posY"] = var_y__39__;
          var reader_kitty_posY_277 = function() {
            return this.data["posY"];
          }
          obj160.methods["posY"] = reader_kitty_posY_277;
          obj160.data["posY"] = var_y__39__;
          var writer_kitty_posY_277 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj160.methods["posY:="] = writer_kitty_posY_277;
          reader_kitty_posY_277.confidential = true;
          writer_kitty_posY_277.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 73
          obj160.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_278 = function() {
            return this.data["rotation"];
          }
          obj160.methods["rotation"] = reader_kitty_rotation_278;
          obj160.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_278 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj160.methods["rotation:="] = writer_kitty_rotation_278;
          reader_kitty_rotation_278.confidential = true;
          writer_kitty_rotation_278.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 75
          var obj279 = Grace_allocObject();
          obj279.definitionModule = "kitty";
          obj279.definitionLine = 75;
          obj279.outer = this;
          var reader_kitty_outer_280 = function() {
            return this.outer;
          }
          obj279.methods["outer"] = reader_kitty_outer_280;
          function obj_init_279() {
            var origSuperDepth = superDepth;
            superDepth = obj279;
            obj279.annotations = [];
            var func281 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func281.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                return var_done
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
            obj279.methods["update"] = func281;
            func281.definitionLine = 76;
            func281.definitionModule = "kitty";
            sourceObject = obj279;
            superDepth = origSuperDepth;
          }
          obj_init_279.apply(obj279, []);
          obj160.data["action"] = obj279;
          var reader_kitty_action_282 = function() {
            return this.data["action"];
          }
          obj160.methods["action"] = reader_kitty_action_282;
          obj160.data["action"] = obj279;
          var writer_kitty_action_282 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj160.methods["action:="] = writer_kitty_action_282;
          reader_kitty_action_282.confidential = true;
          writer_kitty_action_282.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj279)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          obj160.data["image"] = undefined;
          var reader_kitty_image_283 = function() {
            return this.data["image"];
          }
          obj160.methods["image"] = reader_kitty_image_283;
          obj160.data["image"] = undefined;
          var writer_kitty_image_283 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj160.methods["image:="] = writer_kitty_image_283;
          reader_kitty_image_283.confidential = true;
          writer_kitty_image_283.confidential = true;
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 83
          onSelf = true;
          var call284 = callmethod(this, "awake", [0]);
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          sourceObject = obj160;
          superDepth = origSuperDepth;
        }
        obj_init_160.apply(obj160, []);
        return obj160
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func159.paramCounts = [
      3,
    ];
    func159.variableArities = [
      false,
    ];
    obj157.methods["new"] = func159;
    func159.definitionLine = 66;
    func159.definitionModule = "kitty";
    var func285 = function(argcv) {
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
        var obj286 = Grace_allocObject();
        obj286.definitionModule = "kitty";
        obj286.definitionLine = 66;
        var inho286 = inheritingObject;
        while (inho286.superobj) inho286 = inho286.superobj;
        inho286.superobj = obj286;
        obj286.data = inheritingObject.data;
        obj286.outer = this;
        var reader_kitty_outer_287 = function() {
          return this.outer;
        }
        obj286.methods["outer"] = reader_kitty_outer_287;
        function obj_init_286() {
          var origSuperDepth = superDepth;
          superDepth = obj286;
          obj286.annotations = [];
          var func288 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func288.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              var string289 = new GraceString("realyee.png");
              onSelf = true;
              var call290 = callmethod(this, "createImage", [1], string289);
              return call290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func288.paramCounts = [
            0,
          ];
          func288.variableArities = [
            false,
          ];
          obj286.methods["awake"] = func288;
          func288.definitionLine = 86;
          func288.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func291.paramCounts = [
            0,
          ];
          func291.variableArities = [
            false,
          ];
          obj286.methods["start"] = func291;
          func291.definitionLine = 92;
          func291.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              onSelf = true;
              var call293 = callmethod(this, "action", [0]);
              var call294 = callmethod(call293,"update", [0]);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            0,
          ];
          func292.variableArities = [
            false,
          ];
          obj286.methods["update"] = func292;
          func292.definitionLine = 97;
          func292.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onDestroy)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func295.paramCounts = [
            0,
          ];
          func295.variableArities = [
            false,
          ];
          obj286.methods["onDestroy"] = func295;
          func295.definitionLine = 102;
          func295.definitionModule = "kitty";
          var func296 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func296.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 98
              lineNumber = 107
              onSelf = true;
              var call299 = callmethod(this, "rotation", [0]);
              var prod301 = callmethod(call299, "*", [1], new GraceNum(3.14159));
              var quotient303 = callmethod(prod301, "/", [1], new GraceNum(180));
              var call304 = callmethod(var_math,"cos", [1], quotient303);
              var prod307 = callmethod(var_distance, "*", [1], call304);
              onSelf = true;
              var call309 = callmethod(this, "posX", [0]);
              var opresult311 = callmethod(call309, "+", [1], prod307);
              onSelf = true;
              var call312 = callmethod(this, "posX:=", [1], opresult311);
              lineNumber = 108
              lineNumber = 98
              lineNumber = 108
              onSelf = true;
              var call315 = callmethod(this, "rotation", [0]);
              var prod317 = callmethod(call315, "*", [1], new GraceNum(3.14159));
              var quotient319 = callmethod(prod317, "/", [1], new GraceNum(180));
              var call320 = callmethod(var_math,"sin", [1], quotient319);
              var prod323 = callmethod(var_distance, "*", [1], call320);
              onSelf = true;
              var call325 = callmethod(this, "posY", [0]);
              var opresult327 = callmethod(call325, "+", [1], prod323);
              onSelf = true;
              var call328 = callmethod(this, "posY:=", [1], opresult327);
              return call328
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func296.paramCounts = [
            1,
          ];
          func296.variableArities = [
            false,
          ];
          obj286.methods["move"] = func296;
          func296.definitionLine = 106;
          func296.definitionModule = "kitty";
          var func329 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 98
              lineNumber = 112
              onSelf = true;
              var call332 = callmethod(this, "rotation", [0]);
              var opresult335 = callmethod(new GraceNum(90), "+", [1], call332);
              var prod337 = callmethod(opresult335, "*", [1], new GraceNum(3.14159));
              var quotient339 = callmethod(prod337, "/", [1], new GraceNum(180));
              var call340 = callmethod(var_math,"cos", [1], quotient339);
              var prod343 = callmethod(var_distance, "*", [1], call340);
              onSelf = true;
              var call345 = callmethod(this, "posX", [0]);
              var opresult347 = callmethod(call345, "+", [1], prod343);
              onSelf = true;
              var call348 = callmethod(this, "posX:=", [1], opresult347);
              lineNumber = 113
              lineNumber = 98
              lineNumber = 113
              onSelf = true;
              var call351 = callmethod(this, "rotation", [0]);
              var opresult354 = callmethod(new GraceNum(90), "+", [1], call351);
              var prod356 = callmethod(opresult354, "*", [1], new GraceNum(3.14159));
              var quotient358 = callmethod(prod356, "/", [1], new GraceNum(180));
              var call359 = callmethod(var_math,"sin", [1], quotient358);
              var prod362 = callmethod(var_distance, "*", [1], call359);
              onSelf = true;
              var call364 = callmethod(this, "posY", [0]);
              var opresult366 = callmethod(call364, "+", [1], prod362);
              onSelf = true;
              var call367 = callmethod(this, "posY:=", [1], opresult366);
              return call367
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func329.paramCounts = [
            1,
          ];
          func329.variableArities = [
            false,
          ];
          obj286.methods["strafe"] = func329;
          func329.definitionLine = 111;
          func329.definitionModule = "kitty";
          var func368 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 98
              lineNumber = 118
              lineNumber = 117
              onSelf = true;
              var call370 = callmethod(this, "rotation", [0]);
              var opresult372 = callmethod(call370, "+", [1], var_angle);
              onSelf = true;
              var call373 = callmethod(this, "rotation:=", [1], opresult372);
              return call373
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func368.paramCounts = [
            1,
          ];
          func368.variableArities = [
            false,
          ];
          obj286.methods["turn"] = func368;
          func368.definitionLine = 116;
          func368.definitionModule = "kitty";
          var func374 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var call375 = callmethod(var_ctx,"save", [0]);
              lineNumber = 122
              onSelf = true;
              var call376 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call377 = callmethod(this, "posY", [0]);
              var call378 = callmethod(var_ctx,"translate", [2], call376, call377);
              lineNumber = 123
              onSelf = true;
              var call379 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call380 = callmethod(this, "image", [0]);
              var call381 = callmethod(call380,"draw", [4], var_ctx, var_dx, var_dy, call379);
              lineNumber = 124
              var call382 = callmethod(var_ctx,"restore", [0]);
              return call382
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func374.paramCounts = [
            3,
          ];
          func374.variableArities = [
            false,
          ];
          obj286.methods["draw"] = func374;
          func374.definitionLine = 120;
          func374.definitionModule = "kitty";
          var func383 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func383.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 124
              lineNumber = 128
              var call384 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call385 = callmethod(call384, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call386 = callmethod(call385, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call387 = callmethod(this, "image:=", [1], call386);
              return call387
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func383.paramCounts = [
            1,
          ];
          func383.variableArities = [
            false,
          ];
          obj286.methods["createImage"] = func383;
          func383.definitionLine = 127;
          func383.definitionModule = "kitty";
          var func388 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func388.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 128
              lineNumber = 132
              onSelf = true;
              var call389 = callmethod(this, "image:=", [1], var_image__39__);
              return call389
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func388.paramTypes = [];
          func388.paramTypes.push([]);
          func388.paramCounts = [
            1,
          ];
          func388.variableArities = [
            false,
          ];
          obj286.methods["setImage"] = func388;
          func388.definitionLine = 131;
          func388.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func390.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 128
              lineNumber = 136
              onSelf = true;
              var call391 = callmethod(this, "action:=", [1], var_action__39__);
              return call391
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func390.paramCounts = [
            1,
          ];
          func390.variableArities = [
            false,
          ];
          obj286.methods["setAction"] = func390;
          func390.definitionLine = 135;
          func390.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 128
              lineNumber = 140
              onSelf = true;
              var call393 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 128
              lineNumber = 141
              onSelf = true;
              var call394 = callmethod(this, "posY:=", [1], var_y);
              return call394
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func392.paramCounts = [
            2,
          ];
          func392.variableArities = [
            false,
          ];
          obj286.methods["setLocation"] = func392;
          func392.definitionLine = 139;
          func392.definitionModule = "kitty";
          var func395 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func395.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call396 = callmethod(this, "posX", [0]);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func395.paramCounts = [
            0,
          ];
          func395.variableArities = [
            false,
          ];
          obj286.methods["getX"] = func395;
          func395.definitionLine = 144;
          func395.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call398 = callmethod(this, "posY", [0]);
              return call398
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func397.paramCounts = [
            0,
          ];
          func397.variableArities = [
            false,
          ];
          obj286.methods["getY"] = func397;
          func397.definitionLine = 148;
          func397.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 153
              onSelf = true;
              var call400 = callmethod(this, "rotation", [0]);
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
            0,
          ];
          func399.variableArities = [
            false,
          ];
          obj286.methods["getRotation"] = func399;
          func399.definitionLine = 152;
          func399.definitionModule = "kitty";
          sourceObject = obj286;
          lineNumber = 70
          obj286.data["tag"] = var_tag__39__;
          var reader_kitty_tag_401 = function() {
            return this.data["tag"];
          }
          obj286.methods["tag"] = reader_kitty_tag_401;
          obj286.data["tag"] = var_tag__39__;
          var writer_kitty_tag_401 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj286.methods["tag:="] = writer_kitty_tag_401;
          reader_kitty_tag_401.confidential = true;
          writer_kitty_tag_401.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj286.mutable = true;
          sourceObject = obj286;
          lineNumber = 71
          obj286.data["posX"] = var_x__39__;
          var reader_kitty_posX_402 = function() {
            return this.data["posX"];
          }
          obj286.methods["posX"] = reader_kitty_posX_402;
          obj286.data["posX"] = var_x__39__;
          var writer_kitty_posX_402 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj286.methods["posX:="] = writer_kitty_posX_402;
          reader_kitty_posX_402.confidential = true;
          writer_kitty_posX_402.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj286.mutable = true;
          sourceObject = obj286;
          lineNumber = 72
          obj286.data["posY"] = var_y__39__;
          var reader_kitty_posY_403 = function() {
            return this.data["posY"];
          }
          obj286.methods["posY"] = reader_kitty_posY_403;
          obj286.data["posY"] = var_y__39__;
          var writer_kitty_posY_403 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj286.methods["posY:="] = writer_kitty_posY_403;
          reader_kitty_posY_403.confidential = true;
          writer_kitty_posY_403.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj286.mutable = true;
          sourceObject = obj286;
          lineNumber = 73
          obj286.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_404 = function() {
            return this.data["rotation"];
          }
          obj286.methods["rotation"] = reader_kitty_rotation_404;
          obj286.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_404 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj286.methods["rotation:="] = writer_kitty_rotation_404;
          reader_kitty_rotation_404.confidential = true;
          writer_kitty_rotation_404.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj286.mutable = true;
          sourceObject = obj286;
          lineNumber = 75
          var obj405 = Grace_allocObject();
          obj405.definitionModule = "kitty";
          obj405.definitionLine = 75;
          obj405.outer = this;
          var reader_kitty_outer_406 = function() {
            return this.outer;
          }
          obj405.methods["outer"] = reader_kitty_outer_406;
          function obj_init_405() {
            var origSuperDepth = superDepth;
            superDepth = obj405;
            obj405.annotations = [];
            var func407 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func407.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                return var_done
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func407.paramCounts = [
              0,
            ];
            func407.variableArities = [
              false,
            ];
            obj405.methods["update"] = func407;
            func407.definitionLine = 76;
            func407.definitionModule = "kitty";
            sourceObject = obj405;
            superDepth = origSuperDepth;
          }
          obj_init_405.apply(obj405, []);
          obj286.data["action"] = obj405;
          var reader_kitty_action_408 = function() {
            return this.data["action"];
          }
          obj286.methods["action"] = reader_kitty_action_408;
          obj286.data["action"] = obj405;
          var writer_kitty_action_408 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj286.methods["action:="] = writer_kitty_action_408;
          reader_kitty_action_408.confidential = true;
          writer_kitty_action_408.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj405)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj286.mutable = true;
          sourceObject = obj286;
          obj286.data["image"] = undefined;
          var reader_kitty_image_409 = function() {
            return this.data["image"];
          }
          obj286.methods["image"] = reader_kitty_image_409;
          obj286.data["image"] = undefined;
          var writer_kitty_image_409 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj286.methods["image:="] = writer_kitty_image_409;
          reader_kitty_image_409.confidential = true;
          writer_kitty_image_409.confidential = true;
          obj286.mutable = true;
          sourceObject = obj286;
          lineNumber = 83
          onSelf = true;
          var call410 = callmethod(this, "awake", [0]);
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          sourceObject = obj286;
          superDepth = origSuperDepth;
        }
        obj_init_286.apply(inheritingObject, []);
        return obj286
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj157.methods["new()object"] = func285;
    var func411 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 66
        var string412 = new GraceString("class KittyKat");
        return string412
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func411.paramCounts = [
    ];
    func411.variableArities = [
    ];
    obj157.methods["asDebugString"] = func411;
    func411.definitionLine = 66;
    func411.definitionModule = "kitty";
    sourceObject = obj157;
    sourceObject = obj157;
    superDepth = origSuperDepth;
  }
  obj_init_157.apply(obj157, []);
  var var_KittyKat = obj157;
  lineNumber = 157
  lineNumber = 164
  var func413 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func413.paramCounts[0])
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
  func413.paramCounts = [
    0,
  ];
  func413.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func413;
  func413.definitionLine = 164;
  func413.definitionModule = "kitty";
  var obj414 = Grace_allocObject();
  obj414.definitionModule = "kitty";
  obj414.definitionLine = 164;
  obj414.outer = this;
  var reader_kitty_outer_415 = function() {
    return this.outer;
  }
  obj414.methods["outer"] = reader_kitty_outer_415;
  function obj_init_414() {
    var origSuperDepth = superDepth;
    superDepth = obj414;
    obj414.annotations = [];
    var func416 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func416.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj417 = Grace_allocObject();
        obj417.definitionModule = "kitty";
        obj417.definitionLine = 164;
        obj417.outer = this;
        var reader_kitty_outer_418 = function() {
          return this.outer;
        }
        obj417.methods["outer"] = reader_kitty_outer_418;
        function obj_init_417() {
          var origSuperDepth = superDepth;
          superDepth = obj417;
          obj417.annotations = [];
          var func419 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func419.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              var if420 = var_done;
              lineNumber = 198
              onSelf = true;
              var call421 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call421)) {
                lineNumber = 200
                lineNumber = 199
                var bool422 = new GraceBoolean(false)
                return bool422
              }
              lineNumber = 203
              lineNumber = 164
              lineNumber = 202
              var call423 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call424 = callmethod(this, "document:=", [1], call423);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              var string425 = new GraceString("standard-canvas");
              onSelf = true;
              var call426 = callmethod(this, "document", [0]);
              var call427 = callmethod(call426,"getElementById", [1], string425);
              onSelf = true;
              var call428 = callmethod(this, "canvas:=", [1], call427);
              lineNumber = 205
              lineNumber = 202
              lineNumber = 204
              onSelf = true;
              var call429 = callmethod(this, "canvas", [0]);
              var call430 = callmethod(call429,"width", [0]);
              onSelf = true;
              var call431 = callmethod(this, "canvasWidth:=", [1], call430);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call432 = callmethod(this, "canvas", [0]);
              var call433 = callmethod(call432,"height", [0]);
              onSelf = true;
              var call434 = callmethod(this, "canvasHeight:=", [1], call433);
              lineNumber = 220
              var block435 = Grace_allocObject();
              block435.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block435.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block435.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block435.methods["match"] = GraceBlock_match;
              block435.methods["prefix?"] = GraceBlock_lift;
              block435.receiver = this;
              block435.className = 'block<kitty:220>';
              block435.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 211
                lineNumber = 210
                onSelf = true;
                var call436 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call438 = callmethod(this, "canvas", [0]);
                var call439 = callmethod(call438,"offsetWidth", [0]);
                onSelf = true;
                var call441 = callmethod(this, "canvas", [0]);
                var call442 = callmethod(call441,"offsetLeft", [0]);
                var call444 = callmethod(var_ev,"clientX", [0]);
                var diff446 = callmethod(call444, "-", [1], call442);
                var quotient448 = callmethod(diff446, "/", [1], call439);
                var prod450 = callmethod(quotient448, "*", [1], call436);
                var var_x = prod450;
                lineNumber = 211;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 215
                lineNumber = 211
                onSelf = true;
                var call451 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call453 = callmethod(this, "canvas", [0]);
                var call454 = callmethod(call453,"offsetHeight", [0]);
                onSelf = true;
                var call456 = callmethod(this, "canvas", [0]);
                var call457 = callmethod(call456,"offsetTop", [0]);
                var call459 = callmethod(var_ev,"clientY", [0]);
                var diff461 = callmethod(call459, "-", [1], call457);
                var quotient463 = callmethod(diff461, "/", [1], call454);
                var prod465 = callmethod(quotient463, "*", [1], call451);
                var var_y = prod465;
                lineNumber = 215;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 219
                var if466 = var_done;
                lineNumber = 215
                var opresult469 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call472 = callmethod(this, "canvasWidth", [0]);
                var diff474 = callmethod(call472, "-", [1], new GraceNum(20));
                var opresult477 = callmethod(var_x, ">", [1], diff474);
                var opresult479 = callmethod(opresult477, "&&", [1], opresult469);
                if (Grace_isTrue(opresult479)) {
                  lineNumber = 216
                  var call480 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 217
                  onSelf = true;
                  var call481 = callmethod(this, "stop", [0]);
                  if466 = call481;
                }
                return if466;
              };
              var_mouseDownListener = block435;
              lineNumber = 220
              var string482 = new GraceString("mousedown");
              onSelf = true;
              var call483 = callmethod(this, "canvas", [0]);
              var call484 = callmethod(call483,"addEventListener", [2], string482, var_mouseDownListener);
              lineNumber = 230
              var block485 = Grace_allocObject();
              block485.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block485.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block485.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block485.methods["match"] = GraceBlock_match;
              block485.methods["prefix?"] = GraceBlock_lift;
              block485.receiver = this;
              block485.className = 'block<kitty:230>';
              block485.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 228
                var if486 = var_done;
                lineNumber = 225
                var call488 = callmethod(var_ev,"keyCode", [0]);
                var opresult490 = callmethod(call488, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult490)) {
                  lineNumber = 226
                  onSelf = true;
                  var call491 = callmethod(this, "stop", [0]);
                  if486 = call491;
                }
                lineNumber = 229
                lineNumber = 225
                lineNumber = 228
                var call492 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call493 = callmethod(this, "currentKeyDown:=", [1], call492);
                return call493;
              };
              var_keyDownListener = block485;
              lineNumber = 230
              var string494 = new GraceString("keydown");
              onSelf = true;
              var call495 = callmethod(this, "document", [0]);
              var call496 = callmethod(call495,"addEventListener", [2], string494, var_keyDownListener);
              lineNumber = 236
              var block497 = Grace_allocObject();
              block497.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block497.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block497.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block497.methods["match"] = GraceBlock_match;
              block497.methods["prefix?"] = GraceBlock_lift;
              block497.receiver = this;
              block497.className = 'block<kitty:236>';
              block497.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 235
                lineNumber = 228
                lineNumber = 235
                lineNumber = 234
                var call498 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call499 = callmethod(this, "currentKeyDown:=", [1], call498);
                return call499;
              };
              var_keyUpListener = block497;
              lineNumber = 236
              var string500 = new GraceString("keyup");
              onSelf = true;
              var call501 = callmethod(this, "document", [0]);
              var call502 = callmethod(call501,"addEventListener", [2], string500, var_keyUpListener);
              lineNumber = 238
              lineNumber = 228
              lineNumber = 238
              var string503 = new GraceString("canvas");
              var call504 = callmethod(var_dom,"document", [0]);
              var call505 = callmethod(call504,"createElement", [1], string503);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas:=", [1], call505);
              lineNumber = 240
              lineNumber = 238
              lineNumber = 239
              onSelf = true;
              var call507 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call508 = callmethod(this, "backingCanvas", [0]);
              var call509 = callmethod(call508,"height:=", [1], call507);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 240
              onSelf = true;
              var call510 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call511 = callmethod(this, "backingCanvas", [0]);
              var call512 = callmethod(call511,"width:=", [1], call510);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 241
              var string513 = new GraceString("2d");
              onSelf = true;
              var call514 = callmethod(this, "backingCanvas", [0]);
              var call515 = callmethod(call514,"getContext", [1], string513);
              onSelf = true;
              var call516 = callmethod(this, "backingContext:=", [1], call515);
              lineNumber = 242
              lineNumber = 238
              lineNumber = 242
              var string517 = new GraceString("2d");
              onSelf = true;
              var call518 = callmethod(this, "canvas", [0]);
              var call519 = callmethod(call518,"getContext", [1], string517);
              onSelf = true;
              var call520 = callmethod(this, "mctx:=", [1], call519);
              lineNumber = 245
              var string521 = new GraceString("doggo.jpg");
              onSelf = true;
              var call522 = callmethod(this, "setBackground", [1], string521);
              lineNumber = 248
              lineNumber = 238
              lineNumber = 248
              var string523 = new GraceString("explosion.png");
              var call524 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call525 = callmethod(call524, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call526 = callmethod(call525, "Entity()x()y", [1, 1, 1], string523, new GraceNum(10), new GraceNum(10));
              onSelf = true;
              var call527 = callmethod(this, "ent:=", [1], call526);
              lineNumber = 257
              lineNumber = 248
              lineNumber = 251
              var bool528 = new GraceBoolean(true)
              onSelf = true;
              var call529 = callmethod(this, "isInit:=", [1], bool528);
              return call529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func419.paramCounts = [
            0,
          ];
          func419.variableArities = [
            false,
          ];
          obj417.methods["init"] = func419;
          func419.definitionLine = 194;
          func419.definitionModule = "kitty";
          var func530 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func530.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 248
              lineNumber = 262
              var bool531 = new GraceBoolean(true)
              onSelf = true;
              var call532 = callmethod(this, "isRunning:=", [1], bool531);
              lineNumber = 263
              var block533 = Grace_allocObject();
              block533.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block533.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block533.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block533.methods["match"] = GraceBlock_match;
              block533.methods["prefix?"] = GraceBlock_lift;
              block533.receiver = this;
              block533.className = 'block<kitty:263>';
              block533.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call534 = callmethod(this, "isRunning", [0]);
                return call534;
              };
              lineNumber = 267
              var block535 = Grace_allocObject();
              block535.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block535.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block535.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block535.methods["match"] = GraceBlock_match;
              block535.methods["prefix?"] = GraceBlock_lift;
              block535.receiver = this;
              block535.className = 'block<kitty:267>';
              block535.real = function(
              ) {
                sourceObject = this;
                lineNumber = 264
                onSelf = true;
                var call536 = callmethod(this, "update", [0]);
                return call536;
              };
              lineNumber = 263
              var call537 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block533, new GraceNum(10), block535);
              return call537
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func530.paramCounts = [
            0,
          ];
          func530.variableArities = [
            false,
          ];
          obj417.methods["start"] = func530;
          func530.definitionLine = 260;
          func530.definitionModule = "kitty";
          var func538 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func538.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 248
              lineNumber = 275
              onSelf = true;
              var call539 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call540 = callmethod(this, "mctx", [0]);
              var call541 = callmethod(call540,"fillStyle:=", [1], call539);
              lineNumber = 276
              onSelf = true;
              var call542 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call543 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call544 = callmethod(this, "mctx", [0]);
              var call545 = callmethod(call544,"fillRect", [4], new GraceNum(0), new GraceNum(0), call542, call543);
              lineNumber = 277
              onSelf = true;
              var call546 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call547 = callmethod(this, "mctx", [0]);
              var call548 = callmethod(call547,"drawImage", [3], call546, new GraceNum(0), new GraceNum(0));
              lineNumber = 278
              onSelf = true;
              var call549 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call551 = callmethod(this, "canvasWidth", [0]);
              var quotient553 = callmethod(call551, "/", [1], new GraceNum(2));
              onSelf = true;
              var call555 = callmethod(this, "canvasHeight", [0]);
              var quotient557 = callmethod(call555, "/", [1], new GraceNum(2));
              onSelf = true;
              var call558 = callmethod(this, "background", [0]);
              var call559 = callmethod(call558,"draw", [4], call549, quotient553, quotient557, new GraceNum(0));
              lineNumber = 281
              onSelf = true;
              var call560 = callmethod(this, "entities", [0]);
              lineNumber = 287
              var block561 = Grace_allocObject();
              block561.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block561.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block561.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block561.methods["match"] = GraceBlock_match;
              block561.methods["prefix?"] = GraceBlock_lift;
              block561.receiver = this;
              block561.className = 'block<kitty:287>';
              block561.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 282
                var call562 = callmethod(var_entity,"update", [0]);
                lineNumber = 283
                onSelf = true;
                var call563 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call565 = callmethod(this, "canvasWidth", [0]);
                var quotient567 = callmethod(call565, "/", [1], new GraceNum(2));
                onSelf = true;
                var call569 = callmethod(this, "canvasHeight", [0]);
                var quotient571 = callmethod(call569, "/", [1], new GraceNum(2));
                var call572 = callmethod(var_entity,"draw", [3], call563, quotient567, quotient571);
                return call572;
              };
              var call573 = callmethod(Grace_prelude,"for()do", [1, 1], call560, block561);
              return call573
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func538.paramCounts = [
            0,
          ];
          func538.variableArities = [
            false,
          ];
          obj417.methods["update"] = func538;
          func538.definitionLine = 270;
          func538.definitionModule = "kitty";
          var func574 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func574.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              var string575 = new GraceString("WORLD STOPPING...");
              var call576 = Grace_print(string575);
              lineNumber = 292
              lineNumber = 282
              lineNumber = 291
              var bool577 = new GraceBoolean(false)
              onSelf = true;
              var call578 = callmethod(this, "isRunning:=", [1], bool577);
              lineNumber = 292
              var string579 = new GraceString("mousedown");
              onSelf = true;
              var call580 = callmethod(this, "canvas", [0]);
              var call581 = callmethod(call580,"removeEventListener", [2], string579, var_mouseDownListener);
              lineNumber = 293
              var string582 = new GraceString("keydown");
              onSelf = true;
              var call583 = callmethod(this, "document", [0]);
              var call584 = callmethod(call583,"removeEventListener", [2], string582, var_keyDownListener);
              lineNumber = 294
              var string585 = new GraceString("keyup");
              onSelf = true;
              var call586 = callmethod(this, "document", [0]);
              var call587 = callmethod(call586,"removeEventListener", [2], string585, var_keyUpListener);
              return call587
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func574.paramCounts = [
            0,
          ];
          func574.variableArities = [
            false,
          ];
          obj417.methods["stop"] = func574;
          func574.definitionLine = 289;
          func574.definitionModule = "kitty";
          var func588 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func588.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 299
              lineNumber = 298
              onSelf = true;
              var call589 = callmethod(this, "currentKeyDown", [0]);
              var opresult592 = callmethod(var_key, "==", [1], call589);
              return opresult592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func588.paramCounts = [
            1,
          ];
          func588.variableArities = [
            false,
          ];
          obj417.methods["isKeyDown"] = func588;
          func588.definitionLine = 297;
          func588.definitionModule = "kitty";
          var func593 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              lineNumber = 282
              lineNumber = 302
              onSelf = true;
              var call594 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call595 = callmethod(this, "canvasHeight", [0]);
              var call596 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call597 = callmethod(call596, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call598 = callmethod(call597, "Image()width()height", [1, 1, 1], var_url, call594, call595);
              onSelf = true;
              var call599 = callmethod(this, "background:=", [1], call598);
              return call599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func593.paramCounts = [
            1,
          ];
          func593.variableArities = [
            false,
          ];
          obj417.methods["setBackground"] = func593;
          func593.definitionLine = 301;
          func593.definitionModule = "kitty";
          var func600 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              onSelf = true;
              var call601 = callmethod(this, "entities", [0]);
              var call602 = callmethod(call601,"push", [1], var_e);
              return call602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func600.paramTypes = [];
          func600.paramTypes.push([]);
          func600.paramCounts = [
            1,
          ];
          func600.variableArities = [
            false,
          ];
          obj417.methods["addEntity"] = func600;
          func600.definitionLine = 305;
          func600.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 310
              onSelf = true;
              var call604 = callmethod(this, "mctx", [0]);
              return call604
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func603.paramCounts = [
            0,
          ];
          func603.variableArities = [
            false,
          ];
          obj417.methods["getContext"] = func603;
          func603.definitionLine = 309;
          func603.definitionModule = "kitty";
          sourceObject = obj417;
          obj417.data["background"] = undefined;
          var reader_kitty_background_605 = function() {
            return this.data["background"];
          }
          obj417.methods["background"] = reader_kitty_background_605;
          obj417.data["background"] = undefined;
          var writer_kitty_background_605 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj417.methods["background:="] = writer_kitty_background_605;
          reader_kitty_background_605.confidential = true;
          writer_kitty_background_605.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 169
          var string606 = new GraceString("black");
          obj417.data["backgroundColour"] = string606;
          var reader_kitty_backgroundColour_607 = function() {
            return this.data["backgroundColour"];
          }
          obj417.methods["backgroundColour"] = reader_kitty_backgroundColour_607;
          obj417.data["backgroundColour"] = string606;
          var writer_kitty_backgroundColour_607 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj417.methods["backgroundColour:="] = writer_kitty_backgroundColour_607;
          reader_kitty_backgroundColour_607.confidential = true;
          writer_kitty_backgroundColour_607.confidential = true;
          lineNumber = 171;
          moduleName = "kitty";
          lineNumber = 169
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string606)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["document"] = undefined;
          var reader_kitty_document_608 = function() {
            return this.data["document"];
          }
          obj417.methods["document"] = reader_kitty_document_608;
          obj417.data["document"] = undefined;
          var writer_kitty_document_608 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj417.methods["document:="] = writer_kitty_document_608;
          reader_kitty_document_608.confidential = true;
          writer_kitty_document_608.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_609 = function() {
            return this.data["backingCanvas"];
          }
          obj417.methods["backingCanvas"] = reader_kitty_backingCanvas_609;
          obj417.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_609 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj417.methods["backingCanvas:="] = writer_kitty_backingCanvas_609;
          reader_kitty_backingCanvas_609.confidential = true;
          writer_kitty_backingCanvas_609.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingContext"] = undefined;
          var reader_kitty_backingContext_610 = function() {
            return this.data["backingContext"];
          }
          obj417.methods["backingContext"] = reader_kitty_backingContext_610;
          obj417.data["backingContext"] = undefined;
          var writer_kitty_backingContext_610 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj417.methods["backingContext:="] = writer_kitty_backingContext_610;
          reader_kitty_backingContext_610.confidential = true;
          writer_kitty_backingContext_610.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvas"] = undefined;
          var reader_kitty_canvas_611 = function() {
            return this.data["canvas"];
          }
          obj417.methods["canvas"] = reader_kitty_canvas_611;
          obj417.data["canvas"] = undefined;
          var writer_kitty_canvas_611 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj417.methods["canvas:="] = writer_kitty_canvas_611;
          reader_kitty_canvas_611.confidential = true;
          writer_kitty_canvas_611.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_612 = function() {
            return this.data["canvasWidth"];
          }
          obj417.methods["canvasWidth"] = reader_kitty_canvasWidth_612;
          obj417.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_612 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj417.methods["canvasWidth:="] = writer_kitty_canvasWidth_612;
          reader_kitty_canvasWidth_612.confidential = true;
          writer_kitty_canvasWidth_612.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_613 = function() {
            return this.data["canvasHeight"];
          }
          obj417.methods["canvasHeight"] = reader_kitty_canvasHeight_613;
          obj417.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_613 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj417.methods["canvasHeight:="] = writer_kitty_canvasHeight_613;
          reader_kitty_canvasHeight_613.confidential = true;
          writer_kitty_canvasHeight_613.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 180
          var call614 = callmethod(var_collections,"list", [0]);
          var call615 = callmethod(call614,"new", [0]);
          obj417.data["entities"] = call615;
          var reader_kitty_entities_616 = function() {
            return this.data["entities"];
          }
          obj417.methods["entities"] = reader_kitty_entities_616;
          obj417.data["entities"] = call615;
          var writer_kitty_entities_616 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj417.methods["entities:="] = writer_kitty_entities_616;
          reader_kitty_entities_616.confidential = true;
          writer_kitty_entities_616.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 182
          var bool617 = new GraceBoolean(false)
          obj417.data["isInit"] = bool617;
          var reader_kitty_isInit_618 = function() {
            return this.data["isInit"];
          }
          obj417.methods["isInit"] = reader_kitty_isInit_618;
          obj417.data["isInit"] = bool617;
          var writer_kitty_isInit_618 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj417.methods["isInit:="] = writer_kitty_isInit_618;
          reader_kitty_isInit_618.confidential = true;
          writer_kitty_isInit_618.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool617)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 183
          var bool619 = new GraceBoolean(false)
          obj417.data["isRunning"] = bool619;
          var reader_kitty_isRunning_620 = function() {
            return this.data["isRunning"];
          }
          obj417.methods["isRunning"] = reader_kitty_isRunning_620;
          obj417.data["isRunning"] = bool619;
          var writer_kitty_isRunning_620 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj417.methods["isRunning:="] = writer_kitty_isRunning_620;
          reader_kitty_isRunning_620.confidential = true;
          writer_kitty_isRunning_620.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool619)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["mctx"] = undefined;
          var reader_kitty_mctx_621 = function() {
            return this.data["mctx"];
          }
          obj417.methods["mctx"] = reader_kitty_mctx_621;
          obj417.data["mctx"] = undefined;
          var writer_kitty_mctx_621 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj417.methods["mctx:="] = writer_kitty_mctx_621;
          reader_kitty_mctx_621.confidential = true;
          writer_kitty_mctx_621.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 189
          lineNumber = 187
          var call622 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj417.data["currentKeyDown"] = call622;
          var reader_kitty_currentKeyDown_623 = function() {
            return this.data["currentKeyDown"];
          }
          obj417.methods["currentKeyDown"] = reader_kitty_currentKeyDown_623;
          obj417.data["currentKeyDown"] = call622;
          var writer_kitty_currentKeyDown_623 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj417.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_623;
          reader_kitty_currentKeyDown_623.confidential = true;
          writer_kitty_currentKeyDown_623.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call622)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["ent"] = undefined;
          var reader_kitty_ent_624 = function() {
            return this.data["ent"];
          }
          obj417.methods["ent"] = reader_kitty_ent_624;
          obj417.data["ent"] = undefined;
          var writer_kitty_ent_624 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj417.methods["ent:="] = writer_kitty_ent_624;
          reader_kitty_ent_624.confidential = true;
          writer_kitty_ent_624.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 191
          onSelf = true;
          var call625 = callmethod(this, "init", [0]);
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          sourceObject = obj417;
          superDepth = origSuperDepth;
        }
        obj_init_417.apply(obj417, []);
        return obj417
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
    obj414.methods["new"] = func416;
    func416.definitionLine = 164;
    func416.definitionModule = "kitty";
    var func626 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj627 = Grace_allocObject();
        obj627.definitionModule = "kitty";
        obj627.definitionLine = 164;
        var inho627 = inheritingObject;
        while (inho627.superobj) inho627 = inho627.superobj;
        inho627.superobj = obj627;
        obj627.data = inheritingObject.data;
        obj627.outer = this;
        var reader_kitty_outer_628 = function() {
          return this.outer;
        }
        obj627.methods["outer"] = reader_kitty_outer_628;
        function obj_init_627() {
          var origSuperDepth = superDepth;
          superDepth = obj627;
          obj627.annotations = [];
          var func629 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              var if630 = var_done;
              lineNumber = 198
              onSelf = true;
              var call631 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call631)) {
                lineNumber = 200
                lineNumber = 199
                var bool632 = new GraceBoolean(false)
                return bool632
              }
              lineNumber = 203
              lineNumber = 180
              lineNumber = 202
              var call633 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call634 = callmethod(this, "document:=", [1], call633);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              var string635 = new GraceString("standard-canvas");
              onSelf = true;
              var call636 = callmethod(this, "document", [0]);
              var call637 = callmethod(call636,"getElementById", [1], string635);
              onSelf = true;
              var call638 = callmethod(this, "canvas:=", [1], call637);
              lineNumber = 205
              lineNumber = 202
              lineNumber = 204
              onSelf = true;
              var call639 = callmethod(this, "canvas", [0]);
              var call640 = callmethod(call639,"width", [0]);
              onSelf = true;
              var call641 = callmethod(this, "canvasWidth:=", [1], call640);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call642 = callmethod(this, "canvas", [0]);
              var call643 = callmethod(call642,"height", [0]);
              onSelf = true;
              var call644 = callmethod(this, "canvasHeight:=", [1], call643);
              lineNumber = 220
              var block645 = Grace_allocObject();
              block645.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block645.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block645.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block645.methods["match"] = GraceBlock_match;
              block645.methods["prefix?"] = GraceBlock_lift;
              block645.receiver = this;
              block645.className = 'block<kitty:220>';
              block645.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 211
                lineNumber = 210
                onSelf = true;
                var call646 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call648 = callmethod(this, "canvas", [0]);
                var call649 = callmethod(call648,"offsetWidth", [0]);
                onSelf = true;
                var call651 = callmethod(this, "canvas", [0]);
                var call652 = callmethod(call651,"offsetLeft", [0]);
                var call654 = callmethod(var_ev,"clientX", [0]);
                var diff656 = callmethod(call654, "-", [1], call652);
                var quotient658 = callmethod(diff656, "/", [1], call649);
                var prod660 = callmethod(quotient658, "*", [1], call646);
                var var_x = prod660;
                lineNumber = 211;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 215
                lineNumber = 211
                onSelf = true;
                var call661 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call663 = callmethod(this, "canvas", [0]);
                var call664 = callmethod(call663,"offsetHeight", [0]);
                onSelf = true;
                var call666 = callmethod(this, "canvas", [0]);
                var call667 = callmethod(call666,"offsetTop", [0]);
                var call669 = callmethod(var_ev,"clientY", [0]);
                var diff671 = callmethod(call669, "-", [1], call667);
                var quotient673 = callmethod(diff671, "/", [1], call664);
                var prod675 = callmethod(quotient673, "*", [1], call661);
                var var_y = prod675;
                lineNumber = 215;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 219
                var if676 = var_done;
                lineNumber = 215
                var opresult679 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call682 = callmethod(this, "canvasWidth", [0]);
                var diff684 = callmethod(call682, "-", [1], new GraceNum(20));
                var opresult687 = callmethod(var_x, ">", [1], diff684);
                var opresult689 = callmethod(opresult687, "&&", [1], opresult679);
                if (Grace_isTrue(opresult689)) {
                  lineNumber = 216
                  var call690 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 217
                  onSelf = true;
                  var call691 = callmethod(this, "stop", [0]);
                  if676 = call691;
                }
                return if676;
              };
              var_mouseDownListener = block645;
              lineNumber = 220
              var string692 = new GraceString("mousedown");
              onSelf = true;
              var call693 = callmethod(this, "canvas", [0]);
              var call694 = callmethod(call693,"addEventListener", [2], string692, var_mouseDownListener);
              lineNumber = 230
              var block695 = Grace_allocObject();
              block695.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block695.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block695.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block695.methods["match"] = GraceBlock_match;
              block695.methods["prefix?"] = GraceBlock_lift;
              block695.receiver = this;
              block695.className = 'block<kitty:230>';
              block695.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 228
                var if696 = var_done;
                lineNumber = 225
                var call698 = callmethod(var_ev,"keyCode", [0]);
                var opresult700 = callmethod(call698, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult700)) {
                  lineNumber = 226
                  onSelf = true;
                  var call701 = callmethod(this, "stop", [0]);
                  if696 = call701;
                }
                lineNumber = 229
                lineNumber = 225
                lineNumber = 228
                var call702 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call703 = callmethod(this, "currentKeyDown:=", [1], call702);
                return call703;
              };
              var_keyDownListener = block695;
              lineNumber = 230
              var string704 = new GraceString("keydown");
              onSelf = true;
              var call705 = callmethod(this, "document", [0]);
              var call706 = callmethod(call705,"addEventListener", [2], string704, var_keyDownListener);
              lineNumber = 236
              var block707 = Grace_allocObject();
              block707.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block707.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block707.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block707.methods["match"] = GraceBlock_match;
              block707.methods["prefix?"] = GraceBlock_lift;
              block707.receiver = this;
              block707.className = 'block<kitty:236>';
              block707.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 235
                lineNumber = 228
                lineNumber = 235
                lineNumber = 234
                var call708 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call709 = callmethod(this, "currentKeyDown:=", [1], call708);
                return call709;
              };
              var_keyUpListener = block707;
              lineNumber = 236
              var string710 = new GraceString("keyup");
              onSelf = true;
              var call711 = callmethod(this, "document", [0]);
              var call712 = callmethod(call711,"addEventListener", [2], string710, var_keyUpListener);
              lineNumber = 238
              lineNumber = 228
              lineNumber = 238
              var string713 = new GraceString("canvas");
              var call714 = callmethod(var_dom,"document", [0]);
              var call715 = callmethod(call714,"createElement", [1], string713);
              onSelf = true;
              var call716 = callmethod(this, "backingCanvas:=", [1], call715);
              lineNumber = 240
              lineNumber = 238
              lineNumber = 239
              onSelf = true;
              var call717 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call718 = callmethod(this, "backingCanvas", [0]);
              var call719 = callmethod(call718,"height:=", [1], call717);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 240
              onSelf = true;
              var call720 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call721 = callmethod(this, "backingCanvas", [0]);
              var call722 = callmethod(call721,"width:=", [1], call720);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 241
              var string723 = new GraceString("2d");
              onSelf = true;
              var call724 = callmethod(this, "backingCanvas", [0]);
              var call725 = callmethod(call724,"getContext", [1], string723);
              onSelf = true;
              var call726 = callmethod(this, "backingContext:=", [1], call725);
              lineNumber = 242
              lineNumber = 238
              lineNumber = 242
              var string727 = new GraceString("2d");
              onSelf = true;
              var call728 = callmethod(this, "canvas", [0]);
              var call729 = callmethod(call728,"getContext", [1], string727);
              onSelf = true;
              var call730 = callmethod(this, "mctx:=", [1], call729);
              lineNumber = 245
              var string731 = new GraceString("doggo.jpg");
              onSelf = true;
              var call732 = callmethod(this, "setBackground", [1], string731);
              lineNumber = 248
              lineNumber = 238
              lineNumber = 248
              var string733 = new GraceString("explosion.png");
              var call734 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call735 = callmethod(call734, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call736 = callmethod(call735, "Entity()x()y", [1, 1, 1], string733, new GraceNum(10), new GraceNum(10));
              onSelf = true;
              var call737 = callmethod(this, "ent:=", [1], call736);
              lineNumber = 257
              lineNumber = 248
              lineNumber = 251
              var bool738 = new GraceBoolean(true)
              onSelf = true;
              var call739 = callmethod(this, "isInit:=", [1], bool738);
              return call739
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func629.paramCounts = [
            0,
          ];
          func629.variableArities = [
            false,
          ];
          obj627.methods["init"] = func629;
          func629.definitionLine = 194;
          func629.definitionModule = "kitty";
          var func740 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func740.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 248
              lineNumber = 262
              var bool741 = new GraceBoolean(true)
              onSelf = true;
              var call742 = callmethod(this, "isRunning:=", [1], bool741);
              lineNumber = 263
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
              block743.className = 'block<kitty:263>';
              block743.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call744 = callmethod(this, "isRunning", [0]);
                return call744;
              };
              lineNumber = 267
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
              block745.className = 'block<kitty:267>';
              block745.real = function(
              ) {
                sourceObject = this;
                lineNumber = 264
                onSelf = true;
                var call746 = callmethod(this, "update", [0]);
                return call746;
              };
              lineNumber = 263
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
          obj627.methods["start"] = func740;
          func740.definitionLine = 260;
          func740.definitionModule = "kitty";
          var func748 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func748.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 248
              lineNumber = 275
              onSelf = true;
              var call749 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call750 = callmethod(this, "mctx", [0]);
              var call751 = callmethod(call750,"fillStyle:=", [1], call749);
              lineNumber = 276
              onSelf = true;
              var call752 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call753 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call754 = callmethod(this, "mctx", [0]);
              var call755 = callmethod(call754,"fillRect", [4], new GraceNum(0), new GraceNum(0), call752, call753);
              lineNumber = 277
              onSelf = true;
              var call756 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call757 = callmethod(this, "mctx", [0]);
              var call758 = callmethod(call757,"drawImage", [3], call756, new GraceNum(0), new GraceNum(0));
              lineNumber = 278
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
              lineNumber = 281
              onSelf = true;
              var call770 = callmethod(this, "entities", [0]);
              lineNumber = 287
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
              block771.className = 'block<kitty:287>';
              block771.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 282
                var call772 = callmethod(var_entity,"update", [0]);
                lineNumber = 283
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
          obj627.methods["update"] = func748;
          func748.definitionLine = 270;
          func748.definitionModule = "kitty";
          var func784 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func784.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              var string785 = new GraceString("WORLD STOPPING...");
              var call786 = Grace_print(string785);
              lineNumber = 292
              lineNumber = 282
              lineNumber = 291
              var bool787 = new GraceBoolean(false)
              onSelf = true;
              var call788 = callmethod(this, "isRunning:=", [1], bool787);
              lineNumber = 292
              var string789 = new GraceString("mousedown");
              onSelf = true;
              var call790 = callmethod(this, "canvas", [0]);
              var call791 = callmethod(call790,"removeEventListener", [2], string789, var_mouseDownListener);
              lineNumber = 293
              var string792 = new GraceString("keydown");
              onSelf = true;
              var call793 = callmethod(this, "document", [0]);
              var call794 = callmethod(call793,"removeEventListener", [2], string792, var_keyDownListener);
              lineNumber = 294
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
          obj627.methods["stop"] = func784;
          func784.definitionLine = 289;
          func784.definitionModule = "kitty";
          var func798 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func798.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 299
              lineNumber = 298
              onSelf = true;
              var call799 = callmethod(this, "currentKeyDown", [0]);
              var opresult802 = callmethod(var_key, "==", [1], call799);
              return opresult802
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
          obj627.methods["isKeyDown"] = func798;
          func798.definitionLine = 297;
          func798.definitionModule = "kitty";
          var func803 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func803.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              lineNumber = 282
              lineNumber = 302
              onSelf = true;
              var call804 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call805 = callmethod(this, "canvasHeight", [0]);
              var call806 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call807 = callmethod(call806, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call808 = callmethod(call807, "Image()width()height", [1, 1, 1], var_url, call804, call805);
              onSelf = true;
              var call809 = callmethod(this, "background:=", [1], call808);
              return call809
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func803.paramCounts = [
            1,
          ];
          func803.variableArities = [
            false,
          ];
          obj627.methods["setBackground"] = func803;
          func803.definitionLine = 301;
          func803.definitionModule = "kitty";
          var func810 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func810.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              onSelf = true;
              var call811 = callmethod(this, "entities", [0]);
              var call812 = callmethod(call811,"push", [1], var_e);
              return call812
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func810.paramTypes = [];
          func810.paramTypes.push([]);
          func810.paramCounts = [
            1,
          ];
          func810.variableArities = [
            false,
          ];
          obj627.methods["addEntity"] = func810;
          func810.definitionLine = 305;
          func810.definitionModule = "kitty";
          var func813 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func813.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 310
              onSelf = true;
              var call814 = callmethod(this, "mctx", [0]);
              return call814
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func813.paramCounts = [
            0,
          ];
          func813.variableArities = [
            false,
          ];
          obj627.methods["getContext"] = func813;
          func813.definitionLine = 309;
          func813.definitionModule = "kitty";
          sourceObject = obj627;
          obj627.data["background"] = undefined;
          var reader_kitty_background_815 = function() {
            return this.data["background"];
          }
          obj627.methods["background"] = reader_kitty_background_815;
          obj627.data["background"] = undefined;
          var writer_kitty_background_815 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj627.methods["background:="] = writer_kitty_background_815;
          reader_kitty_background_815.confidential = true;
          writer_kitty_background_815.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 169
          var string816 = new GraceString("black");
          obj627.data["backgroundColour"] = string816;
          var reader_kitty_backgroundColour_817 = function() {
            return this.data["backgroundColour"];
          }
          obj627.methods["backgroundColour"] = reader_kitty_backgroundColour_817;
          obj627.data["backgroundColour"] = string816;
          var writer_kitty_backgroundColour_817 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj627.methods["backgroundColour:="] = writer_kitty_backgroundColour_817;
          reader_kitty_backgroundColour_817.confidential = true;
          writer_kitty_backgroundColour_817.confidential = true;
          lineNumber = 171;
          moduleName = "kitty";
          lineNumber = 169
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string816)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["document"] = undefined;
          var reader_kitty_document_818 = function() {
            return this.data["document"];
          }
          obj627.methods["document"] = reader_kitty_document_818;
          obj627.data["document"] = undefined;
          var writer_kitty_document_818 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj627.methods["document:="] = writer_kitty_document_818;
          reader_kitty_document_818.confidential = true;
          writer_kitty_document_818.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_819 = function() {
            return this.data["backingCanvas"];
          }
          obj627.methods["backingCanvas"] = reader_kitty_backingCanvas_819;
          obj627.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_819 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj627.methods["backingCanvas:="] = writer_kitty_backingCanvas_819;
          reader_kitty_backingCanvas_819.confidential = true;
          writer_kitty_backingCanvas_819.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["backingContext"] = undefined;
          var reader_kitty_backingContext_820 = function() {
            return this.data["backingContext"];
          }
          obj627.methods["backingContext"] = reader_kitty_backingContext_820;
          obj627.data["backingContext"] = undefined;
          var writer_kitty_backingContext_820 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj627.methods["backingContext:="] = writer_kitty_backingContext_820;
          reader_kitty_backingContext_820.confidential = true;
          writer_kitty_backingContext_820.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvas"] = undefined;
          var reader_kitty_canvas_821 = function() {
            return this.data["canvas"];
          }
          obj627.methods["canvas"] = reader_kitty_canvas_821;
          obj627.data["canvas"] = undefined;
          var writer_kitty_canvas_821 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj627.methods["canvas:="] = writer_kitty_canvas_821;
          reader_kitty_canvas_821.confidential = true;
          writer_kitty_canvas_821.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_822 = function() {
            return this.data["canvasWidth"];
          }
          obj627.methods["canvasWidth"] = reader_kitty_canvasWidth_822;
          obj627.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_822 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj627.methods["canvasWidth:="] = writer_kitty_canvasWidth_822;
          reader_kitty_canvasWidth_822.confidential = true;
          writer_kitty_canvasWidth_822.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_823 = function() {
            return this.data["canvasHeight"];
          }
          obj627.methods["canvasHeight"] = reader_kitty_canvasHeight_823;
          obj627.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_823 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj627.methods["canvasHeight:="] = writer_kitty_canvasHeight_823;
          reader_kitty_canvasHeight_823.confidential = true;
          writer_kitty_canvasHeight_823.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 180
          var call824 = callmethod(var_collections,"list", [0]);
          var call825 = callmethod(call824,"new", [0]);
          obj627.data["entities"] = call825;
          var reader_kitty_entities_826 = function() {
            return this.data["entities"];
          }
          obj627.methods["entities"] = reader_kitty_entities_826;
          obj627.data["entities"] = call825;
          var writer_kitty_entities_826 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj627.methods["entities:="] = writer_kitty_entities_826;
          reader_kitty_entities_826.confidential = true;
          writer_kitty_entities_826.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call825)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 182
          var bool827 = new GraceBoolean(false)
          obj627.data["isInit"] = bool827;
          var reader_kitty_isInit_828 = function() {
            return this.data["isInit"];
          }
          obj627.methods["isInit"] = reader_kitty_isInit_828;
          obj627.data["isInit"] = bool827;
          var writer_kitty_isInit_828 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj627.methods["isInit:="] = writer_kitty_isInit_828;
          reader_kitty_isInit_828.confidential = true;
          writer_kitty_isInit_828.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool827)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 183
          var bool829 = new GraceBoolean(false)
          obj627.data["isRunning"] = bool829;
          var reader_kitty_isRunning_830 = function() {
            return this.data["isRunning"];
          }
          obj627.methods["isRunning"] = reader_kitty_isRunning_830;
          obj627.data["isRunning"] = bool829;
          var writer_kitty_isRunning_830 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj627.methods["isRunning:="] = writer_kitty_isRunning_830;
          reader_kitty_isRunning_830.confidential = true;
          writer_kitty_isRunning_830.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool829)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["mctx"] = undefined;
          var reader_kitty_mctx_831 = function() {
            return this.data["mctx"];
          }
          obj627.methods["mctx"] = reader_kitty_mctx_831;
          obj627.data["mctx"] = undefined;
          var writer_kitty_mctx_831 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj627.methods["mctx:="] = writer_kitty_mctx_831;
          reader_kitty_mctx_831.confidential = true;
          writer_kitty_mctx_831.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 189
          lineNumber = 187
          var call832 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj627.data["currentKeyDown"] = call832;
          var reader_kitty_currentKeyDown_833 = function() {
            return this.data["currentKeyDown"];
          }
          obj627.methods["currentKeyDown"] = reader_kitty_currentKeyDown_833;
          obj627.data["currentKeyDown"] = call832;
          var writer_kitty_currentKeyDown_833 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj627.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_833;
          reader_kitty_currentKeyDown_833.confidential = true;
          writer_kitty_currentKeyDown_833.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call832)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["ent"] = undefined;
          var reader_kitty_ent_834 = function() {
            return this.data["ent"];
          }
          obj627.methods["ent"] = reader_kitty_ent_834;
          obj627.data["ent"] = undefined;
          var writer_kitty_ent_834 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj627.methods["ent:="] = writer_kitty_ent_834;
          reader_kitty_ent_834.confidential = true;
          writer_kitty_ent_834.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 191
          onSelf = true;
          var call835 = callmethod(this, "init", [0]);
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          superDepth = origSuperDepth;
        }
        obj_init_627.apply(inheritingObject, []);
        return obj627
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj414.methods["new()object"] = func626;
    var func836 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 164
        var string837 = new GraceString("class KittyWorld");
        return string837
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func836.paramCounts = [
    ];
    func836.variableArities = [
    ];
    obj414.methods["asDebugString"] = func836;
    func836.definitionLine = 164;
    func836.definitionModule = "kitty";
    sourceObject = obj414;
    sourceObject = obj414;
    superDepth = origSuperDepth;
  }
  obj_init_414.apply(obj414, []);
  var var_KittyWorld = obj414;
  lineNumber = 315
  lineNumber = 324
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
  gctCache['kitty'] = "constructors-of:KittyKat:\n new\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyKat\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\npath:\n kitty\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n backgroundColour:=\n canvasHeight:=\n backingCanvas\n init\n canvasHeight\n backingContext:=\n currentKeyDown:=\n canvas\n background\n mctx\n addEntity\n isInit:=\n backingContext\n document:=\n canvasWidth\n document\n update\n getContext\n canvasWidth:=\n start\n canvas:=\n isRunning:=\n background:=\n isRunning\n ent:=\n stop\n currentKeyDown\n ent\n backgroundColour\n setBackground\n isInit\n mctx:=\n entities:=\n backingCanvas:=\n isKeyDown\n entities\nmethods-of:KittyKat.new:\n start\n setLocation\n createImage\n rotation:=\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n setAction\n onDestroy\n turn\n awake\n posX\n posY\n draw\n setImage\n rotation\n tag:=\n move\n tag\n getRotation\n update\n strafe\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyKat\n Entity()x()y\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n imgTag\n getTag\n elements\n width\nfresh:Entity()x()y:\n start\n strafe\n draw\n rotation:=\n action:=\n move\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n onDestroy\n turn\n awake\n setAction\n posX\n posY\n setImage\n rotation\n tag:=\n createImage\n tag\n getRotation\n update\n setLocation\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n imgTag\n getTag\n elements\n width\nmethods-of:KittyWorld.new:\n backgroundColour:=\n canvasHeight:=\n backingCanvas\n init\n canvasHeight\n backingContext:=\n currentKeyDown:=\n canvas\n background\n canvasWidth\n stop\n isInit:=\n backingContext\n document:=\n mctx\n document\n update\n getContext\n mctx:=\n start\n canvas:=\n backgroundColour\n background:=\n isRunning\n ent:=\n addEntity\n currentKeyDown\n ent\n isRunning:=\n setBackground\n isInit\n canvasWidth:=\n entities:=\n backingCanvas:=\n isKeyDown\n entities\n";
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
    "",
    "// Grace math returns NaNs",
    "def math = dom.window.Math",
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
    "class KittyKat.new(tag', x', y') {",
    "    ",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
    "    var tag := tag'",
    "    var posX := x'",
    "    var posY := y'",
    "    var rotation := 0",
    "",
    "    var action := object {",
    "        method update {",
    "            // print \"UPDATING ENTITY...\"",
    "        }",
    "    }",
    "",
    "    var image",
    "",
    "    awake",
    "",
    "    // Called on creation",
    "    method awake {",
    "        // print \"awake\"",
    "        createImage(\"realyee.png\")",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        // print \"start\"",
    "    }",
    "",
    "    // Called by main game class",
    "    method update {",
    "        action.update",
    "    }",
    "",
    "    // Called on class destructor",
    "    method onDestroy {",
    "",
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
    "        inherits KittyKat.new(tag', x', y')",
    "    }",
    "}",
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
    "",
    "    var currentKeyDown := -1",
    "",
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
    "        ent := Entity(\"explosion.png\")x(10)y(10)",
    "        // Image(url)width(canvasWidth)height(canvasHeight)",
    "",
    "        isInit := true",
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
    "            entity.update",
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
    "    method isKeyDown(key) {",
    "        return key == currentKeyDown",
    "    }",
    "",
    "    method setBackground(url) {",
    "        background := Image(url)width(canvasWidth)height(canvasHeight)",
    "    }",
    "",
    "    method addEntity(e: KittyEntity) {",
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
