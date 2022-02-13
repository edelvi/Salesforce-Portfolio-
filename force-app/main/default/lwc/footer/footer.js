import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Footer extends NavigationMixin(LightningElement) {
    navigateToLinkedin() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.linkedin.com/in/etreto'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    navigateToTwitter() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://twitter.com/edelvitretodiaz'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }
}