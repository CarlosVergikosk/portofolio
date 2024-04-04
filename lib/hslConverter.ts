const HSL_REGEX =
  /hsla?\(\s*0*(?:360|3[0-5]\d|[12]?\d?\d)\s*(?:,\s*0*(?:100(?:\.0+)?|\d?\d(?:\.\d+)?)%?\s*){2}(?:,\s*(0(\.\d+)?|1(\.0+)?)\s*)?\)/;

function isString(item: any) {
  return toString.call(item) === "[object String]";
}

function isObject(item: any) {
  return item !== null && typeof item === "object";
}

function hasKeys(object: object, keys: string[]) {
  var j, key, len;
  for (j = 0, len = keys.length; j < len; j++) {
    key = keys[j];
    if (!(key in object)) {
      return false;
    }
  }
  return true;
}

function RGB(r1: number, g1: number, b1: number, a1: number) {
  const r = r1 != null ? r1 : 0;
  const g = g1 != null ? g1 : 0;
  const b = b1 != null ? b1 : 0;
  const a = a1 != null ? a1 : 1;

  return { r, g, b, a };
}

function getRgb(
  r: number,
  g: number,
  b: number,
  a: number,
  formatted: boolean
) {
  if (formatted) {
    return (
      "rgb(" + r + "," + g + "," + b + (a != null && a < 1 ? "," + a : "") + ")"
    );
  } else {
    return RGB(r, g, b, a);
  }
}

function hueToRgb(p: number, q: number, t: number) {
  switch (false) {
    case !(t < 0):
      return (t += 1);
    case !(t > 1):
      return (t -= 1);
    case !(t < 1 / 6):
      return p + (q - p) * 6 * t;
    case !(t < 1 / 2):
      return q;
    case !(t < 2 / 3):
      return p + (q - p) * (2 / 3 - t) * 6;
    default:
      return p;
  }
}

export default function hslConverter(hsl: string, formatted: boolean) {
  var a, b, g, h, l, p, q, r, ref, s;

  if (isString(hsl)) {
    if (!hsl.match(HSL_REGEX)) {
      return;
    }

    (ref = hsl
      .match(/hsla?\((.+?)\)/)?.[1]
      ?.split(",")
      .map(function (value) {
        value.trim();
        return parseFloat(value);
      })),
      (h = ref?.[0]),
      (s = ref?.[1]),
      (l = ref?.[2]),
      (a = ref?.[3]);
  } else if (
    isObject(hsl) &&
    hasKeys(hsl as unknown as object, ["h", "s", "l"])
  ) {
    const obj = hsl as unknown as {
      h: number;
      s: number;
      l: number;
      a: number;
    };

    h = obj.h;
    s = obj.s;
    l = obj.l;
    a = obj.a;
  } else {
    return;
  }

  h = (h || 1) / 360;
  s = (s || 1) / 100;
  l = (l || 1) / 100;
  a = a || 1;

  if (s === 0) {
    r = g = b = l;
  } else {
    q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }
  return getRgb(
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255),
    a,
    formatted
  );
}
