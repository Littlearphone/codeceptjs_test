/****************************************************************************************************************************************************
 *                                                                                                                                                  *
 *  * Copyright: https://github.com/Littlearphone                                                                                                   *
 *                                                                                                                                                  *
 ****************************************************************************************************************************************************/

const os = require('os');
module.exports = {
    getHostV4Ip() {
        const iFaces = os.networkInterfaces();
        let ip = [];
        Object.keys(iFaces).forEach(function (ifname) {
            iFaces[ifname].forEach(function (iFace) {
                if ('IPv4' !== iFace.family || iFace.internal !== false) {
                    // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                    return;
                }
                ip.push(iFace.address);
            });
        });
        return ip;
    },
    getHostV6Ip() {
        const iFaces = os.networkInterfaces();
        let ip = [];
        Object.keys(iFaces).forEach(function (ifname) {
            iFaces[ifname].forEach(function (iFace) {
                if ('IPv6' !== iFace.family || iFace.internal !== false) {
                    // skip over internal (i.e. 127.0.0.1) and non-ipv6 addresses
                    return;
                }
                ip.push(iFace.address);
            });
        });
        return ip;
    }
};
