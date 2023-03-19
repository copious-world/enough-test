# enough-test

There are others out there who figured out that you don't really need a lot of code to run the tests and print a report of what worked. Same here.

Of course, it does not go into the coverage report. But, not all modules really need that.

This is 100 lines of program (some lines are empty).

This is enough for lots of stuff.

## install

```
npm install --save-dev enough-test
```

## purpose 

Format some tests for some modules without adding something encyclopedic.

The following example is a gist that fits.
 
## Example - a test of the test

Instead of assert, notice the line

```
passes &&= (t1 !== null)
```

That checks that the test report object actually got constructed, which is highly likely. But, it could be something else:

```
passes &&= (predicate should be true after running some method)
```

Then, you can say the test past if `passes` is **true**.

```
if ( passes ) t1.pass()
```

That is `passes` starts out **true**, while `t1.status` starts out **false**. `t1.pass()` set `t1.status` to true. Then, the reporting method `test_report` check the status of each Report that it put into an array.

Here is an example, which is also run by the following command:

```
npm test
```

The code:

```

const {Report,reset_tests,test_report,title,verbosity,kill} = require('../report')


async function run_tests_0() {
    // this is a test
    reset_tests()
    title("running tests 1 for enough-tests...report.js ")

    let passes = true
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    let t1 = new Report("constructed","Report object gets construced")
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    verbosity("it got constructed")
    passes &&= (t1 !== null)
    //
    if ( passes ) t1.pass()

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    let t2 = new Report("title","prints another title")
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    title("another title")
    if ( passes ) t2.pass()
    //
    test_report()
}

async function run_tests_1() {
    // this is a test
    reset_tests()
    title("running tests 2 for enough-tests...report.js ")

    let passes = true
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    let t1 = new Report("constructed","Report object gets construced")
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    verbosity("it reset the test list and now adding more reports")
    //
    if ( passes ) t1.pass()

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    let t2 = new Report("test_report","last time we see a report")
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    verbosity("this is verbose --- formatted log")
    verbosity("next we'll kill the process as if something bad was about to happen")
    if ( passes ) t2.pass()
    //
    test_report()
}

async function run_tests_2() {
    // this is a test
    reset_tests()
    title("running tests 3 for enough-tests...report.js ")

    let passes = true
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    let t1 = new Report("kill","You should not see this")
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ----    
    verbosity("killing")
    kill("this is going to stop everything")
    //
    if ( passes ) t1.pass()
    //
    test_report()
}



async function run_tests() {
    await run_tests_0()
    await run_tests_1()
    await run_tests_2()
}


run_tests()     // this line has to be there

```

## Real world use

So, I used it just yesterday. And, I did have to do the tests. The nice format gives me the feel that I am using one of those larger than life testing stacks. But, of course, I just had to exercise the code, raise a few questions and make a few changes.

## Contributing

Do you want to have more things for this to do?  Make pull requests, etc.

