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
  lineNumber = 618
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
      lineNumber = 619
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 619;
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
        lineNumber = 620
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
  func36.definitionLine = 618;
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
      obj41.definitionLine = 619;
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
  lineNumber = 627
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
      lineNumber = 632
      lineNumber = 631
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 632;
      moduleName = "kitty";
      lineNumber = 631
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 635
      lineNumber = 632
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 635;
      moduleName = "kitty";
      lineNumber = 632
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 637
      lineNumber = 635
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 637;
      moduleName = "kitty";
      lineNumber = 635
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 639
      lineNumber = 637
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 639;
      moduleName = "kitty";
      lineNumber = 637
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 639
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 655
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
      block53.className = 'block<kitty:655>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 642
        lineNumber = 641
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 642;
        moduleName = "kitty";
        lineNumber = 641
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 643
        lineNumber = 642
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 643;
        moduleName = "kitty";
        lineNumber = 642
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 644
        lineNumber = 643
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 644;
        moduleName = "kitty";
        lineNumber = 643
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 648
        lineNumber = 644
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 648;
        moduleName = "kitty";
        lineNumber = 644
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 649
        lineNumber = 648
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
        lineNumber = 649;
        moduleName = "kitty";
        lineNumber = 648
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 652
        var if95 = var_done;
        lineNumber = 649
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 651
          lineNumber = 650
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 654
        lineNumber = 652
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 656
      lineNumber = 655
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
  func44.definitionLine = 627;
  func44.definitionModule = "kitty";
  lineNumber = 661
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 663
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 670
      var if101 = var_done;
      lineNumber = 665
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 666
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 668
        return var_done
      }
      lineNumber = 670
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 673
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
  func98.definitionLine = 661;
  func98.definitionModule = "kitty";
  lineNumber = 676
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 677
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
  func108.definitionLine = 676;
  func108.definitionModule = "kitty";
  lineNumber = 680
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
      lineNumber = 682
      lineNumber = 681
      var_m__95__world = var_world__39__;
      lineNumber = 683
      lineNumber = 682
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
  func110.definitionLine = 680;
  func110.definitionModule = "kitty";
  lineNumber = 685
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
      lineNumber = 686
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
  func112.definitionLine = 685;
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
  lineNumber = 677
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
  func115.definitionLine = 677;
  func115.definitionModule = "kitty";
  lineNumber = 677
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
  func116.definitionLine = 677;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 677
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
  func118.definitionLine = 677;
  func118.definitionModule = "kitty";
  lineNumber = 677
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
  func119.definitionLine = 677;
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
  lineNumber = 677
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
  func120.definitionLine = 677;
  func120.definitionModule = "kitty";
  lineNumber = 677
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
  func121.definitionLine = 677;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 677
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
  func122.definitionLine = 677;
  func122.definitionModule = "kitty";
  lineNumber = 677
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
  func123.definitionLine = 677;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 677
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
  func124.definitionLine = 677;
  func124.definitionModule = "kitty";
  lineNumber = 677
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
  func125.definitionLine = 677;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 677
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
  func126.definitionLine = 677;
  func126.definitionModule = "kitty";
  lineNumber = 677
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
  func127.definitionLine = 677;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 677
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
  func128.definitionLine = 677;
  func128.definitionModule = "kitty";
  lineNumber = 677
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
  func129.definitionLine = 677;
  func129.definitionModule = "kitty";
  lineNumber = 21
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 677
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
  func131.definitionLine = 677;
  func131.definitionModule = "kitty";
  lineNumber = 677
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
  func132.definitionLine = 677;
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
              lineNumber = 440
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
              block1075.className = 'block<kitty:440>';
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
                lineNumber = 438
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
                block1109.className = 'block<kitty:438>';
                block1109.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 435
                  var if1110 = var_done;
                  lineNumber = 432
                  var call1111 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1111)) {
                    lineNumber = 434
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 435
                  var call1112 = callmethod(var_entity,"mouseExit", [0]);
                  return call1112;
                };
                var call1113 = callmethod(Grace_prelude,"for()do", [1, 1], call1108, block1109);
                lineNumber = 438
                var call1114 = callmethod(var_m__95__world,"mouseEnter", [0]);
                return call1114;
              };
              var_mouseMoveListener = block1075;
              lineNumber = 440
              var string1115 = new GraceString("mousemove");
              onSelf = true;
              var call1116 = callmethod(this, "canvas", [0]);
              var call1117 = callmethod(call1116,"addEventListener", [2], string1115, var_mouseMoveListener);
              lineNumber = 450
              var block1118 = Grace_allocObject();
              block1118.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1118.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1118.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1118.methods["match"] = GraceBlock_match;
              block1118.methods["prefix?"] = GraceBlock_lift;
              block1118.receiver = this;
              block1118.className = 'block<kitty:450>';
              block1118.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 448
                var if1119 = var_done;
                lineNumber = 445
                var call1121 = callmethod(var_ev,"keyCode", [0]);
                var opresult1123 = callmethod(call1121, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1123)) {
                  lineNumber = 446
                  onSelf = true;
                  var call1124 = callmethod(this, "stop", [0]);
                  if1119 = call1124;
                }
                lineNumber = 449
                lineNumber = 448
                var call1125 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1125;
                return call1125;
              };
              var_keyDownListener = block1118;
              lineNumber = 450
              var string1126 = new GraceString("keydown");
              onSelf = true;
              var call1127 = callmethod(this, "document", [0]);
              var call1128 = callmethod(call1127,"addEventListener", [2], string1126, var_keyDownListener);
              lineNumber = 456
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
              block1129.className = 'block<kitty:456>';
              block1129.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 455
                lineNumber = 454
                var call1130 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1130;
                return call1130;
              };
              var_keyUpListener = block1129;
              lineNumber = 456
              var string1131 = new GraceString("keyup");
              onSelf = true;
              var call1132 = callmethod(this, "document", [0]);
              var call1133 = callmethod(call1132,"addEventListener", [2], string1131, var_keyUpListener);
              lineNumber = 458
              lineNumber = 448
              lineNumber = 458
              var string1134 = new GraceString("canvas");
              var call1135 = callmethod(var_dom,"document", [0]);
              var call1136 = callmethod(call1135,"createElement", [1], string1134);
              onSelf = true;
              var call1137 = callmethod(this, "backingCanvas:=", [1], call1136);
              lineNumber = 460
              lineNumber = 458
              lineNumber = 459
              onSelf = true;
              var call1138 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1139 = callmethod(this, "backingCanvas", [0]);
              var call1140 = callmethod(call1139,"height:=", [1], call1138);
              lineNumber = 461
              lineNumber = 458
              lineNumber = 460
              onSelf = true;
              var call1141 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1142 = callmethod(this, "backingCanvas", [0]);
              var call1143 = callmethod(call1142,"width:=", [1], call1141);
              lineNumber = 461
              lineNumber = 458
              lineNumber = 461
              var string1144 = new GraceString("2d");
              onSelf = true;
              var call1145 = callmethod(this, "backingCanvas", [0]);
              var call1146 = callmethod(call1145,"getContext", [1], string1144);
              onSelf = true;
              var call1147 = callmethod(this, "backingContext:=", [1], call1146);
              lineNumber = 462
              lineNumber = 458
              lineNumber = 462
              var string1148 = new GraceString("2d");
              onSelf = true;
              var call1149 = callmethod(this, "canvas", [0]);
              var call1150 = callmethod(call1149,"getContext", [1], string1148);
              onSelf = true;
              var call1151 = callmethod(this, "mctx:=", [1], call1150);
              lineNumber = 465
              var string1152 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1153 = callmethod(this, "setBackground", [1], string1152);
              lineNumber = 468
              var call1154 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1155 = callmethod(call1154, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1156 = callmethod(call1155, "setWorld", [1], this);
              lineNumber = 471
              lineNumber = 470
              var_kitten = this;
              lineNumber = 472
              lineNumber = 468
              lineNumber = 471
              var bool1157 = new GraceBoolean(true)
              onSelf = true;
              var call1158 = callmethod(this, "isInit:=", [1], bool1157);
              return call1158
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
          var func1159 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 478
              lineNumber = 468
              lineNumber = 477
              var bool1160 = new GraceBoolean(true)
              onSelf = true;
              var call1161 = callmethod(this, "isRunning:=", [1], bool1160);
              lineNumber = 478
              var block1162 = Grace_allocObject();
              block1162.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1162.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1162.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1162.methods["match"] = GraceBlock_match;
              block1162.methods["prefix?"] = GraceBlock_lift;
              block1162.receiver = this;
              block1162.className = 'block<kitty:478>';
              block1162.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1163 = callmethod(this, "isRunning", [0]);
                return call1163;
              };
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
                lineNumber = 479
                onSelf = true;
                var call1165 = callmethod(this, "tick", [0]);
                return call1165;
              };
              lineNumber = 478
              var call1166 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1162, new GraceNum(10), block1164);
              return call1166
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
          obj1036.methods["start"] = func1159;
          func1159.definitionLine = 475;
          func1159.definitionModule = "kitty";
          var func1167 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1167.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              lineNumber = 468
              lineNumber = 490
              onSelf = true;
              var call1168 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1169 = callmethod(this, "mctx", [0]);
              var call1170 = callmethod(call1169,"fillStyle:=", [1], call1168);
              lineNumber = 491
              onSelf = true;
              var call1171 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1172 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1173 = callmethod(this, "mctx", [0]);
              var call1174 = callmethod(call1173,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1171, call1172);
              lineNumber = 492
              onSelf = true;
              var call1175 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1176 = callmethod(this, "mctx", [0]);
              var call1177 = callmethod(call1176,"drawImage", [3], call1175, new GraceNum(0), new GraceNum(0));
              lineNumber = 493
              onSelf = true;
              var call1178 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1180 = callmethod(this, "canvasWidth", [0]);
              var quotient1182 = callmethod(call1180, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1184 = callmethod(this, "canvasHeight", [0]);
              var quotient1186 = callmethod(call1184, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1187 = callmethod(this, "background", [0]);
              var call1188 = callmethod(call1187,"draw", [4], call1178, quotient1182, quotient1186, new GraceNum(0));
              lineNumber = 496
              onSelf = true;
              var call1189 = callmethod(this, "updateAction", [0]);
              var call1190 = callmethod(call1189,"apply", [0]);
              lineNumber = 499
              onSelf = true;
              var call1191 = callmethod(this, "entities", [0]);
              lineNumber = 506
              var block1192 = Grace_allocObject();
              block1192.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1192.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1192.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1192.methods["match"] = GraceBlock_match;
              block1192.methods["prefix?"] = GraceBlock_lift;
              block1192.receiver = this;
              block1192.className = 'block<kitty:506>';
              block1192.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 500
                var call1193 = callmethod(var_entity,"tick", [0]);
                lineNumber = 502
                onSelf = true;
                var call1194 = callmethod(this, "mctx", [0]);
                var call1195 = callmethod(var_entity,"draw", [3], call1194, new GraceNum(0), new GraceNum(0));
                return call1195;
              };
              var call1196 = callmethod(Grace_prelude,"for()do", [1, 1], call1191, block1192);
              return call1196
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1167.paramCounts = [
            0,
          ];
          func1167.variableArities = [
            false,
          ];
          obj1036.methods["tick"] = func1167;
          func1167.definitionLine = 485;
          func1167.definitionModule = "kitty";
          var func1197 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1197.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 509
              var string1198 = new GraceString("WORLD STOPPING...");
              var call1199 = Grace_print(string1198);
              lineNumber = 511
              lineNumber = 500
              lineNumber = 510
              var bool1200 = new GraceBoolean(false)
              onSelf = true;
              var call1201 = callmethod(this, "isRunning:=", [1], bool1200);
              lineNumber = 511
              onSelf = true;
              var call1202 = callmethod(this, "destroyAction", [0]);
              var call1203 = callmethod(call1202,"apply", [0]);
              lineNumber = 512
              onSelf = true;
              var call1204 = callmethod(this, "entities", [0]);
              lineNumber = 515
              var block1205 = Grace_allocObject();
              block1205.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1205.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1205.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1205.methods["match"] = GraceBlock_match;
              block1205.methods["prefix?"] = GraceBlock_lift;
              block1205.receiver = this;
              block1205.className = 'block<kitty:515>';
              block1205.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 513
                var call1206 = callmethod(var_entity,"kill", [0]);
                return call1206;
              };
              var call1207 = callmethod(Grace_prelude,"for()do", [1, 1], call1204, block1205);
              lineNumber = 515
              var string1208 = new GraceString("mousedown");
              onSelf = true;
              var call1209 = callmethod(this, "canvas", [0]);
              var call1210 = callmethod(call1209,"removeEventListener", [2], string1208, var_mouseDownListener);
              lineNumber = 516
              var string1211 = new GraceString("mouseup");
              onSelf = true;
              var call1212 = callmethod(this, "canvas", [0]);
              var call1213 = callmethod(call1212,"removeEventListener", [2], string1211, var_mouseUpListener);
              lineNumber = 517
              var string1214 = new GraceString("mousemove");
              onSelf = true;
              var call1215 = callmethod(this, "canvas", [0]);
              var call1216 = callmethod(call1215,"removeEventListener", [2], string1214, var_mouseMoveListener);
              lineNumber = 518
              var string1217 = new GraceString("keydown");
              onSelf = true;
              var call1218 = callmethod(this, "document", [0]);
              var call1219 = callmethod(call1218,"removeEventListener", [2], string1217, var_keyDownListener);
              lineNumber = 519
              var string1220 = new GraceString("keyup");
              onSelf = true;
              var call1221 = callmethod(this, "document", [0]);
              var call1222 = callmethod(call1221,"removeEventListener", [2], string1220, var_keyUpListener);
              return call1222
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
          obj1036.methods["stop"] = func1197;
          func1197.definitionLine = 508;
          func1197.definitionModule = "kitty";
          var func1223 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 526
              var if1224 = var_done;
              lineNumber = 523
              onSelf = true;
              var call1225 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1225)) {
                lineNumber = 524
                onSelf = true;
                var call1226 = callmethod(this, "mouseDownAction", [0]);
                var call1227 = callmethod(call1226,"apply", [0]);
                if1224 = call1227;
              }
              return if1224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1223.paramCounts = [
            0,
          ];
          func1223.variableArities = [
            false,
          ];
          obj1036.methods["mouseDown"] = func1223;
          func1223.definitionLine = 522;
          func1223.definitionModule = "kitty";
          var func1228 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 532
              var if1229 = var_done;
              lineNumber = 529
              onSelf = true;
              var call1230 = callmethod(this, "mouseOver", [0]);
              var call1231 = callmethod(call1230,"prefix!", [0]);
              if (Grace_isTrue(call1231)) {
                lineNumber = 530
                onSelf = true;
                var call1232 = callmethod(this, "mouseUpAction", [0]);
                var call1233 = callmethod(call1232,"apply", [0]);
                if1229 = call1233;
              }
              return if1229
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
          func1228.definitionLine = 528;
          func1228.definitionModule = "kitty";
          var func1234 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1234.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 538
              var if1235 = var_done;
              lineNumber = 535
              onSelf = true;
              var call1236 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1236)) {
                lineNumber = 537
                lineNumber = 536
                var bool1237 = new GraceBoolean(false)
                return bool1237
              }
              lineNumber = 538
              lineNumber = 539
              var call1238 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1239 = callmethod(this, "width", [0]);
              var call1240 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1239);
              lineNumber = 540
              onSelf = true;
              var call1241 = callmethod(this, "width", [0]);
              var call1242 = callmethod(var_Point,"x()y", [1, 1], call1241, new GraceNum(0));
              onSelf = true;
              var call1243 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1244 = callmethod(this, "height", [0]);
              var call1245 = callmethod(var_Point,"x()y", [1, 1], call1243, call1244);
              lineNumber = 538
              var call1246 = callmethod(var_collections,"list", [0]);
              var call1247 = callmethod(call1246,"new", [4], call1238, call1240, call1242, call1245);
              var var_poly = call1247;
              lineNumber = 538;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 546
              var if1248 = var_done;
              lineNumber = 542
              var call1249 = callmethod(var_mouse,"location", [0]);
              var call1250 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1251 = callmethod(call1250, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1252 = callmethod(call1251, "pointInPolygon", [2], call1249, var_poly);
              if (Grace_isTrue(call1252)) {
                lineNumber = 543
                onSelf = true;
                var call1253 = callmethod(this, "mouseEnterAction", [0]);
                var call1254 = callmethod(call1253,"apply", [0]);
                lineNumber = 545
                lineNumber = 543
                lineNumber = 544
                var bool1255 = new GraceBoolean(true)
                onSelf = true;
                var call1256 = callmethod(this, "mouseOver:=", [1], bool1255);
                if1248 = call1256;
              }
              return if1248
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
          obj1036.methods["mouseEnter"] = func1234;
          func1234.definitionLine = 534;
          func1234.definitionModule = "kitty";
          var func1257 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 552
              var if1258 = var_done;
              lineNumber = 549
              onSelf = true;
              var call1259 = callmethod(this, "mouseOver", [0]);
              var call1260 = callmethod(call1259,"prefix!", [0]);
              if (Grace_isTrue(call1260)) {
                lineNumber = 551
                lineNumber = 550
                var bool1261 = new GraceBoolean(false)
                return bool1261
              }
              lineNumber = 552
              lineNumber = 553
              var call1262 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1263 = callmethod(this, "width", [0]);
              var call1264 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1263);
              lineNumber = 554
              onSelf = true;
              var call1265 = callmethod(this, "width", [0]);
              var call1266 = callmethod(var_Point,"x()y", [1, 1], call1265, new GraceNum(0));
              onSelf = true;
              var call1267 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1268 = callmethod(this, "height", [0]);
              var call1269 = callmethod(var_Point,"x()y", [1, 1], call1267, call1268);
              lineNumber = 552
              var call1270 = callmethod(var_collections,"list", [0]);
              var call1271 = callmethod(call1270,"new", [4], call1262, call1264, call1266, call1269);
              var var_poly = call1271;
              lineNumber = 552;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 560
              var if1272 = var_done;
              lineNumber = 556
              onSelf = true;
              var call1273 = callmethod(this, "mouseOver", [0]);
              var call1275 = callmethod(var_mouse,"location", [0]);
              var call1276 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1277 = callmethod(call1276, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1278 = callmethod(call1277, "pointInPolygon", [2], call1275, var_poly);
              var call1279 = callmethod(call1278,"prefix!", [0]);
              var opresult1281 = callmethod(call1279, "&&", [1], call1273);
              if (Grace_isTrue(opresult1281)) {
                lineNumber = 557
                onSelf = true;
                var call1282 = callmethod(this, "mouseExitAction", [0]);
                var call1283 = callmethod(call1282,"apply", [0]);
                lineNumber = 559
                lineNumber = 557
                lineNumber = 558
                var bool1284 = new GraceBoolean(false)
                onSelf = true;
                var call1285 = callmethod(this, "mouseOver:=", [1], bool1284);
                if1272 = call1285;
              }
              return if1272
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1257.paramCounts = [
            0,
          ];
          func1257.variableArities = [
            false,
          ];
          obj1036.methods["mouseExit"] = func1257;
          func1257.definitionLine = 548;
          func1257.definitionModule = "kitty";
          var func1286 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 563
              lineNumber = 557
              lineNumber = 563
              onSelf = true;
              var call1287 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1288 = callmethod(this, "canvasHeight", [0]);
              var call1289 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1290 = callmethod(call1289, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1291 = callmethod(call1290, "Image()width()height", [1, 1, 1], var_url, call1287, call1288);
              onSelf = true;
              var call1292 = callmethod(this, "background:=", [1], call1291);
              return call1292
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1286.paramCounts = [
            1,
          ];
          func1286.variableArities = [
            false,
          ];
          obj1036.methods["setBackground"] = func1286;
          func1286.definitionLine = 562;
          func1286.definitionModule = "kitty";
          var func1293 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 567
              onSelf = true;
              var call1294 = callmethod(this, "entities", [0]);
              var call1295 = callmethod(call1294,"push", [1], var_e);
              return call1295
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
          obj1036.methods["addEntity"] = func1293;
          func1293.definitionLine = 566;
          func1293.definitionModule = "kitty";
          var func1296 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1296.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 572
              lineNumber = 571
              onSelf = true;
              var call1297 = callmethod(this, "mctx", [0]);
              return call1297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1296.paramCounts = [
            0,
          ];
          func1296.variableArities = [
            false,
          ];
          obj1036.methods["getContext"] = func1296;
          func1296.definitionLine = 570;
          func1296.definitionModule = "kitty";
          var func1298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 576
              lineNumber = 575
              onSelf = true;
              var call1299 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1301 = callmethod(this, "canvasWidth", [0]);
              var quotient1303 = callmethod(call1301, "/", [1], call1299);
              return quotient1303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1298.paramCounts = [
            0,
          ];
          func1298.variableArities = [
            false,
          ];
          obj1036.methods["moveWidthMultipler"] = func1298;
          func1298.definitionLine = 574;
          func1298.definitionModule = "kitty";
          var func1304 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 580
              lineNumber = 579
              onSelf = true;
              var call1305 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1307 = callmethod(this, "canvasHeight", [0]);
              var quotient1309 = callmethod(call1307, "/", [1], call1305);
              return quotient1309
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1304.paramCounts = [
            0,
          ];
          func1304.variableArities = [
            false,
          ];
          obj1036.methods["moveHeightMultipler"] = func1304;
          func1304.definitionLine = 578;
          func1304.definitionModule = "kitty";
          var func1310 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 585
              lineNumber = 563
              lineNumber = 584
              onSelf = true;
              var call1311 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1311
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1310.paramCounts = [
            1,
          ];
          func1310.variableArities = [
            false,
          ];
          obj1036.methods["setUpdateAction"] = func1310;
          func1310.definitionLine = 583;
          func1310.definitionModule = "kitty";
          var func1312 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 589
              lineNumber = 563
              lineNumber = 588
              onSelf = true;
              var call1313 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1313
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1312.paramCounts = [
            1,
          ];
          func1312.variableArities = [
            false,
          ];
          obj1036.methods["setDestroyAction"] = func1312;
          func1312.definitionLine = 587;
          func1312.definitionModule = "kitty";
          var func1314 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 593
              lineNumber = 563
              lineNumber = 592
              onSelf = true;
              var call1315 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1314.paramCounts = [
            1,
          ];
          func1314.variableArities = [
            false,
          ];
          obj1036.methods["setMouseDownAction"] = func1314;
          func1314.definitionLine = 591;
          func1314.definitionModule = "kitty";
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 597
              lineNumber = 563
              lineNumber = 596
              onSelf = true;
              var call1317 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1317
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1316.paramCounts = [
            1,
          ];
          func1316.variableArities = [
            false,
          ];
          obj1036.methods["setMouseUpAction"] = func1316;
          func1316.definitionLine = 595;
          func1316.definitionModule = "kitty";
          var func1318 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 601
              lineNumber = 563
              lineNumber = 600
              onSelf = true;
              var call1319 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1319
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1318.paramCounts = [
            1,
          ];
          func1318.variableArities = [
            false,
          ];
          obj1036.methods["setMouseEnterAction"] = func1318;
          func1318.definitionLine = 599;
          func1318.definitionModule = "kitty";
          var func1320 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 604
              var string1321 = new GraceString("*Drag Not Available For World*");
              var call1322 = Grace_print(string1321);
              return call1322
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1320.paramCounts = [
            1,
          ];
          func1320.variableArities = [
            false,
          ];
          obj1036.methods["setMouseDragAction"] = func1320;
          func1320.definitionLine = 603;
          func1320.definitionModule = "kitty";
          var func1323 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 609
              lineNumber = 563
              lineNumber = 608
              onSelf = true;
              var call1324 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1324
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1323.paramCounts = [
            1,
          ];
          func1323.variableArities = [
            false,
          ];
          obj1036.methods["setMouseOverAction"] = func1323;
          func1323.definitionLine = 607;
          func1323.definitionModule = "kitty";
          var func1325 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1325.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 613
              lineNumber = 563
              lineNumber = 612
              onSelf = true;
              var call1326 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1326
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1325.paramCounts = [
            1,
          ];
          func1325.variableArities = [
            false,
          ];
          obj1036.methods["setMouseExitAction"] = func1325;
          func1325.definitionLine = 611;
          func1325.definitionModule = "kitty";
          sourceObject = obj1036;
          lineNumber = 346
          obj1036.data["width"] = var_width__39__;
          var reader_kitty_width_1327 = function() {
            return this.data["width"];
          }
          obj1036.methods["width"] = reader_kitty_width_1327;
          obj1036.data["width"] = var_width__39__;
          var writer_kitty_width_1327 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1036.methods["width:="] = writer_kitty_width_1327;
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
          var reader_kitty_height_1328 = function() {
            return this.data["height"];
          }
          obj1036.methods["height"] = reader_kitty_height_1328;
          obj1036.data["height"] = var_height__39__;
          var writer_kitty_height_1328 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1036.methods["height:="] = writer_kitty_height_1328;
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
          var reader_kitty_tag_1329 = function() {
            return this.data["tag"];
          }
          obj1036.methods["tag"] = reader_kitty_tag_1329;
          obj1036.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1329 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1036.methods["tag:="] = writer_kitty_tag_1329;
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
          var reader_kitty_background_1330 = function() {
            return this.data["background"];
          }
          obj1036.methods["background"] = reader_kitty_background_1330;
          obj1036.data["background"] = undefined;
          var writer_kitty_background_1330 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1036.methods["background:="] = writer_kitty_background_1330;
          reader_kitty_background_1330.confidential = true;
          writer_kitty_background_1330.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 351
          var string1331 = new GraceString("black");
          obj1036.data["backgroundColour"] = string1331;
          var reader_kitty_backgroundColour_1332 = function() {
            return this.data["backgroundColour"];
          }
          obj1036.methods["backgroundColour"] = reader_kitty_backgroundColour_1332;
          obj1036.data["backgroundColour"] = string1331;
          var writer_kitty_backgroundColour_1332 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1036.methods["backgroundColour:="] = writer_kitty_backgroundColour_1332;
          reader_kitty_backgroundColour_1332.confidential = true;
          writer_kitty_backgroundColour_1332.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1331)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["document"] = undefined;
          var reader_kitty_document_1333 = function() {
            return this.data["document"];
          }
          obj1036.methods["document"] = reader_kitty_document_1333;
          obj1036.data["document"] = undefined;
          var writer_kitty_document_1333 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1036.methods["document:="] = writer_kitty_document_1333;
          reader_kitty_document_1333.confidential = true;
          writer_kitty_document_1333.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1334 = function() {
            return this.data["backingCanvas"];
          }
          obj1036.methods["backingCanvas"] = reader_kitty_backingCanvas_1334;
          obj1036.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1334 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1036.methods["backingCanvas:="] = writer_kitty_backingCanvas_1334;
          reader_kitty_backingCanvas_1334.confidential = true;
          writer_kitty_backingCanvas_1334.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1335 = function() {
            return this.data["backingContext"];
          }
          obj1036.methods["backingContext"] = reader_kitty_backingContext_1335;
          obj1036.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1335 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1036.methods["backingContext:="] = writer_kitty_backingContext_1335;
          reader_kitty_backingContext_1335.confidential = true;
          writer_kitty_backingContext_1335.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvas"] = undefined;
          var reader_kitty_canvas_1336 = function() {
            return this.data["canvas"];
          }
          obj1036.methods["canvas"] = reader_kitty_canvas_1336;
          obj1036.data["canvas"] = undefined;
          var writer_kitty_canvas_1336 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1036.methods["canvas:="] = writer_kitty_canvas_1336;
          reader_kitty_canvas_1336.confidential = true;
          writer_kitty_canvas_1336.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1337 = function() {
            return this.data["canvasWidth"];
          }
          obj1036.methods["canvasWidth"] = reader_kitty_canvasWidth_1337;
          obj1036.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1337 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1036.methods["canvasWidth:="] = writer_kitty_canvasWidth_1337;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1338 = function() {
            return this.data["canvasHeight"];
          }
          obj1036.methods["canvasHeight"] = reader_kitty_canvasHeight_1338;
          obj1036.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1338 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1036.methods["canvasHeight:="] = writer_kitty_canvasHeight_1338;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 362
          var call1339 = callmethod(var_collections,"list", [0]);
          var call1340 = callmethod(call1339,"new", [0]);
          obj1036.data["entities"] = call1340;
          var reader_kitty_entities_1341 = function() {
            return this.data["entities"];
          }
          obj1036.methods["entities"] = reader_kitty_entities_1341;
          obj1036.data["entities"] = call1340;
          var writer_kitty_entities_1341 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1036.methods["entities:="] = writer_kitty_entities_1341;
          reader_kitty_entities_1341.confidential = true;
          writer_kitty_entities_1341.confidential = true;
          lineNumber = 364;
          moduleName = "kitty";
          lineNumber = 362
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1340)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 364
          var bool1342 = new GraceBoolean(false)
          obj1036.data["isInit"] = bool1342;
          var reader_kitty_isInit_1343 = function() {
            return this.data["isInit"];
          }
          obj1036.methods["isInit"] = reader_kitty_isInit_1343;
          obj1036.data["isInit"] = bool1342;
          var writer_kitty_isInit_1343 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1036.methods["isInit:="] = writer_kitty_isInit_1343;
          reader_kitty_isInit_1343.confidential = true;
          writer_kitty_isInit_1343.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1342)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 365
          var bool1344 = new GraceBoolean(false)
          obj1036.data["isRunning"] = bool1344;
          var reader_kitty_isRunning_1345 = function() {
            return this.data["isRunning"];
          }
          obj1036.methods["isRunning"] = reader_kitty_isRunning_1345;
          obj1036.data["isRunning"] = bool1344;
          var writer_kitty_isRunning_1345 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1036.methods["isRunning:="] = writer_kitty_isRunning_1345;
          reader_kitty_isRunning_1345.confidential = true;
          writer_kitty_isRunning_1345.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1344)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["mctx"] = undefined;
          var reader_kitty_mctx_1346 = function() {
            return this.data["mctx"];
          }
          obj1036.methods["mctx"] = reader_kitty_mctx_1346;
          obj1036.data["mctx"] = undefined;
          var writer_kitty_mctx_1346 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1036.methods["mctx:="] = writer_kitty_mctx_1346;
          reader_kitty_mctx_1346.confidential = true;
          writer_kitty_mctx_1346.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          obj1036.data["ent"] = undefined;
          var reader_kitty_ent_1347 = function() {
            return this.data["ent"];
          }
          obj1036.methods["ent"] = reader_kitty_ent_1347;
          obj1036.data["ent"] = undefined;
          var writer_kitty_ent_1347 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1036.methods["ent:="] = writer_kitty_ent_1347;
          reader_kitty_ent_1347.confidential = true;
          writer_kitty_ent_1347.confidential = true;
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 372
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
          block1348.className = 'block<kitty:372>';
          block1348.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["updateAction"] = block1348;
          var reader_kitty_updateAction_1349 = function() {
            return this.data["updateAction"];
          }
          obj1036.methods["updateAction"] = reader_kitty_updateAction_1349;
          obj1036.data["updateAction"] = block1348;
          var writer_kitty_updateAction_1349 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1036.methods["updateAction:="] = writer_kitty_updateAction_1349;
          reader_kitty_updateAction_1349.confidential = true;
          writer_kitty_updateAction_1349.confidential = true;
          lineNumber = 372;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1348)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 373
          var block1350 = Grace_allocObject();
          block1350.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1350.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1350.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1350.methods["match"] = GraceBlock_match;
          block1350.methods["prefix?"] = GraceBlock_lift;
          block1350.receiver = this;
          block1350.className = 'block<kitty:373>';
          block1350.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["destroyAction"] = block1350;
          var reader_kitty_destroyAction_1351 = function() {
            return this.data["destroyAction"];
          }
          obj1036.methods["destroyAction"] = reader_kitty_destroyAction_1351;
          obj1036.data["destroyAction"] = block1350;
          var writer_kitty_destroyAction_1351 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1036.methods["destroyAction:="] = writer_kitty_destroyAction_1351;
          reader_kitty_destroyAction_1351.confidential = true;
          writer_kitty_destroyAction_1351.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 372
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1350)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 374
          var block1352 = Grace_allocObject();
          block1352.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1352.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1352.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1352.methods["match"] = GraceBlock_match;
          block1352.methods["prefix?"] = GraceBlock_lift;
          block1352.receiver = this;
          block1352.className = 'block<kitty:374>';
          block1352.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseEnterAction"] = block1352;
          var reader_kitty_mouseEnterAction_1353 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1036.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1353;
          obj1036.data["mouseEnterAction"] = block1352;
          var writer_kitty_mouseEnterAction_1353 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1036.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1353;
          reader_kitty_mouseEnterAction_1353.confidential = true;
          writer_kitty_mouseEnterAction_1353.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1352)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 375
          var block1354 = Grace_allocObject();
          block1354.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1354.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1354.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1354.methods["match"] = GraceBlock_match;
          block1354.methods["prefix?"] = GraceBlock_lift;
          block1354.receiver = this;
          block1354.className = 'block<kitty:375>';
          block1354.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseOverAction"] = block1354;
          var reader_kitty_mouseOverAction_1355 = function() {
            return this.data["mouseOverAction"];
          }
          obj1036.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1355;
          obj1036.data["mouseOverAction"] = block1354;
          var writer_kitty_mouseOverAction_1355 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1036.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1355;
          reader_kitty_mouseOverAction_1355.confidential = true;
          writer_kitty_mouseOverAction_1355.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1354)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 376
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
          block1356.className = 'block<kitty:376>';
          block1356.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseExitAction"] = block1356;
          var reader_kitty_mouseExitAction_1357 = function() {
            return this.data["mouseExitAction"];
          }
          obj1036.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1357;
          obj1036.data["mouseExitAction"] = block1356;
          var writer_kitty_mouseExitAction_1357 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1036.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1357;
          reader_kitty_mouseExitAction_1357.confidential = true;
          writer_kitty_mouseExitAction_1357.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1356)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 377
          var block1358 = Grace_allocObject();
          block1358.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1358.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1358.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1358.methods["match"] = GraceBlock_match;
          block1358.methods["prefix?"] = GraceBlock_lift;
          block1358.receiver = this;
          block1358.className = 'block<kitty:377>';
          block1358.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseDownAction"] = block1358;
          var reader_kitty_mouseDownAction_1359 = function() {
            return this.data["mouseDownAction"];
          }
          obj1036.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1359;
          obj1036.data["mouseDownAction"] = block1358;
          var writer_kitty_mouseDownAction_1359 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1036.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1359;
          reader_kitty_mouseDownAction_1359.confidential = true;
          writer_kitty_mouseDownAction_1359.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1358)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 378
          var block1360 = Grace_allocObject();
          block1360.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1360.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1360.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1360.methods["match"] = GraceBlock_match;
          block1360.methods["prefix?"] = GraceBlock_lift;
          block1360.receiver = this;
          block1360.className = 'block<kitty:378>';
          block1360.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1036.data["mouseUpAction"] = block1360;
          var reader_kitty_mouseUpAction_1361 = function() {
            return this.data["mouseUpAction"];
          }
          obj1036.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1361;
          obj1036.data["mouseUpAction"] = block1360;
          var writer_kitty_mouseUpAction_1361 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1036.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1361;
          reader_kitty_mouseUpAction_1361.confidential = true;
          writer_kitty_mouseUpAction_1361.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1360)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 378
          var bool1362 = new GraceBoolean(false)
          obj1036.data["mouseOver"] = bool1362;
          var reader_kitty_mouseOver_1363 = function() {
            return this.data["mouseOver"];
          }
          obj1036.methods["mouseOver"] = reader_kitty_mouseOver_1363;
          obj1036.data["mouseOver"] = bool1362;
          var writer_kitty_mouseOver_1363 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1036.methods["mouseOver:="] = writer_kitty_mouseOver_1363;
          reader_kitty_mouseOver_1363.confidential = true;
          writer_kitty_mouseOver_1363.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1362)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1036.mutable = true;
          sourceObject = obj1036;
          lineNumber = 380
          onSelf = true;
          var call1364 = callmethod(this, "init", [0]);
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
    var func1365 = function(argcv) {
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
        var obj1366 = Grace_allocObject();
        obj1366.definitionModule = "kitty";
        obj1366.definitionLine = 343;
        var inho1366 = inheritingObject;
        while (inho1366.superobj) inho1366 = inho1366.superobj;
        inho1366.superobj = obj1366;
        obj1366.data = inheritingObject.data;
        obj1366.outer = this;
        var reader_kitty_outer_1367 = function() {
          return this.outer;
        }
        obj1366.methods["outer"] = reader_kitty_outer_1367;
        function obj_init_1366() {
          var origSuperDepth = superDepth;
          superDepth = obj1366;
          obj1366.annotations = [];
          var func1368 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 391
              var if1369 = var_done;
              lineNumber = 387
              onSelf = true;
              var call1370 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1370)) {
                lineNumber = 389
                lineNumber = 388
                var bool1371 = new GraceBoolean(false)
                return bool1371
              }
              lineNumber = 392
              lineNumber = 362
              lineNumber = 391
              var call1372 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1373 = callmethod(this, "document:=", [1], call1372);
              lineNumber = 392
              lineNumber = 391
              lineNumber = 392
              var string1374 = new GraceString("standard-canvas");
              onSelf = true;
              var call1375 = callmethod(this, "document", [0]);
              var call1376 = callmethod(call1375,"getElementById", [1], string1374);
              onSelf = true;
              var call1377 = callmethod(this, "canvas:=", [1], call1376);
              lineNumber = 394
              lineNumber = 391
              lineNumber = 393
              onSelf = true;
              var call1378 = callmethod(this, "canvas", [0]);
              var call1379 = callmethod(call1378,"width", [0]);
              onSelf = true;
              var call1380 = callmethod(this, "canvasWidth:=", [1], call1379);
              lineNumber = 397
              lineNumber = 393
              lineNumber = 394
              onSelf = true;
              var call1381 = callmethod(this, "canvas", [0]);
              var call1382 = callmethod(call1381,"height", [0]);
              onSelf = true;
              var call1383 = callmethod(this, "canvasHeight:=", [1], call1382);
              lineNumber = 409
              var block1384 = Grace_allocObject();
              block1384.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1384.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1384.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1384.methods["match"] = GraceBlock_match;
              block1384.methods["prefix?"] = GraceBlock_lift;
              block1384.receiver = this;
              block1384.className = 'block<kitty:409>';
              block1384.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 400
                onSelf = true;
                var call1385 = callmethod(this, "entities", [0]);
                lineNumber = 407
                var block1386 = Grace_allocObject();
                block1386.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1386.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1386.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1386.methods["match"] = GraceBlock_match;
                block1386.methods["prefix?"] = GraceBlock_lift;
                block1386.receiver = this;
                block1386.className = 'block<kitty:407>';
                block1386.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 404
                  var if1387 = var_done;
                  lineNumber = 401
                  var call1388 = callmethod(var_entity,"mouseDown", [0]);
                  if (Grace_isTrue(call1388)) {
                    lineNumber = 403
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1387;
                };
                var call1389 = callmethod(Grace_prelude,"for()do", [1, 1], call1385, block1386);
                lineNumber = 407
                onSelf = true;
                var call1390 = callmethod(this, "mouseDown", [0]);
                return call1390;
              };
              var_mouseDownListener = block1384;
              lineNumber = 409
              var string1391 = new GraceString("mousedown");
              var bool1392 = new GraceBoolean(false)
              onSelf = true;
              var call1393 = callmethod(this, "canvas", [0]);
              var call1394 = callmethod(call1393,"addEventListener", [3], string1391, var_mouseDownListener, bool1392);
              lineNumber = 423
              var block1395 = Grace_allocObject();
              block1395.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1395.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1395.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1395.methods["match"] = GraceBlock_match;
              block1395.methods["prefix?"] = GraceBlock_lift;
              block1395.receiver = this;
              block1395.className = 'block<kitty:423>';
              block1395.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 414
                onSelf = true;
                var call1396 = callmethod(this, "entities", [0]);
                lineNumber = 421
                var block1397 = Grace_allocObject();
                block1397.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1397.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1397.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1397.methods["match"] = GraceBlock_match;
                block1397.methods["prefix?"] = GraceBlock_lift;
                block1397.receiver = this;
                block1397.className = 'block<kitty:421>';
                block1397.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 418
                  var if1398 = var_done;
                  lineNumber = 415
                  var call1399 = callmethod(var_entity,"mouseUp", [0]);
                  if (Grace_isTrue(call1399)) {
                    lineNumber = 417
                    throw new ReturnException(var_done, returnTarget);
                  }
                  return if1398;
                };
                var call1400 = callmethod(Grace_prelude,"for()do", [1, 1], call1396, block1397);
                lineNumber = 421
                onSelf = true;
                var call1401 = callmethod(this, "mouseUp", [0]);
                return call1401;
              };
              var_mouseUpListener = block1395;
              lineNumber = 423
              var string1402 = new GraceString("mouseup");
              onSelf = true;
              var call1403 = callmethod(this, "canvas", [0]);
              var call1404 = callmethod(call1403,"addEventListener", [2], string1402, var_mouseUpListener);
              lineNumber = 440
              var block1405 = Grace_allocObject();
              block1405.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1405.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1405.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1405.methods["match"] = GraceBlock_match;
              block1405.methods["prefix?"] = GraceBlock_lift;
              block1405.receiver = this;
              block1405.className = 'block<kitty:440>';
              block1405.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 427
                lineNumber = 426
                onSelf = true;
                var call1406 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1408 = callmethod(this, "canvas", [0]);
                var call1409 = callmethod(call1408,"offsetWidth", [0]);
                onSelf = true;
                var call1411 = callmethod(this, "canvas", [0]);
                var call1412 = callmethod(call1411,"offsetLeft", [0]);
                var call1414 = callmethod(var_ev,"clientX", [0]);
                var diff1416 = callmethod(call1414, "-", [1], call1412);
                var quotient1418 = callmethod(diff1416, "/", [1], call1409);
                var prod1420 = callmethod(quotient1418, "*", [1], call1406);
                var var_x = prod1420;
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
                var call1421 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1423 = callmethod(this, "canvas", [0]);
                var call1424 = callmethod(call1423,"offsetHeight", [0]);
                onSelf = true;
                var call1426 = callmethod(this, "canvas", [0]);
                var call1427 = callmethod(call1426,"offsetTop", [0]);
                var call1429 = callmethod(var_ev,"clientY", [0]);
                var diff1431 = callmethod(call1429, "-", [1], call1427);
                var quotient1433 = callmethod(diff1431, "/", [1], call1424);
                var prod1435 = callmethod(quotient1433, "*", [1], call1421);
                var var_y = prod1435;
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
                var call1436 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1437 = callmethod(var_mouse,"position:=", [1], call1436);
                lineNumber = 431
                onSelf = true;
                var call1438 = callmethod(this, "entities", [0]);
                lineNumber = 438
                var block1439 = Grace_allocObject();
                block1439.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1439.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1439.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1439.methods["match"] = GraceBlock_match;
                block1439.methods["prefix?"] = GraceBlock_lift;
                block1439.receiver = this;
                block1439.className = 'block<kitty:438>';
                block1439.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 435
                  var if1440 = var_done;
                  lineNumber = 432
                  var call1441 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1441)) {
                    lineNumber = 434
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 435
                  var call1442 = callmethod(var_entity,"mouseExit", [0]);
                  return call1442;
                };
                var call1443 = callmethod(Grace_prelude,"for()do", [1, 1], call1438, block1439);
                lineNumber = 438
                var call1444 = callmethod(var_m__95__world,"mouseEnter", [0]);
                return call1444;
              };
              var_mouseMoveListener = block1405;
              lineNumber = 440
              var string1445 = new GraceString("mousemove");
              onSelf = true;
              var call1446 = callmethod(this, "canvas", [0]);
              var call1447 = callmethod(call1446,"addEventListener", [2], string1445, var_mouseMoveListener);
              lineNumber = 450
              var block1448 = Grace_allocObject();
              block1448.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1448.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1448.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1448.methods["match"] = GraceBlock_match;
              block1448.methods["prefix?"] = GraceBlock_lift;
              block1448.receiver = this;
              block1448.className = 'block<kitty:450>';
              block1448.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 448
                var if1449 = var_done;
                lineNumber = 445
                var call1451 = callmethod(var_ev,"keyCode", [0]);
                var opresult1453 = callmethod(call1451, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1453)) {
                  lineNumber = 446
                  onSelf = true;
                  var call1454 = callmethod(this, "stop", [0]);
                  if1449 = call1454;
                }
                lineNumber = 449
                lineNumber = 448
                var call1455 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1455;
                return call1455;
              };
              var_keyDownListener = block1448;
              lineNumber = 450
              var string1456 = new GraceString("keydown");
              onSelf = true;
              var call1457 = callmethod(this, "document", [0]);
              var call1458 = callmethod(call1457,"addEventListener", [2], string1456, var_keyDownListener);
              lineNumber = 456
              var block1459 = Grace_allocObject();
              block1459.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1459.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1459.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1459.methods["match"] = GraceBlock_match;
              block1459.methods["prefix?"] = GraceBlock_lift;
              block1459.receiver = this;
              block1459.className = 'block<kitty:456>';
              block1459.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 455
                lineNumber = 454
                var call1460 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1460;
                return call1460;
              };
              var_keyUpListener = block1459;
              lineNumber = 456
              var string1461 = new GraceString("keyup");
              onSelf = true;
              var call1462 = callmethod(this, "document", [0]);
              var call1463 = callmethod(call1462,"addEventListener", [2], string1461, var_keyUpListener);
              lineNumber = 458
              lineNumber = 448
              lineNumber = 458
              var string1464 = new GraceString("canvas");
              var call1465 = callmethod(var_dom,"document", [0]);
              var call1466 = callmethod(call1465,"createElement", [1], string1464);
              onSelf = true;
              var call1467 = callmethod(this, "backingCanvas:=", [1], call1466);
              lineNumber = 460
              lineNumber = 458
              lineNumber = 459
              onSelf = true;
              var call1468 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1469 = callmethod(this, "backingCanvas", [0]);
              var call1470 = callmethod(call1469,"height:=", [1], call1468);
              lineNumber = 461
              lineNumber = 458
              lineNumber = 460
              onSelf = true;
              var call1471 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1472 = callmethod(this, "backingCanvas", [0]);
              var call1473 = callmethod(call1472,"width:=", [1], call1471);
              lineNumber = 461
              lineNumber = 458
              lineNumber = 461
              var string1474 = new GraceString("2d");
              onSelf = true;
              var call1475 = callmethod(this, "backingCanvas", [0]);
              var call1476 = callmethod(call1475,"getContext", [1], string1474);
              onSelf = true;
              var call1477 = callmethod(this, "backingContext:=", [1], call1476);
              lineNumber = 462
              lineNumber = 458
              lineNumber = 462
              var string1478 = new GraceString("2d");
              onSelf = true;
              var call1479 = callmethod(this, "canvas", [0]);
              var call1480 = callmethod(call1479,"getContext", [1], string1478);
              onSelf = true;
              var call1481 = callmethod(this, "mctx:=", [1], call1480);
              lineNumber = 465
              var string1482 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1483 = callmethod(this, "setBackground", [1], string1482);
              lineNumber = 468
              var call1484 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1485 = callmethod(call1484, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1486 = callmethod(call1485, "setWorld", [1], this);
              lineNumber = 471
              lineNumber = 470
              var_kitten = this;
              lineNumber = 472
              lineNumber = 468
              lineNumber = 471
              var bool1487 = new GraceBoolean(true)
              onSelf = true;
              var call1488 = callmethod(this, "isInit:=", [1], bool1487);
              return call1488
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1368.paramCounts = [
            0,
          ];
          func1368.variableArities = [
            false,
          ];
          obj1366.methods["init"] = func1368;
          func1368.definitionLine = 383;
          func1368.definitionModule = "kitty";
          var func1489 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1489.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 478
              lineNumber = 468
              lineNumber = 477
              var bool1490 = new GraceBoolean(true)
              onSelf = true;
              var call1491 = callmethod(this, "isRunning:=", [1], bool1490);
              lineNumber = 478
              var block1492 = Grace_allocObject();
              block1492.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1492.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1492.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1492.methods["match"] = GraceBlock_match;
              block1492.methods["prefix?"] = GraceBlock_lift;
              block1492.receiver = this;
              block1492.className = 'block<kitty:478>';
              block1492.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1493 = callmethod(this, "isRunning", [0]);
                return call1493;
              };
              lineNumber = 482
              var block1494 = Grace_allocObject();
              block1494.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1494.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1494.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1494.methods["match"] = GraceBlock_match;
              block1494.methods["prefix?"] = GraceBlock_lift;
              block1494.receiver = this;
              block1494.className = 'block<kitty:482>';
              block1494.real = function(
              ) {
                sourceObject = this;
                lineNumber = 479
                onSelf = true;
                var call1495 = callmethod(this, "tick", [0]);
                return call1495;
              };
              lineNumber = 478
              var call1496 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1492, new GraceNum(10), block1494);
              return call1496
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1489.paramCounts = [
            0,
          ];
          func1489.variableArities = [
            false,
          ];
          obj1366.methods["start"] = func1489;
          func1489.definitionLine = 475;
          func1489.definitionModule = "kitty";
          var func1497 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1497.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 491
              lineNumber = 468
              lineNumber = 490
              onSelf = true;
              var call1498 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1499 = callmethod(this, "mctx", [0]);
              var call1500 = callmethod(call1499,"fillStyle:=", [1], call1498);
              lineNumber = 491
              onSelf = true;
              var call1501 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1502 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1503 = callmethod(this, "mctx", [0]);
              var call1504 = callmethod(call1503,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1501, call1502);
              lineNumber = 492
              onSelf = true;
              var call1505 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1506 = callmethod(this, "mctx", [0]);
              var call1507 = callmethod(call1506,"drawImage", [3], call1505, new GraceNum(0), new GraceNum(0));
              lineNumber = 493
              onSelf = true;
              var call1508 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1510 = callmethod(this, "canvasWidth", [0]);
              var quotient1512 = callmethod(call1510, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1514 = callmethod(this, "canvasHeight", [0]);
              var quotient1516 = callmethod(call1514, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1517 = callmethod(this, "background", [0]);
              var call1518 = callmethod(call1517,"draw", [4], call1508, quotient1512, quotient1516, new GraceNum(0));
              lineNumber = 496
              onSelf = true;
              var call1519 = callmethod(this, "updateAction", [0]);
              var call1520 = callmethod(call1519,"apply", [0]);
              lineNumber = 499
              onSelf = true;
              var call1521 = callmethod(this, "entities", [0]);
              lineNumber = 506
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
              block1522.className = 'block<kitty:506>';
              block1522.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 500
                var call1523 = callmethod(var_entity,"tick", [0]);
                lineNumber = 502
                onSelf = true;
                var call1524 = callmethod(this, "mctx", [0]);
                var call1525 = callmethod(var_entity,"draw", [3], call1524, new GraceNum(0), new GraceNum(0));
                return call1525;
              };
              var call1526 = callmethod(Grace_prelude,"for()do", [1, 1], call1521, block1522);
              return call1526
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1497.paramCounts = [
            0,
          ];
          func1497.variableArities = [
            false,
          ];
          obj1366.methods["tick"] = func1497;
          func1497.definitionLine = 485;
          func1497.definitionModule = "kitty";
          var func1527 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1527.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 509
              var string1528 = new GraceString("WORLD STOPPING...");
              var call1529 = Grace_print(string1528);
              lineNumber = 511
              lineNumber = 500
              lineNumber = 510
              var bool1530 = new GraceBoolean(false)
              onSelf = true;
              var call1531 = callmethod(this, "isRunning:=", [1], bool1530);
              lineNumber = 511
              onSelf = true;
              var call1532 = callmethod(this, "destroyAction", [0]);
              var call1533 = callmethod(call1532,"apply", [0]);
              lineNumber = 512
              onSelf = true;
              var call1534 = callmethod(this, "entities", [0]);
              lineNumber = 515
              var block1535 = Grace_allocObject();
              block1535.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1535.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1535.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1535.methods["match"] = GraceBlock_match;
              block1535.methods["prefix?"] = GraceBlock_lift;
              block1535.receiver = this;
              block1535.className = 'block<kitty:515>';
              block1535.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 513
                var call1536 = callmethod(var_entity,"kill", [0]);
                return call1536;
              };
              var call1537 = callmethod(Grace_prelude,"for()do", [1, 1], call1534, block1535);
              lineNumber = 515
              var string1538 = new GraceString("mousedown");
              onSelf = true;
              var call1539 = callmethod(this, "canvas", [0]);
              var call1540 = callmethod(call1539,"removeEventListener", [2], string1538, var_mouseDownListener);
              lineNumber = 516
              var string1541 = new GraceString("mouseup");
              onSelf = true;
              var call1542 = callmethod(this, "canvas", [0]);
              var call1543 = callmethod(call1542,"removeEventListener", [2], string1541, var_mouseUpListener);
              lineNumber = 517
              var string1544 = new GraceString("mousemove");
              onSelf = true;
              var call1545 = callmethod(this, "canvas", [0]);
              var call1546 = callmethod(call1545,"removeEventListener", [2], string1544, var_mouseMoveListener);
              lineNumber = 518
              var string1547 = new GraceString("keydown");
              onSelf = true;
              var call1548 = callmethod(this, "document", [0]);
              var call1549 = callmethod(call1548,"removeEventListener", [2], string1547, var_keyDownListener);
              lineNumber = 519
              var string1550 = new GraceString("keyup");
              onSelf = true;
              var call1551 = callmethod(this, "document", [0]);
              var call1552 = callmethod(call1551,"removeEventListener", [2], string1550, var_keyUpListener);
              return call1552
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1527.paramCounts = [
            0,
          ];
          func1527.variableArities = [
            false,
          ];
          obj1366.methods["stop"] = func1527;
          func1527.definitionLine = 508;
          func1527.definitionModule = "kitty";
          var func1553 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1553.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 526
              var if1554 = var_done;
              lineNumber = 523
              onSelf = true;
              var call1555 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1555)) {
                lineNumber = 524
                onSelf = true;
                var call1556 = callmethod(this, "mouseDownAction", [0]);
                var call1557 = callmethod(call1556,"apply", [0]);
                if1554 = call1557;
              }
              return if1554
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1553.paramCounts = [
            0,
          ];
          func1553.variableArities = [
            false,
          ];
          obj1366.methods["mouseDown"] = func1553;
          func1553.definitionLine = 522;
          func1553.definitionModule = "kitty";
          var func1558 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 532
              var if1559 = var_done;
              lineNumber = 529
              onSelf = true;
              var call1560 = callmethod(this, "mouseOver", [0]);
              var call1561 = callmethod(call1560,"prefix!", [0]);
              if (Grace_isTrue(call1561)) {
                lineNumber = 530
                onSelf = true;
                var call1562 = callmethod(this, "mouseUpAction", [0]);
                var call1563 = callmethod(call1562,"apply", [0]);
                if1559 = call1563;
              }
              return if1559
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1558.paramCounts = [
            0,
          ];
          func1558.variableArities = [
            false,
          ];
          obj1366.methods["mouseUp"] = func1558;
          func1558.definitionLine = 528;
          func1558.definitionModule = "kitty";
          var func1564 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1564.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 538
              var if1565 = var_done;
              lineNumber = 535
              onSelf = true;
              var call1566 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1566)) {
                lineNumber = 537
                lineNumber = 536
                var bool1567 = new GraceBoolean(false)
                return bool1567
              }
              lineNumber = 538
              lineNumber = 539
              var call1568 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1569 = callmethod(this, "width", [0]);
              var call1570 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1569);
              lineNumber = 540
              onSelf = true;
              var call1571 = callmethod(this, "width", [0]);
              var call1572 = callmethod(var_Point,"x()y", [1, 1], call1571, new GraceNum(0));
              onSelf = true;
              var call1573 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1574 = callmethod(this, "height", [0]);
              var call1575 = callmethod(var_Point,"x()y", [1, 1], call1573, call1574);
              lineNumber = 538
              var call1576 = callmethod(var_collections,"list", [0]);
              var call1577 = callmethod(call1576,"new", [4], call1568, call1570, call1572, call1575);
              var var_poly = call1577;
              lineNumber = 538;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 546
              var if1578 = var_done;
              lineNumber = 542
              var call1579 = callmethod(var_mouse,"location", [0]);
              var call1580 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1581 = callmethod(call1580, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1582 = callmethod(call1581, "pointInPolygon", [2], call1579, var_poly);
              if (Grace_isTrue(call1582)) {
                lineNumber = 543
                onSelf = true;
                var call1583 = callmethod(this, "mouseEnterAction", [0]);
                var call1584 = callmethod(call1583,"apply", [0]);
                lineNumber = 545
                lineNumber = 543
                lineNumber = 544
                var bool1585 = new GraceBoolean(true)
                onSelf = true;
                var call1586 = callmethod(this, "mouseOver:=", [1], bool1585);
                if1578 = call1586;
              }
              return if1578
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1564.paramCounts = [
            0,
          ];
          func1564.variableArities = [
            false,
          ];
          obj1366.methods["mouseEnter"] = func1564;
          func1564.definitionLine = 534;
          func1564.definitionModule = "kitty";
          var func1587 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1587.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 552
              var if1588 = var_done;
              lineNumber = 549
              onSelf = true;
              var call1589 = callmethod(this, "mouseOver", [0]);
              var call1590 = callmethod(call1589,"prefix!", [0]);
              if (Grace_isTrue(call1590)) {
                lineNumber = 551
                lineNumber = 550
                var bool1591 = new GraceBoolean(false)
                return bool1591
              }
              lineNumber = 552
              lineNumber = 553
              var call1592 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1593 = callmethod(this, "width", [0]);
              var call1594 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1593);
              lineNumber = 554
              onSelf = true;
              var call1595 = callmethod(this, "width", [0]);
              var call1596 = callmethod(var_Point,"x()y", [1, 1], call1595, new GraceNum(0));
              onSelf = true;
              var call1597 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1598 = callmethod(this, "height", [0]);
              var call1599 = callmethod(var_Point,"x()y", [1, 1], call1597, call1598);
              lineNumber = 552
              var call1600 = callmethod(var_collections,"list", [0]);
              var call1601 = callmethod(call1600,"new", [4], call1592, call1594, call1596, call1599);
              var var_poly = call1601;
              lineNumber = 552;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 560
              var if1602 = var_done;
              lineNumber = 556
              onSelf = true;
              var call1603 = callmethod(this, "mouseOver", [0]);
              var call1605 = callmethod(var_mouse,"location", [0]);
              var call1606 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1607 = callmethod(call1606, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1608 = callmethod(call1607, "pointInPolygon", [2], call1605, var_poly);
              var call1609 = callmethod(call1608,"prefix!", [0]);
              var opresult1611 = callmethod(call1609, "&&", [1], call1603);
              if (Grace_isTrue(opresult1611)) {
                lineNumber = 557
                onSelf = true;
                var call1612 = callmethod(this, "mouseExitAction", [0]);
                var call1613 = callmethod(call1612,"apply", [0]);
                lineNumber = 559
                lineNumber = 557
                lineNumber = 558
                var bool1614 = new GraceBoolean(false)
                onSelf = true;
                var call1615 = callmethod(this, "mouseOver:=", [1], bool1614);
                if1602 = call1615;
              }
              return if1602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1587.paramCounts = [
            0,
          ];
          func1587.variableArities = [
            false,
          ];
          obj1366.methods["mouseExit"] = func1587;
          func1587.definitionLine = 548;
          func1587.definitionModule = "kitty";
          var func1616 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1616.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 563
              lineNumber = 557
              lineNumber = 563
              onSelf = true;
              var call1617 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1618 = callmethod(this, "canvasHeight", [0]);
              var call1619 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1620 = callmethod(call1619, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1621 = callmethod(call1620, "Image()width()height", [1, 1, 1], var_url, call1617, call1618);
              onSelf = true;
              var call1622 = callmethod(this, "background:=", [1], call1621);
              return call1622
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1616.paramCounts = [
            1,
          ];
          func1616.variableArities = [
            false,
          ];
          obj1366.methods["setBackground"] = func1616;
          func1616.definitionLine = 562;
          func1616.definitionModule = "kitty";
          var func1623 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 567
              onSelf = true;
              var call1624 = callmethod(this, "entities", [0]);
              var call1625 = callmethod(call1624,"push", [1], var_e);
              return call1625
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1623.paramCounts = [
            1,
          ];
          func1623.variableArities = [
            false,
          ];
          obj1366.methods["addEntity"] = func1623;
          func1623.definitionLine = 566;
          func1623.definitionModule = "kitty";
          var func1626 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1626.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 572
              lineNumber = 571
              onSelf = true;
              var call1627 = callmethod(this, "mctx", [0]);
              return call1627
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1626.paramCounts = [
            0,
          ];
          func1626.variableArities = [
            false,
          ];
          obj1366.methods["getContext"] = func1626;
          func1626.definitionLine = 570;
          func1626.definitionModule = "kitty";
          var func1628 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 576
              lineNumber = 575
              onSelf = true;
              var call1629 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1631 = callmethod(this, "canvasWidth", [0]);
              var quotient1633 = callmethod(call1631, "/", [1], call1629);
              return quotient1633
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1628.paramCounts = [
            0,
          ];
          func1628.variableArities = [
            false,
          ];
          obj1366.methods["moveWidthMultipler"] = func1628;
          func1628.definitionLine = 574;
          func1628.definitionModule = "kitty";
          var func1634 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 580
              lineNumber = 579
              onSelf = true;
              var call1635 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1637 = callmethod(this, "canvasHeight", [0]);
              var quotient1639 = callmethod(call1637, "/", [1], call1635);
              return quotient1639
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1634.paramCounts = [
            0,
          ];
          func1634.variableArities = [
            false,
          ];
          obj1366.methods["moveHeightMultipler"] = func1634;
          func1634.definitionLine = 578;
          func1634.definitionModule = "kitty";
          var func1640 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1640.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 585
              lineNumber = 563
              lineNumber = 584
              onSelf = true;
              var call1641 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1641
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1640.paramCounts = [
            1,
          ];
          func1640.variableArities = [
            false,
          ];
          obj1366.methods["setUpdateAction"] = func1640;
          func1640.definitionLine = 583;
          func1640.definitionModule = "kitty";
          var func1642 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 589
              lineNumber = 563
              lineNumber = 588
              onSelf = true;
              var call1643 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1643
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1642.paramCounts = [
            1,
          ];
          func1642.variableArities = [
            false,
          ];
          obj1366.methods["setDestroyAction"] = func1642;
          func1642.definitionLine = 587;
          func1642.definitionModule = "kitty";
          var func1644 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1644.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 593
              lineNumber = 563
              lineNumber = 592
              onSelf = true;
              var call1645 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1645
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1644.paramCounts = [
            1,
          ];
          func1644.variableArities = [
            false,
          ];
          obj1366.methods["setMouseDownAction"] = func1644;
          func1644.definitionLine = 591;
          func1644.definitionModule = "kitty";
          var func1646 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1646.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 597
              lineNumber = 563
              lineNumber = 596
              onSelf = true;
              var call1647 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1647
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1646.paramCounts = [
            1,
          ];
          func1646.variableArities = [
            false,
          ];
          obj1366.methods["setMouseUpAction"] = func1646;
          func1646.definitionLine = 595;
          func1646.definitionModule = "kitty";
          var func1648 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1648.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 601
              lineNumber = 563
              lineNumber = 600
              onSelf = true;
              var call1649 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1649
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1648.paramCounts = [
            1,
          ];
          func1648.variableArities = [
            false,
          ];
          obj1366.methods["setMouseEnterAction"] = func1648;
          func1648.definitionLine = 599;
          func1648.definitionModule = "kitty";
          var func1650 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1650.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 604
              var string1651 = new GraceString("*Drag Not Available For World*");
              var call1652 = Grace_print(string1651);
              return call1652
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1650.paramCounts = [
            1,
          ];
          func1650.variableArities = [
            false,
          ];
          obj1366.methods["setMouseDragAction"] = func1650;
          func1650.definitionLine = 603;
          func1650.definitionModule = "kitty";
          var func1653 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1653.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 609
              lineNumber = 563
              lineNumber = 608
              onSelf = true;
              var call1654 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1654
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1653.paramCounts = [
            1,
          ];
          func1653.variableArities = [
            false,
          ];
          obj1366.methods["setMouseOverAction"] = func1653;
          func1653.definitionLine = 607;
          func1653.definitionModule = "kitty";
          var func1655 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1655.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 613
              lineNumber = 563
              lineNumber = 612
              onSelf = true;
              var call1656 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1656
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1655.paramCounts = [
            1,
          ];
          func1655.variableArities = [
            false,
          ];
          obj1366.methods["setMouseExitAction"] = func1655;
          func1655.definitionLine = 611;
          func1655.definitionModule = "kitty";
          sourceObject = obj1366;
          lineNumber = 346
          obj1366.data["width"] = var_width__39__;
          var reader_kitty_width_1657 = function() {
            return this.data["width"];
          }
          obj1366.methods["width"] = reader_kitty_width_1657;
          obj1366.data["width"] = var_width__39__;
          var writer_kitty_width_1657 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1366.methods["width:="] = writer_kitty_width_1657;
          lineNumber = 347;
          moduleName = "kitty";
          lineNumber = 346
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 347
          obj1366.data["height"] = var_height__39__;
          var reader_kitty_height_1658 = function() {
            return this.data["height"];
          }
          obj1366.methods["height"] = reader_kitty_height_1658;
          obj1366.data["height"] = var_height__39__;
          var writer_kitty_height_1658 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1366.methods["height:="] = writer_kitty_height_1658;
          lineNumber = 348;
          moduleName = "kitty";
          lineNumber = 347
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 348
          obj1366.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1659 = function() {
            return this.data["tag"];
          }
          obj1366.methods["tag"] = reader_kitty_tag_1659;
          obj1366.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1659 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1366.methods["tag:="] = writer_kitty_tag_1659;
          lineNumber = 350;
          moduleName = "kitty";
          lineNumber = 348
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["background"] = undefined;
          var reader_kitty_background_1660 = function() {
            return this.data["background"];
          }
          obj1366.methods["background"] = reader_kitty_background_1660;
          obj1366.data["background"] = undefined;
          var writer_kitty_background_1660 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1366.methods["background:="] = writer_kitty_background_1660;
          reader_kitty_background_1660.confidential = true;
          writer_kitty_background_1660.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 351
          var string1661 = new GraceString("black");
          obj1366.data["backgroundColour"] = string1661;
          var reader_kitty_backgroundColour_1662 = function() {
            return this.data["backgroundColour"];
          }
          obj1366.methods["backgroundColour"] = reader_kitty_backgroundColour_1662;
          obj1366.data["backgroundColour"] = string1661;
          var writer_kitty_backgroundColour_1662 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1366.methods["backgroundColour:="] = writer_kitty_backgroundColour_1662;
          reader_kitty_backgroundColour_1662.confidential = true;
          writer_kitty_backgroundColour_1662.confidential = true;
          lineNumber = 353;
          moduleName = "kitty";
          lineNumber = 351
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1661)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["document"] = undefined;
          var reader_kitty_document_1663 = function() {
            return this.data["document"];
          }
          obj1366.methods["document"] = reader_kitty_document_1663;
          obj1366.data["document"] = undefined;
          var writer_kitty_document_1663 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1366.methods["document:="] = writer_kitty_document_1663;
          reader_kitty_document_1663.confidential = true;
          writer_kitty_document_1663.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1664 = function() {
            return this.data["backingCanvas"];
          }
          obj1366.methods["backingCanvas"] = reader_kitty_backingCanvas_1664;
          obj1366.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1664 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1366.methods["backingCanvas:="] = writer_kitty_backingCanvas_1664;
          reader_kitty_backingCanvas_1664.confidential = true;
          writer_kitty_backingCanvas_1664.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1665 = function() {
            return this.data["backingContext"];
          }
          obj1366.methods["backingContext"] = reader_kitty_backingContext_1665;
          obj1366.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1665 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1366.methods["backingContext:="] = writer_kitty_backingContext_1665;
          reader_kitty_backingContext_1665.confidential = true;
          writer_kitty_backingContext_1665.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["canvas"] = undefined;
          var reader_kitty_canvas_1666 = function() {
            return this.data["canvas"];
          }
          obj1366.methods["canvas"] = reader_kitty_canvas_1666;
          obj1366.data["canvas"] = undefined;
          var writer_kitty_canvas_1666 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1366.methods["canvas:="] = writer_kitty_canvas_1666;
          reader_kitty_canvas_1666.confidential = true;
          writer_kitty_canvas_1666.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1667 = function() {
            return this.data["canvasWidth"];
          }
          obj1366.methods["canvasWidth"] = reader_kitty_canvasWidth_1667;
          obj1366.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1667 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1366.methods["canvasWidth:="] = writer_kitty_canvasWidth_1667;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1668 = function() {
            return this.data["canvasHeight"];
          }
          obj1366.methods["canvasHeight"] = reader_kitty_canvasHeight_1668;
          obj1366.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1668 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1366.methods["canvasHeight:="] = writer_kitty_canvasHeight_1668;
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 362
          var call1669 = callmethod(var_collections,"list", [0]);
          var call1670 = callmethod(call1669,"new", [0]);
          obj1366.data["entities"] = call1670;
          var reader_kitty_entities_1671 = function() {
            return this.data["entities"];
          }
          obj1366.methods["entities"] = reader_kitty_entities_1671;
          obj1366.data["entities"] = call1670;
          var writer_kitty_entities_1671 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1366.methods["entities:="] = writer_kitty_entities_1671;
          reader_kitty_entities_1671.confidential = true;
          writer_kitty_entities_1671.confidential = true;
          lineNumber = 364;
          moduleName = "kitty";
          lineNumber = 362
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 364
          var bool1672 = new GraceBoolean(false)
          obj1366.data["isInit"] = bool1672;
          var reader_kitty_isInit_1673 = function() {
            return this.data["isInit"];
          }
          obj1366.methods["isInit"] = reader_kitty_isInit_1673;
          obj1366.data["isInit"] = bool1672;
          var writer_kitty_isInit_1673 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1366.methods["isInit:="] = writer_kitty_isInit_1673;
          reader_kitty_isInit_1673.confidential = true;
          writer_kitty_isInit_1673.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1672)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 365
          var bool1674 = new GraceBoolean(false)
          obj1366.data["isRunning"] = bool1674;
          var reader_kitty_isRunning_1675 = function() {
            return this.data["isRunning"];
          }
          obj1366.methods["isRunning"] = reader_kitty_isRunning_1675;
          obj1366.data["isRunning"] = bool1674;
          var writer_kitty_isRunning_1675 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1366.methods["isRunning:="] = writer_kitty_isRunning_1675;
          reader_kitty_isRunning_1675.confidential = true;
          writer_kitty_isRunning_1675.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["mctx"] = undefined;
          var reader_kitty_mctx_1676 = function() {
            return this.data["mctx"];
          }
          obj1366.methods["mctx"] = reader_kitty_mctx_1676;
          obj1366.data["mctx"] = undefined;
          var writer_kitty_mctx_1676 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1366.methods["mctx:="] = writer_kitty_mctx_1676;
          reader_kitty_mctx_1676.confidential = true;
          writer_kitty_mctx_1676.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          obj1366.data["ent"] = undefined;
          var reader_kitty_ent_1677 = function() {
            return this.data["ent"];
          }
          obj1366.methods["ent"] = reader_kitty_ent_1677;
          obj1366.data["ent"] = undefined;
          var writer_kitty_ent_1677 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1366.methods["ent:="] = writer_kitty_ent_1677;
          reader_kitty_ent_1677.confidential = true;
          writer_kitty_ent_1677.confidential = true;
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 372
          var block1678 = Grace_allocObject();
          block1678.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1678.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1678.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1678.methods["match"] = GraceBlock_match;
          block1678.methods["prefix?"] = GraceBlock_lift;
          block1678.receiver = this;
          block1678.className = 'block<kitty:372>';
          block1678.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["updateAction"] = block1678;
          var reader_kitty_updateAction_1679 = function() {
            return this.data["updateAction"];
          }
          obj1366.methods["updateAction"] = reader_kitty_updateAction_1679;
          obj1366.data["updateAction"] = block1678;
          var writer_kitty_updateAction_1679 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1366.methods["updateAction:="] = writer_kitty_updateAction_1679;
          reader_kitty_updateAction_1679.confidential = true;
          writer_kitty_updateAction_1679.confidential = true;
          lineNumber = 372;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1678)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 373
          var block1680 = Grace_allocObject();
          block1680.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1680.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1680.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1680.methods["match"] = GraceBlock_match;
          block1680.methods["prefix?"] = GraceBlock_lift;
          block1680.receiver = this;
          block1680.className = 'block<kitty:373>';
          block1680.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["destroyAction"] = block1680;
          var reader_kitty_destroyAction_1681 = function() {
            return this.data["destroyAction"];
          }
          obj1366.methods["destroyAction"] = reader_kitty_destroyAction_1681;
          obj1366.data["destroyAction"] = block1680;
          var writer_kitty_destroyAction_1681 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1366.methods["destroyAction:="] = writer_kitty_destroyAction_1681;
          reader_kitty_destroyAction_1681.confidential = true;
          writer_kitty_destroyAction_1681.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 372
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1680)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 374
          var block1682 = Grace_allocObject();
          block1682.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1682.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1682.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1682.methods["match"] = GraceBlock_match;
          block1682.methods["prefix?"] = GraceBlock_lift;
          block1682.receiver = this;
          block1682.className = 'block<kitty:374>';
          block1682.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["mouseEnterAction"] = block1682;
          var reader_kitty_mouseEnterAction_1683 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1366.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1683;
          obj1366.data["mouseEnterAction"] = block1682;
          var writer_kitty_mouseEnterAction_1683 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1366.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1683;
          reader_kitty_mouseEnterAction_1683.confidential = true;
          writer_kitty_mouseEnterAction_1683.confidential = true;
          lineNumber = 374;
          moduleName = "kitty";
          lineNumber = 373
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1682)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 375
          var block1684 = Grace_allocObject();
          block1684.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1684.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1684.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1684.methods["match"] = GraceBlock_match;
          block1684.methods["prefix?"] = GraceBlock_lift;
          block1684.receiver = this;
          block1684.className = 'block<kitty:375>';
          block1684.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["mouseOverAction"] = block1684;
          var reader_kitty_mouseOverAction_1685 = function() {
            return this.data["mouseOverAction"];
          }
          obj1366.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1685;
          obj1366.data["mouseOverAction"] = block1684;
          var writer_kitty_mouseOverAction_1685 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1366.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1685;
          reader_kitty_mouseOverAction_1685.confidential = true;
          writer_kitty_mouseOverAction_1685.confidential = true;
          lineNumber = 375;
          moduleName = "kitty";
          lineNumber = 374
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1684)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 376
          var block1686 = Grace_allocObject();
          block1686.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1686.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1686.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1686.methods["match"] = GraceBlock_match;
          block1686.methods["prefix?"] = GraceBlock_lift;
          block1686.receiver = this;
          block1686.className = 'block<kitty:376>';
          block1686.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["mouseExitAction"] = block1686;
          var reader_kitty_mouseExitAction_1687 = function() {
            return this.data["mouseExitAction"];
          }
          obj1366.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1687;
          obj1366.data["mouseExitAction"] = block1686;
          var writer_kitty_mouseExitAction_1687 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1366.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1687;
          reader_kitty_mouseExitAction_1687.confidential = true;
          writer_kitty_mouseExitAction_1687.confidential = true;
          lineNumber = 376;
          moduleName = "kitty";
          lineNumber = 375
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1686)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 377
          var block1688 = Grace_allocObject();
          block1688.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1688.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1688.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1688.methods["match"] = GraceBlock_match;
          block1688.methods["prefix?"] = GraceBlock_lift;
          block1688.receiver = this;
          block1688.className = 'block<kitty:377>';
          block1688.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["mouseDownAction"] = block1688;
          var reader_kitty_mouseDownAction_1689 = function() {
            return this.data["mouseDownAction"];
          }
          obj1366.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1689;
          obj1366.data["mouseDownAction"] = block1688;
          var writer_kitty_mouseDownAction_1689 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1366.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1689;
          reader_kitty_mouseDownAction_1689.confidential = true;
          writer_kitty_mouseDownAction_1689.confidential = true;
          lineNumber = 377;
          moduleName = "kitty";
          lineNumber = 376
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1688)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 378
          var block1690 = Grace_allocObject();
          block1690.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1690.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1690.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1690.methods["match"] = GraceBlock_match;
          block1690.methods["prefix?"] = GraceBlock_lift;
          block1690.receiver = this;
          block1690.className = 'block<kitty:378>';
          block1690.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1366.data["mouseUpAction"] = block1690;
          var reader_kitty_mouseUpAction_1691 = function() {
            return this.data["mouseUpAction"];
          }
          obj1366.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1691;
          obj1366.data["mouseUpAction"] = block1690;
          var writer_kitty_mouseUpAction_1691 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1366.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1691;
          reader_kitty_mouseUpAction_1691.confidential = true;
          writer_kitty_mouseUpAction_1691.confidential = true;
          lineNumber = 378;
          moduleName = "kitty";
          lineNumber = 377
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1690)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 378
          var bool1692 = new GraceBoolean(false)
          obj1366.data["mouseOver"] = bool1692;
          var reader_kitty_mouseOver_1693 = function() {
            return this.data["mouseOver"];
          }
          obj1366.methods["mouseOver"] = reader_kitty_mouseOver_1693;
          obj1366.data["mouseOver"] = bool1692;
          var writer_kitty_mouseOver_1693 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1366.methods["mouseOver:="] = writer_kitty_mouseOver_1693;
          reader_kitty_mouseOver_1693.confidential = true;
          writer_kitty_mouseOver_1693.confidential = true;
          lineNumber = 380;
          moduleName = "kitty";
          lineNumber = 378
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1692)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1366.mutable = true;
          sourceObject = obj1366;
          lineNumber = 380
          onSelf = true;
          var call1694 = callmethod(this, "init", [0]);
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          sourceObject = obj1366;
          superDepth = origSuperDepth;
        }
        obj_init_1366.apply(inheritingObject, []);
        return obj1366
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1033.methods["new()object"] = func1365;
    var func1695 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 343
        var string1696 = new GraceString("class KittyWorld");
        return string1696
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1695.paramCounts = [
    ];
    func1695.variableArities = [
    ];
    obj1033.methods["asDebugString"] = func1695;
    func1695.definitionLine = 343;
    func1695.definitionModule = "kitty";
    sourceObject = obj1033;
    sourceObject = obj1033;
    superDepth = origSuperDepth;
  }
  obj_init_1033.apply(obj1033, []);
  var var_KittyWorld = obj1033;
  lineNumber = 618
  lineNumber = 627
  lineNumber = 661
  lineNumber = 676
  lineNumber = 680
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "classes:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nconfidential:\nfresh:World()width()height:\n canvas:=\n backingContext\n addEntity\n entities:=\n mouseOver:=\n isRunning\n setMouseDownAction\n setUpdateAction\n setMouseEnterAction\n canvasWidth:=\n mouseExitAction:=\n height\n destroyAction:=\n backingCanvas:=\n mouseUpAction:=\n entities\n backingCanvas\n init\n canvasHeight\n mouseDownAction:=\n updateAction:=\n mouseEnterAction:=\n mouseDownAction\n width\n stop\n tick\n moveHeightMultipler\n mctx\n setMouseExitAction\n start\n setMouseDragAction\n backgroundColour\n moveWidthMultipler\n width:=\n ent:=\n isRunning:=\n mouseOver\n ent\n background:=\n setBackground\n height:=\n mctx:=\n tag\n mouseExitAction\n backingContext:=\n backgroundColour:=\n canvasHeight:=\n setMouseOverAction\n setDestroyAction\n setMouseUpAction\n canvas\n updateAction\n mouseExit\n mouseEnterAction\n isInit:=\n mouseUp\n tag:=\n getContext\n isInit\n document:=\n mouseOverAction:=\n canvasWidth\n document\n mouseDown\n mouseOverAction\n background\n mouseEnter\n destroyAction\n mouseUpAction\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\n width\nconstructors-of:Point:\n x()y\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyWorld.new:\n canvas:=\n backingContext\n stop\n entities:=\n mouseOver:=\n isRunning\n setMouseDownAction\n setUpdateAction\n setMouseEnterAction\n canvasWidth:=\n mouseExitAction:=\n height\n destroyAction:=\n backingCanvas:=\n mouseUpAction:=\n entities\n backingContext:=\n init\n canvasHeight\n mouseDownAction:=\n updateAction:=\n mouseEnterAction:=\n mouseDownAction\n width\n addEntity\n tick\n moveHeightMultipler\n mctx\n setMouseExitAction\n start\n setMouseDragAction\n backgroundColour\n moveWidthMultipler\n width:=\n ent:=\n isRunning:=\n mouseOver\n ent\n background:=\n setBackground\n height:=\n mctx:=\n tag\n mouseExitAction\n backingCanvas\n backgroundColour:=\n canvasHeight:=\n setMouseOverAction\n setDestroyAction\n setMouseUpAction\n canvas\n updateAction\n mouseExit\n mouseEnterAction\n isInit:=\n mouseUp\n tag:=\n background\n isInit\n document:=\n mouseOverAction:=\n canvasWidth\n document\n mouseDown\n mouseOverAction\n getContext\n mouseEnter\n destroyAction\n mouseUpAction\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n height\n width:=\n imgTag\n getTag\n elements\n width\nconstructors-of:KittyWorld:\n new\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nmethods-of:KittyEntity.new:\n mouseExit\n setMouseDragAction\n mouseDragStart\n getX\n tag\n mouseOver:=\n mouseDownEntity\n posX:=\n setX\n mouseOver\n tick\n awake\n setMouseDownAction\n kill\n setUpdateAction\n draw\n rotation\n setMouseEnterAction\n strafe\n move\n mouseExitAction:=\n mouseDragAction:=\n destroyAction:=\n mouseExitAction\n mouseUpAction:=\n mouseDragAction\n setMouseOverAction\n setDestroyAction\n mouseDownEntity:=\n mouseDownAction:=\n updateAction:=\n image:=\n mouseEnterAction:=\n mouseDownAction\n updateAction\n posY:=\n image\n mouseEnterAction\n rotation:=\n turn\n posX\n posY\n setMouseUpAction\n mouseUp\n getRotation\n setImage\n tag:=\n getY\n mouseOverAction:=\n setY\n mouseDown\n mouseOverAction\n setLocation\n mouseEnter\n destroyAction\n mouseUpAction\n createImage\n mouseDragStart:=\n setMouseExitAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:Point.x()y:\n right\n up\n x\n y\n left\n down\nfresh:Entity()x()y:\n image\n setMouseDragAction\n mouseDragStart\n getX\n tag\n mouseOver:=\n mouseDownEntity\n posX:=\n setX\n mouseOver\n posY\n awake\n setMouseDownAction\n kill\n setUpdateAction\n mouseUp\n rotation\n setMouseEnterAction\n strafe\n move\n mouseExitAction:=\n mouseDragAction:=\n destroyAction:=\n mouseExitAction\n mouseUpAction:=\n mouseDragAction\n setMouseOverAction\n setDestroyAction\n mouseDownEntity:=\n mouseDownAction:=\n updateAction:=\n image:=\n mouseEnterAction:=\n mouseDownAction\n updateAction\n posY:=\n mouseExit\n mouseEnterAction\n rotation:=\n turn\n posX\n tick\n setMouseUpAction\n draw\n getRotation\n setImage\n tag:=\n getY\n mouseOverAction:=\n destroyAction\n mouseDown\n mouseOverAction\n setLocation\n mouseEnter\n setY\n mouseDragStart:=\n createImage\n mouseUpAction\n setMouseExitAction\npath:\n kitty\n";
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
    "                    return",
    "                }",
    "                entity.mouseExit",
    "            }",
    "            // Can not enter world if entity is entered",
    "            m_world.mouseEnter",
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
    "        if (mouseOver) then {",
    "            mouseDownAction.apply",
    "        }",
    "    }",
    "",
    "    method mouseUp {",
    "        if (!mouseOver) then {",
    "            mouseUpAction.apply",
    "        }",
    "    }",
    "",
    "    method mouseEnter {",
    "        if (mouseOver) then {",
    "            return false",
    "        }",
    "        var poly := collections.list.new(",
    "            Point.x(0)y(0), Point.x(0)y(width),",
    "            Point.x(width)y(0), Point.x(width)y(height)",
    "        )",
    "        if (pointInPolygon(mouse.location, poly)) then {",
    "            mouseEnterAction.apply",
    "            mouseOver := true",
    "        }",
    "    }",
    "",
    "    method mouseExit {",
    "        if (!mouseOver) then {",
    "            return false",
    "        }",
    "        var poly := collections.list.new(",
    "            Point.x(0)y(0), Point.x(0)y(width),",
    "            Point.x(width)y(0), Point.x(width)y(height)",
    "        )",
    "        if (!pointInPolygon(mouse.location, poly) && mouseOver) then {",
    "            mouseExitAction.apply",
    "            mouseOver := false",
    "        }",
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
