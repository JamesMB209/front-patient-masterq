import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import login_img from '../assets/6.png';

export default function InQueue(props) {
   /** Load inital stores/page const */
  const patientObj = useSelector((state) => state.patientObjStore)

  return (
    <Container>
      <Row>
        <Col lg={5} sm={12}>
          {patientObj.queuePosition > 0 ? (
            /** In the queue */
            <div className="queue_box pt-5">
              {patientObj.state === "PHARMACY" ? (
                <div className="overlap_box_pharmacy">
                  <h4>{patientObj.assigned.doctor}</h4>
                </div>
              ) : (
                <div className="overlap_box_doctor">
                  <h4>Dr. {patientObj.assigned.doctor}</h4>
                  <h4>Room {patientObj.assigned.room}</h4>
                </div>
              )}

              <h5 className="my-3 pt-5">Hello {patientObj.f_name},</h5>
              <h5 className="m-5">
                Your position in the {patientObj.state.toLowerCase()} queue
              </h5>
              <h3>{patientObj.queuePosition}</h3>
              <h5 className="m-5">Estimated Wait Time</h5>
              <h3>{patientObj.queuePosition * props.waitTime} minutes</h3>
            </div>
          ) : (
            /** First in-line to the room and whilst inside room. */
            <div className="queue_box_ready pt-5">
              <div className="overlap_box_ready">
                <h3>Thank you for waiting</h3>
              </div>
              <h4 className="ready_text">
                Please go to <br /> </h4>
                {patientObj.state === "PHARMACY" ? (
               
                    <h4 className="ready_text">
                      <strong>Pharmacy </strong>
                      <br />
                      for your drug prescription
                    </h4>
                
                ) : (
                  <h4 className="ready_text">
                    <strong> Room {patientObj.assigned.room} </strong>
                    <br />
                    for
                    <br />
                    <strong>Dr. {patientObj.assigned.doctor}</strong>
                  </h4>
                )}
                {/*      <strong> {patientObj.assigned.room} </strong>
                <br />
                  for <br />
                <strong>{patientObj.assigned.doctor}</strong>  */}
              
            </div>
          )}
        </Col>
        <Col lg={7} sm={12} className="login-right">
          <img src={login_img} alt="login-img" className="login-img" />
        </Col>
      </Row>
    </Container>
  );
}