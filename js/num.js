class Num extends Box {
    constructor(className, num) {
        super(className);
        this.num = num;
    }

    render() {
        let div = document.createElement('div');
        div.classList.add(this.className);

        let span = document.createElement('span');
        span.textContent = this.num;
        div.appendChild(span);

        let box = document.querySelector('.box');
        box.appendChild(div);
    }
}