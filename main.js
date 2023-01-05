
function get_os(){
    var OSName="Unknown OS";

    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";

    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";

    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";

    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    alert(OSName);
}

async function getIpClient() {
    try {
        const response = await axios.get('https://ipinfo.io/json');
        console.log(response);
      } catch (error) {
        console.error(error);
    }
  }