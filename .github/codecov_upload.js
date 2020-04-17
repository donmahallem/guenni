const glob = require('glob');
const path = require('path');
const child = require('child_process');

const basePath = path.join('packages', path.sep, '*', path.sep, 'coverage', path.sep);
const coverages1 = glob.sync(path.join(basePath, '**', path.sep, 'coverage-final.json'));
const coverages2 = glob.sync(path.join(basePath, 'coverage-final.json'));
const coverages = [...coverages1, ...coverages2];
child.execSync('curl -o ./.github/codecov.sh \'https://codecov.io/bash\'');
child.execSync('chmod +x ./.github/codecov.sh');
console.log(coverages)
for (const coverage of coverages) {
    console.log("Processing coverage: ", coverage, path.sep);
    const packageName = coverage.split(/[\\/\\\\]/)[1];
    const camelPackageName = packageName.split('-').map((part) => {
        return part.substr(0, 1).toUpperCase() + part.substr(1);
    }).join("");
    console.log("Package Name: ", packageName, "=>", camelPackageName);
    console.log(child.execFileSync("./.github/codecov.sh", [`-F`, camelPackageName, '-f', coverage, '-n', camelPackageName, '-y', './.codecov.yml']).toString());
}
