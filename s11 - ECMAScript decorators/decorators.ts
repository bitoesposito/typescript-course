function logger<T extends new (...args: any[]) => any>(
    target: T, 
    ctx: ClassDecoratorContext
) {
    console.log('logged decorator', target, ctx);
    
    return class extends target {
        constructor(...args: any[]) {
            super(...args);
            console.log('class constructor');
            console.log(this);
        }
    }
}

function autobind(
    target: (...args: any[]) => any,
    ctx: ClassMethodDecoratorContext
) {
    console.log('autobind decorator', target, ctx);
    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });
    
    return function(this: any[]) {
        console.log('Executing target function')
        target.apply(this);
    }
}

function replacer<T>(initValue: T) {
    return (
        target: any,
        ctx: ClassFieldDecoratorContext
    ) => {
        console.log('replacer decorator', target, ctx);
    
        return (initialValue: any) => {
            console.log(initialValue);
            return initValue;
        }
    }
}

@logger
class Person {
    @replacer('(was) Vito')
    name = 'Vito'
    
    @autobind
    greet() {
        console.log('Hello, my name is ' + this.name);
    }
}

const vito = new Person();
const greet = vito.greet;
greet();

// vito.greet();