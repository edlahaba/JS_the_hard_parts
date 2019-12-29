window.onload = () => {
  const addEventTo = (el, eventName, cb) => {
    cl = document.getElementById(el);
    cl.removeEventListener(eventName,cb);
    cl.addEventListener(eventName, cb);
  }

  let test = (event) => {
    console.log('clicked #2');
    changeColour();
  }

  let changeColour = () => {
    if (document.bgColor == "rgb(221, 238, 255)") {
      document.bgColor = "rgb(255, 238, 221)";
      return;
    }

    document.bgColor = 'rgb(221, 238, 255)';
  }

  addEventTo('activate', 'click', () => {
    console.log('clicked #1');
    addEventTo('color','click', test);
  });
}
