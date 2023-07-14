async function ports() {
    const ports = await navigator.serial.getPorts();

    console.log("ports:");
    console.log(ports);

}

function main() {
    console.log("DEVICES 2:")

    ports();
}

