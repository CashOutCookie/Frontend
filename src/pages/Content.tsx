import Dashboard from './AppContent/Dashboard'
import { SpendContent } from './AppContent/Spend'
import { WorkContent } from './AppContent/Work'
import { GambleContent } from './AppContent/Gamble'
import { BankContent } from './AppContent/Bank'
import { QuizContent } from './AppContent/Quiz'
import { Notifications } from './AppContent/Notifications'
import { MyProfile } from './AppContent/MyProfile'
import { CtfContent } from './AppContent/Ctf'
import { LogoutPage } from './AppContent/Logout'

const Content = ({ pageName }) => {
    if (pageName === 'Dashboard') {
        return <Dashboard />
    } else if (pageName === 'Spend') {
        return <SpendContent />
    } else if (pageName === 'Work') {
        return <WorkContent />
    } else if (pageName === 'Bank') {
        return <BankContent />
    } else if (pageName === 'Gamble') {
        return <GambleContent />
    } else if (pageName === 'Notifications') {
        return <Notifications />
    } else if (pageName === 'Profile') {
        return <MyProfile />
    } else if (pageName === 'Quiz') {
        return <QuizContent />
    } else if (pageName === 'CTF') {
        return <CtfContent />
    } else if (pageName === 'Logout') {
        return <LogoutPage />
    }
}

// Change this if/else statement to a switch one later.

export default Content