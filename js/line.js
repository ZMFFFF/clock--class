class Line extends Box {
    constructor(className) {
        super(className);
    }

    render() {
        let div = document.createElement('div');
        let classNames = this.className.split(' ');
        if (classNames.length > 0) {
            classNames.forEach(function (cn) {
                div.classList.add(cn);
            })
        }

        let span = document.createElement('span');
        div.appendChild(span);

        let box = document.querySelector('.box');
        box.appendChild(div);
    }
}