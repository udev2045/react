/* NotificationError.jsx was created 06.09.2023 23:52 */

const NotificationError = ({ message }) => {
    if (message === '') {
        return null
    }

    return (
        <div className='error'>
            {message}
        </div>
    )
}
export default NotificationError;