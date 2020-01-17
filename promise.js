const bar = () => console.log("Barrrrrr");

const baz = () => console.log("Bazzzzzz");

const foo = () =>
{
    console.log("Foooooo");
    setTimeout(bar,0);
    new Promise((resolve,reject)=>resolve("The issue is resolved after baz and before bar")
    ).then(resolve =>console.log(resolve));
    baz();
   
}
foo()