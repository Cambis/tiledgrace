"use strict"
var holes = document.getElementsByClassName('hole');
var codearea = document.getElementById('codearea');
var toolbox = document.getElementById('toolbox');
var tiles = codearea.getElementsByClassName('tile');
function findOffsetTopLeft(el) {
    var x = el.offsetLeft;
    var y = el.offsetTop;
    if (el.offsetParent && el.offsetParent != codearea && el.offsetParent != toolbox) {
        var xy = findOffsetTopLeft(el.offsetParent);
        x = x + xy.left;
        y = y + xy.top;
    }
    return {left: x, top: y};
}
function isBottomTarget(ch, obj) {
    if (ch.parentElement.classList.contains('hole')) {
        if (!ch.parentElement.classList.contains('multi')) {
            return false;
        }
    }
    var p = ch.parentNode;
    while (p != codearea) {
        if (p.classList.contains('locked'))
            return false;
        p = p.parentNode;
    }
    var chXY = findOffsetTopLeft(ch);
    var objXY = findOffsetTopLeft(obj);
    var t = chXY.top + ch.offsetHeight;
    var l = chXY.left - ch.offsetWidth / 2;
    var r = chXY.left + ch.offsetWidth;
    var m = objXY.left + obj.offsetWidth / 2;
    if (objXY.top < t + 4 && objXY.top > t - 4) {
        if (objXY.left >= l && objXY.left <= r)
            return true;
        if (chXY.left >= objXY.left && chXY.left < m)
            return true;
    }
    return false;
}
function isOverBin(ev) {
    var bin = document.getElementById('bin');
    if (ev.clientY < bin.offsetHeight + codearea.offsetTop
            && ev.clientX > bin.offsetLeft + codearea.offsetLeft)
        return true;
    return false;
}
function dragstart(ev) {
    if (ev.button != 0)
        return;
    var xy = findOffsetTopLeft(this);
    var offsetY = ev.clientY - xy.top;
    var offsetX = ev.clientX - xy.left;
    var obj = this;
    ev.preventDefault();
    var dragcontinue = function(ev2) {
        var top = (ev2.clientY - offsetY);
        var left = (ev2.clientX - offsetX);
        obj.style.top = top + 'px';
        obj.style.left = left + 'px';
        ev2.preventDefault();
        var tmp = obj;
        var overBin = isOverBin(ev2);
        var tmp = obj;
        while (tmp) {
            if (overBin)
                tmp.classList.add('over-bin');
            else
                tmp.classList.remove('over-bin');
            tmp = tmp.next;
        }
        var holeSize = 1000000;
        var bestHole = null;
        for (var i=holes.length - 1; i>=0; i--) {
            var h = holes[i];
            h.style.background = '';
            if (h.offsetParent == obj)
                continue;
            var xy = findOffsetTopLeft(h);
            xy.top = xy.top + codearea.offsetTop;
            xy.left = xy.left + codearea.offsetLeft;
            if (left + offsetX < xy.left
                    || left + offsetX > xy.left + h.offsetWidth) {
                continue;
            }
            if (top + offsetY < xy.top
                    || top + offsetY > xy.top + h.offsetHeight) {
                continue;
            }
            if (h.offsetWidth * h.offsetHeight < holeSize) {
                holeSize = h.offsetWidth * h.offsetHeight;
                bestHole = h;
            }
        }
        if (bestHole != null && bestHole.children.length == 0) {
            bestHole.style.background = 'yellow';
        }
        var tmp = obj;
        while (typeof tmp.next != "undefined" && tmp.next) {
            if (isOverBin(ev2)) {
                tmp.classList.add('over-bin');
            } else {
                tmp.classList.remove('over-bin');
            }
            var last = tmp;
            tmp = tmp.next;
            tmp.style.top = (last.offsetTop + last.offsetHeight) + 'px';
            tmp.style.left = last.offsetLeft + 'px';
        }
        for (var i=0; i<tiles.length; i++) {
            var ch = tiles[i];
            if (ch == obj)
                continue;
            if (isBottomTarget(ch, obj)) {
                ch.classList.add('bottom-join-target');
            } else {
                ch.classList.remove('bottom-join-target');
            }
        }
    }
    var d = document.getElementById('codearea');
    var originalHole = null;
    if (this.parentNode != d) {
        originalHole = this.parentNode;
        originalHole.style.width = originalHole.offsetWidth + 'px';
        originalHole.style.height = originalHole.offsetHeight + 'px';
    }
    this.style.position = 'absolute';
    this.style.top = xy.top + 'px';
    this.style.left = xy.left + 'px';
    var tmp = this;
    var runningTop = xy.top;
    if (ev.shiftKey) {
        if (tmp.prev)
            tmp.prev.next = tmp.next;
        if (tmp.next)
            tmp.next.prev = tmp.prev;
        tmp.next = false;
        tmp.prev = false;
    } else if (tmp.prev) {
        tmp.prev.next = false;
    }
    while (tmp && tmp.parentNode != d) {
        tmp.parentNode.removeChild(tmp);
        d.appendChild(tmp);
        tmp.style.position = 'absolute';
        tmp.style.top = runningTop + 'px';
        tmp.style.left = xy.left + 'px';
        runningTop += tmp.offsetHeight;
        tmp = tmp.next;
    }
    var dragend = function(ev) {
        var top = (ev.clientY - offsetY);
        var left = (ev.clientX - offsetX);
        obj.style.top = top + 'px';
        obj.style.left = left + 'px';
        d.removeEventListener('mousemove', dragcontinue);
        d.removeEventListener('mouseup', dragend);
        obj.classList.remove('selected');
        if (isOverBin(ev)) {
            var tmp = obj;
            while (tmp) {
                tmp.parentNode.removeChild(tmp);
                tmp = tmp.next;
            }
            generateCode();
            if (originalHole != null) {
                originalHole.style.width = 'auto';
                originalHole.style.height = 'auto';
            }
            reflow();
            checkpointSave();
            return;
        }
        var tmp = obj;
        while (typeof tmp.next != "undefined" && tmp.next) {
            tmp = tmp.next;
            tmp.classList.remove('selected');
        }
        var holeSize = 1000000;
        var bestHole = null;
        for (var i=holes.length - 1; i>=0; i--) {
            var h = holes[i];
            if (h.offsetParent == obj)
                continue;
            var xy = findOffsetTopLeft(h);
            xy.top = xy.top + codearea.offsetTop;
            xy.left = xy.left + codearea.offsetLeft;
            if (left + offsetX < xy.left
                    || left + offsetX > xy.left + h.offsetWidth) {
                continue;
            }
            if (top + offsetY < xy.top
                    || top + offsetY > xy.top + h.offsetHeight) {
                continue;
            }
            if (h.offsetWidth * h.offsetHeight < holeSize) {
                holeSize = h.offsetWidth * h.offsetHeight;
                bestHole = h;
            }
        }
        if (bestHole != null) {
            if (bestHole.children.length == 0) {
                var tmp = obj;
                while (tmp) {
                    tmp.style.top = 0;
                    tmp.style.left = 0;
                    tmp.style.position = 'static';
                    bestHole.appendChild(tmp);
                    tmp = tmp.next;
                }
                bestHole.style.background = '';
            } else {
                bestHole = null;
            }
        }
        for (var i=0; i<tiles.length; i++) {
            var ch = tiles[i];
            ch.classList.remove('bottom-join-target');
            if (bestHole)
                continue;
            if (ch == obj)
                continue;
            var t = ch.offsetTop + ch.offsetHeight;
            if (isBottomTarget(ch, obj)) {
                if (ch.next) {
                    var tmp = obj;
                    while (tmp.next)
                        tmp = tmp.next;
                    tmp.next = ch.next;
                    ch.next.prev = tmp;
                }
                ch.next = obj;
                obj.prev = ch;
                var pe = ch.parentElement;
                var tmp = ch;
                var after = ch.nextSibling;
                while (tmp.next) {
                    var last = tmp;
                    tmp = tmp.next;
                    if (tmp == after)
                        break;
                    tmp.parentElement.removeChild(tmp);
                    pe.insertBefore(tmp, after);
                    if (pe.classList.contains('multi')) {
                        tmp.style.position = "static";
                        tmp.style.left = "";
                        tmp.style.top = "";
                    }
                    tmp.style.top = (last.offsetTop + last.offsetHeight) + 'px';
                    tmp.style.left = last.offsetLeft + 'px';
                }
                if (after && pe != codearea) {
                    last.next = after;
                    after.prev = last;
                }
                break;
            }
        }
        if (originalHole != null) {
            originalHole.style.width = 'auto';
            originalHole.style.height = 'auto';
        }
        reflow();
        generateCode();
        checkpointSave();
    }
    d.addEventListener('mousemove', dragcontinue)
    d.addEventListener('mouseup', dragend)
    this.classList.add('selected');
    var tmp = this;
    while (typeof tmp.next != "undefined" && tmp.next) {
        tmp = tmp.next;
        tmp.classList.add('selected');
    }
    if (typeof this.prev != "undefined" && this.prev) {
        this.prev.next = false;
        this.prev = false;
    }
    ev.stopPropagation();
}
function reflow() {
    for (var i=0; i<tiles.length; i++) {
        if (tiles[i].parentNode != codearea)
            continue;
        if (tiles[i].prev)
            continue;
        var tmp = tiles[i];
        var runningTop = +tmp.style.top.substring(0, tmp.style.top.length - 2);
        var left = tmp.style.left;
        while (tmp) {
            tmp.style.top = runningTop + 'px';
            runningTop += tmp.offsetHeight;
            tmp.style.left = left;
            tmp = tmp.next;
        }
    }
}
var blockIndent = 0;
function generateNodeCode(n, loc) {
    if (typeof n == 'undefined' || typeof n == 'boolean')
        return '!ABSENT!';
    if (n.classList.contains('hole')) {
        if (n.childNodes.length)
            return generateNodeCode(n.childNodes[0], loc);
        else
            return '!ABSENT!';
    }
    if (n.classList.contains('number')) {
        return n.getElementsByTagName('input')[0].value;
    }
    if (n.classList.contains('string')) {
        return '"' + n.getElementsByTagName('input')[0].value + '"';
    }
    if (n.classList.contains('var')) {
        return n.getElementsByTagName('select')[0].value;
    }
    if (n.classList.contains('vardec')) {
        var name = n.childNodes[1].value;
        if (!name)
            name = "!UNNAMED!";
        return 'var ' + name + ' := ' + generateNodeCode(n.childNodes[3], 'assignment');
    }
    if (n.classList.contains('print')) {
        var arg = n.children[1].children[0];
        if (!arg)
            return 'print(!ABSENT!)'
        if (arg.classList.contains('string')) {
            return 'print ' + generateNodeCode(arg);
        } else if (arg.classList.contains('operator')) {
            return 'print' + generateNodeCode(arg);
        } else {
            return 'print(' + generateNodeCode(arg) + ')';
        }
    }
    if (n.classList.contains('dialect-request')) {
        var arg = n.getElementsByClassName('hole')[0].children[0]
        var name = n.getElementsByClassName('method-name')[0].innerHTML;
        if (!arg)
            return name + '(!ABSENT!)'
        if (name.substring(name.length -2) == ":=")
                return name + ' ' + generateNodeCode(arg);
        if (arg.classList.contains('string')) {
            return name + ' ' + generateNodeCode(arg);
        } else if (arg.classList.contains('operator')) {
            return name + generateNodeCode(arg);
        } else {
            return name + '(' + generateNodeCode(arg) + ')';
        }
    }
    if (n.classList.contains('constant')) {
        return n.dataset.name;
    }
    if (n.classList.contains('selfcall')) {
        return n.children[0].value + '(' + generateNodeCode(n.children[1]) + ')';
    }
    if (n.classList.contains('request')) {
        return generateNodeCode(n.children[0].children[0]) + '.' + n.children[2].value;
    }
    if (n.classList.contains('operator') || n.classList.contains('comparison-operator')) {
        var l = false;
        var r = false;
        var op = '';
        for (var i=0; i<n.children.length; i++) {
            var c = n.children[i];
            if (c.classList.contains('hole')) {
                if (l) {
                    r = c.children[0];
                    break;
                } else {
                    l = c.children[0];
                }
            }
            if (c.classList.contains('op') || c.classList.contains('cmpop')) {
                op = c.childNodes[0].data;
            }
        }
        if (loc == 'assignment')
            return generateNodeCode(l) + ' ' + op + ' ' + generateNodeCode(r);
        return '(' + generateNodeCode(l) + ' ' + op + ' ' + generateNodeCode(r) + ')';
    }
    if (n.classList.contains('assign')) {
        var l = false;
        var r = false;
        var op = '';
        for (var i=0; i<n.children.length; i++) {
            var c = n.children[i];
            if (c.classList.contains('hole')) {
                if (l) {
                    r = c.children[0];
                    break;
                } else {
                    l = c.children[0];
                }
            }
        }
        return generateNodeCode(l) + ' := ' + generateNodeCode(r, 'assignment');
    }
    if (n.classList.contains('if')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = '';
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n'
        }
        var elseText = false;
        if (n.classList.contains('else')) {
            elseText = ' else {\n';
            var elseHole = n.children[3].children[0];
            for (var i=0; i<elseHole.children.length; i++) {
                var ch = elseHole.children[i];
                elseText = elseText + indent + '    ' + generateNodeCode(ch) + '\n'
            }
            elseText = elseText + indent + '}'
        }
        blockIndent--;
        if (!elseText)
            elseText = '';
        return 'if (' + generateNodeCode(cond) + ') then {\n' + body + indent + '}' + elseText;
    }
    if (n.classList.contains('while')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = '';
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n'
        }
        blockIndent--;
        return 'while {' + generateNodeCode(cond) + '} do {\n' + body + indent + '}';
    }
    if (n.classList.contains('method')) {
        var name = n.childNodes[0].childNodes[1].value;
        var arg = n.childNodes[0].childNodes[3].value;
        var bodyHole = n.children[1].children[0];
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        var body = '';
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n';
        }
        blockIndent--;
        return 'method ' + name + '(' + arg + ') {\n' + body + indent + '}'
    }
}
function generateCode() {
    var tb = document.getElementById('gracecode');
    tb.value = '';
    var dialect = document.getElementById('dialect').value;
    if (dialect)
        tb.value = 'dialect "' + dialect + '"\n';
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        while (child) {
            tb.value = tb.value + generateNodeCode(child) + '\n';
            child = child.next;
        }
    }
}
function renameVar(oldValue, newValue) {
    var vars = document.getElementsByClassName('var');
    for (var i=0; i<vars.length; i++) {
        var sel = vars[i].childNodes[0];
        var found = false;
        for (var j=0; j<sel.childNodes.length; j++) {
            if (sel.childNodes[j].value == oldValue) {
                sel.childNodes[j].value = newValue;
                sel.childNodes[j].innerHTML = newValue;
                found = true;
                break;
            }
        }
        if (!found) {
            var opt = document.createElement('option');
            opt.value = newValue;
            opt.appendChild(document.createTextNode(newValue));
            sel.appendChild(opt);
        }
    }
}
function generateHash(obj) {
    return '#' + btoa(encodeURIComponent(JSON.stringify(obj)));
}
function checkpointSave() {
    var obj = generateJSObject();
    var progHash = generateHash(obj);
    history.pushState(obj, "", progHash);
}
function loadSave() {
    if (!localStorage.getItem("autosave-json")) {
        alert("You have no saved program.");
        return;
    }
    var obj = loadJSON(localStorage.getItem("autosave-json"));
    var progHash = generateHash(obj);
    history.pushState(JSON.parse(localStorage.getItem("autosave-json")), "", progHash);
}

