function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 58
  var func0 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
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
      lineNumber = 59
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 59;
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
        lineNumber = 60
        var call3 = callmethod(var_KittyImage,"new()object", [3, 1], var_url, var_width__39__, var_height__39__, this);
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
  func0.definitionLine = 58;
  func0.definitionModule = "kitty";
  var func4 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
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
      obj5.definitionLine = 59;
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
        var call7 = callmethod(var_KittyImage,"new()object", [3, 1], var_url, var_width__39__, var_height__39__, this);
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
  lineNumber = 164
  var func8 = function(argcv) {
    var curarg = 1;
    var var_ghee = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func8.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var var_x__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func8.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (foo)"));
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func8.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (bar)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 165
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 165;
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
        lineNumber = 169
        var call11 = callmethod(var_KittyKat,"new()object", [3, 1], var_ghee, var_x__39__, var_y__39__, this);
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
  this.methods["Entity()foo()bar"] = func8;
  func8.definitionLine = 164;
  func8.definitionModule = "kitty";
  var func12 = function(argcv) {
    var curarg = 1;
    var var_ghee = arguments[curarg];
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
      obj13.definitionLine = 165;
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
        var call15 = callmethod(var_KittyKat,"new()object", [3, 1], var_ghee, var_x__39__, var_y__39__, this);
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
  this.methods["Entity()foo()bar()object"] = func12;
  lineNumber = 325
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 326
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 326;
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
        lineNumber = 327
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
  func16.definitionLine = 325;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 326;
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
  lineNumber = 334
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 336
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 343
      var if27 = var_done;
      lineNumber = 338
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 339
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 341
        return var_done
      }
      lineNumber = 343
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 346
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
  func24.definitionLine = 334;
  func24.definitionModule = "kitty";
  lineNumber = 349
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
      lineNumber = 351
      lineNumber = 350
      var_m__95__world = var_world__39__;
      lineNumber = 352
      lineNumber = 351
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
  func34.definitionLine = 349;
  func34.definitionModule = "kitty";
  lineNumber = 354
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
      lineNumber = 355
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
  func36.definitionLine = 354;
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
  lineNumber = 346
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
  func39.definitionLine = 346;
  func39.definitionModule = "kitty";
  lineNumber = 346
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
  func40.definitionLine = 346;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 346
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
  func42.definitionLine = 346;
  func42.definitionModule = "kitty";
  lineNumber = 346
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
  func43.definitionLine = 346;
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
  lineNumber = 346
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
  func44.definitionLine = 346;
  func44.definitionModule = "kitty";
  lineNumber = 346
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
  func45.definitionLine = 346;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 346
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
  func46.definitionLine = 346;
  func46.definitionModule = "kitty";
  lineNumber = 346
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
  func47.definitionLine = 346;
  func47.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 346
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
  func48.definitionLine = 346;
  func48.definitionModule = "kitty";
  lineNumber = 346
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
  func49.definitionLine = 346;
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
              lineNumber = 36
              var call60 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call61 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod65 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient67 = callmethod(prod65, "/", [1], new GraceNum(180));
              var call68 = callmethod(var_ctx,"rotate", [1], quotient67);
              lineNumber = 40
              onSelf = true;
              var call69 = callmethod(this, "elements", [0]);
              lineNumber = 43
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
              block70.className = 'block<kitty:43>';
              block70.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
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
              lineNumber = 43
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
          func59.definitionLine = 34;
          func59.definitionModule = "kitty";
          var func86 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func86.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
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
          func86.definitionLine = 47;
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
              lineNumber = 52
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
          func88.definitionLine = 51;
          func88.definitionModule = "kitty";
          sourceObject = obj57;
          lineNumber = 24
          var string91 = new GraceString("...");
          var string94 = new GraceString("CREATING NEW IMAGE: ");
          var opresult96 = callmethod(string94, "++", [1], var_url__39__);
          var opresult98 = callmethod(opresult96, "++", [1], string91);
          var call99 = Grace_print(opresult98);
          sourceObject = obj57;
          lineNumber = 25
          var string100 = new GraceString("img");
          var call101 = callmethod(var_dom,"document", [0]);
          var call102 = callmethod(call101,"createElement", [1], string100);
          obj57.data["imgTag"] = call102;
          var reader_kitty_imgTag_103 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_103.def = true;
          reader_kitty_imgTag_103.confidential = true;
          obj57.methods["imgTag"] = reader_kitty_imgTag_103;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call102)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj57;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call104 = callmethod(this, "imgTag", [0]);
          var call105 = callmethod(call104,"src:=", [1], var_url__39__);
          sourceObject = obj57;
          lineNumber = 28
          var call106 = callmethod(var_collections,"list", [0]);
          var call107 = callmethod(call106,"new", [0]);
          obj57.data["elements"] = call107;
          var reader_kitty_elements_108 = function() {
            return this.data["elements"];
          }
          obj57.methods["elements"] = reader_kitty_elements_108;
          obj57.data["elements"] = call107;
          var writer_kitty_elements_108 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj57.methods["elements:="] = writer_kitty_elements_108;
          reader_kitty_elements_108.confidential = true;
          writer_kitty_elements_108.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call107)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 29
          onSelf = true;
          var call109 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call110 = callmethod(this, "elements", [0]);
          var call111 = callmethod(call110,"push", [1], call109);
          sourceObject = obj57;
          lineNumber = 31
          obj57.data["height"] = var_height__39__;
          var reader_kitty_height_112 = function() {
            return this.data["height"];
          }
          obj57.methods["height"] = reader_kitty_height_112;
          obj57.data["height"] = var_height__39__;
          var writer_kitty_height_112 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj57.methods["height:="] = writer_kitty_height_112;
          reader_kitty_height_112.confidential = true;
          writer_kitty_height_112.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 32
          obj57.data["width"] = var_width__39__;
          var reader_kitty_width_113 = function() {
            return this.data["width"];
          }
          obj57.methods["width"] = reader_kitty_width_113;
          obj57.data["width"] = var_width__39__;
          var writer_kitty_width_113 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj57.methods["width:="] = writer_kitty_width_113;
          reader_kitty_width_113.confidential = true;
          writer_kitty_width_113.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          sourceObject = obj57;
          sourceObject = obj57;
          sourceObject = obj57;
          lineNumber = 55
          var string114 = new GraceString("");
          var string117 = new GraceString("CREATED NEW IMAGE: ");
          var opresult119 = callmethod(string117, "++", [1], var_url__39__);
          var opresult121 = callmethod(opresult119, "++", [1], string114);
          var call122 = Grace_print(opresult121);
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
    var func123 = function(argcv) {
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
        var obj124 = Grace_allocObject();
        obj124.definitionModule = "kitty";
        obj124.definitionLine = 22;
        var inho124 = inheritingObject;
        while (inho124.superobj) inho124 = inho124.superobj;
        inho124.superobj = obj124;
        obj124.data = inheritingObject.data;
        obj124.outer = this;
        var reader_kitty_outer_125 = function() {
          return this.outer;
        }
        obj124.methods["outer"] = reader_kitty_outer_125;
        function obj_init_124() {
          var origSuperDepth = superDepth;
          superDepth = obj124;
          obj124.annotations = [];
          var func126 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func126.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call127 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call128 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod132 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient134 = callmethod(prod132, "/", [1], new GraceNum(180));
              var call135 = callmethod(var_ctx,"rotate", [1], quotient134);
              lineNumber = 40
              onSelf = true;
              var call136 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block137 = Grace_allocObject();
              block137.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block137.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block137.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block137.methods["match"] = GraceBlock_match;
              block137.methods["prefix?"] = GraceBlock_lift;
              block137.receiver = this;
              block137.className = 'block<kitty:43>';
              block137.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call139 = callmethod(this, "width", [0]);
                var call140 = callmethod(call139,"prefix-", [0]);
                var quotient142 = callmethod(call140, "/", [1], new GraceNum(2));
                onSelf = true;
                var call144 = callmethod(this, "height", [0]);
                var call145 = callmethod(call144,"prefix-", [0]);
                var quotient147 = callmethod(call145, "/", [1], new GraceNum(2));
                onSelf = true;
                var call148 = callmethod(this, "width", [0]);
                onSelf = true;
                var call149 = callmethod(this, "height", [0]);
                var call150 = callmethod(var_ctx,"drawImage", [5], var_element, quotient142, quotient147, call148, call149);
                return call150;
              };
              var call151 = callmethod(Grace_prelude,"for()do", [1, 1], call136, block137);
              lineNumber = 43
              var call152 = callmethod(var_ctx,"restore", [0]);
              return call152
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func126.paramCounts = [
            4,
          ];
          func126.variableArities = [
            false,
          ];
          obj124.methods["draw"] = func126;
          func126.definitionLine = 34;
          func126.definitionModule = "kitty";
          var func153 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call154 = callmethod(this, "imgTag", [0]);
              return call154
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func153.paramCounts = [
            0,
          ];
          func153.variableArities = [
            false,
          ];
          obj124.methods["getTag"] = func153;
          func153.definitionLine = 47;
          func153.definitionModule = "kitty";
          var func155 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func155.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call156 = callmethod(this, "elements", [0]);
              var call157 = callmethod(call156,"push", [1], var_imgTag__39__);
              return call157
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func155.paramCounts = [
            1,
          ];
          func155.variableArities = [
            false,
          ];
          obj124.methods["drawImage"] = func155;
          func155.definitionLine = 51;
          func155.definitionModule = "kitty";
          sourceObject = obj124;
          lineNumber = 24
          var string158 = new GraceString("...");
          var string161 = new GraceString("CREATING NEW IMAGE: ");
          var opresult163 = callmethod(string161, "++", [1], var_url__39__);
          var opresult165 = callmethod(opresult163, "++", [1], string158);
          var call166 = Grace_print(opresult165);
          sourceObject = obj124;
          lineNumber = 25
          var string167 = new GraceString("img");
          var call168 = callmethod(var_dom,"document", [0]);
          var call169 = callmethod(call168,"createElement", [1], string167);
          obj124.data["imgTag"] = call169;
          var reader_kitty_imgTag_170 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_170.def = true;
          reader_kitty_imgTag_170.confidential = true;
          obj124.methods["imgTag"] = reader_kitty_imgTag_170;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call169)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj124;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call171 = callmethod(this, "imgTag", [0]);
          var call172 = callmethod(call171,"src:=", [1], var_url__39__);
          sourceObject = obj124;
          lineNumber = 28
          var call173 = callmethod(var_collections,"list", [0]);
          var call174 = callmethod(call173,"new", [0]);
          obj124.data["elements"] = call174;
          var reader_kitty_elements_175 = function() {
            return this.data["elements"];
          }
          obj124.methods["elements"] = reader_kitty_elements_175;
          obj124.data["elements"] = call174;
          var writer_kitty_elements_175 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj124.methods["elements:="] = writer_kitty_elements_175;
          reader_kitty_elements_175.confidential = true;
          writer_kitty_elements_175.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call174)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          lineNumber = 29
          onSelf = true;
          var call176 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call177 = callmethod(this, "elements", [0]);
          var call178 = callmethod(call177,"push", [1], call176);
          sourceObject = obj124;
          lineNumber = 31
          obj124.data["height"] = var_height__39__;
          var reader_kitty_height_179 = function() {
            return this.data["height"];
          }
          obj124.methods["height"] = reader_kitty_height_179;
          obj124.data["height"] = var_height__39__;
          var writer_kitty_height_179 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj124.methods["height:="] = writer_kitty_height_179;
          reader_kitty_height_179.confidential = true;
          writer_kitty_height_179.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          lineNumber = 32
          obj124.data["width"] = var_width__39__;
          var reader_kitty_width_180 = function() {
            return this.data["width"];
          }
          obj124.methods["width"] = reader_kitty_width_180;
          obj124.data["width"] = var_width__39__;
          var writer_kitty_width_180 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj124.methods["width:="] = writer_kitty_width_180;
          reader_kitty_width_180.confidential = true;
          writer_kitty_width_180.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          sourceObject = obj124;
          sourceObject = obj124;
          sourceObject = obj124;
          lineNumber = 55
          var string181 = new GraceString("");
          var string184 = new GraceString("CREATED NEW IMAGE: ");
          var opresult186 = callmethod(string184, "++", [1], var_url__39__);
          var opresult188 = callmethod(opresult186, "++", [1], string181);
          var call189 = Grace_print(opresult188);
          superDepth = origSuperDepth;
        }
        obj_init_124.apply(inheritingObject, []);
        return obj124
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj54.methods["new()object"] = func123;
    var func190 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string191 = new GraceString("class KittyImage");
        return string191
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func190.paramCounts = [
    ];
    func190.variableArities = [
    ];
    obj54.methods["asDebugString"] = func190;
    func190.definitionLine = 22;
    func190.definitionModule = "kitty";
    sourceObject = obj54;
    sourceObject = obj54;
    superDepth = origSuperDepth;
  }
  obj_init_54.apply(obj54, []);
  var var_KittyImage = obj54;
  lineNumber = 58
  lineNumber = 65
  var func192 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func192.paramCounts[0])
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
  func192.paramCounts = [
    0,
  ];
  func192.variableArities = [
    false,
  ];
  this.methods["KittyKat"] = func192;
  func192.definitionLine = 65;
  func192.definitionModule = "kitty";
  var obj193 = Grace_allocObject();
  obj193.definitionModule = "kitty";
  obj193.definitionLine = 65;
  obj193.outer = this;
  var reader_kitty_outer_194 = function() {
    return this.outer;
  }
  obj193.methods["outer"] = reader_kitty_outer_194;
  function obj_init_193() {
    var origSuperDepth = superDepth;
    superDepth = obj193;
    obj193.annotations = [];
    var func195 = function(argcv) {
      var curarg = 1;
      var var_ghee__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func195.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj196 = Grace_allocObject();
        obj196.definitionModule = "kitty";
        obj196.definitionLine = 65;
        obj196.outer = this;
        var reader_kitty_outer_197 = function() {
          return this.outer;
        }
        obj196.methods["outer"] = reader_kitty_outer_197;
        function obj_init_196() {
          var origSuperDepth = superDepth;
          superDepth = obj196;
          obj196.annotations = [];
          var func198 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              var string199 = new GraceString("realyee.png");
              onSelf = true;
              var call200 = callmethod(this, "createImage", [1], string199);
              return call200
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func198.paramCounts = [
            0,
          ];
          func198.variableArities = [
            false,
          ];
          obj196.methods["awake"] = func198;
          func198.definitionLine = 86;
          func198.definitionModule = "kitty";
          var func201 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func201.paramCounts[0])
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
          func201.paramCounts = [
            0,
          ];
          func201.variableArities = [
            false,
          ];
          obj196.methods["start"] = func201;
          func201.definitionLine = 92;
          func201.definitionModule = "kitty";
          var func202 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func202.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              onSelf = true;
              var call203 = callmethod(this, "action", [0]);
              var call204 = callmethod(call203,"update", [0]);
              return call204
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func202.paramCounts = [
            0,
          ];
          func202.variableArities = [
            false,
          ];
          obj196.methods["update"] = func202;
          func202.definitionLine = 97;
          func202.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func205.paramCounts[0])
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
          func205.paramCounts = [
            0,
          ];
          func205.variableArities = [
            false,
          ];
          obj196.methods["onDestroy"] = func205;
          func205.definitionLine = 102;
          func205.definitionModule = "kitty";
          var func206 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func206.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 98
              lineNumber = 107
              onSelf = true;
              var call209 = callmethod(this, "rotation", [0]);
              var prod211 = callmethod(call209, "*", [1], new GraceNum(3.14159));
              var quotient213 = callmethod(prod211, "/", [1], new GraceNum(180));
              var call214 = callmethod(var_math,"cos", [1], quotient213);
              var prod217 = callmethod(var_distance, "*", [1], call214);
              onSelf = true;
              var call219 = callmethod(this, "posX", [0]);
              var opresult221 = callmethod(call219, "+", [1], prod217);
              onSelf = true;
              var call222 = callmethod(this, "posX:=", [1], opresult221);
              lineNumber = 108
              lineNumber = 98
              lineNumber = 108
              onSelf = true;
              var call225 = callmethod(this, "rotation", [0]);
              var prod227 = callmethod(call225, "*", [1], new GraceNum(3.14159));
              var quotient229 = callmethod(prod227, "/", [1], new GraceNum(180));
              var call230 = callmethod(var_math,"sin", [1], quotient229);
              var prod233 = callmethod(var_distance, "*", [1], call230);
              onSelf = true;
              var call235 = callmethod(this, "posY", [0]);
              var opresult237 = callmethod(call235, "+", [1], prod233);
              onSelf = true;
              var call238 = callmethod(this, "posY:=", [1], opresult237);
              return call238
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func206.paramCounts = [
            1,
          ];
          func206.variableArities = [
            false,
          ];
          obj196.methods["move"] = func206;
          func206.definitionLine = 106;
          func206.definitionModule = "kitty";
          var func239 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func239.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 98
              lineNumber = 112
              onSelf = true;
              var call242 = callmethod(this, "rotation", [0]);
              var opresult245 = callmethod(new GraceNum(90), "+", [1], call242);
              var prod247 = callmethod(opresult245, "*", [1], new GraceNum(3.14159));
              var quotient249 = callmethod(prod247, "/", [1], new GraceNum(180));
              var call250 = callmethod(var_math,"cos", [1], quotient249);
              var prod253 = callmethod(var_distance, "*", [1], call250);
              onSelf = true;
              var call255 = callmethod(this, "posX", [0]);
              var opresult257 = callmethod(call255, "+", [1], prod253);
              onSelf = true;
              var call258 = callmethod(this, "posX:=", [1], opresult257);
              lineNumber = 113
              lineNumber = 98
              lineNumber = 113
              onSelf = true;
              var call261 = callmethod(this, "rotation", [0]);
              var opresult264 = callmethod(new GraceNum(90), "+", [1], call261);
              var prod266 = callmethod(opresult264, "*", [1], new GraceNum(3.14159));
              var quotient268 = callmethod(prod266, "/", [1], new GraceNum(180));
              var call269 = callmethod(var_math,"sin", [1], quotient268);
              var prod272 = callmethod(var_distance, "*", [1], call269);
              onSelf = true;
              var call274 = callmethod(this, "posY", [0]);
              var opresult276 = callmethod(call274, "+", [1], prod272);
              onSelf = true;
              var call277 = callmethod(this, "posY:=", [1], opresult276);
              return call277
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func239.paramCounts = [
            1,
          ];
          func239.variableArities = [
            false,
          ];
          obj196.methods["strafe"] = func239;
          func239.definitionLine = 111;
          func239.definitionModule = "kitty";
          var func278 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func278.paramCounts[0])
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
              var call280 = callmethod(this, "rotation", [0]);
              var opresult282 = callmethod(call280, "+", [1], var_angle);
              onSelf = true;
              var call283 = callmethod(this, "rotation:=", [1], opresult282);
              return call283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func278.paramCounts = [
            1,
          ];
          func278.variableArities = [
            false,
          ];
          obj196.methods["turn"] = func278;
          func278.definitionLine = 116;
          func278.definitionModule = "kitty";
          var func284 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var call285 = callmethod(var_ctx,"save", [0]);
              lineNumber = 122
              onSelf = true;
              var call286 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call287 = callmethod(this, "posY", [0]);
              var call288 = callmethod(var_ctx,"translate", [2], call286, call287);
              lineNumber = 123
              onSelf = true;
              var call289 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call290 = callmethod(this, "image", [0]);
              var call291 = callmethod(call290,"draw", [4], var_ctx, var_dx, var_dy, call289);
              lineNumber = 124
              var call292 = callmethod(var_ctx,"restore", [0]);
              return call292
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func284.paramCounts = [
            3,
          ];
          func284.variableArities = [
            false,
          ];
          obj196.methods["draw"] = func284;
          func284.definitionLine = 120;
          func284.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 124
              lineNumber = 128
              var call294 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call295 = callmethod(call294, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call296 = callmethod(call295, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call297 = callmethod(this, "image:=", [1], call296);
              return call297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func293.paramCounts = [
            1,
          ];
          func293.variableArities = [
            false,
          ];
          obj196.methods["createImage"] = func293;
          func293.definitionLine = 127;
          func293.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 128
              lineNumber = 132
              onSelf = true;
              var call299 = callmethod(this, "image:=", [1], var_image__39__);
              return call299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func298.paramCounts = [
            1,
          ];
          func298.variableArities = [
            false,
          ];
          obj196.methods["setImage"] = func298;
          func298.definitionLine = 131;
          func298.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 128
              lineNumber = 136
              onSelf = true;
              var call301 = callmethod(this, "action:=", [1], var_action__39__);
              return call301
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func300.paramCounts = [
            1,
          ];
          func300.variableArities = [
            false,
          ];
          obj196.methods["setAction"] = func300;
          func300.definitionLine = 135;
          func300.definitionModule = "kitty";
          var func302 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 128
              lineNumber = 140
              onSelf = true;
              var call303 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 128
              lineNumber = 141
              onSelf = true;
              var call304 = callmethod(this, "posY:=", [1], var_y);
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
            2,
          ];
          func302.variableArities = [
            false,
          ];
          obj196.methods["setLocation"] = func302;
          func302.definitionLine = 139;
          func302.definitionModule = "kitty";
          var func305 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func305.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call306 = callmethod(this, "posX", [0]);
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
          obj196.methods["getX"] = func305;
          func305.definitionLine = 144;
          func305.definitionModule = "kitty";
          var func307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call308 = callmethod(this, "posY", [0]);
              return call308
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func307.paramCounts = [
            0,
          ];
          func307.variableArities = [
            false,
          ];
          obj196.methods["getY"] = func307;
          func307.definitionLine = 148;
          func307.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 153
              onSelf = true;
              var call310 = callmethod(this, "rotation", [0]);
              return call310
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func309.paramCounts = [
            0,
          ];
          func309.variableArities = [
            false,
          ];
          obj196.methods["getRotation"] = func309;
          func309.definitionLine = 152;
          func309.definitionModule = "kitty";
          sourceObject = obj196;
          lineNumber = 67
          var string311 = new GraceString("HERE");
          var call312 = Grace_print(string311);
          sourceObject = obj196;
          lineNumber = 70
          obj196.data["tag"] = var_ghee__39__;
          var reader_kitty_tag_313 = function() {
            return this.data["tag"];
          }
          obj196.methods["tag"] = reader_kitty_tag_313;
          obj196.data["tag"] = var_ghee__39__;
          var writer_kitty_tag_313 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj196.methods["tag:="] = writer_kitty_tag_313;
          reader_kitty_tag_313.confidential = true;
          writer_kitty_tag_313.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_ghee__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj196.mutable = true;
          sourceObject = obj196;
          lineNumber = 71
          obj196.data["posX"] = var_x__39__;
          var reader_kitty_posX_314 = function() {
            return this.data["posX"];
          }
          obj196.methods["posX"] = reader_kitty_posX_314;
          obj196.data["posX"] = var_x__39__;
          var writer_kitty_posX_314 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj196.methods["posX:="] = writer_kitty_posX_314;
          reader_kitty_posX_314.confidential = true;
          writer_kitty_posX_314.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj196.mutable = true;
          sourceObject = obj196;
          lineNumber = 72
          obj196.data["posY"] = var_y__39__;
          var reader_kitty_posY_315 = function() {
            return this.data["posY"];
          }
          obj196.methods["posY"] = reader_kitty_posY_315;
          obj196.data["posY"] = var_y__39__;
          var writer_kitty_posY_315 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj196.methods["posY:="] = writer_kitty_posY_315;
          reader_kitty_posY_315.confidential = true;
          writer_kitty_posY_315.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj196.mutable = true;
          sourceObject = obj196;
          lineNumber = 73
          obj196.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_316 = function() {
            return this.data["rotation"];
          }
          obj196.methods["rotation"] = reader_kitty_rotation_316;
          obj196.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_316 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj196.methods["rotation:="] = writer_kitty_rotation_316;
          reader_kitty_rotation_316.confidential = true;
          writer_kitty_rotation_316.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj196.mutable = true;
          sourceObject = obj196;
          lineNumber = 75
          var obj317 = Grace_allocObject();
          obj317.definitionModule = "kitty";
          obj317.definitionLine = 75;
          obj317.outer = this;
          var reader_kitty_outer_318 = function() {
            return this.outer;
          }
          obj317.methods["outer"] = reader_kitty_outer_318;
          function obj_init_317() {
            var origSuperDepth = superDepth;
            superDepth = obj317;
            obj317.annotations = [];
            var func319 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func319.paramCounts[0])
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
            func319.paramCounts = [
              0,
            ];
            func319.variableArities = [
              false,
            ];
            obj317.methods["update"] = func319;
            func319.definitionLine = 76;
            func319.definitionModule = "kitty";
            sourceObject = obj317;
            superDepth = origSuperDepth;
          }
          obj_init_317.apply(obj317, []);
          obj196.data["action"] = obj317;
          var reader_kitty_action_320 = function() {
            return this.data["action"];
          }
          obj196.methods["action"] = reader_kitty_action_320;
          obj196.data["action"] = obj317;
          var writer_kitty_action_320 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj196.methods["action:="] = writer_kitty_action_320;
          reader_kitty_action_320.confidential = true;
          writer_kitty_action_320.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj317)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj196.mutable = true;
          sourceObject = obj196;
          obj196.data["image"] = undefined;
          var reader_kitty_image_321 = function() {
            return this.data["image"];
          }
          obj196.methods["image"] = reader_kitty_image_321;
          obj196.data["image"] = undefined;
          var writer_kitty_image_321 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj196.methods["image:="] = writer_kitty_image_321;
          reader_kitty_image_321.confidential = true;
          writer_kitty_image_321.confidential = true;
          obj196.mutable = true;
          sourceObject = obj196;
          lineNumber = 83
          onSelf = true;
          var call322 = callmethod(this, "awake", [0]);
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          sourceObject = obj196;
          lineNumber = 157
          var string323 = new GraceString("ENTITY CREATED");
          var call324 = Grace_print(string323);
          superDepth = origSuperDepth;
        }
        obj_init_196.apply(obj196, []);
        return obj196
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func195.paramCounts = [
      3,
    ];
    func195.variableArities = [
      false,
    ];
    obj193.methods["new"] = func195;
    func195.definitionLine = 65;
    func195.definitionModule = "kitty";
    var func325 = function(argcv) {
      var curarg = 1;
      var var_ghee__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj326 = Grace_allocObject();
        obj326.definitionModule = "kitty";
        obj326.definitionLine = 65;
        var inho326 = inheritingObject;
        while (inho326.superobj) inho326 = inho326.superobj;
        inho326.superobj = obj326;
        obj326.data = inheritingObject.data;
        obj326.outer = this;
        var reader_kitty_outer_327 = function() {
          return this.outer;
        }
        obj326.methods["outer"] = reader_kitty_outer_327;
        function obj_init_326() {
          var origSuperDepth = superDepth;
          superDepth = obj326;
          obj326.annotations = [];
          var func328 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              var string329 = new GraceString("realyee.png");
              onSelf = true;
              var call330 = callmethod(this, "createImage", [1], string329);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func328.paramCounts = [
            0,
          ];
          func328.variableArities = [
            false,
          ];
          obj326.methods["awake"] = func328;
          func328.definitionLine = 86;
          func328.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func331.paramCounts[0])
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
          func331.paramCounts = [
            0,
          ];
          func331.variableArities = [
            false,
          ];
          obj326.methods["start"] = func331;
          func331.definitionLine = 92;
          func331.definitionModule = "kitty";
          var func332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              onSelf = true;
              var call333 = callmethod(this, "action", [0]);
              var call334 = callmethod(call333,"update", [0]);
              return call334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func332.paramCounts = [
            0,
          ];
          func332.variableArities = [
            false,
          ];
          obj326.methods["update"] = func332;
          func332.definitionLine = 97;
          func332.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
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
          func335.paramCounts = [
            0,
          ];
          func335.variableArities = [
            false,
          ];
          obj326.methods["onDestroy"] = func335;
          func335.definitionLine = 102;
          func335.definitionModule = "kitty";
          var func336 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func336.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 98
              lineNumber = 107
              onSelf = true;
              var call339 = callmethod(this, "rotation", [0]);
              var prod341 = callmethod(call339, "*", [1], new GraceNum(3.14159));
              var quotient343 = callmethod(prod341, "/", [1], new GraceNum(180));
              var call344 = callmethod(var_math,"cos", [1], quotient343);
              var prod347 = callmethod(var_distance, "*", [1], call344);
              onSelf = true;
              var call349 = callmethod(this, "posX", [0]);
              var opresult351 = callmethod(call349, "+", [1], prod347);
              onSelf = true;
              var call352 = callmethod(this, "posX:=", [1], opresult351);
              lineNumber = 108
              lineNumber = 98
              lineNumber = 108
              onSelf = true;
              var call355 = callmethod(this, "rotation", [0]);
              var prod357 = callmethod(call355, "*", [1], new GraceNum(3.14159));
              var quotient359 = callmethod(prod357, "/", [1], new GraceNum(180));
              var call360 = callmethod(var_math,"sin", [1], quotient359);
              var prod363 = callmethod(var_distance, "*", [1], call360);
              onSelf = true;
              var call365 = callmethod(this, "posY", [0]);
              var opresult367 = callmethod(call365, "+", [1], prod363);
              onSelf = true;
              var call368 = callmethod(this, "posY:=", [1], opresult367);
              return call368
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func336.paramCounts = [
            1,
          ];
          func336.variableArities = [
            false,
          ];
          obj326.methods["move"] = func336;
          func336.definitionLine = 106;
          func336.definitionModule = "kitty";
          var func369 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func369.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 98
              lineNumber = 112
              onSelf = true;
              var call372 = callmethod(this, "rotation", [0]);
              var opresult375 = callmethod(new GraceNum(90), "+", [1], call372);
              var prod377 = callmethod(opresult375, "*", [1], new GraceNum(3.14159));
              var quotient379 = callmethod(prod377, "/", [1], new GraceNum(180));
              var call380 = callmethod(var_math,"cos", [1], quotient379);
              var prod383 = callmethod(var_distance, "*", [1], call380);
              onSelf = true;
              var call385 = callmethod(this, "posX", [0]);
              var opresult387 = callmethod(call385, "+", [1], prod383);
              onSelf = true;
              var call388 = callmethod(this, "posX:=", [1], opresult387);
              lineNumber = 113
              lineNumber = 98
              lineNumber = 113
              onSelf = true;
              var call391 = callmethod(this, "rotation", [0]);
              var opresult394 = callmethod(new GraceNum(90), "+", [1], call391);
              var prod396 = callmethod(opresult394, "*", [1], new GraceNum(3.14159));
              var quotient398 = callmethod(prod396, "/", [1], new GraceNum(180));
              var call399 = callmethod(var_math,"sin", [1], quotient398);
              var prod402 = callmethod(var_distance, "*", [1], call399);
              onSelf = true;
              var call404 = callmethod(this, "posY", [0]);
              var opresult406 = callmethod(call404, "+", [1], prod402);
              onSelf = true;
              var call407 = callmethod(this, "posY:=", [1], opresult406);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func369.paramCounts = [
            1,
          ];
          func369.variableArities = [
            false,
          ];
          obj326.methods["strafe"] = func369;
          func369.definitionLine = 111;
          func369.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func408.paramCounts[0])
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
              var call410 = callmethod(this, "rotation", [0]);
              var opresult412 = callmethod(call410, "+", [1], var_angle);
              onSelf = true;
              var call413 = callmethod(this, "rotation:=", [1], opresult412);
              return call413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func408.paramCounts = [
            1,
          ];
          func408.variableArities = [
            false,
          ];
          obj326.methods["turn"] = func408;
          func408.definitionLine = 116;
          func408.definitionModule = "kitty";
          var func414 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var call415 = callmethod(var_ctx,"save", [0]);
              lineNumber = 122
              onSelf = true;
              var call416 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call417 = callmethod(this, "posY", [0]);
              var call418 = callmethod(var_ctx,"translate", [2], call416, call417);
              lineNumber = 123
              onSelf = true;
              var call419 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call420 = callmethod(this, "image", [0]);
              var call421 = callmethod(call420,"draw", [4], var_ctx, var_dx, var_dy, call419);
              lineNumber = 124
              var call422 = callmethod(var_ctx,"restore", [0]);
              return call422
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func414.paramCounts = [
            3,
          ];
          func414.variableArities = [
            false,
          ];
          obj326.methods["draw"] = func414;
          func414.definitionLine = 120;
          func414.definitionModule = "kitty";
          var func423 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 124
              lineNumber = 128
              var call424 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call425 = callmethod(call424, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call426 = callmethod(call425, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call427 = callmethod(this, "image:=", [1], call426);
              return call427
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func423.paramCounts = [
            1,
          ];
          func423.variableArities = [
            false,
          ];
          obj326.methods["createImage"] = func423;
          func423.definitionLine = 127;
          func423.definitionModule = "kitty";
          var func428 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 128
              lineNumber = 132
              onSelf = true;
              var call429 = callmethod(this, "image:=", [1], var_image__39__);
              return call429
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
          obj326.methods["setImage"] = func428;
          func428.definitionLine = 131;
          func428.definitionModule = "kitty";
          var func430 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func430.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 128
              lineNumber = 136
              onSelf = true;
              var call431 = callmethod(this, "action:=", [1], var_action__39__);
              return call431
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func430.paramCounts = [
            1,
          ];
          func430.variableArities = [
            false,
          ];
          obj326.methods["setAction"] = func430;
          func430.definitionLine = 135;
          func430.definitionModule = "kitty";
          var func432 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func432.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 128
              lineNumber = 140
              onSelf = true;
              var call433 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 128
              lineNumber = 141
              onSelf = true;
              var call434 = callmethod(this, "posY:=", [1], var_y);
              return call434
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func432.paramCounts = [
            2,
          ];
          func432.variableArities = [
            false,
          ];
          obj326.methods["setLocation"] = func432;
          func432.definitionLine = 139;
          func432.definitionModule = "kitty";
          var func435 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func435.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call436 = callmethod(this, "posX", [0]);
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
            0,
          ];
          func435.variableArities = [
            false,
          ];
          obj326.methods["getX"] = func435;
          func435.definitionLine = 144;
          func435.definitionModule = "kitty";
          var func437 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call438 = callmethod(this, "posY", [0]);
              return call438
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func437.paramCounts = [
            0,
          ];
          func437.variableArities = [
            false,
          ];
          obj326.methods["getY"] = func437;
          func437.definitionLine = 148;
          func437.definitionModule = "kitty";
          var func439 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func439.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 153
              onSelf = true;
              var call440 = callmethod(this, "rotation", [0]);
              return call440
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func439.paramCounts = [
            0,
          ];
          func439.variableArities = [
            false,
          ];
          obj326.methods["getRotation"] = func439;
          func439.definitionLine = 152;
          func439.definitionModule = "kitty";
          sourceObject = obj326;
          lineNumber = 67
          var string441 = new GraceString("HERE");
          var call442 = Grace_print(string441);
          sourceObject = obj326;
          lineNumber = 70
          obj326.data["tag"] = var_ghee__39__;
          var reader_kitty_tag_443 = function() {
            return this.data["tag"];
          }
          obj326.methods["tag"] = reader_kitty_tag_443;
          obj326.data["tag"] = var_ghee__39__;
          var writer_kitty_tag_443 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj326.methods["tag:="] = writer_kitty_tag_443;
          reader_kitty_tag_443.confidential = true;
          writer_kitty_tag_443.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_ghee__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj326.mutable = true;
          sourceObject = obj326;
          lineNumber = 71
          obj326.data["posX"] = var_x__39__;
          var reader_kitty_posX_444 = function() {
            return this.data["posX"];
          }
          obj326.methods["posX"] = reader_kitty_posX_444;
          obj326.data["posX"] = var_x__39__;
          var writer_kitty_posX_444 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj326.methods["posX:="] = writer_kitty_posX_444;
          reader_kitty_posX_444.confidential = true;
          writer_kitty_posX_444.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj326.mutable = true;
          sourceObject = obj326;
          lineNumber = 72
          obj326.data["posY"] = var_y__39__;
          var reader_kitty_posY_445 = function() {
            return this.data["posY"];
          }
          obj326.methods["posY"] = reader_kitty_posY_445;
          obj326.data["posY"] = var_y__39__;
          var writer_kitty_posY_445 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj326.methods["posY:="] = writer_kitty_posY_445;
          reader_kitty_posY_445.confidential = true;
          writer_kitty_posY_445.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj326.mutable = true;
          sourceObject = obj326;
          lineNumber = 73
          obj326.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_446 = function() {
            return this.data["rotation"];
          }
          obj326.methods["rotation"] = reader_kitty_rotation_446;
          obj326.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_446 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj326.methods["rotation:="] = writer_kitty_rotation_446;
          reader_kitty_rotation_446.confidential = true;
          writer_kitty_rotation_446.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj326.mutable = true;
          sourceObject = obj326;
          lineNumber = 75
          var obj447 = Grace_allocObject();
          obj447.definitionModule = "kitty";
          obj447.definitionLine = 75;
          obj447.outer = this;
          var reader_kitty_outer_448 = function() {
            return this.outer;
          }
          obj447.methods["outer"] = reader_kitty_outer_448;
          function obj_init_447() {
            var origSuperDepth = superDepth;
            superDepth = obj447;
            obj447.annotations = [];
            var func449 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func449.paramCounts[0])
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
            func449.paramCounts = [
              0,
            ];
            func449.variableArities = [
              false,
            ];
            obj447.methods["update"] = func449;
            func449.definitionLine = 76;
            func449.definitionModule = "kitty";
            sourceObject = obj447;
            superDepth = origSuperDepth;
          }
          obj_init_447.apply(obj447, []);
          obj326.data["action"] = obj447;
          var reader_kitty_action_450 = function() {
            return this.data["action"];
          }
          obj326.methods["action"] = reader_kitty_action_450;
          obj326.data["action"] = obj447;
          var writer_kitty_action_450 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj326.methods["action:="] = writer_kitty_action_450;
          reader_kitty_action_450.confidential = true;
          writer_kitty_action_450.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj447)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj326.mutable = true;
          sourceObject = obj326;
          obj326.data["image"] = undefined;
          var reader_kitty_image_451 = function() {
            return this.data["image"];
          }
          obj326.methods["image"] = reader_kitty_image_451;
          obj326.data["image"] = undefined;
          var writer_kitty_image_451 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj326.methods["image:="] = writer_kitty_image_451;
          reader_kitty_image_451.confidential = true;
          writer_kitty_image_451.confidential = true;
          obj326.mutable = true;
          sourceObject = obj326;
          lineNumber = 83
          onSelf = true;
          var call452 = callmethod(this, "awake", [0]);
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          sourceObject = obj326;
          lineNumber = 157
          var string453 = new GraceString("ENTITY CREATED");
          var call454 = Grace_print(string453);
          superDepth = origSuperDepth;
        }
        obj_init_326.apply(inheritingObject, []);
        return obj326
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj193.methods["new()object"] = func325;
    var func455 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string456 = new GraceString("class KittyKat");
        return string456
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func455.paramCounts = [
    ];
    func455.variableArities = [
    ];
    obj193.methods["asDebugString"] = func455;
    func455.definitionLine = 65;
    func455.definitionModule = "kitty";
    sourceObject = obj193;
    sourceObject = obj193;
    superDepth = origSuperDepth;
  }
  obj_init_193.apply(obj193, []);
  var var_KittyKat = obj193;
  lineNumber = 160
  var func457 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func457.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Kitty)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_Kitty
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func457.paramCounts = [
    0,
  ];
  func457.variableArities = [
    false,
  ];
  this.methods["Kitty"] = func457;
  func457.definitionLine = 160;
  func457.definitionModule = "kitty";
  var obj458 = Grace_allocObject();
  obj458.definitionModule = "kitty";
  obj458.definitionLine = 160;
  obj458.outer = this;
  var reader_kitty_outer_459 = function() {
    return this.outer;
  }
  obj458.methods["outer"] = reader_kitty_outer_459;
  function obj_init_458() {
    var origSuperDepth = superDepth;
    superDepth = obj458;
    obj458.annotations = [];
    var func460 = function(argcv) {
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      var var_b = arguments[curarg];
      curarg++;
      var var_c = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func460.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj461 = Grace_allocObject();
        obj461.definitionModule = "kitty";
        obj461.definitionLine = 160;
        obj461.outer = this;
        var reader_kitty_outer_462 = function() {
          return this.outer;
        }
        obj461.methods["outer"] = reader_kitty_outer_462;
        function obj_init_461() {
          var origSuperDepth = superDepth;
          superDepth = obj461;
          obj461.annotations = [];
          sourceObject = obj461;
          lineNumber = 161
          var string463 = new GraceString("");
          var string466 = new GraceString(", ");
          var string469 = new GraceString(", ");
          var string472 = new GraceString("");
          var opresult474 = callmethod(string472, "++", [1], var_a);
          var opresult476 = callmethod(opresult474, "++", [1], string469);
          var opresult478 = callmethod(opresult476, "++", [1], var_b);
          var opresult480 = callmethod(opresult478, "++", [1], string466);
          var opresult482 = callmethod(opresult480, "++", [1], var_c);
          var opresult484 = callmethod(opresult482, "++", [1], string463);
          var call485 = Grace_print(opresult484);
          superDepth = origSuperDepth;
        }
        obj_init_461.apply(obj461, []);
        return obj461
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func460.paramCounts = [
      3,
    ];
    func460.variableArities = [
      false,
    ];
    obj458.methods["new"] = func460;
    func460.definitionLine = 160;
    func460.definitionModule = "kitty";
    var func486 = function(argcv) {
      var curarg = 1;
      var var_a = arguments[curarg];
      curarg++;
      var var_b = arguments[curarg];
      curarg++;
      var var_c = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj487 = Grace_allocObject();
        obj487.definitionModule = "kitty";
        obj487.definitionLine = 160;
        var inho487 = inheritingObject;
        while (inho487.superobj) inho487 = inho487.superobj;
        inho487.superobj = obj487;
        obj487.data = inheritingObject.data;
        obj487.outer = this;
        var reader_kitty_outer_488 = function() {
          return this.outer;
        }
        obj487.methods["outer"] = reader_kitty_outer_488;
        function obj_init_487() {
          var origSuperDepth = superDepth;
          superDepth = obj487;
          obj487.annotations = [];
          sourceObject = obj487;
          var string489 = new GraceString("");
          var string492 = new GraceString(", ");
          var string495 = new GraceString(", ");
          var string498 = new GraceString("");
          var opresult500 = callmethod(string498, "++", [1], var_a);
          var opresult502 = callmethod(opresult500, "++", [1], string495);
          var opresult504 = callmethod(opresult502, "++", [1], var_b);
          var opresult506 = callmethod(opresult504, "++", [1], string492);
          var opresult508 = callmethod(opresult506, "++", [1], var_c);
          var opresult510 = callmethod(opresult508, "++", [1], string489);
          var call511 = Grace_print(opresult510);
          superDepth = origSuperDepth;
        }
        obj_init_487.apply(inheritingObject, []);
        return obj487
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj458.methods["new()object"] = func486;
    var func512 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 160
        var string513 = new GraceString("class Kitty");
        return string513
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func512.paramCounts = [
    ];
    func512.variableArities = [
    ];
    obj458.methods["asDebugString"] = func512;
    func512.definitionLine = 160;
    func512.definitionModule = "kitty";
    sourceObject = obj458;
    sourceObject = obj458;
    superDepth = origSuperDepth;
  }
  obj_init_458.apply(obj458, []);
  var var_Kitty = obj458;
  lineNumber = 164
  lineNumber = 174
  var func514 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func514.paramCounts[0])
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
  func514.paramCounts = [
    0,
  ];
  func514.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func514;
  func514.definitionLine = 174;
  func514.definitionModule = "kitty";
  var obj515 = Grace_allocObject();
  obj515.definitionModule = "kitty";
  obj515.definitionLine = 174;
  obj515.outer = this;
  var reader_kitty_outer_516 = function() {
    return this.outer;
  }
  obj515.methods["outer"] = reader_kitty_outer_516;
  function obj_init_515() {
    var origSuperDepth = superDepth;
    superDepth = obj515;
    obj515.annotations = [];
    var func517 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func517.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj518 = Grace_allocObject();
        obj518.definitionModule = "kitty";
        obj518.definitionLine = 174;
        obj518.outer = this;
        var reader_kitty_outer_519 = function() {
          return this.outer;
        }
        obj518.methods["outer"] = reader_kitty_outer_519;
        function obj_init_518() {
          var origSuperDepth = superDepth;
          superDepth = obj518;
          obj518.annotations = [];
          var func520 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func520.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              var if521 = var_done;
              lineNumber = 208
              onSelf = true;
              var call522 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call522)) {
                lineNumber = 210
                lineNumber = 209
                var bool523 = new GraceBoolean(false)
                return bool523
              }
              lineNumber = 213
              lineNumber = 174
              lineNumber = 212
              var call524 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call525 = callmethod(this, "document:=", [1], call524);
              lineNumber = 213
              lineNumber = 212
              lineNumber = 213
              var string526 = new GraceString("standard-canvas");
              onSelf = true;
              var call527 = callmethod(this, "document", [0]);
              var call528 = callmethod(call527,"getElementById", [1], string526);
              onSelf = true;
              var call529 = callmethod(this, "canvas:=", [1], call528);
              lineNumber = 215
              lineNumber = 212
              lineNumber = 214
              onSelf = true;
              var call530 = callmethod(this, "canvas", [0]);
              var call531 = callmethod(call530,"width", [0]);
              onSelf = true;
              var call532 = callmethod(this, "canvasWidth:=", [1], call531);
              lineNumber = 218
              lineNumber = 214
              lineNumber = 215
              onSelf = true;
              var call533 = callmethod(this, "canvas", [0]);
              var call534 = callmethod(call533,"height", [0]);
              onSelf = true;
              var call535 = callmethod(this, "canvasHeight:=", [1], call534);
              lineNumber = 230
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
              block536.className = 'block<kitty:230>';
              block536.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 221
                lineNumber = 220
                onSelf = true;
                var call537 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call539 = callmethod(this, "canvas", [0]);
                var call540 = callmethod(call539,"offsetWidth", [0]);
                onSelf = true;
                var call542 = callmethod(this, "canvas", [0]);
                var call543 = callmethod(call542,"offsetLeft", [0]);
                var call545 = callmethod(var_ev,"clientX", [0]);
                var diff547 = callmethod(call545, "-", [1], call543);
                var quotient549 = callmethod(diff547, "/", [1], call540);
                var prod551 = callmethod(quotient549, "*", [1], call537);
                var var_x = prod551;
                lineNumber = 221;
                moduleName = "kitty";
                lineNumber = 220
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 225
                lineNumber = 221
                onSelf = true;
                var call552 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call554 = callmethod(this, "canvas", [0]);
                var call555 = callmethod(call554,"offsetHeight", [0]);
                onSelf = true;
                var call557 = callmethod(this, "canvas", [0]);
                var call558 = callmethod(call557,"offsetTop", [0]);
                var call560 = callmethod(var_ev,"clientY", [0]);
                var diff562 = callmethod(call560, "-", [1], call558);
                var quotient564 = callmethod(diff562, "/", [1], call555);
                var prod566 = callmethod(quotient564, "*", [1], call552);
                var var_y = prod566;
                lineNumber = 225;
                moduleName = "kitty";
                lineNumber = 221
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 229
                var if567 = var_done;
                lineNumber = 225
                var opresult570 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call573 = callmethod(this, "canvasWidth", [0]);
                var diff575 = callmethod(call573, "-", [1], new GraceNum(20));
                var opresult578 = callmethod(var_x, ">", [1], diff575);
                var opresult580 = callmethod(opresult578, "&&", [1], opresult570);
                if (Grace_isTrue(opresult580)) {
                  lineNumber = 226
                  var call581 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 227
                  onSelf = true;
                  var call582 = callmethod(this, "stop", [0]);
                  if567 = call582;
                }
                return if567;
              };
              var_mouseDownListener = block536;
              lineNumber = 230
              var string583 = new GraceString("mousedown");
              onSelf = true;
              var call584 = callmethod(this, "canvas", [0]);
              var call585 = callmethod(call584,"addEventListener", [2], string583, var_mouseDownListener);
              lineNumber = 240
              var block586 = Grace_allocObject();
              block586.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block586.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block586.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block586.methods["match"] = GraceBlock_match;
              block586.methods["prefix?"] = GraceBlock_lift;
              block586.receiver = this;
              block586.className = 'block<kitty:240>';
              block586.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 238
                var if587 = var_done;
                lineNumber = 235
                var call589 = callmethod(var_ev,"keyCode", [0]);
                var opresult591 = callmethod(call589, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult591)) {
                  lineNumber = 236
                  onSelf = true;
                  var call592 = callmethod(this, "stop", [0]);
                  if587 = call592;
                }
                lineNumber = 239
                lineNumber = 235
                lineNumber = 238
                var call593 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call594 = callmethod(this, "currentKeyDown:=", [1], call593);
                return call594;
              };
              var_keyDownListener = block586;
              lineNumber = 240
              var string595 = new GraceString("keydown");
              onSelf = true;
              var call596 = callmethod(this, "document", [0]);
              var call597 = callmethod(call596,"addEventListener", [2], string595, var_keyDownListener);
              lineNumber = 246
              var block598 = Grace_allocObject();
              block598.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block598.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block598.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block598.methods["match"] = GraceBlock_match;
              block598.methods["prefix?"] = GraceBlock_lift;
              block598.receiver = this;
              block598.className = 'block<kitty:246>';
              block598.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 245
                lineNumber = 238
                lineNumber = 245
                lineNumber = 244
                var call599 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call600 = callmethod(this, "currentKeyDown:=", [1], call599);
                return call600;
              };
              var_keyUpListener = block598;
              lineNumber = 246
              var string601 = new GraceString("keyup");
              onSelf = true;
              var call602 = callmethod(this, "document", [0]);
              var call603 = callmethod(call602,"addEventListener", [2], string601, var_keyUpListener);
              lineNumber = 248
              lineNumber = 238
              lineNumber = 248
              var string604 = new GraceString("canvas");
              var call605 = callmethod(var_dom,"document", [0]);
              var call606 = callmethod(call605,"createElement", [1], string604);
              onSelf = true;
              var call607 = callmethod(this, "backingCanvas:=", [1], call606);
              lineNumber = 250
              lineNumber = 248
              lineNumber = 249
              onSelf = true;
              var call608 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call609 = callmethod(this, "backingCanvas", [0]);
              var call610 = callmethod(call609,"height:=", [1], call608);
              lineNumber = 251
              lineNumber = 248
              lineNumber = 250
              onSelf = true;
              var call611 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call612 = callmethod(this, "backingCanvas", [0]);
              var call613 = callmethod(call612,"width:=", [1], call611);
              lineNumber = 251
              lineNumber = 248
              lineNumber = 251
              var string614 = new GraceString("2d");
              onSelf = true;
              var call615 = callmethod(this, "backingCanvas", [0]);
              var call616 = callmethod(call615,"getContext", [1], string614);
              onSelf = true;
              var call617 = callmethod(this, "backingContext:=", [1], call616);
              lineNumber = 252
              lineNumber = 248
              lineNumber = 252
              var string618 = new GraceString("2d");
              onSelf = true;
              var call619 = callmethod(this, "canvas", [0]);
              var call620 = callmethod(call619,"getContext", [1], string618);
              onSelf = true;
              var call621 = callmethod(this, "mctx:=", [1], call620);
              lineNumber = 255
              var string622 = new GraceString("doggo.jpg");
              onSelf = true;
              var call623 = callmethod(this, "setBackground", [1], string622);
              lineNumber = 258
              lineNumber = 248
              lineNumber = 258
              var string624 = new GraceString("explosion.png");
              var call625 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call626 = callmethod(call625, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call627 = callmethod(call626, "Entity()foo()bar", [1, 1, 1], string624, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call628 = callmethod(this, "ent:=", [1], call627);
              lineNumber = 267
              lineNumber = 258
              lineNumber = 261
              var bool629 = new GraceBoolean(true)
              onSelf = true;
              var call630 = callmethod(this, "isInit:=", [1], bool629);
              return call630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func520.paramCounts = [
            0,
          ];
          func520.variableArities = [
            false,
          ];
          obj518.methods["init"] = func520;
          func520.definitionLine = 204;
          func520.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 258
              lineNumber = 272
              var bool632 = new GraceBoolean(true)
              onSelf = true;
              var call633 = callmethod(this, "isRunning:=", [1], bool632);
              lineNumber = 273
              var block634 = Grace_allocObject();
              block634.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block634.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block634.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block634.methods["match"] = GraceBlock_match;
              block634.methods["prefix?"] = GraceBlock_lift;
              block634.receiver = this;
              block634.className = 'block<kitty:273>';
              block634.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call635 = callmethod(this, "isRunning", [0]);
                return call635;
              };
              lineNumber = 277
              var block636 = Grace_allocObject();
              block636.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block636.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block636.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block636.methods["match"] = GraceBlock_match;
              block636.methods["prefix?"] = GraceBlock_lift;
              block636.receiver = this;
              block636.className = 'block<kitty:277>';
              block636.real = function(
              ) {
                sourceObject = this;
                lineNumber = 274
                onSelf = true;
                var call637 = callmethod(this, "update", [0]);
                return call637;
              };
              lineNumber = 273
              var call638 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block634, new GraceNum(10), block636);
              return call638
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func631.paramCounts = [
            0,
          ];
          func631.variableArities = [
            false,
          ];
          obj518.methods["start"] = func631;
          func631.definitionLine = 270;
          func631.definitionModule = "kitty";
          var func639 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func639.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 258
              lineNumber = 285
              onSelf = true;
              var call640 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call641 = callmethod(this, "mctx", [0]);
              var call642 = callmethod(call641,"fillStyle:=", [1], call640);
              lineNumber = 286
              onSelf = true;
              var call643 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call644 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call645 = callmethod(this, "mctx", [0]);
              var call646 = callmethod(call645,"fillRect", [4], new GraceNum(0), new GraceNum(0), call643, call644);
              lineNumber = 287
              onSelf = true;
              var call647 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call648 = callmethod(this, "mctx", [0]);
              var call649 = callmethod(call648,"drawImage", [3], call647, new GraceNum(0), new GraceNum(0));
              lineNumber = 288
              onSelf = true;
              var call650 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call652 = callmethod(this, "canvasWidth", [0]);
              var quotient654 = callmethod(call652, "/", [1], new GraceNum(2));
              onSelf = true;
              var call656 = callmethod(this, "canvasHeight", [0]);
              var quotient658 = callmethod(call656, "/", [1], new GraceNum(2));
              onSelf = true;
              var call659 = callmethod(this, "background", [0]);
              var call660 = callmethod(call659,"draw", [4], call650, quotient654, quotient658, new GraceNum(0));
              lineNumber = 291
              onSelf = true;
              var call661 = callmethod(this, "entities", [0]);
              lineNumber = 297
              var block662 = Grace_allocObject();
              block662.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block662.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block662.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block662.methods["match"] = GraceBlock_match;
              block662.methods["prefix?"] = GraceBlock_lift;
              block662.receiver = this;
              block662.className = 'block<kitty:297>';
              block662.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 292
                var call663 = callmethod(var_entity,"update", [0]);
                lineNumber = 293
                onSelf = true;
                var call664 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call666 = callmethod(this, "canvasWidth", [0]);
                var quotient668 = callmethod(call666, "/", [1], new GraceNum(2));
                onSelf = true;
                var call670 = callmethod(this, "canvasHeight", [0]);
                var quotient672 = callmethod(call670, "/", [1], new GraceNum(2));
                var call673 = callmethod(var_entity,"draw", [3], call664, quotient668, quotient672);
                return call673;
              };
              var call674 = callmethod(Grace_prelude,"for()do", [1, 1], call661, block662);
              return call674
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func639.paramCounts = [
            0,
          ];
          func639.variableArities = [
            false,
          ];
          obj518.methods["update"] = func639;
          func639.definitionLine = 280;
          func639.definitionModule = "kitty";
          var func675 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func675.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              var string676 = new GraceString("WORLD STOPPING...");
              var call677 = Grace_print(string676);
              lineNumber = 302
              lineNumber = 292
              lineNumber = 301
              var bool678 = new GraceBoolean(false)
              onSelf = true;
              var call679 = callmethod(this, "isRunning:=", [1], bool678);
              lineNumber = 302
              var string680 = new GraceString("mousedown");
              onSelf = true;
              var call681 = callmethod(this, "canvas", [0]);
              var call682 = callmethod(call681,"removeEventListener", [2], string680, var_mouseDownListener);
              lineNumber = 303
              var string683 = new GraceString("keydown");
              onSelf = true;
              var call684 = callmethod(this, "document", [0]);
              var call685 = callmethod(call684,"removeEventListener", [2], string683, var_keyDownListener);
              lineNumber = 304
              var string686 = new GraceString("keyup");
              onSelf = true;
              var call687 = callmethod(this, "document", [0]);
              var call688 = callmethod(call687,"removeEventListener", [2], string686, var_keyUpListener);
              return call688
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func675.paramCounts = [
            0,
          ];
          func675.variableArities = [
            false,
          ];
          obj518.methods["stop"] = func675;
          func675.definitionLine = 299;
          func675.definitionModule = "kitty";
          var func689 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func689.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
              onSelf = true;
              var call690 = callmethod(this, "currentKeyDown", [0]);
              var opresult693 = callmethod(var_key, "==", [1], call690);
              return opresult693
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func689.paramCounts = [
            1,
          ];
          func689.variableArities = [
            false,
          ];
          obj518.methods["isKeyDown"] = func689;
          func689.definitionLine = 307;
          func689.definitionModule = "kitty";
          var func694 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func694.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 312
              lineNumber = 292
              lineNumber = 312
              onSelf = true;
              var call695 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call696 = callmethod(this, "canvasHeight", [0]);
              var call697 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call698 = callmethod(call697, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call699 = callmethod(call698, "Image()width()height", [1, 1, 1], var_url, call695, call696);
              onSelf = true;
              var call700 = callmethod(this, "background:=", [1], call699);
              return call700
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func694.paramCounts = [
            1,
          ];
          func694.variableArities = [
            false,
          ];
          obj518.methods["setBackground"] = func694;
          func694.definitionLine = 311;
          func694.definitionModule = "kitty";
          var func701 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func701.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              onSelf = true;
              var call702 = callmethod(this, "entities", [0]);
              var call703 = callmethod(call702,"push", [1], var_e);
              return call703
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func701.paramTypes = [];
          func701.paramTypes.push([]);
          func701.paramCounts = [
            1,
          ];
          func701.variableArities = [
            false,
          ];
          obj518.methods["addEntity"] = func701;
          func701.definitionLine = 315;
          func701.definitionModule = "kitty";
          var func704 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func704.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 321
              lineNumber = 320
              onSelf = true;
              var call705 = callmethod(this, "mctx", [0]);
              return call705
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func704.paramCounts = [
            0,
          ];
          func704.variableArities = [
            false,
          ];
          obj518.methods["getContext"] = func704;
          func704.definitionLine = 319;
          func704.definitionModule = "kitty";
          sourceObject = obj518;
          obj518.data["background"] = undefined;
          var reader_kitty_background_706 = function() {
            return this.data["background"];
          }
          obj518.methods["background"] = reader_kitty_background_706;
          obj518.data["background"] = undefined;
          var writer_kitty_background_706 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj518.methods["background:="] = writer_kitty_background_706;
          reader_kitty_background_706.confidential = true;
          writer_kitty_background_706.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 179
          var string707 = new GraceString("black");
          obj518.data["backgroundColour"] = string707;
          var reader_kitty_backgroundColour_708 = function() {
            return this.data["backgroundColour"];
          }
          obj518.methods["backgroundColour"] = reader_kitty_backgroundColour_708;
          obj518.data["backgroundColour"] = string707;
          var writer_kitty_backgroundColour_708 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj518.methods["backgroundColour:="] = writer_kitty_backgroundColour_708;
          reader_kitty_backgroundColour_708.confidential = true;
          writer_kitty_backgroundColour_708.confidential = true;
          lineNumber = 181;
          moduleName = "kitty";
          lineNumber = 179
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string707)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["document"] = undefined;
          var reader_kitty_document_709 = function() {
            return this.data["document"];
          }
          obj518.methods["document"] = reader_kitty_document_709;
          obj518.data["document"] = undefined;
          var writer_kitty_document_709 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj518.methods["document:="] = writer_kitty_document_709;
          reader_kitty_document_709.confidential = true;
          writer_kitty_document_709.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_710 = function() {
            return this.data["backingCanvas"];
          }
          obj518.methods["backingCanvas"] = reader_kitty_backingCanvas_710;
          obj518.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_710 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj518.methods["backingCanvas:="] = writer_kitty_backingCanvas_710;
          reader_kitty_backingCanvas_710.confidential = true;
          writer_kitty_backingCanvas_710.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["backingContext"] = undefined;
          var reader_kitty_backingContext_711 = function() {
            return this.data["backingContext"];
          }
          obj518.methods["backingContext"] = reader_kitty_backingContext_711;
          obj518.data["backingContext"] = undefined;
          var writer_kitty_backingContext_711 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj518.methods["backingContext:="] = writer_kitty_backingContext_711;
          reader_kitty_backingContext_711.confidential = true;
          writer_kitty_backingContext_711.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["canvas"] = undefined;
          var reader_kitty_canvas_712 = function() {
            return this.data["canvas"];
          }
          obj518.methods["canvas"] = reader_kitty_canvas_712;
          obj518.data["canvas"] = undefined;
          var writer_kitty_canvas_712 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj518.methods["canvas:="] = writer_kitty_canvas_712;
          reader_kitty_canvas_712.confidential = true;
          writer_kitty_canvas_712.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_713 = function() {
            return this.data["canvasWidth"];
          }
          obj518.methods["canvasWidth"] = reader_kitty_canvasWidth_713;
          obj518.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_713 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj518.methods["canvasWidth:="] = writer_kitty_canvasWidth_713;
          reader_kitty_canvasWidth_713.confidential = true;
          writer_kitty_canvasWidth_713.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_714 = function() {
            return this.data["canvasHeight"];
          }
          obj518.methods["canvasHeight"] = reader_kitty_canvasHeight_714;
          obj518.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_714 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj518.methods["canvasHeight:="] = writer_kitty_canvasHeight_714;
          reader_kitty_canvasHeight_714.confidential = true;
          writer_kitty_canvasHeight_714.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 190
          var call715 = callmethod(var_collections,"list", [0]);
          var call716 = callmethod(call715,"new", [0]);
          obj518.data["entities"] = call716;
          var reader_kitty_entities_717 = function() {
            return this.data["entities"];
          }
          obj518.methods["entities"] = reader_kitty_entities_717;
          obj518.data["entities"] = call716;
          var writer_kitty_entities_717 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj518.methods["entities:="] = writer_kitty_entities_717;
          reader_kitty_entities_717.confidential = true;
          writer_kitty_entities_717.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call716)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 192
          var bool718 = new GraceBoolean(false)
          obj518.data["isInit"] = bool718;
          var reader_kitty_isInit_719 = function() {
            return this.data["isInit"];
          }
          obj518.methods["isInit"] = reader_kitty_isInit_719;
          obj518.data["isInit"] = bool718;
          var writer_kitty_isInit_719 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj518.methods["isInit:="] = writer_kitty_isInit_719;
          reader_kitty_isInit_719.confidential = true;
          writer_kitty_isInit_719.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool718)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 193
          var bool720 = new GraceBoolean(false)
          obj518.data["isRunning"] = bool720;
          var reader_kitty_isRunning_721 = function() {
            return this.data["isRunning"];
          }
          obj518.methods["isRunning"] = reader_kitty_isRunning_721;
          obj518.data["isRunning"] = bool720;
          var writer_kitty_isRunning_721 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj518.methods["isRunning:="] = writer_kitty_isRunning_721;
          reader_kitty_isRunning_721.confidential = true;
          writer_kitty_isRunning_721.confidential = true;
          lineNumber = 195;
          moduleName = "kitty";
          lineNumber = 193
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool720)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["mctx"] = undefined;
          var reader_kitty_mctx_722 = function() {
            return this.data["mctx"];
          }
          obj518.methods["mctx"] = reader_kitty_mctx_722;
          obj518.data["mctx"] = undefined;
          var writer_kitty_mctx_722 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj518.methods["mctx:="] = writer_kitty_mctx_722;
          reader_kitty_mctx_722.confidential = true;
          writer_kitty_mctx_722.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 199
          lineNumber = 197
          var call723 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj518.data["currentKeyDown"] = call723;
          var reader_kitty_currentKeyDown_724 = function() {
            return this.data["currentKeyDown"];
          }
          obj518.methods["currentKeyDown"] = reader_kitty_currentKeyDown_724;
          obj518.data["currentKeyDown"] = call723;
          var writer_kitty_currentKeyDown_724 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj518.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_724;
          reader_kitty_currentKeyDown_724.confidential = true;
          writer_kitty_currentKeyDown_724.confidential = true;
          lineNumber = 199;
          moduleName = "kitty";
          lineNumber = 197
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call723)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["ent"] = undefined;
          var reader_kitty_ent_725 = function() {
            return this.data["ent"];
          }
          obj518.methods["ent"] = reader_kitty_ent_725;
          obj518.data["ent"] = undefined;
          var writer_kitty_ent_725 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj518.methods["ent:="] = writer_kitty_ent_725;
          reader_kitty_ent_725.confidential = true;
          writer_kitty_ent_725.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 201
          onSelf = true;
          var call726 = callmethod(this, "init", [0]);
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          superDepth = origSuperDepth;
        }
        obj_init_518.apply(obj518, []);
        return obj518
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func517.paramCounts = [
      0,
    ];
    func517.variableArities = [
      false,
    ];
    obj515.methods["new"] = func517;
    func517.definitionLine = 174;
    func517.definitionModule = "kitty";
    var func727 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj728 = Grace_allocObject();
        obj728.definitionModule = "kitty";
        obj728.definitionLine = 174;
        var inho728 = inheritingObject;
        while (inho728.superobj) inho728 = inho728.superobj;
        inho728.superobj = obj728;
        obj728.data = inheritingObject.data;
        obj728.outer = this;
        var reader_kitty_outer_729 = function() {
          return this.outer;
        }
        obj728.methods["outer"] = reader_kitty_outer_729;
        function obj_init_728() {
          var origSuperDepth = superDepth;
          superDepth = obj728;
          obj728.annotations = [];
          var func730 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func730.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              var if731 = var_done;
              lineNumber = 208
              onSelf = true;
              var call732 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call732)) {
                lineNumber = 210
                lineNumber = 209
                var bool733 = new GraceBoolean(false)
                return bool733
              }
              lineNumber = 213
              lineNumber = 190
              lineNumber = 212
              var call734 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call735 = callmethod(this, "document:=", [1], call734);
              lineNumber = 213
              lineNumber = 212
              lineNumber = 213
              var string736 = new GraceString("standard-canvas");
              onSelf = true;
              var call737 = callmethod(this, "document", [0]);
              var call738 = callmethod(call737,"getElementById", [1], string736);
              onSelf = true;
              var call739 = callmethod(this, "canvas:=", [1], call738);
              lineNumber = 215
              lineNumber = 212
              lineNumber = 214
              onSelf = true;
              var call740 = callmethod(this, "canvas", [0]);
              var call741 = callmethod(call740,"width", [0]);
              onSelf = true;
              var call742 = callmethod(this, "canvasWidth:=", [1], call741);
              lineNumber = 218
              lineNumber = 214
              lineNumber = 215
              onSelf = true;
              var call743 = callmethod(this, "canvas", [0]);
              var call744 = callmethod(call743,"height", [0]);
              onSelf = true;
              var call745 = callmethod(this, "canvasHeight:=", [1], call744);
              lineNumber = 230
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
              block746.className = 'block<kitty:230>';
              block746.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 221
                lineNumber = 220
                onSelf = true;
                var call747 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call749 = callmethod(this, "canvas", [0]);
                var call750 = callmethod(call749,"offsetWidth", [0]);
                onSelf = true;
                var call752 = callmethod(this, "canvas", [0]);
                var call753 = callmethod(call752,"offsetLeft", [0]);
                var call755 = callmethod(var_ev,"clientX", [0]);
                var diff757 = callmethod(call755, "-", [1], call753);
                var quotient759 = callmethod(diff757, "/", [1], call750);
                var prod761 = callmethod(quotient759, "*", [1], call747);
                var var_x = prod761;
                lineNumber = 221;
                moduleName = "kitty";
                lineNumber = 220
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 225
                lineNumber = 221
                onSelf = true;
                var call762 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call764 = callmethod(this, "canvas", [0]);
                var call765 = callmethod(call764,"offsetHeight", [0]);
                onSelf = true;
                var call767 = callmethod(this, "canvas", [0]);
                var call768 = callmethod(call767,"offsetTop", [0]);
                var call770 = callmethod(var_ev,"clientY", [0]);
                var diff772 = callmethod(call770, "-", [1], call768);
                var quotient774 = callmethod(diff772, "/", [1], call765);
                var prod776 = callmethod(quotient774, "*", [1], call762);
                var var_y = prod776;
                lineNumber = 225;
                moduleName = "kitty";
                lineNumber = 221
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 229
                var if777 = var_done;
                lineNumber = 225
                var opresult780 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call783 = callmethod(this, "canvasWidth", [0]);
                var diff785 = callmethod(call783, "-", [1], new GraceNum(20));
                var opresult788 = callmethod(var_x, ">", [1], diff785);
                var opresult790 = callmethod(opresult788, "&&", [1], opresult780);
                if (Grace_isTrue(opresult790)) {
                  lineNumber = 226
                  var call791 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 227
                  onSelf = true;
                  var call792 = callmethod(this, "stop", [0]);
                  if777 = call792;
                }
                return if777;
              };
              var_mouseDownListener = block746;
              lineNumber = 230
              var string793 = new GraceString("mousedown");
              onSelf = true;
              var call794 = callmethod(this, "canvas", [0]);
              var call795 = callmethod(call794,"addEventListener", [2], string793, var_mouseDownListener);
              lineNumber = 240
              var block796 = Grace_allocObject();
              block796.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block796.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block796.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block796.methods["match"] = GraceBlock_match;
              block796.methods["prefix?"] = GraceBlock_lift;
              block796.receiver = this;
              block796.className = 'block<kitty:240>';
              block796.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 238
                var if797 = var_done;
                lineNumber = 235
                var call799 = callmethod(var_ev,"keyCode", [0]);
                var opresult801 = callmethod(call799, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult801)) {
                  lineNumber = 236
                  onSelf = true;
                  var call802 = callmethod(this, "stop", [0]);
                  if797 = call802;
                }
                lineNumber = 239
                lineNumber = 235
                lineNumber = 238
                var call803 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call804 = callmethod(this, "currentKeyDown:=", [1], call803);
                return call804;
              };
              var_keyDownListener = block796;
              lineNumber = 240
              var string805 = new GraceString("keydown");
              onSelf = true;
              var call806 = callmethod(this, "document", [0]);
              var call807 = callmethod(call806,"addEventListener", [2], string805, var_keyDownListener);
              lineNumber = 246
              var block808 = Grace_allocObject();
              block808.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block808.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block808.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block808.methods["match"] = GraceBlock_match;
              block808.methods["prefix?"] = GraceBlock_lift;
              block808.receiver = this;
              block808.className = 'block<kitty:246>';
              block808.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 245
                lineNumber = 238
                lineNumber = 245
                lineNumber = 244
                var call809 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call810 = callmethod(this, "currentKeyDown:=", [1], call809);
                return call810;
              };
              var_keyUpListener = block808;
              lineNumber = 246
              var string811 = new GraceString("keyup");
              onSelf = true;
              var call812 = callmethod(this, "document", [0]);
              var call813 = callmethod(call812,"addEventListener", [2], string811, var_keyUpListener);
              lineNumber = 248
              lineNumber = 238
              lineNumber = 248
              var string814 = new GraceString("canvas");
              var call815 = callmethod(var_dom,"document", [0]);
              var call816 = callmethod(call815,"createElement", [1], string814);
              onSelf = true;
              var call817 = callmethod(this, "backingCanvas:=", [1], call816);
              lineNumber = 250
              lineNumber = 248
              lineNumber = 249
              onSelf = true;
              var call818 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call819 = callmethod(this, "backingCanvas", [0]);
              var call820 = callmethod(call819,"height:=", [1], call818);
              lineNumber = 251
              lineNumber = 248
              lineNumber = 250
              onSelf = true;
              var call821 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call822 = callmethod(this, "backingCanvas", [0]);
              var call823 = callmethod(call822,"width:=", [1], call821);
              lineNumber = 251
              lineNumber = 248
              lineNumber = 251
              var string824 = new GraceString("2d");
              onSelf = true;
              var call825 = callmethod(this, "backingCanvas", [0]);
              var call826 = callmethod(call825,"getContext", [1], string824);
              onSelf = true;
              var call827 = callmethod(this, "backingContext:=", [1], call826);
              lineNumber = 252
              lineNumber = 248
              lineNumber = 252
              var string828 = new GraceString("2d");
              onSelf = true;
              var call829 = callmethod(this, "canvas", [0]);
              var call830 = callmethod(call829,"getContext", [1], string828);
              onSelf = true;
              var call831 = callmethod(this, "mctx:=", [1], call830);
              lineNumber = 255
              var string832 = new GraceString("doggo.jpg");
              onSelf = true;
              var call833 = callmethod(this, "setBackground", [1], string832);
              lineNumber = 258
              lineNumber = 248
              lineNumber = 258
              var string834 = new GraceString("explosion.png");
              var call835 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call836 = callmethod(call835, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call837 = callmethod(call836, "Entity()foo()bar", [1, 1, 1], string834, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call838 = callmethod(this, "ent:=", [1], call837);
              lineNumber = 267
              lineNumber = 258
              lineNumber = 261
              var bool839 = new GraceBoolean(true)
              onSelf = true;
              var call840 = callmethod(this, "isInit:=", [1], bool839);
              return call840
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func730.paramCounts = [
            0,
          ];
          func730.variableArities = [
            false,
          ];
          obj728.methods["init"] = func730;
          func730.definitionLine = 204;
          func730.definitionModule = "kitty";
          var func841 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func841.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 258
              lineNumber = 272
              var bool842 = new GraceBoolean(true)
              onSelf = true;
              var call843 = callmethod(this, "isRunning:=", [1], bool842);
              lineNumber = 273
              var block844 = Grace_allocObject();
              block844.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block844.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block844.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block844.methods["match"] = GraceBlock_match;
              block844.methods["prefix?"] = GraceBlock_lift;
              block844.receiver = this;
              block844.className = 'block<kitty:273>';
              block844.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call845 = callmethod(this, "isRunning", [0]);
                return call845;
              };
              lineNumber = 277
              var block846 = Grace_allocObject();
              block846.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block846.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block846.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block846.methods["match"] = GraceBlock_match;
              block846.methods["prefix?"] = GraceBlock_lift;
              block846.receiver = this;
              block846.className = 'block<kitty:277>';
              block846.real = function(
              ) {
                sourceObject = this;
                lineNumber = 274
                onSelf = true;
                var call847 = callmethod(this, "update", [0]);
                return call847;
              };
              lineNumber = 273
              var call848 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block844, new GraceNum(10), block846);
              return call848
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func841.paramCounts = [
            0,
          ];
          func841.variableArities = [
            false,
          ];
          obj728.methods["start"] = func841;
          func841.definitionLine = 270;
          func841.definitionModule = "kitty";
          var func849 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func849.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 258
              lineNumber = 285
              onSelf = true;
              var call850 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call851 = callmethod(this, "mctx", [0]);
              var call852 = callmethod(call851,"fillStyle:=", [1], call850);
              lineNumber = 286
              onSelf = true;
              var call853 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call854 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call855 = callmethod(this, "mctx", [0]);
              var call856 = callmethod(call855,"fillRect", [4], new GraceNum(0), new GraceNum(0), call853, call854);
              lineNumber = 287
              onSelf = true;
              var call857 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call858 = callmethod(this, "mctx", [0]);
              var call859 = callmethod(call858,"drawImage", [3], call857, new GraceNum(0), new GraceNum(0));
              lineNumber = 288
              onSelf = true;
              var call860 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call862 = callmethod(this, "canvasWidth", [0]);
              var quotient864 = callmethod(call862, "/", [1], new GraceNum(2));
              onSelf = true;
              var call866 = callmethod(this, "canvasHeight", [0]);
              var quotient868 = callmethod(call866, "/", [1], new GraceNum(2));
              onSelf = true;
              var call869 = callmethod(this, "background", [0]);
              var call870 = callmethod(call869,"draw", [4], call860, quotient864, quotient868, new GraceNum(0));
              lineNumber = 291
              onSelf = true;
              var call871 = callmethod(this, "entities", [0]);
              lineNumber = 297
              var block872 = Grace_allocObject();
              block872.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block872.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block872.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block872.methods["match"] = GraceBlock_match;
              block872.methods["prefix?"] = GraceBlock_lift;
              block872.receiver = this;
              block872.className = 'block<kitty:297>';
              block872.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 292
                var call873 = callmethod(var_entity,"update", [0]);
                lineNumber = 293
                onSelf = true;
                var call874 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call876 = callmethod(this, "canvasWidth", [0]);
                var quotient878 = callmethod(call876, "/", [1], new GraceNum(2));
                onSelf = true;
                var call880 = callmethod(this, "canvasHeight", [0]);
                var quotient882 = callmethod(call880, "/", [1], new GraceNum(2));
                var call883 = callmethod(var_entity,"draw", [3], call874, quotient878, quotient882);
                return call883;
              };
              var call884 = callmethod(Grace_prelude,"for()do", [1, 1], call871, block872);
              return call884
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func849.paramCounts = [
            0,
          ];
          func849.variableArities = [
            false,
          ];
          obj728.methods["update"] = func849;
          func849.definitionLine = 280;
          func849.definitionModule = "kitty";
          var func885 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func885.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              var string886 = new GraceString("WORLD STOPPING...");
              var call887 = Grace_print(string886);
              lineNumber = 302
              lineNumber = 292
              lineNumber = 301
              var bool888 = new GraceBoolean(false)
              onSelf = true;
              var call889 = callmethod(this, "isRunning:=", [1], bool888);
              lineNumber = 302
              var string890 = new GraceString("mousedown");
              onSelf = true;
              var call891 = callmethod(this, "canvas", [0]);
              var call892 = callmethod(call891,"removeEventListener", [2], string890, var_mouseDownListener);
              lineNumber = 303
              var string893 = new GraceString("keydown");
              onSelf = true;
              var call894 = callmethod(this, "document", [0]);
              var call895 = callmethod(call894,"removeEventListener", [2], string893, var_keyDownListener);
              lineNumber = 304
              var string896 = new GraceString("keyup");
              onSelf = true;
              var call897 = callmethod(this, "document", [0]);
              var call898 = callmethod(call897,"removeEventListener", [2], string896, var_keyUpListener);
              return call898
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func885.paramCounts = [
            0,
          ];
          func885.variableArities = [
            false,
          ];
          obj728.methods["stop"] = func885;
          func885.definitionLine = 299;
          func885.definitionModule = "kitty";
          var func899 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func899.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
              onSelf = true;
              var call900 = callmethod(this, "currentKeyDown", [0]);
              var opresult903 = callmethod(var_key, "==", [1], call900);
              return opresult903
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func899.paramCounts = [
            1,
          ];
          func899.variableArities = [
            false,
          ];
          obj728.methods["isKeyDown"] = func899;
          func899.definitionLine = 307;
          func899.definitionModule = "kitty";
          var func904 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func904.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 312
              lineNumber = 292
              lineNumber = 312
              onSelf = true;
              var call905 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call906 = callmethod(this, "canvasHeight", [0]);
              var call907 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call908 = callmethod(call907, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call909 = callmethod(call908, "Image()width()height", [1, 1, 1], var_url, call905, call906);
              onSelf = true;
              var call910 = callmethod(this, "background:=", [1], call909);
              return call910
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func904.paramCounts = [
            1,
          ];
          func904.variableArities = [
            false,
          ];
          obj728.methods["setBackground"] = func904;
          func904.definitionLine = 311;
          func904.definitionModule = "kitty";
          var func911 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func911.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              onSelf = true;
              var call912 = callmethod(this, "entities", [0]);
              var call913 = callmethod(call912,"push", [1], var_e);
              return call913
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func911.paramTypes = [];
          func911.paramTypes.push([]);
          func911.paramCounts = [
            1,
          ];
          func911.variableArities = [
            false,
          ];
          obj728.methods["addEntity"] = func911;
          func911.definitionLine = 315;
          func911.definitionModule = "kitty";
          var func914 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func914.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 321
              lineNumber = 320
              onSelf = true;
              var call915 = callmethod(this, "mctx", [0]);
              return call915
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func914.paramCounts = [
            0,
          ];
          func914.variableArities = [
            false,
          ];
          obj728.methods["getContext"] = func914;
          func914.definitionLine = 319;
          func914.definitionModule = "kitty";
          sourceObject = obj728;
          obj728.data["background"] = undefined;
          var reader_kitty_background_916 = function() {
            return this.data["background"];
          }
          obj728.methods["background"] = reader_kitty_background_916;
          obj728.data["background"] = undefined;
          var writer_kitty_background_916 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj728.methods["background:="] = writer_kitty_background_916;
          reader_kitty_background_916.confidential = true;
          writer_kitty_background_916.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 179
          var string917 = new GraceString("black");
          obj728.data["backgroundColour"] = string917;
          var reader_kitty_backgroundColour_918 = function() {
            return this.data["backgroundColour"];
          }
          obj728.methods["backgroundColour"] = reader_kitty_backgroundColour_918;
          obj728.data["backgroundColour"] = string917;
          var writer_kitty_backgroundColour_918 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj728.methods["backgroundColour:="] = writer_kitty_backgroundColour_918;
          reader_kitty_backgroundColour_918.confidential = true;
          writer_kitty_backgroundColour_918.confidential = true;
          lineNumber = 181;
          moduleName = "kitty";
          lineNumber = 179
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string917)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["document"] = undefined;
          var reader_kitty_document_919 = function() {
            return this.data["document"];
          }
          obj728.methods["document"] = reader_kitty_document_919;
          obj728.data["document"] = undefined;
          var writer_kitty_document_919 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj728.methods["document:="] = writer_kitty_document_919;
          reader_kitty_document_919.confidential = true;
          writer_kitty_document_919.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_920 = function() {
            return this.data["backingCanvas"];
          }
          obj728.methods["backingCanvas"] = reader_kitty_backingCanvas_920;
          obj728.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_920 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj728.methods["backingCanvas:="] = writer_kitty_backingCanvas_920;
          reader_kitty_backingCanvas_920.confidential = true;
          writer_kitty_backingCanvas_920.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["backingContext"] = undefined;
          var reader_kitty_backingContext_921 = function() {
            return this.data["backingContext"];
          }
          obj728.methods["backingContext"] = reader_kitty_backingContext_921;
          obj728.data["backingContext"] = undefined;
          var writer_kitty_backingContext_921 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj728.methods["backingContext:="] = writer_kitty_backingContext_921;
          reader_kitty_backingContext_921.confidential = true;
          writer_kitty_backingContext_921.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["canvas"] = undefined;
          var reader_kitty_canvas_922 = function() {
            return this.data["canvas"];
          }
          obj728.methods["canvas"] = reader_kitty_canvas_922;
          obj728.data["canvas"] = undefined;
          var writer_kitty_canvas_922 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj728.methods["canvas:="] = writer_kitty_canvas_922;
          reader_kitty_canvas_922.confidential = true;
          writer_kitty_canvas_922.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_923 = function() {
            return this.data["canvasWidth"];
          }
          obj728.methods["canvasWidth"] = reader_kitty_canvasWidth_923;
          obj728.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_923 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj728.methods["canvasWidth:="] = writer_kitty_canvasWidth_923;
          reader_kitty_canvasWidth_923.confidential = true;
          writer_kitty_canvasWidth_923.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_924 = function() {
            return this.data["canvasHeight"];
          }
          obj728.methods["canvasHeight"] = reader_kitty_canvasHeight_924;
          obj728.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_924 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj728.methods["canvasHeight:="] = writer_kitty_canvasHeight_924;
          reader_kitty_canvasHeight_924.confidential = true;
          writer_kitty_canvasHeight_924.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 190
          var call925 = callmethod(var_collections,"list", [0]);
          var call926 = callmethod(call925,"new", [0]);
          obj728.data["entities"] = call926;
          var reader_kitty_entities_927 = function() {
            return this.data["entities"];
          }
          obj728.methods["entities"] = reader_kitty_entities_927;
          obj728.data["entities"] = call926;
          var writer_kitty_entities_927 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj728.methods["entities:="] = writer_kitty_entities_927;
          reader_kitty_entities_927.confidential = true;
          writer_kitty_entities_927.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call926)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 192
          var bool928 = new GraceBoolean(false)
          obj728.data["isInit"] = bool928;
          var reader_kitty_isInit_929 = function() {
            return this.data["isInit"];
          }
          obj728.methods["isInit"] = reader_kitty_isInit_929;
          obj728.data["isInit"] = bool928;
          var writer_kitty_isInit_929 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj728.methods["isInit:="] = writer_kitty_isInit_929;
          reader_kitty_isInit_929.confidential = true;
          writer_kitty_isInit_929.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool928)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 193
          var bool930 = new GraceBoolean(false)
          obj728.data["isRunning"] = bool930;
          var reader_kitty_isRunning_931 = function() {
            return this.data["isRunning"];
          }
          obj728.methods["isRunning"] = reader_kitty_isRunning_931;
          obj728.data["isRunning"] = bool930;
          var writer_kitty_isRunning_931 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj728.methods["isRunning:="] = writer_kitty_isRunning_931;
          reader_kitty_isRunning_931.confidential = true;
          writer_kitty_isRunning_931.confidential = true;
          lineNumber = 195;
          moduleName = "kitty";
          lineNumber = 193
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool930)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["mctx"] = undefined;
          var reader_kitty_mctx_932 = function() {
            return this.data["mctx"];
          }
          obj728.methods["mctx"] = reader_kitty_mctx_932;
          obj728.data["mctx"] = undefined;
          var writer_kitty_mctx_932 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj728.methods["mctx:="] = writer_kitty_mctx_932;
          reader_kitty_mctx_932.confidential = true;
          writer_kitty_mctx_932.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 199
          lineNumber = 197
          var call933 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj728.data["currentKeyDown"] = call933;
          var reader_kitty_currentKeyDown_934 = function() {
            return this.data["currentKeyDown"];
          }
          obj728.methods["currentKeyDown"] = reader_kitty_currentKeyDown_934;
          obj728.data["currentKeyDown"] = call933;
          var writer_kitty_currentKeyDown_934 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj728.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_934;
          reader_kitty_currentKeyDown_934.confidential = true;
          writer_kitty_currentKeyDown_934.confidential = true;
          lineNumber = 199;
          moduleName = "kitty";
          lineNumber = 197
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call933)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj728.mutable = true;
          sourceObject = obj728;
          obj728.data["ent"] = undefined;
          var reader_kitty_ent_935 = function() {
            return this.data["ent"];
          }
          obj728.methods["ent"] = reader_kitty_ent_935;
          obj728.data["ent"] = undefined;
          var writer_kitty_ent_935 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj728.methods["ent:="] = writer_kitty_ent_935;
          reader_kitty_ent_935.confidential = true;
          writer_kitty_ent_935.confidential = true;
          obj728.mutable = true;
          sourceObject = obj728;
          lineNumber = 201
          onSelf = true;
          var call936 = callmethod(this, "init", [0]);
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          sourceObject = obj728;
          superDepth = origSuperDepth;
        }
        obj_init_728.apply(inheritingObject, []);
        return obj728
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj515.methods["new()object"] = func727;
    var func937 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 174
        var string938 = new GraceString("class KittyWorld");
        return string938
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func937.paramCounts = [
    ];
    func937.variableArities = [
    ];
    obj515.methods["asDebugString"] = func937;
    func937.definitionLine = 174;
    func937.definitionModule = "kitty";
    sourceObject = obj515;
    sourceObject = obj515;
    superDepth = origSuperDepth;
  }
  obj_init_515.apply(obj515, []);
  var var_KittyWorld = obj515;
  lineNumber = 325
  lineNumber = 334
  lineNumber = 349
  lineNumber = 354
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Entity()foo()bar:\n awake\n posX\n posY\n turn\n draw\n setImage\n rotation\n tag:=\n move\n tag\n setAction\n setLocation\n getRotation\n update\n strafe\n start\n action:=\n createImage\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n onDestroy\n rotation:=\nconstructors-of:KittyImage:\n new\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n imgTag\n elements\n width\n getTag\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n setBackground\n backingContext\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n backgroundColour:=\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n addEntity\n isRunning:=\n isInit\n mctx:=\n canvasWidth\n entities\n isRunning\n backingContext:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isKeyDown\n ent:=\n background\n ent\n entities:=\n stop\n isInit:=\nmethods-of:KittyKat.new:\n awake\n posX\n posY\n turn\n draw\n setImage\n rotation\n tag:=\n move\n tag\n setAction\n setLocation\n getRotation\n update\n strafe\n start\n action:=\n createImage\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n rotation:=\n onDestroy\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyKat\n Kitty\n Entity()foo()bar\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nconstructors-of:KittyKat:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyKat\n Kitty\n KittyWorld\nconstructors-of:Kitty:\n new\nconfidential:\nfresh-methods:\n Image()width()height\n Entity()foo()bar\n World\nmethods-of:Kitty.new:\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n imgTag\n elements\n width\n getTag\nmethods-of:KittyWorld.new:\n setBackground\n backgroundColour\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n backingContext:=\n canvas:=\n backingContext\n background:=\n currentKeyDown\n addEntity\n init\n isInit\n mctx:=\n canvasWidth\n entities\n isRunning\n backgroundColour:=\n canvasHeight:=\n start\n isRunning:=\n canvasHeight\n currentKeyDown:=\n canvas\n isKeyDown\n ent:=\n background\n isInit:=\n entities:=\n stop\n ent\n";
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
    "    print \"CREATING NEW IMAGE: {url'}...\"",
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
    "    print \"CREATED NEW IMAGE: {url'}\"",
    "}",
    "",
    "method Image(url)width(width')height(height') {",
    "    object {",
    "        inherits KittyImage.new(url, width', height')",
    "    }",
    "}",
    "",
    "// Represents an object in the game world",
    "class KittyKat.new(ghee', x', y') {",
    "    ",
    "    print \"HERE\"",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
    "    var tag := ghee'",
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
    "    method setImage(image') {",
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
    "",
    "    ",
    "    print \"ENTITY CREATED\"",
    "} ",
    "",
    "class Kitty.new(a, b, c) {",
    "    print \"{a}, {b}, {c}\"",
    "}",
    "",
    "method Entity(ghee)foo(x')bar(y') {",
    "    object {",
    "        // inherits KittyImage.new(ghee, x', y')",
    "        // inherits KittyEntity.new(ghee, x', y')",
    "        // inherits Kitty.new(ghee, x', y')",
    "        inherits KittyKat.new(ghee, x', y')",
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
    "        ent := Entity(\"explosion.png\")foo(64)bar(64)",
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
