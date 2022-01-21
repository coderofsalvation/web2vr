import TextElement from "./textElement";

export default class InputElement extends TextElement {
    constructor(web2vr, domElement, layer) {
        super(web2vr, domElement, layer);
        this.borderColor = new THREE.Color(0x000000);
        this.borderWidth = 1;
        this.active = false;

        // update when there is change of value
        this.domElement.addEventListener("input", () => this.update());
        // when clicked make it active input for the keyboard and position the keyboard relative to camera
        this.entity.addEventListener("click", () => {
          document.querySelector("a-scene").emit("element-input-click",  this)
        })
    }

    updateText() {
        const value = this.domElement.value;
        if (value)
            this.textValue = value;
        else
            this.textValue = this.domElement.placeholder;
    }
    updateTextColor() {
        const value = this.domElement.value;
        if (value)
            super.updateTextColor();
        else
            this.entity.setAttribute("text", "color", "#999");

        if (this.active)
            this.entity.setAttribute("color", "#ffffcc");
    }
}
