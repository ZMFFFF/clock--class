class Box extends SmallCircle {
    constructor(className) {
        super(className);
    }

    render() {
        let div = document.createElement('div');
        div.classList.add(this.className);

        let smallCircle = document.querySelector('.inner');
        smallCircle.appendChild(div);
    }
}