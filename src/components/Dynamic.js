import React, { useEffect, useState } from 'react'
import {Row, Col, Container } from "react-bootstrap";

import styles from "./Card.module.css";
import Card from "./Card";

export default function Dynamic() {
    const [propertyData, setpropertyData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://reqres.in/api/users?page=2')
            const salepropData = await response.json()
            setpropertyData(salepropData.data)
        }
        fetchData()
    }, [])

    return (
        <main className={styles.section}>
            <section className={styles.container}>
                <div className={styles.layout}>
                {propertyData.map((propertyData, k) => (
                    <Card
                    key={k}
                    title={propertyData.first_name}
                    likes={Math.floor(Math.random() * (50 - 0) + 0)}
                    order={propertyData.last_name}
                    image={propertyData.avatar}
                    />
                ))}
                </div>
            </section>
        </main>
    )
    // return (
    //     <Container>
    //         <Row>
    //             {propertyData.map((propertyData, k) => (
    //                 <Col key={k} xs={12} md={4} lg={3}>
    //                     <Card className="w-96">
    //                         <CardHeader color="blue" className="relative h-56">
    //                             <img
    //                             src={propertyData.avatar}
    //                             alt="img-blur-shadow"
    //                             className="h-full w-full"
    //                             />
    //                         </CardHeader>
    //                         <CardBody className="text-center">
    //                             <Typography variant="h5" className="mb-2">
    //                             Cozy 5 Stars Apartment
    //                             </Typography>
    //                             <Typography>
    //                             The place is close to Barceloneta Beach and bus stop just 2 min by
    //                             walk and near to "Naviglio" where you can enjoy the main night life in
    //                             Barcelona.
    //                             </Typography>
    //                         </CardBody>
    //                         <CardFooter divider className="flex items-center justify-between py-3">
    //                             <Typography variant="small">$899/night</Typography>
    //                             <Typography variant="small" color="gray" className="flex gap-1">
    //                             <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
    //                             Barcelona, Spain
    //                             </Typography>
    //                         </CardFooter>
    //                         </Card>
    //                     {/* <Card >
    //                         <Card.Img src={propertyData.avatar} />

    //                         <Card.Body>
    //                             <Card.Title>{propertyData.first_name}</Card.Title>
    //                             <Card.Text>{propertyData.last_name}</Card.Text>
    //                         </Card.Body>
    //                     </Card> */}
    //                 </Col>
    //             ))}
    //         </Row>
    //     </Container>
    // )
}