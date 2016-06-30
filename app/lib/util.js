import $ from 'jquery'

export function getTestLayout(title, cb) {
  const name = /(.*)-dev$/.exec(title)[1]
  if (name)
    return $.ajax({
      url: `/get-test-layout/${name}`,
      method: 'GET',
      success: cb,
    })
  return null
}

export function swapElements(list, x, y) {
  list[x] = [list[y], list[y] = list[x]][0]
}

export function copyToClipboard(text) {
  window.prompt('Copy to clipboard: Ctrl+C, Enter', text)
}

export function openWindow(text) {
  window.open(text)
}




export function startDynamic(component) {

    if (!component.state.datasource) {
        return;
    }



    let cb = component.handleDynamicData ? (data) => {
        if (!component.state.datasource.startDynamic) {
            return;
        }
        console.log("data",data)
        component.handleDynamicData(data);

        if (component.refs.ds && component.refs.ds.state.show) {
            component.refs.ds.handleLog(data);
        }
    } : (data) => { console.log(data); }

    let serverURL = component.state.datasource.server;


    if (component.state.datasource.dataType === "pull") {

        if (component.state.datasource.startDynamic) {

            if (!component.state.datasource.repeat) {
                component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb, true);

            } else {
                let id = component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb);
                component.setState({ timerId: id });
            }


        }


    } else if (component.state.datasource.dataType === "push") {

        let conn=null;
        let pool=null;

        if(serverURL.indexOf("mqtt")>-1){

            conn = component.props.mqttPool.get('ws://' + serverURL.split("mqtt://")[1]);
            pool= component.props.mqttPool;

        }else if(serverURL.indexOf("socketio")>-1){

            conn = component.props.socketioPool.get('http://' + serverURL.split("socketio://")[1]);
            pool= component.props.socketioPool;

        }else {
            console.log("未支持协议",serverURL)
            return ;
        }



        if (component.state.datasource.startDynamic) {

            pool.sub(conn, component.state.datasource.channel, cb)

        } else {

            pool.unsub(conn, component.state.datasource.channel, cb)

        }


    }

}

export function stopDynamic(component) {


    let cb = component.handleDynamicData ? component.handleDynamicData : (data) => { console.log(data); }

    if (component.state.dataType === "pull") {

        component.props.timerPool.stop(component.state.timerId);
        component.setState({ timerId: null });

    } else if (component.state.dataType === "push") {

        component.props.mqttPool.unsub(conn, component.state.channel, cb)

    }

}
