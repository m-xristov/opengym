var a, b = 1, p,
    d = 10, f = { obj: 1 },
    hasBarProperty = f.hasOwnProperty("bar");
alert( a ); // this is a test file
if ( a === b ) {
    alert( "equals" );
}
alert( hasBarProperty );
if ( d === f ) {
    alert( "asdf" );
    for ( p in f ) {
        if (f.hasOwnProperty(p)) {
            alert(p);
        }
    }
}
