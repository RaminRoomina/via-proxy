const net = require('net');

// Configuration
const LOCAL_PORT = process.env.PORT || 10000; 
const REMOTE_HOST = 'btc.viabtc.cc';
const REMOTE_PORT = 443;

// Create a raw TCP server
const server = net.createServer((localSocket) => {
    // Open a connection to the real mining pool
    const remoteSocket = net.connect(REMOTE_PORT, REMOTE_HOST, () => {
        // Pipe data back and forth between miner and pool
        localSocket.pipe(remoteSocket);
        remoteSocket.pipe(localSocket);
    });

    // Handle errors so the proxy doesn't crash
    localSocket.on('error', () => remoteSocket.destroy());
    remoteSocket.on('error', () => localSocket.destroy());
});

server.listen(LOCAL_PORT, () => {
    console.log(`Stratum Proxy running on port ${LOCAL_PORT}`);
});
