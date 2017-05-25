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
  lineNumber = 181
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 183
      lineNumber = 182
      var call33 = callmethod(var_newborn,"getX", [0]);
      return call33
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
  this.methods["getX"] = func32;
  func32.definitionLine = 181;
  func32.definitionModule = "kitty";
  lineNumber = 185
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 187
      lineNumber = 186
      var call35 = callmethod(var_newborn,"getY", [0]);
      return call35
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
  this.methods["getY"] = func34;
  func34.definitionLine = 185;
  func34.definitionModule = "kitty";
  lineNumber = 342
  var func36 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 343
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 343;
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
        lineNumber = 344
        var call39 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj37.superobj = call39;
        obj37._value = call39._value;
        superDepth = origSuperDepth;
      }
      obj_init_37.apply(obj37, []);
      return obj37
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
  this.methods["World"] = func36;
  func36.definitionLine = 342;
  func36.definitionModule = "kitty";
  var func40 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj41 = Grace_allocObject();
      obj41.definitionModule = "kitty";
      obj41.definitionLine = 343;
      var inho41 = inheritingObject;
      while (inho41.superobj) inho41 = inho41.superobj;
      inho41.superobj = obj41;
      obj41.data = inheritingObject.data;
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
        var call43 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj41.superobj = call43;
        obj41._value = call43._value;
        superDepth = origSuperDepth;
      }
      obj_init_41.apply(inheritingObject, []);
      return obj41
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func40;
  lineNumber = 351
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (startWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 353
      var string45 = new GraceString("CHECKING...");
      var call46 = Grace_print(string45);
      lineNumber = 360
      var if47 = var_done;
      lineNumber = 355
      var call48 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call48)) {
        lineNumber = 356
        var string49 = new GraceString("NO WORLD!!");
        var call50 = Grace_print(string49);
        lineNumber = 358
        return var_done
      }
      lineNumber = 360
      var string51 = new GraceString("STARTING...");
      var call52 = Grace_print(string51);
      lineNumber = 363
      var call53 = callmethod(var_m__95__world,"start", [0]);
      return call53
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
  this.methods["startWorld"] = func44;
  func44.definitionLine = 351;
  func44.definitionModule = "kitty";
  lineNumber = 366
  var func54 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func54.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 368
      lineNumber = 367
      var_m__95__world = var_world__39__;
      lineNumber = 369
      lineNumber = 368
      var bool55 = new GraceBoolean(true)
      var_worldSet = bool55;
      return bool55
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func54.paramTypes = [];
  func54.paramTypes.push([]);
  func54.paramCounts = [
    1,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func54;
  func54.definitionLine = 366;
  func54.definitionModule = "kitty";
  lineNumber = 371
  var func56 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func56.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 372
      onSelf = true;
      var call57 = callmethod(this, "startWorld", [0]);
      return call57
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
  this.methods["atModuleEnd"] = func56;
  func56.definitionLine = 371;
  func56.definitionModule = "kitty";
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
  var call58 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call58;
  this.data = call58.data;
  this._value = call58._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 363
  var func59 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func59.paramCounts[0])
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
  func59.paramCounts = [
    0,
  ];
  func59.variableArities = [
    false,
  ];
  this.methods["m_world"] = func59;
  func59.definitionLine = 363;
  func59.definitionModule = "kitty";
  lineNumber = 363
  var func60 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func60.paramCounts[0])
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
  func60.paramCounts = [
    1,
  ];
  func60.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func60;
  func60.definitionLine = 363;
  func60.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool61 = new GraceBoolean(false)
  var var_worldSet = bool61;
  lineNumber = 363
  var func62 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func62.paramCounts[0])
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
  func62.paramCounts = [
    0,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func62;
  func62.definitionLine = 363;
  func62.definitionModule = "kitty";
  lineNumber = 363
  var func63 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    1,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func63;
  func63.definitionLine = 363;
  func63.definitionModule = "kitty";
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
  lineNumber = 363
  var func64 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func64.paramCounts[0])
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
  func64.paramCounts = [
    0,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func64;
  func64.definitionLine = 363;
  func64.definitionModule = "kitty";
  lineNumber = 363
  var func65 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func65.paramCounts[0])
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
  func65.paramCounts = [
    1,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func65;
  func65.definitionLine = 363;
  func65.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 363
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func66;
  func66.definitionLine = 363;
  func66.definitionModule = "kitty";
  lineNumber = 363
  var func67 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    1,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func67;
  func67.definitionLine = 363;
  func67.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 363
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func68;
  func68.definitionLine = 363;
  func68.definitionModule = "kitty";
  lineNumber = 363
  var func69 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    1,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func69;
  func69.definitionLine = 363;
  func69.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
  lineNumber = 17
  var call70 = callmethod(var_dom,"window", [0]);
  var call71 = callmethod(call70,"Math", [0]);
  var var_math = call71;
  var func72 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func72.paramCounts[0])
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
  func72.paramCounts = [
    0,
  ];
  func72.variableArities = [
    false,
  ];
  this.methods["math"] = func72;
  func72.definitionLine = 17;
  func72.definitionModule = "kitty";
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
  var func73 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func73.paramCounts[0])
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
  func73.paramCounts = [
    0,
  ];
  func73.variableArities = [
    false,
  ];
  this.methods["newborn"] = func73;
  func73.definitionLine = 17;
  func73.definitionModule = "kitty";
  lineNumber = 17
  var func74 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func74.paramCounts[0])
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
  func74.paramCounts = [
    1,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["newborn:="] = func74;
  func74.definitionLine = 17;
  func74.definitionModule = "kitty";
  lineNumber = 25
  var func75 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func75.paramCounts[0])
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
  func75.paramCounts = [
    0,
  ];
  func75.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func75;
  func75.definitionLine = 25;
  func75.definitionModule = "kitty";
  var obj76 = Grace_allocObject();
  obj76.definitionModule = "kitty";
  obj76.definitionLine = 25;
  obj76.outer = this;
  var reader_kitty_outer_77 = function() {
    return this.outer;
  }
  obj76.methods["outer"] = reader_kitty_outer_77;
  function obj_init_76() {
    var origSuperDepth = superDepth;
    superDepth = obj76;
    obj76.annotations = [];
    var func78 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func78.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj79 = Grace_allocObject();
        obj79.definitionModule = "kitty";
        obj79.definitionLine = 25;
        obj79.outer = this;
        var reader_kitty_outer_80 = function() {
          return this.outer;
        }
        obj79.methods["outer"] = reader_kitty_outer_80;
        function obj_init_79() {
          var origSuperDepth = superDepth;
          superDepth = obj79;
          obj79.annotations = [];
          var func81 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func81.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call82 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call83 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod87 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient89 = callmethod(prod87, "/", [1], new GraceNum(180));
              var call90 = callmethod(var_ctx,"rotate", [1], quotient89);
              lineNumber = 44
              onSelf = true;
              var call91 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block92 = Grace_allocObject();
              block92.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block92.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block92.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block92.methods["match"] = GraceBlock_match;
              block92.methods["prefix?"] = GraceBlock_lift;
              block92.receiver = this;
              block92.className = 'block<kitty:47>';
              block92.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call94 = callmethod(this, "width", [0]);
                var call95 = callmethod(call94,"prefix-", [0]);
                var quotient97 = callmethod(call95, "/", [1], new GraceNum(2));
                onSelf = true;
                var call99 = callmethod(this, "height", [0]);
                var call100 = callmethod(call99,"prefix-", [0]);
                var quotient102 = callmethod(call100, "/", [1], new GraceNum(2));
                onSelf = true;
                var call103 = callmethod(this, "width", [0]);
                onSelf = true;
                var call104 = callmethod(this, "height", [0]);
                var call105 = callmethod(var_ctx,"drawImage", [5], var_element, quotient97, quotient102, call103, call104);
                return call105;
              };
              var call106 = callmethod(Grace_prelude,"for()do", [1, 1], call91, block92);
              lineNumber = 47
              var call107 = callmethod(var_ctx,"restore", [0]);
              return call107
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func81.paramCounts = [
            4,
          ];
          func81.variableArities = [
            false,
          ];
          obj79.methods["draw"] = func81;
          func81.definitionLine = 38;
          func81.definitionModule = "kitty";
          var func108 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func108.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call109 = callmethod(this, "imgTag", [0]);
              return call109
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func108.paramCounts = [
            0,
          ];
          func108.variableArities = [
            false,
          ];
          obj79.methods["getTag"] = func108;
          func108.definitionLine = 51;
          func108.definitionModule = "kitty";
          var func110 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func110.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call111 = callmethod(this, "elements", [0]);
              var call112 = callmethod(call111,"push", [1], var_imgTag__39__);
              return call112
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func110.paramCounts = [
            1,
          ];
          func110.variableArities = [
            false,
          ];
          obj79.methods["drawImage"] = func110;
          func110.definitionLine = 55;
          func110.definitionModule = "kitty";
          sourceObject = obj79;
          lineNumber = 29
          var string113 = new GraceString("img");
          var call114 = callmethod(var_dom,"document", [0]);
          var call115 = callmethod(call114,"createElement", [1], string113);
          obj79.data["imgTag"] = call115;
          var reader_kitty_imgTag_116 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_116.def = true;
          reader_kitty_imgTag_116.confidential = true;
          obj79.methods["imgTag"] = reader_kitty_imgTag_116;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call115)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj79;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call117 = callmethod(this, "imgTag", [0]);
          var call118 = callmethod(call117,"src:=", [1], var_url__39__);
          sourceObject = obj79;
          lineNumber = 32
          var call119 = callmethod(var_collections,"list", [0]);
          var call120 = callmethod(call119,"new", [0]);
          obj79.data["elements"] = call120;
          var reader_kitty_elements_121 = function() {
            return this.data["elements"];
          }
          obj79.methods["elements"] = reader_kitty_elements_121;
          obj79.data["elements"] = call120;
          var writer_kitty_elements_121 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj79.methods["elements:="] = writer_kitty_elements_121;
          reader_kitty_elements_121.confidential = true;
          writer_kitty_elements_121.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call120)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj79.mutable = true;
          sourceObject = obj79;
          lineNumber = 33
          onSelf = true;
          var call122 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call123 = callmethod(this, "elements", [0]);
          var call124 = callmethod(call123,"push", [1], call122);
          sourceObject = obj79;
          lineNumber = 35
          obj79.data["height"] = var_height__39__;
          var reader_kitty_height_125 = function() {
            return this.data["height"];
          }
          obj79.methods["height"] = reader_kitty_height_125;
          obj79.data["height"] = var_height__39__;
          var writer_kitty_height_125 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj79.methods["height:="] = writer_kitty_height_125;
          reader_kitty_height_125.confidential = true;
          writer_kitty_height_125.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj79.mutable = true;
          sourceObject = obj79;
          lineNumber = 36
          obj79.data["width"] = var_width__39__;
          var reader_kitty_width_126 = function() {
            return this.data["width"];
          }
          obj79.methods["width"] = reader_kitty_width_126;
          obj79.data["width"] = var_width__39__;
          var writer_kitty_width_126 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj79.methods["width:="] = writer_kitty_width_126;
          reader_kitty_width_126.confidential = true;
          writer_kitty_width_126.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj79.mutable = true;
          sourceObject = obj79;
          sourceObject = obj79;
          sourceObject = obj79;
          superDepth = origSuperDepth;
        }
        obj_init_79.apply(obj79, []);
        return obj79
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func78.paramCounts = [
      3,
    ];
    func78.variableArities = [
      false,
    ];
    obj76.methods["new"] = func78;
    func78.definitionLine = 25;
    func78.definitionModule = "kitty";
    var func127 = function(argcv) {
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
        var obj128 = Grace_allocObject();
        obj128.definitionModule = "kitty";
        obj128.definitionLine = 25;
        var inho128 = inheritingObject;
        while (inho128.superobj) inho128 = inho128.superobj;
        inho128.superobj = obj128;
        obj128.data = inheritingObject.data;
        obj128.outer = this;
        var reader_kitty_outer_129 = function() {
          return this.outer;
        }
        obj128.methods["outer"] = reader_kitty_outer_129;
        function obj_init_128() {
          var origSuperDepth = superDepth;
          superDepth = obj128;
          obj128.annotations = [];
          var func130 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func130.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call131 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call132 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod136 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient138 = callmethod(prod136, "/", [1], new GraceNum(180));
              var call139 = callmethod(var_ctx,"rotate", [1], quotient138);
              lineNumber = 44
              onSelf = true;
              var call140 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block141 = Grace_allocObject();
              block141.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block141.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block141.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block141.methods["match"] = GraceBlock_match;
              block141.methods["prefix?"] = GraceBlock_lift;
              block141.receiver = this;
              block141.className = 'block<kitty:47>';
              block141.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call143 = callmethod(this, "width", [0]);
                var call144 = callmethod(call143,"prefix-", [0]);
                var quotient146 = callmethod(call144, "/", [1], new GraceNum(2));
                onSelf = true;
                var call148 = callmethod(this, "height", [0]);
                var call149 = callmethod(call148,"prefix-", [0]);
                var quotient151 = callmethod(call149, "/", [1], new GraceNum(2));
                onSelf = true;
                var call152 = callmethod(this, "width", [0]);
                onSelf = true;
                var call153 = callmethod(this, "height", [0]);
                var call154 = callmethod(var_ctx,"drawImage", [5], var_element, quotient146, quotient151, call152, call153);
                return call154;
              };
              var call155 = callmethod(Grace_prelude,"for()do", [1, 1], call140, block141);
              lineNumber = 47
              var call156 = callmethod(var_ctx,"restore", [0]);
              return call156
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func130.paramCounts = [
            4,
          ];
          func130.variableArities = [
            false,
          ];
          obj128.methods["draw"] = func130;
          func130.definitionLine = 38;
          func130.definitionModule = "kitty";
          var func157 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func157.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call158 = callmethod(this, "imgTag", [0]);
              return call158
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
          obj128.methods["getTag"] = func157;
          func157.definitionLine = 51;
          func157.definitionModule = "kitty";
          var func159 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call160 = callmethod(this, "elements", [0]);
              var call161 = callmethod(call160,"push", [1], var_imgTag__39__);
              return call161
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func159.paramCounts = [
            1,
          ];
          func159.variableArities = [
            false,
          ];
          obj128.methods["drawImage"] = func159;
          func159.definitionLine = 55;
          func159.definitionModule = "kitty";
          sourceObject = obj128;
          lineNumber = 29
          var string162 = new GraceString("img");
          var call163 = callmethod(var_dom,"document", [0]);
          var call164 = callmethod(call163,"createElement", [1], string162);
          obj128.data["imgTag"] = call164;
          var reader_kitty_imgTag_165 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_165.def = true;
          reader_kitty_imgTag_165.confidential = true;
          obj128.methods["imgTag"] = reader_kitty_imgTag_165;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call164)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj128;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call166 = callmethod(this, "imgTag", [0]);
          var call167 = callmethod(call166,"src:=", [1], var_url__39__);
          sourceObject = obj128;
          lineNumber = 32
          var call168 = callmethod(var_collections,"list", [0]);
          var call169 = callmethod(call168,"new", [0]);
          obj128.data["elements"] = call169;
          var reader_kitty_elements_170 = function() {
            return this.data["elements"];
          }
          obj128.methods["elements"] = reader_kitty_elements_170;
          obj128.data["elements"] = call169;
          var writer_kitty_elements_170 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj128.methods["elements:="] = writer_kitty_elements_170;
          reader_kitty_elements_170.confidential = true;
          writer_kitty_elements_170.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call169)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj128.mutable = true;
          sourceObject = obj128;
          lineNumber = 33
          onSelf = true;
          var call171 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call172 = callmethod(this, "elements", [0]);
          var call173 = callmethod(call172,"push", [1], call171);
          sourceObject = obj128;
          lineNumber = 35
          obj128.data["height"] = var_height__39__;
          var reader_kitty_height_174 = function() {
            return this.data["height"];
          }
          obj128.methods["height"] = reader_kitty_height_174;
          obj128.data["height"] = var_height__39__;
          var writer_kitty_height_174 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj128.methods["height:="] = writer_kitty_height_174;
          reader_kitty_height_174.confidential = true;
          writer_kitty_height_174.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj128.mutable = true;
          sourceObject = obj128;
          lineNumber = 36
          obj128.data["width"] = var_width__39__;
          var reader_kitty_width_175 = function() {
            return this.data["width"];
          }
          obj128.methods["width"] = reader_kitty_width_175;
          obj128.data["width"] = var_width__39__;
          var writer_kitty_width_175 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj128.methods["width:="] = writer_kitty_width_175;
          reader_kitty_width_175.confidential = true;
          writer_kitty_width_175.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj128.mutable = true;
          sourceObject = obj128;
          sourceObject = obj128;
          sourceObject = obj128;
          superDepth = origSuperDepth;
        }
        obj_init_128.apply(inheritingObject, []);
        return obj128
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj76.methods["new()object"] = func127;
    var func176 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string177 = new GraceString("class KittyImage");
        return string177
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func176.paramCounts = [
    ];
    func176.variableArities = [
    ];
    obj76.methods["asDebugString"] = func176;
    func176.definitionLine = 25;
    func176.definitionModule = "kitty";
    sourceObject = obj76;
    sourceObject = obj76;
    superDepth = origSuperDepth;
  }
  obj_init_76.apply(obj76, []);
  var var_KittyImage = obj76;
  lineNumber = 62
  lineNumber = 69
  var func178 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func178.paramCounts[0])
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
  func178.paramCounts = [
    0,
  ];
  func178.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func178;
  func178.definitionLine = 69;
  func178.definitionModule = "kitty";
  var obj179 = Grace_allocObject();
  obj179.definitionModule = "kitty";
  obj179.definitionLine = 69;
  obj179.outer = this;
  var reader_kitty_outer_180 = function() {
    return this.outer;
  }
  obj179.methods["outer"] = reader_kitty_outer_180;
  function obj_init_179() {
    var origSuperDepth = superDepth;
    superDepth = obj179;
    obj179.annotations = [];
    var func181 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func181.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj182 = Grace_allocObject();
        obj182.definitionModule = "kitty";
        obj182.definitionLine = 69;
        obj182.outer = this;
        var reader_kitty_outer_183 = function() {
          return this.outer;
        }
        obj182.methods["outer"] = reader_kitty_outer_183;
        function obj_init_182() {
          var origSuperDepth = superDepth;
          superDepth = obj182;
          obj182.annotations = [];
          var func184 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string185 = new GraceString("realyee.png");
              onSelf = true;
              var call186 = callmethod(this, "createImage", [1], string185);
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
          func184.paramCounts = [
            0,
          ];
          func184.variableArities = [
            false,
          ];
          obj182.methods["awake"] = func184;
          func184.definitionLine = 84;
          func184.definitionModule = "kitty";
          var func187 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func187.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call188 = callmethod(this, "action", [0]);
              var call189 = callmethod(call188,"apply", [0]);
              return call189
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func187.paramCounts = [
            0,
          ];
          func187.variableArities = [
            false,
          ];
          obj182.methods["update"] = func187;
          func187.definitionLine = 89;
          func187.definitionModule = "kitty";
          var func190 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func190.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call193 = callmethod(this, "rotation", [0]);
              var prod195 = callmethod(call193, "*", [1], new GraceNum(3.14159));
              var quotient197 = callmethod(prod195, "/", [1], new GraceNum(180));
              var call198 = callmethod(var_math,"cos", [1], quotient197);
              var prod201 = callmethod(var_distance, "*", [1], call198);
              onSelf = true;
              var call203 = callmethod(this, "posX", [0]);
              var opresult205 = callmethod(call203, "+", [1], prod201);
              onSelf = true;
              var call206 = callmethod(this, "posX:=", [1], opresult205);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call209 = callmethod(this, "rotation", [0]);
              var prod211 = callmethod(call209, "*", [1], new GraceNum(3.14159));
              var quotient213 = callmethod(prod211, "/", [1], new GraceNum(180));
              var call214 = callmethod(var_math,"sin", [1], quotient213);
              var prod217 = callmethod(var_distance, "*", [1], call214);
              onSelf = true;
              var call219 = callmethod(this, "posY", [0]);
              var opresult221 = callmethod(call219, "+", [1], prod217);
              onSelf = true;
              var call222 = callmethod(this, "posY:=", [1], opresult221);
              return call222
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func190.paramCounts = [
            1,
          ];
          func190.variableArities = [
            false,
          ];
          obj182.methods["move"] = func190;
          func190.definitionLine = 93;
          func190.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call226 = callmethod(this, "rotation", [0]);
              var opresult229 = callmethod(new GraceNum(90), "+", [1], call226);
              var prod231 = callmethod(opresult229, "*", [1], new GraceNum(3.14159));
              var quotient233 = callmethod(prod231, "/", [1], new GraceNum(180));
              var call234 = callmethod(var_math,"cos", [1], quotient233);
              var prod237 = callmethod(var_distance, "*", [1], call234);
              onSelf = true;
              var call239 = callmethod(this, "posX", [0]);
              var opresult241 = callmethod(call239, "+", [1], prod237);
              onSelf = true;
              var call242 = callmethod(this, "posX:=", [1], opresult241);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call245 = callmethod(this, "rotation", [0]);
              var opresult248 = callmethod(new GraceNum(90), "+", [1], call245);
              var prod250 = callmethod(opresult248, "*", [1], new GraceNum(3.14159));
              var quotient252 = callmethod(prod250, "/", [1], new GraceNum(180));
              var call253 = callmethod(var_math,"sin", [1], quotient252);
              var prod256 = callmethod(var_distance, "*", [1], call253);
              onSelf = true;
              var call258 = callmethod(this, "posY", [0]);
              var opresult260 = callmethod(call258, "+", [1], prod256);
              onSelf = true;
              var call261 = callmethod(this, "posY:=", [1], opresult260);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramCounts = [
            1,
          ];
          func223.variableArities = [
            false,
          ];
          obj182.methods["strafe"] = func223;
          func223.definitionLine = 98;
          func223.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
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
              var call264 = callmethod(this, "rotation", [0]);
              var opresult266 = callmethod(call264, "+", [1], var_angle);
              onSelf = true;
              var call267 = callmethod(this, "rotation:=", [1], opresult266);
              return call267
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
          obj182.methods["turn"] = func262;
          func262.definitionLine = 103;
          func262.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call269 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call270 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call271 = callmethod(this, "posY", [0]);
              var call272 = callmethod(var_ctx,"translate", [2], call270, call271);
              lineNumber = 110
              onSelf = true;
              var call273 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call274 = callmethod(this, "image", [0]);
              var call275 = callmethod(call274,"draw", [4], var_ctx, var_dx, var_dy, call273);
              lineNumber = 111
              var call276 = callmethod(var_ctx,"restore", [0]);
              return call276
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func268.paramCounts = [
            3,
          ];
          func268.variableArities = [
            false,
          ];
          obj182.methods["draw"] = func268;
          func268.definitionLine = 107;
          func268.definitionModule = "kitty";
          var func277 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call278 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call279 = callmethod(call278, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call280 = callmethod(call279, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call281 = callmethod(this, "image:=", [1], call280);
              return call281
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
          obj182.methods["createImage"] = func277;
          func277.definitionLine = 114;
          func277.definitionModule = "kitty";
          var func282 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call283 = callmethod(this, "image:=", [1], var_image__39__);
              return call283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func282.paramTypes = [];
          func282.paramTypes.push([]);
          func282.paramCounts = [
            1,
          ];
          func282.variableArities = [
            false,
          ];
          obj182.methods["setImage"] = func282;
          func282.definitionLine = 118;
          func282.definitionModule = "kitty";
          var func284 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call285 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func284.variableArities = [
            false,
          ];
          obj182.methods["setAction"] = func284;
          func284.definitionLine = 122;
          func284.definitionModule = "kitty";
          var func286 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call287 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call288 = callmethod(this, "posY:=", [1], var_y);
              return call288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            2,
          ];
          func286.variableArities = [
            false,
          ];
          obj182.methods["setLocation"] = func286;
          func286.definitionLine = 126;
          func286.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call290 = callmethod(this, "posX", [0]);
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
          obj182.methods["getX"] = func289;
          func289.definitionLine = 131;
          func289.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call292 = callmethod(this, "posY", [0]);
              return call292
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
          obj182.methods["getY"] = func291;
          func291.definitionLine = 135;
          func291.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call294 = callmethod(this, "rotation", [0]);
              return call294
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
          obj182.methods["getRotation"] = func293;
          func293.definitionLine = 139;
          func293.definitionModule = "kitty";
          sourceObject = obj182;
          lineNumber = 73
          obj182.data["tag"] = var_tag__39__;
          var reader_kitty_tag_295 = function() {
            return this.data["tag"];
          }
          obj182.methods["tag"] = reader_kitty_tag_295;
          obj182.data["tag"] = var_tag__39__;
          var writer_kitty_tag_295 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj182.methods["tag:="] = writer_kitty_tag_295;
          reader_kitty_tag_295.confidential = true;
          writer_kitty_tag_295.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj182.mutable = true;
          sourceObject = obj182;
          lineNumber = 74
          obj182.data["posX"] = var_x__39__;
          var reader_kitty_posX_296 = function() {
            return this.data["posX"];
          }
          obj182.methods["posX"] = reader_kitty_posX_296;
          obj182.data["posX"] = var_x__39__;
          var writer_kitty_posX_296 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj182.methods["posX:="] = writer_kitty_posX_296;
          reader_kitty_posX_296.confidential = true;
          writer_kitty_posX_296.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj182.mutable = true;
          sourceObject = obj182;
          lineNumber = 75
          obj182.data["posY"] = var_y__39__;
          var reader_kitty_posY_297 = function() {
            return this.data["posY"];
          }
          obj182.methods["posY"] = reader_kitty_posY_297;
          obj182.data["posY"] = var_y__39__;
          var writer_kitty_posY_297 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj182.methods["posY:="] = writer_kitty_posY_297;
          reader_kitty_posY_297.confidential = true;
          writer_kitty_posY_297.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj182.mutable = true;
          sourceObject = obj182;
          lineNumber = 76
          obj182.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_298 = function() {
            return this.data["rotation"];
          }
          obj182.methods["rotation"] = reader_kitty_rotation_298;
          obj182.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_298 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj182.methods["rotation:="] = writer_kitty_rotation_298;
          reader_kitty_rotation_298.confidential = true;
          writer_kitty_rotation_298.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj182.mutable = true;
          sourceObject = obj182;
          lineNumber = 79
          var block299 = Grace_allocObject();
          block299.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block299.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block299.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block299.methods["match"] = GraceBlock_match;
          block299.methods["prefix?"] = GraceBlock_lift;
          block299.receiver = this;
          block299.className = 'block<kitty:79>';
          block299.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj182.data["action"] = block299;
          var reader_kitty_action_300 = function() {
            return this.data["action"];
          }
          obj182.methods["action"] = reader_kitty_action_300;
          obj182.data["action"] = block299;
          var writer_kitty_action_300 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj182.methods["action:="] = writer_kitty_action_300;
          reader_kitty_action_300.confidential = true;
          writer_kitty_action_300.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block299)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj182.mutable = true;
          sourceObject = obj182;
          obj182.data["image"] = undefined;
          var reader_kitty_image_301 = function() {
            return this.data["image"];
          }
          obj182.methods["image"] = reader_kitty_image_301;
          obj182.data["image"] = undefined;
          var writer_kitty_image_301 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj182.methods["image:="] = writer_kitty_image_301;
          reader_kitty_image_301.confidential = true;
          writer_kitty_image_301.confidential = true;
          obj182.mutable = true;
          sourceObject = obj182;
          lineNumber = 81
          onSelf = true;
          var call302 = callmethod(this, "awake", [0]);
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          sourceObject = obj182;
          superDepth = origSuperDepth;
        }
        obj_init_182.apply(obj182, []);
        return obj182
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func181.paramCounts = [
      3,
    ];
    func181.variableArities = [
      false,
    ];
    obj179.methods["new"] = func181;
    func181.definitionLine = 69;
    func181.definitionModule = "kitty";
    var func303 = function(argcv) {
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
        var obj304 = Grace_allocObject();
        obj304.definitionModule = "kitty";
        obj304.definitionLine = 69;
        var inho304 = inheritingObject;
        while (inho304.superobj) inho304 = inho304.superobj;
        inho304.superobj = obj304;
        obj304.data = inheritingObject.data;
        obj304.outer = this;
        var reader_kitty_outer_305 = function() {
          return this.outer;
        }
        obj304.methods["outer"] = reader_kitty_outer_305;
        function obj_init_304() {
          var origSuperDepth = superDepth;
          superDepth = obj304;
          obj304.annotations = [];
          var func306 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string307 = new GraceString("realyee.png");
              onSelf = true;
              var call308 = callmethod(this, "createImage", [1], string307);
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
          func306.paramCounts = [
            0,
          ];
          func306.variableArities = [
            false,
          ];
          obj304.methods["awake"] = func306;
          func306.definitionLine = 84;
          func306.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call310 = callmethod(this, "action", [0]);
              var call311 = callmethod(call310,"apply", [0]);
              return call311
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func309.paramCounts = [
            0,
          ];
          func309.variableArities = [
            false,
          ];
          obj304.methods["update"] = func309;
          func309.definitionLine = 89;
          func309.definitionModule = "kitty";
          var func312 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call315 = callmethod(this, "rotation", [0]);
              var prod317 = callmethod(call315, "*", [1], new GraceNum(3.14159));
              var quotient319 = callmethod(prod317, "/", [1], new GraceNum(180));
              var call320 = callmethod(var_math,"cos", [1], quotient319);
              var prod323 = callmethod(var_distance, "*", [1], call320);
              onSelf = true;
              var call325 = callmethod(this, "posX", [0]);
              var opresult327 = callmethod(call325, "+", [1], prod323);
              onSelf = true;
              var call328 = callmethod(this, "posX:=", [1], opresult327);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call331 = callmethod(this, "rotation", [0]);
              var prod333 = callmethod(call331, "*", [1], new GraceNum(3.14159));
              var quotient335 = callmethod(prod333, "/", [1], new GraceNum(180));
              var call336 = callmethod(var_math,"sin", [1], quotient335);
              var prod339 = callmethod(var_distance, "*", [1], call336);
              onSelf = true;
              var call341 = callmethod(this, "posY", [0]);
              var opresult343 = callmethod(call341, "+", [1], prod339);
              onSelf = true;
              var call344 = callmethod(this, "posY:=", [1], opresult343);
              return call344
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
          obj304.methods["move"] = func312;
          func312.definitionLine = 93;
          func312.definitionModule = "kitty";
          var func345 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func345.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call348 = callmethod(this, "rotation", [0]);
              var opresult351 = callmethod(new GraceNum(90), "+", [1], call348);
              var prod353 = callmethod(opresult351, "*", [1], new GraceNum(3.14159));
              var quotient355 = callmethod(prod353, "/", [1], new GraceNum(180));
              var call356 = callmethod(var_math,"cos", [1], quotient355);
              var prod359 = callmethod(var_distance, "*", [1], call356);
              onSelf = true;
              var call361 = callmethod(this, "posX", [0]);
              var opresult363 = callmethod(call361, "+", [1], prod359);
              onSelf = true;
              var call364 = callmethod(this, "posX:=", [1], opresult363);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call367 = callmethod(this, "rotation", [0]);
              var opresult370 = callmethod(new GraceNum(90), "+", [1], call367);
              var prod372 = callmethod(opresult370, "*", [1], new GraceNum(3.14159));
              var quotient374 = callmethod(prod372, "/", [1], new GraceNum(180));
              var call375 = callmethod(var_math,"sin", [1], quotient374);
              var prod378 = callmethod(var_distance, "*", [1], call375);
              onSelf = true;
              var call380 = callmethod(this, "posY", [0]);
              var opresult382 = callmethod(call380, "+", [1], prod378);
              onSelf = true;
              var call383 = callmethod(this, "posY:=", [1], opresult382);
              return call383
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func345.paramCounts = [
            1,
          ];
          func345.variableArities = [
            false,
          ];
          obj304.methods["strafe"] = func345;
          func345.definitionLine = 98;
          func345.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func384.paramCounts[0])
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
              var call386 = callmethod(this, "rotation", [0]);
              var opresult388 = callmethod(call386, "+", [1], var_angle);
              onSelf = true;
              var call389 = callmethod(this, "rotation:=", [1], opresult388);
              return call389
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
          obj304.methods["turn"] = func384;
          func384.definitionLine = 103;
          func384.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func390.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call391 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call392 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call393 = callmethod(this, "posY", [0]);
              var call394 = callmethod(var_ctx,"translate", [2], call392, call393);
              lineNumber = 110
              onSelf = true;
              var call395 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call396 = callmethod(this, "image", [0]);
              var call397 = callmethod(call396,"draw", [4], var_ctx, var_dx, var_dy, call395);
              lineNumber = 111
              var call398 = callmethod(var_ctx,"restore", [0]);
              return call398
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func390.paramCounts = [
            3,
          ];
          func390.variableArities = [
            false,
          ];
          obj304.methods["draw"] = func390;
          func390.definitionLine = 107;
          func390.definitionModule = "kitty";
          var func399 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func399.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call400 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call401 = callmethod(call400, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call402 = callmethod(call401, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call403 = callmethod(this, "image:=", [1], call402);
              return call403
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func399.paramCounts = [
            1,
          ];
          func399.variableArities = [
            false,
          ];
          obj304.methods["createImage"] = func399;
          func399.definitionLine = 114;
          func399.definitionModule = "kitty";
          var func404 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func404.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call405 = callmethod(this, "image:=", [1], var_image__39__);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func404.paramTypes = [];
          func404.paramTypes.push([]);
          func404.paramCounts = [
            1,
          ];
          func404.variableArities = [
            false,
          ];
          obj304.methods["setImage"] = func404;
          func404.definitionLine = 118;
          func404.definitionModule = "kitty";
          var func406 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call407 = callmethod(this, "action:=", [1], var_action__39__);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func406.paramCounts = [
            1,
          ];
          func406.variableArities = [
            false,
          ];
          obj304.methods["setAction"] = func406;
          func406.definitionLine = 122;
          func406.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call409 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call410 = callmethod(this, "posY:=", [1], var_y);
              return call410
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func408.paramCounts = [
            2,
          ];
          func408.variableArities = [
            false,
          ];
          obj304.methods["setLocation"] = func408;
          func408.definitionLine = 126;
          func408.definitionModule = "kitty";
          var func411 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call412 = callmethod(this, "posX", [0]);
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
          obj304.methods["getX"] = func411;
          func411.definitionLine = 131;
          func411.definitionModule = "kitty";
          var func413 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func413.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call414 = callmethod(this, "posY", [0]);
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
          obj304.methods["getY"] = func413;
          func413.definitionLine = 135;
          func413.definitionModule = "kitty";
          var func415 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func415.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call416 = callmethod(this, "rotation", [0]);
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
          obj304.methods["getRotation"] = func415;
          func415.definitionLine = 139;
          func415.definitionModule = "kitty";
          sourceObject = obj304;
          lineNumber = 73
          obj304.data["tag"] = var_tag__39__;
          var reader_kitty_tag_417 = function() {
            return this.data["tag"];
          }
          obj304.methods["tag"] = reader_kitty_tag_417;
          obj304.data["tag"] = var_tag__39__;
          var writer_kitty_tag_417 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj304.methods["tag:="] = writer_kitty_tag_417;
          reader_kitty_tag_417.confidential = true;
          writer_kitty_tag_417.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj304.mutable = true;
          sourceObject = obj304;
          lineNumber = 74
          obj304.data["posX"] = var_x__39__;
          var reader_kitty_posX_418 = function() {
            return this.data["posX"];
          }
          obj304.methods["posX"] = reader_kitty_posX_418;
          obj304.data["posX"] = var_x__39__;
          var writer_kitty_posX_418 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj304.methods["posX:="] = writer_kitty_posX_418;
          reader_kitty_posX_418.confidential = true;
          writer_kitty_posX_418.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj304.mutable = true;
          sourceObject = obj304;
          lineNumber = 75
          obj304.data["posY"] = var_y__39__;
          var reader_kitty_posY_419 = function() {
            return this.data["posY"];
          }
          obj304.methods["posY"] = reader_kitty_posY_419;
          obj304.data["posY"] = var_y__39__;
          var writer_kitty_posY_419 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj304.methods["posY:="] = writer_kitty_posY_419;
          reader_kitty_posY_419.confidential = true;
          writer_kitty_posY_419.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj304.mutable = true;
          sourceObject = obj304;
          lineNumber = 76
          obj304.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_420 = function() {
            return this.data["rotation"];
          }
          obj304.methods["rotation"] = reader_kitty_rotation_420;
          obj304.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_420 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj304.methods["rotation:="] = writer_kitty_rotation_420;
          reader_kitty_rotation_420.confidential = true;
          writer_kitty_rotation_420.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj304.mutable = true;
          sourceObject = obj304;
          lineNumber = 79
          var block421 = Grace_allocObject();
          block421.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block421.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block421.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block421.methods["match"] = GraceBlock_match;
          block421.methods["prefix?"] = GraceBlock_lift;
          block421.receiver = this;
          block421.className = 'block<kitty:79>';
          block421.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj304.data["action"] = block421;
          var reader_kitty_action_422 = function() {
            return this.data["action"];
          }
          obj304.methods["action"] = reader_kitty_action_422;
          obj304.data["action"] = block421;
          var writer_kitty_action_422 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj304.methods["action:="] = writer_kitty_action_422;
          reader_kitty_action_422.confidential = true;
          writer_kitty_action_422.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block421)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj304.mutable = true;
          sourceObject = obj304;
          obj304.data["image"] = undefined;
          var reader_kitty_image_423 = function() {
            return this.data["image"];
          }
          obj304.methods["image"] = reader_kitty_image_423;
          obj304.data["image"] = undefined;
          var writer_kitty_image_423 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj304.methods["image:="] = writer_kitty_image_423;
          reader_kitty_image_423.confidential = true;
          writer_kitty_image_423.confidential = true;
          obj304.mutable = true;
          sourceObject = obj304;
          lineNumber = 81
          onSelf = true;
          var call424 = callmethod(this, "awake", [0]);
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          sourceObject = obj304;
          superDepth = origSuperDepth;
        }
        obj_init_304.apply(inheritingObject, []);
        return obj304
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj179.methods["new()object"] = func303;
    var func425 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string426 = new GraceString("class KittyEntity");
        return string426
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func425.paramCounts = [
    ];
    func425.variableArities = [
    ];
    obj179.methods["asDebugString"] = func425;
    func425.definitionLine = 69;
    func425.definitionModule = "kitty";
    sourceObject = obj179;
    sourceObject = obj179;
    superDepth = origSuperDepth;
  }
  obj_init_179.apply(obj179, []);
  var var_KittyEntity = obj179;
  lineNumber = 144
  lineNumber = 153
  lineNumber = 157
  lineNumber = 161
  lineNumber = 165
  lineNumber = 169
  lineNumber = 173
  lineNumber = 177
  lineNumber = 181
  lineNumber = 185
  lineNumber = 191
  var func427 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func427.paramCounts[0])
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
  func427.paramCounts = [
    0,
  ];
  func427.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func427;
  func427.definitionLine = 191;
  func427.definitionModule = "kitty";
  var obj428 = Grace_allocObject();
  obj428.definitionModule = "kitty";
  obj428.definitionLine = 191;
  obj428.outer = this;
  var reader_kitty_outer_429 = function() {
    return this.outer;
  }
  obj428.methods["outer"] = reader_kitty_outer_429;
  function obj_init_428() {
    var origSuperDepth = superDepth;
    superDepth = obj428;
    obj428.annotations = [];
    var func430 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func430.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj431 = Grace_allocObject();
        obj431.definitionModule = "kitty";
        obj431.definitionLine = 191;
        obj431.outer = this;
        var reader_kitty_outer_432 = function() {
          return this.outer;
        }
        obj431.methods["outer"] = reader_kitty_outer_432;
        function obj_init_431() {
          var origSuperDepth = superDepth;
          superDepth = obj431;
          obj431.annotations = [];
          var func433 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func433.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 229
              var if434 = var_done;
              lineNumber = 225
              onSelf = true;
              var call435 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call435)) {
                lineNumber = 227
                lineNumber = 226
                var bool436 = new GraceBoolean(false)
                return bool436
              }
              lineNumber = 230
              lineNumber = 191
              lineNumber = 229
              var call437 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call438 = callmethod(this, "document:=", [1], call437);
              lineNumber = 230
              lineNumber = 229
              lineNumber = 230
              var string439 = new GraceString("standard-canvas");
              onSelf = true;
              var call440 = callmethod(this, "document", [0]);
              var call441 = callmethod(call440,"getElementById", [1], string439);
              onSelf = true;
              var call442 = callmethod(this, "canvas:=", [1], call441);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 231
              onSelf = true;
              var call443 = callmethod(this, "canvas", [0]);
              var call444 = callmethod(call443,"width", [0]);
              onSelf = true;
              var call445 = callmethod(this, "canvasWidth:=", [1], call444);
              lineNumber = 235
              lineNumber = 231
              lineNumber = 232
              onSelf = true;
              var call446 = callmethod(this, "canvas", [0]);
              var call447 = callmethod(call446,"height", [0]);
              onSelf = true;
              var call448 = callmethod(this, "canvasHeight:=", [1], call447);
              lineNumber = 247
              var block449 = Grace_allocObject();
              block449.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block449.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block449.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block449.methods["match"] = GraceBlock_match;
              block449.methods["prefix?"] = GraceBlock_lift;
              block449.receiver = this;
              block449.className = 'block<kitty:247>';
              block449.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 238
                lineNumber = 237
                onSelf = true;
                var call450 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call452 = callmethod(this, "canvas", [0]);
                var call453 = callmethod(call452,"offsetWidth", [0]);
                onSelf = true;
                var call455 = callmethod(this, "canvas", [0]);
                var call456 = callmethod(call455,"offsetLeft", [0]);
                var call458 = callmethod(var_ev,"clientX", [0]);
                var diff460 = callmethod(call458, "-", [1], call456);
                var quotient462 = callmethod(diff460, "/", [1], call453);
                var prod464 = callmethod(quotient462, "*", [1], call450);
                var var_x = prod464;
                lineNumber = 238;
                moduleName = "kitty";
                lineNumber = 237
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 242
                lineNumber = 238
                onSelf = true;
                var call465 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call467 = callmethod(this, "canvas", [0]);
                var call468 = callmethod(call467,"offsetHeight", [0]);
                onSelf = true;
                var call470 = callmethod(this, "canvas", [0]);
                var call471 = callmethod(call470,"offsetTop", [0]);
                var call473 = callmethod(var_ev,"clientY", [0]);
                var diff475 = callmethod(call473, "-", [1], call471);
                var quotient477 = callmethod(diff475, "/", [1], call468);
                var prod479 = callmethod(quotient477, "*", [1], call465);
                var var_y = prod479;
                lineNumber = 242;
                moduleName = "kitty";
                lineNumber = 238
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 246
                var if480 = var_done;
                lineNumber = 242
                var opresult483 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call486 = callmethod(this, "canvasWidth", [0]);
                var diff488 = callmethod(call486, "-", [1], new GraceNum(20));
                var opresult491 = callmethod(var_x, ">", [1], diff488);
                var opresult493 = callmethod(opresult491, "&&", [1], opresult483);
                if (Grace_isTrue(opresult493)) {
                  lineNumber = 243
                  var call494 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 244
                  onSelf = true;
                  var call495 = callmethod(this, "stop", [0]);
                  if480 = call495;
                }
                return if480;
              };
              var_mouseDownListener = block449;
              lineNumber = 247
              var string496 = new GraceString("mousedown");
              onSelf = true;
              var call497 = callmethod(this, "canvas", [0]);
              var call498 = callmethod(call497,"addEventListener", [2], string496, var_mouseDownListener);
              lineNumber = 257
              var block499 = Grace_allocObject();
              block499.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block499.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block499.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block499.methods["match"] = GraceBlock_match;
              block499.methods["prefix?"] = GraceBlock_lift;
              block499.receiver = this;
              block499.className = 'block<kitty:257>';
              block499.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 255
                var if500 = var_done;
                lineNumber = 252
                var call502 = callmethod(var_ev,"keyCode", [0]);
                var opresult504 = callmethod(call502, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult504)) {
                  lineNumber = 253
                  onSelf = true;
                  var call505 = callmethod(this, "stop", [0]);
                  if500 = call505;
                }
                lineNumber = 256
                lineNumber = 252
                lineNumber = 255
                var call506 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call507 = callmethod(this, "currentKeyDown:=", [1], call506);
                return call507;
              };
              var_keyDownListener = block499;
              lineNumber = 257
              var string508 = new GraceString("keydown");
              onSelf = true;
              var call509 = callmethod(this, "document", [0]);
              var call510 = callmethod(call509,"addEventListener", [2], string508, var_keyDownListener);
              lineNumber = 263
              var block511 = Grace_allocObject();
              block511.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block511.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block511.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block511.methods["match"] = GraceBlock_match;
              block511.methods["prefix?"] = GraceBlock_lift;
              block511.receiver = this;
              block511.className = 'block<kitty:263>';
              block511.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 262
                lineNumber = 255
                lineNumber = 262
                lineNumber = 261
                var call512 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call513 = callmethod(this, "currentKeyDown:=", [1], call512);
                return call513;
              };
              var_keyUpListener = block511;
              lineNumber = 263
              var string514 = new GraceString("keyup");
              onSelf = true;
              var call515 = callmethod(this, "document", [0]);
              var call516 = callmethod(call515,"addEventListener", [2], string514, var_keyUpListener);
              lineNumber = 265
              lineNumber = 255
              lineNumber = 265
              var string517 = new GraceString("canvas");
              var call518 = callmethod(var_dom,"document", [0]);
              var call519 = callmethod(call518,"createElement", [1], string517);
              onSelf = true;
              var call520 = callmethod(this, "backingCanvas:=", [1], call519);
              lineNumber = 267
              lineNumber = 265
              lineNumber = 266
              onSelf = true;
              var call521 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call522 = callmethod(this, "backingCanvas", [0]);
              var call523 = callmethod(call522,"height:=", [1], call521);
              lineNumber = 268
              lineNumber = 265
              lineNumber = 267
              onSelf = true;
              var call524 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call525 = callmethod(this, "backingCanvas", [0]);
              var call526 = callmethod(call525,"width:=", [1], call524);
              lineNumber = 268
              lineNumber = 265
              lineNumber = 268
              var string527 = new GraceString("2d");
              onSelf = true;
              var call528 = callmethod(this, "backingCanvas", [0]);
              var call529 = callmethod(call528,"getContext", [1], string527);
              onSelf = true;
              var call530 = callmethod(this, "backingContext:=", [1], call529);
              lineNumber = 269
              lineNumber = 265
              lineNumber = 269
              var string531 = new GraceString("2d");
              onSelf = true;
              var call532 = callmethod(this, "canvas", [0]);
              var call533 = callmethod(call532,"getContext", [1], string531);
              onSelf = true;
              var call534 = callmethod(this, "mctx:=", [1], call533);
              lineNumber = 272
              var string535 = new GraceString("doggo.jpg");
              onSelf = true;
              var call536 = callmethod(this, "setBackground", [1], string535);
              lineNumber = 284
              lineNumber = 265
              lineNumber = 278
              var bool537 = new GraceBoolean(true)
              onSelf = true;
              var call538 = callmethod(this, "isInit:=", [1], bool537);
              return call538
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
          obj431.methods["init"] = func433;
          func433.definitionLine = 221;
          func433.definitionModule = "kitty";
          var func539 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func539.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              lineNumber = 265
              lineNumber = 289
              var bool540 = new GraceBoolean(true)
              onSelf = true;
              var call541 = callmethod(this, "isRunning:=", [1], bool540);
              lineNumber = 290
              var block542 = Grace_allocObject();
              block542.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block542.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block542.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block542.methods["match"] = GraceBlock_match;
              block542.methods["prefix?"] = GraceBlock_lift;
              block542.receiver = this;
              block542.className = 'block<kitty:290>';
              block542.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call543 = callmethod(this, "isRunning", [0]);
                return call543;
              };
              lineNumber = 294
              var block544 = Grace_allocObject();
              block544.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block544.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block544.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block544.methods["match"] = GraceBlock_match;
              block544.methods["prefix?"] = GraceBlock_lift;
              block544.receiver = this;
              block544.className = 'block<kitty:294>';
              block544.real = function(
              ) {
                sourceObject = this;
                lineNumber = 291
                onSelf = true;
                var call545 = callmethod(this, "update", [0]);
                return call545;
              };
              lineNumber = 290
              var call546 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block542, new GraceNum(10), block544);
              return call546
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func539.paramCounts = [
            0,
          ];
          func539.variableArities = [
            false,
          ];
          obj431.methods["start"] = func539;
          func539.definitionLine = 287;
          func539.definitionModule = "kitty";
          var func547 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func547.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 303
              lineNumber = 265
              lineNumber = 302
              onSelf = true;
              var call548 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call549 = callmethod(this, "mctx", [0]);
              var call550 = callmethod(call549,"fillStyle:=", [1], call548);
              lineNumber = 303
              onSelf = true;
              var call551 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call552 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call553 = callmethod(this, "mctx", [0]);
              var call554 = callmethod(call553,"fillRect", [4], new GraceNum(0), new GraceNum(0), call551, call552);
              lineNumber = 304
              onSelf = true;
              var call555 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call556 = callmethod(this, "mctx", [0]);
              var call557 = callmethod(call556,"drawImage", [3], call555, new GraceNum(0), new GraceNum(0));
              lineNumber = 305
              onSelf = true;
              var call558 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call560 = callmethod(this, "canvasWidth", [0]);
              var quotient562 = callmethod(call560, "/", [1], new GraceNum(2));
              onSelf = true;
              var call564 = callmethod(this, "canvasHeight", [0]);
              var quotient566 = callmethod(call564, "/", [1], new GraceNum(2));
              onSelf = true;
              var call567 = callmethod(this, "background", [0]);
              var call568 = callmethod(call567,"draw", [4], call558, quotient562, quotient566, new GraceNum(0));
              lineNumber = 308
              onSelf = true;
              var call569 = callmethod(this, "entities", [0]);
              lineNumber = 314
              var block570 = Grace_allocObject();
              block570.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block570.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block570.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block570.methods["match"] = GraceBlock_match;
              block570.methods["prefix?"] = GraceBlock_lift;
              block570.receiver = this;
              block570.className = 'block<kitty:314>';
              block570.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 309
                var call571 = callmethod(var_entity,"update", [0]);
                lineNumber = 310
                onSelf = true;
                var call572 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call574 = callmethod(this, "canvasWidth", [0]);
                var quotient576 = callmethod(call574, "/", [1], new GraceNum(2));
                onSelf = true;
                var call578 = callmethod(this, "canvasHeight", [0]);
                var quotient580 = callmethod(call578, "/", [1], new GraceNum(2));
                var call581 = callmethod(var_entity,"draw", [3], call572, quotient576, quotient580);
                return call581;
              };
              var call582 = callmethod(Grace_prelude,"for()do", [1, 1], call569, block570);
              return call582
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func547.paramCounts = [
            0,
          ];
          func547.variableArities = [
            false,
          ];
          obj431.methods["update"] = func547;
          func547.definitionLine = 297;
          func547.definitionModule = "kitty";
          var func583 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 317
              var string584 = new GraceString("WORLD STOPPING...");
              var call585 = Grace_print(string584);
              lineNumber = 319
              lineNumber = 309
              lineNumber = 318
              var bool586 = new GraceBoolean(false)
              onSelf = true;
              var call587 = callmethod(this, "isRunning:=", [1], bool586);
              lineNumber = 319
              var string588 = new GraceString("mousedown");
              onSelf = true;
              var call589 = callmethod(this, "canvas", [0]);
              var call590 = callmethod(call589,"removeEventListener", [2], string588, var_mouseDownListener);
              lineNumber = 320
              var string591 = new GraceString("keydown");
              onSelf = true;
              var call592 = callmethod(this, "document", [0]);
              var call593 = callmethod(call592,"removeEventListener", [2], string591, var_keyDownListener);
              lineNumber = 321
              var string594 = new GraceString("keyup");
              onSelf = true;
              var call595 = callmethod(this, "document", [0]);
              var call596 = callmethod(call595,"removeEventListener", [2], string594, var_keyUpListener);
              return call596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func583.paramCounts = [
            0,
          ];
          func583.variableArities = [
            false,
          ];
          obj431.methods["stop"] = func583;
          func583.definitionLine = 316;
          func583.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 326
              lineNumber = 325
              onSelf = true;
              var call598 = callmethod(this, "currentKeyDown", [0]);
              var opresult601 = callmethod(var_key, "==", [1], call598);
              return opresult601
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func597.paramCounts = [
            1,
          ];
          func597.variableArities = [
            false,
          ];
          obj431.methods["isKeyDown"] = func597;
          func597.definitionLine = 324;
          func597.definitionModule = "kitty";
          var func602 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func602.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 329
              lineNumber = 309
              lineNumber = 329
              onSelf = true;
              var call603 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call604 = callmethod(this, "canvasHeight", [0]);
              var call605 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call606 = callmethod(call605, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call607 = callmethod(call606, "Image()width()height", [1, 1, 1], var_url, call603, call604);
              onSelf = true;
              var call608 = callmethod(this, "background:=", [1], call607);
              return call608
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func602.paramCounts = [
            1,
          ];
          func602.variableArities = [
            false,
          ];
          obj431.methods["setBackground"] = func602;
          func602.definitionLine = 328;
          func602.definitionModule = "kitty";
          var func609 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func609.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 333
              onSelf = true;
              var call610 = callmethod(this, "entities", [0]);
              var call611 = callmethod(call610,"push", [1], var_e);
              return call611
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func609.paramTypes = [];
          func609.paramTypes.push([]);
          func609.paramCounts = [
            1,
          ];
          func609.variableArities = [
            false,
          ];
          obj431.methods["addEntity"] = func609;
          func609.definitionLine = 332;
          func609.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 338
              lineNumber = 337
              onSelf = true;
              var call613 = callmethod(this, "mctx", [0]);
              return call613
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func612.paramCounts = [
            0,
          ];
          func612.variableArities = [
            false,
          ];
          obj431.methods["getContext"] = func612;
          func612.definitionLine = 336;
          func612.definitionModule = "kitty";
          sourceObject = obj431;
          obj431.data["background"] = undefined;
          var reader_kitty_background_614 = function() {
            return this.data["background"];
          }
          obj431.methods["background"] = reader_kitty_background_614;
          obj431.data["background"] = undefined;
          var writer_kitty_background_614 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj431.methods["background:="] = writer_kitty_background_614;
          reader_kitty_background_614.confidential = true;
          writer_kitty_background_614.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 196
          var string615 = new GraceString("black");
          obj431.data["backgroundColour"] = string615;
          var reader_kitty_backgroundColour_616 = function() {
            return this.data["backgroundColour"];
          }
          obj431.methods["backgroundColour"] = reader_kitty_backgroundColour_616;
          obj431.data["backgroundColour"] = string615;
          var writer_kitty_backgroundColour_616 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj431.methods["backgroundColour:="] = writer_kitty_backgroundColour_616;
          reader_kitty_backgroundColour_616.confidential = true;
          writer_kitty_backgroundColour_616.confidential = true;
          lineNumber = 198;
          moduleName = "kitty";
          lineNumber = 196
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string615)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["document"] = undefined;
          var reader_kitty_document_617 = function() {
            return this.data["document"];
          }
          obj431.methods["document"] = reader_kitty_document_617;
          obj431.data["document"] = undefined;
          var writer_kitty_document_617 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj431.methods["document:="] = writer_kitty_document_617;
          reader_kitty_document_617.confidential = true;
          writer_kitty_document_617.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_618 = function() {
            return this.data["backingCanvas"];
          }
          obj431.methods["backingCanvas"] = reader_kitty_backingCanvas_618;
          obj431.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_618 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj431.methods["backingCanvas:="] = writer_kitty_backingCanvas_618;
          reader_kitty_backingCanvas_618.confidential = true;
          writer_kitty_backingCanvas_618.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["backingContext"] = undefined;
          var reader_kitty_backingContext_619 = function() {
            return this.data["backingContext"];
          }
          obj431.methods["backingContext"] = reader_kitty_backingContext_619;
          obj431.data["backingContext"] = undefined;
          var writer_kitty_backingContext_619 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj431.methods["backingContext:="] = writer_kitty_backingContext_619;
          reader_kitty_backingContext_619.confidential = true;
          writer_kitty_backingContext_619.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["canvas"] = undefined;
          var reader_kitty_canvas_620 = function() {
            return this.data["canvas"];
          }
          obj431.methods["canvas"] = reader_kitty_canvas_620;
          obj431.data["canvas"] = undefined;
          var writer_kitty_canvas_620 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj431.methods["canvas:="] = writer_kitty_canvas_620;
          reader_kitty_canvas_620.confidential = true;
          writer_kitty_canvas_620.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_621 = function() {
            return this.data["canvasWidth"];
          }
          obj431.methods["canvasWidth"] = reader_kitty_canvasWidth_621;
          obj431.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_621 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj431.methods["canvasWidth:="] = writer_kitty_canvasWidth_621;
          reader_kitty_canvasWidth_621.confidential = true;
          writer_kitty_canvasWidth_621.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_622 = function() {
            return this.data["canvasHeight"];
          }
          obj431.methods["canvasHeight"] = reader_kitty_canvasHeight_622;
          obj431.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_622 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj431.methods["canvasHeight:="] = writer_kitty_canvasHeight_622;
          reader_kitty_canvasHeight_622.confidential = true;
          writer_kitty_canvasHeight_622.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 207
          var call623 = callmethod(var_collections,"list", [0]);
          var call624 = callmethod(call623,"new", [0]);
          obj431.data["entities"] = call624;
          var reader_kitty_entities_625 = function() {
            return this.data["entities"];
          }
          obj431.methods["entities"] = reader_kitty_entities_625;
          obj431.data["entities"] = call624;
          var writer_kitty_entities_625 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj431.methods["entities:="] = writer_kitty_entities_625;
          reader_kitty_entities_625.confidential = true;
          writer_kitty_entities_625.confidential = true;
          lineNumber = 209;
          moduleName = "kitty";
          lineNumber = 207
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call624)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 209
          var bool626 = new GraceBoolean(false)
          obj431.data["isInit"] = bool626;
          var reader_kitty_isInit_627 = function() {
            return this.data["isInit"];
          }
          obj431.methods["isInit"] = reader_kitty_isInit_627;
          obj431.data["isInit"] = bool626;
          var writer_kitty_isInit_627 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj431.methods["isInit:="] = writer_kitty_isInit_627;
          reader_kitty_isInit_627.confidential = true;
          writer_kitty_isInit_627.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 209
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool626)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 210
          var bool628 = new GraceBoolean(false)
          obj431.data["isRunning"] = bool628;
          var reader_kitty_isRunning_629 = function() {
            return this.data["isRunning"];
          }
          obj431.methods["isRunning"] = reader_kitty_isRunning_629;
          obj431.data["isRunning"] = bool628;
          var writer_kitty_isRunning_629 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj431.methods["isRunning:="] = writer_kitty_isRunning_629;
          reader_kitty_isRunning_629.confidential = true;
          writer_kitty_isRunning_629.confidential = true;
          lineNumber = 212;
          moduleName = "kitty";
          lineNumber = 210
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool628)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["mctx"] = undefined;
          var reader_kitty_mctx_630 = function() {
            return this.data["mctx"];
          }
          obj431.methods["mctx"] = reader_kitty_mctx_630;
          obj431.data["mctx"] = undefined;
          var writer_kitty_mctx_630 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj431.methods["mctx:="] = writer_kitty_mctx_630;
          reader_kitty_mctx_630.confidential = true;
          writer_kitty_mctx_630.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 216
          lineNumber = 214
          var call631 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj431.data["currentKeyDown"] = call631;
          var reader_kitty_currentKeyDown_632 = function() {
            return this.data["currentKeyDown"];
          }
          obj431.methods["currentKeyDown"] = reader_kitty_currentKeyDown_632;
          obj431.data["currentKeyDown"] = call631;
          var writer_kitty_currentKeyDown_632 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj431.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_632;
          reader_kitty_currentKeyDown_632.confidential = true;
          writer_kitty_currentKeyDown_632.confidential = true;
          lineNumber = 216;
          moduleName = "kitty";
          lineNumber = 214
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj431.mutable = true;
          sourceObject = obj431;
          obj431.data["ent"] = undefined;
          var reader_kitty_ent_633 = function() {
            return this.data["ent"];
          }
          obj431.methods["ent"] = reader_kitty_ent_633;
          obj431.data["ent"] = undefined;
          var writer_kitty_ent_633 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj431.methods["ent:="] = writer_kitty_ent_633;
          reader_kitty_ent_633.confidential = true;
          writer_kitty_ent_633.confidential = true;
          obj431.mutable = true;
          sourceObject = obj431;
          lineNumber = 218
          onSelf = true;
          var call634 = callmethod(this, "init", [0]);
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          sourceObject = obj431;
          superDepth = origSuperDepth;
        }
        obj_init_431.apply(obj431, []);
        return obj431
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func430.paramCounts = [
      0,
    ];
    func430.variableArities = [
      false,
    ];
    obj428.methods["new"] = func430;
    func430.definitionLine = 191;
    func430.definitionModule = "kitty";
    var func635 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj636 = Grace_allocObject();
        obj636.definitionModule = "kitty";
        obj636.definitionLine = 191;
        var inho636 = inheritingObject;
        while (inho636.superobj) inho636 = inho636.superobj;
        inho636.superobj = obj636;
        obj636.data = inheritingObject.data;
        obj636.outer = this;
        var reader_kitty_outer_637 = function() {
          return this.outer;
        }
        obj636.methods["outer"] = reader_kitty_outer_637;
        function obj_init_636() {
          var origSuperDepth = superDepth;
          superDepth = obj636;
          obj636.annotations = [];
          var func638 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 229
              var if639 = var_done;
              lineNumber = 225
              onSelf = true;
              var call640 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call640)) {
                lineNumber = 227
                lineNumber = 226
                var bool641 = new GraceBoolean(false)
                return bool641
              }
              lineNumber = 230
              lineNumber = 207
              lineNumber = 229
              var call642 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call643 = callmethod(this, "document:=", [1], call642);
              lineNumber = 230
              lineNumber = 229
              lineNumber = 230
              var string644 = new GraceString("standard-canvas");
              onSelf = true;
              var call645 = callmethod(this, "document", [0]);
              var call646 = callmethod(call645,"getElementById", [1], string644);
              onSelf = true;
              var call647 = callmethod(this, "canvas:=", [1], call646);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 231
              onSelf = true;
              var call648 = callmethod(this, "canvas", [0]);
              var call649 = callmethod(call648,"width", [0]);
              onSelf = true;
              var call650 = callmethod(this, "canvasWidth:=", [1], call649);
              lineNumber = 235
              lineNumber = 231
              lineNumber = 232
              onSelf = true;
              var call651 = callmethod(this, "canvas", [0]);
              var call652 = callmethod(call651,"height", [0]);
              onSelf = true;
              var call653 = callmethod(this, "canvasHeight:=", [1], call652);
              lineNumber = 247
              var block654 = Grace_allocObject();
              block654.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block654.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block654.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block654.methods["match"] = GraceBlock_match;
              block654.methods["prefix?"] = GraceBlock_lift;
              block654.receiver = this;
              block654.className = 'block<kitty:247>';
              block654.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 238
                lineNumber = 237
                onSelf = true;
                var call655 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call657 = callmethod(this, "canvas", [0]);
                var call658 = callmethod(call657,"offsetWidth", [0]);
                onSelf = true;
                var call660 = callmethod(this, "canvas", [0]);
                var call661 = callmethod(call660,"offsetLeft", [0]);
                var call663 = callmethod(var_ev,"clientX", [0]);
                var diff665 = callmethod(call663, "-", [1], call661);
                var quotient667 = callmethod(diff665, "/", [1], call658);
                var prod669 = callmethod(quotient667, "*", [1], call655);
                var var_x = prod669;
                lineNumber = 238;
                moduleName = "kitty";
                lineNumber = 237
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 242
                lineNumber = 238
                onSelf = true;
                var call670 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call672 = callmethod(this, "canvas", [0]);
                var call673 = callmethod(call672,"offsetHeight", [0]);
                onSelf = true;
                var call675 = callmethod(this, "canvas", [0]);
                var call676 = callmethod(call675,"offsetTop", [0]);
                var call678 = callmethod(var_ev,"clientY", [0]);
                var diff680 = callmethod(call678, "-", [1], call676);
                var quotient682 = callmethod(diff680, "/", [1], call673);
                var prod684 = callmethod(quotient682, "*", [1], call670);
                var var_y = prod684;
                lineNumber = 242;
                moduleName = "kitty";
                lineNumber = 238
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 246
                var if685 = var_done;
                lineNumber = 242
                var opresult688 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call691 = callmethod(this, "canvasWidth", [0]);
                var diff693 = callmethod(call691, "-", [1], new GraceNum(20));
                var opresult696 = callmethod(var_x, ">", [1], diff693);
                var opresult698 = callmethod(opresult696, "&&", [1], opresult688);
                if (Grace_isTrue(opresult698)) {
                  lineNumber = 243
                  var call699 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 244
                  onSelf = true;
                  var call700 = callmethod(this, "stop", [0]);
                  if685 = call700;
                }
                return if685;
              };
              var_mouseDownListener = block654;
              lineNumber = 247
              var string701 = new GraceString("mousedown");
              onSelf = true;
              var call702 = callmethod(this, "canvas", [0]);
              var call703 = callmethod(call702,"addEventListener", [2], string701, var_mouseDownListener);
              lineNumber = 257
              var block704 = Grace_allocObject();
              block704.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block704.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block704.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block704.methods["match"] = GraceBlock_match;
              block704.methods["prefix?"] = GraceBlock_lift;
              block704.receiver = this;
              block704.className = 'block<kitty:257>';
              block704.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 255
                var if705 = var_done;
                lineNumber = 252
                var call707 = callmethod(var_ev,"keyCode", [0]);
                var opresult709 = callmethod(call707, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult709)) {
                  lineNumber = 253
                  onSelf = true;
                  var call710 = callmethod(this, "stop", [0]);
                  if705 = call710;
                }
                lineNumber = 256
                lineNumber = 252
                lineNumber = 255
                var call711 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call712 = callmethod(this, "currentKeyDown:=", [1], call711);
                return call712;
              };
              var_keyDownListener = block704;
              lineNumber = 257
              var string713 = new GraceString("keydown");
              onSelf = true;
              var call714 = callmethod(this, "document", [0]);
              var call715 = callmethod(call714,"addEventListener", [2], string713, var_keyDownListener);
              lineNumber = 263
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
              block716.className = 'block<kitty:263>';
              block716.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 262
                lineNumber = 255
                lineNumber = 262
                lineNumber = 261
                var call717 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call718 = callmethod(this, "currentKeyDown:=", [1], call717);
                return call718;
              };
              var_keyUpListener = block716;
              lineNumber = 263
              var string719 = new GraceString("keyup");
              onSelf = true;
              var call720 = callmethod(this, "document", [0]);
              var call721 = callmethod(call720,"addEventListener", [2], string719, var_keyUpListener);
              lineNumber = 265
              lineNumber = 255
              lineNumber = 265
              var string722 = new GraceString("canvas");
              var call723 = callmethod(var_dom,"document", [0]);
              var call724 = callmethod(call723,"createElement", [1], string722);
              onSelf = true;
              var call725 = callmethod(this, "backingCanvas:=", [1], call724);
              lineNumber = 267
              lineNumber = 265
              lineNumber = 266
              onSelf = true;
              var call726 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call727 = callmethod(this, "backingCanvas", [0]);
              var call728 = callmethod(call727,"height:=", [1], call726);
              lineNumber = 268
              lineNumber = 265
              lineNumber = 267
              onSelf = true;
              var call729 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call730 = callmethod(this, "backingCanvas", [0]);
              var call731 = callmethod(call730,"width:=", [1], call729);
              lineNumber = 268
              lineNumber = 265
              lineNumber = 268
              var string732 = new GraceString("2d");
              onSelf = true;
              var call733 = callmethod(this, "backingCanvas", [0]);
              var call734 = callmethod(call733,"getContext", [1], string732);
              onSelf = true;
              var call735 = callmethod(this, "backingContext:=", [1], call734);
              lineNumber = 269
              lineNumber = 265
              lineNumber = 269
              var string736 = new GraceString("2d");
              onSelf = true;
              var call737 = callmethod(this, "canvas", [0]);
              var call738 = callmethod(call737,"getContext", [1], string736);
              onSelf = true;
              var call739 = callmethod(this, "mctx:=", [1], call738);
              lineNumber = 272
              var string740 = new GraceString("doggo.jpg");
              onSelf = true;
              var call741 = callmethod(this, "setBackground", [1], string740);
              lineNumber = 284
              lineNumber = 265
              lineNumber = 278
              var bool742 = new GraceBoolean(true)
              onSelf = true;
              var call743 = callmethod(this, "isInit:=", [1], bool742);
              return call743
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func638.paramCounts = [
            0,
          ];
          func638.variableArities = [
            false,
          ];
          obj636.methods["init"] = func638;
          func638.definitionLine = 221;
          func638.definitionModule = "kitty";
          var func744 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func744.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              lineNumber = 265
              lineNumber = 289
              var bool745 = new GraceBoolean(true)
              onSelf = true;
              var call746 = callmethod(this, "isRunning:=", [1], bool745);
              lineNumber = 290
              var block747 = Grace_allocObject();
              block747.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block747.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block747.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block747.methods["match"] = GraceBlock_match;
              block747.methods["prefix?"] = GraceBlock_lift;
              block747.receiver = this;
              block747.className = 'block<kitty:290>';
              block747.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call748 = callmethod(this, "isRunning", [0]);
                return call748;
              };
              lineNumber = 294
              var block749 = Grace_allocObject();
              block749.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block749.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block749.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block749.methods["match"] = GraceBlock_match;
              block749.methods["prefix?"] = GraceBlock_lift;
              block749.receiver = this;
              block749.className = 'block<kitty:294>';
              block749.real = function(
              ) {
                sourceObject = this;
                lineNumber = 291
                onSelf = true;
                var call750 = callmethod(this, "update", [0]);
                return call750;
              };
              lineNumber = 290
              var call751 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block747, new GraceNum(10), block749);
              return call751
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
          obj636.methods["start"] = func744;
          func744.definitionLine = 287;
          func744.definitionModule = "kitty";
          var func752 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func752.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 303
              lineNumber = 265
              lineNumber = 302
              onSelf = true;
              var call753 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call754 = callmethod(this, "mctx", [0]);
              var call755 = callmethod(call754,"fillStyle:=", [1], call753);
              lineNumber = 303
              onSelf = true;
              var call756 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call757 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call758 = callmethod(this, "mctx", [0]);
              var call759 = callmethod(call758,"fillRect", [4], new GraceNum(0), new GraceNum(0), call756, call757);
              lineNumber = 304
              onSelf = true;
              var call760 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call761 = callmethod(this, "mctx", [0]);
              var call762 = callmethod(call761,"drawImage", [3], call760, new GraceNum(0), new GraceNum(0));
              lineNumber = 305
              onSelf = true;
              var call763 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call765 = callmethod(this, "canvasWidth", [0]);
              var quotient767 = callmethod(call765, "/", [1], new GraceNum(2));
              onSelf = true;
              var call769 = callmethod(this, "canvasHeight", [0]);
              var quotient771 = callmethod(call769, "/", [1], new GraceNum(2));
              onSelf = true;
              var call772 = callmethod(this, "background", [0]);
              var call773 = callmethod(call772,"draw", [4], call763, quotient767, quotient771, new GraceNum(0));
              lineNumber = 308
              onSelf = true;
              var call774 = callmethod(this, "entities", [0]);
              lineNumber = 314
              var block775 = Grace_allocObject();
              block775.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block775.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block775.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block775.methods["match"] = GraceBlock_match;
              block775.methods["prefix?"] = GraceBlock_lift;
              block775.receiver = this;
              block775.className = 'block<kitty:314>';
              block775.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 309
                var call776 = callmethod(var_entity,"update", [0]);
                lineNumber = 310
                onSelf = true;
                var call777 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call779 = callmethod(this, "canvasWidth", [0]);
                var quotient781 = callmethod(call779, "/", [1], new GraceNum(2));
                onSelf = true;
                var call783 = callmethod(this, "canvasHeight", [0]);
                var quotient785 = callmethod(call783, "/", [1], new GraceNum(2));
                var call786 = callmethod(var_entity,"draw", [3], call777, quotient781, quotient785);
                return call786;
              };
              var call787 = callmethod(Grace_prelude,"for()do", [1, 1], call774, block775);
              return call787
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func752.paramCounts = [
            0,
          ];
          func752.variableArities = [
            false,
          ];
          obj636.methods["update"] = func752;
          func752.definitionLine = 297;
          func752.definitionModule = "kitty";
          var func788 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func788.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 317
              var string789 = new GraceString("WORLD STOPPING...");
              var call790 = Grace_print(string789);
              lineNumber = 319
              lineNumber = 309
              lineNumber = 318
              var bool791 = new GraceBoolean(false)
              onSelf = true;
              var call792 = callmethod(this, "isRunning:=", [1], bool791);
              lineNumber = 319
              var string793 = new GraceString("mousedown");
              onSelf = true;
              var call794 = callmethod(this, "canvas", [0]);
              var call795 = callmethod(call794,"removeEventListener", [2], string793, var_mouseDownListener);
              lineNumber = 320
              var string796 = new GraceString("keydown");
              onSelf = true;
              var call797 = callmethod(this, "document", [0]);
              var call798 = callmethod(call797,"removeEventListener", [2], string796, var_keyDownListener);
              lineNumber = 321
              var string799 = new GraceString("keyup");
              onSelf = true;
              var call800 = callmethod(this, "document", [0]);
              var call801 = callmethod(call800,"removeEventListener", [2], string799, var_keyUpListener);
              return call801
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func788.paramCounts = [
            0,
          ];
          func788.variableArities = [
            false,
          ];
          obj636.methods["stop"] = func788;
          func788.definitionLine = 316;
          func788.definitionModule = "kitty";
          var func802 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func802.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 326
              lineNumber = 325
              onSelf = true;
              var call803 = callmethod(this, "currentKeyDown", [0]);
              var opresult806 = callmethod(var_key, "==", [1], call803);
              return opresult806
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func802.paramCounts = [
            1,
          ];
          func802.variableArities = [
            false,
          ];
          obj636.methods["isKeyDown"] = func802;
          func802.definitionLine = 324;
          func802.definitionModule = "kitty";
          var func807 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func807.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 329
              lineNumber = 309
              lineNumber = 329
              onSelf = true;
              var call808 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call809 = callmethod(this, "canvasHeight", [0]);
              var call810 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call811 = callmethod(call810, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call812 = callmethod(call811, "Image()width()height", [1, 1, 1], var_url, call808, call809);
              onSelf = true;
              var call813 = callmethod(this, "background:=", [1], call812);
              return call813
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func807.paramCounts = [
            1,
          ];
          func807.variableArities = [
            false,
          ];
          obj636.methods["setBackground"] = func807;
          func807.definitionLine = 328;
          func807.definitionModule = "kitty";
          var func814 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func814.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 333
              onSelf = true;
              var call815 = callmethod(this, "entities", [0]);
              var call816 = callmethod(call815,"push", [1], var_e);
              return call816
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func814.paramTypes = [];
          func814.paramTypes.push([]);
          func814.paramCounts = [
            1,
          ];
          func814.variableArities = [
            false,
          ];
          obj636.methods["addEntity"] = func814;
          func814.definitionLine = 332;
          func814.definitionModule = "kitty";
          var func817 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func817.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 338
              lineNumber = 337
              onSelf = true;
              var call818 = callmethod(this, "mctx", [0]);
              return call818
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
          obj636.methods["getContext"] = func817;
          func817.definitionLine = 336;
          func817.definitionModule = "kitty";
          sourceObject = obj636;
          obj636.data["background"] = undefined;
          var reader_kitty_background_819 = function() {
            return this.data["background"];
          }
          obj636.methods["background"] = reader_kitty_background_819;
          obj636.data["background"] = undefined;
          var writer_kitty_background_819 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj636.methods["background:="] = writer_kitty_background_819;
          reader_kitty_background_819.confidential = true;
          writer_kitty_background_819.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 196
          var string820 = new GraceString("black");
          obj636.data["backgroundColour"] = string820;
          var reader_kitty_backgroundColour_821 = function() {
            return this.data["backgroundColour"];
          }
          obj636.methods["backgroundColour"] = reader_kitty_backgroundColour_821;
          obj636.data["backgroundColour"] = string820;
          var writer_kitty_backgroundColour_821 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj636.methods["backgroundColour:="] = writer_kitty_backgroundColour_821;
          reader_kitty_backgroundColour_821.confidential = true;
          writer_kitty_backgroundColour_821.confidential = true;
          lineNumber = 198;
          moduleName = "kitty";
          lineNumber = 196
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string820)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["document"] = undefined;
          var reader_kitty_document_822 = function() {
            return this.data["document"];
          }
          obj636.methods["document"] = reader_kitty_document_822;
          obj636.data["document"] = undefined;
          var writer_kitty_document_822 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj636.methods["document:="] = writer_kitty_document_822;
          reader_kitty_document_822.confidential = true;
          writer_kitty_document_822.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_823 = function() {
            return this.data["backingCanvas"];
          }
          obj636.methods["backingCanvas"] = reader_kitty_backingCanvas_823;
          obj636.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_823 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj636.methods["backingCanvas:="] = writer_kitty_backingCanvas_823;
          reader_kitty_backingCanvas_823.confidential = true;
          writer_kitty_backingCanvas_823.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["backingContext"] = undefined;
          var reader_kitty_backingContext_824 = function() {
            return this.data["backingContext"];
          }
          obj636.methods["backingContext"] = reader_kitty_backingContext_824;
          obj636.data["backingContext"] = undefined;
          var writer_kitty_backingContext_824 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj636.methods["backingContext:="] = writer_kitty_backingContext_824;
          reader_kitty_backingContext_824.confidential = true;
          writer_kitty_backingContext_824.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["canvas"] = undefined;
          var reader_kitty_canvas_825 = function() {
            return this.data["canvas"];
          }
          obj636.methods["canvas"] = reader_kitty_canvas_825;
          obj636.data["canvas"] = undefined;
          var writer_kitty_canvas_825 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj636.methods["canvas:="] = writer_kitty_canvas_825;
          reader_kitty_canvas_825.confidential = true;
          writer_kitty_canvas_825.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_826 = function() {
            return this.data["canvasWidth"];
          }
          obj636.methods["canvasWidth"] = reader_kitty_canvasWidth_826;
          obj636.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_826 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj636.methods["canvasWidth:="] = writer_kitty_canvasWidth_826;
          reader_kitty_canvasWidth_826.confidential = true;
          writer_kitty_canvasWidth_826.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_827 = function() {
            return this.data["canvasHeight"];
          }
          obj636.methods["canvasHeight"] = reader_kitty_canvasHeight_827;
          obj636.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_827 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj636.methods["canvasHeight:="] = writer_kitty_canvasHeight_827;
          reader_kitty_canvasHeight_827.confidential = true;
          writer_kitty_canvasHeight_827.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 207
          var call828 = callmethod(var_collections,"list", [0]);
          var call829 = callmethod(call828,"new", [0]);
          obj636.data["entities"] = call829;
          var reader_kitty_entities_830 = function() {
            return this.data["entities"];
          }
          obj636.methods["entities"] = reader_kitty_entities_830;
          obj636.data["entities"] = call829;
          var writer_kitty_entities_830 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj636.methods["entities:="] = writer_kitty_entities_830;
          reader_kitty_entities_830.confidential = true;
          writer_kitty_entities_830.confidential = true;
          lineNumber = 209;
          moduleName = "kitty";
          lineNumber = 207
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call829)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 209
          var bool831 = new GraceBoolean(false)
          obj636.data["isInit"] = bool831;
          var reader_kitty_isInit_832 = function() {
            return this.data["isInit"];
          }
          obj636.methods["isInit"] = reader_kitty_isInit_832;
          obj636.data["isInit"] = bool831;
          var writer_kitty_isInit_832 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj636.methods["isInit:="] = writer_kitty_isInit_832;
          reader_kitty_isInit_832.confidential = true;
          writer_kitty_isInit_832.confidential = true;
          lineNumber = 210;
          moduleName = "kitty";
          lineNumber = 209
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool831)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 210
          var bool833 = new GraceBoolean(false)
          obj636.data["isRunning"] = bool833;
          var reader_kitty_isRunning_834 = function() {
            return this.data["isRunning"];
          }
          obj636.methods["isRunning"] = reader_kitty_isRunning_834;
          obj636.data["isRunning"] = bool833;
          var writer_kitty_isRunning_834 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj636.methods["isRunning:="] = writer_kitty_isRunning_834;
          reader_kitty_isRunning_834.confidential = true;
          writer_kitty_isRunning_834.confidential = true;
          lineNumber = 212;
          moduleName = "kitty";
          lineNumber = 210
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool833)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["mctx"] = undefined;
          var reader_kitty_mctx_835 = function() {
            return this.data["mctx"];
          }
          obj636.methods["mctx"] = reader_kitty_mctx_835;
          obj636.data["mctx"] = undefined;
          var writer_kitty_mctx_835 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj636.methods["mctx:="] = writer_kitty_mctx_835;
          reader_kitty_mctx_835.confidential = true;
          writer_kitty_mctx_835.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 216
          lineNumber = 214
          var call836 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj636.data["currentKeyDown"] = call836;
          var reader_kitty_currentKeyDown_837 = function() {
            return this.data["currentKeyDown"];
          }
          obj636.methods["currentKeyDown"] = reader_kitty_currentKeyDown_837;
          obj636.data["currentKeyDown"] = call836;
          var writer_kitty_currentKeyDown_837 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj636.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_837;
          reader_kitty_currentKeyDown_837.confidential = true;
          writer_kitty_currentKeyDown_837.confidential = true;
          lineNumber = 216;
          moduleName = "kitty";
          lineNumber = 214
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call836)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj636.mutable = true;
          sourceObject = obj636;
          obj636.data["ent"] = undefined;
          var reader_kitty_ent_838 = function() {
            return this.data["ent"];
          }
          obj636.methods["ent"] = reader_kitty_ent_838;
          obj636.data["ent"] = undefined;
          var writer_kitty_ent_838 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj636.methods["ent:="] = writer_kitty_ent_838;
          reader_kitty_ent_838.confidential = true;
          writer_kitty_ent_838.confidential = true;
          obj636.mutable = true;
          sourceObject = obj636;
          lineNumber = 218
          onSelf = true;
          var call839 = callmethod(this, "init", [0]);
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          sourceObject = obj636;
          superDepth = origSuperDepth;
        }
        obj_init_636.apply(inheritingObject, []);
        return obj636
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj428.methods["new()object"] = func635;
    var func840 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 191
        var string841 = new GraceString("class KittyWorld");
        return string841
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func840.paramCounts = [
    ];
    func840.variableArities = [
    ];
    obj428.methods["asDebugString"] = func840;
    func840.definitionLine = 191;
    func840.definitionModule = "kitty";
    sourceObject = obj428;
    sourceObject = obj428;
    superDepth = origSuperDepth;
  }
  obj_init_428.apply(obj428, []);
  var var_KittyWorld = obj428;
  lineNumber = 342
  lineNumber = 351
  lineNumber = 366
  lineNumber = 371
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nmethods-of:KittyWorld.new:\n entities\n backgroundColour:=\n canvasHeight:=\n start\n isRunning:=\n canvasHeight\n backingContext:=\n currentKeyDown:=\n canvas\n isKeyDown\n ent:=\n background\n stop\n isInit:=\n setBackground\n canvasWidth:=\n init\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n isRunning\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n addEntity\n canvasWidth\n ent\n isInit\n mctx:=\n backingContext\n entities:=\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nfresh:Image()width()height:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nfresh:Entity()x()y()actions:\n strafe\n setLocation\n rotation\n setAction\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n getRotation\n move\n tag:=\n turn\n createImage\n tag\n update\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n strafe\n setLocation\n getRotation\n createImage\n action:=\n getX\n getY\n image:=\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\n setAction\n tag:=\n turn\n move\n tag\n update\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y()actions\n update\n move\n strafe\n turn\n setLocation\n setImage\n createImage\n getX\n getY\n KittyWorld\n World\n startWorld\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\nfresh:World:\n entities\n backingContext:=\n canvasHeight:=\n start\n isRunning:=\n canvasHeight\n backgroundColour:=\n currentKeyDown:=\n canvas\n isRunning\n ent:=\n background\n stop\n isInit:=\n setBackground\n canvasWidth:=\n init\n document:=\n mctx\n document\n backingCanvas:=\n update\n getContext\n backingCanvas\n isKeyDown\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n addEntity\n entities:=\n ent\n isInit\n mctx:=\n backingContext\n canvasWidth\n";
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
