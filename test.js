/*var apples=['Apple1','Apple2'];
apples.forEach(fruits =>
    {
        console.count(fruits);
    })
    */

    const dosomething = () => console.log("Im doing something");
    const measuredosomething = () =>
    {
       console.time('dosomething()')
       dosomething()
       console.timeEnd('dosomething()')
    }
    measuredosomething()