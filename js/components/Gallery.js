class Gallery {
    constructor(selector, dataURL) {
        this.selector = selector || '';
        this.dataURL = dataURL || '';
        this.DOM = null;
        this.filterOrder = 'initial';
        this.listOrder = 'initial';
        this.data = [];
        this.filteredData = [];
        this.filterTags = null;

        this.init();
    }

    async init() {
        const validSelector = this.isValidSelector();
        const validData = await this.getData();

        if (!validSelector || !validData) {
            return;
        }

        this.filterData();
        this.collectFilterTags();
        // this.orderFilterTags();
        // this.orderFilteredData();
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
        return typeof this.data === 'object';
    }

    filterData() {
        for (const item of this.data.dataList) {
            if (item.draft) {
                continue;
            }
            const allowedKeys = ['img', 'title', 'tags', 'draft'];
            this.filteredData.push(item);
        }
    }

    collectFilterTags() {
        const uniqueTags = {};

        for (const item of this.filteredData) {
            for (const tag of item.tags) {
                if (uniqueTags[tag]) {
                    uniqueTags[tag]++;
                } else {
                    uniqueTags[tag] = 1;
                }
            }
        }

        return (this.filterTags = uniqueTags);
    }

    filterHTML() {
        let HTML = '';
        for (const tag in this.filterTags) {
            HTML += `<div class="tag">${tag}</div>`;
        }
        return HTML;
    }

    contentHTML() {
        let HTML = '';
        for (const item of this.filteredData) {
            HTML += `<div class="card">
                        <img src="${this.data.imgFolder + item.img}">
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

// filterHTML() {
//     const uniqueTags = new Set();
//     let HTML = '';

//     for (const item of this.data) {
//         for (const tag of item.tags) {
//             uniqueTags.add(tag);
//         }
//     }

//     for (const tag of uniqueTags) {
//         HTML += `<div class="tag">${tag}</div>`;
//     }

//     return HTML;
// }

// filterHTML() {
//     const uniqueTags = [];
//     let HTML = '';

//     for (const item of this.data) {
//         for (const tag of item.tags) {
//             if (uniqueTags.includes(tag)) {
//                 continue;
//             }
//             uniqueTags.push(tag);
//             HTML += `<div class="tag">${tag}</div>`;
//         }
//     }

//     return HTML;
// }
