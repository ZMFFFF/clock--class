class SmallCircle extends BigCircle {
    constructor(className) {
        super(className);
    }

    render() {
        let div = document.createElement('div');
        div.classList.add(this.className);

        let bigCircle = document.querySelector('.outer');
        bigCircle.appendChild(div);
    }
}