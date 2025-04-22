import Profile from './components/profile/profile';
import FriendList from "./components/friendList/friendList";
import TransactionHistory from "./components/transaction/transactionHistory";

import userData from './userData.json';
import friends from "./friendsList.json";
import transactions from "./transactions.json";

function App() {

  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <hr />
      <FriendList friends={friends} />
      <hr />
      <TransactionHistory items={transactions} />
      <hr />
    </div>
  )
}

export default App