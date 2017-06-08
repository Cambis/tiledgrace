function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 64
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
      lineNumber = 65
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 65;
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
        lineNumber = 66
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
  func0.definitionLine = 64;
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
      obj5.definitionLine = 65;
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
  lineNumber = 165
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
      lineNumber = 166
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 166;
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
        lineNumber = 167
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
  func8.definitionLine = 165;
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
      obj13.definitionLine = 166;
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
  lineNumber = 173
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
      lineNumber = 174
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
  func16.definitionLine = 173;
  func16.definitionModule = "kitty";
  lineNumber = 177
  var func18 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onDestroy)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 178
      var call19 = callmethod(var_kitten,"setDestroyAction", [1], var_action__39__);
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
  this.methods["onDestroy"] = func18;
  func18.definitionLine = 177;
  func18.definitionModule = "kitty";
  lineNumber = 181
  var func20 = function(argcv) {
    var curarg = 1;
    var var_key = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func20.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 183
      lineNumber = 182
      var opresult23 = callmethod(var_key, "==", [1], var_currentKeyDown);
      return opresult23
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
  this.methods["isKeyDown"] = func20;
  func20.definitionLine = 181;
  func20.definitionModule = "kitty";
  lineNumber = 349
  var func24 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func24.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func24.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 350
      var obj25 = Grace_allocObject();
      obj25.definitionModule = "kitty";
      obj25.definitionLine = 350;
      obj25.outer = this;
      var reader_kitty_outer_26 = function() {
        return this.outer;
      }
      obj25.methods["outer"] = reader_kitty_outer_26;
      function obj_init_25() {
        var origSuperDepth = superDepth;
        superDepth = obj25;
        obj25.annotations = [];
        sourceObject = obj25;
        lineNumber = 351
        var call27 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj25.superobj = call27;
        obj25._value = call27._value;
        superDepth = origSuperDepth;
      }
      obj_init_25.apply(obj25, []);
      return obj25
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func24.paramCounts = [
    1,
    1,
    1,
  ];
  func24.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["World()width()height"] = func24;
  func24.definitionLine = 349;
  func24.definitionModule = "kitty";
  var func28 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    var var_width__39__ = arguments[curarg];
    curarg++;
    var var_height__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj29 = Grace_allocObject();
      obj29.definitionModule = "kitty";
      obj29.definitionLine = 350;
      var inho29 = inheritingObject;
      while (inho29.superobj) inho29 = inho29.superobj;
      inho29.superobj = obj29;
      obj29.data = inheritingObject.data;
      obj29.outer = this;
      var reader_kitty_outer_30 = function() {
        return this.outer;
      }
      obj29.methods["outer"] = reader_kitty_outer_30;
      function obj_init_29() {
        var origSuperDepth = superDepth;
        superDepth = obj29;
        obj29.annotations = [];
        sourceObject = obj29;
        var call31 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj29.superobj = call31;
        obj29._value = call31._value;
        superDepth = origSuperDepth;
      }
      obj_init_29.apply(inheritingObject, []);
      return obj29
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()width()height()object"] = func28;
  lineNumber = 358
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 360
      var string33 = new GraceString("CHECKING...");
      var call34 = Grace_print(string33);
      lineNumber = 367
      var if35 = var_done;
      lineNumber = 362
      var call36 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call36)) {
        lineNumber = 363
        var string37 = new GraceString("NO WORLD!!");
        var call38 = Grace_print(string37);
        lineNumber = 365
        return var_done
      }
      lineNumber = 367
      var string39 = new GraceString("STARTING...");
      var call40 = Grace_print(string39);
      lineNumber = 370
      var call41 = callmethod(var_m__95__world,"start", [0]);
      return call41
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func32.paramCounts = [
    0,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["start"] = func32;
  func32.definitionLine = 358;
  func32.definitionModule = "kitty";
  lineNumber = 373
  var func42 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 374
      var call43 = callmethod(var_m__95__world,"stop", [0]);
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
    0,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["stop"] = func42;
  func42.definitionLine = 373;
  func42.definitionModule = "kitty";
  lineNumber = 377
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
      lineNumber = 379
      lineNumber = 378
      var_m__95__world = var_world__39__;
      lineNumber = 380
      lineNumber = 379
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
  func44.definitionLine = 377;
  func44.definitionModule = "kitty";
  lineNumber = 382
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
      lineNumber = 383
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
  func46.definitionLine = 382;
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
  lineNumber = 374
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
  func49.definitionLine = 374;
  func49.definitionModule = "kitty";
  lineNumber = 374
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
  func50.definitionLine = 374;
  func50.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool51 = new GraceBoolean(false)
  var var_worldSet = bool51;
  lineNumber = 374
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
  func52.definitionLine = 374;
  func52.definitionModule = "kitty";
  lineNumber = 374
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
  func53.definitionLine = 374;
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
  lineNumber = 374
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
  func54.definitionLine = 374;
  func54.definitionModule = "kitty";
  lineNumber = 374
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
  func55.definitionLine = 374;
  func55.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 374
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
  func56.definitionLine = 374;
  func56.definitionModule = "kitty";
  lineNumber = 374
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
  func57.definitionLine = 374;
  func57.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 374
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
  func58.definitionLine = 374;
  func58.definitionModule = "kitty";
  lineNumber = 374
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
  func59.definitionLine = 374;
  func59.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call60 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call60;
  lineNumber = 374
  var func61 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func61.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 15
      return var_currentKeyDown
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
  this.methods["currentKeyDown"] = func61;
  func61.definitionLine = 374;
  func61.definitionModule = "kitty";
  lineNumber = 374
  var func62 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func62.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_currentKeyDown = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
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
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func62;
  func62.definitionLine = 374;
  func62.definitionModule = "kitty";
  lineNumber = 18;
  moduleName = "kitty";
  lineNumber = 15
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_currentKeyDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'currentKeyDown' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 21
  lineNumber = 18
  var call63 = callmethod(var_dom,"window", [0]);
  var call64 = callmethod(call63,"Math", [0]);
  var var_math = call64;
  var func65 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func65.paramCounts[0])
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
  func65.paramCounts = [
    0,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["math"] = func65;
  func65.definitionLine = 18;
  func65.definitionModule = "kitty";
  lineNumber = 21;
  moduleName = "kitty";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 26
  var var_kitten;
  lineNumber = 18
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 21
      return var_kitten
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["kitten"] = func66;
  func66.definitionLine = 18;
  func66.definitionModule = "kitty";
  lineNumber = 18
  var func67 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    1,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func67;
  func67.definitionLine = 18;
  func67.definitionModule = "kitty";
  lineNumber = 26
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func68;
  func68.definitionLine = 26;
  func68.definitionModule = "kitty";
  var obj69 = Grace_allocObject();
  obj69.definitionModule = "kitty";
  obj69.definitionLine = 26;
  obj69.outer = this;
  var reader_kitty_outer_70 = function() {
    return this.outer;
  }
  obj69.methods["outer"] = reader_kitty_outer_70;
  function obj_init_69() {
    var origSuperDepth = superDepth;
    superDepth = obj69;
    obj69.annotations = [];
    var func71 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func71.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj72 = Grace_allocObject();
        obj72.definitionModule = "kitty";
        obj72.definitionLine = 26;
        obj72.outer = this;
        var reader_kitty_outer_73 = function() {
          return this.outer;
        }
        obj72.methods["outer"] = reader_kitty_outer_73;
        function obj_init_72() {
          var origSuperDepth = superDepth;
          superDepth = obj72;
          obj72.annotations = [];
          var func74 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func74.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call75 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call76 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod80 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient82 = callmethod(prod80, "/", [1], new GraceNum(180));
              var call83 = callmethod(var_ctx,"rotate", [1], quotient82);
              lineNumber = 46
              onSelf = true;
              var call84 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block85 = Grace_allocObject();
              block85.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block85.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block85.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block85.methods["match"] = GraceBlock_match;
              block85.methods["prefix?"] = GraceBlock_lift;
              block85.receiver = this;
              block85.className = 'block<kitty:49>';
              block85.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call87 = callmethod(this, "width", [0]);
                var call88 = callmethod(call87,"prefix-", [0]);
                var quotient90 = callmethod(call88, "/", [1], new GraceNum(2));
                onSelf = true;
                var call92 = callmethod(this, "height", [0]);
                var call93 = callmethod(call92,"prefix-", [0]);
                var quotient95 = callmethod(call93, "/", [1], new GraceNum(2));
                onSelf = true;
                var call96 = callmethod(this, "width", [0]);
                onSelf = true;
                var call97 = callmethod(this, "height", [0]);
                var call98 = callmethod(var_ctx,"drawImage", [5], var_element, quotient90, quotient95, call96, call97);
                return call98;
              };
              var call99 = callmethod(Grace_prelude,"for()do", [1, 1], call84, block85);
              lineNumber = 49
              var call100 = callmethod(var_ctx,"restore", [0]);
              return call100
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func74.paramCounts = [
            4,
          ];
          func74.variableArities = [
            false,
          ];
          obj72.methods["draw"] = func74;
          func74.definitionLine = 39;
          func74.definitionModule = "kitty";
          var func101 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func101.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call102 = callmethod(this, "imgTag", [0]);
              return call102
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func101.paramCounts = [
            0,
          ];
          func101.variableArities = [
            false,
          ];
          obj72.methods["getTag"] = func101;
          func101.definitionLine = 53;
          func101.definitionModule = "kitty";
          var func103 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func103.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call104 = callmethod(this, "elements", [0]);
              var call105 = callmethod(call104,"push", [1], var_imgTag__39__);
              return call105
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func103.paramCounts = [
            1,
          ];
          func103.variableArities = [
            false,
          ];
          obj72.methods["drawImage"] = func103;
          func103.definitionLine = 57;
          func103.definitionModule = "kitty";
          sourceObject = obj72;
          lineNumber = 30
          var string106 = new GraceString("img");
          var call107 = callmethod(var_dom,"document", [0]);
          var call108 = callmethod(call107,"createElement", [1], string106);
          obj72.data["imgTag"] = call108;
          var reader_kitty_imgTag_109 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_109.def = true;
          reader_kitty_imgTag_109.confidential = true;
          obj72.methods["imgTag"] = reader_kitty_imgTag_109;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call108)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj72;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call110 = callmethod(this, "imgTag", [0]);
          var call111 = callmethod(call110,"src:=", [1], var_url__39__);
          sourceObject = obj72;
          lineNumber = 33
          var call112 = callmethod(var_collections,"list", [0]);
          var call113 = callmethod(call112,"new", [0]);
          obj72.data["elements"] = call113;
          var reader_kitty_elements_114 = function() {
            return this.data["elements"];
          }
          obj72.methods["elements"] = reader_kitty_elements_114;
          obj72.data["elements"] = call113;
          var writer_kitty_elements_114 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj72.methods["elements:="] = writer_kitty_elements_114;
          reader_kitty_elements_114.confidential = true;
          writer_kitty_elements_114.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call113)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj72.mutable = true;
          sourceObject = obj72;
          lineNumber = 34
          onSelf = true;
          var call115 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call116 = callmethod(this, "elements", [0]);
          var call117 = callmethod(call116,"push", [1], call115);
          sourceObject = obj72;
          lineNumber = 36
          obj72.data["height"] = var_height__39__;
          var reader_kitty_height_118 = function() {
            return this.data["height"];
          }
          obj72.methods["height"] = reader_kitty_height_118;
          obj72.data["height"] = var_height__39__;
          var writer_kitty_height_118 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj72.methods["height:="] = writer_kitty_height_118;
          reader_kitty_height_118.confidential = true;
          writer_kitty_height_118.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj72.mutable = true;
          sourceObject = obj72;
          lineNumber = 37
          obj72.data["width"] = var_width__39__;
          var reader_kitty_width_119 = function() {
            return this.data["width"];
          }
          obj72.methods["width"] = reader_kitty_width_119;
          obj72.data["width"] = var_width__39__;
          var writer_kitty_width_119 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj72.methods["width:="] = writer_kitty_width_119;
          reader_kitty_width_119.confidential = true;
          writer_kitty_width_119.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj72.mutable = true;
          sourceObject = obj72;
          sourceObject = obj72;
          sourceObject = obj72;
          superDepth = origSuperDepth;
        }
        obj_init_72.apply(obj72, []);
        return obj72
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func71.paramCounts = [
      3,
    ];
    func71.variableArities = [
      false,
    ];
    obj69.methods["new"] = func71;
    func71.definitionLine = 26;
    func71.definitionModule = "kitty";
    var func120 = function(argcv) {
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
        var obj121 = Grace_allocObject();
        obj121.definitionModule = "kitty";
        obj121.definitionLine = 26;
        var inho121 = inheritingObject;
        while (inho121.superobj) inho121 = inho121.superobj;
        inho121.superobj = obj121;
        obj121.data = inheritingObject.data;
        obj121.outer = this;
        var reader_kitty_outer_122 = function() {
          return this.outer;
        }
        obj121.methods["outer"] = reader_kitty_outer_122;
        function obj_init_121() {
          var origSuperDepth = superDepth;
          superDepth = obj121;
          obj121.annotations = [];
          var func123 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func123.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call124 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call125 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod129 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient131 = callmethod(prod129, "/", [1], new GraceNum(180));
              var call132 = callmethod(var_ctx,"rotate", [1], quotient131);
              lineNumber = 46
              onSelf = true;
              var call133 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block134 = Grace_allocObject();
              block134.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block134.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block134.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block134.methods["match"] = GraceBlock_match;
              block134.methods["prefix?"] = GraceBlock_lift;
              block134.receiver = this;
              block134.className = 'block<kitty:49>';
              block134.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call136 = callmethod(this, "width", [0]);
                var call137 = callmethod(call136,"prefix-", [0]);
                var quotient139 = callmethod(call137, "/", [1], new GraceNum(2));
                onSelf = true;
                var call141 = callmethod(this, "height", [0]);
                var call142 = callmethod(call141,"prefix-", [0]);
                var quotient144 = callmethod(call142, "/", [1], new GraceNum(2));
                onSelf = true;
                var call145 = callmethod(this, "width", [0]);
                onSelf = true;
                var call146 = callmethod(this, "height", [0]);
                var call147 = callmethod(var_ctx,"drawImage", [5], var_element, quotient139, quotient144, call145, call146);
                return call147;
              };
              var call148 = callmethod(Grace_prelude,"for()do", [1, 1], call133, block134);
              lineNumber = 49
              var call149 = callmethod(var_ctx,"restore", [0]);
              return call149
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func123.paramCounts = [
            4,
          ];
          func123.variableArities = [
            false,
          ];
          obj121.methods["draw"] = func123;
          func123.definitionLine = 39;
          func123.definitionModule = "kitty";
          var func150 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func150.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call151 = callmethod(this, "imgTag", [0]);
              return call151
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func150.paramCounts = [
            0,
          ];
          func150.variableArities = [
            false,
          ];
          obj121.methods["getTag"] = func150;
          func150.definitionLine = 53;
          func150.definitionModule = "kitty";
          var func152 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func152.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call153 = callmethod(this, "elements", [0]);
              var call154 = callmethod(call153,"push", [1], var_imgTag__39__);
              return call154
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func152.paramCounts = [
            1,
          ];
          func152.variableArities = [
            false,
          ];
          obj121.methods["drawImage"] = func152;
          func152.definitionLine = 57;
          func152.definitionModule = "kitty";
          sourceObject = obj121;
          lineNumber = 30
          var string155 = new GraceString("img");
          var call156 = callmethod(var_dom,"document", [0]);
          var call157 = callmethod(call156,"createElement", [1], string155);
          obj121.data["imgTag"] = call157;
          var reader_kitty_imgTag_158 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_158.def = true;
          reader_kitty_imgTag_158.confidential = true;
          obj121.methods["imgTag"] = reader_kitty_imgTag_158;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call157)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj121;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call159 = callmethod(this, "imgTag", [0]);
          var call160 = callmethod(call159,"src:=", [1], var_url__39__);
          sourceObject = obj121;
          lineNumber = 33
          var call161 = callmethod(var_collections,"list", [0]);
          var call162 = callmethod(call161,"new", [0]);
          obj121.data["elements"] = call162;
          var reader_kitty_elements_163 = function() {
            return this.data["elements"];
          }
          obj121.methods["elements"] = reader_kitty_elements_163;
          obj121.data["elements"] = call162;
          var writer_kitty_elements_163 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj121.methods["elements:="] = writer_kitty_elements_163;
          reader_kitty_elements_163.confidential = true;
          writer_kitty_elements_163.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call162)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj121.mutable = true;
          sourceObject = obj121;
          lineNumber = 34
          onSelf = true;
          var call164 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call165 = callmethod(this, "elements", [0]);
          var call166 = callmethod(call165,"push", [1], call164);
          sourceObject = obj121;
          lineNumber = 36
          obj121.data["height"] = var_height__39__;
          var reader_kitty_height_167 = function() {
            return this.data["height"];
          }
          obj121.methods["height"] = reader_kitty_height_167;
          obj121.data["height"] = var_height__39__;
          var writer_kitty_height_167 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj121.methods["height:="] = writer_kitty_height_167;
          reader_kitty_height_167.confidential = true;
          writer_kitty_height_167.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj121.mutable = true;
          sourceObject = obj121;
          lineNumber = 37
          obj121.data["width"] = var_width__39__;
          var reader_kitty_width_168 = function() {
            return this.data["width"];
          }
          obj121.methods["width"] = reader_kitty_width_168;
          obj121.data["width"] = var_width__39__;
          var writer_kitty_width_168 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj121.methods["width:="] = writer_kitty_width_168;
          reader_kitty_width_168.confidential = true;
          writer_kitty_width_168.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj121.mutable = true;
          sourceObject = obj121;
          sourceObject = obj121;
          sourceObject = obj121;
          superDepth = origSuperDepth;
        }
        obj_init_121.apply(inheritingObject, []);
        return obj121
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj69.methods["new()object"] = func120;
    var func169 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 26
        var string170 = new GraceString("class KittyImage");
        return string170
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func169.paramCounts = [
    ];
    func169.variableArities = [
    ];
    obj69.methods["asDebugString"] = func169;
    func169.definitionLine = 26;
    func169.definitionModule = "kitty";
    sourceObject = obj69;
    sourceObject = obj69;
    superDepth = origSuperDepth;
  }
  obj_init_69.apply(obj69, []);
  var var_KittyImage = obj69;
  lineNumber = 64
  lineNumber = 71
  var func171 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func171.paramCounts[0])
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
  func171.paramCounts = [
    0,
  ];
  func171.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func171;
  func171.definitionLine = 71;
  func171.definitionModule = "kitty";
  var obj172 = Grace_allocObject();
  obj172.definitionModule = "kitty";
  obj172.definitionLine = 71;
  obj172.outer = this;
  var reader_kitty_outer_173 = function() {
    return this.outer;
  }
  obj172.methods["outer"] = reader_kitty_outer_173;
  function obj_init_172() {
    var origSuperDepth = superDepth;
    superDepth = obj172;
    obj172.annotations = [];
    var func174 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func174.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj175 = Grace_allocObject();
        obj175.definitionModule = "kitty";
        obj175.definitionLine = 71;
        obj175.outer = this;
        var reader_kitty_outer_176 = function() {
          return this.outer;
        }
        obj175.methods["outer"] = reader_kitty_outer_176;
        function obj_init_175() {
          var origSuperDepth = superDepth;
          superDepth = obj175;
          obj175.annotations = [];
          var func177 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              var string178 = new GraceString("realyee.png");
              onSelf = true;
              var call179 = callmethod(this, "createImage", [1], string178);
              lineNumber = 91
              lineNumber = 90
              var_kitten = this;
              lineNumber = 91
              var call180 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call180
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func177.paramCounts = [
            0,
          ];
          func177.variableArities = [
            false,
          ];
          obj175.methods["awake"] = func177;
          func177.definitionLine = 88;
          func177.definitionModule = "kitty";
          var func181 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func181.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              onSelf = true;
              var call182 = callmethod(this, "action", [0]);
              var call183 = callmethod(call182,"apply", [0]);
              return call183
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func181.paramCounts = [
            0,
          ];
          func181.variableArities = [
            false,
          ];
          obj175.methods["tick"] = func181;
          func181.definitionLine = 94;
          func181.definitionModule = "kitty";
          var func184 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              onSelf = true;
              var call185 = callmethod(this, "destroyAction", [0]);
              var call186 = callmethod(call185,"apply", [0]);
              return call186
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func184.paramCounts = [
            0,
          ];
          func184.variableArities = [
            false,
          ];
          obj175.methods["kill"] = func184;
          func184.definitionLine = 98;
          func184.definitionModule = "kitty";
          var func187 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func187.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 99
              lineNumber = 103
              onSelf = true;
              var call190 = callmethod(this, "rotation", [0]);
              var prod192 = callmethod(call190, "*", [1], new GraceNum(3.14159));
              var quotient194 = callmethod(prod192, "/", [1], new GraceNum(180));
              var call195 = callmethod(var_math,"cos", [1], quotient194);
              var call197 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod200 = callmethod(var_distance, "*", [1], call197);
              var prod202 = callmethod(prod200, "*", [1], call195);
              onSelf = true;
              var call204 = callmethod(this, "posX", [0]);
              var opresult206 = callmethod(call204, "+", [1], prod202);
              onSelf = true;
              var call207 = callmethod(this, "posX:=", [1], opresult206);
              lineNumber = 104
              lineNumber = 103
              lineNumber = 104
              onSelf = true;
              var call210 = callmethod(this, "rotation", [0]);
              var prod212 = callmethod(call210, "*", [1], new GraceNum(3.14159));
              var quotient214 = callmethod(prod212, "/", [1], new GraceNum(180));
              var call215 = callmethod(var_math,"sin", [1], quotient214);
              var call217 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod220 = callmethod(var_distance, "*", [1], call217);
              var prod222 = callmethod(prod220, "*", [1], call215);
              onSelf = true;
              var call224 = callmethod(this, "posY", [0]);
              var opresult226 = callmethod(call224, "+", [1], prod222);
              onSelf = true;
              var call227 = callmethod(this, "posY:=", [1], opresult226);
              return call227
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func187.paramCounts = [
            1,
          ];
          func187.variableArities = [
            false,
          ];
          obj175.methods["move"] = func187;
          func187.definitionLine = 102;
          func187.definitionModule = "kitty";
          var func228 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 104
              lineNumber = 108
              onSelf = true;
              var call231 = callmethod(this, "rotation", [0]);
              var opresult234 = callmethod(new GraceNum(90), "+", [1], call231);
              var prod236 = callmethod(opresult234, "*", [1], new GraceNum(3.14159));
              var quotient238 = callmethod(prod236, "/", [1], new GraceNum(180));
              var call239 = callmethod(var_math,"cos", [1], quotient238);
              var call241 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod244 = callmethod(var_distance, "*", [1], call241);
              var prod246 = callmethod(prod244, "*", [1], call239);
              onSelf = true;
              var call248 = callmethod(this, "posX", [0]);
              var opresult250 = callmethod(call248, "+", [1], prod246);
              onSelf = true;
              var call251 = callmethod(this, "posX:=", [1], opresult250);
              lineNumber = 109
              lineNumber = 108
              lineNumber = 109
              onSelf = true;
              var call254 = callmethod(this, "rotation", [0]);
              var opresult257 = callmethod(new GraceNum(90), "+", [1], call254);
              var prod259 = callmethod(opresult257, "*", [1], new GraceNum(3.14159));
              var quotient261 = callmethod(prod259, "/", [1], new GraceNum(180));
              var call262 = callmethod(var_math,"sin", [1], quotient261);
              var call264 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod267 = callmethod(var_distance, "*", [1], call264);
              var prod269 = callmethod(prod267, "*", [1], call262);
              onSelf = true;
              var call271 = callmethod(this, "posY", [0]);
              var opresult273 = callmethod(call271, "+", [1], prod269);
              onSelf = true;
              var call274 = callmethod(this, "posY:=", [1], opresult273);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func228.paramCounts = [
            1,
          ];
          func228.variableArities = [
            false,
          ];
          obj175.methods["strafe"] = func228;
          func228.definitionLine = 107;
          func228.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 114
              lineNumber = 113
              onSelf = true;
              var call277 = callmethod(this, "rotation", [0]);
              var opresult279 = callmethod(call277, "+", [1], var_angle);
              onSelf = true;
              var call280 = callmethod(this, "rotation:=", [1], opresult279);
              return call280
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramCounts = [
            1,
          ];
          func275.variableArities = [
            false,
          ];
          obj175.methods["turn"] = func275;
          func275.definitionLine = 112;
          func275.definitionModule = "kitty";
          var func281 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func281.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              var call282 = callmethod(var_ctx,"save", [0]);
              lineNumber = 118
              onSelf = true;
              var call283 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call284 = callmethod(this, "posY", [0]);
              var call285 = callmethod(var_ctx,"translate", [2], call283, call284);
              lineNumber = 119
              onSelf = true;
              var call286 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call287 = callmethod(this, "image", [0]);
              var call288 = callmethod(call287,"draw", [4], var_ctx, var_dx, var_dy, call286);
              lineNumber = 120
              var call289 = callmethod(var_ctx,"restore", [0]);
              return call289
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func281.paramCounts = [
            3,
          ];
          func281.variableArities = [
            false,
          ];
          obj175.methods["draw"] = func281;
          func281.definitionLine = 116;
          func281.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 120
              lineNumber = 124
              var call291 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call292 = callmethod(call291, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call293 = callmethod(call292, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call294 = callmethod(this, "image:=", [1], call293);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func290.paramCounts = [
            1,
          ];
          func290.variableArities = [
            false,
          ];
          obj175.methods["createImage"] = func290;
          func290.definitionLine = 123;
          func290.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              lineNumber = 124
              lineNumber = 128
              onSelf = true;
              var call296 = callmethod(this, "image:=", [1], var_image__39__);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func295.paramTypes = [];
          func295.paramTypes.push([]);
          func295.paramCounts = [
            1,
          ];
          func295.variableArities = [
            false,
          ];
          obj175.methods["setImage"] = func295;
          func295.definitionLine = 127;
          func295.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 124
              lineNumber = 132
              onSelf = true;
              var call298 = callmethod(this, "action:=", [1], var_action__39__);
              return call298
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
          obj175.methods["setAction"] = func297;
          func297.definitionLine = 131;
          func297.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 124
              lineNumber = 136
              onSelf = true;
              var call300 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func299.paramCounts = [
            1,
          ];
          func299.variableArities = [
            false,
          ];
          obj175.methods["setDestroyAction"] = func299;
          func299.definitionLine = 135;
          func299.definitionModule = "kitty";
          var func301 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 124
              lineNumber = 140
              onSelf = true;
              var call302 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 124
              lineNumber = 141
              onSelf = true;
              var call303 = callmethod(this, "posY:=", [1], var_y);
              return call303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func301.paramCounts = [
            2,
          ];
          func301.variableArities = [
            false,
          ];
          obj175.methods["setLocation"] = func301;
          func301.definitionLine = 139;
          func301.definitionModule = "kitty";
          var func304 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call305 = callmethod(this, "posX", [0]);
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
            0,
          ];
          func304.variableArities = [
            false,
          ];
          obj175.methods["getX"] = func304;
          func304.definitionLine = 144;
          func304.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call307 = callmethod(this, "posY", [0]);
              return call307
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
          obj175.methods["getY"] = func306;
          func306.definitionLine = 148;
          func306.definitionModule = "kitty";
          var func308 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func308.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 124
              lineNumber = 153
              onSelf = true;
              var call309 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call309
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func308.paramCounts = [
            1,
          ];
          func308.variableArities = [
            false,
          ];
          obj175.methods["setX"] = func308;
          func308.definitionLine = 152;
          func308.definitionModule = "kitty";
          var func310 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              lineNumber = 124
              lineNumber = 157
              onSelf = true;
              var call311 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call311
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func310.paramCounts = [
            1,
          ];
          func310.variableArities = [
            false,
          ];
          obj175.methods["setY"] = func310;
          func310.definitionLine = 156;
          func310.definitionModule = "kitty";
          var func312 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call313 = callmethod(this, "rotation", [0]);
              return call313
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
          obj175.methods["getRotation"] = func312;
          func312.definitionLine = 160;
          func312.definitionModule = "kitty";
          sourceObject = obj175;
          lineNumber = 75
          obj175.data["tag"] = var_tag__39__;
          var reader_kitty_tag_314 = function() {
            return this.data["tag"];
          }
          obj175.methods["tag"] = reader_kitty_tag_314;
          obj175.data["tag"] = var_tag__39__;
          var writer_kitty_tag_314 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj175.methods["tag:="] = writer_kitty_tag_314;
          reader_kitty_tag_314.confidential = true;
          writer_kitty_tag_314.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 76
          obj175.data["posX"] = var_x__39__;
          var reader_kitty_posX_315 = function() {
            return this.data["posX"];
          }
          obj175.methods["posX"] = reader_kitty_posX_315;
          obj175.data["posX"] = var_x__39__;
          var writer_kitty_posX_315 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj175.methods["posX:="] = writer_kitty_posX_315;
          reader_kitty_posX_315.confidential = true;
          writer_kitty_posX_315.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 77
          obj175.data["posY"] = var_y__39__;
          var reader_kitty_posY_316 = function() {
            return this.data["posY"];
          }
          obj175.methods["posY"] = reader_kitty_posY_316;
          obj175.data["posY"] = var_y__39__;
          var writer_kitty_posY_316 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj175.methods["posY:="] = writer_kitty_posY_316;
          reader_kitty_posY_316.confidential = true;
          writer_kitty_posY_316.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 78
          obj175.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_317 = function() {
            return this.data["rotation"];
          }
          obj175.methods["rotation"] = reader_kitty_rotation_317;
          obj175.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_317 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj175.methods["rotation:="] = writer_kitty_rotation_317;
          reader_kitty_rotation_317.confidential = true;
          writer_kitty_rotation_317.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 81
          var block318 = Grace_allocObject();
          block318.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block318.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block318.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block318.methods["match"] = GraceBlock_match;
          block318.methods["prefix?"] = GraceBlock_lift;
          block318.receiver = this;
          block318.className = 'block<kitty:81>';
          block318.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj175.data["action"] = block318;
          var reader_kitty_action_319 = function() {
            return this.data["action"];
          }
          obj175.methods["action"] = reader_kitty_action_319;
          obj175.data["action"] = block318;
          var writer_kitty_action_319 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj175.methods["action:="] = writer_kitty_action_319;
          reader_kitty_action_319.confidential = true;
          writer_kitty_action_319.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 80
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block318)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 83
          var block320 = Grace_allocObject();
          block320.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block320.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block320.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block320.methods["match"] = GraceBlock_match;
          block320.methods["prefix?"] = GraceBlock_lift;
          block320.receiver = this;
          block320.className = 'block<kitty:83>';
          block320.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj175.data["destroyAction"] = block320;
          var reader_kitty_destroyAction_321 = function() {
            return this.data["destroyAction"];
          }
          obj175.methods["destroyAction"] = reader_kitty_destroyAction_321;
          obj175.data["destroyAction"] = block320;
          var writer_kitty_destroyAction_321 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj175.methods["destroyAction:="] = writer_kitty_destroyAction_321;
          reader_kitty_destroyAction_321.confidential = true;
          writer_kitty_destroyAction_321.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block320)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj175.mutable = true;
          sourceObject = obj175;
          obj175.data["image"] = undefined;
          var reader_kitty_image_322 = function() {
            return this.data["image"];
          }
          obj175.methods["image"] = reader_kitty_image_322;
          obj175.data["image"] = undefined;
          var writer_kitty_image_322 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj175.methods["image:="] = writer_kitty_image_322;
          reader_kitty_image_322.confidential = true;
          writer_kitty_image_322.confidential = true;
          obj175.mutable = true;
          sourceObject = obj175;
          lineNumber = 85
          onSelf = true;
          var call323 = callmethod(this, "awake", [0]);
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          superDepth = origSuperDepth;
        }
        obj_init_175.apply(obj175, []);
        return obj175
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func174.paramCounts = [
      3,
    ];
    func174.variableArities = [
      false,
    ];
    obj172.methods["new"] = func174;
    func174.definitionLine = 71;
    func174.definitionModule = "kitty";
    var func324 = function(argcv) {
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
        var obj325 = Grace_allocObject();
        obj325.definitionModule = "kitty";
        obj325.definitionLine = 71;
        var inho325 = inheritingObject;
        while (inho325.superobj) inho325 = inho325.superobj;
        inho325.superobj = obj325;
        obj325.data = inheritingObject.data;
        obj325.outer = this;
        var reader_kitty_outer_326 = function() {
          return this.outer;
        }
        obj325.methods["outer"] = reader_kitty_outer_326;
        function obj_init_325() {
          var origSuperDepth = superDepth;
          superDepth = obj325;
          obj325.annotations = [];
          var func327 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func327.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              var string328 = new GraceString("realyee.png");
              onSelf = true;
              var call329 = callmethod(this, "createImage", [1], string328);
              lineNumber = 91
              lineNumber = 90
              var_kitten = this;
              lineNumber = 91
              var call330 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func327.paramCounts = [
            0,
          ];
          func327.variableArities = [
            false,
          ];
          obj325.methods["awake"] = func327;
          func327.definitionLine = 88;
          func327.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              onSelf = true;
              var call332 = callmethod(this, "action", [0]);
              var call333 = callmethod(call332,"apply", [0]);
              return call333
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            0,
          ];
          func331.variableArities = [
            false,
          ];
          obj325.methods["tick"] = func331;
          func331.definitionLine = 94;
          func331.definitionModule = "kitty";
          var func334 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func334.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              onSelf = true;
              var call335 = callmethod(this, "destroyAction", [0]);
              var call336 = callmethod(call335,"apply", [0]);
              return call336
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func334.paramCounts = [
            0,
          ];
          func334.variableArities = [
            false,
          ];
          obj325.methods["kill"] = func334;
          func334.definitionLine = 98;
          func334.definitionModule = "kitty";
          var func337 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 99
              lineNumber = 103
              onSelf = true;
              var call340 = callmethod(this, "rotation", [0]);
              var prod342 = callmethod(call340, "*", [1], new GraceNum(3.14159));
              var quotient344 = callmethod(prod342, "/", [1], new GraceNum(180));
              var call345 = callmethod(var_math,"cos", [1], quotient344);
              var call347 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod350 = callmethod(var_distance, "*", [1], call347);
              var prod352 = callmethod(prod350, "*", [1], call345);
              onSelf = true;
              var call354 = callmethod(this, "posX", [0]);
              var opresult356 = callmethod(call354, "+", [1], prod352);
              onSelf = true;
              var call357 = callmethod(this, "posX:=", [1], opresult356);
              lineNumber = 104
              lineNumber = 103
              lineNumber = 104
              onSelf = true;
              var call360 = callmethod(this, "rotation", [0]);
              var prod362 = callmethod(call360, "*", [1], new GraceNum(3.14159));
              var quotient364 = callmethod(prod362, "/", [1], new GraceNum(180));
              var call365 = callmethod(var_math,"sin", [1], quotient364);
              var call367 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod370 = callmethod(var_distance, "*", [1], call367);
              var prod372 = callmethod(prod370, "*", [1], call365);
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
          func337.paramCounts = [
            1,
          ];
          func337.variableArities = [
            false,
          ];
          obj325.methods["move"] = func337;
          func337.definitionLine = 102;
          func337.definitionModule = "kitty";
          var func378 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 104
              lineNumber = 108
              onSelf = true;
              var call381 = callmethod(this, "rotation", [0]);
              var opresult384 = callmethod(new GraceNum(90), "+", [1], call381);
              var prod386 = callmethod(opresult384, "*", [1], new GraceNum(3.14159));
              var quotient388 = callmethod(prod386, "/", [1], new GraceNum(180));
              var call389 = callmethod(var_math,"cos", [1], quotient388);
              var call391 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod394 = callmethod(var_distance, "*", [1], call391);
              var prod396 = callmethod(prod394, "*", [1], call389);
              onSelf = true;
              var call398 = callmethod(this, "posX", [0]);
              var opresult400 = callmethod(call398, "+", [1], prod396);
              onSelf = true;
              var call401 = callmethod(this, "posX:=", [1], opresult400);
              lineNumber = 109
              lineNumber = 108
              lineNumber = 109
              onSelf = true;
              var call404 = callmethod(this, "rotation", [0]);
              var opresult407 = callmethod(new GraceNum(90), "+", [1], call404);
              var prod409 = callmethod(opresult407, "*", [1], new GraceNum(3.14159));
              var quotient411 = callmethod(prod409, "/", [1], new GraceNum(180));
              var call412 = callmethod(var_math,"sin", [1], quotient411);
              var call414 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod417 = callmethod(var_distance, "*", [1], call414);
              var prod419 = callmethod(prod417, "*", [1], call412);
              onSelf = true;
              var call421 = callmethod(this, "posY", [0]);
              var opresult423 = callmethod(call421, "+", [1], prod419);
              onSelf = true;
              var call424 = callmethod(this, "posY:=", [1], opresult423);
              return call424
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
          obj325.methods["strafe"] = func378;
          func378.definitionLine = 107;
          func378.definitionModule = "kitty";
          var func425 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func425.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 114
              lineNumber = 113
              onSelf = true;
              var call427 = callmethod(this, "rotation", [0]);
              var opresult429 = callmethod(call427, "+", [1], var_angle);
              onSelf = true;
              var call430 = callmethod(this, "rotation:=", [1], opresult429);
              return call430
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func425.paramCounts = [
            1,
          ];
          func425.variableArities = [
            false,
          ];
          obj325.methods["turn"] = func425;
          func425.definitionLine = 112;
          func425.definitionModule = "kitty";
          var func431 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func431.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              var call432 = callmethod(var_ctx,"save", [0]);
              lineNumber = 118
              onSelf = true;
              var call433 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call434 = callmethod(this, "posY", [0]);
              var call435 = callmethod(var_ctx,"translate", [2], call433, call434);
              lineNumber = 119
              onSelf = true;
              var call436 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call437 = callmethod(this, "image", [0]);
              var call438 = callmethod(call437,"draw", [4], var_ctx, var_dx, var_dy, call436);
              lineNumber = 120
              var call439 = callmethod(var_ctx,"restore", [0]);
              return call439
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func431.paramCounts = [
            3,
          ];
          func431.variableArities = [
            false,
          ];
          obj325.methods["draw"] = func431;
          func431.definitionLine = 116;
          func431.definitionModule = "kitty";
          var func440 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 120
              lineNumber = 124
              var call441 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call442 = callmethod(call441, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call443 = callmethod(call442, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call444 = callmethod(this, "image:=", [1], call443);
              return call444
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func440.paramCounts = [
            1,
          ];
          func440.variableArities = [
            false,
          ];
          obj325.methods["createImage"] = func440;
          func440.definitionLine = 123;
          func440.definitionModule = "kitty";
          var func445 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func445.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              lineNumber = 124
              lineNumber = 128
              onSelf = true;
              var call446 = callmethod(this, "image:=", [1], var_image__39__);
              return call446
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func445.paramTypes = [];
          func445.paramTypes.push([]);
          func445.paramCounts = [
            1,
          ];
          func445.variableArities = [
            false,
          ];
          obj325.methods["setImage"] = func445;
          func445.definitionLine = 127;
          func445.definitionModule = "kitty";
          var func447 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func447.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 124
              lineNumber = 132
              onSelf = true;
              var call448 = callmethod(this, "action:=", [1], var_action__39__);
              return call448
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func447.paramCounts = [
            1,
          ];
          func447.variableArities = [
            false,
          ];
          obj325.methods["setAction"] = func447;
          func447.definitionLine = 131;
          func447.definitionModule = "kitty";
          var func449 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func449.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 124
              lineNumber = 136
              onSelf = true;
              var call450 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call450
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func449.paramCounts = [
            1,
          ];
          func449.variableArities = [
            false,
          ];
          obj325.methods["setDestroyAction"] = func449;
          func449.definitionLine = 135;
          func449.definitionModule = "kitty";
          var func451 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func451.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 124
              lineNumber = 140
              onSelf = true;
              var call452 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 142
              lineNumber = 124
              lineNumber = 141
              onSelf = true;
              var call453 = callmethod(this, "posY:=", [1], var_y);
              return call453
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func451.paramCounts = [
            2,
          ];
          func451.variableArities = [
            false,
          ];
          obj325.methods["setLocation"] = func451;
          func451.definitionLine = 139;
          func451.definitionModule = "kitty";
          var func454 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func454.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              lineNumber = 145
              onSelf = true;
              var call455 = callmethod(this, "posX", [0]);
              return call455
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func454.paramCounts = [
            0,
          ];
          func454.variableArities = [
            false,
          ];
          obj325.methods["getX"] = func454;
          func454.definitionLine = 144;
          func454.definitionModule = "kitty";
          var func456 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func456.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              lineNumber = 149
              onSelf = true;
              var call457 = callmethod(this, "posY", [0]);
              return call457
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func456.paramCounts = [
            0,
          ];
          func456.variableArities = [
            false,
          ];
          obj325.methods["getY"] = func456;
          func456.definitionLine = 148;
          func456.definitionModule = "kitty";
          var func458 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func458.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 124
              lineNumber = 153
              onSelf = true;
              var call459 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call459
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func458.paramCounts = [
            1,
          ];
          func458.variableArities = [
            false,
          ];
          obj325.methods["setX"] = func458;
          func458.definitionLine = 152;
          func458.definitionModule = "kitty";
          var func460 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func460.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              lineNumber = 124
              lineNumber = 157
              onSelf = true;
              var call461 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call461
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func460.paramCounts = [
            1,
          ];
          func460.variableArities = [
            false,
          ];
          obj325.methods["setY"] = func460;
          func460.definitionLine = 156;
          func460.definitionModule = "kitty";
          var func462 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func462.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call463 = callmethod(this, "rotation", [0]);
              return call463
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
          obj325.methods["getRotation"] = func462;
          func462.definitionLine = 160;
          func462.definitionModule = "kitty";
          sourceObject = obj325;
          lineNumber = 75
          obj325.data["tag"] = var_tag__39__;
          var reader_kitty_tag_464 = function() {
            return this.data["tag"];
          }
          obj325.methods["tag"] = reader_kitty_tag_464;
          obj325.data["tag"] = var_tag__39__;
          var writer_kitty_tag_464 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj325.methods["tag:="] = writer_kitty_tag_464;
          reader_kitty_tag_464.confidential = true;
          writer_kitty_tag_464.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 76
          obj325.data["posX"] = var_x__39__;
          var reader_kitty_posX_465 = function() {
            return this.data["posX"];
          }
          obj325.methods["posX"] = reader_kitty_posX_465;
          obj325.data["posX"] = var_x__39__;
          var writer_kitty_posX_465 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj325.methods["posX:="] = writer_kitty_posX_465;
          reader_kitty_posX_465.confidential = true;
          writer_kitty_posX_465.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 77
          obj325.data["posY"] = var_y__39__;
          var reader_kitty_posY_466 = function() {
            return this.data["posY"];
          }
          obj325.methods["posY"] = reader_kitty_posY_466;
          obj325.data["posY"] = var_y__39__;
          var writer_kitty_posY_466 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj325.methods["posY:="] = writer_kitty_posY_466;
          reader_kitty_posY_466.confidential = true;
          writer_kitty_posY_466.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 78
          obj325.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_467 = function() {
            return this.data["rotation"];
          }
          obj325.methods["rotation"] = reader_kitty_rotation_467;
          obj325.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_467 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj325.methods["rotation:="] = writer_kitty_rotation_467;
          reader_kitty_rotation_467.confidential = true;
          writer_kitty_rotation_467.confidential = true;
          lineNumber = 80;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 81
          var block468 = Grace_allocObject();
          block468.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block468.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block468.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block468.methods["match"] = GraceBlock_match;
          block468.methods["prefix?"] = GraceBlock_lift;
          block468.receiver = this;
          block468.className = 'block<kitty:81>';
          block468.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj325.data["action"] = block468;
          var reader_kitty_action_469 = function() {
            return this.data["action"];
          }
          obj325.methods["action"] = reader_kitty_action_469;
          obj325.data["action"] = block468;
          var writer_kitty_action_469 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj325.methods["action:="] = writer_kitty_action_469;
          reader_kitty_action_469.confidential = true;
          writer_kitty_action_469.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 80
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block468)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 83
          var block470 = Grace_allocObject();
          block470.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block470.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block470.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block470.methods["match"] = GraceBlock_match;
          block470.methods["prefix?"] = GraceBlock_lift;
          block470.receiver = this;
          block470.className = 'block<kitty:83>';
          block470.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj325.data["destroyAction"] = block470;
          var reader_kitty_destroyAction_471 = function() {
            return this.data["destroyAction"];
          }
          obj325.methods["destroyAction"] = reader_kitty_destroyAction_471;
          obj325.data["destroyAction"] = block470;
          var writer_kitty_destroyAction_471 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj325.methods["destroyAction:="] = writer_kitty_destroyAction_471;
          reader_kitty_destroyAction_471.confidential = true;
          writer_kitty_destroyAction_471.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block470)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj325.mutable = true;
          sourceObject = obj325;
          obj325.data["image"] = undefined;
          var reader_kitty_image_472 = function() {
            return this.data["image"];
          }
          obj325.methods["image"] = reader_kitty_image_472;
          obj325.data["image"] = undefined;
          var writer_kitty_image_472 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj325.methods["image:="] = writer_kitty_image_472;
          reader_kitty_image_472.confidential = true;
          writer_kitty_image_472.confidential = true;
          obj325.mutable = true;
          sourceObject = obj325;
          lineNumber = 85
          onSelf = true;
          var call473 = callmethod(this, "awake", [0]);
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          sourceObject = obj325;
          superDepth = origSuperDepth;
        }
        obj_init_325.apply(inheritingObject, []);
        return obj325
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj172.methods["new()object"] = func324;
    var func474 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string475 = new GraceString("class KittyEntity");
        return string475
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func474.paramCounts = [
    ];
    func474.variableArities = [
    ];
    obj172.methods["asDebugString"] = func474;
    func474.definitionLine = 71;
    func474.definitionModule = "kitty";
    sourceObject = obj172;
    sourceObject = obj172;
    superDepth = origSuperDepth;
  }
  obj_init_172.apply(obj172, []);
  var var_KittyEntity = obj172;
  lineNumber = 165
  lineNumber = 173
  lineNumber = 177
  lineNumber = 181
  lineNumber = 187
  var func476 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func476.paramCounts[0])
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
  func476.paramCounts = [
    0,
  ];
  func476.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func476;
  func476.definitionLine = 187;
  func476.definitionModule = "kitty";
  var obj477 = Grace_allocObject();
  obj477.definitionModule = "kitty";
  obj477.definitionLine = 187;
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
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func479.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj480 = Grace_allocObject();
        obj480.definitionModule = "kitty";
        obj480.definitionLine = 187;
        obj480.outer = this;
        var reader_kitty_outer_481 = function() {
          return this.outer;
        }
        obj480.methods["outer"] = reader_kitty_outer_481;
        function obj_init_480() {
          var origSuperDepth = superDepth;
          superDepth = obj480;
          obj480.annotations = [];
          var func482 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func482.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 225
              var if483 = var_done;
              lineNumber = 221
              onSelf = true;
              var call484 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call484)) {
                lineNumber = 223
                lineNumber = 222
                var bool485 = new GraceBoolean(false)
                return bool485
              }
              lineNumber = 226
              lineNumber = 187
              lineNumber = 225
              var call486 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call487 = callmethod(this, "document:=", [1], call486);
              lineNumber = 226
              lineNumber = 225
              lineNumber = 226
              var string488 = new GraceString("standard-canvas");
              onSelf = true;
              var call489 = callmethod(this, "document", [0]);
              var call490 = callmethod(call489,"getElementById", [1], string488);
              onSelf = true;
              var call491 = callmethod(this, "canvas:=", [1], call490);
              lineNumber = 228
              lineNumber = 225
              lineNumber = 227
              onSelf = true;
              var call492 = callmethod(this, "canvas", [0]);
              var call493 = callmethod(call492,"width", [0]);
              onSelf = true;
              var call494 = callmethod(this, "canvasWidth:=", [1], call493);
              lineNumber = 231
              lineNumber = 227
              lineNumber = 228
              onSelf = true;
              var call495 = callmethod(this, "canvas", [0]);
              var call496 = callmethod(call495,"height", [0]);
              onSelf = true;
              var call497 = callmethod(this, "canvasHeight:=", [1], call496);
              lineNumber = 243
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
              block498.className = 'block<kitty:243>';
              block498.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 233
                onSelf = true;
                var call499 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call501 = callmethod(this, "canvas", [0]);
                var call502 = callmethod(call501,"offsetWidth", [0]);
                onSelf = true;
                var call504 = callmethod(this, "canvas", [0]);
                var call505 = callmethod(call504,"offsetLeft", [0]);
                var call507 = callmethod(var_ev,"clientX", [0]);
                var diff509 = callmethod(call507, "-", [1], call505);
                var quotient511 = callmethod(diff509, "/", [1], call502);
                var prod513 = callmethod(quotient511, "*", [1], call499);
                var var_x = prod513;
                lineNumber = 234;
                moduleName = "kitty";
                lineNumber = 233
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 238
                lineNumber = 234
                onSelf = true;
                var call514 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call516 = callmethod(this, "canvas", [0]);
                var call517 = callmethod(call516,"offsetHeight", [0]);
                onSelf = true;
                var call519 = callmethod(this, "canvas", [0]);
                var call520 = callmethod(call519,"offsetTop", [0]);
                var call522 = callmethod(var_ev,"clientY", [0]);
                var diff524 = callmethod(call522, "-", [1], call520);
                var quotient526 = callmethod(diff524, "/", [1], call517);
                var prod528 = callmethod(quotient526, "*", [1], call514);
                var var_y = prod528;
                lineNumber = 238;
                moduleName = "kitty";
                lineNumber = 234
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 242
                var if529 = var_done;
                lineNumber = 238
                var opresult532 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call535 = callmethod(this, "canvasWidth", [0]);
                var diff537 = callmethod(call535, "-", [1], new GraceNum(20));
                var opresult540 = callmethod(var_x, ">", [1], diff537);
                var opresult542 = callmethod(opresult540, "&&", [1], opresult532);
                if (Grace_isTrue(opresult542)) {
                  lineNumber = 239
                  var call543 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 240
                  onSelf = true;
                  var call544 = callmethod(this, "stop", [0]);
                  if529 = call544;
                }
                return if529;
              };
              var_mouseDownListener = block498;
              lineNumber = 243
              var string545 = new GraceString("mousedown");
              onSelf = true;
              var call546 = callmethod(this, "canvas", [0]);
              var call547 = callmethod(call546,"addEventListener", [2], string545, var_mouseDownListener);
              lineNumber = 253
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
              block548.className = 'block<kitty:253>';
              block548.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 251
                var if549 = var_done;
                lineNumber = 248
                var call551 = callmethod(var_ev,"keyCode", [0]);
                var opresult553 = callmethod(call551, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult553)) {
                  lineNumber = 249
                  onSelf = true;
                  var call554 = callmethod(this, "stop", [0]);
                  if549 = call554;
                }
                lineNumber = 252
                lineNumber = 251
                var call555 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call555;
                return call555;
              };
              var_keyDownListener = block548;
              lineNumber = 253
              var string556 = new GraceString("keydown");
              onSelf = true;
              var call557 = callmethod(this, "document", [0]);
              var call558 = callmethod(call557,"addEventListener", [2], string556, var_keyDownListener);
              lineNumber = 259
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
              block559.className = 'block<kitty:259>';
              block559.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 258
                lineNumber = 257
                var call560 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call560;
                return call560;
              };
              var_keyUpListener = block559;
              lineNumber = 259
              var string561 = new GraceString("keyup");
              onSelf = true;
              var call562 = callmethod(this, "document", [0]);
              var call563 = callmethod(call562,"addEventListener", [2], string561, var_keyUpListener);
              lineNumber = 261
              lineNumber = 251
              lineNumber = 261
              var string564 = new GraceString("canvas");
              var call565 = callmethod(var_dom,"document", [0]);
              var call566 = callmethod(call565,"createElement", [1], string564);
              onSelf = true;
              var call567 = callmethod(this, "backingCanvas:=", [1], call566);
              lineNumber = 263
              lineNumber = 261
              lineNumber = 262
              onSelf = true;
              var call568 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call569 = callmethod(this, "backingCanvas", [0]);
              var call570 = callmethod(call569,"height:=", [1], call568);
              lineNumber = 264
              lineNumber = 261
              lineNumber = 263
              onSelf = true;
              var call571 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call572 = callmethod(this, "backingCanvas", [0]);
              var call573 = callmethod(call572,"width:=", [1], call571);
              lineNumber = 264
              lineNumber = 261
              lineNumber = 264
              var string574 = new GraceString("2d");
              onSelf = true;
              var call575 = callmethod(this, "backingCanvas", [0]);
              var call576 = callmethod(call575,"getContext", [1], string574);
              onSelf = true;
              var call577 = callmethod(this, "backingContext:=", [1], call576);
              lineNumber = 265
              lineNumber = 261
              lineNumber = 265
              var string578 = new GraceString("2d");
              onSelf = true;
              var call579 = callmethod(this, "canvas", [0]);
              var call580 = callmethod(call579,"getContext", [1], string578);
              onSelf = true;
              var call581 = callmethod(this, "mctx:=", [1], call580);
              lineNumber = 268
              var string582 = new GraceString("doggo.jpg");
              onSelf = true;
              var call583 = callmethod(this, "setBackground", [1], string582);
              lineNumber = 277
              lineNumber = 261
              lineNumber = 274
              var bool584 = new GraceBoolean(true)
              onSelf = true;
              var call585 = callmethod(this, "isInit:=", [1], bool584);
              lineNumber = 277
              var call586 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call587 = callmethod(call586, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call588 = callmethod(call587, "setWorld", [1], this);
              return call588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func482.paramCounts = [
            0,
          ];
          func482.variableArities = [
            false,
          ];
          obj480.methods["init"] = func482;
          func482.definitionLine = 217;
          func482.definitionModule = "kitty";
          var func589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 277
              lineNumber = 288
              var bool590 = new GraceBoolean(true)
              onSelf = true;
              var call591 = callmethod(this, "isRunning:=", [1], bool590);
              lineNumber = 289
              var block592 = Grace_allocObject();
              block592.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block592.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block592.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block592.methods["match"] = GraceBlock_match;
              block592.methods["prefix?"] = GraceBlock_lift;
              block592.receiver = this;
              block592.className = 'block<kitty:289>';
              block592.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call593 = callmethod(this, "isRunning", [0]);
                return call593;
              };
              lineNumber = 293
              var block594 = Grace_allocObject();
              block594.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block594.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block594.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block594.methods["match"] = GraceBlock_match;
              block594.methods["prefix?"] = GraceBlock_lift;
              block594.receiver = this;
              block594.className = 'block<kitty:293>';
              block594.real = function(
              ) {
                sourceObject = this;
                lineNumber = 290
                onSelf = true;
                var call595 = callmethod(this, "update", [0]);
                return call595;
              };
              lineNumber = 289
              var call596 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block592, new GraceNum(10), block594);
              return call596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func589.paramCounts = [
            0,
          ];
          func589.variableArities = [
            false,
          ];
          obj480.methods["start"] = func589;
          func589.definitionLine = 286;
          func589.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              lineNumber = 277
              lineNumber = 301
              onSelf = true;
              var call598 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call599 = callmethod(this, "mctx", [0]);
              var call600 = callmethod(call599,"fillStyle:=", [1], call598);
              lineNumber = 302
              onSelf = true;
              var call601 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call602 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call603 = callmethod(this, "mctx", [0]);
              var call604 = callmethod(call603,"fillRect", [4], new GraceNum(0), new GraceNum(0), call601, call602);
              lineNumber = 303
              onSelf = true;
              var call605 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call606 = callmethod(this, "mctx", [0]);
              var call607 = callmethod(call606,"drawImage", [3], call605, new GraceNum(0), new GraceNum(0));
              lineNumber = 304
              onSelf = true;
              var call608 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call610 = callmethod(this, "canvasWidth", [0]);
              var quotient612 = callmethod(call610, "/", [1], new GraceNum(2));
              onSelf = true;
              var call614 = callmethod(this, "canvasHeight", [0]);
              var quotient616 = callmethod(call614, "/", [1], new GraceNum(2));
              onSelf = true;
              var call617 = callmethod(this, "background", [0]);
              var call618 = callmethod(call617,"draw", [4], call608, quotient612, quotient616, new GraceNum(0));
              lineNumber = 307
              onSelf = true;
              var call619 = callmethod(this, "entities", [0]);
              lineNumber = 313
              var block620 = Grace_allocObject();
              block620.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block620.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block620.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block620.methods["match"] = GraceBlock_match;
              block620.methods["prefix?"] = GraceBlock_lift;
              block620.receiver = this;
              block620.className = 'block<kitty:313>';
              block620.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 308
                var call621 = callmethod(var_entity,"tick", [0]);
                lineNumber = 309
                onSelf = true;
                var call622 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call624 = callmethod(this, "canvasWidth", [0]);
                var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
                onSelf = true;
                var call628 = callmethod(this, "canvasHeight", [0]);
                var quotient630 = callmethod(call628, "/", [1], new GraceNum(2));
                var call631 = callmethod(var_entity,"draw", [3], call622, quotient626, quotient630);
                return call631;
              };
              var call632 = callmethod(Grace_prelude,"for()do", [1, 1], call619, block620);
              return call632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func597.paramCounts = [
            0,
          ];
          func597.variableArities = [
            false,
          ];
          obj480.methods["update"] = func597;
          func597.definitionLine = 296;
          func597.definitionModule = "kitty";
          var func633 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              var string634 = new GraceString("WORLD STOPPING...");
              var call635 = Grace_print(string634);
              lineNumber = 318
              lineNumber = 308
              lineNumber = 317
              var bool636 = new GraceBoolean(false)
              onSelf = true;
              var call637 = callmethod(this, "isRunning:=", [1], bool636);
              lineNumber = 318
              onSelf = true;
              var call638 = callmethod(this, "entities", [0]);
              lineNumber = 321
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
              block639.className = 'block<kitty:321>';
              block639.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 319
                var call640 = callmethod(var_entity,"kill", [0]);
                return call640;
              };
              var call641 = callmethod(Grace_prelude,"for()do", [1, 1], call638, block639);
              lineNumber = 321
              var string642 = new GraceString("mousedown");
              onSelf = true;
              var call643 = callmethod(this, "canvas", [0]);
              var call644 = callmethod(call643,"removeEventListener", [2], string642, var_mouseDownListener);
              lineNumber = 322
              var string645 = new GraceString("keydown");
              onSelf = true;
              var call646 = callmethod(this, "document", [0]);
              var call647 = callmethod(call646,"removeEventListener", [2], string645, var_keyDownListener);
              lineNumber = 323
              var string648 = new GraceString("keyup");
              onSelf = true;
              var call649 = callmethod(this, "document", [0]);
              var call650 = callmethod(call649,"removeEventListener", [2], string648, var_keyUpListener);
              return call650
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func633.paramCounts = [
            0,
          ];
          func633.variableArities = [
            false,
          ];
          obj480.methods["stop"] = func633;
          func633.definitionLine = 315;
          func633.definitionModule = "kitty";
          var func651 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func651.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              lineNumber = 319
              lineNumber = 327
              onSelf = true;
              var call652 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call653 = callmethod(this, "canvasHeight", [0]);
              var call654 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call655 = callmethod(call654, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call656 = callmethod(call655, "Image()width()height", [1, 1, 1], var_url, call652, call653);
              onSelf = true;
              var call657 = callmethod(this, "background:=", [1], call656);
              return call657
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func651.paramCounts = [
            1,
          ];
          func651.variableArities = [
            false,
          ];
          obj480.methods["setBackground"] = func651;
          func651.definitionLine = 326;
          func651.definitionModule = "kitty";
          var func658 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func658.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 331
              onSelf = true;
              var call659 = callmethod(this, "entities", [0]);
              var call660 = callmethod(call659,"push", [1], var_e);
              return call660
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func658.paramCounts = [
            1,
          ];
          func658.variableArities = [
            false,
          ];
          obj480.methods["addEntity"] = func658;
          func658.definitionLine = 330;
          func658.definitionModule = "kitty";
          var func661 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func661.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 336
              lineNumber = 335
              onSelf = true;
              var call662 = callmethod(this, "mctx", [0]);
              return call662
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func661.paramCounts = [
            0,
          ];
          func661.variableArities = [
            false,
          ];
          obj480.methods["getContext"] = func661;
          func661.definitionLine = 334;
          func661.definitionModule = "kitty";
          var func663 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func663.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 340
              lineNumber = 339
              onSelf = true;
              var call664 = callmethod(this, "width", [0]);
              onSelf = true;
              var call666 = callmethod(this, "canvasWidth", [0]);
              var quotient668 = callmethod(call666, "/", [1], call664);
              return quotient668
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func663.paramCounts = [
            0,
          ];
          func663.variableArities = [
            false,
          ];
          obj480.methods["moveWidthMultipler"] = func663;
          func663.definitionLine = 338;
          func663.definitionModule = "kitty";
          var func669 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func669.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 344
              lineNumber = 343
              onSelf = true;
              var call670 = callmethod(this, "height", [0]);
              onSelf = true;
              var call672 = callmethod(this, "canvasHeight", [0]);
              var quotient674 = callmethod(call672, "/", [1], call670);
              return quotient674
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
          obj480.methods["moveHeightMultipler"] = func669;
          func669.definitionLine = 342;
          func669.definitionModule = "kitty";
          sourceObject = obj480;
          lineNumber = 190
          obj480.data["width"] = var_width__39__;
          var reader_kitty_width_675 = function() {
            return this.data["width"];
          }
          obj480.methods["width"] = reader_kitty_width_675;
          obj480.data["width"] = var_width__39__;
          var writer_kitty_width_675 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj480.methods["width:="] = writer_kitty_width_675;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 191
          obj480.data["height"] = var_height__39__;
          var reader_kitty_height_676 = function() {
            return this.data["height"];
          }
          obj480.methods["height"] = reader_kitty_height_676;
          obj480.data["height"] = var_height__39__;
          var writer_kitty_height_676 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj480.methods["height:="] = writer_kitty_height_676;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 192
          obj480.data["tag"] = var_tag__39__;
          var reader_kitty_tag_677 = function() {
            return this.data["tag"];
          }
          obj480.methods["tag"] = reader_kitty_tag_677;
          obj480.data["tag"] = var_tag__39__;
          var writer_kitty_tag_677 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj480.methods["tag:="] = writer_kitty_tag_677;
          lineNumber = 194;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["background"] = undefined;
          var reader_kitty_background_678 = function() {
            return this.data["background"];
          }
          obj480.methods["background"] = reader_kitty_background_678;
          obj480.data["background"] = undefined;
          var writer_kitty_background_678 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj480.methods["background:="] = writer_kitty_background_678;
          reader_kitty_background_678.confidential = true;
          writer_kitty_background_678.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 195
          var string679 = new GraceString("black");
          obj480.data["backgroundColour"] = string679;
          var reader_kitty_backgroundColour_680 = function() {
            return this.data["backgroundColour"];
          }
          obj480.methods["backgroundColour"] = reader_kitty_backgroundColour_680;
          obj480.data["backgroundColour"] = string679;
          var writer_kitty_backgroundColour_680 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj480.methods["backgroundColour:="] = writer_kitty_backgroundColour_680;
          reader_kitty_backgroundColour_680.confidential = true;
          writer_kitty_backgroundColour_680.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 195
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string679)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["document"] = undefined;
          var reader_kitty_document_681 = function() {
            return this.data["document"];
          }
          obj480.methods["document"] = reader_kitty_document_681;
          obj480.data["document"] = undefined;
          var writer_kitty_document_681 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj480.methods["document:="] = writer_kitty_document_681;
          reader_kitty_document_681.confidential = true;
          writer_kitty_document_681.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_682 = function() {
            return this.data["backingCanvas"];
          }
          obj480.methods["backingCanvas"] = reader_kitty_backingCanvas_682;
          obj480.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_682 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj480.methods["backingCanvas:="] = writer_kitty_backingCanvas_682;
          reader_kitty_backingCanvas_682.confidential = true;
          writer_kitty_backingCanvas_682.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["backingContext"] = undefined;
          var reader_kitty_backingContext_683 = function() {
            return this.data["backingContext"];
          }
          obj480.methods["backingContext"] = reader_kitty_backingContext_683;
          obj480.data["backingContext"] = undefined;
          var writer_kitty_backingContext_683 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj480.methods["backingContext:="] = writer_kitty_backingContext_683;
          reader_kitty_backingContext_683.confidential = true;
          writer_kitty_backingContext_683.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["canvas"] = undefined;
          var reader_kitty_canvas_684 = function() {
            return this.data["canvas"];
          }
          obj480.methods["canvas"] = reader_kitty_canvas_684;
          obj480.data["canvas"] = undefined;
          var writer_kitty_canvas_684 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj480.methods["canvas:="] = writer_kitty_canvas_684;
          reader_kitty_canvas_684.confidential = true;
          writer_kitty_canvas_684.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_685 = function() {
            return this.data["canvasWidth"];
          }
          obj480.methods["canvasWidth"] = reader_kitty_canvasWidth_685;
          obj480.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_685 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj480.methods["canvasWidth:="] = writer_kitty_canvasWidth_685;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_686 = function() {
            return this.data["canvasHeight"];
          }
          obj480.methods["canvasHeight"] = reader_kitty_canvasHeight_686;
          obj480.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_686 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj480.methods["canvasHeight:="] = writer_kitty_canvasHeight_686;
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 206
          var call687 = callmethod(var_collections,"list", [0]);
          var call688 = callmethod(call687,"new", [0]);
          obj480.data["entities"] = call688;
          var reader_kitty_entities_689 = function() {
            return this.data["entities"];
          }
          obj480.methods["entities"] = reader_kitty_entities_689;
          obj480.data["entities"] = call688;
          var writer_kitty_entities_689 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj480.methods["entities:="] = writer_kitty_entities_689;
          reader_kitty_entities_689.confidential = true;
          writer_kitty_entities_689.confidential = true;
          lineNumber = 208;
          moduleName = "kitty";
          lineNumber = 206
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call688)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 208
          var bool690 = new GraceBoolean(false)
          obj480.data["isInit"] = bool690;
          var reader_kitty_isInit_691 = function() {
            return this.data["isInit"];
          }
          obj480.methods["isInit"] = reader_kitty_isInit_691;
          obj480.data["isInit"] = bool690;
          var writer_kitty_isInit_691 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj480.methods["isInit:="] = writer_kitty_isInit_691;
          reader_kitty_isInit_691.confidential = true;
          writer_kitty_isInit_691.confidential = true;
          lineNumber = 209;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool690)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 209
          var bool692 = new GraceBoolean(false)
          obj480.data["isRunning"] = bool692;
          var reader_kitty_isRunning_693 = function() {
            return this.data["isRunning"];
          }
          obj480.methods["isRunning"] = reader_kitty_isRunning_693;
          obj480.data["isRunning"] = bool692;
          var writer_kitty_isRunning_693 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj480.methods["isRunning:="] = writer_kitty_isRunning_693;
          reader_kitty_isRunning_693.confidential = true;
          writer_kitty_isRunning_693.confidential = true;
          lineNumber = 211;
          moduleName = "kitty";
          lineNumber = 209
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool692)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["mctx"] = undefined;
          var reader_kitty_mctx_694 = function() {
            return this.data["mctx"];
          }
          obj480.methods["mctx"] = reader_kitty_mctx_694;
          obj480.data["mctx"] = undefined;
          var writer_kitty_mctx_694 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj480.methods["mctx:="] = writer_kitty_mctx_694;
          reader_kitty_mctx_694.confidential = true;
          writer_kitty_mctx_694.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          obj480.data["ent"] = undefined;
          var reader_kitty_ent_695 = function() {
            return this.data["ent"];
          }
          obj480.methods["ent"] = reader_kitty_ent_695;
          obj480.data["ent"] = undefined;
          var writer_kitty_ent_695 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj480.methods["ent:="] = writer_kitty_ent_695;
          reader_kitty_ent_695.confidential = true;
          writer_kitty_ent_695.confidential = true;
          obj480.mutable = true;
          sourceObject = obj480;
          lineNumber = 214
          onSelf = true;
          var call696 = callmethod(this, "init", [0]);
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          sourceObject = obj480;
          superDepth = origSuperDepth;
        }
        obj_init_480.apply(obj480, []);
        return obj480
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func479.paramCounts = [
      3,
    ];
    func479.variableArities = [
      false,
    ];
    obj477.methods["new"] = func479;
    func479.definitionLine = 187;
    func479.definitionModule = "kitty";
    var func697 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj698 = Grace_allocObject();
        obj698.definitionModule = "kitty";
        obj698.definitionLine = 187;
        var inho698 = inheritingObject;
        while (inho698.superobj) inho698 = inho698.superobj;
        inho698.superobj = obj698;
        obj698.data = inheritingObject.data;
        obj698.outer = this;
        var reader_kitty_outer_699 = function() {
          return this.outer;
        }
        obj698.methods["outer"] = reader_kitty_outer_699;
        function obj_init_698() {
          var origSuperDepth = superDepth;
          superDepth = obj698;
          obj698.annotations = [];
          var func700 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func700.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 225
              var if701 = var_done;
              lineNumber = 221
              onSelf = true;
              var call702 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call702)) {
                lineNumber = 223
                lineNumber = 222
                var bool703 = new GraceBoolean(false)
                return bool703
              }
              lineNumber = 226
              lineNumber = 206
              lineNumber = 225
              var call704 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call705 = callmethod(this, "document:=", [1], call704);
              lineNumber = 226
              lineNumber = 225
              lineNumber = 226
              var string706 = new GraceString("standard-canvas");
              onSelf = true;
              var call707 = callmethod(this, "document", [0]);
              var call708 = callmethod(call707,"getElementById", [1], string706);
              onSelf = true;
              var call709 = callmethod(this, "canvas:=", [1], call708);
              lineNumber = 228
              lineNumber = 225
              lineNumber = 227
              onSelf = true;
              var call710 = callmethod(this, "canvas", [0]);
              var call711 = callmethod(call710,"width", [0]);
              onSelf = true;
              var call712 = callmethod(this, "canvasWidth:=", [1], call711);
              lineNumber = 231
              lineNumber = 227
              lineNumber = 228
              onSelf = true;
              var call713 = callmethod(this, "canvas", [0]);
              var call714 = callmethod(call713,"height", [0]);
              onSelf = true;
              var call715 = callmethod(this, "canvasHeight:=", [1], call714);
              lineNumber = 243
              var block716 = Grace_allocObject();
              block716.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block716.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block716.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block716.methods["match"] = GraceBlock_match;
              block716.methods["prefix?"] = GraceBlock_lift;
              block716.receiver = this;
              block716.className = 'block<kitty:243>';
              block716.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 234
                lineNumber = 233
                onSelf = true;
                var call717 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call719 = callmethod(this, "canvas", [0]);
                var call720 = callmethod(call719,"offsetWidth", [0]);
                onSelf = true;
                var call722 = callmethod(this, "canvas", [0]);
                var call723 = callmethod(call722,"offsetLeft", [0]);
                var call725 = callmethod(var_ev,"clientX", [0]);
                var diff727 = callmethod(call725, "-", [1], call723);
                var quotient729 = callmethod(diff727, "/", [1], call720);
                var prod731 = callmethod(quotient729, "*", [1], call717);
                var var_x = prod731;
                lineNumber = 234;
                moduleName = "kitty";
                lineNumber = 233
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 238
                lineNumber = 234
                onSelf = true;
                var call732 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call734 = callmethod(this, "canvas", [0]);
                var call735 = callmethod(call734,"offsetHeight", [0]);
                onSelf = true;
                var call737 = callmethod(this, "canvas", [0]);
                var call738 = callmethod(call737,"offsetTop", [0]);
                var call740 = callmethod(var_ev,"clientY", [0]);
                var diff742 = callmethod(call740, "-", [1], call738);
                var quotient744 = callmethod(diff742, "/", [1], call735);
                var prod746 = callmethod(quotient744, "*", [1], call732);
                var var_y = prod746;
                lineNumber = 238;
                moduleName = "kitty";
                lineNumber = 234
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 242
                var if747 = var_done;
                lineNumber = 238
                var opresult750 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call753 = callmethod(this, "canvasWidth", [0]);
                var diff755 = callmethod(call753, "-", [1], new GraceNum(20));
                var opresult758 = callmethod(var_x, ">", [1], diff755);
                var opresult760 = callmethod(opresult758, "&&", [1], opresult750);
                if (Grace_isTrue(opresult760)) {
                  lineNumber = 239
                  var call761 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 240
                  onSelf = true;
                  var call762 = callmethod(this, "stop", [0]);
                  if747 = call762;
                }
                return if747;
              };
              var_mouseDownListener = block716;
              lineNumber = 243
              var string763 = new GraceString("mousedown");
              onSelf = true;
              var call764 = callmethod(this, "canvas", [0]);
              var call765 = callmethod(call764,"addEventListener", [2], string763, var_mouseDownListener);
              lineNumber = 253
              var block766 = Grace_allocObject();
              block766.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block766.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block766.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block766.methods["match"] = GraceBlock_match;
              block766.methods["prefix?"] = GraceBlock_lift;
              block766.receiver = this;
              block766.className = 'block<kitty:253>';
              block766.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 251
                var if767 = var_done;
                lineNumber = 248
                var call769 = callmethod(var_ev,"keyCode", [0]);
                var opresult771 = callmethod(call769, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult771)) {
                  lineNumber = 249
                  onSelf = true;
                  var call772 = callmethod(this, "stop", [0]);
                  if767 = call772;
                }
                lineNumber = 252
                lineNumber = 251
                var call773 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call773;
                return call773;
              };
              var_keyDownListener = block766;
              lineNumber = 253
              var string774 = new GraceString("keydown");
              onSelf = true;
              var call775 = callmethod(this, "document", [0]);
              var call776 = callmethod(call775,"addEventListener", [2], string774, var_keyDownListener);
              lineNumber = 259
              var block777 = Grace_allocObject();
              block777.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block777.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block777.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block777.methods["match"] = GraceBlock_match;
              block777.methods["prefix?"] = GraceBlock_lift;
              block777.receiver = this;
              block777.className = 'block<kitty:259>';
              block777.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 258
                lineNumber = 257
                var call778 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call778;
                return call778;
              };
              var_keyUpListener = block777;
              lineNumber = 259
              var string779 = new GraceString("keyup");
              onSelf = true;
              var call780 = callmethod(this, "document", [0]);
              var call781 = callmethod(call780,"addEventListener", [2], string779, var_keyUpListener);
              lineNumber = 261
              lineNumber = 251
              lineNumber = 261
              var string782 = new GraceString("canvas");
              var call783 = callmethod(var_dom,"document", [0]);
              var call784 = callmethod(call783,"createElement", [1], string782);
              onSelf = true;
              var call785 = callmethod(this, "backingCanvas:=", [1], call784);
              lineNumber = 263
              lineNumber = 261
              lineNumber = 262
              onSelf = true;
              var call786 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call787 = callmethod(this, "backingCanvas", [0]);
              var call788 = callmethod(call787,"height:=", [1], call786);
              lineNumber = 264
              lineNumber = 261
              lineNumber = 263
              onSelf = true;
              var call789 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call790 = callmethod(this, "backingCanvas", [0]);
              var call791 = callmethod(call790,"width:=", [1], call789);
              lineNumber = 264
              lineNumber = 261
              lineNumber = 264
              var string792 = new GraceString("2d");
              onSelf = true;
              var call793 = callmethod(this, "backingCanvas", [0]);
              var call794 = callmethod(call793,"getContext", [1], string792);
              onSelf = true;
              var call795 = callmethod(this, "backingContext:=", [1], call794);
              lineNumber = 265
              lineNumber = 261
              lineNumber = 265
              var string796 = new GraceString("2d");
              onSelf = true;
              var call797 = callmethod(this, "canvas", [0]);
              var call798 = callmethod(call797,"getContext", [1], string796);
              onSelf = true;
              var call799 = callmethod(this, "mctx:=", [1], call798);
              lineNumber = 268
              var string800 = new GraceString("doggo.jpg");
              onSelf = true;
              var call801 = callmethod(this, "setBackground", [1], string800);
              lineNumber = 277
              lineNumber = 261
              lineNumber = 274
              var bool802 = new GraceBoolean(true)
              onSelf = true;
              var call803 = callmethod(this, "isInit:=", [1], bool802);
              lineNumber = 277
              var call804 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call805 = callmethod(call804, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call806 = callmethod(call805, "setWorld", [1], this);
              return call806
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func700.paramCounts = [
            0,
          ];
          func700.variableArities = [
            false,
          ];
          obj698.methods["init"] = func700;
          func700.definitionLine = 217;
          func700.definitionModule = "kitty";
          var func807 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func807.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 277
              lineNumber = 288
              var bool808 = new GraceBoolean(true)
              onSelf = true;
              var call809 = callmethod(this, "isRunning:=", [1], bool808);
              lineNumber = 289
              var block810 = Grace_allocObject();
              block810.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block810.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block810.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block810.methods["match"] = GraceBlock_match;
              block810.methods["prefix?"] = GraceBlock_lift;
              block810.receiver = this;
              block810.className = 'block<kitty:289>';
              block810.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call811 = callmethod(this, "isRunning", [0]);
                return call811;
              };
              lineNumber = 293
              var block812 = Grace_allocObject();
              block812.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block812.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block812.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block812.methods["match"] = GraceBlock_match;
              block812.methods["prefix?"] = GraceBlock_lift;
              block812.receiver = this;
              block812.className = 'block<kitty:293>';
              block812.real = function(
              ) {
                sourceObject = this;
                lineNumber = 290
                onSelf = true;
                var call813 = callmethod(this, "update", [0]);
                return call813;
              };
              lineNumber = 289
              var call814 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block810, new GraceNum(10), block812);
              return call814
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func807.paramCounts = [
            0,
          ];
          func807.variableArities = [
            false,
          ];
          obj698.methods["start"] = func807;
          func807.definitionLine = 286;
          func807.definitionModule = "kitty";
          var func815 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func815.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 302
              lineNumber = 277
              lineNumber = 301
              onSelf = true;
              var call816 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call817 = callmethod(this, "mctx", [0]);
              var call818 = callmethod(call817,"fillStyle:=", [1], call816);
              lineNumber = 302
              onSelf = true;
              var call819 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call820 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call821 = callmethod(this, "mctx", [0]);
              var call822 = callmethod(call821,"fillRect", [4], new GraceNum(0), new GraceNum(0), call819, call820);
              lineNumber = 303
              onSelf = true;
              var call823 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call824 = callmethod(this, "mctx", [0]);
              var call825 = callmethod(call824,"drawImage", [3], call823, new GraceNum(0), new GraceNum(0));
              lineNumber = 304
              onSelf = true;
              var call826 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call828 = callmethod(this, "canvasWidth", [0]);
              var quotient830 = callmethod(call828, "/", [1], new GraceNum(2));
              onSelf = true;
              var call832 = callmethod(this, "canvasHeight", [0]);
              var quotient834 = callmethod(call832, "/", [1], new GraceNum(2));
              onSelf = true;
              var call835 = callmethod(this, "background", [0]);
              var call836 = callmethod(call835,"draw", [4], call826, quotient830, quotient834, new GraceNum(0));
              lineNumber = 307
              onSelf = true;
              var call837 = callmethod(this, "entities", [0]);
              lineNumber = 313
              var block838 = Grace_allocObject();
              block838.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block838.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block838.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block838.methods["match"] = GraceBlock_match;
              block838.methods["prefix?"] = GraceBlock_lift;
              block838.receiver = this;
              block838.className = 'block<kitty:313>';
              block838.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 308
                var call839 = callmethod(var_entity,"tick", [0]);
                lineNumber = 309
                onSelf = true;
                var call840 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call842 = callmethod(this, "canvasWidth", [0]);
                var quotient844 = callmethod(call842, "/", [1], new GraceNum(2));
                onSelf = true;
                var call846 = callmethod(this, "canvasHeight", [0]);
                var quotient848 = callmethod(call846, "/", [1], new GraceNum(2));
                var call849 = callmethod(var_entity,"draw", [3], call840, quotient844, quotient848);
                return call849;
              };
              var call850 = callmethod(Grace_prelude,"for()do", [1, 1], call837, block838);
              return call850
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
          obj698.methods["update"] = func815;
          func815.definitionLine = 296;
          func815.definitionModule = "kitty";
          var func851 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func851.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 316
              var string852 = new GraceString("WORLD STOPPING...");
              var call853 = Grace_print(string852);
              lineNumber = 318
              lineNumber = 308
              lineNumber = 317
              var bool854 = new GraceBoolean(false)
              onSelf = true;
              var call855 = callmethod(this, "isRunning:=", [1], bool854);
              lineNumber = 318
              onSelf = true;
              var call856 = callmethod(this, "entities", [0]);
              lineNumber = 321
              var block857 = Grace_allocObject();
              block857.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block857.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block857.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block857.methods["match"] = GraceBlock_match;
              block857.methods["prefix?"] = GraceBlock_lift;
              block857.receiver = this;
              block857.className = 'block<kitty:321>';
              block857.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 319
                var call858 = callmethod(var_entity,"kill", [0]);
                return call858;
              };
              var call859 = callmethod(Grace_prelude,"for()do", [1, 1], call856, block857);
              lineNumber = 321
              var string860 = new GraceString("mousedown");
              onSelf = true;
              var call861 = callmethod(this, "canvas", [0]);
              var call862 = callmethod(call861,"removeEventListener", [2], string860, var_mouseDownListener);
              lineNumber = 322
              var string863 = new GraceString("keydown");
              onSelf = true;
              var call864 = callmethod(this, "document", [0]);
              var call865 = callmethod(call864,"removeEventListener", [2], string863, var_keyDownListener);
              lineNumber = 323
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
          func851.paramCounts = [
            0,
          ];
          func851.variableArities = [
            false,
          ];
          obj698.methods["stop"] = func851;
          func851.definitionLine = 315;
          func851.definitionModule = "kitty";
          var func869 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func869.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 327
              lineNumber = 319
              lineNumber = 327
              onSelf = true;
              var call870 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call871 = callmethod(this, "canvasHeight", [0]);
              var call872 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call873 = callmethod(call872, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call874 = callmethod(call873, "Image()width()height", [1, 1, 1], var_url, call870, call871);
              onSelf = true;
              var call875 = callmethod(this, "background:=", [1], call874);
              return call875
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
          obj698.methods["setBackground"] = func869;
          func869.definitionLine = 326;
          func869.definitionModule = "kitty";
          var func876 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func876.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 331
              onSelf = true;
              var call877 = callmethod(this, "entities", [0]);
              var call878 = callmethod(call877,"push", [1], var_e);
              return call878
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func876.paramCounts = [
            1,
          ];
          func876.variableArities = [
            false,
          ];
          obj698.methods["addEntity"] = func876;
          func876.definitionLine = 330;
          func876.definitionModule = "kitty";
          var func879 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func879.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 336
              lineNumber = 335
              onSelf = true;
              var call880 = callmethod(this, "mctx", [0]);
              return call880
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func879.paramCounts = [
            0,
          ];
          func879.variableArities = [
            false,
          ];
          obj698.methods["getContext"] = func879;
          func879.definitionLine = 334;
          func879.definitionModule = "kitty";
          var func881 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func881.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 340
              lineNumber = 339
              onSelf = true;
              var call882 = callmethod(this, "width", [0]);
              onSelf = true;
              var call884 = callmethod(this, "canvasWidth", [0]);
              var quotient886 = callmethod(call884, "/", [1], call882);
              return quotient886
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func881.paramCounts = [
            0,
          ];
          func881.variableArities = [
            false,
          ];
          obj698.methods["moveWidthMultipler"] = func881;
          func881.definitionLine = 338;
          func881.definitionModule = "kitty";
          var func887 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func887.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 344
              lineNumber = 343
              onSelf = true;
              var call888 = callmethod(this, "height", [0]);
              onSelf = true;
              var call890 = callmethod(this, "canvasHeight", [0]);
              var quotient892 = callmethod(call890, "/", [1], call888);
              return quotient892
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func887.paramCounts = [
            0,
          ];
          func887.variableArities = [
            false,
          ];
          obj698.methods["moveHeightMultipler"] = func887;
          func887.definitionLine = 342;
          func887.definitionModule = "kitty";
          sourceObject = obj698;
          lineNumber = 190
          obj698.data["width"] = var_width__39__;
          var reader_kitty_width_893 = function() {
            return this.data["width"];
          }
          obj698.methods["width"] = reader_kitty_width_893;
          obj698.data["width"] = var_width__39__;
          var writer_kitty_width_893 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj698.methods["width:="] = writer_kitty_width_893;
          lineNumber = 191;
          moduleName = "kitty";
          lineNumber = 190
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 191
          obj698.data["height"] = var_height__39__;
          var reader_kitty_height_894 = function() {
            return this.data["height"];
          }
          obj698.methods["height"] = reader_kitty_height_894;
          obj698.data["height"] = var_height__39__;
          var writer_kitty_height_894 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj698.methods["height:="] = writer_kitty_height_894;
          lineNumber = 192;
          moduleName = "kitty";
          lineNumber = 191
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 192
          obj698.data["tag"] = var_tag__39__;
          var reader_kitty_tag_895 = function() {
            return this.data["tag"];
          }
          obj698.methods["tag"] = reader_kitty_tag_895;
          obj698.data["tag"] = var_tag__39__;
          var writer_kitty_tag_895 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj698.methods["tag:="] = writer_kitty_tag_895;
          lineNumber = 194;
          moduleName = "kitty";
          lineNumber = 192
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["background"] = undefined;
          var reader_kitty_background_896 = function() {
            return this.data["background"];
          }
          obj698.methods["background"] = reader_kitty_background_896;
          obj698.data["background"] = undefined;
          var writer_kitty_background_896 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj698.methods["background:="] = writer_kitty_background_896;
          reader_kitty_background_896.confidential = true;
          writer_kitty_background_896.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 195
          var string897 = new GraceString("black");
          obj698.data["backgroundColour"] = string897;
          var reader_kitty_backgroundColour_898 = function() {
            return this.data["backgroundColour"];
          }
          obj698.methods["backgroundColour"] = reader_kitty_backgroundColour_898;
          obj698.data["backgroundColour"] = string897;
          var writer_kitty_backgroundColour_898 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj698.methods["backgroundColour:="] = writer_kitty_backgroundColour_898;
          reader_kitty_backgroundColour_898.confidential = true;
          writer_kitty_backgroundColour_898.confidential = true;
          lineNumber = 197;
          moduleName = "kitty";
          lineNumber = 195
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string897)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["document"] = undefined;
          var reader_kitty_document_899 = function() {
            return this.data["document"];
          }
          obj698.methods["document"] = reader_kitty_document_899;
          obj698.data["document"] = undefined;
          var writer_kitty_document_899 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj698.methods["document:="] = writer_kitty_document_899;
          reader_kitty_document_899.confidential = true;
          writer_kitty_document_899.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_900 = function() {
            return this.data["backingCanvas"];
          }
          obj698.methods["backingCanvas"] = reader_kitty_backingCanvas_900;
          obj698.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_900 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj698.methods["backingCanvas:="] = writer_kitty_backingCanvas_900;
          reader_kitty_backingCanvas_900.confidential = true;
          writer_kitty_backingCanvas_900.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["backingContext"] = undefined;
          var reader_kitty_backingContext_901 = function() {
            return this.data["backingContext"];
          }
          obj698.methods["backingContext"] = reader_kitty_backingContext_901;
          obj698.data["backingContext"] = undefined;
          var writer_kitty_backingContext_901 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj698.methods["backingContext:="] = writer_kitty_backingContext_901;
          reader_kitty_backingContext_901.confidential = true;
          writer_kitty_backingContext_901.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["canvas"] = undefined;
          var reader_kitty_canvas_902 = function() {
            return this.data["canvas"];
          }
          obj698.methods["canvas"] = reader_kitty_canvas_902;
          obj698.data["canvas"] = undefined;
          var writer_kitty_canvas_902 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj698.methods["canvas:="] = writer_kitty_canvas_902;
          reader_kitty_canvas_902.confidential = true;
          writer_kitty_canvas_902.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_903 = function() {
            return this.data["canvasWidth"];
          }
          obj698.methods["canvasWidth"] = reader_kitty_canvasWidth_903;
          obj698.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_903 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj698.methods["canvasWidth:="] = writer_kitty_canvasWidth_903;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_904 = function() {
            return this.data["canvasHeight"];
          }
          obj698.methods["canvasHeight"] = reader_kitty_canvasHeight_904;
          obj698.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_904 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj698.methods["canvasHeight:="] = writer_kitty_canvasHeight_904;
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 206
          var call905 = callmethod(var_collections,"list", [0]);
          var call906 = callmethod(call905,"new", [0]);
          obj698.data["entities"] = call906;
          var reader_kitty_entities_907 = function() {
            return this.data["entities"];
          }
          obj698.methods["entities"] = reader_kitty_entities_907;
          obj698.data["entities"] = call906;
          var writer_kitty_entities_907 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj698.methods["entities:="] = writer_kitty_entities_907;
          reader_kitty_entities_907.confidential = true;
          writer_kitty_entities_907.confidential = true;
          lineNumber = 208;
          moduleName = "kitty";
          lineNumber = 206
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call906)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 208
          var bool908 = new GraceBoolean(false)
          obj698.data["isInit"] = bool908;
          var reader_kitty_isInit_909 = function() {
            return this.data["isInit"];
          }
          obj698.methods["isInit"] = reader_kitty_isInit_909;
          obj698.data["isInit"] = bool908;
          var writer_kitty_isInit_909 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj698.methods["isInit:="] = writer_kitty_isInit_909;
          reader_kitty_isInit_909.confidential = true;
          writer_kitty_isInit_909.confidential = true;
          lineNumber = 209;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool908)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 209
          var bool910 = new GraceBoolean(false)
          obj698.data["isRunning"] = bool910;
          var reader_kitty_isRunning_911 = function() {
            return this.data["isRunning"];
          }
          obj698.methods["isRunning"] = reader_kitty_isRunning_911;
          obj698.data["isRunning"] = bool910;
          var writer_kitty_isRunning_911 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj698.methods["isRunning:="] = writer_kitty_isRunning_911;
          reader_kitty_isRunning_911.confidential = true;
          writer_kitty_isRunning_911.confidential = true;
          lineNumber = 211;
          moduleName = "kitty";
          lineNumber = 209
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool910)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["mctx"] = undefined;
          var reader_kitty_mctx_912 = function() {
            return this.data["mctx"];
          }
          obj698.methods["mctx"] = reader_kitty_mctx_912;
          obj698.data["mctx"] = undefined;
          var writer_kitty_mctx_912 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj698.methods["mctx:="] = writer_kitty_mctx_912;
          reader_kitty_mctx_912.confidential = true;
          writer_kitty_mctx_912.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          obj698.data["ent"] = undefined;
          var reader_kitty_ent_913 = function() {
            return this.data["ent"];
          }
          obj698.methods["ent"] = reader_kitty_ent_913;
          obj698.data["ent"] = undefined;
          var writer_kitty_ent_913 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj698.methods["ent:="] = writer_kitty_ent_913;
          reader_kitty_ent_913.confidential = true;
          writer_kitty_ent_913.confidential = true;
          obj698.mutable = true;
          sourceObject = obj698;
          lineNumber = 214
          onSelf = true;
          var call914 = callmethod(this, "init", [0]);
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          sourceObject = obj698;
          superDepth = origSuperDepth;
        }
        obj_init_698.apply(inheritingObject, []);
        return obj698
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj477.methods["new()object"] = func697;
    var func915 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 187
        var string916 = new GraceString("class KittyWorld");
        return string916
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func915.paramCounts = [
    ];
    func915.variableArities = [
    ];
    obj477.methods["asDebugString"] = func915;
    func915.definitionLine = 187;
    func915.definitionModule = "kitty";
    sourceObject = obj477;
    sourceObject = obj477;
    superDepth = origSuperDepth;
  }
  obj_init_477.apply(obj477, []);
  var var_KittyWorld = obj477;
  lineNumber = 349
  lineNumber = 358
  lineNumber = 373
  lineNumber = 377
  lineNumber = 382
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n KittyWorld\n World()width()height\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nfresh:Entity()x()y:\n image\n strafe\n tick\n awake\n setAction\n getRotation\n tag:=\n setDestroyAction\n action:=\n createImage\n getX\n getY\n tag\n action\n destroyAction:=\n posX:=\n posY:=\n setX\n setLocation\n rotation:=\n destroyAction\n turn\n posX\n posY\n kill\n draw\n setImage\n rotation\n setY\n move\n image:=\nmethods-of:KittyWorld.new:\n isRunning\n ent:=\n tag:=\n update\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n init\n canvasHeight\n getContext\n canvas\n canvasWidth\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n entities:=\n mctx\n document\n width\n backingContext\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n moveWidthMultipler\n tag\n background\n backingCanvas:=\n start\n height:=\n document:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconstructors-of:KittyImage:\n new\nconfidential:\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconstructors-of:KittyWorld:\n new\nfresh:World()width()height:\n isRunning\n ent:=\n canvas:=\n update\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n canvasHeight\n getContext\n tag\n canvasWidth\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n entities:=\n mctx\n document\n width\n init\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n tag:=\n backgroundColour\n background:=\n moveWidthMultipler\n canvas\n background\n backingCanvas:=\n start\n height:=\n document:=\nfresh:Image()width()height:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image\n strafe\n posY\n awake\n setAction\n getRotation\n tag:=\n setDestroyAction\n action:=\n createImage\n getX\n getY\n tag\n action\n destroyAction:=\n posX:=\n posY:=\n setX\n setLocation\n rotation:=\n destroyAction\n turn\n posX\n tick\n kill\n draw\n setImage\n rotation\n setY\n move\n image:=\n";
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
    "var currentKeyDown := -1",
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
    "        // print \"{dx}, {dy}\"",
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
    "    ",
    "    var action := {}",
    "    var destroyAction := {}",
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
    "    method tick {",
    "        action.apply",
    "    }",
    "",
    "    method kill {",
    "        destroyAction.apply",
    "    }",
    "",
    "    method move(distance) { ",
    "        posX := posX + distance * m_world.moveWidthMultipler * math.cos(rotation * 3.14159 / 180)",
    "        posY := posY + distance * m_world.moveHeightMultipler * math.sin(rotation * 3.14159 / 180)",
    "    }",
    "",
    "    method strafe(distance) {",
    "        posX := posX + distance * m_world.moveWidthMultipler * math.cos((90 + rotation) * 3.14159 / 180)",
    "        posY := posY + distance * m_world.moveHeightMultipler * math.sin((90 + rotation) * 3.14159 / 180)",
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
    "    method setDestroyAction(action') {",
    "        destroyAction := action'",
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
    "    method setX(posX') {",
    "        posX := posX'",
    "    }",
    "",
    "    method setY(posY') {",
    "        posY := posY'",
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
    "",
    "method onDestroy(action') {",
    "    kitten.setDestroyAction(action')",
    "}",
    "",
    "method isKeyDown(key) {",
    "    return key == currentKeyDown",
    "}",
    "// ========================== //",
    "",
    "// Represents the game world itself",
    "class KittyWorld.new(tag', width', height') {",
    "",
    "    // print \"CREATING NEW WORLD...\"",
    "    var width is public, readable := width'",
    "    var height is public, readable := height'",
    "    var tag is public, readable := tag'",
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
    "    var canvasWidth is public, readable",
    "    var canvasHeight is public, readable",
    "",
    "    var entities := collections.list.new",
    "",
    "    var isInit := false",
    "    var isRunning := false",
    "",
    "    var mctx",
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
    "        for (entities) do { entity->",
    "            entity.kill",
    "        }",
    "        canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "        document.removeEventListener(\"keydown\", keyDownListener)",
    "        document.removeEventListener(\"keyup\", keyUpListener)",
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
    "",
    "    method moveWidthMultipler {",
    "        return canvasWidth / width",
    "    }",
    "",
    "    method moveHeightMultipler {",
    "        return canvasHeight / height",
    "    }",
    "",
    "    // print \"WORLD CREATED\"",
    "}",
    "",
    "method World(tag')width(width')height(height') {",
    "    object {",
    "        inherits KittyWorld.new(tag', width', height')",
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
