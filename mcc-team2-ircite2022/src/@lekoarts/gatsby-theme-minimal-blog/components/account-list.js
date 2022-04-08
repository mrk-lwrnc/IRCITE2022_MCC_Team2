import React, { Component } from 'react'
import { Themed, Flex, Button, Divider } from 'theme-ui'

class EmployeeList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Flex sx={{justifyContent: 'flex-end'}}>
                    <Button>Create</Button>
                </Flex>
                <Divider />
                <Themed.table>
                    <Themed.tr>
                        <Themed.th>ID</Themed.th>
                        <Themed.th>First Name</Themed.th>
                        <Themed.th>Last Name</Themed.th>
                        <Themed.th>Email</Themed.th>
                        <Themed.th>Password</Themed.th>
                        <Themed.th>Clearance Level</Themed.th>
                    </Themed.tr>
                    <Themed.tr key='222'>
                        <Themed.td>1</Themed.td>
                        <Themed.td>John</Themed.td>
                        <Themed.td>Doe</Themed.td>
                        <Themed.td>john.doe@mailinator.com</Themed.td>
                        <Themed.td>johndoe</Themed.td>
                        <Themed.td>l1Admin</Themed.td>
                        <Themed.td>
                            <Flex sx={{flexDirection: 'column'}}>
                                <Button color='text' bg='background' sx={{marginBottom: 1, border: '1px solid'}}>Update</Button>
                                <Button color='text' bg='background' sx={{marginBottom: 1, border: '1px solid'}}>Delete</Button>
                            </Flex>
                        </Themed.td>
                    </Themed.tr>
                </Themed.table>
            </div>
        )
    }
}

export default EmployeeList