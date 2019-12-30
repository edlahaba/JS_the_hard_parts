const ezDOM = (selector) => {
  let element;

  if(typeof selector === 'object') {
    element = selector;
  } else {
   element = document.getElementById(selector) || document.createElement(selector);
  }

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
        if(typeof element === 'string') element = ezDOM(element).el

        element.appendChild(ezObj.el);
        return ezObj;
      },
      text: (string) => {
        let textElement = document.createTextNode(string);
        ezDOM(textElement).in(element);
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

const addVenues = (data) => {
  const venueNames = data.filter(eventObj => {
    return eventObj.venue.country === 'United States';
  }).map(eventObj => {
    return eventObj.venue.name;
  });

  const ul = ezDOM('ul').attr('list').in('ch4');
  venueNames.forEach(venueName => { ezDOM('li').text(venueName).in(ul.el);  });
}

ezDOM().waitPage(() => {
  ezDOM().ezGet('https://rest.bandsintown.com/artists/Black%20keys/events?app_id=jshp',
    (response) => { addVenues(JSON.parse(response)); },
    (response) => { throw('failure!'); });
});

