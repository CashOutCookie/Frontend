import React from "react";

function PushNotis() {

    var token = localStorage.getItem('token')
    var socket = new WebSocket('ws://localhost:8000/notifications/?token='+token);
    socket.onmessage = function(event){
        var data = JSON.parse(event.data);
        console.log(data)
    }

    return (
        <div className="notifications-parent">
            <h1>You received a notification</h1>
        </div>
    );
}

export default PushNotis;
