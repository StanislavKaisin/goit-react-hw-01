import React from 'react';
import Profile from './Components/Profile/Profile';
import Stats from './Components/Stats/Stats';
import PricingPlan from './Components/PricingPlan/PricingPlan';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

import USER1 from './Sources/user1.json';
import USER2 from './Sources/user2.json';
import STATS from './Sources/stats.json';
import pricingPlanItems from './Sources/pricing-plan.json';
import transactions from './Sources/transactions.json';

function App() {
  return (
    <div>
      <h2> Profile component </h2> <Profile user={USER1}> </Profile> <br />
      <Profile user={USER2}> </Profile> <br />
      <h2> Stats component </h2> <Stats stats={STATS}> </Stats> <br />
      <h2> PricingPlan component </h2>{' '}
      <PricingPlan items={pricingPlanItems}> </PricingPlan> <br />
      <h2> TransactionHistory component </h2>{' '}
      <TransactionHistory items={transactions} />{' '}
    </div>
  );
}

export default App;
