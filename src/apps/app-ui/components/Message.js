import React from 'react'

const Content = ({ text }) => <p>{text}</p>

export default ({ type }) => {
    const renderContent = () => {
        switch (type) {
            case 'error':
                return <Content text="Ошибка сервера" />
            default:
                throw new Error('[Message component] Invalid type')
        }
    }

    return renderContent()
}