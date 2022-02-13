import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class Hero extends NavigationMixin(LightningElement) {
    
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

    navigateToGithub() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://github.com/edelvi'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    navigateToTrailhead() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://trailblazer.me/id/etreto'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    navigateToPdf() {
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://drive.google.com/file/d/1z5-dHQSTvSkqJVLfPgD_svRKEakK5c5x/view?usp=sharing'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }
}