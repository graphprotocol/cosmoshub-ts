const fs = require("fs");

const wasmBuffer = fs.readFileSync("./index.wasm");

WebAssembly.compile(wasmBuffer).then((wasmModule) => {
    console.log(wasmModule.toString());
    WebAssembly.instantiate(wasmModule).then((instance) => {
        const lib = instance.exports;
        lib.testCosmos();
        lib.testIbc();
        console.log("Test succesfull!!");
    });
});

