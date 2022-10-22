export class TrmrkApp {
    localStorageKeys = {
        bodyFontSize: 'trk-body-font-size'
    }

    fontSizeOpts = [12, 13, 14, 16, 18, 20, 24];
    fontSizeSelectorEl;
    fontSizeSelectorLabelEl;
    fontSize;

    run() {
        this.fontSizeChanged();
        this.addFontSizeSelector();
        this.fontSizeSelectorEl.value = this.fontSize;

        window.addEventListener("focus", e => {
            this.fontSizeChanged();
            this.fontSizeSelectorEl.value = this.fontSize;
        });
    }

    fontSizeChanged(fontSize) {
        this.fontSize = fontSize || this.getFontSizeFromStorage() || this.fontSizeOpts[0];
        document.body.style.fontSize = this.fontSize + "px";

        this.setFontSizeToStorage(this.fontSize);
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
            const optEl = this.createEl(
                "option", {
                    value: fontSize
                }, null, fontSize);
            
            this.fontSizeSelectorEl.append(optEl);
        }

        document.body.insertBefore(this.fontSizeSelectorLabelEl, document.body.firstChild);
        this.fontSizeSelectorLabelEl.after(this.fontSizeSelectorEl);
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
}

document.addEventListener("DOMContentLoaded", function() {
  window.trmrk = new TrmrkApp();
  window.trmrk.run();
});

