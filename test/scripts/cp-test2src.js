// const unpm = require('unity-npm-utils')
// const path = require('path')
//
// const unitySrcRoot = path.join(__dirname, '..')
//
// const pkgName = path.basename(path.join(unitySrcRoot, '..'))
// const unityInstallPath = path.join(__dirname, '..', 'Assets', 'Plugins', 'packages', pkgName)
// const packageTargetPath = path.join(unitySrcRoot, '..', 'Runtime', pkgName)
//
// unpm.copyFromUnity2Pkg(pkgName, {
// 	verbose: true,
// 	unity_install_path: unityInstallPath,
// 	package_target_path: packageTargetPath
// })
//     .then(info => {
//         console.log(`cp-test2src succeeded for package ${pkgName}`)
//     })
//     .catch(err => {
//         console.log('cp-test2src failed with error: %j\n%j', err, err.stack)
//         process.exit(1)
//     })

const unpm = require('unity-npm-utils');
const path = require('path');

const unitySrcRoot = path.join(__dirname, '..');
const tgtPkgRoot = path.join(unitySrcRoot, '..');
const pkgName = path.basename(path.join(unitySrcRoot, '..'))

unpm.copyFromUnity2PkgRoot(pkgName, unitySrcRoot, tgtPkgRoot, { overwrite: false })
    .then(info => {
        const pkgName = (info && info.package) ?
            info.package.name || '[package name unset]' :
            '[package info missing from result]';

        console.log(`cp-test2src succeeded for package ${pkgName}`);
    })
    .catch(err => {
        console.log('cp-test2src failed with error: %j: %j', err, err.stack);
        process.exit(1);
    })
