//

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
