import React from 'react'
import { useRef } from 'react'
function WebCamera ({audio})
{
    const videoRef = useRef();
    navigator.mediaDevices.getUserMedia( { video: true, audio: audio } ).then( media =>
    {
        videoRef.current.srcObject = media;
        videoRef.current.play();
    })
    return (
        <div>
        <video src="" id="video" ref={videoRef}></video>            
        </div>
    )
}

export default WebCamera