function changeDialect() {
    var cl = document.getElementById('toolbox').classList;
    for (var i=0; i<cl.length; i++)
        if (cl[i].substring(0, 11) == 'in-dialect-')
            cl.remove(cl[i]);
    cl.add('in-dialect-' + document.getElementById('dialect').value);
    generateCode();
    checkpointSave();
}

function shrink() {
    editor.setValue(document.getElementById('gracecode').value, -1);
    codearea.classList.add('shrink');
    var starts = [];
    var selects = codearea.getElementsByTagName('select');
    for (var i=0; i<selects.length; i++) {
        var sel = selects[i];
        sel.parentNode.appendChild(document.createTextNode(sel.value));
        sel.style.display = 'none';
    }
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        starts.push(child);
        continue;
    }
    setTimeout(function() {
        var runningTop = 19;
        for (var i=0; i<starts.length; i++) {
            starts[i].oldTop = starts[i].style.top;
            starts[i].oldLeft = starts[i].style.left;
            starts[i].style.left = '49px';
            starts[i].style.top = runningTop + 'px';
            runningTop += +starts[i].offsetHeight;
            var child = starts[i].next;
            while (child) {
                child.style.left = '49px';
                child.style.top = runningTop + 'px';
                runningTop += +child.offsetHeight;
                child = child.next;
            }
        }
        setTimeout(function() {
            ctr.style.visibility = 'visible';
            codearea.style.visibility = 'hidden';
        }, 1100);
    }, 300);
}
function grow() {
    ctr.style.visibility = 'hidden';
    codearea.style.visibility = 'visible';
    codearea.classList.remove('shrink');
    codearea.classList.add('growing');
    var selects = codearea.getElementsByTagName('select');
    for (var i=0; i<selects.length; i++) {
        var sel = selects[i];
        sel.parentNode.removeChild(sel.parentNode.lastChild);
        sel.style.display = 'inline';
    }
    setTimeout(function() {
        for (var i=0; i<codearea.children.length; i++) {
            var child = codearea.children[i];
            if (child.prev != false)
                continue;
            child.style.top = child.oldTop;
            child.style.left = child.oldLeft;
            var leftEdge = child.oldLeft;
            var runningTop = +child.style.top.substring(0, child.style.top.length - 2);
            while (child) {
                child.style.top = runningTop + 'px';
                child.style.left = leftEdge;
                runningTop += child.offsetHeight;
                child = child.next;
            }
        }
        setTimeout(function() {codearea.classList.remove('growing');}, 1500);
    }, 200);
}
function toggleShrink() {
    if (codearea.classList.contains('shrink'))
        grow();
    else
        shrink();
}
function attachTileBehaviour(n) {
    n.addEventListener('mousedown', dragstart);
    n.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.classList.contains('locked')) {
            this.classList.remove('locked');
            var tiles = this.getElementsByClassName('tile');
            for (var i=0; i<tiles.length; i++) {
                tiles[i].addEventListener('mousedown', dragstart);
            }
            var inputs = this.getElementsByTagName('input');
            for (var i=0; i<inputs.length; i++) {
                inputs[i].readOnly = false;
            }
        } else {
            this.classList.add('locked');
            var tiles = this.getElementsByClassName('tile');
            for (var i=0; i<tiles.length; i++) {
                tiles[i].removeEventListener('mousedown', dragstart);
            }
            var inputs = this.getElementsByTagName('input');
            for (var i=0; i<inputs.length; i++) {
                inputs[i].readOnly = true;
            }
        }
        reflow();
    });
    if (!n.next)
        n.next = false;
    if (!n.prev)
        n.prev = false;
    Array.prototype.forEach.call(n.getElementsByTagName('select'),
            function(el) {
                el.addEventListener('mousedown', function(ev) {
                    ev.stopPropagation();
                });
                el.addEventListener('change', function(ev) {
                    generateCode();
                    checkpointSave();
                });
            });
    Array.prototype.forEach.call(n.getElementsByTagName('input'),
            function(el) {
                el.addEventListener('mousedown', function(ev) {
                    ev.stopPropagation();
                });
                el.addEventListener('keyup', function(ev) {
                    this.size = this.value.length + 1;
                    generateCode();
                });
                el.addEventListener('blur', function(ev) {
                    this.size = this.value.length;
                    generateCode();
                    checkpointSave();
                });
                if (el.classList.contains('variable-name')) {
                    el.oldName = '---none---';
                    el.addEventListener('blur', function(ev) {
                        renameVar(el.oldName, el.value);
                        el.oldName = el.value;
                    });
                }
            });
    Array.prototype.forEach.call(n.getElementsByClassName('op'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    switch(this.innerHTML) {
                        case "*":
                            this.innerHTML = '-';
                            break;
                        case "-":
                            this.innerHTML = '/';
                            break;
                        case "/":
                            this.innerHTML = '++';
                            break;
                        case "++":
                            this.innerHTML = '+';
                            break;
                        default:
                            this.innerHTML = '*';
                    }
                    generateCode();
                    checkpointSave();
                });
            });
    Array.prototype.forEach.call(n.getElementsByClassName('cmpop'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    switch(this.innerHTML) {
                        case "==":
                            this.innerHTML = '<';
                            break;
                        case "<":
                            this.innerHTML = '>';
                            break;
                        default:
                            this.innerHTML = '==';
                    }
                    generateCode();
                    checkpointSave();
                });
            });
}
function attachHoleBehaviour(n) {
    n.addEventListener('mouseup', holedrop);
    n.addEventListener('mousemove', function(){alert("entering");});
}
function attachToolboxBehaviour(n) {
    n.addEventListener('mousedown', function(ev) {
        var cl = this.cloneNode(true);
        codearea.appendChild(cl);
        cl.style.position = 'absolute';
        cl.style.top = (this.offsetTop - toolbox.offsetTop - toolbox.scrollTop + codearea.scrollTop) + 'px';
        cl.style.left = '500px';
        attachTileBehaviour(cl);
        dragstart.call(cl, ev);
    });
}
Array.prototype.forEach.call(codearea.getElementsByClassName('tile'),
        attachTileBehaviour);
Array.prototype.forEach.call(toolbox.getElementsByClassName('tile'),
        attachToolboxBehaviour);
window.addEventListener('popstate', function(ev) {
    if (ev.state != null)
        loadJSON(JSON.stringify(ev.state));
});
