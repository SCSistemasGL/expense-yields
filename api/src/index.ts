/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-var-requires */
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import "reflect-metadata";
import server from "./app";
import { AppDataSource } from "./db";

async function main(): Promise<void> {
  try {
    await AppDataSource.initialize();
    const SERVER_PORT: number = server.settings.port;
    server.listen(SERVER_PORT, () => {
      console.log(`Server ready on port: http://localhost:${SERVER_PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main()
  .then()
  .catch(() => {});
