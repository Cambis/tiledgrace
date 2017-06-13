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
  lineNumber = 178
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
      lineNumber = 179
      var call17 = callmethod(var_kitten,"setUpdateAction", [1], var_action__39__);
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
  func16.definitionLine = 178;
  func16.definitionModule = "kitty";
  lineNumber = 183
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
      lineNumber = 184
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
  func18.definitionLine = 183;
  func18.definitionModule = "kitty";
  lineNumber = 187
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
      lineNumber = 189
      lineNumber = 188
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
  func20.definitionLine = 187;
  func20.definitionModule = "kitty";
  lineNumber = 192
  var func24 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 193
      var call25 = callmethod(var_kitten,"setMouseDownAction", [1], var_action__39__);
      return call25
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
  ];
  func24.variableArities = [
    false,
  ];
  this.methods["onMouseDown"] = func24;
  func24.definitionLine = 192;
  func24.definitionModule = "kitty";
  lineNumber = 370
  var func26 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func26.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func26.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 371
      var obj27 = Grace_allocObject();
      obj27.definitionModule = "kitty";
      obj27.definitionLine = 371;
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
        lineNumber = 372
        var call29 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
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
    1,
    1,
    1,
  ];
  func26.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["World()width()height"] = func26;
  func26.definitionLine = 370;
  func26.definitionModule = "kitty";
  var func30 = function(argcv) {
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
      var obj31 = Grace_allocObject();
      obj31.definitionModule = "kitty";
      obj31.definitionLine = 371;
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
        var call33 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
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
  this.methods["World()width()height()object"] = func30;
  lineNumber = 379
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 381
      var string35 = new GraceString("CHECKING...");
      var call36 = Grace_print(string35);
      lineNumber = 388
      var if37 = var_done;
      lineNumber = 383
      var call38 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call38)) {
        lineNumber = 384
        var string39 = new GraceString("NO WORLD!!");
        var call40 = Grace_print(string39);
        lineNumber = 386
        return var_done
      }
      lineNumber = 388
      var string41 = new GraceString("STARTING...");
      var call42 = Grace_print(string41);
      lineNumber = 391
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
  func34.definitionLine = 379;
  func34.definitionModule = "kitty";
  lineNumber = 394
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 395
      var call45 = callmethod(var_m__95__world,"stop", [0]);
      return call45
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
  this.methods["stop"] = func44;
  func44.definitionLine = 394;
  func44.definitionModule = "kitty";
  lineNumber = 398
  var func46 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 400
      lineNumber = 399
      var_m__95__world = var_world__39__;
      lineNumber = 401
      lineNumber = 400
      var bool47 = new GraceBoolean(true)
      var_worldSet = bool47;
      return bool47
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func46.paramTypes = [];
  func46.paramTypes.push([]);
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func46;
  func46.definitionLine = 398;
  func46.definitionModule = "kitty";
  lineNumber = 403
  var func48 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func48.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 404
      onSelf = true;
      var call49 = callmethod(this, "start", [0]);
      return call49
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
  this.methods["atModuleEnd"] = func48;
  func48.definitionLine = 403;
  func48.definitionModule = "kitty";
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
  var call50 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call50;
  this.data = call50.data;
  this._value = call50._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 395
  var func51 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func51.paramCounts[0])
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
  func51.paramCounts = [
    0,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["m_world"] = func51;
  func51.definitionLine = 395;
  func51.definitionModule = "kitty";
  lineNumber = 395
  var func52 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    1,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func52;
  func52.definitionLine = 395;
  func52.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool53 = new GraceBoolean(false)
  var var_worldSet = bool53;
  lineNumber = 395
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
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
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func54;
  func54.definitionLine = 395;
  func54.definitionModule = "kitty";
  lineNumber = 395
  var func55 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func55.paramCounts[0])
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
  func55.paramCounts = [
    1,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func55;
  func55.definitionLine = 395;
  func55.definitionModule = "kitty";
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
  lineNumber = 395
  var func56 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func56.paramCounts[0])
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
  func56.paramCounts = [
    0,
  ];
  func56.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func56;
  func56.definitionLine = 395;
  func56.definitionModule = "kitty";
  lineNumber = 395
  var func57 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func57.paramCounts[0])
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
  func57.paramCounts = [
    1,
  ];
  func57.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func57;
  func57.definitionLine = 395;
  func57.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 395
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    0,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func58;
  func58.definitionLine = 395;
  func58.definitionModule = "kitty";
  lineNumber = 395
  var func59 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    1,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func59;
  func59.definitionLine = 395;
  func59.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 395
  var func60 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func60.paramCounts[0])
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
  func60.paramCounts = [
    0,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func60;
  func60.definitionLine = 395;
  func60.definitionModule = "kitty";
  lineNumber = 395
  var func61 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func61.paramCounts[0])
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
  func61.paramCounts = [
    1,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func61;
  func61.definitionLine = 395;
  func61.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call62 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call62;
  lineNumber = 395
  var func63 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    0,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func63;
  func63.definitionLine = 395;
  func63.definitionModule = "kitty";
  lineNumber = 395
  var func64 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func64.paramCounts[0])
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
  func64.paramCounts = [
    1,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func64;
  func64.definitionLine = 395;
  func64.definitionModule = "kitty";
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
  var call65 = callmethod(var_dom,"window", [0]);
  var call66 = callmethod(call65,"Math", [0]);
  var var_math = call66;
  var func67 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    0,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["math"] = func67;
  func67.definitionLine = 18;
  func67.definitionModule = "kitty";
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
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["kitten"] = func68;
  func68.definitionLine = 18;
  func68.definitionModule = "kitty";
  lineNumber = 18
  var func69 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    1,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func69;
  func69.definitionLine = 18;
  func69.definitionModule = "kitty";
  lineNumber = 26
  var func70 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    0,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func70;
  func70.definitionLine = 26;
  func70.definitionModule = "kitty";
  var obj71 = Grace_allocObject();
  obj71.definitionModule = "kitty";
  obj71.definitionLine = 26;
  obj71.outer = this;
  var reader_kitty_outer_72 = function() {
    return this.outer;
  }
  obj71.methods["outer"] = reader_kitty_outer_72;
  function obj_init_71() {
    var origSuperDepth = superDepth;
    superDepth = obj71;
    obj71.annotations = [];
    var func73 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func73.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj74 = Grace_allocObject();
        obj74.definitionModule = "kitty";
        obj74.definitionLine = 26;
        obj74.outer = this;
        var reader_kitty_outer_75 = function() {
          return this.outer;
        }
        obj74.methods["outer"] = reader_kitty_outer_75;
        function obj_init_74() {
          var origSuperDepth = superDepth;
          superDepth = obj74;
          obj74.annotations = [];
          var func76 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func76.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call77 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call78 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod82 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient84 = callmethod(prod82, "/", [1], new GraceNum(180));
              var call85 = callmethod(var_ctx,"rotate", [1], quotient84);
              lineNumber = 46
              onSelf = true;
              var call86 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block87 = Grace_allocObject();
              block87.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block87.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block87.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block87.methods["match"] = GraceBlock_match;
              block87.methods["prefix?"] = GraceBlock_lift;
              block87.receiver = this;
              block87.className = 'block<kitty:49>';
              block87.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call89 = callmethod(this, "width", [0]);
                var call90 = callmethod(call89,"prefix-", [0]);
                var quotient92 = callmethod(call90, "/", [1], new GraceNum(2));
                onSelf = true;
                var call94 = callmethod(this, "height", [0]);
                var call95 = callmethod(call94,"prefix-", [0]);
                var quotient97 = callmethod(call95, "/", [1], new GraceNum(2));
                onSelf = true;
                var call98 = callmethod(this, "width", [0]);
                onSelf = true;
                var call99 = callmethod(this, "height", [0]);
                var call100 = callmethod(var_ctx,"drawImage", [5], var_element, quotient92, quotient97, call98, call99);
                return call100;
              };
              var call101 = callmethod(Grace_prelude,"for()do", [1, 1], call86, block87);
              lineNumber = 49
              var call102 = callmethod(var_ctx,"restore", [0]);
              return call102
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func76.paramCounts = [
            4,
          ];
          func76.variableArities = [
            false,
          ];
          obj74.methods["draw"] = func76;
          func76.definitionLine = 39;
          func76.definitionModule = "kitty";
          var func103 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func103.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call104 = callmethod(this, "imgTag", [0]);
              return call104
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func103.paramCounts = [
            0,
          ];
          func103.variableArities = [
            false,
          ];
          obj74.methods["getTag"] = func103;
          func103.definitionLine = 53;
          func103.definitionModule = "kitty";
          var func105 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func105.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call106 = callmethod(this, "elements", [0]);
              var call107 = callmethod(call106,"push", [1], var_imgTag__39__);
              return call107
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func105.paramCounts = [
            1,
          ];
          func105.variableArities = [
            false,
          ];
          obj74.methods["drawImage"] = func105;
          func105.definitionLine = 57;
          func105.definitionModule = "kitty";
          sourceObject = obj74;
          lineNumber = 30
          var string108 = new GraceString("img");
          var call109 = callmethod(var_dom,"document", [0]);
          var call110 = callmethod(call109,"createElement", [1], string108);
          obj74.data["imgTag"] = call110;
          var reader_kitty_imgTag_111 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_111.def = true;
          reader_kitty_imgTag_111.confidential = true;
          obj74.methods["imgTag"] = reader_kitty_imgTag_111;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call110)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj74;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call112 = callmethod(this, "imgTag", [0]);
          var call113 = callmethod(call112,"src:=", [1], var_url__39__);
          sourceObject = obj74;
          lineNumber = 33
          var call114 = callmethod(var_collections,"list", [0]);
          var call115 = callmethod(call114,"new", [0]);
          obj74.data["elements"] = call115;
          var reader_kitty_elements_116 = function() {
            return this.data["elements"];
          }
          obj74.methods["elements"] = reader_kitty_elements_116;
          obj74.data["elements"] = call115;
          var writer_kitty_elements_116 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj74.methods["elements:="] = writer_kitty_elements_116;
          reader_kitty_elements_116.confidential = true;
          writer_kitty_elements_116.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call115)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj74.mutable = true;
          sourceObject = obj74;
          lineNumber = 34
          onSelf = true;
          var call117 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call118 = callmethod(this, "elements", [0]);
          var call119 = callmethod(call118,"push", [1], call117);
          sourceObject = obj74;
          lineNumber = 36
          obj74.data["height"] = var_height__39__;
          var reader_kitty_height_120 = function() {
            return this.data["height"];
          }
          obj74.methods["height"] = reader_kitty_height_120;
          obj74.data["height"] = var_height__39__;
          var writer_kitty_height_120 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj74.methods["height:="] = writer_kitty_height_120;
          reader_kitty_height_120.confidential = true;
          writer_kitty_height_120.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj74.mutable = true;
          sourceObject = obj74;
          lineNumber = 37
          obj74.data["width"] = var_width__39__;
          var reader_kitty_width_121 = function() {
            return this.data["width"];
          }
          obj74.methods["width"] = reader_kitty_width_121;
          obj74.data["width"] = var_width__39__;
          var writer_kitty_width_121 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj74.methods["width:="] = writer_kitty_width_121;
          reader_kitty_width_121.confidential = true;
          writer_kitty_width_121.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj74.mutable = true;
          sourceObject = obj74;
          sourceObject = obj74;
          sourceObject = obj74;
          superDepth = origSuperDepth;
        }
        obj_init_74.apply(obj74, []);
        return obj74
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func73.paramCounts = [
      3,
    ];
    func73.variableArities = [
      false,
    ];
    obj71.methods["new"] = func73;
    func73.definitionLine = 26;
    func73.definitionModule = "kitty";
    var func122 = function(argcv) {
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
        var obj123 = Grace_allocObject();
        obj123.definitionModule = "kitty";
        obj123.definitionLine = 26;
        var inho123 = inheritingObject;
        while (inho123.superobj) inho123 = inho123.superobj;
        inho123.superobj = obj123;
        obj123.data = inheritingObject.data;
        obj123.outer = this;
        var reader_kitty_outer_124 = function() {
          return this.outer;
        }
        obj123.methods["outer"] = reader_kitty_outer_124;
        function obj_init_123() {
          var origSuperDepth = superDepth;
          superDepth = obj123;
          obj123.annotations = [];
          var func125 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func125.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call126 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call127 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod131 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient133 = callmethod(prod131, "/", [1], new GraceNum(180));
              var call134 = callmethod(var_ctx,"rotate", [1], quotient133);
              lineNumber = 46
              onSelf = true;
              var call135 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block136 = Grace_allocObject();
              block136.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block136.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block136.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block136.methods["match"] = GraceBlock_match;
              block136.methods["prefix?"] = GraceBlock_lift;
              block136.receiver = this;
              block136.className = 'block<kitty:49>';
              block136.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call138 = callmethod(this, "width", [0]);
                var call139 = callmethod(call138,"prefix-", [0]);
                var quotient141 = callmethod(call139, "/", [1], new GraceNum(2));
                onSelf = true;
                var call143 = callmethod(this, "height", [0]);
                var call144 = callmethod(call143,"prefix-", [0]);
                var quotient146 = callmethod(call144, "/", [1], new GraceNum(2));
                onSelf = true;
                var call147 = callmethod(this, "width", [0]);
                onSelf = true;
                var call148 = callmethod(this, "height", [0]);
                var call149 = callmethod(var_ctx,"drawImage", [5], var_element, quotient141, quotient146, call147, call148);
                return call149;
              };
              var call150 = callmethod(Grace_prelude,"for()do", [1, 1], call135, block136);
              lineNumber = 49
              var call151 = callmethod(var_ctx,"restore", [0]);
              return call151
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func125.paramCounts = [
            4,
          ];
          func125.variableArities = [
            false,
          ];
          obj123.methods["draw"] = func125;
          func125.definitionLine = 39;
          func125.definitionModule = "kitty";
          var func152 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func152.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call153 = callmethod(this, "imgTag", [0]);
              return call153
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func152.paramCounts = [
            0,
          ];
          func152.variableArities = [
            false,
          ];
          obj123.methods["getTag"] = func152;
          func152.definitionLine = 53;
          func152.definitionModule = "kitty";
          var func154 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func154.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call155 = callmethod(this, "elements", [0]);
              var call156 = callmethod(call155,"push", [1], var_imgTag__39__);
              return call156
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func154.paramCounts = [
            1,
          ];
          func154.variableArities = [
            false,
          ];
          obj123.methods["drawImage"] = func154;
          func154.definitionLine = 57;
          func154.definitionModule = "kitty";
          sourceObject = obj123;
          lineNumber = 30
          var string157 = new GraceString("img");
          var call158 = callmethod(var_dom,"document", [0]);
          var call159 = callmethod(call158,"createElement", [1], string157);
          obj123.data["imgTag"] = call159;
          var reader_kitty_imgTag_160 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_160.def = true;
          reader_kitty_imgTag_160.confidential = true;
          obj123.methods["imgTag"] = reader_kitty_imgTag_160;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call159)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj123;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call161 = callmethod(this, "imgTag", [0]);
          var call162 = callmethod(call161,"src:=", [1], var_url__39__);
          sourceObject = obj123;
          lineNumber = 33
          var call163 = callmethod(var_collections,"list", [0]);
          var call164 = callmethod(call163,"new", [0]);
          obj123.data["elements"] = call164;
          var reader_kitty_elements_165 = function() {
            return this.data["elements"];
          }
          obj123.methods["elements"] = reader_kitty_elements_165;
          obj123.data["elements"] = call164;
          var writer_kitty_elements_165 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj123.methods["elements:="] = writer_kitty_elements_165;
          reader_kitty_elements_165.confidential = true;
          writer_kitty_elements_165.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call164)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          lineNumber = 34
          onSelf = true;
          var call166 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call167 = callmethod(this, "elements", [0]);
          var call168 = callmethod(call167,"push", [1], call166);
          sourceObject = obj123;
          lineNumber = 36
          obj123.data["height"] = var_height__39__;
          var reader_kitty_height_169 = function() {
            return this.data["height"];
          }
          obj123.methods["height"] = reader_kitty_height_169;
          obj123.data["height"] = var_height__39__;
          var writer_kitty_height_169 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj123.methods["height:="] = writer_kitty_height_169;
          reader_kitty_height_169.confidential = true;
          writer_kitty_height_169.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          lineNumber = 37
          obj123.data["width"] = var_width__39__;
          var reader_kitty_width_170 = function() {
            return this.data["width"];
          }
          obj123.methods["width"] = reader_kitty_width_170;
          obj123.data["width"] = var_width__39__;
          var writer_kitty_width_170 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj123.methods["width:="] = writer_kitty_width_170;
          reader_kitty_width_170.confidential = true;
          writer_kitty_width_170.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          superDepth = origSuperDepth;
        }
        obj_init_123.apply(inheritingObject, []);
        return obj123
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj71.methods["new()object"] = func122;
    var func171 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 26
        var string172 = new GraceString("class KittyImage");
        return string172
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func171.paramCounts = [
    ];
    func171.variableArities = [
    ];
    obj71.methods["asDebugString"] = func171;
    func171.definitionLine = 26;
    func171.definitionModule = "kitty";
    sourceObject = obj71;
    sourceObject = obj71;
    superDepth = origSuperDepth;
  }
  obj_init_71.apply(obj71, []);
  var var_KittyImage = obj71;
  lineNumber = 64
  lineNumber = 71
  var func173 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func173.paramCounts[0])
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
  func173.paramCounts = [
    0,
  ];
  func173.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func173;
  func173.definitionLine = 71;
  func173.definitionModule = "kitty";
  var obj174 = Grace_allocObject();
  obj174.definitionModule = "kitty";
  obj174.definitionLine = 71;
  obj174.outer = this;
  var reader_kitty_outer_175 = function() {
    return this.outer;
  }
  obj174.methods["outer"] = reader_kitty_outer_175;
  function obj_init_174() {
    var origSuperDepth = superDepth;
    superDepth = obj174;
    obj174.annotations = [];
    var func176 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func176.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj177 = Grace_allocObject();
        obj177.definitionModule = "kitty";
        obj177.definitionLine = 71;
        obj177.outer = this;
        var reader_kitty_outer_178 = function() {
          return this.outer;
        }
        obj177.methods["outer"] = reader_kitty_outer_178;
        function obj_init_177() {
          var origSuperDepth = superDepth;
          superDepth = obj177;
          obj177.annotations = [];
          var func179 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              var string180 = new GraceString("realyee.png");
              onSelf = true;
              var call181 = callmethod(this, "createImage", [1], string180);
              lineNumber = 92
              lineNumber = 91
              var_kitten = this;
              lineNumber = 92
              var call182 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call182
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
          obj177.methods["awake"] = func179;
          func179.definitionLine = 89;
          func179.definitionModule = "kitty";
          var func183 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              onSelf = true;
              var call184 = callmethod(this, "updateAction", [0]);
              var call185 = callmethod(call184,"apply", [0]);
              return call185
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func183.paramCounts = [
            0,
          ];
          func183.variableArities = [
            false,
          ];
          obj177.methods["tick"] = func183;
          func183.definitionLine = 95;
          func183.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              onSelf = true;
              var call187 = callmethod(this, "destroyAction", [0]);
              var call188 = callmethod(call187,"apply", [0]);
              return call188
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func186.paramCounts = [
            0,
          ];
          func186.variableArities = [
            false,
          ];
          obj177.methods["kill"] = func186;
          func186.definitionLine = 99;
          func186.definitionModule = "kitty";
          var func189 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func189.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 100
              lineNumber = 104
              onSelf = true;
              var call192 = callmethod(this, "rotation", [0]);
              var prod194 = callmethod(call192, "*", [1], new GraceNum(3.14159));
              var quotient196 = callmethod(prod194, "/", [1], new GraceNum(180));
              var call197 = callmethod(var_math,"cos", [1], quotient196);
              var call199 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod202 = callmethod(var_distance, "*", [1], call199);
              var prod204 = callmethod(prod202, "*", [1], call197);
              onSelf = true;
              var call206 = callmethod(this, "posX", [0]);
              var opresult208 = callmethod(call206, "+", [1], prod204);
              onSelf = true;
              var call209 = callmethod(this, "posX:=", [1], opresult208);
              lineNumber = 105
              lineNumber = 104
              lineNumber = 105
              onSelf = true;
              var call212 = callmethod(this, "rotation", [0]);
              var prod214 = callmethod(call212, "*", [1], new GraceNum(3.14159));
              var quotient216 = callmethod(prod214, "/", [1], new GraceNum(180));
              var call217 = callmethod(var_math,"sin", [1], quotient216);
              var call219 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod222 = callmethod(var_distance, "*", [1], call219);
              var prod224 = callmethod(prod222, "*", [1], call217);
              onSelf = true;
              var call226 = callmethod(this, "posY", [0]);
              var opresult228 = callmethod(call226, "+", [1], prod224);
              onSelf = true;
              var call229 = callmethod(this, "posY:=", [1], opresult228);
              return call229
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func189.paramCounts = [
            1,
          ];
          func189.variableArities = [
            false,
          ];
          obj177.methods["move"] = func189;
          func189.definitionLine = 103;
          func189.definitionModule = "kitty";
          var func230 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              onSelf = true;
              var call233 = callmethod(this, "rotation", [0]);
              var opresult236 = callmethod(new GraceNum(90), "+", [1], call233);
              var prod238 = callmethod(opresult236, "*", [1], new GraceNum(3.14159));
              var quotient240 = callmethod(prod238, "/", [1], new GraceNum(180));
              var call241 = callmethod(var_math,"cos", [1], quotient240);
              var call243 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod246 = callmethod(var_distance, "*", [1], call243);
              var prod248 = callmethod(prod246, "*", [1], call241);
              onSelf = true;
              var call250 = callmethod(this, "posX", [0]);
              var opresult252 = callmethod(call250, "+", [1], prod248);
              onSelf = true;
              var call253 = callmethod(this, "posX:=", [1], opresult252);
              lineNumber = 110
              lineNumber = 109
              lineNumber = 110
              onSelf = true;
              var call256 = callmethod(this, "rotation", [0]);
              var opresult259 = callmethod(new GraceNum(90), "+", [1], call256);
              var prod261 = callmethod(opresult259, "*", [1], new GraceNum(3.14159));
              var quotient263 = callmethod(prod261, "/", [1], new GraceNum(180));
              var call264 = callmethod(var_math,"sin", [1], quotient263);
              var call266 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod269 = callmethod(var_distance, "*", [1], call266);
              var prod271 = callmethod(prod269, "*", [1], call264);
              onSelf = true;
              var call273 = callmethod(this, "posY", [0]);
              var opresult275 = callmethod(call273, "+", [1], prod271);
              onSelf = true;
              var call276 = callmethod(this, "posY:=", [1], opresult275);
              return call276
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func230.paramCounts = [
            1,
          ];
          func230.variableArities = [
            false,
          ];
          obj177.methods["strafe"] = func230;
          func230.definitionLine = 108;
          func230.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 115
              lineNumber = 114
              onSelf = true;
              var call279 = callmethod(this, "rotation", [0]);
              var opresult281 = callmethod(call279, "+", [1], var_angle);
              onSelf = true;
              var call282 = callmethod(this, "rotation:=", [1], opresult281);
              return call282
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
          obj177.methods["turn"] = func277;
          func277.definitionLine = 113;
          func277.definitionModule = "kitty";
          var func283 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              var call284 = callmethod(var_ctx,"save", [0]);
              lineNumber = 119
              onSelf = true;
              var call285 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call286 = callmethod(this, "posY", [0]);
              var call287 = callmethod(var_ctx,"translate", [2], call285, call286);
              lineNumber = 120
              onSelf = true;
              var call288 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call289 = callmethod(this, "image", [0]);
              var call290 = callmethod(call289,"draw", [4], var_ctx, var_dx, var_dy, call288);
              lineNumber = 121
              var call291 = callmethod(var_ctx,"restore", [0]);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func283.paramCounts = [
            3,
          ];
          func283.variableArities = [
            false,
          ];
          obj177.methods["draw"] = func283;
          func283.definitionLine = 117;
          func283.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 121
              lineNumber = 125
              var call293 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call294 = callmethod(call293, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call295 = callmethod(call294, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call296 = callmethod(this, "image:=", [1], call295);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            1,
          ];
          func292.variableArities = [
            false,
          ];
          obj177.methods["createImage"] = func292;
          func292.definitionLine = 124;
          func292.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 125
              lineNumber = 129
              onSelf = true;
              var call298 = callmethod(this, "image:=", [1], var_image__39__);
              return call298
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramTypes = [];
          func297.paramTypes.push([]);
          func297.paramCounts = [
            1,
          ];
          func297.variableArities = [
            false,
          ];
          obj177.methods["setImage"] = func297;
          func297.definitionLine = 128;
          func297.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 125
              lineNumber = 133
              onSelf = true;
              var call300 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj177.methods["setUpdateAction"] = func299;
          func299.definitionLine = 132;
          func299.definitionModule = "kitty";
          var func301 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 125
              lineNumber = 137
              onSelf = true;
              var call302 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call302
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func301.paramCounts = [
            1,
          ];
          func301.variableArities = [
            false,
          ];
          obj177.methods["setDestroyAction"] = func301;
          func301.definitionLine = 136;
          func301.definitionModule = "kitty";
          var func303 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 125
              lineNumber = 141
              onSelf = true;
              var call304 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 143
              lineNumber = 125
              lineNumber = 142
              onSelf = true;
              var call305 = callmethod(this, "posY:=", [1], var_y);
              return call305
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func303.paramCounts = [
            2,
          ];
          func303.variableArities = [
            false,
          ];
          obj177.methods["setLocation"] = func303;
          func303.definitionLine = 140;
          func303.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 146
              onSelf = true;
              var call307 = callmethod(this, "posX", [0]);
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
          obj177.methods["getX"] = func306;
          func306.definitionLine = 145;
          func306.definitionModule = "kitty";
          var func308 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func308.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 150
              onSelf = true;
              var call309 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func308.variableArities = [
            false,
          ];
          obj177.methods["getY"] = func308;
          func308.definitionLine = 149;
          func308.definitionModule = "kitty";
          var func310 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 125
              lineNumber = 154
              onSelf = true;
              var call311 = callmethod(this, "posX:=", [1], var_posX__39__);
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
          obj177.methods["setX"] = func310;
          func310.definitionLine = 153;
          func310.definitionModule = "kitty";
          var func312 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              lineNumber = 125
              lineNumber = 158
              onSelf = true;
              var call313 = callmethod(this, "posY:=", [1], var_posY__39__);
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
            1,
          ];
          func312.variableArities = [
            false,
          ];
          obj177.methods["setY"] = func312;
          func312.definitionLine = 157;
          func312.definitionModule = "kitty";
          var func314 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              lineNumber = 162
              onSelf = true;
              var call315 = callmethod(this, "rotation", [0]);
              return call315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func314.paramCounts = [
            0,
          ];
          func314.variableArities = [
            false,
          ];
          obj177.methods["getRotation"] = func314;
          func314.definitionLine = 161;
          func314.definitionModule = "kitty";
          sourceObject = obj177;
          lineNumber = 75
          obj177.data["tag"] = var_tag__39__;
          var reader_kitty_tag_316 = function() {
            return this.data["tag"];
          }
          obj177.methods["tag"] = reader_kitty_tag_316;
          obj177.data["tag"] = var_tag__39__;
          var writer_kitty_tag_316 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj177.methods["tag:="] = writer_kitty_tag_316;
          reader_kitty_tag_316.confidential = true;
          writer_kitty_tag_316.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 76
          obj177.data["posX"] = var_x__39__;
          var reader_kitty_posX_317 = function() {
            return this.data["posX"];
          }
          obj177.methods["posX"] = reader_kitty_posX_317;
          obj177.data["posX"] = var_x__39__;
          var writer_kitty_posX_317 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj177.methods["posX:="] = writer_kitty_posX_317;
          reader_kitty_posX_317.confidential = true;
          writer_kitty_posX_317.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 77
          obj177.data["posY"] = var_y__39__;
          var reader_kitty_posY_318 = function() {
            return this.data["posY"];
          }
          obj177.methods["posY"] = reader_kitty_posY_318;
          obj177.data["posY"] = var_y__39__;
          var writer_kitty_posY_318 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj177.methods["posY:="] = writer_kitty_posY_318;
          reader_kitty_posY_318.confidential = true;
          writer_kitty_posY_318.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 78
          obj177.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_319 = function() {
            return this.data["rotation"];
          }
          obj177.methods["rotation"] = reader_kitty_rotation_319;
          obj177.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_319 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj177.methods["rotation:="] = writer_kitty_rotation_319;
          reader_kitty_rotation_319.confidential = true;
          writer_kitty_rotation_319.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 82
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
          block320.className = 'block<kitty:82>';
          block320.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj177.data["updateAction"] = block320;
          var reader_kitty_updateAction_321 = function() {
            return this.data["updateAction"];
          }
          obj177.methods["updateAction"] = reader_kitty_updateAction_321;
          obj177.data["updateAction"] = block320;
          var writer_kitty_updateAction_321 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj177.methods["updateAction:="] = writer_kitty_updateAction_321;
          reader_kitty_updateAction_321.confidential = true;
          writer_kitty_updateAction_321.confidential = true;
          lineNumber = 82;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block320)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 84
          var block322 = Grace_allocObject();
          block322.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block322.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block322.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block322.methods["match"] = GraceBlock_match;
          block322.methods["prefix?"] = GraceBlock_lift;
          block322.receiver = this;
          block322.className = 'block<kitty:84>';
          block322.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj177.data["destroyAction"] = block322;
          var reader_kitty_destroyAction_323 = function() {
            return this.data["destroyAction"];
          }
          obj177.methods["destroyAction"] = reader_kitty_destroyAction_323;
          obj177.data["destroyAction"] = block322;
          var writer_kitty_destroyAction_323 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj177.methods["destroyAction:="] = writer_kitty_destroyAction_323;
          reader_kitty_destroyAction_323.confidential = true;
          writer_kitty_destroyAction_323.confidential = true;
          lineNumber = 84;
          moduleName = "kitty";
          lineNumber = 82
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block322)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj177.mutable = true;
          sourceObject = obj177;
          obj177.data["image"] = undefined;
          var reader_kitty_image_324 = function() {
            return this.data["image"];
          }
          obj177.methods["image"] = reader_kitty_image_324;
          obj177.data["image"] = undefined;
          var writer_kitty_image_324 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj177.methods["image:="] = writer_kitty_image_324;
          reader_kitty_image_324.confidential = true;
          writer_kitty_image_324.confidential = true;
          obj177.mutable = true;
          sourceObject = obj177;
          lineNumber = 86
          onSelf = true;
          var call325 = callmethod(this, "awake", [0]);
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          sourceObject = obj177;
          superDepth = origSuperDepth;
        }
        obj_init_177.apply(obj177, []);
        return obj177
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func176.paramCounts = [
      3,
    ];
    func176.variableArities = [
      false,
    ];
    obj174.methods["new"] = func176;
    func176.definitionLine = 71;
    func176.definitionModule = "kitty";
    var func326 = function(argcv) {
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
        var obj327 = Grace_allocObject();
        obj327.definitionModule = "kitty";
        obj327.definitionLine = 71;
        var inho327 = inheritingObject;
        while (inho327.superobj) inho327 = inho327.superobj;
        inho327.superobj = obj327;
        obj327.data = inheritingObject.data;
        obj327.outer = this;
        var reader_kitty_outer_328 = function() {
          return this.outer;
        }
        obj327.methods["outer"] = reader_kitty_outer_328;
        function obj_init_327() {
          var origSuperDepth = superDepth;
          superDepth = obj327;
          obj327.annotations = [];
          var func329 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              var string330 = new GraceString("realyee.png");
              onSelf = true;
              var call331 = callmethod(this, "createImage", [1], string330);
              lineNumber = 92
              lineNumber = 91
              var_kitten = this;
              lineNumber = 92
              var call332 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call332
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func329.paramCounts = [
            0,
          ];
          func329.variableArities = [
            false,
          ];
          obj327.methods["awake"] = func329;
          func329.definitionLine = 89;
          func329.definitionModule = "kitty";
          var func333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func333.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              onSelf = true;
              var call334 = callmethod(this, "updateAction", [0]);
              var call335 = callmethod(call334,"apply", [0]);
              return call335
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func333.paramCounts = [
            0,
          ];
          func333.variableArities = [
            false,
          ];
          obj327.methods["tick"] = func333;
          func333.definitionLine = 95;
          func333.definitionModule = "kitty";
          var func336 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func336.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              onSelf = true;
              var call337 = callmethod(this, "destroyAction", [0]);
              var call338 = callmethod(call337,"apply", [0]);
              return call338
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func336.paramCounts = [
            0,
          ];
          func336.variableArities = [
            false,
          ];
          obj327.methods["kill"] = func336;
          func336.definitionLine = 99;
          func336.definitionModule = "kitty";
          var func339 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func339.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 100
              lineNumber = 104
              onSelf = true;
              var call342 = callmethod(this, "rotation", [0]);
              var prod344 = callmethod(call342, "*", [1], new GraceNum(3.14159));
              var quotient346 = callmethod(prod344, "/", [1], new GraceNum(180));
              var call347 = callmethod(var_math,"cos", [1], quotient346);
              var call349 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod352 = callmethod(var_distance, "*", [1], call349);
              var prod354 = callmethod(prod352, "*", [1], call347);
              onSelf = true;
              var call356 = callmethod(this, "posX", [0]);
              var opresult358 = callmethod(call356, "+", [1], prod354);
              onSelf = true;
              var call359 = callmethod(this, "posX:=", [1], opresult358);
              lineNumber = 105
              lineNumber = 104
              lineNumber = 105
              onSelf = true;
              var call362 = callmethod(this, "rotation", [0]);
              var prod364 = callmethod(call362, "*", [1], new GraceNum(3.14159));
              var quotient366 = callmethod(prod364, "/", [1], new GraceNum(180));
              var call367 = callmethod(var_math,"sin", [1], quotient366);
              var call369 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod372 = callmethod(var_distance, "*", [1], call369);
              var prod374 = callmethod(prod372, "*", [1], call367);
              onSelf = true;
              var call376 = callmethod(this, "posY", [0]);
              var opresult378 = callmethod(call376, "+", [1], prod374);
              onSelf = true;
              var call379 = callmethod(this, "posY:=", [1], opresult378);
              return call379
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
          obj327.methods["move"] = func339;
          func339.definitionLine = 103;
          func339.definitionModule = "kitty";
          var func380 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func380.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              onSelf = true;
              var call383 = callmethod(this, "rotation", [0]);
              var opresult386 = callmethod(new GraceNum(90), "+", [1], call383);
              var prod388 = callmethod(opresult386, "*", [1], new GraceNum(3.14159));
              var quotient390 = callmethod(prod388, "/", [1], new GraceNum(180));
              var call391 = callmethod(var_math,"cos", [1], quotient390);
              var call393 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod396 = callmethod(var_distance, "*", [1], call393);
              var prod398 = callmethod(prod396, "*", [1], call391);
              onSelf = true;
              var call400 = callmethod(this, "posX", [0]);
              var opresult402 = callmethod(call400, "+", [1], prod398);
              onSelf = true;
              var call403 = callmethod(this, "posX:=", [1], opresult402);
              lineNumber = 110
              lineNumber = 109
              lineNumber = 110
              onSelf = true;
              var call406 = callmethod(this, "rotation", [0]);
              var opresult409 = callmethod(new GraceNum(90), "+", [1], call406);
              var prod411 = callmethod(opresult409, "*", [1], new GraceNum(3.14159));
              var quotient413 = callmethod(prod411, "/", [1], new GraceNum(180));
              var call414 = callmethod(var_math,"sin", [1], quotient413);
              var call416 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod419 = callmethod(var_distance, "*", [1], call416);
              var prod421 = callmethod(prod419, "*", [1], call414);
              onSelf = true;
              var call423 = callmethod(this, "posY", [0]);
              var opresult425 = callmethod(call423, "+", [1], prod421);
              onSelf = true;
              var call426 = callmethod(this, "posY:=", [1], opresult425);
              return call426
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func380.paramCounts = [
            1,
          ];
          func380.variableArities = [
            false,
          ];
          obj327.methods["strafe"] = func380;
          func380.definitionLine = 108;
          func380.definitionModule = "kitty";
          var func427 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func427.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 115
              lineNumber = 114
              onSelf = true;
              var call429 = callmethod(this, "rotation", [0]);
              var opresult431 = callmethod(call429, "+", [1], var_angle);
              onSelf = true;
              var call432 = callmethod(this, "rotation:=", [1], opresult431);
              return call432
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func427.paramCounts = [
            1,
          ];
          func427.variableArities = [
            false,
          ];
          obj327.methods["turn"] = func427;
          func427.definitionLine = 113;
          func427.definitionModule = "kitty";
          var func433 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func433.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              var call434 = callmethod(var_ctx,"save", [0]);
              lineNumber = 119
              onSelf = true;
              var call435 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call436 = callmethod(this, "posY", [0]);
              var call437 = callmethod(var_ctx,"translate", [2], call435, call436);
              lineNumber = 120
              onSelf = true;
              var call438 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call439 = callmethod(this, "image", [0]);
              var call440 = callmethod(call439,"draw", [4], var_ctx, var_dx, var_dy, call438);
              lineNumber = 121
              var call441 = callmethod(var_ctx,"restore", [0]);
              return call441
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func433.paramCounts = [
            3,
          ];
          func433.variableArities = [
            false,
          ];
          obj327.methods["draw"] = func433;
          func433.definitionLine = 117;
          func433.definitionModule = "kitty";
          var func442 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func442.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 121
              lineNumber = 125
              var call443 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call444 = callmethod(call443, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call445 = callmethod(call444, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call446 = callmethod(this, "image:=", [1], call445);
              return call446
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func442.paramCounts = [
            1,
          ];
          func442.variableArities = [
            false,
          ];
          obj327.methods["createImage"] = func442;
          func442.definitionLine = 124;
          func442.definitionModule = "kitty";
          var func447 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func447.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 125
              lineNumber = 129
              onSelf = true;
              var call448 = callmethod(this, "image:=", [1], var_image__39__);
              return call448
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func447.paramTypes = [];
          func447.paramTypes.push([]);
          func447.paramCounts = [
            1,
          ];
          func447.variableArities = [
            false,
          ];
          obj327.methods["setImage"] = func447;
          func447.definitionLine = 128;
          func447.definitionModule = "kitty";
          var func449 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func449.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 125
              lineNumber = 133
              onSelf = true;
              var call450 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj327.methods["setUpdateAction"] = func449;
          func449.definitionLine = 132;
          func449.definitionModule = "kitty";
          var func451 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func451.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 125
              lineNumber = 137
              onSelf = true;
              var call452 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
            1,
          ];
          func451.variableArities = [
            false,
          ];
          obj327.methods["setDestroyAction"] = func451;
          func451.definitionLine = 136;
          func451.definitionModule = "kitty";
          var func453 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func453.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 125
              lineNumber = 141
              onSelf = true;
              var call454 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 143
              lineNumber = 125
              lineNumber = 142
              onSelf = true;
              var call455 = callmethod(this, "posY:=", [1], var_y);
              return call455
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func453.paramCounts = [
            2,
          ];
          func453.variableArities = [
            false,
          ];
          obj327.methods["setLocation"] = func453;
          func453.definitionLine = 140;
          func453.definitionModule = "kitty";
          var func456 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func456.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 146
              onSelf = true;
              var call457 = callmethod(this, "posX", [0]);
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
          obj327.methods["getX"] = func456;
          func456.definitionLine = 145;
          func456.definitionModule = "kitty";
          var func458 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func458.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 150
              onSelf = true;
              var call459 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func458.variableArities = [
            false,
          ];
          obj327.methods["getY"] = func458;
          func458.definitionLine = 149;
          func458.definitionModule = "kitty";
          var func460 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func460.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 125
              lineNumber = 154
              onSelf = true;
              var call461 = callmethod(this, "posX:=", [1], var_posX__39__);
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
          obj327.methods["setX"] = func460;
          func460.definitionLine = 153;
          func460.definitionModule = "kitty";
          var func462 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func462.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              lineNumber = 125
              lineNumber = 158
              onSelf = true;
              var call463 = callmethod(this, "posY:=", [1], var_posY__39__);
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
            1,
          ];
          func462.variableArities = [
            false,
          ];
          obj327.methods["setY"] = func462;
          func462.definitionLine = 157;
          func462.definitionModule = "kitty";
          var func464 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func464.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              lineNumber = 162
              onSelf = true;
              var call465 = callmethod(this, "rotation", [0]);
              return call465
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func464.paramCounts = [
            0,
          ];
          func464.variableArities = [
            false,
          ];
          obj327.methods["getRotation"] = func464;
          func464.definitionLine = 161;
          func464.definitionModule = "kitty";
          sourceObject = obj327;
          lineNumber = 75
          obj327.data["tag"] = var_tag__39__;
          var reader_kitty_tag_466 = function() {
            return this.data["tag"];
          }
          obj327.methods["tag"] = reader_kitty_tag_466;
          obj327.data["tag"] = var_tag__39__;
          var writer_kitty_tag_466 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj327.methods["tag:="] = writer_kitty_tag_466;
          reader_kitty_tag_466.confidential = true;
          writer_kitty_tag_466.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 76
          obj327.data["posX"] = var_x__39__;
          var reader_kitty_posX_467 = function() {
            return this.data["posX"];
          }
          obj327.methods["posX"] = reader_kitty_posX_467;
          obj327.data["posX"] = var_x__39__;
          var writer_kitty_posX_467 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj327.methods["posX:="] = writer_kitty_posX_467;
          reader_kitty_posX_467.confidential = true;
          writer_kitty_posX_467.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 77
          obj327.data["posY"] = var_y__39__;
          var reader_kitty_posY_468 = function() {
            return this.data["posY"];
          }
          obj327.methods["posY"] = reader_kitty_posY_468;
          obj327.data["posY"] = var_y__39__;
          var writer_kitty_posY_468 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj327.methods["posY:="] = writer_kitty_posY_468;
          reader_kitty_posY_468.confidential = true;
          writer_kitty_posY_468.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 78
          obj327.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_469 = function() {
            return this.data["rotation"];
          }
          obj327.methods["rotation"] = reader_kitty_rotation_469;
          obj327.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_469 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj327.methods["rotation:="] = writer_kitty_rotation_469;
          reader_kitty_rotation_469.confidential = true;
          writer_kitty_rotation_469.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 82
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
          block470.className = 'block<kitty:82>';
          block470.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj327.data["updateAction"] = block470;
          var reader_kitty_updateAction_471 = function() {
            return this.data["updateAction"];
          }
          obj327.methods["updateAction"] = reader_kitty_updateAction_471;
          obj327.data["updateAction"] = block470;
          var writer_kitty_updateAction_471 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj327.methods["updateAction:="] = writer_kitty_updateAction_471;
          reader_kitty_updateAction_471.confidential = true;
          writer_kitty_updateAction_471.confidential = true;
          lineNumber = 82;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block470)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 84
          var block472 = Grace_allocObject();
          block472.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block472.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block472.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block472.methods["match"] = GraceBlock_match;
          block472.methods["prefix?"] = GraceBlock_lift;
          block472.receiver = this;
          block472.className = 'block<kitty:84>';
          block472.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj327.data["destroyAction"] = block472;
          var reader_kitty_destroyAction_473 = function() {
            return this.data["destroyAction"];
          }
          obj327.methods["destroyAction"] = reader_kitty_destroyAction_473;
          obj327.data["destroyAction"] = block472;
          var writer_kitty_destroyAction_473 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj327.methods["destroyAction:="] = writer_kitty_destroyAction_473;
          reader_kitty_destroyAction_473.confidential = true;
          writer_kitty_destroyAction_473.confidential = true;
          lineNumber = 84;
          moduleName = "kitty";
          lineNumber = 82
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block472)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj327.mutable = true;
          sourceObject = obj327;
          obj327.data["image"] = undefined;
          var reader_kitty_image_474 = function() {
            return this.data["image"];
          }
          obj327.methods["image"] = reader_kitty_image_474;
          obj327.data["image"] = undefined;
          var writer_kitty_image_474 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj327.methods["image:="] = writer_kitty_image_474;
          reader_kitty_image_474.confidential = true;
          writer_kitty_image_474.confidential = true;
          obj327.mutable = true;
          sourceObject = obj327;
          lineNumber = 86
          onSelf = true;
          var call475 = callmethod(this, "awake", [0]);
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          sourceObject = obj327;
          superDepth = origSuperDepth;
        }
        obj_init_327.apply(inheritingObject, []);
        return obj327
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj174.methods["new()object"] = func326;
    var func476 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string477 = new GraceString("class KittyEntity");
        return string477
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func476.paramCounts = [
    ];
    func476.variableArities = [
    ];
    obj174.methods["asDebugString"] = func476;
    func476.definitionLine = 71;
    func476.definitionModule = "kitty";
    sourceObject = obj174;
    sourceObject = obj174;
    superDepth = origSuperDepth;
  }
  obj_init_174.apply(obj174, []);
  var var_KittyEntity = obj174;
  lineNumber = 166
  lineNumber = 178
  lineNumber = 183
  lineNumber = 187
  lineNumber = 192
  lineNumber = 200
  var func478 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func478.paramCounts[0])
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
  func478.paramCounts = [
    0,
  ];
  func478.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func478;
  func478.definitionLine = 200;
  func478.definitionModule = "kitty";
  var obj479 = Grace_allocObject();
  obj479.definitionModule = "kitty";
  obj479.definitionLine = 200;
  obj479.outer = this;
  var reader_kitty_outer_480 = function() {
    return this.outer;
  }
  obj479.methods["outer"] = reader_kitty_outer_480;
  function obj_init_479() {
    var origSuperDepth = superDepth;
    superDepth = obj479;
    obj479.annotations = [];
    var func481 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func481.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj482 = Grace_allocObject();
        obj482.definitionModule = "kitty";
        obj482.definitionLine = 200;
        obj482.outer = this;
        var reader_kitty_outer_483 = function() {
          return this.outer;
        }
        obj482.methods["outer"] = reader_kitty_outer_483;
        function obj_init_482() {
          var origSuperDepth = superDepth;
          superDepth = obj482;
          obj482.annotations = [];
          var func484 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func484.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var if485 = var_done;
              lineNumber = 238
              onSelf = true;
              var call486 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call486)) {
                lineNumber = 240
                lineNumber = 239
                var bool487 = new GraceBoolean(false)
                return bool487
              }
              lineNumber = 243
              lineNumber = 200
              lineNumber = 242
              var call488 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call489 = callmethod(this, "document:=", [1], call488);
              lineNumber = 243
              lineNumber = 242
              lineNumber = 243
              var string490 = new GraceString("standard-canvas");
              onSelf = true;
              var call491 = callmethod(this, "document", [0]);
              var call492 = callmethod(call491,"getElementById", [1], string490);
              onSelf = true;
              var call493 = callmethod(this, "canvas:=", [1], call492);
              lineNumber = 245
              lineNumber = 242
              lineNumber = 244
              onSelf = true;
              var call494 = callmethod(this, "canvas", [0]);
              var call495 = callmethod(call494,"width", [0]);
              onSelf = true;
              var call496 = callmethod(this, "canvasWidth:=", [1], call495);
              lineNumber = 248
              lineNumber = 244
              lineNumber = 245
              onSelf = true;
              var call497 = callmethod(this, "canvas", [0]);
              var call498 = callmethod(call497,"height", [0]);
              onSelf = true;
              var call499 = callmethod(this, "canvasHeight:=", [1], call498);
              lineNumber = 260
              var block500 = Grace_allocObject();
              block500.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block500.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block500.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block500.methods["match"] = GraceBlock_match;
              block500.methods["prefix?"] = GraceBlock_lift;
              block500.receiver = this;
              block500.className = 'block<kitty:260>';
              block500.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 251
                lineNumber = 250
                onSelf = true;
                var call501 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call503 = callmethod(this, "canvas", [0]);
                var call504 = callmethod(call503,"offsetWidth", [0]);
                onSelf = true;
                var call506 = callmethod(this, "canvas", [0]);
                var call507 = callmethod(call506,"offsetLeft", [0]);
                var call509 = callmethod(var_ev,"clientX", [0]);
                var diff511 = callmethod(call509, "-", [1], call507);
                var quotient513 = callmethod(diff511, "/", [1], call504);
                var prod515 = callmethod(quotient513, "*", [1], call501);
                var var_x = prod515;
                lineNumber = 251;
                moduleName = "kitty";
                lineNumber = 250
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 255
                lineNumber = 251
                onSelf = true;
                var call516 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call518 = callmethod(this, "canvas", [0]);
                var call519 = callmethod(call518,"offsetHeight", [0]);
                onSelf = true;
                var call521 = callmethod(this, "canvas", [0]);
                var call522 = callmethod(call521,"offsetTop", [0]);
                var call524 = callmethod(var_ev,"clientY", [0]);
                var diff526 = callmethod(call524, "-", [1], call522);
                var quotient528 = callmethod(diff526, "/", [1], call519);
                var prod530 = callmethod(quotient528, "*", [1], call516);
                var var_y = prod530;
                lineNumber = 255;
                moduleName = "kitty";
                lineNumber = 251
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 259
                var if531 = var_done;
                lineNumber = 255
                var opresult534 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call537 = callmethod(this, "canvasWidth", [0]);
                var diff539 = callmethod(call537, "-", [1], new GraceNum(20));
                var opresult542 = callmethod(var_x, ">", [1], diff539);
                var opresult544 = callmethod(opresult542, "&&", [1], opresult534);
                if (Grace_isTrue(opresult544)) {
                  lineNumber = 256
                  var call545 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 257
                  onSelf = true;
                  var call546 = callmethod(this, "stop", [0]);
                  if531 = call546;
                }
                return if531;
              };
              var_mouseDownListener = block500;
              lineNumber = 260
              var string547 = new GraceString("mousedown");
              onSelf = true;
              var call548 = callmethod(this, "canvas", [0]);
              var call549 = callmethod(call548,"addEventListener", [2], string547, var_mouseDownListener);
              lineNumber = 270
              var block550 = Grace_allocObject();
              block550.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block550.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block550.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block550.methods["match"] = GraceBlock_match;
              block550.methods["prefix?"] = GraceBlock_lift;
              block550.receiver = this;
              block550.className = 'block<kitty:270>';
              block550.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 268
                var if551 = var_done;
                lineNumber = 265
                var call553 = callmethod(var_ev,"keyCode", [0]);
                var opresult555 = callmethod(call553, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult555)) {
                  lineNumber = 266
                  onSelf = true;
                  var call556 = callmethod(this, "stop", [0]);
                  if551 = call556;
                }
                lineNumber = 269
                lineNumber = 268
                var call557 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call557;
                return call557;
              };
              var_keyDownListener = block550;
              lineNumber = 270
              var string558 = new GraceString("keydown");
              onSelf = true;
              var call559 = callmethod(this, "document", [0]);
              var call560 = callmethod(call559,"addEventListener", [2], string558, var_keyDownListener);
              lineNumber = 276
              var block561 = Grace_allocObject();
              block561.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block561.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block561.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block561.methods["match"] = GraceBlock_match;
              block561.methods["prefix?"] = GraceBlock_lift;
              block561.receiver = this;
              block561.className = 'block<kitty:276>';
              block561.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 275
                lineNumber = 274
                var call562 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call562;
                return call562;
              };
              var_keyUpListener = block561;
              lineNumber = 276
              var string563 = new GraceString("keyup");
              onSelf = true;
              var call564 = callmethod(this, "document", [0]);
              var call565 = callmethod(call564,"addEventListener", [2], string563, var_keyUpListener);
              lineNumber = 278
              lineNumber = 268
              lineNumber = 278
              var string566 = new GraceString("canvas");
              var call567 = callmethod(var_dom,"document", [0]);
              var call568 = callmethod(call567,"createElement", [1], string566);
              onSelf = true;
              var call569 = callmethod(this, "backingCanvas:=", [1], call568);
              lineNumber = 280
              lineNumber = 278
              lineNumber = 279
              onSelf = true;
              var call570 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call571 = callmethod(this, "backingCanvas", [0]);
              var call572 = callmethod(call571,"height:=", [1], call570);
              lineNumber = 281
              lineNumber = 278
              lineNumber = 280
              onSelf = true;
              var call573 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call574 = callmethod(this, "backingCanvas", [0]);
              var call575 = callmethod(call574,"width:=", [1], call573);
              lineNumber = 281
              lineNumber = 278
              lineNumber = 281
              var string576 = new GraceString("2d");
              onSelf = true;
              var call577 = callmethod(this, "backingCanvas", [0]);
              var call578 = callmethod(call577,"getContext", [1], string576);
              onSelf = true;
              var call579 = callmethod(this, "backingContext:=", [1], call578);
              lineNumber = 282
              lineNumber = 278
              lineNumber = 282
              var string580 = new GraceString("2d");
              onSelf = true;
              var call581 = callmethod(this, "canvas", [0]);
              var call582 = callmethod(call581,"getContext", [1], string580);
              onSelf = true;
              var call583 = callmethod(this, "mctx:=", [1], call582);
              lineNumber = 285
              var string584 = new GraceString("doggo.jpg");
              onSelf = true;
              var call585 = callmethod(this, "setBackground", [1], string584);
              lineNumber = 288
              var call586 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call587 = callmethod(call586, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call588 = callmethod(call587, "setWorld", [1], this);
              lineNumber = 291
              lineNumber = 290
              var_kitten = this;
              lineNumber = 292
              lineNumber = 288
              lineNumber = 291
              var bool589 = new GraceBoolean(true)
              onSelf = true;
              var call590 = callmethod(this, "isInit:=", [1], bool589);
              return call590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func484.paramCounts = [
            0,
          ];
          func484.variableArities = [
            false,
          ];
          obj482.methods["init"] = func484;
          func484.definitionLine = 234;
          func484.definitionModule = "kitty";
          var func591 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 288
              lineNumber = 297
              var bool592 = new GraceBoolean(true)
              onSelf = true;
              var call593 = callmethod(this, "isRunning:=", [1], bool592);
              lineNumber = 298
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
              block594.className = 'block<kitty:298>';
              block594.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call595 = callmethod(this, "isRunning", [0]);
                return call595;
              };
              lineNumber = 302
              var block596 = Grace_allocObject();
              block596.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block596.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block596.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block596.methods["match"] = GraceBlock_match;
              block596.methods["prefix?"] = GraceBlock_lift;
              block596.receiver = this;
              block596.className = 'block<kitty:302>';
              block596.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call597 = callmethod(this, "tick", [0]);
                return call597;
              };
              lineNumber = 298
              var call598 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block594, new GraceNum(10), block596);
              return call598
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func591.paramCounts = [
            0,
          ];
          func591.variableArities = [
            false,
          ];
          obj482.methods["start"] = func591;
          func591.definitionLine = 295;
          func591.definitionModule = "kitty";
          var func599 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 288
              lineNumber = 310
              onSelf = true;
              var call600 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call601 = callmethod(this, "mctx", [0]);
              var call602 = callmethod(call601,"fillStyle:=", [1], call600);
              lineNumber = 311
              onSelf = true;
              var call603 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call604 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call605 = callmethod(this, "mctx", [0]);
              var call606 = callmethod(call605,"fillRect", [4], new GraceNum(0), new GraceNum(0), call603, call604);
              lineNumber = 312
              onSelf = true;
              var call607 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call608 = callmethod(this, "mctx", [0]);
              var call609 = callmethod(call608,"drawImage", [3], call607, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call610 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call612 = callmethod(this, "canvasWidth", [0]);
              var quotient614 = callmethod(call612, "/", [1], new GraceNum(2));
              onSelf = true;
              var call616 = callmethod(this, "canvasHeight", [0]);
              var quotient618 = callmethod(call616, "/", [1], new GraceNum(2));
              onSelf = true;
              var call619 = callmethod(this, "background", [0]);
              var call620 = callmethod(call619,"draw", [4], call610, quotient614, quotient618, new GraceNum(0));
              lineNumber = 316
              onSelf = true;
              var call621 = callmethod(this, "updateAction", [0]);
              var call622 = callmethod(call621,"apply", [0]);
              lineNumber = 319
              onSelf = true;
              var call623 = callmethod(this, "entities", [0]);
              lineNumber = 325
              var block624 = Grace_allocObject();
              block624.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block624.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block624.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block624.methods["match"] = GraceBlock_match;
              block624.methods["prefix?"] = GraceBlock_lift;
              block624.receiver = this;
              block624.className = 'block<kitty:325>';
              block624.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 320
                var call625 = callmethod(var_entity,"tick", [0]);
                lineNumber = 321
                onSelf = true;
                var call626 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call628 = callmethod(this, "canvasWidth", [0]);
                var quotient630 = callmethod(call628, "/", [1], new GraceNum(2));
                onSelf = true;
                var call632 = callmethod(this, "canvasHeight", [0]);
                var quotient634 = callmethod(call632, "/", [1], new GraceNum(2));
                var call635 = callmethod(var_entity,"draw", [3], call626, quotient630, quotient634);
                return call635;
              };
              var call636 = callmethod(Grace_prelude,"for()do", [1, 1], call623, block624);
              return call636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func599.paramCounts = [
            0,
          ];
          func599.variableArities = [
            false,
          ];
          obj482.methods["tick"] = func599;
          func599.definitionLine = 305;
          func599.definitionModule = "kitty";
          var func637 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 328
              var string638 = new GraceString("WORLD STOPPING...");
              var call639 = Grace_print(string638);
              lineNumber = 330
              lineNumber = 320
              lineNumber = 329
              var bool640 = new GraceBoolean(false)
              onSelf = true;
              var call641 = callmethod(this, "isRunning:=", [1], bool640);
              lineNumber = 330
              onSelf = true;
              var call642 = callmethod(this, "destroyAction", [0]);
              var call643 = callmethod(call642,"apply", [0]);
              lineNumber = 331
              onSelf = true;
              var call644 = callmethod(this, "entities", [0]);
              lineNumber = 334
              var block645 = Grace_allocObject();
              block645.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block645.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block645.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block645.methods["match"] = GraceBlock_match;
              block645.methods["prefix?"] = GraceBlock_lift;
              block645.receiver = this;
              block645.className = 'block<kitty:334>';
              block645.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 332
                var call646 = callmethod(var_entity,"kill", [0]);
                return call646;
              };
              var call647 = callmethod(Grace_prelude,"for()do", [1, 1], call644, block645);
              lineNumber = 334
              var string648 = new GraceString("mousedown");
              onSelf = true;
              var call649 = callmethod(this, "canvas", [0]);
              var call650 = callmethod(call649,"removeEventListener", [2], string648, var_mouseDownListener);
              lineNumber = 335
              var string651 = new GraceString("keydown");
              onSelf = true;
              var call652 = callmethod(this, "document", [0]);
              var call653 = callmethod(call652,"removeEventListener", [2], string651, var_keyDownListener);
              lineNumber = 336
              var string654 = new GraceString("keyup");
              onSelf = true;
              var call655 = callmethod(this, "document", [0]);
              var call656 = callmethod(call655,"removeEventListener", [2], string654, var_keyUpListener);
              return call656
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
          obj482.methods["stop"] = func637;
          func637.definitionLine = 327;
          func637.definitionModule = "kitty";
          var func657 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func657.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 340
              lineNumber = 332
              lineNumber = 340
              onSelf = true;
              var call658 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call659 = callmethod(this, "canvasHeight", [0]);
              var call660 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call661 = callmethod(call660, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call662 = callmethod(call661, "Image()width()height", [1, 1, 1], var_url, call658, call659);
              onSelf = true;
              var call663 = callmethod(this, "background:=", [1], call662);
              return call663
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func657.paramCounts = [
            1,
          ];
          func657.variableArities = [
            false,
          ];
          obj482.methods["setBackground"] = func657;
          func657.definitionLine = 339;
          func657.definitionModule = "kitty";
          var func664 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func664.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 344
              onSelf = true;
              var call665 = callmethod(this, "entities", [0]);
              var call666 = callmethod(call665,"push", [1], var_e);
              return call666
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func664.paramCounts = [
            1,
          ];
          func664.variableArities = [
            false,
          ];
          obj482.methods["addEntity"] = func664;
          func664.definitionLine = 343;
          func664.definitionModule = "kitty";
          var func667 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func667.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 349
              lineNumber = 348
              onSelf = true;
              var call668 = callmethod(this, "mctx", [0]);
              return call668
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func667.paramCounts = [
            0,
          ];
          func667.variableArities = [
            false,
          ];
          obj482.methods["getContext"] = func667;
          func667.definitionLine = 347;
          func667.definitionModule = "kitty";
          var func669 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func669.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 353
              lineNumber = 352
              onSelf = true;
              var call670 = callmethod(this, "width", [0]);
              onSelf = true;
              var call672 = callmethod(this, "canvasWidth", [0]);
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
          obj482.methods["moveWidthMultipler"] = func669;
          func669.definitionLine = 351;
          func669.definitionModule = "kitty";
          var func675 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func675.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 357
              lineNumber = 356
              onSelf = true;
              var call676 = callmethod(this, "height", [0]);
              onSelf = true;
              var call678 = callmethod(this, "canvasHeight", [0]);
              var quotient680 = callmethod(call678, "/", [1], call676);
              return quotient680
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func675.paramCounts = [
            0,
          ];
          func675.variableArities = [
            false,
          ];
          obj482.methods["moveHeightMultipler"] = func675;
          func675.definitionLine = 355;
          func675.definitionModule = "kitty";
          var func681 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func681.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 361
              lineNumber = 340
              lineNumber = 360
              onSelf = true;
              var call682 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call682
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func681.paramCounts = [
            1,
          ];
          func681.variableArities = [
            false,
          ];
          obj482.methods["setUpdateAction"] = func681;
          func681.definitionLine = 359;
          func681.definitionModule = "kitty";
          var func683 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func683.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 365
              lineNumber = 340
              lineNumber = 364
              onSelf = true;
              var call684 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call684
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func683.paramCounts = [
            1,
          ];
          func683.variableArities = [
            false,
          ];
          obj482.methods["setDestroyAction"] = func683;
          func683.definitionLine = 363;
          func683.definitionModule = "kitty";
          sourceObject = obj482;
          lineNumber = 203
          obj482.data["width"] = var_width__39__;
          var reader_kitty_width_685 = function() {
            return this.data["width"];
          }
          obj482.methods["width"] = reader_kitty_width_685;
          obj482.data["width"] = var_width__39__;
          var writer_kitty_width_685 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj482.methods["width:="] = writer_kitty_width_685;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 203
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 204
          obj482.data["height"] = var_height__39__;
          var reader_kitty_height_686 = function() {
            return this.data["height"];
          }
          obj482.methods["height"] = reader_kitty_height_686;
          obj482.data["height"] = var_height__39__;
          var writer_kitty_height_686 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj482.methods["height:="] = writer_kitty_height_686;
          lineNumber = 205;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 205
          obj482.data["tag"] = var_tag__39__;
          var reader_kitty_tag_687 = function() {
            return this.data["tag"];
          }
          obj482.methods["tag"] = reader_kitty_tag_687;
          obj482.data["tag"] = var_tag__39__;
          var writer_kitty_tag_687 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj482.methods["tag:="] = writer_kitty_tag_687;
          lineNumber = 207;
          moduleName = "kitty";
          lineNumber = 205
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["background"] = undefined;
          var reader_kitty_background_688 = function() {
            return this.data["background"];
          }
          obj482.methods["background"] = reader_kitty_background_688;
          obj482.data["background"] = undefined;
          var writer_kitty_background_688 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj482.methods["background:="] = writer_kitty_background_688;
          reader_kitty_background_688.confidential = true;
          writer_kitty_background_688.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 208
          var string689 = new GraceString("black");
          obj482.data["backgroundColour"] = string689;
          var reader_kitty_backgroundColour_690 = function() {
            return this.data["backgroundColour"];
          }
          obj482.methods["backgroundColour"] = reader_kitty_backgroundColour_690;
          obj482.data["backgroundColour"] = string689;
          var writer_kitty_backgroundColour_690 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj482.methods["backgroundColour:="] = writer_kitty_backgroundColour_690;
          reader_kitty_backgroundColour_690.confidential = true;
          writer_kitty_backgroundColour_690.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string689)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["document"] = undefined;
          var reader_kitty_document_691 = function() {
            return this.data["document"];
          }
          obj482.methods["document"] = reader_kitty_document_691;
          obj482.data["document"] = undefined;
          var writer_kitty_document_691 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj482.methods["document:="] = writer_kitty_document_691;
          reader_kitty_document_691.confidential = true;
          writer_kitty_document_691.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_692 = function() {
            return this.data["backingCanvas"];
          }
          obj482.methods["backingCanvas"] = reader_kitty_backingCanvas_692;
          obj482.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_692 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj482.methods["backingCanvas:="] = writer_kitty_backingCanvas_692;
          reader_kitty_backingCanvas_692.confidential = true;
          writer_kitty_backingCanvas_692.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["backingContext"] = undefined;
          var reader_kitty_backingContext_693 = function() {
            return this.data["backingContext"];
          }
          obj482.methods["backingContext"] = reader_kitty_backingContext_693;
          obj482.data["backingContext"] = undefined;
          var writer_kitty_backingContext_693 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj482.methods["backingContext:="] = writer_kitty_backingContext_693;
          reader_kitty_backingContext_693.confidential = true;
          writer_kitty_backingContext_693.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["canvas"] = undefined;
          var reader_kitty_canvas_694 = function() {
            return this.data["canvas"];
          }
          obj482.methods["canvas"] = reader_kitty_canvas_694;
          obj482.data["canvas"] = undefined;
          var writer_kitty_canvas_694 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj482.methods["canvas:="] = writer_kitty_canvas_694;
          reader_kitty_canvas_694.confidential = true;
          writer_kitty_canvas_694.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_695 = function() {
            return this.data["canvasWidth"];
          }
          obj482.methods["canvasWidth"] = reader_kitty_canvasWidth_695;
          obj482.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_695 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj482.methods["canvasWidth:="] = writer_kitty_canvasWidth_695;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_696 = function() {
            return this.data["canvasHeight"];
          }
          obj482.methods["canvasHeight"] = reader_kitty_canvasHeight_696;
          obj482.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_696 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj482.methods["canvasHeight:="] = writer_kitty_canvasHeight_696;
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 219
          var call697 = callmethod(var_collections,"list", [0]);
          var call698 = callmethod(call697,"new", [0]);
          obj482.data["entities"] = call698;
          var reader_kitty_entities_699 = function() {
            return this.data["entities"];
          }
          obj482.methods["entities"] = reader_kitty_entities_699;
          obj482.data["entities"] = call698;
          var writer_kitty_entities_699 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj482.methods["entities:="] = writer_kitty_entities_699;
          reader_kitty_entities_699.confidential = true;
          writer_kitty_entities_699.confidential = true;
          lineNumber = 221;
          moduleName = "kitty";
          lineNumber = 219
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call698)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 221
          var bool700 = new GraceBoolean(false)
          obj482.data["isInit"] = bool700;
          var reader_kitty_isInit_701 = function() {
            return this.data["isInit"];
          }
          obj482.methods["isInit"] = reader_kitty_isInit_701;
          obj482.data["isInit"] = bool700;
          var writer_kitty_isInit_701 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj482.methods["isInit:="] = writer_kitty_isInit_701;
          reader_kitty_isInit_701.confidential = true;
          writer_kitty_isInit_701.confidential = true;
          lineNumber = 222;
          moduleName = "kitty";
          lineNumber = 221
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool700)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 222
          var bool702 = new GraceBoolean(false)
          obj482.data["isRunning"] = bool702;
          var reader_kitty_isRunning_703 = function() {
            return this.data["isRunning"];
          }
          obj482.methods["isRunning"] = reader_kitty_isRunning_703;
          obj482.data["isRunning"] = bool702;
          var writer_kitty_isRunning_703 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj482.methods["isRunning:="] = writer_kitty_isRunning_703;
          reader_kitty_isRunning_703.confidential = true;
          writer_kitty_isRunning_703.confidential = true;
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool702)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["mctx"] = undefined;
          var reader_kitty_mctx_704 = function() {
            return this.data["mctx"];
          }
          obj482.methods["mctx"] = reader_kitty_mctx_704;
          obj482.data["mctx"] = undefined;
          var writer_kitty_mctx_704 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj482.methods["mctx:="] = writer_kitty_mctx_704;
          reader_kitty_mctx_704.confidential = true;
          writer_kitty_mctx_704.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          obj482.data["ent"] = undefined;
          var reader_kitty_ent_705 = function() {
            return this.data["ent"];
          }
          obj482.methods["ent"] = reader_kitty_ent_705;
          obj482.data["ent"] = undefined;
          var writer_kitty_ent_705 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj482.methods["ent:="] = writer_kitty_ent_705;
          reader_kitty_ent_705.confidential = true;
          writer_kitty_ent_705.confidential = true;
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 229
          var block706 = Grace_allocObject();
          block706.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block706.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block706.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block706.methods["match"] = GraceBlock_match;
          block706.methods["prefix?"] = GraceBlock_lift;
          block706.receiver = this;
          block706.className = 'block<kitty:229>';
          block706.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj482.data["updateAction"] = block706;
          var reader_kitty_updateAction_707 = function() {
            return this.data["updateAction"];
          }
          obj482.methods["updateAction"] = reader_kitty_updateAction_707;
          obj482.data["updateAction"] = block706;
          var writer_kitty_updateAction_707 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj482.methods["updateAction:="] = writer_kitty_updateAction_707;
          reader_kitty_updateAction_707.confidential = true;
          writer_kitty_updateAction_707.confidential = true;
          lineNumber = 229;
          moduleName = "kitty";
          lineNumber = 228
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block706)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 231
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
          block708.className = 'block<kitty:231>';
          block708.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj482.data["destroyAction"] = block708;
          var reader_kitty_destroyAction_709 = function() {
            return this.data["destroyAction"];
          }
          obj482.methods["destroyAction"] = reader_kitty_destroyAction_709;
          obj482.data["destroyAction"] = block708;
          var writer_kitty_destroyAction_709 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj482.methods["destroyAction:="] = writer_kitty_destroyAction_709;
          reader_kitty_destroyAction_709.confidential = true;
          writer_kitty_destroyAction_709.confidential = true;
          lineNumber = 231;
          moduleName = "kitty";
          lineNumber = 229
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block708)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj482.mutable = true;
          sourceObject = obj482;
          lineNumber = 231
          onSelf = true;
          var call710 = callmethod(this, "init", [0]);
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          sourceObject = obj482;
          superDepth = origSuperDepth;
        }
        obj_init_482.apply(obj482, []);
        return obj482
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func481.paramCounts = [
      3,
    ];
    func481.variableArities = [
      false,
    ];
    obj479.methods["new"] = func481;
    func481.definitionLine = 200;
    func481.definitionModule = "kitty";
    var func711 = function(argcv) {
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
        var obj712 = Grace_allocObject();
        obj712.definitionModule = "kitty";
        obj712.definitionLine = 200;
        var inho712 = inheritingObject;
        while (inho712.superobj) inho712 = inho712.superobj;
        inho712.superobj = obj712;
        obj712.data = inheritingObject.data;
        obj712.outer = this;
        var reader_kitty_outer_713 = function() {
          return this.outer;
        }
        obj712.methods["outer"] = reader_kitty_outer_713;
        function obj_init_712() {
          var origSuperDepth = superDepth;
          superDepth = obj712;
          obj712.annotations = [];
          var func714 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func714.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var if715 = var_done;
              lineNumber = 238
              onSelf = true;
              var call716 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call716)) {
                lineNumber = 240
                lineNumber = 239
                var bool717 = new GraceBoolean(false)
                return bool717
              }
              lineNumber = 243
              lineNumber = 219
              lineNumber = 242
              var call718 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call719 = callmethod(this, "document:=", [1], call718);
              lineNumber = 243
              lineNumber = 242
              lineNumber = 243
              var string720 = new GraceString("standard-canvas");
              onSelf = true;
              var call721 = callmethod(this, "document", [0]);
              var call722 = callmethod(call721,"getElementById", [1], string720);
              onSelf = true;
              var call723 = callmethod(this, "canvas:=", [1], call722);
              lineNumber = 245
              lineNumber = 242
              lineNumber = 244
              onSelf = true;
              var call724 = callmethod(this, "canvas", [0]);
              var call725 = callmethod(call724,"width", [0]);
              onSelf = true;
              var call726 = callmethod(this, "canvasWidth:=", [1], call725);
              lineNumber = 248
              lineNumber = 244
              lineNumber = 245
              onSelf = true;
              var call727 = callmethod(this, "canvas", [0]);
              var call728 = callmethod(call727,"height", [0]);
              onSelf = true;
              var call729 = callmethod(this, "canvasHeight:=", [1], call728);
              lineNumber = 260
              var block730 = Grace_allocObject();
              block730.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block730.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block730.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block730.methods["match"] = GraceBlock_match;
              block730.methods["prefix?"] = GraceBlock_lift;
              block730.receiver = this;
              block730.className = 'block<kitty:260>';
              block730.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 251
                lineNumber = 250
                onSelf = true;
                var call731 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call733 = callmethod(this, "canvas", [0]);
                var call734 = callmethod(call733,"offsetWidth", [0]);
                onSelf = true;
                var call736 = callmethod(this, "canvas", [0]);
                var call737 = callmethod(call736,"offsetLeft", [0]);
                var call739 = callmethod(var_ev,"clientX", [0]);
                var diff741 = callmethod(call739, "-", [1], call737);
                var quotient743 = callmethod(diff741, "/", [1], call734);
                var prod745 = callmethod(quotient743, "*", [1], call731);
                var var_x = prod745;
                lineNumber = 251;
                moduleName = "kitty";
                lineNumber = 250
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 255
                lineNumber = 251
                onSelf = true;
                var call746 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call748 = callmethod(this, "canvas", [0]);
                var call749 = callmethod(call748,"offsetHeight", [0]);
                onSelf = true;
                var call751 = callmethod(this, "canvas", [0]);
                var call752 = callmethod(call751,"offsetTop", [0]);
                var call754 = callmethod(var_ev,"clientY", [0]);
                var diff756 = callmethod(call754, "-", [1], call752);
                var quotient758 = callmethod(diff756, "/", [1], call749);
                var prod760 = callmethod(quotient758, "*", [1], call746);
                var var_y = prod760;
                lineNumber = 255;
                moduleName = "kitty";
                lineNumber = 251
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 259
                var if761 = var_done;
                lineNumber = 255
                var opresult764 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call767 = callmethod(this, "canvasWidth", [0]);
                var diff769 = callmethod(call767, "-", [1], new GraceNum(20));
                var opresult772 = callmethod(var_x, ">", [1], diff769);
                var opresult774 = callmethod(opresult772, "&&", [1], opresult764);
                if (Grace_isTrue(opresult774)) {
                  lineNumber = 256
                  var call775 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 257
                  onSelf = true;
                  var call776 = callmethod(this, "stop", [0]);
                  if761 = call776;
                }
                return if761;
              };
              var_mouseDownListener = block730;
              lineNumber = 260
              var string777 = new GraceString("mousedown");
              onSelf = true;
              var call778 = callmethod(this, "canvas", [0]);
              var call779 = callmethod(call778,"addEventListener", [2], string777, var_mouseDownListener);
              lineNumber = 270
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
              block780.className = 'block<kitty:270>';
              block780.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 268
                var if781 = var_done;
                lineNumber = 265
                var call783 = callmethod(var_ev,"keyCode", [0]);
                var opresult785 = callmethod(call783, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult785)) {
                  lineNumber = 266
                  onSelf = true;
                  var call786 = callmethod(this, "stop", [0]);
                  if781 = call786;
                }
                lineNumber = 269
                lineNumber = 268
                var call787 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call787;
                return call787;
              };
              var_keyDownListener = block780;
              lineNumber = 270
              var string788 = new GraceString("keydown");
              onSelf = true;
              var call789 = callmethod(this, "document", [0]);
              var call790 = callmethod(call789,"addEventListener", [2], string788, var_keyDownListener);
              lineNumber = 276
              var block791 = Grace_allocObject();
              block791.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block791.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block791.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block791.methods["match"] = GraceBlock_match;
              block791.methods["prefix?"] = GraceBlock_lift;
              block791.receiver = this;
              block791.className = 'block<kitty:276>';
              block791.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 275
                lineNumber = 274
                var call792 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call792;
                return call792;
              };
              var_keyUpListener = block791;
              lineNumber = 276
              var string793 = new GraceString("keyup");
              onSelf = true;
              var call794 = callmethod(this, "document", [0]);
              var call795 = callmethod(call794,"addEventListener", [2], string793, var_keyUpListener);
              lineNumber = 278
              lineNumber = 268
              lineNumber = 278
              var string796 = new GraceString("canvas");
              var call797 = callmethod(var_dom,"document", [0]);
              var call798 = callmethod(call797,"createElement", [1], string796);
              onSelf = true;
              var call799 = callmethod(this, "backingCanvas:=", [1], call798);
              lineNumber = 280
              lineNumber = 278
              lineNumber = 279
              onSelf = true;
              var call800 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call801 = callmethod(this, "backingCanvas", [0]);
              var call802 = callmethod(call801,"height:=", [1], call800);
              lineNumber = 281
              lineNumber = 278
              lineNumber = 280
              onSelf = true;
              var call803 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call804 = callmethod(this, "backingCanvas", [0]);
              var call805 = callmethod(call804,"width:=", [1], call803);
              lineNumber = 281
              lineNumber = 278
              lineNumber = 281
              var string806 = new GraceString("2d");
              onSelf = true;
              var call807 = callmethod(this, "backingCanvas", [0]);
              var call808 = callmethod(call807,"getContext", [1], string806);
              onSelf = true;
              var call809 = callmethod(this, "backingContext:=", [1], call808);
              lineNumber = 282
              lineNumber = 278
              lineNumber = 282
              var string810 = new GraceString("2d");
              onSelf = true;
              var call811 = callmethod(this, "canvas", [0]);
              var call812 = callmethod(call811,"getContext", [1], string810);
              onSelf = true;
              var call813 = callmethod(this, "mctx:=", [1], call812);
              lineNumber = 285
              var string814 = new GraceString("doggo.jpg");
              onSelf = true;
              var call815 = callmethod(this, "setBackground", [1], string814);
              lineNumber = 288
              var call816 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call817 = callmethod(call816, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call818 = callmethod(call817, "setWorld", [1], this);
              lineNumber = 291
              lineNumber = 290
              var_kitten = this;
              lineNumber = 292
              lineNumber = 288
              lineNumber = 291
              var bool819 = new GraceBoolean(true)
              onSelf = true;
              var call820 = callmethod(this, "isInit:=", [1], bool819);
              return call820
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func714.paramCounts = [
            0,
          ];
          func714.variableArities = [
            false,
          ];
          obj712.methods["init"] = func714;
          func714.definitionLine = 234;
          func714.definitionModule = "kitty";
          var func821 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func821.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 288
              lineNumber = 297
              var bool822 = new GraceBoolean(true)
              onSelf = true;
              var call823 = callmethod(this, "isRunning:=", [1], bool822);
              lineNumber = 298
              var block824 = Grace_allocObject();
              block824.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block824.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block824.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block824.methods["match"] = GraceBlock_match;
              block824.methods["prefix?"] = GraceBlock_lift;
              block824.receiver = this;
              block824.className = 'block<kitty:298>';
              block824.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call825 = callmethod(this, "isRunning", [0]);
                return call825;
              };
              lineNumber = 302
              var block826 = Grace_allocObject();
              block826.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block826.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block826.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block826.methods["match"] = GraceBlock_match;
              block826.methods["prefix?"] = GraceBlock_lift;
              block826.receiver = this;
              block826.className = 'block<kitty:302>';
              block826.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call827 = callmethod(this, "tick", [0]);
                return call827;
              };
              lineNumber = 298
              var call828 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block824, new GraceNum(10), block826);
              return call828
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
          obj712.methods["start"] = func821;
          func821.definitionLine = 295;
          func821.definitionModule = "kitty";
          var func829 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func829.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 288
              lineNumber = 310
              onSelf = true;
              var call830 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call831 = callmethod(this, "mctx", [0]);
              var call832 = callmethod(call831,"fillStyle:=", [1], call830);
              lineNumber = 311
              onSelf = true;
              var call833 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call834 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call835 = callmethod(this, "mctx", [0]);
              var call836 = callmethod(call835,"fillRect", [4], new GraceNum(0), new GraceNum(0), call833, call834);
              lineNumber = 312
              onSelf = true;
              var call837 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call838 = callmethod(this, "mctx", [0]);
              var call839 = callmethod(call838,"drawImage", [3], call837, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call840 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call842 = callmethod(this, "canvasWidth", [0]);
              var quotient844 = callmethod(call842, "/", [1], new GraceNum(2));
              onSelf = true;
              var call846 = callmethod(this, "canvasHeight", [0]);
              var quotient848 = callmethod(call846, "/", [1], new GraceNum(2));
              onSelf = true;
              var call849 = callmethod(this, "background", [0]);
              var call850 = callmethod(call849,"draw", [4], call840, quotient844, quotient848, new GraceNum(0));
              lineNumber = 316
              onSelf = true;
              var call851 = callmethod(this, "updateAction", [0]);
              var call852 = callmethod(call851,"apply", [0]);
              lineNumber = 319
              onSelf = true;
              var call853 = callmethod(this, "entities", [0]);
              lineNumber = 325
              var block854 = Grace_allocObject();
              block854.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block854.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block854.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block854.methods["match"] = GraceBlock_match;
              block854.methods["prefix?"] = GraceBlock_lift;
              block854.receiver = this;
              block854.className = 'block<kitty:325>';
              block854.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 320
                var call855 = callmethod(var_entity,"tick", [0]);
                lineNumber = 321
                onSelf = true;
                var call856 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call858 = callmethod(this, "canvasWidth", [0]);
                var quotient860 = callmethod(call858, "/", [1], new GraceNum(2));
                onSelf = true;
                var call862 = callmethod(this, "canvasHeight", [0]);
                var quotient864 = callmethod(call862, "/", [1], new GraceNum(2));
                var call865 = callmethod(var_entity,"draw", [3], call856, quotient860, quotient864);
                return call865;
              };
              var call866 = callmethod(Grace_prelude,"for()do", [1, 1], call853, block854);
              return call866
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func829.paramCounts = [
            0,
          ];
          func829.variableArities = [
            false,
          ];
          obj712.methods["tick"] = func829;
          func829.definitionLine = 305;
          func829.definitionModule = "kitty";
          var func867 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func867.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 328
              var string868 = new GraceString("WORLD STOPPING...");
              var call869 = Grace_print(string868);
              lineNumber = 330
              lineNumber = 320
              lineNumber = 329
              var bool870 = new GraceBoolean(false)
              onSelf = true;
              var call871 = callmethod(this, "isRunning:=", [1], bool870);
              lineNumber = 330
              onSelf = true;
              var call872 = callmethod(this, "destroyAction", [0]);
              var call873 = callmethod(call872,"apply", [0]);
              lineNumber = 331
              onSelf = true;
              var call874 = callmethod(this, "entities", [0]);
              lineNumber = 334
              var block875 = Grace_allocObject();
              block875.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block875.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block875.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block875.methods["match"] = GraceBlock_match;
              block875.methods["prefix?"] = GraceBlock_lift;
              block875.receiver = this;
              block875.className = 'block<kitty:334>';
              block875.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 332
                var call876 = callmethod(var_entity,"kill", [0]);
                return call876;
              };
              var call877 = callmethod(Grace_prelude,"for()do", [1, 1], call874, block875);
              lineNumber = 334
              var string878 = new GraceString("mousedown");
              onSelf = true;
              var call879 = callmethod(this, "canvas", [0]);
              var call880 = callmethod(call879,"removeEventListener", [2], string878, var_mouseDownListener);
              lineNumber = 335
              var string881 = new GraceString("keydown");
              onSelf = true;
              var call882 = callmethod(this, "document", [0]);
              var call883 = callmethod(call882,"removeEventListener", [2], string881, var_keyDownListener);
              lineNumber = 336
              var string884 = new GraceString("keyup");
              onSelf = true;
              var call885 = callmethod(this, "document", [0]);
              var call886 = callmethod(call885,"removeEventListener", [2], string884, var_keyUpListener);
              return call886
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func867.paramCounts = [
            0,
          ];
          func867.variableArities = [
            false,
          ];
          obj712.methods["stop"] = func867;
          func867.definitionLine = 327;
          func867.definitionModule = "kitty";
          var func887 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func887.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 340
              lineNumber = 332
              lineNumber = 340
              onSelf = true;
              var call888 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call889 = callmethod(this, "canvasHeight", [0]);
              var call890 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call891 = callmethod(call890, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call892 = callmethod(call891, "Image()width()height", [1, 1, 1], var_url, call888, call889);
              onSelf = true;
              var call893 = callmethod(this, "background:=", [1], call892);
              return call893
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func887.paramCounts = [
            1,
          ];
          func887.variableArities = [
            false,
          ];
          obj712.methods["setBackground"] = func887;
          func887.definitionLine = 339;
          func887.definitionModule = "kitty";
          var func894 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func894.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 344
              onSelf = true;
              var call895 = callmethod(this, "entities", [0]);
              var call896 = callmethod(call895,"push", [1], var_e);
              return call896
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func894.paramCounts = [
            1,
          ];
          func894.variableArities = [
            false,
          ];
          obj712.methods["addEntity"] = func894;
          func894.definitionLine = 343;
          func894.definitionModule = "kitty";
          var func897 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func897.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 349
              lineNumber = 348
              onSelf = true;
              var call898 = callmethod(this, "mctx", [0]);
              return call898
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func897.paramCounts = [
            0,
          ];
          func897.variableArities = [
            false,
          ];
          obj712.methods["getContext"] = func897;
          func897.definitionLine = 347;
          func897.definitionModule = "kitty";
          var func899 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func899.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 353
              lineNumber = 352
              onSelf = true;
              var call900 = callmethod(this, "width", [0]);
              onSelf = true;
              var call902 = callmethod(this, "canvasWidth", [0]);
              var quotient904 = callmethod(call902, "/", [1], call900);
              return quotient904
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func899.paramCounts = [
            0,
          ];
          func899.variableArities = [
            false,
          ];
          obj712.methods["moveWidthMultipler"] = func899;
          func899.definitionLine = 351;
          func899.definitionModule = "kitty";
          var func905 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func905.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 357
              lineNumber = 356
              onSelf = true;
              var call906 = callmethod(this, "height", [0]);
              onSelf = true;
              var call908 = callmethod(this, "canvasHeight", [0]);
              var quotient910 = callmethod(call908, "/", [1], call906);
              return quotient910
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func905.paramCounts = [
            0,
          ];
          func905.variableArities = [
            false,
          ];
          obj712.methods["moveHeightMultipler"] = func905;
          func905.definitionLine = 355;
          func905.definitionModule = "kitty";
          var func911 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func911.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 361
              lineNumber = 340
              lineNumber = 360
              onSelf = true;
              var call912 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call912
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func911.paramCounts = [
            1,
          ];
          func911.variableArities = [
            false,
          ];
          obj712.methods["setUpdateAction"] = func911;
          func911.definitionLine = 359;
          func911.definitionModule = "kitty";
          var func913 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func913.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 365
              lineNumber = 340
              lineNumber = 364
              onSelf = true;
              var call914 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call914
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func913.paramCounts = [
            1,
          ];
          func913.variableArities = [
            false,
          ];
          obj712.methods["setDestroyAction"] = func913;
          func913.definitionLine = 363;
          func913.definitionModule = "kitty";
          sourceObject = obj712;
          lineNumber = 203
          obj712.data["width"] = var_width__39__;
          var reader_kitty_width_915 = function() {
            return this.data["width"];
          }
          obj712.methods["width"] = reader_kitty_width_915;
          obj712.data["width"] = var_width__39__;
          var writer_kitty_width_915 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj712.methods["width:="] = writer_kitty_width_915;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 203
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 204
          obj712.data["height"] = var_height__39__;
          var reader_kitty_height_916 = function() {
            return this.data["height"];
          }
          obj712.methods["height"] = reader_kitty_height_916;
          obj712.data["height"] = var_height__39__;
          var writer_kitty_height_916 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj712.methods["height:="] = writer_kitty_height_916;
          lineNumber = 205;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 205
          obj712.data["tag"] = var_tag__39__;
          var reader_kitty_tag_917 = function() {
            return this.data["tag"];
          }
          obj712.methods["tag"] = reader_kitty_tag_917;
          obj712.data["tag"] = var_tag__39__;
          var writer_kitty_tag_917 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj712.methods["tag:="] = writer_kitty_tag_917;
          lineNumber = 207;
          moduleName = "kitty";
          lineNumber = 205
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["background"] = undefined;
          var reader_kitty_background_918 = function() {
            return this.data["background"];
          }
          obj712.methods["background"] = reader_kitty_background_918;
          obj712.data["background"] = undefined;
          var writer_kitty_background_918 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj712.methods["background:="] = writer_kitty_background_918;
          reader_kitty_background_918.confidential = true;
          writer_kitty_background_918.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 208
          var string919 = new GraceString("black");
          obj712.data["backgroundColour"] = string919;
          var reader_kitty_backgroundColour_920 = function() {
            return this.data["backgroundColour"];
          }
          obj712.methods["backgroundColour"] = reader_kitty_backgroundColour_920;
          obj712.data["backgroundColour"] = string919;
          var writer_kitty_backgroundColour_920 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj712.methods["backgroundColour:="] = writer_kitty_backgroundColour_920;
          reader_kitty_backgroundColour_920.confidential = true;
          writer_kitty_backgroundColour_920.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 208
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string919)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["document"] = undefined;
          var reader_kitty_document_921 = function() {
            return this.data["document"];
          }
          obj712.methods["document"] = reader_kitty_document_921;
          obj712.data["document"] = undefined;
          var writer_kitty_document_921 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj712.methods["document:="] = writer_kitty_document_921;
          reader_kitty_document_921.confidential = true;
          writer_kitty_document_921.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_922 = function() {
            return this.data["backingCanvas"];
          }
          obj712.methods["backingCanvas"] = reader_kitty_backingCanvas_922;
          obj712.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_922 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj712.methods["backingCanvas:="] = writer_kitty_backingCanvas_922;
          reader_kitty_backingCanvas_922.confidential = true;
          writer_kitty_backingCanvas_922.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["backingContext"] = undefined;
          var reader_kitty_backingContext_923 = function() {
            return this.data["backingContext"];
          }
          obj712.methods["backingContext"] = reader_kitty_backingContext_923;
          obj712.data["backingContext"] = undefined;
          var writer_kitty_backingContext_923 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj712.methods["backingContext:="] = writer_kitty_backingContext_923;
          reader_kitty_backingContext_923.confidential = true;
          writer_kitty_backingContext_923.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["canvas"] = undefined;
          var reader_kitty_canvas_924 = function() {
            return this.data["canvas"];
          }
          obj712.methods["canvas"] = reader_kitty_canvas_924;
          obj712.data["canvas"] = undefined;
          var writer_kitty_canvas_924 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj712.methods["canvas:="] = writer_kitty_canvas_924;
          reader_kitty_canvas_924.confidential = true;
          writer_kitty_canvas_924.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_925 = function() {
            return this.data["canvasWidth"];
          }
          obj712.methods["canvasWidth"] = reader_kitty_canvasWidth_925;
          obj712.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_925 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj712.methods["canvasWidth:="] = writer_kitty_canvasWidth_925;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_926 = function() {
            return this.data["canvasHeight"];
          }
          obj712.methods["canvasHeight"] = reader_kitty_canvasHeight_926;
          obj712.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_926 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj712.methods["canvasHeight:="] = writer_kitty_canvasHeight_926;
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 219
          var call927 = callmethod(var_collections,"list", [0]);
          var call928 = callmethod(call927,"new", [0]);
          obj712.data["entities"] = call928;
          var reader_kitty_entities_929 = function() {
            return this.data["entities"];
          }
          obj712.methods["entities"] = reader_kitty_entities_929;
          obj712.data["entities"] = call928;
          var writer_kitty_entities_929 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj712.methods["entities:="] = writer_kitty_entities_929;
          reader_kitty_entities_929.confidential = true;
          writer_kitty_entities_929.confidential = true;
          lineNumber = 221;
          moduleName = "kitty";
          lineNumber = 219
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call928)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 221
          var bool930 = new GraceBoolean(false)
          obj712.data["isInit"] = bool930;
          var reader_kitty_isInit_931 = function() {
            return this.data["isInit"];
          }
          obj712.methods["isInit"] = reader_kitty_isInit_931;
          obj712.data["isInit"] = bool930;
          var writer_kitty_isInit_931 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj712.methods["isInit:="] = writer_kitty_isInit_931;
          reader_kitty_isInit_931.confidential = true;
          writer_kitty_isInit_931.confidential = true;
          lineNumber = 222;
          moduleName = "kitty";
          lineNumber = 221
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool930)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 222
          var bool932 = new GraceBoolean(false)
          obj712.data["isRunning"] = bool932;
          var reader_kitty_isRunning_933 = function() {
            return this.data["isRunning"];
          }
          obj712.methods["isRunning"] = reader_kitty_isRunning_933;
          obj712.data["isRunning"] = bool932;
          var writer_kitty_isRunning_933 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj712.methods["isRunning:="] = writer_kitty_isRunning_933;
          reader_kitty_isRunning_933.confidential = true;
          writer_kitty_isRunning_933.confidential = true;
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool932)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["mctx"] = undefined;
          var reader_kitty_mctx_934 = function() {
            return this.data["mctx"];
          }
          obj712.methods["mctx"] = reader_kitty_mctx_934;
          obj712.data["mctx"] = undefined;
          var writer_kitty_mctx_934 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj712.methods["mctx:="] = writer_kitty_mctx_934;
          reader_kitty_mctx_934.confidential = true;
          writer_kitty_mctx_934.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          obj712.data["ent"] = undefined;
          var reader_kitty_ent_935 = function() {
            return this.data["ent"];
          }
          obj712.methods["ent"] = reader_kitty_ent_935;
          obj712.data["ent"] = undefined;
          var writer_kitty_ent_935 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj712.methods["ent:="] = writer_kitty_ent_935;
          reader_kitty_ent_935.confidential = true;
          writer_kitty_ent_935.confidential = true;
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 229
          var block936 = Grace_allocObject();
          block936.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block936.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block936.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block936.methods["match"] = GraceBlock_match;
          block936.methods["prefix?"] = GraceBlock_lift;
          block936.receiver = this;
          block936.className = 'block<kitty:229>';
          block936.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj712.data["updateAction"] = block936;
          var reader_kitty_updateAction_937 = function() {
            return this.data["updateAction"];
          }
          obj712.methods["updateAction"] = reader_kitty_updateAction_937;
          obj712.data["updateAction"] = block936;
          var writer_kitty_updateAction_937 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj712.methods["updateAction:="] = writer_kitty_updateAction_937;
          reader_kitty_updateAction_937.confidential = true;
          writer_kitty_updateAction_937.confidential = true;
          lineNumber = 229;
          moduleName = "kitty";
          lineNumber = 228
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block936)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 231
          var block938 = Grace_allocObject();
          block938.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block938.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block938.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block938.methods["match"] = GraceBlock_match;
          block938.methods["prefix?"] = GraceBlock_lift;
          block938.receiver = this;
          block938.className = 'block<kitty:231>';
          block938.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj712.data["destroyAction"] = block938;
          var reader_kitty_destroyAction_939 = function() {
            return this.data["destroyAction"];
          }
          obj712.methods["destroyAction"] = reader_kitty_destroyAction_939;
          obj712.data["destroyAction"] = block938;
          var writer_kitty_destroyAction_939 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj712.methods["destroyAction:="] = writer_kitty_destroyAction_939;
          reader_kitty_destroyAction_939.confidential = true;
          writer_kitty_destroyAction_939.confidential = true;
          lineNumber = 231;
          moduleName = "kitty";
          lineNumber = 229
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block938)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj712.mutable = true;
          sourceObject = obj712;
          lineNumber = 231
          onSelf = true;
          var call940 = callmethod(this, "init", [0]);
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          sourceObject = obj712;
          superDepth = origSuperDepth;
        }
        obj_init_712.apply(inheritingObject, []);
        return obj712
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj479.methods["new()object"] = func711;
    var func941 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 200
        var string942 = new GraceString("class KittyWorld");
        return string942
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func941.paramCounts = [
    ];
    func941.variableArities = [
    ];
    obj479.methods["asDebugString"] = func941;
    func941.definitionLine = 200;
    func941.definitionModule = "kitty";
    sourceObject = obj479;
    sourceObject = obj479;
    superDepth = origSuperDepth;
  }
  obj_init_479.apply(obj479, []);
  var var_KittyWorld = obj479;
  lineNumber = 370
  lineNumber = 379
  lineNumber = 394
  lineNumber = 398
  lineNumber = 403
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyWorld:\n new\nfresh:World()width()height:\n mctx:=\n isRunning:=\n width:=\n tag\n height\n entities:=\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n tag:=\n backgroundColour\n background:=\n updateAction:=\n backingContext\n canvas\n canvasHeight\n destroyAction:=\n background\n backingCanvas:=\n canvas:=\n destroyAction\n start\n height:=\n document:=\n isRunning\n ent:=\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n init\n moveWidthMultipler\n mctx\n canvasWidth\n backingCanvas\n updateAction\n stop\n isInit:=\n tick\n getContext\n isInit\n setDestroyAction\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n move\n image:=\n updateAction\n image\n strafe\n awake\n setUpdateAction\n setY\n getRotation\n tag:=\n setDestroyAction\n createImage\n updateAction:=\n getY\n getX\n tag\n destroyAction:=\n posY\n posX:=\n posY:=\n setX\n setLocation\n rotation:=\n destroyAction\n turn\n posX\n tick\n kill\n draw\n setImage\n rotation\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n KittyWorld\n World()width()height\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\n height:=\nfresh:Entity()x()y:\n move\n image:=\n posX:=\n image\n strafe\n awake\n setUpdateAction\n setLocation\n getRotation\n tag:=\n setDestroyAction\n createImage\n updateAction:=\n getY\n rotation:=\n tag\n destroyAction:=\n tick\n updateAction\n posY:=\n setX\n setY\n getX\n destroyAction\n turn\n posX\n posY\n kill\n draw\n setImage\n rotation\nmethods-of:KittyWorld.new:\n mctx:=\n isRunning:=\n width:=\n tag\n height\n entities:=\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n tag:=\n backgroundColour\n background:=\n updateAction:=\n init\n canvas\n moveWidthMultipler\n destroyAction:=\n background\n backingCanvas:=\n mctx\n destroyAction\n start\n height:=\n document:=\n isRunning\n ent:=\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n canvasHeight\n canvas:=\n canvasWidth\n tick\n updateAction\n stop\n isInit:=\n backingCanvas\n getContext\n setDestroyAction\n isInit\npath:\n kitty\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\n height:=\nconfidential:\n";
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
    "    // Actions",
    "    var updateAction := {}",
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
    "        updateAction.apply",
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
    "    method setUpdateAction(action') {",
    "        updateAction := action'",
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
    "",
    "// CONTROL",
    "",
    "// Called always",
    "method update(action') {",
    "    kitten.setUpdateAction(action')",
    "}",
    "",
    "// Called on game end",
    "method onDestroy(action') {",
    "    kitten.setDestroyAction(action')",
    "}",
    "",
    "method isKeyDown(key) {",
    "    return key == currentKeyDown",
    "}",
    "",
    "// MOUSE",
    "method onMouseDown(action') {",
    "    kitten.setMouseDownAction(action')",
    "}",
    "",
    "",
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
    "    // World actions",
    "    var updateAction := {}",
    "    var destroyAction := {}",
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
    "        // Set the world",
    "        setWorld(self)",
    "",
    "        kitten := self",
    "        isInit := true",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        // print \"WORLD STARTED\"",
    "        isRunning := true",
    "        dom.while { isRunning } waiting 10 do {",
    "            tick",
    "        }",
    "        // print \"WORLD STOPPED\"        ",
    "    }",
    "",
    "    // Updates the game world",
    "    method tick {",
    "",
    "        // print \"UPDATING WORLD...\"",
    "",
    "        // Draw the background",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)",
    "",
    "        // Update world",
    "        updateAction.apply",
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
    "        destroyAction.apply",
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
    "    method setUpdateAction(action') {",
    "        updateAction := action'",
    "    }",
    "",
    "    method setDestroyAction(action') {",
    "        destroyAction := action'",
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
