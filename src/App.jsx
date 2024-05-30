import Account from "./components/Account"
import BankCards from "./components/BankCards"
import Blog from "./components/Blog"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Help from "./components/Help"
import Notifications from "./components/Notifications"
import OverView from "./components/OverView"
import SavingAccounts from "./components/SavingAccounts"
import SendAndReceive from "./components/SendAndReceive"
import Testimonials from "./components/Testimonials"
import Tools from "./components/Tools"

function App() {

  return (
    <>
      <Header />
      <BankCards />
      <OverView />
      <SendAndReceive />
      <SavingAccounts />
      <Notifications />
      <Tools />
      <Account />
      <Testimonials />
      <Download />
      <Help />
      <Blog />
      <Footer />
    </>
  )
}

export default App
