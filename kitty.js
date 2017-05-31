function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 62
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
      lineNumber = 63
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 63;
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
        lineNumber = 64
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
  func0.definitionLine = 62;
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
      obj5.definitionLine = 63;
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
  lineNumber = 145
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
      lineNumber = 146
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 146;
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
        lineNumber = 147
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
  func8.definitionLine = 145;
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
      obj13.definitionLine = 146;
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
  lineNumber = 153
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
      lineNumber = 154
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
  func16.definitionLine = 153;
  func16.definitionModule = "kitty";
  lineNumber = 313
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 314
      var obj19 = Grace_allocObject();
      obj19.definitionModule = "kitty";
      obj19.definitionLine = 314;
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
        lineNumber = 315
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
  func18.definitionLine = 313;
  func18.definitionModule = "kitty";
  var func22 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 314;
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
  lineNumber = 322
  var func26 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 324
      var string27 = new GraceString("CHECKING...");
      var call28 = Grace_print(string27);
      lineNumber = 331
      var if29 = var_done;
      lineNumber = 326
      var call30 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call30)) {
        lineNumber = 327
        var string31 = new GraceString("NO WORLD!!");
        var call32 = Grace_print(string31);
        lineNumber = 329
        return var_done
      }
      lineNumber = 331
      var string33 = new GraceString("STARTING...");
      var call34 = Grace_print(string33);
      lineNumber = 334
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
  func26.definitionLine = 322;
  func26.definitionModule = "kitty";
  lineNumber = 337
  var func36 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 338
      var call37 = callmethod(var_m__95__world,"stop", [0]);
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
    0,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["stop"] = func36;
  func36.definitionLine = 337;
  func36.definitionModule = "kitty";
  lineNumber = 341
  var func38 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func38.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 343
      lineNumber = 342
      var_m__95__world = var_world__39__;
      lineNumber = 344
      lineNumber = 343
      var bool39 = new GraceBoolean(true)
      var_worldSet = bool39;
      return bool39
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func38.paramTypes = [];
  func38.paramTypes.push([]);
  func38.paramCounts = [
    1,
  ];
  func38.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func38;
  func38.definitionLine = 341;
  func38.definitionModule = "kitty";
  lineNumber = 346
  var func40 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 347
      onSelf = true;
      var call41 = callmethod(this, "start", [0]);
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
    1,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func40;
  func40.definitionLine = 346;
  func40.definitionModule = "kitty";
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
  var call42 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call42;
  this.data = call42.data;
  this._value = call42._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 338
  var func43 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func43.paramCounts[0])
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
  func43.paramCounts = [
    0,
  ];
  func43.variableArities = [
    false,
  ];
  this.methods["m_world"] = func43;
  func43.definitionLine = 338;
  func43.definitionModule = "kitty";
  lineNumber = 338
  var func44 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    1,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func44;
  func44.definitionLine = 338;
  func44.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool45 = new GraceBoolean(false)
  var var_worldSet = bool45;
  lineNumber = 338
  var func46 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    0,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func46;
  func46.definitionLine = 338;
  func46.definitionModule = "kitty";
  lineNumber = 338
  var func47 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func47.paramCounts[0])
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
  func47.paramCounts = [
    1,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func47;
  func47.definitionLine = 338;
  func47.definitionModule = "kitty";
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
  lineNumber = 338
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func48;
  func48.definitionLine = 338;
  func48.definitionModule = "kitty";
  lineNumber = 338
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func49;
  func49.definitionLine = 338;
  func49.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 338
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    0,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func50;
  func50.definitionLine = 338;
  func50.definitionModule = "kitty";
  lineNumber = 338
  var func51 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func51.paramCounts[0])
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
  func51.paramCounts = [
    1,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func51;
  func51.definitionLine = 338;
  func51.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 338
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func52;
  func52.definitionLine = 338;
  func52.definitionModule = "kitty";
  lineNumber = 338
  var func53 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    1,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func53;
  func53.definitionLine = 338;
  func53.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
  lineNumber = 17
  var call54 = callmethod(var_dom,"window", [0]);
  var call55 = callmethod(call54,"Math", [0]);
  var var_math = call55;
  var func56 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func56.paramCounts[0])
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
  func56.paramCounts = [
    0,
  ];
  func56.variableArities = [
    false,
  ];
  this.methods["math"] = func56;
  func56.definitionLine = 17;
  func56.definitionModule = "kitty";
  lineNumber = 20;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 20
  lineNumber = 25
  var var_kitten;
  lineNumber = 17
  var func57 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func57.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 20
      return var_kitten
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func57.paramCounts = [
    0,
  ];
  func57.variableArities = [
    false,
  ];
  this.methods["kitten"] = func57;
  func57.definitionLine = 17;
  func57.definitionModule = "kitty";
  lineNumber = 17
  var func58 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    1,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func58;
  func58.definitionLine = 17;
  func58.definitionModule = "kitty";
  lineNumber = 25
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
  func59.definitionLine = 25;
  func59.definitionModule = "kitty";
  var obj60 = Grace_allocObject();
  obj60.definitionModule = "kitty";
  obj60.definitionLine = 25;
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
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func62.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj63 = Grace_allocObject();
        obj63.definitionModule = "kitty";
        obj63.definitionLine = 25;
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
              lineNumber = 40
              var call66 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call67 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod71 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient73 = callmethod(prod71, "/", [1], new GraceNum(180));
              var call74 = callmethod(var_ctx,"rotate", [1], quotient73);
              lineNumber = 44
              onSelf = true;
              var call75 = callmethod(this, "elements", [0]);
              lineNumber = 47
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
              block76.className = 'block<kitty:47>';
              block76.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
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
              lineNumber = 47
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
          func65.definitionLine = 38;
          func65.definitionModule = "kitty";
          var func92 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func92.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
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
          func92.definitionLine = 51;
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
              lineNumber = 56
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
          func94.definitionLine = 55;
          func94.definitionModule = "kitty";
          sourceObject = obj63;
          lineNumber = 29
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
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call99)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj63;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call101 = callmethod(this, "imgTag", [0]);
          var call102 = callmethod(call101,"src:=", [1], var_url__39__);
          sourceObject = obj63;
          lineNumber = 32
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
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call104)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj63.mutable = true;
          sourceObject = obj63;
          lineNumber = 33
          onSelf = true;
          var call106 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call107 = callmethod(this, "elements", [0]);
          var call108 = callmethod(call107,"push", [1], call106);
          sourceObject = obj63;
          lineNumber = 35
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
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj63.mutable = true;
          sourceObject = obj63;
          lineNumber = 36
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
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
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
      3,
    ];
    func62.variableArities = [
      false,
    ];
    obj60.methods["new"] = func62;
    func62.definitionLine = 25;
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
        obj112.definitionLine = 25;
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
              lineNumber = 40
              var call115 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call116 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod120 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient122 = callmethod(prod120, "/", [1], new GraceNum(180));
              var call123 = callmethod(var_ctx,"rotate", [1], quotient122);
              lineNumber = 44
              onSelf = true;
              var call124 = callmethod(this, "elements", [0]);
              lineNumber = 47
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
              block125.className = 'block<kitty:47>';
              block125.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
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
              lineNumber = 47
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
          func114.definitionLine = 38;
          func114.definitionModule = "kitty";
          var func141 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
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
          func141.definitionLine = 51;
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
              lineNumber = 56
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
          func143.definitionLine = 55;
          func143.definitionModule = "kitty";
          sourceObject = obj112;
          lineNumber = 29
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
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call148)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj112;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call150 = callmethod(this, "imgTag", [0]);
          var call151 = callmethod(call150,"src:=", [1], var_url__39__);
          sourceObject = obj112;
          lineNumber = 32
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
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call153)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj112.mutable = true;
          sourceObject = obj112;
          lineNumber = 33
          onSelf = true;
          var call155 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call156 = callmethod(this, "elements", [0]);
          var call157 = callmethod(call156,"push", [1], call155);
          sourceObject = obj112;
          lineNumber = 35
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
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj112.mutable = true;
          sourceObject = obj112;
          lineNumber = 36
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
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
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
    obj60.methods["new()object"] = func111;
    var func160 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
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
    func160.definitionLine = 25;
    func160.definitionModule = "kitty";
    sourceObject = obj60;
    sourceObject = obj60;
    superDepth = origSuperDepth;
  }
  obj_init_60.apply(obj60, []);
  var var_KittyImage = obj60;
  lineNumber = 62
  lineNumber = 69
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
  func162.definitionLine = 69;
  func162.definitionModule = "kitty";
  var obj163 = Grace_allocObject();
  obj163.definitionModule = "kitty";
  obj163.definitionLine = 69;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func165.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj166 = Grace_allocObject();
        obj166.definitionModule = "kitty";
        obj166.definitionLine = 69;
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
              lineNumber = 85
              var string169 = new GraceString("realyee.png");
              onSelf = true;
              var call170 = callmethod(this, "createImage", [1], string169);
              lineNumber = 87
              lineNumber = 86
              var_kitten = this;
              lineNumber = 87
              var call171 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call171
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
          func168.definitionLine = 84;
          func168.definitionModule = "kitty";
          var func172 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              onSelf = true;
              var call173 = callmethod(this, "action", [0]);
              var call174 = callmethod(call173,"apply", [0]);
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
          obj166.methods["tick"] = func172;
          func172.definitionLine = 90;
          func172.definitionModule = "kitty";
          var func175 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func175.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              lineNumber = 91
              lineNumber = 95
              onSelf = true;
              var call178 = callmethod(this, "rotation", [0]);
              var prod180 = callmethod(call178, "*", [1], new GraceNum(3.14159));
              var quotient182 = callmethod(prod180, "/", [1], new GraceNum(180));
              var call183 = callmethod(var_math,"cos", [1], quotient182);
              var prod186 = callmethod(var_distance, "*", [1], call183);
              onSelf = true;
              var call188 = callmethod(this, "posX", [0]);
              var opresult190 = callmethod(call188, "+", [1], prod186);
              onSelf = true;
              var call191 = callmethod(this, "posX:=", [1], opresult190);
              lineNumber = 96
              lineNumber = 91
              lineNumber = 96
              onSelf = true;
              var call194 = callmethod(this, "rotation", [0]);
              var prod196 = callmethod(call194, "*", [1], new GraceNum(3.14159));
              var quotient198 = callmethod(prod196, "/", [1], new GraceNum(180));
              var call199 = callmethod(var_math,"sin", [1], quotient198);
              var prod202 = callmethod(var_distance, "*", [1], call199);
              onSelf = true;
              var call204 = callmethod(this, "posY", [0]);
              var opresult206 = callmethod(call204, "+", [1], prod202);
              onSelf = true;
              var call207 = callmethod(this, "posY:=", [1], opresult206);
              return call207
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func175.paramCounts = [
            1,
          ];
          func175.variableArities = [
            false,
          ];
          obj166.methods["move"] = func175;
          func175.definitionLine = 94;
          func175.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 91
              lineNumber = 100
              onSelf = true;
              var call211 = callmethod(this, "rotation", [0]);
              var opresult214 = callmethod(new GraceNum(90), "+", [1], call211);
              var prod216 = callmethod(opresult214, "*", [1], new GraceNum(3.14159));
              var quotient218 = callmethod(prod216, "/", [1], new GraceNum(180));
              var call219 = callmethod(var_math,"cos", [1], quotient218);
              var prod222 = callmethod(var_distance, "*", [1], call219);
              onSelf = true;
              var call224 = callmethod(this, "posX", [0]);
              var opresult226 = callmethod(call224, "+", [1], prod222);
              onSelf = true;
              var call227 = callmethod(this, "posX:=", [1], opresult226);
              lineNumber = 101
              lineNumber = 91
              lineNumber = 101
              onSelf = true;
              var call230 = callmethod(this, "rotation", [0]);
              var opresult233 = callmethod(new GraceNum(90), "+", [1], call230);
              var prod235 = callmethod(opresult233, "*", [1], new GraceNum(3.14159));
              var quotient237 = callmethod(prod235, "/", [1], new GraceNum(180));
              var call238 = callmethod(var_math,"sin", [1], quotient237);
              var prod241 = callmethod(var_distance, "*", [1], call238);
              onSelf = true;
              var call243 = callmethod(this, "posY", [0]);
              var opresult245 = callmethod(call243, "+", [1], prod241);
              onSelf = true;
              var call246 = callmethod(this, "posY:=", [1], opresult245);
              return call246
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
          obj166.methods["strafe"] = func208;
          func208.definitionLine = 99;
          func208.definitionModule = "kitty";
          var func247 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func247.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 91
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call249 = callmethod(this, "rotation", [0]);
              var opresult251 = callmethod(call249, "+", [1], var_angle);
              onSelf = true;
              var call252 = callmethod(this, "rotation:=", [1], opresult251);
              return call252
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func247.paramCounts = [
            1,
          ];
          func247.variableArities = [
            false,
          ];
          obj166.methods["turn"] = func247;
          func247.definitionLine = 104;
          func247.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              var call254 = callmethod(var_ctx,"save", [0]);
              lineNumber = 110
              onSelf = true;
              var call255 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call256 = callmethod(this, "posY", [0]);
              var call257 = callmethod(var_ctx,"translate", [2], call255, call256);
              lineNumber = 111
              onSelf = true;
              var call258 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call259 = callmethod(this, "image", [0]);
              var call260 = callmethod(call259,"draw", [4], var_ctx, var_dx, var_dy, call258);
              lineNumber = 112
              var call261 = callmethod(var_ctx,"restore", [0]);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func253.paramCounts = [
            3,
          ];
          func253.variableArities = [
            false,
          ];
          obj166.methods["draw"] = func253;
          func253.definitionLine = 108;
          func253.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 112
              lineNumber = 116
              var call263 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call264 = callmethod(call263, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call265 = callmethod(call264, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call266 = callmethod(this, "image:=", [1], call265);
              return call266
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
          obj166.methods["createImage"] = func262;
          func262.definitionLine = 115;
          func262.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              lineNumber = 116
              lineNumber = 120
              onSelf = true;
              var call268 = callmethod(this, "image:=", [1], var_image__39__);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func267.paramTypes = [];
          func267.paramTypes.push([]);
          func267.paramCounts = [
            1,
          ];
          func267.variableArities = [
            false,
          ];
          obj166.methods["setImage"] = func267;
          func267.definitionLine = 119;
          func267.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 116
              lineNumber = 124
              onSelf = true;
              var call270 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func269.variableArities = [
            false,
          ];
          obj166.methods["setAction"] = func269;
          func269.definitionLine = 123;
          func269.definitionModule = "kitty";
          var func271 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              lineNumber = 116
              lineNumber = 128
              onSelf = true;
              var call272 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 130
              lineNumber = 116
              lineNumber = 129
              onSelf = true;
              var call273 = callmethod(this, "posY:=", [1], var_y);
              return call273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func271.paramCounts = [
            2,
          ];
          func271.variableArities = [
            false,
          ];
          obj166.methods["setLocation"] = func271;
          func271.definitionLine = 127;
          func271.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 133
              onSelf = true;
              var call275 = callmethod(this, "posX", [0]);
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
            0,
          ];
          func274.variableArities = [
            false,
          ];
          obj166.methods["getX"] = func274;
          func274.definitionLine = 132;
          func274.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 137
              onSelf = true;
              var call277 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func276.variableArities = [
            false,
          ];
          obj166.methods["getY"] = func276;
          func276.definitionLine = 136;
          func276.definitionModule = "kitty";
          var func278 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func278.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 141
              onSelf = true;
              var call279 = callmethod(this, "rotation", [0]);
              return call279
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func278.paramCounts = [
            0,
          ];
          func278.variableArities = [
            false,
          ];
          obj166.methods["getRotation"] = func278;
          func278.definitionLine = 140;
          func278.definitionModule = "kitty";
          sourceObject = obj166;
          lineNumber = 73
          obj166.data["tag"] = var_tag__39__;
          var reader_kitty_tag_280 = function() {
            return this.data["tag"];
          }
          obj166.methods["tag"] = reader_kitty_tag_280;
          obj166.data["tag"] = var_tag__39__;
          var writer_kitty_tag_280 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj166.methods["tag:="] = writer_kitty_tag_280;
          reader_kitty_tag_280.confidential = true;
          writer_kitty_tag_280.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 74
          obj166.data["posX"] = var_x__39__;
          var reader_kitty_posX_281 = function() {
            return this.data["posX"];
          }
          obj166.methods["posX"] = reader_kitty_posX_281;
          obj166.data["posX"] = var_x__39__;
          var writer_kitty_posX_281 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj166.methods["posX:="] = writer_kitty_posX_281;
          reader_kitty_posX_281.confidential = true;
          writer_kitty_posX_281.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 75
          obj166.data["posY"] = var_y__39__;
          var reader_kitty_posY_282 = function() {
            return this.data["posY"];
          }
          obj166.methods["posY"] = reader_kitty_posY_282;
          obj166.data["posY"] = var_y__39__;
          var writer_kitty_posY_282 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj166.methods["posY:="] = writer_kitty_posY_282;
          reader_kitty_posY_282.confidential = true;
          writer_kitty_posY_282.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 76
          obj166.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_283 = function() {
            return this.data["rotation"];
          }
          obj166.methods["rotation"] = reader_kitty_rotation_283;
          obj166.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_283 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj166.methods["rotation:="] = writer_kitty_rotation_283;
          reader_kitty_rotation_283.confidential = true;
          writer_kitty_rotation_283.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 79
          var block284 = Grace_allocObject();
          block284.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block284.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block284.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block284.methods["match"] = GraceBlock_match;
          block284.methods["prefix?"] = GraceBlock_lift;
          block284.receiver = this;
          block284.className = 'block<kitty:79>';
          block284.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj166.data["action"] = block284;
          var reader_kitty_action_285 = function() {
            return this.data["action"];
          }
          obj166.methods["action"] = reader_kitty_action_285;
          obj166.data["action"] = block284;
          var writer_kitty_action_285 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj166.methods["action:="] = writer_kitty_action_285;
          reader_kitty_action_285.confidential = true;
          writer_kitty_action_285.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block284)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          obj166.data["image"] = undefined;
          var reader_kitty_image_286 = function() {
            return this.data["image"];
          }
          obj166.methods["image"] = reader_kitty_image_286;
          obj166.data["image"] = undefined;
          var writer_kitty_image_286 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj166.methods["image:="] = writer_kitty_image_286;
          reader_kitty_image_286.confidential = true;
          writer_kitty_image_286.confidential = true;
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 81
          onSelf = true;
          var call287 = callmethod(this, "awake", [0]);
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
      3,
    ];
    func165.variableArities = [
      false,
    ];
    obj163.methods["new"] = func165;
    func165.definitionLine = 69;
    func165.definitionModule = "kitty";
    var func288 = function(argcv) {
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
        var obj289 = Grace_allocObject();
        obj289.definitionModule = "kitty";
        obj289.definitionLine = 69;
        var inho289 = inheritingObject;
        while (inho289.superobj) inho289 = inho289.superobj;
        inho289.superobj = obj289;
        obj289.data = inheritingObject.data;
        obj289.outer = this;
        var reader_kitty_outer_290 = function() {
          return this.outer;
        }
        obj289.methods["outer"] = reader_kitty_outer_290;
        function obj_init_289() {
          var origSuperDepth = superDepth;
          superDepth = obj289;
          obj289.annotations = [];
          var func291 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string292 = new GraceString("realyee.png");
              onSelf = true;
              var call293 = callmethod(this, "createImage", [1], string292);
              lineNumber = 87
              lineNumber = 86
              var_kitten = this;
              lineNumber = 87
              var call294 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call294
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
          obj289.methods["awake"] = func291;
          func291.definitionLine = 84;
          func291.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              onSelf = true;
              var call296 = callmethod(this, "action", [0]);
              var call297 = callmethod(call296,"apply", [0]);
              return call297
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
          obj289.methods["tick"] = func295;
          func295.definitionLine = 90;
          func295.definitionModule = "kitty";
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
              lineNumber = 95
              lineNumber = 91
              lineNumber = 95
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
              lineNumber = 96
              lineNumber = 91
              lineNumber = 96
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
          obj289.methods["move"] = func298;
          func298.definitionLine = 94;
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
              lineNumber = 100
              lineNumber = 91
              lineNumber = 100
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
              lineNumber = 101
              lineNumber = 91
              lineNumber = 101
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
          obj289.methods["strafe"] = func331;
          func331.definitionLine = 99;
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
              lineNumber = 106
              lineNumber = 91
              lineNumber = 106
              lineNumber = 105
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
          obj289.methods["turn"] = func370;
          func370.definitionLine = 104;
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
              lineNumber = 109
              var call377 = callmethod(var_ctx,"save", [0]);
              lineNumber = 110
              onSelf = true;
              var call378 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call379 = callmethod(this, "posY", [0]);
              var call380 = callmethod(var_ctx,"translate", [2], call378, call379);
              lineNumber = 111
              onSelf = true;
              var call381 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call382 = callmethod(this, "image", [0]);
              var call383 = callmethod(call382,"draw", [4], var_ctx, var_dx, var_dy, call381);
              lineNumber = 112
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
          obj289.methods["draw"] = func376;
          func376.definitionLine = 108;
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
              lineNumber = 116
              lineNumber = 112
              lineNumber = 116
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
          obj289.methods["createImage"] = func385;
          func385.definitionLine = 115;
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
              lineNumber = 121
              lineNumber = 116
              lineNumber = 120
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
          func390.paramTypes = [];
          func390.paramTypes.push([]);
          func390.paramCounts = [
            1,
          ];
          func390.variableArities = [
            false,
          ];
          obj289.methods["setImage"] = func390;
          func390.definitionLine = 119;
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
              lineNumber = 125
              lineNumber = 116
              lineNumber = 124
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
          obj289.methods["setAction"] = func392;
          func392.definitionLine = 123;
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
              lineNumber = 129
              lineNumber = 116
              lineNumber = 128
              onSelf = true;
              var call395 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 130
              lineNumber = 116
              lineNumber = 129
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
          obj289.methods["setLocation"] = func394;
          func394.definitionLine = 127;
          func394.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 133
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
          obj289.methods["getX"] = func397;
          func397.definitionLine = 132;
          func397.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 137
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
          obj289.methods["getY"] = func399;
          func399.definitionLine = 136;
          func399.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 141
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
          obj289.methods["getRotation"] = func401;
          func401.definitionLine = 140;
          func401.definitionModule = "kitty";
          sourceObject = obj289;
          lineNumber = 73
          obj289.data["tag"] = var_tag__39__;
          var reader_kitty_tag_403 = function() {
            return this.data["tag"];
          }
          obj289.methods["tag"] = reader_kitty_tag_403;
          obj289.data["tag"] = var_tag__39__;
          var writer_kitty_tag_403 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj289.methods["tag:="] = writer_kitty_tag_403;
          reader_kitty_tag_403.confidential = true;
          writer_kitty_tag_403.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj289.mutable = true;
          sourceObject = obj289;
          lineNumber = 74
          obj289.data["posX"] = var_x__39__;
          var reader_kitty_posX_404 = function() {
            return this.data["posX"];
          }
          obj289.methods["posX"] = reader_kitty_posX_404;
          obj289.data["posX"] = var_x__39__;
          var writer_kitty_posX_404 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj289.methods["posX:="] = writer_kitty_posX_404;
          reader_kitty_posX_404.confidential = true;
          writer_kitty_posX_404.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj289.mutable = true;
          sourceObject = obj289;
          lineNumber = 75
          obj289.data["posY"] = var_y__39__;
          var reader_kitty_posY_405 = function() {
            return this.data["posY"];
          }
          obj289.methods["posY"] = reader_kitty_posY_405;
          obj289.data["posY"] = var_y__39__;
          var writer_kitty_posY_405 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj289.methods["posY:="] = writer_kitty_posY_405;
          reader_kitty_posY_405.confidential = true;
          writer_kitty_posY_405.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj289.mutable = true;
          sourceObject = obj289;
          lineNumber = 76
          obj289.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_406 = function() {
            return this.data["rotation"];
          }
          obj289.methods["rotation"] = reader_kitty_rotation_406;
          obj289.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_406 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj289.methods["rotation:="] = writer_kitty_rotation_406;
          reader_kitty_rotation_406.confidential = true;
          writer_kitty_rotation_406.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj289.mutable = true;
          sourceObject = obj289;
          lineNumber = 79
          var block407 = Grace_allocObject();
          block407.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block407.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block407.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block407.methods["match"] = GraceBlock_match;
          block407.methods["prefix?"] = GraceBlock_lift;
          block407.receiver = this;
          block407.className = 'block<kitty:79>';
          block407.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj289.data["action"] = block407;
          var reader_kitty_action_408 = function() {
            return this.data["action"];
          }
          obj289.methods["action"] = reader_kitty_action_408;
          obj289.data["action"] = block407;
          var writer_kitty_action_408 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj289.methods["action:="] = writer_kitty_action_408;
          reader_kitty_action_408.confidential = true;
          writer_kitty_action_408.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block407)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj289.mutable = true;
          sourceObject = obj289;
          obj289.data["image"] = undefined;
          var reader_kitty_image_409 = function() {
            return this.data["image"];
          }
          obj289.methods["image"] = reader_kitty_image_409;
          obj289.data["image"] = undefined;
          var writer_kitty_image_409 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj289.methods["image:="] = writer_kitty_image_409;
          reader_kitty_image_409.confidential = true;
          writer_kitty_image_409.confidential = true;
          obj289.mutable = true;
          sourceObject = obj289;
          lineNumber = 81
          onSelf = true;
          var call410 = callmethod(this, "awake", [0]);
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          sourceObject = obj289;
          superDepth = origSuperDepth;
        }
        obj_init_289.apply(inheritingObject, []);
        return obj289
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj163.methods["new()object"] = func288;
    var func411 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string412 = new GraceString("class KittyEntity");
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
    obj163.methods["asDebugString"] = func411;
    func411.definitionLine = 69;
    func411.definitionModule = "kitty";
    sourceObject = obj163;
    sourceObject = obj163;
    superDepth = origSuperDepth;
  }
  obj_init_163.apply(obj163, []);
  var var_KittyEntity = obj163;
  lineNumber = 145
  lineNumber = 153
  lineNumber = 159
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
  func413.definitionLine = 159;
  func413.definitionModule = "kitty";
  var obj414 = Grace_allocObject();
  obj414.definitionModule = "kitty";
  obj414.definitionLine = 159;
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
        obj417.definitionLine = 159;
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
              lineNumber = 197
              var if420 = var_done;
              lineNumber = 193
              onSelf = true;
              var call421 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call421)) {
                lineNumber = 195
                lineNumber = 194
                var bool422 = new GraceBoolean(false)
                return bool422
              }
              lineNumber = 198
              lineNumber = 159
              lineNumber = 197
              var call423 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call424 = callmethod(this, "document:=", [1], call423);
              lineNumber = 198
              lineNumber = 197
              lineNumber = 198
              var string425 = new GraceString("standard-canvas");
              onSelf = true;
              var call426 = callmethod(this, "document", [0]);
              var call427 = callmethod(call426,"getElementById", [1], string425);
              onSelf = true;
              var call428 = callmethod(this, "canvas:=", [1], call427);
              lineNumber = 200
              lineNumber = 197
              lineNumber = 199
              onSelf = true;
              var call429 = callmethod(this, "canvas", [0]);
              var call430 = callmethod(call429,"width", [0]);
              onSelf = true;
              var call431 = callmethod(this, "canvasWidth:=", [1], call430);
              lineNumber = 203
              lineNumber = 199
              lineNumber = 200
              onSelf = true;
              var call432 = callmethod(this, "canvas", [0]);
              var call433 = callmethod(call432,"height", [0]);
              onSelf = true;
              var call434 = callmethod(this, "canvasHeight:=", [1], call433);
              lineNumber = 215
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
              block435.className = 'block<kitty:215>';
              block435.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 206
                lineNumber = 205
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
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 205
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 210
                lineNumber = 206
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
                lineNumber = 210;
                moduleName = "kitty";
                lineNumber = 206
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 214
                var if466 = var_done;
                lineNumber = 210
                var opresult469 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call472 = callmethod(this, "canvasWidth", [0]);
                var diff474 = callmethod(call472, "-", [1], new GraceNum(20));
                var opresult477 = callmethod(var_x, ">", [1], diff474);
                var opresult479 = callmethod(opresult477, "&&", [1], opresult469);
                if (Grace_isTrue(opresult479)) {
                  lineNumber = 211
                  var call480 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 212
                  onSelf = true;
                  var call481 = callmethod(this, "stop", [0]);
                  if466 = call481;
                }
                return if466;
              };
              var_mouseDownListener = block435;
              lineNumber = 215
              var string482 = new GraceString("mousedown");
              onSelf = true;
              var call483 = callmethod(this, "canvas", [0]);
              var call484 = callmethod(call483,"addEventListener", [2], string482, var_mouseDownListener);
              lineNumber = 225
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
              block485.className = 'block<kitty:225>';
              block485.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 223
                var if486 = var_done;
                lineNumber = 220
                var call488 = callmethod(var_ev,"keyCode", [0]);
                var opresult490 = callmethod(call488, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult490)) {
                  lineNumber = 221
                  onSelf = true;
                  var call491 = callmethod(this, "stop", [0]);
                  if486 = call491;
                }
                lineNumber = 224
                lineNumber = 220
                lineNumber = 223
                var call492 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call493 = callmethod(this, "currentKeyDown:=", [1], call492);
                return call493;
              };
              var_keyDownListener = block485;
              lineNumber = 225
              var string494 = new GraceString("keydown");
              onSelf = true;
              var call495 = callmethod(this, "document", [0]);
              var call496 = callmethod(call495,"addEventListener", [2], string494, var_keyDownListener);
              lineNumber = 231
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
              block497.className = 'block<kitty:231>';
              block497.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                lineNumber = 223
                lineNumber = 230
                lineNumber = 229
                var call498 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call499 = callmethod(this, "currentKeyDown:=", [1], call498);
                return call499;
              };
              var_keyUpListener = block497;
              lineNumber = 231
              var string500 = new GraceString("keyup");
              onSelf = true;
              var call501 = callmethod(this, "document", [0]);
              var call502 = callmethod(call501,"addEventListener", [2], string500, var_keyUpListener);
              lineNumber = 233
              lineNumber = 223
              lineNumber = 233
              var string503 = new GraceString("canvas");
              var call504 = callmethod(var_dom,"document", [0]);
              var call505 = callmethod(call504,"createElement", [1], string503);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas:=", [1], call505);
              lineNumber = 235
              lineNumber = 233
              lineNumber = 234
              onSelf = true;
              var call507 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call508 = callmethod(this, "backingCanvas", [0]);
              var call509 = callmethod(call508,"height:=", [1], call507);
              lineNumber = 236
              lineNumber = 233
              lineNumber = 235
              onSelf = true;
              var call510 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call511 = callmethod(this, "backingCanvas", [0]);
              var call512 = callmethod(call511,"width:=", [1], call510);
              lineNumber = 236
              lineNumber = 233
              lineNumber = 236
              var string513 = new GraceString("2d");
              onSelf = true;
              var call514 = callmethod(this, "backingCanvas", [0]);
              var call515 = callmethod(call514,"getContext", [1], string513);
              onSelf = true;
              var call516 = callmethod(this, "backingContext:=", [1], call515);
              lineNumber = 237
              lineNumber = 233
              lineNumber = 237
              var string517 = new GraceString("2d");
              onSelf = true;
              var call518 = callmethod(this, "canvas", [0]);
              var call519 = callmethod(call518,"getContext", [1], string517);
              onSelf = true;
              var call520 = callmethod(this, "mctx:=", [1], call519);
              lineNumber = 240
              var string521 = new GraceString("doggo.jpg");
              onSelf = true;
              var call522 = callmethod(this, "setBackground", [1], string521);
              lineNumber = 249
              lineNumber = 233
              lineNumber = 246
              var bool523 = new GraceBoolean(true)
              onSelf = true;
              var call524 = callmethod(this, "isInit:=", [1], bool523);
              lineNumber = 249
              var call525 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call526 = callmethod(call525, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call527 = callmethod(call526, "setWorld", [1], this);
              return call527
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
          func419.definitionLine = 189;
          func419.definitionModule = "kitty";
          var func528 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func528.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 249
              lineNumber = 260
              var bool529 = new GraceBoolean(true)
              onSelf = true;
              var call530 = callmethod(this, "isRunning:=", [1], bool529);
              lineNumber = 261
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
              block531.className = 'block<kitty:261>';
              block531.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call532 = callmethod(this, "isRunning", [0]);
                return call532;
              };
              lineNumber = 265
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
              block533.className = 'block<kitty:265>';
              block533.real = function(
              ) {
                sourceObject = this;
                lineNumber = 262
                onSelf = true;
                var call534 = callmethod(this, "update", [0]);
                return call534;
              };
              lineNumber = 261
              var call535 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block531, new GraceNum(10), block533);
              return call535
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func528.paramCounts = [
            0,
          ];
          func528.variableArities = [
            false,
          ];
          obj417.methods["start"] = func528;
          func528.definitionLine = 258;
          func528.definitionModule = "kitty";
          var func536 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func536.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              lineNumber = 249
              lineNumber = 273
              onSelf = true;
              var call537 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call538 = callmethod(this, "mctx", [0]);
              var call539 = callmethod(call538,"fillStyle:=", [1], call537);
              lineNumber = 274
              onSelf = true;
              var call540 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call541 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call542 = callmethod(this, "mctx", [0]);
              var call543 = callmethod(call542,"fillRect", [4], new GraceNum(0), new GraceNum(0), call540, call541);
              lineNumber = 275
              onSelf = true;
              var call544 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call545 = callmethod(this, "mctx", [0]);
              var call546 = callmethod(call545,"drawImage", [3], call544, new GraceNum(0), new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call547 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call549 = callmethod(this, "canvasWidth", [0]);
              var quotient551 = callmethod(call549, "/", [1], new GraceNum(2));
              onSelf = true;
              var call553 = callmethod(this, "canvasHeight", [0]);
              var quotient555 = callmethod(call553, "/", [1], new GraceNum(2));
              onSelf = true;
              var call556 = callmethod(this, "background", [0]);
              var call557 = callmethod(call556,"draw", [4], call547, quotient551, quotient555, new GraceNum(0));
              lineNumber = 279
              onSelf = true;
              var call558 = callmethod(this, "entities", [0]);
              lineNumber = 285
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
              block559.className = 'block<kitty:285>';
              block559.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 280
                var call560 = callmethod(var_entity,"tick", [0]);
                lineNumber = 281
                onSelf = true;
                var call561 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call563 = callmethod(this, "canvasWidth", [0]);
                var quotient565 = callmethod(call563, "/", [1], new GraceNum(2));
                onSelf = true;
                var call567 = callmethod(this, "canvasHeight", [0]);
                var quotient569 = callmethod(call567, "/", [1], new GraceNum(2));
                var call570 = callmethod(var_entity,"draw", [3], call561, quotient565, quotient569);
                return call570;
              };
              var call571 = callmethod(Grace_prelude,"for()do", [1, 1], call558, block559);
              return call571
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func536.paramCounts = [
            0,
          ];
          func536.variableArities = [
            false,
          ];
          obj417.methods["update"] = func536;
          func536.definitionLine = 268;
          func536.definitionModule = "kitty";
          var func572 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func572.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              var string573 = new GraceString("WORLD STOPPING...");
              var call574 = Grace_print(string573);
              lineNumber = 290
              lineNumber = 280
              lineNumber = 289
              var bool575 = new GraceBoolean(false)
              onSelf = true;
              var call576 = callmethod(this, "isRunning:=", [1], bool575);
              lineNumber = 290
              var string577 = new GraceString("mousedown");
              onSelf = true;
              var call578 = callmethod(this, "canvas", [0]);
              var call579 = callmethod(call578,"removeEventListener", [2], string577, var_mouseDownListener);
              lineNumber = 291
              var string580 = new GraceString("keydown");
              onSelf = true;
              var call581 = callmethod(this, "document", [0]);
              var call582 = callmethod(call581,"removeEventListener", [2], string580, var_keyDownListener);
              lineNumber = 292
              var string583 = new GraceString("keyup");
              onSelf = true;
              var call584 = callmethod(this, "document", [0]);
              var call585 = callmethod(call584,"removeEventListener", [2], string583, var_keyUpListener);
              return call585
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func572.paramCounts = [
            0,
          ];
          func572.variableArities = [
            false,
          ];
          obj417.methods["stop"] = func572;
          func572.definitionLine = 287;
          func572.definitionModule = "kitty";
          var func586 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func586.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 296
              onSelf = true;
              var call587 = callmethod(this, "currentKeyDown", [0]);
              var opresult590 = callmethod(var_key, "==", [1], call587);
              return opresult590
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
          obj417.methods["isKeyDown"] = func586;
          func586.definitionLine = 295;
          func586.definitionModule = "kitty";
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
              lineNumber = 300
              lineNumber = 280
              lineNumber = 300
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
          obj417.methods["setBackground"] = func591;
          func591.definitionLine = 299;
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
              lineNumber = 304
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
          obj417.methods["addEntity"] = func598;
          func598.definitionLine = 303;
          func598.definitionModule = "kitty";
          var func601 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func601.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
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
          obj417.methods["getContext"] = func601;
          func601.definitionLine = 307;
          func601.definitionModule = "kitty";
          sourceObject = obj417;
          obj417.data["background"] = undefined;
          var reader_kitty_background_603 = function() {
            return this.data["background"];
          }
          obj417.methods["background"] = reader_kitty_background_603;
          obj417.data["background"] = undefined;
          var writer_kitty_background_603 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj417.methods["background:="] = writer_kitty_background_603;
          reader_kitty_background_603.confidential = true;
          writer_kitty_background_603.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 164
          var string604 = new GraceString("black");
          obj417.data["backgroundColour"] = string604;
          var reader_kitty_backgroundColour_605 = function() {
            return this.data["backgroundColour"];
          }
          obj417.methods["backgroundColour"] = reader_kitty_backgroundColour_605;
          obj417.data["backgroundColour"] = string604;
          var writer_kitty_backgroundColour_605 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj417.methods["backgroundColour:="] = writer_kitty_backgroundColour_605;
          reader_kitty_backgroundColour_605.confidential = true;
          writer_kitty_backgroundColour_605.confidential = true;
          lineNumber = 166;
          moduleName = "kitty";
          lineNumber = 164
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string604)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["document"] = undefined;
          var reader_kitty_document_606 = function() {
            return this.data["document"];
          }
          obj417.methods["document"] = reader_kitty_document_606;
          obj417.data["document"] = undefined;
          var writer_kitty_document_606 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj417.methods["document:="] = writer_kitty_document_606;
          reader_kitty_document_606.confidential = true;
          writer_kitty_document_606.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_607 = function() {
            return this.data["backingCanvas"];
          }
          obj417.methods["backingCanvas"] = reader_kitty_backingCanvas_607;
          obj417.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_607 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj417.methods["backingCanvas:="] = writer_kitty_backingCanvas_607;
          reader_kitty_backingCanvas_607.confidential = true;
          writer_kitty_backingCanvas_607.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingContext"] = undefined;
          var reader_kitty_backingContext_608 = function() {
            return this.data["backingContext"];
          }
          obj417.methods["backingContext"] = reader_kitty_backingContext_608;
          obj417.data["backingContext"] = undefined;
          var writer_kitty_backingContext_608 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj417.methods["backingContext:="] = writer_kitty_backingContext_608;
          reader_kitty_backingContext_608.confidential = true;
          writer_kitty_backingContext_608.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvas"] = undefined;
          var reader_kitty_canvas_609 = function() {
            return this.data["canvas"];
          }
          obj417.methods["canvas"] = reader_kitty_canvas_609;
          obj417.data["canvas"] = undefined;
          var writer_kitty_canvas_609 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj417.methods["canvas:="] = writer_kitty_canvas_609;
          reader_kitty_canvas_609.confidential = true;
          writer_kitty_canvas_609.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_610 = function() {
            return this.data["canvasWidth"];
          }
          obj417.methods["canvasWidth"] = reader_kitty_canvasWidth_610;
          obj417.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_610 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj417.methods["canvasWidth:="] = writer_kitty_canvasWidth_610;
          reader_kitty_canvasWidth_610.confidential = true;
          writer_kitty_canvasWidth_610.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_611 = function() {
            return this.data["canvasHeight"];
          }
          obj417.methods["canvasHeight"] = reader_kitty_canvasHeight_611;
          obj417.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_611 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj417.methods["canvasHeight:="] = writer_kitty_canvasHeight_611;
          reader_kitty_canvasHeight_611.confidential = true;
          writer_kitty_canvasHeight_611.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 175
          var call612 = callmethod(var_collections,"list", [0]);
          var call613 = callmethod(call612,"new", [0]);
          obj417.data["entities"] = call613;
          var reader_kitty_entities_614 = function() {
            return this.data["entities"];
          }
          obj417.methods["entities"] = reader_kitty_entities_614;
          obj417.data["entities"] = call613;
          var writer_kitty_entities_614 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj417.methods["entities:="] = writer_kitty_entities_614;
          reader_kitty_entities_614.confidential = true;
          writer_kitty_entities_614.confidential = true;
          lineNumber = 177;
          moduleName = "kitty";
          lineNumber = 175
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call613)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 177
          var bool615 = new GraceBoolean(false)
          obj417.data["isInit"] = bool615;
          var reader_kitty_isInit_616 = function() {
            return this.data["isInit"];
          }
          obj417.methods["isInit"] = reader_kitty_isInit_616;
          obj417.data["isInit"] = bool615;
          var writer_kitty_isInit_616 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj417.methods["isInit:="] = writer_kitty_isInit_616;
          reader_kitty_isInit_616.confidential = true;
          writer_kitty_isInit_616.confidential = true;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 178
          var bool617 = new GraceBoolean(false)
          obj417.data["isRunning"] = bool617;
          var reader_kitty_isRunning_618 = function() {
            return this.data["isRunning"];
          }
          obj417.methods["isRunning"] = reader_kitty_isRunning_618;
          obj417.data["isRunning"] = bool617;
          var writer_kitty_isRunning_618 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj417.methods["isRunning:="] = writer_kitty_isRunning_618;
          reader_kitty_isRunning_618.confidential = true;
          writer_kitty_isRunning_618.confidential = true;
          lineNumber = 180;
          moduleName = "kitty";
          lineNumber = 178
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool617)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["mctx"] = undefined;
          var reader_kitty_mctx_619 = function() {
            return this.data["mctx"];
          }
          obj417.methods["mctx"] = reader_kitty_mctx_619;
          obj417.data["mctx"] = undefined;
          var writer_kitty_mctx_619 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj417.methods["mctx:="] = writer_kitty_mctx_619;
          reader_kitty_mctx_619.confidential = true;
          writer_kitty_mctx_619.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 184
          lineNumber = 182
          var call620 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj417.data["currentKeyDown"] = call620;
          var reader_kitty_currentKeyDown_621 = function() {
            return this.data["currentKeyDown"];
          }
          obj417.methods["currentKeyDown"] = reader_kitty_currentKeyDown_621;
          obj417.data["currentKeyDown"] = call620;
          var writer_kitty_currentKeyDown_621 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj417.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_621;
          reader_kitty_currentKeyDown_621.confidential = true;
          writer_kitty_currentKeyDown_621.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call620)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["ent"] = undefined;
          var reader_kitty_ent_622 = function() {
            return this.data["ent"];
          }
          obj417.methods["ent"] = reader_kitty_ent_622;
          obj417.data["ent"] = undefined;
          var writer_kitty_ent_622 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj417.methods["ent:="] = writer_kitty_ent_622;
          reader_kitty_ent_622.confidential = true;
          writer_kitty_ent_622.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 186
          onSelf = true;
          var call623 = callmethod(this, "init", [0]);
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
    func416.definitionLine = 159;
    func416.definitionModule = "kitty";
    var func624 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj625 = Grace_allocObject();
        obj625.definitionModule = "kitty";
        obj625.definitionLine = 159;
        var inho625 = inheritingObject;
        while (inho625.superobj) inho625 = inho625.superobj;
        inho625.superobj = obj625;
        obj625.data = inheritingObject.data;
        obj625.outer = this;
        var reader_kitty_outer_626 = function() {
          return this.outer;
        }
        obj625.methods["outer"] = reader_kitty_outer_626;
        function obj_init_625() {
          var origSuperDepth = superDepth;
          superDepth = obj625;
          obj625.annotations = [];
          var func627 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func627.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 197
              var if628 = var_done;
              lineNumber = 193
              onSelf = true;
              var call629 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call629)) {
                lineNumber = 195
                lineNumber = 194
                var bool630 = new GraceBoolean(false)
                return bool630
              }
              lineNumber = 198
              lineNumber = 175
              lineNumber = 197
              var call631 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call632 = callmethod(this, "document:=", [1], call631);
              lineNumber = 198
              lineNumber = 197
              lineNumber = 198
              var string633 = new GraceString("standard-canvas");
              onSelf = true;
              var call634 = callmethod(this, "document", [0]);
              var call635 = callmethod(call634,"getElementById", [1], string633);
              onSelf = true;
              var call636 = callmethod(this, "canvas:=", [1], call635);
              lineNumber = 200
              lineNumber = 197
              lineNumber = 199
              onSelf = true;
              var call637 = callmethod(this, "canvas", [0]);
              var call638 = callmethod(call637,"width", [0]);
              onSelf = true;
              var call639 = callmethod(this, "canvasWidth:=", [1], call638);
              lineNumber = 203
              lineNumber = 199
              lineNumber = 200
              onSelf = true;
              var call640 = callmethod(this, "canvas", [0]);
              var call641 = callmethod(call640,"height", [0]);
              onSelf = true;
              var call642 = callmethod(this, "canvasHeight:=", [1], call641);
              lineNumber = 215
              var block643 = Grace_allocObject();
              block643.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block643.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block643.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block643.methods["match"] = GraceBlock_match;
              block643.methods["prefix?"] = GraceBlock_lift;
              block643.receiver = this;
              block643.className = 'block<kitty:215>';
              block643.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 206
                lineNumber = 205
                onSelf = true;
                var call644 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call646 = callmethod(this, "canvas", [0]);
                var call647 = callmethod(call646,"offsetWidth", [0]);
                onSelf = true;
                var call649 = callmethod(this, "canvas", [0]);
                var call650 = callmethod(call649,"offsetLeft", [0]);
                var call652 = callmethod(var_ev,"clientX", [0]);
                var diff654 = callmethod(call652, "-", [1], call650);
                var quotient656 = callmethod(diff654, "/", [1], call647);
                var prod658 = callmethod(quotient656, "*", [1], call644);
                var var_x = prod658;
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 205
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 210
                lineNumber = 206
                onSelf = true;
                var call659 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call661 = callmethod(this, "canvas", [0]);
                var call662 = callmethod(call661,"offsetHeight", [0]);
                onSelf = true;
                var call664 = callmethod(this, "canvas", [0]);
                var call665 = callmethod(call664,"offsetTop", [0]);
                var call667 = callmethod(var_ev,"clientY", [0]);
                var diff669 = callmethod(call667, "-", [1], call665);
                var quotient671 = callmethod(diff669, "/", [1], call662);
                var prod673 = callmethod(quotient671, "*", [1], call659);
                var var_y = prod673;
                lineNumber = 210;
                moduleName = "kitty";
                lineNumber = 206
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 214
                var if674 = var_done;
                lineNumber = 210
                var opresult677 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call680 = callmethod(this, "canvasWidth", [0]);
                var diff682 = callmethod(call680, "-", [1], new GraceNum(20));
                var opresult685 = callmethod(var_x, ">", [1], diff682);
                var opresult687 = callmethod(opresult685, "&&", [1], opresult677);
                if (Grace_isTrue(opresult687)) {
                  lineNumber = 211
                  var call688 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 212
                  onSelf = true;
                  var call689 = callmethod(this, "stop", [0]);
                  if674 = call689;
                }
                return if674;
              };
              var_mouseDownListener = block643;
              lineNumber = 215
              var string690 = new GraceString("mousedown");
              onSelf = true;
              var call691 = callmethod(this, "canvas", [0]);
              var call692 = callmethod(call691,"addEventListener", [2], string690, var_mouseDownListener);
              lineNumber = 225
              var block693 = Grace_allocObject();
              block693.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block693.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block693.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block693.methods["match"] = GraceBlock_match;
              block693.methods["prefix?"] = GraceBlock_lift;
              block693.receiver = this;
              block693.className = 'block<kitty:225>';
              block693.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 223
                var if694 = var_done;
                lineNumber = 220
                var call696 = callmethod(var_ev,"keyCode", [0]);
                var opresult698 = callmethod(call696, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult698)) {
                  lineNumber = 221
                  onSelf = true;
                  var call699 = callmethod(this, "stop", [0]);
                  if694 = call699;
                }
                lineNumber = 224
                lineNumber = 220
                lineNumber = 223
                var call700 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call701 = callmethod(this, "currentKeyDown:=", [1], call700);
                return call701;
              };
              var_keyDownListener = block693;
              lineNumber = 225
              var string702 = new GraceString("keydown");
              onSelf = true;
              var call703 = callmethod(this, "document", [0]);
              var call704 = callmethod(call703,"addEventListener", [2], string702, var_keyDownListener);
              lineNumber = 231
              var block705 = Grace_allocObject();
              block705.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block705.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block705.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block705.methods["match"] = GraceBlock_match;
              block705.methods["prefix?"] = GraceBlock_lift;
              block705.receiver = this;
              block705.className = 'block<kitty:231>';
              block705.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                lineNumber = 223
                lineNumber = 230
                lineNumber = 229
                var call706 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call707 = callmethod(this, "currentKeyDown:=", [1], call706);
                return call707;
              };
              var_keyUpListener = block705;
              lineNumber = 231
              var string708 = new GraceString("keyup");
              onSelf = true;
              var call709 = callmethod(this, "document", [0]);
              var call710 = callmethod(call709,"addEventListener", [2], string708, var_keyUpListener);
              lineNumber = 233
              lineNumber = 223
              lineNumber = 233
              var string711 = new GraceString("canvas");
              var call712 = callmethod(var_dom,"document", [0]);
              var call713 = callmethod(call712,"createElement", [1], string711);
              onSelf = true;
              var call714 = callmethod(this, "backingCanvas:=", [1], call713);
              lineNumber = 235
              lineNumber = 233
              lineNumber = 234
              onSelf = true;
              var call715 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call716 = callmethod(this, "backingCanvas", [0]);
              var call717 = callmethod(call716,"height:=", [1], call715);
              lineNumber = 236
              lineNumber = 233
              lineNumber = 235
              onSelf = true;
              var call718 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call719 = callmethod(this, "backingCanvas", [0]);
              var call720 = callmethod(call719,"width:=", [1], call718);
              lineNumber = 236
              lineNumber = 233
              lineNumber = 236
              var string721 = new GraceString("2d");
              onSelf = true;
              var call722 = callmethod(this, "backingCanvas", [0]);
              var call723 = callmethod(call722,"getContext", [1], string721);
              onSelf = true;
              var call724 = callmethod(this, "backingContext:=", [1], call723);
              lineNumber = 237
              lineNumber = 233
              lineNumber = 237
              var string725 = new GraceString("2d");
              onSelf = true;
              var call726 = callmethod(this, "canvas", [0]);
              var call727 = callmethod(call726,"getContext", [1], string725);
              onSelf = true;
              var call728 = callmethod(this, "mctx:=", [1], call727);
              lineNumber = 240
              var string729 = new GraceString("doggo.jpg");
              onSelf = true;
              var call730 = callmethod(this, "setBackground", [1], string729);
              lineNumber = 249
              lineNumber = 233
              lineNumber = 246
              var bool731 = new GraceBoolean(true)
              onSelf = true;
              var call732 = callmethod(this, "isInit:=", [1], bool731);
              lineNumber = 249
              var call733 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call734 = callmethod(call733, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call735 = callmethod(call734, "setWorld", [1], this);
              return call735
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func627.paramCounts = [
            0,
          ];
          func627.variableArities = [
            false,
          ];
          obj625.methods["init"] = func627;
          func627.definitionLine = 189;
          func627.definitionModule = "kitty";
          var func736 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func736.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 249
              lineNumber = 260
              var bool737 = new GraceBoolean(true)
              onSelf = true;
              var call738 = callmethod(this, "isRunning:=", [1], bool737);
              lineNumber = 261
              var block739 = Grace_allocObject();
              block739.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block739.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block739.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block739.methods["match"] = GraceBlock_match;
              block739.methods["prefix?"] = GraceBlock_lift;
              block739.receiver = this;
              block739.className = 'block<kitty:261>';
              block739.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call740 = callmethod(this, "isRunning", [0]);
                return call740;
              };
              lineNumber = 265
              var block741 = Grace_allocObject();
              block741.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block741.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block741.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block741.methods["match"] = GraceBlock_match;
              block741.methods["prefix?"] = GraceBlock_lift;
              block741.receiver = this;
              block741.className = 'block<kitty:265>';
              block741.real = function(
              ) {
                sourceObject = this;
                lineNumber = 262
                onSelf = true;
                var call742 = callmethod(this, "update", [0]);
                return call742;
              };
              lineNumber = 261
              var call743 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block739, new GraceNum(10), block741);
              return call743
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func736.paramCounts = [
            0,
          ];
          func736.variableArities = [
            false,
          ];
          obj625.methods["start"] = func736;
          func736.definitionLine = 258;
          func736.definitionModule = "kitty";
          var func744 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func744.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              lineNumber = 249
              lineNumber = 273
              onSelf = true;
              var call745 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call746 = callmethod(this, "mctx", [0]);
              var call747 = callmethod(call746,"fillStyle:=", [1], call745);
              lineNumber = 274
              onSelf = true;
              var call748 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call749 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call750 = callmethod(this, "mctx", [0]);
              var call751 = callmethod(call750,"fillRect", [4], new GraceNum(0), new GraceNum(0), call748, call749);
              lineNumber = 275
              onSelf = true;
              var call752 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call753 = callmethod(this, "mctx", [0]);
              var call754 = callmethod(call753,"drawImage", [3], call752, new GraceNum(0), new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call755 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call757 = callmethod(this, "canvasWidth", [0]);
              var quotient759 = callmethod(call757, "/", [1], new GraceNum(2));
              onSelf = true;
              var call761 = callmethod(this, "canvasHeight", [0]);
              var quotient763 = callmethod(call761, "/", [1], new GraceNum(2));
              onSelf = true;
              var call764 = callmethod(this, "background", [0]);
              var call765 = callmethod(call764,"draw", [4], call755, quotient759, quotient763, new GraceNum(0));
              lineNumber = 279
              onSelf = true;
              var call766 = callmethod(this, "entities", [0]);
              lineNumber = 285
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
              block767.className = 'block<kitty:285>';
              block767.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 280
                var call768 = callmethod(var_entity,"tick", [0]);
                lineNumber = 281
                onSelf = true;
                var call769 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call771 = callmethod(this, "canvasWidth", [0]);
                var quotient773 = callmethod(call771, "/", [1], new GraceNum(2));
                onSelf = true;
                var call775 = callmethod(this, "canvasHeight", [0]);
                var quotient777 = callmethod(call775, "/", [1], new GraceNum(2));
                var call778 = callmethod(var_entity,"draw", [3], call769, quotient773, quotient777);
                return call778;
              };
              var call779 = callmethod(Grace_prelude,"for()do", [1, 1], call766, block767);
              return call779
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func744.paramCounts = [
            0,
          ];
          func744.variableArities = [
            false,
          ];
          obj625.methods["update"] = func744;
          func744.definitionLine = 268;
          func744.definitionModule = "kitty";
          var func780 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func780.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 288
              var string781 = new GraceString("WORLD STOPPING...");
              var call782 = Grace_print(string781);
              lineNumber = 290
              lineNumber = 280
              lineNumber = 289
              var bool783 = new GraceBoolean(false)
              onSelf = true;
              var call784 = callmethod(this, "isRunning:=", [1], bool783);
              lineNumber = 290
              var string785 = new GraceString("mousedown");
              onSelf = true;
              var call786 = callmethod(this, "canvas", [0]);
              var call787 = callmethod(call786,"removeEventListener", [2], string785, var_mouseDownListener);
              lineNumber = 291
              var string788 = new GraceString("keydown");
              onSelf = true;
              var call789 = callmethod(this, "document", [0]);
              var call790 = callmethod(call789,"removeEventListener", [2], string788, var_keyDownListener);
              lineNumber = 292
              var string791 = new GraceString("keyup");
              onSelf = true;
              var call792 = callmethod(this, "document", [0]);
              var call793 = callmethod(call792,"removeEventListener", [2], string791, var_keyUpListener);
              return call793
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func780.paramCounts = [
            0,
          ];
          func780.variableArities = [
            false,
          ];
          obj625.methods["stop"] = func780;
          func780.definitionLine = 287;
          func780.definitionModule = "kitty";
          var func794 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func794.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 296
              onSelf = true;
              var call795 = callmethod(this, "currentKeyDown", [0]);
              var opresult798 = callmethod(var_key, "==", [1], call795);
              return opresult798
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
          obj625.methods["isKeyDown"] = func794;
          func794.definitionLine = 295;
          func794.definitionModule = "kitty";
          var func799 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func799.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 300
              lineNumber = 280
              lineNumber = 300
              onSelf = true;
              var call800 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call801 = callmethod(this, "canvasHeight", [0]);
              var call802 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call803 = callmethod(call802, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call804 = callmethod(call803, "Image()width()height", [1, 1, 1], var_url, call800, call801);
              onSelf = true;
              var call805 = callmethod(this, "background:=", [1], call804);
              return call805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func799.paramCounts = [
            1,
          ];
          func799.variableArities = [
            false,
          ];
          obj625.methods["setBackground"] = func799;
          func799.definitionLine = 299;
          func799.definitionModule = "kitty";
          var func806 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 304
              onSelf = true;
              var call807 = callmethod(this, "entities", [0]);
              var call808 = callmethod(call807,"push", [1], var_e);
              return call808
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func806.paramCounts = [
            1,
          ];
          func806.variableArities = [
            false,
          ];
          obj625.methods["addEntity"] = func806;
          func806.definitionLine = 303;
          func806.definitionModule = "kitty";
          var func809 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func809.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              lineNumber = 308
              onSelf = true;
              var call810 = callmethod(this, "mctx", [0]);
              return call810
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func809.paramCounts = [
            0,
          ];
          func809.variableArities = [
            false,
          ];
          obj625.methods["getContext"] = func809;
          func809.definitionLine = 307;
          func809.definitionModule = "kitty";
          sourceObject = obj625;
          obj625.data["background"] = undefined;
          var reader_kitty_background_811 = function() {
            return this.data["background"];
          }
          obj625.methods["background"] = reader_kitty_background_811;
          obj625.data["background"] = undefined;
          var writer_kitty_background_811 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj625.methods["background:="] = writer_kitty_background_811;
          reader_kitty_background_811.confidential = true;
          writer_kitty_background_811.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 164
          var string812 = new GraceString("black");
          obj625.data["backgroundColour"] = string812;
          var reader_kitty_backgroundColour_813 = function() {
            return this.data["backgroundColour"];
          }
          obj625.methods["backgroundColour"] = reader_kitty_backgroundColour_813;
          obj625.data["backgroundColour"] = string812;
          var writer_kitty_backgroundColour_813 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj625.methods["backgroundColour:="] = writer_kitty_backgroundColour_813;
          reader_kitty_backgroundColour_813.confidential = true;
          writer_kitty_backgroundColour_813.confidential = true;
          lineNumber = 166;
          moduleName = "kitty";
          lineNumber = 164
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string812)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["document"] = undefined;
          var reader_kitty_document_814 = function() {
            return this.data["document"];
          }
          obj625.methods["document"] = reader_kitty_document_814;
          obj625.data["document"] = undefined;
          var writer_kitty_document_814 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj625.methods["document:="] = writer_kitty_document_814;
          reader_kitty_document_814.confidential = true;
          writer_kitty_document_814.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_815 = function() {
            return this.data["backingCanvas"];
          }
          obj625.methods["backingCanvas"] = reader_kitty_backingCanvas_815;
          obj625.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_815 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj625.methods["backingCanvas:="] = writer_kitty_backingCanvas_815;
          reader_kitty_backingCanvas_815.confidential = true;
          writer_kitty_backingCanvas_815.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["backingContext"] = undefined;
          var reader_kitty_backingContext_816 = function() {
            return this.data["backingContext"];
          }
          obj625.methods["backingContext"] = reader_kitty_backingContext_816;
          obj625.data["backingContext"] = undefined;
          var writer_kitty_backingContext_816 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj625.methods["backingContext:="] = writer_kitty_backingContext_816;
          reader_kitty_backingContext_816.confidential = true;
          writer_kitty_backingContext_816.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["canvas"] = undefined;
          var reader_kitty_canvas_817 = function() {
            return this.data["canvas"];
          }
          obj625.methods["canvas"] = reader_kitty_canvas_817;
          obj625.data["canvas"] = undefined;
          var writer_kitty_canvas_817 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj625.methods["canvas:="] = writer_kitty_canvas_817;
          reader_kitty_canvas_817.confidential = true;
          writer_kitty_canvas_817.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_818 = function() {
            return this.data["canvasWidth"];
          }
          obj625.methods["canvasWidth"] = reader_kitty_canvasWidth_818;
          obj625.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_818 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj625.methods["canvasWidth:="] = writer_kitty_canvasWidth_818;
          reader_kitty_canvasWidth_818.confidential = true;
          writer_kitty_canvasWidth_818.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_819 = function() {
            return this.data["canvasHeight"];
          }
          obj625.methods["canvasHeight"] = reader_kitty_canvasHeight_819;
          obj625.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_819 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj625.methods["canvasHeight:="] = writer_kitty_canvasHeight_819;
          reader_kitty_canvasHeight_819.confidential = true;
          writer_kitty_canvasHeight_819.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 175
          var call820 = callmethod(var_collections,"list", [0]);
          var call821 = callmethod(call820,"new", [0]);
          obj625.data["entities"] = call821;
          var reader_kitty_entities_822 = function() {
            return this.data["entities"];
          }
          obj625.methods["entities"] = reader_kitty_entities_822;
          obj625.data["entities"] = call821;
          var writer_kitty_entities_822 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj625.methods["entities:="] = writer_kitty_entities_822;
          reader_kitty_entities_822.confidential = true;
          writer_kitty_entities_822.confidential = true;
          lineNumber = 177;
          moduleName = "kitty";
          lineNumber = 175
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call821)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 177
          var bool823 = new GraceBoolean(false)
          obj625.data["isInit"] = bool823;
          var reader_kitty_isInit_824 = function() {
            return this.data["isInit"];
          }
          obj625.methods["isInit"] = reader_kitty_isInit_824;
          obj625.data["isInit"] = bool823;
          var writer_kitty_isInit_824 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj625.methods["isInit:="] = writer_kitty_isInit_824;
          reader_kitty_isInit_824.confidential = true;
          writer_kitty_isInit_824.confidential = true;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool823)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 178
          var bool825 = new GraceBoolean(false)
          obj625.data["isRunning"] = bool825;
          var reader_kitty_isRunning_826 = function() {
            return this.data["isRunning"];
          }
          obj625.methods["isRunning"] = reader_kitty_isRunning_826;
          obj625.data["isRunning"] = bool825;
          var writer_kitty_isRunning_826 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj625.methods["isRunning:="] = writer_kitty_isRunning_826;
          reader_kitty_isRunning_826.confidential = true;
          writer_kitty_isRunning_826.confidential = true;
          lineNumber = 180;
          moduleName = "kitty";
          lineNumber = 178
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool825)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["mctx"] = undefined;
          var reader_kitty_mctx_827 = function() {
            return this.data["mctx"];
          }
          obj625.methods["mctx"] = reader_kitty_mctx_827;
          obj625.data["mctx"] = undefined;
          var writer_kitty_mctx_827 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj625.methods["mctx:="] = writer_kitty_mctx_827;
          reader_kitty_mctx_827.confidential = true;
          writer_kitty_mctx_827.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 184
          lineNumber = 182
          var call828 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj625.data["currentKeyDown"] = call828;
          var reader_kitty_currentKeyDown_829 = function() {
            return this.data["currentKeyDown"];
          }
          obj625.methods["currentKeyDown"] = reader_kitty_currentKeyDown_829;
          obj625.data["currentKeyDown"] = call828;
          var writer_kitty_currentKeyDown_829 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj625.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_829;
          reader_kitty_currentKeyDown_829.confidential = true;
          writer_kitty_currentKeyDown_829.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 182
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call828)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj625.mutable = true;
          sourceObject = obj625;
          obj625.data["ent"] = undefined;
          var reader_kitty_ent_830 = function() {
            return this.data["ent"];
          }
          obj625.methods["ent"] = reader_kitty_ent_830;
          obj625.data["ent"] = undefined;
          var writer_kitty_ent_830 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj625.methods["ent:="] = writer_kitty_ent_830;
          reader_kitty_ent_830.confidential = true;
          writer_kitty_ent_830.confidential = true;
          obj625.mutable = true;
          sourceObject = obj625;
          lineNumber = 186
          onSelf = true;
          var call831 = callmethod(this, "init", [0]);
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          sourceObject = obj625;
          superDepth = origSuperDepth;
        }
        obj_init_625.apply(inheritingObject, []);
        return obj625
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj414.methods["new()object"] = func624;
    var func832 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 159
        var string833 = new GraceString("class KittyWorld");
        return string833
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func832.paramCounts = [
    ];
    func832.variableArities = [
    ];
    obj414.methods["asDebugString"] = func832;
    func832.definitionLine = 159;
    func832.definitionModule = "kitty";
    sourceObject = obj414;
    sourceObject = obj414;
    superDepth = origSuperDepth;
  }
  obj_init_414.apply(obj414, []);
  var var_KittyWorld = obj414;
  lineNumber = 313
  lineNumber = 322
  lineNumber = 337
  lineNumber = 341
  lineNumber = 346
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n height\n getTag\n elements\n width\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\n tick\n image\n strafe\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n KittyWorld\n World\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n height\n getTag\n elements\n width\nfresh:Entity()x()y:\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\n tick\n image\n strafe\nmethods-of:KittyWorld.new:\n backingContext:=\n setBackground\n canvasWidth:=\n backingContext\n canvasHeight\n currentKeyDown:=\n canvasWidth\n entities:=\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n mctx\n document\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas:=\n isRunning\n getContext\n start\n init\n document:=\n isKeyDown\n ent:=\n update\n entities\nfresh:World:\n backingContext:=\n setBackground\n canvasWidth:=\n backingContext\n canvasHeight\n currentKeyDown:=\n canvasWidth\n mctx\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n entities:=\n document\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas:=\n isRunning\n entities\n start\n init\n document:=\n isKeyDown\n ent:=\n update\n getContext\nconstructors-of:KittyEntity:\n new\n";
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
    "    method isKeyDown(key) {",
    "        return key == currentKeyDown",
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
