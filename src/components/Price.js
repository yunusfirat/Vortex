// @ts-nocheck
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { useState, useEffect } from 'react'

export default function Price() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const socket = new W3CWebSocket(
    'wss://stream.tradingeconomics.com/?client=guest:guest',
  )
  const [data, setData] = useState({})
  let subRequest = {
    topic: 'subscribe',
    to: 'EURUSD:CUR',
  }

  socket.onopen = function () {
    console.log('Opened connection 🎉')

    // send data to the server
    var json = JSON.stringify(subRequest)
    socket.send(json)
  }
  useEffect(() => {
    // When data is received
    socket.onmessage = function (event) {
      // @ts-ignore
      let finaldata = JSON.parse(event.data)
      if (finaldata) {
        setData(finaldata)
      } else {
        setData({
          message: 'loading',
        })
      }
    }
  }, [socket])
  // A connection could not be made
  socket.onerror = function (event) {
    console.log(event)
  }
  socket.onclose = function (code, reason) {
    console.log(code, reason)
  }
  //   console.log("finaldata", data.price)
  let timestamp = data
    ? new Date(data.dt).toLocaleTimeString('en-UK')
    : 'Loading'
  console.log(timestamp)

  console.log('time', timestamp)
  return (
    <div>
      <h2>EUR/USD:{data ? data.price : 'Loading'}</h2>
      <div>
        <h2>time:{timestamp === 'Invalid Date' ? 'Loading' : timestamp}</h2>
      </div>
    </div>
  )
}