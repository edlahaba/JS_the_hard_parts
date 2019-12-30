const ezDOM = (selector) => {
  let element = document.getElementById(selector) || document.createElement(selector);

  var ezObj = (() => {
    return {
      waitPage: (cb) => {
        window.onload = () => { cb(); }
      },
      el: element,
      attr: (name, value) => {
        element.setAttribute(name, value);
        return ezObj;
      },
      in: (element) => {
        if(!(element instanceof Element)) element = ezDOM(element).el

        element.appendChild(ezObj.el);
        return ezObj;
      },
      ezGet: (url, sucess, fail) => {
        const req = new XMLHttpRequest();
        req.open('GET', url, true);
        req.onreadystatechange = () => {
          if (req.readyState == 4) {
            if(req.status == 200)
              sucess(req.response);
            else
              fail(req.response)
          }
        };
        req.send(null);
      }
    }
  })()

  return ezObj;
}

ezDOM().waitPage(() => {
  const addCover = (albumData) => {
    ezDOM('img').attr('src', albumData.image_url).in('ch2');
  }

  ezDOM().ezGet('https://rest.bandsintown.com/artists/outkast?app_id=jshp',
    (response) => { addCover(JSON.parse(response)); },
    (response) => { throw('failure!'); });
});

