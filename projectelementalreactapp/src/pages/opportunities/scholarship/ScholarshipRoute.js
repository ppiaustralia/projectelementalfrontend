import FullScholarship from './pages/FullScholarship';
import PartialScholarship from './pages/PartialScholarship';
import Exchange from './pages/ExchangeProgram';

const ScholarshipRoute = [
  {
    title: 'Full Scholarship',
    path: '/full-scholarship',
    component: FullScholarship
  },
  {
    title: 'Partial Scholarship',
    path: '/partial-scholarship',
    component: PartialScholarship
  },
  {
    title: 'Exchange Program',
    path: '/exchange',
    component: Exchange
  }
];

export default ScholarshipRoute;
