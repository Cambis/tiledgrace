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
  lineNumber = 225
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
      lineNumber = 226
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 226;
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
        lineNumber = 227
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
  func8.definitionLine = 225;
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
      obj13.definitionLine = 226;
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
  lineNumber = 237
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
      lineNumber = 238
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
  func16.definitionLine = 237;
  func16.definitionModule = "kitty";
  lineNumber = 242
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
      lineNumber = 243
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
  func18.definitionLine = 242;
  func18.definitionModule = "kitty";
  lineNumber = 246
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
      lineNumber = 248
      lineNumber = 247
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
  func20.definitionLine = 246;
  func20.definitionModule = "kitty";
  lineNumber = 251
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
      lineNumber = 252
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
  func24.definitionLine = 251;
  func24.definitionModule = "kitty";
  lineNumber = 255
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
      lineNumber = 256
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
  func26.definitionLine = 255;
  func26.definitionModule = "kitty";
  lineNumber = 259
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
      lineNumber = 260
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
  func28.definitionLine = 259;
  func28.definitionModule = "kitty";
  lineNumber = 263
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
      lineNumber = 264
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
  func30.definitionLine = 263;
  func30.definitionModule = "kitty";
  lineNumber = 448
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
      lineNumber = 449
      var obj33 = Grace_allocObject();
      obj33.definitionModule = "kitty";
      obj33.definitionLine = 449;
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
        lineNumber = 450
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
  func32.definitionLine = 448;
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
      obj37.definitionLine = 449;
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
  lineNumber = 457
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
      lineNumber = 462
      lineNumber = 461
      var call41 = callmethod(var_point,"x", [0]);
      var var_x = call41;
      lineNumber = 462;
      moduleName = "kitty";
      lineNumber = 461
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'x' to be of type Unknown"))
      lineNumber = 463
      lineNumber = 462
      var call42 = callmethod(var_point,"y", [0]);
      var var_y = call42;
      lineNumber = 463;
      moduleName = "kitty";
      lineNumber = 462
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'y' to be of type Unknown"))
      lineNumber = 463
      var string43 = new GraceString(")");
      var string46 = new GraceString(", ");
      var string49 = new GraceString("(");
      var opresult51 = callmethod(string49, "++", [1], var_x);
      var opresult53 = callmethod(opresult51, "++", [1], string46);
      var opresult55 = callmethod(opresult53, "++", [1], var_y);
      var opresult57 = callmethod(opresult55, "++", [1], string43);
      var call58 = Grace_print(opresult57);
      lineNumber = 467
      lineNumber = 465
      var call59 = callmethod(var_vs,"size", [0]);
      var var_j = call59;
      lineNumber = 467;
      moduleName = "kitty";
      lineNumber = 465
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_j)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'j' to be of type Unknown"))
      lineNumber = 469
      lineNumber = 467
      var bool60 = new GraceBoolean(false)
      var var_inside = bool60;
      lineNumber = 469;
      moduleName = "kitty";
      lineNumber = 467
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_inside)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of var 'inside' to be of type Unknown"))
      lineNumber = 469
      var call61 = callmethod(var_vs,"size", [0]);
      var opresult64 = callmethod(new GraceNum(1), "..", [1], call61);
      lineNumber = 485
      var block65 = Grace_allocObject();
      block65.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block65.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block65.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block65.methods["match"] = GraceBlock_match;
      block65.methods["prefix?"] = GraceBlock_lift;
      block65.receiver = this;
      block65.className = 'block<kitty:485>';
      block65.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 472
        lineNumber = 471
        var call66 = callmethod(var_vs,"at", [1], var_i);
        var call67 = callmethod(call66,"x", [0]);
        var var_xi = call67;
        lineNumber = 472;
        moduleName = "kitty";
        lineNumber = 471
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xi' to be of type Unknown"))
        lineNumber = 473
        lineNumber = 472
        var call68 = callmethod(var_vs,"at", [1], var_i);
        var call69 = callmethod(call68,"y", [0]);
        var var_yi = call69;
        lineNumber = 473;
        moduleName = "kitty";
        lineNumber = 472
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yi)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yi' to be of type Unknown"))
        lineNumber = 474
        lineNumber = 473
        var call70 = callmethod(var_vs,"at", [1], var_j);
        var call71 = callmethod(call70,"x", [0]);
        var var_xj = call71;
        lineNumber = 474;
        moduleName = "kitty";
        lineNumber = 473
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_xj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'xj' to be of type Unknown"))
        lineNumber = 476
        lineNumber = 474
        var call72 = callmethod(var_vs,"at", [1], var_j);
        var call73 = callmethod(call72,"y", [0]);
        var var_yj = call73;
        lineNumber = 476;
        moduleName = "kitty";
        lineNumber = 474
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_yj)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'yj' to be of type Unknown"))
        lineNumber = 476
        var string74 = new GraceString(")");
        var string77 = new GraceString(", ");
        var string80 = new GraceString(") (");
        var string83 = new GraceString(", ");
        var string86 = new GraceString("(");
        var opresult88 = callmethod(string86, "++", [1], var_xi);
        var opresult90 = callmethod(opresult88, "++", [1], string83);
        var opresult92 = callmethod(opresult90, "++", [1], var_yi);
        var opresult94 = callmethod(opresult92, "++", [1], string80);
        var opresult96 = callmethod(opresult94, "++", [1], var_xj);
        var opresult98 = callmethod(opresult96, "++", [1], string77);
        var opresult100 = callmethod(opresult98, "++", [1], var_yj);
        var opresult102 = callmethod(opresult100, "++", [1], string74);
        var call103 = Grace_print(opresult102);
        lineNumber = 479
        lineNumber = 478
        var diff107 = callmethod(var_yj, "-", [1], var_yi);
        var diff111 = callmethod(var_y, "-", [1], var_yi);
        var diff115 = callmethod(var_xj, "-", [1], var_xi);
        var prod117 = callmethod(diff115, "*", [1], diff111);
        var quotient119 = callmethod(prod117, "/", [1], diff107);
        var opresult121 = callmethod(quotient119, "+", [1], var_xi);
        var opresult124 = callmethod(var_x, "<", [1], opresult121);
        var opresult128 = callmethod(var_yj, ">", [1], var_y);
        var opresult132 = callmethod(var_yi, ">", [1], var_y);
        var opresult134 = callmethod(opresult132, "!=", [1], opresult128);
        var opresult136 = callmethod(opresult134, "&&", [1], opresult124);
        var var_intersect = opresult136;
        lineNumber = 479;
        moduleName = "kitty";
        lineNumber = 478
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_intersect)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'intersect' to be of type Unknown"))
        lineNumber = 482
        var if137 = var_done;
        lineNumber = 479
        if (Grace_isTrue(var_intersect)) {
          lineNumber = 481
          lineNumber = 480
          var call138 = callmethod(var_inside,"prefix!", [0]);
          var_inside = call138;
          if137 = call138;
        }
        lineNumber = 484
        lineNumber = 482
        var_j = var_i;
        return var_i;
      };
      var call139 = callmethod(Grace_prelude,"for()do", [1, 1], opresult64, block65);
      lineNumber = 486
      lineNumber = 485
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
  func40.definitionLine = 457;
  func40.definitionModule = "kitty";
  lineNumber = 491
  var func140 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func140.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 493
      var string141 = new GraceString("CHECKING...");
      var call142 = Grace_print(string141);
      lineNumber = 500
      var if143 = var_done;
      lineNumber = 495
      var call144 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call144)) {
        lineNumber = 496
        var string145 = new GraceString("NO WORLD!!");
        var call146 = Grace_print(string145);
        lineNumber = 498
        return var_done
      }
      lineNumber = 500
      var string147 = new GraceString("STARTING...");
      var call148 = Grace_print(string147);
      lineNumber = 503
      var call149 = callmethod(var_m__95__world,"start", [0]);
      return call149
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func140.paramCounts = [
    0,
  ];
  func140.variableArities = [
    false,
  ];
  this.methods["start"] = func140;
  func140.definitionLine = 491;
  func140.definitionModule = "kitty";
  lineNumber = 506
  var func150 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func150.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 507
      var call151 = callmethod(var_m__95__world,"stop", [0]);
      return call151
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func150.paramCounts = [
    0,
  ];
  func150.variableArities = [
    false,
  ];
  this.methods["stop"] = func150;
  func150.definitionLine = 506;
  func150.definitionModule = "kitty";
  lineNumber = 510
  var func152 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func152.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 512
      lineNumber = 511
      var_m__95__world = var_world__39__;
      lineNumber = 513
      lineNumber = 512
      var bool153 = new GraceBoolean(true)
      var_worldSet = bool153;
      return bool153
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func152.paramTypes = [];
  func152.paramTypes.push([]);
  func152.paramCounts = [
    1,
  ];
  func152.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func152;
  func152.definitionLine = 510;
  func152.definitionModule = "kitty";
  lineNumber = 515
  var func154 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func154.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 516
      onSelf = true;
      var call155 = callmethod(this, "start", [0]);
      return call155
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
  this.methods["atModuleEnd"] = func154;
  func154.definitionLine = 515;
  func154.definitionModule = "kitty";
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
  var call156 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call156;
  this.data = call156.data;
  this._value = call156._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 507
  var func157 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func157.paramCounts[0])
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
  func157.paramCounts = [
    0,
  ];
  func157.variableArities = [
    false,
  ];
  this.methods["m_world"] = func157;
  func157.definitionLine = 507;
  func157.definitionModule = "kitty";
  lineNumber = 507
  var func158 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func158.paramCounts[0])
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
  func158.paramCounts = [
    1,
  ];
  func158.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func158;
  func158.definitionLine = 507;
  func158.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool159 = new GraceBoolean(false)
  var var_worldSet = bool159;
  lineNumber = 507
  var func160 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func160.paramCounts[0])
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
  func160.paramCounts = [
    0,
  ];
  func160.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func160;
  func160.definitionLine = 507;
  func160.definitionModule = "kitty";
  lineNumber = 507
  var func161 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func161.paramCounts[0])
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
  func161.paramCounts = [
    1,
  ];
  func161.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func161;
  func161.definitionLine = 507;
  func161.definitionModule = "kitty";
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
  lineNumber = 507
  var func162 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func162.paramCounts[0])
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
  func162.paramCounts = [
    0,
  ];
  func162.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func162;
  func162.definitionLine = 507;
  func162.definitionModule = "kitty";
  lineNumber = 507
  var func163 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func163.paramCounts[0])
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
  func163.paramCounts = [
    1,
  ];
  func163.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func163;
  func163.definitionLine = 507;
  func163.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 507
  var func164 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func164.paramCounts[0])
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
  func164.paramCounts = [
    0,
  ];
  func164.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func164;
  func164.definitionLine = 507;
  func164.definitionModule = "kitty";
  lineNumber = 507
  var func165 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func165.paramCounts[0])
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
  func165.paramCounts = [
    1,
  ];
  func165.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func165;
  func165.definitionLine = 507;
  func165.definitionModule = "kitty";
  lineNumber = 15
  var var_mouseDownListener;
  lineNumber = 507
  var func166 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func166.paramCounts[0])
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
  func166.paramCounts = [
    0,
  ];
  func166.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func166;
  func166.definitionLine = 507;
  func166.definitionModule = "kitty";
  lineNumber = 507
  var func167 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func167.paramCounts[0])
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
  func167.paramCounts = [
    1,
  ];
  func167.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func167;
  func167.definitionLine = 507;
  func167.definitionModule = "kitty";
  lineNumber = 16
  var var_mouseMoveListener;
  lineNumber = 507
  var func168 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func168.paramCounts[0])
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
  func168.paramCounts = [
    0,
  ];
  func168.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func168;
  func168.definitionLine = 507;
  func168.definitionModule = "kitty";
  lineNumber = 507
  var func169 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func169.paramCounts[0])
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
  func169.paramCounts = [
    1,
  ];
  func169.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func169;
  func169.definitionLine = 507;
  func169.definitionModule = "kitty";
  lineNumber = 19
  lineNumber = 16
  var call170 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_currentKeyDown = call170;
  lineNumber = 507
  var func171 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func171.paramCounts[0])
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
  func171.paramCounts = [
    0,
  ];
  func171.variableArities = [
    false,
  ];
  this.methods["currentKeyDown"] = func171;
  func171.definitionLine = 507;
  func171.definitionModule = "kitty";
  lineNumber = 507
  var func172 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func172.paramCounts[0])
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
  func172.paramCounts = [
    1,
  ];
  func172.variableArities = [
    false,
  ];
  this.methods["currentKeyDown:="] = func172;
  func172.definitionLine = 507;
  func172.definitionModule = "kitty";
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
  var call173 = callmethod(var_dom,"window", [0]);
  var call174 = callmethod(call173,"Math", [0]);
  var var_math = call174;
  var func175 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func175.paramCounts[0])
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
  func175.paramCounts = [
    0,
  ];
  func175.variableArities = [
    false,
  ];
  this.methods["math"] = func175;
  func175.definitionLine = 19;
  func175.definitionModule = "kitty";
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
  var func176 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func176.paramCounts[0])
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
  func176.paramCounts = [
    0,
  ];
  func176.variableArities = [
    false,
  ];
  this.methods["kitten"] = func176;
  func176.definitionLine = 19;
  func176.definitionModule = "kitty";
  lineNumber = 19
  var func177 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func177.paramCounts[0])
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
  func177.paramCounts = [
    1,
  ];
  func177.variableArities = [
    false,
  ];
  this.methods["kitten:="] = func177;
  func177.definitionLine = 19;
  func177.definitionModule = "kitty";
  lineNumber = 25
  var func178 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func178.paramCounts[0])
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
  func178.paramCounts = [
    0,
  ];
  func178.variableArities = [
    false,
  ];
  this.methods["Point"] = func178;
  func178.definitionLine = 25;
  func178.definitionModule = "kitty";
  var obj179 = Grace_allocObject();
  obj179.definitionModule = "kitty";
  obj179.definitionLine = 25;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func181.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func181.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj182 = Grace_allocObject();
        obj182.definitionModule = "kitty";
        obj182.definitionLine = 25;
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
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              onSelf = true;
              var call186 = callmethod(this, "x", [0]);
              var diff188 = callmethod(call186, "-", [1], var_dx);
              onSelf = true;
              var call189 = callmethod(this, "y", [0]);
              var call190 = callmethod(var_Point,"x()sy", [1, 1], diff188, call189);
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
          obj182.methods["left"] = func184;
          func184.definitionLine = 28;
          func184.definitionModule = "kitty";
          var func191 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func191.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              onSelf = true;
              var call193 = callmethod(this, "x", [0]);
              var opresult195 = callmethod(call193, "+", [1], var_dx);
              onSelf = true;
              var call196 = callmethod(this, "y", [0]);
              var call197 = callmethod(var_Point,"x()y", [1, 1], opresult195, call196);
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
          obj182.methods["right"] = func191;
          func191.definitionLine = 29;
          func191.definitionModule = "kitty";
          var func198 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call199 = callmethod(this, "x", [0]);
              onSelf = true;
              var call201 = callmethod(this, "y", [0]);
              var diff203 = callmethod(call201, "-", [1], var_dy);
              var call204 = callmethod(var_Point,"x()y", [1, 1], call199, diff203);
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
          obj182.methods["up"] = func198;
          func198.definitionLine = 30;
          func198.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func205.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call206 = callmethod(this, "x", [0]);
              onSelf = true;
              var call208 = callmethod(this, "y", [0]);
              var opresult210 = callmethod(call208, "+", [1], var_dy);
              var call211 = callmethod(var_Point,"x()y", [1, 1], call206, opresult210);
              return call211
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func205.paramCounts = [
            1,
          ];
          func205.variableArities = [
            false,
          ];
          obj182.methods["down"] = func205;
          func205.definitionLine = 31;
          func205.definitionModule = "kitty";
          sourceObject = obj182;
          lineNumber = 26
          obj182.data["x"] = var_x__39__;
          var reader_kitty_x_212 = function() {
            return this.data["x"];
          }
          reader_kitty_x_212.def = true;
          obj182.methods["x"] = reader_kitty_x_212;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj182;
          lineNumber = 27
          obj182.data["y"] = var_y__39__;
          var reader_kitty_y_213 = function() {
            return this.data["y"];
          }
          reader_kitty_y_213.def = true;
          obj182.methods["y"] = reader_kitty_y_213;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
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
      1,
      1,
    ];
    func181.variableArities = [
      false,
      false,
    ];
    obj179.methods["x()y"] = func181;
    func181.definitionLine = 25;
    func181.definitionModule = "kitty";
    var func214 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj215 = Grace_allocObject();
        obj215.definitionModule = "kitty";
        obj215.definitionLine = 25;
        var inho215 = inheritingObject;
        while (inho215.superobj) inho215 = inho215.superobj;
        inho215.superobj = obj215;
        obj215.data = inheritingObject.data;
        obj215.outer = this;
        var reader_kitty_outer_216 = function() {
          return this.outer;
        }
        obj215.methods["outer"] = reader_kitty_outer_216;
        function obj_init_215() {
          var origSuperDepth = superDepth;
          superDepth = obj215;
          obj215.annotations = [];
          var func217 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func217.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              onSelf = true;
              var call219 = callmethod(this, "x", [0]);
              var diff221 = callmethod(call219, "-", [1], var_dx);
              onSelf = true;
              var call222 = callmethod(this, "y", [0]);
              var call223 = callmethod(var_Point,"x()sy", [1, 1], diff221, call222);
              return call223
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func217.paramCounts = [
            1,
          ];
          func217.variableArities = [
            false,
          ];
          obj215.methods["left"] = func217;
          func217.definitionLine = 28;
          func217.definitionModule = "kitty";
          var func224 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func224.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              onSelf = true;
              var call226 = callmethod(this, "x", [0]);
              var opresult228 = callmethod(call226, "+", [1], var_dx);
              onSelf = true;
              var call229 = callmethod(this, "y", [0]);
              var call230 = callmethod(var_Point,"x()y", [1, 1], opresult228, call229);
              return call230
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
          obj215.methods["right"] = func224;
          func224.definitionLine = 29;
          func224.definitionModule = "kitty";
          var func231 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func231.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              onSelf = true;
              var call232 = callmethod(this, "x", [0]);
              onSelf = true;
              var call234 = callmethod(this, "y", [0]);
              var diff236 = callmethod(call234, "-", [1], var_dy);
              var call237 = callmethod(var_Point,"x()y", [1, 1], call232, diff236);
              return call237
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func231.paramCounts = [
            1,
          ];
          func231.variableArities = [
            false,
          ];
          obj215.methods["up"] = func231;
          func231.definitionLine = 30;
          func231.definitionModule = "kitty";
          var func238 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func238.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              onSelf = true;
              var call239 = callmethod(this, "x", [0]);
              onSelf = true;
              var call241 = callmethod(this, "y", [0]);
              var opresult243 = callmethod(call241, "+", [1], var_dy);
              var call244 = callmethod(var_Point,"x()y", [1, 1], call239, opresult243);
              return call244
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func238.paramCounts = [
            1,
          ];
          func238.variableArities = [
            false,
          ];
          obj215.methods["down"] = func238;
          func238.definitionLine = 31;
          func238.definitionModule = "kitty";
          sourceObject = obj215;
          lineNumber = 26
          obj215.data["x"] = var_x__39__;
          var reader_kitty_x_245 = function() {
            return this.data["x"];
          }
          reader_kitty_x_245.def = true;
          obj215.methods["x"] = reader_kitty_x_245;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj215;
          lineNumber = 27
          obj215.data["y"] = var_y__39__;
          var reader_kitty_y_246 = function() {
            return this.data["y"];
          }
          reader_kitty_y_246.def = true;
          obj215.methods["y"] = reader_kitty_y_246;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj215;
          sourceObject = obj215;
          sourceObject = obj215;
          sourceObject = obj215;
          superDepth = origSuperDepth;
        }
        obj_init_215.apply(inheritingObject, []);
        return obj215
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj179.methods["x()y()object"] = func214;
    var func247 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 25
        var string248 = new GraceString("class Point");
        return string248
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func247.paramCounts = [
    ];
    func247.variableArities = [
    ];
    obj179.methods["asDebugString"] = func247;
    func247.definitionLine = 25;
    func247.definitionModule = "kitty";
    sourceObject = obj179;
    sourceObject = obj179;
    superDepth = origSuperDepth;
  }
  obj_init_179.apply(obj179, []);
  var var_Point = obj179;
  lineNumber = 34
  var obj249 = Grace_allocObject();
  obj249.definitionModule = "kitty";
  obj249.definitionLine = 34;
  obj249.outer = this;
  var reader_kitty_outer_250 = function() {
    return this.outer;
  }
  obj249.methods["outer"] = reader_kitty_outer_250;
  function obj_init_249() {
    var origSuperDepth = superDepth;
    superDepth = obj249;
    obj249.annotations = [];
    var func251 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func251.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 37
        onSelf = true;
        var call252 = callmethod(this, "position", [0]);
        var call253 = callmethod(call252,"x", [0]);
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
      0,
    ];
    func251.variableArities = [
      false,
    ];
    obj249.methods["x"] = func251;
    func251.definitionLine = 36;
    func251.definitionModule = "kitty";
    var func254 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func254.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 40
        onSelf = true;
        var call255 = callmethod(this, "position", [0]);
        var call256 = callmethod(call255,"y", [0]);
        return call256
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func254.paramCounts = [
      0,
    ];
    func254.variableArities = [
      false,
    ];
    obj249.methods["y"] = func254;
    func254.definitionLine = 39;
    func254.definitionModule = "kitty";
    var func257 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func257.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 43
        onSelf = true;
        var call258 = callmethod(this, "position", [0]);
        return call258
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func257.paramCounts = [
      0,
    ];
    func257.variableArities = [
      false,
    ];
    obj249.methods["location"] = func257;
    func257.definitionLine = 42;
    func257.definitionModule = "kitty";
    sourceObject = obj249;
    lineNumber = 35
    var call259 = callmethod(var_Point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj249.data["position"] = call259;
    var reader_kitty_position_260 = function() {
      return this.data["position"];
    }
    obj249.methods["position"] = reader_kitty_position_260;
    obj249.data["position"] = call259;
    var writer_kitty_position_260 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj249.methods["position:="] = writer_kitty_position_260;
    lineNumber = 35;
    moduleName = "kitty";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call259)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj249.mutable = true;
    sourceObject = obj249;
    sourceObject = obj249;
    sourceObject = obj249;
    superDepth = origSuperDepth;
  }
  obj_init_249.apply(obj249, []);
  var var_mouse = obj249;
  lineNumber = 40
  var func261 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func261.paramCounts[0])
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
  func261.paramCounts = [
    0,
  ];
  func261.variableArities = [
    false,
  ];
  this.methods["mouse"] = func261;
  func261.definitionLine = 40;
  func261.definitionModule = "kitty";
  lineNumber = 34;
  moduleName = "kitty";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  lineNumber = 48
  var func262 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func262.paramCounts[0])
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
  func262.paramCounts = [
    0,
  ];
  func262.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func262;
  func262.definitionLine = 48;
  func262.definitionModule = "kitty";
  var obj263 = Grace_allocObject();
  obj263.definitionModule = "kitty";
  obj263.definitionLine = 48;
  obj263.outer = this;
  var reader_kitty_outer_264 = function() {
    return this.outer;
  }
  obj263.methods["outer"] = reader_kitty_outer_264;
  function obj_init_263() {
    var origSuperDepth = superDepth;
    superDepth = obj263;
    obj263.annotations = [];
    var func265 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func265.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj266 = Grace_allocObject();
        obj266.definitionModule = "kitty";
        obj266.definitionLine = 48;
        obj266.outer = this;
        var reader_kitty_outer_267 = function() {
          return this.outer;
        }
        obj266.methods["outer"] = reader_kitty_outer_267;
        function obj_init_266() {
          var origSuperDepth = superDepth;
          superDepth = obj266;
          obj266.annotations = [];
          var func268 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 63
              var call269 = callmethod(var_ctx,"save", [0]);
              lineNumber = 64
              var call270 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 65
              var prod274 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient276 = callmethod(prod274, "/", [1], new GraceNum(180));
              var call277 = callmethod(var_ctx,"rotate", [1], quotient276);
              lineNumber = 66
              onSelf = true;
              var call278 = callmethod(this, "elements", [0]);
              lineNumber = 69
              var block279 = Grace_allocObject();
              block279.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block279.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block279.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block279.methods["match"] = GraceBlock_match;
              block279.methods["prefix?"] = GraceBlock_lift;
              block279.receiver = this;
              block279.className = 'block<kitty:69>';
              block279.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 67
                onSelf = true;
                var call281 = callmethod(this, "width", [0]);
                var call282 = callmethod(call281,"prefix-", [0]);
                var quotient284 = callmethod(call282, "/", [1], new GraceNum(2));
                onSelf = true;
                var call286 = callmethod(this, "height", [0]);
                var call287 = callmethod(call286,"prefix-", [0]);
                var quotient289 = callmethod(call287, "/", [1], new GraceNum(2));
                onSelf = true;
                var call290 = callmethod(this, "width", [0]);
                onSelf = true;
                var call291 = callmethod(this, "height", [0]);
                var call292 = callmethod(var_ctx,"drawImage", [5], var_element, quotient284, quotient289, call290, call291);
                return call292;
              };
              var call293 = callmethod(Grace_prelude,"for()do", [1, 1], call278, block279);
              lineNumber = 69
              var call294 = callmethod(var_ctx,"restore", [0]);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func268.paramCounts = [
            4,
          ];
          func268.variableArities = [
            false,
          ];
          obj266.methods["draw"] = func268;
          func268.definitionLine = 61;
          func268.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 74
              onSelf = true;
              var call296 = callmethod(this, "imgTag", [0]);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func295.paramCounts = [
            0,
          ];
          func295.variableArities = [
            false,
          ];
          obj266.methods["getTag"] = func295;
          func295.definitionLine = 73;
          func295.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
              onSelf = true;
              var call298 = callmethod(this, "elements", [0]);
              var call299 = callmethod(call298,"push", [1], var_imgTag__39__);
              return call299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            1,
          ];
          func297.variableArities = [
            false,
          ];
          obj266.methods["drawImage"] = func297;
          func297.definitionLine = 77;
          func297.definitionModule = "kitty";
          sourceObject = obj266;
          lineNumber = 52
          var string300 = new GraceString("img");
          var call301 = callmethod(var_dom,"document", [0]);
          var call302 = callmethod(call301,"createElement", [1], string300);
          obj266.data["imgTag"] = call302;
          var reader_kitty_imgTag_303 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_303.def = true;
          reader_kitty_imgTag_303.confidential = true;
          obj266.methods["imgTag"] = reader_kitty_imgTag_303;
          lineNumber = 52;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call302)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj266;
          lineNumber = 55
          lineNumber = 52
          lineNumber = 53
          onSelf = true;
          var call304 = callmethod(this, "imgTag", [0]);
          var call305 = callmethod(call304,"src:=", [1], var_url__39__);
          sourceObject = obj266;
          lineNumber = 55
          var call306 = callmethod(var_collections,"list", [0]);
          var call307 = callmethod(call306,"new", [0]);
          obj266.data["elements"] = call307;
          var reader_kitty_elements_308 = function() {
            return this.data["elements"];
          }
          obj266.methods["elements"] = reader_kitty_elements_308;
          obj266.data["elements"] = call307;
          var writer_kitty_elements_308 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj266.methods["elements:="] = writer_kitty_elements_308;
          reader_kitty_elements_308.confidential = true;
          writer_kitty_elements_308.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call307)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj266.mutable = true;
          sourceObject = obj266;
          lineNumber = 56
          onSelf = true;
          var call309 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call310 = callmethod(this, "elements", [0]);
          var call311 = callmethod(call310,"push", [1], call309);
          sourceObject = obj266;
          lineNumber = 58
          obj266.data["height"] = var_height__39__;
          var reader_kitty_height_312 = function() {
            return this.data["height"];
          }
          obj266.methods["height"] = reader_kitty_height_312;
          obj266.data["height"] = var_height__39__;
          var writer_kitty_height_312 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj266.methods["height:="] = writer_kitty_height_312;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj266.mutable = true;
          sourceObject = obj266;
          lineNumber = 59
          obj266.data["width"] = var_width__39__;
          var reader_kitty_width_313 = function() {
            return this.data["width"];
          }
          obj266.methods["width"] = reader_kitty_width_313;
          obj266.data["width"] = var_width__39__;
          var writer_kitty_width_313 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj266.methods["width:="] = writer_kitty_width_313;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj266.mutable = true;
          sourceObject = obj266;
          sourceObject = obj266;
          sourceObject = obj266;
          superDepth = origSuperDepth;
        }
        obj_init_266.apply(obj266, []);
        return obj266
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func265.paramCounts = [
      3,
    ];
    func265.variableArities = [
      false,
    ];
    obj263.methods["new"] = func265;
    func265.definitionLine = 48;
    func265.definitionModule = "kitty";
    var func314 = function(argcv) {
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
        var obj315 = Grace_allocObject();
        obj315.definitionModule = "kitty";
        obj315.definitionLine = 48;
        var inho315 = inheritingObject;
        while (inho315.superobj) inho315 = inho315.superobj;
        inho315.superobj = obj315;
        obj315.data = inheritingObject.data;
        obj315.outer = this;
        var reader_kitty_outer_316 = function() {
          return this.outer;
        }
        obj315.methods["outer"] = reader_kitty_outer_316;
        function obj_init_315() {
          var origSuperDepth = superDepth;
          superDepth = obj315;
          obj315.annotations = [];
          var func317 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func317.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 63
              var call318 = callmethod(var_ctx,"save", [0]);
              lineNumber = 64
              var call319 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 65
              var prod323 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient325 = callmethod(prod323, "/", [1], new GraceNum(180));
              var call326 = callmethod(var_ctx,"rotate", [1], quotient325);
              lineNumber = 66
              onSelf = true;
              var call327 = callmethod(this, "elements", [0]);
              lineNumber = 69
              var block328 = Grace_allocObject();
              block328.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block328.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block328.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block328.methods["match"] = GraceBlock_match;
              block328.methods["prefix?"] = GraceBlock_lift;
              block328.receiver = this;
              block328.className = 'block<kitty:69>';
              block328.real = function(
                var_element
              ) {
                sourceObject = this;
                lineNumber = 67
                onSelf = true;
                var call330 = callmethod(this, "width", [0]);
                var call331 = callmethod(call330,"prefix-", [0]);
                var quotient333 = callmethod(call331, "/", [1], new GraceNum(2));
                onSelf = true;
                var call335 = callmethod(this, "height", [0]);
                var call336 = callmethod(call335,"prefix-", [0]);
                var quotient338 = callmethod(call336, "/", [1], new GraceNum(2));
                onSelf = true;
                var call339 = callmethod(this, "width", [0]);
                onSelf = true;
                var call340 = callmethod(this, "height", [0]);
                var call341 = callmethod(var_ctx,"drawImage", [5], var_element, quotient333, quotient338, call339, call340);
                return call341;
              };
              var call342 = callmethod(Grace_prelude,"for()do", [1, 1], call327, block328);
              lineNumber = 69
              var call343 = callmethod(var_ctx,"restore", [0]);
              return call343
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func317.paramCounts = [
            4,
          ];
          func317.variableArities = [
            false,
          ];
          obj315.methods["draw"] = func317;
          func317.definitionLine = 61;
          func317.definitionModule = "kitty";
          var func344 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func344.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getTag)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 74
              onSelf = true;
              var call345 = callmethod(this, "imgTag", [0]);
              return call345
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func344.paramCounts = [
            0,
          ];
          func344.variableArities = [
            false,
          ];
          obj315.methods["getTag"] = func344;
          func344.definitionLine = 73;
          func344.definitionModule = "kitty";
          var func346 = function(argcv) {
            var curarg = 1;
            var var_imgTag__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func346.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
              onSelf = true;
              var call347 = callmethod(this, "elements", [0]);
              var call348 = callmethod(call347,"push", [1], var_imgTag__39__);
              return call348
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func346.paramCounts = [
            1,
          ];
          func346.variableArities = [
            false,
          ];
          obj315.methods["drawImage"] = func346;
          func346.definitionLine = 77;
          func346.definitionModule = "kitty";
          sourceObject = obj315;
          lineNumber = 52
          var string349 = new GraceString("img");
          var call350 = callmethod(var_dom,"document", [0]);
          var call351 = callmethod(call350,"createElement", [1], string349);
          obj315.data["imgTag"] = call351;
          var reader_kitty_imgTag_352 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_352.def = true;
          reader_kitty_imgTag_352.confidential = true;
          obj315.methods["imgTag"] = reader_kitty_imgTag_352;
          lineNumber = 52;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call351)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj315;
          lineNumber = 55
          lineNumber = 52
          lineNumber = 53
          onSelf = true;
          var call353 = callmethod(this, "imgTag", [0]);
          var call354 = callmethod(call353,"src:=", [1], var_url__39__);
          sourceObject = obj315;
          lineNumber = 55
          var call355 = callmethod(var_collections,"list", [0]);
          var call356 = callmethod(call355,"new", [0]);
          obj315.data["elements"] = call356;
          var reader_kitty_elements_357 = function() {
            return this.data["elements"];
          }
          obj315.methods["elements"] = reader_kitty_elements_357;
          obj315.data["elements"] = call356;
          var writer_kitty_elements_357 = function(argcv, o) {
            this.data["elements"] = o;
          }
          obj315.methods["elements:="] = writer_kitty_elements_357;
          reader_kitty_elements_357.confidential = true;
          writer_kitty_elements_357.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call356)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'elements' to be of type Unknown"))
          obj315.mutable = true;
          sourceObject = obj315;
          lineNumber = 56
          onSelf = true;
          var call358 = callmethod(this, "imgTag", [0]);
          onSelf = true;
          var call359 = callmethod(this, "elements", [0]);
          var call360 = callmethod(call359,"push", [1], call358);
          sourceObject = obj315;
          lineNumber = 58
          obj315.data["height"] = var_height__39__;
          var reader_kitty_height_361 = function() {
            return this.data["height"];
          }
          obj315.methods["height"] = reader_kitty_height_361;
          obj315.data["height"] = var_height__39__;
          var writer_kitty_height_361 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj315.methods["height:="] = writer_kitty_height_361;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj315.mutable = true;
          sourceObject = obj315;
          lineNumber = 59
          obj315.data["width"] = var_width__39__;
          var reader_kitty_width_362 = function() {
            return this.data["width"];
          }
          obj315.methods["width"] = reader_kitty_width_362;
          obj315.data["width"] = var_width__39__;
          var writer_kitty_width_362 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj315.methods["width:="] = writer_kitty_width_362;
          lineNumber = 61;
          moduleName = "kitty";
          lineNumber = 59
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj315.mutable = true;
          sourceObject = obj315;
          sourceObject = obj315;
          sourceObject = obj315;
          superDepth = origSuperDepth;
        }
        obj_init_315.apply(inheritingObject, []);
        return obj315
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj263.methods["new()object"] = func314;
    var func363 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 48
        var string364 = new GraceString("class KittyImage");
        return string364
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func363.paramCounts = [
    ];
    func363.variableArities = [
    ];
    obj263.methods["asDebugString"] = func363;
    func363.definitionLine = 48;
    func363.definitionModule = "kitty";
    sourceObject = obj263;
    sourceObject = obj263;
    superDepth = origSuperDepth;
  }
  obj_init_263.apply(obj263, []);
  var var_KittyImage = obj263;
  lineNumber = 84
  lineNumber = 91
  var func365 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func365.paramCounts[0])
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
  func365.paramCounts = [
    0,
  ];
  func365.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func365;
  func365.definitionLine = 91;
  func365.definitionModule = "kitty";
  var obj366 = Grace_allocObject();
  obj366.definitionModule = "kitty";
  obj366.definitionLine = 91;
  obj366.outer = this;
  var reader_kitty_outer_367 = function() {
    return this.outer;
  }
  obj366.methods["outer"] = reader_kitty_outer_367;
  function obj_init_366() {
    var origSuperDepth = superDepth;
    superDepth = obj366;
    obj366.annotations = [];
    var func368 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func368.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj369 = Grace_allocObject();
        obj369.definitionModule = "kitty";
        obj369.definitionLine = 91;
        obj369.outer = this;
        var reader_kitty_outer_370 = function() {
          return this.outer;
        }
        obj369.methods["outer"] = reader_kitty_outer_370;
        function obj_init_369() {
          var origSuperDepth = superDepth;
          superDepth = obj369;
          obj369.annotations = [];
          var func371 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func371.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var string372 = new GraceString("realyee.png");
              onSelf = true;
              var call373 = callmethod(this, "createImage", [1], string372);
              lineNumber = 116
              lineNumber = 115
              var_kitten = this;
              lineNumber = 116
              var call374 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call374
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
          obj369.methods["awake"] = func371;
          func371.definitionLine = 113;
          func371.definitionModule = "kitty";
          var func375 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func375.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              onSelf = true;
              var call376 = callmethod(this, "updateAction", [0]);
              var call377 = callmethod(call376,"apply", [0]);
              return call377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func375.paramCounts = [
            0,
          ];
          func375.variableArities = [
            false,
          ];
          obj369.methods["tick"] = func375;
          func375.definitionLine = 119;
          func375.definitionModule = "kitty";
          var func378 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              onSelf = true;
              var call379 = callmethod(this, "destroyAction", [0]);
              var call380 = callmethod(call379,"apply", [0]);
              return call380
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func378.paramCounts = [
            0,
          ];
          func378.variableArities = [
            false,
          ];
          obj369.methods["kill"] = func378;
          func378.definitionLine = 124;
          func378.definitionModule = "kitty";
          var func381 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func381.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 131
              onSelf = true;
              var call383 = callmethod(this, "posX", [0]);
              var diff385 = callmethod(call383, "-", [1], new GraceNum(32));
              onSelf = true;
              var call387 = callmethod(this, "posY", [0]);
              var diff389 = callmethod(call387, "-", [1], new GraceNum(32));
              var call390 = callmethod(var_Point,"x()y", [1, 1], diff385, diff389);
              onSelf = true;
              var call392 = callmethod(this, "posX", [0]);
              var diff394 = callmethod(call392, "-", [1], new GraceNum(32));
              onSelf = true;
              var call396 = callmethod(this, "posY", [0]);
              var opresult398 = callmethod(call396, "+", [1], new GraceNum(32));
              var call399 = callmethod(var_Point,"x()y", [1, 1], diff394, opresult398);
              lineNumber = 132
              onSelf = true;
              var call401 = callmethod(this, "posX", [0]);
              var opresult403 = callmethod(call401, "+", [1], new GraceNum(32));
              onSelf = true;
              var call405 = callmethod(this, "posY", [0]);
              var opresult407 = callmethod(call405, "+", [1], new GraceNum(32));
              var call408 = callmethod(var_Point,"x()y", [1, 1], opresult403, opresult407);
              onSelf = true;
              var call410 = callmethod(this, "posX", [0]);
              var opresult412 = callmethod(call410, "+", [1], new GraceNum(32));
              onSelf = true;
              var call414 = callmethod(this, "posY", [0]);
              var diff416 = callmethod(call414, "-", [1], new GraceNum(32));
              var call417 = callmethod(var_Point,"x()y", [1, 1], opresult412, diff416);
              lineNumber = 130
              var call418 = callmethod(var_collections,"list", [0]);
              var call419 = callmethod(call418,"new", [4], call390, call399, call408, call417);
              var var_poly = call419;
              lineNumber = 130;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 137
              var if420 = var_done;
              lineNumber = 134
              var call421 = callmethod(var_mouse,"location", [0]);
              var call422 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call423 = callmethod(call422, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call424 = callmethod(call423, "pointInPolygon", [2], call421, var_poly);
              if (Grace_isTrue(call424)) {
                lineNumber = 135
                onSelf = true;
                var call425 = callmethod(this, "mouseDownAction", [0]);
                var call426 = callmethod(call425,"apply", [0]);
                if420 = call426;
              }
              return if420
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func381.paramCounts = [
            0,
          ];
          func381.variableArities = [
            false,
          ];
          obj369.methods["mouseDown"] = func381;
          func381.definitionLine = 129;
          func381.definitionModule = "kitty";
          var func427 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func427.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              onSelf = true;
              var call428 = callmethod(this, "mouseEnterAction", [0]);
              var call429 = callmethod(call428,"apply", [0]);
              return call429
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
          obj369.methods["mouseEnter"] = func427;
          func427.definitionLine = 139;
          func427.definitionModule = "kitty";
          var func430 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func430.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              onSelf = true;
              var call431 = callmethod(this, "mouseExitAction", [0]);
              var call432 = callmethod(call431,"apply", [0]);
              return call432
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
          obj369.methods["mouseExit"] = func430;
          func430.definitionLine = 143;
          func430.definitionModule = "kitty";
          var func433 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func433.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 144
              lineNumber = 149
              onSelf = true;
              var call436 = callmethod(this, "rotation", [0]);
              var prod438 = callmethod(call436, "*", [1], new GraceNum(3.14159));
              var quotient440 = callmethod(prod438, "/", [1], new GraceNum(180));
              var call441 = callmethod(var_math,"cos", [1], quotient440);
              var call443 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod446 = callmethod(var_distance, "*", [1], call443);
              var prod448 = callmethod(prod446, "*", [1], call441);
              onSelf = true;
              var call450 = callmethod(this, "posX", [0]);
              var opresult452 = callmethod(call450, "+", [1], prod448);
              onSelf = true;
              var call453 = callmethod(this, "posX:=", [1], opresult452);
              lineNumber = 150
              lineNumber = 149
              lineNumber = 150
              onSelf = true;
              var call456 = callmethod(this, "rotation", [0]);
              var prod458 = callmethod(call456, "*", [1], new GraceNum(3.14159));
              var quotient460 = callmethod(prod458, "/", [1], new GraceNum(180));
              var call461 = callmethod(var_math,"sin", [1], quotient460);
              var call463 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod466 = callmethod(var_distance, "*", [1], call463);
              var prod468 = callmethod(prod466, "*", [1], call461);
              onSelf = true;
              var call470 = callmethod(this, "posY", [0]);
              var opresult472 = callmethod(call470, "+", [1], prod468);
              onSelf = true;
              var call473 = callmethod(this, "posY:=", [1], opresult472);
              return call473
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func433.paramCounts = [
            1,
          ];
          func433.variableArities = [
            false,
          ];
          obj369.methods["move"] = func433;
          func433.definitionLine = 148;
          func433.definitionModule = "kitty";
          var func474 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func474.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 150
              lineNumber = 154
              onSelf = true;
              var call477 = callmethod(this, "rotation", [0]);
              var opresult480 = callmethod(new GraceNum(90), "+", [1], call477);
              var prod482 = callmethod(opresult480, "*", [1], new GraceNum(3.14159));
              var quotient484 = callmethod(prod482, "/", [1], new GraceNum(180));
              var call485 = callmethod(var_math,"cos", [1], quotient484);
              var call487 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod490 = callmethod(var_distance, "*", [1], call487);
              var prod492 = callmethod(prod490, "*", [1], call485);
              onSelf = true;
              var call494 = callmethod(this, "posX", [0]);
              var opresult496 = callmethod(call494, "+", [1], prod492);
              onSelf = true;
              var call497 = callmethod(this, "posX:=", [1], opresult496);
              lineNumber = 155
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call500 = callmethod(this, "rotation", [0]);
              var opresult503 = callmethod(new GraceNum(90), "+", [1], call500);
              var prod505 = callmethod(opresult503, "*", [1], new GraceNum(3.14159));
              var quotient507 = callmethod(prod505, "/", [1], new GraceNum(180));
              var call508 = callmethod(var_math,"sin", [1], quotient507);
              var call510 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod513 = callmethod(var_distance, "*", [1], call510);
              var prod515 = callmethod(prod513, "*", [1], call508);
              onSelf = true;
              var call517 = callmethod(this, "posY", [0]);
              var opresult519 = callmethod(call517, "+", [1], prod515);
              onSelf = true;
              var call520 = callmethod(this, "posY:=", [1], opresult519);
              return call520
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func474.paramCounts = [
            1,
          ];
          func474.variableArities = [
            false,
          ];
          obj369.methods["strafe"] = func474;
          func474.definitionLine = 153;
          func474.definitionModule = "kitty";
          var func521 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func521.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              lineNumber = 155
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call523 = callmethod(this, "rotation", [0]);
              var opresult525 = callmethod(call523, "+", [1], var_angle);
              onSelf = true;
              var call526 = callmethod(this, "rotation:=", [1], opresult525);
              return call526
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func521.paramCounts = [
            1,
          ];
          func521.variableArities = [
            false,
          ];
          obj369.methods["turn"] = func521;
          func521.definitionLine = 158;
          func521.definitionModule = "kitty";
          var func527 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func527.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var call528 = callmethod(var_ctx,"save", [0]);
              lineNumber = 165
              onSelf = true;
              var call529 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call530 = callmethod(this, "posY", [0]);
              var call531 = callmethod(var_ctx,"translate", [2], call529, call530);
              lineNumber = 166
              onSelf = true;
              var call532 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call533 = callmethod(this, "image", [0]);
              var call534 = callmethod(call533,"draw", [4], var_ctx, var_dx, var_dy, call532);
              lineNumber = 167
              var call535 = callmethod(var_ctx,"restore", [0]);
              return call535
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func527.paramCounts = [
            3,
          ];
          func527.variableArities = [
            false,
          ];
          obj369.methods["draw"] = func527;
          func527.definitionLine = 163;
          func527.definitionModule = "kitty";
          var func536 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func536.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 171
              lineNumber = 167
              lineNumber = 171
              var call537 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call538 = callmethod(call537, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call539 = callmethod(call538, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call540 = callmethod(this, "image:=", [1], call539);
              return call540
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func536.paramCounts = [
            1,
          ];
          func536.variableArities = [
            false,
          ];
          obj369.methods["createImage"] = func536;
          func536.definitionLine = 170;
          func536.definitionModule = "kitty";
          var func541 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func541.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 171
              lineNumber = 175
              onSelf = true;
              var call542 = callmethod(this, "image:=", [1], var_image__39__);
              return call542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func541.paramTypes = [];
          func541.paramTypes.push([]);
          func541.paramCounts = [
            1,
          ];
          func541.variableArities = [
            false,
          ];
          obj369.methods["setImage"] = func541;
          func541.definitionLine = 174;
          func541.definitionModule = "kitty";
          var func543 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 181
              lineNumber = 171
              lineNumber = 180
              onSelf = true;
              var call544 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call544
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func543.paramCounts = [
            1,
          ];
          func543.variableArities = [
            false,
          ];
          obj369.methods["setUpdateAction"] = func543;
          func543.definitionLine = 179;
          func543.definitionModule = "kitty";
          var func545 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func545.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 171
              lineNumber = 184
              onSelf = true;
              var call546 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call546
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func545.paramCounts = [
            1,
          ];
          func545.variableArities = [
            false,
          ];
          obj369.methods["setDestroyAction"] = func545;
          func545.definitionLine = 183;
          func545.definitionModule = "kitty";
          var func547 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func547.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              lineNumber = 171
              lineNumber = 188
              onSelf = true;
              var call548 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call548
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func547.paramCounts = [
            1,
          ];
          func547.variableArities = [
            false,
          ];
          obj369.methods["setMouseDownAction"] = func547;
          func547.definitionLine = 187;
          func547.definitionModule = "kitty";
          var func549 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func549.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 171
              lineNumber = 192
              onSelf = true;
              var call550 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call550
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func549.paramCounts = [
            1,
          ];
          func549.variableArities = [
            false,
          ];
          obj369.methods["setMouseEnterAction"] = func549;
          func549.definitionLine = 191;
          func549.definitionModule = "kitty";
          var func551 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 197
              lineNumber = 171
              lineNumber = 196
              onSelf = true;
              var call552 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call552
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func551.paramCounts = [
            1,
          ];
          func551.variableArities = [
            false,
          ];
          obj369.methods["setMouseExitAction"] = func551;
          func551.definitionLine = 195;
          func551.definitionModule = "kitty";
          var func553 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func553.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 201
              lineNumber = 171
              lineNumber = 200
              onSelf = true;
              var call554 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 202
              lineNumber = 171
              lineNumber = 201
              onSelf = true;
              var call555 = callmethod(this, "posY:=", [1], var_y);
              return call555
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func553.paramCounts = [
            2,
          ];
          func553.variableArities = [
            false,
          ];
          obj369.methods["setLocation"] = func553;
          func553.definitionLine = 199;
          func553.definitionModule = "kitty";
          var func556 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func556.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 205
              onSelf = true;
              var call557 = callmethod(this, "posX", [0]);
              return call557
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func556.paramCounts = [
            0,
          ];
          func556.variableArities = [
            false,
          ];
          obj369.methods["getX"] = func556;
          func556.definitionLine = 204;
          func556.definitionModule = "kitty";
          var func558 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 209
              onSelf = true;
              var call559 = callmethod(this, "posY", [0]);
              return call559
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
          obj369.methods["getY"] = func558;
          func558.definitionLine = 208;
          func558.definitionModule = "kitty";
          var func560 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func560.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 214
              lineNumber = 171
              lineNumber = 213
              onSelf = true;
              var call561 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call561
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func560.paramCounts = [
            1,
          ];
          func560.variableArities = [
            false,
          ];
          obj369.methods["setX"] = func560;
          func560.definitionLine = 212;
          func560.definitionModule = "kitty";
          var func562 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func562.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 218
              lineNumber = 171
              lineNumber = 217
              onSelf = true;
              var call563 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call563
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func562.paramCounts = [
            1,
          ];
          func562.variableArities = [
            false,
          ];
          obj369.methods["setY"] = func562;
          func562.definitionLine = 216;
          func562.definitionModule = "kitty";
          var func564 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func564.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              lineNumber = 221
              onSelf = true;
              var call565 = callmethod(this, "rotation", [0]);
              return call565
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func564.paramCounts = [
            0,
          ];
          func564.variableArities = [
            false,
          ];
          obj369.methods["getRotation"] = func564;
          func564.definitionLine = 220;
          func564.definitionModule = "kitty";
          sourceObject = obj369;
          lineNumber = 95
          obj369.data["tag"] = var_tag__39__;
          var reader_kitty_tag_566 = function() {
            return this.data["tag"];
          }
          obj369.methods["tag"] = reader_kitty_tag_566;
          obj369.data["tag"] = var_tag__39__;
          var writer_kitty_tag_566 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj369.methods["tag:="] = writer_kitty_tag_566;
          reader_kitty_tag_566.confidential = true;
          writer_kitty_tag_566.confidential = true;
          lineNumber = 96;
          moduleName = "kitty";
          lineNumber = 95
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 96
          obj369.data["posX"] = var_x__39__;
          var reader_kitty_posX_567 = function() {
            return this.data["posX"];
          }
          obj369.methods["posX"] = reader_kitty_posX_567;
          obj369.data["posX"] = var_x__39__;
          var writer_kitty_posX_567 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj369.methods["posX:="] = writer_kitty_posX_567;
          reader_kitty_posX_567.confidential = true;
          writer_kitty_posX_567.confidential = true;
          lineNumber = 97;
          moduleName = "kitty";
          lineNumber = 96
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 97
          obj369.data["posY"] = var_y__39__;
          var reader_kitty_posY_568 = function() {
            return this.data["posY"];
          }
          obj369.methods["posY"] = reader_kitty_posY_568;
          obj369.data["posY"] = var_y__39__;
          var writer_kitty_posY_568 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj369.methods["posY:="] = writer_kitty_posY_568;
          reader_kitty_posY_568.confidential = true;
          writer_kitty_posY_568.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 98
          obj369.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_569 = function() {
            return this.data["rotation"];
          }
          obj369.methods["rotation"] = reader_kitty_rotation_569;
          obj369.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_569 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj369.methods["rotation:="] = writer_kitty_rotation_569;
          reader_kitty_rotation_569.confidential = true;
          writer_kitty_rotation_569.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 102
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
          block570.className = 'block<kitty:102>';
          block570.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["updateAction"] = block570;
          var reader_kitty_updateAction_571 = function() {
            return this.data["updateAction"];
          }
          obj369.methods["updateAction"] = reader_kitty_updateAction_571;
          obj369.data["updateAction"] = block570;
          var writer_kitty_updateAction_571 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj369.methods["updateAction:="] = writer_kitty_updateAction_571;
          reader_kitty_updateAction_571.confidential = true;
          writer_kitty_updateAction_571.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block570)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 103
          var block572 = Grace_allocObject();
          block572.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block572.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block572.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block572.methods["match"] = GraceBlock_match;
          block572.methods["prefix?"] = GraceBlock_lift;
          block572.receiver = this;
          block572.className = 'block<kitty:103>';
          block572.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["destroyAction"] = block572;
          var reader_kitty_destroyAction_573 = function() {
            return this.data["destroyAction"];
          }
          obj369.methods["destroyAction"] = reader_kitty_destroyAction_573;
          obj369.data["destroyAction"] = block572;
          var writer_kitty_destroyAction_573 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj369.methods["destroyAction:="] = writer_kitty_destroyAction_573;
          reader_kitty_destroyAction_573.confidential = true;
          writer_kitty_destroyAction_573.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block572)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 104
          var block574 = Grace_allocObject();
          block574.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block574.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block574.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block574.methods["match"] = GraceBlock_match;
          block574.methods["prefix?"] = GraceBlock_lift;
          block574.receiver = this;
          block574.className = 'block<kitty:104>';
          block574.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["mouseDownAction"] = block574;
          var reader_kitty_mouseDownAction_575 = function() {
            return this.data["mouseDownAction"];
          }
          obj369.methods["mouseDownAction"] = reader_kitty_mouseDownAction_575;
          obj369.data["mouseDownAction"] = block574;
          var writer_kitty_mouseDownAction_575 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj369.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_575;
          reader_kitty_mouseDownAction_575.confidential = true;
          writer_kitty_mouseDownAction_575.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block574)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 105
          var block576 = Grace_allocObject();
          block576.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block576.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block576.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block576.methods["match"] = GraceBlock_match;
          block576.methods["prefix?"] = GraceBlock_lift;
          block576.receiver = this;
          block576.className = 'block<kitty:105>';
          block576.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["mouseDragAction"] = block576;
          var reader_kitty_mouseDragAction_577 = function() {
            return this.data["mouseDragAction"];
          }
          obj369.methods["mouseDragAction"] = reader_kitty_mouseDragAction_577;
          obj369.data["mouseDragAction"] = block576;
          var writer_kitty_mouseDragAction_577 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj369.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_577;
          reader_kitty_mouseDragAction_577.confidential = true;
          writer_kitty_mouseDragAction_577.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block576)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 106
          var block578 = Grace_allocObject();
          block578.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block578.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block578.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block578.methods["match"] = GraceBlock_match;
          block578.methods["prefix?"] = GraceBlock_lift;
          block578.receiver = this;
          block578.className = 'block<kitty:106>';
          block578.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["mouseEnterAction"] = block578;
          var reader_kitty_mouseEnterAction_579 = function() {
            return this.data["mouseEnterAction"];
          }
          obj369.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_579;
          obj369.data["mouseEnterAction"] = block578;
          var writer_kitty_mouseEnterAction_579 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj369.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_579;
          reader_kitty_mouseEnterAction_579.confidential = true;
          writer_kitty_mouseEnterAction_579.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block578)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 108
          var block580 = Grace_allocObject();
          block580.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block580.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block580.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block580.methods["match"] = GraceBlock_match;
          block580.methods["prefix?"] = GraceBlock_lift;
          block580.receiver = this;
          block580.className = 'block<kitty:108>';
          block580.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj369.data["mouseExitAction"] = block580;
          var reader_kitty_mouseExitAction_581 = function() {
            return this.data["mouseExitAction"];
          }
          obj369.methods["mouseExitAction"] = reader_kitty_mouseExitAction_581;
          obj369.data["mouseExitAction"] = block580;
          var writer_kitty_mouseExitAction_581 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj369.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_581;
          reader_kitty_mouseExitAction_581.confidential = true;
          writer_kitty_mouseExitAction_581.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block580)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj369.mutable = true;
          sourceObject = obj369;
          obj369.data["image"] = undefined;
          var reader_kitty_image_582 = function() {
            return this.data["image"];
          }
          obj369.methods["image"] = reader_kitty_image_582;
          obj369.data["image"] = undefined;
          var writer_kitty_image_582 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj369.methods["image:="] = writer_kitty_image_582;
          reader_kitty_image_582.confidential = true;
          writer_kitty_image_582.confidential = true;
          obj369.mutable = true;
          sourceObject = obj369;
          lineNumber = 110
          onSelf = true;
          var call583 = callmethod(this, "awake", [0]);
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          sourceObject = obj369;
          superDepth = origSuperDepth;
        }
        obj_init_369.apply(obj369, []);
        return obj369
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func368.paramCounts = [
      3,
    ];
    func368.variableArities = [
      false,
    ];
    obj366.methods["new"] = func368;
    func368.definitionLine = 91;
    func368.definitionModule = "kitty";
    var func584 = function(argcv) {
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
        var obj585 = Grace_allocObject();
        obj585.definitionModule = "kitty";
        obj585.definitionLine = 91;
        var inho585 = inheritingObject;
        while (inho585.superobj) inho585 = inho585.superobj;
        inho585.superobj = obj585;
        obj585.data = inheritingObject.data;
        obj585.outer = this;
        var reader_kitty_outer_586 = function() {
          return this.outer;
        }
        obj585.methods["outer"] = reader_kitty_outer_586;
        function obj_init_585() {
          var origSuperDepth = superDepth;
          superDepth = obj585;
          obj585.annotations = [];
          var func587 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func587.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var string588 = new GraceString("realyee.png");
              onSelf = true;
              var call589 = callmethod(this, "createImage", [1], string588);
              lineNumber = 116
              lineNumber = 115
              var_kitten = this;
              lineNumber = 116
              var call590 = callmethod(var_m__95__world,"addEntity", [1], this);
              return call590
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func587.paramCounts = [
            0,
          ];
          func587.variableArities = [
            false,
          ];
          obj585.methods["awake"] = func587;
          func587.definitionLine = 113;
          func587.definitionModule = "kitty";
          var func591 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func591.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              onSelf = true;
              var call592 = callmethod(this, "updateAction", [0]);
              var call593 = callmethod(call592,"apply", [0]);
              return call593
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func591.paramCounts = [
            0,
          ];
          func591.variableArities = [
            false,
          ];
          obj585.methods["tick"] = func591;
          func591.definitionLine = 119;
          func591.definitionModule = "kitty";
          var func594 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func594.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (kill)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              onSelf = true;
              var call595 = callmethod(this, "destroyAction", [0]);
              var call596 = callmethod(call595,"apply", [0]);
              return call596
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func594.paramCounts = [
            0,
          ];
          func594.variableArities = [
            false,
          ];
          obj585.methods["kill"] = func594;
          func594.definitionLine = 124;
          func594.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 131
              onSelf = true;
              var call599 = callmethod(this, "posX", [0]);
              var diff601 = callmethod(call599, "-", [1], new GraceNum(32));
              onSelf = true;
              var call603 = callmethod(this, "posY", [0]);
              var diff605 = callmethod(call603, "-", [1], new GraceNum(32));
              var call606 = callmethod(var_Point,"x()y", [1, 1], diff601, diff605);
              onSelf = true;
              var call608 = callmethod(this, "posX", [0]);
              var diff610 = callmethod(call608, "-", [1], new GraceNum(32));
              onSelf = true;
              var call612 = callmethod(this, "posY", [0]);
              var opresult614 = callmethod(call612, "+", [1], new GraceNum(32));
              var call615 = callmethod(var_Point,"x()y", [1, 1], diff610, opresult614);
              lineNumber = 132
              onSelf = true;
              var call617 = callmethod(this, "posX", [0]);
              var opresult619 = callmethod(call617, "+", [1], new GraceNum(32));
              onSelf = true;
              var call621 = callmethod(this, "posY", [0]);
              var opresult623 = callmethod(call621, "+", [1], new GraceNum(32));
              var call624 = callmethod(var_Point,"x()y", [1, 1], opresult619, opresult623);
              onSelf = true;
              var call626 = callmethod(this, "posX", [0]);
              var opresult628 = callmethod(call626, "+", [1], new GraceNum(32));
              onSelf = true;
              var call630 = callmethod(this, "posY", [0]);
              var diff632 = callmethod(call630, "-", [1], new GraceNum(32));
              var call633 = callmethod(var_Point,"x()y", [1, 1], opresult628, diff632);
              lineNumber = 130
              var call634 = callmethod(var_collections,"list", [0]);
              var call635 = callmethod(call634,"new", [4], call606, call615, call624, call633);
              var var_poly = call635;
              lineNumber = 130;
              moduleName = "kitty";
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_poly)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'poly' to be of type Unknown"))
              lineNumber = 137
              var if636 = var_done;
              lineNumber = 134
              var call637 = callmethod(var_mouse,"location", [0]);
              var call638 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call639 = callmethod(call638, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call640 = callmethod(call639, "pointInPolygon", [2], call637, var_poly);
              if (Grace_isTrue(call640)) {
                lineNumber = 135
                onSelf = true;
                var call641 = callmethod(this, "mouseDownAction", [0]);
                var call642 = callmethod(call641,"apply", [0]);
                if636 = call642;
              }
              return if636
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func597.paramCounts = [
            0,
          ];
          func597.variableArities = [
            false,
          ];
          obj585.methods["mouseDown"] = func597;
          func597.definitionLine = 129;
          func597.definitionModule = "kitty";
          var func643 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseEnter)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 140
              onSelf = true;
              var call644 = callmethod(this, "mouseEnterAction", [0]);
              var call645 = callmethod(call644,"apply", [0]);
              return call645
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
          obj585.methods["mouseEnter"] = func643;
          func643.definitionLine = 139;
          func643.definitionModule = "kitty";
          var func646 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func646.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseExit)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              onSelf = true;
              var call647 = callmethod(this, "mouseExitAction", [0]);
              var call648 = callmethod(call647,"apply", [0]);
              return call648
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
          obj585.methods["mouseExit"] = func646;
          func646.definitionLine = 143;
          func646.definitionModule = "kitty";
          var func649 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func649.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 149
              lineNumber = 144
              lineNumber = 149
              onSelf = true;
              var call652 = callmethod(this, "rotation", [0]);
              var prod654 = callmethod(call652, "*", [1], new GraceNum(3.14159));
              var quotient656 = callmethod(prod654, "/", [1], new GraceNum(180));
              var call657 = callmethod(var_math,"cos", [1], quotient656);
              var call659 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod662 = callmethod(var_distance, "*", [1], call659);
              var prod664 = callmethod(prod662, "*", [1], call657);
              onSelf = true;
              var call666 = callmethod(this, "posX", [0]);
              var opresult668 = callmethod(call666, "+", [1], prod664);
              onSelf = true;
              var call669 = callmethod(this, "posX:=", [1], opresult668);
              lineNumber = 150
              lineNumber = 149
              lineNumber = 150
              onSelf = true;
              var call672 = callmethod(this, "rotation", [0]);
              var prod674 = callmethod(call672, "*", [1], new GraceNum(3.14159));
              var quotient676 = callmethod(prod674, "/", [1], new GraceNum(180));
              var call677 = callmethod(var_math,"sin", [1], quotient676);
              var call679 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod682 = callmethod(var_distance, "*", [1], call679);
              var prod684 = callmethod(prod682, "*", [1], call677);
              onSelf = true;
              var call686 = callmethod(this, "posY", [0]);
              var opresult688 = callmethod(call686, "+", [1], prod684);
              onSelf = true;
              var call689 = callmethod(this, "posY:=", [1], opresult688);
              return call689
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
          obj585.methods["move"] = func649;
          func649.definitionLine = 148;
          func649.definitionModule = "kitty";
          var func690 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func690.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              lineNumber = 150
              lineNumber = 154
              onSelf = true;
              var call693 = callmethod(this, "rotation", [0]);
              var opresult696 = callmethod(new GraceNum(90), "+", [1], call693);
              var prod698 = callmethod(opresult696, "*", [1], new GraceNum(3.14159));
              var quotient700 = callmethod(prod698, "/", [1], new GraceNum(180));
              var call701 = callmethod(var_math,"cos", [1], quotient700);
              var call703 = callmethod(var_m__95__world,"moveWidthMultipler", [0]);
              var prod706 = callmethod(var_distance, "*", [1], call703);
              var prod708 = callmethod(prod706, "*", [1], call701);
              onSelf = true;
              var call710 = callmethod(this, "posX", [0]);
              var opresult712 = callmethod(call710, "+", [1], prod708);
              onSelf = true;
              var call713 = callmethod(this, "posX:=", [1], opresult712);
              lineNumber = 155
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call716 = callmethod(this, "rotation", [0]);
              var opresult719 = callmethod(new GraceNum(90), "+", [1], call716);
              var prod721 = callmethod(opresult719, "*", [1], new GraceNum(3.14159));
              var quotient723 = callmethod(prod721, "/", [1], new GraceNum(180));
              var call724 = callmethod(var_math,"sin", [1], quotient723);
              var call726 = callmethod(var_m__95__world,"moveHeightMultipler", [0]);
              var prod729 = callmethod(var_distance, "*", [1], call726);
              var prod731 = callmethod(prod729, "*", [1], call724);
              onSelf = true;
              var call733 = callmethod(this, "posY", [0]);
              var opresult735 = callmethod(call733, "+", [1], prod731);
              onSelf = true;
              var call736 = callmethod(this, "posY:=", [1], opresult735);
              return call736
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func690.paramCounts = [
            1,
          ];
          func690.variableArities = [
            false,
          ];
          obj585.methods["strafe"] = func690;
          func690.definitionLine = 153;
          func690.definitionModule = "kitty";
          var func737 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func737.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              lineNumber = 155
              lineNumber = 160
              lineNumber = 159
              onSelf = true;
              var call739 = callmethod(this, "rotation", [0]);
              var opresult741 = callmethod(call739, "+", [1], var_angle);
              onSelf = true;
              var call742 = callmethod(this, "rotation:=", [1], opresult741);
              return call742
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
          obj585.methods["turn"] = func737;
          func737.definitionLine = 158;
          func737.definitionModule = "kitty";
          var func743 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func743.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var call744 = callmethod(var_ctx,"save", [0]);
              lineNumber = 165
              onSelf = true;
              var call745 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call746 = callmethod(this, "posY", [0]);
              var call747 = callmethod(var_ctx,"translate", [2], call745, call746);
              lineNumber = 166
              onSelf = true;
              var call748 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call749 = callmethod(this, "image", [0]);
              var call750 = callmethod(call749,"draw", [4], var_ctx, var_dx, var_dy, call748);
              lineNumber = 167
              var call751 = callmethod(var_ctx,"restore", [0]);
              return call751
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func743.paramCounts = [
            3,
          ];
          func743.variableArities = [
            false,
          ];
          obj585.methods["draw"] = func743;
          func743.definitionLine = 163;
          func743.definitionModule = "kitty";
          var func752 = function(argcv) {
            var curarg = 1;
            var var_url__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func752.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (createImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 171
              lineNumber = 167
              lineNumber = 171
              var call753 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call754 = callmethod(call753, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call755 = callmethod(call754, "Image()width()height", [1, 1, 1], var_url__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call756 = callmethod(this, "image:=", [1], call755);
              return call756
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
          obj585.methods["createImage"] = func752;
          func752.definitionLine = 170;
          func752.definitionModule = "kitty";
          var func757 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func757.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 176
              lineNumber = 171
              lineNumber = 175
              onSelf = true;
              var call758 = callmethod(this, "image:=", [1], var_image__39__);
              return call758
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func757.paramTypes = [];
          func757.paramTypes.push([]);
          func757.paramCounts = [
            1,
          ];
          func757.variableArities = [
            false,
          ];
          obj585.methods["setImage"] = func757;
          func757.definitionLine = 174;
          func757.definitionModule = "kitty";
          var func759 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func759.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 181
              lineNumber = 171
              lineNumber = 180
              onSelf = true;
              var call760 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call760
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func759.paramCounts = [
            1,
          ];
          func759.variableArities = [
            false,
          ];
          obj585.methods["setUpdateAction"] = func759;
          func759.definitionLine = 179;
          func759.definitionModule = "kitty";
          var func761 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func761.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 171
              lineNumber = 184
              onSelf = true;
              var call762 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call762
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func761.paramCounts = [
            1,
          ];
          func761.variableArities = [
            false,
          ];
          obj585.methods["setDestroyAction"] = func761;
          func761.definitionLine = 183;
          func761.definitionModule = "kitty";
          var func763 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func763.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseDownAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              lineNumber = 171
              lineNumber = 188
              onSelf = true;
              var call764 = callmethod(this, "mouseDownAction:=", [1], var_action__39__);
              return call764
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func763.paramCounts = [
            1,
          ];
          func763.variableArities = [
            false,
          ];
          obj585.methods["setMouseDownAction"] = func763;
          func763.definitionLine = 187;
          func763.definitionModule = "kitty";
          var func765 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func765.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseEnterAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              lineNumber = 171
              lineNumber = 192
              onSelf = true;
              var call766 = callmethod(this, "mouseEnterAction:=", [1], var_action__39__);
              return call766
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func765.paramCounts = [
            1,
          ];
          func765.variableArities = [
            false,
          ];
          obj585.methods["setMouseEnterAction"] = func765;
          func765.definitionLine = 191;
          func765.definitionModule = "kitty";
          var func767 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func767.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setMouseExitAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 197
              lineNumber = 171
              lineNumber = 196
              onSelf = true;
              var call768 = callmethod(this, "mouseExitAction:=", [1], var_action__39__);
              return call768
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func767.paramCounts = [
            1,
          ];
          func767.variableArities = [
            false,
          ];
          obj585.methods["setMouseExitAction"] = func767;
          func767.definitionLine = 195;
          func767.definitionModule = "kitty";
          var func769 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func769.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 201
              lineNumber = 171
              lineNumber = 200
              onSelf = true;
              var call770 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 202
              lineNumber = 171
              lineNumber = 201
              onSelf = true;
              var call771 = callmethod(this, "posY:=", [1], var_y);
              return call771
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func769.paramCounts = [
            2,
          ];
          func769.variableArities = [
            false,
          ];
          obj585.methods["setLocation"] = func769;
          func769.definitionLine = 199;
          func769.definitionModule = "kitty";
          var func772 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func772.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 205
              onSelf = true;
              var call773 = callmethod(this, "posX", [0]);
              return call773
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func772.paramCounts = [
            0,
          ];
          func772.variableArities = [
            false,
          ];
          obj585.methods["getX"] = func772;
          func772.definitionLine = 204;
          func772.definitionModule = "kitty";
          var func774 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func774.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 210
              lineNumber = 209
              onSelf = true;
              var call775 = callmethod(this, "posY", [0]);
              return call775
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func774.paramCounts = [
            0,
          ];
          func774.variableArities = [
            false,
          ];
          obj585.methods["getY"] = func774;
          func774.definitionLine = 208;
          func774.definitionModule = "kitty";
          var func776 = function(argcv) {
            var curarg = 1;
            var var_posX__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func776.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 214
              lineNumber = 171
              lineNumber = 213
              onSelf = true;
              var call777 = callmethod(this, "posX:=", [1], var_posX__39__);
              return call777
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func776.paramCounts = [
            1,
          ];
          func776.variableArities = [
            false,
          ];
          obj585.methods["setX"] = func776;
          func776.definitionLine = 212;
          func776.definitionModule = "kitty";
          var func778 = function(argcv) {
            var curarg = 1;
            var var_posY__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func778.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 218
              lineNumber = 171
              lineNumber = 217
              onSelf = true;
              var call779 = callmethod(this, "posY:=", [1], var_posY__39__);
              return call779
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func778.paramCounts = [
            1,
          ];
          func778.variableArities = [
            false,
          ];
          obj585.methods["setY"] = func778;
          func778.definitionLine = 216;
          func778.definitionModule = "kitty";
          var func780 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func780.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              lineNumber = 221
              onSelf = true;
              var call781 = callmethod(this, "rotation", [0]);
              return call781
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func780.paramCounts = [
            0,
          ];
          func780.variableArities = [
            false,
          ];
          obj585.methods["getRotation"] = func780;
          func780.definitionLine = 220;
          func780.definitionModule = "kitty";
          sourceObject = obj585;
          lineNumber = 95
          obj585.data["tag"] = var_tag__39__;
          var reader_kitty_tag_782 = function() {
            return this.data["tag"];
          }
          obj585.methods["tag"] = reader_kitty_tag_782;
          obj585.data["tag"] = var_tag__39__;
          var writer_kitty_tag_782 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj585.methods["tag:="] = writer_kitty_tag_782;
          reader_kitty_tag_782.confidential = true;
          writer_kitty_tag_782.confidential = true;
          lineNumber = 96;
          moduleName = "kitty";
          lineNumber = 95
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 96
          obj585.data["posX"] = var_x__39__;
          var reader_kitty_posX_783 = function() {
            return this.data["posX"];
          }
          obj585.methods["posX"] = reader_kitty_posX_783;
          obj585.data["posX"] = var_x__39__;
          var writer_kitty_posX_783 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj585.methods["posX:="] = writer_kitty_posX_783;
          reader_kitty_posX_783.confidential = true;
          writer_kitty_posX_783.confidential = true;
          lineNumber = 97;
          moduleName = "kitty";
          lineNumber = 96
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 97
          obj585.data["posY"] = var_y__39__;
          var reader_kitty_posY_784 = function() {
            return this.data["posY"];
          }
          obj585.methods["posY"] = reader_kitty_posY_784;
          obj585.data["posY"] = var_y__39__;
          var writer_kitty_posY_784 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj585.methods["posY:="] = writer_kitty_posY_784;
          reader_kitty_posY_784.confidential = true;
          writer_kitty_posY_784.confidential = true;
          lineNumber = 98;
          moduleName = "kitty";
          lineNumber = 97
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 98
          obj585.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_785 = function() {
            return this.data["rotation"];
          }
          obj585.methods["rotation"] = reader_kitty_rotation_785;
          obj585.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_785 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj585.methods["rotation:="] = writer_kitty_rotation_785;
          reader_kitty_rotation_785.confidential = true;
          writer_kitty_rotation_785.confidential = true;
          lineNumber = 101;
          moduleName = "kitty";
          lineNumber = 98
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 102
          var block786 = Grace_allocObject();
          block786.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block786.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block786.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block786.methods["match"] = GraceBlock_match;
          block786.methods["prefix?"] = GraceBlock_lift;
          block786.receiver = this;
          block786.className = 'block<kitty:102>';
          block786.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["updateAction"] = block786;
          var reader_kitty_updateAction_787 = function() {
            return this.data["updateAction"];
          }
          obj585.methods["updateAction"] = reader_kitty_updateAction_787;
          obj585.data["updateAction"] = block786;
          var writer_kitty_updateAction_787 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj585.methods["updateAction:="] = writer_kitty_updateAction_787;
          reader_kitty_updateAction_787.confidential = true;
          writer_kitty_updateAction_787.confidential = true;
          lineNumber = 102;
          moduleName = "kitty";
          lineNumber = 101
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block786)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 103
          var block788 = Grace_allocObject();
          block788.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block788.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block788.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block788.methods["match"] = GraceBlock_match;
          block788.methods["prefix?"] = GraceBlock_lift;
          block788.receiver = this;
          block788.className = 'block<kitty:103>';
          block788.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["destroyAction"] = block788;
          var reader_kitty_destroyAction_789 = function() {
            return this.data["destroyAction"];
          }
          obj585.methods["destroyAction"] = reader_kitty_destroyAction_789;
          obj585.data["destroyAction"] = block788;
          var writer_kitty_destroyAction_789 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj585.methods["destroyAction:="] = writer_kitty_destroyAction_789;
          reader_kitty_destroyAction_789.confidential = true;
          writer_kitty_destroyAction_789.confidential = true;
          lineNumber = 103;
          moduleName = "kitty";
          lineNumber = 102
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block788)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 104
          var block790 = Grace_allocObject();
          block790.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block790.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block790.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block790.methods["match"] = GraceBlock_match;
          block790.methods["prefix?"] = GraceBlock_lift;
          block790.receiver = this;
          block790.className = 'block<kitty:104>';
          block790.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["mouseDownAction"] = block790;
          var reader_kitty_mouseDownAction_791 = function() {
            return this.data["mouseDownAction"];
          }
          obj585.methods["mouseDownAction"] = reader_kitty_mouseDownAction_791;
          obj585.data["mouseDownAction"] = block790;
          var writer_kitty_mouseDownAction_791 = function(argcv, o) {
            this.data["mouseDownAction"] = o;
          }
          obj585.methods["mouseDownAction:="] = writer_kitty_mouseDownAction_791;
          reader_kitty_mouseDownAction_791.confidential = true;
          writer_kitty_mouseDownAction_791.confidential = true;
          lineNumber = 104;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block790)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDownAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 105
          var block792 = Grace_allocObject();
          block792.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block792.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block792.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block792.methods["match"] = GraceBlock_match;
          block792.methods["prefix?"] = GraceBlock_lift;
          block792.receiver = this;
          block792.className = 'block<kitty:105>';
          block792.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["mouseDragAction"] = block792;
          var reader_kitty_mouseDragAction_793 = function() {
            return this.data["mouseDragAction"];
          }
          obj585.methods["mouseDragAction"] = reader_kitty_mouseDragAction_793;
          obj585.data["mouseDragAction"] = block792;
          var writer_kitty_mouseDragAction_793 = function(argcv, o) {
            this.data["mouseDragAction"] = o;
          }
          obj585.methods["mouseDragAction:="] = writer_kitty_mouseDragAction_793;
          reader_kitty_mouseDragAction_793.confidential = true;
          writer_kitty_mouseDragAction_793.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 104
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block792)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseDragAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 106
          var block794 = Grace_allocObject();
          block794.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block794.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block794.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block794.methods["match"] = GraceBlock_match;
          block794.methods["prefix?"] = GraceBlock_lift;
          block794.receiver = this;
          block794.className = 'block<kitty:106>';
          block794.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["mouseEnterAction"] = block794;
          var reader_kitty_mouseEnterAction_795 = function() {
            return this.data["mouseEnterAction"];
          }
          obj585.methods["mouseEnterAction"] = reader_kitty_mouseEnterAction_795;
          obj585.data["mouseEnterAction"] = block794;
          var writer_kitty_mouseEnterAction_795 = function(argcv, o) {
            this.data["mouseEnterAction"] = o;
          }
          obj585.methods["mouseEnterAction:="] = writer_kitty_mouseEnterAction_795;
          reader_kitty_mouseEnterAction_795.confidential = true;
          writer_kitty_mouseEnterAction_795.confidential = true;
          lineNumber = 106;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block794)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseEnterAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 108
          var block796 = Grace_allocObject();
          block796.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block796.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block796.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block796.methods["match"] = GraceBlock_match;
          block796.methods["prefix?"] = GraceBlock_lift;
          block796.receiver = this;
          block796.className = 'block<kitty:108>';
          block796.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj585.data["mouseExitAction"] = block796;
          var reader_kitty_mouseExitAction_797 = function() {
            return this.data["mouseExitAction"];
          }
          obj585.methods["mouseExitAction"] = reader_kitty_mouseExitAction_797;
          obj585.data["mouseExitAction"] = block796;
          var writer_kitty_mouseExitAction_797 = function(argcv, o) {
            this.data["mouseExitAction"] = o;
          }
          obj585.methods["mouseExitAction:="] = writer_kitty_mouseExitAction_797;
          reader_kitty_mouseExitAction_797.confidential = true;
          writer_kitty_mouseExitAction_797.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block796)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'mouseExitAction' to be of type Unknown"))
          obj585.mutable = true;
          sourceObject = obj585;
          obj585.data["image"] = undefined;
          var reader_kitty_image_798 = function() {
            return this.data["image"];
          }
          obj585.methods["image"] = reader_kitty_image_798;
          obj585.data["image"] = undefined;
          var writer_kitty_image_798 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj585.methods["image:="] = writer_kitty_image_798;
          reader_kitty_image_798.confidential = true;
          writer_kitty_image_798.confidential = true;
          obj585.mutable = true;
          sourceObject = obj585;
          lineNumber = 110
          onSelf = true;
          var call799 = callmethod(this, "awake", [0]);
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          sourceObject = obj585;
          superDepth = origSuperDepth;
        }
        obj_init_585.apply(inheritingObject, []);
        return obj585
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj366.methods["new()object"] = func584;
    var func800 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 91
        var string801 = new GraceString("class KittyEntity");
        return string801
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func800.paramCounts = [
    ];
    func800.variableArities = [
    ];
    obj366.methods["asDebugString"] = func800;
    func800.definitionLine = 91;
    func800.definitionModule = "kitty";
    sourceObject = obj366;
    sourceObject = obj366;
    superDepth = origSuperDepth;
  }
  obj_init_366.apply(obj366, []);
  var var_KittyEntity = obj366;
  lineNumber = 225
  lineNumber = 237
  lineNumber = 242
  lineNumber = 246
  lineNumber = 251
  lineNumber = 255
  lineNumber = 259
  lineNumber = 263
  lineNumber = 270
  var func802 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func802.paramCounts[0])
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
  func802.paramCounts = [
    0,
  ];
  func802.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func802;
  func802.definitionLine = 270;
  func802.definitionModule = "kitty";
  var obj803 = Grace_allocObject();
  obj803.definitionModule = "kitty";
  obj803.definitionLine = 270;
  obj803.outer = this;
  var reader_kitty_outer_804 = function() {
    return this.outer;
  }
  obj803.methods["outer"] = reader_kitty_outer_804;
  function obj_init_803() {
    var origSuperDepth = superDepth;
    superDepth = obj803;
    obj803.annotations = [];
    var func805 = function(argcv) {
      var curarg = 1;
      var var_tag__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func805.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj806 = Grace_allocObject();
        obj806.definitionModule = "kitty";
        obj806.definitionLine = 270;
        obj806.outer = this;
        var reader_kitty_outer_807 = function() {
          return this.outer;
        }
        obj806.methods["outer"] = reader_kitty_outer_807;
        function obj_init_806() {
          var origSuperDepth = superDepth;
          superDepth = obj806;
          obj806.annotations = [];
          var func808 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func808.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 312
              var if809 = var_done;
              lineNumber = 308
              onSelf = true;
              var call810 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call810)) {
                lineNumber = 310
                lineNumber = 309
                var bool811 = new GraceBoolean(false)
                return bool811
              }
              lineNumber = 313
              lineNumber = 270
              lineNumber = 312
              var call812 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call813 = callmethod(this, "document:=", [1], call812);
              lineNumber = 313
              lineNumber = 312
              lineNumber = 313
              var string814 = new GraceString("standard-canvas");
              onSelf = true;
              var call815 = callmethod(this, "document", [0]);
              var call816 = callmethod(call815,"getElementById", [1], string814);
              onSelf = true;
              var call817 = callmethod(this, "canvas:=", [1], call816);
              lineNumber = 315
              lineNumber = 312
              lineNumber = 314
              onSelf = true;
              var call818 = callmethod(this, "canvas", [0]);
              var call819 = callmethod(call818,"width", [0]);
              onSelf = true;
              var call820 = callmethod(this, "canvasWidth:=", [1], call819);
              lineNumber = 318
              lineNumber = 314
              lineNumber = 315
              onSelf = true;
              var call821 = callmethod(this, "canvas", [0]);
              var call822 = callmethod(call821,"height", [0]);
              onSelf = true;
              var call823 = callmethod(this, "canvasHeight:=", [1], call822);
              lineNumber = 329
              var block824 = Grace_allocObject();
              block824.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block824.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block824.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block824.methods["match"] = GraceBlock_match;
              block824.methods["prefix?"] = GraceBlock_lift;
              block824.receiver = this;
              block824.className = 'block<kitty:329>';
              block824.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 321
                lineNumber = 320
                onSelf = true;
                var call825 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call827 = callmethod(this, "canvas", [0]);
                var call828 = callmethod(call827,"offsetWidth", [0]);
                onSelf = true;
                var call830 = callmethod(this, "canvas", [0]);
                var call831 = callmethod(call830,"offsetLeft", [0]);
                var call833 = callmethod(var_ev,"clientX", [0]);
                var diff835 = callmethod(call833, "-", [1], call831);
                var quotient837 = callmethod(diff835, "/", [1], call828);
                var prod839 = callmethod(quotient837, "*", [1], call825);
                var var_x = prod839;
                lineNumber = 321;
                moduleName = "kitty";
                lineNumber = 320
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 322
                lineNumber = 321
                onSelf = true;
                var call840 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call842 = callmethod(this, "canvas", [0]);
                var call843 = callmethod(call842,"offsetHeight", [0]);
                onSelf = true;
                var call845 = callmethod(this, "canvas", [0]);
                var call846 = callmethod(call845,"offsetTop", [0]);
                var call848 = callmethod(var_ev,"clientY", [0]);
                var diff850 = callmethod(call848, "-", [1], call846);
                var quotient852 = callmethod(diff850, "/", [1], call843);
                var prod854 = callmethod(quotient852, "*", [1], call840);
                var var_y = prod854;
                lineNumber = 322;
                moduleName = "kitty";
                lineNumber = 321
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 322
                lineNumber = 321
                lineNumber = 322
                var call855 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call856 = callmethod(var_mouse,"position:=", [1], call855);
                lineNumber = 325
                onSelf = true;
                var call857 = callmethod(this, "entities", [0]);
                lineNumber = 328
                var block858 = Grace_allocObject();
                block858.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block858.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block858.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block858.methods["match"] = GraceBlock_match;
                block858.methods["prefix?"] = GraceBlock_lift;
                block858.receiver = this;
                block858.className = 'block<kitty:328>';
                block858.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 326
                  var call859 = callmethod(var_entity,"mouseDown", [0]);
                  return call859;
                };
                var call860 = callmethod(Grace_prelude,"for()do", [1, 1], call857, block858);
                return call860;
              };
              var_mouseDownListener = block824;
              lineNumber = 329
              var string861 = new GraceString("mousedown");
              onSelf = true;
              var call862 = callmethod(this, "canvas", [0]);
              var call863 = callmethod(call862,"addEventListener", [2], string861, var_mouseDownListener);
              lineNumber = 336
              var block864 = Grace_allocObject();
              block864.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block864.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block864.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block864.methods["match"] = GraceBlock_match;
              block864.methods["prefix?"] = GraceBlock_lift;
              block864.receiver = this;
              block864.className = 'block<kitty:336>';
              block864.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 333
                lineNumber = 332
                onSelf = true;
                var call865 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call867 = callmethod(this, "canvas", [0]);
                var call868 = callmethod(call867,"offsetWidth", [0]);
                onSelf = true;
                var call870 = callmethod(this, "canvas", [0]);
                var call871 = callmethod(call870,"offsetLeft", [0]);
                var call873 = callmethod(var_ev,"clientX", [0]);
                var diff875 = callmethod(call873, "-", [1], call871);
                var quotient877 = callmethod(diff875, "/", [1], call868);
                var prod879 = callmethod(quotient877, "*", [1], call865);
                var var_x = prod879;
                lineNumber = 333;
                moduleName = "kitty";
                lineNumber = 332
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 334
                lineNumber = 333
                onSelf = true;
                var call880 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call882 = callmethod(this, "canvas", [0]);
                var call883 = callmethod(call882,"offsetHeight", [0]);
                onSelf = true;
                var call885 = callmethod(this, "canvas", [0]);
                var call886 = callmethod(call885,"offsetTop", [0]);
                var call888 = callmethod(var_ev,"clientY", [0]);
                var diff890 = callmethod(call888, "-", [1], call886);
                var quotient892 = callmethod(diff890, "/", [1], call883);
                var prod894 = callmethod(quotient892, "*", [1], call880);
                var var_y = prod894;
                lineNumber = 334;
                moduleName = "kitty";
                lineNumber = 333
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 334
                lineNumber = 333
                lineNumber = 334
                var call895 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call896 = callmethod(var_mouse,"position:=", [1], call895);
                return call896;
              };
              var_mouseMoveListener = block864;
              lineNumber = 336
              var string897 = new GraceString("mousemove");
              onSelf = true;
              var call898 = callmethod(this, "canvas", [0]);
              var call899 = callmethod(call898,"addEventListener", [2], string897, var_mouseMoveListener);
              lineNumber = 346
              var block900 = Grace_allocObject();
              block900.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block900.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block900.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block900.methods["match"] = GraceBlock_match;
              block900.methods["prefix?"] = GraceBlock_lift;
              block900.receiver = this;
              block900.className = 'block<kitty:346>';
              block900.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 344
                var if901 = var_done;
                lineNumber = 341
                var call903 = callmethod(var_ev,"keyCode", [0]);
                var opresult905 = callmethod(call903, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult905)) {
                  lineNumber = 342
                  onSelf = true;
                  var call906 = callmethod(this, "stop", [0]);
                  if901 = call906;
                }
                lineNumber = 345
                lineNumber = 344
                var call907 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call907;
                return call907;
              };
              var_keyDownListener = block900;
              lineNumber = 346
              var string908 = new GraceString("keydown");
              onSelf = true;
              var call909 = callmethod(this, "document", [0]);
              var call910 = callmethod(call909,"addEventListener", [2], string908, var_keyDownListener);
              lineNumber = 352
              var block911 = Grace_allocObject();
              block911.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block911.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block911.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block911.methods["match"] = GraceBlock_match;
              block911.methods["prefix?"] = GraceBlock_lift;
              block911.receiver = this;
              block911.className = 'block<kitty:352>';
              block911.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 351
                lineNumber = 350
                var call912 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call912;
                return call912;
              };
              var_keyUpListener = block911;
              lineNumber = 352
              var string913 = new GraceString("keyup");
              onSelf = true;
              var call914 = callmethod(this, "document", [0]);
              var call915 = callmethod(call914,"addEventListener", [2], string913, var_keyUpListener);
              lineNumber = 354
              lineNumber = 344
              lineNumber = 354
              var string916 = new GraceString("canvas");
              var call917 = callmethod(var_dom,"document", [0]);
              var call918 = callmethod(call917,"createElement", [1], string916);
              onSelf = true;
              var call919 = callmethod(this, "backingCanvas:=", [1], call918);
              lineNumber = 356
              lineNumber = 354
              lineNumber = 355
              onSelf = true;
              var call920 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call921 = callmethod(this, "backingCanvas", [0]);
              var call922 = callmethod(call921,"height:=", [1], call920);
              lineNumber = 357
              lineNumber = 354
              lineNumber = 356
              onSelf = true;
              var call923 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call924 = callmethod(this, "backingCanvas", [0]);
              var call925 = callmethod(call924,"width:=", [1], call923);
              lineNumber = 357
              lineNumber = 354
              lineNumber = 357
              var string926 = new GraceString("2d");
              onSelf = true;
              var call927 = callmethod(this, "backingCanvas", [0]);
              var call928 = callmethod(call927,"getContext", [1], string926);
              onSelf = true;
              var call929 = callmethod(this, "backingContext:=", [1], call928);
              lineNumber = 358
              lineNumber = 354
              lineNumber = 358
              var string930 = new GraceString("2d");
              onSelf = true;
              var call931 = callmethod(this, "canvas", [0]);
              var call932 = callmethod(call931,"getContext", [1], string930);
              onSelf = true;
              var call933 = callmethod(this, "mctx:=", [1], call932);
              lineNumber = 361
              var string934 = new GraceString("doggo.jpg");
              onSelf = true;
              var call935 = callmethod(this, "setBackground", [1], string934);
              lineNumber = 364
              var call936 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call937 = callmethod(call936, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call938 = callmethod(call937, "setWorld", [1], this);
              lineNumber = 367
              lineNumber = 366
              var_kitten = this;
              lineNumber = 368
              lineNumber = 364
              lineNumber = 367
              var bool939 = new GraceBoolean(true)
              onSelf = true;
              var call940 = callmethod(this, "isInit:=", [1], bool939);
              return call940
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func808.paramCounts = [
            0,
          ];
          func808.variableArities = [
            false,
          ];
          obj806.methods["init"] = func808;
          func808.definitionLine = 304;
          func808.definitionModule = "kitty";
          var func941 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func941.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 374
              lineNumber = 364
              lineNumber = 373
              var bool942 = new GraceBoolean(true)
              onSelf = true;
              var call943 = callmethod(this, "isRunning:=", [1], bool942);
              lineNumber = 374
              var block944 = Grace_allocObject();
              block944.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block944.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block944.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block944.methods["match"] = GraceBlock_match;
              block944.methods["prefix?"] = GraceBlock_lift;
              block944.receiver = this;
              block944.className = 'block<kitty:374>';
              block944.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call945 = callmethod(this, "isRunning", [0]);
                return call945;
              };
              lineNumber = 378
              var block946 = Grace_allocObject();
              block946.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block946.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block946.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block946.methods["match"] = GraceBlock_match;
              block946.methods["prefix?"] = GraceBlock_lift;
              block946.receiver = this;
              block946.className = 'block<kitty:378>';
              block946.real = function(
              ) {
                sourceObject = this;
                lineNumber = 375
                onSelf = true;
                var call947 = callmethod(this, "tick", [0]);
                return call947;
              };
              lineNumber = 374
              var call948 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block944, new GraceNum(10), block946);
              return call948
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func941.paramCounts = [
            0,
          ];
          func941.variableArities = [
            false,
          ];
          obj806.methods["start"] = func941;
          func941.definitionLine = 371;
          func941.definitionModule = "kitty";
          var func949 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func949.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 387
              lineNumber = 364
              lineNumber = 386
              onSelf = true;
              var call950 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call951 = callmethod(this, "mctx", [0]);
              var call952 = callmethod(call951,"fillStyle:=", [1], call950);
              lineNumber = 387
              onSelf = true;
              var call953 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call954 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call955 = callmethod(this, "mctx", [0]);
              var call956 = callmethod(call955,"fillRect", [4], new GraceNum(0), new GraceNum(0), call953, call954);
              lineNumber = 388
              onSelf = true;
              var call957 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call958 = callmethod(this, "mctx", [0]);
              var call959 = callmethod(call958,"drawImage", [3], call957, new GraceNum(0), new GraceNum(0));
              lineNumber = 389
              onSelf = true;
              var call960 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call962 = callmethod(this, "canvasWidth", [0]);
              var quotient964 = callmethod(call962, "/", [1], new GraceNum(2));
              onSelf = true;
              var call966 = callmethod(this, "canvasHeight", [0]);
              var quotient968 = callmethod(call966, "/", [1], new GraceNum(2));
              onSelf = true;
              var call969 = callmethod(this, "background", [0]);
              var call970 = callmethod(call969,"draw", [4], call960, quotient964, quotient968, new GraceNum(0));
              lineNumber = 392
              onSelf = true;
              var call971 = callmethod(this, "updateAction", [0]);
              var call972 = callmethod(call971,"apply", [0]);
              lineNumber = 395
              onSelf = true;
              var call973 = callmethod(this, "entities", [0]);
              lineNumber = 402
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
              block974.className = 'block<kitty:402>';
              block974.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 396
                var call975 = callmethod(var_entity,"tick", [0]);
                lineNumber = 398
                onSelf = true;
                var call976 = callmethod(this, "mctx", [0]);
                var call977 = callmethod(var_entity,"draw", [3], call976, new GraceNum(0), new GraceNum(0));
                return call977;
              };
              var call978 = callmethod(Grace_prelude,"for()do", [1, 1], call973, block974);
              return call978
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func949.paramCounts = [
            0,
          ];
          func949.variableArities = [
            false,
          ];
          obj806.methods["tick"] = func949;
          func949.definitionLine = 381;
          func949.definitionModule = "kitty";
          var func979 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func979.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 405
              var string980 = new GraceString("WORLD STOPPING...");
              var call981 = Grace_print(string980);
              lineNumber = 407
              lineNumber = 396
              lineNumber = 406
              var bool982 = new GraceBoolean(false)
              onSelf = true;
              var call983 = callmethod(this, "isRunning:=", [1], bool982);
              lineNumber = 407
              onSelf = true;
              var call984 = callmethod(this, "destroyAction", [0]);
              var call985 = callmethod(call984,"apply", [0]);
              lineNumber = 408
              onSelf = true;
              var call986 = callmethod(this, "entities", [0]);
              lineNumber = 411
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
              block987.className = 'block<kitty:411>';
              block987.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 409
                var call988 = callmethod(var_entity,"kill", [0]);
                return call988;
              };
              var call989 = callmethod(Grace_prelude,"for()do", [1, 1], call986, block987);
              lineNumber = 411
              var string990 = new GraceString("mousedown");
              onSelf = true;
              var call991 = callmethod(this, "canvas", [0]);
              var call992 = callmethod(call991,"removeEventListener", [2], string990, var_mouseDownListener);
              lineNumber = 412
              var string993 = new GraceString("mousemove");
              onSelf = true;
              var call994 = callmethod(this, "canvas", [0]);
              var call995 = callmethod(call994,"removeEventListener", [2], string993, var_mouseMoveListener);
              lineNumber = 413
              var string996 = new GraceString("keydown");
              onSelf = true;
              var call997 = callmethod(this, "document", [0]);
              var call998 = callmethod(call997,"removeEventListener", [2], string996, var_keyDownListener);
              lineNumber = 414
              var string999 = new GraceString("keyup");
              onSelf = true;
              var call1000 = callmethod(this, "document", [0]);
              var call1001 = callmethod(call1000,"removeEventListener", [2], string999, var_keyUpListener);
              return call1001
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
          obj806.methods["stop"] = func979;
          func979.definitionLine = 404;
          func979.definitionModule = "kitty";
          var func1002 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1002.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 418
              lineNumber = 409
              lineNumber = 418
              onSelf = true;
              var call1003 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1004 = callmethod(this, "canvasHeight", [0]);
              var call1005 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1006 = callmethod(call1005, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1007 = callmethod(call1006, "Image()width()height", [1, 1, 1], var_url, call1003, call1004);
              onSelf = true;
              var call1008 = callmethod(this, "background:=", [1], call1007);
              return call1008
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
          obj806.methods["setBackground"] = func1002;
          func1002.definitionLine = 417;
          func1002.definitionModule = "kitty";
          var func1009 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1009.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 422
              onSelf = true;
              var call1010 = callmethod(this, "entities", [0]);
              var call1011 = callmethod(call1010,"push", [1], var_e);
              return call1011
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1009.paramCounts = [
            1,
          ];
          func1009.variableArities = [
            false,
          ];
          obj806.methods["addEntity"] = func1009;
          func1009.definitionLine = 421;
          func1009.definitionModule = "kitty";
          var func1012 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1012.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 427
              lineNumber = 426
              onSelf = true;
              var call1013 = callmethod(this, "mctx", [0]);
              return call1013
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1012.paramCounts = [
            0,
          ];
          func1012.variableArities = [
            false,
          ];
          obj806.methods["getContext"] = func1012;
          func1012.definitionLine = 425;
          func1012.definitionModule = "kitty";
          var func1014 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1014.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 431
              lineNumber = 430
              onSelf = true;
              var call1015 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1017 = callmethod(this, "canvasWidth", [0]);
              var quotient1019 = callmethod(call1017, "/", [1], call1015);
              return quotient1019
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1014.paramCounts = [
            0,
          ];
          func1014.variableArities = [
            false,
          ];
          obj806.methods["moveWidthMultipler"] = func1014;
          func1014.definitionLine = 429;
          func1014.definitionModule = "kitty";
          var func1020 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1020.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 435
              lineNumber = 434
              onSelf = true;
              var call1021 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1023 = callmethod(this, "canvasHeight", [0]);
              var quotient1025 = callmethod(call1023, "/", [1], call1021);
              return quotient1025
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
          obj806.methods["moveHeightMultipler"] = func1020;
          func1020.definitionLine = 433;
          func1020.definitionModule = "kitty";
          var func1026 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1026.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 439
              lineNumber = 418
              lineNumber = 438
              onSelf = true;
              var call1027 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1027
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1026.paramCounts = [
            1,
          ];
          func1026.variableArities = [
            false,
          ];
          obj806.methods["setUpdateAction"] = func1026;
          func1026.definitionLine = 437;
          func1026.definitionModule = "kitty";
          var func1028 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1028.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 443
              lineNumber = 418
              lineNumber = 442
              onSelf = true;
              var call1029 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1029
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1028.paramCounts = [
            1,
          ];
          func1028.variableArities = [
            false,
          ];
          obj806.methods["setDestroyAction"] = func1028;
          func1028.definitionLine = 441;
          func1028.definitionModule = "kitty";
          sourceObject = obj806;
          lineNumber = 273
          obj806.data["width"] = var_width__39__;
          var reader_kitty_width_1030 = function() {
            return this.data["width"];
          }
          obj806.methods["width"] = reader_kitty_width_1030;
          obj806.data["width"] = var_width__39__;
          var writer_kitty_width_1030 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj806.methods["width:="] = writer_kitty_width_1030;
          lineNumber = 274;
          moduleName = "kitty";
          lineNumber = 273
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 274
          obj806.data["height"] = var_height__39__;
          var reader_kitty_height_1031 = function() {
            return this.data["height"];
          }
          obj806.methods["height"] = reader_kitty_height_1031;
          obj806.data["height"] = var_height__39__;
          var writer_kitty_height_1031 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj806.methods["height:="] = writer_kitty_height_1031;
          lineNumber = 275;
          moduleName = "kitty";
          lineNumber = 274
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 275
          obj806.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1032 = function() {
            return this.data["tag"];
          }
          obj806.methods["tag"] = reader_kitty_tag_1032;
          obj806.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1032 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj806.methods["tag:="] = writer_kitty_tag_1032;
          lineNumber = 277;
          moduleName = "kitty";
          lineNumber = 275
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["background"] = undefined;
          var reader_kitty_background_1033 = function() {
            return this.data["background"];
          }
          obj806.methods["background"] = reader_kitty_background_1033;
          obj806.data["background"] = undefined;
          var writer_kitty_background_1033 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj806.methods["background:="] = writer_kitty_background_1033;
          reader_kitty_background_1033.confidential = true;
          writer_kitty_background_1033.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 278
          var string1034 = new GraceString("black");
          obj806.data["backgroundColour"] = string1034;
          var reader_kitty_backgroundColour_1035 = function() {
            return this.data["backgroundColour"];
          }
          obj806.methods["backgroundColour"] = reader_kitty_backgroundColour_1035;
          obj806.data["backgroundColour"] = string1034;
          var writer_kitty_backgroundColour_1035 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj806.methods["backgroundColour:="] = writer_kitty_backgroundColour_1035;
          reader_kitty_backgroundColour_1035.confidential = true;
          writer_kitty_backgroundColour_1035.confidential = true;
          lineNumber = 280;
          moduleName = "kitty";
          lineNumber = 278
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1034)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["document"] = undefined;
          var reader_kitty_document_1036 = function() {
            return this.data["document"];
          }
          obj806.methods["document"] = reader_kitty_document_1036;
          obj806.data["document"] = undefined;
          var writer_kitty_document_1036 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj806.methods["document:="] = writer_kitty_document_1036;
          reader_kitty_document_1036.confidential = true;
          writer_kitty_document_1036.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1037 = function() {
            return this.data["backingCanvas"];
          }
          obj806.methods["backingCanvas"] = reader_kitty_backingCanvas_1037;
          obj806.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1037 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj806.methods["backingCanvas:="] = writer_kitty_backingCanvas_1037;
          reader_kitty_backingCanvas_1037.confidential = true;
          writer_kitty_backingCanvas_1037.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1038 = function() {
            return this.data["backingContext"];
          }
          obj806.methods["backingContext"] = reader_kitty_backingContext_1038;
          obj806.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1038 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj806.methods["backingContext:="] = writer_kitty_backingContext_1038;
          reader_kitty_backingContext_1038.confidential = true;
          writer_kitty_backingContext_1038.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["canvas"] = undefined;
          var reader_kitty_canvas_1039 = function() {
            return this.data["canvas"];
          }
          obj806.methods["canvas"] = reader_kitty_canvas_1039;
          obj806.data["canvas"] = undefined;
          var writer_kitty_canvas_1039 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj806.methods["canvas:="] = writer_kitty_canvas_1039;
          reader_kitty_canvas_1039.confidential = true;
          writer_kitty_canvas_1039.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1040 = function() {
            return this.data["canvasWidth"];
          }
          obj806.methods["canvasWidth"] = reader_kitty_canvasWidth_1040;
          obj806.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1040 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj806.methods["canvasWidth:="] = writer_kitty_canvasWidth_1040;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1041 = function() {
            return this.data["canvasHeight"];
          }
          obj806.methods["canvasHeight"] = reader_kitty_canvasHeight_1041;
          obj806.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1041 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj806.methods["canvasHeight:="] = writer_kitty_canvasHeight_1041;
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 289
          var call1042 = callmethod(var_collections,"list", [0]);
          var call1043 = callmethod(call1042,"new", [0]);
          obj806.data["entities"] = call1043;
          var reader_kitty_entities_1044 = function() {
            return this.data["entities"];
          }
          obj806.methods["entities"] = reader_kitty_entities_1044;
          obj806.data["entities"] = call1043;
          var writer_kitty_entities_1044 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj806.methods["entities:="] = writer_kitty_entities_1044;
          reader_kitty_entities_1044.confidential = true;
          writer_kitty_entities_1044.confidential = true;
          lineNumber = 291;
          moduleName = "kitty";
          lineNumber = 289
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1043)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 291
          var bool1045 = new GraceBoolean(false)
          obj806.data["isInit"] = bool1045;
          var reader_kitty_isInit_1046 = function() {
            return this.data["isInit"];
          }
          obj806.methods["isInit"] = reader_kitty_isInit_1046;
          obj806.data["isInit"] = bool1045;
          var writer_kitty_isInit_1046 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj806.methods["isInit:="] = writer_kitty_isInit_1046;
          reader_kitty_isInit_1046.confidential = true;
          writer_kitty_isInit_1046.confidential = true;
          lineNumber = 292;
          moduleName = "kitty";
          lineNumber = 291
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1045)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 292
          var bool1047 = new GraceBoolean(false)
          obj806.data["isRunning"] = bool1047;
          var reader_kitty_isRunning_1048 = function() {
            return this.data["isRunning"];
          }
          obj806.methods["isRunning"] = reader_kitty_isRunning_1048;
          obj806.data["isRunning"] = bool1047;
          var writer_kitty_isRunning_1048 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj806.methods["isRunning:="] = writer_kitty_isRunning_1048;
          reader_kitty_isRunning_1048.confidential = true;
          writer_kitty_isRunning_1048.confidential = true;
          lineNumber = 294;
          moduleName = "kitty";
          lineNumber = 292
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1047)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["mctx"] = undefined;
          var reader_kitty_mctx_1049 = function() {
            return this.data["mctx"];
          }
          obj806.methods["mctx"] = reader_kitty_mctx_1049;
          obj806.data["mctx"] = undefined;
          var writer_kitty_mctx_1049 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj806.methods["mctx:="] = writer_kitty_mctx_1049;
          reader_kitty_mctx_1049.confidential = true;
          writer_kitty_mctx_1049.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          obj806.data["ent"] = undefined;
          var reader_kitty_ent_1050 = function() {
            return this.data["ent"];
          }
          obj806.methods["ent"] = reader_kitty_ent_1050;
          obj806.data["ent"] = undefined;
          var writer_kitty_ent_1050 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj806.methods["ent:="] = writer_kitty_ent_1050;
          reader_kitty_ent_1050.confidential = true;
          writer_kitty_ent_1050.confidential = true;
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 299
          var block1051 = Grace_allocObject();
          block1051.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1051.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1051.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1051.methods["match"] = GraceBlock_match;
          block1051.methods["prefix?"] = GraceBlock_lift;
          block1051.receiver = this;
          block1051.className = 'block<kitty:299>';
          block1051.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj806.data["updateAction"] = block1051;
          var reader_kitty_updateAction_1052 = function() {
            return this.data["updateAction"];
          }
          obj806.methods["updateAction"] = reader_kitty_updateAction_1052;
          obj806.data["updateAction"] = block1051;
          var writer_kitty_updateAction_1052 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj806.methods["updateAction:="] = writer_kitty_updateAction_1052;
          reader_kitty_updateAction_1052.confidential = true;
          writer_kitty_updateAction_1052.confidential = true;
          lineNumber = 299;
          moduleName = "kitty";
          lineNumber = 298
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1051)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 301
          var block1053 = Grace_allocObject();
          block1053.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1053.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1053.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1053.methods["match"] = GraceBlock_match;
          block1053.methods["prefix?"] = GraceBlock_lift;
          block1053.receiver = this;
          block1053.className = 'block<kitty:301>';
          block1053.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj806.data["destroyAction"] = block1053;
          var reader_kitty_destroyAction_1054 = function() {
            return this.data["destroyAction"];
          }
          obj806.methods["destroyAction"] = reader_kitty_destroyAction_1054;
          obj806.data["destroyAction"] = block1053;
          var writer_kitty_destroyAction_1054 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj806.methods["destroyAction:="] = writer_kitty_destroyAction_1054;
          reader_kitty_destroyAction_1054.confidential = true;
          writer_kitty_destroyAction_1054.confidential = true;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 299
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1053)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj806.mutable = true;
          sourceObject = obj806;
          lineNumber = 301
          onSelf = true;
          var call1055 = callmethod(this, "init", [0]);
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          sourceObject = obj806;
          superDepth = origSuperDepth;
        }
        obj_init_806.apply(obj806, []);
        return obj806
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func805.paramCounts = [
      3,
    ];
    func805.variableArities = [
      false,
    ];
    obj803.methods["new"] = func805;
    func805.definitionLine = 270;
    func805.definitionModule = "kitty";
    var func1056 = function(argcv) {
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
        var obj1057 = Grace_allocObject();
        obj1057.definitionModule = "kitty";
        obj1057.definitionLine = 270;
        var inho1057 = inheritingObject;
        while (inho1057.superobj) inho1057 = inho1057.superobj;
        inho1057.superobj = obj1057;
        obj1057.data = inheritingObject.data;
        obj1057.outer = this;
        var reader_kitty_outer_1058 = function() {
          return this.outer;
        }
        obj1057.methods["outer"] = reader_kitty_outer_1058;
        function obj_init_1057() {
          var origSuperDepth = superDepth;
          superDepth = obj1057;
          obj1057.annotations = [];
          var func1059 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1059.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 312
              var if1060 = var_done;
              lineNumber = 308
              onSelf = true;
              var call1061 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call1061)) {
                lineNumber = 310
                lineNumber = 309
                var bool1062 = new GraceBoolean(false)
                return bool1062
              }
              lineNumber = 313
              lineNumber = 289
              lineNumber = 312
              var call1063 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call1064 = callmethod(this, "document:=", [1], call1063);
              lineNumber = 313
              lineNumber = 312
              lineNumber = 313
              var string1065 = new GraceString("standard-canvas");
              onSelf = true;
              var call1066 = callmethod(this, "document", [0]);
              var call1067 = callmethod(call1066,"getElementById", [1], string1065);
              onSelf = true;
              var call1068 = callmethod(this, "canvas:=", [1], call1067);
              lineNumber = 315
              lineNumber = 312
              lineNumber = 314
              onSelf = true;
              var call1069 = callmethod(this, "canvas", [0]);
              var call1070 = callmethod(call1069,"width", [0]);
              onSelf = true;
              var call1071 = callmethod(this, "canvasWidth:=", [1], call1070);
              lineNumber = 318
              lineNumber = 314
              lineNumber = 315
              onSelf = true;
              var call1072 = callmethod(this, "canvas", [0]);
              var call1073 = callmethod(call1072,"height", [0]);
              onSelf = true;
              var call1074 = callmethod(this, "canvasHeight:=", [1], call1073);
              lineNumber = 329
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
              block1075.className = 'block<kitty:329>';
              block1075.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 321
                lineNumber = 320
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
                lineNumber = 321;
                moduleName = "kitty";
                lineNumber = 320
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 322
                lineNumber = 321
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
                lineNumber = 322;
                moduleName = "kitty";
                lineNumber = 321
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 322
                lineNumber = 321
                lineNumber = 322
                var call1106 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1107 = callmethod(var_mouse,"position:=", [1], call1106);
                lineNumber = 325
                onSelf = true;
                var call1108 = callmethod(this, "entities", [0]);
                lineNumber = 328
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
                block1109.className = 'block<kitty:328>';
                block1109.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 326
                  var call1110 = callmethod(var_entity,"mouseDown", [0]);
                  return call1110;
                };
                var call1111 = callmethod(Grace_prelude,"for()do", [1, 1], call1108, block1109);
                return call1111;
              };
              var_mouseDownListener = block1075;
              lineNumber = 329
              var string1112 = new GraceString("mousedown");
              onSelf = true;
              var call1113 = callmethod(this, "canvas", [0]);
              var call1114 = callmethod(call1113,"addEventListener", [2], string1112, var_mouseDownListener);
              lineNumber = 336
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
              block1115.className = 'block<kitty:336>';
              block1115.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 333
                lineNumber = 332
                onSelf = true;
                var call1116 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1118 = callmethod(this, "canvas", [0]);
                var call1119 = callmethod(call1118,"offsetWidth", [0]);
                onSelf = true;
                var call1121 = callmethod(this, "canvas", [0]);
                var call1122 = callmethod(call1121,"offsetLeft", [0]);
                var call1124 = callmethod(var_ev,"clientX", [0]);
                var diff1126 = callmethod(call1124, "-", [1], call1122);
                var quotient1128 = callmethod(diff1126, "/", [1], call1119);
                var prod1130 = callmethod(quotient1128, "*", [1], call1116);
                var var_x = prod1130;
                lineNumber = 333;
                moduleName = "kitty";
                lineNumber = 332
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 334
                lineNumber = 333
                onSelf = true;
                var call1131 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call1133 = callmethod(this, "canvas", [0]);
                var call1134 = callmethod(call1133,"offsetHeight", [0]);
                onSelf = true;
                var call1136 = callmethod(this, "canvas", [0]);
                var call1137 = callmethod(call1136,"offsetTop", [0]);
                var call1139 = callmethod(var_ev,"clientY", [0]);
                var diff1141 = callmethod(call1139, "-", [1], call1137);
                var quotient1143 = callmethod(diff1141, "/", [1], call1134);
                var prod1145 = callmethod(quotient1143, "*", [1], call1131);
                var var_y = prod1145;
                lineNumber = 334;
                moduleName = "kitty";
                lineNumber = 333
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 334
                lineNumber = 333
                lineNumber = 334
                var call1146 = callmethod(var_Point,"x()y", [1, 1], var_x, var_y);
                var call1147 = callmethod(var_mouse,"position:=", [1], call1146);
                return call1147;
              };
              var_mouseMoveListener = block1115;
              lineNumber = 336
              var string1148 = new GraceString("mousemove");
              onSelf = true;
              var call1149 = callmethod(this, "canvas", [0]);
              var call1150 = callmethod(call1149,"addEventListener", [2], string1148, var_mouseMoveListener);
              lineNumber = 346
              var block1151 = Grace_allocObject();
              block1151.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1151.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1151.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1151.methods["match"] = GraceBlock_match;
              block1151.methods["prefix?"] = GraceBlock_lift;
              block1151.receiver = this;
              block1151.className = 'block<kitty:346>';
              block1151.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 344
                var if1152 = var_done;
                lineNumber = 341
                var call1154 = callmethod(var_ev,"keyCode", [0]);
                var opresult1156 = callmethod(call1154, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult1156)) {
                  lineNumber = 342
                  onSelf = true;
                  var call1157 = callmethod(this, "stop", [0]);
                  if1152 = call1157;
                }
                lineNumber = 345
                lineNumber = 344
                var call1158 = callmethod(var_ev,"keyCode", [0]);
                var_currentKeyDown = call1158;
                return call1158;
              };
              var_keyDownListener = block1151;
              lineNumber = 346
              var string1159 = new GraceString("keydown");
              onSelf = true;
              var call1160 = callmethod(this, "document", [0]);
              var call1161 = callmethod(call1160,"addEventListener", [2], string1159, var_keyDownListener);
              lineNumber = 352
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
              block1162.className = 'block<kitty:352>';
              block1162.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 351
                lineNumber = 350
                var call1163 = callmethod(new GraceNum(1),"prefix-", [0]);
                var_currentKeyDown = call1163;
                return call1163;
              };
              var_keyUpListener = block1162;
              lineNumber = 352
              var string1164 = new GraceString("keyup");
              onSelf = true;
              var call1165 = callmethod(this, "document", [0]);
              var call1166 = callmethod(call1165,"addEventListener", [2], string1164, var_keyUpListener);
              lineNumber = 354
              lineNumber = 344
              lineNumber = 354
              var string1167 = new GraceString("canvas");
              var call1168 = callmethod(var_dom,"document", [0]);
              var call1169 = callmethod(call1168,"createElement", [1], string1167);
              onSelf = true;
              var call1170 = callmethod(this, "backingCanvas:=", [1], call1169);
              lineNumber = 356
              lineNumber = 354
              lineNumber = 355
              onSelf = true;
              var call1171 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1172 = callmethod(this, "backingCanvas", [0]);
              var call1173 = callmethod(call1172,"height:=", [1], call1171);
              lineNumber = 357
              lineNumber = 354
              lineNumber = 356
              onSelf = true;
              var call1174 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1175 = callmethod(this, "backingCanvas", [0]);
              var call1176 = callmethod(call1175,"width:=", [1], call1174);
              lineNumber = 357
              lineNumber = 354
              lineNumber = 357
              var string1177 = new GraceString("2d");
              onSelf = true;
              var call1178 = callmethod(this, "backingCanvas", [0]);
              var call1179 = callmethod(call1178,"getContext", [1], string1177);
              onSelf = true;
              var call1180 = callmethod(this, "backingContext:=", [1], call1179);
              lineNumber = 358
              lineNumber = 354
              lineNumber = 358
              var string1181 = new GraceString("2d");
              onSelf = true;
              var call1182 = callmethod(this, "canvas", [0]);
              var call1183 = callmethod(call1182,"getContext", [1], string1181);
              onSelf = true;
              var call1184 = callmethod(this, "mctx:=", [1], call1183);
              lineNumber = 361
              var string1185 = new GraceString("doggo.jpg");
              onSelf = true;
              var call1186 = callmethod(this, "setBackground", [1], string1185);
              lineNumber = 364
              var call1187 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1188 = callmethod(call1187, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1189 = callmethod(call1188, "setWorld", [1], this);
              lineNumber = 367
              lineNumber = 366
              var_kitten = this;
              lineNumber = 368
              lineNumber = 364
              lineNumber = 367
              var bool1190 = new GraceBoolean(true)
              onSelf = true;
              var call1191 = callmethod(this, "isInit:=", [1], bool1190);
              return call1191
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1059.paramCounts = [
            0,
          ];
          func1059.variableArities = [
            false,
          ];
          obj1057.methods["init"] = func1059;
          func1059.definitionLine = 304;
          func1059.definitionModule = "kitty";
          var func1192 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 374
              lineNumber = 364
              lineNumber = 373
              var bool1193 = new GraceBoolean(true)
              onSelf = true;
              var call1194 = callmethod(this, "isRunning:=", [1], bool1193);
              lineNumber = 374
              var block1195 = Grace_allocObject();
              block1195.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1195.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1195.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1195.methods["match"] = GraceBlock_match;
              block1195.methods["prefix?"] = GraceBlock_lift;
              block1195.receiver = this;
              block1195.className = 'block<kitty:374>';
              block1195.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1196 = callmethod(this, "isRunning", [0]);
                return call1196;
              };
              lineNumber = 378
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
              block1197.className = 'block<kitty:378>';
              block1197.real = function(
              ) {
                sourceObject = this;
                lineNumber = 375
                onSelf = true;
                var call1198 = callmethod(this, "tick", [0]);
                return call1198;
              };
              lineNumber = 374
              var call1199 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block1195, new GraceNum(10), block1197);
              return call1199
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1192.paramCounts = [
            0,
          ];
          func1192.variableArities = [
            false,
          ];
          obj1057.methods["start"] = func1192;
          func1192.definitionLine = 371;
          func1192.definitionModule = "kitty";
          var func1200 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1200.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 387
              lineNumber = 364
              lineNumber = 386
              onSelf = true;
              var call1201 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call1202 = callmethod(this, "mctx", [0]);
              var call1203 = callmethod(call1202,"fillStyle:=", [1], call1201);
              lineNumber = 387
              onSelf = true;
              var call1204 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1205 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call1206 = callmethod(this, "mctx", [0]);
              var call1207 = callmethod(call1206,"fillRect", [4], new GraceNum(0), new GraceNum(0), call1204, call1205);
              lineNumber = 388
              onSelf = true;
              var call1208 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call1209 = callmethod(this, "mctx", [0]);
              var call1210 = callmethod(call1209,"drawImage", [3], call1208, new GraceNum(0), new GraceNum(0));
              lineNumber = 389
              onSelf = true;
              var call1211 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call1213 = callmethod(this, "canvasWidth", [0]);
              var quotient1215 = callmethod(call1213, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1217 = callmethod(this, "canvasHeight", [0]);
              var quotient1219 = callmethod(call1217, "/", [1], new GraceNum(2));
              onSelf = true;
              var call1220 = callmethod(this, "background", [0]);
              var call1221 = callmethod(call1220,"draw", [4], call1211, quotient1215, quotient1219, new GraceNum(0));
              lineNumber = 392
              onSelf = true;
              var call1222 = callmethod(this, "updateAction", [0]);
              var call1223 = callmethod(call1222,"apply", [0]);
              lineNumber = 395
              onSelf = true;
              var call1224 = callmethod(this, "entities", [0]);
              lineNumber = 402
              var block1225 = Grace_allocObject();
              block1225.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1225.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1225.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1225.methods["match"] = GraceBlock_match;
              block1225.methods["prefix?"] = GraceBlock_lift;
              block1225.receiver = this;
              block1225.className = 'block<kitty:402>';
              block1225.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 396
                var call1226 = callmethod(var_entity,"tick", [0]);
                lineNumber = 398
                onSelf = true;
                var call1227 = callmethod(this, "mctx", [0]);
                var call1228 = callmethod(var_entity,"draw", [3], call1227, new GraceNum(0), new GraceNum(0));
                return call1228;
              };
              var call1229 = callmethod(Grace_prelude,"for()do", [1, 1], call1224, block1225);
              return call1229
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1200.paramCounts = [
            0,
          ];
          func1200.variableArities = [
            false,
          ];
          obj1057.methods["tick"] = func1200;
          func1200.definitionLine = 381;
          func1200.definitionModule = "kitty";
          var func1230 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 405
              var string1231 = new GraceString("WORLD STOPPING...");
              var call1232 = Grace_print(string1231);
              lineNumber = 407
              lineNumber = 396
              lineNumber = 406
              var bool1233 = new GraceBoolean(false)
              onSelf = true;
              var call1234 = callmethod(this, "isRunning:=", [1], bool1233);
              lineNumber = 407
              onSelf = true;
              var call1235 = callmethod(this, "destroyAction", [0]);
              var call1236 = callmethod(call1235,"apply", [0]);
              lineNumber = 408
              onSelf = true;
              var call1237 = callmethod(this, "entities", [0]);
              lineNumber = 411
              var block1238 = Grace_allocObject();
              block1238.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1238.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1238.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1238.methods["match"] = GraceBlock_match;
              block1238.methods["prefix?"] = GraceBlock_lift;
              block1238.receiver = this;
              block1238.className = 'block<kitty:411>';
              block1238.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 409
                var call1239 = callmethod(var_entity,"kill", [0]);
                return call1239;
              };
              var call1240 = callmethod(Grace_prelude,"for()do", [1, 1], call1237, block1238);
              lineNumber = 411
              var string1241 = new GraceString("mousedown");
              onSelf = true;
              var call1242 = callmethod(this, "canvas", [0]);
              var call1243 = callmethod(call1242,"removeEventListener", [2], string1241, var_mouseDownListener);
              lineNumber = 412
              var string1244 = new GraceString("mousemove");
              onSelf = true;
              var call1245 = callmethod(this, "canvas", [0]);
              var call1246 = callmethod(call1245,"removeEventListener", [2], string1244, var_mouseMoveListener);
              lineNumber = 413
              var string1247 = new GraceString("keydown");
              onSelf = true;
              var call1248 = callmethod(this, "document", [0]);
              var call1249 = callmethod(call1248,"removeEventListener", [2], string1247, var_keyDownListener);
              lineNumber = 414
              var string1250 = new GraceString("keyup");
              onSelf = true;
              var call1251 = callmethod(this, "document", [0]);
              var call1252 = callmethod(call1251,"removeEventListener", [2], string1250, var_keyUpListener);
              return call1252
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1230.paramCounts = [
            0,
          ];
          func1230.variableArities = [
            false,
          ];
          obj1057.methods["stop"] = func1230;
          func1230.definitionLine = 404;
          func1230.definitionModule = "kitty";
          var func1253 = function(argcv) {
            var curarg = 1;
            var var_url = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 418
              lineNumber = 409
              lineNumber = 418
              onSelf = true;
              var call1254 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call1255 = callmethod(this, "canvasHeight", [0]);
              var call1256 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1257 = callmethod(call1256, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call1258 = callmethod(call1257, "Image()width()height", [1, 1, 1], var_url, call1254, call1255);
              onSelf = true;
              var call1259 = callmethod(this, "background:=", [1], call1258);
              return call1259
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
          obj1057.methods["setBackground"] = func1253;
          func1253.definitionLine = 417;
          func1253.definitionModule = "kitty";
          var func1260 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1260.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 422
              onSelf = true;
              var call1261 = callmethod(this, "entities", [0]);
              var call1262 = callmethod(call1261,"push", [1], var_e);
              return call1262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1260.paramCounts = [
            1,
          ];
          func1260.variableArities = [
            false,
          ];
          obj1057.methods["addEntity"] = func1260;
          func1260.definitionLine = 421;
          func1260.definitionModule = "kitty";
          var func1263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getContext)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 427
              lineNumber = 426
              onSelf = true;
              var call1264 = callmethod(this, "mctx", [0]);
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
            0,
          ];
          func1263.variableArities = [
            false,
          ];
          obj1057.methods["getContext"] = func1263;
          func1263.definitionLine = 425;
          func1263.definitionModule = "kitty";
          var func1265 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveWidthMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 431
              lineNumber = 430
              onSelf = true;
              var call1266 = callmethod(this, "width", [0]);
              onSelf = true;
              var call1268 = callmethod(this, "canvasWidth", [0]);
              var quotient1270 = callmethod(call1268, "/", [1], call1266);
              return quotient1270
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1265.paramCounts = [
            0,
          ];
          func1265.variableArities = [
            false,
          ];
          obj1057.methods["moveWidthMultipler"] = func1265;
          func1265.definitionLine = 429;
          func1265.definitionModule = "kitty";
          var func1271 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1271.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveHeightMultipler)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 435
              lineNumber = 434
              onSelf = true;
              var call1272 = callmethod(this, "height", [0]);
              onSelf = true;
              var call1274 = callmethod(this, "canvasHeight", [0]);
              var quotient1276 = callmethod(call1274, "/", [1], call1272);
              return quotient1276
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
          obj1057.methods["moveHeightMultipler"] = func1271;
          func1271.definitionLine = 433;
          func1271.definitionModule = "kitty";
          var func1277 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1277.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setUpdateAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 439
              lineNumber = 418
              lineNumber = 438
              onSelf = true;
              var call1278 = callmethod(this, "updateAction:=", [1], var_action__39__);
              return call1278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1277.paramCounts = [
            1,
          ];
          func1277.variableArities = [
            false,
          ];
          obj1057.methods["setUpdateAction"] = func1277;
          func1277.definitionLine = 437;
          func1277.definitionModule = "kitty";
          var func1279 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setDestroyAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 443
              lineNumber = 418
              lineNumber = 442
              onSelf = true;
              var call1280 = callmethod(this, "destroyAction:=", [1], var_action__39__);
              return call1280
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1279.paramCounts = [
            1,
          ];
          func1279.variableArities = [
            false,
          ];
          obj1057.methods["setDestroyAction"] = func1279;
          func1279.definitionLine = 441;
          func1279.definitionModule = "kitty";
          sourceObject = obj1057;
          lineNumber = 273
          obj1057.data["width"] = var_width__39__;
          var reader_kitty_width_1281 = function() {
            return this.data["width"];
          }
          obj1057.methods["width"] = reader_kitty_width_1281;
          obj1057.data["width"] = var_width__39__;
          var writer_kitty_width_1281 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj1057.methods["width:="] = writer_kitty_width_1281;
          lineNumber = 274;
          moduleName = "kitty";
          lineNumber = 273
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 274
          obj1057.data["height"] = var_height__39__;
          var reader_kitty_height_1282 = function() {
            return this.data["height"];
          }
          obj1057.methods["height"] = reader_kitty_height_1282;
          obj1057.data["height"] = var_height__39__;
          var writer_kitty_height_1282 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj1057.methods["height:="] = writer_kitty_height_1282;
          lineNumber = 275;
          moduleName = "kitty";
          lineNumber = 274
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 275
          obj1057.data["tag"] = var_tag__39__;
          var reader_kitty_tag_1283 = function() {
            return this.data["tag"];
          }
          obj1057.methods["tag"] = reader_kitty_tag_1283;
          obj1057.data["tag"] = var_tag__39__;
          var writer_kitty_tag_1283 = function(argcv, o) {
            this.data["tag"] = o;
          }
          obj1057.methods["tag:="] = writer_kitty_tag_1283;
          lineNumber = 277;
          moduleName = "kitty";
          lineNumber = 275
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_tag__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'tag' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["background"] = undefined;
          var reader_kitty_background_1284 = function() {
            return this.data["background"];
          }
          obj1057.methods["background"] = reader_kitty_background_1284;
          obj1057.data["background"] = undefined;
          var writer_kitty_background_1284 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj1057.methods["background:="] = writer_kitty_background_1284;
          reader_kitty_background_1284.confidential = true;
          writer_kitty_background_1284.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 278
          var string1285 = new GraceString("black");
          obj1057.data["backgroundColour"] = string1285;
          var reader_kitty_backgroundColour_1286 = function() {
            return this.data["backgroundColour"];
          }
          obj1057.methods["backgroundColour"] = reader_kitty_backgroundColour_1286;
          obj1057.data["backgroundColour"] = string1285;
          var writer_kitty_backgroundColour_1286 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj1057.methods["backgroundColour:="] = writer_kitty_backgroundColour_1286;
          reader_kitty_backgroundColour_1286.confidential = true;
          writer_kitty_backgroundColour_1286.confidential = true;
          lineNumber = 280;
          moduleName = "kitty";
          lineNumber = 278
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string1285)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["document"] = undefined;
          var reader_kitty_document_1287 = function() {
            return this.data["document"];
          }
          obj1057.methods["document"] = reader_kitty_document_1287;
          obj1057.data["document"] = undefined;
          var writer_kitty_document_1287 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj1057.methods["document:="] = writer_kitty_document_1287;
          reader_kitty_document_1287.confidential = true;
          writer_kitty_document_1287.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_1288 = function() {
            return this.data["backingCanvas"];
          }
          obj1057.methods["backingCanvas"] = reader_kitty_backingCanvas_1288;
          obj1057.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_1288 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj1057.methods["backingCanvas:="] = writer_kitty_backingCanvas_1288;
          reader_kitty_backingCanvas_1288.confidential = true;
          writer_kitty_backingCanvas_1288.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["backingContext"] = undefined;
          var reader_kitty_backingContext_1289 = function() {
            return this.data["backingContext"];
          }
          obj1057.methods["backingContext"] = reader_kitty_backingContext_1289;
          obj1057.data["backingContext"] = undefined;
          var writer_kitty_backingContext_1289 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj1057.methods["backingContext:="] = writer_kitty_backingContext_1289;
          reader_kitty_backingContext_1289.confidential = true;
          writer_kitty_backingContext_1289.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["canvas"] = undefined;
          var reader_kitty_canvas_1290 = function() {
            return this.data["canvas"];
          }
          obj1057.methods["canvas"] = reader_kitty_canvas_1290;
          obj1057.data["canvas"] = undefined;
          var writer_kitty_canvas_1290 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj1057.methods["canvas:="] = writer_kitty_canvas_1290;
          reader_kitty_canvas_1290.confidential = true;
          writer_kitty_canvas_1290.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_1291 = function() {
            return this.data["canvasWidth"];
          }
          obj1057.methods["canvasWidth"] = reader_kitty_canvasWidth_1291;
          obj1057.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_1291 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj1057.methods["canvasWidth:="] = writer_kitty_canvasWidth_1291;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_1292 = function() {
            return this.data["canvasHeight"];
          }
          obj1057.methods["canvasHeight"] = reader_kitty_canvasHeight_1292;
          obj1057.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_1292 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj1057.methods["canvasHeight:="] = writer_kitty_canvasHeight_1292;
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 289
          var call1293 = callmethod(var_collections,"list", [0]);
          var call1294 = callmethod(call1293,"new", [0]);
          obj1057.data["entities"] = call1294;
          var reader_kitty_entities_1295 = function() {
            return this.data["entities"];
          }
          obj1057.methods["entities"] = reader_kitty_entities_1295;
          obj1057.data["entities"] = call1294;
          var writer_kitty_entities_1295 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj1057.methods["entities:="] = writer_kitty_entities_1295;
          reader_kitty_entities_1295.confidential = true;
          writer_kitty_entities_1295.confidential = true;
          lineNumber = 291;
          moduleName = "kitty";
          lineNumber = 289
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1294)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 291
          var bool1296 = new GraceBoolean(false)
          obj1057.data["isInit"] = bool1296;
          var reader_kitty_isInit_1297 = function() {
            return this.data["isInit"];
          }
          obj1057.methods["isInit"] = reader_kitty_isInit_1297;
          obj1057.data["isInit"] = bool1296;
          var writer_kitty_isInit_1297 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj1057.methods["isInit:="] = writer_kitty_isInit_1297;
          reader_kitty_isInit_1297.confidential = true;
          writer_kitty_isInit_1297.confidential = true;
          lineNumber = 292;
          moduleName = "kitty";
          lineNumber = 291
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1296)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 292
          var bool1298 = new GraceBoolean(false)
          obj1057.data["isRunning"] = bool1298;
          var reader_kitty_isRunning_1299 = function() {
            return this.data["isRunning"];
          }
          obj1057.methods["isRunning"] = reader_kitty_isRunning_1299;
          obj1057.data["isRunning"] = bool1298;
          var writer_kitty_isRunning_1299 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj1057.methods["isRunning:="] = writer_kitty_isRunning_1299;
          reader_kitty_isRunning_1299.confidential = true;
          writer_kitty_isRunning_1299.confidential = true;
          lineNumber = 294;
          moduleName = "kitty";
          lineNumber = 292
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool1298)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["mctx"] = undefined;
          var reader_kitty_mctx_1300 = function() {
            return this.data["mctx"];
          }
          obj1057.methods["mctx"] = reader_kitty_mctx_1300;
          obj1057.data["mctx"] = undefined;
          var writer_kitty_mctx_1300 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj1057.methods["mctx:="] = writer_kitty_mctx_1300;
          reader_kitty_mctx_1300.confidential = true;
          writer_kitty_mctx_1300.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          obj1057.data["ent"] = undefined;
          var reader_kitty_ent_1301 = function() {
            return this.data["ent"];
          }
          obj1057.methods["ent"] = reader_kitty_ent_1301;
          obj1057.data["ent"] = undefined;
          var writer_kitty_ent_1301 = function(argcv, o) {
            this.data["ent"] = o;
          }
          obj1057.methods["ent:="] = writer_kitty_ent_1301;
          reader_kitty_ent_1301.confidential = true;
          writer_kitty_ent_1301.confidential = true;
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 299
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
          block1302.className = 'block<kitty:299>';
          block1302.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1057.data["updateAction"] = block1302;
          var reader_kitty_updateAction_1303 = function() {
            return this.data["updateAction"];
          }
          obj1057.methods["updateAction"] = reader_kitty_updateAction_1303;
          obj1057.data["updateAction"] = block1302;
          var writer_kitty_updateAction_1303 = function(argcv, o) {
            this.data["updateAction"] = o;
          }
          obj1057.methods["updateAction:="] = writer_kitty_updateAction_1303;
          reader_kitty_updateAction_1303.confidential = true;
          writer_kitty_updateAction_1303.confidential = true;
          lineNumber = 299;
          moduleName = "kitty";
          lineNumber = 298
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1302)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'updateAction' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 301
          var block1304 = Grace_allocObject();
          block1304.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block1304.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block1304.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block1304.methods["match"] = GraceBlock_match;
          block1304.methods["prefix?"] = GraceBlock_lift;
          block1304.receiver = this;
          block1304.className = 'block<kitty:301>';
          block1304.real = function(
          ) {
            sourceObject = this;
            return undefined;
          };
          obj1057.data["destroyAction"] = block1304;
          var reader_kitty_destroyAction_1305 = function() {
            return this.data["destroyAction"];
          }
          obj1057.methods["destroyAction"] = reader_kitty_destroyAction_1305;
          obj1057.data["destroyAction"] = block1304;
          var writer_kitty_destroyAction_1305 = function(argcv, o) {
            this.data["destroyAction"] = o;
          }
          obj1057.methods["destroyAction:="] = writer_kitty_destroyAction_1305;
          reader_kitty_destroyAction_1305.confidential = true;
          writer_kitty_destroyAction_1305.confidential = true;
          lineNumber = 301;
          moduleName = "kitty";
          lineNumber = 299
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], block1304)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destroyAction' to be of type Unknown"))
          obj1057.mutable = true;
          sourceObject = obj1057;
          lineNumber = 301
          onSelf = true;
          var call1306 = callmethod(this, "init", [0]);
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          sourceObject = obj1057;
          superDepth = origSuperDepth;
        }
        obj_init_1057.apply(inheritingObject, []);
        return obj1057
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj803.methods["new()object"] = func1056;
    var func1307 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 270
        var string1308 = new GraceString("class KittyWorld");
        return string1308
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1307.paramCounts = [
    ];
    func1307.variableArities = [
    ];
    obj803.methods["asDebugString"] = func1307;
    func1307.definitionLine = 270;
    func1307.definitionModule = "kitty";
    sourceObject = obj803;
    sourceObject = obj803;
    superDepth = origSuperDepth;
  }
  obj_init_803.apply(obj803, []);
  var var_KittyWorld = obj803;
  lineNumber = 448
  lineNumber = 457
  lineNumber = 491
  lineNumber = 506
  lineNumber = 510
  lineNumber = 515
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:World()width()height:\n tag:=\n backingContext\n canvasHeight\n init\n setBackground\n moveWidthMultipler\n tag\n destroyAction:=\n setDestroyAction\n updateAction\n backingCanvas:=\n stop\n isInit:=\n destroyAction\n tick\n start\n isInit\n mctx:=\n height\n mctx\n isRunning\n ent:=\n document\n backgroundColour:=\n canvasHeight:=\n moveHeightMultipler\n canvas:=\n backgroundColour\n background:=\n updateAction:=\n canvas\n background\n entities\n backingCanvas\n canvasWidth\n height:=\n isRunning:=\n document:=\n width:=\n canvasWidth:=\n width\n getContext\n addEntity\n ent\n backingContext:=\n setUpdateAction\n entities:=\nmodules:\n mgcollections\n StandardPrelude\nconstructors-of:Point:\n x()y\nfresh:Entity()x()y:\n tag:=\n setDestroyAction\n updateAction\n createImage\n mouseDown\n tag\n destroyAction:=\n posX:=\n mouseEnterAction\n destroyAction\n turn\n posX\n setMouseDownAction\n mouseEnter\n draw\n image:=\n mouseExitAction\n mouseDownAction\n strafe\n awake\n mouseDragAction\n getRotation\n tick\n mouseDragAction:=\n posY\n updateAction:=\n getY\n mouseEnterAction:=\n posY:=\n mouseExitAction:=\n setX\n setLocation\n rotation:=\n kill\n setImage\n rotation\n mouseDownAction:=\n move\n setUpdateAction\n image\n getX\n mouseExit\n setY\n setMouseExitAction\n setMouseEnterAction\nfresh-methods:\n Image()width()height\n Entity()x()y\n World()width()height\nmethods-of:Point.x()y:\n down\n up\n x\n y\n left\n right\nconstructors-of:KittyImage:\n new\nclasses:\n Point\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Image()width()height:\n elements:=\n width:=\n height\n getTag\n elements\n width\n imgTag\n draw\n height:=\n drawImage\nconstructors-of:KittyWorld:\n new\nmethods-of:KittyEntity.new:\n tag:=\n setDestroyAction\n posX:=\n createImage\n updateAction\n tag\n destroyAction:=\n mouseExitAction\n mouseEnterAction\n destroyAction\n turn\n posX\n tick\n draw\n image:=\n mouseDown\n mouseDownAction\n strafe\n awake\n mouseDragAction\n getRotation\n mouseDragAction:=\n setImage\n setMouseDownAction\n updateAction:=\n getY\n mouseEnterAction:=\n posY:=\n mouseExitAction:=\n image\n setLocation\n rotation:=\n kill\n posY\n rotation\n setX\n mouseDownAction:=\n move\n setMouseExitAction\n mouseExit\n getX\n mouseEnter\n setY\n setUpdateAction\n setMouseEnterAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n currentKeyDown\n currentKeyDown:=\n math\n kitten\n kitten:=\n Point\n mouse\n KittyImage\n Image()width()height\n KittyEntity\n Entity()x()y\n update\n onDestroy\n isKeyDown\n onMouseDown\n onMouseDrag\n onMouseEnter\n onMouseExit\n KittyWorld\n World()width()height\n pointInPolygon\n start\n stop\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n elements:=\n width:=\n imgTag\n getTag\n elements\n width\n height\n draw\n height:=\n drawImage\nmethods-of:KittyWorld.new:\n tag:=\n backingContext\n canvasHeight\n init\n setBackground\n moveWidthMultipler\n tag\n destroyAction:=\n setDestroyAction\n updateAction\n backingCanvas:=\n stop\n isInit:=\n destroyAction\n tick\n start\n isInit\n mctx:=\n height\n mctx\n isRunning\n ent:=\n document\n backgroundColour:=\n canvasHeight:=\n moveHeightMultipler\n canvas:=\n backgroundColour\n background:=\n updateAction:=\n canvas\n background\n getContext\n backingCanvas\n canvasWidth\n height:=\n isRunning:=\n document:=\n width:=\n canvasWidth:=\n width\n entities\n addEntity\n ent\n backingContext:=\n setUpdateAction\n entities:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nconfidential:\n";
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
    "        var poly := collections.list.new(",
    "            Point.x(posX - 32)y(posY - 32), Point.x(posX - 32)y(posY + 32),",
    "            Point.x(posX + 32)y(posY + 32), Point.x(posX + 32)y(posY - 32)",
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
    "    print \"({x}, {y})\"",
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
    "        print \"({xi}, {yi}) ({xj}, {yj})\"",
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
