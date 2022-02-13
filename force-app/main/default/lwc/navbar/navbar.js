import { LightningElement } from 'lwc';

export default class Navbar extends LightningElement {

    navbarlinksActive() {
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
        })
    }
    scrollto(el){
        let elementPos = select(el).offsetTop
        window.scrollTo({
          top: elementPos,
          behavior: 'smooth'
        })
    }

}