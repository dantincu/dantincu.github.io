export class TrmrkApp {
    localStorageKeys = {
        bodyFontSize: 'trk-body-font-size'
    }

    fontSizeOpts = [12, 13, 14, 16, 18, 20, 24, 28, 32, 36, 40];
    fontSizeSelectorEl;
    fontSizeSelectorLabelEl;
    fontSize;
    // bottomStickyEl;

    run() {
        this.addFontSizeSelector();
        this.fontSizeChanged(true);

        window.addEventListener("focus", e => {
            this.fontSizeChanged(true);
        });

        // this.addFakeBottomStickyEl();
    }

    fontSizeChanged(fontSize) {
        if (fontSize === true) {
            fontSize = this.getFontSizeFromStorage();
        }
        
        if (fontSize && fontSize !== this.fontSize) {
            this.fontSize = fontSize;
            document.body.style.fontSize = this.fontSize + "px";
            
            this.fontSizeSelectorEl.value = this.fontSize;
            this.setFontSizeToStorage(this.fontSize);
        }
    }

    getFontSizeFromStorage() {
        const fontSize = localStorage.getItem(this.localStorageKeys.bodyFontSize);
        return fontSize;
    }

    setFontSizeToStorage(fontSize) {
        localStorage.setItem(this.localStorageKeys.bodyFontSize, fontSize);
    }

    addFontSizeSelector() {
        this.fontSizeSelectorLabelEl = this.createEl(
            "label", { "class": "trk-label" }, null, "Select font size"
        );

        this.fontSizeSelectorEl = this.createEl(
            "select", {
                class: "trk-combo-box"
            }, [{
                name: "change",
                listener: e => this.fontSizeChanged(e.target.value)
            }]);

        for (let fontSize of this.fontSizeOpts) {
            const currentFontSizePx = getComputedStyle(document.body).fontSize;
            const currentFontSize = parseInt(currentFontSizePx.substring(0, currentFontSizePx.length - 2))

            const attrs = {
                value: fontSize
            };

            if (fontSize === currentFontSize){
                attrs.selected = true;
            }

            const optEl = this.createEl(
                "option", attrs, null, fontSize);
            
            this.fontSizeSelectorEl.append(optEl);
        }

        document.body.insertBefore(this.fontSizeSelectorLabelEl, document.body.firstChild);
        this.fontSizeSelectorLabelEl.append(this.fontSizeSelectorEl);
    }

    createEl(nodeName, attrs, events, innerText) {
        const el = document.createElement(nodeName);
        
        if (attrs) {
            for (let key in attrs) {
                el.setAttribute(key, attrs[key]);
            }
        }

        if (events) {
            for (let evt of events) {
                if ((evt.options ?? false) || evt.options === false) {
                    el.addEventListener(evt.name, evt.listener, evt.options);
                } else {
                    el.addEventListener(evt.name, evt.listener);
                }
            }
        }

        if (typeof innerText === "string") {
            el.innerText = innerText;
        } else if ((innerText ?? false) || innerText == false) {
            el.innerText = innerText.toString();
        }

        return el;
    }

    /* addFakeBottomStickyEl() {
        this.bottomStickyEl = this.createEl(
            "div", { class: "trk-fake-bottom-sticky" });
        
        document.body.append(this.bottomStickyEl);
    } */
}

document.addEventListener("DOMContentLoaded", function() {
  window.trmrk = new TrmrkApp();
  window.trmrk.run();
});

