function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 86
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
      lineNumber = 87
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 87;
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
        lineNumber = 88
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
  func0.definitionLine = 86;
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
      obj5.definitionLine = 87;
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
  lineNumber = 272
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
      lineNumber = 273
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 273;
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
        lineNumber = 274
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
  func8.definitionLine = 272;
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
      obj13.definitionLine = 273;
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
  lineNumber = 284
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
      lineNumber = 285
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
  func16.definitionLine = 284;
  func16.definitionModule = "kitty";
  lineNumber = 289
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
      lineNumber = 290
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
  func18.definitionLine = 289;
  func18.definitionModule = "kitty";
  lineNumber = 293
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
      lineNumber = 295
      lineNumber = 294
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
  func20.definitionLine = 293;
  func20.definitionModule = "kitty";
  lineNumber = 298
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
      lineNumber = 299
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
  func24.definitionLine = 298;
  func24.definitionModule = "kitty";
  lineNumber = 302
  var func26 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 303
      var call27 = callmethod(var_kitten,"setMouseUpAction", [1], var_action__39__);
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
  this.methods["onMouseUp"] = func26;
  func26.definitionLine = 302;
  func26.definitionModule = "kitty";
  lineNumber = 306
  var func28 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func28.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseDrag)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 307
      var call29 = callmethod(var_kitten,"setMouseDragAction", [1], var_action__39__);
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
  this.methods["onMouseDrag"] = func28;
  func28.definitionLine = 306;
  func28.definitionModule = "kitty";
  lineNumber = 310
  var func30 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseEnter)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 311
      var call31 = callmethod(var_kitten,"setMouseEnterAction", [1], var_action__39__);
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
  this.methods["onMouseEnter"] = func30;
  func30.definitionLine = 310;
  func30.definitionModule = "kitty";
  lineNumber = 314
  var func32 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseOver)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 315
      var call33 = callmethod(var_kitten,"setMouseOverAction", [1], var_action__39__);
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
  this.methods["onMouseOver"] = func32;
  func32.definitionLine = 314;
  func32.definitionModule = "kitty";
  lineNumber = 318
  var func34 = function(argcv) {
    var curarg = 1;
    var var_action__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onMouseExit)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 319
      var call35 = callmethod(var_kitten,"setMouseExitAction", [1], var_action__39__);
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
    1,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["onMouseExit"] = func34;
  func34.definitionLine = 318;
  func34.definitionModule = "kitty";
  lineNumber = 513
  var func36 = function(argcv) {
    var curarg = 1;
    var var_tag__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var var_width__39__ = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func36.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (width)"));
    var var_height__39__ = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func36.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (height)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 514
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 514;
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
        lineNumber = 515
        var call39 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
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
    1,
    1,
    1,
  ];
  func36.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["World()width()height"] = func36;
  func36.definitionLine = 513;
  func36.definitionModule = "kitty";
  var func40 = function(argcv) {
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
      var obj41 = Grace_allocObject();
      obj41.definitionModule = "kitty";
      obj41.definitionLine = 514;
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
        var call43 = callmethod(var_KittyWorld,"new()object", [3, 1], var_tag__39__, var_width__39__, var_height__39__, this);
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
  this.methods["World()width()height()object"] = func40;
  lineNumber = 522
  var func44 = function(argcv) {
    var curarg = 1;
    var var_point = arguments[curarg];
    curarg++;
    var var_vs = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pointInPolygon)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 527
      lineNumber = 526
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 527;
      moduleName = "kitty";
      lineNumber = 526
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 530
      lineNumber = 527
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 530;
      moduleName = "kitty";
      lineNumber = 527
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 532
      lineNumber = 530
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 532;
      moduleName = "kitty";
      lineNumber = 530
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 534
      lineNumber = 532
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 534;
      moduleName = "kitty";
      lineNumber = 532
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 534
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 550
      var block53 = Grace_allocObject();
      block53.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block53.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block53.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block53.methods["match"] = GraceBlock_match;
      block53.methods["prefix?"] = GraceBlock_lift;
      block53.receiver = this;
      block53.className = 'block<kitty:550>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 537
        lineNumber = 536
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 537;
        moduleName = "kitty";
        lineNumber = 536
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 538
        lineNumber = 537
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 538;
        moduleName = "kitty";
        lineNumber = 537
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 539
        lineNumber = 538
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 539;
        moduleName = "kitty";
        lineNumber = 538
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 543
        lineNumber = 539
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 543;
        moduleName = "kitty";
        lineNumber = 539
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 544
        lineNumber = 543
        var diff65 = callmethod(var_yj, "-", [1], var_yi);
        var diff69 = callmethod(var_y, "-", [1], var_yi);
        var diff73 = callmethod(var_xj, "-", [1], var_xi);
        var prod75 = callmethod(diff73, "*", [1], diff69);
        var quotient77 = callmethod(prod75, "/", [1], diff65);
        var opresult79 = callmethod(quotient77, "+", [1], var_xi);
        var opresult82 = callmethod(var_x, "<", [1], opresult79);
        var opresult86 = callmethod(var_yj, ">", [1], var_y);
        var opresult90 = callmethod(var_yi, ">", [1], var_y);
        var opresult92 = callmethod(opresult90, "!=", [1], opresult86);
        var opresult94 = callmethod(opresult92, "&&", [1], opresult82);
        var var_intersect = opresult94;
        lineNumber = 544;
        moduleName = "kitty";
        lineNumber = 543
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 547
        var if95 = var_done;
        lineNumber = 544
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 546
          lineNumber = 545
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 549
        lineNumber = 547
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 551
      lineNumber = 550
      return var_inside
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func44.paramCounts = [
    2,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["pointInPolygon"] = func44;
  func44.definitionLine = 522;
  func44.definitionModule = "kitty";
  lineNumber = 556
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 558
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 565
      var if101 = var_done;
      lineNumber = 560
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 561
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 563
        return var_done
      }
      lineNumber = 565
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 568
      var call107 = callmethod(var_m__95__world,"start", [0]);
      return call107
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func98.paramCounts = [
    0,
  ];
  func98.variableArities = [
    false,
  ];
  this.methods["start"] = func98;
  func98.definitionLine = 556;
  func98.definitionModule = "kitty";
  lineNumber = 571
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 572
      var call109 = callmethod(var_m__95__world,"stop", [0]);
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
  this.methods["stop"] = func108;
  func108.definitionLine = 571;
  func108.definitionModule = "kitty";
  lineNumber = 575
  var func110 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func110.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 577
      lineNumber = 576
      var_m__95__world = var_world__39__;
      lineNumber = 578
      lineNumber = 577
      var bool111 = new GraceBoolean(true)
      var_worldSet = bool111;
      return bool111
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func110.paramTypes = [];
  func110.paramTypes.push([]);
  func110.paramCounts = [
    1,
  ];
  func110.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func110;
  func110.definitionLine = 575;
  func110.definitionModule = "kitty";
  lineNumber = 580
  var func112 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func112.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 581
      onSelf = true;
      var call113 = callmethod(this, "start", [0]);
      return call113
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
  this.methods["atModuleEnd"] = func112;
  func112.definitionLine = 580;
  func112.definitionModule = "kitty";
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
  var call114 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call114;
  this.data = call114.data;
  this._value = call114._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 572
  var func115 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func115.paramCounts[0])
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
  func115.paramCounts = [
    0,
  ];
  func115.variableArities = [
    false,
  ];
  this.methods["m_world"] = func115;
  func115.definitionLine = 572;
  func115.definitionModule = "kitty";
  lineNumber = 572
  var func116 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func116.paramCounts[0])
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
  func116.paramCounts = [
    1,
  ];
  func116.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func116;
  func116.definitionLine = 572;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 572
  var func118 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func118.paramCounts[0])
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
  func118.paramCounts = [
    0,
  ];
  func118.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func118;
  func118.definitionLine = 572;
  func118.definitionModule = "kitty";
  lineNumber = 572
  var func119 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func119.paramCounts[0])
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
  func119.paramCounts = [
    1,
  ];
  func119.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func119;
  func119.definitionLine = 572;
  func119.definitionModule = "kitty";
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
  lineNumber = 572
  var func120 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func120.paramCounts[0])
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
  func120.paramCounts = [
    0,
  ];
  func120.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func120;
  func120.definitionLine = 572;
  func120.definitionModule = "kitty";
  lineNumber = 572
  var func121 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func121.paramCounts[0])
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
  func121.paramCounts = [
    1,
  ];
  func121.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func121;
  func121.definitionLine = 572;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 572
  var func122 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func122.paramCounts[0])
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
  func122.paramCounts = [
    0,
  ];
  func122.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func122;
  func122.definitionLine = 572;
  func122.definitionModule = "kitty";
  lineNumber = 572
  var func123 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func123.paramCounts[0])
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
  func123.paramCounts = [
    1,
  ];
  func123.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func123;
  func123.definitionLine = 572;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 572
  var func124 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func124.paramCounts[0])
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
  func124.paramCounts = [
    0,
  ];
  func124.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func124;
  func124.definitionLine = 572;
  func124.definitionModule = "kitty";
  lineNumber = 572
  var func125 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func125.paramCounts[0])
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
  func125.paramCounts = [
    1,
  ];
  func125.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func125;
  func125.definitionLine = 572;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 572
  var func126 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func126.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUpListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 15
      return var_mouseUpListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func126.paramCounts = [
    0,
  ];
  func126.variableArities = [
    false,
  ];
  this.methods["mouseUpListener"] = func126;
  func126.definitionLine = 572;
  func126.definitionModule = "kitty";
  lineNumber = 572
  var func127 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func127.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUpListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseUpListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func127.paramCounts = [
    1,
  ];
  func127.variableArities = [
    false,
  ];
  this.methods["mouseUpListener:="] = func127;
  func127.definitionLine = 572;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 572
  var func128 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func128.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 16
      return var_mouseMoveListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func128.paramCounts = [
    0,
  ];
  func128.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func128;
  func128.definitionLine = 572;
  func128.definitionModule = "kitty";
  lineNumber = 572
  var func129 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func129.paramCounts[0])
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
  func129.paramCounts = [
    1,
  ];
  func129.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func129;
  func129.definitionLine = 572;
  func129.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 572
  var func131 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func131.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (currentKeyDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 17
      return var_currentKeyDown
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func131.paramCounts = [
    0,
  ];
  func131.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func131;
  func131.definitionLine = 572;
  func131.definitionModule = "kitty";
  lineNumber = 572
  var func132 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func132.paramCounts[0])
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
  func132.paramCounts = [
    1,
  ];
  func132.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func132;
  func132.definitionLine = 572;
  func132.definitionModule = "kitty";
  lineNumber = 18;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_currentKeyDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'currentKeyDown' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 18
  var bool133 = new GraceBoolean(false)
  var var_mouseDown = bool133;
  lineNumber = 572
  var func134 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func134.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 18
      return var_mouseDown
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func134.paramCounts = [
    0,
  ];
  func134.variableArities = [
    false,
  ];
  this.methods["mouseDown"] = func134;
  func134.definitionLine = 572;
  func134.definitionModule = "kitty";
  lineNumber = 572
  var func135 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func135.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseDown = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
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
  ];
  func135.variableArities = [
    false,
  ];
  this.methods["mouseDown:="] = func135;
  func135.definitionLine = 572;
  func135.definitionModule = "kitty";
  lineNumber = 21;
  moduleName = "kitty";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouseDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'mouseDown' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 24
  lineNumber = 21
  var call136 = callmethod(var_dom,"window", [0]);
  var call137 = callmethod(call136,"Math", [0]);
  var var_math = call137;
  var func138 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func138.paramCounts[0])
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
  func138.paramCounts = [
    0,
  ];
  func138.variableArities = [
    false,
  ];
  this.methods["math"] = func138;
  func138.definitionLine = 21;
  func138.definitionModule = "kitty";
  lineNumber = 24;
  moduleName = "kitty";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 24
  lineNumber = 27
  var var_kitten;
  lineNumber = 21
  var func139 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func139.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kitten)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 24
      return var_kitten
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func139.paramCounts = [
    0,
  ];
  func139.variableArities = [
    false,
  ];
  this.methods["kitten"] = func139;
  func139.definitionLine = 21;
  func139.definitionModule = "kitty";
  lineNumber = 21
  var func140 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func140.paramCounts[0])
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
  func140.paramCounts = [
    1,
  ];
  func140.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func140;
  func140.definitionLine = 21;
  func140.definitionModule = "kitty";
  lineNumber = 27
  var func141 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func141.paramCounts[0])
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
  func141.paramCounts = [
    0,
  ];
  func141.variableArities = [
    false,
  ];
  this.methods["Point"] = func141;
  func141.definitionLine = 27;
  func141.definitionModule = "kitty";
  var obj142 = Grace_allocObject();
  obj142.definitionModule = "kitty";
  obj142.definitionLine = 27;
  obj142.outer = this;
  var reader_kitty_outer_143 = function() {
    return this.outer;
  }
  obj142.methods["outer"] = reader_kitty_outer_143;
  function obj_init_142() {
    var origSuperDepth = superDepth;
    superDepth = obj142;
    obj142.annotations = [];
    var func144 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func144.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func144.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj145 = Grace_allocObject();
        obj145.definitionModule = "kitty";
        obj145.definitionLine = 27;
        obj145.outer = this;
        var reader_kitty_outer_146 = function() {
          return this.outer;
        }
        obj145.methods["outer"] = reader_kitty_outer_146;
        function obj_init_145() {
          var origSuperDepth = superDepth;
          superDepth = obj145;
          obj145.annotations = [];
          var func147 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func147.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call149 = callmethod(this, "x", [0]);
              var diff151 = callmethod(call149, "-", [1], var_dx);
              onSelf = true;
              var call152 = callmethod(this, "y", [0]);
              var call153 = callmethod(var_Point,"x()sy", [1, 1], diff151, call152);
              return call153
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func147.paramCounts = [
            1,
          ];
          func147.variableArities = [
            false,
          ];
          obj145.methods["left"] = func147;
          func147.definitionLine = 30;
          func147.definitionModule = "kitty";
          var func154 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func154.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call156 = callmethod(this, "x", [0]);
              var opresult158 = callmethod(call156, "+", [1], var_dx);
              onSelf = true;
              var call159 = callmethod(this, "y", [0]);
              var call160 = callmethod(var_Point,"x()y", [1, 1], opresult158, call159);
              return call160
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
          obj145.methods["right"] = func154;
          func154.definitionLine = 31;
          func154.definitionModule = "kitty";
          var func161 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func161.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              onSelf = true;
              var call162 = callmethod(this, "x", [0]);
              onSelf = true;
              var call164 = callmethod(this, "y", [0]);
              var diff166 = callmethod(call164, "-", [1], var_dy);
              var call167 = callmethod(var_Point,"x()y", [1, 1], call162, diff166);
              return call167
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func161.paramCounts = [
            1,
          ];
          func161.variableArities = [
            false,
          ];
          obj145.methods["up"] = func161;
          func161.definitionLine = 32;
          func161.definitionModule = "kitty";
          var func168 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func168.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              onSelf = true;
              var call169 = callmethod(this, "x", [0]);
              onSelf = true;
              var call171 = callmethod(this, "y", [0]);
              var opresult173 = callmethod(call171, "+", [1], var_dy);
              var call174 = callmethod(var_Point,"x()y", [1, 1], call169, opresult173);
              return call174
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func168.paramCounts = [
            1,
          ];
          func168.variableArities = [
            false,
          ];
          obj145.methods["down"] = func168;
          func168.definitionLine = 33;
          func168.definitionModule = "kitty";
          sourceObject = obj145;
          lineNumber = 28
          obj145.data["x"] = var_x__39__;
          var reader_kitty_x_175 = function() {
            return this.data["x"];
          }
          reader_kitty_x_175.def = true;
          obj145.methods["x"] = reader_kitty_x_175;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj145;
          lineNumber = 29
          obj145.data["y"] = var_y__39__;
          var reader_kitty_y_176 = function() {
            return this.data["y"];
          }
          reader_kitty_y_176.def = true;
          obj145.methods["y"] = reader_kitty_y_176;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj145;
          sourceObject = obj145;
          sourceObject = obj145;
          sourceObject = obj145;
          superDepth = origSuperDepth;
        }
        obj_init_145.apply(obj145, []);
        return obj145
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func144.paramCounts = [
      1,
      1,
    ];
    func144.variableArities = [
      false,
      false,
    ];
    obj142.methods["x()y"] = func144;
    func144.definitionLine = 27;
    func144.definitionModule = "kitty";
    var func177 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj178 = Grace_allocObject();
        obj178.definitionModule = "kitty";
        obj178.definitionLine = 27;
        var inho178 = inheritingObject;
        while (inho178.superobj) inho178 = inho178.superobj;
        inho178.superobj = obj178;
        obj178.data = inheritingObject.data;
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
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func180.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call182 = callmethod(this, "x", [0]);
              var diff184 = callmethod(call182, "-", [1], var_dx);
              onSelf = true;
              var call185 = callmethod(this, "y", [0]);
              var call186 = callmethod(var_Point,"x()sy", [1, 1], diff184, call185);
              return call186
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func180.paramCounts = [
            1,
          ];
          func180.variableArities = [
            false,
          ];
          obj178.methods["left"] = func180;
          func180.definitionLine = 30;
          func180.definitionModule = "kitty";
          var func187 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func187.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call189 = callmethod(this, "x", [0]);
              var opresult191 = callmethod(call189, "+", [1], var_dx);
              onSelf = true;
              var call192 = callmethod(this, "y", [0]);
              var call193 = callmethod(var_Point,"x()y", [1, 1], opresult191, call192);
              return call193
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
          obj178.methods["right"] = func187;
          func187.definitionLine = 31;
          func187.definitionModule = "kitty";
          var func194 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func194.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              onSelf = true;
              var call195 = callmethod(this, "x", [0]);
              onSelf = true;
              var call197 = callmethod(this, "y", [0]);
              var diff199 = callmethod(call197, "-", [1], var_dy);
              var call200 = callmethod(var_Point,"x()y", [1, 1], call195, diff199);
              return call200
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func194.paramCounts = [
            1,
          ];
          func194.variableArities = [
            false,
          ];
          obj178.methods["up"] = func194;
          func194.definitionLine = 32;
          func194.definitionModule = "kitty";
          var func201 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func201.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              onSelf = true;
              var call202 = callmethod(this, "x", [0]);
              onSelf = true;
              var call204 = callmethod(this, "y", [0]);
              var opresult206 = callmethod(call204, "+", [1], var_dy);
              var call207 = callmethod(var_Point,"x()y", [1, 1], call202, opresult206);
              return call207
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func201.paramCounts = [
            1,
          ];
          func201.variableArities = [
            false,
          ];
          obj178.methods["down"] = func201;
          func201.definitionLine = 33;
          func201.definitionModule = "kitty";
          sourceObject = obj178;
          lineNumber = 28
          obj178.data["x"] = var_x__39__;
          var reader_kitty_x_208 = function() {
            return this.data["x"];
          }
          reader_kitty_x_208.def = true;
          obj178.methods["x"] = reader_kitty_x_208;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj178;
          lineNumber = 29
          obj178.data["y"] = var_y__39__;
          var reader_kitty_y_209 = function() {
            return this.data["y"];
          }
          reader_kitty_y_209.def = true;
          obj178.methods["y"] = reader_kitty_y_209;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          sourceObject = obj178;
          superDepth = origSuperDepth;
        }
        obj_init_178.apply(inheritingObject, []);
        return obj178
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj142.methods["x()y()object"] = func177;
    var func210 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 27
        var string211 = new GraceString("class Point");
        return string211
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func210.paramCounts = [
    ];
    func210.variableArities = [
    ];
    obj142.methods["asDebugString"] = func210;
    func210.definitionLine = 27;
    func210.definitionModule = "kitty";
    sourceObject = obj142;
    sourceObject = obj142;
    superDepth = origSuperDepth;
  }
  obj_init_142.apply(obj142, []);
  var var_Point = obj142;
  lineNumber = 36
  var obj212 = Grace_allocObject();
  obj212.definitionModule = "kitty";
  obj212.definitionLine = 36;
  obj212.outer = this;
  var reader_kitty_outer_213 = function() {
    return this.outer;
  }
  obj212.methods["outer"] = reader_kitty_outer_213;
  function obj_init_212() {
    var origSuperDepth = superDepth;
    superDepth = obj212;
    obj212.annotations = [];
    var func214 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func214.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 39
        onSelf = true;
        var call215 = callmethod(this, "position", [0]);
        var call216 = callmethod(call215,"x", [0]);
        return call216
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func214.paramCounts = [
      0,
    ];
    func214.variableArities = [
      false,
    ];
    obj212.methods["x"] = func214;
    func214.definitionLine = 38;
    func214.definitionModule = "kitty";
    var func217 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func217.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 42
        onSelf = true;
        var call218 = callmethod(this, "position", [0]);
        var call219 = callmethod(call218,"y", [0]);
        return call219
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func217.paramCounts = [
      0,
    ];
    func217.variableArities = [
      false,
    ];
    obj212.methods["y"] = func217;
    func217.definitionLine = 41;
    func217.definitionModule = "kitty";
    var func220 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func220.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 45
        onSelf = true;
        var call221 = callmethod(this, "position", [0]);
        return call221
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func220.paramCounts = [
      0,
    ];
    func220.variableArities = [
      false,
    ];
    obj212.methods["location"] = func220;
    func220.definitionLine = 44;
    func220.definitionModule = "kitty";
    sourceObject = obj212;
    lineNumber = 37
    var call222 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj212.data["position"] = call222;
    var reader_kitty_position_223 = function() {
      return this.data["position"];
    }
    obj212.methods["position"] = reader_kitty_position_223;
    obj212.data["position"] = call222;
    var writer_kitty_position_223 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj212.methods["position:="] = writer_kitty_position_223;
    lineNumber = 37;
    moduleName = "kitty";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call222)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj212.mutable = true;
    sourceObject = obj212;
    sourceObject = obj212;
    sourceObject = obj212;
    superDepth = origSuperDepth;
  }
  obj_init_212.apply(obj212, []);
  var var_mouse = obj212;
  lineNumber = 42
  var func224 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func224.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 36
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func224.paramCounts = [
    0,
  ];
  func224.variableArities = [
    false,
  ];
  this.methods["mouse"] = func224;
  func224.definitionLine = 42;
  func224.definitionModule = "kitty";
  lineNumber = 36;
  moduleName = "kitty";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 50
  var func225 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func225.paramCounts[0])
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
  func225.paramCounts = [
    0,
  ];
  func225.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func225;
  func225.definitionLine = 50;
  func225.definitionModule = "kitty";
  var obj226 = Grace_allocObject();
  obj226.definitionModule = "kitty";
  obj226.definitionLine = 50;
  obj226.outer = this;
  var reader_kitty_outer_227 = function() {
    return this.outer;
  }
  obj226.methods["outer"] = reader_kitty_outer_227;
  function obj_init_226() {
    var origSuperDepth = superDepth;
    superDepth = obj226;
    obj226.annotations = [];
    var func228 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func228.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj229 = Grace_allocObject();
        obj229.definitionModule = "kitty";
        obj229.definitionLine = 50;
        obj229.outer = this;
        var reader_kitty_outer_230 = function() {
          return this.outer;
        }
        obj229.methods["outer"] = reader_kitty_outer_230;
        function obj_init_229() {
          var origSuperDepth = superDepth;
          superDepth = obj229;
          obj229.annotations = [];
          var func231 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func231.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var call232 = callmethod(var_ctx,"save", [0]);
              lineNumber = 66
              var call233 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 67
              var prod237 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient239 = callmethod(prod237, "/", [1], new GraceNum(180));
              var call240 = callmethod(var_ctx,"rotate", [1], quotient239);
              lineNumber = 68
              onSelf = true;
              var call241 = callmethod(this, "elements", [0]);
              lineNumber = 71
              var block242 = Grace_allocObject();
              block242.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block242.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block242.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block242.methods["match"] = GraceBlock_match;
              block242.methods["prefix?"] = GraceBlock_lift;
              block242.receiver = this;
              block242.className = 'block<kitty:71>';
              block242.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 69
                onSelf = true;
                var call244 = callmethod(this, "width", [0]);
                var call245 = callmethod(call244,"prefix-", [0]);
                var quotient247 = callmethod(call245, "/", [1], new GraceNum(2));
                onSelf = true;
                var call249 = callmethod(this, "height", [0]);
                var call250 = callmethod(call249,"prefix-", [0]);
                var quotient252 = callmethod(call250, "/", [1], new GraceNum(2));
                onSelf = true;
                var call253 = callmethod(this, "width", [0]);
                onSelf = true;
                var call254 = callmethod(this, "height", [0]);
                var call255 = callmethod(var_ctx,"drawImage", [5], var_element, quotient247, quotient252, call253, call254);
                return call255;
              };
              var call256 = callmethod(Grace_prelude,"for()do", [1, 1], call241, block242);
              lineNumber = 71
              var call257 = callmethod(var_ctx,"restore", [0]);
              return call257
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func231.paramCounts = [
            4,
          ];
          func231.variableArities = [
            false,
          ];
          obj229.methods["draw"] = func231;
          func231.definitionLine = 63;
          func231.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              lineNumber = 76
              onSelf = true;
              var call259 = callmethod(this, "imgTag", [0]);
              return call259
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            0,
          ];
          func258.variableArities = [
            false,
          ];
          obj229.methods["getTag"] = func258;
          func258.definitionLine = 75;
          func258.definitionModule = "kitty";
          var func260 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func260.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call261 = callmethod(this, "elements", [0]);
              var call262 = callmethod(call261,"push", [1], var_imgTag__39__);
              return call262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func260.paramCounts = [
            1,
          ];
          func260.variableArities = [
            false,
          ];
          obj229.methods["drawImage"] = func260;
          func260.definitionLine = 79;
          func260.definitionModule = "kitty";
          sourceObject = obj229;
          lineNumber = 54
          var string263 = new GraceString("img");
          var call264 = callmethod(var_dom,"document", [0]);
          var call265 = callmethod(call264,"createElement", [1], string263);
          obj229.data["imgTag"] = call265;
          var reader_kitty_imgTag_266 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_266.def = true;
          reader_kitty_imgTag_266.confidential = true;
          obj229.methods["imgTag"] = reader_kitty_imgTag_266;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call265)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj229;
          lineNumber = 57
          lineNumber = 54
          lineNumber = 55
          onSelf = true;
          var call267 = callmethod(this, "imgTag", [0]);
          var call268 = callmethod(call267,"src:=", [1], var_url__39__);
          sourceObject = obj229;
          lineNumber = 57
          var call269 = callmethod(var_collections,"list", [0]);
          var call270 = callmethod(call269,"new", [0]);
          obj229.data["elements"] = call270;
          var reader_kitty_elements_271 = function() {
            return this.data["elements"];
          }
          obj229.methods["elements"] = reader_kitty_elements_271;
          obj229.data["elements"] = call270;
          var writer_kitty_elements_271 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj229.methods["elements:="] = writer_kitty_elements_271;
          reader_kitty_elements_271.confidential = true;
          writer_kitty_elements_271.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call270)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj229.mutable = true;
          sourceObject = obj229;
          lineNumber = 58
          onSelf = true;
          var call272 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call273 = callmethod(this, "elements", [0]);
          var call274 = callmethod(call273,"push", [1], call272);
          sourceObject = obj229;
          lineNumber = 60
          obj229.data["height"] = var_height__39__;
          var reader_kitty_height_275 = function() {
            return this.data["height"];
          }
          obj229.methods["height"] = reader_kitty_height_275;
          obj229.data["height"] = var_height__39__;
          var writer_kitty_height_275 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj229.methods["height:="] = writer_kitty_height_275;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj229.mutable = true;
          sourceObject = obj229;
          lineNumber = 61
          obj229.data["width"] = var_width__39__;
          var reader_kitty_width_276 = function() {
            return this.data["width"];
          }
          obj229.methods["width"] = reader_kitty_width_276;
          obj229.data["width"] = var_width__39__;
          var writer_kitty_width_276 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj229.methods["width:="] = writer_kitty_width_276;
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj229.mutable = true;
          sourceObject = obj229;
          sourceObject = obj229;
          sourceObject = obj229;
          superDepth = origSuperDepth;
        }
        obj_init_229.apply(obj229, []);
        return obj229
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func228.paramCounts = [
      3,
    ];
    func228.variableArities = [
      false,
    ];
    obj226.methods["new"] = func228;
    func228.definitionLine = 50;
    func228.definitionModule = "kitty";
    var func277 = function(argcv) {
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
        var obj278 = Grace_allocObject();
        obj278.definitionModule = "kitty";
        obj278.definitionLine = 50;
        var inho278 = inheritingObject;
        while (inho278.superobj) inho278 = inho278.superobj;
        inho278.superobj = obj278;
        obj278.data = inheritingObject.data;
        obj278.outer = this;
        var reader_kitty_outer_279 = function() {
          return this.outer;
        }
        obj278.methods["outer"] = reader_kitty_outer_279;
        function obj_init_278() {
          var origSuperDepth = superDepth;
          superDepth = obj278;
          obj278.annotations = [];
          var func280 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func280.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var call281 = callmethod(var_ctx,"save", [0]);
              lineNumber = 66
              var call282 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 67
              var prod286 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient288 = callmethod(prod286, "/", [1], new GraceNum(180));
              var call289 = callmethod(var_ctx,"rotate", [1], quotient288);
              lineNumber = 68
              onSelf = true;
              var call290 = callmethod(this, "elements", [0]);
              lineNumber = 71
              var block291 = Grace_allocObject();
              block291.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block291.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block291.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block291.methods["match"] = GraceBlock_match;
              block291.methods["prefix?"] = GraceBlock_lift;
              block291.receiver = this;
              block291.className = 'block<kitty:71>';
              block291.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 69
                onSelf = true;
                var call293 = callmethod(this, "width", [0]);
                var call294 = callmethod(call293,"prefix-", [0]);
                var quotient296 = callmethod(call294, "/", [1], new GraceNum(2));
                onSelf = true;
                var call298 = callmethod(this, "height", [0]);
                var call299 = callmethod(call298,"prefix-", [0]);
                var quotient301 = callmethod(call299, "/", [1], new GraceNum(2));
                onSelf = true;
                var call302 = callmethod(this, "width", [0]);
                onSelf = true;
                var call303 = callmethod(this, "height", [0]);
                var call304 = callmethod(var_ctx,"drawImage", [5], var_element, quotient296, quotient301, call302, call303);
                return call304;
              };
              var call305 = callmethod(Grace_prelude,"for()do", [1, 1], call290, block291);
              lineNumber = 71
              var call306 = callmethod(var_ctx,"restore", [0]);
              return call306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func280.paramCounts = [
            4,
          ];
          func280.variableArities = [
            false,
          ];
          obj278.methods["draw"] = func280;
          func280.definitionLine = 63;
          func280.definitionModule = "kitty";
          var func307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              lineNumber = 76
              onSelf = true;
              var call308 = callmethod(this, "imgTag", [0]);
              return call308
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func307.paramCounts = [
            0,
          ];
          func307.variableArities = [
            false,
          ];
          obj278.methods["getTag"] = func307;
          func307.definitionLine = 75;
          func307.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call310 = callmethod(this, "elements", [0]);
              var call311 = callmethod(call310,"push", [1], var_imgTag__39__);
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
            1,
          ];
          func309.variableArities = [
            false,
          ];
          obj278.methods["drawImage"] = func309;
          func309.definitionLine = 79;
          func309.definitionModule = "kitty";
          sourceObject = obj278;
          lineNumber = 54
          var string312 = new GraceString("img");
          var call313 = callmethod(var_dom,"document", [0]);
          var call314 = callmethod(call313,"createElement", [1], string312);
          obj278.data["imgTag"] = call314;
          var reader_kitty_imgTag_315 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_315.def = true;
          reader_kitty_imgTag_315.confidential = true;
          obj278.methods["imgTag"] = reader_kitty_imgTag_315;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call314)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj278;
          lineNumber = 57
          lineNumber = 54
          lineNumber = 55
          onSelf = true;
          var call316 = callmethod(this, "imgTag", [0]);
          var call317 = callmethod(call316,"src:=", [1], var_url__39__);
          sourceObject = obj278;
          lineNumber = 57
          var call318 = callmethod(var_collections,"list", [0]);
          var call319 = callmethod(call318,"new", [0]);
          obj278.data["elements"] = call319;
          var reader_kitty_elements_320 = function() {
            return this.data["elements"];
          }
          obj278.methods["elements"] = reader_kitty_elements_320;
          obj278.data["elements"] = call319;
          var writer_kitty_elements_320 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj278.methods["elements:="] = writer_kitty_elements_320;
          reader_kitty_elements_320.confidential = true;
          writer_kitty_elements_320.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call319)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj278.mutable = true;
          sourceObject = obj278;
          lineNumber = 58
          onSelf = true;
          var call321 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call322 = callmethod(this, "elements", [0]);
          var call323 = callmethod(call322,"push", [1], call321);
          sourceObject = obj278;
          lineNumber = 60
          obj278.data["height"] = var_height__39__;
          var reader_kitty_height_324 = function() {
            return this.data["height"];
          }
          obj278.methods["height"] = reader_kitty_height_324;
          obj278.data["height"] = var_height__39__;
          var writer_kitty_height_324 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj278.methods["height:="] = writer_kitty_height_324;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj278.mutable = true;
          sourceObject = obj278;
          lineNumber = 61
          obj278.data["width"] = var_width__39__;
          var reader_kitty_width_325 = function() {
            return this.data["width"];
          }
          obj278.methods["width"] = reader_kitty_width_325;
          obj278.data["width"] = var_width__39__;
          var writer_kitty_width_325 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj278.methods["width:="] = writer_kitty_width_325;
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj278.mutable = true;
          sourceObject = obj278;
          sourceObject = obj278;
          sourceObject = obj278;
          superDepth = origSuperDepth;
        }
        obj_init_278.apply(inheritingObject, []);
        return obj278
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj226.methods["new()object"] = func277;
    var func326 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 50
        var string327 = new GraceString("class KittyImage");
        return string327
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func326.paramCounts = [
    ];
    func326.variableArities = [
    ];
    obj226.methods["asDebugString"] = func326;
    func326.definitionLine = 50;
    func326.definitionModule = "kitty";
    sourceObject = obj226;
    sourceObject = obj226;
    superDepth = origSuperDepth;
  }
  obj_init_226.apply(obj226, []);
  var var_KittyImage = obj226;
  lineNumber = 86
  lineNumber = 93
  var func328 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func328.paramCounts[0])
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
  func328.paramCounts = [
    0,
  ];
  func328.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func328;
  func328.definitionLine = 93;
  func328.definitionModule = "kitty";
  var obj329 = Grace_allocObject();
  obj329.definitionModule = "kitty";
  obj329.definitionLine = 93;
  obj329.outer = this;
  var reader_kitty_outer_330 = function() {
    return this.outer;
  }
  obj329.methods["outer"] = reader_kitty_outer_330;
  function obj_init_329() {
    var origSuperDepth = superDepth;
    superDepth = obj329;
    obj329.annotations = [];
    var func331 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func331.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj332 = Grace_allocObject();
        obj332.definitionModule = "kitty";
        obj332.definitionLine = 93;
        obj332.outer = this;
        var reader_kitty_outer_333 = function() {
          return this.outer;
        }
        obj332.methods["outer"] = reader_kitty_outer_333;
        function obj_init_332() {
          var origSuperDepth = superDepth;
          superDepth = obj332;
          obj332.annotations = [];
          var func334 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func334.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var string335 = new GraceString("realyee.png");
              onSelf = true;
              var call336 = callmethod(this, "createImage", [1], string335);
              lineNumber = 122
              lineNumber = 121
              var_kitten = this;
              lineNumber = 122
              var call337 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call337
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
          obj332.methods["awake"] = func334;
          func334.definitionLine = 119;
          func334.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              onSelf = true;
              var call339 = callmethod(this, "updateAction", [0]);
              var call340 = callmethod(call339,"apply", [0]);
              lineNumber = 133
              var if341 = var_done;
              lineNumber = 127
              onSelf = true;
              var call342 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call342)) {
                lineNumber = 128
                onSelf = true;
                var call343 = callmethod(this, "mouseOverAction", [0]);
                var call344 = callmethod(call343,"apply", [0]);
                if341 = call344;
              }
              return if341
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func338.paramCounts = [
            0,
          ];
          func338.variableArities = [
            false,
          ];
          obj332.methods["tick"] = func338;
          func338.definitionLine = 125;
          func338.definitionModule = "kitty";
          var func345 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func345.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              onSelf = true;
              var call346 = callmethod(this, "destroyAction", [0]);
              var call347 = callmethod(call346,"apply", [0]);
              return call347
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func345.paramCounts = [
            0,
          ];
          func345.variableArities = [
            false,
          ];
          obj332.methods["kill"] = func345;
          func345.definitionLine = 135;
          func345.definitionModule = "kitty";
          var func348 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func348.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              var if349 = var_done;
              lineNumber = 141
              onSelf = true;
              var call350 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call350)) {
                lineNumber = 142
                onSelf = true;
                var call351 = callmethod(this, "mouseDownAction", [0]);
                var call352 = callmethod(call351,"apply", [0]);
                lineNumber = 144
                lineNumber = 142
                lineNumber = 143
                var bool353 = new GraceBoolean(true)
                onSelf = true;
                var call354 = callmethod(this, "mouseDownEntity:=", [1], bool353);
                if349 = call354;
              }
              return if349
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func348.paramCounts = [
            0,
          ];
          func348.variableArities = [
            false,
          ];
          obj332.methods["mouseDown"] = func348;
          func348.definitionLine = 140;
          func348.definitionModule = "kitty";
          var func355 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func355.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              var if356 = var_done;
              lineNumber = 148
              onSelf = true;
              var call357 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call357)) {
                lineNumber = 149
                onSelf = true;
                var call358 = callmethod(this, "mouseUpAction", [0]);
                var call359 = callmethod(call358,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool360 = new GraceBoolean(false)
                onSelf = true;
                var call361 = callmethod(this, "mouseDownEntity:=", [1], bool360);
                if356 = call361;
              }
              return if356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func355.paramCounts = [
            0,
          ];
          func355.variableArities = [
            false,
          ];
          obj332.methods["mouseUp"] = func355;
          func355.definitionLine = 147;
          func355.definitionModule = "kitty";
          var func362 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func362.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var if363 = var_done;
              lineNumber = 155
              onSelf = true;
              var call364 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call364)) {
                lineNumber = 157
                return var_done
              }
              lineNumber = 159
              lineNumber = 158
              onSelf = true;
              var call366 = callmethod(this, "image", [0]);
              var call367 = callmethod(call366,"width", [0]);
              var quotient369 = callmethod(call367, "/", [1], new GraceNum(2));
              var var_w = quotient369;
              lineNumber = 159;
              moduleName = "kitty";
              lineNumber = 158
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call371 = callmethod(this, "image", [0]);
              var call372 = callmethod(call371,"height", [0]);
              var quotient374 = callmethod(call372, "/", [1], new GraceNum(2));
              var var_h = quotient374;
              lineNumber = 160;
              moduleName = "kitty";
              lineNumber = 159
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 160
              lineNumber = 161
              onSelf = true;
              var call376 = callmethod(this, "posX", [0]);
              var diff378 = callmethod(call376, "-", [1], var_w);
              onSelf = true;
              var call380 = callmethod(this, "posY", [0]);
              var diff382 = callmethod(call380, "-", [1], var_h);
              var call383 = callmethod(var_Point,"x()y", [1, 1], diff378, diff382);
              onSelf = true;
              var call385 = callmethod(this, "posX", [0]);
              var diff387 = callmethod(call385, "-", [1], var_w);
              onSelf = true;
              var call389 = callmethod(this, "posY", [0]);
              var opresult391 = callmethod(call389, "+", [1], var_h);
              var call392 = callmethod(var_Point,"x()y", [1, 1], diff387, opresult391);
              lineNumber = 162
              onSelf = true;
              var call394 = callmethod(this, "posX", [0]);
              var opresult396 = callmethod(call394, "+", [1], var_w);
              onSelf = true;
              var call398 = callmethod(this, "posY", [0]);
              var opresult400 = callmethod(call398, "+", [1], var_h);
              var call401 = callmethod(var_Point,"x()y", [1, 1], opresult396, opresult400);
              onSelf = true;
              var call403 = callmethod(this, "posX", [0]);
              var opresult405 = callmethod(call403, "+", [1], var_w);
              onSelf = true;
              var call407 = callmethod(this, "posY", [0]);
              var diff409 = callmethod(call407, "-", [1], var_h);
              var call410 = callmethod(var_Point,"x()y", [1, 1], opresult405, diff409);
              lineNumber = 160
              var call411 = callmethod(var_collections,"list", [0]);
              var call412 = callmethod(call411,"new", [4], call383, call392, call401, call410);
              var var_poly = call412;
              lineNumber = 160;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 168
              var if413 = var_done;
              lineNumber = 164
              var call414 = callmethod(var_mouse,"location", [0]);
              var call415 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call416 = callmethod(call415, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call417 = callmethod(call416, "pointInPolygon", [2], call414, var_poly);
              if (Grace_isTrue(call417)) {
                lineNumber = 165
                onSelf = true;
                var call418 = callmethod(this, "mouseEnterAction", [0]);
                var call419 = callmethod(call418,"apply", [0]);
                lineNumber = 167
                lineNumber = 165
                lineNumber = 166
                var bool420 = new GraceBoolean(true)
                onSelf = true;
                var call421 = callmethod(this, "mouseOver:=", [1], bool420);
                if413 = call421;
              }
              return if413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func362.paramCounts = [
            0,
          ];
          func362.variableArities = [
            false,
          ];
          obj332.methods["mouseEnter"] = func362;
          func362.definitionLine = 154;
          func362.definitionModule = "kitty";
          var func422 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func422.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var if423 = var_done;
              lineNumber = 171
              onSelf = true;
              var call424 = callmethod(this, "mouseOver", [0]);
              var call425 = callmethod(call424,"prefix!", [0]);
              if (Grace_isTrue(call425)) {
                lineNumber = 173
                return var_done
              }
              lineNumber = 175
              lineNumber = 174
              onSelf = true;
              var call427 = callmethod(this, "image", [0]);
              var call428 = callmethod(call427,"width", [0]);
              var quotient430 = callmethod(call428, "/", [1], new GraceNum(2));
              var var_w = quotient430;
              lineNumber = 175;
              moduleName = "kitty";
              lineNumber = 174
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 176
              lineNumber = 175
              onSelf = true;
              var call432 = callmethod(this, "image", [0]);
              var call433 = callmethod(call432,"height", [0]);
              var quotient435 = callmethod(call433, "/", [1], new GraceNum(2));
              var var_h = quotient435;
              lineNumber = 176;
              moduleName = "kitty";
              lineNumber = 175
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 176
              lineNumber = 177
              onSelf = true;
              var call437 = callmethod(this, "posX", [0]);
              var diff439 = callmethod(call437, "-", [1], var_w);
              onSelf = true;
              var call441 = callmethod(this, "posY", [0]);
              var diff443 = callmethod(call441, "-", [1], var_h);
              var call444 = callmethod(var_Point,"x()y", [1, 1], diff439, diff443);
              onSelf = true;
              var call446 = callmethod(this, "posX", [0]);
              var diff448 = callmethod(call446, "-", [1], var_w);
              onSelf = true;
              var call450 = callmethod(this, "posY", [0]);
              var opresult452 = callmethod(call450, "+", [1], var_h);
              var call453 = callmethod(var_Point,"x()y", [1, 1], diff448, opresult452);
              lineNumber = 178
              onSelf = true;
              var call455 = callmethod(this, "posX", [0]);
              var opresult457 = callmethod(call455, "+", [1], var_w);
              onSelf = true;
              var call459 = callmethod(this, "posY", [0]);
              var opresult461 = callmethod(call459, "+", [1], var_h);
              var call462 = callmethod(var_Point,"x()y", [1, 1], opresult457, opresult461);
              onSelf = true;
              var call464 = callmethod(this, "posX", [0]);
              var opresult466 = callmethod(call464, "+", [1], var_w);
              onSelf = true;
              var call468 = callmethod(this, "posY", [0]);
              var diff470 = callmethod(call468, "-", [1], var_h);
              var call471 = callmethod(var_Point,"x()y", [1, 1], opresult466, diff470);
              lineNumber = 176
              var call472 = callmethod(var_collections,"list", [0]);
              var call473 = callmethod(call472,"new", [4], call444, call453, call462, call471);
              var var_poly = call473;
              lineNumber = 176;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 184
              var if474 = var_done;
              lineNumber = 180
              onSelf = true;
              var call475 = callmethod(this, "mouseOver", [0]);
              var call477 = callmethod(var_mouse,"location", [0]);
              var call478 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call479 = callmethod(call478, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call480 = callmethod(call479, "pointInPolygon", [2], call477, var_poly);
              var call481 = callmethod(call480,"prefix!", [0]);
              var opresult483 = callmethod(call481, "&&", [1], call475);
              if (Grace_isTrue(opresult483)) {
                lineNumber = 181
                onSelf = true;
                var call484 = callmethod(this, "mouseExitAction", [0]);
                var call485 = callmethod(call484,"apply", [0]);
                lineNumber = 183
                lineNumber = 181
                lineNumber = 182
                var bool486 = new GraceBoolean(false)
                onSelf = true;
                var call487 = callmethod(this, "mouseOver:=", [1], bool486);
                if474 = call487;
              }
              return if474
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
          obj332.methods["mouseExit"] = func422;
          func422.definitionLine = 170;
          func422.definitionModule = "kitty";
          var func488 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func488.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              lineNumber = 181
              lineNumber = 188
              onSelf = true;
              var call491 = callmethod(this, "rotation", [0]);
              var prod493 = callmethod(call491, "*", [1], new GraceNum(3.14159));
              var quotient495 = callmethod(prod493, "/", [1], new GraceNum(180));
              var call496 = callmethod(var_math,"cos", [1], quotient495);
              var call498 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod501 = callmethod(var_distance, "*", [1], call498);
              var prod503 = callmethod(prod501, "*", [1], call496);
              onSelf = true;
              var call505 = callmethod(this, "posX", [0]);
              var opresult507 = callmethod(call505, "+", [1], prod503);
              onSelf = true;
              var call508 = callmethod(this, "posX:=", [1], opresult507);
              lineNumber = 189
              lineNumber = 188
              lineNumber = 189
              onSelf = true;
              var call511 = callmethod(this, "rotation", [0]);
              var prod513 = callmethod(call511, "*", [1], new GraceNum(3.14159));
              var quotient515 = callmethod(prod513, "/", [1], new GraceNum(180));
              var call516 = callmethod(var_math,"sin", [1], quotient515);
              var call518 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod521 = callmethod(var_distance, "*", [1], call518);
              var prod523 = callmethod(prod521, "*", [1], call516);
              onSelf = true;
              var call525 = callmethod(this, "posY", [0]);
              var opresult527 = callmethod(call525, "+", [1], prod523);
              onSelf = true;
              var call528 = callmethod(this, "posY:=", [1], opresult527);
              return call528
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func488.paramCounts = [
            1,
          ];
          func488.variableArities = [
            false,
          ];
          obj332.methods["move"] = func488;
          func488.definitionLine = 187;
          func488.definitionModule = "kitty";
          var func529 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func529.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 189
              lineNumber = 193
              onSelf = true;
              var call532 = callmethod(this, "rotation", [0]);
              var opresult535 = callmethod(new GraceNum(90), "+", [1], call532);
              var prod537 = callmethod(opresult535, "*", [1], new GraceNum(3.14159));
              var quotient539 = callmethod(prod537, "/", [1], new GraceNum(180));
              var call540 = callmethod(var_math,"cos", [1], quotient539);
              var call542 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod545 = callmethod(var_distance, "*", [1], call542);
              var prod547 = callmethod(prod545, "*", [1], call540);
              onSelf = true;
              var call549 = callmethod(this, "posX", [0]);
              var opresult551 = callmethod(call549, "+", [1], prod547);
              onSelf = true;
              var call552 = callmethod(this, "posX:=", [1], opresult551);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              onSelf = true;
              var call555 = callmethod(this, "rotation", [0]);
              var opresult558 = callmethod(new GraceNum(90), "+", [1], call555);
              var prod560 = callmethod(opresult558, "*", [1], new GraceNum(3.14159));
              var quotient562 = callmethod(prod560, "/", [1], new GraceNum(180));
              var call563 = callmethod(var_math,"sin", [1], quotient562);
              var call565 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod568 = callmethod(var_distance, "*", [1], call565);
              var prod570 = callmethod(prod568, "*", [1], call563);
              onSelf = true;
              var call572 = callmethod(this, "posY", [0]);
              var opresult574 = callmethod(call572, "+", [1], prod570);
              onSelf = true;
              var call575 = callmethod(this, "posY:=", [1], opresult574);
              return call575
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func529.paramCounts = [
            1,
          ];
          func529.variableArities = [
            false,
          ];
          obj332.methods["strafe"] = func529;
          func529.definitionLine = 192;
          func529.definitionModule = "kitty";
          var func576 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func576.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              lineNumber = 194
              lineNumber = 199
              lineNumber = 198
              onSelf = true;
              var call578 = callmethod(this, "rotation", [0]);
              var opresult580 = callmethod(call578, "+", [1], var_angle);
              onSelf = true;
              var call581 = callmethod(this, "rotation:=", [1], opresult580);
              return call581
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func576.paramCounts = [
            1,
          ];
          func576.variableArities = [
            false,
          ];
          obj332.methods["turn"] = func576;
          func576.definitionLine = 197;
          func576.definitionModule = "kitty";
          var func582 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func582.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var call583 = callmethod(var_ctx,"save", [0]);
              lineNumber = 204
              onSelf = true;
              var call584 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call585 = callmethod(this, "posY", [0]);
              var call586 = callmethod(var_ctx,"translate", [2], call584, call585);
              lineNumber = 205
              onSelf = true;
              var call587 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call588 = callmethod(this, "image", [0]);
              var call589 = callmethod(call588,"draw", [4], var_ctx, var_dx, var_dy, call587);
              lineNumber = 206
              var call590 = callmethod(var_ctx,"restore", [0]);
              return call590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func582.paramCounts = [
            3,
          ];
          func582.variableArities = [
            false,
          ];
          obj332.methods["draw"] = func582;
          func582.definitionLine = 202;
          func582.definitionModule = "kitty";
          var func591 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var call592 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call593 = callmethod(call592, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call594 = callmethod(call593, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call595 = callmethod(this, "image:=", [1], call594);
              return call595
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func591.paramCounts = [
            1,
          ];
          func591.variableArities = [
            false,
          ];
          obj332.methods["createImage"] = func591;
          func591.definitionLine = 209;
          func591.definitionModule = "kitty";
          var func596 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 214
              onSelf = true;
              var call597 = callmethod(this, "image:=", [1], var_image__39__);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func596.paramTypes = [];
          func596.paramTypes.push([]);
          func596.paramCounts = [
            1,
          ];
          func596.variableArities = [
            false,
          ];
          obj332.methods["setImage"] = func596;
          func596.definitionLine = 213;
          func596.definitionModule = "kitty";
          var func598 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 210
              lineNumber = 219
              onSelf = true;
              var call599 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call599
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
          obj332.methods["setUpdateAction"] = func598;
          func598.definitionLine = 218;
          func598.definitionModule = "kitty";
          var func600 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 210
              lineNumber = 223
              onSelf = true;
              var call601 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call601
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func600.paramCounts = [
            1,
          ];
          func600.variableArities = [
            false,
          ];
          obj332.methods["setDestroyAction"] = func600;
          func600.definitionLine = 222;
          func600.definitionModule = "kitty";
          var func602 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func602.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 210
              lineNumber = 227
              onSelf = true;
              var call603 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call603
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
          obj332.methods["setMouseDownAction"] = func602;
          func602.definitionLine = 226;
          func602.definitionModule = "kitty";
          var func604 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              lineNumber = 210
              lineNumber = 231
              onSelf = true;
              var call605 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call605
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
          obj332.methods["setMouseUpAction"] = func604;
          func604.definitionLine = 230;
          func604.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 210
              lineNumber = 235
              onSelf = true;
              var call607 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call607
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func606.paramCounts = [
            1,
          ];
          func606.variableArities = [
            false,
          ];
          obj332.methods["setMouseEnterAction"] = func606;
          func606.definitionLine = 234;
          func606.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 210
              lineNumber = 239
              onSelf = true;
              var call609 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
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
            1,
          ];
          func608.variableArities = [
            false,
          ];
          obj332.methods["setMouseOverAction"] = func608;
          func608.definitionLine = 238;
          func608.definitionModule = "kitty";
          var func610 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func610.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 210
              lineNumber = 243
              onSelf = true;
              var call611 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call611
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func610.paramCounts = [
            1,
          ];
          func610.variableArities = [
            false,
          ];
          obj332.methods["setMouseExitAction"] = func610;
          func610.definitionLine = 242;
          func610.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 210
              lineNumber = 247
              onSelf = true;
              var call613 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 249
              lineNumber = 210
              lineNumber = 248
              onSelf = true;
              var call614 = callmethod(this, "posY:=", [1], var_y);
              return call614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func612.paramCounts = [
            2,
          ];
          func612.variableArities = [
            false,
          ];
          obj332.methods["setLocation"] = func612;
          func612.definitionLine = 246;
          func612.definitionModule = "kitty";
          var func615 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func615.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              lineNumber = 252
              onSelf = true;
              var call616 = callmethod(this, "posX", [0]);
              return call616
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func615.paramCounts = [
            0,
          ];
          func615.variableArities = [
            false,
          ];
          obj332.methods["getX"] = func615;
          func615.definitionLine = 251;
          func615.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 256
              onSelf = true;
              var call618 = callmethod(this, "posY", [0]);
              return call618
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
          obj332.methods["getY"] = func617;
          func617.definitionLine = 255;
          func617.definitionModule = "kitty";
          var func619 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func619.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 210
              lineNumber = 260
              onSelf = true;
              var call620 = callmethod(this, "posX:=", [1], var_posX__39__);
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
            1,
          ];
          func619.variableArities = [
            false,
          ];
          obj332.methods["setX"] = func619;
          func619.definitionLine = 259;
          func619.definitionModule = "kitty";
          var func621 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func621.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 265
              lineNumber = 210
              lineNumber = 264
              onSelf = true;
              var call622 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call622
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func621.paramCounts = [
            1,
          ];
          func621.variableArities = [
            false,
          ];
          obj332.methods["setY"] = func621;
          func621.definitionLine = 263;
          func621.definitionModule = "kitty";
          var func623 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call624 = callmethod(this, "rotation", [0]);
              return call624
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func623.paramCounts = [
            0,
          ];
          func623.variableArities = [
            false,
          ];
          obj332.methods["getRotation"] = func623;
          func623.definitionLine = 267;
          func623.definitionModule = "kitty";
          sourceObject = obj332;
          lineNumber = 97
          obj332.data["tag"] = var_tag__39__;
          var reader_kitty_tag_625 = function() {
            return this.data["tag"];
          }
          obj332.methods["tag"] = reader_kitty_tag_625;
          obj332.data["tag"] = var_tag__39__;
          var writer_kitty_tag_625 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj332.methods["tag:="] = writer_kitty_tag_625;
          reader_kitty_tag_625.confidential = true;
          writer_kitty_tag_625.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 98
          obj332.data["posX"] = var_x__39__;
          var reader_kitty_posX_626 = function() {
            return this.data["posX"];
          }
          obj332.methods["posX"] = reader_kitty_posX_626;
          obj332.data["posX"] = var_x__39__;
          var writer_kitty_posX_626 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj332.methods["posX:="] = writer_kitty_posX_626;
          reader_kitty_posX_626.confidential = true;
          writer_kitty_posX_626.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 99
          obj332.data["posY"] = var_y__39__;
          var reader_kitty_posY_627 = function() {
            return this.data["posY"];
          }
          obj332.methods["posY"] = reader_kitty_posY_627;
          obj332.data["posY"] = var_y__39__;
          var writer_kitty_posY_627 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj332.methods["posY:="] = writer_kitty_posY_627;
          reader_kitty_posY_627.confidential = true;
          writer_kitty_posY_627.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 100
          obj332.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_628 = function() {
            return this.data["rotation"];
          }
          obj332.methods["rotation"] = reader_kitty_rotation_628;
          obj332.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_628 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj332.methods["rotation:="] = writer_kitty_rotation_628;
          reader_kitty_rotation_628.confidential = true;
          writer_kitty_rotation_628.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 104
          var block629 = Grace_allocObject();
          block629.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block629.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block629.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block629.methods["match"] = GraceBlock_match;
          block629.methods["prefix?"] = GraceBlock_lift;
          block629.receiver = this;
          block629.className = 'block<kitty:104>';
          block629.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["updateAction"] = block629;
          var reader_kitty_updateAction_630 = function() {
            return this.data["updateAction"];
          }
          obj332.methods["updateAction"] = reader_kitty_updateAction_630;
          obj332.data["updateAction"] = block629;
          var writer_kitty_updateAction_630 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj332.methods["updateAction:="] = writer_kitty_updateAction_630;
          reader_kitty_updateAction_630.confidential = true;
          writer_kitty_updateAction_630.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block629)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 105
          var block631 = Grace_allocObject();
          block631.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block631.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block631.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block631.methods["match"] = GraceBlock_match;
          block631.methods["prefix?"] = GraceBlock_lift;
          block631.receiver = this;
          block631.className = 'block<kitty:105>';
          block631.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["destroyAction"] = block631;
          var reader_kitty_destroyAction_632 = function() {
            return this.data["destroyAction"];
          }
          obj332.methods["destroyAction"] = reader_kitty_destroyAction_632;
          obj332.data["destroyAction"] = block631;
          var writer_kitty_destroyAction_632 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj332.methods["destroyAction:="] = writer_kitty_destroyAction_632;
          reader_kitty_destroyAction_632.confidential = true;
          writer_kitty_destroyAction_632.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 106
          var block633 = Grace_allocObject();
          block633.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block633.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block633.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block633.methods["match"] = GraceBlock_match;
          block633.methods["prefix?"] = GraceBlock_lift;
          block633.receiver = this;
          block633.className = 'block<kitty:106>';
          block633.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseDownAction"] = block633;
          var reader_kitty_mouseDownAction_634 = function() {
            return this.data["mouseDownAction"];
          }
          obj332.methods["mouseDownAction"] = reader_kitty_mouseDownAction_634;
          obj332.data["mouseDownAction"] = block633;
          var writer_kitty_mouseDownAction_634 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj332.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_634;
          reader_kitty_mouseDownAction_634.confidential = true;
          writer_kitty_mouseDownAction_634.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block633)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 107
          var block635 = Grace_allocObject();
          block635.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block635.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block635.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block635.methods["match"] = GraceBlock_match;
          block635.methods["prefix?"] = GraceBlock_lift;
          block635.receiver = this;
          block635.className = 'block<kitty:107>';
          block635.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseUpAction"] = block635;
          var reader_kitty_mouseUpAction_636 = function() {
            return this.data["mouseUpAction"];
          }
          obj332.methods["mouseUpAction"] = reader_kitty_mouseUpAction_636;
          obj332.data["mouseUpAction"] = block635;
          var writer_kitty_mouseUpAction_636 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj332.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_636;
          reader_kitty_mouseUpAction_636.confidential = true;
          writer_kitty_mouseUpAction_636.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block635)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 108
          var block637 = Grace_allocObject();
          block637.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block637.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block637.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block637.methods["match"] = GraceBlock_match;
          block637.methods["prefix?"] = GraceBlock_lift;
          block637.receiver = this;
          block637.className = 'block<kitty:108>';
          block637.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseDragAction"] = block637;
          var reader_kitty_mouseDragAction_638 = function() {
            return this.data["mouseDragAction"];
          }
          obj332.methods["mouseDragAction"] = reader_kitty_mouseDragAction_638;
          obj332.data["mouseDragAction"] = block637;
          var writer_kitty_mouseDragAction_638 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj332.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_638;
          reader_kitty_mouseDragAction_638.confidential = true;
          writer_kitty_mouseDragAction_638.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block637)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 109
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
          block639.className = 'block<kitty:109>';
          block639.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseEnterAction"] = block639;
          var reader_kitty_mouseEnterAction_640 = function() {
            return this.data["mouseEnterAction"];
          }
          obj332.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_640;
          obj332.data["mouseEnterAction"] = block639;
          var writer_kitty_mouseEnterAction_640 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj332.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_640;
          reader_kitty_mouseEnterAction_640.confidential = true;
          writer_kitty_mouseEnterAction_640.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block639)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 110
          var block641 = Grace_allocObject();
          block641.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block641.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block641.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block641.methods["match"] = GraceBlock_match;
          block641.methods["prefix?"] = GraceBlock_lift;
          block641.receiver = this;
          block641.className = 'block<kitty:110>';
          block641.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseOverAction"] = block641;
          var reader_kitty_mouseOverAction_642 = function() {
            return this.data["mouseOverAction"];
          }
          obj332.methods["mouseOverAction"] = reader_kitty_mouseOverAction_642;
          obj332.data["mouseOverAction"] = block641;
          var writer_kitty_mouseOverAction_642 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj332.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_642;
          reader_kitty_mouseOverAction_642.confidential = true;
          writer_kitty_mouseOverAction_642.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block641)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var block643 = Grace_allocObject();
          block643.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block643.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block643.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block643.methods["match"] = GraceBlock_match;
          block643.methods["prefix?"] = GraceBlock_lift;
          block643.receiver = this;
          block643.className = 'block<kitty:111>';
          block643.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseExitAction"] = block643;
          var reader_kitty_mouseExitAction_644 = function() {
            return this.data["mouseExitAction"];
          }
          obj332.methods["mouseExitAction"] = reader_kitty_mouseExitAction_644;
          obj332.data["mouseExitAction"] = block643;
          var writer_kitty_mouseExitAction_644 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj332.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_644;
          reader_kitty_mouseExitAction_644.confidential = true;
          writer_kitty_mouseExitAction_644.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block643)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var bool645 = new GraceBoolean(false)
          obj332.data["mouseOver"] = bool645;
          var reader_kitty_mouseOver_646 = function() {
            return this.data["mouseOver"];
          }
          obj332.methods["mouseOver"] = reader_kitty_mouseOver_646;
          obj332.data["mouseOver"] = bool645;
          var writer_kitty_mouseOver_646 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj332.methods["mouseOver:="] = writer_kitty_mouseOver_646;
          reader_kitty_mouseOver_646.confidential = true;
          writer_kitty_mouseOver_646.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool645)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 112
          var bool647 = new GraceBoolean(false)
          obj332.data["mouseDownEntity"] = bool647;
          var reader_kitty_mouseDownEntity_648 = function() {
            return this.data["mouseDownEntity"];
          }
          obj332.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_648;
          obj332.data["mouseDownEntity"] = bool647;
          var writer_kitty_mouseDownEntity_648 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj332.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_648;
          reader_kitty_mouseDownEntity_648.confidential = true;
          writer_kitty_mouseDownEntity_648.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool647)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          obj332.data["image"] = undefined;
          var reader_kitty_image_649 = function() {
            return this.data["image"];
          }
          obj332.methods["image"] = reader_kitty_image_649;
          obj332.data["image"] = undefined;
          var writer_kitty_image_649 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj332.methods["image:="] = writer_kitty_image_649;
          reader_kitty_image_649.confidential = true;
          writer_kitty_image_649.confidential = true;
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 116
          onSelf = true;
          var call650 = callmethod(this, "awake", [0]);
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          sourceObject = obj332;
          superDepth = origSuperDepth;
        }
        obj_init_332.apply(obj332, []);
        return obj332
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func331.paramCounts = [
      3,
    ];
    func331.variableArities = [
      false,
    ];
    obj329.methods["new"] = func331;
    func331.definitionLine = 93;
    func331.definitionModule = "kitty";
    var func651 = function(argcv) {
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
        var obj652 = Grace_allocObject();
        obj652.definitionModule = "kitty";
        obj652.definitionLine = 93;
        var inho652 = inheritingObject;
        while (inho652.superobj) inho652 = inho652.superobj;
        inho652.superobj = obj652;
        obj652.data = inheritingObject.data;
        obj652.outer = this;
        var reader_kitty_outer_653 = function() {
          return this.outer;
        }
        obj652.methods["outer"] = reader_kitty_outer_653;
        function obj_init_652() {
          var origSuperDepth = superDepth;
          superDepth = obj652;
          obj652.annotations = [];
          var func654 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func654.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var string655 = new GraceString("realyee.png");
              onSelf = true;
              var call656 = callmethod(this, "createImage", [1], string655);
              lineNumber = 122
              lineNumber = 121
              var_kitten = this;
              lineNumber = 122
              var call657 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call657
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func654.paramCounts = [
            0,
          ];
          func654.variableArities = [
            false,
          ];
          obj652.methods["awake"] = func654;
          func654.definitionLine = 119;
          func654.definitionModule = "kitty";
          var func658 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func658.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              onSelf = true;
              var call659 = callmethod(this, "updateAction", [0]);
              var call660 = callmethod(call659,"apply", [0]);
              lineNumber = 133
              var if661 = var_done;
              lineNumber = 127
              onSelf = true;
              var call662 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call662)) {
                lineNumber = 128
                onSelf = true;
                var call663 = callmethod(this, "mouseOverAction", [0]);
                var call664 = callmethod(call663,"apply", [0]);
                if661 = call664;
              }
              return if661
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func658.paramCounts = [
            0,
          ];
          func658.variableArities = [
            false,
          ];
          obj652.methods["tick"] = func658;
          func658.definitionLine = 125;
          func658.definitionModule = "kitty";
          var func665 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func665.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              onSelf = true;
              var call666 = callmethod(this, "destroyAction", [0]);
              var call667 = callmethod(call666,"apply", [0]);
              return call667
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func665.paramCounts = [
            0,
          ];
          func665.variableArities = [
            false,
          ];
          obj652.methods["kill"] = func665;
          func665.definitionLine = 135;
          func665.definitionModule = "kitty";
          var func668 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func668.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              var if669 = var_done;
              lineNumber = 141
              onSelf = true;
              var call670 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call670)) {
                lineNumber = 142
                onSelf = true;
                var call671 = callmethod(this, "mouseDownAction", [0]);
                var call672 = callmethod(call671,"apply", [0]);
                lineNumber = 144
                lineNumber = 142
                lineNumber = 143
                var bool673 = new GraceBoolean(true)
                onSelf = true;
                var call674 = callmethod(this, "mouseDownEntity:=", [1], bool673);
                if669 = call674;
              }
              return if669
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func668.paramCounts = [
            0,
          ];
          func668.variableArities = [
            false,
          ];
          obj652.methods["mouseDown"] = func668;
          func668.definitionLine = 140;
          func668.definitionModule = "kitty";
          var func675 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func675.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              var if676 = var_done;
              lineNumber = 148
              onSelf = true;
              var call677 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call677)) {
                lineNumber = 149
                onSelf = true;
                var call678 = callmethod(this, "mouseUpAction", [0]);
                var call679 = callmethod(call678,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool680 = new GraceBoolean(false)
                onSelf = true;
                var call681 = callmethod(this, "mouseDownEntity:=", [1], bool680);
                if676 = call681;
              }
              return if676
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
          obj652.methods["mouseUp"] = func675;
          func675.definitionLine = 147;
          func675.definitionModule = "kitty";
          var func682 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func682.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var if683 = var_done;
              lineNumber = 155
              onSelf = true;
              var call684 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call684)) {
                lineNumber = 157
                return var_done
              }
              lineNumber = 159
              lineNumber = 158
              onSelf = true;
              var call686 = callmethod(this, "image", [0]);
              var call687 = callmethod(call686,"width", [0]);
              var quotient689 = callmethod(call687, "/", [1], new GraceNum(2));
              var var_w = quotient689;
              lineNumber = 159;
              moduleName = "kitty";
              lineNumber = 158
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call691 = callmethod(this, "image", [0]);
              var call692 = callmethod(call691,"height", [0]);
              var quotient694 = callmethod(call692, "/", [1], new GraceNum(2));
              var var_h = quotient694;
              lineNumber = 160;
              moduleName = "kitty";
              lineNumber = 159
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 160
              lineNumber = 161
              onSelf = true;
              var call696 = callmethod(this, "posX", [0]);
              var diff698 = callmethod(call696, "-", [1], var_w);
              onSelf = true;
              var call700 = callmethod(this, "posY", [0]);
              var diff702 = callmethod(call700, "-", [1], var_h);
              var call703 = callmethod(var_Point,"x()y", [1, 1], diff698, diff702);
              onSelf = true;
              var call705 = callmethod(this, "posX", [0]);
              var diff707 = callmethod(call705, "-", [1], var_w);
              onSelf = true;
              var call709 = callmethod(this, "posY", [0]);
              var opresult711 = callmethod(call709, "+", [1], var_h);
              var call712 = callmethod(var_Point,"x()y", [1, 1], diff707, opresult711);
              lineNumber = 162
              onSelf = true;
              var call714 = callmethod(this, "posX", [0]);
              var opresult716 = callmethod(call714, "+", [1], var_w);
              onSelf = true;
              var call718 = callmethod(this, "posY", [0]);
              var opresult720 = callmethod(call718, "+", [1], var_h);
              var call721 = callmethod(var_Point,"x()y", [1, 1], opresult716, opresult720);
              onSelf = true;
              var call723 = callmethod(this, "posX", [0]);
              var opresult725 = callmethod(call723, "+", [1], var_w);
              onSelf = true;
              var call727 = callmethod(this, "posY", [0]);
              var diff729 = callmethod(call727, "-", [1], var_h);
              var call730 = callmethod(var_Point,"x()y", [1, 1], opresult725, diff729);
              lineNumber = 160
              var call731 = callmethod(var_collections,"list", [0]);
              var call732 = callmethod(call731,"new", [4], call703, call712, call721, call730);
              var var_poly = call732;
              lineNumber = 160;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 168
              var if733 = var_done;
              lineNumber = 164
              var call734 = callmethod(var_mouse,"location", [0]);
              var call735 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call736 = callmethod(call735, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call737 = callmethod(call736, "pointInPolygon", [2], call734, var_poly);
              if (Grace_isTrue(call737)) {
                lineNumber = 165
                onSelf = true;
                var call738 = callmethod(this, "mouseEnterAction", [0]);
                var call739 = callmethod(call738,"apply", [0]);
                lineNumber = 167
                lineNumber = 165
                lineNumber = 166
                var bool740 = new GraceBoolean(true)
                onSelf = true;
                var call741 = callmethod(this, "mouseOver:=", [1], bool740);
                if733 = call741;
              }
              return if733
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func682.paramCounts = [
            0,
          ];
          func682.variableArities = [
            false,
          ];
          obj652.methods["mouseEnter"] = func682;
          func682.definitionLine = 154;
          func682.definitionModule = "kitty";
          var func742 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func742.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var if743 = var_done;
              lineNumber = 171
              onSelf = true;
              var call744 = callmethod(this, "mouseOver", [0]);
              var call745 = callmethod(call744,"prefix!", [0]);
              if (Grace_isTrue(call745)) {
                lineNumber = 173
                return var_done
              }
              lineNumber = 175
              lineNumber = 174
              onSelf = true;
              var call747 = callmethod(this, "image", [0]);
              var call748 = callmethod(call747,"width", [0]);
              var quotient750 = callmethod(call748, "/", [1], new GraceNum(2));
              var var_w = quotient750;
              lineNumber = 175;
              moduleName = "kitty";
              lineNumber = 174
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 176
              lineNumber = 175
              onSelf = true;
              var call752 = callmethod(this, "image", [0]);
              var call753 = callmethod(call752,"height", [0]);
              var quotient755 = callmethod(call753, "/", [1], new GraceNum(2));
              var var_h = quotient755;
              lineNumber = 176;
              moduleName = "kitty";
              lineNumber = 175
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 176
              lineNumber = 177
              onSelf = true;
              var call757 = callmethod(this, "posX", [0]);
              var diff759 = callmethod(call757, "-", [1], var_w);
              onSelf = true;
              var call761 = callmethod(this, "posY", [0]);
              var diff763 = callmethod(call761, "-", [1], var_h);
              var call764 = callmethod(var_Point,"x()y", [1, 1], diff759, diff763);
              onSelf = true;
              var call766 = callmethod(this, "posX", [0]);
              var diff768 = callmethod(call766, "-", [1], var_w);
              onSelf = true;
              var call770 = callmethod(this, "posY", [0]);
              var opresult772 = callmethod(call770, "+", [1], var_h);
              var call773 = callmethod(var_Point,"x()y", [1, 1], diff768, opresult772);
              lineNumber = 178
              onSelf = true;
              var call775 = callmethod(this, "posX", [0]);
              var opresult777 = callmethod(call775, "+", [1], var_w);
              onSelf = true;
              var call779 = callmethod(this, "posY", [0]);
              var opresult781 = callmethod(call779, "+", [1], var_h);
              var call782 = callmethod(var_Point,"x()y", [1, 1], opresult777, opresult781);
              onSelf = true;
              var call784 = callmethod(this, "posX", [0]);
              var opresult786 = callmethod(call784, "+", [1], var_w);
              onSelf = true;
              var call788 = callmethod(this, "posY", [0]);
              var diff790 = callmethod(call788, "-", [1], var_h);
              var call791 = callmethod(var_Point,"x()y", [1, 1], opresult786, diff790);
              lineNumber = 176
              var call792 = callmethod(var_collections,"list", [0]);
              var call793 = callmethod(call792,"new", [4], call764, call773, call782, call791);
              var var_poly = call793;
              lineNumber = 176;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 184
              var if794 = var_done;
              lineNumber = 180
              onSelf = true;
              var call795 = callmethod(this, "mouseOver", [0]);
              var call797 = callmethod(var_mouse,"location", [0]);
              var call798 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call799 = callmethod(call798, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call800 = callmethod(call799, "pointInPolygon", [2], call797, var_poly);
              var call801 = callmethod(call800,"prefix!", [0]);
              var opresult803 = callmethod(call801, "&&", [1], call795);
              if (Grace_isTrue(opresult803)) {
                lineNumber = 181
                onSelf = true;
                var call804 = callmethod(this, "mouseExitAction", [0]);
                var call805 = callmethod(call804,"apply", [0]);
                lineNumber = 183
                lineNumber = 181
                lineNumber = 182
                var bool806 = new GraceBoolean(false)
                onSelf = true;
                var call807 = callmethod(this, "mouseOver:=", [1], bool806);
                if794 = call807;
              }
              return if794
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func742.paramCounts = [
            0,
          ];
          func742.variableArities = [
            false,
          ];
          obj652.methods["mouseExit"] = func742;
          func742.definitionLine = 170;
          func742.definitionModule = "kitty";
          var func808 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func808.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              lineNumber = 181
              lineNumber = 188
              onSelf = true;
              var call811 = callmethod(this, "rotation", [0]);
              var prod813 = callmethod(call811, "*", [1], new GraceNum(3.14159));
              var quotient815 = callmethod(prod813, "/", [1], new GraceNum(180));
              var call816 = callmethod(var_math,"cos", [1], quotient815);
              var call818 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod821 = callmethod(var_distance, "*", [1], call818);
              var prod823 = callmethod(prod821, "*", [1], call816);
              onSelf = true;
              var call825 = callmethod(this, "posX", [0]);
              var opresult827 = callmethod(call825, "+", [1], prod823);
              onSelf = true;
              var call828 = callmethod(this, "posX:=", [1], opresult827);
              lineNumber = 189
              lineNumber = 188
              lineNumber = 189
              onSelf = true;
              var call831 = callmethod(this, "rotation", [0]);
              var prod833 = callmethod(call831, "*", [1], new GraceNum(3.14159));
              var quotient835 = callmethod(prod833, "/", [1], new GraceNum(180));
              var call836 = callmethod(var_math,"sin", [1], quotient835);
              var call838 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod841 = callmethod(var_distance, "*", [1], call838);
              var prod843 = callmethod(prod841, "*", [1], call836);
              onSelf = true;
              var call845 = callmethod(this, "posY", [0]);
              var opresult847 = callmethod(call845, "+", [1], prod843);
              onSelf = true;
              var call848 = callmethod(this, "posY:=", [1], opresult847);
              return call848
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
          obj652.methods["move"] = func808;
          func808.definitionLine = 187;
          func808.definitionModule = "kitty";
          var func849 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func849.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 189
              lineNumber = 193
              onSelf = true;
              var call852 = callmethod(this, "rotation", [0]);
              var opresult855 = callmethod(new GraceNum(90), "+", [1], call852);
              var prod857 = callmethod(opresult855, "*", [1], new GraceNum(3.14159));
              var quotient859 = callmethod(prod857, "/", [1], new GraceNum(180));
              var call860 = callmethod(var_math,"cos", [1], quotient859);
              var call862 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod865 = callmethod(var_distance, "*", [1], call862);
              var prod867 = callmethod(prod865, "*", [1], call860);
              onSelf = true;
              var call869 = callmethod(this, "posX", [0]);
              var opresult871 = callmethod(call869, "+", [1], prod867);
              onSelf = true;
              var call872 = callmethod(this, "posX:=", [1], opresult871);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              onSelf = true;
              var call875 = callmethod(this, "rotation", [0]);
              var opresult878 = callmethod(new GraceNum(90), "+", [1], call875);
              var prod880 = callmethod(opresult878, "*", [1], new GraceNum(3.14159));
              var quotient882 = callmethod(prod880, "/", [1], new GraceNum(180));
              var call883 = callmethod(var_math,"sin", [1], quotient882);
              var call885 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod888 = callmethod(var_distance, "*", [1], call885);
              var prod890 = callmethod(prod888, "*", [1], call883);
              onSelf = true;
              var call892 = callmethod(this, "posY", [0]);
              var opresult894 = callmethod(call892, "+", [1], prod890);
              onSelf = true;
              var call895 = callmethod(this, "posY:=", [1], opresult894);
              return call895
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func849.paramCounts = [
            1,
          ];
          func849.variableArities = [
            false,
          ];
          obj652.methods["strafe"] = func849;
          func849.definitionLine = 192;
          func849.definitionModule = "kitty";
          var func896 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func896.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              lineNumber = 194
              lineNumber = 199
              lineNumber = 198
              onSelf = true;
              var call898 = callmethod(this, "rotation", [0]);
              var opresult900 = callmethod(call898, "+", [1], var_angle);
              onSelf = true;
              var call901 = callmethod(this, "rotation:=", [1], opresult900);
              return call901
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func896.paramCounts = [
            1,
          ];
          func896.variableArities = [
            false,
          ];
          obj652.methods["turn"] = func896;
          func896.definitionLine = 197;
          func896.definitionModule = "kitty";
          var func902 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func902.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var call903 = callmethod(var_ctx,"save", [0]);
              lineNumber = 204
              onSelf = true;
              var call904 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call905 = callmethod(this, "posY", [0]);
              var call906 = callmethod(var_ctx,"translate", [2], call904, call905);
              lineNumber = 205
              onSelf = true;
              var call907 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call908 = callmethod(this, "image", [0]);
              var call909 = callmethod(call908,"draw", [4], var_ctx, var_dx, var_dy, call907);
              lineNumber = 206
              var call910 = callmethod(var_ctx,"restore", [0]);
              return call910
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func902.paramCounts = [
            3,
          ];
          func902.variableArities = [
            false,
          ];
          obj652.methods["draw"] = func902;
          func902.definitionLine = 202;
          func902.definitionModule = "kitty";
          var func911 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func911.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var call912 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call913 = callmethod(call912, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call914 = callmethod(call913, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call915 = callmethod(this, "image:=", [1], call914);
              return call915
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
          obj652.methods["createImage"] = func911;
          func911.definitionLine = 209;
          func911.definitionModule = "kitty";
          var func916 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func916.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 214
              onSelf = true;
              var call917 = callmethod(this, "image:=", [1], var_image__39__);
              return call917
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func916.paramTypes = [];
          func916.paramTypes.push([]);
          func916.paramCounts = [
            1,
          ];
          func916.variableArities = [
            false,
          ];
          obj652.methods["setImage"] = func916;
          func916.definitionLine = 213;
          func916.definitionModule = "kitty";
          var func918 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func918.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 210
              lineNumber = 219
              onSelf = true;
              var call919 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call919
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func918.paramCounts = [
            1,
          ];
          func918.variableArities = [
            false,
          ];
          obj652.methods["setUpdateAction"] = func918;
          func918.definitionLine = 218;
          func918.definitionModule = "kitty";
          var func920 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func920.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 210
              lineNumber = 223
              onSelf = true;
              var call921 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call921
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func920.paramCounts = [
            1,
          ];
          func920.variableArities = [
            false,
          ];
          obj652.methods["setDestroyAction"] = func920;
          func920.definitionLine = 222;
          func920.definitionModule = "kitty";
          var func922 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func922.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 210
              lineNumber = 227
              onSelf = true;
              var call923 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call923
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func922.paramCounts = [
            1,
          ];
          func922.variableArities = [
            false,
          ];
          obj652.methods["setMouseDownAction"] = func922;
          func922.definitionLine = 226;
          func922.definitionModule = "kitty";
          var func924 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func924.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              lineNumber = 210
              lineNumber = 231
              onSelf = true;
              var call925 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call925
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func924.paramCounts = [
            1,
          ];
          func924.variableArities = [
            false,
          ];
          obj652.methods["setMouseUpAction"] = func924;
          func924.definitionLine = 230;
          func924.definitionModule = "kitty";
          var func926 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func926.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 210
              lineNumber = 235
              onSelf = true;
              var call927 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call927
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func926.paramCounts = [
            1,
          ];
          func926.variableArities = [
            false,
          ];
          obj652.methods["setMouseEnterAction"] = func926;
          func926.definitionLine = 234;
          func926.definitionModule = "kitty";
          var func928 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func928.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 210
              lineNumber = 239
              onSelf = true;
              var call929 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call929
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func928.paramCounts = [
            1,
          ];
          func928.variableArities = [
            false,
          ];
          obj652.methods["setMouseOverAction"] = func928;
          func928.definitionLine = 238;
          func928.definitionModule = "kitty";
          var func930 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func930.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 210
              lineNumber = 243
              onSelf = true;
              var call931 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call931
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func930.paramCounts = [
            1,
          ];
          func930.variableArities = [
            false,
          ];
          obj652.methods["setMouseExitAction"] = func930;
          func930.definitionLine = 242;
          func930.definitionModule = "kitty";
          var func932 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func932.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 210
              lineNumber = 247
              onSelf = true;
              var call933 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 249
              lineNumber = 210
              lineNumber = 248
              onSelf = true;
              var call934 = callmethod(this, "posY:=", [1], var_y);
              return call934
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func932.paramCounts = [
            2,
          ];
          func932.variableArities = [
            false,
          ];
          obj652.methods["setLocation"] = func932;
          func932.definitionLine = 246;
          func932.definitionModule = "kitty";
          var func935 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func935.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              lineNumber = 252
              onSelf = true;
              var call936 = callmethod(this, "posX", [0]);
              return call936
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func935.paramCounts = [
            0,
          ];
          func935.variableArities = [
            false,
          ];
          obj652.methods["getX"] = func935;
          func935.definitionLine = 251;
          func935.definitionModule = "kitty";
          var func937 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func937.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 256
              onSelf = true;
              var call938 = callmethod(this, "posY", [0]);
              return call938
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func937.paramCounts = [
            0,
          ];
          func937.variableArities = [
            false,
          ];
          obj652.methods["getY"] = func937;
          func937.definitionLine = 255;
          func937.definitionModule = "kitty";
          var func939 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func939.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 210
              lineNumber = 260
              onSelf = true;
              var call940 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call940
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func939.paramCounts = [
            1,
          ];
          func939.variableArities = [
            false,
          ];
          obj652.methods["setX"] = func939;
          func939.definitionLine = 259;
          func939.definitionModule = "kitty";
          var func941 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func941.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 265
              lineNumber = 210
              lineNumber = 264
              onSelf = true;
              var call942 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call942
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func941.paramCounts = [
            1,
          ];
          func941.variableArities = [
            false,
          ];
          obj652.methods["setY"] = func941;
          func941.definitionLine = 263;
          func941.definitionModule = "kitty";
          var func943 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func943.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call944 = callmethod(this, "rotation", [0]);
              return call944
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func943.paramCounts = [
            0,
          ];
          func943.variableArities = [
            false,
          ];
          obj652.methods["getRotation"] = func943;
          func943.definitionLine = 267;
          func943.definitionModule = "kitty";
          sourceObject = obj652;
          lineNumber = 97
          obj652.data["tag"] = var_tag__39__;
          var reader_kitty_tag_945 = function() {
            return this.data["tag"];
          }
          obj652.methods["tag"] = reader_kitty_tag_945;
          obj652.data["tag"] = var_tag__39__;
          var writer_kitty_tag_945 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj652.methods["tag:="] = writer_kitty_tag_945;
          reader_kitty_tag_945.confidential = true;
          writer_kitty_tag_945.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 98
          obj652.data["posX"] = var_x__39__;
          var reader_kitty_posX_946 = function() {
            return this.data["posX"];
          }
          obj652.methods["posX"] = reader_kitty_posX_946;
          obj652.data["posX"] = var_x__39__;
          var writer_kitty_posX_946 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj652.methods["posX:="] = writer_kitty_posX_946;
          reader_kitty_posX_946.confidential = true;
          writer_kitty_posX_946.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 99
          obj652.data["posY"] = var_y__39__;
          var reader_kitty_posY_947 = function() {
            return this.data["posY"];
          }
          obj652.methods["posY"] = reader_kitty_posY_947;
          obj652.data["posY"] = var_y__39__;
          var writer_kitty_posY_947 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj652.methods["posY:="] = writer_kitty_posY_947;
          reader_kitty_posY_947.confidential = true;
          writer_kitty_posY_947.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 100
          obj652.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_948 = function() {
            return this.data["rotation"];
          }
          obj652.methods["rotation"] = reader_kitty_rotation_948;
          obj652.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_948 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj652.methods["rotation:="] = writer_kitty_rotation_948;
          reader_kitty_rotation_948.confidential = true;
          writer_kitty_rotation_948.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 104
          var block949 = Grace_allocObject();
          block949.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block949.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block949.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block949.methods["match"] = GraceBlock_match;
          block949.methods["prefix?"] = GraceBlock_lift;
          block949.receiver = this;
          block949.className = 'block<kitty:104>';
          block949.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["updateAction"] = block949;
          var reader_kitty_updateAction_950 = function() {
            return this.data["updateAction"];
          }
          obj652.methods["updateAction"] = reader_kitty_updateAction_950;
          obj652.data["updateAction"] = block949;
          var writer_kitty_updateAction_950 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj652.methods["updateAction:="] = writer_kitty_updateAction_950;
          reader_kitty_updateAction_950.confidential = true;
          writer_kitty_updateAction_950.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block949)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 105
          var block951 = Grace_allocObject();
          block951.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block951.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block951.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block951.methods["match"] = GraceBlock_match;
          block951.methods["prefix?"] = GraceBlock_lift;
          block951.receiver = this;
          block951.className = 'block<kitty:105>';
          block951.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["destroyAction"] = block951;
          var reader_kitty_destroyAction_952 = function() {
            return this.data["destroyAction"];
          }
          obj652.methods["destroyAction"] = reader_kitty_destroyAction_952;
          obj652.data["destroyAction"] = block951;
          var writer_kitty_destroyAction_952 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj652.methods["destroyAction:="] = writer_kitty_destroyAction_952;
          reader_kitty_destroyAction_952.confidential = true;
          writer_kitty_destroyAction_952.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block951)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 106
          var block953 = Grace_allocObject();
          block953.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block953.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block953.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block953.methods["match"] = GraceBlock_match;
          block953.methods["prefix?"] = GraceBlock_lift;
          block953.receiver = this;
          block953.className = 'block<kitty:106>';
          block953.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseDownAction"] = block953;
          var reader_kitty_mouseDownAction_954 = function() {
            return this.data["mouseDownAction"];
          }
          obj652.methods["mouseDownAction"] = reader_kitty_mouseDownAction_954;
          obj652.data["mouseDownAction"] = block953;
          var writer_kitty_mouseDownAction_954 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj652.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_954;
          reader_kitty_mouseDownAction_954.confidential = true;
          writer_kitty_mouseDownAction_954.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block953)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 107
          var block955 = Grace_allocObject();
          block955.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block955.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block955.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block955.methods["match"] = GraceBlock_match;
          block955.methods["prefix?"] = GraceBlock_lift;
          block955.receiver = this;
          block955.className = 'block<kitty:107>';
          block955.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseUpAction"] = block955;
          var reader_kitty_mouseUpAction_956 = function() {
            return this.data["mouseUpAction"];
          }
          obj652.methods["mouseUpAction"] = reader_kitty_mouseUpAction_956;
          obj652.data["mouseUpAction"] = block955;
          var writer_kitty_mouseUpAction_956 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj652.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_956;
          reader_kitty_mouseUpAction_956.confidential = true;
          writer_kitty_mouseUpAction_956.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block955)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 108
          var block957 = Grace_allocObject();
          block957.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block957.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block957.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block957.methods["match"] = GraceBlock_match;
          block957.methods["prefix?"] = GraceBlock_lift;
          block957.receiver = this;
          block957.className = 'block<kitty:108>';
          block957.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseDragAction"] = block957;
          var reader_kitty_mouseDragAction_958 = function() {
            return this.data["mouseDragAction"];
          }
          obj652.methods["mouseDragAction"] = reader_kitty_mouseDragAction_958;
          obj652.data["mouseDragAction"] = block957;
          var writer_kitty_mouseDragAction_958 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj652.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_958;
          reader_kitty_mouseDragAction_958.confidential = true;
          writer_kitty_mouseDragAction_958.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block957)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 109
          var block959 = Grace_allocObject();
          block959.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block959.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block959.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block959.methods["match"] = GraceBlock_match;
          block959.methods["prefix?"] = GraceBlock_lift;
          block959.receiver = this;
          block959.className = 'block<kitty:109>';
          block959.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseEnterAction"] = block959;
          var reader_kitty_mouseEnterAction_960 = function() {
            return this.data["mouseEnterAction"];
          }
          obj652.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_960;
          obj652.data["mouseEnterAction"] = block959;
          var writer_kitty_mouseEnterAction_960 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj652.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_960;
          reader_kitty_mouseEnterAction_960.confidential = true;
          writer_kitty_mouseEnterAction_960.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block959)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 110
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
          block961.className = 'block<kitty:110>';
          block961.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseOverAction"] = block961;
          var reader_kitty_mouseOverAction_962 = function() {
            return this.data["mouseOverAction"];
          }
          obj652.methods["mouseOverAction"] = reader_kitty_mouseOverAction_962;
          obj652.data["mouseOverAction"] = block961;
          var writer_kitty_mouseOverAction_962 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj652.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_962;
          reader_kitty_mouseOverAction_962.confidential = true;
          writer_kitty_mouseOverAction_962.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block961)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 111
          var block963 = Grace_allocObject();
          block963.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block963.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block963.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block963.methods["match"] = GraceBlock_match;
          block963.methods["prefix?"] = GraceBlock_lift;
          block963.receiver = this;
          block963.className = 'block<kitty:111>';
          block963.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj652.data["mouseExitAction"] = block963;
          var reader_kitty_mouseExitAction_964 = function() {
            return this.data["mouseExitAction"];
          }
          obj652.methods["mouseExitAction"] = reader_kitty_mouseExitAction_964;
          obj652.data["mouseExitAction"] = block963;
          var writer_kitty_mouseExitAction_964 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj652.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_964;
          reader_kitty_mouseExitAction_964.confidential = true;
          writer_kitty_mouseExitAction_964.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block963)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 111
          var bool965 = new GraceBoolean(false)
          obj652.data["mouseOver"] = bool965;
          var reader_kitty_mouseOver_966 = function() {
            return this.data["mouseOver"];
          }
          obj652.methods["mouseOver"] = reader_kitty_mouseOver_966;
          obj652.data["mouseOver"] = bool965;
          var writer_kitty_mouseOver_966 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj652.methods["mouseOver:="] = writer_kitty_mouseOver_966;
          reader_kitty_mouseOver_966.confidential = true;
          writer_kitty_mouseOver_966.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool965)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 112
          var bool967 = new GraceBoolean(false)
          obj652.data["mouseDownEntity"] = bool967;
          var reader_kitty_mouseDownEntity_968 = function() {
            return this.data["mouseDownEntity"];
          }
          obj652.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_968;
          obj652.data["mouseDownEntity"] = bool967;
          var writer_kitty_mouseDownEntity_968 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj652.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_968;
          reader_kitty_mouseDownEntity_968.confidential = true;
          writer_kitty_mouseDownEntity_968.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool967)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["image"] = undefined;
          var reader_kitty_image_969 = function() {
            return this.data["image"];
          }
          obj652.methods["image"] = reader_kitty_image_969;
          obj652.data["image"] = undefined;
          var writer_kitty_image_969 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj652.methods["image:="] = writer_kitty_image_969;
          reader_kitty_image_969.confidential = true;
          writer_kitty_image_969.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 116
          onSelf = true;
          var call970 = callmethod(this, "awake", [0]);
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          superDepth = origSuperDepth;
        }
        obj_init_652.apply(inheritingObject, []);
        return obj652
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj329.methods["new()object"] = func651;
    var func971 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 93
        var string972 = new GraceString("class KittyEntity");
        return string972
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func971.paramCounts = [
    ];
    func971.variableArities = [
    ];
    obj329.methods["asDebugString"] = func971;
    func971.definitionLine = 93;
    func971.definitionModule = "kitty";
    sourceObject = obj329;
    sourceObject = obj329;
    superDepth = origSuperDepth;
  }
  obj_init_329.apply(obj329, []);
  var var_KittyEntity = obj329;
  lineNumber = 272
  lineNumber = 284
  lineNumber = 289
  lineNumber = 293
  lineNumber = 298
  lineNumber = 302
  lineNumber = 306
  lineNumber = 310
  lineNumber = 314
  lineNumber = 318
  lineNumber = 325
  var func973 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func973.paramCounts[0])
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
  func973.paramCounts = [
    0,
  ];
  func973.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func973;
  func973.definitionLine = 325;
  func973.definitionModule = "kitty";
  var obj974 = Grace_allocObject();
  obj974.definitionModule = "kitty";
  obj974.definitionLine = 325;
  obj974.outer = this;
  var reader_kitty_outer_975 = function() {
    return this.outer;
  }
  obj974.methods["outer"] = reader_kitty_outer_975;
  function obj_init_974() {
    var origSuperDepth = superDepth;
    superDepth = obj974;
    obj974.annotations = [];
    var func976 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func976.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj977 = Grace_allocObject();
        obj977.definitionModule = "kitty";
        obj977.definitionLine = 325;
        obj977.outer = this;
        var reader_kitty_outer_978 = function() {
          return this.outer;
        }
        obj977.methods["outer"] = reader_kitty_outer_978;
        function obj_init_977() {
          var origSuperDepth = superDepth;
          superDepth = obj977;
          obj977.annotations = [];
          var func979 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func979.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 367
              var if980 = var_done;
              lineNumber = 363
              onSelf = true;
              var call981 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call981)) {
                lineNumber = 365
                lineNumber = 364
                var bool982 = new GraceBoolean(false)
                return bool982
              }
              lineNumber = 368
              lineNumber = 325
              lineNumber = 367
              var call983 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call984 = callmethod(this, "document:=", [1], call983);
              lineNumber = 368
              lineNumber = 367
              lineNumber = 368
              var string985 = new GraceString("standard-canvas");
              onSelf = true;
              var call986 = callmethod(this, "document", [0]);
              var call987 = callmethod(call986,"getElementById", [1], string985);
              onSelf = true;
              var call988 = callmethod(this, "canvas:=", [1], call987);
              lineNumber = 370
              lineNumber = 367
              lineNumber = 369
              onSelf = true;
              var call989 = callmethod(this, "canvas", [0]);
              var call990 = callmethod(call989,"width", [0]);
              onSelf = true;
              var call991 = callmethod(this, "canvasWidth:=", [1], call990);
              lineNumber = 373
              lineNumber = 369
              lineNumber = 370
              onSelf = true;
              var call992 = callmethod(this, "canvas", [0]);
              var call993 = callmethod(call992,"height", [0]);
              onSelf = true;
              var call994 = callmethod(this, "canvasHeight:=", [1], call993);
              lineNumber = 379
              var block995 = Grace_allocObject();
              block995.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block995.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block995.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block995.methods["match"] = GraceBlock_match;
              block995.methods["prefix?"] = GraceBlock_lift;
              block995.receiver = this;
              block995.className = 'block<kitty:379>';
              block995.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 375
                lineNumber = 374
                var bool996 = new GraceBoolean(true)
                var_mouseDown = bool996;
                lineNumber = 375
                onSelf = true;
                var call997 = callmethod(this, "entities", [0]);
                lineNumber = 378
                var block998 = Grace_allocObject();
                block998.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block998.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block998.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block998.methods["match"] = GraceBlock_match;
                block998.methods["prefix?"] = GraceBlock_lift;
                block998.receiver = this;
                block998.className = 'block<kitty:378>';
                block998.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 376
                  var call999 = callmethod(var_entity,"mouseDown", [0]);
                  return call999;
                };
                var call1000 = callmethod(Grace_prelude,"for()do", [1, 1], call997, block998);
                return call1000;
              };
              var_mouseDownListener = block995;
              lineNumber = 379
              var string1001 = new GraceString("mousedown");
              onSelf = true;
              var call1002 = callmethod(this, "canvas", [0]);
              var call1003 = callmethod(call1002,"addEventListener", [2], string1001, var_mouseDownListener);
              lineNumber = 387
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
              block1004.className = 'block<kitty:387>';
              block1004.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 383
                lineNumber = 382
                var bool1005 = new GraceBoolean(false)
                var_mouseDown = bool1005;
                lineNumber = 383
                onSelf = true;
                var call1006 = callmethod(this, "entities", [0]);
                lineNumber = 386
                var block1007 = Grace_allocObject();
                block1007.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1007.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1007.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1007.methods["match"] = GraceBlock_match;
                block1007.methods["prefix?"] = GraceBlock_lift;
                block1007.receiver = this;
                block1007.className = 'block<kitty:386>';
                block1007.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 384
                  var call1008 = callmethod(var_entity,"mouseUp", [0]);
                  return call1008;
                };
                var call1009 = callmethod(Grace_prelude,"for()do", [1, 1], call1006, block1007);
                return call1009;
              };
              var_mouseUpListener = block1004;
              lineNumber = 387
              var string1010 = new GraceString("mouseup");
              onSelf = true;
              var call1011 = callmethod(this, "canvas", [0]);
              var call1012 = callmethod(call1011,"addEventListener", [2], string1010, var_mouseUpListener);
              lineNumber = 400
              var block1013 = Grace_allocObject();
              block1013.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1013.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1013.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1013.methods["match"] = GraceBlock_match;
              block1013.methods["prefix?"] = GraceBlock_lift;
              block1013.receiver = this;
              block1013.className = 'block<kitty:400>';
              block1013.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 391
                lineNumber = 390
                onSelf = true;
                var call1014 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1016 = callmethod(this, "canvas", [0]);
                var call1017 = callmethod(call1016,"offsetWidth", [0]);
                onSelf = true;
                var call1019 = callmethod(this, "canvas", [0]);
                var call1020 = callmethod(call1019,"offsetLeft", [0]);
                var call1022 = callmethod(var_ev,"clientX", [0]);
                var diff1024 = callmethod(call1022, "-", [1], call1020);
                var quotient1026 = callmethod(diff1024, "/", [1], call1017);
                var prod1028 = callmethod(quotient1026, "*", [1], call1014);
                var var_x = prod1028;
                lineNumber = 391;
                moduleName = "kitty";
                lineNumber = 390
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 392
                lineNumber = 391
                onSelf = true;
                var call1029 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1031 = callmethod(this, "canvas", [0]);
                var call1032 = callmethod(call1031,"offsetHeight", [0]);
                onSelf = true;
                var call1034 = callmethod(this, "canvas", [0]);
                var call1035 = callmethod(call1034,"offsetTop", [0]);
                var call1037 = callmethod(var_ev,"clientY", [0]);
                var diff1039 = callmethod(call1037, "-", [1], call1035);
                var quotient1041 = callmethod(diff1039, "/", [1], call1032);
                var prod1043 = callmethod(quotient1041, "*", [1], call1029);
                var var_y = prod1043;
                lineNumber = 392;
                moduleName = "kitty";
                lineNumber = 391
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 392
                lineNumber = 391
                lineNumber = 392
                var call1044 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1045 = callmethod(var_mouse,"position:=", [1], call1044);
                lineNumber = 395
                onSelf = true;
                var call1046 = callmethod(this, "entities", [0]);
                lineNumber = 399
                var block1047 = Grace_allocObject();
                block1047.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1047.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1047.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1047.methods["match"] = GraceBlock_match;
                block1047.methods["prefix?"] = GraceBlock_lift;
                block1047.receiver = this;
                block1047.className = 'block<kitty:399>';
                block1047.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 396
                  var call1048 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 397
                  var call1049 = callmethod(var_entity,"mouseExit", [0]);
                  return call1049;
                };
                var call1050 = callmethod(Grace_prelude,"for()do", [1, 1], call1046, block1047);
                return call1050;
              };
              var_mouseMoveListener = block1013;
              lineNumber = 400
              var string1051 = new GraceString("mousemove");
              onSelf = true;
              var call1052 = callmethod(this, "canvas", [0]);
              var call1053 = callmethod(call1052,"addEventListener", [2], string1051, var_mouseMoveListener);
              lineNumber = 410
              var block1054 = Grace_allocObject();
              block1054.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1054.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1054.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1054.methods["match"] = GraceBlock_match;
              block1054.methods["prefix?"] = GraceBlock_lift;
              block1054.receiver = this;
              block1054.className = 'block<kitty:410>';
              block1054.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 408
                var if1055 = var_done;
                lineNumber = 405
                var call1057 = callmethod(var_ev,"keyCode", [0]);
                var opresult1059 = callmethod(call1057, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1059)) {
                  lineNumber = 406
                  onSelf = true;
                  var call1060 = callmethod(this, "stop", [0]);
                  if1055 = call1060;
                }
                lineNumber = 409
                lineNumber = 408
                var call1061 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1061;
                return call1061;
              };
              var_keyDownListener = block1054;
              lineNumber = 410
              var string1062 = new GraceString("keydown");
              onSelf = true;
              var call1063 = callmethod(this, "document", [0]);
              var call1064 = callmethod(call1063,"addEventListener", [2], string1062, var_keyDownListener);
              lineNumber = 416
              var block1065 = Grace_allocObject();
              block1065.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1065.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1065.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1065.methods["match"] = GraceBlock_match;
              block1065.methods["prefix?"] = GraceBlock_lift;
              block1065.receiver = this;
              block1065.className = 'block<kitty:416>';
              block1065.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 415
                lineNumber = 414
                var call1066 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1066;
                return call1066;
              };
              var_keyUpListener = block1065;
              lineNumber = 416
              var string1067 = new GraceString("keyup");
              onSelf = true;
              var call1068 = callmethod(this, "document", [0]);
              var call1069 = callmethod(call1068,"addEventListener", [2], string1067, var_keyUpListener);
              lineNumber = 418
              lineNumber = 408
              lineNumber = 418
              var string1070 = new GraceString("canvas");
              var call1071 = callmethod(var_dom,"document", [0]);
              var call1072 = callmethod(call1071,"createElement", [1], string1070);
              onSelf = true;
              var call1073 = callmethod(this, "backingCanvas:=", [1], call1072);
              lineNumber = 420
              lineNumber = 418
              lineNumber = 419
              onSelf = true;
              var call1074 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1075 = callmethod(this, "backingCanvas", [0]);
              var call1076 = callmethod(call1075,"height:=", [1], call1074);
              lineNumber = 421
              lineNumber = 418
              lineNumber = 420
              onSelf = true;
              var call1077 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1078 = callmethod(this, "backingCanvas", [0]);
              var call1079 = callmethod(call1078,"width:=", [1], call1077);
              lineNumber = 421
              lineNumber = 418
              lineNumber = 421
              var string1080 = new GraceString("2d");
              onSelf = true;
              var call1081 = callmethod(this, "backingCanvas", [0]);
              var call1082 = callmethod(call1081,"getContext", [1], string1080);
              onSelf = true;
              var call1083 = callmethod(this, "backingContext:=", [1], call1082);
              lineNumber = 422
              lineNumber = 418
              lineNumber = 422
              var string1084 = new GraceString("2d");
              onSelf = true;
              var call1085 = callmethod(this, "canvas", [0]);
              var call1086 = callmethod(call1085,"getContext", [1], string1084);
              onSelf = true;
              var call1087 = callmethod(this, "mctx:=", [1], call1086);
              lineNumber = 425
              var string1088 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1089 = callmethod(this, "setBackground", [1], string1088);
              lineNumber = 428
              var call1090 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1091 = callmethod(call1090, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1092 = callmethod(call1091, "setWorld", [1], this);
              lineNumber = 431
              lineNumber = 430
              var_kitten = this;
              lineNumber = 432
              lineNumber = 428
              lineNumber = 431
              var bool1093 = new GraceBoolean(true)
              onSelf = true;
              var call1094 = callmethod(this, "isInit:=", [1], bool1093);
              return call1094
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func979.paramCounts = [
            0,
          ];
          func979.variableArities = [
            false,
          ];
          obj977.methods["init"] = func979;
          func979.definitionLine = 359;
          func979.definitionModule = "kitty";
          var func1095 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1095.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 438
              lineNumber = 428
              lineNumber = 437
              var bool1096 = new GraceBoolean(true)
              onSelf = true;
              var call1097 = callmethod(this, "isRunning:=", [1], bool1096);
              lineNumber = 438
              var block1098 = Grace_allocObject();
              block1098.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1098.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1098.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1098.methods["match"] = GraceBlock_match;
              block1098.methods["prefix?"] = GraceBlock_lift;
              block1098.receiver = this;
              block1098.className = 'block<kitty:438>';
              block1098.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1099 = callmethod(this, "isRunning", [0]);
                return call1099;
              };
              lineNumber = 442
              var block1100 = Grace_allocObject();
              block1100.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1100.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1100.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1100.methods["match"] = GraceBlock_match;
              block1100.methods["prefix?"] = GraceBlock_lift;
              block1100.receiver = this;
              block1100.className = 'block<kitty:442>';
              block1100.real = function(
              ) {
                sourceObject = this;
                lineNumber = 439
                onSelf = true;
                var call1101 = callmethod(this, "tick", [0]);
                return call1101;
              };
              lineNumber = 438
              var call1102 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1098, new GraceNum(10), block1100);
              return call1102
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1095.paramCounts = [
            0,
          ];
          func1095.variableArities = [
            false,
          ];
          obj977.methods["start"] = func1095;
          func1095.definitionLine = 435;
          func1095.definitionModule = "kitty";
          var func1103 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1103.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 451
              lineNumber = 428
              lineNumber = 450
              onSelf = true;
              var call1104 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1105 = callmethod(this, "mctx", [0]);
              var call1106 = callmethod(call1105,"fillStyle:=", [1], call1104);
              lineNumber = 451
              onSelf = true;
              var call1107 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1108 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1109 = callmethod(this, "mctx", [0]);
              var call1110 = callmethod(call1109,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1107, call1108);
              lineNumber = 452
              onSelf = true;
              var call1111 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1112 = callmethod(this, "mctx", [0]);
              var call1113 = callmethod(call1112,"drawImage", [3], call1111, new GraceNum(0), new GraceNum(0));
              lineNumber = 453
              onSelf = true;
              var call1114 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1116 = callmethod(this, "canvasWidth", [0]);
              var quotient1118 = callmethod(call1116, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1120 = callmethod(this, "canvasHeight", [0]);
              var quotient1122 = callmethod(call1120, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1123 = callmethod(this, "background", [0]);
              var call1124 = callmethod(call1123,"draw", [4], call1114, quotient1118, quotient1122, new GraceNum(0));
              lineNumber = 456
              onSelf = true;
              var call1125 = callmethod(this, "updateAction", [0]);
              var call1126 = callmethod(call1125,"apply", [0]);
              lineNumber = 459
              onSelf = true;
              var call1127 = callmethod(this, "entities", [0]);
              lineNumber = 466
              var block1128 = Grace_allocObject();
              block1128.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1128.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1128.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1128.methods["match"] = GraceBlock_match;
              block1128.methods["prefix?"] = GraceBlock_lift;
              block1128.receiver = this;
              block1128.className = 'block<kitty:466>';
              block1128.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 460
                var call1129 = callmethod(var_entity,"tick", [0]);
                lineNumber = 462
                onSelf = true;
                var call1130 = callmethod(this, "mctx", [0]);
                var call1131 = callmethod(var_entity,"draw", [3], call1130, new GraceNum(0), new GraceNum(0));
                return call1131;
              };
              var call1132 = callmethod(Grace_prelude,"for()do", [1, 1], call1127, block1128);
              return call1132
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1103.paramCounts = [
            0,
          ];
          func1103.variableArities = [
            false,
          ];
          obj977.methods["tick"] = func1103;
          func1103.definitionLine = 445;
          func1103.definitionModule = "kitty";
          var func1133 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1133.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 469
              var string1134 = new GraceString("WORLD STOPPING...");
              var call1135 = Grace_print(string1134);
              lineNumber = 471
              lineNumber = 460
              lineNumber = 470
              var bool1136 = new GraceBoolean(false)
              onSelf = true;
              var call1137 = callmethod(this, "isRunning:=", [1], bool1136);
              lineNumber = 471
              onSelf = true;
              var call1138 = callmethod(this, "destroyAction", [0]);
              var call1139 = callmethod(call1138,"apply", [0]);
              lineNumber = 472
              onSelf = true;
              var call1140 = callmethod(this, "entities", [0]);
              lineNumber = 475
              var block1141 = Grace_allocObject();
              block1141.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1141.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1141.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1141.methods["match"] = GraceBlock_match;
              block1141.methods["prefix?"] = GraceBlock_lift;
              block1141.receiver = this;
              block1141.className = 'block<kitty:475>';
              block1141.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 473
                var call1142 = callmethod(var_entity,"kill", [0]);
                return call1142;
              };
              var call1143 = callmethod(Grace_prelude,"for()do", [1, 1], call1140, block1141);
              lineNumber = 475
              var string1144 = new GraceString("mousedown");
              onSelf = true;
              var call1145 = callmethod(this, "canvas", [0]);
              var call1146 = callmethod(call1145,"removeEventListener", [2], string1144, var_mouseDownListener);
              lineNumber = 476
              var string1147 = new GraceString("mouseup");
              onSelf = true;
              var call1148 = callmethod(this, "canvas", [0]);
              var call1149 = callmethod(call1148,"removeEventListener", [2], string1147, var_mouseUpListener);
              lineNumber = 477
              var string1150 = new GraceString("mousemove");
              onSelf = true;
              var call1151 = callmethod(this, "canvas", [0]);
              var call1152 = callmethod(call1151,"removeEventListener", [2], string1150, var_mouseMoveListener);
              lineNumber = 478
              var string1153 = new GraceString("keydown");
              onSelf = true;
              var call1154 = callmethod(this, "document", [0]);
              var call1155 = callmethod(call1154,"removeEventListener", [2], string1153, var_keyDownListener);
              lineNumber = 479
              var string1156 = new GraceString("keyup");
              onSelf = true;
              var call1157 = callmethod(this, "document", [0]);
              var call1158 = callmethod(call1157,"removeEventListener", [2], string1156, var_keyUpListener);
              return call1158
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1133.paramCounts = [
            0,
          ];
          func1133.variableArities = [
            false,
          ];
          obj977.methods["stop"] = func1133;
          func1133.definitionLine = 468;
          func1133.definitionModule = "kitty";
          var func1159 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 483
              lineNumber = 473
              lineNumber = 483
              onSelf = true;
              var call1160 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1161 = callmethod(this, "canvasHeight", [0]);
              var call1162 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1163 = callmethod(call1162, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1164 = callmethod(call1163, "Image()width()height", [1, 1, 1], var_url, call1160, call1161);
              onSelf = true;
              var call1165 = callmethod(this, "background:=", [1], call1164);
              return call1165
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1159.paramCounts = [
            1,
          ];
          func1159.variableArities = [
            false,
          ];
          obj977.methods["setBackground"] = func1159;
          func1159.definitionLine = 482;
          func1159.definitionModule = "kitty";
          var func1166 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1166.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 487
              onSelf = true;
              var call1167 = callmethod(this, "entities", [0]);
              var call1168 = callmethod(call1167,"push", [1], var_e);
              return call1168
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1166.paramCounts = [
            1,
          ];
          func1166.variableArities = [
            false,
          ];
          obj977.methods["addEntity"] = func1166;
          func1166.definitionLine = 486;
          func1166.definitionModule = "kitty";
          var func1169 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1169.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 492
              lineNumber = 491
              onSelf = true;
              var call1170 = callmethod(this, "mctx", [0]);
              return call1170
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1169.paramCounts = [
            0,
          ];
          func1169.variableArities = [
            false,
          ];
          obj977.methods["getContext"] = func1169;
          func1169.definitionLine = 490;
          func1169.definitionModule = "kitty";
          var func1171 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1171.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 496
              lineNumber = 495
              onSelf = true;
              var call1172 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1174 = callmethod(this, "canvasWidth", [0]);
              var quotient1176 = callmethod(call1174, "/", [1], call1172);
              return quotient1176
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1171.paramCounts = [
            0,
          ];
          func1171.variableArities = [
            false,
          ];
          obj977.methods["moveWidthMultipler"] = func1171;
          func1171.definitionLine = 494;
          func1171.definitionModule = "kitty";
          var func1177 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 500
              lineNumber = 499
              onSelf = true;
              var call1178 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1180 = callmethod(this, "canvasHeight", [0]);
              var quotient1182 = callmethod(call1180, "/", [1], call1178);
              return quotient1182
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1177.paramCounts = [
            0,
          ];
          func1177.variableArities = [
            false,
          ];
          obj977.methods["moveHeightMultipler"] = func1177;
          func1177.definitionLine = 498;
          func1177.definitionModule = "kitty";
          var func1183 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 483
              lineNumber = 503
              onSelf = true;
              var call1184 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1184
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1183.paramCounts = [
            1,
          ];
          func1183.variableArities = [
            false,
          ];
          obj977.methods["setUpdateAction"] = func1183;
          func1183.definitionLine = 502;
          func1183.definitionModule = "kitty";
          var func1185 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1185.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 508
              lineNumber = 483
              lineNumber = 507
              onSelf = true;
              var call1186 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1186
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1185.paramCounts = [
            1,
          ];
          func1185.variableArities = [
            false,
          ];
          obj977.methods["setDestroyAction"] = func1185;
          func1185.definitionLine = 506;
          func1185.definitionModule = "kitty";
          sourceObject = obj977;
          lineNumber = 328
          obj977.data["width"] = var_width__39__;
          var reader_kitty_width_1187 = function() {
            return this.data["width"];
          }
          obj977.methods["width"] = reader_kitty_width_1187;
          obj977.data["width"] = var_width__39__;
          var writer_kitty_width_1187 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj977.methods["width:="] = writer_kitty_width_1187;
          lineNumber = 329;
          moduleName = "kitty";
          lineNumber = 328
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 329
          obj977.data["height"] = var_height__39__;
          var reader_kitty_height_1188 = function() {
            return this.data["height"];
          }
          obj977.methods["height"] = reader_kitty_height_1188;
          obj977.data["height"] = var_height__39__;
          var writer_kitty_height_1188 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj977.methods["height:="] = writer_kitty_height_1188;
          lineNumber = 330;
          moduleName = "kitty";
          lineNumber = 329
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 330
          obj977.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1189 = function() {
            return this.data["tag"];
          }
          obj977.methods["tag"] = reader_kitty_tag_1189;
          obj977.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1189 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj977.methods["tag:="] = writer_kitty_tag_1189;
          lineNumber = 332;
          moduleName = "kitty";
          lineNumber = 330
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["background"] = undefined;
          var reader_kitty_background_1190 = function() {
            return this.data["background"];
          }
          obj977.methods["background"] = reader_kitty_background_1190;
          obj977.data["background"] = undefined;
          var writer_kitty_background_1190 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj977.methods["background:="] = writer_kitty_background_1190;
          reader_kitty_background_1190.confidential = true;
          writer_kitty_background_1190.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 333
          var string1191 = new GraceString("black");
          obj977.data["backgroundColour"] = string1191;
          var reader_kitty_backgroundColour_1192 = function() {
            return this.data["backgroundColour"];
          }
          obj977.methods["backgroundColour"] = reader_kitty_backgroundColour_1192;
          obj977.data["backgroundColour"] = string1191;
          var writer_kitty_backgroundColour_1192 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj977.methods["backgroundColour:="] = writer_kitty_backgroundColour_1192;
          reader_kitty_backgroundColour_1192.confidential = true;
          writer_kitty_backgroundColour_1192.confidential = true;
          lineNumber = 335;
          moduleName = "kitty";
          lineNumber = 333
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1191)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["document"] = undefined;
          var reader_kitty_document_1193 = function() {
            return this.data["document"];
          }
          obj977.methods["document"] = reader_kitty_document_1193;
          obj977.data["document"] = undefined;
          var writer_kitty_document_1193 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj977.methods["document:="] = writer_kitty_document_1193;
          reader_kitty_document_1193.confidential = true;
          writer_kitty_document_1193.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1194 = function() {
            return this.data["backingCanvas"];
          }
          obj977.methods["backingCanvas"] = reader_kitty_backingCanvas_1194;
          obj977.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1194 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj977.methods["backingCanvas:="] = writer_kitty_backingCanvas_1194;
          reader_kitty_backingCanvas_1194.confidential = true;
          writer_kitty_backingCanvas_1194.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1195 = function() {
            return this.data["backingContext"];
          }
          obj977.methods["backingContext"] = reader_kitty_backingContext_1195;
          obj977.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1195 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj977.methods["backingContext:="] = writer_kitty_backingContext_1195;
          reader_kitty_backingContext_1195.confidential = true;
          writer_kitty_backingContext_1195.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["canvas"] = undefined;
          var reader_kitty_canvas_1196 = function() {
            return this.data["canvas"];
          }
          obj977.methods["canvas"] = reader_kitty_canvas_1196;
          obj977.data["canvas"] = undefined;
          var writer_kitty_canvas_1196 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj977.methods["canvas:="] = writer_kitty_canvas_1196;
          reader_kitty_canvas_1196.confidential = true;
          writer_kitty_canvas_1196.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1197 = function() {
            return this.data["canvasWidth"];
          }
          obj977.methods["canvasWidth"] = reader_kitty_canvasWidth_1197;
          obj977.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1197 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj977.methods["canvasWidth:="] = writer_kitty_canvasWidth_1197;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1198 = function() {
            return this.data["canvasHeight"];
          }
          obj977.methods["canvasHeight"] = reader_kitty_canvasHeight_1198;
          obj977.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1198 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj977.methods["canvasHeight:="] = writer_kitty_canvasHeight_1198;
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 344
          var call1199 = callmethod(var_collections,"list", [0]);
          var call1200 = callmethod(call1199,"new", [0]);
          obj977.data["entities"] = call1200;
          var reader_kitty_entities_1201 = function() {
            return this.data["entities"];
          }
          obj977.methods["entities"] = reader_kitty_entities_1201;
          obj977.data["entities"] = call1200;
          var writer_kitty_entities_1201 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj977.methods["entities:="] = writer_kitty_entities_1201;
          reader_kitty_entities_1201.confidential = true;
          writer_kitty_entities_1201.confidential = true;
          lineNumber = 346;
          moduleName = "kitty";
          lineNumber = 344
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1200)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 346
          var bool1202 = new GraceBoolean(false)
          obj977.data["isInit"] = bool1202;
          var reader_kitty_isInit_1203 = function() {
            return this.data["isInit"];
          }
          obj977.methods["isInit"] = reader_kitty_isInit_1203;
          obj977.data["isInit"] = bool1202;
          var writer_kitty_isInit_1203 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj977.methods["isInit:="] = writer_kitty_isInit_1203;
          reader_kitty_isInit_1203.confidential = true;
          writer_kitty_isInit_1203.confidential = true;
          lineNumber = 347;
          moduleName = "kitty";
          lineNumber = 346
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1202)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 347
          var bool1204 = new GraceBoolean(false)
          obj977.data["isRunning"] = bool1204;
          var reader_kitty_isRunning_1205 = function() {
            return this.data["isRunning"];
          }
          obj977.methods["isRunning"] = reader_kitty_isRunning_1205;
          obj977.data["isRunning"] = bool1204;
          var writer_kitty_isRunning_1205 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj977.methods["isRunning:="] = writer_kitty_isRunning_1205;
          reader_kitty_isRunning_1205.confidential = true;
          writer_kitty_isRunning_1205.confidential = true;
          lineNumber = 349;
          moduleName = "kitty";
          lineNumber = 347
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1204)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["mctx"] = undefined;
          var reader_kitty_mctx_1206 = function() {
            return this.data["mctx"];
          }
          obj977.methods["mctx"] = reader_kitty_mctx_1206;
          obj977.data["mctx"] = undefined;
          var writer_kitty_mctx_1206 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj977.methods["mctx:="] = writer_kitty_mctx_1206;
          reader_kitty_mctx_1206.confidential = true;
          writer_kitty_mctx_1206.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          obj977.data["ent"] = undefined;
          var reader_kitty_ent_1207 = function() {
            return this.data["ent"];
          }
          obj977.methods["ent"] = reader_kitty_ent_1207;
          obj977.data["ent"] = undefined;
          var writer_kitty_ent_1207 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj977.methods["ent:="] = writer_kitty_ent_1207;
          reader_kitty_ent_1207.confidential = true;
          writer_kitty_ent_1207.confidential = true;
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 354
          var block1208 = Grace_allocObject();
          block1208.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1208.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1208.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1208.methods["match"] = GraceBlock_match;
          block1208.methods["prefix?"] = GraceBlock_lift;
          block1208.receiver = this;
          block1208.className = 'block<kitty:354>';
          block1208.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj977.data["updateAction"] = block1208;
          var reader_kitty_updateAction_1209 = function() {
            return this.data["updateAction"];
          }
          obj977.methods["updateAction"] = reader_kitty_updateAction_1209;
          obj977.data["updateAction"] = block1208;
          var writer_kitty_updateAction_1209 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj977.methods["updateAction:="] = writer_kitty_updateAction_1209;
          reader_kitty_updateAction_1209.confidential = true;
          writer_kitty_updateAction_1209.confidential = true;
          lineNumber = 354;
          moduleName = "kitty";
          lineNumber = 353
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1208)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 356
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
          block1210.className = 'block<kitty:356>';
          block1210.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj977.data["destroyAction"] = block1210;
          var reader_kitty_destroyAction_1211 = function() {
            return this.data["destroyAction"];
          }
          obj977.methods["destroyAction"] = reader_kitty_destroyAction_1211;
          obj977.data["destroyAction"] = block1210;
          var writer_kitty_destroyAction_1211 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj977.methods["destroyAction:="] = writer_kitty_destroyAction_1211;
          reader_kitty_destroyAction_1211.confidential = true;
          writer_kitty_destroyAction_1211.confidential = true;
          lineNumber = 356;
          moduleName = "kitty";
          lineNumber = 354
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1210)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj977.mutable = true;
          sourceObject = obj977;
          lineNumber = 356
          onSelf = true;
          var call1212 = callmethod(this, "init", [0]);
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          sourceObject = obj977;
          superDepth = origSuperDepth;
        }
        obj_init_977.apply(obj977, []);
        return obj977
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func976.paramCounts = [
      3,
    ];
    func976.variableArities = [
      false,
    ];
    obj974.methods["new"] = func976;
    func976.definitionLine = 325;
    func976.definitionModule = "kitty";
    var func1213 = function(argcv) {
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
        var obj1214 = Grace_allocObject();
        obj1214.definitionModule = "kitty";
        obj1214.definitionLine = 325;
        var inho1214 = inheritingObject;
        while (inho1214.superobj) inho1214 = inho1214.superobj;
        inho1214.superobj = obj1214;
        obj1214.data = inheritingObject.data;
        obj1214.outer = this;
        var reader_kitty_outer_1215 = function() {
          return this.outer;
        }
        obj1214.methods["outer"] = reader_kitty_outer_1215;
        function obj_init_1214() {
          var origSuperDepth = superDepth;
          superDepth = obj1214;
          obj1214.annotations = [];
          var func1216 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 367
              var if1217 = var_done;
              lineNumber = 363
              onSelf = true;
              var call1218 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1218)) {
                lineNumber = 365
                lineNumber = 364
                var bool1219 = new GraceBoolean(false)
                return bool1219
              }
              lineNumber = 368
              lineNumber = 344
              lineNumber = 367
              var call1220 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1221 = callmethod(this, "document:=", [1], call1220);
              lineNumber = 368
              lineNumber = 367
              lineNumber = 368
              var string1222 = new GraceString("standard-canvas");
              onSelf = true;
              var call1223 = callmethod(this, "document", [0]);
              var call1224 = callmethod(call1223,"getElementById", [1], string1222);
              onSelf = true;
              var call1225 = callmethod(this, "canvas:=", [1], call1224);
              lineNumber = 370
              lineNumber = 367
              lineNumber = 369
              onSelf = true;
              var call1226 = callmethod(this, "canvas", [0]);
              var call1227 = callmethod(call1226,"width", [0]);
              onSelf = true;
              var call1228 = callmethod(this, "canvasWidth:=", [1], call1227);
              lineNumber = 373
              lineNumber = 369
              lineNumber = 370
              onSelf = true;
              var call1229 = callmethod(this, "canvas", [0]);
              var call1230 = callmethod(call1229,"height", [0]);
              onSelf = true;
              var call1231 = callmethod(this, "canvasHeight:=", [1], call1230);
              lineNumber = 379
              var block1232 = Grace_allocObject();
              block1232.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1232.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1232.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1232.methods["match"] = GraceBlock_match;
              block1232.methods["prefix?"] = GraceBlock_lift;
              block1232.receiver = this;
              block1232.className = 'block<kitty:379>';
              block1232.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 375
                lineNumber = 374
                var bool1233 = new GraceBoolean(true)
                var_mouseDown = bool1233;
                lineNumber = 375
                onSelf = true;
                var call1234 = callmethod(this, "entities", [0]);
                lineNumber = 378
                var block1235 = Grace_allocObject();
                block1235.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1235.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1235.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1235.methods["match"] = GraceBlock_match;
                block1235.methods["prefix?"] = GraceBlock_lift;
                block1235.receiver = this;
                block1235.className = 'block<kitty:378>';
                block1235.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 376
                  var call1236 = callmethod(var_entity,"mouseDown", [0]);
                  return call1236;
                };
                var call1237 = callmethod(Grace_prelude,"for()do", [1, 1], call1234, block1235);
                return call1237;
              };
              var_mouseDownListener = block1232;
              lineNumber = 379
              var string1238 = new GraceString("mousedown");
              onSelf = true;
              var call1239 = callmethod(this, "canvas", [0]);
              var call1240 = callmethod(call1239,"addEventListener", [2], string1238, var_mouseDownListener);
              lineNumber = 387
              var block1241 = Grace_allocObject();
              block1241.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1241.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1241.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1241.methods["match"] = GraceBlock_match;
              block1241.methods["prefix?"] = GraceBlock_lift;
              block1241.receiver = this;
              block1241.className = 'block<kitty:387>';
              block1241.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 383
                lineNumber = 382
                var bool1242 = new GraceBoolean(false)
                var_mouseDown = bool1242;
                lineNumber = 383
                onSelf = true;
                var call1243 = callmethod(this, "entities", [0]);
                lineNumber = 386
                var block1244 = Grace_allocObject();
                block1244.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1244.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1244.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1244.methods["match"] = GraceBlock_match;
                block1244.methods["prefix?"] = GraceBlock_lift;
                block1244.receiver = this;
                block1244.className = 'block<kitty:386>';
                block1244.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 384
                  var call1245 = callmethod(var_entity,"mouseUp", [0]);
                  return call1245;
                };
                var call1246 = callmethod(Grace_prelude,"for()do", [1, 1], call1243, block1244);
                return call1246;
              };
              var_mouseUpListener = block1241;
              lineNumber = 387
              var string1247 = new GraceString("mouseup");
              onSelf = true;
              var call1248 = callmethod(this, "canvas", [0]);
              var call1249 = callmethod(call1248,"addEventListener", [2], string1247, var_mouseUpListener);
              lineNumber = 400
              var block1250 = Grace_allocObject();
              block1250.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1250.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1250.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1250.methods["match"] = GraceBlock_match;
              block1250.methods["prefix?"] = GraceBlock_lift;
              block1250.receiver = this;
              block1250.className = 'block<kitty:400>';
              block1250.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 391
                lineNumber = 390
                onSelf = true;
                var call1251 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1253 = callmethod(this, "canvas", [0]);
                var call1254 = callmethod(call1253,"offsetWidth", [0]);
                onSelf = true;
                var call1256 = callmethod(this, "canvas", [0]);
                var call1257 = callmethod(call1256,"offsetLeft", [0]);
                var call1259 = callmethod(var_ev,"clientX", [0]);
                var diff1261 = callmethod(call1259, "-", [1], call1257);
                var quotient1263 = callmethod(diff1261, "/", [1], call1254);
                var prod1265 = callmethod(quotient1263, "*", [1], call1251);
                var var_x = prod1265;
                lineNumber = 391;
                moduleName = "kitty";
                lineNumber = 390
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 392
                lineNumber = 391
                onSelf = true;
                var call1266 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1268 = callmethod(this, "canvas", [0]);
                var call1269 = callmethod(call1268,"offsetHeight", [0]);
                onSelf = true;
                var call1271 = callmethod(this, "canvas", [0]);
                var call1272 = callmethod(call1271,"offsetTop", [0]);
                var call1274 = callmethod(var_ev,"clientY", [0]);
                var diff1276 = callmethod(call1274, "-", [1], call1272);
                var quotient1278 = callmethod(diff1276, "/", [1], call1269);
                var prod1280 = callmethod(quotient1278, "*", [1], call1266);
                var var_y = prod1280;
                lineNumber = 392;
                moduleName = "kitty";
                lineNumber = 391
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 392
                lineNumber = 391
                lineNumber = 392
                var call1281 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1282 = callmethod(var_mouse,"position:=", [1], call1281);
                lineNumber = 395
                onSelf = true;
                var call1283 = callmethod(this, "entities", [0]);
                lineNumber = 399
                var block1284 = Grace_allocObject();
                block1284.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1284.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1284.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1284.methods["match"] = GraceBlock_match;
                block1284.methods["prefix?"] = GraceBlock_lift;
                block1284.receiver = this;
                block1284.className = 'block<kitty:399>';
                block1284.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 396
                  var call1285 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 397
                  var call1286 = callmethod(var_entity,"mouseExit", [0]);
                  return call1286;
                };
                var call1287 = callmethod(Grace_prelude,"for()do", [1, 1], call1283, block1284);
                return call1287;
              };
              var_mouseMoveListener = block1250;
              lineNumber = 400
              var string1288 = new GraceString("mousemove");
              onSelf = true;
              var call1289 = callmethod(this, "canvas", [0]);
              var call1290 = callmethod(call1289,"addEventListener", [2], string1288, var_mouseMoveListener);
              lineNumber = 410
              var block1291 = Grace_allocObject();
              block1291.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1291.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1291.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1291.methods["match"] = GraceBlock_match;
              block1291.methods["prefix?"] = GraceBlock_lift;
              block1291.receiver = this;
              block1291.className = 'block<kitty:410>';
              block1291.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 408
                var if1292 = var_done;
                lineNumber = 405
                var call1294 = callmethod(var_ev,"keyCode", [0]);
                var opresult1296 = callmethod(call1294, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1296)) {
                  lineNumber = 406
                  onSelf = true;
                  var call1297 = callmethod(this, "stop", [0]);
                  if1292 = call1297;
                }
                lineNumber = 409
                lineNumber = 408
                var call1298 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1298;
                return call1298;
              };
              var_keyDownListener = block1291;
              lineNumber = 410
              var string1299 = new GraceString("keydown");
              onSelf = true;
              var call1300 = callmethod(this, "document", [0]);
              var call1301 = callmethod(call1300,"addEventListener", [2], string1299, var_keyDownListener);
              lineNumber = 416
              var block1302 = Grace_allocObject();
              block1302.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1302.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1302.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1302.methods["match"] = GraceBlock_match;
              block1302.methods["prefix?"] = GraceBlock_lift;
              block1302.receiver = this;
              block1302.className = 'block<kitty:416>';
              block1302.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 415
                lineNumber = 414
                var call1303 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1303;
                return call1303;
              };
              var_keyUpListener = block1302;
              lineNumber = 416
              var string1304 = new GraceString("keyup");
              onSelf = true;
              var call1305 = callmethod(this, "document", [0]);
              var call1306 = callmethod(call1305,"addEventListener", [2], string1304, var_keyUpListener);
              lineNumber = 418
              lineNumber = 408
              lineNumber = 418
              var string1307 = new GraceString("canvas");
              var call1308 = callmethod(var_dom,"document", [0]);
              var call1309 = callmethod(call1308,"createElement", [1], string1307);
              onSelf = true;
              var call1310 = callmethod(this, "backingCanvas:=", [1], call1309);
              lineNumber = 420
              lineNumber = 418
              lineNumber = 419
              onSelf = true;
              var call1311 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1312 = callmethod(this, "backingCanvas", [0]);
              var call1313 = callmethod(call1312,"height:=", [1], call1311);
              lineNumber = 421
              lineNumber = 418
              lineNumber = 420
              onSelf = true;
              var call1314 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1315 = callmethod(this, "backingCanvas", [0]);
              var call1316 = callmethod(call1315,"width:=", [1], call1314);
              lineNumber = 421
              lineNumber = 418
              lineNumber = 421
              var string1317 = new GraceString("2d");
              onSelf = true;
              var call1318 = callmethod(this, "backingCanvas", [0]);
              var call1319 = callmethod(call1318,"getContext", [1], string1317);
              onSelf = true;
              var call1320 = callmethod(this, "backingContext:=", [1], call1319);
              lineNumber = 422
              lineNumber = 418
              lineNumber = 422
              var string1321 = new GraceString("2d");
              onSelf = true;
              var call1322 = callmethod(this, "canvas", [0]);
              var call1323 = callmethod(call1322,"getContext", [1], string1321);
              onSelf = true;
              var call1324 = callmethod(this, "mctx:=", [1], call1323);
              lineNumber = 425
              var string1325 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1326 = callmethod(this, "setBackground", [1], string1325);
              lineNumber = 428
              var call1327 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1328 = callmethod(call1327, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1329 = callmethod(call1328, "setWorld", [1], this);
              lineNumber = 431
              lineNumber = 430
              var_kitten = this;
              lineNumber = 432
              lineNumber = 428
              lineNumber = 431
              var bool1330 = new GraceBoolean(true)
              onSelf = true;
              var call1331 = callmethod(this, "isInit:=", [1], bool1330);
              return call1331
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1216.paramCounts = [
            0,
          ];
          func1216.variableArities = [
            false,
          ];
          obj1214.methods["init"] = func1216;
          func1216.definitionLine = 359;
          func1216.definitionModule = "kitty";
          var func1332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1332.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 438
              lineNumber = 428
              lineNumber = 437
              var bool1333 = new GraceBoolean(true)
              onSelf = true;
              var call1334 = callmethod(this, "isRunning:=", [1], bool1333);
              lineNumber = 438
              var block1335 = Grace_allocObject();
              block1335.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1335.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1335.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1335.methods["match"] = GraceBlock_match;
              block1335.methods["prefix?"] = GraceBlock_lift;
              block1335.receiver = this;
              block1335.className = 'block<kitty:438>';
              block1335.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1336 = callmethod(this, "isRunning", [0]);
                return call1336;
              };
              lineNumber = 442
              var block1337 = Grace_allocObject();
              block1337.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1337.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1337.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1337.methods["match"] = GraceBlock_match;
              block1337.methods["prefix?"] = GraceBlock_lift;
              block1337.receiver = this;
              block1337.className = 'block<kitty:442>';
              block1337.real = function(
              ) {
                sourceObject = this;
                lineNumber = 439
                onSelf = true;
                var call1338 = callmethod(this, "tick", [0]);
                return call1338;
              };
              lineNumber = 438
              var call1339 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1335, new GraceNum(10), block1337);
              return call1339
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1332.paramCounts = [
            0,
          ];
          func1332.variableArities = [
            false,
          ];
          obj1214.methods["start"] = func1332;
          func1332.definitionLine = 435;
          func1332.definitionModule = "kitty";
          var func1340 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 451
              lineNumber = 428
              lineNumber = 450
              onSelf = true;
              var call1341 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1342 = callmethod(this, "mctx", [0]);
              var call1343 = callmethod(call1342,"fillStyle:=", [1], call1341);
              lineNumber = 451
              onSelf = true;
              var call1344 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1345 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1346 = callmethod(this, "mctx", [0]);
              var call1347 = callmethod(call1346,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1344, call1345);
              lineNumber = 452
              onSelf = true;
              var call1348 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1349 = callmethod(this, "mctx", [0]);
              var call1350 = callmethod(call1349,"drawImage", [3], call1348, new GraceNum(0), new GraceNum(0));
              lineNumber = 453
              onSelf = true;
              var call1351 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1353 = callmethod(this, "canvasWidth", [0]);
              var quotient1355 = callmethod(call1353, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1357 = callmethod(this, "canvasHeight", [0]);
              var quotient1359 = callmethod(call1357, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1360 = callmethod(this, "background", [0]);
              var call1361 = callmethod(call1360,"draw", [4], call1351, quotient1355, quotient1359, new GraceNum(0));
              lineNumber = 456
              onSelf = true;
              var call1362 = callmethod(this, "updateAction", [0]);
              var call1363 = callmethod(call1362,"apply", [0]);
              lineNumber = 459
              onSelf = true;
              var call1364 = callmethod(this, "entities", [0]);
              lineNumber = 466
              var block1365 = Grace_allocObject();
              block1365.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1365.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1365.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1365.methods["match"] = GraceBlock_match;
              block1365.methods["prefix?"] = GraceBlock_lift;
              block1365.receiver = this;
              block1365.className = 'block<kitty:466>';
              block1365.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 460
                var call1366 = callmethod(var_entity,"tick", [0]);
                lineNumber = 462
                onSelf = true;
                var call1367 = callmethod(this, "mctx", [0]);
                var call1368 = callmethod(var_entity,"draw", [3], call1367, new GraceNum(0), new GraceNum(0));
                return call1368;
              };
              var call1369 = callmethod(Grace_prelude,"for()do", [1, 1], call1364, block1365);
              return call1369
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1340.paramCounts = [
            0,
          ];
          func1340.variableArities = [
            false,
          ];
          obj1214.methods["tick"] = func1340;
          func1340.definitionLine = 445;
          func1340.definitionModule = "kitty";
          var func1370 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 469
              var string1371 = new GraceString("WORLD STOPPING...");
              var call1372 = Grace_print(string1371);
              lineNumber = 471
              lineNumber = 460
              lineNumber = 470
              var bool1373 = new GraceBoolean(false)
              onSelf = true;
              var call1374 = callmethod(this, "isRunning:=", [1], bool1373);
              lineNumber = 471
              onSelf = true;
              var call1375 = callmethod(this, "destroyAction", [0]);
              var call1376 = callmethod(call1375,"apply", [0]);
              lineNumber = 472
              onSelf = true;
              var call1377 = callmethod(this, "entities", [0]);
              lineNumber = 475
              var block1378 = Grace_allocObject();
              block1378.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1378.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1378.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1378.methods["match"] = GraceBlock_match;
              block1378.methods["prefix?"] = GraceBlock_lift;
              block1378.receiver = this;
              block1378.className = 'block<kitty:475>';
              block1378.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 473
                var call1379 = callmethod(var_entity,"kill", [0]);
                return call1379;
              };
              var call1380 = callmethod(Grace_prelude,"for()do", [1, 1], call1377, block1378);
              lineNumber = 475
              var string1381 = new GraceString("mousedown");
              onSelf = true;
              var call1382 = callmethod(this, "canvas", [0]);
              var call1383 = callmethod(call1382,"removeEventListener", [2], string1381, var_mouseDownListener);
              lineNumber = 476
              var string1384 = new GraceString("mouseup");
              onSelf = true;
              var call1385 = callmethod(this, "canvas", [0]);
              var call1386 = callmethod(call1385,"removeEventListener", [2], string1384, var_mouseUpListener);
              lineNumber = 477
              var string1387 = new GraceString("mousemove");
              onSelf = true;
              var call1388 = callmethod(this, "canvas", [0]);
              var call1389 = callmethod(call1388,"removeEventListener", [2], string1387, var_mouseMoveListener);
              lineNumber = 478
              var string1390 = new GraceString("keydown");
              onSelf = true;
              var call1391 = callmethod(this, "document", [0]);
              var call1392 = callmethod(call1391,"removeEventListener", [2], string1390, var_keyDownListener);
              lineNumber = 479
              var string1393 = new GraceString("keyup");
              onSelf = true;
              var call1394 = callmethod(this, "document", [0]);
              var call1395 = callmethod(call1394,"removeEventListener", [2], string1393, var_keyUpListener);
              return call1395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1370.paramCounts = [
            0,
          ];
          func1370.variableArities = [
            false,
          ];
          obj1214.methods["stop"] = func1370;
          func1370.definitionLine = 468;
          func1370.definitionModule = "kitty";
          var func1396 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 483
              lineNumber = 473
              lineNumber = 483
              onSelf = true;
              var call1397 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1398 = callmethod(this, "canvasHeight", [0]);
              var call1399 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1400 = callmethod(call1399, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1401 = callmethod(call1400, "Image()width()height", [1, 1, 1], var_url, call1397, call1398);
              onSelf = true;
              var call1402 = callmethod(this, "background:=", [1], call1401);
              return call1402
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1396.paramCounts = [
            1,
          ];
          func1396.variableArities = [
            false,
          ];
          obj1214.methods["setBackground"] = func1396;
          func1396.definitionLine = 482;
          func1396.definitionModule = "kitty";
          var func1403 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1403.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 487
              onSelf = true;
              var call1404 = callmethod(this, "entities", [0]);
              var call1405 = callmethod(call1404,"push", [1], var_e);
              return call1405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1403.paramCounts = [
            1,
          ];
          func1403.variableArities = [
            false,
          ];
          obj1214.methods["addEntity"] = func1403;
          func1403.definitionLine = 486;
          func1403.definitionModule = "kitty";
          var func1406 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 492
              lineNumber = 491
              onSelf = true;
              var call1407 = callmethod(this, "mctx", [0]);
              return call1407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1406.paramCounts = [
            0,
          ];
          func1406.variableArities = [
            false,
          ];
          obj1214.methods["getContext"] = func1406;
          func1406.definitionLine = 490;
          func1406.definitionModule = "kitty";
          var func1408 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 496
              lineNumber = 495
              onSelf = true;
              var call1409 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1411 = callmethod(this, "canvasWidth", [0]);
              var quotient1413 = callmethod(call1411, "/", [1], call1409);
              return quotient1413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1408.paramCounts = [
            0,
          ];
          func1408.variableArities = [
            false,
          ];
          obj1214.methods["moveWidthMultipler"] = func1408;
          func1408.definitionLine = 494;
          func1408.definitionModule = "kitty";
          var func1414 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 500
              lineNumber = 499
              onSelf = true;
              var call1415 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1417 = callmethod(this, "canvasHeight", [0]);
              var quotient1419 = callmethod(call1417, "/", [1], call1415);
              return quotient1419
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1414.paramCounts = [
            0,
          ];
          func1414.variableArities = [
            false,
          ];
          obj1214.methods["moveHeightMultipler"] = func1414;
          func1414.definitionLine = 498;
          func1414.definitionModule = "kitty";
          var func1420 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1420.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 483
              lineNumber = 503
              onSelf = true;
              var call1421 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1421
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1420.paramCounts = [
            1,
          ];
          func1420.variableArities = [
            false,
          ];
          obj1214.methods["setUpdateAction"] = func1420;
          func1420.definitionLine = 502;
          func1420.definitionModule = "kitty";
          var func1422 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1422.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 508
              lineNumber = 483
              lineNumber = 507
              onSelf = true;
              var call1423 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1423
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1422.paramCounts = [
            1,
          ];
          func1422.variableArities = [
            false,
          ];
          obj1214.methods["setDestroyAction"] = func1422;
          func1422.definitionLine = 506;
          func1422.definitionModule = "kitty";
          sourceObject = obj1214;
          lineNumber = 328
          obj1214.data["width"] = var_width__39__;
          var reader_kitty_width_1424 = function() {
            return this.data["width"];
          }
          obj1214.methods["width"] = reader_kitty_width_1424;
          obj1214.data["width"] = var_width__39__;
          var writer_kitty_width_1424 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1214.methods["width:="] = writer_kitty_width_1424;
          lineNumber = 329;
          moduleName = "kitty";
          lineNumber = 328
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 329
          obj1214.data["height"] = var_height__39__;
          var reader_kitty_height_1425 = function() {
            return this.data["height"];
          }
          obj1214.methods["height"] = reader_kitty_height_1425;
          obj1214.data["height"] = var_height__39__;
          var writer_kitty_height_1425 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1214.methods["height:="] = writer_kitty_height_1425;
          lineNumber = 330;
          moduleName = "kitty";
          lineNumber = 329
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 330
          obj1214.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1426 = function() {
            return this.data["tag"];
          }
          obj1214.methods["tag"] = reader_kitty_tag_1426;
          obj1214.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1426 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1214.methods["tag:="] = writer_kitty_tag_1426;
          lineNumber = 332;
          moduleName = "kitty";
          lineNumber = 330
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["background"] = undefined;
          var reader_kitty_background_1427 = function() {
            return this.data["background"];
          }
          obj1214.methods["background"] = reader_kitty_background_1427;
          obj1214.data["background"] = undefined;
          var writer_kitty_background_1427 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1214.methods["background:="] = writer_kitty_background_1427;
          reader_kitty_background_1427.confidential = true;
          writer_kitty_background_1427.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 333
          var string1428 = new GraceString("black");
          obj1214.data["backgroundColour"] = string1428;
          var reader_kitty_backgroundColour_1429 = function() {
            return this.data["backgroundColour"];
          }
          obj1214.methods["backgroundColour"] = reader_kitty_backgroundColour_1429;
          obj1214.data["backgroundColour"] = string1428;
          var writer_kitty_backgroundColour_1429 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1214.methods["backgroundColour:="] = writer_kitty_backgroundColour_1429;
          reader_kitty_backgroundColour_1429.confidential = true;
          writer_kitty_backgroundColour_1429.confidential = true;
          lineNumber = 335;
          moduleName = "kitty";
          lineNumber = 333
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1428)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["document"] = undefined;
          var reader_kitty_document_1430 = function() {
            return this.data["document"];
          }
          obj1214.methods["document"] = reader_kitty_document_1430;
          obj1214.data["document"] = undefined;
          var writer_kitty_document_1430 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1214.methods["document:="] = writer_kitty_document_1430;
          reader_kitty_document_1430.confidential = true;
          writer_kitty_document_1430.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1431 = function() {
            return this.data["backingCanvas"];
          }
          obj1214.methods["backingCanvas"] = reader_kitty_backingCanvas_1431;
          obj1214.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1431 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1214.methods["backingCanvas:="] = writer_kitty_backingCanvas_1431;
          reader_kitty_backingCanvas_1431.confidential = true;
          writer_kitty_backingCanvas_1431.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1432 = function() {
            return this.data["backingContext"];
          }
          obj1214.methods["backingContext"] = reader_kitty_backingContext_1432;
          obj1214.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1432 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1214.methods["backingContext:="] = writer_kitty_backingContext_1432;
          reader_kitty_backingContext_1432.confidential = true;
          writer_kitty_backingContext_1432.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["canvas"] = undefined;
          var reader_kitty_canvas_1433 = function() {
            return this.data["canvas"];
          }
          obj1214.methods["canvas"] = reader_kitty_canvas_1433;
          obj1214.data["canvas"] = undefined;
          var writer_kitty_canvas_1433 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1214.methods["canvas:="] = writer_kitty_canvas_1433;
          reader_kitty_canvas_1433.confidential = true;
          writer_kitty_canvas_1433.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1434 = function() {
            return this.data["canvasWidth"];
          }
          obj1214.methods["canvasWidth"] = reader_kitty_canvasWidth_1434;
          obj1214.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1434 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1214.methods["canvasWidth:="] = writer_kitty_canvasWidth_1434;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1435 = function() {
            return this.data["canvasHeight"];
          }
          obj1214.methods["canvasHeight"] = reader_kitty_canvasHeight_1435;
          obj1214.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1435 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1214.methods["canvasHeight:="] = writer_kitty_canvasHeight_1435;
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 344
          var call1436 = callmethod(var_collections,"list", [0]);
          var call1437 = callmethod(call1436,"new", [0]);
          obj1214.data["entities"] = call1437;
          var reader_kitty_entities_1438 = function() {
            return this.data["entities"];
          }
          obj1214.methods["entities"] = reader_kitty_entities_1438;
          obj1214.data["entities"] = call1437;
          var writer_kitty_entities_1438 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1214.methods["entities:="] = writer_kitty_entities_1438;
          reader_kitty_entities_1438.confidential = true;
          writer_kitty_entities_1438.confidential = true;
          lineNumber = 346;
          moduleName = "kitty";
          lineNumber = 344
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1437)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 346
          var bool1439 = new GraceBoolean(false)
          obj1214.data["isInit"] = bool1439;
          var reader_kitty_isInit_1440 = function() {
            return this.data["isInit"];
          }
          obj1214.methods["isInit"] = reader_kitty_isInit_1440;
          obj1214.data["isInit"] = bool1439;
          var writer_kitty_isInit_1440 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1214.methods["isInit:="] = writer_kitty_isInit_1440;
          reader_kitty_isInit_1440.confidential = true;
          writer_kitty_isInit_1440.confidential = true;
          lineNumber = 347;
          moduleName = "kitty";
          lineNumber = 346
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1439)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 347
          var bool1441 = new GraceBoolean(false)
          obj1214.data["isRunning"] = bool1441;
          var reader_kitty_isRunning_1442 = function() {
            return this.data["isRunning"];
          }
          obj1214.methods["isRunning"] = reader_kitty_isRunning_1442;
          obj1214.data["isRunning"] = bool1441;
          var writer_kitty_isRunning_1442 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1214.methods["isRunning:="] = writer_kitty_isRunning_1442;
          reader_kitty_isRunning_1442.confidential = true;
          writer_kitty_isRunning_1442.confidential = true;
          lineNumber = 349;
          moduleName = "kitty";
          lineNumber = 347
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1441)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["mctx"] = undefined;
          var reader_kitty_mctx_1443 = function() {
            return this.data["mctx"];
          }
          obj1214.methods["mctx"] = reader_kitty_mctx_1443;
          obj1214.data["mctx"] = undefined;
          var writer_kitty_mctx_1443 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1214.methods["mctx:="] = writer_kitty_mctx_1443;
          reader_kitty_mctx_1443.confidential = true;
          writer_kitty_mctx_1443.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          obj1214.data["ent"] = undefined;
          var reader_kitty_ent_1444 = function() {
            return this.data["ent"];
          }
          obj1214.methods["ent"] = reader_kitty_ent_1444;
          obj1214.data["ent"] = undefined;
          var writer_kitty_ent_1444 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1214.methods["ent:="] = writer_kitty_ent_1444;
          reader_kitty_ent_1444.confidential = true;
          writer_kitty_ent_1444.confidential = true;
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 354
          var block1445 = Grace_allocObject();
          block1445.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1445.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1445.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1445.methods["match"] = GraceBlock_match;
          block1445.methods["prefix?"] = GraceBlock_lift;
          block1445.receiver = this;
          block1445.className = 'block<kitty:354>';
          block1445.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1214.data["updateAction"] = block1445;
          var reader_kitty_updateAction_1446 = function() {
            return this.data["updateAction"];
          }
          obj1214.methods["updateAction"] = reader_kitty_updateAction_1446;
          obj1214.data["updateAction"] = block1445;
          var writer_kitty_updateAction_1446 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1214.methods["updateAction:="] = writer_kitty_updateAction_1446;
          reader_kitty_updateAction_1446.confidential = true;
          writer_kitty_updateAction_1446.confidential = true;
          lineNumber = 354;
          moduleName = "kitty";
          lineNumber = 353
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1445)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 356
          var block1447 = Grace_allocObject();
          block1447.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1447.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1447.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1447.methods["match"] = GraceBlock_match;
          block1447.methods["prefix?"] = GraceBlock_lift;
          block1447.receiver = this;
          block1447.className = 'block<kitty:356>';
          block1447.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1214.data["destroyAction"] = block1447;
          var reader_kitty_destroyAction_1448 = function() {
            return this.data["destroyAction"];
          }
          obj1214.methods["destroyAction"] = reader_kitty_destroyAction_1448;
          obj1214.data["destroyAction"] = block1447;
          var writer_kitty_destroyAction_1448 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1214.methods["destroyAction:="] = writer_kitty_destroyAction_1448;
          reader_kitty_destroyAction_1448.confidential = true;
          writer_kitty_destroyAction_1448.confidential = true;
          lineNumber = 356;
          moduleName = "kitty";
          lineNumber = 354
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1447)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1214.mutable = true;
          sourceObject = obj1214;
          lineNumber = 356
          onSelf = true;
          var call1449 = callmethod(this, "init", [0]);
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          sourceObject = obj1214;
          superDepth = origSuperDepth;
        }
        obj_init_1214.apply(inheritingObject, []);
        return obj1214
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj974.methods["new()object"] = func1213;
    var func1450 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 325
        var string1451 = new GraceString("class KittyWorld");
        return string1451
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1450.paramCounts = [
    ];
    func1450.variableArities = [
    ];
    obj974.methods["asDebugString"] = func1450;
    func1450.definitionLine = 325;
    func1450.definitionModule = "kitty";
    sourceObject = obj974;
    sourceObject = obj974;
    superDepth = origSuperDepth;
  }
  obj_init_974.apply(obj974, []);
  var var_KittyWorld = obj974;
  lineNumber = 513
  lineNumber = 522
  lineNumber = 556
  lineNumber = 571
  lineNumber = 575
  lineNumber = 580
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\n elements\n width\nconstructors-of:KittyWorld:\n new\nmethods-of:KittyEntity.new:\n draw\n getX\n mouseDownEntity:=\n mouseDownAction:=\n tag\n mouseOver:=\n mouseDownEntity\n image\n strafe\n mouseDown\n setUpdateAction\n setMouseOverAction\n setMouseEnterAction\n tag:=\n setY\n createImage\n updateAction:=\n getY\n mouseOverAction:=\n mouseEnterAction:=\n destroyAction:=\n mouseExitAction\n posY:=\n mouseUpAction:=\n setX\n mouseDragAction\n rotation:=\n destroyAction\n mouseUpAction\n kill\n setImage\n rotation\n setMouseUpAction\n mouseExit\n image:=\n mouseDownAction\n mouseOver\n mouseEnter\n awake\n posX:=\n move\n setMouseExitAction\n mouseUp\n getRotation\n setDestroyAction\n setLocation\n mouseExitAction:=\n mouseDragAction:=\n setMouseDownAction\n updateAction\n mouseOverAction\n mouseEnterAction\n posY\n turn\n posX\n tick\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n mouseDown\n mouseDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\n elements\n width\nmethods-of:KittyWorld.new:\n isInit\n mctx:=\n isRunning:=\n getContext\n width:=\n height\n canvas\n mctx\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n setDestroyAction\n canvas:=\n backgroundColour\n background:=\n updateAction:=\n entities:=\n tag\n destroyAction:=\n background\n backingCanvas:=\n init\n moveWidthMultipler\n destroyAction\n start\n height:=\n document:=\n isRunning\n ent:=\n entities\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n backingContext\n canvasHeight\n canvasWidth\n tag:=\n updateAction\n stop\n isInit:=\n tick\n backingCanvas\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconfidential:\nfresh:World()width()height:\n isInit\n mctx:=\n isRunning:=\n entities\n width:=\n height\n canvas\n mctx\n document\n width\n addEntity\n ent\n backgroundColour:=\n canvasHeight:=\n setUpdateAction\n backingContext\n canvas:=\n backgroundColour\n background:=\n updateAction:=\n entities:=\n tag\n destroyAction:=\n background\n backingCanvas:=\n setDestroyAction\n canvasHeight\n destroyAction\n start\n height:=\n document:=\n isRunning\n ent:=\n getContext\n backingContext:=\n setBackground\n moveHeightMultipler\n canvasWidth:=\n init\n moveWidthMultipler\n canvasWidth\n tag:=\n updateAction\n stop\n isInit:=\n backingCanvas\n tick\nmodules:\n StandardPrelude\n mgcollections\nconstructors-of:Point:\n x()y\nfresh:Entity()x()y:\n draw\n updateAction:=\n mouseDownEntity:=\n mouseDownAction:=\n tag\n mouseOver:=\n mouseDownEntity\n image\n strafe\n mouseDown\n setUpdateAction\n setMouseOverAction\n setMouseEnterAction\n tag:=\n setY\n createImage\n getX\n getY\n mouseOverAction:=\n mouseEnterAction:=\n destroyAction:=\n mouseExitAction\n posY:=\n mouseUpAction:=\n setX\n mouseDragAction\n rotation:=\n destroyAction\n mouseUpAction\n kill\n setImage\n rotation\n mouseExitAction:=\n mouseExit\n image:=\n mouseDownAction\n mouseOver\n mouseEnter\n awake\n updateAction\n move\n setMouseExitAction\n mouseUp\n getRotation\n setDestroyAction\n mouseEnterAction\n setMouseUpAction\n mouseDragAction:=\n tick\n posX:=\n mouseOverAction\n setLocation\n posY\n turn\n posX\n setMouseDownAction\nmethods-of:Point.x()y:\n right\n down\n up\n x\n y\n left\n";
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
    "var mouseUpListener",
    "var mouseMoveListener",
    "var currentKeyDown := -1",
    "var mouseDown := false",
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
    "    var mouseUpAction := {}",
    "    var mouseDragAction := {}",
    "    var mouseEnterAction := {}",
    "    var mouseOverAction := {}",
    "    var mouseExitAction := {}",
    "    var mouseOver := false",
    "    var mouseDownEntity := false",
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
    "        if (mouseOver) then {",
    "            mouseOverAction.apply",
    "        }",
    "        // if (mouseOver && mouseDown) then {",
    "        //     mouseDragAction.apply",
    "        // }",
    "    }",
    "",
    "    method kill {",
    "        destroyAction.apply",
    "    }",
    "",
    "    // ===== MOUSE ACTIONS ===== //",
    "    method mouseDown {",
    "        if (mouseOver) then {",
    "            mouseDownAction.apply",
    "            mouseDownEntity := true",
    "        }",
    "    }",
    "",
    "    method mouseUp {",
    "        if (mouseDownEntity) then {",
    "            mouseUpAction.apply",
    "            mouseDownEntity := false",
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
    "    method setMouseUpAction(action') {",
    "        mouseUpAction := action'",
    "    }",
    "",
    "    method setMouseEnterAction(action') {",
    "        mouseEnterAction := action'",
    "    }",
    "",
    "    method setMouseOverAction(action') {",
    "        mouseOverAction := action'",
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
    "method onMouseUp(action') {",
    "    kitten.setMouseUpAction(action')",
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
    "method onMouseOver(action') {",
    "    kitten.setMouseOverAction(action')",
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
    "            mouseDown := true",
    "            for (entities) do { entity->",
    "                entity.mouseDown",
    "            }",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "",
    "        mouseUpListener := { ev ->",
    "            mouseDown := false",
    "            for (entities) do { entity->",
    "                entity.mouseUp",
    "            }",
    "        }",
    "        canvas.addEventListener(\"mouseup\", mouseUpListener)",
    "",
    "        mouseMoveListener := { ev ->",
    "            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "            mouse.position := Point.x(x)y(y)",
    "",
    "            // Mouse actions",
    "            for (entities) do { entity ->",
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
    "        canvas.removeEventListener(\"mouseup\", mouseUpListener)",
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
