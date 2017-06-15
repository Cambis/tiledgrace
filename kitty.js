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
  lineNumber = 276
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
      lineNumber = 277
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 277;
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
        lineNumber = 278
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
  func8.definitionLine = 276;
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
      obj13.definitionLine = 277;
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
  lineNumber = 288
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
      lineNumber = 289
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
  func16.definitionLine = 288;
  func16.definitionModule = "kitty";
  lineNumber = 293
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
      lineNumber = 294
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
  func18.definitionLine = 293;
  func18.definitionModule = "kitty";
  lineNumber = 297
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
      lineNumber = 299
      lineNumber = 298
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
  func20.definitionLine = 297;
  func20.definitionModule = "kitty";
  lineNumber = 302
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
      lineNumber = 303
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
  func24.definitionLine = 302;
  func24.definitionModule = "kitty";
  lineNumber = 306
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
      lineNumber = 307
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
  func26.definitionLine = 306;
  func26.definitionModule = "kitty";
  lineNumber = 310
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
      lineNumber = 311
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
  func28.definitionLine = 310;
  func28.definitionModule = "kitty";
  lineNumber = 314
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
      lineNumber = 315
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
  func30.definitionLine = 314;
  func30.definitionModule = "kitty";
  lineNumber = 318
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
      lineNumber = 319
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
  func32.definitionLine = 318;
  func32.definitionModule = "kitty";
  lineNumber = 322
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
      lineNumber = 323
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
  func34.definitionLine = 322;
  func34.definitionModule = "kitty";
  lineNumber = 517
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
      lineNumber = 518
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 518;
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
        lineNumber = 519
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
  func36.definitionLine = 517;
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
      obj41.definitionLine = 518;
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
  lineNumber = 526
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
      lineNumber = 531
      lineNumber = 530
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 531;
      moduleName = "kitty";
      lineNumber = 530
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 534
      lineNumber = 531
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 534;
      moduleName = "kitty";
      lineNumber = 531
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 536
      lineNumber = 534
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 536;
      moduleName = "kitty";
      lineNumber = 534
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 538
      lineNumber = 536
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 538;
      moduleName = "kitty";
      lineNumber = 536
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 538
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 554
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
      block53.className = 'block<kitty:554>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 541
        lineNumber = 540
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 541;
        moduleName = "kitty";
        lineNumber = 540
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 542
        lineNumber = 541
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 542;
        moduleName = "kitty";
        lineNumber = 541
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 543
        lineNumber = 542
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 543;
        moduleName = "kitty";
        lineNumber = 542
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 547
        lineNumber = 543
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 547;
        moduleName = "kitty";
        lineNumber = 543
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 548
        lineNumber = 547
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
        lineNumber = 548;
        moduleName = "kitty";
        lineNumber = 547
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 551
        var if95 = var_done;
        lineNumber = 548
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 550
          lineNumber = 549
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 553
        lineNumber = 551
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 555
      lineNumber = 554
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
  func44.definitionLine = 526;
  func44.definitionModule = "kitty";
  lineNumber = 560
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 562
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 569
      var if101 = var_done;
      lineNumber = 564
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 565
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 567
        return var_done
      }
      lineNumber = 569
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 572
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
  func98.definitionLine = 560;
  func98.definitionModule = "kitty";
  lineNumber = 575
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 576
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
  func108.definitionLine = 575;
  func108.definitionModule = "kitty";
  lineNumber = 579
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
      lineNumber = 581
      lineNumber = 580
      var_m__95__world = var_world__39__;
      lineNumber = 582
      lineNumber = 581
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
  func110.definitionLine = 579;
  func110.definitionModule = "kitty";
  lineNumber = 584
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
      lineNumber = 585
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
  func112.definitionLine = 584;
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
  lineNumber = 576
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
  func115.definitionLine = 576;
  func115.definitionModule = "kitty";
  lineNumber = 576
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
  func116.definitionLine = 576;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 576
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
  func118.definitionLine = 576;
  func118.definitionModule = "kitty";
  lineNumber = 576
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
  func119.definitionLine = 576;
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
  lineNumber = 576
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
  func120.definitionLine = 576;
  func120.definitionModule = "kitty";
  lineNumber = 576
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
  func121.definitionLine = 576;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 576
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
  func122.definitionLine = 576;
  func122.definitionModule = "kitty";
  lineNumber = 576
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
  func123.definitionLine = 576;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 576
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
  func124.definitionLine = 576;
  func124.definitionModule = "kitty";
  lineNumber = 576
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
  func125.definitionLine = 576;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 576
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
  func126.definitionLine = 576;
  func126.definitionModule = "kitty";
  lineNumber = 576
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
  func127.definitionLine = 576;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 576
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
  func128.definitionLine = 576;
  func128.definitionModule = "kitty";
  lineNumber = 576
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
  func129.definitionLine = 576;
  func129.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 576
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
  func131.definitionLine = 576;
  func131.definitionModule = "kitty";
  lineNumber = 576
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
  func132.definitionLine = 576;
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
  lineNumber = 576
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
  func134.definitionLine = 576;
  func134.definitionModule = "kitty";
  lineNumber = 576
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
  func135.definitionLine = 576;
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
              lineNumber = 130
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
              lineNumber = 133
              var if345 = var_done;
              lineNumber = 130
              onSelf = true;
              var call346 = callmethod(this, "mouseDownEntity", [0]);
              onSelf = true;
              var call348 = callmethod(this, "mouseOver", [0]);
              var opresult350 = callmethod(call348, "&&", [1], call346);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 131
                onSelf = true;
                var call351 = callmethod(this, "mouseDragAction", [0]);
                var call352 = callmethod(call351,"apply", [0]);
                if345 = call352;
              }
              return if345
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
          var func353 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func353.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              onSelf = true;
              var call354 = callmethod(this, "destroyAction", [0]);
              var call355 = callmethod(call354,"apply", [0]);
              return call355
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func353.paramCounts = [
            0,
          ];
          func353.variableArities = [
            false,
          ];
          obj332.methods["kill"] = func353;
          func353.definitionLine = 135;
          func353.definitionModule = "kitty";
          var func356 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func356.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              var if357 = var_done;
              lineNumber = 141
              onSelf = true;
              var call358 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call358)) {
                lineNumber = 142
                onSelf = true;
                var call359 = callmethod(this, "mouseDownAction", [0]);
                var call360 = callmethod(call359,"apply", [0]);
                lineNumber = 144
                lineNumber = 142
                lineNumber = 143
                var bool361 = new GraceBoolean(true)
                onSelf = true;
                var call362 = callmethod(this, "mouseDownEntity:=", [1], bool361);
                if357 = call362;
              }
              return if357
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func356.paramCounts = [
            0,
          ];
          func356.variableArities = [
            false,
          ];
          obj332.methods["mouseDown"] = func356;
          func356.definitionLine = 140;
          func356.definitionModule = "kitty";
          var func363 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func363.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              var if364 = var_done;
              lineNumber = 148
              onSelf = true;
              var call365 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call365)) {
                lineNumber = 149
                onSelf = true;
                var call366 = callmethod(this, "mouseUpAction", [0]);
                var call367 = callmethod(call366,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool368 = new GraceBoolean(false)
                onSelf = true;
                var call369 = callmethod(this, "mouseDownEntity:=", [1], bool368);
                if364 = call369;
              }
              return if364
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func363.paramCounts = [
            0,
          ];
          func363.variableArities = [
            false,
          ];
          obj332.methods["mouseUp"] = func363;
          func363.definitionLine = 147;
          func363.definitionModule = "kitty";
          var func370 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var if371 = var_done;
              lineNumber = 155
              onSelf = true;
              var call372 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call372)) {
                lineNumber = 157
                return var_done
              }
              lineNumber = 159
              lineNumber = 158
              onSelf = true;
              var call374 = callmethod(this, "image", [0]);
              var call375 = callmethod(call374,"width", [0]);
              var quotient377 = callmethod(call375, "/", [1], new GraceNum(2));
              var var_w = quotient377;
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
              var call379 = callmethod(this, "image", [0]);
              var call380 = callmethod(call379,"height", [0]);
              var quotient382 = callmethod(call380, "/", [1], new GraceNum(2));
              var var_h = quotient382;
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
              var call384 = callmethod(this, "posX", [0]);
              var diff386 = callmethod(call384, "-", [1], var_w);
              onSelf = true;
              var call388 = callmethod(this, "posY", [0]);
              var diff390 = callmethod(call388, "-", [1], var_h);
              var call391 = callmethod(var_Point,"x()y", [1, 1], diff386, diff390);
              onSelf = true;
              var call393 = callmethod(this, "posX", [0]);
              var diff395 = callmethod(call393, "-", [1], var_w);
              onSelf = true;
              var call397 = callmethod(this, "posY", [0]);
              var opresult399 = callmethod(call397, "+", [1], var_h);
              var call400 = callmethod(var_Point,"x()y", [1, 1], diff395, opresult399);
              lineNumber = 162
              onSelf = true;
              var call402 = callmethod(this, "posX", [0]);
              var opresult404 = callmethod(call402, "+", [1], var_w);
              onSelf = true;
              var call406 = callmethod(this, "posY", [0]);
              var opresult408 = callmethod(call406, "+", [1], var_h);
              var call409 = callmethod(var_Point,"x()y", [1, 1], opresult404, opresult408);
              onSelf = true;
              var call411 = callmethod(this, "posX", [0]);
              var opresult413 = callmethod(call411, "+", [1], var_w);
              onSelf = true;
              var call415 = callmethod(this, "posY", [0]);
              var diff417 = callmethod(call415, "-", [1], var_h);
              var call418 = callmethod(var_Point,"x()y", [1, 1], opresult413, diff417);
              lineNumber = 160
              var call419 = callmethod(var_collections,"list", [0]);
              var call420 = callmethod(call419,"new", [4], call391, call400, call409, call418);
              var var_poly = call420;
              lineNumber = 160;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 168
              var if421 = var_done;
              lineNumber = 164
              var call422 = callmethod(var_mouse,"location", [0]);
              var call423 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call424 = callmethod(call423, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call425 = callmethod(call424, "pointInPolygon", [2], call422, var_poly);
              if (Grace_isTrue(call425)) {
                lineNumber = 165
                onSelf = true;
                var call426 = callmethod(this, "mouseEnterAction", [0]);
                var call427 = callmethod(call426,"apply", [0]);
                lineNumber = 167
                lineNumber = 165
                lineNumber = 166
                var bool428 = new GraceBoolean(true)
                onSelf = true;
                var call429 = callmethod(this, "mouseOver:=", [1], bool428);
                if421 = call429;
              }
              return if421
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func370.paramCounts = [
            0,
          ];
          func370.variableArities = [
            false,
          ];
          obj332.methods["mouseEnter"] = func370;
          func370.definitionLine = 154;
          func370.definitionModule = "kitty";
          var func430 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func430.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var if431 = var_done;
              lineNumber = 171
              onSelf = true;
              var call432 = callmethod(this, "mouseOver", [0]);
              var call433 = callmethod(call432,"prefix!", [0]);
              if (Grace_isTrue(call433)) {
                lineNumber = 173
                return var_done
              }
              lineNumber = 175
              lineNumber = 174
              onSelf = true;
              var call435 = callmethod(this, "image", [0]);
              var call436 = callmethod(call435,"width", [0]);
              var quotient438 = callmethod(call436, "/", [1], new GraceNum(2));
              var var_w = quotient438;
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
              var call440 = callmethod(this, "image", [0]);
              var call441 = callmethod(call440,"height", [0]);
              var quotient443 = callmethod(call441, "/", [1], new GraceNum(2));
              var var_h = quotient443;
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
              var call445 = callmethod(this, "posX", [0]);
              var diff447 = callmethod(call445, "-", [1], var_w);
              onSelf = true;
              var call449 = callmethod(this, "posY", [0]);
              var diff451 = callmethod(call449, "-", [1], var_h);
              var call452 = callmethod(var_Point,"x()y", [1, 1], diff447, diff451);
              onSelf = true;
              var call454 = callmethod(this, "posX", [0]);
              var diff456 = callmethod(call454, "-", [1], var_w);
              onSelf = true;
              var call458 = callmethod(this, "posY", [0]);
              var opresult460 = callmethod(call458, "+", [1], var_h);
              var call461 = callmethod(var_Point,"x()y", [1, 1], diff456, opresult460);
              lineNumber = 178
              onSelf = true;
              var call463 = callmethod(this, "posX", [0]);
              var opresult465 = callmethod(call463, "+", [1], var_w);
              onSelf = true;
              var call467 = callmethod(this, "posY", [0]);
              var opresult469 = callmethod(call467, "+", [1], var_h);
              var call470 = callmethod(var_Point,"x()y", [1, 1], opresult465, opresult469);
              onSelf = true;
              var call472 = callmethod(this, "posX", [0]);
              var opresult474 = callmethod(call472, "+", [1], var_w);
              onSelf = true;
              var call476 = callmethod(this, "posY", [0]);
              var diff478 = callmethod(call476, "-", [1], var_h);
              var call479 = callmethod(var_Point,"x()y", [1, 1], opresult474, diff478);
              lineNumber = 176
              var call480 = callmethod(var_collections,"list", [0]);
              var call481 = callmethod(call480,"new", [4], call452, call461, call470, call479);
              var var_poly = call481;
              lineNumber = 176;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 184
              var if482 = var_done;
              lineNumber = 180
              onSelf = true;
              var call483 = callmethod(this, "mouseOver", [0]);
              var call485 = callmethod(var_mouse,"location", [0]);
              var call486 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call487 = callmethod(call486, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call488 = callmethod(call487, "pointInPolygon", [2], call485, var_poly);
              var call489 = callmethod(call488,"prefix!", [0]);
              var opresult491 = callmethod(call489, "&&", [1], call483);
              if (Grace_isTrue(opresult491)) {
                lineNumber = 181
                onSelf = true;
                var call492 = callmethod(this, "mouseExitAction", [0]);
                var call493 = callmethod(call492,"apply", [0]);
                lineNumber = 183
                lineNumber = 181
                lineNumber = 182
                var bool494 = new GraceBoolean(false)
                onSelf = true;
                var call495 = callmethod(this, "mouseOver:=", [1], bool494);
                if482 = call495;
              }
              return if482
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
          obj332.methods["mouseExit"] = func430;
          func430.definitionLine = 170;
          func430.definitionModule = "kitty";
          var func496 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func496.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              lineNumber = 181
              lineNumber = 188
              onSelf = true;
              var call499 = callmethod(this, "rotation", [0]);
              var prod501 = callmethod(call499, "*", [1], new GraceNum(3.14159));
              var quotient503 = callmethod(prod501, "/", [1], new GraceNum(180));
              var call504 = callmethod(var_math,"cos", [1], quotient503);
              var call506 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod509 = callmethod(var_distance, "*", [1], call506);
              var prod511 = callmethod(prod509, "*", [1], call504);
              onSelf = true;
              var call513 = callmethod(this, "posX", [0]);
              var opresult515 = callmethod(call513, "+", [1], prod511);
              onSelf = true;
              var call516 = callmethod(this, "posX:=", [1], opresult515);
              lineNumber = 189
              lineNumber = 188
              lineNumber = 189
              onSelf = true;
              var call519 = callmethod(this, "rotation", [0]);
              var prod521 = callmethod(call519, "*", [1], new GraceNum(3.14159));
              var quotient523 = callmethod(prod521, "/", [1], new GraceNum(180));
              var call524 = callmethod(var_math,"sin", [1], quotient523);
              var call526 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod529 = callmethod(var_distance, "*", [1], call526);
              var prod531 = callmethod(prod529, "*", [1], call524);
              onSelf = true;
              var call533 = callmethod(this, "posY", [0]);
              var opresult535 = callmethod(call533, "+", [1], prod531);
              onSelf = true;
              var call536 = callmethod(this, "posY:=", [1], opresult535);
              return call536
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func496.paramCounts = [
            1,
          ];
          func496.variableArities = [
            false,
          ];
          obj332.methods["move"] = func496;
          func496.definitionLine = 187;
          func496.definitionModule = "kitty";
          var func537 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func537.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 189
              lineNumber = 193
              onSelf = true;
              var call540 = callmethod(this, "rotation", [0]);
              var opresult543 = callmethod(new GraceNum(90), "+", [1], call540);
              var prod545 = callmethod(opresult543, "*", [1], new GraceNum(3.14159));
              var quotient547 = callmethod(prod545, "/", [1], new GraceNum(180));
              var call548 = callmethod(var_math,"cos", [1], quotient547);
              var call550 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod553 = callmethod(var_distance, "*", [1], call550);
              var prod555 = callmethod(prod553, "*", [1], call548);
              onSelf = true;
              var call557 = callmethod(this, "posX", [0]);
              var opresult559 = callmethod(call557, "+", [1], prod555);
              onSelf = true;
              var call560 = callmethod(this, "posX:=", [1], opresult559);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              onSelf = true;
              var call563 = callmethod(this, "rotation", [0]);
              var opresult566 = callmethod(new GraceNum(90), "+", [1], call563);
              var prod568 = callmethod(opresult566, "*", [1], new GraceNum(3.14159));
              var quotient570 = callmethod(prod568, "/", [1], new GraceNum(180));
              var call571 = callmethod(var_math,"sin", [1], quotient570);
              var call573 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod576 = callmethod(var_distance, "*", [1], call573);
              var prod578 = callmethod(prod576, "*", [1], call571);
              onSelf = true;
              var call580 = callmethod(this, "posY", [0]);
              var opresult582 = callmethod(call580, "+", [1], prod578);
              onSelf = true;
              var call583 = callmethod(this, "posY:=", [1], opresult582);
              return call583
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func537.paramCounts = [
            1,
          ];
          func537.variableArities = [
            false,
          ];
          obj332.methods["strafe"] = func537;
          func537.definitionLine = 192;
          func537.definitionModule = "kitty";
          var func584 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func584.paramCounts[0])
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
              var call586 = callmethod(this, "rotation", [0]);
              var opresult588 = callmethod(call586, "+", [1], var_angle);
              onSelf = true;
              var call589 = callmethod(this, "rotation:=", [1], opresult588);
              return call589
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func584.paramCounts = [
            1,
          ];
          func584.variableArities = [
            false,
          ];
          obj332.methods["turn"] = func584;
          func584.definitionLine = 197;
          func584.definitionModule = "kitty";
          var func590 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func590.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var call591 = callmethod(var_ctx,"save", [0]);
              lineNumber = 204
              onSelf = true;
              var call592 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call593 = callmethod(this, "posY", [0]);
              var call594 = callmethod(var_ctx,"translate", [2], call592, call593);
              lineNumber = 205
              onSelf = true;
              var call595 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call596 = callmethod(this, "image", [0]);
              var call597 = callmethod(call596,"draw", [4], var_ctx, var_dx, var_dy, call595);
              lineNumber = 206
              var call598 = callmethod(var_ctx,"restore", [0]);
              return call598
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func590.paramCounts = [
            3,
          ];
          func590.variableArities = [
            false,
          ];
          obj332.methods["draw"] = func590;
          func590.definitionLine = 202;
          func590.definitionModule = "kitty";
          var func599 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var call600 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call601 = callmethod(call600, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call602 = callmethod(call601, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call603 = callmethod(this, "image:=", [1], call602);
              return call603
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func599.paramCounts = [
            1,
          ];
          func599.variableArities = [
            false,
          ];
          obj332.methods["createImage"] = func599;
          func599.definitionLine = 209;
          func599.definitionModule = "kitty";
          var func604 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 214
              onSelf = true;
              var call605 = callmethod(this, "image:=", [1], var_image__39__);
              return call605
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func604.paramTypes = [];
          func604.paramTypes.push([]);
          func604.paramCounts = [
            1,
          ];
          func604.variableArities = [
            false,
          ];
          obj332.methods["setImage"] = func604;
          func604.definitionLine = 213;
          func604.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 210
              lineNumber = 219
              onSelf = true;
              var call607 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj332.methods["setUpdateAction"] = func606;
          func606.definitionLine = 218;
          func606.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 210
              lineNumber = 223
              onSelf = true;
              var call609 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj332.methods["setDestroyAction"] = func608;
          func608.definitionLine = 222;
          func608.definitionModule = "kitty";
          var func610 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func610.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 210
              lineNumber = 227
              onSelf = true;
              var call611 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseDownAction"] = func610;
          func610.definitionLine = 226;
          func610.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              lineNumber = 210
              lineNumber = 231
              onSelf = true;
              var call613 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
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
            1,
          ];
          func612.variableArities = [
            false,
          ];
          obj332.methods["setMouseUpAction"] = func612;
          func612.definitionLine = 230;
          func612.definitionModule = "kitty";
          var func614 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func614.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 210
              lineNumber = 235
              onSelf = true;
              var call615 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call615
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func614.paramCounts = [
            1,
          ];
          func614.variableArities = [
            false,
          ];
          obj332.methods["setMouseEnterAction"] = func614;
          func614.definitionLine = 234;
          func614.definitionModule = "kitty";
          var func616 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 210
              lineNumber = 239
              onSelf = true;
              var call617 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
              return call617
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func616.paramCounts = [
            1,
          ];
          func616.variableArities = [
            false,
          ];
          obj332.methods["setMouseDragAction"] = func616;
          func616.definitionLine = 238;
          func616.definitionModule = "kitty";
          var func618 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func618.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 210
              lineNumber = 243
              onSelf = true;
              var call619 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
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
            1,
          ];
          func618.variableArities = [
            false,
          ];
          obj332.methods["setMouseOverAction"] = func618;
          func618.definitionLine = 242;
          func618.definitionModule = "kitty";
          var func620 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func620.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 210
              lineNumber = 247
              onSelf = true;
              var call621 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call621
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
          obj332.methods["setMouseExitAction"] = func620;
          func620.definitionLine = 246;
          func620.definitionModule = "kitty";
          var func622 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 252
              lineNumber = 210
              lineNumber = 251
              onSelf = true;
              var call623 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 253
              lineNumber = 210
              lineNumber = 252
              onSelf = true;
              var call624 = callmethod(this, "posY:=", [1], var_y);
              return call624
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func622.paramCounts = [
            2,
          ];
          func622.variableArities = [
            false,
          ];
          obj332.methods["setLocation"] = func622;
          func622.definitionLine = 250;
          func622.definitionModule = "kitty";
          var func625 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 256
              onSelf = true;
              var call626 = callmethod(this, "posX", [0]);
              return call626
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func625.paramCounts = [
            0,
          ];
          func625.variableArities = [
            false,
          ];
          obj332.methods["getX"] = func625;
          func625.definitionLine = 255;
          func625.definitionModule = "kitty";
          var func627 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func627.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 260
              onSelf = true;
              var call628 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func627.variableArities = [
            false,
          ];
          obj332.methods["getY"] = func627;
          func627.definitionLine = 259;
          func627.definitionModule = "kitty";
          var func629 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 265
              lineNumber = 210
              lineNumber = 264
              onSelf = true;
              var call630 = callmethod(this, "posX:=", [1], var_posX__39__);
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
          obj332.methods["setX"] = func629;
          func629.definitionLine = 263;
          func629.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 210
              lineNumber = 268
              onSelf = true;
              var call632 = callmethod(this, "posY:=", [1], var_posY__39__);
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
          obj332.methods["setY"] = func631;
          func631.definitionLine = 267;
          func631.definitionModule = "kitty";
          var func633 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call634 = callmethod(this, "rotation", [0]);
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
            0,
          ];
          func633.variableArities = [
            false,
          ];
          obj332.methods["getRotation"] = func633;
          func633.definitionLine = 271;
          func633.definitionModule = "kitty";
          sourceObject = obj332;
          lineNumber = 97
          obj332.data["tag"] = var_tag__39__;
          var reader_kitty_tag_635 = function() {
            return this.data["tag"];
          }
          obj332.methods["tag"] = reader_kitty_tag_635;
          obj332.data["tag"] = var_tag__39__;
          var writer_kitty_tag_635 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj332.methods["tag:="] = writer_kitty_tag_635;
          reader_kitty_tag_635.confidential = true;
          writer_kitty_tag_635.confidential = true;
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
          var reader_kitty_posX_636 = function() {
            return this.data["posX"];
          }
          obj332.methods["posX"] = reader_kitty_posX_636;
          obj332.data["posX"] = var_x__39__;
          var writer_kitty_posX_636 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj332.methods["posX:="] = writer_kitty_posX_636;
          reader_kitty_posX_636.confidential = true;
          writer_kitty_posX_636.confidential = true;
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
          var reader_kitty_posY_637 = function() {
            return this.data["posY"];
          }
          obj332.methods["posY"] = reader_kitty_posY_637;
          obj332.data["posY"] = var_y__39__;
          var writer_kitty_posY_637 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj332.methods["posY:="] = writer_kitty_posY_637;
          reader_kitty_posY_637.confidential = true;
          writer_kitty_posY_637.confidential = true;
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
          var reader_kitty_rotation_638 = function() {
            return this.data["rotation"];
          }
          obj332.methods["rotation"] = reader_kitty_rotation_638;
          obj332.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_638 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj332.methods["rotation:="] = writer_kitty_rotation_638;
          reader_kitty_rotation_638.confidential = true;
          writer_kitty_rotation_638.confidential = true;
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
          block639.className = 'block<kitty:104>';
          block639.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["updateAction"] = block639;
          var reader_kitty_updateAction_640 = function() {
            return this.data["updateAction"];
          }
          obj332.methods["updateAction"] = reader_kitty_updateAction_640;
          obj332.data["updateAction"] = block639;
          var writer_kitty_updateAction_640 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj332.methods["updateAction:="] = writer_kitty_updateAction_640;
          reader_kitty_updateAction_640.confidential = true;
          writer_kitty_updateAction_640.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block639)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 105
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
          block641.className = 'block<kitty:105>';
          block641.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["destroyAction"] = block641;
          var reader_kitty_destroyAction_642 = function() {
            return this.data["destroyAction"];
          }
          obj332.methods["destroyAction"] = reader_kitty_destroyAction_642;
          obj332.data["destroyAction"] = block641;
          var writer_kitty_destroyAction_642 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj332.methods["destroyAction:="] = writer_kitty_destroyAction_642;
          reader_kitty_destroyAction_642.confidential = true;
          writer_kitty_destroyAction_642.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block641)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 106
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
          block643.className = 'block<kitty:106>';
          block643.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseDownAction"] = block643;
          var reader_kitty_mouseDownAction_644 = function() {
            return this.data["mouseDownAction"];
          }
          obj332.methods["mouseDownAction"] = reader_kitty_mouseDownAction_644;
          obj332.data["mouseDownAction"] = block643;
          var writer_kitty_mouseDownAction_644 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj332.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_644;
          reader_kitty_mouseDownAction_644.confidential = true;
          writer_kitty_mouseDownAction_644.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block643)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 107
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
          block645.className = 'block<kitty:107>';
          block645.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseUpAction"] = block645;
          var reader_kitty_mouseUpAction_646 = function() {
            return this.data["mouseUpAction"];
          }
          obj332.methods["mouseUpAction"] = reader_kitty_mouseUpAction_646;
          obj332.data["mouseUpAction"] = block645;
          var writer_kitty_mouseUpAction_646 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj332.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_646;
          reader_kitty_mouseUpAction_646.confidential = true;
          writer_kitty_mouseUpAction_646.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block645)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 108
          var block647 = Grace_allocObject();
          block647.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block647.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block647.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block647.methods["match"] = GraceBlock_match;
          block647.methods["prefix?"] = GraceBlock_lift;
          block647.receiver = this;
          block647.className = 'block<kitty:108>';
          block647.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call648 = callmethod(var_mouse,"x", [0]);
            var call649 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call650 = callmethod(this, "setLocation", [2], call648, call649);
            return call650;
          };
          obj332.data["mouseDragAction"] = block647;
          var reader_kitty_mouseDragAction_651 = function() {
            return this.data["mouseDragAction"];
          }
          obj332.methods["mouseDragAction"] = reader_kitty_mouseDragAction_651;
          obj332.data["mouseDragAction"] = block647;
          var writer_kitty_mouseDragAction_651 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj332.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_651;
          reader_kitty_mouseDragAction_651.confidential = true;
          writer_kitty_mouseDragAction_651.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block647)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 109
          var block652 = Grace_allocObject();
          block652.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block652.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block652.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block652.methods["match"] = GraceBlock_match;
          block652.methods["prefix?"] = GraceBlock_lift;
          block652.receiver = this;
          block652.className = 'block<kitty:109>';
          block652.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseEnterAction"] = block652;
          var reader_kitty_mouseEnterAction_653 = function() {
            return this.data["mouseEnterAction"];
          }
          obj332.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_653;
          obj332.data["mouseEnterAction"] = block652;
          var writer_kitty_mouseEnterAction_653 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj332.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_653;
          reader_kitty_mouseEnterAction_653.confidential = true;
          writer_kitty_mouseEnterAction_653.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block652)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 110
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
          block654.className = 'block<kitty:110>';
          block654.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseOverAction"] = block654;
          var reader_kitty_mouseOverAction_655 = function() {
            return this.data["mouseOverAction"];
          }
          obj332.methods["mouseOverAction"] = reader_kitty_mouseOverAction_655;
          obj332.data["mouseOverAction"] = block654;
          var writer_kitty_mouseOverAction_655 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj332.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_655;
          reader_kitty_mouseOverAction_655.confidential = true;
          writer_kitty_mouseOverAction_655.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block654)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
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
          block656.className = 'block<kitty:111>';
          block656.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseExitAction"] = block656;
          var reader_kitty_mouseExitAction_657 = function() {
            return this.data["mouseExitAction"];
          }
          obj332.methods["mouseExitAction"] = reader_kitty_mouseExitAction_657;
          obj332.data["mouseExitAction"] = block656;
          var writer_kitty_mouseExitAction_657 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj332.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_657;
          reader_kitty_mouseExitAction_657.confidential = true;
          writer_kitty_mouseExitAction_657.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block656)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var bool658 = new GraceBoolean(false)
          obj332.data["mouseOver"] = bool658;
          var reader_kitty_mouseOver_659 = function() {
            return this.data["mouseOver"];
          }
          obj332.methods["mouseOver"] = reader_kitty_mouseOver_659;
          obj332.data["mouseOver"] = bool658;
          var writer_kitty_mouseOver_659 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj332.methods["mouseOver:="] = writer_kitty_mouseOver_659;
          reader_kitty_mouseOver_659.confidential = true;
          writer_kitty_mouseOver_659.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool658)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 112
          var bool660 = new GraceBoolean(false)
          obj332.data["mouseDownEntity"] = bool660;
          var reader_kitty_mouseDownEntity_661 = function() {
            return this.data["mouseDownEntity"];
          }
          obj332.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_661;
          obj332.data["mouseDownEntity"] = bool660;
          var writer_kitty_mouseDownEntity_661 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj332.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_661;
          reader_kitty_mouseDownEntity_661.confidential = true;
          writer_kitty_mouseDownEntity_661.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool660)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          obj332.data["image"] = undefined;
          var reader_kitty_image_662 = function() {
            return this.data["image"];
          }
          obj332.methods["image"] = reader_kitty_image_662;
          obj332.data["image"] = undefined;
          var writer_kitty_image_662 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj332.methods["image:="] = writer_kitty_image_662;
          reader_kitty_image_662.confidential = true;
          writer_kitty_image_662.confidential = true;
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 116
          onSelf = true;
          var call663 = callmethod(this, "awake", [0]);
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
    var func664 = function(argcv) {
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
        var obj665 = Grace_allocObject();
        obj665.definitionModule = "kitty";
        obj665.definitionLine = 93;
        var inho665 = inheritingObject;
        while (inho665.superobj) inho665 = inho665.superobj;
        inho665.superobj = obj665;
        obj665.data = inheritingObject.data;
        obj665.outer = this;
        var reader_kitty_outer_666 = function() {
          return this.outer;
        }
        obj665.methods["outer"] = reader_kitty_outer_666;
        function obj_init_665() {
          var origSuperDepth = superDepth;
          superDepth = obj665;
          obj665.annotations = [];
          var func667 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func667.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              var string668 = new GraceString("realyee.png");
              onSelf = true;
              var call669 = callmethod(this, "createImage", [1], string668);
              lineNumber = 122
              lineNumber = 121
              var_kitten = this;
              lineNumber = 122
              var call670 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call670
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
          obj665.methods["awake"] = func667;
          func667.definitionLine = 119;
          func667.definitionModule = "kitty";
          var func671 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func671.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              onSelf = true;
              var call672 = callmethod(this, "updateAction", [0]);
              var call673 = callmethod(call672,"apply", [0]);
              lineNumber = 130
              var if674 = var_done;
              lineNumber = 127
              onSelf = true;
              var call675 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call675)) {
                lineNumber = 128
                onSelf = true;
                var call676 = callmethod(this, "mouseOverAction", [0]);
                var call677 = callmethod(call676,"apply", [0]);
                if674 = call677;
              }
              lineNumber = 133
              var if678 = var_done;
              lineNumber = 130
              onSelf = true;
              var call679 = callmethod(this, "mouseDownEntity", [0]);
              onSelf = true;
              var call681 = callmethod(this, "mouseOver", [0]);
              var opresult683 = callmethod(call681, "&&", [1], call679);
              if (Grace_isTrue(opresult683)) {
                lineNumber = 131
                onSelf = true;
                var call684 = callmethod(this, "mouseDragAction", [0]);
                var call685 = callmethod(call684,"apply", [0]);
                if678 = call685;
              }
              return if678
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func671.paramCounts = [
            0,
          ];
          func671.variableArities = [
            false,
          ];
          obj665.methods["tick"] = func671;
          func671.definitionLine = 125;
          func671.definitionModule = "kitty";
          var func686 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func686.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              onSelf = true;
              var call687 = callmethod(this, "destroyAction", [0]);
              var call688 = callmethod(call687,"apply", [0]);
              return call688
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func686.paramCounts = [
            0,
          ];
          func686.variableArities = [
            false,
          ];
          obj665.methods["kill"] = func686;
          func686.definitionLine = 135;
          func686.definitionModule = "kitty";
          var func689 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func689.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              var if690 = var_done;
              lineNumber = 141
              onSelf = true;
              var call691 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call691)) {
                lineNumber = 142
                onSelf = true;
                var call692 = callmethod(this, "mouseDownAction", [0]);
                var call693 = callmethod(call692,"apply", [0]);
                lineNumber = 144
                lineNumber = 142
                lineNumber = 143
                var bool694 = new GraceBoolean(true)
                onSelf = true;
                var call695 = callmethod(this, "mouseDownEntity:=", [1], bool694);
                if690 = call695;
              }
              return if690
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func689.paramCounts = [
            0,
          ];
          func689.variableArities = [
            false,
          ];
          obj665.methods["mouseDown"] = func689;
          func689.definitionLine = 140;
          func689.definitionModule = "kitty";
          var func696 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func696.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 152
              var if697 = var_done;
              lineNumber = 148
              onSelf = true;
              var call698 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call698)) {
                lineNumber = 149
                onSelf = true;
                var call699 = callmethod(this, "mouseUpAction", [0]);
                var call700 = callmethod(call699,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool701 = new GraceBoolean(false)
                onSelf = true;
                var call702 = callmethod(this, "mouseDownEntity:=", [1], bool701);
                if697 = call702;
              }
              return if697
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func696.paramCounts = [
            0,
          ];
          func696.variableArities = [
            false,
          ];
          obj665.methods["mouseUp"] = func696;
          func696.definitionLine = 147;
          func696.definitionModule = "kitty";
          var func703 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func703.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var if704 = var_done;
              lineNumber = 155
              onSelf = true;
              var call705 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call705)) {
                lineNumber = 157
                return var_done
              }
              lineNumber = 159
              lineNumber = 158
              onSelf = true;
              var call707 = callmethod(this, "image", [0]);
              var call708 = callmethod(call707,"width", [0]);
              var quotient710 = callmethod(call708, "/", [1], new GraceNum(2));
              var var_w = quotient710;
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
              var call712 = callmethod(this, "image", [0]);
              var call713 = callmethod(call712,"height", [0]);
              var quotient715 = callmethod(call713, "/", [1], new GraceNum(2));
              var var_h = quotient715;
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
              var call717 = callmethod(this, "posX", [0]);
              var diff719 = callmethod(call717, "-", [1], var_w);
              onSelf = true;
              var call721 = callmethod(this, "posY", [0]);
              var diff723 = callmethod(call721, "-", [1], var_h);
              var call724 = callmethod(var_Point,"x()y", [1, 1], diff719, diff723);
              onSelf = true;
              var call726 = callmethod(this, "posX", [0]);
              var diff728 = callmethod(call726, "-", [1], var_w);
              onSelf = true;
              var call730 = callmethod(this, "posY", [0]);
              var opresult732 = callmethod(call730, "+", [1], var_h);
              var call733 = callmethod(var_Point,"x()y", [1, 1], diff728, opresult732);
              lineNumber = 162
              onSelf = true;
              var call735 = callmethod(this, "posX", [0]);
              var opresult737 = callmethod(call735, "+", [1], var_w);
              onSelf = true;
              var call739 = callmethod(this, "posY", [0]);
              var opresult741 = callmethod(call739, "+", [1], var_h);
              var call742 = callmethod(var_Point,"x()y", [1, 1], opresult737, opresult741);
              onSelf = true;
              var call744 = callmethod(this, "posX", [0]);
              var opresult746 = callmethod(call744, "+", [1], var_w);
              onSelf = true;
              var call748 = callmethod(this, "posY", [0]);
              var diff750 = callmethod(call748, "-", [1], var_h);
              var call751 = callmethod(var_Point,"x()y", [1, 1], opresult746, diff750);
              lineNumber = 160
              var call752 = callmethod(var_collections,"list", [0]);
              var call753 = callmethod(call752,"new", [4], call724, call733, call742, call751);
              var var_poly = call753;
              lineNumber = 160;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 168
              var if754 = var_done;
              lineNumber = 164
              var call755 = callmethod(var_mouse,"location", [0]);
              var call756 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call757 = callmethod(call756, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call758 = callmethod(call757, "pointInPolygon", [2], call755, var_poly);
              if (Grace_isTrue(call758)) {
                lineNumber = 165
                onSelf = true;
                var call759 = callmethod(this, "mouseEnterAction", [0]);
                var call760 = callmethod(call759,"apply", [0]);
                lineNumber = 167
                lineNumber = 165
                lineNumber = 166
                var bool761 = new GraceBoolean(true)
                onSelf = true;
                var call762 = callmethod(this, "mouseOver:=", [1], bool761);
                if754 = call762;
              }
              return if754
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func703.paramCounts = [
            0,
          ];
          func703.variableArities = [
            false,
          ];
          obj665.methods["mouseEnter"] = func703;
          func703.definitionLine = 154;
          func703.definitionModule = "kitty";
          var func763 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func763.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var if764 = var_done;
              lineNumber = 171
              onSelf = true;
              var call765 = callmethod(this, "mouseOver", [0]);
              var call766 = callmethod(call765,"prefix!", [0]);
              if (Grace_isTrue(call766)) {
                lineNumber = 173
                return var_done
              }
              lineNumber = 175
              lineNumber = 174
              onSelf = true;
              var call768 = callmethod(this, "image", [0]);
              var call769 = callmethod(call768,"width", [0]);
              var quotient771 = callmethod(call769, "/", [1], new GraceNum(2));
              var var_w = quotient771;
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
              var call773 = callmethod(this, "image", [0]);
              var call774 = callmethod(call773,"height", [0]);
              var quotient776 = callmethod(call774, "/", [1], new GraceNum(2));
              var var_h = quotient776;
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
              var call778 = callmethod(this, "posX", [0]);
              var diff780 = callmethod(call778, "-", [1], var_w);
              onSelf = true;
              var call782 = callmethod(this, "posY", [0]);
              var diff784 = callmethod(call782, "-", [1], var_h);
              var call785 = callmethod(var_Point,"x()y", [1, 1], diff780, diff784);
              onSelf = true;
              var call787 = callmethod(this, "posX", [0]);
              var diff789 = callmethod(call787, "-", [1], var_w);
              onSelf = true;
              var call791 = callmethod(this, "posY", [0]);
              var opresult793 = callmethod(call791, "+", [1], var_h);
              var call794 = callmethod(var_Point,"x()y", [1, 1], diff789, opresult793);
              lineNumber = 178
              onSelf = true;
              var call796 = callmethod(this, "posX", [0]);
              var opresult798 = callmethod(call796, "+", [1], var_w);
              onSelf = true;
              var call800 = callmethod(this, "posY", [0]);
              var opresult802 = callmethod(call800, "+", [1], var_h);
              var call803 = callmethod(var_Point,"x()y", [1, 1], opresult798, opresult802);
              onSelf = true;
              var call805 = callmethod(this, "posX", [0]);
              var opresult807 = callmethod(call805, "+", [1], var_w);
              onSelf = true;
              var call809 = callmethod(this, "posY", [0]);
              var diff811 = callmethod(call809, "-", [1], var_h);
              var call812 = callmethod(var_Point,"x()y", [1, 1], opresult807, diff811);
              lineNumber = 176
              var call813 = callmethod(var_collections,"list", [0]);
              var call814 = callmethod(call813,"new", [4], call785, call794, call803, call812);
              var var_poly = call814;
              lineNumber = 176;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 184
              var if815 = var_done;
              lineNumber = 180
              onSelf = true;
              var call816 = callmethod(this, "mouseOver", [0]);
              var call818 = callmethod(var_mouse,"location", [0]);
              var call819 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call820 = callmethod(call819, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call821 = callmethod(call820, "pointInPolygon", [2], call818, var_poly);
              var call822 = callmethod(call821,"prefix!", [0]);
              var opresult824 = callmethod(call822, "&&", [1], call816);
              if (Grace_isTrue(opresult824)) {
                lineNumber = 181
                onSelf = true;
                var call825 = callmethod(this, "mouseExitAction", [0]);
                var call826 = callmethod(call825,"apply", [0]);
                lineNumber = 183
                lineNumber = 181
                lineNumber = 182
                var bool827 = new GraceBoolean(false)
                onSelf = true;
                var call828 = callmethod(this, "mouseOver:=", [1], bool827);
                if815 = call828;
              }
              return if815
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func763.paramCounts = [
            0,
          ];
          func763.variableArities = [
            false,
          ];
          obj665.methods["mouseExit"] = func763;
          func763.definitionLine = 170;
          func763.definitionModule = "kitty";
          var func829 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func829.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              lineNumber = 181
              lineNumber = 188
              onSelf = true;
              var call832 = callmethod(this, "rotation", [0]);
              var prod834 = callmethod(call832, "*", [1], new GraceNum(3.14159));
              var quotient836 = callmethod(prod834, "/", [1], new GraceNum(180));
              var call837 = callmethod(var_math,"cos", [1], quotient836);
              var call839 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod842 = callmethod(var_distance, "*", [1], call839);
              var prod844 = callmethod(prod842, "*", [1], call837);
              onSelf = true;
              var call846 = callmethod(this, "posX", [0]);
              var opresult848 = callmethod(call846, "+", [1], prod844);
              onSelf = true;
              var call849 = callmethod(this, "posX:=", [1], opresult848);
              lineNumber = 189
              lineNumber = 188
              lineNumber = 189
              onSelf = true;
              var call852 = callmethod(this, "rotation", [0]);
              var prod854 = callmethod(call852, "*", [1], new GraceNum(3.14159));
              var quotient856 = callmethod(prod854, "/", [1], new GraceNum(180));
              var call857 = callmethod(var_math,"sin", [1], quotient856);
              var call859 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod862 = callmethod(var_distance, "*", [1], call859);
              var prod864 = callmethod(prod862, "*", [1], call857);
              onSelf = true;
              var call866 = callmethod(this, "posY", [0]);
              var opresult868 = callmethod(call866, "+", [1], prod864);
              onSelf = true;
              var call869 = callmethod(this, "posY:=", [1], opresult868);
              return call869
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func829.paramCounts = [
            1,
          ];
          func829.variableArities = [
            false,
          ];
          obj665.methods["move"] = func829;
          func829.definitionLine = 187;
          func829.definitionModule = "kitty";
          var func870 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func870.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 189
              lineNumber = 193
              onSelf = true;
              var call873 = callmethod(this, "rotation", [0]);
              var opresult876 = callmethod(new GraceNum(90), "+", [1], call873);
              var prod878 = callmethod(opresult876, "*", [1], new GraceNum(3.14159));
              var quotient880 = callmethod(prod878, "/", [1], new GraceNum(180));
              var call881 = callmethod(var_math,"cos", [1], quotient880);
              var call883 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod886 = callmethod(var_distance, "*", [1], call883);
              var prod888 = callmethod(prod886, "*", [1], call881);
              onSelf = true;
              var call890 = callmethod(this, "posX", [0]);
              var opresult892 = callmethod(call890, "+", [1], prod888);
              onSelf = true;
              var call893 = callmethod(this, "posX:=", [1], opresult892);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              onSelf = true;
              var call896 = callmethod(this, "rotation", [0]);
              var opresult899 = callmethod(new GraceNum(90), "+", [1], call896);
              var prod901 = callmethod(opresult899, "*", [1], new GraceNum(3.14159));
              var quotient903 = callmethod(prod901, "/", [1], new GraceNum(180));
              var call904 = callmethod(var_math,"sin", [1], quotient903);
              var call906 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod909 = callmethod(var_distance, "*", [1], call906);
              var prod911 = callmethod(prod909, "*", [1], call904);
              onSelf = true;
              var call913 = callmethod(this, "posY", [0]);
              var opresult915 = callmethod(call913, "+", [1], prod911);
              onSelf = true;
              var call916 = callmethod(this, "posY:=", [1], opresult915);
              return call916
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func870.paramCounts = [
            1,
          ];
          func870.variableArities = [
            false,
          ];
          obj665.methods["strafe"] = func870;
          func870.definitionLine = 192;
          func870.definitionModule = "kitty";
          var func917 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func917.paramCounts[0])
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
              var call919 = callmethod(this, "rotation", [0]);
              var opresult921 = callmethod(call919, "+", [1], var_angle);
              onSelf = true;
              var call922 = callmethod(this, "rotation:=", [1], opresult921);
              return call922
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func917.paramCounts = [
            1,
          ];
          func917.variableArities = [
            false,
          ];
          obj665.methods["turn"] = func917;
          func917.definitionLine = 197;
          func917.definitionModule = "kitty";
          var func923 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func923.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 203
              var call924 = callmethod(var_ctx,"save", [0]);
              lineNumber = 204
              onSelf = true;
              var call925 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call926 = callmethod(this, "posY", [0]);
              var call927 = callmethod(var_ctx,"translate", [2], call925, call926);
              lineNumber = 205
              onSelf = true;
              var call928 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call929 = callmethod(this, "image", [0]);
              var call930 = callmethod(call929,"draw", [4], var_ctx, var_dx, var_dy, call928);
              lineNumber = 206
              var call931 = callmethod(var_ctx,"restore", [0]);
              return call931
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func923.paramCounts = [
            3,
          ];
          func923.variableArities = [
            false,
          ];
          obj665.methods["draw"] = func923;
          func923.definitionLine = 202;
          func923.definitionModule = "kitty";
          var func932 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func932.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var call933 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call934 = callmethod(call933, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call935 = callmethod(call934, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call936 = callmethod(this, "image:=", [1], call935);
              return call936
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func932.paramCounts = [
            1,
          ];
          func932.variableArities = [
            false,
          ];
          obj665.methods["createImage"] = func932;
          func932.definitionLine = 209;
          func932.definitionModule = "kitty";
          var func937 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func937.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 214
              onSelf = true;
              var call938 = callmethod(this, "image:=", [1], var_image__39__);
              return call938
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func937.paramTypes = [];
          func937.paramTypes.push([]);
          func937.paramCounts = [
            1,
          ];
          func937.variableArities = [
            false,
          ];
          obj665.methods["setImage"] = func937;
          func937.definitionLine = 213;
          func937.definitionModule = "kitty";
          var func939 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func939.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              lineNumber = 210
              lineNumber = 219
              onSelf = true;
              var call940 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj665.methods["setUpdateAction"] = func939;
          func939.definitionLine = 218;
          func939.definitionModule = "kitty";
          var func941 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func941.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 210
              lineNumber = 223
              onSelf = true;
              var call942 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj665.methods["setDestroyAction"] = func941;
          func941.definitionLine = 222;
          func941.definitionModule = "kitty";
          var func943 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func943.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 228
              lineNumber = 210
              lineNumber = 227
              onSelf = true;
              var call944 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
            1,
          ];
          func943.variableArities = [
            false,
          ];
          obj665.methods["setMouseDownAction"] = func943;
          func943.definitionLine = 226;
          func943.definitionModule = "kitty";
          var func945 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func945.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              lineNumber = 210
              lineNumber = 231
              onSelf = true;
              var call946 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call946
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func945.paramCounts = [
            1,
          ];
          func945.variableArities = [
            false,
          ];
          obj665.methods["setMouseUpAction"] = func945;
          func945.definitionLine = 230;
          func945.definitionModule = "kitty";
          var func947 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func947.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 210
              lineNumber = 235
              onSelf = true;
              var call948 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call948
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func947.paramCounts = [
            1,
          ];
          func947.variableArities = [
            false,
          ];
          obj665.methods["setMouseEnterAction"] = func947;
          func947.definitionLine = 234;
          func947.definitionModule = "kitty";
          var func949 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func949.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 210
              lineNumber = 239
              onSelf = true;
              var call950 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
              return call950
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func949.paramCounts = [
            1,
          ];
          func949.variableArities = [
            false,
          ];
          obj665.methods["setMouseDragAction"] = func949;
          func949.definitionLine = 238;
          func949.definitionModule = "kitty";
          var func951 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func951.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 210
              lineNumber = 243
              onSelf = true;
              var call952 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call952
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func951.paramCounts = [
            1,
          ];
          func951.variableArities = [
            false,
          ];
          obj665.methods["setMouseOverAction"] = func951;
          func951.definitionLine = 242;
          func951.definitionModule = "kitty";
          var func953 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func953.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 210
              lineNumber = 247
              onSelf = true;
              var call954 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call954
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
          obj665.methods["setMouseExitAction"] = func953;
          func953.definitionLine = 246;
          func953.definitionModule = "kitty";
          var func955 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func955.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 252
              lineNumber = 210
              lineNumber = 251
              onSelf = true;
              var call956 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 253
              lineNumber = 210
              lineNumber = 252
              onSelf = true;
              var call957 = callmethod(this, "posY:=", [1], var_y);
              return call957
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func955.paramCounts = [
            2,
          ];
          func955.variableArities = [
            false,
          ];
          obj665.methods["setLocation"] = func955;
          func955.definitionLine = 250;
          func955.definitionModule = "kitty";
          var func958 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func958.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 257
              lineNumber = 256
              onSelf = true;
              var call959 = callmethod(this, "posX", [0]);
              return call959
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func958.paramCounts = [
            0,
          ];
          func958.variableArities = [
            false,
          ];
          obj665.methods["getX"] = func958;
          func958.definitionLine = 255;
          func958.definitionModule = "kitty";
          var func960 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func960.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 260
              onSelf = true;
              var call961 = callmethod(this, "posY", [0]);
              return call961
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func960.paramCounts = [
            0,
          ];
          func960.variableArities = [
            false,
          ];
          obj665.methods["getY"] = func960;
          func960.definitionLine = 259;
          func960.definitionModule = "kitty";
          var func962 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func962.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 265
              lineNumber = 210
              lineNumber = 264
              onSelf = true;
              var call963 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call963
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func962.paramCounts = [
            1,
          ];
          func962.variableArities = [
            false,
          ];
          obj665.methods["setX"] = func962;
          func962.definitionLine = 263;
          func962.definitionModule = "kitty";
          var func964 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func964.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 210
              lineNumber = 268
              onSelf = true;
              var call965 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call965
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func964.paramCounts = [
            1,
          ];
          func964.variableArities = [
            false,
          ];
          obj665.methods["setY"] = func964;
          func964.definitionLine = 267;
          func964.definitionModule = "kitty";
          var func966 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func966.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call967 = callmethod(this, "rotation", [0]);
              return call967
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func966.paramCounts = [
            0,
          ];
          func966.variableArities = [
            false,
          ];
          obj665.methods["getRotation"] = func966;
          func966.definitionLine = 271;
          func966.definitionModule = "kitty";
          sourceObject = obj665;
          lineNumber = 97
          obj665.data["tag"] = var_tag__39__;
          var reader_kitty_tag_968 = function() {
            return this.data["tag"];
          }
          obj665.methods["tag"] = reader_kitty_tag_968;
          obj665.data["tag"] = var_tag__39__;
          var writer_kitty_tag_968 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj665.methods["tag:="] = writer_kitty_tag_968;
          reader_kitty_tag_968.confidential = true;
          writer_kitty_tag_968.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 98
          obj665.data["posX"] = var_x__39__;
          var reader_kitty_posX_969 = function() {
            return this.data["posX"];
          }
          obj665.methods["posX"] = reader_kitty_posX_969;
          obj665.data["posX"] = var_x__39__;
          var writer_kitty_posX_969 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj665.methods["posX:="] = writer_kitty_posX_969;
          reader_kitty_posX_969.confidential = true;
          writer_kitty_posX_969.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 99
          obj665.data["posY"] = var_y__39__;
          var reader_kitty_posY_970 = function() {
            return this.data["posY"];
          }
          obj665.methods["posY"] = reader_kitty_posY_970;
          obj665.data["posY"] = var_y__39__;
          var writer_kitty_posY_970 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj665.methods["posY:="] = writer_kitty_posY_970;
          reader_kitty_posY_970.confidential = true;
          writer_kitty_posY_970.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 100
          obj665.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_971 = function() {
            return this.data["rotation"];
          }
          obj665.methods["rotation"] = reader_kitty_rotation_971;
          obj665.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_971 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj665.methods["rotation:="] = writer_kitty_rotation_971;
          reader_kitty_rotation_971.confidential = true;
          writer_kitty_rotation_971.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 104
          var block972 = Grace_allocObject();
          block972.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block972.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block972.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block972.methods["match"] = GraceBlock_match;
          block972.methods["prefix?"] = GraceBlock_lift;
          block972.receiver = this;
          block972.className = 'block<kitty:104>';
          block972.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["updateAction"] = block972;
          var reader_kitty_updateAction_973 = function() {
            return this.data["updateAction"];
          }
          obj665.methods["updateAction"] = reader_kitty_updateAction_973;
          obj665.data["updateAction"] = block972;
          var writer_kitty_updateAction_973 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj665.methods["updateAction:="] = writer_kitty_updateAction_973;
          reader_kitty_updateAction_973.confidential = true;
          writer_kitty_updateAction_973.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block972)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 105
          var block974 = Grace_allocObject();
          block974.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block974.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block974.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block974.methods["match"] = GraceBlock_match;
          block974.methods["prefix?"] = GraceBlock_lift;
          block974.receiver = this;
          block974.className = 'block<kitty:105>';
          block974.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["destroyAction"] = block974;
          var reader_kitty_destroyAction_975 = function() {
            return this.data["destroyAction"];
          }
          obj665.methods["destroyAction"] = reader_kitty_destroyAction_975;
          obj665.data["destroyAction"] = block974;
          var writer_kitty_destroyAction_975 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj665.methods["destroyAction:="] = writer_kitty_destroyAction_975;
          reader_kitty_destroyAction_975.confidential = true;
          writer_kitty_destroyAction_975.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block974)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 106
          var block976 = Grace_allocObject();
          block976.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block976.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block976.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block976.methods["match"] = GraceBlock_match;
          block976.methods["prefix?"] = GraceBlock_lift;
          block976.receiver = this;
          block976.className = 'block<kitty:106>';
          block976.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["mouseDownAction"] = block976;
          var reader_kitty_mouseDownAction_977 = function() {
            return this.data["mouseDownAction"];
          }
          obj665.methods["mouseDownAction"] = reader_kitty_mouseDownAction_977;
          obj665.data["mouseDownAction"] = block976;
          var writer_kitty_mouseDownAction_977 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj665.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_977;
          reader_kitty_mouseDownAction_977.confidential = true;
          writer_kitty_mouseDownAction_977.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block976)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 107
          var block978 = Grace_allocObject();
          block978.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block978.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block978.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block978.methods["match"] = GraceBlock_match;
          block978.methods["prefix?"] = GraceBlock_lift;
          block978.receiver = this;
          block978.className = 'block<kitty:107>';
          block978.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["mouseUpAction"] = block978;
          var reader_kitty_mouseUpAction_979 = function() {
            return this.data["mouseUpAction"];
          }
          obj665.methods["mouseUpAction"] = reader_kitty_mouseUpAction_979;
          obj665.data["mouseUpAction"] = block978;
          var writer_kitty_mouseUpAction_979 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj665.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_979;
          reader_kitty_mouseUpAction_979.confidential = true;
          writer_kitty_mouseUpAction_979.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block978)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 108
          var block980 = Grace_allocObject();
          block980.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block980.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block980.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block980.methods["match"] = GraceBlock_match;
          block980.methods["prefix?"] = GraceBlock_lift;
          block980.receiver = this;
          block980.className = 'block<kitty:108>';
          block980.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call981 = callmethod(var_mouse,"x", [0]);
            var call982 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call983 = callmethod(this, "setLocation", [2], call981, call982);
            return call983;
          };
          obj665.data["mouseDragAction"] = block980;
          var reader_kitty_mouseDragAction_984 = function() {
            return this.data["mouseDragAction"];
          }
          obj665.methods["mouseDragAction"] = reader_kitty_mouseDragAction_984;
          obj665.data["mouseDragAction"] = block980;
          var writer_kitty_mouseDragAction_984 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj665.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_984;
          reader_kitty_mouseDragAction_984.confidential = true;
          writer_kitty_mouseDragAction_984.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block980)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 109
          var block985 = Grace_allocObject();
          block985.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block985.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block985.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block985.methods["match"] = GraceBlock_match;
          block985.methods["prefix?"] = GraceBlock_lift;
          block985.receiver = this;
          block985.className = 'block<kitty:109>';
          block985.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["mouseEnterAction"] = block985;
          var reader_kitty_mouseEnterAction_986 = function() {
            return this.data["mouseEnterAction"];
          }
          obj665.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_986;
          obj665.data["mouseEnterAction"] = block985;
          var writer_kitty_mouseEnterAction_986 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj665.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_986;
          reader_kitty_mouseEnterAction_986.confidential = true;
          writer_kitty_mouseEnterAction_986.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block985)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 110
          var block987 = Grace_allocObject();
          block987.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block987.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block987.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block987.methods["match"] = GraceBlock_match;
          block987.methods["prefix?"] = GraceBlock_lift;
          block987.receiver = this;
          block987.className = 'block<kitty:110>';
          block987.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["mouseOverAction"] = block987;
          var reader_kitty_mouseOverAction_988 = function() {
            return this.data["mouseOverAction"];
          }
          obj665.methods["mouseOverAction"] = reader_kitty_mouseOverAction_988;
          obj665.data["mouseOverAction"] = block987;
          var writer_kitty_mouseOverAction_988 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj665.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_988;
          reader_kitty_mouseOverAction_988.confidential = true;
          writer_kitty_mouseOverAction_988.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block987)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 111
          var block989 = Grace_allocObject();
          block989.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block989.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block989.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block989.methods["match"] = GraceBlock_match;
          block989.methods["prefix?"] = GraceBlock_lift;
          block989.receiver = this;
          block989.className = 'block<kitty:111>';
          block989.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj665.data["mouseExitAction"] = block989;
          var reader_kitty_mouseExitAction_990 = function() {
            return this.data["mouseExitAction"];
          }
          obj665.methods["mouseExitAction"] = reader_kitty_mouseExitAction_990;
          obj665.data["mouseExitAction"] = block989;
          var writer_kitty_mouseExitAction_990 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj665.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_990;
          reader_kitty_mouseExitAction_990.confidential = true;
          writer_kitty_mouseExitAction_990.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block989)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 111
          var bool991 = new GraceBoolean(false)
          obj665.data["mouseOver"] = bool991;
          var reader_kitty_mouseOver_992 = function() {
            return this.data["mouseOver"];
          }
          obj665.methods["mouseOver"] = reader_kitty_mouseOver_992;
          obj665.data["mouseOver"] = bool991;
          var writer_kitty_mouseOver_992 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj665.methods["mouseOver:="] = writer_kitty_mouseOver_992;
          reader_kitty_mouseOver_992.confidential = true;
          writer_kitty_mouseOver_992.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool991)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 112
          var bool993 = new GraceBoolean(false)
          obj665.data["mouseDownEntity"] = bool993;
          var reader_kitty_mouseDownEntity_994 = function() {
            return this.data["mouseDownEntity"];
          }
          obj665.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_994;
          obj665.data["mouseDownEntity"] = bool993;
          var writer_kitty_mouseDownEntity_994 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj665.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_994;
          reader_kitty_mouseDownEntity_994.confidential = true;
          writer_kitty_mouseDownEntity_994.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool993)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj665.mutable = true;
          sourceObject = obj665;
          obj665.data["image"] = undefined;
          var reader_kitty_image_995 = function() {
            return this.data["image"];
          }
          obj665.methods["image"] = reader_kitty_image_995;
          obj665.data["image"] = undefined;
          var writer_kitty_image_995 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj665.methods["image:="] = writer_kitty_image_995;
          reader_kitty_image_995.confidential = true;
          writer_kitty_image_995.confidential = true;
          obj665.mutable = true;
          sourceObject = obj665;
          lineNumber = 116
          onSelf = true;
          var call996 = callmethod(this, "awake", [0]);
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          sourceObject = obj665;
          superDepth = origSuperDepth;
        }
        obj_init_665.apply(inheritingObject, []);
        return obj665
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj329.methods["new()object"] = func664;
    var func997 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 93
        var string998 = new GraceString("class KittyEntity");
        return string998
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func997.paramCounts = [
    ];
    func997.variableArities = [
    ];
    obj329.methods["asDebugString"] = func997;
    func997.definitionLine = 93;
    func997.definitionModule = "kitty";
    sourceObject = obj329;
    sourceObject = obj329;
    superDepth = origSuperDepth;
  }
  obj_init_329.apply(obj329, []);
  var var_KittyEntity = obj329;
  lineNumber = 276
  lineNumber = 288
  lineNumber = 293
  lineNumber = 297
  lineNumber = 302
  lineNumber = 306
  lineNumber = 310
  lineNumber = 314
  lineNumber = 318
  lineNumber = 322
  lineNumber = 329
  var func999 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func999.paramCounts[0])
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
  func999.paramCounts = [
    0,
  ];
  func999.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func999;
  func999.definitionLine = 329;
  func999.definitionModule = "kitty";
  var obj1000 = Grace_allocObject();
  obj1000.definitionModule = "kitty";
  obj1000.definitionLine = 329;
  obj1000.outer = this;
  var reader_kitty_outer_1001 = function() {
    return this.outer;
  }
  obj1000.methods["outer"] = reader_kitty_outer_1001;
  function obj_init_1000() {
    var origSuperDepth = superDepth;
    superDepth = obj1000;
    obj1000.annotations = [];
    var func1002 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1002.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj1003 = Grace_allocObject();
        obj1003.definitionModule = "kitty";
        obj1003.definitionLine = 329;
        obj1003.outer = this;
        var reader_kitty_outer_1004 = function() {
          return this.outer;
        }
        obj1003.methods["outer"] = reader_kitty_outer_1004;
        function obj_init_1003() {
          var origSuperDepth = superDepth;
          superDepth = obj1003;
          obj1003.annotations = [];
          var func1005 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1005.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 371
              var if1006 = var_done;
              lineNumber = 367
              onSelf = true;
              var call1007 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1007)) {
                lineNumber = 369
                lineNumber = 368
                var bool1008 = new GraceBoolean(false)
                return bool1008
              }
              lineNumber = 372
              lineNumber = 329
              lineNumber = 371
              var call1009 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1010 = callmethod(this, "document:=", [1], call1009);
              lineNumber = 372
              lineNumber = 371
              lineNumber = 372
              var string1011 = new GraceString("standard-canvas");
              onSelf = true;
              var call1012 = callmethod(this, "document", [0]);
              var call1013 = callmethod(call1012,"getElementById", [1], string1011);
              onSelf = true;
              var call1014 = callmethod(this, "canvas:=", [1], call1013);
              lineNumber = 374
              lineNumber = 371
              lineNumber = 373
              onSelf = true;
              var call1015 = callmethod(this, "canvas", [0]);
              var call1016 = callmethod(call1015,"width", [0]);
              onSelf = true;
              var call1017 = callmethod(this, "canvasWidth:=", [1], call1016);
              lineNumber = 377
              lineNumber = 373
              lineNumber = 374
              onSelf = true;
              var call1018 = callmethod(this, "canvas", [0]);
              var call1019 = callmethod(call1018,"height", [0]);
              onSelf = true;
              var call1020 = callmethod(this, "canvasHeight:=", [1], call1019);
              lineNumber = 383
              var block1021 = Grace_allocObject();
              block1021.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1021.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1021.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1021.methods["match"] = GraceBlock_match;
              block1021.methods["prefix?"] = GraceBlock_lift;
              block1021.receiver = this;
              block1021.className = 'block<kitty:383>';
              block1021.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 379
                lineNumber = 378
                var bool1022 = new GraceBoolean(true)
                var_mouseDown = bool1022;
                lineNumber = 379
                onSelf = true;
                var call1023 = callmethod(this, "entities", [0]);
                lineNumber = 382
                var block1024 = Grace_allocObject();
                block1024.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1024.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1024.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1024.methods["match"] = GraceBlock_match;
                block1024.methods["prefix?"] = GraceBlock_lift;
                block1024.receiver = this;
                block1024.className = 'block<kitty:382>';
                block1024.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 380
                  var call1025 = callmethod(var_entity,"mouseDown", [0]);
                  return call1025;
                };
                var call1026 = callmethod(Grace_prelude,"for()do", [1, 1], call1023, block1024);
                return call1026;
              };
              var_mouseDownListener = block1021;
              lineNumber = 383
              var string1027 = new GraceString("mousedown");
              onSelf = true;
              var call1028 = callmethod(this, "canvas", [0]);
              var call1029 = callmethod(call1028,"addEventListener", [2], string1027, var_mouseDownListener);
              lineNumber = 391
              var block1030 = Grace_allocObject();
              block1030.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1030.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1030.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1030.methods["match"] = GraceBlock_match;
              block1030.methods["prefix?"] = GraceBlock_lift;
              block1030.receiver = this;
              block1030.className = 'block<kitty:391>';
              block1030.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 387
                lineNumber = 386
                var bool1031 = new GraceBoolean(false)
                var_mouseDown = bool1031;
                lineNumber = 387
                onSelf = true;
                var call1032 = callmethod(this, "entities", [0]);
                lineNumber = 390
                var block1033 = Grace_allocObject();
                block1033.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1033.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1033.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1033.methods["match"] = GraceBlock_match;
                block1033.methods["prefix?"] = GraceBlock_lift;
                block1033.receiver = this;
                block1033.className = 'block<kitty:390>';
                block1033.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 388
                  var call1034 = callmethod(var_entity,"mouseUp", [0]);
                  return call1034;
                };
                var call1035 = callmethod(Grace_prelude,"for()do", [1, 1], call1032, block1033);
                return call1035;
              };
              var_mouseUpListener = block1030;
              lineNumber = 391
              var string1036 = new GraceString("mouseup");
              onSelf = true;
              var call1037 = callmethod(this, "canvas", [0]);
              var call1038 = callmethod(call1037,"addEventListener", [2], string1036, var_mouseUpListener);
              lineNumber = 404
              var block1039 = Grace_allocObject();
              block1039.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1039.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1039.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1039.methods["match"] = GraceBlock_match;
              block1039.methods["prefix?"] = GraceBlock_lift;
              block1039.receiver = this;
              block1039.className = 'block<kitty:404>';
              block1039.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 395
                lineNumber = 394
                onSelf = true;
                var call1040 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1042 = callmethod(this, "canvas", [0]);
                var call1043 = callmethod(call1042,"offsetWidth", [0]);
                onSelf = true;
                var call1045 = callmethod(this, "canvas", [0]);
                var call1046 = callmethod(call1045,"offsetLeft", [0]);
                var call1048 = callmethod(var_ev,"clientX", [0]);
                var diff1050 = callmethod(call1048, "-", [1], call1046);
                var quotient1052 = callmethod(diff1050, "/", [1], call1043);
                var prod1054 = callmethod(quotient1052, "*", [1], call1040);
                var var_x = prod1054;
                lineNumber = 395;
                moduleName = "kitty";
                lineNumber = 394
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 396
                lineNumber = 395
                onSelf = true;
                var call1055 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1057 = callmethod(this, "canvas", [0]);
                var call1058 = callmethod(call1057,"offsetHeight", [0]);
                onSelf = true;
                var call1060 = callmethod(this, "canvas", [0]);
                var call1061 = callmethod(call1060,"offsetTop", [0]);
                var call1063 = callmethod(var_ev,"clientY", [0]);
                var diff1065 = callmethod(call1063, "-", [1], call1061);
                var quotient1067 = callmethod(diff1065, "/", [1], call1058);
                var prod1069 = callmethod(quotient1067, "*", [1], call1055);
                var var_y = prod1069;
                lineNumber = 396;
                moduleName = "kitty";
                lineNumber = 395
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 396
                lineNumber = 395
                lineNumber = 396
                var call1070 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1071 = callmethod(var_mouse,"position:=", [1], call1070);
                lineNumber = 399
                onSelf = true;
                var call1072 = callmethod(this, "entities", [0]);
                lineNumber = 403
                var block1073 = Grace_allocObject();
                block1073.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1073.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1073.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1073.methods["match"] = GraceBlock_match;
                block1073.methods["prefix?"] = GraceBlock_lift;
                block1073.receiver = this;
                block1073.className = 'block<kitty:403>';
                block1073.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 400
                  var call1074 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 401
                  var call1075 = callmethod(var_entity,"mouseExit", [0]);
                  return call1075;
                };
                var call1076 = callmethod(Grace_prelude,"for()do", [1, 1], call1072, block1073);
                return call1076;
              };
              var_mouseMoveListener = block1039;
              lineNumber = 404
              var string1077 = new GraceString("mousemove");
              onSelf = true;
              var call1078 = callmethod(this, "canvas", [0]);
              var call1079 = callmethod(call1078,"addEventListener", [2], string1077, var_mouseMoveListener);
              lineNumber = 414
              var block1080 = Grace_allocObject();
              block1080.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1080.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1080.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1080.methods["match"] = GraceBlock_match;
              block1080.methods["prefix?"] = GraceBlock_lift;
              block1080.receiver = this;
              block1080.className = 'block<kitty:414>';
              block1080.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 412
                var if1081 = var_done;
                lineNumber = 409
                var call1083 = callmethod(var_ev,"keyCode", [0]);
                var opresult1085 = callmethod(call1083, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1085)) {
                  lineNumber = 410
                  onSelf = true;
                  var call1086 = callmethod(this, "stop", [0]);
                  if1081 = call1086;
                }
                lineNumber = 413
                lineNumber = 412
                var call1087 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1087;
                return call1087;
              };
              var_keyDownListener = block1080;
              lineNumber = 414
              var string1088 = new GraceString("keydown");
              onSelf = true;
              var call1089 = callmethod(this, "document", [0]);
              var call1090 = callmethod(call1089,"addEventListener", [2], string1088, var_keyDownListener);
              lineNumber = 420
              var block1091 = Grace_allocObject();
              block1091.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1091.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1091.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1091.methods["match"] = GraceBlock_match;
              block1091.methods["prefix?"] = GraceBlock_lift;
              block1091.receiver = this;
              block1091.className = 'block<kitty:420>';
              block1091.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 419
                lineNumber = 418
                var call1092 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1092;
                return call1092;
              };
              var_keyUpListener = block1091;
              lineNumber = 420
              var string1093 = new GraceString("keyup");
              onSelf = true;
              var call1094 = callmethod(this, "document", [0]);
              var call1095 = callmethod(call1094,"addEventListener", [2], string1093, var_keyUpListener);
              lineNumber = 422
              lineNumber = 412
              lineNumber = 422
              var string1096 = new GraceString("canvas");
              var call1097 = callmethod(var_dom,"document", [0]);
              var call1098 = callmethod(call1097,"createElement", [1], string1096);
              onSelf = true;
              var call1099 = callmethod(this, "backingCanvas:=", [1], call1098);
              lineNumber = 424
              lineNumber = 422
              lineNumber = 423
              onSelf = true;
              var call1100 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1101 = callmethod(this, "backingCanvas", [0]);
              var call1102 = callmethod(call1101,"height:=", [1], call1100);
              lineNumber = 425
              lineNumber = 422
              lineNumber = 424
              onSelf = true;
              var call1103 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1104 = callmethod(this, "backingCanvas", [0]);
              var call1105 = callmethod(call1104,"width:=", [1], call1103);
              lineNumber = 425
              lineNumber = 422
              lineNumber = 425
              var string1106 = new GraceString("2d");
              onSelf = true;
              var call1107 = callmethod(this, "backingCanvas", [0]);
              var call1108 = callmethod(call1107,"getContext", [1], string1106);
              onSelf = true;
              var call1109 = callmethod(this, "backingContext:=", [1], call1108);
              lineNumber = 426
              lineNumber = 422
              lineNumber = 426
              var string1110 = new GraceString("2d");
              onSelf = true;
              var call1111 = callmethod(this, "canvas", [0]);
              var call1112 = callmethod(call1111,"getContext", [1], string1110);
              onSelf = true;
              var call1113 = callmethod(this, "mctx:=", [1], call1112);
              lineNumber = 429
              var string1114 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1115 = callmethod(this, "setBackground", [1], string1114);
              lineNumber = 432
              var call1116 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1117 = callmethod(call1116, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1118 = callmethod(call1117, "setWorld", [1], this);
              lineNumber = 435
              lineNumber = 434
              var_kitten = this;
              lineNumber = 436
              lineNumber = 432
              lineNumber = 435
              var bool1119 = new GraceBoolean(true)
              onSelf = true;
              var call1120 = callmethod(this, "isInit:=", [1], bool1119);
              return call1120
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1005.paramCounts = [
            0,
          ];
          func1005.variableArities = [
            false,
          ];
          obj1003.methods["init"] = func1005;
          func1005.definitionLine = 363;
          func1005.definitionModule = "kitty";
          var func1121 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1121.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 442
              lineNumber = 432
              lineNumber = 441
              var bool1122 = new GraceBoolean(true)
              onSelf = true;
              var call1123 = callmethod(this, "isRunning:=", [1], bool1122);
              lineNumber = 442
              var block1124 = Grace_allocObject();
              block1124.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1124.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1124.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1124.methods["match"] = GraceBlock_match;
              block1124.methods["prefix?"] = GraceBlock_lift;
              block1124.receiver = this;
              block1124.className = 'block<kitty:442>';
              block1124.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1125 = callmethod(this, "isRunning", [0]);
                return call1125;
              };
              lineNumber = 446
              var block1126 = Grace_allocObject();
              block1126.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1126.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1126.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1126.methods["match"] = GraceBlock_match;
              block1126.methods["prefix?"] = GraceBlock_lift;
              block1126.receiver = this;
              block1126.className = 'block<kitty:446>';
              block1126.real = function(
              ) {
                sourceObject = this;
                lineNumber = 443
                onSelf = true;
                var call1127 = callmethod(this, "tick", [0]);
                return call1127;
              };
              lineNumber = 442
              var call1128 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1124, new GraceNum(10), block1126);
              return call1128
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1121.paramCounts = [
            0,
          ];
          func1121.variableArities = [
            false,
          ];
          obj1003.methods["start"] = func1121;
          func1121.definitionLine = 439;
          func1121.definitionModule = "kitty";
          var func1129 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1129.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 455
              lineNumber = 432
              lineNumber = 454
              onSelf = true;
              var call1130 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1131 = callmethod(this, "mctx", [0]);
              var call1132 = callmethod(call1131,"fillStyle:=", [1], call1130);
              lineNumber = 455
              onSelf = true;
              var call1133 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1134 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1135 = callmethod(this, "mctx", [0]);
              var call1136 = callmethod(call1135,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1133, call1134);
              lineNumber = 456
              onSelf = true;
              var call1137 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1138 = callmethod(this, "mctx", [0]);
              var call1139 = callmethod(call1138,"drawImage", [3], call1137, new GraceNum(0), new GraceNum(0));
              lineNumber = 457
              onSelf = true;
              var call1140 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1142 = callmethod(this, "canvasWidth", [0]);
              var quotient1144 = callmethod(call1142, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1146 = callmethod(this, "canvasHeight", [0]);
              var quotient1148 = callmethod(call1146, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1149 = callmethod(this, "background", [0]);
              var call1150 = callmethod(call1149,"draw", [4], call1140, quotient1144, quotient1148, new GraceNum(0));
              lineNumber = 460
              onSelf = true;
              var call1151 = callmethod(this, "updateAction", [0]);
              var call1152 = callmethod(call1151,"apply", [0]);
              lineNumber = 463
              onSelf = true;
              var call1153 = callmethod(this, "entities", [0]);
              lineNumber = 470
              var block1154 = Grace_allocObject();
              block1154.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1154.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1154.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1154.methods["match"] = GraceBlock_match;
              block1154.methods["prefix?"] = GraceBlock_lift;
              block1154.receiver = this;
              block1154.className = 'block<kitty:470>';
              block1154.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 464
                var call1155 = callmethod(var_entity,"tick", [0]);
                lineNumber = 466
                onSelf = true;
                var call1156 = callmethod(this, "mctx", [0]);
                var call1157 = callmethod(var_entity,"draw", [3], call1156, new GraceNum(0), new GraceNum(0));
                return call1157;
              };
              var call1158 = callmethod(Grace_prelude,"for()do", [1, 1], call1153, block1154);
              return call1158
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1129.paramCounts = [
            0,
          ];
          func1129.variableArities = [
            false,
          ];
          obj1003.methods["tick"] = func1129;
          func1129.definitionLine = 449;
          func1129.definitionModule = "kitty";
          var func1159 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 473
              var string1160 = new GraceString("WORLD STOPPING...");
              var call1161 = Grace_print(string1160);
              lineNumber = 475
              lineNumber = 464
              lineNumber = 474
              var bool1162 = new GraceBoolean(false)
              onSelf = true;
              var call1163 = callmethod(this, "isRunning:=", [1], bool1162);
              lineNumber = 475
              onSelf = true;
              var call1164 = callmethod(this, "destroyAction", [0]);
              var call1165 = callmethod(call1164,"apply", [0]);
              lineNumber = 476
              onSelf = true;
              var call1166 = callmethod(this, "entities", [0]);
              lineNumber = 479
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
              block1167.className = 'block<kitty:479>';
              block1167.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 477
                var call1168 = callmethod(var_entity,"kill", [0]);
                return call1168;
              };
              var call1169 = callmethod(Grace_prelude,"for()do", [1, 1], call1166, block1167);
              lineNumber = 479
              var string1170 = new GraceString("mousedown");
              onSelf = true;
              var call1171 = callmethod(this, "canvas", [0]);
              var call1172 = callmethod(call1171,"removeEventListener", [2], string1170, var_mouseDownListener);
              lineNumber = 480
              var string1173 = new GraceString("mouseup");
              onSelf = true;
              var call1174 = callmethod(this, "canvas", [0]);
              var call1175 = callmethod(call1174,"removeEventListener", [2], string1173, var_mouseUpListener);
              lineNumber = 481
              var string1176 = new GraceString("mousemove");
              onSelf = true;
              var call1177 = callmethod(this, "canvas", [0]);
              var call1178 = callmethod(call1177,"removeEventListener", [2], string1176, var_mouseMoveListener);
              lineNumber = 482
              var string1179 = new GraceString("keydown");
              onSelf = true;
              var call1180 = callmethod(this, "document", [0]);
              var call1181 = callmethod(call1180,"removeEventListener", [2], string1179, var_keyDownListener);
              lineNumber = 483
              var string1182 = new GraceString("keyup");
              onSelf = true;
              var call1183 = callmethod(this, "document", [0]);
              var call1184 = callmethod(call1183,"removeEventListener", [2], string1182, var_keyUpListener);
              return call1184
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1159.paramCounts = [
            0,
          ];
          func1159.variableArities = [
            false,
          ];
          obj1003.methods["stop"] = func1159;
          func1159.definitionLine = 472;
          func1159.definitionModule = "kitty";
          var func1185 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1185.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 487
              lineNumber = 477
              lineNumber = 487
              onSelf = true;
              var call1186 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1187 = callmethod(this, "canvasHeight", [0]);
              var call1188 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1189 = callmethod(call1188, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1190 = callmethod(call1189, "Image()width()height", [1, 1, 1], var_url, call1186, call1187);
              onSelf = true;
              var call1191 = callmethod(this, "background:=", [1], call1190);
              return call1191
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
          obj1003.methods["setBackground"] = func1185;
          func1185.definitionLine = 486;
          func1185.definitionModule = "kitty";
          var func1192 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              onSelf = true;
              var call1193 = callmethod(this, "entities", [0]);
              var call1194 = callmethod(call1193,"push", [1], var_e);
              return call1194
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1192.paramCounts = [
            1,
          ];
          func1192.variableArities = [
            false,
          ];
          obj1003.methods["addEntity"] = func1192;
          func1192.definitionLine = 490;
          func1192.definitionModule = "kitty";
          var func1195 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1195.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 496
              lineNumber = 495
              onSelf = true;
              var call1196 = callmethod(this, "mctx", [0]);
              return call1196
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1195.paramCounts = [
            0,
          ];
          func1195.variableArities = [
            false,
          ];
          obj1003.methods["getContext"] = func1195;
          func1195.definitionLine = 494;
          func1195.definitionModule = "kitty";
          var func1197 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1197.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 500
              lineNumber = 499
              onSelf = true;
              var call1198 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1200 = callmethod(this, "canvasWidth", [0]);
              var quotient1202 = callmethod(call1200, "/", [1], call1198);
              return quotient1202
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1197.paramCounts = [
            0,
          ];
          func1197.variableArities = [
            false,
          ];
          obj1003.methods["moveWidthMultipler"] = func1197;
          func1197.definitionLine = 498;
          func1197.definitionModule = "kitty";
          var func1203 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1203.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 503
              onSelf = true;
              var call1204 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1206 = callmethod(this, "canvasHeight", [0]);
              var quotient1208 = callmethod(call1206, "/", [1], call1204);
              return quotient1208
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1203.paramCounts = [
            0,
          ];
          func1203.variableArities = [
            false,
          ];
          obj1003.methods["moveHeightMultipler"] = func1203;
          func1203.definitionLine = 502;
          func1203.definitionModule = "kitty";
          var func1209 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1209.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 508
              lineNumber = 487
              lineNumber = 507
              onSelf = true;
              var call1210 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1210
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1209.paramCounts = [
            1,
          ];
          func1209.variableArities = [
            false,
          ];
          obj1003.methods["setUpdateAction"] = func1209;
          func1209.definitionLine = 506;
          func1209.definitionModule = "kitty";
          var func1211 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1211.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 512
              lineNumber = 487
              lineNumber = 511
              onSelf = true;
              var call1212 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1212
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1211.paramCounts = [
            1,
          ];
          func1211.variableArities = [
            false,
          ];
          obj1003.methods["setDestroyAction"] = func1211;
          func1211.definitionLine = 510;
          func1211.definitionModule = "kitty";
          sourceObject = obj1003;
          lineNumber = 332
          obj1003.data["width"] = var_width__39__;
          var reader_kitty_width_1213 = function() {
            return this.data["width"];
          }
          obj1003.methods["width"] = reader_kitty_width_1213;
          obj1003.data["width"] = var_width__39__;
          var writer_kitty_width_1213 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1003.methods["width:="] = writer_kitty_width_1213;
          lineNumber = 333;
          moduleName = "kitty";
          lineNumber = 332
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 333
          obj1003.data["height"] = var_height__39__;
          var reader_kitty_height_1214 = function() {
            return this.data["height"];
          }
          obj1003.methods["height"] = reader_kitty_height_1214;
          obj1003.data["height"] = var_height__39__;
          var writer_kitty_height_1214 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1003.methods["height:="] = writer_kitty_height_1214;
          lineNumber = 334;
          moduleName = "kitty";
          lineNumber = 333
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 334
          obj1003.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1215 = function() {
            return this.data["tag"];
          }
          obj1003.methods["tag"] = reader_kitty_tag_1215;
          obj1003.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1215 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1003.methods["tag:="] = writer_kitty_tag_1215;
          lineNumber = 336;
          moduleName = "kitty";
          lineNumber = 334
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["background"] = undefined;
          var reader_kitty_background_1216 = function() {
            return this.data["background"];
          }
          obj1003.methods["background"] = reader_kitty_background_1216;
          obj1003.data["background"] = undefined;
          var writer_kitty_background_1216 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1003.methods["background:="] = writer_kitty_background_1216;
          reader_kitty_background_1216.confidential = true;
          writer_kitty_background_1216.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 337
          var string1217 = new GraceString("black");
          obj1003.data["backgroundColour"] = string1217;
          var reader_kitty_backgroundColour_1218 = function() {
            return this.data["backgroundColour"];
          }
          obj1003.methods["backgroundColour"] = reader_kitty_backgroundColour_1218;
          obj1003.data["backgroundColour"] = string1217;
          var writer_kitty_backgroundColour_1218 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1003.methods["backgroundColour:="] = writer_kitty_backgroundColour_1218;
          reader_kitty_backgroundColour_1218.confidential = true;
          writer_kitty_backgroundColour_1218.confidential = true;
          lineNumber = 339;
          moduleName = "kitty";
          lineNumber = 337
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1217)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["document"] = undefined;
          var reader_kitty_document_1219 = function() {
            return this.data["document"];
          }
          obj1003.methods["document"] = reader_kitty_document_1219;
          obj1003.data["document"] = undefined;
          var writer_kitty_document_1219 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1003.methods["document:="] = writer_kitty_document_1219;
          reader_kitty_document_1219.confidential = true;
          writer_kitty_document_1219.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1220 = function() {
            return this.data["backingCanvas"];
          }
          obj1003.methods["backingCanvas"] = reader_kitty_backingCanvas_1220;
          obj1003.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1220 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1003.methods["backingCanvas:="] = writer_kitty_backingCanvas_1220;
          reader_kitty_backingCanvas_1220.confidential = true;
          writer_kitty_backingCanvas_1220.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1221 = function() {
            return this.data["backingContext"];
          }
          obj1003.methods["backingContext"] = reader_kitty_backingContext_1221;
          obj1003.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1221 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1003.methods["backingContext:="] = writer_kitty_backingContext_1221;
          reader_kitty_backingContext_1221.confidential = true;
          writer_kitty_backingContext_1221.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["canvas"] = undefined;
          var reader_kitty_canvas_1222 = function() {
            return this.data["canvas"];
          }
          obj1003.methods["canvas"] = reader_kitty_canvas_1222;
          obj1003.data["canvas"] = undefined;
          var writer_kitty_canvas_1222 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1003.methods["canvas:="] = writer_kitty_canvas_1222;
          reader_kitty_canvas_1222.confidential = true;
          writer_kitty_canvas_1222.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1223 = function() {
            return this.data["canvasWidth"];
          }
          obj1003.methods["canvasWidth"] = reader_kitty_canvasWidth_1223;
          obj1003.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1223 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1003.methods["canvasWidth:="] = writer_kitty_canvasWidth_1223;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1224 = function() {
            return this.data["canvasHeight"];
          }
          obj1003.methods["canvasHeight"] = reader_kitty_canvasHeight_1224;
          obj1003.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1224 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1003.methods["canvasHeight:="] = writer_kitty_canvasHeight_1224;
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 348
          var call1225 = callmethod(var_collections,"list", [0]);
          var call1226 = callmethod(call1225,"new", [0]);
          obj1003.data["entities"] = call1226;
          var reader_kitty_entities_1227 = function() {
            return this.data["entities"];
          }
          obj1003.methods["entities"] = reader_kitty_entities_1227;
          obj1003.data["entities"] = call1226;
          var writer_kitty_entities_1227 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1003.methods["entities:="] = writer_kitty_entities_1227;
          reader_kitty_entities_1227.confidential = true;
          writer_kitty_entities_1227.confidential = true;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1226)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 350
          var bool1228 = new GraceBoolean(false)
          obj1003.data["isInit"] = bool1228;
          var reader_kitty_isInit_1229 = function() {
            return this.data["isInit"];
          }
          obj1003.methods["isInit"] = reader_kitty_isInit_1229;
          obj1003.data["isInit"] = bool1228;
          var writer_kitty_isInit_1229 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1003.methods["isInit:="] = writer_kitty_isInit_1229;
          reader_kitty_isInit_1229.confidential = true;
          writer_kitty_isInit_1229.confidential = true;
          lineNumber = 351;
          moduleName = "kitty";
          lineNumber = 350
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1228)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 351
          var bool1230 = new GraceBoolean(false)
          obj1003.data["isRunning"] = bool1230;
          var reader_kitty_isRunning_1231 = function() {
            return this.data["isRunning"];
          }
          obj1003.methods["isRunning"] = reader_kitty_isRunning_1231;
          obj1003.data["isRunning"] = bool1230;
          var writer_kitty_isRunning_1231 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1003.methods["isRunning:="] = writer_kitty_isRunning_1231;
          reader_kitty_isRunning_1231.confidential = true;
          writer_kitty_isRunning_1231.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1230)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["mctx"] = undefined;
          var reader_kitty_mctx_1232 = function() {
            return this.data["mctx"];
          }
          obj1003.methods["mctx"] = reader_kitty_mctx_1232;
          obj1003.data["mctx"] = undefined;
          var writer_kitty_mctx_1232 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1003.methods["mctx:="] = writer_kitty_mctx_1232;
          reader_kitty_mctx_1232.confidential = true;
          writer_kitty_mctx_1232.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          obj1003.data["ent"] = undefined;
          var reader_kitty_ent_1233 = function() {
            return this.data["ent"];
          }
          obj1003.methods["ent"] = reader_kitty_ent_1233;
          obj1003.data["ent"] = undefined;
          var writer_kitty_ent_1233 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1003.methods["ent:="] = writer_kitty_ent_1233;
          reader_kitty_ent_1233.confidential = true;
          writer_kitty_ent_1233.confidential = true;
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 358
          var block1234 = Grace_allocObject();
          block1234.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1234.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1234.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1234.methods["match"] = GraceBlock_match;
          block1234.methods["prefix?"] = GraceBlock_lift;
          block1234.receiver = this;
          block1234.className = 'block<kitty:358>';
          block1234.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1003.data["updateAction"] = block1234;
          var reader_kitty_updateAction_1235 = function() {
            return this.data["updateAction"];
          }
          obj1003.methods["updateAction"] = reader_kitty_updateAction_1235;
          obj1003.data["updateAction"] = block1234;
          var writer_kitty_updateAction_1235 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1003.methods["updateAction:="] = writer_kitty_updateAction_1235;
          reader_kitty_updateAction_1235.confidential = true;
          writer_kitty_updateAction_1235.confidential = true;
          lineNumber = 358;
          moduleName = "kitty";
          lineNumber = 357
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1234)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 360
          var block1236 = Grace_allocObject();
          block1236.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1236.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1236.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1236.methods["match"] = GraceBlock_match;
          block1236.methods["prefix?"] = GraceBlock_lift;
          block1236.receiver = this;
          block1236.className = 'block<kitty:360>';
          block1236.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1003.data["destroyAction"] = block1236;
          var reader_kitty_destroyAction_1237 = function() {
            return this.data["destroyAction"];
          }
          obj1003.methods["destroyAction"] = reader_kitty_destroyAction_1237;
          obj1003.data["destroyAction"] = block1236;
          var writer_kitty_destroyAction_1237 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1003.methods["destroyAction:="] = writer_kitty_destroyAction_1237;
          reader_kitty_destroyAction_1237.confidential = true;
          writer_kitty_destroyAction_1237.confidential = true;
          lineNumber = 360;
          moduleName = "kitty";
          lineNumber = 358
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1236)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1003.mutable = true;
          sourceObject = obj1003;
          lineNumber = 360
          onSelf = true;
          var call1238 = callmethod(this, "init", [0]);
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          sourceObject = obj1003;
          superDepth = origSuperDepth;
        }
        obj_init_1003.apply(obj1003, []);
        return obj1003
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1002.paramCounts = [
      3,
    ];
    func1002.variableArities = [
      false,
    ];
    obj1000.methods["new"] = func1002;
    func1002.definitionLine = 329;
    func1002.definitionModule = "kitty";
    var func1239 = function(argcv) {
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
        var obj1240 = Grace_allocObject();
        obj1240.definitionModule = "kitty";
        obj1240.definitionLine = 329;
        var inho1240 = inheritingObject;
        while (inho1240.superobj) inho1240 = inho1240.superobj;
        inho1240.superobj = obj1240;
        obj1240.data = inheritingObject.data;
        obj1240.outer = this;
        var reader_kitty_outer_1241 = function() {
          return this.outer;
        }
        obj1240.methods["outer"] = reader_kitty_outer_1241;
        function obj_init_1240() {
          var origSuperDepth = superDepth;
          superDepth = obj1240;
          obj1240.annotations = [];
          var func1242 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1242.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 371
              var if1243 = var_done;
              lineNumber = 367
              onSelf = true;
              var call1244 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1244)) {
                lineNumber = 369
                lineNumber = 368
                var bool1245 = new GraceBoolean(false)
                return bool1245
              }
              lineNumber = 372
              lineNumber = 348
              lineNumber = 371
              var call1246 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1247 = callmethod(this, "document:=", [1], call1246);
              lineNumber = 372
              lineNumber = 371
              lineNumber = 372
              var string1248 = new GraceString("standard-canvas");
              onSelf = true;
              var call1249 = callmethod(this, "document", [0]);
              var call1250 = callmethod(call1249,"getElementById", [1], string1248);
              onSelf = true;
              var call1251 = callmethod(this, "canvas:=", [1], call1250);
              lineNumber = 374
              lineNumber = 371
              lineNumber = 373
              onSelf = true;
              var call1252 = callmethod(this, "canvas", [0]);
              var call1253 = callmethod(call1252,"width", [0]);
              onSelf = true;
              var call1254 = callmethod(this, "canvasWidth:=", [1], call1253);
              lineNumber = 377
              lineNumber = 373
              lineNumber = 374
              onSelf = true;
              var call1255 = callmethod(this, "canvas", [0]);
              var call1256 = callmethod(call1255,"height", [0]);
              onSelf = true;
              var call1257 = callmethod(this, "canvasHeight:=", [1], call1256);
              lineNumber = 383
              var block1258 = Grace_allocObject();
              block1258.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1258.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1258.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1258.methods["match"] = GraceBlock_match;
              block1258.methods["prefix?"] = GraceBlock_lift;
              block1258.receiver = this;
              block1258.className = 'block<kitty:383>';
              block1258.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 379
                lineNumber = 378
                var bool1259 = new GraceBoolean(true)
                var_mouseDown = bool1259;
                lineNumber = 379
                onSelf = true;
                var call1260 = callmethod(this, "entities", [0]);
                lineNumber = 382
                var block1261 = Grace_allocObject();
                block1261.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1261.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1261.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1261.methods["match"] = GraceBlock_match;
                block1261.methods["prefix?"] = GraceBlock_lift;
                block1261.receiver = this;
                block1261.className = 'block<kitty:382>';
                block1261.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 380
                  var call1262 = callmethod(var_entity,"mouseDown", [0]);
                  return call1262;
                };
                var call1263 = callmethod(Grace_prelude,"for()do", [1, 1], call1260, block1261);
                return call1263;
              };
              var_mouseDownListener = block1258;
              lineNumber = 383
              var string1264 = new GraceString("mousedown");
              onSelf = true;
              var call1265 = callmethod(this, "canvas", [0]);
              var call1266 = callmethod(call1265,"addEventListener", [2], string1264, var_mouseDownListener);
              lineNumber = 391
              var block1267 = Grace_allocObject();
              block1267.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1267.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1267.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1267.methods["match"] = GraceBlock_match;
              block1267.methods["prefix?"] = GraceBlock_lift;
              block1267.receiver = this;
              block1267.className = 'block<kitty:391>';
              block1267.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 387
                lineNumber = 386
                var bool1268 = new GraceBoolean(false)
                var_mouseDown = bool1268;
                lineNumber = 387
                onSelf = true;
                var call1269 = callmethod(this, "entities", [0]);
                lineNumber = 390
                var block1270 = Grace_allocObject();
                block1270.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1270.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1270.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1270.methods["match"] = GraceBlock_match;
                block1270.methods["prefix?"] = GraceBlock_lift;
                block1270.receiver = this;
                block1270.className = 'block<kitty:390>';
                block1270.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 388
                  var call1271 = callmethod(var_entity,"mouseUp", [0]);
                  return call1271;
                };
                var call1272 = callmethod(Grace_prelude,"for()do", [1, 1], call1269, block1270);
                return call1272;
              };
              var_mouseUpListener = block1267;
              lineNumber = 391
              var string1273 = new GraceString("mouseup");
              onSelf = true;
              var call1274 = callmethod(this, "canvas", [0]);
              var call1275 = callmethod(call1274,"addEventListener", [2], string1273, var_mouseUpListener);
              lineNumber = 404
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
              block1276.className = 'block<kitty:404>';
              block1276.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 395
                lineNumber = 394
                onSelf = true;
                var call1277 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1279 = callmethod(this, "canvas", [0]);
                var call1280 = callmethod(call1279,"offsetWidth", [0]);
                onSelf = true;
                var call1282 = callmethod(this, "canvas", [0]);
                var call1283 = callmethod(call1282,"offsetLeft", [0]);
                var call1285 = callmethod(var_ev,"clientX", [0]);
                var diff1287 = callmethod(call1285, "-", [1], call1283);
                var quotient1289 = callmethod(diff1287, "/", [1], call1280);
                var prod1291 = callmethod(quotient1289, "*", [1], call1277);
                var var_x = prod1291;
                lineNumber = 395;
                moduleName = "kitty";
                lineNumber = 394
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 396
                lineNumber = 395
                onSelf = true;
                var call1292 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1294 = callmethod(this, "canvas", [0]);
                var call1295 = callmethod(call1294,"offsetHeight", [0]);
                onSelf = true;
                var call1297 = callmethod(this, "canvas", [0]);
                var call1298 = callmethod(call1297,"offsetTop", [0]);
                var call1300 = callmethod(var_ev,"clientY", [0]);
                var diff1302 = callmethod(call1300, "-", [1], call1298);
                var quotient1304 = callmethod(diff1302, "/", [1], call1295);
                var prod1306 = callmethod(quotient1304, "*", [1], call1292);
                var var_y = prod1306;
                lineNumber = 396;
                moduleName = "kitty";
                lineNumber = 395
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 396
                lineNumber = 395
                lineNumber = 396
                var call1307 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1308 = callmethod(var_mouse,"position:=", [1], call1307);
                lineNumber = 399
                onSelf = true;
                var call1309 = callmethod(this, "entities", [0]);
                lineNumber = 403
                var block1310 = Grace_allocObject();
                block1310.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1310.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1310.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1310.methods["match"] = GraceBlock_match;
                block1310.methods["prefix?"] = GraceBlock_lift;
                block1310.receiver = this;
                block1310.className = 'block<kitty:403>';
                block1310.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 400
                  var call1311 = callmethod(var_entity,"mouseEnter", [0]);
                  lineNumber = 401
                  var call1312 = callmethod(var_entity,"mouseExit", [0]);
                  return call1312;
                };
                var call1313 = callmethod(Grace_prelude,"for()do", [1, 1], call1309, block1310);
                return call1313;
              };
              var_mouseMoveListener = block1276;
              lineNumber = 404
              var string1314 = new GraceString("mousemove");
              onSelf = true;
              var call1315 = callmethod(this, "canvas", [0]);
              var call1316 = callmethod(call1315,"addEventListener", [2], string1314, var_mouseMoveListener);
              lineNumber = 414
              var block1317 = Grace_allocObject();
              block1317.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1317.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1317.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1317.methods["match"] = GraceBlock_match;
              block1317.methods["prefix?"] = GraceBlock_lift;
              block1317.receiver = this;
              block1317.className = 'block<kitty:414>';
              block1317.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 412
                var if1318 = var_done;
                lineNumber = 409
                var call1320 = callmethod(var_ev,"keyCode", [0]);
                var opresult1322 = callmethod(call1320, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1322)) {
                  lineNumber = 410
                  onSelf = true;
                  var call1323 = callmethod(this, "stop", [0]);
                  if1318 = call1323;
                }
                lineNumber = 413
                lineNumber = 412
                var call1324 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1324;
                return call1324;
              };
              var_keyDownListener = block1317;
              lineNumber = 414
              var string1325 = new GraceString("keydown");
              onSelf = true;
              var call1326 = callmethod(this, "document", [0]);
              var call1327 = callmethod(call1326,"addEventListener", [2], string1325, var_keyDownListener);
              lineNumber = 420
              var block1328 = Grace_allocObject();
              block1328.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1328.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1328.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1328.methods["match"] = GraceBlock_match;
              block1328.methods["prefix?"] = GraceBlock_lift;
              block1328.receiver = this;
              block1328.className = 'block<kitty:420>';
              block1328.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 419
                lineNumber = 418
                var call1329 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1329;
                return call1329;
              };
              var_keyUpListener = block1328;
              lineNumber = 420
              var string1330 = new GraceString("keyup");
              onSelf = true;
              var call1331 = callmethod(this, "document", [0]);
              var call1332 = callmethod(call1331,"addEventListener", [2], string1330, var_keyUpListener);
              lineNumber = 422
              lineNumber = 412
              lineNumber = 422
              var string1333 = new GraceString("canvas");
              var call1334 = callmethod(var_dom,"document", [0]);
              var call1335 = callmethod(call1334,"createElement", [1], string1333);
              onSelf = true;
              var call1336 = callmethod(this, "backingCanvas:=", [1], call1335);
              lineNumber = 424
              lineNumber = 422
              lineNumber = 423
              onSelf = true;
              var call1337 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1338 = callmethod(this, "backingCanvas", [0]);
              var call1339 = callmethod(call1338,"height:=", [1], call1337);
              lineNumber = 425
              lineNumber = 422
              lineNumber = 424
              onSelf = true;
              var call1340 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1341 = callmethod(this, "backingCanvas", [0]);
              var call1342 = callmethod(call1341,"width:=", [1], call1340);
              lineNumber = 425
              lineNumber = 422
              lineNumber = 425
              var string1343 = new GraceString("2d");
              onSelf = true;
              var call1344 = callmethod(this, "backingCanvas", [0]);
              var call1345 = callmethod(call1344,"getContext", [1], string1343);
              onSelf = true;
              var call1346 = callmethod(this, "backingContext:=", [1], call1345);
              lineNumber = 426
              lineNumber = 422
              lineNumber = 426
              var string1347 = new GraceString("2d");
              onSelf = true;
              var call1348 = callmethod(this, "canvas", [0]);
              var call1349 = callmethod(call1348,"getContext", [1], string1347);
              onSelf = true;
              var call1350 = callmethod(this, "mctx:=", [1], call1349);
              lineNumber = 429
              var string1351 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1352 = callmethod(this, "setBackground", [1], string1351);
              lineNumber = 432
              var call1353 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1354 = callmethod(call1353, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1355 = callmethod(call1354, "setWorld", [1], this);
              lineNumber = 435
              lineNumber = 434
              var_kitten = this;
              lineNumber = 436
              lineNumber = 432
              lineNumber = 435
              var bool1356 = new GraceBoolean(true)
              onSelf = true;
              var call1357 = callmethod(this, "isInit:=", [1], bool1356);
              return call1357
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1242.paramCounts = [
            0,
          ];
          func1242.variableArities = [
            false,
          ];
          obj1240.methods["init"] = func1242;
          func1242.definitionLine = 363;
          func1242.definitionModule = "kitty";
          var func1358 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1358.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 442
              lineNumber = 432
              lineNumber = 441
              var bool1359 = new GraceBoolean(true)
              onSelf = true;
              var call1360 = callmethod(this, "isRunning:=", [1], bool1359);
              lineNumber = 442
              var block1361 = Grace_allocObject();
              block1361.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1361.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1361.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1361.methods["match"] = GraceBlock_match;
              block1361.methods["prefix?"] = GraceBlock_lift;
              block1361.receiver = this;
              block1361.className = 'block<kitty:442>';
              block1361.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1362 = callmethod(this, "isRunning", [0]);
                return call1362;
              };
              lineNumber = 446
              var block1363 = Grace_allocObject();
              block1363.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1363.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1363.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1363.methods["match"] = GraceBlock_match;
              block1363.methods["prefix?"] = GraceBlock_lift;
              block1363.receiver = this;
              block1363.className = 'block<kitty:446>';
              block1363.real = function(
              ) {
                sourceObject = this;
                lineNumber = 443
                onSelf = true;
                var call1364 = callmethod(this, "tick", [0]);
                return call1364;
              };
              lineNumber = 442
              var call1365 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1361, new GraceNum(10), block1363);
              return call1365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1358.paramCounts = [
            0,
          ];
          func1358.variableArities = [
            false,
          ];
          obj1240.methods["start"] = func1358;
          func1358.definitionLine = 439;
          func1358.definitionModule = "kitty";
          var func1366 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 455
              lineNumber = 432
              lineNumber = 454
              onSelf = true;
              var call1367 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1368 = callmethod(this, "mctx", [0]);
              var call1369 = callmethod(call1368,"fillStyle:=", [1], call1367);
              lineNumber = 455
              onSelf = true;
              var call1370 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1371 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1372 = callmethod(this, "mctx", [0]);
              var call1373 = callmethod(call1372,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1370, call1371);
              lineNumber = 456
              onSelf = true;
              var call1374 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1375 = callmethod(this, "mctx", [0]);
              var call1376 = callmethod(call1375,"drawImage", [3], call1374, new GraceNum(0), new GraceNum(0));
              lineNumber = 457
              onSelf = true;
              var call1377 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1379 = callmethod(this, "canvasWidth", [0]);
              var quotient1381 = callmethod(call1379, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1383 = callmethod(this, "canvasHeight", [0]);
              var quotient1385 = callmethod(call1383, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1386 = callmethod(this, "background", [0]);
              var call1387 = callmethod(call1386,"draw", [4], call1377, quotient1381, quotient1385, new GraceNum(0));
              lineNumber = 460
              onSelf = true;
              var call1388 = callmethod(this, "updateAction", [0]);
              var call1389 = callmethod(call1388,"apply", [0]);
              lineNumber = 463
              onSelf = true;
              var call1390 = callmethod(this, "entities", [0]);
              lineNumber = 470
              var block1391 = Grace_allocObject();
              block1391.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1391.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1391.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1391.methods["match"] = GraceBlock_match;
              block1391.methods["prefix?"] = GraceBlock_lift;
              block1391.receiver = this;
              block1391.className = 'block<kitty:470>';
              block1391.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 464
                var call1392 = callmethod(var_entity,"tick", [0]);
                lineNumber = 466
                onSelf = true;
                var call1393 = callmethod(this, "mctx", [0]);
                var call1394 = callmethod(var_entity,"draw", [3], call1393, new GraceNum(0), new GraceNum(0));
                return call1394;
              };
              var call1395 = callmethod(Grace_prelude,"for()do", [1, 1], call1390, block1391);
              return call1395
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1366.paramCounts = [
            0,
          ];
          func1366.variableArities = [
            false,
          ];
          obj1240.methods["tick"] = func1366;
          func1366.definitionLine = 449;
          func1366.definitionModule = "kitty";
          var func1396 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1396.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 473
              var string1397 = new GraceString("WORLD STOPPING...");
              var call1398 = Grace_print(string1397);
              lineNumber = 475
              lineNumber = 464
              lineNumber = 474
              var bool1399 = new GraceBoolean(false)
              onSelf = true;
              var call1400 = callmethod(this, "isRunning:=", [1], bool1399);
              lineNumber = 475
              onSelf = true;
              var call1401 = callmethod(this, "destroyAction", [0]);
              var call1402 = callmethod(call1401,"apply", [0]);
              lineNumber = 476
              onSelf = true;
              var call1403 = callmethod(this, "entities", [0]);
              lineNumber = 479
              var block1404 = Grace_allocObject();
              block1404.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1404.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1404.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1404.methods["match"] = GraceBlock_match;
              block1404.methods["prefix?"] = GraceBlock_lift;
              block1404.receiver = this;
              block1404.className = 'block<kitty:479>';
              block1404.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 477
                var call1405 = callmethod(var_entity,"kill", [0]);
                return call1405;
              };
              var call1406 = callmethod(Grace_prelude,"for()do", [1, 1], call1403, block1404);
              lineNumber = 479
              var string1407 = new GraceString("mousedown");
              onSelf = true;
              var call1408 = callmethod(this, "canvas", [0]);
              var call1409 = callmethod(call1408,"removeEventListener", [2], string1407, var_mouseDownListener);
              lineNumber = 480
              var string1410 = new GraceString("mouseup");
              onSelf = true;
              var call1411 = callmethod(this, "canvas", [0]);
              var call1412 = callmethod(call1411,"removeEventListener", [2], string1410, var_mouseUpListener);
              lineNumber = 481
              var string1413 = new GraceString("mousemove");
              onSelf = true;
              var call1414 = callmethod(this, "canvas", [0]);
              var call1415 = callmethod(call1414,"removeEventListener", [2], string1413, var_mouseMoveListener);
              lineNumber = 482
              var string1416 = new GraceString("keydown");
              onSelf = true;
              var call1417 = callmethod(this, "document", [0]);
              var call1418 = callmethod(call1417,"removeEventListener", [2], string1416, var_keyDownListener);
              lineNumber = 483
              var string1419 = new GraceString("keyup");
              onSelf = true;
              var call1420 = callmethod(this, "document", [0]);
              var call1421 = callmethod(call1420,"removeEventListener", [2], string1419, var_keyUpListener);
              return call1421
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1396.paramCounts = [
            0,
          ];
          func1396.variableArities = [
            false,
          ];
          obj1240.methods["stop"] = func1396;
          func1396.definitionLine = 472;
          func1396.definitionModule = "kitty";
          var func1422 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1422.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 487
              lineNumber = 477
              lineNumber = 487
              onSelf = true;
              var call1423 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1424 = callmethod(this, "canvasHeight", [0]);
              var call1425 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1426 = callmethod(call1425, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1427 = callmethod(call1426, "Image()width()height", [1, 1, 1], var_url, call1423, call1424);
              onSelf = true;
              var call1428 = callmethod(this, "background:=", [1], call1427);
              return call1428
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
          obj1240.methods["setBackground"] = func1422;
          func1422.definitionLine = 486;
          func1422.definitionModule = "kitty";
          var func1429 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1429.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              onSelf = true;
              var call1430 = callmethod(this, "entities", [0]);
              var call1431 = callmethod(call1430,"push", [1], var_e);
              return call1431
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1429.paramCounts = [
            1,
          ];
          func1429.variableArities = [
            false,
          ];
          obj1240.methods["addEntity"] = func1429;
          func1429.definitionLine = 490;
          func1429.definitionModule = "kitty";
          var func1432 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1432.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 496
              lineNumber = 495
              onSelf = true;
              var call1433 = callmethod(this, "mctx", [0]);
              return call1433
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1432.paramCounts = [
            0,
          ];
          func1432.variableArities = [
            false,
          ];
          obj1240.methods["getContext"] = func1432;
          func1432.definitionLine = 494;
          func1432.definitionModule = "kitty";
          var func1434 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1434.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 500
              lineNumber = 499
              onSelf = true;
              var call1435 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1437 = callmethod(this, "canvasWidth", [0]);
              var quotient1439 = callmethod(call1437, "/", [1], call1435);
              return quotient1439
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1434.paramCounts = [
            0,
          ];
          func1434.variableArities = [
            false,
          ];
          obj1240.methods["moveWidthMultipler"] = func1434;
          func1434.definitionLine = 498;
          func1434.definitionModule = "kitty";
          var func1440 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 503
              onSelf = true;
              var call1441 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1443 = callmethod(this, "canvasHeight", [0]);
              var quotient1445 = callmethod(call1443, "/", [1], call1441);
              return quotient1445
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1440.paramCounts = [
            0,
          ];
          func1440.variableArities = [
            false,
          ];
          obj1240.methods["moveHeightMultipler"] = func1440;
          func1440.definitionLine = 502;
          func1440.definitionModule = "kitty";
          var func1446 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1446.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 508
              lineNumber = 487
              lineNumber = 507
              onSelf = true;
              var call1447 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1447
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1446.paramCounts = [
            1,
          ];
          func1446.variableArities = [
            false,
          ];
          obj1240.methods["setUpdateAction"] = func1446;
          func1446.definitionLine = 506;
          func1446.definitionModule = "kitty";
          var func1448 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1448.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 512
              lineNumber = 487
              lineNumber = 511
              onSelf = true;
              var call1449 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1449
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1448.paramCounts = [
            1,
          ];
          func1448.variableArities = [
            false,
          ];
          obj1240.methods["setDestroyAction"] = func1448;
          func1448.definitionLine = 510;
          func1448.definitionModule = "kitty";
          sourceObject = obj1240;
          lineNumber = 332
          obj1240.data["width"] = var_width__39__;
          var reader_kitty_width_1450 = function() {
            return this.data["width"];
          }
          obj1240.methods["width"] = reader_kitty_width_1450;
          obj1240.data["width"] = var_width__39__;
          var writer_kitty_width_1450 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1240.methods["width:="] = writer_kitty_width_1450;
          lineNumber = 333;
          moduleName = "kitty";
          lineNumber = 332
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 333
          obj1240.data["height"] = var_height__39__;
          var reader_kitty_height_1451 = function() {
            return this.data["height"];
          }
          obj1240.methods["height"] = reader_kitty_height_1451;
          obj1240.data["height"] = var_height__39__;
          var writer_kitty_height_1451 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1240.methods["height:="] = writer_kitty_height_1451;
          lineNumber = 334;
          moduleName = "kitty";
          lineNumber = 333
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 334
          obj1240.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1452 = function() {
            return this.data["tag"];
          }
          obj1240.methods["tag"] = reader_kitty_tag_1452;
          obj1240.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1452 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1240.methods["tag:="] = writer_kitty_tag_1452;
          lineNumber = 336;
          moduleName = "kitty";
          lineNumber = 334
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["background"] = undefined;
          var reader_kitty_background_1453 = function() {
            return this.data["background"];
          }
          obj1240.methods["background"] = reader_kitty_background_1453;
          obj1240.data["background"] = undefined;
          var writer_kitty_background_1453 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1240.methods["background:="] = writer_kitty_background_1453;
          reader_kitty_background_1453.confidential = true;
          writer_kitty_background_1453.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 337
          var string1454 = new GraceString("black");
          obj1240.data["backgroundColour"] = string1454;
          var reader_kitty_backgroundColour_1455 = function() {
            return this.data["backgroundColour"];
          }
          obj1240.methods["backgroundColour"] = reader_kitty_backgroundColour_1455;
          obj1240.data["backgroundColour"] = string1454;
          var writer_kitty_backgroundColour_1455 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1240.methods["backgroundColour:="] = writer_kitty_backgroundColour_1455;
          reader_kitty_backgroundColour_1455.confidential = true;
          writer_kitty_backgroundColour_1455.confidential = true;
          lineNumber = 339;
          moduleName = "kitty";
          lineNumber = 337
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1454)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["document"] = undefined;
          var reader_kitty_document_1456 = function() {
            return this.data["document"];
          }
          obj1240.methods["document"] = reader_kitty_document_1456;
          obj1240.data["document"] = undefined;
          var writer_kitty_document_1456 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1240.methods["document:="] = writer_kitty_document_1456;
          reader_kitty_document_1456.confidential = true;
          writer_kitty_document_1456.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1457 = function() {
            return this.data["backingCanvas"];
          }
          obj1240.methods["backingCanvas"] = reader_kitty_backingCanvas_1457;
          obj1240.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1457 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1240.methods["backingCanvas:="] = writer_kitty_backingCanvas_1457;
          reader_kitty_backingCanvas_1457.confidential = true;
          writer_kitty_backingCanvas_1457.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1458 = function() {
            return this.data["backingContext"];
          }
          obj1240.methods["backingContext"] = reader_kitty_backingContext_1458;
          obj1240.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1458 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1240.methods["backingContext:="] = writer_kitty_backingContext_1458;
          reader_kitty_backingContext_1458.confidential = true;
          writer_kitty_backingContext_1458.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["canvas"] = undefined;
          var reader_kitty_canvas_1459 = function() {
            return this.data["canvas"];
          }
          obj1240.methods["canvas"] = reader_kitty_canvas_1459;
          obj1240.data["canvas"] = undefined;
          var writer_kitty_canvas_1459 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1240.methods["canvas:="] = writer_kitty_canvas_1459;
          reader_kitty_canvas_1459.confidential = true;
          writer_kitty_canvas_1459.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1460 = function() {
            return this.data["canvasWidth"];
          }
          obj1240.methods["canvasWidth"] = reader_kitty_canvasWidth_1460;
          obj1240.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1460 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1240.methods["canvasWidth:="] = writer_kitty_canvasWidth_1460;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1461 = function() {
            return this.data["canvasHeight"];
          }
          obj1240.methods["canvasHeight"] = reader_kitty_canvasHeight_1461;
          obj1240.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1461 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1240.methods["canvasHeight:="] = writer_kitty_canvasHeight_1461;
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 348
          var call1462 = callmethod(var_collections,"list", [0]);
          var call1463 = callmethod(call1462,"new", [0]);
          obj1240.data["entities"] = call1463;
          var reader_kitty_entities_1464 = function() {
            return this.data["entities"];
          }
          obj1240.methods["entities"] = reader_kitty_entities_1464;
          obj1240.data["entities"] = call1463;
          var writer_kitty_entities_1464 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1240.methods["entities:="] = writer_kitty_entities_1464;
          reader_kitty_entities_1464.confidential = true;
          writer_kitty_entities_1464.confidential = true;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1463)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 350
          var bool1465 = new GraceBoolean(false)
          obj1240.data["isInit"] = bool1465;
          var reader_kitty_isInit_1466 = function() {
            return this.data["isInit"];
          }
          obj1240.methods["isInit"] = reader_kitty_isInit_1466;
          obj1240.data["isInit"] = bool1465;
          var writer_kitty_isInit_1466 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1240.methods["isInit:="] = writer_kitty_isInit_1466;
          reader_kitty_isInit_1466.confidential = true;
          writer_kitty_isInit_1466.confidential = true;
          lineNumber = 351;
          moduleName = "kitty";
          lineNumber = 350
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1465)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 351
          var bool1467 = new GraceBoolean(false)
          obj1240.data["isRunning"] = bool1467;
          var reader_kitty_isRunning_1468 = function() {
            return this.data["isRunning"];
          }
          obj1240.methods["isRunning"] = reader_kitty_isRunning_1468;
          obj1240.data["isRunning"] = bool1467;
          var writer_kitty_isRunning_1468 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1240.methods["isRunning:="] = writer_kitty_isRunning_1468;
          reader_kitty_isRunning_1468.confidential = true;
          writer_kitty_isRunning_1468.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1467)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["mctx"] = undefined;
          var reader_kitty_mctx_1469 = function() {
            return this.data["mctx"];
          }
          obj1240.methods["mctx"] = reader_kitty_mctx_1469;
          obj1240.data["mctx"] = undefined;
          var writer_kitty_mctx_1469 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1240.methods["mctx:="] = writer_kitty_mctx_1469;
          reader_kitty_mctx_1469.confidential = true;
          writer_kitty_mctx_1469.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          obj1240.data["ent"] = undefined;
          var reader_kitty_ent_1470 = function() {
            return this.data["ent"];
          }
          obj1240.methods["ent"] = reader_kitty_ent_1470;
          obj1240.data["ent"] = undefined;
          var writer_kitty_ent_1470 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1240.methods["ent:="] = writer_kitty_ent_1470;
          reader_kitty_ent_1470.confidential = true;
          writer_kitty_ent_1470.confidential = true;
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 358
          var block1471 = Grace_allocObject();
          block1471.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1471.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1471.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1471.methods["match"] = GraceBlock_match;
          block1471.methods["prefix?"] = GraceBlock_lift;
          block1471.receiver = this;
          block1471.className = 'block<kitty:358>';
          block1471.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1240.data["updateAction"] = block1471;
          var reader_kitty_updateAction_1472 = function() {
            return this.data["updateAction"];
          }
          obj1240.methods["updateAction"] = reader_kitty_updateAction_1472;
          obj1240.data["updateAction"] = block1471;
          var writer_kitty_updateAction_1472 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1240.methods["updateAction:="] = writer_kitty_updateAction_1472;
          reader_kitty_updateAction_1472.confidential = true;
          writer_kitty_updateAction_1472.confidential = true;
          lineNumber = 358;
          moduleName = "kitty";
          lineNumber = 357
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1471)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 360
          var block1473 = Grace_allocObject();
          block1473.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1473.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1473.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1473.methods["match"] = GraceBlock_match;
          block1473.methods["prefix?"] = GraceBlock_lift;
          block1473.receiver = this;
          block1473.className = 'block<kitty:360>';
          block1473.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1240.data["destroyAction"] = block1473;
          var reader_kitty_destroyAction_1474 = function() {
            return this.data["destroyAction"];
          }
          obj1240.methods["destroyAction"] = reader_kitty_destroyAction_1474;
          obj1240.data["destroyAction"] = block1473;
          var writer_kitty_destroyAction_1474 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1240.methods["destroyAction:="] = writer_kitty_destroyAction_1474;
          reader_kitty_destroyAction_1474.confidential = true;
          writer_kitty_destroyAction_1474.confidential = true;
          lineNumber = 360;
          moduleName = "kitty";
          lineNumber = 358
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1473)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1240.mutable = true;
          sourceObject = obj1240;
          lineNumber = 360
          onSelf = true;
          var call1475 = callmethod(this, "init", [0]);
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          sourceObject = obj1240;
          superDepth = origSuperDepth;
        }
        obj_init_1240.apply(inheritingObject, []);
        return obj1240
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1000.methods["new()object"] = func1239;
    var func1476 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 329
        var string1477 = new GraceString("class KittyWorld");
        return string1477
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1476.paramCounts = [
    ];
    func1476.variableArities = [
    ];
    obj1000.methods["asDebugString"] = func1476;
    func1476.definitionLine = 329;
    func1476.definitionModule = "kitty";
    sourceObject = obj1000;
    sourceObject = obj1000;
    superDepth = origSuperDepth;
  }
  obj_init_1000.apply(obj1000, []);
  var var_KittyWorld = obj1000;
  lineNumber = 517
  lineNumber = 526
  lineNumber = 560
  lineNumber = 575
  lineNumber = 579
  lineNumber = 584
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nconstructors-of:Point:\n x()y\nfresh:Entity()x()y:\n createImage\n setMouseUpAction\n mouseOverAction:=\n tag\n destroyAction:=\n posX:=\n strafe\n mouseUpAction:=\n mouseDragAction\n destroyAction\n turn\n posX\n posY\n mouseUpAction\n draw\n mouseDown\n updateAction\n image:=\n mouseDownAction\n setMouseDownAction\n mouseEnterAction\n mouseOver\n awake\n mouseUp\n setMouseOverAction\n getRotation\n tick\n updateAction:=\n getY\n mouseExitAction:=\n mouseDragAction:=\n posY:=\n mouseOverAction\n getX\n setLocation\n rotation:=\n mouseDownEntity:=\n mouseEnterAction:=\n kill\n setImage\n rotation\n mouseExitAction\n mouseDownAction:=\n move\n setUpdateAction\n mouseOver:=\n mouseDownEntity\n setX\n setY\n mouseExit\n setMouseEnterAction\n mouseEnter\n image\n setMouseExitAction\n setMouseDragAction\n tag:=\n setDestroyAction\nmethods-of:Point.x()y:\n x\n y\n left\n right\n down\n up\nconstructors-of:KittyImage:\n new\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n width:=\n imgTag\n getTag\n elements\n height\n width\n draw\n height:=\n drawImage\n elements:=\nconstructors-of:KittyWorld:\n new\nmethods-of:KittyEntity.new:\n createImage\n setMouseUpAction\n mouseOverAction:=\n tag\n destroyAction:=\n posX:=\n strafe\n mouseUpAction:=\n mouseDragAction\n destroyAction\n turn\n posX\n posY\n mouseUpAction\n draw\n updateAction\n mouseExitAction\n image:=\n mouseDownAction\n setMouseOverAction\n mouseEnterAction\n mouseOver\n awake\n mouseUp\n setMouseDownAction\n getRotation\n tick\n updateAction:=\n getY\n mouseExitAction:=\n mouseDragAction:=\n posY:=\n mouseOverAction\n getX\n setLocation\n rotation:=\n mouseDown\n mouseExit\n kill\n setImage\n rotation\n mouseDownEntity:=\n mouseDownAction:=\n move\n setMouseExitAction\n mouseOver:=\n mouseDownEntity\n setX\n setY\n image\n setMouseDragAction\n mouseEnter\n mouseEnterAction:=\n setUpdateAction\n setMouseEnterAction\n tag:=\n setDestroyAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n mouseDown\n mouseDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n width:=\n imgTag\n getTag\n elements\n height\n width\n draw\n height:=\n drawImage\n elements:=\nmethods-of:KittyWorld.new:\n tag\n destroyAction:=\n updateAction\n backingCanvas:=\n stop\n isInit:=\n destroyAction\n tick\n start\n isInit\n mctx:=\n canvas:=\n setDestroyAction\n height\n entities:=\n isRunning\n ent:=\n document\n backgroundColour:=\n canvasHeight:=\n moveHeightMultipler\n canvasWidth:=\n backgroundColour\n background:=\n updateAction:=\n canvas\n background\n getContext\n canvasWidth\n mctx\n backingCanvas\n height:=\n isRunning:=\n document:=\n width:=\n setBackground\n width\n entities\n addEntity\n ent\n backingContext:=\n setUpdateAction\n init\n moveWidthMultipler\n tag:=\n backingContext\n canvasHeight\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconfidential:\nfresh:World()width()height:\n tag\n destroyAction:=\n updateAction\n backingCanvas:=\n stop\n isInit:=\n destroyAction\n tick\n start\n isInit\n mctx:=\n canvas:=\n backingContext\n height\n entities:=\n isRunning\n ent:=\n document\n backgroundColour:=\n canvasHeight:=\n moveHeightMultipler\n canvasWidth:=\n backgroundColour\n background:=\n updateAction:=\n canvas\n background\n entities\n canvasWidth\n ent\n backingCanvas\n height:=\n isRunning:=\n document:=\n width:=\n setBackground\n width\n getContext\n addEntity\n mctx\n backingContext:=\n setUpdateAction\n init\n canvasHeight\n tag:=\n setDestroyAction\n moveWidthMultipler\n";
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
    "    var mouseDragAction := { setLocation(mouse.x, mouse.y) }",
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
    "        if (mouseOver && mouseDownEntity) then {",
    "            mouseDragAction.apply",
    "        }",
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
    "    method setMouseDragAction(action') {",
    "        mouseDragAction := action'",
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
