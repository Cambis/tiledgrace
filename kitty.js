function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 59
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
      lineNumber = 60
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 60;
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
        lineNumber = 61
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
  func0.definitionLine = 59;
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
      obj5.definitionLine = 60;
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
  lineNumber = 166
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
      lineNumber = 167
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 167;
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
        lineNumber = 168
        var call11 = callmethod(var_KittyKat,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj9.superobj = call11;
        obj9._value = call11._value;
        sourceObject = obj9;
        lineNumber = 169
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
  func8.definitionLine = 166;
  func8.definitionModule = "kitty";
  var func12 = function(argcv) {
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
      var obj13 = Grace_allocObject();
      obj13.definitionModule = "kitty";
      obj13.definitionLine = 167;
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
        lineNumber = 168
        var call15 = callmethod(var_KittyKat,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj13.superobj = call15;
        obj13._value = call15._value;
        sourceObject = obj13;
        lineNumber = 169
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
  this.methods["Entity()x()y()actions()object"] = func12;
  lineNumber = 173
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (action)"));
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
  func16.paramCounts = [
    0,
  ];
  func16.variableArities = [
    false,
  ];
  this.methods["action"] = func16;
  func16.definitionLine = 173;
  func16.definitionModule = "kitty";
  lineNumber = 329
  var func17 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func17.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 330
      var obj18 = Grace_allocObject();
      obj18.definitionModule = "kitty";
      obj18.definitionLine = 330;
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
        lineNumber = 331
        var call20 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj18.superobj = call20;
        obj18._value = call20._value;
        superDepth = origSuperDepth;
      }
      obj_init_18.apply(obj18, []);
      return obj18
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func17.paramCounts = [
    0,
  ];
  func17.variableArities = [
    false,
  ];
  this.methods["World"] = func17;
  func17.definitionLine = 329;
  func17.definitionModule = "kitty";
  var func21 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj22 = Grace_allocObject();
      obj22.definitionModule = "kitty";
      obj22.definitionLine = 330;
      var inho22 = inheritingObject;
      while (inho22.superobj) inho22 = inho22.superobj;
      inho22.superobj = obj22;
      obj22.data = inheritingObject.data;
      obj22.outer = this;
      var reader_kitty_outer_23 = function() {
        return this.outer;
      }
      obj22.methods["outer"] = reader_kitty_outer_23;
      function obj_init_22() {
        var origSuperDepth = superDepth;
        superDepth = obj22;
        obj22.annotations = [];
        sourceObject = obj22;
        var call24 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj22.superobj = call24;
        obj22._value = call24._value;
        superDepth = origSuperDepth;
      }
      obj_init_22.apply(inheritingObject, []);
      return obj22
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func21;
  lineNumber = 338
  var func25 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func25.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 340
      var string26 = new GraceString("CHECKING...");
      var call27 = Grace_print(string26);
      lineNumber = 347
      var if28 = var_done;
      lineNumber = 342
      var call29 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call29)) {
        lineNumber = 343
        var string30 = new GraceString("NO WORLD!!");
        var call31 = Grace_print(string30);
        lineNumber = 345
        return var_done
      }
      lineNumber = 347
      var string32 = new GraceString("STARTING...");
      var call33 = Grace_print(string32);
      lineNumber = 350
      var call34 = callmethod(var_m__95__world,"start", [0]);
      return call34
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func25.paramCounts = [
    0,
  ];
  func25.variableArities = [
    false,
  ];
  this.methods["start"] = func25;
  func25.definitionLine = 338;
  func25.definitionModule = "kitty";
  lineNumber = 353
  var func35 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func35.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 355
      lineNumber = 354
      var_m__95__world = var_world__39__;
      lineNumber = 356
      lineNumber = 355
      var bool36 = new GraceBoolean(true)
      var_worldSet = bool36;
      return bool36
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func35.paramTypes = [];
  func35.paramTypes.push([]);
  func35.paramCounts = [
    1,
  ];
  func35.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func35;
  func35.definitionLine = 353;
  func35.definitionModule = "kitty";
  lineNumber = 358
  var func37 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func37.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 359
      onSelf = true;
      var call38 = callmethod(this, "start", [0]);
      return call38
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func37.paramCounts = [
    1,
  ];
  func37.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func37;
  func37.definitionLine = 358;
  func37.definitionModule = "kitty";
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
  var call39 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call39;
  this.data = call39.data;
  this._value = call39._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 350
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
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
  func40.paramCounts = [
    0,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["m_world"] = func40;
  func40.definitionLine = 350;
  func40.definitionModule = "kitty";
  lineNumber = 350
  var func41 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func41.paramCounts[0])
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
  func41.paramCounts = [
    1,
  ];
  func41.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func41;
  func41.definitionLine = 350;
  func41.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 350
  var func43 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func43.paramCounts[0])
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
  func43.paramCounts = [
    0,
  ];
  func43.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func43;
  func43.definitionLine = 350;
  func43.definitionModule = "kitty";
  lineNumber = 350
  var func44 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    1,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func44;
  func44.definitionLine = 350;
  func44.definitionModule = "kitty";
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
  lineNumber = 350
  var func45 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    0,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func45;
  func45.definitionLine = 350;
  func45.definitionModule = "kitty";
  lineNumber = 350
  var func46 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func46;
  func46.definitionLine = 350;
  func46.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 350
  var func47 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func47.paramCounts[0])
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
  func47.paramCounts = [
    0,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func47;
  func47.definitionLine = 350;
  func47.definitionModule = "kitty";
  lineNumber = 350
  var func48 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    1,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func48;
  func48.definitionLine = 350;
  func48.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 350
  var func49 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    0,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func49;
  func49.definitionLine = 350;
  func49.definitionModule = "kitty";
  lineNumber = 350
  var func50 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    1,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func50;
  func50.definitionLine = 350;
  func50.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call51 = callmethod(var_dom,"window", [0]);
  var call52 = callmethod(call51,"Math", [0]);
  var var_math = call52;
  var func53 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    0,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["math"] = func53;
  func53.definitionLine = 17;
  func53.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
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
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func54;
  func54.definitionLine = 22;
  func54.definitionModule = "kitty";
  var obj55 = Grace_allocObject();
  obj55.definitionModule = "kitty";
  obj55.definitionLine = 22;
  obj55.outer = this;
  var reader_kitty_outer_56 = function() {
    return this.outer;
  }
  obj55.methods["outer"] = reader_kitty_outer_56;
  function obj_init_55() {
    var origSuperDepth = superDepth;
    superDepth = obj55;
    obj55.annotations = [];
    var func57 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func57.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj58 = Grace_allocObject();
        obj58.definitionModule = "kitty";
        obj58.definitionLine = 22;
        obj58.outer = this;
        var reader_kitty_outer_59 = function() {
          return this.outer;
        }
        obj58.methods["outer"] = reader_kitty_outer_59;
        function obj_init_58() {
          var origSuperDepth = superDepth;
          superDepth = obj58;
          obj58.annotations = [];
          var func60 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func60.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 37
              var call61 = callmethod(var_ctx,"save", [0]);
              lineNumber = 38
              var call62 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 40
              var prod66 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient68 = callmethod(prod66, "/", [1], new GraceNum(180));
              var call69 = callmethod(var_ctx,"rotate", [1], quotient68);
              lineNumber = 41
              onSelf = true;
              var call70 = callmethod(this, "elements", [0]);
              lineNumber = 44
              var block71 = Grace_allocObject();
              block71.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block71.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block71.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block71.methods["match"] = GraceBlock_match;
              block71.methods["prefix?"] = GraceBlock_lift;
              block71.receiver = this;
              block71.className = 'block<kitty:44>';
              block71.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 42
                onSelf = true;
                var call73 = callmethod(this, "width", [0]);
                var call74 = callmethod(call73,"prefix-", [0]);
                var quotient76 = callmethod(call74, "/", [1], new GraceNum(2));
                onSelf = true;
                var call78 = callmethod(this, "height", [0]);
                var call79 = callmethod(call78,"prefix-", [0]);
                var quotient81 = callmethod(call79, "/", [1], new GraceNum(2));
                onSelf = true;
                var call82 = callmethod(this, "width", [0]);
                onSelf = true;
                var call83 = callmethod(this, "height", [0]);
                var call84 = callmethod(var_ctx,"drawImage", [5], var_element, quotient76, quotient81, call82, call83);
                return call84;
              };
              var call85 = callmethod(Grace_prelude,"for()do", [1, 1], call70, block71);
              lineNumber = 44
              var call86 = callmethod(var_ctx,"restore", [0]);
              return call86
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func60.paramCounts = [
            4,
          ];
          func60.variableArities = [
            false,
          ];
          obj58.methods["draw"] = func60;
          func60.definitionLine = 35;
          func60.definitionModule = "kitty";
          var func87 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func87.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 50
              lineNumber = 49
              onSelf = true;
              var call88 = callmethod(this, "imgTag", [0]);
              return call88
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func87.paramCounts = [
            0,
          ];
          func87.variableArities = [
            false,
          ];
          obj58.methods["getTag"] = func87;
          func87.definitionLine = 48;
          func87.definitionModule = "kitty";
          var func89 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func89.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              onSelf = true;
              var call90 = callmethod(this, "elements", [0]);
              var call91 = callmethod(call90,"push", [1], var_imgTag__39__);
              return call91
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func89.paramCounts = [
            1,
          ];
          func89.variableArities = [
            false,
          ];
          obj58.methods["drawImage"] = func89;
          func89.definitionLine = 52;
          func89.definitionModule = "kitty";
          sourceObject = obj58;
          lineNumber = 26
          var string92 = new GraceString("img");
          var call93 = callmethod(var_dom,"document", [0]);
          var call94 = callmethod(call93,"createElement", [1], string92);
          obj58.data["imgTag"] = call94;
          var reader_kitty_imgTag_95 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_95.def = true;
          reader_kitty_imgTag_95.confidential = true;
          obj58.methods["imgTag"] = reader_kitty_imgTag_95;
          lineNumber = 26;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call94)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj58;
          lineNumber = 29
          lineNumber = 26
          lineNumber = 27
          onSelf = true;
          var call96 = callmethod(this, "imgTag", [0]);
          var call97 = callmethod(call96,"src:=", [1], var_url__39__);
          sourceObject = obj58;
          lineNumber = 29
          var call98 = callmethod(var_collections,"list", [0]);
          var call99 = callmethod(call98,"new", [0]);
          obj58.data["elements"] = call99;
          var reader_kitty_elements_100 = function() {
            return this.data["elements"];
          }
          obj58.methods["elements"] = reader_kitty_elements_100;
          obj58.data["elements"] = call99;
          var writer_kitty_elements_100 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj58.methods["elements:="] = writer_kitty_elements_100;
          reader_kitty_elements_100.confidential = true;
          writer_kitty_elements_100.confidential = true;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call99)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj58.mutable = true;
          sourceObject = obj58;
          lineNumber = 30
          onSelf = true;
          var call101 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call102 = callmethod(this, "elements", [0]);
          var call103 = callmethod(call102,"push", [1], call101);
          sourceObject = obj58;
          lineNumber = 32
          obj58.data["height"] = var_height__39__;
          var reader_kitty_height_104 = function() {
            return this.data["height"];
          }
          obj58.methods["height"] = reader_kitty_height_104;
          obj58.data["height"] = var_height__39__;
          var writer_kitty_height_104 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj58.methods["height:="] = writer_kitty_height_104;
          reader_kitty_height_104.confidential = true;
          writer_kitty_height_104.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj58.mutable = true;
          sourceObject = obj58;
          lineNumber = 33
          obj58.data["width"] = var_width__39__;
          var reader_kitty_width_105 = function() {
            return this.data["width"];
          }
          obj58.methods["width"] = reader_kitty_width_105;
          obj58.data["width"] = var_width__39__;
          var writer_kitty_width_105 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj58.methods["width:="] = writer_kitty_width_105;
          reader_kitty_width_105.confidential = true;
          writer_kitty_width_105.confidential = true;
          lineNumber = 35;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj58.mutable = true;
          sourceObject = obj58;
          sourceObject = obj58;
          sourceObject = obj58;
          superDepth = origSuperDepth;
        }
        obj_init_58.apply(obj58, []);
        return obj58
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func57.paramCounts = [
      3,
    ];
    func57.variableArities = [
      false,
    ];
    obj55.methods["new"] = func57;
    func57.definitionLine = 22;
    func57.definitionModule = "kitty";
    var func106 = function(argcv) {
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
        var obj107 = Grace_allocObject();
        obj107.definitionModule = "kitty";
        obj107.definitionLine = 22;
        var inho107 = inheritingObject;
        while (inho107.superobj) inho107 = inho107.superobj;
        inho107.superobj = obj107;
        obj107.data = inheritingObject.data;
        obj107.outer = this;
        var reader_kitty_outer_108 = function() {
          return this.outer;
        }
        obj107.methods["outer"] = reader_kitty_outer_108;
        function obj_init_107() {
          var origSuperDepth = superDepth;
          superDepth = obj107;
          obj107.annotations = [];
          var func109 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func109.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 37
              var call110 = callmethod(var_ctx,"save", [0]);
              lineNumber = 38
              var call111 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 40
              var prod115 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient117 = callmethod(prod115, "/", [1], new GraceNum(180));
              var call118 = callmethod(var_ctx,"rotate", [1], quotient117);
              lineNumber = 41
              onSelf = true;
              var call119 = callmethod(this, "elements", [0]);
              lineNumber = 44
              var block120 = Grace_allocObject();
              block120.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block120.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block120.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block120.methods["match"] = GraceBlock_match;
              block120.methods["prefix?"] = GraceBlock_lift;
              block120.receiver = this;
              block120.className = 'block<kitty:44>';
              block120.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 42
                onSelf = true;
                var call122 = callmethod(this, "width", [0]);
                var call123 = callmethod(call122,"prefix-", [0]);
                var quotient125 = callmethod(call123, "/", [1], new GraceNum(2));
                onSelf = true;
                var call127 = callmethod(this, "height", [0]);
                var call128 = callmethod(call127,"prefix-", [0]);
                var quotient130 = callmethod(call128, "/", [1], new GraceNum(2));
                onSelf = true;
                var call131 = callmethod(this, "width", [0]);
                onSelf = true;
                var call132 = callmethod(this, "height", [0]);
                var call133 = callmethod(var_ctx,"drawImage", [5], var_element, quotient125, quotient130, call131, call132);
                return call133;
              };
              var call134 = callmethod(Grace_prelude,"for()do", [1, 1], call119, block120);
              lineNumber = 44
              var call135 = callmethod(var_ctx,"restore", [0]);
              return call135
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func109.paramCounts = [
            4,
          ];
          func109.variableArities = [
            false,
          ];
          obj107.methods["draw"] = func109;
          func109.definitionLine = 35;
          func109.definitionModule = "kitty";
          var func136 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func136.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 50
              lineNumber = 49
              onSelf = true;
              var call137 = callmethod(this, "imgTag", [0]);
              return call137
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func136.paramCounts = [
            0,
          ];
          func136.variableArities = [
            false,
          ];
          obj107.methods["getTag"] = func136;
          func136.definitionLine = 48;
          func136.definitionModule = "kitty";
          var func138 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func138.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              onSelf = true;
              var call139 = callmethod(this, "elements", [0]);
              var call140 = callmethod(call139,"push", [1], var_imgTag__39__);
              return call140
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func138.paramCounts = [
            1,
          ];
          func138.variableArities = [
            false,
          ];
          obj107.methods["drawImage"] = func138;
          func138.definitionLine = 52;
          func138.definitionModule = "kitty";
          sourceObject = obj107;
          lineNumber = 26
          var string141 = new GraceString("img");
          var call142 = callmethod(var_dom,"document", [0]);
          var call143 = callmethod(call142,"createElement", [1], string141);
          obj107.data["imgTag"] = call143;
          var reader_kitty_imgTag_144 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_144.def = true;
          reader_kitty_imgTag_144.confidential = true;
          obj107.methods["imgTag"] = reader_kitty_imgTag_144;
          lineNumber = 26;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call143)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj107;
          lineNumber = 29
          lineNumber = 26
          lineNumber = 27
          onSelf = true;
          var call145 = callmethod(this, "imgTag", [0]);
          var call146 = callmethod(call145,"src:=", [1], var_url__39__);
          sourceObject = obj107;
          lineNumber = 29
          var call147 = callmethod(var_collections,"list", [0]);
          var call148 = callmethod(call147,"new", [0]);
          obj107.data["elements"] = call148;
          var reader_kitty_elements_149 = function() {
            return this.data["elements"];
          }
          obj107.methods["elements"] = reader_kitty_elements_149;
          obj107.data["elements"] = call148;
          var writer_kitty_elements_149 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj107.methods["elements:="] = writer_kitty_elements_149;
          reader_kitty_elements_149.confidential = true;
          writer_kitty_elements_149.confidential = true;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call148)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj107.mutable = true;
          sourceObject = obj107;
          lineNumber = 30
          onSelf = true;
          var call150 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call151 = callmethod(this, "elements", [0]);
          var call152 = callmethod(call151,"push", [1], call150);
          sourceObject = obj107;
          lineNumber = 32
          obj107.data["height"] = var_height__39__;
          var reader_kitty_height_153 = function() {
            return this.data["height"];
          }
          obj107.methods["height"] = reader_kitty_height_153;
          obj107.data["height"] = var_height__39__;
          var writer_kitty_height_153 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj107.methods["height:="] = writer_kitty_height_153;
          reader_kitty_height_153.confidential = true;
          writer_kitty_height_153.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj107.mutable = true;
          sourceObject = obj107;
          lineNumber = 33
          obj107.data["width"] = var_width__39__;
          var reader_kitty_width_154 = function() {
            return this.data["width"];
          }
          obj107.methods["width"] = reader_kitty_width_154;
          obj107.data["width"] = var_width__39__;
          var writer_kitty_width_154 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj107.methods["width:="] = writer_kitty_width_154;
          reader_kitty_width_154.confidential = true;
          writer_kitty_width_154.confidential = true;
          lineNumber = 35;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj107.mutable = true;
          sourceObject = obj107;
          sourceObject = obj107;
          sourceObject = obj107;
          superDepth = origSuperDepth;
        }
        obj_init_107.apply(inheritingObject, []);
        return obj107
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj55.methods["new()object"] = func106;
    var func155 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string156 = new GraceString("class KittyImage");
        return string156
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func155.paramCounts = [
    ];
    func155.variableArities = [
    ];
    obj55.methods["asDebugString"] = func155;
    func155.definitionLine = 22;
    func155.definitionModule = "kitty";
    sourceObject = obj55;
    sourceObject = obj55;
    superDepth = origSuperDepth;
  }
  obj_init_55.apply(obj55, []);
  var var_KittyImage = obj55;
  lineNumber = 59
  lineNumber = 66
  var func157 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func157.paramCounts[0])
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
  func157.paramCounts = [
    0,
  ];
  func157.variableArities = [
    false,
  ];
  this.methods["KittyKat"] = func157;
  func157.definitionLine = 66;
  func157.definitionModule = "kitty";
  var obj158 = Grace_allocObject();
  obj158.definitionModule = "kitty";
  obj158.definitionLine = 66;
  obj158.outer = this;
  var reader_kitty_outer_159 = function() {
    return this.outer;
  }
  obj158.methods["outer"] = reader_kitty_outer_159;
  function obj_init_158() {
    var origSuperDepth = superDepth;
    superDepth = obj158;
    obj158.annotations = [];
    var func160 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func160.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj161 = Grace_allocObject();
        obj161.definitionModule = "kitty";
        obj161.definitionLine = 66;
        obj161.outer = this;
        var reader_kitty_outer_162 = function() {
          return this.outer;
        }
        obj161.methods["outer"] = reader_kitty_outer_162;
        function obj_init_161() {
          var origSuperDepth = superDepth;
          superDepth = obj161;
          obj161.annotations = [];
          var func163 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func163.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              var string164 = new GraceString("realyee.png");
              onSelf = true;
              var call165 = callmethod(this, "createImage", [1], string164);
              return call165
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func163.paramCounts = [
            0,
          ];
          func163.variableArities = [
            false,
          ];
          obj161.methods["awake"] = func163;
          func163.definitionLine = 88;
          func163.definitionModule = "kitty";
          var func166 = function(argcv) {
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              var call167 = callmethod(var_block,"apply", [0]);
              return call167
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func166.paramCounts = [
            1,
          ];
          func166.variableArities = [
            false,
          ];
          obj161.methods["start"] = func166;
          func166.definitionLine = 94;
          func166.definitionModule = "kitty";
          var func168 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func168.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              onSelf = true;
              var call169 = callmethod(this, "action", [0]);
              var call170 = callmethod(call169,"apply", [0]);
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
          obj161.methods["tick"] = func168;
          func168.definitionLine = 102;
          func168.definitionModule = "kitty";
          var func171 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func171.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 103
              lineNumber = 107
              onSelf = true;
              var call172 = callmethod(this, "action:=", [1], var_action__39__);
              return call172
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func171.paramCounts = [
            1,
          ];
          func171.variableArities = [
            false,
          ];
          obj161.methods["update"] = func171;
          func171.definitionLine = 106;
          func171.definitionModule = "kitty";
          var func173 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func173.paramCounts[0])
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
          func173.paramCounts = [
            0,
          ];
          func173.variableArities = [
            false,
          ];
          obj161.methods["onDestroy"] = func173;
          func173.definitionLine = 111;
          func173.definitionModule = "kitty";
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
              lineNumber = 116
              lineNumber = 103
              lineNumber = 116
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
              lineNumber = 117
              lineNumber = 103
              lineNumber = 117
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
          obj161.methods["move"] = func174;
          func174.definitionLine = 115;
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
              lineNumber = 121
              lineNumber = 103
              lineNumber = 121
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
              lineNumber = 122
              lineNumber = 103
              lineNumber = 122
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
          obj161.methods["strafe"] = func207;
          func207.definitionLine = 120;
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
              lineNumber = 127
              lineNumber = 103
              lineNumber = 127
              lineNumber = 126
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
          obj161.methods["turn"] = func246;
          func246.definitionLine = 125;
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
              lineNumber = 130
              var call253 = callmethod(var_ctx,"save", [0]);
              lineNumber = 131
              onSelf = true;
              var call254 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call255 = callmethod(this, "posY", [0]);
              var call256 = callmethod(var_ctx,"translate", [2], call254, call255);
              lineNumber = 132
              onSelf = true;
              var call257 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call258 = callmethod(this, "image", [0]);
              var call259 = callmethod(call258,"draw", [4], var_ctx, var_dx, var_dy, call257);
              lineNumber = 133
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
          obj161.methods["draw"] = func252;
          func252.definitionLine = 129;
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
              lineNumber = 137
              lineNumber = 133
              lineNumber = 137
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
          obj161.methods["createImage"] = func261;
          func261.definitionLine = 136;
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
              lineNumber = 142
              lineNumber = 137
              lineNumber = 141
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
          obj161.methods["setImage"] = func266;
          func266.definitionLine = 140;
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
              lineNumber = 146
              lineNumber = 137
              lineNumber = 145
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
          obj161.methods["setAction"] = func268;
          func268.definitionLine = 144;
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
              lineNumber = 150
              lineNumber = 137
              lineNumber = 149
              onSelf = true;
              var call271 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 151
              lineNumber = 137
              lineNumber = 150
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
          obj161.methods["setLocation"] = func270;
          func270.definitionLine = 148;
          func270.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 154
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
          obj161.methods["getX"] = func273;
          func273.definitionLine = 153;
          func273.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              lineNumber = 158
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
          obj161.methods["getY"] = func275;
          func275.definitionLine = 157;
          func275.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              lineNumber = 162
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
          obj161.methods["getRotation"] = func277;
          func277.definitionLine = 161;
          func277.definitionModule = "kitty";
          sourceObject = obj161;
          lineNumber = 70
          obj161.data["tag"] = var_tag__39__;
          var reader_kitty_tag_279 = function() {
            return this.data["tag"];
          }
          obj161.methods["tag"] = reader_kitty_tag_279;
          obj161.data["tag"] = var_tag__39__;
          var writer_kitty_tag_279 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj161.methods["tag:="] = writer_kitty_tag_279;
          reader_kitty_tag_279.confidential = true;
          writer_kitty_tag_279.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 71
          obj161.data["posX"] = var_x__39__;
          var reader_kitty_posX_280 = function() {
            return this.data["posX"];
          }
          obj161.methods["posX"] = reader_kitty_posX_280;
          obj161.data["posX"] = var_x__39__;
          var writer_kitty_posX_280 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj161.methods["posX:="] = writer_kitty_posX_280;
          reader_kitty_posX_280.confidential = true;
          writer_kitty_posX_280.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 72
          obj161.data["posY"] = var_y__39__;
          var reader_kitty_posY_281 = function() {
            return this.data["posY"];
          }
          obj161.methods["posY"] = reader_kitty_posY_281;
          obj161.data["posY"] = var_y__39__;
          var writer_kitty_posY_281 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj161.methods["posY:="] = writer_kitty_posY_281;
          reader_kitty_posY_281.confidential = true;
          writer_kitty_posY_281.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 73
          obj161.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_282 = function() {
            return this.data["rotation"];
          }
          obj161.methods["rotation"] = reader_kitty_rotation_282;
          obj161.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_282 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj161.methods["rotation:="] = writer_kitty_rotation_282;
          reader_kitty_rotation_282.confidential = true;
          writer_kitty_rotation_282.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 75
          var obj283 = Grace_allocObject();
          obj283.definitionModule = "kitty";
          obj283.definitionLine = 75;
          obj283.outer = this;
          var reader_kitty_outer_284 = function() {
            return this.outer;
          }
          obj283.methods["outer"] = reader_kitty_outer_284;
          function obj_init_283() {
            var origSuperDepth = superDepth;
            superDepth = obj283;
            obj283.annotations = [];
            var func285 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func285.paramCounts[0])
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
            func285.paramCounts = [
              0,
            ];
            func285.variableArities = [
              false,
            ];
            obj283.methods["update"] = func285;
            func285.definitionLine = 76;
            func285.definitionModule = "kitty";
            sourceObject = obj283;
            superDepth = origSuperDepth;
          }
          obj_init_283.apply(obj283, []);
          obj161.data["action"] = obj283;
          var reader_kitty_action_286 = function() {
            return this.data["action"];
          }
          obj161.methods["action"] = reader_kitty_action_286;
          obj161.data["action"] = obj283;
          var writer_kitty_action_286 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj161.methods["action:="] = writer_kitty_action_286;
          reader_kitty_action_286.confidential = true;
          writer_kitty_action_286.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj283)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 81
          var call287 = callmethod(var_collections,"list", [0]);
          var call288 = callmethod(call287,"new", [0]);
          obj161.data["actions"] = call288;
          var reader_kitty_actions_289 = function() {
            return this.data["actions"];
          }
          obj161.methods["actions"] = reader_kitty_actions_289;
          obj161.data["actions"] = call288;
          var writer_kitty_actions_289 = function(argcv, o) {
            this.data["actions"] = o;
          }
          obj161.methods["actions:="] = writer_kitty_actions_289;
          reader_kitty_actions_289.confidential = true;
          writer_kitty_actions_289.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call288)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'actions' to be of type Unknown"))
          obj161.mutable = true;
          sourceObject = obj161;
          obj161.data["image"] = undefined;
          var reader_kitty_image_290 = function() {
            return this.data["image"];
          }
          obj161.methods["image"] = reader_kitty_image_290;
          obj161.data["image"] = undefined;
          var writer_kitty_image_290 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj161.methods["image:="] = writer_kitty_image_290;
          reader_kitty_image_290.confidential = true;
          writer_kitty_image_290.confidential = true;
          obj161.mutable = true;
          sourceObject = obj161;
          lineNumber = 85
          onSelf = true;
          var call291 = callmethod(this, "awake", [0]);
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          sourceObject = obj161;
          superDepth = origSuperDepth;
        }
        obj_init_161.apply(obj161, []);
        return obj161
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func160.paramCounts = [
      3,
    ];
    func160.variableArities = [
      false,
    ];
    obj158.methods["new"] = func160;
    func160.definitionLine = 66;
    func160.definitionModule = "kitty";
    var func292 = function(argcv) {
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
        var obj293 = Grace_allocObject();
        obj293.definitionModule = "kitty";
        obj293.definitionLine = 66;
        var inho293 = inheritingObject;
        while (inho293.superobj) inho293 = inho293.superobj;
        inho293.superobj = obj293;
        obj293.data = inheritingObject.data;
        obj293.outer = this;
        var reader_kitty_outer_294 = function() {
          return this.outer;
        }
        obj293.methods["outer"] = reader_kitty_outer_294;
        function obj_init_293() {
          var origSuperDepth = superDepth;
          superDepth = obj293;
          obj293.annotations = [];
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              var string296 = new GraceString("realyee.png");
              onSelf = true;
              var call297 = callmethod(this, "createImage", [1], string296);
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
          obj293.methods["awake"] = func295;
          func295.definitionLine = 88;
          func295.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            var var_block = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              var call299 = callmethod(var_block,"apply", [0]);
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
          obj293.methods["start"] = func298;
          func298.definitionLine = 94;
          func298.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              onSelf = true;
              var call301 = callmethod(this, "action", [0]);
              var call302 = callmethod(call301,"apply", [0]);
              return call302
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func300.paramCounts = [
            0,
          ];
          func300.variableArities = [
            false,
          ];
          obj293.methods["tick"] = func300;
          func300.definitionLine = 102;
          func300.definitionModule = "kitty";
          var func303 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 103
              lineNumber = 107
              onSelf = true;
              var call304 = callmethod(this, "action:=", [1], var_action__39__);
              return call304
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func303.paramCounts = [
            1,
          ];
          func303.variableArities = [
            false,
          ];
          obj293.methods["update"] = func303;
          func303.definitionLine = 106;
          func303.definitionModule = "kitty";
          var func305 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func305.paramCounts[0])
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
          func305.paramCounts = [
            0,
          ];
          func305.variableArities = [
            false,
          ];
          obj293.methods["onDestroy"] = func305;
          func305.definitionLine = 111;
          func305.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 103
              lineNumber = 116
              onSelf = true;
              var call309 = callmethod(this, "rotation", [0]);
              var prod311 = callmethod(call309, "*", [1], new GraceNum(3.14159));
              var quotient313 = callmethod(prod311, "/", [1], new GraceNum(180));
              var call314 = callmethod(var_math,"cos", [1], quotient313);
              var prod317 = callmethod(var_distance, "*", [1], call314);
              onSelf = true;
              var call319 = callmethod(this, "posX", [0]);
              var opresult321 = callmethod(call319, "+", [1], prod317);
              onSelf = true;
              var call322 = callmethod(this, "posX:=", [1], opresult321);
              lineNumber = 117
              lineNumber = 103
              lineNumber = 117
              onSelf = true;
              var call325 = callmethod(this, "rotation", [0]);
              var prod327 = callmethod(call325, "*", [1], new GraceNum(3.14159));
              var quotient329 = callmethod(prod327, "/", [1], new GraceNum(180));
              var call330 = callmethod(var_math,"sin", [1], quotient329);
              var prod333 = callmethod(var_distance, "*", [1], call330);
              onSelf = true;
              var call335 = callmethod(this, "posY", [0]);
              var opresult337 = callmethod(call335, "+", [1], prod333);
              onSelf = true;
              var call338 = callmethod(this, "posY:=", [1], opresult337);
              return call338
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func306.paramCounts = [
            1,
          ];
          func306.variableArities = [
            false,
          ];
          obj293.methods["move"] = func306;
          func306.definitionLine = 115;
          func306.definitionModule = "kitty";
          var func339 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func339.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              lineNumber = 103
              lineNumber = 121
              onSelf = true;
              var call342 = callmethod(this, "rotation", [0]);
              var opresult345 = callmethod(new GraceNum(90), "+", [1], call342);
              var prod347 = callmethod(opresult345, "*", [1], new GraceNum(3.14159));
              var quotient349 = callmethod(prod347, "/", [1], new GraceNum(180));
              var call350 = callmethod(var_math,"cos", [1], quotient349);
              var prod353 = callmethod(var_distance, "*", [1], call350);
              onSelf = true;
              var call355 = callmethod(this, "posX", [0]);
              var opresult357 = callmethod(call355, "+", [1], prod353);
              onSelf = true;
              var call358 = callmethod(this, "posX:=", [1], opresult357);
              lineNumber = 122
              lineNumber = 103
              lineNumber = 122
              onSelf = true;
              var call361 = callmethod(this, "rotation", [0]);
              var opresult364 = callmethod(new GraceNum(90), "+", [1], call361);
              var prod366 = callmethod(opresult364, "*", [1], new GraceNum(3.14159));
              var quotient368 = callmethod(prod366, "/", [1], new GraceNum(180));
              var call369 = callmethod(var_math,"sin", [1], quotient368);
              var prod372 = callmethod(var_distance, "*", [1], call369);
              onSelf = true;
              var call374 = callmethod(this, "posY", [0]);
              var opresult376 = callmethod(call374, "+", [1], prod372);
              onSelf = true;
              var call377 = callmethod(this, "posY:=", [1], opresult376);
              return call377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func339.paramCounts = [
            1,
          ];
          func339.variableArities = [
            false,
          ];
          obj293.methods["strafe"] = func339;
          func339.definitionLine = 120;
          func339.definitionModule = "kitty";
          var func378 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 103
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call380 = callmethod(this, "rotation", [0]);
              var opresult382 = callmethod(call380, "+", [1], var_angle);
              onSelf = true;
              var call383 = callmethod(this, "rotation:=", [1], opresult382);
              return call383
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func378.paramCounts = [
            1,
          ];
          func378.variableArities = [
            false,
          ];
          obj293.methods["turn"] = func378;
          func378.definitionLine = 125;
          func378.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              var call385 = callmethod(var_ctx,"save", [0]);
              lineNumber = 131
              onSelf = true;
              var call386 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call387 = callmethod(this, "posY", [0]);
              var call388 = callmethod(var_ctx,"translate", [2], call386, call387);
              lineNumber = 132
              onSelf = true;
              var call389 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call390 = callmethod(this, "image", [0]);
              var call391 = callmethod(call390,"draw", [4], var_ctx, var_dx, var_dy, call389);
              lineNumber = 133
              var call392 = callmethod(var_ctx,"restore", [0]);
              return call392
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func384.paramCounts = [
            3,
          ];
          func384.variableArities = [
            false,
          ];
          obj293.methods["draw"] = func384;
          func384.definitionLine = 129;
          func384.definitionModule = "kitty";
          var func393 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func393.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 133
              lineNumber = 137
              var call394 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call395 = callmethod(call394, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call396 = callmethod(call395, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call397 = callmethod(this, "image:=", [1], call396);
              return call397
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func393.paramCounts = [
            1,
          ];
          func393.variableArities = [
            false,
          ];
          obj293.methods["createImage"] = func393;
          func393.definitionLine = 136;
          func393.definitionModule = "kitty";
          var func398 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 137
              lineNumber = 141
              onSelf = true;
              var call399 = callmethod(this, "image:=", [1], var_image__39__);
              return call399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func398.paramTypes = [];
          func398.paramTypes.push([]);
          func398.paramCounts = [
            1,
          ];
          func398.variableArities = [
            false,
          ];
          obj293.methods["setImage"] = func398;
          func398.definitionLine = 140;
          func398.definitionModule = "kitty";
          var func400 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func400.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 137
              lineNumber = 145
              onSelf = true;
              var call401 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func400.variableArities = [
            false,
          ];
          obj293.methods["setAction"] = func400;
          func400.definitionLine = 144;
          func400.definitionModule = "kitty";
          var func402 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func402.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 137
              lineNumber = 149
              onSelf = true;
              var call403 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 151
              lineNumber = 137
              lineNumber = 150
              onSelf = true;
              var call404 = callmethod(this, "posY:=", [1], var_y);
              return call404
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func402.paramCounts = [
            2,
          ];
          func402.variableArities = [
            false,
          ];
          obj293.methods["setLocation"] = func402;
          func402.definitionLine = 148;
          func402.definitionModule = "kitty";
          var func405 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func405.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 154
              onSelf = true;
              var call406 = callmethod(this, "posX", [0]);
              return call406
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
          obj293.methods["getX"] = func405;
          func405.definitionLine = 153;
          func405.definitionModule = "kitty";
          var func407 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func407.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              lineNumber = 158
              onSelf = true;
              var call408 = callmethod(this, "posY", [0]);
              return call408
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
          obj293.methods["getY"] = func407;
          func407.definitionLine = 157;
          func407.definitionModule = "kitty";
          var func409 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func409.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              lineNumber = 162
              onSelf = true;
              var call410 = callmethod(this, "rotation", [0]);
              return call410
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
          obj293.methods["getRotation"] = func409;
          func409.definitionLine = 161;
          func409.definitionModule = "kitty";
          sourceObject = obj293;
          lineNumber = 70
          obj293.data["tag"] = var_tag__39__;
          var reader_kitty_tag_411 = function() {
            return this.data["tag"];
          }
          obj293.methods["tag"] = reader_kitty_tag_411;
          obj293.data["tag"] = var_tag__39__;
          var writer_kitty_tag_411 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj293.methods["tag:="] = writer_kitty_tag_411;
          reader_kitty_tag_411.confidential = true;
          writer_kitty_tag_411.confidential = true;
          lineNumber = 71;
          moduleName = "kitty";
          lineNumber = 70
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 71
          obj293.data["posX"] = var_x__39__;
          var reader_kitty_posX_412 = function() {
            return this.data["posX"];
          }
          obj293.methods["posX"] = reader_kitty_posX_412;
          obj293.data["posX"] = var_x__39__;
          var writer_kitty_posX_412 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj293.methods["posX:="] = writer_kitty_posX_412;
          reader_kitty_posX_412.confidential = true;
          writer_kitty_posX_412.confidential = true;
          lineNumber = 72;
          moduleName = "kitty";
          lineNumber = 71
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 72
          obj293.data["posY"] = var_y__39__;
          var reader_kitty_posY_413 = function() {
            return this.data["posY"];
          }
          obj293.methods["posY"] = reader_kitty_posY_413;
          obj293.data["posY"] = var_y__39__;
          var writer_kitty_posY_413 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj293.methods["posY:="] = writer_kitty_posY_413;
          reader_kitty_posY_413.confidential = true;
          writer_kitty_posY_413.confidential = true;
          lineNumber = 73;
          moduleName = "kitty";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 73
          obj293.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_414 = function() {
            return this.data["rotation"];
          }
          obj293.methods["rotation"] = reader_kitty_rotation_414;
          obj293.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_414 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj293.methods["rotation:="] = writer_kitty_rotation_414;
          reader_kitty_rotation_414.confidential = true;
          writer_kitty_rotation_414.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 75
          var obj415 = Grace_allocObject();
          obj415.definitionModule = "kitty";
          obj415.definitionLine = 75;
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
            func417.paramCounts = [
              0,
            ];
            func417.variableArities = [
              false,
            ];
            obj415.methods["update"] = func417;
            func417.definitionLine = 76;
            func417.definitionModule = "kitty";
            sourceObject = obj415;
            superDepth = origSuperDepth;
          }
          obj_init_415.apply(obj415, []);
          obj293.data["action"] = obj415;
          var reader_kitty_action_418 = function() {
            return this.data["action"];
          }
          obj293.methods["action"] = reader_kitty_action_418;
          obj293.data["action"] = obj415;
          var writer_kitty_action_418 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj293.methods["action:="] = writer_kitty_action_418;
          reader_kitty_action_418.confidential = true;
          writer_kitty_action_418.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj415)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 81
          var call419 = callmethod(var_collections,"list", [0]);
          var call420 = callmethod(call419,"new", [0]);
          obj293.data["actions"] = call420;
          var reader_kitty_actions_421 = function() {
            return this.data["actions"];
          }
          obj293.methods["actions"] = reader_kitty_actions_421;
          obj293.data["actions"] = call420;
          var writer_kitty_actions_421 = function(argcv, o) {
            this.data["actions"] = o;
          }
          obj293.methods["actions:="] = writer_kitty_actions_421;
          reader_kitty_actions_421.confidential = true;
          writer_kitty_actions_421.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call420)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'actions' to be of type Unknown"))
          obj293.mutable = true;
          sourceObject = obj293;
          obj293.data["image"] = undefined;
          var reader_kitty_image_422 = function() {
            return this.data["image"];
          }
          obj293.methods["image"] = reader_kitty_image_422;
          obj293.data["image"] = undefined;
          var writer_kitty_image_422 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj293.methods["image:="] = writer_kitty_image_422;
          reader_kitty_image_422.confidential = true;
          writer_kitty_image_422.confidential = true;
          obj293.mutable = true;
          sourceObject = obj293;
          lineNumber = 85
          onSelf = true;
          var call423 = callmethod(this, "awake", [0]);
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          sourceObject = obj293;
          superDepth = origSuperDepth;
        }
        obj_init_293.apply(inheritingObject, []);
        return obj293
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj158.methods["new()object"] = func292;
    var func424 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 66
        var string425 = new GraceString("class KittyKat");
        return string425
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func424.paramCounts = [
    ];
    func424.variableArities = [
    ];
    obj158.methods["asDebugString"] = func424;
    func424.definitionLine = 66;
    func424.definitionModule = "kitty";
    sourceObject = obj158;
    sourceObject = obj158;
    superDepth = origSuperDepth;
  }
  obj_init_158.apply(obj158, []);
  var var_KittyKat = obj158;
  lineNumber = 166
  lineNumber = 173
  lineNumber = 178
  var func426 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func426.paramCounts[0])
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
  func426.paramCounts = [
    0,
  ];
  func426.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func426;
  func426.definitionLine = 178;
  func426.definitionModule = "kitty";
  var obj427 = Grace_allocObject();
  obj427.definitionModule = "kitty";
  obj427.definitionLine = 178;
  obj427.outer = this;
  var reader_kitty_outer_428 = function() {
    return this.outer;
  }
  obj427.methods["outer"] = reader_kitty_outer_428;
  function obj_init_427() {
    var origSuperDepth = superDepth;
    superDepth = obj427;
    obj427.annotations = [];
    var func429 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func429.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj430 = Grace_allocObject();
        obj430.definitionModule = "kitty";
        obj430.definitionLine = 178;
        obj430.outer = this;
        var reader_kitty_outer_431 = function() {
          return this.outer;
        }
        obj430.methods["outer"] = reader_kitty_outer_431;
        function obj_init_430() {
          var origSuperDepth = superDepth;
          superDepth = obj430;
          obj430.annotations = [];
          var func432 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func432.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              var if433 = var_done;
              lineNumber = 212
              onSelf = true;
              var call434 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call434)) {
                lineNumber = 214
                lineNumber = 213
                var bool435 = new GraceBoolean(false)
                return bool435
              }
              lineNumber = 217
              lineNumber = 178
              lineNumber = 216
              var call436 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call437 = callmethod(this, "document:=", [1], call436);
              lineNumber = 217
              lineNumber = 216
              lineNumber = 217
              var string438 = new GraceString("standard-canvas");
              onSelf = true;
              var call439 = callmethod(this, "document", [0]);
              var call440 = callmethod(call439,"getElementById", [1], string438);
              onSelf = true;
              var call441 = callmethod(this, "canvas:=", [1], call440);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call442 = callmethod(this, "canvas", [0]);
              var call443 = callmethod(call442,"width", [0]);
              onSelf = true;
              var call444 = callmethod(this, "canvasWidth:=", [1], call443);
              lineNumber = 222
              lineNumber = 218
              lineNumber = 219
              onSelf = true;
              var call445 = callmethod(this, "canvas", [0]);
              var call446 = callmethod(call445,"height", [0]);
              onSelf = true;
              var call447 = callmethod(this, "canvasHeight:=", [1], call446);
              lineNumber = 234
              var block448 = Grace_allocObject();
              block448.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block448.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block448.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block448.methods["match"] = GraceBlock_match;
              block448.methods["prefix?"] = GraceBlock_lift;
              block448.receiver = this;
              block448.className = 'block<kitty:234>';
              block448.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 225
                lineNumber = 224
                onSelf = true;
                var call449 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call451 = callmethod(this, "canvas", [0]);
                var call452 = callmethod(call451,"offsetWidth", [0]);
                onSelf = true;
                var call454 = callmethod(this, "canvas", [0]);
                var call455 = callmethod(call454,"offsetLeft", [0]);
                var call457 = callmethod(var_ev,"clientX", [0]);
                var diff459 = callmethod(call457, "-", [1], call455);
                var quotient461 = callmethod(diff459, "/", [1], call452);
                var prod463 = callmethod(quotient461, "*", [1], call449);
                var var_x = prod463;
                lineNumber = 225;
                moduleName = "kitty";
                lineNumber = 224
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 229
                lineNumber = 225
                onSelf = true;
                var call464 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call466 = callmethod(this, "canvas", [0]);
                var call467 = callmethod(call466,"offsetHeight", [0]);
                onSelf = true;
                var call469 = callmethod(this, "canvas", [0]);
                var call470 = callmethod(call469,"offsetTop", [0]);
                var call472 = callmethod(var_ev,"clientY", [0]);
                var diff474 = callmethod(call472, "-", [1], call470);
                var quotient476 = callmethod(diff474, "/", [1], call467);
                var prod478 = callmethod(quotient476, "*", [1], call464);
                var var_y = prod478;
                lineNumber = 229;
                moduleName = "kitty";
                lineNumber = 225
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 233
                var if479 = var_done;
                lineNumber = 229
                var opresult482 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call485 = callmethod(this, "canvasWidth", [0]);
                var diff487 = callmethod(call485, "-", [1], new GraceNum(20));
                var opresult490 = callmethod(var_x, ">", [1], diff487);
                var opresult492 = callmethod(opresult490, "&&", [1], opresult482);
                if (Grace_isTrue(opresult492)) {
                  lineNumber = 230
                  var call493 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 231
                  onSelf = true;
                  var call494 = callmethod(this, "stop", [0]);
                  if479 = call494;
                }
                return if479;
              };
              var_mouseDownListener = block448;
              lineNumber = 234
              var string495 = new GraceString("mousedown");
              onSelf = true;
              var call496 = callmethod(this, "canvas", [0]);
              var call497 = callmethod(call496,"addEventListener", [2], string495, var_mouseDownListener);
              lineNumber = 244
              var block498 = Grace_allocObject();
              block498.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block498.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block498.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block498.methods["match"] = GraceBlock_match;
              block498.methods["prefix?"] = GraceBlock_lift;
              block498.receiver = this;
              block498.className = 'block<kitty:244>';
              block498.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 242
                var if499 = var_done;
                lineNumber = 239
                var call501 = callmethod(var_ev,"keyCode", [0]);
                var opresult503 = callmethod(call501, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult503)) {
                  lineNumber = 240
                  onSelf = true;
                  var call504 = callmethod(this, "stop", [0]);
                  if499 = call504;
                }
                lineNumber = 243
                lineNumber = 239
                lineNumber = 242
                var call505 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call506 = callmethod(this, "currentKeyDown:=", [1], call505);
                return call506;
              };
              var_keyDownListener = block498;
              lineNumber = 244
              var string507 = new GraceString("keydown");
              onSelf = true;
              var call508 = callmethod(this, "document", [0]);
              var call509 = callmethod(call508,"addEventListener", [2], string507, var_keyDownListener);
              lineNumber = 250
              var block510 = Grace_allocObject();
              block510.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block510.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block510.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block510.methods["match"] = GraceBlock_match;
              block510.methods["prefix?"] = GraceBlock_lift;
              block510.receiver = this;
              block510.className = 'block<kitty:250>';
              block510.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 249
                lineNumber = 242
                lineNumber = 249
                lineNumber = 248
                var call511 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call512 = callmethod(this, "currentKeyDown:=", [1], call511);
                return call512;
              };
              var_keyUpListener = block510;
              lineNumber = 250
              var string513 = new GraceString("keyup");
              onSelf = true;
              var call514 = callmethod(this, "document", [0]);
              var call515 = callmethod(call514,"addEventListener", [2], string513, var_keyUpListener);
              lineNumber = 252
              lineNumber = 242
              lineNumber = 252
              var string516 = new GraceString("canvas");
              var call517 = callmethod(var_dom,"document", [0]);
              var call518 = callmethod(call517,"createElement", [1], string516);
              onSelf = true;
              var call519 = callmethod(this, "backingCanvas:=", [1], call518);
              lineNumber = 254
              lineNumber = 252
              lineNumber = 253
              onSelf = true;
              var call520 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call521 = callmethod(this, "backingCanvas", [0]);
              var call522 = callmethod(call521,"height:=", [1], call520);
              lineNumber = 255
              lineNumber = 252
              lineNumber = 254
              onSelf = true;
              var call523 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call524 = callmethod(this, "backingCanvas", [0]);
              var call525 = callmethod(call524,"width:=", [1], call523);
              lineNumber = 255
              lineNumber = 252
              lineNumber = 255
              var string526 = new GraceString("2d");
              onSelf = true;
              var call527 = callmethod(this, "backingCanvas", [0]);
              var call528 = callmethod(call527,"getContext", [1], string526);
              onSelf = true;
              var call529 = callmethod(this, "backingContext:=", [1], call528);
              lineNumber = 256
              lineNumber = 252
              lineNumber = 256
              var string530 = new GraceString("2d");
              onSelf = true;
              var call531 = callmethod(this, "canvas", [0]);
              var call532 = callmethod(call531,"getContext", [1], string530);
              onSelf = true;
              var call533 = callmethod(this, "mctx:=", [1], call532);
              lineNumber = 259
              var string534 = new GraceString("doggo.jpg");
              onSelf = true;
              var call535 = callmethod(this, "setBackground", [1], string534);
              lineNumber = 271
              lineNumber = 252
              lineNumber = 265
              var bool536 = new GraceBoolean(true)
              onSelf = true;
              var call537 = callmethod(this, "isInit:=", [1], bool536);
              return call537
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func432.paramCounts = [
            0,
          ];
          func432.variableArities = [
            false,
          ];
          obj430.methods["init"] = func432;
          func432.definitionLine = 208;
          func432.definitionModule = "kitty";
          var func538 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func538.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              lineNumber = 252
              lineNumber = 276
              var bool539 = new GraceBoolean(true)
              onSelf = true;
              var call540 = callmethod(this, "isRunning:=", [1], bool539);
              lineNumber = 277
              var block541 = Grace_allocObject();
              block541.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block541.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block541.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block541.methods["match"] = GraceBlock_match;
              block541.methods["prefix?"] = GraceBlock_lift;
              block541.receiver = this;
              block541.className = 'block<kitty:277>';
              block541.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call542 = callmethod(this, "isRunning", [0]);
                return call542;
              };
              lineNumber = 281
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
              block543.className = 'block<kitty:281>';
              block543.real = function(
              ) {
                sourceObject = this;
                lineNumber = 278
                onSelf = true;
                var call544 = callmethod(this, "update", [0]);
                return call544;
              };
              lineNumber = 277
              var call545 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block541, new GraceNum(10), block543);
              return call545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func538.paramCounts = [
            0,
          ];
          func538.variableArities = [
            false,
          ];
          obj430.methods["start"] = func538;
          func538.definitionLine = 274;
          func538.definitionModule = "kitty";
          var func546 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              lineNumber = 252
              lineNumber = 289
              onSelf = true;
              var call547 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call548 = callmethod(this, "mctx", [0]);
              var call549 = callmethod(call548,"fillStyle:=", [1], call547);
              lineNumber = 290
              onSelf = true;
              var call550 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call551 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call552 = callmethod(this, "mctx", [0]);
              var call553 = callmethod(call552,"fillRect", [4], new GraceNum(0), new GraceNum(0), call550, call551);
              lineNumber = 291
              onSelf = true;
              var call554 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call555 = callmethod(this, "mctx", [0]);
              var call556 = callmethod(call555,"drawImage", [3], call554, new GraceNum(0), new GraceNum(0));
              lineNumber = 292
              onSelf = true;
              var call557 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call559 = callmethod(this, "canvasWidth", [0]);
              var quotient561 = callmethod(call559, "/", [1], new GraceNum(2));
              onSelf = true;
              var call563 = callmethod(this, "canvasHeight", [0]);
              var quotient565 = callmethod(call563, "/", [1], new GraceNum(2));
              onSelf = true;
              var call566 = callmethod(this, "background", [0]);
              var call567 = callmethod(call566,"draw", [4], call557, quotient561, quotient565, new GraceNum(0));
              lineNumber = 295
              onSelf = true;
              var call568 = callmethod(this, "entities", [0]);
              lineNumber = 301
              var block569 = Grace_allocObject();
              block569.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block569.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block569.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block569.methods["match"] = GraceBlock_match;
              block569.methods["prefix?"] = GraceBlock_lift;
              block569.receiver = this;
              block569.className = 'block<kitty:301>';
              block569.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 296
                var call570 = callmethod(var_entity,"tick", [0]);
                lineNumber = 297
                onSelf = true;
                var call571 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call573 = callmethod(this, "canvasWidth", [0]);
                var quotient575 = callmethod(call573, "/", [1], new GraceNum(2));
                onSelf = true;
                var call577 = callmethod(this, "canvasHeight", [0]);
                var quotient579 = callmethod(call577, "/", [1], new GraceNum(2));
                var call580 = callmethod(var_entity,"draw", [3], call571, quotient575, quotient579);
                return call580;
              };
              var call581 = callmethod(Grace_prelude,"for()do", [1, 1], call568, block569);
              return call581
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func546.paramCounts = [
            0,
          ];
          func546.variableArities = [
            false,
          ];
          obj430.methods["update"] = func546;
          func546.definitionLine = 284;
          func546.definitionModule = "kitty";
          var func582 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func582.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 304
              var string583 = new GraceString("WORLD STOPPING...");
              var call584 = Grace_print(string583);
              lineNumber = 306
              lineNumber = 296
              lineNumber = 305
              var bool585 = new GraceBoolean(false)
              onSelf = true;
              var call586 = callmethod(this, "isRunning:=", [1], bool585);
              lineNumber = 306
              var string587 = new GraceString("mousedown");
              onSelf = true;
              var call588 = callmethod(this, "canvas", [0]);
              var call589 = callmethod(call588,"removeEventListener", [2], string587, var_mouseDownListener);
              lineNumber = 307
              var string590 = new GraceString("keydown");
              onSelf = true;
              var call591 = callmethod(this, "document", [0]);
              var call592 = callmethod(call591,"removeEventListener", [2], string590, var_keyDownListener);
              lineNumber = 308
              var string593 = new GraceString("keyup");
              onSelf = true;
              var call594 = callmethod(this, "document", [0]);
              var call595 = callmethod(call594,"removeEventListener", [2], string593, var_keyUpListener);
              return call595
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func582.paramCounts = [
            0,
          ];
          func582.variableArities = [
            false,
          ];
          obj430.methods["stop"] = func582;
          func582.definitionLine = 303;
          func582.definitionModule = "kitty";
          var func596 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 313
              lineNumber = 312
              onSelf = true;
              var call597 = callmethod(this, "currentKeyDown", [0]);
              var opresult600 = callmethod(var_key, "==", [1], call597);
              return opresult600
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func596.paramCounts = [
            1,
          ];
          func596.variableArities = [
            false,
          ];
          obj430.methods["isKeyDown"] = func596;
          func596.definitionLine = 311;
          func596.definitionModule = "kitty";
          var func601 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func601.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              lineNumber = 296
              lineNumber = 316
              onSelf = true;
              var call602 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call603 = callmethod(this, "canvasHeight", [0]);
              var call604 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call605 = callmethod(call604, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call606 = callmethod(call605, "Image()width()height", [1, 1, 1], var_url, call602, call603);
              onSelf = true;
              var call607 = callmethod(this, "background:=", [1], call606);
              return call607
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
          obj430.methods["setBackground"] = func601;
          func601.definitionLine = 315;
          func601.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 320
              onSelf = true;
              var call609 = callmethod(this, "entities", [0]);
              var call610 = callmethod(call609,"push", [1], var_e);
              return call610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func608.paramTypes = [];
          func608.paramTypes.push([]);
          func608.paramCounts = [
            1,
          ];
          func608.variableArities = [
            false,
          ];
          obj430.methods["addEntity"] = func608;
          func608.definitionLine = 319;
          func608.definitionModule = "kitty";
          var func611 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              lineNumber = 324
              onSelf = true;
              var call612 = callmethod(this, "mctx", [0]);
              return call612
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
          obj430.methods["getContext"] = func611;
          func611.definitionLine = 323;
          func611.definitionModule = "kitty";
          sourceObject = obj430;
          obj430.data["background"] = undefined;
          var reader_kitty_background_613 = function() {
            return this.data["background"];
          }
          obj430.methods["background"] = reader_kitty_background_613;
          obj430.data["background"] = undefined;
          var writer_kitty_background_613 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj430.methods["background:="] = writer_kitty_background_613;
          reader_kitty_background_613.confidential = true;
          writer_kitty_background_613.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 183
          var string614 = new GraceString("black");
          obj430.data["backgroundColour"] = string614;
          var reader_kitty_backgroundColour_615 = function() {
            return this.data["backgroundColour"];
          }
          obj430.methods["backgroundColour"] = reader_kitty_backgroundColour_615;
          obj430.data["backgroundColour"] = string614;
          var writer_kitty_backgroundColour_615 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj430.methods["backgroundColour:="] = writer_kitty_backgroundColour_615;
          reader_kitty_backgroundColour_615.confidential = true;
          writer_kitty_backgroundColour_615.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string614)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["document"] = undefined;
          var reader_kitty_document_616 = function() {
            return this.data["document"];
          }
          obj430.methods["document"] = reader_kitty_document_616;
          obj430.data["document"] = undefined;
          var writer_kitty_document_616 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj430.methods["document:="] = writer_kitty_document_616;
          reader_kitty_document_616.confidential = true;
          writer_kitty_document_616.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_617 = function() {
            return this.data["backingCanvas"];
          }
          obj430.methods["backingCanvas"] = reader_kitty_backingCanvas_617;
          obj430.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_617 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj430.methods["backingCanvas:="] = writer_kitty_backingCanvas_617;
          reader_kitty_backingCanvas_617.confidential = true;
          writer_kitty_backingCanvas_617.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["backingContext"] = undefined;
          var reader_kitty_backingContext_618 = function() {
            return this.data["backingContext"];
          }
          obj430.methods["backingContext"] = reader_kitty_backingContext_618;
          obj430.data["backingContext"] = undefined;
          var writer_kitty_backingContext_618 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj430.methods["backingContext:="] = writer_kitty_backingContext_618;
          reader_kitty_backingContext_618.confidential = true;
          writer_kitty_backingContext_618.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["canvas"] = undefined;
          var reader_kitty_canvas_619 = function() {
            return this.data["canvas"];
          }
          obj430.methods["canvas"] = reader_kitty_canvas_619;
          obj430.data["canvas"] = undefined;
          var writer_kitty_canvas_619 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj430.methods["canvas:="] = writer_kitty_canvas_619;
          reader_kitty_canvas_619.confidential = true;
          writer_kitty_canvas_619.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_620 = function() {
            return this.data["canvasWidth"];
          }
          obj430.methods["canvasWidth"] = reader_kitty_canvasWidth_620;
          obj430.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_620 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj430.methods["canvasWidth:="] = writer_kitty_canvasWidth_620;
          reader_kitty_canvasWidth_620.confidential = true;
          writer_kitty_canvasWidth_620.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_621 = function() {
            return this.data["canvasHeight"];
          }
          obj430.methods["canvasHeight"] = reader_kitty_canvasHeight_621;
          obj430.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_621 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj430.methods["canvasHeight:="] = writer_kitty_canvasHeight_621;
          reader_kitty_canvasHeight_621.confidential = true;
          writer_kitty_canvasHeight_621.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 194
          var call622 = callmethod(var_collections,"list", [0]);
          var call623 = callmethod(call622,"new", [0]);
          obj430.data["entities"] = call623;
          var reader_kitty_entities_624 = function() {
            return this.data["entities"];
          }
          obj430.methods["entities"] = reader_kitty_entities_624;
          obj430.data["entities"] = call623;
          var writer_kitty_entities_624 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj430.methods["entities:="] = writer_kitty_entities_624;
          reader_kitty_entities_624.confidential = true;
          writer_kitty_entities_624.confidential = true;
          lineNumber = 196;
          moduleName = "kitty";
          lineNumber = 194
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call623)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 196
          var bool625 = new GraceBoolean(false)
          obj430.data["isInit"] = bool625;
          var reader_kitty_isInit_626 = function() {
            return this.data["isInit"];
          }
          obj430.methods["isInit"] = reader_kitty_isInit_626;
          obj430.data["isInit"] = bool625;
          var writer_kitty_isInit_626 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj430.methods["isInit:="] = writer_kitty_isInit_626;
          reader_kitty_isInit_626.confidential = true;
          writer_kitty_isInit_626.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 196
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool625)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 197
          var bool627 = new GraceBoolean(false)
          obj430.data["isRunning"] = bool627;
          var reader_kitty_isRunning_628 = function() {
            return this.data["isRunning"];
          }
          obj430.methods["isRunning"] = reader_kitty_isRunning_628;
          obj430.data["isRunning"] = bool627;
          var writer_kitty_isRunning_628 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj430.methods["isRunning:="] = writer_kitty_isRunning_628;
          reader_kitty_isRunning_628.confidential = true;
          writer_kitty_isRunning_628.confidential = true;
          lineNumber = 199;
          moduleName = "kitty";
          lineNumber = 197
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool627)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["mctx"] = undefined;
          var reader_kitty_mctx_629 = function() {
            return this.data["mctx"];
          }
          obj430.methods["mctx"] = reader_kitty_mctx_629;
          obj430.data["mctx"] = undefined;
          var writer_kitty_mctx_629 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj430.methods["mctx:="] = writer_kitty_mctx_629;
          reader_kitty_mctx_629.confidential = true;
          writer_kitty_mctx_629.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 203
          lineNumber = 201
          var call630 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj430.data["currentKeyDown"] = call630;
          var reader_kitty_currentKeyDown_631 = function() {
            return this.data["currentKeyDown"];
          }
          obj430.methods["currentKeyDown"] = reader_kitty_currentKeyDown_631;
          obj430.data["currentKeyDown"] = call630;
          var writer_kitty_currentKeyDown_631 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj430.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_631;
          reader_kitty_currentKeyDown_631.confidential = true;
          writer_kitty_currentKeyDown_631.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call630)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj430.mutable = true;
          sourceObject = obj430;
          obj430.data["ent"] = undefined;
          var reader_kitty_ent_632 = function() {
            return this.data["ent"];
          }
          obj430.methods["ent"] = reader_kitty_ent_632;
          obj430.data["ent"] = undefined;
          var writer_kitty_ent_632 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj430.methods["ent:="] = writer_kitty_ent_632;
          reader_kitty_ent_632.confidential = true;
          writer_kitty_ent_632.confidential = true;
          obj430.mutable = true;
          sourceObject = obj430;
          lineNumber = 205
          onSelf = true;
          var call633 = callmethod(this, "init", [0]);
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          sourceObject = obj430;
          superDepth = origSuperDepth;
        }
        obj_init_430.apply(obj430, []);
        return obj430
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func429.paramCounts = [
      0,
    ];
    func429.variableArities = [
      false,
    ];
    obj427.methods["new"] = func429;
    func429.definitionLine = 178;
    func429.definitionModule = "kitty";
    var func634 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj635 = Grace_allocObject();
        obj635.definitionModule = "kitty";
        obj635.definitionLine = 178;
        var inho635 = inheritingObject;
        while (inho635.superobj) inho635 = inho635.superobj;
        inho635.superobj = obj635;
        obj635.data = inheritingObject.data;
        obj635.outer = this;
        var reader_kitty_outer_636 = function() {
          return this.outer;
        }
        obj635.methods["outer"] = reader_kitty_outer_636;
        function obj_init_635() {
          var origSuperDepth = superDepth;
          superDepth = obj635;
          obj635.annotations = [];
          var func637 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              var if638 = var_done;
              lineNumber = 212
              onSelf = true;
              var call639 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call639)) {
                lineNumber = 214
                lineNumber = 213
                var bool640 = new GraceBoolean(false)
                return bool640
              }
              lineNumber = 217
              lineNumber = 194
              lineNumber = 216
              var call641 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call642 = callmethod(this, "document:=", [1], call641);
              lineNumber = 217
              lineNumber = 216
              lineNumber = 217
              var string643 = new GraceString("standard-canvas");
              onSelf = true;
              var call644 = callmethod(this, "document", [0]);
              var call645 = callmethod(call644,"getElementById", [1], string643);
              onSelf = true;
              var call646 = callmethod(this, "canvas:=", [1], call645);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call647 = callmethod(this, "canvas", [0]);
              var call648 = callmethod(call647,"width", [0]);
              onSelf = true;
              var call649 = callmethod(this, "canvasWidth:=", [1], call648);
              lineNumber = 222
              lineNumber = 218
              lineNumber = 219
              onSelf = true;
              var call650 = callmethod(this, "canvas", [0]);
              var call651 = callmethod(call650,"height", [0]);
              onSelf = true;
              var call652 = callmethod(this, "canvasHeight:=", [1], call651);
              lineNumber = 234
              var block653 = Grace_allocObject();
              block653.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block653.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block653.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block653.methods["match"] = GraceBlock_match;
              block653.methods["prefix?"] = GraceBlock_lift;
              block653.receiver = this;
              block653.className = 'block<kitty:234>';
              block653.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 225
                lineNumber = 224
                onSelf = true;
                var call654 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call656 = callmethod(this, "canvas", [0]);
                var call657 = callmethod(call656,"offsetWidth", [0]);
                onSelf = true;
                var call659 = callmethod(this, "canvas", [0]);
                var call660 = callmethod(call659,"offsetLeft", [0]);
                var call662 = callmethod(var_ev,"clientX", [0]);
                var diff664 = callmethod(call662, "-", [1], call660);
                var quotient666 = callmethod(diff664, "/", [1], call657);
                var prod668 = callmethod(quotient666, "*", [1], call654);
                var var_x = prod668;
                lineNumber = 225;
                moduleName = "kitty";
                lineNumber = 224
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 229
                lineNumber = 225
                onSelf = true;
                var call669 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call671 = callmethod(this, "canvas", [0]);
                var call672 = callmethod(call671,"offsetHeight", [0]);
                onSelf = true;
                var call674 = callmethod(this, "canvas", [0]);
                var call675 = callmethod(call674,"offsetTop", [0]);
                var call677 = callmethod(var_ev,"clientY", [0]);
                var diff679 = callmethod(call677, "-", [1], call675);
                var quotient681 = callmethod(diff679, "/", [1], call672);
                var prod683 = callmethod(quotient681, "*", [1], call669);
                var var_y = prod683;
                lineNumber = 229;
                moduleName = "kitty";
                lineNumber = 225
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 233
                var if684 = var_done;
                lineNumber = 229
                var opresult687 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call690 = callmethod(this, "canvasWidth", [0]);
                var diff692 = callmethod(call690, "-", [1], new GraceNum(20));
                var opresult695 = callmethod(var_x, ">", [1], diff692);
                var opresult697 = callmethod(opresult695, "&&", [1], opresult687);
                if (Grace_isTrue(opresult697)) {
                  lineNumber = 230
                  var call698 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 231
                  onSelf = true;
                  var call699 = callmethod(this, "stop", [0]);
                  if684 = call699;
                }
                return if684;
              };
              var_mouseDownListener = block653;
              lineNumber = 234
              var string700 = new GraceString("mousedown");
              onSelf = true;
              var call701 = callmethod(this, "canvas", [0]);
              var call702 = callmethod(call701,"addEventListener", [2], string700, var_mouseDownListener);
              lineNumber = 244
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
              block703.className = 'block<kitty:244>';
              block703.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 242
                var if704 = var_done;
                lineNumber = 239
                var call706 = callmethod(var_ev,"keyCode", [0]);
                var opresult708 = callmethod(call706, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult708)) {
                  lineNumber = 240
                  onSelf = true;
                  var call709 = callmethod(this, "stop", [0]);
                  if704 = call709;
                }
                lineNumber = 243
                lineNumber = 239
                lineNumber = 242
                var call710 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call711 = callmethod(this, "currentKeyDown:=", [1], call710);
                return call711;
              };
              var_keyDownListener = block703;
              lineNumber = 244
              var string712 = new GraceString("keydown");
              onSelf = true;
              var call713 = callmethod(this, "document", [0]);
              var call714 = callmethod(call713,"addEventListener", [2], string712, var_keyDownListener);
              lineNumber = 250
              var block715 = Grace_allocObject();
              block715.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block715.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block715.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block715.methods["match"] = GraceBlock_match;
              block715.methods["prefix?"] = GraceBlock_lift;
              block715.receiver = this;
              block715.className = 'block<kitty:250>';
              block715.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 249
                lineNumber = 242
                lineNumber = 249
                lineNumber = 248
                var call716 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call717 = callmethod(this, "currentKeyDown:=", [1], call716);
                return call717;
              };
              var_keyUpListener = block715;
              lineNumber = 250
              var string718 = new GraceString("keyup");
              onSelf = true;
              var call719 = callmethod(this, "document", [0]);
              var call720 = callmethod(call719,"addEventListener", [2], string718, var_keyUpListener);
              lineNumber = 252
              lineNumber = 242
              lineNumber = 252
              var string721 = new GraceString("canvas");
              var call722 = callmethod(var_dom,"document", [0]);
              var call723 = callmethod(call722,"createElement", [1], string721);
              onSelf = true;
              var call724 = callmethod(this, "backingCanvas:=", [1], call723);
              lineNumber = 254
              lineNumber = 252
              lineNumber = 253
              onSelf = true;
              var call725 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call726 = callmethod(this, "backingCanvas", [0]);
              var call727 = callmethod(call726,"height:=", [1], call725);
              lineNumber = 255
              lineNumber = 252
              lineNumber = 254
              onSelf = true;
              var call728 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call729 = callmethod(this, "backingCanvas", [0]);
              var call730 = callmethod(call729,"width:=", [1], call728);
              lineNumber = 255
              lineNumber = 252
              lineNumber = 255
              var string731 = new GraceString("2d");
              onSelf = true;
              var call732 = callmethod(this, "backingCanvas", [0]);
              var call733 = callmethod(call732,"getContext", [1], string731);
              onSelf = true;
              var call734 = callmethod(this, "backingContext:=", [1], call733);
              lineNumber = 256
              lineNumber = 252
              lineNumber = 256
              var string735 = new GraceString("2d");
              onSelf = true;
              var call736 = callmethod(this, "canvas", [0]);
              var call737 = callmethod(call736,"getContext", [1], string735);
              onSelf = true;
              var call738 = callmethod(this, "mctx:=", [1], call737);
              lineNumber = 259
              var string739 = new GraceString("doggo.jpg");
              onSelf = true;
              var call740 = callmethod(this, "setBackground", [1], string739);
              lineNumber = 271
              lineNumber = 252
              lineNumber = 265
              var bool741 = new GraceBoolean(true)
              onSelf = true;
              var call742 = callmethod(this, "isInit:=", [1], bool741);
              return call742
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func637.paramCounts = [
            0,
          ];
          func637.variableArities = [
            false,
          ];
          obj635.methods["init"] = func637;
          func637.definitionLine = 208;
          func637.definitionModule = "kitty";
          var func743 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func743.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              lineNumber = 252
              lineNumber = 276
              var bool744 = new GraceBoolean(true)
              onSelf = true;
              var call745 = callmethod(this, "isRunning:=", [1], bool744);
              lineNumber = 277
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
              block746.className = 'block<kitty:277>';
              block746.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call747 = callmethod(this, "isRunning", [0]);
                return call747;
              };
              lineNumber = 281
              var block748 = Grace_allocObject();
              block748.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block748.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block748.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block748.methods["match"] = GraceBlock_match;
              block748.methods["prefix?"] = GraceBlock_lift;
              block748.receiver = this;
              block748.className = 'block<kitty:281>';
              block748.real = function(
              ) {
                sourceObject = this;
                lineNumber = 278
                onSelf = true;
                var call749 = callmethod(this, "update", [0]);
                return call749;
              };
              lineNumber = 277
              var call750 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block746, new GraceNum(10), block748);
              return call750
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func743.paramCounts = [
            0,
          ];
          func743.variableArities = [
            false,
          ];
          obj635.methods["start"] = func743;
          func743.definitionLine = 274;
          func743.definitionModule = "kitty";
          var func751 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func751.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              lineNumber = 252
              lineNumber = 289
              onSelf = true;
              var call752 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call753 = callmethod(this, "mctx", [0]);
              var call754 = callmethod(call753,"fillStyle:=", [1], call752);
              lineNumber = 290
              onSelf = true;
              var call755 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call756 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call757 = callmethod(this, "mctx", [0]);
              var call758 = callmethod(call757,"fillRect", [4], new GraceNum(0), new GraceNum(0), call755, call756);
              lineNumber = 291
              onSelf = true;
              var call759 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call760 = callmethod(this, "mctx", [0]);
              var call761 = callmethod(call760,"drawImage", [3], call759, new GraceNum(0), new GraceNum(0));
              lineNumber = 292
              onSelf = true;
              var call762 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call764 = callmethod(this, "canvasWidth", [0]);
              var quotient766 = callmethod(call764, "/", [1], new GraceNum(2));
              onSelf = true;
              var call768 = callmethod(this, "canvasHeight", [0]);
              var quotient770 = callmethod(call768, "/", [1], new GraceNum(2));
              onSelf = true;
              var call771 = callmethod(this, "background", [0]);
              var call772 = callmethod(call771,"draw", [4], call762, quotient766, quotient770, new GraceNum(0));
              lineNumber = 295
              onSelf = true;
              var call773 = callmethod(this, "entities", [0]);
              lineNumber = 301
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
              block774.className = 'block<kitty:301>';
              block774.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 296
                var call775 = callmethod(var_entity,"tick", [0]);
                lineNumber = 297
                onSelf = true;
                var call776 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call778 = callmethod(this, "canvasWidth", [0]);
                var quotient780 = callmethod(call778, "/", [1], new GraceNum(2));
                onSelf = true;
                var call782 = callmethod(this, "canvasHeight", [0]);
                var quotient784 = callmethod(call782, "/", [1], new GraceNum(2));
                var call785 = callmethod(var_entity,"draw", [3], call776, quotient780, quotient784);
                return call785;
              };
              var call786 = callmethod(Grace_prelude,"for()do", [1, 1], call773, block774);
              return call786
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func751.paramCounts = [
            0,
          ];
          func751.variableArities = [
            false,
          ];
          obj635.methods["update"] = func751;
          func751.definitionLine = 284;
          func751.definitionModule = "kitty";
          var func787 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func787.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 304
              var string788 = new GraceString("WORLD STOPPING...");
              var call789 = Grace_print(string788);
              lineNumber = 306
              lineNumber = 296
              lineNumber = 305
              var bool790 = new GraceBoolean(false)
              onSelf = true;
              var call791 = callmethod(this, "isRunning:=", [1], bool790);
              lineNumber = 306
              var string792 = new GraceString("mousedown");
              onSelf = true;
              var call793 = callmethod(this, "canvas", [0]);
              var call794 = callmethod(call793,"removeEventListener", [2], string792, var_mouseDownListener);
              lineNumber = 307
              var string795 = new GraceString("keydown");
              onSelf = true;
              var call796 = callmethod(this, "document", [0]);
              var call797 = callmethod(call796,"removeEventListener", [2], string795, var_keyDownListener);
              lineNumber = 308
              var string798 = new GraceString("keyup");
              onSelf = true;
              var call799 = callmethod(this, "document", [0]);
              var call800 = callmethod(call799,"removeEventListener", [2], string798, var_keyUpListener);
              return call800
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func787.paramCounts = [
            0,
          ];
          func787.variableArities = [
            false,
          ];
          obj635.methods["stop"] = func787;
          func787.definitionLine = 303;
          func787.definitionModule = "kitty";
          var func801 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func801.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 313
              lineNumber = 312
              onSelf = true;
              var call802 = callmethod(this, "currentKeyDown", [0]);
              var opresult805 = callmethod(var_key, "==", [1], call802);
              return opresult805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func801.paramCounts = [
            1,
          ];
          func801.variableArities = [
            false,
          ];
          obj635.methods["isKeyDown"] = func801;
          func801.definitionLine = 311;
          func801.definitionModule = "kitty";
          var func806 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              lineNumber = 296
              lineNumber = 316
              onSelf = true;
              var call807 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call808 = callmethod(this, "canvasHeight", [0]);
              var call809 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call810 = callmethod(call809, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call811 = callmethod(call810, "Image()width()height", [1, 1, 1], var_url, call807, call808);
              onSelf = true;
              var call812 = callmethod(this, "background:=", [1], call811);
              return call812
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
          obj635.methods["setBackground"] = func806;
          func806.definitionLine = 315;
          func806.definitionModule = "kitty";
          var func813 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func813.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 320
              onSelf = true;
              var call814 = callmethod(this, "entities", [0]);
              var call815 = callmethod(call814,"push", [1], var_e);
              return call815
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func813.paramTypes = [];
          func813.paramTypes.push([]);
          func813.paramCounts = [
            1,
          ];
          func813.variableArities = [
            false,
          ];
          obj635.methods["addEntity"] = func813;
          func813.definitionLine = 319;
          func813.definitionModule = "kitty";
          var func816 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func816.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              lineNumber = 324
              onSelf = true;
              var call817 = callmethod(this, "mctx", [0]);
              return call817
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func816.paramCounts = [
            0,
          ];
          func816.variableArities = [
            false,
          ];
          obj635.methods["getContext"] = func816;
          func816.definitionLine = 323;
          func816.definitionModule = "kitty";
          sourceObject = obj635;
          obj635.data["background"] = undefined;
          var reader_kitty_background_818 = function() {
            return this.data["background"];
          }
          obj635.methods["background"] = reader_kitty_background_818;
          obj635.data["background"] = undefined;
          var writer_kitty_background_818 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj635.methods["background:="] = writer_kitty_background_818;
          reader_kitty_background_818.confidential = true;
          writer_kitty_background_818.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 183
          var string819 = new GraceString("black");
          obj635.data["backgroundColour"] = string819;
          var reader_kitty_backgroundColour_820 = function() {
            return this.data["backgroundColour"];
          }
          obj635.methods["backgroundColour"] = reader_kitty_backgroundColour_820;
          obj635.data["backgroundColour"] = string819;
          var writer_kitty_backgroundColour_820 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj635.methods["backgroundColour:="] = writer_kitty_backgroundColour_820;
          reader_kitty_backgroundColour_820.confidential = true;
          writer_kitty_backgroundColour_820.confidential = true;
          lineNumber = 185;
          moduleName = "kitty";
          lineNumber = 183
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string819)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["document"] = undefined;
          var reader_kitty_document_821 = function() {
            return this.data["document"];
          }
          obj635.methods["document"] = reader_kitty_document_821;
          obj635.data["document"] = undefined;
          var writer_kitty_document_821 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj635.methods["document:="] = writer_kitty_document_821;
          reader_kitty_document_821.confidential = true;
          writer_kitty_document_821.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_822 = function() {
            return this.data["backingCanvas"];
          }
          obj635.methods["backingCanvas"] = reader_kitty_backingCanvas_822;
          obj635.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_822 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj635.methods["backingCanvas:="] = writer_kitty_backingCanvas_822;
          reader_kitty_backingCanvas_822.confidential = true;
          writer_kitty_backingCanvas_822.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["backingContext"] = undefined;
          var reader_kitty_backingContext_823 = function() {
            return this.data["backingContext"];
          }
          obj635.methods["backingContext"] = reader_kitty_backingContext_823;
          obj635.data["backingContext"] = undefined;
          var writer_kitty_backingContext_823 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj635.methods["backingContext:="] = writer_kitty_backingContext_823;
          reader_kitty_backingContext_823.confidential = true;
          writer_kitty_backingContext_823.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["canvas"] = undefined;
          var reader_kitty_canvas_824 = function() {
            return this.data["canvas"];
          }
          obj635.methods["canvas"] = reader_kitty_canvas_824;
          obj635.data["canvas"] = undefined;
          var writer_kitty_canvas_824 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj635.methods["canvas:="] = writer_kitty_canvas_824;
          reader_kitty_canvas_824.confidential = true;
          writer_kitty_canvas_824.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_825 = function() {
            return this.data["canvasWidth"];
          }
          obj635.methods["canvasWidth"] = reader_kitty_canvasWidth_825;
          obj635.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_825 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj635.methods["canvasWidth:="] = writer_kitty_canvasWidth_825;
          reader_kitty_canvasWidth_825.confidential = true;
          writer_kitty_canvasWidth_825.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_826 = function() {
            return this.data["canvasHeight"];
          }
          obj635.methods["canvasHeight"] = reader_kitty_canvasHeight_826;
          obj635.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_826 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj635.methods["canvasHeight:="] = writer_kitty_canvasHeight_826;
          reader_kitty_canvasHeight_826.confidential = true;
          writer_kitty_canvasHeight_826.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 194
          var call827 = callmethod(var_collections,"list", [0]);
          var call828 = callmethod(call827,"new", [0]);
          obj635.data["entities"] = call828;
          var reader_kitty_entities_829 = function() {
            return this.data["entities"];
          }
          obj635.methods["entities"] = reader_kitty_entities_829;
          obj635.data["entities"] = call828;
          var writer_kitty_entities_829 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj635.methods["entities:="] = writer_kitty_entities_829;
          reader_kitty_entities_829.confidential = true;
          writer_kitty_entities_829.confidential = true;
          lineNumber = 196;
          moduleName = "kitty";
          lineNumber = 194
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call828)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 196
          var bool830 = new GraceBoolean(false)
          obj635.data["isInit"] = bool830;
          var reader_kitty_isInit_831 = function() {
            return this.data["isInit"];
          }
          obj635.methods["isInit"] = reader_kitty_isInit_831;
          obj635.data["isInit"] = bool830;
          var writer_kitty_isInit_831 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj635.methods["isInit:="] = writer_kitty_isInit_831;
          reader_kitty_isInit_831.confidential = true;
          writer_kitty_isInit_831.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 196
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool830)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 197
          var bool832 = new GraceBoolean(false)
          obj635.data["isRunning"] = bool832;
          var reader_kitty_isRunning_833 = function() {
            return this.data["isRunning"];
          }
          obj635.methods["isRunning"] = reader_kitty_isRunning_833;
          obj635.data["isRunning"] = bool832;
          var writer_kitty_isRunning_833 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj635.methods["isRunning:="] = writer_kitty_isRunning_833;
          reader_kitty_isRunning_833.confidential = true;
          writer_kitty_isRunning_833.confidential = true;
          lineNumber = 199;
          moduleName = "kitty";
          lineNumber = 197
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool832)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["mctx"] = undefined;
          var reader_kitty_mctx_834 = function() {
            return this.data["mctx"];
          }
          obj635.methods["mctx"] = reader_kitty_mctx_834;
          obj635.data["mctx"] = undefined;
          var writer_kitty_mctx_834 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj635.methods["mctx:="] = writer_kitty_mctx_834;
          reader_kitty_mctx_834.confidential = true;
          writer_kitty_mctx_834.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 203
          lineNumber = 201
          var call835 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj635.data["currentKeyDown"] = call835;
          var reader_kitty_currentKeyDown_836 = function() {
            return this.data["currentKeyDown"];
          }
          obj635.methods["currentKeyDown"] = reader_kitty_currentKeyDown_836;
          obj635.data["currentKeyDown"] = call835;
          var writer_kitty_currentKeyDown_836 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj635.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_836;
          reader_kitty_currentKeyDown_836.confidential = true;
          writer_kitty_currentKeyDown_836.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call835)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj635.mutable = true;
          sourceObject = obj635;
          obj635.data["ent"] = undefined;
          var reader_kitty_ent_837 = function() {
            return this.data["ent"];
          }
          obj635.methods["ent"] = reader_kitty_ent_837;
          obj635.data["ent"] = undefined;
          var writer_kitty_ent_837 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj635.methods["ent:="] = writer_kitty_ent_837;
          reader_kitty_ent_837.confidential = true;
          writer_kitty_ent_837.confidential = true;
          obj635.mutable = true;
          sourceObject = obj635;
          lineNumber = 205
          onSelf = true;
          var call838 = callmethod(this, "init", [0]);
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          sourceObject = obj635;
          superDepth = origSuperDepth;
        }
        obj_init_635.apply(inheritingObject, []);
        return obj635
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj427.methods["new()object"] = func634;
    var func839 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 178
        var string840 = new GraceString("class KittyWorld");
        return string840
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func839.paramCounts = [
    ];
    func839.variableArities = [
    ];
    obj427.methods["asDebugString"] = func839;
    func839.definitionLine = 178;
    func839.definitionModule = "kitty";
    sourceObject = obj427;
    sourceObject = obj427;
    superDepth = origSuperDepth;
  }
  obj_init_427.apply(obj427, []);
  var var_KittyWorld = obj427;
  lineNumber = 329
  lineNumber = 338
  lineNumber = 353
  lineNumber = 358
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image()width()height\n KittyKat\n Entity()x()y()actions\n action\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n width\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\nfresh:Image()width()height:\n width\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\nmethods-of:KittyWorld.new:\n ent:=\n currentKeyDown\n backingCanvas\n ent\n setBackground\n isInit\n mctx:=\n backgroundColour:=\n mctx\n entities:=\n backingCanvas:=\n entities\n backgroundColour\n backingContext:=\n canvasHeight:=\n init\n canvasHeight\n currentKeyDown:=\n canvas\n canvasWidth:=\n background\n stop\n isInit:=\n document:=\n addEntity\n canvasWidth\n document\n isRunning:=\n update\n getContext\n start\n canvas:=\n backingContext\n background:=\n isRunning\n isKeyDown\nconstructors-of:KittyKat:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyKat\n KittyWorld\nconfidential:\nfresh:Entity()x()y()actions:\n action\n posX:=\n posY:=\n image\n rotation:=\n turn\n posX\n tick\n draw\n update\n rotation\n tag:=\n move\n onDestroy\n setImage\n tag\n awake\n setAction\n action:=\n strafe\n posY\n actions:=\n createImage\n actions\n start\n setLocation\n getRotation\n getX\n getY\n image:=\nconstructors-of:KittyWorld:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nmodules:\n StandardPrelude\n mgcollections\nfresh:World:\n ent:=\n currentKeyDown\n backingContext:=\n ent\n setBackground\n isInit\n canvasWidth:=\n backingCanvas\n canvasWidth\n entities:=\n backingCanvas:=\n entities\n backingContext\n backgroundColour:=\n canvasHeight:=\n init\n canvasHeight\n currentKeyDown:=\n canvas\n mctx:=\n background\n stop\n isInit:=\n document:=\n addEntity\n mctx\n document\n isRunning:=\n update\n getContext\n start\n canvas:=\n backgroundColour\n background:=\n isKeyDown\n isRunning\nmethods-of:KittyKat.new:\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n tick\n draw\n createImage\n rotation\n tag:=\n move\n onDestroy\n setAction\n tag\n turn\n update\n getRotation\n strafe\n posY\n actions:=\n start\n actions\n setImage\n setLocation\n action:=\n getX\n getY\n image:=\n";
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
    "class KittyKat.new(tag', x', y') {",
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
    "    var actions := collections.list.new",
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
    "        inherits KittyKat.new(tag', x', y')",
    "        actions'",
    "    }",
    "}",
    "",
    "method action {",
    "",
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
