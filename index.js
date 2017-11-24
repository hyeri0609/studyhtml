const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

//.log("numCPUSs: " + numCPUs);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  
  cluster.setupMaster({
    exec: 'worker.js'
  });

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('worker %d died (%s). check code if want to restart...', worker.process.pid, signal || code);
    
    // console.log('worker %d died (%s). restarting...', worker.process.pid, signal || code);
    // cluster.fork();
    for (const id in cluster.workers) {
      var worker = cluster.workers[id];
      console.log(worker.id);
    }
  });
} else {



  console.log(`Worker ${process.pid} started`);
}



