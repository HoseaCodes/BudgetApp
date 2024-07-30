import React from 'react'
import { OnboardFlow } from 'react-native-onboard'

export default function OnboardFlowScreen({ onDone }) {

  return (
    <OnboardFlow
      pages={[
        {
          title: 'Welcome to my app',
          subtitle: 'This is page 1',
          imageUri: 'https://frigade.com/img/example1.png',
        },
        {
          title: 'Card Budget',
          subtitle: 'Simple money tracking',
          imageUri: 'https://frigade.com/img/example2.png',
        },
        {
          title: 'Useful Stats',
          subtitle: 'Track Your Spending',
          imageUri: 'https://frigade.com/img/example2.png',
        },
        {
          title: 'Calendar View',
          subtitle: 'Daily Spending at a Glance',
          imageUri: 'https://frigade.com/img/example2.png',
        },
        {
          title: 'Share & Collaborate',
          subtitle: 'Track Spending Together',
          imageUri: 'https://frigade.com/img/example2.png',
        },
        {
          title: 'Multiple Ledgers',
          subtitle: 'Different Ledgers for Different Purpose',
          imageUri: 'https://frigade.com/img/example2.png',
        },
      ]}
      type={'fullscreen'}
      onDone={onDone}
    />
  )
}