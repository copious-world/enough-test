const {execSync} = require('child_process');

let g_test_reports = []

const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"
const FgGray = "\x1b[90m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"
const BgGray = "\x1b[100m"




class Report {
    constructor(method,title) {
        if ( method === undefined ) throw "no method name"
        if ( title === undefined )  throw "no test name"
        this.method = method
        this.title = title
        this.status = false
        g_test_reports.push(this)
    }

    pass() {
        this.status = true
    }

}

function reset_tests() {
    g_test_reports = []
}

function test_report() {
    let b = execSync('tput bold')
    let normal = execSync('tput sgr0')

    console.log('-')
    console.log('-')
    console.log('------------------------------------------------------------------')
    let count_pass = 0
    let n = g_test_reports.length
    for ( let i = 0; i < n; i++ ) {
        let rep = g_test_reports[i]
        count_pass += rep.status ? 1 : 0
        console.log(`${i}. \t${rep.status ? "\x1b[32mpass" : "\x1b[31mfail"}${Reset}\t${FgBlue}${b}${rep.method}${Reset} ::${normal} ${rep.title}`)
    }

    console.log('------------------------------------------------------------------')
    console.log(`${b}${FgGreen}Passed: ${count_pass}\t${FgRed}Failed: ${n - count_pass}\t${FgCyan}Total: ${n}${normal}`,Reset)
    console.log('------------------------------------------------------------------')
}

function kill(message) {
    console.log("unsafe to continue because : " + message)
    console.log("...")
    console.log("...")
    process.exit(1)
}

function title(s) {
    let b = execSync('tput bold')
    let normal = execSync('tput sgr0')
    console.log(`${b}${Underscore}${FgGreen}${s}${normal}${Reset}`)
    console.log('->')
}

function verbosity(s) {
    console.log('\tlog:\t',s)
}

module.exports.Report = Report
module.exports.title = title
module.exports.verbosity = verbosity
module.exports.test_report = test_report
module.exports.kill = kill
module.exports.reset_tests = reset_tests
