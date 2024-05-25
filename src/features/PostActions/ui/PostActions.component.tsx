import { View, Text } from 'react-native'
import React from 'react'
import LikeButton from './components/LikeButton/LikeButton.component'

export default function PostActions() {
  return (
    <View>
      <LikeButton liked />
    </View>
  )
}