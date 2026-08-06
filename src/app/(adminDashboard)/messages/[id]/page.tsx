import React from 'react'
import MessagesContainer from './_components/MessagesPage'
import { mockConversations, mockThreads } from '@/data/message'

export default function MessagePage() {
  return (
    <div>
        <MessagesContainer
          conversations={mockConversations}
          threads={mockThreads}
        />
     
    </div>
  )
}
