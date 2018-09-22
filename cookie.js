// write cookie with name, value, expiration date = days it should exist
function writeCookie(name, value, days) {
    // Default = temporary (no exp date)
    var expires = "";
    
    // make persistent
    if (days) {
        var date = new Date();
        // convert days to milliseconds + current time
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    };
    
    // set cookie name, value, & exp date
    document.cookie = name + "=" + value + expires + "; path=/";
}

// read cookie called name
function readCookie(name) {
    // find cookie
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i=0; i<cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName) == 0)
            return c.substring(searchName.length, c.length);
    }
    return null;
}

// erase cookie called name
function eraseCookie(name) {
    // erase cookie
    writeCookie(name, "", -1);
}
