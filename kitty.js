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
  lineNumber = 283
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
      lineNumber = 284
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 284;
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
        lineNumber = 285
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
  func8.definitionLine = 283;
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
      obj13.definitionLine = 284;
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
  lineNumber = 295
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
      lineNumber = 296
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
  func16.definitionLine = 295;
  func16.definitionModule = "kitty";
  lineNumber = 300
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
      lineNumber = 301
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
  func18.definitionLine = 300;
  func18.definitionModule = "kitty";
  lineNumber = 304
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
      lineNumber = 306
      lineNumber = 305
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
  func20.definitionLine = 304;
  func20.definitionModule = "kitty";
  lineNumber = 309
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
      lineNumber = 310
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
  func24.definitionLine = 309;
  func24.definitionModule = "kitty";
  lineNumber = 313
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
      lineNumber = 314
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
  func26.definitionLine = 313;
  func26.definitionModule = "kitty";
  lineNumber = 317
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
      lineNumber = 318
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
  func28.definitionLine = 317;
  func28.definitionModule = "kitty";
  lineNumber = 321
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
      lineNumber = 322
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
  func30.definitionLine = 321;
  func30.definitionModule = "kitty";
  lineNumber = 325
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
      lineNumber = 326
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
  func32.definitionLine = 325;
  func32.definitionModule = "kitty";
  lineNumber = 329
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
      lineNumber = 330
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
  func34.definitionLine = 329;
  func34.definitionModule = "kitty";
  lineNumber = 599
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
      lineNumber = 600
      var obj37 = Grace_allocObject();
      obj37.definitionModule = "kitty";
      obj37.definitionLine = 600;
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
        lineNumber = 601
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
  func36.definitionLine = 599;
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
      obj41.definitionLine = 600;
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
  lineNumber = 608
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
      lineNumber = 613
      lineNumber = 612
      var call45 = callmethod(var_point,"x", [0]);
      var var_x = call45;
      lineNumber = 613;
      moduleName = "kitty";
      lineNumber = 612
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 616
      lineNumber = 613
      var call46 = callmethod(var_point,"y", [0]);
      var var_y = call46;
      lineNumber = 616;
      moduleName = "kitty";
      lineNumber = 613
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 618
      lineNumber = 616
      var call47 = callmethod(var_vs,"size", [0]);
      var var_j = call47;
      lineNumber = 618;
      moduleName = "kitty";
      lineNumber = 616
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 620
      lineNumber = 618
      var bool48 = new GraceBoolean(false)
      var var_inside = bool48;
      lineNumber = 620;
      moduleName = "kitty";
      lineNumber = 618
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 620
      var call49 = callmethod(var_vs,"size", [0]);
      var opresult52 = callmethod(new GraceNum(1), "..", [1], call49);
      lineNumber = 636
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
      block53.className = 'block<kitty:636>';
      block53.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 623
        lineNumber = 622
        var call54 = callmethod(var_vs,"at", [1], var_i);
        var call55 = callmethod(call54,"x", [0]);
        var var_xi = call55;
        lineNumber = 623;
        moduleName = "kitty";
        lineNumber = 622
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 624
        lineNumber = 623
        var call56 = callmethod(var_vs,"at", [1], var_i);
        var call57 = callmethod(call56,"y", [0]);
        var var_yi = call57;
        lineNumber = 624;
        moduleName = "kitty";
        lineNumber = 623
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 625
        lineNumber = 624
        var call58 = callmethod(var_vs,"at", [1], var_j);
        var call59 = callmethod(call58,"x", [0]);
        var var_xj = call59;
        lineNumber = 625;
        moduleName = "kitty";
        lineNumber = 624
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 629
        lineNumber = 625
        var call60 = callmethod(var_vs,"at", [1], var_j);
        var call61 = callmethod(call60,"y", [0]);
        var var_yj = call61;
        lineNumber = 629;
        moduleName = "kitty";
        lineNumber = 625
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 630
        lineNumber = 629
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
        lineNumber = 630;
        moduleName = "kitty";
        lineNumber = 629
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 633
        var if95 = var_done;
        lineNumber = 630
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 632
          lineNumber = 631
          var call96 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call96;
          if95 = call96;
        }
        lineNumber = 635
        lineNumber = 633
        var_j = var_i;
        return var_i;
      };
      var call97 = callmethod(Grace_prelude,"for()do", [1, 1], opresult52, block53);
      lineNumber = 637
      lineNumber = 636
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
  func44.definitionLine = 608;
  func44.definitionModule = "kitty";
  lineNumber = 642
  var func98 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func98.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 644
      var string99 = new GraceString("CHECKING...");
      var call100 = Grace_print(string99);
      lineNumber = 651
      var if101 = var_done;
      lineNumber = 646
      var call102 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call102)) {
        lineNumber = 647
        var string103 = new GraceString("NO WORLD!!");
        var call104 = Grace_print(string103);
        lineNumber = 649
        return var_done
      }
      lineNumber = 651
      var string105 = new GraceString("STARTING...");
      var call106 = Grace_print(string105);
      lineNumber = 654
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
  func98.definitionLine = 642;
  func98.definitionModule = "kitty";
  lineNumber = 657
  var func108 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func108.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 658
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
  func108.definitionLine = 657;
  func108.definitionModule = "kitty";
  lineNumber = 661
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
      lineNumber = 663
      lineNumber = 662
      var_m__95__world = var_world__39__;
      lineNumber = 664
      lineNumber = 663
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
  func110.definitionLine = 661;
  func110.definitionModule = "kitty";
  lineNumber = 666
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
      lineNumber = 667
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
  func112.definitionLine = 666;
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
  lineNumber = 658
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
  func115.definitionLine = 658;
  func115.definitionModule = "kitty";
  lineNumber = 658
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
  func116.definitionLine = 658;
  func116.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool117 = new GraceBoolean(false)
  var var_worldSet = bool117;
  lineNumber = 658
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
  func118.definitionLine = 658;
  func118.definitionModule = "kitty";
  lineNumber = 658
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
  func119.definitionLine = 658;
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
  lineNumber = 658
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
  func120.definitionLine = 658;
  func120.definitionModule = "kitty";
  lineNumber = 658
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
  func121.definitionLine = 658;
  func121.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 658
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
  func122.definitionLine = 658;
  func122.definitionModule = "kitty";
  lineNumber = 658
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
  func123.definitionLine = 658;
  func123.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 658
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
  func124.definitionLine = 658;
  func124.definitionModule = "kitty";
  lineNumber = 658
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
  func125.definitionLine = 658;
  func125.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseUpListener;
  lineNumber = 658
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
  func126.definitionLine = 658;
  func126.definitionModule = "kitty";
  lineNumber = 658
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
  func127.definitionLine = 658;
  func127.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseMoveListener;
  lineNumber = 658
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
  func128.definitionLine = 658;
  func128.definitionModule = "kitty";
  lineNumber = 658
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
  func129.definitionLine = 658;
  func129.definitionModule = "kitty";
  lineNumber = 18
  lineNumber = 17
  var call130 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call130;
  lineNumber = 658
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
  func131.definitionLine = 658;
  func131.definitionModule = "kitty";
  lineNumber = 658
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
  func132.definitionLine = 658;
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
  lineNumber = 658
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
  func134.definitionLine = 658;
  func134.definitionModule = "kitty";
  lineNumber = 658
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
  func135.definitionLine = 658;
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
              lineNumber = 121
              var string335 = new GraceString("realyee.png");
              onSelf = true;
              var call336 = callmethod(this, "createImage", [1], string335);
              lineNumber = 123
              lineNumber = 122
              var_kitten = this;
              lineNumber = 123
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
          func334.definitionLine = 120;
          func334.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              onSelf = true;
              var call339 = callmethod(this, "updateAction", [0]);
              var call340 = callmethod(call339,"apply", [0]);
              lineNumber = 131
              var if341 = var_done;
              lineNumber = 128
              onSelf = true;
              var call342 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call342)) {
                lineNumber = 129
                onSelf = true;
                var call343 = callmethod(this, "mouseOverAction", [0]);
                var call344 = callmethod(call343,"apply", [0]);
                if341 = call344;
              }
              lineNumber = 134
              var if345 = var_done;
              lineNumber = 131
              onSelf = true;
              var call346 = callmethod(this, "mouseDragStart", [0]);
              var call348 = callmethod(var_mouse,"position", [0]);
              var opresult350 = callmethod(call348, "!=", [1], call346);
              onSelf = true;
              var call352 = callmethod(this, "mouseDownEntity", [0]);
              onSelf = true;
              var call354 = callmethod(this, "mouseOver", [0]);
              var opresult356 = callmethod(call354, "&&", [1], call352);
              var opresult358 = callmethod(opresult356, "&&", [1], opresult350);
              if (Grace_isTrue(opresult358)) {
                lineNumber = 132
                onSelf = true;
                var call359 = callmethod(this, "mouseDragAction", [0]);
                var call360 = callmethod(call359,"apply", [0]);
                if345 = call360;
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
          func338.definitionLine = 126;
          func338.definitionModule = "kitty";
          var func361 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func361.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              onSelf = true;
              var call362 = callmethod(this, "destroyAction", [0]);
              var call363 = callmethod(call362,"apply", [0]);
              return call363
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func361.paramCounts = [
            0,
          ];
          func361.variableArities = [
            false,
          ];
          obj332.methods["kill"] = func361;
          func361.definitionLine = 136;
          func361.definitionModule = "kitty";
          var func364 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func364.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              var if365 = var_done;
              lineNumber = 142
              onSelf = true;
              var call366 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call366)) {
                lineNumber = 144
                lineNumber = 137
                lineNumber = 143
                var call367 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call368 = callmethod(this, "mouseDragStart:=", [1], call367);
                lineNumber = 144
                onSelf = true;
                var call369 = callmethod(this, "mouseDownAction", [0]);
                var call370 = callmethod(call369,"apply", [0]);
                lineNumber = 146
                lineNumber = 144
                lineNumber = 145
                var bool371 = new GraceBoolean(true)
                onSelf = true;
                var call372 = callmethod(this, "mouseDownEntity:=", [1], bool371);
                lineNumber = 147
                lineNumber = 146
                var bool373 = new GraceBoolean(true)
                return bool373
              }
              return if365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func364.paramCounts = [
            0,
          ];
          func364.variableArities = [
            false,
          ];
          obj332.methods["mouseDown"] = func364;
          func364.definitionLine = 141;
          func364.definitionModule = "kitty";
          var func374 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 157
              var if375 = var_done;
              lineNumber = 151
              onSelf = true;
              var call376 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call376)) {
                lineNumber = 153
                lineNumber = 144
                lineNumber = 152
                var call377 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call378 = callmethod(this, "mouseDragStart:=", [1], call377);
                lineNumber = 153
                onSelf = true;
                var call379 = callmethod(this, "mouseUpAction", [0]);
                var call380 = callmethod(call379,"apply", [0]);
                lineNumber = 155
                lineNumber = 153
                lineNumber = 154
                var bool381 = new GraceBoolean(false)
                onSelf = true;
                var call382 = callmethod(this, "mouseDownEntity:=", [1], bool381);
                lineNumber = 156
                lineNumber = 155
                var bool383 = new GraceBoolean(true)
                return bool383
              }
              return if375
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func374.paramCounts = [
            0,
          ];
          func374.variableArities = [
            false,
          ];
          obj332.methods["mouseUp"] = func374;
          func374.definitionLine = 150;
          func374.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var if385 = var_done;
              lineNumber = 160
              onSelf = true;
              var call386 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call386)) {
                lineNumber = 162
                lineNumber = 161
                var bool387 = new GraceBoolean(false)
                return bool387
              }
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call389 = callmethod(this, "image", [0]);
              var call390 = callmethod(call389,"width", [0]);
              var quotient392 = callmethod(call390, "/", [1], new GraceNum(2));
              var var_w = quotient392;
              lineNumber = 164;
              moduleName = "kitty";
              lineNumber = 163
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 165
              lineNumber = 164
              onSelf = true;
              var call394 = callmethod(this, "image", [0]);
              var call395 = callmethod(call394,"height", [0]);
              var quotient397 = callmethod(call395, "/", [1], new GraceNum(2));
              var var_h = quotient397;
              lineNumber = 165;
              moduleName = "kitty";
              lineNumber = 164
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 165
              lineNumber = 166
              onSelf = true;
              var call399 = callmethod(this, "posX", [0]);
              var diff401 = callmethod(call399, "-", [1], var_w);
              onSelf = true;
              var call403 = callmethod(this, "posY", [0]);
              var diff405 = callmethod(call403, "-", [1], var_h);
              var call406 = callmethod(var_Point,"x()y", [1, 1], diff401, diff405);
              onSelf = true;
              var call408 = callmethod(this, "posX", [0]);
              var diff410 = callmethod(call408, "-", [1], var_w);
              onSelf = true;
              var call412 = callmethod(this, "posY", [0]);
              var opresult414 = callmethod(call412, "+", [1], var_h);
              var call415 = callmethod(var_Point,"x()y", [1, 1], diff410, opresult414);
              lineNumber = 167
              onSelf = true;
              var call417 = callmethod(this, "posX", [0]);
              var opresult419 = callmethod(call417, "+", [1], var_w);
              onSelf = true;
              var call421 = callmethod(this, "posY", [0]);
              var opresult423 = callmethod(call421, "+", [1], var_h);
              var call424 = callmethod(var_Point,"x()y", [1, 1], opresult419, opresult423);
              onSelf = true;
              var call426 = callmethod(this, "posX", [0]);
              var opresult428 = callmethod(call426, "+", [1], var_w);
              onSelf = true;
              var call430 = callmethod(this, "posY", [0]);
              var diff432 = callmethod(call430, "-", [1], var_h);
              var call433 = callmethod(var_Point,"x()y", [1, 1], opresult428, diff432);
              lineNumber = 165
              var call434 = callmethod(var_collections,"list", [0]);
              var call435 = callmethod(call434,"new", [4], call406, call415, call424, call433);
              var var_poly = call435;
              lineNumber = 165;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 174
              var if436 = var_done;
              lineNumber = 169
              var call437 = callmethod(var_mouse,"location", [0]);
              var call438 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call439 = callmethod(call438, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call440 = callmethod(call439, "pointInPolygon", [2], call437, var_poly);
              if (Grace_isTrue(call440)) {
                lineNumber = 170
                onSelf = true;
                var call441 = callmethod(this, "mouseEnterAction", [0]);
                var call442 = callmethod(call441,"apply", [0]);
                lineNumber = 172
                lineNumber = 170
                lineNumber = 171
                var bool443 = new GraceBoolean(true)
                onSelf = true;
                var call444 = callmethod(this, "mouseOver:=", [1], bool443);
                lineNumber = 173
                lineNumber = 172
                var bool445 = new GraceBoolean(true)
                return bool445
              }
              return if436
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func384.paramCounts = [
            0,
          ];
          func384.variableArities = [
            false,
          ];
          obj332.methods["mouseEnter"] = func384;
          func384.definitionLine = 159;
          func384.definitionModule = "kitty";
          var func446 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func446.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 180
              var if447 = var_done;
              lineNumber = 177
              onSelf = true;
              var call448 = callmethod(this, "mouseOver", [0]);
              var call449 = callmethod(call448,"prefix!", [0]);
              if (Grace_isTrue(call449)) {
                lineNumber = 179
                lineNumber = 178
                var bool450 = new GraceBoolean(false)
                return bool450
              }
              lineNumber = 181
              lineNumber = 180
              onSelf = true;
              var call452 = callmethod(this, "image", [0]);
              var call453 = callmethod(call452,"width", [0]);
              var quotient455 = callmethod(call453, "/", [1], new GraceNum(2));
              var var_w = quotient455;
              lineNumber = 181;
              moduleName = "kitty";
              lineNumber = 180
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 182
              lineNumber = 181
              onSelf = true;
              var call457 = callmethod(this, "image", [0]);
              var call458 = callmethod(call457,"height", [0]);
              var quotient460 = callmethod(call458, "/", [1], new GraceNum(2));
              var var_h = quotient460;
              lineNumber = 182;
              moduleName = "kitty";
              lineNumber = 181
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 182
              lineNumber = 183
              onSelf = true;
              var call462 = callmethod(this, "posX", [0]);
              var diff464 = callmethod(call462, "-", [1], var_w);
              onSelf = true;
              var call466 = callmethod(this, "posY", [0]);
              var diff468 = callmethod(call466, "-", [1], var_h);
              var call469 = callmethod(var_Point,"x()y", [1, 1], diff464, diff468);
              onSelf = true;
              var call471 = callmethod(this, "posX", [0]);
              var diff473 = callmethod(call471, "-", [1], var_w);
              onSelf = true;
              var call475 = callmethod(this, "posY", [0]);
              var opresult477 = callmethod(call475, "+", [1], var_h);
              var call478 = callmethod(var_Point,"x()y", [1, 1], diff473, opresult477);
              lineNumber = 184
              onSelf = true;
              var call480 = callmethod(this, "posX", [0]);
              var opresult482 = callmethod(call480, "+", [1], var_w);
              onSelf = true;
              var call484 = callmethod(this, "posY", [0]);
              var opresult486 = callmethod(call484, "+", [1], var_h);
              var call487 = callmethod(var_Point,"x()y", [1, 1], opresult482, opresult486);
              onSelf = true;
              var call489 = callmethod(this, "posX", [0]);
              var opresult491 = callmethod(call489, "+", [1], var_w);
              onSelf = true;
              var call493 = callmethod(this, "posY", [0]);
              var diff495 = callmethod(call493, "-", [1], var_h);
              var call496 = callmethod(var_Point,"x()y", [1, 1], opresult491, diff495);
              lineNumber = 182
              var call497 = callmethod(var_collections,"list", [0]);
              var call498 = callmethod(call497,"new", [4], call469, call478, call487, call496);
              var var_poly = call498;
              lineNumber = 182;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 191
              var if499 = var_done;
              lineNumber = 186
              onSelf = true;
              var call500 = callmethod(this, "mouseOver", [0]);
              var call502 = callmethod(var_mouse,"location", [0]);
              var call503 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call504 = callmethod(call503, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call505 = callmethod(call504, "pointInPolygon", [2], call502, var_poly);
              var call506 = callmethod(call505,"prefix!", [0]);
              var opresult508 = callmethod(call506, "&&", [1], call500);
              if (Grace_isTrue(opresult508)) {
                lineNumber = 187
                onSelf = true;
                var call509 = callmethod(this, "mouseExitAction", [0]);
                var call510 = callmethod(call509,"apply", [0]);
                lineNumber = 189
                lineNumber = 187
                lineNumber = 188
                var bool511 = new GraceBoolean(false)
                onSelf = true;
                var call512 = callmethod(this, "mouseOver:=", [1], bool511);
                lineNumber = 190
                lineNumber = 189
                var bool513 = new GraceBoolean(true)
                return bool513
              }
              return if499
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func446.paramCounts = [
            0,
          ];
          func446.variableArities = [
            false,
          ];
          obj332.methods["mouseExit"] = func446;
          func446.definitionLine = 176;
          func446.definitionModule = "kitty";
          var func514 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func514.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 187
              lineNumber = 195
              onSelf = true;
              var call517 = callmethod(this, "rotation", [0]);
              var prod519 = callmethod(call517, "*", [1], new GraceNum(3.14159));
              var quotient521 = callmethod(prod519, "/", [1], new GraceNum(180));
              var call522 = callmethod(var_math,"cos", [1], quotient521);
              var call524 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod527 = callmethod(var_distance, "*", [1], call524);
              var prod529 = callmethod(prod527, "*", [1], call522);
              onSelf = true;
              var call531 = callmethod(this, "posX", [0]);
              var opresult533 = callmethod(call531, "+", [1], prod529);
              onSelf = true;
              var call534 = callmethod(this, "posX:=", [1], opresult533);
              lineNumber = 196
              lineNumber = 195
              lineNumber = 196
              onSelf = true;
              var call537 = callmethod(this, "rotation", [0]);
              var prod539 = callmethod(call537, "*", [1], new GraceNum(3.14159));
              var quotient541 = callmethod(prod539, "/", [1], new GraceNum(180));
              var call542 = callmethod(var_math,"sin", [1], quotient541);
              var call544 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod547 = callmethod(var_distance, "*", [1], call544);
              var prod549 = callmethod(prod547, "*", [1], call542);
              onSelf = true;
              var call551 = callmethod(this, "posY", [0]);
              var opresult553 = callmethod(call551, "+", [1], prod549);
              onSelf = true;
              var call554 = callmethod(this, "posY:=", [1], opresult553);
              return call554
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func514.paramCounts = [
            1,
          ];
          func514.variableArities = [
            false,
          ];
          obj332.methods["move"] = func514;
          func514.definitionLine = 194;
          func514.definitionModule = "kitty";
          var func555 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func555.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              lineNumber = 196
              lineNumber = 200
              onSelf = true;
              var call558 = callmethod(this, "rotation", [0]);
              var opresult561 = callmethod(new GraceNum(90), "+", [1], call558);
              var prod563 = callmethod(opresult561, "*", [1], new GraceNum(3.14159));
              var quotient565 = callmethod(prod563, "/", [1], new GraceNum(180));
              var call566 = callmethod(var_math,"cos", [1], quotient565);
              var call568 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod571 = callmethod(var_distance, "*", [1], call568);
              var prod573 = callmethod(prod571, "*", [1], call566);
              onSelf = true;
              var call575 = callmethod(this, "posX", [0]);
              var opresult577 = callmethod(call575, "+", [1], prod573);
              onSelf = true;
              var call578 = callmethod(this, "posX:=", [1], opresult577);
              lineNumber = 201
              lineNumber = 200
              lineNumber = 201
              onSelf = true;
              var call581 = callmethod(this, "rotation", [0]);
              var opresult584 = callmethod(new GraceNum(90), "+", [1], call581);
              var prod586 = callmethod(opresult584, "*", [1], new GraceNum(3.14159));
              var quotient588 = callmethod(prod586, "/", [1], new GraceNum(180));
              var call589 = callmethod(var_math,"sin", [1], quotient588);
              var call591 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod594 = callmethod(var_distance, "*", [1], call591);
              var prod596 = callmethod(prod594, "*", [1], call589);
              onSelf = true;
              var call598 = callmethod(this, "posY", [0]);
              var opresult600 = callmethod(call598, "+", [1], prod596);
              onSelf = true;
              var call601 = callmethod(this, "posY:=", [1], opresult600);
              return call601
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func555.paramCounts = [
            1,
          ];
          func555.variableArities = [
            false,
          ];
          obj332.methods["strafe"] = func555;
          func555.definitionLine = 199;
          func555.definitionModule = "kitty";
          var func602 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func602.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 201
              lineNumber = 206
              lineNumber = 205
              onSelf = true;
              var call604 = callmethod(this, "rotation", [0]);
              var opresult606 = callmethod(call604, "+", [1], var_angle);
              onSelf = true;
              var call607 = callmethod(this, "rotation:=", [1], opresult606);
              return call607
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
          obj332.methods["turn"] = func602;
          func602.definitionLine = 204;
          func602.definitionModule = "kitty";
          var func608 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func608.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              var call609 = callmethod(var_ctx,"save", [0]);
              lineNumber = 211
              onSelf = true;
              var call610 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call611 = callmethod(this, "posY", [0]);
              var call612 = callmethod(var_ctx,"translate", [2], call610, call611);
              lineNumber = 212
              onSelf = true;
              var call613 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call614 = callmethod(this, "image", [0]);
              var call615 = callmethod(call614,"draw", [4], var_ctx, var_dx, var_dy, call613);
              lineNumber = 213
              var call616 = callmethod(var_ctx,"restore", [0]);
              return call616
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func608.paramCounts = [
            3,
          ];
          func608.variableArities = [
            false,
          ];
          obj332.methods["draw"] = func608;
          func608.definitionLine = 209;
          func608.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              lineNumber = 213
              lineNumber = 217
              var call618 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call619 = callmethod(call618, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call620 = callmethod(call619, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call621 = callmethod(this, "image:=", [1], call620);
              return call621
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func617.paramCounts = [
            1,
          ];
          func617.variableArities = [
            false,
          ];
          obj332.methods["createImage"] = func617;
          func617.definitionLine = 216;
          func617.definitionModule = "kitty";
          var func622 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func622.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              lineNumber = 217
              lineNumber = 221
              onSelf = true;
              var call623 = callmethod(this, "image:=", [1], var_image__39__);
              return call623
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func622.paramTypes = [];
          func622.paramTypes.push([]);
          func622.paramCounts = [
            1,
          ];
          func622.variableArities = [
            false,
          ];
          obj332.methods["setImage"] = func622;
          func622.definitionLine = 220;
          func622.definitionModule = "kitty";
          var func624 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func624.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 227
              lineNumber = 217
              lineNumber = 226
              onSelf = true;
              var call625 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj332.methods["setUpdateAction"] = func624;
          func624.definitionLine = 225;
          func624.definitionModule = "kitty";
          var func626 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func626.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              lineNumber = 217
              lineNumber = 230
              onSelf = true;
              var call627 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj332.methods["setDestroyAction"] = func626;
          func626.definitionLine = 229;
          func626.definitionModule = "kitty";
          var func628 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 235
              lineNumber = 217
              lineNumber = 234
              onSelf = true;
              var call629 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseDownAction"] = func628;
          func628.definitionLine = 233;
          func628.definitionModule = "kitty";
          var func630 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func630.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 239
              lineNumber = 217
              lineNumber = 238
              onSelf = true;
              var call631 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseUpAction"] = func630;
          func630.definitionLine = 237;
          func630.definitionModule = "kitty";
          var func632 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func632.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 243
              lineNumber = 217
              lineNumber = 242
              onSelf = true;
              var call633 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseEnterAction"] = func632;
          func632.definitionLine = 241;
          func632.definitionModule = "kitty";
          var func634 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func634.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 247
              lineNumber = 217
              lineNumber = 246
              onSelf = true;
              var call635 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseDragAction"] = func634;
          func634.definitionLine = 245;
          func634.definitionModule = "kitty";
          var func636 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func636.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 251
              lineNumber = 217
              lineNumber = 250
              onSelf = true;
              var call637 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
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
          obj332.methods["setMouseOverAction"] = func636;
          func636.definitionLine = 249;
          func636.definitionModule = "kitty";
          var func638 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 255
              lineNumber = 217
              lineNumber = 254
              onSelf = true;
              var call639 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
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
            1,
          ];
          func638.variableArities = [
            false,
          ];
          obj332.methods["setMouseExitAction"] = func638;
          func638.definitionLine = 253;
          func638.definitionModule = "kitty";
          var func640 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func640.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 259
              lineNumber = 217
              lineNumber = 258
              onSelf = true;
              var call641 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 260
              lineNumber = 217
              lineNumber = 259
              onSelf = true;
              var call642 = callmethod(this, "posY:=", [1], var_y);
              return call642
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func640.paramCounts = [
            2,
          ];
          func640.variableArities = [
            false,
          ];
          obj332.methods["setLocation"] = func640;
          func640.definitionLine = 257;
          func640.definitionModule = "kitty";
          var func643 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 263
              onSelf = true;
              var call644 = callmethod(this, "posX", [0]);
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
          obj332.methods["getX"] = func643;
          func643.definitionLine = 262;
          func643.definitionModule = "kitty";
          var func645 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              lineNumber = 267
              onSelf = true;
              var call646 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func645.variableArities = [
            false,
          ];
          obj332.methods["getY"] = func645;
          func645.definitionLine = 266;
          func645.definitionModule = "kitty";
          var func647 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func647.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 217
              lineNumber = 271
              onSelf = true;
              var call648 = callmethod(this, "posX:=", [1], var_posX__39__);
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
          obj332.methods["setX"] = func647;
          func647.definitionLine = 270;
          func647.definitionModule = "kitty";
          var func649 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 217
              lineNumber = 275
              onSelf = true;
              var call650 = callmethod(this, "posY:=", [1], var_posY__39__);
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
            1,
          ];
          func649.variableArities = [
            false,
          ];
          obj332.methods["setY"] = func649;
          func649.definitionLine = 274;
          func649.definitionModule = "kitty";
          var func651 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func651.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 280
              lineNumber = 279
              onSelf = true;
              var call652 = callmethod(this, "rotation", [0]);
              return call652
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func651.paramCounts = [
            0,
          ];
          func651.variableArities = [
            false,
          ];
          obj332.methods["getRotation"] = func651;
          func651.definitionLine = 278;
          func651.definitionModule = "kitty";
          sourceObject = obj332;
          lineNumber = 97
          obj332.data["tag"] = var_tag__39__;
          var reader_kitty_tag_653 = function() {
            return this.data["tag"];
          }
          obj332.methods["tag"] = reader_kitty_tag_653;
          obj332.data["tag"] = var_tag__39__;
          var writer_kitty_tag_653 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj332.methods["tag:="] = writer_kitty_tag_653;
          reader_kitty_tag_653.confidential = true;
          writer_kitty_tag_653.confidential = true;
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
          var reader_kitty_posX_654 = function() {
            return this.data["posX"];
          }
          obj332.methods["posX"] = reader_kitty_posX_654;
          obj332.data["posX"] = var_x__39__;
          var writer_kitty_posX_654 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj332.methods["posX:="] = writer_kitty_posX_654;
          reader_kitty_posX_654.confidential = true;
          writer_kitty_posX_654.confidential = true;
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
          var reader_kitty_posY_655 = function() {
            return this.data["posY"];
          }
          obj332.methods["posY"] = reader_kitty_posY_655;
          obj332.data["posY"] = var_y__39__;
          var writer_kitty_posY_655 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj332.methods["posY:="] = writer_kitty_posY_655;
          reader_kitty_posY_655.confidential = true;
          writer_kitty_posY_655.confidential = true;
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
          var reader_kitty_rotation_656 = function() {
            return this.data["rotation"];
          }
          obj332.methods["rotation"] = reader_kitty_rotation_656;
          obj332.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_656 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj332.methods["rotation:="] = writer_kitty_rotation_656;
          reader_kitty_rotation_656.confidential = true;
          writer_kitty_rotation_656.confidential = true;
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
          block657.className = 'block<kitty:104>';
          block657.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["updateAction"] = block657;
          var reader_kitty_updateAction_658 = function() {
            return this.data["updateAction"];
          }
          obj332.methods["updateAction"] = reader_kitty_updateAction_658;
          obj332.data["updateAction"] = block657;
          var writer_kitty_updateAction_658 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj332.methods["updateAction:="] = writer_kitty_updateAction_658;
          reader_kitty_updateAction_658.confidential = true;
          writer_kitty_updateAction_658.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block657)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 105
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
          block659.className = 'block<kitty:105>';
          block659.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["destroyAction"] = block659;
          var reader_kitty_destroyAction_660 = function() {
            return this.data["destroyAction"];
          }
          obj332.methods["destroyAction"] = reader_kitty_destroyAction_660;
          obj332.data["destroyAction"] = block659;
          var writer_kitty_destroyAction_660 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj332.methods["destroyAction:="] = writer_kitty_destroyAction_660;
          reader_kitty_destroyAction_660.confidential = true;
          writer_kitty_destroyAction_660.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block659)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 106
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
          block661.className = 'block<kitty:106>';
          block661.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseDownAction"] = block661;
          var reader_kitty_mouseDownAction_662 = function() {
            return this.data["mouseDownAction"];
          }
          obj332.methods["mouseDownAction"] = reader_kitty_mouseDownAction_662;
          obj332.data["mouseDownAction"] = block661;
          var writer_kitty_mouseDownAction_662 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj332.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_662;
          reader_kitty_mouseDownAction_662.confidential = true;
          writer_kitty_mouseDownAction_662.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block661)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 107
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
          block663.className = 'block<kitty:107>';
          block663.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseUpAction"] = block663;
          var reader_kitty_mouseUpAction_664 = function() {
            return this.data["mouseUpAction"];
          }
          obj332.methods["mouseUpAction"] = reader_kitty_mouseUpAction_664;
          obj332.data["mouseUpAction"] = block663;
          var writer_kitty_mouseUpAction_664 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj332.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_664;
          reader_kitty_mouseUpAction_664.confidential = true;
          writer_kitty_mouseUpAction_664.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block663)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 108
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
          block665.className = 'block<kitty:108>';
          block665.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call666 = callmethod(var_mouse,"x", [0]);
            var call667 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call668 = callmethod(this, "setLocation", [2], call666, call667);
            return call668;
          };
          obj332.data["mouseDragAction"] = block665;
          var reader_kitty_mouseDragAction_669 = function() {
            return this.data["mouseDragAction"];
          }
          obj332.methods["mouseDragAction"] = reader_kitty_mouseDragAction_669;
          obj332.data["mouseDragAction"] = block665;
          var writer_kitty_mouseDragAction_669 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj332.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_669;
          reader_kitty_mouseDragAction_669.confidential = true;
          writer_kitty_mouseDragAction_669.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block665)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 109
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
          block670.className = 'block<kitty:109>';
          block670.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseEnterAction"] = block670;
          var reader_kitty_mouseEnterAction_671 = function() {
            return this.data["mouseEnterAction"];
          }
          obj332.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_671;
          obj332.data["mouseEnterAction"] = block670;
          var writer_kitty_mouseEnterAction_671 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj332.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_671;
          reader_kitty_mouseEnterAction_671.confidential = true;
          writer_kitty_mouseEnterAction_671.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 110
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
          block672.className = 'block<kitty:110>';
          block672.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseOverAction"] = block672;
          var reader_kitty_mouseOverAction_673 = function() {
            return this.data["mouseOverAction"];
          }
          obj332.methods["mouseOverAction"] = reader_kitty_mouseOverAction_673;
          obj332.data["mouseOverAction"] = block672;
          var writer_kitty_mouseOverAction_673 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj332.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_673;
          reader_kitty_mouseOverAction_673.confidential = true;
          writer_kitty_mouseOverAction_673.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block672)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var block674 = Grace_allocObject();
          block674.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block674.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block674.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block674.methods["match"] = GraceBlock_match;
          block674.methods["prefix?"] = GraceBlock_lift;
          block674.receiver = this;
          block674.className = 'block<kitty:111>';
          block674.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj332.data["mouseExitAction"] = block674;
          var reader_kitty_mouseExitAction_675 = function() {
            return this.data["mouseExitAction"];
          }
          obj332.methods["mouseExitAction"] = reader_kitty_mouseExitAction_675;
          obj332.data["mouseExitAction"] = block674;
          var writer_kitty_mouseExitAction_675 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj332.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_675;
          reader_kitty_mouseExitAction_675.confidential = true;
          writer_kitty_mouseExitAction_675.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 111
          var bool676 = new GraceBoolean(false)
          obj332.data["mouseOver"] = bool676;
          var reader_kitty_mouseOver_677 = function() {
            return this.data["mouseOver"];
          }
          obj332.methods["mouseOver"] = reader_kitty_mouseOver_677;
          obj332.data["mouseOver"] = bool676;
          var writer_kitty_mouseOver_677 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj332.methods["mouseOver:="] = writer_kitty_mouseOver_677;
          reader_kitty_mouseOver_677.confidential = true;
          writer_kitty_mouseOver_677.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool676)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 112
          var bool678 = new GraceBoolean(false)
          obj332.data["mouseDownEntity"] = bool678;
          var reader_kitty_mouseDownEntity_679 = function() {
            return this.data["mouseDownEntity"];
          }
          obj332.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_679;
          obj332.data["mouseDownEntity"] = bool678;
          var writer_kitty_mouseDownEntity_679 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj332.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_679;
          reader_kitty_mouseDownEntity_679.confidential = true;
          writer_kitty_mouseDownEntity_679.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool678)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 114
          var call680 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj332.data["mouseDragStart"] = call680;
          var reader_kitty_mouseDragStart_681 = function() {
            return this.data["mouseDragStart"];
          }
          obj332.methods["mouseDragStart"] = reader_kitty_mouseDragStart_681;
          obj332.data["mouseDragStart"] = call680;
          var writer_kitty_mouseDragStart_681 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj332.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_681;
          reader_kitty_mouseDragStart_681.confidential = true;
          writer_kitty_mouseDragStart_681.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call680)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj332.mutable = true;
          sourceObject = obj332;
          obj332.data["image"] = undefined;
          var reader_kitty_image_682 = function() {
            return this.data["image"];
          }
          obj332.methods["image"] = reader_kitty_image_682;
          obj332.data["image"] = undefined;
          var writer_kitty_image_682 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj332.methods["image:="] = writer_kitty_image_682;
          reader_kitty_image_682.confidential = true;
          writer_kitty_image_682.confidential = true;
          obj332.mutable = true;
          sourceObject = obj332;
          lineNumber = 117
          onSelf = true;
          var call683 = callmethod(this, "awake", [0]);
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
    var func684 = function(argcv) {
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
        var obj685 = Grace_allocObject();
        obj685.definitionModule = "kitty";
        obj685.definitionLine = 93;
        var inho685 = inheritingObject;
        while (inho685.superobj) inho685 = inho685.superobj;
        inho685.superobj = obj685;
        obj685.data = inheritingObject.data;
        obj685.outer = this;
        var reader_kitty_outer_686 = function() {
          return this.outer;
        }
        obj685.methods["outer"] = reader_kitty_outer_686;
        function obj_init_685() {
          var origSuperDepth = superDepth;
          superDepth = obj685;
          obj685.annotations = [];
          var func687 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func687.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var string688 = new GraceString("realyee.png");
              onSelf = true;
              var call689 = callmethod(this, "createImage", [1], string688);
              lineNumber = 123
              lineNumber = 122
              var_kitten = this;
              lineNumber = 123
              var call690 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call690
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func687.paramCounts = [
            0,
          ];
          func687.variableArities = [
            false,
          ];
          obj685.methods["awake"] = func687;
          func687.definitionLine = 120;
          func687.definitionModule = "kitty";
          var func691 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func691.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              onSelf = true;
              var call692 = callmethod(this, "updateAction", [0]);
              var call693 = callmethod(call692,"apply", [0]);
              lineNumber = 131
              var if694 = var_done;
              lineNumber = 128
              onSelf = true;
              var call695 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call695)) {
                lineNumber = 129
                onSelf = true;
                var call696 = callmethod(this, "mouseOverAction", [0]);
                var call697 = callmethod(call696,"apply", [0]);
                if694 = call697;
              }
              lineNumber = 134
              var if698 = var_done;
              lineNumber = 131
              onSelf = true;
              var call699 = callmethod(this, "mouseDragStart", [0]);
              var call701 = callmethod(var_mouse,"position", [0]);
              var opresult703 = callmethod(call701, "!=", [1], call699);
              onSelf = true;
              var call705 = callmethod(this, "mouseDownEntity", [0]);
              onSelf = true;
              var call707 = callmethod(this, "mouseOver", [0]);
              var opresult709 = callmethod(call707, "&&", [1], call705);
              var opresult711 = callmethod(opresult709, "&&", [1], opresult703);
              if (Grace_isTrue(opresult711)) {
                lineNumber = 132
                onSelf = true;
                var call712 = callmethod(this, "mouseDragAction", [0]);
                var call713 = callmethod(call712,"apply", [0]);
                if698 = call713;
              }
              return if698
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func691.paramCounts = [
            0,
          ];
          func691.variableArities = [
            false,
          ];
          obj685.methods["tick"] = func691;
          func691.definitionLine = 126;
          func691.definitionModule = "kitty";
          var func714 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func714.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              onSelf = true;
              var call715 = callmethod(this, "destroyAction", [0]);
              var call716 = callmethod(call715,"apply", [0]);
              return call716
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func714.paramCounts = [
            0,
          ];
          func714.variableArities = [
            false,
          ];
          obj685.methods["kill"] = func714;
          func714.definitionLine = 136;
          func714.definitionModule = "kitty";
          var func717 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func717.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 148
              var if718 = var_done;
              lineNumber = 142
              onSelf = true;
              var call719 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call719)) {
                lineNumber = 144
                lineNumber = 137
                lineNumber = 143
                var call720 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call721 = callmethod(this, "mouseDragStart:=", [1], call720);
                lineNumber = 144
                onSelf = true;
                var call722 = callmethod(this, "mouseDownAction", [0]);
                var call723 = callmethod(call722,"apply", [0]);
                lineNumber = 146
                lineNumber = 144
                lineNumber = 145
                var bool724 = new GraceBoolean(true)
                onSelf = true;
                var call725 = callmethod(this, "mouseDownEntity:=", [1], bool724);
                lineNumber = 147
                lineNumber = 146
                var bool726 = new GraceBoolean(true)
                return bool726
              }
              return if718
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func717.paramCounts = [
            0,
          ];
          func717.variableArities = [
            false,
          ];
          obj685.methods["mouseDown"] = func717;
          func717.definitionLine = 141;
          func717.definitionModule = "kitty";
          var func727 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func727.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 157
              var if728 = var_done;
              lineNumber = 151
              onSelf = true;
              var call729 = callmethod(this, "mouseDownEntity", [0]);
              if (Grace_isTrue(call729)) {
                lineNumber = 153
                lineNumber = 144
                lineNumber = 152
                var call730 = callmethod(var_mouse,"position", [0]);
                onSelf = true;
                var call731 = callmethod(this, "mouseDragStart:=", [1], call730);
                lineNumber = 153
                onSelf = true;
                var call732 = callmethod(this, "mouseUpAction", [0]);
                var call733 = callmethod(call732,"apply", [0]);
                lineNumber = 155
                lineNumber = 153
                lineNumber = 154
                var bool734 = new GraceBoolean(false)
                onSelf = true;
                var call735 = callmethod(this, "mouseDownEntity:=", [1], bool734);
                lineNumber = 156
                lineNumber = 155
                var bool736 = new GraceBoolean(true)
                return bool736
              }
              return if728
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func727.paramCounts = [
            0,
          ];
          func727.variableArities = [
            false,
          ];
          obj685.methods["mouseUp"] = func727;
          func727.definitionLine = 150;
          func727.definitionModule = "kitty";
          var func737 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func737.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var if738 = var_done;
              lineNumber = 160
              onSelf = true;
              var call739 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call739)) {
                lineNumber = 162
                lineNumber = 161
                var bool740 = new GraceBoolean(false)
                return bool740
              }
              lineNumber = 164
              lineNumber = 163
              onSelf = true;
              var call742 = callmethod(this, "image", [0]);
              var call743 = callmethod(call742,"width", [0]);
              var quotient745 = callmethod(call743, "/", [1], new GraceNum(2));
              var var_w = quotient745;
              lineNumber = 164;
              moduleName = "kitty";
              lineNumber = 163
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 165
              lineNumber = 164
              onSelf = true;
              var call747 = callmethod(this, "image", [0]);
              var call748 = callmethod(call747,"height", [0]);
              var quotient750 = callmethod(call748, "/", [1], new GraceNum(2));
              var var_h = quotient750;
              lineNumber = 165;
              moduleName = "kitty";
              lineNumber = 164
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 165
              lineNumber = 166
              onSelf = true;
              var call752 = callmethod(this, "posX", [0]);
              var diff754 = callmethod(call752, "-", [1], var_w);
              onSelf = true;
              var call756 = callmethod(this, "posY", [0]);
              var diff758 = callmethod(call756, "-", [1], var_h);
              var call759 = callmethod(var_Point,"x()y", [1, 1], diff754, diff758);
              onSelf = true;
              var call761 = callmethod(this, "posX", [0]);
              var diff763 = callmethod(call761, "-", [1], var_w);
              onSelf = true;
              var call765 = callmethod(this, "posY", [0]);
              var opresult767 = callmethod(call765, "+", [1], var_h);
              var call768 = callmethod(var_Point,"x()y", [1, 1], diff763, opresult767);
              lineNumber = 167
              onSelf = true;
              var call770 = callmethod(this, "posX", [0]);
              var opresult772 = callmethod(call770, "+", [1], var_w);
              onSelf = true;
              var call774 = callmethod(this, "posY", [0]);
              var opresult776 = callmethod(call774, "+", [1], var_h);
              var call777 = callmethod(var_Point,"x()y", [1, 1], opresult772, opresult776);
              onSelf = true;
              var call779 = callmethod(this, "posX", [0]);
              var opresult781 = callmethod(call779, "+", [1], var_w);
              onSelf = true;
              var call783 = callmethod(this, "posY", [0]);
              var diff785 = callmethod(call783, "-", [1], var_h);
              var call786 = callmethod(var_Point,"x()y", [1, 1], opresult781, diff785);
              lineNumber = 165
              var call787 = callmethod(var_collections,"list", [0]);
              var call788 = callmethod(call787,"new", [4], call759, call768, call777, call786);
              var var_poly = call788;
              lineNumber = 165;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 174
              var if789 = var_done;
              lineNumber = 169
              var call790 = callmethod(var_mouse,"location", [0]);
              var call791 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call792 = callmethod(call791, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call793 = callmethod(call792, "pointInPolygon", [2], call790, var_poly);
              if (Grace_isTrue(call793)) {
                lineNumber = 170
                onSelf = true;
                var call794 = callmethod(this, "mouseEnterAction", [0]);
                var call795 = callmethod(call794,"apply", [0]);
                lineNumber = 172
                lineNumber = 170
                lineNumber = 171
                var bool796 = new GraceBoolean(true)
                onSelf = true;
                var call797 = callmethod(this, "mouseOver:=", [1], bool796);
                lineNumber = 173
                lineNumber = 172
                var bool798 = new GraceBoolean(true)
                return bool798
              }
              return if789
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func737.paramCounts = [
            0,
          ];
          func737.variableArities = [
            false,
          ];
          obj685.methods["mouseEnter"] = func737;
          func737.definitionLine = 159;
          func737.definitionModule = "kitty";
          var func799 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func799.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 180
              var if800 = var_done;
              lineNumber = 177
              onSelf = true;
              var call801 = callmethod(this, "mouseOver", [0]);
              var call802 = callmethod(call801,"prefix!", [0]);
              if (Grace_isTrue(call802)) {
                lineNumber = 179
                lineNumber = 178
                var bool803 = new GraceBoolean(false)
                return bool803
              }
              lineNumber = 181
              lineNumber = 180
              onSelf = true;
              var call805 = callmethod(this, "image", [0]);
              var call806 = callmethod(call805,"width", [0]);
              var quotient808 = callmethod(call806, "/", [1], new GraceNum(2));
              var var_w = quotient808;
              lineNumber = 181;
              moduleName = "kitty";
              lineNumber = 180
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_w)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'w' to be of type Unknown"))
              lineNumber = 182
              lineNumber = 181
              onSelf = true;
              var call810 = callmethod(this, "image", [0]);
              var call811 = callmethod(call810,"height", [0]);
              var quotient813 = callmethod(call811, "/", [1], new GraceNum(2));
              var var_h = quotient813;
              lineNumber = 182;
              moduleName = "kitty";
              lineNumber = 181
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_h)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'h' to be of type Unknown"))
              lineNumber = 182
              lineNumber = 183
              onSelf = true;
              var call815 = callmethod(this, "posX", [0]);
              var diff817 = callmethod(call815, "-", [1], var_w);
              onSelf = true;
              var call819 = callmethod(this, "posY", [0]);
              var diff821 = callmethod(call819, "-", [1], var_h);
              var call822 = callmethod(var_Point,"x()y", [1, 1], diff817, diff821);
              onSelf = true;
              var call824 = callmethod(this, "posX", [0]);
              var diff826 = callmethod(call824, "-", [1], var_w);
              onSelf = true;
              var call828 = callmethod(this, "posY", [0]);
              var opresult830 = callmethod(call828, "+", [1], var_h);
              var call831 = callmethod(var_Point,"x()y", [1, 1], diff826, opresult830);
              lineNumber = 184
              onSelf = true;
              var call833 = callmethod(this, "posX", [0]);
              var opresult835 = callmethod(call833, "+", [1], var_w);
              onSelf = true;
              var call837 = callmethod(this, "posY", [0]);
              var opresult839 = callmethod(call837, "+", [1], var_h);
              var call840 = callmethod(var_Point,"x()y", [1, 1], opresult835, opresult839);
              onSelf = true;
              var call842 = callmethod(this, "posX", [0]);
              var opresult844 = callmethod(call842, "+", [1], var_w);
              onSelf = true;
              var call846 = callmethod(this, "posY", [0]);
              var diff848 = callmethod(call846, "-", [1], var_h);
              var call849 = callmethod(var_Point,"x()y", [1, 1], opresult844, diff848);
              lineNumber = 182
              var call850 = callmethod(var_collections,"list", [0]);
              var call851 = callmethod(call850,"new", [4], call822, call831, call840, call849);
              var var_poly = call851;
              lineNumber = 182;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 191
              var if852 = var_done;
              lineNumber = 186
              onSelf = true;
              var call853 = callmethod(this, "mouseOver", [0]);
              var call855 = callmethod(var_mouse,"location", [0]);
              var call856 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call857 = callmethod(call856, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call858 = callmethod(call857, "pointInPolygon", [2], call855, var_poly);
              var call859 = callmethod(call858,"prefix!", [0]);
              var opresult861 = callmethod(call859, "&&", [1], call853);
              if (Grace_isTrue(opresult861)) {
                lineNumber = 187
                onSelf = true;
                var call862 = callmethod(this, "mouseExitAction", [0]);
                var call863 = callmethod(call862,"apply", [0]);
                lineNumber = 189
                lineNumber = 187
                lineNumber = 188
                var bool864 = new GraceBoolean(false)
                onSelf = true;
                var call865 = callmethod(this, "mouseOver:=", [1], bool864);
                lineNumber = 190
                lineNumber = 189
                var bool866 = new GraceBoolean(true)
                return bool866
              }
              return if852
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
          obj685.methods["mouseExit"] = func799;
          func799.definitionLine = 176;
          func799.definitionModule = "kitty";
          var func867 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func867.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 187
              lineNumber = 195
              onSelf = true;
              var call870 = callmethod(this, "rotation", [0]);
              var prod872 = callmethod(call870, "*", [1], new GraceNum(3.14159));
              var quotient874 = callmethod(prod872, "/", [1], new GraceNum(180));
              var call875 = callmethod(var_math,"cos", [1], quotient874);
              var call877 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod880 = callmethod(var_distance, "*", [1], call877);
              var prod882 = callmethod(prod880, "*", [1], call875);
              onSelf = true;
              var call884 = callmethod(this, "posX", [0]);
              var opresult886 = callmethod(call884, "+", [1], prod882);
              onSelf = true;
              var call887 = callmethod(this, "posX:=", [1], opresult886);
              lineNumber = 196
              lineNumber = 195
              lineNumber = 196
              onSelf = true;
              var call890 = callmethod(this, "rotation", [0]);
              var prod892 = callmethod(call890, "*", [1], new GraceNum(3.14159));
              var quotient894 = callmethod(prod892, "/", [1], new GraceNum(180));
              var call895 = callmethod(var_math,"sin", [1], quotient894);
              var call897 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod900 = callmethod(var_distance, "*", [1], call897);
              var prod902 = callmethod(prod900, "*", [1], call895);
              onSelf = true;
              var call904 = callmethod(this, "posY", [0]);
              var opresult906 = callmethod(call904, "+", [1], prod902);
              onSelf = true;
              var call907 = callmethod(this, "posY:=", [1], opresult906);
              return call907
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func867.paramCounts = [
            1,
          ];
          func867.variableArities = [
            false,
          ];
          obj685.methods["move"] = func867;
          func867.definitionLine = 194;
          func867.definitionModule = "kitty";
          var func908 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func908.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              lineNumber = 196
              lineNumber = 200
              onSelf = true;
              var call911 = callmethod(this, "rotation", [0]);
              var opresult914 = callmethod(new GraceNum(90), "+", [1], call911);
              var prod916 = callmethod(opresult914, "*", [1], new GraceNum(3.14159));
              var quotient918 = callmethod(prod916, "/", [1], new GraceNum(180));
              var call919 = callmethod(var_math,"cos", [1], quotient918);
              var call921 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod924 = callmethod(var_distance, "*", [1], call921);
              var prod926 = callmethod(prod924, "*", [1], call919);
              onSelf = true;
              var call928 = callmethod(this, "posX", [0]);
              var opresult930 = callmethod(call928, "+", [1], prod926);
              onSelf = true;
              var call931 = callmethod(this, "posX:=", [1], opresult930);
              lineNumber = 201
              lineNumber = 200
              lineNumber = 201
              onSelf = true;
              var call934 = callmethod(this, "rotation", [0]);
              var opresult937 = callmethod(new GraceNum(90), "+", [1], call934);
              var prod939 = callmethod(opresult937, "*", [1], new GraceNum(3.14159));
              var quotient941 = callmethod(prod939, "/", [1], new GraceNum(180));
              var call942 = callmethod(var_math,"sin", [1], quotient941);
              var call944 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod947 = callmethod(var_distance, "*", [1], call944);
              var prod949 = callmethod(prod947, "*", [1], call942);
              onSelf = true;
              var call951 = callmethod(this, "posY", [0]);
              var opresult953 = callmethod(call951, "+", [1], prod949);
              onSelf = true;
              var call954 = callmethod(this, "posY:=", [1], opresult953);
              return call954
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func908.paramCounts = [
            1,
          ];
          func908.variableArities = [
            false,
          ];
          obj685.methods["strafe"] = func908;
          func908.definitionLine = 199;
          func908.definitionModule = "kitty";
          var func955 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func955.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 201
              lineNumber = 206
              lineNumber = 205
              onSelf = true;
              var call957 = callmethod(this, "rotation", [0]);
              var opresult959 = callmethod(call957, "+", [1], var_angle);
              onSelf = true;
              var call960 = callmethod(this, "rotation:=", [1], opresult959);
              return call960
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func955.paramCounts = [
            1,
          ];
          func955.variableArities = [
            false,
          ];
          obj685.methods["turn"] = func955;
          func955.definitionLine = 204;
          func955.definitionModule = "kitty";
          var func961 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func961.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              var call962 = callmethod(var_ctx,"save", [0]);
              lineNumber = 211
              onSelf = true;
              var call963 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call964 = callmethod(this, "posY", [0]);
              var call965 = callmethod(var_ctx,"translate", [2], call963, call964);
              lineNumber = 212
              onSelf = true;
              var call966 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call967 = callmethod(this, "image", [0]);
              var call968 = callmethod(call967,"draw", [4], var_ctx, var_dx, var_dy, call966);
              lineNumber = 213
              var call969 = callmethod(var_ctx,"restore", [0]);
              return call969
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func961.paramCounts = [
            3,
          ];
          func961.variableArities = [
            false,
          ];
          obj685.methods["draw"] = func961;
          func961.definitionLine = 209;
          func961.definitionModule = "kitty";
          var func970 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func970.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              lineNumber = 213
              lineNumber = 217
              var call971 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call972 = callmethod(call971, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call973 = callmethod(call972, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call974 = callmethod(this, "image:=", [1], call973);
              return call974
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
          obj685.methods["createImage"] = func970;
          func970.definitionLine = 216;
          func970.definitionModule = "kitty";
          var func975 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func975.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              lineNumber = 217
              lineNumber = 221
              onSelf = true;
              var call976 = callmethod(this, "image:=", [1], var_image__39__);
              return call976
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func975.paramTypes = [];
          func975.paramTypes.push([]);
          func975.paramCounts = [
            1,
          ];
          func975.variableArities = [
            false,
          ];
          obj685.methods["setImage"] = func975;
          func975.definitionLine = 220;
          func975.definitionModule = "kitty";
          var func977 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func977.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 227
              lineNumber = 217
              lineNumber = 226
              onSelf = true;
              var call978 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj685.methods["setUpdateAction"] = func977;
          func977.definitionLine = 225;
          func977.definitionModule = "kitty";
          var func979 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func979.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              lineNumber = 217
              lineNumber = 230
              onSelf = true;
              var call980 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj685.methods["setDestroyAction"] = func979;
          func979.definitionLine = 229;
          func979.definitionModule = "kitty";
          var func981 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func981.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 235
              lineNumber = 217
              lineNumber = 234
              onSelf = true;
              var call982 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
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
          obj685.methods["setMouseDownAction"] = func981;
          func981.definitionLine = 233;
          func981.definitionModule = "kitty";
          var func983 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func983.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 239
              lineNumber = 217
              lineNumber = 238
              onSelf = true;
              var call984 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
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
          obj685.methods["setMouseUpAction"] = func983;
          func983.definitionLine = 237;
          func983.definitionModule = "kitty";
          var func985 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func985.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 243
              lineNumber = 217
              lineNumber = 242
              onSelf = true;
              var call986 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
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
          obj685.methods["setMouseEnterAction"] = func985;
          func985.definitionLine = 241;
          func985.definitionModule = "kitty";
          var func987 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func987.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 247
              lineNumber = 217
              lineNumber = 246
              onSelf = true;
              var call988 = callmethod(this, "mouseDragAction:=", [1], var_action__39__);
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
          obj685.methods["setMouseDragAction"] = func987;
          func987.definitionLine = 245;
          func987.definitionModule = "kitty";
          var func989 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func989.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 251
              lineNumber = 217
              lineNumber = 250
              onSelf = true;
              var call990 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
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
            1,
          ];
          func989.variableArities = [
            false,
          ];
          obj685.methods["setMouseOverAction"] = func989;
          func989.definitionLine = 249;
          func989.definitionModule = "kitty";
          var func991 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func991.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 255
              lineNumber = 217
              lineNumber = 254
              onSelf = true;
              var call992 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
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
            1,
          ];
          func991.variableArities = [
            false,
          ];
          obj685.methods["setMouseExitAction"] = func991;
          func991.definitionLine = 253;
          func991.definitionModule = "kitty";
          var func993 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func993.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 259
              lineNumber = 217
              lineNumber = 258
              onSelf = true;
              var call994 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 260
              lineNumber = 217
              lineNumber = 259
              onSelf = true;
              var call995 = callmethod(this, "posY:=", [1], var_y);
              return call995
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func993.paramCounts = [
            2,
          ];
          func993.variableArities = [
            false,
          ];
          obj685.methods["setLocation"] = func993;
          func993.definitionLine = 257;
          func993.definitionModule = "kitty";
          var func996 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func996.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 263
              onSelf = true;
              var call997 = callmethod(this, "posX", [0]);
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
          obj685.methods["getX"] = func996;
          func996.definitionLine = 262;
          func996.definitionModule = "kitty";
          var func998 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func998.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              lineNumber = 267
              onSelf = true;
              var call999 = callmethod(this, "posY", [0]);
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
            0,
          ];
          func998.variableArities = [
            false,
          ];
          obj685.methods["getY"] = func998;
          func998.definitionLine = 266;
          func998.definitionModule = "kitty";
          var func1000 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1000.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 217
              lineNumber = 271
              onSelf = true;
              var call1001 = callmethod(this, "posX:=", [1], var_posX__39__);
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
          obj685.methods["setX"] = func1000;
          func1000.definitionLine = 270;
          func1000.definitionModule = "kitty";
          var func1002 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1002.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 217
              lineNumber = 275
              onSelf = true;
              var call1003 = callmethod(this, "posY:=", [1], var_posY__39__);
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
          obj685.methods["setY"] = func1002;
          func1002.definitionLine = 274;
          func1002.definitionModule = "kitty";
          var func1004 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1004.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 280
              lineNumber = 279
              onSelf = true;
              var call1005 = callmethod(this, "rotation", [0]);
              return call1005
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1004.paramCounts = [
            0,
          ];
          func1004.variableArities = [
            false,
          ];
          obj685.methods["getRotation"] = func1004;
          func1004.definitionLine = 278;
          func1004.definitionModule = "kitty";
          sourceObject = obj685;
          lineNumber = 97
          obj685.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1006 = function() {
            return this.data["tag"];
          }
          obj685.methods["tag"] = reader_kitty_tag_1006;
          obj685.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1006 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj685.methods["tag:="] = writer_kitty_tag_1006;
          reader_kitty_tag_1006.confidential = true;
          writer_kitty_tag_1006.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 98
          obj685.data["posX"] = var_x__39__;
          var reader_kitty_posX_1007 = function() {
            return this.data["posX"];
          }
          obj685.methods["posX"] = reader_kitty_posX_1007;
          obj685.data["posX"] = var_x__39__;
          var writer_kitty_posX_1007 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj685.methods["posX:="] = writer_kitty_posX_1007;
          reader_kitty_posX_1007.confidential = true;
          writer_kitty_posX_1007.confidential = true;
          lineNumber = 99;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 99
          obj685.data["posY"] = var_y__39__;
          var reader_kitty_posY_1008 = function() {
            return this.data["posY"];
          }
          obj685.methods["posY"] = reader_kitty_posY_1008;
          obj685.data["posY"] = var_y__39__;
          var writer_kitty_posY_1008 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj685.methods["posY:="] = writer_kitty_posY_1008;
          reader_kitty_posY_1008.confidential = true;
          writer_kitty_posY_1008.confidential = true;
          lineNumber = 100;
          moduleName = "kitty";
          lineNumber = 99
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 100
          obj685.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_1009 = function() {
            return this.data["rotation"];
          }
          obj685.methods["rotation"] = reader_kitty_rotation_1009;
          obj685.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_1009 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj685.methods["rotation:="] = writer_kitty_rotation_1009;
          reader_kitty_rotation_1009.confidential = true;
          writer_kitty_rotation_1009.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 100
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 104
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
          block1010.className = 'block<kitty:104>';
          block1010.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["updateAction"] = block1010;
          var reader_kitty_updateAction_1011 = function() {
            return this.data["updateAction"];
          }
          obj685.methods["updateAction"] = reader_kitty_updateAction_1011;
          obj685.data["updateAction"] = block1010;
          var writer_kitty_updateAction_1011 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj685.methods["updateAction:="] = writer_kitty_updateAction_1011;
          reader_kitty_updateAction_1011.confidential = true;
          writer_kitty_updateAction_1011.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1010)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 105
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
          block1012.className = 'block<kitty:105>';
          block1012.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["destroyAction"] = block1012;
          var reader_kitty_destroyAction_1013 = function() {
            return this.data["destroyAction"];
          }
          obj685.methods["destroyAction"] = reader_kitty_destroyAction_1013;
          obj685.data["destroyAction"] = block1012;
          var writer_kitty_destroyAction_1013 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj685.methods["destroyAction:="] = writer_kitty_destroyAction_1013;
          reader_kitty_destroyAction_1013.confidential = true;
          writer_kitty_destroyAction_1013.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1012)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 106
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
          block1014.className = 'block<kitty:106>';
          block1014.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["mouseDownAction"] = block1014;
          var reader_kitty_mouseDownAction_1015 = function() {
            return this.data["mouseDownAction"];
          }
          obj685.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1015;
          obj685.data["mouseDownAction"] = block1014;
          var writer_kitty_mouseDownAction_1015 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj685.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1015;
          reader_kitty_mouseDownAction_1015.confidential = true;
          writer_kitty_mouseDownAction_1015.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1014)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 107
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
          block1016.className = 'block<kitty:107>';
          block1016.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["mouseUpAction"] = block1016;
          var reader_kitty_mouseUpAction_1017 = function() {
            return this.data["mouseUpAction"];
          }
          obj685.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1017;
          obj685.data["mouseUpAction"] = block1016;
          var writer_kitty_mouseUpAction_1017 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj685.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1017;
          reader_kitty_mouseUpAction_1017.confidential = true;
          writer_kitty_mouseUpAction_1017.confidential = true;
          lineNumber = 107;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1016)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 108
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
          block1018.className = 'block<kitty:108>';
          block1018.real = function(
          ) {
            sourceObject = this;
            lineNumber = 107
            var call1019 = callmethod(var_mouse,"x", [0]);
            var call1020 = callmethod(var_mouse,"y", [0]);
            onSelf = true;
            var call1021 = callmethod(this, "setLocation", [2], call1019, call1020);
            return call1021;
          };
          obj685.data["mouseDragAction"] = block1018;
          var reader_kitty_mouseDragAction_1022 = function() {
            return this.data["mouseDragAction"];
          }
          obj685.methods["mouseDragAction"] = reader_kitty_mouseDragAction_1022;
          obj685.data["mouseDragAction"] = block1018;
          var writer_kitty_mouseDragAction_1022 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj685.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_1022;
          reader_kitty_mouseDragAction_1022.confidential = true;
          writer_kitty_mouseDragAction_1022.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1018)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 109
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
          block1023.className = 'block<kitty:109>';
          block1023.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["mouseEnterAction"] = block1023;
          var reader_kitty_mouseEnterAction_1024 = function() {
            return this.data["mouseEnterAction"];
          }
          obj685.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1024;
          obj685.data["mouseEnterAction"] = block1023;
          var writer_kitty_mouseEnterAction_1024 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj685.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1024;
          reader_kitty_mouseEnterAction_1024.confidential = true;
          writer_kitty_mouseEnterAction_1024.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1023)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 110
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
          block1025.className = 'block<kitty:110>';
          block1025.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["mouseOverAction"] = block1025;
          var reader_kitty_mouseOverAction_1026 = function() {
            return this.data["mouseOverAction"];
          }
          obj685.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1026;
          obj685.data["mouseOverAction"] = block1025;
          var writer_kitty_mouseOverAction_1026 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj685.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1026;
          reader_kitty_mouseOverAction_1026.confidential = true;
          writer_kitty_mouseOverAction_1026.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 109
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1025)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 111
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
          block1027.className = 'block<kitty:111>';
          block1027.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj685.data["mouseExitAction"] = block1027;
          var reader_kitty_mouseExitAction_1028 = function() {
            return this.data["mouseExitAction"];
          }
          obj685.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1028;
          obj685.data["mouseExitAction"] = block1027;
          var writer_kitty_mouseExitAction_1028 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj685.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1028;
          reader_kitty_mouseExitAction_1028.confidential = true;
          writer_kitty_mouseExitAction_1028.confidential = true;
          lineNumber = 111;
          moduleName = "kitty";
          lineNumber = 110
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1027)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 111
          var bool1029 = new GraceBoolean(false)
          obj685.data["mouseOver"] = bool1029;
          var reader_kitty_mouseOver_1030 = function() {
            return this.data["mouseOver"];
          }
          obj685.methods["mouseOver"] = reader_kitty_mouseOver_1030;
          obj685.data["mouseOver"] = bool1029;
          var writer_kitty_mouseOver_1030 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj685.methods["mouseOver:="] = writer_kitty_mouseOver_1030;
          reader_kitty_mouseOver_1030.confidential = true;
          writer_kitty_mouseOver_1030.confidential = true;
          lineNumber = 112;
          moduleName = "kitty";
          lineNumber = 111
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1029)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 112
          var bool1031 = new GraceBoolean(false)
          obj685.data["mouseDownEntity"] = bool1031;
          var reader_kitty_mouseDownEntity_1032 = function() {
            return this.data["mouseDownEntity"];
          }
          obj685.methods["mouseDownEntity"] = reader_kitty_mouseDownEntity_1032;
          obj685.data["mouseDownEntity"] = bool1031;
          var writer_kitty_mouseDownEntity_1032 = function(argcv, o) {
            this.data["mouseDownEntity"] = o;
          }
          obj685.methods["mouseDownEntity:="] = writer_kitty_mouseDownEntity_1032;
          reader_kitty_mouseDownEntity_1032.confidential = true;
          writer_kitty_mouseDownEntity_1032.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1031)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownEntity' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 114
          var call1033 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
          obj685.data["mouseDragStart"] = call1033;
          var reader_kitty_mouseDragStart_1034 = function() {
            return this.data["mouseDragStart"];
          }
          obj685.methods["mouseDragStart"] = reader_kitty_mouseDragStart_1034;
          obj685.data["mouseDragStart"] = call1033;
          var writer_kitty_mouseDragStart_1034 = function(argcv, o) {
            this.data["mouseDragStart"] = o;
          }
          obj685.methods["mouseDragStart:="] = writer_kitty_mouseDragStart_1034;
          reader_kitty_mouseDragStart_1034.confidential = true;
          writer_kitty_mouseDragStart_1034.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1033)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragStart' to be of type Unknown"))
          obj685.mutable = true;
          sourceObject = obj685;
          obj685.data["image"] = undefined;
          var reader_kitty_image_1035 = function() {
            return this.data["image"];
          }
          obj685.methods["image"] = reader_kitty_image_1035;
          obj685.data["image"] = undefined;
          var writer_kitty_image_1035 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj685.methods["image:="] = writer_kitty_image_1035;
          reader_kitty_image_1035.confidential = true;
          writer_kitty_image_1035.confidential = true;
          obj685.mutable = true;
          sourceObject = obj685;
          lineNumber = 117
          onSelf = true;
          var call1036 = callmethod(this, "awake", [0]);
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          sourceObject = obj685;
          superDepth = origSuperDepth;
        }
        obj_init_685.apply(inheritingObject, []);
        return obj685
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj329.methods["new()object"] = func684;
    var func1037 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 93
        var string1038 = new GraceString("class KittyEntity");
        return string1038
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1037.paramCounts = [
    ];
    func1037.variableArities = [
    ];
    obj329.methods["asDebugString"] = func1037;
    func1037.definitionLine = 93;
    func1037.definitionModule = "kitty";
    sourceObject = obj329;
    sourceObject = obj329;
    superDepth = origSuperDepth;
  }
  obj_init_329.apply(obj329, []);
  var var_KittyEntity = obj329;
  lineNumber = 283
  lineNumber = 295
  lineNumber = 300
  lineNumber = 304
  lineNumber = 309
  lineNumber = 313
  lineNumber = 317
  lineNumber = 321
  lineNumber = 325
  lineNumber = 329
  lineNumber = 336
  var func1039 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1039.paramCounts[0])
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
  func1039.paramCounts = [
    0,
  ];
  func1039.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func1039;
  func1039.definitionLine = 336;
  func1039.definitionModule = "kitty";
  var obj1040 = Grace_allocObject();
  obj1040.definitionModule = "kitty";
  obj1040.definitionLine = 336;
  obj1040.outer = this;
  var reader_kitty_outer_1041 = function() {
    return this.outer;
  }
  obj1040.methods["outer"] = reader_kitty_outer_1041;
  function obj_init_1040() {
    var origSuperDepth = superDepth;
    superDepth = obj1040;
    obj1040.annotations = [];
    var func1042 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1042.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj1043 = Grace_allocObject();
        obj1043.definitionModule = "kitty";
        obj1043.definitionLine = 336;
        obj1043.outer = this;
        var reader_kitty_outer_1044 = function() {
          return this.outer;
        }
        obj1043.methods["outer"] = reader_kitty_outer_1044;
        function obj_init_1043() {
          var origSuperDepth = superDepth;
          superDepth = obj1043;
          obj1043.annotations = [];
          var func1045 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1045.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 384
              var if1046 = var_done;
              lineNumber = 380
              onSelf = true;
              var call1047 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1047)) {
                lineNumber = 382
                lineNumber = 381
                var bool1048 = new GraceBoolean(false)
                return bool1048
              }
              lineNumber = 385
              lineNumber = 336
              lineNumber = 384
              var call1049 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1050 = callmethod(this, "document:=", [1], call1049);
              lineNumber = 385
              lineNumber = 384
              lineNumber = 385
              var string1051 = new GraceString("standard-canvas");
              onSelf = true;
              var call1052 = callmethod(this, "document", [0]);
              var call1053 = callmethod(call1052,"getElementById", [1], string1051);
              onSelf = true;
              var call1054 = callmethod(this, "canvas:=", [1], call1053);
              lineNumber = 387
              lineNumber = 384
              lineNumber = 386
              onSelf = true;
              var call1055 = callmethod(this, "canvas", [0]);
              var call1056 = callmethod(call1055,"width", [0]);
              onSelf = true;
              var call1057 = callmethod(this, "canvasWidth:=", [1], call1056);
              lineNumber = 390
              lineNumber = 386
              lineNumber = 387
              onSelf = true;
              var call1058 = callmethod(this, "canvas", [0]);
              var call1059 = callmethod(call1058,"height", [0]);
              onSelf = true;
              var call1060 = callmethod(this, "canvasHeight:=", [1], call1059);
              lineNumber = 396
              var block1061 = Grace_allocObject();
              block1061.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1061.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1061.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1061.methods["match"] = GraceBlock_match;
              block1061.methods["prefix?"] = GraceBlock_lift;
              block1061.receiver = this;
              block1061.className = 'block<kitty:396>';
              block1061.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 392
                lineNumber = 387
                lineNumber = 391
                var bool1062 = new GraceBoolean(true)
                onSelf = true;
                var call1063 = callmethod(this, "mouseDown:=", [1], bool1062);
                lineNumber = 392
                onSelf = true;
                var call1064 = callmethod(this, "entities", [0]);
                lineNumber = 395
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
                block1065.className = 'block<kitty:395>';
                block1065.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 393
                  var call1066 = callmethod(var_entity,"mouseDown", [0]);
                  return call1066;
                };
                var call1067 = callmethod(Grace_prelude,"for()do", [1, 1], call1064, block1065);
                return call1067;
              };
              var_mouseDownListener = block1061;
              lineNumber = 396
              var string1068 = new GraceString("mousedown");
              onSelf = true;
              var call1069 = callmethod(this, "canvas", [0]);
              var call1070 = callmethod(call1069,"addEventListener", [2], string1068, var_mouseDownListener);
              lineNumber = 404
              var block1071 = Grace_allocObject();
              block1071.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1071.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1071.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1071.methods["match"] = GraceBlock_match;
              block1071.methods["prefix?"] = GraceBlock_lift;
              block1071.receiver = this;
              block1071.className = 'block<kitty:404>';
              block1071.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 400
                lineNumber = 393
                lineNumber = 399
                var bool1072 = new GraceBoolean(false)
                onSelf = true;
                var call1073 = callmethod(this, "mouseDown:=", [1], bool1072);
                lineNumber = 400
                onSelf = true;
                var call1074 = callmethod(this, "entities", [0]);
                lineNumber = 403
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
                block1075.className = 'block<kitty:403>';
                block1075.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 401
                  var call1076 = callmethod(var_entity,"mouseUp", [0]);
                  return call1076;
                };
                var call1077 = callmethod(Grace_prelude,"for()do", [1, 1], call1074, block1075);
                return call1077;
              };
              var_mouseUpListener = block1071;
              lineNumber = 404
              var string1078 = new GraceString("mouseup");
              onSelf = true;
              var call1079 = callmethod(this, "canvas", [0]);
              var call1080 = callmethod(call1079,"addEventListener", [2], string1078, var_mouseUpListener);
              lineNumber = 421
              var block1081 = Grace_allocObject();
              block1081.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1081.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1081.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1081.methods["match"] = GraceBlock_match;
              block1081.methods["prefix?"] = GraceBlock_lift;
              block1081.receiver = this;
              block1081.className = 'block<kitty:421>';
              block1081.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 408
                lineNumber = 407
                onSelf = true;
                var call1082 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1084 = callmethod(this, "canvas", [0]);
                var call1085 = callmethod(call1084,"offsetWidth", [0]);
                onSelf = true;
                var call1087 = callmethod(this, "canvas", [0]);
                var call1088 = callmethod(call1087,"offsetLeft", [0]);
                var call1090 = callmethod(var_ev,"clientX", [0]);
                var diff1092 = callmethod(call1090, "-", [1], call1088);
                var quotient1094 = callmethod(diff1092, "/", [1], call1085);
                var prod1096 = callmethod(quotient1094, "*", [1], call1082);
                var var_x = prod1096;
                lineNumber = 408;
                moduleName = "kitty";
                lineNumber = 407
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 409
                lineNumber = 408
                onSelf = true;
                var call1097 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1099 = callmethod(this, "canvas", [0]);
                var call1100 = callmethod(call1099,"offsetHeight", [0]);
                onSelf = true;
                var call1102 = callmethod(this, "canvas", [0]);
                var call1103 = callmethod(call1102,"offsetTop", [0]);
                var call1105 = callmethod(var_ev,"clientY", [0]);
                var diff1107 = callmethod(call1105, "-", [1], call1103);
                var quotient1109 = callmethod(diff1107, "/", [1], call1100);
                var prod1111 = callmethod(quotient1109, "*", [1], call1097);
                var var_y = prod1111;
                lineNumber = 409;
                moduleName = "kitty";
                lineNumber = 408
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 409
                lineNumber = 408
                lineNumber = 409
                var call1112 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1113 = callmethod(var_mouse,"position:=", [1], call1112);
                lineNumber = 412
                onSelf = true;
                var call1114 = callmethod(this, "entities", [0]);
                lineNumber = 419
                var block1115 = Grace_allocObject();
                block1115.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1115.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1115.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1115.methods["match"] = GraceBlock_match;
                block1115.methods["prefix?"] = GraceBlock_lift;
                block1115.receiver = this;
                block1115.className = 'block<kitty:419>';
                block1115.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 416
                  var if1116 = var_done;
                  lineNumber = 413
                  var call1117 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1117)) {
                    lineNumber = 415
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 416
                  var call1118 = callmethod(var_entity,"mouseExit", [0]);
                  return call1118;
                };
                var call1119 = callmethod(Grace_prelude,"for()do", [1, 1], call1114, block1115);
                lineNumber = 419
                var call1120 = callmethod(var_m__95__world,"mouseEnter", [0]);
                return call1120;
              };
              var_mouseMoveListener = block1081;
              lineNumber = 421
              var string1121 = new GraceString("mousemove");
              onSelf = true;
              var call1122 = callmethod(this, "canvas", [0]);
              var call1123 = callmethod(call1122,"addEventListener", [2], string1121, var_mouseMoveListener);
              lineNumber = 431
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
              block1124.className = 'block<kitty:431>';
              block1124.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 429
                var if1125 = var_done;
                lineNumber = 426
                var call1127 = callmethod(var_ev,"keyCode", [0]);
                var opresult1129 = callmethod(call1127, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1129)) {
                  lineNumber = 427
                  onSelf = true;
                  var call1130 = callmethod(this, "stop", [0]);
                  if1125 = call1130;
                }
                lineNumber = 430
                lineNumber = 429
                var call1131 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1131;
                return call1131;
              };
              var_keyDownListener = block1124;
              lineNumber = 431
              var string1132 = new GraceString("keydown");
              onSelf = true;
              var call1133 = callmethod(this, "document", [0]);
              var call1134 = callmethod(call1133,"addEventListener", [2], string1132, var_keyDownListener);
              lineNumber = 437
              var block1135 = Grace_allocObject();
              block1135.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1135.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1135.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1135.methods["match"] = GraceBlock_match;
              block1135.methods["prefix?"] = GraceBlock_lift;
              block1135.receiver = this;
              block1135.className = 'block<kitty:437>';
              block1135.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 436
                lineNumber = 435
                var call1136 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1136;
                return call1136;
              };
              var_keyUpListener = block1135;
              lineNumber = 437
              var string1137 = new GraceString("keyup");
              onSelf = true;
              var call1138 = callmethod(this, "document", [0]);
              var call1139 = callmethod(call1138,"addEventListener", [2], string1137, var_keyUpListener);
              lineNumber = 439
              lineNumber = 429
              lineNumber = 439
              var string1140 = new GraceString("canvas");
              var call1141 = callmethod(var_dom,"document", [0]);
              var call1142 = callmethod(call1141,"createElement", [1], string1140);
              onSelf = true;
              var call1143 = callmethod(this, "backingCanvas:=", [1], call1142);
              lineNumber = 441
              lineNumber = 439
              lineNumber = 440
              onSelf = true;
              var call1144 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1145 = callmethod(this, "backingCanvas", [0]);
              var call1146 = callmethod(call1145,"height:=", [1], call1144);
              lineNumber = 442
              lineNumber = 439
              lineNumber = 441
              onSelf = true;
              var call1147 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1148 = callmethod(this, "backingCanvas", [0]);
              var call1149 = callmethod(call1148,"width:=", [1], call1147);
              lineNumber = 442
              lineNumber = 439
              lineNumber = 442
              var string1150 = new GraceString("2d");
              onSelf = true;
              var call1151 = callmethod(this, "backingCanvas", [0]);
              var call1152 = callmethod(call1151,"getContext", [1], string1150);
              onSelf = true;
              var call1153 = callmethod(this, "backingContext:=", [1], call1152);
              lineNumber = 443
              lineNumber = 439
              lineNumber = 443
              var string1154 = new GraceString("2d");
              onSelf = true;
              var call1155 = callmethod(this, "canvas", [0]);
              var call1156 = callmethod(call1155,"getContext", [1], string1154);
              onSelf = true;
              var call1157 = callmethod(this, "mctx:=", [1], call1156);
              lineNumber = 446
              var string1158 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1159 = callmethod(this, "setBackground", [1], string1158);
              lineNumber = 449
              var call1160 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1161 = callmethod(call1160, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1162 = callmethod(call1161, "setWorld", [1], this);
              lineNumber = 452
              lineNumber = 451
              var_kitten = this;
              lineNumber = 453
              lineNumber = 449
              lineNumber = 452
              var bool1163 = new GraceBoolean(true)
              onSelf = true;
              var call1164 = callmethod(this, "isInit:=", [1], bool1163);
              return call1164
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1045.paramCounts = [
            0,
          ];
          func1045.variableArities = [
            false,
          ];
          obj1043.methods["init"] = func1045;
          func1045.definitionLine = 376;
          func1045.definitionModule = "kitty";
          var func1165 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 459
              lineNumber = 449
              lineNumber = 458
              var bool1166 = new GraceBoolean(true)
              onSelf = true;
              var call1167 = callmethod(this, "isRunning:=", [1], bool1166);
              lineNumber = 459
              var block1168 = Grace_allocObject();
              block1168.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1168.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1168.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1168.methods["match"] = GraceBlock_match;
              block1168.methods["prefix?"] = GraceBlock_lift;
              block1168.receiver = this;
              block1168.className = 'block<kitty:459>';
              block1168.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1169 = callmethod(this, "isRunning", [0]);
                return call1169;
              };
              lineNumber = 463
              var block1170 = Grace_allocObject();
              block1170.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1170.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1170.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1170.methods["match"] = GraceBlock_match;
              block1170.methods["prefix?"] = GraceBlock_lift;
              block1170.receiver = this;
              block1170.className = 'block<kitty:463>';
              block1170.real = function(
              ) {
                sourceObject = this;
                lineNumber = 460
                onSelf = true;
                var call1171 = callmethod(this, "tick", [0]);
                return call1171;
              };
              lineNumber = 459
              var call1172 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1168, new GraceNum(10), block1170);
              return call1172
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1165.paramCounts = [
            0,
          ];
          func1165.variableArities = [
            false,
          ];
          obj1043.methods["start"] = func1165;
          func1165.definitionLine = 456;
          func1165.definitionModule = "kitty";
          var func1173 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1173.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 472
              lineNumber = 449
              lineNumber = 471
              onSelf = true;
              var call1174 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1175 = callmethod(this, "mctx", [0]);
              var call1176 = callmethod(call1175,"fillStyle:=", [1], call1174);
              lineNumber = 472
              onSelf = true;
              var call1177 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1178 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1179 = callmethod(this, "mctx", [0]);
              var call1180 = callmethod(call1179,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1177, call1178);
              lineNumber = 473
              onSelf = true;
              var call1181 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1182 = callmethod(this, "mctx", [0]);
              var call1183 = callmethod(call1182,"drawImage", [3], call1181, new GraceNum(0), new GraceNum(0));
              lineNumber = 474
              onSelf = true;
              var call1184 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1186 = callmethod(this, "canvasWidth", [0]);
              var quotient1188 = callmethod(call1186, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1190 = callmethod(this, "canvasHeight", [0]);
              var quotient1192 = callmethod(call1190, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1193 = callmethod(this, "background", [0]);
              var call1194 = callmethod(call1193,"draw", [4], call1184, quotient1188, quotient1192, new GraceNum(0));
              lineNumber = 477
              onSelf = true;
              var call1195 = callmethod(this, "updateAction", [0]);
              var call1196 = callmethod(call1195,"apply", [0]);
              lineNumber = 480
              onSelf = true;
              var call1197 = callmethod(this, "entities", [0]);
              lineNumber = 487
              var block1198 = Grace_allocObject();
              block1198.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1198.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1198.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1198.methods["match"] = GraceBlock_match;
              block1198.methods["prefix?"] = GraceBlock_lift;
              block1198.receiver = this;
              block1198.className = 'block<kitty:487>';
              block1198.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 481
                var call1199 = callmethod(var_entity,"tick", [0]);
                lineNumber = 483
                onSelf = true;
                var call1200 = callmethod(this, "mctx", [0]);
                var call1201 = callmethod(var_entity,"draw", [3], call1200, new GraceNum(0), new GraceNum(0));
                return call1201;
              };
              var call1202 = callmethod(Grace_prelude,"for()do", [1, 1], call1197, block1198);
              return call1202
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1173.paramCounts = [
            0,
          ];
          func1173.variableArities = [
            false,
          ];
          obj1043.methods["tick"] = func1173;
          func1173.definitionLine = 466;
          func1173.definitionModule = "kitty";
          var func1203 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1203.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 490
              var string1204 = new GraceString("WORLD STOPPING...");
              var call1205 = Grace_print(string1204);
              lineNumber = 492
              lineNumber = 481
              lineNumber = 491
              var bool1206 = new GraceBoolean(false)
              onSelf = true;
              var call1207 = callmethod(this, "isRunning:=", [1], bool1206);
              lineNumber = 492
              onSelf = true;
              var call1208 = callmethod(this, "destroyAction", [0]);
              var call1209 = callmethod(call1208,"apply", [0]);
              lineNumber = 493
              onSelf = true;
              var call1210 = callmethod(this, "entities", [0]);
              lineNumber = 496
              var block1211 = Grace_allocObject();
              block1211.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1211.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1211.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1211.methods["match"] = GraceBlock_match;
              block1211.methods["prefix?"] = GraceBlock_lift;
              block1211.receiver = this;
              block1211.className = 'block<kitty:496>';
              block1211.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 494
                var call1212 = callmethod(var_entity,"kill", [0]);
                return call1212;
              };
              var call1213 = callmethod(Grace_prelude,"for()do", [1, 1], call1210, block1211);
              lineNumber = 496
              var string1214 = new GraceString("mousedown");
              onSelf = true;
              var call1215 = callmethod(this, "canvas", [0]);
              var call1216 = callmethod(call1215,"removeEventListener", [2], string1214, var_mouseDownListener);
              lineNumber = 497
              var string1217 = new GraceString("mouseup");
              onSelf = true;
              var call1218 = callmethod(this, "canvas", [0]);
              var call1219 = callmethod(call1218,"removeEventListener", [2], string1217, var_mouseUpListener);
              lineNumber = 498
              var string1220 = new GraceString("mousemove");
              onSelf = true;
              var call1221 = callmethod(this, "canvas", [0]);
              var call1222 = callmethod(call1221,"removeEventListener", [2], string1220, var_mouseMoveListener);
              lineNumber = 499
              var string1223 = new GraceString("keydown");
              onSelf = true;
              var call1224 = callmethod(this, "document", [0]);
              var call1225 = callmethod(call1224,"removeEventListener", [2], string1223, var_keyDownListener);
              lineNumber = 500
              var string1226 = new GraceString("keyup");
              onSelf = true;
              var call1227 = callmethod(this, "document", [0]);
              var call1228 = callmethod(call1227,"removeEventListener", [2], string1226, var_keyUpListener);
              return call1228
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
          obj1043.methods["stop"] = func1203;
          func1203.definitionLine = 489;
          func1203.definitionModule = "kitty";
          var func1229 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1229.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 507
              var if1230 = var_done;
              lineNumber = 504
              onSelf = true;
              var call1231 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1231)) {
                lineNumber = 505
                onSelf = true;
                var call1232 = callmethod(this, "mouseDownAction", [0]);
                var call1233 = callmethod(call1232,"apply", [0]);
                if1230 = call1233;
              }
              return if1230
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1229.paramCounts = [
            0,
          ];
          func1229.variableArities = [
            false,
          ];
          obj1043.methods["mouseDown"] = func1229;
          func1229.definitionLine = 503;
          func1229.definitionModule = "kitty";
          var func1234 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1234.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 513
              var if1235 = var_done;
              lineNumber = 510
              onSelf = true;
              var call1236 = callmethod(this, "mouseOver", [0]);
              var call1237 = callmethod(call1236,"prefix!", [0]);
              if (Grace_isTrue(call1237)) {
                lineNumber = 511
                onSelf = true;
                var call1238 = callmethod(this, "mouseUpAction", [0]);
                var call1239 = callmethod(call1238,"apply", [0]);
                if1235 = call1239;
              }
              return if1235
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
          obj1043.methods["mouseUp"] = func1234;
          func1234.definitionLine = 509;
          func1234.definitionModule = "kitty";
          var func1240 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1240.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 519
              var if1241 = var_done;
              lineNumber = 516
              onSelf = true;
              var call1242 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1242)) {
                lineNumber = 518
                lineNumber = 517
                var bool1243 = new GraceBoolean(false)
                return bool1243
              }
              lineNumber = 519
              lineNumber = 520
              var call1244 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1245 = callmethod(this, "width", [0]);
              var call1246 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1245);
              lineNumber = 521
              onSelf = true;
              var call1247 = callmethod(this, "width", [0]);
              var call1248 = callmethod(var_Point,"x()y", [1, 1], call1247, new GraceNum(0));
              onSelf = true;
              var call1249 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1250 = callmethod(this, "height", [0]);
              var call1251 = callmethod(var_Point,"x()y", [1, 1], call1249, call1250);
              lineNumber = 519
              var call1252 = callmethod(var_collections,"list", [0]);
              var call1253 = callmethod(call1252,"new", [4], call1244, call1246, call1248, call1251);
              var var_poly = call1253;
              lineNumber = 519;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 527
              var if1254 = var_done;
              lineNumber = 523
              var call1255 = callmethod(var_mouse,"location", [0]);
              var call1256 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1257 = callmethod(call1256, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1258 = callmethod(call1257, "pointInPolygon", [2], call1255, var_poly);
              if (Grace_isTrue(call1258)) {
                lineNumber = 524
                onSelf = true;
                var call1259 = callmethod(this, "mouseEnterAction", [0]);
                var call1260 = callmethod(call1259,"apply", [0]);
                lineNumber = 526
                lineNumber = 524
                lineNumber = 525
                var bool1261 = new GraceBoolean(true)
                onSelf = true;
                var call1262 = callmethod(this, "mouseOver:=", [1], bool1261);
                if1254 = call1262;
              }
              return if1254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1240.paramCounts = [
            0,
          ];
          func1240.variableArities = [
            false,
          ];
          obj1043.methods["mouseEnter"] = func1240;
          func1240.definitionLine = 515;
          func1240.definitionModule = "kitty";
          var func1263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 533
              var if1264 = var_done;
              lineNumber = 530
              onSelf = true;
              var call1265 = callmethod(this, "mouseOver", [0]);
              var call1266 = callmethod(call1265,"prefix!", [0]);
              if (Grace_isTrue(call1266)) {
                lineNumber = 532
                lineNumber = 531
                var bool1267 = new GraceBoolean(false)
                return bool1267
              }
              lineNumber = 533
              lineNumber = 534
              var call1268 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1269 = callmethod(this, "width", [0]);
              var call1270 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1269);
              lineNumber = 535
              onSelf = true;
              var call1271 = callmethod(this, "width", [0]);
              var call1272 = callmethod(var_Point,"x()y", [1, 1], call1271, new GraceNum(0));
              onSelf = true;
              var call1273 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1274 = callmethod(this, "height", [0]);
              var call1275 = callmethod(var_Point,"x()y", [1, 1], call1273, call1274);
              lineNumber = 533
              var call1276 = callmethod(var_collections,"list", [0]);
              var call1277 = callmethod(call1276,"new", [4], call1268, call1270, call1272, call1275);
              var var_poly = call1277;
              lineNumber = 533;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 541
              var if1278 = var_done;
              lineNumber = 537
              onSelf = true;
              var call1279 = callmethod(this, "mouseOver", [0]);
              var call1281 = callmethod(var_mouse,"location", [0]);
              var call1282 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1283 = callmethod(call1282, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1284 = callmethod(call1283, "pointInPolygon", [2], call1281, var_poly);
              var call1285 = callmethod(call1284,"prefix!", [0]);
              var opresult1287 = callmethod(call1285, "&&", [1], call1279);
              if (Grace_isTrue(opresult1287)) {
                lineNumber = 538
                onSelf = true;
                var call1288 = callmethod(this, "mouseExitAction", [0]);
                var call1289 = callmethod(call1288,"apply", [0]);
                lineNumber = 540
                lineNumber = 538
                lineNumber = 539
                var bool1290 = new GraceBoolean(false)
                onSelf = true;
                var call1291 = callmethod(this, "mouseOver:=", [1], bool1290);
                if1278 = call1291;
              }
              return if1278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1263.paramCounts = [
            0,
          ];
          func1263.variableArities = [
            false,
          ];
          obj1043.methods["mouseExit"] = func1263;
          func1263.definitionLine = 529;
          func1263.definitionModule = "kitty";
          var func1292 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 544
              lineNumber = 538
              lineNumber = 544
              onSelf = true;
              var call1293 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1294 = callmethod(this, "canvasHeight", [0]);
              var call1295 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1296 = callmethod(call1295, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1297 = callmethod(call1296, "Image()width()height", [1, 1, 1], var_url, call1293, call1294);
              onSelf = true;
              var call1298 = callmethod(this, "background:=", [1], call1297);
              return call1298
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1292.paramCounts = [
            1,
          ];
          func1292.variableArities = [
            false,
          ];
          obj1043.methods["setBackground"] = func1292;
          func1292.definitionLine = 543;
          func1292.definitionModule = "kitty";
          var func1299 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 548
              onSelf = true;
              var call1300 = callmethod(this, "entities", [0]);
              var call1301 = callmethod(call1300,"push", [1], var_e);
              return call1301
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1299.paramCounts = [
            1,
          ];
          func1299.variableArities = [
            false,
          ];
          obj1043.methods["addEntity"] = func1299;
          func1299.definitionLine = 547;
          func1299.definitionModule = "kitty";
          var func1302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 553
              lineNumber = 552
              onSelf = true;
              var call1303 = callmethod(this, "mctx", [0]);
              return call1303
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1302.paramCounts = [
            0,
          ];
          func1302.variableArities = [
            false,
          ];
          obj1043.methods["getContext"] = func1302;
          func1302.definitionLine = 551;
          func1302.definitionModule = "kitty";
          var func1304 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1304.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 557
              lineNumber = 556
              onSelf = true;
              var call1305 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1307 = callmethod(this, "canvasWidth", [0]);
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
          obj1043.methods["moveWidthMultipler"] = func1304;
          func1304.definitionLine = 555;
          func1304.definitionModule = "kitty";
          var func1310 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 561
              lineNumber = 560
              onSelf = true;
              var call1311 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1313 = callmethod(this, "canvasHeight", [0]);
              var quotient1315 = callmethod(call1313, "/", [1], call1311);
              return quotient1315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1310.paramCounts = [
            0,
          ];
          func1310.variableArities = [
            false,
          ];
          obj1043.methods["moveHeightMultipler"] = func1310;
          func1310.definitionLine = 559;
          func1310.definitionModule = "kitty";
          var func1316 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 566
              lineNumber = 544
              lineNumber = 565
              onSelf = true;
              var call1317 = callmethod(this, "updateAction:=", [1], var_action__39__);
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
          obj1043.methods["setUpdateAction"] = func1316;
          func1316.definitionLine = 564;
          func1316.definitionModule = "kitty";
          var func1318 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 570
              lineNumber = 544
              lineNumber = 569
              onSelf = true;
              var call1319 = callmethod(this, "destroyAction:=", [1], var_action__39__);
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
          obj1043.methods["setDestroyAction"] = func1318;
          func1318.definitionLine = 568;
          func1318.definitionModule = "kitty";
          var func1320 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 574
              lineNumber = 544
              lineNumber = 573
              onSelf = true;
              var call1321 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1321
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
          obj1043.methods["setMouseDownAction"] = func1320;
          func1320.definitionLine = 572;
          func1320.definitionModule = "kitty";
          var func1322 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1322.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 578
              lineNumber = 544
              lineNumber = 577
              onSelf = true;
              var call1323 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1323
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1322.paramCounts = [
            1,
          ];
          func1322.variableArities = [
            false,
          ];
          obj1043.methods["setMouseUpAction"] = func1322;
          func1322.definitionLine = 576;
          func1322.definitionModule = "kitty";
          var func1324 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 582
              lineNumber = 544
              lineNumber = 581
              onSelf = true;
              var call1325 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call1325
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1324.paramCounts = [
            1,
          ];
          func1324.variableArities = [
            false,
          ];
          obj1043.methods["setMouseEnterAction"] = func1324;
          func1324.definitionLine = 580;
          func1324.definitionModule = "kitty";
          var func1326 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1326.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 585
              var string1327 = new GraceString("*Drag Not Available For World*");
              var call1328 = Grace_print(string1327);
              return call1328
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1326.paramCounts = [
            1,
          ];
          func1326.variableArities = [
            false,
          ];
          obj1043.methods["setMouseDragAction"] = func1326;
          func1326.definitionLine = 584;
          func1326.definitionModule = "kitty";
          var func1329 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 590
              lineNumber = 544
              lineNumber = 589
              onSelf = true;
              var call1330 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1329.paramCounts = [
            1,
          ];
          func1329.variableArities = [
            false,
          ];
          obj1043.methods["setMouseOverAction"] = func1329;
          func1329.definitionLine = 588;
          func1329.definitionModule = "kitty";
          var func1331 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 594
              lineNumber = 544
              lineNumber = 593
              onSelf = true;
              var call1332 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1332
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1331.paramCounts = [
            1,
          ];
          func1331.variableArities = [
            false,
          ];
          obj1043.methods["setMouseExitAction"] = func1331;
          func1331.definitionLine = 592;
          func1331.definitionModule = "kitty";
          sourceObject = obj1043;
          lineNumber = 339
          obj1043.data["width"] = var_width__39__;
          var reader_kitty_width_1333 = function() {
            return this.data["width"];
          }
          obj1043.methods["width"] = reader_kitty_width_1333;
          obj1043.data["width"] = var_width__39__;
          var writer_kitty_width_1333 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1043.methods["width:="] = writer_kitty_width_1333;
          lineNumber = 340;
          moduleName = "kitty";
          lineNumber = 339
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 340
          obj1043.data["height"] = var_height__39__;
          var reader_kitty_height_1334 = function() {
            return this.data["height"];
          }
          obj1043.methods["height"] = reader_kitty_height_1334;
          obj1043.data["height"] = var_height__39__;
          var writer_kitty_height_1334 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1043.methods["height:="] = writer_kitty_height_1334;
          lineNumber = 341;
          moduleName = "kitty";
          lineNumber = 340
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 341
          obj1043.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1335 = function() {
            return this.data["tag"];
          }
          obj1043.methods["tag"] = reader_kitty_tag_1335;
          obj1043.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1335 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1043.methods["tag:="] = writer_kitty_tag_1335;
          lineNumber = 343;
          moduleName = "kitty";
          lineNumber = 341
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["background"] = undefined;
          var reader_kitty_background_1336 = function() {
            return this.data["background"];
          }
          obj1043.methods["background"] = reader_kitty_background_1336;
          obj1043.data["background"] = undefined;
          var writer_kitty_background_1336 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1043.methods["background:="] = writer_kitty_background_1336;
          reader_kitty_background_1336.confidential = true;
          writer_kitty_background_1336.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 344
          var string1337 = new GraceString("black");
          obj1043.data["backgroundColour"] = string1337;
          var reader_kitty_backgroundColour_1338 = function() {
            return this.data["backgroundColour"];
          }
          obj1043.methods["backgroundColour"] = reader_kitty_backgroundColour_1338;
          obj1043.data["backgroundColour"] = string1337;
          var writer_kitty_backgroundColour_1338 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1043.methods["backgroundColour:="] = writer_kitty_backgroundColour_1338;
          reader_kitty_backgroundColour_1338.confidential = true;
          writer_kitty_backgroundColour_1338.confidential = true;
          lineNumber = 346;
          moduleName = "kitty";
          lineNumber = 344
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1337)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["document"] = undefined;
          var reader_kitty_document_1339 = function() {
            return this.data["document"];
          }
          obj1043.methods["document"] = reader_kitty_document_1339;
          obj1043.data["document"] = undefined;
          var writer_kitty_document_1339 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1043.methods["document:="] = writer_kitty_document_1339;
          reader_kitty_document_1339.confidential = true;
          writer_kitty_document_1339.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1340 = function() {
            return this.data["backingCanvas"];
          }
          obj1043.methods["backingCanvas"] = reader_kitty_backingCanvas_1340;
          obj1043.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1340 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1043.methods["backingCanvas:="] = writer_kitty_backingCanvas_1340;
          reader_kitty_backingCanvas_1340.confidential = true;
          writer_kitty_backingCanvas_1340.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1341 = function() {
            return this.data["backingContext"];
          }
          obj1043.methods["backingContext"] = reader_kitty_backingContext_1341;
          obj1043.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1341 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1043.methods["backingContext:="] = writer_kitty_backingContext_1341;
          reader_kitty_backingContext_1341.confidential = true;
          writer_kitty_backingContext_1341.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["canvas"] = undefined;
          var reader_kitty_canvas_1342 = function() {
            return this.data["canvas"];
          }
          obj1043.methods["canvas"] = reader_kitty_canvas_1342;
          obj1043.data["canvas"] = undefined;
          var writer_kitty_canvas_1342 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1043.methods["canvas:="] = writer_kitty_canvas_1342;
          reader_kitty_canvas_1342.confidential = true;
          writer_kitty_canvas_1342.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1343 = function() {
            return this.data["canvasWidth"];
          }
          obj1043.methods["canvasWidth"] = reader_kitty_canvasWidth_1343;
          obj1043.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1343 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1043.methods["canvasWidth:="] = writer_kitty_canvasWidth_1343;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1344 = function() {
            return this.data["canvasHeight"];
          }
          obj1043.methods["canvasHeight"] = reader_kitty_canvasHeight_1344;
          obj1043.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1344 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1043.methods["canvasHeight:="] = writer_kitty_canvasHeight_1344;
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 355
          var call1345 = callmethod(var_collections,"list", [0]);
          var call1346 = callmethod(call1345,"new", [0]);
          obj1043.data["entities"] = call1346;
          var reader_kitty_entities_1347 = function() {
            return this.data["entities"];
          }
          obj1043.methods["entities"] = reader_kitty_entities_1347;
          obj1043.data["entities"] = call1346;
          var writer_kitty_entities_1347 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1043.methods["entities:="] = writer_kitty_entities_1347;
          reader_kitty_entities_1347.confidential = true;
          writer_kitty_entities_1347.confidential = true;
          lineNumber = 357;
          moduleName = "kitty";
          lineNumber = 355
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1346)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 357
          var bool1348 = new GraceBoolean(false)
          obj1043.data["isInit"] = bool1348;
          var reader_kitty_isInit_1349 = function() {
            return this.data["isInit"];
          }
          obj1043.methods["isInit"] = reader_kitty_isInit_1349;
          obj1043.data["isInit"] = bool1348;
          var writer_kitty_isInit_1349 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1043.methods["isInit:="] = writer_kitty_isInit_1349;
          reader_kitty_isInit_1349.confidential = true;
          writer_kitty_isInit_1349.confidential = true;
          lineNumber = 358;
          moduleName = "kitty";
          lineNumber = 357
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1348)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 358
          var bool1350 = new GraceBoolean(false)
          obj1043.data["isRunning"] = bool1350;
          var reader_kitty_isRunning_1351 = function() {
            return this.data["isRunning"];
          }
          obj1043.methods["isRunning"] = reader_kitty_isRunning_1351;
          obj1043.data["isRunning"] = bool1350;
          var writer_kitty_isRunning_1351 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1043.methods["isRunning:="] = writer_kitty_isRunning_1351;
          reader_kitty_isRunning_1351.confidential = true;
          writer_kitty_isRunning_1351.confidential = true;
          lineNumber = 360;
          moduleName = "kitty";
          lineNumber = 358
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1350)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["mctx"] = undefined;
          var reader_kitty_mctx_1352 = function() {
            return this.data["mctx"];
          }
          obj1043.methods["mctx"] = reader_kitty_mctx_1352;
          obj1043.data["mctx"] = undefined;
          var writer_kitty_mctx_1352 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1043.methods["mctx:="] = writer_kitty_mctx_1352;
          reader_kitty_mctx_1352.confidential = true;
          writer_kitty_mctx_1352.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          obj1043.data["ent"] = undefined;
          var reader_kitty_ent_1353 = function() {
            return this.data["ent"];
          }
          obj1043.methods["ent"] = reader_kitty_ent_1353;
          obj1043.data["ent"] = undefined;
          var writer_kitty_ent_1353 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1043.methods["ent:="] = writer_kitty_ent_1353;
          reader_kitty_ent_1353.confidential = true;
          writer_kitty_ent_1353.confidential = true;
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 365
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
          block1354.className = 'block<kitty:365>';
          block1354.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["updateAction"] = block1354;
          var reader_kitty_updateAction_1355 = function() {
            return this.data["updateAction"];
          }
          obj1043.methods["updateAction"] = reader_kitty_updateAction_1355;
          obj1043.data["updateAction"] = block1354;
          var writer_kitty_updateAction_1355 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1043.methods["updateAction:="] = writer_kitty_updateAction_1355;
          reader_kitty_updateAction_1355.confidential = true;
          writer_kitty_updateAction_1355.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1354)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 366
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
          block1356.className = 'block<kitty:366>';
          block1356.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["destroyAction"] = block1356;
          var reader_kitty_destroyAction_1357 = function() {
            return this.data["destroyAction"];
          }
          obj1043.methods["destroyAction"] = reader_kitty_destroyAction_1357;
          obj1043.data["destroyAction"] = block1356;
          var writer_kitty_destroyAction_1357 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1043.methods["destroyAction:="] = writer_kitty_destroyAction_1357;
          reader_kitty_destroyAction_1357.confidential = true;
          writer_kitty_destroyAction_1357.confidential = true;
          lineNumber = 366;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1356)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 367
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
          block1358.className = 'block<kitty:367>';
          block1358.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["mouseEnterAction"] = block1358;
          var reader_kitty_mouseEnterAction_1359 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1043.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1359;
          obj1043.data["mouseEnterAction"] = block1358;
          var writer_kitty_mouseEnterAction_1359 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1043.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1359;
          reader_kitty_mouseEnterAction_1359.confidential = true;
          writer_kitty_mouseEnterAction_1359.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 366
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1358)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 368
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
          block1360.className = 'block<kitty:368>';
          block1360.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["mouseOverAction"] = block1360;
          var reader_kitty_mouseOverAction_1361 = function() {
            return this.data["mouseOverAction"];
          }
          obj1043.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1361;
          obj1043.data["mouseOverAction"] = block1360;
          var writer_kitty_mouseOverAction_1361 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1043.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1361;
          reader_kitty_mouseOverAction_1361.confidential = true;
          writer_kitty_mouseOverAction_1361.confidential = true;
          lineNumber = 368;
          moduleName = "kitty";
          lineNumber = 367
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1360)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 369
          var block1362 = Grace_allocObject();
          block1362.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1362.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1362.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1362.methods["match"] = GraceBlock_match;
          block1362.methods["prefix?"] = GraceBlock_lift;
          block1362.receiver = this;
          block1362.className = 'block<kitty:369>';
          block1362.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["mouseExitAction"] = block1362;
          var reader_kitty_mouseExitAction_1363 = function() {
            return this.data["mouseExitAction"];
          }
          obj1043.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1363;
          obj1043.data["mouseExitAction"] = block1362;
          var writer_kitty_mouseExitAction_1363 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1043.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1363;
          reader_kitty_mouseExitAction_1363.confidential = true;
          writer_kitty_mouseExitAction_1363.confidential = true;
          lineNumber = 369;
          moduleName = "kitty";
          lineNumber = 368
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1362)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 370
          var block1364 = Grace_allocObject();
          block1364.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1364.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1364.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1364.methods["match"] = GraceBlock_match;
          block1364.methods["prefix?"] = GraceBlock_lift;
          block1364.receiver = this;
          block1364.className = 'block<kitty:370>';
          block1364.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["mouseDownAction"] = block1364;
          var reader_kitty_mouseDownAction_1365 = function() {
            return this.data["mouseDownAction"];
          }
          obj1043.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1365;
          obj1043.data["mouseDownAction"] = block1364;
          var writer_kitty_mouseDownAction_1365 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1043.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1365;
          reader_kitty_mouseDownAction_1365.confidential = true;
          writer_kitty_mouseDownAction_1365.confidential = true;
          lineNumber = 370;
          moduleName = "kitty";
          lineNumber = 369
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1364)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 371
          var block1366 = Grace_allocObject();
          block1366.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1366.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1366.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1366.methods["match"] = GraceBlock_match;
          block1366.methods["prefix?"] = GraceBlock_lift;
          block1366.receiver = this;
          block1366.className = 'block<kitty:371>';
          block1366.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1043.data["mouseUpAction"] = block1366;
          var reader_kitty_mouseUpAction_1367 = function() {
            return this.data["mouseUpAction"];
          }
          obj1043.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1367;
          obj1043.data["mouseUpAction"] = block1366;
          var writer_kitty_mouseUpAction_1367 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1043.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1367;
          reader_kitty_mouseUpAction_1367.confidential = true;
          writer_kitty_mouseUpAction_1367.confidential = true;
          lineNumber = 371;
          moduleName = "kitty";
          lineNumber = 370
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1366)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 371
          var bool1368 = new GraceBoolean(false)
          obj1043.data["mouseOver"] = bool1368;
          var reader_kitty_mouseOver_1369 = function() {
            return this.data["mouseOver"];
          }
          obj1043.methods["mouseOver"] = reader_kitty_mouseOver_1369;
          obj1043.data["mouseOver"] = bool1368;
          var writer_kitty_mouseOver_1369 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1043.methods["mouseOver:="] = writer_kitty_mouseOver_1369;
          reader_kitty_mouseOver_1369.confidential = true;
          writer_kitty_mouseOver_1369.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1368)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1043.mutable = true;
          sourceObject = obj1043;
          lineNumber = 373
          onSelf = true;
          var call1370 = callmethod(this, "init", [0]);
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          sourceObject = obj1043;
          superDepth = origSuperDepth;
        }
        obj_init_1043.apply(obj1043, []);
        return obj1043
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1042.paramCounts = [
      3,
    ];
    func1042.variableArities = [
      false,
    ];
    obj1040.methods["new"] = func1042;
    func1042.definitionLine = 336;
    func1042.definitionModule = "kitty";
    var func1371 = function(argcv) {
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
        var obj1372 = Grace_allocObject();
        obj1372.definitionModule = "kitty";
        obj1372.definitionLine = 336;
        var inho1372 = inheritingObject;
        while (inho1372.superobj) inho1372 = inho1372.superobj;
        inho1372.superobj = obj1372;
        obj1372.data = inheritingObject.data;
        obj1372.outer = this;
        var reader_kitty_outer_1373 = function() {
          return this.outer;
        }
        obj1372.methods["outer"] = reader_kitty_outer_1373;
        function obj_init_1372() {
          var origSuperDepth = superDepth;
          superDepth = obj1372;
          obj1372.annotations = [];
          var func1374 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 384
              var if1375 = var_done;
              lineNumber = 380
              onSelf = true;
              var call1376 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1376)) {
                lineNumber = 382
                lineNumber = 381
                var bool1377 = new GraceBoolean(false)
                return bool1377
              }
              lineNumber = 385
              lineNumber = 355
              lineNumber = 384
              var call1378 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1379 = callmethod(this, "document:=", [1], call1378);
              lineNumber = 385
              lineNumber = 384
              lineNumber = 385
              var string1380 = new GraceString("standard-canvas");
              onSelf = true;
              var call1381 = callmethod(this, "document", [0]);
              var call1382 = callmethod(call1381,"getElementById", [1], string1380);
              onSelf = true;
              var call1383 = callmethod(this, "canvas:=", [1], call1382);
              lineNumber = 387
              lineNumber = 384
              lineNumber = 386
              onSelf = true;
              var call1384 = callmethod(this, "canvas", [0]);
              var call1385 = callmethod(call1384,"width", [0]);
              onSelf = true;
              var call1386 = callmethod(this, "canvasWidth:=", [1], call1385);
              lineNumber = 390
              lineNumber = 386
              lineNumber = 387
              onSelf = true;
              var call1387 = callmethod(this, "canvas", [0]);
              var call1388 = callmethod(call1387,"height", [0]);
              onSelf = true;
              var call1389 = callmethod(this, "canvasHeight:=", [1], call1388);
              lineNumber = 396
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
              block1390.className = 'block<kitty:396>';
              block1390.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 392
                lineNumber = 387
                lineNumber = 391
                var bool1391 = new GraceBoolean(true)
                onSelf = true;
                var call1392 = callmethod(this, "mouseDown:=", [1], bool1391);
                lineNumber = 392
                onSelf = true;
                var call1393 = callmethod(this, "entities", [0]);
                lineNumber = 395
                var block1394 = Grace_allocObject();
                block1394.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1394.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1394.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1394.methods["match"] = GraceBlock_match;
                block1394.methods["prefix?"] = GraceBlock_lift;
                block1394.receiver = this;
                block1394.className = 'block<kitty:395>';
                block1394.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 393
                  var call1395 = callmethod(var_entity,"mouseDown", [0]);
                  return call1395;
                };
                var call1396 = callmethod(Grace_prelude,"for()do", [1, 1], call1393, block1394);
                return call1396;
              };
              var_mouseDownListener = block1390;
              lineNumber = 396
              var string1397 = new GraceString("mousedown");
              onSelf = true;
              var call1398 = callmethod(this, "canvas", [0]);
              var call1399 = callmethod(call1398,"addEventListener", [2], string1397, var_mouseDownListener);
              lineNumber = 404
              var block1400 = Grace_allocObject();
              block1400.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1400.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1400.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1400.methods["match"] = GraceBlock_match;
              block1400.methods["prefix?"] = GraceBlock_lift;
              block1400.receiver = this;
              block1400.className = 'block<kitty:404>';
              block1400.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 400
                lineNumber = 393
                lineNumber = 399
                var bool1401 = new GraceBoolean(false)
                onSelf = true;
                var call1402 = callmethod(this, "mouseDown:=", [1], bool1401);
                lineNumber = 400
                onSelf = true;
                var call1403 = callmethod(this, "entities", [0]);
                lineNumber = 403
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
                block1404.className = 'block<kitty:403>';
                block1404.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 401
                  var call1405 = callmethod(var_entity,"mouseUp", [0]);
                  return call1405;
                };
                var call1406 = callmethod(Grace_prelude,"for()do", [1, 1], call1403, block1404);
                return call1406;
              };
              var_mouseUpListener = block1400;
              lineNumber = 404
              var string1407 = new GraceString("mouseup");
              onSelf = true;
              var call1408 = callmethod(this, "canvas", [0]);
              var call1409 = callmethod(call1408,"addEventListener", [2], string1407, var_mouseUpListener);
              lineNumber = 421
              var block1410 = Grace_allocObject();
              block1410.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1410.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1410.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1410.methods["match"] = GraceBlock_match;
              block1410.methods["prefix?"] = GraceBlock_lift;
              block1410.receiver = this;
              block1410.className = 'block<kitty:421>';
              block1410.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 408
                lineNumber = 407
                onSelf = true;
                var call1411 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1413 = callmethod(this, "canvas", [0]);
                var call1414 = callmethod(call1413,"offsetWidth", [0]);
                onSelf = true;
                var call1416 = callmethod(this, "canvas", [0]);
                var call1417 = callmethod(call1416,"offsetLeft", [0]);
                var call1419 = callmethod(var_ev,"clientX", [0]);
                var diff1421 = callmethod(call1419, "-", [1], call1417);
                var quotient1423 = callmethod(diff1421, "/", [1], call1414);
                var prod1425 = callmethod(quotient1423, "*", [1], call1411);
                var var_x = prod1425;
                lineNumber = 408;
                moduleName = "kitty";
                lineNumber = 407
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 409
                lineNumber = 408
                onSelf = true;
                var call1426 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1428 = callmethod(this, "canvas", [0]);
                var call1429 = callmethod(call1428,"offsetHeight", [0]);
                onSelf = true;
                var call1431 = callmethod(this, "canvas", [0]);
                var call1432 = callmethod(call1431,"offsetTop", [0]);
                var call1434 = callmethod(var_ev,"clientY", [0]);
                var diff1436 = callmethod(call1434, "-", [1], call1432);
                var quotient1438 = callmethod(diff1436, "/", [1], call1429);
                var prod1440 = callmethod(quotient1438, "*", [1], call1426);
                var var_y = prod1440;
                lineNumber = 409;
                moduleName = "kitty";
                lineNumber = 408
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 409
                lineNumber = 408
                lineNumber = 409
                var call1441 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1442 = callmethod(var_mouse,"position:=", [1], call1441);
                lineNumber = 412
                onSelf = true;
                var call1443 = callmethod(this, "entities", [0]);
                lineNumber = 419
                var block1444 = Grace_allocObject();
                block1444.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block1444.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block1444.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block1444.methods["match"] = GraceBlock_match;
                block1444.methods["prefix?"] = GraceBlock_lift;
                block1444.receiver = this;
                block1444.className = 'block<kitty:419>';
                block1444.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 416
                  var if1445 = var_done;
                  lineNumber = 413
                  var call1446 = callmethod(var_entity,"mouseEnter", [0]);
                  if (Grace_isTrue(call1446)) {
                    lineNumber = 415
                    throw new ReturnException(var_done, returnTarget);
                  }
                  lineNumber = 416
                  var call1447 = callmethod(var_entity,"mouseExit", [0]);
                  return call1447;
                };
                var call1448 = callmethod(Grace_prelude,"for()do", [1, 1], call1443, block1444);
                lineNumber = 419
                var call1449 = callmethod(var_m__95__world,"mouseEnter", [0]);
                return call1449;
              };
              var_mouseMoveListener = block1410;
              lineNumber = 421
              var string1450 = new GraceString("mousemove");
              onSelf = true;
              var call1451 = callmethod(this, "canvas", [0]);
              var call1452 = callmethod(call1451,"addEventListener", [2], string1450, var_mouseMoveListener);
              lineNumber = 431
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
              block1453.className = 'block<kitty:431>';
              block1453.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 429
                var if1454 = var_done;
                lineNumber = 426
                var call1456 = callmethod(var_ev,"keyCode", [0]);
                var opresult1458 = callmethod(call1456, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1458)) {
                  lineNumber = 427
                  onSelf = true;
                  var call1459 = callmethod(this, "stop", [0]);
                  if1454 = call1459;
                }
                lineNumber = 430
                lineNumber = 429
                var call1460 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1460;
                return call1460;
              };
              var_keyDownListener = block1453;
              lineNumber = 431
              var string1461 = new GraceString("keydown");
              onSelf = true;
              var call1462 = callmethod(this, "document", [0]);
              var call1463 = callmethod(call1462,"addEventListener", [2], string1461, var_keyDownListener);
              lineNumber = 437
              var block1464 = Grace_allocObject();
              block1464.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1464.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1464.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1464.methods["match"] = GraceBlock_match;
              block1464.methods["prefix?"] = GraceBlock_lift;
              block1464.receiver = this;
              block1464.className = 'block<kitty:437>';
              block1464.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 436
                lineNumber = 435
                var call1465 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1465;
                return call1465;
              };
              var_keyUpListener = block1464;
              lineNumber = 437
              var string1466 = new GraceString("keyup");
              onSelf = true;
              var call1467 = callmethod(this, "document", [0]);
              var call1468 = callmethod(call1467,"addEventListener", [2], string1466, var_keyUpListener);
              lineNumber = 439
              lineNumber = 429
              lineNumber = 439
              var string1469 = new GraceString("canvas");
              var call1470 = callmethod(var_dom,"document", [0]);
              var call1471 = callmethod(call1470,"createElement", [1], string1469);
              onSelf = true;
              var call1472 = callmethod(this, "backingCanvas:=", [1], call1471);
              lineNumber = 441
              lineNumber = 439
              lineNumber = 440
              onSelf = true;
              var call1473 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1474 = callmethod(this, "backingCanvas", [0]);
              var call1475 = callmethod(call1474,"height:=", [1], call1473);
              lineNumber = 442
              lineNumber = 439
              lineNumber = 441
              onSelf = true;
              var call1476 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1477 = callmethod(this, "backingCanvas", [0]);
              var call1478 = callmethod(call1477,"width:=", [1], call1476);
              lineNumber = 442
              lineNumber = 439
              lineNumber = 442
              var string1479 = new GraceString("2d");
              onSelf = true;
              var call1480 = callmethod(this, "backingCanvas", [0]);
              var call1481 = callmethod(call1480,"getContext", [1], string1479);
              onSelf = true;
              var call1482 = callmethod(this, "backingContext:=", [1], call1481);
              lineNumber = 443
              lineNumber = 439
              lineNumber = 443
              var string1483 = new GraceString("2d");
              onSelf = true;
              var call1484 = callmethod(this, "canvas", [0]);
              var call1485 = callmethod(call1484,"getContext", [1], string1483);
              onSelf = true;
              var call1486 = callmethod(this, "mctx:=", [1], call1485);
              lineNumber = 446
              var string1487 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1488 = callmethod(this, "setBackground", [1], string1487);
              lineNumber = 449
              var call1489 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1490 = callmethod(call1489, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1491 = callmethod(call1490, "setWorld", [1], this);
              lineNumber = 452
              lineNumber = 451
              var_kitten = this;
              lineNumber = 453
              lineNumber = 449
              lineNumber = 452
              var bool1492 = new GraceBoolean(true)
              onSelf = true;
              var call1493 = callmethod(this, "isInit:=", [1], bool1492);
              return call1493
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1374.paramCounts = [
            0,
          ];
          func1374.variableArities = [
            false,
          ];
          obj1372.methods["init"] = func1374;
          func1374.definitionLine = 376;
          func1374.definitionModule = "kitty";
          var func1494 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1494.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 459
              lineNumber = 449
              lineNumber = 458
              var bool1495 = new GraceBoolean(true)
              onSelf = true;
              var call1496 = callmethod(this, "isRunning:=", [1], bool1495);
              lineNumber = 459
              var block1497 = Grace_allocObject();
              block1497.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1497.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1497.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1497.methods["match"] = GraceBlock_match;
              block1497.methods["prefix?"] = GraceBlock_lift;
              block1497.receiver = this;
              block1497.className = 'block<kitty:459>';
              block1497.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1498 = callmethod(this, "isRunning", [0]);
                return call1498;
              };
              lineNumber = 463
              var block1499 = Grace_allocObject();
              block1499.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1499.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1499.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1499.methods["match"] = GraceBlock_match;
              block1499.methods["prefix?"] = GraceBlock_lift;
              block1499.receiver = this;
              block1499.className = 'block<kitty:463>';
              block1499.real = function(
              ) {
                sourceObject = this;
                lineNumber = 460
                onSelf = true;
                var call1500 = callmethod(this, "tick", [0]);
                return call1500;
              };
              lineNumber = 459
              var call1501 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1497, new GraceNum(10), block1499);
              return call1501
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1494.paramCounts = [
            0,
          ];
          func1494.variableArities = [
            false,
          ];
          obj1372.methods["start"] = func1494;
          func1494.definitionLine = 456;
          func1494.definitionModule = "kitty";
          var func1502 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1502.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 472
              lineNumber = 449
              lineNumber = 471
              onSelf = true;
              var call1503 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1504 = callmethod(this, "mctx", [0]);
              var call1505 = callmethod(call1504,"fillStyle:=", [1], call1503);
              lineNumber = 472
              onSelf = true;
              var call1506 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1507 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1508 = callmethod(this, "mctx", [0]);
              var call1509 = callmethod(call1508,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1506, call1507);
              lineNumber = 473
              onSelf = true;
              var call1510 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1511 = callmethod(this, "mctx", [0]);
              var call1512 = callmethod(call1511,"drawImage", [3], call1510, new GraceNum(0), new GraceNum(0));
              lineNumber = 474
              onSelf = true;
              var call1513 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1515 = callmethod(this, "canvasWidth", [0]);
              var quotient1517 = callmethod(call1515, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1519 = callmethod(this, "canvasHeight", [0]);
              var quotient1521 = callmethod(call1519, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1522 = callmethod(this, "background", [0]);
              var call1523 = callmethod(call1522,"draw", [4], call1513, quotient1517, quotient1521, new GraceNum(0));
              lineNumber = 477
              onSelf = true;
              var call1524 = callmethod(this, "updateAction", [0]);
              var call1525 = callmethod(call1524,"apply", [0]);
              lineNumber = 480
              onSelf = true;
              var call1526 = callmethod(this, "entities", [0]);
              lineNumber = 487
              var block1527 = Grace_allocObject();
              block1527.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1527.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1527.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1527.methods["match"] = GraceBlock_match;
              block1527.methods["prefix?"] = GraceBlock_lift;
              block1527.receiver = this;
              block1527.className = 'block<kitty:487>';
              block1527.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 481
                var call1528 = callmethod(var_entity,"tick", [0]);
                lineNumber = 483
                onSelf = true;
                var call1529 = callmethod(this, "mctx", [0]);
                var call1530 = callmethod(var_entity,"draw", [3], call1529, new GraceNum(0), new GraceNum(0));
                return call1530;
              };
              var call1531 = callmethod(Grace_prelude,"for()do", [1, 1], call1526, block1527);
              return call1531
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1502.paramCounts = [
            0,
          ];
          func1502.variableArities = [
            false,
          ];
          obj1372.methods["tick"] = func1502;
          func1502.definitionLine = 466;
          func1502.definitionModule = "kitty";
          var func1532 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1532.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 490
              var string1533 = new GraceString("WORLD STOPPING...");
              var call1534 = Grace_print(string1533);
              lineNumber = 492
              lineNumber = 481
              lineNumber = 491
              var bool1535 = new GraceBoolean(false)
              onSelf = true;
              var call1536 = callmethod(this, "isRunning:=", [1], bool1535);
              lineNumber = 492
              onSelf = true;
              var call1537 = callmethod(this, "destroyAction", [0]);
              var call1538 = callmethod(call1537,"apply", [0]);
              lineNumber = 493
              onSelf = true;
              var call1539 = callmethod(this, "entities", [0]);
              lineNumber = 496
              var block1540 = Grace_allocObject();
              block1540.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1540.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1540.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1540.methods["match"] = GraceBlock_match;
              block1540.methods["prefix?"] = GraceBlock_lift;
              block1540.receiver = this;
              block1540.className = 'block<kitty:496>';
              block1540.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 494
                var call1541 = callmethod(var_entity,"kill", [0]);
                return call1541;
              };
              var call1542 = callmethod(Grace_prelude,"for()do", [1, 1], call1539, block1540);
              lineNumber = 496
              var string1543 = new GraceString("mousedown");
              onSelf = true;
              var call1544 = callmethod(this, "canvas", [0]);
              var call1545 = callmethod(call1544,"removeEventListener", [2], string1543, var_mouseDownListener);
              lineNumber = 497
              var string1546 = new GraceString("mouseup");
              onSelf = true;
              var call1547 = callmethod(this, "canvas", [0]);
              var call1548 = callmethod(call1547,"removeEventListener", [2], string1546, var_mouseUpListener);
              lineNumber = 498
              var string1549 = new GraceString("mousemove");
              onSelf = true;
              var call1550 = callmethod(this, "canvas", [0]);
              var call1551 = callmethod(call1550,"removeEventListener", [2], string1549, var_mouseMoveListener);
              lineNumber = 499
              var string1552 = new GraceString("keydown");
              onSelf = true;
              var call1553 = callmethod(this, "document", [0]);
              var call1554 = callmethod(call1553,"removeEventListener", [2], string1552, var_keyDownListener);
              lineNumber = 500
              var string1555 = new GraceString("keyup");
              onSelf = true;
              var call1556 = callmethod(this, "document", [0]);
              var call1557 = callmethod(call1556,"removeEventListener", [2], string1555, var_keyUpListener);
              return call1557
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1532.paramCounts = [
            0,
          ];
          func1532.variableArities = [
            false,
          ];
          obj1372.methods["stop"] = func1532;
          func1532.definitionLine = 489;
          func1532.definitionModule = "kitty";
          var func1558 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 507
              var if1559 = var_done;
              lineNumber = 504
              onSelf = true;
              var call1560 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1560)) {
                lineNumber = 505
                onSelf = true;
                var call1561 = callmethod(this, "mouseDownAction", [0]);
                var call1562 = callmethod(call1561,"apply", [0]);
                if1559 = call1562;
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
          obj1372.methods["mouseDown"] = func1558;
          func1558.definitionLine = 503;
          func1558.definitionModule = "kitty";
          var func1563 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1563.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 513
              var if1564 = var_done;
              lineNumber = 510
              onSelf = true;
              var call1565 = callmethod(this, "mouseOver", [0]);
              var call1566 = callmethod(call1565,"prefix!", [0]);
              if (Grace_isTrue(call1566)) {
                lineNumber = 511
                onSelf = true;
                var call1567 = callmethod(this, "mouseUpAction", [0]);
                var call1568 = callmethod(call1567,"apply", [0]);
                if1564 = call1568;
              }
              return if1564
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1563.paramCounts = [
            0,
          ];
          func1563.variableArities = [
            false,
          ];
          obj1372.methods["mouseUp"] = func1563;
          func1563.definitionLine = 509;
          func1563.definitionModule = "kitty";
          var func1569 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1569.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 519
              var if1570 = var_done;
              lineNumber = 516
              onSelf = true;
              var call1571 = callmethod(this, "mouseOver", [0]);
              if (Grace_isTrue(call1571)) {
                lineNumber = 518
                lineNumber = 517
                var bool1572 = new GraceBoolean(false)
                return bool1572
              }
              lineNumber = 519
              lineNumber = 520
              var call1573 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1574 = callmethod(this, "width", [0]);
              var call1575 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1574);
              lineNumber = 521
              onSelf = true;
              var call1576 = callmethod(this, "width", [0]);
              var call1577 = callmethod(var_Point,"x()y", [1, 1], call1576, new GraceNum(0));
              onSelf = true;
              var call1578 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1579 = callmethod(this, "height", [0]);
              var call1580 = callmethod(var_Point,"x()y", [1, 1], call1578, call1579);
              lineNumber = 519
              var call1581 = callmethod(var_collections,"list", [0]);
              var call1582 = callmethod(call1581,"new", [4], call1573, call1575, call1577, call1580);
              var var_poly = call1582;
              lineNumber = 519;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 527
              var if1583 = var_done;
              lineNumber = 523
              var call1584 = callmethod(var_mouse,"location", [0]);
              var call1585 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1586 = callmethod(call1585, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1587 = callmethod(call1586, "pointInPolygon", [2], call1584, var_poly);
              if (Grace_isTrue(call1587)) {
                lineNumber = 524
                onSelf = true;
                var call1588 = callmethod(this, "mouseEnterAction", [0]);
                var call1589 = callmethod(call1588,"apply", [0]);
                lineNumber = 526
                lineNumber = 524
                lineNumber = 525
                var bool1590 = new GraceBoolean(true)
                onSelf = true;
                var call1591 = callmethod(this, "mouseOver:=", [1], bool1590);
                if1583 = call1591;
              }
              return if1583
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1569.paramCounts = [
            0,
          ];
          func1569.variableArities = [
            false,
          ];
          obj1372.methods["mouseEnter"] = func1569;
          func1569.definitionLine = 515;
          func1569.definitionModule = "kitty";
          var func1592 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 533
              var if1593 = var_done;
              lineNumber = 530
              onSelf = true;
              var call1594 = callmethod(this, "mouseOver", [0]);
              var call1595 = callmethod(call1594,"prefix!", [0]);
              if (Grace_isTrue(call1595)) {
                lineNumber = 532
                lineNumber = 531
                var bool1596 = new GraceBoolean(false)
                return bool1596
              }
              lineNumber = 533
              lineNumber = 534
              var call1597 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
              onSelf = true;
              var call1598 = callmethod(this, "width", [0]);
              var call1599 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), call1598);
              lineNumber = 535
              onSelf = true;
              var call1600 = callmethod(this, "width", [0]);
              var call1601 = callmethod(var_Point,"x()y", [1, 1], call1600, new GraceNum(0));
              onSelf = true;
              var call1602 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1603 = callmethod(this, "height", [0]);
              var call1604 = callmethod(var_Point,"x()y", [1, 1], call1602, call1603);
              lineNumber = 533
              var call1605 = callmethod(var_collections,"list", [0]);
              var call1606 = callmethod(call1605,"new", [4], call1597, call1599, call1601, call1604);
              var var_poly = call1606;
              lineNumber = 533;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 541
              var if1607 = var_done;
              lineNumber = 537
              onSelf = true;
              var call1608 = callmethod(this, "mouseOver", [0]);
              var call1610 = callmethod(var_mouse,"location", [0]);
              var call1611 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1612 = callmethod(call1611, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1613 = callmethod(call1612, "pointInPolygon", [2], call1610, var_poly);
              var call1614 = callmethod(call1613,"prefix!", [0]);
              var opresult1616 = callmethod(call1614, "&&", [1], call1608);
              if (Grace_isTrue(opresult1616)) {
                lineNumber = 538
                onSelf = true;
                var call1617 = callmethod(this, "mouseExitAction", [0]);
                var call1618 = callmethod(call1617,"apply", [0]);
                lineNumber = 540
                lineNumber = 538
                lineNumber = 539
                var bool1619 = new GraceBoolean(false)
                onSelf = true;
                var call1620 = callmethod(this, "mouseOver:=", [1], bool1619);
                if1607 = call1620;
              }
              return if1607
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1592.paramCounts = [
            0,
          ];
          func1592.variableArities = [
            false,
          ];
          obj1372.methods["mouseExit"] = func1592;
          func1592.definitionLine = 529;
          func1592.definitionModule = "kitty";
          var func1621 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1621.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 544
              lineNumber = 538
              lineNumber = 544
              onSelf = true;
              var call1622 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1623 = callmethod(this, "canvasHeight", [0]);
              var call1624 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1625 = callmethod(call1624, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1626 = callmethod(call1625, "Image()width()height", [1, 1, 1], var_url, call1622, call1623);
              onSelf = true;
              var call1627 = callmethod(this, "background:=", [1], call1626);
              return call1627
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1621.paramCounts = [
            1,
          ];
          func1621.variableArities = [
            false,
          ];
          obj1372.methods["setBackground"] = func1621;
          func1621.definitionLine = 543;
          func1621.definitionModule = "kitty";
          var func1628 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 548
              onSelf = true;
              var call1629 = callmethod(this, "entities", [0]);
              var call1630 = callmethod(call1629,"push", [1], var_e);
              return call1630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1628.paramCounts = [
            1,
          ];
          func1628.variableArities = [
            false,
          ];
          obj1372.methods["addEntity"] = func1628;
          func1628.definitionLine = 547;
          func1628.definitionModule = "kitty";
          var func1631 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 553
              lineNumber = 552
              onSelf = true;
              var call1632 = callmethod(this, "mctx", [0]);
              return call1632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1631.paramCounts = [
            0,
          ];
          func1631.variableArities = [
            false,
          ];
          obj1372.methods["getContext"] = func1631;
          func1631.definitionLine = 551;
          func1631.definitionModule = "kitty";
          var func1633 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 557
              lineNumber = 556
              onSelf = true;
              var call1634 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1636 = callmethod(this, "canvasWidth", [0]);
              var quotient1638 = callmethod(call1636, "/", [1], call1634);
              return quotient1638
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1633.paramCounts = [
            0,
          ];
          func1633.variableArities = [
            false,
          ];
          obj1372.methods["moveWidthMultipler"] = func1633;
          func1633.definitionLine = 555;
          func1633.definitionModule = "kitty";
          var func1639 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1639.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 561
              lineNumber = 560
              onSelf = true;
              var call1640 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1642 = callmethod(this, "canvasHeight", [0]);
              var quotient1644 = callmethod(call1642, "/", [1], call1640);
              return quotient1644
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1639.paramCounts = [
            0,
          ];
          func1639.variableArities = [
            false,
          ];
          obj1372.methods["moveHeightMultipler"] = func1639;
          func1639.definitionLine = 559;
          func1639.definitionModule = "kitty";
          var func1645 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1645.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 566
              lineNumber = 544
              lineNumber = 565
              onSelf = true;
              var call1646 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1646
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1645.paramCounts = [
            1,
          ];
          func1645.variableArities = [
            false,
          ];
          obj1372.methods["setUpdateAction"] = func1645;
          func1645.definitionLine = 564;
          func1645.definitionModule = "kitty";
          var func1647 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1647.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 570
              lineNumber = 544
              lineNumber = 569
              onSelf = true;
              var call1648 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1648
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1647.paramCounts = [
            1,
          ];
          func1647.variableArities = [
            false,
          ];
          obj1372.methods["setDestroyAction"] = func1647;
          func1647.definitionLine = 568;
          func1647.definitionModule = "kitty";
          var func1649 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 574
              lineNumber = 544
              lineNumber = 573
              onSelf = true;
              var call1650 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call1650
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1649.paramCounts = [
            1,
          ];
          func1649.variableArities = [
            false,
          ];
          obj1372.methods["setMouseDownAction"] = func1649;
          func1649.definitionLine = 572;
          func1649.definitionModule = "kitty";
          var func1651 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1651.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseUpAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 578
              lineNumber = 544
              lineNumber = 577
              onSelf = true;
              var call1652 = callmethod(this, "mouseUpAction:=", [1], var_action__39__);
              return call1652
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1651.paramCounts = [
            1,
          ];
          func1651.variableArities = [
            false,
          ];
          obj1372.methods["setMouseUpAction"] = func1651;
          func1651.definitionLine = 576;
          func1651.definitionModule = "kitty";
          var func1653 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1653.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 582
              lineNumber = 544
              lineNumber = 581
              onSelf = true;
              var call1654 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
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
          obj1372.methods["setMouseEnterAction"] = func1653;
          func1653.definitionLine = 580;
          func1653.definitionModule = "kitty";
          var func1655 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1655.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDragAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 585
              var string1656 = new GraceString("*Drag Not Available For World*");
              var call1657 = Grace_print(string1656);
              return call1657
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
          obj1372.methods["setMouseDragAction"] = func1655;
          func1655.definitionLine = 584;
          func1655.definitionModule = "kitty";
          var func1658 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1658.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseOverAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 590
              lineNumber = 544
              lineNumber = 589
              onSelf = true;
              var call1659 = callmethod(this, "mouseOverAction:=", [1], var_action__39__);
              return call1659
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1658.paramCounts = [
            1,
          ];
          func1658.variableArities = [
            false,
          ];
          obj1372.methods["setMouseOverAction"] = func1658;
          func1658.definitionLine = 588;
          func1658.definitionModule = "kitty";
          var func1660 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1660.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 594
              lineNumber = 544
              lineNumber = 593
              onSelf = true;
              var call1661 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call1661
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1660.paramCounts = [
            1,
          ];
          func1660.variableArities = [
            false,
          ];
          obj1372.methods["setMouseExitAction"] = func1660;
          func1660.definitionLine = 592;
          func1660.definitionModule = "kitty";
          sourceObject = obj1372;
          lineNumber = 339
          obj1372.data["width"] = var_width__39__;
          var reader_kitty_width_1662 = function() {
            return this.data["width"];
          }
          obj1372.methods["width"] = reader_kitty_width_1662;
          obj1372.data["width"] = var_width__39__;
          var writer_kitty_width_1662 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1372.methods["width:="] = writer_kitty_width_1662;
          lineNumber = 340;
          moduleName = "kitty";
          lineNumber = 339
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 340
          obj1372.data["height"] = var_height__39__;
          var reader_kitty_height_1663 = function() {
            return this.data["height"];
          }
          obj1372.methods["height"] = reader_kitty_height_1663;
          obj1372.data["height"] = var_height__39__;
          var writer_kitty_height_1663 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1372.methods["height:="] = writer_kitty_height_1663;
          lineNumber = 341;
          moduleName = "kitty";
          lineNumber = 340
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 341
          obj1372.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1664 = function() {
            return this.data["tag"];
          }
          obj1372.methods["tag"] = reader_kitty_tag_1664;
          obj1372.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1664 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1372.methods["tag:="] = writer_kitty_tag_1664;
          lineNumber = 343;
          moduleName = "kitty";
          lineNumber = 341
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["background"] = undefined;
          var reader_kitty_background_1665 = function() {
            return this.data["background"];
          }
          obj1372.methods["background"] = reader_kitty_background_1665;
          obj1372.data["background"] = undefined;
          var writer_kitty_background_1665 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1372.methods["background:="] = writer_kitty_background_1665;
          reader_kitty_background_1665.confidential = true;
          writer_kitty_background_1665.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 344
          var string1666 = new GraceString("black");
          obj1372.data["backgroundColour"] = string1666;
          var reader_kitty_backgroundColour_1667 = function() {
            return this.data["backgroundColour"];
          }
          obj1372.methods["backgroundColour"] = reader_kitty_backgroundColour_1667;
          obj1372.data["backgroundColour"] = string1666;
          var writer_kitty_backgroundColour_1667 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1372.methods["backgroundColour:="] = writer_kitty_backgroundColour_1667;
          reader_kitty_backgroundColour_1667.confidential = true;
          writer_kitty_backgroundColour_1667.confidential = true;
          lineNumber = 346;
          moduleName = "kitty";
          lineNumber = 344
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1666)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["document"] = undefined;
          var reader_kitty_document_1668 = function() {
            return this.data["document"];
          }
          obj1372.methods["document"] = reader_kitty_document_1668;
          obj1372.data["document"] = undefined;
          var writer_kitty_document_1668 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1372.methods["document:="] = writer_kitty_document_1668;
          reader_kitty_document_1668.confidential = true;
          writer_kitty_document_1668.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1669 = function() {
            return this.data["backingCanvas"];
          }
          obj1372.methods["backingCanvas"] = reader_kitty_backingCanvas_1669;
          obj1372.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1669 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1372.methods["backingCanvas:="] = writer_kitty_backingCanvas_1669;
          reader_kitty_backingCanvas_1669.confidential = true;
          writer_kitty_backingCanvas_1669.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1670 = function() {
            return this.data["backingContext"];
          }
          obj1372.methods["backingContext"] = reader_kitty_backingContext_1670;
          obj1372.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1670 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1372.methods["backingContext:="] = writer_kitty_backingContext_1670;
          reader_kitty_backingContext_1670.confidential = true;
          writer_kitty_backingContext_1670.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["canvas"] = undefined;
          var reader_kitty_canvas_1671 = function() {
            return this.data["canvas"];
          }
          obj1372.methods["canvas"] = reader_kitty_canvas_1671;
          obj1372.data["canvas"] = undefined;
          var writer_kitty_canvas_1671 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1372.methods["canvas:="] = writer_kitty_canvas_1671;
          reader_kitty_canvas_1671.confidential = true;
          writer_kitty_canvas_1671.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1672 = function() {
            return this.data["canvasWidth"];
          }
          obj1372.methods["canvasWidth"] = reader_kitty_canvasWidth_1672;
          obj1372.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1672 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1372.methods["canvasWidth:="] = writer_kitty_canvasWidth_1672;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1673 = function() {
            return this.data["canvasHeight"];
          }
          obj1372.methods["canvasHeight"] = reader_kitty_canvasHeight_1673;
          obj1372.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1673 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1372.methods["canvasHeight:="] = writer_kitty_canvasHeight_1673;
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 355
          var call1674 = callmethod(var_collections,"list", [0]);
          var call1675 = callmethod(call1674,"new", [0]);
          obj1372.data["entities"] = call1675;
          var reader_kitty_entities_1676 = function() {
            return this.data["entities"];
          }
          obj1372.methods["entities"] = reader_kitty_entities_1676;
          obj1372.data["entities"] = call1675;
          var writer_kitty_entities_1676 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1372.methods["entities:="] = writer_kitty_entities_1676;
          reader_kitty_entities_1676.confidential = true;
          writer_kitty_entities_1676.confidential = true;
          lineNumber = 357;
          moduleName = "kitty";
          lineNumber = 355
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1675)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 357
          var bool1677 = new GraceBoolean(false)
          obj1372.data["isInit"] = bool1677;
          var reader_kitty_isInit_1678 = function() {
            return this.data["isInit"];
          }
          obj1372.methods["isInit"] = reader_kitty_isInit_1678;
          obj1372.data["isInit"] = bool1677;
          var writer_kitty_isInit_1678 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1372.methods["isInit:="] = writer_kitty_isInit_1678;
          reader_kitty_isInit_1678.confidential = true;
          writer_kitty_isInit_1678.confidential = true;
          lineNumber = 358;
          moduleName = "kitty";
          lineNumber = 357
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1677)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 358
          var bool1679 = new GraceBoolean(false)
          obj1372.data["isRunning"] = bool1679;
          var reader_kitty_isRunning_1680 = function() {
            return this.data["isRunning"];
          }
          obj1372.methods["isRunning"] = reader_kitty_isRunning_1680;
          obj1372.data["isRunning"] = bool1679;
          var writer_kitty_isRunning_1680 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1372.methods["isRunning:="] = writer_kitty_isRunning_1680;
          reader_kitty_isRunning_1680.confidential = true;
          writer_kitty_isRunning_1680.confidential = true;
          lineNumber = 360;
          moduleName = "kitty";
          lineNumber = 358
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1679)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["mctx"] = undefined;
          var reader_kitty_mctx_1681 = function() {
            return this.data["mctx"];
          }
          obj1372.methods["mctx"] = reader_kitty_mctx_1681;
          obj1372.data["mctx"] = undefined;
          var writer_kitty_mctx_1681 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1372.methods["mctx:="] = writer_kitty_mctx_1681;
          reader_kitty_mctx_1681.confidential = true;
          writer_kitty_mctx_1681.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          obj1372.data["ent"] = undefined;
          var reader_kitty_ent_1682 = function() {
            return this.data["ent"];
          }
          obj1372.methods["ent"] = reader_kitty_ent_1682;
          obj1372.data["ent"] = undefined;
          var writer_kitty_ent_1682 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1372.methods["ent:="] = writer_kitty_ent_1682;
          reader_kitty_ent_1682.confidential = true;
          writer_kitty_ent_1682.confidential = true;
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 365
          var block1683 = Grace_allocObject();
          block1683.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1683.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1683.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1683.methods["match"] = GraceBlock_match;
          block1683.methods["prefix?"] = GraceBlock_lift;
          block1683.receiver = this;
          block1683.className = 'block<kitty:365>';
          block1683.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["updateAction"] = block1683;
          var reader_kitty_updateAction_1684 = function() {
            return this.data["updateAction"];
          }
          obj1372.methods["updateAction"] = reader_kitty_updateAction_1684;
          obj1372.data["updateAction"] = block1683;
          var writer_kitty_updateAction_1684 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1372.methods["updateAction:="] = writer_kitty_updateAction_1684;
          reader_kitty_updateAction_1684.confidential = true;
          writer_kitty_updateAction_1684.confidential = true;
          lineNumber = 365;
          moduleName = "kitty";
          lineNumber = 364
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1683)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 366
          var block1685 = Grace_allocObject();
          block1685.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1685.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1685.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1685.methods["match"] = GraceBlock_match;
          block1685.methods["prefix?"] = GraceBlock_lift;
          block1685.receiver = this;
          block1685.className = 'block<kitty:366>';
          block1685.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["destroyAction"] = block1685;
          var reader_kitty_destroyAction_1686 = function() {
            return this.data["destroyAction"];
          }
          obj1372.methods["destroyAction"] = reader_kitty_destroyAction_1686;
          obj1372.data["destroyAction"] = block1685;
          var writer_kitty_destroyAction_1686 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1372.methods["destroyAction:="] = writer_kitty_destroyAction_1686;
          reader_kitty_destroyAction_1686.confidential = true;
          writer_kitty_destroyAction_1686.confidential = true;
          lineNumber = 366;
          moduleName = "kitty";
          lineNumber = 365
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1685)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 367
          var block1687 = Grace_allocObject();
          block1687.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1687.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1687.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1687.methods["match"] = GraceBlock_match;
          block1687.methods["prefix?"] = GraceBlock_lift;
          block1687.receiver = this;
          block1687.className = 'block<kitty:367>';
          block1687.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["mouseEnterAction"] = block1687;
          var reader_kitty_mouseEnterAction_1688 = function() {
            return this.data["mouseEnterAction"];
          }
          obj1372.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_1688;
          obj1372.data["mouseEnterAction"] = block1687;
          var writer_kitty_mouseEnterAction_1688 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj1372.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_1688;
          reader_kitty_mouseEnterAction_1688.confidential = true;
          writer_kitty_mouseEnterAction_1688.confidential = true;
          lineNumber = 367;
          moduleName = "kitty";
          lineNumber = 366
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1687)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 368
          var block1689 = Grace_allocObject();
          block1689.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1689.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1689.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1689.methods["match"] = GraceBlock_match;
          block1689.methods["prefix?"] = GraceBlock_lift;
          block1689.receiver = this;
          block1689.className = 'block<kitty:368>';
          block1689.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["mouseOverAction"] = block1689;
          var reader_kitty_mouseOverAction_1690 = function() {
            return this.data["mouseOverAction"];
          }
          obj1372.methods["mouseOverAction"] = reader_kitty_mouseOverAction_1690;
          obj1372.data["mouseOverAction"] = block1689;
          var writer_kitty_mouseOverAction_1690 = function(argcv, o) {
            this.data["mouseOverAction"] = o;
          }
          obj1372.methods["mouseOverAction:="] = writer_kitty_mouseOverAction_1690;
          reader_kitty_mouseOverAction_1690.confidential = true;
          writer_kitty_mouseOverAction_1690.confidential = true;
          lineNumber = 368;
          moduleName = "kitty";
          lineNumber = 367
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1689)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOverAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 369
          var block1691 = Grace_allocObject();
          block1691.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1691.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1691.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1691.methods["match"] = GraceBlock_match;
          block1691.methods["prefix?"] = GraceBlock_lift;
          block1691.receiver = this;
          block1691.className = 'block<kitty:369>';
          block1691.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["mouseExitAction"] = block1691;
          var reader_kitty_mouseExitAction_1692 = function() {
            return this.data["mouseExitAction"];
          }
          obj1372.methods["mouseExitAction"] = reader_kitty_mouseExitAction_1692;
          obj1372.data["mouseExitAction"] = block1691;
          var writer_kitty_mouseExitAction_1692 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj1372.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_1692;
          reader_kitty_mouseExitAction_1692.confidential = true;
          writer_kitty_mouseExitAction_1692.confidential = true;
          lineNumber = 369;
          moduleName = "kitty";
          lineNumber = 368
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1691)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 370
          var block1693 = Grace_allocObject();
          block1693.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1693.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1693.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1693.methods["match"] = GraceBlock_match;
          block1693.methods["prefix?"] = GraceBlock_lift;
          block1693.receiver = this;
          block1693.className = 'block<kitty:370>';
          block1693.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["mouseDownAction"] = block1693;
          var reader_kitty_mouseDownAction_1694 = function() {
            return this.data["mouseDownAction"];
          }
          obj1372.methods["mouseDownAction"] = reader_kitty_mouseDownAction_1694;
          obj1372.data["mouseDownAction"] = block1693;
          var writer_kitty_mouseDownAction_1694 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj1372.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_1694;
          reader_kitty_mouseDownAction_1694.confidential = true;
          writer_kitty_mouseDownAction_1694.confidential = true;
          lineNumber = 370;
          moduleName = "kitty";
          lineNumber = 369
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1693)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 371
          var block1695 = Grace_allocObject();
          block1695.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1695.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1695.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1695.methods["match"] = GraceBlock_match;
          block1695.methods["prefix?"] = GraceBlock_lift;
          block1695.receiver = this;
          block1695.className = 'block<kitty:371>';
          block1695.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1372.data["mouseUpAction"] = block1695;
          var reader_kitty_mouseUpAction_1696 = function() {
            return this.data["mouseUpAction"];
          }
          obj1372.methods["mouseUpAction"] = reader_kitty_mouseUpAction_1696;
          obj1372.data["mouseUpAction"] = block1695;
          var writer_kitty_mouseUpAction_1696 = function(argcv, o) {
            this.data["mouseUpAction"] = o;
          }
          obj1372.methods["mouseUpAction:="] = writer_kitty_mouseUpAction_1696;
          reader_kitty_mouseUpAction_1696.confidential = true;
          writer_kitty_mouseUpAction_1696.confidential = true;
          lineNumber = 371;
          moduleName = "kitty";
          lineNumber = 370
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1695)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseUpAction' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 371
          var bool1697 = new GraceBoolean(false)
          obj1372.data["mouseOver"] = bool1697;
          var reader_kitty_mouseOver_1698 = function() {
            return this.data["mouseOver"];
          }
          obj1372.methods["mouseOver"] = reader_kitty_mouseOver_1698;
          obj1372.data["mouseOver"] = bool1697;
          var writer_kitty_mouseOver_1698 = function(argcv, o) {
            this.data["mouseOver"] = o;
          }
          obj1372.methods["mouseOver:="] = writer_kitty_mouseOver_1698;
          reader_kitty_mouseOver_1698.confidential = true;
          writer_kitty_mouseOver_1698.confidential = true;
          lineNumber = 373;
          moduleName = "kitty";
          lineNumber = 371
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1697)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseOver' to be of type Unknown"))
          obj1372.mutable = true;
          sourceObject = obj1372;
          lineNumber = 373
          onSelf = true;
          var call1699 = callmethod(this, "init", [0]);
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          sourceObject = obj1372;
          superDepth = origSuperDepth;
        }
        obj_init_1372.apply(inheritingObject, []);
        return obj1372
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1040.methods["new()object"] = func1371;
    var func1700 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 336
        var string1701 = new GraceString("class KittyWorld");
        return string1701
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1700.paramCounts = [
    ];
    func1700.variableArities = [
    ];
    obj1040.methods["asDebugString"] = func1700;
    func1700.definitionLine = 336;
    func1700.definitionModule = "kitty";
    sourceObject = obj1040;
    sourceObject = obj1040;
    superDepth = origSuperDepth;
  }
  obj_init_1040.apply(obj1040, []);
  var var_KittyWorld = obj1040;
  lineNumber = 599
  lineNumber = 608
  lineNumber = 642
  lineNumber = 657
  lineNumber = 661
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyWorld.new:\n mouseOver\n setMouseExitAction\n moveHeightMultipler\n setMouseDragAction\n canvasWidth:=\n init\n canvasHeight\n setMouseUpAction\n mouseUp\n mouseOverAction\n mouseEnterAction\n stop\n isInit:=\n tick\n backingContext\n isRunning:=\n moveWidthMultipler\n height\n mctx\n document\n width\n mouseExit\n ent\n backgroundColour:=\n setUpdateAction\n setMouseOverAction\n canvas:=\n background:=\n updateAction:=\n mouseOverAction:=\n tag\n destroyAction:=\n mouseDown\n backingCanvas:=\n mouseUpAction:=\n start\n document:=\n backingCanvas\n isRunning\n ent:=\n mouseDownAction\n entities\n getContext\n mouseEnter\n backingContext:=\n setBackground\n setDestroyAction\n mouseExitAction:=\n canvasWidth\n updateAction\n setMouseDownAction\n isInit\n mctx:=\n mouseDownAction:=\n width:=\n mouseOver:=\n canvas\n addEntity\n canvasHeight:=\n setMouseEnterAction\n tag:=\n backgroundColour\n mouseEnterAction:=\n background\n mouseExitAction\n destroyAction\n mouseUpAction\n height:=\n entities:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconfidential:\nfresh:World()width()height:\n mouseOver\n setMouseExitAction\n mouseUp\n setMouseDragAction\n canvasWidth:=\n setDestroyAction\n canvasHeight\n setMouseUpAction\n moveHeightMultipler\n mouseOverAction\n mouseEnterAction\n stop\n isInit:=\n tick\n backingContext\n isRunning:=\n moveWidthMultipler\n height\n mctx\n document\n width\n mouseExit\n ent\n backgroundColour:=\n setUpdateAction\n setMouseOverAction\n canvas:=\n background:=\n updateAction:=\n mouseOverAction:=\n tag\n destroyAction:=\n mouseDown\n backingCanvas:=\n mouseUpAction:=\n start\n document:=\n backingCanvas\n isRunning\n ent:=\n mouseDownAction\n entities\n getContext\n mouseEnter\n backingContext:=\n setBackground\n init\n mouseEnterAction:=\n canvasWidth\n updateAction\n setMouseDownAction\n isInit\n mctx:=\n mouseDownAction:=\n width:=\n mouseOver:=\n mouseExitAction:=\n addEntity\n canvasHeight:=\n setMouseEnterAction\n tag:=\n backgroundColour\n canvas\n background\n mouseExitAction\n destroyAction\n mouseUpAction\n height:=\n entities:=\nmodules:\n StandardPrelude\n mgcollections\nconstructors-of:Point:\n x()y\nfresh:Entity()x()y:\n mouseOver\n mouseOverAction:=\n mouseEnter\n awake\n tag\n setMouseExitAction\n mouseUp\n getRotation\n setMouseDragAction\n setDestroyAction\n mouseDragStart\n mouseExitAction:=\n mouseExitAction\n mouseDragAction:=\n posX:=\n mouseOverAction\n mouseEnterAction\n mouseDragAction\n turn\n posX\n posY\n draw\n tick\n mouseDownEntity:=\n mouseDownAction:=\n mouseUpAction\n mouseOver:=\n mouseDownEntity\n setMouseUpAction\n mouseExit\n image\n strafe\n mouseDragStart:=\n setUpdateAction\n setMouseOverAction\n setMouseEnterAction\n tag:=\n createImage\n updateAction:=\n getY\n updateAction\n mouseEnterAction:=\n destroyAction:=\n mouseDown\n posY:=\n mouseUpAction:=\n setX\n setY\n setLocation\n rotation:=\n destroyAction\n kill\n setImage\n rotation\n mouseDownAction\n move\n setMouseDownAction\n image:=\n getX\nmethods-of:Point.x()y:\n up\n x\n y\n left\n right\n down\nconstructors-of:KittyImage:\n new\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\nconstructors-of:KittyWorld:\n new\nmethods-of:KittyEntity.new:\n mouseOver\n posX:=\n mouseEnter\n awake\n mouseEnterAction:=\n setMouseExitAction\n mouseUp\n getRotation\n setMouseDragAction\n setDestroyAction\n mouseDragStart\n mouseExitAction:=\n mouseDown\n mouseDragAction:=\n updateAction\n mouseOverAction\n mouseEnterAction\n setY\n turn\n posX\n posY\n draw\n setMouseDownAction\n mouseDownEntity:=\n mouseDownAction:=\n kill\n mouseOver:=\n mouseDownEntity\n setMouseUpAction\n mouseExit\n image\n strafe\n mouseDragStart:=\n setUpdateAction\n setMouseOverAction\n setMouseEnterAction\n tag:=\n createImage\n updateAction:=\n getY\n mouseOverAction:=\n tag\n destroyAction:=\n mouseExitAction\n posY:=\n mouseUpAction:=\n setX\n mouseDragAction\n setLocation\n rotation:=\n destroyAction\n mouseUpAction\n setImage\n rotation\n getX\n move\n tick\n image:=\n mouseDownAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseUpListener\n mouseUpListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n mouseDown\n mouseDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseUp\n onMouseDrag\n onMouseEnter\n onMouseOver\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n draw\n height:=\n drawImage\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\n";
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
    "        updateAction.apply",
    "        if (mouseOver) then {",
    "            mouseOverAction.apply",
    "        }",
    "        if ((mouseOver && mouseDownEntity) && (mouse.position != mouseDragStart)) then {",
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
    "    }",
    "",
    "    method mouseUp {",
    "        if (mouseDownEntity) then {",
    "            mouseDragStart := mouse.position",
    "            mouseUpAction.apply",
    "            mouseDownEntity := false",
    "            return true",
    "        }",
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
