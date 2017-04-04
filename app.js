function* generator() {
    yield 'f';
    console.log('o');
    yield 'o';
    console.log('b');
    yield 'a';
    console.log('r');
}

var gen = generator();
while (true) {
    let item = gen.next();
    if (item.done) {
        break;
    }
    console.log(item.value);
}
