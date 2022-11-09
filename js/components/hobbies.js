function renderHobbies(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Pagal pateikta selector nepavyko rasti norimo elemento'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <i class="fa fa-${item.icon}"></i>
                    ${item.text}
                </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderHobbies;
