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
  lineNumber = 169
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
    var var_actions__39__ = arguments[curarg];
    curarg++;
    if (argcv[3] !=  func8.paramCounts[3])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 4 (actions)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 170
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 170;
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
        lineNumber = 171
        var call11 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj9.superobj = call11;
        obj9._value = call11._value;
        sourceObject = obj9;
        lineNumber = 172
        var call12 = callmethod(var_actions__39__,"apply", [0]);
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
    1,
  ];
  func8.variableArities = [
    false,
    false,
    false,
    false,
  ];
  this.methods["Entity()x()y()actions"] = func8;
  func8.definitionLine = 169;
  func8.definitionModule = "kitty";
  var func13 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var var_actions__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj14 = Grace_allocObject();
      obj14.definitionModule = "kitty";
      obj14.definitionLine = 170;
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
        lineNumber = 171
        var call16 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj14.superobj = call16;
        obj14._value = call16._value;
        sourceObject = obj14;
        lineNumber = 172
        var call17 = callmethod(var_actions__39__,"apply", [0]);
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
  this.methods["Entity()x()y()actions()object"] = func13;
  lineNumber = 176
  var func18 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 177
      var call19 = callmethod(var_newborn,"update", [1], var_action__39__);
      return call19
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
  this.methods["update"] = func18;
  func18.definitionLine = 176;
  func18.definitionModule = "kitty";
  lineNumber = 180
  var func20 = function(argcv) {
    var curarg = 1;
    var var_distance__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func20.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 181
      var call21 = callmethod(var_newborn,"move", [1], var_distance__39__);
      return call21
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func20.paramCounts = [
    1,
  ];
  func20.variableArities = [
    false,
  ];
  this.methods["move"] = func20;
  func20.definitionLine = 180;
  func20.definitionModule = "kitty";
  lineNumber = 336
  var func22 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 337
      var obj23 = Grace_allocObject();
      obj23.definitionModule = "kitty";
      obj23.definitionLine = 337;
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
        lineNumber = 338
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
  func22.definitionLine = 336;
  func22.definitionModule = "kitty";
  var func26 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 337;
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
  lineNumber = 345
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 347
      var string31 = new GraceString("CHECKING...");
      var call32 = Grace_print(string31);
      lineNumber = 354
      var if33 = var_done;
      lineNumber = 349
      var call34 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call34)) {
        lineNumber = 350
        var string35 = new GraceString("NO WORLD!!");
        var call36 = Grace_print(string35);
        lineNumber = 352
        return var_done
      }
      lineNumber = 354
      var string37 = new GraceString("STARTING...");
      var call38 = Grace_print(string37);
      lineNumber = 357
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
  func30.definitionLine = 345;
  func30.definitionModule = "kitty";
  lineNumber = 360
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
      lineNumber = 362
      lineNumber = 361
      var_m__95__world = var_world__39__;
      lineNumber = 363
      lineNumber = 362
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
  func40.definitionLine = 360;
  func40.definitionModule = "kitty";
  lineNumber = 365
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
      lineNumber = 366
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
  func42.definitionLine = 365;
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
  lineNumber = 357
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
  func45.definitionLine = 357;
  func45.definitionModule = "kitty";
  lineNumber = 357
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
  func46.definitionLine = 357;
  func46.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool47 = new GraceBoolean(false)
  var var_worldSet = bool47;
  lineNumber = 357
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
  func48.definitionLine = 357;
  func48.definitionModule = "kitty";
  lineNumber = 357
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
  func49.definitionLine = 357;
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
  lineNumber = 357
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
  func50.definitionLine = 357;
  func50.definitionModule = "kitty";
  lineNumber = 357
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
  func51.definitionLine = 357;
  func51.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 357
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
  func52.definitionLine = 357;
  func52.definitionModule = "kitty";
  lineNumber = 357
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
  func53.definitionLine = 357;
  func53.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 357
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
  func54.definitionLine = 357;
  func54.definitionModule = "kitty";
  lineNumber = 357
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
  func55.definitionLine = 357;
  func55.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
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
  var func59 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    0,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["newborn"] = func59;
  func59.definitionLine = 17;
  func59.definitionModule = "kitty";
  lineNumber = 17
  var func60 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func60.paramCounts[0])
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
  func60.paramCounts = [
    1,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["newborn:="] = func60;
  func60.definitionLine = 17;
  func60.definitionModule = "kitty";
  lineNumber = 25
  var func61 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func61.paramCounts[0])
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
  func61.paramCounts = [
    0,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func61;
  func61.definitionLine = 25;
  func61.definitionModule = "kitty";
  var obj62 = Grace_allocObject();
  obj62.definitionModule = "kitty";
  obj62.definitionLine = 25;
  obj62.outer = this;
  var reader_kitty_outer_63 = function() {
    return this.outer;
  }
  obj62.methods["outer"] = reader_kitty_outer_63;
  function obj_init_62() {
    var origSuperDepth = superDepth;
    superDepth = obj62;
    obj62.annotations = [];
    var func64 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func64.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj65 = Grace_allocObject();
        obj65.definitionModule = "kitty";
        obj65.definitionLine = 25;
        obj65.outer = this;
        var reader_kitty_outer_66 = function() {
          return this.outer;
        }
        obj65.methods["outer"] = reader_kitty_outer_66;
        function obj_init_65() {
          var origSuperDepth = superDepth;
          superDepth = obj65;
          obj65.annotations = [];
          var func67 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func67.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call68 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call69 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod73 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient75 = callmethod(prod73, "/", [1], new GraceNum(180));
              var call76 = callmethod(var_ctx,"rotate", [1], quotient75);
              lineNumber = 44
              onSelf = true;
              var call77 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block78 = Grace_allocObject();
              block78.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block78.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block78.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block78.methods["match"] = GraceBlock_match;
              block78.methods["prefix?"] = GraceBlock_lift;
              block78.receiver = this;
              block78.className = 'block<kitty:47>';
              block78.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call80 = callmethod(this, "width", [0]);
                var call81 = callmethod(call80,"prefix-", [0]);
                var quotient83 = callmethod(call81, "/", [1], new GraceNum(2));
                onSelf = true;
                var call85 = callmethod(this, "height", [0]);
                var call86 = callmethod(call85,"prefix-", [0]);
                var quotient88 = callmethod(call86, "/", [1], new GraceNum(2));
                onSelf = true;
                var call89 = callmethod(this, "width", [0]);
                onSelf = true;
                var call90 = callmethod(this, "height", [0]);
                var call91 = callmethod(var_ctx,"drawImage", [5], var_element, quotient83, quotient88, call89, call90);
                return call91;
              };
              var call92 = callmethod(Grace_prelude,"for()do", [1, 1], call77, block78);
              lineNumber = 47
              var call93 = callmethod(var_ctx,"restore", [0]);
              return call93
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func67.paramCounts = [
            4,
          ];
          func67.variableArities = [
            false,
          ];
          obj65.methods["draw"] = func67;
          func67.definitionLine = 38;
          func67.definitionModule = "kitty";
          var func94 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func94.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call95 = callmethod(this, "imgTag", [0]);
              return call95
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func94.paramCounts = [
            0,
          ];
          func94.variableArities = [
            false,
          ];
          obj65.methods["getTag"] = func94;
          func94.definitionLine = 51;
          func94.definitionModule = "kitty";
          var func96 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func96.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call97 = callmethod(this, "elements", [0]);
              var call98 = callmethod(call97,"push", [1], var_imgTag__39__);
              return call98
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func96.paramCounts = [
            1,
          ];
          func96.variableArities = [
            false,
          ];
          obj65.methods["drawImage"] = func96;
          func96.definitionLine = 55;
          func96.definitionModule = "kitty";
          sourceObject = obj65;
          lineNumber = 29
          var string99 = new GraceString("img");
          var call100 = callmethod(var_dom,"document", [0]);
          var call101 = callmethod(call100,"createElement", [1], string99);
          obj65.data["imgTag"] = call101;
          var reader_kitty_imgTag_102 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_102.def = true;
          reader_kitty_imgTag_102.confidential = true;
          obj65.methods["imgTag"] = reader_kitty_imgTag_102;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call101)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj65;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call103 = callmethod(this, "imgTag", [0]);
          var call104 = callmethod(call103,"src:=", [1], var_url__39__);
          sourceObject = obj65;
          lineNumber = 32
          var call105 = callmethod(var_collections,"list", [0]);
          var call106 = callmethod(call105,"new", [0]);
          obj65.data["elements"] = call106;
          var reader_kitty_elements_107 = function() {
            return this.data["elements"];
          }
          obj65.methods["elements"] = reader_kitty_elements_107;
          obj65.data["elements"] = call106;
          var writer_kitty_elements_107 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj65.methods["elements:="] = writer_kitty_elements_107;
          reader_kitty_elements_107.confidential = true;
          writer_kitty_elements_107.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call106)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj65.mutable = true;
          sourceObject = obj65;
          lineNumber = 33
          onSelf = true;
          var call108 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call109 = callmethod(this, "elements", [0]);
          var call110 = callmethod(call109,"push", [1], call108);
          sourceObject = obj65;
          lineNumber = 35
          obj65.data["height"] = var_height__39__;
          var reader_kitty_height_111 = function() {
            return this.data["height"];
          }
          obj65.methods["height"] = reader_kitty_height_111;
          obj65.data["height"] = var_height__39__;
          var writer_kitty_height_111 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj65.methods["height:="] = writer_kitty_height_111;
          reader_kitty_height_111.confidential = true;
          writer_kitty_height_111.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj65.mutable = true;
          sourceObject = obj65;
          lineNumber = 36
          obj65.data["width"] = var_width__39__;
          var reader_kitty_width_112 = function() {
            return this.data["width"];
          }
          obj65.methods["width"] = reader_kitty_width_112;
          obj65.data["width"] = var_width__39__;
          var writer_kitty_width_112 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj65.methods["width:="] = writer_kitty_width_112;
          reader_kitty_width_112.confidential = true;
          writer_kitty_width_112.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj65.mutable = true;
          sourceObject = obj65;
          sourceObject = obj65;
          sourceObject = obj65;
          superDepth = origSuperDepth;
        }
        obj_init_65.apply(obj65, []);
        return obj65
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func64.paramCounts = [
      3,
    ];
    func64.variableArities = [
      false,
    ];
    obj62.methods["new"] = func64;
    func64.definitionLine = 25;
    func64.definitionModule = "kitty";
    var func113 = function(argcv) {
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
        var obj114 = Grace_allocObject();
        obj114.definitionModule = "kitty";
        obj114.definitionLine = 25;
        var inho114 = inheritingObject;
        while (inho114.superobj) inho114 = inho114.superobj;
        inho114.superobj = obj114;
        obj114.data = inheritingObject.data;
        obj114.outer = this;
        var reader_kitty_outer_115 = function() {
          return this.outer;
        }
        obj114.methods["outer"] = reader_kitty_outer_115;
        function obj_init_114() {
          var origSuperDepth = superDepth;
          superDepth = obj114;
          obj114.annotations = [];
          var func116 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func116.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call117 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call118 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod122 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient124 = callmethod(prod122, "/", [1], new GraceNum(180));
              var call125 = callmethod(var_ctx,"rotate", [1], quotient124);
              lineNumber = 44
              onSelf = true;
              var call126 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block127 = Grace_allocObject();
              block127.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block127.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block127.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block127.methods["match"] = GraceBlock_match;
              block127.methods["prefix?"] = GraceBlock_lift;
              block127.receiver = this;
              block127.className = 'block<kitty:47>';
              block127.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call129 = callmethod(this, "width", [0]);
                var call130 = callmethod(call129,"prefix-", [0]);
                var quotient132 = callmethod(call130, "/", [1], new GraceNum(2));
                onSelf = true;
                var call134 = callmethod(this, "height", [0]);
                var call135 = callmethod(call134,"prefix-", [0]);
                var quotient137 = callmethod(call135, "/", [1], new GraceNum(2));
                onSelf = true;
                var call138 = callmethod(this, "width", [0]);
                onSelf = true;
                var call139 = callmethod(this, "height", [0]);
                var call140 = callmethod(var_ctx,"drawImage", [5], var_element, quotient132, quotient137, call138, call139);
                return call140;
              };
              var call141 = callmethod(Grace_prelude,"for()do", [1, 1], call126, block127);
              lineNumber = 47
              var call142 = callmethod(var_ctx,"restore", [0]);
              return call142
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func116.paramCounts = [
            4,
          ];
          func116.variableArities = [
            false,
          ];
          obj114.methods["draw"] = func116;
          func116.definitionLine = 38;
          func116.definitionModule = "kitty";
          var func143 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func143.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call144 = callmethod(this, "imgTag", [0]);
              return call144
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func143.paramCounts = [
            0,
          ];
          func143.variableArities = [
            false,
          ];
          obj114.methods["getTag"] = func143;
          func143.definitionLine = 51;
          func143.definitionModule = "kitty";
          var func145 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func145.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call146 = callmethod(this, "elements", [0]);
              var call147 = callmethod(call146,"push", [1], var_imgTag__39__);
              return call147
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func145.paramCounts = [
            1,
          ];
          func145.variableArities = [
            false,
          ];
          obj114.methods["drawImage"] = func145;
          func145.definitionLine = 55;
          func145.definitionModule = "kitty";
          sourceObject = obj114;
          lineNumber = 29
          var string148 = new GraceString("img");
          var call149 = callmethod(var_dom,"document", [0]);
          var call150 = callmethod(call149,"createElement", [1], string148);
          obj114.data["imgTag"] = call150;
          var reader_kitty_imgTag_151 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_151.def = true;
          reader_kitty_imgTag_151.confidential = true;
          obj114.methods["imgTag"] = reader_kitty_imgTag_151;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call150)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj114;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call152 = callmethod(this, "imgTag", [0]);
          var call153 = callmethod(call152,"src:=", [1], var_url__39__);
          sourceObject = obj114;
          lineNumber = 32
          var call154 = callmethod(var_collections,"list", [0]);
          var call155 = callmethod(call154,"new", [0]);
          obj114.data["elements"] = call155;
          var reader_kitty_elements_156 = function() {
            return this.data["elements"];
          }
          obj114.methods["elements"] = reader_kitty_elements_156;
          obj114.data["elements"] = call155;
          var writer_kitty_elements_156 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj114.methods["elements:="] = writer_kitty_elements_156;
          reader_kitty_elements_156.confidential = true;
          writer_kitty_elements_156.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call155)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj114.mutable = true;
          sourceObject = obj114;
          lineNumber = 33
          onSelf = true;
          var call157 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call158 = callmethod(this, "elements", [0]);
          var call159 = callmethod(call158,"push", [1], call157);
          sourceObject = obj114;
          lineNumber = 35
          obj114.data["height"] = var_height__39__;
          var reader_kitty_height_160 = function() {
            return this.data["height"];
          }
          obj114.methods["height"] = reader_kitty_height_160;
          obj114.data["height"] = var_height__39__;
          var writer_kitty_height_160 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj114.methods["height:="] = writer_kitty_height_160;
          reader_kitty_height_160.confidential = true;
          writer_kitty_height_160.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj114.mutable = true;
          sourceObject = obj114;
          lineNumber = 36
          obj114.data["width"] = var_width__39__;
          var reader_kitty_width_161 = function() {
            return this.data["width"];
          }
          obj114.methods["width"] = reader_kitty_width_161;
          obj114.data["width"] = var_width__39__;
          var writer_kitty_width_161 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj114.methods["width:="] = writer_kitty_width_161;
          reader_kitty_width_161.confidential = true;
          writer_kitty_width_161.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj114.mutable = true;
          sourceObject = obj114;
          sourceObject = obj114;
          sourceObject = obj114;
          superDepth = origSuperDepth;
        }
        obj_init_114.apply(inheritingObject, []);
        return obj114
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj62.methods["new()object"] = func113;
    var func162 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string163 = new GraceString("class KittyImage");
        return string163
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func162.paramCounts = [
    ];
    func162.variableArities = [
    ];
    obj62.methods["asDebugString"] = func162;
    func162.definitionLine = 25;
    func162.definitionModule = "kitty";
    sourceObject = obj62;
    sourceObject = obj62;
    superDepth = origSuperDepth;
  }
  obj_init_62.apply(obj62, []);
  var var_KittyImage = obj62;
  lineNumber = 62
  lineNumber = 69
  var func164 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func164.paramCounts[0])
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
  func164.paramCounts = [
    0,
  ];
  func164.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func164;
  func164.definitionLine = 69;
  func164.definitionModule = "kitty";
  var obj165 = Grace_allocObject();
  obj165.definitionModule = "kitty";
  obj165.definitionLine = 69;
  obj165.outer = this;
  var reader_kitty_outer_166 = function() {
    return this.outer;
  }
  obj165.methods["outer"] = reader_kitty_outer_166;
  function obj_init_165() {
    var origSuperDepth = superDepth;
    superDepth = obj165;
    obj165.annotations = [];
    var func167 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func167.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj168 = Grace_allocObject();
        obj168.definitionModule = "kitty";
        obj168.definitionLine = 69;
        obj168.outer = this;
        var reader_kitty_outer_169 = function() {
          return this.outer;
        }
        obj168.methods["outer"] = reader_kitty_outer_169;
        function obj_init_168() {
          var origSuperDepth = superDepth;
          superDepth = obj168;
          obj168.annotations = [];
          var func170 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func170.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              var string171 = new GraceString("realyee.png");
              onSelf = true;
              var call172 = callmethod(this, "createImage", [1], string171);
              lineNumber = 93
              lineNumber = 92
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
          func170.paramCounts = [
            0,
          ];
          func170.variableArities = [
            false,
          ];
          obj168.methods["awake"] = func170;
          func170.definitionLine = 89;
          func170.definitionModule = "kitty";
          var func173 = function(argcv) {
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func173.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              var call174 = callmethod(var_block,"apply", [0]);
              return call174
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func173.paramCounts = [
            1,
          ];
          func173.variableArities = [
            false,
          ];
          obj168.methods["start"] = func173;
          func173.definitionLine = 96;
          func173.definitionModule = "kitty";
          var func175 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func175.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              onSelf = true;
              var call176 = callmethod(this, "action", [0]);
              var call177 = callmethod(call176,"apply", [0]);
              return call177
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
          obj168.methods["tick"] = func175;
          func175.definitionLine = 104;
          func175.definitionModule = "kitty";
          var func178 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func178.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 105
              lineNumber = 109
              onSelf = true;
              var call179 = callmethod(this, "action:=", [1], var_action__39__);
              lineNumber = 110
              var string180 = new GraceString("GUMMON");
              var call181 = Grace_print(string180);
              return call181
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func178.paramCounts = [
            1,
          ];
          func178.variableArities = [
            false,
          ];
          obj168.methods["update"] = func178;
          func178.definitionLine = 108;
          func178.definitionModule = "kitty";
          var func182 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func182.paramCounts[0])
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
          func182.paramCounts = [
            0,
          ];
          func182.variableArities = [
            false,
          ];
          obj168.methods["onDestroy"] = func182;
          func182.definitionLine = 114;
          func182.definitionModule = "kitty";
          var func183 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              lineNumber = 105
              lineNumber = 119
              onSelf = true;
              var call186 = callmethod(this, "rotation", [0]);
              var prod188 = callmethod(call186, "*", [1], new GraceNum(3.14159));
              var quotient190 = callmethod(prod188, "/", [1], new GraceNum(180));
              var call191 = callmethod(var_math,"cos", [1], quotient190);
              var prod194 = callmethod(var_distance, "*", [1], call191);
              onSelf = true;
              var call196 = callmethod(this, "posX", [0]);
              var opresult198 = callmethod(call196, "+", [1], prod194);
              onSelf = true;
              var call199 = callmethod(this, "posX:=", [1], opresult198);
              lineNumber = 120
              lineNumber = 105
              lineNumber = 120
              onSelf = true;
              var call202 = callmethod(this, "rotation", [0]);
              var prod204 = callmethod(call202, "*", [1], new GraceNum(3.14159));
              var quotient206 = callmethod(prod204, "/", [1], new GraceNum(180));
              var call207 = callmethod(var_math,"sin", [1], quotient206);
              var prod210 = callmethod(var_distance, "*", [1], call207);
              onSelf = true;
              var call212 = callmethod(this, "posY", [0]);
              var opresult214 = callmethod(call212, "+", [1], prod210);
              onSelf = true;
              var call215 = callmethod(this, "posY:=", [1], opresult214);
              return call215
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func183.paramCounts = [
            1,
          ];
          func183.variableArities = [
            false,
          ];
          obj168.methods["move"] = func183;
          func183.definitionLine = 118;
          func183.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 105
              lineNumber = 124
              onSelf = true;
              var call219 = callmethod(this, "rotation", [0]);
              var opresult222 = callmethod(new GraceNum(90), "+", [1], call219);
              var prod224 = callmethod(opresult222, "*", [1], new GraceNum(3.14159));
              var quotient226 = callmethod(prod224, "/", [1], new GraceNum(180));
              var call227 = callmethod(var_math,"cos", [1], quotient226);
              var prod230 = callmethod(var_distance, "*", [1], call227);
              onSelf = true;
              var call232 = callmethod(this, "posX", [0]);
              var opresult234 = callmethod(call232, "+", [1], prod230);
              onSelf = true;
              var call235 = callmethod(this, "posX:=", [1], opresult234);
              lineNumber = 125
              lineNumber = 105
              lineNumber = 125
              onSelf = true;
              var call238 = callmethod(this, "rotation", [0]);
              var opresult241 = callmethod(new GraceNum(90), "+", [1], call238);
              var prod243 = callmethod(opresult241, "*", [1], new GraceNum(3.14159));
              var quotient245 = callmethod(prod243, "/", [1], new GraceNum(180));
              var call246 = callmethod(var_math,"sin", [1], quotient245);
              var prod249 = callmethod(var_distance, "*", [1], call246);
              onSelf = true;
              var call251 = callmethod(this, "posY", [0]);
              var opresult253 = callmethod(call251, "+", [1], prod249);
              onSelf = true;
              var call254 = callmethod(this, "posY:=", [1], opresult253);
              return call254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func216.paramCounts = [
            1,
          ];
          func216.variableArities = [
            false,
          ];
          obj168.methods["strafe"] = func216;
          func216.definitionLine = 123;
          func216.definitionModule = "kitty";
          var func255 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 105
              lineNumber = 130
              lineNumber = 129
              onSelf = true;
              var call257 = callmethod(this, "rotation", [0]);
              var opresult259 = callmethod(call257, "+", [1], var_angle);
              onSelf = true;
              var call260 = callmethod(this, "rotation:=", [1], opresult259);
              return call260
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func255.paramCounts = [
            1,
          ];
          func255.variableArities = [
            false,
          ];
          obj168.methods["turn"] = func255;
          func255.definitionLine = 128;
          func255.definitionModule = "kitty";
          var func261 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              var call262 = callmethod(var_ctx,"save", [0]);
              lineNumber = 134
              onSelf = true;
              var call263 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call264 = callmethod(this, "posY", [0]);
              var call265 = callmethod(var_ctx,"translate", [2], call263, call264);
              lineNumber = 135
              onSelf = true;
              var call266 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call267 = callmethod(this, "image", [0]);
              var call268 = callmethod(call267,"draw", [4], var_ctx, var_dx, var_dy, call266);
              lineNumber = 136
              var call269 = callmethod(var_ctx,"restore", [0]);
              return call269
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func261.paramCounts = [
            3,
          ];
          func261.variableArities = [
            false,
          ];
          obj168.methods["draw"] = func261;
          func261.definitionLine = 132;
          func261.definitionModule = "kitty";
          var func270 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 136
              lineNumber = 140
              var call271 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call272 = callmethod(call271, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call273 = callmethod(call272, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call274 = callmethod(this, "image:=", [1], call273);
              return call274
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
          obj168.methods["createImage"] = func270;
          func270.definitionLine = 139;
          func270.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 140
              lineNumber = 144
              onSelf = true;
              var call276 = callmethod(this, "image:=", [1], var_image__39__);
              return call276
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramTypes = [];
          func275.paramTypes.push([]);
          func275.paramCounts = [
            1,
          ];
          func275.variableArities = [
            false,
          ];
          obj168.methods["setImage"] = func275;
          func275.definitionLine = 143;
          func275.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 140
              lineNumber = 148
              onSelf = true;
              var call278 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func277.variableArities = [
            false,
          ];
          obj168.methods["setAction"] = func277;
          func277.definitionLine = 147;
          func277.definitionModule = "kitty";
          var func279 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 140
              lineNumber = 152
              onSelf = true;
              var call280 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 154
              lineNumber = 140
              lineNumber = 153
              onSelf = true;
              var call281 = callmethod(this, "posY:=", [1], var_y);
              return call281
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func279.paramCounts = [
            2,
          ];
          func279.variableArities = [
            false,
          ];
          obj168.methods["setLocation"] = func279;
          func279.definitionLine = 151;
          func279.definitionModule = "kitty";
          var func282 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              lineNumber = 157
              onSelf = true;
              var call283 = callmethod(this, "posX", [0]);
              return call283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func282.paramCounts = [
            0,
          ];
          func282.variableArities = [
            false,
          ];
          obj168.methods["getX"] = func282;
          func282.definitionLine = 156;
          func282.definitionModule = "kitty";
          var func284 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call285 = callmethod(this, "posY", [0]);
              return call285
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func284.paramCounts = [
            0,
          ];
          func284.variableArities = [
            false,
          ];
          obj168.methods["getY"] = func284;
          func284.definitionLine = 160;
          func284.definitionModule = "kitty";
          var func286 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              lineNumber = 165
              onSelf = true;
              var call287 = callmethod(this, "rotation", [0]);
              return call287
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            0,
          ];
          func286.variableArities = [
            false,
          ];
          obj168.methods["getRotation"] = func286;
          func286.definitionLine = 164;
          func286.definitionModule = "kitty";
          sourceObject = obj168;
          lineNumber = 73
          obj168.data["tag"] = var_tag__39__;
          var reader_kitty_tag_288 = function() {
            return this.data["tag"];
          }
          obj168.methods["tag"] = reader_kitty_tag_288;
          obj168.data["tag"] = var_tag__39__;
          var writer_kitty_tag_288 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj168.methods["tag:="] = writer_kitty_tag_288;
          reader_kitty_tag_288.confidential = true;
          writer_kitty_tag_288.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj168.mutable = true;
          sourceObject = obj168;
          lineNumber = 74
          obj168.data["posX"] = var_x__39__;
          var reader_kitty_posX_289 = function() {
            return this.data["posX"];
          }
          obj168.methods["posX"] = reader_kitty_posX_289;
          obj168.data["posX"] = var_x__39__;
          var writer_kitty_posX_289 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj168.methods["posX:="] = writer_kitty_posX_289;
          reader_kitty_posX_289.confidential = true;
          writer_kitty_posX_289.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj168.mutable = true;
          sourceObject = obj168;
          lineNumber = 75
          obj168.data["posY"] = var_y__39__;
          var reader_kitty_posY_290 = function() {
            return this.data["posY"];
          }
          obj168.methods["posY"] = reader_kitty_posY_290;
          obj168.data["posY"] = var_y__39__;
          var writer_kitty_posY_290 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj168.methods["posY:="] = writer_kitty_posY_290;
          reader_kitty_posY_290.confidential = true;
          writer_kitty_posY_290.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj168.mutable = true;
          sourceObject = obj168;
          lineNumber = 76
          obj168.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_291 = function() {
            return this.data["rotation"];
          }
          obj168.methods["rotation"] = reader_kitty_rotation_291;
          obj168.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_291 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj168.methods["rotation:="] = writer_kitty_rotation_291;
          reader_kitty_rotation_291.confidential = true;
          writer_kitty_rotation_291.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj168.mutable = true;
          sourceObject = obj168;
          lineNumber = 78
          var obj292 = Grace_allocObject();
          obj292.definitionModule = "kitty";
          obj292.definitionLine = 78;
          obj292.outer = this;
          var reader_kitty_outer_293 = function() {
            return this.outer;
          }
          obj292.methods["outer"] = reader_kitty_outer_293;
          function obj_init_292() {
            var origSuperDepth = superDepth;
            superDepth = obj292;
            obj292.annotations = [];
            var func294 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func294.paramCounts[0])
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
            func294.paramCounts = [
              0,
            ];
            func294.variableArities = [
              false,
            ];
            obj292.methods["update"] = func294;
            func294.definitionLine = 79;
            func294.definitionModule = "kitty";
            sourceObject = obj292;
            superDepth = origSuperDepth;
          }
          obj_init_292.apply(obj292, []);
          obj168.data["action"] = obj292;
          var reader_kitty_action_295 = function() {
            return this.data["action"];
          }
          obj168.methods["action"] = reader_kitty_action_295;
          obj168.data["action"] = obj292;
          var writer_kitty_action_295 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj168.methods["action:="] = writer_kitty_action_295;
          reader_kitty_action_295.confidential = true;
          writer_kitty_action_295.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj292)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj168.mutable = true;
          sourceObject = obj168;
          obj168.data["image"] = undefined;
          var reader_kitty_image_296 = function() {
            return this.data["image"];
          }
          obj168.methods["image"] = reader_kitty_image_296;
          obj168.data["image"] = undefined;
          var writer_kitty_image_296 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj168.methods["image:="] = writer_kitty_image_296;
          reader_kitty_image_296.confidential = true;
          writer_kitty_image_296.confidential = true;
          obj168.mutable = true;
          sourceObject = obj168;
          lineNumber = 86
          onSelf = true;
          var call297 = callmethod(this, "awake", [0]);
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          sourceObject = obj168;
          superDepth = origSuperDepth;
        }
        obj_init_168.apply(obj168, []);
        return obj168
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func167.paramCounts = [
      3,
    ];
    func167.variableArities = [
      false,
    ];
    obj165.methods["new"] = func167;
    func167.definitionLine = 69;
    func167.definitionModule = "kitty";
    var func298 = function(argcv) {
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
        var obj299 = Grace_allocObject();
        obj299.definitionModule = "kitty";
        obj299.definitionLine = 69;
        var inho299 = inheritingObject;
        while (inho299.superobj) inho299 = inho299.superobj;
        inho299.superobj = obj299;
        obj299.data = inheritingObject.data;
        obj299.outer = this;
        var reader_kitty_outer_300 = function() {
          return this.outer;
        }
        obj299.methods["outer"] = reader_kitty_outer_300;
        function obj_init_299() {
          var origSuperDepth = superDepth;
          superDepth = obj299;
          obj299.annotations = [];
          var func301 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              var string302 = new GraceString("realyee.png");
              onSelf = true;
              var call303 = callmethod(this, "createImage", [1], string302);
              lineNumber = 93
              lineNumber = 92
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
          func301.paramCounts = [
            0,
          ];
          func301.variableArities = [
            false,
          ];
          obj299.methods["awake"] = func301;
          func301.definitionLine = 89;
          func301.definitionModule = "kitty";
          var func304 = function(argcv) {
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              var call305 = callmethod(var_block,"apply", [0]);
              return call305
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func304.paramCounts = [
            1,
          ];
          func304.variableArities = [
            false,
          ];
          obj299.methods["start"] = func304;
          func304.definitionLine = 96;
          func304.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
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
          obj299.methods["tick"] = func306;
          func306.definitionLine = 104;
          func306.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 105
              lineNumber = 109
              onSelf = true;
              var call310 = callmethod(this, "action:=", [1], var_action__39__);
              lineNumber = 110
              var string311 = new GraceString("GUMMON");
              var call312 = Grace_print(string311);
              return call312
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
          obj299.methods["update"] = func309;
          func309.definitionLine = 108;
          func309.definitionModule = "kitty";
          var func313 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func313.paramCounts[0])
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
          func313.paramCounts = [
            0,
          ];
          func313.variableArities = [
            false,
          ];
          obj299.methods["onDestroy"] = func313;
          func313.definitionLine = 114;
          func313.definitionModule = "kitty";
          var func314 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              lineNumber = 105
              lineNumber = 119
              onSelf = true;
              var call317 = callmethod(this, "rotation", [0]);
              var prod319 = callmethod(call317, "*", [1], new GraceNum(3.14159));
              var quotient321 = callmethod(prod319, "/", [1], new GraceNum(180));
              var call322 = callmethod(var_math,"cos", [1], quotient321);
              var prod325 = callmethod(var_distance, "*", [1], call322);
              onSelf = true;
              var call327 = callmethod(this, "posX", [0]);
              var opresult329 = callmethod(call327, "+", [1], prod325);
              onSelf = true;
              var call330 = callmethod(this, "posX:=", [1], opresult329);
              lineNumber = 120
              lineNumber = 105
              lineNumber = 120
              onSelf = true;
              var call333 = callmethod(this, "rotation", [0]);
              var prod335 = callmethod(call333, "*", [1], new GraceNum(3.14159));
              var quotient337 = callmethod(prod335, "/", [1], new GraceNum(180));
              var call338 = callmethod(var_math,"sin", [1], quotient337);
              var prod341 = callmethod(var_distance, "*", [1], call338);
              onSelf = true;
              var call343 = callmethod(this, "posY", [0]);
              var opresult345 = callmethod(call343, "+", [1], prod341);
              onSelf = true;
              var call346 = callmethod(this, "posY:=", [1], opresult345);
              return call346
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func314.paramCounts = [
            1,
          ];
          func314.variableArities = [
            false,
          ];
          obj299.methods["move"] = func314;
          func314.definitionLine = 118;
          func314.definitionModule = "kitty";
          var func347 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func347.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 105
              lineNumber = 124
              onSelf = true;
              var call350 = callmethod(this, "rotation", [0]);
              var opresult353 = callmethod(new GraceNum(90), "+", [1], call350);
              var prod355 = callmethod(opresult353, "*", [1], new GraceNum(3.14159));
              var quotient357 = callmethod(prod355, "/", [1], new GraceNum(180));
              var call358 = callmethod(var_math,"cos", [1], quotient357);
              var prod361 = callmethod(var_distance, "*", [1], call358);
              onSelf = true;
              var call363 = callmethod(this, "posX", [0]);
              var opresult365 = callmethod(call363, "+", [1], prod361);
              onSelf = true;
              var call366 = callmethod(this, "posX:=", [1], opresult365);
              lineNumber = 125
              lineNumber = 105
              lineNumber = 125
              onSelf = true;
              var call369 = callmethod(this, "rotation", [0]);
              var opresult372 = callmethod(new GraceNum(90), "+", [1], call369);
              var prod374 = callmethod(opresult372, "*", [1], new GraceNum(3.14159));
              var quotient376 = callmethod(prod374, "/", [1], new GraceNum(180));
              var call377 = callmethod(var_math,"sin", [1], quotient376);
              var prod380 = callmethod(var_distance, "*", [1], call377);
              onSelf = true;
              var call382 = callmethod(this, "posY", [0]);
              var opresult384 = callmethod(call382, "+", [1], prod380);
              onSelf = true;
              var call385 = callmethod(this, "posY:=", [1], opresult384);
              return call385
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func347.paramCounts = [
            1,
          ];
          func347.variableArities = [
            false,
          ];
          obj299.methods["strafe"] = func347;
          func347.definitionLine = 123;
          func347.definitionModule = "kitty";
          var func386 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 105
              lineNumber = 130
              lineNumber = 129
              onSelf = true;
              var call388 = callmethod(this, "rotation", [0]);
              var opresult390 = callmethod(call388, "+", [1], var_angle);
              onSelf = true;
              var call391 = callmethod(this, "rotation:=", [1], opresult390);
              return call391
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func386.paramCounts = [
            1,
          ];
          func386.variableArities = [
            false,
          ];
          obj299.methods["turn"] = func386;
          func386.definitionLine = 128;
          func386.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              var call393 = callmethod(var_ctx,"save", [0]);
              lineNumber = 134
              onSelf = true;
              var call394 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call395 = callmethod(this, "posY", [0]);
              var call396 = callmethod(var_ctx,"translate", [2], call394, call395);
              lineNumber = 135
              onSelf = true;
              var call397 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call398 = callmethod(this, "image", [0]);
              var call399 = callmethod(call398,"draw", [4], var_ctx, var_dx, var_dy, call397);
              lineNumber = 136
              var call400 = callmethod(var_ctx,"restore", [0]);
              return call400
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func392.paramCounts = [
            3,
          ];
          func392.variableArities = [
            false,
          ];
          obj299.methods["draw"] = func392;
          func392.definitionLine = 132;
          func392.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              lineNumber = 136
              lineNumber = 140
              var call402 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call403 = callmethod(call402, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call404 = callmethod(call403, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call405 = callmethod(this, "image:=", [1], call404);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func401.paramCounts = [
            1,
          ];
          func401.variableArities = [
            false,
          ];
          obj299.methods["createImage"] = func401;
          func401.definitionLine = 139;
          func401.definitionModule = "kitty";
          var func406 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 140
              lineNumber = 144
              onSelf = true;
              var call407 = callmethod(this, "image:=", [1], var_image__39__);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func406.paramTypes = [];
          func406.paramTypes.push([]);
          func406.paramCounts = [
            1,
          ];
          func406.variableArities = [
            false,
          ];
          obj299.methods["setImage"] = func406;
          func406.definitionLine = 143;
          func406.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 140
              lineNumber = 148
              onSelf = true;
              var call409 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func408.variableArities = [
            false,
          ];
          obj299.methods["setAction"] = func408;
          func408.definitionLine = 147;
          func408.definitionModule = "kitty";
          var func410 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func410.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              lineNumber = 140
              lineNumber = 152
              onSelf = true;
              var call411 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 154
              lineNumber = 140
              lineNumber = 153
              onSelf = true;
              var call412 = callmethod(this, "posY:=", [1], var_y);
              return call412
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func410.paramCounts = [
            2,
          ];
          func410.variableArities = [
            false,
          ];
          obj299.methods["setLocation"] = func410;
          func410.definitionLine = 151;
          func410.definitionModule = "kitty";
          var func413 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func413.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              lineNumber = 157
              onSelf = true;
              var call414 = callmethod(this, "posX", [0]);
              return call414
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
          obj299.methods["getX"] = func413;
          func413.definitionLine = 156;
          func413.definitionModule = "kitty";
          var func415 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func415.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call416 = callmethod(this, "posY", [0]);
              return call416
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
          obj299.methods["getY"] = func415;
          func415.definitionLine = 160;
          func415.definitionModule = "kitty";
          var func417 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func417.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              lineNumber = 165
              onSelf = true;
              var call418 = callmethod(this, "rotation", [0]);
              return call418
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
          obj299.methods["getRotation"] = func417;
          func417.definitionLine = 164;
          func417.definitionModule = "kitty";
          sourceObject = obj299;
          lineNumber = 73
          obj299.data["tag"] = var_tag__39__;
          var reader_kitty_tag_419 = function() {
            return this.data["tag"];
          }
          obj299.methods["tag"] = reader_kitty_tag_419;
          obj299.data["tag"] = var_tag__39__;
          var writer_kitty_tag_419 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj299.methods["tag:="] = writer_kitty_tag_419;
          reader_kitty_tag_419.confidential = true;
          writer_kitty_tag_419.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj299.mutable = true;
          sourceObject = obj299;
          lineNumber = 74
          obj299.data["posX"] = var_x__39__;
          var reader_kitty_posX_420 = function() {
            return this.data["posX"];
          }
          obj299.methods["posX"] = reader_kitty_posX_420;
          obj299.data["posX"] = var_x__39__;
          var writer_kitty_posX_420 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj299.methods["posX:="] = writer_kitty_posX_420;
          reader_kitty_posX_420.confidential = true;
          writer_kitty_posX_420.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj299.mutable = true;
          sourceObject = obj299;
          lineNumber = 75
          obj299.data["posY"] = var_y__39__;
          var reader_kitty_posY_421 = function() {
            return this.data["posY"];
          }
          obj299.methods["posY"] = reader_kitty_posY_421;
          obj299.data["posY"] = var_y__39__;
          var writer_kitty_posY_421 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj299.methods["posY:="] = writer_kitty_posY_421;
          reader_kitty_posY_421.confidential = true;
          writer_kitty_posY_421.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj299.mutable = true;
          sourceObject = obj299;
          lineNumber = 76
          obj299.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_422 = function() {
            return this.data["rotation"];
          }
          obj299.methods["rotation"] = reader_kitty_rotation_422;
          obj299.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_422 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj299.methods["rotation:="] = writer_kitty_rotation_422;
          reader_kitty_rotation_422.confidential = true;
          writer_kitty_rotation_422.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj299.mutable = true;
          sourceObject = obj299;
          lineNumber = 78
          var obj423 = Grace_allocObject();
          obj423.definitionModule = "kitty";
          obj423.definitionLine = 78;
          obj423.outer = this;
          var reader_kitty_outer_424 = function() {
            return this.outer;
          }
          obj423.methods["outer"] = reader_kitty_outer_424;
          function obj_init_423() {
            var origSuperDepth = superDepth;
            superDepth = obj423;
            obj423.annotations = [];
            var func425 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func425.paramCounts[0])
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
            func425.paramCounts = [
              0,
            ];
            func425.variableArities = [
              false,
            ];
            obj423.methods["update"] = func425;
            func425.definitionLine = 79;
            func425.definitionModule = "kitty";
            sourceObject = obj423;
            superDepth = origSuperDepth;
          }
          obj_init_423.apply(obj423, []);
          obj299.data["action"] = obj423;
          var reader_kitty_action_426 = function() {
            return this.data["action"];
          }
          obj299.methods["action"] = reader_kitty_action_426;
          obj299.data["action"] = obj423;
          var writer_kitty_action_426 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj299.methods["action:="] = writer_kitty_action_426;
          reader_kitty_action_426.confidential = true;
          writer_kitty_action_426.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj423)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj299.mutable = true;
          sourceObject = obj299;
          obj299.data["image"] = undefined;
          var reader_kitty_image_427 = function() {
            return this.data["image"];
          }
          obj299.methods["image"] = reader_kitty_image_427;
          obj299.data["image"] = undefined;
          var writer_kitty_image_427 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj299.methods["image:="] = writer_kitty_image_427;
          reader_kitty_image_427.confidential = true;
          writer_kitty_image_427.confidential = true;
          obj299.mutable = true;
          sourceObject = obj299;
          lineNumber = 86
          onSelf = true;
          var call428 = callmethod(this, "awake", [0]);
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          sourceObject = obj299;
          superDepth = origSuperDepth;
        }
        obj_init_299.apply(inheritingObject, []);
        return obj299
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj165.methods["new()object"] = func298;
    var func429 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string430 = new GraceString("class KittyEntity");
        return string430
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func429.paramCounts = [
    ];
    func429.variableArities = [
    ];
    obj165.methods["asDebugString"] = func429;
    func429.definitionLine = 69;
    func429.definitionModule = "kitty";
    sourceObject = obj165;
    sourceObject = obj165;
    superDepth = origSuperDepth;
  }
  obj_init_165.apply(obj165, []);
  var var_KittyEntity = obj165;
  lineNumber = 169
  lineNumber = 176
  lineNumber = 180
  lineNumber = 185
  var func431 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func431.paramCounts[0])
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
  func431.paramCounts = [
    0,
  ];
  func431.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func431;
  func431.definitionLine = 185;
  func431.definitionModule = "kitty";
  var obj432 = Grace_allocObject();
  obj432.definitionModule = "kitty";
  obj432.definitionLine = 185;
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
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj435 = Grace_allocObject();
        obj435.definitionModule = "kitty";
        obj435.definitionLine = 185;
        obj435.outer = this;
        var reader_kitty_outer_436 = function() {
          return this.outer;
        }
        obj435.methods["outer"] = reader_kitty_outer_436;
        function obj_init_435() {
          var origSuperDepth = superDepth;
          superDepth = obj435;
          obj435.annotations = [];
          var func437 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 223
              var if438 = var_done;
              lineNumber = 219
              onSelf = true;
              var call439 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call439)) {
                lineNumber = 221
                lineNumber = 220
                var bool440 = new GraceBoolean(false)
                return bool440
              }
              lineNumber = 224
              lineNumber = 185
              lineNumber = 223
              var call441 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call442 = callmethod(this, "document:=", [1], call441);
              lineNumber = 224
              lineNumber = 223
              lineNumber = 224
              var string443 = new GraceString("standard-canvas");
              onSelf = true;
              var call444 = callmethod(this, "document", [0]);
              var call445 = callmethod(call444,"getElementById", [1], string443);
              onSelf = true;
              var call446 = callmethod(this, "canvas:=", [1], call445);
              lineNumber = 226
              lineNumber = 223
              lineNumber = 225
              onSelf = true;
              var call447 = callmethod(this, "canvas", [0]);
              var call448 = callmethod(call447,"width", [0]);
              onSelf = true;
              var call449 = callmethod(this, "canvasWidth:=", [1], call448);
              lineNumber = 229
              lineNumber = 225
              lineNumber = 226
              onSelf = true;
              var call450 = callmethod(this, "canvas", [0]);
              var call451 = callmethod(call450,"height", [0]);
              onSelf = true;
              var call452 = callmethod(this, "canvasHeight:=", [1], call451);
              lineNumber = 241
              var block453 = Grace_allocObject();
              block453.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block453.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block453.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block453.methods["match"] = GraceBlock_match;
              block453.methods["prefix?"] = GraceBlock_lift;
              block453.receiver = this;
              block453.className = 'block<kitty:241>';
              block453.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 232
                lineNumber = 231
                onSelf = true;
                var call454 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call456 = callmethod(this, "canvas", [0]);
                var call457 = callmethod(call456,"offsetWidth", [0]);
                onSelf = true;
                var call459 = callmethod(this, "canvas", [0]);
                var call460 = callmethod(call459,"offsetLeft", [0]);
                var call462 = callmethod(var_ev,"clientX", [0]);
                var diff464 = callmethod(call462, "-", [1], call460);
                var quotient466 = callmethod(diff464, "/", [1], call457);
                var prod468 = callmethod(quotient466, "*", [1], call454);
                var var_x = prod468;
                lineNumber = 232;
                moduleName = "kitty";
                lineNumber = 231
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 236
                lineNumber = 232
                onSelf = true;
                var call469 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call471 = callmethod(this, "canvas", [0]);
                var call472 = callmethod(call471,"offsetHeight", [0]);
                onSelf = true;
                var call474 = callmethod(this, "canvas", [0]);
                var call475 = callmethod(call474,"offsetTop", [0]);
                var call477 = callmethod(var_ev,"clientY", [0]);
                var diff479 = callmethod(call477, "-", [1], call475);
                var quotient481 = callmethod(diff479, "/", [1], call472);
                var prod483 = callmethod(quotient481, "*", [1], call469);
                var var_y = prod483;
                lineNumber = 236;
                moduleName = "kitty";
                lineNumber = 232
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 240
                var if484 = var_done;
                lineNumber = 236
                var opresult487 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call490 = callmethod(this, "canvasWidth", [0]);
                var diff492 = callmethod(call490, "-", [1], new GraceNum(20));
                var opresult495 = callmethod(var_x, ">", [1], diff492);
                var opresult497 = callmethod(opresult495, "&&", [1], opresult487);
                if (Grace_isTrue(opresult497)) {
                  lineNumber = 237
                  var call498 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 238
                  onSelf = true;
                  var call499 = callmethod(this, "stop", [0]);
                  if484 = call499;
                }
                return if484;
              };
              var_mouseDownListener = block453;
              lineNumber = 241
              var string500 = new GraceString("mousedown");
              onSelf = true;
              var call501 = callmethod(this, "canvas", [0]);
              var call502 = callmethod(call501,"addEventListener", [2], string500, var_mouseDownListener);
              lineNumber = 251
              var block503 = Grace_allocObject();
              block503.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block503.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block503.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block503.methods["match"] = GraceBlock_match;
              block503.methods["prefix?"] = GraceBlock_lift;
              block503.receiver = this;
              block503.className = 'block<kitty:251>';
              block503.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 249
                var if504 = var_done;
                lineNumber = 246
                var call506 = callmethod(var_ev,"keyCode", [0]);
                var opresult508 = callmethod(call506, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult508)) {
                  lineNumber = 247
                  onSelf = true;
                  var call509 = callmethod(this, "stop", [0]);
                  if504 = call509;
                }
                lineNumber = 250
                lineNumber = 246
                lineNumber = 249
                var call510 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call511 = callmethod(this, "currentKeyDown:=", [1], call510);
                return call511;
              };
              var_keyDownListener = block503;
              lineNumber = 251
              var string512 = new GraceString("keydown");
              onSelf = true;
              var call513 = callmethod(this, "document", [0]);
              var call514 = callmethod(call513,"addEventListener", [2], string512, var_keyDownListener);
              lineNumber = 257
              var block515 = Grace_allocObject();
              block515.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block515.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block515.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block515.methods["match"] = GraceBlock_match;
              block515.methods["prefix?"] = GraceBlock_lift;
              block515.receiver = this;
              block515.className = 'block<kitty:257>';
              block515.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 256
                lineNumber = 249
                lineNumber = 256
                lineNumber = 255
                var call516 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call517 = callmethod(this, "currentKeyDown:=", [1], call516);
                return call517;
              };
              var_keyUpListener = block515;
              lineNumber = 257
              var string518 = new GraceString("keyup");
              onSelf = true;
              var call519 = callmethod(this, "document", [0]);
              var call520 = callmethod(call519,"addEventListener", [2], string518, var_keyUpListener);
              lineNumber = 259
              lineNumber = 249
              lineNumber = 259
              var string521 = new GraceString("canvas");
              var call522 = callmethod(var_dom,"document", [0]);
              var call523 = callmethod(call522,"createElement", [1], string521);
              onSelf = true;
              var call524 = callmethod(this, "backingCanvas:=", [1], call523);
              lineNumber = 261
              lineNumber = 259
              lineNumber = 260
              onSelf = true;
              var call525 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call526 = callmethod(this, "backingCanvas", [0]);
              var call527 = callmethod(call526,"height:=", [1], call525);
              lineNumber = 262
              lineNumber = 259
              lineNumber = 261
              onSelf = true;
              var call528 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call529 = callmethod(this, "backingCanvas", [0]);
              var call530 = callmethod(call529,"width:=", [1], call528);
              lineNumber = 262
              lineNumber = 259
              lineNumber = 262
              var string531 = new GraceString("2d");
              onSelf = true;
              var call532 = callmethod(this, "backingCanvas", [0]);
              var call533 = callmethod(call532,"getContext", [1], string531);
              onSelf = true;
              var call534 = callmethod(this, "backingContext:=", [1], call533);
              lineNumber = 263
              lineNumber = 259
              lineNumber = 263
              var string535 = new GraceString("2d");
              onSelf = true;
              var call536 = callmethod(this, "canvas", [0]);
              var call537 = callmethod(call536,"getContext", [1], string535);
              onSelf = true;
              var call538 = callmethod(this, "mctx:=", [1], call537);
              lineNumber = 266
              var string539 = new GraceString("doggo.jpg");
              onSelf = true;
              var call540 = callmethod(this, "setBackground", [1], string539);
              lineNumber = 278
              lineNumber = 259
              lineNumber = 272
              var bool541 = new GraceBoolean(true)
              onSelf = true;
              var call542 = callmethod(this, "isInit:=", [1], bool541);
              return call542
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
          obj435.methods["init"] = func437;
          func437.definitionLine = 215;
          func437.definitionModule = "kitty";
          var func543 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              lineNumber = 259
              lineNumber = 283
              var bool544 = new GraceBoolean(true)
              onSelf = true;
              var call545 = callmethod(this, "isRunning:=", [1], bool544);
              lineNumber = 284
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
              block546.className = 'block<kitty:284>';
              block546.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call547 = callmethod(this, "isRunning", [0]);
                return call547;
              };
              lineNumber = 288
              var block548 = Grace_allocObject();
              block548.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block548.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block548.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block548.methods["match"] = GraceBlock_match;
              block548.methods["prefix?"] = GraceBlock_lift;
              block548.receiver = this;
              block548.className = 'block<kitty:288>';
              block548.real = function(
              ) {
                sourceObject = this;
                lineNumber = 285
                onSelf = true;
                var call549 = callmethod(this, "update", [0]);
                return call549;
              };
              lineNumber = 284
              var call550 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block546, new GraceNum(10), block548);
              return call550
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func543.paramCounts = [
            0,
          ];
          func543.variableArities = [
            false,
          ];
          obj435.methods["start"] = func543;
          func543.definitionLine = 281;
          func543.definitionModule = "kitty";
          var func551 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 259
              lineNumber = 296
              onSelf = true;
              var call552 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call553 = callmethod(this, "mctx", [0]);
              var call554 = callmethod(call553,"fillStyle:=", [1], call552);
              lineNumber = 297
              onSelf = true;
              var call555 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call556 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call557 = callmethod(this, "mctx", [0]);
              var call558 = callmethod(call557,"fillRect", [4], new GraceNum(0), new GraceNum(0), call555, call556);
              lineNumber = 298
              onSelf = true;
              var call559 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call560 = callmethod(this, "mctx", [0]);
              var call561 = callmethod(call560,"drawImage", [3], call559, new GraceNum(0), new GraceNum(0));
              lineNumber = 299
              onSelf = true;
              var call562 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call564 = callmethod(this, "canvasWidth", [0]);
              var quotient566 = callmethod(call564, "/", [1], new GraceNum(2));
              onSelf = true;
              var call568 = callmethod(this, "canvasHeight", [0]);
              var quotient570 = callmethod(call568, "/", [1], new GraceNum(2));
              onSelf = true;
              var call571 = callmethod(this, "background", [0]);
              var call572 = callmethod(call571,"draw", [4], call562, quotient566, quotient570, new GraceNum(0));
              lineNumber = 302
              onSelf = true;
              var call573 = callmethod(this, "entities", [0]);
              lineNumber = 308
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
              block574.className = 'block<kitty:308>';
              block574.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 303
                var call575 = callmethod(var_entity,"tick", [0]);
                lineNumber = 304
                onSelf = true;
                var call576 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call578 = callmethod(this, "canvasWidth", [0]);
                var quotient580 = callmethod(call578, "/", [1], new GraceNum(2));
                onSelf = true;
                var call582 = callmethod(this, "canvasHeight", [0]);
                var quotient584 = callmethod(call582, "/", [1], new GraceNum(2));
                var call585 = callmethod(var_entity,"draw", [3], call576, quotient580, quotient584);
                return call585;
              };
              var call586 = callmethod(Grace_prelude,"for()do", [1, 1], call573, block574);
              return call586
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func551.paramCounts = [
            0,
          ];
          func551.variableArities = [
            false,
          ];
          obj435.methods["update"] = func551;
          func551.definitionLine = 291;
          func551.definitionModule = "kitty";
          var func587 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func587.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              var string588 = new GraceString("WORLD STOPPING...");
              var call589 = Grace_print(string588);
              lineNumber = 313
              lineNumber = 303
              lineNumber = 312
              var bool590 = new GraceBoolean(false)
              onSelf = true;
              var call591 = callmethod(this, "isRunning:=", [1], bool590);
              lineNumber = 313
              var string592 = new GraceString("mousedown");
              onSelf = true;
              var call593 = callmethod(this, "canvas", [0]);
              var call594 = callmethod(call593,"removeEventListener", [2], string592, var_mouseDownListener);
              lineNumber = 314
              var string595 = new GraceString("keydown");
              onSelf = true;
              var call596 = callmethod(this, "document", [0]);
              var call597 = callmethod(call596,"removeEventListener", [2], string595, var_keyDownListener);
              lineNumber = 315
              var string598 = new GraceString("keyup");
              onSelf = true;
              var call599 = callmethod(this, "document", [0]);
              var call600 = callmethod(call599,"removeEventListener", [2], string598, var_keyUpListener);
              return call600
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func587.paramCounts = [
            0,
          ];
          func587.variableArities = [
            false,
          ];
          obj435.methods["stop"] = func587;
          func587.definitionLine = 310;
          func587.definitionModule = "kitty";
          var func601 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func601.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 320
              lineNumber = 319
              onSelf = true;
              var call602 = callmethod(this, "currentKeyDown", [0]);
              var opresult605 = callmethod(var_key, "==", [1], call602);
              return opresult605
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func601.paramCounts = [
            1,
          ];
          func601.variableArities = [
            false,
          ];
          obj435.methods["isKeyDown"] = func601;
          func601.definitionLine = 318;
          func601.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 323
              lineNumber = 303
              lineNumber = 323
              onSelf = true;
              var call607 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call608 = callmethod(this, "canvasHeight", [0]);
              var call609 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call610 = callmethod(call609, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call611 = callmethod(call610, "Image()width()height", [1, 1, 1], var_url, call607, call608);
              onSelf = true;
              var call612 = callmethod(this, "background:=", [1], call611);
              return call612
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
          obj435.methods["setBackground"] = func606;
          func606.definitionLine = 322;
          func606.definitionModule = "kitty";
          var func613 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              onSelf = true;
              var call614 = callmethod(this, "entities", [0]);
              var call615 = callmethod(call614,"push", [1], var_e);
              return call615
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func613.paramTypes = [];
          func613.paramTypes.push([]);
          func613.paramCounts = [
            1,
          ];
          func613.variableArities = [
            false,
          ];
          obj435.methods["addEntity"] = func613;
          func613.definitionLine = 326;
          func613.definitionModule = "kitty";
          var func616 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 332
              lineNumber = 331
              onSelf = true;
              var call617 = callmethod(this, "mctx", [0]);
              return call617
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func616.paramCounts = [
            0,
          ];
          func616.variableArities = [
            false,
          ];
          obj435.methods["getContext"] = func616;
          func616.definitionLine = 330;
          func616.definitionModule = "kitty";
          sourceObject = obj435;
          obj435.data["background"] = undefined;
          var reader_kitty_background_618 = function() {
            return this.data["background"];
          }
          obj435.methods["background"] = reader_kitty_background_618;
          obj435.data["background"] = undefined;
          var writer_kitty_background_618 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj435.methods["background:="] = writer_kitty_background_618;
          reader_kitty_background_618.confidential = true;
          writer_kitty_background_618.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 190
          var string619 = new GraceString("black");
          obj435.data["backgroundColour"] = string619;
          var reader_kitty_backgroundColour_620 = function() {
            return this.data["backgroundColour"];
          }
          obj435.methods["backgroundColour"] = reader_kitty_backgroundColour_620;
          obj435.data["backgroundColour"] = string619;
          var writer_kitty_backgroundColour_620 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj435.methods["backgroundColour:="] = writer_kitty_backgroundColour_620;
          reader_kitty_backgroundColour_620.confidential = true;
          writer_kitty_backgroundColour_620.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string619)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["document"] = undefined;
          var reader_kitty_document_621 = function() {
            return this.data["document"];
          }
          obj435.methods["document"] = reader_kitty_document_621;
          obj435.data["document"] = undefined;
          var writer_kitty_document_621 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj435.methods["document:="] = writer_kitty_document_621;
          reader_kitty_document_621.confidential = true;
          writer_kitty_document_621.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_622 = function() {
            return this.data["backingCanvas"];
          }
          obj435.methods["backingCanvas"] = reader_kitty_backingCanvas_622;
          obj435.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_622 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj435.methods["backingCanvas:="] = writer_kitty_backingCanvas_622;
          reader_kitty_backingCanvas_622.confidential = true;
          writer_kitty_backingCanvas_622.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["backingContext"] = undefined;
          var reader_kitty_backingContext_623 = function() {
            return this.data["backingContext"];
          }
          obj435.methods["backingContext"] = reader_kitty_backingContext_623;
          obj435.data["backingContext"] = undefined;
          var writer_kitty_backingContext_623 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj435.methods["backingContext:="] = writer_kitty_backingContext_623;
          reader_kitty_backingContext_623.confidential = true;
          writer_kitty_backingContext_623.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvas"] = undefined;
          var reader_kitty_canvas_624 = function() {
            return this.data["canvas"];
          }
          obj435.methods["canvas"] = reader_kitty_canvas_624;
          obj435.data["canvas"] = undefined;
          var writer_kitty_canvas_624 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj435.methods["canvas:="] = writer_kitty_canvas_624;
          reader_kitty_canvas_624.confidential = true;
          writer_kitty_canvas_624.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_625 = function() {
            return this.data["canvasWidth"];
          }
          obj435.methods["canvasWidth"] = reader_kitty_canvasWidth_625;
          obj435.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_625 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj435.methods["canvasWidth:="] = writer_kitty_canvasWidth_625;
          reader_kitty_canvasWidth_625.confidential = true;
          writer_kitty_canvasWidth_625.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_626 = function() {
            return this.data["canvasHeight"];
          }
          obj435.methods["canvasHeight"] = reader_kitty_canvasHeight_626;
          obj435.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_626 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj435.methods["canvasHeight:="] = writer_kitty_canvasHeight_626;
          reader_kitty_canvasHeight_626.confidential = true;
          writer_kitty_canvasHeight_626.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 201
          var call627 = callmethod(var_collections,"list", [0]);
          var call628 = callmethod(call627,"new", [0]);
          obj435.data["entities"] = call628;
          var reader_kitty_entities_629 = function() {
            return this.data["entities"];
          }
          obj435.methods["entities"] = reader_kitty_entities_629;
          obj435.data["entities"] = call628;
          var writer_kitty_entities_629 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj435.methods["entities:="] = writer_kitty_entities_629;
          reader_kitty_entities_629.confidential = true;
          writer_kitty_entities_629.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call628)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 203
          var bool630 = new GraceBoolean(false)
          obj435.data["isInit"] = bool630;
          var reader_kitty_isInit_631 = function() {
            return this.data["isInit"];
          }
          obj435.methods["isInit"] = reader_kitty_isInit_631;
          obj435.data["isInit"] = bool630;
          var writer_kitty_isInit_631 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj435.methods["isInit:="] = writer_kitty_isInit_631;
          reader_kitty_isInit_631.confidential = true;
          writer_kitty_isInit_631.confidential = true;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 203
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool630)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 204
          var bool632 = new GraceBoolean(false)
          obj435.data["isRunning"] = bool632;
          var reader_kitty_isRunning_633 = function() {
            return this.data["isRunning"];
          }
          obj435.methods["isRunning"] = reader_kitty_isRunning_633;
          obj435.data["isRunning"] = bool632;
          var writer_kitty_isRunning_633 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj435.methods["isRunning:="] = writer_kitty_isRunning_633;
          reader_kitty_isRunning_633.confidential = true;
          writer_kitty_isRunning_633.confidential = true;
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool632)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["mctx"] = undefined;
          var reader_kitty_mctx_634 = function() {
            return this.data["mctx"];
          }
          obj435.methods["mctx"] = reader_kitty_mctx_634;
          obj435.data["mctx"] = undefined;
          var writer_kitty_mctx_634 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj435.methods["mctx:="] = writer_kitty_mctx_634;
          reader_kitty_mctx_634.confidential = true;
          writer_kitty_mctx_634.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 210
          lineNumber = 208
          var call635 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj435.data["currentKeyDown"] = call635;
          var reader_kitty_currentKeyDown_636 = function() {
            return this.data["currentKeyDown"];
          }
          obj435.methods["currentKeyDown"] = reader_kitty_currentKeyDown_636;
          obj435.data["currentKeyDown"] = call635;
          var writer_kitty_currentKeyDown_636 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj435.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_636;
          reader_kitty_currentKeyDown_636.confidential = true;
          writer_kitty_currentKeyDown_636.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call635)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["ent"] = undefined;
          var reader_kitty_ent_637 = function() {
            return this.data["ent"];
          }
          obj435.methods["ent"] = reader_kitty_ent_637;
          obj435.data["ent"] = undefined;
          var writer_kitty_ent_637 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj435.methods["ent:="] = writer_kitty_ent_637;
          reader_kitty_ent_637.confidential = true;
          writer_kitty_ent_637.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 212
          onSelf = true;
          var call638 = callmethod(this, "init", [0]);
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          superDepth = origSuperDepth;
        }
        obj_init_435.apply(obj435, []);
        return obj435
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
    obj432.methods["new"] = func434;
    func434.definitionLine = 185;
    func434.definitionModule = "kitty";
    var func639 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj640 = Grace_allocObject();
        obj640.definitionModule = "kitty";
        obj640.definitionLine = 185;
        var inho640 = inheritingObject;
        while (inho640.superobj) inho640 = inho640.superobj;
        inho640.superobj = obj640;
        obj640.data = inheritingObject.data;
        obj640.outer = this;
        var reader_kitty_outer_641 = function() {
          return this.outer;
        }
        obj640.methods["outer"] = reader_kitty_outer_641;
        function obj_init_640() {
          var origSuperDepth = superDepth;
          superDepth = obj640;
          obj640.annotations = [];
          var func642 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 223
              var if643 = var_done;
              lineNumber = 219
              onSelf = true;
              var call644 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call644)) {
                lineNumber = 221
                lineNumber = 220
                var bool645 = new GraceBoolean(false)
                return bool645
              }
              lineNumber = 224
              lineNumber = 201
              lineNumber = 223
              var call646 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call647 = callmethod(this, "document:=", [1], call646);
              lineNumber = 224
              lineNumber = 223
              lineNumber = 224
              var string648 = new GraceString("standard-canvas");
              onSelf = true;
              var call649 = callmethod(this, "document", [0]);
              var call650 = callmethod(call649,"getElementById", [1], string648);
              onSelf = true;
              var call651 = callmethod(this, "canvas:=", [1], call650);
              lineNumber = 226
              lineNumber = 223
              lineNumber = 225
              onSelf = true;
              var call652 = callmethod(this, "canvas", [0]);
              var call653 = callmethod(call652,"width", [0]);
              onSelf = true;
              var call654 = callmethod(this, "canvasWidth:=", [1], call653);
              lineNumber = 229
              lineNumber = 225
              lineNumber = 226
              onSelf = true;
              var call655 = callmethod(this, "canvas", [0]);
              var call656 = callmethod(call655,"height", [0]);
              onSelf = true;
              var call657 = callmethod(this, "canvasHeight:=", [1], call656);
              lineNumber = 241
              var block658 = Grace_allocObject();
              block658.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block658.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block658.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block658.methods["match"] = GraceBlock_match;
              block658.methods["prefix?"] = GraceBlock_lift;
              block658.receiver = this;
              block658.className = 'block<kitty:241>';
              block658.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 232
                lineNumber = 231
                onSelf = true;
                var call659 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call661 = callmethod(this, "canvas", [0]);
                var call662 = callmethod(call661,"offsetWidth", [0]);
                onSelf = true;
                var call664 = callmethod(this, "canvas", [0]);
                var call665 = callmethod(call664,"offsetLeft", [0]);
                var call667 = callmethod(var_ev,"clientX", [0]);
                var diff669 = callmethod(call667, "-", [1], call665);
                var quotient671 = callmethod(diff669, "/", [1], call662);
                var prod673 = callmethod(quotient671, "*", [1], call659);
                var var_x = prod673;
                lineNumber = 232;
                moduleName = "kitty";
                lineNumber = 231
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 236
                lineNumber = 232
                onSelf = true;
                var call674 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call676 = callmethod(this, "canvas", [0]);
                var call677 = callmethod(call676,"offsetHeight", [0]);
                onSelf = true;
                var call679 = callmethod(this, "canvas", [0]);
                var call680 = callmethod(call679,"offsetTop", [0]);
                var call682 = callmethod(var_ev,"clientY", [0]);
                var diff684 = callmethod(call682, "-", [1], call680);
                var quotient686 = callmethod(diff684, "/", [1], call677);
                var prod688 = callmethod(quotient686, "*", [1], call674);
                var var_y = prod688;
                lineNumber = 236;
                moduleName = "kitty";
                lineNumber = 232
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 240
                var if689 = var_done;
                lineNumber = 236
                var opresult692 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call695 = callmethod(this, "canvasWidth", [0]);
                var diff697 = callmethod(call695, "-", [1], new GraceNum(20));
                var opresult700 = callmethod(var_x, ">", [1], diff697);
                var opresult702 = callmethod(opresult700, "&&", [1], opresult692);
                if (Grace_isTrue(opresult702)) {
                  lineNumber = 237
                  var call703 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 238
                  onSelf = true;
                  var call704 = callmethod(this, "stop", [0]);
                  if689 = call704;
                }
                return if689;
              };
              var_mouseDownListener = block658;
              lineNumber = 241
              var string705 = new GraceString("mousedown");
              onSelf = true;
              var call706 = callmethod(this, "canvas", [0]);
              var call707 = callmethod(call706,"addEventListener", [2], string705, var_mouseDownListener);
              lineNumber = 251
              var block708 = Grace_allocObject();
              block708.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block708.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block708.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block708.methods["match"] = GraceBlock_match;
              block708.methods["prefix?"] = GraceBlock_lift;
              block708.receiver = this;
              block708.className = 'block<kitty:251>';
              block708.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 249
                var if709 = var_done;
                lineNumber = 246
                var call711 = callmethod(var_ev,"keyCode", [0]);
                var opresult713 = callmethod(call711, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult713)) {
                  lineNumber = 247
                  onSelf = true;
                  var call714 = callmethod(this, "stop", [0]);
                  if709 = call714;
                }
                lineNumber = 250
                lineNumber = 246
                lineNumber = 249
                var call715 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call716 = callmethod(this, "currentKeyDown:=", [1], call715);
                return call716;
              };
              var_keyDownListener = block708;
              lineNumber = 251
              var string717 = new GraceString("keydown");
              onSelf = true;
              var call718 = callmethod(this, "document", [0]);
              var call719 = callmethod(call718,"addEventListener", [2], string717, var_keyDownListener);
              lineNumber = 257
              var block720 = Grace_allocObject();
              block720.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block720.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block720.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block720.methods["match"] = GraceBlock_match;
              block720.methods["prefix?"] = GraceBlock_lift;
              block720.receiver = this;
              block720.className = 'block<kitty:257>';
              block720.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 256
                lineNumber = 249
                lineNumber = 256
                lineNumber = 255
                var call721 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call722 = callmethod(this, "currentKeyDown:=", [1], call721);
                return call722;
              };
              var_keyUpListener = block720;
              lineNumber = 257
              var string723 = new GraceString("keyup");
              onSelf = true;
              var call724 = callmethod(this, "document", [0]);
              var call725 = callmethod(call724,"addEventListener", [2], string723, var_keyUpListener);
              lineNumber = 259
              lineNumber = 249
              lineNumber = 259
              var string726 = new GraceString("canvas");
              var call727 = callmethod(var_dom,"document", [0]);
              var call728 = callmethod(call727,"createElement", [1], string726);
              onSelf = true;
              var call729 = callmethod(this, "backingCanvas:=", [1], call728);
              lineNumber = 261
              lineNumber = 259
              lineNumber = 260
              onSelf = true;
              var call730 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call731 = callmethod(this, "backingCanvas", [0]);
              var call732 = callmethod(call731,"height:=", [1], call730);
              lineNumber = 262
              lineNumber = 259
              lineNumber = 261
              onSelf = true;
              var call733 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call734 = callmethod(this, "backingCanvas", [0]);
              var call735 = callmethod(call734,"width:=", [1], call733);
              lineNumber = 262
              lineNumber = 259
              lineNumber = 262
              var string736 = new GraceString("2d");
              onSelf = true;
              var call737 = callmethod(this, "backingCanvas", [0]);
              var call738 = callmethod(call737,"getContext", [1], string736);
              onSelf = true;
              var call739 = callmethod(this, "backingContext:=", [1], call738);
              lineNumber = 263
              lineNumber = 259
              lineNumber = 263
              var string740 = new GraceString("2d");
              onSelf = true;
              var call741 = callmethod(this, "canvas", [0]);
              var call742 = callmethod(call741,"getContext", [1], string740);
              onSelf = true;
              var call743 = callmethod(this, "mctx:=", [1], call742);
              lineNumber = 266
              var string744 = new GraceString("doggo.jpg");
              onSelf = true;
              var call745 = callmethod(this, "setBackground", [1], string744);
              lineNumber = 278
              lineNumber = 259
              lineNumber = 272
              var bool746 = new GraceBoolean(true)
              onSelf = true;
              var call747 = callmethod(this, "isInit:=", [1], bool746);
              return call747
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func642.paramCounts = [
            0,
          ];
          func642.variableArities = [
            false,
          ];
          obj640.methods["init"] = func642;
          func642.definitionLine = 215;
          func642.definitionModule = "kitty";
          var func748 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func748.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 284
              lineNumber = 259
              lineNumber = 283
              var bool749 = new GraceBoolean(true)
              onSelf = true;
              var call750 = callmethod(this, "isRunning:=", [1], bool749);
              lineNumber = 284
              var block751 = Grace_allocObject();
              block751.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block751.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block751.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block751.methods["match"] = GraceBlock_match;
              block751.methods["prefix?"] = GraceBlock_lift;
              block751.receiver = this;
              block751.className = 'block<kitty:284>';
              block751.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call752 = callmethod(this, "isRunning", [0]);
                return call752;
              };
              lineNumber = 288
              var block753 = Grace_allocObject();
              block753.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block753.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block753.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block753.methods["match"] = GraceBlock_match;
              block753.methods["prefix?"] = GraceBlock_lift;
              block753.receiver = this;
              block753.className = 'block<kitty:288>';
              block753.real = function(
              ) {
                sourceObject = this;
                lineNumber = 285
                onSelf = true;
                var call754 = callmethod(this, "update", [0]);
                return call754;
              };
              lineNumber = 284
              var call755 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block751, new GraceNum(10), block753);
              return call755
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
          obj640.methods["start"] = func748;
          func748.definitionLine = 281;
          func748.definitionModule = "kitty";
          var func756 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func756.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 259
              lineNumber = 296
              onSelf = true;
              var call757 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call758 = callmethod(this, "mctx", [0]);
              var call759 = callmethod(call758,"fillStyle:=", [1], call757);
              lineNumber = 297
              onSelf = true;
              var call760 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call761 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call762 = callmethod(this, "mctx", [0]);
              var call763 = callmethod(call762,"fillRect", [4], new GraceNum(0), new GraceNum(0), call760, call761);
              lineNumber = 298
              onSelf = true;
              var call764 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call765 = callmethod(this, "mctx", [0]);
              var call766 = callmethod(call765,"drawImage", [3], call764, new GraceNum(0), new GraceNum(0));
              lineNumber = 299
              onSelf = true;
              var call767 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call769 = callmethod(this, "canvasWidth", [0]);
              var quotient771 = callmethod(call769, "/", [1], new GraceNum(2));
              onSelf = true;
              var call773 = callmethod(this, "canvasHeight", [0]);
              var quotient775 = callmethod(call773, "/", [1], new GraceNum(2));
              onSelf = true;
              var call776 = callmethod(this, "background", [0]);
              var call777 = callmethod(call776,"draw", [4], call767, quotient771, quotient775, new GraceNum(0));
              lineNumber = 302
              onSelf = true;
              var call778 = callmethod(this, "entities", [0]);
              lineNumber = 308
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
              block779.className = 'block<kitty:308>';
              block779.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 303
                var call780 = callmethod(var_entity,"tick", [0]);
                lineNumber = 304
                onSelf = true;
                var call781 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call783 = callmethod(this, "canvasWidth", [0]);
                var quotient785 = callmethod(call783, "/", [1], new GraceNum(2));
                onSelf = true;
                var call787 = callmethod(this, "canvasHeight", [0]);
                var quotient789 = callmethod(call787, "/", [1], new GraceNum(2));
                var call790 = callmethod(var_entity,"draw", [3], call781, quotient785, quotient789);
                return call790;
              };
              var call791 = callmethod(Grace_prelude,"for()do", [1, 1], call778, block779);
              return call791
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func756.paramCounts = [
            0,
          ];
          func756.variableArities = [
            false,
          ];
          obj640.methods["update"] = func756;
          func756.definitionLine = 291;
          func756.definitionModule = "kitty";
          var func792 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func792.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              var string793 = new GraceString("WORLD STOPPING...");
              var call794 = Grace_print(string793);
              lineNumber = 313
              lineNumber = 303
              lineNumber = 312
              var bool795 = new GraceBoolean(false)
              onSelf = true;
              var call796 = callmethod(this, "isRunning:=", [1], bool795);
              lineNumber = 313
              var string797 = new GraceString("mousedown");
              onSelf = true;
              var call798 = callmethod(this, "canvas", [0]);
              var call799 = callmethod(call798,"removeEventListener", [2], string797, var_mouseDownListener);
              lineNumber = 314
              var string800 = new GraceString("keydown");
              onSelf = true;
              var call801 = callmethod(this, "document", [0]);
              var call802 = callmethod(call801,"removeEventListener", [2], string800, var_keyDownListener);
              lineNumber = 315
              var string803 = new GraceString("keyup");
              onSelf = true;
              var call804 = callmethod(this, "document", [0]);
              var call805 = callmethod(call804,"removeEventListener", [2], string803, var_keyUpListener);
              return call805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func792.paramCounts = [
            0,
          ];
          func792.variableArities = [
            false,
          ];
          obj640.methods["stop"] = func792;
          func792.definitionLine = 310;
          func792.definitionModule = "kitty";
          var func806 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 320
              lineNumber = 319
              onSelf = true;
              var call807 = callmethod(this, "currentKeyDown", [0]);
              var opresult810 = callmethod(var_key, "==", [1], call807);
              return opresult810
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
          obj640.methods["isKeyDown"] = func806;
          func806.definitionLine = 318;
          func806.definitionModule = "kitty";
          var func811 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func811.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 323
              lineNumber = 303
              lineNumber = 323
              onSelf = true;
              var call812 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call813 = callmethod(this, "canvasHeight", [0]);
              var call814 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call815 = callmethod(call814, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call816 = callmethod(call815, "Image()width()height", [1, 1, 1], var_url, call812, call813);
              onSelf = true;
              var call817 = callmethod(this, "background:=", [1], call816);
              return call817
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func811.paramCounts = [
            1,
          ];
          func811.variableArities = [
            false,
          ];
          obj640.methods["setBackground"] = func811;
          func811.definitionLine = 322;
          func811.definitionModule = "kitty";
          var func818 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func818.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              onSelf = true;
              var call819 = callmethod(this, "entities", [0]);
              var call820 = callmethod(call819,"push", [1], var_e);
              return call820
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func818.paramTypes = [];
          func818.paramTypes.push([]);
          func818.paramCounts = [
            1,
          ];
          func818.variableArities = [
            false,
          ];
          obj640.methods["addEntity"] = func818;
          func818.definitionLine = 326;
          func818.definitionModule = "kitty";
          var func821 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func821.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 332
              lineNumber = 331
              onSelf = true;
              var call822 = callmethod(this, "mctx", [0]);
              return call822
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func821.paramCounts = [
            0,
          ];
          func821.variableArities = [
            false,
          ];
          obj640.methods["getContext"] = func821;
          func821.definitionLine = 330;
          func821.definitionModule = "kitty";
          sourceObject = obj640;
          obj640.data["background"] = undefined;
          var reader_kitty_background_823 = function() {
            return this.data["background"];
          }
          obj640.methods["background"] = reader_kitty_background_823;
          obj640.data["background"] = undefined;
          var writer_kitty_background_823 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj640.methods["background:="] = writer_kitty_background_823;
          reader_kitty_background_823.confidential = true;
          writer_kitty_background_823.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 190
          var string824 = new GraceString("black");
          obj640.data["backgroundColour"] = string824;
          var reader_kitty_backgroundColour_825 = function() {
            return this.data["backgroundColour"];
          }
          obj640.methods["backgroundColour"] = reader_kitty_backgroundColour_825;
          obj640.data["backgroundColour"] = string824;
          var writer_kitty_backgroundColour_825 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj640.methods["backgroundColour:="] = writer_kitty_backgroundColour_825;
          reader_kitty_backgroundColour_825.confidential = true;
          writer_kitty_backgroundColour_825.confidential = true;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string824)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["document"] = undefined;
          var reader_kitty_document_826 = function() {
            return this.data["document"];
          }
          obj640.methods["document"] = reader_kitty_document_826;
          obj640.data["document"] = undefined;
          var writer_kitty_document_826 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj640.methods["document:="] = writer_kitty_document_826;
          reader_kitty_document_826.confidential = true;
          writer_kitty_document_826.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_827 = function() {
            return this.data["backingCanvas"];
          }
          obj640.methods["backingCanvas"] = reader_kitty_backingCanvas_827;
          obj640.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_827 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj640.methods["backingCanvas:="] = writer_kitty_backingCanvas_827;
          reader_kitty_backingCanvas_827.confidential = true;
          writer_kitty_backingCanvas_827.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["backingContext"] = undefined;
          var reader_kitty_backingContext_828 = function() {
            return this.data["backingContext"];
          }
          obj640.methods["backingContext"] = reader_kitty_backingContext_828;
          obj640.data["backingContext"] = undefined;
          var writer_kitty_backingContext_828 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj640.methods["backingContext:="] = writer_kitty_backingContext_828;
          reader_kitty_backingContext_828.confidential = true;
          writer_kitty_backingContext_828.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvas"] = undefined;
          var reader_kitty_canvas_829 = function() {
            return this.data["canvas"];
          }
          obj640.methods["canvas"] = reader_kitty_canvas_829;
          obj640.data["canvas"] = undefined;
          var writer_kitty_canvas_829 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj640.methods["canvas:="] = writer_kitty_canvas_829;
          reader_kitty_canvas_829.confidential = true;
          writer_kitty_canvas_829.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_830 = function() {
            return this.data["canvasWidth"];
          }
          obj640.methods["canvasWidth"] = reader_kitty_canvasWidth_830;
          obj640.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_830 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj640.methods["canvasWidth:="] = writer_kitty_canvasWidth_830;
          reader_kitty_canvasWidth_830.confidential = true;
          writer_kitty_canvasWidth_830.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_831 = function() {
            return this.data["canvasHeight"];
          }
          obj640.methods["canvasHeight"] = reader_kitty_canvasHeight_831;
          obj640.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_831 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj640.methods["canvasHeight:="] = writer_kitty_canvasHeight_831;
          reader_kitty_canvasHeight_831.confidential = true;
          writer_kitty_canvasHeight_831.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 201
          var call832 = callmethod(var_collections,"list", [0]);
          var call833 = callmethod(call832,"new", [0]);
          obj640.data["entities"] = call833;
          var reader_kitty_entities_834 = function() {
            return this.data["entities"];
          }
          obj640.methods["entities"] = reader_kitty_entities_834;
          obj640.data["entities"] = call833;
          var writer_kitty_entities_834 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj640.methods["entities:="] = writer_kitty_entities_834;
          reader_kitty_entities_834.confidential = true;
          writer_kitty_entities_834.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call833)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 203
          var bool835 = new GraceBoolean(false)
          obj640.data["isInit"] = bool835;
          var reader_kitty_isInit_836 = function() {
            return this.data["isInit"];
          }
          obj640.methods["isInit"] = reader_kitty_isInit_836;
          obj640.data["isInit"] = bool835;
          var writer_kitty_isInit_836 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj640.methods["isInit:="] = writer_kitty_isInit_836;
          reader_kitty_isInit_836.confidential = true;
          writer_kitty_isInit_836.confidential = true;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 203
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool835)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 204
          var bool837 = new GraceBoolean(false)
          obj640.data["isRunning"] = bool837;
          var reader_kitty_isRunning_838 = function() {
            return this.data["isRunning"];
          }
          obj640.methods["isRunning"] = reader_kitty_isRunning_838;
          obj640.data["isRunning"] = bool837;
          var writer_kitty_isRunning_838 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj640.methods["isRunning:="] = writer_kitty_isRunning_838;
          reader_kitty_isRunning_838.confidential = true;
          writer_kitty_isRunning_838.confidential = true;
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool837)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["mctx"] = undefined;
          var reader_kitty_mctx_839 = function() {
            return this.data["mctx"];
          }
          obj640.methods["mctx"] = reader_kitty_mctx_839;
          obj640.data["mctx"] = undefined;
          var writer_kitty_mctx_839 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj640.methods["mctx:="] = writer_kitty_mctx_839;
          reader_kitty_mctx_839.confidential = true;
          writer_kitty_mctx_839.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 210
          lineNumber = 208
          var call840 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj640.data["currentKeyDown"] = call840;
          var reader_kitty_currentKeyDown_841 = function() {
            return this.data["currentKeyDown"];
          }
          obj640.methods["currentKeyDown"] = reader_kitty_currentKeyDown_841;
          obj640.data["currentKeyDown"] = call840;
          var writer_kitty_currentKeyDown_841 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj640.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_841;
          reader_kitty_currentKeyDown_841.confidential = true;
          writer_kitty_currentKeyDown_841.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call840)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["ent"] = undefined;
          var reader_kitty_ent_842 = function() {
            return this.data["ent"];
          }
          obj640.methods["ent"] = reader_kitty_ent_842;
          obj640.data["ent"] = undefined;
          var writer_kitty_ent_842 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj640.methods["ent:="] = writer_kitty_ent_842;
          reader_kitty_ent_842.confidential = true;
          writer_kitty_ent_842.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 212
          onSelf = true;
          var call843 = callmethod(this, "init", [0]);
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          superDepth = origSuperDepth;
        }
        obj_init_640.apply(inheritingObject, []);
        return obj640
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj432.methods["new()object"] = func639;
    var func844 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 185
        var string845 = new GraceString("class KittyWorld");
        return string845
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func844.paramCounts = [
    ];
    func844.variableArities = [
    ];
    obj432.methods["asDebugString"] = func844;
    func844.definitionLine = 185;
    func844.definitionModule = "kitty";
    sourceObject = obj432;
    sourceObject = obj432;
    superDepth = origSuperDepth;
  }
  obj_init_432.apply(obj432, []);
  var var_KittyWorld = obj432;
  lineNumber = 336
  lineNumber = 345
  lineNumber = 360
  lineNumber = 365
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y()actions\n update\n move\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n width\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nfresh:Entity()x()y()actions:\n image\n tick\n strafe\n onDestroy\n awake\n setAction\n update\n start\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\nmethods-of:KittyWorld.new:\n update\n entities\n addEntity\n ent\n backingContext:=\n getContext\n init\n canvasHeight\n canvasWidth\n currentKeyDown:=\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n entities:=\n isRunning\n mctx\n isKeyDown\n ent:=\n document\n backingContext\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n setBackground\n backingCanvas\n isRunning:=\n document:=\n canvasWidth:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nfresh:World:\n update\n getContext\n addEntity\n ent\n backingContext:=\n entities\n backingContext\n canvasHeight\n canvasWidth\n currentKeyDown:=\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n entities:=\n isRunning\n mctx\n isKeyDown\n ent:=\n document\n init\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n setBackground\n backingCanvas\n isRunning:=\n document:=\n canvasWidth:=\nconstructors-of:KittyWorld:\n new\nfresh:Image()width()height:\n width\n draw\n imgTag\n height:=\n drawImage\n elements:=\n width:=\n height\n getTag\n elements\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image\n posY\n strafe\n onDestroy\n awake\n setAction\n update\n draw\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n tick\n start\n setImage\n rotation\n move\n image:=\n";
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
    "        newborn := self",
    "    }",
    "",
    "    // Called on game start",
    "    method start(block) {",
    "        block.apply",
    "    }",
    "",
    "    // Called by main game class",
    "    // method update {",
    "    //     action.update",
    "    // }",
    "    method tick() {",
    "        action.apply",
    "    }",
    "",
    "    method update(action') {",
    "        action := action'",
    "        print \"GUMMON\"",
    "    } ",
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
    "method Entity(tag')x(x')y(y')actions(actions') {",
    "    object {",
    "        inherits KittyEntity.new(tag', x', y')",
    "        actions'.apply",
    "    }",
    "} ",
    "",
    "method update(action') {",
    "    newborn.update(action')",
    "}",
    "",
    "method move(distance') {",
    "    newborn.move(distance')",
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
