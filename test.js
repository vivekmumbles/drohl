    function getRatios() {
        var r = d3.range(1,NUM_P+1).map(function(x) { return d3.range(1,DEN_P+1).map(function(y) { return [x,y]; }); });
        r = r.reduce(function(a, b) { return a.concat(b); });
        var d = {};
        r = r.filter(function(x) { var r = x[0]/x[1]; if (r in d) { return false; } else { d[r] = true; return true; } });
        r = r.map(function(x) { return x[0]/x[1]; });
        return r.sort(function(a, b) { return a - b; });
    }
