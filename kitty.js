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
    var var_actions__39__ = arguments[curarg];
    curarg++;
    if (argcv[3] !=  func8.paramCounts[3])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 4 (actions)"));
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
        sourceObject = obj9;
        lineNumber = 147
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
  func8.definitionLine = 144;
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
      obj14.definitionLine = 145;
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
        lineNumber = 146
        var call16 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj14.superobj = call16;
        obj14._value = call16._value;
        sourceObject = obj14;
        lineNumber = 147
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
  lineNumber = 153
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
      lineNumber = 154
      var call19 = callmethod(var_newborn,"setAction", [1], var_action__39__);
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
  func18.definitionLine = 153;
  func18.definitionModule = "kitty";
  lineNumber = 157
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
      lineNumber = 158
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
  func20.definitionLine = 157;
  func20.definitionModule = "kitty";
  lineNumber = 161
  var func22 = function(argcv) {
    var curarg = 1;
    var var_distance__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 162
      var call23 = callmethod(var_newborn,"strafe", [1], var_distance__39__);
      return call23
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func22.paramCounts = [
    1,
  ];
  func22.variableArities = [
    false,
  ];
  this.methods["strafe"] = func22;
  func22.definitionLine = 161;
  func22.definitionModule = "kitty";
  lineNumber = 165
  var func24 = function(argcv) {
    var curarg = 1;
    var var_angle__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 166
      var call25 = callmethod(var_newborn,"turn", [1], var_angle__39__);
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
  this.methods["turn"] = func24;
  func24.definitionLine = 165;
  func24.definitionModule = "kitty";
  lineNumber = 173
  var func26 = function(argcv) {
    var curarg = 1;
    var var_image__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 174
      var call27 = callmethod(var_newborn,"setImage", [1], var_image__39__);
      return call27
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func26.paramTypes = [];
  func26.paramTypes.push([]);
  func26.paramCounts = [
    1,
  ];
  func26.variableArities = [
    false,
  ];
  this.methods["setImage"] = func26;
  func26.definitionLine = 173;
  func26.definitionModule = "kitty";
  lineNumber = 177
  var func28 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func28.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 178
      var call29 = callmethod(var_newborn,"createImage", [1], var_url__39__);
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
  this.methods["createImage"] = func28;
  func28.definitionLine = 177;
  func28.definitionModule = "kitty";
  lineNumber = 181
  var func30 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 182
      var call31 = callmethod(var_newborn,"getY", [0]);
      var call32 = callmethod(var_newborn,"setLocation", [2], var_x__39__, call31);
      return call32
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
  this.methods["setX"] = func30;
  func30.definitionLine = 181;
  func30.definitionModule = "kitty";
  lineNumber = 185
  var func33 = function(argcv) {
    var curarg = 1;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func33.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 186
      var call34 = callmethod(var_newborn,"getX", [0]);
      var call35 = callmethod(var_newborn,"setLocation", [2], call34, var_y__39__);
      return call35
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func33.paramCounts = [
    1,
  ];
  func33.variableArities = [
    false,
  ];
  this.methods["setY"] = func33;
  func33.definitionLine = 185;
  func33.definitionModule = "kitty";
  lineNumber = 189
  var func36 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 191
      lineNumber = 190
      var call37 = callmethod(var_newborn,"getX", [0]);
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
  this.methods["getX"] = func36;
  func36.definitionLine = 189;
  func36.definitionModule = "kitty";
  lineNumber = 193
  var func38 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func38.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 195
      lineNumber = 194
      var call39 = callmethod(var_newborn,"getY", [0]);
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
    0,
  ];
  func38.variableArities = [
    false,
  ];
  this.methods["getY"] = func38;
  func38.definitionLine = 193;
  func38.definitionModule = "kitty";
  lineNumber = 350
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 351
      var obj41 = Grace_allocObject();
      obj41.definitionModule = "kitty";
      obj41.definitionLine = 351;
      obj41.outer = this;
      var reader_kitty_outer_42 = function() {
        return this.outer;
      }
      obj41.methods["outer"] = reader_kitty_outer_42;
      function obj_init_41() {
        var origSuperDepth = superDepth;
        superDepth = obj41;
        obj41.annotations = [];
        sourceObject = obj41;
        lineNumber = 352
        var call43 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj41.superobj = call43;
        obj41._value = call43._value;
        superDepth = origSuperDepth;
      }
      obj_init_41.apply(obj41, []);
      return obj41
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
  this.methods["World"] = func40;
  func40.definitionLine = 350;
  func40.definitionModule = "kitty";
  var func44 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj45 = Grace_allocObject();
      obj45.definitionModule = "kitty";
      obj45.definitionLine = 351;
      var inho45 = inheritingObject;
      while (inho45.superobj) inho45 = inho45.superobj;
      inho45.superobj = obj45;
      obj45.data = inheritingObject.data;
      obj45.outer = this;
      var reader_kitty_outer_46 = function() {
        return this.outer;
      }
      obj45.methods["outer"] = reader_kitty_outer_46;
      function obj_init_45() {
        var origSuperDepth = superDepth;
        superDepth = obj45;
        obj45.annotations = [];
        sourceObject = obj45;
        var call47 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj45.superobj = call47;
        obj45._value = call47._value;
        superDepth = origSuperDepth;
      }
      obj_init_45.apply(inheritingObject, []);
      return obj45
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func44;
  lineNumber = 359
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 361
      var string49 = new GraceString("CHECKING...");
      var call50 = Grace_print(string49);
      lineNumber = 368
      var if51 = var_done;
      lineNumber = 363
      var call52 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call52)) {
        lineNumber = 364
        var string53 = new GraceString("NO WORLD!!");
        var call54 = Grace_print(string53);
        lineNumber = 366
        return var_done
      }
      lineNumber = 368
      var string55 = new GraceString("STARTING...");
      var call56 = Grace_print(string55);
      lineNumber = 371
      var call57 = callmethod(var_m__95__world,"start", [0]);
      return call57
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
  this.methods["start"] = func48;
  func48.definitionLine = 359;
  func48.definitionModule = "kitty";
  lineNumber = 374
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 375
      var call59 = callmethod(var_m__95__world,"stop", [0]);
      return call59
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
  this.methods["stop"] = func58;
  func58.definitionLine = 374;
  func58.definitionModule = "kitty";
  lineNumber = 378
  var func60 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func60.paramCounts[0])
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
      var bool61 = new GraceBoolean(true)
      var_worldSet = bool61;
      return bool61
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func60.paramTypes = [];
  func60.paramTypes.push([]);
  func60.paramCounts = [
    1,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func60;
  func60.definitionLine = 378;
  func60.definitionModule = "kitty";
  lineNumber = 383
  var func62 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func62.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 384
      onSelf = true;
      var call63 = callmethod(this, "start", [0]);
      return call63
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
  this.methods["atModuleEnd"] = func62;
  func62.definitionLine = 383;
  func62.definitionModule = "kitty";
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
  var call64 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call64;
  this.data = call64.data;
  this._value = call64._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 375
  var func65 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func65.paramCounts[0])
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
  func65.paramCounts = [
    0,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["m_world"] = func65;
  func65.definitionLine = 375;
  func65.definitionModule = "kitty";
  lineNumber = 375
  var func66 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    1,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func66;
  func66.definitionLine = 375;
  func66.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool67 = new GraceBoolean(false)
  var var_worldSet = bool67;
  lineNumber = 375
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func68;
  func68.definitionLine = 375;
  func68.definitionModule = "kitty";
  lineNumber = 375
  var func69 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    1,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func69;
  func69.definitionLine = 375;
  func69.definitionModule = "kitty";
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
  var func70 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    0,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func70;
  func70.definitionLine = 375;
  func70.definitionModule = "kitty";
  lineNumber = 375
  var func71 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func71.paramCounts[0])
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
  func71.paramCounts = [
    1,
  ];
  func71.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func71;
  func71.definitionLine = 375;
  func71.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 375
  var func72 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func72.paramCounts[0])
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
  func72.paramCounts = [
    0,
  ];
  func72.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func72;
  func72.definitionLine = 375;
  func72.definitionModule = "kitty";
  lineNumber = 375
  var func73 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func73.paramCounts[0])
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
  func73.paramCounts = [
    1,
  ];
  func73.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func73;
  func73.definitionLine = 375;
  func73.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 375
  var func74 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func74.paramCounts[0])
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
  func74.paramCounts = [
    0,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func74;
  func74.definitionLine = 375;
  func74.definitionModule = "kitty";
  lineNumber = 375
  var func75 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func75.paramCounts[0])
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
  func75.paramCounts = [
    1,
  ];
  func75.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func75;
  func75.definitionLine = 375;
  func75.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
  lineNumber = 17
  var call76 = callmethod(var_dom,"window", [0]);
  var call77 = callmethod(call76,"Math", [0]);
  var var_math = call77;
  var func78 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func78.paramCounts[0])
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
  func78.paramCounts = [
    0,
  ];
  func78.variableArities = [
    false,
  ];
  this.methods["math"] = func78;
  func78.definitionLine = 17;
  func78.definitionModule = "kitty";
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
  var func79 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func79.paramCounts[0])
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
  func79.paramCounts = [
    0,
  ];
  func79.variableArities = [
    false,
  ];
  this.methods["newborn"] = func79;
  func79.definitionLine = 17;
  func79.definitionModule = "kitty";
  lineNumber = 17
  var func80 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func80.paramCounts[0])
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
  func80.paramCounts = [
    1,
  ];
  func80.variableArities = [
    false,
  ];
  this.methods["newborn:="] = func80;
  func80.definitionLine = 17;
  func80.definitionModule = "kitty";
  lineNumber = 25
  var func81 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func81.paramCounts[0])
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
  func81.paramCounts = [
    0,
  ];
  func81.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func81;
  func81.definitionLine = 25;
  func81.definitionModule = "kitty";
  var obj82 = Grace_allocObject();
  obj82.definitionModule = "kitty";
  obj82.definitionLine = 25;
  obj82.outer = this;
  var reader_kitty_outer_83 = function() {
    return this.outer;
  }
  obj82.methods["outer"] = reader_kitty_outer_83;
  function obj_init_82() {
    var origSuperDepth = superDepth;
    superDepth = obj82;
    obj82.annotations = [];
    var func84 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func84.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj85 = Grace_allocObject();
        obj85.definitionModule = "kitty";
        obj85.definitionLine = 25;
        obj85.outer = this;
        var reader_kitty_outer_86 = function() {
          return this.outer;
        }
        obj85.methods["outer"] = reader_kitty_outer_86;
        function obj_init_85() {
          var origSuperDepth = superDepth;
          superDepth = obj85;
          obj85.annotations = [];
          var func87 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func87.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call88 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call89 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod93 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient95 = callmethod(prod93, "/", [1], new GraceNum(180));
              var call96 = callmethod(var_ctx,"rotate", [1], quotient95);
              lineNumber = 44
              onSelf = true;
              var call97 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block98 = Grace_allocObject();
              block98.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block98.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block98.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block98.methods["match"] = GraceBlock_match;
              block98.methods["prefix?"] = GraceBlock_lift;
              block98.receiver = this;
              block98.className = 'block<kitty:47>';
              block98.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call100 = callmethod(this, "width", [0]);
                var call101 = callmethod(call100,"prefix-", [0]);
                var quotient103 = callmethod(call101, "/", [1], new GraceNum(2));
                onSelf = true;
                var call105 = callmethod(this, "height", [0]);
                var call106 = callmethod(call105,"prefix-", [0]);
                var quotient108 = callmethod(call106, "/", [1], new GraceNum(2));
                onSelf = true;
                var call109 = callmethod(this, "width", [0]);
                onSelf = true;
                var call110 = callmethod(this, "height", [0]);
                var call111 = callmethod(var_ctx,"drawImage", [5], var_element, quotient103, quotient108, call109, call110);
                return call111;
              };
              var call112 = callmethod(Grace_prelude,"for()do", [1, 1], call97, block98);
              lineNumber = 47
              var call113 = callmethod(var_ctx,"restore", [0]);
              return call113
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func87.paramCounts = [
            4,
          ];
          func87.variableArities = [
            false,
          ];
          obj85.methods["draw"] = func87;
          func87.definitionLine = 38;
          func87.definitionModule = "kitty";
          var func114 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func114.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call115 = callmethod(this, "imgTag", [0]);
              return call115
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func114.paramCounts = [
            0,
          ];
          func114.variableArities = [
            false,
          ];
          obj85.methods["getTag"] = func114;
          func114.definitionLine = 51;
          func114.definitionModule = "kitty";
          var func116 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func116.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call117 = callmethod(this, "elements", [0]);
              var call118 = callmethod(call117,"push", [1], var_imgTag__39__);
              return call118
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func116.paramCounts = [
            1,
          ];
          func116.variableArities = [
            false,
          ];
          obj85.methods["drawImage"] = func116;
          func116.definitionLine = 55;
          func116.definitionModule = "kitty";
          sourceObject = obj85;
          lineNumber = 29
          var string119 = new GraceString("img");
          var call120 = callmethod(var_dom,"document", [0]);
          var call121 = callmethod(call120,"createElement", [1], string119);
          obj85.data["imgTag"] = call121;
          var reader_kitty_imgTag_122 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_122.def = true;
          reader_kitty_imgTag_122.confidential = true;
          obj85.methods["imgTag"] = reader_kitty_imgTag_122;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call121)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj85;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call123 = callmethod(this, "imgTag", [0]);
          var call124 = callmethod(call123,"src:=", [1], var_url__39__);
          sourceObject = obj85;
          lineNumber = 32
          var call125 = callmethod(var_collections,"list", [0]);
          var call126 = callmethod(call125,"new", [0]);
          obj85.data["elements"] = call126;
          var reader_kitty_elements_127 = function() {
            return this.data["elements"];
          }
          obj85.methods["elements"] = reader_kitty_elements_127;
          obj85.data["elements"] = call126;
          var writer_kitty_elements_127 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj85.methods["elements:="] = writer_kitty_elements_127;
          reader_kitty_elements_127.confidential = true;
          writer_kitty_elements_127.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call126)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj85.mutable = true;
          sourceObject = obj85;
          lineNumber = 33
          onSelf = true;
          var call128 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call129 = callmethod(this, "elements", [0]);
          var call130 = callmethod(call129,"push", [1], call128);
          sourceObject = obj85;
          lineNumber = 35
          obj85.data["height"] = var_height__39__;
          var reader_kitty_height_131 = function() {
            return this.data["height"];
          }
          obj85.methods["height"] = reader_kitty_height_131;
          obj85.data["height"] = var_height__39__;
          var writer_kitty_height_131 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj85.methods["height:="] = writer_kitty_height_131;
          reader_kitty_height_131.confidential = true;
          writer_kitty_height_131.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj85.mutable = true;
          sourceObject = obj85;
          lineNumber = 36
          obj85.data["width"] = var_width__39__;
          var reader_kitty_width_132 = function() {
            return this.data["width"];
          }
          obj85.methods["width"] = reader_kitty_width_132;
          obj85.data["width"] = var_width__39__;
          var writer_kitty_width_132 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj85.methods["width:="] = writer_kitty_width_132;
          reader_kitty_width_132.confidential = true;
          writer_kitty_width_132.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj85.mutable = true;
          sourceObject = obj85;
          sourceObject = obj85;
          sourceObject = obj85;
          superDepth = origSuperDepth;
        }
        obj_init_85.apply(obj85, []);
        return obj85
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func84.paramCounts = [
      3,
    ];
    func84.variableArities = [
      false,
    ];
    obj82.methods["new"] = func84;
    func84.definitionLine = 25;
    func84.definitionModule = "kitty";
    var func133 = function(argcv) {
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
        var obj134 = Grace_allocObject();
        obj134.definitionModule = "kitty";
        obj134.definitionLine = 25;
        var inho134 = inheritingObject;
        while (inho134.superobj) inho134 = inho134.superobj;
        inho134.superobj = obj134;
        obj134.data = inheritingObject.data;
        obj134.outer = this;
        var reader_kitty_outer_135 = function() {
          return this.outer;
        }
        obj134.methods["outer"] = reader_kitty_outer_135;
        function obj_init_134() {
          var origSuperDepth = superDepth;
          superDepth = obj134;
          obj134.annotations = [];
          var func136 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func136.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call137 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call138 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod142 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient144 = callmethod(prod142, "/", [1], new GraceNum(180));
              var call145 = callmethod(var_ctx,"rotate", [1], quotient144);
              lineNumber = 44
              onSelf = true;
              var call146 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block147 = Grace_allocObject();
              block147.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block147.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block147.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block147.methods["match"] = GraceBlock_match;
              block147.methods["prefix?"] = GraceBlock_lift;
              block147.receiver = this;
              block147.className = 'block<kitty:47>';
              block147.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call149 = callmethod(this, "width", [0]);
                var call150 = callmethod(call149,"prefix-", [0]);
                var quotient152 = callmethod(call150, "/", [1], new GraceNum(2));
                onSelf = true;
                var call154 = callmethod(this, "height", [0]);
                var call155 = callmethod(call154,"prefix-", [0]);
                var quotient157 = callmethod(call155, "/", [1], new GraceNum(2));
                onSelf = true;
                var call158 = callmethod(this, "width", [0]);
                onSelf = true;
                var call159 = callmethod(this, "height", [0]);
                var call160 = callmethod(var_ctx,"drawImage", [5], var_element, quotient152, quotient157, call158, call159);
                return call160;
              };
              var call161 = callmethod(Grace_prelude,"for()do", [1, 1], call146, block147);
              lineNumber = 47
              var call162 = callmethod(var_ctx,"restore", [0]);
              return call162
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func136.paramCounts = [
            4,
          ];
          func136.variableArities = [
            false,
          ];
          obj134.methods["draw"] = func136;
          func136.definitionLine = 38;
          func136.definitionModule = "kitty";
          var func163 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func163.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call164 = callmethod(this, "imgTag", [0]);
              return call164
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
          obj134.methods["getTag"] = func163;
          func163.definitionLine = 51;
          func163.definitionModule = "kitty";
          var func165 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call166 = callmethod(this, "elements", [0]);
              var call167 = callmethod(call166,"push", [1], var_imgTag__39__);
              return call167
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
          ];
          func165.variableArities = [
            false,
          ];
          obj134.methods["drawImage"] = func165;
          func165.definitionLine = 55;
          func165.definitionModule = "kitty";
          sourceObject = obj134;
          lineNumber = 29
          var string168 = new GraceString("img");
          var call169 = callmethod(var_dom,"document", [0]);
          var call170 = callmethod(call169,"createElement", [1], string168);
          obj134.data["imgTag"] = call170;
          var reader_kitty_imgTag_171 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_171.def = true;
          reader_kitty_imgTag_171.confidential = true;
          obj134.methods["imgTag"] = reader_kitty_imgTag_171;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call170)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj134;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call172 = callmethod(this, "imgTag", [0]);
          var call173 = callmethod(call172,"src:=", [1], var_url__39__);
          sourceObject = obj134;
          lineNumber = 32
          var call174 = callmethod(var_collections,"list", [0]);
          var call175 = callmethod(call174,"new", [0]);
          obj134.data["elements"] = call175;
          var reader_kitty_elements_176 = function() {
            return this.data["elements"];
          }
          obj134.methods["elements"] = reader_kitty_elements_176;
          obj134.data["elements"] = call175;
          var writer_kitty_elements_176 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj134.methods["elements:="] = writer_kitty_elements_176;
          reader_kitty_elements_176.confidential = true;
          writer_kitty_elements_176.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call175)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 33
          onSelf = true;
          var call177 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call178 = callmethod(this, "elements", [0]);
          var call179 = callmethod(call178,"push", [1], call177);
          sourceObject = obj134;
          lineNumber = 35
          obj134.data["height"] = var_height__39__;
          var reader_kitty_height_180 = function() {
            return this.data["height"];
          }
          obj134.methods["height"] = reader_kitty_height_180;
          obj134.data["height"] = var_height__39__;
          var writer_kitty_height_180 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj134.methods["height:="] = writer_kitty_height_180;
          reader_kitty_height_180.confidential = true;
          writer_kitty_height_180.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 36
          obj134.data["width"] = var_width__39__;
          var reader_kitty_width_181 = function() {
            return this.data["width"];
          }
          obj134.methods["width"] = reader_kitty_width_181;
          obj134.data["width"] = var_width__39__;
          var writer_kitty_width_181 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj134.methods["width:="] = writer_kitty_width_181;
          reader_kitty_width_181.confidential = true;
          writer_kitty_width_181.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          superDepth = origSuperDepth;
        }
        obj_init_134.apply(inheritingObject, []);
        return obj134
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj82.methods["new()object"] = func133;
    var func182 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string183 = new GraceString("class KittyImage");
        return string183
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func182.paramCounts = [
    ];
    func182.variableArities = [
    ];
    obj82.methods["asDebugString"] = func182;
    func182.definitionLine = 25;
    func182.definitionModule = "kitty";
    sourceObject = obj82;
    sourceObject = obj82;
    superDepth = origSuperDepth;
  }
  obj_init_82.apply(obj82, []);
  var var_KittyImage = obj82;
  lineNumber = 62
  lineNumber = 69
  var func184 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func184.paramCounts[0])
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
  func184.paramCounts = [
    0,
  ];
  func184.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func184;
  func184.definitionLine = 69;
  func184.definitionModule = "kitty";
  var obj185 = Grace_allocObject();
  obj185.definitionModule = "kitty";
  obj185.definitionLine = 69;
  obj185.outer = this;
  var reader_kitty_outer_186 = function() {
    return this.outer;
  }
  obj185.methods["outer"] = reader_kitty_outer_186;
  function obj_init_185() {
    var origSuperDepth = superDepth;
    superDepth = obj185;
    obj185.annotations = [];
    var func187 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func187.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj188 = Grace_allocObject();
        obj188.definitionModule = "kitty";
        obj188.definitionLine = 69;
        obj188.outer = this;
        var reader_kitty_outer_189 = function() {
          return this.outer;
        }
        obj188.methods["outer"] = reader_kitty_outer_189;
        function obj_init_188() {
          var origSuperDepth = superDepth;
          superDepth = obj188;
          obj188.annotations = [];
          var func190 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func190.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string191 = new GraceString("realyee.png");
              onSelf = true;
              var call192 = callmethod(this, "createImage", [1], string191);
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
          func190.paramCounts = [
            0,
          ];
          func190.variableArities = [
            false,
          ];
          obj188.methods["awake"] = func190;
          func190.definitionLine = 84;
          func190.definitionModule = "kitty";
          var func193 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func193.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call194 = callmethod(this, "action", [0]);
              var call195 = callmethod(call194,"apply", [0]);
              return call195
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func193.paramCounts = [
            0,
          ];
          func193.variableArities = [
            false,
          ];
          obj188.methods["update"] = func193;
          func193.definitionLine = 89;
          func193.definitionModule = "kitty";
          var func196 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func196.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call199 = callmethod(this, "rotation", [0]);
              var prod201 = callmethod(call199, "*", [1], new GraceNum(3.14159));
              var quotient203 = callmethod(prod201, "/", [1], new GraceNum(180));
              var call204 = callmethod(var_math,"cos", [1], quotient203);
              var prod207 = callmethod(var_distance, "*", [1], call204);
              onSelf = true;
              var call209 = callmethod(this, "posX", [0]);
              var opresult211 = callmethod(call209, "+", [1], prod207);
              onSelf = true;
              var call212 = callmethod(this, "posX:=", [1], opresult211);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call215 = callmethod(this, "rotation", [0]);
              var prod217 = callmethod(call215, "*", [1], new GraceNum(3.14159));
              var quotient219 = callmethod(prod217, "/", [1], new GraceNum(180));
              var call220 = callmethod(var_math,"sin", [1], quotient219);
              var prod223 = callmethod(var_distance, "*", [1], call220);
              onSelf = true;
              var call225 = callmethod(this, "posY", [0]);
              var opresult227 = callmethod(call225, "+", [1], prod223);
              onSelf = true;
              var call228 = callmethod(this, "posY:=", [1], opresult227);
              return call228
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func196.paramCounts = [
            1,
          ];
          func196.variableArities = [
            false,
          ];
          obj188.methods["move"] = func196;
          func196.definitionLine = 93;
          func196.definitionModule = "kitty";
          var func229 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func229.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call232 = callmethod(this, "rotation", [0]);
              var opresult235 = callmethod(new GraceNum(90), "+", [1], call232);
              var prod237 = callmethod(opresult235, "*", [1], new GraceNum(3.14159));
              var quotient239 = callmethod(prod237, "/", [1], new GraceNum(180));
              var call240 = callmethod(var_math,"cos", [1], quotient239);
              var prod243 = callmethod(var_distance, "*", [1], call240);
              onSelf = true;
              var call245 = callmethod(this, "posX", [0]);
              var opresult247 = callmethod(call245, "+", [1], prod243);
              onSelf = true;
              var call248 = callmethod(this, "posX:=", [1], opresult247);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call251 = callmethod(this, "rotation", [0]);
              var opresult254 = callmethod(new GraceNum(90), "+", [1], call251);
              var prod256 = callmethod(opresult254, "*", [1], new GraceNum(3.14159));
              var quotient258 = callmethod(prod256, "/", [1], new GraceNum(180));
              var call259 = callmethod(var_math,"sin", [1], quotient258);
              var prod262 = callmethod(var_distance, "*", [1], call259);
              onSelf = true;
              var call264 = callmethod(this, "posY", [0]);
              var opresult266 = callmethod(call264, "+", [1], prod262);
              onSelf = true;
              var call267 = callmethod(this, "posY:=", [1], opresult266);
              return call267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func229.paramCounts = [
            1,
          ];
          func229.variableArities = [
            false,
          ];
          obj188.methods["strafe"] = func229;
          func229.definitionLine = 98;
          func229.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
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
              var call270 = callmethod(this, "rotation", [0]);
              var opresult272 = callmethod(call270, "+", [1], var_angle);
              onSelf = true;
              var call273 = callmethod(this, "rotation:=", [1], opresult272);
              return call273
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
          obj188.methods["turn"] = func268;
          func268.definitionLine = 103;
          func268.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call275 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call276 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call277 = callmethod(this, "posY", [0]);
              var call278 = callmethod(var_ctx,"translate", [2], call276, call277);
              lineNumber = 110
              onSelf = true;
              var call279 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call280 = callmethod(this, "image", [0]);
              var call281 = callmethod(call280,"draw", [4], var_ctx, var_dx, var_dy, call279);
              lineNumber = 111
              var call282 = callmethod(var_ctx,"restore", [0]);
              return call282
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func274.paramCounts = [
            3,
          ];
          func274.variableArities = [
            false,
          ];
          obj188.methods["draw"] = func274;
          func274.definitionLine = 107;
          func274.definitionModule = "kitty";
          var func283 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call284 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call285 = callmethod(call284, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call286 = callmethod(call285, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call287 = callmethod(this, "image:=", [1], call286);
              return call287
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func283.paramCounts = [
            1,
          ];
          func283.variableArities = [
            false,
          ];
          obj188.methods["createImage"] = func283;
          func283.definitionLine = 114;
          func283.definitionModule = "kitty";
          var func288 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func288.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call289 = callmethod(this, "image:=", [1], var_image__39__);
              return call289
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func288.paramTypes = [];
          func288.paramTypes.push([]);
          func288.paramCounts = [
            1,
          ];
          func288.variableArities = [
            false,
          ];
          obj188.methods["setImage"] = func288;
          func288.definitionLine = 118;
          func288.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call291 = callmethod(this, "action:=", [1], var_action__39__);
              return call291
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
          obj188.methods["setAction"] = func290;
          func290.definitionLine = 122;
          func290.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call293 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call294 = callmethod(this, "posY:=", [1], var_y);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            2,
          ];
          func292.variableArities = [
            false,
          ];
          obj188.methods["setLocation"] = func292;
          func292.definitionLine = 126;
          func292.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call296 = callmethod(this, "posX", [0]);
              return call296
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
          obj188.methods["getX"] = func295;
          func295.definitionLine = 131;
          func295.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call298 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func297.variableArities = [
            false,
          ];
          obj188.methods["getY"] = func297;
          func297.definitionLine = 135;
          func297.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call300 = callmethod(this, "rotation", [0]);
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
            0,
          ];
          func299.variableArities = [
            false,
          ];
          obj188.methods["getRotation"] = func299;
          func299.definitionLine = 139;
          func299.definitionModule = "kitty";
          sourceObject = obj188;
          lineNumber = 73
          obj188.data["tag"] = var_tag__39__;
          var reader_kitty_tag_301 = function() {
            return this.data["tag"];
          }
          obj188.methods["tag"] = reader_kitty_tag_301;
          obj188.data["tag"] = var_tag__39__;
          var writer_kitty_tag_301 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj188.methods["tag:="] = writer_kitty_tag_301;
          reader_kitty_tag_301.confidential = true;
          writer_kitty_tag_301.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj188.mutable = true;
          sourceObject = obj188;
          lineNumber = 74
          obj188.data["posX"] = var_x__39__;
          var reader_kitty_posX_302 = function() {
            return this.data["posX"];
          }
          obj188.methods["posX"] = reader_kitty_posX_302;
          obj188.data["posX"] = var_x__39__;
          var writer_kitty_posX_302 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj188.methods["posX:="] = writer_kitty_posX_302;
          reader_kitty_posX_302.confidential = true;
          writer_kitty_posX_302.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj188.mutable = true;
          sourceObject = obj188;
          lineNumber = 75
          obj188.data["posY"] = var_y__39__;
          var reader_kitty_posY_303 = function() {
            return this.data["posY"];
          }
          obj188.methods["posY"] = reader_kitty_posY_303;
          obj188.data["posY"] = var_y__39__;
          var writer_kitty_posY_303 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj188.methods["posY:="] = writer_kitty_posY_303;
          reader_kitty_posY_303.confidential = true;
          writer_kitty_posY_303.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj188.mutable = true;
          sourceObject = obj188;
          lineNumber = 76
          obj188.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_304 = function() {
            return this.data["rotation"];
          }
          obj188.methods["rotation"] = reader_kitty_rotation_304;
          obj188.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_304 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj188.methods["rotation:="] = writer_kitty_rotation_304;
          reader_kitty_rotation_304.confidential = true;
          writer_kitty_rotation_304.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj188.mutable = true;
          sourceObject = obj188;
          lineNumber = 79
          var block305 = Grace_allocObject();
          block305.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block305.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block305.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block305.methods["match"] = GraceBlock_match;
          block305.methods["prefix?"] = GraceBlock_lift;
          block305.receiver = this;
          block305.className = 'block<kitty:79>';
          block305.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj188.data["action"] = block305;
          var reader_kitty_action_306 = function() {
            return this.data["action"];
          }
          obj188.methods["action"] = reader_kitty_action_306;
          obj188.data["action"] = block305;
          var writer_kitty_action_306 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj188.methods["action:="] = writer_kitty_action_306;
          reader_kitty_action_306.confidential = true;
          writer_kitty_action_306.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block305)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj188.mutable = true;
          sourceObject = obj188;
          obj188.data["image"] = undefined;
          var reader_kitty_image_307 = function() {
            return this.data["image"];
          }
          obj188.methods["image"] = reader_kitty_image_307;
          obj188.data["image"] = undefined;
          var writer_kitty_image_307 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj188.methods["image:="] = writer_kitty_image_307;
          reader_kitty_image_307.confidential = true;
          writer_kitty_image_307.confidential = true;
          obj188.mutable = true;
          sourceObject = obj188;
          lineNumber = 81
          onSelf = true;
          var call308 = callmethod(this, "awake", [0]);
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          sourceObject = obj188;
          superDepth = origSuperDepth;
        }
        obj_init_188.apply(obj188, []);
        return obj188
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func187.paramCounts = [
      3,
    ];
    func187.variableArities = [
      false,
    ];
    obj185.methods["new"] = func187;
    func187.definitionLine = 69;
    func187.definitionModule = "kitty";
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
        obj310.definitionLine = 69;
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
              lineNumber = 85
              var string313 = new GraceString("realyee.png");
              onSelf = true;
              var call314 = callmethod(this, "createImage", [1], string313);
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
          func312.paramCounts = [
            0,
          ];
          func312.variableArities = [
            false,
          ];
          obj310.methods["awake"] = func312;
          func312.definitionLine = 84;
          func312.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call316 = callmethod(this, "action", [0]);
              var call317 = callmethod(call316,"apply", [0]);
              return call317
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
          obj310.methods["update"] = func315;
          func315.definitionLine = 89;
          func315.definitionModule = "kitty";
          var func318 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call321 = callmethod(this, "rotation", [0]);
              var prod323 = callmethod(call321, "*", [1], new GraceNum(3.14159));
              var quotient325 = callmethod(prod323, "/", [1], new GraceNum(180));
              var call326 = callmethod(var_math,"cos", [1], quotient325);
              var prod329 = callmethod(var_distance, "*", [1], call326);
              onSelf = true;
              var call331 = callmethod(this, "posX", [0]);
              var opresult333 = callmethod(call331, "+", [1], prod329);
              onSelf = true;
              var call334 = callmethod(this, "posX:=", [1], opresult333);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call337 = callmethod(this, "rotation", [0]);
              var prod339 = callmethod(call337, "*", [1], new GraceNum(3.14159));
              var quotient341 = callmethod(prod339, "/", [1], new GraceNum(180));
              var call342 = callmethod(var_math,"sin", [1], quotient341);
              var prod345 = callmethod(var_distance, "*", [1], call342);
              onSelf = true;
              var call347 = callmethod(this, "posY", [0]);
              var opresult349 = callmethod(call347, "+", [1], prod345);
              onSelf = true;
              var call350 = callmethod(this, "posY:=", [1], opresult349);
              return call350
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func318.paramCounts = [
            1,
          ];
          func318.variableArities = [
            false,
          ];
          obj310.methods["move"] = func318;
          func318.definitionLine = 93;
          func318.definitionModule = "kitty";
          var func351 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func351.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call354 = callmethod(this, "rotation", [0]);
              var opresult357 = callmethod(new GraceNum(90), "+", [1], call354);
              var prod359 = callmethod(opresult357, "*", [1], new GraceNum(3.14159));
              var quotient361 = callmethod(prod359, "/", [1], new GraceNum(180));
              var call362 = callmethod(var_math,"cos", [1], quotient361);
              var prod365 = callmethod(var_distance, "*", [1], call362);
              onSelf = true;
              var call367 = callmethod(this, "posX", [0]);
              var opresult369 = callmethod(call367, "+", [1], prod365);
              onSelf = true;
              var call370 = callmethod(this, "posX:=", [1], opresult369);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call373 = callmethod(this, "rotation", [0]);
              var opresult376 = callmethod(new GraceNum(90), "+", [1], call373);
              var prod378 = callmethod(opresult376, "*", [1], new GraceNum(3.14159));
              var quotient380 = callmethod(prod378, "/", [1], new GraceNum(180));
              var call381 = callmethod(var_math,"sin", [1], quotient380);
              var prod384 = callmethod(var_distance, "*", [1], call381);
              onSelf = true;
              var call386 = callmethod(this, "posY", [0]);
              var opresult388 = callmethod(call386, "+", [1], prod384);
              onSelf = true;
              var call389 = callmethod(this, "posY:=", [1], opresult388);
              return call389
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func351.paramCounts = [
            1,
          ];
          func351.variableArities = [
            false,
          ];
          obj310.methods["strafe"] = func351;
          func351.definitionLine = 98;
          func351.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func390.paramCounts[0])
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
              var call392 = callmethod(this, "rotation", [0]);
              var opresult394 = callmethod(call392, "+", [1], var_angle);
              onSelf = true;
              var call395 = callmethod(this, "rotation:=", [1], opresult394);
              return call395
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
          obj310.methods["turn"] = func390;
          func390.definitionLine = 103;
          func390.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call397 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call398 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call399 = callmethod(this, "posY", [0]);
              var call400 = callmethod(var_ctx,"translate", [2], call398, call399);
              lineNumber = 110
              onSelf = true;
              var call401 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call402 = callmethod(this, "image", [0]);
              var call403 = callmethod(call402,"draw", [4], var_ctx, var_dx, var_dy, call401);
              lineNumber = 111
              var call404 = callmethod(var_ctx,"restore", [0]);
              return call404
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func396.paramCounts = [
            3,
          ];
          func396.variableArities = [
            false,
          ];
          obj310.methods["draw"] = func396;
          func396.definitionLine = 107;
          func396.definitionModule = "kitty";
          var func405 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func405.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call406 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call407 = callmethod(call406, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call408 = callmethod(call407, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call409 = callmethod(this, "image:=", [1], call408);
              return call409
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func405.paramCounts = [
            1,
          ];
          func405.variableArities = [
            false,
          ];
          obj310.methods["createImage"] = func405;
          func405.definitionLine = 114;
          func405.definitionModule = "kitty";
          var func410 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func410.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call411 = callmethod(this, "image:=", [1], var_image__39__);
              return call411
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func410.paramTypes = [];
          func410.paramTypes.push([]);
          func410.paramCounts = [
            1,
          ];
          func410.variableArities = [
            false,
          ];
          obj310.methods["setImage"] = func410;
          func410.definitionLine = 118;
          func410.definitionModule = "kitty";
          var func412 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func412.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call413 = callmethod(this, "action:=", [1], var_action__39__);
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
          obj310.methods["setAction"] = func412;
          func412.definitionLine = 122;
          func412.definitionModule = "kitty";
          var func414 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call415 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call416 = callmethod(this, "posY:=", [1], var_y);
              return call416
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func414.paramCounts = [
            2,
          ];
          func414.variableArities = [
            false,
          ];
          obj310.methods["setLocation"] = func414;
          func414.definitionLine = 126;
          func414.definitionModule = "kitty";
          var func417 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func417.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call418 = callmethod(this, "posX", [0]);
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
          obj310.methods["getX"] = func417;
          func417.definitionLine = 131;
          func417.definitionModule = "kitty";
          var func419 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func419.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call420 = callmethod(this, "posY", [0]);
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
          obj310.methods["getY"] = func419;
          func419.definitionLine = 135;
          func419.definitionModule = "kitty";
          var func421 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func421.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call422 = callmethod(this, "rotation", [0]);
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
          obj310.methods["getRotation"] = func421;
          func421.definitionLine = 139;
          func421.definitionModule = "kitty";
          sourceObject = obj310;
          lineNumber = 73
          obj310.data["tag"] = var_tag__39__;
          var reader_kitty_tag_423 = function() {
            return this.data["tag"];
          }
          obj310.methods["tag"] = reader_kitty_tag_423;
          obj310.data["tag"] = var_tag__39__;
          var writer_kitty_tag_423 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj310.methods["tag:="] = writer_kitty_tag_423;
          reader_kitty_tag_423.confidential = true;
          writer_kitty_tag_423.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 74
          obj310.data["posX"] = var_x__39__;
          var reader_kitty_posX_424 = function() {
            return this.data["posX"];
          }
          obj310.methods["posX"] = reader_kitty_posX_424;
          obj310.data["posX"] = var_x__39__;
          var writer_kitty_posX_424 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj310.methods["posX:="] = writer_kitty_posX_424;
          reader_kitty_posX_424.confidential = true;
          writer_kitty_posX_424.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 75
          obj310.data["posY"] = var_y__39__;
          var reader_kitty_posY_425 = function() {
            return this.data["posY"];
          }
          obj310.methods["posY"] = reader_kitty_posY_425;
          obj310.data["posY"] = var_y__39__;
          var writer_kitty_posY_425 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj310.methods["posY:="] = writer_kitty_posY_425;
          reader_kitty_posY_425.confidential = true;
          writer_kitty_posY_425.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 76
          obj310.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_426 = function() {
            return this.data["rotation"];
          }
          obj310.methods["rotation"] = reader_kitty_rotation_426;
          obj310.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_426 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj310.methods["rotation:="] = writer_kitty_rotation_426;
          reader_kitty_rotation_426.confidential = true;
          writer_kitty_rotation_426.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 79
          var block427 = Grace_allocObject();
          block427.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block427.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block427.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block427.methods["match"] = GraceBlock_match;
          block427.methods["prefix?"] = GraceBlock_lift;
          block427.receiver = this;
          block427.className = 'block<kitty:79>';
          block427.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj310.data["action"] = block427;
          var reader_kitty_action_428 = function() {
            return this.data["action"];
          }
          obj310.methods["action"] = reader_kitty_action_428;
          obj310.data["action"] = block427;
          var writer_kitty_action_428 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj310.methods["action:="] = writer_kitty_action_428;
          reader_kitty_action_428.confidential = true;
          writer_kitty_action_428.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block427)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj310.mutable = true;
          sourceObject = obj310;
          obj310.data["image"] = undefined;
          var reader_kitty_image_429 = function() {
            return this.data["image"];
          }
          obj310.methods["image"] = reader_kitty_image_429;
          obj310.data["image"] = undefined;
          var writer_kitty_image_429 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj310.methods["image:="] = writer_kitty_image_429;
          reader_kitty_image_429.confidential = true;
          writer_kitty_image_429.confidential = true;
          obj310.mutable = true;
          sourceObject = obj310;
          lineNumber = 81
          onSelf = true;
          var call430 = callmethod(this, "awake", [0]);
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
    obj185.methods["new()object"] = func309;
    var func431 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string432 = new GraceString("class KittyEntity");
        return string432
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func431.paramCounts = [
    ];
    func431.variableArities = [
    ];
    obj185.methods["asDebugString"] = func431;
    func431.definitionLine = 69;
    func431.definitionModule = "kitty";
    sourceObject = obj185;
    sourceObject = obj185;
    superDepth = origSuperDepth;
  }
  obj_init_185.apply(obj185, []);
  var var_KittyEntity = obj185;
  lineNumber = 144
  lineNumber = 153
  lineNumber = 157
  lineNumber = 161
  lineNumber = 165
  lineNumber = 173
  lineNumber = 177
  lineNumber = 181
  lineNumber = 185
  lineNumber = 189
  lineNumber = 193
  lineNumber = 199
  var func433 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func433.paramCounts[0])
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
  func433.paramCounts = [
    0,
  ];
  func433.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func433;
  func433.definitionLine = 199;
  func433.definitionModule = "kitty";
  var obj434 = Grace_allocObject();
  obj434.definitionModule = "kitty";
  obj434.definitionLine = 199;
  obj434.outer = this;
  var reader_kitty_outer_435 = function() {
    return this.outer;
  }
  obj434.methods["outer"] = reader_kitty_outer_435;
  function obj_init_434() {
    var origSuperDepth = superDepth;
    superDepth = obj434;
    obj434.annotations = [];
    var func436 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func436.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj437 = Grace_allocObject();
        obj437.definitionModule = "kitty";
        obj437.definitionLine = 199;
        obj437.outer = this;
        var reader_kitty_outer_438 = function() {
          return this.outer;
        }
        obj437.methods["outer"] = reader_kitty_outer_438;
        function obj_init_437() {
          var origSuperDepth = superDepth;
          superDepth = obj437;
          obj437.annotations = [];
          var func439 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func439.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              var if440 = var_done;
              lineNumber = 233
              onSelf = true;
              var call441 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call441)) {
                lineNumber = 235
                lineNumber = 234
                var bool442 = new GraceBoolean(false)
                return bool442
              }
              lineNumber = 238
              lineNumber = 199
              lineNumber = 237
              var call443 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call444 = callmethod(this, "document:=", [1], call443);
              lineNumber = 238
              lineNumber = 237
              lineNumber = 238
              var string445 = new GraceString("standard-canvas");
              onSelf = true;
              var call446 = callmethod(this, "document", [0]);
              var call447 = callmethod(call446,"getElementById", [1], string445);
              onSelf = true;
              var call448 = callmethod(this, "canvas:=", [1], call447);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call449 = callmethod(this, "canvas", [0]);
              var call450 = callmethod(call449,"width", [0]);
              onSelf = true;
              var call451 = callmethod(this, "canvasWidth:=", [1], call450);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call452 = callmethod(this, "canvas", [0]);
              var call453 = callmethod(call452,"height", [0]);
              onSelf = true;
              var call454 = callmethod(this, "canvasHeight:=", [1], call453);
              lineNumber = 255
              var block455 = Grace_allocObject();
              block455.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block455.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block455.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block455.methods["match"] = GraceBlock_match;
              block455.methods["prefix?"] = GraceBlock_lift;
              block455.receiver = this;
              block455.className = 'block<kitty:255>';
              block455.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 246
                lineNumber = 245
                onSelf = true;
                var call456 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call458 = callmethod(this, "canvas", [0]);
                var call459 = callmethod(call458,"offsetWidth", [0]);
                onSelf = true;
                var call461 = callmethod(this, "canvas", [0]);
                var call462 = callmethod(call461,"offsetLeft", [0]);
                var call464 = callmethod(var_ev,"clientX", [0]);
                var diff466 = callmethod(call464, "-", [1], call462);
                var quotient468 = callmethod(diff466, "/", [1], call459);
                var prod470 = callmethod(quotient468, "*", [1], call456);
                var var_x = prod470;
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
                var call471 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call473 = callmethod(this, "canvas", [0]);
                var call474 = callmethod(call473,"offsetHeight", [0]);
                onSelf = true;
                var call476 = callmethod(this, "canvas", [0]);
                var call477 = callmethod(call476,"offsetTop", [0]);
                var call479 = callmethod(var_ev,"clientY", [0]);
                var diff481 = callmethod(call479, "-", [1], call477);
                var quotient483 = callmethod(diff481, "/", [1], call474);
                var prod485 = callmethod(quotient483, "*", [1], call471);
                var var_y = prod485;
                lineNumber = 250;
                moduleName = "kitty";
                lineNumber = 246
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 254
                var if486 = var_done;
                lineNumber = 250
                var opresult489 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call492 = callmethod(this, "canvasWidth", [0]);
                var diff494 = callmethod(call492, "-", [1], new GraceNum(20));
                var opresult497 = callmethod(var_x, ">", [1], diff494);
                var opresult499 = callmethod(opresult497, "&&", [1], opresult489);
                if (Grace_isTrue(opresult499)) {
                  lineNumber = 251
                  var call500 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 252
                  onSelf = true;
                  var call501 = callmethod(this, "stop", [0]);
                  if486 = call501;
                }
                return if486;
              };
              var_mouseDownListener = block455;
              lineNumber = 255
              var string502 = new GraceString("mousedown");
              onSelf = true;
              var call503 = callmethod(this, "canvas", [0]);
              var call504 = callmethod(call503,"addEventListener", [2], string502, var_mouseDownListener);
              lineNumber = 265
              var block505 = Grace_allocObject();
              block505.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block505.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block505.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block505.methods["match"] = GraceBlock_match;
              block505.methods["prefix?"] = GraceBlock_lift;
              block505.receiver = this;
              block505.className = 'block<kitty:265>';
              block505.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 263
                var if506 = var_done;
                lineNumber = 260
                var call508 = callmethod(var_ev,"keyCode", [0]);
                var opresult510 = callmethod(call508, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult510)) {
                  lineNumber = 261
                  onSelf = true;
                  var call511 = callmethod(this, "stop", [0]);
                  if506 = call511;
                }
                lineNumber = 264
                lineNumber = 260
                lineNumber = 263
                var call512 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call513 = callmethod(this, "currentKeyDown:=", [1], call512);
                return call513;
              };
              var_keyDownListener = block505;
              lineNumber = 265
              var string514 = new GraceString("keydown");
              onSelf = true;
              var call515 = callmethod(this, "document", [0]);
              var call516 = callmethod(call515,"addEventListener", [2], string514, var_keyDownListener);
              lineNumber = 271
              var block517 = Grace_allocObject();
              block517.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block517.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block517.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block517.methods["match"] = GraceBlock_match;
              block517.methods["prefix?"] = GraceBlock_lift;
              block517.receiver = this;
              block517.className = 'block<kitty:271>';
              block517.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 270
                lineNumber = 263
                lineNumber = 270
                lineNumber = 269
                var call518 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call519 = callmethod(this, "currentKeyDown:=", [1], call518);
                return call519;
              };
              var_keyUpListener = block517;
              lineNumber = 271
              var string520 = new GraceString("keyup");
              onSelf = true;
              var call521 = callmethod(this, "document", [0]);
              var call522 = callmethod(call521,"addEventListener", [2], string520, var_keyUpListener);
              lineNumber = 273
              lineNumber = 263
              lineNumber = 273
              var string523 = new GraceString("canvas");
              var call524 = callmethod(var_dom,"document", [0]);
              var call525 = callmethod(call524,"createElement", [1], string523);
              onSelf = true;
              var call526 = callmethod(this, "backingCanvas:=", [1], call525);
              lineNumber = 275
              lineNumber = 273
              lineNumber = 274
              onSelf = true;
              var call527 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call528 = callmethod(this, "backingCanvas", [0]);
              var call529 = callmethod(call528,"height:=", [1], call527);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 275
              onSelf = true;
              var call530 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call531 = callmethod(this, "backingCanvas", [0]);
              var call532 = callmethod(call531,"width:=", [1], call530);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 276
              var string533 = new GraceString("2d");
              onSelf = true;
              var call534 = callmethod(this, "backingCanvas", [0]);
              var call535 = callmethod(call534,"getContext", [1], string533);
              onSelf = true;
              var call536 = callmethod(this, "backingContext:=", [1], call535);
              lineNumber = 277
              lineNumber = 273
              lineNumber = 277
              var string537 = new GraceString("2d");
              onSelf = true;
              var call538 = callmethod(this, "canvas", [0]);
              var call539 = callmethod(call538,"getContext", [1], string537);
              onSelf = true;
              var call540 = callmethod(this, "mctx:=", [1], call539);
              lineNumber = 280
              var string541 = new GraceString("doggo.jpg");
              onSelf = true;
              var call542 = callmethod(this, "setBackground", [1], string541);
              lineNumber = 292
              lineNumber = 273
              lineNumber = 286
              var bool543 = new GraceBoolean(true)
              onSelf = true;
              var call544 = callmethod(this, "isInit:=", [1], bool543);
              return call544
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func439.paramCounts = [
            0,
          ];
          func439.variableArities = [
            false,
          ];
          obj437.methods["init"] = func439;
          func439.definitionLine = 229;
          func439.definitionModule = "kitty";
          var func545 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func545.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 273
              lineNumber = 297
              var bool546 = new GraceBoolean(true)
              onSelf = true;
              var call547 = callmethod(this, "isRunning:=", [1], bool546);
              lineNumber = 298
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
              block548.className = 'block<kitty:298>';
              block548.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call549 = callmethod(this, "isRunning", [0]);
                return call549;
              };
              lineNumber = 302
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
              block550.className = 'block<kitty:302>';
              block550.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call551 = callmethod(this, "update", [0]);
                return call551;
              };
              lineNumber = 298
              var call552 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block548, new GraceNum(10), block550);
              return call552
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func545.paramCounts = [
            0,
          ];
          func545.variableArities = [
            false,
          ];
          obj437.methods["start"] = func545;
          func545.definitionLine = 295;
          func545.definitionModule = "kitty";
          var func553 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func553.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 273
              lineNumber = 310
              onSelf = true;
              var call554 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call555 = callmethod(this, "mctx", [0]);
              var call556 = callmethod(call555,"fillStyle:=", [1], call554);
              lineNumber = 311
              onSelf = true;
              var call557 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call558 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call559 = callmethod(this, "mctx", [0]);
              var call560 = callmethod(call559,"fillRect", [4], new GraceNum(0), new GraceNum(0), call557, call558);
              lineNumber = 312
              onSelf = true;
              var call561 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call562 = callmethod(this, "mctx", [0]);
              var call563 = callmethod(call562,"drawImage", [3], call561, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call564 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call566 = callmethod(this, "canvasWidth", [0]);
              var quotient568 = callmethod(call566, "/", [1], new GraceNum(2));
              onSelf = true;
              var call570 = callmethod(this, "canvasHeight", [0]);
              var quotient572 = callmethod(call570, "/", [1], new GraceNum(2));
              onSelf = true;
              var call573 = callmethod(this, "background", [0]);
              var call574 = callmethod(call573,"draw", [4], call564, quotient568, quotient572, new GraceNum(0));
              lineNumber = 316
              onSelf = true;
              var call575 = callmethod(this, "entities", [0]);
              lineNumber = 322
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
              block576.className = 'block<kitty:322>';
              block576.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 317
                var call577 = callmethod(var_entity,"update", [0]);
                lineNumber = 318
                onSelf = true;
                var call578 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call580 = callmethod(this, "canvasWidth", [0]);
                var quotient582 = callmethod(call580, "/", [1], new GraceNum(2));
                onSelf = true;
                var call584 = callmethod(this, "canvasHeight", [0]);
                var quotient586 = callmethod(call584, "/", [1], new GraceNum(2));
                var call587 = callmethod(var_entity,"draw", [3], call578, quotient582, quotient586);
                return call587;
              };
              var call588 = callmethod(Grace_prelude,"for()do", [1, 1], call575, block576);
              return call588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func553.paramCounts = [
            0,
          ];
          func553.variableArities = [
            false,
          ];
          obj437.methods["update"] = func553;
          func553.definitionLine = 305;
          func553.definitionModule = "kitty";
          var func589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              var string590 = new GraceString("WORLD STOPPING...");
              var call591 = Grace_print(string590);
              lineNumber = 327
              lineNumber = 317
              lineNumber = 326
              var bool592 = new GraceBoolean(false)
              onSelf = true;
              var call593 = callmethod(this, "isRunning:=", [1], bool592);
              lineNumber = 327
              var string594 = new GraceString("mousedown");
              onSelf = true;
              var call595 = callmethod(this, "canvas", [0]);
              var call596 = callmethod(call595,"removeEventListener", [2], string594, var_mouseDownListener);
              lineNumber = 328
              var string597 = new GraceString("keydown");
              onSelf = true;
              var call598 = callmethod(this, "document", [0]);
              var call599 = callmethod(call598,"removeEventListener", [2], string597, var_keyDownListener);
              lineNumber = 329
              var string600 = new GraceString("keyup");
              onSelf = true;
              var call601 = callmethod(this, "document", [0]);
              var call602 = callmethod(call601,"removeEventListener", [2], string600, var_keyUpListener);
              return call602
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
          obj437.methods["stop"] = func589;
          func589.definitionLine = 324;
          func589.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 334
              lineNumber = 333
              onSelf = true;
              var call604 = callmethod(this, "currentKeyDown", [0]);
              var opresult607 = callmethod(var_key, "==", [1], call604);
              return opresult607
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func603.paramCounts = [
            1,
          ];
          func603.variableArities = [
            false,
          ];
          obj437.methods["isKeyDown"] = func603;
          func603.definitionLine = 332;
          func603.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 337
              lineNumber = 317
              lineNumber = 337
              onSelf = true;
              var call609 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call610 = callmethod(this, "canvasHeight", [0]);
              var call611 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call612 = callmethod(call611, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call613 = callmethod(call612, "Image()width()height", [1, 1, 1], var_url, call609, call610);
              onSelf = true;
              var call614 = callmethod(this, "background:=", [1], call613);
              return call614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func608.paramCounts = [
            1,
          ];
          func608.variableArities = [
            false,
          ];
          obj437.methods["setBackground"] = func608;
          func608.definitionLine = 336;
          func608.definitionModule = "kitty";
          var func615 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func615.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 341
              onSelf = true;
              var call616 = callmethod(this, "entities", [0]);
              var call617 = callmethod(call616,"push", [1], var_e);
              return call617
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func615.paramTypes = [];
          func615.paramTypes.push([]);
          func615.paramCounts = [
            1,
          ];
          func615.variableArities = [
            false,
          ];
          obj437.methods["addEntity"] = func615;
          func615.definitionLine = 340;
          func615.definitionModule = "kitty";
          var func618 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func618.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 346
              lineNumber = 345
              onSelf = true;
              var call619 = callmethod(this, "mctx", [0]);
              return call619
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func618.paramCounts = [
            0,
          ];
          func618.variableArities = [
            false,
          ];
          obj437.methods["getContext"] = func618;
          func618.definitionLine = 344;
          func618.definitionModule = "kitty";
          sourceObject = obj437;
          obj437.data["background"] = undefined;
          var reader_kitty_background_620 = function() {
            return this.data["background"];
          }
          obj437.methods["background"] = reader_kitty_background_620;
          obj437.data["background"] = undefined;
          var writer_kitty_background_620 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj437.methods["background:="] = writer_kitty_background_620;
          reader_kitty_background_620.confidential = true;
          writer_kitty_background_620.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 204
          var string621 = new GraceString("black");
          obj437.data["backgroundColour"] = string621;
          var reader_kitty_backgroundColour_622 = function() {
            return this.data["backgroundColour"];
          }
          obj437.methods["backgroundColour"] = reader_kitty_backgroundColour_622;
          obj437.data["backgroundColour"] = string621;
          var writer_kitty_backgroundColour_622 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj437.methods["backgroundColour:="] = writer_kitty_backgroundColour_622;
          reader_kitty_backgroundColour_622.confidential = true;
          writer_kitty_backgroundColour_622.confidential = true;
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string621)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["document"] = undefined;
          var reader_kitty_document_623 = function() {
            return this.data["document"];
          }
          obj437.methods["document"] = reader_kitty_document_623;
          obj437.data["document"] = undefined;
          var writer_kitty_document_623 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj437.methods["document:="] = writer_kitty_document_623;
          reader_kitty_document_623.confidential = true;
          writer_kitty_document_623.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_624 = function() {
            return this.data["backingCanvas"];
          }
          obj437.methods["backingCanvas"] = reader_kitty_backingCanvas_624;
          obj437.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_624 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj437.methods["backingCanvas:="] = writer_kitty_backingCanvas_624;
          reader_kitty_backingCanvas_624.confidential = true;
          writer_kitty_backingCanvas_624.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["backingContext"] = undefined;
          var reader_kitty_backingContext_625 = function() {
            return this.data["backingContext"];
          }
          obj437.methods["backingContext"] = reader_kitty_backingContext_625;
          obj437.data["backingContext"] = undefined;
          var writer_kitty_backingContext_625 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj437.methods["backingContext:="] = writer_kitty_backingContext_625;
          reader_kitty_backingContext_625.confidential = true;
          writer_kitty_backingContext_625.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["canvas"] = undefined;
          var reader_kitty_canvas_626 = function() {
            return this.data["canvas"];
          }
          obj437.methods["canvas"] = reader_kitty_canvas_626;
          obj437.data["canvas"] = undefined;
          var writer_kitty_canvas_626 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj437.methods["canvas:="] = writer_kitty_canvas_626;
          reader_kitty_canvas_626.confidential = true;
          writer_kitty_canvas_626.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_627 = function() {
            return this.data["canvasWidth"];
          }
          obj437.methods["canvasWidth"] = reader_kitty_canvasWidth_627;
          obj437.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_627 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj437.methods["canvasWidth:="] = writer_kitty_canvasWidth_627;
          reader_kitty_canvasWidth_627.confidential = true;
          writer_kitty_canvasWidth_627.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_628 = function() {
            return this.data["canvasHeight"];
          }
          obj437.methods["canvasHeight"] = reader_kitty_canvasHeight_628;
          obj437.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_628 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj437.methods["canvasHeight:="] = writer_kitty_canvasHeight_628;
          reader_kitty_canvasHeight_628.confidential = true;
          writer_kitty_canvasHeight_628.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 215
          var call629 = callmethod(var_collections,"list", [0]);
          var call630 = callmethod(call629,"new", [0]);
          obj437.data["entities"] = call630;
          var reader_kitty_entities_631 = function() {
            return this.data["entities"];
          }
          obj437.methods["entities"] = reader_kitty_entities_631;
          obj437.data["entities"] = call630;
          var writer_kitty_entities_631 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj437.methods["entities:="] = writer_kitty_entities_631;
          reader_kitty_entities_631.confidential = true;
          writer_kitty_entities_631.confidential = true;
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call630)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 217
          var bool632 = new GraceBoolean(false)
          obj437.data["isInit"] = bool632;
          var reader_kitty_isInit_633 = function() {
            return this.data["isInit"];
          }
          obj437.methods["isInit"] = reader_kitty_isInit_633;
          obj437.data["isInit"] = bool632;
          var writer_kitty_isInit_633 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj437.methods["isInit:="] = writer_kitty_isInit_633;
          reader_kitty_isInit_633.confidential = true;
          writer_kitty_isInit_633.confidential = true;
          lineNumber = 218;
          moduleName = "kitty";
          lineNumber = 217
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool632)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 218
          var bool634 = new GraceBoolean(false)
          obj437.data["isRunning"] = bool634;
          var reader_kitty_isRunning_635 = function() {
            return this.data["isRunning"];
          }
          obj437.methods["isRunning"] = reader_kitty_isRunning_635;
          obj437.data["isRunning"] = bool634;
          var writer_kitty_isRunning_635 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj437.methods["isRunning:="] = writer_kitty_isRunning_635;
          reader_kitty_isRunning_635.confidential = true;
          writer_kitty_isRunning_635.confidential = true;
          lineNumber = 220;
          moduleName = "kitty";
          lineNumber = 218
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool634)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["mctx"] = undefined;
          var reader_kitty_mctx_636 = function() {
            return this.data["mctx"];
          }
          obj437.methods["mctx"] = reader_kitty_mctx_636;
          obj437.data["mctx"] = undefined;
          var writer_kitty_mctx_636 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj437.methods["mctx:="] = writer_kitty_mctx_636;
          reader_kitty_mctx_636.confidential = true;
          writer_kitty_mctx_636.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 224
          lineNumber = 222
          var call637 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj437.data["currentKeyDown"] = call637;
          var reader_kitty_currentKeyDown_638 = function() {
            return this.data["currentKeyDown"];
          }
          obj437.methods["currentKeyDown"] = reader_kitty_currentKeyDown_638;
          obj437.data["currentKeyDown"] = call637;
          var writer_kitty_currentKeyDown_638 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj437.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_638;
          reader_kitty_currentKeyDown_638.confidential = true;
          writer_kitty_currentKeyDown_638.confidential = true;
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call637)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj437.mutable = true;
          sourceObject = obj437;
          obj437.data["ent"] = undefined;
          var reader_kitty_ent_639 = function() {
            return this.data["ent"];
          }
          obj437.methods["ent"] = reader_kitty_ent_639;
          obj437.data["ent"] = undefined;
          var writer_kitty_ent_639 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj437.methods["ent:="] = writer_kitty_ent_639;
          reader_kitty_ent_639.confidential = true;
          writer_kitty_ent_639.confidential = true;
          obj437.mutable = true;
          sourceObject = obj437;
          lineNumber = 226
          onSelf = true;
          var call640 = callmethod(this, "init", [0]);
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          sourceObject = obj437;
          superDepth = origSuperDepth;
        }
        obj_init_437.apply(obj437, []);
        return obj437
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func436.paramCounts = [
      0,
    ];
    func436.variableArities = [
      false,
    ];
    obj434.methods["new"] = func436;
    func436.definitionLine = 199;
    func436.definitionModule = "kitty";
    var func641 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj642 = Grace_allocObject();
        obj642.definitionModule = "kitty";
        obj642.definitionLine = 199;
        var inho642 = inheritingObject;
        while (inho642.superobj) inho642 = inho642.superobj;
        inho642.superobj = obj642;
        obj642.data = inheritingObject.data;
        obj642.outer = this;
        var reader_kitty_outer_643 = function() {
          return this.outer;
        }
        obj642.methods["outer"] = reader_kitty_outer_643;
        function obj_init_642() {
          var origSuperDepth = superDepth;
          superDepth = obj642;
          obj642.annotations = [];
          var func644 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              var if645 = var_done;
              lineNumber = 233
              onSelf = true;
              var call646 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call646)) {
                lineNumber = 235
                lineNumber = 234
                var bool647 = new GraceBoolean(false)
                return bool647
              }
              lineNumber = 238
              lineNumber = 215
              lineNumber = 237
              var call648 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call649 = callmethod(this, "document:=", [1], call648);
              lineNumber = 238
              lineNumber = 237
              lineNumber = 238
              var string650 = new GraceString("standard-canvas");
              onSelf = true;
              var call651 = callmethod(this, "document", [0]);
              var call652 = callmethod(call651,"getElementById", [1], string650);
              onSelf = true;
              var call653 = callmethod(this, "canvas:=", [1], call652);
              lineNumber = 240
              lineNumber = 237
              lineNumber = 239
              onSelf = true;
              var call654 = callmethod(this, "canvas", [0]);
              var call655 = callmethod(call654,"width", [0]);
              onSelf = true;
              var call656 = callmethod(this, "canvasWidth:=", [1], call655);
              lineNumber = 243
              lineNumber = 239
              lineNumber = 240
              onSelf = true;
              var call657 = callmethod(this, "canvas", [0]);
              var call658 = callmethod(call657,"height", [0]);
              onSelf = true;
              var call659 = callmethod(this, "canvasHeight:=", [1], call658);
              lineNumber = 255
              var block660 = Grace_allocObject();
              block660.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block660.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block660.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block660.methods["match"] = GraceBlock_match;
              block660.methods["prefix?"] = GraceBlock_lift;
              block660.receiver = this;
              block660.className = 'block<kitty:255>';
              block660.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 246
                lineNumber = 245
                onSelf = true;
                var call661 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call663 = callmethod(this, "canvas", [0]);
                var call664 = callmethod(call663,"offsetWidth", [0]);
                onSelf = true;
                var call666 = callmethod(this, "canvas", [0]);
                var call667 = callmethod(call666,"offsetLeft", [0]);
                var call669 = callmethod(var_ev,"clientX", [0]);
                var diff671 = callmethod(call669, "-", [1], call667);
                var quotient673 = callmethod(diff671, "/", [1], call664);
                var prod675 = callmethod(quotient673, "*", [1], call661);
                var var_x = prod675;
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
                var call676 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call678 = callmethod(this, "canvas", [0]);
                var call679 = callmethod(call678,"offsetHeight", [0]);
                onSelf = true;
                var call681 = callmethod(this, "canvas", [0]);
                var call682 = callmethod(call681,"offsetTop", [0]);
                var call684 = callmethod(var_ev,"clientY", [0]);
                var diff686 = callmethod(call684, "-", [1], call682);
                var quotient688 = callmethod(diff686, "/", [1], call679);
                var prod690 = callmethod(quotient688, "*", [1], call676);
                var var_y = prod690;
                lineNumber = 250;
                moduleName = "kitty";
                lineNumber = 246
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 254
                var if691 = var_done;
                lineNumber = 250
                var opresult694 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call697 = callmethod(this, "canvasWidth", [0]);
                var diff699 = callmethod(call697, "-", [1], new GraceNum(20));
                var opresult702 = callmethod(var_x, ">", [1], diff699);
                var opresult704 = callmethod(opresult702, "&&", [1], opresult694);
                if (Grace_isTrue(opresult704)) {
                  lineNumber = 251
                  var call705 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 252
                  onSelf = true;
                  var call706 = callmethod(this, "stop", [0]);
                  if691 = call706;
                }
                return if691;
              };
              var_mouseDownListener = block660;
              lineNumber = 255
              var string707 = new GraceString("mousedown");
              onSelf = true;
              var call708 = callmethod(this, "canvas", [0]);
              var call709 = callmethod(call708,"addEventListener", [2], string707, var_mouseDownListener);
              lineNumber = 265
              var block710 = Grace_allocObject();
              block710.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block710.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block710.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block710.methods["match"] = GraceBlock_match;
              block710.methods["prefix?"] = GraceBlock_lift;
              block710.receiver = this;
              block710.className = 'block<kitty:265>';
              block710.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 263
                var if711 = var_done;
                lineNumber = 260
                var call713 = callmethod(var_ev,"keyCode", [0]);
                var opresult715 = callmethod(call713, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult715)) {
                  lineNumber = 261
                  onSelf = true;
                  var call716 = callmethod(this, "stop", [0]);
                  if711 = call716;
                }
                lineNumber = 264
                lineNumber = 260
                lineNumber = 263
                var call717 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call718 = callmethod(this, "currentKeyDown:=", [1], call717);
                return call718;
              };
              var_keyDownListener = block710;
              lineNumber = 265
              var string719 = new GraceString("keydown");
              onSelf = true;
              var call720 = callmethod(this, "document", [0]);
              var call721 = callmethod(call720,"addEventListener", [2], string719, var_keyDownListener);
              lineNumber = 271
              var block722 = Grace_allocObject();
              block722.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block722.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block722.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block722.methods["match"] = GraceBlock_match;
              block722.methods["prefix?"] = GraceBlock_lift;
              block722.receiver = this;
              block722.className = 'block<kitty:271>';
              block722.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 270
                lineNumber = 263
                lineNumber = 270
                lineNumber = 269
                var call723 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call724 = callmethod(this, "currentKeyDown:=", [1], call723);
                return call724;
              };
              var_keyUpListener = block722;
              lineNumber = 271
              var string725 = new GraceString("keyup");
              onSelf = true;
              var call726 = callmethod(this, "document", [0]);
              var call727 = callmethod(call726,"addEventListener", [2], string725, var_keyUpListener);
              lineNumber = 273
              lineNumber = 263
              lineNumber = 273
              var string728 = new GraceString("canvas");
              var call729 = callmethod(var_dom,"document", [0]);
              var call730 = callmethod(call729,"createElement", [1], string728);
              onSelf = true;
              var call731 = callmethod(this, "backingCanvas:=", [1], call730);
              lineNumber = 275
              lineNumber = 273
              lineNumber = 274
              onSelf = true;
              var call732 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call733 = callmethod(this, "backingCanvas", [0]);
              var call734 = callmethod(call733,"height:=", [1], call732);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 275
              onSelf = true;
              var call735 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call736 = callmethod(this, "backingCanvas", [0]);
              var call737 = callmethod(call736,"width:=", [1], call735);
              lineNumber = 276
              lineNumber = 273
              lineNumber = 276
              var string738 = new GraceString("2d");
              onSelf = true;
              var call739 = callmethod(this, "backingCanvas", [0]);
              var call740 = callmethod(call739,"getContext", [1], string738);
              onSelf = true;
              var call741 = callmethod(this, "backingContext:=", [1], call740);
              lineNumber = 277
              lineNumber = 273
              lineNumber = 277
              var string742 = new GraceString("2d");
              onSelf = true;
              var call743 = callmethod(this, "canvas", [0]);
              var call744 = callmethod(call743,"getContext", [1], string742);
              onSelf = true;
              var call745 = callmethod(this, "mctx:=", [1], call744);
              lineNumber = 280
              var string746 = new GraceString("doggo.jpg");
              onSelf = true;
              var call747 = callmethod(this, "setBackground", [1], string746);
              lineNumber = 292
              lineNumber = 273
              lineNumber = 286
              var bool748 = new GraceBoolean(true)
              onSelf = true;
              var call749 = callmethod(this, "isInit:=", [1], bool748);
              return call749
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
          obj642.methods["init"] = func644;
          func644.definitionLine = 229;
          func644.definitionModule = "kitty";
          var func750 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func750.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 298
              lineNumber = 273
              lineNumber = 297
              var bool751 = new GraceBoolean(true)
              onSelf = true;
              var call752 = callmethod(this, "isRunning:=", [1], bool751);
              lineNumber = 298
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
              block753.className = 'block<kitty:298>';
              block753.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call754 = callmethod(this, "isRunning", [0]);
                return call754;
              };
              lineNumber = 302
              var block755 = Grace_allocObject();
              block755.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block755.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block755.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block755.methods["match"] = GraceBlock_match;
              block755.methods["prefix?"] = GraceBlock_lift;
              block755.receiver = this;
              block755.className = 'block<kitty:302>';
              block755.real = function(
              ) {
                sourceObject = this;
                lineNumber = 299
                onSelf = true;
                var call756 = callmethod(this, "update", [0]);
                return call756;
              };
              lineNumber = 298
              var call757 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block753, new GraceNum(10), block755);
              return call757
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func750.paramCounts = [
            0,
          ];
          func750.variableArities = [
            false,
          ];
          obj642.methods["start"] = func750;
          func750.definitionLine = 295;
          func750.definitionModule = "kitty";
          var func758 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func758.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 311
              lineNumber = 273
              lineNumber = 310
              onSelf = true;
              var call759 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call760 = callmethod(this, "mctx", [0]);
              var call761 = callmethod(call760,"fillStyle:=", [1], call759);
              lineNumber = 311
              onSelf = true;
              var call762 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call763 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call764 = callmethod(this, "mctx", [0]);
              var call765 = callmethod(call764,"fillRect", [4], new GraceNum(0), new GraceNum(0), call762, call763);
              lineNumber = 312
              onSelf = true;
              var call766 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call767 = callmethod(this, "mctx", [0]);
              var call768 = callmethod(call767,"drawImage", [3], call766, new GraceNum(0), new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call769 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call771 = callmethod(this, "canvasWidth", [0]);
              var quotient773 = callmethod(call771, "/", [1], new GraceNum(2));
              onSelf = true;
              var call775 = callmethod(this, "canvasHeight", [0]);
              var quotient777 = callmethod(call775, "/", [1], new GraceNum(2));
              onSelf = true;
              var call778 = callmethod(this, "background", [0]);
              var call779 = callmethod(call778,"draw", [4], call769, quotient773, quotient777, new GraceNum(0));
              lineNumber = 316
              onSelf = true;
              var call780 = callmethod(this, "entities", [0]);
              lineNumber = 322
              var block781 = Grace_allocObject();
              block781.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block781.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block781.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block781.methods["match"] = GraceBlock_match;
              block781.methods["prefix?"] = GraceBlock_lift;
              block781.receiver = this;
              block781.className = 'block<kitty:322>';
              block781.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 317
                var call782 = callmethod(var_entity,"update", [0]);
                lineNumber = 318
                onSelf = true;
                var call783 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call785 = callmethod(this, "canvasWidth", [0]);
                var quotient787 = callmethod(call785, "/", [1], new GraceNum(2));
                onSelf = true;
                var call789 = callmethod(this, "canvasHeight", [0]);
                var quotient791 = callmethod(call789, "/", [1], new GraceNum(2));
                var call792 = callmethod(var_entity,"draw", [3], call783, quotient787, quotient791);
                return call792;
              };
              var call793 = callmethod(Grace_prelude,"for()do", [1, 1], call780, block781);
              return call793
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func758.paramCounts = [
            0,
          ];
          func758.variableArities = [
            false,
          ];
          obj642.methods["update"] = func758;
          func758.definitionLine = 305;
          func758.definitionModule = "kitty";
          var func794 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func794.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              var string795 = new GraceString("WORLD STOPPING...");
              var call796 = Grace_print(string795);
              lineNumber = 327
              lineNumber = 317
              lineNumber = 326
              var bool797 = new GraceBoolean(false)
              onSelf = true;
              var call798 = callmethod(this, "isRunning:=", [1], bool797);
              lineNumber = 327
              var string799 = new GraceString("mousedown");
              onSelf = true;
              var call800 = callmethod(this, "canvas", [0]);
              var call801 = callmethod(call800,"removeEventListener", [2], string799, var_mouseDownListener);
              lineNumber = 328
              var string802 = new GraceString("keydown");
              onSelf = true;
              var call803 = callmethod(this, "document", [0]);
              var call804 = callmethod(call803,"removeEventListener", [2], string802, var_keyDownListener);
              lineNumber = 329
              var string805 = new GraceString("keyup");
              onSelf = true;
              var call806 = callmethod(this, "document", [0]);
              var call807 = callmethod(call806,"removeEventListener", [2], string805, var_keyUpListener);
              return call807
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func794.paramCounts = [
            0,
          ];
          func794.variableArities = [
            false,
          ];
          obj642.methods["stop"] = func794;
          func794.definitionLine = 324;
          func794.definitionModule = "kitty";
          var func808 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func808.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 334
              lineNumber = 333
              onSelf = true;
              var call809 = callmethod(this, "currentKeyDown", [0]);
              var opresult812 = callmethod(var_key, "==", [1], call809);
              return opresult812
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func808.paramCounts = [
            1,
          ];
          func808.variableArities = [
            false,
          ];
          obj642.methods["isKeyDown"] = func808;
          func808.definitionLine = 332;
          func808.definitionModule = "kitty";
          var func813 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func813.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 337
              lineNumber = 317
              lineNumber = 337
              onSelf = true;
              var call814 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call815 = callmethod(this, "canvasHeight", [0]);
              var call816 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call817 = callmethod(call816, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call818 = callmethod(call817, "Image()width()height", [1, 1, 1], var_url, call814, call815);
              onSelf = true;
              var call819 = callmethod(this, "background:=", [1], call818);
              return call819
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func813.paramCounts = [
            1,
          ];
          func813.variableArities = [
            false,
          ];
          obj642.methods["setBackground"] = func813;
          func813.definitionLine = 336;
          func813.definitionModule = "kitty";
          var func820 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func820.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 341
              onSelf = true;
              var call821 = callmethod(this, "entities", [0]);
              var call822 = callmethod(call821,"push", [1], var_e);
              return call822
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func820.paramTypes = [];
          func820.paramTypes.push([]);
          func820.paramCounts = [
            1,
          ];
          func820.variableArities = [
            false,
          ];
          obj642.methods["addEntity"] = func820;
          func820.definitionLine = 340;
          func820.definitionModule = "kitty";
          var func823 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func823.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 346
              lineNumber = 345
              onSelf = true;
              var call824 = callmethod(this, "mctx", [0]);
              return call824
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func823.paramCounts = [
            0,
          ];
          func823.variableArities = [
            false,
          ];
          obj642.methods["getContext"] = func823;
          func823.definitionLine = 344;
          func823.definitionModule = "kitty";
          sourceObject = obj642;
          obj642.data["background"] = undefined;
          var reader_kitty_background_825 = function() {
            return this.data["background"];
          }
          obj642.methods["background"] = reader_kitty_background_825;
          obj642.data["background"] = undefined;
          var writer_kitty_background_825 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj642.methods["background:="] = writer_kitty_background_825;
          reader_kitty_background_825.confidential = true;
          writer_kitty_background_825.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 204
          var string826 = new GraceString("black");
          obj642.data["backgroundColour"] = string826;
          var reader_kitty_backgroundColour_827 = function() {
            return this.data["backgroundColour"];
          }
          obj642.methods["backgroundColour"] = reader_kitty_backgroundColour_827;
          obj642.data["backgroundColour"] = string826;
          var writer_kitty_backgroundColour_827 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj642.methods["backgroundColour:="] = writer_kitty_backgroundColour_827;
          reader_kitty_backgroundColour_827.confidential = true;
          writer_kitty_backgroundColour_827.confidential = true;
          lineNumber = 206;
          moduleName = "kitty";
          lineNumber = 204
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string826)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["document"] = undefined;
          var reader_kitty_document_828 = function() {
            return this.data["document"];
          }
          obj642.methods["document"] = reader_kitty_document_828;
          obj642.data["document"] = undefined;
          var writer_kitty_document_828 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj642.methods["document:="] = writer_kitty_document_828;
          reader_kitty_document_828.confidential = true;
          writer_kitty_document_828.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_829 = function() {
            return this.data["backingCanvas"];
          }
          obj642.methods["backingCanvas"] = reader_kitty_backingCanvas_829;
          obj642.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_829 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj642.methods["backingCanvas:="] = writer_kitty_backingCanvas_829;
          reader_kitty_backingCanvas_829.confidential = true;
          writer_kitty_backingCanvas_829.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["backingContext"] = undefined;
          var reader_kitty_backingContext_830 = function() {
            return this.data["backingContext"];
          }
          obj642.methods["backingContext"] = reader_kitty_backingContext_830;
          obj642.data["backingContext"] = undefined;
          var writer_kitty_backingContext_830 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj642.methods["backingContext:="] = writer_kitty_backingContext_830;
          reader_kitty_backingContext_830.confidential = true;
          writer_kitty_backingContext_830.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["canvas"] = undefined;
          var reader_kitty_canvas_831 = function() {
            return this.data["canvas"];
          }
          obj642.methods["canvas"] = reader_kitty_canvas_831;
          obj642.data["canvas"] = undefined;
          var writer_kitty_canvas_831 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj642.methods["canvas:="] = writer_kitty_canvas_831;
          reader_kitty_canvas_831.confidential = true;
          writer_kitty_canvas_831.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_832 = function() {
            return this.data["canvasWidth"];
          }
          obj642.methods["canvasWidth"] = reader_kitty_canvasWidth_832;
          obj642.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_832 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj642.methods["canvasWidth:="] = writer_kitty_canvasWidth_832;
          reader_kitty_canvasWidth_832.confidential = true;
          writer_kitty_canvasWidth_832.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_833 = function() {
            return this.data["canvasHeight"];
          }
          obj642.methods["canvasHeight"] = reader_kitty_canvasHeight_833;
          obj642.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_833 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj642.methods["canvasHeight:="] = writer_kitty_canvasHeight_833;
          reader_kitty_canvasHeight_833.confidential = true;
          writer_kitty_canvasHeight_833.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 215
          var call834 = callmethod(var_collections,"list", [0]);
          var call835 = callmethod(call834,"new", [0]);
          obj642.data["entities"] = call835;
          var reader_kitty_entities_836 = function() {
            return this.data["entities"];
          }
          obj642.methods["entities"] = reader_kitty_entities_836;
          obj642.data["entities"] = call835;
          var writer_kitty_entities_836 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj642.methods["entities:="] = writer_kitty_entities_836;
          reader_kitty_entities_836.confidential = true;
          writer_kitty_entities_836.confidential = true;
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call835)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 217
          var bool837 = new GraceBoolean(false)
          obj642.data["isInit"] = bool837;
          var reader_kitty_isInit_838 = function() {
            return this.data["isInit"];
          }
          obj642.methods["isInit"] = reader_kitty_isInit_838;
          obj642.data["isInit"] = bool837;
          var writer_kitty_isInit_838 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj642.methods["isInit:="] = writer_kitty_isInit_838;
          reader_kitty_isInit_838.confidential = true;
          writer_kitty_isInit_838.confidential = true;
          lineNumber = 218;
          moduleName = "kitty";
          lineNumber = 217
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool837)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 218
          var bool839 = new GraceBoolean(false)
          obj642.data["isRunning"] = bool839;
          var reader_kitty_isRunning_840 = function() {
            return this.data["isRunning"];
          }
          obj642.methods["isRunning"] = reader_kitty_isRunning_840;
          obj642.data["isRunning"] = bool839;
          var writer_kitty_isRunning_840 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj642.methods["isRunning:="] = writer_kitty_isRunning_840;
          reader_kitty_isRunning_840.confidential = true;
          writer_kitty_isRunning_840.confidential = true;
          lineNumber = 220;
          moduleName = "kitty";
          lineNumber = 218
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool839)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["mctx"] = undefined;
          var reader_kitty_mctx_841 = function() {
            return this.data["mctx"];
          }
          obj642.methods["mctx"] = reader_kitty_mctx_841;
          obj642.data["mctx"] = undefined;
          var writer_kitty_mctx_841 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj642.methods["mctx:="] = writer_kitty_mctx_841;
          reader_kitty_mctx_841.confidential = true;
          writer_kitty_mctx_841.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 224
          lineNumber = 222
          var call842 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj642.data["currentKeyDown"] = call842;
          var reader_kitty_currentKeyDown_843 = function() {
            return this.data["currentKeyDown"];
          }
          obj642.methods["currentKeyDown"] = reader_kitty_currentKeyDown_843;
          obj642.data["currentKeyDown"] = call842;
          var writer_kitty_currentKeyDown_843 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj642.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_843;
          reader_kitty_currentKeyDown_843.confidential = true;
          writer_kitty_currentKeyDown_843.confidential = true;
          lineNumber = 224;
          moduleName = "kitty";
          lineNumber = 222
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call842)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj642.mutable = true;
          sourceObject = obj642;
          obj642.data["ent"] = undefined;
          var reader_kitty_ent_844 = function() {
            return this.data["ent"];
          }
          obj642.methods["ent"] = reader_kitty_ent_844;
          obj642.data["ent"] = undefined;
          var writer_kitty_ent_844 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj642.methods["ent:="] = writer_kitty_ent_844;
          reader_kitty_ent_844.confidential = true;
          writer_kitty_ent_844.confidential = true;
          obj642.mutable = true;
          sourceObject = obj642;
          lineNumber = 226
          onSelf = true;
          var call845 = callmethod(this, "init", [0]);
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          sourceObject = obj642;
          superDepth = origSuperDepth;
        }
        obj_init_642.apply(inheritingObject, []);
        return obj642
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj434.methods["new()object"] = func641;
    var func846 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 199
        var string847 = new GraceString("class KittyWorld");
        return string847
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func846.paramCounts = [
    ];
    func846.variableArities = [
    ];
    obj434.methods["asDebugString"] = func846;
    func846.definitionLine = 199;
    func846.definitionModule = "kitty";
    sourceObject = obj434;
    sourceObject = obj434;
    superDepth = origSuperDepth;
  }
  obj_init_434.apply(obj434, []);
  var var_KittyWorld = obj434;
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
  gctCache['kitty'] = "fresh:Entity()x()y()actions:\n image\n strafe\n update\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\nmethods-of:KittyWorld.new:\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n isRunning\n backingCanvas:=\n start\n document:=\n isKeyDown\n ent:=\n update\n entities\n backingContext:=\n setBackground\n getContext\n canvasWidth:=\n init\n canvasHeight\n entities:=\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n backingContext\n mctx\n document\npath:\n kitty\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n imgTag\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n getTag\n elements\n width\nconfidential:\nfresh:World:\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n isKeyDown\n backingCanvas:=\n start\n document:=\n isRunning\n ent:=\n update\n entities\n backingContext:=\n setBackground\n getContext\n canvasWidth:=\n init\n canvasHeight\n mctx\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n backingContext\n entities:=\n document\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image\n strafe\n update\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y()actions\n update\n move\n strafe\n turn\n setImage\n createImage\n setX\n setY\n getX\n getY\n KittyWorld\n World\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n";
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
    "    method update() {",
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
    "method Entity(tag')x(x')y(y')actions(actions') {",
    "    object {",
    "        inherits KittyEntity.new(tag', x', y')",
    "        actions'.apply",
    "    }",
    "} ",
    "",
    "// XXX: Gross but neccessary",
    "// ======== KITTY METHODS ========== //",
    "method update(action') {",
    "    newborn.setAction(action')",
    "}",
    "",
    "method move(distance') {",
    "    newborn.move(distance')",
    "}",
    "",
    "method strafe(distance') {",
    "    newborn.strafe(distance')",
    "}",
    "",
    "method turn(angle') {",
    "    newborn.turn(angle')",
    "}",
    "",
    "// method setLocation(x, y) {",
    "//     newborn.setLocation(x, y)",
    "// }",
    "",
    "method setImage(image': KittyImage) {",
    "    newborn.setImage(image')",
    "}",
    "",
    "method createImage(url') {",
    "    newborn.createImage(url')",
    "}",
    "",
    "method setX(x') {",
    "    newborn.setLocation(x', newborn.getY)",
    "}",
    "",
    "method setY(y') {",
    "    newborn.setLocation(newborn.getX, y')",
    "}",
    "",
    "method getX {",
    "    return newborn.getX",
    "}",
    "",
    "method getY {",
    "    return newborn.getY",
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
