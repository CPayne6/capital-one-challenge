/*
    Author: Chris Payne
    Date: February 2nd, 2019

    This is a supporting file for the challenge.
    It allows the program to tell which comment code to use for each file extension.
    Several languages are recognized in this file.
*/
const lineComments = {
    // ADA
    adb:     '--',
    ads:     '--',

    // AppleScript
    scpt:   '--',
    scptd:  '--',
    applescript:    '--',

    // Basic
    b:      'REM',

    // Types of C
    c:      '\\/\\/',
    h:      '\\/\\/',
    cc:     '\\/\\/',
    cpp:    '\\/\\/',
    cxx:    '\\/\\/',
    cs:     '\\/\\/',

    // Fortran
    f:      'C',
    for:    'C',
    f90:    '!',

    // Java
    java:   '\\/\\/',
    jav:    '\\/\\/',
    j:      '\\/\\/',

    // JavaScript and JScript
    js:     '\\/\\/',
    jse:    '\\/\\/',
    mjs:    '\\/\\/',

    // LUA
    lua:    '--',

    // MATLAB
    m:      '%[^{]',

    // PHP
    php:    '\\/\\/',
    phtml:  '\\/\\/',
    php3:   '\\/\\/',
    php4:   '\\/\\/',
    php5:   '\\/\\/',
    php7:   '\\/\\/',
    phps:   '\\/\\/',
    'php-s':'\\/\\/',

    // PowerShell
    ps1:    '#',
    ps1xml: '#',
    psc1:   '#',
    psd1:   '#',
    psm1:   '#',
    pssc:   '#',
    cdxml:  '#',

    // Python
    py:     '#',
    pyc:    '#',
    pyd:    '#',
    pyo:    '#',
    pyw:    '#',
    pyz:    '#',

    // Ruby
    rb:     '#',

    // SQL
    sql:    '--',

    // Swift
    swift:  '\\/\\/',

    // XML Not Available

    // ASP
    asp:    '\'',
    aspx:   '\'',
    asx:    '\'',
    asmx:   '\'',
    ashx:   '\'',

    // CSS Not Available

    // TypeScript
    ts:     '\\/\\/',
    tsx:    '\\/\\/'
};
const blockCommentOpen = {
    // ADA Not Available

    // AppleScript
    scpt:   '\\(\\*',
    scptd:  '\\(\\*',
    applescript:    '\\(\\*',

    // Basic Not Available

    // Types of C
    c:      '\\/\\*',
    h:      '\\/\\*',
    cc:     '\\/\\*',
    cpp:    '\\/\\*',
    cxx:    '\\/\\*',
    cs:     '\\/\\*',

    // Fortran Not Available

    // Java
    java:   '\\/\\*',
    jav:    '\\/\\*',
    j:      '\\/\\*',

    // JavaScript and JScript
    js:     '\\/\\*',
    jse:    '\\/\\*',
    mjs:    '\\/\\*',

    // LUA
    lua:    '--\\[\\[',

    // MATLAB
    m:      '%[{]',

    // PHP
    php:    '\\/\\*',
    phtml:  '\\/\\*',
    php3:   '\\/\\*',
    php4:   '\\/\\*',
    php5:   '\\/\\*',
    php7:   '\\/\\*',
    phps:   '\\/\\*',
    'php-s':'\\/\\*',

    // PowerShell
    ps1:    '<#',
    ps1xml: '<#',
    psc1:   '<#',
    psd1:   '<#',
    psm1:   '<#',
    pssc:   '<#',
    cdxml:  '<#',

    // Python
    py:     '"""',
    pyc:    '"""',
    pyd:    '"""',
    pyo:    '"""',
    pyw:    '"""',
    pyz:    '"""',

    // Ruby
    rb:     '=begin',

    // SQL Not Available

    // Swift
    swift:  '\\/\\*',

    // XML
    xml:    '<!--',
    html:   '<!--',
    htm:    '<!--',

    // ASP
    asp:    '<%--',
    aspx:   '<%--',
    asx:    '<%--',
    asmx:   '<%--',
    ashx:   '<%--',

    // CSS
    css:    '\\/\\*',

    // TypeScript
    ts:     '\\/\\*',
    tsx:    '\\/\\*'
};
const blockCommentClose = {
    // ADA Not Available

    // AppleScript
    scpt:   '\\*\\)',
    scptd:  '\\*\\)',
    applescript:    '\\*\\)',

    // Types of C
    c:      '\\*\\/',
    h:      '\\*\\/',
    cc:     '\\*\\/',
    cpp:    '\\*\\/',
    cxx:    '\\*\\/',
    cs:     '\\*\\/',

    // Fortran Not Available

    // Java
    java:   '\\*\\/',
    jav:    '\\*\\/',
    j:      '\\*\\/',

    // JavaScript and JScript
    js:     '\\*\\/',
    jse:    '\\*\\/',
    mjs:    '\\*\\/',

    // LUA
    lua:    '\\]\\]',

    // MATLAB
    m:      '%[}]',

    // PHP
    php:    '\\*\\/',
    phtml:  '\\*\\/',
    php3:   '\\*\\/',
    php4:   '\\*\\/',
    php5:   '\\*\\/',
    php7:   '\\*\\/',
    phps:   '\\*\\/',
    'php-s':'\\*\\/',

    // PowerShell
    ps1:    '#>',
    ps1xml: '#>',
    psc1:   '#>',
    psd1:   '#>',
    psm1:   '#>',
    pssc:   '#>',
    cdxml:  '#>',

    // Python
    py:     '"""',
    pyc:    '"""',
    pyd:    '"""',
    pyo:    '"""',
    pyw:    '"""',
    pyz:    '"""',

    // Ruby
    rb:     '=end',

    // SQL Not Available

    // Swift
    swift:  '\\*\\/',

    // XML
    xml:    '-->',    
    html:   '-->',
    htm:    '-->',

    // ASP
    asp:    '--%>',
    aspx:   '--%>',
    asx:    '--%>',
    asmx:   '--%>',
    ashx:   '--%>',

    // CSS
    css:    '\\*\\/',

    // TypeScript
    ts:     '\\*\\/',
    tsx:    '\\*\\/'
};

module.exports = {
    line:   lineComments,
    open:   blockCommentOpen,
    close:  blockCommentClose
}