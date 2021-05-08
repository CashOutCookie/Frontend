import Dashboard from './AppContent/Dashboard'
import { QuizContent } from './AppContent/Quiz'
import { Notifications } from './AppContent/Notifications'

const Content = ({ pageName }) => {
    if (pageName === 'Dashboard') {
        return <Dashboard />
    } else if (pageName === 'Notifications') {
        return <Notifications />
    } else if (pageName === 'Quiz') {
        return <QuizContent />
    } else {
        return <></>
    }
}

export default Content