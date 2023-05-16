class Dot extends Box {
    constructor(className) {
        super(className);
    }

    render() {
        let div = document.createElement('div');
        div.classList.add(this.className);

        let span = document.createElement('span');
        div.appendChild(span);

        let box = document.querySelector('.box');
        box.appendChild(div);
    }
}