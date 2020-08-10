import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons'
import Skeleton from './Skeleton'
import Message from './Message'

import '../styles/Default.css'
import '../styles/Section.css'

const Query = ({ query, variables, component }) => {
    const { loading, error, data } = useQuery(query, { variables })

    const renderContent = () => component && component(data)

    if (loading) return <Skeleton component="section" />
    if (error) return <Message type="error" />

    return renderContent()
}

export default (props) => {
    const {
        name='default',
        icon=faSkull,
        headline='Section Name',
        properties=[],
        query=null,
        variables={}
    } = props.options || {}

    const classes = [
        'ui-section',
        name, ...properties
    ]

    const data = 'Content'

    if (query) return <Query
        query={query}
        variables={variables}
        component={props.children}
    />

    return (
        <section className={classes.join(' ')}>
            <h2><FontAwesomeIcon icon={icon} />{headline}</h2>
            {props.children && props.children(data)}
        </section>
    )
}