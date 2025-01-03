'use client'
import React from 'react'
import TopContent from './TopContent'

import Table from '@/src/components/blocks/tabels/Table'
import { ListHeader, ManualListData } from './ListTableData'

const List = () => {
  return (
    <div className="flex flex-col gap-4">
      <TopContent
      />
      <Table header={ListHeader} hasPagination={true} data={ManualListData} title="N건의 게시물이 검색되었습니다"/>
      </div>
  )
}

export default List