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
  lineNumber = 144
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
      lineNumber = 145
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 145;
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
        lineNumber = 146
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
  func8.definitionLine = 144;
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
      obj13.definitionLine = 145;
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
      var call17 = callmethod(var_newborn,"setAction", [1], var_action__39__);
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
  lineNumber = 350
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 351
      var obj19 = Grace_allocObject();
      obj19.definitionModule = "kitty";
      obj19.definitionLine = 351;
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
        lineNumber = 352
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
  func18.definitionLine = 350;
  func18.definitionModule = "kitty";
  var func22 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 351;
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
  lineNumber = 359
  var func26 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 361
      var string27 = new GraceString("CHECKING...");
      var call28 = Grace_print(string27);
      lineNumber = 368
      var if29 = var_done;
      lineNumber = 363
      var call30 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call30)) {
        lineNumber = 364
        var string31 = new GraceString("NO WORLD!!");
        var call32 = Grace_print(string31);
        lineNumber = 366
        return var_done
      }
      lineNumber = 368
      var string33 = new GraceString("STARTING...");
      var call34 = Grace_print(string33);
      lineNumber = 371
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
  func26.definitionLine = 359;
  func26.definitionModule = "kitty";
  lineNumber = 374
  var func36 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 375
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
  func36.definitionLine = 374;
  func36.definitionModule = "kitty";
  lineNumber = 378
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
      lineNumber = 380
      lineNumber = 379
      var_m__95__world = var_world__39__;
      lineNumber = 381
      lineNumber = 380
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
  func38.definitionLine = 378;
  func38.definitionModule = "kitty";
  lineNumber = 383
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
      lineNumber = 384
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
  func40.definitionLine = 383;
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
  lineNumber = 375
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
  func43.definitionLine = 375;
  func43.definitionModule = "kitty";
  lineNumber = 375
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
  func44.definitionLine = 375;
  func44.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool45 = new GraceBoolean(false)
  var var_worldSet = bool45;
  lineNumber = 375
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
  func46.definitionLine = 375;
  func46.definitionModule = "kitty";
  lineNumber = 375
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
  func47.definitionLine = 375;
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
  lineNumber = 375
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
  func48.definitionLine = 375;
  func48.definitionModule = "kitty";
  lineNumber = 375
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
  func49.definitionLine = 375;
  func49.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 375
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
  func50.definitionLine = 375;
  func50.definitionModule = "kitty";
  lineNumber = 375
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
  func51.definitionLine = 375;
  func51.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 375
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
  func52.definitionLine = 375;
  func52.definitionModule = "kitty";
  lineNumber = 375
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
  func53.definitionLine = 375;
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
  var var_newborn;
  lineNumber = 17
  var func57 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func57.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (newborn)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 20
      return var_newborn
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
  this.methods["newborn"] = func57;
  func57.definitionLine = 17;
  func57.definitionModule = "kitty";
  lineNumber = 17
  var func58 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func58.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (newborn:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_newborn = var___95__var__95__assign__95__tmp;
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
  this.methods["newborn:="] = func58;
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
              var_newborn = this;
              return this
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
          var func171 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func171.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call172 = callmethod(this, "action", [0]);
              var call173 = callmethod(call172,"apply", [0]);
              return call173
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
          obj166.methods["tick"] = func171;
          func171.definitionLine = 89;
          func171.definitionModule = "kitty";
          var func174 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func174.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call177 = callmethod(this, "rotation", [0]);
              var prod179 = callmethod(call177, "*", [1], new GraceNum(3.14159));
              var quotient181 = callmethod(prod179, "/", [1], new GraceNum(180));
              var call182 = callmethod(var_math,"cos", [1], quotient181);
              var prod185 = callmethod(var_distance, "*", [1], call182);
              onSelf = true;
              var call187 = callmethod(this, "posX", [0]);
              var opresult189 = callmethod(call187, "+", [1], prod185);
              onSelf = true;
              var call190 = callmethod(this, "posX:=", [1], opresult189);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call193 = callmethod(this, "rotation", [0]);
              var prod195 = callmethod(call193, "*", [1], new GraceNum(3.14159));
              var quotient197 = callmethod(prod195, "/", [1], new GraceNum(180));
              var call198 = callmethod(var_math,"sin", [1], quotient197);
              var prod201 = callmethod(var_distance, "*", [1], call198);
              onSelf = true;
              var call203 = callmethod(this, "posY", [0]);
              var opresult205 = callmethod(call203, "+", [1], prod201);
              onSelf = true;
              var call206 = callmethod(this, "posY:=", [1], opresult205);
              return call206
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func174.paramCounts = [
            1,
          ];
          func174.variableArities = [
            false,
          ];
          obj166.methods["move"] = func174;
          func174.definitionLine = 93;
          func174.definitionModule = "kitty";
          var func207 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func207.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call210 = callmethod(this, "rotation", [0]);
              var opresult213 = callmethod(new GraceNum(90), "+", [1], call210);
              var prod215 = callmethod(opresult213, "*", [1], new GraceNum(3.14159));
              var quotient217 = callmethod(prod215, "/", [1], new GraceNum(180));
              var call218 = callmethod(var_math,"cos", [1], quotient217);
              var prod221 = callmethod(var_distance, "*", [1], call218);
              onSelf = true;
              var call223 = callmethod(this, "posX", [0]);
              var opresult225 = callmethod(call223, "+", [1], prod221);
              onSelf = true;
              var call226 = callmethod(this, "posX:=", [1], opresult225);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call229 = callmethod(this, "rotation", [0]);
              var opresult232 = callmethod(new GraceNum(90), "+", [1], call229);
              var prod234 = callmethod(opresult232, "*", [1], new GraceNum(3.14159));
              var quotient236 = callmethod(prod234, "/", [1], new GraceNum(180));
              var call237 = callmethod(var_math,"sin", [1], quotient236);
              var prod240 = callmethod(var_distance, "*", [1], call237);
              onSelf = true;
              var call242 = callmethod(this, "posY", [0]);
              var opresult244 = callmethod(call242, "+", [1], prod240);
              onSelf = true;
              var call245 = callmethod(this, "posY:=", [1], opresult244);
              return call245
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func207.paramCounts = [
            1,
          ];
          func207.variableArities = [
            false,
          ];
          obj166.methods["strafe"] = func207;
          func207.definitionLine = 98;
          func207.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func246.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              lineNumber = 90
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call248 = callmethod(this, "rotation", [0]);
              var opresult250 = callmethod(call248, "+", [1], var_angle);
              onSelf = true;
              var call251 = callmethod(this, "rotation:=", [1], opresult250);
              return call251
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func246.paramCounts = [
            1,
          ];
          func246.variableArities = [
            false,
          ];
          obj166.methods["turn"] = func246;
          func246.definitionLine = 103;
          func246.definitionModule = "kitty";
          var func252 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func252.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call253 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call254 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call255 = callmethod(this, "posY", [0]);
              var call256 = callmethod(var_ctx,"translate", [2], call254, call255);
              lineNumber = 110
              onSelf = true;
              var call257 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call258 = callmethod(this, "image", [0]);
              var call259 = callmethod(call258,"draw", [4], var_ctx, var_dx, var_dy, call257);
              lineNumber = 111
              var call260 = callmethod(var_ctx,"restore", [0]);
              return call260
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func252.paramCounts = [
            3,
          ];
          func252.variableArities = [
            false,
          ];
          obj166.methods["draw"] = func252;
          func252.definitionLine = 107;
          func252.definitionModule = "kitty";
          var func261 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call262 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call263 = callmethod(call262, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call264 = callmethod(call263, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call265 = callmethod(this, "image:=", [1], call264);
              return call265
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func261.paramCounts = [
            1,
          ];
          func261.variableArities = [
            false,
          ];
          obj166.methods["createImage"] = func261;
          func261.definitionLine = 114;
          func261.definitionModule = "kitty";
          var func266 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func266.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call267 = callmethod(this, "image:=", [1], var_image__39__);
              return call267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func266.paramTypes = [];
          func266.paramTypes.push([]);
          func266.paramCounts = [
            1,
          ];
          func266.variableArities = [
            false,
          ];
          obj166.methods["setImage"] = func266;
          func266.definitionLine = 118;
          func266.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call269 = callmethod(this, "action:=", [1], var_action__39__);
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
          obj166.methods["setAction"] = func268;
          func268.definitionLine = 122;
          func268.definitionModule = "kitty";
          var func270 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call271 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call272 = callmethod(this, "posY:=", [1], var_y);
              return call272
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func270.paramCounts = [
            2,
          ];
          func270.variableArities = [
            false,
          ];
          obj166.methods["setLocation"] = func270;
          func270.definitionLine = 126;
          func270.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call274 = callmethod(this, "posX", [0]);
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
          obj166.methods["getX"] = func273;
          func273.definitionLine = 131;
          func273.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call276 = callmethod(this, "posY", [0]);
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
          obj166.methods["getY"] = func275;
          func275.definitionLine = 135;
          func275.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call278 = callmethod(this, "rotation", [0]);
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
          obj166.methods["getRotation"] = func277;
          func277.definitionLine = 139;
          func277.definitionModule = "kitty";
          sourceObject = obj166;
          lineNumber = 73
          obj166.data["tag"] = var_tag__39__;
          var reader_kitty_tag_279 = function() {
            return this.data["tag"];
          }
          obj166.methods["tag"] = reader_kitty_tag_279;
          obj166.data["tag"] = var_tag__39__;
          var writer_kitty_tag_279 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj166.methods["tag:="] = writer_kitty_tag_279;
          reader_kitty_tag_279.confidential = true;
          writer_kitty_tag_279.confidential = true;
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
          var reader_kitty_posX_280 = function() {
            return this.data["posX"];
          }
          obj166.methods["posX"] = reader_kitty_posX_280;
          obj166.data["posX"] = var_x__39__;
          var writer_kitty_posX_280 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj166.methods["posX:="] = writer_kitty_posX_280;
          reader_kitty_posX_280.confidential = true;
          writer_kitty_posX_280.confidential = true;
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
          var reader_kitty_posY_281 = function() {
            return this.data["posY"];
          }
          obj166.methods["posY"] = reader_kitty_posY_281;
          obj166.data["posY"] = var_y__39__;
          var writer_kitty_posY_281 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj166.methods["posY:="] = writer_kitty_posY_281;
          reader_kitty_posY_281.confidential = true;
          writer_kitty_posY_281.confidential = true;
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
          var reader_kitty_rotation_282 = function() {
            return this.data["rotation"];
          }
          obj166.methods["rotation"] = reader_kitty_rotation_282;
          obj166.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_282 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj166.methods["rotation:="] = writer_kitty_rotation_282;
          reader_kitty_rotation_282.confidential = true;
          writer_kitty_rotation_282.confidential = true;
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
          var block283 = Grace_allocObject();
          block283.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block283.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block283.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block283.methods["match"] = GraceBlock_match;
          block283.methods["prefix?"] = GraceBlock_lift;
          block283.receiver = this;
          block283.className = 'block<kitty:79>';
          block283.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj166.data["action"] = block283;
          var reader_kitty_action_284 = function() {
            return this.data["action"];
          }
          obj166.methods["action"] = reader_kitty_action_284;
          obj166.data["action"] = block283;
          var writer_kitty_action_284 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj166.methods["action:="] = writer_kitty_action_284;
          reader_kitty_action_284.confidential = true;
          writer_kitty_action_284.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block283)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj166.mutable = true;
          sourceObject = obj166;
          obj166.data["image"] = undefined;
          var reader_kitty_image_285 = function() {
            return this.data["image"];
          }
          obj166.methods["image"] = reader_kitty_image_285;
          obj166.data["image"] = undefined;
          var writer_kitty_image_285 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj166.methods["image:="] = writer_kitty_image_285;
          reader_kitty_image_285.confidential = true;
          writer_kitty_image_285.confidential = true;
          obj166.mutable = true;
          sourceObject = obj166;
          lineNumber = 81
          onSelf = true;
          var call286 = callmethod(this, "awake", [0]);
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
        obj288.definitionLine = 69;
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
              lineNumber = 85
              var string291 = new GraceString("realyee.png");
              onSelf = true;
              var call292 = callmethod(this, "createImage", [1], string291);
              lineNumber = 87
              lineNumber = 86
              var_newborn = this;
              return this
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
          func290.definitionLine = 84;
          func290.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call294 = callmethod(this, "action", [0]);
              var call295 = callmethod(call294,"apply", [0]);
              return call295
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
          obj288.methods["tick"] = func293;
          func293.definitionLine = 89;
          func293.definitionModule = "kitty";
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
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
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
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
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
          obj288.methods["move"] = func296;
          func296.definitionLine = 93;
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
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
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
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
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
          obj288.methods["strafe"] = func329;
          func329.definitionLine = 98;
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
              lineNumber = 105
              lineNumber = 90
              lineNumber = 105
              lineNumber = 104
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
          obj288.methods["turn"] = func368;
          func368.definitionLine = 103;
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
              lineNumber = 108
              var call375 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call376 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call377 = callmethod(this, "posY", [0]);
              var call378 = callmethod(var_ctx,"translate", [2], call376, call377);
              lineNumber = 110
              onSelf = true;
              var call379 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call380 = callmethod(this, "image", [0]);
              var call381 = callmethod(call380,"draw", [4], var_ctx, var_dx, var_dy, call379);
              lineNumber = 111
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
          obj288.methods["draw"] = func374;
          func374.definitionLine = 107;
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
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
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
          obj288.methods["createImage"] = func383;
          func383.definitionLine = 114;
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
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
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
          obj288.methods["setImage"] = func388;
          func388.definitionLine = 118;
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
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
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
          obj288.methods["setAction"] = func390;
          func390.definitionLine = 122;
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
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call393 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
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
          obj288.methods["setLocation"] = func392;
          func392.definitionLine = 126;
          func392.definitionModule = "kitty";
          var func395 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func395.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
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
          obj288.methods["getX"] = func395;
          func395.definitionLine = 131;
          func395.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
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
          obj288.methods["getY"] = func397;
          func397.definitionLine = 135;
          func397.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
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
          obj288.methods["getRotation"] = func399;
          func399.definitionLine = 139;
          func399.definitionModule = "kitty";
          sourceObject = obj288;
          lineNumber = 73
          obj288.data["tag"] = var_tag__39__;
          var reader_kitty_tag_401 = function() {
            return this.data["tag"];
          }
          obj288.methods["tag"] = reader_kitty_tag_401;
          obj288.data["tag"] = var_tag__39__;
          var writer_kitty_tag_401 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj288.methods["tag:="] = writer_kitty_tag_401;
          reader_kitty_tag_401.confidential = true;
          writer_kitty_tag_401.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 74
          obj288.data["posX"] = var_x__39__;
          var reader_kitty_posX_402 = function() {
            return this.data["posX"];
          }
          obj288.methods["posX"] = reader_kitty_posX_402;
          obj288.data["posX"] = var_x__39__;
          var writer_kitty_posX_402 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj288.methods["posX:="] = writer_kitty_posX_402;
          reader_kitty_posX_402.confidential = true;
          writer_kitty_posX_402.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 75
          obj288.data["posY"] = var_y__39__;
          var reader_kitty_posY_403 = function() {
            return this.data["posY"];
          }
          obj288.methods["posY"] = reader_kitty_posY_403;
          obj288.data["posY"] = var_y__39__;
          var writer_kitty_posY_403 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj288.methods["posY:="] = writer_kitty_posY_403;
          reader_kitty_posY_403.confidential = true;
          writer_kitty_posY_403.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 76
          obj288.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_404 = function() {
            return this.data["rotation"];
          }
          obj288.methods["rotation"] = reader_kitty_rotation_404;
          obj288.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_404 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj288.methods["rotation:="] = writer_kitty_rotation_404;
          reader_kitty_rotation_404.confidential = true;
          writer_kitty_rotation_404.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 79
          var block405 = Grace_allocObject();
          block405.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block405.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block405.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block405.methods["match"] = GraceBlock_match;
          block405.methods["prefix?"] = GraceBlock_lift;
          block405.receiver = this;
          block405.className = 'block<kitty:79>';
          block405.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj288.data["action"] = block405;
          var reader_kitty_action_406 = function() {
            return this.data["action"];
          }
          obj288.methods["action"] = reader_kitty_action_406;
          obj288.data["action"] = block405;
          var writer_kitty_action_406 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj288.methods["action:="] = writer_kitty_action_406;
          reader_kitty_action_406.confidential = true;
          writer_kitty_action_406.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block405)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj288.mutable = true;
          sourceObject = obj288;
          obj288.data["image"] = undefined;
          var reader_kitty_image_407 = function() {
            return this.data["image"];
          }
          obj288.methods["image"] = reader_kitty_image_407;
          obj288.data["image"] = undefined;
          var writer_kitty_image_407 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj288.methods["image:="] = writer_kitty_image_407;
          reader_kitty_image_407.confidential = true;
          writer_kitty_image_407.confidential = true;
          obj288.mutable = true;
          sourceObject = obj288;
          lineNumber = 81
          onSelf = true;
          var call408 = callmethod(this, "awake", [0]);
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
    obj163.methods["new()object"] = func287;
    var func409 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
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
    obj163.methods["asDebugString"] = func409;
    func409.definitionLine = 69;
    func409.definitionModule = "kitty";
    sourceObject = obj163;
    sourceObject = obj163;
    superDepth = origSuperDepth;
  }
  obj_init_163.apply(obj163, []);
  var var_KittyEntity = obj163;
  lineNumber = 144
  lineNumber = 153
  lineNumber = 199
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
  func411.definitionLine = 199;
  func411.definitionModule = "kitty";
  var obj412 = Grace_allocObject();
  obj412.definitionModule = "kitty";
  obj412.definitionLine = 199;
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
        obj415.definitionLine = 199;
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
              lineNumber = 237
              var if418 = var_done;
              lineNumber = 233
              onSelf = true;
              var call419 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call419)) {
                lineNumber = 235
                lineNumber = 234
                var bool420 = new GraceBoolean(false)
                return bool420
              }
              lineNumber = 238
              lineNumber = 199
              lineNumber = 237
              var call421 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call422 = callmethod(this, "document:=", [1], call421);
              lineNumber = 238
              lineNumber = 237
              lineNumber = 238
              var string423 = new GraceString("standard-canvas");
              onSelf = true;
              var call424 = callmethod(this, "document", [0]);
              var call425 = callmethod(call424,"getElementById", [1], string423);
              onSelf = true;
              var call426 = callmethod(this, "canvas:=", [1], call425);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call427 = callmethod(this, "canvas", [0]);
              var call428 = callmethod(call427,"width", [0]);
              onSelf = true;
              var call429 = callmethod(this, "canvasWidth:=", [1], call428);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call430 = callmethod(this, "canvas", [0]);
              var call431 = callmethod(call430,"height", [0]);
              onSelf = true;
              var call432 = callmethod(this, "canvasHeight:=", [1], call431);
              lineNumber = 255
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
              block433.className = 'block<kitty:255>';
              block433.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 246
                lineNumber = 245
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
                lineNumber = 246;
                moduleName = "kitty";
                lineNumber = 245
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 250
                lineNumber = 246
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
                lineNumber = 250;
                moduleName = "kitty";
                lineNumber = 246
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 254
                var if464 = var_done;
                lineNumber = 250
                var opresult467 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call470 = callmethod(this, "canvasWidth", [0]);
                var diff472 = callmethod(call470, "-", [1], new GraceNum(20));
                var opresult475 = callmethod(var_x, ">", [1], diff472);
                var opresult477 = callmethod(opresult475, "&&", [1], opresult467);
                if (Grace_isTrue(opresult477)) {
                  lineNumber = 251
                  var call478 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 252
                  onSelf = true;
                  var call479 = callmethod(this, "stop", [0]);
                  if464 = call479;
                }
                return if464;
              };
              var_mouseDownListener = block433;
              lineNumber = 255
              var string480 = new GraceString("mousedown");
              onSelf = true;
              var call481 = callmethod(this, "canvas", [0]);
              var call482 = callmethod(call481,"addEventListener", [2], string480, var_mouseDownListener);
              lineNumber = 265
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
              block483.className = 'block<kitty:265>';
              block483.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 263
                var if484 = var_done;
                lineNumber = 260
                var call486 = callmethod(var_ev,"keyCode", [0]);
                var opresult488 = callmethod(call486, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult488)) {
                  lineNumber = 261
                  onSelf = true;
                  var call489 = callmethod(this, "stop", [0]);
                  if484 = call489;
                }
                lineNumber = 264
                lineNumber = 260
                lineNumber = 263
                var call490 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call491 = callmethod(this, "currentKeyDown:=", [1], call490);
                return call491;
              };
              var_keyDownListener = block483;
              lineNumber = 265
              var string492 = new GraceString("keydown");
              onSelf = true;
              var call493 = callmethod(this, "document", [0]);
              var call494 = callmethod(call493,"addEventListener", [2], string492, var_keyDownListener);
              lineNumber = 271
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
              block495.className = 'block<kitty:271>';
              block495.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 270
                lineNumber = 263
                lineNumber = 270
                lineNumber = 269
                var call496 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call497 = callmethod(this, "currentKeyDown:=", [1], call496);
                return call497;
              };
              var_keyUpListener = block495;
              lineNumber = 271
              var string498 = new GraceString("keyup");
              onSelf = true;
              var call499 = callmethod(this, "document", [0]);
              var call500 = callmethod(call499,"addEventListener", [2], string498, var_keyUpListener);
              lineNumber = 273
              lineNumber = 263
              lineNumber = 273
              var string501 = new GraceString("canvas");
              var call502 = callmethod(var_dom,"document", [0]);
              var call503 = callmethod(call502,"createElement", [1], string501);
              onSelf = true;
              var call504 = callmethod(this, "backingCanvas:=", [1], call503);
              lineNumber = 275
              lineNumber = 273
              lineNumber = 274
              onSelf = true;
              var call505 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas", [0]);
              var call507 = callmethod(call506,"height:=", [1], call505);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 275
              onSelf = true;
              var call508 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call509 = callmethod(this, "backingCanvas", [0]);
              var call510 = callmethod(call509,"width:=", [1], call508);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 276
              var string511 = new GraceString("2d");
              onSelf = true;
              var call512 = callmethod(this, "backingCanvas", [0]);
              var call513 = callmethod(call512,"getContext", [1], string511);
              onSelf = true;
              var call514 = callmethod(this, "backingContext:=", [1], call513);
              lineNumber = 277
              lineNumber = 273
              lineNumber = 277
              var string515 = new GraceString("2d");
              onSelf = true;
              var call516 = callmethod(this, "canvas", [0]);
              var call517 = callmethod(call516,"getContext", [1], string515);
              onSelf = true;
              var call518 = callmethod(this, "mctx:=", [1], call517);
              lineNumber = 280
              var string519 = new GraceString("doggo.jpg");
              onSelf = true;
              var call520 = callmethod(this, "setBackground", [1], string519);
              lineNumber = 292
              lineNumber = 273
              lineNumber = 286
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
          func417.definitionLine = 229;
          func417.definitionModule = "kitty";
          var func523 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func523.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 273
              lineNumber = 297
              var bool524 = new GraceBoolean(true)
              onSelf = true;
              var call525 = callmethod(this, "isRunning:=", [1], bool524);
              lineNumber = 298
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
              block526.className = 'block<kitty:298>';
              block526.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call527 = callmethod(this, "isRunning", [0]);
                return call527;
              };
              lineNumber = 302
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
              block528.className = 'block<kitty:302>';
              block528.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call529 = callmethod(this, "update", [0]);
                return call529;
              };
              lineNumber = 298
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
          func523.definitionLine = 295;
          func523.definitionModule = "kitty";
          var func531 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func531.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 273
              lineNumber = 310
              onSelf = true;
              var call532 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call533 = callmethod(this, "mctx", [0]);
              var call534 = callmethod(call533,"fillStyle:=", [1], call532);
              lineNumber = 311
              onSelf = true;
              var call535 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call536 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call537 = callmethod(this, "mctx", [0]);
              var call538 = callmethod(call537,"fillRect", [4], new GraceNum(0), new GraceNum(0), call535, call536);
              lineNumber = 312
              onSelf = true;
              var call539 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call540 = callmethod(this, "mctx", [0]);
              var call541 = callmethod(call540,"drawImage", [3], call539, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
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
              lineNumber = 316
              onSelf = true;
              var call553 = callmethod(this, "entities", [0]);
              lineNumber = 322
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
              block554.className = 'block<kitty:322>';
              block554.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 317
                var call555 = callmethod(var_entity,"tick", [0]);
                lineNumber = 318
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
          func531.definitionLine = 305;
          func531.definitionModule = "kitty";
          var func567 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func567.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              var string568 = new GraceString("WORLD STOPPING...");
              var call569 = Grace_print(string568);
              lineNumber = 327
              lineNumber = 317
              lineNumber = 326
              var bool570 = new GraceBoolean(false)
              onSelf = true;
              var call571 = callmethod(this, "isRunning:=", [1], bool570);
              lineNumber = 327
              var string572 = new GraceString("mousedown");
              onSelf = true;
              var call573 = callmethod(this, "canvas", [0]);
              var call574 = callmethod(call573,"removeEventListener", [2], string572, var_mouseDownListener);
              lineNumber = 328
              var string575 = new GraceString("keydown");
              onSelf = true;
              var call576 = callmethod(this, "document", [0]);
              var call577 = callmethod(call576,"removeEventListener", [2], string575, var_keyDownListener);
              lineNumber = 329
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
          func567.definitionLine = 324;
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
              lineNumber = 334
              lineNumber = 333
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
          func581.definitionLine = 332;
          func581.definitionModule = "kitty";
          var func586 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func586.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 337
              lineNumber = 317
              lineNumber = 337
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
              var call591 = callmethod(call590, "Image()width()height", [1, 1, 1], var_url, call587, call588);
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
          func586.definitionLine = 336;
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
              lineNumber = 341
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
          func593.definitionLine = 340;
          func593.definitionModule = "kitty";
          var func596 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 346
              lineNumber = 345
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
          func596.definitionLine = 344;
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
          lineNumber = 204
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
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
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
          lineNumber = 215
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
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call608)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 217
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
          lineNumber = 218;
          moduleName = "kitty";
          lineNumber = 217
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 218
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
          lineNumber = 220;
          moduleName = "kitty";
          lineNumber = 218
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
          lineNumber = 224
          lineNumber = 222
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
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj415.mutable = true;
          sourceObject = obj415;
          obj415.data["ent"] = undefined;
          var reader_kitty_ent_617 = function() {
            return this.data["ent"];
          }
          obj415.methods["ent"] = reader_kitty_ent_617;
          obj415.data["ent"] = undefined;
          var writer_kitty_ent_617 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj415.methods["ent:="] = writer_kitty_ent_617;
          reader_kitty_ent_617.confidential = true;
          writer_kitty_ent_617.confidential = true;
          obj415.mutable = true;
          sourceObject = obj415;
          lineNumber = 226
          onSelf = true;
          var call618 = callmethod(this, "init", [0]);
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
    func414.definitionLine = 199;
    func414.definitionModule = "kitty";
    var func619 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj620 = Grace_allocObject();
        obj620.definitionModule = "kitty";
        obj620.definitionLine = 199;
        var inho620 = inheritingObject;
        while (inho620.superobj) inho620 = inho620.superobj;
        inho620.superobj = obj620;
        obj620.data = inheritingObject.data;
        obj620.outer = this;
        var reader_kitty_outer_621 = function() {
          return this.outer;
        }
        obj620.methods["outer"] = reader_kitty_outer_621;
        function obj_init_620() {
          var origSuperDepth = superDepth;
          superDepth = obj620;
          obj620.annotations = [];
          var func622 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              var if623 = var_done;
              lineNumber = 233
              onSelf = true;
              var call624 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call624)) {
                lineNumber = 235
                lineNumber = 234
                var bool625 = new GraceBoolean(false)
                return bool625
              }
              lineNumber = 238
              lineNumber = 215
              lineNumber = 237
              var call626 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call627 = callmethod(this, "document:=", [1], call626);
              lineNumber = 238
              lineNumber = 237
              lineNumber = 238
              var string628 = new GraceString("standard-canvas");
              onSelf = true;
              var call629 = callmethod(this, "document", [0]);
              var call630 = callmethod(call629,"getElementById", [1], string628);
              onSelf = true;
              var call631 = callmethod(this, "canvas:=", [1], call630);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call632 = callmethod(this, "canvas", [0]);
              var call633 = callmethod(call632,"width", [0]);
              onSelf = true;
              var call634 = callmethod(this, "canvasWidth:=", [1], call633);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call635 = callmethod(this, "canvas", [0]);
              var call636 = callmethod(call635,"height", [0]);
              onSelf = true;
              var call637 = callmethod(this, "canvasHeight:=", [1], call636);
              lineNumber = 255
              var block638 = Grace_allocObject();
              block638.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block638.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block638.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block638.methods["match"] = GraceBlock_match;
              block638.methods["prefix?"] = GraceBlock_lift;
              block638.receiver = this;
              block638.className = 'block<kitty:255>';
              block638.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 246
                lineNumber = 245
                onSelf = true;
                var call639 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call641 = callmethod(this, "canvas", [0]);
                var call642 = callmethod(call641,"offsetWidth", [0]);
                onSelf = true;
                var call644 = callmethod(this, "canvas", [0]);
                var call645 = callmethod(call644,"offsetLeft", [0]);
                var call647 = callmethod(var_ev,"clientX", [0]);
                var diff649 = callmethod(call647, "-", [1], call645);
                var quotient651 = callmethod(diff649, "/", [1], call642);
                var prod653 = callmethod(quotient651, "*", [1], call639);
                var var_x = prod653;
                lineNumber = 246;
                moduleName = "kitty";
                lineNumber = 245
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 250
                lineNumber = 246
                onSelf = true;
                var call654 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call656 = callmethod(this, "canvas", [0]);
                var call657 = callmethod(call656,"offsetHeight", [0]);
                onSelf = true;
                var call659 = callmethod(this, "canvas", [0]);
                var call660 = callmethod(call659,"offsetTop", [0]);
                var call662 = callmethod(var_ev,"clientY", [0]);
                var diff664 = callmethod(call662, "-", [1], call660);
                var quotient666 = callmethod(diff664, "/", [1], call657);
                var prod668 = callmethod(quotient666, "*", [1], call654);
                var var_y = prod668;
                lineNumber = 250;
                moduleName = "kitty";
                lineNumber = 246
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 254
                var if669 = var_done;
                lineNumber = 250
                var opresult672 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call675 = callmethod(this, "canvasWidth", [0]);
                var diff677 = callmethod(call675, "-", [1], new GraceNum(20));
                var opresult680 = callmethod(var_x, ">", [1], diff677);
                var opresult682 = callmethod(opresult680, "&&", [1], opresult672);
                if (Grace_isTrue(opresult682)) {
                  lineNumber = 251
                  var call683 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 252
                  onSelf = true;
                  var call684 = callmethod(this, "stop", [0]);
                  if669 = call684;
                }
                return if669;
              };
              var_mouseDownListener = block638;
              lineNumber = 255
              var string685 = new GraceString("mousedown");
              onSelf = true;
              var call686 = callmethod(this, "canvas", [0]);
              var call687 = callmethod(call686,"addEventListener", [2], string685, var_mouseDownListener);
              lineNumber = 265
              var block688 = Grace_allocObject();
              block688.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block688.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block688.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block688.methods["match"] = GraceBlock_match;
              block688.methods["prefix?"] = GraceBlock_lift;
              block688.receiver = this;
              block688.className = 'block<kitty:265>';
              block688.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 263
                var if689 = var_done;
                lineNumber = 260
                var call691 = callmethod(var_ev,"keyCode", [0]);
                var opresult693 = callmethod(call691, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult693)) {
                  lineNumber = 261
                  onSelf = true;
                  var call694 = callmethod(this, "stop", [0]);
                  if689 = call694;
                }
                lineNumber = 264
                lineNumber = 260
                lineNumber = 263
                var call695 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call696 = callmethod(this, "currentKeyDown:=", [1], call695);
                return call696;
              };
              var_keyDownListener = block688;
              lineNumber = 265
              var string697 = new GraceString("keydown");
              onSelf = true;
              var call698 = callmethod(this, "document", [0]);
              var call699 = callmethod(call698,"addEventListener", [2], string697, var_keyDownListener);
              lineNumber = 271
              var block700 = Grace_allocObject();
              block700.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block700.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block700.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block700.methods["match"] = GraceBlock_match;
              block700.methods["prefix?"] = GraceBlock_lift;
              block700.receiver = this;
              block700.className = 'block<kitty:271>';
              block700.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 270
                lineNumber = 263
                lineNumber = 270
                lineNumber = 269
                var call701 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call702 = callmethod(this, "currentKeyDown:=", [1], call701);
                return call702;
              };
              var_keyUpListener = block700;
              lineNumber = 271
              var string703 = new GraceString("keyup");
              onSelf = true;
              var call704 = callmethod(this, "document", [0]);
              var call705 = callmethod(call704,"addEventListener", [2], string703, var_keyUpListener);
              lineNumber = 273
              lineNumber = 263
              lineNumber = 273
              var string706 = new GraceString("canvas");
              var call707 = callmethod(var_dom,"document", [0]);
              var call708 = callmethod(call707,"createElement", [1], string706);
              onSelf = true;
              var call709 = callmethod(this, "backingCanvas:=", [1], call708);
              lineNumber = 275
              lineNumber = 273
              lineNumber = 274
              onSelf = true;
              var call710 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call711 = callmethod(this, "backingCanvas", [0]);
              var call712 = callmethod(call711,"height:=", [1], call710);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 275
              onSelf = true;
              var call713 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call714 = callmethod(this, "backingCanvas", [0]);
              var call715 = callmethod(call714,"width:=", [1], call713);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 276
              var string716 = new GraceString("2d");
              onSelf = true;
              var call717 = callmethod(this, "backingCanvas", [0]);
              var call718 = callmethod(call717,"getContext", [1], string716);
              onSelf = true;
              var call719 = callmethod(this, "backingContext:=", [1], call718);
              lineNumber = 277
              lineNumber = 273
              lineNumber = 277
              var string720 = new GraceString("2d");
              onSelf = true;
              var call721 = callmethod(this, "canvas", [0]);
              var call722 = callmethod(call721,"getContext", [1], string720);
              onSelf = true;
              var call723 = callmethod(this, "mctx:=", [1], call722);
              lineNumber = 280
              var string724 = new GraceString("doggo.jpg");
              onSelf = true;
              var call725 = callmethod(this, "setBackground", [1], string724);
              lineNumber = 292
              lineNumber = 273
              lineNumber = 286
              var bool726 = new GraceBoolean(true)
              onSelf = true;
              var call727 = callmethod(this, "isInit:=", [1], bool726);
              return call727
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func622.paramCounts = [
            0,
          ];
          func622.variableArities = [
            false,
          ];
          obj620.methods["init"] = func622;
          func622.definitionLine = 229;
          func622.definitionModule = "kitty";
          var func728 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func728.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 273
              lineNumber = 297
              var bool729 = new GraceBoolean(true)
              onSelf = true;
              var call730 = callmethod(this, "isRunning:=", [1], bool729);
              lineNumber = 298
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
              block731.className = 'block<kitty:298>';
              block731.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call732 = callmethod(this, "isRunning", [0]);
                return call732;
              };
              lineNumber = 302
              var block733 = Grace_allocObject();
              block733.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block733.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block733.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block733.methods["match"] = GraceBlock_match;
              block733.methods["prefix?"] = GraceBlock_lift;
              block733.receiver = this;
              block733.className = 'block<kitty:302>';
              block733.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call734 = callmethod(this, "update", [0]);
                return call734;
              };
              lineNumber = 298
              var call735 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block731, new GraceNum(10), block733);
              return call735
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func728.paramCounts = [
            0,
          ];
          func728.variableArities = [
            false,
          ];
          obj620.methods["start"] = func728;
          func728.definitionLine = 295;
          func728.definitionModule = "kitty";
          var func736 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func736.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 273
              lineNumber = 310
              onSelf = true;
              var call737 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call738 = callmethod(this, "mctx", [0]);
              var call739 = callmethod(call738,"fillStyle:=", [1], call737);
              lineNumber = 311
              onSelf = true;
              var call740 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call741 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call742 = callmethod(this, "mctx", [0]);
              var call743 = callmethod(call742,"fillRect", [4], new GraceNum(0), new GraceNum(0), call740, call741);
              lineNumber = 312
              onSelf = true;
              var call744 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call745 = callmethod(this, "mctx", [0]);
              var call746 = callmethod(call745,"drawImage", [3], call744, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call747 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call749 = callmethod(this, "canvasWidth", [0]);
              var quotient751 = callmethod(call749, "/", [1], new GraceNum(2));
              onSelf = true;
              var call753 = callmethod(this, "canvasHeight", [0]);
              var quotient755 = callmethod(call753, "/", [1], new GraceNum(2));
              onSelf = true;
              var call756 = callmethod(this, "background", [0]);
              var call757 = callmethod(call756,"draw", [4], call747, quotient751, quotient755, new GraceNum(0));
              lineNumber = 316
              onSelf = true;
              var call758 = callmethod(this, "entities", [0]);
              lineNumber = 322
              var block759 = Grace_allocObject();
              block759.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block759.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block759.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block759.methods["match"] = GraceBlock_match;
              block759.methods["prefix?"] = GraceBlock_lift;
              block759.receiver = this;
              block759.className = 'block<kitty:322>';
              block759.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 317
                var call760 = callmethod(var_entity,"tick", [0]);
                lineNumber = 318
                onSelf = true;
                var call761 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call763 = callmethod(this, "canvasWidth", [0]);
                var quotient765 = callmethod(call763, "/", [1], new GraceNum(2));
                onSelf = true;
                var call767 = callmethod(this, "canvasHeight", [0]);
                var quotient769 = callmethod(call767, "/", [1], new GraceNum(2));
                var call770 = callmethod(var_entity,"draw", [3], call761, quotient765, quotient769);
                return call770;
              };
              var call771 = callmethod(Grace_prelude,"for()do", [1, 1], call758, block759);
              return call771
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
          obj620.methods["update"] = func736;
          func736.definitionLine = 305;
          func736.definitionModule = "kitty";
          var func772 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func772.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              var string773 = new GraceString("WORLD STOPPING...");
              var call774 = Grace_print(string773);
              lineNumber = 327
              lineNumber = 317
              lineNumber = 326
              var bool775 = new GraceBoolean(false)
              onSelf = true;
              var call776 = callmethod(this, "isRunning:=", [1], bool775);
              lineNumber = 327
              var string777 = new GraceString("mousedown");
              onSelf = true;
              var call778 = callmethod(this, "canvas", [0]);
              var call779 = callmethod(call778,"removeEventListener", [2], string777, var_mouseDownListener);
              lineNumber = 328
              var string780 = new GraceString("keydown");
              onSelf = true;
              var call781 = callmethod(this, "document", [0]);
              var call782 = callmethod(call781,"removeEventListener", [2], string780, var_keyDownListener);
              lineNumber = 329
              var string783 = new GraceString("keyup");
              onSelf = true;
              var call784 = callmethod(this, "document", [0]);
              var call785 = callmethod(call784,"removeEventListener", [2], string783, var_keyUpListener);
              return call785
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func772.paramCounts = [
            0,
          ];
          func772.variableArities = [
            false,
          ];
          obj620.methods["stop"] = func772;
          func772.definitionLine = 324;
          func772.definitionModule = "kitty";
          var func786 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func786.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 334
              lineNumber = 333
              onSelf = true;
              var call787 = callmethod(this, "currentKeyDown", [0]);
              var opresult790 = callmethod(var_key, "==", [1], call787);
              return opresult790
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func786.paramCounts = [
            1,
          ];
          func786.variableArities = [
            false,
          ];
          obj620.methods["isKeyDown"] = func786;
          func786.definitionLine = 332;
          func786.definitionModule = "kitty";
          var func791 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func791.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 337
              lineNumber = 317
              lineNumber = 337
              onSelf = true;
              var call792 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call793 = callmethod(this, "canvasHeight", [0]);
              var call794 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call795 = callmethod(call794, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call796 = callmethod(call795, "Image()width()height", [1, 1, 1], var_url, call792, call793);
              onSelf = true;
              var call797 = callmethod(this, "background:=", [1], call796);
              return call797
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func791.paramCounts = [
            1,
          ];
          func791.variableArities = [
            false,
          ];
          obj620.methods["setBackground"] = func791;
          func791.definitionLine = 336;
          func791.definitionModule = "kitty";
          var func798 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func798.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 341
              onSelf = true;
              var call799 = callmethod(this, "entities", [0]);
              var call800 = callmethod(call799,"push", [1], var_e);
              return call800
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func798.paramTypes = [];
          func798.paramTypes.push([]);
          func798.paramCounts = [
            1,
          ];
          func798.variableArities = [
            false,
          ];
          obj620.methods["addEntity"] = func798;
          func798.definitionLine = 340;
          func798.definitionModule = "kitty";
          var func801 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func801.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 346
              lineNumber = 345
              onSelf = true;
              var call802 = callmethod(this, "mctx", [0]);
              return call802
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func801.paramCounts = [
            0,
          ];
          func801.variableArities = [
            false,
          ];
          obj620.methods["getContext"] = func801;
          func801.definitionLine = 344;
          func801.definitionModule = "kitty";
          sourceObject = obj620;
          obj620.data["background"] = undefined;
          var reader_kitty_background_803 = function() {
            return this.data["background"];
          }
          obj620.methods["background"] = reader_kitty_background_803;
          obj620.data["background"] = undefined;
          var writer_kitty_background_803 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj620.methods["background:="] = writer_kitty_background_803;
          reader_kitty_background_803.confidential = true;
          writer_kitty_background_803.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 204
          var string804 = new GraceString("black");
          obj620.data["backgroundColour"] = string804;
          var reader_kitty_backgroundColour_805 = function() {
            return this.data["backgroundColour"];
          }
          obj620.methods["backgroundColour"] = reader_kitty_backgroundColour_805;
          obj620.data["backgroundColour"] = string804;
          var writer_kitty_backgroundColour_805 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj620.methods["backgroundColour:="] = writer_kitty_backgroundColour_805;
          reader_kitty_backgroundColour_805.confidential = true;
          writer_kitty_backgroundColour_805.confidential = true;
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string804)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["document"] = undefined;
          var reader_kitty_document_806 = function() {
            return this.data["document"];
          }
          obj620.methods["document"] = reader_kitty_document_806;
          obj620.data["document"] = undefined;
          var writer_kitty_document_806 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj620.methods["document:="] = writer_kitty_document_806;
          reader_kitty_document_806.confidential = true;
          writer_kitty_document_806.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_807 = function() {
            return this.data["backingCanvas"];
          }
          obj620.methods["backingCanvas"] = reader_kitty_backingCanvas_807;
          obj620.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_807 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj620.methods["backingCanvas:="] = writer_kitty_backingCanvas_807;
          reader_kitty_backingCanvas_807.confidential = true;
          writer_kitty_backingCanvas_807.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["backingContext"] = undefined;
          var reader_kitty_backingContext_808 = function() {
            return this.data["backingContext"];
          }
          obj620.methods["backingContext"] = reader_kitty_backingContext_808;
          obj620.data["backingContext"] = undefined;
          var writer_kitty_backingContext_808 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj620.methods["backingContext:="] = writer_kitty_backingContext_808;
          reader_kitty_backingContext_808.confidential = true;
          writer_kitty_backingContext_808.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["canvas"] = undefined;
          var reader_kitty_canvas_809 = function() {
            return this.data["canvas"];
          }
          obj620.methods["canvas"] = reader_kitty_canvas_809;
          obj620.data["canvas"] = undefined;
          var writer_kitty_canvas_809 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj620.methods["canvas:="] = writer_kitty_canvas_809;
          reader_kitty_canvas_809.confidential = true;
          writer_kitty_canvas_809.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_810 = function() {
            return this.data["canvasWidth"];
          }
          obj620.methods["canvasWidth"] = reader_kitty_canvasWidth_810;
          obj620.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_810 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj620.methods["canvasWidth:="] = writer_kitty_canvasWidth_810;
          reader_kitty_canvasWidth_810.confidential = true;
          writer_kitty_canvasWidth_810.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_811 = function() {
            return this.data["canvasHeight"];
          }
          obj620.methods["canvasHeight"] = reader_kitty_canvasHeight_811;
          obj620.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_811 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj620.methods["canvasHeight:="] = writer_kitty_canvasHeight_811;
          reader_kitty_canvasHeight_811.confidential = true;
          writer_kitty_canvasHeight_811.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 215
          var call812 = callmethod(var_collections,"list", [0]);
          var call813 = callmethod(call812,"new", [0]);
          obj620.data["entities"] = call813;
          var reader_kitty_entities_814 = function() {
            return this.data["entities"];
          }
          obj620.methods["entities"] = reader_kitty_entities_814;
          obj620.data["entities"] = call813;
          var writer_kitty_entities_814 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj620.methods["entities:="] = writer_kitty_entities_814;
          reader_kitty_entities_814.confidential = true;
          writer_kitty_entities_814.confidential = true;
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call813)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 217
          var bool815 = new GraceBoolean(false)
          obj620.data["isInit"] = bool815;
          var reader_kitty_isInit_816 = function() {
            return this.data["isInit"];
          }
          obj620.methods["isInit"] = reader_kitty_isInit_816;
          obj620.data["isInit"] = bool815;
          var writer_kitty_isInit_816 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj620.methods["isInit:="] = writer_kitty_isInit_816;
          reader_kitty_isInit_816.confidential = true;
          writer_kitty_isInit_816.confidential = true;
          lineNumber = 218;
          moduleName = "kitty";
          lineNumber = 217
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool815)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 218
          var bool817 = new GraceBoolean(false)
          obj620.data["isRunning"] = bool817;
          var reader_kitty_isRunning_818 = function() {
            return this.data["isRunning"];
          }
          obj620.methods["isRunning"] = reader_kitty_isRunning_818;
          obj620.data["isRunning"] = bool817;
          var writer_kitty_isRunning_818 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj620.methods["isRunning:="] = writer_kitty_isRunning_818;
          reader_kitty_isRunning_818.confidential = true;
          writer_kitty_isRunning_818.confidential = true;
          lineNumber = 220;
          moduleName = "kitty";
          lineNumber = 218
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool817)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["mctx"] = undefined;
          var reader_kitty_mctx_819 = function() {
            return this.data["mctx"];
          }
          obj620.methods["mctx"] = reader_kitty_mctx_819;
          obj620.data["mctx"] = undefined;
          var writer_kitty_mctx_819 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj620.methods["mctx:="] = writer_kitty_mctx_819;
          reader_kitty_mctx_819.confidential = true;
          writer_kitty_mctx_819.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 224
          lineNumber = 222
          var call820 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj620.data["currentKeyDown"] = call820;
          var reader_kitty_currentKeyDown_821 = function() {
            return this.data["currentKeyDown"];
          }
          obj620.methods["currentKeyDown"] = reader_kitty_currentKeyDown_821;
          obj620.data["currentKeyDown"] = call820;
          var writer_kitty_currentKeyDown_821 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj620.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_821;
          reader_kitty_currentKeyDown_821.confidential = true;
          writer_kitty_currentKeyDown_821.confidential = true;
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call820)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj620.mutable = true;
          sourceObject = obj620;
          obj620.data["ent"] = undefined;
          var reader_kitty_ent_822 = function() {
            return this.data["ent"];
          }
          obj620.methods["ent"] = reader_kitty_ent_822;
          obj620.data["ent"] = undefined;
          var writer_kitty_ent_822 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj620.methods["ent:="] = writer_kitty_ent_822;
          reader_kitty_ent_822.confidential = true;
          writer_kitty_ent_822.confidential = true;
          obj620.mutable = true;
          sourceObject = obj620;
          lineNumber = 226
          onSelf = true;
          var call823 = callmethod(this, "init", [0]);
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          sourceObject = obj620;
          superDepth = origSuperDepth;
        }
        obj_init_620.apply(inheritingObject, []);
        return obj620
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj412.methods["new()object"] = func619;
    var func824 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 199
        var string825 = new GraceString("class KittyWorld");
        return string825
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func824.paramCounts = [
    ];
    func824.variableArities = [
    ];
    obj412.methods["asDebugString"] = func824;
    func824.definitionLine = 199;
    func824.definitionModule = "kitty";
    sourceObject = obj412;
    sourceObject = obj412;
    superDepth = origSuperDepth;
  }
  obj_init_412.apply(obj412, []);
  var var_KittyWorld = obj412;
  lineNumber = 350
  lineNumber = 359
  lineNumber = 374
  lineNumber = 378
  lineNumber = 383
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "classes:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:World:\n isKeyDown\n document:=\n canvasWidth\n document\n update\n getContext\n backgroundColour:=\n start\n canvas:=\n isRunning:=\n background:=\n mctx\n isRunning\n ent:=\n currentKeyDown\n ent\n setBackground\n isInit\n canvasWidth:=\n backingContext:=\n entities:=\n mctx:=\n backingCanvas:=\n entities\n backingContext\n backingCanvas\n canvasHeight:=\n init\n canvasHeight\n stop\n currentKeyDown:=\n canvas\n background\n backgroundColour\n addEntity\n isInit:=\nfresh-methods:\n Image()width()height\n Entity()x()y\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n draw\n setImage\n rotation\n tag:=\n setLocation\n getRotation\n move\n tag\n strafe\n createImage\n setAction\n action:=\n getX\n getY\n image:=\n action\n awake\n posX:=\n posY:=\n image\n posY\n rotation:=\n turn\n posX\n tick\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n KittyWorld\n World\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\n width\nfresh:Entity()x()y:\n draw\n setImage\n rotation\n tag:=\n strafe\n getRotation\n move\n tag\n setLocation\n createImage\n posX\n action:=\n getX\n getY\n image:=\n action\n turn\n posX:=\n posY:=\n image\n tick\n rotation:=\n awake\n setAction\n posY\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\n width\nmethods-of:KittyWorld.new:\n isRunning\n document:=\n mctx\n document\n update\n getContext\n backingContext:=\n start\n canvas:=\n isRunning:=\n background:=\n canvasWidth\n isKeyDown\n ent:=\n currentKeyDown\n ent\n setBackground\n isInit\n canvasWidth:=\n backgroundColour:=\n entities:=\n mctx:=\n backingCanvas:=\n entities\n backgroundColour\n backingCanvas\n canvasHeight:=\n init\n canvasHeight\n addEntity\n currentKeyDown:=\n canvas\n background\n backingContext\n stop\n isInit:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\n";
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
    "var newborn",
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
    "        newborn := self",
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
    "// XXX: Gross but neccessary",
    "// ======== KITTY METHODS ========== //",
    "method update(action') {",
    "    newborn.setAction(action')",
    "}",
    "",
    "// method move(distance') {",
    "//     newborn.move(distance')",
    "// }",
    "",
    "// method strafe(distance') {",
    "//     newborn.strafe(distance')",
    "// }",
    "",
    "// method turn(angle') {",
    "//     newborn.turn(angle')",
    "// }",
    "",
    "// // method setLocation(x, y) {",
    "// //     newborn.setLocation(x, y)",
    "// // }",
    "",
    "// method setImage(image': KittyImage) {",
    "//     newborn.setImage(image')",
    "// }",
    "",
    "// method createImage(url') {",
    "//     newborn.createImage(url')",
    "// }",
    "",
    "// method setX(x') {",
    "//     newborn.setLocation(x', newborn.getY)",
    "// }",
    "",
    "// method setY(y') {",
    "//     newborn.setLocation(newborn.getX, y')",
    "// }",
    "",
    "// method getX {",
    "//     return newborn.getX",
    "// }",
    "",
    "// method getY {",
    "//     return newborn.getY",
    "// }",
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
