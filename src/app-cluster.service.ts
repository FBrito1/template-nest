import cluster from 'cluster';
import * as os from 'os';
import { Injectable } from '@nestjs/common';

const numCPUs = os.cpus().length;
const APP_CPUS_LIMIT = process.env.APP_CPUS_LIMIT || 2;

@Injectable()
export class AppClusterService {
  static clusterize(callback: () => void): void {
    let cpusCount = 0;

    if (cluster.isMaster) {
      console.log(`Master server started on ${process.pid}`);
      for (let i = 0; i < numCPUs && cpusCount < APP_CPUS_LIMIT; i++) {
        cpusCount += 1;
        cluster.fork();
      }
      cluster.on('exit', (worker) => {
        console.log(`Worker ${worker.process.pid} died.`);
      });
    } else {
      console.log(`Cluster server started on ${process.pid}`);
      callback();
    }
  }
}
