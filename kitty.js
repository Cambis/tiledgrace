function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 88
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
      lineNumber = 89
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 89;
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
        lineNumber = 90
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
  func0.definitionLine = 88;
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
      obj5.definitionLine = 89;
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
  lineNumber = 292
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
      lineNumber = 293
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 293;
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
        lineNumber = 294
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
  func8.definitionLine = 292;
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
      obj13.definitionLine = 293;
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
  lineNumber = 304
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
      lineNumber = 305
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
  func16.definitionLine = 304;
  func16.definitionModule = "kitty";
  lineNumber = 309
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
      lineNumber = 310
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
  func18.definitionLine = 309;
  func18.definitionModule = "kitty";
  lineNumber = 313
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
      lineNumber = 315
      lineNumber = 314
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
  func20.definitionLine = 313;
  func20.definitionModule = "kitty";
  lineNumber = 318
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
      lineNumber = 319
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
  func24.definitionLine = 318;
  func24.definitionModule = "kitty";
  lineNumber = 322
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
      lineNumber = 323
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
  func26.definitionLine = 322;
  func26.definitionModule = "kitty";
  lineNumber = 326
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
      lineNumber = 327
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
  func28.definitionLine = 326;
  func28.definitionModule = "kitty";
  lineNumber = 330
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
      lineNumber = 331
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
  func30.definitionLine = 330;
  func30.definitionModule = "kitty";
  lineNumber = 334
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
      lineNumber = 335
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
  func32.definitionLine = 334;
  func32.definitionModule = "kitty";
  lineNumber = 338
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
      lineNumber = 339
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
  func34.definitionLine = 338;
  func34.definitionModule = "kitty";
  lineNumber = 621
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
      lineNumber = 622
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 622;
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
        lineNumber = 623
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
  func36.definitionLine = 621;
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
      obj41.definitionLine = 622;
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
  lineNumber = 630
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
      lineNumber = 635
      lineNumber = 634
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 635;
      moduleName = "kitty";
      lineNumber = 634
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 638
      lineNumber = 635
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 638;
      moduleName = "kitty";
      lineNumber = 635
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 640
      lineNumber = 638
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 640;
      moduleName = "kitty";
      lineNumber = 638
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 642
      lineNumber = 640
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 642;
      moduleName = "kitty";
      lineNumber = 640
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 642
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 658
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
      block53.className = 'block<kitty:658>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 645
        lineNumber = 644
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 645;
        moduleName = "kitty";
        lineNumber = 644
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 646
        lineNumber = 645
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 646;
        moduleName = "kitty";
        lineNumber = 645
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 647
        lineNumber = 646
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 647;
        moduleName = "kitty";
        lineNumber = 646
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 651
        lineNumber = 647
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 651;
        moduleName = "kitty";
        lineNumber = 647
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 652
        lineNumber = 651
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
        lineNumber = 652;
        moduleName = "kitty";
        lineNumber = 651
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 655
        var if95 = var_done;
        lineNumber = 652
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 654
          lineNumber = 653
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 657
        lineNumber = 655
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 659
      lineNumber = 658
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
  func44.definitionLine = 630;
  func44.definitionModule = "kitty";
  lineNumber = 664
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 666
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 673
      var if101 = var_done;
      lineNumber = 668
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 669
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 671
        return var_done
      }
      lineNumber = 673
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 676
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
  func98.definitionLine = 664;
  func98.definitionModule = "kitty";
  lineNumber = 679
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 680
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
  func108.definitionLine = 679;
  func108.definitionModule = "kitty";
  lineNumber = 683
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
      lineNumber = 685
      lineNumber = 684
      var_m__95__world = var_world__39__;
      lineNumber = 686
      lineNumber = 685
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
  func110.definitionLine = 683;
  func110.definitionModule = "kitty";
  lineNumber = 688
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
      lineNumber = 689
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
  func112.definitionLine = 688;
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
  lineNumber = 680
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
  func115.definitionLine = 680;
  func115.definitionModule = "kitty";
  lineNumber = 680
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
  func116.definitionLine = 680;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 680
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
  func118.definitionLine = 680;
  func118.definitionModule = "kitty";
  lineNumber = 680
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
  func119.definitionLine = 680;
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
  lineNumber = 680
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
  func120.definitionLine = 680;
  func120.definitionModule = "kitty";
  lineNumber = 680
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
  func121.definitionLine = 680;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 680
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
  func122.definitionLine = 680;
  func122.definitionModule = "kitty";
  lineNumber = 680
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
  func123.definitionLine = 680;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 680
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
  func124.definitionLine = 680;
  func124.definitionModule = "kitty";
  lineNumber = 680
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
  func125.definitionLine = 680;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 680
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
  func126.definitionLine = 680;
  func126.definitionModule = "kitty";
  lineNumber = 680
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
  func127.definitionLine = 680;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 680
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
  func128.definitionLine = 680;
  func128.definitionModule = "kitty";
  lineNumber = 680
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
  func129.definitionLine = 680;
  func129.definitionModule = "kitty";
  lineNumber = 21
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 680
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
  func131.definitionLine = 680;
  func131.definitionModule = "kitty";
  lineNumber = 680
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
  func132.definitionLine = 680;
  func132.definitionModule = "kitty";
  lineNumber = 21;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_currentKeyDown)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'currentKeyDown' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 24
  lineNumber = 21
  var call133 = callmethod(var_dom,"window", [0]);
  var call134 = callmethod(call133,"Math", [0]);
  var var_math = call134;
  var func135 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func135.paramCounts[0])
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
  func135.paramCounts = [
    0,
  ];
  func135.variableArities = [
    false,
  ];
  this.methods["math"] = func135;
  func135.definitionLine = 21;
  func135.definitionModule = "kitty";
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
  var func136 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func136.paramCounts[0])
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
  func136.paramCounts = [
    0,
  ];
  func136.variableArities = [
    false,
  ];
  this.methods["kitten"] = func136;
  func136.definitionLine = 21;
  func136.definitionModule = "kitty";
  lineNumber = 21
  var func137 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func137.paramCounts[0])
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
  func137.paramCounts = [
    1,
  ];
  func137.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func137;
  func137.definitionLine = 21;
  func137.definitionModule = "kitty";
  lineNumber = 27
  var func138 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func138.paramCounts[0])
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
  func138.paramCounts = [
    0,
  ];
  func138.variableArities = [
    false,
  ];
  this.methods["Point"] = func138;
  func138.definitionLine = 27;
  func138.definitionModule = "kitty";
  var obj139 = Grace_allocObject();
  obj139.definitionModule = "kitty";
  obj139.definitionLine = 27;
  obj139.outer = this;
  var reader_kitty_outer_140 = function() {
    return this.outer;
  }
  obj139.methods["outer"] = reader_kitty_outer_140;
  function obj_init_139() {
    var origSuperDepth = superDepth;
    superDepth = obj139;
    obj139.annotations = [];
    var func141 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func141.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func141.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
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
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func144.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call146 = callmethod(this, "x", [0]);
              var diff148 = callmethod(call146, "-", [1], var_dx);
              onSelf = true;
              var call149 = callmethod(this, "y", [0]);
              var call150 = callmethod(var_Point,"x()sy", [1, 1], diff148, call149);
              return call150
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
          ];
          func144.variableArities = [
            false,
          ];
          obj142.methods["left"] = func144;
          func144.definitionLine = 30;
          func144.definitionModule = "kitty";
          var func151 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func151.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call153 = callmethod(this, "x", [0]);
              var opresult155 = callmethod(call153, "+", [1], var_dx);
              onSelf = true;
              var call156 = callmethod(this, "y", [0]);
              var call157 = callmethod(var_Point,"x()y", [1, 1], opresult155, call156);
              return call157
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func151.paramCounts = [
            1,
          ];
          func151.variableArities = [
            false,
          ];
          obj142.methods["right"] = func151;
          func151.definitionLine = 31;
          func151.definitionModule = "kitty";
          var func158 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func158.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              onSelf = true;
              var call159 = callmethod(this, "x", [0]);
              onSelf = true;
              var call161 = callmethod(this, "y", [0]);
              var diff163 = callmethod(call161, "-", [1], var_dy);
              var call164 = callmethod(var_Point,"x()y", [1, 1], call159, diff163);
              return call164
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func158.paramCounts = [
            1,
          ];
          func158.variableArities = [
            false,
          ];
          obj142.methods["up"] = func158;
          func158.definitionLine = 32;
          func158.definitionModule = "kitty";
          var func165 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              onSelf = true;
              var call166 = callmethod(this, "x", [0]);
              onSelf = true;
              var call168 = callmethod(this, "y", [0]);
              var opresult170 = callmethod(call168, "+", [1], var_dy);
              var call171 = callmethod(var_Point,"x()y", [1, 1], call166, opresult170);
              return call171
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
          obj142.methods["down"] = func165;
          func165.definitionLine = 33;
          func165.definitionModule = "kitty";
          sourceObject = obj142;
          lineNumber = 28
          obj142.data["x"] = var_x__39__;
          var reader_kitty_x_172 = function() {
            return this.data["x"];
          }
          reader_kitty_x_172.def = true;
          obj142.methods["x"] = reader_kitty_x_172;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj142;
          lineNumber = 29
          obj142.data["y"] = var_y__39__;
          var reader_kitty_y_173 = function() {
            return this.data["y"];
          }
          reader_kitty_y_173.def = true;
          obj142.methods["y"] = reader_kitty_y_173;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj142;
          sourceObject = obj142;
          sourceObject = obj142;
          sourceObject = obj142;
          superDepth = origSuperDepth;
        }
        obj_init_142.apply(obj142, []);
        return obj142
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func141.paramCounts = [
      1,
      1,
    ];
    func141.variableArities = [
      false,
      false,
    ];
    obj139.methods["x()y"] = func141;
    func141.definitionLine = 27;
    func141.definitionModule = "kitty";
    var func174 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj175 = Grace_allocObject();
        obj175.definitionModule = "kitty";
        obj175.definitionLine = 27;
        var inho175 = inheritingObject;
        while (inho175.superobj) inho175 = inho175.superobj;
        inho175.superobj = obj175;
        obj175.data = inheritingObject.data;
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
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call179 = callmethod(this, "x", [0]);
              var diff181 = callmethod(call179, "-", [1], var_dx);
              onSelf = true;
              var call182 = callmethod(this, "y", [0]);
              var call183 = callmethod(var_Point,"x()sy", [1, 1], diff181, call182);
              return call183
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func177.paramCounts = [
            1,
          ];
          func177.variableArities = [
            false,
          ];
          obj175.methods["left"] = func177;
          func177.definitionLine = 30;
          func177.definitionModule = "kitty";
          var func184 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call186 = callmethod(this, "x", [0]);
              var opresult188 = callmethod(call186, "+", [1], var_dx);
              onSelf = true;
              var call189 = callmethod(this, "y", [0]);
              var call190 = callmethod(var_Point,"x()y", [1, 1], opresult188, call189);
              return call190
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func184.paramCounts = [
            1,
          ];
          func184.variableArities = [
            false,
          ];
          obj175.methods["right"] = func184;
          func184.definitionLine = 31;
          func184.definitionModule = "kitty";
          var func191 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func191.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              onSelf = true;
              var call192 = callmethod(this, "x", [0]);
              onSelf = true;
              var call194 = callmethod(this, "y", [0]);
              var diff196 = callmethod(call194, "-", [1], var_dy);
              var call197 = callmethod(var_Point,"x()y", [1, 1], call192, diff196);
              return call197
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func191.paramCounts = [
            1,
          ];
          func191.variableArities = [
            false,
          ];
          obj175.methods["up"] = func191;
          func191.definitionLine = 32;
          func191.definitionModule = "kitty";
          var func198 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              onSelf = true;
              var call199 = callmethod(this, "x", [0]);
              onSelf = true;
              var call201 = callmethod(this, "y", [0]);
              var opresult203 = callmethod(call201, "+", [1], var_dy);
              var call204 = callmethod(var_Point,"x()y", [1, 1], call199, opresult203);
              return call204
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
          obj175.methods["down"] = func198;
          func198.definitionLine = 33;
          func198.definitionModule = "kitty";
          sourceObject = obj175;
          lineNumber = 28
          obj175.data["x"] = var_x__39__;
          var reader_kitty_x_205 = function() {
            return this.data["x"];
          }
          reader_kitty_x_205.def = true;
          obj175.methods["x"] = reader_kitty_x_205;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj175;
          lineNumber = 29
          obj175.data["y"] = var_y__39__;
          var reader_kitty_y_206 = function() {
            return this.data["y"];
          }
          reader_kitty_y_206.def = true;
          obj175.methods["y"] = reader_kitty_y_206;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          sourceObject = obj175;
          superDepth = origSuperDepth;
        }
        obj_init_175.apply(inheritingObject, []);
        return obj175
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj139.methods["x()y()object"] = func174;
    var func207 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 27
        var string208 = new GraceString("class Point");
        return string208
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func207.paramCounts = [
    ];
    func207.variableArities = [
    ];
    obj139.methods["asDebugString"] = func207;
    func207.definitionLine = 27;
    func207.definitionModule = "kitty";
    sourceObject = obj139;
    sourceObject = obj139;
    superDepth = origSuperDepth;
  }
  obj_init_139.apply(obj139, []);
  var var_Point = obj139;
  lineNumber = 36
  var obj209 = Grace_allocObject();
  obj209.definitionModule = "kitty";
  obj209.definitionLine = 36;
  obj209.outer = this;
  var reader_kitty_outer_210 = function() {
    return this.outer;
  }
  obj209.methods["outer"] = reader_kitty_outer_210;
  function obj_init_209() {
    var origSuperDepth = superDepth;
    superDepth = obj209;
    obj209.annotations = [];
    var func211 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func211.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 39
        onSelf = true;
        var call212 = callmethod(this, "position", [0]);
        var call213 = callmethod(call212,"x", [0]);
        return call213
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
    obj209.methods["x"] = func211;
    func211.definitionLine = 38;
    func211.definitionModule = "kitty";
    var func214 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func214.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 42
        onSelf = true;
        var call215 = callmethod(this, "position", [0]);
        var call216 = callmethod(call215,"y", [0]);
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
    obj209.methods["y"] = func214;
    func214.definitionLine = 41;
    func214.definitionModule = "kitty";
    var func217 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func217.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 45
        onSelf = true;
        var call218 = callmethod(this, "position", [0]);
        return call218
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
    obj209.methods["location"] = func217;
    func217.definitionLine = 44;
    func217.definitionModule = "kitty";
    sourceObject = obj209;
    lineNumber = 37
    var call219 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj209.data["position"] = call219;
    var reader_kitty_position_220 = function() {
      return this.data["position"];
    }
    obj209.methods["position"] = reader_kitty_position_220;
    obj209.data["position"] = call219;
    var writer_kitty_position_220 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj209.methods["position:="] = writer_kitty_position_220;
    lineNumber = 37;
    moduleName = "kitty";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call219)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj209.mutable = true;
    sourceObject = obj209;
    sourceObject = obj209;
    sourceObject = obj209;
    superDepth = origSuperDepth;
  }
  obj_init_209.apply(obj209, []);
  var var_mouse = obj209;
  lineNumber = 42
  var func221 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func221.paramCounts[0])
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
  func221.paramCounts = [
    0,
  ];
  func221.variableArities = [
    false,
  ];
  this.methods["mouse"] = func221;
  func221.definitionLine = 42;
  func221.definitionModule = "kitty";
  lineNumber = 36;
  moduleName = "kitty";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 52
  lineNumber = 49
  var bool222 = new GraceBoolean(false)
  var var_mouseOverEntity = bool222;
  lineNumber = 42
  var func223 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func223.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseOverEntity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 49
      return var_mouseOverEntity
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func223.paramCounts = [
    0,
  ];
  func223.variableArities = [
    false,
  ];
  this.methods["mouseOverEntity"] = func223;
  func223.definitionLine = 42;
  func223.definitionModule = "kitty";
  lineNumber = 42
  var func224 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func224.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseOverEntity:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseOverEntity = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func224.paramCounts = [
    1,
  ];
  func224.variableArities = [
    false,
  ];
  this.methods["mouseOverEntity:="] = func224;
  func224.definitionLine = 42;
  func224.definitionModule = "kitty";
  lineNumber = 52;
  moduleName = "kitty";
  lineNumber = 49
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouseOverEntity)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'mouseOverEntity' to be of type Unknown"))
  lineNumber = 52
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
  func225.definitionLine = 52;
  func225.definitionModule = "kitty";
  var obj226 = Grace_allocObject();
  obj226.definitionModule = "kitty";
  obj226.definitionLine = 52;
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
        obj229.definitionLine = 52;
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
              lineNumber = 67
              var call232 = callmethod(var_ctx,"save", [0]);
              lineNumber = 68
              var call233 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 69
              var prod237 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient239 = callmethod(prod237, "/", [1], new GraceNum(180));
              var call240 = callmethod(var_ctx,"rotate", [1], quotient239);
              lineNumber = 70
              onSelf = true;
              var call241 = callmethod(this, "elements", [0]);
              lineNumber = 73
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
              block242.className = 'block<kitty:73>';
              block242.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 71
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
              lineNumber = 73
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
          func231.definitionLine = 65;
          func231.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 78
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
          func258.definitionLine = 77;
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
              lineNumber = 82
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
          func260.definitionLine = 81;
          func260.definitionModule = "kitty";
          sourceObject = obj229;
          lineNumber = 56
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
          lineNumber = 56;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call265)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj229;
          lineNumber = 59
          lineNumber = 56
          lineNumber = 57
          onSelf = true;
          var call267 = callmethod(this, "imgTag", [0]);
          var call268 = callmethod(call267,"src:=", [1], var_url__39__);
          sourceObject = obj229;
          lineNumber = 59
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
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call270)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj229.mutable = true;
          sourceObject = obj229;
          lineNumber = 60
          onSelf = true;
          var call272 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call273 = callmethod(this, "elements", [0]);
          var call274 = callmethod(call273,"push", [1], call272);
          sourceObject = obj229;
          lineNumber = 62
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
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 62
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj229.mutable = true;
          sourceObject = obj229;
          lineNumber = 63
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
          lineNumber = 65;
          moduleName = "kitty";
          lineNumber = 63
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
    func228.definitionLine = 52;
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
        obj278.definitionLine = 52;
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
              lineNumber = 67
              var call281 = callmethod(var_ctx,"save", [0]);
              lineNumber = 68
              var call282 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 69
              var prod286 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient288 = callmethod(prod286, "/", [1], new GraceNum(180));
              var call289 = callmethod(var_ctx,"rotate", [1], quotient288);
              lineNumber = 70
              onSelf = true;
              var call290 = callmethod(this, "elements", [0]);
              lineNumber = 73
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
              block291.className = 'block<kitty:73>';
              block291.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 71
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
              lineNumber = 73
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
          func280.definitionLine = 65;
          func280.definitionModule = "kitty";
          var func307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 78
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
          func307.definitionLine = 77;
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
              lineNumber = 82
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
          func309.definitionLine = 81;
          func309.definitionModule = "kitty";
          sourceObject = obj278;
          lineNumber = 56
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
          lineNumber = 56;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call314)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj278;
          lineNumber = 59
          lineNumber = 56
          lineNumber = 57
          onSelf = true;
          var call316 = callmethod(this, "imgTag", [0]);
          var call317 = callmethod(call316,"src:=", [1], var_url__39__);
          sourceObject = obj278;
          lineNumber = 59
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
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call319)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj278.mutable = true;
          sourceObject = obj278;
          lineNumber = 60
          onSelf = true;
          var call321 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call322 = callmethod(this, "elements", [0]);
          var call323 = callmethod(call322,"push", [1], call321);
          sourceObject = obj278;
          lineNumber = 62
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
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 62
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj278.mutable = true;
          sourceObject = obj278;
          lineNumber = 63
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
          lineNumber = 65;
          moduleName = "kitty";
          lineNumber = 63
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
        lineNumber = 52
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
    func326.definitionLine = 52;
    func326.definitionModule = "kitty";
    sourceObject = obj226;
    sourceObject = obj226;
    superDepth = origSuperDepth;
  }
  obj_init_226.apply(obj226, []);
  var var_KittyImage = obj226;
  lineNumber = 88
  lineNumber = 95
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
  func328.definitionLine = 95;
  func328.definitionModule = "kitty";
  var obj329 = Grace_allocObject();
  obj329.definitionModule = "kitty";
  obj329.definitionLine = 95;
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
        obj332.definitionLine = 95;
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
              lineNumber = 123
              var string335 = new GraceString("realyee.png");
              onSelf = true;
              var call336 = callmethod(this, "createImage", [1], string335);
              lineNumber = 125
              lineNumber = 124
              var_kitten = this;
              lineNumber = 125
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
          func334.definitionLine = 122;
          func334.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              onSelf = true;
              var call339 = callmethod(this, "updateAction", [0]);
              var call340 = callmethod(call339,"apply", [0]);
              lineNumber = 138
              var if341 = var_done;
              lineNumber = 133
              onSelf = true;
              var call342 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call342)) {
                lineNumber = 134
                onSelf = true;
                var call343 = callmethod(this, "mouseOverAction", [0]);
                var call344 = callmethod(call343,"apply", [0]);
                if341 = call344;
              }
              lineNumber = 141
              var if345 = var_done;
              lineNumber = 138
              onSelf = true;
              var call346 = callmethod(this, "mouseDragStart", [0]);
              var call348 = callmethod(var_mouse,"position", [0]);
              var opresult350 = callmethod(call348, "!=", [1], call346);
              onSelf = true;
              var call352 = callmethod(this, "mouseDownEntity", [0]);
              var opresult354 = callmethod(call352, "&&", [1], opresult350);
              if (Grace_isTrue(opresult354)) {
                lineNumber = 139
                onSelf = true;
                var call355 = callmethod(this, "mouseDragAction", [0]);
                var call356 = callmethod(call355,"apply", [0]);
                if345 = call356;
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
          func338.definitionLine = 128;
          func338.definitionModule = "kitty";
          var func357 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              onSelf = true;
              var call358 = callmethod(this, "destroyAction", [0]);
              var call359 = callmethod(call358,"apply", [0]);
              return call359
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func357.paramCounts = [
            0,
          ];
          func357.variableArities = [
            false,
          ];
          obj332.methods["kill"] = func357;
          func357.definitionLine = 143;
          func357.definitionModule = "kitty";
          var func360 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func360.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              var if361 = var_done;
              lineNumber = 149
              onSelf = true;
              var call362 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call362)) {
                lineNumber = 151
                lineNumber = 144
                lineNumber = 150
                var call363 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call364 = callmethod(this, "mouseDragStart:=", [1], call363);
                lineNumber = 151
                onSelf = true;
                var call365 = callmethod(this, "mouseDownAction", [0]);
                var call366 = callmethod(call365,"apply", [0]);
                lineNumber = 153
                lineNumber = 151
                lineNumber = 152
                var bool367 = new GraceBoolean(true)
                onSelf = true;
                var call368 = callmethod(this, "mouseDownEntity:=", [1], bool367);
                lineNumber = 154
                lineNumber = 153
                var bool369 = new GraceBoolean(true)
                return bool369
              }
              lineNumber = 156
              lineNumber = 155
              var bool370 = new GraceBoolean(false)
              return bool370
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func360.paramCounts = [
            0,
          ];
          func360.variableArities = [
            false,
          ];
          obj332.methods["mouseDown"] = func360;
          func360.definitionLine = 148;
          func360.definitionModule = "kitty";
          var func371 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func371.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 165
              var if372 = var_done;
              lineNumber = 159
              onSelf = true;
              var call373 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call373)) {
                lineNumber = 161
                lineNumber = 151
                lineNumber = 160
                var call374 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call375 = callmethod(this, "mouseDragStart:=", [1], call374);
                lineNumber = 161
                onSelf = true;
                var call376 = callmethod(this, "mouseUpAction", [0]);
                var call377 = callmethod(call376,"apply", [0]);
                lineNumber = 163
                lineNumber = 161
                lineNumber = 162
                var bool378 = new GraceBoolean(false)
                onSelf = true;
                var call379 = callmethod(this, "mouseDownEntity:=", [1], bool378);
                lineNumber = 164
                lineNumber = 163
                var bool380 = new GraceBoolean(true)
                return bool380
              }
              lineNumber = 166
              lineNumber = 165
              var bool381 = new GraceBoolean(false)
              return bool381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func371.paramCounts = [
            0,
          ];
          func371.variableArities = [
            false,
          ];
          obj332.methods["mouseUp"] = func371;
          func371.definitionLine = 158;
          func371.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              var if383 = var_done;
              lineNumber = 169
              onSelf = true;
              var call384 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call384)) {
                lineNumber = 171
                lineNumber = 170
                var bool385 = new GraceBoolean(false)
                return bool385
              }
              lineNumber = 173
              lineNumber = 172
              onSelf = true;
              var call387 = callmethod(this, "image", [0]);
              var call388 = callmethod(call387,"width", [0]);
              var quotient390 = callmethod(call388, "/", [1], new GraceNum(2));
              var var_w = quotient390;
              lineNumber = 173;
              moduleName = "kitty";
              lineNumber = 172
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 174
              lineNumber = 173
              onSelf = true;
              var call392 = callmethod(this, "image", [0]);
              var call393 = callmethod(call392,"height", [0]);
              var quotient395 = callmethod(call393, "/", [1], new GraceNum(2));
              var var_h = quotient395;
              lineNumber = 174;
              moduleName = "kitty";
              lineNumber = 173
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 174
              lineNumber = 175
              onSelf = true;
              var call397 = callmethod(this, "posX", [0]);
              var diff399 = callmethod(call397, "-", [1], var_w);
              onSelf = true;
              var call401 = callmethod(this, "posY", [0]);
              var diff403 = callmethod(call401, "-", [1], var_h);
              var call404 = callmethod(var_Point,"x()y", [1, 1], diff399, diff403);
              onSelf = true;
              var call406 = callmethod(this, "posX", [0]);
              var diff408 = callmethod(call406, "-", [1], var_w);
              onSelf = true;
              var call410 = callmethod(this, "posY", [0]);
              var opresult412 = callmethod(call410, "+", [1], var_h);
              var call413 = callmethod(var_Point,"x()y", [1, 1], diff408, opresult412);
              lineNumber = 176
              onSelf = true;
              var call415 = callmethod(this, "posX", [0]);
              var opresult417 = callmethod(call415, "+", [1], var_w);
              onSelf = true;
              var call419 = callmethod(this, "posY", [0]);
              var opresult421 = callmethod(call419, "+", [1], var_h);
              var call422 = callmethod(var_Point,"x()y", [1, 1], opresult417, opresult421);
              onSelf = true;
              var call424 = callmethod(this, "posX", [0]);
              var opresult426 = callmethod(call424, "+", [1], var_w);
              onSelf = true;
              var call428 = callmethod(this, "posY", [0]);
              var diff430 = callmethod(call428, "-", [1], var_h);
              var call431 = callmethod(var_Point,"x()y", [1, 1], opresult426, diff430);
              lineNumber = 174
              var call432 = callmethod(var_collections,"list", [0]);
              var call433 = callmethod(call432,"new", [4], call404, call413, call422, call431);
              var var_poly = call433;
              lineNumber = 174;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 183
              var if434 = var_done;
              lineNumber = 178
              var call435 = callmethod(var_mouse,"location", [0]);
              var call436 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call437 = callmethod(call436, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call438 = callmethod(call437, "pointInPolygon", [2], call435, var_poly);
              if (Grace_isTrue(call438)) {
                lineNumber = 179
                onSelf = true;
                var call439 = callmethod(this, "mouseEnterAction", [0]);
                var call440 = callmethod(call439,"apply", [0]);
                lineNumber = 181
                lineNumber = 179
                lineNumber = 180
                var bool441 = new GraceBoolean(true)
                onSelf = true;
                var call442 = callmethod(this, "mouseOver:=", [1], bool441);
                lineNumber = 182
                lineNumber = 181
                var bool443 = new GraceBoolean(true)
                return bool443
              }
              return if434
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func382.paramCounts = [
            0,
          ];
          func382.variableArities = [
            false,
          ];
          obj332.methods["mouseEnter"] = func382;
          func382.definitionLine = 168;
          func382.definitionModule = "kitty";
          var func444 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func444.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              var if445 = var_done;
              lineNumber = 186
              onSelf = true;
              var call446 = callmethod(this, "mouseOver", [0]);
              var call447 = callmethod(call446,"prefix!", [0]);
              if (Grace_isTrue(call447)) {
                lineNumber = 188
                lineNumber = 187
                var bool448 = new GraceBoolean(false)
                return bool448
              }
              lineNumber = 190
              lineNumber = 189
              onSelf = true;
              var call450 = callmethod(this, "image", [0]);
              var call451 = callmethod(call450,"width", [0]);
              var quotient453 = callmethod(call451, "/", [1], new GraceNum(2));
              var var_w = quotient453;
              lineNumber = 190;
              moduleName = "kitty";
              lineNumber = 189
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 191
              lineNumber = 190
              onSelf = true;
              var call455 = callmethod(this, "image", [0]);
              var call456 = callmethod(call455,"height", [0]);
              var quotient458 = callmethod(call456, "/", [1], new GraceNum(2));
              var var_h = quotient458;
              lineNumber = 191;
              moduleName = "kitty";
              lineNumber = 190
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 191
              lineNumber = 192
              onSelf = true;
              var call460 = callmethod(this, "posX", [0]);
              var diff462 = callmethod(call460, "-", [1], var_w);
              onSelf = true;
              var call464 = callmethod(this, "posY", [0]);
              var diff466 = callmethod(call464, "-", [1], var_h);
              var call467 = callmethod(var_Point,"x()y", [1, 1], diff462, diff466);
              onSelf = true;
              var call469 = callmethod(this, "posX", [0]);
              var diff471 = callmethod(call469, "-", [1], var_w);
              onSelf = true;
              var call473 = callmethod(this, "posY", [0]);
              var opresult475 = callmethod(call473, "+", [1], var_h);
              var call476 = callmethod(var_Point,"x()y", [1, 1], diff471, opresult475);
              lineNumber = 193
              onSelf = true;
              var call478 = callmethod(this, "posX", [0]);
              var opresult480 = callmethod(call478, "+", [1], var_w);
              onSelf = true;
              var call482 = callmethod(this, "posY", [0]);
              var opresult484 = callmethod(call482, "+", [1], var_h);
              var call485 = callmethod(var_Point,"x()y", [1, 1], opresult480, opresult484);
              onSelf = true;
              var call487 = callmethod(this, "posX", [0]);
              var opresult489 = callmethod(call487, "+", [1], var_w);
              onSelf = true;
              var call491 = callmethod(this, "posY", [0]);
              var diff493 = callmethod(call491, "-", [1], var_h);
              var call494 = callmethod(var_Point,"x()y", [1, 1], opresult489, diff493);
              lineNumber = 191
              var call495 = callmethod(var_collections,"list", [0]);
              var call496 = callmethod(call495,"new", [4], call467, call476, call485, call494);
              var var_poly = call496;
              lineNumber = 191;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 200
              var if497 = var_done;
              lineNumber = 195
              onSelf = true;
              var call498 = callmethod(this, "mouseOver", [0]);
              var call500 = callmethod(var_mouse,"location", [0]);
              var call501 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call502 = callmethod(call501, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call503 = callmethod(call502, "pointInPolygon", [2], call500, var_poly);
              var call504 = callmethod(call503,"prefix!", [0]);
              var opresult506 = callmethod(call504, "&&", [1], call498);
              if (Grace_isTrue(opresult506)) {
                lineNumber = 196
                onSelf = true;
                var call507 = callmethod(this, "mouseExitAction", [0]);
                var call508 = callmethod(call507,"apply", [0]);
                lineNumber = 198
                lineNumber = 196
                lineNumber = 197
                var bool509 = new GraceBoolean(false)
                onSelf = true;
                var call510 = callmethod(this, "mouseOver:=", [1], bool509);
                lineNumber = 199
                lineNumber = 198
                var bool511 = new GraceBoolean(true)
                return bool511
              }
              return if497
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func444.paramCounts = [
            0,
          ];
          func444.variableArities = [
            false,
          ];
          obj332.methods["mouseExit"] = func444;
          func444.definitionLine = 185;
          func444.definitionModule = "kitty";
          var func512 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func512.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 204
              lineNumber = 196
              lineNumber = 204
              onSelf = true;
              var call515 = callmethod(this, "rotation", [0]);
              var prod517 = callmethod(call515, "*", [1], new GraceNum(3.14159));
              var quotient519 = callmethod(prod517, "/", [1], new GraceNum(180));
              var call520 = callmethod(var_math,"cos", [1], quotient519);
              var call522 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod525 = callmethod(var_distance, "*", [1], call522);
              var prod527 = callmethod(prod525, "*", [1], call520);
              onSelf = true;
              var call529 = callmethod(this, "posX", [0]);
              var opresult531 = callmethod(call529, "+", [1], prod527);
              onSelf = true;
              var call532 = callmethod(this, "posX:=", [1], opresult531);
              lineNumber = 205
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call535 = callmethod(this, "rotation", [0]);
              var prod537 = callmethod(call535, "*", [1], new GraceNum(3.14159));
              var quotient539 = callmethod(prod537, "/", [1], new GraceNum(180));
              var call540 = callmethod(var_math,"sin", [1], quotient539);
              var call542 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod545 = callmethod(var_distance, "*", [1], call542);
              var prod547 = callmethod(prod545, "*", [1], call540);
              onSelf = true;
              var call549 = callmethod(this, "posY", [0]);
              var opresult551 = callmethod(call549, "+", [1], prod547);
              onSelf = true;
              var call552 = callmethod(this, "posY:=", [1], opresult551);
              return call552
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func512.paramCounts = [
            1,
          ];
          func512.variableArities = [
            false,
          ];
          obj332.methods["move"] = func512;
          func512.definitionLine = 203;
          func512.definitionModule = "kitty";
          var func553 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func553.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 209
              lineNumber = 205
              lineNumber = 209
              onSelf = true;
              var call556 = callmethod(this, "rotation", [0]);
              var opresult559 = callmethod(new GraceNum(90), "+", [1], call556);
              var prod561 = callmethod(opresult559, "*", [1], new GraceNum(3.14159));
              var quotient563 = callmethod(prod561, "/", [1], new GraceNum(180));
              var call564 = callmethod(var_math,"cos", [1], quotient563);
              var call566 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod569 = callmethod(var_distance, "*", [1], call566);
              var prod571 = callmethod(prod569, "*", [1], call564);
              onSelf = true;
              var call573 = callmethod(this, "posX", [0]);
              var opresult575 = callmethod(call573, "+", [1], prod571);
              onSelf = true;
              var call576 = callmethod(this, "posX:=", [1], opresult575);
              lineNumber = 210
              lineNumber = 209
              lineNumber = 210
              onSelf = true;
              var call579 = callmethod(this, "rotation", [0]);
              var opresult582 = callmethod(new GraceNum(90), "+", [1], call579);
              var prod584 = callmethod(opresult582, "*", [1], new GraceNum(3.14159));
              var quotient586 = callmethod(prod584, "/", [1], new GraceNum(180));
              var call587 = callmethod(var_math,"sin", [1], quotient586);
              var call589 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod592 = callmethod(var_distance, "*", [1], call589);
              var prod594 = callmethod(prod592, "*", [1], call587);
              onSelf = true;
              var call596 = callmethod(this, "posY", [0]);
              var opresult598 = callmethod(call596, "+", [1], prod594);
              onSelf = true;
              var call599 = callmethod(this, "posY:=", [1], opresult598);
              return call599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func553.paramCounts = [
            1,
          ];
          func553.variableArities = [
            false,
          ];
          obj332.methods["strafe"] = func553;
          func553.definitionLine = 208;
          func553.definitionModule = "kitty";
          var func600 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 215
              lineNumber = 214
              onSelf = true;
              var call602 = callmethod(this, "rotation", [0]);
              var opresult604 = callmethod(call602, "+", [1], var_angle);
              onSelf = true;
              var call605 = callmethod(this, "rotation:=", [1], opresult604);
              return call605
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
          obj332.methods["turn"] = func600;
          func600.definitionLine = 213;
          func600.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 219
              var call607 = callmethod(var_ctx,"save", [0]);
              lineNumber = 220
              onSelf = true;
              var call608 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call609 = callmethod(this, "posY", [0]);
              var call610 = callmethod(var_ctx,"translate", [2], call608, call609);
              lineNumber = 221
              onSelf = true;
              var call611 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call612 = callmethod(this, "image", [0]);
              var call613 = callmethod(call612,"draw", [4], var_ctx, var_dx, var_dy, call611);
              lineNumber = 222
              var call614 = callmethod(var_ctx,"restore", [0]);
              return call614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func606.paramCounts = [
            3,
          ];
          func606.variableArities = [
            false,
          ];
          obj332.methods["draw"] = func606;
          func606.definitionLine = 218;
          func606.definitionModule = "kitty";
          var func615 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func615.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 226
              lineNumber = 222
              lineNumber = 226
              var call616 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call617 = callmethod(call616, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call618 = callmethod(call617, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call619 = callmethod(this, "image:=", [1], call618);
              return call619
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func615.paramCounts = [
            1,
          ];
          func615.variableArities = [
            false,
          ];
          obj332.methods["createImage"] = func615;
          func615.definitionLine = 225;
          func615.definitionModule = "kitty";
          var func620 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func620.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              lineNumber = 226
              lineNumber = 230
              onSelf = true;
              var call621 = callmethod(this, "image:=", [1], var_image__39__);
              return call621
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func620.paramTypes = [];
          func620.paramTypes.push([]);
          func620.paramCounts = [
            1,
          ];
          func620.variableArities = [
            false,
          ];
          obj332.methods["setImage"] = func620;
          func620.definitionLine = 229;
          func620.definitionModule = "kitty";
          var func622 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 226
              lineNumber = 235
              onSelf = true;
              var call623 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call623
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func622.paramCounts = [
            1,
          ];
          func622.variableArities = [
            false,
          ];
          obj332.methods["setUpdateAction"] = func622;
          func622.definitionLine = 234;
          func622.definitionModule = "kitty";
          var func624 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func624.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 226
              lineNumber = 239
              onSelf = true;
              var call625 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call625
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func624.paramCounts = [
            1,
          ];
          func624.variableArities = [
            false,
          ];
          obj332.methods["setDestroyAction"] = func624;
          func624.definitionLine = 238;
          func624.definitionModule = "kitty";
          var func626 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func626.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 226
              lineNumber = 243
              onSelf = true;
              var call627 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call627
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func626.paramCounts = [
            1,
          ];
          func626.variableArities = [
            false,
          ];
          obj332.methods["setMouseDownAction"] = func626;
          func626.definitionLine = 242;
          func626.definitionModule = "kitty";
          var func628 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 226
              lineNumber = 247
              onSelf = true;
              var call629 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call629
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func628.paramCounts = [
            1,
          ];
          func628.variableArities = [
            false,
          ];
          obj332.methods["setMouseUpAction"] = func628;
          func628.definitionLine = 246;
          func628.definitionModule = "kitty";
          var func630 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func630.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 252
              lineNumber = 226
              lineNumber = 251
              onSelf = true;
              var call631 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call631
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func630.paramCounts = [
            1,
          ];
          func630.variableArities = [
            false,
          ];
          obj332.methods["setMouseEnterAction"] = func630;
          func630.definitionLine = 250;
          func630.definitionModule = "kitty";
          var func632 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func632.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 256
              lineNumber = 226
              lineNumber = 255
              onSelf = true;
              var call633 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
              return call633
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func632.paramCounts = [
            1,
          ];
          func632.variableArities = [
            false,
          ];
          obj332.methods["setMouseDragAction"] = func632;
          func632.definitionLine = 254;
          func632.definitionModule = "kitty";
          var func634 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 226
              lineNumber = 259
              onSelf = true;
              var call635 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call635
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func634.paramCounts = [
            1,
          ];
          func634.variableArities = [
            false,
          ];
          obj332.methods["setMouseOverAction"] = func634;
          func634.definitionLine = 258;
          func634.definitionModule = "kitty";
          var func636 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func636.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 226
              lineNumber = 263
              onSelf = true;
              var call637 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call637
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func636.paramCounts = [
            1,
          ];
          func636.variableArities = [
            false,
          ];
          obj332.methods["setMouseExitAction"] = func636;
          func636.definitionLine = 262;
          func636.definitionModule = "kitty";
          var func638 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              lineNumber = 226
              lineNumber = 267
              onSelf = true;
              var call639 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 269
              lineNumber = 226
              lineNumber = 268
              onSelf = true;
              var call640 = callmethod(this, "posY:=", [1], var_y);
              return call640
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func638.paramCounts = [
            2,
          ];
          func638.variableArities = [
            false,
          ];
          obj332.methods["setLocation"] = func638;
          func638.definitionLine = 266;
          func638.definitionModule = "kitty";
          var func641 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func641.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call642 = callmethod(this, "posX", [0]);
              return call642
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func641.paramCounts = [
            0,
          ];
          func641.variableArities = [
            false,
          ];
          obj332.methods["getX"] = func641;
          func641.definitionLine = 271;
          func641.definitionModule = "kitty";
          var func643 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              lineNumber = 276
              onSelf = true;
              var call644 = callmethod(this, "posY", [0]);
              return call644
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func643.paramCounts = [
            0,
          ];
          func643.variableArities = [
            false,
          ];
          obj332.methods["getY"] = func643;
          func643.definitionLine = 275;
          func643.definitionModule = "kitty";
          var func645 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 281
              lineNumber = 226
              lineNumber = 280
              onSelf = true;
              var call646 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call646
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func645.paramCounts = [
            1,
          ];
          func645.variableArities = [
            false,
          ];
          obj332.methods["setX"] = func645;
          func645.definitionLine = 279;
          func645.definitionModule = "kitty";
          var func647 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func647.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              lineNumber = 226
              lineNumber = 284
              onSelf = true;
              var call648 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call648
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func647.paramCounts = [
            1,
          ];
          func647.variableArities = [
            false,
          ];
          obj332.methods["setY"] = func647;
          func647.definitionLine = 283;
          func647.definitionModule = "kitty";
          var func649 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 288
              onSelf = true;
              var call650 = callmethod(this, "rotation", [0]);
              return call650
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func649.paramCounts = [
            0,
          ];
          func649.variableArities = [
            false,
          ];
          obj332.methods["getRotation"] = func649;
          func649.definitionLine = 287;
          func649.definitionModule = "kitty";
          sourceObject = obj332;
          lineNumber = 99
          obj332.data["tag"] = var_tag__39__;
          var reader_kitty_tag_651 = function() {
            return this.data["tag"];
          }
          obj332.methods["tag"] = reader_kitty_tag_651;
          obj332.data["tag"] = var_tag__39__;
          var writer_kitty_tag_651 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj332.methods["tag:="] = writer_kitty_tag_651;
          reader_kitty_tag_651.confidential = true;
          writer_kitty_tag_651.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 100
          obj332.data["posX"] = var_x__39__;
          var reader_kitty_posX_652 = function() {
            return this.data["posX"];
          }
          obj332.methods["posX"] = reader_kitty_posX_652;
          obj332.data["posX"] = var_x__39__;
          var writer_kitty_posX_652 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj332.methods["posX:="] = writer_kitty_posX_652;
          reader_kitty_posX_652.confidential = true;
          writer_kitty_posX_652.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 101
          obj332.data["posY"] = var_y__39__;
          var reader_kitty_posY_653 = function() {
            return this.data["posY"];
          }
          obj332.methods["posY"] = reader_kitty_posY_653;
          obj332.data["posY"] = var_y__39__;
          var writer_kitty_posY_653 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj332.methods["posY:="] = writer_kitty_posY_653;
          reader_kitty_posY_653.confidential = true;
          writer_kitty_posY_653.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 102
          obj332.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_654 = function() {
            return this.data["rotation"];
          }
          obj332.methods["rotation"] = reader_kitty_rotation_654;
          obj332.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_654 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj332.methods["rotation:="] = writer_kitty_rotation_654;
          reader_kitty_rotation_654.confidential = true;
          writer_kitty_rotation_654.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 106
          var block655 = Grace_allocObject();
          block655.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block655.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block655.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block655.methods["match"] = GraceBlock_match;
          block655.methods["prefix?"] = GraceBlock_lift;
          block655.receiver = this;
          block655.className = 'block<kitty:106>';
          block655.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["updateAction"] = block655;
          var reader_kitty_updateAction_656 = function() {
            return this.data["updateAction"];
          }
          obj332.methods["updateAction"] = reader_kitty_updateAction_656;
          obj332.data["updateAction"] = block655;
          var writer_kitty_updateAction_656 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj332.methods["updateAction:="] = writer_kitty_updateAction_656;
          reader_kitty_updateAction_656.confidential = true;
          writer_kitty_updateAction_656.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block655)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 107
          var block657 = Grace_allocObject();
          block657.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block657.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block657.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block657.methods["match"] = GraceBlock_match;
          block657.methods["prefix?"] = GraceBlock_lift;
          block657.receiver = this;
          block657.className = 'block<kitty:107>';
          block657.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["destroyAction"] = block657;
          var reader_kitty_destroyAction_658 = function() {
            return this.data["destroyAction"];
          }
          obj332.methods["destroyAction"] = reader_kitty_destroyAction_658;
          obj332.data["destroyAction"] = block657;
          var writer_kitty_destroyAction_658 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj332.methods["destroyAction:="] = writer_kitty_destroyAction_658;
          reader_kitty_destroyAction_658.confidential = true;
          writer_kitty_destroyAction_658.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block657)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 108
          var block659 = Grace_allocObject();
          block659.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block659.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block659.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block659.methods["match"] = GraceBlock_match;
          block659.methods["prefix?"] = GraceBlock_lift;
          block659.receiver = this;
          block659.className = 'block<kitty:108>';
          block659.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseDownAction"] = block659;
          var reader_kitty_mouseDownAction_660 = function() {
            return this.data["mouseDownAction"];
          }
          obj332.methods["mouseDownAction"] = reader_kitty_mouseDownAction_660;
          obj332.data["mouseDownAction"] = block659;
          var writer_kitty_mouseDownAction_660 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj332.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_660;
          reader_kitty_mouseDownAction_660.confidential = true;
          writer_kitty_mouseDownAction_660.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block659)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 109
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
          block661.className = 'block<kitty:109>';
          block661.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseUpAction"] = block661;
          var reader_kitty_mouseUpAction_662 = function() {
            return this.data["mouseUpAction"];
          }
          obj332.methods["mouseUpAction"] = reader_kitty_mouseUpAction_662;
          obj332.data["mouseUpAction"] = block661;
          var writer_kitty_mouseUpAction_662 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj332.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_662;
          reader_kitty_mouseUpAction_662.confidential = true;
          writer_kitty_mouseUpAction_662.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block661)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 110
          var block663 = Grace_allocObject();
          block663.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block663.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block663.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block663.methods["match"] = GraceBlock_match;
          block663.methods["prefix?"] = GraceBlock_lift;
          block663.receiver = this;
          block663.className = 'block<kitty:110>';
          block663.real = function(
          ) {
            sourceObject = this;
            lineNumber = 109
            var call664 = callmethod(var_mouse,"x", [0]);
            var call665 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call666 = callmethod(this, "setLocation", [2], call664, call665);
            return call666;
          };
          obj332.data["mouseDragAction"] = block663;
          var reader_kitty_mouseDragAction_667 = function() {
            return this.data["mouseDragAction"];
          }
          obj332.methods["mouseDragAction"] = reader_kitty_mouseDragAction_667;
          obj332.data["mouseDragAction"] = block663;
          var writer_kitty_mouseDragAction_667 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj332.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_667;
          reader_kitty_mouseDragAction_667.confidential = true;
          writer_kitty_mouseDragAction_667.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block663)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var block668 = Grace_allocObject();
          block668.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block668.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block668.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block668.methods["match"] = GraceBlock_match;
          block668.methods["prefix?"] = GraceBlock_lift;
          block668.receiver = this;
          block668.className = 'block<kitty:111>';
          block668.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseEnterAction"] = block668;
          var reader_kitty_mouseEnterAction_669 = function() {
            return this.data["mouseEnterAction"];
          }
          obj332.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_669;
          obj332.data["mouseEnterAction"] = block668;
          var writer_kitty_mouseEnterAction_669 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj332.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_669;
          reader_kitty_mouseEnterAction_669.confidential = true;
          writer_kitty_mouseEnterAction_669.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block668)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 112
          var block670 = Grace_allocObject();
          block670.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block670.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block670.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block670.methods["match"] = GraceBlock_match;
          block670.methods["prefix?"] = GraceBlock_lift;
          block670.receiver = this;
          block670.className = 'block<kitty:112>';
          block670.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseOverAction"] = block670;
          var reader_kitty_mouseOverAction_671 = function() {
            return this.data["mouseOverAction"];
          }
          obj332.methods["mouseOverAction"] = reader_kitty_mouseOverAction_671;
          obj332.data["mouseOverAction"] = block670;
          var writer_kitty_mouseOverAction_671 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj332.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_671;
          reader_kitty_mouseOverAction_671.confidential = true;
          writer_kitty_mouseOverAction_671.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 113
          var block672 = Grace_allocObject();
          block672.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block672.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block672.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block672.methods["match"] = GraceBlock_match;
          block672.methods["prefix?"] = GraceBlock_lift;
          block672.receiver = this;
          block672.className = 'block<kitty:113>';
          block672.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseExitAction"] = block672;
          var reader_kitty_mouseExitAction_673 = function() {
            return this.data["mouseExitAction"];
          }
          obj332.methods["mouseExitAction"] = reader_kitty_mouseExitAction_673;
          obj332.data["mouseExitAction"] = block672;
          var writer_kitty_mouseExitAction_673 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj332.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_673;
          reader_kitty_mouseExitAction_673.confidential = true;
          writer_kitty_mouseExitAction_673.confidential = true;
          lineNumber = 113;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block672)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 113
          var bool674 = new GraceBoolean(false)
          obj332.data["mouseOver"] = bool674;
          var reader_kitty_mouseOver_675 = function() {
            return this.data["mouseOver"];
          }
          obj332.methods["mouseOver"] = reader_kitty_mouseOver_675;
          obj332.data["mouseOver"] = bool674;
          var writer_kitty_mouseOver_675 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj332.methods["mouseOver:="] = writer_kitty_mouseOver_675;
          reader_kitty_mouseOver_675.confidential = true;
          writer_kitty_mouseOver_675.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 113
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 114
          var bool676 = new GraceBoolean(false)
          obj332.data["mouseDownEntity"] = bool676;
          var reader_kitty_mouseDownEntity_677 = function() {
            return this.data["mouseDownEntity"];
          }
          obj332.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_677;
          obj332.data["mouseDownEntity"] = bool676;
          var writer_kitty_mouseDownEntity_677 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj332.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_677;
          reader_kitty_mouseDownEntity_677.confidential = true;
          writer_kitty_mouseDownEntity_677.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool676)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 116
          var call678 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj332.data["mouseDragStart"] = call678;
          var reader_kitty_mouseDragStart_679 = function() {
            return this.data["mouseDragStart"];
          }
          obj332.methods["mouseDragStart"] = reader_kitty_mouseDragStart_679;
          obj332.data["mouseDragStart"] = call678;
          var writer_kitty_mouseDragStart_679 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj332.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_679;
          reader_kitty_mouseDragStart_679.confidential = true;
          writer_kitty_mouseDragStart_679.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call678)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          obj332.data["image"] = undefined;
          var reader_kitty_image_680 = function() {
            return this.data["image"];
          }
          obj332.methods["image"] = reader_kitty_image_680;
          obj332.data["image"] = undefined;
          var writer_kitty_image_680 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj332.methods["image:="] = writer_kitty_image_680;
          reader_kitty_image_680.confidential = true;
          writer_kitty_image_680.confidential = true;
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 119
          onSelf = true;
          var call681 = callmethod(this, "awake", [0]);
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
    func331.definitionLine = 95;
    func331.definitionModule = "kitty";
    var func682 = function(argcv) {
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
        var obj683 = Grace_allocObject();
        obj683.definitionModule = "kitty";
        obj683.definitionLine = 95;
        var inho683 = inheritingObject;
        while (inho683.superobj) inho683 = inho683.superobj;
        inho683.superobj = obj683;
        obj683.data = inheritingObject.data;
        obj683.outer = this;
        var reader_kitty_outer_684 = function() {
          return this.outer;
        }
        obj683.methods["outer"] = reader_kitty_outer_684;
        function obj_init_683() {
          var origSuperDepth = superDepth;
          superDepth = obj683;
          obj683.annotations = [];
          var func685 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func685.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              var string686 = new GraceString("realyee.png");
              onSelf = true;
              var call687 = callmethod(this, "createImage", [1], string686);
              lineNumber = 125
              lineNumber = 124
              var_kitten = this;
              lineNumber = 125
              var call688 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call688
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func685.paramCounts = [
            0,
          ];
          func685.variableArities = [
            false,
          ];
          obj683.methods["awake"] = func685;
          func685.definitionLine = 122;
          func685.definitionModule = "kitty";
          var func689 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func689.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              onSelf = true;
              var call690 = callmethod(this, "updateAction", [0]);
              var call691 = callmethod(call690,"apply", [0]);
              lineNumber = 138
              var if692 = var_done;
              lineNumber = 133
              onSelf = true;
              var call693 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call693)) {
                lineNumber = 134
                onSelf = true;
                var call694 = callmethod(this, "mouseOverAction", [0]);
                var call695 = callmethod(call694,"apply", [0]);
                if692 = call695;
              }
              lineNumber = 141
              var if696 = var_done;
              lineNumber = 138
              onSelf = true;
              var call697 = callmethod(this, "mouseDragStart", [0]);
              var call699 = callmethod(var_mouse,"position", [0]);
              var opresult701 = callmethod(call699, "!=", [1], call697);
              onSelf = true;
              var call703 = callmethod(this, "mouseDownEntity", [0]);
              var opresult705 = callmethod(call703, "&&", [1], opresult701);
              if (Grace_isTrue(opresult705)) {
                lineNumber = 139
                onSelf = true;
                var call706 = callmethod(this, "mouseDragAction", [0]);
                var call707 = callmethod(call706,"apply", [0]);
                if696 = call707;
              }
              return if696
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
          obj683.methods["tick"] = func689;
          func689.definitionLine = 128;
          func689.definitionModule = "kitty";
          var func708 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func708.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              onSelf = true;
              var call709 = callmethod(this, "destroyAction", [0]);
              var call710 = callmethod(call709,"apply", [0]);
              return call710
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func708.paramCounts = [
            0,
          ];
          func708.variableArities = [
            false,
          ];
          obj683.methods["kill"] = func708;
          func708.definitionLine = 143;
          func708.definitionModule = "kitty";
          var func711 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func711.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 155
              var if712 = var_done;
              lineNumber = 149
              onSelf = true;
              var call713 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call713)) {
                lineNumber = 151
                lineNumber = 144
                lineNumber = 150
                var call714 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call715 = callmethod(this, "mouseDragStart:=", [1], call714);
                lineNumber = 151
                onSelf = true;
                var call716 = callmethod(this, "mouseDownAction", [0]);
                var call717 = callmethod(call716,"apply", [0]);
                lineNumber = 153
                lineNumber = 151
                lineNumber = 152
                var bool718 = new GraceBoolean(true)
                onSelf = true;
                var call719 = callmethod(this, "mouseDownEntity:=", [1], bool718);
                lineNumber = 154
                lineNumber = 153
                var bool720 = new GraceBoolean(true)
                return bool720
              }
              lineNumber = 156
              lineNumber = 155
              var bool721 = new GraceBoolean(false)
              return bool721
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func711.paramCounts = [
            0,
          ];
          func711.variableArities = [
            false,
          ];
          obj683.methods["mouseDown"] = func711;
          func711.definitionLine = 148;
          func711.definitionModule = "kitty";
          var func722 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func722.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 165
              var if723 = var_done;
              lineNumber = 159
              onSelf = true;
              var call724 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call724)) {
                lineNumber = 161
                lineNumber = 151
                lineNumber = 160
                var call725 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call726 = callmethod(this, "mouseDragStart:=", [1], call725);
                lineNumber = 161
                onSelf = true;
                var call727 = callmethod(this, "mouseUpAction", [0]);
                var call728 = callmethod(call727,"apply", [0]);
                lineNumber = 163
                lineNumber = 161
                lineNumber = 162
                var bool729 = new GraceBoolean(false)
                onSelf = true;
                var call730 = callmethod(this, "mouseDownEntity:=", [1], bool729);
                lineNumber = 164
                lineNumber = 163
                var bool731 = new GraceBoolean(true)
                return bool731
              }
              lineNumber = 166
              lineNumber = 165
              var bool732 = new GraceBoolean(false)
              return bool732
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
          obj683.methods["mouseUp"] = func722;
          func722.definitionLine = 158;
          func722.definitionModule = "kitty";
          var func733 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func733.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              var if734 = var_done;
              lineNumber = 169
              onSelf = true;
              var call735 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call735)) {
                lineNumber = 171
                lineNumber = 170
                var bool736 = new GraceBoolean(false)
                return bool736
              }
              lineNumber = 173
              lineNumber = 172
              onSelf = true;
              var call738 = callmethod(this, "image", [0]);
              var call739 = callmethod(call738,"width", [0]);
              var quotient741 = callmethod(call739, "/", [1], new GraceNum(2));
              var var_w = quotient741;
              lineNumber = 173;
              moduleName = "kitty";
              lineNumber = 172
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 174
              lineNumber = 173
              onSelf = true;
              var call743 = callmethod(this, "image", [0]);
              var call744 = callmethod(call743,"height", [0]);
              var quotient746 = callmethod(call744, "/", [1], new GraceNum(2));
              var var_h = quotient746;
              lineNumber = 174;
              moduleName = "kitty";
              lineNumber = 173
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 174
              lineNumber = 175
              onSelf = true;
              var call748 = callmethod(this, "posX", [0]);
              var diff750 = callmethod(call748, "-", [1], var_w);
              onSelf = true;
              var call752 = callmethod(this, "posY", [0]);
              var diff754 = callmethod(call752, "-", [1], var_h);
              var call755 = callmethod(var_Point,"x()y", [1, 1], diff750, diff754);
              onSelf = true;
              var call757 = callmethod(this, "posX", [0]);
              var diff759 = callmethod(call757, "-", [1], var_w);
              onSelf = true;
              var call761 = callmethod(this, "posY", [0]);
              var opresult763 = callmethod(call761, "+", [1], var_h);
              var call764 = callmethod(var_Point,"x()y", [1, 1], diff759, opresult763);
              lineNumber = 176
              onSelf = true;
              var call766 = callmethod(this, "posX", [0]);
              var opresult768 = callmethod(call766, "+", [1], var_w);
              onSelf = true;
              var call770 = callmethod(this, "posY", [0]);
              var opresult772 = callmethod(call770, "+", [1], var_h);
              var call773 = callmethod(var_Point,"x()y", [1, 1], opresult768, opresult772);
              onSelf = true;
              var call775 = callmethod(this, "posX", [0]);
              var opresult777 = callmethod(call775, "+", [1], var_w);
              onSelf = true;
              var call779 = callmethod(this, "posY", [0]);
              var diff781 = callmethod(call779, "-", [1], var_h);
              var call782 = callmethod(var_Point,"x()y", [1, 1], opresult777, diff781);
              lineNumber = 174
              var call783 = callmethod(var_collections,"list", [0]);
              var call784 = callmethod(call783,"new", [4], call755, call764, call773, call782);
              var var_poly = call784;
              lineNumber = 174;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 183
              var if785 = var_done;
              lineNumber = 178
              var call786 = callmethod(var_mouse,"location", [0]);
              var call787 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call788 = callmethod(call787, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call789 = callmethod(call788, "pointInPolygon", [2], call786, var_poly);
              if (Grace_isTrue(call789)) {
                lineNumber = 179
                onSelf = true;
                var call790 = callmethod(this, "mouseEnterAction", [0]);
                var call791 = callmethod(call790,"apply", [0]);
                lineNumber = 181
                lineNumber = 179
                lineNumber = 180
                var bool792 = new GraceBoolean(true)
                onSelf = true;
                var call793 = callmethod(this, "mouseOver:=", [1], bool792);
                lineNumber = 182
                lineNumber = 181
                var bool794 = new GraceBoolean(true)
                return bool794
              }
              return if785
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func733.paramCounts = [
            0,
          ];
          func733.variableArities = [
            false,
          ];
          obj683.methods["mouseEnter"] = func733;
          func733.definitionLine = 168;
          func733.definitionModule = "kitty";
          var func795 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func795.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              var if796 = var_done;
              lineNumber = 186
              onSelf = true;
              var call797 = callmethod(this, "mouseOver", [0]);
              var call798 = callmethod(call797,"prefix!", [0]);
              if (Grace_isTrue(call798)) {
                lineNumber = 188
                lineNumber = 187
                var bool799 = new GraceBoolean(false)
                return bool799
              }
              lineNumber = 190
              lineNumber = 189
              onSelf = true;
              var call801 = callmethod(this, "image", [0]);
              var call802 = callmethod(call801,"width", [0]);
              var quotient804 = callmethod(call802, "/", [1], new GraceNum(2));
              var var_w = quotient804;
              lineNumber = 190;
              moduleName = "kitty";
              lineNumber = 189
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 191
              lineNumber = 190
              onSelf = true;
              var call806 = callmethod(this, "image", [0]);
              var call807 = callmethod(call806,"height", [0]);
              var quotient809 = callmethod(call807, "/", [1], new GraceNum(2));
              var var_h = quotient809;
              lineNumber = 191;
              moduleName = "kitty";
              lineNumber = 190
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 191
              lineNumber = 192
              onSelf = true;
              var call811 = callmethod(this, "posX", [0]);
              var diff813 = callmethod(call811, "-", [1], var_w);
              onSelf = true;
              var call815 = callmethod(this, "posY", [0]);
              var diff817 = callmethod(call815, "-", [1], var_h);
              var call818 = callmethod(var_Point,"x()y", [1, 1], diff813, diff817);
              onSelf = true;
              var call820 = callmethod(this, "posX", [0]);
              var diff822 = callmethod(call820, "-", [1], var_w);
              onSelf = true;
              var call824 = callmethod(this, "posY", [0]);
              var opresult826 = callmethod(call824, "+", [1], var_h);
              var call827 = callmethod(var_Point,"x()y", [1, 1], diff822, opresult826);
              lineNumber = 193
              onSelf = true;
              var call829 = callmethod(this, "posX", [0]);
              var opresult831 = callmethod(call829, "+", [1], var_w);
              onSelf = true;
              var call833 = callmethod(this, "posY", [0]);
              var opresult835 = callmethod(call833, "+", [1], var_h);
              var call836 = callmethod(var_Point,"x()y", [1, 1], opresult831, opresult835);
              onSelf = true;
              var call838 = callmethod(this, "posX", [0]);
              var opresult840 = callmethod(call838, "+", [1], var_w);
              onSelf = true;
              var call842 = callmethod(this, "posY", [0]);
              var diff844 = callmethod(call842, "-", [1], var_h);
              var call845 = callmethod(var_Point,"x()y", [1, 1], opresult840, diff844);
              lineNumber = 191
              var call846 = callmethod(var_collections,"list", [0]);
              var call847 = callmethod(call846,"new", [4], call818, call827, call836, call845);
              var var_poly = call847;
              lineNumber = 191;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 200
              var if848 = var_done;
              lineNumber = 195
              onSelf = true;
              var call849 = callmethod(this, "mouseOver", [0]);
              var call851 = callmethod(var_mouse,"location", [0]);
              var call852 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call853 = callmethod(call852, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call854 = callmethod(call853, "pointInPolygon", [2], call851, var_poly);
              var call855 = callmethod(call854,"prefix!", [0]);
              var opresult857 = callmethod(call855, "&&", [1], call849);
              if (Grace_isTrue(opresult857)) {
                lineNumber = 196
                onSelf = true;
                var call858 = callmethod(this, "mouseExitAction", [0]);
                var call859 = callmethod(call858,"apply", [0]);
                lineNumber = 198
                lineNumber = 196
                lineNumber = 197
                var bool860 = new GraceBoolean(false)
                onSelf = true;
                var call861 = callmethod(this, "mouseOver:=", [1], bool860);
                lineNumber = 199
                lineNumber = 198
                var bool862 = new GraceBoolean(true)
                return bool862
              }
              return if848
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
          obj683.methods["mouseExit"] = func795;
          func795.definitionLine = 185;
          func795.definitionModule = "kitty";
          var func863 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func863.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 204
              lineNumber = 196
              lineNumber = 204
              onSelf = true;
              var call866 = callmethod(this, "rotation", [0]);
              var prod868 = callmethod(call866, "*", [1], new GraceNum(3.14159));
              var quotient870 = callmethod(prod868, "/", [1], new GraceNum(180));
              var call871 = callmethod(var_math,"cos", [1], quotient870);
              var call873 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod876 = callmethod(var_distance, "*", [1], call873);
              var prod878 = callmethod(prod876, "*", [1], call871);
              onSelf = true;
              var call880 = callmethod(this, "posX", [0]);
              var opresult882 = callmethod(call880, "+", [1], prod878);
              onSelf = true;
              var call883 = callmethod(this, "posX:=", [1], opresult882);
              lineNumber = 205
              lineNumber = 204
              lineNumber = 205
              onSelf = true;
              var call886 = callmethod(this, "rotation", [0]);
              var prod888 = callmethod(call886, "*", [1], new GraceNum(3.14159));
              var quotient890 = callmethod(prod888, "/", [1], new GraceNum(180));
              var call891 = callmethod(var_math,"sin", [1], quotient890);
              var call893 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod896 = callmethod(var_distance, "*", [1], call893);
              var prod898 = callmethod(prod896, "*", [1], call891);
              onSelf = true;
              var call900 = callmethod(this, "posY", [0]);
              var opresult902 = callmethod(call900, "+", [1], prod898);
              onSelf = true;
              var call903 = callmethod(this, "posY:=", [1], opresult902);
              return call903
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func863.paramCounts = [
            1,
          ];
          func863.variableArities = [
            false,
          ];
          obj683.methods["move"] = func863;
          func863.definitionLine = 203;
          func863.definitionModule = "kitty";
          var func904 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func904.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 209
              lineNumber = 205
              lineNumber = 209
              onSelf = true;
              var call907 = callmethod(this, "rotation", [0]);
              var opresult910 = callmethod(new GraceNum(90), "+", [1], call907);
              var prod912 = callmethod(opresult910, "*", [1], new GraceNum(3.14159));
              var quotient914 = callmethod(prod912, "/", [1], new GraceNum(180));
              var call915 = callmethod(var_math,"cos", [1], quotient914);
              var call917 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod920 = callmethod(var_distance, "*", [1], call917);
              var prod922 = callmethod(prod920, "*", [1], call915);
              onSelf = true;
              var call924 = callmethod(this, "posX", [0]);
              var opresult926 = callmethod(call924, "+", [1], prod922);
              onSelf = true;
              var call927 = callmethod(this, "posX:=", [1], opresult926);
              lineNumber = 210
              lineNumber = 209
              lineNumber = 210
              onSelf = true;
              var call930 = callmethod(this, "rotation", [0]);
              var opresult933 = callmethod(new GraceNum(90), "+", [1], call930);
              var prod935 = callmethod(opresult933, "*", [1], new GraceNum(3.14159));
              var quotient937 = callmethod(prod935, "/", [1], new GraceNum(180));
              var call938 = callmethod(var_math,"sin", [1], quotient937);
              var call940 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod943 = callmethod(var_distance, "*", [1], call940);
              var prod945 = callmethod(prod943, "*", [1], call938);
              onSelf = true;
              var call947 = callmethod(this, "posY", [0]);
              var opresult949 = callmethod(call947, "+", [1], prod945);
              onSelf = true;
              var call950 = callmethod(this, "posY:=", [1], opresult949);
              return call950
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func904.paramCounts = [
            1,
          ];
          func904.variableArities = [
            false,
          ];
          obj683.methods["strafe"] = func904;
          func904.definitionLine = 208;
          func904.definitionModule = "kitty";
          var func951 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func951.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 215
              lineNumber = 210
              lineNumber = 215
              lineNumber = 214
              onSelf = true;
              var call953 = callmethod(this, "rotation", [0]);
              var opresult955 = callmethod(call953, "+", [1], var_angle);
              onSelf = true;
              var call956 = callmethod(this, "rotation:=", [1], opresult955);
              return call956
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
          obj683.methods["turn"] = func951;
          func951.definitionLine = 213;
          func951.definitionModule = "kitty";
          var func957 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func957.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 219
              var call958 = callmethod(var_ctx,"save", [0]);
              lineNumber = 220
              onSelf = true;
              var call959 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call960 = callmethod(this, "posY", [0]);
              var call961 = callmethod(var_ctx,"translate", [2], call959, call960);
              lineNumber = 221
              onSelf = true;
              var call962 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call963 = callmethod(this, "image", [0]);
              var call964 = callmethod(call963,"draw", [4], var_ctx, var_dx, var_dy, call962);
              lineNumber = 222
              var call965 = callmethod(var_ctx,"restore", [0]);
              return call965
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func957.paramCounts = [
            3,
          ];
          func957.variableArities = [
            false,
          ];
          obj683.methods["draw"] = func957;
          func957.definitionLine = 218;
          func957.definitionModule = "kitty";
          var func966 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func966.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 226
              lineNumber = 222
              lineNumber = 226
              var call967 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call968 = callmethod(call967, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call969 = callmethod(call968, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call970 = callmethod(this, "image:=", [1], call969);
              return call970
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func966.paramCounts = [
            1,
          ];
          func966.variableArities = [
            false,
          ];
          obj683.methods["createImage"] = func966;
          func966.definitionLine = 225;
          func966.definitionModule = "kitty";
          var func971 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func971.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              lineNumber = 226
              lineNumber = 230
              onSelf = true;
              var call972 = callmethod(this, "image:=", [1], var_image__39__);
              return call972
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func971.paramTypes = [];
          func971.paramTypes.push([]);
          func971.paramCounts = [
            1,
          ];
          func971.variableArities = [
            false,
          ];
          obj683.methods["setImage"] = func971;
          func971.definitionLine = 229;
          func971.definitionModule = "kitty";
          var func973 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func973.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 236
              lineNumber = 226
              lineNumber = 235
              onSelf = true;
              var call974 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call974
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func973.paramCounts = [
            1,
          ];
          func973.variableArities = [
            false,
          ];
          obj683.methods["setUpdateAction"] = func973;
          func973.definitionLine = 234;
          func973.definitionModule = "kitty";
          var func975 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func975.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 226
              lineNumber = 239
              onSelf = true;
              var call976 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj683.methods["setDestroyAction"] = func975;
          func975.definitionLine = 238;
          func975.definitionModule = "kitty";
          var func977 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func977.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 244
              lineNumber = 226
              lineNumber = 243
              onSelf = true;
              var call978 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
          obj683.methods["setMouseDownAction"] = func977;
          func977.definitionLine = 242;
          func977.definitionModule = "kitty";
          var func979 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func979.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 248
              lineNumber = 226
              lineNumber = 247
              onSelf = true;
              var call980 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
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
          obj683.methods["setMouseUpAction"] = func979;
          func979.definitionLine = 246;
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
              lineNumber = 252
              lineNumber = 226
              lineNumber = 251
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
          obj683.methods["setMouseEnterAction"] = func981;
          func981.definitionLine = 250;
          func981.definitionModule = "kitty";
          var func983 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func983.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 256
              lineNumber = 226
              lineNumber = 255
              onSelf = true;
              var call984 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
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
          obj683.methods["setMouseDragAction"] = func983;
          func983.definitionLine = 254;
          func983.definitionModule = "kitty";
          var func985 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func985.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 226
              lineNumber = 259
              onSelf = true;
              var call986 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call986
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func985.paramCounts = [
            1,
          ];
          func985.variableArities = [
            false,
          ];
          obj683.methods["setMouseOverAction"] = func985;
          func985.definitionLine = 258;
          func985.definitionModule = "kitty";
          var func987 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func987.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 226
              lineNumber = 263
              onSelf = true;
              var call988 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call988
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func987.paramCounts = [
            1,
          ];
          func987.variableArities = [
            false,
          ];
          obj683.methods["setMouseExitAction"] = func987;
          func987.definitionLine = 262;
          func987.definitionModule = "kitty";
          var func989 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func989.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              lineNumber = 226
              lineNumber = 267
              onSelf = true;
              var call990 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 269
              lineNumber = 226
              lineNumber = 268
              onSelf = true;
              var call991 = callmethod(this, "posY:=", [1], var_y);
              return call991
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func989.paramCounts = [
            2,
          ];
          func989.variableArities = [
            false,
          ];
          obj683.methods["setLocation"] = func989;
          func989.definitionLine = 266;
          func989.definitionModule = "kitty";
          var func992 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func992.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call993 = callmethod(this, "posX", [0]);
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
            0,
          ];
          func992.variableArities = [
            false,
          ];
          obj683.methods["getX"] = func992;
          func992.definitionLine = 271;
          func992.definitionModule = "kitty";
          var func994 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func994.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              lineNumber = 276
              onSelf = true;
              var call995 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func994.variableArities = [
            false,
          ];
          obj683.methods["getY"] = func994;
          func994.definitionLine = 275;
          func994.definitionModule = "kitty";
          var func996 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func996.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 281
              lineNumber = 226
              lineNumber = 280
              onSelf = true;
              var call997 = callmethod(this, "posX:=", [1], var_posX__39__);
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
            1,
          ];
          func996.variableArities = [
            false,
          ];
          obj683.methods["setX"] = func996;
          func996.definitionLine = 279;
          func996.definitionModule = "kitty";
          var func998 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func998.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 285
              lineNumber = 226
              lineNumber = 284
              onSelf = true;
              var call999 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call999
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func998.paramCounts = [
            1,
          ];
          func998.variableArities = [
            false,
          ];
          obj683.methods["setY"] = func998;
          func998.definitionLine = 283;
          func998.definitionModule = "kitty";
          var func1000 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1000.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 288
              onSelf = true;
              var call1001 = callmethod(this, "rotation", [0]);
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
            0,
          ];
          func1000.variableArities = [
            false,
          ];
          obj683.methods["getRotation"] = func1000;
          func1000.definitionLine = 287;
          func1000.definitionModule = "kitty";
          sourceObject = obj683;
          lineNumber = 99
          obj683.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1002 = function() {
            return this.data["tag"];
          }
          obj683.methods["tag"] = reader_kitty_tag_1002;
          obj683.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1002 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj683.methods["tag:="] = writer_kitty_tag_1002;
          reader_kitty_tag_1002.confidential = true;
          writer_kitty_tag_1002.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 100
          obj683.data["posX"] = var_x__39__;
          var reader_kitty_posX_1003 = function() {
            return this.data["posX"];
          }
          obj683.methods["posX"] = reader_kitty_posX_1003;
          obj683.data["posX"] = var_x__39__;
          var writer_kitty_posX_1003 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj683.methods["posX:="] = writer_kitty_posX_1003;
          reader_kitty_posX_1003.confidential = true;
          writer_kitty_posX_1003.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 101
          obj683.data["posY"] = var_y__39__;
          var reader_kitty_posY_1004 = function() {
            return this.data["posY"];
          }
          obj683.methods["posY"] = reader_kitty_posY_1004;
          obj683.data["posY"] = var_y__39__;
          var writer_kitty_posY_1004 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj683.methods["posY:="] = writer_kitty_posY_1004;
          reader_kitty_posY_1004.confidential = true;
          writer_kitty_posY_1004.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 102
          obj683.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_1005 = function() {
            return this.data["rotation"];
          }
          obj683.methods["rotation"] = reader_kitty_rotation_1005;
          obj683.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_1005 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj683.methods["rotation:="] = writer_kitty_rotation_1005;
          reader_kitty_rotation_1005.confidential = true;
          writer_kitty_rotation_1005.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 106
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
          block1006.className = 'block<kitty:106>';
          block1006.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["updateAction"] = block1006;
          var reader_kitty_updateAction_1007 = function() {
            return this.data["updateAction"];
          }
          obj683.methods["updateAction"] = reader_kitty_updateAction_1007;
          obj683.data["updateAction"] = block1006;
          var writer_kitty_updateAction_1007 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj683.methods["updateAction:="] = writer_kitty_updateAction_1007;
          reader_kitty_updateAction_1007.confidential = true;
          writer_kitty_updateAction_1007.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1006)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 107
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
          block1008.className = 'block<kitty:107>';
          block1008.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["destroyAction"] = block1008;
          var reader_kitty_destroyAction_1009 = function() {
            return this.data["destroyAction"];
          }
          obj683.methods["destroyAction"] = reader_kitty_destroyAction_1009;
          obj683.data["destroyAction"] = block1008;
          var writer_kitty_destroyAction_1009 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj683.methods["destroyAction:="] = writer_kitty_destroyAction_1009;
          reader_kitty_destroyAction_1009.confidential = true;
          writer_kitty_destroyAction_1009.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1008)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 108
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
          block1010.className = 'block<kitty:108>';
          block1010.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["mouseDownAction"] = block1010;
          var reader_kitty_mouseDownAction_1011 = function() {
            return this.data["mouseDownAction"];
          }
          obj683.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1011;
          obj683.data["mouseDownAction"] = block1010;
          var writer_kitty_mouseDownAction_1011 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj683.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1011;
          reader_kitty_mouseDownAction_1011.confidential = true;
          writer_kitty_mouseDownAction_1011.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1010)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 109
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
          block1012.className = 'block<kitty:109>';
          block1012.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["mouseUpAction"] = block1012;
          var reader_kitty_mouseUpAction_1013 = function() {
            return this.data["mouseUpAction"];
          }
          obj683.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1013;
          obj683.data["mouseUpAction"] = block1012;
          var writer_kitty_mouseUpAction_1013 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj683.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1013;
          reader_kitty_mouseUpAction_1013.confidential = true;
          writer_kitty_mouseUpAction_1013.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1012)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 110
          var block1014 = Grace_allocObject();
          block1014.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1014.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1014.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1014.methods["match"] = GraceBlock_match;
          block1014.methods["prefix?"] = GraceBlock_lift;
          block1014.receiver = this;
          block1014.className = 'block<kitty:110>';
          block1014.real = function(
          ) {
            sourceObject = this;
            lineNumber = 109
            var call1015 = callmethod(var_mouse,"x", [0]);
            var call1016 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call1017 = callmethod(this, "setLocation", [2], call1015, call1016);
            return call1017;
          };
          obj683.data["mouseDragAction"] = block1014;
          var reader_kitty_mouseDragAction_1018 = function() {
            return this.data["mouseDragAction"];
          }
          obj683.methods["mouseDragAction"] = reader_kitty_mouseDragAction_1018;
          obj683.data["mouseDragAction"] = block1014;
          var writer_kitty_mouseDragAction_1018 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj683.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_1018;
          reader_kitty_mouseDragAction_1018.confidential = true;
          writer_kitty_mouseDragAction_1018.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1014)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 111
          var block1019 = Grace_allocObject();
          block1019.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1019.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1019.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1019.methods["match"] = GraceBlock_match;
          block1019.methods["prefix?"] = GraceBlock_lift;
          block1019.receiver = this;
          block1019.className = 'block<kitty:111>';
          block1019.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["mouseEnterAction"] = block1019;
          var reader_kitty_mouseEnterAction_1020 = function() {
            return this.data["mouseEnterAction"];
          }
          obj683.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1020;
          obj683.data["mouseEnterAction"] = block1019;
          var writer_kitty_mouseEnterAction_1020 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj683.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1020;
          reader_kitty_mouseEnterAction_1020.confidential = true;
          writer_kitty_mouseEnterAction_1020.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1019)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 112
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
          block1021.className = 'block<kitty:112>';
          block1021.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["mouseOverAction"] = block1021;
          var reader_kitty_mouseOverAction_1022 = function() {
            return this.data["mouseOverAction"];
          }
          obj683.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1022;
          obj683.data["mouseOverAction"] = block1021;
          var writer_kitty_mouseOverAction_1022 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj683.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1022;
          reader_kitty_mouseOverAction_1022.confidential = true;
          writer_kitty_mouseOverAction_1022.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1021)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 113
          var block1023 = Grace_allocObject();
          block1023.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1023.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1023.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1023.methods["match"] = GraceBlock_match;
          block1023.methods["prefix?"] = GraceBlock_lift;
          block1023.receiver = this;
          block1023.className = 'block<kitty:113>';
          block1023.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj683.data["mouseExitAction"] = block1023;
          var reader_kitty_mouseExitAction_1024 = function() {
            return this.data["mouseExitAction"];
          }
          obj683.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1024;
          obj683.data["mouseExitAction"] = block1023;
          var writer_kitty_mouseExitAction_1024 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj683.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1024;
          reader_kitty_mouseExitAction_1024.confidential = true;
          writer_kitty_mouseExitAction_1024.confidential = true;
          lineNumber = 113;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1023)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 113
          var bool1025 = new GraceBoolean(false)
          obj683.data["mouseOver"] = bool1025;
          var reader_kitty_mouseOver_1026 = function() {
            return this.data["mouseOver"];
          }
          obj683.methods["mouseOver"] = reader_kitty_mouseOver_1026;
          obj683.data["mouseOver"] = bool1025;
          var writer_kitty_mouseOver_1026 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj683.methods["mouseOver:="] = writer_kitty_mouseOver_1026;
          reader_kitty_mouseOver_1026.confidential = true;
          writer_kitty_mouseOver_1026.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 113
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1025)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 114
          var bool1027 = new GraceBoolean(false)
          obj683.data["mouseDownEntity"] = bool1027;
          var reader_kitty_mouseDownEntity_1028 = function() {
            return this.data["mouseDownEntity"];
          }
          obj683.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_1028;
          obj683.data["mouseDownEntity"] = bool1027;
          var writer_kitty_mouseDownEntity_1028 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj683.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_1028;
          reader_kitty_mouseDownEntity_1028.confidential = true;
          writer_kitty_mouseDownEntity_1028.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1027)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 116
          var call1029 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj683.data["mouseDragStart"] = call1029;
          var reader_kitty_mouseDragStart_1030 = function() {
            return this.data["mouseDragStart"];
          }
          obj683.methods["mouseDragStart"] = reader_kitty_mouseDragStart_1030;
          obj683.data["mouseDragStart"] = call1029;
          var writer_kitty_mouseDragStart_1030 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj683.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_1030;
          reader_kitty_mouseDragStart_1030.confidential = true;
          writer_kitty_mouseDragStart_1030.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1029)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj683.mutable = true;
          sourceObject = obj683;
          obj683.data["image"] = undefined;
          var reader_kitty_image_1031 = function() {
            return this.data["image"];
          }
          obj683.methods["image"] = reader_kitty_image_1031;
          obj683.data["image"] = undefined;
          var writer_kitty_image_1031 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj683.methods["image:="] = writer_kitty_image_1031;
          reader_kitty_image_1031.confidential = true;
          writer_kitty_image_1031.confidential = true;
          obj683.mutable = true;
          sourceObject = obj683;
          lineNumber = 119
          onSelf = true;
          var call1032 = callmethod(this, "awake", [0]);
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          sourceObject = obj683;
          superDepth = origSuperDepth;
        }
        obj_init_683.apply(inheritingObject, []);
        return obj683
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj329.methods["new()object"] = func682;
    var func1033 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 95
        var string1034 = new GraceString("class KittyEntity");
        return string1034
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1033.paramCounts = [
    ];
    func1033.variableArities = [
    ];
    obj329.methods["asDebugString"] = func1033;
    func1033.definitionLine = 95;
    func1033.definitionModule = "kitty";
    sourceObject = obj329;
    sourceObject = obj329;
    superDepth = origSuperDepth;
  }
  obj_init_329.apply(obj329, []);
  var var_KittyEntity = obj329;
  lineNumber = 292
  lineNumber = 304
  lineNumber = 309
  lineNumber = 313
  lineNumber = 318
  lineNumber = 322
  lineNumber = 326
  lineNumber = 330
  lineNumber = 334
  lineNumber = 338
  lineNumber = 345
  var func1035 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1035.paramCounts[0])
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
  func1035.paramCounts = [
    0,
  ];
  func1035.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func1035;
  func1035.definitionLine = 345;
  func1035.definitionModule = "kitty";
  var obj1036 = Grace_allocObject();
  obj1036.definitionModule = "kitty";
  obj1036.definitionLine = 345;
  obj1036.outer = this;
  var reader_kitty_outer_1037 = function() {
    return this.outer;
  }
  obj1036.methods["outer"] = reader_kitty_outer_1037;
  function obj_init_1036() {
    var origSuperDepth = superDepth;
    superDepth = obj1036;
    obj1036.annotations = [];
    var func1038 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1038.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj1039 = Grace_allocObject();
        obj1039.definitionModule = "kitty";
        obj1039.definitionLine = 345;
        obj1039.outer = this;
        var reader_kitty_outer_1040 = function() {
          return this.outer;
        }
        obj1039.methods["outer"] = reader_kitty_outer_1040;
        function obj_init_1039() {
          var origSuperDepth = superDepth;
          superDepth = obj1039;
          obj1039.annotations = [];
          var func1041 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1041.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 393
              var if1042 = var_done;
              lineNumber = 389
              onSelf = true;
              var call1043 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1043)) {
                lineNumber = 391
                lineNumber = 390
                var bool1044 = new GraceBoolean(false)
                return bool1044
              }
              lineNumber = 394
              lineNumber = 345
              lineNumber = 393
              var call1045 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1046 = callmethod(this, "document:=", [1], call1045);
              lineNumber = 394
              lineNumber = 393
              lineNumber = 394
              var string1047 = new GraceString("standard-canvas");
              onSelf = true;
              var call1048 = callmethod(this, "document", [0]);
              var call1049 = callmethod(call1048,"getElementById", [1], string1047);
              onSelf = true;
              var call1050 = callmethod(this, "canvas:=", [1], call1049);
              lineNumber = 396
              lineNumber = 393
              lineNumber = 395
              onSelf = true;
              var call1051 = callmethod(this, "canvas", [0]);
              var call1052 = callmethod(call1051,"width", [0]);
              onSelf = true;
              var call1053 = callmethod(this, "canvasWidth:=", [1], call1052);
              lineNumber = 399
              lineNumber = 395
              lineNumber = 396
              onSelf = true;
              var call1054 = callmethod(this, "canvas", [0]);
              var call1055 = callmethod(call1054,"height", [0]);
              onSelf = true;
              var call1056 = callmethod(this, "canvasHeight:=", [1], call1055);
              lineNumber = 411
              var block1057 = Grace_allocObject();
              block1057.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1057.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1057.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1057.methods["match"] = GraceBlock_match;
              block1057.methods["prefix?"] = GraceBlock_lift;
              block1057.receiver = this;
              block1057.className = 'block<kitty:411>';
              block1057.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 402
                onSelf = true;
                var call1058 = callmethod(this, "entities", [0]);
                lineNumber = 409
                var block1059 = Grace_allocObject();
                block1059.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1059.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1059.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1059.methods["match"] = GraceBlock_match;
                block1059.methods["prefix?"] = GraceBlock_lift;
                block1059.receiver = this;
                block1059.className = 'block<kitty:409>';
                block1059.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 406
                  var if1060 = var_done;
                  lineNumber = 403
                  var call1061 = callmethod(var_entity,"mouseDown", [0]);
                  if (Grace_isTrue(call1061)) {
                    lineNumber = 405
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1060;
                };
                var call1062 = callmethod(Grace_prelude,"for()do", [1, 1], call1058, block1059);
                lineNumber = 409
                onSelf = true;
                var call1063 = callmethod(this, "mouseDown", [0]);
                return call1063;
              };
              var_mouseDownListener = block1057;
              lineNumber = 411
              var string1064 = new GraceString("mousedown");
              var bool1065 = new GraceBoolean(false)
              onSelf = true;
              var call1066 = callmethod(this, "canvas", [0]);
              var call1067 = callmethod(call1066,"addEventListener", [3], string1064, var_mouseDownListener, bool1065);
              lineNumber = 425
              var block1068 = Grace_allocObject();
              block1068.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1068.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1068.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1068.methods["match"] = GraceBlock_match;
              block1068.methods["prefix?"] = GraceBlock_lift;
              block1068.receiver = this;
              block1068.className = 'block<kitty:425>';
              block1068.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 416
                onSelf = true;
                var call1069 = callmethod(this, "entities", [0]);
                lineNumber = 423
                var block1070 = Grace_allocObject();
                block1070.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1070.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1070.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1070.methods["match"] = GraceBlock_match;
                block1070.methods["prefix?"] = GraceBlock_lift;
                block1070.receiver = this;
                block1070.className = 'block<kitty:423>';
                block1070.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 420
                  var if1071 = var_done;
                  lineNumber = 417
                  var call1072 = callmethod(var_entity,"mouseUp", [0]);
                  if (Grace_isTrue(call1072)) {
                    lineNumber = 419
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1071;
                };
                var call1073 = callmethod(Grace_prelude,"for()do", [1, 1], call1069, block1070);
                lineNumber = 423
                onSelf = true;
                var call1074 = callmethod(this, "mouseUp", [0]);
                return call1074;
              };
              var_mouseUpListener = block1068;
              lineNumber = 425
              var string1075 = new GraceString("mouseup");
              onSelf = true;
              var call1076 = callmethod(this, "canvas", [0]);
              var call1077 = callmethod(call1076,"addEventListener", [2], string1075, var_mouseUpListener);
              lineNumber = 453
              var block1078 = Grace_allocObject();
              block1078.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1078.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1078.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1078.methods["match"] = GraceBlock_match;
              block1078.methods["prefix?"] = GraceBlock_lift;
              block1078.receiver = this;
              block1078.className = 'block<kitty:453>';
              block1078.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 429
                lineNumber = 428
                onSelf = true;
                var call1079 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1081 = callmethod(this, "canvas", [0]);
                var call1082 = callmethod(call1081,"offsetWidth", [0]);
                onSelf = true;
                var call1084 = callmethod(this, "canvas", [0]);
                var call1085 = callmethod(call1084,"offsetLeft", [0]);
                var call1087 = callmethod(var_ev,"clientX", [0]);
                var diff1089 = callmethod(call1087, "-", [1], call1085);
                var quotient1091 = callmethod(diff1089, "/", [1], call1082);
                var prod1093 = callmethod(quotient1091, "*", [1], call1079);
                var var_x = prod1093;
                lineNumber = 429;
                moduleName = "kitty";
                lineNumber = 428
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 430
                lineNumber = 429
                onSelf = true;
                var call1094 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1096 = callmethod(this, "canvas", [0]);
                var call1097 = callmethod(call1096,"offsetHeight", [0]);
                onSelf = true;
                var call1099 = callmethod(this, "canvas", [0]);
                var call1100 = callmethod(call1099,"offsetTop", [0]);
                var call1102 = callmethod(var_ev,"clientY", [0]);
                var diff1104 = callmethod(call1102, "-", [1], call1100);
                var quotient1106 = callmethod(diff1104, "/", [1], call1097);
                var prod1108 = callmethod(quotient1106, "*", [1], call1094);
                var var_y = prod1108;
                lineNumber = 430;
                moduleName = "kitty";
                lineNumber = 429
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 430
                lineNumber = 429
                lineNumber = 430
                var call1109 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1110 = callmethod(var_mouse,"position:=", [1], call1109);
                lineNumber = 435
                lineNumber = 432
                var bool1111 = new GraceBoolean(false)
                var var_actionDone = bool1111;
                lineNumber = 435;
                moduleName = "kitty";
                lineNumber = 432
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_actionDone)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'actionDone' to be of type Unknown"))
                lineNumber = 435
                onSelf = true;
                var call1112 = callmethod(this, "entities", [0]);
                lineNumber = 449
                var block1113 = Grace_allocObject();
                block1113.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1113.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1113.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1113.methods["match"] = GraceBlock_match;
                block1113.methods["prefix?"] = GraceBlock_lift;
                block1113.receiver = this;
                block1113.className = 'block<kitty:449>';
                block1113.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 441
                  var if1114 = var_done;
                  lineNumber = 436
                  var call1115 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1115)) {
                    lineNumber = 437
                    onSelf = true;
                    var call1116 = callmethod(this, "mouseExit", [0]);
                    lineNumber = 439
                    lineNumber = 438
                    var bool1117 = new GraceBoolean(true)
                    var_mouseOverEntity = bool1117;
                    lineNumber = 440
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 446
                  var if1118 = var_done;
                  lineNumber = 441
                  var call1119 = callmethod(var_entity,"mouseExit", [0]);
                  if (Grace_isTrue(call1119)) {
                    lineNumber = 442
                    onSelf = true;
                    var call1120 = callmethod(this, "mouseEnter", [0]);
                    lineNumber = 444
                    lineNumber = 443
                    var bool1121 = new GraceBoolean(false)
                    var_mouseOverEntity = bool1121;
                    lineNumber = 445
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1118;
                };
                var call1122 = callmethod(Grace_prelude,"for()do", [1, 1], call1112, block1113);
                lineNumber = 452
                var if1123 = var_done;
                lineNumber = 449
                var call1124 = callmethod(var_mouseOverEntity,"prefix!", [0]);
                if (Grace_isTrue(call1124)) {
                  lineNumber = 450
                  onSelf = true;
                  var call1125 = callmethod(this, "mouseEnter", [0]);
                  if1123 = call1125;
                }
                return if1123;
              };
              var_mouseMoveListener = block1078;
              lineNumber = 453
              var string1126 = new GraceString("mousemove");
              onSelf = true;
              var call1127 = callmethod(this, "canvas", [0]);
              var call1128 = callmethod(call1127,"addEventListener", [2], string1126, var_mouseMoveListener);
              lineNumber = 463
              var block1129 = Grace_allocObject();
              block1129.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1129.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1129.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1129.methods["match"] = GraceBlock_match;
              block1129.methods["prefix?"] = GraceBlock_lift;
              block1129.receiver = this;
              block1129.className = 'block<kitty:463>';
              block1129.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 461
                var if1130 = var_done;
                lineNumber = 458
                var call1132 = callmethod(var_ev,"keyCode", [0]);
                var opresult1134 = callmethod(call1132, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1134)) {
                  lineNumber = 459
                  onSelf = true;
                  var call1135 = callmethod(this, "stop", [0]);
                  if1130 = call1135;
                }
                lineNumber = 462
                lineNumber = 461
                var call1136 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1136;
                return call1136;
              };
              var_keyDownListener = block1129;
              lineNumber = 463
              var string1137 = new GraceString("keydown");
              onSelf = true;
              var call1138 = callmethod(this, "document", [0]);
              var call1139 = callmethod(call1138,"addEventListener", [2], string1137, var_keyDownListener);
              lineNumber = 469
              var block1140 = Grace_allocObject();
              block1140.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1140.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1140.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1140.methods["match"] = GraceBlock_match;
              block1140.methods["prefix?"] = GraceBlock_lift;
              block1140.receiver = this;
              block1140.className = 'block<kitty:469>';
              block1140.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 468
                lineNumber = 467
                var call1141 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1141;
                return call1141;
              };
              var_keyUpListener = block1140;
              lineNumber = 469
              var string1142 = new GraceString("keyup");
              onSelf = true;
              var call1143 = callmethod(this, "document", [0]);
              var call1144 = callmethod(call1143,"addEventListener", [2], string1142, var_keyUpListener);
              lineNumber = 471
              lineNumber = 461
              lineNumber = 471
              var string1145 = new GraceString("canvas");
              var call1146 = callmethod(var_dom,"document", [0]);
              var call1147 = callmethod(call1146,"createElement", [1], string1145);
              onSelf = true;
              var call1148 = callmethod(this, "backingCanvas:=", [1], call1147);
              lineNumber = 473
              lineNumber = 471
              lineNumber = 472
              onSelf = true;
              var call1149 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1150 = callmethod(this, "backingCanvas", [0]);
              var call1151 = callmethod(call1150,"height:=", [1], call1149);
              lineNumber = 474
              lineNumber = 471
              lineNumber = 473
              onSelf = true;
              var call1152 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1153 = callmethod(this, "backingCanvas", [0]);
              var call1154 = callmethod(call1153,"width:=", [1], call1152);
              lineNumber = 474
              lineNumber = 471
              lineNumber = 474
              var string1155 = new GraceString("2d");
              onSelf = true;
              var call1156 = callmethod(this, "backingCanvas", [0]);
              var call1157 = callmethod(call1156,"getContext", [1], string1155);
              onSelf = true;
              var call1158 = callmethod(this, "backingContext:=", [1], call1157);
              lineNumber = 475
              lineNumber = 471
              lineNumber = 475
              var string1159 = new GraceString("2d");
              onSelf = true;
              var call1160 = callmethod(this, "canvas", [0]);
              var call1161 = callmethod(call1160,"getContext", [1], string1159);
              onSelf = true;
              var call1162 = callmethod(this, "mctx:=", [1], call1161);
              lineNumber = 478
              var string1163 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1164 = callmethod(this, "setBackground", [1], string1163);
              lineNumber = 481
              var call1165 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1166 = callmethod(call1165, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1167 = callmethod(call1166, "setWorld", [1], this);
              lineNumber = 484
              lineNumber = 483
              var_kitten = this;
              lineNumber = 485
              lineNumber = 481
              lineNumber = 484
              var bool1168 = new GraceBoolean(true)
              onSelf = true;
              var call1169 = callmethod(this, "isInit:=", [1], bool1168);
              return call1169
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1041.paramCounts = [
            0,
          ];
          func1041.variableArities = [
            false,
          ];
          obj1039.methods["init"] = func1041;
          func1041.definitionLine = 385;
          func1041.definitionModule = "kitty";
          var func1170 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1170.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              lineNumber = 481
              lineNumber = 490
              var bool1171 = new GraceBoolean(true)
              onSelf = true;
              var call1172 = callmethod(this, "isRunning:=", [1], bool1171);
              lineNumber = 491
              var block1173 = Grace_allocObject();
              block1173.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1173.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1173.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1173.methods["match"] = GraceBlock_match;
              block1173.methods["prefix?"] = GraceBlock_lift;
              block1173.receiver = this;
              block1173.className = 'block<kitty:491>';
              block1173.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1174 = callmethod(this, "isRunning", [0]);
                return call1174;
              };
              lineNumber = 495
              var block1175 = Grace_allocObject();
              block1175.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1175.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1175.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1175.methods["match"] = GraceBlock_match;
              block1175.methods["prefix?"] = GraceBlock_lift;
              block1175.receiver = this;
              block1175.className = 'block<kitty:495>';
              block1175.real = function(
              ) {
                sourceObject = this;
                lineNumber = 492
                onSelf = true;
                var call1176 = callmethod(this, "tick", [0]);
                return call1176;
              };
              lineNumber = 491
              var call1177 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1173, new GraceNum(10), block1175);
              return call1177
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1170.paramCounts = [
            0,
          ];
          func1170.variableArities = [
            false,
          ];
          obj1039.methods["start"] = func1170;
          func1170.definitionLine = 488;
          func1170.definitionModule = "kitty";
          var func1178 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1178.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 481
              lineNumber = 503
              onSelf = true;
              var call1179 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1180 = callmethod(this, "mctx", [0]);
              var call1181 = callmethod(call1180,"fillStyle:=", [1], call1179);
              lineNumber = 504
              onSelf = true;
              var call1182 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1183 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1184 = callmethod(this, "mctx", [0]);
              var call1185 = callmethod(call1184,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1182, call1183);
              lineNumber = 505
              onSelf = true;
              var call1186 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1187 = callmethod(this, "mctx", [0]);
              var call1188 = callmethod(call1187,"drawImage", [3], call1186, new GraceNum(0), new GraceNum(0));
              lineNumber = 506
              onSelf = true;
              var call1189 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1191 = callmethod(this, "canvasWidth", [0]);
              var quotient1193 = callmethod(call1191, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1195 = callmethod(this, "canvasHeight", [0]);
              var quotient1197 = callmethod(call1195, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1198 = callmethod(this, "background", [0]);
              var call1199 = callmethod(call1198,"draw", [4], call1189, quotient1193, quotient1197, new GraceNum(0));
              lineNumber = 509
              onSelf = true;
              var call1200 = callmethod(this, "updateAction", [0]);
              var call1201 = callmethod(call1200,"apply", [0]);
              lineNumber = 516
              var if1202 = var_done;
              lineNumber = 511
              onSelf = true;
              var call1203 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1203)) {
                lineNumber = 512
                onSelf = true;
                var call1204 = callmethod(this, "mouseOverAction", [0]);
                var call1205 = callmethod(call1204,"apply", [0]);
                if1202 = call1205;
              }
              lineNumber = 516
              onSelf = true;
              var call1206 = callmethod(this, "entities", [0]);
              lineNumber = 523
              var block1207 = Grace_allocObject();
              block1207.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1207.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1207.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1207.methods["match"] = GraceBlock_match;
              block1207.methods["prefix?"] = GraceBlock_lift;
              block1207.receiver = this;
              block1207.className = 'block<kitty:523>';
              block1207.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 517
                var call1208 = callmethod(var_entity,"tick", [0]);
                lineNumber = 519
                onSelf = true;
                var call1209 = callmethod(this, "mctx", [0]);
                var call1210 = callmethod(var_entity,"draw", [3], call1209, new GraceNum(0), new GraceNum(0));
                return call1210;
              };
              var call1211 = callmethod(Grace_prelude,"for()do", [1, 1], call1206, block1207);
              return call1211
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1178.paramCounts = [
            0,
          ];
          func1178.variableArities = [
            false,
          ];
          obj1039.methods["tick"] = func1178;
          func1178.definitionLine = 498;
          func1178.definitionModule = "kitty";
          var func1212 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1212.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 526
              var string1213 = new GraceString("WORLD STOPPING...");
              var call1214 = Grace_print(string1213);
              lineNumber = 528
              lineNumber = 517
              lineNumber = 527
              var bool1215 = new GraceBoolean(false)
              onSelf = true;
              var call1216 = callmethod(this, "isRunning:=", [1], bool1215);
              lineNumber = 528
              onSelf = true;
              var call1217 = callmethod(this, "destroyAction", [0]);
              var call1218 = callmethod(call1217,"apply", [0]);
              lineNumber = 529
              onSelf = true;
              var call1219 = callmethod(this, "entities", [0]);
              lineNumber = 532
              var block1220 = Grace_allocObject();
              block1220.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1220.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1220.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1220.methods["match"] = GraceBlock_match;
              block1220.methods["prefix?"] = GraceBlock_lift;
              block1220.receiver = this;
              block1220.className = 'block<kitty:532>';
              block1220.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 530
                var call1221 = callmethod(var_entity,"kill", [0]);
                return call1221;
              };
              var call1222 = callmethod(Grace_prelude,"for()do", [1, 1], call1219, block1220);
              lineNumber = 532
              var string1223 = new GraceString("mousedown");
              onSelf = true;
              var call1224 = callmethod(this, "canvas", [0]);
              var call1225 = callmethod(call1224,"removeEventListener", [2], string1223, var_mouseDownListener);
              lineNumber = 533
              var string1226 = new GraceString("mouseup");
              onSelf = true;
              var call1227 = callmethod(this, "canvas", [0]);
              var call1228 = callmethod(call1227,"removeEventListener", [2], string1226, var_mouseUpListener);
              lineNumber = 534
              var string1229 = new GraceString("mousemove");
              onSelf = true;
              var call1230 = callmethod(this, "canvas", [0]);
              var call1231 = callmethod(call1230,"removeEventListener", [2], string1229, var_mouseMoveListener);
              lineNumber = 535
              var string1232 = new GraceString("keydown");
              onSelf = true;
              var call1233 = callmethod(this, "document", [0]);
              var call1234 = callmethod(call1233,"removeEventListener", [2], string1232, var_keyDownListener);
              lineNumber = 536
              var string1235 = new GraceString("keyup");
              onSelf = true;
              var call1236 = callmethod(this, "document", [0]);
              var call1237 = callmethod(call1236,"removeEventListener", [2], string1235, var_keyUpListener);
              return call1237
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1212.paramCounts = [
            0,
          ];
          func1212.variableArities = [
            false,
          ];
          obj1039.methods["stop"] = func1212;
          func1212.definitionLine = 525;
          func1212.definitionModule = "kitty";
          var func1238 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1238.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 540
              onSelf = true;
              var call1239 = callmethod(this, "mouseDownAction", [0]);
              var call1240 = callmethod(call1239,"apply", [0]);
              return call1240
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1238.paramCounts = [
            0,
          ];
          func1238.variableArities = [
            false,
          ];
          obj1039.methods["mouseDown"] = func1238;
          func1238.definitionLine = 539;
          func1238.definitionModule = "kitty";
          var func1241 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1241.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 544
              onSelf = true;
              var call1242 = callmethod(this, "mouseUpAction", [0]);
              var call1243 = callmethod(call1242,"apply", [0]);
              return call1243
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1241.paramCounts = [
            0,
          ];
          func1241.variableArities = [
            false,
          ];
          obj1039.methods["mouseUp"] = func1241;
          func1241.definitionLine = 543;
          func1241.definitionModule = "kitty";
          var func1244 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 553
              var if1245 = var_done;
              lineNumber = 550
              onSelf = true;
              var call1246 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1246)) {
                lineNumber = 552
                lineNumber = 551
                var bool1247 = new GraceBoolean(false)
                return bool1247
              }
              lineNumber = 553
              onSelf = true;
              var call1248 = callmethod(this, "mouseEnterAction", [0]);
              var call1249 = callmethod(call1248,"apply", [0]);
              lineNumber = 555
              lineNumber = 553
              lineNumber = 554
              var bool1250 = new GraceBoolean(true)
              onSelf = true;
              var call1251 = callmethod(this, "mouseOver:=", [1], bool1250);
              return call1251
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1244.paramCounts = [
            0,
          ];
          func1244.variableArities = [
            false,
          ];
          obj1039.methods["mouseEnter"] = func1244;
          func1244.definitionLine = 549;
          func1244.definitionModule = "kitty";
          var func1252 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1252.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 561
              var if1253 = var_done;
              lineNumber = 558
              onSelf = true;
              var call1254 = callmethod(this, "mouseOver", [0]);
              var call1255 = callmethod(call1254,"prefix!", [0]);
              if (Grace_isTrue(call1255)) {
                lineNumber = 560
                lineNumber = 559
                var bool1256 = new GraceBoolean(false)
                return bool1256
              }
              lineNumber = 561
              onSelf = true;
              var call1257 = callmethod(this, "mouseExitAction", [0]);
              var call1258 = callmethod(call1257,"apply", [0]);
              lineNumber = 563
              lineNumber = 561
              lineNumber = 562
              var bool1259 = new GraceBoolean(false)
              onSelf = true;
              var call1260 = callmethod(this, "mouseOver:=", [1], bool1259);
              return call1260
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1252.paramCounts = [
            0,
          ];
          func1252.variableArities = [
            false,
          ];
          obj1039.methods["mouseExit"] = func1252;
          func1252.definitionLine = 557;
          func1252.definitionModule = "kitty";
          var func1261 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 566
              lineNumber = 561
              lineNumber = 566
              onSelf = true;
              var call1262 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1263 = callmethod(this, "canvasHeight", [0]);
              var call1264 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1265 = callmethod(call1264, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1266 = callmethod(call1265, "Image()width()height", [1, 1, 1], var_url, call1262, call1263);
              onSelf = true;
              var call1267 = callmethod(this, "background:=", [1], call1266);
              return call1267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1261.paramCounts = [
            1,
          ];
          func1261.variableArities = [
            false,
          ];
          obj1039.methods["setBackground"] = func1261;
          func1261.definitionLine = 565;
          func1261.definitionModule = "kitty";
          var func1268 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 570
              onSelf = true;
              var call1269 = callmethod(this, "entities", [0]);
              var call1270 = callmethod(call1269,"push", [1], var_e);
              return call1270
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1268.paramCounts = [
            1,
          ];
          func1268.variableArities = [
            false,
          ];
          obj1039.methods["addEntity"] = func1268;
          func1268.definitionLine = 569;
          func1268.definitionModule = "kitty";
          var func1271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 575
              lineNumber = 574
              onSelf = true;
              var call1272 = callmethod(this, "mctx", [0]);
              return call1272
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1271.paramCounts = [
            0,
          ];
          func1271.variableArities = [
            false,
          ];
          obj1039.methods["getContext"] = func1271;
          func1271.definitionLine = 573;
          func1271.definitionModule = "kitty";
          var func1273 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1273.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 579
              lineNumber = 578
              onSelf = true;
              var call1274 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1276 = callmethod(this, "canvasWidth", [0]);
              var quotient1278 = callmethod(call1276, "/", [1], call1274);
              return quotient1278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1273.paramCounts = [
            0,
          ];
          func1273.variableArities = [
            false,
          ];
          obj1039.methods["moveWidthMultipler"] = func1273;
          func1273.definitionLine = 577;
          func1273.definitionModule = "kitty";
          var func1279 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 583
              lineNumber = 582
              onSelf = true;
              var call1280 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1282 = callmethod(this, "canvasHeight", [0]);
              var quotient1284 = callmethod(call1282, "/", [1], call1280);
              return quotient1284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1279.paramCounts = [
            0,
          ];
          func1279.variableArities = [
            false,
          ];
          obj1039.methods["moveHeightMultipler"] = func1279;
          func1279.definitionLine = 581;
          func1279.definitionModule = "kitty";
          var func1285 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 588
              lineNumber = 566
              lineNumber = 587
              onSelf = true;
              var call1286 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1286
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1285.paramCounts = [
            1,
          ];
          func1285.variableArities = [
            false,
          ];
          obj1039.methods["setUpdateAction"] = func1285;
          func1285.definitionLine = 586;
          func1285.definitionModule = "kitty";
          var func1287 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 592
              lineNumber = 566
              lineNumber = 591
              onSelf = true;
              var call1288 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1287.paramCounts = [
            1,
          ];
          func1287.variableArities = [
            false,
          ];
          obj1039.methods["setDestroyAction"] = func1287;
          func1287.definitionLine = 590;
          func1287.definitionModule = "kitty";
          var func1289 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 596
              lineNumber = 566
              lineNumber = 595
              onSelf = true;
              var call1290 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1289.paramCounts = [
            1,
          ];
          func1289.variableArities = [
            false,
          ];
          obj1039.methods["setMouseDownAction"] = func1289;
          func1289.definitionLine = 594;
          func1289.definitionModule = "kitty";
          var func1291 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 600
              lineNumber = 566
              lineNumber = 599
              onSelf = true;
              var call1292 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1292
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1291.paramCounts = [
            1,
          ];
          func1291.variableArities = [
            false,
          ];
          obj1039.methods["setMouseUpAction"] = func1291;
          func1291.definitionLine = 598;
          func1291.definitionModule = "kitty";
          var func1293 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 604
              lineNumber = 566
              lineNumber = 603
              onSelf = true;
              var call1294 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1293.paramCounts = [
            1,
          ];
          func1293.variableArities = [
            false,
          ];
          obj1039.methods["setMouseEnterAction"] = func1293;
          func1293.definitionLine = 602;
          func1293.definitionModule = "kitty";
          var func1295 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 607
              var string1296 = new GraceString("*Drag Not Available For World*");
              var call1297 = Grace_print(string1296);
              return call1297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1295.paramCounts = [
            1,
          ];
          func1295.variableArities = [
            false,
          ];
          obj1039.methods["setMouseDragAction"] = func1295;
          func1295.definitionLine = 606;
          func1295.definitionModule = "kitty";
          var func1298 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 612
              lineNumber = 566
              lineNumber = 611
              onSelf = true;
              var call1299 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1298.paramCounts = [
            1,
          ];
          func1298.variableArities = [
            false,
          ];
          obj1039.methods["setMouseOverAction"] = func1298;
          func1298.definitionLine = 610;
          func1298.definitionModule = "kitty";
          var func1300 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 616
              lineNumber = 566
              lineNumber = 615
              onSelf = true;
              var call1301 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1301
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1300.paramCounts = [
            1,
          ];
          func1300.variableArities = [
            false,
          ];
          obj1039.methods["setMouseExitAction"] = func1300;
          func1300.definitionLine = 614;
          func1300.definitionModule = "kitty";
          sourceObject = obj1039;
          lineNumber = 348
          obj1039.data["width"] = var_width__39__;
          var reader_kitty_width_1302 = function() {
            return this.data["width"];
          }
          obj1039.methods["width"] = reader_kitty_width_1302;
          obj1039.data["width"] = var_width__39__;
          var writer_kitty_width_1302 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1039.methods["width:="] = writer_kitty_width_1302;
          lineNumber = 349;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 349
          obj1039.data["height"] = var_height__39__;
          var reader_kitty_height_1303 = function() {
            return this.data["height"];
          }
          obj1039.methods["height"] = reader_kitty_height_1303;
          obj1039.data["height"] = var_height__39__;
          var writer_kitty_height_1303 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1039.methods["height:="] = writer_kitty_height_1303;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 349
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 350
          obj1039.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1304 = function() {
            return this.data["tag"];
          }
          obj1039.methods["tag"] = reader_kitty_tag_1304;
          obj1039.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1304 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1039.methods["tag:="] = writer_kitty_tag_1304;
          lineNumber = 352;
          moduleName = "kitty";
          lineNumber = 350
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["background"] = undefined;
          var reader_kitty_background_1305 = function() {
            return this.data["background"];
          }
          obj1039.methods["background"] = reader_kitty_background_1305;
          obj1039.data["background"] = undefined;
          var writer_kitty_background_1305 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1039.methods["background:="] = writer_kitty_background_1305;
          reader_kitty_background_1305.confidential = true;
          writer_kitty_background_1305.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 353
          var string1306 = new GraceString("black");
          obj1039.data["backgroundColour"] = string1306;
          var reader_kitty_backgroundColour_1307 = function() {
            return this.data["backgroundColour"];
          }
          obj1039.methods["backgroundColour"] = reader_kitty_backgroundColour_1307;
          obj1039.data["backgroundColour"] = string1306;
          var writer_kitty_backgroundColour_1307 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1039.methods["backgroundColour:="] = writer_kitty_backgroundColour_1307;
          reader_kitty_backgroundColour_1307.confidential = true;
          writer_kitty_backgroundColour_1307.confidential = true;
          lineNumber = 355;
          moduleName = "kitty";
          lineNumber = 353
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1306)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["document"] = undefined;
          var reader_kitty_document_1308 = function() {
            return this.data["document"];
          }
          obj1039.methods["document"] = reader_kitty_document_1308;
          obj1039.data["document"] = undefined;
          var writer_kitty_document_1308 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1039.methods["document:="] = writer_kitty_document_1308;
          reader_kitty_document_1308.confidential = true;
          writer_kitty_document_1308.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1309 = function() {
            return this.data["backingCanvas"];
          }
          obj1039.methods["backingCanvas"] = reader_kitty_backingCanvas_1309;
          obj1039.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1309 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1039.methods["backingCanvas:="] = writer_kitty_backingCanvas_1309;
          reader_kitty_backingCanvas_1309.confidential = true;
          writer_kitty_backingCanvas_1309.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1310 = function() {
            return this.data["backingContext"];
          }
          obj1039.methods["backingContext"] = reader_kitty_backingContext_1310;
          obj1039.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1310 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1039.methods["backingContext:="] = writer_kitty_backingContext_1310;
          reader_kitty_backingContext_1310.confidential = true;
          writer_kitty_backingContext_1310.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["canvas"] = undefined;
          var reader_kitty_canvas_1311 = function() {
            return this.data["canvas"];
          }
          obj1039.methods["canvas"] = reader_kitty_canvas_1311;
          obj1039.data["canvas"] = undefined;
          var writer_kitty_canvas_1311 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1039.methods["canvas:="] = writer_kitty_canvas_1311;
          reader_kitty_canvas_1311.confidential = true;
          writer_kitty_canvas_1311.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1312 = function() {
            return this.data["canvasWidth"];
          }
          obj1039.methods["canvasWidth"] = reader_kitty_canvasWidth_1312;
          obj1039.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1312 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1039.methods["canvasWidth:="] = writer_kitty_canvasWidth_1312;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1313 = function() {
            return this.data["canvasHeight"];
          }
          obj1039.methods["canvasHeight"] = reader_kitty_canvasHeight_1313;
          obj1039.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1313 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1039.methods["canvasHeight:="] = writer_kitty_canvasHeight_1313;
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 364
          var call1314 = callmethod(var_collections,"list", [0]);
          var call1315 = callmethod(call1314,"new", [0]);
          obj1039.data["entities"] = call1315;
          var reader_kitty_entities_1316 = function() {
            return this.data["entities"];
          }
          obj1039.methods["entities"] = reader_kitty_entities_1316;
          obj1039.data["entities"] = call1315;
          var writer_kitty_entities_1316 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1039.methods["entities:="] = writer_kitty_entities_1316;
          reader_kitty_entities_1316.confidential = true;
          writer_kitty_entities_1316.confidential = true;
          lineNumber = 366;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1315)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 366
          var bool1317 = new GraceBoolean(false)
          obj1039.data["isInit"] = bool1317;
          var reader_kitty_isInit_1318 = function() {
            return this.data["isInit"];
          }
          obj1039.methods["isInit"] = reader_kitty_isInit_1318;
          obj1039.data["isInit"] = bool1317;
          var writer_kitty_isInit_1318 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1039.methods["isInit:="] = writer_kitty_isInit_1318;
          reader_kitty_isInit_1318.confidential = true;
          writer_kitty_isInit_1318.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 366
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1317)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 367
          var bool1319 = new GraceBoolean(false)
          obj1039.data["isRunning"] = bool1319;
          var reader_kitty_isRunning_1320 = function() {
            return this.data["isRunning"];
          }
          obj1039.methods["isRunning"] = reader_kitty_isRunning_1320;
          obj1039.data["isRunning"] = bool1319;
          var writer_kitty_isRunning_1320 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1039.methods["isRunning:="] = writer_kitty_isRunning_1320;
          reader_kitty_isRunning_1320.confidential = true;
          writer_kitty_isRunning_1320.confidential = true;
          lineNumber = 369;
          moduleName = "kitty";
          lineNumber = 367
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1319)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["mctx"] = undefined;
          var reader_kitty_mctx_1321 = function() {
            return this.data["mctx"];
          }
          obj1039.methods["mctx"] = reader_kitty_mctx_1321;
          obj1039.data["mctx"] = undefined;
          var writer_kitty_mctx_1321 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1039.methods["mctx:="] = writer_kitty_mctx_1321;
          reader_kitty_mctx_1321.confidential = true;
          writer_kitty_mctx_1321.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          obj1039.data["ent"] = undefined;
          var reader_kitty_ent_1322 = function() {
            return this.data["ent"];
          }
          obj1039.methods["ent"] = reader_kitty_ent_1322;
          obj1039.data["ent"] = undefined;
          var writer_kitty_ent_1322 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1039.methods["ent:="] = writer_kitty_ent_1322;
          reader_kitty_ent_1322.confidential = true;
          writer_kitty_ent_1322.confidential = true;
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 374
          var block1323 = Grace_allocObject();
          block1323.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1323.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1323.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1323.methods["match"] = GraceBlock_match;
          block1323.methods["prefix?"] = GraceBlock_lift;
          block1323.receiver = this;
          block1323.className = 'block<kitty:374>';
          block1323.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["updateAction"] = block1323;
          var reader_kitty_updateAction_1324 = function() {
            return this.data["updateAction"];
          }
          obj1039.methods["updateAction"] = reader_kitty_updateAction_1324;
          obj1039.data["updateAction"] = block1323;
          var writer_kitty_updateAction_1324 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1039.methods["updateAction:="] = writer_kitty_updateAction_1324;
          reader_kitty_updateAction_1324.confidential = true;
          writer_kitty_updateAction_1324.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1323)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 375
          var block1325 = Grace_allocObject();
          block1325.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1325.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1325.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1325.methods["match"] = GraceBlock_match;
          block1325.methods["prefix?"] = GraceBlock_lift;
          block1325.receiver = this;
          block1325.className = 'block<kitty:375>';
          block1325.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["destroyAction"] = block1325;
          var reader_kitty_destroyAction_1326 = function() {
            return this.data["destroyAction"];
          }
          obj1039.methods["destroyAction"] = reader_kitty_destroyAction_1326;
          obj1039.data["destroyAction"] = block1325;
          var writer_kitty_destroyAction_1326 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1039.methods["destroyAction:="] = writer_kitty_destroyAction_1326;
          reader_kitty_destroyAction_1326.confidential = true;
          writer_kitty_destroyAction_1326.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1325)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 376
          var block1327 = Grace_allocObject();
          block1327.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1327.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1327.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1327.methods["match"] = GraceBlock_match;
          block1327.methods["prefix?"] = GraceBlock_lift;
          block1327.receiver = this;
          block1327.className = 'block<kitty:376>';
          block1327.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["mouseEnterAction"] = block1327;
          var reader_kitty_mouseEnterAction_1328 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1039.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1328;
          obj1039.data["mouseEnterAction"] = block1327;
          var writer_kitty_mouseEnterAction_1328 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1039.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1328;
          reader_kitty_mouseEnterAction_1328.confidential = true;
          writer_kitty_mouseEnterAction_1328.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1327)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 377
          var block1329 = Grace_allocObject();
          block1329.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1329.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1329.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1329.methods["match"] = GraceBlock_match;
          block1329.methods["prefix?"] = GraceBlock_lift;
          block1329.receiver = this;
          block1329.className = 'block<kitty:377>';
          block1329.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["mouseOverAction"] = block1329;
          var reader_kitty_mouseOverAction_1330 = function() {
            return this.data["mouseOverAction"];
          }
          obj1039.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1330;
          obj1039.data["mouseOverAction"] = block1329;
          var writer_kitty_mouseOverAction_1330 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1039.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1330;
          reader_kitty_mouseOverAction_1330.confidential = true;
          writer_kitty_mouseOverAction_1330.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1329)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 378
          var block1331 = Grace_allocObject();
          block1331.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1331.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1331.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1331.methods["match"] = GraceBlock_match;
          block1331.methods["prefix?"] = GraceBlock_lift;
          block1331.receiver = this;
          block1331.className = 'block<kitty:378>';
          block1331.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["mouseExitAction"] = block1331;
          var reader_kitty_mouseExitAction_1332 = function() {
            return this.data["mouseExitAction"];
          }
          obj1039.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1332;
          obj1039.data["mouseExitAction"] = block1331;
          var writer_kitty_mouseExitAction_1332 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1039.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1332;
          reader_kitty_mouseExitAction_1332.confidential = true;
          writer_kitty_mouseExitAction_1332.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1331)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 379
          var block1333 = Grace_allocObject();
          block1333.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1333.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1333.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1333.methods["match"] = GraceBlock_match;
          block1333.methods["prefix?"] = GraceBlock_lift;
          block1333.receiver = this;
          block1333.className = 'block<kitty:379>';
          block1333.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["mouseDownAction"] = block1333;
          var reader_kitty_mouseDownAction_1334 = function() {
            return this.data["mouseDownAction"];
          }
          obj1039.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1334;
          obj1039.data["mouseDownAction"] = block1333;
          var writer_kitty_mouseDownAction_1334 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1039.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1334;
          reader_kitty_mouseDownAction_1334.confidential = true;
          writer_kitty_mouseDownAction_1334.confidential = true;
          lineNumber = 379;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1333)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 380
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
          block1335.className = 'block<kitty:380>';
          block1335.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1039.data["mouseUpAction"] = block1335;
          var reader_kitty_mouseUpAction_1336 = function() {
            return this.data["mouseUpAction"];
          }
          obj1039.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1336;
          obj1039.data["mouseUpAction"] = block1335;
          var writer_kitty_mouseUpAction_1336 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1039.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1336;
          reader_kitty_mouseUpAction_1336.confidential = true;
          writer_kitty_mouseUpAction_1336.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 379
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1335)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 380
          var bool1337 = new GraceBoolean(false)
          obj1039.data["mouseOver"] = bool1337;
          var reader_kitty_mouseOver_1338 = function() {
            return this.data["mouseOver"];
          }
          obj1039.methods["mouseOver"] = reader_kitty_mouseOver_1338;
          obj1039.data["mouseOver"] = bool1337;
          var writer_kitty_mouseOver_1338 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1039.methods["mouseOver:="] = writer_kitty_mouseOver_1338;
          reader_kitty_mouseOver_1338.confidential = true;
          writer_kitty_mouseOver_1338.confidential = true;
          lineNumber = 382;
          moduleName = "kitty";
          lineNumber = 380
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1337)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1039.mutable = true;
          sourceObject = obj1039;
          lineNumber = 382
          onSelf = true;
          var call1339 = callmethod(this, "init", [0]);
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          sourceObject = obj1039;
          superDepth = origSuperDepth;
        }
        obj_init_1039.apply(obj1039, []);
        return obj1039
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1038.paramCounts = [
      3,
    ];
    func1038.variableArities = [
      false,
    ];
    obj1036.methods["new"] = func1038;
    func1038.definitionLine = 345;
    func1038.definitionModule = "kitty";
    var func1340 = function(argcv) {
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
        var obj1341 = Grace_allocObject();
        obj1341.definitionModule = "kitty";
        obj1341.definitionLine = 345;
        var inho1341 = inheritingObject;
        while (inho1341.superobj) inho1341 = inho1341.superobj;
        inho1341.superobj = obj1341;
        obj1341.data = inheritingObject.data;
        obj1341.outer = this;
        var reader_kitty_outer_1342 = function() {
          return this.outer;
        }
        obj1341.methods["outer"] = reader_kitty_outer_1342;
        function obj_init_1341() {
          var origSuperDepth = superDepth;
          superDepth = obj1341;
          obj1341.annotations = [];
          var func1343 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 393
              var if1344 = var_done;
              lineNumber = 389
              onSelf = true;
              var call1345 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1345)) {
                lineNumber = 391
                lineNumber = 390
                var bool1346 = new GraceBoolean(false)
                return bool1346
              }
              lineNumber = 394
              lineNumber = 364
              lineNumber = 393
              var call1347 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1348 = callmethod(this, "document:=", [1], call1347);
              lineNumber = 394
              lineNumber = 393
              lineNumber = 394
              var string1349 = new GraceString("standard-canvas");
              onSelf = true;
              var call1350 = callmethod(this, "document", [0]);
              var call1351 = callmethod(call1350,"getElementById", [1], string1349);
              onSelf = true;
              var call1352 = callmethod(this, "canvas:=", [1], call1351);
              lineNumber = 396
              lineNumber = 393
              lineNumber = 395
              onSelf = true;
              var call1353 = callmethod(this, "canvas", [0]);
              var call1354 = callmethod(call1353,"width", [0]);
              onSelf = true;
              var call1355 = callmethod(this, "canvasWidth:=", [1], call1354);
              lineNumber = 399
              lineNumber = 395
              lineNumber = 396
              onSelf = true;
              var call1356 = callmethod(this, "canvas", [0]);
              var call1357 = callmethod(call1356,"height", [0]);
              onSelf = true;
              var call1358 = callmethod(this, "canvasHeight:=", [1], call1357);
              lineNumber = 411
              var block1359 = Grace_allocObject();
              block1359.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1359.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1359.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1359.methods["match"] = GraceBlock_match;
              block1359.methods["prefix?"] = GraceBlock_lift;
              block1359.receiver = this;
              block1359.className = 'block<kitty:411>';
              block1359.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 402
                onSelf = true;
                var call1360 = callmethod(this, "entities", [0]);
                lineNumber = 409
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
                block1361.className = 'block<kitty:409>';
                block1361.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 406
                  var if1362 = var_done;
                  lineNumber = 403
                  var call1363 = callmethod(var_entity,"mouseDown", [0]);
                  if (Grace_isTrue(call1363)) {
                    lineNumber = 405
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1362;
                };
                var call1364 = callmethod(Grace_prelude,"for()do", [1, 1], call1360, block1361);
                lineNumber = 409
                onSelf = true;
                var call1365 = callmethod(this, "mouseDown", [0]);
                return call1365;
              };
              var_mouseDownListener = block1359;
              lineNumber = 411
              var string1366 = new GraceString("mousedown");
              var bool1367 = new GraceBoolean(false)
              onSelf = true;
              var call1368 = callmethod(this, "canvas", [0]);
              var call1369 = callmethod(call1368,"addEventListener", [3], string1366, var_mouseDownListener, bool1367);
              lineNumber = 425
              var block1370 = Grace_allocObject();
              block1370.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1370.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1370.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1370.methods["match"] = GraceBlock_match;
              block1370.methods["prefix?"] = GraceBlock_lift;
              block1370.receiver = this;
              block1370.className = 'block<kitty:425>';
              block1370.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 416
                onSelf = true;
                var call1371 = callmethod(this, "entities", [0]);
                lineNumber = 423
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
                block1372.className = 'block<kitty:423>';
                block1372.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 420
                  var if1373 = var_done;
                  lineNumber = 417
                  var call1374 = callmethod(var_entity,"mouseUp", [0]);
                  if (Grace_isTrue(call1374)) {
                    lineNumber = 419
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1373;
                };
                var call1375 = callmethod(Grace_prelude,"for()do", [1, 1], call1371, block1372);
                lineNumber = 423
                onSelf = true;
                var call1376 = callmethod(this, "mouseUp", [0]);
                return call1376;
              };
              var_mouseUpListener = block1370;
              lineNumber = 425
              var string1377 = new GraceString("mouseup");
              onSelf = true;
              var call1378 = callmethod(this, "canvas", [0]);
              var call1379 = callmethod(call1378,"addEventListener", [2], string1377, var_mouseUpListener);
              lineNumber = 453
              var block1380 = Grace_allocObject();
              block1380.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1380.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1380.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1380.methods["match"] = GraceBlock_match;
              block1380.methods["prefix?"] = GraceBlock_lift;
              block1380.receiver = this;
              block1380.className = 'block<kitty:453>';
              block1380.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 429
                lineNumber = 428
                onSelf = true;
                var call1381 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1383 = callmethod(this, "canvas", [0]);
                var call1384 = callmethod(call1383,"offsetWidth", [0]);
                onSelf = true;
                var call1386 = callmethod(this, "canvas", [0]);
                var call1387 = callmethod(call1386,"offsetLeft", [0]);
                var call1389 = callmethod(var_ev,"clientX", [0]);
                var diff1391 = callmethod(call1389, "-", [1], call1387);
                var quotient1393 = callmethod(diff1391, "/", [1], call1384);
                var prod1395 = callmethod(quotient1393, "*", [1], call1381);
                var var_x = prod1395;
                lineNumber = 429;
                moduleName = "kitty";
                lineNumber = 428
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 430
                lineNumber = 429
                onSelf = true;
                var call1396 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1398 = callmethod(this, "canvas", [0]);
                var call1399 = callmethod(call1398,"offsetHeight", [0]);
                onSelf = true;
                var call1401 = callmethod(this, "canvas", [0]);
                var call1402 = callmethod(call1401,"offsetTop", [0]);
                var call1404 = callmethod(var_ev,"clientY", [0]);
                var diff1406 = callmethod(call1404, "-", [1], call1402);
                var quotient1408 = callmethod(diff1406, "/", [1], call1399);
                var prod1410 = callmethod(quotient1408, "*", [1], call1396);
                var var_y = prod1410;
                lineNumber = 430;
                moduleName = "kitty";
                lineNumber = 429
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 430
                lineNumber = 429
                lineNumber = 430
                var call1411 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1412 = callmethod(var_mouse,"position:=", [1], call1411);
                lineNumber = 435
                lineNumber = 432
                var bool1413 = new GraceBoolean(false)
                var var_actionDone = bool1413;
                lineNumber = 435;
                moduleName = "kitty";
                lineNumber = 432
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_actionDone)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'actionDone' to be of type Unknown"))
                lineNumber = 435
                onSelf = true;
                var call1414 = callmethod(this, "entities", [0]);
                lineNumber = 449
                var block1415 = Grace_allocObject();
                block1415.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1415.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1415.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1415.methods["match"] = GraceBlock_match;
                block1415.methods["prefix?"] = GraceBlock_lift;
                block1415.receiver = this;
                block1415.className = 'block<kitty:449>';
                block1415.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 441
                  var if1416 = var_done;
                  lineNumber = 436
                  var call1417 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1417)) {
                    lineNumber = 437
                    onSelf = true;
                    var call1418 = callmethod(this, "mouseExit", [0]);
                    lineNumber = 439
                    lineNumber = 438
                    var bool1419 = new GraceBoolean(true)
                    var_mouseOverEntity = bool1419;
                    lineNumber = 440
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 446
                  var if1420 = var_done;
                  lineNumber = 441
                  var call1421 = callmethod(var_entity,"mouseExit", [0]);
                  if (Grace_isTrue(call1421)) {
                    lineNumber = 442
                    onSelf = true;
                    var call1422 = callmethod(this, "mouseEnter", [0]);
                    lineNumber = 444
                    lineNumber = 443
                    var bool1423 = new GraceBoolean(false)
                    var_mouseOverEntity = bool1423;
                    lineNumber = 445
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1420;
                };
                var call1424 = callmethod(Grace_prelude,"for()do", [1, 1], call1414, block1415);
                lineNumber = 452
                var if1425 = var_done;
                lineNumber = 449
                var call1426 = callmethod(var_mouseOverEntity,"prefix!", [0]);
                if (Grace_isTrue(call1426)) {
                  lineNumber = 450
                  onSelf = true;
                  var call1427 = callmethod(this, "mouseEnter", [0]);
                  if1425 = call1427;
                }
                return if1425;
              };
              var_mouseMoveListener = block1380;
              lineNumber = 453
              var string1428 = new GraceString("mousemove");
              onSelf = true;
              var call1429 = callmethod(this, "canvas", [0]);
              var call1430 = callmethod(call1429,"addEventListener", [2], string1428, var_mouseMoveListener);
              lineNumber = 463
              var block1431 = Grace_allocObject();
              block1431.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1431.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1431.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1431.methods["match"] = GraceBlock_match;
              block1431.methods["prefix?"] = GraceBlock_lift;
              block1431.receiver = this;
              block1431.className = 'block<kitty:463>';
              block1431.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 461
                var if1432 = var_done;
                lineNumber = 458
                var call1434 = callmethod(var_ev,"keyCode", [0]);
                var opresult1436 = callmethod(call1434, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1436)) {
                  lineNumber = 459
                  onSelf = true;
                  var call1437 = callmethod(this, "stop", [0]);
                  if1432 = call1437;
                }
                lineNumber = 462
                lineNumber = 461
                var call1438 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1438;
                return call1438;
              };
              var_keyDownListener = block1431;
              lineNumber = 463
              var string1439 = new GraceString("keydown");
              onSelf = true;
              var call1440 = callmethod(this, "document", [0]);
              var call1441 = callmethod(call1440,"addEventListener", [2], string1439, var_keyDownListener);
              lineNumber = 469
              var block1442 = Grace_allocObject();
              block1442.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1442.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1442.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1442.methods["match"] = GraceBlock_match;
              block1442.methods["prefix?"] = GraceBlock_lift;
              block1442.receiver = this;
              block1442.className = 'block<kitty:469>';
              block1442.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 468
                lineNumber = 467
                var call1443 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1443;
                return call1443;
              };
              var_keyUpListener = block1442;
              lineNumber = 469
              var string1444 = new GraceString("keyup");
              onSelf = true;
              var call1445 = callmethod(this, "document", [0]);
              var call1446 = callmethod(call1445,"addEventListener", [2], string1444, var_keyUpListener);
              lineNumber = 471
              lineNumber = 461
              lineNumber = 471
              var string1447 = new GraceString("canvas");
              var call1448 = callmethod(var_dom,"document", [0]);
              var call1449 = callmethod(call1448,"createElement", [1], string1447);
              onSelf = true;
              var call1450 = callmethod(this, "backingCanvas:=", [1], call1449);
              lineNumber = 473
              lineNumber = 471
              lineNumber = 472
              onSelf = true;
              var call1451 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1452 = callmethod(this, "backingCanvas", [0]);
              var call1453 = callmethod(call1452,"height:=", [1], call1451);
              lineNumber = 474
              lineNumber = 471
              lineNumber = 473
              onSelf = true;
              var call1454 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1455 = callmethod(this, "backingCanvas", [0]);
              var call1456 = callmethod(call1455,"width:=", [1], call1454);
              lineNumber = 474
              lineNumber = 471
              lineNumber = 474
              var string1457 = new GraceString("2d");
              onSelf = true;
              var call1458 = callmethod(this, "backingCanvas", [0]);
              var call1459 = callmethod(call1458,"getContext", [1], string1457);
              onSelf = true;
              var call1460 = callmethod(this, "backingContext:=", [1], call1459);
              lineNumber = 475
              lineNumber = 471
              lineNumber = 475
              var string1461 = new GraceString("2d");
              onSelf = true;
              var call1462 = callmethod(this, "canvas", [0]);
              var call1463 = callmethod(call1462,"getContext", [1], string1461);
              onSelf = true;
              var call1464 = callmethod(this, "mctx:=", [1], call1463);
              lineNumber = 478
              var string1465 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1466 = callmethod(this, "setBackground", [1], string1465);
              lineNumber = 481
              var call1467 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1468 = callmethod(call1467, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1469 = callmethod(call1468, "setWorld", [1], this);
              lineNumber = 484
              lineNumber = 483
              var_kitten = this;
              lineNumber = 485
              lineNumber = 481
              lineNumber = 484
              var bool1470 = new GraceBoolean(true)
              onSelf = true;
              var call1471 = callmethod(this, "isInit:=", [1], bool1470);
              return call1471
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1343.paramCounts = [
            0,
          ];
          func1343.variableArities = [
            false,
          ];
          obj1341.methods["init"] = func1343;
          func1343.definitionLine = 385;
          func1343.definitionModule = "kitty";
          var func1472 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1472.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              lineNumber = 481
              lineNumber = 490
              var bool1473 = new GraceBoolean(true)
              onSelf = true;
              var call1474 = callmethod(this, "isRunning:=", [1], bool1473);
              lineNumber = 491
              var block1475 = Grace_allocObject();
              block1475.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1475.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1475.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1475.methods["match"] = GraceBlock_match;
              block1475.methods["prefix?"] = GraceBlock_lift;
              block1475.receiver = this;
              block1475.className = 'block<kitty:491>';
              block1475.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1476 = callmethod(this, "isRunning", [0]);
                return call1476;
              };
              lineNumber = 495
              var block1477 = Grace_allocObject();
              block1477.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1477.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1477.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1477.methods["match"] = GraceBlock_match;
              block1477.methods["prefix?"] = GraceBlock_lift;
              block1477.receiver = this;
              block1477.className = 'block<kitty:495>';
              block1477.real = function(
              ) {
                sourceObject = this;
                lineNumber = 492
                onSelf = true;
                var call1478 = callmethod(this, "tick", [0]);
                return call1478;
              };
              lineNumber = 491
              var call1479 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1475, new GraceNum(10), block1477);
              return call1479
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1472.paramCounts = [
            0,
          ];
          func1472.variableArities = [
            false,
          ];
          obj1341.methods["start"] = func1472;
          func1472.definitionLine = 488;
          func1472.definitionModule = "kitty";
          var func1480 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1480.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 504
              lineNumber = 481
              lineNumber = 503
              onSelf = true;
              var call1481 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1482 = callmethod(this, "mctx", [0]);
              var call1483 = callmethod(call1482,"fillStyle:=", [1], call1481);
              lineNumber = 504
              onSelf = true;
              var call1484 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1485 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1486 = callmethod(this, "mctx", [0]);
              var call1487 = callmethod(call1486,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1484, call1485);
              lineNumber = 505
              onSelf = true;
              var call1488 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1489 = callmethod(this, "mctx", [0]);
              var call1490 = callmethod(call1489,"drawImage", [3], call1488, new GraceNum(0), new GraceNum(0));
              lineNumber = 506
              onSelf = true;
              var call1491 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1493 = callmethod(this, "canvasWidth", [0]);
              var quotient1495 = callmethod(call1493, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1497 = callmethod(this, "canvasHeight", [0]);
              var quotient1499 = callmethod(call1497, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1500 = callmethod(this, "background", [0]);
              var call1501 = callmethod(call1500,"draw", [4], call1491, quotient1495, quotient1499, new GraceNum(0));
              lineNumber = 509
              onSelf = true;
              var call1502 = callmethod(this, "updateAction", [0]);
              var call1503 = callmethod(call1502,"apply", [0]);
              lineNumber = 516
              var if1504 = var_done;
              lineNumber = 511
              onSelf = true;
              var call1505 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1505)) {
                lineNumber = 512
                onSelf = true;
                var call1506 = callmethod(this, "mouseOverAction", [0]);
                var call1507 = callmethod(call1506,"apply", [0]);
                if1504 = call1507;
              }
              lineNumber = 516
              onSelf = true;
              var call1508 = callmethod(this, "entities", [0]);
              lineNumber = 523
              var block1509 = Grace_allocObject();
              block1509.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1509.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1509.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1509.methods["match"] = GraceBlock_match;
              block1509.methods["prefix?"] = GraceBlock_lift;
              block1509.receiver = this;
              block1509.className = 'block<kitty:523>';
              block1509.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 517
                var call1510 = callmethod(var_entity,"tick", [0]);
                lineNumber = 519
                onSelf = true;
                var call1511 = callmethod(this, "mctx", [0]);
                var call1512 = callmethod(var_entity,"draw", [3], call1511, new GraceNum(0), new GraceNum(0));
                return call1512;
              };
              var call1513 = callmethod(Grace_prelude,"for()do", [1, 1], call1508, block1509);
              return call1513
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1480.paramCounts = [
            0,
          ];
          func1480.variableArities = [
            false,
          ];
          obj1341.methods["tick"] = func1480;
          func1480.definitionLine = 498;
          func1480.definitionModule = "kitty";
          var func1514 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1514.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 526
              var string1515 = new GraceString("WORLD STOPPING...");
              var call1516 = Grace_print(string1515);
              lineNumber = 528
              lineNumber = 517
              lineNumber = 527
              var bool1517 = new GraceBoolean(false)
              onSelf = true;
              var call1518 = callmethod(this, "isRunning:=", [1], bool1517);
              lineNumber = 528
              onSelf = true;
              var call1519 = callmethod(this, "destroyAction", [0]);
              var call1520 = callmethod(call1519,"apply", [0]);
              lineNumber = 529
              onSelf = true;
              var call1521 = callmethod(this, "entities", [0]);
              lineNumber = 532
              var block1522 = Grace_allocObject();
              block1522.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1522.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1522.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1522.methods["match"] = GraceBlock_match;
              block1522.methods["prefix?"] = GraceBlock_lift;
              block1522.receiver = this;
              block1522.className = 'block<kitty:532>';
              block1522.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 530
                var call1523 = callmethod(var_entity,"kill", [0]);
                return call1523;
              };
              var call1524 = callmethod(Grace_prelude,"for()do", [1, 1], call1521, block1522);
              lineNumber = 532
              var string1525 = new GraceString("mousedown");
              onSelf = true;
              var call1526 = callmethod(this, "canvas", [0]);
              var call1527 = callmethod(call1526,"removeEventListener", [2], string1525, var_mouseDownListener);
              lineNumber = 533
              var string1528 = new GraceString("mouseup");
              onSelf = true;
              var call1529 = callmethod(this, "canvas", [0]);
              var call1530 = callmethod(call1529,"removeEventListener", [2], string1528, var_mouseUpListener);
              lineNumber = 534
              var string1531 = new GraceString("mousemove");
              onSelf = true;
              var call1532 = callmethod(this, "canvas", [0]);
              var call1533 = callmethod(call1532,"removeEventListener", [2], string1531, var_mouseMoveListener);
              lineNumber = 535
              var string1534 = new GraceString("keydown");
              onSelf = true;
              var call1535 = callmethod(this, "document", [0]);
              var call1536 = callmethod(call1535,"removeEventListener", [2], string1534, var_keyDownListener);
              lineNumber = 536
              var string1537 = new GraceString("keyup");
              onSelf = true;
              var call1538 = callmethod(this, "document", [0]);
              var call1539 = callmethod(call1538,"removeEventListener", [2], string1537, var_keyUpListener);
              return call1539
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1514.paramCounts = [
            0,
          ];
          func1514.variableArities = [
            false,
          ];
          obj1341.methods["stop"] = func1514;
          func1514.definitionLine = 525;
          func1514.definitionModule = "kitty";
          var func1540 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1540.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 540
              onSelf = true;
              var call1541 = callmethod(this, "mouseDownAction", [0]);
              var call1542 = callmethod(call1541,"apply", [0]);
              return call1542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1540.paramCounts = [
            0,
          ];
          func1540.variableArities = [
            false,
          ];
          obj1341.methods["mouseDown"] = func1540;
          func1540.definitionLine = 539;
          func1540.definitionModule = "kitty";
          var func1543 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 544
              onSelf = true;
              var call1544 = callmethod(this, "mouseUpAction", [0]);
              var call1545 = callmethod(call1544,"apply", [0]);
              return call1545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1543.paramCounts = [
            0,
          ];
          func1543.variableArities = [
            false,
          ];
          obj1341.methods["mouseUp"] = func1543;
          func1543.definitionLine = 543;
          func1543.definitionModule = "kitty";
          var func1546 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 553
              var if1547 = var_done;
              lineNumber = 550
              onSelf = true;
              var call1548 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1548)) {
                lineNumber = 552
                lineNumber = 551
                var bool1549 = new GraceBoolean(false)
                return bool1549
              }
              lineNumber = 553
              onSelf = true;
              var call1550 = callmethod(this, "mouseEnterAction", [0]);
              var call1551 = callmethod(call1550,"apply", [0]);
              lineNumber = 555
              lineNumber = 553
              lineNumber = 554
              var bool1552 = new GraceBoolean(true)
              onSelf = true;
              var call1553 = callmethod(this, "mouseOver:=", [1], bool1552);
              return call1553
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1546.paramCounts = [
            0,
          ];
          func1546.variableArities = [
            false,
          ];
          obj1341.methods["mouseEnter"] = func1546;
          func1546.definitionLine = 549;
          func1546.definitionModule = "kitty";
          var func1554 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1554.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 561
              var if1555 = var_done;
              lineNumber = 558
              onSelf = true;
              var call1556 = callmethod(this, "mouseOver", [0]);
              var call1557 = callmethod(call1556,"prefix!", [0]);
              if (Grace_isTrue(call1557)) {
                lineNumber = 560
                lineNumber = 559
                var bool1558 = new GraceBoolean(false)
                return bool1558
              }
              lineNumber = 561
              onSelf = true;
              var call1559 = callmethod(this, "mouseExitAction", [0]);
              var call1560 = callmethod(call1559,"apply", [0]);
              lineNumber = 563
              lineNumber = 561
              lineNumber = 562
              var bool1561 = new GraceBoolean(false)
              onSelf = true;
              var call1562 = callmethod(this, "mouseOver:=", [1], bool1561);
              return call1562
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1554.paramCounts = [
            0,
          ];
          func1554.variableArities = [
            false,
          ];
          obj1341.methods["mouseExit"] = func1554;
          func1554.definitionLine = 557;
          func1554.definitionModule = "kitty";
          var func1563 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1563.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 566
              lineNumber = 561
              lineNumber = 566
              onSelf = true;
              var call1564 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1565 = callmethod(this, "canvasHeight", [0]);
              var call1566 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1567 = callmethod(call1566, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1568 = callmethod(call1567, "Image()width()height", [1, 1, 1], var_url, call1564, call1565);
              onSelf = true;
              var call1569 = callmethod(this, "background:=", [1], call1568);
              return call1569
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1563.paramCounts = [
            1,
          ];
          func1563.variableArities = [
            false,
          ];
          obj1341.methods["setBackground"] = func1563;
          func1563.definitionLine = 565;
          func1563.definitionModule = "kitty";
          var func1570 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1570.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 570
              onSelf = true;
              var call1571 = callmethod(this, "entities", [0]);
              var call1572 = callmethod(call1571,"push", [1], var_e);
              return call1572
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1570.paramCounts = [
            1,
          ];
          func1570.variableArities = [
            false,
          ];
          obj1341.methods["addEntity"] = func1570;
          func1570.definitionLine = 569;
          func1570.definitionModule = "kitty";
          var func1573 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1573.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 575
              lineNumber = 574
              onSelf = true;
              var call1574 = callmethod(this, "mctx", [0]);
              return call1574
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1573.paramCounts = [
            0,
          ];
          func1573.variableArities = [
            false,
          ];
          obj1341.methods["getContext"] = func1573;
          func1573.definitionLine = 573;
          func1573.definitionModule = "kitty";
          var func1575 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1575.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 579
              lineNumber = 578
              onSelf = true;
              var call1576 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1578 = callmethod(this, "canvasWidth", [0]);
              var quotient1580 = callmethod(call1578, "/", [1], call1576);
              return quotient1580
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1575.paramCounts = [
            0,
          ];
          func1575.variableArities = [
            false,
          ];
          obj1341.methods["moveWidthMultipler"] = func1575;
          func1575.definitionLine = 577;
          func1575.definitionModule = "kitty";
          var func1581 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1581.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 583
              lineNumber = 582
              onSelf = true;
              var call1582 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1584 = callmethod(this, "canvasHeight", [0]);
              var quotient1586 = callmethod(call1584, "/", [1], call1582);
              return quotient1586
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1581.paramCounts = [
            0,
          ];
          func1581.variableArities = [
            false,
          ];
          obj1341.methods["moveHeightMultipler"] = func1581;
          func1581.definitionLine = 581;
          func1581.definitionModule = "kitty";
          var func1587 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1587.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 588
              lineNumber = 566
              lineNumber = 587
              onSelf = true;
              var call1588 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1587.paramCounts = [
            1,
          ];
          func1587.variableArities = [
            false,
          ];
          obj1341.methods["setUpdateAction"] = func1587;
          func1587.definitionLine = 586;
          func1587.definitionModule = "kitty";
          var func1589 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 592
              lineNumber = 566
              lineNumber = 591
              onSelf = true;
              var call1590 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1589.paramCounts = [
            1,
          ];
          func1589.variableArities = [
            false,
          ];
          obj1341.methods["setDestroyAction"] = func1589;
          func1589.definitionLine = 590;
          func1589.definitionModule = "kitty";
          var func1591 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 596
              lineNumber = 566
              lineNumber = 595
              onSelf = true;
              var call1592 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1591.paramCounts = [
            1,
          ];
          func1591.variableArities = [
            false,
          ];
          obj1341.methods["setMouseDownAction"] = func1591;
          func1591.definitionLine = 594;
          func1591.definitionModule = "kitty";
          var func1593 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 600
              lineNumber = 566
              lineNumber = 599
              onSelf = true;
              var call1594 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1594
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1593.paramCounts = [
            1,
          ];
          func1593.variableArities = [
            false,
          ];
          obj1341.methods["setMouseUpAction"] = func1593;
          func1593.definitionLine = 598;
          func1593.definitionModule = "kitty";
          var func1595 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1595.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 604
              lineNumber = 566
              lineNumber = 603
              onSelf = true;
              var call1596 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1595.paramCounts = [
            1,
          ];
          func1595.variableArities = [
            false,
          ];
          obj1341.methods["setMouseEnterAction"] = func1595;
          func1595.definitionLine = 602;
          func1595.definitionModule = "kitty";
          var func1597 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 607
              var string1598 = new GraceString("*Drag Not Available For World*");
              var call1599 = Grace_print(string1598);
              return call1599
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1597.paramCounts = [
            1,
          ];
          func1597.variableArities = [
            false,
          ];
          obj1341.methods["setMouseDragAction"] = func1597;
          func1597.definitionLine = 606;
          func1597.definitionModule = "kitty";
          var func1600 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 612
              lineNumber = 566
              lineNumber = 611
              onSelf = true;
              var call1601 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1601
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1600.paramCounts = [
            1,
          ];
          func1600.variableArities = [
            false,
          ];
          obj1341.methods["setMouseOverAction"] = func1600;
          func1600.definitionLine = 610;
          func1600.definitionModule = "kitty";
          var func1602 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1602.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 616
              lineNumber = 566
              lineNumber = 615
              onSelf = true;
              var call1603 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1603
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1602.paramCounts = [
            1,
          ];
          func1602.variableArities = [
            false,
          ];
          obj1341.methods["setMouseExitAction"] = func1602;
          func1602.definitionLine = 614;
          func1602.definitionModule = "kitty";
          sourceObject = obj1341;
          lineNumber = 348
          obj1341.data["width"] = var_width__39__;
          var reader_kitty_width_1604 = function() {
            return this.data["width"];
          }
          obj1341.methods["width"] = reader_kitty_width_1604;
          obj1341.data["width"] = var_width__39__;
          var writer_kitty_width_1604 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1341.methods["width:="] = writer_kitty_width_1604;
          lineNumber = 349;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 349
          obj1341.data["height"] = var_height__39__;
          var reader_kitty_height_1605 = function() {
            return this.data["height"];
          }
          obj1341.methods["height"] = reader_kitty_height_1605;
          obj1341.data["height"] = var_height__39__;
          var writer_kitty_height_1605 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1341.methods["height:="] = writer_kitty_height_1605;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 349
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 350
          obj1341.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1606 = function() {
            return this.data["tag"];
          }
          obj1341.methods["tag"] = reader_kitty_tag_1606;
          obj1341.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1606 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1341.methods["tag:="] = writer_kitty_tag_1606;
          lineNumber = 352;
          moduleName = "kitty";
          lineNumber = 350
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["background"] = undefined;
          var reader_kitty_background_1607 = function() {
            return this.data["background"];
          }
          obj1341.methods["background"] = reader_kitty_background_1607;
          obj1341.data["background"] = undefined;
          var writer_kitty_background_1607 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1341.methods["background:="] = writer_kitty_background_1607;
          reader_kitty_background_1607.confidential = true;
          writer_kitty_background_1607.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 353
          var string1608 = new GraceString("black");
          obj1341.data["backgroundColour"] = string1608;
          var reader_kitty_backgroundColour_1609 = function() {
            return this.data["backgroundColour"];
          }
          obj1341.methods["backgroundColour"] = reader_kitty_backgroundColour_1609;
          obj1341.data["backgroundColour"] = string1608;
          var writer_kitty_backgroundColour_1609 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1341.methods["backgroundColour:="] = writer_kitty_backgroundColour_1609;
          reader_kitty_backgroundColour_1609.confidential = true;
          writer_kitty_backgroundColour_1609.confidential = true;
          lineNumber = 355;
          moduleName = "kitty";
          lineNumber = 353
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1608)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["document"] = undefined;
          var reader_kitty_document_1610 = function() {
            return this.data["document"];
          }
          obj1341.methods["document"] = reader_kitty_document_1610;
          obj1341.data["document"] = undefined;
          var writer_kitty_document_1610 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1341.methods["document:="] = writer_kitty_document_1610;
          reader_kitty_document_1610.confidential = true;
          writer_kitty_document_1610.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1611 = function() {
            return this.data["backingCanvas"];
          }
          obj1341.methods["backingCanvas"] = reader_kitty_backingCanvas_1611;
          obj1341.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1611 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1341.methods["backingCanvas:="] = writer_kitty_backingCanvas_1611;
          reader_kitty_backingCanvas_1611.confidential = true;
          writer_kitty_backingCanvas_1611.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1612 = function() {
            return this.data["backingContext"];
          }
          obj1341.methods["backingContext"] = reader_kitty_backingContext_1612;
          obj1341.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1612 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1341.methods["backingContext:="] = writer_kitty_backingContext_1612;
          reader_kitty_backingContext_1612.confidential = true;
          writer_kitty_backingContext_1612.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["canvas"] = undefined;
          var reader_kitty_canvas_1613 = function() {
            return this.data["canvas"];
          }
          obj1341.methods["canvas"] = reader_kitty_canvas_1613;
          obj1341.data["canvas"] = undefined;
          var writer_kitty_canvas_1613 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1341.methods["canvas:="] = writer_kitty_canvas_1613;
          reader_kitty_canvas_1613.confidential = true;
          writer_kitty_canvas_1613.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1614 = function() {
            return this.data["canvasWidth"];
          }
          obj1341.methods["canvasWidth"] = reader_kitty_canvasWidth_1614;
          obj1341.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1614 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1341.methods["canvasWidth:="] = writer_kitty_canvasWidth_1614;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1615 = function() {
            return this.data["canvasHeight"];
          }
          obj1341.methods["canvasHeight"] = reader_kitty_canvasHeight_1615;
          obj1341.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1615 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1341.methods["canvasHeight:="] = writer_kitty_canvasHeight_1615;
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 364
          var call1616 = callmethod(var_collections,"list", [0]);
          var call1617 = callmethod(call1616,"new", [0]);
          obj1341.data["entities"] = call1617;
          var reader_kitty_entities_1618 = function() {
            return this.data["entities"];
          }
          obj1341.methods["entities"] = reader_kitty_entities_1618;
          obj1341.data["entities"] = call1617;
          var writer_kitty_entities_1618 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1341.methods["entities:="] = writer_kitty_entities_1618;
          reader_kitty_entities_1618.confidential = true;
          writer_kitty_entities_1618.confidential = true;
          lineNumber = 366;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1617)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 366
          var bool1619 = new GraceBoolean(false)
          obj1341.data["isInit"] = bool1619;
          var reader_kitty_isInit_1620 = function() {
            return this.data["isInit"];
          }
          obj1341.methods["isInit"] = reader_kitty_isInit_1620;
          obj1341.data["isInit"] = bool1619;
          var writer_kitty_isInit_1620 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1341.methods["isInit:="] = writer_kitty_isInit_1620;
          reader_kitty_isInit_1620.confidential = true;
          writer_kitty_isInit_1620.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 366
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1619)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 367
          var bool1621 = new GraceBoolean(false)
          obj1341.data["isRunning"] = bool1621;
          var reader_kitty_isRunning_1622 = function() {
            return this.data["isRunning"];
          }
          obj1341.methods["isRunning"] = reader_kitty_isRunning_1622;
          obj1341.data["isRunning"] = bool1621;
          var writer_kitty_isRunning_1622 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1341.methods["isRunning:="] = writer_kitty_isRunning_1622;
          reader_kitty_isRunning_1622.confidential = true;
          writer_kitty_isRunning_1622.confidential = true;
          lineNumber = 369;
          moduleName = "kitty";
          lineNumber = 367
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1621)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["mctx"] = undefined;
          var reader_kitty_mctx_1623 = function() {
            return this.data["mctx"];
          }
          obj1341.methods["mctx"] = reader_kitty_mctx_1623;
          obj1341.data["mctx"] = undefined;
          var writer_kitty_mctx_1623 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1341.methods["mctx:="] = writer_kitty_mctx_1623;
          reader_kitty_mctx_1623.confidential = true;
          writer_kitty_mctx_1623.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          obj1341.data["ent"] = undefined;
          var reader_kitty_ent_1624 = function() {
            return this.data["ent"];
          }
          obj1341.methods["ent"] = reader_kitty_ent_1624;
          obj1341.data["ent"] = undefined;
          var writer_kitty_ent_1624 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1341.methods["ent:="] = writer_kitty_ent_1624;
          reader_kitty_ent_1624.confidential = true;
          writer_kitty_ent_1624.confidential = true;
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 374
          var block1625 = Grace_allocObject();
          block1625.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1625.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1625.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1625.methods["match"] = GraceBlock_match;
          block1625.methods["prefix?"] = GraceBlock_lift;
          block1625.receiver = this;
          block1625.className = 'block<kitty:374>';
          block1625.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["updateAction"] = block1625;
          var reader_kitty_updateAction_1626 = function() {
            return this.data["updateAction"];
          }
          obj1341.methods["updateAction"] = reader_kitty_updateAction_1626;
          obj1341.data["updateAction"] = block1625;
          var writer_kitty_updateAction_1626 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1341.methods["updateAction:="] = writer_kitty_updateAction_1626;
          reader_kitty_updateAction_1626.confidential = true;
          writer_kitty_updateAction_1626.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1625)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 375
          var block1627 = Grace_allocObject();
          block1627.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1627.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1627.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1627.methods["match"] = GraceBlock_match;
          block1627.methods["prefix?"] = GraceBlock_lift;
          block1627.receiver = this;
          block1627.className = 'block<kitty:375>';
          block1627.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["destroyAction"] = block1627;
          var reader_kitty_destroyAction_1628 = function() {
            return this.data["destroyAction"];
          }
          obj1341.methods["destroyAction"] = reader_kitty_destroyAction_1628;
          obj1341.data["destroyAction"] = block1627;
          var writer_kitty_destroyAction_1628 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1341.methods["destroyAction:="] = writer_kitty_destroyAction_1628;
          reader_kitty_destroyAction_1628.confidential = true;
          writer_kitty_destroyAction_1628.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1627)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 376
          var block1629 = Grace_allocObject();
          block1629.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1629.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1629.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1629.methods["match"] = GraceBlock_match;
          block1629.methods["prefix?"] = GraceBlock_lift;
          block1629.receiver = this;
          block1629.className = 'block<kitty:376>';
          block1629.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["mouseEnterAction"] = block1629;
          var reader_kitty_mouseEnterAction_1630 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1341.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1630;
          obj1341.data["mouseEnterAction"] = block1629;
          var writer_kitty_mouseEnterAction_1630 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1341.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1630;
          reader_kitty_mouseEnterAction_1630.confidential = true;
          writer_kitty_mouseEnterAction_1630.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1629)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 377
          var block1631 = Grace_allocObject();
          block1631.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1631.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1631.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1631.methods["match"] = GraceBlock_match;
          block1631.methods["prefix?"] = GraceBlock_lift;
          block1631.receiver = this;
          block1631.className = 'block<kitty:377>';
          block1631.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["mouseOverAction"] = block1631;
          var reader_kitty_mouseOverAction_1632 = function() {
            return this.data["mouseOverAction"];
          }
          obj1341.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1632;
          obj1341.data["mouseOverAction"] = block1631;
          var writer_kitty_mouseOverAction_1632 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1341.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1632;
          reader_kitty_mouseOverAction_1632.confidential = true;
          writer_kitty_mouseOverAction_1632.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 378
          var block1633 = Grace_allocObject();
          block1633.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1633.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1633.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1633.methods["match"] = GraceBlock_match;
          block1633.methods["prefix?"] = GraceBlock_lift;
          block1633.receiver = this;
          block1633.className = 'block<kitty:378>';
          block1633.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["mouseExitAction"] = block1633;
          var reader_kitty_mouseExitAction_1634 = function() {
            return this.data["mouseExitAction"];
          }
          obj1341.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1634;
          obj1341.data["mouseExitAction"] = block1633;
          var writer_kitty_mouseExitAction_1634 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1341.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1634;
          reader_kitty_mouseExitAction_1634.confidential = true;
          writer_kitty_mouseExitAction_1634.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1633)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 379
          var block1635 = Grace_allocObject();
          block1635.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1635.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1635.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1635.methods["match"] = GraceBlock_match;
          block1635.methods["prefix?"] = GraceBlock_lift;
          block1635.receiver = this;
          block1635.className = 'block<kitty:379>';
          block1635.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["mouseDownAction"] = block1635;
          var reader_kitty_mouseDownAction_1636 = function() {
            return this.data["mouseDownAction"];
          }
          obj1341.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1636;
          obj1341.data["mouseDownAction"] = block1635;
          var writer_kitty_mouseDownAction_1636 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1341.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1636;
          reader_kitty_mouseDownAction_1636.confidential = true;
          writer_kitty_mouseDownAction_1636.confidential = true;
          lineNumber = 379;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1635)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 380
          var block1637 = Grace_allocObject();
          block1637.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1637.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1637.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1637.methods["match"] = GraceBlock_match;
          block1637.methods["prefix?"] = GraceBlock_lift;
          block1637.receiver = this;
          block1637.className = 'block<kitty:380>';
          block1637.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1341.data["mouseUpAction"] = block1637;
          var reader_kitty_mouseUpAction_1638 = function() {
            return this.data["mouseUpAction"];
          }
          obj1341.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1638;
          obj1341.data["mouseUpAction"] = block1637;
          var writer_kitty_mouseUpAction_1638 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1341.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1638;
          reader_kitty_mouseUpAction_1638.confidential = true;
          writer_kitty_mouseUpAction_1638.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 379
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1637)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 380
          var bool1639 = new GraceBoolean(false)
          obj1341.data["mouseOver"] = bool1639;
          var reader_kitty_mouseOver_1640 = function() {
            return this.data["mouseOver"];
          }
          obj1341.methods["mouseOver"] = reader_kitty_mouseOver_1640;
          obj1341.data["mouseOver"] = bool1639;
          var writer_kitty_mouseOver_1640 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1341.methods["mouseOver:="] = writer_kitty_mouseOver_1640;
          reader_kitty_mouseOver_1640.confidential = true;
          writer_kitty_mouseOver_1640.confidential = true;
          lineNumber = 382;
          moduleName = "kitty";
          lineNumber = 380
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1639)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1341.mutable = true;
          sourceObject = obj1341;
          lineNumber = 382
          onSelf = true;
          var call1641 = callmethod(this, "init", [0]);
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          sourceObject = obj1341;
          superDepth = origSuperDepth;
        }
        obj_init_1341.apply(inheritingObject, []);
        return obj1341
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1036.methods["new()object"] = func1340;
    var func1642 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 345
        var string1643 = new GraceString("class KittyWorld");
        return string1643
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1642.paramCounts = [
    ];
    func1642.variableArities = [
    ];
    obj1036.methods["asDebugString"] = func1642;
    func1642.definitionLine = 345;
    func1642.definitionModule = "kitty";
    sourceObject = obj1036;
    sourceObject = obj1036;
    superDepth = origSuperDepth;
  }
  obj_init_1036.apply(obj1036, []);
  var var_KittyWorld = obj1036;
  lineNumber = 621
  lineNumber = 630
  lineNumber = 664
  lineNumber = 679
  lineNumber = 683
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n mouseOverEntity\n mouseOverEntity:=\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nmethods-of:KittyWorld.new:\n isRunning\n ent:=\n mouseDownAction\n entities\n mouseEnter\n backingCanvas\n backingContext:=\n setBackground\n getContext\n mouseExitAction:=\n canvas\n canvasWidth\n updateAction\n setMouseDownAction\n isInit\n mctx:=\n mouseDownAction:=\n width:=\n mctx\n mouseOver:=\n addEntity\n canvasHeight:=\n mouseExit\n setMouseEnterAction\n tag:=\n backgroundColour\n mouseEnterAction:=\n background\n mouseExitAction\n destroyAction\n mouseUpAction\n height:=\n mouseOver\n setMouseExitAction\n mouseUp\n setMouseDragAction\n canvasWidth:=\n backingContext\n canvasHeight\n setMouseUpAction\n mouseOverAction\n mouseEnterAction\n stop\n isInit:=\n tick\n moveHeightMultipler\n isRunning:=\n height\n entities:=\n document\n width\n init\n moveWidthMultipler\n ent\n backgroundColour:=\n setUpdateAction\n setMouseOverAction\n canvas:=\n background:=\n updateAction:=\n mouseOverAction:=\n tag\n destroyAction:=\n mouseDown\n backingCanvas:=\n mouseUpAction:=\n start\n document:=\n setDestroyAction\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconfidential:\nmodules:\n StandardPrelude\n mgcollections\nfresh:World()width()height:\n isRunning\n ent:=\n mouseDownAction\n entities\n mouseEnter\n backingCanvas\n backingContext:=\n setBackground\n getContext\n mouseExitAction:=\n mouseEnterAction:=\n canvasWidth\n updateAction\n setMouseDownAction\n isInit\n mctx:=\n mouseDownAction:=\n width:=\n mctx\n mouseOver:=\n addEntity\n canvasHeight:=\n init\n setMouseEnterAction\n tag:=\n backgroundColour\n canvas\n background\n mouseExitAction\n destroyAction\n mouseUpAction\n height:=\n mouseOver\n setMouseExitAction\n mouseUp\n setMouseDragAction\n canvasWidth:=\n backingContext\n canvasHeight\n setMouseUpAction\n mouseOverAction\n mouseEnterAction\n stop\n isInit:=\n tick\n moveHeightMultipler\n isRunning:=\n height\n entities:=\n document\n width\n mouseExit\n moveWidthMultipler\n ent\n backgroundColour:=\n setUpdateAction\n setMouseOverAction\n canvas:=\n background:=\n updateAction:=\n mouseOverAction:=\n tag\n destroyAction:=\n mouseDown\n backingCanvas:=\n mouseUpAction:=\n start\n document:=\n setDestroyAction\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nconstructors-of:Point:\n x()y\nfresh:Entity()x()y:\n mouseDownAction\n mouseDragAction\n mouseOver\n mouseEnter\n posY\n awake\n setMouseExitAction\n mouseUp\n updateAction:=\n getRotation\n setMouseDragAction\n setDestroyAction\n mouseDragStart\n mouseExitAction\n mouseExitAction:=\n mouseEnterAction:=\n mouseDragAction:=\n tick\n updateAction\n mouseOverAction\n mouseEnterAction\n turn\n posX\n setMouseDownAction\n draw\n mouseDownEntity:=\n mouseDownAction:=\n mouseOver:=\n mouseDownEntity\n image\n strafe\n mouseUpAction\n mouseDragStart:=\n setUpdateAction\n setMouseUpAction\n mouseExit\n setMouseEnterAction\n tag:=\n createImage\n getX\n getY\n mouseOverAction:=\n tag\n destroyAction:=\n mouseDown\n posY:=\n mouseUpAction:=\n setX\n setY\n rotation:=\n destroyAction\n posX:=\n kill\n setImage\n rotation\n setMouseOverAction\n setLocation\n move\n image:=\nmethods-of:Point.x()y:\n right\n down\n up\n x\n y\n left\nconstructors-of:KittyImage:\n new\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n elements\n width\n draw\n height:=\n drawImage\n imgTag\n elements:=\n width:=\n height\n getTag\nconstructors-of:KittyWorld:\n new\nmethods-of:KittyEntity.new:\n mouseDownAction\n setY\n mouseOver\n mouseEnter\n tick\n awake\n setMouseExitAction\n mouseUp\n getX\n getRotation\n setMouseDragAction\n setDestroyAction\n mouseDragStart\n mouseDown\n mouseExitAction:=\n tag\n mouseDragAction:=\n setMouseDownAction\n updateAction\n mouseOverAction\n mouseEnterAction\n turn\n posX\n posY\n draw\n mouseDownEntity:=\n mouseDownAction:=\n mouseOver:=\n mouseDownEntity\n image\n strafe\n kill\n mouseDragStart:=\n setUpdateAction\n setMouseUpAction\n mouseExit\n setMouseEnterAction\n tag:=\n createImage\n updateAction:=\n getY\n mouseOverAction:=\n mouseEnterAction:=\n destroyAction:=\n mouseExitAction\n posY:=\n mouseUpAction:=\n setX\n mouseDragAction\n rotation:=\n destroyAction\n posX:=\n mouseUpAction\n setImage\n rotation\n setMouseOverAction\n setLocation\n move\n image:=\n";
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
    "// var mouseDown := false",
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
    "var mouseOverEntity := false",
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
    "    var mouseDragStart := Point.x(0)y(0)",
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
    "        // updoot",
    "        updateAction.apply",
    "",
    "        // onMouseOver",
    "        if (mouseOver) then {",
    "            mouseOverAction.apply",
    "        }",
    "",
    "        // onMouseDrag",
    "        if ((mouseDownEntity) && (mouse.position != mouseDragStart)) then {",
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
    "            mouseDragStart := mouse.position",
    "            mouseDownAction.apply",
    "            mouseDownEntity := true",
    "            return true",
    "        }",
    "        return false",
    "    }",
    "",
    "    method mouseUp {",
    "        if (mouseDownEntity) then {",
    "            mouseDragStart := mouse.position",
    "            mouseUpAction.apply",
    "            mouseDownEntity := false",
    "            return true",
    "        }",
    "        return false",
    "    }",
    "",
    "    method mouseEnter {",
    "        if (mouseOver) then {",
    "            return false",
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
    "            return true",
    "        }",
    "    }",
    "    ",
    "    method mouseExit {",
    "        if (!mouseOver) then {",
    "            return false",
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
    "            return true",
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
    "    var mouseEnterAction := {}",
    "    var mouseOverAction := {}",
    "    var mouseExitAction := {}",
    "    var mouseDownAction := {}",
    "    var mouseUpAction := {}",
    "    var mouseOver := false",
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
    "            // Only one Entity should have a mousedown per frame",
    "            for (entities) do { entity->",
    "                if (entity.mouseDown) then {",
    "                    return",
    "                }",
    "            }",
    "            ",
    "            // If no Entities are clicked on mousedown on the World",
    "            mouseDown",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener, false)",
    "",
    "        mouseUpListener := { ev ->",
    "",
    "            // Only one Entity should have a mouseup per frame",
    "            for (entities) do { entity->",
    "                if (entity.mouseUp) then {",
    "                    return",
    "                }",
    "            }",
    "",
    "            // If no Entities do mouseup on the World",
    "            mouseUp",
    "        }",
    "        canvas.addEventListener(\"mouseup\", mouseUpListener)",
    "",
    "        mouseMoveListener := { ev ->",
    "            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "            mouse.position := Point.x(x)y(y)",
    "",
    "            var actionDone := false",
    "",
    "            // Mouse actions",
    "            for (entities) do { entity ->",
    "                if (entity.mouseEnter) then {",
    "                    self.mouseExit",
    "                    mouseOverEntity := true",
    "                    return",
    "                }",
    "                if (entity.mouseExit) then {",
    "                    self.mouseEnter",
    "                    mouseOverEntity := false",
    "                    return",
    "                }",
    "            }",
    "",
    "            // For first enter into world",
    "            if (!mouseOverEntity) then {",
    "                self.mouseEnter",
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
    "        if (mouseOver) then {",
    "            mouseOverAction.apply",
    "        }",
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
    "    method mouseDown {",
    "        mouseDownAction.apply",
    "    }",
    "",
    "    method mouseUp {",
    "        mouseUpAction.apply",
    "    }",
    "",
    "    // If it isn't in the Entity we shouldn't have to check",
    "    // if it is in the World",
    "    method mouseEnter {",
    "        if (mouseOver) then {",
    "            return false",
    "        }",
    "        mouseEnterAction.apply",
    "        mouseOver := true",
    "    }",
    "",
    "    method mouseExit {",
    "        if (!mouseOver) then {",
    "            return false",
    "        }",
    "        mouseExitAction.apply",
    "        mouseOver := false",
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
    "        print \"*Drag Not Available For World*\"",
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
  ];
}
