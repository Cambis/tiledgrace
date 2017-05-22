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
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (x)"));
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func8.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (y)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 160
      var string9 = new GraceString("HERE");
      var call10 = Grace_print(string9);
      lineNumber = 161
      var obj11 = Grace_allocObject();
      obj11.definitionModule = "kitty";
      obj11.definitionLine = 161;
      obj11.outer = this;
      var reader_kitty_outer_12 = function() {
        return this.outer;
      }
      obj11.methods["outer"] = reader_kitty_outer_12;
      function obj_init_11() {
        var origSuperDepth = superDepth;
        superDepth = obj11;
        obj11.annotations = [];
        sourceObject = obj11;
        lineNumber = 162
        onSelf = true;
        var call13 = callmethod(this, "tag", [0]);
        var call14 = callmethod(var_KittyEntity,"new()object", [3, 1], call13, var_x__39__, var_y__39__, this);
        obj11.superobj = call14;
        obj11._value = call14._value;
        superDepth = origSuperDepth;
      }
      obj_init_11.apply(obj11, []);
      lineNumber = 164
      var string15 = new GraceString("GUMMON");
      var call16 = Grace_print(string15);
      return call16
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
  func8.definitionLine = 159;
  func8.definitionModule = "kitty";
  var func17 = function(argcv) {
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
      lineNumber = 160
      var string18 = new GraceString("HERE");
      var call19 = Grace_print(string18);
      lineNumber = 161
      var obj20 = Grace_allocObject();
      obj20.definitionModule = "kitty";
      obj20.definitionLine = 161;
      obj20.outer = this;
      var reader_kitty_outer_21 = function() {
        return this.outer;
      }
      obj20.methods["outer"] = reader_kitty_outer_21;
      function obj_init_20() {
        var origSuperDepth = superDepth;
        superDepth = obj20;
        obj20.annotations = [];
        sourceObject = obj20;
        lineNumber = 162
        onSelf = true;
        var call22 = callmethod(this, "tag", [0]);
        var call23 = callmethod(var_KittyEntity,"new()object", [3, 1], call22, var_x__39__, var_y__39__, this);
        obj20.superobj = call23;
        obj20._value = call23._value;
        superDepth = origSuperDepth;
      }
      obj_init_20.apply(obj20, []);
      lineNumber = 164
      var string24 = new GraceString("GUMMON");
      var call25 = Grace_print(string24);
      return call25
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()x()y()object"] = func17;
  lineNumber = 313
  var func26 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 314
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 314;
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
        lineNumber = 315
        var call29 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj27.superobj = call29;
        obj27._value = call29._value;
        superDepth = origSuperDepth;
      }
      obj_init_27.apply(obj27, []);
      return obj27
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
  this.methods["World"] = func26;
  func26.definitionLine = 313;
  func26.definitionModule = "kitty";
  var func30 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj31 = Grace_allocObject();
      obj31.definitionModule = "kitty";
      obj31.definitionLine = 314;
      var inho31 = inheritingObject;
      while (inho31.superobj) inho31 = inho31.superobj;
      inho31.superobj = obj31;
      obj31.data = inheritingObject.data;
      obj31.outer = this;
      var reader_kitty_outer_32 = function() {
        return this.outer;
      }
      obj31.methods["outer"] = reader_kitty_outer_32;
      function obj_init_31() {
        var origSuperDepth = superDepth;
        superDepth = obj31;
        obj31.annotations = [];
        sourceObject = obj31;
        var call33 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj31.superobj = call33;
        obj31._value = call33._value;
        superDepth = origSuperDepth;
      }
      obj_init_31.apply(inheritingObject, []);
      return obj31
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func30;
  lineNumber = 322
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 324
      var string35 = new GraceString("CHECKING...");
      var call36 = Grace_print(string35);
      lineNumber = 331
      var if37 = var_done;
      lineNumber = 326
      var call38 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call38)) {
        lineNumber = 327
        var string39 = new GraceString("NO WORLD!!");
        var call40 = Grace_print(string39);
        lineNumber = 329
        return var_done
      }
      lineNumber = 331
      var string41 = new GraceString("STARTING...");
      var call42 = Grace_print(string41);
      lineNumber = 334
      var call43 = callmethod(var_m__95__world,"start", [0]);
      return call43
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func34.paramCounts = [
    0,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["start"] = func34;
  func34.definitionLine = 322;
  func34.definitionModule = "kitty";
  lineNumber = 337
  var func44 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 339
      lineNumber = 338
      var_m__95__world = var_world__39__;
      lineNumber = 340
      lineNumber = 339
      var bool45 = new GraceBoolean(true)
      var_worldSet = bool45;
      return bool45
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func44.paramTypes = [];
  func44.paramTypes.push([]);
  func44.paramCounts = [
    1,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func44;
  func44.definitionLine = 337;
  func44.definitionModule = "kitty";
  lineNumber = 342
  var func46 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 343
      onSelf = true;
      var call47 = callmethod(this, "start", [0]);
      return call47
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func46;
  func46.definitionLine = 342;
  func46.definitionModule = "kitty";
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
  var call48 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call48;
  this.data = call48.data;
  this._value = call48._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 334
  var func49 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    0,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["m_world"] = func49;
  func49.definitionLine = 334;
  func49.definitionModule = "kitty";
  lineNumber = 334
  var func50 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    1,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func50;
  func50.definitionLine = 334;
  func50.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool51 = new GraceBoolean(false)
  var var_worldSet = bool51;
  lineNumber = 334
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func52;
  func52.definitionLine = 334;
  func52.definitionModule = "kitty";
  lineNumber = 334
  var func53 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    1,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func53;
  func53.definitionLine = 334;
  func53.definitionModule = "kitty";
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
  lineNumber = 334
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
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
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func54;
  func54.definitionLine = 334;
  func54.definitionModule = "kitty";
  lineNumber = 334
  var func55 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func55.paramCounts[0])
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
  func55.paramCounts = [
    1,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func55;
  func55.definitionLine = 334;
  func55.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 334
  var func56 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func56.paramCounts[0])
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
  func56.paramCounts = [
    0,
  ];
  func56.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func56;
  func56.definitionLine = 334;
  func56.definitionModule = "kitty";
  lineNumber = 334
  var func57 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func57.paramCounts[0])
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
  func57.paramCounts = [
    1,
  ];
  func57.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func57;
  func57.definitionLine = 334;
  func57.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 334
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    0,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func58;
  func58.definitionLine = 334;
  func58.definitionModule = "kitty";
  lineNumber = 334
  var func59 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    1,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func59;
  func59.definitionLine = 334;
  func59.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call60 = callmethod(var_dom,"window", [0]);
  var call61 = callmethod(call60,"Math", [0]);
  var var_math = call61;
  var func62 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func62.paramCounts[0])
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
  func62.paramCounts = [
    0,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["math"] = func62;
  func62.definitionLine = 17;
  func62.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func63 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    0,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func63;
  func63.definitionLine = 22;
  func63.definitionModule = "kitty";
  var obj64 = Grace_allocObject();
  obj64.definitionModule = "kitty";
  obj64.definitionLine = 22;
  obj64.outer = this;
  var reader_kitty_outer_65 = function() {
    return this.outer;
  }
  obj64.methods["outer"] = reader_kitty_outer_65;
  function obj_init_64() {
    var origSuperDepth = superDepth;
    superDepth = obj64;
    obj64.annotations = [];
    var func66 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func66.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj67 = Grace_allocObject();
        obj67.definitionModule = "kitty";
        obj67.definitionLine = 22;
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
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func69.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call70 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call71 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod75 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient77 = callmethod(prod75, "/", [1], new GraceNum(180));
              var call78 = callmethod(var_ctx,"rotate", [1], quotient77);
              lineNumber = 40
              onSelf = true;
              var call79 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block80 = Grace_allocObject();
              block80.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block80.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block80.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block80.methods["match"] = GraceBlock_match;
              block80.methods["prefix?"] = GraceBlock_lift;
              block80.receiver = this;
              block80.className = 'block<kitty:43>';
              block80.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call82 = callmethod(this, "width", [0]);
                var call83 = callmethod(call82,"prefix-", [0]);
                var quotient85 = callmethod(call83, "/", [1], new GraceNum(2));
                onSelf = true;
                var call87 = callmethod(this, "height", [0]);
                var call88 = callmethod(call87,"prefix-", [0]);
                var quotient90 = callmethod(call88, "/", [1], new GraceNum(2));
                onSelf = true;
                var call91 = callmethod(this, "width", [0]);
                onSelf = true;
                var call92 = callmethod(this, "height", [0]);
                var call93 = callmethod(var_ctx,"drawImage", [5], var_element, quotient85, quotient90, call91, call92);
                return call93;
              };
              var call94 = callmethod(Grace_prelude,"for()do", [1, 1], call79, block80);
              lineNumber = 43
              var call95 = callmethod(var_ctx,"restore", [0]);
              return call95
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func69.paramCounts = [
            4,
          ];
          func69.variableArities = [
            false,
          ];
          obj67.methods["draw"] = func69;
          func69.definitionLine = 34;
          func69.definitionModule = "kitty";
          var func96 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func96.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call97 = callmethod(this, "imgTag", [0]);
              return call97
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func96.paramCounts = [
            0,
          ];
          func96.variableArities = [
            false,
          ];
          obj67.methods["getTag"] = func96;
          func96.definitionLine = 47;
          func96.definitionModule = "kitty";
          var func98 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func98.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call99 = callmethod(this, "elements", [0]);
              var call100 = callmethod(call99,"push", [1], var_imgTag__39__);
              return call100
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func98.paramCounts = [
            1,
          ];
          func98.variableArities = [
            false,
          ];
          obj67.methods["drawImage"] = func98;
          func98.definitionLine = 51;
          func98.definitionModule = "kitty";
          sourceObject = obj67;
          lineNumber = 25
          var string101 = new GraceString("img");
          var call102 = callmethod(var_dom,"document", [0]);
          var call103 = callmethod(call102,"createElement", [1], string101);
          obj67.data["imgTag"] = call103;
          var reader_kitty_imgTag_104 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_104.def = true;
          reader_kitty_imgTag_104.confidential = true;
          obj67.methods["imgTag"] = reader_kitty_imgTag_104;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call103)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj67;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call105 = callmethod(this, "imgTag", [0]);
          var call106 = callmethod(call105,"src:=", [1], var_url__39__);
          sourceObject = obj67;
          lineNumber = 28
          var call107 = callmethod(var_collections,"list", [0]);
          var call108 = callmethod(call107,"new", [0]);
          obj67.data["elements"] = call108;
          var reader_kitty_elements_109 = function() {
            return this.data["elements"];
          }
          obj67.methods["elements"] = reader_kitty_elements_109;
          obj67.data["elements"] = call108;
          var writer_kitty_elements_109 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj67.methods["elements:="] = writer_kitty_elements_109;
          reader_kitty_elements_109.confidential = true;
          writer_kitty_elements_109.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call108)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj67.mutable = true;
          sourceObject = obj67;
          lineNumber = 29
          onSelf = true;
          var call110 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call111 = callmethod(this, "elements", [0]);
          var call112 = callmethod(call111,"push", [1], call110);
          sourceObject = obj67;
          lineNumber = 31
          obj67.data["height"] = var_height__39__;
          var reader_kitty_height_113 = function() {
            return this.data["height"];
          }
          obj67.methods["height"] = reader_kitty_height_113;
          obj67.data["height"] = var_height__39__;
          var writer_kitty_height_113 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj67.methods["height:="] = writer_kitty_height_113;
          reader_kitty_height_113.confidential = true;
          writer_kitty_height_113.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj67.mutable = true;
          sourceObject = obj67;
          lineNumber = 32
          obj67.data["width"] = var_width__39__;
          var reader_kitty_width_114 = function() {
            return this.data["width"];
          }
          obj67.methods["width"] = reader_kitty_width_114;
          obj67.data["width"] = var_width__39__;
          var writer_kitty_width_114 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj67.methods["width:="] = writer_kitty_width_114;
          reader_kitty_width_114.confidential = true;
          writer_kitty_width_114.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj67.mutable = true;
          sourceObject = obj67;
          sourceObject = obj67;
          sourceObject = obj67;
          superDepth = origSuperDepth;
        }
        obj_init_67.apply(obj67, []);
        return obj67
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func66.paramCounts = [
      3,
    ];
    func66.variableArities = [
      false,
    ];
    obj64.methods["new"] = func66;
    func66.definitionLine = 22;
    func66.definitionModule = "kitty";
    var func115 = function(argcv) {
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
        var obj116 = Grace_allocObject();
        obj116.definitionModule = "kitty";
        obj116.definitionLine = 22;
        var inho116 = inheritingObject;
        while (inho116.superobj) inho116 = inho116.superobj;
        inho116.superobj = obj116;
        obj116.data = inheritingObject.data;
        obj116.outer = this;
        var reader_kitty_outer_117 = function() {
          return this.outer;
        }
        obj116.methods["outer"] = reader_kitty_outer_117;
        function obj_init_116() {
          var origSuperDepth = superDepth;
          superDepth = obj116;
          obj116.annotations = [];
          var func118 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func118.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call119 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call120 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod124 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient126 = callmethod(prod124, "/", [1], new GraceNum(180));
              var call127 = callmethod(var_ctx,"rotate", [1], quotient126);
              lineNumber = 40
              onSelf = true;
              var call128 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block129 = Grace_allocObject();
              block129.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block129.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block129.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block129.methods["match"] = GraceBlock_match;
              block129.methods["prefix?"] = GraceBlock_lift;
              block129.receiver = this;
              block129.className = 'block<kitty:43>';
              block129.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call131 = callmethod(this, "width", [0]);
                var call132 = callmethod(call131,"prefix-", [0]);
                var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
                onSelf = true;
                var call136 = callmethod(this, "height", [0]);
                var call137 = callmethod(call136,"prefix-", [0]);
                var quotient139 = callmethod(call137, "/", [1], new GraceNum(2));
                onSelf = true;
                var call140 = callmethod(this, "width", [0]);
                onSelf = true;
                var call141 = callmethod(this, "height", [0]);
                var call142 = callmethod(var_ctx,"drawImage", [5], var_element, quotient134, quotient139, call140, call141);
                return call142;
              };
              var call143 = callmethod(Grace_prelude,"for()do", [1, 1], call128, block129);
              lineNumber = 43
              var call144 = callmethod(var_ctx,"restore", [0]);
              return call144
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func118.paramCounts = [
            4,
          ];
          func118.variableArities = [
            false,
          ];
          obj116.methods["draw"] = func118;
          func118.definitionLine = 34;
          func118.definitionModule = "kitty";
          var func145 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func145.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call146 = callmethod(this, "imgTag", [0]);
              return call146
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func145.paramCounts = [
            0,
          ];
          func145.variableArities = [
            false,
          ];
          obj116.methods["getTag"] = func145;
          func145.definitionLine = 47;
          func145.definitionModule = "kitty";
          var func147 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func147.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call148 = callmethod(this, "elements", [0]);
              var call149 = callmethod(call148,"push", [1], var_imgTag__39__);
              return call149
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func147.paramCounts = [
            1,
          ];
          func147.variableArities = [
            false,
          ];
          obj116.methods["drawImage"] = func147;
          func147.definitionLine = 51;
          func147.definitionModule = "kitty";
          sourceObject = obj116;
          lineNumber = 25
          var string150 = new GraceString("img");
          var call151 = callmethod(var_dom,"document", [0]);
          var call152 = callmethod(call151,"createElement", [1], string150);
          obj116.data["imgTag"] = call152;
          var reader_kitty_imgTag_153 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_153.def = true;
          reader_kitty_imgTag_153.confidential = true;
          obj116.methods["imgTag"] = reader_kitty_imgTag_153;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call152)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj116;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call154 = callmethod(this, "imgTag", [0]);
          var call155 = callmethod(call154,"src:=", [1], var_url__39__);
          sourceObject = obj116;
          lineNumber = 28
          var call156 = callmethod(var_collections,"list", [0]);
          var call157 = callmethod(call156,"new", [0]);
          obj116.data["elements"] = call157;
          var reader_kitty_elements_158 = function() {
            return this.data["elements"];
          }
          obj116.methods["elements"] = reader_kitty_elements_158;
          obj116.data["elements"] = call157;
          var writer_kitty_elements_158 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj116.methods["elements:="] = writer_kitty_elements_158;
          reader_kitty_elements_158.confidential = true;
          writer_kitty_elements_158.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call157)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj116.mutable = true;
          sourceObject = obj116;
          lineNumber = 29
          onSelf = true;
          var call159 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call160 = callmethod(this, "elements", [0]);
          var call161 = callmethod(call160,"push", [1], call159);
          sourceObject = obj116;
          lineNumber = 31
          obj116.data["height"] = var_height__39__;
          var reader_kitty_height_162 = function() {
            return this.data["height"];
          }
          obj116.methods["height"] = reader_kitty_height_162;
          obj116.data["height"] = var_height__39__;
          var writer_kitty_height_162 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj116.methods["height:="] = writer_kitty_height_162;
          reader_kitty_height_162.confidential = true;
          writer_kitty_height_162.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj116.mutable = true;
          sourceObject = obj116;
          lineNumber = 32
          obj116.data["width"] = var_width__39__;
          var reader_kitty_width_163 = function() {
            return this.data["width"];
          }
          obj116.methods["width"] = reader_kitty_width_163;
          obj116.data["width"] = var_width__39__;
          var writer_kitty_width_163 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj116.methods["width:="] = writer_kitty_width_163;
          reader_kitty_width_163.confidential = true;
          writer_kitty_width_163.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj116.mutable = true;
          sourceObject = obj116;
          sourceObject = obj116;
          sourceObject = obj116;
          superDepth = origSuperDepth;
        }
        obj_init_116.apply(inheritingObject, []);
        return obj116
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj64.methods["new()object"] = func115;
    var func164 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string165 = new GraceString("class KittyImage");
        return string165
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func164.paramCounts = [
    ];
    func164.variableArities = [
    ];
    obj64.methods["asDebugString"] = func164;
    func164.definitionLine = 22;
    func164.definitionModule = "kitty";
    sourceObject = obj64;
    sourceObject = obj64;
    superDepth = origSuperDepth;
  }
  obj_init_64.apply(obj64, []);
  var var_KittyImage = obj64;
  lineNumber = 58
  lineNumber = 65
  var func166 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func166.paramCounts[0])
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
  func166.paramCounts = [
    0,
  ];
  func166.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func166;
  func166.definitionLine = 65;
  func166.definitionModule = "kitty";
  var obj167 = Grace_allocObject();
  obj167.definitionModule = "kitty";
  obj167.definitionLine = 65;
  obj167.outer = this;
  var reader_kitty_outer_168 = function() {
    return this.outer;
  }
  obj167.methods["outer"] = reader_kitty_outer_168;
  function obj_init_167() {
    var origSuperDepth = superDepth;
    superDepth = obj167;
    obj167.annotations = [];
    var func169 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func169.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj170 = Grace_allocObject();
        obj170.definitionModule = "kitty";
        obj170.definitionLine = 65;
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
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string173 = new GraceString("realyee.png");
              onSelf = true;
              var call174 = callmethod(this, "createImage", [1], string173);
              return call174
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func172.paramCounts = [
            0,
          ];
          func172.variableArities = [
            false,
          ];
          obj170.methods["awake"] = func172;
          func172.definitionLine = 85;
          func172.definitionModule = "kitty";
          var func175 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func175.paramCounts[0])
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
          func175.paramCounts = [
            0,
          ];
          func175.variableArities = [
            false,
          ];
          obj170.methods["start"] = func175;
          func175.definitionLine = 91;
          func175.definitionModule = "kitty";
          var func176 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func176.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call177 = callmethod(this, "action", [0]);
              var call178 = callmethod(call177,"update", [0]);
              return call178
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func176.paramCounts = [
            0,
          ];
          func176.variableArities = [
            false,
          ];
          obj170.methods["update"] = func176;
          func176.definitionLine = 96;
          func176.definitionModule = "kitty";
          var func179 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func179.paramCounts[0])
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
          func179.paramCounts = [
            0,
          ];
          func179.variableArities = [
            false,
          ];
          obj170.methods["onDestroy"] = func179;
          func179.definitionLine = 101;
          func179.definitionModule = "kitty";
          var func180 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func180.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call183 = callmethod(this, "rotation", [0]);
              var prod185 = callmethod(call183, "*", [1], new GraceNum(3.14159));
              var quotient187 = callmethod(prod185, "/", [1], new GraceNum(180));
              var call188 = callmethod(var_math,"cos", [1], quotient187);
              var prod191 = callmethod(var_distance, "*", [1], call188);
              onSelf = true;
              var call193 = callmethod(this, "posX", [0]);
              var opresult195 = callmethod(call193, "+", [1], prod191);
              onSelf = true;
              var call196 = callmethod(this, "posX:=", [1], opresult195);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call199 = callmethod(this, "rotation", [0]);
              var prod201 = callmethod(call199, "*", [1], new GraceNum(3.14159));
              var quotient203 = callmethod(prod201, "/", [1], new GraceNum(180));
              var call204 = callmethod(var_math,"sin", [1], quotient203);
              var prod207 = callmethod(var_distance, "*", [1], call204);
              onSelf = true;
              var call209 = callmethod(this, "posY", [0]);
              var opresult211 = callmethod(call209, "+", [1], prod207);
              onSelf = true;
              var call212 = callmethod(this, "posY:=", [1], opresult211);
              return call212
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func180.paramCounts = [
            1,
          ];
          func180.variableArities = [
            false,
          ];
          obj170.methods["move"] = func180;
          func180.definitionLine = 105;
          func180.definitionModule = "kitty";
          var func213 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func213.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call216 = callmethod(this, "rotation", [0]);
              var opresult219 = callmethod(new GraceNum(90), "+", [1], call216);
              var prod221 = callmethod(opresult219, "*", [1], new GraceNum(3.14159));
              var quotient223 = callmethod(prod221, "/", [1], new GraceNum(180));
              var call224 = callmethod(var_math,"cos", [1], quotient223);
              var prod227 = callmethod(var_distance, "*", [1], call224);
              onSelf = true;
              var call229 = callmethod(this, "posX", [0]);
              var opresult231 = callmethod(call229, "+", [1], prod227);
              onSelf = true;
              var call232 = callmethod(this, "posX:=", [1], opresult231);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call235 = callmethod(this, "rotation", [0]);
              var opresult238 = callmethod(new GraceNum(90), "+", [1], call235);
              var prod240 = callmethod(opresult238, "*", [1], new GraceNum(3.14159));
              var quotient242 = callmethod(prod240, "/", [1], new GraceNum(180));
              var call243 = callmethod(var_math,"sin", [1], quotient242);
              var prod246 = callmethod(var_distance, "*", [1], call243);
              onSelf = true;
              var call248 = callmethod(this, "posY", [0]);
              var opresult250 = callmethod(call248, "+", [1], prod246);
              onSelf = true;
              var call251 = callmethod(this, "posY:=", [1], opresult250);
              return call251
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func213.paramCounts = [
            1,
          ];
          func213.variableArities = [
            false,
          ];
          obj170.methods["strafe"] = func213;
          func213.definitionLine = 110;
          func213.definitionModule = "kitty";
          var func252 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func252.paramCounts[0])
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
              var call254 = callmethod(this, "rotation", [0]);
              var opresult256 = callmethod(call254, "+", [1], var_angle);
              onSelf = true;
              var call257 = callmethod(this, "rotation:=", [1], opresult256);
              return call257
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func252.paramCounts = [
            1,
          ];
          func252.variableArities = [
            false,
          ];
          obj170.methods["turn"] = func252;
          func252.definitionLine = 115;
          func252.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call259 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call260 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call261 = callmethod(this, "posY", [0]);
              var call262 = callmethod(var_ctx,"translate", [2], call260, call261);
              lineNumber = 122
              onSelf = true;
              var call263 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call264 = callmethod(this, "image", [0]);
              var call265 = callmethod(call264,"draw", [4], var_ctx, var_dx, var_dy, call263);
              lineNumber = 123
              var call266 = callmethod(var_ctx,"restore", [0]);
              return call266
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            3,
          ];
          func258.variableArities = [
            false,
          ];
          obj170.methods["draw"] = func258;
          func258.definitionLine = 119;
          func258.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call268 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call269 = callmethod(call268, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call270 = callmethod(call269, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call271 = callmethod(this, "image:=", [1], call270);
              return call271
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func267.paramCounts = [
            1,
          ];
          func267.variableArities = [
            false,
          ];
          obj170.methods["createImage"] = func267;
          func267.definitionLine = 126;
          func267.definitionModule = "kitty";
          var func272 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call273 = callmethod(this, "image:=", [1], var_image__39__);
              return call273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func272.paramCounts = [
            1,
          ];
          func272.variableArities = [
            false,
          ];
          obj170.methods["setImage"] = func272;
          func272.definitionLine = 130;
          func272.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call275 = callmethod(this, "action:=", [1], var_action__39__);
              return call275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func274.paramCounts = [
            1,
          ];
          func274.variableArities = [
            false,
          ];
          obj170.methods["setAction"] = func274;
          func274.definitionLine = 134;
          func274.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call277 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call278 = callmethod(this, "posY:=", [1], var_y);
              return call278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            2,
          ];
          func276.variableArities = [
            false,
          ];
          obj170.methods["setLocation"] = func276;
          func276.definitionLine = 138;
          func276.definitionModule = "kitty";
          var func279 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call280 = callmethod(this, "posX", [0]);
              return call280
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func279.paramCounts = [
            0,
          ];
          func279.variableArities = [
            false,
          ];
          obj170.methods["getX"] = func279;
          func279.definitionLine = 143;
          func279.definitionModule = "kitty";
          var func281 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func281.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call282 = callmethod(this, "posY", [0]);
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
          obj170.methods["getY"] = func281;
          func281.definitionLine = 147;
          func281.definitionModule = "kitty";
          var func283 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call284 = callmethod(this, "rotation", [0]);
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
          obj170.methods["getRotation"] = func283;
          func283.definitionLine = 151;
          func283.definitionModule = "kitty";
          sourceObject = obj170;
          lineNumber = 67
          var string285 = new GraceString(")...");
          var string288 = new GraceString(", ");
          var string291 = new GraceString("CREATING ENTITY AT (");
          var opresult293 = callmethod(string291, "++", [1], var_x__39__);
          var opresult295 = callmethod(opresult293, "++", [1], string288);
          var opresult297 = callmethod(opresult295, "++", [1], var_y__39__);
          var opresult299 = callmethod(opresult297, "++", [1], string285);
          var call300 = Grace_print(opresult299);
          sourceObject = obj170;
          lineNumber = 69
          obj170.data["tag"] = var_tag__39__;
          var reader_kitty_tag_301 = function() {
            return this.data["tag"];
          }
          obj170.methods["tag"] = reader_kitty_tag_301;
          obj170.data["tag"] = var_tag__39__;
          var writer_kitty_tag_301 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj170.methods["tag:="] = writer_kitty_tag_301;
          reader_kitty_tag_301.confidential = true;
          writer_kitty_tag_301.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj170.mutable = true;
          sourceObject = obj170;
          lineNumber = 70
          obj170.data["posX"] = var_x__39__;
          var reader_kitty_posX_302 = function() {
            return this.data["posX"];
          }
          obj170.methods["posX"] = reader_kitty_posX_302;
          obj170.data["posX"] = var_x__39__;
          var writer_kitty_posX_302 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj170.methods["posX:="] = writer_kitty_posX_302;
          reader_kitty_posX_302.confidential = true;
          writer_kitty_posX_302.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj170.mutable = true;
          sourceObject = obj170;
          lineNumber = 71
          obj170.data["posY"] = var_y__39__;
          var reader_kitty_posY_303 = function() {
            return this.data["posY"];
          }
          obj170.methods["posY"] = reader_kitty_posY_303;
          obj170.data["posY"] = var_y__39__;
          var writer_kitty_posY_303 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj170.methods["posY:="] = writer_kitty_posY_303;
          reader_kitty_posY_303.confidential = true;
          writer_kitty_posY_303.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj170.mutable = true;
          sourceObject = obj170;
          lineNumber = 72
          obj170.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_304 = function() {
            return this.data["rotation"];
          }
          obj170.methods["rotation"] = reader_kitty_rotation_304;
          obj170.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_304 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj170.methods["rotation:="] = writer_kitty_rotation_304;
          reader_kitty_rotation_304.confidential = true;
          writer_kitty_rotation_304.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj170.mutable = true;
          sourceObject = obj170;
          lineNumber = 74
          var obj305 = Grace_allocObject();
          obj305.definitionModule = "kitty";
          obj305.definitionLine = 74;
          obj305.outer = this;
          var reader_kitty_outer_306 = function() {
            return this.outer;
          }
          obj305.methods["outer"] = reader_kitty_outer_306;
          function obj_init_305() {
            var origSuperDepth = superDepth;
            superDepth = obj305;
            obj305.annotations = [];
            var func307 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func307.paramCounts[0])
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
            func307.paramCounts = [
              0,
            ];
            func307.variableArities = [
              false,
            ];
            obj305.methods["update"] = func307;
            func307.definitionLine = 75;
            func307.definitionModule = "kitty";
            sourceObject = obj305;
            superDepth = origSuperDepth;
          }
          obj_init_305.apply(obj305, []);
          obj170.data["action"] = obj305;
          var reader_kitty_action_308 = function() {
            return this.data["action"];
          }
          obj170.methods["action"] = reader_kitty_action_308;
          obj170.data["action"] = obj305;
          var writer_kitty_action_308 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj170.methods["action:="] = writer_kitty_action_308;
          reader_kitty_action_308.confidential = true;
          writer_kitty_action_308.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj305)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj170.mutable = true;
          sourceObject = obj170;
          obj170.data["image"] = undefined;
          var reader_kitty_image_309 = function() {
            return this.data["image"];
          }
          obj170.methods["image"] = reader_kitty_image_309;
          obj170.data["image"] = undefined;
          var writer_kitty_image_309 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj170.methods["image:="] = writer_kitty_image_309;
          reader_kitty_image_309.confidential = true;
          writer_kitty_image_309.confidential = true;
          obj170.mutable = true;
          sourceObject = obj170;
          lineNumber = 82
          onSelf = true;
          var call310 = callmethod(this, "awake", [0]);
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          sourceObject = obj170;
          lineNumber = 156
          var string311 = new GraceString("ENTITY CREATED");
          var call312 = Grace_print(string311);
          superDepth = origSuperDepth;
        }
        obj_init_170.apply(obj170, []);
        return obj170
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func169.paramCounts = [
      3,
    ];
    func169.variableArities = [
      false,
    ];
    obj167.methods["new"] = func169;
    func169.definitionLine = 65;
    func169.definitionModule = "kitty";
    var func313 = function(argcv) {
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
        var obj314 = Grace_allocObject();
        obj314.definitionModule = "kitty";
        obj314.definitionLine = 65;
        var inho314 = inheritingObject;
        while (inho314.superobj) inho314 = inho314.superobj;
        inho314.superobj = obj314;
        obj314.data = inheritingObject.data;
        obj314.outer = this;
        var reader_kitty_outer_315 = function() {
          return this.outer;
        }
        obj314.methods["outer"] = reader_kitty_outer_315;
        function obj_init_314() {
          var origSuperDepth = superDepth;
          superDepth = obj314;
          obj314.annotations = [];
          var func316 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string317 = new GraceString("realyee.png");
              onSelf = true;
              var call318 = callmethod(this, "createImage", [1], string317);
              return call318
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func316.paramCounts = [
            0,
          ];
          func316.variableArities = [
            false,
          ];
          obj314.methods["awake"] = func316;
          func316.definitionLine = 85;
          func316.definitionModule = "kitty";
          var func319 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func319.paramCounts[0])
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
          func319.paramCounts = [
            0,
          ];
          func319.variableArities = [
            false,
          ];
          obj314.methods["start"] = func319;
          func319.definitionLine = 91;
          func319.definitionModule = "kitty";
          var func320 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call321 = callmethod(this, "action", [0]);
              var call322 = callmethod(call321,"update", [0]);
              return call322
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func320.paramCounts = [
            0,
          ];
          func320.variableArities = [
            false,
          ];
          obj314.methods["update"] = func320;
          func320.definitionLine = 96;
          func320.definitionModule = "kitty";
          var func323 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func323.paramCounts[0])
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
          func323.paramCounts = [
            0,
          ];
          func323.variableArities = [
            false,
          ];
          obj314.methods["onDestroy"] = func323;
          func323.definitionLine = 101;
          func323.definitionModule = "kitty";
          var func324 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call327 = callmethod(this, "rotation", [0]);
              var prod329 = callmethod(call327, "*", [1], new GraceNum(3.14159));
              var quotient331 = callmethod(prod329, "/", [1], new GraceNum(180));
              var call332 = callmethod(var_math,"cos", [1], quotient331);
              var prod335 = callmethod(var_distance, "*", [1], call332);
              onSelf = true;
              var call337 = callmethod(this, "posX", [0]);
              var opresult339 = callmethod(call337, "+", [1], prod335);
              onSelf = true;
              var call340 = callmethod(this, "posX:=", [1], opresult339);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call343 = callmethod(this, "rotation", [0]);
              var prod345 = callmethod(call343, "*", [1], new GraceNum(3.14159));
              var quotient347 = callmethod(prod345, "/", [1], new GraceNum(180));
              var call348 = callmethod(var_math,"sin", [1], quotient347);
              var prod351 = callmethod(var_distance, "*", [1], call348);
              onSelf = true;
              var call353 = callmethod(this, "posY", [0]);
              var opresult355 = callmethod(call353, "+", [1], prod351);
              onSelf = true;
              var call356 = callmethod(this, "posY:=", [1], opresult355);
              return call356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func324.paramCounts = [
            1,
          ];
          func324.variableArities = [
            false,
          ];
          obj314.methods["move"] = func324;
          func324.definitionLine = 105;
          func324.definitionModule = "kitty";
          var func357 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call360 = callmethod(this, "rotation", [0]);
              var opresult363 = callmethod(new GraceNum(90), "+", [1], call360);
              var prod365 = callmethod(opresult363, "*", [1], new GraceNum(3.14159));
              var quotient367 = callmethod(prod365, "/", [1], new GraceNum(180));
              var call368 = callmethod(var_math,"cos", [1], quotient367);
              var prod371 = callmethod(var_distance, "*", [1], call368);
              onSelf = true;
              var call373 = callmethod(this, "posX", [0]);
              var opresult375 = callmethod(call373, "+", [1], prod371);
              onSelf = true;
              var call376 = callmethod(this, "posX:=", [1], opresult375);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call379 = callmethod(this, "rotation", [0]);
              var opresult382 = callmethod(new GraceNum(90), "+", [1], call379);
              var prod384 = callmethod(opresult382, "*", [1], new GraceNum(3.14159));
              var quotient386 = callmethod(prod384, "/", [1], new GraceNum(180));
              var call387 = callmethod(var_math,"sin", [1], quotient386);
              var prod390 = callmethod(var_distance, "*", [1], call387);
              onSelf = true;
              var call392 = callmethod(this, "posY", [0]);
              var opresult394 = callmethod(call392, "+", [1], prod390);
              onSelf = true;
              var call395 = callmethod(this, "posY:=", [1], opresult394);
              return call395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func357.paramCounts = [
            1,
          ];
          func357.variableArities = [
            false,
          ];
          obj314.methods["strafe"] = func357;
          func357.definitionLine = 110;
          func357.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func396.paramCounts[0])
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
              var call398 = callmethod(this, "rotation", [0]);
              var opresult400 = callmethod(call398, "+", [1], var_angle);
              onSelf = true;
              var call401 = callmethod(this, "rotation:=", [1], opresult400);
              return call401
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
          obj314.methods["turn"] = func396;
          func396.definitionLine = 115;
          func396.definitionModule = "kitty";
          var func402 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func402.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call403 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call404 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call405 = callmethod(this, "posY", [0]);
              var call406 = callmethod(var_ctx,"translate", [2], call404, call405);
              lineNumber = 122
              onSelf = true;
              var call407 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call408 = callmethod(this, "image", [0]);
              var call409 = callmethod(call408,"draw", [4], var_ctx, var_dx, var_dy, call407);
              lineNumber = 123
              var call410 = callmethod(var_ctx,"restore", [0]);
              return call410
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func402.paramCounts = [
            3,
          ];
          func402.variableArities = [
            false,
          ];
          obj314.methods["draw"] = func402;
          func402.definitionLine = 119;
          func402.definitionModule = "kitty";
          var func411 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call412 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call413 = callmethod(call412, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call414 = callmethod(call413, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call415 = callmethod(this, "image:=", [1], call414);
              return call415
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func411.paramCounts = [
            1,
          ];
          func411.variableArities = [
            false,
          ];
          obj314.methods["createImage"] = func411;
          func411.definitionLine = 126;
          func411.definitionModule = "kitty";
          var func416 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func416.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call417 = callmethod(this, "image:=", [1], var_image__39__);
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
            1,
          ];
          func416.variableArities = [
            false,
          ];
          obj314.methods["setImage"] = func416;
          func416.definitionLine = 130;
          func416.definitionModule = "kitty";
          var func418 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func418.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call419 = callmethod(this, "action:=", [1], var_action__39__);
              return call419
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func418.paramCounts = [
            1,
          ];
          func418.variableArities = [
            false,
          ];
          obj314.methods["setAction"] = func418;
          func418.definitionLine = 134;
          func418.definitionModule = "kitty";
          var func420 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func420.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call421 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call422 = callmethod(this, "posY:=", [1], var_y);
              return call422
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func420.paramCounts = [
            2,
          ];
          func420.variableArities = [
            false,
          ];
          obj314.methods["setLocation"] = func420;
          func420.definitionLine = 138;
          func420.definitionModule = "kitty";
          var func423 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call424 = callmethod(this, "posX", [0]);
              return call424
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
          obj314.methods["getX"] = func423;
          func423.definitionLine = 143;
          func423.definitionModule = "kitty";
          var func425 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func425.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call426 = callmethod(this, "posY", [0]);
              return call426
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func425.paramCounts = [
            0,
          ];
          func425.variableArities = [
            false,
          ];
          obj314.methods["getY"] = func425;
          func425.definitionLine = 147;
          func425.definitionModule = "kitty";
          var func427 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func427.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call428 = callmethod(this, "rotation", [0]);
              return call428
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func427.paramCounts = [
            0,
          ];
          func427.variableArities = [
            false,
          ];
          obj314.methods["getRotation"] = func427;
          func427.definitionLine = 151;
          func427.definitionModule = "kitty";
          sourceObject = obj314;
          lineNumber = 67
          var string429 = new GraceString(")...");
          var string432 = new GraceString(", ");
          var string435 = new GraceString("CREATING ENTITY AT (");
          var opresult437 = callmethod(string435, "++", [1], var_x__39__);
          var opresult439 = callmethod(opresult437, "++", [1], string432);
          var opresult441 = callmethod(opresult439, "++", [1], var_y__39__);
          var opresult443 = callmethod(opresult441, "++", [1], string429);
          var call444 = Grace_print(opresult443);
          sourceObject = obj314;
          lineNumber = 69
          obj314.data["tag"] = var_tag__39__;
          var reader_kitty_tag_445 = function() {
            return this.data["tag"];
          }
          obj314.methods["tag"] = reader_kitty_tag_445;
          obj314.data["tag"] = var_tag__39__;
          var writer_kitty_tag_445 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj314.methods["tag:="] = writer_kitty_tag_445;
          reader_kitty_tag_445.confidential = true;
          writer_kitty_tag_445.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj314.mutable = true;
          sourceObject = obj314;
          lineNumber = 70
          obj314.data["posX"] = var_x__39__;
          var reader_kitty_posX_446 = function() {
            return this.data["posX"];
          }
          obj314.methods["posX"] = reader_kitty_posX_446;
          obj314.data["posX"] = var_x__39__;
          var writer_kitty_posX_446 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj314.methods["posX:="] = writer_kitty_posX_446;
          reader_kitty_posX_446.confidential = true;
          writer_kitty_posX_446.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj314.mutable = true;
          sourceObject = obj314;
          lineNumber = 71
          obj314.data["posY"] = var_y__39__;
          var reader_kitty_posY_447 = function() {
            return this.data["posY"];
          }
          obj314.methods["posY"] = reader_kitty_posY_447;
          obj314.data["posY"] = var_y__39__;
          var writer_kitty_posY_447 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj314.methods["posY:="] = writer_kitty_posY_447;
          reader_kitty_posY_447.confidential = true;
          writer_kitty_posY_447.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj314.mutable = true;
          sourceObject = obj314;
          lineNumber = 72
          obj314.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_448 = function() {
            return this.data["rotation"];
          }
          obj314.methods["rotation"] = reader_kitty_rotation_448;
          obj314.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_448 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj314.methods["rotation:="] = writer_kitty_rotation_448;
          reader_kitty_rotation_448.confidential = true;
          writer_kitty_rotation_448.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj314.mutable = true;
          sourceObject = obj314;
          lineNumber = 74
          var obj449 = Grace_allocObject();
          obj449.definitionModule = "kitty";
          obj449.definitionLine = 74;
          obj449.outer = this;
          var reader_kitty_outer_450 = function() {
            return this.outer;
          }
          obj449.methods["outer"] = reader_kitty_outer_450;
          function obj_init_449() {
            var origSuperDepth = superDepth;
            superDepth = obj449;
            obj449.annotations = [];
            var func451 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func451.paramCounts[0])
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
            func451.paramCounts = [
              0,
            ];
            func451.variableArities = [
              false,
            ];
            obj449.methods["update"] = func451;
            func451.definitionLine = 75;
            func451.definitionModule = "kitty";
            sourceObject = obj449;
            superDepth = origSuperDepth;
          }
          obj_init_449.apply(obj449, []);
          obj314.data["action"] = obj449;
          var reader_kitty_action_452 = function() {
            return this.data["action"];
          }
          obj314.methods["action"] = reader_kitty_action_452;
          obj314.data["action"] = obj449;
          var writer_kitty_action_452 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj314.methods["action:="] = writer_kitty_action_452;
          reader_kitty_action_452.confidential = true;
          writer_kitty_action_452.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj449)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj314.mutable = true;
          sourceObject = obj314;
          obj314.data["image"] = undefined;
          var reader_kitty_image_453 = function() {
            return this.data["image"];
          }
          obj314.methods["image"] = reader_kitty_image_453;
          obj314.data["image"] = undefined;
          var writer_kitty_image_453 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj314.methods["image:="] = writer_kitty_image_453;
          reader_kitty_image_453.confidential = true;
          writer_kitty_image_453.confidential = true;
          obj314.mutable = true;
          sourceObject = obj314;
          lineNumber = 82
          onSelf = true;
          var call454 = callmethod(this, "awake", [0]);
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          sourceObject = obj314;
          lineNumber = 156
          var string455 = new GraceString("ENTITY CREATED");
          var call456 = Grace_print(string455);
          superDepth = origSuperDepth;
        }
        obj_init_314.apply(inheritingObject, []);
        return obj314
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj167.methods["new()object"] = func313;
    var func457 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string458 = new GraceString("class KittyEntity");
        return string458
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func457.paramCounts = [
    ];
    func457.variableArities = [
    ];
    obj167.methods["asDebugString"] = func457;
    func457.definitionLine = 65;
    func457.definitionModule = "kitty";
    sourceObject = obj167;
    sourceObject = obj167;
    superDepth = origSuperDepth;
  }
  obj_init_167.apply(obj167, []);
  var var_KittyEntity = obj167;
  lineNumber = 159
  lineNumber = 168
  var func459 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func459.paramCounts[0])
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
  func459.paramCounts = [
    0,
  ];
  func459.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func459;
  func459.definitionLine = 168;
  func459.definitionModule = "kitty";
  var obj460 = Grace_allocObject();
  obj460.definitionModule = "kitty";
  obj460.definitionLine = 168;
  obj460.outer = this;
  var reader_kitty_outer_461 = function() {
    return this.outer;
  }
  obj460.methods["outer"] = reader_kitty_outer_461;
  function obj_init_460() {
    var origSuperDepth = superDepth;
    superDepth = obj460;
    obj460.annotations = [];
    var func462 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func462.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj463 = Grace_allocObject();
        obj463.definitionModule = "kitty";
        obj463.definitionLine = 168;
        obj463.outer = this;
        var reader_kitty_outer_464 = function() {
          return this.outer;
        }
        obj463.methods["outer"] = reader_kitty_outer_464;
        function obj_init_463() {
          var origSuperDepth = superDepth;
          superDepth = obj463;
          obj463.annotations = [];
          var func465 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func465.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 204
              var if466 = var_done;
              lineNumber = 200
              onSelf = true;
              var call467 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call467)) {
                lineNumber = 202
                lineNumber = 201
                var bool468 = new GraceBoolean(false)
                return bool468
              }
              lineNumber = 205
              lineNumber = 168
              lineNumber = 204
              var call469 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call470 = callmethod(this, "document:=", [1], call469);
              lineNumber = 205
              lineNumber = 204
              lineNumber = 205
              var string471 = new GraceString("standard-canvas");
              onSelf = true;
              var call472 = callmethod(this, "document", [0]);
              var call473 = callmethod(call472,"getElementById", [1], string471);
              onSelf = true;
              var call474 = callmethod(this, "canvas:=", [1], call473);
              lineNumber = 207
              lineNumber = 204
              lineNumber = 206
              onSelf = true;
              var call475 = callmethod(this, "canvas", [0]);
              var call476 = callmethod(call475,"width", [0]);
              onSelf = true;
              var call477 = callmethod(this, "canvasWidth:=", [1], call476);
              lineNumber = 210
              lineNumber = 206
              lineNumber = 207
              onSelf = true;
              var call478 = callmethod(this, "canvas", [0]);
              var call479 = callmethod(call478,"height", [0]);
              onSelf = true;
              var call480 = callmethod(this, "canvasHeight:=", [1], call479);
              lineNumber = 222
              var block481 = Grace_allocObject();
              block481.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block481.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block481.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block481.methods["match"] = GraceBlock_match;
              block481.methods["prefix?"] = GraceBlock_lift;
              block481.receiver = this;
              block481.className = 'block<kitty:222>';
              block481.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 213
                lineNumber = 212
                onSelf = true;
                var call482 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call484 = callmethod(this, "canvas", [0]);
                var call485 = callmethod(call484,"offsetWidth", [0]);
                onSelf = true;
                var call487 = callmethod(this, "canvas", [0]);
                var call488 = callmethod(call487,"offsetLeft", [0]);
                var call490 = callmethod(var_ev,"clientX", [0]);
                var diff492 = callmethod(call490, "-", [1], call488);
                var quotient494 = callmethod(diff492, "/", [1], call485);
                var prod496 = callmethod(quotient494, "*", [1], call482);
                var var_x = prod496;
                lineNumber = 213;
                moduleName = "kitty";
                lineNumber = 212
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 217
                lineNumber = 213
                onSelf = true;
                var call497 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call499 = callmethod(this, "canvas", [0]);
                var call500 = callmethod(call499,"offsetHeight", [0]);
                onSelf = true;
                var call502 = callmethod(this, "canvas", [0]);
                var call503 = callmethod(call502,"offsetTop", [0]);
                var call505 = callmethod(var_ev,"clientY", [0]);
                var diff507 = callmethod(call505, "-", [1], call503);
                var quotient509 = callmethod(diff507, "/", [1], call500);
                var prod511 = callmethod(quotient509, "*", [1], call497);
                var var_y = prod511;
                lineNumber = 217;
                moduleName = "kitty";
                lineNumber = 213
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 221
                var if512 = var_done;
                lineNumber = 217
                var opresult515 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call518 = callmethod(this, "canvasWidth", [0]);
                var diff520 = callmethod(call518, "-", [1], new GraceNum(20));
                var opresult523 = callmethod(var_x, ">", [1], diff520);
                var opresult525 = callmethod(opresult523, "&&", [1], opresult515);
                if (Grace_isTrue(opresult525)) {
                  lineNumber = 218
                  var call526 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 219
                  onSelf = true;
                  var call527 = callmethod(this, "stop", [0]);
                  if512 = call527;
                }
                return if512;
              };
              var_mouseDownListener = block481;
              lineNumber = 222
              var string528 = new GraceString("mousedown");
              onSelf = true;
              var call529 = callmethod(this, "canvas", [0]);
              var call530 = callmethod(call529,"addEventListener", [2], string528, var_mouseDownListener);
              lineNumber = 232
              var block531 = Grace_allocObject();
              block531.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block531.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block531.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block531.methods["match"] = GraceBlock_match;
              block531.methods["prefix?"] = GraceBlock_lift;
              block531.receiver = this;
              block531.className = 'block<kitty:232>';
              block531.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                var if532 = var_done;
                lineNumber = 227
                var call534 = callmethod(var_ev,"keyCode", [0]);
                var opresult536 = callmethod(call534, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult536)) {
                  lineNumber = 228
                  onSelf = true;
                  var call537 = callmethod(this, "stop", [0]);
                  if532 = call537;
                }
                lineNumber = 231
                lineNumber = 227
                lineNumber = 230
                var call538 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call539 = callmethod(this, "currentKeyDown:=", [1], call538);
                return call539;
              };
              var_keyDownListener = block531;
              lineNumber = 232
              var string540 = new GraceString("keydown");
              onSelf = true;
              var call541 = callmethod(this, "document", [0]);
              var call542 = callmethod(call541,"addEventListener", [2], string540, var_keyDownListener);
              lineNumber = 238
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
              block543.className = 'block<kitty:238>';
              block543.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 237
                lineNumber = 230
                lineNumber = 237
                lineNumber = 236
                var call544 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call545 = callmethod(this, "currentKeyDown:=", [1], call544);
                return call545;
              };
              var_keyUpListener = block543;
              lineNumber = 238
              var string546 = new GraceString("keyup");
              onSelf = true;
              var call547 = callmethod(this, "document", [0]);
              var call548 = callmethod(call547,"addEventListener", [2], string546, var_keyUpListener);
              lineNumber = 240
              lineNumber = 230
              lineNumber = 240
              var string549 = new GraceString("canvas");
              var call550 = callmethod(var_dom,"document", [0]);
              var call551 = callmethod(call550,"createElement", [1], string549);
              onSelf = true;
              var call552 = callmethod(this, "backingCanvas:=", [1], call551);
              lineNumber = 242
              lineNumber = 240
              lineNumber = 241
              onSelf = true;
              var call553 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call554 = callmethod(this, "backingCanvas", [0]);
              var call555 = callmethod(call554,"height:=", [1], call553);
              lineNumber = 243
              lineNumber = 240
              lineNumber = 242
              onSelf = true;
              var call556 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call557 = callmethod(this, "backingCanvas", [0]);
              var call558 = callmethod(call557,"width:=", [1], call556);
              lineNumber = 243
              lineNumber = 240
              lineNumber = 243
              var string559 = new GraceString("2d");
              onSelf = true;
              var call560 = callmethod(this, "backingCanvas", [0]);
              var call561 = callmethod(call560,"getContext", [1], string559);
              onSelf = true;
              var call562 = callmethod(this, "backingContext:=", [1], call561);
              lineNumber = 244
              lineNumber = 240
              lineNumber = 244
              var string563 = new GraceString("2d");
              onSelf = true;
              var call564 = callmethod(this, "canvas", [0]);
              var call565 = callmethod(call564,"getContext", [1], string563);
              onSelf = true;
              var call566 = callmethod(this, "mctx:=", [1], call565);
              lineNumber = 247
              var string567 = new GraceString("doggo.jpg");
              onSelf = true;
              var call568 = callmethod(this, "setBackground", [1], string567);
              lineNumber = 255
              lineNumber = 240
              lineNumber = 249
              var bool569 = new GraceBoolean(true)
              onSelf = true;
              var call570 = callmethod(this, "isInit:=", [1], bool569);
              return call570
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func465.paramCounts = [
            0,
          ];
          func465.variableArities = [
            false,
          ];
          obj463.methods["init"] = func465;
          func465.definitionLine = 196;
          func465.definitionModule = "kitty";
          var func571 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func571.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 240
              lineNumber = 260
              var bool572 = new GraceBoolean(true)
              onSelf = true;
              var call573 = callmethod(this, "isRunning:=", [1], bool572);
              lineNumber = 261
              var block574 = Grace_allocObject();
              block574.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block574.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block574.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block574.methods["match"] = GraceBlock_match;
              block574.methods["prefix?"] = GraceBlock_lift;
              block574.receiver = this;
              block574.className = 'block<kitty:261>';
              block574.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call575 = callmethod(this, "isRunning", [0]);
                return call575;
              };
              lineNumber = 265
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
              block576.className = 'block<kitty:265>';
              block576.real = function(
              ) {
                sourceObject = this;
                lineNumber = 262
                onSelf = true;
                var call577 = callmethod(this, "update", [0]);
                return call577;
              };
              lineNumber = 261
              var call578 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block574, new GraceNum(10), block576);
              return call578
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
          obj463.methods["start"] = func571;
          func571.definitionLine = 258;
          func571.definitionModule = "kitty";
          var func579 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func579.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              lineNumber = 240
              lineNumber = 273
              onSelf = true;
              var call580 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call581 = callmethod(this, "mctx", [0]);
              var call582 = callmethod(call581,"fillStyle:=", [1], call580);
              lineNumber = 274
              onSelf = true;
              var call583 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call584 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call585 = callmethod(this, "mctx", [0]);
              var call586 = callmethod(call585,"fillRect", [4], new GraceNum(0), new GraceNum(0), call583, call584);
              lineNumber = 275
              onSelf = true;
              var call587 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call588 = callmethod(this, "mctx", [0]);
              var call589 = callmethod(call588,"drawImage", [3], call587, new GraceNum(0), new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call590 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call592 = callmethod(this, "canvasWidth", [0]);
              var quotient594 = callmethod(call592, "/", [1], new GraceNum(2));
              onSelf = true;
              var call596 = callmethod(this, "canvasHeight", [0]);
              var quotient598 = callmethod(call596, "/", [1], new GraceNum(2));
              onSelf = true;
              var call599 = callmethod(this, "background", [0]);
              var call600 = callmethod(call599,"draw", [4], call590, quotient594, quotient598, new GraceNum(0));
              lineNumber = 279
              onSelf = true;
              var call601 = callmethod(this, "entities", [0]);
              lineNumber = 285
              var block602 = Grace_allocObject();
              block602.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block602.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block602.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block602.methods["match"] = GraceBlock_match;
              block602.methods["prefix?"] = GraceBlock_lift;
              block602.receiver = this;
              block602.className = 'block<kitty:285>';
              block602.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 280
                var call603 = callmethod(var_entity,"update", [0]);
                lineNumber = 281
                onSelf = true;
                var call604 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call606 = callmethod(this, "canvasWidth", [0]);
                var quotient608 = callmethod(call606, "/", [1], new GraceNum(2));
                onSelf = true;
                var call610 = callmethod(this, "canvasHeight", [0]);
                var quotient612 = callmethod(call610, "/", [1], new GraceNum(2));
                var call613 = callmethod(var_entity,"draw", [3], call604, quotient608, quotient612);
                return call613;
              };
              var call614 = callmethod(Grace_prelude,"for()do", [1, 1], call601, block602);
              return call614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func579.paramCounts = [
            0,
          ];
          func579.variableArities = [
            false,
          ];
          obj463.methods["update"] = func579;
          func579.definitionLine = 268;
          func579.definitionModule = "kitty";
          var func615 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func615.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              var string616 = new GraceString("WORLD STOPPING...");
              var call617 = Grace_print(string616);
              lineNumber = 290
              lineNumber = 280
              lineNumber = 289
              var bool618 = new GraceBoolean(false)
              onSelf = true;
              var call619 = callmethod(this, "isRunning:=", [1], bool618);
              lineNumber = 290
              var string620 = new GraceString("mousedown");
              onSelf = true;
              var call621 = callmethod(this, "canvas", [0]);
              var call622 = callmethod(call621,"removeEventListener", [2], string620, var_mouseDownListener);
              lineNumber = 291
              var string623 = new GraceString("keydown");
              onSelf = true;
              var call624 = callmethod(this, "document", [0]);
              var call625 = callmethod(call624,"removeEventListener", [2], string623, var_keyDownListener);
              lineNumber = 292
              var string626 = new GraceString("keyup");
              onSelf = true;
              var call627 = callmethod(this, "document", [0]);
              var call628 = callmethod(call627,"removeEventListener", [2], string626, var_keyUpListener);
              return call628
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func615.paramCounts = [
            0,
          ];
          func615.variableArities = [
            false,
          ];
          obj463.methods["stop"] = func615;
          func615.definitionLine = 287;
          func615.definitionModule = "kitty";
          var func629 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 296
              onSelf = true;
              var call630 = callmethod(this, "currentKeyDown", [0]);
              var opresult633 = callmethod(var_key, "==", [1], call630);
              return opresult633
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func629.paramCounts = [
            1,
          ];
          func629.variableArities = [
            false,
          ];
          obj463.methods["isKeyDown"] = func629;
          func629.definitionLine = 295;
          func629.definitionModule = "kitty";
          var func634 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              lineNumber = 280
              lineNumber = 300
              onSelf = true;
              var call635 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call636 = callmethod(this, "canvasHeight", [0]);
              var call637 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call638 = callmethod(call637, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call639 = callmethod(call638, "Image()width()height", [1, 1, 1], var_url, call635, call636);
              onSelf = true;
              var call640 = callmethod(this, "background:=", [1], call639);
              return call640
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func634.paramCounts = [
            1,
          ];
          func634.variableArities = [
            false,
          ];
          obj463.methods["setBackground"] = func634;
          func634.definitionLine = 299;
          func634.definitionModule = "kitty";
          var func641 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func641.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 304
              onSelf = true;
              var call642 = callmethod(this, "entities", [0]);
              var call643 = callmethod(call642,"push", [1], var_e);
              return call643
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func641.paramTypes = [];
          func641.paramTypes.push([]);
          func641.paramCounts = [
            1,
          ];
          func641.variableArities = [
            false,
          ];
          obj463.methods["addEntity"] = func641;
          func641.definitionLine = 303;
          func641.definitionModule = "kitty";
          var func644 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
              onSelf = true;
              var call645 = callmethod(this, "mctx", [0]);
              return call645
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func644.paramCounts = [
            0,
          ];
          func644.variableArities = [
            false,
          ];
          obj463.methods["getContext"] = func644;
          func644.definitionLine = 307;
          func644.definitionModule = "kitty";
          sourceObject = obj463;
          obj463.data["background"] = undefined;
          var reader_kitty_background_646 = function() {
            return this.data["background"];
          }
          obj463.methods["background"] = reader_kitty_background_646;
          obj463.data["background"] = undefined;
          var writer_kitty_background_646 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj463.methods["background:="] = writer_kitty_background_646;
          reader_kitty_background_646.confidential = true;
          writer_kitty_background_646.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 173
          var string647 = new GraceString("black");
          obj463.data["backgroundColour"] = string647;
          var reader_kitty_backgroundColour_648 = function() {
            return this.data["backgroundColour"];
          }
          obj463.methods["backgroundColour"] = reader_kitty_backgroundColour_648;
          obj463.data["backgroundColour"] = string647;
          var writer_kitty_backgroundColour_648 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj463.methods["backgroundColour:="] = writer_kitty_backgroundColour_648;
          reader_kitty_backgroundColour_648.confidential = true;
          writer_kitty_backgroundColour_648.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string647)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["document"] = undefined;
          var reader_kitty_document_649 = function() {
            return this.data["document"];
          }
          obj463.methods["document"] = reader_kitty_document_649;
          obj463.data["document"] = undefined;
          var writer_kitty_document_649 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj463.methods["document:="] = writer_kitty_document_649;
          reader_kitty_document_649.confidential = true;
          writer_kitty_document_649.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_650 = function() {
            return this.data["backingCanvas"];
          }
          obj463.methods["backingCanvas"] = reader_kitty_backingCanvas_650;
          obj463.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_650 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj463.methods["backingCanvas:="] = writer_kitty_backingCanvas_650;
          reader_kitty_backingCanvas_650.confidential = true;
          writer_kitty_backingCanvas_650.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["backingContext"] = undefined;
          var reader_kitty_backingContext_651 = function() {
            return this.data["backingContext"];
          }
          obj463.methods["backingContext"] = reader_kitty_backingContext_651;
          obj463.data["backingContext"] = undefined;
          var writer_kitty_backingContext_651 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj463.methods["backingContext:="] = writer_kitty_backingContext_651;
          reader_kitty_backingContext_651.confidential = true;
          writer_kitty_backingContext_651.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["canvas"] = undefined;
          var reader_kitty_canvas_652 = function() {
            return this.data["canvas"];
          }
          obj463.methods["canvas"] = reader_kitty_canvas_652;
          obj463.data["canvas"] = undefined;
          var writer_kitty_canvas_652 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj463.methods["canvas:="] = writer_kitty_canvas_652;
          reader_kitty_canvas_652.confidential = true;
          writer_kitty_canvas_652.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_653 = function() {
            return this.data["canvasWidth"];
          }
          obj463.methods["canvasWidth"] = reader_kitty_canvasWidth_653;
          obj463.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_653 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj463.methods["canvasWidth:="] = writer_kitty_canvasWidth_653;
          reader_kitty_canvasWidth_653.confidential = true;
          writer_kitty_canvasWidth_653.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_654 = function() {
            return this.data["canvasHeight"];
          }
          obj463.methods["canvasHeight"] = reader_kitty_canvasHeight_654;
          obj463.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_654 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj463.methods["canvasHeight:="] = writer_kitty_canvasHeight_654;
          reader_kitty_canvasHeight_654.confidential = true;
          writer_kitty_canvasHeight_654.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 184
          var call655 = callmethod(var_collections,"list", [0]);
          var call656 = callmethod(call655,"new", [0]);
          obj463.data["entities"] = call656;
          var reader_kitty_entities_657 = function() {
            return this.data["entities"];
          }
          obj463.methods["entities"] = reader_kitty_entities_657;
          obj463.data["entities"] = call656;
          var writer_kitty_entities_657 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj463.methods["entities:="] = writer_kitty_entities_657;
          reader_kitty_entities_657.confidential = true;
          writer_kitty_entities_657.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call656)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 186
          var bool658 = new GraceBoolean(false)
          obj463.data["isInit"] = bool658;
          var reader_kitty_isInit_659 = function() {
            return this.data["isInit"];
          }
          obj463.methods["isInit"] = reader_kitty_isInit_659;
          obj463.data["isInit"] = bool658;
          var writer_kitty_isInit_659 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj463.methods["isInit:="] = writer_kitty_isInit_659;
          reader_kitty_isInit_659.confidential = true;
          writer_kitty_isInit_659.confidential = true;
          lineNumber = 187;
          moduleName = "kitty";
          lineNumber = 186
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool658)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 187
          var bool660 = new GraceBoolean(false)
          obj463.data["isRunning"] = bool660;
          var reader_kitty_isRunning_661 = function() {
            return this.data["isRunning"];
          }
          obj463.methods["isRunning"] = reader_kitty_isRunning_661;
          obj463.data["isRunning"] = bool660;
          var writer_kitty_isRunning_661 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj463.methods["isRunning:="] = writer_kitty_isRunning_661;
          reader_kitty_isRunning_661.confidential = true;
          writer_kitty_isRunning_661.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool660)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj463.mutable = true;
          sourceObject = obj463;
          obj463.data["mctx"] = undefined;
          var reader_kitty_mctx_662 = function() {
            return this.data["mctx"];
          }
          obj463.methods["mctx"] = reader_kitty_mctx_662;
          obj463.data["mctx"] = undefined;
          var writer_kitty_mctx_662 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj463.methods["mctx:="] = writer_kitty_mctx_662;
          reader_kitty_mctx_662.confidential = true;
          writer_kitty_mctx_662.confidential = true;
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 193
          lineNumber = 191
          var call663 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj463.data["currentKeyDown"] = call663;
          var reader_kitty_currentKeyDown_664 = function() {
            return this.data["currentKeyDown"];
          }
          obj463.methods["currentKeyDown"] = reader_kitty_currentKeyDown_664;
          obj463.data["currentKeyDown"] = call663;
          var writer_kitty_currentKeyDown_664 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj463.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_664;
          reader_kitty_currentKeyDown_664.confidential = true;
          writer_kitty_currentKeyDown_664.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call663)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj463.mutable = true;
          sourceObject = obj463;
          lineNumber = 193
          onSelf = true;
          var call665 = callmethod(this, "init", [0]);
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          sourceObject = obj463;
          superDepth = origSuperDepth;
        }
        obj_init_463.apply(obj463, []);
        return obj463
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func462.paramCounts = [
      0,
    ];
    func462.variableArities = [
      false,
    ];
    obj460.methods["new"] = func462;
    func462.definitionLine = 168;
    func462.definitionModule = "kitty";
    var func666 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj667 = Grace_allocObject();
        obj667.definitionModule = "kitty";
        obj667.definitionLine = 168;
        var inho667 = inheritingObject;
        while (inho667.superobj) inho667 = inho667.superobj;
        inho667.superobj = obj667;
        obj667.data = inheritingObject.data;
        obj667.outer = this;
        var reader_kitty_outer_668 = function() {
          return this.outer;
        }
        obj667.methods["outer"] = reader_kitty_outer_668;
        function obj_init_667() {
          var origSuperDepth = superDepth;
          superDepth = obj667;
          obj667.annotations = [];
          var func669 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func669.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 204
              var if670 = var_done;
              lineNumber = 200
              onSelf = true;
              var call671 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call671)) {
                lineNumber = 202
                lineNumber = 201
                var bool672 = new GraceBoolean(false)
                return bool672
              }
              lineNumber = 205
              lineNumber = 184
              lineNumber = 204
              var call673 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call674 = callmethod(this, "document:=", [1], call673);
              lineNumber = 205
              lineNumber = 204
              lineNumber = 205
              var string675 = new GraceString("standard-canvas");
              onSelf = true;
              var call676 = callmethod(this, "document", [0]);
              var call677 = callmethod(call676,"getElementById", [1], string675);
              onSelf = true;
              var call678 = callmethod(this, "canvas:=", [1], call677);
              lineNumber = 207
              lineNumber = 204
              lineNumber = 206
              onSelf = true;
              var call679 = callmethod(this, "canvas", [0]);
              var call680 = callmethod(call679,"width", [0]);
              onSelf = true;
              var call681 = callmethod(this, "canvasWidth:=", [1], call680);
              lineNumber = 210
              lineNumber = 206
              lineNumber = 207
              onSelf = true;
              var call682 = callmethod(this, "canvas", [0]);
              var call683 = callmethod(call682,"height", [0]);
              onSelf = true;
              var call684 = callmethod(this, "canvasHeight:=", [1], call683);
              lineNumber = 222
              var block685 = Grace_allocObject();
              block685.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block685.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block685.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block685.methods["match"] = GraceBlock_match;
              block685.methods["prefix?"] = GraceBlock_lift;
              block685.receiver = this;
              block685.className = 'block<kitty:222>';
              block685.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 213
                lineNumber = 212
                onSelf = true;
                var call686 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call688 = callmethod(this, "canvas", [0]);
                var call689 = callmethod(call688,"offsetWidth", [0]);
                onSelf = true;
                var call691 = callmethod(this, "canvas", [0]);
                var call692 = callmethod(call691,"offsetLeft", [0]);
                var call694 = callmethod(var_ev,"clientX", [0]);
                var diff696 = callmethod(call694, "-", [1], call692);
                var quotient698 = callmethod(diff696, "/", [1], call689);
                var prod700 = callmethod(quotient698, "*", [1], call686);
                var var_x = prod700;
                lineNumber = 213;
                moduleName = "kitty";
                lineNumber = 212
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 217
                lineNumber = 213
                onSelf = true;
                var call701 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call703 = callmethod(this, "canvas", [0]);
                var call704 = callmethod(call703,"offsetHeight", [0]);
                onSelf = true;
                var call706 = callmethod(this, "canvas", [0]);
                var call707 = callmethod(call706,"offsetTop", [0]);
                var call709 = callmethod(var_ev,"clientY", [0]);
                var diff711 = callmethod(call709, "-", [1], call707);
                var quotient713 = callmethod(diff711, "/", [1], call704);
                var prod715 = callmethod(quotient713, "*", [1], call701);
                var var_y = prod715;
                lineNumber = 217;
                moduleName = "kitty";
                lineNumber = 213
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 221
                var if716 = var_done;
                lineNumber = 217
                var opresult719 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call722 = callmethod(this, "canvasWidth", [0]);
                var diff724 = callmethod(call722, "-", [1], new GraceNum(20));
                var opresult727 = callmethod(var_x, ">", [1], diff724);
                var opresult729 = callmethod(opresult727, "&&", [1], opresult719);
                if (Grace_isTrue(opresult729)) {
                  lineNumber = 218
                  var call730 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 219
                  onSelf = true;
                  var call731 = callmethod(this, "stop", [0]);
                  if716 = call731;
                }
                return if716;
              };
              var_mouseDownListener = block685;
              lineNumber = 222
              var string732 = new GraceString("mousedown");
              onSelf = true;
              var call733 = callmethod(this, "canvas", [0]);
              var call734 = callmethod(call733,"addEventListener", [2], string732, var_mouseDownListener);
              lineNumber = 232
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
              block735.className = 'block<kitty:232>';
              block735.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                var if736 = var_done;
                lineNumber = 227
                var call738 = callmethod(var_ev,"keyCode", [0]);
                var opresult740 = callmethod(call738, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult740)) {
                  lineNumber = 228
                  onSelf = true;
                  var call741 = callmethod(this, "stop", [0]);
                  if736 = call741;
                }
                lineNumber = 231
                lineNumber = 227
                lineNumber = 230
                var call742 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call743 = callmethod(this, "currentKeyDown:=", [1], call742);
                return call743;
              };
              var_keyDownListener = block735;
              lineNumber = 232
              var string744 = new GraceString("keydown");
              onSelf = true;
              var call745 = callmethod(this, "document", [0]);
              var call746 = callmethod(call745,"addEventListener", [2], string744, var_keyDownListener);
              lineNumber = 238
              var block747 = Grace_allocObject();
              block747.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block747.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block747.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block747.methods["match"] = GraceBlock_match;
              block747.methods["prefix?"] = GraceBlock_lift;
              block747.receiver = this;
              block747.className = 'block<kitty:238>';
              block747.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 237
                lineNumber = 230
                lineNumber = 237
                lineNumber = 236
                var call748 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call749 = callmethod(this, "currentKeyDown:=", [1], call748);
                return call749;
              };
              var_keyUpListener = block747;
              lineNumber = 238
              var string750 = new GraceString("keyup");
              onSelf = true;
              var call751 = callmethod(this, "document", [0]);
              var call752 = callmethod(call751,"addEventListener", [2], string750, var_keyUpListener);
              lineNumber = 240
              lineNumber = 230
              lineNumber = 240
              var string753 = new GraceString("canvas");
              var call754 = callmethod(var_dom,"document", [0]);
              var call755 = callmethod(call754,"createElement", [1], string753);
              onSelf = true;
              var call756 = callmethod(this, "backingCanvas:=", [1], call755);
              lineNumber = 242
              lineNumber = 240
              lineNumber = 241
              onSelf = true;
              var call757 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call758 = callmethod(this, "backingCanvas", [0]);
              var call759 = callmethod(call758,"height:=", [1], call757);
              lineNumber = 243
              lineNumber = 240
              lineNumber = 242
              onSelf = true;
              var call760 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call761 = callmethod(this, "backingCanvas", [0]);
              var call762 = callmethod(call761,"width:=", [1], call760);
              lineNumber = 243
              lineNumber = 240
              lineNumber = 243
              var string763 = new GraceString("2d");
              onSelf = true;
              var call764 = callmethod(this, "backingCanvas", [0]);
              var call765 = callmethod(call764,"getContext", [1], string763);
              onSelf = true;
              var call766 = callmethod(this, "backingContext:=", [1], call765);
              lineNumber = 244
              lineNumber = 240
              lineNumber = 244
              var string767 = new GraceString("2d");
              onSelf = true;
              var call768 = callmethod(this, "canvas", [0]);
              var call769 = callmethod(call768,"getContext", [1], string767);
              onSelf = true;
              var call770 = callmethod(this, "mctx:=", [1], call769);
              lineNumber = 247
              var string771 = new GraceString("doggo.jpg");
              onSelf = true;
              var call772 = callmethod(this, "setBackground", [1], string771);
              lineNumber = 255
              lineNumber = 240
              lineNumber = 249
              var bool773 = new GraceBoolean(true)
              onSelf = true;
              var call774 = callmethod(this, "isInit:=", [1], bool773);
              return call774
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func669.paramCounts = [
            0,
          ];
          func669.variableArities = [
            false,
          ];
          obj667.methods["init"] = func669;
          func669.definitionLine = 196;
          func669.definitionModule = "kitty";
          var func775 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func775.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 240
              lineNumber = 260
              var bool776 = new GraceBoolean(true)
              onSelf = true;
              var call777 = callmethod(this, "isRunning:=", [1], bool776);
              lineNumber = 261
              var block778 = Grace_allocObject();
              block778.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block778.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block778.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block778.methods["match"] = GraceBlock_match;
              block778.methods["prefix?"] = GraceBlock_lift;
              block778.receiver = this;
              block778.className = 'block<kitty:261>';
              block778.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call779 = callmethod(this, "isRunning", [0]);
                return call779;
              };
              lineNumber = 265
              var block780 = Grace_allocObject();
              block780.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block780.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block780.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block780.methods["match"] = GraceBlock_match;
              block780.methods["prefix?"] = GraceBlock_lift;
              block780.receiver = this;
              block780.className = 'block<kitty:265>';
              block780.real = function(
              ) {
                sourceObject = this;
                lineNumber = 262
                onSelf = true;
                var call781 = callmethod(this, "update", [0]);
                return call781;
              };
              lineNumber = 261
              var call782 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block778, new GraceNum(10), block780);
              return call782
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
          obj667.methods["start"] = func775;
          func775.definitionLine = 258;
          func775.definitionModule = "kitty";
          var func783 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func783.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              lineNumber = 240
              lineNumber = 273
              onSelf = true;
              var call784 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call785 = callmethod(this, "mctx", [0]);
              var call786 = callmethod(call785,"fillStyle:=", [1], call784);
              lineNumber = 274
              onSelf = true;
              var call787 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call788 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call789 = callmethod(this, "mctx", [0]);
              var call790 = callmethod(call789,"fillRect", [4], new GraceNum(0), new GraceNum(0), call787, call788);
              lineNumber = 275
              onSelf = true;
              var call791 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call792 = callmethod(this, "mctx", [0]);
              var call793 = callmethod(call792,"drawImage", [3], call791, new GraceNum(0), new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call794 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call796 = callmethod(this, "canvasWidth", [0]);
              var quotient798 = callmethod(call796, "/", [1], new GraceNum(2));
              onSelf = true;
              var call800 = callmethod(this, "canvasHeight", [0]);
              var quotient802 = callmethod(call800, "/", [1], new GraceNum(2));
              onSelf = true;
              var call803 = callmethod(this, "background", [0]);
              var call804 = callmethod(call803,"draw", [4], call794, quotient798, quotient802, new GraceNum(0));
              lineNumber = 279
              onSelf = true;
              var call805 = callmethod(this, "entities", [0]);
              lineNumber = 285
              var block806 = Grace_allocObject();
              block806.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block806.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block806.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block806.methods["match"] = GraceBlock_match;
              block806.methods["prefix?"] = GraceBlock_lift;
              block806.receiver = this;
              block806.className = 'block<kitty:285>';
              block806.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 280
                var call807 = callmethod(var_entity,"update", [0]);
                lineNumber = 281
                onSelf = true;
                var call808 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call810 = callmethod(this, "canvasWidth", [0]);
                var quotient812 = callmethod(call810, "/", [1], new GraceNum(2));
                onSelf = true;
                var call814 = callmethod(this, "canvasHeight", [0]);
                var quotient816 = callmethod(call814, "/", [1], new GraceNum(2));
                var call817 = callmethod(var_entity,"draw", [3], call808, quotient812, quotient816);
                return call817;
              };
              var call818 = callmethod(Grace_prelude,"for()do", [1, 1], call805, block806);
              return call818
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func783.paramCounts = [
            0,
          ];
          func783.variableArities = [
            false,
          ];
          obj667.methods["update"] = func783;
          func783.definitionLine = 268;
          func783.definitionModule = "kitty";
          var func819 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func819.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              var string820 = new GraceString("WORLD STOPPING...");
              var call821 = Grace_print(string820);
              lineNumber = 290
              lineNumber = 280
              lineNumber = 289
              var bool822 = new GraceBoolean(false)
              onSelf = true;
              var call823 = callmethod(this, "isRunning:=", [1], bool822);
              lineNumber = 290
              var string824 = new GraceString("mousedown");
              onSelf = true;
              var call825 = callmethod(this, "canvas", [0]);
              var call826 = callmethod(call825,"removeEventListener", [2], string824, var_mouseDownListener);
              lineNumber = 291
              var string827 = new GraceString("keydown");
              onSelf = true;
              var call828 = callmethod(this, "document", [0]);
              var call829 = callmethod(call828,"removeEventListener", [2], string827, var_keyDownListener);
              lineNumber = 292
              var string830 = new GraceString("keyup");
              onSelf = true;
              var call831 = callmethod(this, "document", [0]);
              var call832 = callmethod(call831,"removeEventListener", [2], string830, var_keyUpListener);
              return call832
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
          obj667.methods["stop"] = func819;
          func819.definitionLine = 287;
          func819.definitionModule = "kitty";
          var func833 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func833.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 296
              onSelf = true;
              var call834 = callmethod(this, "currentKeyDown", [0]);
              var opresult837 = callmethod(var_key, "==", [1], call834);
              return opresult837
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func833.paramCounts = [
            1,
          ];
          func833.variableArities = [
            false,
          ];
          obj667.methods["isKeyDown"] = func833;
          func833.definitionLine = 295;
          func833.definitionModule = "kitty";
          var func838 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func838.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              lineNumber = 280
              lineNumber = 300
              onSelf = true;
              var call839 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call840 = callmethod(this, "canvasHeight", [0]);
              var call841 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call842 = callmethod(call841, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call843 = callmethod(call842, "Image()width()height", [1, 1, 1], var_url, call839, call840);
              onSelf = true;
              var call844 = callmethod(this, "background:=", [1], call843);
              return call844
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func838.paramCounts = [
            1,
          ];
          func838.variableArities = [
            false,
          ];
          obj667.methods["setBackground"] = func838;
          func838.definitionLine = 299;
          func838.definitionModule = "kitty";
          var func845 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func845.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 304
              onSelf = true;
              var call846 = callmethod(this, "entities", [0]);
              var call847 = callmethod(call846,"push", [1], var_e);
              return call847
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func845.paramTypes = [];
          func845.paramTypes.push([]);
          func845.paramCounts = [
            1,
          ];
          func845.variableArities = [
            false,
          ];
          obj667.methods["addEntity"] = func845;
          func845.definitionLine = 303;
          func845.definitionModule = "kitty";
          var func848 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func848.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
              onSelf = true;
              var call849 = callmethod(this, "mctx", [0]);
              return call849
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func848.paramCounts = [
            0,
          ];
          func848.variableArities = [
            false,
          ];
          obj667.methods["getContext"] = func848;
          func848.definitionLine = 307;
          func848.definitionModule = "kitty";
          sourceObject = obj667;
          obj667.data["background"] = undefined;
          var reader_kitty_background_850 = function() {
            return this.data["background"];
          }
          obj667.methods["background"] = reader_kitty_background_850;
          obj667.data["background"] = undefined;
          var writer_kitty_background_850 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj667.methods["background:="] = writer_kitty_background_850;
          reader_kitty_background_850.confidential = true;
          writer_kitty_background_850.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 173
          var string851 = new GraceString("black");
          obj667.data["backgroundColour"] = string851;
          var reader_kitty_backgroundColour_852 = function() {
            return this.data["backgroundColour"];
          }
          obj667.methods["backgroundColour"] = reader_kitty_backgroundColour_852;
          obj667.data["backgroundColour"] = string851;
          var writer_kitty_backgroundColour_852 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj667.methods["backgroundColour:="] = writer_kitty_backgroundColour_852;
          reader_kitty_backgroundColour_852.confidential = true;
          writer_kitty_backgroundColour_852.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string851)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["document"] = undefined;
          var reader_kitty_document_853 = function() {
            return this.data["document"];
          }
          obj667.methods["document"] = reader_kitty_document_853;
          obj667.data["document"] = undefined;
          var writer_kitty_document_853 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj667.methods["document:="] = writer_kitty_document_853;
          reader_kitty_document_853.confidential = true;
          writer_kitty_document_853.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_854 = function() {
            return this.data["backingCanvas"];
          }
          obj667.methods["backingCanvas"] = reader_kitty_backingCanvas_854;
          obj667.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_854 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj667.methods["backingCanvas:="] = writer_kitty_backingCanvas_854;
          reader_kitty_backingCanvas_854.confidential = true;
          writer_kitty_backingCanvas_854.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["backingContext"] = undefined;
          var reader_kitty_backingContext_855 = function() {
            return this.data["backingContext"];
          }
          obj667.methods["backingContext"] = reader_kitty_backingContext_855;
          obj667.data["backingContext"] = undefined;
          var writer_kitty_backingContext_855 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj667.methods["backingContext:="] = writer_kitty_backingContext_855;
          reader_kitty_backingContext_855.confidential = true;
          writer_kitty_backingContext_855.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["canvas"] = undefined;
          var reader_kitty_canvas_856 = function() {
            return this.data["canvas"];
          }
          obj667.methods["canvas"] = reader_kitty_canvas_856;
          obj667.data["canvas"] = undefined;
          var writer_kitty_canvas_856 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj667.methods["canvas:="] = writer_kitty_canvas_856;
          reader_kitty_canvas_856.confidential = true;
          writer_kitty_canvas_856.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_857 = function() {
            return this.data["canvasWidth"];
          }
          obj667.methods["canvasWidth"] = reader_kitty_canvasWidth_857;
          obj667.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_857 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj667.methods["canvasWidth:="] = writer_kitty_canvasWidth_857;
          reader_kitty_canvasWidth_857.confidential = true;
          writer_kitty_canvasWidth_857.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_858 = function() {
            return this.data["canvasHeight"];
          }
          obj667.methods["canvasHeight"] = reader_kitty_canvasHeight_858;
          obj667.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_858 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj667.methods["canvasHeight:="] = writer_kitty_canvasHeight_858;
          reader_kitty_canvasHeight_858.confidential = true;
          writer_kitty_canvasHeight_858.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 184
          var call859 = callmethod(var_collections,"list", [0]);
          var call860 = callmethod(call859,"new", [0]);
          obj667.data["entities"] = call860;
          var reader_kitty_entities_861 = function() {
            return this.data["entities"];
          }
          obj667.methods["entities"] = reader_kitty_entities_861;
          obj667.data["entities"] = call860;
          var writer_kitty_entities_861 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj667.methods["entities:="] = writer_kitty_entities_861;
          reader_kitty_entities_861.confidential = true;
          writer_kitty_entities_861.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call860)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 186
          var bool862 = new GraceBoolean(false)
          obj667.data["isInit"] = bool862;
          var reader_kitty_isInit_863 = function() {
            return this.data["isInit"];
          }
          obj667.methods["isInit"] = reader_kitty_isInit_863;
          obj667.data["isInit"] = bool862;
          var writer_kitty_isInit_863 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj667.methods["isInit:="] = writer_kitty_isInit_863;
          reader_kitty_isInit_863.confidential = true;
          writer_kitty_isInit_863.confidential = true;
          lineNumber = 187;
          moduleName = "kitty";
          lineNumber = 186
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool862)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 187
          var bool864 = new GraceBoolean(false)
          obj667.data["isRunning"] = bool864;
          var reader_kitty_isRunning_865 = function() {
            return this.data["isRunning"];
          }
          obj667.methods["isRunning"] = reader_kitty_isRunning_865;
          obj667.data["isRunning"] = bool864;
          var writer_kitty_isRunning_865 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj667.methods["isRunning:="] = writer_kitty_isRunning_865;
          reader_kitty_isRunning_865.confidential = true;
          writer_kitty_isRunning_865.confidential = true;
          lineNumber = 189;
          moduleName = "kitty";
          lineNumber = 187
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool864)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj667.mutable = true;
          sourceObject = obj667;
          obj667.data["mctx"] = undefined;
          var reader_kitty_mctx_866 = function() {
            return this.data["mctx"];
          }
          obj667.methods["mctx"] = reader_kitty_mctx_866;
          obj667.data["mctx"] = undefined;
          var writer_kitty_mctx_866 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj667.methods["mctx:="] = writer_kitty_mctx_866;
          reader_kitty_mctx_866.confidential = true;
          writer_kitty_mctx_866.confidential = true;
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 193
          lineNumber = 191
          var call867 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj667.data["currentKeyDown"] = call867;
          var reader_kitty_currentKeyDown_868 = function() {
            return this.data["currentKeyDown"];
          }
          obj667.methods["currentKeyDown"] = reader_kitty_currentKeyDown_868;
          obj667.data["currentKeyDown"] = call867;
          var writer_kitty_currentKeyDown_868 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj667.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_868;
          reader_kitty_currentKeyDown_868.confidential = true;
          writer_kitty_currentKeyDown_868.confidential = true;
          lineNumber = 193;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call867)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj667.mutable = true;
          sourceObject = obj667;
          lineNumber = 193
          onSelf = true;
          var call869 = callmethod(this, "init", [0]);
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          sourceObject = obj667;
          superDepth = origSuperDepth;
        }
        obj_init_667.apply(inheritingObject, []);
        return obj667
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj460.methods["new()object"] = func666;
    var func870 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 168
        var string871 = new GraceString("class KittyWorld");
        return string871
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func870.paramCounts = [
    ];
    func870.variableArities = [
    ];
    obj460.methods["asDebugString"] = func870;
    func870.definitionLine = 168;
    func870.definitionModule = "kitty";
    sourceObject = obj460;
    sourceObject = obj460;
    superDepth = origSuperDepth;
  }
  obj_init_460.apply(obj460, []);
  var var_KittyWorld = obj460;
  lineNumber = 313
  lineNumber = 322
  lineNumber = 337
  lineNumber = 342
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n getX\n getY\n image:=\n action\n setLocation\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n rotation\n tag:=\n getRotation\n createImage\n move\n tag\n update\n strafe\n rotation:=\n turn\n start\n setAction\n action:=\nfresh:World:\n currentKeyDown\n addEntity\n isInit\n backingContext:=\n mctx:=\n entities:=\n entities\n backgroundColour:=\n canvasHeight:=\n isRunning:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isRunning\n background\n stop\n isInit:=\n isKeyDown\n setBackground\n canvasWidth\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n backingContext\n canvas:=\n backgroundColour\n background:=\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height\n imgTag\n elements\n width\n getTag\n draw\n height:=\n drawImage\n elements:=\n width:=\nfresh:Image()width()height:\n height\n imgTag\n elements\n width\n getTag\n draw\n height:=\n drawImage\n elements:=\n width:=\nfresh:Entity()x()y:\n getX\n getY\n image:=\n action\n strafe\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n rotation\n tag:=\n getRotation\n move\n createImage\n tag\n update\n setLocation\n rotation:=\n turn\n start\n setAction\n action:=\nmethods-of:KittyWorld.new:\n currentKeyDown\n addEntity\n isInit\n backingContext:=\n mctx:=\n entities:=\n entities\n backgroundColour:=\n canvasHeight:=\n init\n start\n isRunning:=\n canvasHeight\n currentKeyDown:=\n canvas\n isRunning\n background\n stop\n isInit:=\n isKeyDown\n setBackground\n getContext\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n canvasWidth\n backingCanvas\n backgroundColour\n canvas:=\n backingContext\n background:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\n";
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
    "method Entity(tag)x(x')y(y') {",
    "    print \"HERE\"",
    "    object {",
    "        inherits KittyEntity.new(tag, x', y')",
    "    }",
    "    print \"GUMMON\"",
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
    "// print \"IS THIS WORKING???\"",
  ];
}
