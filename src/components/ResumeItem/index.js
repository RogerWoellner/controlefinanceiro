import React from 'react'
import * as C from "./styles"

const ResumeItem = ({title, Icon, value}) => {
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon/>
            </C.Header>
            <C.total>{value}</C.total>
        </C.Container>
    )
}

export default ResumeItem