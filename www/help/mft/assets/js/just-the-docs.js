// Event handling

function addEvent(el, type, handler) {
    if (el !== null) {
        if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
    }
}
function removeEvent(el, type, handler) {
    if (el !== null) {
      if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
    }
}

// Show/hide mobile menu

function toggleNav(){
  const nav = document.querySelector('.js-main-nav');
  const auxNav = document.querySelector('.js-aux-nav');
  const navTrigger = document.querySelector('.js-main-nav-trigger');
  const search = document.querySelector('.js-search');

  addEvent(navTrigger, 'click', function(){
    var text = navTrigger.innerText;
    var textToggle = navTrigger.getAttribute('data-text-toggle');

    nav.classList.toggle('nav-open');
    auxNav.classList.toggle('nav-open');
    navTrigger.classList.toggle('nav-open');
    search.classList.toggle('nav-open');
    navTrigger.innerText = textToggle;
    navTrigger.setAttribute('data-text-toggle', text);
    textToggle = text;
  })
}

// Site search

function initSearch() {

  // Get the generated search_data.json file so lunr.js can search it locally.

  sc = document.getElementsByTagName("script");
  source = '';

  for(idx = 0; idx < sc.length; idx++)
  {
    s = sc.item(idx);

    if(s.src && s.src.match(/just-the-docs\.js/))
    { source = s.src; }
  }

  jsPath = source.replace(/just-the-docs\.js\S*$/, '');
  jsonPath = jsPath + 'search-data.json';
  indexPath = jsPath + 'index-data.json';

  // load server generated index file
  var request = new XMLHttpRequest();
  var index;
  request.open('GET', indexPath, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      index = lunr.Index.load(data);
    } else {
      // We reached our target server, but it returned an error
      console.log('Error loading ajax request. Request status:' + request.status);
    }
  }
  request.onerror = function() {
    // There was a connection error of some sort
    console.log('There was a connection error');
  };
  request.send();

  // load data json file to gennerate search list
  var request2 = new XMLHttpRequest();
  request2.open('GET', jsonPath, true);

  request2.onload = function() {
    if (request2.status >= 200 && request2.status < 400) {
      // Success!
      var data = JSON.parse(request2.responseText);
      var keys = Object.keys(data);

      // build index process, commented out to be used to generate at server side

      // var index = lunr(function () {
      //   this.ref('id');
      //   this.field('title', { boost: 20 });
      //   this.field('content', { boost: 10 });
      //   this.field('url');
      // });

      // for(var i in data) {
      //   index.add({
      //     id: data[i].id,
      //     title: data[i].title,
      //     content: data[i].content,
      //     url: data[i].url
      //   });
      // }

      searchResults(data);
    } else {
      // We reached our target server, but it returned an error
      console.log('Error loading ajax request. Request status:' + request2.status);
    }
  };

  request2.onerror = function() {
    // There was a connection error of some sort
    console.log('There was a connection error');
  };

  request2.send();

  function searchResults(dataStore) {
    var searchInput = document.querySelector('.js-search-input');
    var searchResults = document.querySelector('.js-search-results');
    var store = dataStore;

    function hideResults() {
      searchResults.innerHTML = '';
      searchResults.classList.remove('active');
    }

    addEvent(searchInput, 'keyup', function(e){
      var query = this.value;

      searchResults.innerHTML = '';
      searchResults.classList.remove('active');

      if (query === '') {
        hideResults();
      } else {
        var results = index.search(query);

        if (results.length > 0) {
          searchResults.classList.add('active');
          var resultsList = document.createElement('ul');
          searchResults.appendChild(resultsList);

          for (var i in results) {
            var resultsListItem = document.createElement('li');
            var resultsLink = document.createElement('a');
            var resultsUrlDesc = document.createElement('span');
            var resultsUrl = store[results[i].ref].url;
            var resultsRelUrl = store[results[i].ref].relUrl;
            var resultsTitle = store[results[i].ref].title;

            resultsLink.setAttribute('href', resultsUrl);
            resultsLink.innerText = resultsTitle;
            resultsUrlDesc.innerText = resultsRelUrl;

            resultsList.classList.add('search-results-list');
            resultsListItem.classList.add('search-results-list-item');
            resultsLink.classList.add('search-results-link');
            resultsUrlDesc.classList.add('fs-2','text-grey-dk-000','d-block');

            resultsList.appendChild(resultsListItem);
            resultsListItem.appendChild(resultsLink);
            resultsLink.appendChild(resultsUrlDesc);
          }
        }

        // When esc key is pressed, hide the results and clear the field
        if (e.keyCode == 27) {
          hideResults();
          searchInput.value = '';
        }
      }
    });

    addEvent(searchInput, 'blur', function(){
      setTimeout(function(){ hideResults() }, 300);
    });
  }
}

function pageFocus() {
  var mainContent = document.querySelector('.js-main-content');
  // mainContent.focus();
  // console.log(mainContent)
}


// Document ready

function ready(){
  toggleNav();
  pageFocus();
  if (typeof lunr !== 'undefined') {
    initSearch();
  }
  codeBlock();
}

// in case the document is already rendered
if (document.readyState!='loading') ready();
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') ready();
});

// code for copying code block
function codeBlock() {
  var codeBlocks = document.querySelectorAll('pre.highlight');
  codeBlocks.forEach(function (codeBlock) {
    var copyButton = document.createElement('button');
    copyButton.className = 'copy';
    copyButton.type = 'button';
    copyButton.setAttribute('aria-label', 'Copy code to clipboard');
    copyButton.setAttribute('title', 'Click to copy');
    // Use an inline SVG for the copy icon
    copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="biograph"><path d="M8 .5c-.822 0-1.5.677-1.5 1.5h-1a.5.5 0 0 0-.5.5V3H3.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H11v-.5a.5.5 0 0 0-.5-.5h-1C9.5 1.177 8.822.5 8 .5zm0 1c.282 0 .5.218.5.5v.5A.5.5 0 0 0 9 3h1v1H6V3h1a.5.5 0 0 0 .5-.5V2c0-.282.218-.5.5-.5zM4 4h1v.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V4h1v10H4V4zm1 2v2h2V6H5zm0 3v1h6V9H5zm0 2v1h4v-1H5z" color="#000" font-family="sans-serif" font-weight="400" overflow="visible" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;white-space:normal;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1"></path></svg>';
    codeBlock.append(copyButton);
    copyButton.addEventListener('click', function () {
      var code = codeBlock.querySelector('code').textContent.trim();
      window.navigator.clipboard.writeText(code);
      copyButton.classList.add('success'); 
      setTimeout(function () {
        copyButton.classList.remove('success'); 
      }, 3000); 
    });
  });
}