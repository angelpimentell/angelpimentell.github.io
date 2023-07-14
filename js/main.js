function main() {
    console.log("DEVICES:")
    // Get all connected USB devices the website has been granted access to.
    navigator.usb.getDevices().then(devices => {
        devices.forEach(device => {
            console.log(device.productName);      // "Arduino Micro"
            console.log(device.manufacturerName); // "Arduino LLC"
        });
    })
}