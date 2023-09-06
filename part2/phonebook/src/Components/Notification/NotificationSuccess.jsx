/* NotificationSuccess.jsx was created 07.09.2023 0:00 */
import css from "./NotificationSuccess.module.css"

const NotificationSuccess = ({ message }) => {
    if (message === '') {
        return null
    }

    return (
        <div className='success'>
            {message}
        </div>
    )
}
export default NotificationSuccess;