import React from 'react';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Stats/Stats';
import PricingPlan from './Components/PricingPlan/PricingPlan';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
// import './App.css';

import USER1 from './Sources/user1.json';
import USER2 from './Sources/user2.json';
import STATS from './Sources/stats.json';
import pricingPlanItems from './Sources/pricing-plan.json';
import transactions from './Sources/transactions.json';

// console.log('USER1=', USER1);
// console.log('STATS=', STATS);
// console.log('pricingPlanItems=', pricingPlanItems);
// console.log('transactions=', transactions);

function App() {
  return (
    <div>
      <Profile user={USER1}> </Profile> <Profile user={USER2}> </Profile>{' '}
      <Stats stats={STATS}> </Stats>{' '}
      <PricingPlan items={pricingPlanItems}> </PricingPlan>{' '}
      <TransactionHistory items={transactions} />{' '}
    </div>
  );
}

export default App;
