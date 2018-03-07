import Home from '../views/home';
import Features from '../views/features';
import Prices from '../views/prices';
import LocalCurrency from '../views/localcurrency';
import Company from '../views/company';

import ContactForm from '../views/contactform';



const routes = [
    { path: '/',
      exact : true,
      main: Home,
  },{ path: '/fonctionnalites',
      exact : true,
      main: Features,
  },{ path: '/offres',
      exact : true,
      main: Prices,
  },{ path: '/monnaielocale',
      exact : true,
      main: LocalCurrency,
  },{ path: '/monkeymoney',
      exact : true,
      main: Company,

  },{ path: '/contactez_nous',

  },{ path: '/contactez-nous',

      exact : true,
      main: ContactForm,
  }
];


export  default routes
