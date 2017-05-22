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
  lineNumber = 159
  var func8 = function(argcv) {
    var curarg = 1;
    var var_tag = arguments[curarg];
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
      lineNumber = 160
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 160;
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
        lineNumber = 161
        onSelf = true;
        var call11 = callmethod(this, "tag", [0]);
        var call12 = callmethod(var_KittyEntity,"new()object", [3, 1], call11, var_x__39__, var_y__39__, this);
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
  this.methods["Entity()foo()bar"] = func8;
  func8.definitionLine = 159;
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
      obj14.definitionLine = 160;
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
        var call17 = callmethod(var_KittyEntity,"new()object", [3, 1], call16, var_x__39__, var_y__39__, this);
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
  this.methods["Entity()foo()bar()object"] = func13;
  lineNumber = 314
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 315
      var obj19 = Grace_allocObject();
      obj19.definitionModule = "kitty";
      obj19.definitionLine = 315;
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
        lineNumber = 316
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
  func18.definitionLine = 314;
  func18.definitionModule = "kitty";
  var func22 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 315;
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
  lineNumber = 323
  var func26 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 325
      var string27 = new GraceString("CHECKING...");
      var call28 = Grace_print(string27);
      lineNumber = 332
      var if29 = var_done;
      lineNumber = 327
      var call30 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call30)) {
        lineNumber = 328
        var string31 = new GraceString("NO WORLD!!");
        var call32 = Grace_print(string31);
        lineNumber = 330
        return var_done
      }
      lineNumber = 332
      var string33 = new GraceString("STARTING...");
      var call34 = Grace_print(string33);
      lineNumber = 335
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
  func26.definitionLine = 323;
  func26.definitionModule = "kitty";
  lineNumber = 338
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
      lineNumber = 340
      lineNumber = 339
      var_m__95__world = var_world__39__;
      lineNumber = 341
      lineNumber = 340
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
  func36.definitionLine = 338;
  func36.definitionModule = "kitty";
  lineNumber = 343
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
      lineNumber = 344
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
  func38.definitionLine = 343;
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
  lineNumber = 335
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
  func41.definitionLine = 335;
  func41.definitionModule = "kitty";
  lineNumber = 335
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
  func42.definitionLine = 335;
  func42.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool43 = new GraceBoolean(false)
  var var_worldSet = bool43;
  lineNumber = 335
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
  func44.definitionLine = 335;
  func44.definitionModule = "kitty";
  lineNumber = 335
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
  func45.definitionLine = 335;
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
  lineNumber = 335
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
  func46.definitionLine = 335;
  func46.definitionModule = "kitty";
  lineNumber = 335
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
  func47.definitionLine = 335;
  func47.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 335
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
  func48.definitionLine = 335;
  func48.definitionModule = "kitty";
  lineNumber = 335
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
  func49.definitionLine = 335;
  func49.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 335
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
  func50.definitionLine = 335;
  func50.definitionModule = "kitty";
  lineNumber = 335
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
  func51.definitionLine = 335;
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
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func58.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
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
          lineNumber = 24
          var string93 = new GraceString("...");
          var string96 = new GraceString("CREATING NEW IMAGE: ");
          var opresult98 = callmethod(string96, "++", [1], var_url__39__);
          var opresult100 = callmethod(opresult98, "++", [1], string93);
          var call101 = Grace_print(opresult100);
          sourceObject = obj59;
          lineNumber = 25
          var string102 = new GraceString("img");
          var call103 = callmethod(var_dom,"document", [0]);
          var call104 = callmethod(call103,"createElement", [1], string102);
          obj59.data["imgTag"] = call104;
          var reader_kitty_imgTag_105 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_105.def = true;
          reader_kitty_imgTag_105.confidential = true;
          obj59.methods["imgTag"] = reader_kitty_imgTag_105;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call104)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj59;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call106 = callmethod(this, "imgTag", [0]);
          var call107 = callmethod(call106,"src:=", [1], var_url__39__);
          sourceObject = obj59;
          lineNumber = 28
          var call108 = callmethod(var_collections,"list", [0]);
          var call109 = callmethod(call108,"new", [0]);
          obj59.data["elements"] = call109;
          var reader_kitty_elements_110 = function() {
            return this.data["elements"];
          }
          obj59.methods["elements"] = reader_kitty_elements_110;
          obj59.data["elements"] = call109;
          var writer_kitty_elements_110 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj59.methods["elements:="] = writer_kitty_elements_110;
          reader_kitty_elements_110.confidential = true;
          writer_kitty_elements_110.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call109)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj59.mutable = true;
          sourceObject = obj59;
          lineNumber = 29
          onSelf = true;
          var call111 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call112 = callmethod(this, "elements", [0]);
          var call113 = callmethod(call112,"push", [1], call111);
          sourceObject = obj59;
          lineNumber = 31
          obj59.data["height"] = var_height__39__;
          var reader_kitty_height_114 = function() {
            return this.data["height"];
          }
          obj59.methods["height"] = reader_kitty_height_114;
          obj59.data["height"] = var_height__39__;
          var writer_kitty_height_114 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj59.methods["height:="] = writer_kitty_height_114;
          reader_kitty_height_114.confidential = true;
          writer_kitty_height_114.confidential = true;
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
          var reader_kitty_width_115 = function() {
            return this.data["width"];
          }
          obj59.methods["width"] = reader_kitty_width_115;
          obj59.data["width"] = var_width__39__;
          var writer_kitty_width_115 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj59.methods["width:="] = writer_kitty_width_115;
          reader_kitty_width_115.confidential = true;
          writer_kitty_width_115.confidential = true;
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
          sourceObject = obj59;
          lineNumber = 55
          var string116 = new GraceString("");
          var string119 = new GraceString("CREATED NEW IMAGE: ");
          var opresult121 = callmethod(string119, "++", [1], var_url__39__);
          var opresult123 = callmethod(opresult121, "++", [1], string116);
          var call124 = Grace_print(opresult123);
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
      3,
    ];
    func58.variableArities = [
      false,
    ];
    obj56.methods["new"] = func58;
    func58.definitionLine = 22;
    func58.definitionModule = "kitty";
    var func125 = function(argcv) {
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
        var obj126 = Grace_allocObject();
        obj126.definitionModule = "kitty";
        obj126.definitionLine = 22;
        var inho126 = inheritingObject;
        while (inho126.superobj) inho126 = inho126.superobj;
        inho126.superobj = obj126;
        obj126.data = inheritingObject.data;
        obj126.outer = this;
        var reader_kitty_outer_127 = function() {
          return this.outer;
        }
        obj126.methods["outer"] = reader_kitty_outer_127;
        function obj_init_126() {
          var origSuperDepth = superDepth;
          superDepth = obj126;
          obj126.annotations = [];
          var func128 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func128.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call129 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call130 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod134 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient136 = callmethod(prod134, "/", [1], new GraceNum(180));
              var call137 = callmethod(var_ctx,"rotate", [1], quotient136);
              lineNumber = 40
              onSelf = true;
              var call138 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block139 = Grace_allocObject();
              block139.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block139.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block139.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block139.methods["match"] = GraceBlock_match;
              block139.methods["prefix?"] = GraceBlock_lift;
              block139.receiver = this;
              block139.className = 'block<kitty:43>';
              block139.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call141 = callmethod(this, "width", [0]);
                var call142 = callmethod(call141,"prefix-", [0]);
                var quotient144 = callmethod(call142, "/", [1], new GraceNum(2));
                onSelf = true;
                var call146 = callmethod(this, "height", [0]);
                var call147 = callmethod(call146,"prefix-", [0]);
                var quotient149 = callmethod(call147, "/", [1], new GraceNum(2));
                onSelf = true;
                var call150 = callmethod(this, "width", [0]);
                onSelf = true;
                var call151 = callmethod(this, "height", [0]);
                var call152 = callmethod(var_ctx,"drawImage", [5], var_element, quotient144, quotient149, call150, call151);
                return call152;
              };
              var call153 = callmethod(Grace_prelude,"for()do", [1, 1], call138, block139);
              lineNumber = 43
              var call154 = callmethod(var_ctx,"restore", [0]);
              return call154
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func128.paramCounts = [
            4,
          ];
          func128.variableArities = [
            false,
          ];
          obj126.methods["draw"] = func128;
          func128.definitionLine = 34;
          func128.definitionModule = "kitty";
          var func155 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func155.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call156 = callmethod(this, "imgTag", [0]);
              return call156
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func155.paramCounts = [
            0,
          ];
          func155.variableArities = [
            false,
          ];
          obj126.methods["getTag"] = func155;
          func155.definitionLine = 47;
          func155.definitionModule = "kitty";
          var func157 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func157.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call158 = callmethod(this, "elements", [0]);
              var call159 = callmethod(call158,"push", [1], var_imgTag__39__);
              return call159
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func157.paramCounts = [
            1,
          ];
          func157.variableArities = [
            false,
          ];
          obj126.methods["drawImage"] = func157;
          func157.definitionLine = 51;
          func157.definitionModule = "kitty";
          sourceObject = obj126;
          lineNumber = 24
          var string160 = new GraceString("...");
          var string163 = new GraceString("CREATING NEW IMAGE: ");
          var opresult165 = callmethod(string163, "++", [1], var_url__39__);
          var opresult167 = callmethod(opresult165, "++", [1], string160);
          var call168 = Grace_print(opresult167);
          sourceObject = obj126;
          lineNumber = 25
          var string169 = new GraceString("img");
          var call170 = callmethod(var_dom,"document", [0]);
          var call171 = callmethod(call170,"createElement", [1], string169);
          obj126.data["imgTag"] = call171;
          var reader_kitty_imgTag_172 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_172.def = true;
          reader_kitty_imgTag_172.confidential = true;
          obj126.methods["imgTag"] = reader_kitty_imgTag_172;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call171)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj126;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call173 = callmethod(this, "imgTag", [0]);
          var call174 = callmethod(call173,"src:=", [1], var_url__39__);
          sourceObject = obj126;
          lineNumber = 28
          var call175 = callmethod(var_collections,"list", [0]);
          var call176 = callmethod(call175,"new", [0]);
          obj126.data["elements"] = call176;
          var reader_kitty_elements_177 = function() {
            return this.data["elements"];
          }
          obj126.methods["elements"] = reader_kitty_elements_177;
          obj126.data["elements"] = call176;
          var writer_kitty_elements_177 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj126.methods["elements:="] = writer_kitty_elements_177;
          reader_kitty_elements_177.confidential = true;
          writer_kitty_elements_177.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call176)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj126.mutable = true;
          sourceObject = obj126;
          lineNumber = 29
          onSelf = true;
          var call178 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call179 = callmethod(this, "elements", [0]);
          var call180 = callmethod(call179,"push", [1], call178);
          sourceObject = obj126;
          lineNumber = 31
          obj126.data["height"] = var_height__39__;
          var reader_kitty_height_181 = function() {
            return this.data["height"];
          }
          obj126.methods["height"] = reader_kitty_height_181;
          obj126.data["height"] = var_height__39__;
          var writer_kitty_height_181 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj126.methods["height:="] = writer_kitty_height_181;
          reader_kitty_height_181.confidential = true;
          writer_kitty_height_181.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj126.mutable = true;
          sourceObject = obj126;
          lineNumber = 32
          obj126.data["width"] = var_width__39__;
          var reader_kitty_width_182 = function() {
            return this.data["width"];
          }
          obj126.methods["width"] = reader_kitty_width_182;
          obj126.data["width"] = var_width__39__;
          var writer_kitty_width_182 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj126.methods["width:="] = writer_kitty_width_182;
          reader_kitty_width_182.confidential = true;
          writer_kitty_width_182.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj126.mutable = true;
          sourceObject = obj126;
          sourceObject = obj126;
          sourceObject = obj126;
          sourceObject = obj126;
          lineNumber = 55
          var string183 = new GraceString("");
          var string186 = new GraceString("CREATED NEW IMAGE: ");
          var opresult188 = callmethod(string186, "++", [1], var_url__39__);
          var opresult190 = callmethod(opresult188, "++", [1], string183);
          var call191 = Grace_print(opresult190);
          superDepth = origSuperDepth;
        }
        obj_init_126.apply(inheritingObject, []);
        return obj126
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj56.methods["new()object"] = func125;
    var func192 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string193 = new GraceString("class KittyImage");
        return string193
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func192.paramCounts = [
    ];
    func192.variableArities = [
    ];
    obj56.methods["asDebugString"] = func192;
    func192.definitionLine = 22;
    func192.definitionModule = "kitty";
    sourceObject = obj56;
    sourceObject = obj56;
    superDepth = origSuperDepth;
  }
  obj_init_56.apply(obj56, []);
  var var_KittyImage = obj56;
  lineNumber = 58
  lineNumber = 65
  var func194 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func194.paramCounts[0])
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
  func194.paramCounts = [
    0,
  ];
  func194.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func194;
  func194.definitionLine = 65;
  func194.definitionModule = "kitty";
  var obj195 = Grace_allocObject();
  obj195.definitionModule = "kitty";
  obj195.definitionLine = 65;
  obj195.outer = this;
  var reader_kitty_outer_196 = function() {
    return this.outer;
  }
  obj195.methods["outer"] = reader_kitty_outer_196;
  function obj_init_195() {
    var origSuperDepth = superDepth;
    superDepth = obj195;
    obj195.annotations = [];
    var func197 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func197.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj198 = Grace_allocObject();
        obj198.definitionModule = "kitty";
        obj198.definitionLine = 65;
        obj198.outer = this;
        var reader_kitty_outer_199 = function() {
          return this.outer;
        }
        obj198.methods["outer"] = reader_kitty_outer_199;
        function obj_init_198() {
          var origSuperDepth = superDepth;
          superDepth = obj198;
          obj198.annotations = [];
          var func200 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func200.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string201 = new GraceString("realyee.png");
              onSelf = true;
              var call202 = callmethod(this, "createImage", [1], string201);
              return call202
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func200.paramCounts = [
            0,
          ];
          func200.variableArities = [
            false,
          ];
          obj198.methods["awake"] = func200;
          func200.definitionLine = 85;
          func200.definitionModule = "kitty";
          var func203 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func203.paramCounts[0])
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
          func203.paramCounts = [
            0,
          ];
          func203.variableArities = [
            false,
          ];
          obj198.methods["start"] = func203;
          func203.definitionLine = 91;
          func203.definitionModule = "kitty";
          var func204 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func204.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call205 = callmethod(this, "action", [0]);
              var call206 = callmethod(call205,"update", [0]);
              return call206
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func204.paramCounts = [
            0,
          ];
          func204.variableArities = [
            false,
          ];
          obj198.methods["update"] = func204;
          func204.definitionLine = 96;
          func204.definitionModule = "kitty";
          var func207 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func207.paramCounts[0])
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
          func207.paramCounts = [
            0,
          ];
          func207.variableArities = [
            false,
          ];
          obj198.methods["onDestroy"] = func207;
          func207.definitionLine = 101;
          func207.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call211 = callmethod(this, "rotation", [0]);
              var prod213 = callmethod(call211, "*", [1], new GraceNum(3.14159));
              var quotient215 = callmethod(prod213, "/", [1], new GraceNum(180));
              var call216 = callmethod(var_math,"cos", [1], quotient215);
              var prod219 = callmethod(var_distance, "*", [1], call216);
              onSelf = true;
              var call221 = callmethod(this, "posX", [0]);
              var opresult223 = callmethod(call221, "+", [1], prod219);
              onSelf = true;
              var call224 = callmethod(this, "posX:=", [1], opresult223);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call227 = callmethod(this, "rotation", [0]);
              var prod229 = callmethod(call227, "*", [1], new GraceNum(3.14159));
              var quotient231 = callmethod(prod229, "/", [1], new GraceNum(180));
              var call232 = callmethod(var_math,"sin", [1], quotient231);
              var prod235 = callmethod(var_distance, "*", [1], call232);
              onSelf = true;
              var call237 = callmethod(this, "posY", [0]);
              var opresult239 = callmethod(call237, "+", [1], prod235);
              onSelf = true;
              var call240 = callmethod(this, "posY:=", [1], opresult239);
              return call240
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func208.paramCounts = [
            1,
          ];
          func208.variableArities = [
            false,
          ];
          obj198.methods["move"] = func208;
          func208.definitionLine = 105;
          func208.definitionModule = "kitty";
          var func241 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func241.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call244 = callmethod(this, "rotation", [0]);
              var opresult247 = callmethod(new GraceNum(90), "+", [1], call244);
              var prod249 = callmethod(opresult247, "*", [1], new GraceNum(3.14159));
              var quotient251 = callmethod(prod249, "/", [1], new GraceNum(180));
              var call252 = callmethod(var_math,"cos", [1], quotient251);
              var prod255 = callmethod(var_distance, "*", [1], call252);
              onSelf = true;
              var call257 = callmethod(this, "posX", [0]);
              var opresult259 = callmethod(call257, "+", [1], prod255);
              onSelf = true;
              var call260 = callmethod(this, "posX:=", [1], opresult259);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call263 = callmethod(this, "rotation", [0]);
              var opresult266 = callmethod(new GraceNum(90), "+", [1], call263);
              var prod268 = callmethod(opresult266, "*", [1], new GraceNum(3.14159));
              var quotient270 = callmethod(prod268, "/", [1], new GraceNum(180));
              var call271 = callmethod(var_math,"sin", [1], quotient270);
              var prod274 = callmethod(var_distance, "*", [1], call271);
              onSelf = true;
              var call276 = callmethod(this, "posY", [0]);
              var opresult278 = callmethod(call276, "+", [1], prod274);
              onSelf = true;
              var call279 = callmethod(this, "posY:=", [1], opresult278);
              return call279
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func241.paramCounts = [
            1,
          ];
          func241.variableArities = [
            false,
          ];
          obj198.methods["strafe"] = func241;
          func241.definitionLine = 110;
          func241.definitionModule = "kitty";
          var func280 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func280.paramCounts[0])
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
              var call282 = callmethod(this, "rotation", [0]);
              var opresult284 = callmethod(call282, "+", [1], var_angle);
              onSelf = true;
              var call285 = callmethod(this, "rotation:=", [1], opresult284);
              return call285
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func280.paramCounts = [
            1,
          ];
          func280.variableArities = [
            false,
          ];
          obj198.methods["turn"] = func280;
          func280.definitionLine = 115;
          func280.definitionModule = "kitty";
          var func286 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call287 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call288 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call289 = callmethod(this, "posY", [0]);
              var call290 = callmethod(var_ctx,"translate", [2], call288, call289);
              lineNumber = 122
              onSelf = true;
              var call291 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call292 = callmethod(this, "image", [0]);
              var call293 = callmethod(call292,"draw", [4], var_ctx, var_dx, var_dy, call291);
              lineNumber = 123
              var call294 = callmethod(var_ctx,"restore", [0]);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            3,
          ];
          func286.variableArities = [
            false,
          ];
          obj198.methods["draw"] = func286;
          func286.definitionLine = 119;
          func286.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call296 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call297 = callmethod(call296, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call298 = callmethod(call297, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call299 = callmethod(this, "image:=", [1], call298);
              return call299
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
          obj198.methods["createImage"] = func295;
          func295.definitionLine = 126;
          func295.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call301 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj198.methods["setImage"] = func300;
          func300.definitionLine = 130;
          func300.definitionModule = "kitty";
          var func302 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call303 = callmethod(this, "action:=", [1], var_action__39__);
              return call303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func302.paramCounts = [
            1,
          ];
          func302.variableArities = [
            false,
          ];
          obj198.methods["setAction"] = func302;
          func302.definitionLine = 134;
          func302.definitionModule = "kitty";
          var func304 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call305 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call306 = callmethod(this, "posY:=", [1], var_y);
              return call306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func304.paramCounts = [
            2,
          ];
          func304.variableArities = [
            false,
          ];
          obj198.methods["setLocation"] = func304;
          func304.definitionLine = 138;
          func304.definitionModule = "kitty";
          var func307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call308 = callmethod(this, "posX", [0]);
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
          obj198.methods["getX"] = func307;
          func307.definitionLine = 143;
          func307.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call310 = callmethod(this, "posY", [0]);
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
          obj198.methods["getY"] = func309;
          func309.definitionLine = 147;
          func309.definitionModule = "kitty";
          var func311 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func311.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call312 = callmethod(this, "rotation", [0]);
              return call312
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func311.paramCounts = [
            0,
          ];
          func311.variableArities = [
            false,
          ];
          obj198.methods["getRotation"] = func311;
          func311.definitionLine = 151;
          func311.definitionModule = "kitty";
          sourceObject = obj198;
          lineNumber = 67
          var string313 = new GraceString(")...");
          var string316 = new GraceString(", ");
          var string319 = new GraceString("CREATING ENTITY AT (");
          var opresult321 = callmethod(string319, "++", [1], var_x__39__);
          var opresult323 = callmethod(opresult321, "++", [1], string316);
          var opresult325 = callmethod(opresult323, "++", [1], var_y__39__);
          var opresult327 = callmethod(opresult325, "++", [1], string313);
          var call328 = Grace_print(opresult327);
          sourceObject = obj198;
          lineNumber = 69
          obj198.data["tag"] = var_tag__39__;
          var reader_kitty_tag_329 = function() {
            return this.data["tag"];
          }
          obj198.methods["tag"] = reader_kitty_tag_329;
          obj198.data["tag"] = var_tag__39__;
          var writer_kitty_tag_329 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj198.methods["tag:="] = writer_kitty_tag_329;
          reader_kitty_tag_329.confidential = true;
          writer_kitty_tag_329.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 70
          obj198.data["posX"] = var_x__39__;
          var reader_kitty_posX_330 = function() {
            return this.data["posX"];
          }
          obj198.methods["posX"] = reader_kitty_posX_330;
          obj198.data["posX"] = var_x__39__;
          var writer_kitty_posX_330 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj198.methods["posX:="] = writer_kitty_posX_330;
          reader_kitty_posX_330.confidential = true;
          writer_kitty_posX_330.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 71
          obj198.data["posY"] = var_y__39__;
          var reader_kitty_posY_331 = function() {
            return this.data["posY"];
          }
          obj198.methods["posY"] = reader_kitty_posY_331;
          obj198.data["posY"] = var_y__39__;
          var writer_kitty_posY_331 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj198.methods["posY:="] = writer_kitty_posY_331;
          reader_kitty_posY_331.confidential = true;
          writer_kitty_posY_331.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 72
          obj198.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_332 = function() {
            return this.data["rotation"];
          }
          obj198.methods["rotation"] = reader_kitty_rotation_332;
          obj198.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_332 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj198.methods["rotation:="] = writer_kitty_rotation_332;
          reader_kitty_rotation_332.confidential = true;
          writer_kitty_rotation_332.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 74
          var obj333 = Grace_allocObject();
          obj333.definitionModule = "kitty";
          obj333.definitionLine = 74;
          obj333.outer = this;
          var reader_kitty_outer_334 = function() {
            return this.outer;
          }
          obj333.methods["outer"] = reader_kitty_outer_334;
          function obj_init_333() {
            var origSuperDepth = superDepth;
            superDepth = obj333;
            obj333.annotations = [];
            var func335 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func335.paramCounts[0])
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
            func335.paramCounts = [
              0,
            ];
            func335.variableArities = [
              false,
            ];
            obj333.methods["update"] = func335;
            func335.definitionLine = 75;
            func335.definitionModule = "kitty";
            sourceObject = obj333;
            superDepth = origSuperDepth;
          }
          obj_init_333.apply(obj333, []);
          obj198.data["action"] = obj333;
          var reader_kitty_action_336 = function() {
            return this.data["action"];
          }
          obj198.methods["action"] = reader_kitty_action_336;
          obj198.data["action"] = obj333;
          var writer_kitty_action_336 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj198.methods["action:="] = writer_kitty_action_336;
          reader_kitty_action_336.confidential = true;
          writer_kitty_action_336.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj333)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          obj198.data["image"] = undefined;
          var reader_kitty_image_337 = function() {
            return this.data["image"];
          }
          obj198.methods["image"] = reader_kitty_image_337;
          obj198.data["image"] = undefined;
          var writer_kitty_image_337 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj198.methods["image:="] = writer_kitty_image_337;
          reader_kitty_image_337.confidential = true;
          writer_kitty_image_337.confidential = true;
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 82
          onSelf = true;
          var call338 = callmethod(this, "awake", [0]);
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          lineNumber = 156
          var string339 = new GraceString("ENTITY CREATED");
          var call340 = Grace_print(string339);
          superDepth = origSuperDepth;
        }
        obj_init_198.apply(obj198, []);
        return obj198
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func197.paramCounts = [
      3,
    ];
    func197.variableArities = [
      false,
    ];
    obj195.methods["new"] = func197;
    func197.definitionLine = 65;
    func197.definitionModule = "kitty";
    var func341 = function(argcv) {
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
        var obj342 = Grace_allocObject();
        obj342.definitionModule = "kitty";
        obj342.definitionLine = 65;
        var inho342 = inheritingObject;
        while (inho342.superobj) inho342 = inho342.superobj;
        inho342.superobj = obj342;
        obj342.data = inheritingObject.data;
        obj342.outer = this;
        var reader_kitty_outer_343 = function() {
          return this.outer;
        }
        obj342.methods["outer"] = reader_kitty_outer_343;
        function obj_init_342() {
          var origSuperDepth = superDepth;
          superDepth = obj342;
          obj342.annotations = [];
          var func344 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func344.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string345 = new GraceString("realyee.png");
              onSelf = true;
              var call346 = callmethod(this, "createImage", [1], string345);
              return call346
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func344.paramCounts = [
            0,
          ];
          func344.variableArities = [
            false,
          ];
          obj342.methods["awake"] = func344;
          func344.definitionLine = 85;
          func344.definitionModule = "kitty";
          var func347 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func347.paramCounts[0])
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
          func347.paramCounts = [
            0,
          ];
          func347.variableArities = [
            false,
          ];
          obj342.methods["start"] = func347;
          func347.definitionLine = 91;
          func347.definitionModule = "kitty";
          var func348 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func348.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call349 = callmethod(this, "action", [0]);
              var call350 = callmethod(call349,"update", [0]);
              return call350
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func348.paramCounts = [
            0,
          ];
          func348.variableArities = [
            false,
          ];
          obj342.methods["update"] = func348;
          func348.definitionLine = 96;
          func348.definitionModule = "kitty";
          var func351 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func351.paramCounts[0])
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
          func351.paramCounts = [
            0,
          ];
          func351.variableArities = [
            false,
          ];
          obj342.methods["onDestroy"] = func351;
          func351.definitionLine = 101;
          func351.definitionModule = "kitty";
          var func352 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func352.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call355 = callmethod(this, "rotation", [0]);
              var prod357 = callmethod(call355, "*", [1], new GraceNum(3.14159));
              var quotient359 = callmethod(prod357, "/", [1], new GraceNum(180));
              var call360 = callmethod(var_math,"cos", [1], quotient359);
              var prod363 = callmethod(var_distance, "*", [1], call360);
              onSelf = true;
              var call365 = callmethod(this, "posX", [0]);
              var opresult367 = callmethod(call365, "+", [1], prod363);
              onSelf = true;
              var call368 = callmethod(this, "posX:=", [1], opresult367);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call371 = callmethod(this, "rotation", [0]);
              var prod373 = callmethod(call371, "*", [1], new GraceNum(3.14159));
              var quotient375 = callmethod(prod373, "/", [1], new GraceNum(180));
              var call376 = callmethod(var_math,"sin", [1], quotient375);
              var prod379 = callmethod(var_distance, "*", [1], call376);
              onSelf = true;
              var call381 = callmethod(this, "posY", [0]);
              var opresult383 = callmethod(call381, "+", [1], prod379);
              onSelf = true;
              var call384 = callmethod(this, "posY:=", [1], opresult383);
              return call384
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func352.paramCounts = [
            1,
          ];
          func352.variableArities = [
            false,
          ];
          obj342.methods["move"] = func352;
          func352.definitionLine = 105;
          func352.definitionModule = "kitty";
          var func385 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func385.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call388 = callmethod(this, "rotation", [0]);
              var opresult391 = callmethod(new GraceNum(90), "+", [1], call388);
              var prod393 = callmethod(opresult391, "*", [1], new GraceNum(3.14159));
              var quotient395 = callmethod(prod393, "/", [1], new GraceNum(180));
              var call396 = callmethod(var_math,"cos", [1], quotient395);
              var prod399 = callmethod(var_distance, "*", [1], call396);
              onSelf = true;
              var call401 = callmethod(this, "posX", [0]);
              var opresult403 = callmethod(call401, "+", [1], prod399);
              onSelf = true;
              var call404 = callmethod(this, "posX:=", [1], opresult403);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call407 = callmethod(this, "rotation", [0]);
              var opresult410 = callmethod(new GraceNum(90), "+", [1], call407);
              var prod412 = callmethod(opresult410, "*", [1], new GraceNum(3.14159));
              var quotient414 = callmethod(prod412, "/", [1], new GraceNum(180));
              var call415 = callmethod(var_math,"sin", [1], quotient414);
              var prod418 = callmethod(var_distance, "*", [1], call415);
              onSelf = true;
              var call420 = callmethod(this, "posY", [0]);
              var opresult422 = callmethod(call420, "+", [1], prod418);
              onSelf = true;
              var call423 = callmethod(this, "posY:=", [1], opresult422);
              return call423
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
          obj342.methods["strafe"] = func385;
          func385.definitionLine = 110;
          func385.definitionModule = "kitty";
          var func424 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func424.paramCounts[0])
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
              var call426 = callmethod(this, "rotation", [0]);
              var opresult428 = callmethod(call426, "+", [1], var_angle);
              onSelf = true;
              var call429 = callmethod(this, "rotation:=", [1], opresult428);
              return call429
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func424.paramCounts = [
            1,
          ];
          func424.variableArities = [
            false,
          ];
          obj342.methods["turn"] = func424;
          func424.definitionLine = 115;
          func424.definitionModule = "kitty";
          var func430 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func430.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call431 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call432 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call433 = callmethod(this, "posY", [0]);
              var call434 = callmethod(var_ctx,"translate", [2], call432, call433);
              lineNumber = 122
              onSelf = true;
              var call435 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call436 = callmethod(this, "image", [0]);
              var call437 = callmethod(call436,"draw", [4], var_ctx, var_dx, var_dy, call435);
              lineNumber = 123
              var call438 = callmethod(var_ctx,"restore", [0]);
              return call438
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func430.paramCounts = [
            3,
          ];
          func430.variableArities = [
            false,
          ];
          obj342.methods["draw"] = func430;
          func430.definitionLine = 119;
          func430.definitionModule = "kitty";
          var func439 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func439.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call440 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call441 = callmethod(call440, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call442 = callmethod(call441, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call443 = callmethod(this, "image:=", [1], call442);
              return call443
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func439.paramCounts = [
            1,
          ];
          func439.variableArities = [
            false,
          ];
          obj342.methods["createImage"] = func439;
          func439.definitionLine = 126;
          func439.definitionModule = "kitty";
          var func444 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func444.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call445 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj342.methods["setImage"] = func444;
          func444.definitionLine = 130;
          func444.definitionModule = "kitty";
          var func446 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func446.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call447 = callmethod(this, "action:=", [1], var_action__39__);
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
          obj342.methods["setAction"] = func446;
          func446.definitionLine = 134;
          func446.definitionModule = "kitty";
          var func448 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func448.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call449 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call450 = callmethod(this, "posY:=", [1], var_y);
              return call450
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func448.paramCounts = [
            2,
          ];
          func448.variableArities = [
            false,
          ];
          obj342.methods["setLocation"] = func448;
          func448.definitionLine = 138;
          func448.definitionModule = "kitty";
          var func451 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func451.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call452 = callmethod(this, "posX", [0]);
              return call452
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func451.paramCounts = [
            0,
          ];
          func451.variableArities = [
            false,
          ];
          obj342.methods["getX"] = func451;
          func451.definitionLine = 143;
          func451.definitionModule = "kitty";
          var func453 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func453.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call454 = callmethod(this, "posY", [0]);
              return call454
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func453.paramCounts = [
            0,
          ];
          func453.variableArities = [
            false,
          ];
          obj342.methods["getY"] = func453;
          func453.definitionLine = 147;
          func453.definitionModule = "kitty";
          var func455 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func455.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call456 = callmethod(this, "rotation", [0]);
              return call456
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func455.paramCounts = [
            0,
          ];
          func455.variableArities = [
            false,
          ];
          obj342.methods["getRotation"] = func455;
          func455.definitionLine = 151;
          func455.definitionModule = "kitty";
          sourceObject = obj342;
          lineNumber = 67
          var string457 = new GraceString(")...");
          var string460 = new GraceString(", ");
          var string463 = new GraceString("CREATING ENTITY AT (");
          var opresult465 = callmethod(string463, "++", [1], var_x__39__);
          var opresult467 = callmethod(opresult465, "++", [1], string460);
          var opresult469 = callmethod(opresult467, "++", [1], var_y__39__);
          var opresult471 = callmethod(opresult469, "++", [1], string457);
          var call472 = Grace_print(opresult471);
          sourceObject = obj342;
          lineNumber = 69
          obj342.data["tag"] = var_tag__39__;
          var reader_kitty_tag_473 = function() {
            return this.data["tag"];
          }
          obj342.methods["tag"] = reader_kitty_tag_473;
          obj342.data["tag"] = var_tag__39__;
          var writer_kitty_tag_473 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj342.methods["tag:="] = writer_kitty_tag_473;
          reader_kitty_tag_473.confidential = true;
          writer_kitty_tag_473.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 70
          obj342.data["posX"] = var_x__39__;
          var reader_kitty_posX_474 = function() {
            return this.data["posX"];
          }
          obj342.methods["posX"] = reader_kitty_posX_474;
          obj342.data["posX"] = var_x__39__;
          var writer_kitty_posX_474 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj342.methods["posX:="] = writer_kitty_posX_474;
          reader_kitty_posX_474.confidential = true;
          writer_kitty_posX_474.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 71
          obj342.data["posY"] = var_y__39__;
          var reader_kitty_posY_475 = function() {
            return this.data["posY"];
          }
          obj342.methods["posY"] = reader_kitty_posY_475;
          obj342.data["posY"] = var_y__39__;
          var writer_kitty_posY_475 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj342.methods["posY:="] = writer_kitty_posY_475;
          reader_kitty_posY_475.confidential = true;
          writer_kitty_posY_475.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 72
          obj342.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_476 = function() {
            return this.data["rotation"];
          }
          obj342.methods["rotation"] = reader_kitty_rotation_476;
          obj342.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_476 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj342.methods["rotation:="] = writer_kitty_rotation_476;
          reader_kitty_rotation_476.confidential = true;
          writer_kitty_rotation_476.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 74
          var obj477 = Grace_allocObject();
          obj477.definitionModule = "kitty";
          obj477.definitionLine = 74;
          obj477.outer = this;
          var reader_kitty_outer_478 = function() {
            return this.outer;
          }
          obj477.methods["outer"] = reader_kitty_outer_478;
          function obj_init_477() {
            var origSuperDepth = superDepth;
            superDepth = obj477;
            obj477.annotations = [];
            var func479 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func479.paramCounts[0])
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
            func479.paramCounts = [
              0,
            ];
            func479.variableArities = [
              false,
            ];
            obj477.methods["update"] = func479;
            func479.definitionLine = 75;
            func479.definitionModule = "kitty";
            sourceObject = obj477;
            superDepth = origSuperDepth;
          }
          obj_init_477.apply(obj477, []);
          obj342.data["action"] = obj477;
          var reader_kitty_action_480 = function() {
            return this.data["action"];
          }
          obj342.methods["action"] = reader_kitty_action_480;
          obj342.data["action"] = obj477;
          var writer_kitty_action_480 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj342.methods["action:="] = writer_kitty_action_480;
          reader_kitty_action_480.confidential = true;
          writer_kitty_action_480.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj477)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          obj342.data["image"] = undefined;
          var reader_kitty_image_481 = function() {
            return this.data["image"];
          }
          obj342.methods["image"] = reader_kitty_image_481;
          obj342.data["image"] = undefined;
          var writer_kitty_image_481 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj342.methods["image:="] = writer_kitty_image_481;
          reader_kitty_image_481.confidential = true;
          writer_kitty_image_481.confidential = true;
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 82
          onSelf = true;
          var call482 = callmethod(this, "awake", [0]);
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          lineNumber = 156
          var string483 = new GraceString("ENTITY CREATED");
          var call484 = Grace_print(string483);
          superDepth = origSuperDepth;
        }
        obj_init_342.apply(inheritingObject, []);
        return obj342
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj195.methods["new()object"] = func341;
    var func485 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string486 = new GraceString("class KittyEntity");
        return string486
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func485.paramCounts = [
    ];
    func485.variableArities = [
    ];
    obj195.methods["asDebugString"] = func485;
    func485.definitionLine = 65;
    func485.definitionModule = "kitty";
    sourceObject = obj195;
    sourceObject = obj195;
    superDepth = origSuperDepth;
  }
  obj_init_195.apply(obj195, []);
  var var_KittyEntity = obj195;
  lineNumber = 159
  lineNumber = 166
  var func487 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func487.paramCounts[0])
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
  func487.paramCounts = [
    0,
  ];
  func487.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func487;
  func487.definitionLine = 166;
  func487.definitionModule = "kitty";
  var obj488 = Grace_allocObject();
  obj488.definitionModule = "kitty";
  obj488.definitionLine = 166;
  obj488.outer = this;
  var reader_kitty_outer_489 = function() {
    return this.outer;
  }
  obj488.methods["outer"] = reader_kitty_outer_489;
  function obj_init_488() {
    var origSuperDepth = superDepth;
    superDepth = obj488;
    obj488.annotations = [];
    var func490 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func490.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj491 = Grace_allocObject();
        obj491.definitionModule = "kitty";
        obj491.definitionLine = 166;
        obj491.outer = this;
        var reader_kitty_outer_492 = function() {
          return this.outer;
        }
        obj491.methods["outer"] = reader_kitty_outer_492;
        function obj_init_491() {
          var origSuperDepth = superDepth;
          superDepth = obj491;
          obj491.annotations = [];
          var func493 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func493.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              var if494 = var_done;
              lineNumber = 198
              onSelf = true;
              var call495 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call495)) {
                lineNumber = 200
                lineNumber = 199
                var bool496 = new GraceBoolean(false)
                return bool496
              }
              lineNumber = 203
              lineNumber = 166
              lineNumber = 202
              var call497 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call498 = callmethod(this, "document:=", [1], call497);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              var string499 = new GraceString("standard-canvas");
              onSelf = true;
              var call500 = callmethod(this, "document", [0]);
              var call501 = callmethod(call500,"getElementById", [1], string499);
              onSelf = true;
              var call502 = callmethod(this, "canvas:=", [1], call501);
              lineNumber = 205
              lineNumber = 202
              lineNumber = 204
              onSelf = true;
              var call503 = callmethod(this, "canvas", [0]);
              var call504 = callmethod(call503,"width", [0]);
              onSelf = true;
              var call505 = callmethod(this, "canvasWidth:=", [1], call504);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call506 = callmethod(this, "canvas", [0]);
              var call507 = callmethod(call506,"height", [0]);
              onSelf = true;
              var call508 = callmethod(this, "canvasHeight:=", [1], call507);
              lineNumber = 220
              var block509 = Grace_allocObject();
              block509.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block509.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block509.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block509.methods["match"] = GraceBlock_match;
              block509.methods["prefix?"] = GraceBlock_lift;
              block509.receiver = this;
              block509.className = 'block<kitty:220>';
              block509.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 211
                lineNumber = 210
                onSelf = true;
                var call510 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call512 = callmethod(this, "canvas", [0]);
                var call513 = callmethod(call512,"offsetWidth", [0]);
                onSelf = true;
                var call515 = callmethod(this, "canvas", [0]);
                var call516 = callmethod(call515,"offsetLeft", [0]);
                var call518 = callmethod(var_ev,"clientX", [0]);
                var diff520 = callmethod(call518, "-", [1], call516);
                var quotient522 = callmethod(diff520, "/", [1], call513);
                var prod524 = callmethod(quotient522, "*", [1], call510);
                var var_x = prod524;
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
                var call525 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call527 = callmethod(this, "canvas", [0]);
                var call528 = callmethod(call527,"offsetHeight", [0]);
                onSelf = true;
                var call530 = callmethod(this, "canvas", [0]);
                var call531 = callmethod(call530,"offsetTop", [0]);
                var call533 = callmethod(var_ev,"clientY", [0]);
                var diff535 = callmethod(call533, "-", [1], call531);
                var quotient537 = callmethod(diff535, "/", [1], call528);
                var prod539 = callmethod(quotient537, "*", [1], call525);
                var var_y = prod539;
                lineNumber = 215;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 219
                var if540 = var_done;
                lineNumber = 215
                var opresult543 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call546 = callmethod(this, "canvasWidth", [0]);
                var diff548 = callmethod(call546, "-", [1], new GraceNum(20));
                var opresult551 = callmethod(var_x, ">", [1], diff548);
                var opresult553 = callmethod(opresult551, "&&", [1], opresult543);
                if (Grace_isTrue(opresult553)) {
                  lineNumber = 216
                  var call554 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 217
                  onSelf = true;
                  var call555 = callmethod(this, "stop", [0]);
                  if540 = call555;
                }
                return if540;
              };
              var_mouseDownListener = block509;
              lineNumber = 220
              var string556 = new GraceString("mousedown");
              onSelf = true;
              var call557 = callmethod(this, "canvas", [0]);
              var call558 = callmethod(call557,"addEventListener", [2], string556, var_mouseDownListener);
              lineNumber = 230
              var block559 = Grace_allocObject();
              block559.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block559.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block559.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block559.methods["match"] = GraceBlock_match;
              block559.methods["prefix?"] = GraceBlock_lift;
              block559.receiver = this;
              block559.className = 'block<kitty:230>';
              block559.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 228
                var if560 = var_done;
                lineNumber = 225
                var call562 = callmethod(var_ev,"keyCode", [0]);
                var opresult564 = callmethod(call562, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult564)) {
                  lineNumber = 226
                  onSelf = true;
                  var call565 = callmethod(this, "stop", [0]);
                  if560 = call565;
                }
                lineNumber = 229
                lineNumber = 225
                lineNumber = 228
                var call566 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call567 = callmethod(this, "currentKeyDown:=", [1], call566);
                return call567;
              };
              var_keyDownListener = block559;
              lineNumber = 230
              var string568 = new GraceString("keydown");
              onSelf = true;
              var call569 = callmethod(this, "document", [0]);
              var call570 = callmethod(call569,"addEventListener", [2], string568, var_keyDownListener);
              lineNumber = 236
              var block571 = Grace_allocObject();
              block571.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block571.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block571.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block571.methods["match"] = GraceBlock_match;
              block571.methods["prefix?"] = GraceBlock_lift;
              block571.receiver = this;
              block571.className = 'block<kitty:236>';
              block571.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 235
                lineNumber = 228
                lineNumber = 235
                lineNumber = 234
                var call572 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call573 = callmethod(this, "currentKeyDown:=", [1], call572);
                return call573;
              };
              var_keyUpListener = block571;
              lineNumber = 236
              var string574 = new GraceString("keyup");
              onSelf = true;
              var call575 = callmethod(this, "document", [0]);
              var call576 = callmethod(call575,"addEventListener", [2], string574, var_keyUpListener);
              lineNumber = 238
              lineNumber = 228
              lineNumber = 238
              var string577 = new GraceString("canvas");
              var call578 = callmethod(var_dom,"document", [0]);
              var call579 = callmethod(call578,"createElement", [1], string577);
              onSelf = true;
              var call580 = callmethod(this, "backingCanvas:=", [1], call579);
              lineNumber = 240
              lineNumber = 238
              lineNumber = 239
              onSelf = true;
              var call581 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call582 = callmethod(this, "backingCanvas", [0]);
              var call583 = callmethod(call582,"height:=", [1], call581);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 240
              onSelf = true;
              var call584 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call585 = callmethod(this, "backingCanvas", [0]);
              var call586 = callmethod(call585,"width:=", [1], call584);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 241
              var string587 = new GraceString("2d");
              onSelf = true;
              var call588 = callmethod(this, "backingCanvas", [0]);
              var call589 = callmethod(call588,"getContext", [1], string587);
              onSelf = true;
              var call590 = callmethod(this, "backingContext:=", [1], call589);
              lineNumber = 242
              lineNumber = 238
              lineNumber = 242
              var string591 = new GraceString("2d");
              onSelf = true;
              var call592 = callmethod(this, "canvas", [0]);
              var call593 = callmethod(call592,"getContext", [1], string591);
              onSelf = true;
              var call594 = callmethod(this, "mctx:=", [1], call593);
              lineNumber = 245
              var string595 = new GraceString("doggo.jpg");
              onSelf = true;
              var call596 = callmethod(this, "setBackground", [1], string595);
              lineNumber = 248
              var string597 = new GraceString("test");
              var call598 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call599 = callmethod(call598, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call600 = callmethod(call599, "Entity()foo()bar", [1, 1, 1], string597, new GraceNum(64), new GraceNum(64));
              var var_ent = call600;
              lineNumber = 248;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_ent)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'ent' to be of type Unknown"))
              lineNumber = 256
              lineNumber = 248
              lineNumber = 250
              var bool601 = new GraceBoolean(true)
              onSelf = true;
              var call602 = callmethod(this, "isInit:=", [1], bool601);
              return call602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func493.paramCounts = [
            0,
          ];
          func493.variableArities = [
            false,
          ];
          obj491.methods["init"] = func493;
          func493.definitionLine = 194;
          func493.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 262
              lineNumber = 248
              lineNumber = 261
              var bool604 = new GraceBoolean(true)
              onSelf = true;
              var call605 = callmethod(this, "isRunning:=", [1], bool604);
              lineNumber = 262
              var block606 = Grace_allocObject();
              block606.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block606.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block606.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block606.methods["match"] = GraceBlock_match;
              block606.methods["prefix?"] = GraceBlock_lift;
              block606.receiver = this;
              block606.className = 'block<kitty:262>';
              block606.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call607 = callmethod(this, "isRunning", [0]);
                return call607;
              };
              lineNumber = 266
              var block608 = Grace_allocObject();
              block608.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block608.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block608.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block608.methods["match"] = GraceBlock_match;
              block608.methods["prefix?"] = GraceBlock_lift;
              block608.receiver = this;
              block608.className = 'block<kitty:266>';
              block608.real = function(
              ) {
                sourceObject = this;
                lineNumber = 263
                onSelf = true;
                var call609 = callmethod(this, "update", [0]);
                return call609;
              };
              lineNumber = 262
              var call610 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block606, new GraceNum(10), block608);
              return call610
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
          obj491.methods["start"] = func603;
          func603.definitionLine = 259;
          func603.definitionModule = "kitty";
          var func611 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 248
              lineNumber = 274
              onSelf = true;
              var call612 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call613 = callmethod(this, "mctx", [0]);
              var call614 = callmethod(call613,"fillStyle:=", [1], call612);
              lineNumber = 275
              onSelf = true;
              var call615 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call616 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call617 = callmethod(this, "mctx", [0]);
              var call618 = callmethod(call617,"fillRect", [4], new GraceNum(0), new GraceNum(0), call615, call616);
              lineNumber = 276
              onSelf = true;
              var call619 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call620 = callmethod(this, "mctx", [0]);
              var call621 = callmethod(call620,"drawImage", [3], call619, new GraceNum(0), new GraceNum(0));
              lineNumber = 277
              onSelf = true;
              var call622 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call624 = callmethod(this, "canvasWidth", [0]);
              var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
              onSelf = true;
              var call628 = callmethod(this, "canvasHeight", [0]);
              var quotient630 = callmethod(call628, "/", [1], new GraceNum(2));
              onSelf = true;
              var call631 = callmethod(this, "background", [0]);
              var call632 = callmethod(call631,"draw", [4], call622, quotient626, quotient630, new GraceNum(0));
              lineNumber = 280
              onSelf = true;
              var call633 = callmethod(this, "entities", [0]);
              lineNumber = 286
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
              block634.className = 'block<kitty:286>';
              block634.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 281
                var call635 = callmethod(var_entity,"update", [0]);
                lineNumber = 282
                onSelf = true;
                var call636 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call638 = callmethod(this, "canvasWidth", [0]);
                var quotient640 = callmethod(call638, "/", [1], new GraceNum(2));
                onSelf = true;
                var call642 = callmethod(this, "canvasHeight", [0]);
                var quotient644 = callmethod(call642, "/", [1], new GraceNum(2));
                var call645 = callmethod(var_entity,"draw", [3], call636, quotient640, quotient644);
                return call645;
              };
              var call646 = callmethod(Grace_prelude,"for()do", [1, 1], call633, block634);
              return call646
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func611.paramCounts = [
            0,
          ];
          func611.variableArities = [
            false,
          ];
          obj491.methods["update"] = func611;
          func611.definitionLine = 269;
          func611.definitionModule = "kitty";
          var func647 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func647.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              var string648 = new GraceString("WORLD STOPPING...");
              var call649 = Grace_print(string648);
              lineNumber = 291
              lineNumber = 281
              lineNumber = 290
              var bool650 = new GraceBoolean(false)
              onSelf = true;
              var call651 = callmethod(this, "isRunning:=", [1], bool650);
              lineNumber = 291
              var string652 = new GraceString("mousedown");
              onSelf = true;
              var call653 = callmethod(this, "canvas", [0]);
              var call654 = callmethod(call653,"removeEventListener", [2], string652, var_mouseDownListener);
              lineNumber = 292
              var string655 = new GraceString("keydown");
              onSelf = true;
              var call656 = callmethod(this, "document", [0]);
              var call657 = callmethod(call656,"removeEventListener", [2], string655, var_keyDownListener);
              lineNumber = 293
              var string658 = new GraceString("keyup");
              onSelf = true;
              var call659 = callmethod(this, "document", [0]);
              var call660 = callmethod(call659,"removeEventListener", [2], string658, var_keyUpListener);
              return call660
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func647.paramCounts = [
            0,
          ];
          func647.variableArities = [
            false,
          ];
          obj491.methods["stop"] = func647;
          func647.definitionLine = 288;
          func647.definitionModule = "kitty";
          var func661 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func661.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 297
              onSelf = true;
              var call662 = callmethod(this, "currentKeyDown", [0]);
              var opresult665 = callmethod(var_key, "==", [1], call662);
              return opresult665
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func661.paramCounts = [
            1,
          ];
          func661.variableArities = [
            false,
          ];
          obj491.methods["isKeyDown"] = func661;
          func661.definitionLine = 296;
          func661.definitionModule = "kitty";
          var func666 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func666.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              lineNumber = 281
              lineNumber = 301
              onSelf = true;
              var call667 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call668 = callmethod(this, "canvasHeight", [0]);
              var call669 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call670 = callmethod(call669, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call671 = callmethod(call670, "Image()width()height", [1, 1, 1], var_url, call667, call668);
              onSelf = true;
              var call672 = callmethod(this, "background:=", [1], call671);
              return call672
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func666.paramCounts = [
            1,
          ];
          func666.variableArities = [
            false,
          ];
          obj491.methods["setBackground"] = func666;
          func666.definitionLine = 300;
          func666.definitionModule = "kitty";
          var func673 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func673.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 305
              onSelf = true;
              var call674 = callmethod(this, "entities", [0]);
              var call675 = callmethod(call674,"push", [1], var_e);
              return call675
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func673.paramTypes = [];
          func673.paramTypes.push([]);
          func673.paramCounts = [
            1,
          ];
          func673.variableArities = [
            false,
          ];
          obj491.methods["addEntity"] = func673;
          func673.definitionLine = 304;
          func673.definitionModule = "kitty";
          var func676 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func676.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              lineNumber = 309
              onSelf = true;
              var call677 = callmethod(this, "mctx", [0]);
              return call677
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func676.paramCounts = [
            0,
          ];
          func676.variableArities = [
            false,
          ];
          obj491.methods["getContext"] = func676;
          func676.definitionLine = 308;
          func676.definitionModule = "kitty";
          sourceObject = obj491;
          obj491.data["background"] = undefined;
          var reader_kitty_background_678 = function() {
            return this.data["background"];
          }
          obj491.methods["background"] = reader_kitty_background_678;
          obj491.data["background"] = undefined;
          var writer_kitty_background_678 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj491.methods["background:="] = writer_kitty_background_678;
          reader_kitty_background_678.confidential = true;
          writer_kitty_background_678.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 171
          var string679 = new GraceString("black");
          obj491.data["backgroundColour"] = string679;
          var reader_kitty_backgroundColour_680 = function() {
            return this.data["backgroundColour"];
          }
          obj491.methods["backgroundColour"] = reader_kitty_backgroundColour_680;
          obj491.data["backgroundColour"] = string679;
          var writer_kitty_backgroundColour_680 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj491.methods["backgroundColour:="] = writer_kitty_backgroundColour_680;
          reader_kitty_backgroundColour_680.confidential = true;
          writer_kitty_backgroundColour_680.confidential = true;
          lineNumber = 173;
          moduleName = "kitty";
          lineNumber = 171
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string679)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["document"] = undefined;
          var reader_kitty_document_681 = function() {
            return this.data["document"];
          }
          obj491.methods["document"] = reader_kitty_document_681;
          obj491.data["document"] = undefined;
          var writer_kitty_document_681 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj491.methods["document:="] = writer_kitty_document_681;
          reader_kitty_document_681.confidential = true;
          writer_kitty_document_681.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_682 = function() {
            return this.data["backingCanvas"];
          }
          obj491.methods["backingCanvas"] = reader_kitty_backingCanvas_682;
          obj491.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_682 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj491.methods["backingCanvas:="] = writer_kitty_backingCanvas_682;
          reader_kitty_backingCanvas_682.confidential = true;
          writer_kitty_backingCanvas_682.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["backingContext"] = undefined;
          var reader_kitty_backingContext_683 = function() {
            return this.data["backingContext"];
          }
          obj491.methods["backingContext"] = reader_kitty_backingContext_683;
          obj491.data["backingContext"] = undefined;
          var writer_kitty_backingContext_683 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj491.methods["backingContext:="] = writer_kitty_backingContext_683;
          reader_kitty_backingContext_683.confidential = true;
          writer_kitty_backingContext_683.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["canvas"] = undefined;
          var reader_kitty_canvas_684 = function() {
            return this.data["canvas"];
          }
          obj491.methods["canvas"] = reader_kitty_canvas_684;
          obj491.data["canvas"] = undefined;
          var writer_kitty_canvas_684 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj491.methods["canvas:="] = writer_kitty_canvas_684;
          reader_kitty_canvas_684.confidential = true;
          writer_kitty_canvas_684.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_685 = function() {
            return this.data["canvasWidth"];
          }
          obj491.methods["canvasWidth"] = reader_kitty_canvasWidth_685;
          obj491.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_685 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj491.methods["canvasWidth:="] = writer_kitty_canvasWidth_685;
          reader_kitty_canvasWidth_685.confidential = true;
          writer_kitty_canvasWidth_685.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_686 = function() {
            return this.data["canvasHeight"];
          }
          obj491.methods["canvasHeight"] = reader_kitty_canvasHeight_686;
          obj491.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_686 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj491.methods["canvasHeight:="] = writer_kitty_canvasHeight_686;
          reader_kitty_canvasHeight_686.confidential = true;
          writer_kitty_canvasHeight_686.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 182
          var call687 = callmethod(var_collections,"list", [0]);
          var call688 = callmethod(call687,"new", [0]);
          obj491.data["entities"] = call688;
          var reader_kitty_entities_689 = function() {
            return this.data["entities"];
          }
          obj491.methods["entities"] = reader_kitty_entities_689;
          obj491.data["entities"] = call688;
          var writer_kitty_entities_689 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj491.methods["entities:="] = writer_kitty_entities_689;
          reader_kitty_entities_689.confidential = true;
          writer_kitty_entities_689.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call688)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 184
          var bool690 = new GraceBoolean(false)
          obj491.data["isInit"] = bool690;
          var reader_kitty_isInit_691 = function() {
            return this.data["isInit"];
          }
          obj491.methods["isInit"] = reader_kitty_isInit_691;
          obj491.data["isInit"] = bool690;
          var writer_kitty_isInit_691 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj491.methods["isInit:="] = writer_kitty_isInit_691;
          reader_kitty_isInit_691.confidential = true;
          writer_kitty_isInit_691.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool690)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 185
          var bool692 = new GraceBoolean(false)
          obj491.data["isRunning"] = bool692;
          var reader_kitty_isRunning_693 = function() {
            return this.data["isRunning"];
          }
          obj491.methods["isRunning"] = reader_kitty_isRunning_693;
          obj491.data["isRunning"] = bool692;
          var writer_kitty_isRunning_693 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj491.methods["isRunning:="] = writer_kitty_isRunning_693;
          reader_kitty_isRunning_693.confidential = true;
          writer_kitty_isRunning_693.confidential = true;
          lineNumber = 187;
          moduleName = "kitty";
          lineNumber = 185
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool692)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj491.mutable = true;
          sourceObject = obj491;
          obj491.data["mctx"] = undefined;
          var reader_kitty_mctx_694 = function() {
            return this.data["mctx"];
          }
          obj491.methods["mctx"] = reader_kitty_mctx_694;
          obj491.data["mctx"] = undefined;
          var writer_kitty_mctx_694 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj491.methods["mctx:="] = writer_kitty_mctx_694;
          reader_kitty_mctx_694.confidential = true;
          writer_kitty_mctx_694.confidential = true;
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 191
          lineNumber = 189
          var call695 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj491.data["currentKeyDown"] = call695;
          var reader_kitty_currentKeyDown_696 = function() {
            return this.data["currentKeyDown"];
          }
          obj491.methods["currentKeyDown"] = reader_kitty_currentKeyDown_696;
          obj491.data["currentKeyDown"] = call695;
          var writer_kitty_currentKeyDown_696 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj491.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_696;
          reader_kitty_currentKeyDown_696.confidential = true;
          writer_kitty_currentKeyDown_696.confidential = true;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 189
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call695)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj491.mutable = true;
          sourceObject = obj491;
          lineNumber = 191
          onSelf = true;
          var call697 = callmethod(this, "init", [0]);
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          sourceObject = obj491;
          superDepth = origSuperDepth;
        }
        obj_init_491.apply(obj491, []);
        return obj491
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func490.paramCounts = [
      0,
    ];
    func490.variableArities = [
      false,
    ];
    obj488.methods["new"] = func490;
    func490.definitionLine = 166;
    func490.definitionModule = "kitty";
    var func698 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj699 = Grace_allocObject();
        obj699.definitionModule = "kitty";
        obj699.definitionLine = 166;
        var inho699 = inheritingObject;
        while (inho699.superobj) inho699 = inho699.superobj;
        inho699.superobj = obj699;
        obj699.data = inheritingObject.data;
        obj699.outer = this;
        var reader_kitty_outer_700 = function() {
          return this.outer;
        }
        obj699.methods["outer"] = reader_kitty_outer_700;
        function obj_init_699() {
          var origSuperDepth = superDepth;
          superDepth = obj699;
          obj699.annotations = [];
          var func701 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func701.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              var if702 = var_done;
              lineNumber = 198
              onSelf = true;
              var call703 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call703)) {
                lineNumber = 200
                lineNumber = 199
                var bool704 = new GraceBoolean(false)
                return bool704
              }
              lineNumber = 203
              lineNumber = 182
              lineNumber = 202
              var call705 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call706 = callmethod(this, "document:=", [1], call705);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              var string707 = new GraceString("standard-canvas");
              onSelf = true;
              var call708 = callmethod(this, "document", [0]);
              var call709 = callmethod(call708,"getElementById", [1], string707);
              onSelf = true;
              var call710 = callmethod(this, "canvas:=", [1], call709);
              lineNumber = 205
              lineNumber = 202
              lineNumber = 204
              onSelf = true;
              var call711 = callmethod(this, "canvas", [0]);
              var call712 = callmethod(call711,"width", [0]);
              onSelf = true;
              var call713 = callmethod(this, "canvasWidth:=", [1], call712);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call714 = callmethod(this, "canvas", [0]);
              var call715 = callmethod(call714,"height", [0]);
              onSelf = true;
              var call716 = callmethod(this, "canvasHeight:=", [1], call715);
              lineNumber = 220
              var block717 = Grace_allocObject();
              block717.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block717.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block717.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block717.methods["match"] = GraceBlock_match;
              block717.methods["prefix?"] = GraceBlock_lift;
              block717.receiver = this;
              block717.className = 'block<kitty:220>';
              block717.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 211
                lineNumber = 210
                onSelf = true;
                var call718 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call720 = callmethod(this, "canvas", [0]);
                var call721 = callmethod(call720,"offsetWidth", [0]);
                onSelf = true;
                var call723 = callmethod(this, "canvas", [0]);
                var call724 = callmethod(call723,"offsetLeft", [0]);
                var call726 = callmethod(var_ev,"clientX", [0]);
                var diff728 = callmethod(call726, "-", [1], call724);
                var quotient730 = callmethod(diff728, "/", [1], call721);
                var prod732 = callmethod(quotient730, "*", [1], call718);
                var var_x = prod732;
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
                var call733 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call735 = callmethod(this, "canvas", [0]);
                var call736 = callmethod(call735,"offsetHeight", [0]);
                onSelf = true;
                var call738 = callmethod(this, "canvas", [0]);
                var call739 = callmethod(call738,"offsetTop", [0]);
                var call741 = callmethod(var_ev,"clientY", [0]);
                var diff743 = callmethod(call741, "-", [1], call739);
                var quotient745 = callmethod(diff743, "/", [1], call736);
                var prod747 = callmethod(quotient745, "*", [1], call733);
                var var_y = prod747;
                lineNumber = 215;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 219
                var if748 = var_done;
                lineNumber = 215
                var opresult751 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call754 = callmethod(this, "canvasWidth", [0]);
                var diff756 = callmethod(call754, "-", [1], new GraceNum(20));
                var opresult759 = callmethod(var_x, ">", [1], diff756);
                var opresult761 = callmethod(opresult759, "&&", [1], opresult751);
                if (Grace_isTrue(opresult761)) {
                  lineNumber = 216
                  var call762 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 217
                  onSelf = true;
                  var call763 = callmethod(this, "stop", [0]);
                  if748 = call763;
                }
                return if748;
              };
              var_mouseDownListener = block717;
              lineNumber = 220
              var string764 = new GraceString("mousedown");
              onSelf = true;
              var call765 = callmethod(this, "canvas", [0]);
              var call766 = callmethod(call765,"addEventListener", [2], string764, var_mouseDownListener);
              lineNumber = 230
              var block767 = Grace_allocObject();
              block767.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block767.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block767.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block767.methods["match"] = GraceBlock_match;
              block767.methods["prefix?"] = GraceBlock_lift;
              block767.receiver = this;
              block767.className = 'block<kitty:230>';
              block767.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 228
                var if768 = var_done;
                lineNumber = 225
                var call770 = callmethod(var_ev,"keyCode", [0]);
                var opresult772 = callmethod(call770, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult772)) {
                  lineNumber = 226
                  onSelf = true;
                  var call773 = callmethod(this, "stop", [0]);
                  if768 = call773;
                }
                lineNumber = 229
                lineNumber = 225
                lineNumber = 228
                var call774 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call775 = callmethod(this, "currentKeyDown:=", [1], call774);
                return call775;
              };
              var_keyDownListener = block767;
              lineNumber = 230
              var string776 = new GraceString("keydown");
              onSelf = true;
              var call777 = callmethod(this, "document", [0]);
              var call778 = callmethod(call777,"addEventListener", [2], string776, var_keyDownListener);
              lineNumber = 236
              var block779 = Grace_allocObject();
              block779.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block779.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block779.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block779.methods["match"] = GraceBlock_match;
              block779.methods["prefix?"] = GraceBlock_lift;
              block779.receiver = this;
              block779.className = 'block<kitty:236>';
              block779.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 235
                lineNumber = 228
                lineNumber = 235
                lineNumber = 234
                var call780 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call781 = callmethod(this, "currentKeyDown:=", [1], call780);
                return call781;
              };
              var_keyUpListener = block779;
              lineNumber = 236
              var string782 = new GraceString("keyup");
              onSelf = true;
              var call783 = callmethod(this, "document", [0]);
              var call784 = callmethod(call783,"addEventListener", [2], string782, var_keyUpListener);
              lineNumber = 238
              lineNumber = 228
              lineNumber = 238
              var string785 = new GraceString("canvas");
              var call786 = callmethod(var_dom,"document", [0]);
              var call787 = callmethod(call786,"createElement", [1], string785);
              onSelf = true;
              var call788 = callmethod(this, "backingCanvas:=", [1], call787);
              lineNumber = 240
              lineNumber = 238
              lineNumber = 239
              onSelf = true;
              var call789 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call790 = callmethod(this, "backingCanvas", [0]);
              var call791 = callmethod(call790,"height:=", [1], call789);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 240
              onSelf = true;
              var call792 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call793 = callmethod(this, "backingCanvas", [0]);
              var call794 = callmethod(call793,"width:=", [1], call792);
              lineNumber = 241
              lineNumber = 238
              lineNumber = 241
              var string795 = new GraceString("2d");
              onSelf = true;
              var call796 = callmethod(this, "backingCanvas", [0]);
              var call797 = callmethod(call796,"getContext", [1], string795);
              onSelf = true;
              var call798 = callmethod(this, "backingContext:=", [1], call797);
              lineNumber = 242
              lineNumber = 238
              lineNumber = 242
              var string799 = new GraceString("2d");
              onSelf = true;
              var call800 = callmethod(this, "canvas", [0]);
              var call801 = callmethod(call800,"getContext", [1], string799);
              onSelf = true;
              var call802 = callmethod(this, "mctx:=", [1], call801);
              lineNumber = 245
              var string803 = new GraceString("doggo.jpg");
              onSelf = true;
              var call804 = callmethod(this, "setBackground", [1], string803);
              lineNumber = 248
              var string805 = new GraceString("test");
              var call806 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call807 = callmethod(call806, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call808 = callmethod(call807, "Entity()foo()bar", [1, 1, 1], string805, new GraceNum(64), new GraceNum(64));
              var var_ent = call808;
              lineNumber = 248;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_ent)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'ent' to be of type Unknown"))
              lineNumber = 256
              lineNumber = 248
              lineNumber = 250
              var bool809 = new GraceBoolean(true)
              onSelf = true;
              var call810 = callmethod(this, "isInit:=", [1], bool809);
              return call810
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func701.paramCounts = [
            0,
          ];
          func701.variableArities = [
            false,
          ];
          obj699.methods["init"] = func701;
          func701.definitionLine = 194;
          func701.definitionModule = "kitty";
          var func811 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func811.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 262
              lineNumber = 248
              lineNumber = 261
              var bool812 = new GraceBoolean(true)
              onSelf = true;
              var call813 = callmethod(this, "isRunning:=", [1], bool812);
              lineNumber = 262
              var block814 = Grace_allocObject();
              block814.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block814.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block814.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block814.methods["match"] = GraceBlock_match;
              block814.methods["prefix?"] = GraceBlock_lift;
              block814.receiver = this;
              block814.className = 'block<kitty:262>';
              block814.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call815 = callmethod(this, "isRunning", [0]);
                return call815;
              };
              lineNumber = 266
              var block816 = Grace_allocObject();
              block816.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block816.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block816.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block816.methods["match"] = GraceBlock_match;
              block816.methods["prefix?"] = GraceBlock_lift;
              block816.receiver = this;
              block816.className = 'block<kitty:266>';
              block816.real = function(
              ) {
                sourceObject = this;
                lineNumber = 263
                onSelf = true;
                var call817 = callmethod(this, "update", [0]);
                return call817;
              };
              lineNumber = 262
              var call818 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block814, new GraceNum(10), block816);
              return call818
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func811.paramCounts = [
            0,
          ];
          func811.variableArities = [
            false,
          ];
          obj699.methods["start"] = func811;
          func811.definitionLine = 259;
          func811.definitionModule = "kitty";
          var func819 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func819.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 248
              lineNumber = 274
              onSelf = true;
              var call820 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call821 = callmethod(this, "mctx", [0]);
              var call822 = callmethod(call821,"fillStyle:=", [1], call820);
              lineNumber = 275
              onSelf = true;
              var call823 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call824 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call825 = callmethod(this, "mctx", [0]);
              var call826 = callmethod(call825,"fillRect", [4], new GraceNum(0), new GraceNum(0), call823, call824);
              lineNumber = 276
              onSelf = true;
              var call827 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call828 = callmethod(this, "mctx", [0]);
              var call829 = callmethod(call828,"drawImage", [3], call827, new GraceNum(0), new GraceNum(0));
              lineNumber = 277
              onSelf = true;
              var call830 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call832 = callmethod(this, "canvasWidth", [0]);
              var quotient834 = callmethod(call832, "/", [1], new GraceNum(2));
              onSelf = true;
              var call836 = callmethod(this, "canvasHeight", [0]);
              var quotient838 = callmethod(call836, "/", [1], new GraceNum(2));
              onSelf = true;
              var call839 = callmethod(this, "background", [0]);
              var call840 = callmethod(call839,"draw", [4], call830, quotient834, quotient838, new GraceNum(0));
              lineNumber = 280
              onSelf = true;
              var call841 = callmethod(this, "entities", [0]);
              lineNumber = 286
              var block842 = Grace_allocObject();
              block842.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block842.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block842.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block842.methods["match"] = GraceBlock_match;
              block842.methods["prefix?"] = GraceBlock_lift;
              block842.receiver = this;
              block842.className = 'block<kitty:286>';
              block842.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 281
                var call843 = callmethod(var_entity,"update", [0]);
                lineNumber = 282
                onSelf = true;
                var call844 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call846 = callmethod(this, "canvasWidth", [0]);
                var quotient848 = callmethod(call846, "/", [1], new GraceNum(2));
                onSelf = true;
                var call850 = callmethod(this, "canvasHeight", [0]);
                var quotient852 = callmethod(call850, "/", [1], new GraceNum(2));
                var call853 = callmethod(var_entity,"draw", [3], call844, quotient848, quotient852);
                return call853;
              };
              var call854 = callmethod(Grace_prelude,"for()do", [1, 1], call841, block842);
              return call854
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func819.paramCounts = [
            0,
          ];
          func819.variableArities = [
            false,
          ];
          obj699.methods["update"] = func819;
          func819.definitionLine = 269;
          func819.definitionModule = "kitty";
          var func855 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func855.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              var string856 = new GraceString("WORLD STOPPING...");
              var call857 = Grace_print(string856);
              lineNumber = 291
              lineNumber = 281
              lineNumber = 290
              var bool858 = new GraceBoolean(false)
              onSelf = true;
              var call859 = callmethod(this, "isRunning:=", [1], bool858);
              lineNumber = 291
              var string860 = new GraceString("mousedown");
              onSelf = true;
              var call861 = callmethod(this, "canvas", [0]);
              var call862 = callmethod(call861,"removeEventListener", [2], string860, var_mouseDownListener);
              lineNumber = 292
              var string863 = new GraceString("keydown");
              onSelf = true;
              var call864 = callmethod(this, "document", [0]);
              var call865 = callmethod(call864,"removeEventListener", [2], string863, var_keyDownListener);
              lineNumber = 293
              var string866 = new GraceString("keyup");
              onSelf = true;
              var call867 = callmethod(this, "document", [0]);
              var call868 = callmethod(call867,"removeEventListener", [2], string866, var_keyUpListener);
              return call868
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
          obj699.methods["stop"] = func855;
          func855.definitionLine = 288;
          func855.definitionModule = "kitty";
          var func869 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func869.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 297
              onSelf = true;
              var call870 = callmethod(this, "currentKeyDown", [0]);
              var opresult873 = callmethod(var_key, "==", [1], call870);
              return opresult873
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func869.paramCounts = [
            1,
          ];
          func869.variableArities = [
            false,
          ];
          obj699.methods["isKeyDown"] = func869;
          func869.definitionLine = 296;
          func869.definitionModule = "kitty";
          var func874 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func874.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              lineNumber = 281
              lineNumber = 301
              onSelf = true;
              var call875 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call876 = callmethod(this, "canvasHeight", [0]);
              var call877 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call878 = callmethod(call877, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call879 = callmethod(call878, "Image()width()height", [1, 1, 1], var_url, call875, call876);
              onSelf = true;
              var call880 = callmethod(this, "background:=", [1], call879);
              return call880
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func874.paramCounts = [
            1,
          ];
          func874.variableArities = [
            false,
          ];
          obj699.methods["setBackground"] = func874;
          func874.definitionLine = 300;
          func874.definitionModule = "kitty";
          var func881 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func881.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 305
              onSelf = true;
              var call882 = callmethod(this, "entities", [0]);
              var call883 = callmethod(call882,"push", [1], var_e);
              return call883
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func881.paramTypes = [];
          func881.paramTypes.push([]);
          func881.paramCounts = [
            1,
          ];
          func881.variableArities = [
            false,
          ];
          obj699.methods["addEntity"] = func881;
          func881.definitionLine = 304;
          func881.definitionModule = "kitty";
          var func884 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func884.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 310
              lineNumber = 309
              onSelf = true;
              var call885 = callmethod(this, "mctx", [0]);
              return call885
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func884.paramCounts = [
            0,
          ];
          func884.variableArities = [
            false,
          ];
          obj699.methods["getContext"] = func884;
          func884.definitionLine = 308;
          func884.definitionModule = "kitty";
          sourceObject = obj699;
          obj699.data["background"] = undefined;
          var reader_kitty_background_886 = function() {
            return this.data["background"];
          }
          obj699.methods["background"] = reader_kitty_background_886;
          obj699.data["background"] = undefined;
          var writer_kitty_background_886 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj699.methods["background:="] = writer_kitty_background_886;
          reader_kitty_background_886.confidential = true;
          writer_kitty_background_886.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 171
          var string887 = new GraceString("black");
          obj699.data["backgroundColour"] = string887;
          var reader_kitty_backgroundColour_888 = function() {
            return this.data["backgroundColour"];
          }
          obj699.methods["backgroundColour"] = reader_kitty_backgroundColour_888;
          obj699.data["backgroundColour"] = string887;
          var writer_kitty_backgroundColour_888 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj699.methods["backgroundColour:="] = writer_kitty_backgroundColour_888;
          reader_kitty_backgroundColour_888.confidential = true;
          writer_kitty_backgroundColour_888.confidential = true;
          lineNumber = 173;
          moduleName = "kitty";
          lineNumber = 171
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string887)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["document"] = undefined;
          var reader_kitty_document_889 = function() {
            return this.data["document"];
          }
          obj699.methods["document"] = reader_kitty_document_889;
          obj699.data["document"] = undefined;
          var writer_kitty_document_889 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj699.methods["document:="] = writer_kitty_document_889;
          reader_kitty_document_889.confidential = true;
          writer_kitty_document_889.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_890 = function() {
            return this.data["backingCanvas"];
          }
          obj699.methods["backingCanvas"] = reader_kitty_backingCanvas_890;
          obj699.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_890 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj699.methods["backingCanvas:="] = writer_kitty_backingCanvas_890;
          reader_kitty_backingCanvas_890.confidential = true;
          writer_kitty_backingCanvas_890.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["backingContext"] = undefined;
          var reader_kitty_backingContext_891 = function() {
            return this.data["backingContext"];
          }
          obj699.methods["backingContext"] = reader_kitty_backingContext_891;
          obj699.data["backingContext"] = undefined;
          var writer_kitty_backingContext_891 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj699.methods["backingContext:="] = writer_kitty_backingContext_891;
          reader_kitty_backingContext_891.confidential = true;
          writer_kitty_backingContext_891.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["canvas"] = undefined;
          var reader_kitty_canvas_892 = function() {
            return this.data["canvas"];
          }
          obj699.methods["canvas"] = reader_kitty_canvas_892;
          obj699.data["canvas"] = undefined;
          var writer_kitty_canvas_892 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj699.methods["canvas:="] = writer_kitty_canvas_892;
          reader_kitty_canvas_892.confidential = true;
          writer_kitty_canvas_892.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_893 = function() {
            return this.data["canvasWidth"];
          }
          obj699.methods["canvasWidth"] = reader_kitty_canvasWidth_893;
          obj699.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_893 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj699.methods["canvasWidth:="] = writer_kitty_canvasWidth_893;
          reader_kitty_canvasWidth_893.confidential = true;
          writer_kitty_canvasWidth_893.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_894 = function() {
            return this.data["canvasHeight"];
          }
          obj699.methods["canvasHeight"] = reader_kitty_canvasHeight_894;
          obj699.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_894 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj699.methods["canvasHeight:="] = writer_kitty_canvasHeight_894;
          reader_kitty_canvasHeight_894.confidential = true;
          writer_kitty_canvasHeight_894.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 182
          var call895 = callmethod(var_collections,"list", [0]);
          var call896 = callmethod(call895,"new", [0]);
          obj699.data["entities"] = call896;
          var reader_kitty_entities_897 = function() {
            return this.data["entities"];
          }
          obj699.methods["entities"] = reader_kitty_entities_897;
          obj699.data["entities"] = call896;
          var writer_kitty_entities_897 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj699.methods["entities:="] = writer_kitty_entities_897;
          reader_kitty_entities_897.confidential = true;
          writer_kitty_entities_897.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call896)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 184
          var bool898 = new GraceBoolean(false)
          obj699.data["isInit"] = bool898;
          var reader_kitty_isInit_899 = function() {
            return this.data["isInit"];
          }
          obj699.methods["isInit"] = reader_kitty_isInit_899;
          obj699.data["isInit"] = bool898;
          var writer_kitty_isInit_899 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj699.methods["isInit:="] = writer_kitty_isInit_899;
          reader_kitty_isInit_899.confidential = true;
          writer_kitty_isInit_899.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool898)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 185
          var bool900 = new GraceBoolean(false)
          obj699.data["isRunning"] = bool900;
          var reader_kitty_isRunning_901 = function() {
            return this.data["isRunning"];
          }
          obj699.methods["isRunning"] = reader_kitty_isRunning_901;
          obj699.data["isRunning"] = bool900;
          var writer_kitty_isRunning_901 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj699.methods["isRunning:="] = writer_kitty_isRunning_901;
          reader_kitty_isRunning_901.confidential = true;
          writer_kitty_isRunning_901.confidential = true;
          lineNumber = 187;
          moduleName = "kitty";
          lineNumber = 185
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool900)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj699.mutable = true;
          sourceObject = obj699;
          obj699.data["mctx"] = undefined;
          var reader_kitty_mctx_902 = function() {
            return this.data["mctx"];
          }
          obj699.methods["mctx"] = reader_kitty_mctx_902;
          obj699.data["mctx"] = undefined;
          var writer_kitty_mctx_902 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj699.methods["mctx:="] = writer_kitty_mctx_902;
          reader_kitty_mctx_902.confidential = true;
          writer_kitty_mctx_902.confidential = true;
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 191
          lineNumber = 189
          var call903 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj699.data["currentKeyDown"] = call903;
          var reader_kitty_currentKeyDown_904 = function() {
            return this.data["currentKeyDown"];
          }
          obj699.methods["currentKeyDown"] = reader_kitty_currentKeyDown_904;
          obj699.data["currentKeyDown"] = call903;
          var writer_kitty_currentKeyDown_904 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj699.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_904;
          reader_kitty_currentKeyDown_904.confidential = true;
          writer_kitty_currentKeyDown_904.confidential = true;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 189
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call903)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj699.mutable = true;
          sourceObject = obj699;
          lineNumber = 191
          onSelf = true;
          var call905 = callmethod(this, "init", [0]);
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          sourceObject = obj699;
          superDepth = origSuperDepth;
        }
        obj_init_699.apply(inheritingObject, []);
        return obj699
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj488.methods["new()object"] = func698;
    var func906 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 166
        var string907 = new GraceString("class KittyWorld");
        return string907
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func906.paramCounts = [
    ];
    func906.variableArities = [
    ];
    obj488.methods["asDebugString"] = func906;
    func906.definitionLine = 166;
    func906.definitionModule = "kitty";
    sourceObject = obj488;
    sourceObject = obj488;
    superDepth = origSuperDepth;
  }
  obj_init_488.apply(obj488, []);
  var var_KittyWorld = obj488;
  lineNumber = 314
  lineNumber = 323
  lineNumber = 338
  lineNumber = 343
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh-methods:\n Image()width()height\n Entity()foo()bar\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyEntity\n Entity()foo()bar\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nmethods-of:KittyWorld.new:\n isRunning\n isKeyDown\n update\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n backingContext\n canvasHeight\n getContext\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n entities:=\n mctx\n document\n init\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas:=\n start\n document:=\nconstructors-of:KittyEntity:\n new\nfresh:Entity()foo()bar:\n update\n strafe\n onDestroy\n awake\n setAction\n image\n start\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n move\n draw\n setImage\n rotation\n getRotation\n image:=\npath:\n kitty\nconstructors-of:KittyImage:\n new\nconfidential:\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconstructors-of:KittyWorld:\n new\nfresh:World:\n isRunning\n isKeyDown\n update\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n init\n canvasHeight\n getContext\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n entities:=\n mctx\n document\n backingContext\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas:=\n start\n document:=\nfresh:Image()width()height:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image\n strafe\n onDestroy\n awake\n setAction\n update\n draw\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n getRotation\n start\n setImage\n rotation\n move\n image:=\n";
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
    "class KittyEntity.new(tag', x', y') {",
    "    ",
    "    print \"CREATING ENTITY AT ({x'}, {y'})...\"",
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
    "method Entity(tag)foo(x')bar(y') {",
    "    object {",
    "        inherits KittyEntity.new(tag, x', y')",
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
    "        var ent := Entity(\"test\")foo(64)bar(64)",
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
