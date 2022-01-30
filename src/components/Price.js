import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { useState } from 'react'

export default function Price() {
  const socket = new W3CWebSocket(
    'ws://stream.tradingeconomics.com/?client=guest:guest',
  )
  const [data, setData] = useState('')
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

  // When data is received
  socket.onmessage = function (event) {
    console.log('data', event.data)
    setData(event.data)
  }
  console.log(data)
  // A connection could not be made
  socket.onerror = function (event) {
    console.log(event)
  }
  socket.onclose = function (code, reason) {
    console.log(code, reason)
  }

  return (
    <div>
      <h2>{data}</h2>
    </div>
  )
}

//  Somewhere on the page you should show the latest price and the latest timestamp (in local time for the
//     user) for the EUR/USD exchange rate from a websocket feed.
//     - The feed can be accessed by sending “{"topic": "subscribe", "to": "EURUSD:CUR"}” to
//     ws://stream.tradingeconomics.com/?client=guest:guest
//     - ‘dt’ is the timestamp as UTC and ‘price’ is the latest price.
