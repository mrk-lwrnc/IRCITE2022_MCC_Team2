import React, { Component } from 'react'
import axios from 'axios'
import { Themed, Flex, Button, Divider, Card, Input, Heading, Label } from 'theme-ui'

class EmployeeList extends Component {
    constructor(props) {
        super(props)
        this.state = { employeeList: [] }

        this.getEmployeeList = this.getEmployeeList.bind(this)
    }

    async componentDidMount() {
        this.getEmployeeList()
    }

    getEmployeeList() {
        axios.get('https://4000-mrklwrnc-ircite2022mccte-g8mbxxuuogr.ws-us38.gitpod.io/management/employee/')
        .then(result => {
            this.setState({ employeeList: result.data.employee })
            console.log(this.state.employeeList)
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div sx={{
                    marginTop: 2,
                    padding: 4,
                    borderRadius: 4,
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                }}>
                    <Heading sx={{ marginBottom: 3 }}>Create Employee</Heading>
                    <Label htmlFor='employeeID'>First Name</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeeID' id='employeeFirstName' />
                    <Label htmlFor='employeeID'>Last Name</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeeLastName' id='employeeLastName' />
                    <Label htmlFor='employeeID'>Position</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeePosition' id='employeePosition' />
                    <Label htmlFor='employeeID'>Sick Leave Credits</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeeSickLeaveCredits' id='employeeSickLeaveCredits' />
                    <Label htmlFor='employeeID'>Vacation Leave Credits</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeeVacationLeaveCredits' id='employeeVacationLeaveCredits' />
                    <Label htmlFor='employeeID'>Hourly Rate</Label>
                    <Input sx={{ flex: '1 1 0', marginBottom: 3, maxWidth: '30em' }} name='employeeHourlyRate' id='employeeHourlyRate' />
                    <Button>Create</Button>
                </div>
                <Divider />
                <Themed.table>
                    <Themed.tr>
                        <Themed.th>ID</Themed.th>
                        <Themed.th>First Name</Themed.th>
                        <Themed.th>Last Name</Themed.th>
                        <Themed.th>Position</Themed.th>
                        <Themed.th>Sick Leave Credits</Themed.th>
                        <Themed.th>Vacation Leave Credits</Themed.th>
                        <Themed.th>Hourly Rate</Themed.th>
                        <Themed.th>Actions</Themed.th>
                    </Themed.tr>
                    {
                        this.state.employeeList.map(({id, firstName, lastName, position, sickLeaveCredits, vacationLeaveCredits, hourlyRate}) => {
                            return (
                                <Themed.tr key={id}>
                                    <Themed.td>{id}</Themed.td>
                                    <Themed.td>{firstName}</Themed.td>
                                    <Themed.td>{lastName}</Themed.td>
                                    <Themed.td>{position}</Themed.td>
                                    <Themed.td>{sickLeaveCredits}</Themed.td>
                                    <Themed.td>{vacationLeaveCredits}</Themed.td>
                                    <Themed.td>{hourlyRate}</Themed.td>
                                    <Themed.td>
                                        <Flex sx={{flexDirection: 'column'}}>
                                            <Button color='text' bg='background' sx={{marginBottom: 1, border: '1px solid'}}>Update</Button>
                                            <Button color='text' bg='background' sx={{marginBottom: 1, border: '1px solid'}}>Delete</Button>
                                        </Flex>
                                    </Themed.td>
                            </Themed.tr>
                            )
                        })
                    }
                </Themed.table>
            </div>
        )
    }
}

export default EmployeeList