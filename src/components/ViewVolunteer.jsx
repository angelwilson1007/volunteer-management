import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'


const ViewVolunteer = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3000/view-volunteer").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )

    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>

            <Navigation/>

            <div className="container mt-4">

                <h2 className="text-center mb-4">View Team Details</h2>

                <table className="table table-bordered table-striped table-hover">

                    <thead className="table-dark">
                        <tr>
                            <th>Team ID</th>
                            <th>Team Name</th>
                            <th>Team Leader</th>
                            <th>Leader Email</th>
                            <th>Leader Phone</th>
                            <th>College Name</th>
                            <th>No. of Members</th>
                            <th>Project Title</th>
                            <th>Problem Statement Track</th>
                            <th>Technology Stack</th>
                            <th>Mentor Name</th>
                            <th>Registration Date</th>
                            <th>Table / Station No.</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            data.map(
                                (value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{value.teamId}</td>
                                            <td>{value.teamName}</td>
                                            <td>{value.teamLeaderName}</td>
                                            <td>{value.leaderEmail}</td>
                                            <td>{value.leaderPhone}</td>
                                            <td>{value.collegeName}</td>
                                            <td>{value.numberOfMembers}</td>
                                            <td>{value.projectTitle}</td>
                                            <td>{value.problemStatementTrack}</td>
                                            <td>{value.technologyStack}</td>
                                            <td>{value.mentorName}</td>
                                            <td>{value.registrationDate}</td>
                                            <td>{value.tableStationNumber}</td>
                                        </tr>
                                    )
                                }
                            )
                        }

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ViewVolunteer