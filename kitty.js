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
        var call14 = callmethod(var_KittyEntity,"new()x()y()object", [1, 1, 1, 1], call13, var_x__39__, var_y__39__, this);
        obj11.superobj = call14;
        obj11._value = call14._value;
        superDepth = origSuperDepth;
      }
      obj_init_11.apply(obj11, []);
      return obj11
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
  var func15 = function(argcv) {
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
      var string16 = new GraceString("HERE");
      var call17 = Grace_print(string16);
      var obj18 = Grace_allocObject();
      obj18.definitionModule = "kitty";
      obj18.definitionLine = 161;
      var inho18 = inheritingObject;
      while (inho18.superobj) inho18 = inho18.superobj;
      inho18.superobj = obj18;
      obj18.data = inheritingObject.data;
      obj18.outer = this;
      var reader_kitty_outer_19 = function() {
        return this.outer;
      }
      obj18.methods["outer"] = reader_kitty_outer_19;
      function obj_init_18() {
        var origSuperDepth = superDepth;
        superDepth = obj18;
        obj18.annotations = [];
        sourceObject = obj18;
        lineNumber = 162
        onSelf = true;
        var call20 = callmethod(this, "tag", [0]);
        var call21 = callmethod(var_KittyEntity,"new()x()y()object", [1, 1, 1, 1], call20, var_x__39__, var_y__39__, this);
        obj18.superobj = call21;
        obj18._value = call21._value;
        superDepth = origSuperDepth;
      }
      obj_init_18.apply(inheritingObject, []);
      return obj18
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()x()y()object"] = func15;
  lineNumber = 312
  var func22 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 313
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 313;
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
        lineNumber = 314
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
  func22.definitionLine = 312;
  func22.definitionModule = "kitty";
  var func26 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 313;
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
  lineNumber = 321
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 323
      var string31 = new GraceString("CHECKING...");
      var call32 = Grace_print(string31);
      lineNumber = 330
      var if33 = var_done;
      lineNumber = 325
      var call34 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call34)) {
        lineNumber = 326
        var string35 = new GraceString("NO WORLD!!");
        var call36 = Grace_print(string35);
        lineNumber = 328
        return var_done
      }
      lineNumber = 330
      var string37 = new GraceString("STARTING...");
      var call38 = Grace_print(string37);
      lineNumber = 333
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
  func30.definitionLine = 321;
  func30.definitionModule = "kitty";
  lineNumber = 336
  var func40 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 338
      lineNumber = 337
      var_m__95__world = var_world__39__;
      lineNumber = 339
      lineNumber = 338
      var bool41 = new GraceBoolean(true)
      var_worldSet = bool41;
      return bool41
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func40.paramTypes = [];
  func40.paramTypes.push([]);
  func40.paramCounts = [
    1,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func40;
  func40.definitionLine = 336;
  func40.definitionModule = "kitty";
  lineNumber = 341
  var func42 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 342
      onSelf = true;
      var call43 = callmethod(this, "start", [0]);
      return call43
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
  this.methods["atModuleEnd"] = func42;
  func42.definitionLine = 341;
  func42.definitionModule = "kitty";
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
  var call44 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call44;
  this.data = call44.data;
  this._value = call44._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 333
  var func45 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    0,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["m_world"] = func45;
  func45.definitionLine = 333;
  func45.definitionModule = "kitty";
  lineNumber = 333
  var func46 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func46;
  func46.definitionLine = 333;
  func46.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool47 = new GraceBoolean(false)
  var var_worldSet = bool47;
  lineNumber = 333
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func48;
  func48.definitionLine = 333;
  func48.definitionModule = "kitty";
  lineNumber = 333
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func49;
  func49.definitionLine = 333;
  func49.definitionModule = "kitty";
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
  lineNumber = 333
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    0,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func50;
  func50.definitionLine = 333;
  func50.definitionModule = "kitty";
  lineNumber = 333
  var func51 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func51.paramCounts[0])
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
  func51.paramCounts = [
    1,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func51;
  func51.definitionLine = 333;
  func51.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 333
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func52;
  func52.definitionLine = 333;
  func52.definitionModule = "kitty";
  lineNumber = 333
  var func53 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    1,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func53;
  func53.definitionLine = 333;
  func53.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 333
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
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
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func54;
  func54.definitionLine = 333;
  func54.definitionModule = "kitty";
  lineNumber = 333
  var func55 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func55.paramCounts[0])
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
  func55.paramCounts = [
    1,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func55;
  func55.definitionLine = 333;
  func55.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call56 = callmethod(var_dom,"window", [0]);
  var call57 = callmethod(call56,"Math", [0]);
  var var_math = call57;
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    0,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["math"] = func58;
  func58.definitionLine = 17;
  func58.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func59 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    0,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func59;
  func59.definitionLine = 22;
  func59.definitionModule = "kitty";
  var obj60 = Grace_allocObject();
  obj60.definitionModule = "kitty";
  obj60.definitionLine = 22;
  obj60.outer = this;
  var reader_kitty_outer_61 = function() {
    return this.outer;
  }
  obj60.methods["outer"] = reader_kitty_outer_61;
  function obj_init_60() {
    var origSuperDepth = superDepth;
    superDepth = obj60;
    obj60.annotations = [];
    var func62 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func62.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func62.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func62.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj63 = Grace_allocObject();
        obj63.definitionModule = "kitty";
        obj63.definitionLine = 22;
        obj63.outer = this;
        var reader_kitty_outer_64 = function() {
          return this.outer;
        }
        obj63.methods["outer"] = reader_kitty_outer_64;
        function obj_init_63() {
          var origSuperDepth = superDepth;
          superDepth = obj63;
          obj63.annotations = [];
          var func65 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func65.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call66 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call67 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod71 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient73 = callmethod(prod71, "/", [1], new GraceNum(180));
              var call74 = callmethod(var_ctx,"rotate", [1], quotient73);
              lineNumber = 40
              onSelf = true;
              var call75 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block76 = Grace_allocObject();
              block76.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block76.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block76.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block76.methods["match"] = GraceBlock_match;
              block76.methods["prefix?"] = GraceBlock_lift;
              block76.receiver = this;
              block76.className = 'block<kitty:43>';
              block76.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call78 = callmethod(this, "width", [0]);
                var call79 = callmethod(call78,"prefix-", [0]);
                var quotient81 = callmethod(call79, "/", [1], new GraceNum(2));
                onSelf = true;
                var call83 = callmethod(this, "height", [0]);
                var call84 = callmethod(call83,"prefix-", [0]);
                var quotient86 = callmethod(call84, "/", [1], new GraceNum(2));
                onSelf = true;
                var call87 = callmethod(this, "width", [0]);
                onSelf = true;
                var call88 = callmethod(this, "height", [0]);
                var call89 = callmethod(var_ctx,"drawImage", [5], var_element, quotient81, quotient86, call87, call88);
                return call89;
              };
              var call90 = callmethod(Grace_prelude,"for()do", [1, 1], call75, block76);
              lineNumber = 43
              var call91 = callmethod(var_ctx,"restore", [0]);
              return call91
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func65.paramCounts = [
            4,
          ];
          func65.variableArities = [
            false,
          ];
          obj63.methods["draw"] = func65;
          func65.definitionLine = 34;
          func65.definitionModule = "kitty";
          var func92 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func92.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call93 = callmethod(this, "imgTag", [0]);
              return call93
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func92.paramCounts = [
            0,
          ];
          func92.variableArities = [
            false,
          ];
          obj63.methods["getTag"] = func92;
          func92.definitionLine = 47;
          func92.definitionModule = "kitty";
          var func94 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func94.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call95 = callmethod(this, "elements", [0]);
              var call96 = callmethod(call95,"push", [1], var_imgTag__39__);
              return call96
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func94.paramCounts = [
            1,
          ];
          func94.variableArities = [
            false,
          ];
          obj63.methods["drawImage"] = func94;
          func94.definitionLine = 51;
          func94.definitionModule = "kitty";
          sourceObject = obj63;
          lineNumber = 25
          var string97 = new GraceString("img");
          var call98 = callmethod(var_dom,"document", [0]);
          var call99 = callmethod(call98,"createElement", [1], string97);
          obj63.data["imgTag"] = call99;
          var reader_kitty_imgTag_100 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_100.def = true;
          reader_kitty_imgTag_100.confidential = true;
          obj63.methods["imgTag"] = reader_kitty_imgTag_100;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call99)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj63;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call101 = callmethod(this, "imgTag", [0]);
          var call102 = callmethod(call101,"src:=", [1], var_url__39__);
          sourceObject = obj63;
          lineNumber = 28
          var call103 = callmethod(var_collections,"list", [0]);
          var call104 = callmethod(call103,"new", [0]);
          obj63.data["elements"] = call104;
          var reader_kitty_elements_105 = function() {
            return this.data["elements"];
          }
          obj63.methods["elements"] = reader_kitty_elements_105;
          obj63.data["elements"] = call104;
          var writer_kitty_elements_105 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj63.methods["elements:="] = writer_kitty_elements_105;
          reader_kitty_elements_105.confidential = true;
          writer_kitty_elements_105.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call104)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj63.mutable = true;
          sourceObject = obj63;
          lineNumber = 29
          onSelf = true;
          var call106 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call107 = callmethod(this, "elements", [0]);
          var call108 = callmethod(call107,"push", [1], call106);
          sourceObject = obj63;
          lineNumber = 31
          obj63.data["height"] = var_height__39__;
          var reader_kitty_height_109 = function() {
            return this.data["height"];
          }
          obj63.methods["height"] = reader_kitty_height_109;
          obj63.data["height"] = var_height__39__;
          var writer_kitty_height_109 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj63.methods["height:="] = writer_kitty_height_109;
          reader_kitty_height_109.confidential = true;
          writer_kitty_height_109.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj63.mutable = true;
          sourceObject = obj63;
          lineNumber = 32
          obj63.data["width"] = var_width__39__;
          var reader_kitty_width_110 = function() {
            return this.data["width"];
          }
          obj63.methods["width"] = reader_kitty_width_110;
          obj63.data["width"] = var_width__39__;
          var writer_kitty_width_110 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj63.methods["width:="] = writer_kitty_width_110;
          reader_kitty_width_110.confidential = true;
          writer_kitty_width_110.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj63.mutable = true;
          sourceObject = obj63;
          sourceObject = obj63;
          sourceObject = obj63;
          superDepth = origSuperDepth;
        }
        obj_init_63.apply(obj63, []);
        return obj63
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func62.paramCounts = [
      1,
      1,
      1,
    ];
    func62.variableArities = [
      false,
      false,
      false,
    ];
    obj60.methods["new()width()height"] = func62;
    func62.definitionLine = 22;
    func62.definitionModule = "kitty";
    var func111 = function(argcv) {
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
        var obj112 = Grace_allocObject();
        obj112.definitionModule = "kitty";
        obj112.definitionLine = 22;
        var inho112 = inheritingObject;
        while (inho112.superobj) inho112 = inho112.superobj;
        inho112.superobj = obj112;
        obj112.data = inheritingObject.data;
        obj112.outer = this;
        var reader_kitty_outer_113 = function() {
          return this.outer;
        }
        obj112.methods["outer"] = reader_kitty_outer_113;
        function obj_init_112() {
          var origSuperDepth = superDepth;
          superDepth = obj112;
          obj112.annotations = [];
          var func114 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func114.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 36
              var call115 = callmethod(var_ctx,"save", [0]);
              lineNumber = 37
              var call116 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 39
              var prod120 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient122 = callmethod(prod120, "/", [1], new GraceNum(180));
              var call123 = callmethod(var_ctx,"rotate", [1], quotient122);
              lineNumber = 40
              onSelf = true;
              var call124 = callmethod(this, "elements", [0]);
              lineNumber = 43
              var block125 = Grace_allocObject();
              block125.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block125.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block125.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block125.methods["match"] = GraceBlock_match;
              block125.methods["prefix?"] = GraceBlock_lift;
              block125.receiver = this;
              block125.className = 'block<kitty:43>';
              block125.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 41
                onSelf = true;
                var call127 = callmethod(this, "width", [0]);
                var call128 = callmethod(call127,"prefix-", [0]);
                var quotient130 = callmethod(call128, "/", [1], new GraceNum(2));
                onSelf = true;
                var call132 = callmethod(this, "height", [0]);
                var call133 = callmethod(call132,"prefix-", [0]);
                var quotient135 = callmethod(call133, "/", [1], new GraceNum(2));
                onSelf = true;
                var call136 = callmethod(this, "width", [0]);
                onSelf = true;
                var call137 = callmethod(this, "height", [0]);
                var call138 = callmethod(var_ctx,"drawImage", [5], var_element, quotient130, quotient135, call136, call137);
                return call138;
              };
              var call139 = callmethod(Grace_prelude,"for()do", [1, 1], call124, block125);
              lineNumber = 43
              var call140 = callmethod(var_ctx,"restore", [0]);
              return call140
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func114.paramCounts = [
            4,
          ];
          func114.variableArities = [
            false,
          ];
          obj112.methods["draw"] = func114;
          func114.definitionLine = 34;
          func114.definitionModule = "kitty";
          var func141 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 48
              onSelf = true;
              var call142 = callmethod(this, "imgTag", [0]);
              return call142
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func141.paramCounts = [
            0,
          ];
          func141.variableArities = [
            false,
          ];
          obj112.methods["getTag"] = func141;
          func141.definitionLine = 47;
          func141.definitionModule = "kitty";
          var func143 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func143.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              onSelf = true;
              var call144 = callmethod(this, "elements", [0]);
              var call145 = callmethod(call144,"push", [1], var_imgTag__39__);
              return call145
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func143.paramCounts = [
            1,
          ];
          func143.variableArities = [
            false,
          ];
          obj112.methods["drawImage"] = func143;
          func143.definitionLine = 51;
          func143.definitionModule = "kitty";
          sourceObject = obj112;
          lineNumber = 25
          var string146 = new GraceString("img");
          var call147 = callmethod(var_dom,"document", [0]);
          var call148 = callmethod(call147,"createElement", [1], string146);
          obj112.data["imgTag"] = call148;
          var reader_kitty_imgTag_149 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_149.def = true;
          reader_kitty_imgTag_149.confidential = true;
          obj112.methods["imgTag"] = reader_kitty_imgTag_149;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call148)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj112;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call150 = callmethod(this, "imgTag", [0]);
          var call151 = callmethod(call150,"src:=", [1], var_url__39__);
          sourceObject = obj112;
          lineNumber = 28
          var call152 = callmethod(var_collections,"list", [0]);
          var call153 = callmethod(call152,"new", [0]);
          obj112.data["elements"] = call153;
          var reader_kitty_elements_154 = function() {
            return this.data["elements"];
          }
          obj112.methods["elements"] = reader_kitty_elements_154;
          obj112.data["elements"] = call153;
          var writer_kitty_elements_154 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj112.methods["elements:="] = writer_kitty_elements_154;
          reader_kitty_elements_154.confidential = true;
          writer_kitty_elements_154.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call153)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj112.mutable = true;
          sourceObject = obj112;
          lineNumber = 29
          onSelf = true;
          var call155 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call156 = callmethod(this, "elements", [0]);
          var call157 = callmethod(call156,"push", [1], call155);
          sourceObject = obj112;
          lineNumber = 31
          obj112.data["height"] = var_height__39__;
          var reader_kitty_height_158 = function() {
            return this.data["height"];
          }
          obj112.methods["height"] = reader_kitty_height_158;
          obj112.data["height"] = var_height__39__;
          var writer_kitty_height_158 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj112.methods["height:="] = writer_kitty_height_158;
          reader_kitty_height_158.confidential = true;
          writer_kitty_height_158.confidential = true;
          lineNumber = 32;
          moduleName = "kitty";
          lineNumber = 31
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj112.mutable = true;
          sourceObject = obj112;
          lineNumber = 32
          obj112.data["width"] = var_width__39__;
          var reader_kitty_width_159 = function() {
            return this.data["width"];
          }
          obj112.methods["width"] = reader_kitty_width_159;
          obj112.data["width"] = var_width__39__;
          var writer_kitty_width_159 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj112.methods["width:="] = writer_kitty_width_159;
          reader_kitty_width_159.confidential = true;
          writer_kitty_width_159.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj112.mutable = true;
          sourceObject = obj112;
          sourceObject = obj112;
          sourceObject = obj112;
          superDepth = origSuperDepth;
        }
        obj_init_112.apply(inheritingObject, []);
        return obj112
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj60.methods["new()width()height()object"] = func111;
    var func160 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string161 = new GraceString("class KittyImage");
        return string161
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func160.paramCounts = [
    ];
    func160.variableArities = [
    ];
    obj60.methods["asDebugString"] = func160;
    func160.definitionLine = 22;
    func160.definitionModule = "kitty";
    sourceObject = obj60;
    sourceObject = obj60;
    superDepth = origSuperDepth;
  }
  obj_init_60.apply(obj60, []);
  var var_KittyImage = obj60;
  lineNumber = 58
  lineNumber = 65
  var func162 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func162.paramCounts[0])
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
  func162.paramCounts = [
    0,
  ];
  func162.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func162;
  func162.definitionLine = 65;
  func162.definitionModule = "kitty";
  var obj163 = Grace_allocObject();
  obj163.definitionModule = "kitty";
  obj163.definitionLine = 65;
  obj163.outer = this;
  var reader_kitty_outer_164 = function() {
    return this.outer;
  }
  obj163.methods["outer"] = reader_kitty_outer_164;
  function obj_init_163() {
    var origSuperDepth = superDepth;
    superDepth = obj163;
    obj163.annotations = [];
    var func165 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func165.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func165.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func165.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj166 = Grace_allocObject();
        obj166.definitionModule = "kitty";
        obj166.definitionLine = 65;
        obj166.outer = this;
        var reader_kitty_outer_167 = function() {
          return this.outer;
        }
        obj166.methods["outer"] = reader_kitty_outer_167;
        function obj_init_166() {
          var origSuperDepth = superDepth;
          superDepth = obj166;
          obj166.annotations = [];
          var func168 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func168.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string169 = new GraceString("realyee.png");
              onSelf = true;
              var call170 = callmethod(this, "createImage", [1], string169);
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
          obj166.methods["awake"] = func168;
          func168.definitionLine = 85;
          func168.definitionModule = "kitty";
          var func171 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func171.paramCounts[0])
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
          func171.paramCounts = [
            0,
          ];
          func171.variableArities = [
            false,
          ];
          obj166.methods["start"] = func171;
          func171.definitionLine = 91;
          func171.definitionModule = "kitty";
          var func172 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call173 = callmethod(this, "action", [0]);
              var call174 = callmethod(call173,"update", [0]);
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
          obj166.methods["update"] = func172;
          func172.definitionLine = 96;
          func172.definitionModule = "kitty";
          var func175 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func175.paramCounts[0])
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
          func175.paramCounts = [
            0,
          ];
          func175.variableArities = [
            false,
          ];
          obj166.methods["onDestroy"] = func175;
          func175.definitionLine = 101;
          func175.definitionModule = "kitty";
          var func176 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func176.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call179 = callmethod(this, "rotation", [0]);
              var prod181 = callmethod(call179, "*", [1], new GraceNum(3.14159));
              var quotient183 = callmethod(prod181, "/", [1], new GraceNum(180));
              var call184 = callmethod(var_math,"cos", [1], quotient183);
              var prod187 = callmethod(var_distance, "*", [1], call184);
              onSelf = true;
              var call189 = callmethod(this, "posX", [0]);
              var opresult191 = callmethod(call189, "+", [1], prod187);
              onSelf = true;
              var call192 = callmethod(this, "posX:=", [1], opresult191);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call195 = callmethod(this, "rotation", [0]);
              var prod197 = callmethod(call195, "*", [1], new GraceNum(3.14159));
              var quotient199 = callmethod(prod197, "/", [1], new GraceNum(180));
              var call200 = callmethod(var_math,"sin", [1], quotient199);
              var prod203 = callmethod(var_distance, "*", [1], call200);
              onSelf = true;
              var call205 = callmethod(this, "posY", [0]);
              var opresult207 = callmethod(call205, "+", [1], prod203);
              onSelf = true;
              var call208 = callmethod(this, "posY:=", [1], opresult207);
              return call208
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func176.paramCounts = [
            1,
          ];
          func176.variableArities = [
            false,
          ];
          obj166.methods["move"] = func176;
          func176.definitionLine = 105;
          func176.definitionModule = "kitty";
          var func209 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func209.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call212 = callmethod(this, "rotation", [0]);
              var opresult215 = callmethod(new GraceNum(90), "+", [1], call212);
              var prod217 = callmethod(opresult215, "*", [1], new GraceNum(3.14159));
              var quotient219 = callmethod(prod217, "/", [1], new GraceNum(180));
              var call220 = callmethod(var_math,"cos", [1], quotient219);
              var prod223 = callmethod(var_distance, "*", [1], call220);
              onSelf = true;
              var call225 = callmethod(this, "posX", [0]);
              var opresult227 = callmethod(call225, "+", [1], prod223);
              onSelf = true;
              var call228 = callmethod(this, "posX:=", [1], opresult227);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call231 = callmethod(this, "rotation", [0]);
              var opresult234 = callmethod(new GraceNum(90), "+", [1], call231);
              var prod236 = callmethod(opresult234, "*", [1], new GraceNum(3.14159));
              var quotient238 = callmethod(prod236, "/", [1], new GraceNum(180));
              var call239 = callmethod(var_math,"sin", [1], quotient238);
              var prod242 = callmethod(var_distance, "*", [1], call239);
              onSelf = true;
              var call244 = callmethod(this, "posY", [0]);
              var opresult246 = callmethod(call244, "+", [1], prod242);
              onSelf = true;
              var call247 = callmethod(this, "posY:=", [1], opresult246);
              return call247
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func209.paramCounts = [
            1,
          ];
          func209.variableArities = [
            false,
          ];
          obj166.methods["strafe"] = func209;
          func209.definitionLine = 110;
          func209.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
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
              var call250 = callmethod(this, "rotation", [0]);
              var opresult252 = callmethod(call250, "+", [1], var_angle);
              onSelf = true;
              var call253 = callmethod(this, "rotation:=", [1], opresult252);
              return call253
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            1,
          ];
          func248.variableArities = [
            false,
          ];
          obj166.methods["turn"] = func248;
          func248.definitionLine = 115;
          func248.definitionModule = "kitty";
          var func254 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func254.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call255 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call256 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call257 = callmethod(this, "posY", [0]);
              var call258 = callmethod(var_ctx,"translate", [2], call256, call257);
              lineNumber = 122
              onSelf = true;
              var call259 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call260 = callmethod(this, "image", [0]);
              var call261 = callmethod(call260,"draw", [4], var_ctx, var_dx, var_dy, call259);
              lineNumber = 123
              var call262 = callmethod(var_ctx,"restore", [0]);
              return call262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func254.paramCounts = [
            3,
          ];
          func254.variableArities = [
            false,
          ];
          obj166.methods["draw"] = func254;
          func254.definitionLine = 119;
          func254.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call264 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call265 = callmethod(call264, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call266 = callmethod(call265, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call267 = callmethod(this, "image:=", [1], call266);
              return call267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func263.paramCounts = [
            1,
          ];
          func263.variableArities = [
            false,
          ];
          obj166.methods["createImage"] = func263;
          func263.definitionLine = 126;
          func263.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call269 = callmethod(this, "image:=", [1], var_image__39__);
              return call269
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func268.paramCounts = [
            1,
          ];
          func268.variableArities = [
            false,
          ];
          obj166.methods["setImage"] = func268;
          func268.definitionLine = 130;
          func268.definitionModule = "kitty";
          var func270 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call271 = callmethod(this, "action:=", [1], var_action__39__);
              return call271
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
          obj166.methods["setAction"] = func270;
          func270.definitionLine = 134;
          func270.definitionModule = "kitty";
          var func272 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call273 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call274 = callmethod(this, "posY:=", [1], var_y);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func272.paramCounts = [
            2,
          ];
          func272.variableArities = [
            false,
          ];
          obj166.methods["setLocation"] = func272;
          func272.definitionLine = 138;
          func272.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call276 = callmethod(this, "posX", [0]);
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
          obj166.methods["getX"] = func275;
          func275.definitionLine = 143;
          func275.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call278 = callmethod(this, "posY", [0]);
              return call278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func277.paramCounts = [
            0,
          ];
          func277.variableArities = [
            false,
          ];
          obj166.methods["getY"] = func277;
          func277.definitionLine = 147;
          func277.definitionModule = "kitty";
          var func279 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call280 = callmethod(this, "rotation", [0]);
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
          obj166.methods["getRotation"] = func279;
          func279.definitionLine = 151;
          func279.definitionModule = "kitty";
          sourceObject = obj166;
          lineNumber = 67
          var string281 = new GraceString(")...");
          var string284 = new GraceString(", ");
          var string287 = new GraceString("CREATING ENTITY AT (");
          var opresult289 = callmethod(string287, "++", [1], var_x__39__);
          var opresult291 = callmethod(opresult289, "++", [1], string284);
          var opresult293 = callmethod(opresult291, "++", [1], var_y__39__);
          var opresult295 = callmethod(opresult293, "++", [1], string281);
          var call296 = Grace_print(opresult295);
          sourceObject = obj166;
          lineNumber = 69
          obj166.data["tag"] = var_tag__39__;
          var reader_kitty_tag_297 = function() {
            return this.data["tag"];
          }
          obj166.methods["tag"] = reader_kitty_tag_297;
          obj166.data["tag"] = var_tag__39__;
          var writer_kitty_tag_297 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj166.methods["tag:="] = writer_kitty_tag_297;
          reader_kitty_tag_297.confidential = true;
          writer_kitty_tag_297.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 70
          obj166.data["posX"] = var_x__39__;
          var reader_kitty_posX_298 = function() {
            return this.data["posX"];
          }
          obj166.methods["posX"] = reader_kitty_posX_298;
          obj166.data["posX"] = var_x__39__;
          var writer_kitty_posX_298 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj166.methods["posX:="] = writer_kitty_posX_298;
          reader_kitty_posX_298.confidential = true;
          writer_kitty_posX_298.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 71
          obj166.data["posY"] = var_y__39__;
          var reader_kitty_posY_299 = function() {
            return this.data["posY"];
          }
          obj166.methods["posY"] = reader_kitty_posY_299;
          obj166.data["posY"] = var_y__39__;
          var writer_kitty_posY_299 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj166.methods["posY:="] = writer_kitty_posY_299;
          reader_kitty_posY_299.confidential = true;
          writer_kitty_posY_299.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 72
          obj166.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_300 = function() {
            return this.data["rotation"];
          }
          obj166.methods["rotation"] = reader_kitty_rotation_300;
          obj166.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_300 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj166.methods["rotation:="] = writer_kitty_rotation_300;
          reader_kitty_rotation_300.confidential = true;
          writer_kitty_rotation_300.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 74
          var obj301 = Grace_allocObject();
          obj301.definitionModule = "kitty";
          obj301.definitionLine = 74;
          obj301.outer = this;
          var reader_kitty_outer_302 = function() {
            return this.outer;
          }
          obj301.methods["outer"] = reader_kitty_outer_302;
          function obj_init_301() {
            var origSuperDepth = superDepth;
            superDepth = obj301;
            obj301.annotations = [];
            var func303 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func303.paramCounts[0])
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
            func303.paramCounts = [
              0,
            ];
            func303.variableArities = [
              false,
            ];
            obj301.methods["update"] = func303;
            func303.definitionLine = 75;
            func303.definitionModule = "kitty";
            sourceObject = obj301;
            superDepth = origSuperDepth;
          }
          obj_init_301.apply(obj301, []);
          obj166.data["action"] = obj301;
          var reader_kitty_action_304 = function() {
            return this.data["action"];
          }
          obj166.methods["action"] = reader_kitty_action_304;
          obj166.data["action"] = obj301;
          var writer_kitty_action_304 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj166.methods["action:="] = writer_kitty_action_304;
          reader_kitty_action_304.confidential = true;
          writer_kitty_action_304.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj301)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          obj166.data["image"] = undefined;
          var reader_kitty_image_305 = function() {
            return this.data["image"];
          }
          obj166.methods["image"] = reader_kitty_image_305;
          obj166.data["image"] = undefined;
          var writer_kitty_image_305 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj166.methods["image:="] = writer_kitty_image_305;
          reader_kitty_image_305.confidential = true;
          writer_kitty_image_305.confidential = true;
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 82
          onSelf = true;
          var call306 = callmethod(this, "awake", [0]);
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          sourceObject = obj166;
          lineNumber = 156
          var string307 = new GraceString("ENTITY CREATED");
          var call308 = Grace_print(string307);
          superDepth = origSuperDepth;
        }
        obj_init_166.apply(obj166, []);
        return obj166
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func165.paramCounts = [
      1,
      1,
      1,
    ];
    func165.variableArities = [
      false,
      false,
      false,
    ];
    obj163.methods["new()x()y"] = func165;
    func165.definitionLine = 65;
    func165.definitionModule = "kitty";
    var func309 = function(argcv) {
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
        var obj310 = Grace_allocObject();
        obj310.definitionModule = "kitty";
        obj310.definitionLine = 65;
        var inho310 = inheritingObject;
        while (inho310.superobj) inho310 = inho310.superobj;
        inho310.superobj = obj310;
        obj310.data = inheritingObject.data;
        obj310.outer = this;
        var reader_kitty_outer_311 = function() {
          return this.outer;
        }
        obj310.methods["outer"] = reader_kitty_outer_311;
        function obj_init_310() {
          var origSuperDepth = superDepth;
          superDepth = obj310;
          obj310.annotations = [];
          var func312 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              var string313 = new GraceString("realyee.png");
              onSelf = true;
              var call314 = callmethod(this, "createImage", [1], string313);
              return call314
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func312.paramCounts = [
            0,
          ];
          func312.variableArities = [
            false,
          ];
          obj310.methods["awake"] = func312;
          func312.definitionLine = 85;
          func312.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func315.paramCounts[0])
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
          func315.paramCounts = [
            0,
          ];
          func315.variableArities = [
            false,
          ];
          obj310.methods["start"] = func315;
          func315.definitionLine = 91;
          func315.definitionModule = "kitty";
          var func316 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call317 = callmethod(this, "action", [0]);
              var call318 = callmethod(call317,"update", [0]);
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
          obj310.methods["update"] = func316;
          func316.definitionLine = 96;
          func316.definitionModule = "kitty";
          var func319 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func319.paramCounts[0])
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
          func319.paramCounts = [
            0,
          ];
          func319.variableArities = [
            false,
          ];
          obj310.methods["onDestroy"] = func319;
          func319.definitionLine = 101;
          func319.definitionModule = "kitty";
          var func320 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 97
              lineNumber = 106
              onSelf = true;
              var call323 = callmethod(this, "rotation", [0]);
              var prod325 = callmethod(call323, "*", [1], new GraceNum(3.14159));
              var quotient327 = callmethod(prod325, "/", [1], new GraceNum(180));
              var call328 = callmethod(var_math,"cos", [1], quotient327);
              var prod331 = callmethod(var_distance, "*", [1], call328);
              onSelf = true;
              var call333 = callmethod(this, "posX", [0]);
              var opresult335 = callmethod(call333, "+", [1], prod331);
              onSelf = true;
              var call336 = callmethod(this, "posX:=", [1], opresult335);
              lineNumber = 107
              lineNumber = 97
              lineNumber = 107
              onSelf = true;
              var call339 = callmethod(this, "rotation", [0]);
              var prod341 = callmethod(call339, "*", [1], new GraceNum(3.14159));
              var quotient343 = callmethod(prod341, "/", [1], new GraceNum(180));
              var call344 = callmethod(var_math,"sin", [1], quotient343);
              var prod347 = callmethod(var_distance, "*", [1], call344);
              onSelf = true;
              var call349 = callmethod(this, "posY", [0]);
              var opresult351 = callmethod(call349, "+", [1], prod347);
              onSelf = true;
              var call352 = callmethod(this, "posY:=", [1], opresult351);
              return call352
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func320.paramCounts = [
            1,
          ];
          func320.variableArities = [
            false,
          ];
          obj310.methods["move"] = func320;
          func320.definitionLine = 105;
          func320.definitionModule = "kitty";
          var func353 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func353.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 97
              lineNumber = 111
              onSelf = true;
              var call356 = callmethod(this, "rotation", [0]);
              var opresult359 = callmethod(new GraceNum(90), "+", [1], call356);
              var prod361 = callmethod(opresult359, "*", [1], new GraceNum(3.14159));
              var quotient363 = callmethod(prod361, "/", [1], new GraceNum(180));
              var call364 = callmethod(var_math,"cos", [1], quotient363);
              var prod367 = callmethod(var_distance, "*", [1], call364);
              onSelf = true;
              var call369 = callmethod(this, "posX", [0]);
              var opresult371 = callmethod(call369, "+", [1], prod367);
              onSelf = true;
              var call372 = callmethod(this, "posX:=", [1], opresult371);
              lineNumber = 112
              lineNumber = 97
              lineNumber = 112
              onSelf = true;
              var call375 = callmethod(this, "rotation", [0]);
              var opresult378 = callmethod(new GraceNum(90), "+", [1], call375);
              var prod380 = callmethod(opresult378, "*", [1], new GraceNum(3.14159));
              var quotient382 = callmethod(prod380, "/", [1], new GraceNum(180));
              var call383 = callmethod(var_math,"sin", [1], quotient382);
              var prod386 = callmethod(var_distance, "*", [1], call383);
              onSelf = true;
              var call388 = callmethod(this, "posY", [0]);
              var opresult390 = callmethod(call388, "+", [1], prod386);
              onSelf = true;
              var call391 = callmethod(this, "posY:=", [1], opresult390);
              return call391
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func353.paramCounts = [
            1,
          ];
          func353.variableArities = [
            false,
          ];
          obj310.methods["strafe"] = func353;
          func353.definitionLine = 110;
          func353.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
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
              var call394 = callmethod(this, "rotation", [0]);
              var opresult396 = callmethod(call394, "+", [1], var_angle);
              onSelf = true;
              var call397 = callmethod(this, "rotation:=", [1], opresult396);
              return call397
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
          obj310.methods["turn"] = func392;
          func392.definitionLine = 115;
          func392.definitionModule = "kitty";
          var func398 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var call399 = callmethod(var_ctx,"save", [0]);
              lineNumber = 121
              onSelf = true;
              var call400 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call401 = callmethod(this, "posY", [0]);
              var call402 = callmethod(var_ctx,"translate", [2], call400, call401);
              lineNumber = 122
              onSelf = true;
              var call403 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call404 = callmethod(this, "image", [0]);
              var call405 = callmethod(call404,"draw", [4], var_ctx, var_dx, var_dy, call403);
              lineNumber = 123
              var call406 = callmethod(var_ctx,"restore", [0]);
              return call406
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func398.paramCounts = [
            3,
          ];
          func398.variableArities = [
            false,
          ];
          obj310.methods["draw"] = func398;
          func398.definitionLine = 119;
          func398.definitionModule = "kitty";
          var func407 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func407.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 123
              lineNumber = 127
              var call408 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call409 = callmethod(call408, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call410 = callmethod(call409, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call411 = callmethod(this, "image:=", [1], call410);
              return call411
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func407.paramCounts = [
            1,
          ];
          func407.variableArities = [
            false,
          ];
          obj310.methods["createImage"] = func407;
          func407.definitionLine = 126;
          func407.definitionModule = "kitty";
          var func412 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func412.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 127
              lineNumber = 131
              onSelf = true;
              var call413 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj310.methods["setImage"] = func412;
          func412.definitionLine = 130;
          func412.definitionModule = "kitty";
          var func414 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              lineNumber = 127
              lineNumber = 135
              onSelf = true;
              var call415 = callmethod(this, "action:=", [1], var_action__39__);
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
          obj310.methods["setAction"] = func414;
          func414.definitionLine = 134;
          func414.definitionModule = "kitty";
          var func416 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func416.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 127
              lineNumber = 139
              onSelf = true;
              var call417 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 141
              lineNumber = 127
              lineNumber = 140
              onSelf = true;
              var call418 = callmethod(this, "posY:=", [1], var_y);
              return call418
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func416.paramCounts = [
            2,
          ];
          func416.variableArities = [
            false,
          ];
          obj310.methods["setLocation"] = func416;
          func416.definitionLine = 138;
          func416.definitionModule = "kitty";
          var func419 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func419.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call420 = callmethod(this, "posX", [0]);
              return call420
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
          obj310.methods["getX"] = func419;
          func419.definitionLine = 143;
          func419.definitionModule = "kitty";
          var func421 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func421.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 148
              onSelf = true;
              var call422 = callmethod(this, "posY", [0]);
              return call422
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
          obj310.methods["getY"] = func421;
          func421.definitionLine = 147;
          func421.definitionModule = "kitty";
          var func423 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 152
              onSelf = true;
              var call424 = callmethod(this, "rotation", [0]);
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
          obj310.methods["getRotation"] = func423;
          func423.definitionLine = 151;
          func423.definitionModule = "kitty";
          sourceObject = obj310;
          lineNumber = 67
          var string425 = new GraceString(")...");
          var string428 = new GraceString(", ");
          var string431 = new GraceString("CREATING ENTITY AT (");
          var opresult433 = callmethod(string431, "++", [1], var_x__39__);
          var opresult435 = callmethod(opresult433, "++", [1], string428);
          var opresult437 = callmethod(opresult435, "++", [1], var_y__39__);
          var opresult439 = callmethod(opresult437, "++", [1], string425);
          var call440 = Grace_print(opresult439);
          sourceObject = obj310;
          lineNumber = 69
          obj310.data["tag"] = var_tag__39__;
          var reader_kitty_tag_441 = function() {
            return this.data["tag"];
          }
          obj310.methods["tag"] = reader_kitty_tag_441;
          obj310.data["tag"] = var_tag__39__;
          var writer_kitty_tag_441 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj310.methods["tag:="] = writer_kitty_tag_441;
          reader_kitty_tag_441.confidential = true;
          writer_kitty_tag_441.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 70
          obj310.data["posX"] = var_x__39__;
          var reader_kitty_posX_442 = function() {
            return this.data["posX"];
          }
          obj310.methods["posX"] = reader_kitty_posX_442;
          obj310.data["posX"] = var_x__39__;
          var writer_kitty_posX_442 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj310.methods["posX:="] = writer_kitty_posX_442;
          reader_kitty_posX_442.confidential = true;
          writer_kitty_posX_442.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 71
          obj310.data["posY"] = var_y__39__;
          var reader_kitty_posY_443 = function() {
            return this.data["posY"];
          }
          obj310.methods["posY"] = reader_kitty_posY_443;
          obj310.data["posY"] = var_y__39__;
          var writer_kitty_posY_443 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj310.methods["posY:="] = writer_kitty_posY_443;
          reader_kitty_posY_443.confidential = true;
          writer_kitty_posY_443.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 72
          obj310.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_444 = function() {
            return this.data["rotation"];
          }
          obj310.methods["rotation"] = reader_kitty_rotation_444;
          obj310.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_444 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj310.methods["rotation:="] = writer_kitty_rotation_444;
          reader_kitty_rotation_444.confidential = true;
          writer_kitty_rotation_444.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 74
          var obj445 = Grace_allocObject();
          obj445.definitionModule = "kitty";
          obj445.definitionLine = 74;
          obj445.outer = this;
          var reader_kitty_outer_446 = function() {
            return this.outer;
          }
          obj445.methods["outer"] = reader_kitty_outer_446;
          function obj_init_445() {
            var origSuperDepth = superDepth;
            superDepth = obj445;
            obj445.annotations = [];
            var func447 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func447.paramCounts[0])
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
            func447.paramCounts = [
              0,
            ];
            func447.variableArities = [
              false,
            ];
            obj445.methods["update"] = func447;
            func447.definitionLine = 75;
            func447.definitionModule = "kitty";
            sourceObject = obj445;
            superDepth = origSuperDepth;
          }
          obj_init_445.apply(obj445, []);
          obj310.data["action"] = obj445;
          var reader_kitty_action_448 = function() {
            return this.data["action"];
          }
          obj310.methods["action"] = reader_kitty_action_448;
          obj310.data["action"] = obj445;
          var writer_kitty_action_448 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj310.methods["action:="] = writer_kitty_action_448;
          reader_kitty_action_448.confidential = true;
          writer_kitty_action_448.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj445)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          obj310.data["image"] = undefined;
          var reader_kitty_image_449 = function() {
            return this.data["image"];
          }
          obj310.methods["image"] = reader_kitty_image_449;
          obj310.data["image"] = undefined;
          var writer_kitty_image_449 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj310.methods["image:="] = writer_kitty_image_449;
          reader_kitty_image_449.confidential = true;
          writer_kitty_image_449.confidential = true;
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 82
          onSelf = true;
          var call450 = callmethod(this, "awake", [0]);
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          sourceObject = obj310;
          lineNumber = 156
          var string451 = new GraceString("ENTITY CREATED");
          var call452 = Grace_print(string451);
          superDepth = origSuperDepth;
        }
        obj_init_310.apply(inheritingObject, []);
        return obj310
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj163.methods["new()x()y()object"] = func309;
    var func453 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
        var string454 = new GraceString("class KittyEntity");
        return string454
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func453.paramCounts = [
    ];
    func453.variableArities = [
    ];
    obj163.methods["asDebugString"] = func453;
    func453.definitionLine = 65;
    func453.definitionModule = "kitty";
    sourceObject = obj163;
    sourceObject = obj163;
    superDepth = origSuperDepth;
  }
  obj_init_163.apply(obj163, []);
  var var_KittyEntity = obj163;
  lineNumber = 159
  lineNumber = 167
  var func455 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func455.paramCounts[0])
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
  func455.paramCounts = [
    0,
  ];
  func455.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func455;
  func455.definitionLine = 167;
  func455.definitionModule = "kitty";
  var obj456 = Grace_allocObject();
  obj456.definitionModule = "kitty";
  obj456.definitionLine = 167;
  obj456.outer = this;
  var reader_kitty_outer_457 = function() {
    return this.outer;
  }
  obj456.methods["outer"] = reader_kitty_outer_457;
  function obj_init_456() {
    var origSuperDepth = superDepth;
    superDepth = obj456;
    obj456.annotations = [];
    var func458 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func458.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj459 = Grace_allocObject();
        obj459.definitionModule = "kitty";
        obj459.definitionLine = 167;
        obj459.outer = this;
        var reader_kitty_outer_460 = function() {
          return this.outer;
        }
        obj459.methods["outer"] = reader_kitty_outer_460;
        function obj_init_459() {
          var origSuperDepth = superDepth;
          superDepth = obj459;
          obj459.annotations = [];
          var func461 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func461.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var if462 = var_done;
              lineNumber = 199
              onSelf = true;
              var call463 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call463)) {
                lineNumber = 201
                lineNumber = 200
                var bool464 = new GraceBoolean(false)
                return bool464
              }
              lineNumber = 204
              lineNumber = 167
              lineNumber = 203
              var call465 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call466 = callmethod(this, "document:=", [1], call465);
              lineNumber = 204
              lineNumber = 203
              lineNumber = 204
              var string467 = new GraceString("standard-canvas");
              onSelf = true;
              var call468 = callmethod(this, "document", [0]);
              var call469 = callmethod(call468,"getElementById", [1], string467);
              onSelf = true;
              var call470 = callmethod(this, "canvas:=", [1], call469);
              lineNumber = 206
              lineNumber = 203
              lineNumber = 205
              onSelf = true;
              var call471 = callmethod(this, "canvas", [0]);
              var call472 = callmethod(call471,"width", [0]);
              onSelf = true;
              var call473 = callmethod(this, "canvasWidth:=", [1], call472);
              lineNumber = 209
              lineNumber = 205
              lineNumber = 206
              onSelf = true;
              var call474 = callmethod(this, "canvas", [0]);
              var call475 = callmethod(call474,"height", [0]);
              onSelf = true;
              var call476 = callmethod(this, "canvasHeight:=", [1], call475);
              lineNumber = 221
              var block477 = Grace_allocObject();
              block477.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block477.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block477.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block477.methods["match"] = GraceBlock_match;
              block477.methods["prefix?"] = GraceBlock_lift;
              block477.receiver = this;
              block477.className = 'block<kitty:221>';
              block477.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 212
                lineNumber = 211
                onSelf = true;
                var call478 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call480 = callmethod(this, "canvas", [0]);
                var call481 = callmethod(call480,"offsetWidth", [0]);
                onSelf = true;
                var call483 = callmethod(this, "canvas", [0]);
                var call484 = callmethod(call483,"offsetLeft", [0]);
                var call486 = callmethod(var_ev,"clientX", [0]);
                var diff488 = callmethod(call486, "-", [1], call484);
                var quotient490 = callmethod(diff488, "/", [1], call481);
                var prod492 = callmethod(quotient490, "*", [1], call478);
                var var_x = prod492;
                lineNumber = 212;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 216
                lineNumber = 212
                onSelf = true;
                var call493 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call495 = callmethod(this, "canvas", [0]);
                var call496 = callmethod(call495,"offsetHeight", [0]);
                onSelf = true;
                var call498 = callmethod(this, "canvas", [0]);
                var call499 = callmethod(call498,"offsetTop", [0]);
                var call501 = callmethod(var_ev,"clientY", [0]);
                var diff503 = callmethod(call501, "-", [1], call499);
                var quotient505 = callmethod(diff503, "/", [1], call496);
                var prod507 = callmethod(quotient505, "*", [1], call493);
                var var_y = prod507;
                lineNumber = 216;
                moduleName = "kitty";
                lineNumber = 212
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 220
                var if508 = var_done;
                lineNumber = 216
                var opresult511 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call514 = callmethod(this, "canvasWidth", [0]);
                var diff516 = callmethod(call514, "-", [1], new GraceNum(20));
                var opresult519 = callmethod(var_x, ">", [1], diff516);
                var opresult521 = callmethod(opresult519, "&&", [1], opresult511);
                if (Grace_isTrue(opresult521)) {
                  lineNumber = 217
                  var call522 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 218
                  onSelf = true;
                  var call523 = callmethod(this, "stop", [0]);
                  if508 = call523;
                }
                return if508;
              };
              var_mouseDownListener = block477;
              lineNumber = 221
              var string524 = new GraceString("mousedown");
              onSelf = true;
              var call525 = callmethod(this, "canvas", [0]);
              var call526 = callmethod(call525,"addEventListener", [2], string524, var_mouseDownListener);
              lineNumber = 231
              var block527 = Grace_allocObject();
              block527.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block527.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block527.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block527.methods["match"] = GraceBlock_match;
              block527.methods["prefix?"] = GraceBlock_lift;
              block527.receiver = this;
              block527.className = 'block<kitty:231>';
              block527.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 229
                var if528 = var_done;
                lineNumber = 226
                var call530 = callmethod(var_ev,"keyCode", [0]);
                var opresult532 = callmethod(call530, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult532)) {
                  lineNumber = 227
                  onSelf = true;
                  var call533 = callmethod(this, "stop", [0]);
                  if528 = call533;
                }
                lineNumber = 230
                lineNumber = 226
                lineNumber = 229
                var call534 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call535 = callmethod(this, "currentKeyDown:=", [1], call534);
                return call535;
              };
              var_keyDownListener = block527;
              lineNumber = 231
              var string536 = new GraceString("keydown");
              onSelf = true;
              var call537 = callmethod(this, "document", [0]);
              var call538 = callmethod(call537,"addEventListener", [2], string536, var_keyDownListener);
              lineNumber = 237
              var block539 = Grace_allocObject();
              block539.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block539.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block539.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block539.methods["match"] = GraceBlock_match;
              block539.methods["prefix?"] = GraceBlock_lift;
              block539.receiver = this;
              block539.className = 'block<kitty:237>';
              block539.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 236
                lineNumber = 229
                lineNumber = 236
                lineNumber = 235
                var call540 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call541 = callmethod(this, "currentKeyDown:=", [1], call540);
                return call541;
              };
              var_keyUpListener = block539;
              lineNumber = 237
              var string542 = new GraceString("keyup");
              onSelf = true;
              var call543 = callmethod(this, "document", [0]);
              var call544 = callmethod(call543,"addEventListener", [2], string542, var_keyUpListener);
              lineNumber = 239
              lineNumber = 229
              lineNumber = 239
              var string545 = new GraceString("canvas");
              var call546 = callmethod(var_dom,"document", [0]);
              var call547 = callmethod(call546,"createElement", [1], string545);
              onSelf = true;
              var call548 = callmethod(this, "backingCanvas:=", [1], call547);
              lineNumber = 241
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call549 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call550 = callmethod(this, "backingCanvas", [0]);
              var call551 = callmethod(call550,"height:=", [1], call549);
              lineNumber = 242
              lineNumber = 239
              lineNumber = 241
              onSelf = true;
              var call552 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call553 = callmethod(this, "backingCanvas", [0]);
              var call554 = callmethod(call553,"width:=", [1], call552);
              lineNumber = 242
              lineNumber = 239
              lineNumber = 242
              var string555 = new GraceString("2d");
              onSelf = true;
              var call556 = callmethod(this, "backingCanvas", [0]);
              var call557 = callmethod(call556,"getContext", [1], string555);
              onSelf = true;
              var call558 = callmethod(this, "backingContext:=", [1], call557);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 243
              var string559 = new GraceString("2d");
              onSelf = true;
              var call560 = callmethod(this, "canvas", [0]);
              var call561 = callmethod(call560,"getContext", [1], string559);
              onSelf = true;
              var call562 = callmethod(this, "mctx:=", [1], call561);
              lineNumber = 246
              var string563 = new GraceString("doggo.jpg");
              onSelf = true;
              var call564 = callmethod(this, "setBackground", [1], string563);
              lineNumber = 254
              lineNumber = 239
              lineNumber = 248
              var bool565 = new GraceBoolean(true)
              onSelf = true;
              var call566 = callmethod(this, "isInit:=", [1], bool565);
              return call566
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func461.paramCounts = [
            0,
          ];
          func461.variableArities = [
            false,
          ];
          obj459.methods["init"] = func461;
          func461.definitionLine = 195;
          func461.definitionModule = "kitty";
          var func567 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func567.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 239
              lineNumber = 259
              var bool568 = new GraceBoolean(true)
              onSelf = true;
              var call569 = callmethod(this, "isRunning:=", [1], bool568);
              lineNumber = 260
              var block570 = Grace_allocObject();
              block570.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block570.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block570.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block570.methods["match"] = GraceBlock_match;
              block570.methods["prefix?"] = GraceBlock_lift;
              block570.receiver = this;
              block570.className = 'block<kitty:260>';
              block570.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call571 = callmethod(this, "isRunning", [0]);
                return call571;
              };
              lineNumber = 264
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
              block572.className = 'block<kitty:264>';
              block572.real = function(
              ) {
                sourceObject = this;
                lineNumber = 261
                onSelf = true;
                var call573 = callmethod(this, "update", [0]);
                return call573;
              };
              lineNumber = 260
              var call574 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block570, new GraceNum(10), block572);
              return call574
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
          obj459.methods["start"] = func567;
          func567.definitionLine = 257;
          func567.definitionModule = "kitty";
          var func575 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func575.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 239
              lineNumber = 272
              onSelf = true;
              var call576 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call577 = callmethod(this, "mctx", [0]);
              var call578 = callmethod(call577,"fillStyle:=", [1], call576);
              lineNumber = 273
              onSelf = true;
              var call579 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call580 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call581 = callmethod(this, "mctx", [0]);
              var call582 = callmethod(call581,"fillRect", [4], new GraceNum(0), new GraceNum(0), call579, call580);
              lineNumber = 274
              onSelf = true;
              var call583 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call584 = callmethod(this, "mctx", [0]);
              var call585 = callmethod(call584,"drawImage", [3], call583, new GraceNum(0), new GraceNum(0));
              lineNumber = 275
              onSelf = true;
              var call586 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call588 = callmethod(this, "canvasWidth", [0]);
              var quotient590 = callmethod(call588, "/", [1], new GraceNum(2));
              onSelf = true;
              var call592 = callmethod(this, "canvasHeight", [0]);
              var quotient594 = callmethod(call592, "/", [1], new GraceNum(2));
              onSelf = true;
              var call595 = callmethod(this, "background", [0]);
              var call596 = callmethod(call595,"draw", [4], call586, quotient590, quotient594, new GraceNum(0));
              lineNumber = 278
              onSelf = true;
              var call597 = callmethod(this, "entities", [0]);
              lineNumber = 284
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
              block598.className = 'block<kitty:284>';
              block598.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 279
                var call599 = callmethod(var_entity,"update", [0]);
                lineNumber = 280
                onSelf = true;
                var call600 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call602 = callmethod(this, "canvasWidth", [0]);
                var quotient604 = callmethod(call602, "/", [1], new GraceNum(2));
                onSelf = true;
                var call606 = callmethod(this, "canvasHeight", [0]);
                var quotient608 = callmethod(call606, "/", [1], new GraceNum(2));
                var call609 = callmethod(var_entity,"draw", [3], call600, quotient604, quotient608);
                return call609;
              };
              var call610 = callmethod(Grace_prelude,"for()do", [1, 1], call597, block598);
              return call610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func575.paramCounts = [
            0,
          ];
          func575.variableArities = [
            false,
          ];
          obj459.methods["update"] = func575;
          func575.definitionLine = 267;
          func575.definitionModule = "kitty";
          var func611 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 287
              var string612 = new GraceString("WORLD STOPPING...");
              var call613 = Grace_print(string612);
              lineNumber = 289
              lineNumber = 279
              lineNumber = 288
              var bool614 = new GraceBoolean(false)
              onSelf = true;
              var call615 = callmethod(this, "isRunning:=", [1], bool614);
              lineNumber = 289
              var string616 = new GraceString("mousedown");
              onSelf = true;
              var call617 = callmethod(this, "canvas", [0]);
              var call618 = callmethod(call617,"removeEventListener", [2], string616, var_mouseDownListener);
              lineNumber = 290
              var string619 = new GraceString("keydown");
              onSelf = true;
              var call620 = callmethod(this, "document", [0]);
              var call621 = callmethod(call620,"removeEventListener", [2], string619, var_keyDownListener);
              lineNumber = 291
              var string622 = new GraceString("keyup");
              onSelf = true;
              var call623 = callmethod(this, "document", [0]);
              var call624 = callmethod(call623,"removeEventListener", [2], string622, var_keyUpListener);
              return call624
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
          obj459.methods["stop"] = func611;
          func611.definitionLine = 286;
          func611.definitionModule = "kitty";
          var func625 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 296
              lineNumber = 295
              onSelf = true;
              var call626 = callmethod(this, "currentKeyDown", [0]);
              var opresult629 = callmethod(var_key, "==", [1], call626);
              return opresult629
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func625.paramCounts = [
            1,
          ];
          func625.variableArities = [
            false,
          ];
          obj459.methods["isKeyDown"] = func625;
          func625.definitionLine = 294;
          func625.definitionModule = "kitty";
          var func630 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func630.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 299
              lineNumber = 279
              lineNumber = 299
              onSelf = true;
              var call631 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call632 = callmethod(this, "canvasHeight", [0]);
              var call633 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call634 = callmethod(call633, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call635 = callmethod(call634, "Image()width()height", [1, 1, 1], var_url, call631, call632);
              onSelf = true;
              var call636 = callmethod(this, "background:=", [1], call635);
              return call636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func630.paramCounts = [
            1,
          ];
          func630.variableArities = [
            false,
          ];
          obj459.methods["setBackground"] = func630;
          func630.definitionLine = 298;
          func630.definitionModule = "kitty";
          var func637 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 303
              onSelf = true;
              var call638 = callmethod(this, "entities", [0]);
              var call639 = callmethod(call638,"push", [1], var_e);
              return call639
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func637.paramTypes = [];
          func637.paramTypes.push([]);
          func637.paramCounts = [
            1,
          ];
          func637.variableArities = [
            false,
          ];
          obj459.methods["addEntity"] = func637;
          func637.definitionLine = 302;
          func637.definitionModule = "kitty";
          var func640 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func640.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 308
              lineNumber = 307
              onSelf = true;
              var call641 = callmethod(this, "mctx", [0]);
              return call641
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func640.paramCounts = [
            0,
          ];
          func640.variableArities = [
            false,
          ];
          obj459.methods["getContext"] = func640;
          func640.definitionLine = 306;
          func640.definitionModule = "kitty";
          sourceObject = obj459;
          obj459.data["background"] = undefined;
          var reader_kitty_background_642 = function() {
            return this.data["background"];
          }
          obj459.methods["background"] = reader_kitty_background_642;
          obj459.data["background"] = undefined;
          var writer_kitty_background_642 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj459.methods["background:="] = writer_kitty_background_642;
          reader_kitty_background_642.confidential = true;
          writer_kitty_background_642.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 172
          var string643 = new GraceString("black");
          obj459.data["backgroundColour"] = string643;
          var reader_kitty_backgroundColour_644 = function() {
            return this.data["backgroundColour"];
          }
          obj459.methods["backgroundColour"] = reader_kitty_backgroundColour_644;
          obj459.data["backgroundColour"] = string643;
          var writer_kitty_backgroundColour_644 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj459.methods["backgroundColour:="] = writer_kitty_backgroundColour_644;
          reader_kitty_backgroundColour_644.confidential = true;
          writer_kitty_backgroundColour_644.confidential = true;
          lineNumber = 174;
          moduleName = "kitty";
          lineNumber = 172
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string643)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["document"] = undefined;
          var reader_kitty_document_645 = function() {
            return this.data["document"];
          }
          obj459.methods["document"] = reader_kitty_document_645;
          obj459.data["document"] = undefined;
          var writer_kitty_document_645 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj459.methods["document:="] = writer_kitty_document_645;
          reader_kitty_document_645.confidential = true;
          writer_kitty_document_645.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_646 = function() {
            return this.data["backingCanvas"];
          }
          obj459.methods["backingCanvas"] = reader_kitty_backingCanvas_646;
          obj459.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_646 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj459.methods["backingCanvas:="] = writer_kitty_backingCanvas_646;
          reader_kitty_backingCanvas_646.confidential = true;
          writer_kitty_backingCanvas_646.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["backingContext"] = undefined;
          var reader_kitty_backingContext_647 = function() {
            return this.data["backingContext"];
          }
          obj459.methods["backingContext"] = reader_kitty_backingContext_647;
          obj459.data["backingContext"] = undefined;
          var writer_kitty_backingContext_647 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj459.methods["backingContext:="] = writer_kitty_backingContext_647;
          reader_kitty_backingContext_647.confidential = true;
          writer_kitty_backingContext_647.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["canvas"] = undefined;
          var reader_kitty_canvas_648 = function() {
            return this.data["canvas"];
          }
          obj459.methods["canvas"] = reader_kitty_canvas_648;
          obj459.data["canvas"] = undefined;
          var writer_kitty_canvas_648 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj459.methods["canvas:="] = writer_kitty_canvas_648;
          reader_kitty_canvas_648.confidential = true;
          writer_kitty_canvas_648.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_649 = function() {
            return this.data["canvasWidth"];
          }
          obj459.methods["canvasWidth"] = reader_kitty_canvasWidth_649;
          obj459.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_649 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj459.methods["canvasWidth:="] = writer_kitty_canvasWidth_649;
          reader_kitty_canvasWidth_649.confidential = true;
          writer_kitty_canvasWidth_649.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_650 = function() {
            return this.data["canvasHeight"];
          }
          obj459.methods["canvasHeight"] = reader_kitty_canvasHeight_650;
          obj459.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_650 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj459.methods["canvasHeight:="] = writer_kitty_canvasHeight_650;
          reader_kitty_canvasHeight_650.confidential = true;
          writer_kitty_canvasHeight_650.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 183
          var call651 = callmethod(var_collections,"list", [0]);
          var call652 = callmethod(call651,"new", [0]);
          obj459.data["entities"] = call652;
          var reader_kitty_entities_653 = function() {
            return this.data["entities"];
          }
          obj459.methods["entities"] = reader_kitty_entities_653;
          obj459.data["entities"] = call652;
          var writer_kitty_entities_653 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj459.methods["entities:="] = writer_kitty_entities_653;
          reader_kitty_entities_653.confidential = true;
          writer_kitty_entities_653.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call652)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 185
          var bool654 = new GraceBoolean(false)
          obj459.data["isInit"] = bool654;
          var reader_kitty_isInit_655 = function() {
            return this.data["isInit"];
          }
          obj459.methods["isInit"] = reader_kitty_isInit_655;
          obj459.data["isInit"] = bool654;
          var writer_kitty_isInit_655 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj459.methods["isInit:="] = writer_kitty_isInit_655;
          reader_kitty_isInit_655.confidential = true;
          writer_kitty_isInit_655.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 185
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool654)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 186
          var bool656 = new GraceBoolean(false)
          obj459.data["isRunning"] = bool656;
          var reader_kitty_isRunning_657 = function() {
            return this.data["isRunning"];
          }
          obj459.methods["isRunning"] = reader_kitty_isRunning_657;
          obj459.data["isRunning"] = bool656;
          var writer_kitty_isRunning_657 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj459.methods["isRunning:="] = writer_kitty_isRunning_657;
          reader_kitty_isRunning_657.confidential = true;
          writer_kitty_isRunning_657.confidential = true;
          lineNumber = 188;
          moduleName = "kitty";
          lineNumber = 186
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool656)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj459.mutable = true;
          sourceObject = obj459;
          obj459.data["mctx"] = undefined;
          var reader_kitty_mctx_658 = function() {
            return this.data["mctx"];
          }
          obj459.methods["mctx"] = reader_kitty_mctx_658;
          obj459.data["mctx"] = undefined;
          var writer_kitty_mctx_658 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj459.methods["mctx:="] = writer_kitty_mctx_658;
          reader_kitty_mctx_658.confidential = true;
          writer_kitty_mctx_658.confidential = true;
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 192
          lineNumber = 190
          var call659 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj459.data["currentKeyDown"] = call659;
          var reader_kitty_currentKeyDown_660 = function() {
            return this.data["currentKeyDown"];
          }
          obj459.methods["currentKeyDown"] = reader_kitty_currentKeyDown_660;
          obj459.data["currentKeyDown"] = call659;
          var writer_kitty_currentKeyDown_660 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj459.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_660;
          reader_kitty_currentKeyDown_660.confidential = true;
          writer_kitty_currentKeyDown_660.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call659)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj459.mutable = true;
          sourceObject = obj459;
          lineNumber = 192
          onSelf = true;
          var call661 = callmethod(this, "init", [0]);
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          sourceObject = obj459;
          superDepth = origSuperDepth;
        }
        obj_init_459.apply(obj459, []);
        return obj459
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func458.paramCounts = [
      0,
    ];
    func458.variableArities = [
      false,
    ];
    obj456.methods["new"] = func458;
    func458.definitionLine = 167;
    func458.definitionModule = "kitty";
    var func662 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj663 = Grace_allocObject();
        obj663.definitionModule = "kitty";
        obj663.definitionLine = 167;
        var inho663 = inheritingObject;
        while (inho663.superobj) inho663 = inho663.superobj;
        inho663.superobj = obj663;
        obj663.data = inheritingObject.data;
        obj663.outer = this;
        var reader_kitty_outer_664 = function() {
          return this.outer;
        }
        obj663.methods["outer"] = reader_kitty_outer_664;
        function obj_init_663() {
          var origSuperDepth = superDepth;
          superDepth = obj663;
          obj663.annotations = [];
          var func665 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func665.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var if666 = var_done;
              lineNumber = 199
              onSelf = true;
              var call667 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call667)) {
                lineNumber = 201
                lineNumber = 200
                var bool668 = new GraceBoolean(false)
                return bool668
              }
              lineNumber = 204
              lineNumber = 183
              lineNumber = 203
              var call669 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call670 = callmethod(this, "document:=", [1], call669);
              lineNumber = 204
              lineNumber = 203
              lineNumber = 204
              var string671 = new GraceString("standard-canvas");
              onSelf = true;
              var call672 = callmethod(this, "document", [0]);
              var call673 = callmethod(call672,"getElementById", [1], string671);
              onSelf = true;
              var call674 = callmethod(this, "canvas:=", [1], call673);
              lineNumber = 206
              lineNumber = 203
              lineNumber = 205
              onSelf = true;
              var call675 = callmethod(this, "canvas", [0]);
              var call676 = callmethod(call675,"width", [0]);
              onSelf = true;
              var call677 = callmethod(this, "canvasWidth:=", [1], call676);
              lineNumber = 209
              lineNumber = 205
              lineNumber = 206
              onSelf = true;
              var call678 = callmethod(this, "canvas", [0]);
              var call679 = callmethod(call678,"height", [0]);
              onSelf = true;
              var call680 = callmethod(this, "canvasHeight:=", [1], call679);
              lineNumber = 221
              var block681 = Grace_allocObject();
              block681.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block681.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block681.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block681.methods["match"] = GraceBlock_match;
              block681.methods["prefix?"] = GraceBlock_lift;
              block681.receiver = this;
              block681.className = 'block<kitty:221>';
              block681.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 212
                lineNumber = 211
                onSelf = true;
                var call682 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call684 = callmethod(this, "canvas", [0]);
                var call685 = callmethod(call684,"offsetWidth", [0]);
                onSelf = true;
                var call687 = callmethod(this, "canvas", [0]);
                var call688 = callmethod(call687,"offsetLeft", [0]);
                var call690 = callmethod(var_ev,"clientX", [0]);
                var diff692 = callmethod(call690, "-", [1], call688);
                var quotient694 = callmethod(diff692, "/", [1], call685);
                var prod696 = callmethod(quotient694, "*", [1], call682);
                var var_x = prod696;
                lineNumber = 212;
                moduleName = "kitty";
                lineNumber = 211
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 216
                lineNumber = 212
                onSelf = true;
                var call697 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call699 = callmethod(this, "canvas", [0]);
                var call700 = callmethod(call699,"offsetHeight", [0]);
                onSelf = true;
                var call702 = callmethod(this, "canvas", [0]);
                var call703 = callmethod(call702,"offsetTop", [0]);
                var call705 = callmethod(var_ev,"clientY", [0]);
                var diff707 = callmethod(call705, "-", [1], call703);
                var quotient709 = callmethod(diff707, "/", [1], call700);
                var prod711 = callmethod(quotient709, "*", [1], call697);
                var var_y = prod711;
                lineNumber = 216;
                moduleName = "kitty";
                lineNumber = 212
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 220
                var if712 = var_done;
                lineNumber = 216
                var opresult715 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call718 = callmethod(this, "canvasWidth", [0]);
                var diff720 = callmethod(call718, "-", [1], new GraceNum(20));
                var opresult723 = callmethod(var_x, ">", [1], diff720);
                var opresult725 = callmethod(opresult723, "&&", [1], opresult715);
                if (Grace_isTrue(opresult725)) {
                  lineNumber = 217
                  var call726 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 218
                  onSelf = true;
                  var call727 = callmethod(this, "stop", [0]);
                  if712 = call727;
                }
                return if712;
              };
              var_mouseDownListener = block681;
              lineNumber = 221
              var string728 = new GraceString("mousedown");
              onSelf = true;
              var call729 = callmethod(this, "canvas", [0]);
              var call730 = callmethod(call729,"addEventListener", [2], string728, var_mouseDownListener);
              lineNumber = 231
              var block731 = Grace_allocObject();
              block731.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block731.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block731.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block731.methods["match"] = GraceBlock_match;
              block731.methods["prefix?"] = GraceBlock_lift;
              block731.receiver = this;
              block731.className = 'block<kitty:231>';
              block731.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 229
                var if732 = var_done;
                lineNumber = 226
                var call734 = callmethod(var_ev,"keyCode", [0]);
                var opresult736 = callmethod(call734, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult736)) {
                  lineNumber = 227
                  onSelf = true;
                  var call737 = callmethod(this, "stop", [0]);
                  if732 = call737;
                }
                lineNumber = 230
                lineNumber = 226
                lineNumber = 229
                var call738 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call739 = callmethod(this, "currentKeyDown:=", [1], call738);
                return call739;
              };
              var_keyDownListener = block731;
              lineNumber = 231
              var string740 = new GraceString("keydown");
              onSelf = true;
              var call741 = callmethod(this, "document", [0]);
              var call742 = callmethod(call741,"addEventListener", [2], string740, var_keyDownListener);
              lineNumber = 237
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
              block743.className = 'block<kitty:237>';
              block743.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 236
                lineNumber = 229
                lineNumber = 236
                lineNumber = 235
                var call744 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call745 = callmethod(this, "currentKeyDown:=", [1], call744);
                return call745;
              };
              var_keyUpListener = block743;
              lineNumber = 237
              var string746 = new GraceString("keyup");
              onSelf = true;
              var call747 = callmethod(this, "document", [0]);
              var call748 = callmethod(call747,"addEventListener", [2], string746, var_keyUpListener);
              lineNumber = 239
              lineNumber = 229
              lineNumber = 239
              var string749 = new GraceString("canvas");
              var call750 = callmethod(var_dom,"document", [0]);
              var call751 = callmethod(call750,"createElement", [1], string749);
              onSelf = true;
              var call752 = callmethod(this, "backingCanvas:=", [1], call751);
              lineNumber = 241
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call753 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call754 = callmethod(this, "backingCanvas", [0]);
              var call755 = callmethod(call754,"height:=", [1], call753);
              lineNumber = 242
              lineNumber = 239
              lineNumber = 241
              onSelf = true;
              var call756 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call757 = callmethod(this, "backingCanvas", [0]);
              var call758 = callmethod(call757,"width:=", [1], call756);
              lineNumber = 242
              lineNumber = 239
              lineNumber = 242
              var string759 = new GraceString("2d");
              onSelf = true;
              var call760 = callmethod(this, "backingCanvas", [0]);
              var call761 = callmethod(call760,"getContext", [1], string759);
              onSelf = true;
              var call762 = callmethod(this, "backingContext:=", [1], call761);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 243
              var string763 = new GraceString("2d");
              onSelf = true;
              var call764 = callmethod(this, "canvas", [0]);
              var call765 = callmethod(call764,"getContext", [1], string763);
              onSelf = true;
              var call766 = callmethod(this, "mctx:=", [1], call765);
              lineNumber = 246
              var string767 = new GraceString("doggo.jpg");
              onSelf = true;
              var call768 = callmethod(this, "setBackground", [1], string767);
              lineNumber = 254
              lineNumber = 239
              lineNumber = 248
              var bool769 = new GraceBoolean(true)
              onSelf = true;
              var call770 = callmethod(this, "isInit:=", [1], bool769);
              return call770
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func665.paramCounts = [
            0,
          ];
          func665.variableArities = [
            false,
          ];
          obj663.methods["init"] = func665;
          func665.definitionLine = 195;
          func665.definitionModule = "kitty";
          var func771 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func771.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 239
              lineNumber = 259
              var bool772 = new GraceBoolean(true)
              onSelf = true;
              var call773 = callmethod(this, "isRunning:=", [1], bool772);
              lineNumber = 260
              var block774 = Grace_allocObject();
              block774.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block774.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block774.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block774.methods["match"] = GraceBlock_match;
              block774.methods["prefix?"] = GraceBlock_lift;
              block774.receiver = this;
              block774.className = 'block<kitty:260>';
              block774.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call775 = callmethod(this, "isRunning", [0]);
                return call775;
              };
              lineNumber = 264
              var block776 = Grace_allocObject();
              block776.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block776.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block776.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block776.methods["match"] = GraceBlock_match;
              block776.methods["prefix?"] = GraceBlock_lift;
              block776.receiver = this;
              block776.className = 'block<kitty:264>';
              block776.real = function(
              ) {
                sourceObject = this;
                lineNumber = 261
                onSelf = true;
                var call777 = callmethod(this, "update", [0]);
                return call777;
              };
              lineNumber = 260
              var call778 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block774, new GraceNum(10), block776);
              return call778
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
          obj663.methods["start"] = func771;
          func771.definitionLine = 257;
          func771.definitionModule = "kitty";
          var func779 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func779.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 239
              lineNumber = 272
              onSelf = true;
              var call780 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call781 = callmethod(this, "mctx", [0]);
              var call782 = callmethod(call781,"fillStyle:=", [1], call780);
              lineNumber = 273
              onSelf = true;
              var call783 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call784 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call785 = callmethod(this, "mctx", [0]);
              var call786 = callmethod(call785,"fillRect", [4], new GraceNum(0), new GraceNum(0), call783, call784);
              lineNumber = 274
              onSelf = true;
              var call787 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call788 = callmethod(this, "mctx", [0]);
              var call789 = callmethod(call788,"drawImage", [3], call787, new GraceNum(0), new GraceNum(0));
              lineNumber = 275
              onSelf = true;
              var call790 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call792 = callmethod(this, "canvasWidth", [0]);
              var quotient794 = callmethod(call792, "/", [1], new GraceNum(2));
              onSelf = true;
              var call796 = callmethod(this, "canvasHeight", [0]);
              var quotient798 = callmethod(call796, "/", [1], new GraceNum(2));
              onSelf = true;
              var call799 = callmethod(this, "background", [0]);
              var call800 = callmethod(call799,"draw", [4], call790, quotient794, quotient798, new GraceNum(0));
              lineNumber = 278
              onSelf = true;
              var call801 = callmethod(this, "entities", [0]);
              lineNumber = 284
              var block802 = Grace_allocObject();
              block802.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block802.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block802.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block802.methods["match"] = GraceBlock_match;
              block802.methods["prefix?"] = GraceBlock_lift;
              block802.receiver = this;
              block802.className = 'block<kitty:284>';
              block802.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 279
                var call803 = callmethod(var_entity,"update", [0]);
                lineNumber = 280
                onSelf = true;
                var call804 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call806 = callmethod(this, "canvasWidth", [0]);
                var quotient808 = callmethod(call806, "/", [1], new GraceNum(2));
                onSelf = true;
                var call810 = callmethod(this, "canvasHeight", [0]);
                var quotient812 = callmethod(call810, "/", [1], new GraceNum(2));
                var call813 = callmethod(var_entity,"draw", [3], call804, quotient808, quotient812);
                return call813;
              };
              var call814 = callmethod(Grace_prelude,"for()do", [1, 1], call801, block802);
              return call814
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func779.paramCounts = [
            0,
          ];
          func779.variableArities = [
            false,
          ];
          obj663.methods["update"] = func779;
          func779.definitionLine = 267;
          func779.definitionModule = "kitty";
          var func815 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func815.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 287
              var string816 = new GraceString("WORLD STOPPING...");
              var call817 = Grace_print(string816);
              lineNumber = 289
              lineNumber = 279
              lineNumber = 288
              var bool818 = new GraceBoolean(false)
              onSelf = true;
              var call819 = callmethod(this, "isRunning:=", [1], bool818);
              lineNumber = 289
              var string820 = new GraceString("mousedown");
              onSelf = true;
              var call821 = callmethod(this, "canvas", [0]);
              var call822 = callmethod(call821,"removeEventListener", [2], string820, var_mouseDownListener);
              lineNumber = 290
              var string823 = new GraceString("keydown");
              onSelf = true;
              var call824 = callmethod(this, "document", [0]);
              var call825 = callmethod(call824,"removeEventListener", [2], string823, var_keyDownListener);
              lineNumber = 291
              var string826 = new GraceString("keyup");
              onSelf = true;
              var call827 = callmethod(this, "document", [0]);
              var call828 = callmethod(call827,"removeEventListener", [2], string826, var_keyUpListener);
              return call828
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func815.paramCounts = [
            0,
          ];
          func815.variableArities = [
            false,
          ];
          obj663.methods["stop"] = func815;
          func815.definitionLine = 286;
          func815.definitionModule = "kitty";
          var func829 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func829.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 296
              lineNumber = 295
              onSelf = true;
              var call830 = callmethod(this, "currentKeyDown", [0]);
              var opresult833 = callmethod(var_key, "==", [1], call830);
              return opresult833
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func829.paramCounts = [
            1,
          ];
          func829.variableArities = [
            false,
          ];
          obj663.methods["isKeyDown"] = func829;
          func829.definitionLine = 294;
          func829.definitionModule = "kitty";
          var func834 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func834.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 299
              lineNumber = 279
              lineNumber = 299
              onSelf = true;
              var call835 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call836 = callmethod(this, "canvasHeight", [0]);
              var call837 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call838 = callmethod(call837, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call839 = callmethod(call838, "Image()width()height", [1, 1, 1], var_url, call835, call836);
              onSelf = true;
              var call840 = callmethod(this, "background:=", [1], call839);
              return call840
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func834.paramCounts = [
            1,
          ];
          func834.variableArities = [
            false,
          ];
          obj663.methods["setBackground"] = func834;
          func834.definitionLine = 298;
          func834.definitionModule = "kitty";
          var func841 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func841.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 303
              onSelf = true;
              var call842 = callmethod(this, "entities", [0]);
              var call843 = callmethod(call842,"push", [1], var_e);
              return call843
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func841.paramTypes = [];
          func841.paramTypes.push([]);
          func841.paramCounts = [
            1,
          ];
          func841.variableArities = [
            false,
          ];
          obj663.methods["addEntity"] = func841;
          func841.definitionLine = 302;
          func841.definitionModule = "kitty";
          var func844 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func844.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 308
              lineNumber = 307
              onSelf = true;
              var call845 = callmethod(this, "mctx", [0]);
              return call845
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func844.paramCounts = [
            0,
          ];
          func844.variableArities = [
            false,
          ];
          obj663.methods["getContext"] = func844;
          func844.definitionLine = 306;
          func844.definitionModule = "kitty";
          sourceObject = obj663;
          obj663.data["background"] = undefined;
          var reader_kitty_background_846 = function() {
            return this.data["background"];
          }
          obj663.methods["background"] = reader_kitty_background_846;
          obj663.data["background"] = undefined;
          var writer_kitty_background_846 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj663.methods["background:="] = writer_kitty_background_846;
          reader_kitty_background_846.confidential = true;
          writer_kitty_background_846.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 172
          var string847 = new GraceString("black");
          obj663.data["backgroundColour"] = string847;
          var reader_kitty_backgroundColour_848 = function() {
            return this.data["backgroundColour"];
          }
          obj663.methods["backgroundColour"] = reader_kitty_backgroundColour_848;
          obj663.data["backgroundColour"] = string847;
          var writer_kitty_backgroundColour_848 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj663.methods["backgroundColour:="] = writer_kitty_backgroundColour_848;
          reader_kitty_backgroundColour_848.confidential = true;
          writer_kitty_backgroundColour_848.confidential = true;
          lineNumber = 174;
          moduleName = "kitty";
          lineNumber = 172
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string847)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["document"] = undefined;
          var reader_kitty_document_849 = function() {
            return this.data["document"];
          }
          obj663.methods["document"] = reader_kitty_document_849;
          obj663.data["document"] = undefined;
          var writer_kitty_document_849 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj663.methods["document:="] = writer_kitty_document_849;
          reader_kitty_document_849.confidential = true;
          writer_kitty_document_849.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_850 = function() {
            return this.data["backingCanvas"];
          }
          obj663.methods["backingCanvas"] = reader_kitty_backingCanvas_850;
          obj663.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_850 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj663.methods["backingCanvas:="] = writer_kitty_backingCanvas_850;
          reader_kitty_backingCanvas_850.confidential = true;
          writer_kitty_backingCanvas_850.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["backingContext"] = undefined;
          var reader_kitty_backingContext_851 = function() {
            return this.data["backingContext"];
          }
          obj663.methods["backingContext"] = reader_kitty_backingContext_851;
          obj663.data["backingContext"] = undefined;
          var writer_kitty_backingContext_851 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj663.methods["backingContext:="] = writer_kitty_backingContext_851;
          reader_kitty_backingContext_851.confidential = true;
          writer_kitty_backingContext_851.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["canvas"] = undefined;
          var reader_kitty_canvas_852 = function() {
            return this.data["canvas"];
          }
          obj663.methods["canvas"] = reader_kitty_canvas_852;
          obj663.data["canvas"] = undefined;
          var writer_kitty_canvas_852 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj663.methods["canvas:="] = writer_kitty_canvas_852;
          reader_kitty_canvas_852.confidential = true;
          writer_kitty_canvas_852.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_853 = function() {
            return this.data["canvasWidth"];
          }
          obj663.methods["canvasWidth"] = reader_kitty_canvasWidth_853;
          obj663.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_853 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj663.methods["canvasWidth:="] = writer_kitty_canvasWidth_853;
          reader_kitty_canvasWidth_853.confidential = true;
          writer_kitty_canvasWidth_853.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_854 = function() {
            return this.data["canvasHeight"];
          }
          obj663.methods["canvasHeight"] = reader_kitty_canvasHeight_854;
          obj663.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_854 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj663.methods["canvasHeight:="] = writer_kitty_canvasHeight_854;
          reader_kitty_canvasHeight_854.confidential = true;
          writer_kitty_canvasHeight_854.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 183
          var call855 = callmethod(var_collections,"list", [0]);
          var call856 = callmethod(call855,"new", [0]);
          obj663.data["entities"] = call856;
          var reader_kitty_entities_857 = function() {
            return this.data["entities"];
          }
          obj663.methods["entities"] = reader_kitty_entities_857;
          obj663.data["entities"] = call856;
          var writer_kitty_entities_857 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj663.methods["entities:="] = writer_kitty_entities_857;
          reader_kitty_entities_857.confidential = true;
          writer_kitty_entities_857.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call856)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 185
          var bool858 = new GraceBoolean(false)
          obj663.data["isInit"] = bool858;
          var reader_kitty_isInit_859 = function() {
            return this.data["isInit"];
          }
          obj663.methods["isInit"] = reader_kitty_isInit_859;
          obj663.data["isInit"] = bool858;
          var writer_kitty_isInit_859 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj663.methods["isInit:="] = writer_kitty_isInit_859;
          reader_kitty_isInit_859.confidential = true;
          writer_kitty_isInit_859.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 185
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool858)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 186
          var bool860 = new GraceBoolean(false)
          obj663.data["isRunning"] = bool860;
          var reader_kitty_isRunning_861 = function() {
            return this.data["isRunning"];
          }
          obj663.methods["isRunning"] = reader_kitty_isRunning_861;
          obj663.data["isRunning"] = bool860;
          var writer_kitty_isRunning_861 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj663.methods["isRunning:="] = writer_kitty_isRunning_861;
          reader_kitty_isRunning_861.confidential = true;
          writer_kitty_isRunning_861.confidential = true;
          lineNumber = 188;
          moduleName = "kitty";
          lineNumber = 186
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool860)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj663.mutable = true;
          sourceObject = obj663;
          obj663.data["mctx"] = undefined;
          var reader_kitty_mctx_862 = function() {
            return this.data["mctx"];
          }
          obj663.methods["mctx"] = reader_kitty_mctx_862;
          obj663.data["mctx"] = undefined;
          var writer_kitty_mctx_862 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj663.methods["mctx:="] = writer_kitty_mctx_862;
          reader_kitty_mctx_862.confidential = true;
          writer_kitty_mctx_862.confidential = true;
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 192
          lineNumber = 190
          var call863 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj663.data["currentKeyDown"] = call863;
          var reader_kitty_currentKeyDown_864 = function() {
            return this.data["currentKeyDown"];
          }
          obj663.methods["currentKeyDown"] = reader_kitty_currentKeyDown_864;
          obj663.data["currentKeyDown"] = call863;
          var writer_kitty_currentKeyDown_864 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj663.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_864;
          reader_kitty_currentKeyDown_864.confidential = true;
          writer_kitty_currentKeyDown_864.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call863)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj663.mutable = true;
          sourceObject = obj663;
          lineNumber = 192
          onSelf = true;
          var call865 = callmethod(this, "init", [0]);
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          sourceObject = obj663;
          superDepth = origSuperDepth;
        }
        obj_init_663.apply(inheritingObject, []);
        return obj663
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj456.methods["new()object"] = func662;
    var func866 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 167
        var string867 = new GraceString("class KittyWorld");
        return string867
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func866.paramCounts = [
    ];
    func866.variableArities = [
    ];
    obj456.methods["asDebugString"] = func866;
    func866.definitionLine = 167;
    func866.definitionModule = "kitty";
    sourceObject = obj456;
    sourceObject = obj456;
    superDepth = origSuperDepth;
  }
  obj_init_456.apply(obj456, []);
  var var_KittyWorld = obj456;
  lineNumber = 312
  lineNumber = 321
  lineNumber = 336
  lineNumber = 341
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new()width()height\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\npath:\n kitty\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nconstructors-of:KittyWorld:\n new\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\nmethods-of:KittyEntity.new()x()y:\n draw\n setImage\n rotation\n rotation:=\n tag:=\n move\n setLocation\n getRotation\n tag\n setAction\n update\n strafe\n start\n createImage\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n turn\n onDestroy\n awake\n posX\n posY\nmethods-of:KittyWorld.new:\n setBackground\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingContext:=\n backingCanvas\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n isRunning:=\n addEntity\n isInit\n mctx:=\n canvasWidth\n entities:=\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isRunning\n background\n backingContext\n stop\n isInit:=\n isKeyDown\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n setBackground\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingContext:=\n backingCanvas\n canvas:=\n backingContext\n background:=\n currentKeyDown\n isRunning:=\n addEntity\n isInit\n mctx:=\n entities:=\n isRunning\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n canvasWidth\n background\n backgroundColour\n stop\n isInit:=\n isKeyDown\nmethods-of:KittyImage.new()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nfresh:Entity()x()y:\n draw\n setImage\n rotation\n onDestroy\n tag:=\n createImage\n setLocation\n getRotation\n tag\n posX\n update\n strafe\n move\n start\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n awake\n rotation:=\n turn\n setAction\n posY\nconfidential:\nconstructors-of:KittyEntity:\n new()x()y\n";
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
