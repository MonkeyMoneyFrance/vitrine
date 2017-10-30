import Home from '../views/home';
import Features from '../views/features';
import Prices from '../views/prices';
import LocalCurrency from '../views/localcurrency';
import Company from '../views/company';

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
  }
];


export  default routes
