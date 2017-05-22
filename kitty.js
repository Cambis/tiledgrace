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
        var call3 = callmethod(var_KittyImage,"new()width()height()object", [1, 1, 1, 1], var_url, var_width__39__, var_height__39__, this);
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
        var call7 = callmethod(var_KittyImage,"new()width()height()object", [1, 1, 1, 1], var_url, var_width__39__, var_height__39__, this);
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
  lineNumber = 158
  var func8 = function(argcv) {
    var curarg = 1;
    var var_tag = arguments[curarg];
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
      lineNumber = 159
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 159;
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
        lineNumber = 160
        onSelf = true;
        var call11 = callmethod(this, "tag", [0]);
        var call12 = callmethod(var_KittyEntity,"new()x()y()object", [1, 1, 1, 1], call11, var_x__39__, var_y__39__, this);
        obj9.superobj = call12;
        obj9._value = call12._value;
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
  func8.definitionLine = 158;
  func8.definitionModule = "kitty";
  var func13 = function(argcv) {
    var curarg = 1;
    var var_tag = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj14 = Grace_allocObject();
      obj14.definitionModule = "kitty";
      obj14.definitionLine = 159;
      var inho14 = inheritingObject;
      while (inho14.superobj) inho14 = inho14.superobj;
      inho14.superobj = obj14;
      obj14.data = inheritingObject.data;
      obj14.outer = this;
      var reader_kitty_outer_15 = function() {
        return this.outer;
      }
      obj14.methods["outer"] = reader_kitty_outer_15;
      function obj_init_14() {
        var origSuperDepth = superDepth;
        superDepth = obj14;
        obj14.annotations = [];
        sourceObject = obj14;
        onSelf = true;
        var call16 = callmethod(this, "tag", [0]);
        var call17 = callmethod(var_KittyEntity,"new()x()y()object", [1, 1, 1, 1], call16, var_x__39__, var_y__39__, this);
        obj14.superobj = call17;
        obj14._value = call17._value;
        superDepth = origSuperDepth;
      }
      obj_init_14.apply(inheritingObject, []);
      return obj14
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()x()y()object"] = func13;
  lineNumber = 310
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 311
      var obj19 = Grace_allocObject();
      obj19.definitionModule = "kitty";
      obj19.definitionLine = 311;
      obj19.outer = this;
      var reader_kitty_outer_20 = function() {
        return this.outer;
      }
      obj19.methods["outer"] = reader_kitty_outer_20;
      function obj_init_19() {
        var origSuperDepth = superDepth;
        superDepth = obj19;
        obj19.annotations = [];
        sourceObject = obj19;
        lineNumber = 312
        var call21 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj19.superobj = call21;
        obj19._value = call21._value;
        superDepth = origSuperDepth;
      }
      obj_init_19.apply(obj19, []);
      return obj19
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func18.paramCounts = [
    0,
  ];
  func18.variableArities = [
    false,
  ];
  this.methods["World"] = func18;
  func18.definitionLine = 310;
  func18.definitionModule = "kitty";
  var func22 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 311;
      var inho23 = inheritingObject;
      while (inho23.superobj) inho23 = inho23.superobj;
      inho23.superobj = obj23;
      obj23.data = inheritingObject.data;
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
        var call25 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj23.superobj = call25;
        obj23._value = call25._value;
        superDepth = origSuperDepth;
      }
      obj_init_23.apply(inheritingObject, []);
      return obj23
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func22;
  lineNumber = 319
  var func26 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 321
      var string27 = new GraceString("CHECKING...");
      var call28 = Grace_print(string27);
      lineNumber = 328
      var if29 = var_done;
      lineNumber = 323
      var call30 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call30)) {
        lineNumber = 324
        var string31 = new GraceString("NO WORLD!!");
        var call32 = Grace_print(string31);
        lineNumber = 326
        return var_done
      }
      lineNumber = 328
      var string33 = new GraceString("STARTING...");
      var call34 = Grace_print(string33);
      lineNumber = 331
      var call35 = callmethod(var_m__95__world,"start", [0]);
      return call35
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func26.paramCounts = [
    0,
  ];
  func26.variableArities = [
    false,
  ];
  this.methods["start"] = func26;
  func26.definitionLine = 319;
  func26.definitionModule = "kitty";
  lineNumber = 334
  var func36 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 336
      lineNumber = 335
      var_m__95__world = var_world__39__;
      lineNumber = 337
      lineNumber = 336
      var bool37 = new GraceBoolean(true)
      var_worldSet = bool37;
      return bool37
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func36.paramTypes = [];
  func36.paramTypes.push([]);
  func36.paramCounts = [
    1,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func36;
  func36.definitionLine = 334;
  func36.definitionModule = "kitty";
  lineNumber = 339
  var func38 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func38.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 340
      onSelf = true;
      var call39 = callmethod(this, "start", [0]);
      return call39
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func38.paramCounts = [
    1,
  ];
  func38.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func38;
  func38.definitionLine = 339;
  func38.definitionModule = "kitty";
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
  var call40 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call40;
  this.data = call40.data;
  this._value = call40._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 331
  var func41 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func41.paramCounts[0])
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
  func41.paramCounts = [
    0,
  ];
  func41.variableArities = [
    false,
  ];
  this.methods["m_world"] = func41;
  func41.definitionLine = 331;
  func41.definitionModule = "kitty";
  lineNumber = 331
  var func42 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func42.paramCounts[0])
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
  func42.paramCounts = [
    1,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func42;
  func42.definitionLine = 331;
  func42.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool43 = new GraceBoolean(false)
  var var_worldSet = bool43;
  lineNumber = 331
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    0,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func44;
  func44.definitionLine = 331;
  func44.definitionModule = "kitty";
  lineNumber = 331
  var func45 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    1,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func45;
  func45.definitionLine = 331;
  func45.definitionModule = "kitty";
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
  lineNumber = 331
  var func46 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    0,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func46;
  func46.definitionLine = 331;
  func46.definitionModule = "kitty";
  lineNumber = 331
  var func47 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func47.paramCounts[0])
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
  func47.paramCounts = [
    1,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func47;
  func47.definitionLine = 331;
  func47.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 331
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func48;
  func48.definitionLine = 331;
  func48.definitionModule = "kitty";
  lineNumber = 331
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func49;
  func49.definitionLine = 331;
  func49.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 331
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    0,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func50;
  func50.definitionLine = 331;
  func50.definitionModule = "kitty";
  lineNumber = 331
  var func51 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func51.paramCounts[0])
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
  func51.paramCounts = [
    1,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func51;
  func51.definitionLine = 331;
  func51.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call52 = callmethod(var_dom,"window", [0]);
  var call53 = callmethod(call52,"Math", [0]);
  var var_math = call53;
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
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
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["math"] = func54;
  func54.definitionLine = 17;
  func54.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func55 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func55.paramCounts[0])
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
  func55.paramCounts = [
    0,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func55;
  func55.definitionLine = 22;
  func55.definitionModule = "kitty";
  var obj56 = Grace_allocObject();
  obj56.definitionModule = "kitty";
  obj56.definitionLine = 22;
  obj56.outer = this;
  var reader_kitty_outer_57 = function() {
    return this.outer;
  }
  obj56.methods["outer"] = reader_kitty_outer_57;
  function obj_init_56() {
    var origSuperDepth = superDepth;
    superDepth = obj56;
    obj56.annotations = [];
    var func58 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func58.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func58.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func58.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj59 = Grace_allocObject();
        obj59.definitionModule = "kitty";
        obj59.definitionLine = 22;
        obj59.outer = this;
        var reader_kitty_outer_60 = function() {
          return this.outer;
        }
        obj59.methods["outer"] = reader_kitty_outer_60;
        function obj_init_59() {
          var origSuperDepth = superDepth;
          superDepth = obj59;
          obj59.annotations = [];
          var func61 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func61.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call62 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call63 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod67 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient69 = callmethod(prod67, "/", [1], new GraceNum(180));
              var call70 = callmethod(var_ctx,"rotate", [1], quotient69);
              lineNumber = 40
              onSelf = true;
              var call71 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block72 = Grace_allocObject();
              block72.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block72.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block72.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block72.methods["match"] = GraceBlock_match;
              block72.methods["prefix?"] = GraceBlock_lift;
              block72.receiver = this;
              block72.className = 'block<kitty:43>';
              block72.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call74 = callmethod(this, "width", [0]);
                var call75 = callmethod(call74,"prefix-", [0]);
                var quotient77 = callmethod(call75, "/", [1], new GraceNum(2));
                onSelf = true;
                var call79 = callmethod(this, "height", [0]);
                var call80 = callmethod(call79,"prefix-", [0]);
                var quotient82 = callmethod(call80, "/", [1], new GraceNum(2));
                onSelf = true;
                var call83 = callmethod(this, "width", [0]);
                onSelf = true;
                var call84 = callmethod(this, "height", [0]);
                var call85 = callmethod(var_ctx,"drawImage", [5], var_element, quotient77, quotient82, call83, call84);
                return call85;
              };
              var call86 = callmethod(Grace_prelude,"for()do", [1, 1], call71, block72);
              lineNumber = 43
              var call87 = callmethod(var_ctx,"restore", [0]);
              return call87
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func61.paramCounts = [
            4,
          ];
          func61.variableArities = [
            false,
          ];
          obj59.methods["draw"] = func61;
          func61.definitionLine = 34;
          func61.definitionModule = "kitty";
          var func88 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func88.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call89 = callmethod(this, "imgTag", [0]);
              return call89
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func88.paramCounts = [
            0,
          ];
          func88.variableArities = [
            false,
          ];
          obj59.methods["getTag"] = func88;
          func88.definitionLine = 47;
          func88.definitionModule = "kitty";
          var func90 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func90.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call91 = callmethod(this, "elements", [0]);
              var call92 = callmethod(call91,"push", [1], var_imgTag__39__);
              return call92
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func90.paramCounts = [
            1,
          ];
          func90.variableArities = [
            false,
          ];
          obj59.methods["drawImage"] = func90;
          func90.definitionLine = 51;
          func90.definitionModule = "kitty";
          sourceObject = obj59;
          lineNumber = 25
          var string93 = new GraceString("img");
          var call94 = callmethod(var_dom,"document", [0]);
          var call95 = callmethod(call94,"createElement", [1], string93);
          obj59.data["imgTag"] = call95;
          var reader_kitty_imgTag_96 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_96.def = true;
          reader_kitty_imgTag_96.confidential = true;
          obj59.methods["imgTag"] = reader_kitty_imgTag_96;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call95)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj59;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call97 = callmethod(this, "imgTag", [0]);
          var call98 = callmethod(call97,"src:=", [1], var_url__39__);
          sourceObject = obj59;
          lineNumber = 28
          var call99 = callmethod(var_collections,"list", [0]);
          var call100 = callmethod(call99,"new", [0]);
          obj59.data["elements"] = call100;
          var reader_kitty_elements_101 = function() {
            return this.data["elements"];
          }
          obj59.methods["elements"] = reader_kitty_elements_101;
          obj59.data["elements"] = call100;
          var writer_kitty_elements_101 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj59.methods["elements:="] = writer_kitty_elements_101;
          reader_kitty_elements_101.confidential = true;
          writer_kitty_elements_101.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call100)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj59.mutable = true;
          sourceObject = obj59;
          lineNumber = 29
          onSelf = true;
          var call102 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call103 = callmethod(this, "elements", [0]);
          var call104 = callmethod(call103,"push", [1], call102);
          sourceObject = obj59;
          lineNumber = 31
          obj59.data["height"] = var_height__39__;
          var reader_kitty_height_105 = function() {
            return this.data["height"];
          }
          obj59.methods["height"] = reader_kitty_height_105;
          obj59.data["height"] = var_height__39__;
          var writer_kitty_height_105 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj59.methods["height:="] = writer_kitty_height_105;
          reader_kitty_height_105.confidential = true;
          writer_kitty_height_105.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj59.mutable = true;
          sourceObject = obj59;
          lineNumber = 32
          obj59.data["width"] = var_width__39__;
          var reader_kitty_width_106 = function() {
            return this.data["width"];
          }
          obj59.methods["width"] = reader_kitty_width_106;
          obj59.data["width"] = var_width__39__;
          var writer_kitty_width_106 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj59.methods["width:="] = writer_kitty_width_106;
          reader_kitty_width_106.confidential = true;
          writer_kitty_width_106.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj59.mutable = true;
          sourceObject = obj59;
          sourceObject = obj59;
          sourceObject = obj59;
          superDepth = origSuperDepth;
        }
        obj_init_59.apply(obj59, []);
        return obj59
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func58.paramCounts = [
      1,
      1,
      1,
    ];
    func58.variableArities = [
      false,
      false,
      false,
    ];
    obj56.methods["new()width()height"] = func58;
    func58.definitionLine = 22;
    func58.definitionModule = "kitty";
    var func107 = function(argcv) {
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
        var obj108 = Grace_allocObject();
        obj108.definitionModule = "kitty";
        obj108.definitionLine = 22;
        var inho108 = inheritingObject;
        while (inho108.superobj) inho108 = inho108.superobj;
        inho108.superobj = obj108;
        obj108.data = inheritingObject.data;
        obj108.outer = this;
        var reader_kitty_outer_109 = function() {
          return this.outer;
        }
        obj108.methods["outer"] = reader_kitty_outer_109;
        function obj_init_108() {
          var origSuperDepth = superDepth;
          superDepth = obj108;
          obj108.annotations = [];
          var func110 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func110.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call111 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call112 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod116 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient118 = callmethod(prod116, "/", [1], new GraceNum(180));
              var call119 = callmethod(var_ctx,"rotate", [1], quotient118);
              lineNumber = 40
              onSelf = true;
              var call120 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block121 = Grace_allocObject();
              block121.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block121.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block121.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block121.methods["match"] = GraceBlock_match;
              block121.methods["prefix?"] = GraceBlock_lift;
              block121.receiver = this;
              block121.className = 'block<kitty:43>';
              block121.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call123 = callmethod(this, "width", [0]);
                var call124 = callmethod(call123,"prefix-", [0]);
                var quotient126 = callmethod(call124, "/", [1], new GraceNum(2));
                onSelf = true;
                var call128 = callmethod(this, "height", [0]);
                var call129 = callmethod(call128,"prefix-", [0]);
                var quotient131 = callmethod(call129, "/", [1], new GraceNum(2));
                onSelf = true;
                var call132 = callmethod(this, "width", [0]);
                onSelf = true;
                var call133 = callmethod(this, "height", [0]);
                var call134 = callmethod(var_ctx,"drawImage", [5], var_element, quotient126, quotient131, call132, call133);
                return call134;
              };
              var call135 = callmethod(Grace_prelude,"for()do", [1, 1], call120, block121);
              lineNumber = 43
              var call136 = callmethod(var_ctx,"restore", [0]);
              return call136
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func110.paramCounts = [
            4,
          ];
          func110.variableArities = [
            false,
          ];
          obj108.methods["draw"] = func110;
          func110.definitionLine = 34;
          func110.definitionModule = "kitty";
          var func137 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func137.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call138 = callmethod(this, "imgTag", [0]);
              return call138
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func137.paramCounts = [
            0,
          ];
          func137.variableArities = [
            false,
          ];
          obj108.methods["getTag"] = func137;
          func137.definitionLine = 47;
          func137.definitionModule = "kitty";
          var func139 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func139.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call140 = callmethod(this, "elements", [0]);
              var call141 = callmethod(call140,"push", [1], var_imgTag__39__);
              return call141
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func139.paramCounts = [
            1,
          ];
          func139.variableArities = [
            false,
          ];
          obj108.methods["drawImage"] = func139;
          func139.definitionLine = 51;
          func139.definitionModule = "kitty";
          sourceObject = obj108;
          lineNumber = 25
          var string142 = new GraceString("img");
          var call143 = callmethod(var_dom,"document", [0]);
          var call144 = callmethod(call143,"createElement", [1], string142);
          obj108.data["imgTag"] = call144;
          var reader_kitty_imgTag_145 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_145.def = true;
          reader_kitty_imgTag_145.confidential = true;
          obj108.methods["imgTag"] = reader_kitty_imgTag_145;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call144)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj108;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call146 = callmethod(this, "imgTag", [0]);
          var call147 = callmethod(call146,"src:=", [1], var_url__39__);
          sourceObject = obj108;
          lineNumber = 28
          var call148 = callmethod(var_collections,"list", [0]);
          var call149 = callmethod(call148,"new", [0]);
          obj108.data["elements"] = call149;
          var reader_kitty_elements_150 = function() {
            return this.data["elements"];
          }
          obj108.methods["elements"] = reader_kitty_elements_150;
          obj108.data["elements"] = call149;
          var writer_kitty_elements_150 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj108.methods["elements:="] = writer_kitty_elements_150;
          reader_kitty_elements_150.confidential = true;
          writer_kitty_elements_150.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call149)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj108.mutable = true;
          sourceObject = obj108;
          lineNumber = 29
          onSelf = true;
          var call151 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call152 = callmethod(this, "elements", [0]);
          var call153 = callmethod(call152,"push", [1], call151);
          sourceObject = obj108;
          lineNumber = 31
          obj108.data["height"] = var_height__39__;
          var reader_kitty_height_154 = function() {
            return this.data["height"];
          }
          obj108.methods["height"] = reader_kitty_height_154;
          obj108.data["height"] = var_height__39__;
          var writer_kitty_height_154 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj108.methods["height:="] = writer_kitty_height_154;
          reader_kitty_height_154.confidential = true;
          writer_kitty_height_154.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj108.mutable = true;
          sourceObject = obj108;
          lineNumber = 32
          obj108.data["width"] = var_width__39__;
          var reader_kitty_width_155 = function() {
            return this.data["width"];
          }
          obj108.methods["width"] = reader_kitty_width_155;
          obj108.data["width"] = var_width__39__;
          var writer_kitty_width_155 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj108.methods["width:="] = writer_kitty_width_155;
          reader_kitty_width_155.confidential = true;
          writer_kitty_width_155.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj108.mutable = true;
          sourceObject = obj108;
          sourceObject = obj108;
          sourceObject = obj108;
          superDepth = origSuperDepth;
        }
        obj_init_108.apply(inheritingObject, []);
        return obj108
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj56.methods["new()width()height()object"] = func107;
    var func156 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string157 = new GraceString("class KittyImage");
        return string157
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func156.paramCounts = [
    ];
    func156.variableArities = [
    ];
    obj56.methods["asDebugString"] = func156;
    func156.definitionLine = 22;
    func156.definitionModule = "kitty";
    sourceObject = obj56;
    sourceObject = obj56;
    superDepth = origSuperDepth;
  }
  obj_init_56.apply(obj56, []);
  var var_KittyImage = obj56;
  lineNumber = 58
  lineNumber = 65
  var func158 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func158.paramCounts[0])
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
  func158.paramCounts = [
    0,
  ];
  func158.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func158;
  func158.definitionLine = 65;
  func158.definitionModule = "kitty";
  var obj159 = Grace_allocObject();
  obj159.definitionModule = "kitty";
  obj159.definitionLine = 65;
  obj159.outer = this;
  var reader_kitty_outer_160 = function() {
    return this.outer;
  }
  obj159.methods["outer"] = reader_kitty_outer_160;
  function obj_init_159() {
    var origSuperDepth = superDepth;
    superDepth = obj159;
    obj159.annotations = [];
    var func161 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func161.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func161.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func161.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj162 = Grace_allocObject();
        obj162.definitionModule = "kitty";
        obj162.definitionLine = 65;
        obj162.outer = this;
        var reader_kitty_outer_163 = function() {
          return this.outer;
        }
        obj162.methods["outer"] = reader_kitty_outer_163;
        function obj_init_162() {
          var origSuperDepth = superDepth;
          superDepth = obj162;
          obj162.annotations = [];
          var func164 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func164.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string165 = new GraceString("realyee.png");
              onSelf = true;
              var call166 = callmethod(this, "createImage", [1], string165);
              return call166
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func164.paramCounts = [
            0,
          ];
          func164.variableArities = [
            false,
          ];
          obj162.methods["awake"] = func164;
          func164.definitionLine = 85;
          func164.definitionModule = "kitty";
          var func167 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func167.paramCounts[0])
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
          func167.paramCounts = [
            0,
          ];
          func167.variableArities = [
            false,
          ];
          obj162.methods["start"] = func167;
          func167.definitionLine = 91;
          func167.definitionModule = "kitty";
          var func168 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func168.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call169 = callmethod(this, "action", [0]);
              var call170 = callmethod(call169,"update", [0]);
              return call170
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func168.paramCounts = [
            0,
          ];
          func168.variableArities = [
            false,
          ];
          obj162.methods["update"] = func168;
          func168.definitionLine = 96;
          func168.definitionModule = "kitty";
          var func171 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func171.paramCounts[0])
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
          func171.paramCounts = [
            0,
          ];
          func171.variableArities = [
            false,
          ];
          obj162.methods["onDestroy"] = func171;
          func171.definitionLine = 101;
          func171.definitionModule = "kitty";
          var func172 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call175 = callmethod(this, "rotation", [0]);
              var prod177 = callmethod(call175, "*", [1], new GraceNum(3.14159));
              var quotient179 = callmethod(prod177, "/", [1], new GraceNum(180));
              var call180 = callmethod(var_math,"cos", [1], quotient179);
              var prod183 = callmethod(var_distance, "*", [1], call180);
              onSelf = true;
              var call185 = callmethod(this, "posX", [0]);
              var opresult187 = callmethod(call185, "+", [1], prod183);
              onSelf = true;
              var call188 = callmethod(this, "posX:=", [1], opresult187);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call191 = callmethod(this, "rotation", [0]);
              var prod193 = callmethod(call191, "*", [1], new GraceNum(3.14159));
              var quotient195 = callmethod(prod193, "/", [1], new GraceNum(180));
              var call196 = callmethod(var_math,"sin", [1], quotient195);
              var prod199 = callmethod(var_distance, "*", [1], call196);
              onSelf = true;
              var call201 = callmethod(this, "posY", [0]);
              var opresult203 = callmethod(call201, "+", [1], prod199);
              onSelf = true;
              var call204 = callmethod(this, "posY:=", [1], opresult203);
              return call204
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func172.paramCounts = [
            1,
          ];
          func172.variableArities = [
            false,
          ];
          obj162.methods["move"] = func172;
          func172.definitionLine = 105;
          func172.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func205.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call208 = callmethod(this, "rotation", [0]);
              var opresult211 = callmethod(new GraceNum(90), "+", [1], call208);
              var prod213 = callmethod(opresult211, "*", [1], new GraceNum(3.14159));
              var quotient215 = callmethod(prod213, "/", [1], new GraceNum(180));
              var call216 = callmethod(var_math,"cos", [1], quotient215);
              var prod219 = callmethod(var_distance, "*", [1], call216);
              onSelf = true;
              var call221 = callmethod(this, "posX", [0]);
              var opresult223 = callmethod(call221, "+", [1], prod219);
              onSelf = true;
              var call224 = callmethod(this, "posX:=", [1], opresult223);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call227 = callmethod(this, "rotation", [0]);
              var opresult230 = callmethod(new GraceNum(90), "+", [1], call227);
              var prod232 = callmethod(opresult230, "*", [1], new GraceNum(3.14159));
              var quotient234 = callmethod(prod232, "/", [1], new GraceNum(180));
              var call235 = callmethod(var_math,"sin", [1], quotient234);
              var prod238 = callmethod(var_distance, "*", [1], call235);
              onSelf = true;
              var call240 = callmethod(this, "posY", [0]);
              var opresult242 = callmethod(call240, "+", [1], prod238);
              onSelf = true;
              var call243 = callmethod(this, "posY:=", [1], opresult242);
              return call243
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func205.paramCounts = [
            1,
          ];
          func205.variableArities = [
            false,
          ];
          obj162.methods["strafe"] = func205;
          func205.definitionLine = 110;
          func205.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 97
              lineNumber = 117
              lineNumber = 116
              onSelf = true;
              var call246 = callmethod(this, "rotation", [0]);
              var opresult248 = callmethod(call246, "+", [1], var_angle);
              onSelf = true;
              var call249 = callmethod(this, "rotation:=", [1], opresult248);
              return call249
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func244.paramCounts = [
            1,
          ];
          func244.variableArities = [
            false,
          ];
          obj162.methods["turn"] = func244;
          func244.definitionLine = 115;
          func244.definitionModule = "kitty";
          var func250 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func250.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call251 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call252 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call253 = callmethod(this, "posY", [0]);
              var call254 = callmethod(var_ctx,"translate", [2], call252, call253);
              lineNumber = 122
              onSelf = true;
              var call255 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call256 = callmethod(this, "image", [0]);
              var call257 = callmethod(call256,"draw", [4], var_ctx, var_dx, var_dy, call255);
              lineNumber = 123
              var call258 = callmethod(var_ctx,"restore", [0]);
              return call258
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func250.paramCounts = [
            3,
          ];
          func250.variableArities = [
            false,
          ];
          obj162.methods["draw"] = func250;
          func250.definitionLine = 119;
          func250.definitionModule = "kitty";
          var func259 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func259.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call260 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call261 = callmethod(call260, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call262 = callmethod(call261, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call263 = callmethod(this, "image:=", [1], call262);
              return call263
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func259.paramCounts = [
            1,
          ];
          func259.variableArities = [
            false,
          ];
          obj162.methods["createImage"] = func259;
          func259.definitionLine = 126;
          func259.definitionModule = "kitty";
          var func264 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func264.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call265 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj162.methods["setImage"] = func264;
          func264.definitionLine = 130;
          func264.definitionModule = "kitty";
          var func266 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func266.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call267 = callmethod(this, "action:=", [1], var_action__39__);
              return call267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func266.paramCounts = [
            1,
          ];
          func266.variableArities = [
            false,
          ];
          obj162.methods["setAction"] = func266;
          func266.definitionLine = 134;
          func266.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call269 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call270 = callmethod(this, "posY:=", [1], var_y);
              return call270
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func268.paramCounts = [
            2,
          ];
          func268.variableArities = [
            false,
          ];
          obj162.methods["setLocation"] = func268;
          func268.definitionLine = 138;
          func268.definitionModule = "kitty";
          var func271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call272 = callmethod(this, "posX", [0]);
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
          obj162.methods["getX"] = func271;
          func271.definitionLine = 143;
          func271.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call274 = callmethod(this, "posY", [0]);
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
          obj162.methods["getY"] = func273;
          func273.definitionLine = 147;
          func273.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call276 = callmethod(this, "rotation", [0]);
              return call276
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramCounts = [
            0,
          ];
          func275.variableArities = [
            false,
          ];
          obj162.methods["getRotation"] = func275;
          func275.definitionLine = 151;
          func275.definitionModule = "kitty";
          sourceObject = obj162;
          lineNumber = 68
          obj162.data["tag"] = var_tag__39__;
          var reader_kitty_tag_277 = function() {
            return this.data["tag"];
          }
          reader_kitty_tag_277.def = true;
          reader_kitty_tag_277.confidential = true;
          obj162.methods["tag"] = reader_kitty_tag_277;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 68
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'tag' to be of type Unknown"))
          sourceObject = obj162;
          lineNumber = 70
          obj162.data["posX"] = var_x__39__;
          var reader_kitty_posX_278 = function() {
            return this.data["posX"];
          }
          obj162.methods["posX"] = reader_kitty_posX_278;
          obj162.data["posX"] = var_x__39__;
          var writer_kitty_posX_278 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj162.methods["posX:="] = writer_kitty_posX_278;
          reader_kitty_posX_278.confidential = true;
          writer_kitty_posX_278.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 71
          obj162.data["posY"] = var_y__39__;
          var reader_kitty_posY_279 = function() {
            return this.data["posY"];
          }
          obj162.methods["posY"] = reader_kitty_posY_279;
          obj162.data["posY"] = var_y__39__;
          var writer_kitty_posY_279 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj162.methods["posY:="] = writer_kitty_posY_279;
          reader_kitty_posY_279.confidential = true;
          writer_kitty_posY_279.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 72
          obj162.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_280 = function() {
            return this.data["rotation"];
          }
          obj162.methods["rotation"] = reader_kitty_rotation_280;
          obj162.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_280 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj162.methods["rotation:="] = writer_kitty_rotation_280;
          reader_kitty_rotation_280.confidential = true;
          writer_kitty_rotation_280.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 74
          var obj281 = Grace_allocObject();
          obj281.definitionModule = "kitty";
          obj281.definitionLine = 74;
          obj281.outer = this;
          var reader_kitty_outer_282 = function() {
            return this.outer;
          }
          obj281.methods["outer"] = reader_kitty_outer_282;
          function obj_init_281() {
            var origSuperDepth = superDepth;
            superDepth = obj281;
            obj281.annotations = [];
            var func283 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func283.paramCounts[0])
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
            func283.paramCounts = [
              0,
            ];
            func283.variableArities = [
              false,
            ];
            obj281.methods["update"] = func283;
            func283.definitionLine = 75;
            func283.definitionModule = "kitty";
            sourceObject = obj281;
            superDepth = origSuperDepth;
          }
          obj_init_281.apply(obj281, []);
          obj162.data["action"] = obj281;
          var reader_kitty_action_284 = function() {
            return this.data["action"];
          }
          obj162.methods["action"] = reader_kitty_action_284;
          obj162.data["action"] = obj281;
          var writer_kitty_action_284 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj162.methods["action:="] = writer_kitty_action_284;
          reader_kitty_action_284.confidential = true;
          writer_kitty_action_284.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj281)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          obj162.data["image"] = undefined;
          var reader_kitty_image_285 = function() {
            return this.data["image"];
          }
          obj162.methods["image"] = reader_kitty_image_285;
          obj162.data["image"] = undefined;
          var writer_kitty_image_285 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj162.methods["image:="] = writer_kitty_image_285;
          reader_kitty_image_285.confidential = true;
          writer_kitty_image_285.confidential = true;
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 82
          onSelf = true;
          var call286 = callmethod(this, "awake", [0]);
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          sourceObject = obj162;
          superDepth = origSuperDepth;
        }
        obj_init_162.apply(obj162, []);
        return obj162
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func161.paramCounts = [
      1,
      1,
      1,
    ];
    func161.variableArities = [
      false,
      false,
      false,
    ];
    obj159.methods["new()x()y"] = func161;
    func161.definitionLine = 65;
    func161.definitionModule = "kitty";
    var func287 = function(argcv) {
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
        var obj288 = Grace_allocObject();
        obj288.definitionModule = "kitty";
        obj288.definitionLine = 65;
        var inho288 = inheritingObject;
        while (inho288.superobj) inho288 = inho288.superobj;
        inho288.superobj = obj288;
        obj288.data = inheritingObject.data;
        obj288.outer = this;
        var reader_kitty_outer_289 = function() {
          return this.outer;
        }
        obj288.methods["outer"] = reader_kitty_outer_289;
        function obj_init_288() {
          var origSuperDepth = superDepth;
          superDepth = obj288;
          obj288.annotations = [];
          var func290 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string291 = new GraceString("realyee.png");
              onSelf = true;
              var call292 = callmethod(this, "createImage", [1], string291);
              return call292
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
          obj288.methods["awake"] = func290;
          func290.definitionLine = 85;
          func290.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
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
          func293.paramCounts = [
            0,
          ];
          func293.variableArities = [
            false,
          ];
          obj288.methods["start"] = func293;
          func293.definitionLine = 91;
          func293.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call295 = callmethod(this, "action", [0]);
              var call296 = callmethod(call295,"update", [0]);
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
            0,
          ];
          func294.variableArities = [
            false,
          ];
          obj288.methods["update"] = func294;
          func294.definitionLine = 96;
          func294.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
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
          func297.paramCounts = [
            0,
          ];
          func297.variableArities = [
            false,
          ];
          obj288.methods["onDestroy"] = func297;
          func297.definitionLine = 101;
          func297.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call301 = callmethod(this, "rotation", [0]);
              var prod303 = callmethod(call301, "*", [1], new GraceNum(3.14159));
              var quotient305 = callmethod(prod303, "/", [1], new GraceNum(180));
              var call306 = callmethod(var_math,"cos", [1], quotient305);
              var prod309 = callmethod(var_distance, "*", [1], call306);
              onSelf = true;
              var call311 = callmethod(this, "posX", [0]);
              var opresult313 = callmethod(call311, "+", [1], prod309);
              onSelf = true;
              var call314 = callmethod(this, "posX:=", [1], opresult313);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call317 = callmethod(this, "rotation", [0]);
              var prod319 = callmethod(call317, "*", [1], new GraceNum(3.14159));
              var quotient321 = callmethod(prod319, "/", [1], new GraceNum(180));
              var call322 = callmethod(var_math,"sin", [1], quotient321);
              var prod325 = callmethod(var_distance, "*", [1], call322);
              onSelf = true;
              var call327 = callmethod(this, "posY", [0]);
              var opresult329 = callmethod(call327, "+", [1], prod325);
              onSelf = true;
              var call330 = callmethod(this, "posY:=", [1], opresult329);
              return call330
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
          obj288.methods["move"] = func298;
          func298.definitionLine = 105;
          func298.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call334 = callmethod(this, "rotation", [0]);
              var opresult337 = callmethod(new GraceNum(90), "+", [1], call334);
              var prod339 = callmethod(opresult337, "*", [1], new GraceNum(3.14159));
              var quotient341 = callmethod(prod339, "/", [1], new GraceNum(180));
              var call342 = callmethod(var_math,"cos", [1], quotient341);
              var prod345 = callmethod(var_distance, "*", [1], call342);
              onSelf = true;
              var call347 = callmethod(this, "posX", [0]);
              var opresult349 = callmethod(call347, "+", [1], prod345);
              onSelf = true;
              var call350 = callmethod(this, "posX:=", [1], opresult349);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call353 = callmethod(this, "rotation", [0]);
              var opresult356 = callmethod(new GraceNum(90), "+", [1], call353);
              var prod358 = callmethod(opresult356, "*", [1], new GraceNum(3.14159));
              var quotient360 = callmethod(prod358, "/", [1], new GraceNum(180));
              var call361 = callmethod(var_math,"sin", [1], quotient360);
              var prod364 = callmethod(var_distance, "*", [1], call361);
              onSelf = true;
              var call366 = callmethod(this, "posY", [0]);
              var opresult368 = callmethod(call366, "+", [1], prod364);
              onSelf = true;
              var call369 = callmethod(this, "posY:=", [1], opresult368);
              return call369
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            1,
          ];
          func331.variableArities = [
            false,
          ];
          obj288.methods["strafe"] = func331;
          func331.definitionLine = 110;
          func331.definitionModule = "kitty";
          var func370 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 97
              lineNumber = 117
              lineNumber = 116
              onSelf = true;
              var call372 = callmethod(this, "rotation", [0]);
              var opresult374 = callmethod(call372, "+", [1], var_angle);
              onSelf = true;
              var call375 = callmethod(this, "rotation:=", [1], opresult374);
              return call375
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func370.paramCounts = [
            1,
          ];
          func370.variableArities = [
            false,
          ];
          obj288.methods["turn"] = func370;
          func370.definitionLine = 115;
          func370.definitionModule = "kitty";
          var func376 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func376.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call377 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call378 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call379 = callmethod(this, "posY", [0]);
              var call380 = callmethod(var_ctx,"translate", [2], call378, call379);
              lineNumber = 122
              onSelf = true;
              var call381 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call382 = callmethod(this, "image", [0]);
              var call383 = callmethod(call382,"draw", [4], var_ctx, var_dx, var_dy, call381);
              lineNumber = 123
              var call384 = callmethod(var_ctx,"restore", [0]);
              return call384
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func376.paramCounts = [
            3,
          ];
          func376.variableArities = [
            false,
          ];
          obj288.methods["draw"] = func376;
          func376.definitionLine = 119;
          func376.definitionModule = "kitty";
          var func385 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func385.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call386 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call387 = callmethod(call386, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call388 = callmethod(call387, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call389 = callmethod(this, "image:=", [1], call388);
              return call389
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func385.paramCounts = [
            1,
          ];
          func385.variableArities = [
            false,
          ];
          obj288.methods["createImage"] = func385;
          func385.definitionLine = 126;
          func385.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func390.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call391 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj288.methods["setImage"] = func390;
          func390.definitionLine = 130;
          func390.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call393 = callmethod(this, "action:=", [1], var_action__39__);
              return call393
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
          obj288.methods["setAction"] = func392;
          func392.definitionLine = 134;
          func392.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call395 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call396 = callmethod(this, "posY:=", [1], var_y);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func394.paramCounts = [
            2,
          ];
          func394.variableArities = [
            false,
          ];
          obj288.methods["setLocation"] = func394;
          func394.definitionLine = 138;
          func394.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call398 = callmethod(this, "posX", [0]);
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
          obj288.methods["getX"] = func397;
          func397.definitionLine = 143;
          func397.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call400 = callmethod(this, "posY", [0]);
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
          obj288.methods["getY"] = func399;
          func399.definitionLine = 147;
          func399.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call402 = callmethod(this, "rotation", [0]);
              return call402
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func401.paramCounts = [
            0,
          ];
          func401.variableArities = [
            false,
          ];
          obj288.methods["getRotation"] = func401;
          func401.definitionLine = 151;
          func401.definitionModule = "kitty";
          sourceObject = obj288;
          lineNumber = 68
          obj288.data["tag"] = var_tag__39__;
          var reader_kitty_tag_403 = function() {
            return this.data["tag"];
          }
          reader_kitty_tag_403.def = true;
          reader_kitty_tag_403.confidential = true;
          obj288.methods["tag"] = reader_kitty_tag_403;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 68
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'tag' to be of type Unknown"))
          sourceObject = obj288;
          lineNumber = 70
          obj288.data["posX"] = var_x__39__;
          var reader_kitty_posX_404 = function() {
            return this.data["posX"];
          }
          obj288.methods["posX"] = reader_kitty_posX_404;
          obj288.data["posX"] = var_x__39__;
          var writer_kitty_posX_404 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj288.methods["posX:="] = writer_kitty_posX_404;
          reader_kitty_posX_404.confidential = true;
          writer_kitty_posX_404.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 71
          obj288.data["posY"] = var_y__39__;
          var reader_kitty_posY_405 = function() {
            return this.data["posY"];
          }
          obj288.methods["posY"] = reader_kitty_posY_405;
          obj288.data["posY"] = var_y__39__;
          var writer_kitty_posY_405 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj288.methods["posY:="] = writer_kitty_posY_405;
          reader_kitty_posY_405.confidential = true;
          writer_kitty_posY_405.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 72
          obj288.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_406 = function() {
            return this.data["rotation"];
          }
          obj288.methods["rotation"] = reader_kitty_rotation_406;
          obj288.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_406 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj288.methods["rotation:="] = writer_kitty_rotation_406;
          reader_kitty_rotation_406.confidential = true;
          writer_kitty_rotation_406.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 74
          var obj407 = Grace_allocObject();
          obj407.definitionModule = "kitty";
          obj407.definitionLine = 74;
          obj407.outer = this;
          var reader_kitty_outer_408 = function() {
            return this.outer;
          }
          obj407.methods["outer"] = reader_kitty_outer_408;
          function obj_init_407() {
            var origSuperDepth = superDepth;
            superDepth = obj407;
            obj407.annotations = [];
            var func409 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func409.paramCounts[0])
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
            func409.paramCounts = [
              0,
            ];
            func409.variableArities = [
              false,
            ];
            obj407.methods["update"] = func409;
            func409.definitionLine = 75;
            func409.definitionModule = "kitty";
            sourceObject = obj407;
            superDepth = origSuperDepth;
          }
          obj_init_407.apply(obj407, []);
          obj288.data["action"] = obj407;
          var reader_kitty_action_410 = function() {
            return this.data["action"];
          }
          obj288.methods["action"] = reader_kitty_action_410;
          obj288.data["action"] = obj407;
          var writer_kitty_action_410 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj288.methods["action:="] = writer_kitty_action_410;
          reader_kitty_action_410.confidential = true;
          writer_kitty_action_410.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj407)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          obj288.data["image"] = undefined;
          var reader_kitty_image_411 = function() {
            return this.data["image"];
          }
          obj288.methods["image"] = reader_kitty_image_411;
          obj288.data["image"] = undefined;
          var writer_kitty_image_411 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj288.methods["image:="] = writer_kitty_image_411;
          reader_kitty_image_411.confidential = true;
          writer_kitty_image_411.confidential = true;
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 82
          onSelf = true;
          var call412 = callmethod(this, "awake", [0]);
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          sourceObject = obj288;
          superDepth = origSuperDepth;
        }
        obj_init_288.apply(inheritingObject, []);
        return obj288
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj159.methods["new()x()y()object"] = func287;
    var func413 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string414 = new GraceString("class KittyEntity");
        return string414
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func413.paramCounts = [
    ];
    func413.variableArities = [
    ];
    obj159.methods["asDebugString"] = func413;
    func413.definitionLine = 65;
    func413.definitionModule = "kitty";
    sourceObject = obj159;
    sourceObject = obj159;
    superDepth = origSuperDepth;
  }
  obj_init_159.apply(obj159, []);
  var var_KittyEntity = obj159;
  lineNumber = 158
  lineNumber = 165
  var func415 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func415.paramCounts[0])
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
  func415.paramCounts = [
    0,
  ];
  func415.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func415;
  func415.definitionLine = 165;
  func415.definitionModule = "kitty";
  var obj416 = Grace_allocObject();
  obj416.definitionModule = "kitty";
  obj416.definitionLine = 165;
  obj416.outer = this;
  var reader_kitty_outer_417 = function() {
    return this.outer;
  }
  obj416.methods["outer"] = reader_kitty_outer_417;
  function obj_init_416() {
    var origSuperDepth = superDepth;
    superDepth = obj416;
    obj416.annotations = [];
    var func418 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func418.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj419 = Grace_allocObject();
        obj419.definitionModule = "kitty";
        obj419.definitionLine = 165;
        obj419.outer = this;
        var reader_kitty_outer_420 = function() {
          return this.outer;
        }
        obj419.methods["outer"] = reader_kitty_outer_420;
        function obj_init_419() {
          var origSuperDepth = superDepth;
          superDepth = obj419;
          obj419.annotations = [];
          var func421 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func421.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 201
              var if422 = var_done;
              lineNumber = 197
              onSelf = true;
              var call423 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call423)) {
                lineNumber = 199
                lineNumber = 198
                var bool424 = new GraceBoolean(false)
                return bool424
              }
              lineNumber = 202
              lineNumber = 165
              lineNumber = 201
              var call425 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call426 = callmethod(this, "document:=", [1], call425);
              lineNumber = 202
              lineNumber = 201
              lineNumber = 202
              var string427 = new GraceString("standard-canvas");
              onSelf = true;
              var call428 = callmethod(this, "document", [0]);
              var call429 = callmethod(call428,"getElementById", [1], string427);
              onSelf = true;
              var call430 = callmethod(this, "canvas:=", [1], call429);
              lineNumber = 204
              lineNumber = 201
              lineNumber = 203
              onSelf = true;
              var call431 = callmethod(this, "canvas", [0]);
              var call432 = callmethod(call431,"width", [0]);
              onSelf = true;
              var call433 = callmethod(this, "canvasWidth:=", [1], call432);
              lineNumber = 207
              lineNumber = 203
              lineNumber = 204
              onSelf = true;
              var call434 = callmethod(this, "canvas", [0]);
              var call435 = callmethod(call434,"height", [0]);
              onSelf = true;
              var call436 = callmethod(this, "canvasHeight:=", [1], call435);
              lineNumber = 219
              var block437 = Grace_allocObject();
              block437.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block437.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block437.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block437.methods["match"] = GraceBlock_match;
              block437.methods["prefix?"] = GraceBlock_lift;
              block437.receiver = this;
              block437.className = 'block<kitty:219>';
              block437.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                lineNumber = 209
                onSelf = true;
                var call438 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call440 = callmethod(this, "canvas", [0]);
                var call441 = callmethod(call440,"offsetWidth", [0]);
                onSelf = true;
                var call443 = callmethod(this, "canvas", [0]);
                var call444 = callmethod(call443,"offsetLeft", [0]);
                var call446 = callmethod(var_ev,"clientX", [0]);
                var diff448 = callmethod(call446, "-", [1], call444);
                var quotient450 = callmethod(diff448, "/", [1], call441);
                var prod452 = callmethod(quotient450, "*", [1], call438);
                var var_x = prod452;
                lineNumber = 210;
                moduleName = "kitty";
                lineNumber = 209
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 214
                lineNumber = 210
                onSelf = true;
                var call453 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call455 = callmethod(this, "canvas", [0]);
                var call456 = callmethod(call455,"offsetHeight", [0]);
                onSelf = true;
                var call458 = callmethod(this, "canvas", [0]);
                var call459 = callmethod(call458,"offsetTop", [0]);
                var call461 = callmethod(var_ev,"clientY", [0]);
                var diff463 = callmethod(call461, "-", [1], call459);
                var quotient465 = callmethod(diff463, "/", [1], call456);
                var prod467 = callmethod(quotient465, "*", [1], call453);
                var var_y = prod467;
                lineNumber = 214;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 218
                var if468 = var_done;
                lineNumber = 214
                var opresult471 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call474 = callmethod(this, "canvasWidth", [0]);
                var diff476 = callmethod(call474, "-", [1], new GraceNum(20));
                var opresult479 = callmethod(var_x, ">", [1], diff476);
                var opresult481 = callmethod(opresult479, "&&", [1], opresult471);
                if (Grace_isTrue(opresult481)) {
                  lineNumber = 215
                  var call482 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 216
                  onSelf = true;
                  var call483 = callmethod(this, "stop", [0]);
                  if468 = call483;
                }
                return if468;
              };
              var_mouseDownListener = block437;
              lineNumber = 219
              var string484 = new GraceString("mousedown");
              onSelf = true;
              var call485 = callmethod(this, "canvas", [0]);
              var call486 = callmethod(call485,"addEventListener", [2], string484, var_mouseDownListener);
              lineNumber = 229
              var block487 = Grace_allocObject();
              block487.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block487.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block487.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block487.methods["match"] = GraceBlock_match;
              block487.methods["prefix?"] = GraceBlock_lift;
              block487.receiver = this;
              block487.className = 'block<kitty:229>';
              block487.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 227
                var if488 = var_done;
                lineNumber = 224
                var call490 = callmethod(var_ev,"keyCode", [0]);
                var opresult492 = callmethod(call490, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult492)) {
                  lineNumber = 225
                  onSelf = true;
                  var call493 = callmethod(this, "stop", [0]);
                  if488 = call493;
                }
                lineNumber = 228
                lineNumber = 224
                lineNumber = 227
                var call494 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call495 = callmethod(this, "currentKeyDown:=", [1], call494);
                return call495;
              };
              var_keyDownListener = block487;
              lineNumber = 229
              var string496 = new GraceString("keydown");
              onSelf = true;
              var call497 = callmethod(this, "document", [0]);
              var call498 = callmethod(call497,"addEventListener", [2], string496, var_keyDownListener);
              lineNumber = 235
              var block499 = Grace_allocObject();
              block499.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block499.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block499.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block499.methods["match"] = GraceBlock_match;
              block499.methods["prefix?"] = GraceBlock_lift;
              block499.receiver = this;
              block499.className = 'block<kitty:235>';
              block499.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 227
                lineNumber = 234
                lineNumber = 233
                var call500 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call501 = callmethod(this, "currentKeyDown:=", [1], call500);
                return call501;
              };
              var_keyUpListener = block499;
              lineNumber = 235
              var string502 = new GraceString("keyup");
              onSelf = true;
              var call503 = callmethod(this, "document", [0]);
              var call504 = callmethod(call503,"addEventListener", [2], string502, var_keyUpListener);
              lineNumber = 237
              lineNumber = 227
              lineNumber = 237
              var string505 = new GraceString("canvas");
              var call506 = callmethod(var_dom,"document", [0]);
              var call507 = callmethod(call506,"createElement", [1], string505);
              onSelf = true;
              var call508 = callmethod(this, "backingCanvas:=", [1], call507);
              lineNumber = 239
              lineNumber = 237
              lineNumber = 238
              onSelf = true;
              var call509 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call510 = callmethod(this, "backingCanvas", [0]);
              var call511 = callmethod(call510,"height:=", [1], call509);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call512 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call513 = callmethod(this, "backingCanvas", [0]);
              var call514 = callmethod(call513,"width:=", [1], call512);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 240
              var string515 = new GraceString("2d");
              onSelf = true;
              var call516 = callmethod(this, "backingCanvas", [0]);
              var call517 = callmethod(call516,"getContext", [1], string515);
              onSelf = true;
              var call518 = callmethod(this, "backingContext:=", [1], call517);
              lineNumber = 241
              lineNumber = 237
              lineNumber = 241
              var string519 = new GraceString("2d");
              onSelf = true;
              var call520 = callmethod(this, "canvas", [0]);
              var call521 = callmethod(call520,"getContext", [1], string519);
              onSelf = true;
              var call522 = callmethod(this, "mctx:=", [1], call521);
              lineNumber = 244
              var string523 = new GraceString("doggo.jpg");
              onSelf = true;
              var call524 = callmethod(this, "setBackground", [1], string523);
              lineNumber = 252
              lineNumber = 237
              lineNumber = 246
              var bool525 = new GraceBoolean(true)
              onSelf = true;
              var call526 = callmethod(this, "isInit:=", [1], bool525);
              return call526
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func421.paramCounts = [
            0,
          ];
          func421.variableArities = [
            false,
          ];
          obj419.methods["init"] = func421;
          func421.definitionLine = 193;
          func421.definitionModule = "kitty";
          var func527 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func527.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 237
              lineNumber = 257
              var bool528 = new GraceBoolean(true)
              onSelf = true;
              var call529 = callmethod(this, "isRunning:=", [1], bool528);
              lineNumber = 258
              var block530 = Grace_allocObject();
              block530.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block530.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block530.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block530.methods["match"] = GraceBlock_match;
              block530.methods["prefix?"] = GraceBlock_lift;
              block530.receiver = this;
              block530.className = 'block<kitty:258>';
              block530.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call531 = callmethod(this, "isRunning", [0]);
                return call531;
              };
              lineNumber = 262
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
              block532.className = 'block<kitty:262>';
              block532.real = function(
              ) {
                sourceObject = this;
                lineNumber = 259
                onSelf = true;
                var call533 = callmethod(this, "update", [0]);
                return call533;
              };
              lineNumber = 258
              var call534 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block530, new GraceNum(10), block532);
              return call534
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func527.paramCounts = [
            0,
          ];
          func527.variableArities = [
            false,
          ];
          obj419.methods["start"] = func527;
          func527.definitionLine = 255;
          func527.definitionModule = "kitty";
          var func535 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func535.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 237
              lineNumber = 270
              onSelf = true;
              var call536 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call537 = callmethod(this, "mctx", [0]);
              var call538 = callmethod(call537,"fillStyle:=", [1], call536);
              lineNumber = 271
              onSelf = true;
              var call539 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call540 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call541 = callmethod(this, "mctx", [0]);
              var call542 = callmethod(call541,"fillRect", [4], new GraceNum(0), new GraceNum(0), call539, call540);
              lineNumber = 272
              onSelf = true;
              var call543 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call544 = callmethod(this, "mctx", [0]);
              var call545 = callmethod(call544,"drawImage", [3], call543, new GraceNum(0), new GraceNum(0));
              lineNumber = 273
              onSelf = true;
              var call546 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call548 = callmethod(this, "canvasWidth", [0]);
              var quotient550 = callmethod(call548, "/", [1], new GraceNum(2));
              onSelf = true;
              var call552 = callmethod(this, "canvasHeight", [0]);
              var quotient554 = callmethod(call552, "/", [1], new GraceNum(2));
              onSelf = true;
              var call555 = callmethod(this, "background", [0]);
              var call556 = callmethod(call555,"draw", [4], call546, quotient550, quotient554, new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call557 = callmethod(this, "entities", [0]);
              lineNumber = 282
              var block558 = Grace_allocObject();
              block558.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block558.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block558.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block558.methods["match"] = GraceBlock_match;
              block558.methods["prefix?"] = GraceBlock_lift;
              block558.receiver = this;
              block558.className = 'block<kitty:282>';
              block558.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 277
                var call559 = callmethod(var_entity,"update", [0]);
                lineNumber = 278
                onSelf = true;
                var call560 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call562 = callmethod(this, "canvasWidth", [0]);
                var quotient564 = callmethod(call562, "/", [1], new GraceNum(2));
                onSelf = true;
                var call566 = callmethod(this, "canvasHeight", [0]);
                var quotient568 = callmethod(call566, "/", [1], new GraceNum(2));
                var call569 = callmethod(var_entity,"draw", [3], call560, quotient564, quotient568);
                return call569;
              };
              var call570 = callmethod(Grace_prelude,"for()do", [1, 1], call557, block558);
              return call570
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func535.paramCounts = [
            0,
          ];
          func535.variableArities = [
            false,
          ];
          obj419.methods["update"] = func535;
          func535.definitionLine = 265;
          func535.definitionModule = "kitty";
          var func571 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func571.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              var string572 = new GraceString("WORLD STOPPING...");
              var call573 = Grace_print(string572);
              lineNumber = 287
              lineNumber = 277
              lineNumber = 286
              var bool574 = new GraceBoolean(false)
              onSelf = true;
              var call575 = callmethod(this, "isRunning:=", [1], bool574);
              lineNumber = 287
              var string576 = new GraceString("mousedown");
              onSelf = true;
              var call577 = callmethod(this, "canvas", [0]);
              var call578 = callmethod(call577,"removeEventListener", [2], string576, var_mouseDownListener);
              lineNumber = 288
              var string579 = new GraceString("keydown");
              onSelf = true;
              var call580 = callmethod(this, "document", [0]);
              var call581 = callmethod(call580,"removeEventListener", [2], string579, var_keyDownListener);
              lineNumber = 289
              var string582 = new GraceString("keyup");
              onSelf = true;
              var call583 = callmethod(this, "document", [0]);
              var call584 = callmethod(call583,"removeEventListener", [2], string582, var_keyUpListener);
              return call584
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func571.paramCounts = [
            0,
          ];
          func571.variableArities = [
            false,
          ];
          obj419.methods["stop"] = func571;
          func571.definitionLine = 284;
          func571.definitionModule = "kitty";
          var func585 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func585.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 294
              lineNumber = 293
              onSelf = true;
              var call586 = callmethod(this, "currentKeyDown", [0]);
              var opresult589 = callmethod(var_key, "==", [1], call586);
              return opresult589
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func585.paramCounts = [
            1,
          ];
          func585.variableArities = [
            false,
          ];
          obj419.methods["isKeyDown"] = func585;
          func585.definitionLine = 292;
          func585.definitionModule = "kitty";
          var func590 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func590.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 277
              lineNumber = 297
              onSelf = true;
              var call591 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call592 = callmethod(this, "canvasHeight", [0]);
              var call593 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call594 = callmethod(call593, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call595 = callmethod(call594, "Image()width()height", [1, 1, 1], var_url, call591, call592);
              onSelf = true;
              var call596 = callmethod(this, "background:=", [1], call595);
              return call596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func590.paramCounts = [
            1,
          ];
          func590.variableArities = [
            false,
          ];
          obj419.methods["setBackground"] = func590;
          func590.definitionLine = 296;
          func590.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              onSelf = true;
              var call598 = callmethod(this, "entities", [0]);
              var call599 = callmethod(call598,"push", [1], var_e);
              return call599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func597.paramTypes = [];
          func597.paramTypes.push([]);
          func597.paramCounts = [
            1,
          ];
          func597.variableArities = [
            false,
          ];
          obj419.methods["addEntity"] = func597;
          func597.definitionLine = 300;
          func597.definitionModule = "kitty";
          var func600 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 305
              onSelf = true;
              var call601 = callmethod(this, "mctx", [0]);
              return call601
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func600.paramCounts = [
            0,
          ];
          func600.variableArities = [
            false,
          ];
          obj419.methods["getContext"] = func600;
          func600.definitionLine = 304;
          func600.definitionModule = "kitty";
          sourceObject = obj419;
          obj419.data["background"] = undefined;
          var reader_kitty_background_602 = function() {
            return this.data["background"];
          }
          obj419.methods["background"] = reader_kitty_background_602;
          obj419.data["background"] = undefined;
          var writer_kitty_background_602 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj419.methods["background:="] = writer_kitty_background_602;
          reader_kitty_background_602.confidential = true;
          writer_kitty_background_602.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 170
          var string603 = new GraceString("black");
          obj419.data["backgroundColour"] = string603;
          var reader_kitty_backgroundColour_604 = function() {
            return this.data["backgroundColour"];
          }
          obj419.methods["backgroundColour"] = reader_kitty_backgroundColour_604;
          obj419.data["backgroundColour"] = string603;
          var writer_kitty_backgroundColour_604 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj419.methods["backgroundColour:="] = writer_kitty_backgroundColour_604;
          reader_kitty_backgroundColour_604.confidential = true;
          writer_kitty_backgroundColour_604.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string603)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["document"] = undefined;
          var reader_kitty_document_605 = function() {
            return this.data["document"];
          }
          obj419.methods["document"] = reader_kitty_document_605;
          obj419.data["document"] = undefined;
          var writer_kitty_document_605 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj419.methods["document:="] = writer_kitty_document_605;
          reader_kitty_document_605.confidential = true;
          writer_kitty_document_605.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_606 = function() {
            return this.data["backingCanvas"];
          }
          obj419.methods["backingCanvas"] = reader_kitty_backingCanvas_606;
          obj419.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_606 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj419.methods["backingCanvas:="] = writer_kitty_backingCanvas_606;
          reader_kitty_backingCanvas_606.confidential = true;
          writer_kitty_backingCanvas_606.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["backingContext"] = undefined;
          var reader_kitty_backingContext_607 = function() {
            return this.data["backingContext"];
          }
          obj419.methods["backingContext"] = reader_kitty_backingContext_607;
          obj419.data["backingContext"] = undefined;
          var writer_kitty_backingContext_607 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj419.methods["backingContext:="] = writer_kitty_backingContext_607;
          reader_kitty_backingContext_607.confidential = true;
          writer_kitty_backingContext_607.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["canvas"] = undefined;
          var reader_kitty_canvas_608 = function() {
            return this.data["canvas"];
          }
          obj419.methods["canvas"] = reader_kitty_canvas_608;
          obj419.data["canvas"] = undefined;
          var writer_kitty_canvas_608 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj419.methods["canvas:="] = writer_kitty_canvas_608;
          reader_kitty_canvas_608.confidential = true;
          writer_kitty_canvas_608.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_609 = function() {
            return this.data["canvasWidth"];
          }
          obj419.methods["canvasWidth"] = reader_kitty_canvasWidth_609;
          obj419.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_609 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj419.methods["canvasWidth:="] = writer_kitty_canvasWidth_609;
          reader_kitty_canvasWidth_609.confidential = true;
          writer_kitty_canvasWidth_609.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_610 = function() {
            return this.data["canvasHeight"];
          }
          obj419.methods["canvasHeight"] = reader_kitty_canvasHeight_610;
          obj419.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_610 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj419.methods["canvasHeight:="] = writer_kitty_canvasHeight_610;
          reader_kitty_canvasHeight_610.confidential = true;
          writer_kitty_canvasHeight_610.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 181
          var call611 = callmethod(var_collections,"list", [0]);
          var call612 = callmethod(call611,"new", [0]);
          obj419.data["entities"] = call612;
          var reader_kitty_entities_613 = function() {
            return this.data["entities"];
          }
          obj419.methods["entities"] = reader_kitty_entities_613;
          obj419.data["entities"] = call612;
          var writer_kitty_entities_613 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj419.methods["entities:="] = writer_kitty_entities_613;
          reader_kitty_entities_613.confidential = true;
          writer_kitty_entities_613.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 183
          var bool614 = new GraceBoolean(false)
          obj419.data["isInit"] = bool614;
          var reader_kitty_isInit_615 = function() {
            return this.data["isInit"];
          }
          obj419.methods["isInit"] = reader_kitty_isInit_615;
          obj419.data["isInit"] = bool614;
          var writer_kitty_isInit_615 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj419.methods["isInit:="] = writer_kitty_isInit_615;
          reader_kitty_isInit_615.confidential = true;
          writer_kitty_isInit_615.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool614)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 184
          var bool616 = new GraceBoolean(false)
          obj419.data["isRunning"] = bool616;
          var reader_kitty_isRunning_617 = function() {
            return this.data["isRunning"];
          }
          obj419.methods["isRunning"] = reader_kitty_isRunning_617;
          obj419.data["isRunning"] = bool616;
          var writer_kitty_isRunning_617 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj419.methods["isRunning:="] = writer_kitty_isRunning_617;
          reader_kitty_isRunning_617.confidential = true;
          writer_kitty_isRunning_617.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool616)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj419.mutable = true;
          sourceObject = obj419;
          obj419.data["mctx"] = undefined;
          var reader_kitty_mctx_618 = function() {
            return this.data["mctx"];
          }
          obj419.methods["mctx"] = reader_kitty_mctx_618;
          obj419.data["mctx"] = undefined;
          var writer_kitty_mctx_618 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj419.methods["mctx:="] = writer_kitty_mctx_618;
          reader_kitty_mctx_618.confidential = true;
          writer_kitty_mctx_618.confidential = true;
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 190
          lineNumber = 188
          var call619 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj419.data["currentKeyDown"] = call619;
          var reader_kitty_currentKeyDown_620 = function() {
            return this.data["currentKeyDown"];
          }
          obj419.methods["currentKeyDown"] = reader_kitty_currentKeyDown_620;
          obj419.data["currentKeyDown"] = call619;
          var writer_kitty_currentKeyDown_620 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj419.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_620;
          reader_kitty_currentKeyDown_620.confidential = true;
          writer_kitty_currentKeyDown_620.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call619)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj419.mutable = true;
          sourceObject = obj419;
          lineNumber = 190
          onSelf = true;
          var call621 = callmethod(this, "init", [0]);
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          sourceObject = obj419;
          superDepth = origSuperDepth;
        }
        obj_init_419.apply(obj419, []);
        return obj419
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func418.paramCounts = [
      0,
    ];
    func418.variableArities = [
      false,
    ];
    obj416.methods["new"] = func418;
    func418.definitionLine = 165;
    func418.definitionModule = "kitty";
    var func622 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj623 = Grace_allocObject();
        obj623.definitionModule = "kitty";
        obj623.definitionLine = 165;
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
              lineNumber = 201
              var if626 = var_done;
              lineNumber = 197
              onSelf = true;
              var call627 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call627)) {
                lineNumber = 199
                lineNumber = 198
                var bool628 = new GraceBoolean(false)
                return bool628
              }
              lineNumber = 202
              lineNumber = 181
              lineNumber = 201
              var call629 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call630 = callmethod(this, "document:=", [1], call629);
              lineNumber = 202
              lineNumber = 201
              lineNumber = 202
              var string631 = new GraceString("standard-canvas");
              onSelf = true;
              var call632 = callmethod(this, "document", [0]);
              var call633 = callmethod(call632,"getElementById", [1], string631);
              onSelf = true;
              var call634 = callmethod(this, "canvas:=", [1], call633);
              lineNumber = 204
              lineNumber = 201
              lineNumber = 203
              onSelf = true;
              var call635 = callmethod(this, "canvas", [0]);
              var call636 = callmethod(call635,"width", [0]);
              onSelf = true;
              var call637 = callmethod(this, "canvasWidth:=", [1], call636);
              lineNumber = 207
              lineNumber = 203
              lineNumber = 204
              onSelf = true;
              var call638 = callmethod(this, "canvas", [0]);
              var call639 = callmethod(call638,"height", [0]);
              onSelf = true;
              var call640 = callmethod(this, "canvasHeight:=", [1], call639);
              lineNumber = 219
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
              block641.className = 'block<kitty:219>';
              block641.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                lineNumber = 209
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
                lineNumber = 210;
                moduleName = "kitty";
                lineNumber = 209
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 214
                lineNumber = 210
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
                lineNumber = 214;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 218
                var if672 = var_done;
                lineNumber = 214
                var opresult675 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call678 = callmethod(this, "canvasWidth", [0]);
                var diff680 = callmethod(call678, "-", [1], new GraceNum(20));
                var opresult683 = callmethod(var_x, ">", [1], diff680);
                var opresult685 = callmethod(opresult683, "&&", [1], opresult675);
                if (Grace_isTrue(opresult685)) {
                  lineNumber = 215
                  var call686 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 216
                  onSelf = true;
                  var call687 = callmethod(this, "stop", [0]);
                  if672 = call687;
                }
                return if672;
              };
              var_mouseDownListener = block641;
              lineNumber = 219
              var string688 = new GraceString("mousedown");
              onSelf = true;
              var call689 = callmethod(this, "canvas", [0]);
              var call690 = callmethod(call689,"addEventListener", [2], string688, var_mouseDownListener);
              lineNumber = 229
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
              block691.className = 'block<kitty:229>';
              block691.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 227
                var if692 = var_done;
                lineNumber = 224
                var call694 = callmethod(var_ev,"keyCode", [0]);
                var opresult696 = callmethod(call694, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult696)) {
                  lineNumber = 225
                  onSelf = true;
                  var call697 = callmethod(this, "stop", [0]);
                  if692 = call697;
                }
                lineNumber = 228
                lineNumber = 224
                lineNumber = 227
                var call698 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call699 = callmethod(this, "currentKeyDown:=", [1], call698);
                return call699;
              };
              var_keyDownListener = block691;
              lineNumber = 229
              var string700 = new GraceString("keydown");
              onSelf = true;
              var call701 = callmethod(this, "document", [0]);
              var call702 = callmethod(call701,"addEventListener", [2], string700, var_keyDownListener);
              lineNumber = 235
              var block703 = Grace_allocObject();
              block703.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block703.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block703.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block703.methods["match"] = GraceBlock_match;
              block703.methods["prefix?"] = GraceBlock_lift;
              block703.receiver = this;
              block703.className = 'block<kitty:235>';
              block703.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 227
                lineNumber = 234
                lineNumber = 233
                var call704 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call705 = callmethod(this, "currentKeyDown:=", [1], call704);
                return call705;
              };
              var_keyUpListener = block703;
              lineNumber = 235
              var string706 = new GraceString("keyup");
              onSelf = true;
              var call707 = callmethod(this, "document", [0]);
              var call708 = callmethod(call707,"addEventListener", [2], string706, var_keyUpListener);
              lineNumber = 237
              lineNumber = 227
              lineNumber = 237
              var string709 = new GraceString("canvas");
              var call710 = callmethod(var_dom,"document", [0]);
              var call711 = callmethod(call710,"createElement", [1], string709);
              onSelf = true;
              var call712 = callmethod(this, "backingCanvas:=", [1], call711);
              lineNumber = 239
              lineNumber = 237
              lineNumber = 238
              onSelf = true;
              var call713 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call714 = callmethod(this, "backingCanvas", [0]);
              var call715 = callmethod(call714,"height:=", [1], call713);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call716 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call717 = callmethod(this, "backingCanvas", [0]);
              var call718 = callmethod(call717,"width:=", [1], call716);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 240
              var string719 = new GraceString("2d");
              onSelf = true;
              var call720 = callmethod(this, "backingCanvas", [0]);
              var call721 = callmethod(call720,"getContext", [1], string719);
              onSelf = true;
              var call722 = callmethod(this, "backingContext:=", [1], call721);
              lineNumber = 241
              lineNumber = 237
              lineNumber = 241
              var string723 = new GraceString("2d");
              onSelf = true;
              var call724 = callmethod(this, "canvas", [0]);
              var call725 = callmethod(call724,"getContext", [1], string723);
              onSelf = true;
              var call726 = callmethod(this, "mctx:=", [1], call725);
              lineNumber = 244
              var string727 = new GraceString("doggo.jpg");
              onSelf = true;
              var call728 = callmethod(this, "setBackground", [1], string727);
              lineNumber = 252
              lineNumber = 237
              lineNumber = 246
              var bool729 = new GraceBoolean(true)
              onSelf = true;
              var call730 = callmethod(this, "isInit:=", [1], bool729);
              return call730
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
          func625.definitionLine = 193;
          func625.definitionModule = "kitty";
          var func731 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func731.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 237
              lineNumber = 257
              var bool732 = new GraceBoolean(true)
              onSelf = true;
              var call733 = callmethod(this, "isRunning:=", [1], bool732);
              lineNumber = 258
              var block734 = Grace_allocObject();
              block734.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block734.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block734.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block734.methods["match"] = GraceBlock_match;
              block734.methods["prefix?"] = GraceBlock_lift;
              block734.receiver = this;
              block734.className = 'block<kitty:258>';
              block734.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call735 = callmethod(this, "isRunning", [0]);
                return call735;
              };
              lineNumber = 262
              var block736 = Grace_allocObject();
              block736.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block736.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block736.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block736.methods["match"] = GraceBlock_match;
              block736.methods["prefix?"] = GraceBlock_lift;
              block736.receiver = this;
              block736.className = 'block<kitty:262>';
              block736.real = function(
              ) {
                sourceObject = this;
                lineNumber = 259
                onSelf = true;
                var call737 = callmethod(this, "update", [0]);
                return call737;
              };
              lineNumber = 258
              var call738 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block734, new GraceNum(10), block736);
              return call738
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func731.paramCounts = [
            0,
          ];
          func731.variableArities = [
            false,
          ];
          obj623.methods["start"] = func731;
          func731.definitionLine = 255;
          func731.definitionModule = "kitty";
          var func739 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func739.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 237
              lineNumber = 270
              onSelf = true;
              var call740 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call741 = callmethod(this, "mctx", [0]);
              var call742 = callmethod(call741,"fillStyle:=", [1], call740);
              lineNumber = 271
              onSelf = true;
              var call743 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call744 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call745 = callmethod(this, "mctx", [0]);
              var call746 = callmethod(call745,"fillRect", [4], new GraceNum(0), new GraceNum(0), call743, call744);
              lineNumber = 272
              onSelf = true;
              var call747 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call748 = callmethod(this, "mctx", [0]);
              var call749 = callmethod(call748,"drawImage", [3], call747, new GraceNum(0), new GraceNum(0));
              lineNumber = 273
              onSelf = true;
              var call750 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call752 = callmethod(this, "canvasWidth", [0]);
              var quotient754 = callmethod(call752, "/", [1], new GraceNum(2));
              onSelf = true;
              var call756 = callmethod(this, "canvasHeight", [0]);
              var quotient758 = callmethod(call756, "/", [1], new GraceNum(2));
              onSelf = true;
              var call759 = callmethod(this, "background", [0]);
              var call760 = callmethod(call759,"draw", [4], call750, quotient754, quotient758, new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call761 = callmethod(this, "entities", [0]);
              lineNumber = 282
              var block762 = Grace_allocObject();
              block762.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block762.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block762.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block762.methods["match"] = GraceBlock_match;
              block762.methods["prefix?"] = GraceBlock_lift;
              block762.receiver = this;
              block762.className = 'block<kitty:282>';
              block762.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 277
                var call763 = callmethod(var_entity,"update", [0]);
                lineNumber = 278
                onSelf = true;
                var call764 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call766 = callmethod(this, "canvasWidth", [0]);
                var quotient768 = callmethod(call766, "/", [1], new GraceNum(2));
                onSelf = true;
                var call770 = callmethod(this, "canvasHeight", [0]);
                var quotient772 = callmethod(call770, "/", [1], new GraceNum(2));
                var call773 = callmethod(var_entity,"draw", [3], call764, quotient768, quotient772);
                return call773;
              };
              var call774 = callmethod(Grace_prelude,"for()do", [1, 1], call761, block762);
              return call774
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func739.paramCounts = [
            0,
          ];
          func739.variableArities = [
            false,
          ];
          obj623.methods["update"] = func739;
          func739.definitionLine = 265;
          func739.definitionModule = "kitty";
          var func775 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func775.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              var string776 = new GraceString("WORLD STOPPING...");
              var call777 = Grace_print(string776);
              lineNumber = 287
              lineNumber = 277
              lineNumber = 286
              var bool778 = new GraceBoolean(false)
              onSelf = true;
              var call779 = callmethod(this, "isRunning:=", [1], bool778);
              lineNumber = 287
              var string780 = new GraceString("mousedown");
              onSelf = true;
              var call781 = callmethod(this, "canvas", [0]);
              var call782 = callmethod(call781,"removeEventListener", [2], string780, var_mouseDownListener);
              lineNumber = 288
              var string783 = new GraceString("keydown");
              onSelf = true;
              var call784 = callmethod(this, "document", [0]);
              var call785 = callmethod(call784,"removeEventListener", [2], string783, var_keyDownListener);
              lineNumber = 289
              var string786 = new GraceString("keyup");
              onSelf = true;
              var call787 = callmethod(this, "document", [0]);
              var call788 = callmethod(call787,"removeEventListener", [2], string786, var_keyUpListener);
              return call788
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func775.paramCounts = [
            0,
          ];
          func775.variableArities = [
            false,
          ];
          obj623.methods["stop"] = func775;
          func775.definitionLine = 284;
          func775.definitionModule = "kitty";
          var func789 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func789.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 294
              lineNumber = 293
              onSelf = true;
              var call790 = callmethod(this, "currentKeyDown", [0]);
              var opresult793 = callmethod(var_key, "==", [1], call790);
              return opresult793
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func789.paramCounts = [
            1,
          ];
          func789.variableArities = [
            false,
          ];
          obj623.methods["isKeyDown"] = func789;
          func789.definitionLine = 292;
          func789.definitionModule = "kitty";
          var func794 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func794.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 277
              lineNumber = 297
              onSelf = true;
              var call795 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call796 = callmethod(this, "canvasHeight", [0]);
              var call797 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call798 = callmethod(call797, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call799 = callmethod(call798, "Image()width()height", [1, 1, 1], var_url, call795, call796);
              onSelf = true;
              var call800 = callmethod(this, "background:=", [1], call799);
              return call800
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func794.paramCounts = [
            1,
          ];
          func794.variableArities = [
            false,
          ];
          obj623.methods["setBackground"] = func794;
          func794.definitionLine = 296;
          func794.definitionModule = "kitty";
          var func801 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func801.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              onSelf = true;
              var call802 = callmethod(this, "entities", [0]);
              var call803 = callmethod(call802,"push", [1], var_e);
              return call803
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func801.paramTypes = [];
          func801.paramTypes.push([]);
          func801.paramCounts = [
            1,
          ];
          func801.variableArities = [
            false,
          ];
          obj623.methods["addEntity"] = func801;
          func801.definitionLine = 300;
          func801.definitionModule = "kitty";
          var func804 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func804.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 305
              onSelf = true;
              var call805 = callmethod(this, "mctx", [0]);
              return call805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func804.paramCounts = [
            0,
          ];
          func804.variableArities = [
            false,
          ];
          obj623.methods["getContext"] = func804;
          func804.definitionLine = 304;
          func804.definitionModule = "kitty";
          sourceObject = obj623;
          obj623.data["background"] = undefined;
          var reader_kitty_background_806 = function() {
            return this.data["background"];
          }
          obj623.methods["background"] = reader_kitty_background_806;
          obj623.data["background"] = undefined;
          var writer_kitty_background_806 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj623.methods["background:="] = writer_kitty_background_806;
          reader_kitty_background_806.confidential = true;
          writer_kitty_background_806.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 170
          var string807 = new GraceString("black");
          obj623.data["backgroundColour"] = string807;
          var reader_kitty_backgroundColour_808 = function() {
            return this.data["backgroundColour"];
          }
          obj623.methods["backgroundColour"] = reader_kitty_backgroundColour_808;
          obj623.data["backgroundColour"] = string807;
          var writer_kitty_backgroundColour_808 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj623.methods["backgroundColour:="] = writer_kitty_backgroundColour_808;
          reader_kitty_backgroundColour_808.confidential = true;
          writer_kitty_backgroundColour_808.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string807)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["document"] = undefined;
          var reader_kitty_document_809 = function() {
            return this.data["document"];
          }
          obj623.methods["document"] = reader_kitty_document_809;
          obj623.data["document"] = undefined;
          var writer_kitty_document_809 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj623.methods["document:="] = writer_kitty_document_809;
          reader_kitty_document_809.confidential = true;
          writer_kitty_document_809.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_810 = function() {
            return this.data["backingCanvas"];
          }
          obj623.methods["backingCanvas"] = reader_kitty_backingCanvas_810;
          obj623.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_810 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj623.methods["backingCanvas:="] = writer_kitty_backingCanvas_810;
          reader_kitty_backingCanvas_810.confidential = true;
          writer_kitty_backingCanvas_810.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["backingContext"] = undefined;
          var reader_kitty_backingContext_811 = function() {
            return this.data["backingContext"];
          }
          obj623.methods["backingContext"] = reader_kitty_backingContext_811;
          obj623.data["backingContext"] = undefined;
          var writer_kitty_backingContext_811 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj623.methods["backingContext:="] = writer_kitty_backingContext_811;
          reader_kitty_backingContext_811.confidential = true;
          writer_kitty_backingContext_811.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvas"] = undefined;
          var reader_kitty_canvas_812 = function() {
            return this.data["canvas"];
          }
          obj623.methods["canvas"] = reader_kitty_canvas_812;
          obj623.data["canvas"] = undefined;
          var writer_kitty_canvas_812 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj623.methods["canvas:="] = writer_kitty_canvas_812;
          reader_kitty_canvas_812.confidential = true;
          writer_kitty_canvas_812.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_813 = function() {
            return this.data["canvasWidth"];
          }
          obj623.methods["canvasWidth"] = reader_kitty_canvasWidth_813;
          obj623.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_813 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj623.methods["canvasWidth:="] = writer_kitty_canvasWidth_813;
          reader_kitty_canvasWidth_813.confidential = true;
          writer_kitty_canvasWidth_813.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_814 = function() {
            return this.data["canvasHeight"];
          }
          obj623.methods["canvasHeight"] = reader_kitty_canvasHeight_814;
          obj623.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_814 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj623.methods["canvasHeight:="] = writer_kitty_canvasHeight_814;
          reader_kitty_canvasHeight_814.confidential = true;
          writer_kitty_canvasHeight_814.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 181
          var call815 = callmethod(var_collections,"list", [0]);
          var call816 = callmethod(call815,"new", [0]);
          obj623.data["entities"] = call816;
          var reader_kitty_entities_817 = function() {
            return this.data["entities"];
          }
          obj623.methods["entities"] = reader_kitty_entities_817;
          obj623.data["entities"] = call816;
          var writer_kitty_entities_817 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj623.methods["entities:="] = writer_kitty_entities_817;
          reader_kitty_entities_817.confidential = true;
          writer_kitty_entities_817.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call816)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 183
          var bool818 = new GraceBoolean(false)
          obj623.data["isInit"] = bool818;
          var reader_kitty_isInit_819 = function() {
            return this.data["isInit"];
          }
          obj623.methods["isInit"] = reader_kitty_isInit_819;
          obj623.data["isInit"] = bool818;
          var writer_kitty_isInit_819 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj623.methods["isInit:="] = writer_kitty_isInit_819;
          reader_kitty_isInit_819.confidential = true;
          writer_kitty_isInit_819.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool818)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 184
          var bool820 = new GraceBoolean(false)
          obj623.data["isRunning"] = bool820;
          var reader_kitty_isRunning_821 = function() {
            return this.data["isRunning"];
          }
          obj623.methods["isRunning"] = reader_kitty_isRunning_821;
          obj623.data["isRunning"] = bool820;
          var writer_kitty_isRunning_821 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj623.methods["isRunning:="] = writer_kitty_isRunning_821;
          reader_kitty_isRunning_821.confidential = true;
          writer_kitty_isRunning_821.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool820)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          obj623.data["mctx"] = undefined;
          var reader_kitty_mctx_822 = function() {
            return this.data["mctx"];
          }
          obj623.methods["mctx"] = reader_kitty_mctx_822;
          obj623.data["mctx"] = undefined;
          var writer_kitty_mctx_822 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj623.methods["mctx:="] = writer_kitty_mctx_822;
          reader_kitty_mctx_822.confidential = true;
          writer_kitty_mctx_822.confidential = true;
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 190
          lineNumber = 188
          var call823 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj623.data["currentKeyDown"] = call823;
          var reader_kitty_currentKeyDown_824 = function() {
            return this.data["currentKeyDown"];
          }
          obj623.methods["currentKeyDown"] = reader_kitty_currentKeyDown_824;
          obj623.data["currentKeyDown"] = call823;
          var writer_kitty_currentKeyDown_824 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj623.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_824;
          reader_kitty_currentKeyDown_824.confidential = true;
          writer_kitty_currentKeyDown_824.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call823)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj623.mutable = true;
          sourceObject = obj623;
          lineNumber = 190
          onSelf = true;
          var call825 = callmethod(this, "init", [0]);
          sourceObject = obj623;
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
    obj416.methods["new()object"] = func622;
    var func826 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 165
        var string827 = new GraceString("class KittyWorld");
        return string827
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func826.paramCounts = [
    ];
    func826.variableArities = [
    ];
    obj416.methods["asDebugString"] = func826;
    func826.definitionLine = 165;
    func826.definitionModule = "kitty";
    sourceObject = obj416;
    sourceObject = obj416;
    superDepth = origSuperDepth;
  }
  obj_init_416.apply(obj416, []);
  var var_KittyWorld = obj416;
  lineNumber = 310
  lineNumber = 319
  lineNumber = 334
  lineNumber = 339
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nfresh:Entity()x()y:\n action\n posX:=\n posY:=\n image\n rotation:=\n turn\n posX\n posY\n draw\n update\n rotation\n move\n onDestroy\n setImage\n tag\n awake\n setAction\n action:=\n strafe\n createImage\n start\n setLocation\n getRotation\n getX\n getY\n image:=\nfresh:Image()width()height:\n width\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\nmethods-of:KittyWorld.new:\n canvasWidth:=\n background\n stop\n isInit:=\n document:=\n addEntity\n canvasWidth\n document\n isRunning:=\n update\n getContext\n start\n canvas:=\n backingContext\n background:=\n isRunning\n isKeyDown\n currentKeyDown\n backingCanvas\n setBackground\n isInit\n mctx:=\n backgroundColour:=\n mctx\n entities:=\n backingCanvas:=\n entities\n backgroundColour\n backingContext:=\n canvasHeight:=\n init\n canvasHeight\n currentKeyDown:=\n canvas\nconstructors-of:KittyEntity:\n new()x()y\nconstructors-of:KittyImage:\n new()width()height\npath:\n kitty\nmethods-of:KittyEntity.new()x()y:\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n createImage\n rotation\n move\n onDestroy\n setAction\n tag\n turn\n update\n getRotation\n strafe\n start\n setImage\n setLocation\n action:=\n getX\n getY\n image:=\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n canvasWidth:=\n background\n addEntity\n isInit:=\n document:=\n stop\n mctx\n document\n backingContext\n update\n getContext\n start\n canvas:=\n isRunning:=\n background:=\n isKeyDown\n isRunning\n currentKeyDown\n backingCanvas\n setBackground\n isInit\n mctx:=\n backingContext:=\n canvasWidth\n entities:=\n backingCanvas:=\n entities\n backgroundColour\n backgroundColour:=\n canvasHeight:=\n init\n canvasHeight\n currentKeyDown:=\n canvas\nmethods-of:KittyImage.new()width()height:\n width\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\n";
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
    "class KittyImage.new(url')width(width')height(height') {",
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
    "method Image(url)width(width')height(height') {",
    "    object {",
    "        inherits KittyImage.new(url)width(width')height(height')",
    "    }",
    "}",
    "",
    "// Represents an object in the game world",
    "class KittyEntity.new(tag')x(x')y(y') {",
    "    ",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "    def tag = tag'",
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
    "    // print \"ENTITY CREATED\"",
    "} ",
    "",
    "method Entity(tag)x(x')y(y') {",
    "    object {",
    "        inherits KittyEntity.new(tag)x(x')y(y')",
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
  ];
}
