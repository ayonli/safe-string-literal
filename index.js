/**
 * @param {string} str 
 * @param {string|string[]} excludes 
 */
export function escape(str, excludes) {
    return String(str).replace(/["'`\\\b\f\n\r\t\u2028\u2029]/g, function (char) {
        if (excludes && excludes.indexOf(char) >= 0)
            return char;

        switch (char) {
            case '"':
            case "'":
            case '`':
            case "\\":
                return "\\" + char;
            case "\b":
                return "\\b";
            case "\f":
                return "\\f";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\t":
                return "\\t";
            case "\u2028":
                return "\\u2028";
            case "\u2029":
                return "\\u2029";
        }
    });
}

/**
 * @param {string} str 
 */
export function unescape(str) {
    return String(str).replace(/\\["'`\\bfnrt]|\\u2028|\\u2029/g, function (chars) {
        switch (chars) {
            case '\\"':
            case "\\'":
            case "\\`":
            case "\\\\":
                return chars[1];
            case "\\b":
                return "\b";
            case "\\f":
                return "\f";
            case "\\n":
                return "\n";
            case "\\r":
                return "\r";
            case "\\t":
                return "\t";
            case "\\u2028":
                return "\u2028";
            case "\\u2029":
                return "\u2029";
        }
    });
}
