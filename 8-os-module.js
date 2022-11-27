// os library has a lot of functions available
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//method for system uptime, seconds
console.log(`system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
};

console.log(currentOS);