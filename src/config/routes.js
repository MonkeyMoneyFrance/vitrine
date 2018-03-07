import Home from '../views/home';
import Features from '../views/features';
import Prices from '../views/prices';
import LocalCurrency from '../views/localcurrency';
import Company from '../views/company';
<<<<<<< HEAD
import ContactForm from '../views/contactform';
=======
import ContactForm from '../views/contactform'

>>>>>>> a9adf5665efba87c28c6ea6282ec5c2bfb85617c
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
<<<<<<< HEAD
  },{ path: '/contactez_nous',
=======
  },{ path: '/contactez-nous',
>>>>>>> a9adf5665efba87c28c6ea6282ec5c2bfb85617c
      exact : true,
      main: ContactForm,
  }
];


export  default routes
