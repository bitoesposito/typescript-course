function process(val: unknown) {
    if (
        typeof val === 'object' &&
        !!val &&
        'log' in val &&
        val.log === 'function'
    ){
        console.log(val);
    }
}