import Dashboard from './AppContent/Dashboard'
import { QuizContent } from './AppContent/Quiz'

const Content = ({ pageName }) => {
    if (pageName === 'Dashboard') {
        return(
            <Dashboard />
        )
    } else if (pageName === 'Quiz') {
        return(
            <QuizContent />
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Content