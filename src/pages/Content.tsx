import Dashboard from './AppContent/Dashboard'
import { QuizContent } from './AppContent/Quiz'
import { Notifications } from './AppContent/Notifications'
import { CtfContent } from './AppContent/Ctf'
import { LogoutPage } from './AppContent/Logout'

const Content = ({ pageName }) => {
    if (pageName === 'Dashboard') {
        return <Dashboard />
    } else if (pageName === 'Notifications') {
        return <Notifications />
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