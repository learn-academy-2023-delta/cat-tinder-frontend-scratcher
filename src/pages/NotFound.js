import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap'

const NotFound = () => {
  return (
    <>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        404 Page Not Found
      </CardTitle>
      <CardText>
      You are lost my friend.
      </CardText>
    </CardBody>
  </Card>
    </>
  )
}

export default NotFound