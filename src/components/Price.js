// @ts-nocheck
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import { useState, useEffect } from 'react'

export default function Price() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [data, setData] = useState('')

  useEffect(() => {
    const socket = new W3CWebSocket(
      'wss://stream.tradingeconomics.com/?client=guest:guest',
    )
    let subRequest = {
      topic: 'subscribe',
      to: 'EURUSD:CUR',
    }
    socket.onopen = function () {
      // console.log('Opened connection 🎉')
      // send data to the server
      var json = JSON.stringify(subRequest)
      socket.send(json)
    }
    // When data is received
    socket.onmessage = function (event) {
      // @ts-ignore
      let finaldata = JSON.parse(event.data)
      try {
        // eslint-disable-next-line no-cond-assign
        if ((finaldata.event = 'data')) {
          setData(finaldata)
        }
      } catch (error) {
        console.log(error)
      }
    }
    // A connection could not be made
    socket.onerror = function (event) {
      console.log(event)
    }
    socket.onclose = function (code, reason) {
      console.log(code, reason)
    }
  }, [])

  //   console.log("finaldata", data.price)
  let timestamp = data
    ? new Date(data.dt).toLocaleTimeString('en-UK')
    : 'Loading'
  //   console.log(timestamp)

  //   console.log('time', timestamp)
  return (
    <div>
      <h2>EUR/USD:{data ? data.price : '...Loading'}</h2>
      <div>
        <h2>time:{timestamp === 'Invalid Date' ? '...Loading' : timestamp}</h2>
      </div>
    </div>
  )
}
