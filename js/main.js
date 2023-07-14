async function ports() {
    const ports = await navigator.serial.getPorts();
    const port = await navigator.serial.requestPort();

    console.log("ports:");
    console.log(ports);

    console.log("ports:");
    console.log(port);

}

function main() {
    console.log("DEVICES 2:")

    ports();
}

