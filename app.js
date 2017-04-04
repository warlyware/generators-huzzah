function* generator() {
    yield 'f';
    console.log('o');
    yield 'o';
    console.log('b');
    yield 'a';
    console.log('r');
}

var foobar = generator();
for (let letter of foobar) {
    console.log(letter);
}

