class Gallery {
    constructor(selector, dataURL) {
        this.selector = selector || '';
        this.dataURL = dataURL || '';
        this.DOM = null;
        this.data = [];

        this.init();
    }

    async init() {
        const validSelector = this.isValidSelector();
        const validData = await this.getData();

        if (!validSelector || !validData) {
            return;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            console.error('Selectorius turi buti stringas');
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    async getData() {
        try {
            const dataResponse = await fetch(this.dataURL);
            this.data = await dataResponse.json();
        } catch (error) {
            console.log(error);
            this.data = [];
        }
        return Array.isArray(this.data);
    }

    filterHTML() {
        let HTML = '';

        return HTML;
    }

    contentHTML() {
        let HTML = '';
        for (const item of this.data) {
            HTML += `<div class="card">
                                <img src="./img/portfolio/${item.img}">
                                <div>
                                    <div>${item.title}</div>
                                    <div>${item.tags[0]}</div>
                                </div>
                            </div>`;
        }
        return HTML;
    }

    render() {
        let HTML = `<div class="filter">${this.filterHTML()}</div>
                    <div class="content">${this.contentHTML()}</div>`;

        this.DOM.classList.add('gallery');
        return (this.DOM.innerHTML = HTML);
    }
}

export default Gallery;
