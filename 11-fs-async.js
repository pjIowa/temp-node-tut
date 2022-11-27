const {readFile, writeFile} = require('fs');

//nesting is used to ensure ordering of aync callbacks
//utf8 is needed to decode text being read
//promises and async await, covered later, will improve readability
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }

    const first = result;

    readFile('./content/test.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
    
        const second = result;

        writeFile(
            './content/result-async.txt', 
            `Here is result: ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                
                console.log(result);
        });
    });    
});