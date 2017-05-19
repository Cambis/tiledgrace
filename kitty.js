function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 58
  var func0 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Image)"));
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
        var call3 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_x__39__, var_y__39__, this);
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
    3,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["Image"] = func0;
  func0.definitionLine = 58;
  func0.definitionModule = "kitty";
  var func4 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
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
        var call7 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_x__39__, var_y__39__, this);
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
  this.methods["Image()object"] = func4;
  lineNumber = 157
  var func8 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func8.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
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
        var call11 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
    2,
  ];
  func8.variableArities = [
    false,
  ];
  this.methods["Entity"] = func8;
  func8.definitionLine = 157;
  func8.definitionModule = "kitty";
  var func12 = function(argcv) {
    var curarg = 1;
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
        var call15 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
  this.methods["Entity()object"] = func12;
  lineNumber = 309
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 310
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 310;
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
        lineNumber = 311
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
  func16.definitionLine = 309;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 310;
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
  lineNumber = 318
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 320
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 327
      var if27 = var_done;
      lineNumber = 322
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 323
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 325
        return var_done
      }
      lineNumber = 327
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 330
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
  func24.definitionLine = 318;
  func24.definitionModule = "kitty";
  lineNumber = 333
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
      lineNumber = 335
      lineNumber = 334
      var_m__95__world = var_world__39__;
      lineNumber = 336
      lineNumber = 335
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
  func34.definitionLine = 333;
  func34.definitionModule = "kitty";
  lineNumber = 338
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
      lineNumber = 339
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
  func36.definitionLine = 338;
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
  lineNumber = 330
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
  func39.definitionLine = 330;
  func39.definitionModule = "kitty";
  lineNumber = 330
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
  func40.definitionLine = 330;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 330
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
  func42.definitionLine = 330;
  func42.definitionModule = "kitty";
  lineNumber = 330
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
  func43.definitionLine = 330;
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
  lineNumber = 330
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
  func44.definitionLine = 330;
  func44.definitionModule = "kitty";
  lineNumber = 330
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
  func45.definitionLine = 330;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 330
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
  func46.definitionLine = 330;
  func46.definitionModule = "kitty";
  lineNumber = 330
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
  func47.definitionLine = 330;
  func47.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 330
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
  func48.definitionLine = 330;
  func48.definitionModule = "kitty";
  lineNumber = 330
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
  func49.definitionLine = 330;
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
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
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
          lineNumber = 25
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
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call93)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj57;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call95 = callmethod(this, "imgTag", [0]);
          var call96 = callmethod(call95,"src:=", [1], var_url__39__);
          sourceObject = obj57;
          lineNumber = 28
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
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call98)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 29
          onSelf = true;
          var call100 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call101 = callmethod(this, "elements", [0]);
          var call102 = callmethod(call101,"push", [1], call100);
          sourceObject = obj57;
          lineNumber = 31
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
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
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
              lineNumber = 36
              var call109 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call110 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod114 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient116 = callmethod(prod114, "/", [1], new GraceNum(180));
              var call117 = callmethod(var_ctx,"rotate", [1], quotient116);
              lineNumber = 40
              onSelf = true;
              var call118 = callmethod(this, "elements", [0]);
              lineNumber = 43
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
              block119.className = 'block<kitty:43>';
              block119.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
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
              lineNumber = 43
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
          func108.definitionLine = 34;
          func108.definitionModule = "kitty";
          var func135 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func135.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
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
          func135.definitionLine = 47;
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
              lineNumber = 52
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
          func137.definitionLine = 51;
          func137.definitionModule = "kitty";
          sourceObject = obj106;
          lineNumber = 25
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
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call142)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj106;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call144 = callmethod(this, "imgTag", [0]);
          var call145 = callmethod(call144,"src:=", [1], var_url__39__);
          sourceObject = obj106;
          lineNumber = 28
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
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call147)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj106.mutable = true;
          sourceObject = obj106;
          lineNumber = 29
          onSelf = true;
          var call149 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call150 = callmethod(this, "elements", [0]);
          var call151 = callmethod(call150,"push", [1], call149);
          sourceObject = obj106;
          lineNumber = 31
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
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj106.mutable = true;
          sourceObject = obj106;
          lineNumber = 32
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
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
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
  lineNumber = 58
  lineNumber = 65
  var func156 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func156.paramCounts[0])
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
  func156.paramCounts = [
    0,
  ];
  func156.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func156;
  func156.definitionLine = 65;
  func156.definitionModule = "kitty";
  var obj157 = Grace_allocObject();
  obj157.definitionModule = "kitty";
  obj157.definitionLine = 65;
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
        obj160.definitionLine = 65;
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
              lineNumber = 86
              var string163 = new GraceString("realyee.png");
              onSelf = true;
              var call164 = callmethod(this, "setImage", [1], string163);
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
          func162.definitionLine = 84;
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
          func165.definitionLine = 90;
          func165.definitionModule = "kitty";
          var func166 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
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
          func166.definitionLine = 95;
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
          func169.definitionLine = 100;
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
              lineNumber = 105
              lineNumber = 96
              lineNumber = 105
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
              lineNumber = 106
              lineNumber = 96
              lineNumber = 106
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
          func170.definitionLine = 104;
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
              lineNumber = 110
              lineNumber = 96
              lineNumber = 110
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
              lineNumber = 111
              lineNumber = 96
              lineNumber = 111
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
          func203.definitionLine = 109;
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
              lineNumber = 116
              lineNumber = 96
              lineNumber = 116
              lineNumber = 115
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
          func242.definitionLine = 114;
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
              lineNumber = 119
              var call249 = callmethod(var_ctx,"save", [0]);
              lineNumber = 120
              onSelf = true;
              var call250 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call251 = callmethod(this, "posY", [0]);
              var call252 = callmethod(var_ctx,"translate", [2], call250, call251);
              lineNumber = 121
              onSelf = true;
              var call253 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call254 = callmethod(this, "image", [0]);
              var call255 = callmethod(call254,"draw", [4], var_ctx, var_dx, var_dy, call253);
              lineNumber = 122
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
          func248.definitionLine = 118;
          func248.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 122
              lineNumber = 126
              var call258 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call259 = callmethod(call258, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call260 = callmethod(call259, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
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
          obj160.methods["setImage"] = func257;
          func257.definitionLine = 125;
          func257.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImageMaster)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 126
              lineNumber = 130
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
          func262.paramCounts = [
            1,
          ];
          func262.variableArities = [
            false,
          ];
          obj160.methods["setImageMaster"] = func262;
          func262.definitionLine = 129;
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
              lineNumber = 135
              lineNumber = 126
              lineNumber = 134
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
          func264.definitionLine = 133;
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
              lineNumber = 139
              lineNumber = 126
              lineNumber = 138
              onSelf = true;
              var call267 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 140
              lineNumber = 126
              lineNumber = 139
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
          func266.definitionLine = 137;
          func266.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 143
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
          func269.definitionLine = 142;
          func269.definitionModule = "kitty";
          var func271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 147
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
          func271.definitionLine = 146;
          func271.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
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
          func273.definitionLine = 150;
          func273.definitionModule = "kitty";
          sourceObject = obj160;
          lineNumber = 69
          obj160.data["posX"] = var_x__39__;
          var reader_kitty_posX_275 = function() {
            return this.data["posX"];
          }
          obj160.methods["posX"] = reader_kitty_posX_275;
          obj160.data["posX"] = var_x__39__;
          var writer_kitty_posX_275 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj160.methods["posX:="] = writer_kitty_posX_275;
          reader_kitty_posX_275.confidential = true;
          writer_kitty_posX_275.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 70
          obj160.data["posY"] = var_y__39__;
          var reader_kitty_posY_276 = function() {
            return this.data["posY"];
          }
          obj160.methods["posY"] = reader_kitty_posY_276;
          obj160.data["posY"] = var_y__39__;
          var writer_kitty_posY_276 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj160.methods["posY:="] = writer_kitty_posY_276;
          reader_kitty_posY_276.confidential = true;
          writer_kitty_posY_276.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 71
          obj160.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_277 = function() {
            return this.data["rotation"];
          }
          obj160.methods["rotation"] = reader_kitty_rotation_277;
          obj160.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_277 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj160.methods["rotation:="] = writer_kitty_rotation_277;
          reader_kitty_rotation_277.confidential = true;
          writer_kitty_rotation_277.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 73
          var obj278 = Grace_allocObject();
          obj278.definitionModule = "kitty";
          obj278.definitionLine = 73;
          obj278.outer = this;
          var reader_kitty_outer_279 = function() {
            return this.outer;
          }
          obj278.methods["outer"] = reader_kitty_outer_279;
          function obj_init_278() {
            var origSuperDepth = superDepth;
            superDepth = obj278;
            obj278.annotations = [];
            var func280 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func280.paramCounts[0])
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
            func280.paramCounts = [
              0,
            ];
            func280.variableArities = [
              false,
            ];
            obj278.methods["update"] = func280;
            func280.definitionLine = 74;
            func280.definitionModule = "kitty";
            sourceObject = obj278;
            superDepth = origSuperDepth;
          }
          obj_init_278.apply(obj278, []);
          obj160.data["action"] = obj278;
          var reader_kitty_action_281 = function() {
            return this.data["action"];
          }
          obj160.methods["action"] = reader_kitty_action_281;
          obj160.data["action"] = obj278;
          var writer_kitty_action_281 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj160.methods["action:="] = writer_kitty_action_281;
          reader_kitty_action_281.confidential = true;
          writer_kitty_action_281.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj278)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj160.mutable = true;
          sourceObject = obj160;
          obj160.data["image"] = undefined;
          var reader_kitty_image_282 = function() {
            return this.data["image"];
          }
          obj160.methods["image"] = reader_kitty_image_282;
          obj160.data["image"] = undefined;
          var writer_kitty_image_282 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj160.methods["image:="] = writer_kitty_image_282;
          reader_kitty_image_282.confidential = true;
          writer_kitty_image_282.confidential = true;
          obj160.mutable = true;
          sourceObject = obj160;
          lineNumber = 81
          onSelf = true;
          var call283 = callmethod(this, "awake", [0]);
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
      2,
    ];
    func159.variableArities = [
      false,
    ];
    obj157.methods["new"] = func159;
    func159.definitionLine = 65;
    func159.definitionModule = "kitty";
    var func284 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj285 = Grace_allocObject();
        obj285.definitionModule = "kitty";
        obj285.definitionLine = 65;
        var inho285 = inheritingObject;
        while (inho285.superobj) inho285 = inho285.superobj;
        inho285.superobj = obj285;
        obj285.data = inheritingObject.data;
        obj285.outer = this;
        var reader_kitty_outer_286 = function() {
          return this.outer;
        }
        obj285.methods["outer"] = reader_kitty_outer_286;
        function obj_init_285() {
          var origSuperDepth = superDepth;
          superDepth = obj285;
          obj285.annotations = [];
          var func287 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              var string288 = new GraceString("realyee.png");
              onSelf = true;
              var call289 = callmethod(this, "setImage", [1], string288);
              return call289
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func287.paramCounts = [
            0,
          ];
          func287.variableArities = [
            false,
          ];
          obj285.methods["awake"] = func287;
          func287.definitionLine = 84;
          func287.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func290.paramCounts[0])
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
          func290.paramCounts = [
            0,
          ];
          func290.variableArities = [
            false,
          ];
          obj285.methods["start"] = func290;
          func290.definitionLine = 90;
          func290.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              onSelf = true;
              var call292 = callmethod(this, "action", [0]);
              var call293 = callmethod(call292,"update", [0]);
              return call293
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
          obj285.methods["update"] = func291;
          func291.definitionLine = 95;
          func291.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func294.paramCounts[0])
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
          func294.paramCounts = [
            0,
          ];
          func294.variableArities = [
            false,
          ];
          obj285.methods["onDestroy"] = func294;
          func294.definitionLine = 100;
          func294.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              lineNumber = 96
              lineNumber = 105
              onSelf = true;
              var call298 = callmethod(this, "rotation", [0]);
              var prod300 = callmethod(call298, "*", [1], new GraceNum(3.14159));
              var quotient302 = callmethod(prod300, "/", [1], new GraceNum(180));
              var call303 = callmethod(var_math,"cos", [1], quotient302);
              var prod306 = callmethod(var_distance, "*", [1], call303);
              onSelf = true;
              var call308 = callmethod(this, "posX", [0]);
              var opresult310 = callmethod(call308, "+", [1], prod306);
              onSelf = true;
              var call311 = callmethod(this, "posX:=", [1], opresult310);
              lineNumber = 106
              lineNumber = 96
              lineNumber = 106
              onSelf = true;
              var call314 = callmethod(this, "rotation", [0]);
              var prod316 = callmethod(call314, "*", [1], new GraceNum(3.14159));
              var quotient318 = callmethod(prod316, "/", [1], new GraceNum(180));
              var call319 = callmethod(var_math,"sin", [1], quotient318);
              var prod322 = callmethod(var_distance, "*", [1], call319);
              onSelf = true;
              var call324 = callmethod(this, "posY", [0]);
              var opresult326 = callmethod(call324, "+", [1], prod322);
              onSelf = true;
              var call327 = callmethod(this, "posY:=", [1], opresult326);
              return call327
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func295.paramCounts = [
            1,
          ];
          func295.variableArities = [
            false,
          ];
          obj285.methods["move"] = func295;
          func295.definitionLine = 104;
          func295.definitionModule = "kitty";
          var func328 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 96
              lineNumber = 110
              onSelf = true;
              var call331 = callmethod(this, "rotation", [0]);
              var opresult334 = callmethod(new GraceNum(90), "+", [1], call331);
              var prod336 = callmethod(opresult334, "*", [1], new GraceNum(3.14159));
              var quotient338 = callmethod(prod336, "/", [1], new GraceNum(180));
              var call339 = callmethod(var_math,"cos", [1], quotient338);
              var prod342 = callmethod(var_distance, "*", [1], call339);
              onSelf = true;
              var call344 = callmethod(this, "posX", [0]);
              var opresult346 = callmethod(call344, "+", [1], prod342);
              onSelf = true;
              var call347 = callmethod(this, "posX:=", [1], opresult346);
              lineNumber = 111
              lineNumber = 96
              lineNumber = 111
              onSelf = true;
              var call350 = callmethod(this, "rotation", [0]);
              var opresult353 = callmethod(new GraceNum(90), "+", [1], call350);
              var prod355 = callmethod(opresult353, "*", [1], new GraceNum(3.14159));
              var quotient357 = callmethod(prod355, "/", [1], new GraceNum(180));
              var call358 = callmethod(var_math,"sin", [1], quotient357);
              var prod361 = callmethod(var_distance, "*", [1], call358);
              onSelf = true;
              var call363 = callmethod(this, "posY", [0]);
              var opresult365 = callmethod(call363, "+", [1], prod361);
              onSelf = true;
              var call366 = callmethod(this, "posY:=", [1], opresult365);
              return call366
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func328.paramCounts = [
            1,
          ];
          func328.variableArities = [
            false,
          ];
          obj285.methods["strafe"] = func328;
          func328.definitionLine = 109;
          func328.definitionModule = "kitty";
          var func367 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func367.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 96
              lineNumber = 116
              lineNumber = 115
              onSelf = true;
              var call369 = callmethod(this, "rotation", [0]);
              var opresult371 = callmethod(call369, "+", [1], var_angle);
              onSelf = true;
              var call372 = callmethod(this, "rotation:=", [1], opresult371);
              return call372
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func367.paramCounts = [
            1,
          ];
          func367.variableArities = [
            false,
          ];
          obj285.methods["turn"] = func367;
          func367.definitionLine = 114;
          func367.definitionModule = "kitty";
          var func373 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func373.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              var call374 = callmethod(var_ctx,"save", [0]);
              lineNumber = 120
              onSelf = true;
              var call375 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call376 = callmethod(this, "posY", [0]);
              var call377 = callmethod(var_ctx,"translate", [2], call375, call376);
              lineNumber = 121
              onSelf = true;
              var call378 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call379 = callmethod(this, "image", [0]);
              var call380 = callmethod(call379,"draw", [4], var_ctx, var_dx, var_dy, call378);
              lineNumber = 122
              var call381 = callmethod(var_ctx,"restore", [0]);
              return call381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func373.paramCounts = [
            3,
          ];
          func373.variableArities = [
            false,
          ];
          obj285.methods["draw"] = func373;
          func373.definitionLine = 118;
          func373.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 122
              lineNumber = 126
              var call383 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call384 = callmethod(call383, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call385 = callmethod(call384, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call386 = callmethod(this, "image:=", [1], call385);
              return call386
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func382.paramCounts = [
            1,
          ];
          func382.variableArities = [
            false,
          ];
          obj285.methods["setImage"] = func382;
          func382.definitionLine = 125;
          func382.definitionModule = "kitty";
          var func387 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func387.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImageMaster)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 126
              lineNumber = 130
              onSelf = true;
              var call388 = callmethod(this, "image:=", [1], var_image__39__);
              return call388
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func387.paramCounts = [
            1,
          ];
          func387.variableArities = [
            false,
          ];
          obj285.methods["setImageMaster"] = func387;
          func387.definitionLine = 129;
          func387.definitionModule = "kitty";
          var func389 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func389.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 126
              lineNumber = 134
              onSelf = true;
              var call390 = callmethod(this, "action:=", [1], var_action__39__);
              return call390
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func389.paramCounts = [
            1,
          ];
          func389.variableArities = [
            false,
          ];
          obj285.methods["setAction"] = func389;
          func389.definitionLine = 133;
          func389.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func391.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              lineNumber = 126
              lineNumber = 138
              onSelf = true;
              var call392 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 140
              lineNumber = 126
              lineNumber = 139
              onSelf = true;
              var call393 = callmethod(this, "posY:=", [1], var_y);
              return call393
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func391.paramCounts = [
            2,
          ];
          func391.variableArities = [
            false,
          ];
          obj285.methods["setLocation"] = func391;
          func391.definitionLine = 137;
          func391.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 143
              onSelf = true;
              var call395 = callmethod(this, "posX", [0]);
              return call395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func394.paramCounts = [
            0,
          ];
          func394.variableArities = [
            false,
          ];
          obj285.methods["getX"] = func394;
          func394.definitionLine = 142;
          func394.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 147
              onSelf = true;
              var call397 = callmethod(this, "posY", [0]);
              return call397
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func396.paramCounts = [
            0,
          ];
          func396.variableArities = [
            false,
          ];
          obj285.methods["getY"] = func396;
          func396.definitionLine = 146;
          func396.definitionModule = "kitty";
          var func398 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
              onSelf = true;
              var call399 = callmethod(this, "rotation", [0]);
              return call399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func398.paramCounts = [
            0,
          ];
          func398.variableArities = [
            false,
          ];
          obj285.methods["getRotation"] = func398;
          func398.definitionLine = 150;
          func398.definitionModule = "kitty";
          sourceObject = obj285;
          lineNumber = 69
          obj285.data["posX"] = var_x__39__;
          var reader_kitty_posX_400 = function() {
            return this.data["posX"];
          }
          obj285.methods["posX"] = reader_kitty_posX_400;
          obj285.data["posX"] = var_x__39__;
          var writer_kitty_posX_400 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj285.methods["posX:="] = writer_kitty_posX_400;
          reader_kitty_posX_400.confidential = true;
          writer_kitty_posX_400.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj285.mutable = true;
          sourceObject = obj285;
          lineNumber = 70
          obj285.data["posY"] = var_y__39__;
          var reader_kitty_posY_401 = function() {
            return this.data["posY"];
          }
          obj285.methods["posY"] = reader_kitty_posY_401;
          obj285.data["posY"] = var_y__39__;
          var writer_kitty_posY_401 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj285.methods["posY:="] = writer_kitty_posY_401;
          reader_kitty_posY_401.confidential = true;
          writer_kitty_posY_401.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj285.mutable = true;
          sourceObject = obj285;
          lineNumber = 71
          obj285.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_402 = function() {
            return this.data["rotation"];
          }
          obj285.methods["rotation"] = reader_kitty_rotation_402;
          obj285.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_402 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj285.methods["rotation:="] = writer_kitty_rotation_402;
          reader_kitty_rotation_402.confidential = true;
          writer_kitty_rotation_402.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj285.mutable = true;
          sourceObject = obj285;
          lineNumber = 73
          var obj403 = Grace_allocObject();
          obj403.definitionModule = "kitty";
          obj403.definitionLine = 73;
          obj403.outer = this;
          var reader_kitty_outer_404 = function() {
            return this.outer;
          }
          obj403.methods["outer"] = reader_kitty_outer_404;
          function obj_init_403() {
            var origSuperDepth = superDepth;
            superDepth = obj403;
            obj403.annotations = [];
            var func405 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func405.paramCounts[0])
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
            func405.paramCounts = [
              0,
            ];
            func405.variableArities = [
              false,
            ];
            obj403.methods["update"] = func405;
            func405.definitionLine = 74;
            func405.definitionModule = "kitty";
            sourceObject = obj403;
            superDepth = origSuperDepth;
          }
          obj_init_403.apply(obj403, []);
          obj285.data["action"] = obj403;
          var reader_kitty_action_406 = function() {
            return this.data["action"];
          }
          obj285.methods["action"] = reader_kitty_action_406;
          obj285.data["action"] = obj403;
          var writer_kitty_action_406 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj285.methods["action:="] = writer_kitty_action_406;
          reader_kitty_action_406.confidential = true;
          writer_kitty_action_406.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj403)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj285.mutable = true;
          sourceObject = obj285;
          obj285.data["image"] = undefined;
          var reader_kitty_image_407 = function() {
            return this.data["image"];
          }
          obj285.methods["image"] = reader_kitty_image_407;
          obj285.data["image"] = undefined;
          var writer_kitty_image_407 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj285.methods["image:="] = writer_kitty_image_407;
          reader_kitty_image_407.confidential = true;
          writer_kitty_image_407.confidential = true;
          obj285.mutable = true;
          sourceObject = obj285;
          lineNumber = 81
          onSelf = true;
          var call408 = callmethod(this, "awake", [0]);
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          sourceObject = obj285;
          superDepth = origSuperDepth;
        }
        obj_init_285.apply(inheritingObject, []);
        return obj285
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj157.methods["new()object"] = func284;
    var func409 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string410 = new GraceString("class KittyEntity");
        return string410
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func409.paramCounts = [
    ];
    func409.variableArities = [
    ];
    obj157.methods["asDebugString"] = func409;
    func409.definitionLine = 65;
    func409.definitionModule = "kitty";
    sourceObject = obj157;
    sourceObject = obj157;
    superDepth = origSuperDepth;
  }
  obj_init_157.apply(obj157, []);
  var var_KittyEntity = obj157;
  lineNumber = 157
  lineNumber = 164
  var func411 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func411.paramCounts[0])
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
  func411.paramCounts = [
    0,
  ];
  func411.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func411;
  func411.definitionLine = 164;
  func411.definitionModule = "kitty";
  var obj412 = Grace_allocObject();
  obj412.definitionModule = "kitty";
  obj412.definitionLine = 164;
  obj412.outer = this;
  var reader_kitty_outer_413 = function() {
    return this.outer;
  }
  obj412.methods["outer"] = reader_kitty_outer_413;
  function obj_init_412() {
    var origSuperDepth = superDepth;
    superDepth = obj412;
    obj412.annotations = [];
    var func414 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func414.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj415 = Grace_allocObject();
        obj415.definitionModule = "kitty";
        obj415.definitionLine = 164;
        obj415.outer = this;
        var reader_kitty_outer_416 = function() {
          return this.outer;
        }
        obj415.methods["outer"] = reader_kitty_outer_416;
        function obj_init_415() {
          var origSuperDepth = superDepth;
          superDepth = obj415;
          obj415.annotations = [];
          var func417 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func417.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              var if418 = var_done;
              lineNumber = 196
              onSelf = true;
              var call419 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call419)) {
                lineNumber = 198
                lineNumber = 197
                var bool420 = new GraceBoolean(false)
                return bool420
              }
              lineNumber = 201
              lineNumber = 164
              lineNumber = 200
              var call421 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call422 = callmethod(this, "document:=", [1], call421);
              lineNumber = 201
              lineNumber = 200
              lineNumber = 201
              var string423 = new GraceString("standard-canvas");
              onSelf = true;
              var call424 = callmethod(this, "document", [0]);
              var call425 = callmethod(call424,"getElementById", [1], string423);
              onSelf = true;
              var call426 = callmethod(this, "canvas:=", [1], call425);
              lineNumber = 203
              lineNumber = 200
              lineNumber = 202
              onSelf = true;
              var call427 = callmethod(this, "canvas", [0]);
              var call428 = callmethod(call427,"width", [0]);
              onSelf = true;
              var call429 = callmethod(this, "canvasWidth:=", [1], call428);
              lineNumber = 206
              lineNumber = 202
              lineNumber = 203
              onSelf = true;
              var call430 = callmethod(this, "canvas", [0]);
              var call431 = callmethod(call430,"height", [0]);
              onSelf = true;
              var call432 = callmethod(this, "canvasHeight:=", [1], call431);
              lineNumber = 218
              var block433 = Grace_allocObject();
              block433.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block433.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block433.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block433.methods["match"] = GraceBlock_match;
              block433.methods["prefix?"] = GraceBlock_lift;
              block433.receiver = this;
              block433.className = 'block<kitty:218>';
              block433.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 209
                lineNumber = 208
                onSelf = true;
                var call434 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call436 = callmethod(this, "canvas", [0]);
                var call437 = callmethod(call436,"offsetWidth", [0]);
                onSelf = true;
                var call439 = callmethod(this, "canvas", [0]);
                var call440 = callmethod(call439,"offsetLeft", [0]);
                var call442 = callmethod(var_ev,"clientX", [0]);
                var diff444 = callmethod(call442, "-", [1], call440);
                var quotient446 = callmethod(diff444, "/", [1], call437);
                var prod448 = callmethod(quotient446, "*", [1], call434);
                var var_x = prod448;
                lineNumber = 209;
                moduleName = "kitty";
                lineNumber = 208
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 213
                lineNumber = 209
                onSelf = true;
                var call449 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call451 = callmethod(this, "canvas", [0]);
                var call452 = callmethod(call451,"offsetHeight", [0]);
                onSelf = true;
                var call454 = callmethod(this, "canvas", [0]);
                var call455 = callmethod(call454,"offsetTop", [0]);
                var call457 = callmethod(var_ev,"clientY", [0]);
                var diff459 = callmethod(call457, "-", [1], call455);
                var quotient461 = callmethod(diff459, "/", [1], call452);
                var prod463 = callmethod(quotient461, "*", [1], call449);
                var var_y = prod463;
                lineNumber = 213;
                moduleName = "kitty";
                lineNumber = 209
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 217
                var if464 = var_done;
                lineNumber = 213
                var opresult467 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call470 = callmethod(this, "canvasWidth", [0]);
                var diff472 = callmethod(call470, "-", [1], new GraceNum(20));
                var opresult475 = callmethod(var_x, ">", [1], diff472);
                var opresult477 = callmethod(opresult475, "&&", [1], opresult467);
                if (Grace_isTrue(opresult477)) {
                  lineNumber = 214
                  var call478 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 215
                  onSelf = true;
                  var call479 = callmethod(this, "stop", [0]);
                  if464 = call479;
                }
                return if464;
              };
              var_mouseDownListener = block433;
              lineNumber = 218
              var string480 = new GraceString("mousedown");
              onSelf = true;
              var call481 = callmethod(this, "canvas", [0]);
              var call482 = callmethod(call481,"addEventListener", [2], string480, var_mouseDownListener);
              lineNumber = 228
              var block483 = Grace_allocObject();
              block483.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block483.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block483.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block483.methods["match"] = GraceBlock_match;
              block483.methods["prefix?"] = GraceBlock_lift;
              block483.receiver = this;
              block483.className = 'block<kitty:228>';
              block483.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 226
                var if484 = var_done;
                lineNumber = 223
                var call486 = callmethod(var_ev,"keyCode", [0]);
                var opresult488 = callmethod(call486, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult488)) {
                  lineNumber = 224
                  onSelf = true;
                  var call489 = callmethod(this, "stop", [0]);
                  if484 = call489;
                }
                lineNumber = 227
                lineNumber = 223
                lineNumber = 226
                var call490 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call491 = callmethod(this, "currentKeyDown:=", [1], call490);
                return call491;
              };
              var_keyDownListener = block483;
              lineNumber = 228
              var string492 = new GraceString("keydown");
              onSelf = true;
              var call493 = callmethod(this, "document", [0]);
              var call494 = callmethod(call493,"addEventListener", [2], string492, var_keyDownListener);
              lineNumber = 234
              var block495 = Grace_allocObject();
              block495.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block495.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block495.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block495.methods["match"] = GraceBlock_match;
              block495.methods["prefix?"] = GraceBlock_lift;
              block495.receiver = this;
              block495.className = 'block<kitty:234>';
              block495.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 233
                lineNumber = 226
                lineNumber = 233
                lineNumber = 232
                var call496 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call497 = callmethod(this, "currentKeyDown:=", [1], call496);
                return call497;
              };
              var_keyUpListener = block495;
              lineNumber = 234
              var string498 = new GraceString("keyup");
              onSelf = true;
              var call499 = callmethod(this, "document", [0]);
              var call500 = callmethod(call499,"addEventListener", [2], string498, var_keyUpListener);
              lineNumber = 236
              lineNumber = 226
              lineNumber = 236
              var string501 = new GraceString("canvas");
              var call502 = callmethod(var_dom,"document", [0]);
              var call503 = callmethod(call502,"createElement", [1], string501);
              onSelf = true;
              var call504 = callmethod(this, "backingCanvas:=", [1], call503);
              lineNumber = 238
              lineNumber = 236
              lineNumber = 237
              onSelf = true;
              var call505 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas", [0]);
              var call507 = callmethod(call506,"height:=", [1], call505);
              lineNumber = 239
              lineNumber = 236
              lineNumber = 238
              onSelf = true;
              var call508 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call509 = callmethod(this, "backingCanvas", [0]);
              var call510 = callmethod(call509,"width:=", [1], call508);
              lineNumber = 239
              lineNumber = 236
              lineNumber = 239
              var string511 = new GraceString("2d");
              onSelf = true;
              var call512 = callmethod(this, "backingCanvas", [0]);
              var call513 = callmethod(call512,"getContext", [1], string511);
              onSelf = true;
              var call514 = callmethod(this, "backingContext:=", [1], call513);
              lineNumber = 240
              lineNumber = 236
              lineNumber = 240
              var string515 = new GraceString("2d");
              onSelf = true;
              var call516 = callmethod(this, "canvas", [0]);
              var call517 = callmethod(call516,"getContext", [1], string515);
              onSelf = true;
              var call518 = callmethod(this, "mctx:=", [1], call517);
              lineNumber = 243
              var string519 = new GraceString("doggo.jpg");
              onSelf = true;
              var call520 = callmethod(this, "setBackground", [1], string519);
              lineNumber = 251
              lineNumber = 236
              lineNumber = 245
              var bool521 = new GraceBoolean(true)
              onSelf = true;
              var call522 = callmethod(this, "isInit:=", [1], bool521);
              return call522
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func417.paramCounts = [
            0,
          ];
          func417.variableArities = [
            false,
          ];
          obj415.methods["init"] = func417;
          func417.definitionLine = 192;
          func417.definitionModule = "kitty";
          var func523 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func523.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 236
              lineNumber = 256
              var bool524 = new GraceBoolean(true)
              onSelf = true;
              var call525 = callmethod(this, "isRunning:=", [1], bool524);
              lineNumber = 257
              var block526 = Grace_allocObject();
              block526.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block526.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block526.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block526.methods["match"] = GraceBlock_match;
              block526.methods["prefix?"] = GraceBlock_lift;
              block526.receiver = this;
              block526.className = 'block<kitty:257>';
              block526.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call527 = callmethod(this, "isRunning", [0]);
                return call527;
              };
              lineNumber = 261
              var block528 = Grace_allocObject();
              block528.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block528.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block528.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block528.methods["match"] = GraceBlock_match;
              block528.methods["prefix?"] = GraceBlock_lift;
              block528.receiver = this;
              block528.className = 'block<kitty:261>';
              block528.real = function(
              ) {
                sourceObject = this;
                lineNumber = 258
                onSelf = true;
                var call529 = callmethod(this, "update", [0]);
                return call529;
              };
              lineNumber = 257
              var call530 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block526, new GraceNum(10), block528);
              return call530
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func523.paramCounts = [
            0,
          ];
          func523.variableArities = [
            false,
          ];
          obj415.methods["start"] = func523;
          func523.definitionLine = 254;
          func523.definitionModule = "kitty";
          var func531 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func531.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 270
              lineNumber = 236
              lineNumber = 269
              onSelf = true;
              var call532 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call533 = callmethod(this, "mctx", [0]);
              var call534 = callmethod(call533,"fillStyle:=", [1], call532);
              lineNumber = 270
              onSelf = true;
              var call535 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call536 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call537 = callmethod(this, "mctx", [0]);
              var call538 = callmethod(call537,"fillRect", [4], new GraceNum(0), new GraceNum(0), call535, call536);
              lineNumber = 271
              onSelf = true;
              var call539 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call540 = callmethod(this, "mctx", [0]);
              var call541 = callmethod(call540,"drawImage", [3], call539, new GraceNum(0), new GraceNum(0));
              lineNumber = 272
              onSelf = true;
              var call542 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call544 = callmethod(this, "canvasWidth", [0]);
              var quotient546 = callmethod(call544, "/", [1], new GraceNum(2));
              onSelf = true;
              var call548 = callmethod(this, "canvasHeight", [0]);
              var quotient550 = callmethod(call548, "/", [1], new GraceNum(2));
              onSelf = true;
              var call551 = callmethod(this, "background", [0]);
              var call552 = callmethod(call551,"draw", [4], call542, quotient546, quotient550, new GraceNum(0));
              lineNumber = 275
              onSelf = true;
              var call553 = callmethod(this, "entities", [0]);
              lineNumber = 281
              var block554 = Grace_allocObject();
              block554.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block554.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block554.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block554.methods["match"] = GraceBlock_match;
              block554.methods["prefix?"] = GraceBlock_lift;
              block554.receiver = this;
              block554.className = 'block<kitty:281>';
              block554.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 276
                var call555 = callmethod(var_entity,"update", [0]);
                lineNumber = 277
                onSelf = true;
                var call556 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call558 = callmethod(this, "canvasWidth", [0]);
                var quotient560 = callmethod(call558, "/", [1], new GraceNum(2));
                onSelf = true;
                var call562 = callmethod(this, "canvasHeight", [0]);
                var quotient564 = callmethod(call562, "/", [1], new GraceNum(2));
                var call565 = callmethod(var_entity,"draw", [3], call556, quotient560, quotient564);
                return call565;
              };
              var call566 = callmethod(Grace_prelude,"for()do", [1, 1], call553, block554);
              return call566
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func531.paramCounts = [
            0,
          ];
          func531.variableArities = [
            false,
          ];
          obj415.methods["update"] = func531;
          func531.definitionLine = 264;
          func531.definitionModule = "kitty";
          var func567 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func567.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              var string568 = new GraceString("WORLD STOPPING...");
              var call569 = Grace_print(string568);
              lineNumber = 286
              lineNumber = 276
              lineNumber = 285
              var bool570 = new GraceBoolean(false)
              onSelf = true;
              var call571 = callmethod(this, "isRunning:=", [1], bool570);
              lineNumber = 286
              var string572 = new GraceString("mousedown");
              onSelf = true;
              var call573 = callmethod(this, "canvas", [0]);
              var call574 = callmethod(call573,"removeEventListener", [2], string572, var_mouseDownListener);
              lineNumber = 287
              var string575 = new GraceString("keydown");
              onSelf = true;
              var call576 = callmethod(this, "document", [0]);
              var call577 = callmethod(call576,"removeEventListener", [2], string575, var_keyDownListener);
              lineNumber = 288
              var string578 = new GraceString("keyup");
              onSelf = true;
              var call579 = callmethod(this, "document", [0]);
              var call580 = callmethod(call579,"removeEventListener", [2], string578, var_keyUpListener);
              return call580
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func567.paramCounts = [
            0,
          ];
          func567.variableArities = [
            false,
          ];
          obj415.methods["stop"] = func567;
          func567.definitionLine = 283;
          func567.definitionModule = "kitty";
          var func581 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func581.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 293
              lineNumber = 292
              onSelf = true;
              var call582 = callmethod(this, "currentKeyDown", [0]);
              var opresult585 = callmethod(var_key, "==", [1], call582);
              return opresult585
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func581.paramCounts = [
            1,
          ];
          func581.variableArities = [
            false,
          ];
          obj415.methods["isKeyDown"] = func581;
          func581.definitionLine = 291;
          func581.definitionModule = "kitty";
          var func586 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func586.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 296
              lineNumber = 276
              lineNumber = 296
              onSelf = true;
              var call587 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call588 = callmethod(this, "canvasHeight", [0]);
              var call589 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call590 = callmethod(call589, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call591 = callmethod(call590, "Image", [3], var_background__39__, call587, call588);
              onSelf = true;
              var call592 = callmethod(this, "background:=", [1], call591);
              return call592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func586.paramCounts = [
            1,
          ];
          func586.variableArities = [
            false,
          ];
          obj415.methods["setBackground"] = func586;
          func586.definitionLine = 295;
          func586.definitionModule = "kitty";
          var func593 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              onSelf = true;
              var call594 = callmethod(this, "entities", [0]);
              var call595 = callmethod(call594,"push", [1], var_e);
              return call595
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func593.paramTypes = [];
          func593.paramTypes.push([]);
          func593.paramCounts = [
            1,
          ];
          func593.variableArities = [
            false,
          ];
          obj415.methods["addEntity"] = func593;
          func593.definitionLine = 299;
          func593.definitionModule = "kitty";
          var func596 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 305
              lineNumber = 304
              onSelf = true;
              var call597 = callmethod(this, "mctx", [0]);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func596.paramCounts = [
            0,
          ];
          func596.variableArities = [
            false,
          ];
          obj415.methods["getContext"] = func596;
          func596.definitionLine = 303;
          func596.definitionModule = "kitty";
          sourceObject = obj415;
          obj415.data["background"] = undefined;
          var reader_kitty_background_598 = function() {
            return this.data["background"];
          }
          obj415.methods["background"] = reader_kitty_background_598;
          obj415.data["background"] = undefined;
          var writer_kitty_background_598 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj415.methods["background:="] = writer_kitty_background_598;
          reader_kitty_background_598.confidential = true;
          writer_kitty_background_598.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 169
          var string599 = new GraceString("black");
          obj415.data["backgroundColour"] = string599;
          var reader_kitty_backgroundColour_600 = function() {
            return this.data["backgroundColour"];
          }
          obj415.methods["backgroundColour"] = reader_kitty_backgroundColour_600;
          obj415.data["backgroundColour"] = string599;
          var writer_kitty_backgroundColour_600 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj415.methods["backgroundColour:="] = writer_kitty_backgroundColour_600;
          reader_kitty_backgroundColour_600.confidential = true;
          writer_kitty_backgroundColour_600.confidential = true;
          lineNumber = 171;
          moduleName = "kitty";
          lineNumber = 169
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string599)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["document"] = undefined;
          var reader_kitty_document_601 = function() {
            return this.data["document"];
          }
          obj415.methods["document"] = reader_kitty_document_601;
          obj415.data["document"] = undefined;
          var writer_kitty_document_601 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj415.methods["document:="] = writer_kitty_document_601;
          reader_kitty_document_601.confidential = true;
          writer_kitty_document_601.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_602 = function() {
            return this.data["backingCanvas"];
          }
          obj415.methods["backingCanvas"] = reader_kitty_backingCanvas_602;
          obj415.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_602 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj415.methods["backingCanvas:="] = writer_kitty_backingCanvas_602;
          reader_kitty_backingCanvas_602.confidential = true;
          writer_kitty_backingCanvas_602.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["backingContext"] = undefined;
          var reader_kitty_backingContext_603 = function() {
            return this.data["backingContext"];
          }
          obj415.methods["backingContext"] = reader_kitty_backingContext_603;
          obj415.data["backingContext"] = undefined;
          var writer_kitty_backingContext_603 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj415.methods["backingContext:="] = writer_kitty_backingContext_603;
          reader_kitty_backingContext_603.confidential = true;
          writer_kitty_backingContext_603.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["canvas"] = undefined;
          var reader_kitty_canvas_604 = function() {
            return this.data["canvas"];
          }
          obj415.methods["canvas"] = reader_kitty_canvas_604;
          obj415.data["canvas"] = undefined;
          var writer_kitty_canvas_604 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj415.methods["canvas:="] = writer_kitty_canvas_604;
          reader_kitty_canvas_604.confidential = true;
          writer_kitty_canvas_604.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_605 = function() {
            return this.data["canvasWidth"];
          }
          obj415.methods["canvasWidth"] = reader_kitty_canvasWidth_605;
          obj415.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_605 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj415.methods["canvasWidth:="] = writer_kitty_canvasWidth_605;
          reader_kitty_canvasWidth_605.confidential = true;
          writer_kitty_canvasWidth_605.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_606 = function() {
            return this.data["canvasHeight"];
          }
          obj415.methods["canvasHeight"] = reader_kitty_canvasHeight_606;
          obj415.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_606 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj415.methods["canvasHeight:="] = writer_kitty_canvasHeight_606;
          reader_kitty_canvasHeight_606.confidential = true;
          writer_kitty_canvasHeight_606.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 180
          var call607 = callmethod(var_collections,"list", [0]);
          var call608 = callmethod(call607,"new", [0]);
          obj415.data["entities"] = call608;
          var reader_kitty_entities_609 = function() {
            return this.data["entities"];
          }
          obj415.methods["entities"] = reader_kitty_entities_609;
          obj415.data["entities"] = call608;
          var writer_kitty_entities_609 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj415.methods["entities:="] = writer_kitty_entities_609;
          reader_kitty_entities_609.confidential = true;
          writer_kitty_entities_609.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call608)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 182
          var bool610 = new GraceBoolean(false)
          obj415.data["isInit"] = bool610;
          var reader_kitty_isInit_611 = function() {
            return this.data["isInit"];
          }
          obj415.methods["isInit"] = reader_kitty_isInit_611;
          obj415.data["isInit"] = bool610;
          var writer_kitty_isInit_611 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj415.methods["isInit:="] = writer_kitty_isInit_611;
          reader_kitty_isInit_611.confidential = true;
          writer_kitty_isInit_611.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 183
          var bool612 = new GraceBoolean(false)
          obj415.data["isRunning"] = bool612;
          var reader_kitty_isRunning_613 = function() {
            return this.data["isRunning"];
          }
          obj415.methods["isRunning"] = reader_kitty_isRunning_613;
          obj415.data["isRunning"] = bool612;
          var writer_kitty_isRunning_613 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj415.methods["isRunning:="] = writer_kitty_isRunning_613;
          reader_kitty_isRunning_613.confidential = true;
          writer_kitty_isRunning_613.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["mctx"] = undefined;
          var reader_kitty_mctx_614 = function() {
            return this.data["mctx"];
          }
          obj415.methods["mctx"] = reader_kitty_mctx_614;
          obj415.data["mctx"] = undefined;
          var writer_kitty_mctx_614 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj415.methods["mctx:="] = writer_kitty_mctx_614;
          reader_kitty_mctx_614.confidential = true;
          writer_kitty_mctx_614.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 189
          lineNumber = 187
          var call615 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj415.data["currentKeyDown"] = call615;
          var reader_kitty_currentKeyDown_616 = function() {
            return this.data["currentKeyDown"];
          }
          obj415.methods["currentKeyDown"] = reader_kitty_currentKeyDown_616;
          obj415.data["currentKeyDown"] = call615;
          var writer_kitty_currentKeyDown_616 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj415.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_616;
          reader_kitty_currentKeyDown_616.confidential = true;
          writer_kitty_currentKeyDown_616.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 189
          onSelf = true;
          var call617 = callmethod(this, "init", [0]);
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          sourceObject = obj415;
          superDepth = origSuperDepth;
        }
        obj_init_415.apply(obj415, []);
        return obj415
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func414.paramCounts = [
      0,
    ];
    func414.variableArities = [
      false,
    ];
    obj412.methods["new"] = func414;
    func414.definitionLine = 164;
    func414.definitionModule = "kitty";
    var func618 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj619 = Grace_allocObject();
        obj619.definitionModule = "kitty";
        obj619.definitionLine = 164;
        var inho619 = inheritingObject;
        while (inho619.superobj) inho619 = inho619.superobj;
        inho619.superobj = obj619;
        obj619.data = inheritingObject.data;
        obj619.outer = this;
        var reader_kitty_outer_620 = function() {
          return this.outer;
        }
        obj619.methods["outer"] = reader_kitty_outer_620;
        function obj_init_619() {
          var origSuperDepth = superDepth;
          superDepth = obj619;
          obj619.annotations = [];
          var func621 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func621.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              var if622 = var_done;
              lineNumber = 196
              onSelf = true;
              var call623 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call623)) {
                lineNumber = 198
                lineNumber = 197
                var bool624 = new GraceBoolean(false)
                return bool624
              }
              lineNumber = 201
              lineNumber = 180
              lineNumber = 200
              var call625 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call626 = callmethod(this, "document:=", [1], call625);
              lineNumber = 201
              lineNumber = 200
              lineNumber = 201
              var string627 = new GraceString("standard-canvas");
              onSelf = true;
              var call628 = callmethod(this, "document", [0]);
              var call629 = callmethod(call628,"getElementById", [1], string627);
              onSelf = true;
              var call630 = callmethod(this, "canvas:=", [1], call629);
              lineNumber = 203
              lineNumber = 200
              lineNumber = 202
              onSelf = true;
              var call631 = callmethod(this, "canvas", [0]);
              var call632 = callmethod(call631,"width", [0]);
              onSelf = true;
              var call633 = callmethod(this, "canvasWidth:=", [1], call632);
              lineNumber = 206
              lineNumber = 202
              lineNumber = 203
              onSelf = true;
              var call634 = callmethod(this, "canvas", [0]);
              var call635 = callmethod(call634,"height", [0]);
              onSelf = true;
              var call636 = callmethod(this, "canvasHeight:=", [1], call635);
              lineNumber = 218
              var block637 = Grace_allocObject();
              block637.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block637.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block637.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block637.methods["match"] = GraceBlock_match;
              block637.methods["prefix?"] = GraceBlock_lift;
              block637.receiver = this;
              block637.className = 'block<kitty:218>';
              block637.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 209
                lineNumber = 208
                onSelf = true;
                var call638 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call640 = callmethod(this, "canvas", [0]);
                var call641 = callmethod(call640,"offsetWidth", [0]);
                onSelf = true;
                var call643 = callmethod(this, "canvas", [0]);
                var call644 = callmethod(call643,"offsetLeft", [0]);
                var call646 = callmethod(var_ev,"clientX", [0]);
                var diff648 = callmethod(call646, "-", [1], call644);
                var quotient650 = callmethod(diff648, "/", [1], call641);
                var prod652 = callmethod(quotient650, "*", [1], call638);
                var var_x = prod652;
                lineNumber = 209;
                moduleName = "kitty";
                lineNumber = 208
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 213
                lineNumber = 209
                onSelf = true;
                var call653 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call655 = callmethod(this, "canvas", [0]);
                var call656 = callmethod(call655,"offsetHeight", [0]);
                onSelf = true;
                var call658 = callmethod(this, "canvas", [0]);
                var call659 = callmethod(call658,"offsetTop", [0]);
                var call661 = callmethod(var_ev,"clientY", [0]);
                var diff663 = callmethod(call661, "-", [1], call659);
                var quotient665 = callmethod(diff663, "/", [1], call656);
                var prod667 = callmethod(quotient665, "*", [1], call653);
                var var_y = prod667;
                lineNumber = 213;
                moduleName = "kitty";
                lineNumber = 209
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 217
                var if668 = var_done;
                lineNumber = 213
                var opresult671 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call674 = callmethod(this, "canvasWidth", [0]);
                var diff676 = callmethod(call674, "-", [1], new GraceNum(20));
                var opresult679 = callmethod(var_x, ">", [1], diff676);
                var opresult681 = callmethod(opresult679, "&&", [1], opresult671);
                if (Grace_isTrue(opresult681)) {
                  lineNumber = 214
                  var call682 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 215
                  onSelf = true;
                  var call683 = callmethod(this, "stop", [0]);
                  if668 = call683;
                }
                return if668;
              };
              var_mouseDownListener = block637;
              lineNumber = 218
              var string684 = new GraceString("mousedown");
              onSelf = true;
              var call685 = callmethod(this, "canvas", [0]);
              var call686 = callmethod(call685,"addEventListener", [2], string684, var_mouseDownListener);
              lineNumber = 228
              var block687 = Grace_allocObject();
              block687.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block687.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block687.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block687.methods["match"] = GraceBlock_match;
              block687.methods["prefix?"] = GraceBlock_lift;
              block687.receiver = this;
              block687.className = 'block<kitty:228>';
              block687.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 226
                var if688 = var_done;
                lineNumber = 223
                var call690 = callmethod(var_ev,"keyCode", [0]);
                var opresult692 = callmethod(call690, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult692)) {
                  lineNumber = 224
                  onSelf = true;
                  var call693 = callmethod(this, "stop", [0]);
                  if688 = call693;
                }
                lineNumber = 227
                lineNumber = 223
                lineNumber = 226
                var call694 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call695 = callmethod(this, "currentKeyDown:=", [1], call694);
                return call695;
              };
              var_keyDownListener = block687;
              lineNumber = 228
              var string696 = new GraceString("keydown");
              onSelf = true;
              var call697 = callmethod(this, "document", [0]);
              var call698 = callmethod(call697,"addEventListener", [2], string696, var_keyDownListener);
              lineNumber = 234
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
              block699.className = 'block<kitty:234>';
              block699.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 233
                lineNumber = 226
                lineNumber = 233
                lineNumber = 232
                var call700 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call701 = callmethod(this, "currentKeyDown:=", [1], call700);
                return call701;
              };
              var_keyUpListener = block699;
              lineNumber = 234
              var string702 = new GraceString("keyup");
              onSelf = true;
              var call703 = callmethod(this, "document", [0]);
              var call704 = callmethod(call703,"addEventListener", [2], string702, var_keyUpListener);
              lineNumber = 236
              lineNumber = 226
              lineNumber = 236
              var string705 = new GraceString("canvas");
              var call706 = callmethod(var_dom,"document", [0]);
              var call707 = callmethod(call706,"createElement", [1], string705);
              onSelf = true;
              var call708 = callmethod(this, "backingCanvas:=", [1], call707);
              lineNumber = 238
              lineNumber = 236
              lineNumber = 237
              onSelf = true;
              var call709 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call710 = callmethod(this, "backingCanvas", [0]);
              var call711 = callmethod(call710,"height:=", [1], call709);
              lineNumber = 239
              lineNumber = 236
              lineNumber = 238
              onSelf = true;
              var call712 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call713 = callmethod(this, "backingCanvas", [0]);
              var call714 = callmethod(call713,"width:=", [1], call712);
              lineNumber = 239
              lineNumber = 236
              lineNumber = 239
              var string715 = new GraceString("2d");
              onSelf = true;
              var call716 = callmethod(this, "backingCanvas", [0]);
              var call717 = callmethod(call716,"getContext", [1], string715);
              onSelf = true;
              var call718 = callmethod(this, "backingContext:=", [1], call717);
              lineNumber = 240
              lineNumber = 236
              lineNumber = 240
              var string719 = new GraceString("2d");
              onSelf = true;
              var call720 = callmethod(this, "canvas", [0]);
              var call721 = callmethod(call720,"getContext", [1], string719);
              onSelf = true;
              var call722 = callmethod(this, "mctx:=", [1], call721);
              lineNumber = 243
              var string723 = new GraceString("doggo.jpg");
              onSelf = true;
              var call724 = callmethod(this, "setBackground", [1], string723);
              lineNumber = 251
              lineNumber = 236
              lineNumber = 245
              var bool725 = new GraceBoolean(true)
              onSelf = true;
              var call726 = callmethod(this, "isInit:=", [1], bool725);
              return call726
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func621.paramCounts = [
            0,
          ];
          func621.variableArities = [
            false,
          ];
          obj619.methods["init"] = func621;
          func621.definitionLine = 192;
          func621.definitionModule = "kitty";
          var func727 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func727.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 236
              lineNumber = 256
              var bool728 = new GraceBoolean(true)
              onSelf = true;
              var call729 = callmethod(this, "isRunning:=", [1], bool728);
              lineNumber = 257
              var block730 = Grace_allocObject();
              block730.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block730.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block730.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block730.methods["match"] = GraceBlock_match;
              block730.methods["prefix?"] = GraceBlock_lift;
              block730.receiver = this;
              block730.className = 'block<kitty:257>';
              block730.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call731 = callmethod(this, "isRunning", [0]);
                return call731;
              };
              lineNumber = 261
              var block732 = Grace_allocObject();
              block732.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block732.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block732.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block732.methods["match"] = GraceBlock_match;
              block732.methods["prefix?"] = GraceBlock_lift;
              block732.receiver = this;
              block732.className = 'block<kitty:261>';
              block732.real = function(
              ) {
                sourceObject = this;
                lineNumber = 258
                onSelf = true;
                var call733 = callmethod(this, "update", [0]);
                return call733;
              };
              lineNumber = 257
              var call734 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block730, new GraceNum(10), block732);
              return call734
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func727.paramCounts = [
            0,
          ];
          func727.variableArities = [
            false,
          ];
          obj619.methods["start"] = func727;
          func727.definitionLine = 254;
          func727.definitionModule = "kitty";
          var func735 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func735.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 270
              lineNumber = 236
              lineNumber = 269
              onSelf = true;
              var call736 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call737 = callmethod(this, "mctx", [0]);
              var call738 = callmethod(call737,"fillStyle:=", [1], call736);
              lineNumber = 270
              onSelf = true;
              var call739 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call740 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call741 = callmethod(this, "mctx", [0]);
              var call742 = callmethod(call741,"fillRect", [4], new GraceNum(0), new GraceNum(0), call739, call740);
              lineNumber = 271
              onSelf = true;
              var call743 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call744 = callmethod(this, "mctx", [0]);
              var call745 = callmethod(call744,"drawImage", [3], call743, new GraceNum(0), new GraceNum(0));
              lineNumber = 272
              onSelf = true;
              var call746 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call748 = callmethod(this, "canvasWidth", [0]);
              var quotient750 = callmethod(call748, "/", [1], new GraceNum(2));
              onSelf = true;
              var call752 = callmethod(this, "canvasHeight", [0]);
              var quotient754 = callmethod(call752, "/", [1], new GraceNum(2));
              onSelf = true;
              var call755 = callmethod(this, "background", [0]);
              var call756 = callmethod(call755,"draw", [4], call746, quotient750, quotient754, new GraceNum(0));
              lineNumber = 275
              onSelf = true;
              var call757 = callmethod(this, "entities", [0]);
              lineNumber = 281
              var block758 = Grace_allocObject();
              block758.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block758.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block758.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block758.methods["match"] = GraceBlock_match;
              block758.methods["prefix?"] = GraceBlock_lift;
              block758.receiver = this;
              block758.className = 'block<kitty:281>';
              block758.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 276
                var call759 = callmethod(var_entity,"update", [0]);
                lineNumber = 277
                onSelf = true;
                var call760 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call762 = callmethod(this, "canvasWidth", [0]);
                var quotient764 = callmethod(call762, "/", [1], new GraceNum(2));
                onSelf = true;
                var call766 = callmethod(this, "canvasHeight", [0]);
                var quotient768 = callmethod(call766, "/", [1], new GraceNum(2));
                var call769 = callmethod(var_entity,"draw", [3], call760, quotient764, quotient768);
                return call769;
              };
              var call770 = callmethod(Grace_prelude,"for()do", [1, 1], call757, block758);
              return call770
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func735.paramCounts = [
            0,
          ];
          func735.variableArities = [
            false,
          ];
          obj619.methods["update"] = func735;
          func735.definitionLine = 264;
          func735.definitionModule = "kitty";
          var func771 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func771.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              var string772 = new GraceString("WORLD STOPPING...");
              var call773 = Grace_print(string772);
              lineNumber = 286
              lineNumber = 276
              lineNumber = 285
              var bool774 = new GraceBoolean(false)
              onSelf = true;
              var call775 = callmethod(this, "isRunning:=", [1], bool774);
              lineNumber = 286
              var string776 = new GraceString("mousedown");
              onSelf = true;
              var call777 = callmethod(this, "canvas", [0]);
              var call778 = callmethod(call777,"removeEventListener", [2], string776, var_mouseDownListener);
              lineNumber = 287
              var string779 = new GraceString("keydown");
              onSelf = true;
              var call780 = callmethod(this, "document", [0]);
              var call781 = callmethod(call780,"removeEventListener", [2], string779, var_keyDownListener);
              lineNumber = 288
              var string782 = new GraceString("keyup");
              onSelf = true;
              var call783 = callmethod(this, "document", [0]);
              var call784 = callmethod(call783,"removeEventListener", [2], string782, var_keyUpListener);
              return call784
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func771.paramCounts = [
            0,
          ];
          func771.variableArities = [
            false,
          ];
          obj619.methods["stop"] = func771;
          func771.definitionLine = 283;
          func771.definitionModule = "kitty";
          var func785 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func785.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 293
              lineNumber = 292
              onSelf = true;
              var call786 = callmethod(this, "currentKeyDown", [0]);
              var opresult789 = callmethod(var_key, "==", [1], call786);
              return opresult789
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func785.paramCounts = [
            1,
          ];
          func785.variableArities = [
            false,
          ];
          obj619.methods["isKeyDown"] = func785;
          func785.definitionLine = 291;
          func785.definitionModule = "kitty";
          var func790 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func790.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 296
              lineNumber = 276
              lineNumber = 296
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
              var call795 = callmethod(call794, "Image", [3], var_background__39__, call791, call792);
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
          obj619.methods["setBackground"] = func790;
          func790.definitionLine = 295;
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
              lineNumber = 300
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
          func797.paramTypes = [];
          func797.paramTypes.push([]);
          func797.paramCounts = [
            1,
          ];
          func797.variableArities = [
            false,
          ];
          obj619.methods["addEntity"] = func797;
          func797.definitionLine = 299;
          func797.definitionModule = "kitty";
          var func800 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func800.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 305
              lineNumber = 304
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
          obj619.methods["getContext"] = func800;
          func800.definitionLine = 303;
          func800.definitionModule = "kitty";
          sourceObject = obj619;
          obj619.data["background"] = undefined;
          var reader_kitty_background_802 = function() {
            return this.data["background"];
          }
          obj619.methods["background"] = reader_kitty_background_802;
          obj619.data["background"] = undefined;
          var writer_kitty_background_802 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj619.methods["background:="] = writer_kitty_background_802;
          reader_kitty_background_802.confidential = true;
          writer_kitty_background_802.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 169
          var string803 = new GraceString("black");
          obj619.data["backgroundColour"] = string803;
          var reader_kitty_backgroundColour_804 = function() {
            return this.data["backgroundColour"];
          }
          obj619.methods["backgroundColour"] = reader_kitty_backgroundColour_804;
          obj619.data["backgroundColour"] = string803;
          var writer_kitty_backgroundColour_804 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj619.methods["backgroundColour:="] = writer_kitty_backgroundColour_804;
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
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["document"] = undefined;
          var reader_kitty_document_805 = function() {
            return this.data["document"];
          }
          obj619.methods["document"] = reader_kitty_document_805;
          obj619.data["document"] = undefined;
          var writer_kitty_document_805 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj619.methods["document:="] = writer_kitty_document_805;
          reader_kitty_document_805.confidential = true;
          writer_kitty_document_805.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_806 = function() {
            return this.data["backingCanvas"];
          }
          obj619.methods["backingCanvas"] = reader_kitty_backingCanvas_806;
          obj619.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_806 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj619.methods["backingCanvas:="] = writer_kitty_backingCanvas_806;
          reader_kitty_backingCanvas_806.confidential = true;
          writer_kitty_backingCanvas_806.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["backingContext"] = undefined;
          var reader_kitty_backingContext_807 = function() {
            return this.data["backingContext"];
          }
          obj619.methods["backingContext"] = reader_kitty_backingContext_807;
          obj619.data["backingContext"] = undefined;
          var writer_kitty_backingContext_807 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj619.methods["backingContext:="] = writer_kitty_backingContext_807;
          reader_kitty_backingContext_807.confidential = true;
          writer_kitty_backingContext_807.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["canvas"] = undefined;
          var reader_kitty_canvas_808 = function() {
            return this.data["canvas"];
          }
          obj619.methods["canvas"] = reader_kitty_canvas_808;
          obj619.data["canvas"] = undefined;
          var writer_kitty_canvas_808 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj619.methods["canvas:="] = writer_kitty_canvas_808;
          reader_kitty_canvas_808.confidential = true;
          writer_kitty_canvas_808.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_809 = function() {
            return this.data["canvasWidth"];
          }
          obj619.methods["canvasWidth"] = reader_kitty_canvasWidth_809;
          obj619.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_809 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj619.methods["canvasWidth:="] = writer_kitty_canvasWidth_809;
          reader_kitty_canvasWidth_809.confidential = true;
          writer_kitty_canvasWidth_809.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_810 = function() {
            return this.data["canvasHeight"];
          }
          obj619.methods["canvasHeight"] = reader_kitty_canvasHeight_810;
          obj619.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_810 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj619.methods["canvasHeight:="] = writer_kitty_canvasHeight_810;
          reader_kitty_canvasHeight_810.confidential = true;
          writer_kitty_canvasHeight_810.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 180
          var call811 = callmethod(var_collections,"list", [0]);
          var call812 = callmethod(call811,"new", [0]);
          obj619.data["entities"] = call812;
          var reader_kitty_entities_813 = function() {
            return this.data["entities"];
          }
          obj619.methods["entities"] = reader_kitty_entities_813;
          obj619.data["entities"] = call812;
          var writer_kitty_entities_813 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj619.methods["entities:="] = writer_kitty_entities_813;
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
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 182
          var bool814 = new GraceBoolean(false)
          obj619.data["isInit"] = bool814;
          var reader_kitty_isInit_815 = function() {
            return this.data["isInit"];
          }
          obj619.methods["isInit"] = reader_kitty_isInit_815;
          obj619.data["isInit"] = bool814;
          var writer_kitty_isInit_815 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj619.methods["isInit:="] = writer_kitty_isInit_815;
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
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 183
          var bool816 = new GraceBoolean(false)
          obj619.data["isRunning"] = bool816;
          var reader_kitty_isRunning_817 = function() {
            return this.data["isRunning"];
          }
          obj619.methods["isRunning"] = reader_kitty_isRunning_817;
          obj619.data["isRunning"] = bool816;
          var writer_kitty_isRunning_817 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj619.methods["isRunning:="] = writer_kitty_isRunning_817;
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
          obj619.mutable = true;
          sourceObject = obj619;
          obj619.data["mctx"] = undefined;
          var reader_kitty_mctx_818 = function() {
            return this.data["mctx"];
          }
          obj619.methods["mctx"] = reader_kitty_mctx_818;
          obj619.data["mctx"] = undefined;
          var writer_kitty_mctx_818 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj619.methods["mctx:="] = writer_kitty_mctx_818;
          reader_kitty_mctx_818.confidential = true;
          writer_kitty_mctx_818.confidential = true;
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 189
          lineNumber = 187
          var call819 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj619.data["currentKeyDown"] = call819;
          var reader_kitty_currentKeyDown_820 = function() {
            return this.data["currentKeyDown"];
          }
          obj619.methods["currentKeyDown"] = reader_kitty_currentKeyDown_820;
          obj619.data["currentKeyDown"] = call819;
          var writer_kitty_currentKeyDown_820 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj619.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_820;
          reader_kitty_currentKeyDown_820.confidential = true;
          writer_kitty_currentKeyDown_820.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call819)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj619.mutable = true;
          sourceObject = obj619;
          lineNumber = 189
          onSelf = true;
          var call821 = callmethod(this, "init", [0]);
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          sourceObject = obj619;
          superDepth = origSuperDepth;
        }
        obj_init_619.apply(inheritingObject, []);
        return obj619
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj412.methods["new()object"] = func618;
    var func822 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 164
        var string823 = new GraceString("class KittyWorld");
        return string823
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func822.paramCounts = [
    ];
    func822.variableArities = [
    ];
    obj412.methods["asDebugString"] = func822;
    func822.definitionLine = 164;
    func822.definitionModule = "kitty";
    sourceObject = obj412;
    sourceObject = obj412;
    superDepth = origSuperDepth;
  }
  obj_init_412.apply(obj412, []);
  var var_KittyWorld = obj412;
  lineNumber = 309
  lineNumber = 318
  lineNumber = 333
  lineNumber = 338
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nmethods-of:KittyWorld.new:\n stop\n isInit:=\n addEntity\n document:=\n backingContext\n canvasWidth\n document\n backgroundColour:=\n update\n getContext\n start\n canvas:=\n isRunning:=\n background:=\n isRunning\n backingContext:=\n currentKeyDown\n backgroundColour\n setBackground\n isInit\n mctx\n canvasWidth:=\n isKeyDown\n entities:=\n backingCanvas:=\n entities\n backingCanvas\n canvasHeight:=\n init\n canvasHeight\n mctx:=\n currentKeyDown:=\n canvas\n background\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image\n Entity\n World\nfresh:World:\n addEntity\n isInit:=\n stop\n document:=\n isRunning:=\n mctx\n document\n backingContext:=\n update\n getContext\n start\n canvas:=\n backgroundColour\n background:=\n isKeyDown\n backgroundColour:=\n currentKeyDown\n backingContext\n setBackground\n isInit\n canvasWidth\n canvasWidth:=\n isRunning\n entities:=\n backingCanvas:=\n entities\n backingCanvas\n canvasHeight:=\n init\n canvasHeight\n mctx:=\n currentKeyDown:=\n canvas\n background\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\n onDestroy\n move\n turn\n setAction\n update\n strafe\n setImageMaster\n setLocation\n getRotation\n start\n action:=\n getX\n getY\n image:=\n action\n posX:=\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\n onDestroy\n move\n turn\n setImageMaster\n update\n strafe\n setAction\n setLocation\n getRotation\n start\n action:=\n getX\n getY\n image:=\n action\n posX:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n";
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
    "class KittyImage.new(url', height', width') {",
    "    ",
    "    // print \"CREATING NEW IMAGE: {url'}...\"",
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
    "method Image(url', x', y') {",
    "    object {",
    "        inherits KittyImage.new(url', x', y')",
    "    }",
    "}",
    "",
    "// Represents an object in the game world",
    "class KittyEntity.new(x', y') {",
    "    ",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
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
    "        setImage(\"realyee.png\")",
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
    "    method setImage(image') {",
    "        image := Image(image', 64, 64)",
    "    }",
    "",
    "    method setImageMaster(image') {",
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
    "    // print \"ENTITY CREATED\"",
    "} ",
    "",
    "method Entity(x', y') {",
    "    object {",
    "        inherits KittyEntity.new(x', y')",
    "    }",
    "}",
    "",
    "// Represents the game world itself",
    "class KittyWorld.new() {",
    "",
    "    // print \"CREATING NEW WORLD...\"",
    "    ",
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
    "    method setBackground(background') {",
    "        background := Image(background', canvasWidth, canvasHeight)",
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
  ];
}
