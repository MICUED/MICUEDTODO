import koa from 'koa'
import route from 'koa-route'
import JPush from "./node_modules/jpush-sdk/lib/JPush/JPush.js"

const client = JPush.buildClient('7f6f6370b15e52876f34b7e0', 'dc2e10b3e0bad4a8654b17ac')
const app = new koa()

const index = ctx => {
    ctx.response.body = "1231231"
}

const sm = ctx => {
    const {message} = ctx.request.query
    console.log(ctx.request.query)
    if(!message)return
    client.push().setPlatform('ios', 'android')
    // .setAudience(JPush.tag('555', '666'), JPush.alias('666,777'))
    .setAudience(JPush.ALL)
    .setNotification('Hi, JPush', JPush.ios(message), JPush.android(message, null, 1))
    .setMessage('msg content')
    // .setOptions(null, 60)
    .send(function(err, res) {
        if (err) {
            console.log(err.message)
        } else {
            console.log('Sendno: ' + res.sendno)
            console.log('Msg_id: ' + res.msg_id)
            setTimeout(function(){
                client.getReportReceiveds(res.msg_id, function (err, res) {
                    console.log(res)
                    if (err) {
                        console.log(err.message)
                    } else {
                        for (var i = 0; i < res.length; i++) {
                            console.log(res[i].android_received)
                            console.log(res[i].ios_apns_sent)
                            console.log(res[i].msg_id)
                        }
                    }
                });
            }, 4000)
        }
    });
    
}


app.use(route.get('/', index))
app.use(route.get('/sm', sm))

app.listen(9000)