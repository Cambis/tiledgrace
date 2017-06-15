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
  lineNumber = 252
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
      lineNumber = 253
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 253;
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
        lineNumber = 254
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
  func8.definitionLine = 252;
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
      obj13.definitionLine = 253;
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
  lineNumber = 264
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
      lineNumber = 265
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
  func16.definitionLine = 264;
  func16.definitionModule = "kitty";
  lineNumber = 269
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
      lineNumber = 270
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
  func18.definitionLine = 269;
  func18.definitionModule = "kitty";
  lineNumber = 273
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
      lineNumber = 275
      lineNumber = 274
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
  func20.definitionLine = 273;
  func20.definitionModule = "kitty";
  lineNumber = 278
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
      lineNumber = 279
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
  func24.definitionLine = 278;
  func24.definitionModule = "kitty";
  lineNumber = 282
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
      lineNumber = 283
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
  func26.definitionLine = 282;
  func26.definitionModule = "kitty";
  lineNumber = 286
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
      lineNumber = 287
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
  func28.definitionLine = 286;
  func28.definitionModule = "kitty";
  lineNumber = 290
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
      lineNumber = 291
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
  func30.definitionLine = 290;
  func30.definitionModule = "kitty";
  lineNumber = 481
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
      lineNumber = 482
      var obj33 = Grace_allocObject();
      obj33.definitionModule = "kitty";
      obj33.definitionLine = 482;
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
        lineNumber = 483
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
  func32.definitionLine = 481;
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
      obj37.definitionLine = 482;
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
  lineNumber = 490
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
      lineNumber = 495
      lineNumber = 494
      var call41 = callmethod(var_point,"x", [0]);
      var var_x = call41;
      lineNumber = 495;
      moduleName = "kitty";
      lineNumber = 494
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 498
      lineNumber = 495
      var call42 = callmethod(var_point,"y", [0]);
      var var_y = call42;
      lineNumber = 498;
      moduleName = "kitty";
      lineNumber = 495
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 500
      lineNumber = 498
      var call43 = callmethod(var_vs,"size", [0]);
      var var_j = call43;
      lineNumber = 500;
      moduleName = "kitty";
      lineNumber = 498
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 502
      lineNumber = 500
      var bool44 = new GraceBoolean(false)
      var var_inside = bool44;
      lineNumber = 502;
      moduleName = "kitty";
      lineNumber = 500
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 502
      var call45 = callmethod(var_vs,"size", [0]);
      var opresult48 = callmethod(new GraceNum(1), "..", [1], call45);
      lineNumber = 518
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
      block49.className = 'block<kitty:518>';
      block49.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 505
        lineNumber = 504
        var call50 = callmethod(var_vs,"at", [1], var_i);
        var call51 = callmethod(call50,"x", [0]);
        var var_xi = call51;
        lineNumber = 505;
        moduleName = "kitty";
        lineNumber = 504
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 506
        lineNumber = 505
        var call52 = callmethod(var_vs,"at", [1], var_i);
        var call53 = callmethod(call52,"y", [0]);
        var var_yi = call53;
        lineNumber = 506;
        moduleName = "kitty";
        lineNumber = 505
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 507
        lineNumber = 506
        var call54 = callmethod(var_vs,"at", [1], var_j);
        var call55 = callmethod(call54,"x", [0]);
        var var_xj = call55;
        lineNumber = 507;
        moduleName = "kitty";
        lineNumber = 506
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 511
        lineNumber = 507
        var call56 = callmethod(var_vs,"at", [1], var_j);
        var call57 = callmethod(call56,"y", [0]);
        var var_yj = call57;
        lineNumber = 511;
        moduleName = "kitty";
        lineNumber = 507
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 512
        lineNumber = 511
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
        lineNumber = 512;
        moduleName = "kitty";
        lineNumber = 511
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 515
        var if91 = var_done;
        lineNumber = 512
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 514
          lineNumber = 513
          var call92 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call92;
          if91 = call92;
        }
        lineNumber = 517
        lineNumber = 515
        var_j = var_i;
        return var_i;
      };
      var call93 = callmethod(Grace_prelude,"for()do", [1, 1], opresult48, block49);
      lineNumber = 519
      lineNumber = 518
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
  func40.definitionLine = 490;
  func40.definitionModule = "kitty";
  lineNumber = 524
  var func94 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func94.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 526
      var string95 = new GraceString("CHECKING...");
      var call96 = Grace_print(string95);
      lineNumber = 533
      var if97 = var_done;
      lineNumber = 528
      var call98 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call98)) {
        lineNumber = 529
        var string99 = new GraceString("NO WORLD!!");
        var call100 = Grace_print(string99);
        lineNumber = 531
        return var_done
      }
      lineNumber = 533
      var string101 = new GraceString("STARTING...");
      var call102 = Grace_print(string101);
      lineNumber = 536
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
  func94.definitionLine = 524;
  func94.definitionModule = "kitty";
  lineNumber = 539
  var func104 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func104.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 540
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
  func104.definitionLine = 539;
  func104.definitionModule = "kitty";
  lineNumber = 543
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
      lineNumber = 545
      lineNumber = 544
      var_m__95__world = var_world__39__;
      lineNumber = 546
      lineNumber = 545
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
  func106.definitionLine = 543;
  func106.definitionModule = "kitty";
  lineNumber = 548
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
      lineNumber = 549
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
  func108.definitionLine = 548;
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
  lineNumber = 540
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
  func111.definitionLine = 540;
  func111.definitionModule = "kitty";
  lineNumber = 540
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
  func112.definitionLine = 540;
  func112.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool113 = new GraceBoolean(false)
  var var_worldSet = bool113;
  lineNumber = 540
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
  func114.definitionLine = 540;
  func114.definitionModule = "kitty";
  lineNumber = 540
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
  func115.definitionLine = 540;
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
  lineNumber = 540
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
  func116.definitionLine = 540;
  func116.definitionModule = "kitty";
  lineNumber = 540
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
  func117.definitionLine = 540;
  func117.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 540
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
  func118.definitionLine = 540;
  func118.definitionModule = "kitty";
  lineNumber = 540
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
  func119.definitionLine = 540;
  func119.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 540
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
  func120.definitionLine = 540;
  func120.definitionModule = "kitty";
  lineNumber = 540
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
  func121.definitionLine = 540;
  func121.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseMoveListener;
  lineNumber = 540
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
  func122.definitionLine = 540;
  func122.definitionModule = "kitty";
  lineNumber = 540
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
  func123.definitionLine = 540;
  func123.definitionModule = "kitty";
  lineNumber = 19
  lineNumber = 16
  var call124 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call124;
  lineNumber = 540
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
  func125.definitionLine = 540;
  func125.definitionModule = "kitty";
  lineNumber = 540
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
  func126.definitionLine = 540;
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
              lineNumber = 115
              var string326 = new GraceString("realyee.png");
              onSelf = true;
              var call327 = callmethod(this, "createImage", [1], string326);
              lineNumber = 117
              lineNumber = 116
              var_kitten = this;
              lineNumber = 117
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
          func325.definitionLine = 114;
          func325.definitionModule = "kitty";
          var func329 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
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
          func329.definitionLine = 120;
          func329.definitionModule = "kitty";
          var func332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
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
          func332.definitionLine = 125;
          func332.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call337 = callmethod(this, "image", [0]);
              var call338 = callmethod(call337,"width", [0]);
              var quotient340 = callmethod(call338, "/", [1], new GraceNum(2));
              var var_w = quotient340;
              lineNumber = 132;
              moduleName = "kitty";
              lineNumber = 131
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call342 = callmethod(this, "image", [0]);
              var call343 = callmethod(call342,"height", [0]);
              var quotient345 = callmethod(call343, "/", [1], new GraceNum(2));
              var var_h = quotient345;
              lineNumber = 133;
              moduleName = "kitty";
              lineNumber = 132
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 133
              lineNumber = 134
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
              lineNumber = 135
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
              lineNumber = 133
              var call382 = callmethod(var_collections,"list", [0]);
              var call383 = callmethod(call382,"new", [4], call354, call363, call372, call381);
              var var_poly = call383;
              lineNumber = 133;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 140
              var if384 = var_done;
              lineNumber = 137
              var call385 = callmethod(var_mouse,"location", [0]);
              var call386 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call387 = callmethod(call386, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call388 = callmethod(call387, "pointInPolygon", [2], call385, var_poly);
              if (Grace_isTrue(call388)) {
                lineNumber = 138
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
          func335.definitionLine = 130;
          func335.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func391.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var if392 = var_done;
              lineNumber = 143
              onSelf = true;
              var call393 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call393)) {
                lineNumber = 145
                return var_done
              }
              lineNumber = 147
              lineNumber = 146
              onSelf = true;
              var call395 = callmethod(this, "image", [0]);
              var call396 = callmethod(call395,"width", [0]);
              var quotient398 = callmethod(call396, "/", [1], new GraceNum(2));
              var var_w = quotient398;
              lineNumber = 147;
              moduleName = "kitty";
              lineNumber = 146
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 148
              lineNumber = 147
              onSelf = true;
              var call400 = callmethod(this, "image", [0]);
              var call401 = callmethod(call400,"height", [0]);
              var quotient403 = callmethod(call401, "/", [1], new GraceNum(2));
              var var_h = quotient403;
              lineNumber = 148;
              moduleName = "kitty";
              lineNumber = 147
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 148
              lineNumber = 149
              onSelf = true;
              var call405 = callmethod(this, "posX", [0]);
              var diff407 = callmethod(call405, "-", [1], var_w);
              onSelf = true;
              var call409 = callmethod(this, "posY", [0]);
              var diff411 = callmethod(call409, "-", [1], var_h);
              var call412 = callmethod(var_Point,"x()y", [1, 1], diff407, diff411);
              onSelf = true;
              var call414 = callmethod(this, "posX", [0]);
              var diff416 = callmethod(call414, "-", [1], var_w);
              onSelf = true;
              var call418 = callmethod(this, "posY", [0]);
              var opresult420 = callmethod(call418, "+", [1], var_h);
              var call421 = callmethod(var_Point,"x()y", [1, 1], diff416, opresult420);
              lineNumber = 150
              onSelf = true;
              var call423 = callmethod(this, "posX", [0]);
              var opresult425 = callmethod(call423, "+", [1], var_w);
              onSelf = true;
              var call427 = callmethod(this, "posY", [0]);
              var opresult429 = callmethod(call427, "+", [1], var_h);
              var call430 = callmethod(var_Point,"x()y", [1, 1], opresult425, opresult429);
              onSelf = true;
              var call432 = callmethod(this, "posX", [0]);
              var opresult434 = callmethod(call432, "+", [1], var_w);
              onSelf = true;
              var call436 = callmethod(this, "posY", [0]);
              var diff438 = callmethod(call436, "-", [1], var_h);
              var call439 = callmethod(var_Point,"x()y", [1, 1], opresult434, diff438);
              lineNumber = 148
              var call440 = callmethod(var_collections,"list", [0]);
              var call441 = callmethod(call440,"new", [4], call412, call421, call430, call439);
              var var_poly = call441;
              lineNumber = 148;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 156
              var if442 = var_done;
              lineNumber = 152
              var call443 = callmethod(var_mouse,"location", [0]);
              var call444 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call445 = callmethod(call444, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call446 = callmethod(call445, "pointInPolygon", [2], call443, var_poly);
              if (Grace_isTrue(call446)) {
                lineNumber = 153
                onSelf = true;
                var call447 = callmethod(this, "mouseEnterAction", [0]);
                var call448 = callmethod(call447,"apply", [0]);
                lineNumber = 155
                lineNumber = 153
                lineNumber = 154
                var bool449 = new GraceBoolean(true)
                onSelf = true;
                var call450 = callmethod(this, "mouseOver:=", [1], bool449);
                if442 = call450;
              }
              return if442
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
          func391.definitionLine = 142;
          func391.definitionModule = "kitty";
          var func451 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func451.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              var if452 = var_done;
              lineNumber = 159
              onSelf = true;
              var call453 = callmethod(this, "mouseOver", [0]);
              var call454 = callmethod(call453,"prefix!", [0]);
              if (Grace_isTrue(call454)) {
                lineNumber = 161
                return var_done
              }
              lineNumber = 163
              lineNumber = 162
              onSelf = true;
              var call456 = callmethod(this, "image", [0]);
              var call457 = callmethod(call456,"width", [0]);
              var quotient459 = callmethod(call457, "/", [1], new GraceNum(2));
              var var_w = quotient459;
              lineNumber = 163;
              moduleName = "kitty";
              lineNumber = 162
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call461 = callmethod(this, "image", [0]);
              var call462 = callmethod(call461,"height", [0]);
              var quotient464 = callmethod(call462, "/", [1], new GraceNum(2));
              var var_h = quotient464;
              lineNumber = 164;
              moduleName = "kitty";
              lineNumber = 163
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 164
              lineNumber = 165
              onSelf = true;
              var call466 = callmethod(this, "posX", [0]);
              var diff468 = callmethod(call466, "-", [1], var_w);
              onSelf = true;
              var call470 = callmethod(this, "posY", [0]);
              var diff472 = callmethod(call470, "-", [1], var_h);
              var call473 = callmethod(var_Point,"x()y", [1, 1], diff468, diff472);
              onSelf = true;
              var call475 = callmethod(this, "posX", [0]);
              var diff477 = callmethod(call475, "-", [1], var_w);
              onSelf = true;
              var call479 = callmethod(this, "posY", [0]);
              var opresult481 = callmethod(call479, "+", [1], var_h);
              var call482 = callmethod(var_Point,"x()y", [1, 1], diff477, opresult481);
              lineNumber = 166
              onSelf = true;
              var call484 = callmethod(this, "posX", [0]);
              var opresult486 = callmethod(call484, "+", [1], var_w);
              onSelf = true;
              var call488 = callmethod(this, "posY", [0]);
              var opresult490 = callmethod(call488, "+", [1], var_h);
              var call491 = callmethod(var_Point,"x()y", [1, 1], opresult486, opresult490);
              onSelf = true;
              var call493 = callmethod(this, "posX", [0]);
              var opresult495 = callmethod(call493, "+", [1], var_w);
              onSelf = true;
              var call497 = callmethod(this, "posY", [0]);
              var diff499 = callmethod(call497, "-", [1], var_h);
              var call500 = callmethod(var_Point,"x()y", [1, 1], opresult495, diff499);
              lineNumber = 164
              var call501 = callmethod(var_collections,"list", [0]);
              var call502 = callmethod(call501,"new", [4], call473, call482, call491, call500);
              var var_poly = call502;
              lineNumber = 164;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 172
              var if503 = var_done;
              lineNumber = 168
              onSelf = true;
              var call504 = callmethod(this, "mouseOver", [0]);
              var call506 = callmethod(var_mouse,"location", [0]);
              var call507 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call508 = callmethod(call507, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call509 = callmethod(call508, "pointInPolygon", [2], call506, var_poly);
              var call510 = callmethod(call509,"prefix!", [0]);
              var opresult512 = callmethod(call510, "&&", [1], call504);
              if (Grace_isTrue(opresult512)) {
                lineNumber = 169
                onSelf = true;
                var call513 = callmethod(this, "mouseExitAction", [0]);
                var call514 = callmethod(call513,"apply", [0]);
                lineNumber = 171
                lineNumber = 169
                lineNumber = 170
                var bool515 = new GraceBoolean(false)
                onSelf = true;
                var call516 = callmethod(this, "mouseOver:=", [1], bool515);
                if503 = call516;
              }
              return if503
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func451.paramCounts = [
            0,
          ];
          func451.variableArities = [
            false,
          ];
          obj323.methods["mouseExit"] = func451;
          func451.definitionLine = 158;
          func451.definitionModule = "kitty";
          var func517 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func517.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 169
              lineNumber = 176
              onSelf = true;
              var call520 = callmethod(this, "rotation", [0]);
              var prod522 = callmethod(call520, "*", [1], new GraceNum(3.14159));
              var quotient524 = callmethod(prod522, "/", [1], new GraceNum(180));
              var call525 = callmethod(var_math,"cos", [1], quotient524);
              var call527 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod530 = callmethod(var_distance, "*", [1], call527);
              var prod532 = callmethod(prod530, "*", [1], call525);
              onSelf = true;
              var call534 = callmethod(this, "posX", [0]);
              var opresult536 = callmethod(call534, "+", [1], prod532);
              onSelf = true;
              var call537 = callmethod(this, "posX:=", [1], opresult536);
              lineNumber = 177
              lineNumber = 176
              lineNumber = 177
              onSelf = true;
              var call540 = callmethod(this, "rotation", [0]);
              var prod542 = callmethod(call540, "*", [1], new GraceNum(3.14159));
              var quotient544 = callmethod(prod542, "/", [1], new GraceNum(180));
              var call545 = callmethod(var_math,"sin", [1], quotient544);
              var call547 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod550 = callmethod(var_distance, "*", [1], call547);
              var prod552 = callmethod(prod550, "*", [1], call545);
              onSelf = true;
              var call554 = callmethod(this, "posY", [0]);
              var opresult556 = callmethod(call554, "+", [1], prod552);
              onSelf = true;
              var call557 = callmethod(this, "posY:=", [1], opresult556);
              return call557
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func517.paramCounts = [
            1,
          ];
          func517.variableArities = [
            false,
          ];
          obj323.methods["move"] = func517;
          func517.definitionLine = 175;
          func517.definitionModule = "kitty";
          var func558 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 181
              lineNumber = 177
              lineNumber = 181
              onSelf = true;
              var call561 = callmethod(this, "rotation", [0]);
              var opresult564 = callmethod(new GraceNum(90), "+", [1], call561);
              var prod566 = callmethod(opresult564, "*", [1], new GraceNum(3.14159));
              var quotient568 = callmethod(prod566, "/", [1], new GraceNum(180));
              var call569 = callmethod(var_math,"cos", [1], quotient568);
              var call571 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod574 = callmethod(var_distance, "*", [1], call571);
              var prod576 = callmethod(prod574, "*", [1], call569);
              onSelf = true;
              var call578 = callmethod(this, "posX", [0]);
              var opresult580 = callmethod(call578, "+", [1], prod576);
              onSelf = true;
              var call581 = callmethod(this, "posX:=", [1], opresult580);
              lineNumber = 182
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call584 = callmethod(this, "rotation", [0]);
              var opresult587 = callmethod(new GraceNum(90), "+", [1], call584);
              var prod589 = callmethod(opresult587, "*", [1], new GraceNum(3.14159));
              var quotient591 = callmethod(prod589, "/", [1], new GraceNum(180));
              var call592 = callmethod(var_math,"sin", [1], quotient591);
              var call594 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod597 = callmethod(var_distance, "*", [1], call594);
              var prod599 = callmethod(prod597, "*", [1], call592);
              onSelf = true;
              var call601 = callmethod(this, "posY", [0]);
              var opresult603 = callmethod(call601, "+", [1], prod599);
              onSelf = true;
              var call604 = callmethod(this, "posY:=", [1], opresult603);
              return call604
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func558.paramCounts = [
            1,
          ];
          func558.variableArities = [
            false,
          ];
          obj323.methods["strafe"] = func558;
          func558.definitionLine = 180;
          func558.definitionModule = "kitty";
          var func605 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func605.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 182
              lineNumber = 187
              lineNumber = 186
              onSelf = true;
              var call607 = callmethod(this, "rotation", [0]);
              var opresult609 = callmethod(call607, "+", [1], var_angle);
              onSelf = true;
              var call610 = callmethod(this, "rotation:=", [1], opresult609);
              return call610
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func605.paramCounts = [
            1,
          ];
          func605.variableArities = [
            false,
          ];
          obj323.methods["turn"] = func605;
          func605.definitionLine = 185;
          func605.definitionModule = "kitty";
          var func611 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func611.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              var call612 = callmethod(var_ctx,"save", [0]);
              lineNumber = 192
              onSelf = true;
              var call613 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call614 = callmethod(this, "posY", [0]);
              var call615 = callmethod(var_ctx,"translate", [2], call613, call614);
              lineNumber = 193
              onSelf = true;
              var call616 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call617 = callmethod(this, "image", [0]);
              var call618 = callmethod(call617,"draw", [4], var_ctx, var_dx, var_dy, call616);
              lineNumber = 194
              var call619 = callmethod(var_ctx,"restore", [0]);
              return call619
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func611.paramCounts = [
            3,
          ];
          func611.variableArities = [
            false,
          ];
          obj323.methods["draw"] = func611;
          func611.definitionLine = 190;
          func611.definitionModule = "kitty";
          var func620 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func620.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 198
              lineNumber = 194
              lineNumber = 198
              var call621 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call622 = callmethod(call621, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call623 = callmethod(call622, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call624 = callmethod(this, "image:=", [1], call623);
              return call624
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func620.paramCounts = [
            1,
          ];
          func620.variableArities = [
            false,
          ];
          obj323.methods["createImage"] = func620;
          func620.definitionLine = 197;
          func620.definitionModule = "kitty";
          var func625 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              lineNumber = 198
              lineNumber = 202
              onSelf = true;
              var call626 = callmethod(this, "image:=", [1], var_image__39__);
              return call626
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func625.paramTypes = [];
          func625.paramTypes.push([]);
          func625.paramCounts = [
            1,
          ];
          func625.variableArities = [
            false,
          ];
          obj323.methods["setImage"] = func625;
          func625.definitionLine = 201;
          func625.definitionModule = "kitty";
          var func627 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func627.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 208
              lineNumber = 198
              lineNumber = 207
              onSelf = true;
              var call628 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call628
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func627.paramCounts = [
            1,
          ];
          func627.variableArities = [
            false,
          ];
          obj323.methods["setUpdateAction"] = func627;
          func627.definitionLine = 206;
          func627.definitionModule = "kitty";
          var func629 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              lineNumber = 198
              lineNumber = 211
              onSelf = true;
              var call630 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func629.paramCounts = [
            1,
          ];
          func629.variableArities = [
            false,
          ];
          obj323.methods["setDestroyAction"] = func629;
          func629.definitionLine = 210;
          func629.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 198
              lineNumber = 215
              onSelf = true;
              var call632 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func631.paramCounts = [
            1,
          ];
          func631.variableArities = [
            false,
          ];
          obj323.methods["setMouseDownAction"] = func631;
          func631.definitionLine = 214;
          func631.definitionModule = "kitty";
          var func633 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 198
              lineNumber = 219
              onSelf = true;
              var call634 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call634
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func633.paramCounts = [
            1,
          ];
          func633.variableArities = [
            false,
          ];
          obj323.methods["setMouseEnterAction"] = func633;
          func633.definitionLine = 218;
          func633.definitionModule = "kitty";
          var func635 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func635.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 198
              lineNumber = 223
              onSelf = true;
              var call636 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func635.paramCounts = [
            1,
          ];
          func635.variableArities = [
            false,
          ];
          obj323.methods["setMouseExitAction"] = func635;
          func635.definitionLine = 222;
          func635.definitionModule = "kitty";
          var func637 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func637.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 198
              lineNumber = 227
              onSelf = true;
              var call638 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 229
              lineNumber = 198
              lineNumber = 228
              onSelf = true;
              var call639 = callmethod(this, "posY:=", [1], var_y);
              return call639
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func637.paramCounts = [
            2,
          ];
          func637.variableArities = [
            false,
          ];
          obj323.methods["setLocation"] = func637;
          func637.definitionLine = 226;
          func637.definitionModule = "kitty";
          var func640 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func640.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              lineNumber = 232
              onSelf = true;
              var call641 = callmethod(this, "posX", [0]);
              return call641
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func640.paramCounts = [
            0,
          ];
          func640.variableArities = [
            false,
          ];
          obj323.methods["getX"] = func640;
          func640.definitionLine = 231;
          func640.definitionModule = "kitty";
          var func642 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              lineNumber = 236
              onSelf = true;
              var call643 = callmethod(this, "posY", [0]);
              return call643
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func642.paramCounts = [
            0,
          ];
          func642.variableArities = [
            false,
          ];
          obj323.methods["getY"] = func642;
          func642.definitionLine = 235;
          func642.definitionModule = "kitty";
          var func644 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 241
              lineNumber = 198
              lineNumber = 240
              onSelf = true;
              var call645 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call645
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func644.paramCounts = [
            1,
          ];
          func644.variableArities = [
            false,
          ];
          obj323.methods["setX"] = func644;
          func644.definitionLine = 239;
          func644.definitionModule = "kitty";
          var func646 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func646.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 245
              lineNumber = 198
              lineNumber = 244
              onSelf = true;
              var call647 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call647
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func646.paramCounts = [
            1,
          ];
          func646.variableArities = [
            false,
          ];
          obj323.methods["setY"] = func646;
          func646.definitionLine = 243;
          func646.definitionModule = "kitty";
          var func648 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func648.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 249
              lineNumber = 248
              onSelf = true;
              var call649 = callmethod(this, "rotation", [0]);
              return call649
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func648.paramCounts = [
            0,
          ];
          func648.variableArities = [
            false,
          ];
          obj323.methods["getRotation"] = func648;
          func648.definitionLine = 247;
          func648.definitionModule = "kitty";
          sourceObject = obj323;
          lineNumber = 95
          obj323.data["tag"] = var_tag__39__;
          var reader_kitty_tag_650 = function() {
            return this.data["tag"];
          }
          obj323.methods["tag"] = reader_kitty_tag_650;
          obj323.data["tag"] = var_tag__39__;
          var writer_kitty_tag_650 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj323.methods["tag:="] = writer_kitty_tag_650;
          reader_kitty_tag_650.confidential = true;
          writer_kitty_tag_650.confidential = true;
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
          var reader_kitty_posX_651 = function() {
            return this.data["posX"];
          }
          obj323.methods["posX"] = reader_kitty_posX_651;
          obj323.data["posX"] = var_x__39__;
          var writer_kitty_posX_651 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj323.methods["posX:="] = writer_kitty_posX_651;
          reader_kitty_posX_651.confidential = true;
          writer_kitty_posX_651.confidential = true;
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
          var reader_kitty_posY_652 = function() {
            return this.data["posY"];
          }
          obj323.methods["posY"] = reader_kitty_posY_652;
          obj323.data["posY"] = var_y__39__;
          var writer_kitty_posY_652 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj323.methods["posY:="] = writer_kitty_posY_652;
          reader_kitty_posY_652.confidential = true;
          writer_kitty_posY_652.confidential = true;
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
          var reader_kitty_rotation_653 = function() {
            return this.data["rotation"];
          }
          obj323.methods["rotation"] = reader_kitty_rotation_653;
          obj323.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_653 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj323.methods["rotation:="] = writer_kitty_rotation_653;
          reader_kitty_rotation_653.confidential = true;
          writer_kitty_rotation_653.confidential = true;
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
          block654.className = 'block<kitty:102>';
          block654.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["updateAction"] = block654;
          var reader_kitty_updateAction_655 = function() {
            return this.data["updateAction"];
          }
          obj323.methods["updateAction"] = reader_kitty_updateAction_655;
          obj323.data["updateAction"] = block654;
          var writer_kitty_updateAction_655 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj323.methods["updateAction:="] = writer_kitty_updateAction_655;
          reader_kitty_updateAction_655.confidential = true;
          writer_kitty_updateAction_655.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block654)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 103
          var block656 = Grace_allocObject();
          block656.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block656.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block656.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block656.methods["match"] = GraceBlock_match;
          block656.methods["prefix?"] = GraceBlock_lift;
          block656.receiver = this;
          block656.className = 'block<kitty:103>';
          block656.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["destroyAction"] = block656;
          var reader_kitty_destroyAction_657 = function() {
            return this.data["destroyAction"];
          }
          obj323.methods["destroyAction"] = reader_kitty_destroyAction_657;
          obj323.data["destroyAction"] = block656;
          var writer_kitty_destroyAction_657 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj323.methods["destroyAction:="] = writer_kitty_destroyAction_657;
          reader_kitty_destroyAction_657.confidential = true;
          writer_kitty_destroyAction_657.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block656)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 104
          var block658 = Grace_allocObject();
          block658.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block658.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block658.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block658.methods["match"] = GraceBlock_match;
          block658.methods["prefix?"] = GraceBlock_lift;
          block658.receiver = this;
          block658.className = 'block<kitty:104>';
          block658.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseDownAction"] = block658;
          var reader_kitty_mouseDownAction_659 = function() {
            return this.data["mouseDownAction"];
          }
          obj323.methods["mouseDownAction"] = reader_kitty_mouseDownAction_659;
          obj323.data["mouseDownAction"] = block658;
          var writer_kitty_mouseDownAction_659 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj323.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_659;
          reader_kitty_mouseDownAction_659.confidential = true;
          writer_kitty_mouseDownAction_659.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block658)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 105
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
          block660.className = 'block<kitty:105>';
          block660.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseDragAction"] = block660;
          var reader_kitty_mouseDragAction_661 = function() {
            return this.data["mouseDragAction"];
          }
          obj323.methods["mouseDragAction"] = reader_kitty_mouseDragAction_661;
          obj323.data["mouseDragAction"] = block660;
          var writer_kitty_mouseDragAction_661 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj323.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_661;
          reader_kitty_mouseDragAction_661.confidential = true;
          writer_kitty_mouseDragAction_661.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block660)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 106
          var block662 = Grace_allocObject();
          block662.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block662.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block662.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block662.methods["match"] = GraceBlock_match;
          block662.methods["prefix?"] = GraceBlock_lift;
          block662.receiver = this;
          block662.className = 'block<kitty:106>';
          block662.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseEnterAction"] = block662;
          var reader_kitty_mouseEnterAction_663 = function() {
            return this.data["mouseEnterAction"];
          }
          obj323.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_663;
          obj323.data["mouseEnterAction"] = block662;
          var writer_kitty_mouseEnterAction_663 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj323.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_663;
          reader_kitty_mouseEnterAction_663.confidential = true;
          writer_kitty_mouseEnterAction_663.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block662)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 107
          var block664 = Grace_allocObject();
          block664.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block664.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block664.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block664.methods["match"] = GraceBlock_match;
          block664.methods["prefix?"] = GraceBlock_lift;
          block664.receiver = this;
          block664.className = 'block<kitty:107>';
          block664.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj323.data["mouseExitAction"] = block664;
          var reader_kitty_mouseExitAction_665 = function() {
            return this.data["mouseExitAction"];
          }
          obj323.methods["mouseExitAction"] = reader_kitty_mouseExitAction_665;
          obj323.data["mouseExitAction"] = block664;
          var writer_kitty_mouseExitAction_665 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj323.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_665;
          reader_kitty_mouseExitAction_665.confidential = true;
          writer_kitty_mouseExitAction_665.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block664)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 107
          var bool666 = new GraceBoolean(false)
          obj323.data["mouseOver"] = bool666;
          var reader_kitty_mouseOver_667 = function() {
            return this.data["mouseOver"];
          }
          obj323.methods["mouseOver"] = reader_kitty_mouseOver_667;
          obj323.data["mouseOver"] = bool666;
          var writer_kitty_mouseOver_667 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj323.methods["mouseOver:="] = writer_kitty_mouseOver_667;
          reader_kitty_mouseOver_667.confidential = true;
          writer_kitty_mouseOver_667.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool666)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj323.mutable = true;
          sourceObject = obj323;
          obj323.data["image"] = undefined;
          var reader_kitty_image_668 = function() {
            return this.data["image"];
          }
          obj323.methods["image"] = reader_kitty_image_668;
          obj323.data["image"] = undefined;
          var writer_kitty_image_668 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj323.methods["image:="] = writer_kitty_image_668;
          reader_kitty_image_668.confidential = true;
          writer_kitty_image_668.confidential = true;
          obj323.mutable = true;
          sourceObject = obj323;
          lineNumber = 111
          onSelf = true;
          var call669 = callmethod(this, "awake", [0]);
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
    var func670 = function(argcv) {
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
        var obj671 = Grace_allocObject();
        obj671.definitionModule = "kitty";
        obj671.definitionLine = 91;
        var inho671 = inheritingObject;
        while (inho671.superobj) inho671 = inho671.superobj;
        inho671.superobj = obj671;
        obj671.data = inheritingObject.data;
        obj671.outer = this;
        var reader_kitty_outer_672 = function() {
          return this.outer;
        }
        obj671.methods["outer"] = reader_kitty_outer_672;
        function obj_init_671() {
          var origSuperDepth = superDepth;
          superDepth = obj671;
          obj671.annotations = [];
          var func673 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func673.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              var string674 = new GraceString("realyee.png");
              onSelf = true;
              var call675 = callmethod(this, "createImage", [1], string674);
              lineNumber = 117
              lineNumber = 116
              var_kitten = this;
              lineNumber = 117
              var call676 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call676
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func673.paramCounts = [
            0,
          ];
          func673.variableArities = [
            false,
          ];
          obj671.methods["awake"] = func673;
          func673.definitionLine = 114;
          func673.definitionModule = "kitty";
          var func677 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func677.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              onSelf = true;
              var call678 = callmethod(this, "updateAction", [0]);
              var call679 = callmethod(call678,"apply", [0]);
              return call679
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
          obj671.methods["tick"] = func677;
          func677.definitionLine = 120;
          func677.definitionModule = "kitty";
          var func680 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func680.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              onSelf = true;
              var call681 = callmethod(this, "destroyAction", [0]);
              var call682 = callmethod(call681,"apply", [0]);
              return call682
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func680.paramCounts = [
            0,
          ];
          func680.variableArities = [
            false,
          ];
          obj671.methods["kill"] = func680;
          func680.definitionLine = 125;
          func680.definitionModule = "kitty";
          var func683 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func683.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call685 = callmethod(this, "image", [0]);
              var call686 = callmethod(call685,"width", [0]);
              var quotient688 = callmethod(call686, "/", [1], new GraceNum(2));
              var var_w = quotient688;
              lineNumber = 132;
              moduleName = "kitty";
              lineNumber = 131
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 133
              lineNumber = 132
              onSelf = true;
              var call690 = callmethod(this, "image", [0]);
              var call691 = callmethod(call690,"height", [0]);
              var quotient693 = callmethod(call691, "/", [1], new GraceNum(2));
              var var_h = quotient693;
              lineNumber = 133;
              moduleName = "kitty";
              lineNumber = 132
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 133
              lineNumber = 134
              onSelf = true;
              var call695 = callmethod(this, "posX", [0]);
              var diff697 = callmethod(call695, "-", [1], var_w);
              onSelf = true;
              var call699 = callmethod(this, "posY", [0]);
              var diff701 = callmethod(call699, "-", [1], var_h);
              var call702 = callmethod(var_Point,"x()y", [1, 1], diff697, diff701);
              onSelf = true;
              var call704 = callmethod(this, "posX", [0]);
              var diff706 = callmethod(call704, "-", [1], var_w);
              onSelf = true;
              var call708 = callmethod(this, "posY", [0]);
              var opresult710 = callmethod(call708, "+", [1], var_h);
              var call711 = callmethod(var_Point,"x()y", [1, 1], diff706, opresult710);
              lineNumber = 135
              onSelf = true;
              var call713 = callmethod(this, "posX", [0]);
              var opresult715 = callmethod(call713, "+", [1], var_w);
              onSelf = true;
              var call717 = callmethod(this, "posY", [0]);
              var opresult719 = callmethod(call717, "+", [1], var_h);
              var call720 = callmethod(var_Point,"x()y", [1, 1], opresult715, opresult719);
              onSelf = true;
              var call722 = callmethod(this, "posX", [0]);
              var opresult724 = callmethod(call722, "+", [1], var_w);
              onSelf = true;
              var call726 = callmethod(this, "posY", [0]);
              var diff728 = callmethod(call726, "-", [1], var_h);
              var call729 = callmethod(var_Point,"x()y", [1, 1], opresult724, diff728);
              lineNumber = 133
              var call730 = callmethod(var_collections,"list", [0]);
              var call731 = callmethod(call730,"new", [4], call702, call711, call720, call729);
              var var_poly = call731;
              lineNumber = 133;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 140
              var if732 = var_done;
              lineNumber = 137
              var call733 = callmethod(var_mouse,"location", [0]);
              var call734 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call735 = callmethod(call734, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call736 = callmethod(call735, "pointInPolygon", [2], call733, var_poly);
              if (Grace_isTrue(call736)) {
                lineNumber = 138
                onSelf = true;
                var call737 = callmethod(this, "mouseDownAction", [0]);
                var call738 = callmethod(call737,"apply", [0]);
                if732 = call738;
              }
              return if732
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
          obj671.methods["mouseDown"] = func683;
          func683.definitionLine = 130;
          func683.definitionModule = "kitty";
          var func739 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func739.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var if740 = var_done;
              lineNumber = 143
              onSelf = true;
              var call741 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call741)) {
                lineNumber = 145
                return var_done
              }
              lineNumber = 147
              lineNumber = 146
              onSelf = true;
              var call743 = callmethod(this, "image", [0]);
              var call744 = callmethod(call743,"width", [0]);
              var quotient746 = callmethod(call744, "/", [1], new GraceNum(2));
              var var_w = quotient746;
              lineNumber = 147;
              moduleName = "kitty";
              lineNumber = 146
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 148
              lineNumber = 147
              onSelf = true;
              var call748 = callmethod(this, "image", [0]);
              var call749 = callmethod(call748,"height", [0]);
              var quotient751 = callmethod(call749, "/", [1], new GraceNum(2));
              var var_h = quotient751;
              lineNumber = 148;
              moduleName = "kitty";
              lineNumber = 147
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 148
              lineNumber = 149
              onSelf = true;
              var call753 = callmethod(this, "posX", [0]);
              var diff755 = callmethod(call753, "-", [1], var_w);
              onSelf = true;
              var call757 = callmethod(this, "posY", [0]);
              var diff759 = callmethod(call757, "-", [1], var_h);
              var call760 = callmethod(var_Point,"x()y", [1, 1], diff755, diff759);
              onSelf = true;
              var call762 = callmethod(this, "posX", [0]);
              var diff764 = callmethod(call762, "-", [1], var_w);
              onSelf = true;
              var call766 = callmethod(this, "posY", [0]);
              var opresult768 = callmethod(call766, "+", [1], var_h);
              var call769 = callmethod(var_Point,"x()y", [1, 1], diff764, opresult768);
              lineNumber = 150
              onSelf = true;
              var call771 = callmethod(this, "posX", [0]);
              var opresult773 = callmethod(call771, "+", [1], var_w);
              onSelf = true;
              var call775 = callmethod(this, "posY", [0]);
              var opresult777 = callmethod(call775, "+", [1], var_h);
              var call778 = callmethod(var_Point,"x()y", [1, 1], opresult773, opresult777);
              onSelf = true;
              var call780 = callmethod(this, "posX", [0]);
              var opresult782 = callmethod(call780, "+", [1], var_w);
              onSelf = true;
              var call784 = callmethod(this, "posY", [0]);
              var diff786 = callmethod(call784, "-", [1], var_h);
              var call787 = callmethod(var_Point,"x()y", [1, 1], opresult782, diff786);
              lineNumber = 148
              var call788 = callmethod(var_collections,"list", [0]);
              var call789 = callmethod(call788,"new", [4], call760, call769, call778, call787);
              var var_poly = call789;
              lineNumber = 148;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 156
              var if790 = var_done;
              lineNumber = 152
              var call791 = callmethod(var_mouse,"location", [0]);
              var call792 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call793 = callmethod(call792, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call794 = callmethod(call793, "pointInPolygon", [2], call791, var_poly);
              if (Grace_isTrue(call794)) {
                lineNumber = 153
                onSelf = true;
                var call795 = callmethod(this, "mouseEnterAction", [0]);
                var call796 = callmethod(call795,"apply", [0]);
                lineNumber = 155
                lineNumber = 153
                lineNumber = 154
                var bool797 = new GraceBoolean(true)
                onSelf = true;
                var call798 = callmethod(this, "mouseOver:=", [1], bool797);
                if790 = call798;
              }
              return if790
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func739.paramCounts = [
            0,
          ];
          func739.variableArities = [
            false,
          ];
          obj671.methods["mouseEnter"] = func739;
          func739.definitionLine = 142;
          func739.definitionModule = "kitty";
          var func799 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func799.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 162
              var if800 = var_done;
              lineNumber = 159
              onSelf = true;
              var call801 = callmethod(this, "mouseOver", [0]);
              var call802 = callmethod(call801,"prefix!", [0]);
              if (Grace_isTrue(call802)) {
                lineNumber = 161
                return var_done
              }
              lineNumber = 163
              lineNumber = 162
              onSelf = true;
              var call804 = callmethod(this, "image", [0]);
              var call805 = callmethod(call804,"width", [0]);
              var quotient807 = callmethod(call805, "/", [1], new GraceNum(2));
              var var_w = quotient807;
              lineNumber = 163;
              moduleName = "kitty";
              lineNumber = 162
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call809 = callmethod(this, "image", [0]);
              var call810 = callmethod(call809,"height", [0]);
              var quotient812 = callmethod(call810, "/", [1], new GraceNum(2));
              var var_h = quotient812;
              lineNumber = 164;
              moduleName = "kitty";
              lineNumber = 163
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 164
              lineNumber = 165
              onSelf = true;
              var call814 = callmethod(this, "posX", [0]);
              var diff816 = callmethod(call814, "-", [1], var_w);
              onSelf = true;
              var call818 = callmethod(this, "posY", [0]);
              var diff820 = callmethod(call818, "-", [1], var_h);
              var call821 = callmethod(var_Point,"x()y", [1, 1], diff816, diff820);
              onSelf = true;
              var call823 = callmethod(this, "posX", [0]);
              var diff825 = callmethod(call823, "-", [1], var_w);
              onSelf = true;
              var call827 = callmethod(this, "posY", [0]);
              var opresult829 = callmethod(call827, "+", [1], var_h);
              var call830 = callmethod(var_Point,"x()y", [1, 1], diff825, opresult829);
              lineNumber = 166
              onSelf = true;
              var call832 = callmethod(this, "posX", [0]);
              var opresult834 = callmethod(call832, "+", [1], var_w);
              onSelf = true;
              var call836 = callmethod(this, "posY", [0]);
              var opresult838 = callmethod(call836, "+", [1], var_h);
              var call839 = callmethod(var_Point,"x()y", [1, 1], opresult834, opresult838);
              onSelf = true;
              var call841 = callmethod(this, "posX", [0]);
              var opresult843 = callmethod(call841, "+", [1], var_w);
              onSelf = true;
              var call845 = callmethod(this, "posY", [0]);
              var diff847 = callmethod(call845, "-", [1], var_h);
              var call848 = callmethod(var_Point,"x()y", [1, 1], opresult843, diff847);
              lineNumber = 164
              var call849 = callmethod(var_collections,"list", [0]);
              var call850 = callmethod(call849,"new", [4], call821, call830, call839, call848);
              var var_poly = call850;
              lineNumber = 164;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 172
              var if851 = var_done;
              lineNumber = 168
              onSelf = true;
              var call852 = callmethod(this, "mouseOver", [0]);
              var call854 = callmethod(var_mouse,"location", [0]);
              var call855 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call856 = callmethod(call855, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call857 = callmethod(call856, "pointInPolygon", [2], call854, var_poly);
              var call858 = callmethod(call857,"prefix!", [0]);
              var opresult860 = callmethod(call858, "&&", [1], call852);
              if (Grace_isTrue(opresult860)) {
                lineNumber = 169
                onSelf = true;
                var call861 = callmethod(this, "mouseExitAction", [0]);
                var call862 = callmethod(call861,"apply", [0]);
                lineNumber = 171
                lineNumber = 169
                lineNumber = 170
                var bool863 = new GraceBoolean(false)
                onSelf = true;
                var call864 = callmethod(this, "mouseOver:=", [1], bool863);
                if851 = call864;
              }
              return if851
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func799.paramCounts = [
            0,
          ];
          func799.variableArities = [
            false,
          ];
          obj671.methods["mouseExit"] = func799;
          func799.definitionLine = 158;
          func799.definitionModule = "kitty";
          var func865 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func865.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 169
              lineNumber = 176
              onSelf = true;
              var call868 = callmethod(this, "rotation", [0]);
              var prod870 = callmethod(call868, "*", [1], new GraceNum(3.14159));
              var quotient872 = callmethod(prod870, "/", [1], new GraceNum(180));
              var call873 = callmethod(var_math,"cos", [1], quotient872);
              var call875 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod878 = callmethod(var_distance, "*", [1], call875);
              var prod880 = callmethod(prod878, "*", [1], call873);
              onSelf = true;
              var call882 = callmethod(this, "posX", [0]);
              var opresult884 = callmethod(call882, "+", [1], prod880);
              onSelf = true;
              var call885 = callmethod(this, "posX:=", [1], opresult884);
              lineNumber = 177
              lineNumber = 176
              lineNumber = 177
              onSelf = true;
              var call888 = callmethod(this, "rotation", [0]);
              var prod890 = callmethod(call888, "*", [1], new GraceNum(3.14159));
              var quotient892 = callmethod(prod890, "/", [1], new GraceNum(180));
              var call893 = callmethod(var_math,"sin", [1], quotient892);
              var call895 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod898 = callmethod(var_distance, "*", [1], call895);
              var prod900 = callmethod(prod898, "*", [1], call893);
              onSelf = true;
              var call902 = callmethod(this, "posY", [0]);
              var opresult904 = callmethod(call902, "+", [1], prod900);
              onSelf = true;
              var call905 = callmethod(this, "posY:=", [1], opresult904);
              return call905
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func865.paramCounts = [
            1,
          ];
          func865.variableArities = [
            false,
          ];
          obj671.methods["move"] = func865;
          func865.definitionLine = 175;
          func865.definitionModule = "kitty";
          var func906 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func906.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 181
              lineNumber = 177
              lineNumber = 181
              onSelf = true;
              var call909 = callmethod(this, "rotation", [0]);
              var opresult912 = callmethod(new GraceNum(90), "+", [1], call909);
              var prod914 = callmethod(opresult912, "*", [1], new GraceNum(3.14159));
              var quotient916 = callmethod(prod914, "/", [1], new GraceNum(180));
              var call917 = callmethod(var_math,"cos", [1], quotient916);
              var call919 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod922 = callmethod(var_distance, "*", [1], call919);
              var prod924 = callmethod(prod922, "*", [1], call917);
              onSelf = true;
              var call926 = callmethod(this, "posX", [0]);
              var opresult928 = callmethod(call926, "+", [1], prod924);
              onSelf = true;
              var call929 = callmethod(this, "posX:=", [1], opresult928);
              lineNumber = 182
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call932 = callmethod(this, "rotation", [0]);
              var opresult935 = callmethod(new GraceNum(90), "+", [1], call932);
              var prod937 = callmethod(opresult935, "*", [1], new GraceNum(3.14159));
              var quotient939 = callmethod(prod937, "/", [1], new GraceNum(180));
              var call940 = callmethod(var_math,"sin", [1], quotient939);
              var call942 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod945 = callmethod(var_distance, "*", [1], call942);
              var prod947 = callmethod(prod945, "*", [1], call940);
              onSelf = true;
              var call949 = callmethod(this, "posY", [0]);
              var opresult951 = callmethod(call949, "+", [1], prod947);
              onSelf = true;
              var call952 = callmethod(this, "posY:=", [1], opresult951);
              return call952
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func906.paramCounts = [
            1,
          ];
          func906.variableArities = [
            false,
          ];
          obj671.methods["strafe"] = func906;
          func906.definitionLine = 180;
          func906.definitionModule = "kitty";
          var func953 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func953.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 182
              lineNumber = 187
              lineNumber = 186
              onSelf = true;
              var call955 = callmethod(this, "rotation", [0]);
              var opresult957 = callmethod(call955, "+", [1], var_angle);
              onSelf = true;
              var call958 = callmethod(this, "rotation:=", [1], opresult957);
              return call958
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func953.paramCounts = [
            1,
          ];
          func953.variableArities = [
            false,
          ];
          obj671.methods["turn"] = func953;
          func953.definitionLine = 185;
          func953.definitionModule = "kitty";
          var func959 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func959.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              var call960 = callmethod(var_ctx,"save", [0]);
              lineNumber = 192
              onSelf = true;
              var call961 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call962 = callmethod(this, "posY", [0]);
              var call963 = callmethod(var_ctx,"translate", [2], call961, call962);
              lineNumber = 193
              onSelf = true;
              var call964 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call965 = callmethod(this, "image", [0]);
              var call966 = callmethod(call965,"draw", [4], var_ctx, var_dx, var_dy, call964);
              lineNumber = 194
              var call967 = callmethod(var_ctx,"restore", [0]);
              return call967
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func959.paramCounts = [
            3,
          ];
          func959.variableArities = [
            false,
          ];
          obj671.methods["draw"] = func959;
          func959.definitionLine = 190;
          func959.definitionModule = "kitty";
          var func968 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func968.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 198
              lineNumber = 194
              lineNumber = 198
              var call969 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call970 = callmethod(call969, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call971 = callmethod(call970, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call972 = callmethod(this, "image:=", [1], call971);
              return call972
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func968.paramCounts = [
            1,
          ];
          func968.variableArities = [
            false,
          ];
          obj671.methods["createImage"] = func968;
          func968.definitionLine = 197;
          func968.definitionModule = "kitty";
          var func973 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func973.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              lineNumber = 198
              lineNumber = 202
              onSelf = true;
              var call974 = callmethod(this, "image:=", [1], var_image__39__);
              return call974
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func973.paramTypes = [];
          func973.paramTypes.push([]);
          func973.paramCounts = [
            1,
          ];
          func973.variableArities = [
            false,
          ];
          obj671.methods["setImage"] = func973;
          func973.definitionLine = 201;
          func973.definitionModule = "kitty";
          var func975 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func975.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 208
              lineNumber = 198
              lineNumber = 207
              onSelf = true;
              var call976 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call976
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func975.paramCounts = [
            1,
          ];
          func975.variableArities = [
            false,
          ];
          obj671.methods["setUpdateAction"] = func975;
          func975.definitionLine = 206;
          func975.definitionModule = "kitty";
          var func977 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func977.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 212
              lineNumber = 198
              lineNumber = 211
              onSelf = true;
              var call978 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call978
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func977.paramCounts = [
            1,
          ];
          func977.variableArities = [
            false,
          ];
          obj671.methods["setDestroyAction"] = func977;
          func977.definitionLine = 210;
          func977.definitionModule = "kitty";
          var func979 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func979.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 198
              lineNumber = 215
              onSelf = true;
              var call980 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call980
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func979.paramCounts = [
            1,
          ];
          func979.variableArities = [
            false,
          ];
          obj671.methods["setMouseDownAction"] = func979;
          func979.definitionLine = 214;
          func979.definitionModule = "kitty";
          var func981 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func981.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 198
              lineNumber = 219
              onSelf = true;
              var call982 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call982
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func981.paramCounts = [
            1,
          ];
          func981.variableArities = [
            false,
          ];
          obj671.methods["setMouseEnterAction"] = func981;
          func981.definitionLine = 218;
          func981.definitionModule = "kitty";
          var func983 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func983.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 198
              lineNumber = 223
              onSelf = true;
              var call984 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call984
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
          obj671.methods["setMouseExitAction"] = func983;
          func983.definitionLine = 222;
          func983.definitionModule = "kitty";
          var func985 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func985.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 198
              lineNumber = 227
              onSelf = true;
              var call986 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 229
              lineNumber = 198
              lineNumber = 228
              onSelf = true;
              var call987 = callmethod(this, "posY:=", [1], var_y);
              return call987
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func985.paramCounts = [
            2,
          ];
          func985.variableArities = [
            false,
          ];
          obj671.methods["setLocation"] = func985;
          func985.definitionLine = 226;
          func985.definitionModule = "kitty";
          var func988 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func988.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              lineNumber = 232
              onSelf = true;
              var call989 = callmethod(this, "posX", [0]);
              return call989
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
          obj671.methods["getX"] = func988;
          func988.definitionLine = 231;
          func988.definitionModule = "kitty";
          var func990 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func990.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              lineNumber = 236
              onSelf = true;
              var call991 = callmethod(this, "posY", [0]);
              return call991
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func990.paramCounts = [
            0,
          ];
          func990.variableArities = [
            false,
          ];
          obj671.methods["getY"] = func990;
          func990.definitionLine = 235;
          func990.definitionModule = "kitty";
          var func992 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func992.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 241
              lineNumber = 198
              lineNumber = 240
              onSelf = true;
              var call993 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call993
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func992.paramCounts = [
            1,
          ];
          func992.variableArities = [
            false,
          ];
          obj671.methods["setX"] = func992;
          func992.definitionLine = 239;
          func992.definitionModule = "kitty";
          var func994 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func994.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 245
              lineNumber = 198
              lineNumber = 244
              onSelf = true;
              var call995 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call995
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func994.paramCounts = [
            1,
          ];
          func994.variableArities = [
            false,
          ];
          obj671.methods["setY"] = func994;
          func994.definitionLine = 243;
          func994.definitionModule = "kitty";
          var func996 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func996.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 249
              lineNumber = 248
              onSelf = true;
              var call997 = callmethod(this, "rotation", [0]);
              return call997
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func996.paramCounts = [
            0,
          ];
          func996.variableArities = [
            false,
          ];
          obj671.methods["getRotation"] = func996;
          func996.definitionLine = 247;
          func996.definitionModule = "kitty";
          sourceObject = obj671;
          lineNumber = 95
          obj671.data["tag"] = var_tag__39__;
          var reader_kitty_tag_998 = function() {
            return this.data["tag"];
          }
          obj671.methods["tag"] = reader_kitty_tag_998;
          obj671.data["tag"] = var_tag__39__;
          var writer_kitty_tag_998 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj671.methods["tag:="] = writer_kitty_tag_998;
          reader_kitty_tag_998.confidential = true;
          writer_kitty_tag_998.confidential = true;
          lineNumber = 96;
          moduleName = "kitty";
          lineNumber = 95
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 96
          obj671.data["posX"] = var_x__39__;
          var reader_kitty_posX_999 = function() {
            return this.data["posX"];
          }
          obj671.methods["posX"] = reader_kitty_posX_999;
          obj671.data["posX"] = var_x__39__;
          var writer_kitty_posX_999 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj671.methods["posX:="] = writer_kitty_posX_999;
          reader_kitty_posX_999.confidential = true;
          writer_kitty_posX_999.confidential = true;
          lineNumber = 97;
          moduleName = "kitty";
          lineNumber = 96
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 97
          obj671.data["posY"] = var_y__39__;
          var reader_kitty_posY_1000 = function() {
            return this.data["posY"];
          }
          obj671.methods["posY"] = reader_kitty_posY_1000;
          obj671.data["posY"] = var_y__39__;
          var writer_kitty_posY_1000 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj671.methods["posY:="] = writer_kitty_posY_1000;
          reader_kitty_posY_1000.confidential = true;
          writer_kitty_posY_1000.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 98
          obj671.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_1001 = function() {
            return this.data["rotation"];
          }
          obj671.methods["rotation"] = reader_kitty_rotation_1001;
          obj671.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_1001 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj671.methods["rotation:="] = writer_kitty_rotation_1001;
          reader_kitty_rotation_1001.confidential = true;
          writer_kitty_rotation_1001.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 102
          var block1002 = Grace_allocObject();
          block1002.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1002.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1002.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1002.methods["match"] = GraceBlock_match;
          block1002.methods["prefix?"] = GraceBlock_lift;
          block1002.receiver = this;
          block1002.className = 'block<kitty:102>';
          block1002.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["updateAction"] = block1002;
          var reader_kitty_updateAction_1003 = function() {
            return this.data["updateAction"];
          }
          obj671.methods["updateAction"] = reader_kitty_updateAction_1003;
          obj671.data["updateAction"] = block1002;
          var writer_kitty_updateAction_1003 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj671.methods["updateAction:="] = writer_kitty_updateAction_1003;
          reader_kitty_updateAction_1003.confidential = true;
          writer_kitty_updateAction_1003.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1002)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 103
          var block1004 = Grace_allocObject();
          block1004.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1004.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1004.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1004.methods["match"] = GraceBlock_match;
          block1004.methods["prefix?"] = GraceBlock_lift;
          block1004.receiver = this;
          block1004.className = 'block<kitty:103>';
          block1004.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["destroyAction"] = block1004;
          var reader_kitty_destroyAction_1005 = function() {
            return this.data["destroyAction"];
          }
          obj671.methods["destroyAction"] = reader_kitty_destroyAction_1005;
          obj671.data["destroyAction"] = block1004;
          var writer_kitty_destroyAction_1005 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj671.methods["destroyAction:="] = writer_kitty_destroyAction_1005;
          reader_kitty_destroyAction_1005.confidential = true;
          writer_kitty_destroyAction_1005.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1004)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 104
          var block1006 = Grace_allocObject();
          block1006.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1006.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1006.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1006.methods["match"] = GraceBlock_match;
          block1006.methods["prefix?"] = GraceBlock_lift;
          block1006.receiver = this;
          block1006.className = 'block<kitty:104>';
          block1006.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["mouseDownAction"] = block1006;
          var reader_kitty_mouseDownAction_1007 = function() {
            return this.data["mouseDownAction"];
          }
          obj671.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1007;
          obj671.data["mouseDownAction"] = block1006;
          var writer_kitty_mouseDownAction_1007 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj671.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1007;
          reader_kitty_mouseDownAction_1007.confidential = true;
          writer_kitty_mouseDownAction_1007.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1006)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 105
          var block1008 = Grace_allocObject();
          block1008.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1008.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1008.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1008.methods["match"] = GraceBlock_match;
          block1008.methods["prefix?"] = GraceBlock_lift;
          block1008.receiver = this;
          block1008.className = 'block<kitty:105>';
          block1008.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["mouseDragAction"] = block1008;
          var reader_kitty_mouseDragAction_1009 = function() {
            return this.data["mouseDragAction"];
          }
          obj671.methods["mouseDragAction"] = reader_kitty_mouseDragAction_1009;
          obj671.data["mouseDragAction"] = block1008;
          var writer_kitty_mouseDragAction_1009 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj671.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_1009;
          reader_kitty_mouseDragAction_1009.confidential = true;
          writer_kitty_mouseDragAction_1009.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1008)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 106
          var block1010 = Grace_allocObject();
          block1010.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1010.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1010.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1010.methods["match"] = GraceBlock_match;
          block1010.methods["prefix?"] = GraceBlock_lift;
          block1010.receiver = this;
          block1010.className = 'block<kitty:106>';
          block1010.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["mouseEnterAction"] = block1010;
          var reader_kitty_mouseEnterAction_1011 = function() {
            return this.data["mouseEnterAction"];
          }
          obj671.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1011;
          obj671.data["mouseEnterAction"] = block1010;
          var writer_kitty_mouseEnterAction_1011 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj671.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1011;
          reader_kitty_mouseEnterAction_1011.confidential = true;
          writer_kitty_mouseEnterAction_1011.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1010)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 107
          var block1012 = Grace_allocObject();
          block1012.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1012.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1012.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1012.methods["match"] = GraceBlock_match;
          block1012.methods["prefix?"] = GraceBlock_lift;
          block1012.receiver = this;
          block1012.className = 'block<kitty:107>';
          block1012.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj671.data["mouseExitAction"] = block1012;
          var reader_kitty_mouseExitAction_1013 = function() {
            return this.data["mouseExitAction"];
          }
          obj671.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1013;
          obj671.data["mouseExitAction"] = block1012;
          var writer_kitty_mouseExitAction_1013 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj671.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1013;
          reader_kitty_mouseExitAction_1013.confidential = true;
          writer_kitty_mouseExitAction_1013.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1012)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 107
          var bool1014 = new GraceBoolean(false)
          obj671.data["mouseOver"] = bool1014;
          var reader_kitty_mouseOver_1015 = function() {
            return this.data["mouseOver"];
          }
          obj671.methods["mouseOver"] = reader_kitty_mouseOver_1015;
          obj671.data["mouseOver"] = bool1014;
          var writer_kitty_mouseOver_1015 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj671.methods["mouseOver:="] = writer_kitty_mouseOver_1015;
          reader_kitty_mouseOver_1015.confidential = true;
          writer_kitty_mouseOver_1015.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1014)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj671.mutable = true;
          sourceObject = obj671;
          obj671.data["image"] = undefined;
          var reader_kitty_image_1016 = function() {
            return this.data["image"];
          }
          obj671.methods["image"] = reader_kitty_image_1016;
          obj671.data["image"] = undefined;
          var writer_kitty_image_1016 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj671.methods["image:="] = writer_kitty_image_1016;
          reader_kitty_image_1016.confidential = true;
          writer_kitty_image_1016.confidential = true;
          obj671.mutable = true;
          sourceObject = obj671;
          lineNumber = 111
          onSelf = true;
          var call1017 = callmethod(this, "awake", [0]);
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          sourceObject = obj671;
          superDepth = origSuperDepth;
        }
        obj_init_671.apply(inheritingObject, []);
        return obj671
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj320.methods["new()object"] = func670;
    var func1018 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 91
        var string1019 = new GraceString("class KittyEntity");
        return string1019
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1018.paramCounts = [
    ];
    func1018.variableArities = [
    ];
    obj320.methods["asDebugString"] = func1018;
    func1018.definitionLine = 91;
    func1018.definitionModule = "kitty";
    sourceObject = obj320;
    sourceObject = obj320;
    superDepth = origSuperDepth;
  }
  obj_init_320.apply(obj320, []);
  var var_KittyEntity = obj320;
  lineNumber = 252
  lineNumber = 264
  lineNumber = 269
  lineNumber = 273
  lineNumber = 278
  lineNumber = 282
  lineNumber = 286
  lineNumber = 290
  lineNumber = 297
  var func1020 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1020.paramCounts[0])
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
  func1020.paramCounts = [
    0,
  ];
  func1020.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func1020;
  func1020.definitionLine = 297;
  func1020.definitionModule = "kitty";
  var obj1021 = Grace_allocObject();
  obj1021.definitionModule = "kitty";
  obj1021.definitionLine = 297;
  obj1021.outer = this;
  var reader_kitty_outer_1022 = function() {
    return this.outer;
  }
  obj1021.methods["outer"] = reader_kitty_outer_1022;
  function obj_init_1021() {
    var origSuperDepth = superDepth;
    superDepth = obj1021;
    obj1021.annotations = [];
    var func1023 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1023.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj1024 = Grace_allocObject();
        obj1024.definitionModule = "kitty";
        obj1024.definitionLine = 297;
        obj1024.outer = this;
        var reader_kitty_outer_1025 = function() {
          return this.outer;
        }
        obj1024.methods["outer"] = reader_kitty_outer_1025;
        function obj_init_1024() {
          var origSuperDepth = superDepth;
          superDepth = obj1024;
          obj1024.annotations = [];
          var func1026 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1026.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 339
              var if1027 = var_done;
              lineNumber = 335
              onSelf = true;
              var call1028 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1028)) {
                lineNumber = 337
                lineNumber = 336
                var bool1029 = new GraceBoolean(false)
                return bool1029
              }
              lineNumber = 340
              lineNumber = 297
              lineNumber = 339
              var call1030 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1031 = callmethod(this, "document:=", [1], call1030);
              lineNumber = 340
              lineNumber = 339
              lineNumber = 340
              var string1032 = new GraceString("standard-canvas");
              onSelf = true;
              var call1033 = callmethod(this, "document", [0]);
              var call1034 = callmethod(call1033,"getElementById", [1], string1032);
              onSelf = true;
              var call1035 = callmethod(this, "canvas:=", [1], call1034);
              lineNumber = 342
              lineNumber = 339
              lineNumber = 341
              onSelf = true;
              var call1036 = callmethod(this, "canvas", [0]);
              var call1037 = callmethod(call1036,"width", [0]);
              onSelf = true;
              var call1038 = callmethod(this, "canvasWidth:=", [1], call1037);
              lineNumber = 345
              lineNumber = 341
              lineNumber = 342
              onSelf = true;
              var call1039 = callmethod(this, "canvas", [0]);
              var call1040 = callmethod(call1039,"height", [0]);
              onSelf = true;
              var call1041 = callmethod(this, "canvasHeight:=", [1], call1040);
              lineNumber = 356
              var block1042 = Grace_allocObject();
              block1042.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1042.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1042.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1042.methods["match"] = GraceBlock_match;
              block1042.methods["prefix?"] = GraceBlock_lift;
              block1042.receiver = this;
              block1042.className = 'block<kitty:356>';
              block1042.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 348
                lineNumber = 347
                onSelf = true;
                var call1043 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1045 = callmethod(this, "canvas", [0]);
                var call1046 = callmethod(call1045,"offsetWidth", [0]);
                onSelf = true;
                var call1048 = callmethod(this, "canvas", [0]);
                var call1049 = callmethod(call1048,"offsetLeft", [0]);
                var call1051 = callmethod(var_ev,"clientX", [0]);
                var diff1053 = callmethod(call1051, "-", [1], call1049);
                var quotient1055 = callmethod(diff1053, "/", [1], call1046);
                var prod1057 = callmethod(quotient1055, "*", [1], call1043);
                var var_x = prod1057;
                lineNumber = 348;
                moduleName = "kitty";
                lineNumber = 347
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 349
                lineNumber = 348
                onSelf = true;
                var call1058 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1060 = callmethod(this, "canvas", [0]);
                var call1061 = callmethod(call1060,"offsetHeight", [0]);
                onSelf = true;
                var call1063 = callmethod(this, "canvas", [0]);
                var call1064 = callmethod(call1063,"offsetTop", [0]);
                var call1066 = callmethod(var_ev,"clientY", [0]);
                var diff1068 = callmethod(call1066, "-", [1], call1064);
                var quotient1070 = callmethod(diff1068, "/", [1], call1061);
                var prod1072 = callmethod(quotient1070, "*", [1], call1058);
                var var_y = prod1072;
                lineNumber = 349;
                moduleName = "kitty";
                lineNumber = 348
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 349
                lineNumber = 348
                lineNumber = 349
                var call1073 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1074 = callmethod(var_mouse,"position:=", [1], call1073);
                lineNumber = 352
                onSelf = true;
                var call1075 = callmethod(this, "entities", [0]);
                lineNumber = 355
                var block1076 = Grace_allocObject();
                block1076.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1076.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1076.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1076.methods["match"] = GraceBlock_match;
                block1076.methods["prefix?"] = GraceBlock_lift;
                block1076.receiver = this;
                block1076.className = 'block<kitty:355>';
                block1076.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 353
                  var call1077 = callmethod(var_entity,"mouseDown", [0]);
                  return call1077;
                };
                var call1078 = callmethod(Grace_prelude,"for()do", [1, 1], call1075, block1076);
                return call1078;
              };
              var_mouseDownListener = block1042;
              lineNumber = 356
              var string1079 = new GraceString("mousedown");
              onSelf = true;
              var call1080 = callmethod(this, "canvas", [0]);
              var call1081 = callmethod(call1080,"addEventListener", [2], string1079, var_mouseDownListener);
              lineNumber = 369
              var block1082 = Grace_allocObject();
              block1082.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1082.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1082.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1082.methods["match"] = GraceBlock_match;
              block1082.methods["prefix?"] = GraceBlock_lift;
              block1082.receiver = this;
              block1082.className = 'block<kitty:369>';
              block1082.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 360
                lineNumber = 359
                onSelf = true;
                var call1083 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1085 = callmethod(this, "canvas", [0]);
                var call1086 = callmethod(call1085,"offsetWidth", [0]);
                onSelf = true;
                var call1088 = callmethod(this, "canvas", [0]);
                var call1089 = callmethod(call1088,"offsetLeft", [0]);
                var call1091 = callmethod(var_ev,"clientX", [0]);
                var diff1093 = callmethod(call1091, "-", [1], call1089);
                var quotient1095 = callmethod(diff1093, "/", [1], call1086);
                var prod1097 = callmethod(quotient1095, "*", [1], call1083);
                var var_x = prod1097;
                lineNumber = 360;
                moduleName = "kitty";
                lineNumber = 359
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 361
                lineNumber = 360
                onSelf = true;
                var call1098 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1100 = callmethod(this, "canvas", [0]);
                var call1101 = callmethod(call1100,"offsetHeight", [0]);
                onSelf = true;
                var call1103 = callmethod(this, "canvas", [0]);
                var call1104 = callmethod(call1103,"offsetTop", [0]);
                var call1106 = callmethod(var_ev,"clientY", [0]);
                var diff1108 = callmethod(call1106, "-", [1], call1104);
                var quotient1110 = callmethod(diff1108, "/", [1], call1101);
                var prod1112 = callmethod(quotient1110, "*", [1], call1098);
                var var_y = prod1112;
                lineNumber = 361;
                moduleName = "kitty";
                lineNumber = 360
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 361
                lineNumber = 360
                lineNumber = 361
                var call1113 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1114 = callmethod(var_mouse,"position:=", [1], call1113);
                lineNumber = 364
                onSelf = true;
                var call1115 = callmethod(this, "entities", [0]);
                lineNumber = 368
                var block1116 = Grace_allocObject();
                block1116.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1116.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1116.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1116.methods["match"] = GraceBlock_match;
                block1116.methods["prefix?"] = GraceBlock_lift;
                block1116.receiver = this;
                block1116.className = 'block<kitty:368>';
                block1116.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 365
                  var call1117 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 366
                  var call1118 = callmethod(var_entity,"mouseExit", [0]);
                  return call1118;
                };
                var call1119 = callmethod(Grace_prelude,"for()do", [1, 1], call1115, block1116);
                return call1119;
              };
              var_mouseMoveListener = block1082;
              lineNumber = 369
              var string1120 = new GraceString("mousemove");
              onSelf = true;
              var call1121 = callmethod(this, "canvas", [0]);
              var call1122 = callmethod(call1121,"addEventListener", [2], string1120, var_mouseMoveListener);
              lineNumber = 379
              var block1123 = Grace_allocObject();
              block1123.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1123.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1123.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1123.methods["match"] = GraceBlock_match;
              block1123.methods["prefix?"] = GraceBlock_lift;
              block1123.receiver = this;
              block1123.className = 'block<kitty:379>';
              block1123.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 377
                var if1124 = var_done;
                lineNumber = 374
                var call1126 = callmethod(var_ev,"keyCode", [0]);
                var opresult1128 = callmethod(call1126, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1128)) {
                  lineNumber = 375
                  onSelf = true;
                  var call1129 = callmethod(this, "stop", [0]);
                  if1124 = call1129;
                }
                lineNumber = 378
                lineNumber = 377
                var call1130 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1130;
                return call1130;
              };
              var_keyDownListener = block1123;
              lineNumber = 379
              var string1131 = new GraceString("keydown");
              onSelf = true;
              var call1132 = callmethod(this, "document", [0]);
              var call1133 = callmethod(call1132,"addEventListener", [2], string1131, var_keyDownListener);
              lineNumber = 385
              var block1134 = Grace_allocObject();
              block1134.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1134.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1134.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1134.methods["match"] = GraceBlock_match;
              block1134.methods["prefix?"] = GraceBlock_lift;
              block1134.receiver = this;
              block1134.className = 'block<kitty:385>';
              block1134.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 384
                lineNumber = 383
                var call1135 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1135;
                return call1135;
              };
              var_keyUpListener = block1134;
              lineNumber = 385
              var string1136 = new GraceString("keyup");
              onSelf = true;
              var call1137 = callmethod(this, "document", [0]);
              var call1138 = callmethod(call1137,"addEventListener", [2], string1136, var_keyUpListener);
              lineNumber = 387
              lineNumber = 377
              lineNumber = 387
              var string1139 = new GraceString("canvas");
              var call1140 = callmethod(var_dom,"document", [0]);
              var call1141 = callmethod(call1140,"createElement", [1], string1139);
              onSelf = true;
              var call1142 = callmethod(this, "backingCanvas:=", [1], call1141);
              lineNumber = 389
              lineNumber = 387
              lineNumber = 388
              onSelf = true;
              var call1143 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1144 = callmethod(this, "backingCanvas", [0]);
              var call1145 = callmethod(call1144,"height:=", [1], call1143);
              lineNumber = 390
              lineNumber = 387
              lineNumber = 389
              onSelf = true;
              var call1146 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1147 = callmethod(this, "backingCanvas", [0]);
              var call1148 = callmethod(call1147,"width:=", [1], call1146);
              lineNumber = 390
              lineNumber = 387
              lineNumber = 390
              var string1149 = new GraceString("2d");
              onSelf = true;
              var call1150 = callmethod(this, "backingCanvas", [0]);
              var call1151 = callmethod(call1150,"getContext", [1], string1149);
              onSelf = true;
              var call1152 = callmethod(this, "backingContext:=", [1], call1151);
              lineNumber = 391
              lineNumber = 387
              lineNumber = 391
              var string1153 = new GraceString("2d");
              onSelf = true;
              var call1154 = callmethod(this, "canvas", [0]);
              var call1155 = callmethod(call1154,"getContext", [1], string1153);
              onSelf = true;
              var call1156 = callmethod(this, "mctx:=", [1], call1155);
              lineNumber = 394
              var string1157 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1158 = callmethod(this, "setBackground", [1], string1157);
              lineNumber = 397
              var call1159 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1160 = callmethod(call1159, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1161 = callmethod(call1160, "setWorld", [1], this);
              lineNumber = 400
              lineNumber = 399
              var_kitten = this;
              lineNumber = 401
              lineNumber = 397
              lineNumber = 400
              var bool1162 = new GraceBoolean(true)
              onSelf = true;
              var call1163 = callmethod(this, "isInit:=", [1], bool1162);
              return call1163
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1026.paramCounts = [
            0,
          ];
          func1026.variableArities = [
            false,
          ];
          obj1024.methods["init"] = func1026;
          func1026.definitionLine = 331;
          func1026.definitionModule = "kitty";
          var func1164 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1164.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 407
              lineNumber = 397
              lineNumber = 406
              var bool1165 = new GraceBoolean(true)
              onSelf = true;
              var call1166 = callmethod(this, "isRunning:=", [1], bool1165);
              lineNumber = 407
              var block1167 = Grace_allocObject();
              block1167.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1167.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1167.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1167.methods["match"] = GraceBlock_match;
              block1167.methods["prefix?"] = GraceBlock_lift;
              block1167.receiver = this;
              block1167.className = 'block<kitty:407>';
              block1167.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1168 = callmethod(this, "isRunning", [0]);
                return call1168;
              };
              lineNumber = 411
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
              block1169.className = 'block<kitty:411>';
              block1169.real = function(
              ) {
                sourceObject = this;
                lineNumber = 408
                onSelf = true;
                var call1170 = callmethod(this, "tick", [0]);
                return call1170;
              };
              lineNumber = 407
              var call1171 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1167, new GraceNum(10), block1169);
              return call1171
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1164.paramCounts = [
            0,
          ];
          func1164.variableArities = [
            false,
          ];
          obj1024.methods["start"] = func1164;
          func1164.definitionLine = 404;
          func1164.definitionModule = "kitty";
          var func1172 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 420
              lineNumber = 397
              lineNumber = 419
              onSelf = true;
              var call1173 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1174 = callmethod(this, "mctx", [0]);
              var call1175 = callmethod(call1174,"fillStyle:=", [1], call1173);
              lineNumber = 420
              onSelf = true;
              var call1176 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1177 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1178 = callmethod(this, "mctx", [0]);
              var call1179 = callmethod(call1178,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1176, call1177);
              lineNumber = 421
              onSelf = true;
              var call1180 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1181 = callmethod(this, "mctx", [0]);
              var call1182 = callmethod(call1181,"drawImage", [3], call1180, new GraceNum(0), new GraceNum(0));
              lineNumber = 422
              onSelf = true;
              var call1183 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1185 = callmethod(this, "canvasWidth", [0]);
              var quotient1187 = callmethod(call1185, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1189 = callmethod(this, "canvasHeight", [0]);
              var quotient1191 = callmethod(call1189, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1192 = callmethod(this, "background", [0]);
              var call1193 = callmethod(call1192,"draw", [4], call1183, quotient1187, quotient1191, new GraceNum(0));
              lineNumber = 425
              onSelf = true;
              var call1194 = callmethod(this, "updateAction", [0]);
              var call1195 = callmethod(call1194,"apply", [0]);
              lineNumber = 428
              onSelf = true;
              var call1196 = callmethod(this, "entities", [0]);
              lineNumber = 435
              var block1197 = Grace_allocObject();
              block1197.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1197.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1197.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1197.methods["match"] = GraceBlock_match;
              block1197.methods["prefix?"] = GraceBlock_lift;
              block1197.receiver = this;
              block1197.className = 'block<kitty:435>';
              block1197.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 429
                var call1198 = callmethod(var_entity,"tick", [0]);
                lineNumber = 431
                onSelf = true;
                var call1199 = callmethod(this, "mctx", [0]);
                var call1200 = callmethod(var_entity,"draw", [3], call1199, new GraceNum(0), new GraceNum(0));
                return call1200;
              };
              var call1201 = callmethod(Grace_prelude,"for()do", [1, 1], call1196, block1197);
              return call1201
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1172.paramCounts = [
            0,
          ];
          func1172.variableArities = [
            false,
          ];
          obj1024.methods["tick"] = func1172;
          func1172.definitionLine = 414;
          func1172.definitionModule = "kitty";
          var func1202 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1202.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 438
              var string1203 = new GraceString("WORLD STOPPING...");
              var call1204 = Grace_print(string1203);
              lineNumber = 440
              lineNumber = 429
              lineNumber = 439
              var bool1205 = new GraceBoolean(false)
              onSelf = true;
              var call1206 = callmethod(this, "isRunning:=", [1], bool1205);
              lineNumber = 440
              onSelf = true;
              var call1207 = callmethod(this, "destroyAction", [0]);
              var call1208 = callmethod(call1207,"apply", [0]);
              lineNumber = 441
              onSelf = true;
              var call1209 = callmethod(this, "entities", [0]);
              lineNumber = 444
              var block1210 = Grace_allocObject();
              block1210.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1210.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1210.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1210.methods["match"] = GraceBlock_match;
              block1210.methods["prefix?"] = GraceBlock_lift;
              block1210.receiver = this;
              block1210.className = 'block<kitty:444>';
              block1210.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 442
                var call1211 = callmethod(var_entity,"kill", [0]);
                return call1211;
              };
              var call1212 = callmethod(Grace_prelude,"for()do", [1, 1], call1209, block1210);
              lineNumber = 444
              var string1213 = new GraceString("mousedown");
              onSelf = true;
              var call1214 = callmethod(this, "canvas", [0]);
              var call1215 = callmethod(call1214,"removeEventListener", [2], string1213, var_mouseDownListener);
              lineNumber = 445
              var string1216 = new GraceString("mousemove");
              onSelf = true;
              var call1217 = callmethod(this, "canvas", [0]);
              var call1218 = callmethod(call1217,"removeEventListener", [2], string1216, var_mouseMoveListener);
              lineNumber = 446
              var string1219 = new GraceString("keydown");
              onSelf = true;
              var call1220 = callmethod(this, "document", [0]);
              var call1221 = callmethod(call1220,"removeEventListener", [2], string1219, var_keyDownListener);
              lineNumber = 447
              var string1222 = new GraceString("keyup");
              onSelf = true;
              var call1223 = callmethod(this, "document", [0]);
              var call1224 = callmethod(call1223,"removeEventListener", [2], string1222, var_keyUpListener);
              return call1224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1202.paramCounts = [
            0,
          ];
          func1202.variableArities = [
            false,
          ];
          obj1024.methods["stop"] = func1202;
          func1202.definitionLine = 437;
          func1202.definitionModule = "kitty";
          var func1225 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 451
              lineNumber = 442
              lineNumber = 451
              onSelf = true;
              var call1226 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1227 = callmethod(this, "canvasHeight", [0]);
              var call1228 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1229 = callmethod(call1228, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1230 = callmethod(call1229, "Image()width()height", [1, 1, 1], var_url, call1226, call1227);
              onSelf = true;
              var call1231 = callmethod(this, "background:=", [1], call1230);
              return call1231
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1225.paramCounts = [
            1,
          ];
          func1225.variableArities = [
            false,
          ];
          obj1024.methods["setBackground"] = func1225;
          func1225.definitionLine = 450;
          func1225.definitionModule = "kitty";
          var func1232 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1232.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 455
              onSelf = true;
              var call1233 = callmethod(this, "entities", [0]);
              var call1234 = callmethod(call1233,"push", [1], var_e);
              return call1234
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1232.paramCounts = [
            1,
          ];
          func1232.variableArities = [
            false,
          ];
          obj1024.methods["addEntity"] = func1232;
          func1232.definitionLine = 454;
          func1232.definitionModule = "kitty";
          var func1235 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1235.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 460
              lineNumber = 459
              onSelf = true;
              var call1236 = callmethod(this, "mctx", [0]);
              return call1236
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1235.paramCounts = [
            0,
          ];
          func1235.variableArities = [
            false,
          ];
          obj1024.methods["getContext"] = func1235;
          func1235.definitionLine = 458;
          func1235.definitionModule = "kitty";
          var func1237 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 464
              lineNumber = 463
              onSelf = true;
              var call1238 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1240 = callmethod(this, "canvasWidth", [0]);
              var quotient1242 = callmethod(call1240, "/", [1], call1238);
              return quotient1242
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
          obj1024.methods["moveWidthMultipler"] = func1237;
          func1237.definitionLine = 462;
          func1237.definitionModule = "kitty";
          var func1243 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1243.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 468
              lineNumber = 467
              onSelf = true;
              var call1244 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1246 = callmethod(this, "canvasHeight", [0]);
              var quotient1248 = callmethod(call1246, "/", [1], call1244);
              return quotient1248
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1243.paramCounts = [
            0,
          ];
          func1243.variableArities = [
            false,
          ];
          obj1024.methods["moveHeightMultipler"] = func1243;
          func1243.definitionLine = 466;
          func1243.definitionModule = "kitty";
          var func1249 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 472
              lineNumber = 451
              lineNumber = 471
              onSelf = true;
              var call1250 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1249.paramCounts = [
            1,
          ];
          func1249.variableArities = [
            false,
          ];
          obj1024.methods["setUpdateAction"] = func1249;
          func1249.definitionLine = 470;
          func1249.definitionModule = "kitty";
          var func1251 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 476
              lineNumber = 451
              lineNumber = 475
              onSelf = true;
              var call1252 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj1024.methods["setDestroyAction"] = func1251;
          func1251.definitionLine = 474;
          func1251.definitionModule = "kitty";
          sourceObject = obj1024;
          lineNumber = 300
          obj1024.data["width"] = var_width__39__;
          var reader_kitty_width_1253 = function() {
            return this.data["width"];
          }
          obj1024.methods["width"] = reader_kitty_width_1253;
          obj1024.data["width"] = var_width__39__;
          var writer_kitty_width_1253 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1024.methods["width:="] = writer_kitty_width_1253;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 300
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 301
          obj1024.data["height"] = var_height__39__;
          var reader_kitty_height_1254 = function() {
            return this.data["height"];
          }
          obj1024.methods["height"] = reader_kitty_height_1254;
          obj1024.data["height"] = var_height__39__;
          var writer_kitty_height_1254 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1024.methods["height:="] = writer_kitty_height_1254;
          lineNumber = 302;
          moduleName = "kitty";
          lineNumber = 301
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 302
          obj1024.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1255 = function() {
            return this.data["tag"];
          }
          obj1024.methods["tag"] = reader_kitty_tag_1255;
          obj1024.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1255 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1024.methods["tag:="] = writer_kitty_tag_1255;
          lineNumber = 304;
          moduleName = "kitty";
          lineNumber = 302
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["background"] = undefined;
          var reader_kitty_background_1256 = function() {
            return this.data["background"];
          }
          obj1024.methods["background"] = reader_kitty_background_1256;
          obj1024.data["background"] = undefined;
          var writer_kitty_background_1256 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1024.methods["background:="] = writer_kitty_background_1256;
          reader_kitty_background_1256.confidential = true;
          writer_kitty_background_1256.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 305
          var string1257 = new GraceString("black");
          obj1024.data["backgroundColour"] = string1257;
          var reader_kitty_backgroundColour_1258 = function() {
            return this.data["backgroundColour"];
          }
          obj1024.methods["backgroundColour"] = reader_kitty_backgroundColour_1258;
          obj1024.data["backgroundColour"] = string1257;
          var writer_kitty_backgroundColour_1258 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1024.methods["backgroundColour:="] = writer_kitty_backgroundColour_1258;
          reader_kitty_backgroundColour_1258.confidential = true;
          writer_kitty_backgroundColour_1258.confidential = true;
          lineNumber = 307;
          moduleName = "kitty";
          lineNumber = 305
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1257)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["document"] = undefined;
          var reader_kitty_document_1259 = function() {
            return this.data["document"];
          }
          obj1024.methods["document"] = reader_kitty_document_1259;
          obj1024.data["document"] = undefined;
          var writer_kitty_document_1259 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1024.methods["document:="] = writer_kitty_document_1259;
          reader_kitty_document_1259.confidential = true;
          writer_kitty_document_1259.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1260 = function() {
            return this.data["backingCanvas"];
          }
          obj1024.methods["backingCanvas"] = reader_kitty_backingCanvas_1260;
          obj1024.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1260 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1024.methods["backingCanvas:="] = writer_kitty_backingCanvas_1260;
          reader_kitty_backingCanvas_1260.confidential = true;
          writer_kitty_backingCanvas_1260.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1261 = function() {
            return this.data["backingContext"];
          }
          obj1024.methods["backingContext"] = reader_kitty_backingContext_1261;
          obj1024.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1261 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1024.methods["backingContext:="] = writer_kitty_backingContext_1261;
          reader_kitty_backingContext_1261.confidential = true;
          writer_kitty_backingContext_1261.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["canvas"] = undefined;
          var reader_kitty_canvas_1262 = function() {
            return this.data["canvas"];
          }
          obj1024.methods["canvas"] = reader_kitty_canvas_1262;
          obj1024.data["canvas"] = undefined;
          var writer_kitty_canvas_1262 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1024.methods["canvas:="] = writer_kitty_canvas_1262;
          reader_kitty_canvas_1262.confidential = true;
          writer_kitty_canvas_1262.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1263 = function() {
            return this.data["canvasWidth"];
          }
          obj1024.methods["canvasWidth"] = reader_kitty_canvasWidth_1263;
          obj1024.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1263 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1024.methods["canvasWidth:="] = writer_kitty_canvasWidth_1263;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1264 = function() {
            return this.data["canvasHeight"];
          }
          obj1024.methods["canvasHeight"] = reader_kitty_canvasHeight_1264;
          obj1024.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1264 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1024.methods["canvasHeight:="] = writer_kitty_canvasHeight_1264;
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 316
          var call1265 = callmethod(var_collections,"list", [0]);
          var call1266 = callmethod(call1265,"new", [0]);
          obj1024.data["entities"] = call1266;
          var reader_kitty_entities_1267 = function() {
            return this.data["entities"];
          }
          obj1024.methods["entities"] = reader_kitty_entities_1267;
          obj1024.data["entities"] = call1266;
          var writer_kitty_entities_1267 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1024.methods["entities:="] = writer_kitty_entities_1267;
          reader_kitty_entities_1267.confidential = true;
          writer_kitty_entities_1267.confidential = true;
          lineNumber = 318;
          moduleName = "kitty";
          lineNumber = 316
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1266)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 318
          var bool1268 = new GraceBoolean(false)
          obj1024.data["isInit"] = bool1268;
          var reader_kitty_isInit_1269 = function() {
            return this.data["isInit"];
          }
          obj1024.methods["isInit"] = reader_kitty_isInit_1269;
          obj1024.data["isInit"] = bool1268;
          var writer_kitty_isInit_1269 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1024.methods["isInit:="] = writer_kitty_isInit_1269;
          reader_kitty_isInit_1269.confidential = true;
          writer_kitty_isInit_1269.confidential = true;
          lineNumber = 319;
          moduleName = "kitty";
          lineNumber = 318
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1268)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 319
          var bool1270 = new GraceBoolean(false)
          obj1024.data["isRunning"] = bool1270;
          var reader_kitty_isRunning_1271 = function() {
            return this.data["isRunning"];
          }
          obj1024.methods["isRunning"] = reader_kitty_isRunning_1271;
          obj1024.data["isRunning"] = bool1270;
          var writer_kitty_isRunning_1271 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1024.methods["isRunning:="] = writer_kitty_isRunning_1271;
          reader_kitty_isRunning_1271.confidential = true;
          writer_kitty_isRunning_1271.confidential = true;
          lineNumber = 321;
          moduleName = "kitty";
          lineNumber = 319
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1270)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["mctx"] = undefined;
          var reader_kitty_mctx_1272 = function() {
            return this.data["mctx"];
          }
          obj1024.methods["mctx"] = reader_kitty_mctx_1272;
          obj1024.data["mctx"] = undefined;
          var writer_kitty_mctx_1272 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1024.methods["mctx:="] = writer_kitty_mctx_1272;
          reader_kitty_mctx_1272.confidential = true;
          writer_kitty_mctx_1272.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          obj1024.data["ent"] = undefined;
          var reader_kitty_ent_1273 = function() {
            return this.data["ent"];
          }
          obj1024.methods["ent"] = reader_kitty_ent_1273;
          obj1024.data["ent"] = undefined;
          var writer_kitty_ent_1273 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1024.methods["ent:="] = writer_kitty_ent_1273;
          reader_kitty_ent_1273.confidential = true;
          writer_kitty_ent_1273.confidential = true;
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 326
          var block1274 = Grace_allocObject();
          block1274.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1274.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1274.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1274.methods["match"] = GraceBlock_match;
          block1274.methods["prefix?"] = GraceBlock_lift;
          block1274.receiver = this;
          block1274.className = 'block<kitty:326>';
          block1274.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1024.data["updateAction"] = block1274;
          var reader_kitty_updateAction_1275 = function() {
            return this.data["updateAction"];
          }
          obj1024.methods["updateAction"] = reader_kitty_updateAction_1275;
          obj1024.data["updateAction"] = block1274;
          var writer_kitty_updateAction_1275 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1024.methods["updateAction:="] = writer_kitty_updateAction_1275;
          reader_kitty_updateAction_1275.confidential = true;
          writer_kitty_updateAction_1275.confidential = true;
          lineNumber = 326;
          moduleName = "kitty";
          lineNumber = 325
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1274)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 328
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
          block1276.className = 'block<kitty:328>';
          block1276.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1024.data["destroyAction"] = block1276;
          var reader_kitty_destroyAction_1277 = function() {
            return this.data["destroyAction"];
          }
          obj1024.methods["destroyAction"] = reader_kitty_destroyAction_1277;
          obj1024.data["destroyAction"] = block1276;
          var writer_kitty_destroyAction_1277 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1024.methods["destroyAction:="] = writer_kitty_destroyAction_1277;
          reader_kitty_destroyAction_1277.confidential = true;
          writer_kitty_destroyAction_1277.confidential = true;
          lineNumber = 328;
          moduleName = "kitty";
          lineNumber = 326
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1276)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1024.mutable = true;
          sourceObject = obj1024;
          lineNumber = 328
          onSelf = true;
          var call1278 = callmethod(this, "init", [0]);
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          sourceObject = obj1024;
          superDepth = origSuperDepth;
        }
        obj_init_1024.apply(obj1024, []);
        return obj1024
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1023.paramCounts = [
      3,
    ];
    func1023.variableArities = [
      false,
    ];
    obj1021.methods["new"] = func1023;
    func1023.definitionLine = 297;
    func1023.definitionModule = "kitty";
    var func1279 = function(argcv) {
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
        var obj1280 = Grace_allocObject();
        obj1280.definitionModule = "kitty";
        obj1280.definitionLine = 297;
        var inho1280 = inheritingObject;
        while (inho1280.superobj) inho1280 = inho1280.superobj;
        inho1280.superobj = obj1280;
        obj1280.data = inheritingObject.data;
        obj1280.outer = this;
        var reader_kitty_outer_1281 = function() {
          return this.outer;
        }
        obj1280.methods["outer"] = reader_kitty_outer_1281;
        function obj_init_1280() {
          var origSuperDepth = superDepth;
          superDepth = obj1280;
          obj1280.annotations = [];
          var func1282 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 339
              var if1283 = var_done;
              lineNumber = 335
              onSelf = true;
              var call1284 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1284)) {
                lineNumber = 337
                lineNumber = 336
                var bool1285 = new GraceBoolean(false)
                return bool1285
              }
              lineNumber = 340
              lineNumber = 316
              lineNumber = 339
              var call1286 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1287 = callmethod(this, "document:=", [1], call1286);
              lineNumber = 340
              lineNumber = 339
              lineNumber = 340
              var string1288 = new GraceString("standard-canvas");
              onSelf = true;
              var call1289 = callmethod(this, "document", [0]);
              var call1290 = callmethod(call1289,"getElementById", [1], string1288);
              onSelf = true;
              var call1291 = callmethod(this, "canvas:=", [1], call1290);
              lineNumber = 342
              lineNumber = 339
              lineNumber = 341
              onSelf = true;
              var call1292 = callmethod(this, "canvas", [0]);
              var call1293 = callmethod(call1292,"width", [0]);
              onSelf = true;
              var call1294 = callmethod(this, "canvasWidth:=", [1], call1293);
              lineNumber = 345
              lineNumber = 341
              lineNumber = 342
              onSelf = true;
              var call1295 = callmethod(this, "canvas", [0]);
              var call1296 = callmethod(call1295,"height", [0]);
              onSelf = true;
              var call1297 = callmethod(this, "canvasHeight:=", [1], call1296);
              lineNumber = 356
              var block1298 = Grace_allocObject();
              block1298.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1298.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1298.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1298.methods["match"] = GraceBlock_match;
              block1298.methods["prefix?"] = GraceBlock_lift;
              block1298.receiver = this;
              block1298.className = 'block<kitty:356>';
              block1298.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 348
                lineNumber = 347
                onSelf = true;
                var call1299 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1301 = callmethod(this, "canvas", [0]);
                var call1302 = callmethod(call1301,"offsetWidth", [0]);
                onSelf = true;
                var call1304 = callmethod(this, "canvas", [0]);
                var call1305 = callmethod(call1304,"offsetLeft", [0]);
                var call1307 = callmethod(var_ev,"clientX", [0]);
                var diff1309 = callmethod(call1307, "-", [1], call1305);
                var quotient1311 = callmethod(diff1309, "/", [1], call1302);
                var prod1313 = callmethod(quotient1311, "*", [1], call1299);
                var var_x = prod1313;
                lineNumber = 348;
                moduleName = "kitty";
                lineNumber = 347
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 349
                lineNumber = 348
                onSelf = true;
                var call1314 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1316 = callmethod(this, "canvas", [0]);
                var call1317 = callmethod(call1316,"offsetHeight", [0]);
                onSelf = true;
                var call1319 = callmethod(this, "canvas", [0]);
                var call1320 = callmethod(call1319,"offsetTop", [0]);
                var call1322 = callmethod(var_ev,"clientY", [0]);
                var diff1324 = callmethod(call1322, "-", [1], call1320);
                var quotient1326 = callmethod(diff1324, "/", [1], call1317);
                var prod1328 = callmethod(quotient1326, "*", [1], call1314);
                var var_y = prod1328;
                lineNumber = 349;
                moduleName = "kitty";
                lineNumber = 348
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 349
                lineNumber = 348
                lineNumber = 349
                var call1329 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1330 = callmethod(var_mouse,"position:=", [1], call1329);
                lineNumber = 352
                onSelf = true;
                var call1331 = callmethod(this, "entities", [0]);
                lineNumber = 355
                var block1332 = Grace_allocObject();
                block1332.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1332.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1332.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1332.methods["match"] = GraceBlock_match;
                block1332.methods["prefix?"] = GraceBlock_lift;
                block1332.receiver = this;
                block1332.className = 'block<kitty:355>';
                block1332.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 353
                  var call1333 = callmethod(var_entity,"mouseDown", [0]);
                  return call1333;
                };
                var call1334 = callmethod(Grace_prelude,"for()do", [1, 1], call1331, block1332);
                return call1334;
              };
              var_mouseDownListener = block1298;
              lineNumber = 356
              var string1335 = new GraceString("mousedown");
              onSelf = true;
              var call1336 = callmethod(this, "canvas", [0]);
              var call1337 = callmethod(call1336,"addEventListener", [2], string1335, var_mouseDownListener);
              lineNumber = 369
              var block1338 = Grace_allocObject();
              block1338.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1338.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1338.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1338.methods["match"] = GraceBlock_match;
              block1338.methods["prefix?"] = GraceBlock_lift;
              block1338.receiver = this;
              block1338.className = 'block<kitty:369>';
              block1338.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 360
                lineNumber = 359
                onSelf = true;
                var call1339 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1341 = callmethod(this, "canvas", [0]);
                var call1342 = callmethod(call1341,"offsetWidth", [0]);
                onSelf = true;
                var call1344 = callmethod(this, "canvas", [0]);
                var call1345 = callmethod(call1344,"offsetLeft", [0]);
                var call1347 = callmethod(var_ev,"clientX", [0]);
                var diff1349 = callmethod(call1347, "-", [1], call1345);
                var quotient1351 = callmethod(diff1349, "/", [1], call1342);
                var prod1353 = callmethod(quotient1351, "*", [1], call1339);
                var var_x = prod1353;
                lineNumber = 360;
                moduleName = "kitty";
                lineNumber = 359
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 361
                lineNumber = 360
                onSelf = true;
                var call1354 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1356 = callmethod(this, "canvas", [0]);
                var call1357 = callmethod(call1356,"offsetHeight", [0]);
                onSelf = true;
                var call1359 = callmethod(this, "canvas", [0]);
                var call1360 = callmethod(call1359,"offsetTop", [0]);
                var call1362 = callmethod(var_ev,"clientY", [0]);
                var diff1364 = callmethod(call1362, "-", [1], call1360);
                var quotient1366 = callmethod(diff1364, "/", [1], call1357);
                var prod1368 = callmethod(quotient1366, "*", [1], call1354);
                var var_y = prod1368;
                lineNumber = 361;
                moduleName = "kitty";
                lineNumber = 360
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 361
                lineNumber = 360
                lineNumber = 361
                var call1369 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1370 = callmethod(var_mouse,"position:=", [1], call1369);
                lineNumber = 364
                onSelf = true;
                var call1371 = callmethod(this, "entities", [0]);
                lineNumber = 368
                var block1372 = Grace_allocObject();
                block1372.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1372.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1372.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1372.methods["match"] = GraceBlock_match;
                block1372.methods["prefix?"] = GraceBlock_lift;
                block1372.receiver = this;
                block1372.className = 'block<kitty:368>';
                block1372.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 365
                  var call1373 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 366
                  var call1374 = callmethod(var_entity,"mouseExit", [0]);
                  return call1374;
                };
                var call1375 = callmethod(Grace_prelude,"for()do", [1, 1], call1371, block1372);
                return call1375;
              };
              var_mouseMoveListener = block1338;
              lineNumber = 369
              var string1376 = new GraceString("mousemove");
              onSelf = true;
              var call1377 = callmethod(this, "canvas", [0]);
              var call1378 = callmethod(call1377,"addEventListener", [2], string1376, var_mouseMoveListener);
              lineNumber = 379
              var block1379 = Grace_allocObject();
              block1379.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1379.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1379.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1379.methods["match"] = GraceBlock_match;
              block1379.methods["prefix?"] = GraceBlock_lift;
              block1379.receiver = this;
              block1379.className = 'block<kitty:379>';
              block1379.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 377
                var if1380 = var_done;
                lineNumber = 374
                var call1382 = callmethod(var_ev,"keyCode", [0]);
                var opresult1384 = callmethod(call1382, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1384)) {
                  lineNumber = 375
                  onSelf = true;
                  var call1385 = callmethod(this, "stop", [0]);
                  if1380 = call1385;
                }
                lineNumber = 378
                lineNumber = 377
                var call1386 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1386;
                return call1386;
              };
              var_keyDownListener = block1379;
              lineNumber = 379
              var string1387 = new GraceString("keydown");
              onSelf = true;
              var call1388 = callmethod(this, "document", [0]);
              var call1389 = callmethod(call1388,"addEventListener", [2], string1387, var_keyDownListener);
              lineNumber = 385
              var block1390 = Grace_allocObject();
              block1390.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1390.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1390.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1390.methods["match"] = GraceBlock_match;
              block1390.methods["prefix?"] = GraceBlock_lift;
              block1390.receiver = this;
              block1390.className = 'block<kitty:385>';
              block1390.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 384
                lineNumber = 383
                var call1391 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1391;
                return call1391;
              };
              var_keyUpListener = block1390;
              lineNumber = 385
              var string1392 = new GraceString("keyup");
              onSelf = true;
              var call1393 = callmethod(this, "document", [0]);
              var call1394 = callmethod(call1393,"addEventListener", [2], string1392, var_keyUpListener);
              lineNumber = 387
              lineNumber = 377
              lineNumber = 387
              var string1395 = new GraceString("canvas");
              var call1396 = callmethod(var_dom,"document", [0]);
              var call1397 = callmethod(call1396,"createElement", [1], string1395);
              onSelf = true;
              var call1398 = callmethod(this, "backingCanvas:=", [1], call1397);
              lineNumber = 389
              lineNumber = 387
              lineNumber = 388
              onSelf = true;
              var call1399 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1400 = callmethod(this, "backingCanvas", [0]);
              var call1401 = callmethod(call1400,"height:=", [1], call1399);
              lineNumber = 390
              lineNumber = 387
              lineNumber = 389
              onSelf = true;
              var call1402 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1403 = callmethod(this, "backingCanvas", [0]);
              var call1404 = callmethod(call1403,"width:=", [1], call1402);
              lineNumber = 390
              lineNumber = 387
              lineNumber = 390
              var string1405 = new GraceString("2d");
              onSelf = true;
              var call1406 = callmethod(this, "backingCanvas", [0]);
              var call1407 = callmethod(call1406,"getContext", [1], string1405);
              onSelf = true;
              var call1408 = callmethod(this, "backingContext:=", [1], call1407);
              lineNumber = 391
              lineNumber = 387
              lineNumber = 391
              var string1409 = new GraceString("2d");
              onSelf = true;
              var call1410 = callmethod(this, "canvas", [0]);
              var call1411 = callmethod(call1410,"getContext", [1], string1409);
              onSelf = true;
              var call1412 = callmethod(this, "mctx:=", [1], call1411);
              lineNumber = 394
              var string1413 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1414 = callmethod(this, "setBackground", [1], string1413);
              lineNumber = 397
              var call1415 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1416 = callmethod(call1415, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1417 = callmethod(call1416, "setWorld", [1], this);
              lineNumber = 400
              lineNumber = 399
              var_kitten = this;
              lineNumber = 401
              lineNumber = 397
              lineNumber = 400
              var bool1418 = new GraceBoolean(true)
              onSelf = true;
              var call1419 = callmethod(this, "isInit:=", [1], bool1418);
              return call1419
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1282.paramCounts = [
            0,
          ];
          func1282.variableArities = [
            false,
          ];
          obj1280.methods["init"] = func1282;
          func1282.definitionLine = 331;
          func1282.definitionModule = "kitty";
          var func1420 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1420.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 407
              lineNumber = 397
              lineNumber = 406
              var bool1421 = new GraceBoolean(true)
              onSelf = true;
              var call1422 = callmethod(this, "isRunning:=", [1], bool1421);
              lineNumber = 407
              var block1423 = Grace_allocObject();
              block1423.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1423.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1423.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1423.methods["match"] = GraceBlock_match;
              block1423.methods["prefix?"] = GraceBlock_lift;
              block1423.receiver = this;
              block1423.className = 'block<kitty:407>';
              block1423.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1424 = callmethod(this, "isRunning", [0]);
                return call1424;
              };
              lineNumber = 411
              var block1425 = Grace_allocObject();
              block1425.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1425.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1425.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1425.methods["match"] = GraceBlock_match;
              block1425.methods["prefix?"] = GraceBlock_lift;
              block1425.receiver = this;
              block1425.className = 'block<kitty:411>';
              block1425.real = function(
              ) {
                sourceObject = this;
                lineNumber = 408
                onSelf = true;
                var call1426 = callmethod(this, "tick", [0]);
                return call1426;
              };
              lineNumber = 407
              var call1427 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1423, new GraceNum(10), block1425);
              return call1427
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1420.paramCounts = [
            0,
          ];
          func1420.variableArities = [
            false,
          ];
          obj1280.methods["start"] = func1420;
          func1420.definitionLine = 404;
          func1420.definitionModule = "kitty";
          var func1428 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 420
              lineNumber = 397
              lineNumber = 419
              onSelf = true;
              var call1429 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1430 = callmethod(this, "mctx", [0]);
              var call1431 = callmethod(call1430,"fillStyle:=", [1], call1429);
              lineNumber = 420
              onSelf = true;
              var call1432 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1433 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1434 = callmethod(this, "mctx", [0]);
              var call1435 = callmethod(call1434,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1432, call1433);
              lineNumber = 421
              onSelf = true;
              var call1436 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1437 = callmethod(this, "mctx", [0]);
              var call1438 = callmethod(call1437,"drawImage", [3], call1436, new GraceNum(0), new GraceNum(0));
              lineNumber = 422
              onSelf = true;
              var call1439 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1441 = callmethod(this, "canvasWidth", [0]);
              var quotient1443 = callmethod(call1441, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1445 = callmethod(this, "canvasHeight", [0]);
              var quotient1447 = callmethod(call1445, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1448 = callmethod(this, "background", [0]);
              var call1449 = callmethod(call1448,"draw", [4], call1439, quotient1443, quotient1447, new GraceNum(0));
              lineNumber = 425
              onSelf = true;
              var call1450 = callmethod(this, "updateAction", [0]);
              var call1451 = callmethod(call1450,"apply", [0]);
              lineNumber = 428
              onSelf = true;
              var call1452 = callmethod(this, "entities", [0]);
              lineNumber = 435
              var block1453 = Grace_allocObject();
              block1453.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1453.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1453.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1453.methods["match"] = GraceBlock_match;
              block1453.methods["prefix?"] = GraceBlock_lift;
              block1453.receiver = this;
              block1453.className = 'block<kitty:435>';
              block1453.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 429
                var call1454 = callmethod(var_entity,"tick", [0]);
                lineNumber = 431
                onSelf = true;
                var call1455 = callmethod(this, "mctx", [0]);
                var call1456 = callmethod(var_entity,"draw", [3], call1455, new GraceNum(0), new GraceNum(0));
                return call1456;
              };
              var call1457 = callmethod(Grace_prelude,"for()do", [1, 1], call1452, block1453);
              return call1457
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1428.paramCounts = [
            0,
          ];
          func1428.variableArities = [
            false,
          ];
          obj1280.methods["tick"] = func1428;
          func1428.definitionLine = 414;
          func1428.definitionModule = "kitty";
          var func1458 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1458.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 438
              var string1459 = new GraceString("WORLD STOPPING...");
              var call1460 = Grace_print(string1459);
              lineNumber = 440
              lineNumber = 429
              lineNumber = 439
              var bool1461 = new GraceBoolean(false)
              onSelf = true;
              var call1462 = callmethod(this, "isRunning:=", [1], bool1461);
              lineNumber = 440
              onSelf = true;
              var call1463 = callmethod(this, "destroyAction", [0]);
              var call1464 = callmethod(call1463,"apply", [0]);
              lineNumber = 441
              onSelf = true;
              var call1465 = callmethod(this, "entities", [0]);
              lineNumber = 444
              var block1466 = Grace_allocObject();
              block1466.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1466.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1466.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1466.methods["match"] = GraceBlock_match;
              block1466.methods["prefix?"] = GraceBlock_lift;
              block1466.receiver = this;
              block1466.className = 'block<kitty:444>';
              block1466.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 442
                var call1467 = callmethod(var_entity,"kill", [0]);
                return call1467;
              };
              var call1468 = callmethod(Grace_prelude,"for()do", [1, 1], call1465, block1466);
              lineNumber = 444
              var string1469 = new GraceString("mousedown");
              onSelf = true;
              var call1470 = callmethod(this, "canvas", [0]);
              var call1471 = callmethod(call1470,"removeEventListener", [2], string1469, var_mouseDownListener);
              lineNumber = 445
              var string1472 = new GraceString("mousemove");
              onSelf = true;
              var call1473 = callmethod(this, "canvas", [0]);
              var call1474 = callmethod(call1473,"removeEventListener", [2], string1472, var_mouseMoveListener);
              lineNumber = 446
              var string1475 = new GraceString("keydown");
              onSelf = true;
              var call1476 = callmethod(this, "document", [0]);
              var call1477 = callmethod(call1476,"removeEventListener", [2], string1475, var_keyDownListener);
              lineNumber = 447
              var string1478 = new GraceString("keyup");
              onSelf = true;
              var call1479 = callmethod(this, "document", [0]);
              var call1480 = callmethod(call1479,"removeEventListener", [2], string1478, var_keyUpListener);
              return call1480
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1458.paramCounts = [
            0,
          ];
          func1458.variableArities = [
            false,
          ];
          obj1280.methods["stop"] = func1458;
          func1458.definitionLine = 437;
          func1458.definitionModule = "kitty";
          var func1481 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1481.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 451
              lineNumber = 442
              lineNumber = 451
              onSelf = true;
              var call1482 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1483 = callmethod(this, "canvasHeight", [0]);
              var call1484 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1485 = callmethod(call1484, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1486 = callmethod(call1485, "Image()width()height", [1, 1, 1], var_url, call1482, call1483);
              onSelf = true;
              var call1487 = callmethod(this, "background:=", [1], call1486);
              return call1487
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1481.paramCounts = [
            1,
          ];
          func1481.variableArities = [
            false,
          ];
          obj1280.methods["setBackground"] = func1481;
          func1481.definitionLine = 450;
          func1481.definitionModule = "kitty";
          var func1488 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1488.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 455
              onSelf = true;
              var call1489 = callmethod(this, "entities", [0]);
              var call1490 = callmethod(call1489,"push", [1], var_e);
              return call1490
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1488.paramCounts = [
            1,
          ];
          func1488.variableArities = [
            false,
          ];
          obj1280.methods["addEntity"] = func1488;
          func1488.definitionLine = 454;
          func1488.definitionModule = "kitty";
          var func1491 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1491.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 460
              lineNumber = 459
              onSelf = true;
              var call1492 = callmethod(this, "mctx", [0]);
              return call1492
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1491.paramCounts = [
            0,
          ];
          func1491.variableArities = [
            false,
          ];
          obj1280.methods["getContext"] = func1491;
          func1491.definitionLine = 458;
          func1491.definitionModule = "kitty";
          var func1493 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1493.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 464
              lineNumber = 463
              onSelf = true;
              var call1494 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1496 = callmethod(this, "canvasWidth", [0]);
              var quotient1498 = callmethod(call1496, "/", [1], call1494);
              return quotient1498
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1493.paramCounts = [
            0,
          ];
          func1493.variableArities = [
            false,
          ];
          obj1280.methods["moveWidthMultipler"] = func1493;
          func1493.definitionLine = 462;
          func1493.definitionModule = "kitty";
          var func1499 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1499.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 468
              lineNumber = 467
              onSelf = true;
              var call1500 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1502 = callmethod(this, "canvasHeight", [0]);
              var quotient1504 = callmethod(call1502, "/", [1], call1500);
              return quotient1504
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1499.paramCounts = [
            0,
          ];
          func1499.variableArities = [
            false,
          ];
          obj1280.methods["moveHeightMultipler"] = func1499;
          func1499.definitionLine = 466;
          func1499.definitionModule = "kitty";
          var func1505 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1505.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 472
              lineNumber = 451
              lineNumber = 471
              onSelf = true;
              var call1506 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1506
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1505.paramCounts = [
            1,
          ];
          func1505.variableArities = [
            false,
          ];
          obj1280.methods["setUpdateAction"] = func1505;
          func1505.definitionLine = 470;
          func1505.definitionModule = "kitty";
          var func1507 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1507.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 476
              lineNumber = 451
              lineNumber = 475
              onSelf = true;
              var call1508 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1508
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1507.paramCounts = [
            1,
          ];
          func1507.variableArities = [
            false,
          ];
          obj1280.methods["setDestroyAction"] = func1507;
          func1507.definitionLine = 474;
          func1507.definitionModule = "kitty";
          sourceObject = obj1280;
          lineNumber = 300
          obj1280.data["width"] = var_width__39__;
          var reader_kitty_width_1509 = function() {
            return this.data["width"];
          }
          obj1280.methods["width"] = reader_kitty_width_1509;
          obj1280.data["width"] = var_width__39__;
          var writer_kitty_width_1509 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1280.methods["width:="] = writer_kitty_width_1509;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 300
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 301
          obj1280.data["height"] = var_height__39__;
          var reader_kitty_height_1510 = function() {
            return this.data["height"];
          }
          obj1280.methods["height"] = reader_kitty_height_1510;
          obj1280.data["height"] = var_height__39__;
          var writer_kitty_height_1510 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1280.methods["height:="] = writer_kitty_height_1510;
          lineNumber = 302;
          moduleName = "kitty";
          lineNumber = 301
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 302
          obj1280.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1511 = function() {
            return this.data["tag"];
          }
          obj1280.methods["tag"] = reader_kitty_tag_1511;
          obj1280.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1511 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1280.methods["tag:="] = writer_kitty_tag_1511;
          lineNumber = 304;
          moduleName = "kitty";
          lineNumber = 302
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["background"] = undefined;
          var reader_kitty_background_1512 = function() {
            return this.data["background"];
          }
          obj1280.methods["background"] = reader_kitty_background_1512;
          obj1280.data["background"] = undefined;
          var writer_kitty_background_1512 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1280.methods["background:="] = writer_kitty_background_1512;
          reader_kitty_background_1512.confidential = true;
          writer_kitty_background_1512.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 305
          var string1513 = new GraceString("black");
          obj1280.data["backgroundColour"] = string1513;
          var reader_kitty_backgroundColour_1514 = function() {
            return this.data["backgroundColour"];
          }
          obj1280.methods["backgroundColour"] = reader_kitty_backgroundColour_1514;
          obj1280.data["backgroundColour"] = string1513;
          var writer_kitty_backgroundColour_1514 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1280.methods["backgroundColour:="] = writer_kitty_backgroundColour_1514;
          reader_kitty_backgroundColour_1514.confidential = true;
          writer_kitty_backgroundColour_1514.confidential = true;
          lineNumber = 307;
          moduleName = "kitty";
          lineNumber = 305
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1513)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["document"] = undefined;
          var reader_kitty_document_1515 = function() {
            return this.data["document"];
          }
          obj1280.methods["document"] = reader_kitty_document_1515;
          obj1280.data["document"] = undefined;
          var writer_kitty_document_1515 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1280.methods["document:="] = writer_kitty_document_1515;
          reader_kitty_document_1515.confidential = true;
          writer_kitty_document_1515.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1516 = function() {
            return this.data["backingCanvas"];
          }
          obj1280.methods["backingCanvas"] = reader_kitty_backingCanvas_1516;
          obj1280.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1516 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1280.methods["backingCanvas:="] = writer_kitty_backingCanvas_1516;
          reader_kitty_backingCanvas_1516.confidential = true;
          writer_kitty_backingCanvas_1516.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1517 = function() {
            return this.data["backingContext"];
          }
          obj1280.methods["backingContext"] = reader_kitty_backingContext_1517;
          obj1280.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1517 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1280.methods["backingContext:="] = writer_kitty_backingContext_1517;
          reader_kitty_backingContext_1517.confidential = true;
          writer_kitty_backingContext_1517.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["canvas"] = undefined;
          var reader_kitty_canvas_1518 = function() {
            return this.data["canvas"];
          }
          obj1280.methods["canvas"] = reader_kitty_canvas_1518;
          obj1280.data["canvas"] = undefined;
          var writer_kitty_canvas_1518 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1280.methods["canvas:="] = writer_kitty_canvas_1518;
          reader_kitty_canvas_1518.confidential = true;
          writer_kitty_canvas_1518.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1519 = function() {
            return this.data["canvasWidth"];
          }
          obj1280.methods["canvasWidth"] = reader_kitty_canvasWidth_1519;
          obj1280.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1519 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1280.methods["canvasWidth:="] = writer_kitty_canvasWidth_1519;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1520 = function() {
            return this.data["canvasHeight"];
          }
          obj1280.methods["canvasHeight"] = reader_kitty_canvasHeight_1520;
          obj1280.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1520 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1280.methods["canvasHeight:="] = writer_kitty_canvasHeight_1520;
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 316
          var call1521 = callmethod(var_collections,"list", [0]);
          var call1522 = callmethod(call1521,"new", [0]);
          obj1280.data["entities"] = call1522;
          var reader_kitty_entities_1523 = function() {
            return this.data["entities"];
          }
          obj1280.methods["entities"] = reader_kitty_entities_1523;
          obj1280.data["entities"] = call1522;
          var writer_kitty_entities_1523 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1280.methods["entities:="] = writer_kitty_entities_1523;
          reader_kitty_entities_1523.confidential = true;
          writer_kitty_entities_1523.confidential = true;
          lineNumber = 318;
          moduleName = "kitty";
          lineNumber = 316
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1522)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 318
          var bool1524 = new GraceBoolean(false)
          obj1280.data["isInit"] = bool1524;
          var reader_kitty_isInit_1525 = function() {
            return this.data["isInit"];
          }
          obj1280.methods["isInit"] = reader_kitty_isInit_1525;
          obj1280.data["isInit"] = bool1524;
          var writer_kitty_isInit_1525 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1280.methods["isInit:="] = writer_kitty_isInit_1525;
          reader_kitty_isInit_1525.confidential = true;
          writer_kitty_isInit_1525.confidential = true;
          lineNumber = 319;
          moduleName = "kitty";
          lineNumber = 318
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1524)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 319
          var bool1526 = new GraceBoolean(false)
          obj1280.data["isRunning"] = bool1526;
          var reader_kitty_isRunning_1527 = function() {
            return this.data["isRunning"];
          }
          obj1280.methods["isRunning"] = reader_kitty_isRunning_1527;
          obj1280.data["isRunning"] = bool1526;
          var writer_kitty_isRunning_1527 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1280.methods["isRunning:="] = writer_kitty_isRunning_1527;
          reader_kitty_isRunning_1527.confidential = true;
          writer_kitty_isRunning_1527.confidential = true;
          lineNumber = 321;
          moduleName = "kitty";
          lineNumber = 319
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1526)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["mctx"] = undefined;
          var reader_kitty_mctx_1528 = function() {
            return this.data["mctx"];
          }
          obj1280.methods["mctx"] = reader_kitty_mctx_1528;
          obj1280.data["mctx"] = undefined;
          var writer_kitty_mctx_1528 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1280.methods["mctx:="] = writer_kitty_mctx_1528;
          reader_kitty_mctx_1528.confidential = true;
          writer_kitty_mctx_1528.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          obj1280.data["ent"] = undefined;
          var reader_kitty_ent_1529 = function() {
            return this.data["ent"];
          }
          obj1280.methods["ent"] = reader_kitty_ent_1529;
          obj1280.data["ent"] = undefined;
          var writer_kitty_ent_1529 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1280.methods["ent:="] = writer_kitty_ent_1529;
          reader_kitty_ent_1529.confidential = true;
          writer_kitty_ent_1529.confidential = true;
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 326
          var block1530 = Grace_allocObject();
          block1530.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1530.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1530.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1530.methods["match"] = GraceBlock_match;
          block1530.methods["prefix?"] = GraceBlock_lift;
          block1530.receiver = this;
          block1530.className = 'block<kitty:326>';
          block1530.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1280.data["updateAction"] = block1530;
          var reader_kitty_updateAction_1531 = function() {
            return this.data["updateAction"];
          }
          obj1280.methods["updateAction"] = reader_kitty_updateAction_1531;
          obj1280.data["updateAction"] = block1530;
          var writer_kitty_updateAction_1531 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1280.methods["updateAction:="] = writer_kitty_updateAction_1531;
          reader_kitty_updateAction_1531.confidential = true;
          writer_kitty_updateAction_1531.confidential = true;
          lineNumber = 326;
          moduleName = "kitty";
          lineNumber = 325
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1530)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 328
          var block1532 = Grace_allocObject();
          block1532.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1532.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1532.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1532.methods["match"] = GraceBlock_match;
          block1532.methods["prefix?"] = GraceBlock_lift;
          block1532.receiver = this;
          block1532.className = 'block<kitty:328>';
          block1532.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1280.data["destroyAction"] = block1532;
          var reader_kitty_destroyAction_1533 = function() {
            return this.data["destroyAction"];
          }
          obj1280.methods["destroyAction"] = reader_kitty_destroyAction_1533;
          obj1280.data["destroyAction"] = block1532;
          var writer_kitty_destroyAction_1533 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1280.methods["destroyAction:="] = writer_kitty_destroyAction_1533;
          reader_kitty_destroyAction_1533.confidential = true;
          writer_kitty_destroyAction_1533.confidential = true;
          lineNumber = 328;
          moduleName = "kitty";
          lineNumber = 326
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1532)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1280.mutable = true;
          sourceObject = obj1280;
          lineNumber = 328
          onSelf = true;
          var call1534 = callmethod(this, "init", [0]);
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          sourceObject = obj1280;
          superDepth = origSuperDepth;
        }
        obj_init_1280.apply(inheritingObject, []);
        return obj1280
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1021.methods["new()object"] = func1279;
    var func1535 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 297
        var string1536 = new GraceString("class KittyWorld");
        return string1536
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1535.paramCounts = [
    ];
    func1535.variableArities = [
    ];
    obj1021.methods["asDebugString"] = func1535;
    func1535.definitionLine = 297;
    func1535.definitionModule = "kitty";
    sourceObject = obj1021;
    sourceObject = obj1021;
    superDepth = origSuperDepth;
  }
  obj_init_1021.apply(obj1021, []);
  var var_KittyWorld = obj1021;
  lineNumber = 481
  lineNumber = 490
  lineNumber = 524
  lineNumber = 539
  lineNumber = 543
  lineNumber = 548
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyEntity.new:\n setY\n mouseDown\n setLocation\n mouseEnter\n destroyAction\n setMouseExitAction\n getX\n getY\n mouseOver:=\n posX:=\n setX\n mouseOver\n awake\n setMouseDownAction\n kill\n setUpdateAction\n setImage\n rotation\n setMouseEnterAction\n createImage\n mouseExit\n move\n mouseExitAction:=\n tag\n destroyAction:=\n mouseDragAction:=\n mouseDragAction\n posY\n mouseExitAction\n setDestroyAction\n mouseDownAction:=\n updateAction:=\n image:=\n mouseEnterAction:=\n getRotation\n mouseDownAction\n updateAction\n posY:=\n image\n mouseEnterAction\n rotation:=\n turn\n posX\n tick\n draw\n strafe\n tag:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseDrag\n onMouseEnter\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:Point.x()y:\n left\n down\n right\n up\n x\n y\npath:\n kitty\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nfresh:World()width()height:\n mctx\n document\n canvasWidth\n getContext\n destroyAction\n init\n start\n backingCanvas\n canvas:=\n backgroundColour\n moveWidthMultipler\n width:=\n isRunning\n ent:=\n isRunning:=\n canvasWidth:=\n ent\n setBackground\n setUpdateAction\n isInit\n mctx:=\n height\n entities:=\n destroyAction:=\n tag\n backingCanvas:=\n entities\n backingContext\n stop\n backingContext:=\n canvasHeight:=\n background:=\n setDestroyAction\n canvasHeight\n backgroundColour:=\n updateAction:=\n canvas\n background\n updateAction\n height:=\n addEntity\n isInit:=\n width\n tick\n moveHeightMultipler\n tag:=\n document:=\nmethods-of:KittyImage.new:\n getTag\n elements\n width\n draw\n height:=\n drawImage\n elements:=\n width:=\n height\n imgTag\nfresh:Entity()x()y:\n setY\n mouseDown\n setLocation\n mouseEnter\n destroyAction\n setMouseExitAction\n getX\n getY\n mouseOver:=\n posX:=\n setX\n mouseOver\n awake\n setMouseDownAction\n kill\n setUpdateAction\n setImage\n rotation\n setMouseEnterAction\n createImage\n image\n move\n mouseExitAction:=\n mouseDragAction:=\n destroyAction:=\n mouseExitAction\n mouseDragAction\n tick\n tag\n setDestroyAction\n mouseDownAction:=\n updateAction:=\n image:=\n mouseEnterAction:=\n strafe\n mouseDownAction\n updateAction\n posY:=\n mouseExit\n mouseEnterAction\n rotation:=\n turn\n posX\n posY\n draw\n getRotation\n tag:=\nmethods-of:KittyWorld.new:\n mctx\n document\n canvasWidth\n getContext\n destroyAction\n setDestroyAction\n start\n moveHeightMultipler\n canvas:=\n backgroundColour\n moveWidthMultipler\n background:=\n isRunning\n ent:=\n canvasWidth:=\n ent\n setBackground\n background\n isInit\n mctx:=\n height\n tag\n destroyAction:=\n entities:=\n backingCanvas:=\n entities\n backingContext\n addEntity\n backingContext:=\n canvasHeight:=\n width:=\n init\n canvasHeight\n backgroundColour:=\n updateAction:=\n canvas\n setUpdateAction\n width\n updateAction\n height:=\n stop\n isInit:=\n isRunning:=\n tick\n backingCanvas\n tag:=\n document:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:Point:\n x()y\nconstructors-of:KittyImage:\n new\nfresh:Image()width()height:\n getTag\n elements\n width\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n height\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\n";
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
    "    var mouseOver := false",
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
    "        if (mouseOver) then {",
    "            return",
    "        }",
    "        def w = image.width / 2",
    "        def h = image.height / 2",
    "        var poly := collections.list.new(",
    "            Point.x(posX - w)y(posY - h), Point.x(posX - w)y(posY + h),",
    "            Point.x(posX + w)y(posY + h), Point.x(posX + w)y(posY - h)",
    "        )",
    "        if (pointInPolygon(mouse.location, poly)) then {",
    "            mouseEnterAction.apply",
    "            mouseOver := true",
    "        }",
    "    }",
    "    ",
    "    method mouseExit {",
    "        if (!mouseOver) then {",
    "            return",
    "        }",
    "        def w = image.width / 2",
    "        def h = image.height / 2",
    "        var poly := collections.list.new(",
    "            Point.x(posX - w)y(posY - h), Point.x(posX - w)y(posY + h),",
    "            Point.x(posX + w)y(posY + h), Point.x(posX + w)y(posY - h)",
    "        )",
    "        if (!pointInPolygon(mouse.location, poly) && mouseOver) then {",
    "            mouseExitAction.apply",
    "            mouseOver := false",
    "        }",
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
    "",
    "            // Mouse actions",
    "            for (entities) do { entity->",
    "                entity.mouseEnter",
    "                entity.mouseExit",
    "            }",
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
