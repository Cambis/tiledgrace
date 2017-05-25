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
  lineNumber = 169
  var func26 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 170
      var call27 = callmethod(var_newborn,"setLocation", [2], var_x, var_y);
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
    2,
  ];
  func26.variableArities = [
    false,
  ];
  this.methods["setLocation"] = func26;
  func26.definitionLine = 169;
  func26.definitionModule = "kitty";
  lineNumber = 173
  var func28 = function(argcv) {
    var curarg = 1;
    var var_image__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func28.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 174
      var call29 = callmethod(var_newborn,"setImage", [1], var_image__39__);
      return call29
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func28.paramTypes = [];
  func28.paramTypes.push([]);
  func28.paramCounts = [
    1,
  ];
  func28.variableArities = [
    false,
  ];
  this.methods["setImage"] = func28;
  func28.definitionLine = 173;
  func28.definitionModule = "kitty";
  lineNumber = 177
  var func30 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 178
      var call31 = callmethod(var_newborn,"createImage", [1], var_url__39__);
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
  this.methods["createImage"] = func30;
  func30.definitionLine = 177;
  func30.definitionModule = "kitty";
  lineNumber = 334
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 335
      var obj33 = Grace_allocObject();
      obj33.definitionModule = "kitty";
      obj33.definitionLine = 335;
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
        lineNumber = 336
        var call35 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
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
    0,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["World"] = func32;
  func32.definitionLine = 334;
  func32.definitionModule = "kitty";
  var func36 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 335;
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
        var call39 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
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
  this.methods["World()object"] = func36;
  lineNumber = 343
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (startWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 345
      var string41 = new GraceString("CHECKING...");
      var call42 = Grace_print(string41);
      lineNumber = 352
      var if43 = var_done;
      lineNumber = 347
      var call44 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call44)) {
        lineNumber = 348
        var string45 = new GraceString("NO WORLD!!");
        var call46 = Grace_print(string45);
        lineNumber = 350
        return var_done
      }
      lineNumber = 352
      var string47 = new GraceString("STARTING...");
      var call48 = Grace_print(string47);
      lineNumber = 355
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
  this.methods["startWorld"] = func40;
  func40.definitionLine = 343;
  func40.definitionModule = "kitty";
  lineNumber = 358
  var func50 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func50.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 360
      lineNumber = 359
      var_m__95__world = var_world__39__;
      lineNumber = 361
      lineNumber = 360
      var bool51 = new GraceBoolean(true)
      var_worldSet = bool51;
      return bool51
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func50.paramTypes = [];
  func50.paramTypes.push([]);
  func50.paramCounts = [
    1,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func50;
  func50.definitionLine = 358;
  func50.definitionModule = "kitty";
  lineNumber = 363
  var func52 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func52.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 364
      onSelf = true;
      var call53 = callmethod(this, "startWorld", [0]);
      return call53
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
  this.methods["atModuleEnd"] = func52;
  func52.definitionLine = 363;
  func52.definitionModule = "kitty";
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
  var call54 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call54;
  this.data = call54.data;
  this._value = call54._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 355
  var func55 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func55.paramCounts[0])
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
  func55.paramCounts = [
    0,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["m_world"] = func55;
  func55.definitionLine = 355;
  func55.definitionModule = "kitty";
  lineNumber = 355
  var func56 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func56.paramCounts[0])
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
  func56.paramCounts = [
    1,
  ];
  func56.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func56;
  func56.definitionLine = 355;
  func56.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool57 = new GraceBoolean(false)
  var var_worldSet = bool57;
  lineNumber = 355
  var func58 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func58.paramCounts[0])
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
  func58.paramCounts = [
    0,
  ];
  func58.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func58;
  func58.definitionLine = 355;
  func58.definitionModule = "kitty";
  lineNumber = 355
  var func59 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    1,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func59;
  func59.definitionLine = 355;
  func59.definitionModule = "kitty";
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
  lineNumber = 355
  var func60 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func60.paramCounts[0])
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
  func60.paramCounts = [
    0,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func60;
  func60.definitionLine = 355;
  func60.definitionModule = "kitty";
  lineNumber = 355
  var func61 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func61.paramCounts[0])
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
  func61.paramCounts = [
    1,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func61;
  func61.definitionLine = 355;
  func61.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 355
  var func62 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func62.paramCounts[0])
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
  func62.paramCounts = [
    0,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func62;
  func62.definitionLine = 355;
  func62.definitionModule = "kitty";
  lineNumber = 355
  var func63 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    1,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func63;
  func63.definitionLine = 355;
  func63.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 355
  var func64 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func64.paramCounts[0])
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
  func64.paramCounts = [
    0,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func64;
  func64.definitionLine = 355;
  func64.definitionModule = "kitty";
  lineNumber = 355
  var func65 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func65.paramCounts[0])
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
  func65.paramCounts = [
    1,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func65;
  func65.definitionLine = 355;
  func65.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
  lineNumber = 17
  var call66 = callmethod(var_dom,"window", [0]);
  var call67 = callmethod(call66,"Math", [0]);
  var var_math = call67;
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["math"] = func68;
  func68.definitionLine = 17;
  func68.definitionModule = "kitty";
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
  var func69 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    0,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["newborn"] = func69;
  func69.definitionLine = 17;
  func69.definitionModule = "kitty";
  lineNumber = 17
  var func70 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    1,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["newborn:="] = func70;
  func70.definitionLine = 17;
  func70.definitionModule = "kitty";
  lineNumber = 25
  var func71 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func71.paramCounts[0])
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
  func71.paramCounts = [
    0,
  ];
  func71.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func71;
  func71.definitionLine = 25;
  func71.definitionModule = "kitty";
  var obj72 = Grace_allocObject();
  obj72.definitionModule = "kitty";
  obj72.definitionLine = 25;
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
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func74.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj75 = Grace_allocObject();
        obj75.definitionModule = "kitty";
        obj75.definitionLine = 25;
        obj75.outer = this;
        var reader_kitty_outer_76 = function() {
          return this.outer;
        }
        obj75.methods["outer"] = reader_kitty_outer_76;
        function obj_init_75() {
          var origSuperDepth = superDepth;
          superDepth = obj75;
          obj75.annotations = [];
          var func77 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func77.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call78 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call79 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod83 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient85 = callmethod(prod83, "/", [1], new GraceNum(180));
              var call86 = callmethod(var_ctx,"rotate", [1], quotient85);
              lineNumber = 44
              onSelf = true;
              var call87 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block88 = Grace_allocObject();
              block88.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block88.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block88.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block88.methods["match"] = GraceBlock_match;
              block88.methods["prefix?"] = GraceBlock_lift;
              block88.receiver = this;
              block88.className = 'block<kitty:47>';
              block88.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call90 = callmethod(this, "width", [0]);
                var call91 = callmethod(call90,"prefix-", [0]);
                var quotient93 = callmethod(call91, "/", [1], new GraceNum(2));
                onSelf = true;
                var call95 = callmethod(this, "height", [0]);
                var call96 = callmethod(call95,"prefix-", [0]);
                var quotient98 = callmethod(call96, "/", [1], new GraceNum(2));
                onSelf = true;
                var call99 = callmethod(this, "width", [0]);
                onSelf = true;
                var call100 = callmethod(this, "height", [0]);
                var call101 = callmethod(var_ctx,"drawImage", [5], var_element, quotient93, quotient98, call99, call100);
                return call101;
              };
              var call102 = callmethod(Grace_prelude,"for()do", [1, 1], call87, block88);
              lineNumber = 47
              var call103 = callmethod(var_ctx,"restore", [0]);
              return call103
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func77.paramCounts = [
            4,
          ];
          func77.variableArities = [
            false,
          ];
          obj75.methods["draw"] = func77;
          func77.definitionLine = 38;
          func77.definitionModule = "kitty";
          var func104 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func104.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call105 = callmethod(this, "imgTag", [0]);
              return call105
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func104.paramCounts = [
            0,
          ];
          func104.variableArities = [
            false,
          ];
          obj75.methods["getTag"] = func104;
          func104.definitionLine = 51;
          func104.definitionModule = "kitty";
          var func106 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func106.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call107 = callmethod(this, "elements", [0]);
              var call108 = callmethod(call107,"push", [1], var_imgTag__39__);
              return call108
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func106.paramCounts = [
            1,
          ];
          func106.variableArities = [
            false,
          ];
          obj75.methods["drawImage"] = func106;
          func106.definitionLine = 55;
          func106.definitionModule = "kitty";
          sourceObject = obj75;
          lineNumber = 29
          var string109 = new GraceString("img");
          var call110 = callmethod(var_dom,"document", [0]);
          var call111 = callmethod(call110,"createElement", [1], string109);
          obj75.data["imgTag"] = call111;
          var reader_kitty_imgTag_112 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_112.def = true;
          reader_kitty_imgTag_112.confidential = true;
          obj75.methods["imgTag"] = reader_kitty_imgTag_112;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call111)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj75;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call113 = callmethod(this, "imgTag", [0]);
          var call114 = callmethod(call113,"src:=", [1], var_url__39__);
          sourceObject = obj75;
          lineNumber = 32
          var call115 = callmethod(var_collections,"list", [0]);
          var call116 = callmethod(call115,"new", [0]);
          obj75.data["elements"] = call116;
          var reader_kitty_elements_117 = function() {
            return this.data["elements"];
          }
          obj75.methods["elements"] = reader_kitty_elements_117;
          obj75.data["elements"] = call116;
          var writer_kitty_elements_117 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj75.methods["elements:="] = writer_kitty_elements_117;
          reader_kitty_elements_117.confidential = true;
          writer_kitty_elements_117.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call116)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj75.mutable = true;
          sourceObject = obj75;
          lineNumber = 33
          onSelf = true;
          var call118 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call119 = callmethod(this, "elements", [0]);
          var call120 = callmethod(call119,"push", [1], call118);
          sourceObject = obj75;
          lineNumber = 35
          obj75.data["height"] = var_height__39__;
          var reader_kitty_height_121 = function() {
            return this.data["height"];
          }
          obj75.methods["height"] = reader_kitty_height_121;
          obj75.data["height"] = var_height__39__;
          var writer_kitty_height_121 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj75.methods["height:="] = writer_kitty_height_121;
          reader_kitty_height_121.confidential = true;
          writer_kitty_height_121.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj75.mutable = true;
          sourceObject = obj75;
          lineNumber = 36
          obj75.data["width"] = var_width__39__;
          var reader_kitty_width_122 = function() {
            return this.data["width"];
          }
          obj75.methods["width"] = reader_kitty_width_122;
          obj75.data["width"] = var_width__39__;
          var writer_kitty_width_122 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj75.methods["width:="] = writer_kitty_width_122;
          reader_kitty_width_122.confidential = true;
          writer_kitty_width_122.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj75.mutable = true;
          sourceObject = obj75;
          sourceObject = obj75;
          sourceObject = obj75;
          superDepth = origSuperDepth;
        }
        obj_init_75.apply(obj75, []);
        return obj75
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func74.paramCounts = [
      3,
    ];
    func74.variableArities = [
      false,
    ];
    obj72.methods["new"] = func74;
    func74.definitionLine = 25;
    func74.definitionModule = "kitty";
    var func123 = function(argcv) {
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
        var obj124 = Grace_allocObject();
        obj124.definitionModule = "kitty";
        obj124.definitionLine = 25;
        var inho124 = inheritingObject;
        while (inho124.superobj) inho124 = inho124.superobj;
        inho124.superobj = obj124;
        obj124.data = inheritingObject.data;
        obj124.outer = this;
        var reader_kitty_outer_125 = function() {
          return this.outer;
        }
        obj124.methods["outer"] = reader_kitty_outer_125;
        function obj_init_124() {
          var origSuperDepth = superDepth;
          superDepth = obj124;
          obj124.annotations = [];
          var func126 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func126.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call127 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call128 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod132 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient134 = callmethod(prod132, "/", [1], new GraceNum(180));
              var call135 = callmethod(var_ctx,"rotate", [1], quotient134);
              lineNumber = 44
              onSelf = true;
              var call136 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block137 = Grace_allocObject();
              block137.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block137.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block137.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block137.methods["match"] = GraceBlock_match;
              block137.methods["prefix?"] = GraceBlock_lift;
              block137.receiver = this;
              block137.className = 'block<kitty:47>';
              block137.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call139 = callmethod(this, "width", [0]);
                var call140 = callmethod(call139,"prefix-", [0]);
                var quotient142 = callmethod(call140, "/", [1], new GraceNum(2));
                onSelf = true;
                var call144 = callmethod(this, "height", [0]);
                var call145 = callmethod(call144,"prefix-", [0]);
                var quotient147 = callmethod(call145, "/", [1], new GraceNum(2));
                onSelf = true;
                var call148 = callmethod(this, "width", [0]);
                onSelf = true;
                var call149 = callmethod(this, "height", [0]);
                var call150 = callmethod(var_ctx,"drawImage", [5], var_element, quotient142, quotient147, call148, call149);
                return call150;
              };
              var call151 = callmethod(Grace_prelude,"for()do", [1, 1], call136, block137);
              lineNumber = 47
              var call152 = callmethod(var_ctx,"restore", [0]);
              return call152
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func126.paramCounts = [
            4,
          ];
          func126.variableArities = [
            false,
          ];
          obj124.methods["draw"] = func126;
          func126.definitionLine = 38;
          func126.definitionModule = "kitty";
          var func153 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call154 = callmethod(this, "imgTag", [0]);
              return call154
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func153.paramCounts = [
            0,
          ];
          func153.variableArities = [
            false,
          ];
          obj124.methods["getTag"] = func153;
          func153.definitionLine = 51;
          func153.definitionModule = "kitty";
          var func155 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func155.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call156 = callmethod(this, "elements", [0]);
              var call157 = callmethod(call156,"push", [1], var_imgTag__39__);
              return call157
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func155.paramCounts = [
            1,
          ];
          func155.variableArities = [
            false,
          ];
          obj124.methods["drawImage"] = func155;
          func155.definitionLine = 55;
          func155.definitionModule = "kitty";
          sourceObject = obj124;
          lineNumber = 29
          var string158 = new GraceString("img");
          var call159 = callmethod(var_dom,"document", [0]);
          var call160 = callmethod(call159,"createElement", [1], string158);
          obj124.data["imgTag"] = call160;
          var reader_kitty_imgTag_161 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_161.def = true;
          reader_kitty_imgTag_161.confidential = true;
          obj124.methods["imgTag"] = reader_kitty_imgTag_161;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call160)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj124;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call162 = callmethod(this, "imgTag", [0]);
          var call163 = callmethod(call162,"src:=", [1], var_url__39__);
          sourceObject = obj124;
          lineNumber = 32
          var call164 = callmethod(var_collections,"list", [0]);
          var call165 = callmethod(call164,"new", [0]);
          obj124.data["elements"] = call165;
          var reader_kitty_elements_166 = function() {
            return this.data["elements"];
          }
          obj124.methods["elements"] = reader_kitty_elements_166;
          obj124.data["elements"] = call165;
          var writer_kitty_elements_166 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj124.methods["elements:="] = writer_kitty_elements_166;
          reader_kitty_elements_166.confidential = true;
          writer_kitty_elements_166.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call165)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          lineNumber = 33
          onSelf = true;
          var call167 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call168 = callmethod(this, "elements", [0]);
          var call169 = callmethod(call168,"push", [1], call167);
          sourceObject = obj124;
          lineNumber = 35
          obj124.data["height"] = var_height__39__;
          var reader_kitty_height_170 = function() {
            return this.data["height"];
          }
          obj124.methods["height"] = reader_kitty_height_170;
          obj124.data["height"] = var_height__39__;
          var writer_kitty_height_170 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj124.methods["height:="] = writer_kitty_height_170;
          reader_kitty_height_170.confidential = true;
          writer_kitty_height_170.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          lineNumber = 36
          obj124.data["width"] = var_width__39__;
          var reader_kitty_width_171 = function() {
            return this.data["width"];
          }
          obj124.methods["width"] = reader_kitty_width_171;
          obj124.data["width"] = var_width__39__;
          var writer_kitty_width_171 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj124.methods["width:="] = writer_kitty_width_171;
          reader_kitty_width_171.confidential = true;
          writer_kitty_width_171.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj124.mutable = true;
          sourceObject = obj124;
          sourceObject = obj124;
          sourceObject = obj124;
          superDepth = origSuperDepth;
        }
        obj_init_124.apply(inheritingObject, []);
        return obj124
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj72.methods["new()object"] = func123;
    var func172 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string173 = new GraceString("class KittyImage");
        return string173
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func172.paramCounts = [
    ];
    func172.variableArities = [
    ];
    obj72.methods["asDebugString"] = func172;
    func172.definitionLine = 25;
    func172.definitionModule = "kitty";
    sourceObject = obj72;
    sourceObject = obj72;
    superDepth = origSuperDepth;
  }
  obj_init_72.apply(obj72, []);
  var var_KittyImage = obj72;
  lineNumber = 62
  lineNumber = 69
  var func174 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func174.paramCounts[0])
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
  func174.paramCounts = [
    0,
  ];
  func174.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func174;
  func174.definitionLine = 69;
  func174.definitionModule = "kitty";
  var obj175 = Grace_allocObject();
  obj175.definitionModule = "kitty";
  obj175.definitionLine = 69;
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
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func177.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj178 = Grace_allocObject();
        obj178.definitionModule = "kitty";
        obj178.definitionLine = 69;
        obj178.outer = this;
        var reader_kitty_outer_179 = function() {
          return this.outer;
        }
        obj178.methods["outer"] = reader_kitty_outer_179;
        function obj_init_178() {
          var origSuperDepth = superDepth;
          superDepth = obj178;
          obj178.annotations = [];
          var func180 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func180.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string181 = new GraceString("realyee.png");
              onSelf = true;
              var call182 = callmethod(this, "createImage", [1], string181);
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
          func180.paramCounts = [
            0,
          ];
          func180.variableArities = [
            false,
          ];
          obj178.methods["awake"] = func180;
          func180.definitionLine = 84;
          func180.definitionModule = "kitty";
          var func183 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call184 = callmethod(this, "action", [0]);
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
          obj178.methods["update"] = func183;
          func183.definitionLine = 89;
          func183.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call189 = callmethod(this, "rotation", [0]);
              var prod191 = callmethod(call189, "*", [1], new GraceNum(3.14159));
              var quotient193 = callmethod(prod191, "/", [1], new GraceNum(180));
              var call194 = callmethod(var_math,"cos", [1], quotient193);
              var prod197 = callmethod(var_distance, "*", [1], call194);
              onSelf = true;
              var call199 = callmethod(this, "posX", [0]);
              var opresult201 = callmethod(call199, "+", [1], prod197);
              onSelf = true;
              var call202 = callmethod(this, "posX:=", [1], opresult201);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call205 = callmethod(this, "rotation", [0]);
              var prod207 = callmethod(call205, "*", [1], new GraceNum(3.14159));
              var quotient209 = callmethod(prod207, "/", [1], new GraceNum(180));
              var call210 = callmethod(var_math,"sin", [1], quotient209);
              var prod213 = callmethod(var_distance, "*", [1], call210);
              onSelf = true;
              var call215 = callmethod(this, "posY", [0]);
              var opresult217 = callmethod(call215, "+", [1], prod213);
              onSelf = true;
              var call218 = callmethod(this, "posY:=", [1], opresult217);
              return call218
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func186.paramCounts = [
            1,
          ];
          func186.variableArities = [
            false,
          ];
          obj178.methods["move"] = func186;
          func186.definitionLine = 93;
          func186.definitionModule = "kitty";
          var func219 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func219.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call222 = callmethod(this, "rotation", [0]);
              var opresult225 = callmethod(new GraceNum(90), "+", [1], call222);
              var prod227 = callmethod(opresult225, "*", [1], new GraceNum(3.14159));
              var quotient229 = callmethod(prod227, "/", [1], new GraceNum(180));
              var call230 = callmethod(var_math,"cos", [1], quotient229);
              var prod233 = callmethod(var_distance, "*", [1], call230);
              onSelf = true;
              var call235 = callmethod(this, "posX", [0]);
              var opresult237 = callmethod(call235, "+", [1], prod233);
              onSelf = true;
              var call238 = callmethod(this, "posX:=", [1], opresult237);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call241 = callmethod(this, "rotation", [0]);
              var opresult244 = callmethod(new GraceNum(90), "+", [1], call241);
              var prod246 = callmethod(opresult244, "*", [1], new GraceNum(3.14159));
              var quotient248 = callmethod(prod246, "/", [1], new GraceNum(180));
              var call249 = callmethod(var_math,"sin", [1], quotient248);
              var prod252 = callmethod(var_distance, "*", [1], call249);
              onSelf = true;
              var call254 = callmethod(this, "posY", [0]);
              var opresult256 = callmethod(call254, "+", [1], prod252);
              onSelf = true;
              var call257 = callmethod(this, "posY:=", [1], opresult256);
              return call257
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func219.paramCounts = [
            1,
          ];
          func219.variableArities = [
            false,
          ];
          obj178.methods["strafe"] = func219;
          func219.definitionLine = 98;
          func219.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func258.paramCounts[0])
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
              var call260 = callmethod(this, "rotation", [0]);
              var opresult262 = callmethod(call260, "+", [1], var_angle);
              onSelf = true;
              var call263 = callmethod(this, "rotation:=", [1], opresult262);
              return call263
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            1,
          ];
          func258.variableArities = [
            false,
          ];
          obj178.methods["turn"] = func258;
          func258.definitionLine = 103;
          func258.definitionModule = "kitty";
          var func264 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func264.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call265 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call266 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call267 = callmethod(this, "posY", [0]);
              var call268 = callmethod(var_ctx,"translate", [2], call266, call267);
              lineNumber = 110
              onSelf = true;
              var call269 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call270 = callmethod(this, "image", [0]);
              var call271 = callmethod(call270,"draw", [4], var_ctx, var_dx, var_dy, call269);
              lineNumber = 111
              var call272 = callmethod(var_ctx,"restore", [0]);
              return call272
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func264.paramCounts = [
            3,
          ];
          func264.variableArities = [
            false,
          ];
          obj178.methods["draw"] = func264;
          func264.definitionLine = 107;
          func264.definitionModule = "kitty";
          var func273 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call274 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call275 = callmethod(call274, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call276 = callmethod(call275, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call277 = callmethod(this, "image:=", [1], call276);
              return call277
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func273.paramCounts = [
            1,
          ];
          func273.variableArities = [
            false,
          ];
          obj178.methods["createImage"] = func273;
          func273.definitionLine = 114;
          func273.definitionModule = "kitty";
          var func278 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func278.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call279 = callmethod(this, "image:=", [1], var_image__39__);
              return call279
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func278.paramTypes = [];
          func278.paramTypes.push([]);
          func278.paramCounts = [
            1,
          ];
          func278.variableArities = [
            false,
          ];
          obj178.methods["setImage"] = func278;
          func278.definitionLine = 118;
          func278.definitionModule = "kitty";
          var func280 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func280.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call281 = callmethod(this, "action:=", [1], var_action__39__);
              return call281
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func280.paramCounts = [
            1,
          ];
          func280.variableArities = [
            false,
          ];
          obj178.methods["setAction"] = func280;
          func280.definitionLine = 122;
          func280.definitionModule = "kitty";
          var func282 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call283 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call284 = callmethod(this, "posY:=", [1], var_y);
              return call284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func282.paramCounts = [
            2,
          ];
          func282.variableArities = [
            false,
          ];
          obj178.methods["setLocation"] = func282;
          func282.definitionLine = 126;
          func282.definitionModule = "kitty";
          var func285 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call286 = callmethod(this, "posX", [0]);
              return call286
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
          obj178.methods["getX"] = func285;
          func285.definitionLine = 131;
          func285.definitionModule = "kitty";
          var func287 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call288 = callmethod(this, "posY", [0]);
              return call288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func287.paramCounts = [
            0,
          ];
          func287.variableArities = [
            false,
          ];
          obj178.methods["getY"] = func287;
          func287.definitionLine = 135;
          func287.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call290 = callmethod(this, "rotation", [0]);
              return call290
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
          obj178.methods["getRotation"] = func289;
          func289.definitionLine = 139;
          func289.definitionModule = "kitty";
          sourceObject = obj178;
          lineNumber = 73
          obj178.data["tag"] = var_tag__39__;
          var reader_kitty_tag_291 = function() {
            return this.data["tag"];
          }
          obj178.methods["tag"] = reader_kitty_tag_291;
          obj178.data["tag"] = var_tag__39__;
          var writer_kitty_tag_291 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj178.methods["tag:="] = writer_kitty_tag_291;
          reader_kitty_tag_291.confidential = true;
          writer_kitty_tag_291.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj178.mutable = true;
          sourceObject = obj178;
          lineNumber = 74
          obj178.data["posX"] = var_x__39__;
          var reader_kitty_posX_292 = function() {
            return this.data["posX"];
          }
          obj178.methods["posX"] = reader_kitty_posX_292;
          obj178.data["posX"] = var_x__39__;
          var writer_kitty_posX_292 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj178.methods["posX:="] = writer_kitty_posX_292;
          reader_kitty_posX_292.confidential = true;
          writer_kitty_posX_292.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj178.mutable = true;
          sourceObject = obj178;
          lineNumber = 75
          obj178.data["posY"] = var_y__39__;
          var reader_kitty_posY_293 = function() {
            return this.data["posY"];
          }
          obj178.methods["posY"] = reader_kitty_posY_293;
          obj178.data["posY"] = var_y__39__;
          var writer_kitty_posY_293 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj178.methods["posY:="] = writer_kitty_posY_293;
          reader_kitty_posY_293.confidential = true;
          writer_kitty_posY_293.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj178.mutable = true;
          sourceObject = obj178;
          lineNumber = 76
          obj178.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_294 = function() {
            return this.data["rotation"];
          }
          obj178.methods["rotation"] = reader_kitty_rotation_294;
          obj178.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_294 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj178.methods["rotation:="] = writer_kitty_rotation_294;
          reader_kitty_rotation_294.confidential = true;
          writer_kitty_rotation_294.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj178.mutable = true;
          sourceObject = obj178;
          lineNumber = 79
          var block295 = Grace_allocObject();
          block295.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block295.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block295.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block295.methods["match"] = GraceBlock_match;
          block295.methods["prefix?"] = GraceBlock_lift;
          block295.receiver = this;
          block295.className = 'block<kitty:79>';
          block295.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj178.data["action"] = block295;
          var reader_kitty_action_296 = function() {
            return this.data["action"];
          }
          obj178.methods["action"] = reader_kitty_action_296;
          obj178.data["action"] = block295;
          var writer_kitty_action_296 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj178.methods["action:="] = writer_kitty_action_296;
          reader_kitty_action_296.confidential = true;
          writer_kitty_action_296.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block295)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj178.mutable = true;
          sourceObject = obj178;
          obj178.data["image"] = undefined;
          var reader_kitty_image_297 = function() {
            return this.data["image"];
          }
          obj178.methods["image"] = reader_kitty_image_297;
          obj178.data["image"] = undefined;
          var writer_kitty_image_297 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj178.methods["image:="] = writer_kitty_image_297;
          reader_kitty_image_297.confidential = true;
          writer_kitty_image_297.confidential = true;
          obj178.mutable = true;
          sourceObject = obj178;
          lineNumber = 81
          onSelf = true;
          var call298 = callmethod(this, "awake", [0]);
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          superDepth = origSuperDepth;
        }
        obj_init_178.apply(obj178, []);
        return obj178
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func177.paramCounts = [
      3,
    ];
    func177.variableArities = [
      false,
    ];
    obj175.methods["new"] = func177;
    func177.definitionLine = 69;
    func177.definitionModule = "kitty";
    var func299 = function(argcv) {
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
        var obj300 = Grace_allocObject();
        obj300.definitionModule = "kitty";
        obj300.definitionLine = 69;
        var inho300 = inheritingObject;
        while (inho300.superobj) inho300 = inho300.superobj;
        inho300.superobj = obj300;
        obj300.data = inheritingObject.data;
        obj300.outer = this;
        var reader_kitty_outer_301 = function() {
          return this.outer;
        }
        obj300.methods["outer"] = reader_kitty_outer_301;
        function obj_init_300() {
          var origSuperDepth = superDepth;
          superDepth = obj300;
          obj300.annotations = [];
          var func302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string303 = new GraceString("realyee.png");
              onSelf = true;
              var call304 = callmethod(this, "createImage", [1], string303);
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
          func302.paramCounts = [
            0,
          ];
          func302.variableArities = [
            false,
          ];
          obj300.methods["awake"] = func302;
          func302.definitionLine = 84;
          func302.definitionModule = "kitty";
          var func305 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func305.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call306 = callmethod(this, "action", [0]);
              var call307 = callmethod(call306,"apply", [0]);
              return call307
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
          obj300.methods["update"] = func305;
          func305.definitionLine = 89;
          func305.definitionModule = "kitty";
          var func308 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func308.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call311 = callmethod(this, "rotation", [0]);
              var prod313 = callmethod(call311, "*", [1], new GraceNum(3.14159));
              var quotient315 = callmethod(prod313, "/", [1], new GraceNum(180));
              var call316 = callmethod(var_math,"cos", [1], quotient315);
              var prod319 = callmethod(var_distance, "*", [1], call316);
              onSelf = true;
              var call321 = callmethod(this, "posX", [0]);
              var opresult323 = callmethod(call321, "+", [1], prod319);
              onSelf = true;
              var call324 = callmethod(this, "posX:=", [1], opresult323);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call327 = callmethod(this, "rotation", [0]);
              var prod329 = callmethod(call327, "*", [1], new GraceNum(3.14159));
              var quotient331 = callmethod(prod329, "/", [1], new GraceNum(180));
              var call332 = callmethod(var_math,"sin", [1], quotient331);
              var prod335 = callmethod(var_distance, "*", [1], call332);
              onSelf = true;
              var call337 = callmethod(this, "posY", [0]);
              var opresult339 = callmethod(call337, "+", [1], prod335);
              onSelf = true;
              var call340 = callmethod(this, "posY:=", [1], opresult339);
              return call340
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
          obj300.methods["move"] = func308;
          func308.definitionLine = 93;
          func308.definitionModule = "kitty";
          var func341 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func341.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call344 = callmethod(this, "rotation", [0]);
              var opresult347 = callmethod(new GraceNum(90), "+", [1], call344);
              var prod349 = callmethod(opresult347, "*", [1], new GraceNum(3.14159));
              var quotient351 = callmethod(prod349, "/", [1], new GraceNum(180));
              var call352 = callmethod(var_math,"cos", [1], quotient351);
              var prod355 = callmethod(var_distance, "*", [1], call352);
              onSelf = true;
              var call357 = callmethod(this, "posX", [0]);
              var opresult359 = callmethod(call357, "+", [1], prod355);
              onSelf = true;
              var call360 = callmethod(this, "posX:=", [1], opresult359);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call363 = callmethod(this, "rotation", [0]);
              var opresult366 = callmethod(new GraceNum(90), "+", [1], call363);
              var prod368 = callmethod(opresult366, "*", [1], new GraceNum(3.14159));
              var quotient370 = callmethod(prod368, "/", [1], new GraceNum(180));
              var call371 = callmethod(var_math,"sin", [1], quotient370);
              var prod374 = callmethod(var_distance, "*", [1], call371);
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
          func341.paramCounts = [
            1,
          ];
          func341.variableArities = [
            false,
          ];
          obj300.methods["strafe"] = func341;
          func341.definitionLine = 98;
          func341.definitionModule = "kitty";
          var func380 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func380.paramCounts[0])
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
              var call382 = callmethod(this, "rotation", [0]);
              var opresult384 = callmethod(call382, "+", [1], var_angle);
              onSelf = true;
              var call385 = callmethod(this, "rotation:=", [1], opresult384);
              return call385
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
          obj300.methods["turn"] = func380;
          func380.definitionLine = 103;
          func380.definitionModule = "kitty";
          var func386 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call387 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call388 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call389 = callmethod(this, "posY", [0]);
              var call390 = callmethod(var_ctx,"translate", [2], call388, call389);
              lineNumber = 110
              onSelf = true;
              var call391 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call392 = callmethod(this, "image", [0]);
              var call393 = callmethod(call392,"draw", [4], var_ctx, var_dx, var_dy, call391);
              lineNumber = 111
              var call394 = callmethod(var_ctx,"restore", [0]);
              return call394
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func386.paramCounts = [
            3,
          ];
          func386.variableArities = [
            false,
          ];
          obj300.methods["draw"] = func386;
          func386.definitionLine = 107;
          func386.definitionModule = "kitty";
          var func395 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func395.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call396 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call397 = callmethod(call396, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call398 = callmethod(call397, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call399 = callmethod(this, "image:=", [1], call398);
              return call399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func395.paramCounts = [
            1,
          ];
          func395.variableArities = [
            false,
          ];
          obj300.methods["createImage"] = func395;
          func395.definitionLine = 114;
          func395.definitionModule = "kitty";
          var func400 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func400.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call401 = callmethod(this, "image:=", [1], var_image__39__);
              return call401
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func400.paramTypes = [];
          func400.paramTypes.push([]);
          func400.paramCounts = [
            1,
          ];
          func400.variableArities = [
            false,
          ];
          obj300.methods["setImage"] = func400;
          func400.definitionLine = 118;
          func400.definitionModule = "kitty";
          var func402 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func402.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call403 = callmethod(this, "action:=", [1], var_action__39__);
              return call403
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func402.paramCounts = [
            1,
          ];
          func402.variableArities = [
            false,
          ];
          obj300.methods["setAction"] = func402;
          func402.definitionLine = 122;
          func402.definitionModule = "kitty";
          var func404 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func404.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call405 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call406 = callmethod(this, "posY:=", [1], var_y);
              return call406
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func404.paramCounts = [
            2,
          ];
          func404.variableArities = [
            false,
          ];
          obj300.methods["setLocation"] = func404;
          func404.definitionLine = 126;
          func404.definitionModule = "kitty";
          var func407 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func407.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call408 = callmethod(this, "posX", [0]);
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
          obj300.methods["getX"] = func407;
          func407.definitionLine = 131;
          func407.definitionModule = "kitty";
          var func409 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func409.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call410 = callmethod(this, "posY", [0]);
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
          obj300.methods["getY"] = func409;
          func409.definitionLine = 135;
          func409.definitionModule = "kitty";
          var func411 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call412 = callmethod(this, "rotation", [0]);
              return call412
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
          obj300.methods["getRotation"] = func411;
          func411.definitionLine = 139;
          func411.definitionModule = "kitty";
          sourceObject = obj300;
          lineNumber = 73
          obj300.data["tag"] = var_tag__39__;
          var reader_kitty_tag_413 = function() {
            return this.data["tag"];
          }
          obj300.methods["tag"] = reader_kitty_tag_413;
          obj300.data["tag"] = var_tag__39__;
          var writer_kitty_tag_413 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj300.methods["tag:="] = writer_kitty_tag_413;
          reader_kitty_tag_413.confidential = true;
          writer_kitty_tag_413.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 74
          obj300.data["posX"] = var_x__39__;
          var reader_kitty_posX_414 = function() {
            return this.data["posX"];
          }
          obj300.methods["posX"] = reader_kitty_posX_414;
          obj300.data["posX"] = var_x__39__;
          var writer_kitty_posX_414 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj300.methods["posX:="] = writer_kitty_posX_414;
          reader_kitty_posX_414.confidential = true;
          writer_kitty_posX_414.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 75
          obj300.data["posY"] = var_y__39__;
          var reader_kitty_posY_415 = function() {
            return this.data["posY"];
          }
          obj300.methods["posY"] = reader_kitty_posY_415;
          obj300.data["posY"] = var_y__39__;
          var writer_kitty_posY_415 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj300.methods["posY:="] = writer_kitty_posY_415;
          reader_kitty_posY_415.confidential = true;
          writer_kitty_posY_415.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 76
          obj300.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_416 = function() {
            return this.data["rotation"];
          }
          obj300.methods["rotation"] = reader_kitty_rotation_416;
          obj300.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_416 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj300.methods["rotation:="] = writer_kitty_rotation_416;
          reader_kitty_rotation_416.confidential = true;
          writer_kitty_rotation_416.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 79
          var block417 = Grace_allocObject();
          block417.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block417.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block417.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block417.methods["match"] = GraceBlock_match;
          block417.methods["prefix?"] = GraceBlock_lift;
          block417.receiver = this;
          block417.className = 'block<kitty:79>';
          block417.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj300.data["action"] = block417;
          var reader_kitty_action_418 = function() {
            return this.data["action"];
          }
          obj300.methods["action"] = reader_kitty_action_418;
          obj300.data["action"] = block417;
          var writer_kitty_action_418 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj300.methods["action:="] = writer_kitty_action_418;
          reader_kitty_action_418.confidential = true;
          writer_kitty_action_418.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block417)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["image"] = undefined;
          var reader_kitty_image_419 = function() {
            return this.data["image"];
          }
          obj300.methods["image"] = reader_kitty_image_419;
          obj300.data["image"] = undefined;
          var writer_kitty_image_419 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj300.methods["image:="] = writer_kitty_image_419;
          reader_kitty_image_419.confidential = true;
          writer_kitty_image_419.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 81
          onSelf = true;
          var call420 = callmethod(this, "awake", [0]);
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          superDepth = origSuperDepth;
        }
        obj_init_300.apply(inheritingObject, []);
        return obj300
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj175.methods["new()object"] = func299;
    var func421 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string422 = new GraceString("class KittyEntity");
        return string422
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func421.paramCounts = [
    ];
    func421.variableArities = [
    ];
    obj175.methods["asDebugString"] = func421;
    func421.definitionLine = 69;
    func421.definitionModule = "kitty";
    sourceObject = obj175;
    sourceObject = obj175;
    superDepth = origSuperDepth;
  }
  obj_init_175.apply(obj175, []);
  var var_KittyEntity = obj175;
  lineNumber = 144
  lineNumber = 153
  lineNumber = 157
  lineNumber = 161
  lineNumber = 165
  lineNumber = 169
  lineNumber = 173
  lineNumber = 177
  lineNumber = 183
  var func423 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func423.paramCounts[0])
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
  func423.paramCounts = [
    0,
  ];
  func423.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func423;
  func423.definitionLine = 183;
  func423.definitionModule = "kitty";
  var obj424 = Grace_allocObject();
  obj424.definitionModule = "kitty";
  obj424.definitionLine = 183;
  obj424.outer = this;
  var reader_kitty_outer_425 = function() {
    return this.outer;
  }
  obj424.methods["outer"] = reader_kitty_outer_425;
  function obj_init_424() {
    var origSuperDepth = superDepth;
    superDepth = obj424;
    obj424.annotations = [];
    var func426 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func426.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj427 = Grace_allocObject();
        obj427.definitionModule = "kitty";
        obj427.definitionLine = 183;
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
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 221
              var if430 = var_done;
              lineNumber = 217
              onSelf = true;
              var call431 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call431)) {
                lineNumber = 219
                lineNumber = 218
                var bool432 = new GraceBoolean(false)
                return bool432
              }
              lineNumber = 222
              lineNumber = 183
              lineNumber = 221
              var call433 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call434 = callmethod(this, "document:=", [1], call433);
              lineNumber = 222
              lineNumber = 221
              lineNumber = 222
              var string435 = new GraceString("standard-canvas");
              onSelf = true;
              var call436 = callmethod(this, "document", [0]);
              var call437 = callmethod(call436,"getElementById", [1], string435);
              onSelf = true;
              var call438 = callmethod(this, "canvas:=", [1], call437);
              lineNumber = 224
              lineNumber = 221
              lineNumber = 223
              onSelf = true;
              var call439 = callmethod(this, "canvas", [0]);
              var call440 = callmethod(call439,"width", [0]);
              onSelf = true;
              var call441 = callmethod(this, "canvasWidth:=", [1], call440);
              lineNumber = 227
              lineNumber = 223
              lineNumber = 224
              onSelf = true;
              var call442 = callmethod(this, "canvas", [0]);
              var call443 = callmethod(call442,"height", [0]);
              onSelf = true;
              var call444 = callmethod(this, "canvasHeight:=", [1], call443);
              lineNumber = 239
              var block445 = Grace_allocObject();
              block445.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block445.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block445.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block445.methods["match"] = GraceBlock_match;
              block445.methods["prefix?"] = GraceBlock_lift;
              block445.receiver = this;
              block445.className = 'block<kitty:239>';
              block445.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                lineNumber = 229
                onSelf = true;
                var call446 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call448 = callmethod(this, "canvas", [0]);
                var call449 = callmethod(call448,"offsetWidth", [0]);
                onSelf = true;
                var call451 = callmethod(this, "canvas", [0]);
                var call452 = callmethod(call451,"offsetLeft", [0]);
                var call454 = callmethod(var_ev,"clientX", [0]);
                var diff456 = callmethod(call454, "-", [1], call452);
                var quotient458 = callmethod(diff456, "/", [1], call449);
                var prod460 = callmethod(quotient458, "*", [1], call446);
                var var_x = prod460;
                lineNumber = 230;
                moduleName = "kitty";
                lineNumber = 229
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 234
                lineNumber = 230
                onSelf = true;
                var call461 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call463 = callmethod(this, "canvas", [0]);
                var call464 = callmethod(call463,"offsetHeight", [0]);
                onSelf = true;
                var call466 = callmethod(this, "canvas", [0]);
                var call467 = callmethod(call466,"offsetTop", [0]);
                var call469 = callmethod(var_ev,"clientY", [0]);
                var diff471 = callmethod(call469, "-", [1], call467);
                var quotient473 = callmethod(diff471, "/", [1], call464);
                var prod475 = callmethod(quotient473, "*", [1], call461);
                var var_y = prod475;
                lineNumber = 234;
                moduleName = "kitty";
                lineNumber = 230
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 238
                var if476 = var_done;
                lineNumber = 234
                var opresult479 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call482 = callmethod(this, "canvasWidth", [0]);
                var diff484 = callmethod(call482, "-", [1], new GraceNum(20));
                var opresult487 = callmethod(var_x, ">", [1], diff484);
                var opresult489 = callmethod(opresult487, "&&", [1], opresult479);
                if (Grace_isTrue(opresult489)) {
                  lineNumber = 235
                  var call490 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 236
                  onSelf = true;
                  var call491 = callmethod(this, "stop", [0]);
                  if476 = call491;
                }
                return if476;
              };
              var_mouseDownListener = block445;
              lineNumber = 239
              var string492 = new GraceString("mousedown");
              onSelf = true;
              var call493 = callmethod(this, "canvas", [0]);
              var call494 = callmethod(call493,"addEventListener", [2], string492, var_mouseDownListener);
              lineNumber = 249
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
              block495.className = 'block<kitty:249>';
              block495.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 247
                var if496 = var_done;
                lineNumber = 244
                var call498 = callmethod(var_ev,"keyCode", [0]);
                var opresult500 = callmethod(call498, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult500)) {
                  lineNumber = 245
                  onSelf = true;
                  var call501 = callmethod(this, "stop", [0]);
                  if496 = call501;
                }
                lineNumber = 248
                lineNumber = 244
                lineNumber = 247
                var call502 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call503 = callmethod(this, "currentKeyDown:=", [1], call502);
                return call503;
              };
              var_keyDownListener = block495;
              lineNumber = 249
              var string504 = new GraceString("keydown");
              onSelf = true;
              var call505 = callmethod(this, "document", [0]);
              var call506 = callmethod(call505,"addEventListener", [2], string504, var_keyDownListener);
              lineNumber = 255
              var block507 = Grace_allocObject();
              block507.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block507.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block507.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block507.methods["match"] = GraceBlock_match;
              block507.methods["prefix?"] = GraceBlock_lift;
              block507.receiver = this;
              block507.className = 'block<kitty:255>';
              block507.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 254
                lineNumber = 247
                lineNumber = 254
                lineNumber = 253
                var call508 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call509 = callmethod(this, "currentKeyDown:=", [1], call508);
                return call509;
              };
              var_keyUpListener = block507;
              lineNumber = 255
              var string510 = new GraceString("keyup");
              onSelf = true;
              var call511 = callmethod(this, "document", [0]);
              var call512 = callmethod(call511,"addEventListener", [2], string510, var_keyUpListener);
              lineNumber = 257
              lineNumber = 247
              lineNumber = 257
              var string513 = new GraceString("canvas");
              var call514 = callmethod(var_dom,"document", [0]);
              var call515 = callmethod(call514,"createElement", [1], string513);
              onSelf = true;
              var call516 = callmethod(this, "backingCanvas:=", [1], call515);
              lineNumber = 259
              lineNumber = 257
              lineNumber = 258
              onSelf = true;
              var call517 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call518 = callmethod(this, "backingCanvas", [0]);
              var call519 = callmethod(call518,"height:=", [1], call517);
              lineNumber = 260
              lineNumber = 257
              lineNumber = 259
              onSelf = true;
              var call520 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call521 = callmethod(this, "backingCanvas", [0]);
              var call522 = callmethod(call521,"width:=", [1], call520);
              lineNumber = 260
              lineNumber = 257
              lineNumber = 260
              var string523 = new GraceString("2d");
              onSelf = true;
              var call524 = callmethod(this, "backingCanvas", [0]);
              var call525 = callmethod(call524,"getContext", [1], string523);
              onSelf = true;
              var call526 = callmethod(this, "backingContext:=", [1], call525);
              lineNumber = 261
              lineNumber = 257
              lineNumber = 261
              var string527 = new GraceString("2d");
              onSelf = true;
              var call528 = callmethod(this, "canvas", [0]);
              var call529 = callmethod(call528,"getContext", [1], string527);
              onSelf = true;
              var call530 = callmethod(this, "mctx:=", [1], call529);
              lineNumber = 264
              var string531 = new GraceString("doggo.jpg");
              onSelf = true;
              var call532 = callmethod(this, "setBackground", [1], string531);
              lineNumber = 276
              lineNumber = 257
              lineNumber = 270
              var bool533 = new GraceBoolean(true)
              onSelf = true;
              var call534 = callmethod(this, "isInit:=", [1], bool533);
              return call534
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
          obj427.methods["init"] = func429;
          func429.definitionLine = 213;
          func429.definitionModule = "kitty";
          var func535 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func535.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 282
              lineNumber = 257
              lineNumber = 281
              var bool536 = new GraceBoolean(true)
              onSelf = true;
              var call537 = callmethod(this, "isRunning:=", [1], bool536);
              lineNumber = 282
              var block538 = Grace_allocObject();
              block538.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block538.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block538.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block538.methods["match"] = GraceBlock_match;
              block538.methods["prefix?"] = GraceBlock_lift;
              block538.receiver = this;
              block538.className = 'block<kitty:282>';
              block538.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call539 = callmethod(this, "isRunning", [0]);
                return call539;
              };
              lineNumber = 286
              var block540 = Grace_allocObject();
              block540.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block540.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block540.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block540.methods["match"] = GraceBlock_match;
              block540.methods["prefix?"] = GraceBlock_lift;
              block540.receiver = this;
              block540.className = 'block<kitty:286>';
              block540.real = function(
              ) {
                sourceObject = this;
                lineNumber = 283
                onSelf = true;
                var call541 = callmethod(this, "update", [0]);
                return call541;
              };
              lineNumber = 282
              var call542 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block538, new GraceNum(10), block540);
              return call542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func535.paramCounts = [
            0,
          ];
          func535.variableArities = [
            false,
          ];
          obj427.methods["start"] = func535;
          func535.definitionLine = 279;
          func535.definitionModule = "kitty";
          var func543 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 295
              lineNumber = 257
              lineNumber = 294
              onSelf = true;
              var call544 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call545 = callmethod(this, "mctx", [0]);
              var call546 = callmethod(call545,"fillStyle:=", [1], call544);
              lineNumber = 295
              onSelf = true;
              var call547 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call548 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call549 = callmethod(this, "mctx", [0]);
              var call550 = callmethod(call549,"fillRect", [4], new GraceNum(0), new GraceNum(0), call547, call548);
              lineNumber = 296
              onSelf = true;
              var call551 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call552 = callmethod(this, "mctx", [0]);
              var call553 = callmethod(call552,"drawImage", [3], call551, new GraceNum(0), new GraceNum(0));
              lineNumber = 297
              onSelf = true;
              var call554 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call556 = callmethod(this, "canvasWidth", [0]);
              var quotient558 = callmethod(call556, "/", [1], new GraceNum(2));
              onSelf = true;
              var call560 = callmethod(this, "canvasHeight", [0]);
              var quotient562 = callmethod(call560, "/", [1], new GraceNum(2));
              onSelf = true;
              var call563 = callmethod(this, "background", [0]);
              var call564 = callmethod(call563,"draw", [4], call554, quotient558, quotient562, new GraceNum(0));
              lineNumber = 300
              onSelf = true;
              var call565 = callmethod(this, "entities", [0]);
              lineNumber = 306
              var block566 = Grace_allocObject();
              block566.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block566.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block566.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block566.methods["match"] = GraceBlock_match;
              block566.methods["prefix?"] = GraceBlock_lift;
              block566.receiver = this;
              block566.className = 'block<kitty:306>';
              block566.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 301
                var call567 = callmethod(var_entity,"update", [0]);
                lineNumber = 302
                onSelf = true;
                var call568 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call570 = callmethod(this, "canvasWidth", [0]);
                var quotient572 = callmethod(call570, "/", [1], new GraceNum(2));
                onSelf = true;
                var call574 = callmethod(this, "canvasHeight", [0]);
                var quotient576 = callmethod(call574, "/", [1], new GraceNum(2));
                var call577 = callmethod(var_entity,"draw", [3], call568, quotient572, quotient576);
                return call577;
              };
              var call578 = callmethod(Grace_prelude,"for()do", [1, 1], call565, block566);
              return call578
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
          obj427.methods["update"] = func543;
          func543.definitionLine = 289;
          func543.definitionModule = "kitty";
          var func579 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func579.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              var string580 = new GraceString("WORLD STOPPING...");
              var call581 = Grace_print(string580);
              lineNumber = 311
              lineNumber = 301
              lineNumber = 310
              var bool582 = new GraceBoolean(false)
              onSelf = true;
              var call583 = callmethod(this, "isRunning:=", [1], bool582);
              lineNumber = 311
              var string584 = new GraceString("mousedown");
              onSelf = true;
              var call585 = callmethod(this, "canvas", [0]);
              var call586 = callmethod(call585,"removeEventListener", [2], string584, var_mouseDownListener);
              lineNumber = 312
              var string587 = new GraceString("keydown");
              onSelf = true;
              var call588 = callmethod(this, "document", [0]);
              var call589 = callmethod(call588,"removeEventListener", [2], string587, var_keyDownListener);
              lineNumber = 313
              var string590 = new GraceString("keyup");
              onSelf = true;
              var call591 = callmethod(this, "document", [0]);
              var call592 = callmethod(call591,"removeEventListener", [2], string590, var_keyUpListener);
              return call592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func579.paramCounts = [
            0,
          ];
          func579.variableArities = [
            false,
          ];
          obj427.methods["stop"] = func579;
          func579.definitionLine = 308;
          func579.definitionModule = "kitty";
          var func593 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 318
              lineNumber = 317
              onSelf = true;
              var call594 = callmethod(this, "currentKeyDown", [0]);
              var opresult597 = callmethod(var_key, "==", [1], call594);
              return opresult597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func593.paramCounts = [
            1,
          ];
          func593.variableArities = [
            false,
          ];
          obj427.methods["isKeyDown"] = func593;
          func593.definitionLine = 316;
          func593.definitionModule = "kitty";
          var func598 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 321
              lineNumber = 301
              lineNumber = 321
              onSelf = true;
              var call599 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call600 = callmethod(this, "canvasHeight", [0]);
              var call601 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call602 = callmethod(call601, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call603 = callmethod(call602, "Image()width()height", [1, 1, 1], var_url, call599, call600);
              onSelf = true;
              var call604 = callmethod(this, "background:=", [1], call603);
              return call604
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
          obj427.methods["setBackground"] = func598;
          func598.definitionLine = 320;
          func598.definitionModule = "kitty";
          var func605 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func605.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              onSelf = true;
              var call606 = callmethod(this, "entities", [0]);
              var call607 = callmethod(call606,"push", [1], var_e);
              return call607
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func605.paramTypes = [];
          func605.paramTypes.push([]);
          func605.paramCounts = [
            1,
          ];
          func605.variableArities = [
            false,
          ];
          obj427.methods["addEntity"] = func605;
          func605.definitionLine = 324;
          func605.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 330
              lineNumber = 329
              onSelf = true;
              var call609 = callmethod(this, "mctx", [0]);
              return call609
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func608.paramCounts = [
            0,
          ];
          func608.variableArities = [
            false,
          ];
          obj427.methods["getContext"] = func608;
          func608.definitionLine = 328;
          func608.definitionModule = "kitty";
          sourceObject = obj427;
          obj427.data["background"] = undefined;
          var reader_kitty_background_610 = function() {
            return this.data["background"];
          }
          obj427.methods["background"] = reader_kitty_background_610;
          obj427.data["background"] = undefined;
          var writer_kitty_background_610 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj427.methods["background:="] = writer_kitty_background_610;
          reader_kitty_background_610.confidential = true;
          writer_kitty_background_610.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 188
          var string611 = new GraceString("black");
          obj427.data["backgroundColour"] = string611;
          var reader_kitty_backgroundColour_612 = function() {
            return this.data["backgroundColour"];
          }
          obj427.methods["backgroundColour"] = reader_kitty_backgroundColour_612;
          obj427.data["backgroundColour"] = string611;
          var writer_kitty_backgroundColour_612 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj427.methods["backgroundColour:="] = writer_kitty_backgroundColour_612;
          reader_kitty_backgroundColour_612.confidential = true;
          writer_kitty_backgroundColour_612.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string611)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["document"] = undefined;
          var reader_kitty_document_613 = function() {
            return this.data["document"];
          }
          obj427.methods["document"] = reader_kitty_document_613;
          obj427.data["document"] = undefined;
          var writer_kitty_document_613 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj427.methods["document:="] = writer_kitty_document_613;
          reader_kitty_document_613.confidential = true;
          writer_kitty_document_613.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_614 = function() {
            return this.data["backingCanvas"];
          }
          obj427.methods["backingCanvas"] = reader_kitty_backingCanvas_614;
          obj427.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_614 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj427.methods["backingCanvas:="] = writer_kitty_backingCanvas_614;
          reader_kitty_backingCanvas_614.confidential = true;
          writer_kitty_backingCanvas_614.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["backingContext"] = undefined;
          var reader_kitty_backingContext_615 = function() {
            return this.data["backingContext"];
          }
          obj427.methods["backingContext"] = reader_kitty_backingContext_615;
          obj427.data["backingContext"] = undefined;
          var writer_kitty_backingContext_615 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj427.methods["backingContext:="] = writer_kitty_backingContext_615;
          reader_kitty_backingContext_615.confidential = true;
          writer_kitty_backingContext_615.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["canvas"] = undefined;
          var reader_kitty_canvas_616 = function() {
            return this.data["canvas"];
          }
          obj427.methods["canvas"] = reader_kitty_canvas_616;
          obj427.data["canvas"] = undefined;
          var writer_kitty_canvas_616 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj427.methods["canvas:="] = writer_kitty_canvas_616;
          reader_kitty_canvas_616.confidential = true;
          writer_kitty_canvas_616.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_617 = function() {
            return this.data["canvasWidth"];
          }
          obj427.methods["canvasWidth"] = reader_kitty_canvasWidth_617;
          obj427.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_617 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj427.methods["canvasWidth:="] = writer_kitty_canvasWidth_617;
          reader_kitty_canvasWidth_617.confidential = true;
          writer_kitty_canvasWidth_617.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_618 = function() {
            return this.data["canvasHeight"];
          }
          obj427.methods["canvasHeight"] = reader_kitty_canvasHeight_618;
          obj427.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_618 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj427.methods["canvasHeight:="] = writer_kitty_canvasHeight_618;
          reader_kitty_canvasHeight_618.confidential = true;
          writer_kitty_canvasHeight_618.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 199
          var call619 = callmethod(var_collections,"list", [0]);
          var call620 = callmethod(call619,"new", [0]);
          obj427.data["entities"] = call620;
          var reader_kitty_entities_621 = function() {
            return this.data["entities"];
          }
          obj427.methods["entities"] = reader_kitty_entities_621;
          obj427.data["entities"] = call620;
          var writer_kitty_entities_621 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj427.methods["entities:="] = writer_kitty_entities_621;
          reader_kitty_entities_621.confidential = true;
          writer_kitty_entities_621.confidential = true;
          lineNumber = 201;
          moduleName = "kitty";
          lineNumber = 199
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call620)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 201
          var bool622 = new GraceBoolean(false)
          obj427.data["isInit"] = bool622;
          var reader_kitty_isInit_623 = function() {
            return this.data["isInit"];
          }
          obj427.methods["isInit"] = reader_kitty_isInit_623;
          obj427.data["isInit"] = bool622;
          var writer_kitty_isInit_623 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj427.methods["isInit:="] = writer_kitty_isInit_623;
          reader_kitty_isInit_623.confidential = true;
          writer_kitty_isInit_623.confidential = true;
          lineNumber = 202;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool622)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 202
          var bool624 = new GraceBoolean(false)
          obj427.data["isRunning"] = bool624;
          var reader_kitty_isRunning_625 = function() {
            return this.data["isRunning"];
          }
          obj427.methods["isRunning"] = reader_kitty_isRunning_625;
          obj427.data["isRunning"] = bool624;
          var writer_kitty_isRunning_625 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj427.methods["isRunning:="] = writer_kitty_isRunning_625;
          reader_kitty_isRunning_625.confidential = true;
          writer_kitty_isRunning_625.confidential = true;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 202
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool624)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["mctx"] = undefined;
          var reader_kitty_mctx_626 = function() {
            return this.data["mctx"];
          }
          obj427.methods["mctx"] = reader_kitty_mctx_626;
          obj427.data["mctx"] = undefined;
          var writer_kitty_mctx_626 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj427.methods["mctx:="] = writer_kitty_mctx_626;
          reader_kitty_mctx_626.confidential = true;
          writer_kitty_mctx_626.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 208
          lineNumber = 206
          var call627 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj427.data["currentKeyDown"] = call627;
          var reader_kitty_currentKeyDown_628 = function() {
            return this.data["currentKeyDown"];
          }
          obj427.methods["currentKeyDown"] = reader_kitty_currentKeyDown_628;
          obj427.data["currentKeyDown"] = call627;
          var writer_kitty_currentKeyDown_628 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj427.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_628;
          reader_kitty_currentKeyDown_628.confidential = true;
          writer_kitty_currentKeyDown_628.confidential = true;
          lineNumber = 208;
          moduleName = "kitty";
          lineNumber = 206
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call627)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj427.mutable = true;
          sourceObject = obj427;
          obj427.data["ent"] = undefined;
          var reader_kitty_ent_629 = function() {
            return this.data["ent"];
          }
          obj427.methods["ent"] = reader_kitty_ent_629;
          obj427.data["ent"] = undefined;
          var writer_kitty_ent_629 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj427.methods["ent:="] = writer_kitty_ent_629;
          reader_kitty_ent_629.confidential = true;
          writer_kitty_ent_629.confidential = true;
          obj427.mutable = true;
          sourceObject = obj427;
          lineNumber = 210
          onSelf = true;
          var call630 = callmethod(this, "init", [0]);
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          sourceObject = obj427;
          superDepth = origSuperDepth;
        }
        obj_init_427.apply(obj427, []);
        return obj427
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
    obj424.methods["new"] = func426;
    func426.definitionLine = 183;
    func426.definitionModule = "kitty";
    var func631 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj632 = Grace_allocObject();
        obj632.definitionModule = "kitty";
        obj632.definitionLine = 183;
        var inho632 = inheritingObject;
        while (inho632.superobj) inho632 = inho632.superobj;
        inho632.superobj = obj632;
        obj632.data = inheritingObject.data;
        obj632.outer = this;
        var reader_kitty_outer_633 = function() {
          return this.outer;
        }
        obj632.methods["outer"] = reader_kitty_outer_633;
        function obj_init_632() {
          var origSuperDepth = superDepth;
          superDepth = obj632;
          obj632.annotations = [];
          var func634 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 221
              var if635 = var_done;
              lineNumber = 217
              onSelf = true;
              var call636 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call636)) {
                lineNumber = 219
                lineNumber = 218
                var bool637 = new GraceBoolean(false)
                return bool637
              }
              lineNumber = 222
              lineNumber = 199
              lineNumber = 221
              var call638 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call639 = callmethod(this, "document:=", [1], call638);
              lineNumber = 222
              lineNumber = 221
              lineNumber = 222
              var string640 = new GraceString("standard-canvas");
              onSelf = true;
              var call641 = callmethod(this, "document", [0]);
              var call642 = callmethod(call641,"getElementById", [1], string640);
              onSelf = true;
              var call643 = callmethod(this, "canvas:=", [1], call642);
              lineNumber = 224
              lineNumber = 221
              lineNumber = 223
              onSelf = true;
              var call644 = callmethod(this, "canvas", [0]);
              var call645 = callmethod(call644,"width", [0]);
              onSelf = true;
              var call646 = callmethod(this, "canvasWidth:=", [1], call645);
              lineNumber = 227
              lineNumber = 223
              lineNumber = 224
              onSelf = true;
              var call647 = callmethod(this, "canvas", [0]);
              var call648 = callmethod(call647,"height", [0]);
              onSelf = true;
              var call649 = callmethod(this, "canvasHeight:=", [1], call648);
              lineNumber = 239
              var block650 = Grace_allocObject();
              block650.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block650.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block650.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block650.methods["match"] = GraceBlock_match;
              block650.methods["prefix?"] = GraceBlock_lift;
              block650.receiver = this;
              block650.className = 'block<kitty:239>';
              block650.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 230
                lineNumber = 229
                onSelf = true;
                var call651 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call653 = callmethod(this, "canvas", [0]);
                var call654 = callmethod(call653,"offsetWidth", [0]);
                onSelf = true;
                var call656 = callmethod(this, "canvas", [0]);
                var call657 = callmethod(call656,"offsetLeft", [0]);
                var call659 = callmethod(var_ev,"clientX", [0]);
                var diff661 = callmethod(call659, "-", [1], call657);
                var quotient663 = callmethod(diff661, "/", [1], call654);
                var prod665 = callmethod(quotient663, "*", [1], call651);
                var var_x = prod665;
                lineNumber = 230;
                moduleName = "kitty";
                lineNumber = 229
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 234
                lineNumber = 230
                onSelf = true;
                var call666 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call668 = callmethod(this, "canvas", [0]);
                var call669 = callmethod(call668,"offsetHeight", [0]);
                onSelf = true;
                var call671 = callmethod(this, "canvas", [0]);
                var call672 = callmethod(call671,"offsetTop", [0]);
                var call674 = callmethod(var_ev,"clientY", [0]);
                var diff676 = callmethod(call674, "-", [1], call672);
                var quotient678 = callmethod(diff676, "/", [1], call669);
                var prod680 = callmethod(quotient678, "*", [1], call666);
                var var_y = prod680;
                lineNumber = 234;
                moduleName = "kitty";
                lineNumber = 230
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 238
                var if681 = var_done;
                lineNumber = 234
                var opresult684 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call687 = callmethod(this, "canvasWidth", [0]);
                var diff689 = callmethod(call687, "-", [1], new GraceNum(20));
                var opresult692 = callmethod(var_x, ">", [1], diff689);
                var opresult694 = callmethod(opresult692, "&&", [1], opresult684);
                if (Grace_isTrue(opresult694)) {
                  lineNumber = 235
                  var call695 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 236
                  onSelf = true;
                  var call696 = callmethod(this, "stop", [0]);
                  if681 = call696;
                }
                return if681;
              };
              var_mouseDownListener = block650;
              lineNumber = 239
              var string697 = new GraceString("mousedown");
              onSelf = true;
              var call698 = callmethod(this, "canvas", [0]);
              var call699 = callmethod(call698,"addEventListener", [2], string697, var_mouseDownListener);
              lineNumber = 249
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
              block700.className = 'block<kitty:249>';
              block700.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 247
                var if701 = var_done;
                lineNumber = 244
                var call703 = callmethod(var_ev,"keyCode", [0]);
                var opresult705 = callmethod(call703, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult705)) {
                  lineNumber = 245
                  onSelf = true;
                  var call706 = callmethod(this, "stop", [0]);
                  if701 = call706;
                }
                lineNumber = 248
                lineNumber = 244
                lineNumber = 247
                var call707 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call708 = callmethod(this, "currentKeyDown:=", [1], call707);
                return call708;
              };
              var_keyDownListener = block700;
              lineNumber = 249
              var string709 = new GraceString("keydown");
              onSelf = true;
              var call710 = callmethod(this, "document", [0]);
              var call711 = callmethod(call710,"addEventListener", [2], string709, var_keyDownListener);
              lineNumber = 255
              var block712 = Grace_allocObject();
              block712.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block712.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block712.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block712.methods["match"] = GraceBlock_match;
              block712.methods["prefix?"] = GraceBlock_lift;
              block712.receiver = this;
              block712.className = 'block<kitty:255>';
              block712.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 254
                lineNumber = 247
                lineNumber = 254
                lineNumber = 253
                var call713 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call714 = callmethod(this, "currentKeyDown:=", [1], call713);
                return call714;
              };
              var_keyUpListener = block712;
              lineNumber = 255
              var string715 = new GraceString("keyup");
              onSelf = true;
              var call716 = callmethod(this, "document", [0]);
              var call717 = callmethod(call716,"addEventListener", [2], string715, var_keyUpListener);
              lineNumber = 257
              lineNumber = 247
              lineNumber = 257
              var string718 = new GraceString("canvas");
              var call719 = callmethod(var_dom,"document", [0]);
              var call720 = callmethod(call719,"createElement", [1], string718);
              onSelf = true;
              var call721 = callmethod(this, "backingCanvas:=", [1], call720);
              lineNumber = 259
              lineNumber = 257
              lineNumber = 258
              onSelf = true;
              var call722 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call723 = callmethod(this, "backingCanvas", [0]);
              var call724 = callmethod(call723,"height:=", [1], call722);
              lineNumber = 260
              lineNumber = 257
              lineNumber = 259
              onSelf = true;
              var call725 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call726 = callmethod(this, "backingCanvas", [0]);
              var call727 = callmethod(call726,"width:=", [1], call725);
              lineNumber = 260
              lineNumber = 257
              lineNumber = 260
              var string728 = new GraceString("2d");
              onSelf = true;
              var call729 = callmethod(this, "backingCanvas", [0]);
              var call730 = callmethod(call729,"getContext", [1], string728);
              onSelf = true;
              var call731 = callmethod(this, "backingContext:=", [1], call730);
              lineNumber = 261
              lineNumber = 257
              lineNumber = 261
              var string732 = new GraceString("2d");
              onSelf = true;
              var call733 = callmethod(this, "canvas", [0]);
              var call734 = callmethod(call733,"getContext", [1], string732);
              onSelf = true;
              var call735 = callmethod(this, "mctx:=", [1], call734);
              lineNumber = 264
              var string736 = new GraceString("doggo.jpg");
              onSelf = true;
              var call737 = callmethod(this, "setBackground", [1], string736);
              lineNumber = 276
              lineNumber = 257
              lineNumber = 270
              var bool738 = new GraceBoolean(true)
              onSelf = true;
              var call739 = callmethod(this, "isInit:=", [1], bool738);
              return call739
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func634.paramCounts = [
            0,
          ];
          func634.variableArities = [
            false,
          ];
          obj632.methods["init"] = func634;
          func634.definitionLine = 213;
          func634.definitionModule = "kitty";
          var func740 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func740.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 282
              lineNumber = 257
              lineNumber = 281
              var bool741 = new GraceBoolean(true)
              onSelf = true;
              var call742 = callmethod(this, "isRunning:=", [1], bool741);
              lineNumber = 282
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
              block743.className = 'block<kitty:282>';
              block743.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call744 = callmethod(this, "isRunning", [0]);
                return call744;
              };
              lineNumber = 286
              var block745 = Grace_allocObject();
              block745.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block745.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block745.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block745.methods["match"] = GraceBlock_match;
              block745.methods["prefix?"] = GraceBlock_lift;
              block745.receiver = this;
              block745.className = 'block<kitty:286>';
              block745.real = function(
              ) {
                sourceObject = this;
                lineNumber = 283
                onSelf = true;
                var call746 = callmethod(this, "update", [0]);
                return call746;
              };
              lineNumber = 282
              var call747 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block743, new GraceNum(10), block745);
              return call747
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func740.paramCounts = [
            0,
          ];
          func740.variableArities = [
            false,
          ];
          obj632.methods["start"] = func740;
          func740.definitionLine = 279;
          func740.definitionModule = "kitty";
          var func748 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func748.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 295
              lineNumber = 257
              lineNumber = 294
              onSelf = true;
              var call749 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call750 = callmethod(this, "mctx", [0]);
              var call751 = callmethod(call750,"fillStyle:=", [1], call749);
              lineNumber = 295
              onSelf = true;
              var call752 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call753 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call754 = callmethod(this, "mctx", [0]);
              var call755 = callmethod(call754,"fillRect", [4], new GraceNum(0), new GraceNum(0), call752, call753);
              lineNumber = 296
              onSelf = true;
              var call756 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call757 = callmethod(this, "mctx", [0]);
              var call758 = callmethod(call757,"drawImage", [3], call756, new GraceNum(0), new GraceNum(0));
              lineNumber = 297
              onSelf = true;
              var call759 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call761 = callmethod(this, "canvasWidth", [0]);
              var quotient763 = callmethod(call761, "/", [1], new GraceNum(2));
              onSelf = true;
              var call765 = callmethod(this, "canvasHeight", [0]);
              var quotient767 = callmethod(call765, "/", [1], new GraceNum(2));
              onSelf = true;
              var call768 = callmethod(this, "background", [0]);
              var call769 = callmethod(call768,"draw", [4], call759, quotient763, quotient767, new GraceNum(0));
              lineNumber = 300
              onSelf = true;
              var call770 = callmethod(this, "entities", [0]);
              lineNumber = 306
              var block771 = Grace_allocObject();
              block771.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block771.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block771.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block771.methods["match"] = GraceBlock_match;
              block771.methods["prefix?"] = GraceBlock_lift;
              block771.receiver = this;
              block771.className = 'block<kitty:306>';
              block771.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 301
                var call772 = callmethod(var_entity,"update", [0]);
                lineNumber = 302
                onSelf = true;
                var call773 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call775 = callmethod(this, "canvasWidth", [0]);
                var quotient777 = callmethod(call775, "/", [1], new GraceNum(2));
                onSelf = true;
                var call779 = callmethod(this, "canvasHeight", [0]);
                var quotient781 = callmethod(call779, "/", [1], new GraceNum(2));
                var call782 = callmethod(var_entity,"draw", [3], call773, quotient777, quotient781);
                return call782;
              };
              var call783 = callmethod(Grace_prelude,"for()do", [1, 1], call770, block771);
              return call783
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
          obj632.methods["update"] = func748;
          func748.definitionLine = 289;
          func748.definitionModule = "kitty";
          var func784 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func784.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 309
              var string785 = new GraceString("WORLD STOPPING...");
              var call786 = Grace_print(string785);
              lineNumber = 311
              lineNumber = 301
              lineNumber = 310
              var bool787 = new GraceBoolean(false)
              onSelf = true;
              var call788 = callmethod(this, "isRunning:=", [1], bool787);
              lineNumber = 311
              var string789 = new GraceString("mousedown");
              onSelf = true;
              var call790 = callmethod(this, "canvas", [0]);
              var call791 = callmethod(call790,"removeEventListener", [2], string789, var_mouseDownListener);
              lineNumber = 312
              var string792 = new GraceString("keydown");
              onSelf = true;
              var call793 = callmethod(this, "document", [0]);
              var call794 = callmethod(call793,"removeEventListener", [2], string792, var_keyDownListener);
              lineNumber = 313
              var string795 = new GraceString("keyup");
              onSelf = true;
              var call796 = callmethod(this, "document", [0]);
              var call797 = callmethod(call796,"removeEventListener", [2], string795, var_keyUpListener);
              return call797
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func784.paramCounts = [
            0,
          ];
          func784.variableArities = [
            false,
          ];
          obj632.methods["stop"] = func784;
          func784.definitionLine = 308;
          func784.definitionModule = "kitty";
          var func798 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func798.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 318
              lineNumber = 317
              onSelf = true;
              var call799 = callmethod(this, "currentKeyDown", [0]);
              var opresult802 = callmethod(var_key, "==", [1], call799);
              return opresult802
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func798.paramCounts = [
            1,
          ];
          func798.variableArities = [
            false,
          ];
          obj632.methods["isKeyDown"] = func798;
          func798.definitionLine = 316;
          func798.definitionModule = "kitty";
          var func803 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func803.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 321
              lineNumber = 301
              lineNumber = 321
              onSelf = true;
              var call804 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call805 = callmethod(this, "canvasHeight", [0]);
              var call806 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call807 = callmethod(call806, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call808 = callmethod(call807, "Image()width()height", [1, 1, 1], var_url, call804, call805);
              onSelf = true;
              var call809 = callmethod(this, "background:=", [1], call808);
              return call809
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func803.paramCounts = [
            1,
          ];
          func803.variableArities = [
            false,
          ];
          obj632.methods["setBackground"] = func803;
          func803.definitionLine = 320;
          func803.definitionModule = "kitty";
          var func810 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func810.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 325
              onSelf = true;
              var call811 = callmethod(this, "entities", [0]);
              var call812 = callmethod(call811,"push", [1], var_e);
              return call812
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func810.paramTypes = [];
          func810.paramTypes.push([]);
          func810.paramCounts = [
            1,
          ];
          func810.variableArities = [
            false,
          ];
          obj632.methods["addEntity"] = func810;
          func810.definitionLine = 324;
          func810.definitionModule = "kitty";
          var func813 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func813.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 330
              lineNumber = 329
              onSelf = true;
              var call814 = callmethod(this, "mctx", [0]);
              return call814
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func813.paramCounts = [
            0,
          ];
          func813.variableArities = [
            false,
          ];
          obj632.methods["getContext"] = func813;
          func813.definitionLine = 328;
          func813.definitionModule = "kitty";
          sourceObject = obj632;
          obj632.data["background"] = undefined;
          var reader_kitty_background_815 = function() {
            return this.data["background"];
          }
          obj632.methods["background"] = reader_kitty_background_815;
          obj632.data["background"] = undefined;
          var writer_kitty_background_815 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj632.methods["background:="] = writer_kitty_background_815;
          reader_kitty_background_815.confidential = true;
          writer_kitty_background_815.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 188
          var string816 = new GraceString("black");
          obj632.data["backgroundColour"] = string816;
          var reader_kitty_backgroundColour_817 = function() {
            return this.data["backgroundColour"];
          }
          obj632.methods["backgroundColour"] = reader_kitty_backgroundColour_817;
          obj632.data["backgroundColour"] = string816;
          var writer_kitty_backgroundColour_817 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj632.methods["backgroundColour:="] = writer_kitty_backgroundColour_817;
          reader_kitty_backgroundColour_817.confidential = true;
          writer_kitty_backgroundColour_817.confidential = true;
          lineNumber = 190;
          moduleName = "kitty";
          lineNumber = 188
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string816)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["document"] = undefined;
          var reader_kitty_document_818 = function() {
            return this.data["document"];
          }
          obj632.methods["document"] = reader_kitty_document_818;
          obj632.data["document"] = undefined;
          var writer_kitty_document_818 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj632.methods["document:="] = writer_kitty_document_818;
          reader_kitty_document_818.confidential = true;
          writer_kitty_document_818.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_819 = function() {
            return this.data["backingCanvas"];
          }
          obj632.methods["backingCanvas"] = reader_kitty_backingCanvas_819;
          obj632.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_819 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj632.methods["backingCanvas:="] = writer_kitty_backingCanvas_819;
          reader_kitty_backingCanvas_819.confidential = true;
          writer_kitty_backingCanvas_819.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["backingContext"] = undefined;
          var reader_kitty_backingContext_820 = function() {
            return this.data["backingContext"];
          }
          obj632.methods["backingContext"] = reader_kitty_backingContext_820;
          obj632.data["backingContext"] = undefined;
          var writer_kitty_backingContext_820 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj632.methods["backingContext:="] = writer_kitty_backingContext_820;
          reader_kitty_backingContext_820.confidential = true;
          writer_kitty_backingContext_820.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["canvas"] = undefined;
          var reader_kitty_canvas_821 = function() {
            return this.data["canvas"];
          }
          obj632.methods["canvas"] = reader_kitty_canvas_821;
          obj632.data["canvas"] = undefined;
          var writer_kitty_canvas_821 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj632.methods["canvas:="] = writer_kitty_canvas_821;
          reader_kitty_canvas_821.confidential = true;
          writer_kitty_canvas_821.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_822 = function() {
            return this.data["canvasWidth"];
          }
          obj632.methods["canvasWidth"] = reader_kitty_canvasWidth_822;
          obj632.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_822 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj632.methods["canvasWidth:="] = writer_kitty_canvasWidth_822;
          reader_kitty_canvasWidth_822.confidential = true;
          writer_kitty_canvasWidth_822.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_823 = function() {
            return this.data["canvasHeight"];
          }
          obj632.methods["canvasHeight"] = reader_kitty_canvasHeight_823;
          obj632.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_823 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj632.methods["canvasHeight:="] = writer_kitty_canvasHeight_823;
          reader_kitty_canvasHeight_823.confidential = true;
          writer_kitty_canvasHeight_823.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 199
          var call824 = callmethod(var_collections,"list", [0]);
          var call825 = callmethod(call824,"new", [0]);
          obj632.data["entities"] = call825;
          var reader_kitty_entities_826 = function() {
            return this.data["entities"];
          }
          obj632.methods["entities"] = reader_kitty_entities_826;
          obj632.data["entities"] = call825;
          var writer_kitty_entities_826 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj632.methods["entities:="] = writer_kitty_entities_826;
          reader_kitty_entities_826.confidential = true;
          writer_kitty_entities_826.confidential = true;
          lineNumber = 201;
          moduleName = "kitty";
          lineNumber = 199
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call825)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 201
          var bool827 = new GraceBoolean(false)
          obj632.data["isInit"] = bool827;
          var reader_kitty_isInit_828 = function() {
            return this.data["isInit"];
          }
          obj632.methods["isInit"] = reader_kitty_isInit_828;
          obj632.data["isInit"] = bool827;
          var writer_kitty_isInit_828 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj632.methods["isInit:="] = writer_kitty_isInit_828;
          reader_kitty_isInit_828.confidential = true;
          writer_kitty_isInit_828.confidential = true;
          lineNumber = 202;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool827)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 202
          var bool829 = new GraceBoolean(false)
          obj632.data["isRunning"] = bool829;
          var reader_kitty_isRunning_830 = function() {
            return this.data["isRunning"];
          }
          obj632.methods["isRunning"] = reader_kitty_isRunning_830;
          obj632.data["isRunning"] = bool829;
          var writer_kitty_isRunning_830 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj632.methods["isRunning:="] = writer_kitty_isRunning_830;
          reader_kitty_isRunning_830.confidential = true;
          writer_kitty_isRunning_830.confidential = true;
          lineNumber = 204;
          moduleName = "kitty";
          lineNumber = 202
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool829)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["mctx"] = undefined;
          var reader_kitty_mctx_831 = function() {
            return this.data["mctx"];
          }
          obj632.methods["mctx"] = reader_kitty_mctx_831;
          obj632.data["mctx"] = undefined;
          var writer_kitty_mctx_831 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj632.methods["mctx:="] = writer_kitty_mctx_831;
          reader_kitty_mctx_831.confidential = true;
          writer_kitty_mctx_831.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 208
          lineNumber = 206
          var call832 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj632.data["currentKeyDown"] = call832;
          var reader_kitty_currentKeyDown_833 = function() {
            return this.data["currentKeyDown"];
          }
          obj632.methods["currentKeyDown"] = reader_kitty_currentKeyDown_833;
          obj632.data["currentKeyDown"] = call832;
          var writer_kitty_currentKeyDown_833 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj632.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_833;
          reader_kitty_currentKeyDown_833.confidential = true;
          writer_kitty_currentKeyDown_833.confidential = true;
          lineNumber = 208;
          moduleName = "kitty";
          lineNumber = 206
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call832)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj632.mutable = true;
          sourceObject = obj632;
          obj632.data["ent"] = undefined;
          var reader_kitty_ent_834 = function() {
            return this.data["ent"];
          }
          obj632.methods["ent"] = reader_kitty_ent_834;
          obj632.data["ent"] = undefined;
          var writer_kitty_ent_834 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj632.methods["ent:="] = writer_kitty_ent_834;
          reader_kitty_ent_834.confidential = true;
          writer_kitty_ent_834.confidential = true;
          obj632.mutable = true;
          sourceObject = obj632;
          lineNumber = 210
          onSelf = true;
          var call835 = callmethod(this, "init", [0]);
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          sourceObject = obj632;
          superDepth = origSuperDepth;
        }
        obj_init_632.apply(inheritingObject, []);
        return obj632
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj424.methods["new()object"] = func631;
    var func836 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 183
        var string837 = new GraceString("class KittyWorld");
        return string837
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func836.paramCounts = [
    ];
    func836.variableArities = [
    ];
    obj424.methods["asDebugString"] = func836;
    func836.definitionLine = 183;
    func836.definitionModule = "kitty";
    sourceObject = obj424;
    sourceObject = obj424;
    superDepth = origSuperDepth;
  }
  obj_init_424.apply(obj424, []);
  var var_KittyWorld = obj424;
  lineNumber = 334
  lineNumber = 343
  lineNumber = 358
  lineNumber = 363
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Entity()x()y()actions:\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\n image\n update\n strafe\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\nmethods-of:KittyWorld.new:\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n canvasWidth:=\n mctx\n isKeyDown\n ent:=\n document\n getContext\n backgroundColour:=\n canvasHeight:=\n canvas\n canvas:=\n backgroundColour\n background:=\n canvasWidth\n background\n backingCanvas\n entities:=\n isRunning\n isRunning:=\n document:=\n init\n update\n entities\n addEntity\n ent\n backingContext:=\n backingContext\n canvasHeight\n currentKeyDown:=\n setBackground\n backingCanvas:=\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nconstructors-of:KittyEntity:\n new\nfresh:World:\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n canvasWidth:=\n entities:=\n isRunning\n ent:=\n document\n entities\n backgroundColour:=\n canvasHeight:=\n canvas\n canvas:=\n backgroundColour\n background:=\n canvasWidth\n background\n backingCanvas\n mctx\n isKeyDown\n isRunning:=\n document:=\n backingContext\n update\n getContext\n addEntity\n ent\n backingContext:=\n init\n canvasHeight\n currentKeyDown:=\n setBackground\n backingCanvas:=\nfresh:Image()width()height:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nmodules:\n mgcollections\n StandardPrelude\nmethods-of:KittyEntity.new:\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\n image\n update\n strafe\n awake\n setAction\n getRotation\n tag:=\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y()actions\n update\n move\n strafe\n turn\n setLocation\n setImage\n createImage\n KittyWorld\n World\n startWorld\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\nconstructors-of:KittyImage:\n new\n";
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
    "method setLocation(x, y) {",
    "    newborn.setLocation(x, y)",
    "}",
    "",
    "method setImage(image': KittyImage) {",
    "    newborn.setImage(image')",
    "}",
    "",
    "method createImage(url') {",
    "    newborn.createImage(url')",
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
    "method startWorld {",
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
    "    startWorld",
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
