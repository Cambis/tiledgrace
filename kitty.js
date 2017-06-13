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
  lineNumber = 179
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
      lineNumber = 180
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 180;
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
        lineNumber = 181
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
  func8.definitionLine = 179;
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
      obj13.definitionLine = 180;
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
  lineNumber = 191
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
      lineNumber = 192
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
  func16.definitionLine = 191;
  func16.definitionModule = "kitty";
  lineNumber = 196
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
      lineNumber = 197
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
  func18.definitionLine = 196;
  func18.definitionModule = "kitty";
  lineNumber = 200
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
      lineNumber = 202
      lineNumber = 201
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
  func20.definitionLine = 200;
  func20.definitionModule = "kitty";
  lineNumber = 205
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
      lineNumber = 206
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
  func24.definitionLine = 205;
  func24.definitionModule = "kitty";
  lineNumber = 209
  var func26 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseDrag)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 210
      var call27 = callmethod(var_kitten,"setMouseDragAction", [1], var_action__39__);
      return call27
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
  ];
  func26.variableArities = [
    false,
  ];
  this.methods["onMouseDrag"] = func26;
  func26.definitionLine = 209;
  func26.definitionModule = "kitty";
  lineNumber = 213
  var func28 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func28.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseEnter)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 214
      var call29 = callmethod(var_kitten,"setMouseEnterAction", [1], var_action__39__);
      return call29
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func28.paramCounts = [
    1,
  ];
  func28.variableArities = [
    false,
  ];
  this.methods["onMouseEnter"] = func28;
  func28.definitionLine = 213;
  func28.definitionModule = "kitty";
  lineNumber = 217
  var func30 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseClick)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 218
      var call31 = callmethod(var_kitten,"setMouseClickAction", [1], var_action__39__);
      return call31
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func30.paramCounts = [
    1,
  ];
  func30.variableArities = [
    false,
  ];
  this.methods["onMouseClick"] = func30;
  func30.definitionLine = 217;
  func30.definitionModule = "kitty";
  lineNumber = 400
  var func32 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func32.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func32.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 401
      var obj33 = Grace_allocObject();
      obj33.definitionModule = "kitty";
      obj33.definitionLine = 401;
      obj33.outer = this;
      var reader_kitty_outer_34 = function() {
        return this.outer;
      }
      obj33.methods["outer"] = reader_kitty_outer_34;
      function obj_init_33() {
        var origSuperDepth = superDepth;
        superDepth = obj33;
        obj33.annotations = [];
        sourceObject = obj33;
        lineNumber = 402
        var call35 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj33.superobj = call35;
        obj33._value = call35._value;
        superDepth = origSuperDepth;
      }
      obj_init_33.apply(obj33, []);
      return obj33
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func32.paramCounts = [
    1,
    1,
    1,
  ];
  func32.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["World()width()height"] = func32;
  func32.definitionLine = 400;
  func32.definitionModule = "kitty";
  var func36 = function(argcv) {
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
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 401;
      var inho37 = inheritingObject;
      while (inho37.superobj) inho37 = inho37.superobj;
      inho37.superobj = obj37;
      obj37.data = inheritingObject.data;
      obj37.outer = this;
      var reader_kitty_outer_38 = function() {
        return this.outer;
      }
      obj37.methods["outer"] = reader_kitty_outer_38;
      function obj_init_37() {
        var origSuperDepth = superDepth;
        superDepth = obj37;
        obj37.annotations = [];
        sourceObject = obj37;
        var call39 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
        obj37.superobj = call39;
        obj37._value = call39._value;
        superDepth = origSuperDepth;
      }
      obj_init_37.apply(inheritingObject, []);
      return obj37
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()width()height()object"] = func36;
  lineNumber = 409
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 411
      var string41 = new GraceString("CHECKING...");
      var call42 = Grace_print(string41);
      lineNumber = 418
      var if43 = var_done;
      lineNumber = 413
      var call44 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call44)) {
        lineNumber = 414
        var string45 = new GraceString("NO WORLD!!");
        var call46 = Grace_print(string45);
        lineNumber = 416
        return var_done
      }
      lineNumber = 418
      var string47 = new GraceString("STARTING...");
      var call48 = Grace_print(string47);
      lineNumber = 421
      var call49 = callmethod(var_m__95__world,"start", [0]);
      return call49
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
  this.methods["start"] = func40;
  func40.definitionLine = 409;
  func40.definitionModule = "kitty";
  lineNumber = 424
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 425
      var call51 = callmethod(var_m__95__world,"stop", [0]);
      return call51
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
  this.methods["stop"] = func50;
  func50.definitionLine = 424;
  func50.definitionModule = "kitty";
  lineNumber = 428
  var func52 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func52.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 430
      lineNumber = 429
      var_m__95__world = var_world__39__;
      lineNumber = 431
      lineNumber = 430
      var bool53 = new GraceBoolean(true)
      var_worldSet = bool53;
      return bool53
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func52.paramTypes = [];
  func52.paramTypes.push([]);
  func52.paramCounts = [
    1,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func52;
  func52.definitionLine = 428;
  func52.definitionModule = "kitty";
  lineNumber = 433
  var func54 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func54.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 434
      onSelf = true;
      var call55 = callmethod(this, "start", [0]);
      return call55
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func54.paramCounts = [
    1,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func54;
  func54.definitionLine = 433;
  func54.definitionModule = "kitty";
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
  var call56 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call56;
  this.data = call56.data;
  this._value = call56._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 425
  var func57 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func57.paramCounts[0])
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
  func57.paramCounts = [
    0,
  ];
  func57.variableArities = [
    false,
  ];
  this.methods["m_world"] = func57;
  func57.definitionLine = 425;
  func57.definitionModule = "kitty";
  lineNumber = 425
  var func58 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    1,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func58;
  func58.definitionLine = 425;
  func58.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool59 = new GraceBoolean(false)
  var var_worldSet = bool59;
  lineNumber = 425
  var func60 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func60.paramCounts[0])
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
  func60.paramCounts = [
    0,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func60;
  func60.definitionLine = 425;
  func60.definitionModule = "kitty";
  lineNumber = 425
  var func61 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func61.paramCounts[0])
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
  func61.paramCounts = [
    1,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func61;
  func61.definitionLine = 425;
  func61.definitionModule = "kitty";
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
  lineNumber = 425
  var func62 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func62.paramCounts[0])
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
  func62.paramCounts = [
    0,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func62;
  func62.definitionLine = 425;
  func62.definitionModule = "kitty";
  lineNumber = 425
  var func63 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    1,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func63;
  func63.definitionLine = 425;
  func63.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 425
  var func64 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func64.paramCounts[0])
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
  func64.paramCounts = [
    0,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func64;
  func64.definitionLine = 425;
  func64.definitionModule = "kitty";
  lineNumber = 425
  var func65 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func65.paramCounts[0])
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
  func65.paramCounts = [
    1,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func65;
  func65.definitionLine = 425;
  func65.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 425
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func66;
  func66.definitionLine = 425;
  func66.definitionModule = "kitty";
  lineNumber = 425
  var func67 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    1,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func67;
  func67.definitionLine = 425;
  func67.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 15
  var call68 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call68;
  lineNumber = 425
  var func69 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    0,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func69;
  func69.definitionLine = 425;
  func69.definitionModule = "kitty";
  lineNumber = 425
  var func70 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    1,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func70;
  func70.definitionLine = 425;
  func70.definitionModule = "kitty";
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
  var call71 = callmethod(var_dom,"window", [0]);
  var call72 = callmethod(call71,"Math", [0]);
  var var_math = call72;
  var func73 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func73.paramCounts[0])
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
  func73.paramCounts = [
    0,
  ];
  func73.variableArities = [
    false,
  ];
  this.methods["math"] = func73;
  func73.definitionLine = 18;
  func73.definitionModule = "kitty";
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
  var func74 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func74.paramCounts[0])
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
  func74.paramCounts = [
    0,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["kitten"] = func74;
  func74.definitionLine = 18;
  func74.definitionModule = "kitty";
  lineNumber = 18
  var func75 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func75.paramCounts[0])
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
  func75.paramCounts = [
    1,
  ];
  func75.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func75;
  func75.definitionLine = 18;
  func75.definitionModule = "kitty";
  lineNumber = 26
  var func76 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func76.paramCounts[0])
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
  func76.paramCounts = [
    0,
  ];
  func76.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func76;
  func76.definitionLine = 26;
  func76.definitionModule = "kitty";
  var obj77 = Grace_allocObject();
  obj77.definitionModule = "kitty";
  obj77.definitionLine = 26;
  obj77.outer = this;
  var reader_kitty_outer_78 = function() {
    return this.outer;
  }
  obj77.methods["outer"] = reader_kitty_outer_78;
  function obj_init_77() {
    var origSuperDepth = superDepth;
    superDepth = obj77;
    obj77.annotations = [];
    var func79 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func79.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj80 = Grace_allocObject();
        obj80.definitionModule = "kitty";
        obj80.definitionLine = 26;
        obj80.outer = this;
        var reader_kitty_outer_81 = function() {
          return this.outer;
        }
        obj80.methods["outer"] = reader_kitty_outer_81;
        function obj_init_80() {
          var origSuperDepth = superDepth;
          superDepth = obj80;
          obj80.annotations = [];
          var func82 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func82.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call83 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call84 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod88 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient90 = callmethod(prod88, "/", [1], new GraceNum(180));
              var call91 = callmethod(var_ctx,"rotate", [1], quotient90);
              lineNumber = 46
              onSelf = true;
              var call92 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block93 = Grace_allocObject();
              block93.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block93.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block93.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block93.methods["match"] = GraceBlock_match;
              block93.methods["prefix?"] = GraceBlock_lift;
              block93.receiver = this;
              block93.className = 'block<kitty:49>';
              block93.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call95 = callmethod(this, "width", [0]);
                var call96 = callmethod(call95,"prefix-", [0]);
                var quotient98 = callmethod(call96, "/", [1], new GraceNum(2));
                onSelf = true;
                var call100 = callmethod(this, "height", [0]);
                var call101 = callmethod(call100,"prefix-", [0]);
                var quotient103 = callmethod(call101, "/", [1], new GraceNum(2));
                onSelf = true;
                var call104 = callmethod(this, "width", [0]);
                onSelf = true;
                var call105 = callmethod(this, "height", [0]);
                var call106 = callmethod(var_ctx,"drawImage", [5], var_element, quotient98, quotient103, call104, call105);
                return call106;
              };
              var call107 = callmethod(Grace_prelude,"for()do", [1, 1], call92, block93);
              lineNumber = 49
              var call108 = callmethod(var_ctx,"restore", [0]);
              return call108
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func82.paramCounts = [
            4,
          ];
          func82.variableArities = [
            false,
          ];
          obj80.methods["draw"] = func82;
          func82.definitionLine = 39;
          func82.definitionModule = "kitty";
          var func109 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func109.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call110 = callmethod(this, "imgTag", [0]);
              return call110
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func109.paramCounts = [
            0,
          ];
          func109.variableArities = [
            false,
          ];
          obj80.methods["getTag"] = func109;
          func109.definitionLine = 53;
          func109.definitionModule = "kitty";
          var func111 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func111.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call112 = callmethod(this, "elements", [0]);
              var call113 = callmethod(call112,"push", [1], var_imgTag__39__);
              return call113
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func111.paramCounts = [
            1,
          ];
          func111.variableArities = [
            false,
          ];
          obj80.methods["drawImage"] = func111;
          func111.definitionLine = 57;
          func111.definitionModule = "kitty";
          sourceObject = obj80;
          lineNumber = 30
          var string114 = new GraceString("img");
          var call115 = callmethod(var_dom,"document", [0]);
          var call116 = callmethod(call115,"createElement", [1], string114);
          obj80.data["imgTag"] = call116;
          var reader_kitty_imgTag_117 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_117.def = true;
          reader_kitty_imgTag_117.confidential = true;
          obj80.methods["imgTag"] = reader_kitty_imgTag_117;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call116)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj80;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call118 = callmethod(this, "imgTag", [0]);
          var call119 = callmethod(call118,"src:=", [1], var_url__39__);
          sourceObject = obj80;
          lineNumber = 33
          var call120 = callmethod(var_collections,"list", [0]);
          var call121 = callmethod(call120,"new", [0]);
          obj80.data["elements"] = call121;
          var reader_kitty_elements_122 = function() {
            return this.data["elements"];
          }
          obj80.methods["elements"] = reader_kitty_elements_122;
          obj80.data["elements"] = call121;
          var writer_kitty_elements_122 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj80.methods["elements:="] = writer_kitty_elements_122;
          reader_kitty_elements_122.confidential = true;
          writer_kitty_elements_122.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call121)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj80.mutable = true;
          sourceObject = obj80;
          lineNumber = 34
          onSelf = true;
          var call123 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call124 = callmethod(this, "elements", [0]);
          var call125 = callmethod(call124,"push", [1], call123);
          sourceObject = obj80;
          lineNumber = 36
          obj80.data["height"] = var_height__39__;
          var reader_kitty_height_126 = function() {
            return this.data["height"];
          }
          obj80.methods["height"] = reader_kitty_height_126;
          obj80.data["height"] = var_height__39__;
          var writer_kitty_height_126 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj80.methods["height:="] = writer_kitty_height_126;
          reader_kitty_height_126.confidential = true;
          writer_kitty_height_126.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj80.mutable = true;
          sourceObject = obj80;
          lineNumber = 37
          obj80.data["width"] = var_width__39__;
          var reader_kitty_width_127 = function() {
            return this.data["width"];
          }
          obj80.methods["width"] = reader_kitty_width_127;
          obj80.data["width"] = var_width__39__;
          var writer_kitty_width_127 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj80.methods["width:="] = writer_kitty_width_127;
          reader_kitty_width_127.confidential = true;
          writer_kitty_width_127.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj80.mutable = true;
          sourceObject = obj80;
          sourceObject = obj80;
          sourceObject = obj80;
          superDepth = origSuperDepth;
        }
        obj_init_80.apply(obj80, []);
        return obj80
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func79.paramCounts = [
      3,
    ];
    func79.variableArities = [
      false,
    ];
    obj77.methods["new"] = func79;
    func79.definitionLine = 26;
    func79.definitionModule = "kitty";
    var func128 = function(argcv) {
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
        var obj129 = Grace_allocObject();
        obj129.definitionModule = "kitty";
        obj129.definitionLine = 26;
        var inho129 = inheritingObject;
        while (inho129.superobj) inho129 = inho129.superobj;
        inho129.superobj = obj129;
        obj129.data = inheritingObject.data;
        obj129.outer = this;
        var reader_kitty_outer_130 = function() {
          return this.outer;
        }
        obj129.methods["outer"] = reader_kitty_outer_130;
        function obj_init_129() {
          var origSuperDepth = superDepth;
          superDepth = obj129;
          obj129.annotations = [];
          var func131 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func131.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 41
              var call132 = callmethod(var_ctx,"save", [0]);
              lineNumber = 42
              var call133 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 44
              var prod137 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient139 = callmethod(prod137, "/", [1], new GraceNum(180));
              var call140 = callmethod(var_ctx,"rotate", [1], quotient139);
              lineNumber = 46
              onSelf = true;
              var call141 = callmethod(this, "elements", [0]);
              lineNumber = 49
              var block142 = Grace_allocObject();
              block142.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block142.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block142.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block142.methods["match"] = GraceBlock_match;
              block142.methods["prefix?"] = GraceBlock_lift;
              block142.receiver = this;
              block142.className = 'block<kitty:49>';
              block142.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 47
                onSelf = true;
                var call144 = callmethod(this, "width", [0]);
                var call145 = callmethod(call144,"prefix-", [0]);
                var quotient147 = callmethod(call145, "/", [1], new GraceNum(2));
                onSelf = true;
                var call149 = callmethod(this, "height", [0]);
                var call150 = callmethod(call149,"prefix-", [0]);
                var quotient152 = callmethod(call150, "/", [1], new GraceNum(2));
                onSelf = true;
                var call153 = callmethod(this, "width", [0]);
                onSelf = true;
                var call154 = callmethod(this, "height", [0]);
                var call155 = callmethod(var_ctx,"drawImage", [5], var_element, quotient147, quotient152, call153, call154);
                return call155;
              };
              var call156 = callmethod(Grace_prelude,"for()do", [1, 1], call141, block142);
              lineNumber = 49
              var call157 = callmethod(var_ctx,"restore", [0]);
              return call157
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func131.paramCounts = [
            4,
          ];
          func131.variableArities = [
            false,
          ];
          obj129.methods["draw"] = func131;
          func131.definitionLine = 39;
          func131.definitionModule = "kitty";
          var func158 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func158.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 55
              lineNumber = 54
              onSelf = true;
              var call159 = callmethod(this, "imgTag", [0]);
              return call159
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
          obj129.methods["getTag"] = func158;
          func158.definitionLine = 53;
          func158.definitionModule = "kitty";
          var func160 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func160.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              onSelf = true;
              var call161 = callmethod(this, "elements", [0]);
              var call162 = callmethod(call161,"push", [1], var_imgTag__39__);
              return call162
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func160.paramCounts = [
            1,
          ];
          func160.variableArities = [
            false,
          ];
          obj129.methods["drawImage"] = func160;
          func160.definitionLine = 57;
          func160.definitionModule = "kitty";
          sourceObject = obj129;
          lineNumber = 30
          var string163 = new GraceString("img");
          var call164 = callmethod(var_dom,"document", [0]);
          var call165 = callmethod(call164,"createElement", [1], string163);
          obj129.data["imgTag"] = call165;
          var reader_kitty_imgTag_166 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_166.def = true;
          reader_kitty_imgTag_166.confidential = true;
          obj129.methods["imgTag"] = reader_kitty_imgTag_166;
          lineNumber = 30;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call165)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj129;
          lineNumber = 33
          lineNumber = 30
          lineNumber = 31
          onSelf = true;
          var call167 = callmethod(this, "imgTag", [0]);
          var call168 = callmethod(call167,"src:=", [1], var_url__39__);
          sourceObject = obj129;
          lineNumber = 33
          var call169 = callmethod(var_collections,"list", [0]);
          var call170 = callmethod(call169,"new", [0]);
          obj129.data["elements"] = call170;
          var reader_kitty_elements_171 = function() {
            return this.data["elements"];
          }
          obj129.methods["elements"] = reader_kitty_elements_171;
          obj129.data["elements"] = call170;
          var writer_kitty_elements_171 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj129.methods["elements:="] = writer_kitty_elements_171;
          reader_kitty_elements_171.confidential = true;
          writer_kitty_elements_171.confidential = true;
          lineNumber = 34;
          moduleName = "kitty";
          lineNumber = 33
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call170)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj129.mutable = true;
          sourceObject = obj129;
          lineNumber = 34
          onSelf = true;
          var call172 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call173 = callmethod(this, "elements", [0]);
          var call174 = callmethod(call173,"push", [1], call172);
          sourceObject = obj129;
          lineNumber = 36
          obj129.data["height"] = var_height__39__;
          var reader_kitty_height_175 = function() {
            return this.data["height"];
          }
          obj129.methods["height"] = reader_kitty_height_175;
          obj129.data["height"] = var_height__39__;
          var writer_kitty_height_175 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj129.methods["height:="] = writer_kitty_height_175;
          reader_kitty_height_175.confidential = true;
          writer_kitty_height_175.confidential = true;
          lineNumber = 37;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj129.mutable = true;
          sourceObject = obj129;
          lineNumber = 37
          obj129.data["width"] = var_width__39__;
          var reader_kitty_width_176 = function() {
            return this.data["width"];
          }
          obj129.methods["width"] = reader_kitty_width_176;
          obj129.data["width"] = var_width__39__;
          var writer_kitty_width_176 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj129.methods["width:="] = writer_kitty_width_176;
          reader_kitty_width_176.confidential = true;
          writer_kitty_width_176.confidential = true;
          lineNumber = 39;
          moduleName = "kitty";
          lineNumber = 37
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj129.mutable = true;
          sourceObject = obj129;
          sourceObject = obj129;
          sourceObject = obj129;
          superDepth = origSuperDepth;
        }
        obj_init_129.apply(inheritingObject, []);
        return obj129
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj77.methods["new()object"] = func128;
    var func177 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 26
        var string178 = new GraceString("class KittyImage");
        return string178
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func177.paramCounts = [
    ];
    func177.variableArities = [
    ];
    obj77.methods["asDebugString"] = func177;
    func177.definitionLine = 26;
    func177.definitionModule = "kitty";
    sourceObject = obj77;
    sourceObject = obj77;
    superDepth = origSuperDepth;
  }
  obj_init_77.apply(obj77, []);
  var var_KittyImage = obj77;
  lineNumber = 64
  lineNumber = 71
  var func179 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func179.paramCounts[0])
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
  func179.paramCounts = [
    0,
  ];
  func179.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func179;
  func179.definitionLine = 71;
  func179.definitionModule = "kitty";
  var obj180 = Grace_allocObject();
  obj180.definitionModule = "kitty";
  obj180.definitionLine = 71;
  obj180.outer = this;
  var reader_kitty_outer_181 = function() {
    return this.outer;
  }
  obj180.methods["outer"] = reader_kitty_outer_181;
  function obj_init_180() {
    var origSuperDepth = superDepth;
    superDepth = obj180;
    obj180.annotations = [];
    var func182 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func182.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj183 = Grace_allocObject();
        obj183.definitionModule = "kitty";
        obj183.definitionLine = 71;
        obj183.outer = this;
        var reader_kitty_outer_184 = function() {
          return this.outer;
        }
        obj183.methods["outer"] = reader_kitty_outer_184;
        function obj_init_183() {
          var origSuperDepth = superDepth;
          superDepth = obj183;
          obj183.annotations = [];
          var func185 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func185.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              var string186 = new GraceString("realyee.png");
              onSelf = true;
              var call187 = callmethod(this, "createImage", [1], string186);
              lineNumber = 93
              lineNumber = 92
              var_kitten = this;
              lineNumber = 93
              var call188 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call188
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func185.paramCounts = [
            0,
          ];
          func185.variableArities = [
            false,
          ];
          obj183.methods["awake"] = func185;
          func185.definitionLine = 90;
          func185.definitionModule = "kitty";
          var func189 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func189.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call190 = callmethod(this, "updateAction", [0]);
              var call191 = callmethod(call190,"apply", [0]);
              return call191
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func189.paramCounts = [
            0,
          ];
          func189.variableArities = [
            false,
          ];
          obj183.methods["tick"] = func189;
          func189.definitionLine = 96;
          func189.definitionModule = "kitty";
          var func192 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              onSelf = true;
              var call193 = callmethod(this, "destroyAction", [0]);
              var call194 = callmethod(call193,"apply", [0]);
              return call194
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func192.paramCounts = [
            0,
          ];
          func192.variableArities = [
            false,
          ];
          obj183.methods["kill"] = func192;
          func192.definitionLine = 100;
          func192.definitionModule = "kitty";
          var func195 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func195.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              onSelf = true;
              var call196 = callmethod(this, "mouseDownAction", [0]);
              var call197 = callmethod(call196,"apply", [0]);
              return call197
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func195.paramCounts = [
            0,
          ];
          func195.variableArities = [
            false,
          ];
          obj183.methods["mouseDown"] = func195;
          func195.definitionLine = 105;
          func195.definitionModule = "kitty";
          var func198 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 106
              lineNumber = 111
              onSelf = true;
              var call201 = callmethod(this, "rotation", [0]);
              var prod203 = callmethod(call201, "*", [1], new GraceNum(3.14159));
              var quotient205 = callmethod(prod203, "/", [1], new GraceNum(180));
              var call206 = callmethod(var_math,"cos", [1], quotient205);
              var call208 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod211 = callmethod(var_distance, "*", [1], call208);
              var prod213 = callmethod(prod211, "*", [1], call206);
              onSelf = true;
              var call215 = callmethod(this, "posX", [0]);
              var opresult217 = callmethod(call215, "+", [1], prod213);
              onSelf = true;
              var call218 = callmethod(this, "posX:=", [1], opresult217);
              lineNumber = 112
              lineNumber = 111
              lineNumber = 112
              onSelf = true;
              var call221 = callmethod(this, "rotation", [0]);
              var prod223 = callmethod(call221, "*", [1], new GraceNum(3.14159));
              var quotient225 = callmethod(prod223, "/", [1], new GraceNum(180));
              var call226 = callmethod(var_math,"sin", [1], quotient225);
              var call228 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod231 = callmethod(var_distance, "*", [1], call228);
              var prod233 = callmethod(prod231, "*", [1], call226);
              onSelf = true;
              var call235 = callmethod(this, "posY", [0]);
              var opresult237 = callmethod(call235, "+", [1], prod233);
              onSelf = true;
              var call238 = callmethod(this, "posY:=", [1], opresult237);
              return call238
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func198.paramCounts = [
            1,
          ];
          func198.variableArities = [
            false,
          ];
          obj183.methods["move"] = func198;
          func198.definitionLine = 110;
          func198.definitionModule = "kitty";
          var func239 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func239.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 112
              lineNumber = 116
              onSelf = true;
              var call242 = callmethod(this, "rotation", [0]);
              var opresult245 = callmethod(new GraceNum(90), "+", [1], call242);
              var prod247 = callmethod(opresult245, "*", [1], new GraceNum(3.14159));
              var quotient249 = callmethod(prod247, "/", [1], new GraceNum(180));
              var call250 = callmethod(var_math,"cos", [1], quotient249);
              var call252 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod255 = callmethod(var_distance, "*", [1], call252);
              var prod257 = callmethod(prod255, "*", [1], call250);
              onSelf = true;
              var call259 = callmethod(this, "posX", [0]);
              var opresult261 = callmethod(call259, "+", [1], prod257);
              onSelf = true;
              var call262 = callmethod(this, "posX:=", [1], opresult261);
              lineNumber = 117
              lineNumber = 116
              lineNumber = 117
              onSelf = true;
              var call265 = callmethod(this, "rotation", [0]);
              var opresult268 = callmethod(new GraceNum(90), "+", [1], call265);
              var prod270 = callmethod(opresult268, "*", [1], new GraceNum(3.14159));
              var quotient272 = callmethod(prod270, "/", [1], new GraceNum(180));
              var call273 = callmethod(var_math,"sin", [1], quotient272);
              var call275 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod278 = callmethod(var_distance, "*", [1], call275);
              var prod280 = callmethod(prod278, "*", [1], call273);
              onSelf = true;
              var call282 = callmethod(this, "posY", [0]);
              var opresult284 = callmethod(call282, "+", [1], prod280);
              onSelf = true;
              var call285 = callmethod(this, "posY:=", [1], opresult284);
              return call285
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func239.paramCounts = [
            1,
          ];
          func239.variableArities = [
            false,
          ];
          obj183.methods["strafe"] = func239;
          func239.definitionLine = 115;
          func239.definitionModule = "kitty";
          var func286 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 117
              lineNumber = 122
              lineNumber = 121
              onSelf = true;
              var call288 = callmethod(this, "rotation", [0]);
              var opresult290 = callmethod(call288, "+", [1], var_angle);
              onSelf = true;
              var call291 = callmethod(this, "rotation:=", [1], opresult290);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            1,
          ];
          func286.variableArities = [
            false,
          ];
          obj183.methods["turn"] = func286;
          func286.definitionLine = 120;
          func286.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              var call293 = callmethod(var_ctx,"save", [0]);
              lineNumber = 127
              onSelf = true;
              var call294 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call295 = callmethod(this, "posY", [0]);
              var call296 = callmethod(var_ctx,"translate", [2], call294, call295);
              lineNumber = 128
              onSelf = true;
              var call297 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call298 = callmethod(this, "image", [0]);
              var call299 = callmethod(call298,"draw", [4], var_ctx, var_dx, var_dy, call297);
              lineNumber = 129
              var call300 = callmethod(var_ctx,"restore", [0]);
              return call300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            3,
          ];
          func292.variableArities = [
            false,
          ];
          obj183.methods["draw"] = func292;
          func292.definitionLine = 125;
          func292.definitionModule = "kitty";
          var func301 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 129
              lineNumber = 133
              var call302 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call303 = callmethod(call302, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call304 = callmethod(call303, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call305 = callmethod(this, "image:=", [1], call304);
              return call305
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
          obj183.methods["createImage"] = func301;
          func301.definitionLine = 132;
          func301.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 133
              lineNumber = 137
              onSelf = true;
              var call307 = callmethod(this, "image:=", [1], var_image__39__);
              return call307
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func306.paramTypes = [];
          func306.paramTypes.push([]);
          func306.paramCounts = [
            1,
          ];
          func306.variableArities = [
            false,
          ];
          obj183.methods["setImage"] = func306;
          func306.definitionLine = 136;
          func306.definitionModule = "kitty";
          var func308 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func308.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 133
              lineNumber = 142
              onSelf = true;
              var call309 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj183.methods["setUpdateAction"] = func308;
          func308.definitionLine = 141;
          func308.definitionModule = "kitty";
          var func310 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 133
              lineNumber = 146
              onSelf = true;
              var call311 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj183.methods["setDestroyAction"] = func310;
          func310.definitionLine = 145;
          func310.definitionModule = "kitty";
          var func312 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 133
              lineNumber = 150
              onSelf = true;
              var call313 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
          obj183.methods["setMouseDownAction"] = func312;
          func312.definitionLine = 149;
          func312.definitionModule = "kitty";
          var func314 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 133
              lineNumber = 154
              onSelf = true;
              var call315 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 156
              lineNumber = 133
              lineNumber = 155
              onSelf = true;
              var call316 = callmethod(this, "posY:=", [1], var_y);
              return call316
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func314.paramCounts = [
            2,
          ];
          func314.variableArities = [
            false,
          ];
          obj183.methods["setLocation"] = func314;
          func314.definitionLine = 153;
          func314.definitionModule = "kitty";
          var func317 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func317.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call318 = callmethod(this, "posX", [0]);
              return call318
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func317.paramCounts = [
            0,
          ];
          func317.variableArities = [
            false,
          ];
          obj183.methods["getX"] = func317;
          func317.definitionLine = 158;
          func317.definitionModule = "kitty";
          var func319 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func319.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call320 = callmethod(this, "posY", [0]);
              return call320
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
          obj183.methods["getY"] = func319;
          func319.definitionLine = 162;
          func319.definitionModule = "kitty";
          var func321 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func321.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 168
              lineNumber = 133
              lineNumber = 167
              onSelf = true;
              var call322 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call322
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func321.paramCounts = [
            1,
          ];
          func321.variableArities = [
            false,
          ];
          obj183.methods["setX"] = func321;
          func321.definitionLine = 166;
          func321.definitionModule = "kitty";
          var func323 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              lineNumber = 133
              lineNumber = 171
              onSelf = true;
              var call324 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call324
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func323.paramCounts = [
            1,
          ];
          func323.variableArities = [
            false,
          ];
          obj183.methods["setY"] = func323;
          func323.definitionLine = 170;
          func323.definitionModule = "kitty";
          var func325 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func325.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 175
              onSelf = true;
              var call326 = callmethod(this, "rotation", [0]);
              return call326
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func325.paramCounts = [
            0,
          ];
          func325.variableArities = [
            false,
          ];
          obj183.methods["getRotation"] = func325;
          func325.definitionLine = 174;
          func325.definitionModule = "kitty";
          sourceObject = obj183;
          lineNumber = 75
          obj183.data["tag"] = var_tag__39__;
          var reader_kitty_tag_327 = function() {
            return this.data["tag"];
          }
          obj183.methods["tag"] = reader_kitty_tag_327;
          obj183.data["tag"] = var_tag__39__;
          var writer_kitty_tag_327 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj183.methods["tag:="] = writer_kitty_tag_327;
          reader_kitty_tag_327.confidential = true;
          writer_kitty_tag_327.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 76
          obj183.data["posX"] = var_x__39__;
          var reader_kitty_posX_328 = function() {
            return this.data["posX"];
          }
          obj183.methods["posX"] = reader_kitty_posX_328;
          obj183.data["posX"] = var_x__39__;
          var writer_kitty_posX_328 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj183.methods["posX:="] = writer_kitty_posX_328;
          reader_kitty_posX_328.confidential = true;
          writer_kitty_posX_328.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 77
          obj183.data["posY"] = var_y__39__;
          var reader_kitty_posY_329 = function() {
            return this.data["posY"];
          }
          obj183.methods["posY"] = reader_kitty_posY_329;
          obj183.data["posY"] = var_y__39__;
          var writer_kitty_posY_329 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj183.methods["posY:="] = writer_kitty_posY_329;
          reader_kitty_posY_329.confidential = true;
          writer_kitty_posY_329.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 78
          obj183.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_330 = function() {
            return this.data["rotation"];
          }
          obj183.methods["rotation"] = reader_kitty_rotation_330;
          obj183.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_330 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj183.methods["rotation:="] = writer_kitty_rotation_330;
          reader_kitty_rotation_330.confidential = true;
          writer_kitty_rotation_330.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 82
          var block331 = Grace_allocObject();
          block331.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block331.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block331.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block331.methods["match"] = GraceBlock_match;
          block331.methods["prefix?"] = GraceBlock_lift;
          block331.receiver = this;
          block331.className = 'block<kitty:82>';
          block331.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj183.data["updateAction"] = block331;
          var reader_kitty_updateAction_332 = function() {
            return this.data["updateAction"];
          }
          obj183.methods["updateAction"] = reader_kitty_updateAction_332;
          obj183.data["updateAction"] = block331;
          var writer_kitty_updateAction_332 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj183.methods["updateAction:="] = writer_kitty_updateAction_332;
          reader_kitty_updateAction_332.confidential = true;
          writer_kitty_updateAction_332.confidential = true;
          lineNumber = 82;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block331)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 83
          var block333 = Grace_allocObject();
          block333.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block333.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block333.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block333.methods["match"] = GraceBlock_match;
          block333.methods["prefix?"] = GraceBlock_lift;
          block333.receiver = this;
          block333.className = 'block<kitty:83>';
          block333.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj183.data["destroyAction"] = block333;
          var reader_kitty_destroyAction_334 = function() {
            return this.data["destroyAction"];
          }
          obj183.methods["destroyAction"] = reader_kitty_destroyAction_334;
          obj183.data["destroyAction"] = block333;
          var writer_kitty_destroyAction_334 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj183.methods["destroyAction:="] = writer_kitty_destroyAction_334;
          reader_kitty_destroyAction_334.confidential = true;
          writer_kitty_destroyAction_334.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 82
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block333)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 85
          var block335 = Grace_allocObject();
          block335.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block335.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block335.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block335.methods["match"] = GraceBlock_match;
          block335.methods["prefix?"] = GraceBlock_lift;
          block335.receiver = this;
          block335.className = 'block<kitty:85>';
          block335.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj183.data["mouseDownAction"] = block335;
          var reader_kitty_mouseDownAction_336 = function() {
            return this.data["mouseDownAction"];
          }
          obj183.methods["mouseDownAction"] = reader_kitty_mouseDownAction_336;
          obj183.data["mouseDownAction"] = block335;
          var writer_kitty_mouseDownAction_336 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj183.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_336;
          reader_kitty_mouseDownAction_336.confidential = true;
          writer_kitty_mouseDownAction_336.confidential = true;
          lineNumber = 85;
          moduleName = "kitty";
          lineNumber = 83
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block335)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj183.mutable = true;
          sourceObject = obj183;
          obj183.data["image"] = undefined;
          var reader_kitty_image_337 = function() {
            return this.data["image"];
          }
          obj183.methods["image"] = reader_kitty_image_337;
          obj183.data["image"] = undefined;
          var writer_kitty_image_337 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj183.methods["image:="] = writer_kitty_image_337;
          reader_kitty_image_337.confidential = true;
          writer_kitty_image_337.confidential = true;
          obj183.mutable = true;
          sourceObject = obj183;
          lineNumber = 87
          onSelf = true;
          var call338 = callmethod(this, "awake", [0]);
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          sourceObject = obj183;
          superDepth = origSuperDepth;
        }
        obj_init_183.apply(obj183, []);
        return obj183
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func182.paramCounts = [
      3,
    ];
    func182.variableArities = [
      false,
    ];
    obj180.methods["new"] = func182;
    func182.definitionLine = 71;
    func182.definitionModule = "kitty";
    var func339 = function(argcv) {
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
        var obj340 = Grace_allocObject();
        obj340.definitionModule = "kitty";
        obj340.definitionLine = 71;
        var inho340 = inheritingObject;
        while (inho340.superobj) inho340 = inho340.superobj;
        inho340.superobj = obj340;
        obj340.data = inheritingObject.data;
        obj340.outer = this;
        var reader_kitty_outer_341 = function() {
          return this.outer;
        }
        obj340.methods["outer"] = reader_kitty_outer_341;
        function obj_init_340() {
          var origSuperDepth = superDepth;
          superDepth = obj340;
          obj340.annotations = [];
          var func342 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func342.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              var string343 = new GraceString("realyee.png");
              onSelf = true;
              var call344 = callmethod(this, "createImage", [1], string343);
              lineNumber = 93
              lineNumber = 92
              var_kitten = this;
              lineNumber = 93
              var call345 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call345
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func342.paramCounts = [
            0,
          ];
          func342.variableArities = [
            false,
          ];
          obj340.methods["awake"] = func342;
          func342.definitionLine = 90;
          func342.definitionModule = "kitty";
          var func346 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func346.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              onSelf = true;
              var call347 = callmethod(this, "updateAction", [0]);
              var call348 = callmethod(call347,"apply", [0]);
              return call348
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func346.paramCounts = [
            0,
          ];
          func346.variableArities = [
            false,
          ];
          obj340.methods["tick"] = func346;
          func346.definitionLine = 96;
          func346.definitionModule = "kitty";
          var func349 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              onSelf = true;
              var call350 = callmethod(this, "destroyAction", [0]);
              var call351 = callmethod(call350,"apply", [0]);
              return call351
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func349.paramCounts = [
            0,
          ];
          func349.variableArities = [
            false,
          ];
          obj340.methods["kill"] = func349;
          func349.definitionLine = 100;
          func349.definitionModule = "kitty";
          var func352 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func352.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              onSelf = true;
              var call353 = callmethod(this, "mouseDownAction", [0]);
              var call354 = callmethod(call353,"apply", [0]);
              return call354
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func352.paramCounts = [
            0,
          ];
          func352.variableArities = [
            false,
          ];
          obj340.methods["mouseDown"] = func352;
          func352.definitionLine = 105;
          func352.definitionModule = "kitty";
          var func355 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func355.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 106
              lineNumber = 111
              onSelf = true;
              var call358 = callmethod(this, "rotation", [0]);
              var prod360 = callmethod(call358, "*", [1], new GraceNum(3.14159));
              var quotient362 = callmethod(prod360, "/", [1], new GraceNum(180));
              var call363 = callmethod(var_math,"cos", [1], quotient362);
              var call365 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod368 = callmethod(var_distance, "*", [1], call365);
              var prod370 = callmethod(prod368, "*", [1], call363);
              onSelf = true;
              var call372 = callmethod(this, "posX", [0]);
              var opresult374 = callmethod(call372, "+", [1], prod370);
              onSelf = true;
              var call375 = callmethod(this, "posX:=", [1], opresult374);
              lineNumber = 112
              lineNumber = 111
              lineNumber = 112
              onSelf = true;
              var call378 = callmethod(this, "rotation", [0]);
              var prod380 = callmethod(call378, "*", [1], new GraceNum(3.14159));
              var quotient382 = callmethod(prod380, "/", [1], new GraceNum(180));
              var call383 = callmethod(var_math,"sin", [1], quotient382);
              var call385 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod388 = callmethod(var_distance, "*", [1], call385);
              var prod390 = callmethod(prod388, "*", [1], call383);
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
          func355.paramCounts = [
            1,
          ];
          func355.variableArities = [
            false,
          ];
          obj340.methods["move"] = func355;
          func355.definitionLine = 110;
          func355.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 112
              lineNumber = 116
              onSelf = true;
              var call399 = callmethod(this, "rotation", [0]);
              var opresult402 = callmethod(new GraceNum(90), "+", [1], call399);
              var prod404 = callmethod(opresult402, "*", [1], new GraceNum(3.14159));
              var quotient406 = callmethod(prod404, "/", [1], new GraceNum(180));
              var call407 = callmethod(var_math,"cos", [1], quotient406);
              var call409 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod412 = callmethod(var_distance, "*", [1], call409);
              var prod414 = callmethod(prod412, "*", [1], call407);
              onSelf = true;
              var call416 = callmethod(this, "posX", [0]);
              var opresult418 = callmethod(call416, "+", [1], prod414);
              onSelf = true;
              var call419 = callmethod(this, "posX:=", [1], opresult418);
              lineNumber = 117
              lineNumber = 116
              lineNumber = 117
              onSelf = true;
              var call422 = callmethod(this, "rotation", [0]);
              var opresult425 = callmethod(new GraceNum(90), "+", [1], call422);
              var prod427 = callmethod(opresult425, "*", [1], new GraceNum(3.14159));
              var quotient429 = callmethod(prod427, "/", [1], new GraceNum(180));
              var call430 = callmethod(var_math,"sin", [1], quotient429);
              var call432 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod435 = callmethod(var_distance, "*", [1], call432);
              var prod437 = callmethod(prod435, "*", [1], call430);
              onSelf = true;
              var call439 = callmethod(this, "posY", [0]);
              var opresult441 = callmethod(call439, "+", [1], prod437);
              onSelf = true;
              var call442 = callmethod(this, "posY:=", [1], opresult441);
              return call442
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
          obj340.methods["strafe"] = func396;
          func396.definitionLine = 115;
          func396.definitionModule = "kitty";
          var func443 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func443.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 117
              lineNumber = 122
              lineNumber = 121
              onSelf = true;
              var call445 = callmethod(this, "rotation", [0]);
              var opresult447 = callmethod(call445, "+", [1], var_angle);
              onSelf = true;
              var call448 = callmethod(this, "rotation:=", [1], opresult447);
              return call448
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func443.paramCounts = [
            1,
          ];
          func443.variableArities = [
            false,
          ];
          obj340.methods["turn"] = func443;
          func443.definitionLine = 120;
          func443.definitionModule = "kitty";
          var func449 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func449.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              var call450 = callmethod(var_ctx,"save", [0]);
              lineNumber = 127
              onSelf = true;
              var call451 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call452 = callmethod(this, "posY", [0]);
              var call453 = callmethod(var_ctx,"translate", [2], call451, call452);
              lineNumber = 128
              onSelf = true;
              var call454 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call455 = callmethod(this, "image", [0]);
              var call456 = callmethod(call455,"draw", [4], var_ctx, var_dx, var_dy, call454);
              lineNumber = 129
              var call457 = callmethod(var_ctx,"restore", [0]);
              return call457
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func449.paramCounts = [
            3,
          ];
          func449.variableArities = [
            false,
          ];
          obj340.methods["draw"] = func449;
          func449.definitionLine = 125;
          func449.definitionModule = "kitty";
          var func458 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func458.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 129
              lineNumber = 133
              var call459 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call460 = callmethod(call459, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call461 = callmethod(call460, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call462 = callmethod(this, "image:=", [1], call461);
              return call462
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
          obj340.methods["createImage"] = func458;
          func458.definitionLine = 132;
          func458.definitionModule = "kitty";
          var func463 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func463.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 133
              lineNumber = 137
              onSelf = true;
              var call464 = callmethod(this, "image:=", [1], var_image__39__);
              return call464
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func463.paramTypes = [];
          func463.paramTypes.push([]);
          func463.paramCounts = [
            1,
          ];
          func463.variableArities = [
            false,
          ];
          obj340.methods["setImage"] = func463;
          func463.definitionLine = 136;
          func463.definitionModule = "kitty";
          var func465 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func465.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 143
              lineNumber = 133
              lineNumber = 142
              onSelf = true;
              var call466 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call466
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func465.paramCounts = [
            1,
          ];
          func465.variableArities = [
            false,
          ];
          obj340.methods["setUpdateAction"] = func465;
          func465.definitionLine = 141;
          func465.definitionModule = "kitty";
          var func467 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func467.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 133
              lineNumber = 146
              onSelf = true;
              var call468 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call468
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func467.paramCounts = [
            1,
          ];
          func467.variableArities = [
            false,
          ];
          obj340.methods["setDestroyAction"] = func467;
          func467.definitionLine = 145;
          func467.definitionModule = "kitty";
          var func469 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func469.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 133
              lineNumber = 150
              onSelf = true;
              var call470 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call470
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func469.paramCounts = [
            1,
          ];
          func469.variableArities = [
            false,
          ];
          obj340.methods["setMouseDownAction"] = func469;
          func469.definitionLine = 149;
          func469.definitionModule = "kitty";
          var func471 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func471.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              lineNumber = 133
              lineNumber = 154
              onSelf = true;
              var call472 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 156
              lineNumber = 133
              lineNumber = 155
              onSelf = true;
              var call473 = callmethod(this, "posY:=", [1], var_y);
              return call473
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func471.paramCounts = [
            2,
          ];
          func471.variableArities = [
            false,
          ];
          obj340.methods["setLocation"] = func471;
          func471.definitionLine = 153;
          func471.definitionModule = "kitty";
          var func474 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func474.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call475 = callmethod(this, "posX", [0]);
              return call475
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func474.paramCounts = [
            0,
          ];
          func474.variableArities = [
            false,
          ];
          obj340.methods["getX"] = func474;
          func474.definitionLine = 158;
          func474.definitionModule = "kitty";
          var func476 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func476.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call477 = callmethod(this, "posY", [0]);
              return call477
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
          obj340.methods["getY"] = func476;
          func476.definitionLine = 162;
          func476.definitionModule = "kitty";
          var func478 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func478.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 168
              lineNumber = 133
              lineNumber = 167
              onSelf = true;
              var call479 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call479
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func478.paramCounts = [
            1,
          ];
          func478.variableArities = [
            false,
          ];
          obj340.methods["setX"] = func478;
          func478.definitionLine = 166;
          func478.definitionModule = "kitty";
          var func480 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func480.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              lineNumber = 133
              lineNumber = 171
              onSelf = true;
              var call481 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call481
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func480.paramCounts = [
            1,
          ];
          func480.variableArities = [
            false,
          ];
          obj340.methods["setY"] = func480;
          func480.definitionLine = 170;
          func480.definitionModule = "kitty";
          var func482 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func482.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 175
              onSelf = true;
              var call483 = callmethod(this, "rotation", [0]);
              return call483
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
          obj340.methods["getRotation"] = func482;
          func482.definitionLine = 174;
          func482.definitionModule = "kitty";
          sourceObject = obj340;
          lineNumber = 75
          obj340.data["tag"] = var_tag__39__;
          var reader_kitty_tag_484 = function() {
            return this.data["tag"];
          }
          obj340.methods["tag"] = reader_kitty_tag_484;
          obj340.data["tag"] = var_tag__39__;
          var writer_kitty_tag_484 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj340.methods["tag:="] = writer_kitty_tag_484;
          reader_kitty_tag_484.confidential = true;
          writer_kitty_tag_484.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 76
          obj340.data["posX"] = var_x__39__;
          var reader_kitty_posX_485 = function() {
            return this.data["posX"];
          }
          obj340.methods["posX"] = reader_kitty_posX_485;
          obj340.data["posX"] = var_x__39__;
          var writer_kitty_posX_485 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj340.methods["posX:="] = writer_kitty_posX_485;
          reader_kitty_posX_485.confidential = true;
          writer_kitty_posX_485.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 77
          obj340.data["posY"] = var_y__39__;
          var reader_kitty_posY_486 = function() {
            return this.data["posY"];
          }
          obj340.methods["posY"] = reader_kitty_posY_486;
          obj340.data["posY"] = var_y__39__;
          var writer_kitty_posY_486 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj340.methods["posY:="] = writer_kitty_posY_486;
          reader_kitty_posY_486.confidential = true;
          writer_kitty_posY_486.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 78
          obj340.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_487 = function() {
            return this.data["rotation"];
          }
          obj340.methods["rotation"] = reader_kitty_rotation_487;
          obj340.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_487 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj340.methods["rotation:="] = writer_kitty_rotation_487;
          reader_kitty_rotation_487.confidential = true;
          writer_kitty_rotation_487.confidential = true;
          lineNumber = 81;
          moduleName = "kitty";
          lineNumber = 78
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 82
          var block488 = Grace_allocObject();
          block488.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block488.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block488.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block488.methods["match"] = GraceBlock_match;
          block488.methods["prefix?"] = GraceBlock_lift;
          block488.receiver = this;
          block488.className = 'block<kitty:82>';
          block488.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj340.data["updateAction"] = block488;
          var reader_kitty_updateAction_489 = function() {
            return this.data["updateAction"];
          }
          obj340.methods["updateAction"] = reader_kitty_updateAction_489;
          obj340.data["updateAction"] = block488;
          var writer_kitty_updateAction_489 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj340.methods["updateAction:="] = writer_kitty_updateAction_489;
          reader_kitty_updateAction_489.confidential = true;
          writer_kitty_updateAction_489.confidential = true;
          lineNumber = 82;
          moduleName = "kitty";
          lineNumber = 81
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block488)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 83
          var block490 = Grace_allocObject();
          block490.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block490.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block490.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block490.methods["match"] = GraceBlock_match;
          block490.methods["prefix?"] = GraceBlock_lift;
          block490.receiver = this;
          block490.className = 'block<kitty:83>';
          block490.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj340.data["destroyAction"] = block490;
          var reader_kitty_destroyAction_491 = function() {
            return this.data["destroyAction"];
          }
          obj340.methods["destroyAction"] = reader_kitty_destroyAction_491;
          obj340.data["destroyAction"] = block490;
          var writer_kitty_destroyAction_491 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj340.methods["destroyAction:="] = writer_kitty_destroyAction_491;
          reader_kitty_destroyAction_491.confidential = true;
          writer_kitty_destroyAction_491.confidential = true;
          lineNumber = 83;
          moduleName = "kitty";
          lineNumber = 82
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block490)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 85
          var block492 = Grace_allocObject();
          block492.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block492.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block492.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block492.methods["match"] = GraceBlock_match;
          block492.methods["prefix?"] = GraceBlock_lift;
          block492.receiver = this;
          block492.className = 'block<kitty:85>';
          block492.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj340.data["mouseDownAction"] = block492;
          var reader_kitty_mouseDownAction_493 = function() {
            return this.data["mouseDownAction"];
          }
          obj340.methods["mouseDownAction"] = reader_kitty_mouseDownAction_493;
          obj340.data["mouseDownAction"] = block492;
          var writer_kitty_mouseDownAction_493 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj340.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_493;
          reader_kitty_mouseDownAction_493.confidential = true;
          writer_kitty_mouseDownAction_493.confidential = true;
          lineNumber = 85;
          moduleName = "kitty";
          lineNumber = 83
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block492)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj340.mutable = true;
          sourceObject = obj340;
          obj340.data["image"] = undefined;
          var reader_kitty_image_494 = function() {
            return this.data["image"];
          }
          obj340.methods["image"] = reader_kitty_image_494;
          obj340.data["image"] = undefined;
          var writer_kitty_image_494 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj340.methods["image:="] = writer_kitty_image_494;
          reader_kitty_image_494.confidential = true;
          writer_kitty_image_494.confidential = true;
          obj340.mutable = true;
          sourceObject = obj340;
          lineNumber = 87
          onSelf = true;
          var call495 = callmethod(this, "awake", [0]);
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          sourceObject = obj340;
          superDepth = origSuperDepth;
        }
        obj_init_340.apply(inheritingObject, []);
        return obj340
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj180.methods["new()object"] = func339;
    var func496 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string497 = new GraceString("class KittyEntity");
        return string497
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func496.paramCounts = [
    ];
    func496.variableArities = [
    ];
    obj180.methods["asDebugString"] = func496;
    func496.definitionLine = 71;
    func496.definitionModule = "kitty";
    sourceObject = obj180;
    sourceObject = obj180;
    superDepth = origSuperDepth;
  }
  obj_init_180.apply(obj180, []);
  var var_KittyEntity = obj180;
  lineNumber = 179
  lineNumber = 191
  lineNumber = 196
  lineNumber = 200
  lineNumber = 205
  lineNumber = 209
  lineNumber = 213
  lineNumber = 217
  lineNumber = 225
  var func498 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func498.paramCounts[0])
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
  func498.paramCounts = [
    0,
  ];
  func498.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func498;
  func498.definitionLine = 225;
  func498.definitionModule = "kitty";
  var obj499 = Grace_allocObject();
  obj499.definitionModule = "kitty";
  obj499.definitionLine = 225;
  obj499.outer = this;
  var reader_kitty_outer_500 = function() {
    return this.outer;
  }
  obj499.methods["outer"] = reader_kitty_outer_500;
  function obj_init_499() {
    var origSuperDepth = superDepth;
    superDepth = obj499;
    obj499.annotations = [];
    var func501 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func501.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj502 = Grace_allocObject();
        obj502.definitionModule = "kitty";
        obj502.definitionLine = 225;
        obj502.outer = this;
        var reader_kitty_outer_503 = function() {
          return this.outer;
        }
        obj502.methods["outer"] = reader_kitty_outer_503;
        function obj_init_502() {
          var origSuperDepth = superDepth;
          superDepth = obj502;
          obj502.annotations = [];
          var func504 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func504.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 267
              var if505 = var_done;
              lineNumber = 263
              onSelf = true;
              var call506 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call506)) {
                lineNumber = 265
                lineNumber = 264
                var bool507 = new GraceBoolean(false)
                return bool507
              }
              lineNumber = 268
              lineNumber = 225
              lineNumber = 267
              var call508 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call509 = callmethod(this, "document:=", [1], call508);
              lineNumber = 268
              lineNumber = 267
              lineNumber = 268
              var string510 = new GraceString("standard-canvas");
              onSelf = true;
              var call511 = callmethod(this, "document", [0]);
              var call512 = callmethod(call511,"getElementById", [1], string510);
              onSelf = true;
              var call513 = callmethod(this, "canvas:=", [1], call512);
              lineNumber = 270
              lineNumber = 267
              lineNumber = 269
              onSelf = true;
              var call514 = callmethod(this, "canvas", [0]);
              var call515 = callmethod(call514,"width", [0]);
              onSelf = true;
              var call516 = callmethod(this, "canvasWidth:=", [1], call515);
              lineNumber = 273
              lineNumber = 269
              lineNumber = 270
              onSelf = true;
              var call517 = callmethod(this, "canvas", [0]);
              var call518 = callmethod(call517,"height", [0]);
              onSelf = true;
              var call519 = callmethod(this, "canvasHeight:=", [1], call518);
              lineNumber = 290
              var block520 = Grace_allocObject();
              block520.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block520.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block520.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block520.methods["match"] = GraceBlock_match;
              block520.methods["prefix?"] = GraceBlock_lift;
              block520.receiver = this;
              block520.className = 'block<kitty:290>';
              block520.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 276
                lineNumber = 275
                onSelf = true;
                var call521 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call523 = callmethod(this, "canvas", [0]);
                var call524 = callmethod(call523,"offsetWidth", [0]);
                onSelf = true;
                var call526 = callmethod(this, "canvas", [0]);
                var call527 = callmethod(call526,"offsetLeft", [0]);
                var call529 = callmethod(var_ev,"clientX", [0]);
                var diff531 = callmethod(call529, "-", [1], call527);
                var quotient533 = callmethod(diff531, "/", [1], call524);
                var prod535 = callmethod(quotient533, "*", [1], call521);
                var var_x = prod535;
                lineNumber = 276;
                moduleName = "kitty";
                lineNumber = 275
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 286
                lineNumber = 276
                onSelf = true;
                var call536 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call538 = callmethod(this, "canvas", [0]);
                var call539 = callmethod(call538,"offsetHeight", [0]);
                onSelf = true;
                var call541 = callmethod(this, "canvas", [0]);
                var call542 = callmethod(call541,"offsetTop", [0]);
                var call544 = callmethod(var_ev,"clientY", [0]);
                var diff546 = callmethod(call544, "-", [1], call542);
                var quotient548 = callmethod(diff546, "/", [1], call539);
                var prod550 = callmethod(quotient548, "*", [1], call536);
                var var_y = prod550;
                lineNumber = 286;
                moduleName = "kitty";
                lineNumber = 276
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 286
                onSelf = true;
                var call551 = callmethod(this, "entities", [0]);
                lineNumber = 289
                var block552 = Grace_allocObject();
                block552.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block552.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block552.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block552.methods["match"] = GraceBlock_match;
                block552.methods["prefix?"] = GraceBlock_lift;
                block552.receiver = this;
                block552.className = 'block<kitty:289>';
                block552.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 287
                  var call553 = callmethod(var_entity,"mouseDown", [0]);
                  return call553;
                };
                var call554 = callmethod(Grace_prelude,"for()do", [1, 1], call551, block552);
                return call554;
              };
              var_mouseDownListener = block520;
              lineNumber = 290
              var string555 = new GraceString("mousedown");
              onSelf = true;
              var call556 = callmethod(this, "canvas", [0]);
              var call557 = callmethod(call556,"addEventListener", [2], string555, var_mouseDownListener);
              lineNumber = 300
              var block558 = Grace_allocObject();
              block558.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block558.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block558.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block558.methods["match"] = GraceBlock_match;
              block558.methods["prefix?"] = GraceBlock_lift;
              block558.receiver = this;
              block558.className = 'block<kitty:300>';
              block558.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 298
                var if559 = var_done;
                lineNumber = 295
                var call561 = callmethod(var_ev,"keyCode", [0]);
                var opresult563 = callmethod(call561, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult563)) {
                  lineNumber = 296
                  onSelf = true;
                  var call564 = callmethod(this, "stop", [0]);
                  if559 = call564;
                }
                lineNumber = 299
                lineNumber = 298
                var call565 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call565;
                return call565;
              };
              var_keyDownListener = block558;
              lineNumber = 300
              var string566 = new GraceString("keydown");
              onSelf = true;
              var call567 = callmethod(this, "document", [0]);
              var call568 = callmethod(call567,"addEventListener", [2], string566, var_keyDownListener);
              lineNumber = 306
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
              block569.className = 'block<kitty:306>';
              block569.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 305
                lineNumber = 304
                var call570 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call570;
                return call570;
              };
              var_keyUpListener = block569;
              lineNumber = 306
              var string571 = new GraceString("keyup");
              onSelf = true;
              var call572 = callmethod(this, "document", [0]);
              var call573 = callmethod(call572,"addEventListener", [2], string571, var_keyUpListener);
              lineNumber = 308
              lineNumber = 298
              lineNumber = 308
              var string574 = new GraceString("canvas");
              var call575 = callmethod(var_dom,"document", [0]);
              var call576 = callmethod(call575,"createElement", [1], string574);
              onSelf = true;
              var call577 = callmethod(this, "backingCanvas:=", [1], call576);
              lineNumber = 310
              lineNumber = 308
              lineNumber = 309
              onSelf = true;
              var call578 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call579 = callmethod(this, "backingCanvas", [0]);
              var call580 = callmethod(call579,"height:=", [1], call578);
              lineNumber = 311
              lineNumber = 308
              lineNumber = 310
              onSelf = true;
              var call581 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call582 = callmethod(this, "backingCanvas", [0]);
              var call583 = callmethod(call582,"width:=", [1], call581);
              lineNumber = 311
              lineNumber = 308
              lineNumber = 311
              var string584 = new GraceString("2d");
              onSelf = true;
              var call585 = callmethod(this, "backingCanvas", [0]);
              var call586 = callmethod(call585,"getContext", [1], string584);
              onSelf = true;
              var call587 = callmethod(this, "backingContext:=", [1], call586);
              lineNumber = 312
              lineNumber = 308
              lineNumber = 312
              var string588 = new GraceString("2d");
              onSelf = true;
              var call589 = callmethod(this, "canvas", [0]);
              var call590 = callmethod(call589,"getContext", [1], string588);
              onSelf = true;
              var call591 = callmethod(this, "mctx:=", [1], call590);
              lineNumber = 315
              var string592 = new GraceString("doggo.jpg");
              onSelf = true;
              var call593 = callmethod(this, "setBackground", [1], string592);
              lineNumber = 318
              var call594 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call595 = callmethod(call594, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call596 = callmethod(call595, "setWorld", [1], this);
              lineNumber = 321
              lineNumber = 320
              var_kitten = this;
              lineNumber = 322
              lineNumber = 318
              lineNumber = 321
              var bool597 = new GraceBoolean(true)
              onSelf = true;
              var call598 = callmethod(this, "isInit:=", [1], bool597);
              return call598
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func504.paramCounts = [
            0,
          ];
          func504.variableArities = [
            false,
          ];
          obj502.methods["init"] = func504;
          func504.definitionLine = 259;
          func504.definitionModule = "kitty";
          var func599 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 328
              lineNumber = 318
              lineNumber = 327
              var bool600 = new GraceBoolean(true)
              onSelf = true;
              var call601 = callmethod(this, "isRunning:=", [1], bool600);
              lineNumber = 328
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
              block602.className = 'block<kitty:328>';
              block602.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call603 = callmethod(this, "isRunning", [0]);
                return call603;
              };
              lineNumber = 332
              var block604 = Grace_allocObject();
              block604.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block604.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block604.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block604.methods["match"] = GraceBlock_match;
              block604.methods["prefix?"] = GraceBlock_lift;
              block604.receiver = this;
              block604.className = 'block<kitty:332>';
              block604.real = function(
              ) {
                sourceObject = this;
                lineNumber = 329
                onSelf = true;
                var call605 = callmethod(this, "tick", [0]);
                return call605;
              };
              lineNumber = 328
              var call606 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block602, new GraceNum(10), block604);
              return call606
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
          obj502.methods["start"] = func599;
          func599.definitionLine = 325;
          func599.definitionModule = "kitty";
          var func607 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func607.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 341
              lineNumber = 318
              lineNumber = 340
              onSelf = true;
              var call608 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call609 = callmethod(this, "mctx", [0]);
              var call610 = callmethod(call609,"fillStyle:=", [1], call608);
              lineNumber = 341
              onSelf = true;
              var call611 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call612 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call613 = callmethod(this, "mctx", [0]);
              var call614 = callmethod(call613,"fillRect", [4], new GraceNum(0), new GraceNum(0), call611, call612);
              lineNumber = 342
              onSelf = true;
              var call615 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call616 = callmethod(this, "mctx", [0]);
              var call617 = callmethod(call616,"drawImage", [3], call615, new GraceNum(0), new GraceNum(0));
              lineNumber = 343
              onSelf = true;
              var call618 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call620 = callmethod(this, "canvasWidth", [0]);
              var quotient622 = callmethod(call620, "/", [1], new GraceNum(2));
              onSelf = true;
              var call624 = callmethod(this, "canvasHeight", [0]);
              var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
              onSelf = true;
              var call627 = callmethod(this, "background", [0]);
              var call628 = callmethod(call627,"draw", [4], call618, quotient622, quotient626, new GraceNum(0));
              lineNumber = 346
              onSelf = true;
              var call629 = callmethod(this, "updateAction", [0]);
              var call630 = callmethod(call629,"apply", [0]);
              lineNumber = 349
              onSelf = true;
              var call631 = callmethod(this, "entities", [0]);
              lineNumber = 355
              var block632 = Grace_allocObject();
              block632.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block632.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block632.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block632.methods["match"] = GraceBlock_match;
              block632.methods["prefix?"] = GraceBlock_lift;
              block632.receiver = this;
              block632.className = 'block<kitty:355>';
              block632.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 350
                var call633 = callmethod(var_entity,"tick", [0]);
                lineNumber = 351
                onSelf = true;
                var call634 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call636 = callmethod(this, "canvasWidth", [0]);
                var quotient638 = callmethod(call636, "/", [1], new GraceNum(2));
                onSelf = true;
                var call640 = callmethod(this, "canvasHeight", [0]);
                var quotient642 = callmethod(call640, "/", [1], new GraceNum(2));
                var call643 = callmethod(var_entity,"draw", [3], call634, quotient638, quotient642);
                return call643;
              };
              var call644 = callmethod(Grace_prelude,"for()do", [1, 1], call631, block632);
              return call644
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func607.paramCounts = [
            0,
          ];
          func607.variableArities = [
            false,
          ];
          obj502.methods["tick"] = func607;
          func607.definitionLine = 335;
          func607.definitionModule = "kitty";
          var func645 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 358
              var string646 = new GraceString("WORLD STOPPING...");
              var call647 = Grace_print(string646);
              lineNumber = 360
              lineNumber = 350
              lineNumber = 359
              var bool648 = new GraceBoolean(false)
              onSelf = true;
              var call649 = callmethod(this, "isRunning:=", [1], bool648);
              lineNumber = 360
              onSelf = true;
              var call650 = callmethod(this, "destroyAction", [0]);
              var call651 = callmethod(call650,"apply", [0]);
              lineNumber = 361
              onSelf = true;
              var call652 = callmethod(this, "entities", [0]);
              lineNumber = 364
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
              block653.className = 'block<kitty:364>';
              block653.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 362
                var call654 = callmethod(var_entity,"kill", [0]);
                return call654;
              };
              var call655 = callmethod(Grace_prelude,"for()do", [1, 1], call652, block653);
              lineNumber = 364
              var string656 = new GraceString("mousedown");
              onSelf = true;
              var call657 = callmethod(this, "canvas", [0]);
              var call658 = callmethod(call657,"removeEventListener", [2], string656, var_mouseDownListener);
              lineNumber = 365
              var string659 = new GraceString("keydown");
              onSelf = true;
              var call660 = callmethod(this, "document", [0]);
              var call661 = callmethod(call660,"removeEventListener", [2], string659, var_keyDownListener);
              lineNumber = 366
              var string662 = new GraceString("keyup");
              onSelf = true;
              var call663 = callmethod(this, "document", [0]);
              var call664 = callmethod(call663,"removeEventListener", [2], string662, var_keyUpListener);
              return call664
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func645.paramCounts = [
            0,
          ];
          func645.variableArities = [
            false,
          ];
          obj502.methods["stop"] = func645;
          func645.definitionLine = 357;
          func645.definitionModule = "kitty";
          var func665 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func665.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 370
              lineNumber = 362
              lineNumber = 370
              onSelf = true;
              var call666 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call667 = callmethod(this, "canvasHeight", [0]);
              var call668 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call669 = callmethod(call668, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call670 = callmethod(call669, "Image()width()height", [1, 1, 1], var_url, call666, call667);
              onSelf = true;
              var call671 = callmethod(this, "background:=", [1], call670);
              return call671
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func665.paramCounts = [
            1,
          ];
          func665.variableArities = [
            false,
          ];
          obj502.methods["setBackground"] = func665;
          func665.definitionLine = 369;
          func665.definitionModule = "kitty";
          var func672 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func672.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 374
              onSelf = true;
              var call673 = callmethod(this, "entities", [0]);
              var call674 = callmethod(call673,"push", [1], var_e);
              return call674
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func672.paramCounts = [
            1,
          ];
          func672.variableArities = [
            false,
          ];
          obj502.methods["addEntity"] = func672;
          func672.definitionLine = 373;
          func672.definitionModule = "kitty";
          var func675 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func675.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 379
              lineNumber = 378
              onSelf = true;
              var call676 = callmethod(this, "mctx", [0]);
              return call676
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
          obj502.methods["getContext"] = func675;
          func675.definitionLine = 377;
          func675.definitionModule = "kitty";
          var func677 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func677.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 383
              lineNumber = 382
              onSelf = true;
              var call678 = callmethod(this, "width", [0]);
              onSelf = true;
              var call680 = callmethod(this, "canvasWidth", [0]);
              var quotient682 = callmethod(call680, "/", [1], call678);
              return quotient682
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func677.paramCounts = [
            0,
          ];
          func677.variableArities = [
            false,
          ];
          obj502.methods["moveWidthMultipler"] = func677;
          func677.definitionLine = 381;
          func677.definitionModule = "kitty";
          var func683 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func683.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 387
              lineNumber = 386
              onSelf = true;
              var call684 = callmethod(this, "height", [0]);
              onSelf = true;
              var call686 = callmethod(this, "canvasHeight", [0]);
              var quotient688 = callmethod(call686, "/", [1], call684);
              return quotient688
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func683.paramCounts = [
            0,
          ];
          func683.variableArities = [
            false,
          ];
          obj502.methods["moveHeightMultipler"] = func683;
          func683.definitionLine = 385;
          func683.definitionModule = "kitty";
          var func689 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func689.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 391
              lineNumber = 370
              lineNumber = 390
              onSelf = true;
              var call690 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call690
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func689.paramCounts = [
            1,
          ];
          func689.variableArities = [
            false,
          ];
          obj502.methods["setUpdateAction"] = func689;
          func689.definitionLine = 389;
          func689.definitionModule = "kitty";
          var func691 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func691.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 395
              lineNumber = 370
              lineNumber = 394
              onSelf = true;
              var call692 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call692
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func691.paramCounts = [
            1,
          ];
          func691.variableArities = [
            false,
          ];
          obj502.methods["setDestroyAction"] = func691;
          func691.definitionLine = 393;
          func691.definitionModule = "kitty";
          sourceObject = obj502;
          lineNumber = 228
          obj502.data["width"] = var_width__39__;
          var reader_kitty_width_693 = function() {
            return this.data["width"];
          }
          obj502.methods["width"] = reader_kitty_width_693;
          obj502.data["width"] = var_width__39__;
          var writer_kitty_width_693 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj502.methods["width:="] = writer_kitty_width_693;
          lineNumber = 229;
          moduleName = "kitty";
          lineNumber = 228
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 229
          obj502.data["height"] = var_height__39__;
          var reader_kitty_height_694 = function() {
            return this.data["height"];
          }
          obj502.methods["height"] = reader_kitty_height_694;
          obj502.data["height"] = var_height__39__;
          var writer_kitty_height_694 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj502.methods["height:="] = writer_kitty_height_694;
          lineNumber = 230;
          moduleName = "kitty";
          lineNumber = 229
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 230
          obj502.data["tag"] = var_tag__39__;
          var reader_kitty_tag_695 = function() {
            return this.data["tag"];
          }
          obj502.methods["tag"] = reader_kitty_tag_695;
          obj502.data["tag"] = var_tag__39__;
          var writer_kitty_tag_695 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj502.methods["tag:="] = writer_kitty_tag_695;
          lineNumber = 232;
          moduleName = "kitty";
          lineNumber = 230
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["background"] = undefined;
          var reader_kitty_background_696 = function() {
            return this.data["background"];
          }
          obj502.methods["background"] = reader_kitty_background_696;
          obj502.data["background"] = undefined;
          var writer_kitty_background_696 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj502.methods["background:="] = writer_kitty_background_696;
          reader_kitty_background_696.confidential = true;
          writer_kitty_background_696.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 233
          var string697 = new GraceString("black");
          obj502.data["backgroundColour"] = string697;
          var reader_kitty_backgroundColour_698 = function() {
            return this.data["backgroundColour"];
          }
          obj502.methods["backgroundColour"] = reader_kitty_backgroundColour_698;
          obj502.data["backgroundColour"] = string697;
          var writer_kitty_backgroundColour_698 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj502.methods["backgroundColour:="] = writer_kitty_backgroundColour_698;
          reader_kitty_backgroundColour_698.confidential = true;
          writer_kitty_backgroundColour_698.confidential = true;
          lineNumber = 235;
          moduleName = "kitty";
          lineNumber = 233
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string697)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["document"] = undefined;
          var reader_kitty_document_699 = function() {
            return this.data["document"];
          }
          obj502.methods["document"] = reader_kitty_document_699;
          obj502.data["document"] = undefined;
          var writer_kitty_document_699 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj502.methods["document:="] = writer_kitty_document_699;
          reader_kitty_document_699.confidential = true;
          writer_kitty_document_699.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_700 = function() {
            return this.data["backingCanvas"];
          }
          obj502.methods["backingCanvas"] = reader_kitty_backingCanvas_700;
          obj502.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_700 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj502.methods["backingCanvas:="] = writer_kitty_backingCanvas_700;
          reader_kitty_backingCanvas_700.confidential = true;
          writer_kitty_backingCanvas_700.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["backingContext"] = undefined;
          var reader_kitty_backingContext_701 = function() {
            return this.data["backingContext"];
          }
          obj502.methods["backingContext"] = reader_kitty_backingContext_701;
          obj502.data["backingContext"] = undefined;
          var writer_kitty_backingContext_701 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj502.methods["backingContext:="] = writer_kitty_backingContext_701;
          reader_kitty_backingContext_701.confidential = true;
          writer_kitty_backingContext_701.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["canvas"] = undefined;
          var reader_kitty_canvas_702 = function() {
            return this.data["canvas"];
          }
          obj502.methods["canvas"] = reader_kitty_canvas_702;
          obj502.data["canvas"] = undefined;
          var writer_kitty_canvas_702 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj502.methods["canvas:="] = writer_kitty_canvas_702;
          reader_kitty_canvas_702.confidential = true;
          writer_kitty_canvas_702.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_703 = function() {
            return this.data["canvasWidth"];
          }
          obj502.methods["canvasWidth"] = reader_kitty_canvasWidth_703;
          obj502.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_703 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj502.methods["canvasWidth:="] = writer_kitty_canvasWidth_703;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_704 = function() {
            return this.data["canvasHeight"];
          }
          obj502.methods["canvasHeight"] = reader_kitty_canvasHeight_704;
          obj502.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_704 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj502.methods["canvasHeight:="] = writer_kitty_canvasHeight_704;
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 244
          var call705 = callmethod(var_collections,"list", [0]);
          var call706 = callmethod(call705,"new", [0]);
          obj502.data["entities"] = call706;
          var reader_kitty_entities_707 = function() {
            return this.data["entities"];
          }
          obj502.methods["entities"] = reader_kitty_entities_707;
          obj502.data["entities"] = call706;
          var writer_kitty_entities_707 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj502.methods["entities:="] = writer_kitty_entities_707;
          reader_kitty_entities_707.confidential = true;
          writer_kitty_entities_707.confidential = true;
          lineNumber = 246;
          moduleName = "kitty";
          lineNumber = 244
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call706)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 246
          var bool708 = new GraceBoolean(false)
          obj502.data["isInit"] = bool708;
          var reader_kitty_isInit_709 = function() {
            return this.data["isInit"];
          }
          obj502.methods["isInit"] = reader_kitty_isInit_709;
          obj502.data["isInit"] = bool708;
          var writer_kitty_isInit_709 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj502.methods["isInit:="] = writer_kitty_isInit_709;
          reader_kitty_isInit_709.confidential = true;
          writer_kitty_isInit_709.confidential = true;
          lineNumber = 247;
          moduleName = "kitty";
          lineNumber = 246
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool708)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 247
          var bool710 = new GraceBoolean(false)
          obj502.data["isRunning"] = bool710;
          var reader_kitty_isRunning_711 = function() {
            return this.data["isRunning"];
          }
          obj502.methods["isRunning"] = reader_kitty_isRunning_711;
          obj502.data["isRunning"] = bool710;
          var writer_kitty_isRunning_711 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj502.methods["isRunning:="] = writer_kitty_isRunning_711;
          reader_kitty_isRunning_711.confidential = true;
          writer_kitty_isRunning_711.confidential = true;
          lineNumber = 249;
          moduleName = "kitty";
          lineNumber = 247
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool710)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["mctx"] = undefined;
          var reader_kitty_mctx_712 = function() {
            return this.data["mctx"];
          }
          obj502.methods["mctx"] = reader_kitty_mctx_712;
          obj502.data["mctx"] = undefined;
          var writer_kitty_mctx_712 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj502.methods["mctx:="] = writer_kitty_mctx_712;
          reader_kitty_mctx_712.confidential = true;
          writer_kitty_mctx_712.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          obj502.data["ent"] = undefined;
          var reader_kitty_ent_713 = function() {
            return this.data["ent"];
          }
          obj502.methods["ent"] = reader_kitty_ent_713;
          obj502.data["ent"] = undefined;
          var writer_kitty_ent_713 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj502.methods["ent:="] = writer_kitty_ent_713;
          reader_kitty_ent_713.confidential = true;
          writer_kitty_ent_713.confidential = true;
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 254
          var block714 = Grace_allocObject();
          block714.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block714.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block714.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block714.methods["match"] = GraceBlock_match;
          block714.methods["prefix?"] = GraceBlock_lift;
          block714.receiver = this;
          block714.className = 'block<kitty:254>';
          block714.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj502.data["updateAction"] = block714;
          var reader_kitty_updateAction_715 = function() {
            return this.data["updateAction"];
          }
          obj502.methods["updateAction"] = reader_kitty_updateAction_715;
          obj502.data["updateAction"] = block714;
          var writer_kitty_updateAction_715 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj502.methods["updateAction:="] = writer_kitty_updateAction_715;
          reader_kitty_updateAction_715.confidential = true;
          writer_kitty_updateAction_715.confidential = true;
          lineNumber = 254;
          moduleName = "kitty";
          lineNumber = 253
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block714)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 256
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
          block716.className = 'block<kitty:256>';
          block716.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj502.data["destroyAction"] = block716;
          var reader_kitty_destroyAction_717 = function() {
            return this.data["destroyAction"];
          }
          obj502.methods["destroyAction"] = reader_kitty_destroyAction_717;
          obj502.data["destroyAction"] = block716;
          var writer_kitty_destroyAction_717 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj502.methods["destroyAction:="] = writer_kitty_destroyAction_717;
          reader_kitty_destroyAction_717.confidential = true;
          writer_kitty_destroyAction_717.confidential = true;
          lineNumber = 256;
          moduleName = "kitty";
          lineNumber = 254
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block716)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj502.mutable = true;
          sourceObject = obj502;
          lineNumber = 256
          onSelf = true;
          var call718 = callmethod(this, "init", [0]);
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          sourceObject = obj502;
          superDepth = origSuperDepth;
        }
        obj_init_502.apply(obj502, []);
        return obj502
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func501.paramCounts = [
      3,
    ];
    func501.variableArities = [
      false,
    ];
    obj499.methods["new"] = func501;
    func501.definitionLine = 225;
    func501.definitionModule = "kitty";
    var func719 = function(argcv) {
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
        var obj720 = Grace_allocObject();
        obj720.definitionModule = "kitty";
        obj720.definitionLine = 225;
        var inho720 = inheritingObject;
        while (inho720.superobj) inho720 = inho720.superobj;
        inho720.superobj = obj720;
        obj720.data = inheritingObject.data;
        obj720.outer = this;
        var reader_kitty_outer_721 = function() {
          return this.outer;
        }
        obj720.methods["outer"] = reader_kitty_outer_721;
        function obj_init_720() {
          var origSuperDepth = superDepth;
          superDepth = obj720;
          obj720.annotations = [];
          var func722 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func722.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 267
              var if723 = var_done;
              lineNumber = 263
              onSelf = true;
              var call724 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call724)) {
                lineNumber = 265
                lineNumber = 264
                var bool725 = new GraceBoolean(false)
                return bool725
              }
              lineNumber = 268
              lineNumber = 244
              lineNumber = 267
              var call726 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call727 = callmethod(this, "document:=", [1], call726);
              lineNumber = 268
              lineNumber = 267
              lineNumber = 268
              var string728 = new GraceString("standard-canvas");
              onSelf = true;
              var call729 = callmethod(this, "document", [0]);
              var call730 = callmethod(call729,"getElementById", [1], string728);
              onSelf = true;
              var call731 = callmethod(this, "canvas:=", [1], call730);
              lineNumber = 270
              lineNumber = 267
              lineNumber = 269
              onSelf = true;
              var call732 = callmethod(this, "canvas", [0]);
              var call733 = callmethod(call732,"width", [0]);
              onSelf = true;
              var call734 = callmethod(this, "canvasWidth:=", [1], call733);
              lineNumber = 273
              lineNumber = 269
              lineNumber = 270
              onSelf = true;
              var call735 = callmethod(this, "canvas", [0]);
              var call736 = callmethod(call735,"height", [0]);
              onSelf = true;
              var call737 = callmethod(this, "canvasHeight:=", [1], call736);
              lineNumber = 290
              var block738 = Grace_allocObject();
              block738.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block738.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block738.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block738.methods["match"] = GraceBlock_match;
              block738.methods["prefix?"] = GraceBlock_lift;
              block738.receiver = this;
              block738.className = 'block<kitty:290>';
              block738.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 276
                lineNumber = 275
                onSelf = true;
                var call739 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call741 = callmethod(this, "canvas", [0]);
                var call742 = callmethod(call741,"offsetWidth", [0]);
                onSelf = true;
                var call744 = callmethod(this, "canvas", [0]);
                var call745 = callmethod(call744,"offsetLeft", [0]);
                var call747 = callmethod(var_ev,"clientX", [0]);
                var diff749 = callmethod(call747, "-", [1], call745);
                var quotient751 = callmethod(diff749, "/", [1], call742);
                var prod753 = callmethod(quotient751, "*", [1], call739);
                var var_x = prod753;
                lineNumber = 276;
                moduleName = "kitty";
                lineNumber = 275
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 286
                lineNumber = 276
                onSelf = true;
                var call754 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call756 = callmethod(this, "canvas", [0]);
                var call757 = callmethod(call756,"offsetHeight", [0]);
                onSelf = true;
                var call759 = callmethod(this, "canvas", [0]);
                var call760 = callmethod(call759,"offsetTop", [0]);
                var call762 = callmethod(var_ev,"clientY", [0]);
                var diff764 = callmethod(call762, "-", [1], call760);
                var quotient766 = callmethod(diff764, "/", [1], call757);
                var prod768 = callmethod(quotient766, "*", [1], call754);
                var var_y = prod768;
                lineNumber = 286;
                moduleName = "kitty";
                lineNumber = 276
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 286
                onSelf = true;
                var call769 = callmethod(this, "entities", [0]);
                lineNumber = 289
                var block770 = Grace_allocObject();
                block770.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block770.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block770.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block770.methods["match"] = GraceBlock_match;
                block770.methods["prefix?"] = GraceBlock_lift;
                block770.receiver = this;
                block770.className = 'block<kitty:289>';
                block770.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 287
                  var call771 = callmethod(var_entity,"mouseDown", [0]);
                  return call771;
                };
                var call772 = callmethod(Grace_prelude,"for()do", [1, 1], call769, block770);
                return call772;
              };
              var_mouseDownListener = block738;
              lineNumber = 290
              var string773 = new GraceString("mousedown");
              onSelf = true;
              var call774 = callmethod(this, "canvas", [0]);
              var call775 = callmethod(call774,"addEventListener", [2], string773, var_mouseDownListener);
              lineNumber = 300
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
              block776.className = 'block<kitty:300>';
              block776.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 298
                var if777 = var_done;
                lineNumber = 295
                var call779 = callmethod(var_ev,"keyCode", [0]);
                var opresult781 = callmethod(call779, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult781)) {
                  lineNumber = 296
                  onSelf = true;
                  var call782 = callmethod(this, "stop", [0]);
                  if777 = call782;
                }
                lineNumber = 299
                lineNumber = 298
                var call783 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call783;
                return call783;
              };
              var_keyDownListener = block776;
              lineNumber = 300
              var string784 = new GraceString("keydown");
              onSelf = true;
              var call785 = callmethod(this, "document", [0]);
              var call786 = callmethod(call785,"addEventListener", [2], string784, var_keyDownListener);
              lineNumber = 306
              var block787 = Grace_allocObject();
              block787.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block787.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block787.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block787.methods["match"] = GraceBlock_match;
              block787.methods["prefix?"] = GraceBlock_lift;
              block787.receiver = this;
              block787.className = 'block<kitty:306>';
              block787.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 305
                lineNumber = 304
                var call788 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call788;
                return call788;
              };
              var_keyUpListener = block787;
              lineNumber = 306
              var string789 = new GraceString("keyup");
              onSelf = true;
              var call790 = callmethod(this, "document", [0]);
              var call791 = callmethod(call790,"addEventListener", [2], string789, var_keyUpListener);
              lineNumber = 308
              lineNumber = 298
              lineNumber = 308
              var string792 = new GraceString("canvas");
              var call793 = callmethod(var_dom,"document", [0]);
              var call794 = callmethod(call793,"createElement", [1], string792);
              onSelf = true;
              var call795 = callmethod(this, "backingCanvas:=", [1], call794);
              lineNumber = 310
              lineNumber = 308
              lineNumber = 309
              onSelf = true;
              var call796 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call797 = callmethod(this, "backingCanvas", [0]);
              var call798 = callmethod(call797,"height:=", [1], call796);
              lineNumber = 311
              lineNumber = 308
              lineNumber = 310
              onSelf = true;
              var call799 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call800 = callmethod(this, "backingCanvas", [0]);
              var call801 = callmethod(call800,"width:=", [1], call799);
              lineNumber = 311
              lineNumber = 308
              lineNumber = 311
              var string802 = new GraceString("2d");
              onSelf = true;
              var call803 = callmethod(this, "backingCanvas", [0]);
              var call804 = callmethod(call803,"getContext", [1], string802);
              onSelf = true;
              var call805 = callmethod(this, "backingContext:=", [1], call804);
              lineNumber = 312
              lineNumber = 308
              lineNumber = 312
              var string806 = new GraceString("2d");
              onSelf = true;
              var call807 = callmethod(this, "canvas", [0]);
              var call808 = callmethod(call807,"getContext", [1], string806);
              onSelf = true;
              var call809 = callmethod(this, "mctx:=", [1], call808);
              lineNumber = 315
              var string810 = new GraceString("doggo.jpg");
              onSelf = true;
              var call811 = callmethod(this, "setBackground", [1], string810);
              lineNumber = 318
              var call812 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call813 = callmethod(call812, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call814 = callmethod(call813, "setWorld", [1], this);
              lineNumber = 321
              lineNumber = 320
              var_kitten = this;
              lineNumber = 322
              lineNumber = 318
              lineNumber = 321
              var bool815 = new GraceBoolean(true)
              onSelf = true;
              var call816 = callmethod(this, "isInit:=", [1], bool815);
              return call816
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func722.paramCounts = [
            0,
          ];
          func722.variableArities = [
            false,
          ];
          obj720.methods["init"] = func722;
          func722.definitionLine = 259;
          func722.definitionModule = "kitty";
          var func817 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func817.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 328
              lineNumber = 318
              lineNumber = 327
              var bool818 = new GraceBoolean(true)
              onSelf = true;
              var call819 = callmethod(this, "isRunning:=", [1], bool818);
              lineNumber = 328
              var block820 = Grace_allocObject();
              block820.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block820.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block820.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block820.methods["match"] = GraceBlock_match;
              block820.methods["prefix?"] = GraceBlock_lift;
              block820.receiver = this;
              block820.className = 'block<kitty:328>';
              block820.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call821 = callmethod(this, "isRunning", [0]);
                return call821;
              };
              lineNumber = 332
              var block822 = Grace_allocObject();
              block822.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block822.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block822.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block822.methods["match"] = GraceBlock_match;
              block822.methods["prefix?"] = GraceBlock_lift;
              block822.receiver = this;
              block822.className = 'block<kitty:332>';
              block822.real = function(
              ) {
                sourceObject = this;
                lineNumber = 329
                onSelf = true;
                var call823 = callmethod(this, "tick", [0]);
                return call823;
              };
              lineNumber = 328
              var call824 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block820, new GraceNum(10), block822);
              return call824
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func817.paramCounts = [
            0,
          ];
          func817.variableArities = [
            false,
          ];
          obj720.methods["start"] = func817;
          func817.definitionLine = 325;
          func817.definitionModule = "kitty";
          var func825 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func825.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 341
              lineNumber = 318
              lineNumber = 340
              onSelf = true;
              var call826 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call827 = callmethod(this, "mctx", [0]);
              var call828 = callmethod(call827,"fillStyle:=", [1], call826);
              lineNumber = 341
              onSelf = true;
              var call829 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call830 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call831 = callmethod(this, "mctx", [0]);
              var call832 = callmethod(call831,"fillRect", [4], new GraceNum(0), new GraceNum(0), call829, call830);
              lineNumber = 342
              onSelf = true;
              var call833 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call834 = callmethod(this, "mctx", [0]);
              var call835 = callmethod(call834,"drawImage", [3], call833, new GraceNum(0), new GraceNum(0));
              lineNumber = 343
              onSelf = true;
              var call836 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call838 = callmethod(this, "canvasWidth", [0]);
              var quotient840 = callmethod(call838, "/", [1], new GraceNum(2));
              onSelf = true;
              var call842 = callmethod(this, "canvasHeight", [0]);
              var quotient844 = callmethod(call842, "/", [1], new GraceNum(2));
              onSelf = true;
              var call845 = callmethod(this, "background", [0]);
              var call846 = callmethod(call845,"draw", [4], call836, quotient840, quotient844, new GraceNum(0));
              lineNumber = 346
              onSelf = true;
              var call847 = callmethod(this, "updateAction", [0]);
              var call848 = callmethod(call847,"apply", [0]);
              lineNumber = 349
              onSelf = true;
              var call849 = callmethod(this, "entities", [0]);
              lineNumber = 355
              var block850 = Grace_allocObject();
              block850.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block850.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block850.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block850.methods["match"] = GraceBlock_match;
              block850.methods["prefix?"] = GraceBlock_lift;
              block850.receiver = this;
              block850.className = 'block<kitty:355>';
              block850.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 350
                var call851 = callmethod(var_entity,"tick", [0]);
                lineNumber = 351
                onSelf = true;
                var call852 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call854 = callmethod(this, "canvasWidth", [0]);
                var quotient856 = callmethod(call854, "/", [1], new GraceNum(2));
                onSelf = true;
                var call858 = callmethod(this, "canvasHeight", [0]);
                var quotient860 = callmethod(call858, "/", [1], new GraceNum(2));
                var call861 = callmethod(var_entity,"draw", [3], call852, quotient856, quotient860);
                return call861;
              };
              var call862 = callmethod(Grace_prelude,"for()do", [1, 1], call849, block850);
              return call862
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func825.paramCounts = [
            0,
          ];
          func825.variableArities = [
            false,
          ];
          obj720.methods["tick"] = func825;
          func825.definitionLine = 335;
          func825.definitionModule = "kitty";
          var func863 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func863.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 358
              var string864 = new GraceString("WORLD STOPPING...");
              var call865 = Grace_print(string864);
              lineNumber = 360
              lineNumber = 350
              lineNumber = 359
              var bool866 = new GraceBoolean(false)
              onSelf = true;
              var call867 = callmethod(this, "isRunning:=", [1], bool866);
              lineNumber = 360
              onSelf = true;
              var call868 = callmethod(this, "destroyAction", [0]);
              var call869 = callmethod(call868,"apply", [0]);
              lineNumber = 361
              onSelf = true;
              var call870 = callmethod(this, "entities", [0]);
              lineNumber = 364
              var block871 = Grace_allocObject();
              block871.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block871.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block871.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block871.methods["match"] = GraceBlock_match;
              block871.methods["prefix?"] = GraceBlock_lift;
              block871.receiver = this;
              block871.className = 'block<kitty:364>';
              block871.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 362
                var call872 = callmethod(var_entity,"kill", [0]);
                return call872;
              };
              var call873 = callmethod(Grace_prelude,"for()do", [1, 1], call870, block871);
              lineNumber = 364
              var string874 = new GraceString("mousedown");
              onSelf = true;
              var call875 = callmethod(this, "canvas", [0]);
              var call876 = callmethod(call875,"removeEventListener", [2], string874, var_mouseDownListener);
              lineNumber = 365
              var string877 = new GraceString("keydown");
              onSelf = true;
              var call878 = callmethod(this, "document", [0]);
              var call879 = callmethod(call878,"removeEventListener", [2], string877, var_keyDownListener);
              lineNumber = 366
              var string880 = new GraceString("keyup");
              onSelf = true;
              var call881 = callmethod(this, "document", [0]);
              var call882 = callmethod(call881,"removeEventListener", [2], string880, var_keyUpListener);
              return call882
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func863.paramCounts = [
            0,
          ];
          func863.variableArities = [
            false,
          ];
          obj720.methods["stop"] = func863;
          func863.definitionLine = 357;
          func863.definitionModule = "kitty";
          var func883 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func883.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 370
              lineNumber = 362
              lineNumber = 370
              onSelf = true;
              var call884 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call885 = callmethod(this, "canvasHeight", [0]);
              var call886 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call887 = callmethod(call886, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call888 = callmethod(call887, "Image()width()height", [1, 1, 1], var_url, call884, call885);
              onSelf = true;
              var call889 = callmethod(this, "background:=", [1], call888);
              return call889
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func883.paramCounts = [
            1,
          ];
          func883.variableArities = [
            false,
          ];
          obj720.methods["setBackground"] = func883;
          func883.definitionLine = 369;
          func883.definitionModule = "kitty";
          var func890 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func890.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 374
              onSelf = true;
              var call891 = callmethod(this, "entities", [0]);
              var call892 = callmethod(call891,"push", [1], var_e);
              return call892
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func890.paramCounts = [
            1,
          ];
          func890.variableArities = [
            false,
          ];
          obj720.methods["addEntity"] = func890;
          func890.definitionLine = 373;
          func890.definitionModule = "kitty";
          var func893 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func893.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 379
              lineNumber = 378
              onSelf = true;
              var call894 = callmethod(this, "mctx", [0]);
              return call894
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func893.paramCounts = [
            0,
          ];
          func893.variableArities = [
            false,
          ];
          obj720.methods["getContext"] = func893;
          func893.definitionLine = 377;
          func893.definitionModule = "kitty";
          var func895 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func895.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 383
              lineNumber = 382
              onSelf = true;
              var call896 = callmethod(this, "width", [0]);
              onSelf = true;
              var call898 = callmethod(this, "canvasWidth", [0]);
              var quotient900 = callmethod(call898, "/", [1], call896);
              return quotient900
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func895.paramCounts = [
            0,
          ];
          func895.variableArities = [
            false,
          ];
          obj720.methods["moveWidthMultipler"] = func895;
          func895.definitionLine = 381;
          func895.definitionModule = "kitty";
          var func901 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func901.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 387
              lineNumber = 386
              onSelf = true;
              var call902 = callmethod(this, "height", [0]);
              onSelf = true;
              var call904 = callmethod(this, "canvasHeight", [0]);
              var quotient906 = callmethod(call904, "/", [1], call902);
              return quotient906
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func901.paramCounts = [
            0,
          ];
          func901.variableArities = [
            false,
          ];
          obj720.methods["moveHeightMultipler"] = func901;
          func901.definitionLine = 385;
          func901.definitionModule = "kitty";
          var func907 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func907.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 391
              lineNumber = 370
              lineNumber = 390
              onSelf = true;
              var call908 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call908
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func907.paramCounts = [
            1,
          ];
          func907.variableArities = [
            false,
          ];
          obj720.methods["setUpdateAction"] = func907;
          func907.definitionLine = 389;
          func907.definitionModule = "kitty";
          var func909 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func909.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 395
              lineNumber = 370
              lineNumber = 394
              onSelf = true;
              var call910 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call910
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func909.paramCounts = [
            1,
          ];
          func909.variableArities = [
            false,
          ];
          obj720.methods["setDestroyAction"] = func909;
          func909.definitionLine = 393;
          func909.definitionModule = "kitty";
          sourceObject = obj720;
          lineNumber = 228
          obj720.data["width"] = var_width__39__;
          var reader_kitty_width_911 = function() {
            return this.data["width"];
          }
          obj720.methods["width"] = reader_kitty_width_911;
          obj720.data["width"] = var_width__39__;
          var writer_kitty_width_911 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj720.methods["width:="] = writer_kitty_width_911;
          lineNumber = 229;
          moduleName = "kitty";
          lineNumber = 228
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 229
          obj720.data["height"] = var_height__39__;
          var reader_kitty_height_912 = function() {
            return this.data["height"];
          }
          obj720.methods["height"] = reader_kitty_height_912;
          obj720.data["height"] = var_height__39__;
          var writer_kitty_height_912 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj720.methods["height:="] = writer_kitty_height_912;
          lineNumber = 230;
          moduleName = "kitty";
          lineNumber = 229
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 230
          obj720.data["tag"] = var_tag__39__;
          var reader_kitty_tag_913 = function() {
            return this.data["tag"];
          }
          obj720.methods["tag"] = reader_kitty_tag_913;
          obj720.data["tag"] = var_tag__39__;
          var writer_kitty_tag_913 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj720.methods["tag:="] = writer_kitty_tag_913;
          lineNumber = 232;
          moduleName = "kitty";
          lineNumber = 230
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["background"] = undefined;
          var reader_kitty_background_914 = function() {
            return this.data["background"];
          }
          obj720.methods["background"] = reader_kitty_background_914;
          obj720.data["background"] = undefined;
          var writer_kitty_background_914 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj720.methods["background:="] = writer_kitty_background_914;
          reader_kitty_background_914.confidential = true;
          writer_kitty_background_914.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 233
          var string915 = new GraceString("black");
          obj720.data["backgroundColour"] = string915;
          var reader_kitty_backgroundColour_916 = function() {
            return this.data["backgroundColour"];
          }
          obj720.methods["backgroundColour"] = reader_kitty_backgroundColour_916;
          obj720.data["backgroundColour"] = string915;
          var writer_kitty_backgroundColour_916 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj720.methods["backgroundColour:="] = writer_kitty_backgroundColour_916;
          reader_kitty_backgroundColour_916.confidential = true;
          writer_kitty_backgroundColour_916.confidential = true;
          lineNumber = 235;
          moduleName = "kitty";
          lineNumber = 233
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string915)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["document"] = undefined;
          var reader_kitty_document_917 = function() {
            return this.data["document"];
          }
          obj720.methods["document"] = reader_kitty_document_917;
          obj720.data["document"] = undefined;
          var writer_kitty_document_917 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj720.methods["document:="] = writer_kitty_document_917;
          reader_kitty_document_917.confidential = true;
          writer_kitty_document_917.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_918 = function() {
            return this.data["backingCanvas"];
          }
          obj720.methods["backingCanvas"] = reader_kitty_backingCanvas_918;
          obj720.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_918 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj720.methods["backingCanvas:="] = writer_kitty_backingCanvas_918;
          reader_kitty_backingCanvas_918.confidential = true;
          writer_kitty_backingCanvas_918.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["backingContext"] = undefined;
          var reader_kitty_backingContext_919 = function() {
            return this.data["backingContext"];
          }
          obj720.methods["backingContext"] = reader_kitty_backingContext_919;
          obj720.data["backingContext"] = undefined;
          var writer_kitty_backingContext_919 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj720.methods["backingContext:="] = writer_kitty_backingContext_919;
          reader_kitty_backingContext_919.confidential = true;
          writer_kitty_backingContext_919.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["canvas"] = undefined;
          var reader_kitty_canvas_920 = function() {
            return this.data["canvas"];
          }
          obj720.methods["canvas"] = reader_kitty_canvas_920;
          obj720.data["canvas"] = undefined;
          var writer_kitty_canvas_920 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj720.methods["canvas:="] = writer_kitty_canvas_920;
          reader_kitty_canvas_920.confidential = true;
          writer_kitty_canvas_920.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_921 = function() {
            return this.data["canvasWidth"];
          }
          obj720.methods["canvasWidth"] = reader_kitty_canvasWidth_921;
          obj720.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_921 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj720.methods["canvasWidth:="] = writer_kitty_canvasWidth_921;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_922 = function() {
            return this.data["canvasHeight"];
          }
          obj720.methods["canvasHeight"] = reader_kitty_canvasHeight_922;
          obj720.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_922 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj720.methods["canvasHeight:="] = writer_kitty_canvasHeight_922;
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 244
          var call923 = callmethod(var_collections,"list", [0]);
          var call924 = callmethod(call923,"new", [0]);
          obj720.data["entities"] = call924;
          var reader_kitty_entities_925 = function() {
            return this.data["entities"];
          }
          obj720.methods["entities"] = reader_kitty_entities_925;
          obj720.data["entities"] = call924;
          var writer_kitty_entities_925 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj720.methods["entities:="] = writer_kitty_entities_925;
          reader_kitty_entities_925.confidential = true;
          writer_kitty_entities_925.confidential = true;
          lineNumber = 246;
          moduleName = "kitty";
          lineNumber = 244
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call924)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 246
          var bool926 = new GraceBoolean(false)
          obj720.data["isInit"] = bool926;
          var reader_kitty_isInit_927 = function() {
            return this.data["isInit"];
          }
          obj720.methods["isInit"] = reader_kitty_isInit_927;
          obj720.data["isInit"] = bool926;
          var writer_kitty_isInit_927 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj720.methods["isInit:="] = writer_kitty_isInit_927;
          reader_kitty_isInit_927.confidential = true;
          writer_kitty_isInit_927.confidential = true;
          lineNumber = 247;
          moduleName = "kitty";
          lineNumber = 246
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool926)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 247
          var bool928 = new GraceBoolean(false)
          obj720.data["isRunning"] = bool928;
          var reader_kitty_isRunning_929 = function() {
            return this.data["isRunning"];
          }
          obj720.methods["isRunning"] = reader_kitty_isRunning_929;
          obj720.data["isRunning"] = bool928;
          var writer_kitty_isRunning_929 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj720.methods["isRunning:="] = writer_kitty_isRunning_929;
          reader_kitty_isRunning_929.confidential = true;
          writer_kitty_isRunning_929.confidential = true;
          lineNumber = 249;
          moduleName = "kitty";
          lineNumber = 247
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool928)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["mctx"] = undefined;
          var reader_kitty_mctx_930 = function() {
            return this.data["mctx"];
          }
          obj720.methods["mctx"] = reader_kitty_mctx_930;
          obj720.data["mctx"] = undefined;
          var writer_kitty_mctx_930 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj720.methods["mctx:="] = writer_kitty_mctx_930;
          reader_kitty_mctx_930.confidential = true;
          writer_kitty_mctx_930.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          obj720.data["ent"] = undefined;
          var reader_kitty_ent_931 = function() {
            return this.data["ent"];
          }
          obj720.methods["ent"] = reader_kitty_ent_931;
          obj720.data["ent"] = undefined;
          var writer_kitty_ent_931 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj720.methods["ent:="] = writer_kitty_ent_931;
          reader_kitty_ent_931.confidential = true;
          writer_kitty_ent_931.confidential = true;
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 254
          var block932 = Grace_allocObject();
          block932.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block932.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block932.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block932.methods["match"] = GraceBlock_match;
          block932.methods["prefix?"] = GraceBlock_lift;
          block932.receiver = this;
          block932.className = 'block<kitty:254>';
          block932.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj720.data["updateAction"] = block932;
          var reader_kitty_updateAction_933 = function() {
            return this.data["updateAction"];
          }
          obj720.methods["updateAction"] = reader_kitty_updateAction_933;
          obj720.data["updateAction"] = block932;
          var writer_kitty_updateAction_933 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj720.methods["updateAction:="] = writer_kitty_updateAction_933;
          reader_kitty_updateAction_933.confidential = true;
          writer_kitty_updateAction_933.confidential = true;
          lineNumber = 254;
          moduleName = "kitty";
          lineNumber = 253
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block932)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 256
          var block934 = Grace_allocObject();
          block934.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block934.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block934.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block934.methods["match"] = GraceBlock_match;
          block934.methods["prefix?"] = GraceBlock_lift;
          block934.receiver = this;
          block934.className = 'block<kitty:256>';
          block934.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj720.data["destroyAction"] = block934;
          var reader_kitty_destroyAction_935 = function() {
            return this.data["destroyAction"];
          }
          obj720.methods["destroyAction"] = reader_kitty_destroyAction_935;
          obj720.data["destroyAction"] = block934;
          var writer_kitty_destroyAction_935 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj720.methods["destroyAction:="] = writer_kitty_destroyAction_935;
          reader_kitty_destroyAction_935.confidential = true;
          writer_kitty_destroyAction_935.confidential = true;
          lineNumber = 256;
          moduleName = "kitty";
          lineNumber = 254
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block934)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj720.mutable = true;
          sourceObject = obj720;
          lineNumber = 256
          onSelf = true;
          var call936 = callmethod(this, "init", [0]);
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          sourceObject = obj720;
          superDepth = origSuperDepth;
        }
        obj_init_720.apply(inheritingObject, []);
        return obj720
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj499.methods["new()object"] = func719;
    var func937 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 225
        var string938 = new GraceString("class KittyWorld");
        return string938
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func937.paramCounts = [
    ];
    func937.variableArities = [
    ];
    obj499.methods["asDebugString"] = func937;
    func937.definitionLine = 225;
    func937.definitionModule = "kitty";
    sourceObject = obj499;
    sourceObject = obj499;
    superDepth = origSuperDepth;
  }
  obj_init_499.apply(obj499, []);
  var var_KittyWorld = obj499;
  lineNumber = 400
  lineNumber = 409
  lineNumber = 424
  lineNumber = 428
  lineNumber = 433
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n height\n getTag\n elements\n width\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:World()width()height:\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n canvasHeight\n canvasWidth\n updateAction\n entities:=\n stop\n isInit:=\n backingCanvas\n height:=\n moveWidthMultipler\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n mctx\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n tag:=\n backgroundColour\n background:=\n updateAction:=\n tag\n destroyAction:=\n background\n backingCanvas:=\n canvas:=\n destroyAction\n entities\n start\n init\n tick\n setDestroyAction\n document:=\n isRunning\n ent:=\n canvas\n getContext\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n getRotation\n setDestroyAction\n posX:=\n setLocation\n turn\n posX\n posY\n setMouseDownAction\n draw\n mouseDownAction:=\n rotation\n image\n strafe\n setUpdateAction\n updateAction\n tag:=\n getX\n createImage\n updateAction:=\n getY\n tag\n destroyAction:=\n mouseDown\n posY:=\n setX\n setY\n rotation:=\n destroyAction\n kill\n setImage\n tick\n move\n image:=\n mouseDownAction\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseDrag\n onMouseEnter\n onMouseClick\n KittyWorld\n World()width()height\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n height\n getTag\n elements\n width\nfresh:Entity()x()y:\n awake\n getRotation\n setDestroyAction\n posX:=\n setLocation\n turn\n posX\n posY\n setMouseDownAction\n draw\n mouseDownAction:=\n tick\n image\n strafe\n setUpdateAction\n updateAction\n tag:=\n updateAction:=\n createImage\n getX\n getY\n tag\n destroyAction:=\n mouseDown\n posY:=\n setX\n setY\n rotation:=\n destroyAction\n kill\n setImage\n rotation\n move\n image:=\n mouseDownAction\nmethods-of:KittyWorld.new:\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n canvasHeight\n canvasWidth\n updateAction\n entities:=\n stop\n isInit:=\n backingCanvas\n init\n moveWidthMultipler\n isInit\n mctx:=\n isRunning:=\n width:=\n height\n mctx\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n tag:=\n backgroundColour\n background:=\n updateAction:=\n tag\n destroyAction:=\n background\n backingCanvas:=\n destroyAction\n canvas:=\n getContext\n start\n height:=\n tick\n setDestroyAction\n document:=\n isRunning\n ent:=\n canvas\n entities\nconstructors-of:KittyEntity:\n new\n";
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
    "    var mouseDownAction := {}",
    "",
    "    var image",
    "",
    "    awake",
    "",
    "    // ===== ACTIONS ===== //",
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
    "    // ===== MOUSE ACTIONS ===== //",
    "    method mouseDown {",
    "        mouseDownAction.apply",
    "    }",
    "",
    "    // ===== MOVEMENT ===== //",
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
    "    // ===== DRAWING ===== //",
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
    "    // ===== SETTERS ===== //",
    "    method setUpdateAction(action') {",
    "        updateAction := action'",
    "    }",
    "",
    "    method setDestroyAction(action') {",
    "        destroyAction := action'",
    "    }",
    "",
    "    method setMouseDownAction(action') {",
    "        mouseDownAction := action'",
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
    "method onMouseDrag(action') {",
    "    kitten.setMouseDragAction(action')",
    "}",
    "",
    "method onMouseEnter(action') {",
    "    kitten.setMouseEnterAction(action');",
    "}",
    "",
    "method onMouseClick(action') {",
    "    kitten.setMouseClickAction(action');",
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
    "            // if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "            //     ev.preventDefault",
    "            //     stop",
    "            // }",
    "            ",
    "            // Mouse actions",
    "            for (entities) do { entity->",
    "                entity.mouseDown",
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
