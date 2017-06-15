function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 84
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
      lineNumber = 85
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 85;
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
        lineNumber = 86
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
  func0.definitionLine = 84;
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
      obj5.definitionLine = 85;
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
  lineNumber = 227
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
      lineNumber = 228
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 228;
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
        lineNumber = 229
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
  func8.definitionLine = 227;
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
      obj13.definitionLine = 228;
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
  lineNumber = 239
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
      lineNumber = 240
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
  func16.definitionLine = 239;
  func16.definitionModule = "kitty";
  lineNumber = 244
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
      lineNumber = 245
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
  func18.definitionLine = 244;
  func18.definitionModule = "kitty";
  lineNumber = 248
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
      lineNumber = 250
      lineNumber = 249
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
  func20.definitionLine = 248;
  func20.definitionModule = "kitty";
  lineNumber = 253
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
      lineNumber = 254
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
  func24.definitionLine = 253;
  func24.definitionModule = "kitty";
  lineNumber = 257
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
      lineNumber = 258
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
  func26.definitionLine = 257;
  func26.definitionModule = "kitty";
  lineNumber = 261
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
      lineNumber = 262
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
  func28.definitionLine = 261;
  func28.definitionModule = "kitty";
  lineNumber = 265
  var func30 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseExit)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 266
      var call31 = callmethod(var_kitten,"setMouseExitAction", [1], var_action__39__);
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
  this.methods["onMouseExit"] = func30;
  func30.definitionLine = 265;
  func30.definitionModule = "kitty";
  lineNumber = 450
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
      lineNumber = 451
      var obj33 = Grace_allocObject();
      obj33.definitionModule = "kitty";
      obj33.definitionLine = 451;
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
        lineNumber = 452
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
  func32.definitionLine = 450;
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
      obj37.definitionLine = 451;
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
  lineNumber = 459
  var func40 = function(argcv) {
    var curarg = 1;
    var var_point = arguments[curarg];
    curarg++;
    var var_vs = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointInPolygon)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 464
      lineNumber = 463
      var call41 = callmethod(var_point,"x", [0]);
      var var_x = call41;
      lineNumber = 464;
      moduleName = "kitty";
      lineNumber = 463
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 467
      lineNumber = 464
      var call42 = callmethod(var_point,"y", [0]);
      var var_y = call42;
      lineNumber = 467;
      moduleName = "kitty";
      lineNumber = 464
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 469
      lineNumber = 467
      var call43 = callmethod(var_vs,"size", [0]);
      var var_j = call43;
      lineNumber = 469;
      moduleName = "kitty";
      lineNumber = 467
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 471
      lineNumber = 469
      var bool44 = new GraceBoolean(false)
      var var_inside = bool44;
      lineNumber = 471;
      moduleName = "kitty";
      lineNumber = 469
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 471
      var call45 = callmethod(var_vs,"size", [0]);
      var opresult48 = callmethod(new GraceNum(1), "..", [1], call45);
      lineNumber = 487
      var block49 = Grace_allocObject();
      block49.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block49.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block49.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block49.methods["match"] = GraceBlock_match;
      block49.methods["prefix?"] = GraceBlock_lift;
      block49.receiver = this;
      block49.className = 'block<kitty:487>';
      block49.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 474
        lineNumber = 473
        var call50 = callmethod(var_vs,"at", [1], var_i);
        var call51 = callmethod(call50,"x", [0]);
        var var_xi = call51;
        lineNumber = 474;
        moduleName = "kitty";
        lineNumber = 473
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 475
        lineNumber = 474
        var call52 = callmethod(var_vs,"at", [1], var_i);
        var call53 = callmethod(call52,"y", [0]);
        var var_yi = call53;
        lineNumber = 475;
        moduleName = "kitty";
        lineNumber = 474
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 476
        lineNumber = 475
        var call54 = callmethod(var_vs,"at", [1], var_j);
        var call55 = callmethod(call54,"x", [0]);
        var var_xj = call55;
        lineNumber = 476;
        moduleName = "kitty";
        lineNumber = 475
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 480
        lineNumber = 476
        var call56 = callmethod(var_vs,"at", [1], var_j);
        var call57 = callmethod(call56,"y", [0]);
        var var_yj = call57;
        lineNumber = 480;
        moduleName = "kitty";
        lineNumber = 476
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 481
        lineNumber = 480
        var diff61 = callmethod(var_yj, "-", [1], var_yi);
        var diff65 = callmethod(var_y, "-", [1], var_yi);
        var diff69 = callmethod(var_xj, "-", [1], var_xi);
        var prod71 = callmethod(diff69, "*", [1], diff65);
        var quotient73 = callmethod(prod71, "/", [1], diff61);
        var opresult75 = callmethod(quotient73, "+", [1], var_xi);
        var opresult78 = callmethod(var_x, "<", [1], opresult75);
        var opresult82 = callmethod(var_yj, ">", [1], var_y);
        var opresult86 = callmethod(var_yi, ">", [1], var_y);
        var opresult88 = callmethod(opresult86, "!=", [1], opresult82);
        var opresult90 = callmethod(opresult88, "&&", [1], opresult78);
        var var_intersect = opresult90;
        lineNumber = 481;
        moduleName = "kitty";
        lineNumber = 480
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 484
        var if91 = var_done;
        lineNumber = 481
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 483
          lineNumber = 482
          var call92 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call92;
          if91 = call92;
        }
        lineNumber = 486
        lineNumber = 484
        var_j = var_i;
        return var_i;
      };
      var call93 = callmethod(Grace_prelude,"for()do", [1, 1], opresult48, block49);
      lineNumber = 488
      lineNumber = 487
      return var_inside
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func40.paramCounts = [
    2,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["pointInPolygon"] = func40;
  func40.definitionLine = 459;
  func40.definitionModule = "kitty";
  lineNumber = 493
  var func94 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func94.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 495
      var string95 = new GraceString("CHECKING...");
      var call96 = Grace_print(string95);
      lineNumber = 502
      var if97 = var_done;
      lineNumber = 497
      var call98 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call98)) {
        lineNumber = 498
        var string99 = new GraceString("NO WORLD!!");
        var call100 = Grace_print(string99);
        lineNumber = 500
        return var_done
      }
      lineNumber = 502
      var string101 = new GraceString("STARTING...");
      var call102 = Grace_print(string101);
      lineNumber = 505
      var call103 = callmethod(var_m__95__world,"start", [0]);
      return call103
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
  this.methods["start"] = func94;
  func94.definitionLine = 493;
  func94.definitionModule = "kitty";
  lineNumber = 508
  var func104 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func104.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 509
      var call105 = callmethod(var_m__95__world,"stop", [0]);
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
  this.methods["stop"] = func104;
  func104.definitionLine = 508;
  func104.definitionModule = "kitty";
  lineNumber = 512
  var func106 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func106.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 514
      lineNumber = 513
      var_m__95__world = var_world__39__;
      lineNumber = 515
      lineNumber = 514
      var bool107 = new GraceBoolean(true)
      var_worldSet = bool107;
      return bool107
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func106.paramTypes = [];
  func106.paramTypes.push([]);
  func106.paramCounts = [
    1,
  ];
  func106.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func106;
  func106.definitionLine = 512;
  func106.definitionModule = "kitty";
  lineNumber = 517
  var func108 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 518
      onSelf = true;
      var call109 = callmethod(this, "start", [0]);
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
    1,
  ];
  func108.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func108;
  func108.definitionLine = 517;
  func108.definitionModule = "kitty";
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
  var call110 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call110;
  this.data = call110.data;
  this._value = call110._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 509
  var func111 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func111.paramCounts[0])
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
  func111.paramCounts = [
    0,
  ];
  func111.variableArities = [
    false,
  ];
  this.methods["m_world"] = func111;
  func111.definitionLine = 509;
  func111.definitionModule = "kitty";
  lineNumber = 509
  var func112 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func112.paramCounts[0])
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
  func112.paramCounts = [
    1,
  ];
  func112.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func112;
  func112.definitionLine = 509;
  func112.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool113 = new GraceBoolean(false)
  var var_worldSet = bool113;
  lineNumber = 509
  var func114 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func114.paramCounts[0])
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
  func114.paramCounts = [
    0,
  ];
  func114.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func114;
  func114.definitionLine = 509;
  func114.definitionModule = "kitty";
  lineNumber = 509
  var func115 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func115.paramCounts[0])
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
  func115.paramCounts = [
    1,
  ];
  func115.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func115;
  func115.definitionLine = 509;
  func115.definitionModule = "kitty";
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
  lineNumber = 509
  var func116 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func116.paramCounts[0])
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
  func116.paramCounts = [
    0,
  ];
  func116.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func116;
  func116.definitionLine = 509;
  func116.definitionModule = "kitty";
  lineNumber = 509
  var func117 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func117.paramCounts[0])
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
  func117.paramCounts = [
    1,
  ];
  func117.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func117;
  func117.definitionLine = 509;
  func117.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 509
  var func118 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func118.paramCounts[0])
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
  func118.paramCounts = [
    0,
  ];
  func118.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func118;
  func118.definitionLine = 509;
  func118.definitionModule = "kitty";
  lineNumber = 509
  var func119 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func119.paramCounts[0])
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
  func119.paramCounts = [
    1,
  ];
  func119.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func119;
  func119.definitionLine = 509;
  func119.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 509
  var func120 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func120.paramCounts[0])
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
  func120.paramCounts = [
    0,
  ];
  func120.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func120;
  func120.definitionLine = 509;
  func120.definitionModule = "kitty";
  lineNumber = 509
  var func121 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func121.paramCounts[0])
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
  func121.paramCounts = [
    1,
  ];
  func121.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func121;
  func121.definitionLine = 509;
  func121.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseMoveListener;
  lineNumber = 509
  var func122 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func122.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 15
      return var_mouseMoveListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func122.paramCounts = [
    0,
  ];
  func122.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func122;
  func122.definitionLine = 509;
  func122.definitionModule = "kitty";
  lineNumber = 509
  var func123 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func123.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseMoveListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func123.paramCounts = [
    1,
  ];
  func123.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func123;
  func123.definitionLine = 509;
  func123.definitionModule = "kitty";
  lineNumber = 19
  lineNumber = 16
  var call124 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call124;
  lineNumber = 509
  var func125 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func125.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 16
      return var_currentKeyDown
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func125.paramCounts = [
    0,
  ];
  func125.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func125;
  func125.definitionLine = 509;
  func125.definitionModule = "kitty";
  lineNumber = 509
  var func126 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func126.paramCounts[0])
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
  func126.paramCounts = [
    1,
  ];
  func126.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func126;
  func126.definitionLine = 509;
  func126.definitionModule = "kitty";
  lineNumber = 19;
  moduleName = "kitty";
  lineNumber = 16
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_currentKeyDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'currentKeyDown' to be of type Unknown"))
  lineNumber = 19
  lineNumber = 22
  lineNumber = 19
  var call127 = callmethod(var_dom,"window", [0]);
  var call128 = callmethod(call127,"Math", [0]);
  var var_math = call128;
  var func129 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func129.paramCounts[0])
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
  func129.paramCounts = [
    0,
  ];
  func129.variableArities = [
    false,
  ];
  this.methods["math"] = func129;
  func129.definitionLine = 19;
  func129.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 19
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  lineNumber = 25
  var var_kitten;
  lineNumber = 19
  var func130 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func130.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 22
      return var_kitten
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func130.paramCounts = [
    0,
  ];
  func130.variableArities = [
    false,
  ];
  this.methods["kitten"] = func130;
  func130.definitionLine = 19;
  func130.definitionModule = "kitty";
  lineNumber = 19
  var func131 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func131.paramCounts[0])
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
  func131.paramCounts = [
    1,
  ];
  func131.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func131;
  func131.definitionLine = 19;
  func131.definitionModule = "kitty";
  lineNumber = 25
  var func132 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func132.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Point)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_Point
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func132.paramCounts = [
    0,
  ];
  func132.variableArities = [
    false,
  ];
  this.methods["Point"] = func132;
  func132.definitionLine = 25;
  func132.definitionModule = "kitty";
  var obj133 = Grace_allocObject();
  obj133.definitionModule = "kitty";
  obj133.definitionLine = 25;
  obj133.outer = this;
  var reader_kitty_outer_134 = function() {
    return this.outer;
  }
  obj133.methods["outer"] = reader_kitty_outer_134;
  function obj_init_133() {
    var origSuperDepth = superDepth;
    superDepth = obj133;
    obj133.annotations = [];
    var func135 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func135.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func135.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj136 = Grace_allocObject();
        obj136.definitionModule = "kitty";
        obj136.definitionLine = 25;
        obj136.outer = this;
        var reader_kitty_outer_137 = function() {
          return this.outer;
        }
        obj136.methods["outer"] = reader_kitty_outer_137;
        function obj_init_136() {
          var origSuperDepth = superDepth;
          superDepth = obj136;
          obj136.annotations = [];
          var func138 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func138.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              onSelf = true;
              var call140 = callmethod(this, "x", [0]);
              var diff142 = callmethod(call140, "-", [1], var_dx);
              onSelf = true;
              var call143 = callmethod(this, "y", [0]);
              var call144 = callmethod(var_Point,"x()sy", [1, 1], diff142, call143);
              return call144
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
          obj136.methods["left"] = func138;
          func138.definitionLine = 28;
          func138.definitionModule = "kitty";
          var func145 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func145.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              onSelf = true;
              var call147 = callmethod(this, "x", [0]);
              var opresult149 = callmethod(call147, "+", [1], var_dx);
              onSelf = true;
              var call150 = callmethod(this, "y", [0]);
              var call151 = callmethod(var_Point,"x()y", [1, 1], opresult149, call150);
              return call151
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
          obj136.methods["right"] = func145;
          func145.definitionLine = 29;
          func145.definitionModule = "kitty";
          var func152 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func152.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call153 = callmethod(this, "x", [0]);
              onSelf = true;
              var call155 = callmethod(this, "y", [0]);
              var diff157 = callmethod(call155, "-", [1], var_dy);
              var call158 = callmethod(var_Point,"x()y", [1, 1], call153, diff157);
              return call158
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
          obj136.methods["up"] = func152;
          func152.definitionLine = 30;
          func152.definitionModule = "kitty";
          var func159 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call160 = callmethod(this, "x", [0]);
              onSelf = true;
              var call162 = callmethod(this, "y", [0]);
              var opresult164 = callmethod(call162, "+", [1], var_dy);
              var call165 = callmethod(var_Point,"x()y", [1, 1], call160, opresult164);
              return call165
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
          obj136.methods["down"] = func159;
          func159.definitionLine = 31;
          func159.definitionModule = "kitty";
          sourceObject = obj136;
          lineNumber = 26
          obj136.data["x"] = var_x__39__;
          var reader_kitty_x_166 = function() {
            return this.data["x"];
          }
          reader_kitty_x_166.def = true;
          obj136.methods["x"] = reader_kitty_x_166;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj136;
          lineNumber = 27
          obj136.data["y"] = var_y__39__;
          var reader_kitty_y_167 = function() {
            return this.data["y"];
          }
          reader_kitty_y_167.def = true;
          obj136.methods["y"] = reader_kitty_y_167;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj136;
          sourceObject = obj136;
          sourceObject = obj136;
          sourceObject = obj136;
          superDepth = origSuperDepth;
        }
        obj_init_136.apply(obj136, []);
        return obj136
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func135.paramCounts = [
      1,
      1,
    ];
    func135.variableArities = [
      false,
      false,
    ];
    obj133.methods["x()y"] = func135;
    func135.definitionLine = 25;
    func135.definitionModule = "kitty";
    var func168 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj169 = Grace_allocObject();
        obj169.definitionModule = "kitty";
        obj169.definitionLine = 25;
        var inho169 = inheritingObject;
        while (inho169.superobj) inho169 = inho169.superobj;
        inho169.superobj = obj169;
        obj169.data = inheritingObject.data;
        obj169.outer = this;
        var reader_kitty_outer_170 = function() {
          return this.outer;
        }
        obj169.methods["outer"] = reader_kitty_outer_170;
        function obj_init_169() {
          var origSuperDepth = superDepth;
          superDepth = obj169;
          obj169.annotations = [];
          var func171 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func171.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              onSelf = true;
              var call173 = callmethod(this, "x", [0]);
              var diff175 = callmethod(call173, "-", [1], var_dx);
              onSelf = true;
              var call176 = callmethod(this, "y", [0]);
              var call177 = callmethod(var_Point,"x()sy", [1, 1], diff175, call176);
              return call177
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
          obj169.methods["left"] = func171;
          func171.definitionLine = 28;
          func171.definitionModule = "kitty";
          var func178 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func178.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              onSelf = true;
              var call180 = callmethod(this, "x", [0]);
              var opresult182 = callmethod(call180, "+", [1], var_dx);
              onSelf = true;
              var call183 = callmethod(this, "y", [0]);
              var call184 = callmethod(var_Point,"x()y", [1, 1], opresult182, call183);
              return call184
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
          obj169.methods["right"] = func178;
          func178.definitionLine = 29;
          func178.definitionModule = "kitty";
          var func185 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func185.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call186 = callmethod(this, "x", [0]);
              onSelf = true;
              var call188 = callmethod(this, "y", [0]);
              var diff190 = callmethod(call188, "-", [1], var_dy);
              var call191 = callmethod(var_Point,"x()y", [1, 1], call186, diff190);
              return call191
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func185.paramCounts = [
            1,
          ];
          func185.variableArities = [
            false,
          ];
          obj169.methods["up"] = func185;
          func185.definitionLine = 30;
          func185.definitionModule = "kitty";
          var func192 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call193 = callmethod(this, "x", [0]);
              onSelf = true;
              var call195 = callmethod(this, "y", [0]);
              var opresult197 = callmethod(call195, "+", [1], var_dy);
              var call198 = callmethod(var_Point,"x()y", [1, 1], call193, opresult197);
              return call198
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func192.paramCounts = [
            1,
          ];
          func192.variableArities = [
            false,
          ];
          obj169.methods["down"] = func192;
          func192.definitionLine = 31;
          func192.definitionModule = "kitty";
          sourceObject = obj169;
          lineNumber = 26
          obj169.data["x"] = var_x__39__;
          var reader_kitty_x_199 = function() {
            return this.data["x"];
          }
          reader_kitty_x_199.def = true;
          obj169.methods["x"] = reader_kitty_x_199;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj169;
          lineNumber = 27
          obj169.data["y"] = var_y__39__;
          var reader_kitty_y_200 = function() {
            return this.data["y"];
          }
          reader_kitty_y_200.def = true;
          obj169.methods["y"] = reader_kitty_y_200;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj169;
          sourceObject = obj169;
          sourceObject = obj169;
          sourceObject = obj169;
          superDepth = origSuperDepth;
        }
        obj_init_169.apply(inheritingObject, []);
        return obj169
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj133.methods["x()y()object"] = func168;
    var func201 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string202 = new GraceString("class Point");
        return string202
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func201.paramCounts = [
    ];
    func201.variableArities = [
    ];
    obj133.methods["asDebugString"] = func201;
    func201.definitionLine = 25;
    func201.definitionModule = "kitty";
    sourceObject = obj133;
    sourceObject = obj133;
    superDepth = origSuperDepth;
  }
  obj_init_133.apply(obj133, []);
  var var_Point = obj133;
  lineNumber = 34
  var obj203 = Grace_allocObject();
  obj203.definitionModule = "kitty";
  obj203.definitionLine = 34;
  obj203.outer = this;
  var reader_kitty_outer_204 = function() {
    return this.outer;
  }
  obj203.methods["outer"] = reader_kitty_outer_204;
  function obj_init_203() {
    var origSuperDepth = superDepth;
    superDepth = obj203;
    obj203.annotations = [];
    var func205 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func205.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 37
        onSelf = true;
        var call206 = callmethod(this, "position", [0]);
        var call207 = callmethod(call206,"x", [0]);
        return call207
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func205.paramCounts = [
      0,
    ];
    func205.variableArities = [
      false,
    ];
    obj203.methods["x"] = func205;
    func205.definitionLine = 36;
    func205.definitionModule = "kitty";
    var func208 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func208.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 40
        onSelf = true;
        var call209 = callmethod(this, "position", [0]);
        var call210 = callmethod(call209,"y", [0]);
        return call210
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func208.paramCounts = [
      0,
    ];
    func208.variableArities = [
      false,
    ];
    obj203.methods["y"] = func208;
    func208.definitionLine = 39;
    func208.definitionModule = "kitty";
    var func211 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func211.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 43
        onSelf = true;
        var call212 = callmethod(this, "position", [0]);
        return call212
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func211.paramCounts = [
      0,
    ];
    func211.variableArities = [
      false,
    ];
    obj203.methods["location"] = func211;
    func211.definitionLine = 42;
    func211.definitionModule = "kitty";
    sourceObject = obj203;
    lineNumber = 35
    var call213 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj203.data["position"] = call213;
    var reader_kitty_position_214 = function() {
      return this.data["position"];
    }
    obj203.methods["position"] = reader_kitty_position_214;
    obj203.data["position"] = call213;
    var writer_kitty_position_214 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj203.methods["position:="] = writer_kitty_position_214;
    lineNumber = 35;
    moduleName = "kitty";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call213)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj203.mutable = true;
    sourceObject = obj203;
    sourceObject = obj203;
    sourceObject = obj203;
    superDepth = origSuperDepth;
  }
  obj_init_203.apply(obj203, []);
  var var_mouse = obj203;
  lineNumber = 40
  var func215 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func215.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 34
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func215.paramCounts = [
    0,
  ];
  func215.variableArities = [
    false,
  ];
  this.methods["mouse"] = func215;
  func215.definitionLine = 40;
  func215.definitionModule = "kitty";
  lineNumber = 34;
  moduleName = "kitty";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 48
  var func216 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func216.paramCounts[0])
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
  func216.paramCounts = [
    0,
  ];
  func216.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func216;
  func216.definitionLine = 48;
  func216.definitionModule = "kitty";
  var obj217 = Grace_allocObject();
  obj217.definitionModule = "kitty";
  obj217.definitionLine = 48;
  obj217.outer = this;
  var reader_kitty_outer_218 = function() {
    return this.outer;
  }
  obj217.methods["outer"] = reader_kitty_outer_218;
  function obj_init_217() {
    var origSuperDepth = superDepth;
    superDepth = obj217;
    obj217.annotations = [];
    var func219 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func219.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj220 = Grace_allocObject();
        obj220.definitionModule = "kitty";
        obj220.definitionLine = 48;
        obj220.outer = this;
        var reader_kitty_outer_221 = function() {
          return this.outer;
        }
        obj220.methods["outer"] = reader_kitty_outer_221;
        function obj_init_220() {
          var origSuperDepth = superDepth;
          superDepth = obj220;
          obj220.annotations = [];
          var func222 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func222.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 63
              var call223 = callmethod(var_ctx,"save", [0]);
              lineNumber = 64
              var call224 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 65
              var prod228 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient230 = callmethod(prod228, "/", [1], new GraceNum(180));
              var call231 = callmethod(var_ctx,"rotate", [1], quotient230);
              lineNumber = 66
              onSelf = true;
              var call232 = callmethod(this, "elements", [0]);
              lineNumber = 69
              var block233 = Grace_allocObject();
              block233.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block233.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block233.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block233.methods["match"] = GraceBlock_match;
              block233.methods["prefix?"] = GraceBlock_lift;
              block233.receiver = this;
              block233.className = 'block<kitty:69>';
              block233.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 67
                onSelf = true;
                var call235 = callmethod(this, "width", [0]);
                var call236 = callmethod(call235,"prefix-", [0]);
                var quotient238 = callmethod(call236, "/", [1], new GraceNum(2));
                onSelf = true;
                var call240 = callmethod(this, "height", [0]);
                var call241 = callmethod(call240,"prefix-", [0]);
                var quotient243 = callmethod(call241, "/", [1], new GraceNum(2));
                onSelf = true;
                var call244 = callmethod(this, "width", [0]);
                onSelf = true;
                var call245 = callmethod(this, "height", [0]);
                var call246 = callmethod(var_ctx,"drawImage", [5], var_element, quotient238, quotient243, call244, call245);
                return call246;
              };
              var call247 = callmethod(Grace_prelude,"for()do", [1, 1], call232, block233);
              lineNumber = 69
              var call248 = callmethod(var_ctx,"restore", [0]);
              return call248
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func222.paramCounts = [
            4,
          ];
          func222.variableArities = [
            false,
          ];
          obj220.methods["draw"] = func222;
          func222.definitionLine = 61;
          func222.definitionModule = "kitty";
          var func249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 74
              onSelf = true;
              var call250 = callmethod(this, "imgTag", [0]);
              return call250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func249.paramCounts = [
            0,
          ];
          func249.variableArities = [
            false,
          ];
          obj220.methods["getTag"] = func249;
          func249.definitionLine = 73;
          func249.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
              onSelf = true;
              var call252 = callmethod(this, "elements", [0]);
              var call253 = callmethod(call252,"push", [1], var_imgTag__39__);
              return call253
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func251.paramCounts = [
            1,
          ];
          func251.variableArities = [
            false,
          ];
          obj220.methods["drawImage"] = func251;
          func251.definitionLine = 77;
          func251.definitionModule = "kitty";
          sourceObject = obj220;
          lineNumber = 52
          var string254 = new GraceString("img");
          var call255 = callmethod(var_dom,"document", [0]);
          var call256 = callmethod(call255,"createElement", [1], string254);
          obj220.data["imgTag"] = call256;
          var reader_kitty_imgTag_257 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_257.def = true;
          reader_kitty_imgTag_257.confidential = true;
          obj220.methods["imgTag"] = reader_kitty_imgTag_257;
          lineNumber = 52;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call256)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj220;
          lineNumber = 55
          lineNumber = 52
          lineNumber = 53
          onSelf = true;
          var call258 = callmethod(this, "imgTag", [0]);
          var call259 = callmethod(call258,"src:=", [1], var_url__39__);
          sourceObject = obj220;
          lineNumber = 55
          var call260 = callmethod(var_collections,"list", [0]);
          var call261 = callmethod(call260,"new", [0]);
          obj220.data["elements"] = call261;
          var reader_kitty_elements_262 = function() {
            return this.data["elements"];
          }
          obj220.methods["elements"] = reader_kitty_elements_262;
          obj220.data["elements"] = call261;
          var writer_kitty_elements_262 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj220.methods["elements:="] = writer_kitty_elements_262;
          reader_kitty_elements_262.confidential = true;
          writer_kitty_elements_262.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call261)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj220.mutable = true;
          sourceObject = obj220;
          lineNumber = 56
          onSelf = true;
          var call263 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call264 = callmethod(this, "elements", [0]);
          var call265 = callmethod(call264,"push", [1], call263);
          sourceObject = obj220;
          lineNumber = 58
          obj220.data["height"] = var_height__39__;
          var reader_kitty_height_266 = function() {
            return this.data["height"];
          }
          obj220.methods["height"] = reader_kitty_height_266;
          obj220.data["height"] = var_height__39__;
          var writer_kitty_height_266 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj220.methods["height:="] = writer_kitty_height_266;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj220.mutable = true;
          sourceObject = obj220;
          lineNumber = 59
          obj220.data["width"] = var_width__39__;
          var reader_kitty_width_267 = function() {
            return this.data["width"];
          }
          obj220.methods["width"] = reader_kitty_width_267;
          obj220.data["width"] = var_width__39__;
          var writer_kitty_width_267 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj220.methods["width:="] = writer_kitty_width_267;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj220.mutable = true;
          sourceObject = obj220;
          sourceObject = obj220;
          sourceObject = obj220;
          superDepth = origSuperDepth;
        }
        obj_init_220.apply(obj220, []);
        return obj220
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func219.paramCounts = [
      3,
    ];
    func219.variableArities = [
      false,
    ];
    obj217.methods["new"] = func219;
    func219.definitionLine = 48;
    func219.definitionModule = "kitty";
    var func268 = function(argcv) {
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
        var obj269 = Grace_allocObject();
        obj269.definitionModule = "kitty";
        obj269.definitionLine = 48;
        var inho269 = inheritingObject;
        while (inho269.superobj) inho269 = inho269.superobj;
        inho269.superobj = obj269;
        obj269.data = inheritingObject.data;
        obj269.outer = this;
        var reader_kitty_outer_270 = function() {
          return this.outer;
        }
        obj269.methods["outer"] = reader_kitty_outer_270;
        function obj_init_269() {
          var origSuperDepth = superDepth;
          superDepth = obj269;
          obj269.annotations = [];
          var func271 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 63
              var call272 = callmethod(var_ctx,"save", [0]);
              lineNumber = 64
              var call273 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 65
              var prod277 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient279 = callmethod(prod277, "/", [1], new GraceNum(180));
              var call280 = callmethod(var_ctx,"rotate", [1], quotient279);
              lineNumber = 66
              onSelf = true;
              var call281 = callmethod(this, "elements", [0]);
              lineNumber = 69
              var block282 = Grace_allocObject();
              block282.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block282.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block282.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block282.methods["match"] = GraceBlock_match;
              block282.methods["prefix?"] = GraceBlock_lift;
              block282.receiver = this;
              block282.className = 'block<kitty:69>';
              block282.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 67
                onSelf = true;
                var call284 = callmethod(this, "width", [0]);
                var call285 = callmethod(call284,"prefix-", [0]);
                var quotient287 = callmethod(call285, "/", [1], new GraceNum(2));
                onSelf = true;
                var call289 = callmethod(this, "height", [0]);
                var call290 = callmethod(call289,"prefix-", [0]);
                var quotient292 = callmethod(call290, "/", [1], new GraceNum(2));
                onSelf = true;
                var call293 = callmethod(this, "width", [0]);
                onSelf = true;
                var call294 = callmethod(this, "height", [0]);
                var call295 = callmethod(var_ctx,"drawImage", [5], var_element, quotient287, quotient292, call293, call294);
                return call295;
              };
              var call296 = callmethod(Grace_prelude,"for()do", [1, 1], call281, block282);
              lineNumber = 69
              var call297 = callmethod(var_ctx,"restore", [0]);
              return call297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func271.paramCounts = [
            4,
          ];
          func271.variableArities = [
            false,
          ];
          obj269.methods["draw"] = func271;
          func271.definitionLine = 61;
          func271.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 74
              onSelf = true;
              var call299 = callmethod(this, "imgTag", [0]);
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
          obj269.methods["getTag"] = func298;
          func298.definitionLine = 73;
          func298.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
              onSelf = true;
              var call301 = callmethod(this, "elements", [0]);
              var call302 = callmethod(call301,"push", [1], var_imgTag__39__);
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
            1,
          ];
          func300.variableArities = [
            false,
          ];
          obj269.methods["drawImage"] = func300;
          func300.definitionLine = 77;
          func300.definitionModule = "kitty";
          sourceObject = obj269;
          lineNumber = 52
          var string303 = new GraceString("img");
          var call304 = callmethod(var_dom,"document", [0]);
          var call305 = callmethod(call304,"createElement", [1], string303);
          obj269.data["imgTag"] = call305;
          var reader_kitty_imgTag_306 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_306.def = true;
          reader_kitty_imgTag_306.confidential = true;
          obj269.methods["imgTag"] = reader_kitty_imgTag_306;
          lineNumber = 52;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call305)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj269;
          lineNumber = 55
          lineNumber = 52
          lineNumber = 53
          onSelf = true;
          var call307 = callmethod(this, "imgTag", [0]);
          var call308 = callmethod(call307,"src:=", [1], var_url__39__);
          sourceObject = obj269;
          lineNumber = 55
          var call309 = callmethod(var_collections,"list", [0]);
          var call310 = callmethod(call309,"new", [0]);
          obj269.data["elements"] = call310;
          var reader_kitty_elements_311 = function() {
            return this.data["elements"];
          }
          obj269.methods["elements"] = reader_kitty_elements_311;
          obj269.data["elements"] = call310;
          var writer_kitty_elements_311 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj269.methods["elements:="] = writer_kitty_elements_311;
          reader_kitty_elements_311.confidential = true;
          writer_kitty_elements_311.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call310)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj269.mutable = true;
          sourceObject = obj269;
          lineNumber = 56
          onSelf = true;
          var call312 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call313 = callmethod(this, "elements", [0]);
          var call314 = callmethod(call313,"push", [1], call312);
          sourceObject = obj269;
          lineNumber = 58
          obj269.data["height"] = var_height__39__;
          var reader_kitty_height_315 = function() {
            return this.data["height"];
          }
          obj269.methods["height"] = reader_kitty_height_315;
          obj269.data["height"] = var_height__39__;
          var writer_kitty_height_315 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj269.methods["height:="] = writer_kitty_height_315;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj269.mutable = true;
          sourceObject = obj269;
          lineNumber = 59
          obj269.data["width"] = var_width__39__;
          var reader_kitty_width_316 = function() {
            return this.data["width"];
          }
          obj269.methods["width"] = reader_kitty_width_316;
          obj269.data["width"] = var_width__39__;
          var writer_kitty_width_316 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj269.methods["width:="] = writer_kitty_width_316;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj269.mutable = true;
          sourceObject = obj269;
          sourceObject = obj269;
          sourceObject = obj269;
          superDepth = origSuperDepth;
        }
        obj_init_269.apply(inheritingObject, []);
        return obj269
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj217.methods["new()object"] = func268;
    var func317 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 48
        var string318 = new GraceString("class KittyImage");
        return string318
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func317.paramCounts = [
    ];
    func317.variableArities = [
    ];
    obj217.methods["asDebugString"] = func317;
    func317.definitionLine = 48;
    func317.definitionModule = "kitty";
    sourceObject = obj217;
    sourceObject = obj217;
    superDepth = origSuperDepth;
  }
  obj_init_217.apply(obj217, []);
  var var_KittyImage = obj217;
  lineNumber = 84
  lineNumber = 91
  var func319 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func319.paramCounts[0])
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
  func319.paramCounts = [
    0,
  ];
  func319.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func319;
  func319.definitionLine = 91;
  func319.definitionModule = "kitty";
  var obj320 = Grace_allocObject();
  obj320.definitionModule = "kitty";
  obj320.definitionLine = 91;
  obj320.outer = this;
  var reader_kitty_outer_321 = function() {
    return this.outer;
  }
  obj320.methods["outer"] = reader_kitty_outer_321;
  function obj_init_320() {
    var origSuperDepth = superDepth;
    superDepth = obj320;
    obj320.annotations = [];
    var func322 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func322.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj323 = Grace_allocObject();
        obj323.definitionModule = "kitty";
        obj323.definitionLine = 91;
        obj323.outer = this;
        var reader_kitty_outer_324 = function() {
          return this.outer;
        }
        obj323.methods["outer"] = reader_kitty_outer_324;
        function obj_init_323() {
          var origSuperDepth = superDepth;
          superDepth = obj323;
          obj323.annotations = [];
          var func325 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func325.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var string326 = new GraceString("realyee.png");
              onSelf = true;
              var call327 = callmethod(this, "createImage", [1], string326);
              lineNumber = 116
              lineNumber = 115
              var_kitten = this;
              lineNumber = 116
              var call328 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call328
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
          obj323.methods["awake"] = func325;
          func325.definitionLine = 113;
          func325.definitionModule = "kitty";
          var func329 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              onSelf = true;
              var call330 = callmethod(this, "updateAction", [0]);
              var call331 = callmethod(call330,"apply", [0]);
              return call331
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
          obj323.methods["tick"] = func329;
          func329.definitionLine = 119;
          func329.definitionModule = "kitty";
          var func332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              onSelf = true;
              var call333 = callmethod(this, "destroyAction", [0]);
              var call334 = callmethod(call333,"apply", [0]);
              return call334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func332.paramCounts = [
            0,
          ];
          func332.variableArities = [
            false,
          ];
          obj323.methods["kill"] = func332;
          func332.definitionLine = 124;
          func332.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call337 = callmethod(this, "image", [0]);
              var call338 = callmethod(call337,"width", [0]);
              var quotient340 = callmethod(call338, "/", [1], new GraceNum(2));
              var var_w = quotient340;
              lineNumber = 131;
              moduleName = "kitty";
              lineNumber = 130
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call342 = callmethod(this, "image", [0]);
              var call343 = callmethod(call342,"height", [0]);
              var quotient345 = callmethod(call343, "/", [1], new GraceNum(2));
              var var_h = quotient345;
              lineNumber = 132;
              moduleName = "kitty";
              lineNumber = 131
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 132
              lineNumber = 133
              onSelf = true;
              var call347 = callmethod(this, "posX", [0]);
              var diff349 = callmethod(call347, "-", [1], var_w);
              onSelf = true;
              var call351 = callmethod(this, "posY", [0]);
              var diff353 = callmethod(call351, "-", [1], var_h);
              var call354 = callmethod(var_Point,"x()y", [1, 1], diff349, diff353);
              onSelf = true;
              var call356 = callmethod(this, "posX", [0]);
              var diff358 = callmethod(call356, "-", [1], var_w);
              onSelf = true;
              var call360 = callmethod(this, "posY", [0]);
              var opresult362 = callmethod(call360, "+", [1], var_h);
              var call363 = callmethod(var_Point,"x()y", [1, 1], diff358, opresult362);
              lineNumber = 134
              onSelf = true;
              var call365 = callmethod(this, "posX", [0]);
              var opresult367 = callmethod(call365, "+", [1], var_w);
              onSelf = true;
              var call369 = callmethod(this, "posY", [0]);
              var opresult371 = callmethod(call369, "+", [1], var_h);
              var call372 = callmethod(var_Point,"x()y", [1, 1], opresult367, opresult371);
              onSelf = true;
              var call374 = callmethod(this, "posX", [0]);
              var opresult376 = callmethod(call374, "+", [1], var_w);
              onSelf = true;
              var call378 = callmethod(this, "posY", [0]);
              var diff380 = callmethod(call378, "-", [1], var_h);
              var call381 = callmethod(var_Point,"x()y", [1, 1], opresult376, diff380);
              lineNumber = 132
              var call382 = callmethod(var_collections,"list", [0]);
              var call383 = callmethod(call382,"new", [4], call354, call363, call372, call381);
              var var_poly = call383;
              lineNumber = 132;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 139
              var if384 = var_done;
              lineNumber = 136
              var call385 = callmethod(var_mouse,"location", [0]);
              var call386 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call387 = callmethod(call386, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call388 = callmethod(call387, "pointInPolygon", [2], call385, var_poly);
              if (Grace_isTrue(call388)) {
                lineNumber = 137
                onSelf = true;
                var call389 = callmethod(this, "mouseDownAction", [0]);
                var call390 = callmethod(call389,"apply", [0]);
                if384 = call390;
              }
              return if384
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func335.paramCounts = [
            0,
          ];
          func335.variableArities = [
            false,
          ];
          obj323.methods["mouseDown"] = func335;
          func335.definitionLine = 129;
          func335.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func391.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              onSelf = true;
              var call392 = callmethod(this, "mouseEnterAction", [0]);
              var call393 = callmethod(call392,"apply", [0]);
              return call393
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func391.paramCounts = [
            0,
          ];
          func391.variableArities = [
            false,
          ];
          obj323.methods["mouseEnter"] = func391;
          func391.definitionLine = 141;
          func391.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              onSelf = true;
              var call395 = callmethod(this, "mouseExitAction", [0]);
              var call396 = callmethod(call395,"apply", [0]);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func394.paramCounts = [
            0,
          ];
          func394.variableArities = [
            false,
          ];
          obj323.methods["mouseExit"] = func394;
          func394.definitionLine = 145;
          func394.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 146
              lineNumber = 151
              onSelf = true;
              var call400 = callmethod(this, "rotation", [0]);
              var prod402 = callmethod(call400, "*", [1], new GraceNum(3.14159));
              var quotient404 = callmethod(prod402, "/", [1], new GraceNum(180));
              var call405 = callmethod(var_math,"cos", [1], quotient404);
              var call407 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod410 = callmethod(var_distance, "*", [1], call407);
              var prod412 = callmethod(prod410, "*", [1], call405);
              onSelf = true;
              var call414 = callmethod(this, "posX", [0]);
              var opresult416 = callmethod(call414, "+", [1], prod412);
              onSelf = true;
              var call417 = callmethod(this, "posX:=", [1], opresult416);
              lineNumber = 152
              lineNumber = 151
              lineNumber = 152
              onSelf = true;
              var call420 = callmethod(this, "rotation", [0]);
              var prod422 = callmethod(call420, "*", [1], new GraceNum(3.14159));
              var quotient424 = callmethod(prod422, "/", [1], new GraceNum(180));
              var call425 = callmethod(var_math,"sin", [1], quotient424);
              var call427 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod430 = callmethod(var_distance, "*", [1], call427);
              var prod432 = callmethod(prod430, "*", [1], call425);
              onSelf = true;
              var call434 = callmethod(this, "posY", [0]);
              var opresult436 = callmethod(call434, "+", [1], prod432);
              onSelf = true;
              var call437 = callmethod(this, "posY:=", [1], opresult436);
              return call437
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func397.paramCounts = [
            1,
          ];
          func397.variableArities = [
            false,
          ];
          obj323.methods["move"] = func397;
          func397.definitionLine = 150;
          func397.definitionModule = "kitty";
          var func438 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func438.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 156
              lineNumber = 152
              lineNumber = 156
              onSelf = true;
              var call441 = callmethod(this, "rotation", [0]);
              var opresult444 = callmethod(new GraceNum(90), "+", [1], call441);
              var prod446 = callmethod(opresult444, "*", [1], new GraceNum(3.14159));
              var quotient448 = callmethod(prod446, "/", [1], new GraceNum(180));
              var call449 = callmethod(var_math,"cos", [1], quotient448);
              var call451 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod454 = callmethod(var_distance, "*", [1], call451);
              var prod456 = callmethod(prod454, "*", [1], call449);
              onSelf = true;
              var call458 = callmethod(this, "posX", [0]);
              var opresult460 = callmethod(call458, "+", [1], prod456);
              onSelf = true;
              var call461 = callmethod(this, "posX:=", [1], opresult460);
              lineNumber = 157
              lineNumber = 156
              lineNumber = 157
              onSelf = true;
              var call464 = callmethod(this, "rotation", [0]);
              var opresult467 = callmethod(new GraceNum(90), "+", [1], call464);
              var prod469 = callmethod(opresult467, "*", [1], new GraceNum(3.14159));
              var quotient471 = callmethod(prod469, "/", [1], new GraceNum(180));
              var call472 = callmethod(var_math,"sin", [1], quotient471);
              var call474 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod477 = callmethod(var_distance, "*", [1], call474);
              var prod479 = callmethod(prod477, "*", [1], call472);
              onSelf = true;
              var call481 = callmethod(this, "posY", [0]);
              var opresult483 = callmethod(call481, "+", [1], prod479);
              onSelf = true;
              var call484 = callmethod(this, "posY:=", [1], opresult483);
              return call484
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func438.paramCounts = [
            1,
          ];
          func438.variableArities = [
            false,
          ];
          obj323.methods["strafe"] = func438;
          func438.definitionLine = 155;
          func438.definitionModule = "kitty";
          var func485 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func485.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 157
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call487 = callmethod(this, "rotation", [0]);
              var opresult489 = callmethod(call487, "+", [1], var_angle);
              onSelf = true;
              var call490 = callmethod(this, "rotation:=", [1], opresult489);
              return call490
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func485.paramCounts = [
            1,
          ];
          func485.variableArities = [
            false,
          ];
          obj323.methods["turn"] = func485;
          func485.definitionLine = 160;
          func485.definitionModule = "kitty";
          var func491 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func491.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              var call492 = callmethod(var_ctx,"save", [0]);
              lineNumber = 167
              onSelf = true;
              var call493 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call494 = callmethod(this, "posY", [0]);
              var call495 = callmethod(var_ctx,"translate", [2], call493, call494);
              lineNumber = 168
              onSelf = true;
              var call496 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call497 = callmethod(this, "image", [0]);
              var call498 = callmethod(call497,"draw", [4], var_ctx, var_dx, var_dy, call496);
              lineNumber = 169
              var call499 = callmethod(var_ctx,"restore", [0]);
              return call499
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func491.paramCounts = [
            3,
          ];
          func491.variableArities = [
            false,
          ];
          obj323.methods["draw"] = func491;
          func491.definitionLine = 165;
          func491.definitionModule = "kitty";
          var func500 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func500.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              lineNumber = 169
              lineNumber = 173
              var call501 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call502 = callmethod(call501, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call503 = callmethod(call502, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call504 = callmethod(this, "image:=", [1], call503);
              return call504
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func500.paramCounts = [
            1,
          ];
          func500.variableArities = [
            false,
          ];
          obj323.methods["createImage"] = func500;
          func500.definitionLine = 172;
          func500.definitionModule = "kitty";
          var func505 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func505.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 178
              lineNumber = 173
              lineNumber = 177
              onSelf = true;
              var call506 = callmethod(this, "image:=", [1], var_image__39__);
              return call506
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func505.paramTypes = [];
          func505.paramTypes.push([]);
          func505.paramCounts = [
            1,
          ];
          func505.variableArities = [
            false,
          ];
          obj323.methods["setImage"] = func505;
          func505.definitionLine = 176;
          func505.definitionModule = "kitty";
          var func507 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func507.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              lineNumber = 173
              lineNumber = 182
              onSelf = true;
              var call508 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call508
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func507.paramCounts = [
            1,
          ];
          func507.variableArities = [
            false,
          ];
          obj323.methods["setUpdateAction"] = func507;
          func507.definitionLine = 181;
          func507.definitionModule = "kitty";
          var func509 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func509.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 173
              lineNumber = 186
              onSelf = true;
              var call510 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call510
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func509.paramCounts = [
            1,
          ];
          func509.variableArities = [
            false,
          ];
          obj323.methods["setDestroyAction"] = func509;
          func509.definitionLine = 185;
          func509.definitionModule = "kitty";
          var func511 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func511.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              lineNumber = 173
              lineNumber = 190
              onSelf = true;
              var call512 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call512
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func511.paramCounts = [
            1,
          ];
          func511.variableArities = [
            false,
          ];
          obj323.methods["setMouseDownAction"] = func511;
          func511.definitionLine = 189;
          func511.definitionModule = "kitty";
          var func513 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func513.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 173
              lineNumber = 194
              onSelf = true;
              var call514 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call514
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func513.paramCounts = [
            1,
          ];
          func513.variableArities = [
            false,
          ];
          obj323.methods["setMouseEnterAction"] = func513;
          func513.definitionLine = 193;
          func513.definitionModule = "kitty";
          var func515 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func515.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              lineNumber = 173
              lineNumber = 198
              onSelf = true;
              var call516 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call516
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func515.paramCounts = [
            1,
          ];
          func515.variableArities = [
            false,
          ];
          obj323.methods["setMouseExitAction"] = func515;
          func515.definitionLine = 197;
          func515.definitionModule = "kitty";
          var func517 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func517.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              lineNumber = 173
              lineNumber = 202
              onSelf = true;
              var call518 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 204
              lineNumber = 173
              lineNumber = 203
              onSelf = true;
              var call519 = callmethod(this, "posY:=", [1], var_y);
              return call519
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func517.paramCounts = [
            2,
          ];
          func517.variableArities = [
            false,
          ];
          obj323.methods["setLocation"] = func517;
          func517.definitionLine = 201;
          func517.definitionModule = "kitty";
          var func520 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func520.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 208
              lineNumber = 207
              onSelf = true;
              var call521 = callmethod(this, "posX", [0]);
              return call521
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func520.paramCounts = [
            0,
          ];
          func520.variableArities = [
            false,
          ];
          obj323.methods["getX"] = func520;
          func520.definitionLine = 206;
          func520.definitionModule = "kitty";
          var func522 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func522.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              lineNumber = 211
              onSelf = true;
              var call523 = callmethod(this, "posY", [0]);
              return call523
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func522.paramCounts = [
            0,
          ];
          func522.variableArities = [
            false,
          ];
          obj323.methods["getY"] = func522;
          func522.definitionLine = 210;
          func522.definitionModule = "kitty";
          var func524 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func524.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 173
              lineNumber = 215
              onSelf = true;
              var call525 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call525
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func524.paramCounts = [
            1,
          ];
          func524.variableArities = [
            false,
          ];
          obj323.methods["setX"] = func524;
          func524.definitionLine = 214;
          func524.definitionModule = "kitty";
          var func526 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func526.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 173
              lineNumber = 219
              onSelf = true;
              var call527 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call527
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func526.paramCounts = [
            1,
          ];
          func526.variableArities = [
            false,
          ];
          obj323.methods["setY"] = func526;
          func526.definitionLine = 218;
          func526.definitionModule = "kitty";
          var func528 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func528.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 223
              onSelf = true;
              var call529 = callmethod(this, "rotation", [0]);
              return call529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func528.paramCounts = [
            0,
          ];
          func528.variableArities = [
            false,
          ];
          obj323.methods["getRotation"] = func528;
          func528.definitionLine = 222;
          func528.definitionModule = "kitty";
          sourceObject = obj323;
          lineNumber = 95
          obj323.data["tag"] = var_tag__39__;
          var reader_kitty_tag_530 = function() {
            return this.data["tag"];
          }
          obj323.methods["tag"] = reader_kitty_tag_530;
          obj323.data["tag"] = var_tag__39__;
          var writer_kitty_tag_530 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj323.methods["tag:="] = writer_kitty_tag_530;
          reader_kitty_tag_530.confidential = true;
          writer_kitty_tag_530.confidential = true;
          lineNumber = 96;
          moduleName = "kitty";
          lineNumber = 95
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 96
          obj323.data["posX"] = var_x__39__;
          var reader_kitty_posX_531 = function() {
            return this.data["posX"];
          }
          obj323.methods["posX"] = reader_kitty_posX_531;
          obj323.data["posX"] = var_x__39__;
          var writer_kitty_posX_531 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj323.methods["posX:="] = writer_kitty_posX_531;
          reader_kitty_posX_531.confidential = true;
          writer_kitty_posX_531.confidential = true;
          lineNumber = 97;
          moduleName = "kitty";
          lineNumber = 96
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 97
          obj323.data["posY"] = var_y__39__;
          var reader_kitty_posY_532 = function() {
            return this.data["posY"];
          }
          obj323.methods["posY"] = reader_kitty_posY_532;
          obj323.data["posY"] = var_y__39__;
          var writer_kitty_posY_532 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj323.methods["posY:="] = writer_kitty_posY_532;
          reader_kitty_posY_532.confidential = true;
          writer_kitty_posY_532.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 98
          obj323.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_533 = function() {
            return this.data["rotation"];
          }
          obj323.methods["rotation"] = reader_kitty_rotation_533;
          obj323.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_533 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj323.methods["rotation:="] = writer_kitty_rotation_533;
          reader_kitty_rotation_533.confidential = true;
          writer_kitty_rotation_533.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 102
          var block534 = Grace_allocObject();
          block534.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block534.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block534.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block534.methods["match"] = GraceBlock_match;
          block534.methods["prefix?"] = GraceBlock_lift;
          block534.receiver = this;
          block534.className = 'block<kitty:102>';
          block534.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["updateAction"] = block534;
          var reader_kitty_updateAction_535 = function() {
            return this.data["updateAction"];
          }
          obj323.methods["updateAction"] = reader_kitty_updateAction_535;
          obj323.data["updateAction"] = block534;
          var writer_kitty_updateAction_535 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj323.methods["updateAction:="] = writer_kitty_updateAction_535;
          reader_kitty_updateAction_535.confidential = true;
          writer_kitty_updateAction_535.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block534)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 103
          var block536 = Grace_allocObject();
          block536.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block536.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block536.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block536.methods["match"] = GraceBlock_match;
          block536.methods["prefix?"] = GraceBlock_lift;
          block536.receiver = this;
          block536.className = 'block<kitty:103>';
          block536.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["destroyAction"] = block536;
          var reader_kitty_destroyAction_537 = function() {
            return this.data["destroyAction"];
          }
          obj323.methods["destroyAction"] = reader_kitty_destroyAction_537;
          obj323.data["destroyAction"] = block536;
          var writer_kitty_destroyAction_537 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj323.methods["destroyAction:="] = writer_kitty_destroyAction_537;
          reader_kitty_destroyAction_537.confidential = true;
          writer_kitty_destroyAction_537.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block536)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 104
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
          block538.className = 'block<kitty:104>';
          block538.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseDownAction"] = block538;
          var reader_kitty_mouseDownAction_539 = function() {
            return this.data["mouseDownAction"];
          }
          obj323.methods["mouseDownAction"] = reader_kitty_mouseDownAction_539;
          obj323.data["mouseDownAction"] = block538;
          var writer_kitty_mouseDownAction_539 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj323.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_539;
          reader_kitty_mouseDownAction_539.confidential = true;
          writer_kitty_mouseDownAction_539.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block538)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 105
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
          block540.className = 'block<kitty:105>';
          block540.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseDragAction"] = block540;
          var reader_kitty_mouseDragAction_541 = function() {
            return this.data["mouseDragAction"];
          }
          obj323.methods["mouseDragAction"] = reader_kitty_mouseDragAction_541;
          obj323.data["mouseDragAction"] = block540;
          var writer_kitty_mouseDragAction_541 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj323.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_541;
          reader_kitty_mouseDragAction_541.confidential = true;
          writer_kitty_mouseDragAction_541.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block540)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 106
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
          block542.className = 'block<kitty:106>';
          block542.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseEnterAction"] = block542;
          var reader_kitty_mouseEnterAction_543 = function() {
            return this.data["mouseEnterAction"];
          }
          obj323.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_543;
          obj323.data["mouseEnterAction"] = block542;
          var writer_kitty_mouseEnterAction_543 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj323.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_543;
          reader_kitty_mouseEnterAction_543.confidential = true;
          writer_kitty_mouseEnterAction_543.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block542)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 108
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
          block544.className = 'block<kitty:108>';
          block544.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseExitAction"] = block544;
          var reader_kitty_mouseExitAction_545 = function() {
            return this.data["mouseExitAction"];
          }
          obj323.methods["mouseExitAction"] = reader_kitty_mouseExitAction_545;
          obj323.data["mouseExitAction"] = block544;
          var writer_kitty_mouseExitAction_545 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj323.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_545;
          reader_kitty_mouseExitAction_545.confidential = true;
          writer_kitty_mouseExitAction_545.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block544)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          obj323.data["image"] = undefined;
          var reader_kitty_image_546 = function() {
            return this.data["image"];
          }
          obj323.methods["image"] = reader_kitty_image_546;
          obj323.data["image"] = undefined;
          var writer_kitty_image_546 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj323.methods["image:="] = writer_kitty_image_546;
          reader_kitty_image_546.confidential = true;
          writer_kitty_image_546.confidential = true;
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 110
          onSelf = true;
          var call547 = callmethod(this, "awake", [0]);
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          sourceObject = obj323;
          superDepth = origSuperDepth;
        }
        obj_init_323.apply(obj323, []);
        return obj323
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func322.paramCounts = [
      3,
    ];
    func322.variableArities = [
      false,
    ];
    obj320.methods["new"] = func322;
    func322.definitionLine = 91;
    func322.definitionModule = "kitty";
    var func548 = function(argcv) {
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
        var obj549 = Grace_allocObject();
        obj549.definitionModule = "kitty";
        obj549.definitionLine = 91;
        var inho549 = inheritingObject;
        while (inho549.superobj) inho549 = inho549.superobj;
        inho549.superobj = obj549;
        obj549.data = inheritingObject.data;
        obj549.outer = this;
        var reader_kitty_outer_550 = function() {
          return this.outer;
        }
        obj549.methods["outer"] = reader_kitty_outer_550;
        function obj_init_549() {
          var origSuperDepth = superDepth;
          superDepth = obj549;
          obj549.annotations = [];
          var func551 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var string552 = new GraceString("realyee.png");
              onSelf = true;
              var call553 = callmethod(this, "createImage", [1], string552);
              lineNumber = 116
              lineNumber = 115
              var_kitten = this;
              lineNumber = 116
              var call554 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call554
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
          obj549.methods["awake"] = func551;
          func551.definitionLine = 113;
          func551.definitionModule = "kitty";
          var func555 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              onSelf = true;
              var call556 = callmethod(this, "updateAction", [0]);
              var call557 = callmethod(call556,"apply", [0]);
              return call557
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func555.paramCounts = [
            0,
          ];
          func555.variableArities = [
            false,
          ];
          obj549.methods["tick"] = func555;
          func555.definitionLine = 119;
          func555.definitionModule = "kitty";
          var func558 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              onSelf = true;
              var call559 = callmethod(this, "destroyAction", [0]);
              var call560 = callmethod(call559,"apply", [0]);
              return call560
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func558.paramCounts = [
            0,
          ];
          func558.variableArities = [
            false,
          ];
          obj549.methods["kill"] = func558;
          func558.definitionLine = 124;
          func558.definitionModule = "kitty";
          var func561 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func561.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call563 = callmethod(this, "image", [0]);
              var call564 = callmethod(call563,"width", [0]);
              var quotient566 = callmethod(call564, "/", [1], new GraceNum(2));
              var var_w = quotient566;
              lineNumber = 131;
              moduleName = "kitty";
              lineNumber = 130
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call568 = callmethod(this, "image", [0]);
              var call569 = callmethod(call568,"height", [0]);
              var quotient571 = callmethod(call569, "/", [1], new GraceNum(2));
              var var_h = quotient571;
              lineNumber = 132;
              moduleName = "kitty";
              lineNumber = 131
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 132
              lineNumber = 133
              onSelf = true;
              var call573 = callmethod(this, "posX", [0]);
              var diff575 = callmethod(call573, "-", [1], var_w);
              onSelf = true;
              var call577 = callmethod(this, "posY", [0]);
              var diff579 = callmethod(call577, "-", [1], var_h);
              var call580 = callmethod(var_Point,"x()y", [1, 1], diff575, diff579);
              onSelf = true;
              var call582 = callmethod(this, "posX", [0]);
              var diff584 = callmethod(call582, "-", [1], var_w);
              onSelf = true;
              var call586 = callmethod(this, "posY", [0]);
              var opresult588 = callmethod(call586, "+", [1], var_h);
              var call589 = callmethod(var_Point,"x()y", [1, 1], diff584, opresult588);
              lineNumber = 134
              onSelf = true;
              var call591 = callmethod(this, "posX", [0]);
              var opresult593 = callmethod(call591, "+", [1], var_w);
              onSelf = true;
              var call595 = callmethod(this, "posY", [0]);
              var opresult597 = callmethod(call595, "+", [1], var_h);
              var call598 = callmethod(var_Point,"x()y", [1, 1], opresult593, opresult597);
              onSelf = true;
              var call600 = callmethod(this, "posX", [0]);
              var opresult602 = callmethod(call600, "+", [1], var_w);
              onSelf = true;
              var call604 = callmethod(this, "posY", [0]);
              var diff606 = callmethod(call604, "-", [1], var_h);
              var call607 = callmethod(var_Point,"x()y", [1, 1], opresult602, diff606);
              lineNumber = 132
              var call608 = callmethod(var_collections,"list", [0]);
              var call609 = callmethod(call608,"new", [4], call580, call589, call598, call607);
              var var_poly = call609;
              lineNumber = 132;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 139
              var if610 = var_done;
              lineNumber = 136
              var call611 = callmethod(var_mouse,"location", [0]);
              var call612 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call613 = callmethod(call612, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call614 = callmethod(call613, "pointInPolygon", [2], call611, var_poly);
              if (Grace_isTrue(call614)) {
                lineNumber = 137
                onSelf = true;
                var call615 = callmethod(this, "mouseDownAction", [0]);
                var call616 = callmethod(call615,"apply", [0]);
                if610 = call616;
              }
              return if610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func561.paramCounts = [
            0,
          ];
          func561.variableArities = [
            false,
          ];
          obj549.methods["mouseDown"] = func561;
          func561.definitionLine = 129;
          func561.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              onSelf = true;
              var call618 = callmethod(this, "mouseEnterAction", [0]);
              var call619 = callmethod(call618,"apply", [0]);
              return call619
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func617.paramCounts = [
            0,
          ];
          func617.variableArities = [
            false,
          ];
          obj549.methods["mouseEnter"] = func617;
          func617.definitionLine = 141;
          func617.definitionModule = "kitty";
          var func620 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func620.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              onSelf = true;
              var call621 = callmethod(this, "mouseExitAction", [0]);
              var call622 = callmethod(call621,"apply", [0]);
              return call622
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func620.paramCounts = [
            0,
          ];
          func620.variableArities = [
            false,
          ];
          obj549.methods["mouseExit"] = func620;
          func620.definitionLine = 145;
          func620.definitionModule = "kitty";
          var func623 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 151
              lineNumber = 146
              lineNumber = 151
              onSelf = true;
              var call626 = callmethod(this, "rotation", [0]);
              var prod628 = callmethod(call626, "*", [1], new GraceNum(3.14159));
              var quotient630 = callmethod(prod628, "/", [1], new GraceNum(180));
              var call631 = callmethod(var_math,"cos", [1], quotient630);
              var call633 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod636 = callmethod(var_distance, "*", [1], call633);
              var prod638 = callmethod(prod636, "*", [1], call631);
              onSelf = true;
              var call640 = callmethod(this, "posX", [0]);
              var opresult642 = callmethod(call640, "+", [1], prod638);
              onSelf = true;
              var call643 = callmethod(this, "posX:=", [1], opresult642);
              lineNumber = 152
              lineNumber = 151
              lineNumber = 152
              onSelf = true;
              var call646 = callmethod(this, "rotation", [0]);
              var prod648 = callmethod(call646, "*", [1], new GraceNum(3.14159));
              var quotient650 = callmethod(prod648, "/", [1], new GraceNum(180));
              var call651 = callmethod(var_math,"sin", [1], quotient650);
              var call653 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod656 = callmethod(var_distance, "*", [1], call653);
              var prod658 = callmethod(prod656, "*", [1], call651);
              onSelf = true;
              var call660 = callmethod(this, "posY", [0]);
              var opresult662 = callmethod(call660, "+", [1], prod658);
              onSelf = true;
              var call663 = callmethod(this, "posY:=", [1], opresult662);
              return call663
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func623.paramCounts = [
            1,
          ];
          func623.variableArities = [
            false,
          ];
          obj549.methods["move"] = func623;
          func623.definitionLine = 150;
          func623.definitionModule = "kitty";
          var func664 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func664.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 156
              lineNumber = 152
              lineNumber = 156
              onSelf = true;
              var call667 = callmethod(this, "rotation", [0]);
              var opresult670 = callmethod(new GraceNum(90), "+", [1], call667);
              var prod672 = callmethod(opresult670, "*", [1], new GraceNum(3.14159));
              var quotient674 = callmethod(prod672, "/", [1], new GraceNum(180));
              var call675 = callmethod(var_math,"cos", [1], quotient674);
              var call677 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod680 = callmethod(var_distance, "*", [1], call677);
              var prod682 = callmethod(prod680, "*", [1], call675);
              onSelf = true;
              var call684 = callmethod(this, "posX", [0]);
              var opresult686 = callmethod(call684, "+", [1], prod682);
              onSelf = true;
              var call687 = callmethod(this, "posX:=", [1], opresult686);
              lineNumber = 157
              lineNumber = 156
              lineNumber = 157
              onSelf = true;
              var call690 = callmethod(this, "rotation", [0]);
              var opresult693 = callmethod(new GraceNum(90), "+", [1], call690);
              var prod695 = callmethod(opresult693, "*", [1], new GraceNum(3.14159));
              var quotient697 = callmethod(prod695, "/", [1], new GraceNum(180));
              var call698 = callmethod(var_math,"sin", [1], quotient697);
              var call700 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod703 = callmethod(var_distance, "*", [1], call700);
              var prod705 = callmethod(prod703, "*", [1], call698);
              onSelf = true;
              var call707 = callmethod(this, "posY", [0]);
              var opresult709 = callmethod(call707, "+", [1], prod705);
              onSelf = true;
              var call710 = callmethod(this, "posY:=", [1], opresult709);
              return call710
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
          obj549.methods["strafe"] = func664;
          func664.definitionLine = 155;
          func664.definitionModule = "kitty";
          var func711 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func711.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              lineNumber = 157
              lineNumber = 162
              lineNumber = 161
              onSelf = true;
              var call713 = callmethod(this, "rotation", [0]);
              var opresult715 = callmethod(call713, "+", [1], var_angle);
              onSelf = true;
              var call716 = callmethod(this, "rotation:=", [1], opresult715);
              return call716
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func711.paramCounts = [
            1,
          ];
          func711.variableArities = [
            false,
          ];
          obj549.methods["turn"] = func711;
          func711.definitionLine = 160;
          func711.definitionModule = "kitty";
          var func717 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func717.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              var call718 = callmethod(var_ctx,"save", [0]);
              lineNumber = 167
              onSelf = true;
              var call719 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call720 = callmethod(this, "posY", [0]);
              var call721 = callmethod(var_ctx,"translate", [2], call719, call720);
              lineNumber = 168
              onSelf = true;
              var call722 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call723 = callmethod(this, "image", [0]);
              var call724 = callmethod(call723,"draw", [4], var_ctx, var_dx, var_dy, call722);
              lineNumber = 169
              var call725 = callmethod(var_ctx,"restore", [0]);
              return call725
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func717.paramCounts = [
            3,
          ];
          func717.variableArities = [
            false,
          ];
          obj549.methods["draw"] = func717;
          func717.definitionLine = 165;
          func717.definitionModule = "kitty";
          var func726 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func726.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              lineNumber = 169
              lineNumber = 173
              var call727 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call728 = callmethod(call727, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call729 = callmethod(call728, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call730 = callmethod(this, "image:=", [1], call729);
              return call730
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func726.paramCounts = [
            1,
          ];
          func726.variableArities = [
            false,
          ];
          obj549.methods["createImage"] = func726;
          func726.definitionLine = 172;
          func726.definitionModule = "kitty";
          var func731 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func731.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 178
              lineNumber = 173
              lineNumber = 177
              onSelf = true;
              var call732 = callmethod(this, "image:=", [1], var_image__39__);
              return call732
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func731.paramTypes = [];
          func731.paramTypes.push([]);
          func731.paramCounts = [
            1,
          ];
          func731.variableArities = [
            false,
          ];
          obj549.methods["setImage"] = func731;
          func731.definitionLine = 176;
          func731.definitionModule = "kitty";
          var func733 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func733.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              lineNumber = 173
              lineNumber = 182
              onSelf = true;
              var call734 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call734
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func733.paramCounts = [
            1,
          ];
          func733.variableArities = [
            false,
          ];
          obj549.methods["setUpdateAction"] = func733;
          func733.definitionLine = 181;
          func733.definitionModule = "kitty";
          var func735 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func735.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 173
              lineNumber = 186
              onSelf = true;
              var call736 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call736
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func735.paramCounts = [
            1,
          ];
          func735.variableArities = [
            false,
          ];
          obj549.methods["setDestroyAction"] = func735;
          func735.definitionLine = 185;
          func735.definitionModule = "kitty";
          var func737 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func737.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              lineNumber = 173
              lineNumber = 190
              onSelf = true;
              var call738 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call738
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func737.paramCounts = [
            1,
          ];
          func737.variableArities = [
            false,
          ];
          obj549.methods["setMouseDownAction"] = func737;
          func737.definitionLine = 189;
          func737.definitionModule = "kitty";
          var func739 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func739.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 173
              lineNumber = 194
              onSelf = true;
              var call740 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call740
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func739.paramCounts = [
            1,
          ];
          func739.variableArities = [
            false,
          ];
          obj549.methods["setMouseEnterAction"] = func739;
          func739.definitionLine = 193;
          func739.definitionModule = "kitty";
          var func741 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func741.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              lineNumber = 173
              lineNumber = 198
              onSelf = true;
              var call742 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call742
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func741.paramCounts = [
            1,
          ];
          func741.variableArities = [
            false,
          ];
          obj549.methods["setMouseExitAction"] = func741;
          func741.definitionLine = 197;
          func741.definitionModule = "kitty";
          var func743 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func743.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              lineNumber = 173
              lineNumber = 202
              onSelf = true;
              var call744 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 204
              lineNumber = 173
              lineNumber = 203
              onSelf = true;
              var call745 = callmethod(this, "posY:=", [1], var_y);
              return call745
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func743.paramCounts = [
            2,
          ];
          func743.variableArities = [
            false,
          ];
          obj549.methods["setLocation"] = func743;
          func743.definitionLine = 201;
          func743.definitionModule = "kitty";
          var func746 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func746.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 208
              lineNumber = 207
              onSelf = true;
              var call747 = callmethod(this, "posX", [0]);
              return call747
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func746.paramCounts = [
            0,
          ];
          func746.variableArities = [
            false,
          ];
          obj549.methods["getX"] = func746;
          func746.definitionLine = 206;
          func746.definitionModule = "kitty";
          var func748 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func748.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              lineNumber = 211
              onSelf = true;
              var call749 = callmethod(this, "posY", [0]);
              return call749
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
          obj549.methods["getY"] = func748;
          func748.definitionLine = 210;
          func748.definitionModule = "kitty";
          var func750 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func750.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 173
              lineNumber = 215
              onSelf = true;
              var call751 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call751
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func750.paramCounts = [
            1,
          ];
          func750.variableArities = [
            false,
          ];
          obj549.methods["setX"] = func750;
          func750.definitionLine = 214;
          func750.definitionModule = "kitty";
          var func752 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func752.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 173
              lineNumber = 219
              onSelf = true;
              var call753 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call753
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func752.paramCounts = [
            1,
          ];
          func752.variableArities = [
            false,
          ];
          obj549.methods["setY"] = func752;
          func752.definitionLine = 218;
          func752.definitionModule = "kitty";
          var func754 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func754.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 223
              onSelf = true;
              var call755 = callmethod(this, "rotation", [0]);
              return call755
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func754.paramCounts = [
            0,
          ];
          func754.variableArities = [
            false,
          ];
          obj549.methods["getRotation"] = func754;
          func754.definitionLine = 222;
          func754.definitionModule = "kitty";
          sourceObject = obj549;
          lineNumber = 95
          obj549.data["tag"] = var_tag__39__;
          var reader_kitty_tag_756 = function() {
            return this.data["tag"];
          }
          obj549.methods["tag"] = reader_kitty_tag_756;
          obj549.data["tag"] = var_tag__39__;
          var writer_kitty_tag_756 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj549.methods["tag:="] = writer_kitty_tag_756;
          reader_kitty_tag_756.confidential = true;
          writer_kitty_tag_756.confidential = true;
          lineNumber = 96;
          moduleName = "kitty";
          lineNumber = 95
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 96
          obj549.data["posX"] = var_x__39__;
          var reader_kitty_posX_757 = function() {
            return this.data["posX"];
          }
          obj549.methods["posX"] = reader_kitty_posX_757;
          obj549.data["posX"] = var_x__39__;
          var writer_kitty_posX_757 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj549.methods["posX:="] = writer_kitty_posX_757;
          reader_kitty_posX_757.confidential = true;
          writer_kitty_posX_757.confidential = true;
          lineNumber = 97;
          moduleName = "kitty";
          lineNumber = 96
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 97
          obj549.data["posY"] = var_y__39__;
          var reader_kitty_posY_758 = function() {
            return this.data["posY"];
          }
          obj549.methods["posY"] = reader_kitty_posY_758;
          obj549.data["posY"] = var_y__39__;
          var writer_kitty_posY_758 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj549.methods["posY:="] = writer_kitty_posY_758;
          reader_kitty_posY_758.confidential = true;
          writer_kitty_posY_758.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 98
          obj549.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_759 = function() {
            return this.data["rotation"];
          }
          obj549.methods["rotation"] = reader_kitty_rotation_759;
          obj549.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_759 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj549.methods["rotation:="] = writer_kitty_rotation_759;
          reader_kitty_rotation_759.confidential = true;
          writer_kitty_rotation_759.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 102
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
          block760.className = 'block<kitty:102>';
          block760.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["updateAction"] = block760;
          var reader_kitty_updateAction_761 = function() {
            return this.data["updateAction"];
          }
          obj549.methods["updateAction"] = reader_kitty_updateAction_761;
          obj549.data["updateAction"] = block760;
          var writer_kitty_updateAction_761 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj549.methods["updateAction:="] = writer_kitty_updateAction_761;
          reader_kitty_updateAction_761.confidential = true;
          writer_kitty_updateAction_761.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block760)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 103
          var block762 = Grace_allocObject();
          block762.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block762.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block762.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block762.methods["match"] = GraceBlock_match;
          block762.methods["prefix?"] = GraceBlock_lift;
          block762.receiver = this;
          block762.className = 'block<kitty:103>';
          block762.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["destroyAction"] = block762;
          var reader_kitty_destroyAction_763 = function() {
            return this.data["destroyAction"];
          }
          obj549.methods["destroyAction"] = reader_kitty_destroyAction_763;
          obj549.data["destroyAction"] = block762;
          var writer_kitty_destroyAction_763 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj549.methods["destroyAction:="] = writer_kitty_destroyAction_763;
          reader_kitty_destroyAction_763.confidential = true;
          writer_kitty_destroyAction_763.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block762)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 104
          var block764 = Grace_allocObject();
          block764.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block764.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block764.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block764.methods["match"] = GraceBlock_match;
          block764.methods["prefix?"] = GraceBlock_lift;
          block764.receiver = this;
          block764.className = 'block<kitty:104>';
          block764.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["mouseDownAction"] = block764;
          var reader_kitty_mouseDownAction_765 = function() {
            return this.data["mouseDownAction"];
          }
          obj549.methods["mouseDownAction"] = reader_kitty_mouseDownAction_765;
          obj549.data["mouseDownAction"] = block764;
          var writer_kitty_mouseDownAction_765 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj549.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_765;
          reader_kitty_mouseDownAction_765.confidential = true;
          writer_kitty_mouseDownAction_765.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block764)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 105
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
          block766.className = 'block<kitty:105>';
          block766.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["mouseDragAction"] = block766;
          var reader_kitty_mouseDragAction_767 = function() {
            return this.data["mouseDragAction"];
          }
          obj549.methods["mouseDragAction"] = reader_kitty_mouseDragAction_767;
          obj549.data["mouseDragAction"] = block766;
          var writer_kitty_mouseDragAction_767 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj549.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_767;
          reader_kitty_mouseDragAction_767.confidential = true;
          writer_kitty_mouseDragAction_767.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block766)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 106
          var block768 = Grace_allocObject();
          block768.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block768.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block768.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block768.methods["match"] = GraceBlock_match;
          block768.methods["prefix?"] = GraceBlock_lift;
          block768.receiver = this;
          block768.className = 'block<kitty:106>';
          block768.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["mouseEnterAction"] = block768;
          var reader_kitty_mouseEnterAction_769 = function() {
            return this.data["mouseEnterAction"];
          }
          obj549.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_769;
          obj549.data["mouseEnterAction"] = block768;
          var writer_kitty_mouseEnterAction_769 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj549.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_769;
          reader_kitty_mouseEnterAction_769.confidential = true;
          writer_kitty_mouseEnterAction_769.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block768)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 108
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
          block770.className = 'block<kitty:108>';
          block770.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj549.data["mouseExitAction"] = block770;
          var reader_kitty_mouseExitAction_771 = function() {
            return this.data["mouseExitAction"];
          }
          obj549.methods["mouseExitAction"] = reader_kitty_mouseExitAction_771;
          obj549.data["mouseExitAction"] = block770;
          var writer_kitty_mouseExitAction_771 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj549.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_771;
          reader_kitty_mouseExitAction_771.confidential = true;
          writer_kitty_mouseExitAction_771.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block770)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj549.mutable = true;
          sourceObject = obj549;
          obj549.data["image"] = undefined;
          var reader_kitty_image_772 = function() {
            return this.data["image"];
          }
          obj549.methods["image"] = reader_kitty_image_772;
          obj549.data["image"] = undefined;
          var writer_kitty_image_772 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj549.methods["image:="] = writer_kitty_image_772;
          reader_kitty_image_772.confidential = true;
          writer_kitty_image_772.confidential = true;
          obj549.mutable = true;
          sourceObject = obj549;
          lineNumber = 110
          onSelf = true;
          var call773 = callmethod(this, "awake", [0]);
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          sourceObject = obj549;
          superDepth = origSuperDepth;
        }
        obj_init_549.apply(inheritingObject, []);
        return obj549
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj320.methods["new()object"] = func548;
    var func774 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 91
        var string775 = new GraceString("class KittyEntity");
        return string775
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func774.paramCounts = [
    ];
    func774.variableArities = [
    ];
    obj320.methods["asDebugString"] = func774;
    func774.definitionLine = 91;
    func774.definitionModule = "kitty";
    sourceObject = obj320;
    sourceObject = obj320;
    superDepth = origSuperDepth;
  }
  obj_init_320.apply(obj320, []);
  var var_KittyEntity = obj320;
  lineNumber = 227
  lineNumber = 239
  lineNumber = 244
  lineNumber = 248
  lineNumber = 253
  lineNumber = 257
  lineNumber = 261
  lineNumber = 265
  lineNumber = 272
  var func776 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func776.paramCounts[0])
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
  func776.paramCounts = [
    0,
  ];
  func776.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func776;
  func776.definitionLine = 272;
  func776.definitionModule = "kitty";
  var obj777 = Grace_allocObject();
  obj777.definitionModule = "kitty";
  obj777.definitionLine = 272;
  obj777.outer = this;
  var reader_kitty_outer_778 = function() {
    return this.outer;
  }
  obj777.methods["outer"] = reader_kitty_outer_778;
  function obj_init_777() {
    var origSuperDepth = superDepth;
    superDepth = obj777;
    obj777.annotations = [];
    var func779 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func779.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj780 = Grace_allocObject();
        obj780.definitionModule = "kitty";
        obj780.definitionLine = 272;
        obj780.outer = this;
        var reader_kitty_outer_781 = function() {
          return this.outer;
        }
        obj780.methods["outer"] = reader_kitty_outer_781;
        function obj_init_780() {
          var origSuperDepth = superDepth;
          superDepth = obj780;
          obj780.annotations = [];
          var func782 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func782.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 314
              var if783 = var_done;
              lineNumber = 310
              onSelf = true;
              var call784 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call784)) {
                lineNumber = 312
                lineNumber = 311
                var bool785 = new GraceBoolean(false)
                return bool785
              }
              lineNumber = 315
              lineNumber = 272
              lineNumber = 314
              var call786 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call787 = callmethod(this, "document:=", [1], call786);
              lineNumber = 315
              lineNumber = 314
              lineNumber = 315
              var string788 = new GraceString("standard-canvas");
              onSelf = true;
              var call789 = callmethod(this, "document", [0]);
              var call790 = callmethod(call789,"getElementById", [1], string788);
              onSelf = true;
              var call791 = callmethod(this, "canvas:=", [1], call790);
              lineNumber = 317
              lineNumber = 314
              lineNumber = 316
              onSelf = true;
              var call792 = callmethod(this, "canvas", [0]);
              var call793 = callmethod(call792,"width", [0]);
              onSelf = true;
              var call794 = callmethod(this, "canvasWidth:=", [1], call793);
              lineNumber = 320
              lineNumber = 316
              lineNumber = 317
              onSelf = true;
              var call795 = callmethod(this, "canvas", [0]);
              var call796 = callmethod(call795,"height", [0]);
              onSelf = true;
              var call797 = callmethod(this, "canvasHeight:=", [1], call796);
              lineNumber = 331
              var block798 = Grace_allocObject();
              block798.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block798.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block798.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block798.methods["match"] = GraceBlock_match;
              block798.methods["prefix?"] = GraceBlock_lift;
              block798.receiver = this;
              block798.className = 'block<kitty:331>';
              block798.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 323
                lineNumber = 322
                onSelf = true;
                var call799 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call801 = callmethod(this, "canvas", [0]);
                var call802 = callmethod(call801,"offsetWidth", [0]);
                onSelf = true;
                var call804 = callmethod(this, "canvas", [0]);
                var call805 = callmethod(call804,"offsetLeft", [0]);
                var call807 = callmethod(var_ev,"clientX", [0]);
                var diff809 = callmethod(call807, "-", [1], call805);
                var quotient811 = callmethod(diff809, "/", [1], call802);
                var prod813 = callmethod(quotient811, "*", [1], call799);
                var var_x = prod813;
                lineNumber = 323;
                moduleName = "kitty";
                lineNumber = 322
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 324
                lineNumber = 323
                onSelf = true;
                var call814 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call816 = callmethod(this, "canvas", [0]);
                var call817 = callmethod(call816,"offsetHeight", [0]);
                onSelf = true;
                var call819 = callmethod(this, "canvas", [0]);
                var call820 = callmethod(call819,"offsetTop", [0]);
                var call822 = callmethod(var_ev,"clientY", [0]);
                var diff824 = callmethod(call822, "-", [1], call820);
                var quotient826 = callmethod(diff824, "/", [1], call817);
                var prod828 = callmethod(quotient826, "*", [1], call814);
                var var_y = prod828;
                lineNumber = 324;
                moduleName = "kitty";
                lineNumber = 323
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 324
                lineNumber = 323
                lineNumber = 324
                var call829 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call830 = callmethod(var_mouse,"position:=", [1], call829);
                lineNumber = 327
                onSelf = true;
                var call831 = callmethod(this, "entities", [0]);
                lineNumber = 330
                var block832 = Grace_allocObject();
                block832.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block832.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block832.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block832.methods["match"] = GraceBlock_match;
                block832.methods["prefix?"] = GraceBlock_lift;
                block832.receiver = this;
                block832.className = 'block<kitty:330>';
                block832.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 328
                  var call833 = callmethod(var_entity,"mouseDown", [0]);
                  return call833;
                };
                var call834 = callmethod(Grace_prelude,"for()do", [1, 1], call831, block832);
                return call834;
              };
              var_mouseDownListener = block798;
              lineNumber = 331
              var string835 = new GraceString("mousedown");
              onSelf = true;
              var call836 = callmethod(this, "canvas", [0]);
              var call837 = callmethod(call836,"addEventListener", [2], string835, var_mouseDownListener);
              lineNumber = 338
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
              block838.className = 'block<kitty:338>';
              block838.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 335
                lineNumber = 334
                onSelf = true;
                var call839 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call841 = callmethod(this, "canvas", [0]);
                var call842 = callmethod(call841,"offsetWidth", [0]);
                onSelf = true;
                var call844 = callmethod(this, "canvas", [0]);
                var call845 = callmethod(call844,"offsetLeft", [0]);
                var call847 = callmethod(var_ev,"clientX", [0]);
                var diff849 = callmethod(call847, "-", [1], call845);
                var quotient851 = callmethod(diff849, "/", [1], call842);
                var prod853 = callmethod(quotient851, "*", [1], call839);
                var var_x = prod853;
                lineNumber = 335;
                moduleName = "kitty";
                lineNumber = 334
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 336
                lineNumber = 335
                onSelf = true;
                var call854 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call856 = callmethod(this, "canvas", [0]);
                var call857 = callmethod(call856,"offsetHeight", [0]);
                onSelf = true;
                var call859 = callmethod(this, "canvas", [0]);
                var call860 = callmethod(call859,"offsetTop", [0]);
                var call862 = callmethod(var_ev,"clientY", [0]);
                var diff864 = callmethod(call862, "-", [1], call860);
                var quotient866 = callmethod(diff864, "/", [1], call857);
                var prod868 = callmethod(quotient866, "*", [1], call854);
                var var_y = prod868;
                lineNumber = 336;
                moduleName = "kitty";
                lineNumber = 335
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 336
                lineNumber = 335
                lineNumber = 336
                var call869 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call870 = callmethod(var_mouse,"position:=", [1], call869);
                return call870;
              };
              var_mouseMoveListener = block838;
              lineNumber = 338
              var string871 = new GraceString("mousemove");
              onSelf = true;
              var call872 = callmethod(this, "canvas", [0]);
              var call873 = callmethod(call872,"addEventListener", [2], string871, var_mouseMoveListener);
              lineNumber = 348
              var block874 = Grace_allocObject();
              block874.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block874.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block874.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block874.methods["match"] = GraceBlock_match;
              block874.methods["prefix?"] = GraceBlock_lift;
              block874.receiver = this;
              block874.className = 'block<kitty:348>';
              block874.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 346
                var if875 = var_done;
                lineNumber = 343
                var call877 = callmethod(var_ev,"keyCode", [0]);
                var opresult879 = callmethod(call877, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult879)) {
                  lineNumber = 344
                  onSelf = true;
                  var call880 = callmethod(this, "stop", [0]);
                  if875 = call880;
                }
                lineNumber = 347
                lineNumber = 346
                var call881 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call881;
                return call881;
              };
              var_keyDownListener = block874;
              lineNumber = 348
              var string882 = new GraceString("keydown");
              onSelf = true;
              var call883 = callmethod(this, "document", [0]);
              var call884 = callmethod(call883,"addEventListener", [2], string882, var_keyDownListener);
              lineNumber = 354
              var block885 = Grace_allocObject();
              block885.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block885.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block885.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block885.methods["match"] = GraceBlock_match;
              block885.methods["prefix?"] = GraceBlock_lift;
              block885.receiver = this;
              block885.className = 'block<kitty:354>';
              block885.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 353
                lineNumber = 352
                var call886 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call886;
                return call886;
              };
              var_keyUpListener = block885;
              lineNumber = 354
              var string887 = new GraceString("keyup");
              onSelf = true;
              var call888 = callmethod(this, "document", [0]);
              var call889 = callmethod(call888,"addEventListener", [2], string887, var_keyUpListener);
              lineNumber = 356
              lineNumber = 346
              lineNumber = 356
              var string890 = new GraceString("canvas");
              var call891 = callmethod(var_dom,"document", [0]);
              var call892 = callmethod(call891,"createElement", [1], string890);
              onSelf = true;
              var call893 = callmethod(this, "backingCanvas:=", [1], call892);
              lineNumber = 358
              lineNumber = 356
              lineNumber = 357
              onSelf = true;
              var call894 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call895 = callmethod(this, "backingCanvas", [0]);
              var call896 = callmethod(call895,"height:=", [1], call894);
              lineNumber = 359
              lineNumber = 356
              lineNumber = 358
              onSelf = true;
              var call897 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call898 = callmethod(this, "backingCanvas", [0]);
              var call899 = callmethod(call898,"width:=", [1], call897);
              lineNumber = 359
              lineNumber = 356
              lineNumber = 359
              var string900 = new GraceString("2d");
              onSelf = true;
              var call901 = callmethod(this, "backingCanvas", [0]);
              var call902 = callmethod(call901,"getContext", [1], string900);
              onSelf = true;
              var call903 = callmethod(this, "backingContext:=", [1], call902);
              lineNumber = 360
              lineNumber = 356
              lineNumber = 360
              var string904 = new GraceString("2d");
              onSelf = true;
              var call905 = callmethod(this, "canvas", [0]);
              var call906 = callmethod(call905,"getContext", [1], string904);
              onSelf = true;
              var call907 = callmethod(this, "mctx:=", [1], call906);
              lineNumber = 363
              var string908 = new GraceString("doggo.jpg");
              onSelf = true;
              var call909 = callmethod(this, "setBackground", [1], string908);
              lineNumber = 366
              var call910 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call911 = callmethod(call910, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call912 = callmethod(call911, "setWorld", [1], this);
              lineNumber = 369
              lineNumber = 368
              var_kitten = this;
              lineNumber = 370
              lineNumber = 366
              lineNumber = 369
              var bool913 = new GraceBoolean(true)
              onSelf = true;
              var call914 = callmethod(this, "isInit:=", [1], bool913);
              return call914
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func782.paramCounts = [
            0,
          ];
          func782.variableArities = [
            false,
          ];
          obj780.methods["init"] = func782;
          func782.definitionLine = 306;
          func782.definitionModule = "kitty";
          var func915 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func915.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 376
              lineNumber = 366
              lineNumber = 375
              var bool916 = new GraceBoolean(true)
              onSelf = true;
              var call917 = callmethod(this, "isRunning:=", [1], bool916);
              lineNumber = 376
              var block918 = Grace_allocObject();
              block918.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block918.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block918.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block918.methods["match"] = GraceBlock_match;
              block918.methods["prefix?"] = GraceBlock_lift;
              block918.receiver = this;
              block918.className = 'block<kitty:376>';
              block918.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call919 = callmethod(this, "isRunning", [0]);
                return call919;
              };
              lineNumber = 380
              var block920 = Grace_allocObject();
              block920.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block920.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block920.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block920.methods["match"] = GraceBlock_match;
              block920.methods["prefix?"] = GraceBlock_lift;
              block920.receiver = this;
              block920.className = 'block<kitty:380>';
              block920.real = function(
              ) {
                sourceObject = this;
                lineNumber = 377
                onSelf = true;
                var call921 = callmethod(this, "tick", [0]);
                return call921;
              };
              lineNumber = 376
              var call922 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block918, new GraceNum(10), block920);
              return call922
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func915.paramCounts = [
            0,
          ];
          func915.variableArities = [
            false,
          ];
          obj780.methods["start"] = func915;
          func915.definitionLine = 373;
          func915.definitionModule = "kitty";
          var func923 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func923.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 389
              lineNumber = 366
              lineNumber = 388
              onSelf = true;
              var call924 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call925 = callmethod(this, "mctx", [0]);
              var call926 = callmethod(call925,"fillStyle:=", [1], call924);
              lineNumber = 389
              onSelf = true;
              var call927 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call928 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call929 = callmethod(this, "mctx", [0]);
              var call930 = callmethod(call929,"fillRect", [4], new GraceNum(0), new GraceNum(0), call927, call928);
              lineNumber = 390
              onSelf = true;
              var call931 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call932 = callmethod(this, "mctx", [0]);
              var call933 = callmethod(call932,"drawImage", [3], call931, new GraceNum(0), new GraceNum(0));
              lineNumber = 391
              onSelf = true;
              var call934 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call936 = callmethod(this, "canvasWidth", [0]);
              var quotient938 = callmethod(call936, "/", [1], new GraceNum(2));
              onSelf = true;
              var call940 = callmethod(this, "canvasHeight", [0]);
              var quotient942 = callmethod(call940, "/", [1], new GraceNum(2));
              onSelf = true;
              var call943 = callmethod(this, "background", [0]);
              var call944 = callmethod(call943,"draw", [4], call934, quotient938, quotient942, new GraceNum(0));
              lineNumber = 394
              onSelf = true;
              var call945 = callmethod(this, "updateAction", [0]);
              var call946 = callmethod(call945,"apply", [0]);
              lineNumber = 397
              onSelf = true;
              var call947 = callmethod(this, "entities", [0]);
              lineNumber = 404
              var block948 = Grace_allocObject();
              block948.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block948.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block948.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block948.methods["match"] = GraceBlock_match;
              block948.methods["prefix?"] = GraceBlock_lift;
              block948.receiver = this;
              block948.className = 'block<kitty:404>';
              block948.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 398
                var call949 = callmethod(var_entity,"tick", [0]);
                lineNumber = 400
                onSelf = true;
                var call950 = callmethod(this, "mctx", [0]);
                var call951 = callmethod(var_entity,"draw", [3], call950, new GraceNum(0), new GraceNum(0));
                return call951;
              };
              var call952 = callmethod(Grace_prelude,"for()do", [1, 1], call947, block948);
              return call952
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func923.paramCounts = [
            0,
          ];
          func923.variableArities = [
            false,
          ];
          obj780.methods["tick"] = func923;
          func923.definitionLine = 383;
          func923.definitionModule = "kitty";
          var func953 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func953.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 407
              var string954 = new GraceString("WORLD STOPPING...");
              var call955 = Grace_print(string954);
              lineNumber = 409
              lineNumber = 398
              lineNumber = 408
              var bool956 = new GraceBoolean(false)
              onSelf = true;
              var call957 = callmethod(this, "isRunning:=", [1], bool956);
              lineNumber = 409
              onSelf = true;
              var call958 = callmethod(this, "destroyAction", [0]);
              var call959 = callmethod(call958,"apply", [0]);
              lineNumber = 410
              onSelf = true;
              var call960 = callmethod(this, "entities", [0]);
              lineNumber = 413
              var block961 = Grace_allocObject();
              block961.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block961.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block961.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block961.methods["match"] = GraceBlock_match;
              block961.methods["prefix?"] = GraceBlock_lift;
              block961.receiver = this;
              block961.className = 'block<kitty:413>';
              block961.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 411
                var call962 = callmethod(var_entity,"kill", [0]);
                return call962;
              };
              var call963 = callmethod(Grace_prelude,"for()do", [1, 1], call960, block961);
              lineNumber = 413
              var string964 = new GraceString("mousedown");
              onSelf = true;
              var call965 = callmethod(this, "canvas", [0]);
              var call966 = callmethod(call965,"removeEventListener", [2], string964, var_mouseDownListener);
              lineNumber = 414
              var string967 = new GraceString("mousemove");
              onSelf = true;
              var call968 = callmethod(this, "canvas", [0]);
              var call969 = callmethod(call968,"removeEventListener", [2], string967, var_mouseMoveListener);
              lineNumber = 415
              var string970 = new GraceString("keydown");
              onSelf = true;
              var call971 = callmethod(this, "document", [0]);
              var call972 = callmethod(call971,"removeEventListener", [2], string970, var_keyDownListener);
              lineNumber = 416
              var string973 = new GraceString("keyup");
              onSelf = true;
              var call974 = callmethod(this, "document", [0]);
              var call975 = callmethod(call974,"removeEventListener", [2], string973, var_keyUpListener);
              return call975
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func953.paramCounts = [
            0,
          ];
          func953.variableArities = [
            false,
          ];
          obj780.methods["stop"] = func953;
          func953.definitionLine = 406;
          func953.definitionModule = "kitty";
          var func976 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func976.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 420
              lineNumber = 411
              lineNumber = 420
              onSelf = true;
              var call977 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call978 = callmethod(this, "canvasHeight", [0]);
              var call979 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call980 = callmethod(call979, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call981 = callmethod(call980, "Image()width()height", [1, 1, 1], var_url, call977, call978);
              onSelf = true;
              var call982 = callmethod(this, "background:=", [1], call981);
              return call982
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func976.paramCounts = [
            1,
          ];
          func976.variableArities = [
            false,
          ];
          obj780.methods["setBackground"] = func976;
          func976.definitionLine = 419;
          func976.definitionModule = "kitty";
          var func983 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func983.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 424
              onSelf = true;
              var call984 = callmethod(this, "entities", [0]);
              var call985 = callmethod(call984,"push", [1], var_e);
              return call985
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func983.paramCounts = [
            1,
          ];
          func983.variableArities = [
            false,
          ];
          obj780.methods["addEntity"] = func983;
          func983.definitionLine = 423;
          func983.definitionModule = "kitty";
          var func986 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func986.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 429
              lineNumber = 428
              onSelf = true;
              var call987 = callmethod(this, "mctx", [0]);
              return call987
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func986.paramCounts = [
            0,
          ];
          func986.variableArities = [
            false,
          ];
          obj780.methods["getContext"] = func986;
          func986.definitionLine = 427;
          func986.definitionModule = "kitty";
          var func988 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func988.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 433
              lineNumber = 432
              onSelf = true;
              var call989 = callmethod(this, "width", [0]);
              onSelf = true;
              var call991 = callmethod(this, "canvasWidth", [0]);
              var quotient993 = callmethod(call991, "/", [1], call989);
              return quotient993
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func988.paramCounts = [
            0,
          ];
          func988.variableArities = [
            false,
          ];
          obj780.methods["moveWidthMultipler"] = func988;
          func988.definitionLine = 431;
          func988.definitionModule = "kitty";
          var func994 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func994.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 437
              lineNumber = 436
              onSelf = true;
              var call995 = callmethod(this, "height", [0]);
              onSelf = true;
              var call997 = callmethod(this, "canvasHeight", [0]);
              var quotient999 = callmethod(call997, "/", [1], call995);
              return quotient999
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func994.paramCounts = [
            0,
          ];
          func994.variableArities = [
            false,
          ];
          obj780.methods["moveHeightMultipler"] = func994;
          func994.definitionLine = 435;
          func994.definitionModule = "kitty";
          var func1000 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1000.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 441
              lineNumber = 420
              lineNumber = 440
              onSelf = true;
              var call1001 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1001
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1000.paramCounts = [
            1,
          ];
          func1000.variableArities = [
            false,
          ];
          obj780.methods["setUpdateAction"] = func1000;
          func1000.definitionLine = 439;
          func1000.definitionModule = "kitty";
          var func1002 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1002.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 445
              lineNumber = 420
              lineNumber = 444
              onSelf = true;
              var call1003 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1003
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1002.paramCounts = [
            1,
          ];
          func1002.variableArities = [
            false,
          ];
          obj780.methods["setDestroyAction"] = func1002;
          func1002.definitionLine = 443;
          func1002.definitionModule = "kitty";
          sourceObject = obj780;
          lineNumber = 275
          obj780.data["width"] = var_width__39__;
          var reader_kitty_width_1004 = function() {
            return this.data["width"];
          }
          obj780.methods["width"] = reader_kitty_width_1004;
          obj780.data["width"] = var_width__39__;
          var writer_kitty_width_1004 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj780.methods["width:="] = writer_kitty_width_1004;
          lineNumber = 276;
          moduleName = "kitty";
          lineNumber = 275
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 276
          obj780.data["height"] = var_height__39__;
          var reader_kitty_height_1005 = function() {
            return this.data["height"];
          }
          obj780.methods["height"] = reader_kitty_height_1005;
          obj780.data["height"] = var_height__39__;
          var writer_kitty_height_1005 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj780.methods["height:="] = writer_kitty_height_1005;
          lineNumber = 277;
          moduleName = "kitty";
          lineNumber = 276
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 277
          obj780.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1006 = function() {
            return this.data["tag"];
          }
          obj780.methods["tag"] = reader_kitty_tag_1006;
          obj780.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1006 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj780.methods["tag:="] = writer_kitty_tag_1006;
          lineNumber = 279;
          moduleName = "kitty";
          lineNumber = 277
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["background"] = undefined;
          var reader_kitty_background_1007 = function() {
            return this.data["background"];
          }
          obj780.methods["background"] = reader_kitty_background_1007;
          obj780.data["background"] = undefined;
          var writer_kitty_background_1007 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj780.methods["background:="] = writer_kitty_background_1007;
          reader_kitty_background_1007.confidential = true;
          writer_kitty_background_1007.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 280
          var string1008 = new GraceString("black");
          obj780.data["backgroundColour"] = string1008;
          var reader_kitty_backgroundColour_1009 = function() {
            return this.data["backgroundColour"];
          }
          obj780.methods["backgroundColour"] = reader_kitty_backgroundColour_1009;
          obj780.data["backgroundColour"] = string1008;
          var writer_kitty_backgroundColour_1009 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj780.methods["backgroundColour:="] = writer_kitty_backgroundColour_1009;
          reader_kitty_backgroundColour_1009.confidential = true;
          writer_kitty_backgroundColour_1009.confidential = true;
          lineNumber = 282;
          moduleName = "kitty";
          lineNumber = 280
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1008)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["document"] = undefined;
          var reader_kitty_document_1010 = function() {
            return this.data["document"];
          }
          obj780.methods["document"] = reader_kitty_document_1010;
          obj780.data["document"] = undefined;
          var writer_kitty_document_1010 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj780.methods["document:="] = writer_kitty_document_1010;
          reader_kitty_document_1010.confidential = true;
          writer_kitty_document_1010.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1011 = function() {
            return this.data["backingCanvas"];
          }
          obj780.methods["backingCanvas"] = reader_kitty_backingCanvas_1011;
          obj780.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1011 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj780.methods["backingCanvas:="] = writer_kitty_backingCanvas_1011;
          reader_kitty_backingCanvas_1011.confidential = true;
          writer_kitty_backingCanvas_1011.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1012 = function() {
            return this.data["backingContext"];
          }
          obj780.methods["backingContext"] = reader_kitty_backingContext_1012;
          obj780.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1012 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj780.methods["backingContext:="] = writer_kitty_backingContext_1012;
          reader_kitty_backingContext_1012.confidential = true;
          writer_kitty_backingContext_1012.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["canvas"] = undefined;
          var reader_kitty_canvas_1013 = function() {
            return this.data["canvas"];
          }
          obj780.methods["canvas"] = reader_kitty_canvas_1013;
          obj780.data["canvas"] = undefined;
          var writer_kitty_canvas_1013 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj780.methods["canvas:="] = writer_kitty_canvas_1013;
          reader_kitty_canvas_1013.confidential = true;
          writer_kitty_canvas_1013.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1014 = function() {
            return this.data["canvasWidth"];
          }
          obj780.methods["canvasWidth"] = reader_kitty_canvasWidth_1014;
          obj780.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1014 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj780.methods["canvasWidth:="] = writer_kitty_canvasWidth_1014;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1015 = function() {
            return this.data["canvasHeight"];
          }
          obj780.methods["canvasHeight"] = reader_kitty_canvasHeight_1015;
          obj780.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1015 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj780.methods["canvasHeight:="] = writer_kitty_canvasHeight_1015;
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 291
          var call1016 = callmethod(var_collections,"list", [0]);
          var call1017 = callmethod(call1016,"new", [0]);
          obj780.data["entities"] = call1017;
          var reader_kitty_entities_1018 = function() {
            return this.data["entities"];
          }
          obj780.methods["entities"] = reader_kitty_entities_1018;
          obj780.data["entities"] = call1017;
          var writer_kitty_entities_1018 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj780.methods["entities:="] = writer_kitty_entities_1018;
          reader_kitty_entities_1018.confidential = true;
          writer_kitty_entities_1018.confidential = true;
          lineNumber = 293;
          moduleName = "kitty";
          lineNumber = 291
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1017)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 293
          var bool1019 = new GraceBoolean(false)
          obj780.data["isInit"] = bool1019;
          var reader_kitty_isInit_1020 = function() {
            return this.data["isInit"];
          }
          obj780.methods["isInit"] = reader_kitty_isInit_1020;
          obj780.data["isInit"] = bool1019;
          var writer_kitty_isInit_1020 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj780.methods["isInit:="] = writer_kitty_isInit_1020;
          reader_kitty_isInit_1020.confidential = true;
          writer_kitty_isInit_1020.confidential = true;
          lineNumber = 294;
          moduleName = "kitty";
          lineNumber = 293
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1019)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 294
          var bool1021 = new GraceBoolean(false)
          obj780.data["isRunning"] = bool1021;
          var reader_kitty_isRunning_1022 = function() {
            return this.data["isRunning"];
          }
          obj780.methods["isRunning"] = reader_kitty_isRunning_1022;
          obj780.data["isRunning"] = bool1021;
          var writer_kitty_isRunning_1022 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj780.methods["isRunning:="] = writer_kitty_isRunning_1022;
          reader_kitty_isRunning_1022.confidential = true;
          writer_kitty_isRunning_1022.confidential = true;
          lineNumber = 296;
          moduleName = "kitty";
          lineNumber = 294
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1021)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["mctx"] = undefined;
          var reader_kitty_mctx_1023 = function() {
            return this.data["mctx"];
          }
          obj780.methods["mctx"] = reader_kitty_mctx_1023;
          obj780.data["mctx"] = undefined;
          var writer_kitty_mctx_1023 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj780.methods["mctx:="] = writer_kitty_mctx_1023;
          reader_kitty_mctx_1023.confidential = true;
          writer_kitty_mctx_1023.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          obj780.data["ent"] = undefined;
          var reader_kitty_ent_1024 = function() {
            return this.data["ent"];
          }
          obj780.methods["ent"] = reader_kitty_ent_1024;
          obj780.data["ent"] = undefined;
          var writer_kitty_ent_1024 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj780.methods["ent:="] = writer_kitty_ent_1024;
          reader_kitty_ent_1024.confidential = true;
          writer_kitty_ent_1024.confidential = true;
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 301
          var block1025 = Grace_allocObject();
          block1025.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1025.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1025.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1025.methods["match"] = GraceBlock_match;
          block1025.methods["prefix?"] = GraceBlock_lift;
          block1025.receiver = this;
          block1025.className = 'block<kitty:301>';
          block1025.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj780.data["updateAction"] = block1025;
          var reader_kitty_updateAction_1026 = function() {
            return this.data["updateAction"];
          }
          obj780.methods["updateAction"] = reader_kitty_updateAction_1026;
          obj780.data["updateAction"] = block1025;
          var writer_kitty_updateAction_1026 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj780.methods["updateAction:="] = writer_kitty_updateAction_1026;
          reader_kitty_updateAction_1026.confidential = true;
          writer_kitty_updateAction_1026.confidential = true;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 300
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1025)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 303
          var block1027 = Grace_allocObject();
          block1027.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1027.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1027.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1027.methods["match"] = GraceBlock_match;
          block1027.methods["prefix?"] = GraceBlock_lift;
          block1027.receiver = this;
          block1027.className = 'block<kitty:303>';
          block1027.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj780.data["destroyAction"] = block1027;
          var reader_kitty_destroyAction_1028 = function() {
            return this.data["destroyAction"];
          }
          obj780.methods["destroyAction"] = reader_kitty_destroyAction_1028;
          obj780.data["destroyAction"] = block1027;
          var writer_kitty_destroyAction_1028 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj780.methods["destroyAction:="] = writer_kitty_destroyAction_1028;
          reader_kitty_destroyAction_1028.confidential = true;
          writer_kitty_destroyAction_1028.confidential = true;
          lineNumber = 303;
          moduleName = "kitty";
          lineNumber = 301
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1027)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj780.mutable = true;
          sourceObject = obj780;
          lineNumber = 303
          onSelf = true;
          var call1029 = callmethod(this, "init", [0]);
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          sourceObject = obj780;
          superDepth = origSuperDepth;
        }
        obj_init_780.apply(obj780, []);
        return obj780
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func779.paramCounts = [
      3,
    ];
    func779.variableArities = [
      false,
    ];
    obj777.methods["new"] = func779;
    func779.definitionLine = 272;
    func779.definitionModule = "kitty";
    var func1030 = function(argcv) {
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
        var obj1031 = Grace_allocObject();
        obj1031.definitionModule = "kitty";
        obj1031.definitionLine = 272;
        var inho1031 = inheritingObject;
        while (inho1031.superobj) inho1031 = inho1031.superobj;
        inho1031.superobj = obj1031;
        obj1031.data = inheritingObject.data;
        obj1031.outer = this;
        var reader_kitty_outer_1032 = function() {
          return this.outer;
        }
        obj1031.methods["outer"] = reader_kitty_outer_1032;
        function obj_init_1031() {
          var origSuperDepth = superDepth;
          superDepth = obj1031;
          obj1031.annotations = [];
          var func1033 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1033.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 314
              var if1034 = var_done;
              lineNumber = 310
              onSelf = true;
              var call1035 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1035)) {
                lineNumber = 312
                lineNumber = 311
                var bool1036 = new GraceBoolean(false)
                return bool1036
              }
              lineNumber = 315
              lineNumber = 291
              lineNumber = 314
              var call1037 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1038 = callmethod(this, "document:=", [1], call1037);
              lineNumber = 315
              lineNumber = 314
              lineNumber = 315
              var string1039 = new GraceString("standard-canvas");
              onSelf = true;
              var call1040 = callmethod(this, "document", [0]);
              var call1041 = callmethod(call1040,"getElementById", [1], string1039);
              onSelf = true;
              var call1042 = callmethod(this, "canvas:=", [1], call1041);
              lineNumber = 317
              lineNumber = 314
              lineNumber = 316
              onSelf = true;
              var call1043 = callmethod(this, "canvas", [0]);
              var call1044 = callmethod(call1043,"width", [0]);
              onSelf = true;
              var call1045 = callmethod(this, "canvasWidth:=", [1], call1044);
              lineNumber = 320
              lineNumber = 316
              lineNumber = 317
              onSelf = true;
              var call1046 = callmethod(this, "canvas", [0]);
              var call1047 = callmethod(call1046,"height", [0]);
              onSelf = true;
              var call1048 = callmethod(this, "canvasHeight:=", [1], call1047);
              lineNumber = 331
              var block1049 = Grace_allocObject();
              block1049.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1049.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1049.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1049.methods["match"] = GraceBlock_match;
              block1049.methods["prefix?"] = GraceBlock_lift;
              block1049.receiver = this;
              block1049.className = 'block<kitty:331>';
              block1049.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 323
                lineNumber = 322
                onSelf = true;
                var call1050 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1052 = callmethod(this, "canvas", [0]);
                var call1053 = callmethod(call1052,"offsetWidth", [0]);
                onSelf = true;
                var call1055 = callmethod(this, "canvas", [0]);
                var call1056 = callmethod(call1055,"offsetLeft", [0]);
                var call1058 = callmethod(var_ev,"clientX", [0]);
                var diff1060 = callmethod(call1058, "-", [1], call1056);
                var quotient1062 = callmethod(diff1060, "/", [1], call1053);
                var prod1064 = callmethod(quotient1062, "*", [1], call1050);
                var var_x = prod1064;
                lineNumber = 323;
                moduleName = "kitty";
                lineNumber = 322
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 324
                lineNumber = 323
                onSelf = true;
                var call1065 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1067 = callmethod(this, "canvas", [0]);
                var call1068 = callmethod(call1067,"offsetHeight", [0]);
                onSelf = true;
                var call1070 = callmethod(this, "canvas", [0]);
                var call1071 = callmethod(call1070,"offsetTop", [0]);
                var call1073 = callmethod(var_ev,"clientY", [0]);
                var diff1075 = callmethod(call1073, "-", [1], call1071);
                var quotient1077 = callmethod(diff1075, "/", [1], call1068);
                var prod1079 = callmethod(quotient1077, "*", [1], call1065);
                var var_y = prod1079;
                lineNumber = 324;
                moduleName = "kitty";
                lineNumber = 323
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 324
                lineNumber = 323
                lineNumber = 324
                var call1080 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1081 = callmethod(var_mouse,"position:=", [1], call1080);
                lineNumber = 327
                onSelf = true;
                var call1082 = callmethod(this, "entities", [0]);
                lineNumber = 330
                var block1083 = Grace_allocObject();
                block1083.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1083.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1083.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1083.methods["match"] = GraceBlock_match;
                block1083.methods["prefix?"] = GraceBlock_lift;
                block1083.receiver = this;
                block1083.className = 'block<kitty:330>';
                block1083.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 328
                  var call1084 = callmethod(var_entity,"mouseDown", [0]);
                  return call1084;
                };
                var call1085 = callmethod(Grace_prelude,"for()do", [1, 1], call1082, block1083);
                return call1085;
              };
              var_mouseDownListener = block1049;
              lineNumber = 331
              var string1086 = new GraceString("mousedown");
              onSelf = true;
              var call1087 = callmethod(this, "canvas", [0]);
              var call1088 = callmethod(call1087,"addEventListener", [2], string1086, var_mouseDownListener);
              lineNumber = 338
              var block1089 = Grace_allocObject();
              block1089.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1089.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1089.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1089.methods["match"] = GraceBlock_match;
              block1089.methods["prefix?"] = GraceBlock_lift;
              block1089.receiver = this;
              block1089.className = 'block<kitty:338>';
              block1089.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 335
                lineNumber = 334
                onSelf = true;
                var call1090 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1092 = callmethod(this, "canvas", [0]);
                var call1093 = callmethod(call1092,"offsetWidth", [0]);
                onSelf = true;
                var call1095 = callmethod(this, "canvas", [0]);
                var call1096 = callmethod(call1095,"offsetLeft", [0]);
                var call1098 = callmethod(var_ev,"clientX", [0]);
                var diff1100 = callmethod(call1098, "-", [1], call1096);
                var quotient1102 = callmethod(diff1100, "/", [1], call1093);
                var prod1104 = callmethod(quotient1102, "*", [1], call1090);
                var var_x = prod1104;
                lineNumber = 335;
                moduleName = "kitty";
                lineNumber = 334
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 336
                lineNumber = 335
                onSelf = true;
                var call1105 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1107 = callmethod(this, "canvas", [0]);
                var call1108 = callmethod(call1107,"offsetHeight", [0]);
                onSelf = true;
                var call1110 = callmethod(this, "canvas", [0]);
                var call1111 = callmethod(call1110,"offsetTop", [0]);
                var call1113 = callmethod(var_ev,"clientY", [0]);
                var diff1115 = callmethod(call1113, "-", [1], call1111);
                var quotient1117 = callmethod(diff1115, "/", [1], call1108);
                var prod1119 = callmethod(quotient1117, "*", [1], call1105);
                var var_y = prod1119;
                lineNumber = 336;
                moduleName = "kitty";
                lineNumber = 335
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 336
                lineNumber = 335
                lineNumber = 336
                var call1120 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1121 = callmethod(var_mouse,"position:=", [1], call1120);
                return call1121;
              };
              var_mouseMoveListener = block1089;
              lineNumber = 338
              var string1122 = new GraceString("mousemove");
              onSelf = true;
              var call1123 = callmethod(this, "canvas", [0]);
              var call1124 = callmethod(call1123,"addEventListener", [2], string1122, var_mouseMoveListener);
              lineNumber = 348
              var block1125 = Grace_allocObject();
              block1125.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1125.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1125.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1125.methods["match"] = GraceBlock_match;
              block1125.methods["prefix?"] = GraceBlock_lift;
              block1125.receiver = this;
              block1125.className = 'block<kitty:348>';
              block1125.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 346
                var if1126 = var_done;
                lineNumber = 343
                var call1128 = callmethod(var_ev,"keyCode", [0]);
                var opresult1130 = callmethod(call1128, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1130)) {
                  lineNumber = 344
                  onSelf = true;
                  var call1131 = callmethod(this, "stop", [0]);
                  if1126 = call1131;
                }
                lineNumber = 347
                lineNumber = 346
                var call1132 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1132;
                return call1132;
              };
              var_keyDownListener = block1125;
              lineNumber = 348
              var string1133 = new GraceString("keydown");
              onSelf = true;
              var call1134 = callmethod(this, "document", [0]);
              var call1135 = callmethod(call1134,"addEventListener", [2], string1133, var_keyDownListener);
              lineNumber = 354
              var block1136 = Grace_allocObject();
              block1136.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1136.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1136.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1136.methods["match"] = GraceBlock_match;
              block1136.methods["prefix?"] = GraceBlock_lift;
              block1136.receiver = this;
              block1136.className = 'block<kitty:354>';
              block1136.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 353
                lineNumber = 352
                var call1137 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1137;
                return call1137;
              };
              var_keyUpListener = block1136;
              lineNumber = 354
              var string1138 = new GraceString("keyup");
              onSelf = true;
              var call1139 = callmethod(this, "document", [0]);
              var call1140 = callmethod(call1139,"addEventListener", [2], string1138, var_keyUpListener);
              lineNumber = 356
              lineNumber = 346
              lineNumber = 356
              var string1141 = new GraceString("canvas");
              var call1142 = callmethod(var_dom,"document", [0]);
              var call1143 = callmethod(call1142,"createElement", [1], string1141);
              onSelf = true;
              var call1144 = callmethod(this, "backingCanvas:=", [1], call1143);
              lineNumber = 358
              lineNumber = 356
              lineNumber = 357
              onSelf = true;
              var call1145 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1146 = callmethod(this, "backingCanvas", [0]);
              var call1147 = callmethod(call1146,"height:=", [1], call1145);
              lineNumber = 359
              lineNumber = 356
              lineNumber = 358
              onSelf = true;
              var call1148 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1149 = callmethod(this, "backingCanvas", [0]);
              var call1150 = callmethod(call1149,"width:=", [1], call1148);
              lineNumber = 359
              lineNumber = 356
              lineNumber = 359
              var string1151 = new GraceString("2d");
              onSelf = true;
              var call1152 = callmethod(this, "backingCanvas", [0]);
              var call1153 = callmethod(call1152,"getContext", [1], string1151);
              onSelf = true;
              var call1154 = callmethod(this, "backingContext:=", [1], call1153);
              lineNumber = 360
              lineNumber = 356
              lineNumber = 360
              var string1155 = new GraceString("2d");
              onSelf = true;
              var call1156 = callmethod(this, "canvas", [0]);
              var call1157 = callmethod(call1156,"getContext", [1], string1155);
              onSelf = true;
              var call1158 = callmethod(this, "mctx:=", [1], call1157);
              lineNumber = 363
              var string1159 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1160 = callmethod(this, "setBackground", [1], string1159);
              lineNumber = 366
              var call1161 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1162 = callmethod(call1161, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1163 = callmethod(call1162, "setWorld", [1], this);
              lineNumber = 369
              lineNumber = 368
              var_kitten = this;
              lineNumber = 370
              lineNumber = 366
              lineNumber = 369
              var bool1164 = new GraceBoolean(true)
              onSelf = true;
              var call1165 = callmethod(this, "isInit:=", [1], bool1164);
              return call1165
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1033.paramCounts = [
            0,
          ];
          func1033.variableArities = [
            false,
          ];
          obj1031.methods["init"] = func1033;
          func1033.definitionLine = 306;
          func1033.definitionModule = "kitty";
          var func1166 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 376
              lineNumber = 366
              lineNumber = 375
              var bool1167 = new GraceBoolean(true)
              onSelf = true;
              var call1168 = callmethod(this, "isRunning:=", [1], bool1167);
              lineNumber = 376
              var block1169 = Grace_allocObject();
              block1169.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1169.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1169.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1169.methods["match"] = GraceBlock_match;
              block1169.methods["prefix?"] = GraceBlock_lift;
              block1169.receiver = this;
              block1169.className = 'block<kitty:376>';
              block1169.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1170 = callmethod(this, "isRunning", [0]);
                return call1170;
              };
              lineNumber = 380
              var block1171 = Grace_allocObject();
              block1171.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1171.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1171.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1171.methods["match"] = GraceBlock_match;
              block1171.methods["prefix?"] = GraceBlock_lift;
              block1171.receiver = this;
              block1171.className = 'block<kitty:380>';
              block1171.real = function(
              ) {
                sourceObject = this;
                lineNumber = 377
                onSelf = true;
                var call1172 = callmethod(this, "tick", [0]);
                return call1172;
              };
              lineNumber = 376
              var call1173 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1169, new GraceNum(10), block1171);
              return call1173
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1166.paramCounts = [
            0,
          ];
          func1166.variableArities = [
            false,
          ];
          obj1031.methods["start"] = func1166;
          func1166.definitionLine = 373;
          func1166.definitionModule = "kitty";
          var func1174 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1174.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 389
              lineNumber = 366
              lineNumber = 388
              onSelf = true;
              var call1175 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1176 = callmethod(this, "mctx", [0]);
              var call1177 = callmethod(call1176,"fillStyle:=", [1], call1175);
              lineNumber = 389
              onSelf = true;
              var call1178 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1179 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1180 = callmethod(this, "mctx", [0]);
              var call1181 = callmethod(call1180,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1178, call1179);
              lineNumber = 390
              onSelf = true;
              var call1182 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1183 = callmethod(this, "mctx", [0]);
              var call1184 = callmethod(call1183,"drawImage", [3], call1182, new GraceNum(0), new GraceNum(0));
              lineNumber = 391
              onSelf = true;
              var call1185 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1187 = callmethod(this, "canvasWidth", [0]);
              var quotient1189 = callmethod(call1187, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1191 = callmethod(this, "canvasHeight", [0]);
              var quotient1193 = callmethod(call1191, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1194 = callmethod(this, "background", [0]);
              var call1195 = callmethod(call1194,"draw", [4], call1185, quotient1189, quotient1193, new GraceNum(0));
              lineNumber = 394
              onSelf = true;
              var call1196 = callmethod(this, "updateAction", [0]);
              var call1197 = callmethod(call1196,"apply", [0]);
              lineNumber = 397
              onSelf = true;
              var call1198 = callmethod(this, "entities", [0]);
              lineNumber = 404
              var block1199 = Grace_allocObject();
              block1199.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1199.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1199.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1199.methods["match"] = GraceBlock_match;
              block1199.methods["prefix?"] = GraceBlock_lift;
              block1199.receiver = this;
              block1199.className = 'block<kitty:404>';
              block1199.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 398
                var call1200 = callmethod(var_entity,"tick", [0]);
                lineNumber = 400
                onSelf = true;
                var call1201 = callmethod(this, "mctx", [0]);
                var call1202 = callmethod(var_entity,"draw", [3], call1201, new GraceNum(0), new GraceNum(0));
                return call1202;
              };
              var call1203 = callmethod(Grace_prelude,"for()do", [1, 1], call1198, block1199);
              return call1203
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1174.paramCounts = [
            0,
          ];
          func1174.variableArities = [
            false,
          ];
          obj1031.methods["tick"] = func1174;
          func1174.definitionLine = 383;
          func1174.definitionModule = "kitty";
          var func1204 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1204.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 407
              var string1205 = new GraceString("WORLD STOPPING...");
              var call1206 = Grace_print(string1205);
              lineNumber = 409
              lineNumber = 398
              lineNumber = 408
              var bool1207 = new GraceBoolean(false)
              onSelf = true;
              var call1208 = callmethod(this, "isRunning:=", [1], bool1207);
              lineNumber = 409
              onSelf = true;
              var call1209 = callmethod(this, "destroyAction", [0]);
              var call1210 = callmethod(call1209,"apply", [0]);
              lineNumber = 410
              onSelf = true;
              var call1211 = callmethod(this, "entities", [0]);
              lineNumber = 413
              var block1212 = Grace_allocObject();
              block1212.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1212.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1212.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1212.methods["match"] = GraceBlock_match;
              block1212.methods["prefix?"] = GraceBlock_lift;
              block1212.receiver = this;
              block1212.className = 'block<kitty:413>';
              block1212.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 411
                var call1213 = callmethod(var_entity,"kill", [0]);
                return call1213;
              };
              var call1214 = callmethod(Grace_prelude,"for()do", [1, 1], call1211, block1212);
              lineNumber = 413
              var string1215 = new GraceString("mousedown");
              onSelf = true;
              var call1216 = callmethod(this, "canvas", [0]);
              var call1217 = callmethod(call1216,"removeEventListener", [2], string1215, var_mouseDownListener);
              lineNumber = 414
              var string1218 = new GraceString("mousemove");
              onSelf = true;
              var call1219 = callmethod(this, "canvas", [0]);
              var call1220 = callmethod(call1219,"removeEventListener", [2], string1218, var_mouseMoveListener);
              lineNumber = 415
              var string1221 = new GraceString("keydown");
              onSelf = true;
              var call1222 = callmethod(this, "document", [0]);
              var call1223 = callmethod(call1222,"removeEventListener", [2], string1221, var_keyDownListener);
              lineNumber = 416
              var string1224 = new GraceString("keyup");
              onSelf = true;
              var call1225 = callmethod(this, "document", [0]);
              var call1226 = callmethod(call1225,"removeEventListener", [2], string1224, var_keyUpListener);
              return call1226
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1204.paramCounts = [
            0,
          ];
          func1204.variableArities = [
            false,
          ];
          obj1031.methods["stop"] = func1204;
          func1204.definitionLine = 406;
          func1204.definitionModule = "kitty";
          var func1227 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1227.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 420
              lineNumber = 411
              lineNumber = 420
              onSelf = true;
              var call1228 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1229 = callmethod(this, "canvasHeight", [0]);
              var call1230 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1231 = callmethod(call1230, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1232 = callmethod(call1231, "Image()width()height", [1, 1, 1], var_url, call1228, call1229);
              onSelf = true;
              var call1233 = callmethod(this, "background:=", [1], call1232);
              return call1233
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1227.paramCounts = [
            1,
          ];
          func1227.variableArities = [
            false,
          ];
          obj1031.methods["setBackground"] = func1227;
          func1227.definitionLine = 419;
          func1227.definitionModule = "kitty";
          var func1234 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1234.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 424
              onSelf = true;
              var call1235 = callmethod(this, "entities", [0]);
              var call1236 = callmethod(call1235,"push", [1], var_e);
              return call1236
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1234.paramCounts = [
            1,
          ];
          func1234.variableArities = [
            false,
          ];
          obj1031.methods["addEntity"] = func1234;
          func1234.definitionLine = 423;
          func1234.definitionModule = "kitty";
          var func1237 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 429
              lineNumber = 428
              onSelf = true;
              var call1238 = callmethod(this, "mctx", [0]);
              return call1238
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1237.paramCounts = [
            0,
          ];
          func1237.variableArities = [
            false,
          ];
          obj1031.methods["getContext"] = func1237;
          func1237.definitionLine = 427;
          func1237.definitionModule = "kitty";
          var func1239 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1239.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 433
              lineNumber = 432
              onSelf = true;
              var call1240 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1242 = callmethod(this, "canvasWidth", [0]);
              var quotient1244 = callmethod(call1242, "/", [1], call1240);
              return quotient1244
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1239.paramCounts = [
            0,
          ];
          func1239.variableArities = [
            false,
          ];
          obj1031.methods["moveWidthMultipler"] = func1239;
          func1239.definitionLine = 431;
          func1239.definitionModule = "kitty";
          var func1245 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1245.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 437
              lineNumber = 436
              onSelf = true;
              var call1246 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1248 = callmethod(this, "canvasHeight", [0]);
              var quotient1250 = callmethod(call1248, "/", [1], call1246);
              return quotient1250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1245.paramCounts = [
            0,
          ];
          func1245.variableArities = [
            false,
          ];
          obj1031.methods["moveHeightMultipler"] = func1245;
          func1245.definitionLine = 435;
          func1245.definitionModule = "kitty";
          var func1251 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 441
              lineNumber = 420
              lineNumber = 440
              onSelf = true;
              var call1252 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1252
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1251.paramCounts = [
            1,
          ];
          func1251.variableArities = [
            false,
          ];
          obj1031.methods["setUpdateAction"] = func1251;
          func1251.definitionLine = 439;
          func1251.definitionModule = "kitty";
          var func1253 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 445
              lineNumber = 420
              lineNumber = 444
              onSelf = true;
              var call1254 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1253.paramCounts = [
            1,
          ];
          func1253.variableArities = [
            false,
          ];
          obj1031.methods["setDestroyAction"] = func1253;
          func1253.definitionLine = 443;
          func1253.definitionModule = "kitty";
          sourceObject = obj1031;
          lineNumber = 275
          obj1031.data["width"] = var_width__39__;
          var reader_kitty_width_1255 = function() {
            return this.data["width"];
          }
          obj1031.methods["width"] = reader_kitty_width_1255;
          obj1031.data["width"] = var_width__39__;
          var writer_kitty_width_1255 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1031.methods["width:="] = writer_kitty_width_1255;
          lineNumber = 276;
          moduleName = "kitty";
          lineNumber = 275
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 276
          obj1031.data["height"] = var_height__39__;
          var reader_kitty_height_1256 = function() {
            return this.data["height"];
          }
          obj1031.methods["height"] = reader_kitty_height_1256;
          obj1031.data["height"] = var_height__39__;
          var writer_kitty_height_1256 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1031.methods["height:="] = writer_kitty_height_1256;
          lineNumber = 277;
          moduleName = "kitty";
          lineNumber = 276
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 277
          obj1031.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1257 = function() {
            return this.data["tag"];
          }
          obj1031.methods["tag"] = reader_kitty_tag_1257;
          obj1031.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1257 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1031.methods["tag:="] = writer_kitty_tag_1257;
          lineNumber = 279;
          moduleName = "kitty";
          lineNumber = 277
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["background"] = undefined;
          var reader_kitty_background_1258 = function() {
            return this.data["background"];
          }
          obj1031.methods["background"] = reader_kitty_background_1258;
          obj1031.data["background"] = undefined;
          var writer_kitty_background_1258 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1031.methods["background:="] = writer_kitty_background_1258;
          reader_kitty_background_1258.confidential = true;
          writer_kitty_background_1258.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 280
          var string1259 = new GraceString("black");
          obj1031.data["backgroundColour"] = string1259;
          var reader_kitty_backgroundColour_1260 = function() {
            return this.data["backgroundColour"];
          }
          obj1031.methods["backgroundColour"] = reader_kitty_backgroundColour_1260;
          obj1031.data["backgroundColour"] = string1259;
          var writer_kitty_backgroundColour_1260 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1031.methods["backgroundColour:="] = writer_kitty_backgroundColour_1260;
          reader_kitty_backgroundColour_1260.confidential = true;
          writer_kitty_backgroundColour_1260.confidential = true;
          lineNumber = 282;
          moduleName = "kitty";
          lineNumber = 280
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1259)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["document"] = undefined;
          var reader_kitty_document_1261 = function() {
            return this.data["document"];
          }
          obj1031.methods["document"] = reader_kitty_document_1261;
          obj1031.data["document"] = undefined;
          var writer_kitty_document_1261 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1031.methods["document:="] = writer_kitty_document_1261;
          reader_kitty_document_1261.confidential = true;
          writer_kitty_document_1261.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1262 = function() {
            return this.data["backingCanvas"];
          }
          obj1031.methods["backingCanvas"] = reader_kitty_backingCanvas_1262;
          obj1031.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1262 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1031.methods["backingCanvas:="] = writer_kitty_backingCanvas_1262;
          reader_kitty_backingCanvas_1262.confidential = true;
          writer_kitty_backingCanvas_1262.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1263 = function() {
            return this.data["backingContext"];
          }
          obj1031.methods["backingContext"] = reader_kitty_backingContext_1263;
          obj1031.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1263 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1031.methods["backingContext:="] = writer_kitty_backingContext_1263;
          reader_kitty_backingContext_1263.confidential = true;
          writer_kitty_backingContext_1263.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["canvas"] = undefined;
          var reader_kitty_canvas_1264 = function() {
            return this.data["canvas"];
          }
          obj1031.methods["canvas"] = reader_kitty_canvas_1264;
          obj1031.data["canvas"] = undefined;
          var writer_kitty_canvas_1264 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1031.methods["canvas:="] = writer_kitty_canvas_1264;
          reader_kitty_canvas_1264.confidential = true;
          writer_kitty_canvas_1264.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1265 = function() {
            return this.data["canvasWidth"];
          }
          obj1031.methods["canvasWidth"] = reader_kitty_canvasWidth_1265;
          obj1031.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1265 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1031.methods["canvasWidth:="] = writer_kitty_canvasWidth_1265;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1266 = function() {
            return this.data["canvasHeight"];
          }
          obj1031.methods["canvasHeight"] = reader_kitty_canvasHeight_1266;
          obj1031.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1266 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1031.methods["canvasHeight:="] = writer_kitty_canvasHeight_1266;
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 291
          var call1267 = callmethod(var_collections,"list", [0]);
          var call1268 = callmethod(call1267,"new", [0]);
          obj1031.data["entities"] = call1268;
          var reader_kitty_entities_1269 = function() {
            return this.data["entities"];
          }
          obj1031.methods["entities"] = reader_kitty_entities_1269;
          obj1031.data["entities"] = call1268;
          var writer_kitty_entities_1269 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1031.methods["entities:="] = writer_kitty_entities_1269;
          reader_kitty_entities_1269.confidential = true;
          writer_kitty_entities_1269.confidential = true;
          lineNumber = 293;
          moduleName = "kitty";
          lineNumber = 291
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1268)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 293
          var bool1270 = new GraceBoolean(false)
          obj1031.data["isInit"] = bool1270;
          var reader_kitty_isInit_1271 = function() {
            return this.data["isInit"];
          }
          obj1031.methods["isInit"] = reader_kitty_isInit_1271;
          obj1031.data["isInit"] = bool1270;
          var writer_kitty_isInit_1271 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1031.methods["isInit:="] = writer_kitty_isInit_1271;
          reader_kitty_isInit_1271.confidential = true;
          writer_kitty_isInit_1271.confidential = true;
          lineNumber = 294;
          moduleName = "kitty";
          lineNumber = 293
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1270)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 294
          var bool1272 = new GraceBoolean(false)
          obj1031.data["isRunning"] = bool1272;
          var reader_kitty_isRunning_1273 = function() {
            return this.data["isRunning"];
          }
          obj1031.methods["isRunning"] = reader_kitty_isRunning_1273;
          obj1031.data["isRunning"] = bool1272;
          var writer_kitty_isRunning_1273 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1031.methods["isRunning:="] = writer_kitty_isRunning_1273;
          reader_kitty_isRunning_1273.confidential = true;
          writer_kitty_isRunning_1273.confidential = true;
          lineNumber = 296;
          moduleName = "kitty";
          lineNumber = 294
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1272)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["mctx"] = undefined;
          var reader_kitty_mctx_1274 = function() {
            return this.data["mctx"];
          }
          obj1031.methods["mctx"] = reader_kitty_mctx_1274;
          obj1031.data["mctx"] = undefined;
          var writer_kitty_mctx_1274 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1031.methods["mctx:="] = writer_kitty_mctx_1274;
          reader_kitty_mctx_1274.confidential = true;
          writer_kitty_mctx_1274.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          obj1031.data["ent"] = undefined;
          var reader_kitty_ent_1275 = function() {
            return this.data["ent"];
          }
          obj1031.methods["ent"] = reader_kitty_ent_1275;
          obj1031.data["ent"] = undefined;
          var writer_kitty_ent_1275 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1031.methods["ent:="] = writer_kitty_ent_1275;
          reader_kitty_ent_1275.confidential = true;
          writer_kitty_ent_1275.confidential = true;
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 301
          var block1276 = Grace_allocObject();
          block1276.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1276.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1276.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1276.methods["match"] = GraceBlock_match;
          block1276.methods["prefix?"] = GraceBlock_lift;
          block1276.receiver = this;
          block1276.className = 'block<kitty:301>';
          block1276.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1031.data["updateAction"] = block1276;
          var reader_kitty_updateAction_1277 = function() {
            return this.data["updateAction"];
          }
          obj1031.methods["updateAction"] = reader_kitty_updateAction_1277;
          obj1031.data["updateAction"] = block1276;
          var writer_kitty_updateAction_1277 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1031.methods["updateAction:="] = writer_kitty_updateAction_1277;
          reader_kitty_updateAction_1277.confidential = true;
          writer_kitty_updateAction_1277.confidential = true;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 300
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1276)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 303
          var block1278 = Grace_allocObject();
          block1278.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1278.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1278.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1278.methods["match"] = GraceBlock_match;
          block1278.methods["prefix?"] = GraceBlock_lift;
          block1278.receiver = this;
          block1278.className = 'block<kitty:303>';
          block1278.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1031.data["destroyAction"] = block1278;
          var reader_kitty_destroyAction_1279 = function() {
            return this.data["destroyAction"];
          }
          obj1031.methods["destroyAction"] = reader_kitty_destroyAction_1279;
          obj1031.data["destroyAction"] = block1278;
          var writer_kitty_destroyAction_1279 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1031.methods["destroyAction:="] = writer_kitty_destroyAction_1279;
          reader_kitty_destroyAction_1279.confidential = true;
          writer_kitty_destroyAction_1279.confidential = true;
          lineNumber = 303;
          moduleName = "kitty";
          lineNumber = 301
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1278)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1031.mutable = true;
          sourceObject = obj1031;
          lineNumber = 303
          onSelf = true;
          var call1280 = callmethod(this, "init", [0]);
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          sourceObject = obj1031;
          superDepth = origSuperDepth;
        }
        obj_init_1031.apply(inheritingObject, []);
        return obj1031
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj777.methods["new()object"] = func1030;
    var func1281 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 272
        var string1282 = new GraceString("class KittyWorld");
        return string1282
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1281.paramCounts = [
    ];
    func1281.variableArities = [
    ];
    obj777.methods["asDebugString"] = func1281;
    func1281.definitionLine = 272;
    func1281.definitionModule = "kitty";
    sourceObject = obj777;
    sourceObject = obj777;
    superDepth = origSuperDepth;
  }
  obj_init_777.apply(obj777, []);
  var var_KittyWorld = obj777;
  lineNumber = 450
  lineNumber = 459
  lineNumber = 493
  lineNumber = 508
  lineNumber = 512
  lineNumber = 517
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:World()width()height:\n isRunning:=\n canvasHeight\n destroyAction:=\n width:=\n updateAction:=\n canvas\n isRunning\n ent:=\n background\n updateAction\n stop\n isInit:=\n isInit\n tick\n setBackground\n setUpdateAction\n mctx:=\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n getContext\n backingCanvas\n entities:=\n ent\n canvas:=\n backgroundColour\n moveWidthMultipler\n background:=\n backingContext\n width\n addEntity\n moveHeightMultipler\n height:=\n tag:=\n height\n backingContext:=\n canvasWidth\n entities\n destroyAction\n backgroundColour:=\n canvasHeight:=\n tag\n start\n init\n setDestroyAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseDrag\n onMouseEnter\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\n height:=\n drawImage\nfresh:Entity()x()y:\n setDestroyAction\n updateAction:=\n mouseEnterAction:=\n updateAction\n posY:=\n mouseEnterAction\n rotation:=\n awake\n posX\n posY\n setUpdateAction\n draw\n setMouseEnterAction\n createImage\n mouseExitAction:=\n tag\n destroyAction:=\n mouseExitAction\n mouseDragAction\n mouseEnter\n setMouseExitAction\n turn\n rotation\n mouseDownAction:=\n getX\n getY\n image:=\n mouseDownAction\n posX:=\n image\n setX\n setY\n tick\n strafe\n setMouseDownAction\n kill\n setImage\n getRotation\n tag:=\n move\n mouseDown\n mouseExit\n setLocation\n destroyAction\n mouseDragAction:=\nmethods-of:KittyWorld.new:\n isRunning:=\n canvasHeight\n destroyAction:=\n width:=\n updateAction:=\n canvas\n isRunning\n ent:=\n background\n updateAction\n stop\n isInit:=\n height:=\n tick\n setBackground\n setUpdateAction\n tag:=\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n getContext\n backingCanvas\n canvasWidth\n ent\n canvas:=\n backgroundColour\n backingContext\n background:=\n moveWidthMultipler\n width\n addEntity\n moveHeightMultipler\n isInit\n mctx:=\n height\n backgroundColour:=\n entities:=\n start\n entities\n destroyAction\n backingContext:=\n canvasHeight:=\n tag\n init\n setDestroyAction\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\nfresh:Image()width()height:\n elements:=\n width:=\n height\n getTag\n elements\n width\n imgTag\n draw\n height:=\n drawImage\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n setDestroyAction\n updateAction:=\n mouseEnterAction:=\n updateAction\n posY:=\n mouseEnterAction\n rotation:=\n turn\n posX\n posY\n setUpdateAction\n draw\n setMouseEnterAction\n createImage\n mouseExitAction:=\n tag\n destroyAction:=\n mouseExitAction\n mouseDragAction\n mouseEnter\n setMouseExitAction\n awake\n getRotation\n mouseDownAction:=\n getX\n getY\n image:=\n mouseDownAction\n posX:=\n image\n setX\n setY\n tick\n setLocation\n setMouseDownAction\n kill\n setImage\n rotation\n tag:=\n move\n mouseDown\n mouseExit\n strafe\n destroyAction\n mouseDragAction:=\nconstructors-of:Point:\n x()y\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nmethods-of:Point.x()y:\n up\n x\n y\n left\n right\n down\npath:\n kitty\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\n";
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
    "var mouseMoveListener",
    "var currentKeyDown := -1",
    "",
    "// Grace math returns NaNs",
    "def math = dom.window.Math",
    "",
    "// Last object created",
    "var kitten",
    "",
    "// XXX: Control functions are at the bottom",
    "class Point.x(x')y(y') {",
    "    def x is public = x'",
    "    def y is public = y'",
    "    method left(dx) { Point.x(x - dx)sy(y) }",
    "    method right(dx) { Point.x(x + dx)y(y) }",
    "    method up(dy) { Point.x(x)y(y - dy) }",
    "    method down(dy) { Point.x(x)y(y + dy) }",
    "}",
    "",
    "def mouse = object {",
    "    var position is public := Point.x(0)y(0)",
    "    method x {",
    "        position.x ",
    "    }",
    "    method y {",
    "        position.y ",
    "    }",
    "    method location {",
    "        position",
    "    }",
    "}",
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
    "    var height is public, readable := height'",
    "    var width is public, readable := width'",
    "",
    "    method draw(ctx, dx, dy, rot) {",
    "        // print \"DRAWING IMAGE: {imgTag.src} ({width}, {height})...\"",
    "        ctx.save",
    "        ctx.translate(dx, dy)",
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
    "    ",
    "    // Actions",
    "    var updateAction := {}",
    "    var destroyAction := {}",
    "    var mouseDownAction := {}",
    "    var mouseDragAction := {}",
    "    var mouseEnterAction := {}",
    "    var mouseExitAction := {}",
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
    "",
    "    }",
    "",
    "    method kill {",
    "        destroyAction.apply",
    "    }",
    "",
    "    // ===== MOUSE ACTIONS ===== //",
    "    method mouseDown {",
    "        def w = image.width / 2",
    "        def h = image.height / 2",
    "        var poly := collections.list.new(",
    "            Point.x(posX - w)y(posY - h), Point.x(posX - w)y(posY + h),",
    "            Point.x(posX + w)y(posY + h), Point.x(posX + w)y(posY - h)",
    "        )",
    "        if (pointInPolygon(mouse.location, poly)) then {",
    "            mouseDownAction.apply",
    "        }",
    "    }",
    "",
    "    method mouseEnter {",
    "        mouseEnterAction.apply",
    "    }",
    "    ",
    "    method mouseExit {",
    "        mouseExitAction.apply",
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
    "    method setMouseEnterAction(action') {",
    "        mouseEnterAction := action'",
    "    }",
    "",
    "    method setMouseExitAction(action') {",
    "        mouseExitAction := action'",
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
    "method onMouseExit(action') {",
    "    kitten.setMouseExitAction(action');",
    "}",
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
    "            mouse.position := Point.x(x)y(y)",
    "",
    "            // Mouse actions",
    "            for (entities) do { entity->",
    "                entity.mouseDown",
    "            }",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "",
    "        mouseMoveListener := { ev ->",
    "            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "            mouse.position := Point.x(x)y(y)",
    "        }",
    "        canvas.addEventListener(\"mousemove\", mouseMoveListener)",
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
    "            // entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)",
    "            entity.draw(mctx, 0, 0)",
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
    "        canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
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
    "// ===== HELPERS ===== //",
    "",
    "// Grace adaption of javascript algorithm under MIT license https://github.com/substack/point-in-polygon",
    "method pointInPolygon(point, vs) {",
    "    // ray-casting algorithm based on",
    "    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html",
    "    ",
    "    var x := point.x ",
    "    var y := point.y",
    "    // print \"({x}, {y})\"",
    "    ",
    "    var j := vs.size",
    "    ",
    "    var inside := false",
    "",
    "    for (1..vs.size) do { i->",
    "        ",
    "        var xi := vs.at(i).x",
    "        var yi := vs.at(i).y",
    "        var xj := vs.at(j).x",
    "        var yj := vs.at(j).y",
    "",
    "        // print \"({xi}, {yi}) ({xj}, {yj})\"",
    "        ",
    "        var intersect := ((yi > y) != (yj > y)) && (x < ((xj - xi) * (y - yi) / (yj - yi) + xi))",
    "        if (intersect) then {",
    "            inside := !inside",
    "        }",
    "        j := i",
    "    ",
    "    }",
    "    return inside   ",
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
