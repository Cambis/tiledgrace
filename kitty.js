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
        var block12 = Grace_allocObject();
        block12.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block12.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block12.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block12.methods["match"] = GraceBlock_match;
        block12.methods["prefix?"] = GraceBlock_lift;
        block12.receiver = this;
        block12.className = 'block<kitty:147>';
        block12.real = function(
        ) {
          sourceObject = this;
          var call13 = callmethod(new GraceNum(200),"prefix-", [0]);
          onSelf = true;
          var call14 = callmethod(this, "setLocation", [2], new GraceNum(10), call13);
          return call14;
        };
        var call15 = callmethod(block12,"apply", [0]);
        sourceObject = obj9;
        lineNumber = 148
        var call16 = callmethod(var_actions__39__,"apply", [0]);
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
  var func17 = function(argcv) {
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
      var obj18 = Grace_allocObject();
      obj18.definitionModule = "kitty";
      obj18.definitionLine = 145;
      var inho18 = inheritingObject;
      while (inho18.superobj) inho18 = inho18.superobj;
      inho18.superobj = obj18;
      obj18.data = inheritingObject.data;
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
        lineNumber = 146
        var call20 = callmethod(var_KittyEntity,"new()object", [3, 1], var_tag__39__, var_x__39__, var_y__39__, this);
        obj18.superobj = call20;
        obj18._value = call20._value;
        sourceObject = obj18;
        lineNumber = 147
        var block21 = Grace_allocObject();
        block21.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block21.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block21.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block21.methods["match"] = GraceBlock_match;
        block21.methods["prefix?"] = GraceBlock_lift;
        block21.receiver = this;
        block21.className = 'block<kitty:147>';
        block21.real = function(
        ) {
          sourceObject = this;
          var call22 = callmethod(new GraceNum(200),"prefix-", [0]);
          onSelf = true;
          var call23 = callmethod(this, "setLocation", [2], new GraceNum(10), call22);
          return call23;
        };
        var call24 = callmethod(block21,"apply", [0]);
        sourceObject = obj18;
        lineNumber = 148
        var call25 = callmethod(var_actions__39__,"apply", [0]);
        superDepth = origSuperDepth;
      }
      obj_init_18.apply(inheritingObject, []);
      return obj18
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()x()y()actions()object"] = func17;
  lineNumber = 154
  var func26 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 155
      var call27 = callmethod(var_newborn,"setAction", [1], var_action__39__);
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
  this.methods["update"] = func26;
  func26.definitionLine = 154;
  func26.definitionModule = "kitty";
  lineNumber = 158
  var func28 = function(argcv) {
    var curarg = 1;
    var var_distance__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func28.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 159
      var call29 = callmethod(var_newborn,"move", [1], var_distance__39__);
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
  this.methods["move"] = func28;
  func28.definitionLine = 158;
  func28.definitionModule = "kitty";
  lineNumber = 162
  var func30 = function(argcv) {
    var curarg = 1;
    var var_distance__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 163
      var call31 = callmethod(var_newborn,"strafe", [1], var_distance__39__);
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
  this.methods["strafe"] = func30;
  func30.definitionLine = 162;
  func30.definitionModule = "kitty";
  lineNumber = 166
  var func32 = function(argcv) {
    var curarg = 1;
    var var_angle__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 167
      var call33 = callmethod(var_newborn,"turn", [1], var_angle__39__);
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
    1,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["turn"] = func32;
  func32.definitionLine = 166;
  func32.definitionModule = "kitty";
  lineNumber = 174
  var func34 = function(argcv) {
    var curarg = 1;
    var var_image__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 175
      var call35 = callmethod(var_newborn,"setImage", [1], var_image__39__);
      return call35
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func34.paramTypes = [];
  func34.paramTypes.push([]);
  func34.paramCounts = [
    1,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["setImage"] = func34;
  func34.definitionLine = 174;
  func34.definitionModule = "kitty";
  lineNumber = 178
  var func36 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 179
      var call37 = callmethod(var_newborn,"createImage", [1], var_url__39__);
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
    1,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["createImage"] = func36;
  func36.definitionLine = 178;
  func36.definitionModule = "kitty";
  lineNumber = 182
  var func38 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func38.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
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
  func38.paramCounts = [
    1,
  ];
  func38.variableArities = [
    false,
  ];
  this.methods["setX"] = func38;
  func38.definitionLine = 182;
  func38.definitionModule = "kitty";
  lineNumber = 186
  var func39 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func39.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 188
      lineNumber = 187
      var call40 = callmethod(var_newborn,"getX", [0]);
      return call40
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func39.paramCounts = [
    0,
  ];
  func39.variableArities = [
    false,
  ];
  this.methods["getX"] = func39;
  func39.definitionLine = 186;
  func39.definitionModule = "kitty";
  lineNumber = 190
  var func41 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func41.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 192
      lineNumber = 191
      var call42 = callmethod(var_newborn,"getY", [0]);
      return call42
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
  this.methods["getY"] = func41;
  func41.definitionLine = 190;
  func41.definitionModule = "kitty";
  lineNumber = 347
  var func43 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func43.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 348
      var obj44 = Grace_allocObject();
      obj44.definitionModule = "kitty";
      obj44.definitionLine = 348;
      obj44.outer = this;
      var reader_kitty_outer_45 = function() {
        return this.outer;
      }
      obj44.methods["outer"] = reader_kitty_outer_45;
      function obj_init_44() {
        var origSuperDepth = superDepth;
        superDepth = obj44;
        obj44.annotations = [];
        sourceObject = obj44;
        lineNumber = 349
        var call46 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj44.superobj = call46;
        obj44._value = call46._value;
        superDepth = origSuperDepth;
      }
      obj_init_44.apply(obj44, []);
      return obj44
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
  this.methods["World"] = func43;
  func43.definitionLine = 347;
  func43.definitionModule = "kitty";
  var func47 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj48 = Grace_allocObject();
      obj48.definitionModule = "kitty";
      obj48.definitionLine = 348;
      var inho48 = inheritingObject;
      while (inho48.superobj) inho48 = inho48.superobj;
      inho48.superobj = obj48;
      obj48.data = inheritingObject.data;
      obj48.outer = this;
      var reader_kitty_outer_49 = function() {
        return this.outer;
      }
      obj48.methods["outer"] = reader_kitty_outer_49;
      function obj_init_48() {
        var origSuperDepth = superDepth;
        superDepth = obj48;
        obj48.annotations = [];
        sourceObject = obj48;
        var call50 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj48.superobj = call50;
        obj48._value = call50._value;
        superDepth = origSuperDepth;
      }
      obj_init_48.apply(inheritingObject, []);
      return obj48
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func47;
  lineNumber = 356
  var func51 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func51.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (startWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 358
      var string52 = new GraceString("CHECKING...");
      var call53 = Grace_print(string52);
      lineNumber = 365
      var if54 = var_done;
      lineNumber = 360
      var call55 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call55)) {
        lineNumber = 361
        var string56 = new GraceString("NO WORLD!!");
        var call57 = Grace_print(string56);
        lineNumber = 363
        return var_done
      }
      lineNumber = 365
      var string58 = new GraceString("STARTING...");
      var call59 = Grace_print(string58);
      lineNumber = 368
      var call60 = callmethod(var_m__95__world,"start", [0]);
      return call60
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
  this.methods["startWorld"] = func51;
  func51.definitionLine = 356;
  func51.definitionModule = "kitty";
  lineNumber = 371
  var func61 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func61.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 373
      lineNumber = 372
      var_m__95__world = var_world__39__;
      lineNumber = 374
      lineNumber = 373
      var bool62 = new GraceBoolean(true)
      var_worldSet = bool62;
      return bool62
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func61.paramTypes = [];
  func61.paramTypes.push([]);
  func61.paramCounts = [
    1,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func61;
  func61.definitionLine = 371;
  func61.definitionModule = "kitty";
  lineNumber = 376
  var func63 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func63.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 377
      onSelf = true;
      var call64 = callmethod(this, "startWorld", [0]);
      return call64
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
  this.methods["atModuleEnd"] = func63;
  func63.definitionLine = 376;
  func63.definitionModule = "kitty";
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
  var call65 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call65;
  this.data = call65.data;
  this._value = call65._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 368
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["m_world"] = func66;
  func66.definitionLine = 368;
  func66.definitionModule = "kitty";
  lineNumber = 368
  var func67 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    1,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func67;
  func67.definitionLine = 368;
  func67.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool68 = new GraceBoolean(false)
  var var_worldSet = bool68;
  lineNumber = 368
  var func69 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    0,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func69;
  func69.definitionLine = 368;
  func69.definitionModule = "kitty";
  lineNumber = 368
  var func70 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    1,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func70;
  func70.definitionLine = 368;
  func70.definitionModule = "kitty";
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
  lineNumber = 368
  var func71 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func71.paramCounts[0])
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
  func71.paramCounts = [
    0,
  ];
  func71.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func71;
  func71.definitionLine = 368;
  func71.definitionModule = "kitty";
  lineNumber = 368
  var func72 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func72.paramCounts[0])
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
  func72.paramCounts = [
    1,
  ];
  func72.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func72;
  func72.definitionLine = 368;
  func72.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 368
  var func73 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func73.paramCounts[0])
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
  func73.paramCounts = [
    0,
  ];
  func73.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func73;
  func73.definitionLine = 368;
  func73.definitionModule = "kitty";
  lineNumber = 368
  var func74 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func74.paramCounts[0])
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
  func74.paramCounts = [
    1,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func74;
  func74.definitionLine = 368;
  func74.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 368
  var func75 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func75.paramCounts[0])
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
  func75.paramCounts = [
    0,
  ];
  func75.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func75;
  func75.definitionLine = 368;
  func75.definitionModule = "kitty";
  lineNumber = 368
  var func76 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func76.paramCounts[0])
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
  func76.paramCounts = [
    1,
  ];
  func76.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func76;
  func76.definitionLine = 368;
  func76.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 20
  lineNumber = 17
  var call77 = callmethod(var_dom,"window", [0]);
  var call78 = callmethod(call77,"Math", [0]);
  var var_math = call78;
  var func79 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func79.paramCounts[0])
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
  func79.paramCounts = [
    0,
  ];
  func79.variableArities = [
    false,
  ];
  this.methods["math"] = func79;
  func79.definitionLine = 17;
  func79.definitionModule = "kitty";
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
  var func80 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func80.paramCounts[0])
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
  func80.paramCounts = [
    0,
  ];
  func80.variableArities = [
    false,
  ];
  this.methods["newborn"] = func80;
  func80.definitionLine = 17;
  func80.definitionModule = "kitty";
  lineNumber = 17
  var func81 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func81.paramCounts[0])
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
  func81.paramCounts = [
    1,
  ];
  func81.variableArities = [
    false,
  ];
  this.methods["newborn:="] = func81;
  func81.definitionLine = 17;
  func81.definitionModule = "kitty";
  lineNumber = 25
  var func82 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func82.paramCounts[0])
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
  func82.paramCounts = [
    0,
  ];
  func82.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func82;
  func82.definitionLine = 25;
  func82.definitionModule = "kitty";
  var obj83 = Grace_allocObject();
  obj83.definitionModule = "kitty";
  obj83.definitionLine = 25;
  obj83.outer = this;
  var reader_kitty_outer_84 = function() {
    return this.outer;
  }
  obj83.methods["outer"] = reader_kitty_outer_84;
  function obj_init_83() {
    var origSuperDepth = superDepth;
    superDepth = obj83;
    obj83.annotations = [];
    var func85 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func85.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj86 = Grace_allocObject();
        obj86.definitionModule = "kitty";
        obj86.definitionLine = 25;
        obj86.outer = this;
        var reader_kitty_outer_87 = function() {
          return this.outer;
        }
        obj86.methods["outer"] = reader_kitty_outer_87;
        function obj_init_86() {
          var origSuperDepth = superDepth;
          superDepth = obj86;
          obj86.annotations = [];
          var func88 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func88.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call89 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call90 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod94 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient96 = callmethod(prod94, "/", [1], new GraceNum(180));
              var call97 = callmethod(var_ctx,"rotate", [1], quotient96);
              lineNumber = 44
              onSelf = true;
              var call98 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block99 = Grace_allocObject();
              block99.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block99.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block99.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block99.methods["match"] = GraceBlock_match;
              block99.methods["prefix?"] = GraceBlock_lift;
              block99.receiver = this;
              block99.className = 'block<kitty:47>';
              block99.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call101 = callmethod(this, "width", [0]);
                var call102 = callmethod(call101,"prefix-", [0]);
                var quotient104 = callmethod(call102, "/", [1], new GraceNum(2));
                onSelf = true;
                var call106 = callmethod(this, "height", [0]);
                var call107 = callmethod(call106,"prefix-", [0]);
                var quotient109 = callmethod(call107, "/", [1], new GraceNum(2));
                onSelf = true;
                var call110 = callmethod(this, "width", [0]);
                onSelf = true;
                var call111 = callmethod(this, "height", [0]);
                var call112 = callmethod(var_ctx,"drawImage", [5], var_element, quotient104, quotient109, call110, call111);
                return call112;
              };
              var call113 = callmethod(Grace_prelude,"for()do", [1, 1], call98, block99);
              lineNumber = 47
              var call114 = callmethod(var_ctx,"restore", [0]);
              return call114
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func88.paramCounts = [
            4,
          ];
          func88.variableArities = [
            false,
          ];
          obj86.methods["draw"] = func88;
          func88.definitionLine = 38;
          func88.definitionModule = "kitty";
          var func115 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func115.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call116 = callmethod(this, "imgTag", [0]);
              return call116
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func115.paramCounts = [
            0,
          ];
          func115.variableArities = [
            false,
          ];
          obj86.methods["getTag"] = func115;
          func115.definitionLine = 51;
          func115.definitionModule = "kitty";
          var func117 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func117.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call118 = callmethod(this, "elements", [0]);
              var call119 = callmethod(call118,"push", [1], var_imgTag__39__);
              return call119
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func117.paramCounts = [
            1,
          ];
          func117.variableArities = [
            false,
          ];
          obj86.methods["drawImage"] = func117;
          func117.definitionLine = 55;
          func117.definitionModule = "kitty";
          sourceObject = obj86;
          lineNumber = 29
          var string120 = new GraceString("img");
          var call121 = callmethod(var_dom,"document", [0]);
          var call122 = callmethod(call121,"createElement", [1], string120);
          obj86.data["imgTag"] = call122;
          var reader_kitty_imgTag_123 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_123.def = true;
          reader_kitty_imgTag_123.confidential = true;
          obj86.methods["imgTag"] = reader_kitty_imgTag_123;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call122)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj86;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call124 = callmethod(this, "imgTag", [0]);
          var call125 = callmethod(call124,"src:=", [1], var_url__39__);
          sourceObject = obj86;
          lineNumber = 32
          var call126 = callmethod(var_collections,"list", [0]);
          var call127 = callmethod(call126,"new", [0]);
          obj86.data["elements"] = call127;
          var reader_kitty_elements_128 = function() {
            return this.data["elements"];
          }
          obj86.methods["elements"] = reader_kitty_elements_128;
          obj86.data["elements"] = call127;
          var writer_kitty_elements_128 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj86.methods["elements:="] = writer_kitty_elements_128;
          reader_kitty_elements_128.confidential = true;
          writer_kitty_elements_128.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call127)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj86.mutable = true;
          sourceObject = obj86;
          lineNumber = 33
          onSelf = true;
          var call129 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call130 = callmethod(this, "elements", [0]);
          var call131 = callmethod(call130,"push", [1], call129);
          sourceObject = obj86;
          lineNumber = 35
          obj86.data["height"] = var_height__39__;
          var reader_kitty_height_132 = function() {
            return this.data["height"];
          }
          obj86.methods["height"] = reader_kitty_height_132;
          obj86.data["height"] = var_height__39__;
          var writer_kitty_height_132 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj86.methods["height:="] = writer_kitty_height_132;
          reader_kitty_height_132.confidential = true;
          writer_kitty_height_132.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj86.mutable = true;
          sourceObject = obj86;
          lineNumber = 36
          obj86.data["width"] = var_width__39__;
          var reader_kitty_width_133 = function() {
            return this.data["width"];
          }
          obj86.methods["width"] = reader_kitty_width_133;
          obj86.data["width"] = var_width__39__;
          var writer_kitty_width_133 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj86.methods["width:="] = writer_kitty_width_133;
          reader_kitty_width_133.confidential = true;
          writer_kitty_width_133.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj86.mutable = true;
          sourceObject = obj86;
          sourceObject = obj86;
          sourceObject = obj86;
          superDepth = origSuperDepth;
        }
        obj_init_86.apply(obj86, []);
        return obj86
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func85.paramCounts = [
      3,
    ];
    func85.variableArities = [
      false,
    ];
    obj83.methods["new"] = func85;
    func85.definitionLine = 25;
    func85.definitionModule = "kitty";
    var func134 = function(argcv) {
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
        var obj135 = Grace_allocObject();
        obj135.definitionModule = "kitty";
        obj135.definitionLine = 25;
        var inho135 = inheritingObject;
        while (inho135.superobj) inho135 = inho135.superobj;
        inho135.superobj = obj135;
        obj135.data = inheritingObject.data;
        obj135.outer = this;
        var reader_kitty_outer_136 = function() {
          return this.outer;
        }
        obj135.methods["outer"] = reader_kitty_outer_136;
        function obj_init_135() {
          var origSuperDepth = superDepth;
          superDepth = obj135;
          obj135.annotations = [];
          var func137 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func137.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 40
              var call138 = callmethod(var_ctx,"save", [0]);
              lineNumber = 41
              var call139 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 43
              var prod143 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient145 = callmethod(prod143, "/", [1], new GraceNum(180));
              var call146 = callmethod(var_ctx,"rotate", [1], quotient145);
              lineNumber = 44
              onSelf = true;
              var call147 = callmethod(this, "elements", [0]);
              lineNumber = 47
              var block148 = Grace_allocObject();
              block148.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block148.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block148.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block148.methods["match"] = GraceBlock_match;
              block148.methods["prefix?"] = GraceBlock_lift;
              block148.receiver = this;
              block148.className = 'block<kitty:47>';
              block148.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 45
                onSelf = true;
                var call150 = callmethod(this, "width", [0]);
                var call151 = callmethod(call150,"prefix-", [0]);
                var quotient153 = callmethod(call151, "/", [1], new GraceNum(2));
                onSelf = true;
                var call155 = callmethod(this, "height", [0]);
                var call156 = callmethod(call155,"prefix-", [0]);
                var quotient158 = callmethod(call156, "/", [1], new GraceNum(2));
                onSelf = true;
                var call159 = callmethod(this, "width", [0]);
                onSelf = true;
                var call160 = callmethod(this, "height", [0]);
                var call161 = callmethod(var_ctx,"drawImage", [5], var_element, quotient153, quotient158, call159, call160);
                return call161;
              };
              var call162 = callmethod(Grace_prelude,"for()do", [1, 1], call147, block148);
              lineNumber = 47
              var call163 = callmethod(var_ctx,"restore", [0]);
              return call163
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func137.paramCounts = [
            4,
          ];
          func137.variableArities = [
            false,
          ];
          obj135.methods["draw"] = func137;
          func137.definitionLine = 38;
          func137.definitionModule = "kitty";
          var func164 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func164.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 53
              lineNumber = 52
              onSelf = true;
              var call165 = callmethod(this, "imgTag", [0]);
              return call165
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
          obj135.methods["getTag"] = func164;
          func164.definitionLine = 51;
          func164.definitionModule = "kitty";
          var func166 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              onSelf = true;
              var call167 = callmethod(this, "elements", [0]);
              var call168 = callmethod(call167,"push", [1], var_imgTag__39__);
              return call168
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
          obj135.methods["drawImage"] = func166;
          func166.definitionLine = 55;
          func166.definitionModule = "kitty";
          sourceObject = obj135;
          lineNumber = 29
          var string169 = new GraceString("img");
          var call170 = callmethod(var_dom,"document", [0]);
          var call171 = callmethod(call170,"createElement", [1], string169);
          obj135.data["imgTag"] = call171;
          var reader_kitty_imgTag_172 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_172.def = true;
          reader_kitty_imgTag_172.confidential = true;
          obj135.methods["imgTag"] = reader_kitty_imgTag_172;
          lineNumber = 29;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call171)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj135;
          lineNumber = 32
          lineNumber = 29
          lineNumber = 30
          onSelf = true;
          var call173 = callmethod(this, "imgTag", [0]);
          var call174 = callmethod(call173,"src:=", [1], var_url__39__);
          sourceObject = obj135;
          lineNumber = 32
          var call175 = callmethod(var_collections,"list", [0]);
          var call176 = callmethod(call175,"new", [0]);
          obj135.data["elements"] = call176;
          var reader_kitty_elements_177 = function() {
            return this.data["elements"];
          }
          obj135.methods["elements"] = reader_kitty_elements_177;
          obj135.data["elements"] = call176;
          var writer_kitty_elements_177 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj135.methods["elements:="] = writer_kitty_elements_177;
          reader_kitty_elements_177.confidential = true;
          writer_kitty_elements_177.confidential = true;
          lineNumber = 33;
          moduleName = "kitty";
          lineNumber = 32
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call176)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj135.mutable = true;
          sourceObject = obj135;
          lineNumber = 33
          onSelf = true;
          var call178 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call179 = callmethod(this, "elements", [0]);
          var call180 = callmethod(call179,"push", [1], call178);
          sourceObject = obj135;
          lineNumber = 35
          obj135.data["height"] = var_height__39__;
          var reader_kitty_height_181 = function() {
            return this.data["height"];
          }
          obj135.methods["height"] = reader_kitty_height_181;
          obj135.data["height"] = var_height__39__;
          var writer_kitty_height_181 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj135.methods["height:="] = writer_kitty_height_181;
          reader_kitty_height_181.confidential = true;
          writer_kitty_height_181.confidential = true;
          lineNumber = 36;
          moduleName = "kitty";
          lineNumber = 35
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj135.mutable = true;
          sourceObject = obj135;
          lineNumber = 36
          obj135.data["width"] = var_width__39__;
          var reader_kitty_width_182 = function() {
            return this.data["width"];
          }
          obj135.methods["width"] = reader_kitty_width_182;
          obj135.data["width"] = var_width__39__;
          var writer_kitty_width_182 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj135.methods["width:="] = writer_kitty_width_182;
          reader_kitty_width_182.confidential = true;
          writer_kitty_width_182.confidential = true;
          lineNumber = 38;
          moduleName = "kitty";
          lineNumber = 36
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj135.mutable = true;
          sourceObject = obj135;
          sourceObject = obj135;
          sourceObject = obj135;
          superDepth = origSuperDepth;
        }
        obj_init_135.apply(inheritingObject, []);
        return obj135
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj83.methods["new()object"] = func134;
    var func183 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string184 = new GraceString("class KittyImage");
        return string184
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func183.paramCounts = [
    ];
    func183.variableArities = [
    ];
    obj83.methods["asDebugString"] = func183;
    func183.definitionLine = 25;
    func183.definitionModule = "kitty";
    sourceObject = obj83;
    sourceObject = obj83;
    superDepth = origSuperDepth;
  }
  obj_init_83.apply(obj83, []);
  var var_KittyImage = obj83;
  lineNumber = 62
  lineNumber = 69
  var func185 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func185.paramCounts[0])
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
  func185.paramCounts = [
    0,
  ];
  func185.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func185;
  func185.definitionLine = 69;
  func185.definitionModule = "kitty";
  var obj186 = Grace_allocObject();
  obj186.definitionModule = "kitty";
  obj186.definitionLine = 69;
  obj186.outer = this;
  var reader_kitty_outer_187 = function() {
    return this.outer;
  }
  obj186.methods["outer"] = reader_kitty_outer_187;
  function obj_init_186() {
    var origSuperDepth = superDepth;
    superDepth = obj186;
    obj186.annotations = [];
    var func188 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func188.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj189 = Grace_allocObject();
        obj189.definitionModule = "kitty";
        obj189.definitionLine = 69;
        obj189.outer = this;
        var reader_kitty_outer_190 = function() {
          return this.outer;
        }
        obj189.methods["outer"] = reader_kitty_outer_190;
        function obj_init_189() {
          var origSuperDepth = superDepth;
          superDepth = obj189;
          obj189.annotations = [];
          var func191 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func191.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string192 = new GraceString("realyee.png");
              onSelf = true;
              var call193 = callmethod(this, "createImage", [1], string192);
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
          func191.paramCounts = [
            0,
          ];
          func191.variableArities = [
            false,
          ];
          obj189.methods["awake"] = func191;
          func191.definitionLine = 84;
          func191.definitionModule = "kitty";
          var func194 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func194.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call195 = callmethod(this, "action", [0]);
              var call196 = callmethod(call195,"apply", [0]);
              return call196
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func194.paramCounts = [
            0,
          ];
          func194.variableArities = [
            false,
          ];
          obj189.methods["update"] = func194;
          func194.definitionLine = 89;
          func194.definitionModule = "kitty";
          var func197 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func197.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call200 = callmethod(this, "rotation", [0]);
              var prod202 = callmethod(call200, "*", [1], new GraceNum(3.14159));
              var quotient204 = callmethod(prod202, "/", [1], new GraceNum(180));
              var call205 = callmethod(var_math,"cos", [1], quotient204);
              var prod208 = callmethod(var_distance, "*", [1], call205);
              onSelf = true;
              var call210 = callmethod(this, "posX", [0]);
              var opresult212 = callmethod(call210, "+", [1], prod208);
              onSelf = true;
              var call213 = callmethod(this, "posX:=", [1], opresult212);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call216 = callmethod(this, "rotation", [0]);
              var prod218 = callmethod(call216, "*", [1], new GraceNum(3.14159));
              var quotient220 = callmethod(prod218, "/", [1], new GraceNum(180));
              var call221 = callmethod(var_math,"sin", [1], quotient220);
              var prod224 = callmethod(var_distance, "*", [1], call221);
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
          func197.paramCounts = [
            1,
          ];
          func197.variableArities = [
            false,
          ];
          obj189.methods["move"] = func197;
          func197.definitionLine = 93;
          func197.definitionModule = "kitty";
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
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call233 = callmethod(this, "rotation", [0]);
              var opresult236 = callmethod(new GraceNum(90), "+", [1], call233);
              var prod238 = callmethod(opresult236, "*", [1], new GraceNum(3.14159));
              var quotient240 = callmethod(prod238, "/", [1], new GraceNum(180));
              var call241 = callmethod(var_math,"cos", [1], quotient240);
              var prod244 = callmethod(var_distance, "*", [1], call241);
              onSelf = true;
              var call246 = callmethod(this, "posX", [0]);
              var opresult248 = callmethod(call246, "+", [1], prod244);
              onSelf = true;
              var call249 = callmethod(this, "posX:=", [1], opresult248);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call252 = callmethod(this, "rotation", [0]);
              var opresult255 = callmethod(new GraceNum(90), "+", [1], call252);
              var prod257 = callmethod(opresult255, "*", [1], new GraceNum(3.14159));
              var quotient259 = callmethod(prod257, "/", [1], new GraceNum(180));
              var call260 = callmethod(var_math,"sin", [1], quotient259);
              var prod263 = callmethod(var_distance, "*", [1], call260);
              onSelf = true;
              var call265 = callmethod(this, "posY", [0]);
              var opresult267 = callmethod(call265, "+", [1], prod263);
              onSelf = true;
              var call268 = callmethod(this, "posY:=", [1], opresult267);
              return call268
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
          obj189.methods["strafe"] = func230;
          func230.definitionLine = 98;
          func230.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func269.paramCounts[0])
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
              var call271 = callmethod(this, "rotation", [0]);
              var opresult273 = callmethod(call271, "+", [1], var_angle);
              onSelf = true;
              var call274 = callmethod(this, "rotation:=", [1], opresult273);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func269.paramCounts = [
            1,
          ];
          func269.variableArities = [
            false,
          ];
          obj189.methods["turn"] = func269;
          func269.definitionLine = 103;
          func269.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call276 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call277 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call278 = callmethod(this, "posY", [0]);
              var call279 = callmethod(var_ctx,"translate", [2], call277, call278);
              lineNumber = 110
              onSelf = true;
              var call280 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call281 = callmethod(this, "image", [0]);
              var call282 = callmethod(call281,"draw", [4], var_ctx, var_dx, var_dy, call280);
              lineNumber = 111
              var call283 = callmethod(var_ctx,"restore", [0]);
              return call283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramCounts = [
            3,
          ];
          func275.variableArities = [
            false,
          ];
          obj189.methods["draw"] = func275;
          func275.definitionLine = 107;
          func275.definitionModule = "kitty";
          var func284 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call285 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call286 = callmethod(call285, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call287 = callmethod(call286, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call288 = callmethod(this, "image:=", [1], call287);
              return call288
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
          obj189.methods["createImage"] = func284;
          func284.definitionLine = 114;
          func284.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call290 = callmethod(this, "image:=", [1], var_image__39__);
              return call290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func289.paramTypes = [];
          func289.paramTypes.push([]);
          func289.paramCounts = [
            1,
          ];
          func289.variableArities = [
            false,
          ];
          obj189.methods["setImage"] = func289;
          func289.definitionLine = 118;
          func289.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call292 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func291.variableArities = [
            false,
          ];
          obj189.methods["setAction"] = func291;
          func291.definitionLine = 122;
          func291.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call294 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call295 = callmethod(this, "posY:=", [1], var_y);
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
            2,
          ];
          func293.variableArities = [
            false,
          ];
          obj189.methods["setLocation"] = func293;
          func293.definitionLine = 126;
          func293.definitionModule = "kitty";
          var func296 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func296.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call297 = callmethod(this, "posX", [0]);
              return call297
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
          obj189.methods["getX"] = func296;
          func296.definitionLine = 131;
          func296.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call299 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func298.variableArities = [
            false,
          ];
          obj189.methods["getY"] = func298;
          func298.definitionLine = 135;
          func298.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call301 = callmethod(this, "rotation", [0]);
              return call301
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
          obj189.methods["getRotation"] = func300;
          func300.definitionLine = 139;
          func300.definitionModule = "kitty";
          sourceObject = obj189;
          lineNumber = 73
          obj189.data["tag"] = var_tag__39__;
          var reader_kitty_tag_302 = function() {
            return this.data["tag"];
          }
          obj189.methods["tag"] = reader_kitty_tag_302;
          obj189.data["tag"] = var_tag__39__;
          var writer_kitty_tag_302 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj189.methods["tag:="] = writer_kitty_tag_302;
          reader_kitty_tag_302.confidential = true;
          writer_kitty_tag_302.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj189.mutable = true;
          sourceObject = obj189;
          lineNumber = 74
          obj189.data["posX"] = var_x__39__;
          var reader_kitty_posX_303 = function() {
            return this.data["posX"];
          }
          obj189.methods["posX"] = reader_kitty_posX_303;
          obj189.data["posX"] = var_x__39__;
          var writer_kitty_posX_303 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj189.methods["posX:="] = writer_kitty_posX_303;
          reader_kitty_posX_303.confidential = true;
          writer_kitty_posX_303.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj189.mutable = true;
          sourceObject = obj189;
          lineNumber = 75
          obj189.data["posY"] = var_y__39__;
          var reader_kitty_posY_304 = function() {
            return this.data["posY"];
          }
          obj189.methods["posY"] = reader_kitty_posY_304;
          obj189.data["posY"] = var_y__39__;
          var writer_kitty_posY_304 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj189.methods["posY:="] = writer_kitty_posY_304;
          reader_kitty_posY_304.confidential = true;
          writer_kitty_posY_304.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj189.mutable = true;
          sourceObject = obj189;
          lineNumber = 76
          obj189.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_305 = function() {
            return this.data["rotation"];
          }
          obj189.methods["rotation"] = reader_kitty_rotation_305;
          obj189.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_305 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj189.methods["rotation:="] = writer_kitty_rotation_305;
          reader_kitty_rotation_305.confidential = true;
          writer_kitty_rotation_305.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj189.mutable = true;
          sourceObject = obj189;
          lineNumber = 79
          var block306 = Grace_allocObject();
          block306.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block306.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block306.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block306.methods["match"] = GraceBlock_match;
          block306.methods["prefix?"] = GraceBlock_lift;
          block306.receiver = this;
          block306.className = 'block<kitty:79>';
          block306.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj189.data["action"] = block306;
          var reader_kitty_action_307 = function() {
            return this.data["action"];
          }
          obj189.methods["action"] = reader_kitty_action_307;
          obj189.data["action"] = block306;
          var writer_kitty_action_307 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj189.methods["action:="] = writer_kitty_action_307;
          reader_kitty_action_307.confidential = true;
          writer_kitty_action_307.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block306)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj189.mutable = true;
          sourceObject = obj189;
          obj189.data["image"] = undefined;
          var reader_kitty_image_308 = function() {
            return this.data["image"];
          }
          obj189.methods["image"] = reader_kitty_image_308;
          obj189.data["image"] = undefined;
          var writer_kitty_image_308 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj189.methods["image:="] = writer_kitty_image_308;
          reader_kitty_image_308.confidential = true;
          writer_kitty_image_308.confidential = true;
          obj189.mutable = true;
          sourceObject = obj189;
          lineNumber = 81
          onSelf = true;
          var call309 = callmethod(this, "awake", [0]);
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          sourceObject = obj189;
          superDepth = origSuperDepth;
        }
        obj_init_189.apply(obj189, []);
        return obj189
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func188.paramCounts = [
      3,
    ];
    func188.variableArities = [
      false,
    ];
    obj186.methods["new"] = func188;
    func188.definitionLine = 69;
    func188.definitionModule = "kitty";
    var func310 = function(argcv) {
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
        var obj311 = Grace_allocObject();
        obj311.definitionModule = "kitty";
        obj311.definitionLine = 69;
        var inho311 = inheritingObject;
        while (inho311.superobj) inho311 = inho311.superobj;
        inho311.superobj = obj311;
        obj311.data = inheritingObject.data;
        obj311.outer = this;
        var reader_kitty_outer_312 = function() {
          return this.outer;
        }
        obj311.methods["outer"] = reader_kitty_outer_312;
        function obj_init_311() {
          var origSuperDepth = superDepth;
          superDepth = obj311;
          obj311.annotations = [];
          var func313 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func313.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              var string314 = new GraceString("realyee.png");
              onSelf = true;
              var call315 = callmethod(this, "createImage", [1], string314);
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
          func313.paramCounts = [
            0,
          ];
          func313.variableArities = [
            false,
          ];
          obj311.methods["awake"] = func313;
          func313.definitionLine = 84;
          func313.definitionModule = "kitty";
          var func316 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              onSelf = true;
              var call317 = callmethod(this, "action", [0]);
              var call318 = callmethod(call317,"apply", [0]);
              return call318
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func316.paramCounts = [
            0,
          ];
          func316.variableArities = [
            false,
          ];
          obj311.methods["update"] = func316;
          func316.definitionLine = 89;
          func316.definitionModule = "kitty";
          var func319 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func319.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 90
              lineNumber = 94
              onSelf = true;
              var call322 = callmethod(this, "rotation", [0]);
              var prod324 = callmethod(call322, "*", [1], new GraceNum(3.14159));
              var quotient326 = callmethod(prod324, "/", [1], new GraceNum(180));
              var call327 = callmethod(var_math,"cos", [1], quotient326);
              var prod330 = callmethod(var_distance, "*", [1], call327);
              onSelf = true;
              var call332 = callmethod(this, "posX", [0]);
              var opresult334 = callmethod(call332, "+", [1], prod330);
              onSelf = true;
              var call335 = callmethod(this, "posX:=", [1], opresult334);
              lineNumber = 95
              lineNumber = 90
              lineNumber = 95
              onSelf = true;
              var call338 = callmethod(this, "rotation", [0]);
              var prod340 = callmethod(call338, "*", [1], new GraceNum(3.14159));
              var quotient342 = callmethod(prod340, "/", [1], new GraceNum(180));
              var call343 = callmethod(var_math,"sin", [1], quotient342);
              var prod346 = callmethod(var_distance, "*", [1], call343);
              onSelf = true;
              var call348 = callmethod(this, "posY", [0]);
              var opresult350 = callmethod(call348, "+", [1], prod346);
              onSelf = true;
              var call351 = callmethod(this, "posY:=", [1], opresult350);
              return call351
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func319.paramCounts = [
            1,
          ];
          func319.variableArities = [
            false,
          ];
          obj311.methods["move"] = func319;
          func319.definitionLine = 93;
          func319.definitionModule = "kitty";
          var func352 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func352.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 90
              lineNumber = 99
              onSelf = true;
              var call355 = callmethod(this, "rotation", [0]);
              var opresult358 = callmethod(new GraceNum(90), "+", [1], call355);
              var prod360 = callmethod(opresult358, "*", [1], new GraceNum(3.14159));
              var quotient362 = callmethod(prod360, "/", [1], new GraceNum(180));
              var call363 = callmethod(var_math,"cos", [1], quotient362);
              var prod366 = callmethod(var_distance, "*", [1], call363);
              onSelf = true;
              var call368 = callmethod(this, "posX", [0]);
              var opresult370 = callmethod(call368, "+", [1], prod366);
              onSelf = true;
              var call371 = callmethod(this, "posX:=", [1], opresult370);
              lineNumber = 100
              lineNumber = 90
              lineNumber = 100
              onSelf = true;
              var call374 = callmethod(this, "rotation", [0]);
              var opresult377 = callmethod(new GraceNum(90), "+", [1], call374);
              var prod379 = callmethod(opresult377, "*", [1], new GraceNum(3.14159));
              var quotient381 = callmethod(prod379, "/", [1], new GraceNum(180));
              var call382 = callmethod(var_math,"sin", [1], quotient381);
              var prod385 = callmethod(var_distance, "*", [1], call382);
              onSelf = true;
              var call387 = callmethod(this, "posY", [0]);
              var opresult389 = callmethod(call387, "+", [1], prod385);
              onSelf = true;
              var call390 = callmethod(this, "posY:=", [1], opresult389);
              return call390
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func352.paramCounts = [
            1,
          ];
          func352.variableArities = [
            false,
          ];
          obj311.methods["strafe"] = func352;
          func352.definitionLine = 98;
          func352.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func391.paramCounts[0])
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
              var call393 = callmethod(this, "rotation", [0]);
              var opresult395 = callmethod(call393, "+", [1], var_angle);
              onSelf = true;
              var call396 = callmethod(this, "rotation:=", [1], opresult395);
              return call396
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
          obj311.methods["turn"] = func391;
          func391.definitionLine = 103;
          func391.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              var call398 = callmethod(var_ctx,"save", [0]);
              lineNumber = 109
              onSelf = true;
              var call399 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call400 = callmethod(this, "posY", [0]);
              var call401 = callmethod(var_ctx,"translate", [2], call399, call400);
              lineNumber = 110
              onSelf = true;
              var call402 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call403 = callmethod(this, "image", [0]);
              var call404 = callmethod(call403,"draw", [4], var_ctx, var_dx, var_dy, call402);
              lineNumber = 111
              var call405 = callmethod(var_ctx,"restore", [0]);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func397.paramCounts = [
            3,
          ];
          func397.variableArities = [
            false,
          ];
          obj311.methods["draw"] = func397;
          func397.definitionLine = 107;
          func397.definitionModule = "kitty";
          var func406 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 111
              lineNumber = 115
              var call407 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call408 = callmethod(call407, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call409 = callmethod(call408, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call410 = callmethod(this, "image:=", [1], call409);
              return call410
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
          obj311.methods["createImage"] = func406;
          func406.definitionLine = 114;
          func406.definitionModule = "kitty";
          var func411 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 115
              lineNumber = 119
              onSelf = true;
              var call412 = callmethod(this, "image:=", [1], var_image__39__);
              return call412
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func411.paramTypes = [];
          func411.paramTypes.push([]);
          func411.paramCounts = [
            1,
          ];
          func411.variableArities = [
            false,
          ];
          obj311.methods["setImage"] = func411;
          func411.definitionLine = 118;
          func411.definitionModule = "kitty";
          var func413 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func413.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 115
              lineNumber = 123
              onSelf = true;
              var call414 = callmethod(this, "action:=", [1], var_action__39__);
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
            1,
          ];
          func413.variableArities = [
            false,
          ];
          obj311.methods["setAction"] = func413;
          func413.definitionLine = 122;
          func413.definitionModule = "kitty";
          var func415 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func415.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 115
              lineNumber = 127
              onSelf = true;
              var call416 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 129
              lineNumber = 115
              lineNumber = 128
              onSelf = true;
              var call417 = callmethod(this, "posY:=", [1], var_y);
              return call417
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func415.paramCounts = [
            2,
          ];
          func415.variableArities = [
            false,
          ];
          obj311.methods["setLocation"] = func415;
          func415.definitionLine = 126;
          func415.definitionModule = "kitty";
          var func418 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func418.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call419 = callmethod(this, "posX", [0]);
              return call419
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func418.paramCounts = [
            0,
          ];
          func418.variableArities = [
            false,
          ];
          obj311.methods["getX"] = func418;
          func418.definitionLine = 131;
          func418.definitionModule = "kitty";
          var func420 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func420.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call421 = callmethod(this, "posY", [0]);
              return call421
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func420.paramCounts = [
            0,
          ];
          func420.variableArities = [
            false,
          ];
          obj311.methods["getY"] = func420;
          func420.definitionLine = 135;
          func420.definitionModule = "kitty";
          var func422 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func422.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call423 = callmethod(this, "rotation", [0]);
              return call423
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func422.paramCounts = [
            0,
          ];
          func422.variableArities = [
            false,
          ];
          obj311.methods["getRotation"] = func422;
          func422.definitionLine = 139;
          func422.definitionModule = "kitty";
          sourceObject = obj311;
          lineNumber = 73
          obj311.data["tag"] = var_tag__39__;
          var reader_kitty_tag_424 = function() {
            return this.data["tag"];
          }
          obj311.methods["tag"] = reader_kitty_tag_424;
          obj311.data["tag"] = var_tag__39__;
          var writer_kitty_tag_424 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj311.methods["tag:="] = writer_kitty_tag_424;
          reader_kitty_tag_424.confidential = true;
          writer_kitty_tag_424.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj311.mutable = true;
          sourceObject = obj311;
          lineNumber = 74
          obj311.data["posX"] = var_x__39__;
          var reader_kitty_posX_425 = function() {
            return this.data["posX"];
          }
          obj311.methods["posX"] = reader_kitty_posX_425;
          obj311.data["posX"] = var_x__39__;
          var writer_kitty_posX_425 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj311.methods["posX:="] = writer_kitty_posX_425;
          reader_kitty_posX_425.confidential = true;
          writer_kitty_posX_425.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj311.mutable = true;
          sourceObject = obj311;
          lineNumber = 75
          obj311.data["posY"] = var_y__39__;
          var reader_kitty_posY_426 = function() {
            return this.data["posY"];
          }
          obj311.methods["posY"] = reader_kitty_posY_426;
          obj311.data["posY"] = var_y__39__;
          var writer_kitty_posY_426 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj311.methods["posY:="] = writer_kitty_posY_426;
          reader_kitty_posY_426.confidential = true;
          writer_kitty_posY_426.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj311.mutable = true;
          sourceObject = obj311;
          lineNumber = 76
          obj311.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_427 = function() {
            return this.data["rotation"];
          }
          obj311.methods["rotation"] = reader_kitty_rotation_427;
          obj311.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_427 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj311.methods["rotation:="] = writer_kitty_rotation_427;
          reader_kitty_rotation_427.confidential = true;
          writer_kitty_rotation_427.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj311.mutable = true;
          sourceObject = obj311;
          lineNumber = 79
          var block428 = Grace_allocObject();
          block428.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block428.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block428.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block428.methods["match"] = GraceBlock_match;
          block428.methods["prefix?"] = GraceBlock_lift;
          block428.receiver = this;
          block428.className = 'block<kitty:79>';
          block428.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj311.data["action"] = block428;
          var reader_kitty_action_429 = function() {
            return this.data["action"];
          }
          obj311.methods["action"] = reader_kitty_action_429;
          obj311.data["action"] = block428;
          var writer_kitty_action_429 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj311.methods["action:="] = writer_kitty_action_429;
          reader_kitty_action_429.confidential = true;
          writer_kitty_action_429.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block428)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj311.mutable = true;
          sourceObject = obj311;
          obj311.data["image"] = undefined;
          var reader_kitty_image_430 = function() {
            return this.data["image"];
          }
          obj311.methods["image"] = reader_kitty_image_430;
          obj311.data["image"] = undefined;
          var writer_kitty_image_430 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj311.methods["image:="] = writer_kitty_image_430;
          reader_kitty_image_430.confidential = true;
          writer_kitty_image_430.confidential = true;
          obj311.mutable = true;
          sourceObject = obj311;
          lineNumber = 81
          onSelf = true;
          var call431 = callmethod(this, "awake", [0]);
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          sourceObject = obj311;
          superDepth = origSuperDepth;
        }
        obj_init_311.apply(inheritingObject, []);
        return obj311
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj186.methods["new()object"] = func310;
    var func432 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 69
        var string433 = new GraceString("class KittyEntity");
        return string433
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func432.paramCounts = [
    ];
    func432.variableArities = [
    ];
    obj186.methods["asDebugString"] = func432;
    func432.definitionLine = 69;
    func432.definitionModule = "kitty";
    sourceObject = obj186;
    sourceObject = obj186;
    superDepth = origSuperDepth;
  }
  obj_init_186.apply(obj186, []);
  var var_KittyEntity = obj186;
  lineNumber = 144
  lineNumber = 154
  lineNumber = 158
  lineNumber = 162
  lineNumber = 166
  lineNumber = 174
  lineNumber = 178
  lineNumber = 182
  lineNumber = 186
  lineNumber = 190
  lineNumber = 196
  var func434 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func434.paramCounts[0])
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
  func434.paramCounts = [
    0,
  ];
  func434.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func434;
  func434.definitionLine = 196;
  func434.definitionModule = "kitty";
  var obj435 = Grace_allocObject();
  obj435.definitionModule = "kitty";
  obj435.definitionLine = 196;
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
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj438 = Grace_allocObject();
        obj438.definitionModule = "kitty";
        obj438.definitionLine = 196;
        obj438.outer = this;
        var reader_kitty_outer_439 = function() {
          return this.outer;
        }
        obj438.methods["outer"] = reader_kitty_outer_439;
        function obj_init_438() {
          var origSuperDepth = superDepth;
          superDepth = obj438;
          obj438.annotations = [];
          var func440 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 234
              var if441 = var_done;
              lineNumber = 230
              onSelf = true;
              var call442 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call442)) {
                lineNumber = 232
                lineNumber = 231
                var bool443 = new GraceBoolean(false)
                return bool443
              }
              lineNumber = 235
              lineNumber = 196
              lineNumber = 234
              var call444 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call445 = callmethod(this, "document:=", [1], call444);
              lineNumber = 235
              lineNumber = 234
              lineNumber = 235
              var string446 = new GraceString("standard-canvas");
              onSelf = true;
              var call447 = callmethod(this, "document", [0]);
              var call448 = callmethod(call447,"getElementById", [1], string446);
              onSelf = true;
              var call449 = callmethod(this, "canvas:=", [1], call448);
              lineNumber = 237
              lineNumber = 234
              lineNumber = 236
              onSelf = true;
              var call450 = callmethod(this, "canvas", [0]);
              var call451 = callmethod(call450,"width", [0]);
              onSelf = true;
              var call452 = callmethod(this, "canvasWidth:=", [1], call451);
              lineNumber = 240
              lineNumber = 236
              lineNumber = 237
              onSelf = true;
              var call453 = callmethod(this, "canvas", [0]);
              var call454 = callmethod(call453,"height", [0]);
              onSelf = true;
              var call455 = callmethod(this, "canvasHeight:=", [1], call454);
              lineNumber = 252
              var block456 = Grace_allocObject();
              block456.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block456.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block456.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block456.methods["match"] = GraceBlock_match;
              block456.methods["prefix?"] = GraceBlock_lift;
              block456.receiver = this;
              block456.className = 'block<kitty:252>';
              block456.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 243
                lineNumber = 242
                onSelf = true;
                var call457 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call459 = callmethod(this, "canvas", [0]);
                var call460 = callmethod(call459,"offsetWidth", [0]);
                onSelf = true;
                var call462 = callmethod(this, "canvas", [0]);
                var call463 = callmethod(call462,"offsetLeft", [0]);
                var call465 = callmethod(var_ev,"clientX", [0]);
                var diff467 = callmethod(call465, "-", [1], call463);
                var quotient469 = callmethod(diff467, "/", [1], call460);
                var prod471 = callmethod(quotient469, "*", [1], call457);
                var var_x = prod471;
                lineNumber = 243;
                moduleName = "kitty";
                lineNumber = 242
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 247
                lineNumber = 243
                onSelf = true;
                var call472 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call474 = callmethod(this, "canvas", [0]);
                var call475 = callmethod(call474,"offsetHeight", [0]);
                onSelf = true;
                var call477 = callmethod(this, "canvas", [0]);
                var call478 = callmethod(call477,"offsetTop", [0]);
                var call480 = callmethod(var_ev,"clientY", [0]);
                var diff482 = callmethod(call480, "-", [1], call478);
                var quotient484 = callmethod(diff482, "/", [1], call475);
                var prod486 = callmethod(quotient484, "*", [1], call472);
                var var_y = prod486;
                lineNumber = 247;
                moduleName = "kitty";
                lineNumber = 243
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 251
                var if487 = var_done;
                lineNumber = 247
                var opresult490 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call493 = callmethod(this, "canvasWidth", [0]);
                var diff495 = callmethod(call493, "-", [1], new GraceNum(20));
                var opresult498 = callmethod(var_x, ">", [1], diff495);
                var opresult500 = callmethod(opresult498, "&&", [1], opresult490);
                if (Grace_isTrue(opresult500)) {
                  lineNumber = 248
                  var call501 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 249
                  onSelf = true;
                  var call502 = callmethod(this, "stop", [0]);
                  if487 = call502;
                }
                return if487;
              };
              var_mouseDownListener = block456;
              lineNumber = 252
              var string503 = new GraceString("mousedown");
              onSelf = true;
              var call504 = callmethod(this, "canvas", [0]);
              var call505 = callmethod(call504,"addEventListener", [2], string503, var_mouseDownListener);
              lineNumber = 262
              var block506 = Grace_allocObject();
              block506.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block506.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block506.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block506.methods["match"] = GraceBlock_match;
              block506.methods["prefix?"] = GraceBlock_lift;
              block506.receiver = this;
              block506.className = 'block<kitty:262>';
              block506.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 260
                var if507 = var_done;
                lineNumber = 257
                var call509 = callmethod(var_ev,"keyCode", [0]);
                var opresult511 = callmethod(call509, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult511)) {
                  lineNumber = 258
                  onSelf = true;
                  var call512 = callmethod(this, "stop", [0]);
                  if507 = call512;
                }
                lineNumber = 261
                lineNumber = 257
                lineNumber = 260
                var call513 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call514 = callmethod(this, "currentKeyDown:=", [1], call513);
                return call514;
              };
              var_keyDownListener = block506;
              lineNumber = 262
              var string515 = new GraceString("keydown");
              onSelf = true;
              var call516 = callmethod(this, "document", [0]);
              var call517 = callmethod(call516,"addEventListener", [2], string515, var_keyDownListener);
              lineNumber = 268
              var block518 = Grace_allocObject();
              block518.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block518.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block518.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block518.methods["match"] = GraceBlock_match;
              block518.methods["prefix?"] = GraceBlock_lift;
              block518.receiver = this;
              block518.className = 'block<kitty:268>';
              block518.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 267
                lineNumber = 260
                lineNumber = 267
                lineNumber = 266
                var call519 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call520 = callmethod(this, "currentKeyDown:=", [1], call519);
                return call520;
              };
              var_keyUpListener = block518;
              lineNumber = 268
              var string521 = new GraceString("keyup");
              onSelf = true;
              var call522 = callmethod(this, "document", [0]);
              var call523 = callmethod(call522,"addEventListener", [2], string521, var_keyUpListener);
              lineNumber = 270
              lineNumber = 260
              lineNumber = 270
              var string524 = new GraceString("canvas");
              var call525 = callmethod(var_dom,"document", [0]);
              var call526 = callmethod(call525,"createElement", [1], string524);
              onSelf = true;
              var call527 = callmethod(this, "backingCanvas:=", [1], call526);
              lineNumber = 272
              lineNumber = 270
              lineNumber = 271
              onSelf = true;
              var call528 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call529 = callmethod(this, "backingCanvas", [0]);
              var call530 = callmethod(call529,"height:=", [1], call528);
              lineNumber = 273
              lineNumber = 270
              lineNumber = 272
              onSelf = true;
              var call531 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call532 = callmethod(this, "backingCanvas", [0]);
              var call533 = callmethod(call532,"width:=", [1], call531);
              lineNumber = 273
              lineNumber = 270
              lineNumber = 273
              var string534 = new GraceString("2d");
              onSelf = true;
              var call535 = callmethod(this, "backingCanvas", [0]);
              var call536 = callmethod(call535,"getContext", [1], string534);
              onSelf = true;
              var call537 = callmethod(this, "backingContext:=", [1], call536);
              lineNumber = 274
              lineNumber = 270
              lineNumber = 274
              var string538 = new GraceString("2d");
              onSelf = true;
              var call539 = callmethod(this, "canvas", [0]);
              var call540 = callmethod(call539,"getContext", [1], string538);
              onSelf = true;
              var call541 = callmethod(this, "mctx:=", [1], call540);
              lineNumber = 277
              var string542 = new GraceString("doggo.jpg");
              onSelf = true;
              var call543 = callmethod(this, "setBackground", [1], string542);
              lineNumber = 289
              lineNumber = 270
              lineNumber = 283
              var bool544 = new GraceBoolean(true)
              onSelf = true;
              var call545 = callmethod(this, "isInit:=", [1], bool544);
              return call545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func440.paramCounts = [
            0,
          ];
          func440.variableArities = [
            false,
          ];
          obj438.methods["init"] = func440;
          func440.definitionLine = 226;
          func440.definitionModule = "kitty";
          var func546 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 295
              lineNumber = 270
              lineNumber = 294
              var bool547 = new GraceBoolean(true)
              onSelf = true;
              var call548 = callmethod(this, "isRunning:=", [1], bool547);
              lineNumber = 295
              var block549 = Grace_allocObject();
              block549.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block549.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block549.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block549.methods["match"] = GraceBlock_match;
              block549.methods["prefix?"] = GraceBlock_lift;
              block549.receiver = this;
              block549.className = 'block<kitty:295>';
              block549.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call550 = callmethod(this, "isRunning", [0]);
                return call550;
              };
              lineNumber = 299
              var block551 = Grace_allocObject();
              block551.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block551.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block551.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block551.methods["match"] = GraceBlock_match;
              block551.methods["prefix?"] = GraceBlock_lift;
              block551.receiver = this;
              block551.className = 'block<kitty:299>';
              block551.real = function(
              ) {
                sourceObject = this;
                lineNumber = 296
                onSelf = true;
                var call552 = callmethod(this, "update", [0]);
                return call552;
              };
              lineNumber = 295
              var call553 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block549, new GraceNum(10), block551);
              return call553
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
          obj438.methods["start"] = func546;
          func546.definitionLine = 292;
          func546.definitionModule = "kitty";
          var func554 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func554.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 308
              lineNumber = 270
              lineNumber = 307
              onSelf = true;
              var call555 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call556 = callmethod(this, "mctx", [0]);
              var call557 = callmethod(call556,"fillStyle:=", [1], call555);
              lineNumber = 308
              onSelf = true;
              var call558 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call559 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call560 = callmethod(this, "mctx", [0]);
              var call561 = callmethod(call560,"fillRect", [4], new GraceNum(0), new GraceNum(0), call558, call559);
              lineNumber = 309
              onSelf = true;
              var call562 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call563 = callmethod(this, "mctx", [0]);
              var call564 = callmethod(call563,"drawImage", [3], call562, new GraceNum(0), new GraceNum(0));
              lineNumber = 310
              onSelf = true;
              var call565 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call567 = callmethod(this, "canvasWidth", [0]);
              var quotient569 = callmethod(call567, "/", [1], new GraceNum(2));
              onSelf = true;
              var call571 = callmethod(this, "canvasHeight", [0]);
              var quotient573 = callmethod(call571, "/", [1], new GraceNum(2));
              onSelf = true;
              var call574 = callmethod(this, "background", [0]);
              var call575 = callmethod(call574,"draw", [4], call565, quotient569, quotient573, new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call576 = callmethod(this, "entities", [0]);
              lineNumber = 319
              var block577 = Grace_allocObject();
              block577.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block577.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block577.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block577.methods["match"] = GraceBlock_match;
              block577.methods["prefix?"] = GraceBlock_lift;
              block577.receiver = this;
              block577.className = 'block<kitty:319>';
              block577.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 314
                var call578 = callmethod(var_entity,"update", [0]);
                lineNumber = 315
                onSelf = true;
                var call579 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call581 = callmethod(this, "canvasWidth", [0]);
                var quotient583 = callmethod(call581, "/", [1], new GraceNum(2));
                onSelf = true;
                var call585 = callmethod(this, "canvasHeight", [0]);
                var quotient587 = callmethod(call585, "/", [1], new GraceNum(2));
                var call588 = callmethod(var_entity,"draw", [3], call579, quotient583, quotient587);
                return call588;
              };
              var call589 = callmethod(Grace_prelude,"for()do", [1, 1], call576, block577);
              return call589
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func554.paramCounts = [
            0,
          ];
          func554.variableArities = [
            false,
          ];
          obj438.methods["update"] = func554;
          func554.definitionLine = 302;
          func554.definitionModule = "kitty";
          var func590 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func590.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 322
              var string591 = new GraceString("WORLD STOPPING...");
              var call592 = Grace_print(string591);
              lineNumber = 324
              lineNumber = 314
              lineNumber = 323
              var bool593 = new GraceBoolean(false)
              onSelf = true;
              var call594 = callmethod(this, "isRunning:=", [1], bool593);
              lineNumber = 324
              var string595 = new GraceString("mousedown");
              onSelf = true;
              var call596 = callmethod(this, "canvas", [0]);
              var call597 = callmethod(call596,"removeEventListener", [2], string595, var_mouseDownListener);
              lineNumber = 325
              var string598 = new GraceString("keydown");
              onSelf = true;
              var call599 = callmethod(this, "document", [0]);
              var call600 = callmethod(call599,"removeEventListener", [2], string598, var_keyDownListener);
              lineNumber = 326
              var string601 = new GraceString("keyup");
              onSelf = true;
              var call602 = callmethod(this, "document", [0]);
              var call603 = callmethod(call602,"removeEventListener", [2], string601, var_keyUpListener);
              return call603
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func590.paramCounts = [
            0,
          ];
          func590.variableArities = [
            false,
          ];
          obj438.methods["stop"] = func590;
          func590.definitionLine = 321;
          func590.definitionModule = "kitty";
          var func604 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 331
              lineNumber = 330
              onSelf = true;
              var call605 = callmethod(this, "currentKeyDown", [0]);
              var opresult608 = callmethod(var_key, "==", [1], call605);
              return opresult608
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func604.paramCounts = [
            1,
          ];
          func604.variableArities = [
            false,
          ];
          obj438.methods["isKeyDown"] = func604;
          func604.definitionLine = 329;
          func604.definitionModule = "kitty";
          var func609 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func609.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 334
              lineNumber = 314
              lineNumber = 334
              onSelf = true;
              var call610 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call611 = callmethod(this, "canvasHeight", [0]);
              var call612 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call613 = callmethod(call612, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call614 = callmethod(call613, "Image()width()height", [1, 1, 1], var_url, call610, call611);
              onSelf = true;
              var call615 = callmethod(this, "background:=", [1], call614);
              return call615
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func609.paramCounts = [
            1,
          ];
          func609.variableArities = [
            false,
          ];
          obj438.methods["setBackground"] = func609;
          func609.definitionLine = 333;
          func609.definitionModule = "kitty";
          var func616 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 338
              onSelf = true;
              var call617 = callmethod(this, "entities", [0]);
              var call618 = callmethod(call617,"push", [1], var_e);
              return call618
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func616.paramTypes = [];
          func616.paramTypes.push([]);
          func616.paramCounts = [
            1,
          ];
          func616.variableArities = [
            false,
          ];
          obj438.methods["addEntity"] = func616;
          func616.definitionLine = 337;
          func616.definitionModule = "kitty";
          var func619 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func619.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 343
              lineNumber = 342
              onSelf = true;
              var call620 = callmethod(this, "mctx", [0]);
              return call620
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func619.paramCounts = [
            0,
          ];
          func619.variableArities = [
            false,
          ];
          obj438.methods["getContext"] = func619;
          func619.definitionLine = 341;
          func619.definitionModule = "kitty";
          sourceObject = obj438;
          obj438.data["background"] = undefined;
          var reader_kitty_background_621 = function() {
            return this.data["background"];
          }
          obj438.methods["background"] = reader_kitty_background_621;
          obj438.data["background"] = undefined;
          var writer_kitty_background_621 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj438.methods["background:="] = writer_kitty_background_621;
          reader_kitty_background_621.confidential = true;
          writer_kitty_background_621.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 201
          var string622 = new GraceString("black");
          obj438.data["backgroundColour"] = string622;
          var reader_kitty_backgroundColour_623 = function() {
            return this.data["backgroundColour"];
          }
          obj438.methods["backgroundColour"] = reader_kitty_backgroundColour_623;
          obj438.data["backgroundColour"] = string622;
          var writer_kitty_backgroundColour_623 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj438.methods["backgroundColour:="] = writer_kitty_backgroundColour_623;
          reader_kitty_backgroundColour_623.confidential = true;
          writer_kitty_backgroundColour_623.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string622)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["document"] = undefined;
          var reader_kitty_document_624 = function() {
            return this.data["document"];
          }
          obj438.methods["document"] = reader_kitty_document_624;
          obj438.data["document"] = undefined;
          var writer_kitty_document_624 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj438.methods["document:="] = writer_kitty_document_624;
          reader_kitty_document_624.confidential = true;
          writer_kitty_document_624.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_625 = function() {
            return this.data["backingCanvas"];
          }
          obj438.methods["backingCanvas"] = reader_kitty_backingCanvas_625;
          obj438.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_625 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj438.methods["backingCanvas:="] = writer_kitty_backingCanvas_625;
          reader_kitty_backingCanvas_625.confidential = true;
          writer_kitty_backingCanvas_625.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["backingContext"] = undefined;
          var reader_kitty_backingContext_626 = function() {
            return this.data["backingContext"];
          }
          obj438.methods["backingContext"] = reader_kitty_backingContext_626;
          obj438.data["backingContext"] = undefined;
          var writer_kitty_backingContext_626 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj438.methods["backingContext:="] = writer_kitty_backingContext_626;
          reader_kitty_backingContext_626.confidential = true;
          writer_kitty_backingContext_626.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["canvas"] = undefined;
          var reader_kitty_canvas_627 = function() {
            return this.data["canvas"];
          }
          obj438.methods["canvas"] = reader_kitty_canvas_627;
          obj438.data["canvas"] = undefined;
          var writer_kitty_canvas_627 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj438.methods["canvas:="] = writer_kitty_canvas_627;
          reader_kitty_canvas_627.confidential = true;
          writer_kitty_canvas_627.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_628 = function() {
            return this.data["canvasWidth"];
          }
          obj438.methods["canvasWidth"] = reader_kitty_canvasWidth_628;
          obj438.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_628 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj438.methods["canvasWidth:="] = writer_kitty_canvasWidth_628;
          reader_kitty_canvasWidth_628.confidential = true;
          writer_kitty_canvasWidth_628.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_629 = function() {
            return this.data["canvasHeight"];
          }
          obj438.methods["canvasHeight"] = reader_kitty_canvasHeight_629;
          obj438.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_629 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj438.methods["canvasHeight:="] = writer_kitty_canvasHeight_629;
          reader_kitty_canvasHeight_629.confidential = true;
          writer_kitty_canvasHeight_629.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 212
          var call630 = callmethod(var_collections,"list", [0]);
          var call631 = callmethod(call630,"new", [0]);
          obj438.data["entities"] = call631;
          var reader_kitty_entities_632 = function() {
            return this.data["entities"];
          }
          obj438.methods["entities"] = reader_kitty_entities_632;
          obj438.data["entities"] = call631;
          var writer_kitty_entities_632 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj438.methods["entities:="] = writer_kitty_entities_632;
          reader_kitty_entities_632.confidential = true;
          writer_kitty_entities_632.confidential = true;
          lineNumber = 214;
          moduleName = "kitty";
          lineNumber = 212
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 214
          var bool633 = new GraceBoolean(false)
          obj438.data["isInit"] = bool633;
          var reader_kitty_isInit_634 = function() {
            return this.data["isInit"];
          }
          obj438.methods["isInit"] = reader_kitty_isInit_634;
          obj438.data["isInit"] = bool633;
          var writer_kitty_isInit_634 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj438.methods["isInit:="] = writer_kitty_isInit_634;
          reader_kitty_isInit_634.confidential = true;
          writer_kitty_isInit_634.confidential = true;
          lineNumber = 215;
          moduleName = "kitty";
          lineNumber = 214
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool633)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 215
          var bool635 = new GraceBoolean(false)
          obj438.data["isRunning"] = bool635;
          var reader_kitty_isRunning_636 = function() {
            return this.data["isRunning"];
          }
          obj438.methods["isRunning"] = reader_kitty_isRunning_636;
          obj438.data["isRunning"] = bool635;
          var writer_kitty_isRunning_636 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj438.methods["isRunning:="] = writer_kitty_isRunning_636;
          reader_kitty_isRunning_636.confidential = true;
          writer_kitty_isRunning_636.confidential = true;
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool635)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["mctx"] = undefined;
          var reader_kitty_mctx_637 = function() {
            return this.data["mctx"];
          }
          obj438.methods["mctx"] = reader_kitty_mctx_637;
          obj438.data["mctx"] = undefined;
          var writer_kitty_mctx_637 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj438.methods["mctx:="] = writer_kitty_mctx_637;
          reader_kitty_mctx_637.confidential = true;
          writer_kitty_mctx_637.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 221
          lineNumber = 219
          var call638 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj438.data["currentKeyDown"] = call638;
          var reader_kitty_currentKeyDown_639 = function() {
            return this.data["currentKeyDown"];
          }
          obj438.methods["currentKeyDown"] = reader_kitty_currentKeyDown_639;
          obj438.data["currentKeyDown"] = call638;
          var writer_kitty_currentKeyDown_639 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj438.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_639;
          reader_kitty_currentKeyDown_639.confidential = true;
          writer_kitty_currentKeyDown_639.confidential = true;
          lineNumber = 221;
          moduleName = "kitty";
          lineNumber = 219
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call638)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj438.mutable = true;
          sourceObject = obj438;
          obj438.data["ent"] = undefined;
          var reader_kitty_ent_640 = function() {
            return this.data["ent"];
          }
          obj438.methods["ent"] = reader_kitty_ent_640;
          obj438.data["ent"] = undefined;
          var writer_kitty_ent_640 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj438.methods["ent:="] = writer_kitty_ent_640;
          reader_kitty_ent_640.confidential = true;
          writer_kitty_ent_640.confidential = true;
          obj438.mutable = true;
          sourceObject = obj438;
          lineNumber = 223
          onSelf = true;
          var call641 = callmethod(this, "init", [0]);
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          sourceObject = obj438;
          superDepth = origSuperDepth;
        }
        obj_init_438.apply(obj438, []);
        return obj438
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
    obj435.methods["new"] = func437;
    func437.definitionLine = 196;
    func437.definitionModule = "kitty";
    var func642 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj643 = Grace_allocObject();
        obj643.definitionModule = "kitty";
        obj643.definitionLine = 196;
        var inho643 = inheritingObject;
        while (inho643.superobj) inho643 = inho643.superobj;
        inho643.superobj = obj643;
        obj643.data = inheritingObject.data;
        obj643.outer = this;
        var reader_kitty_outer_644 = function() {
          return this.outer;
        }
        obj643.methods["outer"] = reader_kitty_outer_644;
        function obj_init_643() {
          var origSuperDepth = superDepth;
          superDepth = obj643;
          obj643.annotations = [];
          var func645 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 234
              var if646 = var_done;
              lineNumber = 230
              onSelf = true;
              var call647 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call647)) {
                lineNumber = 232
                lineNumber = 231
                var bool648 = new GraceBoolean(false)
                return bool648
              }
              lineNumber = 235
              lineNumber = 212
              lineNumber = 234
              var call649 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call650 = callmethod(this, "document:=", [1], call649);
              lineNumber = 235
              lineNumber = 234
              lineNumber = 235
              var string651 = new GraceString("standard-canvas");
              onSelf = true;
              var call652 = callmethod(this, "document", [0]);
              var call653 = callmethod(call652,"getElementById", [1], string651);
              onSelf = true;
              var call654 = callmethod(this, "canvas:=", [1], call653);
              lineNumber = 237
              lineNumber = 234
              lineNumber = 236
              onSelf = true;
              var call655 = callmethod(this, "canvas", [0]);
              var call656 = callmethod(call655,"width", [0]);
              onSelf = true;
              var call657 = callmethod(this, "canvasWidth:=", [1], call656);
              lineNumber = 240
              lineNumber = 236
              lineNumber = 237
              onSelf = true;
              var call658 = callmethod(this, "canvas", [0]);
              var call659 = callmethod(call658,"height", [0]);
              onSelf = true;
              var call660 = callmethod(this, "canvasHeight:=", [1], call659);
              lineNumber = 252
              var block661 = Grace_allocObject();
              block661.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block661.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block661.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block661.methods["match"] = GraceBlock_match;
              block661.methods["prefix?"] = GraceBlock_lift;
              block661.receiver = this;
              block661.className = 'block<kitty:252>';
              block661.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 243
                lineNumber = 242
                onSelf = true;
                var call662 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call664 = callmethod(this, "canvas", [0]);
                var call665 = callmethod(call664,"offsetWidth", [0]);
                onSelf = true;
                var call667 = callmethod(this, "canvas", [0]);
                var call668 = callmethod(call667,"offsetLeft", [0]);
                var call670 = callmethod(var_ev,"clientX", [0]);
                var diff672 = callmethod(call670, "-", [1], call668);
                var quotient674 = callmethod(diff672, "/", [1], call665);
                var prod676 = callmethod(quotient674, "*", [1], call662);
                var var_x = prod676;
                lineNumber = 243;
                moduleName = "kitty";
                lineNumber = 242
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 247
                lineNumber = 243
                onSelf = true;
                var call677 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call679 = callmethod(this, "canvas", [0]);
                var call680 = callmethod(call679,"offsetHeight", [0]);
                onSelf = true;
                var call682 = callmethod(this, "canvas", [0]);
                var call683 = callmethod(call682,"offsetTop", [0]);
                var call685 = callmethod(var_ev,"clientY", [0]);
                var diff687 = callmethod(call685, "-", [1], call683);
                var quotient689 = callmethod(diff687, "/", [1], call680);
                var prod691 = callmethod(quotient689, "*", [1], call677);
                var var_y = prod691;
                lineNumber = 247;
                moduleName = "kitty";
                lineNumber = 243
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 251
                var if692 = var_done;
                lineNumber = 247
                var opresult695 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call698 = callmethod(this, "canvasWidth", [0]);
                var diff700 = callmethod(call698, "-", [1], new GraceNum(20));
                var opresult703 = callmethod(var_x, ">", [1], diff700);
                var opresult705 = callmethod(opresult703, "&&", [1], opresult695);
                if (Grace_isTrue(opresult705)) {
                  lineNumber = 248
                  var call706 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 249
                  onSelf = true;
                  var call707 = callmethod(this, "stop", [0]);
                  if692 = call707;
                }
                return if692;
              };
              var_mouseDownListener = block661;
              lineNumber = 252
              var string708 = new GraceString("mousedown");
              onSelf = true;
              var call709 = callmethod(this, "canvas", [0]);
              var call710 = callmethod(call709,"addEventListener", [2], string708, var_mouseDownListener);
              lineNumber = 262
              var block711 = Grace_allocObject();
              block711.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block711.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block711.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block711.methods["match"] = GraceBlock_match;
              block711.methods["prefix?"] = GraceBlock_lift;
              block711.receiver = this;
              block711.className = 'block<kitty:262>';
              block711.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 260
                var if712 = var_done;
                lineNumber = 257
                var call714 = callmethod(var_ev,"keyCode", [0]);
                var opresult716 = callmethod(call714, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult716)) {
                  lineNumber = 258
                  onSelf = true;
                  var call717 = callmethod(this, "stop", [0]);
                  if712 = call717;
                }
                lineNumber = 261
                lineNumber = 257
                lineNumber = 260
                var call718 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call719 = callmethod(this, "currentKeyDown:=", [1], call718);
                return call719;
              };
              var_keyDownListener = block711;
              lineNumber = 262
              var string720 = new GraceString("keydown");
              onSelf = true;
              var call721 = callmethod(this, "document", [0]);
              var call722 = callmethod(call721,"addEventListener", [2], string720, var_keyDownListener);
              lineNumber = 268
              var block723 = Grace_allocObject();
              block723.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block723.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block723.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block723.methods["match"] = GraceBlock_match;
              block723.methods["prefix?"] = GraceBlock_lift;
              block723.receiver = this;
              block723.className = 'block<kitty:268>';
              block723.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 267
                lineNumber = 260
                lineNumber = 267
                lineNumber = 266
                var call724 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call725 = callmethod(this, "currentKeyDown:=", [1], call724);
                return call725;
              };
              var_keyUpListener = block723;
              lineNumber = 268
              var string726 = new GraceString("keyup");
              onSelf = true;
              var call727 = callmethod(this, "document", [0]);
              var call728 = callmethod(call727,"addEventListener", [2], string726, var_keyUpListener);
              lineNumber = 270
              lineNumber = 260
              lineNumber = 270
              var string729 = new GraceString("canvas");
              var call730 = callmethod(var_dom,"document", [0]);
              var call731 = callmethod(call730,"createElement", [1], string729);
              onSelf = true;
              var call732 = callmethod(this, "backingCanvas:=", [1], call731);
              lineNumber = 272
              lineNumber = 270
              lineNumber = 271
              onSelf = true;
              var call733 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call734 = callmethod(this, "backingCanvas", [0]);
              var call735 = callmethod(call734,"height:=", [1], call733);
              lineNumber = 273
              lineNumber = 270
              lineNumber = 272
              onSelf = true;
              var call736 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call737 = callmethod(this, "backingCanvas", [0]);
              var call738 = callmethod(call737,"width:=", [1], call736);
              lineNumber = 273
              lineNumber = 270
              lineNumber = 273
              var string739 = new GraceString("2d");
              onSelf = true;
              var call740 = callmethod(this, "backingCanvas", [0]);
              var call741 = callmethod(call740,"getContext", [1], string739);
              onSelf = true;
              var call742 = callmethod(this, "backingContext:=", [1], call741);
              lineNumber = 274
              lineNumber = 270
              lineNumber = 274
              var string743 = new GraceString("2d");
              onSelf = true;
              var call744 = callmethod(this, "canvas", [0]);
              var call745 = callmethod(call744,"getContext", [1], string743);
              onSelf = true;
              var call746 = callmethod(this, "mctx:=", [1], call745);
              lineNumber = 277
              var string747 = new GraceString("doggo.jpg");
              onSelf = true;
              var call748 = callmethod(this, "setBackground", [1], string747);
              lineNumber = 289
              lineNumber = 270
              lineNumber = 283
              var bool749 = new GraceBoolean(true)
              onSelf = true;
              var call750 = callmethod(this, "isInit:=", [1], bool749);
              return call750
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
          obj643.methods["init"] = func645;
          func645.definitionLine = 226;
          func645.definitionModule = "kitty";
          var func751 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func751.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 295
              lineNumber = 270
              lineNumber = 294
              var bool752 = new GraceBoolean(true)
              onSelf = true;
              var call753 = callmethod(this, "isRunning:=", [1], bool752);
              lineNumber = 295
              var block754 = Grace_allocObject();
              block754.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block754.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block754.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block754.methods["match"] = GraceBlock_match;
              block754.methods["prefix?"] = GraceBlock_lift;
              block754.receiver = this;
              block754.className = 'block<kitty:295>';
              block754.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call755 = callmethod(this, "isRunning", [0]);
                return call755;
              };
              lineNumber = 299
              var block756 = Grace_allocObject();
              block756.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block756.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block756.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block756.methods["match"] = GraceBlock_match;
              block756.methods["prefix?"] = GraceBlock_lift;
              block756.receiver = this;
              block756.className = 'block<kitty:299>';
              block756.real = function(
              ) {
                sourceObject = this;
                lineNumber = 296
                onSelf = true;
                var call757 = callmethod(this, "update", [0]);
                return call757;
              };
              lineNumber = 295
              var call758 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block754, new GraceNum(10), block756);
              return call758
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
          obj643.methods["start"] = func751;
          func751.definitionLine = 292;
          func751.definitionModule = "kitty";
          var func759 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func759.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 308
              lineNumber = 270
              lineNumber = 307
              onSelf = true;
              var call760 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call761 = callmethod(this, "mctx", [0]);
              var call762 = callmethod(call761,"fillStyle:=", [1], call760);
              lineNumber = 308
              onSelf = true;
              var call763 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call764 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call765 = callmethod(this, "mctx", [0]);
              var call766 = callmethod(call765,"fillRect", [4], new GraceNum(0), new GraceNum(0), call763, call764);
              lineNumber = 309
              onSelf = true;
              var call767 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call768 = callmethod(this, "mctx", [0]);
              var call769 = callmethod(call768,"drawImage", [3], call767, new GraceNum(0), new GraceNum(0));
              lineNumber = 310
              onSelf = true;
              var call770 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call772 = callmethod(this, "canvasWidth", [0]);
              var quotient774 = callmethod(call772, "/", [1], new GraceNum(2));
              onSelf = true;
              var call776 = callmethod(this, "canvasHeight", [0]);
              var quotient778 = callmethod(call776, "/", [1], new GraceNum(2));
              onSelf = true;
              var call779 = callmethod(this, "background", [0]);
              var call780 = callmethod(call779,"draw", [4], call770, quotient774, quotient778, new GraceNum(0));
              lineNumber = 313
              onSelf = true;
              var call781 = callmethod(this, "entities", [0]);
              lineNumber = 319
              var block782 = Grace_allocObject();
              block782.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block782.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block782.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block782.methods["match"] = GraceBlock_match;
              block782.methods["prefix?"] = GraceBlock_lift;
              block782.receiver = this;
              block782.className = 'block<kitty:319>';
              block782.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 314
                var call783 = callmethod(var_entity,"update", [0]);
                lineNumber = 315
                onSelf = true;
                var call784 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call786 = callmethod(this, "canvasWidth", [0]);
                var quotient788 = callmethod(call786, "/", [1], new GraceNum(2));
                onSelf = true;
                var call790 = callmethod(this, "canvasHeight", [0]);
                var quotient792 = callmethod(call790, "/", [1], new GraceNum(2));
                var call793 = callmethod(var_entity,"draw", [3], call784, quotient788, quotient792);
                return call793;
              };
              var call794 = callmethod(Grace_prelude,"for()do", [1, 1], call781, block782);
              return call794
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func759.paramCounts = [
            0,
          ];
          func759.variableArities = [
            false,
          ];
          obj643.methods["update"] = func759;
          func759.definitionLine = 302;
          func759.definitionModule = "kitty";
          var func795 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func795.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 322
              var string796 = new GraceString("WORLD STOPPING...");
              var call797 = Grace_print(string796);
              lineNumber = 324
              lineNumber = 314
              lineNumber = 323
              var bool798 = new GraceBoolean(false)
              onSelf = true;
              var call799 = callmethod(this, "isRunning:=", [1], bool798);
              lineNumber = 324
              var string800 = new GraceString("mousedown");
              onSelf = true;
              var call801 = callmethod(this, "canvas", [0]);
              var call802 = callmethod(call801,"removeEventListener", [2], string800, var_mouseDownListener);
              lineNumber = 325
              var string803 = new GraceString("keydown");
              onSelf = true;
              var call804 = callmethod(this, "document", [0]);
              var call805 = callmethod(call804,"removeEventListener", [2], string803, var_keyDownListener);
              lineNumber = 326
              var string806 = new GraceString("keyup");
              onSelf = true;
              var call807 = callmethod(this, "document", [0]);
              var call808 = callmethod(call807,"removeEventListener", [2], string806, var_keyUpListener);
              return call808
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func795.paramCounts = [
            0,
          ];
          func795.variableArities = [
            false,
          ];
          obj643.methods["stop"] = func795;
          func795.definitionLine = 321;
          func795.definitionModule = "kitty";
          var func809 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func809.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 331
              lineNumber = 330
              onSelf = true;
              var call810 = callmethod(this, "currentKeyDown", [0]);
              var opresult813 = callmethod(var_key, "==", [1], call810);
              return opresult813
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func809.paramCounts = [
            1,
          ];
          func809.variableArities = [
            false,
          ];
          obj643.methods["isKeyDown"] = func809;
          func809.definitionLine = 329;
          func809.definitionModule = "kitty";
          var func814 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func814.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 334
              lineNumber = 314
              lineNumber = 334
              onSelf = true;
              var call815 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call816 = callmethod(this, "canvasHeight", [0]);
              var call817 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call818 = callmethod(call817, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call819 = callmethod(call818, "Image()width()height", [1, 1, 1], var_url, call815, call816);
              onSelf = true;
              var call820 = callmethod(this, "background:=", [1], call819);
              return call820
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func814.paramCounts = [
            1,
          ];
          func814.variableArities = [
            false,
          ];
          obj643.methods["setBackground"] = func814;
          func814.definitionLine = 333;
          func814.definitionModule = "kitty";
          var func821 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func821.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 338
              onSelf = true;
              var call822 = callmethod(this, "entities", [0]);
              var call823 = callmethod(call822,"push", [1], var_e);
              return call823
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func821.paramTypes = [];
          func821.paramTypes.push([]);
          func821.paramCounts = [
            1,
          ];
          func821.variableArities = [
            false,
          ];
          obj643.methods["addEntity"] = func821;
          func821.definitionLine = 337;
          func821.definitionModule = "kitty";
          var func824 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func824.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 343
              lineNumber = 342
              onSelf = true;
              var call825 = callmethod(this, "mctx", [0]);
              return call825
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func824.paramCounts = [
            0,
          ];
          func824.variableArities = [
            false,
          ];
          obj643.methods["getContext"] = func824;
          func824.definitionLine = 341;
          func824.definitionModule = "kitty";
          sourceObject = obj643;
          obj643.data["background"] = undefined;
          var reader_kitty_background_826 = function() {
            return this.data["background"];
          }
          obj643.methods["background"] = reader_kitty_background_826;
          obj643.data["background"] = undefined;
          var writer_kitty_background_826 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj643.methods["background:="] = writer_kitty_background_826;
          reader_kitty_background_826.confidential = true;
          writer_kitty_background_826.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 201
          var string827 = new GraceString("black");
          obj643.data["backgroundColour"] = string827;
          var reader_kitty_backgroundColour_828 = function() {
            return this.data["backgroundColour"];
          }
          obj643.methods["backgroundColour"] = reader_kitty_backgroundColour_828;
          obj643.data["backgroundColour"] = string827;
          var writer_kitty_backgroundColour_828 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj643.methods["backgroundColour:="] = writer_kitty_backgroundColour_828;
          reader_kitty_backgroundColour_828.confidential = true;
          writer_kitty_backgroundColour_828.confidential = true;
          lineNumber = 203;
          moduleName = "kitty";
          lineNumber = 201
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string827)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["document"] = undefined;
          var reader_kitty_document_829 = function() {
            return this.data["document"];
          }
          obj643.methods["document"] = reader_kitty_document_829;
          obj643.data["document"] = undefined;
          var writer_kitty_document_829 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj643.methods["document:="] = writer_kitty_document_829;
          reader_kitty_document_829.confidential = true;
          writer_kitty_document_829.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_830 = function() {
            return this.data["backingCanvas"];
          }
          obj643.methods["backingCanvas"] = reader_kitty_backingCanvas_830;
          obj643.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_830 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj643.methods["backingCanvas:="] = writer_kitty_backingCanvas_830;
          reader_kitty_backingCanvas_830.confidential = true;
          writer_kitty_backingCanvas_830.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["backingContext"] = undefined;
          var reader_kitty_backingContext_831 = function() {
            return this.data["backingContext"];
          }
          obj643.methods["backingContext"] = reader_kitty_backingContext_831;
          obj643.data["backingContext"] = undefined;
          var writer_kitty_backingContext_831 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj643.methods["backingContext:="] = writer_kitty_backingContext_831;
          reader_kitty_backingContext_831.confidential = true;
          writer_kitty_backingContext_831.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["canvas"] = undefined;
          var reader_kitty_canvas_832 = function() {
            return this.data["canvas"];
          }
          obj643.methods["canvas"] = reader_kitty_canvas_832;
          obj643.data["canvas"] = undefined;
          var writer_kitty_canvas_832 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj643.methods["canvas:="] = writer_kitty_canvas_832;
          reader_kitty_canvas_832.confidential = true;
          writer_kitty_canvas_832.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_833 = function() {
            return this.data["canvasWidth"];
          }
          obj643.methods["canvasWidth"] = reader_kitty_canvasWidth_833;
          obj643.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_833 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj643.methods["canvasWidth:="] = writer_kitty_canvasWidth_833;
          reader_kitty_canvasWidth_833.confidential = true;
          writer_kitty_canvasWidth_833.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_834 = function() {
            return this.data["canvasHeight"];
          }
          obj643.methods["canvasHeight"] = reader_kitty_canvasHeight_834;
          obj643.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_834 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj643.methods["canvasHeight:="] = writer_kitty_canvasHeight_834;
          reader_kitty_canvasHeight_834.confidential = true;
          writer_kitty_canvasHeight_834.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 212
          var call835 = callmethod(var_collections,"list", [0]);
          var call836 = callmethod(call835,"new", [0]);
          obj643.data["entities"] = call836;
          var reader_kitty_entities_837 = function() {
            return this.data["entities"];
          }
          obj643.methods["entities"] = reader_kitty_entities_837;
          obj643.data["entities"] = call836;
          var writer_kitty_entities_837 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj643.methods["entities:="] = writer_kitty_entities_837;
          reader_kitty_entities_837.confidential = true;
          writer_kitty_entities_837.confidential = true;
          lineNumber = 214;
          moduleName = "kitty";
          lineNumber = 212
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call836)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 214
          var bool838 = new GraceBoolean(false)
          obj643.data["isInit"] = bool838;
          var reader_kitty_isInit_839 = function() {
            return this.data["isInit"];
          }
          obj643.methods["isInit"] = reader_kitty_isInit_839;
          obj643.data["isInit"] = bool838;
          var writer_kitty_isInit_839 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj643.methods["isInit:="] = writer_kitty_isInit_839;
          reader_kitty_isInit_839.confidential = true;
          writer_kitty_isInit_839.confidential = true;
          lineNumber = 215;
          moduleName = "kitty";
          lineNumber = 214
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool838)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 215
          var bool840 = new GraceBoolean(false)
          obj643.data["isRunning"] = bool840;
          var reader_kitty_isRunning_841 = function() {
            return this.data["isRunning"];
          }
          obj643.methods["isRunning"] = reader_kitty_isRunning_841;
          obj643.data["isRunning"] = bool840;
          var writer_kitty_isRunning_841 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj643.methods["isRunning:="] = writer_kitty_isRunning_841;
          reader_kitty_isRunning_841.confidential = true;
          writer_kitty_isRunning_841.confidential = true;
          lineNumber = 217;
          moduleName = "kitty";
          lineNumber = 215
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool840)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["mctx"] = undefined;
          var reader_kitty_mctx_842 = function() {
            return this.data["mctx"];
          }
          obj643.methods["mctx"] = reader_kitty_mctx_842;
          obj643.data["mctx"] = undefined;
          var writer_kitty_mctx_842 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj643.methods["mctx:="] = writer_kitty_mctx_842;
          reader_kitty_mctx_842.confidential = true;
          writer_kitty_mctx_842.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 221
          lineNumber = 219
          var call843 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj643.data["currentKeyDown"] = call843;
          var reader_kitty_currentKeyDown_844 = function() {
            return this.data["currentKeyDown"];
          }
          obj643.methods["currentKeyDown"] = reader_kitty_currentKeyDown_844;
          obj643.data["currentKeyDown"] = call843;
          var writer_kitty_currentKeyDown_844 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj643.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_844;
          reader_kitty_currentKeyDown_844.confidential = true;
          writer_kitty_currentKeyDown_844.confidential = true;
          lineNumber = 221;
          moduleName = "kitty";
          lineNumber = 219
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call843)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj643.mutable = true;
          sourceObject = obj643;
          obj643.data["ent"] = undefined;
          var reader_kitty_ent_845 = function() {
            return this.data["ent"];
          }
          obj643.methods["ent"] = reader_kitty_ent_845;
          obj643.data["ent"] = undefined;
          var writer_kitty_ent_845 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj643.methods["ent:="] = writer_kitty_ent_845;
          reader_kitty_ent_845.confidential = true;
          writer_kitty_ent_845.confidential = true;
          obj643.mutable = true;
          sourceObject = obj643;
          lineNumber = 223
          onSelf = true;
          var call846 = callmethod(this, "init", [0]);
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          sourceObject = obj643;
          superDepth = origSuperDepth;
        }
        obj_init_643.apply(inheritingObject, []);
        return obj643
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj435.methods["new()object"] = func642;
    var func847 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 196
        var string848 = new GraceString("class KittyWorld");
        return string848
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func847.paramCounts = [
    ];
    func847.variableArities = [
    ];
    obj435.methods["asDebugString"] = func847;
    func847.definitionLine = 196;
    func847.definitionModule = "kitty";
    sourceObject = obj435;
    sourceObject = obj435;
    superDepth = origSuperDepth;
  }
  obj_init_435.apply(obj435, []);
  var var_KittyWorld = obj435;
  lineNumber = 347
  lineNumber = 356
  lineNumber = 371
  lineNumber = 376
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Image()width()height:\n getTag\n elements\n width\n draw\n height:=\n drawImage\n elements:=\n imgTag\n width:=\n height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n newborn\n newborn:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y()actions\n update\n move\n strafe\n turn\n setImage\n createImage\n setX\n getX\n getY\n KittyWorld\n World\n startWorld\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n getTag\n elements\n width\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\nconstructors-of:KittyImage:\n new\nfresh:World:\n entities:=\n isRunning\n ent:=\n document\n isKeyDown\n backingContext\n mctx\n backgroundColour:=\n canvasHeight:=\n canvasWidth:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas\n setBackground\n isRunning:=\n document:=\n update\n canvas:=\n entities\n addEntity\n ent\n backingContext:=\n init\n canvasHeight\n getContext\n currentKeyDown:=\n canvasWidth\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\nfresh:Entity()x()y()actions:\n image\n strafe\n awake\n setAction\n getRotation\n tag:=\n update\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\nmethods-of:KittyWorld.new:\n entities:=\n isRunning\n ent:=\n document\n isKeyDown\n init\n mctx\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\n backingCanvas\n setBackground\n isRunning:=\n document:=\n update\n canvasWidth:=\n entities\n addEntity\n ent\n backingContext:=\n backingContext\n canvasHeight\n getContext\n currentKeyDown:=\n canvasWidth\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y()actions\n World\nmodules:\n mgcollections\n StandardPrelude\nmethods-of:KittyEntity.new:\n image\n strafe\n awake\n setAction\n getRotation\n tag:=\n update\n action:=\n createImage\n getX\n getY\n tag\n action\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n draw\n setImage\n rotation\n move\n image:=\n";
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
    "        { setLocation(10, -200) }.apply",
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
    "    ",
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
