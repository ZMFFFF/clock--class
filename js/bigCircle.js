class BigCircle {
    constructor(className) {
        this.className = className;
    }

    render() {
        let div = document.createElement('div');
        div.classList.add(this.className);
        document.body.appendChild(div);
    }
}