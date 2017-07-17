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
  lineNumber = 290
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
      lineNumber = 291
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 291;
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
        lineNumber = 292
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
  func8.definitionLine = 290;
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
      obj13.definitionLine = 291;
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
  lineNumber = 302
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
      lineNumber = 303
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
  func16.definitionLine = 302;
  func16.definitionModule = "kitty";
  lineNumber = 307
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
      lineNumber = 308
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
  func18.definitionLine = 307;
  func18.definitionModule = "kitty";
  lineNumber = 311
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
      lineNumber = 313
      lineNumber = 312
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
  func20.definitionLine = 311;
  func20.definitionModule = "kitty";
  lineNumber = 316
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
      lineNumber = 317
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
  func24.definitionLine = 316;
  func24.definitionModule = "kitty";
  lineNumber = 320
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
      lineNumber = 321
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
  func26.definitionLine = 320;
  func26.definitionModule = "kitty";
  lineNumber = 324
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
      lineNumber = 325
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
  func28.definitionLine = 324;
  func28.definitionModule = "kitty";
  lineNumber = 328
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
      lineNumber = 329
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
  func30.definitionLine = 328;
  func30.definitionModule = "kitty";
  lineNumber = 332
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
      lineNumber = 333
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
  func32.definitionLine = 332;
  func32.definitionModule = "kitty";
  lineNumber = 336
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
      lineNumber = 337
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
  func34.definitionLine = 336;
  func34.definitionModule = "kitty";
  lineNumber = 624
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
      lineNumber = 625
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 625;
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
        lineNumber = 626
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
  func36.definitionLine = 624;
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
      obj41.definitionLine = 625;
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
  lineNumber = 633
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
      lineNumber = 638
      lineNumber = 637
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 638;
      moduleName = "kitty";
      lineNumber = 637
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 641
      lineNumber = 638
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 641;
      moduleName = "kitty";
      lineNumber = 638
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 643
      lineNumber = 641
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 643;
      moduleName = "kitty";
      lineNumber = 641
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 645
      lineNumber = 643
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 645;
      moduleName = "kitty";
      lineNumber = 643
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 645
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 661
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
      block53.className = 'block<kitty:661>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 648
        lineNumber = 647
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 648;
        moduleName = "kitty";
        lineNumber = 647
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 649
        lineNumber = 648
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 649;
        moduleName = "kitty";
        lineNumber = 648
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 650
        lineNumber = 649
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 650;
        moduleName = "kitty";
        lineNumber = 649
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 654
        lineNumber = 650
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 654;
        moduleName = "kitty";
        lineNumber = 650
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 655
        lineNumber = 654
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
        lineNumber = 655;
        moduleName = "kitty";
        lineNumber = 654
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 658
        var if95 = var_done;
        lineNumber = 655
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 657
          lineNumber = 656
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 660
        lineNumber = 658
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 662
      lineNumber = 661
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
  func44.definitionLine = 633;
  func44.definitionModule = "kitty";
  lineNumber = 667
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 669
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 676
      var if101 = var_done;
      lineNumber = 671
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 672
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 674
        return var_done
      }
      lineNumber = 676
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 679
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
  func98.definitionLine = 667;
  func98.definitionModule = "kitty";
  lineNumber = 682
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 683
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
  func108.definitionLine = 682;
  func108.definitionModule = "kitty";
  lineNumber = 686
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
      lineNumber = 688
      lineNumber = 687
      var_m__95__world = var_world__39__;
      lineNumber = 689
      lineNumber = 688
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
  func110.definitionLine = 686;
  func110.definitionModule = "kitty";
  lineNumber = 691
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
      lineNumber = 692
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
  func112.definitionLine = 691;
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
  lineNumber = 683
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
  func115.definitionLine = 683;
  func115.definitionModule = "kitty";
  lineNumber = 683
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
  func116.definitionLine = 683;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 683
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
  func118.definitionLine = 683;
  func118.definitionModule = "kitty";
  lineNumber = 683
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
  func119.definitionLine = 683;
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
  lineNumber = 683
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
  func120.definitionLine = 683;
  func120.definitionModule = "kitty";
  lineNumber = 683
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
  func121.definitionLine = 683;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 683
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
  func122.definitionLine = 683;
  func122.definitionModule = "kitty";
  lineNumber = 683
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
  func123.definitionLine = 683;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 683
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
  func124.definitionLine = 683;
  func124.definitionModule = "kitty";
  lineNumber = 683
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
  func125.definitionLine = 683;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 683
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
  func126.definitionLine = 683;
  func126.definitionModule = "kitty";
  lineNumber = 683
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
  func127.definitionLine = 683;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 683
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
  func128.definitionLine = 683;
  func128.definitionModule = "kitty";
  lineNumber = 683
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
  func129.definitionLine = 683;
  func129.definitionModule = "kitty";
  lineNumber = 21
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 683
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
  func131.definitionLine = 683;
  func131.definitionModule = "kitty";
  lineNumber = 683
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
  func132.definitionLine = 683;
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
  lineNumber = 50
  var func222 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func222.paramCounts[0])
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
  func222.paramCounts = [
    0,
  ];
  func222.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func222;
  func222.definitionLine = 50;
  func222.definitionModule = "kitty";
  var obj223 = Grace_allocObject();
  obj223.definitionModule = "kitty";
  obj223.definitionLine = 50;
  obj223.outer = this;
  var reader_kitty_outer_224 = function() {
    return this.outer;
  }
  obj223.methods["outer"] = reader_kitty_outer_224;
  function obj_init_223() {
    var origSuperDepth = superDepth;
    superDepth = obj223;
    obj223.annotations = [];
    var func225 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func225.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
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
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var call229 = callmethod(var_ctx,"save", [0]);
              lineNumber = 66
              var call230 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 67
              var prod234 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient236 = callmethod(prod234, "/", [1], new GraceNum(180));
              var call237 = callmethod(var_ctx,"rotate", [1], quotient236);
              lineNumber = 68
              onSelf = true;
              var call238 = callmethod(this, "elements", [0]);
              lineNumber = 71
              var block239 = Grace_allocObject();
              block239.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block239.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block239.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block239.methods["match"] = GraceBlock_match;
              block239.methods["prefix?"] = GraceBlock_lift;
              block239.receiver = this;
              block239.className = 'block<kitty:71>';
              block239.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 69
                onSelf = true;
                var call241 = callmethod(this, "width", [0]);
                var call242 = callmethod(call241,"prefix-", [0]);
                var quotient244 = callmethod(call242, "/", [1], new GraceNum(2));
                onSelf = true;
                var call246 = callmethod(this, "height", [0]);
                var call247 = callmethod(call246,"prefix-", [0]);
                var quotient249 = callmethod(call247, "/", [1], new GraceNum(2));
                onSelf = true;
                var call250 = callmethod(this, "width", [0]);
                onSelf = true;
                var call251 = callmethod(this, "height", [0]);
                var call252 = callmethod(var_ctx,"drawImage", [5], var_element, quotient244, quotient249, call250, call251);
                return call252;
              };
              var call253 = callmethod(Grace_prelude,"for()do", [1, 1], call238, block239);
              lineNumber = 71
              var call254 = callmethod(var_ctx,"restore", [0]);
              return call254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func228.paramCounts = [
            4,
          ];
          func228.variableArities = [
            false,
          ];
          obj226.methods["draw"] = func228;
          func228.definitionLine = 63;
          func228.definitionModule = "kitty";
          var func255 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              lineNumber = 76
              onSelf = true;
              var call256 = callmethod(this, "imgTag", [0]);
              return call256
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func255.paramCounts = [
            0,
          ];
          func255.variableArities = [
            false,
          ];
          obj226.methods["getTag"] = func255;
          func255.definitionLine = 75;
          func255.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call258 = callmethod(this, "elements", [0]);
              var call259 = callmethod(call258,"push", [1], var_imgTag__39__);
              return call259
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func257.paramCounts = [
            1,
          ];
          func257.variableArities = [
            false,
          ];
          obj226.methods["drawImage"] = func257;
          func257.definitionLine = 79;
          func257.definitionModule = "kitty";
          sourceObject = obj226;
          lineNumber = 54
          var string260 = new GraceString("img");
          var call261 = callmethod(var_dom,"document", [0]);
          var call262 = callmethod(call261,"createElement", [1], string260);
          obj226.data["imgTag"] = call262;
          var reader_kitty_imgTag_263 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_263.def = true;
          reader_kitty_imgTag_263.confidential = true;
          obj226.methods["imgTag"] = reader_kitty_imgTag_263;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call262)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj226;
          lineNumber = 57
          lineNumber = 54
          lineNumber = 55
          onSelf = true;
          var call264 = callmethod(this, "imgTag", [0]);
          var call265 = callmethod(call264,"src:=", [1], var_url__39__);
          sourceObject = obj226;
          lineNumber = 57
          var call266 = callmethod(var_collections,"list", [0]);
          var call267 = callmethod(call266,"new", [0]);
          obj226.data["elements"] = call267;
          var reader_kitty_elements_268 = function() {
            return this.data["elements"];
          }
          obj226.methods["elements"] = reader_kitty_elements_268;
          obj226.data["elements"] = call267;
          var writer_kitty_elements_268 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj226.methods["elements:="] = writer_kitty_elements_268;
          reader_kitty_elements_268.confidential = true;
          writer_kitty_elements_268.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call267)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj226.mutable = true;
          sourceObject = obj226;
          lineNumber = 58
          onSelf = true;
          var call269 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call270 = callmethod(this, "elements", [0]);
          var call271 = callmethod(call270,"push", [1], call269);
          sourceObject = obj226;
          lineNumber = 60
          obj226.data["height"] = var_height__39__;
          var reader_kitty_height_272 = function() {
            return this.data["height"];
          }
          obj226.methods["height"] = reader_kitty_height_272;
          obj226.data["height"] = var_height__39__;
          var writer_kitty_height_272 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj226.methods["height:="] = writer_kitty_height_272;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj226.mutable = true;
          sourceObject = obj226;
          lineNumber = 61
          obj226.data["width"] = var_width__39__;
          var reader_kitty_width_273 = function() {
            return this.data["width"];
          }
          obj226.methods["width"] = reader_kitty_width_273;
          obj226.data["width"] = var_width__39__;
          var writer_kitty_width_273 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj226.methods["width:="] = writer_kitty_width_273;
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj226.mutable = true;
          sourceObject = obj226;
          sourceObject = obj226;
          sourceObject = obj226;
          superDepth = origSuperDepth;
        }
        obj_init_226.apply(obj226, []);
        return obj226
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func225.paramCounts = [
      3,
    ];
    func225.variableArities = [
      false,
    ];
    obj223.methods["new"] = func225;
    func225.definitionLine = 50;
    func225.definitionModule = "kitty";
    var func274 = function(argcv) {
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
        var obj275 = Grace_allocObject();
        obj275.definitionModule = "kitty";
        obj275.definitionLine = 50;
        var inho275 = inheritingObject;
        while (inho275.superobj) inho275 = inho275.superobj;
        inho275.superobj = obj275;
        obj275.data = inheritingObject.data;
        obj275.outer = this;
        var reader_kitty_outer_276 = function() {
          return this.outer;
        }
        obj275.methods["outer"] = reader_kitty_outer_276;
        function obj_init_275() {
          var origSuperDepth = superDepth;
          superDepth = obj275;
          obj275.annotations = [];
          var func277 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var call278 = callmethod(var_ctx,"save", [0]);
              lineNumber = 66
              var call279 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 67
              var prod283 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient285 = callmethod(prod283, "/", [1], new GraceNum(180));
              var call286 = callmethod(var_ctx,"rotate", [1], quotient285);
              lineNumber = 68
              onSelf = true;
              var call287 = callmethod(this, "elements", [0]);
              lineNumber = 71
              var block288 = Grace_allocObject();
              block288.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block288.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block288.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block288.methods["match"] = GraceBlock_match;
              block288.methods["prefix?"] = GraceBlock_lift;
              block288.receiver = this;
              block288.className = 'block<kitty:71>';
              block288.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 69
                onSelf = true;
                var call290 = callmethod(this, "width", [0]);
                var call291 = callmethod(call290,"prefix-", [0]);
                var quotient293 = callmethod(call291, "/", [1], new GraceNum(2));
                onSelf = true;
                var call295 = callmethod(this, "height", [0]);
                var call296 = callmethod(call295,"prefix-", [0]);
                var quotient298 = callmethod(call296, "/", [1], new GraceNum(2));
                onSelf = true;
                var call299 = callmethod(this, "width", [0]);
                onSelf = true;
                var call300 = callmethod(this, "height", [0]);
                var call301 = callmethod(var_ctx,"drawImage", [5], var_element, quotient293, quotient298, call299, call300);
                return call301;
              };
              var call302 = callmethod(Grace_prelude,"for()do", [1, 1], call287, block288);
              lineNumber = 71
              var call303 = callmethod(var_ctx,"restore", [0]);
              return call303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func277.paramCounts = [
            4,
          ];
          func277.variableArities = [
            false,
          ];
          obj275.methods["draw"] = func277;
          func277.definitionLine = 63;
          func277.definitionModule = "kitty";
          var func304 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              lineNumber = 76
              onSelf = true;
              var call305 = callmethod(this, "imgTag", [0]);
              return call305
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func304.paramCounts = [
            0,
          ];
          func304.variableArities = [
            false,
          ];
          obj275.methods["getTag"] = func304;
          func304.definitionLine = 75;
          func304.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call307 = callmethod(this, "elements", [0]);
              var call308 = callmethod(call307,"push", [1], var_imgTag__39__);
              return call308
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func306.paramCounts = [
            1,
          ];
          func306.variableArities = [
            false,
          ];
          obj275.methods["drawImage"] = func306;
          func306.definitionLine = 79;
          func306.definitionModule = "kitty";
          sourceObject = obj275;
          lineNumber = 54
          var string309 = new GraceString("img");
          var call310 = callmethod(var_dom,"document", [0]);
          var call311 = callmethod(call310,"createElement", [1], string309);
          obj275.data["imgTag"] = call311;
          var reader_kitty_imgTag_312 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_312.def = true;
          reader_kitty_imgTag_312.confidential = true;
          obj275.methods["imgTag"] = reader_kitty_imgTag_312;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call311)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj275;
          lineNumber = 57
          lineNumber = 54
          lineNumber = 55
          onSelf = true;
          var call313 = callmethod(this, "imgTag", [0]);
          var call314 = callmethod(call313,"src:=", [1], var_url__39__);
          sourceObject = obj275;
          lineNumber = 57
          var call315 = callmethod(var_collections,"list", [0]);
          var call316 = callmethod(call315,"new", [0]);
          obj275.data["elements"] = call316;
          var reader_kitty_elements_317 = function() {
            return this.data["elements"];
          }
          obj275.methods["elements"] = reader_kitty_elements_317;
          obj275.data["elements"] = call316;
          var writer_kitty_elements_317 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj275.methods["elements:="] = writer_kitty_elements_317;
          reader_kitty_elements_317.confidential = true;
          writer_kitty_elements_317.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call316)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj275.mutable = true;
          sourceObject = obj275;
          lineNumber = 58
          onSelf = true;
          var call318 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call319 = callmethod(this, "elements", [0]);
          var call320 = callmethod(call319,"push", [1], call318);
          sourceObject = obj275;
          lineNumber = 60
          obj275.data["height"] = var_height__39__;
          var reader_kitty_height_321 = function() {
            return this.data["height"];
          }
          obj275.methods["height"] = reader_kitty_height_321;
          obj275.data["height"] = var_height__39__;
          var writer_kitty_height_321 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj275.methods["height:="] = writer_kitty_height_321;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 60
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj275.mutable = true;
          sourceObject = obj275;
          lineNumber = 61
          obj275.data["width"] = var_width__39__;
          var reader_kitty_width_322 = function() {
            return this.data["width"];
          }
          obj275.methods["width"] = reader_kitty_width_322;
          obj275.data["width"] = var_width__39__;
          var writer_kitty_width_322 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj275.methods["width:="] = writer_kitty_width_322;
          lineNumber = 63;
          moduleName = "kitty";
          lineNumber = 61
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj275.mutable = true;
          sourceObject = obj275;
          sourceObject = obj275;
          sourceObject = obj275;
          superDepth = origSuperDepth;
        }
        obj_init_275.apply(inheritingObject, []);
        return obj275
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj223.methods["new()object"] = func274;
    var func323 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 50
        var string324 = new GraceString("class KittyImage");
        return string324
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func323.paramCounts = [
    ];
    func323.variableArities = [
    ];
    obj223.methods["asDebugString"] = func323;
    func323.definitionLine = 50;
    func323.definitionModule = "kitty";
    sourceObject = obj223;
    sourceObject = obj223;
    superDepth = origSuperDepth;
  }
  obj_init_223.apply(obj223, []);
  var var_KittyImage = obj223;
  lineNumber = 86
  lineNumber = 93
  var func325 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func325.paramCounts[0])
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
  func325.paramCounts = [
    0,
  ];
  func325.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func325;
  func325.definitionLine = 93;
  func325.definitionModule = "kitty";
  var obj326 = Grace_allocObject();
  obj326.definitionModule = "kitty";
  obj326.definitionLine = 93;
  obj326.outer = this;
  var reader_kitty_outer_327 = function() {
    return this.outer;
  }
  obj326.methods["outer"] = reader_kitty_outer_327;
  function obj_init_326() {
    var origSuperDepth = superDepth;
    superDepth = obj326;
    obj326.annotations = [];
    var func328 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func328.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
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
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var string332 = new GraceString("realyee.png");
              onSelf = true;
              var call333 = callmethod(this, "createImage", [1], string332);
              lineNumber = 123
              lineNumber = 122
              var_kitten = this;
              lineNumber = 123
              var call334 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            0,
          ];
          func331.variableArities = [
            false,
          ];
          obj329.methods["awake"] = func331;
          func331.definitionLine = 120;
          func331.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              onSelf = true;
              var call336 = callmethod(this, "updateAction", [0]);
              var call337 = callmethod(call336,"apply", [0]);
              lineNumber = 136
              var if338 = var_done;
              lineNumber = 131
              onSelf = true;
              var call339 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call339)) {
                lineNumber = 132
                onSelf = true;
                var call340 = callmethod(this, "mouseOverAction", [0]);
                var call341 = callmethod(call340,"apply", [0]);
                if338 = call341;
              }
              lineNumber = 139
              var if342 = var_done;
              lineNumber = 136
              onSelf = true;
              var call343 = callmethod(this, "mouseDragStart", [0]);
              var call345 = callmethod(var_mouse,"position", [0]);
              var opresult347 = callmethod(call345, "!=", [1], call343);
              onSelf = true;
              var call349 = callmethod(this, "mouseDownEntity", [0]);
              var opresult351 = callmethod(call349, "&&", [1], opresult347);
              if (Grace_isTrue(opresult351)) {
                lineNumber = 137
                onSelf = true;
                var call352 = callmethod(this, "mouseDragAction", [0]);
                var call353 = callmethod(call352,"apply", [0]);
                if342 = call353;
              }
              return if342
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
          obj329.methods["tick"] = func335;
          func335.definitionLine = 126;
          func335.definitionModule = "kitty";
          var func354 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              onSelf = true;
              var call355 = callmethod(this, "destroyAction", [0]);
              var call356 = callmethod(call355,"apply", [0]);
              return call356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func354.paramCounts = [
            0,
          ];
          func354.variableArities = [
            false,
          ];
          obj329.methods["kill"] = func354;
          func354.definitionLine = 141;
          func354.definitionModule = "kitty";
          var func357 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var if358 = var_done;
              lineNumber = 147
              onSelf = true;
              var call359 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call359)) {
                lineNumber = 149
                lineNumber = 142
                lineNumber = 148
                var call360 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call361 = callmethod(this, "mouseDragStart:=", [1], call360);
                lineNumber = 149
                onSelf = true;
                var call362 = callmethod(this, "mouseDownAction", [0]);
                var call363 = callmethod(call362,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool364 = new GraceBoolean(true)
                onSelf = true;
                var call365 = callmethod(this, "mouseDownEntity:=", [1], bool364);
                lineNumber = 152
                lineNumber = 151
                var bool366 = new GraceBoolean(true)
                return bool366
              }
              lineNumber = 154
              lineNumber = 153
              var bool367 = new GraceBoolean(false)
              return bool367
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
          obj329.methods["mouseDown"] = func357;
          func357.definitionLine = 146;
          func357.definitionModule = "kitty";
          var func368 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var if369 = var_done;
              lineNumber = 157
              onSelf = true;
              var call370 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call370)) {
                lineNumber = 159
                lineNumber = 149
                lineNumber = 158
                var call371 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call372 = callmethod(this, "mouseDragStart:=", [1], call371);
                lineNumber = 159
                onSelf = true;
                var call373 = callmethod(this, "mouseUpAction", [0]);
                var call374 = callmethod(call373,"apply", [0]);
                lineNumber = 161
                lineNumber = 159
                lineNumber = 160
                var bool375 = new GraceBoolean(false)
                onSelf = true;
                var call376 = callmethod(this, "mouseDownEntity:=", [1], bool375);
                lineNumber = 162
                lineNumber = 161
                var bool377 = new GraceBoolean(true)
                return bool377
              }
              lineNumber = 164
              lineNumber = 163
              var bool378 = new GraceBoolean(false)
              return bool378
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func368.paramCounts = [
            0,
          ];
          func368.variableArities = [
            false,
          ];
          obj329.methods["mouseUp"] = func368;
          func368.definitionLine = 156;
          func368.definitionModule = "kitty";
          var func379 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func379.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var if380 = var_done;
              lineNumber = 167
              onSelf = true;
              var call381 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call381)) {
                lineNumber = 169
                lineNumber = 168
                var bool382 = new GraceBoolean(false)
                return bool382
              }
              lineNumber = 171
              lineNumber = 170
              onSelf = true;
              var call384 = callmethod(this, "image", [0]);
              var call385 = callmethod(call384,"width", [0]);
              var quotient387 = callmethod(call385, "/", [1], new GraceNum(2));
              var var_w = quotient387;
              lineNumber = 171;
              moduleName = "kitty";
              lineNumber = 170
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 172
              lineNumber = 171
              onSelf = true;
              var call389 = callmethod(this, "image", [0]);
              var call390 = callmethod(call389,"height", [0]);
              var quotient392 = callmethod(call390, "/", [1], new GraceNum(2));
              var var_h = quotient392;
              lineNumber = 172;
              moduleName = "kitty";
              lineNumber = 171
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 172
              lineNumber = 173
              onSelf = true;
              var call394 = callmethod(this, "posX", [0]);
              var diff396 = callmethod(call394, "-", [1], var_w);
              onSelf = true;
              var call398 = callmethod(this, "posY", [0]);
              var diff400 = callmethod(call398, "-", [1], var_h);
              var call401 = callmethod(var_Point,"x()y", [1, 1], diff396, diff400);
              onSelf = true;
              var call403 = callmethod(this, "posX", [0]);
              var diff405 = callmethod(call403, "-", [1], var_w);
              onSelf = true;
              var call407 = callmethod(this, "posY", [0]);
              var opresult409 = callmethod(call407, "+", [1], var_h);
              var call410 = callmethod(var_Point,"x()y", [1, 1], diff405, opresult409);
              lineNumber = 174
              onSelf = true;
              var call412 = callmethod(this, "posX", [0]);
              var opresult414 = callmethod(call412, "+", [1], var_w);
              onSelf = true;
              var call416 = callmethod(this, "posY", [0]);
              var opresult418 = callmethod(call416, "+", [1], var_h);
              var call419 = callmethod(var_Point,"x()y", [1, 1], opresult414, opresult418);
              onSelf = true;
              var call421 = callmethod(this, "posX", [0]);
              var opresult423 = callmethod(call421, "+", [1], var_w);
              onSelf = true;
              var call425 = callmethod(this, "posY", [0]);
              var diff427 = callmethod(call425, "-", [1], var_h);
              var call428 = callmethod(var_Point,"x()y", [1, 1], opresult423, diff427);
              lineNumber = 172
              var call429 = callmethod(var_collections,"list", [0]);
              var call430 = callmethod(call429,"new", [4], call401, call410, call419, call428);
              var var_poly = call430;
              lineNumber = 172;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 181
              var if431 = var_done;
              lineNumber = 176
              var call432 = callmethod(var_mouse,"location", [0]);
              var call433 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call434 = callmethod(call433, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call435 = callmethod(call434, "pointInPolygon", [2], call432, var_poly);
              if (Grace_isTrue(call435)) {
                lineNumber = 177
                onSelf = true;
                var call436 = callmethod(this, "mouseEnterAction", [0]);
                var call437 = callmethod(call436,"apply", [0]);
                lineNumber = 179
                lineNumber = 177
                lineNumber = 178
                var bool438 = new GraceBoolean(true)
                onSelf = true;
                var call439 = callmethod(this, "mouseOver:=", [1], bool438);
                lineNumber = 180
                lineNumber = 179
                var bool440 = new GraceBoolean(true)
                return bool440
              }
              return if431
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func379.paramCounts = [
            0,
          ];
          func379.variableArities = [
            false,
          ];
          obj329.methods["mouseEnter"] = func379;
          func379.definitionLine = 166;
          func379.definitionModule = "kitty";
          var func441 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func441.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              var if442 = var_done;
              lineNumber = 184
              onSelf = true;
              var call443 = callmethod(this, "mouseOver", [0]);
              var call444 = callmethod(call443,"prefix!", [0]);
              if (Grace_isTrue(call444)) {
                lineNumber = 186
                lineNumber = 185
                var bool445 = new GraceBoolean(false)
                return bool445
              }
              lineNumber = 188
              lineNumber = 187
              onSelf = true;
              var call447 = callmethod(this, "image", [0]);
              var call448 = callmethod(call447,"width", [0]);
              var quotient450 = callmethod(call448, "/", [1], new GraceNum(2));
              var var_w = quotient450;
              lineNumber = 188;
              moduleName = "kitty";
              lineNumber = 187
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 189
              lineNumber = 188
              onSelf = true;
              var call452 = callmethod(this, "image", [0]);
              var call453 = callmethod(call452,"height", [0]);
              var quotient455 = callmethod(call453, "/", [1], new GraceNum(2));
              var var_h = quotient455;
              lineNumber = 189;
              moduleName = "kitty";
              lineNumber = 188
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 189
              lineNumber = 190
              onSelf = true;
              var call457 = callmethod(this, "posX", [0]);
              var diff459 = callmethod(call457, "-", [1], var_w);
              onSelf = true;
              var call461 = callmethod(this, "posY", [0]);
              var diff463 = callmethod(call461, "-", [1], var_h);
              var call464 = callmethod(var_Point,"x()y", [1, 1], diff459, diff463);
              onSelf = true;
              var call466 = callmethod(this, "posX", [0]);
              var diff468 = callmethod(call466, "-", [1], var_w);
              onSelf = true;
              var call470 = callmethod(this, "posY", [0]);
              var opresult472 = callmethod(call470, "+", [1], var_h);
              var call473 = callmethod(var_Point,"x()y", [1, 1], diff468, opresult472);
              lineNumber = 191
              onSelf = true;
              var call475 = callmethod(this, "posX", [0]);
              var opresult477 = callmethod(call475, "+", [1], var_w);
              onSelf = true;
              var call479 = callmethod(this, "posY", [0]);
              var opresult481 = callmethod(call479, "+", [1], var_h);
              var call482 = callmethod(var_Point,"x()y", [1, 1], opresult477, opresult481);
              onSelf = true;
              var call484 = callmethod(this, "posX", [0]);
              var opresult486 = callmethod(call484, "+", [1], var_w);
              onSelf = true;
              var call488 = callmethod(this, "posY", [0]);
              var diff490 = callmethod(call488, "-", [1], var_h);
              var call491 = callmethod(var_Point,"x()y", [1, 1], opresult486, diff490);
              lineNumber = 189
              var call492 = callmethod(var_collections,"list", [0]);
              var call493 = callmethod(call492,"new", [4], call464, call473, call482, call491);
              var var_poly = call493;
              lineNumber = 189;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 198
              var if494 = var_done;
              lineNumber = 193
              onSelf = true;
              var call495 = callmethod(this, "mouseOver", [0]);
              var call497 = callmethod(var_mouse,"location", [0]);
              var call498 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call499 = callmethod(call498, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call500 = callmethod(call499, "pointInPolygon", [2], call497, var_poly);
              var call501 = callmethod(call500,"prefix!", [0]);
              var opresult503 = callmethod(call501, "&&", [1], call495);
              if (Grace_isTrue(opresult503)) {
                lineNumber = 194
                onSelf = true;
                var call504 = callmethod(this, "mouseExitAction", [0]);
                var call505 = callmethod(call504,"apply", [0]);
                lineNumber = 196
                lineNumber = 194
                lineNumber = 195
                var bool506 = new GraceBoolean(false)
                onSelf = true;
                var call507 = callmethod(this, "mouseOver:=", [1], bool506);
                lineNumber = 197
                lineNumber = 196
                var bool508 = new GraceBoolean(true)
                return bool508
              }
              return if494
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func441.paramCounts = [
            0,
          ];
          func441.variableArities = [
            false,
          ];
          obj329.methods["mouseExit"] = func441;
          func441.definitionLine = 183;
          func441.definitionModule = "kitty";
          var func509 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func509.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              lineNumber = 194
              lineNumber = 202
              onSelf = true;
              var call512 = callmethod(this, "rotation", [0]);
              var prod514 = callmethod(call512, "*", [1], new GraceNum(3.14159));
              var quotient516 = callmethod(prod514, "/", [1], new GraceNum(180));
              var call517 = callmethod(var_math,"cos", [1], quotient516);
              var call519 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod522 = callmethod(var_distance, "*", [1], call519);
              var prod524 = callmethod(prod522, "*", [1], call517);
              onSelf = true;
              var call526 = callmethod(this, "posX", [0]);
              var opresult528 = callmethod(call526, "+", [1], prod524);
              onSelf = true;
              var call529 = callmethod(this, "posX:=", [1], opresult528);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              onSelf = true;
              var call532 = callmethod(this, "rotation", [0]);
              var prod534 = callmethod(call532, "*", [1], new GraceNum(3.14159));
              var quotient536 = callmethod(prod534, "/", [1], new GraceNum(180));
              var call537 = callmethod(var_math,"sin", [1], quotient536);
              var call539 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod542 = callmethod(var_distance, "*", [1], call539);
              var prod544 = callmethod(prod542, "*", [1], call537);
              onSelf = true;
              var call546 = callmethod(this, "posY", [0]);
              var opresult548 = callmethod(call546, "+", [1], prod544);
              onSelf = true;
              var call549 = callmethod(this, "posY:=", [1], opresult548);
              return call549
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
          obj329.methods["move"] = func509;
          func509.definitionLine = 201;
          func509.definitionModule = "kitty";
          var func550 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func550.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 207
              lineNumber = 203
              lineNumber = 207
              onSelf = true;
              var call553 = callmethod(this, "rotation", [0]);
              var opresult556 = callmethod(new GraceNum(90), "+", [1], call553);
              var prod558 = callmethod(opresult556, "*", [1], new GraceNum(3.14159));
              var quotient560 = callmethod(prod558, "/", [1], new GraceNum(180));
              var call561 = callmethod(var_math,"cos", [1], quotient560);
              var call563 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod566 = callmethod(var_distance, "*", [1], call563);
              var prod568 = callmethod(prod566, "*", [1], call561);
              onSelf = true;
              var call570 = callmethod(this, "posX", [0]);
              var opresult572 = callmethod(call570, "+", [1], prod568);
              onSelf = true;
              var call573 = callmethod(this, "posX:=", [1], opresult572);
              lineNumber = 208
              lineNumber = 207
              lineNumber = 208
              onSelf = true;
              var call576 = callmethod(this, "rotation", [0]);
              var opresult579 = callmethod(new GraceNum(90), "+", [1], call576);
              var prod581 = callmethod(opresult579, "*", [1], new GraceNum(3.14159));
              var quotient583 = callmethod(prod581, "/", [1], new GraceNum(180));
              var call584 = callmethod(var_math,"sin", [1], quotient583);
              var call586 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod589 = callmethod(var_distance, "*", [1], call586);
              var prod591 = callmethod(prod589, "*", [1], call584);
              onSelf = true;
              var call593 = callmethod(this, "posY", [0]);
              var opresult595 = callmethod(call593, "+", [1], prod591);
              onSelf = true;
              var call596 = callmethod(this, "posY:=", [1], opresult595);
              return call596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func550.paramCounts = [
            1,
          ];
          func550.variableArities = [
            false,
          ];
          obj329.methods["strafe"] = func550;
          func550.definitionLine = 206;
          func550.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 213
              lineNumber = 208
              lineNumber = 213
              lineNumber = 212
              onSelf = true;
              var call599 = callmethod(this, "rotation", [0]);
              var opresult601 = callmethod(call599, "+", [1], var_angle);
              onSelf = true;
              var call602 = callmethod(this, "rotation:=", [1], opresult601);
              return call602
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
          obj329.methods["turn"] = func597;
          func597.definitionLine = 211;
          func597.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              var call604 = callmethod(var_ctx,"save", [0]);
              lineNumber = 218
              onSelf = true;
              var call605 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call606 = callmethod(this, "posY", [0]);
              var call607 = callmethod(var_ctx,"translate", [2], call605, call606);
              lineNumber = 219
              onSelf = true;
              var call608 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call609 = callmethod(this, "image", [0]);
              var call610 = callmethod(call609,"draw", [4], var_ctx, var_dx, var_dy, call608);
              lineNumber = 220
              var call611 = callmethod(var_ctx,"restore", [0]);
              return call611
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func603.paramCounts = [
            3,
          ];
          func603.variableArities = [
            false,
          ];
          obj329.methods["draw"] = func603;
          func603.definitionLine = 216;
          func603.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 220
              lineNumber = 224
              var call613 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call614 = callmethod(call613, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call615 = callmethod(call614, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call616 = callmethod(this, "image:=", [1], call615);
              return call616
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
          obj329.methods["createImage"] = func612;
          func612.definitionLine = 223;
          func612.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 229
              lineNumber = 224
              lineNumber = 228
              onSelf = true;
              var call618 = callmethod(this, "image:=", [1], var_image__39__);
              return call618
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func617.paramTypes = [];
          func617.paramTypes.push([]);
          func617.paramCounts = [
            1,
          ];
          func617.variableArities = [
            false,
          ];
          obj329.methods["setImage"] = func617;
          func617.definitionLine = 227;
          func617.definitionModule = "kitty";
          var func619 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func619.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 234
              lineNumber = 224
              lineNumber = 233
              onSelf = true;
              var call620 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj329.methods["setUpdateAction"] = func619;
          func619.definitionLine = 232;
          func619.definitionModule = "kitty";
          var func621 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func621.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 238
              lineNumber = 224
              lineNumber = 237
              onSelf = true;
              var call622 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj329.methods["setDestroyAction"] = func621;
          func621.definitionLine = 236;
          func621.definitionModule = "kitty";
          var func623 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              lineNumber = 224
              lineNumber = 241
              onSelf = true;
              var call624 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
            1,
          ];
          func623.variableArities = [
            false,
          ];
          obj329.methods["setMouseDownAction"] = func623;
          func623.definitionLine = 240;
          func623.definitionModule = "kitty";
          var func625 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 246
              lineNumber = 224
              lineNumber = 245
              onSelf = true;
              var call626 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
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
            1,
          ];
          func625.variableArities = [
            false,
          ];
          obj329.methods["setMouseUpAction"] = func625;
          func625.definitionLine = 244;
          func625.definitionModule = "kitty";
          var func627 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func627.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 224
              lineNumber = 249
              onSelf = true;
              var call628 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
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
          obj329.methods["setMouseEnterAction"] = func627;
          func627.definitionLine = 248;
          func627.definitionModule = "kitty";
          var func629 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 254
              lineNumber = 224
              lineNumber = 253
              onSelf = true;
              var call630 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
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
          obj329.methods["setMouseDragAction"] = func629;
          func629.definitionLine = 252;
          func629.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 224
              lineNumber = 257
              onSelf = true;
              var call632 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
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
          obj329.methods["setMouseOverAction"] = func631;
          func631.definitionLine = 256;
          func631.definitionModule = "kitty";
          var func633 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 262
              lineNumber = 224
              lineNumber = 261
              onSelf = true;
              var call634 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
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
          obj329.methods["setMouseExitAction"] = func633;
          func633.definitionLine = 260;
          func633.definitionModule = "kitty";
          var func635 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func635.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 266
              lineNumber = 224
              lineNumber = 265
              onSelf = true;
              var call636 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 267
              lineNumber = 224
              lineNumber = 266
              onSelf = true;
              var call637 = callmethod(this, "posY:=", [1], var_y);
              return call637
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func635.paramCounts = [
            2,
          ];
          func635.variableArities = [
            false,
          ];
          obj329.methods["setLocation"] = func635;
          func635.definitionLine = 264;
          func635.definitionModule = "kitty";
          var func638 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 270
              onSelf = true;
              var call639 = callmethod(this, "posX", [0]);
              return call639
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
          obj329.methods["getX"] = func638;
          func638.definitionLine = 269;
          func638.definitionModule = "kitty";
          var func640 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func640.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 274
              onSelf = true;
              var call641 = callmethod(this, "posY", [0]);
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
          obj329.methods["getY"] = func640;
          func640.definitionLine = 273;
          func640.definitionModule = "kitty";
          var func642 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 279
              lineNumber = 224
              lineNumber = 278
              onSelf = true;
              var call643 = callmethod(this, "posX:=", [1], var_posX__39__);
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
            1,
          ];
          func642.variableArities = [
            false,
          ];
          obj329.methods["setX"] = func642;
          func642.definitionLine = 277;
          func642.definitionModule = "kitty";
          var func644 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              lineNumber = 224
              lineNumber = 282
              onSelf = true;
              var call645 = callmethod(this, "posY:=", [1], var_posY__39__);
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
          obj329.methods["setY"] = func644;
          func644.definitionLine = 281;
          func644.definitionModule = "kitty";
          var func646 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func646.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 287
              lineNumber = 286
              onSelf = true;
              var call647 = callmethod(this, "rotation", [0]);
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
            0,
          ];
          func646.variableArities = [
            false,
          ];
          obj329.methods["getRotation"] = func646;
          func646.definitionLine = 285;
          func646.definitionModule = "kitty";
          sourceObject = obj329;
          lineNumber = 97
          obj329.data["tag"] = var_tag__39__;
          var reader_kitty_tag_648 = function() {
            return this.data["tag"];
          }
          obj329.methods["tag"] = reader_kitty_tag_648;
          obj329.data["tag"] = var_tag__39__;
          var writer_kitty_tag_648 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj329.methods["tag:="] = writer_kitty_tag_648;
          reader_kitty_tag_648.confidential = true;
          writer_kitty_tag_648.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 98
          obj329.data["posX"] = var_x__39__;
          var reader_kitty_posX_649 = function() {
            return this.data["posX"];
          }
          obj329.methods["posX"] = reader_kitty_posX_649;
          obj329.data["posX"] = var_x__39__;
          var writer_kitty_posX_649 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj329.methods["posX:="] = writer_kitty_posX_649;
          reader_kitty_posX_649.confidential = true;
          writer_kitty_posX_649.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 99
          obj329.data["posY"] = var_y__39__;
          var reader_kitty_posY_650 = function() {
            return this.data["posY"];
          }
          obj329.methods["posY"] = reader_kitty_posY_650;
          obj329.data["posY"] = var_y__39__;
          var writer_kitty_posY_650 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj329.methods["posY:="] = writer_kitty_posY_650;
          reader_kitty_posY_650.confidential = true;
          writer_kitty_posY_650.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 100
          obj329.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_651 = function() {
            return this.data["rotation"];
          }
          obj329.methods["rotation"] = reader_kitty_rotation_651;
          obj329.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_651 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj329.methods["rotation:="] = writer_kitty_rotation_651;
          reader_kitty_rotation_651.confidential = true;
          writer_kitty_rotation_651.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 104
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
          block652.className = 'block<kitty:104>';
          block652.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["updateAction"] = block652;
          var reader_kitty_updateAction_653 = function() {
            return this.data["updateAction"];
          }
          obj329.methods["updateAction"] = reader_kitty_updateAction_653;
          obj329.data["updateAction"] = block652;
          var writer_kitty_updateAction_653 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj329.methods["updateAction:="] = writer_kitty_updateAction_653;
          reader_kitty_updateAction_653.confidential = true;
          writer_kitty_updateAction_653.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block652)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 105
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
          block654.className = 'block<kitty:105>';
          block654.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["destroyAction"] = block654;
          var reader_kitty_destroyAction_655 = function() {
            return this.data["destroyAction"];
          }
          obj329.methods["destroyAction"] = reader_kitty_destroyAction_655;
          obj329.data["destroyAction"] = block654;
          var writer_kitty_destroyAction_655 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj329.methods["destroyAction:="] = writer_kitty_destroyAction_655;
          reader_kitty_destroyAction_655.confidential = true;
          writer_kitty_destroyAction_655.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block654)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 106
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
          block656.className = 'block<kitty:106>';
          block656.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["mouseDownAction"] = block656;
          var reader_kitty_mouseDownAction_657 = function() {
            return this.data["mouseDownAction"];
          }
          obj329.methods["mouseDownAction"] = reader_kitty_mouseDownAction_657;
          obj329.data["mouseDownAction"] = block656;
          var writer_kitty_mouseDownAction_657 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj329.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_657;
          reader_kitty_mouseDownAction_657.confidential = true;
          writer_kitty_mouseDownAction_657.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block656)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 107
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
          block658.className = 'block<kitty:107>';
          block658.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["mouseUpAction"] = block658;
          var reader_kitty_mouseUpAction_659 = function() {
            return this.data["mouseUpAction"];
          }
          obj329.methods["mouseUpAction"] = reader_kitty_mouseUpAction_659;
          obj329.data["mouseUpAction"] = block658;
          var writer_kitty_mouseUpAction_659 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj329.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_659;
          reader_kitty_mouseUpAction_659.confidential = true;
          writer_kitty_mouseUpAction_659.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block658)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 108
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
          block660.className = 'block<kitty:108>';
          block660.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call661 = callmethod(var_mouse,"x", [0]);
            var call662 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call663 = callmethod(this, "setLocation", [2], call661, call662);
            return call663;
          };
          obj329.data["mouseDragAction"] = block660;
          var reader_kitty_mouseDragAction_664 = function() {
            return this.data["mouseDragAction"];
          }
          obj329.methods["mouseDragAction"] = reader_kitty_mouseDragAction_664;
          obj329.data["mouseDragAction"] = block660;
          var writer_kitty_mouseDragAction_664 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj329.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_664;
          reader_kitty_mouseDragAction_664.confidential = true;
          writer_kitty_mouseDragAction_664.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block660)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 109
          var block665 = Grace_allocObject();
          block665.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block665.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block665.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block665.methods["match"] = GraceBlock_match;
          block665.methods["prefix?"] = GraceBlock_lift;
          block665.receiver = this;
          block665.className = 'block<kitty:109>';
          block665.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["mouseEnterAction"] = block665;
          var reader_kitty_mouseEnterAction_666 = function() {
            return this.data["mouseEnterAction"];
          }
          obj329.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_666;
          obj329.data["mouseEnterAction"] = block665;
          var writer_kitty_mouseEnterAction_666 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj329.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_666;
          reader_kitty_mouseEnterAction_666.confidential = true;
          writer_kitty_mouseEnterAction_666.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block665)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 110
          var block667 = Grace_allocObject();
          block667.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block667.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block667.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block667.methods["match"] = GraceBlock_match;
          block667.methods["prefix?"] = GraceBlock_lift;
          block667.receiver = this;
          block667.className = 'block<kitty:110>';
          block667.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["mouseOverAction"] = block667;
          var reader_kitty_mouseOverAction_668 = function() {
            return this.data["mouseOverAction"];
          }
          obj329.methods["mouseOverAction"] = reader_kitty_mouseOverAction_668;
          obj329.data["mouseOverAction"] = block667;
          var writer_kitty_mouseOverAction_668 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj329.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_668;
          reader_kitty_mouseOverAction_668.confidential = true;
          writer_kitty_mouseOverAction_668.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block667)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 111
          var block669 = Grace_allocObject();
          block669.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block669.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block669.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block669.methods["match"] = GraceBlock_match;
          block669.methods["prefix?"] = GraceBlock_lift;
          block669.receiver = this;
          block669.className = 'block<kitty:111>';
          block669.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj329.data["mouseExitAction"] = block669;
          var reader_kitty_mouseExitAction_670 = function() {
            return this.data["mouseExitAction"];
          }
          obj329.methods["mouseExitAction"] = reader_kitty_mouseExitAction_670;
          obj329.data["mouseExitAction"] = block669;
          var writer_kitty_mouseExitAction_670 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj329.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_670;
          reader_kitty_mouseExitAction_670.confidential = true;
          writer_kitty_mouseExitAction_670.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block669)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 111
          var bool671 = new GraceBoolean(false)
          obj329.data["mouseOver"] = bool671;
          var reader_kitty_mouseOver_672 = function() {
            return this.data["mouseOver"];
          }
          obj329.methods["mouseOver"] = reader_kitty_mouseOver_672;
          obj329.data["mouseOver"] = bool671;
          var writer_kitty_mouseOver_672 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj329.methods["mouseOver:="] = writer_kitty_mouseOver_672;
          reader_kitty_mouseOver_672.confidential = true;
          writer_kitty_mouseOver_672.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool671)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 112
          var bool673 = new GraceBoolean(false)
          obj329.data["mouseDownEntity"] = bool673;
          var reader_kitty_mouseDownEntity_674 = function() {
            return this.data["mouseDownEntity"];
          }
          obj329.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_674;
          obj329.data["mouseDownEntity"] = bool673;
          var writer_kitty_mouseDownEntity_674 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj329.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_674;
          reader_kitty_mouseDownEntity_674.confidential = true;
          writer_kitty_mouseDownEntity_674.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool673)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 114
          var call675 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj329.data["mouseDragStart"] = call675;
          var reader_kitty_mouseDragStart_676 = function() {
            return this.data["mouseDragStart"];
          }
          obj329.methods["mouseDragStart"] = reader_kitty_mouseDragStart_676;
          obj329.data["mouseDragStart"] = call675;
          var writer_kitty_mouseDragStart_676 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj329.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_676;
          reader_kitty_mouseDragStart_676.confidential = true;
          writer_kitty_mouseDragStart_676.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call675)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          obj329.data["image"] = undefined;
          var reader_kitty_image_677 = function() {
            return this.data["image"];
          }
          obj329.methods["image"] = reader_kitty_image_677;
          obj329.data["image"] = undefined;
          var writer_kitty_image_677 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj329.methods["image:="] = writer_kitty_image_677;
          reader_kitty_image_677.confidential = true;
          writer_kitty_image_677.confidential = true;
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 117
          onSelf = true;
          var call678 = callmethod(this, "awake", [0]);
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          superDepth = origSuperDepth;
        }
        obj_init_329.apply(obj329, []);
        return obj329
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func328.paramCounts = [
      3,
    ];
    func328.variableArities = [
      false,
    ];
    obj326.methods["new"] = func328;
    func328.definitionLine = 93;
    func328.definitionModule = "kitty";
    var func679 = function(argcv) {
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
        var obj680 = Grace_allocObject();
        obj680.definitionModule = "kitty";
        obj680.definitionLine = 93;
        var inho680 = inheritingObject;
        while (inho680.superobj) inho680 = inho680.superobj;
        inho680.superobj = obj680;
        obj680.data = inheritingObject.data;
        obj680.outer = this;
        var reader_kitty_outer_681 = function() {
          return this.outer;
        }
        obj680.methods["outer"] = reader_kitty_outer_681;
        function obj_init_680() {
          var origSuperDepth = superDepth;
          superDepth = obj680;
          obj680.annotations = [];
          var func682 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func682.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var string683 = new GraceString("realyee.png");
              onSelf = true;
              var call684 = callmethod(this, "createImage", [1], string683);
              lineNumber = 123
              lineNumber = 122
              var_kitten = this;
              lineNumber = 123
              var call685 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call685
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
          obj680.methods["awake"] = func682;
          func682.definitionLine = 120;
          func682.definitionModule = "kitty";
          var func686 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func686.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              onSelf = true;
              var call687 = callmethod(this, "updateAction", [0]);
              var call688 = callmethod(call687,"apply", [0]);
              lineNumber = 136
              var if689 = var_done;
              lineNumber = 131
              onSelf = true;
              var call690 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call690)) {
                lineNumber = 132
                onSelf = true;
                var call691 = callmethod(this, "mouseOverAction", [0]);
                var call692 = callmethod(call691,"apply", [0]);
                if689 = call692;
              }
              lineNumber = 139
              var if693 = var_done;
              lineNumber = 136
              onSelf = true;
              var call694 = callmethod(this, "mouseDragStart", [0]);
              var call696 = callmethod(var_mouse,"position", [0]);
              var opresult698 = callmethod(call696, "!=", [1], call694);
              onSelf = true;
              var call700 = callmethod(this, "mouseDownEntity", [0]);
              var opresult702 = callmethod(call700, "&&", [1], opresult698);
              if (Grace_isTrue(opresult702)) {
                lineNumber = 137
                onSelf = true;
                var call703 = callmethod(this, "mouseDragAction", [0]);
                var call704 = callmethod(call703,"apply", [0]);
                if693 = call704;
              }
              return if693
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
          obj680.methods["tick"] = func686;
          func686.definitionLine = 126;
          func686.definitionModule = "kitty";
          var func705 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func705.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              onSelf = true;
              var call706 = callmethod(this, "destroyAction", [0]);
              var call707 = callmethod(call706,"apply", [0]);
              return call707
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func705.paramCounts = [
            0,
          ];
          func705.variableArities = [
            false,
          ];
          obj680.methods["kill"] = func705;
          func705.definitionLine = 141;
          func705.definitionModule = "kitty";
          var func708 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func708.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var if709 = var_done;
              lineNumber = 147
              onSelf = true;
              var call710 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call710)) {
                lineNumber = 149
                lineNumber = 142
                lineNumber = 148
                var call711 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call712 = callmethod(this, "mouseDragStart:=", [1], call711);
                lineNumber = 149
                onSelf = true;
                var call713 = callmethod(this, "mouseDownAction", [0]);
                var call714 = callmethod(call713,"apply", [0]);
                lineNumber = 151
                lineNumber = 149
                lineNumber = 150
                var bool715 = new GraceBoolean(true)
                onSelf = true;
                var call716 = callmethod(this, "mouseDownEntity:=", [1], bool715);
                lineNumber = 152
                lineNumber = 151
                var bool717 = new GraceBoolean(true)
                return bool717
              }
              lineNumber = 154
              lineNumber = 153
              var bool718 = new GraceBoolean(false)
              return bool718
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
          obj680.methods["mouseDown"] = func708;
          func708.definitionLine = 146;
          func708.definitionModule = "kitty";
          var func719 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func719.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var if720 = var_done;
              lineNumber = 157
              onSelf = true;
              var call721 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call721)) {
                lineNumber = 159
                lineNumber = 149
                lineNumber = 158
                var call722 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call723 = callmethod(this, "mouseDragStart:=", [1], call722);
                lineNumber = 159
                onSelf = true;
                var call724 = callmethod(this, "mouseUpAction", [0]);
                var call725 = callmethod(call724,"apply", [0]);
                lineNumber = 161
                lineNumber = 159
                lineNumber = 160
                var bool726 = new GraceBoolean(false)
                onSelf = true;
                var call727 = callmethod(this, "mouseDownEntity:=", [1], bool726);
                lineNumber = 162
                lineNumber = 161
                var bool728 = new GraceBoolean(true)
                return bool728
              }
              lineNumber = 164
              lineNumber = 163
              var bool729 = new GraceBoolean(false)
              return bool729
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func719.paramCounts = [
            0,
          ];
          func719.variableArities = [
            false,
          ];
          obj680.methods["mouseUp"] = func719;
          func719.definitionLine = 156;
          func719.definitionModule = "kitty";
          var func730 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func730.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var if731 = var_done;
              lineNumber = 167
              onSelf = true;
              var call732 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call732)) {
                lineNumber = 169
                lineNumber = 168
                var bool733 = new GraceBoolean(false)
                return bool733
              }
              lineNumber = 171
              lineNumber = 170
              onSelf = true;
              var call735 = callmethod(this, "image", [0]);
              var call736 = callmethod(call735,"width", [0]);
              var quotient738 = callmethod(call736, "/", [1], new GraceNum(2));
              var var_w = quotient738;
              lineNumber = 171;
              moduleName = "kitty";
              lineNumber = 170
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 172
              lineNumber = 171
              onSelf = true;
              var call740 = callmethod(this, "image", [0]);
              var call741 = callmethod(call740,"height", [0]);
              var quotient743 = callmethod(call741, "/", [1], new GraceNum(2));
              var var_h = quotient743;
              lineNumber = 172;
              moduleName = "kitty";
              lineNumber = 171
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 172
              lineNumber = 173
              onSelf = true;
              var call745 = callmethod(this, "posX", [0]);
              var diff747 = callmethod(call745, "-", [1], var_w);
              onSelf = true;
              var call749 = callmethod(this, "posY", [0]);
              var diff751 = callmethod(call749, "-", [1], var_h);
              var call752 = callmethod(var_Point,"x()y", [1, 1], diff747, diff751);
              onSelf = true;
              var call754 = callmethod(this, "posX", [0]);
              var diff756 = callmethod(call754, "-", [1], var_w);
              onSelf = true;
              var call758 = callmethod(this, "posY", [0]);
              var opresult760 = callmethod(call758, "+", [1], var_h);
              var call761 = callmethod(var_Point,"x()y", [1, 1], diff756, opresult760);
              lineNumber = 174
              onSelf = true;
              var call763 = callmethod(this, "posX", [0]);
              var opresult765 = callmethod(call763, "+", [1], var_w);
              onSelf = true;
              var call767 = callmethod(this, "posY", [0]);
              var opresult769 = callmethod(call767, "+", [1], var_h);
              var call770 = callmethod(var_Point,"x()y", [1, 1], opresult765, opresult769);
              onSelf = true;
              var call772 = callmethod(this, "posX", [0]);
              var opresult774 = callmethod(call772, "+", [1], var_w);
              onSelf = true;
              var call776 = callmethod(this, "posY", [0]);
              var diff778 = callmethod(call776, "-", [1], var_h);
              var call779 = callmethod(var_Point,"x()y", [1, 1], opresult774, diff778);
              lineNumber = 172
              var call780 = callmethod(var_collections,"list", [0]);
              var call781 = callmethod(call780,"new", [4], call752, call761, call770, call779);
              var var_poly = call781;
              lineNumber = 172;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 181
              var if782 = var_done;
              lineNumber = 176
              var call783 = callmethod(var_mouse,"location", [0]);
              var call784 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call785 = callmethod(call784, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call786 = callmethod(call785, "pointInPolygon", [2], call783, var_poly);
              if (Grace_isTrue(call786)) {
                lineNumber = 177
                onSelf = true;
                var call787 = callmethod(this, "mouseEnterAction", [0]);
                var call788 = callmethod(call787,"apply", [0]);
                lineNumber = 179
                lineNumber = 177
                lineNumber = 178
                var bool789 = new GraceBoolean(true)
                onSelf = true;
                var call790 = callmethod(this, "mouseOver:=", [1], bool789);
                lineNumber = 180
                lineNumber = 179
                var bool791 = new GraceBoolean(true)
                return bool791
              }
              return if782
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func730.paramCounts = [
            0,
          ];
          func730.variableArities = [
            false,
          ];
          obj680.methods["mouseEnter"] = func730;
          func730.definitionLine = 166;
          func730.definitionModule = "kitty";
          var func792 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func792.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              var if793 = var_done;
              lineNumber = 184
              onSelf = true;
              var call794 = callmethod(this, "mouseOver", [0]);
              var call795 = callmethod(call794,"prefix!", [0]);
              if (Grace_isTrue(call795)) {
                lineNumber = 186
                lineNumber = 185
                var bool796 = new GraceBoolean(false)
                return bool796
              }
              lineNumber = 188
              lineNumber = 187
              onSelf = true;
              var call798 = callmethod(this, "image", [0]);
              var call799 = callmethod(call798,"width", [0]);
              var quotient801 = callmethod(call799, "/", [1], new GraceNum(2));
              var var_w = quotient801;
              lineNumber = 188;
              moduleName = "kitty";
              lineNumber = 187
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 189
              lineNumber = 188
              onSelf = true;
              var call803 = callmethod(this, "image", [0]);
              var call804 = callmethod(call803,"height", [0]);
              var quotient806 = callmethod(call804, "/", [1], new GraceNum(2));
              var var_h = quotient806;
              lineNumber = 189;
              moduleName = "kitty";
              lineNumber = 188
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 189
              lineNumber = 190
              onSelf = true;
              var call808 = callmethod(this, "posX", [0]);
              var diff810 = callmethod(call808, "-", [1], var_w);
              onSelf = true;
              var call812 = callmethod(this, "posY", [0]);
              var diff814 = callmethod(call812, "-", [1], var_h);
              var call815 = callmethod(var_Point,"x()y", [1, 1], diff810, diff814);
              onSelf = true;
              var call817 = callmethod(this, "posX", [0]);
              var diff819 = callmethod(call817, "-", [1], var_w);
              onSelf = true;
              var call821 = callmethod(this, "posY", [0]);
              var opresult823 = callmethod(call821, "+", [1], var_h);
              var call824 = callmethod(var_Point,"x()y", [1, 1], diff819, opresult823);
              lineNumber = 191
              onSelf = true;
              var call826 = callmethod(this, "posX", [0]);
              var opresult828 = callmethod(call826, "+", [1], var_w);
              onSelf = true;
              var call830 = callmethod(this, "posY", [0]);
              var opresult832 = callmethod(call830, "+", [1], var_h);
              var call833 = callmethod(var_Point,"x()y", [1, 1], opresult828, opresult832);
              onSelf = true;
              var call835 = callmethod(this, "posX", [0]);
              var opresult837 = callmethod(call835, "+", [1], var_w);
              onSelf = true;
              var call839 = callmethod(this, "posY", [0]);
              var diff841 = callmethod(call839, "-", [1], var_h);
              var call842 = callmethod(var_Point,"x()y", [1, 1], opresult837, diff841);
              lineNumber = 189
              var call843 = callmethod(var_collections,"list", [0]);
              var call844 = callmethod(call843,"new", [4], call815, call824, call833, call842);
              var var_poly = call844;
              lineNumber = 189;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 198
              var if845 = var_done;
              lineNumber = 193
              onSelf = true;
              var call846 = callmethod(this, "mouseOver", [0]);
              var call848 = callmethod(var_mouse,"location", [0]);
              var call849 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call850 = callmethod(call849, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call851 = callmethod(call850, "pointInPolygon", [2], call848, var_poly);
              var call852 = callmethod(call851,"prefix!", [0]);
              var opresult854 = callmethod(call852, "&&", [1], call846);
              if (Grace_isTrue(opresult854)) {
                lineNumber = 194
                onSelf = true;
                var call855 = callmethod(this, "mouseExitAction", [0]);
                var call856 = callmethod(call855,"apply", [0]);
                lineNumber = 196
                lineNumber = 194
                lineNumber = 195
                var bool857 = new GraceBoolean(false)
                onSelf = true;
                var call858 = callmethod(this, "mouseOver:=", [1], bool857);
                lineNumber = 197
                lineNumber = 196
                var bool859 = new GraceBoolean(true)
                return bool859
              }
              return if845
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func792.paramCounts = [
            0,
          ];
          func792.variableArities = [
            false,
          ];
          obj680.methods["mouseExit"] = func792;
          func792.definitionLine = 183;
          func792.definitionModule = "kitty";
          var func860 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func860.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 202
              lineNumber = 194
              lineNumber = 202
              onSelf = true;
              var call863 = callmethod(this, "rotation", [0]);
              var prod865 = callmethod(call863, "*", [1], new GraceNum(3.14159));
              var quotient867 = callmethod(prod865, "/", [1], new GraceNum(180));
              var call868 = callmethod(var_math,"cos", [1], quotient867);
              var call870 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod873 = callmethod(var_distance, "*", [1], call870);
              var prod875 = callmethod(prod873, "*", [1], call868);
              onSelf = true;
              var call877 = callmethod(this, "posX", [0]);
              var opresult879 = callmethod(call877, "+", [1], prod875);
              onSelf = true;
              var call880 = callmethod(this, "posX:=", [1], opresult879);
              lineNumber = 203
              lineNumber = 202
              lineNumber = 203
              onSelf = true;
              var call883 = callmethod(this, "rotation", [0]);
              var prod885 = callmethod(call883, "*", [1], new GraceNum(3.14159));
              var quotient887 = callmethod(prod885, "/", [1], new GraceNum(180));
              var call888 = callmethod(var_math,"sin", [1], quotient887);
              var call890 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod893 = callmethod(var_distance, "*", [1], call890);
              var prod895 = callmethod(prod893, "*", [1], call888);
              onSelf = true;
              var call897 = callmethod(this, "posY", [0]);
              var opresult899 = callmethod(call897, "+", [1], prod895);
              onSelf = true;
              var call900 = callmethod(this, "posY:=", [1], opresult899);
              return call900
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func860.paramCounts = [
            1,
          ];
          func860.variableArities = [
            false,
          ];
          obj680.methods["move"] = func860;
          func860.definitionLine = 201;
          func860.definitionModule = "kitty";
          var func901 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func901.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 207
              lineNumber = 203
              lineNumber = 207
              onSelf = true;
              var call904 = callmethod(this, "rotation", [0]);
              var opresult907 = callmethod(new GraceNum(90), "+", [1], call904);
              var prod909 = callmethod(opresult907, "*", [1], new GraceNum(3.14159));
              var quotient911 = callmethod(prod909, "/", [1], new GraceNum(180));
              var call912 = callmethod(var_math,"cos", [1], quotient911);
              var call914 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod917 = callmethod(var_distance, "*", [1], call914);
              var prod919 = callmethod(prod917, "*", [1], call912);
              onSelf = true;
              var call921 = callmethod(this, "posX", [0]);
              var opresult923 = callmethod(call921, "+", [1], prod919);
              onSelf = true;
              var call924 = callmethod(this, "posX:=", [1], opresult923);
              lineNumber = 208
              lineNumber = 207
              lineNumber = 208
              onSelf = true;
              var call927 = callmethod(this, "rotation", [0]);
              var opresult930 = callmethod(new GraceNum(90), "+", [1], call927);
              var prod932 = callmethod(opresult930, "*", [1], new GraceNum(3.14159));
              var quotient934 = callmethod(prod932, "/", [1], new GraceNum(180));
              var call935 = callmethod(var_math,"sin", [1], quotient934);
              var call937 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod940 = callmethod(var_distance, "*", [1], call937);
              var prod942 = callmethod(prod940, "*", [1], call935);
              onSelf = true;
              var call944 = callmethod(this, "posY", [0]);
              var opresult946 = callmethod(call944, "+", [1], prod942);
              onSelf = true;
              var call947 = callmethod(this, "posY:=", [1], opresult946);
              return call947
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func901.paramCounts = [
            1,
          ];
          func901.variableArities = [
            false,
          ];
          obj680.methods["strafe"] = func901;
          func901.definitionLine = 206;
          func901.definitionModule = "kitty";
          var func948 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func948.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 213
              lineNumber = 208
              lineNumber = 213
              lineNumber = 212
              onSelf = true;
              var call950 = callmethod(this, "rotation", [0]);
              var opresult952 = callmethod(call950, "+", [1], var_angle);
              onSelf = true;
              var call953 = callmethod(this, "rotation:=", [1], opresult952);
              return call953
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func948.paramCounts = [
            1,
          ];
          func948.variableArities = [
            false,
          ];
          obj680.methods["turn"] = func948;
          func948.definitionLine = 211;
          func948.definitionModule = "kitty";
          var func954 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func954.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              var call955 = callmethod(var_ctx,"save", [0]);
              lineNumber = 218
              onSelf = true;
              var call956 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call957 = callmethod(this, "posY", [0]);
              var call958 = callmethod(var_ctx,"translate", [2], call956, call957);
              lineNumber = 219
              onSelf = true;
              var call959 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call960 = callmethod(this, "image", [0]);
              var call961 = callmethod(call960,"draw", [4], var_ctx, var_dx, var_dy, call959);
              lineNumber = 220
              var call962 = callmethod(var_ctx,"restore", [0]);
              return call962
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func954.paramCounts = [
            3,
          ];
          func954.variableArities = [
            false,
          ];
          obj680.methods["draw"] = func954;
          func954.definitionLine = 216;
          func954.definitionModule = "kitty";
          var func963 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func963.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              lineNumber = 220
              lineNumber = 224
              var call964 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call965 = callmethod(call964, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call966 = callmethod(call965, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call967 = callmethod(this, "image:=", [1], call966);
              return call967
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func963.paramCounts = [
            1,
          ];
          func963.variableArities = [
            false,
          ];
          obj680.methods["createImage"] = func963;
          func963.definitionLine = 223;
          func963.definitionModule = "kitty";
          var func968 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func968.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 229
              lineNumber = 224
              lineNumber = 228
              onSelf = true;
              var call969 = callmethod(this, "image:=", [1], var_image__39__);
              return call969
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func968.paramTypes = [];
          func968.paramTypes.push([]);
          func968.paramCounts = [
            1,
          ];
          func968.variableArities = [
            false,
          ];
          obj680.methods["setImage"] = func968;
          func968.definitionLine = 227;
          func968.definitionModule = "kitty";
          var func970 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func970.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 234
              lineNumber = 224
              lineNumber = 233
              onSelf = true;
              var call971 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call971
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func970.paramCounts = [
            1,
          ];
          func970.variableArities = [
            false,
          ];
          obj680.methods["setUpdateAction"] = func970;
          func970.definitionLine = 232;
          func970.definitionModule = "kitty";
          var func972 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func972.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 238
              lineNumber = 224
              lineNumber = 237
              onSelf = true;
              var call973 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call973
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func972.paramCounts = [
            1,
          ];
          func972.variableArities = [
            false,
          ];
          obj680.methods["setDestroyAction"] = func972;
          func972.definitionLine = 236;
          func972.definitionModule = "kitty";
          var func974 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func974.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              lineNumber = 224
              lineNumber = 241
              onSelf = true;
              var call975 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call975
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func974.paramCounts = [
            1,
          ];
          func974.variableArities = [
            false,
          ];
          obj680.methods["setMouseDownAction"] = func974;
          func974.definitionLine = 240;
          func974.definitionModule = "kitty";
          var func976 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func976.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 246
              lineNumber = 224
              lineNumber = 245
              onSelf = true;
              var call977 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call977
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
          obj680.methods["setMouseUpAction"] = func976;
          func976.definitionLine = 244;
          func976.definitionModule = "kitty";
          var func978 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func978.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 224
              lineNumber = 249
              onSelf = true;
              var call979 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call979
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func978.paramCounts = [
            1,
          ];
          func978.variableArities = [
            false,
          ];
          obj680.methods["setMouseEnterAction"] = func978;
          func978.definitionLine = 248;
          func978.definitionModule = "kitty";
          var func980 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func980.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 254
              lineNumber = 224
              lineNumber = 253
              onSelf = true;
              var call981 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
              return call981
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func980.paramCounts = [
            1,
          ];
          func980.variableArities = [
            false,
          ];
          obj680.methods["setMouseDragAction"] = func980;
          func980.definitionLine = 252;
          func980.definitionModule = "kitty";
          var func982 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func982.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 258
              lineNumber = 224
              lineNumber = 257
              onSelf = true;
              var call983 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call983
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func982.paramCounts = [
            1,
          ];
          func982.variableArities = [
            false,
          ];
          obj680.methods["setMouseOverAction"] = func982;
          func982.definitionLine = 256;
          func982.definitionModule = "kitty";
          var func984 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func984.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 262
              lineNumber = 224
              lineNumber = 261
              onSelf = true;
              var call985 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call985
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func984.paramCounts = [
            1,
          ];
          func984.variableArities = [
            false,
          ];
          obj680.methods["setMouseExitAction"] = func984;
          func984.definitionLine = 260;
          func984.definitionModule = "kitty";
          var func986 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func986.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 266
              lineNumber = 224
              lineNumber = 265
              onSelf = true;
              var call987 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 267
              lineNumber = 224
              lineNumber = 266
              onSelf = true;
              var call988 = callmethod(this, "posY:=", [1], var_y);
              return call988
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func986.paramCounts = [
            2,
          ];
          func986.variableArities = [
            false,
          ];
          obj680.methods["setLocation"] = func986;
          func986.definitionLine = 264;
          func986.definitionModule = "kitty";
          var func989 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func989.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 271
              lineNumber = 270
              onSelf = true;
              var call990 = callmethod(this, "posX", [0]);
              return call990
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func989.paramCounts = [
            0,
          ];
          func989.variableArities = [
            false,
          ];
          obj680.methods["getX"] = func989;
          func989.definitionLine = 269;
          func989.definitionModule = "kitty";
          var func991 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func991.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 275
              lineNumber = 274
              onSelf = true;
              var call992 = callmethod(this, "posY", [0]);
              return call992
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func991.paramCounts = [
            0,
          ];
          func991.variableArities = [
            false,
          ];
          obj680.methods["getY"] = func991;
          func991.definitionLine = 273;
          func991.definitionModule = "kitty";
          var func993 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func993.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 279
              lineNumber = 224
              lineNumber = 278
              onSelf = true;
              var call994 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call994
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func993.paramCounts = [
            1,
          ];
          func993.variableArities = [
            false,
          ];
          obj680.methods["setX"] = func993;
          func993.definitionLine = 277;
          func993.definitionModule = "kitty";
          var func995 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func995.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              lineNumber = 224
              lineNumber = 282
              onSelf = true;
              var call996 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call996
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func995.paramCounts = [
            1,
          ];
          func995.variableArities = [
            false,
          ];
          obj680.methods["setY"] = func995;
          func995.definitionLine = 281;
          func995.definitionModule = "kitty";
          var func997 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func997.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 287
              lineNumber = 286
              onSelf = true;
              var call998 = callmethod(this, "rotation", [0]);
              return call998
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func997.paramCounts = [
            0,
          ];
          func997.variableArities = [
            false,
          ];
          obj680.methods["getRotation"] = func997;
          func997.definitionLine = 285;
          func997.definitionModule = "kitty";
          sourceObject = obj680;
          lineNumber = 97
          obj680.data["tag"] = var_tag__39__;
          var reader_kitty_tag_999 = function() {
            return this.data["tag"];
          }
          obj680.methods["tag"] = reader_kitty_tag_999;
          obj680.data["tag"] = var_tag__39__;
          var writer_kitty_tag_999 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj680.methods["tag:="] = writer_kitty_tag_999;
          reader_kitty_tag_999.confidential = true;
          writer_kitty_tag_999.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 98
          obj680.data["posX"] = var_x__39__;
          var reader_kitty_posX_1000 = function() {
            return this.data["posX"];
          }
          obj680.methods["posX"] = reader_kitty_posX_1000;
          obj680.data["posX"] = var_x__39__;
          var writer_kitty_posX_1000 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj680.methods["posX:="] = writer_kitty_posX_1000;
          reader_kitty_posX_1000.confidential = true;
          writer_kitty_posX_1000.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 99
          obj680.data["posY"] = var_y__39__;
          var reader_kitty_posY_1001 = function() {
            return this.data["posY"];
          }
          obj680.methods["posY"] = reader_kitty_posY_1001;
          obj680.data["posY"] = var_y__39__;
          var writer_kitty_posY_1001 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj680.methods["posY:="] = writer_kitty_posY_1001;
          reader_kitty_posY_1001.confidential = true;
          writer_kitty_posY_1001.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 100
          obj680.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_1002 = function() {
            return this.data["rotation"];
          }
          obj680.methods["rotation"] = reader_kitty_rotation_1002;
          obj680.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_1002 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj680.methods["rotation:="] = writer_kitty_rotation_1002;
          reader_kitty_rotation_1002.confidential = true;
          writer_kitty_rotation_1002.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 104
          var block1003 = Grace_allocObject();
          block1003.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1003.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1003.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1003.methods["match"] = GraceBlock_match;
          block1003.methods["prefix?"] = GraceBlock_lift;
          block1003.receiver = this;
          block1003.className = 'block<kitty:104>';
          block1003.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["updateAction"] = block1003;
          var reader_kitty_updateAction_1004 = function() {
            return this.data["updateAction"];
          }
          obj680.methods["updateAction"] = reader_kitty_updateAction_1004;
          obj680.data["updateAction"] = block1003;
          var writer_kitty_updateAction_1004 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj680.methods["updateAction:="] = writer_kitty_updateAction_1004;
          reader_kitty_updateAction_1004.confidential = true;
          writer_kitty_updateAction_1004.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1003)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 105
          var block1005 = Grace_allocObject();
          block1005.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1005.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1005.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1005.methods["match"] = GraceBlock_match;
          block1005.methods["prefix?"] = GraceBlock_lift;
          block1005.receiver = this;
          block1005.className = 'block<kitty:105>';
          block1005.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["destroyAction"] = block1005;
          var reader_kitty_destroyAction_1006 = function() {
            return this.data["destroyAction"];
          }
          obj680.methods["destroyAction"] = reader_kitty_destroyAction_1006;
          obj680.data["destroyAction"] = block1005;
          var writer_kitty_destroyAction_1006 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj680.methods["destroyAction:="] = writer_kitty_destroyAction_1006;
          reader_kitty_destroyAction_1006.confidential = true;
          writer_kitty_destroyAction_1006.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1005)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 106
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
          block1007.className = 'block<kitty:106>';
          block1007.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["mouseDownAction"] = block1007;
          var reader_kitty_mouseDownAction_1008 = function() {
            return this.data["mouseDownAction"];
          }
          obj680.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1008;
          obj680.data["mouseDownAction"] = block1007;
          var writer_kitty_mouseDownAction_1008 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj680.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1008;
          reader_kitty_mouseDownAction_1008.confidential = true;
          writer_kitty_mouseDownAction_1008.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1007)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 107
          var block1009 = Grace_allocObject();
          block1009.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1009.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1009.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1009.methods["match"] = GraceBlock_match;
          block1009.methods["prefix?"] = GraceBlock_lift;
          block1009.receiver = this;
          block1009.className = 'block<kitty:107>';
          block1009.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["mouseUpAction"] = block1009;
          var reader_kitty_mouseUpAction_1010 = function() {
            return this.data["mouseUpAction"];
          }
          obj680.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1010;
          obj680.data["mouseUpAction"] = block1009;
          var writer_kitty_mouseUpAction_1010 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj680.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1010;
          reader_kitty_mouseUpAction_1010.confidential = true;
          writer_kitty_mouseUpAction_1010.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1009)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 108
          var block1011 = Grace_allocObject();
          block1011.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1011.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1011.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1011.methods["match"] = GraceBlock_match;
          block1011.methods["prefix?"] = GraceBlock_lift;
          block1011.receiver = this;
          block1011.className = 'block<kitty:108>';
          block1011.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call1012 = callmethod(var_mouse,"x", [0]);
            var call1013 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call1014 = callmethod(this, "setLocation", [2], call1012, call1013);
            return call1014;
          };
          obj680.data["mouseDragAction"] = block1011;
          var reader_kitty_mouseDragAction_1015 = function() {
            return this.data["mouseDragAction"];
          }
          obj680.methods["mouseDragAction"] = reader_kitty_mouseDragAction_1015;
          obj680.data["mouseDragAction"] = block1011;
          var writer_kitty_mouseDragAction_1015 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj680.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_1015;
          reader_kitty_mouseDragAction_1015.confidential = true;
          writer_kitty_mouseDragAction_1015.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1011)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 109
          var block1016 = Grace_allocObject();
          block1016.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1016.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1016.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1016.methods["match"] = GraceBlock_match;
          block1016.methods["prefix?"] = GraceBlock_lift;
          block1016.receiver = this;
          block1016.className = 'block<kitty:109>';
          block1016.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["mouseEnterAction"] = block1016;
          var reader_kitty_mouseEnterAction_1017 = function() {
            return this.data["mouseEnterAction"];
          }
          obj680.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1017;
          obj680.data["mouseEnterAction"] = block1016;
          var writer_kitty_mouseEnterAction_1017 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj680.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1017;
          reader_kitty_mouseEnterAction_1017.confidential = true;
          writer_kitty_mouseEnterAction_1017.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1016)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 110
          var block1018 = Grace_allocObject();
          block1018.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1018.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1018.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1018.methods["match"] = GraceBlock_match;
          block1018.methods["prefix?"] = GraceBlock_lift;
          block1018.receiver = this;
          block1018.className = 'block<kitty:110>';
          block1018.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["mouseOverAction"] = block1018;
          var reader_kitty_mouseOverAction_1019 = function() {
            return this.data["mouseOverAction"];
          }
          obj680.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1019;
          obj680.data["mouseOverAction"] = block1018;
          var writer_kitty_mouseOverAction_1019 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj680.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1019;
          reader_kitty_mouseOverAction_1019.confidential = true;
          writer_kitty_mouseOverAction_1019.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1018)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 111
          var block1020 = Grace_allocObject();
          block1020.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1020.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1020.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1020.methods["match"] = GraceBlock_match;
          block1020.methods["prefix?"] = GraceBlock_lift;
          block1020.receiver = this;
          block1020.className = 'block<kitty:111>';
          block1020.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj680.data["mouseExitAction"] = block1020;
          var reader_kitty_mouseExitAction_1021 = function() {
            return this.data["mouseExitAction"];
          }
          obj680.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1021;
          obj680.data["mouseExitAction"] = block1020;
          var writer_kitty_mouseExitAction_1021 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj680.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1021;
          reader_kitty_mouseExitAction_1021.confidential = true;
          writer_kitty_mouseExitAction_1021.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1020)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 111
          var bool1022 = new GraceBoolean(false)
          obj680.data["mouseOver"] = bool1022;
          var reader_kitty_mouseOver_1023 = function() {
            return this.data["mouseOver"];
          }
          obj680.methods["mouseOver"] = reader_kitty_mouseOver_1023;
          obj680.data["mouseOver"] = bool1022;
          var writer_kitty_mouseOver_1023 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj680.methods["mouseOver:="] = writer_kitty_mouseOver_1023;
          reader_kitty_mouseOver_1023.confidential = true;
          writer_kitty_mouseOver_1023.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1022)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 112
          var bool1024 = new GraceBoolean(false)
          obj680.data["mouseDownEntity"] = bool1024;
          var reader_kitty_mouseDownEntity_1025 = function() {
            return this.data["mouseDownEntity"];
          }
          obj680.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_1025;
          obj680.data["mouseDownEntity"] = bool1024;
          var writer_kitty_mouseDownEntity_1025 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj680.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_1025;
          reader_kitty_mouseDownEntity_1025.confidential = true;
          writer_kitty_mouseDownEntity_1025.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1024)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 114
          var call1026 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj680.data["mouseDragStart"] = call1026;
          var reader_kitty_mouseDragStart_1027 = function() {
            return this.data["mouseDragStart"];
          }
          obj680.methods["mouseDragStart"] = reader_kitty_mouseDragStart_1027;
          obj680.data["mouseDragStart"] = call1026;
          var writer_kitty_mouseDragStart_1027 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj680.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_1027;
          reader_kitty_mouseDragStart_1027.confidential = true;
          writer_kitty_mouseDragStart_1027.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1026)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj680.mutable = true;
          sourceObject = obj680;
          obj680.data["image"] = undefined;
          var reader_kitty_image_1028 = function() {
            return this.data["image"];
          }
          obj680.methods["image"] = reader_kitty_image_1028;
          obj680.data["image"] = undefined;
          var writer_kitty_image_1028 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj680.methods["image:="] = writer_kitty_image_1028;
          reader_kitty_image_1028.confidential = true;
          writer_kitty_image_1028.confidential = true;
          obj680.mutable = true;
          sourceObject = obj680;
          lineNumber = 117
          onSelf = true;
          var call1029 = callmethod(this, "awake", [0]);
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          sourceObject = obj680;
          superDepth = origSuperDepth;
        }
        obj_init_680.apply(inheritingObject, []);
        return obj680
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj326.methods["new()object"] = func679;
    var func1030 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 93
        var string1031 = new GraceString("class KittyEntity");
        return string1031
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1030.paramCounts = [
    ];
    func1030.variableArities = [
    ];
    obj326.methods["asDebugString"] = func1030;
    func1030.definitionLine = 93;
    func1030.definitionModule = "kitty";
    sourceObject = obj326;
    sourceObject = obj326;
    superDepth = origSuperDepth;
  }
  obj_init_326.apply(obj326, []);
  var var_KittyEntity = obj326;
  lineNumber = 290
  lineNumber = 302
  lineNumber = 307
  lineNumber = 311
  lineNumber = 316
  lineNumber = 320
  lineNumber = 324
  lineNumber = 328
  lineNumber = 332
  lineNumber = 336
  lineNumber = 343
  var func1032 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1032.paramCounts[0])
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
  func1032.paramCounts = [
    0,
  ];
  func1032.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func1032;
  func1032.definitionLine = 343;
  func1032.definitionModule = "kitty";
  var obj1033 = Grace_allocObject();
  obj1033.definitionModule = "kitty";
  obj1033.definitionLine = 343;
  obj1033.outer = this;
  var reader_kitty_outer_1034 = function() {
    return this.outer;
  }
  obj1033.methods["outer"] = reader_kitty_outer_1034;
  function obj_init_1033() {
    var origSuperDepth = superDepth;
    superDepth = obj1033;
    obj1033.annotations = [];
    var func1035 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1035.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj1036 = Grace_allocObject();
        obj1036.definitionModule = "kitty";
        obj1036.definitionLine = 343;
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
            if (argcv[0] !=  func1038.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 391
              var if1039 = var_done;
              lineNumber = 387
              onSelf = true;
              var call1040 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1040)) {
                lineNumber = 389
                lineNumber = 388
                var bool1041 = new GraceBoolean(false)
                return bool1041
              }
              lineNumber = 392
              lineNumber = 343
              lineNumber = 391
              var call1042 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1043 = callmethod(this, "document:=", [1], call1042);
              lineNumber = 392
              lineNumber = 391
              lineNumber = 392
              var string1044 = new GraceString("standard-canvas");
              onSelf = true;
              var call1045 = callmethod(this, "document", [0]);
              var call1046 = callmethod(call1045,"getElementById", [1], string1044);
              onSelf = true;
              var call1047 = callmethod(this, "canvas:=", [1], call1046);
              lineNumber = 394
              lineNumber = 391
              lineNumber = 393
              onSelf = true;
              var call1048 = callmethod(this, "canvas", [0]);
              var call1049 = callmethod(call1048,"width", [0]);
              onSelf = true;
              var call1050 = callmethod(this, "canvasWidth:=", [1], call1049);
              lineNumber = 397
              lineNumber = 393
              lineNumber = 394
              onSelf = true;
              var call1051 = callmethod(this, "canvas", [0]);
              var call1052 = callmethod(call1051,"height", [0]);
              onSelf = true;
              var call1053 = callmethod(this, "canvasHeight:=", [1], call1052);
              lineNumber = 409
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
              block1054.className = 'block<kitty:409>';
              block1054.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 400
                onSelf = true;
                var call1055 = callmethod(this, "entities", [0]);
                lineNumber = 407
                var block1056 = Grace_allocObject();
                block1056.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1056.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1056.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1056.methods["match"] = GraceBlock_match;
                block1056.methods["prefix?"] = GraceBlock_lift;
                block1056.receiver = this;
                block1056.className = 'block<kitty:407>';
                block1056.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 404
                  var if1057 = var_done;
                  lineNumber = 401
                  var call1058 = callmethod(var_entity,"mouseDown", [0]);
                  if (Grace_isTrue(call1058)) {
                    lineNumber = 403
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1057;
                };
                var call1059 = callmethod(Grace_prelude,"for()do", [1, 1], call1055, block1056);
                lineNumber = 407
                onSelf = true;
                var call1060 = callmethod(this, "mouseDown", [0]);
                return call1060;
              };
              var_mouseDownListener = block1054;
              lineNumber = 409
              var string1061 = new GraceString("mousedown");
              var bool1062 = new GraceBoolean(false)
              onSelf = true;
              var call1063 = callmethod(this, "canvas", [0]);
              var call1064 = callmethod(call1063,"addEventListener", [3], string1061, var_mouseDownListener, bool1062);
              lineNumber = 423
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
              block1065.className = 'block<kitty:423>';
              block1065.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 414
                onSelf = true;
                var call1066 = callmethod(this, "entities", [0]);
                lineNumber = 421
                var block1067 = Grace_allocObject();
                block1067.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1067.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1067.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1067.methods["match"] = GraceBlock_match;
                block1067.methods["prefix?"] = GraceBlock_lift;
                block1067.receiver = this;
                block1067.className = 'block<kitty:421>';
                block1067.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 418
                  var if1068 = var_done;
                  lineNumber = 415
                  var call1069 = callmethod(var_entity,"mouseUp", [0]);
                  if (Grace_isTrue(call1069)) {
                    lineNumber = 417
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1068;
                };
                var call1070 = callmethod(Grace_prelude,"for()do", [1, 1], call1066, block1067);
                lineNumber = 421
                onSelf = true;
                var call1071 = callmethod(this, "mouseUp", [0]);
                return call1071;
              };
              var_mouseUpListener = block1065;
              lineNumber = 423
              var string1072 = new GraceString("mouseup");
              onSelf = true;
              var call1073 = callmethod(this, "canvas", [0]);
              var call1074 = callmethod(call1073,"addEventListener", [2], string1072, var_mouseUpListener);
              lineNumber = 444
              var block1075 = Grace_allocObject();
              block1075.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1075.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1075.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1075.methods["match"] = GraceBlock_match;
              block1075.methods["prefix?"] = GraceBlock_lift;
              block1075.receiver = this;
              block1075.className = 'block<kitty:444>';
              block1075.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 427
                lineNumber = 426
                onSelf = true;
                var call1076 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1078 = callmethod(this, "canvas", [0]);
                var call1079 = callmethod(call1078,"offsetWidth", [0]);
                onSelf = true;
                var call1081 = callmethod(this, "canvas", [0]);
                var call1082 = callmethod(call1081,"offsetLeft", [0]);
                var call1084 = callmethod(var_ev,"clientX", [0]);
                var diff1086 = callmethod(call1084, "-", [1], call1082);
                var quotient1088 = callmethod(diff1086, "/", [1], call1079);
                var prod1090 = callmethod(quotient1088, "*", [1], call1076);
                var var_x = prod1090;
                lineNumber = 427;
                moduleName = "kitty";
                lineNumber = 426
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 428
                lineNumber = 427
                onSelf = true;
                var call1091 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1093 = callmethod(this, "canvas", [0]);
                var call1094 = callmethod(call1093,"offsetHeight", [0]);
                onSelf = true;
                var call1096 = callmethod(this, "canvas", [0]);
                var call1097 = callmethod(call1096,"offsetTop", [0]);
                var call1099 = callmethod(var_ev,"clientY", [0]);
                var diff1101 = callmethod(call1099, "-", [1], call1097);
                var quotient1103 = callmethod(diff1101, "/", [1], call1094);
                var prod1105 = callmethod(quotient1103, "*", [1], call1091);
                var var_y = prod1105;
                lineNumber = 428;
                moduleName = "kitty";
                lineNumber = 427
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 428
                lineNumber = 427
                lineNumber = 428
                var call1106 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1107 = callmethod(var_mouse,"position:=", [1], call1106);
                lineNumber = 431
                onSelf = true;
                var call1108 = callmethod(this, "entities", [0]);
                lineNumber = 443
                var block1109 = Grace_allocObject();
                block1109.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1109.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1109.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1109.methods["match"] = GraceBlock_match;
                block1109.methods["prefix?"] = GraceBlock_lift;
                block1109.receiver = this;
                block1109.className = 'block<kitty:443>';
                block1109.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 436
                  var if1110 = var_done;
                  lineNumber = 432
                  var call1111 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1111)) {
                    lineNumber = 433
                    onSelf = true;
                    var call1112 = callmethod(this, "mouseExit", [0]);
                    lineNumber = 435
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 440
                  var if1113 = var_done;
                  lineNumber = 436
                  var call1114 = callmethod(var_entity,"mouseExit", [0]);
                  if (Grace_isTrue(call1114)) {
                    lineNumber = 437
                    onSelf = true;
                    var call1115 = callmethod(this, "mouseEnter", [0]);
                    lineNumber = 439
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1113;
                };
                var call1116 = callmethod(Grace_prelude,"for()do", [1, 1], call1108, block1109);
                return call1116;
              };
              var_mouseMoveListener = block1075;
              lineNumber = 444
              var string1117 = new GraceString("mousemove");
              onSelf = true;
              var call1118 = callmethod(this, "canvas", [0]);
              var call1119 = callmethod(call1118,"addEventListener", [2], string1117, var_mouseMoveListener);
              lineNumber = 454
              var block1120 = Grace_allocObject();
              block1120.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1120.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1120.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1120.methods["match"] = GraceBlock_match;
              block1120.methods["prefix?"] = GraceBlock_lift;
              block1120.receiver = this;
              block1120.className = 'block<kitty:454>';
              block1120.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 452
                var if1121 = var_done;
                lineNumber = 449
                var call1123 = callmethod(var_ev,"keyCode", [0]);
                var opresult1125 = callmethod(call1123, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1125)) {
                  lineNumber = 450
                  onSelf = true;
                  var call1126 = callmethod(this, "stop", [0]);
                  if1121 = call1126;
                }
                lineNumber = 453
                lineNumber = 452
                var call1127 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1127;
                return call1127;
              };
              var_keyDownListener = block1120;
              lineNumber = 454
              var string1128 = new GraceString("keydown");
              onSelf = true;
              var call1129 = callmethod(this, "document", [0]);
              var call1130 = callmethod(call1129,"addEventListener", [2], string1128, var_keyDownListener);
              lineNumber = 460
              var block1131 = Grace_allocObject();
              block1131.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1131.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1131.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1131.methods["match"] = GraceBlock_match;
              block1131.methods["prefix?"] = GraceBlock_lift;
              block1131.receiver = this;
              block1131.className = 'block<kitty:460>';
              block1131.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 459
                lineNumber = 458
                var call1132 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1132;
                return call1132;
              };
              var_keyUpListener = block1131;
              lineNumber = 460
              var string1133 = new GraceString("keyup");
              onSelf = true;
              var call1134 = callmethod(this, "document", [0]);
              var call1135 = callmethod(call1134,"addEventListener", [2], string1133, var_keyUpListener);
              lineNumber = 462
              lineNumber = 452
              lineNumber = 462
              var string1136 = new GraceString("canvas");
              var call1137 = callmethod(var_dom,"document", [0]);
              var call1138 = callmethod(call1137,"createElement", [1], string1136);
              onSelf = true;
              var call1139 = callmethod(this, "backingCanvas:=", [1], call1138);
              lineNumber = 464
              lineNumber = 462
              lineNumber = 463
              onSelf = true;
              var call1140 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1141 = callmethod(this, "backingCanvas", [0]);
              var call1142 = callmethod(call1141,"height:=", [1], call1140);
              lineNumber = 465
              lineNumber = 462
              lineNumber = 464
              onSelf = true;
              var call1143 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1144 = callmethod(this, "backingCanvas", [0]);
              var call1145 = callmethod(call1144,"width:=", [1], call1143);
              lineNumber = 465
              lineNumber = 462
              lineNumber = 465
              var string1146 = new GraceString("2d");
              onSelf = true;
              var call1147 = callmethod(this, "backingCanvas", [0]);
              var call1148 = callmethod(call1147,"getContext", [1], string1146);
              onSelf = true;
              var call1149 = callmethod(this, "backingContext:=", [1], call1148);
              lineNumber = 466
              lineNumber = 462
              lineNumber = 466
              var string1150 = new GraceString("2d");
              onSelf = true;
              var call1151 = callmethod(this, "canvas", [0]);
              var call1152 = callmethod(call1151,"getContext", [1], string1150);
              onSelf = true;
              var call1153 = callmethod(this, "mctx:=", [1], call1152);
              lineNumber = 469
              var string1154 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1155 = callmethod(this, "setBackground", [1], string1154);
              lineNumber = 472
              var call1156 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1157 = callmethod(call1156, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1158 = callmethod(call1157, "setWorld", [1], this);
              lineNumber = 475
              lineNumber = 474
              var_kitten = this;
              lineNumber = 476
              lineNumber = 472
              lineNumber = 475
              var bool1159 = new GraceBoolean(true)
              onSelf = true;
              var call1160 = callmethod(this, "isInit:=", [1], bool1159);
              return call1160
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1038.paramCounts = [
            0,
          ];
          func1038.variableArities = [
            false,
          ];
          obj1036.methods["init"] = func1038;
          func1038.definitionLine = 383;
          func1038.definitionModule = "kitty";
          var func1161 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1161.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 482
              lineNumber = 472
              lineNumber = 481
              var bool1162 = new GraceBoolean(true)
              onSelf = true;
              var call1163 = callmethod(this, "isRunning:=", [1], bool1162);
              lineNumber = 482
              var block1164 = Grace_allocObject();
              block1164.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1164.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1164.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1164.methods["match"] = GraceBlock_match;
              block1164.methods["prefix?"] = GraceBlock_lift;
              block1164.receiver = this;
              block1164.className = 'block<kitty:482>';
              block1164.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1165 = callmethod(this, "isRunning", [0]);
                return call1165;
              };
              lineNumber = 486
              var block1166 = Grace_allocObject();
              block1166.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1166.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1166.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1166.methods["match"] = GraceBlock_match;
              block1166.methods["prefix?"] = GraceBlock_lift;
              block1166.receiver = this;
              block1166.className = 'block<kitty:486>';
              block1166.real = function(
              ) {
                sourceObject = this;
                lineNumber = 483
                onSelf = true;
                var call1167 = callmethod(this, "tick", [0]);
                return call1167;
              };
              lineNumber = 482
              var call1168 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1164, new GraceNum(10), block1166);
              return call1168
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1161.paramCounts = [
            0,
          ];
          func1161.variableArities = [
            false,
          ];
          obj1036.methods["start"] = func1161;
          func1161.definitionLine = 479;
          func1161.definitionModule = "kitty";
          var func1169 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1169.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 495
              lineNumber = 472
              lineNumber = 494
              onSelf = true;
              var call1170 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1171 = callmethod(this, "mctx", [0]);
              var call1172 = callmethod(call1171,"fillStyle:=", [1], call1170);
              lineNumber = 495
              onSelf = true;
              var call1173 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1174 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1175 = callmethod(this, "mctx", [0]);
              var call1176 = callmethod(call1175,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1173, call1174);
              lineNumber = 496
              onSelf = true;
              var call1177 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1178 = callmethod(this, "mctx", [0]);
              var call1179 = callmethod(call1178,"drawImage", [3], call1177, new GraceNum(0), new GraceNum(0));
              lineNumber = 497
              onSelf = true;
              var call1180 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1182 = callmethod(this, "canvasWidth", [0]);
              var quotient1184 = callmethod(call1182, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1186 = callmethod(this, "canvasHeight", [0]);
              var quotient1188 = callmethod(call1186, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1189 = callmethod(this, "background", [0]);
              var call1190 = callmethod(call1189,"draw", [4], call1180, quotient1184, quotient1188, new GraceNum(0));
              lineNumber = 500
              onSelf = true;
              var call1191 = callmethod(this, "updateAction", [0]);
              var call1192 = callmethod(call1191,"apply", [0]);
              lineNumber = 503
              onSelf = true;
              var call1193 = callmethod(this, "entities", [0]);
              lineNumber = 510
              var block1194 = Grace_allocObject();
              block1194.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1194.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1194.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1194.methods["match"] = GraceBlock_match;
              block1194.methods["prefix?"] = GraceBlock_lift;
              block1194.receiver = this;
              block1194.className = 'block<kitty:510>';
              block1194.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 504
                var call1195 = callmethod(var_entity,"tick", [0]);
                lineNumber = 506
                onSelf = true;
                var call1196 = callmethod(this, "mctx", [0]);
                var call1197 = callmethod(var_entity,"draw", [3], call1196, new GraceNum(0), new GraceNum(0));
                return call1197;
              };
              var call1198 = callmethod(Grace_prelude,"for()do", [1, 1], call1193, block1194);
              return call1198
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
          obj1036.methods["tick"] = func1169;
          func1169.definitionLine = 489;
          func1169.definitionModule = "kitty";
          var func1199 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1199.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 513
              var string1200 = new GraceString("WORLD STOPPING...");
              var call1201 = Grace_print(string1200);
              lineNumber = 515
              lineNumber = 504
              lineNumber = 514
              var bool1202 = new GraceBoolean(false)
              onSelf = true;
              var call1203 = callmethod(this, "isRunning:=", [1], bool1202);
              lineNumber = 515
              onSelf = true;
              var call1204 = callmethod(this, "destroyAction", [0]);
              var call1205 = callmethod(call1204,"apply", [0]);
              lineNumber = 516
              onSelf = true;
              var call1206 = callmethod(this, "entities", [0]);
              lineNumber = 519
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
              block1207.className = 'block<kitty:519>';
              block1207.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 517
                var call1208 = callmethod(var_entity,"kill", [0]);
                return call1208;
              };
              var call1209 = callmethod(Grace_prelude,"for()do", [1, 1], call1206, block1207);
              lineNumber = 519
              var string1210 = new GraceString("mousedown");
              onSelf = true;
              var call1211 = callmethod(this, "canvas", [0]);
              var call1212 = callmethod(call1211,"removeEventListener", [2], string1210, var_mouseDownListener);
              lineNumber = 520
              var string1213 = new GraceString("mouseup");
              onSelf = true;
              var call1214 = callmethod(this, "canvas", [0]);
              var call1215 = callmethod(call1214,"removeEventListener", [2], string1213, var_mouseUpListener);
              lineNumber = 521
              var string1216 = new GraceString("mousemove");
              onSelf = true;
              var call1217 = callmethod(this, "canvas", [0]);
              var call1218 = callmethod(call1217,"removeEventListener", [2], string1216, var_mouseMoveListener);
              lineNumber = 522
              var string1219 = new GraceString("keydown");
              onSelf = true;
              var call1220 = callmethod(this, "document", [0]);
              var call1221 = callmethod(call1220,"removeEventListener", [2], string1219, var_keyDownListener);
              lineNumber = 523
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
          func1199.paramCounts = [
            0,
          ];
          func1199.variableArities = [
            false,
          ];
          obj1036.methods["stop"] = func1199;
          func1199.definitionLine = 512;
          func1199.definitionModule = "kitty";
          var func1225 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 528
              onSelf = true;
              var call1226 = callmethod(this, "mouseDownAction", [0]);
              var call1227 = callmethod(call1226,"apply", [0]);
              return call1227
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1225.paramCounts = [
            0,
          ];
          func1225.variableArities = [
            false,
          ];
          obj1036.methods["mouseDown"] = func1225;
          func1225.definitionLine = 526;
          func1225.definitionModule = "kitty";
          var func1228 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 533
              onSelf = true;
              var call1229 = callmethod(this, "mouseUpAction", [0]);
              var call1230 = callmethod(call1229,"apply", [0]);
              return call1230
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1228.paramCounts = [
            0,
          ];
          func1228.variableArities = [
            false,
          ];
          obj1036.methods["mouseUp"] = func1228;
          func1228.definitionLine = 532;
          func1228.definitionModule = "kitty";
          var func1231 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1231.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 539
              onSelf = true;
              var call1232 = callmethod(this, "mouseEnterAction", [0]);
              var call1233 = callmethod(call1232,"apply", [0]);
              return call1233
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1231.paramCounts = [
            0,
          ];
          func1231.variableArities = [
            false,
          ];
          obj1036.methods["mouseEnter"] = func1231;
          func1231.definitionLine = 538;
          func1231.definitionModule = "kitty";
          var func1234 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1234.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 554
              onSelf = true;
              var call1235 = callmethod(this, "mouseExitAction", [0]);
              var call1236 = callmethod(call1235,"apply", [0]);
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
            0,
          ];
          func1234.variableArities = [
            false,
          ];
          obj1036.methods["mouseExit"] = func1234;
          func1234.definitionLine = 553;
          func1234.definitionModule = "kitty";
          var func1237 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 569
              lineNumber = 554
              lineNumber = 569
              onSelf = true;
              var call1238 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1239 = callmethod(this, "canvasHeight", [0]);
              var call1240 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1241 = callmethod(call1240, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1242 = callmethod(call1241, "Image()width()height", [1, 1, 1], var_url, call1238, call1239);
              onSelf = true;
              var call1243 = callmethod(this, "background:=", [1], call1242);
              return call1243
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1237.paramCounts = [
            1,
          ];
          func1237.variableArities = [
            false,
          ];
          obj1036.methods["setBackground"] = func1237;
          func1237.definitionLine = 568;
          func1237.definitionModule = "kitty";
          var func1244 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 573
              onSelf = true;
              var call1245 = callmethod(this, "entities", [0]);
              var call1246 = callmethod(call1245,"push", [1], var_e);
              return call1246
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1244.paramCounts = [
            1,
          ];
          func1244.variableArities = [
            false,
          ];
          obj1036.methods["addEntity"] = func1244;
          func1244.definitionLine = 572;
          func1244.definitionModule = "kitty";
          var func1247 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1247.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 578
              lineNumber = 577
              onSelf = true;
              var call1248 = callmethod(this, "mctx", [0]);
              return call1248
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1247.paramCounts = [
            0,
          ];
          func1247.variableArities = [
            false,
          ];
          obj1036.methods["getContext"] = func1247;
          func1247.definitionLine = 576;
          func1247.definitionModule = "kitty";
          var func1249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 582
              lineNumber = 581
              onSelf = true;
              var call1250 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1252 = callmethod(this, "canvasWidth", [0]);
              var quotient1254 = callmethod(call1252, "/", [1], call1250);
              return quotient1254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1249.paramCounts = [
            0,
          ];
          func1249.variableArities = [
            false,
          ];
          obj1036.methods["moveWidthMultipler"] = func1249;
          func1249.definitionLine = 580;
          func1249.definitionModule = "kitty";
          var func1255 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 586
              lineNumber = 585
              onSelf = true;
              var call1256 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1258 = callmethod(this, "canvasHeight", [0]);
              var quotient1260 = callmethod(call1258, "/", [1], call1256);
              return quotient1260
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1255.paramCounts = [
            0,
          ];
          func1255.variableArities = [
            false,
          ];
          obj1036.methods["moveHeightMultipler"] = func1255;
          func1255.definitionLine = 584;
          func1255.definitionModule = "kitty";
          var func1261 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 591
              lineNumber = 569
              lineNumber = 590
              onSelf = true;
              var call1262 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1262
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
          obj1036.methods["setUpdateAction"] = func1261;
          func1261.definitionLine = 589;
          func1261.definitionModule = "kitty";
          var func1263 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 595
              lineNumber = 569
              lineNumber = 594
              onSelf = true;
              var call1264 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1264
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1263.paramCounts = [
            1,
          ];
          func1263.variableArities = [
            false,
          ];
          obj1036.methods["setDestroyAction"] = func1263;
          func1263.definitionLine = 593;
          func1263.definitionModule = "kitty";
          var func1265 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 599
              lineNumber = 569
              lineNumber = 598
              onSelf = true;
              var call1266 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1266
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1265.paramCounts = [
            1,
          ];
          func1265.variableArities = [
            false,
          ];
          obj1036.methods["setMouseDownAction"] = func1265;
          func1265.definitionLine = 597;
          func1265.definitionModule = "kitty";
          var func1267 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 603
              lineNumber = 569
              lineNumber = 602
              onSelf = true;
              var call1268 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1267.paramCounts = [
            1,
          ];
          func1267.variableArities = [
            false,
          ];
          obj1036.methods["setMouseUpAction"] = func1267;
          func1267.definitionLine = 601;
          func1267.definitionModule = "kitty";
          var func1269 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 607
              lineNumber = 569
              lineNumber = 606
              onSelf = true;
              var call1270 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1270
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1269.paramCounts = [
            1,
          ];
          func1269.variableArities = [
            false,
          ];
          obj1036.methods["setMouseEnterAction"] = func1269;
          func1269.definitionLine = 605;
          func1269.definitionModule = "kitty";
          var func1271 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 610
              var string1272 = new GraceString("*Drag Not Available For World*");
              var call1273 = Grace_print(string1272);
              return call1273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1271.paramCounts = [
            1,
          ];
          func1271.variableArities = [
            false,
          ];
          obj1036.methods["setMouseDragAction"] = func1271;
          func1271.definitionLine = 609;
          func1271.definitionModule = "kitty";
          var func1274 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 615
              lineNumber = 569
              lineNumber = 614
              onSelf = true;
              var call1275 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1274.paramCounts = [
            1,
          ];
          func1274.variableArities = [
            false,
          ];
          obj1036.methods["setMouseOverAction"] = func1274;
          func1274.definitionLine = 613;
          func1274.definitionModule = "kitty";
          var func1276 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 619
              lineNumber = 569
              lineNumber = 618
              onSelf = true;
              var call1277 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1277
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1276.paramCounts = [
            1,
          ];
          func1276.variableArities = [
            false,
          ];
          obj1036.methods["setMouseExitAction"] = func1276;
          func1276.definitionLine = 617;
          func1276.definitionModule = "kitty";
          sourceObject = obj1036;
          lineNumber = 346
          obj1036.data["width"] = var_width__39__;
          var reader_kitty_width_1278 = function() {
            return this.data["width"];
          }
          obj1036.methods["width"] = reader_kitty_width_1278;
          obj1036.data["width"] = var_width__39__;
          var writer_kitty_width_1278 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1036.methods["width:="] = writer_kitty_width_1278;
          lineNumber = 347;
          moduleName = "kitty";
          lineNumber = 346
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 347
          obj1036.data["height"] = var_height__39__;
          var reader_kitty_height_1279 = function() {
            return this.data["height"];
          }
          obj1036.methods["height"] = reader_kitty_height_1279;
          obj1036.data["height"] = var_height__39__;
          var writer_kitty_height_1279 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1036.methods["height:="] = writer_kitty_height_1279;
          lineNumber = 348;
          moduleName = "kitty";
          lineNumber = 347
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 348
          obj1036.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1280 = function() {
            return this.data["tag"];
          }
          obj1036.methods["tag"] = reader_kitty_tag_1280;
          obj1036.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1280 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1036.methods["tag:="] = writer_kitty_tag_1280;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["background"] = undefined;
          var reader_kitty_background_1281 = function() {
            return this.data["background"];
          }
          obj1036.methods["background"] = reader_kitty_background_1281;
          obj1036.data["background"] = undefined;
          var writer_kitty_background_1281 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1036.methods["background:="] = writer_kitty_background_1281;
          reader_kitty_background_1281.confidential = true;
          writer_kitty_background_1281.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 351
          var string1282 = new GraceString("black");
          obj1036.data["backgroundColour"] = string1282;
          var reader_kitty_backgroundColour_1283 = function() {
            return this.data["backgroundColour"];
          }
          obj1036.methods["backgroundColour"] = reader_kitty_backgroundColour_1283;
          obj1036.data["backgroundColour"] = string1282;
          var writer_kitty_backgroundColour_1283 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1036.methods["backgroundColour:="] = writer_kitty_backgroundColour_1283;
          reader_kitty_backgroundColour_1283.confidential = true;
          writer_kitty_backgroundColour_1283.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1282)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["document"] = undefined;
          var reader_kitty_document_1284 = function() {
            return this.data["document"];
          }
          obj1036.methods["document"] = reader_kitty_document_1284;
          obj1036.data["document"] = undefined;
          var writer_kitty_document_1284 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1036.methods["document:="] = writer_kitty_document_1284;
          reader_kitty_document_1284.confidential = true;
          writer_kitty_document_1284.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1285 = function() {
            return this.data["backingCanvas"];
          }
          obj1036.methods["backingCanvas"] = reader_kitty_backingCanvas_1285;
          obj1036.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1285 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1036.methods["backingCanvas:="] = writer_kitty_backingCanvas_1285;
          reader_kitty_backingCanvas_1285.confidential = true;
          writer_kitty_backingCanvas_1285.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1286 = function() {
            return this.data["backingContext"];
          }
          obj1036.methods["backingContext"] = reader_kitty_backingContext_1286;
          obj1036.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1286 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1036.methods["backingContext:="] = writer_kitty_backingContext_1286;
          reader_kitty_backingContext_1286.confidential = true;
          writer_kitty_backingContext_1286.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvas"] = undefined;
          var reader_kitty_canvas_1287 = function() {
            return this.data["canvas"];
          }
          obj1036.methods["canvas"] = reader_kitty_canvas_1287;
          obj1036.data["canvas"] = undefined;
          var writer_kitty_canvas_1287 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1036.methods["canvas:="] = writer_kitty_canvas_1287;
          reader_kitty_canvas_1287.confidential = true;
          writer_kitty_canvas_1287.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1288 = function() {
            return this.data["canvasWidth"];
          }
          obj1036.methods["canvasWidth"] = reader_kitty_canvasWidth_1288;
          obj1036.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1288 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1036.methods["canvasWidth:="] = writer_kitty_canvasWidth_1288;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1289 = function() {
            return this.data["canvasHeight"];
          }
          obj1036.methods["canvasHeight"] = reader_kitty_canvasHeight_1289;
          obj1036.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1289 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1036.methods["canvasHeight:="] = writer_kitty_canvasHeight_1289;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 362
          var call1290 = callmethod(var_collections,"list", [0]);
          var call1291 = callmethod(call1290,"new", [0]);
          obj1036.data["entities"] = call1291;
          var reader_kitty_entities_1292 = function() {
            return this.data["entities"];
          }
          obj1036.methods["entities"] = reader_kitty_entities_1292;
          obj1036.data["entities"] = call1291;
          var writer_kitty_entities_1292 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1036.methods["entities:="] = writer_kitty_entities_1292;
          reader_kitty_entities_1292.confidential = true;
          writer_kitty_entities_1292.confidential = true;
          lineNumber = 364;
          moduleName = "kitty";
          lineNumber = 362
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1291)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 364
          var bool1293 = new GraceBoolean(false)
          obj1036.data["isInit"] = bool1293;
          var reader_kitty_isInit_1294 = function() {
            return this.data["isInit"];
          }
          obj1036.methods["isInit"] = reader_kitty_isInit_1294;
          obj1036.data["isInit"] = bool1293;
          var writer_kitty_isInit_1294 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1036.methods["isInit:="] = writer_kitty_isInit_1294;
          reader_kitty_isInit_1294.confidential = true;
          writer_kitty_isInit_1294.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1293)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 365
          var bool1295 = new GraceBoolean(false)
          obj1036.data["isRunning"] = bool1295;
          var reader_kitty_isRunning_1296 = function() {
            return this.data["isRunning"];
          }
          obj1036.methods["isRunning"] = reader_kitty_isRunning_1296;
          obj1036.data["isRunning"] = bool1295;
          var writer_kitty_isRunning_1296 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1036.methods["isRunning:="] = writer_kitty_isRunning_1296;
          reader_kitty_isRunning_1296.confidential = true;
          writer_kitty_isRunning_1296.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1295)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["mctx"] = undefined;
          var reader_kitty_mctx_1297 = function() {
            return this.data["mctx"];
          }
          obj1036.methods["mctx"] = reader_kitty_mctx_1297;
          obj1036.data["mctx"] = undefined;
          var writer_kitty_mctx_1297 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1036.methods["mctx:="] = writer_kitty_mctx_1297;
          reader_kitty_mctx_1297.confidential = true;
          writer_kitty_mctx_1297.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["ent"] = undefined;
          var reader_kitty_ent_1298 = function() {
            return this.data["ent"];
          }
          obj1036.methods["ent"] = reader_kitty_ent_1298;
          obj1036.data["ent"] = undefined;
          var writer_kitty_ent_1298 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1036.methods["ent:="] = writer_kitty_ent_1298;
          reader_kitty_ent_1298.confidential = true;
          writer_kitty_ent_1298.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 372
          var block1299 = Grace_allocObject();
          block1299.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1299.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1299.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1299.methods["match"] = GraceBlock_match;
          block1299.methods["prefix?"] = GraceBlock_lift;
          block1299.receiver = this;
          block1299.className = 'block<kitty:372>';
          block1299.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["updateAction"] = block1299;
          var reader_kitty_updateAction_1300 = function() {
            return this.data["updateAction"];
          }
          obj1036.methods["updateAction"] = reader_kitty_updateAction_1300;
          obj1036.data["updateAction"] = block1299;
          var writer_kitty_updateAction_1300 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1036.methods["updateAction:="] = writer_kitty_updateAction_1300;
          reader_kitty_updateAction_1300.confidential = true;
          writer_kitty_updateAction_1300.confidential = true;
          lineNumber = 372;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1299)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 373
          var block1301 = Grace_allocObject();
          block1301.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1301.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1301.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1301.methods["match"] = GraceBlock_match;
          block1301.methods["prefix?"] = GraceBlock_lift;
          block1301.receiver = this;
          block1301.className = 'block<kitty:373>';
          block1301.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["destroyAction"] = block1301;
          var reader_kitty_destroyAction_1302 = function() {
            return this.data["destroyAction"];
          }
          obj1036.methods["destroyAction"] = reader_kitty_destroyAction_1302;
          obj1036.data["destroyAction"] = block1301;
          var writer_kitty_destroyAction_1302 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1036.methods["destroyAction:="] = writer_kitty_destroyAction_1302;
          reader_kitty_destroyAction_1302.confidential = true;
          writer_kitty_destroyAction_1302.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 372
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1301)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 374
          var block1303 = Grace_allocObject();
          block1303.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1303.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1303.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1303.methods["match"] = GraceBlock_match;
          block1303.methods["prefix?"] = GraceBlock_lift;
          block1303.receiver = this;
          block1303.className = 'block<kitty:374>';
          block1303.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseEnterAction"] = block1303;
          var reader_kitty_mouseEnterAction_1304 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1036.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1304;
          obj1036.data["mouseEnterAction"] = block1303;
          var writer_kitty_mouseEnterAction_1304 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1036.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1304;
          reader_kitty_mouseEnterAction_1304.confidential = true;
          writer_kitty_mouseEnterAction_1304.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1303)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 375
          var block1305 = Grace_allocObject();
          block1305.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1305.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1305.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1305.methods["match"] = GraceBlock_match;
          block1305.methods["prefix?"] = GraceBlock_lift;
          block1305.receiver = this;
          block1305.className = 'block<kitty:375>';
          block1305.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseOverAction"] = block1305;
          var reader_kitty_mouseOverAction_1306 = function() {
            return this.data["mouseOverAction"];
          }
          obj1036.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1306;
          obj1036.data["mouseOverAction"] = block1305;
          var writer_kitty_mouseOverAction_1306 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1036.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1306;
          reader_kitty_mouseOverAction_1306.confidential = true;
          writer_kitty_mouseOverAction_1306.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1305)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 376
          var block1307 = Grace_allocObject();
          block1307.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1307.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1307.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1307.methods["match"] = GraceBlock_match;
          block1307.methods["prefix?"] = GraceBlock_lift;
          block1307.receiver = this;
          block1307.className = 'block<kitty:376>';
          block1307.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseExitAction"] = block1307;
          var reader_kitty_mouseExitAction_1308 = function() {
            return this.data["mouseExitAction"];
          }
          obj1036.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1308;
          obj1036.data["mouseExitAction"] = block1307;
          var writer_kitty_mouseExitAction_1308 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1036.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1308;
          reader_kitty_mouseExitAction_1308.confidential = true;
          writer_kitty_mouseExitAction_1308.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1307)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 377
          var block1309 = Grace_allocObject();
          block1309.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1309.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1309.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1309.methods["match"] = GraceBlock_match;
          block1309.methods["prefix?"] = GraceBlock_lift;
          block1309.receiver = this;
          block1309.className = 'block<kitty:377>';
          block1309.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseDownAction"] = block1309;
          var reader_kitty_mouseDownAction_1310 = function() {
            return this.data["mouseDownAction"];
          }
          obj1036.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1310;
          obj1036.data["mouseDownAction"] = block1309;
          var writer_kitty_mouseDownAction_1310 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1036.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1310;
          reader_kitty_mouseDownAction_1310.confidential = true;
          writer_kitty_mouseDownAction_1310.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1309)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 378
          var block1311 = Grace_allocObject();
          block1311.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1311.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1311.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1311.methods["match"] = GraceBlock_match;
          block1311.methods["prefix?"] = GraceBlock_lift;
          block1311.receiver = this;
          block1311.className = 'block<kitty:378>';
          block1311.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseUpAction"] = block1311;
          var reader_kitty_mouseUpAction_1312 = function() {
            return this.data["mouseUpAction"];
          }
          obj1036.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1312;
          obj1036.data["mouseUpAction"] = block1311;
          var writer_kitty_mouseUpAction_1312 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1036.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1312;
          reader_kitty_mouseUpAction_1312.confidential = true;
          writer_kitty_mouseUpAction_1312.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1311)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 378
          var bool1313 = new GraceBoolean(false)
          obj1036.data["mouseOver"] = bool1313;
          var reader_kitty_mouseOver_1314 = function() {
            return this.data["mouseOver"];
          }
          obj1036.methods["mouseOver"] = reader_kitty_mouseOver_1314;
          obj1036.data["mouseOver"] = bool1313;
          var writer_kitty_mouseOver_1314 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1036.methods["mouseOver:="] = writer_kitty_mouseOver_1314;
          reader_kitty_mouseOver_1314.confidential = true;
          writer_kitty_mouseOver_1314.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1313)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 380
          onSelf = true;
          var call1315 = callmethod(this, "init", [0]);
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          sourceObject = obj1036;
          superDepth = origSuperDepth;
        }
        obj_init_1036.apply(obj1036, []);
        return obj1036
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1035.paramCounts = [
      3,
    ];
    func1035.variableArities = [
      false,
    ];
    obj1033.methods["new"] = func1035;
    func1035.definitionLine = 343;
    func1035.definitionModule = "kitty";
    var func1316 = function(argcv) {
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
        var obj1317 = Grace_allocObject();
        obj1317.definitionModule = "kitty";
        obj1317.definitionLine = 343;
        var inho1317 = inheritingObject;
        while (inho1317.superobj) inho1317 = inho1317.superobj;
        inho1317.superobj = obj1317;
        obj1317.data = inheritingObject.data;
        obj1317.outer = this;
        var reader_kitty_outer_1318 = function() {
          return this.outer;
        }
        obj1317.methods["outer"] = reader_kitty_outer_1318;
        function obj_init_1317() {
          var origSuperDepth = superDepth;
          superDepth = obj1317;
          obj1317.annotations = [];
          var func1319 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1319.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 391
              var if1320 = var_done;
              lineNumber = 387
              onSelf = true;
              var call1321 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1321)) {
                lineNumber = 389
                lineNumber = 388
                var bool1322 = new GraceBoolean(false)
                return bool1322
              }
              lineNumber = 392
              lineNumber = 362
              lineNumber = 391
              var call1323 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1324 = callmethod(this, "document:=", [1], call1323);
              lineNumber = 392
              lineNumber = 391
              lineNumber = 392
              var string1325 = new GraceString("standard-canvas");
              onSelf = true;
              var call1326 = callmethod(this, "document", [0]);
              var call1327 = callmethod(call1326,"getElementById", [1], string1325);
              onSelf = true;
              var call1328 = callmethod(this, "canvas:=", [1], call1327);
              lineNumber = 394
              lineNumber = 391
              lineNumber = 393
              onSelf = true;
              var call1329 = callmethod(this, "canvas", [0]);
              var call1330 = callmethod(call1329,"width", [0]);
              onSelf = true;
              var call1331 = callmethod(this, "canvasWidth:=", [1], call1330);
              lineNumber = 397
              lineNumber = 393
              lineNumber = 394
              onSelf = true;
              var call1332 = callmethod(this, "canvas", [0]);
              var call1333 = callmethod(call1332,"height", [0]);
              onSelf = true;
              var call1334 = callmethod(this, "canvasHeight:=", [1], call1333);
              lineNumber = 409
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
              block1335.className = 'block<kitty:409>';
              block1335.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 400
                onSelf = true;
                var call1336 = callmethod(this, "entities", [0]);
                lineNumber = 407
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
                block1337.className = 'block<kitty:407>';
                block1337.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 404
                  var if1338 = var_done;
                  lineNumber = 401
                  var call1339 = callmethod(var_entity,"mouseDown", [0]);
                  if (Grace_isTrue(call1339)) {
                    lineNumber = 403
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1338;
                };
                var call1340 = callmethod(Grace_prelude,"for()do", [1, 1], call1336, block1337);
                lineNumber = 407
                onSelf = true;
                var call1341 = callmethod(this, "mouseDown", [0]);
                return call1341;
              };
              var_mouseDownListener = block1335;
              lineNumber = 409
              var string1342 = new GraceString("mousedown");
              var bool1343 = new GraceBoolean(false)
              onSelf = true;
              var call1344 = callmethod(this, "canvas", [0]);
              var call1345 = callmethod(call1344,"addEventListener", [3], string1342, var_mouseDownListener, bool1343);
              lineNumber = 423
              var block1346 = Grace_allocObject();
              block1346.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1346.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1346.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1346.methods["match"] = GraceBlock_match;
              block1346.methods["prefix?"] = GraceBlock_lift;
              block1346.receiver = this;
              block1346.className = 'block<kitty:423>';
              block1346.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 414
                onSelf = true;
                var call1347 = callmethod(this, "entities", [0]);
                lineNumber = 421
                var block1348 = Grace_allocObject();
                block1348.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1348.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1348.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1348.methods["match"] = GraceBlock_match;
                block1348.methods["prefix?"] = GraceBlock_lift;
                block1348.receiver = this;
                block1348.className = 'block<kitty:421>';
                block1348.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 418
                  var if1349 = var_done;
                  lineNumber = 415
                  var call1350 = callmethod(var_entity,"mouseUp", [0]);
                  if (Grace_isTrue(call1350)) {
                    lineNumber = 417
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1349;
                };
                var call1351 = callmethod(Grace_prelude,"for()do", [1, 1], call1347, block1348);
                lineNumber = 421
                onSelf = true;
                var call1352 = callmethod(this, "mouseUp", [0]);
                return call1352;
              };
              var_mouseUpListener = block1346;
              lineNumber = 423
              var string1353 = new GraceString("mouseup");
              onSelf = true;
              var call1354 = callmethod(this, "canvas", [0]);
              var call1355 = callmethod(call1354,"addEventListener", [2], string1353, var_mouseUpListener);
              lineNumber = 444
              var block1356 = Grace_allocObject();
              block1356.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1356.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1356.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1356.methods["match"] = GraceBlock_match;
              block1356.methods["prefix?"] = GraceBlock_lift;
              block1356.receiver = this;
              block1356.className = 'block<kitty:444>';
              block1356.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 427
                lineNumber = 426
                onSelf = true;
                var call1357 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1359 = callmethod(this, "canvas", [0]);
                var call1360 = callmethod(call1359,"offsetWidth", [0]);
                onSelf = true;
                var call1362 = callmethod(this, "canvas", [0]);
                var call1363 = callmethod(call1362,"offsetLeft", [0]);
                var call1365 = callmethod(var_ev,"clientX", [0]);
                var diff1367 = callmethod(call1365, "-", [1], call1363);
                var quotient1369 = callmethod(diff1367, "/", [1], call1360);
                var prod1371 = callmethod(quotient1369, "*", [1], call1357);
                var var_x = prod1371;
                lineNumber = 427;
                moduleName = "kitty";
                lineNumber = 426
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 428
                lineNumber = 427
                onSelf = true;
                var call1372 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1374 = callmethod(this, "canvas", [0]);
                var call1375 = callmethod(call1374,"offsetHeight", [0]);
                onSelf = true;
                var call1377 = callmethod(this, "canvas", [0]);
                var call1378 = callmethod(call1377,"offsetTop", [0]);
                var call1380 = callmethod(var_ev,"clientY", [0]);
                var diff1382 = callmethod(call1380, "-", [1], call1378);
                var quotient1384 = callmethod(diff1382, "/", [1], call1375);
                var prod1386 = callmethod(quotient1384, "*", [1], call1372);
                var var_y = prod1386;
                lineNumber = 428;
                moduleName = "kitty";
                lineNumber = 427
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 428
                lineNumber = 427
                lineNumber = 428
                var call1387 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1388 = callmethod(var_mouse,"position:=", [1], call1387);
                lineNumber = 431
                onSelf = true;
                var call1389 = callmethod(this, "entities", [0]);
                lineNumber = 443
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
                block1390.className = 'block<kitty:443>';
                block1390.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 436
                  var if1391 = var_done;
                  lineNumber = 432
                  var call1392 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1392)) {
                    lineNumber = 433
                    onSelf = true;
                    var call1393 = callmethod(this, "mouseExit", [0]);
                    lineNumber = 435
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 440
                  var if1394 = var_done;
                  lineNumber = 436
                  var call1395 = callmethod(var_entity,"mouseExit", [0]);
                  if (Grace_isTrue(call1395)) {
                    lineNumber = 437
                    onSelf = true;
                    var call1396 = callmethod(this, "mouseEnter", [0]);
                    lineNumber = 439
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1394;
                };
                var call1397 = callmethod(Grace_prelude,"for()do", [1, 1], call1389, block1390);
                return call1397;
              };
              var_mouseMoveListener = block1356;
              lineNumber = 444
              var string1398 = new GraceString("mousemove");
              onSelf = true;
              var call1399 = callmethod(this, "canvas", [0]);
              var call1400 = callmethod(call1399,"addEventListener", [2], string1398, var_mouseMoveListener);
              lineNumber = 454
              var block1401 = Grace_allocObject();
              block1401.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1401.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1401.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1401.methods["match"] = GraceBlock_match;
              block1401.methods["prefix?"] = GraceBlock_lift;
              block1401.receiver = this;
              block1401.className = 'block<kitty:454>';
              block1401.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 452
                var if1402 = var_done;
                lineNumber = 449
                var call1404 = callmethod(var_ev,"keyCode", [0]);
                var opresult1406 = callmethod(call1404, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1406)) {
                  lineNumber = 450
                  onSelf = true;
                  var call1407 = callmethod(this, "stop", [0]);
                  if1402 = call1407;
                }
                lineNumber = 453
                lineNumber = 452
                var call1408 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1408;
                return call1408;
              };
              var_keyDownListener = block1401;
              lineNumber = 454
              var string1409 = new GraceString("keydown");
              onSelf = true;
              var call1410 = callmethod(this, "document", [0]);
              var call1411 = callmethod(call1410,"addEventListener", [2], string1409, var_keyDownListener);
              lineNumber = 460
              var block1412 = Grace_allocObject();
              block1412.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1412.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1412.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1412.methods["match"] = GraceBlock_match;
              block1412.methods["prefix?"] = GraceBlock_lift;
              block1412.receiver = this;
              block1412.className = 'block<kitty:460>';
              block1412.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 459
                lineNumber = 458
                var call1413 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1413;
                return call1413;
              };
              var_keyUpListener = block1412;
              lineNumber = 460
              var string1414 = new GraceString("keyup");
              onSelf = true;
              var call1415 = callmethod(this, "document", [0]);
              var call1416 = callmethod(call1415,"addEventListener", [2], string1414, var_keyUpListener);
              lineNumber = 462
              lineNumber = 452
              lineNumber = 462
              var string1417 = new GraceString("canvas");
              var call1418 = callmethod(var_dom,"document", [0]);
              var call1419 = callmethod(call1418,"createElement", [1], string1417);
              onSelf = true;
              var call1420 = callmethod(this, "backingCanvas:=", [1], call1419);
              lineNumber = 464
              lineNumber = 462
              lineNumber = 463
              onSelf = true;
              var call1421 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1422 = callmethod(this, "backingCanvas", [0]);
              var call1423 = callmethod(call1422,"height:=", [1], call1421);
              lineNumber = 465
              lineNumber = 462
              lineNumber = 464
              onSelf = true;
              var call1424 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1425 = callmethod(this, "backingCanvas", [0]);
              var call1426 = callmethod(call1425,"width:=", [1], call1424);
              lineNumber = 465
              lineNumber = 462
              lineNumber = 465
              var string1427 = new GraceString("2d");
              onSelf = true;
              var call1428 = callmethod(this, "backingCanvas", [0]);
              var call1429 = callmethod(call1428,"getContext", [1], string1427);
              onSelf = true;
              var call1430 = callmethod(this, "backingContext:=", [1], call1429);
              lineNumber = 466
              lineNumber = 462
              lineNumber = 466
              var string1431 = new GraceString("2d");
              onSelf = true;
              var call1432 = callmethod(this, "canvas", [0]);
              var call1433 = callmethod(call1432,"getContext", [1], string1431);
              onSelf = true;
              var call1434 = callmethod(this, "mctx:=", [1], call1433);
              lineNumber = 469
              var string1435 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1436 = callmethod(this, "setBackground", [1], string1435);
              lineNumber = 472
              var call1437 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1438 = callmethod(call1437, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1439 = callmethod(call1438, "setWorld", [1], this);
              lineNumber = 475
              lineNumber = 474
              var_kitten = this;
              lineNumber = 476
              lineNumber = 472
              lineNumber = 475
              var bool1440 = new GraceBoolean(true)
              onSelf = true;
              var call1441 = callmethod(this, "isInit:=", [1], bool1440);
              return call1441
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1319.paramCounts = [
            0,
          ];
          func1319.variableArities = [
            false,
          ];
          obj1317.methods["init"] = func1319;
          func1319.definitionLine = 383;
          func1319.definitionModule = "kitty";
          var func1442 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1442.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 482
              lineNumber = 472
              lineNumber = 481
              var bool1443 = new GraceBoolean(true)
              onSelf = true;
              var call1444 = callmethod(this, "isRunning:=", [1], bool1443);
              lineNumber = 482
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
              block1445.className = 'block<kitty:482>';
              block1445.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1446 = callmethod(this, "isRunning", [0]);
                return call1446;
              };
              lineNumber = 486
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
              block1447.className = 'block<kitty:486>';
              block1447.real = function(
              ) {
                sourceObject = this;
                lineNumber = 483
                onSelf = true;
                var call1448 = callmethod(this, "tick", [0]);
                return call1448;
              };
              lineNumber = 482
              var call1449 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1445, new GraceNum(10), block1447);
              return call1449
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1442.paramCounts = [
            0,
          ];
          func1442.variableArities = [
            false,
          ];
          obj1317.methods["start"] = func1442;
          func1442.definitionLine = 479;
          func1442.definitionModule = "kitty";
          var func1450 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1450.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 495
              lineNumber = 472
              lineNumber = 494
              onSelf = true;
              var call1451 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1452 = callmethod(this, "mctx", [0]);
              var call1453 = callmethod(call1452,"fillStyle:=", [1], call1451);
              lineNumber = 495
              onSelf = true;
              var call1454 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1455 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1456 = callmethod(this, "mctx", [0]);
              var call1457 = callmethod(call1456,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1454, call1455);
              lineNumber = 496
              onSelf = true;
              var call1458 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1459 = callmethod(this, "mctx", [0]);
              var call1460 = callmethod(call1459,"drawImage", [3], call1458, new GraceNum(0), new GraceNum(0));
              lineNumber = 497
              onSelf = true;
              var call1461 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1463 = callmethod(this, "canvasWidth", [0]);
              var quotient1465 = callmethod(call1463, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1467 = callmethod(this, "canvasHeight", [0]);
              var quotient1469 = callmethod(call1467, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1470 = callmethod(this, "background", [0]);
              var call1471 = callmethod(call1470,"draw", [4], call1461, quotient1465, quotient1469, new GraceNum(0));
              lineNumber = 500
              onSelf = true;
              var call1472 = callmethod(this, "updateAction", [0]);
              var call1473 = callmethod(call1472,"apply", [0]);
              lineNumber = 503
              onSelf = true;
              var call1474 = callmethod(this, "entities", [0]);
              lineNumber = 510
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
              block1475.className = 'block<kitty:510>';
              block1475.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 504
                var call1476 = callmethod(var_entity,"tick", [0]);
                lineNumber = 506
                onSelf = true;
                var call1477 = callmethod(this, "mctx", [0]);
                var call1478 = callmethod(var_entity,"draw", [3], call1477, new GraceNum(0), new GraceNum(0));
                return call1478;
              };
              var call1479 = callmethod(Grace_prelude,"for()do", [1, 1], call1474, block1475);
              return call1479
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1450.paramCounts = [
            0,
          ];
          func1450.variableArities = [
            false,
          ];
          obj1317.methods["tick"] = func1450;
          func1450.definitionLine = 489;
          func1450.definitionModule = "kitty";
          var func1480 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1480.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 513
              var string1481 = new GraceString("WORLD STOPPING...");
              var call1482 = Grace_print(string1481);
              lineNumber = 515
              lineNumber = 504
              lineNumber = 514
              var bool1483 = new GraceBoolean(false)
              onSelf = true;
              var call1484 = callmethod(this, "isRunning:=", [1], bool1483);
              lineNumber = 515
              onSelf = true;
              var call1485 = callmethod(this, "destroyAction", [0]);
              var call1486 = callmethod(call1485,"apply", [0]);
              lineNumber = 516
              onSelf = true;
              var call1487 = callmethod(this, "entities", [0]);
              lineNumber = 519
              var block1488 = Grace_allocObject();
              block1488.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1488.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1488.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1488.methods["match"] = GraceBlock_match;
              block1488.methods["prefix?"] = GraceBlock_lift;
              block1488.receiver = this;
              block1488.className = 'block<kitty:519>';
              block1488.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 517
                var call1489 = callmethod(var_entity,"kill", [0]);
                return call1489;
              };
              var call1490 = callmethod(Grace_prelude,"for()do", [1, 1], call1487, block1488);
              lineNumber = 519
              var string1491 = new GraceString("mousedown");
              onSelf = true;
              var call1492 = callmethod(this, "canvas", [0]);
              var call1493 = callmethod(call1492,"removeEventListener", [2], string1491, var_mouseDownListener);
              lineNumber = 520
              var string1494 = new GraceString("mouseup");
              onSelf = true;
              var call1495 = callmethod(this, "canvas", [0]);
              var call1496 = callmethod(call1495,"removeEventListener", [2], string1494, var_mouseUpListener);
              lineNumber = 521
              var string1497 = new GraceString("mousemove");
              onSelf = true;
              var call1498 = callmethod(this, "canvas", [0]);
              var call1499 = callmethod(call1498,"removeEventListener", [2], string1497, var_mouseMoveListener);
              lineNumber = 522
              var string1500 = new GraceString("keydown");
              onSelf = true;
              var call1501 = callmethod(this, "document", [0]);
              var call1502 = callmethod(call1501,"removeEventListener", [2], string1500, var_keyDownListener);
              lineNumber = 523
              var string1503 = new GraceString("keyup");
              onSelf = true;
              var call1504 = callmethod(this, "document", [0]);
              var call1505 = callmethod(call1504,"removeEventListener", [2], string1503, var_keyUpListener);
              return call1505
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
          obj1317.methods["stop"] = func1480;
          func1480.definitionLine = 512;
          func1480.definitionModule = "kitty";
          var func1506 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1506.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 528
              onSelf = true;
              var call1507 = callmethod(this, "mouseDownAction", [0]);
              var call1508 = callmethod(call1507,"apply", [0]);
              return call1508
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1506.paramCounts = [
            0,
          ];
          func1506.variableArities = [
            false,
          ];
          obj1317.methods["mouseDown"] = func1506;
          func1506.definitionLine = 526;
          func1506.definitionModule = "kitty";
          var func1509 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1509.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 533
              onSelf = true;
              var call1510 = callmethod(this, "mouseUpAction", [0]);
              var call1511 = callmethod(call1510,"apply", [0]);
              return call1511
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1509.paramCounts = [
            0,
          ];
          func1509.variableArities = [
            false,
          ];
          obj1317.methods["mouseUp"] = func1509;
          func1509.definitionLine = 532;
          func1509.definitionModule = "kitty";
          var func1512 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1512.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 539
              onSelf = true;
              var call1513 = callmethod(this, "mouseEnterAction", [0]);
              var call1514 = callmethod(call1513,"apply", [0]);
              return call1514
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1512.paramCounts = [
            0,
          ];
          func1512.variableArities = [
            false,
          ];
          obj1317.methods["mouseEnter"] = func1512;
          func1512.definitionLine = 538;
          func1512.definitionModule = "kitty";
          var func1515 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1515.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 554
              onSelf = true;
              var call1516 = callmethod(this, "mouseExitAction", [0]);
              var call1517 = callmethod(call1516,"apply", [0]);
              return call1517
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1515.paramCounts = [
            0,
          ];
          func1515.variableArities = [
            false,
          ];
          obj1317.methods["mouseExit"] = func1515;
          func1515.definitionLine = 553;
          func1515.definitionModule = "kitty";
          var func1518 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1518.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 569
              lineNumber = 554
              lineNumber = 569
              onSelf = true;
              var call1519 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1520 = callmethod(this, "canvasHeight", [0]);
              var call1521 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1522 = callmethod(call1521, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1523 = callmethod(call1522, "Image()width()height", [1, 1, 1], var_url, call1519, call1520);
              onSelf = true;
              var call1524 = callmethod(this, "background:=", [1], call1523);
              return call1524
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1518.paramCounts = [
            1,
          ];
          func1518.variableArities = [
            false,
          ];
          obj1317.methods["setBackground"] = func1518;
          func1518.definitionLine = 568;
          func1518.definitionModule = "kitty";
          var func1525 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1525.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 573
              onSelf = true;
              var call1526 = callmethod(this, "entities", [0]);
              var call1527 = callmethod(call1526,"push", [1], var_e);
              return call1527
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1525.paramCounts = [
            1,
          ];
          func1525.variableArities = [
            false,
          ];
          obj1317.methods["addEntity"] = func1525;
          func1525.definitionLine = 572;
          func1525.definitionModule = "kitty";
          var func1528 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1528.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 578
              lineNumber = 577
              onSelf = true;
              var call1529 = callmethod(this, "mctx", [0]);
              return call1529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1528.paramCounts = [
            0,
          ];
          func1528.variableArities = [
            false,
          ];
          obj1317.methods["getContext"] = func1528;
          func1528.definitionLine = 576;
          func1528.definitionModule = "kitty";
          var func1530 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1530.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 582
              lineNumber = 581
              onSelf = true;
              var call1531 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1533 = callmethod(this, "canvasWidth", [0]);
              var quotient1535 = callmethod(call1533, "/", [1], call1531);
              return quotient1535
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1530.paramCounts = [
            0,
          ];
          func1530.variableArities = [
            false,
          ];
          obj1317.methods["moveWidthMultipler"] = func1530;
          func1530.definitionLine = 580;
          func1530.definitionModule = "kitty";
          var func1536 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1536.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 586
              lineNumber = 585
              onSelf = true;
              var call1537 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1539 = callmethod(this, "canvasHeight", [0]);
              var quotient1541 = callmethod(call1539, "/", [1], call1537);
              return quotient1541
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1536.paramCounts = [
            0,
          ];
          func1536.variableArities = [
            false,
          ];
          obj1317.methods["moveHeightMultipler"] = func1536;
          func1536.definitionLine = 584;
          func1536.definitionModule = "kitty";
          var func1542 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1542.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 591
              lineNumber = 569
              lineNumber = 590
              onSelf = true;
              var call1543 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1543
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1542.paramCounts = [
            1,
          ];
          func1542.variableArities = [
            false,
          ];
          obj1317.methods["setUpdateAction"] = func1542;
          func1542.definitionLine = 589;
          func1542.definitionModule = "kitty";
          var func1544 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1544.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 595
              lineNumber = 569
              lineNumber = 594
              onSelf = true;
              var call1545 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1544.paramCounts = [
            1,
          ];
          func1544.variableArities = [
            false,
          ];
          obj1317.methods["setDestroyAction"] = func1544;
          func1544.definitionLine = 593;
          func1544.definitionModule = "kitty";
          var func1546 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 599
              lineNumber = 569
              lineNumber = 598
              onSelf = true;
              var call1547 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1547
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1546.paramCounts = [
            1,
          ];
          func1546.variableArities = [
            false,
          ];
          obj1317.methods["setMouseDownAction"] = func1546;
          func1546.definitionLine = 597;
          func1546.definitionModule = "kitty";
          var func1548 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1548.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 603
              lineNumber = 569
              lineNumber = 602
              onSelf = true;
              var call1549 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1549
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1548.paramCounts = [
            1,
          ];
          func1548.variableArities = [
            false,
          ];
          obj1317.methods["setMouseUpAction"] = func1548;
          func1548.definitionLine = 601;
          func1548.definitionModule = "kitty";
          var func1550 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1550.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 607
              lineNumber = 569
              lineNumber = 606
              onSelf = true;
              var call1551 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1551
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1550.paramCounts = [
            1,
          ];
          func1550.variableArities = [
            false,
          ];
          obj1317.methods["setMouseEnterAction"] = func1550;
          func1550.definitionLine = 605;
          func1550.definitionModule = "kitty";
          var func1552 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1552.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 610
              var string1553 = new GraceString("*Drag Not Available For World*");
              var call1554 = Grace_print(string1553);
              return call1554
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1552.paramCounts = [
            1,
          ];
          func1552.variableArities = [
            false,
          ];
          obj1317.methods["setMouseDragAction"] = func1552;
          func1552.definitionLine = 609;
          func1552.definitionModule = "kitty";
          var func1555 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 615
              lineNumber = 569
              lineNumber = 614
              onSelf = true;
              var call1556 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1556
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1555.paramCounts = [
            1,
          ];
          func1555.variableArities = [
            false,
          ];
          obj1317.methods["setMouseOverAction"] = func1555;
          func1555.definitionLine = 613;
          func1555.definitionModule = "kitty";
          var func1557 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1557.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 619
              lineNumber = 569
              lineNumber = 618
              onSelf = true;
              var call1558 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1558
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1557.paramCounts = [
            1,
          ];
          func1557.variableArities = [
            false,
          ];
          obj1317.methods["setMouseExitAction"] = func1557;
          func1557.definitionLine = 617;
          func1557.definitionModule = "kitty";
          sourceObject = obj1317;
          lineNumber = 346
          obj1317.data["width"] = var_width__39__;
          var reader_kitty_width_1559 = function() {
            return this.data["width"];
          }
          obj1317.methods["width"] = reader_kitty_width_1559;
          obj1317.data["width"] = var_width__39__;
          var writer_kitty_width_1559 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1317.methods["width:="] = writer_kitty_width_1559;
          lineNumber = 347;
          moduleName = "kitty";
          lineNumber = 346
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 347
          obj1317.data["height"] = var_height__39__;
          var reader_kitty_height_1560 = function() {
            return this.data["height"];
          }
          obj1317.methods["height"] = reader_kitty_height_1560;
          obj1317.data["height"] = var_height__39__;
          var writer_kitty_height_1560 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1317.methods["height:="] = writer_kitty_height_1560;
          lineNumber = 348;
          moduleName = "kitty";
          lineNumber = 347
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 348
          obj1317.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1561 = function() {
            return this.data["tag"];
          }
          obj1317.methods["tag"] = reader_kitty_tag_1561;
          obj1317.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1561 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1317.methods["tag:="] = writer_kitty_tag_1561;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["background"] = undefined;
          var reader_kitty_background_1562 = function() {
            return this.data["background"];
          }
          obj1317.methods["background"] = reader_kitty_background_1562;
          obj1317.data["background"] = undefined;
          var writer_kitty_background_1562 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1317.methods["background:="] = writer_kitty_background_1562;
          reader_kitty_background_1562.confidential = true;
          writer_kitty_background_1562.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 351
          var string1563 = new GraceString("black");
          obj1317.data["backgroundColour"] = string1563;
          var reader_kitty_backgroundColour_1564 = function() {
            return this.data["backgroundColour"];
          }
          obj1317.methods["backgroundColour"] = reader_kitty_backgroundColour_1564;
          obj1317.data["backgroundColour"] = string1563;
          var writer_kitty_backgroundColour_1564 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1317.methods["backgroundColour:="] = writer_kitty_backgroundColour_1564;
          reader_kitty_backgroundColour_1564.confidential = true;
          writer_kitty_backgroundColour_1564.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1563)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["document"] = undefined;
          var reader_kitty_document_1565 = function() {
            return this.data["document"];
          }
          obj1317.methods["document"] = reader_kitty_document_1565;
          obj1317.data["document"] = undefined;
          var writer_kitty_document_1565 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1317.methods["document:="] = writer_kitty_document_1565;
          reader_kitty_document_1565.confidential = true;
          writer_kitty_document_1565.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1566 = function() {
            return this.data["backingCanvas"];
          }
          obj1317.methods["backingCanvas"] = reader_kitty_backingCanvas_1566;
          obj1317.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1566 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1317.methods["backingCanvas:="] = writer_kitty_backingCanvas_1566;
          reader_kitty_backingCanvas_1566.confidential = true;
          writer_kitty_backingCanvas_1566.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1567 = function() {
            return this.data["backingContext"];
          }
          obj1317.methods["backingContext"] = reader_kitty_backingContext_1567;
          obj1317.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1567 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1317.methods["backingContext:="] = writer_kitty_backingContext_1567;
          reader_kitty_backingContext_1567.confidential = true;
          writer_kitty_backingContext_1567.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["canvas"] = undefined;
          var reader_kitty_canvas_1568 = function() {
            return this.data["canvas"];
          }
          obj1317.methods["canvas"] = reader_kitty_canvas_1568;
          obj1317.data["canvas"] = undefined;
          var writer_kitty_canvas_1568 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1317.methods["canvas:="] = writer_kitty_canvas_1568;
          reader_kitty_canvas_1568.confidential = true;
          writer_kitty_canvas_1568.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1569 = function() {
            return this.data["canvasWidth"];
          }
          obj1317.methods["canvasWidth"] = reader_kitty_canvasWidth_1569;
          obj1317.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1569 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1317.methods["canvasWidth:="] = writer_kitty_canvasWidth_1569;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1570 = function() {
            return this.data["canvasHeight"];
          }
          obj1317.methods["canvasHeight"] = reader_kitty_canvasHeight_1570;
          obj1317.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1570 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1317.methods["canvasHeight:="] = writer_kitty_canvasHeight_1570;
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 362
          var call1571 = callmethod(var_collections,"list", [0]);
          var call1572 = callmethod(call1571,"new", [0]);
          obj1317.data["entities"] = call1572;
          var reader_kitty_entities_1573 = function() {
            return this.data["entities"];
          }
          obj1317.methods["entities"] = reader_kitty_entities_1573;
          obj1317.data["entities"] = call1572;
          var writer_kitty_entities_1573 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1317.methods["entities:="] = writer_kitty_entities_1573;
          reader_kitty_entities_1573.confidential = true;
          writer_kitty_entities_1573.confidential = true;
          lineNumber = 364;
          moduleName = "kitty";
          lineNumber = 362
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1572)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 364
          var bool1574 = new GraceBoolean(false)
          obj1317.data["isInit"] = bool1574;
          var reader_kitty_isInit_1575 = function() {
            return this.data["isInit"];
          }
          obj1317.methods["isInit"] = reader_kitty_isInit_1575;
          obj1317.data["isInit"] = bool1574;
          var writer_kitty_isInit_1575 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1317.methods["isInit:="] = writer_kitty_isInit_1575;
          reader_kitty_isInit_1575.confidential = true;
          writer_kitty_isInit_1575.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1574)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 365
          var bool1576 = new GraceBoolean(false)
          obj1317.data["isRunning"] = bool1576;
          var reader_kitty_isRunning_1577 = function() {
            return this.data["isRunning"];
          }
          obj1317.methods["isRunning"] = reader_kitty_isRunning_1577;
          obj1317.data["isRunning"] = bool1576;
          var writer_kitty_isRunning_1577 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1317.methods["isRunning:="] = writer_kitty_isRunning_1577;
          reader_kitty_isRunning_1577.confidential = true;
          writer_kitty_isRunning_1577.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1576)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["mctx"] = undefined;
          var reader_kitty_mctx_1578 = function() {
            return this.data["mctx"];
          }
          obj1317.methods["mctx"] = reader_kitty_mctx_1578;
          obj1317.data["mctx"] = undefined;
          var writer_kitty_mctx_1578 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1317.methods["mctx:="] = writer_kitty_mctx_1578;
          reader_kitty_mctx_1578.confidential = true;
          writer_kitty_mctx_1578.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          obj1317.data["ent"] = undefined;
          var reader_kitty_ent_1579 = function() {
            return this.data["ent"];
          }
          obj1317.methods["ent"] = reader_kitty_ent_1579;
          obj1317.data["ent"] = undefined;
          var writer_kitty_ent_1579 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1317.methods["ent:="] = writer_kitty_ent_1579;
          reader_kitty_ent_1579.confidential = true;
          writer_kitty_ent_1579.confidential = true;
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 372
          var block1580 = Grace_allocObject();
          block1580.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1580.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1580.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1580.methods["match"] = GraceBlock_match;
          block1580.methods["prefix?"] = GraceBlock_lift;
          block1580.receiver = this;
          block1580.className = 'block<kitty:372>';
          block1580.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["updateAction"] = block1580;
          var reader_kitty_updateAction_1581 = function() {
            return this.data["updateAction"];
          }
          obj1317.methods["updateAction"] = reader_kitty_updateAction_1581;
          obj1317.data["updateAction"] = block1580;
          var writer_kitty_updateAction_1581 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1317.methods["updateAction:="] = writer_kitty_updateAction_1581;
          reader_kitty_updateAction_1581.confidential = true;
          writer_kitty_updateAction_1581.confidential = true;
          lineNumber = 372;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1580)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 373
          var block1582 = Grace_allocObject();
          block1582.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1582.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1582.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1582.methods["match"] = GraceBlock_match;
          block1582.methods["prefix?"] = GraceBlock_lift;
          block1582.receiver = this;
          block1582.className = 'block<kitty:373>';
          block1582.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["destroyAction"] = block1582;
          var reader_kitty_destroyAction_1583 = function() {
            return this.data["destroyAction"];
          }
          obj1317.methods["destroyAction"] = reader_kitty_destroyAction_1583;
          obj1317.data["destroyAction"] = block1582;
          var writer_kitty_destroyAction_1583 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1317.methods["destroyAction:="] = writer_kitty_destroyAction_1583;
          reader_kitty_destroyAction_1583.confidential = true;
          writer_kitty_destroyAction_1583.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 372
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1582)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 374
          var block1584 = Grace_allocObject();
          block1584.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1584.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1584.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1584.methods["match"] = GraceBlock_match;
          block1584.methods["prefix?"] = GraceBlock_lift;
          block1584.receiver = this;
          block1584.className = 'block<kitty:374>';
          block1584.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["mouseEnterAction"] = block1584;
          var reader_kitty_mouseEnterAction_1585 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1317.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1585;
          obj1317.data["mouseEnterAction"] = block1584;
          var writer_kitty_mouseEnterAction_1585 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1317.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1585;
          reader_kitty_mouseEnterAction_1585.confidential = true;
          writer_kitty_mouseEnterAction_1585.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1584)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 375
          var block1586 = Grace_allocObject();
          block1586.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1586.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1586.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1586.methods["match"] = GraceBlock_match;
          block1586.methods["prefix?"] = GraceBlock_lift;
          block1586.receiver = this;
          block1586.className = 'block<kitty:375>';
          block1586.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["mouseOverAction"] = block1586;
          var reader_kitty_mouseOverAction_1587 = function() {
            return this.data["mouseOverAction"];
          }
          obj1317.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1587;
          obj1317.data["mouseOverAction"] = block1586;
          var writer_kitty_mouseOverAction_1587 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1317.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1587;
          reader_kitty_mouseOverAction_1587.confidential = true;
          writer_kitty_mouseOverAction_1587.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1586)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 376
          var block1588 = Grace_allocObject();
          block1588.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1588.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1588.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1588.methods["match"] = GraceBlock_match;
          block1588.methods["prefix?"] = GraceBlock_lift;
          block1588.receiver = this;
          block1588.className = 'block<kitty:376>';
          block1588.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["mouseExitAction"] = block1588;
          var reader_kitty_mouseExitAction_1589 = function() {
            return this.data["mouseExitAction"];
          }
          obj1317.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1589;
          obj1317.data["mouseExitAction"] = block1588;
          var writer_kitty_mouseExitAction_1589 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1317.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1589;
          reader_kitty_mouseExitAction_1589.confidential = true;
          writer_kitty_mouseExitAction_1589.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1588)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 377
          var block1590 = Grace_allocObject();
          block1590.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1590.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1590.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1590.methods["match"] = GraceBlock_match;
          block1590.methods["prefix?"] = GraceBlock_lift;
          block1590.receiver = this;
          block1590.className = 'block<kitty:377>';
          block1590.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["mouseDownAction"] = block1590;
          var reader_kitty_mouseDownAction_1591 = function() {
            return this.data["mouseDownAction"];
          }
          obj1317.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1591;
          obj1317.data["mouseDownAction"] = block1590;
          var writer_kitty_mouseDownAction_1591 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1317.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1591;
          reader_kitty_mouseDownAction_1591.confidential = true;
          writer_kitty_mouseDownAction_1591.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1590)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 378
          var block1592 = Grace_allocObject();
          block1592.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1592.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1592.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1592.methods["match"] = GraceBlock_match;
          block1592.methods["prefix?"] = GraceBlock_lift;
          block1592.receiver = this;
          block1592.className = 'block<kitty:378>';
          block1592.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1317.data["mouseUpAction"] = block1592;
          var reader_kitty_mouseUpAction_1593 = function() {
            return this.data["mouseUpAction"];
          }
          obj1317.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1593;
          obj1317.data["mouseUpAction"] = block1592;
          var writer_kitty_mouseUpAction_1593 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1317.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1593;
          reader_kitty_mouseUpAction_1593.confidential = true;
          writer_kitty_mouseUpAction_1593.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1592)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 378
          var bool1594 = new GraceBoolean(false)
          obj1317.data["mouseOver"] = bool1594;
          var reader_kitty_mouseOver_1595 = function() {
            return this.data["mouseOver"];
          }
          obj1317.methods["mouseOver"] = reader_kitty_mouseOver_1595;
          obj1317.data["mouseOver"] = bool1594;
          var writer_kitty_mouseOver_1595 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1317.methods["mouseOver:="] = writer_kitty_mouseOver_1595;
          reader_kitty_mouseOver_1595.confidential = true;
          writer_kitty_mouseOver_1595.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1594)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1317.mutable = true;
          sourceObject = obj1317;
          lineNumber = 380
          onSelf = true;
          var call1596 = callmethod(this, "init", [0]);
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          sourceObject = obj1317;
          superDepth = origSuperDepth;
        }
        obj_init_1317.apply(inheritingObject, []);
        return obj1317
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1033.methods["new()object"] = func1316;
    var func1597 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 343
        var string1598 = new GraceString("class KittyWorld");
        return string1598
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1597.paramCounts = [
    ];
    func1597.variableArities = [
    ];
    obj1033.methods["asDebugString"] = func1597;
    func1597.definitionLine = 343;
    func1597.definitionModule = "kitty";
    sourceObject = obj1033;
    sourceObject = obj1033;
    superDepth = origSuperDepth;
  }
  obj_init_1033.apply(obj1033, []);
  var var_KittyWorld = obj1033;
  lineNumber = 624
  lineNumber = 633
  lineNumber = 667
  lineNumber = 682
  lineNumber = 686
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Image()width()height:\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\nconstructors-of:KittyWorld:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n setLocation\n setMouseEnterAction\n createImage\n mouseExitAction:=\n tag\n destroyAction:=\n mouseExitAction\n mouseUpAction:=\n mouseDragAction\n mouseEnter\n mouseExit\n mouseDragStart:=\n setMouseExitAction\n setMouseDragAction\n mouseDragAction:=\n mouseDownAction:=\n getX\n getY\n image:=\n mouseDownAction\n posX:=\n image\n setX\n setY\n setMouseUpAction\n setMouseDownAction\n kill\n mouseUp\n setImage\n rotation\n getRotation\n tag:=\n mouseEnterAction:=\n move\n mouseOverAction:=\n turn\n mouseDragStart\n mouseOverAction\n strafe\n tick\n destroyAction\n mouseUpAction\n setMouseOverAction\n mouseEnterAction\n setDestroyAction\n updateAction:=\n mouseOver:=\n mouseDownEntity\n mouseDownEntity:=\n updateAction\n posY:=\n mouseDown\n mouseOver\n rotation:=\n awake\n posX\n posY\n setUpdateAction\n draw\nconstructors-of:Point:\n x()y\nmethods-of:Point.x()y:\n up\n x\n y\n left\n down\n right\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\npath:\n kitty\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nfresh:World()width()height:\n setMouseEnterAction\n document:=\n mctx\n destroyAction:=\n backingCanvas:=\n mouseUpAction:=\n getContext\n mouseEnter\n backgroundColour\n background:=\n setDestroyAction\n mouseDownAction\n mouseExit\n updateAction:=\n setMouseDownAction\n moveHeightMultipler\n height:=\n tag:=\n isRunning\n height\n mouseOverAction:=\n mouseDown\n destroyAction\n mouseUpAction\n isRunning:=\n entities:=\n ent\n width:=\n setMouseUpAction\n mouseEnterAction:=\n backingContext\n background\n updateAction\n mouseEnterAction\n isInit:=\n canvasWidth:=\n mouseExitAction:=\n tag\n document\n mouseExitAction\n backingContext:=\n backingCanvas\n setMouseExitAction\n setMouseDragAction\n canvas:=\n moveWidthMultipler\n mouseDownAction:=\n width\n addEntity\n mouseUp\n isInit\n mctx:=\n mouseOver:=\n canvasWidth\n mouseOverAction\n entities\n backgroundColour:=\n canvasHeight:=\n start\n setMouseOverAction\n init\n canvasHeight\n canvas\n ent:=\n mouseOver\n stop\n tick\n setBackground\n setUpdateAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n height:=\n drawImage\n elements:=\n width:=\n height\n getTag\n elements\n width\n imgTag\n draw\nfresh:Entity()x()y:\n strafe\n setMouseEnterAction\n createImage\n mouseExitAction:=\n mouseDragAction:=\n destroyAction:=\n mouseExitAction\n mouseUpAction:=\n mouseDragAction\n mouseEnter\n mouseExit\n mouseDragStart:=\n setMouseExitAction\n setMouseDragAction\n tag\n mouseDownAction:=\n getX\n getY\n image:=\n mouseDownAction\n posX:=\n image\n setX\n setY\n updateAction:=\n setMouseDownAction\n kill\n mouseUp\n setImage\n rotation\n getRotation\n tag:=\n mouseOver:=\n move\n mouseOverAction:=\n awake\n mouseDownEntity:=\n mouseOverAction\n setLocation\n posY\n destroyAction\n mouseUpAction\n setMouseOverAction\n mouseOver\n setDestroyAction\n setMouseUpAction\n mouseEnterAction:=\n mouseDownEntity\n mouseDragStart\n updateAction\n posY:=\n mouseDown\n mouseEnterAction\n rotation:=\n turn\n posX\n tick\n setUpdateAction\n draw\nmethods-of:KittyWorld.new:\n setMouseEnterAction\n document:=\n mctx\n destroyAction:=\n backingCanvas:=\n mouseUpAction:=\n getContext\n mouseEnter\n backgroundColour\n background:=\n isRunning:=\n mouseDownAction\n mouseExit\n updateAction:=\n setMouseDownAction\n moveHeightMultipler\n height:=\n tag:=\n isRunning\n height\n mouseOverAction:=\n mouseDown\n destroyAction\n mouseUpAction\n setDestroyAction\n canvasWidth\n ent\n width:=\n setMouseUpAction\n mouseEnterAction:=\n backingContext\n background\n updateAction\n mouseEnterAction\n isInit:=\n canvasWidth:=\n mouseExitAction:=\n tag\n document\n mouseExitAction\n backingContext:=\n backingCanvas\n setMouseExitAction\n setMouseDragAction\n canvas:=\n moveWidthMultipler\n mouseDownAction:=\n width\n addEntity\n mouseUp\n isInit\n mctx:=\n canvas\n entities:=\n mouseOverAction\n entities\n backgroundColour:=\n canvasHeight:=\n start\n setMouseOverAction\n init\n canvasHeight\n mouseOver:=\n ent:=\n mouseOver\n stop\n tick\n setBackground\n setUpdateAction\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\n";
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
    "            // Mouse actions",
    "            for (entities) do { entity ->",
    "                if (entity.mouseEnter) then {",
    "                    mouseExit",
    "                    return",
    "                }",
    "                if (entity.mouseExit) then {",
    "                    mouseEnter",
    "                    return",
    "                }",
    "            }",
    "            // Can not enter world if entity is entered",
    "            // mouseEnter",
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
    "    method mouseDown {",
    "        // if (mouseOver) then {",
    "        mouseDownAction.apply",
    "        // }",
    "    }",
    "",
    "    method mouseUp {",
    "        mouseUpAction.apply",
    "    }",
    "",
    "    // If it isn't in the Entity we shouldn't have to check",
    "    // if it is in the World",
    "    method mouseEnter {",
    "        mouseEnterAction.apply",
    "        // if (mouseOver) then {",
    "        //     return false",
    "        // }",
    "        // var poly := collections.list.new(",
    "        //     Point.x(0)y(0), Point.x(0)y(width),",
    "        //     Point.x(width)y(0), Point.x(width)y(height)",
    "        // )",
    "        // if (pointInPolygon(mouse.location, poly)) then {",
    "        //     mouseEnterAction.apply",
    "        //     mouseOver := true",
    "        // }",
    "    }",
    "",
    "    method mouseExit {",
    "        mouseExitAction.apply",
    "        // if (!mouseOver) then {",
    "        //     return false",
    "        // }",
    "        // var poly := collections.list.new(",
    "        //     Point.x(0)y(0), Point.x(0)y(width),",
    "        //     Point.x(width)y(0), Point.x(width)y(height)",
    "        // )",
    "        // if (!pointInPolygon(mouse.location, poly)) then {",
    "        //     mouseExitAction.apply",
    "        //     mouseOver := false",
    "        // }",
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
