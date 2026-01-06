// isInteger polyfill https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
Number.isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' && 
      isFinite(value) && 
      Math.floor(value) === value;
}

// foreach polyfill https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this)
        }
    }
}

class TOC {
    constructor(scrollSelector, level) {
        this.scrollContainer
        this.tocElement
        this.level = typeof level === "number" ? level : 0
        this.tocNodeList = []
        this.entryNodeList = []
        this.entryNodeOffsets = []

        this._firstInit = true

        if(!!this._firstInit) {
            window.addEventListener("DOMContentLoaded", e => {
                this.onDomLoaded()
            });
            window.addEventListener("load", e => {
                this.init(scrollSelector)
            });
        }
    }
    onDomLoaded() {
        this.tocElement = TOC.helper.levelHandler("#table-of-contents", this.level)
        this.tocElement.style.visibility = 'visible'
    }
    init(scrollSelector) {
        let throttled = TOC.helper.throttled
        this.scrollContainer = document.querySelector(scrollSelector)
        this.tocElement = document.querySelector("#table-of-contents")
        this.handleData()
        // when resizing, reinit
        if (!!this._firstInit) {
            let resizeTimer;
            window.addEventListener('resize', e => {
                clearTimeout(resizeTimer)
                resizeTimer = setTimeout(() => {
                    this.init(scrollSelector)
                }, 250)
            })
            let handleHighlight = throttled(20, (e) => this.highlight())
            this.scrollContainer.addEventListener("scroll", handleHighlight)
        } 
        this.highlight()
        // first init end
        this._firstInit = false
    }
    handleData() {
        this.tocNodeList = []
        this.entryNodeList = []
        this.entryNodeOffsets = []
        // select all entries from toc container
        this.tocNodeList = this.tocElement.querySelectorAll(".toc-entry")
        // select all corresponding heading tag nodes from every entry
        this.tocNodeList.forEach( i => {
            let href = i.querySelector("a").getAttribute("href").toString()
            this.entryNodeList.push(document.querySelector(href))
        })
        // calculate offsetTop of each heading tag
        this.entryNodeList.forEach( i => {
            this.entryNodeOffsets.push(i.offsetTop - 40) // 40 offset
        })
    }
    // add event listener to highlight current item on scroll
    highlight() {
        let findIndex = TOC.helper.findNearestNumIndexInAsendingArray
        try {
            this.tocElement.querySelector(".active").classList.remove("active")
        } catch(e) {}
        let num = this.scrollContainer.scrollTop 
        if (num < this.entryNodeOffsets[0]) return
        let index = findIndex(num, this.entryNodeOffsets)
        try {
            this.tocNodeList[index].querySelector("a").classList.add("active")
        } catch(e) {}
    }
}

TOC.helper = {
    getElementTop(element) {
        let actualTop = element.offsetTop
        let current = element.offsetParent
        while (current !== null){
            actualTop += current.offsetTop
            ;current = current.offsetParent
        }
        return actualTop
    },
    findNearestNumIndexInAsendingArray(num, array) {
        if (!Array.isArray(array)) return
        if (!Number.isInteger(num)) return
        let largeIndex = array.length - 1
        let smallIndex = 0
        let currIndex = Math.floor(largeIndex / 2)
        while (!(currIndex == largeIndex || currIndex == smallIndex)) {
            if (num === array[currIndex]) {
                return currIndex
            } else if (num > array[currIndex]) {
                smallIndex = currIndex
                ;currIndex = Math.floor((currIndex + largeIndex) / 2)
            } else {
                largeIndex = currIndex
                ;currIndex = Math.floor((currIndex + smallIndex) / 2)
            }
            if (largeIndex - smallIndex === 1) {
                if (num >= array[largeIndex])
                    return largeIndex
            } 
        }
        return currIndex
    },
    throttled(delay, fn) {
        let lastCall = 0
        return function (...args) {
          const now = (new Date).getTime()
          if (now - lastCall < delay) {
            return
          }
          lastCall = now
          return fn(...args)
        }
    },
    levelHandler(selector, level) {
        let tocElement = document.querySelector(selector)
        // level handler
        // if level is set, remove all following level nodes
        if (!!level) {
            tocElement.querySelectorAll(".toc-h" + level).forEach(i => {
                try {
                    i.querySelector("ul").remove()
                } catch(e) {}
            })
            var removeLevels = [];
            for (var index = level + 1; index < 10; index++) removeLevels.push(".toc-h" + index);
            tocElement.querySelectorAll(removeLevels.join(",")).forEach(i => {
                try {
                    i.remove();
                } catch (e) {}
            });
        }
        return tocElement
    }
}