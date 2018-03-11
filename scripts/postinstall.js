const unpm = require('unity-npm-utils');
const path = require('path');

const pkgRoot = path.join(__dirname, '..');

unpm.unityProject.installPackageToUnity(pkgRoot, {
    // verbose: opts.verbose
},
(err, info) => {
    if(err) {
        console.error('install to unity failed with error: ', err);
        return;
    }
});
