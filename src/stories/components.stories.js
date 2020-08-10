import React from 'react'
import { storiesOf } from '@storybook/react'

import TournamentGrid from '../apps/app-grid/components/TournamentGrid'
import Section from '../apps/app-ui/components/Section'

storiesOf(
    'Components API', module
)
    .add(
        'Avatar', () => (
            <p>Avatar</p>
        )
    )
    .add(
        'Section', () => (
            <Section>
                {(data) => <p>{data}</p>}
            </Section>
        )
    )
    .add(
        'Hub', () => (
            <p>Hub</p>
        )
    )
    .add(
        'Hub', () => (
            <p>HubList</p>
        )
    )
    .add(
        'Carousel', () => (
            <p>Carousel</p>
        )
    )
    .add(
        'Article', () => (
            <p>Article</p>
        )
    )
    .add(
        'Profile', () => (
            <p>Profile</p>
        )
    )
    .add(
        'Offer', () => (
            <p>Offer</p>
        )
    )
    .add(
        'Transaction', () => (
            <p>Transaction</p>
        )
    )
    .add(
        'Notification', () => (
            <p>Notification</p>
        )
    )
    .add(
        'Skeleton', () => (
            <p>Skeleton</p>
        )
    )
    .add(
        'Notify', () => (
            <p>Notify</p>
        )
    )
    .add(
        'Modal', () => (
            <p>Modal</p>
        )
    )
    .add(
        'Alert', () => (
            <p>Alert</p>
        )
    )
    .add(
        'Button', () => (
            <p>Button</p>
        )
    )
    .add(
        'Input', () => (
            <p>Input</p>
        )
    )
    .add(
        'Textarea', () => (
            <p>Textarea</p>
        )
    )
    .add(
        'Checkbox', () => (
            <p>Checkbox</p>
        )
    )
    .add(
        'Select', () => (
            <p>Select</p>
        )
    )
    .add(
        'DatePicker', () => (
            <p>DatePicker</p>
        )
    )
    .add(
        'ColorPicker', () => (
            <p>ColorPicker</p>
        )
    )
    .add(
        'CounterBadge', () => (
            <p>CounterBadge</p>
        )
    )
    .add(
        'Divider', () => (
            <p>Divider</p>
        )
    )
    .add(
        'Dropdown', () => (
            <p>Dropdown</p>
        )
    )
    .add(
        'Table', () => (
            <p>Table</p>
        )
    )
    .add(
        'Search', () => (
            <p>Search</p>
        )
    )
    .add(
        'Sidebar', () => (
            <p>Sidebar</p>
        )
    )
    .add(
        'Tournament Grid', () => (
            <TournamentGrid />
        )
    )