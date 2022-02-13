import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class Portfolio extends NavigationMixin(LightningElement) {

    navigateToProject1() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://github.com/edelvi/Lomas-de-Banao'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    navigateToProject2() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://github.com/edelvi/Plants'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    navigateToProject3() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://github.com/edelvi/Salesforce-Portfolio-'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

}