{
    const buf = new ArrayBuffer(4);
    const wDataView = new DataView(buf);
    // const rDataView = new DataView(buf);
    wDataView.setInt32(0, 0x12345678);

    const arr = new Int8Array(buf);
    arr[0] = 0x10;

    // for (let i = 0; i < 4; ++i) {
    //     console.log(rDataView.getUint8(i));
    // }
    for (const [k, v] of arr.entries()) {
        console.log(k, v);
    }
}

{
    const arr32 = Int32Array.from([0x11223344, 0x44332211, 0x55667788, 0x88776655]);
    const arr8 = new Uint8Array(arr32.buffer);
    for (const [k, v] of arr8.entries()) {
        console.log(k, v);
    }
}