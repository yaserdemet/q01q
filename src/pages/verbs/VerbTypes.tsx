import VerbType from '@/components/verbs/type/VerbType'
import MetaData from '@/lib/MetaData'
import { MapPinCheckIcon } from 'lucide-react'
import React from 'react'
import Header from '@/components/ui/Header'

const VerbTypes = () => {
  return (
    <>
     <MetaData title="Verb Types - q01q" description="Verb Types" />
      <Header
        header="Verb Types"
        explanation="This map shows the places where the Qur'an was revealed."
        Icon={MapPinCheckIcon}
        color="text-blue-500"
      >   
      <VerbType />
      </Header>
    
    </>
  )
}

export default VerbTypes