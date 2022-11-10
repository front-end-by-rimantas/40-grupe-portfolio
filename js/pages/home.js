// IMPORTS
import renderHobbies from '../components/hobbies.js';
import Gallery from '../components/Gallery.js';

const portfolioGallery = new Gallery();
console.log(portfolioGallery.render());

// EXECUTION
(async () => {

    /* HEADER-start */
    /* HEADER-end */

    /* HERO-start */
    /* HERO-end */

    /* ABOUT-ME-start */
    /* ABOUT-ME-end */

    /* HOBBIES-start */

    // fetch('./data/hobbies.json')
    //     .then((data) => data.json())
    //     .then((data) => {
    //         const hobbiesResponse = renderHobbies('hobbies', data);
    //         if (hobbiesResponse[0]) {
    //             console.error(hobbiesResponse[1]);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // async/await
    try {
        const response = await fetch('./data/hobbies.json');
        const data = await response.json();
        const hobbiesResponse = renderHobbies('hobbies', data);
        if (hobbiesResponse[0]) {
            console.error(hobbiesResponse[1]);
        }
    } catch (error) {
        console.log(error);
    }
    /* HOBBIES-end */

    /* ACHIEVEMENTS-start */
    /* ACHIEVEMENTS-end */

    /* SERVICES-start */
    /* SERVICES-end */

    /* WORK-start */
    /* WORK-end */

    /* EXPERTISE-start */
    /* EXPERTISE-end */

    /* PORTFOLIO-start */
    try {
        const response = await fetch('./data/portfolio.json');
        const data = await response.json();
        console.log(data);
    } catch (error) {

    }
    /* PORTFOLIO-end */

    /* TESTIMONIALS-start */
    /* TESTIMONIALS-end */

    /* HIRE-ME-start */
    /* HIRE-ME-end */

    /* CONTACTS-start */
    /* CONTACTS-end */

    /* FOOTER-start */
    /* FOOTER-end */
})();