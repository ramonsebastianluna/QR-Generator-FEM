import { useState } from "react";
import QRCode from "react-qr-code";

function App(){
    const [url, setUrl] = useState("Tomá por curioso");

    const generarQR = (event) => {
        event.preventDefault();
        setUrl(event.target.url.value);
        event.target.url.value = "";
    }

    return (
        <form className="container" onSubmit={(event) => {generarQR(event)}}>
            <div className="container__qr">
                <div className="qr__circle-1"></div>
                <QRCode 
                    value={url}
                    style={{ height: "160px", width: "160px", zIndex: "1"}}
                    bgColor= "transparent"
                    fgColor= "#FFFFFF"
                /> 
                <div className="qr__circle-2"></div> 
            </div>
            <div className="container__input">
                <h1>Add your url to convert it to qr code</h1>
                <input name="url" placeholder="Your URL here!" required/>
                <button type="submit">Make QR</button>
            </div>
            <div className="container__text">
                <p>Scan the QR code to visit your website</p>
            </div>
        </form>
    )
}

export default App