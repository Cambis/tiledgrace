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
        obj9.data["tag"] = var_tag__39__;
        var reader_kitty_tag_11 = function() {
          return this.data["tag"];
        }
        reader_kitty_tag_11.def = true;
        reader_kitty_tag_11.confidential = true;
        obj9.methods["tag"] = reader_kitty_tag_11;
        lineNumber = 160;
        moduleName = "kitty";
        lineNumber = 159
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_tag__39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'tag' to be of type Unknown"))
        sourceObject = obj9;
        lineNumber = 160
        var call12 = callmethod(var_KittyEntity,"x()y()object", [1, 1, 1], var_x__39__, var_y__39__, this);
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
  func8.definitionLine = 157;
  func8.definitionModule = "kitty";
  var func13 = function(argcv) {
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
      var obj14 = Grace_allocObject();
      obj14.definitionModule = "kitty";
      obj14.definitionLine = 158;
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
        lineNumber = 159
        obj14.data["tag"] = var_tag__39__;
        var reader_kitty_tag_16 = function() {
          return this.data["tag"];
        }
        reader_kitty_tag_16.def = true;
        reader_kitty_tag_16.confidential = true;
        obj14.methods["tag"] = reader_kitty_tag_16;
        lineNumber = 160;
        moduleName = "kitty";
        lineNumber = 159
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_tag__39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'tag' to be of type Unknown"))
        sourceObject = obj14;
        lineNumber = 160
        var call17 = callmethod(var_KittyEntity,"x()y()object", [1, 1, 1], var_x__39__, var_y__39__, this);
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
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
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
      3,
    ];
    func58.variableArities = [
      false,
    ];
    obj56.methods["new"] = func58;
    func58.definitionLine = 22;
    func58.definitionModule = "kitty";
    var func107 = function(argcv) {
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
    obj56.methods["new()object"] = func107;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func161.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func161.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
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
              lineNumber = 86
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
          func164.definitionLine = 84;
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
          func167.definitionLine = 90;
          func167.definitionModule = "kitty";
          var func168 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func168.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
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
          func168.definitionLine = 95;
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
          func171.definitionLine = 100;
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
              lineNumber = 105
              lineNumber = 96
              lineNumber = 105
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
              lineNumber = 106
              lineNumber = 96
              lineNumber = 106
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
          func172.definitionLine = 104;
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
              lineNumber = 110
              lineNumber = 96
              lineNumber = 110
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
              lineNumber = 111
              lineNumber = 96
              lineNumber = 111
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
          func205.definitionLine = 109;
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
              lineNumber = 116
              lineNumber = 96
              lineNumber = 116
              lineNumber = 115
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
          func244.definitionLine = 114;
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
              lineNumber = 119
              var call251 = callmethod(var_ctx,"save", [0]);
              lineNumber = 120
              onSelf = true;
              var call252 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call253 = callmethod(this, "posY", [0]);
              var call254 = callmethod(var_ctx,"translate", [2], call252, call253);
              lineNumber = 121
              onSelf = true;
              var call255 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call256 = callmethod(this, "image", [0]);
              var call257 = callmethod(call256,"draw", [4], var_ctx, var_dx, var_dy, call255);
              lineNumber = 122
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
          func250.definitionLine = 118;
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
              lineNumber = 126
              lineNumber = 122
              lineNumber = 126
              var call260 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call261 = callmethod(call260, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call262 = callmethod(call261, "Image", [3], var_url__39__, new GraceNum(64), new GraceNum(64));
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
          func259.definitionLine = 125;
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
              lineNumber = 131
              lineNumber = 126
              lineNumber = 130
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
          func264.definitionLine = 129;
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
              lineNumber = 135
              lineNumber = 126
              lineNumber = 134
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
          func266.definitionLine = 133;
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
              lineNumber = 139
              lineNumber = 126
              lineNumber = 138
              onSelf = true;
              var call269 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 140
              lineNumber = 126
              lineNumber = 139
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
          func268.definitionLine = 137;
          func268.definitionModule = "kitty";
          var func271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 143
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
          func271.definitionLine = 142;
          func271.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 147
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
          func273.definitionLine = 146;
          func273.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
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
          func275.definitionLine = 150;
          func275.definitionModule = "kitty";
          sourceObject = obj162;
          lineNumber = 69
          obj162.data["posX"] = var_x__39__;
          var reader_kitty_posX_277 = function() {
            return this.data["posX"];
          }
          obj162.methods["posX"] = reader_kitty_posX_277;
          obj162.data["posX"] = var_x__39__;
          var writer_kitty_posX_277 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj162.methods["posX:="] = writer_kitty_posX_277;
          reader_kitty_posX_277.confidential = true;
          writer_kitty_posX_277.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 70
          obj162.data["posY"] = var_y__39__;
          var reader_kitty_posY_278 = function() {
            return this.data["posY"];
          }
          obj162.methods["posY"] = reader_kitty_posY_278;
          obj162.data["posY"] = var_y__39__;
          var writer_kitty_posY_278 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj162.methods["posY:="] = writer_kitty_posY_278;
          reader_kitty_posY_278.confidential = true;
          writer_kitty_posY_278.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 71
          obj162.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_279 = function() {
            return this.data["rotation"];
          }
          obj162.methods["rotation"] = reader_kitty_rotation_279;
          obj162.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_279 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj162.methods["rotation:="] = writer_kitty_rotation_279;
          reader_kitty_rotation_279.confidential = true;
          writer_kitty_rotation_279.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 73
          var obj280 = Grace_allocObject();
          obj280.definitionModule = "kitty";
          obj280.definitionLine = 73;
          obj280.outer = this;
          var reader_kitty_outer_281 = function() {
            return this.outer;
          }
          obj280.methods["outer"] = reader_kitty_outer_281;
          function obj_init_280() {
            var origSuperDepth = superDepth;
            superDepth = obj280;
            obj280.annotations = [];
            var func282 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func282.paramCounts[0])
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
            func282.paramCounts = [
              0,
            ];
            func282.variableArities = [
              false,
            ];
            obj280.methods["update"] = func282;
            func282.definitionLine = 74;
            func282.definitionModule = "kitty";
            sourceObject = obj280;
            superDepth = origSuperDepth;
          }
          obj_init_280.apply(obj280, []);
          obj162.data["action"] = obj280;
          var reader_kitty_action_283 = function() {
            return this.data["action"];
          }
          obj162.methods["action"] = reader_kitty_action_283;
          obj162.data["action"] = obj280;
          var writer_kitty_action_283 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj162.methods["action:="] = writer_kitty_action_283;
          reader_kitty_action_283.confidential = true;
          writer_kitty_action_283.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj280)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj162.mutable = true;
          sourceObject = obj162;
          obj162.data["image"] = undefined;
          var reader_kitty_image_284 = function() {
            return this.data["image"];
          }
          obj162.methods["image"] = reader_kitty_image_284;
          obj162.data["image"] = undefined;
          var writer_kitty_image_284 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj162.methods["image:="] = writer_kitty_image_284;
          reader_kitty_image_284.confidential = true;
          writer_kitty_image_284.confidential = true;
          obj162.mutable = true;
          sourceObject = obj162;
          lineNumber = 81
          onSelf = true;
          var call285 = callmethod(this, "awake", [0]);
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
    ];
    func161.variableArities = [
      false,
      false,
    ];
    obj159.methods["x()y"] = func161;
    func161.definitionLine = 65;
    func161.definitionModule = "kitty";
    var func286 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj287 = Grace_allocObject();
        obj287.definitionModule = "kitty";
        obj287.definitionLine = 65;
        var inho287 = inheritingObject;
        while (inho287.superobj) inho287 = inho287.superobj;
        inho287.superobj = obj287;
        obj287.data = inheritingObject.data;
        obj287.outer = this;
        var reader_kitty_outer_288 = function() {
          return this.outer;
        }
        obj287.methods["outer"] = reader_kitty_outer_288;
        function obj_init_287() {
          var origSuperDepth = superDepth;
          superDepth = obj287;
          obj287.annotations = [];
          var func289 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              var string290 = new GraceString("realyee.png");
              onSelf = true;
              var call291 = callmethod(this, "createImage", [1], string290);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func289.paramCounts = [
            0,
          ];
          func289.variableArities = [
            false,
          ];
          obj287.methods["awake"] = func289;
          func289.definitionLine = 84;
          func289.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func292.paramCounts[0])
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
          func292.paramCounts = [
            0,
          ];
          func292.variableArities = [
            false,
          ];
          obj287.methods["start"] = func292;
          func292.definitionLine = 90;
          func292.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              onSelf = true;
              var call294 = callmethod(this, "action", [0]);
              var call295 = callmethod(call294,"update", [0]);
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
          obj287.methods["update"] = func293;
          func293.definitionLine = 95;
          func293.definitionModule = "kitty";
          var func296 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func296.paramCounts[0])
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
          func296.paramCounts = [
            0,
          ];
          func296.variableArities = [
            false,
          ];
          obj287.methods["onDestroy"] = func296;
          func296.definitionLine = 100;
          func296.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              lineNumber = 96
              lineNumber = 105
              onSelf = true;
              var call300 = callmethod(this, "rotation", [0]);
              var prod302 = callmethod(call300, "*", [1], new GraceNum(3.14159));
              var quotient304 = callmethod(prod302, "/", [1], new GraceNum(180));
              var call305 = callmethod(var_math,"cos", [1], quotient304);
              var prod308 = callmethod(var_distance, "*", [1], call305);
              onSelf = true;
              var call310 = callmethod(this, "posX", [0]);
              var opresult312 = callmethod(call310, "+", [1], prod308);
              onSelf = true;
              var call313 = callmethod(this, "posX:=", [1], opresult312);
              lineNumber = 106
              lineNumber = 96
              lineNumber = 106
              onSelf = true;
              var call316 = callmethod(this, "rotation", [0]);
              var prod318 = callmethod(call316, "*", [1], new GraceNum(3.14159));
              var quotient320 = callmethod(prod318, "/", [1], new GraceNum(180));
              var call321 = callmethod(var_math,"sin", [1], quotient320);
              var prod324 = callmethod(var_distance, "*", [1], call321);
              onSelf = true;
              var call326 = callmethod(this, "posY", [0]);
              var opresult328 = callmethod(call326, "+", [1], prod324);
              onSelf = true;
              var call329 = callmethod(this, "posY:=", [1], opresult328);
              return call329
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            1,
          ];
          func297.variableArities = [
            false,
          ];
          obj287.methods["move"] = func297;
          func297.definitionLine = 104;
          func297.definitionModule = "kitty";
          var func330 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func330.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 96
              lineNumber = 110
              onSelf = true;
              var call333 = callmethod(this, "rotation", [0]);
              var opresult336 = callmethod(new GraceNum(90), "+", [1], call333);
              var prod338 = callmethod(opresult336, "*", [1], new GraceNum(3.14159));
              var quotient340 = callmethod(prod338, "/", [1], new GraceNum(180));
              var call341 = callmethod(var_math,"cos", [1], quotient340);
              var prod344 = callmethod(var_distance, "*", [1], call341);
              onSelf = true;
              var call346 = callmethod(this, "posX", [0]);
              var opresult348 = callmethod(call346, "+", [1], prod344);
              onSelf = true;
              var call349 = callmethod(this, "posX:=", [1], opresult348);
              lineNumber = 111
              lineNumber = 96
              lineNumber = 111
              onSelf = true;
              var call352 = callmethod(this, "rotation", [0]);
              var opresult355 = callmethod(new GraceNum(90), "+", [1], call352);
              var prod357 = callmethod(opresult355, "*", [1], new GraceNum(3.14159));
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
          func330.paramCounts = [
            1,
          ];
          func330.variableArities = [
            false,
          ];
          obj287.methods["strafe"] = func330;
          func330.definitionLine = 109;
          func330.definitionModule = "kitty";
          var func369 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func369.paramCounts[0])
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
              var call371 = callmethod(this, "rotation", [0]);
              var opresult373 = callmethod(call371, "+", [1], var_angle);
              onSelf = true;
              var call374 = callmethod(this, "rotation:=", [1], opresult373);
              return call374
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
          obj287.methods["turn"] = func369;
          func369.definitionLine = 114;
          func369.definitionModule = "kitty";
          var func375 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func375.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              var call376 = callmethod(var_ctx,"save", [0]);
              lineNumber = 120
              onSelf = true;
              var call377 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call378 = callmethod(this, "posY", [0]);
              var call379 = callmethod(var_ctx,"translate", [2], call377, call378);
              lineNumber = 121
              onSelf = true;
              var call380 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call381 = callmethod(this, "image", [0]);
              var call382 = callmethod(call381,"draw", [4], var_ctx, var_dx, var_dy, call380);
              lineNumber = 122
              var call383 = callmethod(var_ctx,"restore", [0]);
              return call383
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func375.paramCounts = [
            3,
          ];
          func375.variableArities = [
            false,
          ];
          obj287.methods["draw"] = func375;
          func375.definitionLine = 118;
          func375.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 122
              lineNumber = 126
              var call385 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call386 = callmethod(call385, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call387 = callmethod(call386, "Image", [3], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call388 = callmethod(this, "image:=", [1], call387);
              return call388
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func384.paramCounts = [
            1,
          ];
          func384.variableArities = [
            false,
          ];
          obj287.methods["createImage"] = func384;
          func384.definitionLine = 125;
          func384.definitionModule = "kitty";
          var func389 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func389.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 126
              lineNumber = 130
              onSelf = true;
              var call390 = callmethod(this, "image:=", [1], var_image__39__);
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
          obj287.methods["setImage"] = func389;
          func389.definitionLine = 129;
          func389.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func391.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 126
              lineNumber = 134
              onSelf = true;
              var call392 = callmethod(this, "action:=", [1], var_action__39__);
              return call392
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func391.paramCounts = [
            1,
          ];
          func391.variableArities = [
            false,
          ];
          obj287.methods["setAction"] = func391;
          func391.definitionLine = 133;
          func391.definitionModule = "kitty";
          var func393 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func393.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              lineNumber = 126
              lineNumber = 138
              onSelf = true;
              var call394 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 140
              lineNumber = 126
              lineNumber = 139
              onSelf = true;
              var call395 = callmethod(this, "posY:=", [1], var_y);
              return call395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func393.paramCounts = [
            2,
          ];
          func393.variableArities = [
            false,
          ];
          obj287.methods["setLocation"] = func393;
          func393.definitionLine = 137;
          func393.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              lineNumber = 143
              onSelf = true;
              var call397 = callmethod(this, "posX", [0]);
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
          obj287.methods["getX"] = func396;
          func396.definitionLine = 142;
          func396.definitionModule = "kitty";
          var func398 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              lineNumber = 147
              onSelf = true;
              var call399 = callmethod(this, "posY", [0]);
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
          obj287.methods["getY"] = func398;
          func398.definitionLine = 146;
          func398.definitionModule = "kitty";
          var func400 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func400.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              lineNumber = 151
              onSelf = true;
              var call401 = callmethod(this, "rotation", [0]);
              return call401
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func400.paramCounts = [
            0,
          ];
          func400.variableArities = [
            false,
          ];
          obj287.methods["getRotation"] = func400;
          func400.definitionLine = 150;
          func400.definitionModule = "kitty";
          sourceObject = obj287;
          lineNumber = 69
          obj287.data["posX"] = var_x__39__;
          var reader_kitty_posX_402 = function() {
            return this.data["posX"];
          }
          obj287.methods["posX"] = reader_kitty_posX_402;
          obj287.data["posX"] = var_x__39__;
          var writer_kitty_posX_402 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj287.methods["posX:="] = writer_kitty_posX_402;
          reader_kitty_posX_402.confidential = true;
          writer_kitty_posX_402.confidential = true;
          lineNumber = 70;
          moduleName = "kitty";
          lineNumber = 69
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj287.mutable = true;
          sourceObject = obj287;
          lineNumber = 70
          obj287.data["posY"] = var_y__39__;
          var reader_kitty_posY_403 = function() {
            return this.data["posY"];
          }
          obj287.methods["posY"] = reader_kitty_posY_403;
          obj287.data["posY"] = var_y__39__;
          var writer_kitty_posY_403 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj287.methods["posY:="] = writer_kitty_posY_403;
          reader_kitty_posY_403.confidential = true;
          writer_kitty_posY_403.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj287.mutable = true;
          sourceObject = obj287;
          lineNumber = 71
          obj287.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_404 = function() {
            return this.data["rotation"];
          }
          obj287.methods["rotation"] = reader_kitty_rotation_404;
          obj287.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_404 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj287.methods["rotation:="] = writer_kitty_rotation_404;
          reader_kitty_rotation_404.confidential = true;
          writer_kitty_rotation_404.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj287.mutable = true;
          sourceObject = obj287;
          lineNumber = 73
          var obj405 = Grace_allocObject();
          obj405.definitionModule = "kitty";
          obj405.definitionLine = 73;
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
            func407.definitionLine = 74;
            func407.definitionModule = "kitty";
            sourceObject = obj405;
            superDepth = origSuperDepth;
          }
          obj_init_405.apply(obj405, []);
          obj287.data["action"] = obj405;
          var reader_kitty_action_408 = function() {
            return this.data["action"];
          }
          obj287.methods["action"] = reader_kitty_action_408;
          obj287.data["action"] = obj405;
          var writer_kitty_action_408 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj287.methods["action:="] = writer_kitty_action_408;
          reader_kitty_action_408.confidential = true;
          writer_kitty_action_408.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj405)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj287.mutable = true;
          sourceObject = obj287;
          obj287.data["image"] = undefined;
          var reader_kitty_image_409 = function() {
            return this.data["image"];
          }
          obj287.methods["image"] = reader_kitty_image_409;
          obj287.data["image"] = undefined;
          var writer_kitty_image_409 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj287.methods["image:="] = writer_kitty_image_409;
          reader_kitty_image_409.confidential = true;
          writer_kitty_image_409.confidential = true;
          obj287.mutable = true;
          sourceObject = obj287;
          lineNumber = 81
          onSelf = true;
          var call410 = callmethod(this, "awake", [0]);
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          sourceObject = obj287;
          superDepth = origSuperDepth;
        }
        obj_init_287.apply(inheritingObject, []);
        return obj287
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj159.methods["x()y()object"] = func286;
    var func411 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 65
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
    obj159.methods["asDebugString"] = func411;
    func411.definitionLine = 65;
    func411.definitionModule = "kitty";
    sourceObject = obj159;
    sourceObject = obj159;
    superDepth = origSuperDepth;
  }
  obj_init_159.apply(obj159, []);
  var var_KittyEntity = obj159;
  lineNumber = 157
  lineNumber = 165
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
  func413.definitionLine = 165;
  func413.definitionModule = "kitty";
  var obj414 = Grace_allocObject();
  obj414.definitionModule = "kitty";
  obj414.definitionLine = 165;
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
        obj417.definitionLine = 165;
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
              lineNumber = 201
              var if420 = var_done;
              lineNumber = 197
              onSelf = true;
              var call421 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call421)) {
                lineNumber = 199
                lineNumber = 198
                var bool422 = new GraceBoolean(false)
                return bool422
              }
              lineNumber = 202
              lineNumber = 165
              lineNumber = 201
              var call423 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call424 = callmethod(this, "document:=", [1], call423);
              lineNumber = 202
              lineNumber = 201
              lineNumber = 202
              var string425 = new GraceString("standard-canvas");
              onSelf = true;
              var call426 = callmethod(this, "document", [0]);
              var call427 = callmethod(call426,"getElementById", [1], string425);
              onSelf = true;
              var call428 = callmethod(this, "canvas:=", [1], call427);
              lineNumber = 204
              lineNumber = 201
              lineNumber = 203
              onSelf = true;
              var call429 = callmethod(this, "canvas", [0]);
              var call430 = callmethod(call429,"width", [0]);
              onSelf = true;
              var call431 = callmethod(this, "canvasWidth:=", [1], call430);
              lineNumber = 207
              lineNumber = 203
              lineNumber = 204
              onSelf = true;
              var call432 = callmethod(this, "canvas", [0]);
              var call433 = callmethod(call432,"height", [0]);
              onSelf = true;
              var call434 = callmethod(this, "canvasHeight:=", [1], call433);
              lineNumber = 219
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
              block435.className = 'block<kitty:219>';
              block435.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                lineNumber = 209
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
                lineNumber = 214;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 218
                var if466 = var_done;
                lineNumber = 214
                var opresult469 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call472 = callmethod(this, "canvasWidth", [0]);
                var diff474 = callmethod(call472, "-", [1], new GraceNum(20));
                var opresult477 = callmethod(var_x, ">", [1], diff474);
                var opresult479 = callmethod(opresult477, "&&", [1], opresult469);
                if (Grace_isTrue(opresult479)) {
                  lineNumber = 215
                  var call480 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 216
                  onSelf = true;
                  var call481 = callmethod(this, "stop", [0]);
                  if466 = call481;
                }
                return if466;
              };
              var_mouseDownListener = block435;
              lineNumber = 219
              var string482 = new GraceString("mousedown");
              onSelf = true;
              var call483 = callmethod(this, "canvas", [0]);
              var call484 = callmethod(call483,"addEventListener", [2], string482, var_mouseDownListener);
              lineNumber = 229
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
              block485.className = 'block<kitty:229>';
              block485.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 227
                var if486 = var_done;
                lineNumber = 224
                var call488 = callmethod(var_ev,"keyCode", [0]);
                var opresult490 = callmethod(call488, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult490)) {
                  lineNumber = 225
                  onSelf = true;
                  var call491 = callmethod(this, "stop", [0]);
                  if486 = call491;
                }
                lineNumber = 228
                lineNumber = 224
                lineNumber = 227
                var call492 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call493 = callmethod(this, "currentKeyDown:=", [1], call492);
                return call493;
              };
              var_keyDownListener = block485;
              lineNumber = 229
              var string494 = new GraceString("keydown");
              onSelf = true;
              var call495 = callmethod(this, "document", [0]);
              var call496 = callmethod(call495,"addEventListener", [2], string494, var_keyDownListener);
              lineNumber = 235
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
              block497.className = 'block<kitty:235>';
              block497.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 227
                lineNumber = 234
                lineNumber = 233
                var call498 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call499 = callmethod(this, "currentKeyDown:=", [1], call498);
                return call499;
              };
              var_keyUpListener = block497;
              lineNumber = 235
              var string500 = new GraceString("keyup");
              onSelf = true;
              var call501 = callmethod(this, "document", [0]);
              var call502 = callmethod(call501,"addEventListener", [2], string500, var_keyUpListener);
              lineNumber = 237
              lineNumber = 227
              lineNumber = 237
              var string503 = new GraceString("canvas");
              var call504 = callmethod(var_dom,"document", [0]);
              var call505 = callmethod(call504,"createElement", [1], string503);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas:=", [1], call505);
              lineNumber = 239
              lineNumber = 237
              lineNumber = 238
              onSelf = true;
              var call507 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call508 = callmethod(this, "backingCanvas", [0]);
              var call509 = callmethod(call508,"height:=", [1], call507);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call510 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call511 = callmethod(this, "backingCanvas", [0]);
              var call512 = callmethod(call511,"width:=", [1], call510);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 240
              var string513 = new GraceString("2d");
              onSelf = true;
              var call514 = callmethod(this, "backingCanvas", [0]);
              var call515 = callmethod(call514,"getContext", [1], string513);
              onSelf = true;
              var call516 = callmethod(this, "backingContext:=", [1], call515);
              lineNumber = 241
              lineNumber = 237
              lineNumber = 241
              var string517 = new GraceString("2d");
              onSelf = true;
              var call518 = callmethod(this, "canvas", [0]);
              var call519 = callmethod(call518,"getContext", [1], string517);
              onSelf = true;
              var call520 = callmethod(this, "mctx:=", [1], call519);
              lineNumber = 244
              var string521 = new GraceString("doggo.jpg");
              onSelf = true;
              var call522 = callmethod(this, "setBackground", [1], string521);
              lineNumber = 252
              lineNumber = 237
              lineNumber = 246
              var bool523 = new GraceBoolean(true)
              onSelf = true;
              var call524 = callmethod(this, "isInit:=", [1], bool523);
              return call524
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
          func419.definitionLine = 193;
          func419.definitionModule = "kitty";
          var func525 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func525.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 237
              lineNumber = 257
              var bool526 = new GraceBoolean(true)
              onSelf = true;
              var call527 = callmethod(this, "isRunning:=", [1], bool526);
              lineNumber = 258
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
              block528.className = 'block<kitty:258>';
              block528.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call529 = callmethod(this, "isRunning", [0]);
                return call529;
              };
              lineNumber = 262
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
              block530.className = 'block<kitty:262>';
              block530.real = function(
              ) {
                sourceObject = this;
                lineNumber = 259
                onSelf = true;
                var call531 = callmethod(this, "update", [0]);
                return call531;
              };
              lineNumber = 258
              var call532 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block528, new GraceNum(10), block530);
              return call532
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func525.paramCounts = [
            0,
          ];
          func525.variableArities = [
            false,
          ];
          obj417.methods["start"] = func525;
          func525.definitionLine = 255;
          func525.definitionModule = "kitty";
          var func533 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func533.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 237
              lineNumber = 270
              onSelf = true;
              var call534 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call535 = callmethod(this, "mctx", [0]);
              var call536 = callmethod(call535,"fillStyle:=", [1], call534);
              lineNumber = 271
              onSelf = true;
              var call537 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call538 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call539 = callmethod(this, "mctx", [0]);
              var call540 = callmethod(call539,"fillRect", [4], new GraceNum(0), new GraceNum(0), call537, call538);
              lineNumber = 272
              onSelf = true;
              var call541 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call542 = callmethod(this, "mctx", [0]);
              var call543 = callmethod(call542,"drawImage", [3], call541, new GraceNum(0), new GraceNum(0));
              lineNumber = 273
              onSelf = true;
              var call544 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call546 = callmethod(this, "canvasWidth", [0]);
              var quotient548 = callmethod(call546, "/", [1], new GraceNum(2));
              onSelf = true;
              var call550 = callmethod(this, "canvasHeight", [0]);
              var quotient552 = callmethod(call550, "/", [1], new GraceNum(2));
              onSelf = true;
              var call553 = callmethod(this, "background", [0]);
              var call554 = callmethod(call553,"draw", [4], call544, quotient548, quotient552, new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call555 = callmethod(this, "entities", [0]);
              lineNumber = 282
              var block556 = Grace_allocObject();
              block556.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block556.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block556.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block556.methods["match"] = GraceBlock_match;
              block556.methods["prefix?"] = GraceBlock_lift;
              block556.receiver = this;
              block556.className = 'block<kitty:282>';
              block556.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 277
                var call557 = callmethod(var_entity,"update", [0]);
                lineNumber = 278
                onSelf = true;
                var call558 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call560 = callmethod(this, "canvasWidth", [0]);
                var quotient562 = callmethod(call560, "/", [1], new GraceNum(2));
                onSelf = true;
                var call564 = callmethod(this, "canvasHeight", [0]);
                var quotient566 = callmethod(call564, "/", [1], new GraceNum(2));
                var call567 = callmethod(var_entity,"draw", [3], call558, quotient562, quotient566);
                return call567;
              };
              var call568 = callmethod(Grace_prelude,"for()do", [1, 1], call555, block556);
              return call568
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func533.paramCounts = [
            0,
          ];
          func533.variableArities = [
            false,
          ];
          obj417.methods["update"] = func533;
          func533.definitionLine = 265;
          func533.definitionModule = "kitty";
          var func569 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func569.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              var string570 = new GraceString("WORLD STOPPING...");
              var call571 = Grace_print(string570);
              lineNumber = 287
              lineNumber = 277
              lineNumber = 286
              var bool572 = new GraceBoolean(false)
              onSelf = true;
              var call573 = callmethod(this, "isRunning:=", [1], bool572);
              lineNumber = 287
              var string574 = new GraceString("mousedown");
              onSelf = true;
              var call575 = callmethod(this, "canvas", [0]);
              var call576 = callmethod(call575,"removeEventListener", [2], string574, var_mouseDownListener);
              lineNumber = 288
              var string577 = new GraceString("keydown");
              onSelf = true;
              var call578 = callmethod(this, "document", [0]);
              var call579 = callmethod(call578,"removeEventListener", [2], string577, var_keyDownListener);
              lineNumber = 289
              var string580 = new GraceString("keyup");
              onSelf = true;
              var call581 = callmethod(this, "document", [0]);
              var call582 = callmethod(call581,"removeEventListener", [2], string580, var_keyUpListener);
              return call582
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func569.paramCounts = [
            0,
          ];
          func569.variableArities = [
            false,
          ];
          obj417.methods["stop"] = func569;
          func569.definitionLine = 284;
          func569.definitionModule = "kitty";
          var func583 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 294
              lineNumber = 293
              onSelf = true;
              var call584 = callmethod(this, "currentKeyDown", [0]);
              var opresult587 = callmethod(var_key, "==", [1], call584);
              return opresult587
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func583.paramCounts = [
            1,
          ];
          func583.variableArities = [
            false,
          ];
          obj417.methods["isKeyDown"] = func583;
          func583.definitionLine = 292;
          func583.definitionModule = "kitty";
          var func588 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func588.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 277
              lineNumber = 297
              onSelf = true;
              var call589 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call590 = callmethod(this, "canvasHeight", [0]);
              var call591 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call592 = callmethod(call591, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call593 = callmethod(call592, "Image", [3], var_background__39__, call589, call590);
              onSelf = true;
              var call594 = callmethod(this, "background:=", [1], call593);
              return call594
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
          obj417.methods["setBackground"] = func588;
          func588.definitionLine = 296;
          func588.definitionModule = "kitty";
          var func595 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func595.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              onSelf = true;
              var call596 = callmethod(this, "entities", [0]);
              var call597 = callmethod(call596,"push", [1], var_e);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func595.paramTypes = [];
          func595.paramTypes.push([]);
          func595.paramCounts = [
            1,
          ];
          func595.variableArities = [
            false,
          ];
          obj417.methods["addEntity"] = func595;
          func595.definitionLine = 300;
          func595.definitionModule = "kitty";
          var func598 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 305
              onSelf = true;
              var call599 = callmethod(this, "mctx", [0]);
              return call599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func598.paramCounts = [
            0,
          ];
          func598.variableArities = [
            false,
          ];
          obj417.methods["getContext"] = func598;
          func598.definitionLine = 304;
          func598.definitionModule = "kitty";
          sourceObject = obj417;
          obj417.data["background"] = undefined;
          var reader_kitty_background_600 = function() {
            return this.data["background"];
          }
          obj417.methods["background"] = reader_kitty_background_600;
          obj417.data["background"] = undefined;
          var writer_kitty_background_600 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj417.methods["background:="] = writer_kitty_background_600;
          reader_kitty_background_600.confidential = true;
          writer_kitty_background_600.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 170
          var string601 = new GraceString("black");
          obj417.data["backgroundColour"] = string601;
          var reader_kitty_backgroundColour_602 = function() {
            return this.data["backgroundColour"];
          }
          obj417.methods["backgroundColour"] = reader_kitty_backgroundColour_602;
          obj417.data["backgroundColour"] = string601;
          var writer_kitty_backgroundColour_602 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj417.methods["backgroundColour:="] = writer_kitty_backgroundColour_602;
          reader_kitty_backgroundColour_602.confidential = true;
          writer_kitty_backgroundColour_602.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string601)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["document"] = undefined;
          var reader_kitty_document_603 = function() {
            return this.data["document"];
          }
          obj417.methods["document"] = reader_kitty_document_603;
          obj417.data["document"] = undefined;
          var writer_kitty_document_603 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj417.methods["document:="] = writer_kitty_document_603;
          reader_kitty_document_603.confidential = true;
          writer_kitty_document_603.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_604 = function() {
            return this.data["backingCanvas"];
          }
          obj417.methods["backingCanvas"] = reader_kitty_backingCanvas_604;
          obj417.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_604 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj417.methods["backingCanvas:="] = writer_kitty_backingCanvas_604;
          reader_kitty_backingCanvas_604.confidential = true;
          writer_kitty_backingCanvas_604.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["backingContext"] = undefined;
          var reader_kitty_backingContext_605 = function() {
            return this.data["backingContext"];
          }
          obj417.methods["backingContext"] = reader_kitty_backingContext_605;
          obj417.data["backingContext"] = undefined;
          var writer_kitty_backingContext_605 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj417.methods["backingContext:="] = writer_kitty_backingContext_605;
          reader_kitty_backingContext_605.confidential = true;
          writer_kitty_backingContext_605.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvas"] = undefined;
          var reader_kitty_canvas_606 = function() {
            return this.data["canvas"];
          }
          obj417.methods["canvas"] = reader_kitty_canvas_606;
          obj417.data["canvas"] = undefined;
          var writer_kitty_canvas_606 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj417.methods["canvas:="] = writer_kitty_canvas_606;
          reader_kitty_canvas_606.confidential = true;
          writer_kitty_canvas_606.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_607 = function() {
            return this.data["canvasWidth"];
          }
          obj417.methods["canvasWidth"] = reader_kitty_canvasWidth_607;
          obj417.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_607 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj417.methods["canvasWidth:="] = writer_kitty_canvasWidth_607;
          reader_kitty_canvasWidth_607.confidential = true;
          writer_kitty_canvasWidth_607.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_608 = function() {
            return this.data["canvasHeight"];
          }
          obj417.methods["canvasHeight"] = reader_kitty_canvasHeight_608;
          obj417.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_608 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj417.methods["canvasHeight:="] = writer_kitty_canvasHeight_608;
          reader_kitty_canvasHeight_608.confidential = true;
          writer_kitty_canvasHeight_608.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 181
          var call609 = callmethod(var_collections,"list", [0]);
          var call610 = callmethod(call609,"new", [0]);
          obj417.data["entities"] = call610;
          var reader_kitty_entities_611 = function() {
            return this.data["entities"];
          }
          obj417.methods["entities"] = reader_kitty_entities_611;
          obj417.data["entities"] = call610;
          var writer_kitty_entities_611 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj417.methods["entities:="] = writer_kitty_entities_611;
          reader_kitty_entities_611.confidential = true;
          writer_kitty_entities_611.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 183
          var bool612 = new GraceBoolean(false)
          obj417.data["isInit"] = bool612;
          var reader_kitty_isInit_613 = function() {
            return this.data["isInit"];
          }
          obj417.methods["isInit"] = reader_kitty_isInit_613;
          obj417.data["isInit"] = bool612;
          var writer_kitty_isInit_613 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj417.methods["isInit:="] = writer_kitty_isInit_613;
          reader_kitty_isInit_613.confidential = true;
          writer_kitty_isInit_613.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool612)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 184
          var bool614 = new GraceBoolean(false)
          obj417.data["isRunning"] = bool614;
          var reader_kitty_isRunning_615 = function() {
            return this.data["isRunning"];
          }
          obj417.methods["isRunning"] = reader_kitty_isRunning_615;
          obj417.data["isRunning"] = bool614;
          var writer_kitty_isRunning_615 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj417.methods["isRunning:="] = writer_kitty_isRunning_615;
          reader_kitty_isRunning_615.confidential = true;
          writer_kitty_isRunning_615.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool614)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          obj417.data["mctx"] = undefined;
          var reader_kitty_mctx_616 = function() {
            return this.data["mctx"];
          }
          obj417.methods["mctx"] = reader_kitty_mctx_616;
          obj417.data["mctx"] = undefined;
          var writer_kitty_mctx_616 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj417.methods["mctx:="] = writer_kitty_mctx_616;
          reader_kitty_mctx_616.confidential = true;
          writer_kitty_mctx_616.confidential = true;
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 190
          lineNumber = 188
          var call617 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj417.data["currentKeyDown"] = call617;
          var reader_kitty_currentKeyDown_618 = function() {
            return this.data["currentKeyDown"];
          }
          obj417.methods["currentKeyDown"] = reader_kitty_currentKeyDown_618;
          obj417.data["currentKeyDown"] = call617;
          var writer_kitty_currentKeyDown_618 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj417.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_618;
          reader_kitty_currentKeyDown_618.confidential = true;
          writer_kitty_currentKeyDown_618.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call617)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj417.mutable = true;
          sourceObject = obj417;
          lineNumber = 190
          onSelf = true;
          var call619 = callmethod(this, "init", [0]);
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
    func416.definitionLine = 165;
    func416.definitionModule = "kitty";
    var func620 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj621 = Grace_allocObject();
        obj621.definitionModule = "kitty";
        obj621.definitionLine = 165;
        var inho621 = inheritingObject;
        while (inho621.superobj) inho621 = inho621.superobj;
        inho621.superobj = obj621;
        obj621.data = inheritingObject.data;
        obj621.outer = this;
        var reader_kitty_outer_622 = function() {
          return this.outer;
        }
        obj621.methods["outer"] = reader_kitty_outer_622;
        function obj_init_621() {
          var origSuperDepth = superDepth;
          superDepth = obj621;
          obj621.annotations = [];
          var func623 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 201
              var if624 = var_done;
              lineNumber = 197
              onSelf = true;
              var call625 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call625)) {
                lineNumber = 199
                lineNumber = 198
                var bool626 = new GraceBoolean(false)
                return bool626
              }
              lineNumber = 202
              lineNumber = 181
              lineNumber = 201
              var call627 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call628 = callmethod(this, "document:=", [1], call627);
              lineNumber = 202
              lineNumber = 201
              lineNumber = 202
              var string629 = new GraceString("standard-canvas");
              onSelf = true;
              var call630 = callmethod(this, "document", [0]);
              var call631 = callmethod(call630,"getElementById", [1], string629);
              onSelf = true;
              var call632 = callmethod(this, "canvas:=", [1], call631);
              lineNumber = 204
              lineNumber = 201
              lineNumber = 203
              onSelf = true;
              var call633 = callmethod(this, "canvas", [0]);
              var call634 = callmethod(call633,"width", [0]);
              onSelf = true;
              var call635 = callmethod(this, "canvasWidth:=", [1], call634);
              lineNumber = 207
              lineNumber = 203
              lineNumber = 204
              onSelf = true;
              var call636 = callmethod(this, "canvas", [0]);
              var call637 = callmethod(call636,"height", [0]);
              onSelf = true;
              var call638 = callmethod(this, "canvasHeight:=", [1], call637);
              lineNumber = 219
              var block639 = Grace_allocObject();
              block639.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block639.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block639.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block639.methods["match"] = GraceBlock_match;
              block639.methods["prefix?"] = GraceBlock_lift;
              block639.receiver = this;
              block639.className = 'block<kitty:219>';
              block639.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                lineNumber = 209
                onSelf = true;
                var call640 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call642 = callmethod(this, "canvas", [0]);
                var call643 = callmethod(call642,"offsetWidth", [0]);
                onSelf = true;
                var call645 = callmethod(this, "canvas", [0]);
                var call646 = callmethod(call645,"offsetLeft", [0]);
                var call648 = callmethod(var_ev,"clientX", [0]);
                var diff650 = callmethod(call648, "-", [1], call646);
                var quotient652 = callmethod(diff650, "/", [1], call643);
                var prod654 = callmethod(quotient652, "*", [1], call640);
                var var_x = prod654;
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
                var call655 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call657 = callmethod(this, "canvas", [0]);
                var call658 = callmethod(call657,"offsetHeight", [0]);
                onSelf = true;
                var call660 = callmethod(this, "canvas", [0]);
                var call661 = callmethod(call660,"offsetTop", [0]);
                var call663 = callmethod(var_ev,"clientY", [0]);
                var diff665 = callmethod(call663, "-", [1], call661);
                var quotient667 = callmethod(diff665, "/", [1], call658);
                var prod669 = callmethod(quotient667, "*", [1], call655);
                var var_y = prod669;
                lineNumber = 214;
                moduleName = "kitty";
                lineNumber = 210
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 218
                var if670 = var_done;
                lineNumber = 214
                var opresult673 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call676 = callmethod(this, "canvasWidth", [0]);
                var diff678 = callmethod(call676, "-", [1], new GraceNum(20));
                var opresult681 = callmethod(var_x, ">", [1], diff678);
                var opresult683 = callmethod(opresult681, "&&", [1], opresult673);
                if (Grace_isTrue(opresult683)) {
                  lineNumber = 215
                  var call684 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 216
                  onSelf = true;
                  var call685 = callmethod(this, "stop", [0]);
                  if670 = call685;
                }
                return if670;
              };
              var_mouseDownListener = block639;
              lineNumber = 219
              var string686 = new GraceString("mousedown");
              onSelf = true;
              var call687 = callmethod(this, "canvas", [0]);
              var call688 = callmethod(call687,"addEventListener", [2], string686, var_mouseDownListener);
              lineNumber = 229
              var block689 = Grace_allocObject();
              block689.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block689.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block689.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block689.methods["match"] = GraceBlock_match;
              block689.methods["prefix?"] = GraceBlock_lift;
              block689.receiver = this;
              block689.className = 'block<kitty:229>';
              block689.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 227
                var if690 = var_done;
                lineNumber = 224
                var call692 = callmethod(var_ev,"keyCode", [0]);
                var opresult694 = callmethod(call692, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult694)) {
                  lineNumber = 225
                  onSelf = true;
                  var call695 = callmethod(this, "stop", [0]);
                  if690 = call695;
                }
                lineNumber = 228
                lineNumber = 224
                lineNumber = 227
                var call696 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call697 = callmethod(this, "currentKeyDown:=", [1], call696);
                return call697;
              };
              var_keyDownListener = block689;
              lineNumber = 229
              var string698 = new GraceString("keydown");
              onSelf = true;
              var call699 = callmethod(this, "document", [0]);
              var call700 = callmethod(call699,"addEventListener", [2], string698, var_keyDownListener);
              lineNumber = 235
              var block701 = Grace_allocObject();
              block701.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block701.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block701.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block701.methods["match"] = GraceBlock_match;
              block701.methods["prefix?"] = GraceBlock_lift;
              block701.receiver = this;
              block701.className = 'block<kitty:235>';
              block701.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 227
                lineNumber = 234
                lineNumber = 233
                var call702 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call703 = callmethod(this, "currentKeyDown:=", [1], call702);
                return call703;
              };
              var_keyUpListener = block701;
              lineNumber = 235
              var string704 = new GraceString("keyup");
              onSelf = true;
              var call705 = callmethod(this, "document", [0]);
              var call706 = callmethod(call705,"addEventListener", [2], string704, var_keyUpListener);
              lineNumber = 237
              lineNumber = 227
              lineNumber = 237
              var string707 = new GraceString("canvas");
              var call708 = callmethod(var_dom,"document", [0]);
              var call709 = callmethod(call708,"createElement", [1], string707);
              onSelf = true;
              var call710 = callmethod(this, "backingCanvas:=", [1], call709);
              lineNumber = 239
              lineNumber = 237
              lineNumber = 238
              onSelf = true;
              var call711 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call712 = callmethod(this, "backingCanvas", [0]);
              var call713 = callmethod(call712,"height:=", [1], call711);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call714 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call715 = callmethod(this, "backingCanvas", [0]);
              var call716 = callmethod(call715,"width:=", [1], call714);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 240
              var string717 = new GraceString("2d");
              onSelf = true;
              var call718 = callmethod(this, "backingCanvas", [0]);
              var call719 = callmethod(call718,"getContext", [1], string717);
              onSelf = true;
              var call720 = callmethod(this, "backingContext:=", [1], call719);
              lineNumber = 241
              lineNumber = 237
              lineNumber = 241
              var string721 = new GraceString("2d");
              onSelf = true;
              var call722 = callmethod(this, "canvas", [0]);
              var call723 = callmethod(call722,"getContext", [1], string721);
              onSelf = true;
              var call724 = callmethod(this, "mctx:=", [1], call723);
              lineNumber = 244
              var string725 = new GraceString("doggo.jpg");
              onSelf = true;
              var call726 = callmethod(this, "setBackground", [1], string725);
              lineNumber = 252
              lineNumber = 237
              lineNumber = 246
              var bool727 = new GraceBoolean(true)
              onSelf = true;
              var call728 = callmethod(this, "isInit:=", [1], bool727);
              return call728
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func623.paramCounts = [
            0,
          ];
          func623.variableArities = [
            false,
          ];
          obj621.methods["init"] = func623;
          func623.definitionLine = 193;
          func623.definitionModule = "kitty";
          var func729 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func729.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 237
              lineNumber = 257
              var bool730 = new GraceBoolean(true)
              onSelf = true;
              var call731 = callmethod(this, "isRunning:=", [1], bool730);
              lineNumber = 258
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
              block732.className = 'block<kitty:258>';
              block732.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call733 = callmethod(this, "isRunning", [0]);
                return call733;
              };
              lineNumber = 262
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
              block734.className = 'block<kitty:262>';
              block734.real = function(
              ) {
                sourceObject = this;
                lineNumber = 259
                onSelf = true;
                var call735 = callmethod(this, "update", [0]);
                return call735;
              };
              lineNumber = 258
              var call736 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block732, new GraceNum(10), block734);
              return call736
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func729.paramCounts = [
            0,
          ];
          func729.variableArities = [
            false,
          ];
          obj621.methods["start"] = func729;
          func729.definitionLine = 255;
          func729.definitionModule = "kitty";
          var func737 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func737.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 237
              lineNumber = 270
              onSelf = true;
              var call738 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call739 = callmethod(this, "mctx", [0]);
              var call740 = callmethod(call739,"fillStyle:=", [1], call738);
              lineNumber = 271
              onSelf = true;
              var call741 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call742 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call743 = callmethod(this, "mctx", [0]);
              var call744 = callmethod(call743,"fillRect", [4], new GraceNum(0), new GraceNum(0), call741, call742);
              lineNumber = 272
              onSelf = true;
              var call745 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call746 = callmethod(this, "mctx", [0]);
              var call747 = callmethod(call746,"drawImage", [3], call745, new GraceNum(0), new GraceNum(0));
              lineNumber = 273
              onSelf = true;
              var call748 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call750 = callmethod(this, "canvasWidth", [0]);
              var quotient752 = callmethod(call750, "/", [1], new GraceNum(2));
              onSelf = true;
              var call754 = callmethod(this, "canvasHeight", [0]);
              var quotient756 = callmethod(call754, "/", [1], new GraceNum(2));
              onSelf = true;
              var call757 = callmethod(this, "background", [0]);
              var call758 = callmethod(call757,"draw", [4], call748, quotient752, quotient756, new GraceNum(0));
              lineNumber = 276
              onSelf = true;
              var call759 = callmethod(this, "entities", [0]);
              lineNumber = 282
              var block760 = Grace_allocObject();
              block760.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block760.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block760.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block760.methods["match"] = GraceBlock_match;
              block760.methods["prefix?"] = GraceBlock_lift;
              block760.receiver = this;
              block760.className = 'block<kitty:282>';
              block760.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 277
                var call761 = callmethod(var_entity,"update", [0]);
                lineNumber = 278
                onSelf = true;
                var call762 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call764 = callmethod(this, "canvasWidth", [0]);
                var quotient766 = callmethod(call764, "/", [1], new GraceNum(2));
                onSelf = true;
                var call768 = callmethod(this, "canvasHeight", [0]);
                var quotient770 = callmethod(call768, "/", [1], new GraceNum(2));
                var call771 = callmethod(var_entity,"draw", [3], call762, quotient766, quotient770);
                return call771;
              };
              var call772 = callmethod(Grace_prelude,"for()do", [1, 1], call759, block760);
              return call772
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func737.paramCounts = [
            0,
          ];
          func737.variableArities = [
            false,
          ];
          obj621.methods["update"] = func737;
          func737.definitionLine = 265;
          func737.definitionModule = "kitty";
          var func773 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func773.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              var string774 = new GraceString("WORLD STOPPING...");
              var call775 = Grace_print(string774);
              lineNumber = 287
              lineNumber = 277
              lineNumber = 286
              var bool776 = new GraceBoolean(false)
              onSelf = true;
              var call777 = callmethod(this, "isRunning:=", [1], bool776);
              lineNumber = 287
              var string778 = new GraceString("mousedown");
              onSelf = true;
              var call779 = callmethod(this, "canvas", [0]);
              var call780 = callmethod(call779,"removeEventListener", [2], string778, var_mouseDownListener);
              lineNumber = 288
              var string781 = new GraceString("keydown");
              onSelf = true;
              var call782 = callmethod(this, "document", [0]);
              var call783 = callmethod(call782,"removeEventListener", [2], string781, var_keyDownListener);
              lineNumber = 289
              var string784 = new GraceString("keyup");
              onSelf = true;
              var call785 = callmethod(this, "document", [0]);
              var call786 = callmethod(call785,"removeEventListener", [2], string784, var_keyUpListener);
              return call786
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func773.paramCounts = [
            0,
          ];
          func773.variableArities = [
            false,
          ];
          obj621.methods["stop"] = func773;
          func773.definitionLine = 284;
          func773.definitionModule = "kitty";
          var func787 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func787.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 294
              lineNumber = 293
              onSelf = true;
              var call788 = callmethod(this, "currentKeyDown", [0]);
              var opresult791 = callmethod(var_key, "==", [1], call788);
              return opresult791
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func787.paramCounts = [
            1,
          ];
          func787.variableArities = [
            false,
          ];
          obj621.methods["isKeyDown"] = func787;
          func787.definitionLine = 292;
          func787.definitionModule = "kitty";
          var func792 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func792.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 297
              lineNumber = 277
              lineNumber = 297
              onSelf = true;
              var call793 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call794 = callmethod(this, "canvasHeight", [0]);
              var call795 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call796 = callmethod(call795, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call797 = callmethod(call796, "Image", [3], var_background__39__, call793, call794);
              onSelf = true;
              var call798 = callmethod(this, "background:=", [1], call797);
              return call798
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func792.paramCounts = [
            1,
          ];
          func792.variableArities = [
            false,
          ];
          obj621.methods["setBackground"] = func792;
          func792.definitionLine = 296;
          func792.definitionModule = "kitty";
          var func799 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func799.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 301
              onSelf = true;
              var call800 = callmethod(this, "entities", [0]);
              var call801 = callmethod(call800,"push", [1], var_e);
              return call801
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func799.paramTypes = [];
          func799.paramTypes.push([]);
          func799.paramCounts = [
            1,
          ];
          func799.variableArities = [
            false,
          ];
          obj621.methods["addEntity"] = func799;
          func799.definitionLine = 300;
          func799.definitionModule = "kitty";
          var func802 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func802.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 306
              lineNumber = 305
              onSelf = true;
              var call803 = callmethod(this, "mctx", [0]);
              return call803
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func802.paramCounts = [
            0,
          ];
          func802.variableArities = [
            false,
          ];
          obj621.methods["getContext"] = func802;
          func802.definitionLine = 304;
          func802.definitionModule = "kitty";
          sourceObject = obj621;
          obj621.data["background"] = undefined;
          var reader_kitty_background_804 = function() {
            return this.data["background"];
          }
          obj621.methods["background"] = reader_kitty_background_804;
          obj621.data["background"] = undefined;
          var writer_kitty_background_804 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj621.methods["background:="] = writer_kitty_background_804;
          reader_kitty_background_804.confidential = true;
          writer_kitty_background_804.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 170
          var string805 = new GraceString("black");
          obj621.data["backgroundColour"] = string805;
          var reader_kitty_backgroundColour_806 = function() {
            return this.data["backgroundColour"];
          }
          obj621.methods["backgroundColour"] = reader_kitty_backgroundColour_806;
          obj621.data["backgroundColour"] = string805;
          var writer_kitty_backgroundColour_806 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj621.methods["backgroundColour:="] = writer_kitty_backgroundColour_806;
          reader_kitty_backgroundColour_806.confidential = true;
          writer_kitty_backgroundColour_806.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string805)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["document"] = undefined;
          var reader_kitty_document_807 = function() {
            return this.data["document"];
          }
          obj621.methods["document"] = reader_kitty_document_807;
          obj621.data["document"] = undefined;
          var writer_kitty_document_807 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj621.methods["document:="] = writer_kitty_document_807;
          reader_kitty_document_807.confidential = true;
          writer_kitty_document_807.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_808 = function() {
            return this.data["backingCanvas"];
          }
          obj621.methods["backingCanvas"] = reader_kitty_backingCanvas_808;
          obj621.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_808 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj621.methods["backingCanvas:="] = writer_kitty_backingCanvas_808;
          reader_kitty_backingCanvas_808.confidential = true;
          writer_kitty_backingCanvas_808.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["backingContext"] = undefined;
          var reader_kitty_backingContext_809 = function() {
            return this.data["backingContext"];
          }
          obj621.methods["backingContext"] = reader_kitty_backingContext_809;
          obj621.data["backingContext"] = undefined;
          var writer_kitty_backingContext_809 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj621.methods["backingContext:="] = writer_kitty_backingContext_809;
          reader_kitty_backingContext_809.confidential = true;
          writer_kitty_backingContext_809.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["canvas"] = undefined;
          var reader_kitty_canvas_810 = function() {
            return this.data["canvas"];
          }
          obj621.methods["canvas"] = reader_kitty_canvas_810;
          obj621.data["canvas"] = undefined;
          var writer_kitty_canvas_810 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj621.methods["canvas:="] = writer_kitty_canvas_810;
          reader_kitty_canvas_810.confidential = true;
          writer_kitty_canvas_810.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_811 = function() {
            return this.data["canvasWidth"];
          }
          obj621.methods["canvasWidth"] = reader_kitty_canvasWidth_811;
          obj621.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_811 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj621.methods["canvasWidth:="] = writer_kitty_canvasWidth_811;
          reader_kitty_canvasWidth_811.confidential = true;
          writer_kitty_canvasWidth_811.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_812 = function() {
            return this.data["canvasHeight"];
          }
          obj621.methods["canvasHeight"] = reader_kitty_canvasHeight_812;
          obj621.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_812 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj621.methods["canvasHeight:="] = writer_kitty_canvasHeight_812;
          reader_kitty_canvasHeight_812.confidential = true;
          writer_kitty_canvasHeight_812.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 181
          var call813 = callmethod(var_collections,"list", [0]);
          var call814 = callmethod(call813,"new", [0]);
          obj621.data["entities"] = call814;
          var reader_kitty_entities_815 = function() {
            return this.data["entities"];
          }
          obj621.methods["entities"] = reader_kitty_entities_815;
          obj621.data["entities"] = call814;
          var writer_kitty_entities_815 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj621.methods["entities:="] = writer_kitty_entities_815;
          reader_kitty_entities_815.confidential = true;
          writer_kitty_entities_815.confidential = true;
          lineNumber = 183;
          moduleName = "kitty";
          lineNumber = 181
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call814)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 183
          var bool816 = new GraceBoolean(false)
          obj621.data["isInit"] = bool816;
          var reader_kitty_isInit_817 = function() {
            return this.data["isInit"];
          }
          obj621.methods["isInit"] = reader_kitty_isInit_817;
          obj621.data["isInit"] = bool816;
          var writer_kitty_isInit_817 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj621.methods["isInit:="] = writer_kitty_isInit_817;
          reader_kitty_isInit_817.confidential = true;
          writer_kitty_isInit_817.confidential = true;
          lineNumber = 184;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool816)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 184
          var bool818 = new GraceBoolean(false)
          obj621.data["isRunning"] = bool818;
          var reader_kitty_isRunning_819 = function() {
            return this.data["isRunning"];
          }
          obj621.methods["isRunning"] = reader_kitty_isRunning_819;
          obj621.data["isRunning"] = bool818;
          var writer_kitty_isRunning_819 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj621.methods["isRunning:="] = writer_kitty_isRunning_819;
          reader_kitty_isRunning_819.confidential = true;
          writer_kitty_isRunning_819.confidential = true;
          lineNumber = 186;
          moduleName = "kitty";
          lineNumber = 184
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool818)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj621.mutable = true;
          sourceObject = obj621;
          obj621.data["mctx"] = undefined;
          var reader_kitty_mctx_820 = function() {
            return this.data["mctx"];
          }
          obj621.methods["mctx"] = reader_kitty_mctx_820;
          obj621.data["mctx"] = undefined;
          var writer_kitty_mctx_820 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj621.methods["mctx:="] = writer_kitty_mctx_820;
          reader_kitty_mctx_820.confidential = true;
          writer_kitty_mctx_820.confidential = true;
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 190
          lineNumber = 188
          var call821 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj621.data["currentKeyDown"] = call821;
          var reader_kitty_currentKeyDown_822 = function() {
            return this.data["currentKeyDown"];
          }
          obj621.methods["currentKeyDown"] = reader_kitty_currentKeyDown_822;
          obj621.data["currentKeyDown"] = call821;
          var writer_kitty_currentKeyDown_822 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj621.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_822;
          reader_kitty_currentKeyDown_822.confidential = true;
          writer_kitty_currentKeyDown_822.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call821)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj621.mutable = true;
          sourceObject = obj621;
          lineNumber = 190
          onSelf = true;
          var call823 = callmethod(this, "init", [0]);
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          sourceObject = obj621;
          superDepth = origSuperDepth;
        }
        obj_init_621.apply(inheritingObject, []);
        return obj621
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj414.methods["new()object"] = func620;
    var func824 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 165
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
    obj414.methods["asDebugString"] = func824;
    func824.definitionLine = 165;
    func824.definitionModule = "kitty";
    sourceObject = obj414;
    sourceObject = obj414;
    superDepth = origSuperDepth;
  }
  obj_init_414.apply(obj414, []);
  var var_KittyWorld = obj414;
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
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\npath:\n kitty\nmethods-of:KittyEntity.x()y:\n draw\n setImage\n rotation\n rotation:=\n move\n setLocation\n getRotation\n setAction\n update\n strafe\n start\n createImage\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n awake\n onDestroy\n turn\n posX\n posY\nconfidential:\nfresh:Image:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\nfresh-methods:\n Image\n Entity()x()y\n World\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n setBackground\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingContext:=\n backingCanvas\n canvas:=\n backingContext\n background:=\n currentKeyDown\n isRunning:=\n addEntity\n isInit\n mctx:=\n entities:=\n isRunning\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n canvasWidth\n background\n backgroundColour\n stop\n isInit:=\n isKeyDown\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image\n KittyEntity\n Entity()x()y\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\nfresh:Entity()x()y:\n draw\n setImage\n rotation\n onDestroy\n move\n setLocation\n getRotation\n tag\n posX\n update\n strafe\n start\n createImage\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n turn\n rotation:=\n awake\n setAction\n posY\nmethods-of:KittyWorld.new:\n setBackground\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingContext:=\n backingCanvas\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n isRunning:=\n addEntity\n isInit\n mctx:=\n canvasWidth\n entities:=\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isRunning\n background\n backingContext\n stop\n isInit:=\n isKeyDown\nconstructors-of:KittyWorld:\n new\nconstructors-of:KittyEntity:\n x()y\n";
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
    "class KittyEntity.x(x')y(y') {",
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
    "        image := Image(url', 64, 64)",
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
    "method Entity(tag')x(x')y(y') {",
    "    object {",
    "        def tag = tag'",
    "        inherits KittyEntity.x(x')y(y')",
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
