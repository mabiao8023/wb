/**
 * Created by linziying on 2017/9/21.
 */
let runtime =  location.origin.includes('test')? 'dev' : 'pro'; // 开发环境dev   生产环境pro  本地测试loc

let loc_ws_path = 'ws://10.1.70.25:9588';
let dev_ws_path = 'ws://test.yd.linghit.com:9588';
let pro_ws_path = 'ws://114.55.101.254:9588';

let ws_path = runtime == 'dev' ? dev_ws_path : runtime == 'pro' ? pro_ws_path : loc_ws_path;
let socket = () => {

    let ws = new WebSocket(ws_path)
    // ws.addEventListener('error', (err) => {
    //     throw new Error(err)
    // })
    return ws
}
export default socket
