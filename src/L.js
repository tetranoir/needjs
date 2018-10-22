const arrayHandler = {
  ary: [],
  get: function(ary, i) {
    if (!this.ary[i]) {
      if (typeof ary[i] === 'function') {
        this.ary[i] =  ary[i](i);
      } else if (ary[i] === undefined) {
        this.ary[i] = ary[ary.length - 1](i); // generator
      } else {
        this.ary[i] = ary[i];
      }
    }
    return this.ary[i];
  },
};

const objectHandler = {
  // contains the function expressions to evaluate
  exprs: {},
  get: function(obj, prop) {
    if (obj[prop] === undefined) {
      obj[prop] = this.exprs[prop]();
    }
    return obj[prop];
  },
  set: function(obj, prop, value) {
    if (Array.isArray(value)) {
      obj[prop] = new Proxy(value.slice(), arrayHandler);
    } else if (typeof value === 'object') {
      obj[prop] = new Proxy({}, objectHandler);
      Object.entries(value).forEach(([key, val]) => obj[prop][key] = val);
    } else if (typeof value !== 'function') {
      obj[prop] = value;
    } else {
      obj[prop] = undefined; // if its defined, undefine it
      this.exprs[prop] = value;
    }
  },
};

// creates a lazy scope in a closure where you want it
const Scope = function() {
  const p = new Proxy(this, objectHandler);
  return p;
};

export default Scope;

